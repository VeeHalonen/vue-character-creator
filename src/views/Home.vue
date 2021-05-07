<template>
  <div>
    <RandomData />
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
};
</script>
