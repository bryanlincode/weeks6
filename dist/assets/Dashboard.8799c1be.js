import{_ as p,c as k,a as r,b as n,w as c,j as m,k as f,f as $,d as e,r as h,o as d}from"./index.09e2e06d.js";const g={name:"Dashboard",data(){return{checkSuccess:!1}},mounted(){this.checkLogin()},methods:{checkLogin(){const o=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(o){this.$http.defaults.headers.common.Authorization=`${o}`;const t="https://vue3-course-api.hexschool.io/v2/api/user/check";this.$http.post(t,{api_token:this.token}).then(()=>{this.checkSuccess=!0}).catch(a=>{alert(a.response.data.message),this.$router.push("/login")})}else alert("\u60A8\u5C1A\u672A\u767B\u5165\u3002"),this.$router.push("/login")},signout(){document.cookie="hexToken=;expires=;",alert("token \u5DF2\u6E05\u9664"),this.$router.push("/login")}}},v=r("h1",null,"\u4F60\u73FE\u5728\u5728\u5F8C\u53F0\u9801\u9762",-1),x={id:"nav"},w=e("\u56DE\u5230\u524D\u53F0"),B=e(" | "),C=e("\u5F8C\u53F0\u7522\u54C1\u5217\u8868"),N=e(" | "),V=e("\u5F8C\u53F0\u8A02\u55AE"),b=e(" | ");function S(o,t,a,T,u,i){const s=h("router-link"),_=h("router-view");return d(),k("div",null,[v,r("div",x,[n(s,{to:"/"},{default:c(()=>[w]),_:1}),B,n(s,{to:"/admin/products"},{default:c(()=>[C]),_:1}),N,n(s,{to:"/admin/orders"},{default:c(()=>[V]),_:1}),b,r("a",{href:"#",onClick:t[0]||(t[0]=m((...l)=>i.signout&&i.signout(...l),["prevent"]))},"\u767B\u51FA")]),u.checkSuccess?(d(),f(_,{key:0})):$("",!0)])}const L=p(g,[["render",S]]);export{L as default};
