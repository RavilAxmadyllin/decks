(this.webpackJsonpdecks=this.webpackJsonpdecks||[]).push([[0],{13:function(e,t,a){e.exports={page:"Card_page__3ae5L",container:"Card_container__2DtDv",items:"Card_items__LvJp8",side:"Card_side__2pewO",content:"Card_content__2sMx8",front:"Card_front__13cpF",back:"Card_back__1uK38"}},15:function(e,t,a){e.exports={header:"Header_header__2QrRn",container:"Header_container__2mkAL",secondBlock:"Header_secondBlock__Bv655",link:"Header_link__1xH-x",active:"Header_active__BDwnA",logout:"Header_logout__23tRj",user:"Header_user__1AzpF"}},16:function(e,t,a){e.exports=a.p+"static/media/avatar.2da04171.png"},18:function(e,t,a){e.exports={wrap:"Users_wrap__1SGB-",container:"Users_container__1QoYk",btn:"Users_btn__RlZLK",UsersBlock:"Users_UsersBlock__2pQ4E",UserItem:"Users_UserItem__3pYe3",avatar:"Users_avatar__2leLo",userDesc:"Users_userDesc___GRDP"}},22:function(e,t,a){e.exports={input:"Input_input__1bEls",checkbox:"Input_checkbox__Ch0mV"}},25:function(e,t,a){e.exports={simpleButton:"Button_simpleButton__36xfw",btnDisabled:"Button_btnDisabled__20iz1"}},26:function(e,t,a){e.exports={wrapper:"SettingProfile_wrapper__3S8tT",image:"SettingProfile_image__1bBCX",form:"SettingProfile_form__3tzpB",input:"SettingProfile_input__2hBa0"}},31:function(e,t,a){e.exports={modalOverlay:"Modal_modalOverlay__1DUub",modal:"Modal_modal__I_ohH",modalClose:"Modal_modalClose__2l1ST"}},35:function(e,t,a){e.exports={load:"Preloader_load__2RX1K",loading:"Preloader_loading__3XAhJ"}},37:function(e,t,a){e.exports={overlayProfile:"Profile_overlayProfile__1sNNk",profile:"Profile_profile__3P5Xo"}},38:function(e,t,a){e.exports={page:"Packs_page__OrCyS",overlay:"Packs_overlay__t2AUN"}},39:function(e,t,a){e.exports={wrapper:"ErrorBar_wrapper__77sIl",errorMessage:"ErrorBar_errorMessage__3tTMa"}},50:function(e,t,a){e.exports={link:"Link_link__1Y_lh"}},52:function(e,t,a){e.exports={text:"Login_text__3vhVU"}},53:function(e,t,a){e.exports={pagination:"Pagination_pagination__2L43h"}},54:function(e,t,a){e.exports={page:"LearnPage_page__qx9pU"}},56:function(e,t,a){e.exports=a(86)},61:function(e,t,a){},62:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),u=a.n(c),l=(a(61),a(62),a(15)),o=a.n(l),s=a(16),i=a.n(s),p=a(8),d=a(50),m=a.n(d),f=function(e){var t=e.path,a=e.title;return r.a.createElement(p.b,{to:t,className:m.a.link},a)},E=a(35),v=a.n(E),b=function(){return r.a.createElement("div",{className:v.a.load},r.a.createElement("div",{className:v.a.loading},"Loading"))},h=function(e){var t=e.profile,a=t.name,n=t.avatar,c=n||i.a;return r.a.createElement("div",{className:o.a.header},r.a.createElement("div",{className:o.a.container},r.a.createElement("div",{className:o.a.secondBlock},r.a.createElement(f,{path:"/profile",title:"LOGO"}),r.a.createElement("div",null,r.a.createElement(p.b,{to:"/users",className:o.a.link,activeClassName:o.a.active},"users"))),r.a.createElement("div",{className:o.a.navBar},!e.isAuth&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p.b,{to:"/forgot",className:o.a.link,activeClassName:o.a.active},"forgot"),r.a.createElement(p.b,{to:"/login",className:o.a.link,activeClassName:o.a.active},"login"))),e.isAuth&&r.a.createElement("div",{className:o.a.user},r.a.createElement("img",{src:c,alt:"avatar"}),r.a.createElement(f,{path:"/profile",title:a}))),e.isLoading&&r.a.createElement(b,null))},g=a(7),O=a(4),k=a(22),_=a.n(k);function j(e){return r.a.createElement(r.a.Fragment,null,"checkbox"===e.type?r.a.createElement("label",{className:_.a.checkbox},r.a.createElement("input",Object.assign({className:"checkbox"===e.type?_.a.checkbox:_.a.input},e)),e.placeholder):r.a.createElement("input",Object.assign({className:"checkbox"===e.type?_.a.checkbox:_.a.input},e)))}var w=a(25),x=a.n(w),C=function(e){var t=e.name,a=e.disabled,n=e.children;return r.a.createElement("button",Object.assign({},e,{className:e.disabled?"".concat(x.a.btnDisabled," ").concat(x.a.simpleButton):x.a.simpleButton,disabled:a}),t||n)},y=function(e){var t=e.children;return r.a.createElement("label",{className:x.a.simpleButton},"upload file",t)},R=a(3),S=a(1),N=a.n(S),A=a(2),P=a(5),U=a(30),D=a.n(U),T=D.a.create({baseURL:"https://neko-back.herokuapp.com/2.0",withCredentials:!0}),L=function(e,t,a){return Object(A.a)(N.a.mark((function n(){var r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.post("/auth/login",{email:e,password:t,rememberMe:a});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))()},M=function(){return Object(A.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post("/auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},B=function(e){var t=arguments;return Object(A.a)(N.a.mark((function a(){var n,r,c;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:"",r=n||"",a.next=4,T.put("/auth/me",{name:e,avatar:r});case 4:return c=a.sent,a.abrupt("return",c.data);case 6:case"end":return a.stop()}}),a)})))()},I=function(){return Object(A.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.delete("/auth/me");case 2:case"end":return e.stop()}}),e)})))()},H={initialApp:!1,isLoading:!1,error:null},F=function(e,t){return{type:"PAYLOAD/APP/REDUCER",payload:{isLoading:e,error:t}}},G=a(17),z=a.n(G),K={isAuth:!1,profile:{name:null,id:null,avatar:null},success:!1},Y=function(e){return{type:"AUTH_ME/LOGIN/REDUCER",auth:e}},q=function(e,t,a){return{type:"SET_PROFILE/REDUCER",name:e,id:t,avatar:a}},V=function(){return function(){var e=Object(A.a)(N.a.mark((function e(t){var a,n,r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(F(!0,null)),e.prev=1,e.next=4,M();case 4:a=e.sent,z.a.set("token",a.token),n=a.name,r=a._id,c=a.avatar,t(Y(!0)),t(F(!1,null)),t(q(n,r,c)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t(F(!1,e.t0.response.data.error));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},W=a(52),X=a.n(W),J=function(){var e=Object(n.useState)("test@email.nya"),t=Object(O.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)("test@email.nya123"),l=Object(O.a)(u,2),o=l[0],s=l[1],i=Object(n.useState)(!0),d=Object(O.a)(i,2),m=d[0],f=d[1],E=Object(R.c)((function(e){return e.login})).isAuth,v=Object(R.c)((function(e){return e.app})).isLoading,b=Object(R.b)();if(E)return r.a.createElement(g.a,{to:"/profile"});return r.a.createElement("div",{className:"page-form"},r.a.createElement("h2",null,"Login"),r.a.createElement(j,{placeholder:"email",onChange:function(e){return c(e.target.value)},value:a}),r.a.createElement(j,{placeholder:"password",type:"password",onChange:function(e){return s(e.target.value)},value:o}),r.a.createElement(j,{placeholder:"remember me",type:"checkbox",onChange:function(e){return f(e.target.checked)},checked:m}),r.a.createElement("p",{className:X.a.text},"forgot password or email ",r.a.createElement(p.b,{to:"/forgot"},"forgot")),r.a.createElement(p.b,{to:"/registration"},"registration"),r.a.createElement(C,{name:"send",onClick:function(){return b(function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var n=Object(A.a)(N.a.mark((function n(r){var c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(F(!0,null)),n.prev=1,n.next=4,L(e,t,a);case 4:return r(F(!1,null)),n.next=7,r(V());case 7:n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),c=n.t0.response.data.error,r(F(!1,c));case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(a,o,m))},disabled:v,style:{width:"200px",marginTop:"10px",letterSpacing:"10px"}}))},Q=function(e,t){return Object(A.a)(N.a.mark((function a(){var n;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.post("/auth/register",{email:e,password:t});case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}),a)})))()},$={success:!1},Z=function(e){return{type:"PAYLOAD/REGISTER/REDUCER",success:e}},ee=r.a.memo((function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(""),l=Object(O.a)(u,2),o=l[0],s=l[1],i=Object(n.useState)(""),p=Object(O.a)(i,2),d=p[0],m=p[1],f=Object(R.b)(),E=Object(R.c)((function(e){return e.register})).success,v=Object(R.c)((function(e){return e.app})).isLoading;return Object(n.useEffect)((function(){return function(){f(Z(!1))}}),[f]),E?r.a.createElement(g.a,{to:"/login"}):r.a.createElement("div",{className:"page-form"},r.a.createElement("h2",null,"Register"),r.a.createElement("div",null,v&&r.a.createElement(b,null)),r.a.createElement("br",null),r.a.createElement(j,{placeholder:"email",onChange:function(e){return c(e.target.value)},value:a}),r.a.createElement(j,{placeholder:"password",type:"password",onChange:function(e){return s(e.target.value)},value:o}),r.a.createElement(j,{placeholder:"confirm password",type:"password",onChange:function(e){return m(e.target.value)},value:d}),r.a.createElement(C,{name:"send",onClick:function(){return f(function(e,t,a){return function(){var n=Object(A.a)(N.a.mark((function n(r){return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r(F(!0,null)),t===a){n.next=5;break}r(F(!1,"Password is not match")),n.next=27;break;case 5:if(""!==e&&""!==t&&""!==a){n.next=9;break}r(F(!1,"All field is required!")),n.next=27;break;case 9:if(!(t.length<=7||a.length<=7)){n.next=13;break}r(F(!1,"password must be more than 7 char!")),n.next=27;break;case 13:if(e.match(/^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i)){n.next=17;break}r(F(!1,"Email is not valid!")),n.next=27;break;case 17:return n.prev=17,n.next=20,Q(e,t);case 20:r(Z(!0)),r(F(!1,null)),n.next=27;break;case 24:n.prev=24,n.t0=n.catch(17),r(F(!1,n.t0.response.data.error));case 27:case"end":return n.stop()}}),n,null,[[17,24]])})));return function(e){return n.apply(this,arguments)}}()}(a,o,d))},disabled:v}))})),te=function(e,t,a){return Object(A.a)(N.a.mark((function n(){var r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T.post("/auth/forgot",{email:e,html1:t,html2:a});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))()},ae=function(e,t){return Object(A.a)(N.a.mark((function a(){var n;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.post("/auth/set-new-password",{token:e,password:t});case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}),a)})))()},ne={loading:!1,error:"",success:!1},re=function(e,t,a){return{type:"RECOVERY/REDUCER",payload:{loading:e,error:t,success:a}}},ce=r.a.memo((function(){var e=Object(R.c)((function(e){return e.recovery})),t=e.loading,a=e.success,c=e.error,u=Object(n.useState)(""),l=Object(O.a)(u,2),o=l[0],s=l[1],i=Object(R.b)(),p=Object(n.useCallback)((function(e){s(e.target.value)}),[s]),d=Object(n.useCallback)((function(){i(function(e){return function(){var t=Object(A.a)(N.a.mark((function t(a){var n,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(re(!0,"",!1)),t.prev=1,"<a href='http://localhost:3000/reset-password/",">reset-password-link</a>",t.next=6,te(e,"<a href='http://localhost:3000/reset-password/",">reset-password-link</a>");case 6:n=t.sent,a(re(!1,"",n.success)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),r=t.t0.response.data.error,a(re(!1,r,!1));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}(o))}),[i,o]);return r.a.createElement("div",{className:"page-form"},r.a.createElement("h2",null,"forgot password"),t&&r.a.createElement("span",{style:{fontWeight:"bold"}},"loading"),c&&r.a.createElement("span",{style:{color:"red"}},c),a&&r.a.createElement("span",{style:{fontWeight:"bold"}},"message send to email"),r.a.createElement("br",null),r.a.createElement(j,{placeholder:"email",onChange:p,value:o}),r.a.createElement(C,{name:"send",onClick:d,disabled:t}))})),ue=r.a.memo((function(e){var t=Object(R.c)((function(e){return e.recovery})),a=t.loading,c=t.error,u=t.success,l=Object(n.useState)(""),o=Object(O.a)(l,2),s=o[0],i=o[1],p=Object(g.g)().token,d=Object(R.b)(),m=Object(n.useCallback)((function(e){i(e.target.value)}),[i]);return u?r.a.createElement(g.a,{to:"/login"}):r.a.createElement("div",{className:"page-form"},r.a.createElement("h3",null,"new password"),a&&r.a.createElement("span",{style:{fontWeight:"bold"}},"loading"),c&&r.a.createElement("span",{style:{color:"red"}},c),r.a.createElement(j,{placeholder:"new password",type:"password",value:s,onChange:m}),r.a.createElement(C,{name:"send",disabled:a,onClick:function(){d(function(e,t){return function(){var a=Object(A.a)(N.a.mark((function a(n){var r,c;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(re(!0,"",!1)),a.prev=1,a.next=4,ae(e,t);case 4:r=a.sent,n(re(!1,"",r.success)),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),c=a.t0.response.data.error,n(re(!1,c,!1));case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(p,s))}}))})),le=a(53),oe=a.n(le),se=function(e){for(var t=Object(n.useState)(1),a=Object(O.a)(t,2),c=a[0],u=a[1],l=Math.ceil(e.cardPacksTotalCount/e.portionSize),o=[],s=1;s<=l;s++)o.push(s);var i=Math.ceil(l/e.portionSize),p=(c-1)*e.portionSize+1,d=c*e.portionSize,m=o.filter((function(e){return e>=p&&e<=d}));return r.a.createElement("div",{className:oe.a.pagination},c>1&&r.a.createElement("span",{onClick:function(){u(c-1)}}," ",r.a.createElement("button",null,"<")," "),m.map((function(t){return r.a.createElement("span",{onClick:function(){return e.onPageChanged(t)},key:t},t===e.page?r.a.createElement("b",null,t):t)})),i>c&&r.a.createElement("span",{onClick:function(){u(c+1)}}," ",r.a.createElement("span",null,">")," "))},ie=a(19),pe=function(e){var t=arguments;return Object(A.a)(N.a.mark((function a(){var n,r,c;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:1,r="?cardsPack_id=".concat(e),a.next=4,T.get("/cards/card".concat(r,"&page=").concat(n,"&pageCount=6"));case 4:return c=a.sent,a.abrupt("return",c.data);case 6:case"end":return a.stop()}}),a)})))()},de=function(e,t){var a=arguments;return Object(A.a)(N.a.mark((function n(){var r,c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:"",n.next=3,T.post("/cards/card",{card:{cardsPack_id:e,question:t,answer:r}});case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))()},me=function(e){return Object(A.a)(N.a.mark((function t(){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.delete("/cards/card?id=".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},fe=function(e,t){var a=arguments;return Object(A.a)(N.a.mark((function n(){var r,c;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>2&&void 0!==a[2]?a[2]:"",n.next=3,T.put("/cards/card",{card:{_id:e,question:t,answer:r}});case 3:return c=n.sent,n.abrupt("return",c.data);case 5:case"end":return n.stop()}}),n)})))()},Ee=function(e,t){return Object(A.a)(N.a.mark((function a(){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.put("/cards/grade",{card_id:e,grade:t});case 2:case"end":return a.stop()}}),a)})))()},ve=function(e){var t=arguments;return Object(A.a)(N.a.mark((function a(){var n,r,c;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.length>1&&void 0!==t[1]?t[1]:1,r=e?"&packName=".concat(e):"",a.next=4,T.get("/cards/pack?page=".concat(n).concat(r,"&pageCount=6"));case 4:return c=a.sent,a.abrupt("return",c.data);case 6:case"end":return a.stop()}}),a)})))()},be=function(e){return Object(A.a)(N.a.mark((function t(){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.post("/cards/pack",{cardsPack:{name:e}});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},he=function(e){return Object(A.a)(N.a.mark((function t(){var a;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.delete("/cards/pack?id=".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},ge=function(e,t){return Object(A.a)(N.a.mark((function a(){var n;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.put("/cards/pack",{cardsPack:{_id:e,name:t}});case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}),a)})))()},Oe={packs:[]},ke=function(e){return{type:"PACKS_REDUCER/SET_PACKS",packs:e}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var a=Object(A.a)(N.a.mark((function a(n,r){var c;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(F(!0,null)),a.prev=1,a.next=4,ve(e,t);case 4:c=a.sent,z.a.set("token",c.token),n(ye(c.cardPacksTotalCount,t)),n(ke(c.cardPacks)),n(F(!1,null)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),n(F(!1,a.t0.response.data.error));case 14:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e,t){return a.apply(this,arguments)}}()},je={settings:{search:"",page:1,total:10}},we=function(e){return{type:"SEARCH_REDUCER/SET_SEARCH",payload:{search:e}}},xe=function(e){return{type:"SEARCH_REDUCER/SET_CURRENT_PAGE",payload:{page:e}}},Ce=function(e){return{type:"SEARCH_REDUCER/SET_TOTAL_COUNT",payload:{total:e}}},ye=function(e,t){return function(a){a(Ce(e)),a(xe(t))}},Re=function(e){return function(){var t=Object(A.a)(N.a.mark((function t(a,n){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(xe(e));case 1:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},Se={cards:[]},Ne=function(e){return{type:"SET_CARDS/CARDS_REDUCER",cards:e}},Ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var a=Object(A.a)(N.a.mark((function a(n){var r;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(F(!0,null)),a.prev=1,a.next=4,pe(e,t);case 4:r=a.sent,n(F(!1,null)),n(ye(r.cardsTotalCount,t)),n(Ne(r.cards)),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),n(F(!1,a.t0.response.data.error));case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()},Pe=a(31),Ue=a.n(Pe),De=function(e){var t=e.children,a=e.closeModal,n=e.show,c=e.width,u=function(e){a()};return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:Ue.a.modalOverlay,onClick:u}),r.a.createElement("div",{className:Ue.a.modal,style:{width:c}},r.a.createElement("div",{className:Ue.a.modalClose,onClick:u},"\xd7"),t)):null},Te=function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],u=a[1],l=Object(n.useState)(""),o=Object(O.a)(l,2),s=o[0],i=o[1],p=function(){e.setOpenModal(!e.openModal),u(""),i("")};return r.a.createElement(De,{show:e.openModal,closeModal:p},r.a.createElement("div",null,r.a.createElement("h2",null,e.title," :"),r.a.createElement(j,{value:c,onChange:function(e){return u(e.currentTarget.value)}}),r.a.createElement(j,{value:s,onChange:function(e){return i(e.currentTarget.value)}})),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(C,{name:"send",style:{margin:"5px"},onClick:function(){c.trim()&&e.addItem(c,s),p()}}),r.a.createElement(C,{name:"back",style:{margin:"5px"},onClick:p})))},Le=a(13),Me=a.n(Le),Be=function(e){var t=e.oneCard;return t?r.a.createElement("div",{className:Me.a.container},r.a.createElement("div",{className:Me.a.items},r.a.createElement("div",{className:"".concat(Me.a.front,"  ").concat(Me.a.side)},r.a.createElement("div",{className:Me.a.content},r.a.createElement("h1",null,"question"),r.a.createElement("p",null,t.question))),r.a.createElement("div",{className:"".concat(Me.a.back," ").concat(Me.a.side)},r.a.createElement("div",{className:Me.a.content},r.a.createElement("h1",null,"answer"),r.a.createElement("p",null,t.answer))))):r.a.createElement("div",null,"no cards yet")},Ie=a(54),He=a.n(Ie),Fe=function(e){var t=e.id,a=e.cards,c=e.show,u=e.onClose,l=Object(n.useState)(a[0]),o=Object(O.a)(l,2),s=o[0],i=o[1],p=Object(R.b)();Object(n.useEffect)((function(){a.length>0&&i(ze(a))}),[p,t,a]);var d=function(e){return p(function(e,t){return function(){var a=Object(A.a)(N.a.mark((function a(n){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Ee(e,t);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(s._id,e))};return r.a.createElement(De,{show:c,closeModal:u},r.a.createElement("p",null,"Learn page : "),r.a.createElement("div",{className:He.a.page},r.a.createElement(C,{onClick:function(){return i(ze(a))},name:"next",disabled:!s}),r.a.createElement(Be,{oneCard:s})),s&&Ge.map((function(e,t){return r.a.createElement("button",{key:"grade-"+t,onClick:function(){return d(e)}},e)})))},Ge=[1,2,3,4,5],ze=function(e){var t=e.reduce((function(e,t){return e+(6-t.grade)*(6-t.grade)}),0),a=Math.random()*t,n=e.reduce((function(e,t,n){var r=e.sum+(6-t.grade)*(6-t.grade);return{sum:r,id:r<a?n:e.id}}),{sum:0,id:-1});return e[n.id+1]},Ke=r.a.memo((function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),c=a[0],u=a[1],l=Object(n.useState)(!1),o=Object(O.a)(l,2),s=o[0],i=o[1],p=Object(n.useState)(!1),d=Object(O.a)(p,2),m=d[0],f=d[1],E=Object(n.useState)(""),v=Object(O.a)(E,2),b=v[0],h=v[1],k=Object(n.useState)(1),_=Object(O.a)(k,2),j=_[0],w=_[1],x=Object(R.c)((function(e){return e.card})).cards,y=Object(R.c)((function(e){return e.search})).settings,S=Object(g.g)().id,P=Object(R.b)();Object(n.useEffect)((function(){P(Ae(S,j))}),[P,j,S]);var U=function(e){return P(function(e,t){return function(){var a=Object(A.a)(N.a.mark((function a(n){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(F(!0,null)),a.prev=1,a.next=4,me(e);case 4:n(F(!1,null)),n(Ae(t)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),n(F(!1,a.t0.response.data.error));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(e,S))};return r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{className:Me.a.page},r.a.createElement("div",{className:Me.a.overlay},r.a.createElement("h3",null," Create card",r.a.createElement(C,{name:"+",onClick:function(){return u(!c)},style:{display:"inline-flex",marginLeft:"10px"}})),r.a.createElement("h3",null," Learn Page",r.a.createElement(C,{name:"Learn Page",onClick:function(){return f(!m)},style:{display:"inline-flex",marginLeft:"10px"}})),r.a.createElement(Te,{openModal:c,setOpenModal:function(){return u(!c)},addItem:function(e,t){return P(function(e,t,a){return function(){var n=Object(A.a)(N.a.mark((function n(r){return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(F(!0,null)),n.prev=1,n.next=4,de(e,t,a);case 4:r(F(!1,null)),r(Ae(e)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),r(F(!1,n.t0.response.data.error));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()}(S,e,t))},title:"Create card"}),r.a.createElement(Te,{openModal:s,setOpenModal:function(){return i(!s)},addItem:function(e,t){return P(function(e,t,a,n){return function(){var r=Object(A.a)(N.a.mark((function r(c){return N.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(F(!0,null)),r.prev=1,r.next=4,fe(e,a,n);case 4:c(F(!1,null)),c(Ae(t)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),c(F(!1,r.t0.response.data.error));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(e){return r.apply(this,arguments)}}()}(b,S,e,t))},title:"update card"}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Question"),r.a.createElement("td",null,"Gade"),r.a.createElement("td",null,"delete"),r.a.createElement("td",null,"update"))),r.a.createElement("tbody",null,x.map((function(e){return r.a.createElement("tr",{key:e.more_id+e.created,id:e._id},r.a.createElement("td",null,e.question),r.a.createElement("td",null,e.grade),r.a.createElement("td",{onClick:function(){return U(e._id)}},r.a.createElement("span",null,"delete")),r.a.createElement("td",{onClick:function(){return t=e._id,h(t),void i(!0);var t}},r.a.createElement("span",null,"update")))})))),r.a.createElement(Fe,{id:S,cards:x,show:m,onClose:function(){return f(!m)}})),r.a.createElement(se,{cardPacksTotalCount:y.total,page:y.page,onPageChanged:w,portionSize:6})))})),Ye=a(37),qe=a.n(Ye),Ve=r.a.memo((function(e){var t=e.profile,a=e.logout,n=e.showSetting;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:qe.a.overlayProfile},r.a.createElement("div",{className:qe.a.profile},r.a.createElement("img",{src:t.avatar?t.avatar:i.a,alt:"user"})),r.a.createElement("div",null,t.name),r.a.createElement(C,{name:"logout",style:{marginTop:"30px"},onClick:a}),r.a.createElement(C,{name:"setting",style:{marginTop:"0"},onClick:n})))})),We=r.a.memo((function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],u=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{placeholder:"search",value:c,onChange:function(e){return u(e.target.value)},onKeyPress:function(t){13===t.charCode&&e.search(c)}}),r.a.createElement(C,{name:"search",style:{display:"inline-block"},onClick:function(){return e.search(c)}}))})),Xe=function(e){var t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],u=a[1],l=function(){e.setOpenModal(!e.openModal),u("")};return r.a.createElement(De,{show:e.openModal,closeModal:l},r.a.createElement("div",null,r.a.createElement("h2",null,e.title," :"),r.a.createElement(j,{value:c,onChange:function(e){return u(e.currentTarget.value)}})),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(C,{name:"send",style:{margin:"5px"},onClick:function(){c.trim()&&e.add(c),l()}}),r.a.createElement(C,{name:"back",style:{margin:"5px"},onClick:l})))},Je=r.a.memo((function(e){var t=Object(n.useState)(!1),a=Object(O.a)(t,2),c=a[0],u=a[1],l=Object(R.b)(),o=function(){return u(!c)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(f,{path:"/cards/"+e.id,title:e.name})),r.a.createElement("td",null,e.grade),r.a.createElement("td",null,e.cardsCount),r.a.createElement("td",null,r.a.createElement("div",{className:"button",onClick:function(){return l((t=e.id,function(){var e=Object(A.a)(N.a.mark((function e(a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(F(!0,null)),e.prev=1,e.next=4,he(t);case 4:a(F(!1,null)),a(_e()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),a(F(!1,e.t0.response.data.error));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()));var t}},"delete"),r.a.createElement("div",{className:"button",onClick:o},"change"))),r.a.createElement(Xe,{openModal:c,setOpenModal:o,add:function(t){return l(function(e,t){return function(){var a=Object(A.a)(N.a.mark((function a(n){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(F(!0,null)),a.prev=1,a.next=4,ge(e,t);case 4:n(F(!1,null)),n(_e()),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),n(F(!1,a.t0.response.data.error));case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(e.id,t))},title:"new title pack"}))})),Qe=a(38),$e=a.n(Qe),Ze=r.a.memo((function(){var e=Object(R.c)((function(e){return e.packs})).packs,t=Object(R.c)((function(e){return e.search})).settings,a=Object(R.c)((function(e){return e.app})).isLoading,c=Object(R.c)((function(e){return e.login})).isAuth,u=Object(n.useState)(!1),l=Object(O.a)(u,2),o=l[0],s=l[1],i=Object(R.b)();Object(n.useEffect)((function(){i(_e(t.search,t.page))}),[i,t.page,t.search]);var p=Object(n.useCallback)((function(e){return i(function(e){return function(){var t=Object(A.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a(we(e)),a(_e(e));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),[i]);return c?r.a.createElement("div",{className:$e.a.page},r.a.createElement("h2",null,"PACKS"),r.a.createElement("div",null,r.a.createElement(We,{search:p}),r.a.createElement(C,{onClick:function(){return s(!0)},name:"ADD PACK",disabled:a})),r.a.createElement("div",{className:$e.a.overlay},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"name"),r.a.createElement("td",null,"Grade"),r.a.createElement("td",null,"cards total"),r.a.createElement("td",null,"actions"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement(Je,{key:e._id+(new Date).getTime(),id:e._id,name:e.name,grade:e.grade,cardsCount:e.cardsCount})}))))),r.a.createElement(se,{cardPacksTotalCount:t.total,page:t.page,onPageChanged:function(e){return i(Re(e))},portionSize:20}),r.a.createElement(Xe,{openModal:o,setOpenModal:s,add:function(e){return i(function(e){return function(){var t=Object(A.a)(N.a.mark((function t(a){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(F(!0,null)),t.prev=1,t.next=4,be(e);case 4:a(F(!1,null)),a(_e()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(F(!0,t.t0.response.data.error));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(e))},title:"add new decks"})):r.a.createElement(g.a,{to:"/login"})})),et=a(26),tt=a.n(et),at=function(e){var t=e.show,a=e.onShow,c=Object(R.c)((function(e){return e.login})).profile,u=Object(n.useState)(c.name),l=Object(O.a)(u,2),o=l[0],s=l[1],p=Object(n.useState)(c.avatar),d=Object(O.a)(p,2),m=d[0],f=d[1],E=Object(R.b)();return r.a.createElement(De,{width:"800px",show:t,closeModal:a},r.a.createElement("div",{className:tt.a.wrapper},r.a.createElement("div",{className:tt.a.image},r.a.createElement("img",{src:m||i.a,alt:""})),r.a.createElement("div",{className:tt.a.form},r.a.createElement("div",{className:tt.a.input},r.a.createElement(j,{placeholder:"name",value:o||"",onChange:function(e){return s(e.currentTarget.value)}})),r.a.createElement(y,null,r.a.createElement(j,{type:"file",defaultValue:"",onChange:function(e){var t=e.target.files&&e.target.files[0],a=new FileReader;t&&a.readAsDataURL(t),a.onload=function(){f("string"===typeof a.result?a.result:null)}},style:{display:"none"}})),r.a.createElement(C,{onClick:function(){m&&o&&(E(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var a=Object(A.a)(N.a.mark((function a(n){var r,c,u,l,o;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,B(e,t);case 2:r=a.sent,c=r.updatedUser,u=c.name,l=c._id,o=c.avatar,n(q(u,l,o));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(o,m)),a())},style:{margin:"0"}},"sumbit"))))},nt=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],c=t[1],u=Object(R.b)(),l=Object(R.c)((function(e){return e.login})),o=l.profile;return l.isAuth?r.a.createElement("div",{className:"wrapper"},r.a.createElement(Ve,{profile:o,logout:function(){return u(function(){var e=Object(A.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t(q(null,null,null)),t(Y(!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},showSetting:function(){return c(!0)}}),r.a.createElement(Ze,null),r.a.createElement(at,{show:a,onShow:function(){return c(!a)}})):r.a.createElement(g.a,{to:"/login"})},rt=a(18),ct=a.n(rt),ut=D.a.create({baseURL:"https://cards-nya-back.herokuapp.com/1.0/"}),lt=function(e){return Object(A.a)(N.a.mark((function t(){var a,n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=z.a.get("token"),t.next=3,ut.get("social/users?token=".concat(a,"&page=").concat(e,"&pageCount=7"));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)})))()},ot={users:[]},st=function(){var e=Object(R.b)(),t=Object(R.c)((function(e){return e.search.settings})),a=t.page,c=t.total,u=Object(R.c)((function(e){return e.users.users}));Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(A.a)(N.a.mark((function t(a){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(F(!0,null)),t.prev=1,t.next=4,lt(e);case 4:n=t.sent,a({type:"USERS-REDUCER/SET_USERS",users:n.users}),z.a.set("token",n.token),a(ye(n.usersTotalCount,e)),a(F(!1,null)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a(F(!1,t.t0.response.data.error));case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(a))}),[a]);var l=Object(n.useRef)(null);return r.a.createElement("div",{className:ct.a.wrap},r.a.createElement("div",{className:ct.a.container},r.a.createElement("div",{className:ct.a.btn},r.a.createElement(C,null,"show")),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Users")," ",r.a.createElement("p",null,"count: ",c-u.length),r.a.createElement("div",{className:ct.a.UsersBlock,ref:l,onScroll:function(t){var n=t.currentTarget,r=n.scrollTop,c=n.clientHeight;n.scrollHeight-Math.ceil(r)===c&&e(Re(a+1))}},u&&u.map((function(e,t){return r.a.createElement(it,{key:e._id+e.created+t,user:e})}))))))},it=function(e){var t=e.user;return r.a.createElement("label",{className:ct.a.UserItem},r.a.createElement("div",{className:ct.a.avatar},r.a.createElement("img",{style:{height:"90px"},src:t.avatar?t.avatar:i.a,alt:"photo"})),r.a.createElement("div",{className:ct.a.userDesc},r.a.createElement("h4",null,r.a.createElement("span",null,"name :")," ",t.name),r.a.createElement("h4",null," card packs count : ",t.publicCardPacksCount)))},pt=function(){return r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(J,null)}}),r.a.createElement(g.b,{path:"/profile",render:function(){return r.a.createElement(nt,null)}}),r.a.createElement(g.b,{path:"/cards/:id",render:function(e){return r.a.createElement(Ke,e)}}),r.a.createElement(g.b,{path:"/registration",render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(g.b,{path:"/forgot",render:function(){return r.a.createElement(ce,null)}}),r.a.createElement(g.b,{path:"/reset-password/:token",render:function(e){return r.a.createElement(ue,e)}}),r.a.createElement(g.b,{path:"/users",render:function(){return r.a.createElement(st,null)}}),r.a.createElement(g.b,{path:"*",render:function(){return r.a.createElement("div",null,"not found")}}))},dt=a(39),mt=a.n(dt),ft=function(){var e=Object(R.c)((function(e){return e.app})).error,t=Object(R.b)();return e?r.a.createElement("div",{className:mt.a.wrapper},r.a.createElement("div",{className:mt.a.errorMessage},r.a.createElement("div",null,e),r.a.createElement("button",{onClick:function(){t(F(!1,null))}},"X"))):r.a.createElement(r.a.Fragment,null)},Et=function(){var e=Object(R.c)((function(e){return e.app})),t=e.initialApp,a=e.isLoading,c=Object(R.c)((function(e){return e.login})),u=c.profile,l=c.isAuth,o=Object(R.b)();return Object(n.useEffect)((function(){o(function(){var e=Object(A.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(V());case 2:t({type:"INITIAL/APP/REDUCER",payload:{initialApp:!0}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[o]),t?r.a.createElement("div",{className:"App"},r.a.createElement(h,{profile:u,isAuth:l,isLoading:a}),r.a.createElement(ft,null),r.a.createElement(pt,null)):r.a.createElement("div",null,"....loading")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var vt=a(21),bt=a(55),ht=Object(vt.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIAL/APP/REDUCER":case"PAYLOAD/APP/REDUCER":return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERS-REDUCER/SET_USERS":return Object(P.a)(Object(P.a)({},e),{},{users:[].concat(Object(ie.a)(e.users),Object(ie.a)(t.users))});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PROFILE/REDUCER":return Object(P.a)(Object(P.a)({},e),{},{profile:Object(P.a)(Object(P.a)({},e.profile),{},{name:t.name,id:t.id,avatar:t.avatar})});case"AUTH_ME/LOGIN/REDUCER":return Object(P.a)(Object(P.a)({},e),{},{isAuth:t.auth});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PAYLOAD/REGISTER/REDUCER":return Object(P.a)(Object(P.a)({},e),{},{success:t.success});default:return e}},recovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECOVERY/REDUCER":return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PACKS_REDUCER/SET_PACKS":return Object(P.a)(Object(P.a)({},e),{},{packs:Object(ie.a)(t.packs)});default:return e}},card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CARDS/CARDS_REDUCER":return Object(P.a)(Object(P.a)({},e),{},{cards:Object(ie.a)(t.cards)});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_REDUCER/SET_SEARCH":case"SEARCH_REDUCER/SET_CURRENT_PAGE":case"SEARCH_REDUCER/SET_TOTAL_COUNT":return Object(P.a)(Object(P.a)({},e),{},{settings:Object(P.a)(Object(P.a)({},e.settings),t.payload)});default:return e}}}),gt=Object(vt.d)(ht,Object(vt.a)(bt.a));window.store=gt,u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,null,r.a.createElement(R.a,{store:gt},r.a.createElement(Et,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.f68779f8.chunk.js.map