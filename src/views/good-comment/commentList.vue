<template>
	<div>
		<div class="comment-list-head">
			全部评论
			<span class="num" v-show="!loading">{{comments.length}}人评论</span>
		</div>
	
		<div class="comment-list-wrap" v-show="!loading">
			<comment-card
				:type="'all'"
				v-for="item in comments"
				:comment="item">
			</comment-card>
		</div>
	</div>
</template>
<script>
require('./commentList.less')
import {comments} from '../../data/data.js'

import CommentCard from '../../components/commentCard.vue'

export default{
	components: {
		CommentCard
	},
	data() {
		return {
			// comments: comments
		}
	},
	created() {
		this.initComments()
	},
	computed: {
		loading() {
			return this.$store.getters.loading
		},
		comments() {
			return this.$store.getters.comments
		}
	},
	methods: {
		initComments() {
			this.$store.dispatch('getComments')
		}
	}
}
</script>
