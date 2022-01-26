"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[4315],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,p=e.values,c=e.groupId,d=e.className,m=a.Children.toArray(e.children),f=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),b=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,h=o(),y=h.tabGroupChoices,v=h.setTabGroupChoices,g=(0,a.useState)(b),k=g[0],x=g[1],w=[];if(null!=c){var T=y[c];null!=T&&T!==k&&f.some((function(e){return e.value===T}))&&x(T)}var O=function(e){var t=e.currentTarget,n=w.indexOf(t),a=f[n].value;x(a),null!=c&&(v(c,a),setTimeout((function(){var e,n,a,r,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:O,onClick:O},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1311:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5064),l=n(8215),s={sidebar_position:4},u="Lists",p={unversionedId:"python/basic-data/lists",id:"python/basic-data/lists",isDocsHomePage:!1,title:"Lists",description:"In Python, Lists allow you to work with mutiple elemnts at once. A list is a collection of objects and allows you to store multiple items in a single variable.",source:"@site/docs/python/basic-data/lists.md",sourceDirName:"python/basic-data",slug:"/python/basic-data/lists",permalink:"/docs/python/basic-data/lists",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/basic-data/lists.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"pythonSidebar",previous:{title:"Booleans",permalink:"/docs/python/basic-data/booleans"},next:{title:"Introduction",permalink:"/docs/python/user-input-output/introduction"}},c=[{value:"Append",id:"append",children:[]},{value:"Indexing",id:"indexing",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lists"},"Lists"),(0,o.kt)("p",null,"In Python, Lists allow you to work with mutiple elemnts at once. A list is a collection of objects and allows you to store multiple items in a single variable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Basic Example:")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Creates a list of names and prints it\nnames = ["Josh","Eddie","Jonathan, Adolio"]\nprint("names = ", names)\n'))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"names = ['Josh','Eddie','Jonathan','Adolio']\n")))),(0,o.kt)("h2",{id:"append"},"Append"),(0,o.kt)("p",null,"Here we'll explore and learn about the Python list ",(0,o.kt)("inlineCode",{parentName:"p"},"append")," method and provide some examples to further your understanding.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"append")," method allows you to add items to the end of the list."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Creates a list of groceries\ngroceries = ['apples','bacon','spinach']\n\n# adds grapes to the end of the list\ngroceries.append('grapes')\n\n# Prints the grocery list\nprint(\"groceries = \", groceries)\n"))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"groceries = ['apples','bacon','spinach','grapes']\n")))),(0,o.kt)("h2",{id:"indexing"},"Indexing"),(0,o.kt)("p",null,"Indexing in Python is a way to refer the individual items within an list by it's postion. Positions in lists start with index ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"!! You can use square brackets ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")," to index an element in a specific position. The example below shows how to index different elements in a list."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Creates a list of animals\nanimals = ['snake','fish','bear','eagle']\n\n# Prints items at different positions\nprint(\"First Item: \", animals[0])\nprint(\"Second Item: \", animals[1])\nprint(\"Third Item: \", animals[2])\nprint(\"Fourth Item: \", animals[3])\n"))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"snake\nfish\nbear\neagle\n")))),(0,o.kt)("p",null,"You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," function to find the position of a specific item in a list."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Creates a list of animals\nanimals = ['snake','fish','bear','eagle']\n\n# Prints position of 'bear'\nprint(\"Position of bear:\", animals.index('bear'))\n"))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Position of bear: 2\n")))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);