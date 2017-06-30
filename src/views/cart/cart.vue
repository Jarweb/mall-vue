<template>
	<empty-view
		v-show="!loading"
		v-if="cart.length === 0"
		:iconCls="'zui-icon-SHOPPING-CART-EMPTY'"
		:text="'您的购物车空空如也，赶紧去逛逛吧！'">
	</empty-view>

	<div
		v-else
		v-show="!loading">
		<swipeout>
			<swipeout-item
				v-for="(item,index) in cart"
				transition-mode="follow"
				@on-close="handleEvents('on-close')" 
				@on-open="handleEvents('on-open')">
				<div slot="right-menu">
					<swipeout-button 
						type="warn"
						>
						删除
					</swipeout-button>
				</div>
				<div slot="content">
					<cart-card
						@on-selected-good="selectGood(index)"
						@on-selected-num="selectNum"
						:data="item">
					</cart-card>
				</div>
			</swipeout-item>
		</swipeout>

		<div class="cart-bottom-bar">
			<div class="icon-wrap">
				<icon 
					@click.native="selectAllHandler"
					class="icon"
					:type="selectAll ? 'success' : 'circle'">
				</icon>
				全选
			</div>

			<div class="sum">合计:</div>
			<div class="btn">结算({{selectList.length}})</div>
		</div>
	</div>
</template>
<script>
require('./cart.less')
import {myLikes} from '../../data/data.js'

import EmptyView from '../../components/emptyView.vue'
import CartCard from '../../components/cartCard.vue'
import {Icon,Swipeout, SwipeoutItem,SwipeoutButton} from 'vux'

export default {
	components: {
		EmptyView,
		Icon,
		CartCard,
		Swipeout, 
		SwipeoutItem, 
		SwipeoutButton,
	},
	data() {
		return {
			selectList: [],
			num: 1,
			selectAll: false,
			cart: []
		}
	},
	computed: {
		loading(){
			return this.$store.getters.loading
		}
	},
	methods: {
		handleEvents (type) {
			console.log('event: ', type)
		},
		selectAllHandler() {
			this.selectAll = !this.selectAll
			
		},
		selectGood(index){
			if(this.selectList.includes(index)){
				this.selectList.splice(this.selectList.indexOf(index),1)
			}else{
				this.selectList.push(index)
			}
			// console.log(this.selectList)
		},
		selectNum(){
			
		}
	}
}
</script>