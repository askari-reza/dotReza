(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(t,e,n){"use strict";n.r(e);var r=n(20),o=(n(81),n(56)),c={name:"AppNav",props:{horizontal:{type:Boolean,required:!1,default:!1},flat:{type:Boolean,required:!1,default:!1},dense:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:""},icon:{type:Boolean,required:!1,default:!0}},data:function(){return{nav:[],icons:{mdiHome:o.f,mdiCardAccountDetails:o.b,mdiEmail:o.d,mdiXml:o.t}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.$content("app/nav").fetch();case 2:content=e.sent,t.nav=content.nav;case 4:case"end":return e.stop()}}),e)})))()},methods:{}},l=(n(400),n(37)),d=n(33),f=n.n(d),v=n(207),m=n(208),h=n(133),_=n(76),x=n(119),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-list",{class:{"d-flex":t.horizontal},attrs:{flat:t.flat,dense:t.dense,color:t.color,nav:""}},t._l(t.nav,(function(e){return n("v-list-item",{key:e.title,attrs:{nuxt:"",to:e.link}},[t.icon?n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(t.icons[e.icon])}})],1):t._e(),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-capitalize",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)}),[],!1,null,"95891328",null);e.default=component.exports;f()(component,{VIcon:v.a,VList:m.a,VListItem:h.a,VListItemContent:_.a,VListItemIcon:x.a,VListItemTitle:_.b})},214:function(t,e,n){"use strict";e.a=function(t){var e=t.$axios,n=t.store;t.req;e.onRequest((function(t){n.dispatch("setLoading",!0),t.withCredentials=!0,t.headers.Authorization="Bearer ".concat(n.getters["auth/userToken"])})),e.onResponse((function(t){200===t.status&&n.dispatch("setLoading",!1)}))}},218:function(t,e,n){"use strict";n.r(e);var r=n(20),o=(n(81),n(3),n(8),n(56)),c={name:"AppSocials",props:{horizontal:{type:Boolean,required:!1,default:!1},shaped:{type:Boolean,required:!1,default:!0}},data:function(){return{icons:{mdiLinkedin:o.l,mdiInstagram:o.g,mdiGithub:o.e,mdiTwitter:o.q},contact:{},ripple:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nuxt.context.$content("app/contact-info").only(["instagram","linkedin","github","twitter"]).fetch();case 2:content=e.sent,["extension","path"].forEach((function(t){return delete content[t]})),t.contact=content;case 6:case"end":return e.stop()}}),e)})))()}},l=(n(392),n(37)),d=n(33),f=n.n(d),v=n(207),m=n(208),h=n(133),_=n(119),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{class:{"d-flex":t.horizontal},attrs:{dense:"",shaped:t.shaped,color:"transparent",width:"auto"}},t._l(t.contact,(function(e){return n("v-list-item",{key:e.title,attrs:{ripple:t.ripple,href:e.link,target:"_blank"}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(t.icons[e.icon])}})],1)],1)})),1)}),[],!1,null,"35501999",null);e.default=component.exports;f()(component,{VIcon:v.a,VList:m.a,VListItem:h.a,VListItemIcon:_.a})},257:function(t,e,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("6570a8f6",content,!0,{sourceMap:!1})},281:function(t,e,n){var content=n(393);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("28642f76",content,!0,{sourceMap:!1})},282:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("53460725",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";var r={data:function(){return{}},head:function(){return{htmlAttrs:{lang:"fa",dir:"rtl"},meta:[{hid:"blog",name:"description",content:"Home page description"}]}}},o=n(37),c=n(33),l=n.n(c),d=n(455),f=n(464),v=n(459),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-container",[n("the-blog-header"),t._v(" "),n("v-main",[n("nuxt")],1)],1),t._v(" "),n("the-blog-footer")],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{TheBlogHeader:n(448).default,TheBlogFooter:n(449).default}),l()(component,{VApp:d.a,VContainer:f.a,VMain:v.a})},309:function(t,e,n){"use strict";var r=n(56),o={components:{AppNav:n(132).default},data:function(){return{mdiMenu:r.m,mdiClose:r.c,mdiThemeLightDark:r.p,drawer:!1,title:"dotReza"}},computed:{isMobile:function(){return this.$vuetify.breakpoint.mobile}}},c=n(37),l=n(33),d=n.n(l),f=n(455),v=n(463),m=n(460),h=n(217),_=n(464),x=n(207),w=n(459),y=n(462),C=n(461),V=n(173),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{attrs:{app:"","clipped-right":"","elevate-on-scroll":""}},[n("v-toolbar-title",{staticClass:"primary--text"},[t._v(t._s(t.title))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[n("v-icon",[t._v(t._s(t.mdiThemeLightDark))])],1),t._v(" "),n("v-app-bar-nav-icon",{staticClass:"primary--text",on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v(" "+t._s(t.drawer?t.mdiClose:t.mdiMenu))])],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{app:"",right:"",clipped:"","disable-route-watcher":"","disable-resize-watcher":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("app-nav")],1),t._v(" "),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("nuxt")],1)],1),t._v(" "),n("the-footer")],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{AppNav:n(132).default,TheFooter:n(450).default}),d()(component,{VApp:f.a,VAppBar:v.a,VAppBarNavIcon:m.a,VBtn:h.a,VContainer:_.a,VIcon:x.a,VMain:w.a,VNavigationDrawer:y.a,VSpacer:C.a,VToolbarTitle:V.a})},313:function(t,e,n){n(314),t.exports=n(315)},344:function(t,e,n){"use strict";n(257)},345:function(t,e,n){var r=n(18)(!1);r.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=r},350:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("3749275e",content,!0,{sourceMap:!1})},351:function(t,e,n){var r=n(18)(!1);r.push([t.i,".position-relative{position:relative}.centered-y{position:absolute;top:50%;transform:translateY(-50%)}.font-style-normal{font-style:normal}",""]),t.exports=r},392:function(t,e,n){"use strict";n(281)},393:function(t,e,n){var r=n(18)(!1);r.push([t.i,".d-flex .v-list-item__icon[data-v-35501999]:first-child{margin-right:0}",""]),t.exports=r},400:function(t,e,n){"use strict";n(282)},401:function(t,e,n){var r=n(18)(!1);r.push([t.i,".v-list.d-flex .v-list-item[data-v-95891328]{margin-bottom:0}",""]),t.exports=r},423:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return d}));var r=n(20),o=(n(81),function(){return{errorMessage:void 0,successMessage:null,snackbar:!1,loading:!1}}),c={errorMessage:function(t){return t.errorMessage},successMessage:function(t){return t.successMessage},snackbar:function(t){return t.snackbar},loading:function(t){return t.loading}},l={setLoading:function(t,e){t.loading=e},setErrorMessage:function(t,e){t.errorMessage=e},setSuccessMessage:function(t,e){t.successMessage=e},setSnackbar:function(t,e){t.snackbar=e}},d={nuxtServerInit:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.$content;case 1:case"end":return t.stop()}}),t)})))()},setLoading:function(t,e){(0,t.commit)("setLoading",e)},setErrorMessage:function(t,e){var n=t.commit;e&&(n("setErrorMessage",e),n("setSnackbar",!0))},setSuccessMessage:function(t,e){var n=t.commit;e&&(n("setSuccessMessage",e),n("setSnackbar",!0))},setSnackbar:function(t,e){(0,t.commit)("setSnackbar",e)},clearMessages:function(t){var e=t.commit;e("setErrorMessage",void 0),e("setSuccessMessage",void 0)}}},448:function(t,e,n){"use strict";n.r(e);var r={},o=n(37),c=n(33),l=n.n(c),d=n(463),f=n(217),v=n(456),m=n(173),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{color:"transparent","extension-height":"30",flat:"",tile:""},scopedSlots:t._u([{key:"extension",fn:function(){return[t._v(" 1 2 3 ")]},proxy:!0}])},[n("v-row",{attrs:{justify:"space-between"}},[n("v-toolbar-title",[t._v("لوگو")]),t._v(" "),n("div",{},[t._v("\n      درباره رضا\n      "),n("v-btn",[t._v("CTA")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:d.a,VBtn:f.a,VRow:v.a,VToolbarTitle:m.a})},449:function(t,e,n){"use strict";n.r(e);var r={name:"TheFooter",computed:{currentYear:function(){return(new Date).getFullYear()}}},o=n(37),c=n(33),l=n.n(c),d=n(217),f=n(209),v=n(48),m=n(457),h=n(464),_=n(458),x=n(456),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"d-block",attrs:{padless:"",inset:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",{staticClass:"text-center"},[t._v(" stay conected ")]),t._v(" "),n("v-card-text",[n("address",{staticClass:"d-flex flex-column"},[n("v-btn",{staticClass:"headline font-style-normal",attrs:{text:"",href:"mailto:"}},[t._v("mail@dotreza.com")]),t._v(" "),n("v-btn",{staticClass:"subtitle-1 font-style-normal",attrs:{text:"",href:"wa.me/"}},[t._v("0099")])],1)]),t._v(" "),n("v-card-actions",{staticClass:"d-flex flex-row justify-center"},[n("app-socials",{attrs:{horizontal:"",shaped:!1}})],1)],1),t._v(" "),n("h5",{staticClass:"headline text-center"})],1)],1),t._v(" "),n("v-container",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex flex-row justify-start align-center"},[n("nuxt-link",{staticClass:"text-decoration-none text--primary",attrs:{to:"/"}},[t._v("dotReza")])],1),t._v(" "),n("v-col",{staticClass:"d-flex flex-row justify-center align-center"},[n("app-nav",{attrs:{horizontal:"",color:"transparent",icon:!1}})],1),t._v(" "),n("v-col",{staticClass:"\n          d-flex\n          flex-row\n          justify-end\n          align-center\n          text-uppercase text--primary\n        "},[t._v("\n        © "+t._s(t.currentYear)+" all rights reserved\n      ")])],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",[t._v("color 1")]),t._v(" "),n("v-col",[t._v("color 2")]),t._v(" "),n("v-col",[t._v("color 3")]),t._v(" "),n("v-col",[t._v("color 4")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{AppSocials:n(218).default,AppNav:n(132).default}),l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:m.a,VContainer:h.a,VFooter:_.a,VRow:x.a})},450:function(t,e,n){"use strict";n.r(e);var r={name:"TheFooter",computed:{currentYear:function(){return(new Date).getFullYear()}}},o=n(37),c=n(33),l=n.n(c),d=n(217),f=n(209),v=n(48),m=n(457),h=n(464),_=n(458),x=n(456),w=n(60),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"d-block",attrs:{padless:"",inset:""}},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-card",{attrs:{flat:"",color:"transparent"}},[n("v-card-title",{staticClass:"justify-center"},[t._v(" stay conected ")]),t._v(" "),n("v-card-text",[n("address",{staticClass:"d-flex flex-column"},[n("v-btn",{staticClass:"headline font-style-normal",attrs:{text:"",href:"mailto:"}},[t._v("mail@dotreza.com")]),t._v(" "),n("v-btn",{staticClass:"subtitle-1 font-style-normal",attrs:{text:"",href:"wa.me/"}},[t._v("0099")])],1)]),t._v(" "),n("v-card-actions",{staticClass:"d-flex flex-row justify-center"},[n("app-socials",{attrs:{horizontal:"",shaped:!1}})],1)],1),t._v(" "),n("h5",{staticClass:"headline text-center"})],1)],1),t._v(" "),n("v-container",[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"d-flex flex-row justify-start align-center"},[n("nuxt-link",{staticClass:"text-decoration-none text--primary",attrs:{to:"/"}},[t._v("dotReza")])],1),t._v(" "),n("v-col",{staticClass:"d-flex flex-row justify-center align-center"},[n("app-nav",{attrs:{horizontal:"",color:"transparent",icon:!1}})],1),t._v(" "),n("v-col",{staticClass:"\n          d-flex\n          flex-column\n          align-end\n          justify-center\n          text-uppercase text--primary\n        "},[t._v("\n        © "+t._s(t.currentYear)+" all rights reserved\n\n        "),n("span",{staticClass:"text-lowercase subtitle-2"},[t._v("all illustrations from\n          "),n("a",{attrs:{href:"https://undraw.co",target:"_blank"}},[t._v("unDraw")])])])],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"primary"},[n("v-sheet",{attrs:{color:"primary",height:"20",width:"100%"}})],1),t._v(" "),n("v-col",{staticClass:"secondary"},[n("v-sheet",{attrs:{color:"secondary",height:"20",width:"100%"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{AppSocials:n(218).default,AppNav:n(132).default}),l()(component,{VBtn:d.a,VCard:f.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VCol:m.a,VContainer:h.a,VFooter:_.a,VRow:x.a,VSheet:w.a})},97:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(344),n(37)),c=n(33),l=n.n(c),d=n(455),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[313,16,2,17]]]);