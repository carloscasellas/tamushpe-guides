"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[9277],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var o=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7294),r=n(9443);var i=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(6010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=function(e){var t,n=e.lazy,r=e.block,s=e.defaultValue,p=e.values,c=e.groupId,d=e.className,f=o.Children.toArray(e.children),m=null!=p?p:f.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=s?s:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,b=i(),g=b.tabGroupChoices,v=b.setTabGroupChoices,y=(0,o.useState)(h),w=y[0],k=y[1],O=[];if(null!=c){var x=g[c];null!=x&&x!==w&&m.some((function(e){return e.value===x}))&&k(x)}var T=function(e){var t=e.currentTarget,n=O.indexOf(t),o=m[n].value;k(o),null!=c&&(v(c,o),setTimeout((function(){var e,n,o,r,i,a,l,s;(e=t.getBoundingClientRect(),n=e.top,o=e.left,r=e.bottom,i=e.right,a=window,l=a.innerHeight,s=a.innerWidth,n>=0&&i<=s&&r<=l&&o>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=O.indexOf(e.target)+1;n=O[o]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.target)-1;n=O[r]||O[O.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},d)},m.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,o.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,n){var o=(0,n(7294).createContext)(void 0);t.Z=o},4453:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=n(5064),l=n(8215),u={sidebar_position:3},s=void 0,p={unversionedId:"python/loops/while-loops",id:"python/loops/while-loops",isDocsHomePage:!1,title:"while-loops",description:"A while loop is used to iterate over a given sequence like a list, string, or repeat a specific block of code.  This is the catch though; we do not know upfront how many times we want to keep looping!  We keep on executing as long as the condition in our while loop is true.",source:"@site/docs/python/loops/while-loops.md",sourceDirName:"python/loops",slug:"/python/loops/while-loops",permalink:"/docs/python/loops/while-loops",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/loops/while-loops.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"for-loops",permalink:"/docs/python/loops/for-loops"},next:{title:"\ud83d\uddc3 File Basics",permalink:"/docs/python/file-input-output/file-basics"}},c=[{value:"Example",id:"example",children:[]},{value:"Infinite Loops",id:"infinite-loops",children:[]},{value:"Bad Example",id:"bad-example",children:[]}],d={toc:c};function f(e){var t=e.components,u=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop is used to iterate over a given sequence like a list, string, or repeat a specific block of code.  This is the catch though; we do not know upfront how many times we want to keep looping!  We keep on executing as long as the condition in our ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop is true."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"While",src:n(302).Z})),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"i = 0\n\n# print i as long as i is less than 5\nwhile i < 5:\n    print(i)\n    i += 1 \n"))),(0,i.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0\n1\n2\n3\n4\n")),(0,i.kt)("p",null,"Here we see that we stop at 4 because the value stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," no longer holds true making our ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," condition to be false thus ending that loop."))),(0,i.kt)("h2",{id:"infinite-loops"},"Infinite Loops"),(0,i.kt)("p",null,'You might be feeling pretty confident right now with while loops... "It\'s easy!  I just keep going as long my looping condition is true."  Yes you are right about that but what would happen if your condition always stayed true?  This is where we run into the infinite loop'),(0,i.kt)("p",null,"When using a ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop, we want to make sure we have a condition that will eventually evaluate to false so we can exit our ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loop.  However if we do not do this, our program will be stuck in that loop until you close your program or your program consumes all available processor time before being booted out."),(0,i.kt)("h2",{id:"bad-example"},"Bad Example"),(0,i.kt)(a.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"i = 0\n\n# print i as long as i is greater than -1\nwhile i > -1:\n    print(i)\n    i += 1 \n"))),(0,i.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"0\n1\n2\n3\n4\n.\n.\n.\n")),(0,i.kt)("p",null,"Our program never ends because ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," is always greater than -1 so the condition is always satisfied!  When using a ",(0,i.kt)("inlineCode",{parentName:"p"},"while")," loops, make sure your looping will be met so that our program can stop running without our intervention."))))}f.isMDXComponent=!0},6010:function(e,t,n){function o(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})},302:function(e,t,n){t.Z=n.p+"assets/images/while-8409b31c6a71c81a4d23509a9dcdffcc.jpg"}}]);