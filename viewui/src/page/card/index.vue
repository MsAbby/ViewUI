<template>
  <div class="card-page">
    <p style="text-align: center; font-size: 20px; line-height:40px;">复用卡片1</p>
    <!-- 1   a_card_lr-->
    <a-card :image="image" :title="title">
      <div class="bottom-left">
        <p class="first">满减</p>
        <p class="two">币299</p>
      </div>
      <p class="bottom-right">2019-03-03</p>
    </a-card>
    <!-- 2   a_card_lr-->
    <a-card :image="image" :title="title" :desc="desc">
      <div class="bottom-left">
        <p class="first">满减</p>
        <p class="two">币299</p>
      </div>
      <p class="bottom-right">2019-03-03</p>
    </a-card>
    <!-- 3   a_card_lr-->
    <a-card :image="image" :title="title" :desc="desc">
    </a-card>

     <!-- 4   a_card_rl-->
     <b-card :image="image" :title="title">
        <div class="bottom-left">
          <p class="first">满减</p>
          <p class="two">币299</p>
        </div>
        <p class="bottom-right">2019-03-03</p>
      </B-card>
      <!-- 5   a_card_rl-->
      <b-card :image="image" :title="title" :desc="desc">
        <div class="bottom-left">
          <p class="first">满减</p>
          <p class="two">币299</p>
        </div>
        <p class="bottom-right">2019-03-03</p>
      </b-card>
      <!-- 6   a_card_rl-->
      <b-card :image="image" :title="title" :desc="desc">
      </b-card>
  </div>
</template>
<script>
import ACard from '../../components/a_card_lr/card'
import BCard from '../../components/a_card_rl/card'
import img from '../../assets/images/timg.jpg'
export default {
  data () {
    return {
      image: img,
      title: '基于Spring Cloud 微服务架构 广告系统与实现',
      desc: '小程序是一种新的开放能力',
    }
  },
  components: {
    ACard,
    BCard
  }
}
</script>
<style>
</style>