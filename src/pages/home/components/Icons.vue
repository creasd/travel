<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page_, index) of paging" :key="index">
        <div class="icon" v-for="item in page_" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
          autoplay:false
      },
      iconList: [
        {
          id: "001",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "景点门票啊啊啊啊啊"
        },
        {
          id: "002",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "武汉必游"
        },
        {
          id: "003",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          desc: "游乐场"
        },
        {
          id: "004",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
          desc: "城市观光"
        },
        {
          id: "005",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          desc: "海洋馆"
        },
        {
          id: "006",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "007",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif",
          desc: "年中大促"
        },
        {
          id: "008",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
          desc: "武汉欢乐谷"
        },
        {
          id: "009",
          iconUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
          desc: "武汉欢乐谷"
        }
      ]
    };
  },
  computed: {
    paging() {
      const pages = [];
      this.iconList.forEach((obj, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(obj);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-slide {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;
      padding-bottom: 0;

      .icon-img-content {
        display: block;
        margin: 0 auto;
        height: 100%;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      color: $darkTextColor;
      text-align: center;
      ellipsis ();
    }
  }
}
</style>
