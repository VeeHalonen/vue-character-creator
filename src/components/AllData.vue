<template>
  <div>
    <data-list title="Races" :data="races" />
    <data-list title="Classes" :data="$store.state.classes" />
    <data-list title="Alignments" :data="$store.state.alignments" />
    <data-list title="Subclasses" :data="$store.state.subclasses" />
    <data-list title="Languages" :data="$store.state.languages" />
    <data-list title="Monsters" :data="$store.state.monsters" />
    <data-list title="Spells" :data="spells" />
    <data-list title="Items" :data="$store.state.items" />
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
