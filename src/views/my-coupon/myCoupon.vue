<template>
	<div class="">
		<view-box>
		<tab 
			class="coupon-list-head"
			:line-width="2"
			actice-color="Efc378c"
			v-model="index">
			<tab-item 
				v-for="item in couponTag"
				@click.native="tabHandler(item)"
				:selected="computedTag === item.tag">
				{{item.text}}
			</tab-item>
		</tab>
		
		<empty-view
			v-show="!loading"
			v-if="coupons.length === 0"
			:iconCls="'zui-icon-COUPON'"
			:text="'您没此类优惠券!'">
		</empty-view>

		<div 
			v-else
			v-show="!loading"
			class="coupon-list-wrap">
			<coupon-card
				v-for="item in coupons" 
				:coupon="item">
			</coupon-card>

			<ending-tip :showLoading="true"></ending-tip>
		</div>
	</view-box>
	</div>
</template>

<script>
require('./myCoupon.less')

import EmptyView from '../../components/emptyView.vue'
import {ViewBox, Tab, TabItem} from 'vux'
import CouponCard from '../../components/couponCard.vue'
import EndingTip from '../../components/EndingTip.vue'

export default {
	components: {
		EmptyView,
		ViewBox,
		Tab,
		TabItem,
		CouponCard,
		EndingTip
	},
	data() {
		return {
			index: 0
		}
	},
	computed: {
		loading(){
			return this.$store.getters.loading
		},
		computedTag() {
			return this.$route.query.tag
		},
		couponTag() {
			return this.$store.getters.couponTag
		},
		coupons() {
			return this.$store.getters.coupons
		}
	},
	created(){
		this.initCoupon()
	},
	methods: {
		tabHandler(item){
			switch(item.tag){
				case 'usefull':
				this.$store.dispatch('getUsefullCoupon')
				break;
				case 'unusefull':
				this.$store.dispatch('getUnusefullCoupon')
				break;
				case 'timeout':
				this.$store.dispatch('getTimeoutCoupon')
				break;
			}
		},
		initCoupon(){
			this.$store.dispatch('getUsefullCoupon')
		}
	}
}
</script>