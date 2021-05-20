
<!-- Renders a row with random data -->

<template>
  <tr>
    <th class="row-title">{{ title }}:</th>
    <td class="row-content">
      <v-row align="center">
        <v-col cols="1">
          <v-checkbox
            on-icon="mdi-lock"
            off-icon="mdi-lock-open-outline"
            id="valueLock"
            v-model="locked"
          />
        </v-col>
        <v-col>
          <!-- LOADING -->
          <v-btn
            v-if="!options || options.length === 0"
            loading
            elevation="0"
            block
          />
          <!-- DROPDOWN -->
          <v-select
            v-else-if="dropdown"
            dense
            outlined
            hide-details
            v-model="value"
            :items="options.map((i) => i.name)"
          />
          <!-- SEARCHABLE -->
          <v-autocomplete
            v-else-if="searchable"
            dense
            hide-details
            filled
            v-model="value"
            :items="options.map((i) => i.name)"
          />
          <!-- PLAIN -->
          <span v-else>{{ value }}</span>
        </v-col>
      </v-row>
    </td>
  </tr>
</template>

<script>
import { getRandomValueAsString } from "../helpers";

export default {
  name: "RandomDataRow",
  props: {
    title: String,
    options: Array, // array with options to randomly pick from
    shuffle: Boolean, // attempt to re-randomize when this prop changes
    dropdown: Boolean, // if given, renders a dropdown menu with options
    searchable: Boolean, // if given, renders a select with autocomplete
    // priority if more than one is given: dropdown > searchable
  },
  data() {
    return {
      locked: false,
      value: this.randomize(this.options),
    };
  },
  methods: {
    randomize(arr) {
      return getRandomValueAsString(arr);
    },
  },
  watch: {
    shuffle: function () {
      if (!this.locked) this.value = this.randomize(this.options);
    },
    options: function (newVal) {
      this.value = this.randomize(newVal);
    },
  },
};
</script>


