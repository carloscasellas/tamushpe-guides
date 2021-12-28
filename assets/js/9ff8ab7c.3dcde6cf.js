"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[2928],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),o=n(9443);var a=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=function(e){var t,n=e.lazy,o=e.block,l=e.defaultValue,p=e.values,c=e.groupId,m=e.className,d=r.Children.toArray(e.children),f=null!=p?p:d.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=l?l:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=a(),b=v.tabGroupChoices,y=v.setTabGroupChoices,g=(0,r.useState)(h),k=g[0],w=g[1],N=[];if(null!=c){var O=b[c];null!=O&&O!==k&&f.some((function(e){return e.value===O}))&&w(O)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),r=f[n].value;w(r),null!=c&&(y(c,r),setTimeout((function(){var e,n,r,o,a,u,i,l;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,u=window,i=u.innerHeight,l=u.innerWidth,n>=0&&a<=l&&o<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.target)+1;n=N[r]||N[0];break;case"ArrowLeft":var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":o},m)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,u.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,r.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},150:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),u=n(5064),i=n(8215),s={sidebar_position:2},l="User Input",p={unversionedId:"python/user-input-output/basic-user-input",id:"python/user-input-output/basic-user-input",isDocsHomePage:!1,title:"User Input",description:"This section covers the basics of how to collect user input, provides coding examples, and reveals some useful tips to help you out when programming.",source:"@site/docs/python/user-input-output/basic-user-input.md",sourceDirName:"python/user-input-output",slug:"/python/user-input-output/basic-user-input",permalink:"/tamushpe-guides/docs/python/user-input-output/basic-user-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/user-input-output/basic-user-input.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"pythonSidebar",previous:{title:"Introduction",permalink:"/tamushpe-guides/docs/python/user-input-output/introduction"},next:{title:"User Output",permalink:"/tamushpe-guides/docs/python/user-input-output/basic-user-output"}},c=[{value:"Input Function",id:"input-function",children:[]},{value:"Working With Numbers",id:"working-with-numbers",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"user-input"},"User Input"),(0,a.kt)("p",null,"This section covers the basics of how to collect user input, provides coding examples, and reveals some useful tips to help you out when programming."),(0,a.kt)("h2",{id:"input-function"},"Input Function"),(0,a.kt)("p",null,"In Python, you can collect input from the user by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," function. Although it is unnecessary, you always want to provide a message including what you want to collect from the user. The example below shows me collecting a user's name and printing it."),(0,a.kt)(u.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Stores user input in a variable called name\nname = input("Enter your first name: ")\n\n# Prints the users name\nprint("Your name is:", name)\n'))),(0,a.kt)(i.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,a.kt)("p",null,"If our input is ",(0,a.kt)("inlineCode",{parentName:"p"},"Jonathan"),", then our output would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Your name is: Jonathan\n")))),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Input collected from the user will always be a String!!"))),(0,a.kt)("h2",{id:"working-with-numbers"},"Working With Numbers"),(0,a.kt)("p",null,"In engineering, it's pretty common to collect numbers from users; however, since the input is a string, we must cast it to an ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"float")," (usually float) if we want to do math with it."),(0,a.kt)(u.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Collects 2 numbers from a user and casts them to floats\nnum1 = float(input("Enter a number: "))\nnum2 = float(input("Enter a number: "))\n\n# Prints the sum of num1 and num2\nprint("num1 + num2 = ", num1 + num2)\n'))),(0,a.kt)(i.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,a.kt)("p",null,"If our inputs are ",(0,a.kt)("inlineCode",{parentName:"p"},"12")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"343"),", then our output would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"num1 + num2 = 355.0\n")))))}d.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);