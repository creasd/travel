<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        // 所有的参数同 swiper 官方 api 参数
        pagination: ".swiper-pagination",
        loop: true,
        autoplay:2000
      },
      swiperList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1812/82/485722b356f99302.jpg_750x200_dcc608d6.jpg"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1811/29/2a6b77b6ff72402.jpg_750x200_d4cec568.jpg"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1811/a8/cb43c4ac6c215d02.jpg_750x200_83dee994.jpg"
        },
        {
          id: "0004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg"
        },
        {
          id: "0005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
// >>>:引用了第三方组件，需要在组件中局部修改第三方组件的样式，而又不想去除scoped属性造成组件之间的样式污染。此时只能通过特殊的方式，穿透scoped。
.wrapper >>> .swiper-pagination-bullet
  background-color rgba(0, 0, 0, 1)
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff
.swiper-img
  width 100%
</style>



