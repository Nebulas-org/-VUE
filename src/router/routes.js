import {resolve} from 'path'
// 主目录文件目录文件
const ROOTCATALOG = '/'
// 主路由
export const routes=[
    {
        path:ROOTCATALOG,
        component:resolve=>require(['view/layout'],resolve),
        redirect:ROOTCATALOG+'index',
        children:[
            // 首页
            {
                path:'index',
                name:'index',
                meta:{keepAlive:true},
                component:resolve=>require(['view/index'],resolve)
            },
            //产品详情页insight
        // {
        //     path: 'productDetailInsight',
        //     name:'productDetailInsight',
        //     meta: {keepAlive:true},
        //     component: resolve => require(['view/productDetailInsight'], resolve)
        //   },   
        ]
    },
    // {
    //     path:'/static/noSupport.html',
    //     name:'noSupport',
    //     component:resolve=>require(['view/noSupport'],resolve)
    // },
    // {
    //     path:'*',
    //     redirect:ROOTCATALOG
    // }
]