<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Generate</router-link> |
      <router-link to="/info">All Options</router-link>
    </div>
    <router-view :races="testData" />
  </div>
</template>

<script>
const baseURL = "https://www.dnd5eapi.co/api/";

// Fetches data from the D&D API in the given category
const fetchDND = async (category) => {
  return fetch(baseURL + category + "/").then((response) => response.json());
};

export default {
  data() {
    return {
      testData: [],
    };
  },
  created() {
    fetchDND("races").then((data) => (this.testData = data.results));
    // .then((data) => console.log(data));
  },
  watch: {
    // testData: function(newData) {
    //   console.log("hello");
    //   console.log(newData[0].index);
    // },
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
}

#nav a.router-link-exact-active {
  color: #a80f0f;
}
</style>
