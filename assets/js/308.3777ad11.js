"use strict";(self.webpackChunktamushpe_guides=self.webpackChunktamushpe_guides||[]).push([[308],{1875:function(e,t){t.Z=function(){return null}},8617:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r="iconExternalLink_3J9K",l=function(e){var t=e.width,n=void 0===t?13.5:t,l=e.height,o=void 0===l?13.5:l;return a.createElement("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},308:function(e,t,n){n.d(t,{Z:function(){return we}});var a=n(7294),r=n(6010),l=n(5977),o=n(4973),c=n(941),i="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,a.useRef)(null),t=(0,l.k6)().action;return(0,c.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&s(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:i,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m=n(7462),d=n(3366);function f(e){var t=e.width,n=void 0===t?20:t,r=e.height,l=void 0===r?20:r,o=e.className,c=(0,d.Z)(e,["width","height","className"]);return a.createElement("svg",(0,m.Z)({className:o,viewBox:"0 0 24 24",width:n,height:l,fill:"currentColor"},c),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}var v="announcementBar_3WsW",h="announcementBarPlaceholder_2m9F",b="announcementBarClose_38nx",g="announcementBarContent_3EUC";var E=function(){var e=(0,c.nT)(),t=e.isClosed,n=e.close,l=(0,c.LU)().announcementBar;if(!l)return null;var i=l.content,s=l.backgroundColor,u=l.textColor,m=l.isCloseable;return!i||m&&t?null:a.createElement("div",{className:v,style:{backgroundColor:s,color:u},role:"banner"},m&&a.createElement("div",{className:h}),a.createElement("div",{className:g,dangerouslySetInnerHTML:{__html:i}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",b),onClick:n,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(f,{width:14,height:14})):null)},p=n(1875),Z=n(2389),k={toggle:"toggle_71bT"},_=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.dark),style:n},t)},w=function(e){var t=e.icon,n=e.style;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.light),style:n},t)},N=(0,a.memo)((function(e){var t=e.className,n=e.icons,l=e.checked,o=e.disabled,c=e.onChange,i=(0,a.useState)(l),s=i[0],u=i[1],m=(0,a.useState)(!1),d=m[0],f=m[1],v=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function y(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,r=t.darkIconStyle,l=t.lightIcon,o=t.lightIconStyle,i=(0,Z.Z)();return a.createElement(N,(0,m.Z)({disabled:!i,icons:{checked:a.createElement(_,{icon:n,style:r}),unchecked:a.createElement(w,{icon:l,style:o})}},e))}var C=n(5350),I=n(7898),L=function(e){var t=(0,l.TH)(),n=(0,a.useState)(e),r=n[0],o=n[1],i=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],m=s[1],d=(0,a.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,I.Z)((function(t,n){var a=t.scrollY,r=null==n?void 0:n.scrollY;if(e)if(a<u)o(!0);else{if(i.current)return i.current=!1,void o(!1);r&&0===a&&o(!0);var l=document.documentElement.scrollHeight-u,c=window.innerHeight;r&&a>=r?o(!1):a+c<l&&o(!0)}}),[u,i]),(0,c.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(i.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:r}};var D=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},S=n(3783),T=n(907),B=n(7819),x=n(5537),A=function(e){var t=e.width,n=void 0===t?30:t,r=e.height,l=void 0===r?30:r,o=e.className,c=(0,d.Z)(e,["width","height","className"]);return a.createElement("svg",(0,m.Z)({className:o,width:n,height:l,viewBox:"0 0 30 30","aria-hidden":"true"},c),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function U(e){var t=e.width,n=void 0===t?20:t,r=e.height,l=void 0===r?20:r,o=e.className,c=(0,d.Z)(e,["width","height","className"]);return a.createElement("svg",(0,m.Z)({className:o,viewBox:"0 0 413.348 413.348",width:n,height:l,fill:"currentColor"},c),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}var M="toggle_3Zt9",P="navbarHideable_2qcr",R="navbarHidden_3yey",H="navbarSidebarToggle_wkoY",V="navbarSidebarCloseSvg_2XuS",z="right";function W(){return(0,c.LU)().navbar.items}function O(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,C.Z)(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?l():r()}),[r,l]),disabled:e}}function F(e){var t=e.sidebarShown,n=e.toggleSidebar;D(t);var l=W(),i=O(),s=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,l=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),o=(0,c.D9)(l),i=(0,a.useState)((function(){return!1})),s=i[0],u=i[1];(0,a.useEffect)((function(){l&&!o&&u(!0)}),[l,o]);var m=!!l;return(0,a.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:l}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!i.disabled&&a.createElement(y,{className:H,checked:i.isDarkTheme,onChange:i.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(U,{width:20,height:20,className:V}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return a.createElement(B.Z,(0,m.Z)({mobile:!0},e,{onClick:n,key:t}))})))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var G=function(){var e,t=(0,c.LU)().navbar,n=t.hideOnScroll,l=t.style,o=function(){var e=(0,S.Z)(),t="mobile"===e,n=(0,a.useState)(!1),r=n[0],l=n[1];(0,c.Rb)((function(){r&&l(!1)}));var o=(0,a.useCallback)((function(){l((function(e){return!e}))}),[]);return(0,a.useEffect)((function(){"desktop"===e&&l(!1)}),[e]),{shouldRender:t,toggle:o,shown:r}}(),i=O(),s=(0,T.gA)(),u=L(n),d=u.navbarRef,f=u.isNavbarVisible,v=W(),h=v.some((function(e){return"search"===e.type})),b=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:z)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:z)}))}}(v),g=b.leftItems,E=b.rightItems;return a.createElement("nav",{ref:d,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===l,"navbar--primary":"primary"===l,"navbar-sidebar--show":o.shown},e[P]=n,e[R]=n&&!f,e))},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},((null==v?void 0:v.length)>0||s)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:o.toggle,onKeyDown:o.toggle},a.createElement(A,null)),a.createElement(x.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),g.map((function(e,t){return a.createElement(B.Z,(0,m.Z)({},e,{key:t}))}))),a.createElement("div",{className:"navbar__items navbar__items--right"},E.map((function(e,t){return a.createElement(B.Z,(0,m.Z)({},e,{key:t}))})),!i.disabled&&a.createElement(y,{className:M,checked:i.isDarkTheme,onChange:i.toggle}),!h&&a.createElement(p.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:o.toggle}),o.shouldRender&&a.createElement(F,{sidebarShown:o.shown,toggleSidebar:o.toggle}))},q=n(6742),K=n(4996),Y=n(3919),j="footerLogoLink_MyFc",J=n(8465),Q=n(8617);function X(e){var t=e.to,n=e.href,r=e.label,l=e.prependBaseUrlToHref,o=(0,d.Z)(e,["to","href","label","prependBaseUrlToHref"]),c=(0,K.Z)(t),i=(0,K.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(q.Z,(0,m.Z)({className:"footer__link-item"},n?{href:l?i:n}:{to:c},o),n&&!(0,Y.Z)(n)?a.createElement("span",null,r,a.createElement(Q.Z,null)):r)}var $=function(e){var t=e.sources,n=e.alt;return a.createElement(J.Z,{className:"footer__logo",alt:n,sources:t})};var ee=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,l=t.links,o=void 0===l?[]:l,i=t.logo,s=void 0===i?{}:i,u={light:(0,K.Z)(s.src),dark:(0,K.Z)(s.srcDark||s.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},o&&o.length>0&&a.createElement("div",{className:"row footer__links"},o.map((function(e,t){return a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(X,e))}))):null)}))),(s||n)&&a.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},s.href?a.createElement(q.Z,{href:s.href,className:j},a.createElement($,{alt:s.alt,sources:u})):a.createElement($,{alt:s.alt,sources:u})),n?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},te=n(412),ne=(0,c.WA)("theme"),ae="light",re="dark",le=function(e){return e===re?re:ae},oe=function(e){(0,c.WA)("theme").set(le(e))},ce=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,l=(0,a.useState)(function(e){return te.Z.canUseDOM?le(document.documentElement.getAttribute("data-theme")):le(e)}(t)),o=l[0],i=l[1],s=(0,a.useCallback)((function(){i(ae),oe(ae)}),[]),u=(0,a.useCallback)((function(){i(re),oe(re)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",le(o))}),[o]),(0,a.useEffect)((function(){if(!n)try{var e=ne.get();null!==e&&i(le(e))}catch(t){console.error(t)}}),[i]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;i(t?re:ae)}))}),[]),{isDarkTheme:o===re,setLightTheme:s,setDarkTheme:u}},ie=n(2924);var se=function(e){var t=ce(),n=t.isDarkTheme,r=t.setLightTheme,l=t.setDarkTheme;return a.createElement(ie.Z.Provider,{value:{isDarkTheme:n,setLightTheme:r,setDarkTheme:l}},e.children)},ue="docusaurus.tab.",me=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ue)){var n=t.substring(ue.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},de=n(9443);var fe=function(e){var t=me(),n=t.tabGroupChoices,r=t.setTabGroupChoices;return a.createElement(de.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:r}},e.children)};function ve(e){var t=e.children;return a.createElement(se,null,a.createElement(c.pl,null,a.createElement(fe,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var he=n(9105),be=n(2263);function ge(e){var t=e.locale,n=e.version,r=e.tag;return a.createElement(he.Z,null,t&&a.createElement("meta",{name:"docusaurus_locale",content:t}),n&&a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.createElement("meta",{name:"docusaurus_tag",content:r}))}var Ee=n(1217);function pe(){var e=(0,be.Z)().i18n,t=e.defaultLocale,n=e.locales,r=(0,c.l5)();return a.createElement(he.Z,null,n.map((function(e){return a.createElement("link",{key:e,rel:"alternate",href:r.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),a.createElement("link",{rel:"alternate",href:r.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function Ze(e){var t=e.permalink,n=(0,be.Z)().siteConfig.url,r=function(){var e=(0,be.Z)().siteConfig.url,t=(0,l.TH)().pathname;return e+(0,K.Z)(t)}(),o=t?""+n+t:r;return a.createElement(he.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ke(e){var t=(0,be.Z)(),n=t.siteConfig.favicon,r=t.i18n,l=r.currentLocale,o=r.localeConfigs,i=(0,c.LU)(),s=i.metadatas,u=i.image,d=e.title,f=e.description,v=e.image,h=e.keywords,b=e.searchMetadatas,g=(0,K.Z)(n),E=(0,c.pe)(d),p=l,Z=o[l].direction;return a.createElement(a.Fragment,null,a.createElement(he.Z,null,a.createElement("html",{lang:p,dir:Z}),n&&a.createElement("link",{rel:"shortcut icon",href:g}),a.createElement("title",null,E),a.createElement("meta",{property:"og:title",content:E}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),u&&a.createElement(Ee.Z,{image:u}),v&&a.createElement(Ee.Z,{image:v}),a.createElement(Ee.Z,{description:f,keywords:h}),a.createElement(Ze,null),a.createElement(pe,null),a.createElement(ge,(0,m.Z)({tag:c.HX,locale:l},b)),a.createElement(he.Z,null,s.map((function(e,t){return a.createElement("meta",(0,m.Z)({key:"metadata_"+t},e))}))))}var _e=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var we=function(e){var t=e.children,n=e.noFooter,l=e.wrapperClassName,o=e.pageClassName;return _e(),a.createElement(ve,null,a.createElement(ke,e),a.createElement(u,null),a.createElement(E,null),a.createElement(G,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(ee,null))}},5537:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=n(6742),c=n(8465),i=n(4996),s=n(2263),u=n(941);t.Z=function(e){var t=(0,s.Z)().siteConfig.title,n=(0,u.LU)().navbar,m=n.title,d=n.logo,f=void 0===d?{src:""}:d,v=e.imageClassName,h=e.titleClassName,b=(0,r.Z)(e,["imageClassName","titleClassName"]),g=(0,i.Z)(f.href||"/"),E={light:(0,i.Z)(f.src),dark:(0,i.Z)(f.srcDark||f.src)};return l.createElement(o.Z,(0,a.Z)({to:g},b,f.target&&{target:f.target}),f.src&&l.createElement(c.Z,{className:v,sources:E,alt:f.alt||m||t}),null!=m&&l.createElement("b",{className:h},m))}},5525:function(e,t,n){n.d(t,{O:function(){return d}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),c=n(6742),i=n(4996),s=n(8617),u=n(3919),m=n(7819);function d(e){var t,n=e.activeBasePath,o=e.activeBaseRegex,m=e.to,d=e.href,f=e.label,v=e.activeClassName,h=void 0===v?"":v,b=e.prependBaseUrlToHref,g=(0,r.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),E=(0,i.Z)(m),p=(0,i.Z)(n),Z=(0,i.Z)(d,{forcePrependBaseUrl:!0}),k=f&&d&&!(0,u.Z)(d),_="dropdown__link--active"===h;return l.createElement(c.Z,(0,a.Z)({},d?{href:b?Z:d}:Object.assign({isNavLink:!0,activeClassName:null!=(t=g.className)&&t.includes(h)?"":h,to:E},n||o?{isActive:function(e,t){return o?new RegExp(o).test(t.pathname):t.pathname.startsWith(p)}}:null),g),k?l.createElement("span",null,f,l.createElement(s.Z,_&&{width:12,height:12})):f)}function f(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,i=(0,r.Z)(e,["className","isDropdownItem"]),s=l.createElement(d,(0,a.Z)({className:(0,o.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},i));return c?l.createElement("li",null,s):s}function v(e){var t=e.className,n=(e.isDropdownItem,(0,r.Z)(e,["className","isDropdownItem"]));return l.createElement("li",{className:"menu__list-item"},l.createElement(d,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}t.Z=function(e){var t,n=e.mobile,o=void 0!==n&&n,c=(e.position,(0,r.Z)(e,["mobile","position"])),i=o?v:f;return l.createElement(i,(0,a.Z)({},c,{activeClassName:null!=(t=c.activeClassName)?t:(0,m.E)(o)}))}},6400:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),c=n(907),i=n(6010),s=n(7819),u=n(941),m=n(8780);function d(e){var t,n=e.docId,d=e.label,f=e.docsPluginId,v=(0,r.Z)(e,["docId","label","docsPluginId"]),h=(0,c.Iw)(f),b=h.activeVersion,g=h.activeDoc,E=(0,u.J)(f).preferredVersion,p=(0,c.yW)(f),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,m.uniq)([b,E,p].filter(Boolean)),n),k=(0,s.E)(v.mobile);return l.createElement(o.Z,(0,a.Z)({exact:!0},v,{className:(0,i.Z)(v.className,(t={},t[k]=(null==g?void 0:g.sidebar)&&g.sidebar===Z.sidebar,t)),activeClassName:k,label:null!=d?d:Z.id,to:Z.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),c=n(3154),i=n(907),s=n(941),u=n(4973),m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,b=e.dropdownItemsAfter,g=(0,r.Z)(e,["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"]),E=(0,i.Iw)(f),p=(0,i.gB)(f),Z=(0,i.yW)(f),k=(0,s.J)(f),_=k.preferredVersion,w=k.savePreferredVersionName;var N,y=(N=p.map((function(e){var t=(null==E?void 0:E.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==E?void 0:E.activeVersion)},onClick:function(){w(e.name)}}})),[].concat(h,N,b)),C=null!=(t=null!=(n=E.activeVersion)?n:_)?t:Z,I=d&&y?(0,u.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):C.label,L=d&&y?void 0:m(C).path;return y.length<=1?l.createElement(o.Z,(0,a.Z)({},g,{mobile:d,label:I,to:L,isActive:v?function(){return!1}:void 0})):l.createElement(c.Z,(0,a.Z)({},g,{mobile:d,label:I,to:L,items:y,isActive:v?function(){return!1}:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7462),r=n(3366),l=n(7294),o=n(5525),c=n(907),i=n(941);function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,m=(0,r.Z)(e,["label","to","docsPluginId"]),d=(0,c.zu)(u),f=(0,i.J)(u).preferredVersion,v=(0,c.yW)(u),h=null!=(t=null!=d?d:f)?t:v,b=null!=n?n:h.label,g=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(h).path;return l.createElement(o.Z,(0,a.Z)({},m,{label:b,to:g}))}},3154:function(e,t,n){var a=n(7462),r=n(3366),l=n(7294),o=n(6010),c=n(941),i=n(5525),s=n(7819);function u(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function m(e){var t,n=e.items,c=e.position,u=e.className,m=(0,r.Z)(e,["items","position","className"]),d=(0,l.useRef)(null),f=(0,l.useRef)(null),v=(0,l.useState)(!1),h=v[0],b=v[1];return(0,l.useEffect)((function(){var e=function(e){d.current&&!d.current.contains(e.target)&&b(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[d]),l.createElement("div",{ref:d,className:(0,o.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":h})},l.createElement(i.O,(0,a.Z)({className:(0,o.Z)("navbar__link",u)},m,{onClick:m.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),b(!h))}}),null!=(t=m.children)?t:m.label),l.createElement("ul",{ref:f,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),b(!1);var a=d.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function d(e){var t,n=e.items,m=e.className,d=(e.position,(0,r.Z)(e,["items","className","position"])),f=(0,c.be)(),v=u(n,f),h=(0,c.uR)({initialState:function(){return!v}}),b=h.collapsed,g=h.toggleCollapsed,E=h.setCollapsed;return(0,l.useEffect)((function(){v&&E(!v)}),[f,v]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":b})},l.createElement(i.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",m)},d,{onClick:function(e){e.preventDefault(),g()}}),null!=(t=d.children)?t:d.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:b},n.map((function(e,t){return l.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,["mobile"]),o=n?d:m;return l.createElement(o,a)}},7819:function(e,t,n){n.d(t,{Z:function(){return g},E:function(){return b}});var a=n(3366),r=n(7294),l=n(5525),o=n(3154),c=n(7462),i=function(e){var t=e.width,n=void 0===t?20:t,l=e.height,o=void 0===l?20:l,i=(0,a.Z)(e,["width","height"]);return r.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:o,"aria-hidden":"true"},i),r.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},s=n(2263),u=n(941),m="iconLanguage_3vod";function d(e){var t=e.mobile,n=e.dropdownItemsBefore,l=e.dropdownItemsAfter,d=(0,a.Z)(e,["mobile","dropdownItemsBefore","dropdownItemsAfter"]),f=(0,s.Z)().i18n,v=f.currentLocale,h=f.locales,b=f.localeConfigs,g=(0,u.l5)();function E(e){return b[e].label}var p=h.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:E(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),Z=[].concat(n,p,l),k=t?"Languages":E(v);return r.createElement(o.Z,(0,c.Z)({},d,{href:"#",mobile:t,label:r.createElement("span",null,r.createElement(i,{className:m}),r.createElement("span",null,k)),items:Z}))}var f=n(1875);function v(e){return e.mobile?null:r.createElement(f.Z,null)}var h={default:function(){return l.Z},localeDropdown:function(){return d},search:function(){return v},dropdown:function(){return o.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};var b=function(e){return e?"menu__link--active":"navbar__link--active"};function g(e){var t=e.type,n=(0,a.Z)(e,["type"]),l=function(e){var t=h[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return r.createElement(l,n)}},2924:function(e,t,n){var a=n(7294).createContext(void 0);t.Z=a},8465:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(3366),l=n(7294),o=n(6010),c=n(2389),i=n(5350),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=function(e){var t=(0,c.Z)(),n=(0,i.Z)().isDarkTheme,u=e.sources,m=e.className,d=e.alt,f=void 0===d?"":d,v=(0,r.Z)(e,["sources","className","alt"]),h=t?n?["dark"]:["light"]:["light","dark"];return l.createElement(l.Fragment,null,h.map((function(e){return l.createElement("img",(0,a.Z)({key:e,src:u[e],alt:f,className:(0,o.Z)(s.themedImage,s["themedImage--"+e],m)},v))})))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},7898:function(e,t,n){var a=n(7294),r=n(412),l=function(){return r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(l()),r=function(){var t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},5350:function(e,t,n){var a=n(7294),r=n(2924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);