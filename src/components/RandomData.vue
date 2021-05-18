<template>
  <div>
    <table columns="50%,50%">
      <tr>
        <th>Name:</th>
        <td>
          <v-row align="center">
            <v-checkbox id="nameLock" v-model="nameLocked" />
            <v-text-field outlined v-model="name" :disabled="nameLocked" />
          </v-row>
        </td>
      </tr>
      <random-data-row title="Race" :options="this.$store.state.races" :shuffle="shuffle" dropdown />
      <random-data-row title="Class" :options="this.$store.state.classes" :shuffle="shuffle" dropdown />
      <alignment-select :options="this.$store.state.alignments" :shuffle="shuffle" />
      <random-data-row title="Favourite Spell" :options="this.$store.state.spells" :shuffle="shuffle" />
      <random-multivalue-row title="Languages" :options="this.$store.state.languages" :shuffle="shuffle" />
      <random-data-row title="Most Prized Possession" :options="this.$store.state.items" :shuffle="shuffle" />
      <random-data-row title="Most Fearsome Enemy Defeated" :options="this.$store.state.monsters" :shuffle="shuffle" />
      <tr>
        <th>Description:</th>
        <td>
          <v-textarea outlined v-model="description" rows="3" />
        </td>
      </tr>
     
    </table>

    <div>
      <v-btn @click="randomize">Randomize</v-btn>
    </div>
  </div>
</template>

<script>
import { generateName } from "../helpers";
import RandomDataRow from './RandomDataRow.vue';
import RandomMultivalueRow from './RandomMultivalueRow.vue';
import AlignmentSelect from './AlignmentSelect.vue';

export default {
  name: "RandomData",
  components: { RandomDataRow, RandomMultivalueRow, AlignmentSelect },
  data() {
    return {
      shuffle: true,
      nameLocked: false,
      name: "",
      description: "",
    }
  },
  created: function() {
    if (!this.nameLocked)
      this.name = generateName();
  },
  methods: {
    randomize() {
      this.shuffle = !this.shuffle;
      if (!this.nameLocked)
        this.name = generateName();
    },
  },
};
</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding: 20px 20px 20px 20px;
}
tr {
  width: 40%;
  text-align: right;
}
td {
  width: 60%;
  text-align: left;
  padding: 5px;
}
</style>
