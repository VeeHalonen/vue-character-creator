<template>
  <div>
    <data-list title="Races" :data="races" />
    <data-list title="Classes" :data="$store.state.classes" />
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
  emits: "refetch",
};
</script>
