(window.webpackJsonpfiora_ui_react=window.webpackJsonpfiora_ui_react||[]).push([[9],{135:function(e,n,t){"use strict";var a=t(0),r=t.n(a),o=t(2),s=t.n(o),l=t(138),i=t(134),m=t(14),c=(t(139),t(140),t(141),t(136),function(){return(c=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e}).apply(this,arguments)}),u=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(t[a[r]]=e[a[r]])}return t};n.a=function(e){var n=e.children,t=e.title,o=e.className,d=e.code,p=u(e,["children","title","className","code"]),g=Object(a.useState)(!1),f=g[0],h=g[1],y=Object(a.useRef)(null);return r.a.createElement("div",c({className:s()("code-card",o)},p),r.a.createElement("h1",null,t),r.a.createElement("div",{className:"code-card_demo"},n),r.a.createElement(m.m,{className:"icon-code-toggle",type:"code",onClick:function(){return h(!f)}}),r.a.createElement(i.a,{in:f,timeout:600,classNames:"code",unmountOnExit:!0,onEnter:function(e){var n=e.getBoundingClientRect().height;e.style.height="0px",e.getBoundingClientRect(),e.style.height=n+"px"},onExit:function(e){e.style.height="0px"}},r.a.createElement(l.UnControlled,{ref:y,className:"code-mirror_container",value:d,options:{mode:"jsx",theme:"dracula",lineNumbers:!0,readOnly:!0,tabSize:2},onChange:function(e,n,t){console.log(t)}})))}},136:function(e,n,t){var a=t(5),r=t(137);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};a(r,o);e.exports=r.locals||{}},137:function(e,n,t){(n=t(6)(!1)).push([e.i,".code-card{border:1px solid #ccc;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);padding:50px}.code-card>h1{font-size:26px;margin-top:0}.code-card .icon-code-toggle{cursor:pointer}.code-mirror_container{transition:height 600ms;overflow:hidden}.code-mirror_container .CodeMirror{z-index:0;height:auto}\n",""]),e.exports=n},22:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(135),s=t(14);n.default=function(){var e=Object(a.useState)({username:"",password:"",text:""}),n=e[0],t=e[1],l=Object(a.useState)([{name:"username",type:"text",label:"Username"},{name:"password",type:"password",label:"Password"},{name:"text",type:"text",label:"Text"}])[0],i=Object(a.useState)([{name:"username",required:!0,message:"必填"},{name:"username",minlength:5,message:"不得小于5"},{name:"username",maxlength:15,message:"不得大于15"},{name:"password",required:!0,message:"必填"},{name:"password",minlength:5,message:"不得小于5"},{name:"password",maxlength:15,message:"不得大于15"}])[0],m=Object(a.useState)(),c=m[0],u=m[1],d=function(){var e=Object(s.x)(n,i);u(e)};return r.a.createElement("div",null,r.a.createElement(o.a,{title:"基础用法",style:{marginBottom:20},code:"\nconst [formData, setFormData] = useState<FormProps['data']>({\n  username: '',\n  password: '',\n  text: ''\n});\n\nconst [fields] = useState<FormProps['fields']>([\n  { name: 'username', type: 'text', label: 'Username' },\n  { name: 'password', type: 'password', label: 'Password' },\n  { name: 'text', type: 'text', label: 'Text' }\n]);\nconst [rules] = useState<FormProps['rules']>([\n  { name: 'username', required: true, message: '必填' },\n  { name: 'username', minlength: 5, message: '不得小于5' },\n  { name: 'username', maxlength: 15, message: '不得大于15' },\n  { name: 'password', required: true, message: '必填' },\n  { name: 'password', minlength: 5, message: '不得小于5' },\n  { name: 'password', maxlength: 15, message: '不得大于15' }\n]);\n\n<Form\n  data={formData}\n  fields={fields}\n  rules={rules}\n  onChange={data => setFormData(data)}\n  errors={errors}\n  buttons={\n    [\n      <Button type='primary' onClick={onSubmit}>提交</Button>\n    ]\n  }\n></Form>\n      "},r.a.createElement(s.k,{data:n,fields:l,rules:i,onChange:function(e){return t(e)},errors:c,buttons:[r.a.createElement(s.f,{type:"primary",onClick:d},"提交")]})),r.a.createElement(o.a,{title:"layout 布局",code:"\n<h3>vertical</h3>\n<Form\n  layout='vertical'\n  data={formData}\n  fields={fields}\n  rules={rules}\n  onChange={data => setFormData(data)}\n  errors={errors}\n  style={{ marginBottom: 20 }}\n  buttons={\n    [\n      <Button type='primary' onClick={onSubmit}>提交</Button>\n    ]\n  }\n></Form>\n\n<h3>inline</h3>\n<Form\n  layout='inline'\n  data={formData}\n  fields={fields}\n  rules={rules}\n  onChange={data => setFormData(data)}\n  errors={errors}\n  buttons={\n    [\n      <Button type='primary' onClick={onSubmit}>提交</Button>\n    ]\n  }\n>\n</Form>\n      "},r.a.createElement("h3",null,"vertical"),r.a.createElement(s.k,{layout:"vertical",data:n,fields:l,rules:i,onChange:function(e){return t(e)},errors:c,style:{marginBottom:20},buttons:[r.a.createElement(s.f,{type:"primary",onClick:d},"提交")]}),r.a.createElement("h3",null,"inline"),r.a.createElement(s.k,{layout:"inline",data:n,fields:l,rules:i,onChange:function(e){return t(e)},errors:c,buttons:[r.a.createElement(s.f,{type:"primary",onClick:d},"提交")]})))}}}]);