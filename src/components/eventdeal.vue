<!--  -->
<template>
<div>
    <button v-on:click="hello">hello:{{message}}</button> -->
    <button @click="count=count+1">hello：{{count}}</button>
     <button @click="say('hello',$event)">hello：{{message}}</button>
     <div class="a" @click.self="say">
         <div class="b"></div>
     </div>
    <input type="text" @keydown.ctrl.shift="submit">xi
</div>
</template>

<script>
export default {
  data () {
    return {
      message: 'hello vue',
      count: 1
    }
  },
  methods: {
    hello: function (e) {
      this.message = 'no vue'
    },
    say: function (message, e) {
      this.message = message
      console.log(e)
    },
    submit: function (e) {
      alert('asd')
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
.a{
width: 200px;
height: 200px;
background-color: red
}
.b{
width: 100px;
height: 100px;
background-color: blue
}
</style>
