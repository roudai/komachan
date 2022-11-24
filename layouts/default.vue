<template>
  <div class="has-background-info-light">
    <section class="main-content columns ml-0 mr-0">
      <div class="container column is-12-mobile is-10-tablet is-6-desktop pl-0 pr-0">
        <Nuxt />
      </div>
    </section>
    <footer-component></footer-component>
  </div>
</template>

<style>
.container {
  max-width: 1000px !important;
}
img.github {
  width: 1.2em;
  height: 1.2em;
  margin-bottom: -0.1em;
}
footer {
  margin-top: 1.5rem;
}
a {
  color: #0000cd;
}
a.twitter {
  color: #4b4b4b;
}
</style>
