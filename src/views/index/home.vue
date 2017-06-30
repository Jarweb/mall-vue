<template>
	<div style="height:100%;">
		<view-box>
			<router-view></router-view>
			<buttom-nav></buttom-nav>
		</view-box>
	</div>
</template>
<script>
import ButtomNav from '../../components/BottomNav.vue'
import {ViewBox} from 'vux'
export default {
	components: {
		ButtomNav,
		ViewBox
	}
}
</script>