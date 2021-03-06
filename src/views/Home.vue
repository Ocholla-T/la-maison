<template>
  <div class="home">
    <LeftSectionInputs />
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSectionInputs from "@/components/LeftSectionInputs.vue";

export default {
  name: "Home",
  components: {
    LeftSectionInputs,
  },
};
</script>
