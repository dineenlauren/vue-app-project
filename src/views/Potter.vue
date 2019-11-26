<template>
  <div class="potter">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PageTitle title="Potter API" msg="Welcome to the Potter API page" />
    <div>
      <!-- FORM INPUT -->
      <div>
        <form v-on:submit.prevent="getHouseMembers">
          <label>Show me members of:</label>
          <select v-model="query">
            <option disabled value>Please select one</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
          <p>
            <button type="submit">Go</button>
          </p>
        </form>
      </div>

      <!-- RESULTS CONTAINER -->
      <div class="results-container">
        <spinner v-if="showSpinner"></spinner>
        <h2 v-if="results && results.length > 0">{{ results.length }} Results Found</h2>
        <ul v-if="results && results.length > 0" :class="newStyle">
          <transition-group name="bounce" tag="div" appear>
            <li v-for="result in results" class="item" v-bind:key="result.name">
              <p class="result-word">{{ result.name }}</p>
              <p class="attribute">
                Blood Status:
                <br />
                {{ result.bloodStatus }}
              </p>
              <p class="attribute">
                Role:
                <br />
                {{ result.role }}
              </p>
            </li>
          </transition-group>
        </ul>
      </div>
      <!-- END OF RESULTS CONTAINER -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from "@/components/PageTitle.vue";
import { pAPI } from "../apiConfig";
require("vue2-animate/dist/vue2-animate.min.css");
import CubeSpinner from "../components/CubeSpinner";

export default {
  name: "potter",
  components: {
    PageTitle,
    spinner: CubeSpinner
  },
  data() {
    return {
      results: [],
      errors: [],
      newStyle: [],
      query: ["Hufflepuff", "Gryffindor", "Slytherin", "Ravenclaw"],
      showSpinner: false
    };
  },
  methods: {
    getHouseMembers: function() {
      console.log("Searching API results");
      this.showSpinner = true;
      pAPI
        .get("characters/", {
          params: {
            house: this.query
          }
        })
        .then(response => {
          this.showSpinner = false;
          this.newStyle = this.query;
          this.results = response.data;
          console.log("Turning off showSpinner");
        })
        .catch((this.showSpinner = false));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway|Shadows+Into+Light");
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
  font-family: "Shadows Into Light", cursive;
  text-transform: uppercase;
}
.attribute {
  font-size: 1rem;
  font-family: "Raleway", sans-serif;
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
