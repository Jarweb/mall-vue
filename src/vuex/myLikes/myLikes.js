import * as types from '../mutation-types'
import * as api from '../api.js'

const state = {
	myLikes: []
}

const getters = {
	myLikes: state => state.myLikes
}


const mutations = {
	[types.UPDATE_MYLIKES](state, payload) {
		state.myLikes = payload.myLikes
	},
	[types.DELETE_MYLIKES](state, payload) {
		if(state.myLikes.length === 1){
			state.myLikes = []
		}else{
			state.myLikes.splice(payload.index, 1)
		}
	}
}


const actions = {
	async updateMyLikes({dispatch, state, commit}){
		dispatch('showLoading')
		let myLikes = await api.getMyLikes()
		dispatch('hideLoading')
		commit({
			type: types.UPDATE_MYLIKES,
			myLikes
		})
	},
	async deleteMyLike({dispatch, state, commit}, payload){
		let id = payload.id
		let index = payload.index
		dispatch('showLoading')
		let msg = await api.deleteMyLikes(id)
		dispatch('hideLoading')
		commit({
			type: types.DELETE_MYLIKES,
			id,
			index
		})
	}

}


export default {
	state,
	getters,
	actions,
	mutations
}