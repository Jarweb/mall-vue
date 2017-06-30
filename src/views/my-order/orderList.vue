<template>
	<view-box>
		<tab 
			class="order-list-head"
			:line-width="2"
			actice-color="Efc378c"
			v-model="index">
			<tab-item 
				v-for="item in list"
				@click.native="tabHandler(item.tag)"
				:selected="computedTag === item.tag">
				{{item.text}}
			</tab-item>
		</tab>
		
		<empty-view
			v-show="!loading"
			v-if="orderList.length === 0"
			:iconCls="'zui-icon-IMGCARD'"
			:text="'暂无相关订单！'">
		</empty-view>

		<div 
			class="order-list-wrap" 
			v-else 
			v-show="!loading">
			<shop-card
				v-for="order in orderList"
				:shop="order">
				<router-link
					class="shop-card-body"
					:to="{
						name: 'orderDetail',
						params: {id: order.id}
					}"
					slot="body">
					<good-list
						v-for="item in order.good"
						:type="'SUBINFOS'"
						:data="item">
					</good-list>
				</router-link>
				<div
					slot="foot"
					class="shop-card-foot">
					<div class="z-cell-item z-text-right">
						<span>共{{2}}件</span>
						合计￥<strong>{{order.sum}}</strong>
					</div>
					<div class="z-cell-item z-text-right">
						<span class="service zui-icon zui-icon-KEFU">联系客服</span>
						<span 
							v-if="order.state === 'needPay'"
							class="state-plain-btn">取消订单</span>
						<pay-way
							:title="'立即付款'"
							v-if="order.state === 'needPay'"
							class="state-btn"
							@pay-click="payBtnHandler()">
						</pay-way>
						<span 
							v-if="order.state === 'needSend'"
							class="state-btn">
							退款
						</span>
						<span 
							v-if="order.state === 'needGet'"
							class="state-btn">
							确认收货
						</span>
						<router-link 
							:to="{
								name: 'commentPost',
							}"
							v-if="order.state === 'needComment'"
							class="state-btn">
							评价
						</router-link>
						<span 
							v-if="order.state === 'needService'"
							class="state-btn">
							退款中
						</span>
					</div>
				</div>
			</shop-card>

			<ending-tip :showLoading="true"></ending-tip>
		</div>
		
		
	</view-box>
</template>
<script>
require('./orderList.less')
import {myOrders} from '../../data/data.js'

import EmptyView from '../../components/emptyView.vue'
import PayWay from '../../components/payWayPopup.vue'
import ShopCard from '../../components/shopCard.vue'
import GoodList from '../../components/GoodList.vue'
import EndingTip from '../../components/EndingTip.vue'
import {ViewBox, Tab, TabItem, XButton} from 'vux'

export default {
	components: {
		EmptyView,
		Tab, 
		TabItem,
		GoodList,
		XButton,
		EndingTip,
		ViewBox,
		ShopCard,
		PayWay
	},
	data() {
		return {
			list: [
				{
					tag: 'all',
					text: '全部'
				},
				{
					tag: 'needPay',
					text: '待付款'
				},
				{
					tag: 'needSend',
					text: '待发货'
				},
				{
					tag: 'needGet',
					text: '待收货'
				},
				{
					tag: 'needComment',
					text: '待评价'
				},
				{
					tag: 'needService',
					text: '售后'
				}
			],
			index: 0,
			// orderList: myOrders
		}
	},
	created() {
		this.initOrders()
	},
	computed: {
		computedTag() {
			return this.$route.query.tag
		},
		ComputedState() {

		},
		loading() {
			return this.$store.getters.loading
		},
		orderList() {
			return this.$store.getters.orders
		}
	},
	methods: {
		payBtnHandler(){

		},
		tabHandler(tag){
			// switch(tag){
			// case 'needPay':
				
			// 	break;
			// case 'needSend':
				
			// 	break;
			// case 'needGet':
				
			// 	break;
			// case 'needComment':
				
			// 	break;
			// case 'needService':
				
			// 	break;
			// }
			this.$store.dispatch({
				type: 'changeOrderTag',
				tag
			})
		},
		initOrders() {
			this.$store.dispatch('getOrders')
		}
	}
}
</script>