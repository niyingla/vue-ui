<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{msg}}</p>
  </div>
</template>
<script>
  import store from '@/store'
  export default {
    name:'about',
    data(){
      return {
        //获取store字段的值
        msg: store.state.count
      }
    }
  }
</script>
