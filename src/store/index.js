/* 用于创建vuex中的store */

import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        tab
    }
})