<template>
	<router-link 
		v-if="couponState.type==='ok'"
		class="coupon-card-wrap"
		:class="couponState.stateCls"
		:to="{
			name: 'couponRoom'
		}">
		<div class="up">
			<div class="left">
				<div class="title">￥{{coupon.amount}}</div>
				<div class="subtitle">{{coupon.limitMsg}}</div>
			</div>
			<div class="right">
				<img :src="couponState.stateImg" alt="">
			</div>
		</div>
		<div class="down">
			<div>{{coupon.title}}</div>
			<div>有效期:{{coupon.validity}}</div>
		</div>
	</router-link>

	<div 
		v-else="couponState.type==='no'"
		class="coupon-card-wrap"
		:class="couponState.stateCls">
		<div class="up">
			<div class="left">
				<div class="title">￥{{coupon.amount}}</div>
				<div class="subtitle">{{coupon.limitMsg}}</div>
			</div>
			<div class="right">
				<img :src="couponState.stateImg" alt="">
			</div>
		</div>
		<div class="down">
			<div>{{coupon.title}}</div>
			<div>有效期:{{coupon.validity}}</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['coupon'],
	computed: {
		couponState() {
			switch(this.coupon.state){
			case 'usefull':
				return {
					type: 'ok',
					stateCls: 'coupon-unuse',
					stateImg: '/static/img/coupon-unuse.png'
				}
				break;
			case 'unusefull':
				return {
					type: 'no',
					stateCls: 'coupon-used',
					stateImg: '/static/img/coupon-used.png'
				}
				break;
			case 'timeout':
				return {
					type: 'used',
					stateCls: 'coupon-timeout',
					stateImg: '/static/img/coupon-timeout.png'
				}
				break;
			defaul:
				return {}
				break;
			}
		}
	}
}
</script>

<style>
.coupon-card-wrap{
	display: block;
	margin-bottom: 10px;
}
.coupon-card-wrap .up{
	border-radius: 6px 6px 0 0;
	padding-left: 14px;
	height: 80px;
	overflow: hidden;
	box-sizing: border-box;
}
.coupon-card-wrap .up .left{
	float: left;
	width: 80%;
	padding-top: 10px;
	padding-bottom: 10px;
	color: #fff;
}
.coupon-card-wrap .up .left .title{
	font-size: 30px;
	line-height: 1.2;
}
.coupon-card-wrap .up .left .subtitle{
	font-size: 16px;
}
.coupon-card-wrap .up .right{
	float: left;
	width: 20%;
	box-sizing: border-box;
	padding-top: 12px;
}
.coupon-card-wrap .up .right img{
	width: 100%;
	display: block;
}
.coupon-card-wrap .down{
	padding-top: 8px;
	padding-bottom: 8px;
	padding-left: 14px;
	font-size: 14px;
	color: #404040;
	border-radius: 0 0 6px 6px;
	background-color: #fff;
}
.coupon-unuse .up{
	background-color: #69c9c3;
}
.coupon-used .up,
.coupon-timeout .up{
	background-color: #cdcdcd;
}
.coupon-used .down,
.coupon-timeout .down{
	color: #b8b4b4;
}
</style>