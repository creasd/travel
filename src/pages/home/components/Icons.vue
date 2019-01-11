<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page_, index) in paging" :key="index">
        <div class="icon" v-for="item in page_" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        autoplay: false,
        pagination: ".swiper-pagination"
      }
    };
  },
  props: {
    iconList: Array
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

.icons >>> .swiper-pagination {
  width: 100%;
  position: static;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
}

.icons >>> .swiper-pagination-bullet {
  margin: 0 4px;
  background: rgba(144, 144, 144, 0.8);
  width: 6px;
  height: 6px;
}

.icons >>> .swiper-pagination-bullet-active {
  background: rgba(0, 175, 190, 0.8);
}

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
        height: 90%;
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
      ellipsis;
    }
  }
}
</style>
