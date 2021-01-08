<template>
  <div class="potter">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PageTitle title="Potter API" msg="Welcome to the Potter API page" />
    <div>
      <h1>This is the characters page.</h1>
      <form v-on:submit.prevent="getCharacters">
        <button type="sumbit">Go</button>
      </form>
      <ul v-if="characters && characters.length > 0">
        <li v-for="character in characters" :key="character.name">
          <p>{{ character.name }}</p>
          <img v-bind:src="character.image" />
          <p>{{ character.patronus }}</p>
          <p>{{ character.house }}</p>
          <p>{{ character.dateOfBirth }}</p>
          <p>{{ character.ancestry }}</p>
          <p>{{ character.wand.wood }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import PageTitle from '@/components/PageTitle.vue';
  import axios from 'axios';

  export default {
    name: 'Potter',
    components: {
      PageTitle,
    },
    data() {
      return {
        characters: [],
      };
    },
    // mounted() {
    //   this.getCharacters();
    // },
    methods: {
      getCharacters() {
        axios
          .get('http://hp-api.herokuapp.com/api/characters')
          .then((result) => {
            console.log(result.data);

            this.characters = result.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway|Shadows+Into+Light');
  .word-search {
    font-size: 1.4rem;
    white-space: nowrap;
    display: inline-block;
    width: 70%;
  }
  .results-container {
    clear: both;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    width: 300px;
    min-height: 300px;
    border: solid 1px #e8e8e8;
    padding: 10px;
    margin: 5px;
  }
  a {
    color: #ffce00;
    text-decoration: none;
  }
  .active {
    color: rgb(106, 240, 233);
    border-top: 1px solid rgb(106, 240, 233);
    border-bottom: 1px solid rgb(106, 240, 233);
  }
  .result-word {
    font-weight: 700;
    font-size: 1.2rem;
    font-family: 'Shadows Into Light', cursive;
    text-transform: uppercase;
  }
  .attribute {
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
  }
  .item p {
    text-align: left;
  }
  .potter {
    font-size: 1.4rem;
    background-color: #150303;
    color: #fff;
    padding: 60px 0;
  }
  .Hufflepuff li {
    display: inline-block;
    margin: 10px;
    border: solid 5px #454141;
    padding: 0.5rem;
    width: 200px;
    min-height: 100px;
    color: black;
    font-weight: 300;
    font-size: 1.2rem;
    background: rgb(240, 199, 94);
  }
  .Gryffindor li {
    display: inline-block;
    margin: 10px;
    border: solid 5px #eeba30;
    padding: 0.5rem;
    width: 200px;
    min-height: 100px;
    color: white;
    font-weight: 300;
    font-size: 1.2rem;
    background: rgb(116, 0, 1);
  }
  .Slytherin li {
    display: inline-block;
    margin: 10px;
    border: solid 5px #bbbbbb;
    padding: 0.5rem;
    width: 200px;
    min-height: 100px;
    color: white;
    font-weight: 300;
    font-size: 1.2rem;
    background: rgb(61, 107, 88);
  }
  .Ravenclaw li {
    display: inline-block;
    margin: 10px;
    border: solid 5px #9c752a;
    padding: 0.5rem;
    width: 200px;
    min-height: 100px;
    color: white;
    font-weight: 300;
    font-size: 1.2rem;
    background: rgb(7, 19, 107);
  }
</style>
