(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[8],{118:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(4),c=r.n(o),s=r(121),i=r(117),l=r(14),p=(r(122),r(123),r(124),r(119),function(){return(p=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}),d=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};t.a=function(e){var t=e.children,r=e.title,o=e.className,m=e.code,u=d(e,["children","title","className","code"]),f=Object(a.useState)(!1),b=f[0],g=f[1];return n.a.createElement("div",p({className:c()("code-card",o)},u),n.a.createElement("h1",null,r),n.a.createElement("div",{className:"code-card_demo"},t),n.a.createElement(l.n,{className:"icon-code-toggle",type:"code",onClick:function(){return g(!b)}}),n.a.createElement(i.a,{in:b,timeout:300,classNames:"code",unmountOnExit:!0},n.a.createElement(s.UnControlled,{className:"code-mirror_container",value:m,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(e,t,r){console.log(r)}})))}},119:function(e,t,r){var a=r(7),n=r(120);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};a(n,o);e.exports=n.locals||{}},120:function(e,t,r){(t=r(8)(!1)).push([e.i,"[class^=f-]{box-sizing:border-box}[class^=f-]::before{box-sizing:border-box}[class^=f-]::after{box-sizing:border-box}.code-card{width:80%;border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container .CodeMirror{z-index:0;height:auto}.code-enter{opacity:0;transform:scaleY(0);transform-origin:top left}.code-enter-active{opacity:1;transform:scaleY(1);transition:opacity 300ms, transform 300ms}.code-exit{opacity:1}.code-exit-active{opacity:0;transform:scaleY(0.9);transform-origin:top left;transition:opacity 300ms, transform 300ms}\n",""]),e.exports=t},21:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(118),c=r(14);t.default=function(){var e=Object(a.useState)([{label:"username",name:"username",type:"text",value:"",rules:[{isRequired:!0,message:"必填项"},{minlength:10,message:"长度不得小于10"},{maxlength:20,message:"长度不得大于20"}]},{label:"password",name:"password",type:"password",value:"",rules:[{isRequired:!0,message:"必填项"},{minlength:10,message:"长度不得小于10"},{maxlength:20,message:"长度不得大于20"}]}]),t=e[0],r=e[1],s=Object(a.useState)(null),i=s[0],l=s[1];return n.a.createElement("div",null,n.a.createElement(o.a,{title:"基础用法"},n.a.createElement(c.l,{data:t,errors:i,onChange:function(e){return r(e)},buttons:[n.a.createElement(c.f,{type:"primary",onClick:function(){var e=Object(c.s)(t);l(e),e||console.log("校验通过")}},"Submit")]})))}}}]);