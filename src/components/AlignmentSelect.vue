
<!-- Alignment selection (including randomization) -->
<!-- Does not actually use the API -->

<template>
      <tr>
        <th>Alignment:</th>
        <td v-if="options && options.length > 0">
          <input type="checkbox" id="valueLock" v-model="locked">
          <div class="row">
            <div class="column" v-for="i in options" :key="i" >
              <input type="radio" name="alignment" :id="i" 
                :value="i" v-model="alignment">
              <label :for="i">{{i}}</label>
            </div>
          </div>
          <!-- <div>Picked: {{ alignment }}</div> -->
        </td>
        <td v-else>...</td>
      </tr>
</template>

<script>

import { getRandomValue } from "../helpers";

export default {
  name: "AlignmentSelect",
  props: {
      options: Array,
      shuffle: Boolean, // attempt to re-randomize when this prop changes
  },
  data() {
      return {
          locked: false,
          alignment: getRandomValue(this.options),
      }
  },
  watch: {
    options: function(newOptions) {
      console.log(newOptions);
      this.alignment = getRandomValue(newOptions);
    },
    shuffle: function() {
      if (!this.locked)
        this.alignment = getRandomValue(this.options)
    },
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 33.33%;
}
.row {
  max-width: 500px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
