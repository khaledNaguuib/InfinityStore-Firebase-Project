(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[7],{100:function(e,t,r){e.exports={"section-form":"register_section-form__34ZWq",title:"register_title__1InqN","form-wrapper":"register_form-wrapper__tgnHl","form-control":"register_form-control__U4Khh","input-label":"register_input-label__SkYwb","input-field":"register_input-field__1W1AI","input-name-first":"register_input-name-first__1wI72","input-name-last":"register_input-name-last__38WRK",checkIcon:"register_checkIcon__3Rl5_",xmarkIcon:"register_xmarkIcon__3qrbU",invalid:"register_invalid__mb8DC","error-text":"register_error-text__3aiJz","error-msg-small":"register_error-msg-small__345I0","span-clarify":"register_span-clarify__W78uy","btn-submit":"register_btn-submit__3iO7_",submitError:"register_submitError__2jD01",show:"register_show__17AKT",errorMessage:"register_errorMessage__2Ng3-",errorMsgList:"register_errorMsgList__1gumd",successMessage:"register_successMessage__3aQMw",successMsgList:"register_successMsgList__3DAXw"}},101:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(102);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}});var a=r(74);Object.defineProperty(t,"Fade",{enumerable:!0,get:function(){return o(a).default}});var i=r(103);Object.defineProperty(t,"Bounce",{enumerable:!0,get:function(){return o(i).default}});var s=r(104);Object.defineProperty(t,"Roll",{enumerable:!0,get:function(){return o(s).default}});var l=r(77);Object.defineProperty(t,"Slide",{enumerable:!0,get:function(){return o(l).default}});var u=r(105);Object.defineProperty(t,"Flip",{enumerable:!0,get:function(){return o(u).default}}),Object.defineProperty(t,"Reveal",{enumerable:!0,get:function(){return o(n).default}});var c=r(106);Object.defineProperty(t,"Rotate",{enumerable:!0,get:function(){return o(c).default}});var d=r(107);Object.defineProperty(t,"LightSpeed",{enumerable:!0,get:function(){return o(d).default}});var f=r(108);Object.defineProperty(t,"Zoom",{enumerable:!0,get:function(){return o(f).default}})},102:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){function t(e){return e?p?{duration:u,delay:c,count:d,forever:f,className:p,style:{}}:v:m?{duration:void 0===o?n:o,delay:a,count:i,forever:s,className:m,style:{}}:b}var r=e.children,o=e.timeout,n=e.duration,a=e.delay,i=e.count,s=e.forever,u=e.durationOut,c=e.delayOut,d=e.countOut,f=e.foreverOut,m=e.effect,p=e.effectOut,b=e.inEffect,v=e.outEffect,y=function(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(e,["children","timeout","duration","delay","count","forever","durationOut","delayOut","countOut","foreverOut","effect","effectOut","inEffect","outEffect"]);return(0,l.default)(y,t(!1),t(!0),r)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},i=r(43),s=r(72),l=o(r(73)),u=o(r(74)),c={in:i.object,out:(0,i.oneOfType)([i.object,(0,i.oneOf)([!1])]),effect:i.string,effectOut:i.string,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool,durationOut:i.number,delayOut:i.number,countOut:i.number,foreverOut:i.bool},d=a({},s.defaults,{durationOut:s.defaults.duration,delayOut:s.defaults.delay,countOut:s.defaults.count,foreverOut:s.defaults.forever,inEffect:(0,u.default)(s.defaults),outEffect:(0,u.default)(a({out:!0},s.defaults))});n.propTypes=c,n.defaultProps=d,t.default=n,e.exports=t.default},103:function(e,t,r){"use strict";function o(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function n(e,t){var r=t.left,o=t.right,n=t.up,a=t.down,i=t.top,s=t.bottom,l=t.mirror,u=t.opposite,d=(r?1:0)|(o?2:0)|(i||a?4:0)|(s||n?8:0)|(l?16:0)|(u?32:0)|(e?64:0);if(f.hasOwnProperty(d))return f[d];if(!l!=!(e&&u)){var m=[o,r,s,i,a,n];r=m[0],o=m[1],i=m[2],s=m[3],n=m[4],a=m[5]}var p,b=r||o,v=i||s||n||a,y=void 0,g=void 0,h=void 0,O=void 0,j=void 0,x=void 0,_=void 0,w=void 0,N=void 0,k=void 0,M=void 0,P=void 0,E=void 0;return e?(h=b?(o?"-":"")+"20px":0,O=v?(n||s?"":"-")+"10px":"0",j=(a||i?"":"-")+"20px",P=b?(r?"-":"")+"2000px":"0",E=v?(a||i?"-":"")+"2000px":"0"):(y=b?(r?"-":"")+"3000px":"0",g=v?(a||i?"-":"")+"3000px":"0",x=b?(o?"-":"")+"25px":"0",_=v?(n||s?"-":"")+"25px":"0",w=b?(r?"-":"")+"10px":"0",N=v?(a||i?"-":"")+"10px":"0",k=b?(o?"-":"")+"5px":"0",M=v?(n||s?"-":"")+"5px":"0"),p=b||v?e?"\n        20% {\n          transform: translate3d("+h+", "+O+", 0);\n          }\n        "+(v?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+j+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+P+", "+E+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+y+", "+g+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+x+", "+_+", 0);\n      }\n      75% {\n        transform: translate3d("+w+", "+N+", 0);\n      }\n      90% {\n        transform: translate3d("+k+", "+M+", 0);\n      }\n      to {\n        transform: none;\n      }":e?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",f[d]=(0,c.animation)(p),f[d]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,r=(e.out,e.forever),a=e.timeout,i=e.duration,s=void 0===i?c.defaults.duration:i,l=e.delay,d=void 0===l?c.defaults.delay:l,f=e.count,m=void 0===f?c.defaults.count:f,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===a?s:a,delay:d,forever:r,count:m,style:{animationFillMode:"both"},reverse:p.left};return(0,u.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(43),l=r(73),u=(i=l)&&i.__esModule?i:{default:i},c=r(72),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},f={};a.propTypes=d,t.default=a,e.exports=t.default},104:function(e,t,r){"use strict";function o(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function n(e,t){var r=t.left,o=t.right,n=t.up,a=t.down,i=t.top,s=t.bottom,l=t.big,u=t.mirror,d=t.opposite,m=(r?1:0)|(o?2:0)|(i||a?4:0)|(s||n?8:0)|(u?16:0)|(d?32:0)|(e?64:0)|(l?128:0);if(f.hasOwnProperty(m))return f[m];if(!u!=!(e&&d)){var p=[o,r,s,i,a,n];r=p[0],o=p[1],i=p[2],s=p[3],n=p[4],a=p[5]}var b=l?"2000px":"100%",v=r?"-"+b:o?b:"0",y=a||i?"-"+b:n||s?b:"0";return f[m]=(0,c.animation)("\n    "+(e?"to":"from")+" {opacity: 0;transform: translate3d("+v+", "+y+", 0) rotate3d(0, 0, 1, -120deg);}\n\t  "+(e?"from":"to")+" {opacity: 1;transform: none}\n  "),f[m]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,r=(e.out,e.forever),a=e.timeout,i=e.duration,s=void 0===i?c.defaults.duration:i,u=e.delay,d=void 0===u?c.defaults.delay:u,f=e.count,m=void 0===f?c.defaults.count:f,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===a?s:a,delay:d,forever:r,count:m,style:{animationFillMode:"both"}};return(0,l.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(73),l=(i=s)&&i.__esModule?i:{default:i},u=r(43),c=r(72),d={out:u.bool,left:u.bool,right:u.bool,top:u.bool,bottom:u.bool,big:u.bool,mirror:u.bool,opposite:u.bool,duration:u.number,timeout:u.number,delay:u.number,count:u.number,forever:u.bool},f={};a.propTypes=d,t.default=a,e.exports=t.default},105:function(e,t,r){"use strict";function o(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function n(e,t){var r=t.left,o=t.right,n=t.top,a=t.bottom,i=t.x,s=t.y,l=t.mirror,u=t.opposite,d=(r?1:0)|(o||s?2:0)|(n||i?4:0)|(a?8:0)|(l?16:0)|(u?32:0)|(e?64:0);if(f.hasOwnProperty(d))return f[d];if(!l!=!(e&&u)){var m=[o,r,a,n,s,i];r=m[0],o=m[1],n=m[2],a=m[3],i=m[4],s=m[5]}var p=void 0;if(i||s||r||o||n||a){var b=i||n||a?(a?"-":"")+"1":"0",v=s||o||r?(r?"-":"")+"1":"0";p=e?"from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, 90deg);\n          opacity: 0;\n        }":"from {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }"}else p="from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: "+(e?"1":"0")+";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: "+(e?"0":"1")+";\n        }";return f[d]=(0,c.animation)(p),f[d]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,r=(e.out,e.forever),a=e.timeout,i=e.duration,s=void 0===i?c.defaults.duration:i,l=e.delay,d=void 0===l?c.defaults.delay:l,f=e.count,m=void 0===f?c.defaults.count:f,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===a?s:a,delay:d,forever:r,count:m,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,u.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(43),l=r(73),u=(i=l)&&i.__esModule?i:{default:i},c=r(72),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},f={};a.propTypes=d,t.default=a,e.exports=t.default},106:function(e,t,r){"use strict";function o(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function n(e,t){var r=t.left,o=t.right,n=t.up,a=t.down,i=t.top,s=t.bottom,l=t.mirror,u=t.opposite,d=(r?1:0)|(o?2:0)|(i||a?4:0)|(s||n?8:0)|(l?16:0)|(u?32:0)|(e?64:0);if(f.hasOwnProperty(d))return f[d];if(!l!=!(e&&u)){var m=[o,r,s,i,a,n];r=m[0],o=m[1],i=m[2],s=m[3],n=m[4],a=m[5]}var p="-200deg",b="center";return(a||i)&&r&&(p="-45deg"),((a||i)&&o||(n||s)&&r)&&(p="45deg"),(n||s)&&o&&(p="-90deg"),(r||o)&&(b=(r?"left":"right")+" bottom"),f[d]=(0,c.animation)("\n    "+(e?"to":"from")+" { opacity: 0; transform-origin: "+b+"; transform: rotate3d(0, 0, 1, "+p+");}\n    "+(e?"from":"to")+" { opacity: 1; transform-origin: "+b+"; transform: none;}\n  "),f[d]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,r=(e.out,e.forever),a=e.timeout,i=e.duration,s=void 0===i?c.defaults.duration:i,l=e.delay,d=void 0===l?c.defaults.delay:l,f=e.count,m=void 0===f?c.defaults.count:f,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===a?s:a,delay:d,forever:r,count:m,style:{animationFillMode:"both"}};return(0,u.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(43),l=r(73),u=(i=l)&&i.__esModule?i:{default:i},c=r(72),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},f={};a.propTypes=d,t.default=a,e.exports=t.default},107:function(e,t,r){"use strict";function o(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function n(e,t){var r=t.left,o=t.right,n=t.mirror,a=t.opposite,i=(r?1:0)|(o?2:0)|(n?16:0)|(a?32:0)|(e?64:0);if(f.hasOwnProperty(i))return f[i];if(!n!=!(e&&a)){var s=[o,r];r=s[0],o=s[1]}var l=r?"-100%":o?"100%":"0",u=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+l+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+l+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return f[i]=(0,c.animation)(u),f[i]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,r=(e.out,e.forever),a=e.timeout,i=e.duration,s=void 0===i?c.defaults.duration:i,u=e.delay,d=void 0===u?c.defaults.delay:u,f=e.count,m=void 0===f?c.defaults.count:f,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===a?s:a,delay:d,forever:r,count:m,style:{animationFillMode:"both"}};return p.left,p.right,p.mirror,p.opposite,(0,l.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(73),l=(i=s)&&i.__esModule?i:{default:i},u=r(43),c=r(72),d={out:u.bool,left:u.bool,right:u.bool,mirror:u.bool,opposite:u.bool,duration:u.number,timeout:u.number,delay:u.number,count:u.number,forever:u.bool},f={};a.propTypes=d,t.default=a,e.exports=t.default},108:function(e,t,r){"use strict";function o(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function n(e,t){var r=t.left,o=t.right,n=t.up,a=t.down,i=t.top,s=t.bottom,l=t.mirror,u=t.opposite,d=(r?1:0)|(o?2:0)|(i||a?4:0)|(s||n?8:0)|(l?16:0)|(u?32:0)|(e?64:0);if(f.hasOwnProperty(d))return f[d];if(!l!=!(e&&u)){var m=[o,r,s,i,a,n];r=m[0],o=m[1],i=m[2],s=m[3],n=m[4],a=m[5]}var p=r||o,b=i||s||n||a,v=void 0;return p||b?e?v="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(p?(r?"":"-")+"42px":"0")+", "+(b?(a||i?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(p?(o?"":"-")+"2000px":"0")+", "+(b?(n||s?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(b?"center bottom":(r?"left":"right")+" center")+";\n        }":v="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(p?(r?"-":"")+"1000px":"0")+", "+(b?(a||i?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(p?(o?"-":"")+"10px":"0")+", "+(b?(n||s?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":v=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",f[d]=(0,c.animation)(v),f[d]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,r=(e.out,e.forever),a=e.timeout,i=e.duration,s=void 0===i?c.defaults.duration:i,l=e.delay,d=void 0===l?c.defaults.delay:l,f=e.count,m=void 0===f?c.defaults.count:f,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===a?s:a,delay:d,forever:r,count:m,style:{animationFillMode:"both"},reverse:p.left};return(0,u.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(43),l=r(73),u=(i=l)&&i.__esModule?i:{default:i},c=r(72),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},f={};a.propTypes=d,t.default=a,e.exports=t.default},135:function(e,t,r){"use strict";r.r(t);var o=r(5),n=r(6),a=r(9),i=r(0),s=function(e){var t=Object(i.useState)(""),r=Object(o.a)(t,2),n=r[0],a=r[1],s=Object(i.useState)(!1),l=Object(o.a)(s,2),u=l[0],c=l[1],d=e(n);return{value:n,isValid:d,hasError:!d&&u,valueChangeHandler:function(e){a(e.target.value)},inputBlurHandler:function(e){c(!0)},reset:function(){a(""),c(!1)}}},l=r(78),u=r(76),c=r(3),d=r(13),f=r(100),m=r.n(f),p=r(101),b=r(1);t.default=function(e){var t=Object(i.useContext)(d.b),r=Object(c.C)(),f=Object(i.useRef)(),v=Object(i.useRef)(),y=Object(i.useRef)(),g=Object(i.useRef)(),h=s((function(e){return""!==e.trim()})),O=h.value,j=h.isValid,x=h.hasError,_=h.valueChangeHandler,w=h.inputBlurHandler,N=h.reset,k=s((function(e){return""!==e.trim()})),M=k.value,P=k.isValid,E=k.hasError,S=k.valueChangeHandler,T=k.inputBlurHandler,C=k.reset,I=s((function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e)})),F=I.value,A=I.isValid,z=I.hasError,D=I.valueChangeHandler,L=I.inputBlurHandler,H=I.reset,R=s((function(e){return/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(e)})),B=R.value,V=R.isValid,X=R.hasError,Z=R.valueChangeHandler,Y=R.inputBlurHandler,J=R.reset;var U=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t,r){var o,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",body:JSON.stringify({requestType:"VERIFY_EMAIL",idToken:r}),headers:{"Content-Type":"application/json"}});case 3:if((o=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.next=8,o.json();case 8:a=e.sent,console.log("verfiy email Data",a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}(),q=Object(i.useState)(!1),W=Object(o.a)(q,2),K=W[0],Q=W[1],$=Object(i.useState)(""),G=Object(o.a)($,2),ee=G[0],te=G[1],re=Object(i.useState)(!1),oe=Object(o.a)(re,2),ne=oe[0],ae=oe[1],ie=Object(i.useState)(""),se=Object(o.a)(ie,2),le=se[0],ue=se[1],ce=function(){var e=Object(a.a)(Object(n.a)().mark((function e(t){var r,o;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",body:JSON.stringify({firstName:O,lastName:M,email:F,password:B,emailVerified:!1}),headers:{"Content-Type":"application/json"}});case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.next=8,r.json();case 8:o=e.sent,console.log("sendUserData Data",o),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return console.log("SuccessMSg",le),console.log("ErrorMSg",ee),console.log("isThereError",K),console.log("isThereSuccess",ne),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(p.Fade,{bottom:!0,children:Object(b.jsxs)("section",{className:m.a["section-form"],children:[Object(b.jsx)("h1",{className:m.a.title,children:" Create Account"}),Object(b.jsx)("div",{className:m.a["form-wrapper"],children:Object(b.jsx)("div",{className:m.a["form-content"],children:Object(b.jsxs)("form",{className:m.a.form,onSubmit:function(e){if(e.preventDefault(),j&&P&&A&&V){var o=f.current.value+" "+v.current.value,n=y.current.value,a=g.current.value;console.log("In Register",o),fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ",{method:"POST",body:JSON.stringify({email:n,password:a,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?(console.log("if respone is ok",e),e.json()):e.ok?void 0:(ae(!1),Q(!0),e.json().then((function(e){var t="Authentication Failed";e&&e.error&&e.error.message&&(t=e.error.message,te(t)),"EMAIL_EXISTS"===t&&te(t="This email address is already associated with an account.")})))})).then((function(e){if(console.log("registerData",e),e.error)return ae(!1),ue(null),Q(!0),void te(e.error.message);e&&(ce("https://react-http-products-default-rtdb.firebaseio.com/users.json"),Q(!1),te(null),ae(!0),ue("Account Created Successfully, Please Verify Your Email"),e.displayName=o,t.register(o,e.email,e.idToken),U("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ",e.idToken),setTimeout((function(){r("/home")}),3e3))})).catch((function(e){console.log(e.message)})),N(),C(),H(),J()}},children:[Object(b.jsxs)("div",{className:"".concat(m.a["form-control"]," ").concat(x&&m.a.invalid),children:[Object(b.jsx)("label",{className:m.a["input-label"],htmlFor:"firstName",children:"First Name"}),Object(b.jsx)("input",{className:m.a["input-field"]+" "+m.a["input-name-first"],ref:f,type:"text",id:"firstName",placeholder:"First Name",value:O,onBlur:w,onChange:_,autoComplete:"off",autoCapitalize:"off"}),j&&Object(b.jsx)(l.a,{className:m.a.checkIcon,icon:u.a}),x&&Object(b.jsx)(l.a,{className:m.a.xmarkIcon,icon:u.g}),x&&Object(b.jsx)("p",{className:m.a["error-msg-small"],children:"First name must not be empty."})]}),Object(b.jsxs)("div",{className:"".concat(m.a["form-control"]," ").concat(E&&m.a.invalid),children:[Object(b.jsx)("label",{className:m.a["input-label"],htmlFor:"lastName",children:"Last Name"}),Object(b.jsx)("input",{className:m.a["input-field"]+" "+m.a["input-name-last"],ref:v,type:"text",id:"lastName",placeholder:"Last Name",value:M,onBlur:T,onChange:S,autoComplete:"off",autoCapitalize:"off"}),P&&Object(b.jsx)(l.a,{className:m.a.checkIcon,icon:u.a}),E&&Object(b.jsx)(l.a,{className:m.a.xmarkIcon,icon:u.g}),E&&Object(b.jsx)("p",{className:m.a["error-msg-small"],children:"Last name must not be empty."})]}),Object(b.jsxs)("div",{className:"".concat(m.a["form-control"]," ").concat(z&&m.a.invalid),children:[Object(b.jsx)("label",{className:m.a["input-label"],htmlFor:"email",children:"Email Address"}),Object(b.jsx)("input",{className:m.a["input-field"],type:"email",ref:y,id:"email",value:F,placeholder:"Email",onBlur:L,onChange:D,autoComplete:"off",autoCapitalize:"off"}),A&&Object(b.jsx)(l.a,{className:m.a.checkIcon,icon:u.a}),z&&Object(b.jsx)(l.a,{className:m.a.xmarkIcon,icon:u.g}),z&&Object(b.jsx)("p",{className:m.a["error-text"],children:"Enter a valid email."})]}),Object(b.jsxs)("div",{className:"".concat(m.a["form-control"]," ").concat(X&&m.a.invalid),children:[Object(b.jsx)("label",{className:m.a["input-label"],htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{className:m.a["input-field"],type:"password",ref:g,id:"password",value:B,placeholder:"Password",onChange:Z,onBlur:Y,autoComplete:"off",autoCapitalize:"off"}),V&&Object(b.jsx)(l.a,{className:m.a.checkIcon,icon:u.a}),X&&Object(b.jsx)(l.a,{className:m.a.xmarkIcon,icon:u.g}),Object(b.jsx)("span",{className:m.a["span-clarify"],children:"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character."}),X&&Object(b.jsx)("p",{className:m.a["error-text"],children:"Enter a valid password."})]}),K&&!ne&&Object(b.jsx)("div",{className:m.a.errorMessage,children:Object(b.jsx)("ul",{className:m.a.errorMsgList,children:Object(b.jsxs)("li",{children:[" ",ee," "]})})}),ne&&!K&&Object(b.jsx)("div",{className:m.a.successMessage,children:Object(b.jsx)("ul",{className:m.a.successMsgList,children:Object(b.jsxs)("li",{children:[" ",le," "]})})}),Object(b.jsx)("button",{type:"submit",className:m.a["btn-submit"],children:"Create"})]})})})]})})})}},77:function(e,t,r){"use strict";function o(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}function n(e,t){var r=t.left,o=t.right,n=t.up,a=t.down,i=t.top,s=t.bottom,l=t.big,u=t.mirror,d=t.opposite,m=(r?1:0)|(o?2:0)|(i||a?4:0)|(s||n?8:0)|(u?16:0)|(d?32:0)|(e?64:0)|(l?128:0);if(f.hasOwnProperty(m))return f[m];var p=r||o||n||a||i||s,b=void 0,v=void 0;if(p){if(!u!=!(e&&d)){var y=[o,r,s,i,a,n];r=y[0],o=y[1],i=y[2],s=y[3],n=y[4],a=y[5]}var g=l?"2000px":"100%";b=r?"-"+g:o?g:"0",v=a||i?"-"+g:n||s?g:"0"}return f[m]=(0,c.animation)((e?"to":"from")+" {"+(p?" transform: translate3d("+b+", "+v+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),f[m]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,r=(e.out,e.forever),a=e.timeout,i=e.duration,s=void 0===i?c.defaults.duration:i,l=e.delay,d=void 0===l?c.defaults.delay:l,f=e.count,m=void 0===f?c.defaults.count:f,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===a?s:a,delay:d,forever:r,count:m,style:{animationFillMode:"both"},reverse:p.left};return(0,u.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var i,s=r(43),l=r(73),u=(i=l)&&i.__esModule?i:{default:i},c=r(72),d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,delay:s.number,count:s.number,forever:s.bool},f={};a.propTypes=d,t.default=a,e.exports=t.default}}]);
//# sourceMappingURL=7.48adc4f3.chunk.js.map