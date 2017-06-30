import * as types from '../mutation-types'
import * as api from '../api.js'

const state = {
	order: {},
	orders: [],
	needPayOrders: [],
	needSeedOrders: [],
	needGetOrders: [],
	needCommentOrders: [],
	needServiceOrders: []
}

const getters = {
	orders: state => state.orders,
	order: state => state.order,
	// needPayOrders: state => state.needPayOrders,
	// needSeedOrders: state => state.needSeedOrders,
	// needGetOrders: state => state.needGetOrders,
	// needCommentOrders: state => state.needCommentOrders,
	// needServiceOrders: state => state.needServiceOrders
}

const mutations = {
	[types.UPDATE_ORDERS] (state, payload) {
		state.orders = payload.orders
	},

	[types.CHNAGE_ORDERS] (state, payload) {
		let tag = payload.tag
		let orders = payload.orders

		switch(tag){
		case 'needPay':
			state.orders = orders.filter((i) => {
				return i.state === 'needPay'
			})
			break;
		case 'needSend':
			state.orders = orders.filter((i) => {
				return i.state === 'needSend'
			})
			break;
		case 'needGet':
			state.orders = orders.filter((i) => {
				return i.state === 'needGet'
			})
			break;
		case 'needComment':
			state.orders = orders.filter((i) => {
				return i.state === 'needComment'
			})
			break;
		case 'needService':
			state.orders = orders.filter((i) => {
				return i.state === 'needService'
			})
			break;
		case 'all':
			state.orders = orders
			break;
		}
	},

	[types.UDPATE_ORDER] (state, payload){
		state.order = payload.order
	}
}

const actions = {
	async getOrders({dispatch, commit, state}) {
		dispatch('showLoading')
		let orders = await api.getOrders()
		dispatch('hideLoading')

		commit({
			type: types.UPDATE_ORDERS,
			orders
		})
	},

	async changeOrderTag({dispatch, commit, state}, payload) {
		let tag = payload.tag

		dispatch('showLoading')
		let orders = await api.getOrders()
		dispatch('hideLoading')

		commit({
			type: types.CHNAGE_ORDERS,
			orders,
			tag
		})
	},

	async getOrder({dispatch, commit, state}, payload){
		let id = payload.id 
		dispatch('showLoading')
		let order = await api.getOrder(id)
		dispatch('hideLoading')

		commit({
			type: types.UDPATE_ORDER,
			order
		})
	}

}

export default {
	state,
	getters,
	actions,
	mutations
}