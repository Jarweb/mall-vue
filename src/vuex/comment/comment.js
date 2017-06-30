import * as types from '../mutation-types'
import * as api from '../api.js'

const state = {
	comments: [],
	commentGoods: [],
	rateTips: []
}

const getters = {
	comments: state => state.comments,
	commentGoods: state => state.commentGoods,
	rateTips: state => state.rateTips
}

const mutations = {
	[types.UPDATE_COMMENTS] (state, payload) {
		state.comments = payload.comments
	},
	[types.GET_COMMENTPOST] (state, payload){
		console.log(payload)
		state.commentGoods = payload.commentGoods
		state.rateTips = payload.rateTips
	},
	[types.SET_ONECOMMENT] (state, payload) {
		state.commentGoods = state.commentGoods.map(item => {
			if(item.id == payload.id){
				item.comment = payload.comment
			}
			return item
		})
	}
}

const actions = {
	async getComments({dispatch, commit, state}) {
		dispatch('showLoading')
		let comments = await api.getComments()
		dispatch('hideLoading')

		commit({
			type: types.UPDATE_COMMENTS,
			comments
		})
	},

	async getCommentPost({dispatch, commit, state}) {
		dispatch('showLoading')
		let commentpost = await api.getCommentPost()
		console.log(commentpost)
		dispatch('hideLoading')
		commit({
			type: types.GET_COMMENTPOST,
			commentGoods: commentpost.goods,
			rateTips: commentpost.rateTip
		})
	},

	setonecomment({dispatch, commit, state}, payload){
		commit({
			type: types.SET_ONECOMMENT,
			id: payload.id,
			comment: payload.content
		})
	},

	async submitComments({dispatch, commit, state}) {
		let comments = []
		state.commentGoods.forEach(item => {
			if(item.comment){
				comments.push(comment)
			}
		})
		await api.postComment({comments})
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}