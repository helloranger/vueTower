<template>
  <div>
    test页面
    <br><br><br><br><br><br>
   通配符*的值： {{$route.params.pathMatch}}
    <br><br><br><br><br><br>
    <br><br><br><br><br><br>
    <button @click="returnPage">返回hello world界面</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  methods:{
    // 返回hello world界面
    returnPage(){
      this.$router.push('/helloWorld');
    }
  }
}
</script>

<style scoped></style>
