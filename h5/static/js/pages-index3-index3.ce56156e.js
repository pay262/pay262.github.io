(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index3-index3"],{"85b8":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",[t("v-uni-web-view",{attrs:{"webview-styles":this.webviewStyles,src:this.index3Url}})],1)},a=[]},9575:function(e,t,n){"use strict";(function(e){var i;n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{index3Url:"",isBackFlag:!1,interval:null,webviewStyles:{progress:{color:"#000000"}}}},onReady:function(){var e=this.$mp.page.$getAppWebview(),t=setInterval((function(){i=e.children()[0],i&&(i.id="webviewId-index3",i.setStyle({bottom:0}),clearInterval(t))}),100)},onShow:function(){e("log","onShow"," at pages/index3/index3.vue:35"),this.index3Url!=this.$unicorn.index3Url&&(this.index3Url=this.$unicorn.index3Url),this.updateIsBackFlagTask()},onHide:function(){clearInterval(this.interval)},onBackPress:function(e){if(!this.isBackFlag)return!1;var t=this.$unicorn.h5PageBack("webviewId-index3");return this.updateIsBackFlag(this),t},onNavigationBarButtonTap:function(e){this.isBackFlag?uni.navigateBack({delta:1}):uni.switchTab({url:"/pages/index3/index3"})},methods:{updateIsBackFlagTask:function(){this.interval=setInterval((function(e){e.updateIsBackFlag(e)}),1e3,this)},updateIsBackFlag:function(e){var t=this;e.$unicorn.h5PageCanBack(e.$unicorn.getWebViewById("webviewId-index3")).then((function(n){if(e.isBackFlag!=n){var i=t.$mp.page.$getAppWebview();n?i.setTitleNViewButtonStyle(0,{type:"back"}):i.setTitleNViewButtonStyle(0,{type:"home"}),e.isBackFlag=n}}))}}};t.default=a}).call(this,n("0de9")["log"])},b3b5:function(e,t,n){"use strict";n.r(t);var i=n("9575"),a=n.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);t["default"]=a.a},c34b:function(e,t,n){"use strict";n.r(t);var i=n("85b8"),a=n("b3b5");for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);var u=n("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"15eb0fee",null,!1,i["a"],void 0);t["default"]=s.exports}}]);