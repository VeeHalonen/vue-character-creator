<template>
  <div>
    <h3>{{ title }}</h3>
    <div v-if="data && data.length > 1">
      <ol>
        <li v-for="(item, i) in parsedData" :key="i">
          {{ item }}
        </li>
      </ol>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "data"],
  computed: {
    parsedData: function() {
      const parsed = [];
      this.data.map((i) => {
        if (i.name) {
          parsed.push(i.name);
        }
      });
      return parsed;
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
</style>
