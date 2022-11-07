<template>
  <div>
    <div v-if="pageView">
      <prev-next :start-koma="startKoma" :end-koma="endKoma"></prev-next>
      <figure class="image m-1">
        <div v-for="n in num" :key="n">
          <img :src="imagePath(n)" class="mb-3" alt="komachan" />
        </div>
      </figure>
      <prev-next :start-koma="startKoma" :end-koma="endKoma"></prev-next>
    </div>
    <div v-else>
      <h1 class="is-size-5 has-text-centered m-3">404 Not Found</h1>
      <img :src="require(`@/assets/notfound.webp`)" />
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^[1-9][0-9]{0,3}[-][1-9][0-9]{0,3}$/.test(params.koma);
  },
  data: () => ({
    startKoma: Number,
    endKoma: Number,
    pageView: true,
    num: [],
  }),
  created() {
    const totalEndKoma = this.$store.state.koma.totalEndKoma;
    const koma = this.$route.params.koma;
    this.startKoma = Number(koma.split('-')[0]);
    this.endKoma = Number(koma.split('-')[1]);
    const viewKoma = this.endKoma - this.startKoma + 1;
    if (
      this.endKoma > totalEndKoma ||
      this.startKoma >= this.endKoma ||
      this.endKoma % 5 !== 0 ||
      (viewKoma !== 5 &&
        viewKoma !== 10 &&
        viewKoma !== 20 &&
        viewKoma !== 50 &&
        viewKoma !== 100)
    ) {
      this.pageView = false;
    } else {
      for (let i = this.startKoma; i <= this.endKoma; i += 1) {
        this.num.push(i);
      }
    }
  },
  methods: {
    imagePath(n) {
      try {
        return require(`@/assets/${n}コマ.webp`);
      } catch (error) {
        return require(`@/assets/notfound.webp`);
      }
    },
  },
};
</script>
