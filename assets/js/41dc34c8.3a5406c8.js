"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[5e3],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||c[b]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(3117),r=n(7294),o=n(6010),l=n(2389),s=n(7392),i=n(7094),u=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:b,values:m,groupId:f,className:v}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(y,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===b?b:null!=(t=null!=b?b:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:w}=(0,i.U)(),[O,C]=(0,r.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=T[f];null!=e&&e!==O&&y.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),a=y[n].value;a!==O&&(x(t),C(a),null!=f&&w(f,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=N.indexOf(e.currentTarget)+1;n=null!=(a=N[t])?a:N[0];break}case"ArrowLeft":{var r;const t=N.indexOf(e.currentTarget)-1;n=null!=(r=N[t])?r:N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function b(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2292:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const s={sidebar_position:3},i="Booleans",u={unversionedId:"python/basic-data/booleans",id:"python/basic-data/booleans",title:"Booleans",description:"Why is the purpose of booleans? In programming you often need to know if an expression is True or False. A boolean is a data type can can only have one of two values True and False. Creating booleans is pretty straight forward as demonstrated below.",source:"@site/docs/python/basic-data/booleans.md",sourceDirName:"python/basic-data",slug:"/python/basic-data/booleans",permalink:"/docs/python/basic-data/booleans",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/basic-data/booleans.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"Strings",permalink:"/docs/python/basic-data/strings"},next:{title:"Lists",permalink:"/docs/python/basic-data/lists"}},p={},c=[{value:"Comparisons",id:"comparisons",level:2},{value:"If statements &amp; booleans",id:"if-statements--booleans",level:2}],d={toc:c};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"booleans"},"Booleans"),(0,r.kt)("p",null,"Why is the purpose of booleans? In programming you often need to know if an expression is True or False. A boolean is a data type can can only have one of two values ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),". Creating booleans is pretty straight forward as demonstrated below."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Creates 2 boolean variables\nbool1 = True\nbool2 = False\n\n# Print the boolean variables\nprint(bool1)\nprint(bool2)\n"))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\nFalse\n")))),(0,r.kt)("h2",{id:"comparisons"},"Comparisons"),(0,r.kt)("p",null,"When using comparison operators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"=="),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<="),", and ",(0,r.kt)("inlineCode",{parentName:"p"},">"),", a boolean value will be returned based on the evaluation of the statement."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(20 > 3)\nprint(20 == 3)\nprint(20 < 3)\n"))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"True\nFalse\nFalse\n")))),(0,r.kt)("h2",{id:"if-statements--booleans"},"If statements & booleans"),(0,r.kt)("p",null,"If statment conditions evaluate if a boolean value or expression is True of False. If a True value is returned, the if block is evaluated; however, if the value is False and an else block exists, then the else block is evaluated."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Creates 2 numberic variables \na = 100\nb = 17\n\n# Conditional Statement\nif b > a:\n    print("b is greater than a")\nelse:\n    print("b is not gretaer than a")\n'))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"b is not gretaer than a\n")))))}b.isMDXComponent=!0}}]);