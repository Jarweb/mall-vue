<template>
	<div class="myaddress-list-wrap">

		<empty-view
			v-show="!loading"
			v-if="address.length === 0"
			:iconCls="'zui-icon-COUPON'"
			:text="'您还没创建过地址!'">
		</empty-view>

		<address-card 
			v-else
			v-for="(item,index) in address"
			@on-address-selected="selectAddress(index)"
			@on-address-delete="deleteAddress(item.id,index)"
			:tool="true"
			:data="item"
			:selected=" index === selected ? true : false">
		</address-card>

		<router-link
			class="address-add-btn"
			:to="{name: 'addressEdit'}">
			新建地址
		</router-link>
	</div>
</template>

<script>
require('./myAddress.less')
import {userAddress} from '../../data/data.js'

import EmptyView from '../../components/emptyView.vue'
import AddressCard from '../../components/addressCard.vue'

export default {
	components: {
		AddressCard,
		EmptyView
	},
	data() {
		return {
			selected: -1
		}
	},
	created(){
		this.$store.dispatch('getAddress')
	},
	computed: {
		loading(){
			return this.$store.getters.loading
		},
		address(){
			return this.$store.getters.userAddress
		}
	},
	methods: {
		selectAddress(index){
			this.selected = index
		},
		deleteAddress(id,index){
			this.$store.dispatch({
				type: 'deleteAddress',
				id,
				index
			})
		}
	}
}
</script>