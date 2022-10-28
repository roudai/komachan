<template>
  <div class="has-background-info-light">
    <nav
      class="navbar header has-background-grey-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand container column is-four-fifths">
        <a class="navbar-item has-text-link-light" href="/">
          #1にち1コマちゃん
        </a>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container column is-four-fifths">
        <Nuxt />
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <a href="https://github.com/roudai/komachan">
            <img
              :src="require(`@/assets/GitHub-Mark-32px.png?webp`)"
              class="github"
            />
          </a>
          Presented by <a href="https://twitter.com/w_ty_OvO">@w_ty_OvO</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' },
        },
      ],
    };
  },
};
</script>

<style>
body {
  font-family: 'Mochiy Pop P One', sans-serif;
}
img.github {
  width: 1.2em;
  height: 1.2em;
  margin-bottom: -0.2em;
}
</style>
