<template>
	<span>
		<span @click="payHandler()">{{title}}</span>

		<popup
			v-model="showPayWay"
			height="200px">
			<div class="pay-way-head">支付方式选择</div>
			<div class="pay-way-body">
				<div class="pay-way-item">微信支付</div>
				<div class="pay-way-item">支付宝支付</div>
			</div>
			<div class="pay-way-foot">
				<div class="pay-way-btn">确定</div>
			</div>
		</popup>
	</span>
</template>

<script>
	import {Popup} from 'vux'

	export default {
		props: ['title'],
		components: {
			Popup
		},
		data(){
			return {
				showPayWay: false
			}
		},
		methods: {
			payHandler(){
				this.showPayWay = !this.showPayWay
				this.$emit('pay-click')
			}
		}
	}
</script>

<style>
.pay-way-head{
	height: 40px;
	line-height: 40px;
	font-size: 14px;
	color: #404040;
	border-bottom: 1px solid #f6f6f6;
	background-color: #fff;
}	
.pay-way-body{
	width: 100%;
	height: 120px;
	padding-top: 10px;
	background-color: #fff;

}
.pay-way-body .pay-way-item{
	height: 40px;
	line-height: 40px;
	padding-left: 30px;
	text-align: left;
	font-size: 12px;
	color: #404040;

}
.pay-way-foot{
	height: 40px;
	padding: 2px 8px 4px;
	background-color: #fff;
}
.pay-way-foot .pay-way-btn{
	height: 100%;
	border-radius: 2px;
	background-color: #ed7a5d;
	color: #fff;
	font-size: 15px;
	letter-spacing: 1px;
	line-height: 2.2;
}
</style>