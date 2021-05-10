<template>
  <div>
    <AllData :races="races" :spells="spells" @refetch="$emit('refetch')" />
  </div>
</template>

<script>
import AllData from "../components/AllData";
export default {
  name: "Info",
  components: {
    AllData,
  },
  props: ["races", "spells"],
  emits: "refetch",
};
</script>
