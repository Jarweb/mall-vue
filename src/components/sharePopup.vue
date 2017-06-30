<template>
	<span>
		<span 
			class="zui-icon"
			:class="shareCls"
			@click="showSharePop">
		</span>

		<popup
			v-model="showShare"
			height="300px">
			<div class="share-popup-inner">
				<div class="share-qrcode">
					<img :src="share.qrcode" alt="">
				</div>
				<div class="share-desc">{{share.title}}</div>
				<div class="share-popup-close">
					<span 
						class="zui-icon zui-icon-close"
						@click="closeSharePop">
					</span>
				</div>
			</div>
		</popup>
	</span>
</template>

<script>
import {Popup} from 'vux'

export default {
	props: ['share','shareCls'],
	components: {
		Popup
	},
	data() {
		return {
			showShare: false
		}
	},
	methods: {
		showSharePop(){
			this.showShare = !this.showShare
		},
		closeSharePop(){
			this.showShare = !this.showShare
		}
	}
}
</script>

<style>
.share-popup-inner{
	background-color: #fff;
	padding-top: 20px;
	z-index: 999;
}
.share-popup-inner .share-qrcode{
	height: 200px;
}	
.share-popup-inner .share-qrcode img{
	display: block;
	height: 100%;
	width: auto;
	margin: 0 auto;
}
.share-popup-inner .share-desc{
	height: 35px;
	line-height: 35px;
	font-size: 12px;
	color: #868686;
	text-align: center;
}
.share-popup-inner .share-popup-close{
	height: 45px;
	line-height: 45px;
	text-align: center;
	color: #404040;
}
.share-popup-inner .share-popup-close .zui-icon{
	font-size: 24px;
}
</style>