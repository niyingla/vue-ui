import Vue from 'vue'
import Vuex from 'vuex'

//引用xuex组建
Vue.use(Vuex)

export default new Vuex.Store({
  /*公用的状态*/
  state: {
    count: 0
  },
  /*改变状态的方法*/
  mutations: {
    /* 定义store内部的方法  引用它都可调用*/
    increase() {
      this.state.count++;
    }
  },
  actions: {}
})
