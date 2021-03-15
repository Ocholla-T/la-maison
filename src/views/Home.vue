<template>
  <div class="home">
    <LeftSectionInputs />
    <RightSectionOutput />
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSectionInputs from "@/components/LeftSectionInputs.vue";
import RightSectionOutput from "@/components/RightSectionOutput.vue";

export default {
  name: "Home",
  components: {
    LeftSectionInputs,
    RightSectionOutput,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-between;
  margin: 0 3rem;
}
</style>
