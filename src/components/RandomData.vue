<template>
  <div>
    <table>
      <tr>
        <th>Race:</th>
        <td>{{ race() }}</td>
      </tr>
      <tr>
        <th>Favourite Spell:</th>
        <td>{{ spell() }}</td>
      </tr>
    </table>

    <div>
      <button @click="randomize">Randomize</button>
    </div>
  </div>
</template>

<script>
// Gets a random value from given array
const getRandomIndex = (arr) => {
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
      return getRandomIndex(this.races);
    },
    // Returns a random spell
    spell() {
      return getRandomIndex(this.spells);
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
  min-width: 100;
  text-align: right;
}
td {
  text-align: left;
}
</style>
