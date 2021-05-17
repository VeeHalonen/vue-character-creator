<template>
  <div>
    <table columns="50%,50%">
      <tr>
        <th>Name:</th>
        <td>
          <input type="checkbox" id="nameLock" v-model="nameLocked">
          <input v-model="name" :disabled="nameLocked">
        </td>
      </tr>
      <random-data-row title="Race" :options="this.races" :shuffle="shuffle" dropdown />
      <random-data-row title="Class" :options="this.$store.state.classes" :shuffle="shuffle" dropdown />
      <random-data-row title="Alignment" :options="this.$store.state.alignments" :shuffle="shuffle" />
      <random-data-row title="Favourite Spell" :options="this.spells" :shuffle="shuffle" />
      <random-multivalue-row title="Languages" :options="this.$store.state.languages" :shuffle="shuffle" />
      <random-data-row title="Most Prized Possession" :options="this.$store.state.items" :shuffle="shuffle" />
      <random-data-row title="Most Fearsome Enemy Defeated" :options="this.$store.state.monsters" :shuffle="shuffle" />
      <tr>
        <th>Description:</th>
        <td>
          <textarea v-model="description" rows="3" columns="10" />
        </td>
      </tr>
     
    </table>

    <div>
      <button @click="randomize">Randomize</button>
    </div>
  </div>
</template>

<script>
import { generateName } from "../helpers";
import RandomDataRow from './RandomDataRow.vue';
import RandomMultivalueRow from './RandomMultivalueRow.vue';

export default {
  name: "RandomData",
  components: { RandomDataRow, RandomMultivalueRow },
  props: ["races", "spells"],
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
  width: 50%;
  text-align: right;
}
td {
  width: 50%;
  text-align: left;
  padding: 5px;
}
</style>
