"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[2539],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function u(e){let{children:t,hidden:n,className:u}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(3117),a=n(7294),o=n(6010),u=n(2389),l=n(7392),i=n(7094),s=n(2466),p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n;const{lazy:u,block:m,defaultValue:d,values:f,groupId:b,className:h}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:y.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===d?d:null!=(t=null!=d?d:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:T}=(0,i.U)(),[O,N]=(0,a.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=b){const e=w[b];null!=e&&e!==O&&v.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==O&&(E(t),N(r),null!=b&&T(b,String(r)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=x.indexOf(e.currentTarget)+1;n=null!=(r=x[t])?r:x[0];break}case"ArrowLeft":{var a;const t=x.indexOf(e.currentTarget)-1;n=null!=(a=x[t])?a:x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},h)},v.map((e=>{let{value:t,label:n,attributes:u}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>x.push(e),onKeyDown:P,onFocus:C,onClick:C},u,{className:(0,o.Z)("tabs__item",c,null==u?void 0:u.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,u.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},8794:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905)),o=n(5488),u=n(5162);const l={sidebar_position:3},i="User Output",s={unversionedId:"python/user-input-output/basic-user-output",id:"python/user-input-output/basic-user-output",title:"User Output",description:"This section covers the basics of how to display output for a user to see, provides coding examples, and reveals some useful tips to help you out when programming.",source:"@site/docs/python/user-input-output/basic-user-output.md",sourceDirName:"python/user-input-output",slug:"/python/user-input-output/basic-user-output",permalink:"/docs/python/user-input-output/basic-user-output",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/user-input-output/basic-user-output.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"User Input",permalink:"/docs/python/user-input-output/basic-user-input"},next:{title:"Conditional Statments",permalink:"/docs/python/conditional-statements/"}},p={},c=[{value:"Print Function",id:"print-function",level:2},{value:"Output Formatting",id:"output-formatting",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-output"},"User Output"),(0,a.kt)("p",null,"This section covers the basics of how to display output for a user to see, provides coding examples, and reveals some useful tips to help you out when programming."),(0,a.kt)("h2",{id:"print-function"},"Print Function"),(0,a.kt)("p",null,"You should already be very familiar with the ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," function in Python. There are a few new details we can discuss to control output better. By default the ",(0,a.kt)("inlineCode",{parentName:"p"},"print"),' statment ends with a newline ("\\n"), however you can control this by providing an ',(0,a.kt)("inlineCode",{parentName:"p"},"end")," argument as shown below."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Prints messages with differnt end arguments\nprint("First Statment", end="--")\nprint("Second Statment")\nprint("Third Statment", end="**")\n'))),(0,a.kt)(u.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"First Statment--Second Statment\nThird Statment**\n")))),(0,a.kt)("h2",{id:"output-formatting"},"Output Formatting"),(0,a.kt)("p",null,"We can make out output very nice by utilizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," function for Strings. Once key feature is to use ",(0,a.kt)("inlineCode",{parentName:"p"},"{}")," as a place holder in text."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'name = "Jonathan"\nage = 21\nprint("My name is {} and I\'m {} years old.".format(name,age))\n'))),(0,a.kt)(u.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"My name is Jonathan and I'm 21 years old.\n")))),(0,a.kt)("p",null,"In Python, floats can sometimes be VERY long, so another common use case is to control the number of decimals when printing a number. The example below shows how to display only 3 decimal places."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'longNumber = 8/7\nprint("The number {.3f} has 3 decimal places.".format(longNumber))\n'))),(0,a.kt)(u.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The number 1.143 has 3 decimal places.\n")))))}d.isMDXComponent=!0}}]);