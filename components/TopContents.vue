<template>
  <div class="box has-background-primary-light mx-2">
    <h1 class="title is-5">{{ startKoma }}-{{ endKoma }} コマ</h1>
    <span v-for="(k, index) in koma" :key="k">
      <nuxt-link :to="`/${k}`">{{ k }}</nuxt-link>
      {{ index !== koma.length - 1 ? '/' : '' }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TopContents',
  props: {
    startKoma: {
      type: Number,
      required: true,
    },
    endKoma: {
      type: Number,
      required: true,
    },
    massKoma: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    koma: [],
  }),
  created() {
    for (let i = this.startKoma; i <= this.endKoma; i += this.massKoma) {
      if (i + this.massKoma - 1 <= this.endKoma) {
        this.koma.push(i + '-' + (i + this.massKoma - 1));
      } else {
        this.koma.push(i + '-' + this.endKoma);
      }
    }
  },
};
</script>

<style scoped>
span {
  display: inline-block;
  margin-left: 0.3rem;
}
</style>
