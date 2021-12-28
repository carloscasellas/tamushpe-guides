"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[6805],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),i=n(9443);var r=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,i=e.block,u=e.defaultValue,p=e.values,d=e.groupId,c=e.className,m=a.Children.toArray(e.children),f=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,g=r(),y=g.tabGroupChoices,v=g.setTabGroupChoices,b=(0,a.useState)(h),k=b[0],w=b[1],N=[];if(null!=d){var T=y[d];null!=T&&T!==k&&f.some((function(e){return e.value===T}))&&w(T)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=f[n].value;w(a),null!=d&&(v(d,a),setTimeout((function(){var e,n,a,i,r,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,r=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&r<=u&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case"ArrowLeft":var i=N.indexOf(e.target)-1;n=N[i]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},c)},f.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,a.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},1521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(5064),l=n(8215),s={sidebar_position:2},u="\ud83e\udd13 Reading from Files",p={unversionedId:"python/file-input-output/reading-files",id:"python/file-input-output/reading-files",isDocsHomePage:!1,title:"\ud83e\udd13 Reading from Files",description:"In this section, we'll be demonstrating different ways to read information from files.",source:"@site/docs/python/file-input-output/reading-files.md",sourceDirName:"python/file-input-output",slug:"/python/file-input-output/reading-files",permalink:"/docs/python/file-input-output/reading-files",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/file-input-output/reading-files.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"pythonSidebar",previous:{title:"\ud83d\uddc3 File Basics",permalink:"/docs/python/file-input-output/file-basics"},next:{title:"\u270d\ufe0f Writing to Files",permalink:"/docs/python/file-input-output/writing-files"}},d=[{value:"Basic Reading",id:"basic-reading",children:[]},{value:"Reading line by line",id:"reading-line-by-line",children:[]}],c={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-reading-from-files"},"\ud83e\udd13 Reading from Files"),(0,r.kt)("p",null,"In this section, we'll be demonstrating different ways to read information from files."),(0,r.kt)("h2",{id:"basic-reading"},"Basic Reading"),(0,r.kt)("p",null,'In your project directory create a text file with the name "testFile.txt" and include the following content.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="testFile.txt"',title:'"testFile.txt"'},"Howdy!\nThis is a test file!\nYou're doing great! :)\n")),(0,r.kt)("p",null,"We can read and print this information using the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," function as shown below. The ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," function  by default will return all the contents of a file."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Opening a file\nmyFile = open("testFile.txt", "r")  # allows reading from a file\n\n# Reading from a file\nprint(myFile.read())\n'))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Howdy!\nThis is a test file!\nYou're doing great! :)\n")))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If a file with the given filename doesn't exist, an error will be thrown since you can't read from a file that doesn't exist."))),(0,r.kt)("p",null,"You can also read a specific amount of characters by specifying a number in the ",(0,r.kt)("inlineCode",{parentName:"p"},"read")," function as shown below: "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Opening a file\nmyFile = open("testFile.txt", "r")  # allows reading from a file\n\n# Reading 11 characters from a file\nprint(myFile.read(11))\n'))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Howdy!\nThis\n")))),(0,r.kt)("h2",{id:"reading-line-by-line"},"Reading line by line"),(0,r.kt)("p",null,"Using the same test file, we can manually read the file line by line using the ",(0,r.kt)("inlineCode",{parentName:"p"},"readline")," function."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Opening a file\nmyFile = open("testFile.txt", "r")  # allows reading from a file\n\n# Reads the first line\nprint("Line 1:\\n", myFile.readline())\n\n# Reads the second line\nprint("Line 2:\\n", myFile.readline())\n\n# Reads the third line\nprint("Line 13:\\n", myFile.readline())\n'))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Line 1:\nHowdy!\nLine 2:\nThis is a test file!\nLine 3:\nYou're doing great! :)\n")))),(0,r.kt)("p",null,"There is a much better way of doing this that is very handy for reading large files. We can use a special version of a ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," loop that reads a file line by line until it reaches the end."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Opening a file\nmyFile = open("testFile.txt", "r")  # allows reading from a file\n\n# Reading line by line\nfor line in myFile:\n    print(line)\n'))),(0,r.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Howdy!\n\nThis is a test file!\n\nYou're doing great! :)\n\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'There is additional empty lines between each line due to the default "\\n" produced my the print statment. You can removed this by using this print statment: ',(0,r.kt)("inlineCode",{parentName:"p"},'print(line, end="")')))))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);