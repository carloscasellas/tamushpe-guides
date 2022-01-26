"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[4014],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i={sidebar_position:3},l="\ud83c\udfe0 Home/Landing Page",s={unversionedId:"personal-website/Week 2/home",id:"personal-website/Week 2/home",isDocsHomePage:!1,title:"\ud83c\udfe0 Home/Landing Page",description:"\ud83d\udcaf The Body",source:"@site/docs/personal-website/Week 2/home.md",sourceDirName:"personal-website/Week 2",slug:"/personal-website/Week 2/home",permalink:"/tamushpe-guides/docs/personal-website/Week 2/home",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/personal-website/Week 2/home.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"personalWebsiteSidebar",previous:{title:"\ud83e\udded Navigation bar",permalink:"/tamushpe-guides/docs/personal-website/Week 2/navbar"},next:{title:"\ud83e\uddb6\ud83c\udffd Footer",permalink:"/tamushpe-guides/docs/personal-website/Week 2/footer"}},c=[{value:"\ud83d\udcaf The Body",id:"-the-body",children:[{value:"\ud83c\udf89 Congratulations! You have completed this section \ud83e\udd73",id:"-congratulations-you-have-completed-this-section-\ud83e\udd73",children:[]}]}],p={toc:c};function d(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-homelanding-page"},"\ud83c\udfe0 Home/Landing Page"),(0,o.kt)("h2",{id:"-the-body"},"\ud83d\udcaf The Body"),(0,o.kt)("p",null,"Now go back to the index.html file on VSCode to edit it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Background image"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"In order to add a background picture, create a ",(0,o.kt)("inlineCode",{parentName:"li"},'<div class="background-pic">...</div>'),', where "..." is going to be whatever we want inside the landing page (for now, we have the navbar, but we will have our names, classification, majors, etc.)',(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"We add a class in order to style it on the style.css file"),(0,o.kt)("li",{parentName:"ol"},"Style the background picture in ",(0,o.kt)("inlineCode",{parentName:"li"},"style.css")," file\nin order to style something, we use the following format:\n",(0,o.kt)("inlineCode",{parentName:"li"},".NAME_OF_CLASS{ styling goes here}")),(0,o.kt)("li",{parentName:"ol"},"In our case, the style.css file  would look as such")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-css"},"body {\n    background-image: url('img/background.png');\n    height: 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n")),"Note: ",(0,o.kt)("inlineCode",{parentName:"li"},"background-image: url(img/background.jpg);")," in the code above should have the path to your picture in your folder. It can be either a jpg, gif, or jpeg file.")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"helpful links: ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3schools.com/html/html_images_background.asp"},"https://www.w3schools.com/html/html_images_background.asp")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add name, classifications, etc using a div blocks; format text on the style sheet using padding, color, etc. For example, Eddie's snapshot is added below:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To add to ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," after the ",(0,o.kt)("inlineCode",{parentName:"p"},"</nav>")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<div class="text-center align-self-center">\n    <p class="name text-center h1">Name</p>\n    <p class="text-center h1 backtext">University & Class Name</p>\n    <p class="text-center h2 backtext">Major</p>\n</div>\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To add to ",(0,o.kt)("inlineCode",{parentName:"p"},"styles.css")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},".name {\n    font-size: 75px;\n    color: white;\n    padding-top: 12%;\n    padding-bottom: 0%;\n    font-family: 'Oswald', sans-serif;\n}\n\n.backtext {\n        font-family: 'Open Sans', sans-serif;\n        font-size: 50px;\n        color:white;\n        font-family: 'Oswald', sans-serif;\n        margin: 0;\n}\n")))))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"eddie&#39;s",src:n(367).Z})),(0,o.kt)("p",null,"Explanation of classes used above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'class = "text-center"')," centers the text in the ",(0,o.kt)("inlineCode",{parentName:"li"},"<p>")," block"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'class = "name" / "backtext"')," are classes I created to format in the style.css file separately from the other classes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'class = "h1" / "h2"')," increases and decreases the size of the font"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'id = "maroon"')," is an ID class I created to format in the style.css file separately from all others (you can only have one id in every file)"),(0,o.kt)("li",{parentName:"ul"},"padding controls the whitespace corresponding to the block")),(0,o.kt)("h3",{id:"-congratulations-you-have-completed-this-section-\ud83e\udd73"},"\ud83c\udf89 Congratulations! You have completed this section \ud83e\udd73"))}d.isMDXComponent=!0},367:function(e,t,n){t.Z=n.p+"assets/images/eddie-code-8575ca80be94877e3bf462c823bdc8c5.png"}}]);