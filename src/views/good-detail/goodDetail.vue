<template>
	<div class="z-page">
	<div class="z-content">
	<view-box >
		<div class="good-detail-bottombar">
			<div class="cart">
				<router-link
					class="zui-icon zui-icon-SHOPPING-CART-EMPTY"
					:to="{
						name: 'cart'
					}">
				</router-link>
			</div>
			<div class="like">
				<span 
					class="zui-icon"
					:class="isLike 
						? 'zui-icon-follow-solid active' 
						: 'zui-icon-follow-hollow'"
					@click="likeHandler($event)">
				</span>
			</div>
			<div 
				class="addcart"
				@click="toggerSpeciPopup(1)">
				加入购物车
			</div>
			<div 
				class="buynow"
				@click="toggerSpeciPopup(2)">
				立即购买
			</div>
		</div>
		
		<swiper 
			class="a" 
			:aspect-ratio="1/1"
			dots-position="center">
			<swiper-item 
				v-for="item in good.banners">
				<img :src="item">
			</swiper-item>
		</swiper>

		<div class="good-detail-head">
			<div class="title z-ellipsis-2">{{good.title}}</div>
			<div class="subtitle">
				<div class="params price">￥{{good.price}}</div>

				<div class="params">已售{{good.soleNum}}</div>
				
				<div class="params">库存{{good.maxInventory}}件</div>
			</div>
		</div>
		
		<div class="good-detail-specification">
			<cell 
				class="z-cell-item"
				:title="'选择: 规格 / 颜色'" 
				is-link 
				@click.native="toggerSpeciPopup(0)">
			</cell>
		</div>

		<div class="good-detail-brand">
			<div
				v-if="good.brand" 
				class="gd-brand-head">
				<img :src="good.brand.logo" alt="">
				<div class="gd-brand-desc">
					<div class="gd-brand-suptitle">{{good.brand.title}}</div>
					<div class="gd-brand-subtitle">{{good.brand.subtitle}}</div>
					<share-popup
						class="share"
						:shareCls="'zui-icon-QR-code'"
						:share="kefu">
					</share-popup>
				</div>
			</div>	
			
			<div class="gd-brand-foot">
				<div class="server">
					<div class="share-wrap">
						<!-- :shareCls="'zui-icon-KEFU'" -->
						<share-popup
							class="share"
							:share="shareInfo">
						</share-popup>
						联系客服
					</div>
				</div>
				<div class="back2index">
					<router-link
						class="back"
						:to="{
							name: 'index'
						}">
						<!-- <span class="zui-icon zui-icon-INDEX_1"></span> -->
						进入生活馆
					</router-link>
				</div>
			</div>
		</div>

		<div class="good-detail-introduce">
			<div class="head">——— 详情 ———</div>
			<div class="content" v-html="good.content"></div>
		</div>

		<div class="good-detail-comment">
			<div class="head">
				评价
				<span class="comment-num">({{good.commentsLength}}人评价)</span>
				<router-link 
					class="comment-all"
					:to="{
						name: 'commentList'
					}">
					查看全部
				</router-link>
			</div>
			<comment-card 
				:type="'part'"
				v-for="item in good.commentsPart"
				:comment="item">
			</comment-card>
		</div>

		<popup 
			v-model="show" 
			height="400px" 
			@on-hide="log('hide')" 
			@on-show="log('show')"
			@on-first-show="resetScroller">
			<div class="good-params-popup-wrap">
				<div class="head">
					<div class="img">
						<img src="/static/img/good-default.jpg" alt="">
					</div>
					<div class="title">
						<span class="price">￥{{good.price}}</span>
						<span class="inventory">(库存{{good.maxInventory}}件)</span>
					</div>
				</div>
				<scroller 
					height="260px"
					lock-x 
					ref="scroller">
					<div class="body">
						<div 
							class="param-item"
							v-for="(item,pIndex) in good.params">
							<good-param 
								:item="item" 
								@paramChange="paramChange" />
						</div>
						<div class="param-item">
							<x-number 
								class="add-num"
								:title="'数量'"
								:value="1" 
								:min="1" 
								:step="1"
								width="30px">
							</x-number>
						</div>
					</div>
				</scroller>
				<div class="foot">
					<div 
						class="btn" 
						v-show="btnType === 0">
						<div class="left">加入购物车</div>
						<div class="right">立即购买</div>
					</div>
					<div 
						class="btn" 
						v-show="btnType === 1">
						加入购物车
					</div>
					<router-link 
						class="btn" 
						@click.native="handleBuy"
						v-show="btnType === 2"
						:to="{
							name: 'goodPay'
						}">
						立即购买
					</router-link>
				</div>
			</div>
		</popup>
	</view-box>
	</div>
	</div>
</template>
<script>
require('./goodDetail.less')
import {goodDetail} from '../../data/data.js'

import GoodParam from '../../components/goodparam.vue'
import SharePopup from '../../components/sharePopup.vue'
import CommentCard from '../../components/commentCard.vue'
import {Flexbox,FlexboxItem,Swiper,SwiperItem,Cell,Popup,Scroller,Toast,ViewBox,XSwitch,XNumber} from 'vux'

export default {
	components: {
		Popup,
		Scroller,
		Toast,
		Swiper,
		SwiperItem,
		Cell,
		CommentCard,
		Flexbox,
		FlexboxItem,
		ViewBox,
		XSwitch,
		XNumber,
		SharePopup,
		GoodParam
	},
	data() {
		return {
			selectParams: [],
			isActive: false,
			btnType: '',
			show: false,
			showToast: false,
			isLike: false,
			shareInfo: {
				qrcode: '/static/img/good-default.jpg',
				text: '长按二维码分享'
			},
			kefu: {
				qrcode: '/static/img/good-default.jpg',
				text: '长按二维码分享'
			},
			// good: goodDetail
		}
	},
	computed: {
		scrollerHeight() {
			return 'cale(100%-130px)'
		},
		good() {
			return this.$store.getters.good
		}
	},
	created() {
		this.$store.dispatch({
			type: 'getGoodDetail',
			id: 'xx'
		})
	},
	methods: {
		likeHandler($event) {
			console.log($event)
			if(this.isLike){
				this.isLike = false
				this.good.likeNum--
			}else{
				this.isLike = true
				this.good.likeNum++
			}
		},
		resetScroller() {
			this.$nextTick(() => {
				this.$refs.scroller.reset()
			})
		},
		log(str) {
			console.log(str)
		},
		toggerSpeciPopup(type) {
			switch(type){
				case 0: 
				this.btnType = 0
				this.show = !this.show
				break;
				case 1:
				this.btnType = 1
				this.show = !this.show
				break;
				case 2:
				this.btnType = 2
				this.show = !this.show
				break
			}
		},
		paramChange(param) {
			// data 存引用类型会出现奇怪的事情
			var pos = this.selectParams.indexOf(param.name)
			console.log(pos)
			if(pos > -1){
				this.selectParams[pos + 1] = param.val 
			}else{
				this.selectParams.push(param.name, param.val)
			}
			 
			console.log(this.selectParams)
		},
		handleBuy() {
			console.log(1111)
			this.show = false
		}
	}
}
</script>