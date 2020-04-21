<!-- 双向数据绑定 -->
<template>
<div>
    <h1>文本框</h1>
    <h3>文本</h3>
    <input type="text" v-model="person.username"><br>
    显示username：{{person.username}}
    <br><button @click="gai">修改username</button>
    <label>女</label>
    <input type="radio" value="female" v-model="person.gender">
    <label>男</label>
    <input type="radio" value="male" v-model="person.gender">
    <hr>
    <h2>下拉列表</h2>
    <select v-model="person.identity">
    <option value="请选择">请选择</option>
    <option value="教师">教师</option>
    <option value="学生">学生</option>
    <option value="消防员">消防员</option>
    </select>
    <hr>
    <h2>个人信息</h2>
    username：{{person.username}}<br>
    gender：{{person.gender}}<br>
    hobbies：{{person.hobbies}}<br>
    identity：{{person.identity}}
    <hr>
    <h3>多选按钮</h3>
    <input type="checkbox" value="跑步" v-model="person.hobbies">跑步
    <input type="checkbox" value="游泳" v-model="person.hobbies">游泳
    <input type="checkbox" value="爬山" v-model="person.hobbies">爬山
</div>
</template>

<script>
export default {
  data () {
    return {
      person: {
        username: 'zhangbiao',
        gender: 'male',
        hobbies: ['跑步'],
        identity: '请选择'
      }
    }
  },
  methods: {
    gai: function () {
      this.person.username = 'abcd'
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
