import Vue from 'vue'
// import Vuex from 'vuex'
var  Vuex = require('../../node_modules/vuex/dist/vuex.min.js') 

import base from './base/base'
import article from './article/article'
import home from './home/home'
import coupon from './coupon/coupon.js'
import myLikes from './myLikes/myLikes.js'
import address from './address/address.js'
import cat from './cat/cat.js'
import comment from './comment/comment.js'
import order from './order/order.js'
import goodDetail from './goodDetail/goodDetail.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		base,
		home,
		article,
		coupon,
		myLikes,
		address,
		cat,
		comment,
		order,
		goodDetail
	}
})