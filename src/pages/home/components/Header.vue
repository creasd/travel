<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="stylus" scoped>
// 1rem = html font-size  = 50px    2x图  /100 >>> 转换为rem
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: $headerHeight;
  background-color: $bgcolor;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background-color: #fff;
    border-radius: 0.1rem;
    margin-right: 0.15rem;
    color: #ccc;
  }

  .header-right {
    color: #fff;
    width: 1.24rem;
    float: right;

    text-align center {
      .arrow-icon {
        font-size: 0.24rem;
        margin-left: -0.04rem;
      }
    }
  }
}
</style>