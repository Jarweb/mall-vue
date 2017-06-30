<template>
	<div class="mysetting-wrap">
		<cell 
			class="z-cell-item"
			:title="'头像'" 
			is-link>
			<div class="user-logo" slot="value">
				<img 
				class=""
				:src="userInfo.logo">
			</div>
		</cell>
		<cell 
			class="z-cell-item"
			:title="'账号'" 
			:value="''"
			is-link>
		</cell>
		<cell 
			class="z-cell-item"
			:title="'昵称'" 
			:value="userInfo.nikeName"
			is-link>
		</cell>
		<cell 
			class="z-cell-item"
			:title="'密码'" 
			:value="''"
			is-link>
		</cell>
		<cell 
			class="z-cell-item"
			:title="'已绑定手机'" 
			:value="userInfo.tell"
			is-link>
		</cell>

		<group class="z-nofixed-fullbtn">
			<x-button 
				type="warn">
				退出账号
			</x-button>
		</group>
	</div>
</template>
<script>
require('./mySetting.less')
import {userSettings} from '../../data/data.js'

import { Cell, Group, XButton, Tabbar, TabbarItem } from 'vux'

export default {
	components: {
		Cell, 
		Group,
		XButton, 
		Tabbar, 
		TabbarItem
	},
	data() {
		return {
			userInfo: userSettings
		}
	}
}
</script>