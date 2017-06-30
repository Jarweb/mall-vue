<template>
	<div class="z-page">
		
		<view-box 
			class="z-content"
			v-show="!loading">
			<div class="article-list-head">
				<swiper :list="banners"></swiper>
			</div>
			
			<div class="article-list-body">
				<article-card 
					:articleList="articles">
				</article-card>
				<ending-tip :showLoading="true"></ending-tip>
			</div>
		</view-box>
	</div>
</template>
<script>
require('./articleList.less')
import {articles,articleBanner} from '../../data/data.js'

import EndingTip from '../../components/EndingTip.vue'
import ArticleCard from '../../components/articleCard.vue'
import { Card, Swiper, SwiperItem, ViewBox, Loading } from 'vux'


export default {
	components: {
		EndingTip,
		ArticleCard,
		Swiper, 
		SwiperItem,
		ViewBox,
		Loading
	},
	data() {
		return {
			
		}
	},
	created(){
		this.initArticles()
	},
	computed: {
		articles(){
			return this.$store.getters.articles
		},
		banners(){
			return this.$store.getters.banners
		},
		loading(){
			return this.$store.getters.loading
		}
	},
	methods: {
		initArticles(){
			this.$store.dispatch('getArticles')
		},

	}
	
}
</script>