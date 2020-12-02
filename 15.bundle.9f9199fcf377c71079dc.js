(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[15],{131:function(e,n,a){"use strict";var t=a(0),o=a.n(t),r=a(2),d=a.n(r),i=a(134),s=a(130),c=a(14),l=(a(135),a(136),a(137),a(132),function(){return(l=Object.assign||function(e){for(var n,a=1,t=arguments.length;a<t;a++)for(var o in n=arguments[a])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)}),m=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a};n.a=function(e){var n=e.children,a=e.title,r=e.className,u=e.code,k=m(e,["children","title","className","code"]),y=Object(t.useState)(!1),g=y[0],p=y[1],x=Object(t.useRef)(null);return o.a.createElement("div",l({className:d()("code-card",r)},k),o.a.createElement("h1",null,a),o.a.createElement("div",{className:"code-card_demo"},n),o.a.createElement(c.m,{className:"icon-code-toggle",type:"code",onClick:function(){return p(!g)}}),o.a.createElement(s.a,{in:g,timeout:600,classNames:"code",unmountOnExit:!0,onEnter:function(e){var n=e.getBoundingClientRect().height;e.style.height="0px",e.getBoundingClientRect(),e.style.height=n+"px"},onExit:function(e){e.style.height="0px"}},o.a.createElement(i.UnControlled,{ref:x,className:"code-mirror_container",value:u,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(e,n,a){console.log(a)}})))}},132:function(e,n,a){var t=a(6),o=a(133);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(o,r);e.exports=o.locals||{}},133:function(e,n,a){(n=a(7)(!1)).push([e.i,".code-card{border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container{transition:height 600ms;overflow:hidden}.code-mirror_container .CodeMirror{z-index:0;height:auto}\n",""]),e.exports=n},30:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(131),d=a(14);n.default=function(){var e=Object(t.useState)([{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"}])[0],n=Object(t.useState)([{title:"姓名",dataIndex:"name",key:"name"},{title:"年龄",dataIndex:"age",key:"age"},{title:"住址",dataIndex:"address",key:"address"},{title:"操作",dataIndex:"action",key:"action",render:function(e,n){return o.a.createElement(d.f,{type:"primary",onClick:function(){return console.log(n)}},"Giao")}}])[0],a=Object(t.useState)([{title:"姓名",dataIndex:"name",key:"name",width:300,fixed:"left"},{title:"年龄",dataIndex:"age",key:"age",width:500},{title:"住址",dataIndex:"address",key:"address",width:300,fixed:"right"}])[0],i=Object(t.useState)([{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}])[0];return o.a.createElement("div",null,o.a.createElement(r.a,{style:{maxWidth:960,marginBottom:20},title:"基本用法",code:"\nconst [columns] = useState<TableProps['columns']>([{\n  title: '姓名',\n  dataIndex: 'name',\n  key: 'name'\n}, {\n  title: '年龄',\n  dataIndex: 'age',\n  key: 'age'\n}, {\n  title: '住址',\n  dataIndex: 'address',\n  key: 'address',\n}]);\nconst [data] = useState([{\n  key: '1',\n  name: 'John Brown',\n  age: 32,\n  address: 'New York No. 1 Lake Park',\n}, {\n  key: '2',\n  name: 'Jim Green',\n  age: 42,\n  address: 'London No. 1 Lake Park',\n}, {\n  key: '3',\n  name: 'Joe Black',\n  age: 32,\n  address: 'Sidney No. 1 Lake Park',\n}]);\n<Table\n  columns={columns}\n  data={data}\n/>\n      "},o.a.createElement(d.v,{columns:e,data:i})),o.a.createElement(r.a,{style:{maxWidth:960,marginBottom:20},title:"单元格渲染",code:"\nconst [columns2] = useState<TableProps['columns']>([{\n  title: '姓名',\n  dataIndex: 'name',\n  key: 'name'\n}, {\n  title: '年龄',\n  dataIndex: 'age',\n  key: 'age'\n}, {\n  title: '住址',\n  dataIndex: 'address',\n  key: 'address',\n}, {\n  title: '操作',\n  dataIndex: 'action',\n  key: 'action',\n  render(v, row) {\n    return <Button type='primary' onClick={() => console.log(row)}>\n      Giao\n    </Button>;\n  }\n}]);\nconst [data] = useState([{\n  key: '1',\n  name: 'John Brown',\n  age: 32,\n  address: 'New York No. 1 Lake Park',\n}, {\n  key: '2',\n  name: 'Jim Green',\n  age: 42,\n  address: 'London No. 1 Lake Park',\n}, {\n  key: '3',\n  name: 'Joe Black',\n  age: 32,\n  address: 'Sidney No. 1 Lake Park',\n}]);\n<Table\n  columns={columns}\n  data={data2}\n/>\n      "},o.a.createElement(d.v,{columns:n,data:i})),o.a.createElement(r.a,{style:{maxWidth:960},title:"固定列",code:"\nconst [columns3] = useState<TableProps['columns']>([{\n  title: '姓名',\n  dataIndex: 'name',\n  key: 'name',\n  width: 300,\n  fixed: 'left'\n}, {\n  title: '年龄',\n  dataIndex: 'age',\n  key: 'age',\n  width: 500\n}, {\n  title: '住址',\n  dataIndex: 'address',\n  key: 'address',\n  width: 300,\n  fixed: 'right'\n}]);\n<Table\n  columns={columns3}\n  data={data}\n/>\n      "},o.a.createElement(d.v,{columns:a,data:i})))}}}]);