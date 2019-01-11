<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">C</li>
    <li class="item">D</li>
    <li class="item">E</li>
    <li class="item">F</li>
  </ul>
</template>
<script>
export default {
  name: "CityAlphabet"
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

