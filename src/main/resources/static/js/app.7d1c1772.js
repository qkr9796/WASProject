(function(){"use strict";var t={7737:function(t,n,e){var o=e(9242),a=e(3396),u=e(7139),i=e(4870),l=e(65);const r=t=>((0,a.dD)("data-v-42d8036b"),t=t(),(0,a.Cn)(),t),s={class:"login_page"},c=r((()=>(0,a._)("p",{id:"login_text"},"Login",-1)));var d=(0,a.aZ)({__name:"LoginMenu",setup(t){const n=(0,l.oR)(),e={loginID:"",loginPW:""},r=(0,a.Fl)((()=>n.state.connection.loggedIn));function d(){n.state.connection.loggedIn||n.dispatch("connection/loginRequest",e).then((t=>{"loginSuccess"==t.data&&n.commit("connection/setLoggedIn",!0)}))}return(t,n)=>((0,a.wg)(),(0,a.iD)("div",s,[c,(0,a.wy)((0,a._)("input",{class:"login_field",id:"login_id",type:"text",placeholder:"ID","onUpdate:modelValue":n[0]||(n[0]=t=>e.loginID=t)},null,512),[[o.nr,e.loginID]]),(0,a.wy)((0,a._)("input",{class:"login_field",id:"login_pw",type:"password",placeholder:"Password","onUpdate:modelValue":n[1]||(n[1]=t=>e.loginPW=t)},null,512),[[o.nr,e.loginPW]]),(0,a._)("button",{class:"login_button",onClick:d},(0,u.zw)((0,i.SU)(r)?"Logout":"Login"),1)]))}}),p=e(89);const g=(0,p.Z)(d,[["__scopeId","data-v-42d8036b"]]);var m=g;const v={class:"upper_menu"},f={id:"title"};var _=(0,a.aZ)({__name:"UpperMenu",setup(t){const n=(0,a.Fl)((()=>(0,l.oR)().state.currentPage)),e=(0,i.iH)(!1);function r(){e.value=!e.value}return(t,l)=>((0,a.wg)(),(0,a.iD)("div",v,[(0,a._)("span",f,(0,u.zw)((0,i.SU)(n)),1),(0,a._)("button",{id:"login_button",onClick:r}," Login "),(0,a.Wm)(o.uT,{name:"login"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)((0,i.SU)(m),{id:"login_page"},null,512),[[o.F8,e.value]])])),_:1})]))}});const h=(0,p.Z)(_,[["__scopeId","data-v-cebc308e"]]);var w=h,b=(e(7658),e(2483)),x=e(8552);const y={key:0,class:"menu-page"},k={class:"menu-list"},D=["data-index"],I=["onClick"];var P=(0,a.aZ)({__name:"MenuPage",setup(t){const n=(0,l.oR)(),e=(0,b.tv)(),r=(0,a.Fl)((()=>n.state.menuOpen));function s(){n.commit("toggleMenu")}const c=[{text:"main",link:"/"},{text:"login",link:"/login"},{text:"register",link:"/register"},{text:"loginCheck",link:"/loginCheck"},{text:"authorizedPage",link:"/authorized"}],d=(0,i.iH)(""),p=(0,a.Fl)((()=>{let t=c;if(d.value){let n=d.value.toLowerCase();t=t.filter((t=>t.text.toLowerCase().indexOf(n)>-1))}return t}));function g(t,n){x.ZP.from(t,{opacity:0,height:"0px",marginBottom:"0px",x:"30px",delay:.05*parseInt(t.dataset.index),onComplete:n})}function m(t,n){x.ZP.to(t,{opacity:0,height:"0px",marginBottom:"0px",delay:.05*parseInt(t.dataset.index),onComplete:n})}function v(t){e.push({path:t})}return(t,n)=>((0,a.wg)(),(0,a.iD)("div",null,[((0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a.Wm)(o.uT,{name:"menu-page",duration:"400"},{default:(0,a.w5)((()=>[(0,i.SU)(r)?((0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("button",{class:"menu-button",onClick:s}),(0,a.wy)((0,a._)("input",{class:"menu-search",type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>d.value=t)},null,512),[[o.nr,d.value]]),(0,a._)("div",k,[(0,a.Wm)(o.W3,{name:"menu-list",css:!1,onEnter:g,onLeave:m,appear:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(p),((t,n)=>((0,a.wg)(),(0,a.iD)("div",{class:"menu-container",key:t.text,"data-index":n},[(0,a._)("div",{class:"menu",onClick:n=>v(t.link)},(0,u.zw)(t.text),9,I)],8,D)))),128))])),_:1})])])):(0,a.kq)("",!0)])),_:1})]))]))}});const C=(0,p.Z)(P,[["__scopeId","data-v-03e49d58"]]);var U=C;const O={class:"page-content"};var L=(0,a.aZ)({__name:"App",setup(t){return(t,n)=>{const e=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(w,{class:"upper-menu",title:"test"}),(0,a._)("div",O,[(0,a.Wm)(e)]),(0,a.Wm)(U)],64)}}});const W=(0,p.Z)(L,[["__scopeId","data-v-32e777f6"]]);var Z=W,R=e(4161);const S={namespaced:!0,state:{baseURL:"http://localhost:8080/",ssid:"ssid",loggedIn:!1,userID:"userid",loginURL:"loginreq"},getters:{},mutations:{setLoggedIn:function(t,n){t.loggedIn=n}},actions:{getData:function({rootState:t,state:n},e){return(0,R.Z)({url:""+n.baseURL+e.url,method:"get",data:{data:e.data}})},postData:function({rootState:t,state:n},e){return(0,R.Z)({url:""+n.baseURL+e.url,method:"post",data:{data:e.data}})},loginRequest:function({rootState:t,state:n},e){if(!n.loggedIn)return(0,R.Z)({url:""+n.baseURL+n.loginURL,method:"post",data:{username:e.loginID,password:e.loginPW},headers:{"Content-Type":"application/x-www-form-urlencoded"}})}},modules:{}},z=(0,l.MT)({state:{menuOpen:!1,currentPage:"/"},getters:{},mutations:{toggleMenu:function(t){t.menuOpen=!t.menuOpen},setCurrentPage:function(t,n){t.currentPage=n}},actions:{},modules:{connection:S}});var H=z,T=(0,a.aZ)({__name:"MenuButton",setup(t){const n=(0,l.oR)(),e=(0,a.Fl)((()=>n.state.menuOpen));function u(){n.commit("toggleMenu")}return(t,n)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o.uT,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("button",{class:"menu-button",onClick:u},null,512),[[o.F8,!(0,i.SU)(e)]])])),_:1})]))}});const F=(0,p.Z)(T,[["__scopeId","data-v-77371646"]]);var M=F;const j={class:"menu-button"};var V={__name:"HomePage",setup(t){return(t,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Uk)(" Home "),(0,a._)("div",j,[(0,a.Wm)(M)])],64))}};const q=(0,p.Z)(V,[["__scopeId","data-v-0c01b320"]]);var E=q,A={__name:"LoginPage",setup(t){return(t,n)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(m),(0,a.Wm)(M)]))}};const B=A;var Y=B;const G=(0,a._)("h1",null," Authorized Page Test ",-1);var K=(0,a.aZ)({__name:"AuthorizedPage",setup(t){const n=(0,l.oR)(),e=(0,b.tv)(),r=(0,i.iH)(""),s=(0,i.iH)(""),c=(0,i.iH)(""),d=(0,a.Fl)((()=>n.state.connection.loggedIn));function p(){n.dispatch("connection/getData",{url:r.value}).then((t=>{c.value=t.data}))}function g(){n.dispatch("connection/postData",{url:r.value,data:s.value}).then((t=>{c.value=t.data}))}return d.value||e.push("/login"),(t,n)=>((0,a.wg)(),(0,a.iD)("div",null,[G,(0,a._)("p",null," logged in = "+(0,u.zw)((0,i.SU)(d)),1),(0,a._)("div",null,[(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=t=>r.value=t),placeholder:"url"},null,512),[[o.nr,r.value]]),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=t=>s.value=t),placeholder:"data"},null,512),[[o.nr,s.value]]),(0,a._)("button",{onClick:p}," send GET "),(0,a._)("button",{onClick:g}," send POST ")]),(0,a._)("p",null,(0,u.zw)(c.value),1),(0,a.Wm)(M)]))}});const J=K;var N=J;const Q=[{path:"/",component:E},{path:"/login",component:Y},{path:"/register",component:Y},{path:"/authorized",component:N}],X=(0,b.p7)({history:(0,b.PO)(),routes:Q});X.beforeEach((function(t,n,e){H.commit("setCurrentPage",t.path),e()}));var $=X;const tt=(0,o.ri)(Z).use(H).use($);tt.mount("#app")}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var u=n[o]={exports:{}};return t[o](u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(n,o,a,u){if(!o){var i=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],u=t[c][2];for(var l=!0,r=0;r<o.length;r++)(!1&u||i>=u)&&Object.keys(e.O).every((function(t){return e.O[t](o[r])}))?o.splice(r--,1):(l=!1,u<i&&(i=u));if(l){t.splice(c--,1);var s=a();void 0!==s&&(n=s)}}return n}u=u||0;for(var c=t.length;c>0&&t[c-1][2]>u;c--)t[c]=t[c-1];t[c]=[o,a,u]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var a,u,i=o[0],l=o[1],r=o[2],s=0;if(i.some((function(n){return 0!==t[n]}))){for(a in l)e.o(l,a)&&(e.m[a]=l[a]);if(r)var c=r(e)}for(n&&n(o);s<i.length;s++)u=i[s],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(c)},o=self["webpackChunkvue_front"]=self["webpackChunkvue_front"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(7737)}));o=e.O(o)})();
//# sourceMappingURL=app.7d1c1772.js.map