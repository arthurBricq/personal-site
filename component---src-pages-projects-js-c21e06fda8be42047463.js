(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/b8u":function(e,t,n){var r=n("STAE");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"16l3":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y})),n.d(t,"query",(function(){return m}));n("BIHw"),n("QGkA");var r=n("KQm4"),o=n("q1tI"),i=n.n(o),c=n("LbRr"),a=n("Bl7J"),l=n("Pgy6"),u=n("9eSz"),s=n.n(u),f=n("EqzN"),p=n.n(f);function d(e){var t=e.node,n=e.key,r=Object(o.useState)(!1),c=r[0],a=r[1],u=Object(o.useCallback)((function(){return a(!c)}),[c]);return console.log(t.frontmatter.featuredImage),i.a.createElement("div",{key:n},i.a.createElement("div",{className:p.a.header},i.a.createElement("div",null,i.a.createElement("h2",{className:p.a.projectTitle},t.frontmatter.title),i.a.createElement("ul",{style:{margin:"0px"}},t.frontmatter.keywords.map((function(e,t){return i.a.createElement("li",{className:p.a.keyword,key:t},e)}))),i.a.createElement("p",null,t.frontmatter.description)),t.frontmatter.featuredImage&&i.a.createElement("div",{className:p.a.featuredImage},i.a.createElement(s.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid}))),i.a.createElement(l.Collapse,{isOpened:c},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),i.a.createElement("button",{onClick:u},c?"Hide":"Show more"),i.a.createElement("hr",{className:p.a.hr}))}function y(e){var t=e.data,n=Object(r.a)(new Set(t.allMarkdownRemark.edges.map((function(e){return e.node.frontmatter.keywords})).flat(1))),l=Object(o.useState)(""),u=l[0],s=l[1],f=Object(o.useState)(t.allMarkdownRemark.edges),y=f[0],m=f[1],h=y.map((function(e,t){var n=e.node;return i.a.createElement(d,{node:n})}));return i.a.createElement(a.a,null,i.a.createElement(c.a,{headerText:"Discover some of my projects"}),i.a.createElement("p",null,"Here is a selection of some projects I have come to realize. For some of them, more documentation is available under the github link !"),i.a.createElement("div",{className:p.a.keywordsSelect},i.a.createElement("div",{className:p.a.horDiv},i.a.createElement("h4",{style:{margin:"0px"}},"Select a keyword"),i.a.createElement("p",{className:p.a.footnote},"Number of projects: ",y.totalCount)),i.a.createElement("ul",{style:{marginTop:"10px"}},n.map((function(e,n){return i.a.createElement("button",{className:p.a.keyword+" "+p.a.keywordButton+" "+(u==e?p.a.buttonSelected:""),onClick:function(){return function(e){if(console.log("Keyword: ",e),u==e)s(""),m(t.allMarkdownRemark.edges);else{s(e);var n=t.allMarkdownRemark.edges.filter((function(t){return t.node.frontmatter.keywords.includes(e)}));m(n)}}(e)},key:n},e)})))),h)}var m="1191728704"},"33Wh":function(e,t,n){var r=n("yoRg"),o=n("eDl+");e.exports=Object.keys||function(e){return r(e,o)}},"6LWA":function(e,t,n){var r=n("xrYK");e.exports=Array.isArray||function(e){return"Array"==r(e)}},A2ZE:function(e,t,n){var r=n("HAuM");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},BIHw:function(e,t,n){"use strict";var r=n("I+eb"),o=n("or9q"),i=n("ewvW"),c=n("UMSQ"),a=n("ppGB"),l=n("ZfDv");r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=i(this),n=c(t.length),r=l(t,0);return r.length=o(r,t,t,n,0,void 0===e?1:a(e)),r}})},EqzN:function(e,t,n){e.exports={footnote:"projects-module--footnote--1bkmz",projectTitle:"projects-module--projectTitle--154kd",hr:"projects-module--hr--1L8yu",header:"projects-module--header--2fadY",featuredImage:"projects-module--featuredImage--2yIH4",keyword:"projects-module--keyword--2dSjO",keywordButton:"projects-module--keywordButton--kb5oj",buttonSelected:"projects-module--buttonSelected--33J5f",horDiv:"projects-module--horDiv--37hdK",keywordsSelect:"projects-module--keywordsSelect--n07O5"}},"G+Rx":function(e,t,n){var r=n("0GbY");e.exports=r("document","documentElement")},"N+g0":function(e,t,n){var r=n("g6v/"),o=n("m/L8"),i=n("glrk"),c=n("33Wh");e.exports=r?Object.defineProperties:function(e,t){i(e);for(var n,r=c(t),a=r.length,l=0;a>l;)o.f(e,n=r[l++],t[n]);return e}},Pgy6:function(e,t,n){"use strict";var r=n("rfF1").Collapse,o=n("Tc0e").UnmountClosed;e.exports=o,o.Collapse=r,o.UnmountClosed=o},QGkA:function(e,t,n){n("RNIs")("flat")},RNIs:function(e,t,n){var r=n("tiKp"),o=n("fHMY"),i=n("m/L8"),c=r("unscopables"),a=Array.prototype;null==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),e.exports=function(e){a[c][e]=!0}},STAE:function(e,t,n){var r=n("0Dky");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},Tc0e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UnmountClosed=void 0;var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("rfF1");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,n,r,c=d(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),v(m(t=c.call(this,e)),"onWork",(function(e){var n=e.isOpened,r=s(e,["isOpened"]);t.setState({isResting:!1,isOpened:n});var o=t.props.onWork;o&&o(u({isOpened:n},r))})),v(m(t),"onRest",(function(e){var n=e.isOpened,r=s(e,["isOpened"]);t.setState({isResting:!0,isOpened:n,isInitialRender:!1});var o=t.props.onRest;o&&o(u({isOpened:n},r))})),v(m(t),"getInitialStyle",(function(){var e=t.state,n=e.isOpened;return e.isInitialRender&&n?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"}})),t.state={isResting:!0,isOpened:e.isOpened,isInitialRender:!0},t}return t=l,(n=[{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;e.isOpened!==t&&this.setState({isResting:!1,isOpened:t,isInitialRender:!1})}},{key:"render",value:function(){var e=this.state,t=e.isResting,n=e.isOpened;return t&&!n?null:o.default.createElement(i.Collapse,a({},this.props,{initialStyle:this.getInitialStyle(),onWork:this.onWork,onRest:this.onRest}))}}])&&f(t.prototype,n),r&&f(t,r),l}(o.default.PureComponent);t.UnmountClosed=b,v(b,"defaultProps",{onWork:void 0,onRest:void 0})},ZfDv:function(e,t,n){var r=n("hh1v"),o=n("6LWA"),i=n("tiKp")("species");e.exports=function(e,t){var n;return o(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},fHMY:function(e,t,n){var r,o=n("glrk"),i=n("N+g0"),c=n("eDl+"),a=n("0BK2"),l=n("G+Rx"),u=n("zBJ4"),s=n("93I0"),f=s("IE_PROTO"),p=function(){},d=function(e){return"<script>"+e+"<\/script>"},y=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var e,t;y=r?function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t}(r):((t=u("iframe")).style.display="none",l.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F);for(var n=c.length;n--;)delete y.prototype[c[n]];return y()};a[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(p.prototype=o(e),n=new p,p.prototype=null,n[f]=e):n=y(),void 0===t?n:i(n,t)}},or9q:function(e,t,n){"use strict";var r=n("6LWA"),o=n("UMSQ"),i=n("A2ZE"),c=function(e,t,n,a,l,u,s,f){for(var p,d=l,y=0,m=!!s&&i(s,f,3);y<a;){if(y in n){if(p=m?m(n[y],y,t):n[y],u>0&&r(p))d=c(e,t,p,o(p.length),d,u-1)-1;else{if(d>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[d]=p}d++}y++}return d};e.exports=c},rfF1:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.Collapse=void 0;var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(f,t);var n,r,i,u=l(f);function f(t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),p(s(n=u.call(this,t)),"timeout",void 0),p(s(n),"container",void 0),p(s(n),"content",void 0),p(s(n),"onResize",(function(){if(e.clearTimeout(n.timeout),n.container&&n.content){var t=n.props,r=t.isOpened,o=t.checkTimeout,i=n.container.clientHeight,c=n.content.clientHeight,a=r&&c===i,l=!r&&0===i;a||l?n.onRest({isFullyOpened:a,isFullyClosed:l,isOpened:r,containerHeight:i,contentHeight:c}):(n.onWork({isFullyOpened:a,isFullyClosed:l,isOpened:r,containerHeight:i,contentHeight:c}),n.timeout=setTimeout((function(){return n.onResize()}),o))}})),p(s(n),"onRest",(function(e){var t=e.isFullyOpened,r=e.isFullyClosed,o=e.isOpened,i=e.containerHeight,c=e.contentHeight;if(n.container&&n.content){var a=o&&n.container.style.height==="".concat(c,"px"),l=!o&&"0px"===n.container.style.height;if(a||l){n.container.style.overflow=o?"initial":"hidden",n.container.style.height=o?"auto":"0px";var u=n.props.onRest;u&&u({isFullyOpened:t,isFullyClosed:r,isOpened:o,containerHeight:i,contentHeight:c})}}})),p(s(n),"onWork",(function(e){var t=e.isFullyOpened,r=e.isFullyClosed,o=e.isOpened,i=e.containerHeight,c=e.contentHeight;if(n.container&&n.content){var a=o&&n.container.style.height==="".concat(c,"px"),l=!o&&"0px"===n.container.style.height;if(!a&&!l){n.container.style.overflow="hidden",n.container.style.height=o?"".concat(c,"px"):"0px";var u=n.props.onWork;u&&u({isFullyOpened:t,isFullyClosed:r,isOpened:o,containerHeight:i,contentHeight:c})}}})),p(s(n),"onRefContainer",(function(e){n.container=e})),p(s(n),"onRefContent",(function(e){n.content=e})),t.initialStyle?n.initialStyle=t.initialStyle:n.initialStyle=t.isOpened?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"},n}return n=f,(r=[{key:"componentDidMount",value:function(){this.onResize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.theme,r=t.isOpened;return t.children!==e.children||r!==e.isOpened||Object.keys(n).some((function(t){return n[t]!==e.theme[t]}))}},{key:"getSnapshotBeforeUpdate",value:function(){if(!this.container||!this.content)return null;if("auto"===this.container.style.height){var e=this.content.clientHeight;this.container.style.height="".concat(e,"px")}return null}},{key:"componentDidUpdate",value:function(){this.onResize()}},{key:"componentWillUnmount",value:function(){e.clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.children,r=e.isOpened;return o.default.createElement("div",{ref:this.onRefContainer,className:t.collapse,style:this.initialStyle,"aria-hidden":!r},o.default.createElement("div",{ref:this.onRefContent,className:t.content},n))}}])&&c(n.prototype,r),i&&c(n,i),f}(o.default.Component);t.Collapse=d,p(d,"defaultProps",{theme:{collapse:"ReactCollapse--collapse",content:"ReactCollapse--content"},initialStyle:void 0,onRest:void 0,onWork:void 0,checkTimeout:50})}).call(this,n("yLpj"))},tiKp:function(e,t,n){var r=n("2oRo"),o=n("VpIT"),i=n("UTVS"),c=n("kOOl"),a=n("STAE"),l=n("/b8u"),u=o("wks"),s=r.Symbol,f=l?s:s&&s.withoutSetter||c;e.exports=function(e){return i(u,e)||(a&&i(s,e)?u[e]=s[e]:u[e]=f("Symbol."+e)),u[e]}}}]);
//# sourceMappingURL=component---src-pages-projects-js-c21e06fda8be42047463.js.map