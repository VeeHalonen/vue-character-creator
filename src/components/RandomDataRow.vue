
<!-- Renders a row with random data -->

<template>
      <tr>
        <th>{{title}}:</th>
        <td>
          <v-row align="center">
          <v-checkbox id="valueLock" v-model="locked" />
            <span v-if="!dropdown">{{ value }}</span>
            <v-select  v-else outlined v-model="value" :items="options.map(i => (i.name))" />
          </v-row>
        </td>
      </tr>
</template>

<script>

import { getRandomValueAsString, getRandomValuesAsString } from "../helpers";

export default {
  name: "RandomDataRow",
  props: {
      title: String,
      options: Array,   // array with options to randomly pick from
      shuffle: Boolean, // attempt to re-randomize when this prop changes
      multiple: Boolean, // if given, chooses multiple random values
      dropdown: Boolean  // if given, renders a dropdown menu with options
                         // ignores "multiple" if both are given
  },
  data() {
      return {
          locked: false,
          value: this.randomize(this.options),
      }
  },
  methods: {
    randomize(arr) {
      if (this.multiple && !this.dropdown) {
        return getRandomValuesAsString(arr)
      }
      else return getRandomValueAsString(arr)
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


