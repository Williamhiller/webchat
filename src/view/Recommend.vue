<template>
  <div class="recommend">
    <div class="list">
      <mu-list>
        <div v-for="item in [1,2,3,4]">
          <mu-list-item title="欧冠：国际米兰VS尤文图斯 " describeText="2019-12-15 15:34" @click="chatwindow('room1')">
            <mu-icon value="arrow_forward_ios" slot="right"/>
          </mu-list-item>
          <mu-divider/>
        </div>
      </mu-list>
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
