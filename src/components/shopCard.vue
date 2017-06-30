<template>
	<div class="shop-card-wrap">
		<div class="shop-card-head">
			{{shop.name}}
			<span 
				class="sc-left-tip"
				v-if="tip">
				{{tip}}
			</span>
			<span class="sc-right-tip">
				{{state}}
				<span 
					class="zui-icon"
					:class="iconTip"></span>
			</span>
		</div>
		<slot name="body"></slot>
		<slot name="foot"></slot>
	</div>
</template>

<script>
import GoodList from './GoodList.vue'
export default {
	props: ['shop','tip', 'iconTip'],
	components: {
		GoodList
	},
	computed: {
		state(){
			switch(this.shop.state){
				case 'needPay':
					return '待付款'
					break;
				case 'needSend':
					return '待发货'
					break;
				case 'needGet':
					return '待收货'
					break;
				case 'needComment':
					return '待评价'
					break;
				case 'needService':
					return '退款中'
					break;
			}
		}
	}
}	
</script>
<style>
.shop-card-wrap{
	padding-left: 8px;
	padding-right: 8px;
	background-color: #fff;
	margin-bottom: 8px;
}
.shop-card-head{
	height: 42px;
	line-height: 42px;
	font-size: 15px;
	color: #404040;
	background-color: #fff;
	vertical-align: middle;
}
.shop-card-head .sc-left-tip{
	padding-left: 4px;
}
.shop-card-head .sc-right-tip{
	float: right;
	font-size: 14px;
	color: #ed7a5d;
}
.shop-card-head .sc-right-tip .zui-icon{
	font-size: 16px;
}
.shop-card-body{
	display: block;
	background-color: #f0f0f0;
}
.shop-card-foot{
	overflow: hidden;
}
.shop-card-foot .service{
	float: left;
	display: inline-block;
	height: 100%;
	font-size: 14px;
	color: #404040;
	line-height: 42px;
}
.shop-card-foot .service:before{
	padding-right: 4px;
}
.shop-card-foot .state-btn,
.shop-card-foot .state-plain-btn{
	padding: 4px 8px;
	border-radius: 2px;
	margin-left: 6px;
	text-align: center;
	font-size: 14px;
}
.shop-card-foot .state-btn{
	color: #fff;
	background-color: #ed7a5d;	
	border: 1px solid #ed7a5d;
}
.shop-card-foot .state-plain-btn{
	color: #404040;
	border: 1px solid #404040;
}
.shop-card-foot .z-cell-item{
	padding-left: 0;
	padding-right: 0;
}
.sc-foot-item{
	font-size: 14px;
	line-height: 42px;
	color: #404040;
	background-color: #fff;
	overflow: hidden;
	position: relative;
}
.sc-foot-item:before{
	content: '';
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 1px;
	border-top: 1px solid #f6f6f6;
	color: #f6f6f6;
	transform-origin: 0 0;
	transform: scaleY(0.5);
}
.sc-foot-item .tip-box{
	position: relative;
	margin-bottom: 10px;
	background-color: #e6f2f1;
	font-size: 14px;
	color: #868683;
	border-radius: 4px;
	padding: 8px 8px;
	line-height: 1.5;
}
.sc-foot-item .tip-box:before{
	content: '';
	position: absolute;
	display: block;
	top: -10px;
	left: 20px;
	height: 1px;
	width: 1px;
	border-top: 0;
	border-right: 4px solid transparent;
	border-bottom: 10px solid #e6f2f1;
	border-left: 4px solid transparent;
}
.sc-foot-item .subInfo{
	margin-top: 6px;
	margin-bottom: 6px;
	font-size: 12px;
	color: #868686;
	line-height: 1.6;
}
</style>