<template>
	<div class="z-content" v-show="!loading">
		<view-box >
			<div class="article-detail-wrap">
				<div class="article-detail-head">
					<div class="title">{{article.title}}</div>
					<div class="info">
						<span>{{article.createAt}}</span>
						<span>{{article.author}}</span>
						<share-popup
							class="share"
							:shareCls="'zui-icon-SHARE2'"
							:share="shareInfo">
						</share-popup>
					</div>
				</div>

				<div 
					class="article-detail-body"
					v-html="article.content">
				</div>

				<div class="article-detail-foot">

					<div class="like">
						<span 
							class="zui-icon "
							:class="likeState ? likeCls.likedCls : likeCls.unlikeCls"
							@click="likeHandler">
						</span>
						<span>{{article.like}}</span>
					</div>
					<div class="read">
						阅读 
						<span>{{article.read}}</span>
					</div>

					<div class="reprint">转载</div>
				</div>
			</div>

			<recommend 
				:type="'ARTICLEGOODRECOMMEND'"
				:recommendTitle="'商品推荐'"
				:recommendData="recommendGoods">
			</recommend>
			
			<recommend 
				:type="'ARTICLERECOMMEND'"
				:recommendTitle="'更多好文推荐'"
				:recommendData="recommendArticles">
			</recommend>
		</view-box>

		<router-link
			class="article-detail-bottombar"
			:to="{
				name: 'index'
			}">
			你就不去看看？
		</router-link>
	</div>
</template>
<script>
require('./articleDetail.less')
import {article,articleRecommend,articleGoods} from '../../data/data.js'

import SharePopup from '../../components/sharePopup.vue'
import Recommend from '../../components/Recommend.vue'
import {ViewBox} from 'vux'

export default {
	components: {
		Recommend,
		ViewBox,
		SharePopup
	},
	data() {
		return {
			likeState: false,
			likeCls:{
				unlikeCls: 'zui-icon-zan-before',
				likedCls: 'zui-icon-zan-after'
			},
			shareInfo: {
				qrcode: '/static/img/good-default.jpg',
				text: '长按二维码分享'
			}
		}
	},
	created() {
		this.initArticle()
	},
	computed: {
		loading(){
			return this.$store.getters.loading
		},
		article(){
			return this.$store.getters.article 
		},
		recommendArticles(){
			return this.$store.getters.recArtArticles
		},
		recommendGoods(){
			return this.$store.getters.recArtGoods
		}
	},
	methods: {
		likeHandler() {
			if(this.likeState) {
				return 
			}else{
				this.likeState = true
				this.article.like ++
			}
		},
		initArticle(){
			this.$store.dispatch('getArticle')
		}
	}
}
</script>