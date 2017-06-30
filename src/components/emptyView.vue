<template>
	<div class="z-empty-wrap">
		<div class="z-empty-icon">
			<span 
				class="zui-icon"
				:class="iconCls">
			</span>
		</div>
		<div class="z-empty-text">{{text}}</div>
	</div>
</template>
<script>
	export default {
		props: ['iconCls', 'text'],
	}
</script>

<style>
.z-empty-wrap{

}
.z-empty-wrap .z-empty-icon{
	margin-top: 200px;
	text-align: center;
}
.z-empty-wrap .z-empty-icon .zui-icon{
	font-size: 100px;
	color: #868686;
}
.z-empty-wrap .z-empty-text{
	font-size: 14px;
	color: #404040;
	text-align: center;
}
</style>