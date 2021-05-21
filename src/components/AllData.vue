<template>
  <div class="main-container">
    <!-- REFETCH BUTTON -->
    <v-btn small block depressed @click="$emit('refetch')"> Fetch Again</v-btn>
    <v-tabs grow show-arrows class="my-5">
      <!-- RACES -->
      <v-tab>Races</v-tab>
      <v-tab-item>
        <data-list title="Races" :data="$store.state.races" />
      </v-tab-item>
      <!-- CLASSES -->
      <v-tab>Classes</v-tab>
      <v-tab-item>
        <data-list title="Classes" :data="$store.state.classes" />
      </v-tab-item>
      <!-- ALIGNMENTS -->
      <v-tab>Alignments</v-tab>
      <v-tab-item>
        <data-list title="Alignments" :data="$store.state.alignments" />
      </v-tab-item>
      <!-- SUBCLASSES -->
      <v-tab>Subclasses</v-tab>
      <v-tab-item>
        <data-list title="Subclasses" :data="$store.state.subclasses" />
      </v-tab-item>
      <!-- LANGUAGES -->
      <v-tab>Languages</v-tab>
      <v-tab-item>
        <data-list title="Languages" :data="$store.state.languages" />
      </v-tab-item>
      <!-- MONSTERS -->
      <v-tab>Monsters</v-tab>
      <v-tab-item>
        <data-list title="Monsters" :data="$store.state.monsters" />
      </v-tab-item>
      <!-- SPELLS -->
      <v-tab>Spells</v-tab>
      <v-tab-item>
        <data-list title="Spells" :data="$store.state.spells" />
      </v-tab-item>
      <!-- ITEMS -->
      <v-tab>Items</v-tab>
      <v-tab-item>
        <data-list title="Items" :data="$store.state.items" />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import DataList from "./DataList.vue";
export default {
  name: "AllData",
  components: { DataList },
  emits: "refetch",
};
</script>
