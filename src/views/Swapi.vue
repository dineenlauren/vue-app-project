<template>
  <div class="swapi">
    <img alt="Vue logo" src="../assets/logo.png" />
    <PageTitle title="SWAPI" msg="Welcome to the Star Wars API page" />
    <div>
      <form v-on:submit.prevent="getNames">
        <p>
          Enter character name:
          <input type="text" v-model="query" />
          <button type="submit">Go</button>
        </p>
      </form>
      <!-- RESULTS CONTAINER -->
      <div class="results-container">
        <spinner v-if="showSpinner"></spinner>
        <h2 v-if="results.results && results.results.length > 0">
          {{ results.results.length }} Results Found
        </h2>
        <ul v-if="results.results && results.results.length > 0" class="card">
          <transition-group name="zoom" tag="div" appear>
            <li
              v-for="person in results.results"
              class="item"
              v-bind:key="person.name"
            >
              <p class="result-word">{{ person.name }}</p>
              <p class="attribute">Eye Color: {{ person.eye_color }}</p>
              <p class="attribute">Birth Year: {{ person.birth_year }}</p>
              <p class="attribute">Height: {{ person.height }}</p>
            </li>
          </transition-group>
        </ul>

        <div
          v-else-if="results.results && results.results.length === 0"
          class="no-results"
        >
          <h2>No Results Found</h2>
          <p>Please adjust your search.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PageTitle from "@/components/PageTitle.vue";
import { swAPI } from "../apiConfig";
require("vue2-animate/dist/vue2-animate.min.css");
import CubeSpinner from "../components/CubeSpinner";

export default {
  name: "swapi",
  components: {
    PageTitle,
    spinner: CubeSpinner
  },
  data() {
    return {
      results: [],
      errors: [],
      query: "",
      showSpinner: false
    };
  },
  methods: {
    getNames: function() {
      this.showSpinner = true;
      swAPI
        .get("people", {
          params: {
            search: this.query
          }
        })
        .then(response => {
          this.showSpinner = false;
          this.results = response.data;
        });
    }
  }
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
  font-family: "Courier New", Courier, monospace;
  text-transform: uppercase;
}

.attribute {
  font-size: 1rem;
  font-weight: 700;
  font-family: "Courier New", Courier, monospace;
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
