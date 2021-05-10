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
      this.fetchDND("languages").then((data) =>
        this.$store.commit("setLanguages", data.results)
      );
      this.fetchDND("monsters").then((data) =>
        this.$store.commit("setMonsters", data.results)
      );
      this.fetchDND("subclasses").then((data) =>
        this.$store.commit("setSubclasses", data.results)
      );
      // Items == equipment + magic-items
      let items = [];
      this.fetchDND("equipment")
        .then((data) => (items = data.results))
        .then(
          this.fetchDND("magic-items").then((data) => {
            this.$store.commit("setItems", items.concat(data.results));
          })
        );
      this.fetchDND("alignments").then((data) =>
        this.$store.commit("setAlignments", data.results)
      );
    },
    clearData() {
      // Props
      this.races = [];
      this.spells = [];
      // Store
      this.$store.commit("setClasses", []);
      this.$store.commit("setLanguages", []);
      this.$store.commit("setMonsters", []);
      this.$store.commit("setSubclasses", []);
      this.$store.commit("setItems", []);
      this.$store.commit("setAlignments", []);
    },
    refetchData() {
      window.scrollTo(0, 0);
      this.clearData();
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

#nav a:hover {
  color: #bb2929;
}

#nav a.router-link-exact-active {
  color: #830909;
  text-decoration: underline;
}
</style>
