<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button em">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
            class="button-wrapper" 
            v-for="item in hotcities" 
            :key="item.id"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div 
        class="area" 
        v-for="(item,key,i) in cities" 
        :key="i"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div 
          class="item-list" 
          v-for="innerItem in item" 
          :key="innerItem.id"
        >
          <div class="item border-bottom">{{innerItem.name}}</div>
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
  },
  props: {
    hotcities: Array,
    cities:Object,
    letter:String
  },
   watch: {
    letter(){
      if(this.letter){
        //this.letter 的值即为 各个字母 也就是ref所绑定的  :ref="key"
        // console.log(this.$refs);
        const element = this.$refs[this.letter][0];    
        this.scroll.scrollToElement(element);         //利用better-scroll插件的 scrollToElement 实现跳转到每个字母所对应的位置
      }
    }
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
      .button.em{
        border: 0.02rem solid $bgcolor;
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