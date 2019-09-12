import {session} from 'util/stroage.js'
const state={
    setJurisdiction:[]
};

const mutations={
    //数组形式返回对象所有key值
    ...Object.keys(state).reduce((obj ,key) =>{
        return {
            ...obj,
            [key]:(state,payload)=>state[key]=payload,
        }
    },{}),
}

export default {
    namespaced:true,
    state,
    mutations,
}