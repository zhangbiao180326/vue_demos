<template>
<div>
<h1>vue系统指令</h1>
<div v-text="message"></div>
<div v-html="message"></div>
<div v-if="isShow">为true显示</div>
<div v-else>为false显示</div>
<div v-show="isShow">show</div>
<h3>双向数据绑定</h3>
<tr>
  <td>请输入用户名：</td>
  <td><input type="text" v-model="username"></td>
</tr>
<tr>
  <td>用户名：</td>
  <td>{{username}}</td>
</tr>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: '<h1 class="a">v-html和v-text之间的区别123</h1>',
      isShow: false,
      username: '张彪'
    }
  }
}
</script>

<style>
.a{
  color: red
}
</style>
