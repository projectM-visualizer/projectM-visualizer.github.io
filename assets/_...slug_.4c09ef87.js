import{_ as i}from"./ContentRendererMarkdown.vue.e22011ef.js";import f from"./ContentRenderer.b1122151.js";import{d as h,b as v,e as c,w as C,u as B,o as u,c as b,f as o,g as k,h as m,i as w,j as y,k as x}from"./entry.b15f4acf.js";import{u as N,q as R}from"./query.f9c03a62.js";import{u as g}from"./useBreadcrumbs.1c3c32a8.js";import"./index.a6ef77ff.js";import"./preview.cb3168e5.js";const j={class:"prose"},V=x("p",null,"No content found.",-1),O=h({__name:"[...slug]",async setup(q){let t,n;const r=v(),l=c(()=>{let e=r.path;return e=e.replace(/^\/*projectm\//,""),e=e.replace(/^\//,""),e}),{breadcrumbs:s}=g(),p=c(()=>s.value[s.value.length-1].name),{data:a}=([t,n]=C(()=>N(l.value,()=>R(r.path).findOne(),"$whjo8LL8p9")),t=await t,n(),t);return B({title:p}),(e,A)=>{const _=i,d=f;return u(),b("div",j,[o(a)?(u(),k(d,{key:0,value:o(a)},{empty:m(()=>[V]),default:m(()=>[y(_,{value:o(a)},null,8,["value"])]),_:1},8,["value"])):w("",!0)])}}});export{O as default};