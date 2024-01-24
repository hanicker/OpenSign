"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[6741],{57755:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>g,contentTitle:()=>h,default:()=>b,frontMatter:()=>u,metadata:()=>f,toc:()=>x});var t=i(85893),s=i(11151),r=i(58219),l=(i(62316),i(51039)),n=i.n(l),o=(i(82723),i(9487)),c=(i(41429),i(5397)),d=i(4667),m=i(9472),p=i(85162);const u={id:"createdocumentwithbinary",title:"Create document with binary file type",description:"The Create Document API allows users to generate new documents by providing data through `multipart/form-data`. This flexible method allows for the inclusion of various data types, making it suitable for a wide range of document creation scenarios.",sidebar_label:"Create document with binary file type",hide_title:!0,hide_table_of_contents:!0,api:"eJzlVktv20YQ/ivbOSUA9bDTXoiiqBsHgZEgNiAVPciCsyKH5Njk7mZ3qUcE/vdilqRM2bKRAL31Iq3m+c03s7Pag5e5g3gBlzqpK1TewTKCFF1iyXjSCmKYFyjeW5QeRW8lLm6uhCxLvXGidmid8FrkqNCylcKNSPt4YrUTxuo1paRykUovhS+srvNCfK3q0pOR1k8ybasRK7+OxbwgJ7ISt7QqUVToC532yTJthS9QkErK2pFWQmdiLS3p2nXBdwZdJCr5wPnIC1eTlxyJfaXYUIrCSpUju/YwRcIFcjyXoOJ4bgwRaMMVkVZXKcQQbLB32ZAvVqSk3UEEFr/V6PxfOt1BvIdEK4/K8/FEjSx2SYFVODFgiEGv7jHxEIGxnNUTOtZmVOLAynlLKocIOJj0EEMHoYlgTv6UbRPB5bCfJ/RftD/tOKNcoXWvApDWyh00TQS+BfAiT3crpqdhU+aLLKYQe1tjEDijlWuLPp9O+et4DC+PWoWpcHWSoHNZXZa7XyAaki6NKSkJnZvcu7bqH2W8FXPDXyn6IMGtrEyourin8+/bZH1+w8zVtvzpAN4bF08mtS1HXo8wJT/qSRwnujrimFRJCu962u7Op9O7M+a2ieDX6W/P6btSa1lSGm7uXD+g+g8pQ2u1PVXuY3HD9L5Nz1C3VaBJyaotKhgFPRwVO5S3RTpMakt+B/FiD9uRNDRq9fFi2SwjaPcGxGC0C4ilLyCGySuX2KFdh2lf7Nv+HVrivMxJ5SNpzFgbVI5yVcqV47ZMpKHJ+gw4aQ9qxsS13BxBOzAkDX1CztlVPrSKgLhhBcoUbWCJVKaDc8fHtUHFVzOwuT6D5xubnCAX1H2l7XbjHfjEW6ykw1RoFRYrK1n+bnwmnMGEsm4oxuJW3aqZrpA3flaXoiT14OJbNRKL6yyjhGQp/sGVI4/LNz1zm83mGWNvg89H8kW9EhaNfjTPgzDQOvQ6/HgLEXi0lbvOZmjXlPQX54VUk2A86UZdJmHUsZLE3e1Efz514tErKUHlcDCcFx9vPot34ylEg+H4AciTz1fvP3yZfeCoPF5ti87G0/GURTyelVSDRN1be3iaeEZFO6SCn4PwxD3t+eDN+T8/2N318rj1E1NKUoNd3G6AxcvP+DKCgpdFvID9nm/F37ZsGhZ/q9HypllGwNgZXdgzUX9LeWU84I6717ZhNG+btJZlzYhO/Q1oot7pIknQ+IH5s218tNJurmdziGDV/duodMo+HDjEjR6PLUhZc+XD5fMQlk93YPC9Su0GKI63UguVPxn4SYffecw+4e6Pg3mredGho6+35n4tm6b5F1D/tDg=",sidebar_class_name:"post api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},h=void 0,f={id:"API-docs/createdocumentwithbinary",title:"Create document with binary file type",description:"The Create Document API allows users to generate new documents by providing data through `multipart/form-data`. This flexible method allows for the inclusion of various data types, making it suitable for a wide range of document creation scenarios.",source:"@site/docs/API-docs/createdocumentwithbinary.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/createdocumentwithbinary",permalink:"/docs/API-docs/createdocumentwithbinary",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"createdocumentwithbinary",title:"Create document with binary file type",description:"The Create Document API allows users to generate new documents by providing data through `multipart/form-data`. This flexible method allows for the inclusion of various data types, making it suitable for a wide range of document creation scenarios.",sidebar_label:"Create document with binary file type",hide_title:!0,hide_table_of_contents:!0,api:"eJzlVktv20YQ/ivbOSUA9bDTXoiiqBsHgZEgNiAVPciCsyKH5Njk7mZ3qUcE/vdilqRM2bKRAL31Iq3m+c03s7Pag5e5g3gBlzqpK1TewTKCFF1iyXjSCmKYFyjeW5QeRW8lLm6uhCxLvXGidmid8FrkqNCylcKNSPt4YrUTxuo1paRykUovhS+srvNCfK3q0pOR1k8ybasRK7+OxbwgJ7ISt7QqUVToC532yTJthS9QkErK2pFWQmdiLS3p2nXBdwZdJCr5wPnIC1eTlxyJfaXYUIrCSpUju/YwRcIFcjyXoOJ4bgwRaMMVkVZXKcQQbLB32ZAvVqSk3UEEFr/V6PxfOt1BvIdEK4/K8/FEjSx2SYFVODFgiEGv7jHxEIGxnNUTOtZmVOLAynlLKocIOJj0EEMHoYlgTv6UbRPB5bCfJ/RftD/tOKNcoXWvApDWyh00TQS+BfAiT3crpqdhU+aLLKYQe1tjEDijlWuLPp9O+et4DC+PWoWpcHWSoHNZXZa7XyAaki6NKSkJnZvcu7bqH2W8FXPDXyn6IMGtrEyourin8+/bZH1+w8zVtvzpAN4bF08mtS1HXo8wJT/qSRwnujrimFRJCu962u7Op9O7M+a2ieDX6W/P6btSa1lSGm7uXD+g+g8pQ2u1PVXuY3HD9L5Nz1C3VaBJyaotKhgFPRwVO5S3RTpMakt+B/FiD9uRNDRq9fFi2SwjaPcGxGC0C4ilLyCGySuX2KFdh2lf7Nv+HVrivMxJ5SNpzFgbVI5yVcqV47ZMpKHJ+gw4aQ9qxsS13BxBOzAkDX1CztlVPrSKgLhhBcoUbWCJVKaDc8fHtUHFVzOwuT6D5xubnCAX1H2l7XbjHfjEW6ykw1RoFRYrK1n+bnwmnMGEsm4oxuJW3aqZrpA3flaXoiT14OJbNRKL6yyjhGQp/sGVI4/LNz1zm83mGWNvg89H8kW9EhaNfjTPgzDQOvQ6/HgLEXi0lbvOZmjXlPQX54VUk2A86UZdJmHUsZLE3e1Efz514tErKUHlcDCcFx9vPot34ylEg+H4AciTz1fvP3yZfeCoPF5ti87G0/GURTyelVSDRN1be3iaeEZFO6SCn4PwxD3t+eDN+T8/2N318rj1E1NKUoNd3G6AxcvP+DKCgpdFvID9nm/F37ZsGhZ/q9HypllGwNgZXdgzUX9LeWU84I6717ZhNG+btJZlzYhO/Q1oot7pIknQ+IH5s218tNJurmdziGDV/duodMo+HDjEjR6PLUhZc+XD5fMQlk93YPC9Su0GKI63UguVPxn4SYffecw+4e6Pg3mredGho6+35n4tm6b5F1D/tDg=",sidebar_class_name:"post api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Create document",permalink:"/docs/API-docs/createdocument"},next:{title:"Create document by template_id",permalink:"/docs/API-docs/createdocumentwithtemplateid"}},g={},x=[{value:"Request",id:"request",level:2}];function y(e){const a={code:"code",h2:"h2",p:"p",...(0,s.a)(),...e.components},{Details:i}=a;return i||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(a.p,{children:"Create document with binary file type"})}),"\n",(0,t.jsx)(n(),{method:"post",path:"/createdocumentwithbinary"}),"\n",(0,t.jsxs)(a.p,{children:["The Create Document API allows users to generate new documents by providing data through ",(0,t.jsx)(a.code,{children:"multipart/form-data"}),". This flexible method allows for the inclusion of various data types, making it suitable for a wide range of document creation scenarios."]}),"\n",(0,t.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(o.Z,{className:"openapi-tabs__mime",children:(0,t.jsx)(p.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(a.p,{children:"Body"})}),(0,t.jsx)("strong",{className:"openapi-schema__required",children:(0,t.jsx)(a.p,{children:"required"})})]}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(d.Z,{collapsible:!1,name:"file",required:!1,schemaName:"binary",qualifierMessage:void 0,schema:{type:"string",format:"binary"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"Title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"Description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"Note",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"Signers",required:!1,schemaName:"array",qualifierMessage:void 0,schema:{type:"string",format:"array"}})]})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(p.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Document created successfully!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(p.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(p.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(d.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"hji2zxcv2P"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"https://url-to-edit-document.com"}})]})]})}),(0,t.jsx)(p.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(c.Z,{responseExample:'{\n  "objectId": "hji2zxcv2P",\n  "url": "https://url-to-edit-document.com"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(p.default,{label:"405",value:"405",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Invalid API Token!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(p.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(p.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(i,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,t.jsx)(p.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(c.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function b(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}}}]);