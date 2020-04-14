<template>
    <div>
        <h1>this is vue</h1>
        <h2>{{message}}</h2>
        <h3>{{hobbies[0]}}</h3>
        <button @click="say">say</button>
        <button @click="hello('hello')">hello</button>
    </div>
</template>>
<script>
export default {
  data () {
    return {
      message: 'hello vue',
      hobbies: ['爬山', '游泳', '跑步', '羽毛球']
    }
  },
  methods: {
    say: function () {
      alert('hello nihao')
    },
    hello: function (newMessage) {
      this.message = newMessage
      console.log(this.message)
    }
  }
}
</script>
<style scoped>
    h1{
        font-size: 30px;
        color: red;
    }
</style>
