import{_ as p}from"./ContentRendererMarkdown.vue.855a01fa.js";import d from"./ContentRenderer.c1c41064.js";import{d as f,b as h,e as r,w as C,u as v,o as c,c as k,f as o,g as x,h as u,i as y,j as w,k as B}from"./entry.ff1be43c.js";import{u as N,q as R}from"./query.cfdc3237.js";import"./index.a6ef77ff.js";import"./preview.3ed561c0.js";const V={class:"prose"},g=B("p",null,"No content found.",-1),$=f({__name:"[...slug]",async setup(j){let e,a;const n=h(),s=r(()=>n.path.replace(/^\//,"")),i=r(()=>s.value.split("/").join(" > ")),{data:t}=([e,a]=C(()=>N(s.value,()=>R(n.path).findOne(),"$Ix9ELHsItu")),e=await e,a(),e);return v({title:i}),(l,q)=>{const m=p,_=d;return c(),k("div",V,[o(t)?(c(),x(_,{key:0,value:o(t)},{empty:u(()=>[g]),default:u(()=>[w(m,{value:o(t)},null,8,["value"])]),_:1},8,["value"])):y("",!0)])}}});export{$ as default};