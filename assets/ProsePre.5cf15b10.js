import{_ as l}from"./ProseCode.vue.cf170f99.js";import{d as n,o as s,g as o,h as i,k as r,M as g,L as u}from"./entry.ff1be43c.js";const m=n({__name:"ProsePre",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null},class:{type:String,default:null}},setup(e){return(a,d)=>{const t=l;return s(),o(t,{code:e.code,language:e.language,filename:e.filename,highlights:e.highlights,meta:e.meta},{default:i(()=>[r("pre",{class:g(a.$props.class)},[u(a.$slots,"default")],2)]),_:3},8,["code","language","filename","highlights","meta"])}}});export{m as default};