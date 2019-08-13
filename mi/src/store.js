import Vue from 'vue';
import Vuex from 'vuex';;

Vue.use(Vuex);
const state = {
    
    tel:window.sessionStorage.getItem('tel')
}
const mutations = {
    GET_USER:(state,data) => {
        console.log(11111)
        state.tel = data;
        window.sessionStorage.setItem('tel',data)
    },
    LOGOUT:(state) => {
        state.tel = null;
        window.sessionStorage.removeItem('tel')
    }
}
const actions = {};
export default new Vuex.Store({
    state,
    mutations,
    actions
})