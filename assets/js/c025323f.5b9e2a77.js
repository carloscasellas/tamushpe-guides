"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[4669],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(m,l(l({ref:t},c),{},{components:n})):i.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var u=2;u<a;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(7294),o=n(6010),a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var i=n(3117),o=n(7294),a=n(6010),l=n(2389),r=n(7392),s=n(7094),u=n(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:f,values:m,groupId:h,className:y}=e,b=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:b.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),v=(0,r.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===f?f:null!=(t=null!=f?f:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:O}=(0,s.U)(),[N,T]=(0,o.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==N&&g.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),i=g[n].value;i!==N&&(P(t),T(i),null!=h&&O(h,String(i)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var i;const t=x.indexOf(e.currentTarget)+1;n=null!=(i=x[t])?i:x[0];break}case"ArrowLeft":{var o;const t=x.indexOf(e.currentTarget)-1;n=null!=(o=x[t])?o:x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},y)},g.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,i.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:C,onClick:C},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,o.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function f(e){const t=(0,l.Z)();return o.createElement(d,(0,i.Z)({key:String(t)},e))}},3225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return p}});var i=n(3117),o=(n(7294),n(3905)),a=n(5488),l=n(5162);const r={sidebar_position:1},s="\ud83d\uddc3 File Basics",u={unversionedId:"python/file-input-output/file-basics",id:"python/file-input-output/file-basics",title:"\ud83d\uddc3 File Basics",description:"One of the most common uses of Python is to read and write data to a file. Whether you're collecting sensor data in an engineering lab or , you will probably find yourself using Python to make this process easier. In this section, we'll be diving into the details of how to analyze and manipulate files using Python.",source:"@site/docs/python/file-input-output/file-basics.md",sourceDirName:"python/file-input-output",slug:"/python/file-input-output/file-basics",permalink:"/docs/python/file-input-output/file-basics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/python/file-input-output/file-basics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"pythonSidebar",previous:{title:"while-loops",permalink:"/docs/python/loops/while-loops"},next:{title:"\ud83e\udd13 Reading from Files",permalink:"/docs/python/file-input-output/reading-files"}},c={},p=[{value:"High Level Overview",id:"high-level-overview",level:2},{value:"Opening a file",id:"opening-a-file",level:2},{value:"Permissions",id:"permissions",level:3},{value:"Closing a file",id:"closing-a-file",level:2}],d={toc:p};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-file-basics"},"\ud83d\uddc3 File Basics"),(0,o.kt)("p",null,"One of the most common uses of Python is to read and write data to a file. Whether you're collecting sensor data in an engineering lab or , you will probably find yourself using Python to make this process easier. In this section, we'll be diving into the details of how to analyze and manipulate files using Python."),(0,o.kt)("h2",{id:"high-level-overview"},"High Level Overview"),(0,o.kt)("p",null,"When using files in Python there is a systematic process you'll always follow to achieve your goal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. Open your file\n2. Do something to the file:\n    (a) Read whats in the file\n    (b) Write something to the file\n    (c) Or a combination of both\n3. Close the file!\n")),(0,o.kt)("h2",{id:"opening-a-file"},"Opening a file"),(0,o.kt)("p",null,"Before we open a file, we need to ensure that it exists in our directory, so download this file and make sure you copy it to your project folder. Next, we can use Python to open the file using the following code: "),(0,o.kt)(a.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Mac",label:"Mac",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# This opens a file called "testFile.txt"\nmyFile = open("testFile.txt")\n'))),(0,o.kt)(l.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# This opens a file called "testFile.txt"\nmyFile = open("::testFile.txt")\n')))),(0,o.kt)("p",null,"After this line of code, ",(0,o.kt)("inlineCode",{parentName:"p"},"myFile")," is assigned to a file object that can be used to read and write to the test file."),(0,o.kt)("h3",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"The default permissions only include the ability to read a file; however, we can change this by adding a second parameter to our open function. The most common permissions are ",(0,o.kt)("inlineCode",{parentName:"p"},"r")," for read, ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," for write, and ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," for append. The difference between ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is that with ",(0,o.kt)("inlineCode",{parentName:"p"},"w")," you can edit anything in the file and ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is stricty for adding to the end of a file. You may also combine permissions by including multiple letters."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# These are the different permissions\nmyFile = open("testFile.txt", "r")  # allows reading from a file\nmyFile = open("testFile.txt", "w")  # allows reading to a file\nmyFile = open("testFile.txt", "a")  # allows appending to a file\nmyFile = open("testFile.txt", "rw") # allows reading and writing\n')),(0,o.kt)("h2",{id:"closing-a-file"},"Closing a file"),(0,o.kt)("p",null,"When writing to a file, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," method to tell Python we're done using a file object. Python can then\ndecide to stop tracking resources related to the file object. Below is an example of how to close a file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Closes the file related to the myFile object\nmyFile.close()\n")))}f.isMDXComponent=!0}}]);