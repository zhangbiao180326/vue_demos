<!--  -->
<template>
<div>
    <div id="a" v-bind:class='{blue:isblue,red:isred}'></div>
    <button @click="chang_color">改变背景颜色</button><br>
    <input type="text" v-model="message">
    {{reverseString}}
    <hr>
    <button @click="getparams">接收参数</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'vue js css htnl',
      isblue: true,
      isred: false,
      name: '百度',
      url: 'http://www.baidu.com'
    }
  },
  methods: {
    chang_color: function () {
      this.isblue = !this.isblue
      this.isred = !this.isred
    },
    getparams: function () {
      alert(this.$route.params.id)
    },
    showstu: function (val) {
      this.$router.push({
        name: 'watchdemo',
        query: {
          'id': val
        }
      })
    }
  },
  computed: {
    reverseString: function () {
      return this.message.split('').reverse().join('')
    },
    site: {
      get: function () {
        return this.name + '' + this.url
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
#a{
    width: 100px;
    height: 100px;
}
.red{
    background-color:red
}
.blue{
    background-color:blue
}
</style>
