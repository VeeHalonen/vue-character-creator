<template>
  <div>
    <table class="main-table">
      <tr>
        <th class="row-title">Avatar:</th>
        <td class="row-content">
          <image-upload />
        </td>
      </tr>
      <tr>
        <th class="row-title">Name:</th>
        <td class="row-content">
          <v-row align="center">
            <v-col cols="1">
              <v-checkbox
                on-icon="mdi-lock"
                off-icon="mdi-lock-open-outline"
                id="nameLock"
                v-model="nameLocked"
              />
            </v-col>
            <v-col>
              <v-text-field
                dense
                outlined
                hide-details
                v-model="name"
                :disabled="nameLocked"
              />
            </v-col>
          </v-row>
        </td>
      </tr>
      <random-data-row
        title="Race"
        :options="this.$store.state.races"
        :shuffle="shuffle"
        dropdown
      />
      <random-data-row
        title="Class"
        :options="this.$store.state.classes"
        :shuffle="shuffle"
        dropdown
      />
      <alignment-select
        :options="this.$store.state.alignments"
        :shuffle="shuffle"
      />
      <random-data-row
        title="Favourite Spell"
        :options="this.$store.state.spells"
        :shuffle="shuffle"
        searchable
      />
      <random-multivalue-row
        title="Languages"
        :options="this.$store.state.languages"
        :shuffle="shuffle"
      />
      <random-data-row
        title="Most Prized Possession"
        :options="this.$store.state.items"
        :shuffle="shuffle"
        searchable
      />
      <random-data-row
        title="Most Fearsome Enemy Defeated"
        :options="this.$store.state.monsters"
        :shuffle="shuffle"
        searchable
      />
      <tr>
        <th class="row-title">Description:</th>
        <td class="row-content">
          <v-textarea outlined hide-details v-model="description" rows="3" />
        </td>
      </tr>
    </table>
    <div>
      <v-btn large @click="randomize" color="secondary">Randomize</v-btn>
    </div>
  </div>
</template>

<script>
import { generateName } from "../helpers";
import RandomDataRow from "./RandomDataRow.vue";
import RandomMultivalueRow from "./RandomMultivalueRow.vue";
import AlignmentSelect from "./AlignmentSelect.vue";
import ImageUpload from "./ImageUpload.vue";

export default {
  name: "RandomData",
  components: {
    RandomDataRow,
    RandomMultivalueRow,
    AlignmentSelect,
    ImageUpload,
  },
  data() {
    return {
      shuffle: true,
      nameLocked: false,
      name: "",
      description: "",
    };
  },
  created: function () {
    if (!this.nameLocked) this.name = generateName();
  },
  methods: {
    randomize() {
      this.shuffle = !this.shuffle;
      if (!this.nameLocked) this.name = generateName();
    },
  },
};
</script>

