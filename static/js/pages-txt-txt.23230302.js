(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-txt-txt"],{"0885":function(t,n,e){var i=e("7371");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("23f11a54",i,!0,{sourceMap:!1,shadowMode:!1})},"09df":function(t,n,e){"use strict";e.r(n);var i=e("b0ce"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"17c7":function(t,n,e){"use strict";e.r(n);var i=e("3572"),a=e("09df");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("b543");var r,o=e("f0c5"),l=e("c953"),c=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"a093f414",null,!1,i["a"],r);"function"===typeof l["a"]&&Object(l["a"])(c),n["default"]=c.exports},"181e":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={props:{content:String,copyLink:{type:Boolean,default:uni.$u.props.parse.copyLink},domain:String,errorImg:{type:String,default:uni.$u.props.parse.errorImg},lazyLoad:{type:Boolean,default:uni.$u.props.parse.lazyLoad},loadingImg:{type:String,default:uni.$u.props.parse.loadingImg},pauseVideo:{type:Boolean,default:uni.$u.props.parse.pauseVideo},previewImg:{type:Boolean,default:uni.$u.props.parse.previewImg},scrollTable:Boolean,selectable:Boolean,setTitle:{type:Boolean,default:uni.$u.props.parse.setTitle},showImgMenu:{type:Boolean,default:uni.$u.props.parse.showImgMenu},tagStyle:Object,useAnchor:null}};n.default=i},"1c54":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{class:(t.selectable?"_select ":"")+"_root",attrs:{id:"_root"}},[t.nodes[0]?e("node",{attrs:{childs:t.nodes,opts:[t.lazyLoad,t.loadingImg,t.errorImg,t.showImgMenu]}}):t._t("default")],2)},s=[]},"1d05":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={components:{},data:function(){return{txt:"",txtConfirm:"",isMobile:!1,style:{a:"display:flex;color:#ffae4d;padding:16rpx;margin:0rpx;"}}},onLoad:function(t){this.isMobile=getApp().isMobile;var n=uni.getStorageSync("txtPageTxt");n&&(this.txtConfirm=n)},methods:{txtnput:function(t){this.txt=t.detail.value},txtConfirmClick:function(){this.txtConfirm='<view style="display:flex;flex-direction:row;flex-wrap:wrap;">'+this.txt+"</view>",uni.setStorageSync("txtPageTxt",this.txtConfirm)}}};n.default=i},"30d2":function(t,n,e){"use strict";var i=e("4ea4");e("99af"),e("d3b7"),e("e25e"),e("ac1f"),e("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("181e")),s=i(e("17c7")),r=[],o=e("9c56"),l={name:"mp-html",data:function(){return{nodes:[]}},mixins:[a.default],components:{node:s.default},watch:{content:function(t){this.setContent(t)}},created:function(){this.plugins=[];for(var t=r.length;t--;)this.plugins.push(new r[t](this))},mounted:function(){this.content&&!this.nodes.length&&this.setContent(this.content)},beforeDestroy:function(){this._hook("onDetached"),clearInterval(this._timer)},methods:{in:function(t,n,e){t&&n&&e&&(this._in={page:t,selector:n,scrollTop:e})},navigateTo:function(t,n){var e=this;return new Promise((function(i,a){if(!e.useAnchor)return a("Anchor is disabled");n=n||parseInt(e.useAnchor)||0;var s=" ",r=uni.createSelectorQuery().in(e._in?e._in.page:e).select((e._in?e._in.selector:"._root")+(t?"".concat(s,"#").concat(t):"")).boundingClientRect();e._in?r.select(e._in.selector).scrollOffset().select(e._in.selector).boundingClientRect():r.selectViewport().scrollOffset(),r.exec((function(t){if(!t[0])return a("Label not found");var s=t[1].scrollTop+t[0].top-(t[2]?t[2].top:0)+n;e._in?e._in.page[e._in.scrollTop]=s:uni.pageScrollTo({scrollTop:s,duration:300}),i()}))}))},getText:function(){var t="";return function n(e){for(var i=0;i<e.length;i++){var a=e[i];if("text"==a.type)t+=a.text.replace(/&amp;/g,"&");else if("br"==a.name)t+="\n";else{var s="p"==a.name||"div"==a.name||"tr"==a.name||"li"==a.name||"h"==a.name[0]&&a.name[1]>"0"&&a.name[1]<"7";s&&t&&"\n"!=t[t.length-1]&&(t+="\n"),a.children&&n(a.children),s&&"\n"!=t[t.length-1]?t+="\n":"td"!=a.name&&"th"!=a.name||(t+="\t")}}}(this.nodes),t},getRect:function(){var t=this;return new Promise((function(n,e){uni.createSelectorQuery().in(t).select("#_root").boundingClientRect().exec((function(t){return t[0]?n(t[0]):e("Root label not found")}))}))},setContent:function(t,n){var e=this;n&&this.imgList||(this.imgList=[]);var i,a=new o(this).parse(t);this.$set(this,"nodes",n?(this.nodes||[]).concat(a):a),this._videos=[],this.$nextTick((function(){e._hook("onLoad"),e.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){e.getRect().then((function(t){t.height==i&&(e.$emit("ready",t),clearInterval(e._timer)),i=t.height})).catch((function(){}))}),350)},_hook:function(t){for(var n=r.length;n--;)this.plugins[n][t]&&this.plugins[n][t]()}}};n.default=l},3572:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{class:"_"+t.name+" "+t.attrs.class,style:t.attrs.style,attrs:{id:t.attrs.id}},[t._l(t.childs,(function(n,i){return["img"==n.name&&(t.opts[1]&&!t.ctrl[i]||t.ctrl[i]<0)?e("v-uni-image",{key:i+"_0",staticClass:"_img",style:n.attrs.style,attrs:{src:t.ctrl[i]<0?t.opts[2]:t.opts[1],mode:"widthFix"}}):t._e(),"img"==n.name?e("img",{key:i+"_1",class:"_img "+n.attrs.class,style:(-1==t.ctrl[i]?"display:none;":"")+n.attrs.style,attrs:{id:n.attrs.id,src:n.attrs.src||(t.ctrl.load?n.attrs["data-src"]:""),"data-i":i},on:{load:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLoad.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)},longpress:function(n){arguments[0]=n=t.$handleEvent(n),t.imgLongTap.apply(void 0,arguments)},click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.imgTap.apply(void 0,arguments)}}}):"text"==n.type?e("v-uni-text",{attrs:{decode:!0}},[t._v(t._s(n.text))]):"br"==n.name?e("v-uni-text",[t._v("\\n")]):"a"==n.name?e("v-uni-view",{class:(n.attrs.href?"_a ":"")+n.attrs.class,style:"display:inline;"+n.attrs.style,attrs:{id:n.attrs.id,"hover-class":"_hover","data-i":i},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.linkTap.apply(void 0,arguments)}}},[e("node",{staticStyle:{display:"inherit"},attrs:{name:"span",childs:n.children,opts:t.opts}})],1):"video"==n.name?e("v-uni-video",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,autoplay:n.attrs.autoplay,controls:n.attrs.controls,loop:n.attrs.loop,muted:n.attrs.muted,poster:n.attrs.poster,src:n.src[t.ctrl[i]||0],"data-i":i},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"iframe"==n.name?e("iframe",{style:n.attrs.style,attrs:{allowfullscreen:n.attrs.allowfullscreen,frameborder:n.attrs.frameborder,src:n.attrs.src}}):"embed"==n.name?e("embed",{style:n.attrs.style,attrs:{src:n.attrs.src}}):"audio"==n.name?e("v-uni-audio",{class:n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id,author:n.attrs.author,controls:n.attrs.controls,loop:n.attrs.loop,name:n.attrs.name,poster:n.attrs.poster,src:n.src[t.ctrl[i]||0],"data-i":i},on:{play:function(n){arguments[0]=n=t.$handleEvent(n),t.play.apply(void 0,arguments)},error:function(n){arguments[0]=n=t.$handleEvent(n),t.mediaError.apply(void 0,arguments)}}}):"table"==n.name&&n.c||"li"==n.name?e("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style,attrs:{id:n.attrs.id}},["li"==n.name?e("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,i){return e("v-uni-view",{key:i,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},["td"==n.name||"th"==n.name?e("node",{attrs:{childs:n.children,opts:t.opts}}):t._l(n.children,(function(n,i){return["td"==n.name||"th"==n.name?e("v-uni-view",{key:i+"_0",class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[e("node",{attrs:{childs:n.children,opts:t.opts}})],1):e("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},t._l(n.children,(function(n,i){return e("v-uni-view",{key:i,class:"_"+n.name+" "+n.attrs.class,style:n.attrs.style},[e("node",{attrs:{childs:n.children,opts:t.opts}})],1)})),1)]}))],2)}))],2):t.handler.use(n)?e("v-uni-rich-text",{style:n.f,attrs:{id:n.attrs.id,nodes:[n]}}):2==n.c?e("v-uni-view",{class:"_"+n.name+" "+n.attrs.class,style:n.f+";"+n.attrs.style,attrs:{id:n.attrs.id}},t._l(n.children,(function(n,i){return e("node",{key:i,style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})})),1):e("node",{style:n.f,attrs:{name:n.name,attrs:n.attrs,childs:n.children,opts:t.opts}})]}))],2)},s=[]},"4b44":function(t,n,e){"use strict";var i=e("67b8"),a=e.n(i);a.a},"4bee":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"uni-page-body[data-v-7155a488]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:#232734;width:100vw;color:#fff}.content[data-v-7155a488]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?20?%}.options-bg[data-v-7155a488]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin:%?30?%;width:100%}.options-bg .query-btn[data-v-7155a488]{width:%?120?%;height:%?68?%;color:#fff;text-align:center;line-height:%?68?%;background-color:#4c72a5;-webkit-border-radius:28px;border-radius:28px;border:none}.text-area[data-v-7155a488]{display:-webkit-box;display:-webkit-flex;display:flex;width:60%;height:%?68?%;background-color:#172233;-webkit-border-radius:%?34?%;border-radius:%?34?%;padding-left:%?20?%;padding-right:%?20?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;margin-right:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#dedfe0}.text-area .input[data-v-7155a488]{-webkit-box-flex:1;-webkit-flex:1;flex:1}body.?%PAGE?%[data-v-7155a488]{background-color:#232734}",""]),t.exports=n},"5a2c":function(t,n,e){"use strict";e.r(n);var i=e("1d05"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"67b8":function(t,n,e){var i=e("4bee");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("7df9d4a3",i,!0,{sourceMap:!1,shadowMode:!1})},6800:function(t,n,e){"use strict";e.r(n);var i=e("30d2"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},7371:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* a 标签默认效果 */._a[data-v-a093f414]{padding:1.5px 0 1.5px 0;color:#366092;word-break:break-all}\n/* a 标签点击态效果 */._hover[data-v-a093f414]{text-decoration:underline;opacity:.7}\n/* 图片默认效果 */._img[data-v-a093f414]{max-width:100%;-webkit-touch-callout:none}\n/* 内部样式 */._b[data-v-a093f414],\n._strong[data-v-a093f414]{font-weight:700}._code[data-v-a093f414]{font-family:monospace}._del[data-v-a093f414]{text-decoration:line-through}._em[data-v-a093f414],\n._i[data-v-a093f414]{font-style:italic}._h1[data-v-a093f414]{font-size:2em}._h2[data-v-a093f414]{font-size:1.5em}._h3[data-v-a093f414]{font-size:1.17em}._h5[data-v-a093f414]{font-size:.83em}._h6[data-v-a093f414]{font-size:.67em}._h1[data-v-a093f414],\n._h2[data-v-a093f414],\n._h3[data-v-a093f414],\n._h4[data-v-a093f414],\n._h5[data-v-a093f414],\n._h6[data-v-a093f414]{display:block;font-weight:700}._image[data-v-a093f414]{height:1px}._ins[data-v-a093f414]{text-decoration:underline}._li[data-v-a093f414]{display:list-item}._ol[data-v-a093f414]{list-style-type:decimal}._ol[data-v-a093f414],\n._ul[data-v-a093f414]{display:block;padding-left:40px;margin:1em 0}._q[data-v-a093f414]::before{content:'\"'}._q[data-v-a093f414]::after{content:'\"'}._sub[data-v-a093f414]{font-size:smaller;vertical-align:sub}._sup[data-v-a093f414]{font-size:smaller;vertical-align:super}._thead[data-v-a093f414],\n._tbody[data-v-a093f414],\n._tfoot[data-v-a093f414]{display:table-row-group}._tr[data-v-a093f414]{display:table-row}._td[data-v-a093f414],\n._th[data-v-a093f414]{display:table-cell;vertical-align:middle}._th[data-v-a093f414]{font-weight:700;text-align:center}._ul[data-v-a093f414]{list-style-type:disc}._ul ._ul[data-v-a093f414]{margin:0;list-style-type:circle}._ul ._ul ._ul[data-v-a093f414]{list-style-type:square}._abbr[data-v-a093f414],\n._b[data-v-a093f414],\n._code[data-v-a093f414],\n._del[data-v-a093f414],\n._em[data-v-a093f414],\n._i[data-v-a093f414],\n._ins[data-v-a093f414],\n._label[data-v-a093f414],\n._q[data-v-a093f414],\n._span[data-v-a093f414],\n._strong[data-v-a093f414],\n._sub[data-v-a093f414],\n._sup[data-v-a093f414]{display:inline}\n\n",""]),t.exports=n},"797a":function(t,n,e){"use strict";e.r(n);var i=e("1c54"),a=e("6800");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("f132");var r,o=e("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"55ff4e76",null,!1,i["a"],r);n["default"]=l.exports},"9c56":function(t,n,e){"use strict";e("99af"),e("caad"),e("c975"),e("a15b"),e("baa5"),e("a434"),e("d3b7"),e("acd8"),e("e25e"),e("ac1f"),e("25f0"),e("2532"),e("5319"),e("1276"),e("498a");var i=e("ded3"),a={trustTags:c("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),blockTags:c("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),ignoreTags:c("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),voidTags:c("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),entities:{lt:"<",gt:">",quot:'"',apos:"'",ensp:" ",emsp:" ",nbsp:" ",semi:";",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},tagStyle:{address:"font-style:italic",big:"display:inline;font-size:1.2em",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}},s=uni.getSystemInfoSync(),r=s.windowWidth,o=c(" ,\r,\n,\t,\f"),l=0;function c(t){for(var n=Object.create(null),e=t.split(","),i=e.length;i--;)n[e[i]]=!0;return n}function d(t,n){var e=t.indexOf("&");while(-1!=e){var i=t.indexOf(";",e+3),s=void 0;if(-1==i)break;"#"==t[e+1]?(s=parseInt(("x"==t[e+2]?"0":"")+t.substring(e+2,i)),isNaN(s)||(t=t.substr(0,e)+String.fromCharCode(s)+t.substr(i+1))):(s=t.substring(e+1,i),(a.entities[s]||"amp"==s&&n)&&(t=t.substr(0,e)+(a.entities[s]||"&")+t.substr(i+1))),e=t.indexOf("&",e+1)}return t}function h(t){this.options=t||{},this.tagStyle=Object.assign(a.tagStyle,this.options.tagStyle),this.imgList=t.imgList||[],this.plugins=t.plugins||[],this.attrs=Object.create(null),this.stack=[],this.nodes=[]}function u(t){this.handler=t}a.ignoreTags.iframe=void 0,a.trustTags.iframe=!0,a.ignoreTags.embed=void 0,a.trustTags.embed=!0,h.prototype.parse=function(t){for(var n=this.plugins.length;n--;)this.plugins[n].onUpdate&&(t=this.plugins[n].onUpdate(t,a)||t);new u(this).parse(t);while(this.stack.length)this.popNode();return this.nodes},h.prototype.expose=function(){for(var t=this.stack.length;t--;){var n=this.stack[t];if("a"==n.name||n.c)return;n.c=1}},h.prototype.hook=function(t){for(var n=this.plugins.length;n--;)if(this.plugins[n].onParse&&0==this.plugins[n].onParse(t,this))return!1;return!0},h.prototype.getUrl=function(t){var n=this.options.domain;return"/"==t[0]?"/"==t[1]?t="".concat(n?n.split("://")[0]:"http",":").concat(t):n&&(t=n+t):!n||t.includes("data:")||t.includes("://")||(t="".concat(n,"/").concat(t)),t},h.prototype.parseStyle=function(t){var n=t.attrs,e=(this.tagStyle[t.name]||"").split(";").concat((n.style||"").split(";")),i={},a="";n.id&&(this.options.useAnchor?this.expose():"img"!=t.name&&"a"!=t.name&&"video"!=t.name&&"audio"!=t.name&&(n.id=void 0)),n.width&&(i.width=parseFloat(n.width)+(n.width.includes("%")?"%":"px"),n.width=void 0),n.height&&(i.height=parseFloat(n.height)+(n.height.includes("%")?"%":"px"),n.height=void 0);for(var s=0,l=e.length;s<l;s++){var c=e[s].split(":");if(!(c.length<2)){var d=c.shift().trim().toLowerCase(),h=c.join(":").trim();if("-"==h[0]&&h.lastIndexOf("-")>0||h.includes("safe"))a+=";".concat(d,":").concat(h);else if(!i[d]||h.includes("import")||!i[d].includes("import")){if(h.includes("url")){var u=h.indexOf("(")+1;if(u){while('"'==h[u]||"'"==h[u]||o[h[u]])u++;h=h.substr(0,u)+this.getUrl(h.substr(u))}}else h.includes("rpx")&&(h=h.replace(/[0-9.]+\s*rpx/g,(function(t){return"".concat(parseFloat(t)*r/750,"px")})));i[d]=h}}}return t.attrs.style=a,i},h.prototype.onTagName=function(t){this.tagName=this.xml?t:t.toLowerCase(),"svg"==this.tagName&&(this.xml=!0)},h.prototype.onAttrName=function(t){t=this.xml?t:t.toLowerCase(),"data-"==t.substr(0,5)?"data-src"!=t||this.attrs.src?"img"==this.tagName||"a"==this.tagName?this.attrName=t:this.attrName=void 0:this.attrName="src":(this.attrName=t,this.attrs[t]="T")},h.prototype.onAttrVal=function(t){var n=this.attrName||"";"style"==n||"href"==n?this.attrs[n]=d(t,!0):n.includes("src")?this.attrs[n]=this.getUrl(d(t,!0)):n&&(this.attrs[n]=t)},h.prototype.onOpenTag=function(t){var n=Object.create(null);n.name=this.tagName,n.attrs=this.attrs,this.attrs=Object.create(null);var e=n.attrs,i=this.stack[this.stack.length-1],s=i?i.children:this.nodes,o=this.xml?t:a.voidTags[n.name];if("embed"==n.name&&this.expose(),"video"!=n.name&&"audio"!=n.name||("video"!=n.name||e.id||(e.id="v".concat(l++)),e.controls||e.autoplay||(e.controls="T"),n.src=[],e.src&&(n.src.push(e.src),e.src=void 0),this.expose()),o){if(!this.hook(n)||a.ignoreTags[n.name])return void("base"!=n.name||this.options.domain?"source"==n.name&&i&&("video"==i.name||"audio"==i.name)&&e.src&&i.src.push(e.src):this.options.domain=e.href);var c=this.parseStyle(n);if("img"==n.name){if(e.src&&(e.src.includes("webp")&&(n.webp="T"),e.src.includes("data:")&&!e["original-src"]&&(e.ignore="T"),!e.ignore||n.webp||e.src.includes("cloud://"))){for(var d=this.stack.length;d--;){var h=this.stack[d];if("a"==h.name){n.a=h.attrs;break}h.c=1}e.i=this.imgList.length.toString();var u=e["original-src"]||e.src;this.imgList.push(u),this.options.lazyLoad&&(e["data-src"]=e.src,e.src=void 0)}"inline"==c.display&&(c.display=""),e.ignore&&(c["max-width"]=c["max-width"]||"100%",e.style+=";-webkit-touch-callout:none"),parseInt(c.width)>r&&(c.height=void 0),c.width&&(c.width.includes("auto")?c.width="":(n.w="T",c.height&&!c.height.includes("auto")&&(n.h="T")))}else if("svg"==n.name)return s.push(n),this.stack.push(n),void this.popNode();for(var f in c)c[f]&&(e.style+=";".concat(f,":").concat(c[f].replace(" !important","")));e.style=e.style.substr(1)||void 0}else("pre"==n.name||(e.style||"").includes("white-space")&&e.style.includes("pre"))&&(this.pre=n.pre=!0),n.children=[],this.stack.push(n);s.push(n)},h.prototype.onCloseTag=function(t){var n;for(t=this.xml?t:t.toLowerCase(),n=this.stack.length;n--;)if(this.stack[n].name==t)break;if(-1!=n)while(this.stack.length>n)this.popNode();else if("p"==t||"br"==t){var e=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;e.push({name:t,attrs:{}})}},h.prototype.popNode=function(){var t=this.stack.pop(),n=t.attrs,e=t.children,s=this.stack[this.stack.length-1],o=s?s.children:this.nodes;if(!this.hook(t)||a.ignoreTags[t.name])return"title"==t.name&&e.length&&"text"==e[0].type&&this.options.setTitle&&uni.setNavigationBarTitle({title:e[0].text}),void o.pop();if(t.pre){t.pre=this.pre=void 0;for(var l=this.stack.length;l--;)this.stack[l].pre&&(this.pre=!0)}var c={};if("svg"==t.name){var d="",h=n,u=h.style;return n.style="",n.xmlns="http://www.w3.org/2000/svg",function t(n){for(var e in d+="<".concat(n.name),n.attrs){var i=n.attrs[e];i&&("viewbox"==e&&(e="viewBox"),d+=" ".concat(e,'="').concat(i,'"'))}if(n.children){d+=">";for(var a=0;a<n.children.length;a++)t(n.children[a]);d+="</".concat(n.name,">")}else d+="/>"}(t),t.name="img",t.attrs={src:"data:image/svg+xml;utf8,".concat(d.replace(/#/g,"%23")),style:u,ignore:"T"},t.children=void 0,void(this.xml=!1)}if(n.align&&("table"==t.name?"center"==n.align?c["margin-inline-start"]=c["margin-inline-end"]="auto":c.float=n.align:c["text-align"]=n.align,n.align=void 0),"font"==t.name&&(n.color&&(c.color=n.color,n.color=void 0),n.face&&(c["font-family"]=n.face,n.face=void 0),n.size)){var f=parseInt(n.size);isNaN(f)||(f<1?f=1:f>7&&(f=7),c["font-size"]=["xx-small","x-small","small","medium","large","x-large","xx-large"][f-1]),n.size=void 0}if((n.class||"").includes("align-center")&&(c["text-align"]="center"),Object.assign(c,this.parseStyle(t)),parseInt(c.width)>r&&(c["max-width"]="100%",c["box-sizing"]="border-box"),a.blockTags[t.name]?t.name="div":a.trustTags[t.name]||this.xml||(t.name="span"),"a"==t.name||"ad"==t.name||"iframe"==t.name)this.expose();else if("ul"!=t.name&&"ol"!=t.name||!t.c){if("table"==t.name){var p=parseFloat(n.cellpadding),v=parseFloat(n.cellspacing),g=parseFloat(n.border);if(t.c&&(isNaN(p)&&(p=2),isNaN(v)&&(v=2)),g&&(n.style+=";border:".concat(g,"px solid gray")),t.flag&&t.c){c.display="grid",v?(c["grid-gap"]="".concat(v,"px"),c.padding="".concat(v,"px")):g&&(n.style+=";border-left:0;border-top:0");var m=[],b=[],y=[],x={};(function t(n){for(var e=0;e<n.length;e++)"tr"==n[e].name?b.push(n[e]):t(n[e].children||[])})(e);for(var w=1;w<=b.length;w++){for(var _=1,k=0;k<b[w-1].children.length;k++,_++){var T=b[w-1].children[k];if("td"==T.name||"th"==T.name){while(x["".concat(w,".").concat(_)])_++;var C=T.attrs.style||"",N=C.indexOf("width")?C.indexOf(";width"):0;if(-1!=N){var O=C.indexOf(";",N+6);-1==O&&(O=C.length),T.attrs.colspan||(m[_]=C.substring(N?N+7:6,O)),C=C.substr(0,N)+C.substr(O)}if(C+=(g?";border:".concat(g,"px solid gray")+(v?"":";border-right:0;border-bottom:0"):"")+(p?";padding:".concat(p,"px"):""),T.attrs.colspan&&(C+=";grid-column-start:".concat(_,";grid-column-end:").concat(_+parseInt(T.attrs.colspan)),T.attrs.rowspan||(C+=";grid-row-start:".concat(w,";grid-row-end:").concat(w+1)),_+=parseInt(T.attrs.colspan)-1),T.attrs.rowspan){C+=";grid-row-start:".concat(w,";grid-row-end:").concat(w+parseInt(T.attrs.rowspan)),T.attrs.colspan||(C+=";grid-column-start:".concat(_,";grid-column-end:").concat(_+1));for(var $=1;$<T.attrs.rowspan;$++)x["".concat(w+$,".").concat(_)]=1}C&&(T.attrs.style=C),y.push(T)}}if(1==w){for(var I="",S=1;S<_;S++)I+="".concat(m[S]?m[S]:"auto"," ");c["grid-template-columns"]=I}}t.children=y}else t.c&&(c.display="table"),isNaN(v)||(c["border-spacing"]="".concat(v,"px")),(g||p)&&function t(n){for(var e=0;e<n.length;e++){var i=n[e];"th"==i.name||"td"==i.name?(g&&(i.attrs.style="border:".concat(g,"px solid gray;").concat(i.attrs.style||"")),p&&(i.attrs.style="padding:".concat(p,"px;").concat(i.attrs.style||""))):i.children&&t(i.children)}}(e);if(this.options.scrollTable&&!(n.style||"").includes("inline")){var L=i({},t);t.name="div",t.attrs={style:"overflow:auto"},t.children=[L],n=L.attrs}}else if("td"!=t.name&&"th"!=t.name||!n.colspan&&!n.rowspan){if("ruby"==t.name){t.name="span";for(var z=0;z<e.length-1;z++)"text"==e[z].type&&"rt"==e[z+1].name&&(e[z]={name:"div",attrs:{style:"display:inline-block"},children:[{name:"div",attrs:{style:"font-size:50%;text-align:start"},children:e[z+1].children},e[z]]},e.splice(z+1,1))}else if(t.c){t.c=2;for(var j=t.children.length;j--;)t.children[j].c&&"table"!=t.children[j].name||(t.c=1)}}else for(var A=this.stack.length;A--;)if("table"==this.stack[A].name){this.stack[A].flag=1;break}}else{var E={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman"};E[n.type]&&(n.style+=";list-style-type:".concat(E[n.type]),n.type=void 0);for(var M=e.length;M--;)"li"==e[M].name&&(e[M].c=1)}if((c.display||"").includes("flex")&&!t.c)for(var q=e.length;q--;){var P=e[q];P.f&&(P.attrs.style=(P.attrs.style||"")+P.f,P.f=void 0)}var V=s&&(s.attrs.style||"").includes("flex")&&!t.c;for(var B in V&&(t.f=";max-width:100%"),c)if(c[B]){var F=";".concat(B,":").concat(c[B].replace(" !important",""));V&&(B.includes("flex")&&"flex-direction"!=B||"align-self"==B||"-"==c[B][0]||"width"==B&&F.includes("%"))?(t.f+=F,"width"==B&&(n.style+=";width:100%")):n.style+=F}n.style=n.style.substr(1)||void 0},h.prototype.onText=function(t){if(!this.pre){for(var n,e="",i=0,a=t.length;i<a;i++)o[t[i]]?(" "!=e[e.length-1]&&(e+=" "),"\n"!=t[i]||n||(n=!0)):e+=t[i];if(" "==e&&n)return;t=e}var s=Object.create(null);if(s.type="text",s.text=d(t),this.hook(s)){var r=this.stack.length?this.stack[this.stack.length-1].children:this.nodes;r.push(s)}},u.prototype.parse=function(t){this.content=t||"",this.i=0,this.start=0,this.state=this.text;for(var n=this.content.length;-1!=this.i&&this.i<n;)this.state()},u.prototype.checkClose=function(t){var n="/"==this.content[this.i];return!!(">"==this.content[this.i]||n&&">"==this.content[this.i+1])&&(t&&this.handler[t](this.content.substring(this.start,this.i)),this.i+=n?2:1,this.start=this.i,this.handler.onOpenTag(n),"script"==this.handler.tagName?(this.i=this.content.indexOf("</",this.i),-1!=this.i&&(this.i+=2,this.start=this.i),this.state=this.endTag):this.state=this.text,!0)},u.prototype.text=function(){if(this.i=this.content.indexOf("<",this.i),-1!=this.i){var t=this.content[this.i+1];if(t>="a"&&t<="z"||t>="A"&&t<="Z")this.start!=this.i&&this.handler.onText(this.content.substring(this.start,this.i)),this.start=++this.i,this.state=this.tagName;else if("/"==t||"!"==t||"?"==t){this.start!=this.i&&this.handler.onText(this.content.substring(this.start,this.i));var n=this.content[this.i+2];if("/"==t&&(n>="a"&&n<="z"||n>="A"&&n<="Z"))return this.i+=2,this.start=this.i,this.state=this.endTag;var e="--\x3e";"!"==t&&"-"==this.content[this.i+2]&&"-"==this.content[this.i+3]||(e=">"),this.i=this.content.indexOf(e,this.i),-1!=this.i&&(this.i+=e.length,this.start=this.i)}else this.i++}else this.start<this.content.length&&this.handler.onText(this.content.substring(this.start,this.content.length))},u.prototype.tagName=function(){if(o[this.content[this.i]]){this.handler.onTagName(this.content.substring(this.start,this.i));while(o[this.content[++this.i]]);this.i<this.content.length&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)}else this.checkClose("onTagName")||this.i++},u.prototype.attrName=function(){var t=this.content[this.i];if(o[t]||"="==t){this.handler.onAttrName(this.content.substring(this.start,this.i));var n="="==t,e=this.content.length;while(++this.i<e)if(t=this.content[this.i],!o[t]){if(this.checkClose())return;if(n)return this.start=this.i,this.state=this.attrVal;if("="!=this.content[this.i])return this.start=this.i,this.state=this.attrName;n=!0}}else this.checkClose("onAttrName")||this.i++},u.prototype.attrVal=function(){var t=this.content[this.i],n=this.content.length;if('"'==t||"'"==t){if(this.start=++this.i,this.i=this.content.indexOf(t,this.i),-1==this.i)return;this.handler.onAttrVal(this.content.substring(this.start,this.i))}else for(;this.i<n;this.i++){if(o[this.content[this.i]]){this.handler.onAttrVal(this.content.substring(this.start,this.i));break}if(this.checkClose("onAttrVal"))return}while(o[this.content[++this.i]]);this.i<n&&!this.checkClose()&&(this.start=this.i,this.state=this.attrName)},u.prototype.endTag=function(){var t=this.content[this.i];if(o[t]||">"==t||"/"==t){if(this.handler.onCloseTag(this.content.substring(this.start,this.i)),">"!=t&&(this.i=this.content.indexOf(">",this.i),-1==this.i))return;this.start=++this.i,this.state=this.text}else this.i++},t.exports=h},b0ce:function(t,n,e){"use strict";var i=e("4ea4");e("caad"),e("e25e"),e("2532"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("17c7")),s={name:"node",data:function(){return{ctrl:{}}},props:{name:String,attrs:{type:Object,default:function(){return{}}},childs:Array,opts:Array},components:{node:a.default},mounted:function(){var t=this;for(this.root=this.$parent;"mp-html"!=this.root.$options.name;this.root=this.root.$parent);if(this.opts[0]){for(var n=this.childs.length;n--;)if("img"==this.childs[n].name)break;-1!=n&&(this.observer=uni.createIntersectionObserver(this).relativeToViewport({top:500,bottom:500}),this.observer.observe("._img",(function(n){n.intersectionRatio&&(t.$set(t.ctrl,"load",1),t.observer.disconnect())})))}},beforeDestroy:function(){this.observer&&this.observer.disconnect()},methods:{play:function(t){if(this.root.pauseVideo){for(var n=!1,e=t.target.id,i=this.root._videos.length;i--;)this.root._videos[i].id==e?n=!0:this.root._videos[i].pause();if(!n){var a=uni.createVideoContext(e,this);a.id=e,this.root._videos.push(a)}}},imgTap:function(t){var n=this.childs[t.currentTarget.dataset.i];if(n.a)return this.linkTap(n.a);n.attrs.ignore||(n.attrs.src=n.attrs.src||n.attrs["data-src"],this.root.$emit("imgtap",n.attrs),this.root.previewImg&&uni.previewImage({current:parseInt(n.attrs.i),urls:this.root.imgList}))},imgLongTap:function(t){},imgLoad:function(t){var n=t.currentTarget.dataset.i;(this.opts[1]&&!this.ctrl[n]||-1==this.ctrl[n])&&this.$set(this.ctrl,n,1)},linkTap:function(t){var n=t.currentTarget?this.childs[t.currentTarget.dataset.i].attrs:t,e=n.href;this.root.$emit("linktap",n),e&&("#"==e[0]?this.root.navigateTo(e.substring(1)).catch((function(){})):e.includes("://")?this.root.copyLink&&window.open(e):uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e,fail:function(){}})}}))},mediaError:function(t){var n=t.currentTarget.dataset.i,e=this.childs[n];if("video"==e.name||"audio"==e.name){var i=(this.ctrl[n]||0)+1;if(i>e.src.length&&(i=0),i<e.src.length)return this.$set(this.ctrl,n,i)}else"img"==e.name&&this.opts[2]&&this.$set(this.ctrl,n,-1);this.root&&this.root.$emit("error",{source:e.name,attrs:e.attrs,errMsg:t.detail.errMsg})}}};n.default=s},b543:function(t,n,e){"use strict";var i=e("0885"),a=e.n(i);a.a},b5ee:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var i={uToast:e("f110").default,uButton:e("a011").default,uParse:e("797a").default},a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content",style:t.isMobile?"width:100%":"width:1280rpx"},[e("u-toast",{ref:"uToast"}),e("v-uni-view",{staticClass:"options-bg"},[e("v-uni-view",{staticClass:"text-area"},[e("v-uni-text",[t._v("输入文本:")]),e("v-uni-input",{staticClass:"input",attrs:{maxlength:"-1",placeholder:"输入文本"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.txtnput.apply(void 0,arguments)},confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.txtConfirmClick.apply(void 0,arguments)}},model:{value:t.txt,callback:function(n){t.txt=n},expression:"txt"}})],1),e("u-button",{staticClass:"query-btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.txtConfirmClick.apply(void 0,arguments)}}},[t._v("确认")])],1),e("v-uni-view",{staticClass:"u-content"},[e("u-parse",{attrs:{content:t.txtConfirm,tagStyle:t.style}})],1)],1)},s=[]},baa5:function(t,n,e){var i=e("23e7"),a=e("e58c");i({target:"Array",proto:!0,forced:a!==[].lastIndexOf},{lastIndexOf:a})},c953:function(t,n,e){"use strict";var i=function(t){(t.options.wxs||(t.options.wxs={}))["handler"]=function(t){var n={abbr:!0,b:!0,big:!0,code:!0,del:!0,em:!0,i:!0,ins:!0,label:!0,q:!0,small:!0,span:!0,strong:!0,sub:!0,sup:!0};return t.exports={use:function(t){return!n[t.name]&&-1==(t.attrs.style||"").indexOf("display:inline")&&!t.c}},t.exports}({exports:{}})};n["a"]=i},e659:function(t,n,e){var i=e("e769");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("7c695da4",i,!0,{sourceMap:!1,shadowMode:!1})},e769:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 根节点样式 */._root[data-v-55ff4e76]{overflow:auto;-webkit-overflow-scrolling:touch}\n/* 长按复制 */._select[data-v-55ff4e76]{-webkit-user-select:text;user-select:text}\n",""]),t.exports=n},f132:function(t,n,e){"use strict";var i=e("e659"),a=e.n(i);a.a},f843:function(t,n,e){"use strict";e.r(n);var i=e("b5ee"),a=e("5a2c");for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("4b44");var r,o=e("f0c5"),l=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"7155a488",null,!1,i["a"],r);n["default"]=l.exports}}]);