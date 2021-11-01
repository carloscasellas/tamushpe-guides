"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[8356],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,c=e.values,p=e.groupId,d=e.className,m=a.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,b=o(),v=b.tabGroupChoices,y=b.setTabGroupChoices,g=(0,a.useState)(h),k=g[0],O=g[1],w=[];if(null!=p){var C=v[p];null!=C&&C!==k&&f.some((function(e){return e.value===C}))&&O(C)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),a=f[n].value;O(a),null!=p&&(y(p,a),setTimeout((function(){var e,n,a,r,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:x,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},6815:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5064),l=n(8215),s={sidebar_position:2},u="Conditional Statments",c={unversionedId:"python/conditional-statements/conditional-statements",id:"python/conditional-statements/conditional-statements",isDocsHomePage:!1,title:"Conditional Statments",description:"Conditional Statements",source:"@site/docs/python/conditional-statements/conditional-statements.md",sourceDirName:"python/conditional-statements",slug:"/python/conditional-statements/conditional-statements",permalink:"/tamushpe-guides/docs/python/conditional-statements/conditional-statements",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/conditional-statements/conditional-statements.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"pythonSidebar",previous:{title:"Logical Operators",permalink:"/tamushpe-guides/docs/python/conditional-statements/logical-operators"},next:{title:"Introduction",permalink:"/tamushpe-guides/docs/python/loops/loops"}},p=[{value:"If statement",id:"if-statement",children:[]},{value:"Else Clause",id:"else-clause",children:[]},{value:"Elif Clause",id:"elif-clause",children:[]}],d={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conditional-statments"},"Conditional Statments"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conditional Statements",src:n(532).Z})),(0,o.kt)("h2",{id:"if-statement"},"If statement"),(0,o.kt)("p",null,"There are many cases in programming when we might want to run a block of code if a condition is true and a different one if the condition is false. By using the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," keyword in Python we can provide a logical condition. If the condition evaluates to true, the corresponding code block is run; however, if the condition is false the code block is ignored."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Basic if Statement\nif 5 > 1:\n    print("5 is greater than 1")\n\nif 1 > 5:\n    print("1 is greater than 5")\n'))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"5 is greater than 1\n")))),(0,o.kt)("p",null,"You can examine that only the first print statement is run since the second if statement was evaluated to false."),(0,o.kt)("h2",{id:"else-clause"},"Else Clause"),(0,o.kt)("p",null,"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"else")," keyword, this code block is evaluated when the if condition is false"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Basic if-else Statement\nif 1 > 5:\n    print("1 is greater than 5")\nelse:\n    print("5 is greater than 1")\n\n'))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"5 is greater than 1\n")))),(0,o.kt)("h2",{id:"elif-clause"},"Elif Clause"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"elif")," statements to provide an additional condition aside from the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement. You can use as many ",(0,o.kt)("inlineCode",{parentName:"p"},"elif")," statemetns as you wish."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Basic if-elif-else Statement\nif 4 > 4::\n    print("4 is greater than 4")\nelif 4 == 4:\n    print("4 is equal to 4")\nelse:\n    print("4 is greater than 4")\n'))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"4 is equal to 4\n")))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},532:function(e,t,n){t.Z=n.p+"assets/images/if-statement-5b99501692b677a160aec292f0c51cb7.jpg"}}]);