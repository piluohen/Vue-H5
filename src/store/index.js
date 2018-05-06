import Vue from 'vue'
import Vuex from 'vuex'

import api from 'service/ajax'

Vue.use(Vuex)

const nav = {
    state: {
        navShow: false,
        headerShow: true,
        footerShow: true,
        newsListId: null,
        hotShow: false,
        industryId: null,
        hotKeyWord: [],
        homeList: [],
        articleDetail: {},
        bannerList: [],
        version: {},
        loadFlag: false
    },
    actions: {
        // 设置nav导航是否显示，最热资讯显示
        setNavShow({ commit }, payload) {
            commit('navshow', payload)
        },
        // 设置header与footer是否显示，下载页无
        setHFShow({ commit }, payload) {
            commit('hfshow', payload)
        },
        // 各个页面cateId
        getNewsListId({ commit }, payload) {
            commit('newsListId', payload)
        },
        // 行业ID
        getIndustryId({ commit }, payload) {
            commit('industryId', payload)
        },
        // 设置行业是否显示参数
        setHotShow({ commit }, payload) {
            commit('hotShow', payload)
        },
        // 获取行业关键词
        getHotArticleKeys({ commit }, payload) {
            api.getHotArticleKeys().then(res => {
                commit('acticleKeys', res)
            }).catch(error => {
                this.$toast('获取行业关键词失败！')
            })
        },
        // 获取文章列表
        getArticleList({ commit }, payload) {
            api.getArticleList(payload).then(res => {
                commit('articleList', res)
            }).catch(error => {
                this.$toast('获取文章列表失败！')
            })
        },
        // 获取文章详情
        getArticleDetail({ commit }, payload){
            api.getArticleDetail(payload).then(res => {
                commit('articleDetail', res)
            }).catch(error => {
                this.$toast('获取文章详情失败！')
            })
        },
        // 获取轮播列表
        getBannerList({ commit }, payload){
            api.getBannerList(payload).then(res => {
                commit('bannerList', res)
            }).catch(error => {
                this.$toast('获取轮播列表失败！')
            })
        },
        setHomeList({ commit }, payload){
            commit('homeList',payload)
        },
        // 获取安卓下载地址
        getVersion({ commit }, payload){
            api.getVersion(payload).then(res => {
                commit('version', res)
            }).catch(error => {
                this.$toast('获取轮播列表失败！')
            })
        },
        setLoadFlag({ commit }, payload){
            commit('loadFlag', payload)
        }
    },
    getters: {

    },
    mutations: {
        ['navshow'](state, payload) {
            state.navShow = payload.navShow
        },
        ['hfshow'](state, payload) {
            state.headerShow = payload.headerShow
            state.footerShow = payload.footerShow
        },
        ['newsListId'](state, payload) {
            state.newsListId = payload.newsListId
        },
        ['industryId'](state, payload) {
            state.industryId = payload.industryId
        },
        ['hotShow'](state, payload) {
            state.hotShow = payload.hotShow
        },
        ['acticleKeys'](state, res) {
            state.hotKeyWord = res.rows
        },
        ['articleList'](state, res) {
            state.homeList = state.homeList.concat(res.rows)
            if (res.rows.length < 10) {
                state.loadFlag = true
            } else {
                state.loadFlag = false
            }
        },
        ['articleDetail'](state, res) {
            state.articleDetail = res.data
        },
        ['bannerList'](state, res) {
            state.bannerList = res.rows
        },
        ['homeList'](state, payload) {
            state.homeList = payload.homeList
        },
        ['version'](state, res) {
            state.version = res.data
        },
        ['loadFlag'](state, payload){
            state.loadFlag = payload.loadFlag
        }
    }
}

const store = new Vuex.Store({
    modules: {
        nav
    }
})

export default store