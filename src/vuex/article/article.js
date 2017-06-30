import * as types from '../mutation-types'
import * as api from '../api.js'

const state = {
  articles: [],
  banners: [],
  article: {},
  recArtGoods: [],
  recArtArticles: []
}

const getters = {
  articles: state => state.articles,
  banners: state => state.banners,
  article: state => state.article,
  recArtGoods: state => state.recArtGoods,
  recArtArticles: state => state.recArtArticles
}

const mutations = {
  [types.UPDATE_ARTICLES] (state, payload) {
    state.articles = payload.articles
  },
  [types.UPDATE_BANNERS](state, payload) {
    state.banners = payload.banners
  },
  [types.UPDATE_ARTICLE](state, payload) {
    state.article = payload.article
  },
  [types.UPDATE_RECGOODS](state, payload) {
    state.recArtGoods = payload.recArtGoods
  },
  [types.UPDATE_RECARTICLES](state, payload) {
    state.recArtArticles = payload.recArtArticles
  }
}


const actions = {
  async getArticles({dispatch,commit, state}) {
    dispatch('showLoading')
    let articles = await api.getArticles()
    let banners = await api.getBanners()
    dispatch('hideLoading')
    commit({
      type: types.UPDATE_BANNERS,
      banners
    })
    commit({
      type: types.UPDATE_ARTICLES, 
      articles
    })
  },
  async getArticle({dispatch, commit, state}) {
    dispatch('showLoading')
    let article = await api.getArticle()
    let recArtGoods = await api.getRecommendGoods()
    let recArtArticles = await api.getRecommendArticles()
    dispatch('hideLoading')
    commit({
      type: types.UPDATE_ARTICLE,
      article 
    })
    commit({
      type: types.UPDATE_RECGOODS,
      recArtGoods 
    })
    commit({
      type: types.UPDATE_RECARTICLES,
      recArtArticles 
    })
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}