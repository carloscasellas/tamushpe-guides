"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[4669],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||r;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){var i=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(7294),o=n(9443);var r=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(6010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=function(e){var t,n=e.lazy,o=e.block,u=e.defaultValue,c=e.values,p=e.groupId,f=e.className,d=i.Children.toArray(e.children),m=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,y=r(),g=y.tabGroupChoices,b=y.setTabGroupChoices,v=(0,i.useState)(h),w=v[0],k=v[1],O=[];if(null!=p){var x=g[p];null!=x&&x!==w&&m.some((function(e){return e.value===x}))&&k(x)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),i=m[n].value;k(i),null!=p&&(b(p,i),setTimeout((function(){var e,n,i,o,r,a,l,u;(e=t.getBoundingClientRect(),n=e.top,i=e.left,o=e.bottom,r=e.right,a=window,l=a.innerHeight,u=a.innerWidth,n>=0&&r<=u&&o<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var i=O.indexOf(e.target)+1;n=O[i]||O[0];break;case"ArrowLeft":var o=O.indexOf(e.target)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},f)},m.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,a.Z)("tabs__item",l,{"tabs__item--active":w===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:N,onClick:N},null!=n?n:t)}))),n?(0,i.cloneElement)(d.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,n){var i=(0,n(7294).createContext)(void 0);t.Z=i},3225:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),o=n(3366),r=(n(7294),n(3905)),a=n(5064),l=n(8215),s={sidebar_position:1},u="\ud83d\uddc3 File Basics",c={unversionedId:"python/file-input-output/file-basics",id:"python/file-input-output/file-basics",isDocsHomePage:!1,title:"\ud83d\uddc3 File Basics",description:"One of the most common uses of Python is to read and write data to a file. Whether you're collecting sensor data in an engineering lab or , you will probably find yourself using Python to make this process easier. In this section, we'll be diving into the details of how to analyze and manipulate files using Python.",source:"@site/docs/python/file-input-output/file-basics.md",sourceDirName:"python/file-input-output",slug:"/python/file-input-output/file-basics",permalink:"/tamushpe-guides/docs/python/file-input-output/file-basics",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/file-input-output/file-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"pythonSidebar",previous:{title:"while-loops",permalink:"/tamushpe-guides/docs/python/loops/while-loops"},next:{title:"\ud83e\udd13 Reading from Files",permalink:"/tamushpe-guides/docs/python/file-input-output/reading-files"}},p=[{value:"High Level Overview",id:"high-level-overview",children:[]},{value:"Opening a file",id:"opening-a-file",children:[{value:"Permissions",id:"permissions",children:[]}]},{value:"Closing a file",id:"closing-a-file",children:[]}],f={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-file-basics"},"\ud83d\uddc3 File Basics"),(0,r.kt)("p",null,"One of the most common uses of Python is to read and write data to a file. Whether you're collecting sensor data in an engineering lab or , you will probably find yourself using Python to make this process easier. In this section, we'll be diving into the details of how to analyze and manipulate files using Python."),(0,r.kt)("h2",{id:"high-level-overview"},"High Level Overview"),(0,r.kt)("p",null,"When using files in Python there is a systematic process you'll always follow to achieve your goal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. Open your file\n2. Do something to the file:\n    (a) Read whats in the file\n    (b) Write something to the file\n    (c) Or a combination of both\n3. Close the file!\n")),(0,r.kt)("h2",{id:"opening-a-file"},"Opening a file"),(0,r.kt)("p",null,"Before we open a file, we need to ensure that it exists in our directory, so download this file and make sure you copy it to your project folder. Next, we can use Python to open the file using the following code: "),(0,r.kt)(a.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Mac",label:"Mac",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# This opens a file called "testFile.txt"\nmyFile = open("testFile.txt")\n'))),(0,r.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# This opens a file called "testFile.txt"\nmyFile = open("::testFile.txt")\n')))),(0,r.kt)("p",null,"After this line of code, ",(0,r.kt)("inlineCode",{parentName:"p"},"myFile")," is assigned to a file object that can be used to read and write to the test file."),(0,r.kt)("h3",{id:"permissions"},"Permissions"),(0,r.kt)("p",null,"The default permissions only include the ability to read a file; however, we can change this by adding a second parameter to our open function. The most common permissions are ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," for read, ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," for write, and ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," for append. The difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," is that with ",(0,r.kt)("inlineCode",{parentName:"p"},"w")," you can edit anything in the file and ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," is stricty for adding to the end of a file. You may also combine permissions by including multiple letters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# These are the different permissions\nmyFile = open("testFile.txt", "r")  # allows reading from a file\nmyFile = open("testFile.txt", "w")  # allows reading to a file\nmyFile = open("testFile.txt", "a")  # allows appending to a file\nmyFile = open("testFile.txt", "rw") # allows reading and writing\n')),(0,r.kt)("h2",{id:"closing-a-file"},"Closing a file"),(0,r.kt)("p",null,"When writing to a file, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," method to tell Python we're done using a file object. Python can then\ndecide to stop tracking resources related to the file object. Below is an example of how to close a file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Closes the file related to the myFile object\nmyFile.close()\n")))}d.isMDXComponent=!0},6010:function(e,t,n){function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);