<template>
  <div class="tool">
    <mu-list>
      <div>
        <mu-list-item title="返还率计算与转换 " @click="goSubTool('kickback')">
          <mu-icon value="arrow_forward_ios" slot="right"/>
        </mu-list-item>
        <mu-divider/>

        <mu-list-item title="亚盘计算 " @click="goSubTool('room1')">
          <mu-icon value="arrow_forward_ios" slot="right"/>
        </mu-list-item>
        <mu-divider/>

        <mu-list-item title="欧亚转换 " @click="goSubTool('room1')">
          <mu-icon value="arrow_forward_ios" slot="right"/>
        </mu-list-item>
        <mu-divider/>

        <mu-list-item title="每日竞彩 " @click="goSubTool('room1')">
          <mu-icon value="arrow_forward_ios" slot="right"/>
        </mu-list-item>
        <mu-divider/>
      </div>
    </mu-list>
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
    goSubTool (name) {
      this.$router.push({path: `/${name}`});
    }
  },
  computed: {

  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
