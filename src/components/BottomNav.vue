<template>
	<tabbar >
		<tabbar-item 
			v-for="item in bottomBar" 
			:link="item.link">
			<span 
				slot="icon" 
				class="zui-icon" 
				:class="item.iconCls">
			</span>
			<span 
				slot="label" >
				{{item.name}}
			</span>
		</tabbar-item>	
	</tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
	components: {
		Tabbar,
		TabbarItem
	},
	props: [],
	data() {
		return {
			bottomBar: [
				{
					name: '首页',
					iconCls: 'zui-icon-INDEX_1',
					link: 'index'
				},
				{
					name: '文章',
					iconCls: 'zui-icon-TEA',
					link: 'articles'
				},
				{
					name: '购物车',
					iconCls: 'zui-icon-SHOPPING-CART-EMPTY',
					link: 'cart'
				},
				{
					name: '我的',
					iconCls: 'zui-icon-MINE_1',
					link: 'mine'
				}
			]
		}
	}
}
</script>
