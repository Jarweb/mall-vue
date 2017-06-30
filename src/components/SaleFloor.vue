<template>
	<div class="sales-floor" v-if="type === 'floorA'">
		<div class="head">
			<span class="title">{{floorTitle}}</span>
			<span 
				class="zui-icon zui-icon-MORE_V"
				v-if="hasAll">
			</span>
		</div>
		<scroller lock-y :scrollbar-x='false'>
			<scroller-box 
				:scrollerItemStyle="{
					width: 200,
					marginLeft: 10,
					surplus: 0
				}"
				:datas="floorData">
				<template scope="props">
					<router-link  
						class="sales-floor-item"
						:to="{
							name: 'goodDetail', 
							params: {id: props.data.id}
						}">
						<img :src="props.data.img" alt="">
						<div 
							class="title z-ellipsisi"
							v-if="props.data.title">
							{{props.data.title}}
						</div>
					</router-link>
				</template>
			</scroller-box>
		</scroller>
	</div>
</template>
<script>
import ScrollerBox from './ScrollerBox.vue'
import {Scroller} from 'vux'

export default {
	props: ['floorTitle', 'floorData', 'hasAll', 'type'],
	components: {
		ScrollerBox,
		Scroller
	}
}
</script>

<style>
.sales-floor{
	border-top: 8px solid #efeff4;
	padding-bottom: 6px;
	background: #fff;
}
.sales-floor .head{
	height: 44px;
	background: #fff;
	padding: 6px 10px;
	line-height: 2;
	color: #404040;
	font-size: 15px;
}
.sales-floor .head .zui-icon{
	float: right;
	font-size: 30px;
	color: #404040;
	display: inline-block;
	width: 30px;
	height: 100%;
	line-height: 1;
	text-align: center;
	vertical-align: middle;
}
.sales-floor-item img{
	display: block;
}
.sales-floor-item .title{
	text-align: center;
	font-size: 14px;
	padding-top: 6px;
	color: #404040;
}
</style>