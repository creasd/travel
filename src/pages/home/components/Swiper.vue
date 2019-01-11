<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showswiper">
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
      }
    };
  },
  props:{
    swiperList:Array
  },
  computed: {
    showswiper(){     //让swiper在获取到数据之后再创建
      return this.swiperList.length
    }
  },
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



