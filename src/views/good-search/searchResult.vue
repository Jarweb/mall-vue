<template>
	<div class="z-page">
		<view-box class="z-content">
			<div class="search-result-searchbox">
				<span 
					@click="backHandler"
					class="search-result-back zui-icon zui-icon-back">
					
				</span>
				<!-- <span 
					class="search-result-tool zui-icon zui-icon-SHOPPING-CART-EMPTY"></span> -->
				<search 
					@result-click="resultClick" 
					@on-change="getResult" 
					:results="results" 
					v-model="value" 
					position="absolute" 
					auto-scroll-to-top>
				</search>
				<!-- 设置结果面板的高度 min-height 623-->
			</div>
			
			<div 
				class="search-result-tip"
				v-show="searchQuery">
				包含‘{{searchQuery}}’的所有商品:
			</div>

			<div 
				class="search-result-wrap"
				v-show="resultData.length > 0">
				<good-grid 
					:data="resultData">
				</good-grid>

				<ending-tip 
					:showLoading="true">
				</ending-tip>
			</div>
		</view-box>
	</div>
</template>
<script>
require('./searchResult.less')
import {searchResult} from '../../data/data.js'

import GoodGrid from '../../components/GoodGrid.vue'
import EndingTip from '../../components/EndingTip.vue'
import { Search, ViewBox} from 'vux'

export default {
	components: {
		Search,
		GoodGrid,
		EndingTip,
		ViewBox
	},
	data() {
		return {
			searchQuery: '',
			results: [],
			value: '',
			defaultValue: 'hi',
			resultData: [],
		}
	},
	methods: {
		resultClick(item) {
			this.searchQuery = item.title
			this.resultData = searchResult
		},	
		getResult(val) {
			this.results = val 
				? this._getResult(this.value) 
				: this._getResult(this.defaultValue)
		},
		_getResult (val) {
		  let rs = []
		  for (let i = 0; i < 10; i++) {
		    rs.push({
		      title: `${val} result: ${i + 1} `,
		      other: i
		    })
		  }
		  return rs
		},
	    backHandler(){
	    	this.$router 
	    		? this.$router.back() 
	    		: window.history.back()
	    }
	},
	
}

</script>