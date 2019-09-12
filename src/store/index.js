import Vue from 'vue'
import Vuex from 'vuex'
import {session} from 'util/stroage.js'
Vue.use(Vuex)

import user from './modules/user'

const store=new Vuex.Store({
    state:{
        showLogin:false,
        // 登录信息
        picUrl:session.get("picUrl")
    },
    getters:{
       get_PicUrl(state){
           state.picUrl=session.get("picUrl");
           return state.picUrl
       }
    },

    mutations:{
        set_PicUrl(state,data){
            state.picUrl=data;
            session.set("picUrl",data);
        }
    },

    modules:{
        user
    }

})


export default store
