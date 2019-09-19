<template>
  <div class="article">
    <div class="title">
      <mu-appbar title="Title">
        <mu-icon-button icon="chevron_left" slot="left" @click="goback"/>
        <div class="text-center">推荐单</div>
        <mu-icon-button icon="" slot="right"/>
      </mu-appbar>
    </div>

    <mu-card>
      <mu-card-title title="Content Title" subTitle="Content Title"/>
      <mu-card-text>
        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
        找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
      </mu-card-text>
    </mu-card>
  </div>
</template>

<script>


export default {
  data() {
    return {
    };
  },
  async mounted() {
    console.log(this.$route.params)
    this.$store.commit("setTab", false);
  },
  methods: {
    goback () {
      this.$router.goBack();
      this.$store.commit('setTab', true);
      this.$store.commit('setCurrent', 0);
    }
  },
  computed: {
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.text-center {
  text-align center
}
</style>
