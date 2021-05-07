<template>
  <div>
    <h2>All Options</h2>
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
  // NONE OF THIS WAS WORKING FOR SOME REASON?? But the rendering works, so eh...
  // created() {
  //   if (this.races?.length > 0) console.log("Races[0]: ", this.races[0].index);
  // },
  // watch: {
  //   testData: function(races) {
  //     console.log("hello");
  //     console.log(races[0].index);
  //   },
  // },
};
</script>
