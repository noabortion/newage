/*! For license information please see component---src-templates-post-template-jsx-e473ef836bc54b460139.js.LICENSE.txt */
(self.webpackChunkpeligro_nueva_era=self.webpackChunkpeligro_nueva_era||[]).push([[907],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)r.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},9077:function(e,t,n){var r=n(8640)("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var i,c,l=t.prefix||"__jp",s=t.name||l+o++,u=t.param||"callback",p=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;p&&(c=setTimeout((function(){m(),n&&n(new Error("Timeout"))}),p));function m(){i.parentNode&&i.parentNode.removeChild(i),window[s]=a,c&&clearTimeout(c)}return window[s]=function(e){r("jsonp got",e),m(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+d(s)).replace("?&","?"),r('jsonp req "%s"',e),(i=document.createElement("script")).src=e,f.parentNode.insertBefore(i,f),function(){window[s]&&m()}};var o=0;function a(){}},8640:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&"undefined"!=typeof process&&"env"in process&&(e={}.DEBUG),e}(t=e.exports=n(9196)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())},9196:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;l++;var o=t.formatters[r];if("function"==typeof o){var a=i[l];n=o.call(e,a),i.splice(l,1),l--}return n})),t.formatArgs.call(e,i);var s=n.log||t.log||console.log.bind(console);s.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(876),t.names=[],t.skips=[],t.formatters={}},876:function(e){var t=1e3,n=60*t,r=60*n,o=24*r,a=365.25*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,c){c=c||{};var l,s=typeof e;if("string"===s&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var c=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*a;case"days":case"day":case"d":return c*o;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===s&&!1===isNaN(e))return c.long?i(l=e,o,"day")||i(l,r,"hour")||i(l,n,"minute")||i(l,t,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},866:function(e,t,n){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=c(n(7294)),i=c(n(5697));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],p=!1;function d(e,t){var n=t.onNewComment,r=t.language,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["onNewComment","language"]);for(var a in o)e.page[a]=o[a];e.language=r,n&&(e.callbacks={onNewComment:[n]})}var f=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return u.some((function(e){return e===n}))?t:r({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return a.default.createElement("div",t,a.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!p){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),p=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(a.default.Component);f.displayName="DisqusThread",f.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},f.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=f},1227:function(e,t,n){"use strict";e.exports=n(866)},8594:function(e,t,n){var r,o,a;a=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var o=e[r];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(r>0&&(o=o.replace(/^[\/]+/,"")),o=r<e.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),t.push(o))}var a=t.join("/"),i=(a=a.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return a=i.shift()+(i.length>0?"?":"")+i.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=a():void 0===(o="function"==typeof(r=a)?r.call(t,n,t,e):r)||(e.exports=o)},2089:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.content,n=e.sidebar;return r.createElement("section",{className:"main-container container"},r.createElement("div",{className:"content-wrapper padding-top-half padding-bottom-2"},t),r.createElement("div",{className:"sidebar-wrapper padding-top-half padding-bottom-2"},n))}},9354:function(e,t,n){"use strict";var r=n(7294),o=n(8415),a=n(2797),i=n.n(a);t.Z=function(e){var t=e.date,n=e.extraClass,a=void 0===n?"":n;return r.createElement("div",{className:"text-description "+a},i().postOnDate," ",(0,o.p6)(t))}},4428:function(e,t,n){"use strict";var r=n(6449),o=n(7294),a=n(2407),i=n(5414),c=n(8594),l=n.n(c),s=n(2797),u=n.n(s),p=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,n,r,c=this.props,s=c.postNode,p=c.postPath,d=c.postSEO,f="";if(d){var m=s.frontmatter;e=m.title,t=m.description?m.description:s.excerpt,n=m.keywords,m.cover&&(f=(0,a.e)(m.cover)),r=l()(u().siteUrl,u().pathPrefix,p)}else e=u().siteTitle,t=u().siteDescription,f=u().siteLogo;f=l()(u().siteUrl,u().pathPrefix,f);var h=l()(u().siteUrl,u().pathPrefix),g=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u().siteTitleAlt?u().siteTitleAlt:""}];return d&&g.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:f}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u().siteTitleAlt?u().siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:f},description:t}),o.createElement(i.Z,null,o.createElement("meta",{name:"description",content:t}),o.createElement("meta",{name:"image",content:f}),n&&o.createElement("meta",{name:"keywords",content:n}),o.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),o.createElement("meta",{property:"og:url",content:d?r:h}),d?o.createElement("meta",{property:"og:type",content:"article"}):null,o.createElement("meta",{property:"og:title",content:e}),o.createElement("meta",{property:"og:description",content:t}),o.createElement("meta",{property:"og:image",content:f}),o.createElement("meta",{property:"fb:app_id",content:u().siteFBAppID?u().siteFBAppID:""}),o.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.createElement("meta",{name:"twitter:creator",content:u().userTwitter?u().userTwitter:""}),o.createElement("meta",{name:"twitter:title",content:e}),o.createElement("meta",{name:"twitter:description",content:t}),o.createElement("meta",{name:"twitter:image",content:f}))},t}(o.Component);t.Z=p},1097:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(7294),o=n(9778),a=function(e){var t=e.extraClass,n=void 0===t?"":t,o=e.children;return r.createElement("aside",{className:n+" padding-top padding-bottom"},o)},i=function(e){var t=e.title;return r.createElement("h3",{className:"text-uppercase"},r.createElement("small",null,t))},c=n(8415),l=n(2797),s=n.n(l),u=function(e){var t=e.content;return r.createElement(o.Z,{key:t,to:(0,c.bT)(t),className:"inline-block small-text \r border border-color-light-grey padding-left-half padding-right-half"},r.createElement("span",null,t))},p=function(e){var t=e.categoryList;return r.createElement(a,{extraClass:"categories-container"},r.createElement(i,{title:s().categoryWidgetTitle}),r.createElement("div",null,t.map((function(e){return r.createElement(o.Z,{key:e,to:(0,c.IX)(e),className:"small-text border-bottom border-color-light-grey padding-top-half padding-bottom-half"},e+" | ")}))))},d=function(e){var t=e.tagList;return r.createElement(a,{extraClass:"categories-container"},r.createElement(i,{title:s().tagWidgetTitle}),r.createElement("div",null,t.map((function(e){return r.createElement(u,{key:e,content:e})}))))},f=function(e){var t=e.latestPostEdges,n=(0,c.UI)(t);return r.createElement(a,{extraClass:"latest-posts-container"},r.createElement(i,{title:s().latestPostsWidgetTitle}),r.createElement("div",null,n.map((function(e){return r.createElement(o.Z,{key:e.title,to:e.slug,className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},r.createElement("span",null,e.title))}))))},m=function(e){var t=e.links;return r.createElement(r.Fragment,null,t&&t.length>0&&r.createElement(a,{extraClass:"categories-container"},r.createElement(i,{title:s().linksWidgetTitle}),r.createElement("div",null,t.map((function(e){return r.createElement(o.Z,{key:e.label,to:e.url,className:"block border-bottom border-color-light-grey padding-top-half padding-bottom-half"},r.createElement("span",null,e.label))})))))},h=n(6449),g=n(7606),y=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){return r.createElement(r.Fragment,null,s().hasSearch&&r.createElement(a,{extraClass:"search-container"},r.createElement(i,{title:s().searchWidgetTitle}),r.createElement("form",{className:"margin-bottom-none",action:"/search/",method:"get"},r.createElement("div",{className:"container-full row padding-none margin-bottom-none"},r.createElement("div",{className:"padding-none padding-right-half col-xs-10"},r.createElement("input",{className:"margin-bottom-none",type:"text",name:"q",placeholder:s().searchWidgetPlaceHolder,required:!0,spellCheck:"false"})),r.createElement("div",{className:"padding-none padding-left-half col-xs-2"},r.createElement("button",{type:"submit",className:"btn btn-primary"},r.createElement(g.G,{icon:["fas","search"],style:{color:"#FFFFFF"}})))))))},t}(r.Component),v=function(e){var t=e.tagList,n=e.categoryList,o=e.latestPostEdges,a=e.links;return r.createElement("aside",{className:"sidebar-container width-full "+(s().sidebarSticky?"height-full":"")},r.createElement(y,null),o&&r.createElement(f,{latestPostEdges:o}),n&&r.createElement(p,{categoryList:n}),t&&r.createElement(d,{tagList:t}),a&&r.createElement("div",{className:"position-sticky top-zero"},r.createElement(m,{links:a})))}},2520:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return me}});var r=n(7294),o=n(5414),a=n(6283),i=n(3317),c=n(2089),l=n(1097),s=n(6449);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p,d=n(1227),f=n(8594),m=n.n(f),h=n(2797),g=n.n(h),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(u(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(u(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!g().disqusShortname)return null;var t=e.frontmatter,n=m()(g().siteUrl,g().pathPrefix,e.fields.slug);return r.createElement(d.default,{shortname:g().disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(r.Component),v=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={isShow:!t.props.lazyload},t.handleClick=function(){t.setState((function(e){return{isShow:!e.isShow}}))},t}return(0,s.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.extraClass,n=e.postNode,o=e.btnLoadComments;return r.createElement("div",{className:"comment-container text-center "+t},!this.state.isShow&&r.createElement("button",{className:"btn-primary",onClick:this.handleClick},o),this.state.isShow&&r.createElement(y,{postNode:n}))},t}(r.Component),w=n(9778),b=n(8415),E=n(7606),C=function(e){var t=e.tags,n=e.extraClass,o=void 0===n?"":n,a=e.iconColor,i=void 0===a?"#444":a;return r.createElement(r.Fragment,null,t&&r.createElement("div",{className:"post-tags-container "+o},r.createElement("b",null,g().postTagged&&r.createElement("span",null,g().postTagged," "),!g().postTagged&&r.createElement(r.Fragment,null,r.createElement(E.G,{icon:["fas","tags"],style:{color:i,width:"20px"}})," "),t.map((function(e,n){return r.createElement("span",{key:e},function(e){return r.createElement(w.Z,{className:"text-uppercase",to:(0,b.bT)(e),label:e},e)}(e),n<t.length-1&&r.createElement(r.Fragment,null,", "))})))))},k=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),O=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return k(t,e),t}(Error);function N(e,t){if(!e)throw new O(t)}function x(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var j=n(5900),S=n.n(j),_=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),P=function(){return(P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},L=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},T=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},D=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},z=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},I=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function Z(e,t,n){var r=t.height,o=t.width,a=A(t,["height","width"]),i=P({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3);return c}var q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,a=void 0===o?400:o,i=n.windowPosition,c=void 0===i?"windowCenter":i,l=n.windowWidth,s=void 0===l?550:l;Z(e,P({height:a,width:s},"windowCenter"===c?z(s,a):I(s,a)),r)},t.handleClick=function(e){return L(t,void 0,void 0,(function(){var t,n,r,o,a,i,c,l,s,u;return T(this,(function(p){switch(p.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(i,l),r?[2]:(e.preventDefault(),n?(u=n(),D(u)?[4,u]:[3,2]):[3,2]);case 1:p.sent(),p.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return _(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,o=e.disabled,a=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,A(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=S()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},n),d=P(P(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),o&&a);return r.createElement("button",P({},u,{"aria-label":u["aria-label"]||c,className:p,onClick:this.handleClick,ref:i,style:d}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),F=function(){return(F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var W=function(e,t,n,o){function a(a,i){var c=n(a),l=F({},a);return Object.keys(c).forEach((function(e){delete l[e]})),r.createElement(q,F({},o,l,{forwardedRef:i,networkName:e,networkLink:t,opts:n(a)}))}return a.displayName="ShareButton-"+e,(0,r.forwardRef)(a)};var R=W("reddit",(function(e,t){var n=t.title;return N(e,"reddit.url"),"https://www.reddit.com/submit"+x({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),U=function(){return(U=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function B(e){var t=function(t){var n=t.bgStyle,o=t.borderRadius,a=t.iconFillColor,i=t.round,c=t.size,l=M(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return r.createElement("svg",U({viewBox:"0 0 64 64",width:c,height:c},l),i?r.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):r.createElement("rect",{width:"64",height:"64",rx:o,ry:o,fill:e.color,style:n}),r.createElement("path",{d:e.path,fill:a}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var H=B({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"}),$=n(9077),G=n.n($),J=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),V=function(){return(V=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},X=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},Q=function(e){return e},Y=function(e){function t(t){var n=e.call(this,t)||this;return n._isMounted=!1,n.state={count:0,isLoading:!1},n}return J(t,e),t.prototype.componentDidMount=function(){this._isMounted=!0,this.updateCount(this.props.url)},t.prototype.componentDidUpdate=function(e){this.props.url!==e.url&&this.updateCount(this.props.url)},t.prototype.componentWillUnmount=function(){this._isMounted=!1},t.prototype.updateCount=function(e){var t=this;this.setState({isLoading:!0}),this.props.getCount(e,(function(e){t._isMounted&&t.setState({count:e,isLoading:!1})}))},t.prototype.render=function(){var e=this.state,t=e.count,n=e.isLoading,o=this.props,a=o.children,i=void 0===a?Q:a,c=o.className,l=(o.getCount,X(o,["children","className","getCount"]));return r.createElement("span",V({className:S()("react-share__ShareCount",c)},l),!n&&void 0!==t&&i(t))},t}(r.Component);function K(e){var t=function(t){return r.createElement(Y,V({getCount:e},t))};return t.displayName="ShareCount("+e.name+")",t}var ee=K((function(e,t){var n="https://www.reddit.com/api/info.json?limit=1&url="+e;G()(n,{param:"jsonp"},(function(e,n){t(!e&&n&&n.data&&n.data.children.length>0&&n.data.children[0].data.score?n.data.children[0].data.score:void 0)}))}));var te=W("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return N(e,"twitter.url"),N(Array.isArray(a),"twitter.hashtags is not an array"),N(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+x({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),ne=B({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var re=W("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return N(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+x({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),oe=B({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var ae=K((function(e,t){var n="https://graph.facebook.com/?id="+e+"&fields=og_object{engagement}";G()(n,(function(e,n){t(!e&&n&&n.og_object&&n.og_object.engagement?n.og_object.engagement.count:void 0)}))}));var ie=W("telegram",(function(e,t){var n=t.title;return N(e,"telegram.url"),"https://telegram.me/share/url"+x({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400}),ce=B({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"}),le=function(e){var t=e.postNode,n=e.postPath,o=e.extraClass,a=void 0===o?"":o,i=t.frontmatter,c=m()(g().siteUrl,g().pathPrefix,n),l=function(e){return r.createElement("div",{className:"text-center"},function(e){return e>0?e:""}(e))};return r.createElement("div",{className:"flex "+a},r.createElement(R,{className:"cursor-pointer margin-right-half",url:c,title:i.title},r.createElement(H,{round:!0,size:26}),r.createElement(ee,{url:c},(function(e){return l(e)}))),r.createElement(te,{className:"cursor-pointer margin-right-half",url:c,title:i.title},r.createElement(ne,{round:!0,size:26})),r.createElement(re,{className:"cursor-pointer margin-right-half",url:c,quote:t.excerpt},r.createElement(oe,{round:!0,size:26}),r.createElement(ae,{url:c},(function(e){return l(e)}))),r.createElement(ie,{className:"cursor-pointer",url:c},r.createElement(ce,{round:!0,size:26})))},se=n(9354),ue=function(){return r.createElement("div",{className:"post-divider border-bottom border-color-light-grey margin-bottom-half margin-top-half"})},pe=function(e){var t=e.categories,n=e.extraClass,o=void 0===n?"":n,a=e.iconColor,i=void 0===a?"#444":a;return r.createElement(r.Fragment,null,t&&r.createElement("div",{className:"post-categories-container "+o},r.createElement("b",null,g().postInCategories&&r.createElement("span",null,g().postInCategories," "),!g().postInCategories&&r.createElement(r.Fragment,null,r.createElement(E.G,{icon:["fas","folder-open"],style:{color:i,width:"20px"}})," "),t.map((function(e,n){return r.createElement("span",{key:e},function(e){return r.createElement(w.Z,{className:"text-uppercase",to:(0,b.IX)(e),label:e},e)}(e),n<t.length-1&&r.createElement(r.Fragment,null,", "))})))))},de=function(e){var t=e.postNode,n=e.config,o=e.slug,a=t.frontmatter;return a.id||(a.id=o),a.category_id||(a.category_id=n.postDefaultCategoryID),r.createElement("div",{className:"post-container"},r.createElement("div",{className:"meta-share-wrapper padding-top padding-bottom"},r.createElement(se.Z,{extraClass:"meta-wrapper",date:a.date}),r.createElement(le,{extraClass:"share-wrapper",postPath:o,postNode:t})),r.createElement(ue,null),r.createElement("div",{className:"padding-top padding-bottom",dangerouslySetInnerHTML:{__html:t.html}}),r.createElement(ue,null),r.createElement("div",{className:"padding-top padding-bottom"},r.createElement("small",null,r.createElement(pe,{categories:a.categories,extraClass:"block",iconColor:"#555"}),r.createElement(C,{tags:a.tags,extraClass:"block padding-top-half",iconColor:"#555"}))),r.createElement(ue,null),r.createElement(v,{postNode:t,extraClass:"padding-top",lazyload:n.lazyLoadComments,btnLoadComments:n.btnLoadComments}))},fe=n(4428),me=function(e){var t=e.data,n=e.pageContext,s=n.slug,u=n.tagList,p=n.categoryList,d=n.latestPostEdges,f=t.markdownRemark,m=f.frontmatter.title,h=r.createElement(de,{postNode:f,config:g(),slug:s}),y=r.createElement(l.Z,{tagList:u,categoryList:p,latestPostEdges:d,links:g().sidebarLinks});return r.createElement(a.Z,null,r.createElement(o.Z,null,r.createElement("title",null,m+" - "+g().siteTitle)),r.createElement(fe.Z,{postPath:s,postNode:f,postSEO:!0}),r.createElement(i.Z,{title:m}),r.createElement(c.Z,{content:h,sidebar:y}))}}}]);
//# sourceMappingURL=component---src-templates-post-template-jsx-e473ef836bc54b460139.js.map