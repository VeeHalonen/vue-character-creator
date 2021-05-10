<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Generate</router-link> |
      <router-link to="/info">All Options</router-link>
    </div>
    <router-view :races="races" :spells="spells" @refetch="refetchData" />
  </div>
</template>

<script>
const baseURL = "https://www.dnd5eapi.co/api/";

export default {
  data() {
    return {
      races: [],
      spells: [],
    };
  },
  created() {
    this.fetchAll();
    // .then((data) => console.log(data));
  },
  watch: {
    // races: function(newData) {
    //   console.log("hello");
    //   console.log(newData[0].index);
    // },
  },
  methods: {
    // Fetches data from the D&D API in the given category
    async fetchDND(category) {
      return fetch(baseURL + category + "/").then((response) =>
        response.json()
      );
    },
    async fetchAll() {
      this.fetchDND("races").then((data) => (this.races = data.results));
      this.fetchDND("spells").then((data) => (this.spells = data.results));
    },
    refetchData() {
      this.races = [];
      this.spells = [];
      this.fetchAll();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #830909;
  text-decoration: underline;
}
</style>
