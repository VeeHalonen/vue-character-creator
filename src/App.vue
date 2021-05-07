<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Fun</router-link> |
      <router-link to="/info">All Options</router-link>
    </div>
    <router-view :races="testData" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      testData: [],
    };
  },
  created() {
    fetch("https://www.dnd5eapi.co/api/races/")
      .then((response) => response.json())
      .then((data) => (this.testData = data.results));
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
