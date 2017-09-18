import axios from 'axios'
// 可能需要重定向
import router from '../router'
// 引入mint-ui 弹框
import { MessageBox } from 'mint-ui'

//axios中文文档：https://www.kancloud.cn/yunye/axios/234845
//自定义配置新建一个 axios 实例
const Axios = axios.create({
    baseURL: '/bridge/',
    timeout: 10000,
    responseType: 'json',
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    },
    // 表示跨域请求时是否带上cookie
    withCredentials: false
})

// 添加请求拦截器
Axios.interceptors.request.use(
    config => {
        if (
            config.method === "post" ||
            config.method === "put" ||
            config.method === "delete"
        ) {
            // 序列化
            config.data = qs.stringify(config.data);
        }
        return config
    },
    error => {
        MessageBox({
            title: '提示',
            message: '请求错误'
        });
        return Promise.reject(error);
    }
)

// 添加响应拦截器
Axios.interceptors.response.use(
    res => {
        // 返回数据报错
        // if(re.data && !res.data.) {
        // MessageBox({
        //     title: '提示',
        //     message: '错误'
        // });
        //return Promise.reject(res.data.error.message);
        // }
        return res;
    },
    error => {
        if (error.response.status === 403) {
            router.push({
                path: "/error/403"
            });
        }
        if (error.response.status === 500) {
            router.push({
                path: "/error/500"
            });
        }
        if (error.response.status === 502) {
            router.push({
                path: "/error/502"
            });
        }
        if (error.response.status === 404) {
            router.push({
                path: "/error/404"
            });
        }
        return Promise.reject(error);
    }
)

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, "$ajax", { value: Axios });
    }
};