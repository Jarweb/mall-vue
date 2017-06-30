<template>
	<div class="comment-post-wrap">
		<div class="comment-post-btn">
			<a href="#" class="btn" @click="postCommentHandle">发布评论</a>
		</div>
		
		<view-box>
			<div
				class="comment-post-card" 
				v-for="item in goods">
				<CommentPostCard :data="item" :rateTips="rateTips" />
			</div>
		</view-box>
	</div>
	
</template>
<script>
require('./commentPost.less')
import {commentPost} from '../../data/data.js'

import CommentPostCard from '../../components/commentPostCard.vue'
import GoodList from '../../components/GoodList.vue'
import {Rater,XTextarea,ViewBox} from 'vux'

export default {
	components: {
		Rater,
		GoodList,
		XTextarea,
		ViewBox,
		CommentPostCard
	},
	data() {
		return {
			
		}
	},
	computed: {
		goods() {
			console.log(this.$store.getters.commentGoods)
			return this.$store.getters.commentGoods
		},
		rateTips() {
			return this.$store.getters.rateTips
		}
	},
	created() {
		this.$store.dispatch({
			type: 'getCommentPost'
		})
	},
	methods: {
		postCommentHandle() {
			this.$store.dispatch({
				type: 'submitComments'
			})
		}
	}
}
</script>