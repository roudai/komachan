<template>
  <div class="has-background-info-light">
    <section class="main-content">
      <div class="container is-four-fifths">
        <Nuxt />
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Presented by
          <a class="twitter" href="https://twitter.com/w_ty_OvO">@w_ty_OvO</a>.
          <a
            href="https://github.com/roudai/komachan"
            aria-label="githubを開く"
          >
            <img
              :src="require(`@/assets/GitHub-Mark-32px.webp`)"
              class="github"
              alt="github"
            />
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
body {
  font-family: 'Mochiy Pop P One', sans-serif;
}
img.github {
  width: 1.2em;
  height: 1.2em;
  margin-bottom: -0.2em;
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
