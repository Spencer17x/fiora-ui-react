(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[11],{127:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(2),o=a.n(c),i=a(130),l=a(126),u=a(14),m=(a(131),a(132),a(133),a(128),function(){return(m=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}),s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};t.a=function(e){var t=e.children,a=e.title,c=e.className,p=e.code,y=s(e,["children","title","className","code"]),d=Object(r.useState)(!1),E=d[0],b=d[1];return n.a.createElement("div",m({className:o()("code-card",c)},y),n.a.createElement("h1",null,a),n.a.createElement("div",{className:"code-card_demo"},t),n.a.createElement(u.m,{className:"icon-code-toggle",type:"code",onClick:function(){return b(!E)}}),n.a.createElement(l.a,{in:E,timeout:300,classNames:"code",unmountOnExit:!0},n.a.createElement(i.UnControlled,{className:"code-mirror_container",value:p,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(e,t,a){console.log(a)}})))}},128:function(e,t,a){var r=a(7),n=a(129);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var c={insert:"head",singleton:!1};r(n,c);e.exports=n.locals||{}},129:function(e,t,a){(t=a(8)(!1)).push([e.i,"[class^=f-]{box-sizing:border-box}[class^=f-]::before{box-sizing:border-box}[class^=f-]::after{box-sizing:border-box}.code-card{border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container .CodeMirror{z-index:0;height:auto}.code-enter{opacity:0;transform:scaleY(0);transform-origin:top left}.code-enter-active{opacity:1;transform:scaleY(1);transition:opacity 300ms, transform 300ms}.code-exit{opacity:1}.code-exit-active{opacity:0;transform:scaleY(0.9);transform-origin:top left;transition:opacity 300ms, transform 300ms}\n",""]),e.exports=t},25:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(127),o=a(14);t.default=function(){var e=Object(r.useState)("nav1"),t=e[0],a=e[1],i=Object(r.useState)("sub1"),l=i[0],u=i[1],m=Object(r.useState)("sub1"),s=m[0],p=m[1];return n.a.createElement("div",null,n.a.createElement(c.a,{title:"基本用法",style:{marginBottom:20}},n.a.createElement(o.p,{selectedKey:t,onClick:a},n.a.createElement(o.q,{curKey:"nav1"},"Navigation One"),n.a.createElement(o.q,{disabled:!0,curKey:"nav2"},"Navigation Two"),n.a.createElement(o.u,{title:"Navigation Three - Submenu",curKey:"nav3"},n.a.createElement(o.r,{title:"Item 1"},n.a.createElement(o.q,{curKey:"nav3-option1"},"Option 1"),n.a.createElement(o.q,{curKey:"nav3-option2"},"Option 2")),n.a.createElement(o.r,{title:"Item 2"},n.a.createElement(o.q,{curKey:"nav3-option3"},"Option 3"),n.a.createElement(o.q,{curKey:"nav3-option4"},"Option 4"))),n.a.createElement(o.q,{curKey:"nav4"},n.a.createElement("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer"},"Navigation Four - Link")))),n.a.createElement(c.a,{title:"layout",style:{marginBottom:20}},n.a.createElement(o.p,{layout:"inline",style:{width:"256px",borderRight:"1px solid #ccc"},selectedKey:l,onClick:u},n.a.createElement(o.u,{curKey:"sub1",title:"Navigation One"},n.a.createElement(o.r,{curKey:"g1",title:"Item 1"},n.a.createElement(o.q,{curKey:"1"},"Option 1"),n.a.createElement(o.q,{curKey:"2"},"Option 2")),n.a.createElement(o.r,{curKey:"g2",title:"Item 2"},n.a.createElement(o.q,{curKey:"3"},"Option 3"),n.a.createElement(o.q,{curKey:"4"},"Option 4"))),n.a.createElement(o.u,{curKey:"sub2",title:"Navigation Two"},n.a.createElement(o.q,{curKey:"5"},"Option 5"),n.a.createElement(o.q,{curKey:"6"},"Option 6"),n.a.createElement(o.u,{curKey:"sub3",title:"Submenu"},n.a.createElement(o.q,{curKey:"7"},"Option 7"),n.a.createElement(o.q,{curKey:"8"},"Option 8"))),n.a.createElement(o.u,{curKey:"sub4",title:"Navigation Three"},n.a.createElement(o.q,{curKey:"9"},"Option 9"),n.a.createElement(o.q,{curKey:"10"},"Option 10"),n.a.createElement(o.q,{curKey:"11"},"Option 11"),n.a.createElement(o.q,{curKey:"12"},"Option 12")))),n.a.createElement(c.a,{title:"layout 2"},n.a.createElement(o.p,{style:{width:"256px",borderRight:"1px solid #ccc"},layout:"inline",selectedKey:s,onClick:p},n.a.createElement(o.u,{curKey:"sub1",title:"sub1"},n.a.createElement(o.q,{curKey:"1"},"Option 1"),n.a.createElement(o.q,{curKey:"2"},"Option 2"),n.a.createElement(o.q,{curKey:"3"},"Option 3"),n.a.createElement(o.q,{curKey:"4"},"Option 4")),n.a.createElement(o.u,{curKey:"sub2",title:"Navigation Two"},n.a.createElement(o.q,{curKey:"5"},"Option 5"),n.a.createElement(o.q,{curKey:"6"},"Option 6"),n.a.createElement(o.u,{curKey:"sub3",title:"Submenu"},n.a.createElement(o.q,{curKey:"7"},"Option 7"),n.a.createElement(o.q,{curKey:"8"},"Option 8"))),n.a.createElement(o.u,{curKey:"sub4",title:"Navigation Three"},n.a.createElement(o.q,{curKey:"9"},"Option 9"),n.a.createElement(o.q,{curKey:"10"},"Option 10"),n.a.createElement(o.q,{curKey:"11"},"Option 11"),n.a.createElement(o.q,{curKey:"12"},"Option 12")))))}}}]);