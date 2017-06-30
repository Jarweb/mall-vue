import * as types from '../mutation-types'
import * as api from '../api.js'

const state = {
	couponTag: [
		{
			tag: 'usefull',
			text: '未使用'
		},
		{
			tag: 'unusefull',
			text: '已使用'
		},
		{
			tag: 'timeout',
			text: '已失效'
		}
	],
	coupons: [],
	unusefullCoupon: [],
	timeoutCoupon: [],
	usefullCoupon: []
}

const getters = {
	couponTag: state => state.couponTag,
	coupons: state => state.coupons,
	unusefullCoupon: state => state.unusefullCoupon,
	timeoutCoupon: state => state.timeoutCoupon,
	usefullCoupon: state => state.usefullCoupon
}

const mutations = {
	[types.UPDATE_TIMEOUTCOUPON] (state, payload) {
		state.coupons = payload.timeoutCoupon
	},
	[types.UPDATE_UNUSEFULLCOUPON] (state, payload) {
		state.coupons = payload.unusefullCoupon
	},
	[types.UPDATE_USEFULLCOUPON] (state, payload) {
		state.coupons = payload.usefullCoupon
	}
}

const actions = {
	async getTimeoutCoupon({dispatch, commit, state}) {
		dispatch('showLoading')
		let timeoutCoupon = await api.getTimeoutCoupons()
		dispatch('hideLoading')
		commit({
			type: types.UPDATE_TIMEOUTCOUPON, 
			timeoutCoupon
		})
	},

	async getUnusefullCoupon({dispatch, commit, state}) {
		dispatch('showLoading')
		let unusefullCoupon = await api.getUnusefullCoupons()
		dispatch('hideLoading')
		commit({
			type: types.UPDATE_UNUSEFULLCOUPON, 
			unusefullCoupon
		})
	},

	async getUsefullCoupon({dispatch, commit, state}) {
		dispatch('showLoading')
		let usefullCoupon = await api.getUsefullCoupons()
		dispatch('hideLoading')
		commit({
			type: types.UPDATE_USEFULLCOUPON, 
			usefullCoupon
		})
	},
}

export default {
	state,
	getters,
	actions,
	mutations
}