import{b as p,x as h,l as i}from"./entry.b15f4acf.js";const o=e=>e.charAt(0).toUpperCase()+e.slice(1),d=()=>{const e=p(),a={name:"Home",path:"/"},s=h([a]);function n(t){if(t==="")return[a];const r=n(t.slice(0,t.lastIndexOf("/"))),m=t.split("/"),c=o(m[m.length-1]);return[...r,{path:t,name:c}]}return i(()=>({path:e.path,name:e.name,meta:e.meta,matched:e.matched}),t=>{t.path!=="/"&&(s.value=n(t.path))},{immediate:!0}),{breadcrumbs:s}};export{d as u};
