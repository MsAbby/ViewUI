<template>
    <div>
      <a-panel title="主题" :class="$style.panel">
        <div :class="$style.content"></div>
      </a-panel>
    </div>
  </template>
  <script>
  import aPanel from './panel1.vue'
  export default {
    data () {
      return {

      }
    },
    components: {
      aPanel
    }
  }
  </script>
  <style lang="scss" module>
    .panel {
      height: 300px;
      h4 {
        padding: 20px 0;
        background: rgb(203, 250, 149);
      }
      .content {
       height: 200px;
       background: rgb(211, 248, 231);
      }
    }
  </style>