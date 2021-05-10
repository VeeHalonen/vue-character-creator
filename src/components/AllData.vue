<template>
  <div :style="{ marginLeft: 0 }">
    <h3>Races</h3>
    <ol>
      <li v-for="(item, i) in races" :key="i">
        {{ item.index }}
      </li>
    </ol>
  </div>
</template>

<script>
// TODO: add all data here
export default {
  props: ["races"],
  // Nvm I'm dumb, forgot I changed the variable name
  created() {
    if (this.races?.length > 0) console.log("Races[0]: ", this.races[0].index);
  },
  watch: {
    races: function(races) {
      console.log("hello from AllData");
      console.log(races[0].index);
    },
  },
};
</script>

<style scoped>
ol {
  text-align: center;
  list-style-position: inside;
  padding-left: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
  width: 20%;

  text-align: left;
  margin-left: 45%;
} */
</style>
