(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),c=n(4651),s=n(7426);var u={};function l(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,h=f.as,m=e.children,p=e.replace,v=e.shallow,j=e.scroll,g=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var x=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,b=s.useIntersection({rootMargin:"200px"}),y=r(b,2),_=y[0],w=y[1],k=a.default.useCallback((function(e){_(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,_]);a.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof g?g:o&&o.locale,r=u[d+"%"+h+(t?"%"+t:"")];e&&!r&&l(o,d,h,{locale:t})}),[h,d,w,g,n,o]);var I={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:c}))}(e,o,d,h,p,v,j,g)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof g?g:o&&o.locale,L=o&&o.isLocaleDomain&&i.getDomainLocale(h,M,o&&o.locales,o&&o.domainLocales);I.href=L||i.addBasePath(i.addLocale(h,M,o&&o.defaultLocale))}return a.default.cloneElement(t,I)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,s=o.useRef(),u=o.useState(!1),l=r(u,2),f=l[0],d=l[1],h=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[h,f]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var c=new Map},6277:function(e,t,n){"use strict";n.d(t,{A:function(){return x}});var r=n(5893),o=n(7294),a=n(9008),i=n(431),c=n.n(i),s=n(5750),u=n.n(s),l=n(1664),f=function(){return(0,r.jsx)("header",{className:u().header,children:(0,r.jsxs)("div",{className:u().content,children:[(0,r.jsx)("h1",{children:(0,r.jsx)(l.default,{href:"/",passHref:!0,children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{alt:"Frontend Expert Team Logo",width:"200",height:"78",src:"/logo.png"})})})}),(0,r.jsx)("nav",{className:u().navigation,children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(l.default,{href:"/members",children:"Members"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l.default,{href:"/posts",children:"Posts"})})]})})]})})},d=n(2398),h=n.n(d),m=function(){return(0,r.jsx)("footer",{className:h().footer,children:(0,r.jsxs)("div",{className:h().content,children:[(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://cybozu.co.jp/",children:"\u30b5\u30a4\u30dc\u30a6\u30ba \u4f01\u696d\u60c5\u5831"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://www.cybozu.com/jp/",children:"cybozu.com"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://blog.cybozu.io/",children:"\u30b5\u30a4\u30dc\u30a6\u30ba\u30a8\u30f3\u30b8\u30cb\u30a2\u306e\u30d6\u30ed\u30b0 Cybozu Inside Out"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://tech.cybozu.io/",children:"Cybozu Tech"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://cybozu.co.jp/company/job/recruitment/",children:"\u63a1\u7528\u60c5\u5831"})})]}),(0,r.jsx)("small",{children:"Copyright \xa9 Cybozu, Inc."})]})})},p="\u30b5\u30a4\u30dc\u30a6\u30ba \u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u30c1\u30fc\u30e0",v="https://cybozu.github.io/frontend-expert",j=p;var g=v+"/ogp/ogp.jpg";var x=function(e){var t=e.children,n=e.title,i=e.slug,s=e.description,u=function(e){return(0,o.useMemo)((function(){return e?"".concat(e," | ").concat(j):j}),[e])}(n),l=function(e){return(0,o.useMemo)((function(){return e?v+"/ogp/posts/"+e+".jpg":g}),[e])}(i),d=(0,o.useMemo)((function(){return null!==s&&void 0!==s?s:"Website by Cybozu Frontend Expert Team"}),[s]);return(0,r.jsxs)("div",{className:c().layout,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:u}),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"description",content:d}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:u}),(0,r.jsx)("meta",{name:"twitter:description",content:d}),(0,r.jsx)("meta",{name:"twitter:image ",content:g}),(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"og:title",content:u}),(0,r.jsx)("meta",{property:"og:site_name",content:p}),(0,r.jsx)("meta",{property:"og:description",content:d}),(0,r.jsx)("meta",{property:"og:image",content:l}),(0,r.jsx)("link",{rel:"alternate",type:"application/atom+xml",title:"Atom Feed",href:"/feeds/atom.xml"})]}),(0,r.jsx)(f,{}),(0,r.jsx)("main",{className:c().main,children:(0,r.jsx)("div",{className:c().content,children:t})}),(0,r.jsx)(m,{})]})}},7546:function(e,t,n){"use strict";n.d(t,{g:function(){return a}});var r=n(5893),o=n(7044),a=function(e){var t=e.width,n=e.height,a=e.name;return(0,r.jsx)("img",{src:(0,o.RB)(a),alt:"".concat(a," icon"),width:t,height:n})}},7044:function(e,t,n){"use strict";n.d(t,{HM:function(){return o},Ew:function(){return a},RB:function(){return i}});var r=[{name:"koba04",twitterId:"koba04",githubUsername:"koba04",active:!0},{name:"sakito",twitterId:"__sakito__",githubUsername:"sakito21",active:!0},{name:"shisama",twitterId:"shisama_",githubUsername:"shisama",active:!0},{name:"nakajmg",twitterId:"nakajmg",githubUsername:"nakajmg",active:!0},{name:"BaHo",twitterId:"b4h0_c4t",githubUsername:"b4h0-c4t",active:!0},{name:"sosukesuzuki",twitterId:"__sosukesuzuki",githubUsername:"sosukesuzuki",active:!0},{name:"mugi",twitterId:"mugi_uno",githubUsername:"mugi-uno",active:!0}],o=r.filter((function(e){return e.active}));function a(e){var t=r.find((function(t){return t.name===e}));if(void 0===t)throw new Error("Invalid member name ".concat(e));return t}function i(e){return function(e){return r.every((function(t){return t.name!==e}))}(e)?"/guest-icons/".concat(e,".jpg"):"/member-icons/".concat(e,".jpg")}},2398:function(e){e.exports={footer:"Footer_footer__2epqf",content:"Footer_content__3ovcH"}},5750:function(e){e.exports={header:"Header_header__91Nua",content:"Header_content__JIbnm",navigation:"Header_navigation__2pqVF"}},431:function(e){e.exports={layout:"Layout_layout__3Ma1v",main:"Layout_main__3t9q9",content:"Layout_content__2clJn"}},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}}]);