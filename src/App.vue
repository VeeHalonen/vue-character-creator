<template>
  <v-app>
    <v-main class="scale-wrapper">
      <div class="light-switch-container">
        <v-switch
          dense
          v-model="$vuetify.theme.dark"
          inset
          label="Theme"
        ></v-switch>
      </div>
      <div id="nav">
        <router-link to="/">Generate</router-link> |
        <router-link to="/info">All Options</router-link>
      </div>
      <router-view @refetch="refetchData" />
    </v-main>
    <v-footer class="justify-center mt-10">
      <div class="grey--text caption">VEH 2021</div>
    </v-footer>
  </v-app>
</template>

<script>
const baseURL = "https://www.dnd5eapi.co/api/";

export default {
  created() {
    this.fetchAll();
  },
  methods: {
    // Fetches data from the D&D API in the given category
    async fetchDND(category) {
      return fetch(baseURL + category + "/").then((response) =>
        response.json()
      );
    },
    async fetchAll() {
      this.fetchDND("races").then((data) =>
        this.$store.commit("setRaces", data.results)
      );
      this.fetchDND("spells").then((data) =>
        this.$store.commit("setSpells", data.results)
      );
      this.fetchDND("classes").then((data) =>
        this.$store.commit("setClasses", data.results)
      );
      this.fetchDND("languages").then((data) =>
        this.$store.commit("setLanguages", data.results)
      );
      this.fetchDND("monsters").then((data) =>
        this.$store.commit("setMonsters", data.results)
      );
      this.fetchDND("subclasses").then((data) =>
        this.$store.commit("setSubclasses", data.results)
      );
      // Items == equipment + magic-items
      let items = [];
      this.fetchDND("equipment")
        .then((data) => (items = data.results))
        .then(
          this.fetchDND("magic-items").then((data) => {
            this.$store.commit("setItems", items.concat(data.results));
          })
        );
      // this.fetchDND("alignments").then((data) =>
      //   this.$store.commit("setAlignments", data.results)
      // );
    },
    clearData() {
      this.$store.commit("setRaces", []);
      this.$store.commit("setSpells", []);
      this.$store.commit("setClasses", []);
      this.$store.commit("setLanguages", []);
      this.$store.commit("setMonsters", []);
      this.$store.commit("setSubclasses", []);
      this.$store.commit("setItems", []);
      // this.$store.commit("setAlignments", []);
    },
    refetchData() {
      window.scrollTo(0, 0);
      this.clearData();
      this.fetchAll();
    },
  },
};
</script>

<style>
@import "./assets/styles.css";
</style>
