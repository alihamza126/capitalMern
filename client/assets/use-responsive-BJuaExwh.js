import{aZ as k,a_ as w,r as d,aC as g,aE as b,aa as x}from"./index-Bi6rx8zx.js";function S(e,o,t,n,r){const[a,c]=d.useState(()=>r&&t?t(e).matches:n?n(e).matches:o);return g(()=>{let i=!0;if(!t)return;const u=t(e),l=()=>{i&&c(u.matches)};return l(),u.addListener(l),()=>{i=!1,u.removeListener(l)}},[e,t]),a}const h=d.useSyncExternalStore;function v(e,o,t,n,r){const a=d.useCallback(()=>o,[o]),c=d.useMemo(()=>{if(r&&t)return()=>t(e).matches;if(n!==null){const{matches:s}=n(e);return()=>s}return a},[a,e,n,r,t]),[i,u]=d.useMemo(()=>{if(t===null)return[a,()=>()=>{}];const s=t(e);return[()=>s.matches,f=>(s.addListener(f),()=>{s.removeListener(f)})]},[a,t,e]);return h(u,i,c)}function m(e,o={}){const t=k(),n=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:r=!1,matchMedia:a=n?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:i=!1}=w({name:"MuiUseMediaQuery",props:o,theme:t});let u=typeof e=="function"?e(t):e;return u=u.replace(/^@media( ?)/m,""),(h!==void 0?v:S)(u,r,a,c,i)}function Q(e){const o=(e==null?void 0:e.color)||"#000000",t=(e==null?void 0:e.blur)||6,n=(e==null?void 0:e.opacity)||.8,r=e==null?void 0:e.imgUrl;return r?{position:"relative",backgroundImage:`url(${r})`,"&:before":{position:"absolute",top:0,left:0,zIndex:9,content:'""',width:"100%",height:"100%",backdropFilter:`blur(${t}px)`,WebkitBackdropFilter:`blur(${t}px)`,backgroundColor:b(o,n)}}:{backdropFilter:`blur(${t}px)`,WebkitBackdropFilter:`blur(${t}px)`,backgroundColor:b(o,n)}}function E(e,o,t){const n=x(),r=m(n.breakpoints.up(o)),a=m(n.breakpoints.down(o)),c=m(n.breakpoints.between(o,t)),i=m(n.breakpoints.only(o));return e==="up"?r:e==="down"?a:e==="between"?c:i}export{Q as b,E as u};