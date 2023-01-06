(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[10],{139:function(e,t,n){"use strict";n.r(t);var r=n(20),c=n(5),a=n(6),o=n(9),s=n(0),i=n(25),l=n(44),d=n.n(l),u=n(88),m=n.n(u),j=n(1),b=function(e){return Object(j.jsx)("div",{className:m.a.backdrop,onClick:e.onClose})},p=function(e){return Object(j.jsx)("div",{className:m.a.modal,children:Object(j.jsx)("div",{className:m.a.content,children:e.children})})},h=document.getElementById("backdrop-root"),_=document.getElementById("overlay-root"),x=function(e){return Object(j.jsxs)(j.Fragment,{children:[d.a.createPortal(Object(j.jsx)(b,{onClose:e.onClose}),h),d.a.createPortal(Object(j.jsx)(p,{children:e.children}),_)]})},f=n(89),v=n.n(f),O=n(90),w=n.n(O),C=function(e){return Object(j.jsxs)("li",{className:w.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:w.a.summary,children:[Object(j.jsx)("span",{className:w.a.price,children:e.price}),Object(j.jsxs)("span",{className:w.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:w.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g="https://js.stripe.com/v3",S=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,y="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",N=null,k=function(e){return null!==N||(N=new Promise((function(t,n){if("undefined"!==typeof window)if(window.Stripe&&e&&console.warn(y),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(g,'"]')),t=0;t<e.length;t++){var n=e[t];if(S.test(n.src))return n}return null}();r&&e?console.warn(y):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(g).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(c){return void n(c)}else t(null)}))),N},E=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.46.0",startTime:t})}(r,n),r},I=Promise.resolve().then((function(){return k(null)})),F=!1;I.catch((function(e){F||console.warn(e)}));var P,A=function(){return P||(P=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];F=!0;var r=Date.now();return I.then((function(e){return E(e,t,r)}))}("pk_test_51MFdGQIThjNZzBUPnadJLbcWKleZwPKZaAW4NOAsnnUWS07EtFkVoPWXAz2vqNEJkRX9JD1gcJMgnYmUGLfyFH7Z009N3oC1io")),P};t.default=function(e){var t=Object(s.useContext)(i.a),n=[],l=t.items;for(var d in l)n.push({price:l[d].stripePrice,quantity:+l[d].amount});console.log("cartCtxItems in Cart component",t),console.log("itemsss",n);var u={lineItems:n,mode:"payment",successUrl:"".concat(window.location.origin,"/success"),cancelUrl:"".concat(window.location.origin,"/cancel")},m=function(){var e=Object(o.a)(Object(a.a)().mark((function e(){var t,n,r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("redirect to checkout"),e.next=3,A();case 3:return t=e.sent,e.next=6,t.redirectToCheckout(u);case 6:n=e.sent,r=n.error,console.log(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=Object(s.useState)(!1),p=Object(c.a)(b,2),h=p[0],_=(p[1],Object(s.useState)(!1)),f=Object(c.a)(_,2),O=f[0],w=(f[1],Object(s.useState)(!1)),g=Object(c.a)(w,2),S=g[0],y=(g[1],"$".concat(t.totalAmount.toFixed(2))),N=t.items.length>0,k=function(e){t.removeItem(e)},E=function(e){t.addItem(Object(r.a)(Object(r.a)({},e),{},{amount:1}))},I=Object(j.jsx)("ul",{className:v.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(C,{name:e.name,amount:e.amount,price:e.price,onRemove:k.bind(null,e.id),onAdd:E.bind(null,e)},e.id)}))}),F=Object(j.jsxs)("div",{className:v.a.actions,children:[Object(j.jsx)("button",{className:v.a["button--alt"],onClick:e.onClose,children:"Close"}),N&&Object(j.jsx)("button",{className:v.a.button,onClick:m,children:"Checkout"})]}),P=Object(j.jsxs)(s.Fragment,{children:[I,Object(j.jsxs)("div",{className:v.a.flex,children:[Object(j.jsxs)("div",{className:v.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:y})]}),!h&&F]})]}),z=Object(j.jsx)("p",{className:v.a.orderSubmitting,children:"Sending order data..."}),U=Object(j.jsxs)("p",{className:v.a.orderSubmited,children:["Order sent successfully. we will be in touch with as you soon as your shipment is ready to be shipped."," "]});return Object(j.jsxs)(x,{onClose:e.onClose,children:[!O&&!S&&P,O&&z,!O&&S&&U]})}},88:function(e,t,n){e.exports={backdrop:"Modal_backdrop__2znzX",modal:"Modal_modal__2QgxK","slide-down":"Modal_slide-down__Y0TjC"}},89:function(e,t,n){e.exports={"cart-items":"Cart_cart-items__vzHa0",total:"Cart_total__2eGro",actions:"Cart_actions__1WjU2","button--alt":"Cart_button--alt__2HE6d",button:"Cart_button__UFFpv",orderSubmitting:"Cart_orderSubmitting__3y6Nb",orderSubmited:"Cart_orderSubmited__3SzKz"}},90:function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3MY83",summary:"CartItem_summary__xPm89",price:"CartItem_price__29Nnm",amount:"CartItem_amount__30Txm",actions:"CartItem_actions__2E3m3"}}}]);
//# sourceMappingURL=10.631913f3.chunk.js.map