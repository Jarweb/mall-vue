<template>
	<!-- <div class="">
		<list
		v-for="param in params"
		:activeCls="'active'"
		:paramList="param">
			<div class="">
				<p>{{param.title}}</p>
				<item
					v-for="item in param.item"
					:items="item">
				</item>
			</div>
		</list>
	</div> -->
</template>
<script>
	// import List from './list.vue'
	// import Item from './item.vue'
	export default {
		components: {
			// List,
			// Item
		},
		data() {
			return {
				state: [],
				params: [
					{
						title: 'a',
						item: [1,2,3,4,5]
					},
					{
						title: 'b',
						item: [1,2,3]
					},
					{
						title: 'c',
						item: [1,2,3,4]
					}
				]
			}
		},
		methods: {
			// clickHandler(index){
			// 	if(this.state[index] === undefined || this.state[index] === false){
			// 		this.state[index] = true
			// 		return 
			// 	}
			// 	if(this.state[index] === true){
			// 		this.state[index] = false
			// 		return
			// 	}
			// }
		}
	}
</script>
<style>
	.list{
		padding-top: 8px;
		padding-bottom: 8px; 
	}
	.item-wrap{
		overflow: hidden;
	}
	/*.item{
		float: left;
		width: 50px;
		height: 50px;
		margin-right: 8px;
		border: 1px solid #404040;
		text-align: center;
	}*/
	/*.active{
		border: 1px solid red;
	}*/
</style>