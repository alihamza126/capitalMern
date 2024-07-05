import{a2 as H,a1 as _,a3 as $,a7 as d,r as c,a9 as pe,b3 as ue,au as me,ab as Q,aa as he,b4 as xe,ar as fe,j as e,ad as G,ae as O,aw as ee,a8 as ge,b5 as be,b6 as ye,b7 as X,az as ve,c as K,u as je,b2 as J,b as Ce,C as we,b8 as Se,D as Ne,b9 as Te,f as Re}from"./index-Bi6rx8zx.js";import{p as Ee,c as Ae,b as Me,a as ke,d as $e,e as ze}from"./mdcat-BMVJwXfV.js";function Pe(s){return H("MuiCollapse",s)}_("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const De=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],Ie=s=>{const{orientation:t,classes:a}=s,o={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return O(o,Pe,a)},We=$("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:a}=s;return[t.root,t[a.orientation],a.state==="entered"&&t.entered,a.state==="exited"&&!a.in&&a.collapsedSize==="0px"&&t.hidden]}})(({theme:s,ownerState:t})=>d({height:0,overflow:"hidden",transition:s.transitions.create("height")},t.orientation==="horizontal"&&{height:"auto",width:0,transition:s.transitions.create("width")},t.state==="entered"&&d({height:"auto",overflow:"visible"},t.orientation==="horizontal"&&{width:"auto"}),t.state==="exited"&&!t.in&&t.collapsedSize==="0px"&&{visibility:"hidden"})),Be=$("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(s,t)=>t.wrapper})(({ownerState:s})=>d({display:"flex",width:"100%"},s.orientation==="horizontal"&&{width:"auto",height:"100%"})),Ue=$("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(s,t)=>t.wrapperInner})(({ownerState:s})=>d({width:"100%"},s.orientation==="horizontal"&&{width:"auto",height:"100%"})),se=c.forwardRef(function(t,a){const o=pe({props:t,name:"MuiCollapse"}),{addEndListener:h,children:y,className:x,collapsedSize:i="0px",component:m,easing:R,in:p,onEnter:f,onEntered:v,onEntering:S,onExit:E,onExited:j,onExiting:C,orientation:u="vertical",style:A,timeout:g=ue.standard,TransitionComponent:M=me}=o,P=Q(o,De),n=d({},o,{orientation:u,collapsedSize:i}),l=Ie(n),w=he(),k=xe(),N=c.useRef(null),B=c.useRef(),D=typeof i=="number"?`${i}px`:i,z=u==="horizontal",U=z?"width":"height",F=c.useRef(null),oe=fe(a,F),I=r=>b=>{if(r){const T=F.current;b===void 0?r(T):r(T,b)}},Y=()=>N.current?N.current[z?"clientWidth":"clientHeight"]:0,ae=I((r,b)=>{N.current&&z&&(N.current.style.position="absolute"),r.style[U]=D,f&&f(r,b)}),ne=I((r,b)=>{const T=Y();N.current&&z&&(N.current.style.position="");const{duration:q,easing:L}=ee({style:A,timeout:g,easing:R},{mode:"enter"});if(g==="auto"){const Z=w.transitions.getAutoHeightDuration(T);r.style.transitionDuration=`${Z}ms`,B.current=Z}else r.style.transitionDuration=typeof q=="string"?q:`${q}ms`;r.style[U]=`${T}px`,r.style.transitionTimingFunction=L,S&&S(r,b)}),re=I((r,b)=>{r.style[U]="auto",v&&v(r,b)}),ie=I(r=>{r.style[U]=`${Y()}px`,E&&E(r)}),ce=I(j),le=I(r=>{const b=Y(),{duration:T,easing:q}=ee({style:A,timeout:g,easing:R},{mode:"exit"});if(g==="auto"){const L=w.transitions.getAutoHeightDuration(b);r.style.transitionDuration=`${L}ms`,B.current=L}else r.style.transitionDuration=typeof T=="string"?T:`${T}ms`;r.style[U]=D,r.style.transitionTimingFunction=q,C&&C(r)}),de=r=>{g==="auto"&&k.start(B.current||0,r),h&&h(F.current,r)};return e.jsx(M,d({in:p,onEnter:ae,onEntered:re,onEntering:ne,onExit:ie,onExited:ce,onExiting:le,addEndListener:de,nodeRef:F,timeout:g==="auto"?null:g},P,{children:(r,b)=>e.jsx(We,d({as:m,className:G(l.root,x,{entered:l.entered,exited:!p&&D==="0px"&&l.hidden}[r]),style:d({[z?"minWidth":"minHeight"]:D},A),ref:oe},b,{ownerState:d({},n,{state:r}),children:e.jsx(Be,{ownerState:d({},n,{state:r}),className:l.wrapper,ref:N,children:e.jsx(Ue,{ownerState:d({},n,{state:r}),className:l.wrapperInner,children:y})})}))}))});se.muiSupportAuto=!0;const qe=se,te=c.createContext({});function Ge(s){return H("MuiAccordion",s)}const Fe=_("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),V=Fe,Le=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","slots","slotProps","TransitionComponent","TransitionProps"],Ve=X(),He=s=>{const{classes:t,square:a,expanded:o,disabled:h,disableGutters:y}=s;return O({root:["root",!a&&"rounded",o&&"expanded",h&&"disabled",!y&&"gutters"],region:["region"]},Ge,t)},_e=$(ge,{name:"MuiAccordion",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:a}=s;return[{[`& .${V.region}`]:t.region},t.root,!a.square&&t.rounded,!a.disableGutters&&t.gutters]}})(({theme:s})=>{const t={duration:s.transitions.duration.shortest};return{position:"relative",transition:s.transitions.create(["margin"],t),overflowAnchor:"none","&::before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(s.vars||s).palette.divider,transition:s.transitions.create(["opacity","background-color"],t)},"&:first-of-type":{"&::before":{display:"none"}},[`&.${V.expanded}`]:{"&::before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&::before":{display:"none"}}},[`&.${V.disabled}`]:{backgroundColor:(s.vars||s).palette.action.disabledBackground}}},({theme:s})=>({variants:[{props:t=>!t.square,style:{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(s.vars||s).shape.borderRadius,borderTopRightRadius:(s.vars||s).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(s.vars||s).shape.borderRadius,borderBottomRightRadius:(s.vars||s).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}},{props:t=>!t.disableGutters,style:{[`&.${V.expanded}`]:{margin:"16px 0"}}}]})),Qe=c.forwardRef(function(t,a){const o=Ve({props:t,name:"MuiAccordion"}),{children:h,className:y,defaultExpanded:x=!1,disabled:i=!1,disableGutters:m=!1,expanded:R,onChange:p,square:f=!1,slots:v={},slotProps:S={},TransitionComponent:E,TransitionProps:j}=o,C=Q(o,Le),[u,A]=be({controlled:R,default:x,name:"Accordion",state:"expanded"}),g=c.useCallback(z=>{A(!u),p&&p(z,!u)},[u,p,A]),[M,...P]=c.Children.toArray(h),n=c.useMemo(()=>({expanded:u,disabled:i,disableGutters:m,toggle:g}),[u,i,m,g]),l=d({},o,{square:f,disabled:i,disableGutters:m,expanded:u}),w=He(l),k=d({transition:E},v),N=d({transition:j},S),[B,D]=ye("transition",{elementType:qe,externalForwardedProps:{slots:k,slotProps:N},ownerState:l});return e.jsxs(_e,d({className:G(w.root,y),ref:a,ownerState:l,square:f},C,{children:[e.jsx(te.Provider,{value:n,children:M}),e.jsx(B,d({in:u,timeout:"auto"},D,{children:e.jsx("div",{"aria-labelledby":M.props.id,id:M.props["aria-controls"],role:"region",className:w.region,children:P})}))]}))}),Oe=Qe;function Ke(s){return H("MuiAccordionDetails",s)}_("MuiAccordionDetails",["root"]);const Ye=["className"],Je=X(),Xe=s=>{const{classes:t}=s;return O({root:["root"]},Ke,t)},Ze=$("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(s,t)=>t.root})(({theme:s})=>({padding:s.spacing(1,2,2)})),es=c.forwardRef(function(t,a){const o=Je({props:t,name:"MuiAccordionDetails"}),{className:h}=o,y=Q(o,Ye),x=o,i=Xe(x);return e.jsx(Ze,d({className:G(i.root,h),ref:a,ownerState:x},y))}),ss=es;function ts(s){return H("MuiAccordionSummary",s)}const os=_("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),W=os,as=["children","className","expandIcon","focusVisibleClassName","onClick"],ns=X(),rs=s=>{const{classes:t,expanded:a,disabled:o,disableGutters:h}=s;return O({root:["root",a&&"expanded",o&&"disabled",!h&&"gutters"],focusVisible:["focusVisible"],content:["content",a&&"expanded",!h&&"contentGutters"],expandIconWrapper:["expandIconWrapper",a&&"expanded"]},ts,t)},is=$(ve,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(s,t)=>t.root})(({theme:s})=>{const t={duration:s.transitions.duration.shortest};return{display:"flex",minHeight:48,padding:s.spacing(0,2),transition:s.transitions.create(["min-height","background-color"],t),[`&.${W.focusVisible}`]:{backgroundColor:(s.vars||s).palette.action.focus},[`&.${W.disabled}`]:{opacity:(s.vars||s).palette.action.disabledOpacity},[`&:hover:not(.${W.disabled})`]:{cursor:"pointer"},variants:[{props:a=>!a.disableGutters,style:{[`&.${W.expanded}`]:{minHeight:64}}}]}}),cs=$("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(s,t)=>t.content})(({theme:s})=>({display:"flex",flexGrow:1,margin:"12px 0",variants:[{props:t=>!t.disableGutters,style:{transition:s.transitions.create(["margin"],{duration:s.transitions.duration.shortest}),[`&.${W.expanded}`]:{margin:"20px 0"}}}]})),ls=$("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(s,t)=>t.expandIconWrapper})(({theme:s})=>({display:"flex",color:(s.vars||s).palette.action.active,transform:"rotate(0deg)",transition:s.transitions.create("transform",{duration:s.transitions.duration.shortest}),[`&.${W.expanded}`]:{transform:"rotate(180deg)"}})),ds=c.forwardRef(function(t,a){const o=ns({props:t,name:"MuiAccordionSummary"}),{children:h,className:y,expandIcon:x,focusVisibleClassName:i,onClick:m}=o,R=Q(o,as),{disabled:p=!1,disableGutters:f,expanded:v,toggle:S}=c.useContext(te),E=u=>{S&&S(u),m&&m(u)},j=d({},o,{expanded:v,disabled:p,disableGutters:f}),C=rs(j);return e.jsxs(is,d({focusRipple:!1,disableRipple:!0,disabled:p,component:"div","aria-expanded":v,className:G(C.root,y),focusVisibleClassName:G(C.focusVisible,i),onClick:E,ref:a,ownerState:j},R,{children:[e.jsx(cs,{className:C.content,ownerState:j,children:h}),x&&e.jsx(ls,{className:C.expandIconWrapper,ownerState:j,children:x})]}))}),ps=ds,us=K(e.jsx("path",{d:"m19 8-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4z"}),"Cached"),ms=K(e.jsx("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"}),"Done"),hs=K(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"ErrorOutline"),xs=K(e.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),fs="/assets/done-CQKfRcTm.gif",ys=()=>{var g,M,P;const s=je();let t=(g=J())==null?void 0:g.subject.trim(),a=(M=J())==null?void 0:M.chapter.trim(),o=(P=J())==null?void 0:P.name.trim();const[h,y]=c.useState(Ce(n=>{var l,w,k;return(k=(w=(l=n.auth)==null?void 0:l.user)==null?void 0:w.user)==null?void 0:k.user})),[x,i]=c.useState([]),[m,R]=c.useState(""),[p,f]=c.useState("unsolved"),[v,S]=c.useState([]),[E,j]=c.useState(!1),[C,u]=c.useState(!1);c.useEffect(()=>{if(t=="mdcat")switch(a){case"biology":i(Me[o]||[]);break;case"chemistry":i(Ae[o]||[]);break;case"physics":i(Ee[o]||[]);break;case"english":i(n=>[o]);break;case"logic":i(n=>[o]);break;case"mock":i(["Mock Test"]);break;default:i([]);break}else if(t=="nums")switch(a){case"biology":i(ze[o]||[]);break;case"chemistry":i($e[o]||[]);break;case"physics":i(ke[o]||[]);break;case"english":i(n=>[o]);break;case"logic":i(n=>[o]);break;case"mock":i(["Mock Test"]);break;default:i([]);break}},[]);const A=()=>{C?t&&a&&o&&m&&p?s("/mcq",{state:{course:t,subject:a,chapter:o,topic:m,catagory:p}}):alert("something Wrong"):j(!0),a==="mock"&&s("/mcq",{state:{course:t,subject:a,chapter:o,topic:m,catagory:p}})};return c.useEffect(()=>{(async()=>{const l=await Re.post("/mcq/cout",{course:t,subject:a,chapter:o,topic:x,catagory:p,userId:h._id});S(l.data)})()},[p,x]),c.useEffect(()=>{v.filter(n=>{(n.topic==m||n.subject=="english"||n.subject=="logic")&&(n.count>0?u(!0):u(!1))})},[m,v]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"container-fluid p-0 p-md-1",children:[e.jsx("div",{className:"row p-3 p-md-0  ",children:e.jsx("div",{className:"col-md-8 col-12 offset-md-2 text-center",children:e.jsx("h1",{className:"subjectpage-heading p-3 fw-bold text-white rounded-5 mb-5",children:"SELECT YOUR TOPIC"})})}),e.jsx("div",{className:"row justify-content-center",children:e.jsx("div",{className:"",children:e.jsxs("div",{className:"topic-box offset-md-2 col-md-8 col-12 p-3 rounded-3",children:[e.jsx("div",{className:"row justify-content-center",children:e.jsx("span",{className:"bg-info fs-5 w-auto p-2 text-light fw-bold mb-3 rounded-5 px-4 text-capitalize",children:o})}),e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{class:"radio-inputs w-auto mt-3 flex-wrap justify-content-center",children:[e.jsxs("label",{children:[e.jsx("input",{class:"radio-input",defaultChecked:!0,onChange:n=>f(n.target.value),type:"radio",name:"catagory",value:"unsolved"}),e.jsxs("span",{class:"radio-tile",children:[e.jsx("span",{class:"radio-icon",children:e.jsx(hs,{})}),e.jsx("span",{class:"radio-label",children:"Unsolved MCQ"})]})]}),e.jsxs("label",{children:[e.jsx("input",{class:"radio-input",onChange:n=>f(n.target.value),type:"radio",name:"catagory",value:"wrong"}),e.jsxs("span",{class:"radio-tile",children:[e.jsx("span",{class:"radio-icon",children:e.jsx(we,{})}),e.jsx("span",{class:"radio-label",children:"Wrong MCQ"})]})]}),e.jsxs("label",{children:[e.jsx("input",{class:"radio-input",onChange:n=>f(n.target.value),type:"radio",name:"catagory",value:"solved"}),e.jsxs("span",{class:"radio-tile",children:[e.jsx("span",{class:"radio-icon",children:e.jsx(ms,{})}),e.jsx("span",{class:"radio-label",children:"Solved MCQ"})]})]}),e.jsxs("label",{children:[e.jsx("input",{class:"radio-input",onChange:n=>f(n.target.value),type:"radio",name:"catagory",value:"past"}),e.jsxs("span",{class:"radio-tile",children:[e.jsx("span",{class:"radio-icon",children:e.jsx(us,{})}),e.jsx("span",{class:"radio-label",children:"Past MCQ"})]})]}),e.jsxs("label",{children:[e.jsx("input",{class:"radio-input",onChange:n=>f(n.target.value),type:"radio",name:"catagory",value:"all"}),e.jsxs("span",{class:"radio-tile",children:[e.jsx("span",{class:"radio-icon",children:e.jsx(Se,{})}),e.jsx("span",{class:"radio-label",children:"Select All MCQ"})]})]})]})}),e.jsx("hr",{}),e.jsx("div",{className:"row bg-light bg-danger p-0",children:e.jsx("span",{className:"text-center fw-bold fs-3",style:{color:"#310B7B",fontFamily:"inter"},children:"Select Topic"})}),e.jsxs("ul",{children:[e.jsxs(Oe,{className:"rounded-3 overflow-hidden",defaultExpanded:!0,children:[e.jsx(ps,{expandIcon:e.jsx(xs,{}),"aria-controls":"panel1-content",id:"panel1-header",sx:{bgcolor:"wheat",borderRadius:1},className:"shadow-xl fw-bold text-dark",children:"Expand Topics"}),e.jsx(ss,{children:x.map((n,l)=>{var w;return e.jsxs("li",{children:[e.jsx("label",{className:"w-100 h-100",htmlFor:`topic-${l}`,name:"topic",children:n}),e.jsx("span",{className:"text-dark",children:a!=="mock"&&(((w=v[l])==null?void 0:w.count)||0)}),e.jsx("input",{type:"radio",name:"topic",id:`topic-${l}`,value:n,onChange:k=>R(k.target.value.trim())})]},l)})})]}),e.jsx("div",{className:"row justify-content-end me-4",title:!(m&&p)&&"First Choose Topic",children:e.jsx(Ne,{variant:"contained",className:"mt-5 w-auto",disabled:!(m&&p),style:{background:"#371085ea"},onClick:A,children:"Next"})})]})]})})})]}),e.jsx(Te,{custom:!0,show:E,confirmBtnText:"Try Another",confirmBtnBsStyle:"primary",cancelBtnBsStyle:"light",customIcon:e.jsx("div",{children:e.jsx("img",{src:fs,alt:"Custom Icon",height:155,width:155})}),title:`${p} MCQ's not available yet! 🌟`,onConfirm:()=>j(!1)})]})};export{ys as default};
