<!-- Add component for multivalue lists 
    - fires an add event to add a new value to list
-->

<template>
  <div v-if="values.length > 0">
    <span v-if="selectVisible" >
      <v-select solo dense hide-details
        v-model="selected" :items="values.map(i => (i.name))" />
      <v-btn x-small class="add" @click="add">Add</v-btn>
      <v-btn x-small class="cancel" @click="cancelAdd">Cancel</v-btn>
    </span>
    <v-btn small v-else @click="showAdd">+</v-btn>
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
div {
  
    align-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    justify-content: center;
    justify-items: center;
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
