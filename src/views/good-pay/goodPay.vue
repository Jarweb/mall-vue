<template>
	<div>
		<div class="good-pay-bottombar">
			<div class="sum-price">总计: ￥{{paySumAmount}}</div>
			<div class="pill-submit-btn">
				<router-link 
					class="btn"
					:to="{
						name: 'payFeedback'
					}">提交订单
				</router-link>
			</div>
		</div>
		
		<view-box>
			<div 
				class="good-pay-address"
				@click="selectAddress('address')">
				<address-card
					v-if="defaultAddress.length > 0"
					:link="true"
					:tool="false"
					:data="defaultAddress[0]">
				</address-card>
				<div 
					v-else
					class="gp-address-empty">
					请选择收货地址
					<span 
						class="zui-icon zui-icon-arrow">
					</span>
				</div>
			</div>
			
			<shop-card
				v-for="shop in payPill"
				:shop="shop">
				<div 
					slot="body"
					class="shop-card-body">
					<good-list
						v-for="item in shop.goods"
						:type="'SUBINFOS'"
						:data="item">
					</good-list>
				</div>
				<div 
					slot="foot"
					class="shop-card-foot">
					<div class="z-cell-item z-text-right">
						<span>共{{2}}件</span>
						合计￥<strong>{{shop.sum}}</strong>
					</div>
					<cell 
						class="z-cell-item" 
						:title="'优惠券'"
						@click.native="selectCoupon('coupon',shop.id)"
						is-link>
						<span 
							class="right-tip">
							{{couponTip}}
						</span>
					</cell>
					<div class="z-cell-item">
						需支付
						<span class="right-tip z-text-color-main">￥{{shop.needPay}}</span>
					</div>
				</div>
			</shop-card>

			<div class="good-pay-guest-wap">
				<div class="z-input-item">
					<x-input 
						title="发票信息" 
						placeholder="输入发票信息">
					</x-input>
				</div>
				<div class="z-input-item">
					<x-input 
						title="留言信息" 
						placeholder="输入留言信息">
					</x-input>
				</div>
			</div>
		</view-box>

		<popup 
			v-model="showPopup" 
			height="300px" 
			@on-hide="log('hide')" 
			@on-show="log('show')"
			@on-first-show="resetScroller">
			<pay-popup
				:type="popupType"
				:popupData="popupData">
			</pay-popup>
		</popup>
	</div>
</template>
<script>
require('./goodPay.less')
import {payPill, userAddress} from '../../data/data.js'

import ShopCard from '../../components/shopCard.vue'
import AddressCard from '../../components/addressCard.vue'
import GoodList from '../../components/GoodList.vue'
import PayPopup from './payPopup.vue'
import {Cell, ViewBox, Popup, Scroller, Checklist,XInput} from 'vux'

export default{
	components: {
		ShopCard,
		AddressCard,
		GoodList,
		Cell,
		ViewBox,
		Popup, 
		Scroller,
		Checklist,
		XInput,
		PayPopup
	},
	data() {
		return {
			popupData: [],
			paySumAmount: 0,
			showPopup: false,
			popupType: '',
			couponTip: '无可用优惠券',
			userAddress: userAddress,
			payPill: payPill
		}
	},
	computed: {
		defaultAddress(){
			return this.userAddress.filter(i => i.isDefault === 1)
		}
	},
	methods: {
		selectAddress(type){
			this.popupType = type
			this.showPopup = !this.showPopup
			this.popupData = this.userAddress
		},
		selectCoupon(type,id) {
			this.popupType = type
			this.showPopup = !this.showPopup 
			this.payPill.forEach(i => {
				if(i.id === id){
					console.log(i.coupon)
					this.popupData = i.coupon
				}
			})
		},
		resetScroller() {
			// this.$nextTick(() => {
			// 	this.$refs.scroller.reset()
			// })
		},
		log(str) {
			console.log(str)
		},
		change (val) {
		  console.log('change', val)
		}
	}
}
</script>