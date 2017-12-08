
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="carousel">
      <ul @click="goNext">
        <li>
          <img src="../assets/1.jpg">
        </li>
        <li>
          <img src="../assets/2.jpg">
        </li>
        <li>
          <img src="../assets/3.jpg">
        </li>
        <li>
          <img src="../assets/4.jpg">
        </li>
        <li>
          <img src="../assets/girl.jpg">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '轮播图',
      currentIndex: 0,
      width: 1260
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    goNext() {
      this.currentIndex = (this.currentIndex + 1) % 5;
      this.load()
    },
    load() {
      let pages = $("ul");
      [].forEach.call(pages, (item, index) => {
        const next = (this.currentIndex + 1) % 5;
        if (next)
        item.style.left = - this.currentIndex * this.width + 'px';
        if (index == this.currentIndex) {
          item.style.display = 'none'
        }
      })
    }
  }
}
</script>
<!-- # 用于图片轮播 -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "./gallary.less";
</style>
<!--
1. 布局
  * ul width 固定 超过隐藏， 相对定位
  * li 绝对定位，依次后移
2. 功能
  * 向前移动， 向后移动，循环自动移动，调到指定的页面
  * 移动配上动画，beziar曲线
-->