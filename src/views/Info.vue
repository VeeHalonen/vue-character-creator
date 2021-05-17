<template>
  <div>
    <AllData @refetch="$emit('refetch')" />
  </div>
</template>

<script>
import AllData from "../components/AllData";
export default {
  name: "Info",
  components: {
    AllData,
  },
  emits: "refetch",
};
</script>
