"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[3408],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(b,i(i({ref:a},p),{},{components:t})):n.createElement(b,i({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6700:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i={sidebar_position:2},l="\ud83e\udded Navigation bar",s={unversionedId:"personal-website/Week 2/navbar",id:"personal-website/Week 2/navbar",isDocsHomePage:!1,title:"\ud83e\udded Navigation bar",description:"\ud83e\udd7e Bootstrap",source:"@site/docs/personal-website/Week 2/navbar.md",sourceDirName:"personal-website/Week 2",slug:"/personal-website/Week 2/navbar",permalink:"/docs/personal-website/Week 2/navbar",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/personal-website/Week 2/navbar.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"personalWebsiteSidebar",previous:{title:"\ud83d\udd25 Welcome to Week 2! \ud83d\udd25",permalink:"/docs/personal-website/Week 2/welcome"},next:{title:"\ud83c\udfe0 Home/Landing Page",permalink:"/docs/personal-website/Week 2/home"}},c=[{value:"\ud83e\udd7e Bootstrap",id:"\ud83e\udd7e-bootstrap",children:[]},{value:"\ud83e\udd73 Ta-da! You have made a navigation bar and edited it to your liking!",id:"\ud83e\udd73-ta-da-you-have-made-a-navigation-bar-and-edited-it-to-your-liking",children:[{value:"\ud83c\udf89 Congratulations! You have completed this section \ud83e\udd73",id:"-congratulations-you-have-completed-this-section-\ud83e\udd73",children:[]}]}],p={toc:c};function d(e){var a=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ud83e\udded-navigation-bar"},"\ud83e\udded Navigation bar"),(0,o.kt)("h2",{id:"\ud83e\udd7e-bootstrap"},"\ud83e\udd7e Bootstrap"),(0,o.kt)("p",null,"Since we will be working with Boostrap, they have available Navigation (Nav) Bar sections ",(0,o.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.0/components/navbar/"},"HERE"),". You are also able to view other Bootstrap documentation and guidance."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Head on to the link above to view the several nav bar snippets, copy and paste one to your code in the ",(0,o.kt)("inlineCode",{parentName:"li"},"<body></body>"),' section, over the "Howdy" header. Below is a sample you can copy and paste there.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<nav class="navbar navbar-expand-lg navbar-light bg-light">\n  <a class="navbar-brand" href="#">Navbar</a>\n  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" id="navbarNavDropdown">\n    <ul class="navbar-nav">\n      <li class="nav-item active">\n        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Features</a>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" href="#">Pricing</a>\n      </li>\n      <li class="nav-item dropdown">\n        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n          Dropdown link\n        </a>\n        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">\n          <a class="dropdown-item" href="#">Action</a>\n          <a class="dropdown-item" href="#">Another action</a>\n          <a class="dropdown-item" href="#">Something else here</a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n')),(0,o.kt)("p",null,"You can go ahead and view how it looks by clicking the index.html file in your folder. Example below of how it should look like as of now:\n",(0,o.kt)("img",{alt:"beginning",src:t(43).Z})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'At this point you might be wondering, "',(0,o.kt)("em",{parentName:"li"},"what the heck did I just copy and paste?"),'" \ud83e\udd14 "',(0,o.kt)("em",{parentName:"li"},"Ew, I want to get rid of the Features and Pricing tab on my nav bar-- I'm not for sale!"),"\" Well we'll tell you. You can edit...",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcce The titles and links of your navbar tabs here:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Head on to the `",(0,o.kt)("inlineCode",{parentName:"li"},"<a></a>")," tabs, there you will see",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<a class="nav-link" href="#">Features</a>\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"class"),": ",(0,o.kt)("em",{parentName:"li"},"The class is an attribute which specifies one or more class names for an HTML element.")," Basically, classes tell Bootstrap ",(0,o.kt)("em",{parentName:"li"},'"ayo, this is a ---"'),", in this case, nav bar link (nav-link) "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"href"),": ",(0,o.kt)("em",{parentName:"li"},'"specifies the URL of the page the link goes to. If the href attribute is not present, the ',(0,o.kt)("inlineCode",{parentName:"em"},"<a>"),' tag will not be a hyperlink."'),". The snippet used #, which is a good replacement for when you don't have a link. "))),(0,o.kt)("li",{parentName:"ul"},"\ud83c\udfa8 The colors of the nav bar:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For now, we'll keep it simple. In your nav tab you can see this",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<nav class="navbar navbar-expand-lg navbar-light bg-light">\n'))),(0,o.kt)("li",{parentName:"ul"},"You are able to change it to dark by replacing the class attributes (fancy words for whatever belongs to the class) to this",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<nav class="navbar navbar-dark bg-dark">\n')),"or if you want to be a bit extra, you can customize it to any color",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<nav class="navbar navbar-light" style="background-color: #e3f2fd;">\n'))))))),(0,o.kt)("li",{parentName:"ol"},"Replace the titles in order to have your components. If you want to add one, copy and paste a ",(0,o.kt)("inlineCode",{parentName:"li"},"<li></li>")," (List Item) section. Components needed: Home, About, Projects, Involvement, and Resume page. For now, we will leave the nav bar href navbar items as #. ")),(0,o.kt)("h2",{id:"\ud83e\udd73-ta-da-you-have-made-a-navigation-bar-and-edited-it-to-your-liking"},"\ud83e\udd73 Ta-da! You have made a navigation bar and edited it to your liking!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\ud83d\udca1: You should comment your code to make it more readable\n    you make a comment by enclosing everything you want \n    to comment inside  "<!\u2014 comment goes here \u2014>")\n')),(0,o.kt)("h3",{id:"-congratulations-you-have-completed-this-section-\ud83e\udd73"},"\ud83c\udf89 Congratulations! You have completed this section \ud83e\udd73"))}d.isMDXComponent=!0},43:function(e,a,t){a.Z=t.p+"assets/images/beg-nav-53f2b14a60a85e09ec2251f223df2a65.png"}}]);