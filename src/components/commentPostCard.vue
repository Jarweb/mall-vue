<template>
	<div class="comment-post-card-inner">
		<div class="comment-post-good">
			<good-list
				:type="'SUBINFOS'"
				:data="data">
			</good-list>
		</div>
		
		<div class="comment-post-content">
			商品评分:
			<rater 
				class="rate"
				v-model="rate"
				star="❤" 
				active-color="#ED7A5D"
				:font-size="20"
				:margin="6"
				slot="value">
			</rater>
			<div class="rate-tip">
				<span class="tip">{{rateTip}}</span>
			</div>

			<x-textarea 
				class="text"
				:max="500" 
				:rows="4"
				:show-counter="false"
				@on-change="changeComment"
				placeholder="写下改商品的评价吧">
			</x-textarea>
		</div>
	</div>
</template>

<script>
import GoodList from './GoodList.vue'
import {XTextarea, Rater} from 'vux'

export default {
	props: ['data', 'rateTips'],
	components: {
		Rater,
		XTextarea,
		GoodList
	},
	data() {
		return {
			rate: 5,
			rateTip: this.rateTips.level5
		}
	},
	watch: {
		rate(newVal, oldVal) {
			console.log(this.rateTips)
			console.log(this.rate)
			switch(this.rate){
				case 5:
				this.rateTip = this.rateTips.level5
				break;
				case 4:
				this.rateTip = this.rateTips.level4
				break;
				case 3:
				this.rateTip = this.rateTips.level3
				break;
				case 2:
				this.rateTip = this.rateTips.level2
				break;
				case 1:
				this.rateTip = this.rateTips.level1
				break;
				case 0:
				this.rateTip = '写点什么吧'
				break;
			}
		}
	},
	methods: {
		changeComment(val) {
			console.log(val)
			this.$store.dispatch({
				type: 'setonecomment',
				comment:{
					id: 'x',
					content: val
				}
			})
		}
	}
}
</script>