<!-- Renders a row with random data (multiple values) -->

<template>
      <tr>
        <th class="row-title">{{title}}:</th>
        <td class="row-content">
          <v-row align="center">
            <v-col cols="1">
              <v-checkbox on-icon="mdi-lock" off-icon="mdi-lock-open-outline"
                id="valueLock" v-model="locked" />
            </v-col>
            <v-col>
              <div>
                <multivalue-component v-for="i in selectedValues" :value="i" :key="i"
                  @delete="deleteItem" />
                <multivalue-add :values="notSelected" @add="addItem" />
              </div>
            </v-col>
          </v-row>
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


