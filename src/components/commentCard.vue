<template>
	<div class="comment-card-wrap"
		:class="cardStyle">
		<div class="head">
			<img :src="comment.userLogo" alt="">
			<span>{{comment.userName}}</span>
			<span class="right-tip">{{comment.createdAt}}</span>
		</div>
		<div class="body">
			<div 
				class="comment-score"
				>
				商品描述:
				<rater 
					v-model="comment.goodScore" 
					:value="0"
					slot="value" 
					star="❤" 
					active-color="#ef7a5d" 
					:margin="4"
					:fontSize="18"
					disabled>
				</rater>
			</div>
			<div class="comment-text">{{comment.content}}</div>
		</div>
	</div>
</template>
<script>
import { Rater, Cell} from 'vux'
export default {
	props: ['comment', 'type'],
	components: {
		Rater,
		Cell
	},
	computed: {
		cardStyle() {
			switch(this.type){
			case 'part':
				return 'comment-card-part'
				break;
			case 'all':
				return 'comment-card-all'
				break;
			}
		}
	}
}
</script>
<style>
.comment-card-wrap{
	background-color: #fff;
	padding-left: 8px;
	padding-right: 8px;
	padding-bottom: 8px;
}
.comment-card-part{
	border-top: 1px dashed #eee;
}
.comment-card-all{
	margin-bottom: 8px;
}
.comment-card-wrap .head{
	height: 40px;
	line-height: 40px;
	font-size: 15px;
	color: #404040;
}
.comment-card-wrap .head img{
	width: 28px;
	height: 28px;
	padding-right: 4px;
	vertical-align: middle;
}
.comment-card-wrap .head .right-tip{
	float: right;
	font-size: 12px;
	color: #868686;
}
.comment-card-wrap .body{

}
.comment-card-wrap .body .comment-score{
	font-size: 14px;
	line-height: 1.4;
	color: #404040;
	padding-bottom: 4px;
}
.comment-card-wrap .body .comment-text{
	font-size: 14px;
	color: #868686;
	line-height: 1.4;
}
</style>