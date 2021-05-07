<template>
  <div>
    <AllData :races="races" />
  </div>
</template>

<script>
import AllData from "../components/AllData";
export default {
  name: "Info",
  components: {
    AllData,
  },
  props: ["races"],
};
</script>
