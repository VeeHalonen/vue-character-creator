<template>
  <div>
    <table columns="50%,50%">
      <tr>
        <th>Race:</th>
        <td>{{ race() }}</td>
      </tr>
      <tr>
        <th>Class:</th>
        <!-- The subclasses were a bit too silly -->
        <!-- <td>{{ subclass() + " " + getClass() }}</td> -->
        <td>{{ getClass() }}</td>
      </tr>
      <tr>
        <th>Alignment:</th>
        <td>{{ alignment() }}</td>
      </tr>
      <tr>
        <th>Favourite Spell:</th>
        <td>{{ spell() }}</td>
      </tr>
      <tr>
        <th>First Language:</th>
        <td>{{ language() }}</td>
      </tr>
      <tr>
        <th>Most Prized Possession:</th>
        <td>{{ item() }}</td>
      </tr>
      <tr>
        <th>Most Fearsome Enemy Defeated:</th>
        <td>{{ monster() }}</td>
      </tr>
    </table>

    <div>
      <button @click="randomize">Randomize</button>
    </div>
  </div>
</template>

<script>
// Gets a random value from given array
const getRandomValue = (arr) => {
  if (arr && arr[0] && arr[0].name) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index].name;
  } else {
    return "...";
  }
};

export default {
  name: "RandomData",
  props: ["races", "spells"],
  methods: {
    randomize() {
      this.$forceUpdate();
    },
    // Returns a random race
    race() {
      return getRandomValue(this.races);
    },
    // Returns a random spell
    spell() {
      return getRandomValue(this.spells);
    },
    // Etc.
    getClass() {
      return getRandomValue(this.$store.state.classes);
    },
    language() {
      return getRandomValue(this.$store.state.languages);
    },
    monster() {
      return getRandomValue(this.$store.state.monsters);
    },
    subclass() {
      return getRandomValue(this.$store.state.subclasses);
    },
    item() {
      return getRandomValue(this.$store.state.items);
    },
    alignment() {
      return getRandomValue(this.$store.state.alignments);
    },
  },
};
</script>

<style scoped>
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
