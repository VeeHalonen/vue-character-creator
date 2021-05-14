
<!-- Renders a row with random data -->

<template>
      <tr>
        <th>{{title}}:</th>
        <td>
          <input type="checkbox" id="valueLock" v-model="locked">
          {{ value }}
        </td>
      </tr>
</template>

<script>

import { getRandomValue, getRandomValues } from "../helpers";

export default {
  name: "RandomDataRow",
  props: {
      title: String,
      options: Array,   // array with options to randomly pick from
      shuffle: Boolean, // attempt to re-randomize when this prop changes
      multiple: Boolean // if given, chooses multiple random values
  },
  data() {
      return {
          locked: false,
          value: this.value = this.randomize(this.options)
      }
  },
  methods: {
    randomize(arr) {
      if (this.multiple) {
        return getRandomValues(arr)
      }
      else return getRandomValue(arr)
    }
  },
  watch: { 
    shuffle: function() {
      if (!this.locked)
        this.value = this.randomize(this.options)
    },
    options: function(newVal) {
      this.value = this.randomize(newVal)
    }
  }
};
</script>


