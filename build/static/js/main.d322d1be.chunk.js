(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[2],{10:function(e,t,a){e.exports={header:"navbar_header__ueXpw",logo:"navbar_logo__TD8P7",mainNavList:"navbar_mainNavList__1lQQ1",actionsBTNS:"navbar_actionsBTNS__3T4Yu",userIcon:"navbar_userIcon__1iS0P",userLogoutIcon:"navbar_userLogoutIcon__NYsFq",userIconProfile:"navbar_userIconProfile__3hgQ4",hamburger:"navbar_hamburger__MnBGs","is-active":"navbar_is-active__MwV_T","hamburger-inner":"navbar_hamburger-inner__3NBmq","hamburger-box":"navbar_hamburger-box__1VTn3","hamburger--squeeze":"navbar_hamburger--squeeze__2Z0L4",logoutIcon:"navbar_logoutIcon__yTV7L",mainNav:"navbar_mainNav__3tpzm",navActive:"navbar_navActive__1-w25"}},13:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(5),c=a(0),o=a.n(c),l=a(1),i=o.a.createContext({displayName:"",email:"",oobCode:"",emailVerified:!1,token:"",isLoggedIn:!1,setUserName:function(e){},getUserName:function(){},setUserInfo:function(e){},getUserData:function(){},updateEmail:function(e){},register:function(e){},login:function(e){},logout:function(){}}),r=function(e){var t=localStorage.getItem("token"),a=Object(c.useState)(t),o=Object(n.a)(a,2),r=o[0],s=o[1],j=Object(c.useState)(null),b=Object(n.a)(j,2),u=b[0],m=b[1],d=Object(c.useState)(null),h=Object(n.a)(d,2),O=h[0],f=h[1],x=Object(c.useState)(null),g=Object(n.a)(x,2),p=g[0],_=g[1],v=Object(c.useState)(!1),N=Object(n.a)(v,2),k=N[0],S=N[1],I=Object(c.useState)({}),y=Object(n.a)(I,2),C=y[0],L=y[1],z={displayName:u,email:O,oobCode:p,emailVerified:k,token:r,isLoggedIn:!!r,setUserName:function(e){m(e)},getUserName:function(){return u},updateEmail:function(e){f(e),localStorage.setItem("email",e)},register:function(e,t,a){m(e),f(t),s(a),localStorage.setItem("displayName",e),localStorage.setItem("email",t),localStorage.setItem("token",a),localStorage.setItem("emailVerified",!1)},login:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;s(e),f(t),m(a),S(n),localStorage.setItem("token",e),localStorage.setItem("email",t),localStorage.setItem("displayName",a),localStorage.setItem("emailVerified",n)},logout:function(){s(null),m(null),f(null),_(null),S(!1),L({}),localStorage.removeItem("token"),localStorage.removeItem("displayName"),localStorage.removeItem("email"),localStorage.removeItem("oobCode"),localStorage.removeItem("emailVerified"),localStorage.removeItem("userData")},isEmailVerfied:function(e){S(e),localStorage.setItem("emailVerified",e)},setUserInfo:function(e){L(e)},getUserData:function(){return C},isOobCode:function(e){_(e),localStorage.setItem("oobCode",e)}};return Object(l.jsx)(i.Provider,{value:z,children:e.children})};t.b=i},25:function(e,t,a){"use strict";var n=a(0),c=a.n(n).a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}});t.a=c},28:function(e,t,a){e.exports={button:"HeaderCartButton_button__eQtbq",icon:"HeaderCartButton_icon__lWm7V",badge:"HeaderCartButton_badge__2hlQF",bump:"HeaderCartButton_bump__32TLn"}},31:function(e,t,a){e.exports={cartIcon:"CartIcon_cartIcon__3cDuT",pathFill:"CartIcon_pathFill__1ISfb"}},4:function(e,t,a){e.exports={grid:"footer_grid__1epPS","grid-footer":"footer_grid-footer__Way27",footer:"footer_footer__2ebN5",container:"footer_container__2B6rz","logo-col":"footer_logo-col__t5BZp",logo:"footer_logo__1l4Lu","social-links":"footer_social-links__1om-p","social-icon":"footer_social-icon__1DMIi",copyright:"footer_copyright__3f0M9",line:"footer_line__22ZbT",contacts:"footer_contacts__1t5_o",address:"footer_address__1pl-f","footer-heading":"footer_footer-heading__16H19","footer-nav":"footer_footer-nav__3Haib","footer-link":"footer_footer-link__2S2ti"}},52:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(29),c=a.n(n),o=a(8),l=a(13),i=(a(52),a(6)),r=a(9),s=a(5),j=a(0),b=a.n(j),u=a(3),m=a(14),d=a(31),h=a.n(d),O=a(1),f=function(){return Object(O.jsx)("svg",{className:h.a.cartIcon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"white",children:Object(O.jsx)("path",{className:h.a.pathFill,d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},x=a(25),g=a(28),p=a.n(g),_=function(e){var t=Object(j.useContext)(x.a),a=Object(j.useContext)(l.b),n=t.items.reduce((function(e,t){return+e+ +t.amount}),0);return Object(O.jsxs)("button",{className:p.a.button,onClick:e.onClick,children:[Object(O.jsx)("span",{className:p.a.icon,children:Object(O.jsx)(f,{})}),a.isLoggedIn&&Object(O.jsx)("span",{className:p.a.badge,children:n})]})},v=a.p+"static/media/LOGOOOOO.1e3fe5b9.webp",N=a(10),k=a.n(N),S=function(e){var t=Object(u.C)(),a=Object(j.useState)(!1),n=Object(s.a)(a,2),c=n[0],i=n[1],r=function(){i(!1)},b=Object(j.useContext)(l.b),d=b.isLoggedIn;return Object(O.jsxs)("header",{className:k.a.header,children:[Object(O.jsx)("button",{onClick:function(){i(!c)},className:"".concat(k.a.hamburger," ").concat(k.a["hamburger--squeeze"]," ").concat(c?k.a["is-active"]:""),children:Object(O.jsx)("span",{className:k.a["hamburger-box"],children:Object(O.jsx)("span",{className:k.a["hamburger-inner"]})})}),Object(O.jsx)(o.Link,{to:"/",children:Object(O.jsx)("img",{src:v,alt:"Omnifood logo",className:k.a.logo})}),Object(O.jsx)("nav",{className:"".concat(k.a.mainNav," ").concat(c?k.a.navActive:""," "),children:Object(O.jsxs)("ul",{className:"".concat(k.a.mainNavList,"  "),children:[Object(O.jsx)("li",{onClick:r,children:Object(O.jsx)(m.b,{to:"/home","aria-label":"Home",color:"#000000",className:k.a.mainNavLink,children:"Home"})}),Object(O.jsx)("li",{onClick:r,children:Object(O.jsx)(m.b,{"aria-label":"about",to:"/about",color:"#000000",className:k.a.mainNavLink,children:"About"})}),Object(O.jsx)("li",{onClick:r,children:Object(O.jsx)(m.b,{to:"/shop","aria-label":"shop",color:"#000000",className:k.a.mainNavLink,children:"Shop"})}),Object(O.jsx)("li",{onClick:r,children:Object(O.jsx)(m.b,{"aria-label":"contact",to:"/contact",color:"#000000",className:k.a.mainNavLink,children:"Contact"})}),Object(O.jsx)("li",{onClick:r,children:Object(O.jsx)(m.b,{to:"/faq","aria-label":"faq",color:"#000000",className:k.a.mainNavLink,children:"FAQ"})})]})}),Object(O.jsxs)("div",{className:k.a.actionsBTNS,children:[Object(O.jsx)(_,{onClick:e.onShowCart}),!d&&Object(O.jsx)(o.Link,{"aria-label":"login",to:"/login",className:"fa-solid fa-user + ".concat(k.a.userIcon)}),d&&Object(O.jsx)("img",{onClick:function(){t("/profile")},src:"https://img.icons8.com/color/48/null/circled-user-male-skin-type-7--v1.png"}),d&&Object(O.jsx)(o.Link,{"aria-label":"logout",onClick:function(){b.logout()},to:"/home",className:"fa-solid fa-right-from-bracket ".concat(k.a.userLogoutIcon)})]})]})},I=a(11),y=a(20),C="add",L="remove",z="clear",A={items:function(){var e=localStorage.getItem("cart");return e?JSON.parse(e):[]}(),totalAmount:0},w=function(e,t){if(t.type===C){var a,n=+e.totalAmount+ +t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),o=e.items[c];if(o){var l=Object(y.a)(Object(y.a)({},o),{},{amount:+o.amount+ +t.item.amount});(a=Object(I.a)(e.items))[c]=l}else a=e.items.concat(t.item);return{items:a,totalAmount:n}}if(t.type===L){var i,r=e.items.findIndex((function(e){return e.id===t.id})),s=e.items[r],j=e.totalAmount-s.price;if(1===s.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var b=Object(y.a)(Object(y.a)({},s),{},{amount:s.amount-1});(i=Object(I.a)(e.items))[r]=b}return{items:i,totalAmount:j}}return t.type===z?A={items:[],totalAmount:0}:A},P=function(e){var t=Object(j.useReducer)(w,A),a=Object(s.a)(t,2),n=a[0],c=a[1],o={items:n.items,totalAmount:n.totalAmount,addItem:function(e){c({type:C,item:e})},removeItem:function(e){c({type:L,id:e})},clearCart:function(){c({type:z})}};return Object(j.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(n.items))}),[n.items]),Object(O.jsx)(x.a.Provider,{value:o,children:e.children})},H=a(4),F=a.n(H),B=function(){var e=(new Date).getFullYear();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("footer",{className:F.a.footer,children:Object(O.jsxs)("div",{className:F.a.container+" "+F.a.grid+" "+F.a["grid-footer"],children:[Object(O.jsxs)("div",{className:F.a["logo-col"],children:[Object(O.jsx)(o.Link,{to:"/","aria-label":"Store logo",children:Object(O.jsx)("img",{src:v,alt:"Omnifood logo",className:F.a.logo})}),Object(O.jsxs)("ul",{className:F.a["social-links"],children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:F.a["footer-link"],href:"#",children:Object(O.jsx)("ion-icon",{size:"large",className:F.a["social-icon"]+" "+F.a["footer-link"],name:"logo-instagram"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:F.a["footer-link"],href:"#",children:Object(O.jsx)("ion-icon",{size:"large",className:F.a["social-icon"]+" "+F.a["footer-link"],name:"logo-facebook"})})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:F.a["footer-link"],href:"#",children:Object(O.jsx)("ion-icon",{size:"large",className:F.a["social-icon"]+" "+F.a["footer-link"],name:"logo-twitter"})})})]}),Object(O.jsxs)("p",{className:F.a.copyright,children:["Copyright \xa9 ",Object(O.jsx)("span",{className:F.a.year,children:e}),", Inc. All rights reserved"]})]}),Object(O.jsxs)("div",{className:F.a["address-col"],children:[Object(O.jsx)("p",{className:F.a["footer-heading"],children:"Contact Us"}),Object(O.jsx)("div",{className:F.a.line}),Object(O.jsxs)("address",{className:F.a.contacts,children:[Object(O.jsx)("p",{className:F.a.address,children:"623 Harrison St., 2nd Floor, San Francisco, CA 94107"}),Object(O.jsx)("p",{className:F.a["footer-link"],children:"415-201-6370"}),Object(O.jsx)(o.Link,{className:F.a["footer-link"],href:"customercare@InfinityStore.com ","aria-label":"Email Address",children:"customercare@InfinityStore.com"})]})]}),Object(O.jsxs)("nav",{className:F.a["nav-col"],children:[Object(O.jsx)("p",{className:F.a["footer-heading"],children:"Account"}),Object(O.jsx)("div",{className:F.a.line}),Object(O.jsxs)("ul",{className:F.a["footer-nav"],children:[Object(O.jsx)("li",{children:Object(O.jsx)(o.Link,{className:F.a["footer-link"],"aria-label":"Create Account",to:"/register",children:"Create Account"})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.Link,{className:F.a["footer-link"],"aria-label":"Sign in",to:"/login",children:"Sign in"})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.Link,{className:F.a["footer-link"],"aria-label":"FAQ",to:"/faq",children:"FAQ"})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.Link,{className:F.a["footer-link"],"aria-label":"Contact",to:"/contact",children:"Contact"})})]})]}),Object(O.jsxs)("nav",{className:F.a["nav-col"],children:[Object(O.jsx)("p",{className:F.a["footer-heading"],children:"Company"}),Object(O.jsx)("div",{className:F.a.line}),Object(O.jsxs)("ul",{className:F.a["footer-nav"],children:[Object(O.jsx)("li",{children:Object(O.jsx)(o.Link,{className:F.a["footer-link"],"aria-label":"About US",to:"/about",children:"About Us"})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.Link,{className:F.a["footer-link"],"aria-label":"Shop",to:"/shop",children:"Shop"})})]})]}),Object(O.jsxs)("nav",{className:F.a["nav-col"],children:[Object(O.jsx)("p",{className:F.a["footer-heading"],children:"Resources"}),Object(O.jsx)("div",{className:F.a.line}),Object(O.jsxs)("ul",{className:F.a["footer-nav"],children:[Object(O.jsx)("li",{children:Object(O.jsx)(o.Link,{className:F.a["footer-link"],"aria-label":"Help center",to:"/help-center",children:"Help center"})}),Object(O.jsx)("li",{children:Object(O.jsx)(o.Link,{className:F.a["footer-link"],"aria-label":"Privacy-terms",to:"privacy-terms",children:"Privacy & terms"})})]})]})]})})})},T=a(30),V=a(42),U=a.n(V),q=b.a.lazy((function(){return a.e(10).then(a.bind(null,139))})),E=b.a.lazy((function(){return a.e(5).then(a.bind(null,137))})),Q=b.a.lazy((function(){return a.e(8).then(a.bind(null,138))})),D=b.a.lazy((function(){return a.e(6).then(a.bind(null,140))})),M=b.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,141))})),J=b.a.lazy((function(){return a.e(9).then(a.bind(null,124))})),R=b.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(11)]).then(a.bind(null,125))})),Y=b.a.lazy((function(){return a.e(22).then(a.bind(null,126))})),Z=b.a.lazy((function(){return a.e(14).then(a.bind(null,127))})),G=b.a.lazy((function(){return a.e(21).then(a.bind(null,128))})),W=b.a.lazy((function(){return Promise.all([a.e(0),a.e(25),a.e(19)]).then(a.bind(null,129))})),X=b.a.lazy((function(){return a.e(24).then(a.bind(null,130))})),K=b.a.lazy((function(){return a.e(20).then(a.bind(null,131))})),$=b.a.lazy((function(){return a.e(23).then(a.bind(null,132))})),ee=b.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(12)]).then(a.bind(null,133))})),te=b.a.lazy((function(){return a.e(15).then(a.bind(null,142))})),ae=b.a.lazy((function(){return a.e(13).then(a.bind(null,143))})),ne=b.a.lazy((function(){return a.e(16).then(a.bind(null,134))})),ce=b.a.lazy((function(){return a.e(17).then(a.bind(null,135))})),oe=b.a.lazy((function(){return a.e(18).then(a.bind(null,136))}));var le=function(){var e=Object(j.useContext)(l.b),t=e.isLoggedIn,a=Object(j.useState)(!1),n=Object(s.a)(a,2),c=n[0],o=n[1];console.log("Auth Context From APP.js",e),Object(j.useEffect)((function(){if(t){var a=localStorage.getItem("displayName"),n=localStorage.getItem("email"),c=localStorage.getItem("token"),o=localStorage.getItem("emailVerified");e.login(c,n,a,o)}}),[e,t]);var b=Object(j.useState)(!0),d=Object(s.a)(b,2),h=d[0],f=d[1];return Object(j.useEffect)((function(){var e=function(){var e=Object(r.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,2e3)}));case 2:f((function(e){return!e}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),h?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)(T.a,{width:"200",color:"white"})}):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(j.Suspense,{fallback:Object(O.jsx)("div",{className:"loader2",children:Object(O.jsx)(T.a,{width:"200",color:"#4fa94d"})}),children:[Object(O.jsx)(U.a,{innerSize:20,outerSize:15,color:"000, 000, 000",outerAlpha:.2,innerScale:.7,outerScale:5,clickables:["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link","h1","p"]}),Object(O.jsxs)(P,{children:[Object(O.jsx)(S,{onShowCart:function(){o(!0)}}),c&&Object(O.jsx)(q,{onClose:function(){o(!1)}}),Object(O.jsx)(m.a,{}),Object(O.jsxs)(u.h,{children:[Object(O.jsx)(u.e,{path:"/",element:Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(u.c,{replace:!0,to:"/home",children:[" ",Object(O.jsx)(E,{})," ",Object(O.jsx)($,{})," "]})})}),Object(O.jsx)(u.e,{index:!0,element:Object(O.jsx)(E,{})}),Object(O.jsx)(u.e,{path:"/home",element:Object(O.jsx)(E,{})}),Object(O.jsx)(u.e,{path:"/shop",element:Object(O.jsx)(D,{})}),Object(O.jsx)(u.e,{path:"/about",element:Object(O.jsx)(Q,{})}),Object(O.jsx)(u.e,{path:"/contact",element:Object(O.jsx)(R,{})}),Object(O.jsx)(u.e,{path:"/login",element:t?Object(O.jsx)(u.c,{to:"/home"}):Object(O.jsx)(J,{})}),Object(O.jsx)(u.e,{path:"/login/forget",element:Object(O.jsx)(Z,{})}),Object(O.jsx)(u.e,{path:"/register",element:t?Object(O.jsx)(u.c,{to:"/home"}):Object(O.jsx)(M,{})}),Object(O.jsx)(u.e,{path:"/profile",element:t?Object(O.jsx)(Y,{}):Object(O.jsx)(u.c,{to:"/login"})}),Object(O.jsx)(u.e,{path:"/reset",element:Object(O.jsx)(G,{})}),Object(O.jsx)(u.e,{path:"/verfiy",element:Object(O.jsx)(W,{})}),Object(O.jsx)(u.e,{path:"/actions",element:Object(O.jsx)(X,{})}),Object(O.jsx)(u.e,{path:"/faq",element:Object(O.jsx)(ee,{})}),Object(O.jsx)(u.e,{path:"/success",element:Object(O.jsx)(te,{})}),Object(O.jsx)(u.e,{path:"/cancel",element:Object(O.jsx)(ae,{})}),Object(O.jsx)(u.e,{path:"/changeEmail",element:Object(O.jsx)(ne,{})}),Object(O.jsx)(u.e,{path:"/changePassword",element:Object(O.jsx)(ce,{})}),Object(O.jsx)(u.e,{path:"/verifyEmail",element:Object(O.jsx)(oe,{})}),Object(O.jsx)(u.e,{path:"*",element:Object(O.jsx)(K,{})})]})]}),Object(O.jsx)(B,{})]})})};c.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(l.a,{children:Object(O.jsx)(o.BrowserRouter,{children:Object(O.jsx)(le,{})})}))}},[[71,3,4]]]);
//# sourceMappingURL=main.d322d1be.chunk.js.map