<!--  -->
<template>
<div>
    <input type="text" v-model="site">
    {{site}}<br>
    <button @click="setsite">点击</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      name: '百度',
      url: 'http://www.baidu.com'
    }
  },
  methods: {
    setsite: function () {
      this.site = '163 http://www.163.com'
    }
  },
  computed: {
    site: {
      get: function () {
        return this.name + ' ' + this.url
      },
      set: function (newDate) {
        let arr = newDate.split(' ')
        this.name = arr[0]
        this.url = arr[1]
      }
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
