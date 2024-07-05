import{r as m,h as F,b as W,d as A,j as e,aR as R,ag as f,aQ as z,a$ as O,I as x,b0 as E,aS as n,aG as B,T as o,D as L,S as T,f as p,b1 as M,g as q,C as G}from"./index-Bi6rx8zx.js";const J=()=>{const[u,j]=m.useState(null),[y,d]=m.useState(!1),C=F(),{user:a=""}=W(l=>{var i,s;return((s=(i=l.auth)==null?void 0:i.user)==null?void 0:s.user)||""}),[b,N]=m.useState(a.profileUrl||""),v=a.aggPercentage<1||a.domicalCity=="",[w,S]=m.useState(v),{enqueueSnackbar:P}=A(),D=(l,i)=>{P(l,{variant:i,autoHideDuration:2200,anchorOrigin:{vertical:"top",horizontal:"center"},action:e.jsx(x,{size:"small","aria-label":"close",color:"inherit",onClick:()=>q(),children:e.jsx(G,{fontSize:"small"})})})},[t,I]=m.useState({fullName:a.fullname||"",fName:a.fathername||"",email:a.email||"",city:a.city||"",contact:a.contact||"",course:a.course||"",domicalCity:(a==null?void 0:a.domicalCity)||"",aggPercentage:(a==null?void 0:a.aggPercentage)||""}),c=l=>{I({...t,[l.target.name]:l.target.value})},g=async l=>{l.preventDefault();try{d(!0);const i={id:a._id};t.fullName!==a.fullname&&(i.fullname=t.fullName),t.fName!==a.fathername&&(i.fathername=t.fName),t.email!==a.email&&(i.email=t.email),t.city!==a.city&&(i.city=t.city),t.contact!==a.contact&&(i.contact=t.contact),t.domicalCity!==a.domicalCity&&(i.domicalCity=t.domicalCity),t.aggPercentage!==a.aggPercentage&&(i.aggPercentage=t.aggPercentage);let s=a.profileUrl;if(u){const r=new FormData;r.append("image",u);const k={headers:{"Content-Type":"multipart/form-data"}},h=await p.post("/upload/img",r,k);if(h.status===200)s=h.data.fileURL;else throw new Error("Failed to upload image")}i.profileUrl=s;try{const r=await p.post("/user/update",i);r.data.user!=null?(localStorage.setItem("user",JSON.stringify(r.data)),C(M(r.data)),window.location.reload()):r.data.code==11e3&&D("Email Already Registered","error")}catch{}d(!1)}catch{d(!1)}},U=l=>{const i=l.target.files[0],s=new FileReader;s.onload=()=>{N(s.result)},s.readAsDataURL(i),j(i)};return e.jsxs(R,{maxWidth:"xl",children:[e.jsx("div",{className:"container text-center py-2 mt-md-1 mt-4 rounded-5 shadow text-white fw-bold custom-bg",children:e.jsx(f,{variant:"h5",className:"mt-2 d-inline",align:"center",gutterBottom:!0,children:"Profile Settings"})}),w&&e.jsx(z.div,{initial:{opacity:0,x:50},transition:{duration:1},whileInView:{opacity:1,x:0},children:e.jsxs(O,{className:"mt-4",variant:"filled",severity:"info",action:e.jsx(x,{"aria-label":"close",color:"inherit",size:"small",onClick:()=>{S(!1)},children:e.jsx(E,{fontSize:"inherit"})}),children:[e.jsx("p",{children:"Please provide the following details:"}),e.jsxs("ol",{children:[(a==null?void 0:a.domicalCity)==""&&e.jsx("li",{children:"Domicile City"}),((a==null?void 0:a.aggPercentage)<1||(a==null?void 0:a.aggPercentage)==null)&&e.jsx("li",{children:"Aggregate Marks Percentage"})]})]})}),e.jsxs("div",{className:"row py-5",children:[e.jsx("div",{className:"col-md-4 col-12 mb-4",children:e.jsx(n,{container:!0,justifyContent:"center",className:"custom-shodow rounded-5",children:e.jsxs("div",{className:"p-5",children:[e.jsx(B,{sx:{width:170,height:170,marginBottom:2},src:b,alt:"Profile Image"}),e.jsxs("div",{className:"row justify-content-center",children:[e.jsx("input",{id:"file",type:"file",hidden:!0,accept:"image/*",onChange:U}),e.jsx("label",{htmlFor:"file",name:"file",className:"d-flex justify-content-center",children:e.jsx("span",{className:"btn btn-primary btn-sm w-75 ",children:"Change Image"})})]}),e.jsxs(f,{className:"mt-4 text-center fw-bold text-primary",children:["Username:",e.jsxs("span",{className:"d-block bg-light py-1 rounded-2 text-gray-600 fw",children:["@ ",a.username]})]})]})})}),e.jsx("div",{className:"col-md-8 col-12 shadow rounded-4 px-5 py-5",children:e.jsx("form",{onSubmit:g,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,xs:6,children:e.jsx(o,{fullWidth:!0,label:"Full Name",name:"fullName",value:t.fullName,onChange:c})}),e.jsx(n,{item:!0,xs:6,children:e.jsx(o,{fullWidth:!0,label:"Father Name",name:"fName",value:t.fName,onChange:c})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(o,{fullWidth:!0,label:"Email",name:"email",inputMode:"email",type:"email",required:!0,value:t.email,onChange:c})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(o,{fullWidth:!0,label:"City",name:"city",value:t.city,onChange:c})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(o,{fullWidth:!0,label:"Contact Number",name:"contact",value:t.contact,onChange:c})}),e.jsx(n,{item:!0,xs:6,children:e.jsx(o,{fullWidth:!0,label:"Aggregate Percentage",name:"aggPercentage",inputMode:"numeric",type:"number",value:t.aggPercentage,onChange:c})}),e.jsx(n,{item:!0,xs:6,children:e.jsx(o,{fullWidth:!0,label:"Domical City",name:"domicalCity",value:t.domicalCity,onChange:c})}),e.jsx(n,{item:!0,xs:12,children:e.jsxs(L,{type:"submit",onClick:g,variant:"contained",color:"primary",children:[" ","Update ",y&&e.jsx(T,{className:"ms-1",size:"sm"})]})})]})})})]})]})};export{J as default};