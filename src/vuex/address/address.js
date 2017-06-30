import * as types from '../mutation-types'
import * as api from '../api.js'

const state = {
	address: [],
	hasSave: false
}

const getters = {
	userAddress: state => state.address,
	hasSave: state => state.hasSave
}

const mutations = {
	[types.GET_ADDRESS](state, payload){
		state.address = payload.address
	},
	[types.DELETE_ADDRESS](state, payload){
		if(state.address.length === 1) {
			state.address = []
		}else{
			state.address.splice(payload.index, 1)
		}
	},
	[types.EDIT_ADDRESS](state, payload){
		console.log(1)
		state.hasSave = true
	},
	[types.CHANGE_STATUS](state, payload){
		state.hasSave = false
	}
}

const actions = {
	async getAddress({dispatch,commit,state}){
		dispatch('showLoading')
		let address = await api.getAddress()
		dispatch('hideLoading')
		commit({
			type: types.GET_ADDRESS,
			address
		})
	},
	async deleteAddress({dispatch, state, commit}, payload){
		let id = payload.id 
		let index = payload.index

		dispatch('showLoading')
		let msg = await api.deleteAddress(id)
		dispatch('hideLoading')

		commit({
			type: types.DELETE_ADDRESS,
			id,
			index
		})
	},
	async editAddress({dispatch, state, commit}, payload){
		let {address} = payload
		console.log(payload)
		dispatch('showLoading')
		let msg = await api.editAddress()
		dispatch('hideLoading')

		commit({
			type: types.EDIT_ADDRESS,
		})
	},
	changeHasSave({dispatch, state, commit}){
		commit({
			type: types.CHANGE_STATUS,
		})
	}
}



export default {
	state,
	getters,
	actions,
	mutations
}