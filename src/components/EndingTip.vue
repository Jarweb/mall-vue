<template>
	<div class="ending-tip">
		<div class="ending-loading"
			v-if="showLoading">
			<div class="loading-cup"></div>
		</div>
		<div class="ending-nomore"
			v-else>
			<span>—— {{nomore}} ——</span>
		</div>
	</div>
</template>
<script>
export default {
	props: ['showLoading'],
	data() {
		return {
			nomore: '我是有底线的'
		}
	}
}
</script>
<style>
.ending-tip{
	width: 100%;
	background: inherit;
}
.ending-tip .ending-nomore{
	padding-top: 50px;
	padding-bottom: 30px;
	font-size: 12px;
	color: #929292;
	text-align: center;
}
.ending-tip .ending-loading{
	padding-top: 50px;
	padding-bottom: 30px;
	font-size: 12px;
	color: #808083;
	text-align: center;
}
.loading-cup{
	display: block;
    width: 31px;
    height: 20px;
    border: 1px #808080 solid;
    border-radius: 0px 0px 12px 12px;
    position: relative;
    margin: 0 auto;
}
.loading-cup:after, .loading-cup:before{
    position: absolute;
    content: "";
}
.loading-cup:after{
    width: 6px;
    height: 8px;
    border: 1px #808080 solid;
    border-left: none;
    border-radius: 0px 20px 20px 0px;
    left: 30px;
}
.loading-cup:before{
    width: 1px;
    height: 6px;
    background-color: #808080;
    top: -10px;
    left: 9px;
    box-shadow: 5px 0px 0px 0px #808080,
                5px -5px 0px 0px #808080,
                10px 0px 0px 0px #808080;
    -webkit-animation: steam 1s linear infinite alternate;
       -moz-animation: steam 1s linear infinite alternate;
            animation: steam 1s linear infinite alternate;
}

@-webkit-keyframes steam{
    0%{height: 0px;}
    100%{height: 6px;}            
}
@-moz-keyframes steam{
    0%{height: 0px}
    100%{height: 6px;}            
}
@keyframes steam{
    0%{height: 0px}
    100%{height: 6px;}            
}
</style>