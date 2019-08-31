<template>
  <div>
    <div>你好啊</div>
    <button type="button" @click="add()">添加</button>
  </div>
</template>

<script>
  /*@ 代表src目录*/
  import store from '@/store'
  export default {
    name: "info",
    methods:{
      add(){
        console.log(11111);
        // 点击时调用store内部的此方法
        store.commit('increase');
      }
    }
  }
</script>
<style scoped>

</style>
