
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue: '',
    data: [],
    limit: 3
  },
  getters: {
    GET_DATA(state){
      return state.data;
    },
    GET_LIMIT(state){
      return state.limit;
    },
    GET_SEARCH(state){
      return state.searchValue;
    }
  },
  mutations: {
    SET_DATA: (state, data) => {state.data = data},
    SET_LIMIT: (state, limit) => {state.limit = limit},
    SET_SEARCH: (state, value) => {state.searchValue = value}
  },
  actions: {
  async GET_DATA_FROM_API(ctx){
   const res = await fetch(`http://localhost:3000/data?_page=1&_limit=${this.state.limit}`);
   const data = await res.json();
   ctx.commit('SET_DATA', data);
   },
   UPDATE_LIMIT(){
   const limit = this.state.limit + 3;
    this.commit('SET_LIMIT', limit);
   },
   UPDATE_SEARCH(value){
    this.commit('SET_SEARCH', value);
   }
  },
  modules: {
    
  }
})
