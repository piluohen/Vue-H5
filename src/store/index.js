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
        bannerList: []
    },
    actions: {
        // 设置nav导航是否显示，最热资讯显示
        setNavShow({ commit }, payload) {
            commit('navshow', payload)
        },
        setHFShow({ commit }, payload) {
            commit('hfshow', payload)
        },
        getNewsListId({ commit }, payload) {
            commit('newsListId', payload)
        },
        getIndustryId({ commit }, payload) {
            commit('industryId', payload)
        },
        setHotShow({ commit }, payload) {
            commit('hotShow', payload)
        },
        getHotArticleKeys({ commit }, payload) {
            api.getHotArticleKeys().then(res => {
                commit('acticleKeys', res)
            }).catch(error => {
                this.$toast('获取活动信息失败！')
            })
        },
        // 获取新闻列表
        getArticleList({ commit }, payload) {
            api.getArticleList(payload).then(res => {
                commit('articleList', res)
            }).catch(error => {
                this.$toast('获取活动信息失败！')
            })
        },
        getArticleDetail({ commit }, payload){
            api.getArticleDetail(payload).then(res => {
                commit('articleDetail', res)
            }).catch(error => {
                this.$toast('获取活动信息失败！')
            })
        },
        getBannerList({ commit }, payload){
            api.getBannerList(payload).then(res => {
                commit('bannerList', res)
            }).catch(error => {
                this.$toast('获取活动信息失败！')
            })
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
            state.homeList = state.homeList.contact(res.rows)
        },
        ['articleDetail'](state, res) {
            state.articleDetail = res.data
        },
        ['bannerList'](state, res) {
            state.bannerList = res.rows
        }
    }
}

const store = new Vuex.Store({
    modules: {
        nav
    }
})

export default store