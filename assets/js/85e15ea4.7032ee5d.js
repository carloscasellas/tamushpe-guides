"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[190],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(7294),r=n(9443);var o=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,r=e.block,u=e.defaultValue,c=e.values,p=e.groupId,f=e.className,d=i.Children.toArray(e.children),m=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),v=g.tabGroupChoices,w=g.setTabGroupChoices,y=(0,i.useState)(h),b=y[0],k=y[1],N=[];if(null!=p){var O=v[p];null!=O&&O!==b&&m.some((function(e){return e.value===O}))&&k(O)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),i=m[n].value;k(i),null!=p&&(w(p,i),setTimeout((function(){var e,n,i,r,o,a,l,u;(e=t.getBoundingClientRect(),n=e.top,i=e.left,r=e.bottom,o=e.right,a=window,l=a.innerHeight,u=a.innerWidth,n>=0&&o<=u&&r<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=N.indexOf(e.target)+1;n=N[i]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},f)},m.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:x,onClick:x},null!=n?n:t)}))),n?(0,i.cloneElement)(d.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var i=(0,n(7294).createContext)(void 0);t.Z=i},7096:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=n(5064),l=n(8215),s={sidebar_position:3},u="\u270d\ufe0f Writing to Files",c={unversionedId:"python/file-input-output/writing-files",id:"python/file-input-output/writing-files",isDocsHomePage:!1,title:"\u270d\ufe0f Writing to Files",description:"Knowing how to write to files with Python can be a very useful skill to have in your engineering career. This section covers the basics of writing to files.",source:"@site/docs/python/file-input-output/writing-files.md",sourceDirName:"python/file-input-output",slug:"/python/file-input-output/writing-files",permalink:"/tamushpe-guides/docs/python/file-input-output/writing-files",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/file-input-output/writing-files.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"pythonSidebar",previous:{title:"\ud83e\udd13 Reading from Files",permalink:"/tamushpe-guides/docs/python/file-input-output/reading-files"},next:{title:"Extra Resources",permalink:"/tamushpe-guides/docs/python/resources/resources"}},p=[{value:"Writing basics",id:"writing-basics",children:[]},{value:"Append to a file",id:"append-to-a-file",children:[]}],f={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-writing-to-files"},"\u270d\ufe0f Writing to Files"),(0,o.kt)("p",null,"Knowing how to write to files with Python can be a very useful skill to have in your engineering career. This section covers the basics of writing to files."),(0,o.kt)("h2",{id:"writing-basics"},"Writing basics"),(0,o.kt)("p",null,"We can write and print information to a new file using the ",(0,o.kt)("inlineCode",{parentName:"p"},"write")," function as shown below. In this example, we're overwriting the old content of testFile.txt with a new message. The Python code prints the old content of the file, writes a new message, and then prints the new content of the file. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Old Content of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"testFile.txt")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Howdy!\nThis is a test file!\nYou're doing great! :)\n")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Opening a file\nmyFile = open("testFile.txt", "r+")  # allows reading and writing to a file\n\n# Writing to a file\nmyFile.write("Tech Affairs is awesome!!")\n\n# Reading our new text\nprint(\'\\nNew content:\\n\', myFile.read())\n'))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"New content:\nTech Affairs is awesome!!\n")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a file with the given filename doesn't exist, a new file with that name will be created."))),(0,o.kt)("h2",{id:"append-to-a-file"},"Append to a file"),(0,o.kt)("p",null,"We can see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," permission causes Python to overwrite old content from a file, however, if we want to keep the old information and add on to it, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," permission instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," as shown below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Old Content of")," ",(0,o.kt)("inlineCode",{parentName:"p"},"testFile.txt")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Howdy!\nThis is a test file!\nYou're doing great! :)\n")),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Code",label:"Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Opening a file\nmyFile = open("testFile.txt", "a+")  # allows appending and reading a file\n\n# Writing to the end of a file\nmyFile.write("This is new content!")\n\n# Reading our new text\nprint(\'New content:\\n\', myFile.read())\n'))),(0,o.kt)(l.Z,{value:"Output",label:"Output",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"New content:\nHowdy!\nThis is a test file!\nYou're doing great! :)\nThis is new content!\n")))))}d.isMDXComponent=!0},6010:function(e,t,n){function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);