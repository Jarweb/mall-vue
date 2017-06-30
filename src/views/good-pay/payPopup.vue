<template>
	<div class="pay-popup-wrap">
		<div 
			class="pay-popup-head"
			v-show="type==='coupon'">
			优惠券选择
		</div>
		<div 
			class="pay-popup-head"
			v-show="type==='address'">
			收货地址选择
			<router-link
				class="pp-head-right-tip"
				:to="{
					name: 'myAddress'
				}">管理
			</router-link>
		</div>
		<scroller 
			height="210px"
			lock-x 
			ref="scroller">
			<div 
				class="pay-popup-body"
				v-show="type==='coupon'">
				<checker
					v-model="selectData"
					default-item-class="pp-coupon-item-detault" 
					selected-item-class="pp-coupon-item-selected">
					<checker-item
						v-for="item in popupData"
						:value="item">
						<div class="coupon-pop-item">
							<span class="coupon-pop-item-title">{{item.title}}</span>
							<span class="">{{item.amount}}元</span>
							<p class="coupon-pop-item-time">{{item.time}}</p>
						</div>
					</checker-item>
				</checker>
			</div>
			<div 
				class="pay-popup-body"
				v-show="type==='address'">
				<checker
					v-model="selectData"
					default-item-class="pp-address-item-detault" 
					selected-item-class="pp-address-item-selected">
					<checker-item
						v-for="item in popupData"
						:value="item">
						<div class="">
							<span>{{item.name}}</span>
							<span>{{item.tel}}</span>
							<div>
								<span 
									class="z-text-color-main"
									v-if="item.defaultAddress === 1">
									默认地址:
								</span>
								{{item.address}}
							</div>
						</div>
					</checker-item>
				</checker>
			</div>
		</scroller>
		<div class="pay-popup-foot">
			<div class="pay-popup-btn">确认</div>
		</div>
	</div>
</template>

<script> 
	import {Scroller, Checker, CheckerItem} from 'vux'

	export default {
		props: ['popupData', 'type'],
		components: {
			Scroller, 
			Checker, 
			CheckerItem
		},
		data(){
			return {
				selectData: null
			}
		}
	}
</script>

<style>
.pay-popup-wrap{
	background-color: #fff;
	padding-bottom: 2px;
}
.pay-popup-wrap .pay-popup-head{
	position: relative;
	height: 40px;
	margin-bottom: 8px;
	border-bottom: 1px solid #f8f8f8;
	line-height: 40px;
	font-size: 14px;
	color: #404040;
	text-align: center;
}
.pay-popup-head .pp-head-right-tip{
	position: absolute;
	right: 8px;
	font-size: 14px;
	color: #404040;
}
.pay-popup-wrap .pay-popup-body{
	padding-left: 24px;
	padding-right: 24px;
}
.pay-popup-wrap .pay-popup-body .pp-coupon-item-detault{
	display: block;
	width: 100%;
	height: 40px;
	padding-left: 14px;
	padding-right: 14px;
	line-height: 40px;
	border-radius: 3px;
	border-top: 1px solid #fff;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	border-bottom: 1px solid #f6f6f6;
	background-color: #fff;
	font-size: 12px;
}
.pay-popup-wrap .pay-popup-body .pp-address-item-detault{
	display: block;
	width: 100%;
	padding-left: 14px;
	padding-right: 14px;
	padding-top: 8px;
	padding-bottom: 8px;
	line-height: 1.6;
	border-radius: 3px;
	border-top: 1px solid #fff;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	border-bottom: 1px solid #f6f6f6;
	background-color: #fff;
	font-size: 12px;
}
.pp-address-item-detault span{
	padding-right: 8px;
}
.pay-popup-wrap .pay-popup-body .pp-coupon-item-selected,
.pay-popup-wrap .pay-popup-body .pp-address-item-selected{
	background: #ffffff url(/static/img/active.png) no-repeat right bottom;
	border-color: #ed7a5d;
}
.pay-popup-foot{
	height: 40px;
	width: 100%;
	padding: 2px 8px;
}
.pay-popup-foot .pay-popup-btn{
	display: block;
	height: 100%;
	width: 100%;
	border-radius: 2px;
	font-size: 15px;
	line-height: 2;
	letter-spacing: 1px;
	color: #fff;
	text-align: center;
	background-color: #ed7a5d;
}
.coupon-pop-item{
	overflow: hidden;
}
.coupon-pop-item-time{
	float: right;
}
</style>