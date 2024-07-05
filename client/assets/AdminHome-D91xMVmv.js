import{c as l,j as a,b as r,h as o,r as t,s as n,L as e,O as h}from"./index-Bi6rx8zx.js";import{A as m}from"./AdminPanelSettings-DPsKeqEQ.js";const x=l(a.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add"),j=l(a.jsx("path",{d:"M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 4h5v8l-2.5-1.5L6 12z"}),"Book"),p=l(a.jsx("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3m1-4.3h-2V7h2z"}),"Report"),g=l(a.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings"),b=l(a.jsx("path",{d:"M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2m0-10H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"}),"ViewAgenda"),v=()=>{const{sidebarToggle:s}=r(i=>i.sidebarToggle),d=o(),c=()=>{d(n(!s)),document.getElementsByTagName("body")[0].classList.toggle("sidebar-toggled")};return t.useEffect(()=>{window.innerWidth>540&&n(!1)},[s]),a.jsx(a.Fragment,{children:a.jsxs("ul",{className:`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${s?"toggled":""}`,id:"accordionSidebar",children:[a.jsxs("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"#",children:[a.jsx("div",{className:"sidebar-brand-icon rotate-n-15",children:a.jsx("i",{className:"fas fa-laugh-wink"})}),a.jsx("div",{className:"sidebar-brand-text mx-3",children:"Admin"})]}),a.jsx("hr",{className:"sidebar-divider my-0"}),a.jsx("li",{className:"nav-item active",children:a.jsxs(e,{to:"/admin-dashboard",className:"nav-link",children:[a.jsx("i",{className:"fas fa-fw fa-tachometer-alt"}),a.jsx("span",{children:"Dashboard"})]})}),a.jsx("hr",{className:"sidebar-divider"}),a.jsx("div",{className:"sidebar-heading",children:"Pages"}),a.jsxs("li",{className:"nav-item",children:[a.jsxs("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo",children:[a.jsx("i",{className:"fas fa-fw fa-cog"}),a.jsx("span",{children:"Home Page"})]}),a.jsx("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionSidebar",children:a.jsxs("div",{className:"bg-white py-2 collapse-inner rounded",children:[a.jsx("h6",{className:"collapse-header",children:"Make Changes:"}),a.jsx(e,{to:"/admin-dashboard/topbar",className:"collapse-item",children:"Topbar"}),a.jsx(e,{to:"/admin-dashboard/review",className:"collapse-item",children:"Student Reviews"})]})})]}),a.jsxs("li",{className:"nav-item",children:[a.jsxs("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"true","aria-controls":"collapseThree",children:[a.jsx("i",{className:"fas fa-fw fa-cog"}),a.jsx("span",{children:"Courses info"})]}),a.jsx("div",{id:"collapseThree",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionSidebar",children:a.jsxs("div",{className:"bg-white py-2 collapse-inner rounded",children:[a.jsx("h6",{className:"collapse-header",children:"Make Changes:"}),a.jsx(e,{to:"/admin-dashboard/courses",className:"collapse-item",children:"Update courses"}),a.jsx(e,{to:"/admin-dashboard/referral",className:"collapse-item",children:"Referrals"})]})})]}),a.jsx("hr",{className:"sidebar-divider"}),a.jsx("div",{className:"sidebar-heading",children:"Addons"}),a.jsx("li",{className:"nav-item active",children:a.jsxs(e,{to:"/admin-dashboard/users",className:"nav-link",children:[a.jsx(m,{}),a.jsx("span",{children:"Manage Users"})]})}),a.jsx("li",{className:"nav-item active",children:a.jsxs(e,{to:"/admin-dashboard/course-request",className:"nav-link",children:[a.jsx(j,{}),a.jsx("span",{children:"Course Requests"})]})}),a.jsxs("li",{className:"nav-item",children:[a.jsxs("a",{className:"nav-link collapsed",href:"#","data-toggle":"collapse","data-target":"#collapsePages","aria-expanded":"true","aria-controls":"collapsePages",children:[a.jsx("i",{className:"fas fa-fw fa-folder"}),a.jsx("span",{children:"Manage MCQ's"})]}),a.jsx("div",{id:"collapsePages",className:"collapse","aria-labelledby":"headingPages","data-parent":"#accordionSidebar",children:a.jsxs("div",{className:"bg-white py-1 collapse-inner rounded",children:[a.jsx("h6",{className:"collapse-header",children:"MCQS:"}),a.jsx(e,{to:"/admin-dashboard/add-mcq",children:a.jsxs("span",{className:"collapse-item",children:[a.jsx(x,{}),"Add New MCQ"]})}),a.jsx(e,{to:"/admin-dashboard/view-mcq",children:a.jsxs("span",{className:"collapse-item",children:[a.jsx(b,{})," View MCQ's"]})}),a.jsx(e,{to:"/admin-dashboard/report-mcq",children:a.jsxs("span",{className:"collapse-item",children:[a.jsx(p,{})," Reported MCQ's"]})})]})})]}),a.jsx(e,{to:"/admin-dashboard/settings",className:"nav-item",children:a.jsxs("li",{className:"nav-link",children:[a.jsx(g,{}),a.jsx("span",{children:"Admin Settings"})]})}),a.jsx("hr",{className:"sidebar-divider d-none d-md-block"}),a.jsx("div",{className:"text-center d-none d-md-inline",children:a.jsx("button",{onClick:c,className:"rounded-circle border-0",id:"sidebarToggle"})})]})})},N=()=>{const s=o(),{sidebarToggle:d}=r(i=>i.sidebarToggle),c=()=>{s(n(!d)),document.getElementsByTagName("body")[0].classList.toggle("sidebar-toggled")};return a.jsx(a.Fragment,{children:a.jsxs("nav",{className:"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",children:[a.jsx("button",{onClick:c,id:"sidebarToggleTop",className:"btn btn-link d-md-none rounded-circle mr-3",children:a.jsx("i",{className:"fa fa-bars"})}),a.jsx("ul",{className:"navbar-nav ml-auto"})]})})},w=()=>a.jsxs("div",{id:"wrapper",children:[a.jsx(v,{}),a.jsx("div",{id:"content-wrapper",className:"d-flex flex-column",children:a.jsxs("div",{id:"content",children:[a.jsx(N,{}),a.jsx(h,{})]})})]});export{w as default};
