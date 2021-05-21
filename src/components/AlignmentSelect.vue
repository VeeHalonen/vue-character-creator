
<!-- Alignment selection (including randomization) -->
<!-- Does not actually use the API -->

<template>
  <tr>
    <th class="row-title">Alignment:</th>
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
        <!-- OPTIONS -->
        <v-col cols="10" v-if="options && options.length > 0">
          <v-radio-group v-model="alignment" class="ml-5">
            <div class="row">
              <div class="column" v-for="i in options" :key="i">
                <v-radio name="alignment" :id="i" :value="i" :label="i" />
              </div>
            </div>
          </v-radio-group>
        </v-col>
        <!-- LOADING -->
        <v-col v-else>
          <v-btn loading elevation="0" block />
        </v-col>
      </v-row>
      <!-- <div>Picked: {{ alignment }}</div> -->
    </td>
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
    };
  },
  watch: {
    options: function (newOptions) {
      console.log(newOptions);
      this.alignment = getRandomValue(newOptions);
    },
    shuffle: function () {
      if (!this.locked) this.alignment = getRandomValue(this.options);
    },
  },
};
</script>

<style scoped>
.column {
  float: left;
  width: 33.33%;
}
</style>
