"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[1332],{94348:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>j,contentTitle:()=>x,default:()=>y,frontMatter:()=>u,metadata:()=>g,toc:()=>f});var i=a(85893),n=a(11151),t=a(58219),c=(a(62316),a(51039)),r=a.n(c),l=(a(82723),a(9487)),o=a(41429),m=a(5397),d=a(4667),p=a(9472),h=a(85162);const u={id:"getdocument",title:"Get document by ID",description:"Get a document",sidebar_label:"Get document by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJytVm1v2zYQ/ivsfWoAxZbtJN2EYWjWZJnTognmFAOWGAElnS0mEsmSlGND0H8fTi+2YifpPMwfbPN4d3x4Lw+vAMfnFoJbiFWUZyidhakHMdrICO2EkhDABTrGWasAHiiNhtPmOIYA5ug6e5obnqFDQ14LkDxDCGB5yLU4dOoRJXggyGuCPEYDHhj8nguDMQTO5OiBdauUbKzIdIrgAS51qmKEYMZTSwpRghmHoAC30pWmM0LOoSRVXhkFhFFaMZe95XK5hNJbQ2mx3ou4haK5S2D71ip8wMiNY6ZmLFLS8cj9n2A9mCmTcdeVbNDrPwZhEg0THUJZTulYq5W0aMnR0Pfp5zlcm0cRWjvLU7ZOD3hAyCkxQQFc61RE1Ub/wZJRsYuOG8NXFBeHme3I62hQfg25d6KG0gZp3/v9fiEeh6Mw+XZJWftaZWY/D5cK2W+IZH6ecZHua/+gMET82Ah6kcrI1XWi5N5Qjo5PPvw0Gg6GI3JxqcIb4dK9vcS4IPNPKtNcrva1bsu9cpFbpzI0VOEvuNkYRR3F0oNJHq4ryr5i/BYGu21PqcWluw9Fmgo5v4+5wx/X1P19vf8W8jPyVHogrHpbcegPR4cD/9D/cDM4CY5+Do5Per7v/w1l6cEyq8qmJYbGp6uz16x31HKLpqtWr+njwZF/tNuZZw3hMKkcm6lcxu+g0j3e1R3LBU9FzE6vx+yG2PJdhcBilBvhVhWldrk0uJ0SPWToEtVwccXBLoEA+i3V9YsO6ZVA/syiZejcpMTGzmkb9Ptc615bSykPLTVGn2vRXwyATmqRTIg46nw9w7MhEi0+IzHJD18AuqCQszqRTVCvNMqJmMsqEIvBDjnfJMIyYavt9m4Vs7GZMmzLmoXcYsyUZC7BapPko96AWY2RmDWk2GN38k5OVIYst0hEmgr5aIM7echur2YzEQmesr8wtMLh9H0bsaenp52IHVQ2F8IlecgMarVRn1fCKqxdq/XiADxwaDJ7NZugWYgIm+y8clS/Uu43VE+PVFAA1ozYij5uG1H9pSJCabFT2acX11/YqOeD1ymKfwG5/2X86fzr5Jy8UlnVKRr0/J5PIq2sy7jsHEQDRZs1Fq7Y+Gw7wcXm4dodP5oKc7h0fZ1yUZFehbhoSn8zzoAHQffFn3qQKOtIpSioLr6ZtCxJ/D1HQw029WDBjeAhFeJtAbGw9D9ev+ivAn3/ZzMcHLCXh4cXgbf9IqlZFjzNaQUePOJqa1opp6XXNs1/RvYajPq45126RkPjU61wGkWoXWdvZ6p4xkcX5zfgAc8pKV1qeKyooflDd3kxCs/R1ADom+C8aPALNfZnXP26Vq93XjVYD6G1NoViWpblP/6owF8=",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},x=void 0,g={id:"API-docs/getdocument",title:"Get document by ID",description:"Get a document",source:"@site/docs/API-docs/getdocument.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/getdocument",permalink:"/docs/API-docs/getdocument",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"getdocument",title:"Get document by ID",description:"Get a document",sidebar_label:"Get document by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJytVm1v2zYQ/ivsfWoAxZbtJN2EYWjWZJnTognmFAOWGAElnS0mEsmSlGND0H8fTi+2YifpPMwfbPN4d3x4Lw+vAMfnFoJbiFWUZyidhakHMdrICO2EkhDABTrGWasAHiiNhtPmOIYA5ug6e5obnqFDQ14LkDxDCGB5yLU4dOoRJXggyGuCPEYDHhj8nguDMQTO5OiBdauUbKzIdIrgAS51qmKEYMZTSwpRghmHoAC30pWmM0LOoSRVXhkFhFFaMZe95XK5hNJbQ2mx3ou4haK5S2D71ip8wMiNY6ZmLFLS8cj9n2A9mCmTcdeVbNDrPwZhEg0THUJZTulYq5W0aMnR0Pfp5zlcm0cRWjvLU7ZOD3hAyCkxQQFc61RE1Ub/wZJRsYuOG8NXFBeHme3I62hQfg25d6KG0gZp3/v9fiEeh6Mw+XZJWftaZWY/D5cK2W+IZH6ecZHua/+gMET82Ah6kcrI1XWi5N5Qjo5PPvw0Gg6GI3JxqcIb4dK9vcS4IPNPKtNcrva1bsu9cpFbpzI0VOEvuNkYRR3F0oNJHq4ryr5i/BYGu21PqcWluw9Fmgo5v4+5wx/X1P19vf8W8jPyVHogrHpbcegPR4cD/9D/cDM4CY5+Do5Per7v/w1l6cEyq8qmJYbGp6uz16x31HKLpqtWr+njwZF/tNuZZw3hMKkcm6lcxu+g0j3e1R3LBU9FzE6vx+yG2PJdhcBilBvhVhWldrk0uJ0SPWToEtVwccXBLoEA+i3V9YsO6ZVA/syiZejcpMTGzmkb9Ptc615bSykPLTVGn2vRXwyATmqRTIg46nw9w7MhEi0+IzHJD18AuqCQszqRTVCvNMqJmMsqEIvBDjnfJMIyYavt9m4Vs7GZMmzLmoXcYsyUZC7BapPko96AWY2RmDWk2GN38k5OVIYst0hEmgr5aIM7echur2YzEQmesr8wtMLh9H0bsaenp52IHVQ2F8IlecgMarVRn1fCKqxdq/XiADxwaDJ7NZugWYgIm+y8clS/Uu43VE+PVFAA1ozYij5uG1H9pSJCabFT2acX11/YqOeD1ymKfwG5/2X86fzr5Jy8UlnVKRr0/J5PIq2sy7jsHEQDRZs1Fq7Y+Gw7wcXm4dodP5oKc7h0fZ1yUZFehbhoSn8zzoAHQffFn3qQKOtIpSioLr6ZtCxJ/D1HQw029WDBjeAhFeJtAbGw9D9ev+ivAn3/ZzMcHLCXh4cXgbf9IqlZFjzNaQUePOJqa1opp6XXNs1/RvYajPq45126RkPjU61wGkWoXWdvZ6p4xkcX5zfgAc8pKV1qeKyooflDd3kxCs/R1ADom+C8aPALNfZnXP26Vq93XjVYD6G1NoViWpblP/6owF8=",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Create document",permalink:"/docs/API-docs/createdocument"},next:{title:"Get document list",permalink:"/docs/API-docs/getdocumentlist"}},j={},f=[{value:"Request",id:"request",level:2}];function b(e){const s={h2:"h2",p:"p",...(0,n.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:"openapi__heading",children:(0,i.jsx)(s.p,{children:"Get document by ID"})}),"\n",(0,i.jsx)(r(),{method:"get",path:"/document/{document_id}"}),"\n",(0,i.jsx)(s.p,{children:"Get a document"}),"\n",(0,i.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(o.Z,{className:"paramsItem",param:{name:"document_id",in:"path",description:"objectId of contact",required:!0,style:"simple",explode:!1,schema:{type:"string",format:"string",example:"pH1bhc2hpb"}}})})})]}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Header Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(o.Z,{className:"paramsItem",param:{name:"x-api-token",in:"header",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"opensign.xxxx"}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t.Z,{children:[(0,i.jsxs)(h.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"successful operation"})}),(0,i.jsx)("div",{children:(0,i.jsx)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,i.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(d.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"FGik23bhUJ"}}),(0,i.jsx)(d.Z,{collapsible:!1,name:"Name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"Joe Bee"}}),(0,i.jsx)(d.Z,{collapsible:!1,name:"Email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"joebee@example.com"}}),(0,i.jsx)(d.Z,{collapsible:!1,name:"Phone",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"4567832123"}}),(0,i.jsx)(d.Z,{collapsible:!1,name:"JobTitle",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"dev"}}),(0,i.jsx)(d.Z,{collapsible:!1,name:"Company",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"opensign"}}),(0,i.jsx)(d.Z,{collapsible:!1,name:"Customer_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"customer_id"}}),(0,i.jsx)(d.Z,{collapsible:!1,name:"Subscriptions_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"subscriptions_id"}}),(0,i.jsx)(d.Z,{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"Next_billing_date"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"date"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(d.Z,{collapsible:!1,name:"__type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Date"}}),(0,i.jsx)(d.Z,{collapsible:!1,name:"iso",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z"}})]})]})}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m.Z,{responseExample:'[\n  {\n    "objectId": "FGik23bhUJ",\n    "Name": "Joe Bee",\n    "Email": "joebee@example.com",\n    "Phone": "4567832123",\n    "JobTitle": "dev",\n    "Company": "opensign",\n    "Customer_id": "customer_id",\n    "Subscriptions_id": "subscriptions_id",\n    "Next_billing_date": {\n      "__type": "Date",\n      "iso": "2023-10-07T16:49:56.000Z"\n    }\n  }\n]',language:"json"})})]})})})})]}),(0,i.jsxs)(h.default,{label:"404",value:"404",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Document not found!"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(h.default,{label:"405",value:"405",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid API Token!"})}),(0,i.jsx)("div",{})]})]})})})]})}function y(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}}}]);