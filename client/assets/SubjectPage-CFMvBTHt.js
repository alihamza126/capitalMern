import{j as s,L as u,aQ as g,b2 as x,r as m}from"./index-Bi6rx8zx.js";const p=({name:e,img:a,link:t})=>s.jsx("div",{className:"subject-page col-lg-3 col-md-4 col-6",children:s.jsx(u,{to:t,className:"text-decoration-none",children:s.jsxs("div",{className:"subject-card",children:[s.jsx("div",{className:"image-box rounded overflow-hidden",children:s.jsx(g.img,{whileHover:{scale:1.07},src:a,alt:""})}),s.jsx("div",{className:"title text-center py-2",children:s.jsx("p",{children:e})})]})})}),d="/assets/1-_5iPkwpL.png",o="/assets/2-BkB4R4AL.png",l="/assets/3-BHYf1X8k.png",r="/assets/4-CqexThKR.png",S="/assets/5-C_Uv_2XW.png",b="/assets/6-2TR_zEKy.png",E=()=>{var i;const e=(i=x())==null?void 0:i.subject,a=[{name:"BIOLOGY",img:d,link:"/dashboard/subject/nums/biology"},{name:"CHEMISTRY",img:o,link:"/dashboard/subject/nums/chemistry"},{name:"PHYSICS",img:l,link:"/dashboard/subject/nums/physics"},{name:"ENGLISH",img:r,link:"/dashboard/subject/nums/english"},{name:"MOCK TESTS",img:b,link:"/dashboard/subject/nums/mock/test"}],t=[{name:"BIOLOGY",img:d,link:"/dashboard/subject/mdcat/biology"},{name:"CHEMISTRY",img:o,link:"/dashboard/subject/mdcat/chemistry"},{name:"PHYSICS",img:l,link:"/dashboard/subject/mdcat/physics"},{name:"ENGLISH",img:r,link:"/dashboard/subject/mdcat/english"},{name:"LOGICAL REASONING",img:S,link:"/dashboard/subject/mdcat/logic"},{name:"MOCK TESTS",img:b,link:"/dashboard/subject/mdcat/mock/test"}],[h,n]=m.useState([]);return m.useEffect(()=>{e==="nums"?n(a):e==="mdcat"&&n(t)},[]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:"container",children:[s.jsx("div",{className:"row",children:s.jsx("div",{className:"col-md-8 col-12 offset-md-2 text-center",children:s.jsx("h1",{className:"subjectpage-heading p-3 fw-bold text-white rounded-5 mb-5",children:"SELECT YOUR SUBJECT"})})}),s.jsx("div",{className:"row",children:h.map((c,j)=>s.jsx(p,{name:c.name,img:c.img,link:c.link},j))})]})})};export{E as default};
