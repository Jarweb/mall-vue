<template>
	<div class="z-page">
		
		<div class="z-head life-index-head">
			<div class="logo">
				<img :src="shop.logo" alt="">
			</div>
			<span class="title">{{shop.title}}</span>
			<div class="icon-tool">
				<router-link
					class="zui-icon zui-icon-SEARCH_1"
					:to="{
						name: 'searchResult'
					}">
				</router-link>

				<share-popup
					:shareCls="'zui-icon-SHARE2'"
					:share="shop.shareInfo">
				</share-popup>
			</div>
		</div>

		<view-box class="z-content">
			<div class="life-index-banner">
				<swiper 
					:list="shopBanner">
				</swiper>
			</div>
			
			<cat-box 
				:cats="shopCat" 
				:title="'美的一笔'">
			</cat-box>

			<sale-floor 
				:type="'floorA'"
				:hasAll="true"
				:floorTitle="'精选好物'"
				:floorData="floor1">
			</sale-floor>

			<recommend 
				:type="'INDEXGOODRECOMMEND'"
				:recommendTitle="'优物推荐'"
				:recommendData="recommendGoods">
			</recommend>
			
			<ending-tip :showLoading="false"></ending-tip>
			
		</view-box>
		
	</div>
</template>
<script>
require('./index.less')
import {shop,shopBanner,shopCat,floor1,recommendGoods} from '../../data/data.js'

import SharePopup from '../../components/sharePopup.vue'
import CatBox from '../../components/catBox.vue'
import SaleFloor from '../../components/SaleFloor.vue'
import EndingTip from '../../components/EndingTip.vue'
import Recommend from '../../components/Recommend.vue'
import ScrollerBox from '../../components/ScrollerBox.vue'
import GoodGrid from '../../components/GoodGrid.vue'
import {Swiper, SwiperItem, Popup, ViewBox} from 'vux'

const {mapGetters} = require('../../../node_modules/vuex/dist/vuex.min.js')

export default {
	components: {
		Popup,
		CatBox,
		SaleFloor,
		EndingTip,
		Recommend,
		GoodGrid,
		Swiper, 
		SwiperItem,
		ScrollerBox,
		SharePopup,
		ViewBox
	},
	data() {
		return {
			// shop: shop,
			shopBanner: shopBanner,
			shopCat: shopCat,
			floor1: floor1,
			recommendGoods: recommendGoods
		}
	},
	created(){
		this.initShop()
	},
	computed: {
		// ...mapGetters({
		// 	shop
		// })
		shop(){
			return this.$store.getters.shop
		}
	},
	methods: {
		initShop() {
			this.$store.dispatch('initShop')
		}
	}
}
</script>
