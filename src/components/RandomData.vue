<template>
  <div>
    <table>
      <tr>
        <th>Race:</th>
        <td>{{ race }}</td>
      </tr>
      <tr>
        <th>Favourite Spell:</th>
        <td>{{ spell }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// Gets a random value from given array
const getRandomIndex = (arr) => {
  if (arr && arr[0] && arr[0].index) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index].index;
  } else {
    return "...";
  }
};

export default {
  name: "RandomData",
  props: ["races", "spells"],
  computed: {
    race: function() {
      return getRandomIndex(this.races);
    },
    spell: function() {
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
}
tr {
  min-width: 100;
  text-align: right;
}
td {
  text-align: left;
}
</style>
