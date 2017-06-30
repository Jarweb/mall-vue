<template>
	<div class="z-page">
		<view-box class="z-content">
			<div class="catresult-catbar-wrap">
				<router-link 
					class="catresult-catbar-back zui-icon zui-icon-back"
					:to="{name: 'index'}">
				</router-link>
				<scroller 
					class=""
					lock-y 
					:scrollbar-x='false'>
					<scroller-box 
						:scrollerItemStyle="{
							width: 60,
							marginLeft: 0,
							surplus: 20
						}"
						:datas="catTags">
						<template scope="props">
							<div 
								class="catresult-catbar-item"
								:class="ItemSelected ? 'catbar-item-active' : ''"
								:tag="props.data.tag"
								@click="catBarClick">
								{{props.data.text}}
							</div>
						</template>
					</scroller-box>
				</scroller>
			</div>
			
			<div 
				class="catresult-result-wrap" 
				v-show="!loading">
				<swiper :list="catBanner"></swiper>
				<good-grid :data="catResult"></good-grid>
				<ending-tip :showLoading="true"></ending-tip>
			</div>
		</view-box>
	</div>
</template>
<script>
require('./goodCat.less')
import {catTags,catBanner,catResult} from '../../data/data.js'

import ScrollerBox from '../../components/ScrollerBox.vue'
import EndingTip from '../../components/EndingTip.vue'
import GoodGrid from '../../components/GoodGrid.vue'
import {Tab, TabItem, Swiper, SwiperItem, ViewBox, Scroller} from 'vux'

export default {
	components: {
		Tab, 
		TabItem, 
		Swiper, 
		SwiperItem,
		ViewBox,
		GoodGrid,
		Scroller,
		EndingTip,
		ScrollerBox
	},
	data() {
		return {
			index: 0,
			tag: '',
			ItemSelected: false,
			// catTags: catTags,
			// catResult: catResult,
			// catBanner: catBanner
		}
	},
	created() {
		this.initCat()
	},
	computed: {
		computedTag() {
			return this.$route.query.tag
		},
		loading() {
			return this.$store.getters.loading
		},
		catTags() {
			return this.$store.getters.catTags
		},
		catBanner() {
			return this.$store.getters.catBanner
		},
		catResult() {
			return this.$store.getters.catResult
		}
	},
	methods: {
		catBarClick() {
			// this.ItemSelected = true
		},
		initCat() {
			this.$store.dispatch('getCatResult')
		}
	}
}
</script>