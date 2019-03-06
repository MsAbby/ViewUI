<template>
  <div class="card-basic">
    <div class="card-left">
      <img src="../../assets/images/timg.jpg" alt="">
    </div>
    <div class="card-right">
      <h3 class="title">基于Spring Cloud 微服务架构 广告系统与实现</h3>
      <div class="bottom-box">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style lang="less" scoped>
.card-basic {
  display: flex;
  height: 200px;
  padding: 20px;
  background: #fff;
  box-sizing: border-box;
}
.card-left {
  width: 240px;
  margin-right: 20px;
  display: flex;
  img {
    width: 240px;
    border-radius: 15px;
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
    line-height: 46px;
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
</style>