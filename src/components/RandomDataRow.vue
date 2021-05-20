
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
          <v-select
            v-if="dropdown"
            dense
            outlined
            hide-details
            v-model="value"
            :items="options.map((i) => i.name)"
          />
          <v-autocomplete
            v-else-if="searchable"
            dense
            hide-details
            filled
            v-model="value"
            :items="options.map((i) => i.name)"
          />
          <span v-else>{{ value }}</span>
        </v-col>
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
    options: Array, // array with options to randomly pick from
    shuffle: Boolean, // attempt to re-randomize when this prop changes
    multiple: Boolean, // if given, chooses multiple random values
    dropdown: Boolean, // if given, renders a dropdown menu with options
    searchable: Boolean, // if given, renders a select with autocomplete
    // priority if more than one is given: searchable > dropdown > multiple
  },
  data() {
    return {
      locked: false,
      value: this.randomize(this.options),
    };
  },
  methods: {
    randomize(arr) {
      if (this.multiple && !this.dropdown && !this.searchable) {
        return getRandomValuesAsString(arr);
      } else return getRandomValueAsString(arr);
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


