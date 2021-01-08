<template>
  <div class="swapi">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PageTitle title="SWAPI" msg="Welcome to the Star Wars API page" />
    <div>
      <h1>This is the characters page.</h1>
      <form v-on:submit.prevent="getCharacters">
        <button type="sumbit">Go</button>
      </form>
      <ul v-if="characters && characters.length > 0">
        <li v-for="character in characters" :key="character.name">
          {{ character.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import PageTitle from '@/components/PageTitle.vue';
  import axios from 'axios';

  export default {
    name: 'swapi',
    components: {
      PageTitle,
    },
    data() {
      return {
        characters: [],
      };
    },

    methods: {
      getCharacters() {
        axios
          .get('https://swapi.dev/api/people/')
          .then((result) => {
            console.log(result.data.results);

            this.characters = result.data.results;
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
  .word-search {
    font-size: 1.4rem;
    white-space: nowrap;
    display: inline-block;
    width: 70%;
    float: left;
  }

  .result-word {
    font-weight: 700;
    font-size: 1.3rem;
    font-family: 'Courier New', Courier, monospace;
    text-transform: uppercase;
  }

  .attribute {
    font-size: 1rem;
    font-weight: 700;
    font-family: 'Courier New', Courier, monospace;
  }

  .item p {
    text-align: left;
  }

  .swapi {
    font-size: 1.4rem;
    background-color: #333;
    color: #fff;
    padding: 60px 0;
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

  .card li {
    display: inline-block;
    margin: 10px;
    border: solid 5px black;
    padding: 0.5rem;
    width: 200px;
    min-height: 100px;
    color: black;
    font-weight: 300;
    font-size: 1.2rem;
    background: rgb(240, 199, 94);
  }
</style>
