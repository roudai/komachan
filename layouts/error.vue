<template>
  <div>
    <nav class="navbar header has-background-grey-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand container column">
        <nuxt-link class="navbar-item has-text-link-light" to="/"> #1にち1コマちゃん </nuxt-link>
      </div>
    </nav>
    <h1 class="is-size-5 has-text-centered m-3">404 Not Found</h1>
    <img :src="require(`@/assets/notfound.webp`)" />
  </div>
</template>
