<template>
  <nav>
    <ul>
      <div>
        <li class="nav-item">
          La <br />
          Maison
        </li>
        <li class="nav-item"><img src="./assets/user-logo.png" alt="Your logo" /></li>
      </div>
    </ul>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Cookie&display=swap");
$logo-font: "Cookie", cursive;

nav {
  margin: 0;
}
ul {
  padding: 0;
  div {
    margin: 0 3rem;
    display: flex;
    justify-content: space-between;
  }
}
.nav-item {
  list-style-type: none;
  text-align: center;
  font-family: $logo-font;
  font-size: 1.5rem;
}
</style>
