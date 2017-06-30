<template>
	<div class="address-card-wrap">
		<div class="address-head">
			<span 
				class="zui-icon zui-icon-arrow" 
				v-if="link">
			</span>
			<span class="name">{{data.name}}</span>
			<span class="tell">{{data.tel}}</span>
		</div>
		<div class="address-body">
			收货地址: {{data.address}}
		</div>
		<div class="address-foot" v-if="tool">
			<div 
				class="left"
				:class="selected ? 'active' : '' " 
				@click="selectHandler">
				<icon 
					class="icon"
					:type="selected ? 'success' : 'circle'">
				</icon>
				{{selected ? '默认地址' : '设为默认'}}
			</div>
			<div class="right">
				<router-link 
					class="zui-icon zui-icon-article1"
					:to="{
						name: 'addressEdit',
						params: {ad: data}
					}">编辑
				</router-link >
				<span 
					class="zui-icon zui-icon-del"
					@click="deleteHandler">删除</span>
			</div>
		</div>
	</div>

</template>
<script>
import { Icon } from 'vux'

export default {
	components: {
		Icon
	},
	props: {
		data: {
			type: Object,
			default: function(){
				return {}
			}
		}, 
		tool:{
			type: Boolean,
			default: false
		},
		link: {
			type: Boolean,
			default: false
		},
		selected: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			
		}
	},
	methods: {
		selectHandler() {
			this.$emit('on-address-selected')
		},
		deleteHandler() {
			this.$emit('on-address-delete')
		}
	}
}
</script>
<style>
.address-card-wrap{
	background-color: #fff;
	border-bottom: 8px solid #efeff4;
	padding-left: 8px;
	padding-right: 8px;
}
.address-head{
	height: 40px;
	line-height: 40px;
    overflow: hidden;
}
.address-head .zui-icon{
	float: right;
	display: block;
	padding-left: 4px;
	height: 100%;
	font-size: 18px;
	line-height: 40px;
	color: #868683;
}
.address-head .name{
    font-size: 15px;
    font-weight: 500;
    color: #404040;
    float: left;
    display: block;
}
.address-head .tell{
    font-size: 15px;
    font-weight: 500;
    color: #404040;
    float: right;
    display: block;
}
.address-body{
    display: block;
    font-size: 14px;
    line-height: 1.5;
    color: #404040;
    padding-bottom: 8px;
}
.address-foot{
	border-top: 1px dashed #eee;
	height: 36px;
	line-height: 36px;
}
.address-foot .left{
	float: left;
	width: 40%;
	font-size: 12px;
	color: #404040;
	vertical-align: middle;
}
.address-foot .left.active,
.address-foot .left.active .icon:before{
	color: #ed7a5d;
}
.address-foot .left .icon:before{
	color: #404040;
	font-size: 16px;
	line-height: 2.1;
}

.address-foot .right{
	float: right;
	width: 60%;
	text-align: right;
	vertical-align: middle;
}
.address-foot .right .zui-icon{
	display: inline-block;
	height: 100%;
	padding: 8px 0 8px 8px;
	font-size: 12px;
	color: #404040;
	letter-spacing: 1px;
}
</style>