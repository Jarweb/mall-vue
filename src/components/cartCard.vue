<template>
	<div class="cart-card-wrap">
		<div 
			@click="selectHandler"
			class="cart-card-select">
			<icon 
				class="icon"
				:type="selected ? 'success' : 'circle'">
			</icon>
		</div>
		<div class="cart-card-info">
			<img :src="data.img" alt="">

			<div class="cart-card-desc">
				<div class="suptitle z-ellipsis-2">{{data.title}}</div>
				<div class="subtitle">{{data.subInfo}}</div>
				<div class="price">{{data.price}}</div>
				<x-number 
					class="accumulator"
					:title="''" 
					v-model="num" 
					button-style="round"
					@on-change="change" 
					:step="1"
					:value="1"
					:min="0">
				</x-number>
			</div>
		</div>

	</div>
</template>
<script>
import {Icon, XNumber} from 'vux'

export default {
	props: ['data'],
	components: {
		Icon, 
		XNumber
	},
	data() {
		return {
			num: 1,
			selected: false
		}
	},
	methods: {
		selectHandler(){
			this.selected = !this.selected
			this.$emit('on-selected-good')
		},
		change(val) {
			this.$emit('on-selected-num',val)
		}
	}
}
</script>
<style>
.cart-card-wrap{
	position: relative;
	overflow: hidden;
	padding: 8px;
	border-bottom: 1px solid #eee;
}
.cart-card-wrap .cart-card-select{
	position: absolute;
	top: 50%;
	left: 0;
	transform: translate3d(0,-50%,0);
}	
.cart-card-wrap .cart-card-select .icon{
	color: #ed7a5d;
	font-size: 20px;
}
.cart-card-wrap .cart-card-info{
	margin-left: 22px;
}
.cart-card-wrap .cart-card-info img{
	float: left;
	width: 100px;
	height: 100px;
}
.cart-card-wrap .cart-card-info .cart-card-desc{
	overflow: hidden;
	padding-left: 8px;
}
.cart-card-wrap .cart-card-info .cart-card-desc .suptitle{
	font-size: 14px;
	line-height: 1.4;
	color: #404040;
}
.cart-card-wrap .cart-card-info .cart-card-desc .subtitle{
	padding-top: 4px;
	font-size: 12px;
	color: #868686;
	line-height: 1.6;
}
.cart-card-wrap .cart-card-info .cart-card-desc .price{
	padding-top: 6px;
	font-size: 15px;
	color: #ed7a5d;
}
.cart-card-wrap .cart-card-info .cart-card-desc .accumulator{
	position: absolute;
	bottom: 10px;
	right: 0;
}
.accumulator.weui-cell:before{
	border: none;
}
.accumulator .vux-number-selector-sub, 
.accumulator .vux-number-selector-plus{
	border-color: #ed7a5d; 
}
.accumulator .vux-number-selector.vux-number-disabled{
	border-color: #ccc;
}
.accumulator .vux-number-selector svg{
	fill: #ed7a5d;
}
</style>