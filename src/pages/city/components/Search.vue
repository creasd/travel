<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名">
  </div>
</template>

<script>
export default {
  name: "CitySearch"
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
</style>