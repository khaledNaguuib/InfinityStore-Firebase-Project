(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[19],{114:function(e,a,t){e.exports={confirmEmailWrapper:"confirmEmail_confirmEmailWrapper__8uFW8",confirmEmaiContainer:"confirmEmail_confirmEmaiContainer__q58wR",titlePrimary:"confirmEmail_titlePrimary__2vDXZ",titleSecondary:"confirmEmail_titleSecondary__2MSbj",clarify:"confirmEmail_clarify__1foUe",clarifyEmail:"confirmEmail_clarifyEmail__1hklH",errorMessage:"confirmEmail_errorMessage__3Xm3b",errorMsgList:"confirmEmail_errorMsgList__ZsqzU",successMessage:"confirmEmail_successMessage__1O2Qa",successMsgList:"confirmEmail_successMsgList__3ywdR",badgeContainer:"confirmEmail_badgeContainer__1daDe",iconCheck:"confirmEmail_iconCheck__nBBxP"}},129:function(e,a,t){"use strict";t.r(a);var i=t(6),c=t(9),r=t(5),s=t(0),n=t(78),o=t(87),l=t(13),m=t(114),f=t.n(m),u=t(1);a.default=function(){var e=Object(s.useContext)(l.b),a=new URLSearchParams(window.location.search).get("oobCode"),t=Object(s.useState)([]),m=Object(r.a)(t,2),j=(m[0],m[1]),b=Object(s.useState)({}),d=Object(r.a)(b,2),O=(d[0],d[1],Object(s.useState)("")),p=Object(r.a)(O,2),h=(p[0],p[1],Object(s.useState)("")),_=Object(r.a)(h,2),E=(_[0],_[1]),x=Object(s.useState)(!1),y=Object(r.a)(x,2),g=(y[0],y[1]),w=Object(s.useState)(!1),S=Object(r.a)(w,2),C=S[0],N=S[1],v=Object(s.useState)(null),k=Object(r.a)(v,2),M=k[0],V=k[1],L=Object(s.useState)(null),P=Object(r.a)(L,2),D=P[0],T=P[1];Object(s.useEffect)((function(){var e=function(){var e=Object(c.a)(Object(i.a)().mark((function e(){var a,t,c,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-products-default-rtdb.firebaseio.com/users.json");case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,a.json();case 7:for(r in t=e.sent,c=[],t)c.push({id:r,email:t[r].email,firstName:t[r].firstName,lastName:t[r].lastName,password:t[r].password,emailVerified:t[r].emailVerified});j(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(s.useEffect)((function(){var t=function(){var a=Object(c.a)(Object(i.a)().mark((function a(t,c){var r,s;return Object(i.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(t,{method:"POST",body:JSON.stringify({oobCode:c}),headers:{"Content-Type":"application/json"}});case 2:return(r=a.sent).ok||(N(!0),V("Email Verification Failed")),a.next=6,r.json();case 6:s=a.sent,E(s.email),s.emailVerified&&(g(s.emailVerified),e.isEmailVerfied(s.emailVerified),e.isOobCode(c),N(!1),T("Email Verified Successfully")),s.error&&(N(!0),V("Email Verification Failed"));case 10:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();t("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDNDXcfx6jpm5Y_121TikxsU7-Yx2ZrmeQ",a)}),[]),Object(u.jsxs)("div",{className:f.a.confirmEmailWrapper,children:[!C&&Object(u.jsxs)("div",{className:f.a.confirmEmaiContainer,children:[Object(u.jsx)("div",{className:f.a.badgeContainer,children:Object(u.jsx)(n.a,{icon:o.a,className:f.a.iconCheck})}),Object(u.jsx)("h1",{className:f.a.titleSecondary,children:D}),Object(u.jsxs)("p",{className:f.a.clarifyEmail,children:["for ",e.email," "]}),Object(u.jsxs)("p",{className:f.a.clarify,children:["You can now sign in with your new account",Object(u.jsx)("br",{})]})]}),C&&Object(u.jsxs)("div",{className:f.a.confirmEmaiContainer,children:[Object(u.jsx)("div",{className:f.a.badgeContainer,children:Object(u.jsx)(n.a,{icon:o.b,className:f.a.iconCheck})}),Object(u.jsx)("h1",{className:f.a.titleSecondary,children:M}),Object(u.jsxs)("p",{className:f.a.clarify,children:["Try Again or Contact Support!",Object(u.jsx)("br",{})]})]})]})}}}]);
//# sourceMappingURL=19.b6b2e39e.chunk.js.map