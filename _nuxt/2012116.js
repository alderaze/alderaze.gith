(window.webpackJsonp=window.webpackJsonp||[]).push([[17,14],{498:function(t,e,r){"use strict";r.r(e);var l={props:["info"],data:function(){return{dialog:!1}},methods:{dilo:function(){return this.dialog=!0}}},n=r(26),o=r(35),c=r.n(o),v=r(546),d=r(293),f=r(196),m=r(50),_=r(488),h=r(496),x=r(489),w=r(490),y=r(545),C=r(491),O=r(477),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;var r=e.attrs;return[t._t("default",null,{close:t.dilo},r)]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",[r("span",{staticClass:"headline"},[t._v("User Profile")])]),t._v(" "),r("v-card-text",[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Legal first name*",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Legal middle name",hint:"example of helper text only on focus"}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-text-field",{attrs:{label:"Legal last name*",hint:"example of persistent helper text","persistent-hint":"",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Email*",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{label:"Password*",type:"password",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-select",{attrs:{items:["0-17","18-29","30-54","54+"],label:"Age*",required:""}})],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-autocomplete",{attrs:{items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"],label:"Interests",multiple:""}})],1)],1)],1),t._v(" "),r("small",[t._v("*indicates required field")])],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Close\n        ")]),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAutocomplete:v.a,VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCol:_.a,VContainer:h.a,VDialog:x.a,VRow:w.a,VSelect:y.a,VSpacer:C.a,VTextField:O.a})},501:function(t,e,r){t.exports=r.p+"img/pug.e22b8f0.svg"},511:function(t,e,r){"use strict";r.r(e);var l=r(0),n=r(498),o=r(21);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"appMyhtml",computed:v(v({},Object(o.b)("sklis",["html","admin"])),Object(o.b)(["colortext","maincolor"])),components:{appDilo:n.default}},f=r(26),m=r(35),_=r.n(m),h=r(293),x=r(196),w=r(50),y=r(189),C=r(162),O=r(197),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-card",{attrs:{flat:"",color:"transparent"}},[l("v-card-title",{staticClass:"display-1 font-weight-bold"},[t._v(" html")]),t._v(" "),t._l(t.html,(function(i){return l("v-card",{key:i.id,staticClass:"mt-8",attrs:{flat:"",color:"transparent"}},[l("v-icon",{class:t.colortext,attrs:{size:"30"}},[t._v(t._s(i.icon))]),t._v(" "),l("v-card-title",{staticClass:"d-inline"},[t._v(" "+t._s(i.name))]),t._v(" "),l("v-progress-linear",{staticClass:"mt-3",attrs:{value:i.val,height:"20",striped:"",color:"deep-orange"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.value;return[l("strong",{staticClass:"white--text"},[t._v(t._s(Math.ceil(r))+"%")])]}}],null,!0)})],1)})),t._v(" "),l("v-card",{staticClass:"mt-8",attrs:{flat:"",color:"transparent"}},[l("div",{staticClass:"d-flex"},[l("v-img",{attrs:{"max-width":"30","max-height":"30"}},[l("img",{attrs:{width:"100%",height:"100%",src:r(501),alt:"svg"}})]),t._v(" "),l("v-card-title",{staticClass:"pa-0 pl-4 ma-0"},[t._v("template engine pugJS ")])],1),t._v(" "),l("v-progress-linear",{staticClass:"mt-3",attrs:{value:"50",height:"20",striped:"",color:"deep-orange"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.value;return[l("strong",{staticClass:"white--text"},[t._v(t._s(Math.ceil(r))+"%")])]}}])})],1),t._v(" "),l("appDilo",{attrs:{info:t.html},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.close;return[t.admin?l("v-btn",{staticClass:"mt-5",attrs:{fab:"",dark:"",small:"",color:t.maincolor},on:{click:r}},[l("v-icon",{attrs:{dark:""}},[t._v("\n               mdi-plus\n           ")])],1):t._e()]}}])})],2)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:h.a,VCard:x.a,VCardTitle:w.c,VIcon:y.a,VImg:C.a,VProgressLinear:O.a})}}]);