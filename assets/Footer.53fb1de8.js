import T from"./Icon.edda22b8.js";import{_ as W}from"./nuxt-link.6b6b6e24.js";import{d as j,o as u,c as f,k as m,j as v,a2 as k,a3 as N,g as P,h as z,X as S,Y as $,i as I,O as B,F as J,G as L,R as Q,a4 as U,a5 as Z,a6 as q,m as K,B as V,e as b,x as H,u as ee,P as te,r as ne,M as oe,_ as ie}from"./entry.1858d64d.js";const se={class:"dropdown"},re={tabindex:"0",class:"btn btn-circle btn-ghost lg:hidden"},ae={tabindex:"0",class:"menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"},ce={key:1},de={class:"p-2"},le=j({__name:"MobileMenu",props:{icon:{},menu:{}},setup(e){const t=e;return(o,n)=>{const i=T,s=W;return u(),f("div",se,[m("label",re,[v(i,{name:t.icon,class:"w-5 h-5"},null,8,["name"])]),m("ul",ae,[(u(!0),f(k,null,N(t.menu,(r,a)=>(u(),f("li",{key:a},[r.submenu?I("",!0):(u(),P(s,{key:0,to:r.path},{default:z(()=>[S($(r.name),1)]),_:2},1032,["to"])),r.submenu?(u(),f("details",ce,[m("summary",null,$(r.name),1),m("ul",de,[(u(!0),f(k,null,N(r.submenu,(l,d)=>(u(),f("li",{key:d},[v(s,{to:l.path},{default:z(()=>[S($(l.name),1)]),_:2},1032,["to"])]))),128))])])):I("",!0)]))),128))])])}}});async function ue(e,t){return await fe(t).catch(n=>(console.error("Failed to get image meta for "+t,n+""),{width:0,height:0,ratio:0}))}async function fe(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,o)=>{const n=new Image;n.onload=()=>{const i={width:n.width,height:n.height,ratio:n.width/n.height};t(i)},n.onerror=i=>o(i),n.src=e})}function R(e){return t=>t?e[t]||t:e.missingValue}function he({formatter:e,keyMap:t,joinWith:o="/",valueMap:n}={}){e||(e=(s,r)=>`${s}=${r}`),t&&typeof t!="function"&&(t=R(t));const i=n||{};return Object.keys(i).forEach(s=>{typeof i[s]!="function"&&(i[s]=R(i[s]))}),(s={})=>Object.entries(s).filter(([a,l])=>typeof l<"u").map(([a,l])=>{const d=i[a];return typeof d=="function"&&(l=d(s[a])),a=typeof t=="function"?t(a):a,e(a,l)}).join(o)}function y(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function me(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const o of e.split(" ")){const n=parseInt(o.replace("x",""));n&&t.add(n)}return Array.from(t)}function ge(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function _e(e){const t={};if(typeof e=="string")for(const o of e.split(/[\s,]+/).filter(n=>n)){const n=o.split(":");n.length!==2?t["1px"]=n[0].trim():t[n[0].trim()]=n[1].trim()}else Object.assign(t,e);return t}function pe(e){const t={options:e},o=(i,s={})=>G(t,i,s),n=(i,s={},r={})=>o(i,{...r,modifiers:U(s,r.modifiers||{})}).url;for(const i in e.presets)n[i]=(s,r,a)=>n(s,r,{...e.presets[i],...a});return n.options=e,n.getImage=o,n.getMeta=(i,s)=>ve(t,i,s),n.getSizes=(i,s)=>be(t,i,s),t.$img=n,n}async function ve(e,t,o){const n=G(e,t,{...o});return typeof n.getMeta=="function"?await n.getMeta():await ue(e,n.url)}function G(e,t,o){var d,h;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:n,defaults:i}=ye(e,o.provider||e.options.provider),s=we(e,o.preset);if(t=B(t)?t:J(t),!n.supportsAlias)for(const g in e.options.alias)t.startsWith(g)&&(t=L(e.options.alias[g],t.substr(g.length)));if(n.validateDomains&&B(t)){const g=Q(t).host;if(!e.options.domains.find(x=>x===g))return{url:t}}const r=U(o,s,i);r.modifiers={...r.modifiers};const a=r.modifiers.format;(d=r.modifiers)!=null&&d.width&&(r.modifiers.width=y(r.modifiers.width)),(h=r.modifiers)!=null&&h.height&&(r.modifiers.height=y(r.modifiers.height));const l=n.getImage(t,r,e);return l.format=l.format||a||"",l}function ye(e,t){const o=e.options.providers[t];if(!o)throw new Error("Unknown provider: "+t);return o}function we(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function be(e,t,o){var p,A,C,E,O;const n=y((p=o.modifiers)==null?void 0:p.width),i=y((A=o.modifiers)==null?void 0:A.height),s=_e(o.sizes),r=(C=o.densities)!=null&&C.trim()?me(o.densities.trim()):e.options.densities;ge(r);const a=n&&i?i/n:0,l=[],d=[];if(Object.keys(s).length>=1){for(const _ in s){const w=D(_,String(s[_]),i,a,e);if(w!==void 0){l.push({size:w.size,screenMaxWidth:w.screenMaxWidth,media:`(max-width: ${w.screenMaxWidth}px)`});for(const M of r)d.push({width:w._cWidth*M,src:F(e,t,o,w,M)})}}xe(l)}else for(const _ of r){const w=Object.keys(s)[0];let M=D(w,String(s[w]),i,a,e);M===void 0&&(M={size:"",screenMaxWidth:0,_cWidth:(E=o.modifiers)==null?void 0:E.width,_cHeight:(O=o.modifiers)==null?void 0:O.height}),d.push({width:_,src:F(e,t,o,M,_)})}Se(d);const h=d[d.length-1],g=l.length?l.map(_=>`${_.media?_.media+" ":""}${_.size}`).join(", "):void 0,x=g?"w":"x",c=d.map(_=>`${_.src} ${_.width}${x}`).join(", ");return{sizes:g,srcset:c,src:h==null?void 0:h.src}}function D(e,t,o,n,i){const s=i.options.screens&&i.options.screens[e]||parseInt(e),r=t.endsWith("vw");if(!r&&/^\d+$/.test(t)&&(t=t+"px"),!r&&!t.endsWith("px"))return;let a=parseInt(t);if(!s||!a)return;r&&(a=Math.round(a/100*s));const l=n?Math.round(a*n):o;return{size:t,screenMaxWidth:s,_cWidth:a,_cHeight:l}}function F(e,t,o,n,i){return e.$img(t,{...o.modifiers,width:n._cWidth?n._cWidth*i:void 0,height:n._cHeight?n._cHeight*i:void 0},o)}function xe(e){var o;e.sort((n,i)=>n.screenMaxWidth-i.screenMaxWidth);let t=null;for(let n=e.length-1;n>=0;n--){const i=e[n];i.media===t&&e.splice(n,1),t=i.media}for(let n=0;n<e.length;n++)e[n].media=((o=e[n+1])==null?void 0:o.media)||""}function Se(e){e.sort((o,n)=>o.width-n.width);let t=null;for(let o=e.length-1;o>=0;o--){const n=e[o];n.width===t&&e.splice(o,1),t=n.width}}const $e=he({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>q(e)+"_"+q(t)}),ze=(e,{modifiers:t={},baseURL:o}={},n)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const i=$e(t)||"_";return o||(o=L(n.options.nuxt.baseURL,"/_ipx")),{url:L(o,i,Z(e))}},Me=!0,je=!0,ke=Object.freeze(Object.defineProperty({__proto__:null,getImage:ze,supportsAlias:je,validateDomains:Me},Symbol.toStringTag,{value:"Module"})),X={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1920},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};X.providers={ipxStatic:{provider:ke,defaults:void 0}};const Y=()=>{const e=K(),t=V();return t.$img||t._img||(t._img=pe({...X,nuxt:{baseURL:e.app.baseURL}}))},Ne={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},We=e=>{const t=b(()=>({provider:e.provider,preset:e.preset})),o=b(()=>({width:y(e.width),height:y(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),n=Y(),i=b(()=>({...e.modifiers,width:y(e.width),height:y(e.height),format:e.format,quality:e.quality||n.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:o,modifiers:i}},Ie={...Ne,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},Pe=j({name:"NuxtImg",props:Ie,emits:["load","error"],setup:(e,t)=>{const o=Y(),n=We(e),i=H(!1),s=b(()=>o.getSizes(e.src,{...n.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...n.modifiers.value,width:y(e.width),height:y(e.height)}})),r=b(()=>{const c={...n.attrs.value,"data-nuxt-img":""};return(!e.placeholder||i.value)&&(c.sizes=s.value.sizes,c.srcset=s.value.srcset),c}),a=b(()=>{let c=e.placeholder;if(c===""&&(c=!0),!c||i.value)return!1;if(typeof c=="string")return c;const p=Array.isArray(c)?c:typeof c=="number"?[c,c]:[10,10];return o(e.src,{...n.modifiers.value,width:p[0],height:p[1],quality:p[2]||50,blur:p[3]||3},n.options.value)}),l=b(()=>e.sizes?s.value.src:o(e.src,n.modifiers.value,n.options.value)),d=b(()=>a.value?a.value:l.value);if(e.preload){const c=Object.values(s.value).every(p=>p);ee({link:[{rel:"preload",as:"image",...c?{href:s.value.src,imagesizes:s.value.sizes,imagesrcset:s.value.srcset}:{href:d.value}}]})}const h=H(),x=V().isHydrating;return te(()=>{if(a.value){const c=new Image;c.src=l.value,e.sizes&&(c.sizes=s.value.sizes||"",c.srcset=s.value.srcset),c.onload=p=>{i.value=!0,t.emit("load",p)};return}h.value&&(h.value.complete&&x&&(h.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),h.value.onload=c=>{t.emit("load",c)},h.value.onerror=c=>{t.emit("error",c)})}),()=>ne("img",{ref:h,src:d.value,...r.value,...t.attrs})}}),Le={class:"flex-1"},Ae={key:1},Ce=j({__name:"Logo",props:{src:{default:""},alt:{default:"ProjectM"},link:{default:"/"}},setup(e){const t=e;return(o,n)=>{const i=Pe,s=W;return u(),f("div",Le,[v(s,{to:t.link,class:"normal-case text-xl font-bold overflow-hidden"},{default:z(()=>[t.src?(u(),P(i,{key:0,src:t.src,alt:t.alt,class:"w-12 h-12"},null,8,["src","alt"])):(u(),f("div",Ae,$(t.alt),1))]),_:1},8,["to"])])}}}),Ee={class:"form-control"},Oe=["placeholder"],Be=j({__name:"Search",props:{placeholder:{default:"Search..."}},setup(e){const t=e;return(o,n)=>(u(),f("div",Ee,[m("input",{type:"text",placeholder:t.placeholder,class:"input input-bordered h-10 rounded-full md:w-auto"},null,8,Oe)]))}}),qe={class:"navbar px-4 rounded-3xl shadow-md bg-base-200"},He={class:"navbar-start"},Re={class:"navbar-center hidden lg:flex"},De={class:"menu menu-horizontal px-1"},Fe={key:1},Te={class:"p-2"},Ue={class:"navbar-end"},tt=j({__name:"Navbar",setup(e){const t=[{name:"Home",path:"/"},{name:"Projects",path:"/projects",submenu:[{name:"ProjectM",path:"/projectm"}]},{name:"About Us",path:"/about"},{name:"Contact",path:"/contact"}],o={icon:"heroicons-solid:menu-alt-1",menu:t};return(n,i)=>{const s=le,r=Ce,a=W,l=Be;return u(),f("div",qe,[m("div",He,[v(s,{icon:o.icon,menu:o.menu},null,8,["icon","menu"]),v(r)]),m("div",Re,[m("ul",De,[(u(),f(k,null,N(t,(d,h)=>m("li",{key:h,tabindex:"0"},[d.submenu?I("",!0):(u(),P(a,{key:0,to:d.path},{default:z(()=>[S($(d.name),1)]),_:2},1032,["to"])),d.submenu?(u(),f("details",Fe,[m("summary",null,$(d.name),1),m("ul",Te,[(u(!0),f(k,null,N(d.submenu,(g,x)=>(u(),f("li",{key:x},[v(a,{to:g.path},{default:z(()=>[S($(g.name),1)]),_:2},1032,["to"])]))),128))])])):I("",!0)])),64))])]),m("div",Ue,[v(l)])])}}}),Ve={class:"grid-flow-col gap-4 md:place-self-center md:justify-self-end hidden sm:grid"},Ge=j({__name:"SocialMedia",props:{menu:{default:()=>[{label:"Github",icon:"bxl:github",iconClass:"hover:text-secondary",link:"https://github.com/projectM-visualizer"},{label:"Discord",icon:"bxl:discord-alt",iconClass:"hover:text-secondary",link:"https://discord.gg/7fQXN43n9W"},{label:"Twitter",icon:"bxl:twitter",iconClass:"hover:text-secondary",link:"https://twitter.com/projectMViz"}]}},setup(e){const t=e;return(o,n)=>{const i=T,s=W;return u(),f("nav",Ve,[(u(!0),f(k,null,N(t.menu,(r,a)=>(u(),P(s,{key:a,to:r.link},{default:z(()=>[v(i,{name:r.icon,class:oe(["w-7 h-7",r.iconClass])},null,8,["name","class"])]),_:2},1032,["to"]))),128))])}}}),Xe={},Ye={class:"footer flex items-center justify-center sm:justify-between p-4 bg-base-200 text-neutral-content rounded-3xl shadow-md"},Je={class:"items-center grid-flow-col"};function Qe(e,t){const o=W,n=Ge;return u(),f("footer",Ye,[m("aside",Je,[m("p",null,[S(" Copyright © 2023 | "),v(o,{to:"/"},{default:z(()=>[S(" ProjectM ")]),_:1}),S(" | All right reserved ")])]),v(n)])}const nt=ie(Xe,[["render",Qe]]);export{tt as _,nt as a};
