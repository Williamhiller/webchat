<template>
  <div class="tool">
    <div>
      tool
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
    };
  },
  async mounted() {
    this.$store.commit("setTab", true);
  },
  methods: {

  },
  computed: {

  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
