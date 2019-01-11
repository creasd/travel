<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">深圳</div>
          </div>
          <div class="button-wrapper">
            <div class="button">武汉</div>
          </div>
          <div class="button-wrapper">
            <div class="button">长沙</div>
          </div>
          <div class="button-wrapper">
            <div class="button">珠海</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
          <div class="item border-bottom">鞍山</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before { // &：表示上一级选择器即border-topbottom
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ddd;
  }
}

.list {
  position: absolute;
  top: 1.78rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    color: #666;
    background: #eee;
    font-size: 0.26rem;
    padding-left: 0.2rem;
  }

  .button-list {
    padding: 0.1rem;
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.3%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        text-align: center;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>