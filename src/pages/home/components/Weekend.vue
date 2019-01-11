<template>
  <div class="recommend">
    <div class="top_title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg",
          title: "故宫",
          desc: "东方宫殿建筑代表，世界宫殿建筑典范"
        },
        {
          id: "0002",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1711/4f/59f533696344fe.jpg_r_640x214_f8aa8c8f.jpg",
          title: "南山滑雪场",
          desc: "北京专业级滑雪圣地"
        },
        {
          id: "0003",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg",
          title: "水立方",
          desc: "中国的荣耀，阳光下的晶莹水滴"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.top_title {
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  height: 0;
  overflow: hidden;
  padding-bottom: 33.9%;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }
}
</style>