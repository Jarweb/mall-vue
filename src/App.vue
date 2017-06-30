<template>
	<div style="height: 100%;">
		<loading 
			v-model="loading" 
			:text="'加载中...'">
		</loading>
		<!-- index article cart mine -->
		<div
			class="z-app"
			:class="{'hideLeft':$route.path.split('/').length>2}">
			
			    <keep-alive>
			        <router-view 
			        	name="default">
			        </router-view>
			    </keep-alive>
			
			<div class="z-foot">
				<buttom-nav></buttom-nav>
			</div>
		</div>

		<transition
			name="custom-classes-transition" 
			:enter-active-class="enterAnimate" 
			:leave-active-class="leaveAnimate">
			<keep-alive>
				<router-view 
					name="subPage" 
					class="router-view">
				</router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
require('assets/css/common.less')
import ButtomNav from './components/BottomNav.vue'
import {ViewBox, Loading} from 'vux'


export default {
	components: {
		ButtomNav,
		ViewBox,
		Loading
	},
	data() {
		return {
			"enterAnimate": "", //页面进入动效
			"leaveAnimate": "" //页面离开动效
		}
	},
	watch: {
		'$route' (to, from) {
			const toDepth = to.path.split('/').length
			const fromDepth = from.path.split('/').length
			if(toDepth === 2) {
				// this.$store.commit('setPageName', to.name)
			}
			if(toDepth === fromDepth) {
				return 
			}
			this.enterAnimate = toDepth > fromDepth
				? 'animated fadeInRight'
				: 'animated fadeInLeft'

			this.leaveAnimate = toDepth > fromDepth
				? 'animated fadeOutRight'
				: 'animated fadeOutLeft'

			// if(toDepth === 3) {
			// 	this.leaveAnimate = 'animated fadeOutRight'
			// }
			
		}
	},
	computed: {
		loading(){
			return this.$store.getters.loading
		}
	},
	methods: {

	},
	
}
</script>
