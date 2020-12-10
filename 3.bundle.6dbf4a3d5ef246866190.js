(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[3,23],{128:function(t,e,n){"use strict";n.r(e),e.default="# API\n\n|  属性   | 说明  |  类型   | 默认值  |\n|  :----  | :----  |  :----  | :----  |\n| type  | 设置按钮类型 | 'default' \\| 'primary' \\| 'dashed' \\| 'danger' \\| 'link' | 'default' |\n| size  | 设置按钮大小 | 'small' \\| 'middle' \\| 'large'  | - |\n| disabled  | 按钮失效状态 | boolean  | false |\n| icon  | 设置按钮的图标组件 | string  | - |\n| loading  | 设置按钮载入状态 | boolean  | false |\n| shape  | 设置按钮形状 | 'circle'  | - |\n| onClick  | 点击按钮时的回调 | React.MouseEventHandler<HTMLElement>  | - | \n| htmlType  | 设置 button 原生的 type 值，可选值请参考 HTML 标准 | string  | 'button' | \n"},135:function(t,e,n){"use strict";var a=n(0),o=n.n(a),r=n(2),l=n.n(r),c=n(138),i=n(134),m=n(14),u=(n(139),n(140),n(141),n(136),function(){return(u=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}),s=function(t,e){var n={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(t);o<a.length;o++)e.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(t,a[o])&&(n[a[o]]=t[a[o]])}return n};e.a=function(t){var e=t.children,n=t.title,r=t.className,p=t.code,d=s(t,["children","title","className","code"]),f=Object(a.useState)(!1),g=f[0],B=f[1],y=Object(a.useRef)(null);return o.a.createElement("div",u({className:l()("code-card",r)},d),o.a.createElement("h1",null,n),o.a.createElement("div",{className:"code-card_demo"},e),o.a.createElement(m.m,{className:"icon-code-toggle",type:"code",onClick:function(){return B(!g)}}),o.a.createElement(i.a,{in:g,timeout:600,classNames:"code",unmountOnExit:!0,onEnter:function(t){var e=t.getBoundingClientRect().height;t.style.height="0px",t.getBoundingClientRect(),t.style.height=e+"px"},onExit:function(t){t.style.height="0px"}},o.a.createElement(c.UnControlled,{ref:y,className:"code-mirror_container",value:p,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(t,e,n){console.log(n)}})))}},136:function(t,e,n){var a=n(5),o=n(137);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);t.exports=o.locals||{}},137:function(t,e,n){(e=n(6)(!1)).push([t.i,".code-card{border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container{transition:height 600ms;overflow:hidden}.code-mirror_container .CodeMirror{z-index:0;height:auto}\n",""]),t.exports=e},150:function(t,e,n){"use strict";var a=n(0),o=n.n(a),r=n(161),l=n.n(r);n(156);e.a=function(t){var e=t.source;return o.a.createElement(l.a,{className:"api-markdown",source:e})}},156:function(t,e,n){var a=n(5),o=n(157);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};a(o,r);t.exports=o.locals||{}},157:function(t,e,n){(e=n(6)(!1)).push([t.i,".api-markdown{margin-top:60px}.api-markdown>h1{color:rgba(0,0,0,0.85);font-weight:500;margin:20px 0}.api-markdown table{width:100%;border-collapse:collapse}.api-markdown table th,.api-markdown table td{padding:12px;font-size:14px;color:#5c6b77;border:1px solid #f0f0f0}.api-markdown table th{background-color:#00000005}.api-markdown table tr:hover{background-color:#00000005}\n",""]),t.exports=e},20:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(14),l=n(135),c=n(150);e.default=function(){var t=Object(a.useState)(!1),e=t[0],i=t[1];return o.a.createElement("div",{className:"example-button"},o.a.createElement(l.a,{title:"基本用法",code:"\n\t\t\t<Button className='component-margin'>Default</Button>\n\t\t\t<Button type='primary' className='component-margin'>Primary</Button>\n\t\t\t<Button type='primary' className='component-margin' disabled>Primary Disbaled</Button>\n\t\t\t<Button type='dashed' className='component-margin'>Dashed</Button>\n\t\t\t<Button type='danger' className='component-margin'>Danger</Button>\n\t\t\t<Button type='link' className='component-margin'>Link</Button>\n\t\t\t<Button type='link' className='component-margin'>\n\t\t\t\t<span>Hello World</span>\n\t\t\t</Button>\n\t\t\t"},o.a.createElement(r.f,null,"Default"),o.a.createElement(r.f,{type:"primary"},"Primary"),o.a.createElement(r.f,{type:"primary",disabled:!0},"Primary Disbaled"),o.a.createElement(r.f,{type:"dashed"},"Dashed"),o.a.createElement(r.f,{type:"danger"},"Danger"),o.a.createElement(r.f,{type:"link"},"Link"),o.a.createElement(r.f,{type:"link"},o.a.createElement("span",null,"Hello World"))),o.a.createElement(l.a,{title:"按钮尺寸",style:{marginTop:30},code:"\n\t\t\t<Button size='small' className='component-margin'>Default</Button>\n\t\t\t<Button size='default' type='primary' className='component-margin'>Primary</Button>\n\t\t\t<Button size='large' className='component-margin'>Dashed</Button>\n\t\t\t"},o.a.createElement(r.f,{size:"small"},"Default"),o.a.createElement(r.f,{type:"primary"},"Primary"),o.a.createElement(r.f,{size:"large"},"Dashed")),o.a.createElement(l.a,{title:"带图标的按钮",style:{marginTop:30},code:"\n\t\t\timport React, { useState } from 'react';\n\t\t\tconst [buttonLoading, setButtonLoading] = useState(false);\t\t\t \n\t\t\t<Button className='component-margin' icon='add'>Add Button</Button>\n\t\t\t<Button className='component-margin' loading>Loading Button</Button>\n\t\t\t<Button type='primary' className='component-margin' loading>Loading Button</Button>\n\t\t\t<Button\n\t\t\t\ttype='primary'\n\t\t\t\tclassName='component-margin'\n\t\t\t\tloading={buttonLoading}\n\t\t\t\tonClick={() => setButtonLoading(!buttonLoading)}\n\t\t\t>loading : {`"+e+"`}</Button>\n\t\t\t<Button className='component-margin' shape='circle'>A</Button>\n\t\t\t<Button className='component-margin' icon='search' shape='circle' />\n\t\t\t<Button type='primary' className='component-margin' shape='circle'>A</Button>\n\t\t\t<Button type='primary' className='component-margin' icon='search' shape='circle'>ABC</Button>\n\t\t\t<Button shape='circle' type='dashed' className='component-margin'>D</Button>\n\t\t\t<Button shape='circle' type='primary' className='component-margin' loading></Button>\n\t\t\t<Button shape='circle' type='danger' className='component-margin' loading></Button>\n\t\t\t"},o.a.createElement(r.f,{icon:"add"},"Add Button"),o.a.createElement(r.f,{loading:!0},"Loading Button"),o.a.createElement(r.f,{type:"primary",loading:!0},"Loading Button"),o.a.createElement(r.f,{type:"primary",loading:e,onClick:function(){return i(!e)}},"loading:",""+e),o.a.createElement(r.f,{shape:"circle"},"A"),o.a.createElement(r.f,{icon:"search",shape:"circle"}),o.a.createElement(r.f,{type:"primary",shape:"circle"},"A"),o.a.createElement(r.f,{type:"primary",icon:"search",shape:"circle"},"ABC"),o.a.createElement(r.f,{shape:"circle",type:"dashed"},"D"),o.a.createElement(r.f,{shape:"circle",type:"primary",loading:!0}),o.a.createElement(r.f,{shape:"circle",type:"danger",loading:!0})),o.a.createElement(l.a,{title:"按钮组合",style:{marginTop:30},code:"\n\t\t\t<Button.Group className='component-margin'>\n\t\t\t\t<Button>Cancel</Button>\n\t\t\t\t<Button>OK</Button>\n\t\t\t\t<Button>OK</Button>\n\t\t\t\t<Button>OK</Button>\n\t\t\t</Button.Group>\n\n\t\t\t<Button.Group className='component-margin'>\n\t\t\t\t<Button disabled>L</Button>\n\t\t\t\t<Button disabled>M</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t</Button.Group>\n\n\t\t\t<Button.Group className='component-margin'>\n\t\t\t\t<Button>L</Button>\n\t\t\t\t<Button>M</Button>\n\t\t\t\t<Button>R</Button>\n\t\t\t</Button.Group>\n\n\t\t\t<Button.Group className='component-margin'>\n\t\t\t\t<Button type=\"primary\">\n\t\t\t\t\t<Icon type=\"add\" fill='#fff'/>\n\t\t\t\t\tGo back\n\t\t\t\t</Button>\n\t\t\t\t<Button type=\"primary\">\n\t\t\t\t\tGo forward\n\t\t\t\t\t<Icon type=\"add\" fill='#fff'/>\n\t\t\t\t</Button>\n\t\t\t</Button.Group>\n\n\t\t\t<Button.Group className='component-margin'>\n\t\t\t\t<Button type=\"primary\" icon='add'>\n\t\t\t\t\tGo back\n\t\t\t\t</Button>\n\t\t\t\t<Button type=\"primary\" icon='add'>\n\t\t\t\t\tGo forward\n\t\t\t\t</Button>\n\t\t\t</Button.Group>\n\t\t\t"},o.a.createElement(r.f.Group,null,o.a.createElement(r.f,null,"Cancel"),o.a.createElement(r.f,null,"OK"),o.a.createElement(r.f,null,"OK"),o.a.createElement(r.f,null,"OK")),o.a.createElement(r.f.Group,null,o.a.createElement(r.f,{disabled:!0},"L"),o.a.createElement(r.f,{disabled:!0},"M"),o.a.createElement(r.f,{disabled:!0},"R"),o.a.createElement(r.f,{disabled:!0},"R"),o.a.createElement(r.f,{disabled:!0},"R"),o.a.createElement(r.f,{disabled:!0},"R"),o.a.createElement(r.f,{disabled:!0},"R")),o.a.createElement(r.f.Group,null,o.a.createElement(r.f,null,"L"),o.a.createElement(r.f,null,"M"),o.a.createElement(r.f,null,"R")),o.a.createElement(r.f.Group,null,o.a.createElement(r.f,{type:"primary"},o.a.createElement(r.m,{type:"add",fill:"#fff"}),"Go back"),o.a.createElement(r.f,{type:"primary"},"Go forward",o.a.createElement(r.m,{type:"add",fill:"#fff"}))),o.a.createElement(r.f.Group,null,o.a.createElement(r.f,{type:"primary",icon:"add"},"Go back"),o.a.createElement(r.f,{type:"primary",icon:"add"},"Go forward"))),o.a.createElement(c.a,{source:n(128).default}))}}}]);