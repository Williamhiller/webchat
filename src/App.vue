<template>
  <div id="app">
    <router-view></router-view>
    <lg-preview></lg-preview>
    <!--tab选项卡-->
    <div class="app-bottom" v-if="istab">
      <mu-paper>
        <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item value="message" title="消息" icon="forum" to="/message"/>
          <mu-bottom-nav-item value="recommend" title="推荐" icon="table_chart" to="/recommend"/>
          <mu-bottom-nav-item value="tool" title="工具" icon="business_center" to="/tool"/>
          <mu-bottom-nav-item value="home" title="我的" icon="person" to="/home"/>
        </mu-bottom-nav>
      </mu-paper>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      bottomNav: "message"
    };
  },
  mounted () {
    this.bottomNav = this.$route.name;
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val;
    }
  },
  computed: {
    ...mapState(["istab"])
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  width: 100%;
  height: 100%;

  .app-bottom {
    position: fixed;
    bottom: 0;
    z-index: 102;
    width: 100%;
  }
}
</style>
