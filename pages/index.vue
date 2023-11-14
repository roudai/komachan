<template>
  <div>
    <img :src="require(`@/assets/top.webp`)" class="mb-3" width="1000" heigt="380" alt="#1にち1コマちゃん" />

    <div class="select is-small mb-3 ml-2">
      <select v-model="massKoma" @change="onChangeKoma">
        <option v-for="value in selectKoma" :key="value" :value="value">
          {{ value }}
        </option>
      </select>
    </div>
    <span>コマずつよむ</span>

    <top-contents
      v-for="k in startKoma"
      :key="k.keyKoma"
      :start-koma="k.startKoma"
      :end-koma="k.endKoma"
      :mass-koma="massKoma"
    >
    </top-contents>
  </div>
</template>

<script>
export default {
  data: () => ({
    totalEndKoma: 1015,
    massKoma: 10,
    startKoma: [],
    selectKoma: [5, 10, 20, 50, 100],
  }),
  created() {
    this.onChangeKoma();
  },
  methods: {
    onChangeKoma() {
      this.startKoma = [];
      this.$store.dispatch('koma/setMassKoma', this.massKoma);
      this.$store.dispatch('koma/setTotalEndKoma', this.totalEndKoma);
      for (let i = 1; i <= this.totalEndKoma; i += this.massKoma * 10) {
        if (i + this.massKoma * 10 - 1 <= this.totalEndKoma) {
          this.startKoma.push({
            keyKoma: this.massKoma + i,
            startKoma: i,
            endKoma: i + this.massKoma * 10 - 1,
          });
        } else {
          this.startKoma.push({
            keyKoma: this.massKoma + i,
            startKoma: i,
            endKoma: this.totalEndKoma,
          });
        }
      }
      this.startKoma = this.startKoma.reverse();
    },
  },
};
</script>

<style>
select {
  text-align: -webkit-center;
  font-family: 'MochiyPopPOne';
}
</style>
