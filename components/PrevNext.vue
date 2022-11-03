<template>
  <div class="pagenavi">
    <div class="has-text-centered p-4 m-3">
      <span v-show="startKoma != 1">
        <nuxt-link :to="prev">{{ prev }}コマ</nuxt-link> &lt;&lt;
      </span>
      <b>{{ here }}</b>
      <span v-show="endKoma != totalEndKoma">
        &gt;&gt; <nuxt-link :to="next">{{ next }}コマ</nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrevNext',
  props: {
    startKoma: {
      type: Number,
      required: true,
    },
    endKoma: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    prev: String,
    here: String,
    next: String,
    totalEndKoma: Number,
  }),
  fetch() {
    this.totalEndKoma = this.$store.state.koma.totalEndKoma;
  },
  created() {
    this.createPrevNext();
  },
  mounted() {
    setTimeout(() => {
      // リロード時にstoreが読み込めない場合の対応
      if (this.next.slice(-2) === '-0') this.createPrevNext();
    }, 0);
  },
  methods: {
    createPrevNext() {
      const diff = this.$store.state.koma.massKoma;
      const totalEndKoma = this.$store.state.koma.totalEndKoma;
      this.prev =
        Number(this.startKoma) - diff + '-' + (Number(this.startKoma) - 1);
      this.here = this.startKoma + '-' + this.endKoma;
      if (this.endKoma + diff <= totalEndKoma) {
        this.next =
          Number(this.startKoma) + diff + '-' + (Number(this.endKoma) + diff);
      } else {
        this.next = Number(this.startKoma) + diff + '-' + totalEndKoma;
      }
    },
  },
};
</script>

<style>
div.pagenavi {
  font-size: 0.9em;
}
</style>
