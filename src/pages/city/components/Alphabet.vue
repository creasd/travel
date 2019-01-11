<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(item,key) in cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet",
  props:{
      cities:Object
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 1.78rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.44rem;
    color: $bgcolor;
  }
}
</style>

