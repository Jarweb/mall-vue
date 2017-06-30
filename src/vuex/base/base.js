import * as types from '../mutation-types'

const state = {
	loading: false,
}

const getters = {
	loading: state => state.loading
}

const mutations = {
	[types.SHOW_LOADING] (state, payload) {
		state.loading = payload.status
	},
	[types.HIDE_LOADING] (state, payload) {
		state.loading = payload.status
	}
}


const actions = {
	showLoading({commit,state}){
		commit({
			type: types.SHOW_LOADING, 
			status: true
		})
	},
	hideLoading({commit,state}){
		commit({
			type: types.HIDE_LOADING, 
			status: false
		})
	}
}


export default {
	state,
	getters,
	mutations,
	actions
}