(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"16l3":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d})),n.d(t,"query",(function(){return y}));var o=n("q1tI"),r=n.n(o),i=n("LbRr"),a=n("Bl7J"),c=n("Pgy6"),l=n("9eSz"),u=n.n(l),s=n("EqzN"),f=n.n(s);function p(e){var t=e.node,n=Object(o.useState)(!1),i=n[0],a=n[1],l=Object(o.useCallback)((function(){return a(!i)}),[i]);return console.log(t.frontmatter.featuredImage),r.a.createElement("div",null,r.a.createElement("div",{className:f.a.header},r.a.createElement("div",null,r.a.createElement("h2",{className:f.a.projectTitle},t.frontmatter.title),r.a.createElement("p",null,t.frontmatter.description)),t.frontmatter.featuredImage&&r.a.createElement("div",{className:f.a.featuredImage},r.a.createElement(u.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid}))),r.a.createElement(c.Collapse,{isOpened:i},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),r.a.createElement("button",{onClick:l},i?"Hide":"Show more"),r.a.createElement("hr",{className:f.a.hr}))}function d(e){var t=e.data,n=t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement(p,{node:t})}));return r.a.createElement(a.a,null,r.a.createElement(i.a,{headerText:"Discover some of my projects"}),r.a.createElement("p",null,"Here is a selection of some projects I have come to realize. For some of them, more documentation is available under the github link !"),r.a.createElement("p",{className:f.a.footnote},"Number of projects: ",t.allMarkdownRemark.totalCount),n)}var y="2364546679"},EqzN:function(e,t,n){e.exports={footnote:"projects-module--footnote--1bkmz",projectTitle:"projects-module--projectTitle--154kd",hr:"projects-module--hr--1L8yu",header:"projects-module--header--2fadY",featuredImage:"projects-module--featuredImage--2yIH4"}},Pgy6:function(e,t,n){"use strict";var o=n("rfF1").Collapse,r=n("Tc0e").UnmountClosed;e.exports=r,r.Collapse=o,r.UnmountClosed=r},Tc0e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UnmountClosed=void 0;var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},i=n("rfF1");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,n,o,a=d(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),v(h(t=a.call(this,e)),"onWork",(function(e){var n=e.isOpened,o=s(e,["isOpened"]);t.setState({isResting:!1,isOpened:n});var r=t.props.onWork;r&&r(u({isOpened:n},o))})),v(h(t),"onRest",(function(e){var n=e.isOpened,o=s(e,["isOpened"]);t.setState({isResting:!0,isOpened:n,isInitialRender:!1});var r=t.props.onRest;r&&r(u({isOpened:n},o))})),v(h(t),"getInitialStyle",(function(){var e=t.state,n=e.isOpened;return e.isInitialRender&&n?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"}})),t.state={isResting:!0,isOpened:e.isOpened,isInitialRender:!0},t}return t=l,(n=[{key:"componentDidUpdate",value:function(e){var t=this.props.isOpened;e.isOpened!==t&&this.setState({isResting:!1,isOpened:t,isInitialRender:!1})}},{key:"render",value:function(){var e=this.state,t=e.isResting,n=e.isOpened;return t&&!n?null:r.default.createElement(i.Collapse,c({},this.props,{initialStyle:this.getInitialStyle(),onWork:this.onWork,onRest:this.onRest}))}}])&&f(t.prototype,n),o&&f(t,o),l}(r.default.PureComponent);t.UnmountClosed=b,v(b,"defaultProps",{onWork:void 0,onRest:void 0})},rfF1:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.Collapse=void 0;var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=f(e);if(t){var r=f(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,t);var n,o,i,u=l(f);function f(t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),p(s(n=u.call(this,t)),"timeout",void 0),p(s(n),"container",void 0),p(s(n),"content",void 0),p(s(n),"onResize",(function(){if(e.clearTimeout(n.timeout),n.container&&n.content){var t=n.props,o=t.isOpened,r=t.checkTimeout,i=n.container.clientHeight,a=n.content.clientHeight,c=o&&a===i,l=!o&&0===i;c||l?n.onRest({isFullyOpened:c,isFullyClosed:l,isOpened:o,containerHeight:i,contentHeight:a}):(n.onWork({isFullyOpened:c,isFullyClosed:l,isOpened:o,containerHeight:i,contentHeight:a}),n.timeout=setTimeout((function(){return n.onResize()}),r))}})),p(s(n),"onRest",(function(e){var t=e.isFullyOpened,o=e.isFullyClosed,r=e.isOpened,i=e.containerHeight,a=e.contentHeight;if(n.container&&n.content){var c=r&&n.container.style.height==="".concat(a,"px"),l=!r&&"0px"===n.container.style.height;if(c||l){n.container.style.overflow=r?"initial":"hidden",n.container.style.height=r?"auto":"0px";var u=n.props.onRest;u&&u({isFullyOpened:t,isFullyClosed:o,isOpened:r,containerHeight:i,contentHeight:a})}}})),p(s(n),"onWork",(function(e){var t=e.isFullyOpened,o=e.isFullyClosed,r=e.isOpened,i=e.containerHeight,a=e.contentHeight;if(n.container&&n.content){var c=r&&n.container.style.height==="".concat(a,"px"),l=!r&&"0px"===n.container.style.height;if(!c&&!l){n.container.style.overflow="hidden",n.container.style.height=r?"".concat(a,"px"):"0px";var u=n.props.onWork;u&&u({isFullyOpened:t,isFullyClosed:o,isOpened:r,containerHeight:i,contentHeight:a})}}})),p(s(n),"onRefContainer",(function(e){n.container=e})),p(s(n),"onRefContent",(function(e){n.content=e})),t.initialStyle?n.initialStyle=t.initialStyle:n.initialStyle=t.isOpened?{height:"auto",overflow:"initial"}:{height:"0px",overflow:"hidden"},n}return n=f,(o=[{key:"componentDidMount",value:function(){this.onResize()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.theme,o=t.isOpened;return t.children!==e.children||o!==e.isOpened||Object.keys(n).some((function(t){return n[t]!==e.theme[t]}))}},{key:"getSnapshotBeforeUpdate",value:function(){if(!this.container||!this.content)return null;if("auto"===this.container.style.height){var e=this.content.clientHeight;this.container.style.height="".concat(e,"px")}return null}},{key:"componentDidUpdate",value:function(){this.onResize()}},{key:"componentWillUnmount",value:function(){e.clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.children,o=e.isOpened;return r.default.createElement("div",{ref:this.onRefContainer,className:t.collapse,style:this.initialStyle,"aria-hidden":!o},r.default.createElement("div",{ref:this.onRefContent,className:t.content},n))}}])&&a(n.prototype,o),i&&a(n,i),f}(r.default.Component);t.Collapse=d,p(d,"defaultProps",{theme:{collapse:"ReactCollapse--collapse",content:"ReactCollapse--content"},initialStyle:void 0,onRest:void 0,onWork:void 0,checkTimeout:50})}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-projects-js-d0dde3bdfff3c36a9a98.js.map