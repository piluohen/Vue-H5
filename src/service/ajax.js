// 公共ajax模块，使用axios插件，配置默认参数后供全站使用

import axios from 'axios'

// var _ajax = axios.create({
//     baseURL: '/api/front'
//     ,timeout: 1000
//     ,headers: {'X-Requested-With': 'foobar'}
// });
// export default _ajax

const HOST = '/v1/app';

export function fetch(url, params, method = 'GET') {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: HOST + url,
            params: params
        })
        .then((response) => {
            resolve(response.data)
        }) 
        .catch((error) => {
            reject(error)
        })
    })
}

export default {
    getHotArticleKeys() {
        return fetch('/queryIndustry')
    },
    getArticleList(params) {
        return fetch(`/getArticleList`, params)
    },
    getArticleDetail(params) {
        return fetch('/getArticleDetail', params)
    },
    getBannerList(params) {
        return fetch('/bannerList', params)
    }
}