import{r as s,d as h,j as e,D as x,S as f,f as i}from"./index-Bi6rx8zx.js";const b=()=>{const l="Welcome Dear Student! May Your Journey Be Filled With Joy & Success",[n,o]=s.useState(l),[d,t]=s.useState(!1),{enqueueSnackbar:c}=h(),[u,r]=s.useState(!1),m=async()=>{try{t(!0),r(!0);const a=await i.post("/homepage/topbar",{tcontent:n});t(!1),c("updated successfully",{variant:"success",autoHideDuration:1500}),r(!1)}catch{t(!1),c("error updating",{variant:"error",autoHideDuration:1500}),r(!1)}};return s.useEffect(()=>{(async()=>{const p=await i.get("/homepage/topbar");o(p.data.tcontent)})()},[d]),e.jsx("div",{className:"admin-topbar",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"row py-2",children:e.jsxs("div",{className:"col-md-12 text-primary d-flex justify-content-between align-items-cente",children:[e.jsx("h1",{className:"fw-bold",children:"Topbar"}),e.jsxs(x,{variant:"contained",style:{height:"38px"},className:"pt-2",color:"primary",onClick:m,children:["Save",u&&e.jsx(f,{animation:"border",size:"sm",className:"ms-2"})]})]})}),e.jsx("div",{className:"row mt-5",children:e.jsx("div",{className:"col-md-12",children:e.jsx("textarea",{value:n,onChange:a=>o(a.target.value),name:"topbar",id:"topbar",rows:"5",style:{width:"100%",resize:"none"},className:"rounded p-2 fs-5 border-primary"})})})]})})};export{b as default};