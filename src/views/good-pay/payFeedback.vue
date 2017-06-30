<template>
	<view-box>
		<div class="pay-fb-state">
			<div class="state-text">您的订单我们将尽快安排发货</div>
		</div>

		<address-card
			:link="false"
			:tool="false"
			:data="payPill.address">
		</address-card>

		<shop-card
			v-for="shop in payPill.pillShop"
			:shop="shop">
			<div 
				slot="body"
				class="shop-card-body collapse">
				<good-list
					v-for="item in shop.good"
					:type="'SUBINFOS'"
					:data="item">
				</good-list>

				<div class="sc-foot-item">
					发票信息
					<div class="tip-box">
						{{shop.bill}}
					</div>
				</div>
				<div class="sc-foot-item">
					买家留言
					<div class="tip-box">
						{{shop.guestMsg}}
					</div>
				</div>
				<div class="sc-foot-item">
					<div class="subInfo">
						订单编号:{{shop.id}}
					</div>
					<div class="subInfo">
						提交时间:{{shop.createdAt}}
					</div>
				</div>
			</div>
			<div 
				slot="foot" 
				class="shop-card-foot">
				<div class="z-cell-item z-text-right">
					<span>共{{2}}件</span>
					合计￥<strong>{{shop.sum}}</strong>
				</div>
				<div 
					class="z-cell-item" 
					v-if="shop.state === 0">
					需支付
					<span class="right-tip z-text-color-main">￥{{shop.needPay}}</span>
				</div>
				<div 
					class="z-cell-item" 
					v-if="shop.state === 1">
					已支付
					<span class="right-tip z-text-color-main">￥{{shop.needPay}}</span>
				</div>
				<div class="z-cell-item">
					<div class="z-cell-item z-text-right">
						<span class="service zui-icon zui-icon-KEFU">联系客服</span>
						<pay-way
							:title="'立即付款'"
							v-if="shop.state === 0"
							class="state-btn"
							>
						</pay-way>
						<span 
							v-if="shop.state === 1"
							class="state-plain-btn">查看订单
						</span>
					</div>
				</div>
			</div>
		</shop-card>
		
		<recommend 
			:type="'GRIDRECOMMEND'"
			:recommendTitle="'商品推荐'"
			:recommendData="goodList">
		</recommend>

		<!-- <div class="pay-fb-pill-foot">
			<router-link
				:to="{
					name: 'index',
				}">返回首页
			</router-link>
			<router-link
				:to="{
					name: 'orderDetail'
				}">查看订单
			</router-link>
		</div> -->
	</view-box>
</template>
<script>
require('./payFeedback.less')
import AddressCard from '../../components/addressCard.vue'
import GoodList from '../../components/GoodList.vue'
import ShopCard from '../../components/shopCard.vue'
import Recommend from '../../components/Recommend.vue'
import PayWay from '../../components/payWayPopup.vue'
import {ViewBox} from 'vux'

export default {
	components: {
		AddressCard,
		GoodList,
		ShopCard,
		Recommend,
		ViewBox,
		PayWay
	},
	data() {
		return {
			state: {},
			expendCls: 'expend',
			callapseCls: 'callapse',
			flipyCls: 'zui-icon-flipy',
			payPill: {
				state: 'unpay',
				address: {
					name: '老王',
					tel: '1200000000',
					address: '放大范德萨会计法撒旦发生打发手动阀第四发股份大噶的风格'
				},
				pillShop:[
					{
						id: '123455678890',
						createdAt: '2017-02-02 17:47:03',
						state: 0,
						name: '由極物商城发货',
						good: [
							{
								img: '/static/img/good-default.jpg',
								title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
								subInfo: ['颜色:蓝色','颜色:蓝色','颜色:蓝色'],
								price: '200.00',
								num: '3'
							},
							{
								img: '/static/img/good-default.jpg',
								title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
								subInfo: ['颜色:蓝色','颜色:蓝色','颜色:蓝色'],
								price: '200.00',
								num: '1'
							}
						],
						sum: '998',
						needPay: '888',
						bill: '发票信息',
						guestMsg: '留言信息'
					},
					{
						id: '123455678890',
						createdAt: '2017-02-02 17:47:03',
						state: 1,
						name: '由極物商城发货',
						good: [
							{
								img: '/static/img/good-default.jpg',
								title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
								subInfo: ['颜色:蓝色','颜色:蓝色','颜色:蓝色'],
								price: '200.00',
								num: '3'
							},
							{
								img: '/static/img/good-default.jpg',
								title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
								subInfo: ['颜色:蓝色','颜色:蓝色','颜色:蓝色'],
								price: '200.00',
								num: '1'
							}
						],
						sum: '998',
						needPay: '888',
						bill: '发票信息',
						guestMsg: '留言信息'
					}
				]
			},
			goodList: [
				{
					img: '/static/img/good-default.jpg',
					title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
					subInfo: '已售8888件',
					price: '200.00'
				},
				{
					img: '/static/img/good-default.jpg',
					title: '原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造原木打造',
					subInfo: '已售8888件',
					price: '200.00'
				},
				
			]
		}
	},
	computed: {
		
	},
	methods:{
		
	}
}


</script>