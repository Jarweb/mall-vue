import * as data from '../data/data.js'

export function getArticles(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.articles);
	    }, 1000)
	})
}

export function getBanners(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.shopBanner);
	    }, 1000)
	})
}

export function getArticle(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.article);
	    }, 1000)
	})
}

export function getRecommendGoods(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.articleGoods);
	    }, 1000)
	})
}

export function getRecommendArticles(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.articleRecommend);
	    }, 1000)
	})
}


export function getCatBanner(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.shopBanner);
	    }, 1000)
	})
}

export function getCatResult(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.catResult);
	    }, 1000)
	})
}

export function getComments(){
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
	        resolve(data.comments);
	    }, 1000)
	})
}

export function getShop(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.shop);
	    }, 1000)
	})
}

export function getShopBanner(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.shopBanner);
	    }, 1000)
	})
}

export function getShopCat(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.shopCat);
	    }, 1000)
	})
}

export function getOrders(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.myOrders);
	    }, 1000)
	})
}

export function getOrder(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.myOrder);
	    }, 1000)
	})
}


export function getFloor1(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.floor1);
	    }, 1000)
	})
}

export function getRecommendGoods1(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.recommendGoods);
	    }, 1000)
	})
}

export function getTimeoutCoupons(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.timeoutCoupons);
	    }, 1000)
	})
}

export function getUnusefullCoupons(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.unusefullCoupons);
	    }, 1000)
	})
}

export function getUsefullCoupons(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.usefullCoupons);
	    }, 1000)
	})
}

export function getMyLikes(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.myLikes);
	    }, 1000)
	})
}

export function deleteMyLikes(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve('ok');
	    }, 1000)
	})
}

export function getAddress(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve(data.userAddress);
	    }, 1000)
	})
}

export function deleteAddress(){
	return new Promise(function(resolve,reject){
		setTimeout(function(){
	        resolve('ok');
	    }, 1000)
	})
}

export function editAddress() {
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			resolve('ok')
		}, 1000)
	})
}

export function getCommentPost() {
	return new Promise(function(resolve, reject) {
		setTimeout(function(){
			resolve(data.commentPost)
		}, 1000)
	})
}

export function postComment(comments) {
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			resolve('ok')
		}, 1000)
	})
}

export function getGoodDetail(id) {
	return new Promise(function(resolve, reject){
		setTimeout(function() {
			resolve(data.goodDetail)
		}, 1000)
	})
}