<!-- Component for multivalue lists 
    - fires a delete event to remove itself
-->

<template>
  <span
    >{{ value }}<v-btn plain x-small @click="$emit('delete', value)">x</v-btn>
  </span>
</template>

<script>
export default {
  name: "MultivalueComponent",
  props: ["value"],
  emits: "delete",
};
</script>

<style scoped>
span {
  padding: 2px;
  padding-left: 5px;
  padding-right: 5px;
  margin: 2px;
  border: 1px solid gray;
  display: inline-block;
}
button {
  margin-left: 5px;
}
</style>
