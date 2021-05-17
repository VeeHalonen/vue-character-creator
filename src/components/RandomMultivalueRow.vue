<!-- Renders a row with random data (multiple values) -->

<template>
      <tr>
        <th>{{title}}:</th>
        <td>
            <div class="column"><input type="checkbox" id="valueLock" v-model="locked"></div>
            <div class="column">
              <div><multivalue-component v-for="i in selectedValues" :value="i" :key="i"
              @delete="deleteItem" /><multivalue-add :values="notSelected" @add="addItem" /></div>
            </div>
        </td>
      </tr>
</template>

<script>

import { getRandomValues } from "../helpers";
import MultivalueComponent from './MultivalueComponent.vue';
import MultivalueAdd from './MultivalueAdd.vue';

export default {
  name: "RandomMultivalueRow",
  components: { MultivalueComponent, MultivalueAdd },
  props: {
      title: String,
      options: Array,   // array with options to randomly pick from
      shuffle: Boolean, // attempt to re-randomize when this prop changes
  },
  data() {
      return {
          locked: false,
          selectedValues: this.randomize(this.options),
      }
  },
  computed: {
    notSelected: function () {
      return this.options.filter((item) => {
        if (!this.selectedValues.includes(item.name))
          return item.name
      })
    }
  },
  methods: {
    randomize(arr) {
      return getRandomValues(arr)
    },
    deleteItem(item) {
        this.selectedValues = this.selectedValues.filter(function(i) {
          return i !== item
        })
    },
    addItem(item) {
      this.selectedValues = this.selectedValues.concat(item)
    }
  },
  watch: { 
    shuffle: function() {
      if (!this.locked)
        this.selectedValues = this.randomize(this.options)
    },
    options: function(newVal) {
      this.selectedValues = this.randomize(newVal)
    }
  }
};
</script>

<style scoped>
div {
  display: inline;
}
.column {
  float: left;
  max-width: 90%;
}
</style>

