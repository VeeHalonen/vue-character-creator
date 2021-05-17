<!-- Add component for multivalue lists 
    - fires an add event to add a new value to list
-->

<template>
<div v-if="values.length > 0">
  <span v-if="selectVisible" >
    <select v-model="selected">
      <option v-for="i in values" :key="i.name" :value="i.name">{{i.name}}</option>
    </select>
    <button class="add" @click="add">Add</button>
    <button class="cancel" @click="cancelAdd">Cancel</button>
  </span>
  <button v-else @click="showAdd">+</button>
</div>
</template>

<script>
export default {
  name: "MultivalueAdd",
    props: ["values"],
    data() {
      return {
        selectVisible: false,
        selected: null
      }
    },
    emits: "add",
    methods: {
      showAdd() {
        this.selected = this.values[0].name
        this.selectVisible = true;
      },
      add() {
        this.selectVisible = false;
        this.$emit('add', this.selected);
      },
      cancelAdd() {
        this.selectVisible = false;
      }
    },
    watch: {
      values() {
        this.selectVisible = false
      }
    }
  }
</script>

<style scoped>
  div {
    display: inline-block;
  }
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
  /* button.cancel {
    background-color: red;
    color: white;
    border: none;
  }
  button.add {
    background-color: green;
    color: white;
    border: none;
  } */
</style>
