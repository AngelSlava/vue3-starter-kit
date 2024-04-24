import{o as i,c as u,b as t,w as l,f as M,_ as I,g as k,h as _,u as T,a as r,i as B,v as L,j as D,k as N,l as h,t as m,m as v,F as x,n as S,p as $,q as b,r as w,s as F,x as U,y as z,T as A,d as E,e as R,z as j,A as q}from"./index-5fqsVTiK.js";import{u as G}from"./auth.store-BH613U2g.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const P={},Q={class:"logo-block flex items-center"};function H(n,e){const s=I,o=k;return i(),u("div",Q,[t(o,{link:"",onClick:e[0]||(e[0]=M(a=>n.$router.push({name:"Dashboard"}),["prevent"]))},{default:l(()=>[t(s,{icon:"vite",size:"40"})]),_:1})])}const J=g(P,[["render",H]]),K=r("div",{class:"va-switcher__prefix"},"prefix",-1),O={class:"va-switcher__control"},W=r("div",{class:"va-switcher__button"},null,-1),X=r("div",{class:"va-switcher__suffix"},"suffix",-1),Y=_({__name:"va-switcher",props:{modelValue:{type:Boolean},modelModifiers:{}},emits:["update:modelValue"],setup(n){const e=T(n,"modelValue");return(s,o)=>(i(),u("div",{class:"va-switcher",onClick:o[1]||(o[1]=a=>e.value=!e.value)},[K,r("div",O,[B(r("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:"checkbox"},null,512),[[L,e.value]]),W]),X]))}}),Z=_({__name:"ThemeSwitcher",setup(n){const e=D(),s=N(!1);function o(a){e.theme=a?"dark":"light",e.applyTheme()}return(a,c)=>(i(),u(x,null,[h(m(v(e).theme)+" "+m(s.value)+" ",1),t(Y,{modelValue:s.value,"onUpdate:modelValue":[c[0]||(c[0]=d=>s.value=d),o]},null,8,["modelValue"])],64))}}),ee={class:"nav-menu-group"},te={class:"nav-menu-group__title mb-1"},p=_({__name:"nav-menu-group",props:{title:{}},setup(n){return(e,s)=>(i(),u("div",ee,[r("div",te,[e.$slots.title?S("",!0):(i(),u(x,{key:0},[h(m(e.title),1)],64)),$(e.$slots,"title")]),$(e.$slots,"default")]))}}),oe={class:"nav-menu"},f=_({__name:"nav-menu",props:{menu:{default:()=>[]}},setup(n){const e=b();return(s,o)=>{const a=w("router-link");return i(),u("div",oe,[r("ul",null,[(i(!0),u(x,null,F(s.menu,(c,d)=>(i(),u("li",{key:d,class:U({active:v(e).path===c.to})},[t(a,{to:c.to},{default:l(()=>[h(m(c.text),1)]),_:2},1032,["to"])],2))),128))])])}}}),se={class:"sidebar-menu flex"},ne=_({__name:"SidebarMenu",setup(n){const e=[{text:"Introduction",to:"/guide"},{text:"Quick Start",to:"/guide/quick-start"},{text:"Router",to:"/guide/router"},{text:"State",to:"/guide/state"},{text:"Api",to:"/guide/api"}],s=[{text:"Layouts",to:"/"},{text:"Views",to:"/"},{text:"Components",to:"/"},{text:"Styles",to:"/"}],o=[{text:"Form",to:"/"},{text:"Table",to:"/"},{text:"Notification",to:"/"},{text:"Teleport",to:"/"}],a=[{text:"Config Provider",to:"/guide/config-provider"},{text:"VueForm",to:"/"},{text:"VueUse",to:"/"}];return(c,d)=>(i(),u("div",se,[t(p,{title:"Getting Started"},{default:l(()=>[t(f,{menu:e})]),_:1}),t(p,{title:"UI Setup"},{default:l(()=>[t(f,{menu:s})]),_:1}),t(p,{title:"Elements Examples"},{default:l(()=>[t(f,{menu:o})]),_:1}),t(p,{title:"Instruments"},{default:l(()=>[t(f,{menu:a})]),_:1})]))}}),ae=g(ne,[["__scopeId","data-v-9c476e7c"]]),re=n=>(j("data-v-ffa219ef"),n=n(),q(),n),ie={class:"sidebar-layout flex"},ue={class:"sidebar"},le={class:"main-container"},ce={class:"flex items-center justify-end"},_e={key:0},de=re(()=>r("footer",null,"footer",-1)),me=_({__name:"SidebarLayout",setup(n){const e=G(),s=z(),o=b();function a(){e.logout(),s.push({name:"SignIn"})}return(c,d)=>{const y=k,V=w("router-view");return i(),u("div",ie,[r("div",ue,[t(J,{class:"mb-8"}),t(ae)]),r("div",le,[r("header",ce,[t(Z),t(y,{variant:"info",onClick:a},{default:l(()=>[h("Logout")]),_:1})]),r("main",null,[v(o).meta.title?(i(),u("h1",_e,m(v(o).meta.title),1)):S("",!0),t(V,null,{default:l(({Component:C})=>[t(A,{name:"fade",mode:"out-in"},{default:l(()=>[(i(),E(R(C)))]),_:2},1024)]),_:1})]),de])])}}}),he=g(me,[["__scopeId","data-v-ffa219ef"]]);export{he as default};