(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23effebc"],{1119:function(t,e,a){},"57e7":function(t,e,a){"use strict";var s=a("5ca1"),c=a("c366")(!1),i=[].indexOf,r=!!i&&1/[1].indexOf(1,-0)<0;s(s.P+s.F*(r||!a("2f21")(i)),"Array",{indexOf:function(t){return r?i.apply(this,arguments)||0:c(this,t,arguments[1])}})},"6fc1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"classify"},[a("header",{staticClass:"home-header"},[t._v("商品分类")]),a("section",{ref:"searchWrap",staticClass:"search-wrap"},[a("list-scroll",{staticClass:"nav-side-wrapper",attrs:{"scroll-data":t.categoryData}},[a("ul",{staticClass:"nav-side"},t._l(t.categoryData,function(e,s){return a("li",{key:s,class:{active:t.currentIndex===s},on:{click:function(e){return t.selectMenu(s)}}},[a("span",[t._v(t._s(e.name.slice(0,2)))]),a("span",[t._v(t._s(e.name.slice(2)))])])}),0)]),a("list-scroll",{staticClass:"search-content",attrs:{"scroll-data":t.categoryData}},[a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},[t._l(t.categoryData,function(e,s){return[t.currentIndex===s?a("div",{key:s,staticClass:"swiper-slide"},[e.imgUrl?a("img",{staticClass:"category-main-img",attrs:{src:e.imgUrl},on:{click:function(a){return t.selectProduct(e.value)}}}):t._e(),t._l(e.list,function(e,s){return a("div",{key:s},[a("p",{staticClass:"goods-title"},[t._v(t._s(e.title))]),a("div",{staticClass:"category-list"},t._l(e.productList,function(e,s){return a("div",{key:s,staticClass:"product-item",on:{click:function(a){return t.selectProduct(e.value)}}},[a("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),a("p",{staticClass:"product-title"},[t._v(t._s(e.title))])])}),0)])})],2):t._e()]})],2)])])],1),a("tabbar")],1)},c=[],i=(a("57e7"),a("905f")),r={components:{ListScroll:i["default"]},name:"",data:function(){return{tags:[],currentIndex:0,categoryData:[],templateCategoryData:[]}},created:function(){var t=this;this.$http.get("http://test.happymmall.com/category/categoryData").then(function(e){var a=e.data.categoryData;t.categoryData=a})},methods:{handleSplit:function(t){if(~t.indexOf("、")){var e=t;return e.slice(0,2)+t.slice(3)}return t},getGoodsList:function(){var t=this;this.$http.get("/api/goods/category").then(function(e){var a=e.data.content;t.categoryData=a})},handleSearch:function(){this.$router.push("/search")},selectMenu:function(t){this.currentIndex=t},setSearchWrapHeight:function(){var t=document.documentElement.clientHeight;this.$refs.searchWrap.style.height=t-100+"px"},selectProduct:function(t){this.$router.push({path:"/classify/recommend",query:{sku:t}})}},mounted:function(){this.setSearchWrapHeight(),this.$eventBus.$emit("changeTag",1)}},n=r,l=(a("b1da"),a("2877")),o=Object(l["a"])(n,s,c,!1,null,"2888f81c",null);e["default"]=o.exports},b1da:function(t,e,a){"use strict";var s=a("1119"),c=a.n(s);c.a}}]);
//# sourceMappingURL=chunk-23effebc.9b34414e.js.map