(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[5,17],{127:function(e,l,a){var t=a(5),n=a(155);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};t(n,o);e.exports=n.locals||{}},133:function(e,l,a){"use strict";var t=a(0),n=a.n(t),o=a(2),r=a.n(o),c=a(136),s=a(132),m=a(14),i=(a(137),a(138),a(139),a(134),function(){return(i=Object.assign||function(e){for(var l,a=1,t=arguments.length;a<t;a++)for(var n in l=arguments[a])Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);return e}).apply(this,arguments)}),d=function(e,l){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]])}return a};l.a=function(e){var l=e.children,a=e.title,o=e.className,g=e.code,p=d(e,["children","title","className","code"]),u=Object(t.useState)(!1),f=u[0],C=u[1],x=Object(t.useRef)(null);return n.a.createElement("div",i({className:r()("code-card",o)},p),n.a.createElement("h1",null,a),n.a.createElement("div",{className:"code-card_demo"},l),n.a.createElement(m.l,{className:"icon-code-toggle",type:"code",onClick:function(){return C(!f)}}),n.a.createElement(s.a,{in:f,timeout:600,classNames:"code",unmountOnExit:!0,onEnter:function(e){var l=e.getBoundingClientRect().height;e.style.height="0px",e.getBoundingClientRect(),e.style.height=l+"px"},onExit:function(e){e.style.height="0px"}},n.a.createElement(c.UnControlled,{ref:x,className:"code-mirror_container",value:g,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(e,l,a){console.log(a)}})))}},134:function(e,l,a){var t=a(5),n=a(135);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};t(n,o);e.exports=n.locals||{}},135:function(e,l,a){(l=a(6)(!1)).push([e.i,".code-card{border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container{transition:height 600ms;overflow:hidden}.code-mirror_container .CodeMirror{z-index:0;height:auto}\n",""]),e.exports=l},155:function(e,l,a){(l=a(6)(!1)).push([e.i,".example-grid-col{color:#fff;height:60px;text-align:center;line-height:60px}.example-grid .light{background-color:#0092ffbf}.example-grid .dark{background-color:#0092ff}\n",""]),e.exports=l},30:function(e,l,a){"use strict";a.r(l),a.d(l,"default",(function(){return i}));var t=a(0),n=a.n(t),o=a(133),r=a(14),c=function(){var e=Object(t.useState)({width:window.innerWidth,height:window.innerHeight}),l=e[0],a=e[1],n=function(e){var l=e.target,t=l.innerWidth,n=l.innerHeight;a({width:t,height:n})};return Object(t.useEffect)((function(){return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),l},s=(a(127),function(){return(s=Object.assign||function(e){for(var l,a=1,t=arguments.length;a<t;a++)for(var n in l=arguments[a])Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);return e}).apply(this,arguments)}),m=function(e){var l=e.children,a=e.value;return n.a.createElement("div",{style:{height:a,backgroundColor:"#0092ff",color:"#fff",textAlign:"center",lineHeight:a+"px"}},l)};function i(){var e=c(),l={backgroundColor:"#0092ff",textAlign:"center",height:"60px",lineHeight:"60px",color:"#fff"};return n.a.createElement("div",{className:"example-grid"},n.a.createElement(o.a,{style:{marginBottom:30},title:"基本用法",code:"\n          <>\n            <Row style={{ marginBottom: 20 }}>\n              <Col className='example-grid-col light' span={24}>\n                col\n              </Col>\n            </Row>\n            <Row style={{ marginBottom: 20 }}>\n              <Col className='example-grid-col light' span={12}>\n                col-12\n              </Col>\n              <Col className='example-grid-col dark' span={12}>\n                col-12\n              </Col>\n            </Row>\n            <Row style={{ marginBottom: 20 }}>\n              <Col className='example-grid-col light' span={8}>\n                col-8\n              </Col>\n              <Col className='example-grid-col dark' span={8}>\n                col-8\n              </Col>\n              <Col className='example-grid-col light' span={8}>\n                col-8\n              </Col>\n            </Row>\n            <Row style={{ marginBottom: 20 }}>\n              <Col className='example-grid-col light' span={6}>\n                col-6\n              </Col>\n              <Col className='example-grid-col dark' span={6}>\n                col-6\n              </Col>\n              <Col className='example-grid-col light' span={6}>\n                col-6\n              </Col>\n              <Col className='example-grid-col dark' span={6}>\n                col-6\n              </Col>\n            </Row>\n          </>\n        "},n.a.createElement(n.a.Fragment,null,n.a.createElement(r.q,{style:{marginBottom:20}},n.a.createElement(r.f,{className:"example-grid-col light",span:24},"col")),n.a.createElement(r.q,{style:{marginBottom:20}},n.a.createElement(r.f,{className:"example-grid-col light",span:12},"col-12"),n.a.createElement(r.f,{className:"example-grid-col dark",span:12},"col-12")),n.a.createElement(r.q,{style:{marginBottom:20}},n.a.createElement(r.f,{className:"example-grid-col light",span:8},"col-8"),n.a.createElement(r.f,{className:"example-grid-col dark",span:8},"col-8"),n.a.createElement(r.f,{className:"example-grid-col light",span:8},"col-8")),n.a.createElement(r.q,{style:{marginBottom:20}},n.a.createElement(r.f,{className:"example-grid-col light",span:6},"col-6"),n.a.createElement(r.f,{className:"example-grid-col dark",span:6},"col-6"),n.a.createElement(r.f,{className:"example-grid-col light",span:6},"col-6"),n.a.createElement(r.f,{className:"example-grid-col dark",span:6},"col-6")))),n.a.createElement(o.a,{title:"间隔",style:{marginBottom:30},code:"\n          <>\n            <h2>gutter</h2>\n            <Row gutter={16}>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n            </Row>\n  \n            <h2>Responsive, width: {size.width}, height: {size.height}</h2>\n            <Row\n              style={{ marginTop: 20 }}\n              gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}\n            >\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n            </Row>\n  \n            <h2>Vertical</h2>\n            <Row gutter={[16, { xs: 4, sm: 8, md: 16, lg: 24 }]}>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n              <Col className='gutter-row' span={6}>\n                <div style={style}>col-6</div>\n              </Col>\n            </Row>\n          </>\n        "},n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",null,"gutter"),n.a.createElement(r.q,{gutter:16},n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6"))),n.a.createElement("h2",null,"Responsive, width: ",e.width,", height: ",e.height),n.a.createElement(r.q,{style:{marginTop:20},gutter:{xs:4,sm:8,md:16,lg:24}},n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6"))),n.a.createElement("h2",null,"Vertical"),n.a.createElement(r.q,{gutter:[16,{xs:4,sm:8,md:16,lg:24}]},n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6")),n.a.createElement(r.f,{className:"gutter-row",span:6},n.a.createElement("div",{style:l},"col-6"))))),n.a.createElement(o.a,{title:"排版",style:{marginBottom:30},code:"\n          <>\n            <Row justify='start'\n                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n            </Row>\n            <Row justify='center'\n                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n            </Row>\n            <Row justify='end'\n                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n            </Row>\n            <Row justify='space-between'\n                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n            </Row>\n            <Row justify='space-around'\n                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n              <Col className='example-grid-col light' span={4}>col-4</Col>\n              <Col className='example-grid-col dark' span={4}>col-4</Col>\n            </Row>\n          </>\n        "},n.a.createElement(n.a.Fragment,null,n.a.createElement(r.q,{justify:"start",style:{backgroundColor:"rgba(128, 128, 128, 0.08)",marginBottom:20,padding:"16px 0"}},n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4")),n.a.createElement(r.q,{justify:"center",style:{backgroundColor:"rgba(128, 128, 128, 0.08)",marginBottom:20,padding:"16px 0"}},n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4")),n.a.createElement(r.q,{justify:"end",style:{backgroundColor:"rgba(128, 128, 128, 0.08)",marginBottom:20,padding:"16px 0"}},n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4")),n.a.createElement(r.q,{justify:"space-between",style:{backgroundColor:"rgba(128, 128, 128, 0.08)",marginBottom:20,padding:"16px 0"}},n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4")),n.a.createElement(r.q,{justify:"space-around",style:{backgroundColor:"rgba(128, 128, 128, 0.08)",marginBottom:20,padding:"16px 0"}},n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col light",span:4},"col-4"),n.a.createElement(r.f,{className:"example-grid-col dark",span:4},"col-4")))),n.a.createElement(o.a,{title:"子元素垂直对齐",style:{marginBottom:30},code:"\n          <>\n            <Row justify='center' align='top' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20 }}>\n              <Col span={4}>\n                <DemoBox value={100}>col-4</DemoBox>\n              </Col>\n              <Col span={4}>\n                <DemoBox value={50}>col-4</DemoBox>\n              </Col>\n              <Col span={4}>\n                <DemoBox value={120}>col-4</DemoBox>\n              </Col>\n              <Col span={4}>\n                <DemoBox value={80}>col-4</DemoBox>\n              </Col>\n            </Row>\n            <Row justify=\"space-around\" align='middle' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20 }}>\n              <Col span={4}>\n                <DemoBox value={100}>col-4</DemoBox>\n              </Col>\n              <Col span={4}>\n                <DemoBox value={50}>col-4</DemoBox>\n              </Col>\n              <Col span={4}>\n                <DemoBox value={120}>col-4</DemoBox>\n              </Col>\n              <Col span={4}>\n                <DemoBox value={80}>col-4</DemoBox>\n              </Col>\n            </Row>\n            <Row justify=\"space-between\" align='bottom' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)' }}>\n              <Col span={4}>\n                <DemoBox value={100}>col-4</DemoBox>\n              </Col>\n              <Col span={4}>\n                <DemoBox value={50}>col-4</DemoBox>\n              </Col>\n              <Col span={4}>\n                <DemoBox value={120}>col-4</DemoBox>\n              </Col>\n              <Col span={4}>\n                <DemoBox value={80}>col-4</DemoBox>\n              </Col>\n            </Row>\n          </>\n        "},n.a.createElement(n.a.Fragment,null,n.a.createElement(r.q,{justify:"center",align:"top",style:{backgroundColor:"rgba(128, 128, 128, 0.08)",marginBottom:20}},n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:100},"col-4")),n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:50},"col-4")),n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:120},"col-4")),n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:80},"col-4"))),n.a.createElement(r.q,{justify:"space-around",align:"middle",style:{backgroundColor:"rgba(128, 128, 128, 0.08)",marginBottom:20}},n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:100},"col-4")),n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:50},"col-4")),n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:120},"col-4")),n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:80},"col-4"))),n.a.createElement(r.q,{justify:"space-between",align:"bottom",style:{backgroundColor:"rgba(128, 128, 128, 0.08)"}},n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:100},"col-4")),n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:50},"col-4")),n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:120},"col-4")),n.a.createElement(r.f,{span:4},n.a.createElement(m,{value:80},"col-4"))))),n.a.createElement(o.a,{title:"通过 Order 来改变元素的排序",style:{marginBottom:30},code:"\n          <Row>\n            <Col style={{\n              ...style,\n              backgroundColor: '#0092ffbf'\n            }} span={6} order={4}>\n              1 col-order-4\n            </Col>\n            <Col style={style} span={6} order={3}>\n              2 col-order-3\n            </Col>\n            <Col style={{\n              ...style,\n              backgroundColor: '#0092ffbf'\n            }} span={6} order={2}>\n              3 col-order-2\n            </Col>\n            <Col style={style} span={6} order={1}>\n              4 col-order-1\n            </Col>\n          </Row>\n        "},n.a.createElement(r.q,null,n.a.createElement(r.f,{style:s(s({},l),{backgroundColor:"#0092ffbf"}),span:6,order:4},"1 col-order-4"),n.a.createElement(r.f,{style:l,span:6,order:3},"2 col-order-3"),n.a.createElement(r.f,{style:s(s({},l),{backgroundColor:"#0092ffbf"}),span:6,order:2},"3 col-order-2"),n.a.createElement(r.f,{style:l,span:6,order:1},"4 col-order-1"))),n.a.createElement(o.a,{title:"宽度响应式",code:"\n          <Row>\n            <Col style={{\n              ...style,\n              backgroundColor: '#0092ffbf'\n            }} xs={2} sm={4} md={6} lg={10}>\n              Col\n            </Col>\n            <Col style={style} xs={20} sm={16} md={12} lg={4}>\n              Col\n            </Col>\n            <Col style={{\n              ...style,\n              backgroundColor: '#0092ffbf'\n            }} xs={2} sm={4} md={6} lg={10}>\n              Col\n            </Col>\n          </Row>\n        "},n.a.createElement(r.q,null,n.a.createElement(r.f,{style:s(s({},l),{backgroundColor:"#0092ffbf"}),xs:2,sm:4,md:6,lg:10},"Col"),n.a.createElement(r.f,{style:l,xs:20,sm:16,md:12,lg:4},"Col"),n.a.createElement(r.f,{style:s(s({},l),{backgroundColor:"#0092ffbf"}),xs:2,sm:4,md:6,lg:10},"Col"))))}}}]);