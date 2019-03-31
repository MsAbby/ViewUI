<template>
  <div class="card-basic">
    <div class="card-left">
      <img :src="image" alt="">
    </div>
    <div class="card-right">
      <div class="title-wrap trial-wrap">
        <h3 class="title trial-text-one">{{ title }}</h3>
      </div>
      <div class="desc-wrap">
        <slot name="desc"></slot>
      </div>
      <div class="tag-wrap">
        <slot name="tag"></slot>
      </div>
      <div class="bottom-box">
        <slot name="bottom"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    image: String,
    desc: String,
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/frequently.less';
.card-basic {
  display: flex;
  height: 200px;
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.card-left {
  width: 190px;
  margin-right: 20px;
  display: flex;
  img {
    width: 190px;
  }
}
.card-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  
  .title {
    color: #000;
    font-size: 28px;
    line-height: 40px;
    background: #fff;
    text-align: justify;
  }
  .desc-wrap {
    text-align: left;
    background: #fff;
    p {
      display: inline-block;
      font-size: 24px;
      line-height: 30px;
      color: #ccc;
      text-align: center;
      margin-right: 10px;
      background: #fff;
    }
  }
  .tag-wrap {
    text-align: left;
    background: #fff;
    p {
      display: inline-block;
      font-size: 24px;
      line-height: 30px;
      color: #ccc;
      text-align: center;
      margin-right: 30px;
      background: #fff;
    }
  }
  .bottom-box {
    text-align: left;
    background: #fff;
    p {
      display: inline-block;
      background: #fff;
      font-size: 24px;
      line-height: 30px;
      margin-right: 20px;
    }
    .bottom-right {
      background: #fff;
      float: right;
    }
  
  }
}
</style>