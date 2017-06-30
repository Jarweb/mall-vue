import * as types from '../mutation-types'
import * as api from '../api.js'

// state
const state = {
	shop: {
		logo: '',
		title: '',
		shareInfo: {
			title: '长按二维码分享',
			qrcode: '/static/img/good-default.jpg'
		}
	},
	shopBanner: [],
	shopCat: [],
	floor1: [],
	recommendGoods: []
}

// getter
const getters = {
	shop: state => state.shop,
	shopBanner: state => state.shopBanner,
	shopCat: state => state.shopCat,
	floor1: state => state.floor1,
	recommendGoods: state => state.recommendGoods,
}

// mutations
const mutations = {
	[types.UPDATE_SHOP] (state, payload) {
	  state.shop.title = payload.shop.title
	  state.shop.logo = payload.shop.logo
	}
}

// actions
const actions = {
	async initShop({commit, state}) {
		let shop = await api.getShop()
		commit({
			type: types.UPDATE_SHOP, 
			shop
		})
	},
}

export default {
	state,
	getters,
	actions,
	mutations
}