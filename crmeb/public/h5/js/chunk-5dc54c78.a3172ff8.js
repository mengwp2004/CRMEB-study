(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dc54c78"],{"2b67":function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{ref:"container",staticClass:"flash-sale "},[s("div",{staticClass:"saleBox"},[s("div",{staticClass:"header"},[s("img",{attrs:{src:t.timeList[t.active].slide}})])]),t._m(0),s("Tabs",{ref:"timeList",staticClass:"time-tabs",attrs:{"line-height":"0",animated:"","title-inactive-color":"2",sticky:""},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},t._l(t.timeList,(function(i,e){return s("Tab",{key:e},[s("div",{staticClass:"timeItem acea-row row-column-around",attrs:{slot:"title"},on:{click:function(i){return t.setTime(e)}},slot:"title"},[s("span",{staticClass:"time"},[t._v(t._s(i.time))]),s("span",{staticClass:"state"},[t._v(t._s(i.state))])]),s("div",{staticClass:"list"},t._l(t.seckillList,(function(n,e){return s("div",{key:e,staticClass:"item acea-row row-between-wrapper"},[s("div",{staticClass:"pictrue"},[s("img",{attrs:{src:n.image}})]),s("div",{staticClass:"text acea-row row-column-around"},[s("div",{staticClass:"line1",domProps:{textContent:t._s(n.title)}}),s("div",{staticClass:"money"},[s("span",{staticClass:"num font-color-red",domProps:{textContent:t._s("￥"+n.price)}}),s("span",{staticClass:"ot_price",domProps:{textContent:t._s("￥"+n.ot_price)}})]),s("div",{staticClass:"stock"},[t._v("\n              限量"),s("span",{domProps:{textContent:t._s(n.stock+"件")}})]),s("div",{staticClass:"progress cart-color"},[s("div",{staticClass:"bg-red",style:{width:t.loading?n.percent+"%":""}}),s("div",{staticClass:"piece font-color-red",domProps:{textContent:t._s(n.percent+"%")}})])]),1===i.status&&n.stock>0?s("div",{staticClass:"grab bg-color-red",on:{click:function(s){return t.goDetail(n.id,i.status)}}},[t._v("\n            马上抢\n          ")]):t._e(),1===i.status&&n.stock<=0?s("div",{staticClass:"grab",on:{click:function(s){return t.goDetail(n.id,i.status)}}},[t._v("\n            已售罄\n          ")]):t._e(),2===i.status?s("div",{staticClass:"grab bg-color-red",on:{click:function(s){return t.goDetail(n.id,i.status)}}},[t._v("\n            即将开始\n          ")]):t._e(),0===i.status?s("div",{staticClass:"grab bg-color-red",on:{click:function(s){return t.goDetail(n.id,i.status)}}},[t._v("\n            已结束\n          ")]):t._e()])})),0),0===t.seckillList.length&&t.page>1?s("div",{staticClass:"noCommodity"},[s("div",{staticClass:"noPictrue"},[s("img",{staticClass:"image",attrs:{src:n("0c36")}})])]):t._e(),t.seckillList.length>0?s("Loading",{attrs:{loaded:t.status,loading:t.loadingList}}):t._e()],1)})),1)],1)},e=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"logoPic"},[s("img",{attrs:{src:n("634a")}})])}],a=(n("f313"),n("43ab")),c=(n("96ab"),n("b649")),r=n("ca41"),o=n("3a5e"),u={name:"GoodsSeckill",components:{Tab:c["a"],Tabs:a["a"],Loading:o["a"]},props:{},data:function(){return{timeList:[],sticky:!1,loading:!1,datatime:0,active:0,seckillList:[],status:!1,loadingList:!1,page:1,limit:5}},mounted:function(){this.mountedStart()},methods:{mountedStart:function(){var t=this,i=this;Object(r["r"])().then((function(t){i.$set(i,"timeList",t.data.seckillTime),i.$set(i,"active",t.data.seckillTimeIndex),i.datatime=i.timeList[i.active].stop,i.getSeckillList(),i.$nextTick((function(){i.sticky=!0,i.$refs.timeList.scrollIntoView()}))})),this.$scroll(this.$refs.container,(function(){!t.loadingList&&t.getSeckillList()})),setTimeout((function(){i.loading=!0}),500)},setTime:function(t){var i=this;i.active=t,i.datatime=i.timeList[i.active].stop,i.seckillList=[],i.page=1,i.status=!1,i.getSeckillList()},getSeckillList:function(){var t=this;if(!t.loadingList&&!t.status){t.loadingList=!0;var i=t.timeList[t.active].id;Object(r["t"])(i,{page:t.page,limit:t.limit}).then((function(i){t.status=i.data.length<t.limit,t.seckillList.push.apply(t.seckillList,i.data),t.page++,t.loadingList=!1})).catch((function(){t.loadingList=!1}))}},goDetail:function(t,i){var n=this,s=n.timeList[n.active].stop;this.$router.push({path:"/activity/seckill_detail/"+t+"/"+s+"/"+i})}}},l=u,d=(n("fd6b"),n("623f")),f=Object(d["a"])(l,s,e,!1,null,"763eb359",null);i["default"]=f.exports},"634a":function(t,i,n){t.exports=n.p+"h5/img/baokuan.6313c8c8.png"},ca41:function(t,i,n){"use strict";n.d(i,"n",(function(){return e})),n.d(i,"m",(function(){return a})),n.d(i,"o",(function(){return c})),n.d(i,"q",(function(){return r})),n.d(i,"p",(function(){return o})),n.d(i,"r",(function(){return u})),n.d(i,"t",(function(){return l})),n.d(i,"s",(function(){return d})),n.d(i,"f",(function(){return f})),n.d(i,"a",(function(){return g})),n.d(i,"h",(function(){return p})),n.d(i,"i",(function(){return m})),n.d(i,"b",(function(){return v})),n.d(i,"e",(function(){return b})),n.d(i,"c",(function(){return k})),n.d(i,"j",(function(){return h})),n.d(i,"d",(function(){return C})),n.d(i,"g",(function(){return L})),n.d(i,"l",(function(){return _})),n.d(i,"k",(function(){return w}));var s=n("b775");function e(t){return s["a"].get("/combination/list",t,{login:!1})}function a(t){return s["a"].get("/combination/detail/"+t,{},{login:!1})}function c(t){return s["a"].get("/combination/pink/"+t)}function r(t){return s["a"].post("/combination/remove",t)}function o(t){return s["a"].post("/combination/poster",t)}function u(){return s["a"].get("/seckill/index",{},{login:!1})}function l(t,i){return s["a"].get("/seckill/list/"+t,i,{login:!1})}function d(t){return s["a"].get("/seckill/detail/"+t,{},{login:!1})}function f(t){return s["a"].get("/bargain/list",t,{login:!1})}function g(t){return s["a"].get("/bargain/detail/"+t)}function p(t){return s["a"].post("/bargain/share",t)}function m(t){return s["a"].post("/bargain/start",t)}function v(t){return s["a"].post("/bargain/help",t)}function b(t){return s["a"].post("/bargain/help/price",t)}function k(t){return s["a"].post("/bargain/help/count",t)}function h(t){return s["a"].post("/bargain/start/user",t)}function C(t){return s["a"].post("/bargain/help/list",t)}function L(t){return s["a"].post("/bargain/poster",t)}function _(t){return s["a"].get("/bargain/user/list",t)}function w(t){return s["a"].post("/bargain/user/cancel",t)}},cfa9:function(t,i,n){},fd6b:function(t,i,n){"use strict";var s=n("cfa9"),e=n.n(s);e.a}}]);
//# sourceMappingURL=chunk-5dc54c78.a3172ff8.js.map