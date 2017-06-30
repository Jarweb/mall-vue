<template>
	<div 
		class="good-list-wrap"
		v-if="type === 'SUBINFO'">
		<img class="good-list-img" :src="data.img" alt="">
		<div class="good-list-info">
			<div class="title z-ellipsis-2">
				{{data.title}}
			</div>
			<div class="subInfo z-ellipsis-2">
				{{data.subInfo}}
			</div>
			<div class="price">
				￥{{data.price}}
			</div>
		</div>
	</div>

	<div 
		class="good-list-wrap"
		v-else-if="type==='SUBINFOS'">
		<img class="good-list-img" :src="data.img" alt="">
		<div class="good-list-info">
			<div class="title z-ellipsis-2">
				{{data.title}}
			</div>
			<div class="subInfo z-ellipsis-2">
				<span 
					class="param"
					v-for="item in data.subInfo">
					{{item}}
				</span>
			</div>
			<div class="price">
				￥{{data.price}}
				<span 
					class="num"
					v-if="data.num">
					x{{data.num}}
				</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: ['type','data']
}
</script>
<style>
.good-list-wrap{
	overflow: hidden;
	padding: 8px;
	border-bottom: 1px solid #f8f8f8;
}
.good-list-wrap:last-child{
	border-bottom: none;
}
.good-list-wrap .good-list-img{
	display: block;
	float: left;
	height: 100px;
	width: 100px;
}
.good-list-wrap .good-list-info{
	overflow: hidden;
	padding-left: 8px;
}
.good-list-wrap .good-list-info .title{
	font-size: 16px;
	line-height: 1.2;
	color: #404040;
	margin-bottom: 8px;
}
.good-list-wrap .good-list-info .subInfo{
	font-size: 12px;
	line-height: 1.3;
	color: #868686;
	margin-bottom: 4px;
}
.good-list-wrap .good-list-info .subInfo .param{
	padding-right: 4px;
}
.good-list-wrap .good-list-info .price{
	font-size: 16px;
	line-height: 1.3;
	color: #404040;
}
.good-list-wrap .good-list-info .price .num{
	float: right;
	font-size: 12px;
	color: #868686;
	line-height: 1.6;
}
</style>