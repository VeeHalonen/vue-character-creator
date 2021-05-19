<!-- Add component for multivalue lists 
    - fires an add event to add a new value to list
-->

<template>
  <div v-if="values.length > 0">
    <span v-if="selectVisible" class="value-box" >
      <v-select solo dense hide-details
        v-model="selected" :items="values.map(i => (i.name))" />
      <v-btn x-small depressed color="primary" class="add" @click="add">
        Add
      </v-btn>
      <v-btn x-small depressed class="cancel" @click="cancelAdd">
       Cancel
      </v-btn>
    </span>
    <v-btn v-else small color="primary" @click="showAdd">+</v-btn>
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
    },
    computed:{
    selectedStr(){
      if (this.selected)
        return this.selected.name
      return null
    }
  }
  }
</script>

<style scoped>
  span.value-box {
    padding: 2px;
    padding-left: 5px;
    padding-right: 5px;
    margin: 2px;
    border: 1px solid gray;
    display: inline-block;
  }
  .v-btn {
    padding: 10px !important;
    margin: 3px !important;
    margin-top: 5px !important;
    min-width: 0px !important;
  }
  /* .v-btn.cancel {
    color: red
  } */
  /* .v-btn.add {
    color: green;
  } */
</style>
