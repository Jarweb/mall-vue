<template>
	<div class="life-cat-wrap">
		<div class="life-cat-head" v-if="title">
			{{title}}
		</div>
		<flexbox :gutter="0" wrap="wrap">
			<flexbox-item 
				:span="1/5" 
				v-for="item in cats">
				<router-link 
					class="life-cat-item"
					:to="{
						name: 'goodCat',
						query: {tag: item.id}
					}">
					<img :src="item.img" alt="">
					<div>{{item.text}}</div>
				</router-link>
			</flexbox-item>
		</flexbox>
	</div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
export default {
	props: ['cats', 'title'],
	components: {
		Flexbox, 
		FlexboxItem
	}
}
</script>
<style>
.life-cat-wrap{
	padding: 14px 8px;
	background-color: #fff;
}
.life-cat-head{
	text-align: center;
	font-size: 15px;
	color: #404040;
	padding-bottom: 10px;
}
.life-cat-item{
	display: block;
	padding: 6px 0;
	text-align: center;
	line-height: 1.4;
	font-size: 12px;
	color: #404040;
}
</style>