(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[11],{110:function(e,t,a){e.exports={contactWrapper:"contact_contactWrapper___RHnP",contactContainer:"contact_contactContainer__1IrTM",line:"contact_line__3IxW3",titlePrimary:"contact_titlePrimary__fSng1",titleSecondary:"contact_titleSecondary__1q874",clarify:"contact_clarify__3sRE7",listItem:"contact_listItem__4HPbw",clarifyBold:"contact_clarifyBold__3dREt",icon:"contact_icon__2qvHU",formContainer:"contact_formContainer__2JkKr",formControlGroup:"contact_formControlGroup__fSRBV",formControl:"contact_formControl__QTnx0",formFlex:"contact_formFlex__1ydOH",inputLabel:"contact_inputLabel__2ELnn",formInput:"contact_formInput__3iqci",formInputTextArea:"contact_formInputTextArea__2813V",formInputGroup:"contact_formInputGroup__lFYUA",btnSubmit:"contact_btnSubmit__2hheD",imageMap:"contact_imageMap__2Iz45",errorMessage:"contact_errorMessage__fwpKX",errorMsgList:"contact_errorMsgList__NkoVi",successMessage:"contact_successMessage__1h9BB",successMsgList:"contact_successMsgList__aZQfb",inputClarify:"contact_inputClarify__2YWIV"}},122:function(e,t,a){"use strict";a.r(t);var r=a(6),c=a(9),o=a(5),s=a(110),n=a.n(s),i=a(78),l=a(76),u=a(0),m=a(77),b=a.n(m),f=a(74),d=a.n(f),j=a(1);t.default=function(){var e=Object(u.useRef)(),t=Object(u.useRef)(),a=Object(u.useRef)(),s=Object(u.useRef)(),m=Object(u.useState)(!1),f=Object(o.a)(m,2),p=(f[0],f[1]),_=Object(u.useState)(!1),h=Object(o.a)(_,2),O=(h[0],h[1]),x=Object(u.useState)(!1),v=Object(o.a)(x,2),y=v[0],g=v[1],N=Object(u.useState)(""),C=Object(o.a)(N,2),I=C[0],S=C[1],w=Object(u.useState)(!1),M=Object(o.a)(w,2),L=M[0],T=M[1],k=Object(u.useState)(""),F=Object(o.a)(k,2),P=F[0],R=F[1],E=function(){var o=Object(c.a)(Object(r.a)().mark((function c(o){var n,i,l,u,m,b;return Object(r.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o.preventDefault(),p(!0),n=e.current.value,i=t.current.value,l=a.current.value,u=s.current.value,m={name:n,email:i,number:u,message:l},n&&i&&l&&u){r.next=12;break}return g(!0),S("All fields are required, please fill them all."),p(!1),r.abrupt("return");case 12:return r.next=14,fetch("https://react-http-products-default-rtdb.firebaseio.com/contact.json",{method:"POST",body:JSON.stringify(m),headers:{"Content-Type":"application/json"}});case 14:if((b=r.sent).ok){r.next=22;break}return g(!0),S("Something went wrong, please try again later."),p(!1),r.abrupt("return");case 22:g(!1),S(""),T(!0),R("Your message has been sent successfully. We will get in touch with you soon. Thank you."),console.log(b);case 27:p(!1),O(!0),e.current.value="",t.current.value="",s.current.value="",a.current.value="";case 33:case"end":return r.stop()}}),c)})));return function(e){return o.apply(this,arguments)}}();return Object(j.jsx)("div",{className:n.a.contactWrapper,children:Object(j.jsxs)("div",{className:n.a.contactContainer,children:[Object(j.jsxs)(b.a,{left:!0,children:[Object(j.jsx)("h1",{id:"title",className:n.a.titlePrimary,children:"LET'S TALK"}),Object(j.jsx)("p",{className:n.a.titleSecondary,children:"or swing with us for a cup of coffee"}),Object(j.jsx)("div",{className:n.a.line})]}),Object(j.jsxs)(d.a,{bottom:!0,children:[Object(j.jsxs)("div",{className:n.a.formContainer,children:[Object(j.jsx)("p",{className:n.a.clarifyBold,children:"InfinityStore's Team is always there to support you, highly responsive to your Inquiries and suggestions. Don\u2019t Ever Hesitate to contact Our Team, we will be extremely happy to provide our full support through the below contact details:"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{className:n.a.listItem,children:[Object(j.jsx)(i.a,{className:n.a.icon,icon:l.f})," +20 1551881810"]}),Object(j.jsxs)("li",{className:n.a.listItem,children:[Object(j.jsx)(i.a,{className:n.a.icon,icon:l.d}),"customercare@InfinityStore.com"]}),Object(j.jsxs)("li",{className:n.a.listItem,children:[Object(j.jsx)(i.a,{className:n.a.icon,icon:l.e}),"'Contact Us' form"]})]})]}),Object(j.jsxs)("form",{onSubmit:E,className:n.a.formContainer,children:[Object(j.jsxs)("div",{className:n.a.formControlGroup,children:[Object(j.jsxs)("div",{className:n.a.formFlex,children:[Object(j.jsx)("label",{className:n.a.inputLabel,htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{className:n.a.formInput,ref:e,type:"text",id:"name",autoCapitalize:"off",autoComplete:"on"})]}),Object(j.jsxs)("div",{className:n.a.formFlex,children:[Object(j.jsx)("label",{className:n.a.inputLabel,htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{className:n.a.formInput,ref:t,type:"email",id:"email",autoCapitalize:"off",autoComplete:"on"})]})]}),Object(j.jsxs)("div",{className:n.a.formControl,children:[Object(j.jsxs)("label",{className:n.a.inputLabel,htmlFor:"number",children:["Phone Number ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:n.a.inputClarify,children:" (Enter your phone number followed by your country code at first)"})]}),Object(j.jsx)("input",{type:"text",className:n.a.formInput,ref:s,id:"number"})]}),Object(j.jsxs)("div",{className:n.a.formControl,children:[Object(j.jsx)("label",{className:n.a.inputLabel,htmlFor:"message",children:"Message"}),Object(j.jsx)("textarea",{className:n.a.formInputTextArea,ref:a,id:"message"})]}),y&&Object(j.jsx)("div",{className:n.a.errorMessage,children:Object(j.jsx)("ul",{className:n.a.errorMsgList,children:Object(j.jsxs)("li",{children:[" ",I," "]})})}),L&&Object(j.jsx)("div",{className:n.a.successMessage,children:Object(j.jsx)("ul",{className:n.a.successMsgList,children:Object(j.jsxs)("li",{children:[" ",P," "]})})}),Object(j.jsx)("div",{className:"center",children:Object(j.jsx)("button",{className:n.a.btnSubmit,children:"Send"})})]})]})]})})}},77:function(e,t,a){"use strict";function r(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}function c(e,t){var a=t.left,r=t.right,c=t.up,o=t.down,s=t.top,n=t.bottom,i=t.big,l=t.mirror,m=t.opposite,f=(a?1:0)|(r?2:0)|(s||o?4:0)|(n||c?8:0)|(l?16:0)|(m?32:0)|(e?64:0)|(i?128:0);if(b.hasOwnProperty(f))return b[f];var d=a||r||c||o||s||n,j=void 0,p=void 0;if(d){if(!l!=!(e&&m)){var _=[r,a,n,s,o,c];a=_[0],r=_[1],s=_[2],n=_[3],c=_[4],o=_[5]}var h=i?"2000px":"100%";j=a?"-"+h:r?h:"0",p=o||s?"-"+h:c||n?h:"0"}return b[f]=(0,u.animation)((e?"to":"from")+" {"+(d?" transform: translate3d("+j+", "+p+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),b[f]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.defaults,t=e.children,a=(e.out,e.forever),o=e.timeout,s=e.duration,n=void 0===s?u.defaults.duration:s,i=e.delay,m=void 0===i?u.defaults.delay:i,b=e.count,f=void 0===b?u.defaults.count:b,d=r(e,["children","out","forever","timeout","duration","delay","count"]),j={make:c,duration:void 0===o?n:o,delay:m,forever:a,count:f,style:{animationFillMode:"both"},reverse:d.left};return(0,l.default)(d,j,j,t)}Object.defineProperty(t,"__esModule",{value:!0});var s,n=a(43),i=a(73),l=(s=i)&&s.__esModule?s:{default:s},u=a(72),m={out:n.bool,left:n.bool,right:n.bool,top:n.bool,bottom:n.bool,big:n.bool,mirror:n.bool,opposite:n.bool,duration:n.number,timeout:n.number,delay:n.number,count:n.number,forever:n.bool},b={};o.propTypes=m,t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=11.85893667.chunk.js.map