<template>
	<div v-if="type === 'INDEXGOODRECOMMEND'">
		<div class="index-goodRecommend-head">
			{{recommendTitle}}
		</div>
		<good-grid :data="recommendData"></good-grid>
	</div>
	
	<div 
		v-else-if="type === 'GRIDRECOMMEND'"
		class="grid-recommend-wrap">
		<div class="grid-recommend-head">
			—— {{recommendTitle}} ——
		</div>
		<good-grid :data="recommendData"></good-grid>
	</div>

	<div v-else-if="type === 'ARTICLERECOMMEND'">
		<div class="article-recommend-head"> 
			—— {{recommendTitle}} —— 
		</div>
		<article-card :articleList="recommendData"></article-card>
	</div>
	
	<div v-else-if="type === 'ARTICLEGOODRECOMMEND'">
		<div class="article-good-recommend-head">
			—— {{recommendTitle}} —— 
		</div>
		<div class="article-good-recommend-wrap" >
			<good-list 
				v-for="item in recommendData"
				:type="'SUBINFO'"
				:data="item">
			</good-list>
		</div>
		<router-link 
			class="article-good-recommend-foot"
			:to="{
				name: 'index'
			}">
			更多商品
		</router-link>
	</div>

	<div v-else>ddd{{type}}</div>
</template>
<script>
import GoodList from '../components/GoodList.vue'
import GoodGrid from '../components/GoodGrid.vue'
import ArticleCard from '../components/articleCard.vue'
export default {
	props: ['type','recommendTitle', 'recommendData'],
	components: {
		GoodList,
		GoodGrid,
		ArticleCard
	},
}	
</script>
<style>
.grid-recommend-head,
.article-recommend-head,
.article-good-recommend-head{
	font-size: 14px;
	color: #868683;
	text-align: center;
	padding: 30px 0;
}
.index-goodRecommend-head{
	padding-top: 14px;
	padding-bottom: 14px;
	background-color: #fff;
	text-align: center;
	border-top: 8px solid #efeff4;
}
.article-good-recommend-wrap{
	margin-left: 8px;
	margin-right: 8px;
	background-color: #fff;
}
.article-good-recommend-foot{
	display: block;
	height: 30px;
	margin-left: 8px;
	margin-right: 8px;
	background-color: #fff;
	text-align: center;
	line-height: 30px;
	font-size: 12px;
	color: #404040;
	border-top: 1px solid #f8f8f8;
}
.grid-recommend-wrap{
	padding-left: 8px;
	padding-right: 8px;
}
</style>