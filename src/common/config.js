// 区分生产环境还是开发环境
const Edition =process.env.NODE_ENV;
let Api_URL='';
switch(Edition){
    case 'production':
        Api_URL='/huatech';
        break;
    case 'testing':
        Api_URL = '';
        break;
    default:
        Api_URL='/';
}

// 导出请求地址
export const API = Api_URL;