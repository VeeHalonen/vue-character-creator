
<!-- Alignment selection (including randomization) -->
<!-- Does not actually use the API -->

<template>
      <tr>
        <th class="row-title">Alignment:</th>
        <td class="row-content" v-if="options && options.length > 0">
          <v-row align="center">
            <v-col cols="auto">
              <v-checkbox on-icon="mdi-lock" off-icon="mdi-lock-open-outline"
              id="valueLock" v-model="locked" />
            </v-col>
            <v-col>
              <v-radio-group v-model="alignment">
                <div class="row">
                  <div class="column" v-for="i in options" :key="i" >
                    <v-radio name="alignment" :id="i" 
                      :value="i" :label="i" />
                  </div>
                </div>
              </v-radio-group>
            </v-col>
          </v-row>
          <!-- <div>Picked: {{ alignment }}</div> -->
        </td>
        <td class="row-content" v-else>...</td>
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
</style>
