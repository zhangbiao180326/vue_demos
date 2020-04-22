<!--  -->
<template>
<div>
    <select id="prov" @click="getProvince">
        <option v-for="p in prov" v-bind:key="p" :value="p">
            {{p}}
        </option>
    </select>
    <select id="city">
        <option v-for="city in citys" v-bind:key="city" :value="city">
            {{city}}
        </option>
    </select>
</div>
</template>

<script>
export default {
  data () {
    return {
      ajax: {},
      prov: [],
      citys: []
    }
  },
  // 生命周期 - 创建完成（访问当前this实例）
  created () {

  },
  methods: {
    getProvince: function () {
      let provinceName = document.getElementById('prov').value
      for (let index = 0; index < this.ajax.length; index++) {
        for (let key in this.ajax[index]) {
          if (key === provinceName) {
            this.citys = this.ajax[index][key]
            console.log(this.citys)
          }
        }
      }
    }
  },
  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    this.$axios({
      url: '/data/province',
      method: 'get'
    }).then(resp => {
      this.ajax = resp.data
      console.log(this.ajax)
      for (var t = 0; t < this.ajax.length; t++) {
        for (let key in this.ajax[t]) {
          this.prov.push(key)
        }
      }
      for (let key in this.ajax[0]) {
        this.citys = this.ajax[0][key]
      }
    })
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>
