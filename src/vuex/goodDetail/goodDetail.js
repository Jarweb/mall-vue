import * as types from '../mutation-types'
import * as api from '../api.js'

const state = {
	good: {},
	selectParam: []
}

const getters = {
	good: state => state.good,
	selectParam: state => state.selectParam
}

const mutations = {
	[types.SET_SELECTPARAM] (state, payload) {
		console.log(state.selectParam)
		state.selectParam = [...state.selectParam, payload.param]
	},
	[types.GET_GOODDETAIL] (state, payload) {
		state.good = payload.good
	}
}

const actions = {
	selectParams({dispatch, commit, state}, payload) {
		commit({
			type: types.SET_SELECTPARAM,
			param: payload.val
		})
	},

	async getGoodDetail({dispatch, commit, state}, payload){
		let {id} = payload
		dispatch('showLoading')
		let good = await api.getGoodDetail(id)
		dispatch('hideLoading')
		commit({
			type: types.GET_GOODDETAIL,
			good
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}