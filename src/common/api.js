import $http from './request'
import {API} from './config'

export default{
    // 获取图形验证码
    getImgCode(data){
        return $http.post(`${API}/inst_plat_app/qrcode`,data)
    }
}