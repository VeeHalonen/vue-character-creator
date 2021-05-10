<template>
  <div>
    <RandomData :races="races" :spells="spells" />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomData from "@/components/RandomData.vue";

export default {
  name: "Home",
  components: {
    RandomData,
  },
  props: ["races", "spells"],
};
</script>
