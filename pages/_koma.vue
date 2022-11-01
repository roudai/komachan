<template>
  <div>
    <prev-next :start-koma="startKoma" :end-koma="endKoma"></prev-next>
    <figure class="image m-3">
      <div v-for="n in num" :key="n">
        <img :src="imagePath(n)" class="mb-3" />
      </div>
    </figure>
    <prev-next :start-koma="startKoma" :end-koma="endKoma"></prev-next>
  </div>
</template>

<script>
export default {
  data: () => ({
    startKoma: Number,
    endKoma: Number,
    num: [],
  }),
  created() {
    const koma = this.$route.params.koma;
    this.startKoma = Number(koma.split('-')[0]);
    this.endKoma = Number(koma.split('-')[1]);
    for (let i = this.startKoma; i <= this.endKoma; i += 1) {
      this.num.push(i);
    }
  },
  methods: {
    imagePath(n) {
      try {
        return require(`@/assets/${n}コマ.jpg`);
      } catch (error) {
        return require(`@/assets/notfound.jpg`);
      }
    },
  },
};
</script>
