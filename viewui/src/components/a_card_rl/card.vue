<template>
  <div class="card-basic">
    <div class="card-left">
      <h3 class="title">{{ title }}</h3>
      <p class="desc">{{ desc }}</p>
      <div class="bottom-box">
        <slot></slot>
      </div>
    </div>
    <div class="card-right">
      <img :src="image" alt="">
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
.card-basic {
  display: flex;
  height: 200px;
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.card-left {
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
  .desc {
    font-size: 26px;
    line-height: 32px;
    color: #ccc;
    background: #fff;
    text-align: justify;
  }
  .bottom-box {
    text-align: left;
    background: #fff;
    .bottom-left {
      background: #fff;
      float: left;
      p {
        display: inline-block;
        background: #fff;
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .bottom-right {
      background: #fff;
      float: right;
    }
  }
}
.card-right {
  width: 240px;
  margin-left: 20px;
  display: flex;
  img {
    width: 240px;
    border-radius: 15px;
  }
 
}
</style>