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
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Really leave the page? All changes will be lost."
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
};
</script>
