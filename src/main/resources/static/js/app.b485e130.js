(function(){"use strict";var e={3377:function(e,t,n){var o=n(9242),a=n(3396),u=n(7139),l=n(4870),i=n(65);const r=e=>((0,a.dD)("data-v-258f7a52"),e=e(),(0,a.Cn)(),e),s=r((()=>(0,a._)("p",{id:"login-text"},"Login",-1)));var c=(0,a.aZ)({__name:"LoginMenu",setup(e){const t=(0,i.oR)(),n={loginID:"",loginPW:""},r=(0,a.Fl)((()=>t.state.connection.loggedIn));function c(){r.value?t.dispatch("connection/logout"):t.dispatch("connection/loginRequest",n)}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[s,(0,a.wy)((0,a._)("input",{class:"login-field",id:"login-id",type:"text",placeholder:"ID","onUpdate:modelValue":t[0]||(t[0]=e=>n.loginID=e)},null,512),[[o.nr,n.loginID]]),(0,a.wy)((0,a._)("input",{class:"login-field",id:"login-pw",type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>n.loginPW=e)},null,512),[[o.nr,n.loginPW]]),(0,a._)("button",{class:"login-button",onClick:c},(0,u.zw)((0,l.SU)(r)?"Logout":"Login"),1)]))}}),d=n(89);const p=(0,d.Z)(c,[["__scopeId","data-v-258f7a52"]]);var g=p,v=(0,a.aZ)({__name:"UserInfo",setup(e){const t=(0,i.oR)(),n=t.state.connection.userid;function o(){t.dispatch("connection/logout")}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",null," Username : "+(0,u.zw)((0,l.SU)(n)),1),(0,a._)("button",{onClick:o}," logout ")]))}});const m=v;var f=m;const _={class:"upper-menu"},h={id:"title"},w={id:"menu-page"};var y=(0,a.aZ)({__name:"UpperMenu",setup(e){const t=(0,i.oR)(),n={false:g,true:f},r=(0,a.Fl)((()=>t.state.currentPage)),s=(0,a.Fl)((()=>t.state.connection.loggedIn)),c=(0,l.iH)(!1);function d(){c.value=!c.value}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("span",h,(0,u.zw)((0,l.SU)(r)),1),(0,a._)("button",{id:"menu-button",onClick:d},(0,u.zw)((0,l.SU)(s)?"User":"Login"),1),(0,a.Wm)(o.uT,{name:"menu"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",w,[((0,a.wg)(),(0,a.j4)((0,a.LL)(n[(0,l.SU)(s)])))],512),[[o.F8,c.value]])])),_:1})]))}});const b=(0,d.Z)(y,[["__scopeId","data-v-14bdb4de"]]);var x=b,U=(n(7658),n(2483)),k=n(8552);const D={key:0,class:"menu-page"},I={class:"menu-list"},C=["data-index"],P=["onClick"];var Z=(0,a.aZ)({__name:"MenuPage",setup(e){const t=(0,i.oR)(),n=(0,U.tv)(),r=(0,a.Fl)((()=>t.state.menuOpen));function s(){t.commit("toggleMenu")}const c=[{text:"main",link:"/"},{text:"login",link:"/login"},{text:"user",link:"/user"},{text:"adminPage",link:"/admin"}],d=(0,l.iH)(""),p=(0,a.Fl)((()=>{let e=c;if(d.value){let t=d.value.toLowerCase();e=e.filter((e=>e.text.toLowerCase().indexOf(t)>-1))}return e}));function g(e,t){k.ZP.from(e,{opacity:0,height:"0px",marginBottom:"0px",x:"30px",delay:.05*parseInt(e.dataset.index),onComplete:t})}function v(e,t){k.ZP.to(e,{opacity:0,height:"0px",marginBottom:"0px",delay:.05*parseInt(e.dataset.index),onComplete:t})}function m(e){n.push({path:e})}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(o.uT,{name:"menu-page",duration:"400"},{default:(0,a.w5)((()=>[(0,l.SU)(r)?((0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("button",{class:"menu-button",onClick:s}),(0,a.wy)((0,a._)("input",{class:"menu-search",type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e)},null,512),[[o.nr,d.value]]),(0,a._)("div",I,[(0,a.Wm)(o.W3,{name:"menu-list",css:!1,onEnter:g,onLeave:v,appear:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,l.SU)(p),((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"menu-container",key:e.text,"data-index":t},[(0,a._)("div",{class:"menu",onClick:t=>m(e.link)},(0,u.zw)(e.text),9,P)],8,C)))),128))])),_:1})])])):(0,a.kq)("",!0)])),_:1})]))]))}});const L=(0,d.Z)(Z,[["__scopeId","data-v-779010bc"]]);var O=L;const R={class:"page-content"};var W=(0,a.aZ)({__name:"App",setup(e){return(e,t)=>{const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(x,{class:"upper-menu"}),(0,a._)("div",R,[(0,a.Wm)(n)]),(0,a.Wm)(O)],64)}}});const H=(0,d.Z)(W,[["__scopeId","data-v-0d17adae"]]);var S=H,T=n(4161);const j={namespaced:!0,state:{baseURL:"http://localhost:8080/",ssid:"",loggedIn:!1,userid:""},getters:{},mutations:{setLoggedIn:function(e,t){e.loggedIn=t},setUserid:function(e,t){e.userid=t}},actions:{getData:function({rootState:e,state:t},n){return(0,T.Z)({headers:{"Content-Type":"json"},url:""+t.baseURL+n.url,method:"get",data:n.data})},postData:function({rootState:e,state:t},n){return(0,T.Z)({headers:{"Content-Type":"application/json"},url:""+t.baseURL+n.url,method:"post",data:n.data})},loginRequest:function({rootState:e,state:t,commit:n},o){if(!t.loggedIn)return(0,T.Z)({url:t.baseURL+"loginreq",method:"post",data:{username:o.loginID,password:o.loginPW},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>{"loginSuccess"==e.data&&(n("setLoggedIn",!0),n("setUserid",o.loginID))}))},logout:function({state:e,commit:t}){if(e.loggedIn)return(0,T.Z)({url:e.baseURL+"logout",method:"post"}).then((e=>{"logout"==e.data&&t("setLoggedIn",!1)}))}},modules:{}};var z=n(2415);const F=(0,i.MT)({state:{menuOpen:!1,currentPage:"/"},getters:{},mutations:{toggleMenu:function(e){e.menuOpen=!e.menuOpen},setCurrentPage:function(e,t){e.currentPage=t}},actions:{},modules:{connection:j},plugins:[(0,z.Z)({paths:["connection"],storage:window.sessionStorage})]});var M=F,V=(0,a.aZ)({__name:"MenuButton",setup(e){const t=(0,i.oR)(),n=(0,a.Fl)((()=>t.state.menuOpen));function u(){t.commit("toggleMenu")}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o.uT,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("button",{class:"menu-button",onClick:u},null,512),[[o.F8,!(0,l.SU)(n)]])])),_:1})]))}});const q=(0,d.Z)(V,[["__scopeId","data-v-77371646"]]);var E=q;const K={class:"menu-button"};var A={__name:"HomePage",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Uk)(" Home "),(0,a._)("div",K,[(0,a.Wm)(E)])],64))}};const B=(0,d.Z)(A,[["__scopeId","data-v-0c01b320"]]);var Y=B,G={__name:"LoginPage",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(g),(0,a.Wm)(E)]))}};const J=G;var N=J;const Q=(0,a._)("h1",null," Authorized Page Test ",-1),X=(0,a._)("p",null," create Key ",-1);var $=(0,a.aZ)({__name:"AdminPage",setup(e){const t=(0,i.oR)(),n=(0,U.tv)(),r=(0,l.iH)(""),s=(0,l.iH)(""),c=(0,l.iH)(""),d=(0,l.iH)(""),p=(0,l.iH)(""),g=(0,a.Fl)((()=>t.state.connection.loggedIn));function v(){t.dispatch("connection/getData",{url:r.value}).then((e=>{c.value=e.data}))}function m(){t.dispatch("connection/postData",{url:r.value,data:s.value}).then((e=>{c.value=e.data}))}function f(){t.dispatch("connection/postData",{url:"createKey",data:{key:d.value}}).then((e=>{p.value=e.data}))}return g.value||n.push("/login"),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[Q,(0,a._)("p",null," logged in = "+(0,u.zw)((0,l.SU)(g)),1),(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),placeholder:"url"},null,512),[[o.nr,r.value]]),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),placeholder:"data"},null,512),[[o.nr,s.value]]),(0,a._)("button",{onClick:v}," send GET "),(0,a._)("button",{onClick:m}," send POST ")]),(0,a._)("p",null,(0,u.zw)(c.value),1),(0,a._)("div",null,[X,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>d.value=e),placeholder:"request key"},null,512),[[o.nr,d.value]]),(0,a._)("button",{onClick:f}," request "),(0,a._)("p",null," created : "+(0,u.zw)(p.value),1)]),(0,a.Wm)(E)]))}});const ee=$;var te=ee;const ne=(0,a._)("p",null," Register ",-1);var oe=(0,a.aZ)({__name:"UserPage",setup(e){const t=(0,i.oR)(),n=(0,l.iH)(""),r=(0,l.iH)(""),s=(0,l.iH)(""),c=(0,l.iH)("");function d(){t.dispatch("connection/postData",{url:"register",data:{key:n.value,userid:r.value,password:s.value}}).then((e=>{c.value=e.data}))}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[ne,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),placeholder:"Key"},null,512),[[o.nr,n.value]]),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e),placeholder:"ID"},null,512),[[o.nr,r.value]]),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>s.value=e),placeholder:"password"},null,512),[[o.nr,s.value]]),(0,a._)("button",{onClick:d}," Register "),(0,a._)("p",null,(0,u.zw)(c.value),1),(0,a.Wm)(E)]))}});const ae=oe;var ue=ae;const le=[{path:"/",component:Y},{path:"/login",component:N},{path:"/user",component:ue},{path:"/admin",component:te}],ie=(0,U.p7)({history:(0,U.PO)(),routes:le});ie.beforeEach((function(e,t,n){M.commit("setCurrentPage",e.path),n()}));var re=ie;const se=(0,o.ri)(S).use(M).use(re);se.mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var u=t[o]={exports:{}};return e[o](u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,u){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],u=e[c][2];for(var i=!0,r=0;r<o.length;r++)(!1&u||l>=u)&&Object.keys(n.O).every((function(e){return n.O[e](o[r])}))?o.splice(r--,1):(i=!1,u<l&&(l=u));if(i){e.splice(c--,1);var s=a();void 0!==s&&(t=s)}}return t}u=u||0;for(var c=e.length;c>0&&e[c-1][2]>u;c--)e[c]=e[c-1];e[c]=[o,a,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,u,l=o[0],i=o[1],r=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(r)var c=r(n)}for(t&&t(o);s<l.length;s++)u=l[s],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(c)},o=self["webpackChunkvue_front"]=self["webpackChunkvue_front"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(3377)}));o=n.O(o)})();
//# sourceMappingURL=app.b485e130.js.map