import * as types from '../mutation-types'
import * as api from '../api.js'

const state = {
	catTags: [
		{
			tag: 'chaju',
			text: '茶具'
		},
		{
			tag: 'jiuju',
			text: '酒具'
		},
		{
			tag: 'chuanping',
			text: '床品'
		},
		{
			tag: 'huaqi',
			text: '花器'
		},
		{
			tag: 'canju',
			text: '餐具'
		},
		{
			tag: 'chaju',
			text: '茶具'
		},
		{
			tag: 'jiuju',
			text: '酒具'
		},
		{
			tag: 'chuanping',
			text: '床品'
		},
		{
			tag: 'huaqi',
			text: '花器'
		},
		{
			tag: 'canju',
			text: '餐具'
		}
	],
	catBanner: [],
	catResult: []
}

const getters = {
	catTags: state => state.catTags,
	catBanner: state => state.catBanner,
	catResult: state => state.catResult
}

const mutations = {
	[types.UPDATE_CATBANNER] (state, payload) {
		state.catBanner = payload.catBanner
	},

	[types.UPDATE_CATRESULT] (state, payload) {
		state.catResult = payload.catResult
	},
}

const actions = {
	async getCatResult({dispatch, commit, state}) {
		dispatch('showLoading')
		let catBanner = await api.getCatBanner()
		let catResult = await api.getCatResult()
		dispatch('hideLoading')

		commit({
			type: types.UPDATE_CATBANNER,
			catBanner
		})
		commit({
			type: types.UPDATE_CATRESULT,
			catResult
		})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}