<!--  -->
<template>
<div>
    <MyLogo :title='title'></MyLogo>
    <span>千米</span><input type="text" v-model="kliometer"><br>
    <span>米&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <input type="text" v-model="meters">
    <!-- <router-link :to="{name:'styledeno',query:{id:1,name:'zb'}}">style</router-link> -->
    <router-link :to="{name:'styledeno',params:{id:2,name:'zbx'}}">p style</router-link>
</div>
</template>

<script>
import MyLogo from '@/components/logo'
export default {
  components: {
    MyLogo: MyLogo
  },
  data () {
    return {
      kliometer: 0,
      meters: 0,
      title: '给予组件传递的数值'
    }
  },
  methods: {
  },
  watch: {
    kliometer: function (value) {
      this.kliometer = value
      this.meters = value * 1000
    },
    meters: function (value) {
      this.meters = value
      this.klie = value / 1000
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {

  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
