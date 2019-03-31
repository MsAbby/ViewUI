<template>
  <div class="card-page">
    <p style="text-align: center; font-size: 20px; line-height:40px;">复用卡片1</p>

    <!-- a_card_lr_a-->
    <card-one :image="image" :title="title">
      <div class="bottom-left">
        <p class="first">满减</p>
        <p class="two">币299</p>
      </div>
      <p class="bottom-right">2019-03-03</p>
    </card-one>

    <!--  a_card_lr_a-->
    <card-one :image="image" :title="title" :desc="desc">
      <div class="bottom-left">
        <p class="first">满减</p>
        <p class="two">币299</p>
      </div>
      <p class="bottom-right">2019-03-03</p>
    </card-one>

    <!-- a_card_lr_a-->
    <card-one :image="image" :title="title" :desc="desc">
    </card-one>

    <!-- a_card_lr_b-->
    <card-two :image="image" :title="title">
      <div class="slot-desc" style="background: #fff" slot="desc">
        <p>杨思</p>
        <p>新村</p>
      </div>
      <div class="slot-tag" style="background: #fff" slot="tag">
        <p>南北</p>
        <p>南北</p>
        <p>南北</p>
        <p>南北</p>
      </div>
      <div class="bottom-left" style="background: #fff" slot="bottom">
        <p class="first"><span>3500</span>元/月</p>
        <p class="two">两室一厅</p>
        <p class="two">137m</p>
      </div>
    </card-two>

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
import cardOne from '../../components/a_card_lr_a/card'
import cardTwo from '../../components/a_card_lr_b/card'
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
    cardOne,
    cardTwo,
    BCard
  }
}
</script>
<style>
</style>