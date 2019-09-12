import Axios from 'axios';
// 请求数据转化，字符串或者json对象
import qs from "qs";
import {session} from 'util/stroage';
import {Message} from 'element-ui'

// 添加请求拦截器
Axios.interceptors.request.use(function(config){
    return config;
},function(error){
    // 对请求错误做些什么
    return Promise.reject(error)
})

const request =(method,url,options)=>{
    const params ={}
    let option=Object.assign({},params,options)
    // 如果是get请求，处理参数
    options=method==="get" ? {params:option}:{data:qs.stringify(option)}

    let config = Object.assign({},{
        method,url
    },options)

    // 如果是POST请求，添加headers
    if(method =='post'){
        config.headers=Object.assign({
            'Content-Type': 'application/x-www-form-urlencoded' 
        },config.headers)
    }

    return new Promise((resolve,reject)=>{
        Axios(url,config).then(result=>{
            resolve(result.data)
        }).catch(err=>{
            reject(err)
        })
    })
}


// 导出
export default {
    get(url,config){
        return request("get",url,config)
    },
    post(url,config){
        return request('post',url,config)
    }
}