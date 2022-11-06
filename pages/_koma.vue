<template>
  <div>
    <prev-next :start-koma="startKoma" :end-koma="endKoma"></prev-next>
    <figure class="image m-1">
      <div v-for="n in num" :key="n">
        <img :src="imagePath(n)" class="mb-3" />
      </div>
    </figure>
    <prev-next :start-koma="startKoma" :end-koma="endKoma"></prev-next>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d{1,4}[-]\d{1,4}$/.test(params.koma);
  },
  data: () => ({
    startKoma: Number,
    endKoma: Number,
    num: [],
  }),
  created() {
    const totalEndKoma = this.$store.state.koma.totalEndKoma;
    const koma = this.$route.params.koma;
    this.startKoma = Number(koma.split('-')[0]);
    this.endKoma = Number(koma.split('-')[1]);
    if (
      this.endKoma > totalEndKoma ||
      this.startKoma >= this.endKoma ||
      this.endKoma - this.startKoma > 99
    ) {
      this.$router.push({ path: '../layouts/error.vue', alia: '/b' });
    }
    for (let i = this.startKoma; i <= this.endKoma; i += 1) {
      this.num.push(i);
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
