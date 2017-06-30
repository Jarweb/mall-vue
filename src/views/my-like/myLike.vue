<template>
	<view-box>
		<empty-view
			v-show="!loading"
			v-if="likeList.length === 0"
			:iconCls="'zui-icon-MEMO'"
			:text="'您的收藏夹空空如也，赶紧去逛逛吧！'">
		</empty-view>
		
		<div v-else>
			<div 
				class="my-like-list-wrap">
				<swipeout>
					<swipeout-item
						v-for="(item, index) in likeList"
						transition-mode="follow"
						@on-close="handleEvents('on-close')" 
						@on-open="handleEvents('on-open')">
						<div slot="right-menu">
							<swipeout-button 
								type="primary"
								@click.native="add2cartHandler(index)" 
								>
								加入购物车
							</swipeout-button>
							<swipeout-button 
								type="warn"
								@click.native="cancleLikeHnadler(item.id, index)" 
								>
								取消收藏
							</swipeout-button>
						</div>
						<div slot="content">
							<good-list 
								slot="content"
								:type="'SUBINFO'"
								:data="item">
							</good-list>
						</div>
					</swipeout-item>
				</swipeout>

			</div>

			<ending-tip 
				:showLoading="true">
			</ending-tip>

		</div>

	</view-box>
</template>
<script>
require('./myLike.less')

import EmptyView from '../../components/emptyView.vue'
import EndingTip from '../../components/EndingTip.vue'
import GoodList from '../../components/GoodList.vue'
import {ViewBox, Swipeout, SwipeoutItem, SwipeoutButton} from 'vux'

export default {
	components: {
		EmptyView,
		EndingTip,
		GoodList,
		Swipeout, 
		SwipeoutItem, 
		SwipeoutButton,
		ViewBox
	},
	data() {
		return {
			
		}
	},
	computed: {
		loading(){
			return this.$store.getters.loading
		},
		likeList(){
			return this.$store.getters.myLikes
		}
	},
	created(){
		this.$store.dispatch('updateMyLikes')
	},
	methods: {
		cancleLikeHnadler (id,index) {
			this.$store.dispatch({
				type: 'deleteMyLike',
				index,
				id
			})
		},
		add2cartHandler(index){
			console.log('cart')
		},
		handleEvents (type) {
			console.log('event: ', type)
		}
	}
}
</script>
