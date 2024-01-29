"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[8468],{65313:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>v,contentTitle:()=>j,default:()=>y,frontMatter:()=>h,metadata:()=>x,toc:()=>f});var l=a(85893),t=a(11151),n=a(58219),i=(a(62316),a(51039)),o=a.n(i),d=(a(82723),a(9487)),c=a(41429),r=a(5397),m=a(4667),p=a(9472),u=a(85162);const h={id:"deletedocument",title:"Delete Document",description:"The Delete document API allows you to remove specific document from your documents.",sidebar_label:"Delete Document",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vm1v2zYQ/ivcfWoB2ZKTtMOEYVi2BF3QYAmWDAOWGAEtnSw2FMmSlGND0H8fjpJsOU6Cftj2xZaOz/HunntTA54vHaR3cKazukLlHcwjyNFlVhgvtIIUbktkZyjRI8t7FDu9vmBcSv3k2EbXzGtmsdIrZM5gJgqR7aCF1RWB7FbkphCBNmg5WbjIIYU83D8AIALDLa/QoyXvGlC8QoL1gAeRQwSCvDPcl/Dc5WurVyJHphdfMPMXOdPFziGvWWcOIrD4tRYWc0i9rTEC5zeSDDlRGUkAXBupc4S04NIRICux4pA24DcmIL0VagkRFNpW3I8luObhlhRMebQoj7jLoW3nZNUZrRw6uucoSehvP4AhHb2nOXN1lqFzRS3l5juIINPKE1NpA9wYKbLAZfzFkXpz6GbHBBFriXkvOuMDQS8FtHP/lzU5b34zx9BGQ65O/dtKR8nR8WSWTJLvb2cf05Mf0g8fp0mS/A0RrCtJukNSuUe61wsvd+/tAazL2RjYS1oCnyQnb9CotGeFrlX+L3KH1mr7Ngcv2W9HEQglhcKHoR4eTpKTh+NtQB8OA7pQKy5FHvrvVj+i+n/jGZv3nfnDRIkOFM5hL9ixvAvSYVZb4TehydcTbsSkO0/v5tQpFfpS7wZEGAy+hBTioZ3jZjQUWqAr7WoYG7WVkELpvXFpHDvPl0ItJ9yYqTaonFgqyRdumukq5kbEqxmQ0cGpGyKu42bPtS1D3IjPuIFoiHyM6sdTiTxHG1gSqtBBuefjyqC6EUsV2FzNDobYbSkcEy4cDzGGzLJCW/ZMmy24w5xpxXyJ4ZDkx9PZdiIH1Sm7V/fqRlfIaodFLZkU6tGl92rC7q6KQmSCS/YXLpzwOH83MPf09HTA2Pug80n4sl4wi0bv4MsgDLSOtbYv7yECj7ZyV8UN2pXIsM/SK6biAI77UudZKHWsuKDs9qKfnytR6UmRoXI4Ks7TT9eX7HiaQDQqjm9wOb68+PX895tzupXKq0vRbJpMExIZ7XzF1chQvzHPdittL7vNrmv/owXb16jHtY+N5CL0Yoi56ZvoDkYLNx3v1nkEpXaeIE1DlfWnlW1L4q81WurWeQQrbgVfUCnfNZALR8/5dlG+Gu27P/qd+55985p+MZahCRV14IrLmt4ggkfcPPtUaOdtNHQiOdshTrMMjR/pHgzPvQl0dn55fnsOEfCayBsPgccwBPoHMvCia/vTofOBftvoFYUfqQg+4+anLbw7eVWhD3FAE03ztm3/AYcFZAM=",sidebar_class_name:"delete api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},j=void 0,x={id:"API-docs/deletedocument",title:"Delete Document",description:"The Delete document API allows you to remove specific document from your documents.",source:"@site/docs/API-docs/deletedocument.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/deletedocument",permalink:"/docs/API-docs/deletedocument",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"deletedocument",title:"Delete Document",description:"The Delete document API allows you to remove specific document from your documents.",sidebar_label:"Delete Document",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vm1v2zYQ/ivcfWoB2ZKTtMOEYVi2BF3QYAmWDAOWGAEtnSw2FMmSlGND0H8fjpJsOU6Cftj2xZaOz/HunntTA54vHaR3cKazukLlHcwjyNFlVhgvtIIUbktkZyjRI8t7FDu9vmBcSv3k2EbXzGtmsdIrZM5gJgqR7aCF1RWB7FbkphCBNmg5WbjIIYU83D8AIALDLa/QoyXvGlC8QoL1gAeRQwSCvDPcl/Dc5WurVyJHphdfMPMXOdPFziGvWWcOIrD4tRYWc0i9rTEC5zeSDDlRGUkAXBupc4S04NIRICux4pA24DcmIL0VagkRFNpW3I8luObhlhRMebQoj7jLoW3nZNUZrRw6uucoSehvP4AhHb2nOXN1lqFzRS3l5juIINPKE1NpA9wYKbLAZfzFkXpz6GbHBBFriXkvOuMDQS8FtHP/lzU5b34zx9BGQ65O/dtKR8nR8WSWTJLvb2cf05Mf0g8fp0mS/A0RrCtJukNSuUe61wsvd+/tAazL2RjYS1oCnyQnb9CotGeFrlX+L3KH1mr7Ngcv2W9HEQglhcKHoR4eTpKTh+NtQB8OA7pQKy5FHvrvVj+i+n/jGZv3nfnDRIkOFM5hL9ixvAvSYVZb4TehydcTbsSkO0/v5tQpFfpS7wZEGAy+hBTioZ3jZjQUWqAr7WoYG7WVkELpvXFpHDvPl0ItJ9yYqTaonFgqyRdumukq5kbEqxmQ0cGpGyKu42bPtS1D3IjPuIFoiHyM6sdTiTxHG1gSqtBBuefjyqC6EUsV2FzNDobYbSkcEy4cDzGGzLJCW/ZMmy24w5xpxXyJ4ZDkx9PZdiIH1Sm7V/fqRlfIaodFLZkU6tGl92rC7q6KQmSCS/YXLpzwOH83MPf09HTA2Pug80n4sl4wi0bv4MsgDLSOtbYv7yECj7ZyV8UN2pXIsM/SK6biAI77UudZKHWsuKDs9qKfnytR6UmRoXI4Ks7TT9eX7HiaQDQqjm9wOb68+PX895tzupXKq0vRbJpMExIZ7XzF1chQvzHPdittL7vNrmv/owXb16jHtY+N5CL0Yoi56ZvoDkYLNx3v1nkEpXaeIE1DlfWnlW1L4q81WurWeQQrbgVfUCnfNZALR8/5dlG+Gu27P/qd+55985p+MZahCRV14IrLmt4ggkfcPPtUaOdtNHQiOdshTrMMjR/pHgzPvQl0dn55fnsOEfCayBsPgccwBPoHMvCia/vTofOBftvoFYUfqQg+4+anLbw7eVWhD3FAE03ztm3/AYcFZAM=",sidebar_class_name:"delete api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Update Document",permalink:"/docs/API-docs/update-document"},next:{title:"Get Document list from status",permalink:"/docs/API-docs/getdocumentlist"}},v={},f=[{value:"Request",id:"request",level:2}];function b(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"openapi__heading",children:(0,l.jsx)(s.p,{children:"Delete Document"})}),"\n",(0,l.jsx)(o(),{method:"delete",path:"/document/{document_id}"}),"\n",(0,l.jsx)(s.p,{children:"The Delete document API allows you to remove specific document from your documents."}),"\n",(0,l.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(c.Z,{className:"paramsItem",param:{name:"document_id",in:"path",description:"Provide objectId of document to delete",required:!0,style:"simple",explode:!1,schema:{type:"string",format:"string",example:"ph2bh2asd"}}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(u.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Document deleted successfully!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(u.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(u.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(m.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bxh2aspHp3"}}),(0,l.jsx)(m.Z,{collapsible:!1,name:"deletedAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}})]})]})}),(0,l.jsx)(u.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(r.Z,{responseExample:'{\n  "objectId": "Bxh2aspHp3",\n  "deletedAt": "2023-10-07T16:49:56.000Z"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(u.default,{label:"404",value:"404",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Document not found!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(u.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(u.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Document not found!"}})})]})}),(0,l.jsx)(u.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(r.Z,{responseExample:'{\n  "error": "Document not found!"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(u.default,{label:"405",value:"405",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Invalid API Token!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(u.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(u.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,l.jsx)(u.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(r.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function y(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}}}]);