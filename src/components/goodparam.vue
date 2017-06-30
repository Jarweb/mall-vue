<template>
	<div class="params-item">
		<p>{{item.name}}</p>
		<p>
			<span 
				v-for="(i, index) in item.param"
				:class="selected == index ? 'active' : ''"
				@click="paramSelect(i, index)">
				{{i}}
			</span>
		</p>
	</div>
</template>
<script>
	export default {
		props: ['item'],
		data() {
			return {
				selected: -1,
				selectedText: ''
			}
		},
		methods: {
			paramSelect(val, index) {
				this.selected = index
				this.selectedText = val 
				this.$emit('paramChange', {name: this.item.name, val})
				// this.$store.dispatch({
				// 	type: 'selectParams',
				// 	val
				// })
			}
		}
	}
</script>