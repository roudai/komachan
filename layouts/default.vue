<template>
  <div class="has-background-info-light">
    <section class="main-content columns ml-0 mr-0">
      <div
        class="container column is-12-mobile is-10-tablet is-6-desktop pl-0 pr-0"
      >
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
