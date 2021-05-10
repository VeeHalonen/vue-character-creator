<template>
  <div>
    <data-list title="Races" :data="races" />
    <data-list title="Spells" :data="spells" />
    <button @click="$emit('refetch')">
      Fetch Again
    </button>
  </div>
</template>

<script>
import DataList from "./DataList.vue";
// TODO: add all data here
export default {
  components: { DataList },
  props: ["races", "spells"],
  // watch: {
  //   races: function(races) {
  //     console.log("hello from AllData");
  //     console.log(races[0].index);
  //   },
  // },
  emits: "refetch",
};
</script>
