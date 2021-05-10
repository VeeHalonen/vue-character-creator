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
  methods: {
    // Fetches data from the D&D API in the given category
    async fetchDND(category) {
      return fetch(baseURL + category + "/").then((response) =>
        response.json()
      );
    },
    async fetchAll() {
      // Props
      this.fetchDND("races").then((data) => (this.races = data.results));
      this.fetchDND("spells").then((data) => (this.spells = data.results));
      // Store
      this.fetchDND("classes").then((data) =>
        this.$store.commit("setClasses", data.results)
      );
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
  color: #41566b;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #830909;
  text-decoration: underline;
}
</style>
