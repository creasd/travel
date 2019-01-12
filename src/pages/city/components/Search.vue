<template>
  <div class="search-wrapper">
    <div class="search">
      <input type="text" class="search-input" placeholder="输入城市名" v-model="keyword">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有匹配到数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  data() {
    return {
      keyword: "",
      list: []
    };
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyword() { //监听data 中的 keyword
      const newList = [];
      if (!this.keyword) {
        this.list = [];
        return;
      }
      for (let i in this.cities) {
        this.cities[i].forEach(value => {
          if (
            value.spell.includes(this.keyword) ||
            value.name.includes(this.keyword)
          ) {
            newList.push(value);
          }
        });
      }
      this.list = newList;
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  line-height: 0.72rem;
  padding: 0.1rem;
  background: $bgcolor;

  .search-input {
    box-sizing: border-box;
    height: 0.62rem;
    padding: 0 0.15rem;
    border-radius: 0.06rem;
    text-align: center;
    width: 100%;
    color: #666;
  }

  .search-input::placeholder {
    font-size: 12px;
  }
}

.search-content {
  position: absolute;
  top: 1.78rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  z-index: 1;
  overflow: hidden;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #666;
    background-color: #fff;
  }
}
</style>