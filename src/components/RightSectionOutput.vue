<template>
  <div class="RightSectionOutput">
    <h2>My Appliances</h2>
    <div class="search__container">
      <input class="search__input" type="text" placeholder="Search" />
    </div>
    <OutputTemplate />
  </div>
</template>

<script>
import OutputTemplate from "@/components/OutputTemplate.vue";

export default {
  name: "RightSectionOutput",
  components: {
    OutputTemplate,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
$font: "Lato", sans-serif;

.RightSectionOutput {
  width: 50%;
  margin-right: 3rem;
}
.search__container {
  padding-top: 0.5rem;
  width: 85%;
}

.search__input {
  font-family: $font;
  width: 100%;
  padding: 12px 24px;

  background-color: transparent;
  transition: transform 250ms ease-in-out;
  font-size: 14px;
  line-height: 18px;

  color: #575756;
  background-color: transparent;
  /*         background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg); */

  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  border-radius: 0.3125rem;
  border: 2px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  &::placeholder {
    color: color(#575756 a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  &:hover,
  &:focus {
    padding: 12px 0;
    outline: 0;
    border: 2px solid transparent;
    border-bottom: 2px solid #575756;
    border-radius: 0;
    background-position: 100% center;
  }
}
</style>
