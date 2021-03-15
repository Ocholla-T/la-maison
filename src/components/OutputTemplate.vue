<template>
  <div class="output__container">
    <span><strong>Device</strong></span>
    <span><strong>Buying Price</strong></span>
    <span><strong>Average Lifespan</strong></span>
    <span><strong>Years In Use</strong></span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
$font: "Lato", sans-serif;
$gray: #9b9b9b;
$malachite: #38ef7d;

.output__container {
  font-family: $font;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 2px solid;
  border-radius: 0.3125rem;
  margin-top: 1.5rem;
  text-align: center;
  border-color: $gray $gray $gray $malachite;
}

span {
  border-right: 2px solid $gray;
  padding: 8px 4px;

  &:nth-of-type(4) {
    border-right: none;
  }
}
</style>
