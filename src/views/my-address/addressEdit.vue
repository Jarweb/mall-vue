<template>
	<div class="z-content">
		<div class="address-edit-wrap">
			<x-input 
				title="姓名" 
				:show-clear="true"
				is-type="china-name"
				:value="ad.name"
				required
				@on-change="changeName" 
				placeholder="姓名">
			</x-input>
			<x-input 
				title="电话" 
				:show-clear="true"
				is-type="china-mobile"
				keyboard="number"
				type="tel"
				:value="ad.tel"
				required
				@on-change="changeTel" 
				placeholder="手机号码">
			</x-input>
			<x-address 
				:title="'地区'" 
				v-model="value" 
				:list="addressData" 
				placeholder="请选择地址">
			</x-address>
			<x-textarea 
				:max="50" 
				:height="100"
				:value="ad.address"
				@on-change="changeAddress" 
				:show-counter="false"
				placeholder="请填写详细地址">
			</x-textarea>
		</div>
		<div 
			class="address-edit-btn"
			@click="submitHandle">保存</div>
	</div>
</template>
<script>
require('./addressEdit.less')
import {XInput,XAddress,ChinaAddressData,XTextarea} from 'vux'

export default {
	components: {
		XInput,
		XAddress,
		XTextarea
	},
	data() {
		return {
			ad: {},
			value: [],
			addressData: ChinaAddressData,
			
		}
	},
	computed: {
		hasSave() {
			return this.$store.getters.hasSave
		}
	},
	watch: {
		hasSave: function(val, oldVal) {
			// 数据没变化时，不会触发改方法
			console.log(val, oldVal)
			if(val){
				this.$store.dispatch({
					type: 'changeHasSave'
				})
				this.$router 
					? this.$router.back() 
					: window.history.back()
			}
		}
	},
	created(){
		console.log(this.$route.params.ad)
		this.ad = this.$route.params.ad || {
			name: '',
			tel: '',
			address: ''
		}
	},
	methods: {
		changeName (val) {
		  	console.log(val)
		  	this.ad.name = val
		},
		changeTel (val) {
		  	console.log(val)
		  	this.ad.tel = val
		},
		changeAddress (val) {
		  	console.log(val)
		  	this.ad.address = val
		},
		submitHandle(){
			console.log(this.value)
			this.$store.dispatch({
				type: 'editAddress',
				address: {
					name: this.ad.name,
					tel: this.ad.tel,
					address: this.ad.address,
					cityCode: this.value
				}
			})
		}
	}
}
</script>