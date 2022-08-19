<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a @click="changeLang">点击切换语言</a>
    你干嘛啊啊
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    changeLang(){
      this.$i18n.locale = this.$i18n.locale==='zh'?'en':'zh'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
