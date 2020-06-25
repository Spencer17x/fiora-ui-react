(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[8],{13:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(57),l=n(56);e.default=function(){var t=Object(a.useState)(!1),e=t[0],n=t[1];return o.a.createElement("div",{className:"example-button"},o.a.createElement(l.a,{title:"基本用法",code:"\n\t\t\t<Button className='component-margin'>Default</Button>\n\t\t\t<Button type='primary' className='component-margin'>Primary</Button>\n\t\t\t<Button type='primary' className='component-margin' disabled>Primary Disbaled</Button>\n\t\t\t<Button type='dashed' className='component-margin'>Dashed</Button>\n\t\t\t<Button type='danger' className='component-margin'>Danger</Button>\n\t\t\t<Button type='link' className='component-margin'>Link</Button>\n\t\t\t<Button type='link' className='component-margin'>\n\t\t\t\t<span>Hello World</span>\n\t\t\t</Button>\n\t\t\t"},o.a.createElement(r.f,null,"Default"),o.a.createElement(r.f,{type:"primary"},"Primary"),o.a.createElement(r.f,{type:"primary",disabled:!0},"Primary Disbaled"),o.a.createElement(r.f,{type:"dashed"},"Dashed"),o.a.createElement(r.f,{type:"danger"},"Danger"),o.a.createElement(r.f,{type:"link"},"Link"),o.a.createElement(r.f,{type:"link"},o.a.createElement("span",null,"Hello World"))),o.a.createElement(l.a,{title:"按钮尺寸",style:{marginTop:30},code:"\n\t\t\t<Button size='small' className='component-margin'>Default</Button>\n\t\t\t<Button size='default' type='primary' className='component-margin'>Primary</Button>\n\t\t\t<Button size='large' className='component-margin'>Dashed</Button>\n\t\t\t"},o.a.createElement(r.f,{size:"small"},"Default"),o.a.createElement(r.f,{size:"default",type:"primary"},"Primary"),o.a.createElement(r.f,{size:"large"},"Dashed")),o.a.createElement(l.a,{title:"带图标的按钮",style:{marginTop:30},code:"\n\t\t\timport React, { useState } from 'react';\n\t\t\tconst [buttonLoading, setButtonLoading] = useState(false);\t\t\t \n\t\t\t<Button className='component-margin' icon='add'>Add Button</Button>\n\t\t\t<Button className='component-margin' loading>Loading Button</Button>\n\t\t\t<Button type='primary' className='component-margin' loading>Loading Button</Button>\n\t\t\t<Button\n\t\t\t\ttype='primary'\n\t\t\t\tclassName='component-margin'\n\t\t\t\tloading={buttonLoading}\n\t\t\t\tonClick={() => setButtonLoading(!buttonLoading)}\n\t\t\t>loading : {`"+e+"`}</Button>\n\t\t\t<Button className='component-margin' shape='circle'>A</Button>\n\t\t\t<Button className='component-margin' icon='search' shape='circle' />\n\t\t\t<Button type='primary' className='component-margin' shape='circle'>A</Button>\n\t\t\t<Button type='primary' className='component-margin' icon='search' shape='circle'>ABC</Button>\n\t\t\t<Button shape='circle' type='dashed' className='component-margin'>D</Button>\n\t\t\t<Button shape='circle' type='primary' className='component-margin' loading></Button>\n\t\t\t<Button shape='circle' type='danger' className='component-margin' loading></Button>\n\t\t\t"},o.a.createElement(r.f,{icon:"add"},"Add Button"),o.a.createElement(r.f,{loading:!0},"Loading Button"),o.a.createElement(r.f,{type:"primary",loading:!0},"Loading Button"),o.a.createElement(r.f,{type:"primary",loading:e,onClick:function(){return n(!e)}},"loading:",""+e),o.a.createElement(r.f,{shape:"circle"},"A"),o.a.createElement(r.f,{icon:"search",shape:"circle"}),o.a.createElement(r.f,{type:"primary",shape:"circle"},"A"),o.a.createElement(r.f,{type:"primary",icon:"search",shape:"circle"},"ABC"),o.a.createElement(r.f,{shape:"circle",type:"dashed"},"D"),o.a.createElement(r.f,{shape:"circle",type:"primary",loading:!0}),o.a.createElement(r.f,{shape:"circle",type:"danger",loading:!0})),o.a.createElement(l.a,{title:"按钮组合",style:{marginTop:30},code:"\n\t\t\t<ButtonGroup className='component-margin'>\n\t\t\t\t<Button>Cancel</Button>\n\t\t\t\t<Button>OK</Button>\n\t\t\t\t<Button>OK</Button>\n\t\t\t\t<Button>OK</Button>\n\t\t\t</ButtonGroup>\n\n\t\t\t<ButtonGroup className='component-margin'>\n\t\t\t\t<Button disabled>L</Button>\n\t\t\t\t<Button disabled>M</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t\t<Button disabled>R</Button>\n\t\t\t</ButtonGroup>\n\n\t\t\t<ButtonGroup className='component-margin'>\n\t\t\t\t<Button>L</Button>\n\t\t\t\t<Button>M</Button>\n\t\t\t\t<Button>R</Button>\n\t\t\t</ButtonGroup>\n\n\t\t\t<ButtonGroup className='component-margin'>\n\t\t\t\t<Button type=\"primary\">\n\t\t\t\t\t<Icon type=\"add\" fill='#fff'/>\n\t\t\t\t\tGo back\n\t\t\t\t</Button>\n\t\t\t\t<Button type=\"primary\">\n\t\t\t\t\tGo forward\n\t\t\t\t\t<Icon type=\"add\" fill='#fff'/>\n\t\t\t\t</Button>\n\t\t\t</ButtonGroup>\n\n\t\t\t<ButtonGroup className='component-margin'>\n\t\t\t\t<Button type=\"primary\" icon='add'>\n\t\t\t\t\tGo back\n\t\t\t\t</Button>\n\t\t\t\t<Button type=\"primary\" icon='add'>\n\t\t\t\t\tGo forward\n\t\t\t\t</Button>\n\t\t\t</ButtonGroup>\n\t\t\t"},o.a.createElement(r.g,null,o.a.createElement(r.f,null,"Cancel"),o.a.createElement(r.f,null,"OK"),o.a.createElement(r.f,null,"OK"),o.a.createElement(r.f,null,"OK")),o.a.createElement(r.g,null,o.a.createElement(r.f,{disabled:!0},"L"),o.a.createElement(r.f,{disabled:!0},"M"),o.a.createElement(r.f,{disabled:!0},"R"),o.a.createElement(r.f,{disabled:!0},"R"),o.a.createElement(r.f,{disabled:!0},"R"),o.a.createElement(r.f,{disabled:!0},"R"),o.a.createElement(r.f,{disabled:!0},"R")),o.a.createElement(r.g,null,o.a.createElement(r.f,null,"L"),o.a.createElement(r.f,null,"M"),o.a.createElement(r.f,null,"R")),o.a.createElement(r.g,null,o.a.createElement(r.f,{type:"primary"},o.a.createElement(r.m,{type:"add",fill:"#fff"}),"Go back"),o.a.createElement(r.f,{type:"primary"},"Go forward",o.a.createElement(r.m,{type:"add",fill:"#fff"}))),o.a.createElement(r.g,null,o.a.createElement(r.f,{type:"primary",icon:"add"},"Go back"),o.a.createElement(r.f,{type:"primary",icon:"add"},"Go forward"))))}}}]);