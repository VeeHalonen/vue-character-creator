
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

import { getRandomValue } from "../helpers";

export default {
  name: "RandomDataRow",
  props: {
      title: String,
      options: Array,  // array with options to randomly pick from
      shuffle: Boolean // attempt to re-randomize when this prop changes
  },
  data() {
      return {
          locked: false,
          value: this.value = getRandomValue(this.options)
      }
  },
  watch: { 
    shuffle: function() {
      if (!this.locked)
        this.value = getRandomValue(this.options)
    },
    options: function(newVal) {
      this.value = getRandomValue(newVal)
    }
  }
};
</script>


