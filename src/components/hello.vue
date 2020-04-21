<template>
    <div>
        <h1 ref="hello">this is vue</h1>
        <h2>{{message}}</h2>
        <h3>{{hobbies[0]}}</h3>
        {{6+7}}
        {{6*7}}
        {{6>7?6:7}}
        {{message.split('').reverse().join('')}}
        <button @click="say">say</button>
        <button @click="hello('hello')">hello</button>
        <hr>
        <a v-bind:href="baidu">百度</a>
        <p v-bind:class="b">this is a p tag</p>
        <div>
          <ul>
            <!-- <li v-for='(item,index) in hobbies' v-bind:key="index">{{item}}{{index}}</li> -->
            <li v-for='(value,key) in person' v-bind:key="key">{{key}}:{{value}}</li>
          </ul>
        </div>
    </div>
</template>>
<script>
export default {
  data () {
    return {
      message: 'hello vue',
      hobbies: ['爬山', '游泳', '跑步', '羽毛球'],
      person: {'name': '张彪', 'age': '18'},
      baidu: 'http://www.baidu.com',
      b: 'b'
    }
  },
  adderss: '北京',
  methods: {
    say: function () {
      alert('hello nihao')
    },
    hello: function (newMessage) {
      this.message = newMessage
      // console.log(this.message)
      // console.log(this.$el)
      // console.log(this.$data)
      // console.log(this.$options.methods)
      // console.log(this.$options.adders)
      // console.log(this.$refs.hello)
    }
  }
}
</script>
<style scoped>
    h1{
        font-size: 30px;
        color: red;
    }
    li{
      list-style: none;
    }
    .b{
      width: 100px;
      height: 100px;
      color: blue;
      border: 1px solid red;
    }
</style>
