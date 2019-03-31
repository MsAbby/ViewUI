<template>
    <div>
     <section :class="[panelClass, cname]">
       <h4>{{ title }}</h4>
       <slot></slot>
     </section>
    </div>
  </template>
  <script>
  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: "",
      }
    },
    data () {
      return {
        panelClass: 'panel'
      }
    }
  }
  </script>
  <style lang="scss" module>
  @import '~@/assets/style/mixin.scss';
  .panel {
    @include panel;
  }
  </style>