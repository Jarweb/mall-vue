<template>
	<div 
		class="z-scroller-box" 
		:style="{width: scrollerBoxStyleWidth+'px'}">
		<div 
			class="z-scroller-item" 
			v-for="item in datas"
			:style="{width: scrollerItemStyle.width+'px', marginLeft: scrollerItemStyle.marginLeft+'px'}">
			<slot :data='item'></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		datas: {
			type: null
		},
		scrollerItemStyle: {
			type: Object,
			default: function() {
				return {
					width: 0,
					marginLeft: 0,
					surplus: 0
				}
			}
		}
	},
	data() {
		return {
			// scrollerItemStyle: {
			// 	width: 200,
			// 	marginLeft: 10
			// }
		}
	},
	computed: {
		scrollerBoxStyleWidth: function() {
			return this.datas.length * (this.scrollerItemStyle.width + this.scrollerItemStyle.marginLeft) - this.scrollerItemStyle.marginLeft + this.scrollerItemStyle.surplus
		}
	}
}
</script>
<style>
	.z-scroller-box {
	  position: relative;
	}
	.z-scroller-item {
	  display:inline-block;
	  float: left;
	}
	.z-scroller-item:first-child {
	  margin-left: 0!important;
	}
</style>