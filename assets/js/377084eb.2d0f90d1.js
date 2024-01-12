"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[8106],{56181:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>j,contentTitle:()=>u,default:()=>v,frontMatter:()=>x,metadata:()=>g,toc:()=>f});var t=s(85893),l=s(11151),i=s(58219),n=(s(62316),s(51039)),m=s.n(n),r=(s(82723),s(9487)),d=s(41429),p=s(5397),c=s(4667),o=s(9472),h=s(85162);const x={id:"get-template",title:"Get template by ID",description:"",sidebar_label:"Get template by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJytVt9P4zgQ/le887KLZJpyu/eSp0UHQtUhQAure4Dq5CaTxpDYXntSWlX530/jJm1oYW853VOS8fz2fN9kDaTmAdJ7IKxdpQgDTCXkGDKvHWlrIAWQYB16xZ+THFKYI9116iDBKa9qJPTsZw1G1QgpLI+V08dkn9CABM1+SlQ5epDg8UejPeaQkm9QQqBVxTZB165il7h0lc0R0kJVgRWyEmsF6Rpo5aImeW3m0LKqikYp52iCnpvRcrlcQiu3qfSl/a3zPhWnqIT9Oidnwhai1xZUKhIGMQ+CrJihKJCyEvP/swAJhfW1oo2EK2qn7D44awIGNvhtPObHy1RDk2UYQtFUYns1ICGzhtAQ6yvnKp3Fg+QxsNH6MAs7e8SM+A49uyG9CXkV+/bzXDeSXfdDfNl2j6/mytK73dxUqAIKjwuNz0KZXPCVCip1ELnNmprLayWcDdvxvhDbCx62tJXw/dvle12VRC6kSbKyjde1muMoszX74qQjILb+lPdqNTS+h0eLX+e10lW0kvBoSzMQTCUs64pddHPcO5Xw7JVz/fi1EjRhHV5LfpcqB+u+unCvO28lkKbqhajlLlQ5ekb/+zq0fAwzdXKhljfRzcuYmUdFOByZPvT+ScvGX8ZfDpHQE5EwlkRhG5N/gKj7+6HuxCxUpXNxejMRd8xMHz7GrGqk0nbEFgmNSkgh6cMn6wGDtCAhoF/0dNf4ajAIyrlRz0OVmgVudaKcThYnwMgOmDVe0+qWkbgB25AoB+Pi9J/I8/KvdMoFaFPYaNy179qhuWXccKWLkwOmu2M46RCPe1RFqhCF9WLPWsxUwFxYRiHGQ5Z/Hp2I4DDTRccyI/FgHsytrVE0AZmZKm2eQvpgjsX9dVHoTKtK/IWzoAmnn/qOPT8/H3TsKNpcaCqbmfDo7E59HoWxrUOr7ccRSCD0dbgubtEvdNbD9I1QSVROOu5UWeROZAzyFG5EX/eNeMAqnaEJOJjm04ubS/F5NAY5GIpfSDm5nPxxfnV7zl55rDZXdDIaj8YscjZQrcwg0AXSbkvNVmJytn/B690m4O3dzRThkhJXKR3pLua47oZ9t/9BQjpcmFMJpQ3EKus1T8J3X7Uti3806FeQ3k8lLJTXahZZbQ25Dvyeb5ffm6l9+tbt0SPx67v31WJ61BiGzEJVDW4qf8LV3g9AO21lD53/nO1baWzCvcTqNhv+I9konGYZOhqcHSxr5ootK12c30Hb/gOJmFAN",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},u=void 0,g={id:"API-docs/get-template",title:"Get template by ID",description:"",source:"@site/docs/API-docs/get-template.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/get-template",permalink:"/docs/API-docs/get-template",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-template",title:"Get template by ID",description:"",sidebar_label:"Get template by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJytVt9P4zgQ/le887KLZJpyu/eSp0UHQtUhQAure4Dq5CaTxpDYXntSWlX530/jJm1oYW853VOS8fz2fN9kDaTmAdJ7IKxdpQgDTCXkGDKvHWlrIAWQYB16xZ+THFKYI9116iDBKa9qJPTsZw1G1QgpLI+V08dkn9CABM1+SlQ5epDg8UejPeaQkm9QQqBVxTZB165il7h0lc0R0kJVgRWyEmsF6Rpo5aImeW3m0LKqikYp52iCnpvRcrlcQiu3qfSl/a3zPhWnqIT9Oidnwhai1xZUKhIGMQ+CrJihKJCyEvP/swAJhfW1oo2EK2qn7D44awIGNvhtPObHy1RDk2UYQtFUYns1ICGzhtAQ6yvnKp3Fg+QxsNH6MAs7e8SM+A49uyG9CXkV+/bzXDeSXfdDfNl2j6/mytK73dxUqAIKjwuNz0KZXPCVCip1ELnNmprLayWcDdvxvhDbCx62tJXw/dvle12VRC6kSbKyjde1muMoszX74qQjILb+lPdqNTS+h0eLX+e10lW0kvBoSzMQTCUs64pddHPcO5Xw7JVz/fi1EjRhHV5LfpcqB+u+unCvO28lkKbqhajlLlQ5ekb/+zq0fAwzdXKhljfRzcuYmUdFOByZPvT+ScvGX8ZfDpHQE5EwlkRhG5N/gKj7+6HuxCxUpXNxejMRd8xMHz7GrGqk0nbEFgmNSkgh6cMn6wGDtCAhoF/0dNf4ajAIyrlRz0OVmgVudaKcThYnwMgOmDVe0+qWkbgB25AoB+Pi9J/I8/KvdMoFaFPYaNy179qhuWXccKWLkwOmu2M46RCPe1RFqhCF9WLPWsxUwFxYRiHGQ5Z/Hp2I4DDTRccyI/FgHsytrVE0AZmZKm2eQvpgjsX9dVHoTKtK/IWzoAmnn/qOPT8/H3TsKNpcaCqbmfDo7E59HoWxrUOr7ccRSCD0dbgubtEvdNbD9I1QSVROOu5UWeROZAzyFG5EX/eNeMAqnaEJOJjm04ubS/F5NAY5GIpfSDm5nPxxfnV7zl55rDZXdDIaj8YscjZQrcwg0AXSbkvNVmJytn/B690m4O3dzRThkhJXKR3pLua47oZ9t/9BQjpcmFMJpQ3EKus1T8J3X7Uti3806FeQ3k8lLJTXahZZbQ25Dvyeb5ffm6l9+tbt0SPx67v31WJ61BiGzEJVDW4qf8LV3g9AO21lD53/nO1baWzCvcTqNhv+I9konGYZOhqcHSxr5ootK12c30Hb/gOJmFAN",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Create template",permalink:"/docs/API-docs/createtemplate"},next:{title:"Update template by ID",permalink:"/docs/API-docs/update-template"}},j={},f=[{value:"Request",id:"request",level:2}];function b(e){const a={h2:"h2",p:"p",...(0,l.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(a.p,{children:"Get template by ID"})}),"\n",(0,t.jsx)(m(),{method:"get",path:"/template/{template_id}"}),"\n",(0,t.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(d.Z,{className:"paramsItem",param:{name:"template_id",in:"path",description:"ID of template that needs to be fetched",required:!0,style:"simple",explode:!1,schema:{type:"string",format:"strng"}}})})})]}),"\n",(0,t.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(a.p,{children:"Header Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(d.Z,{className:"paramsItem",param:{name:"x-api-token",in:"header",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"opensign.xxxx"}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(h.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"successful operation"})}),(0,t.jsx)("div",{children:(0,t.jsx)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(o.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(a.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(c.Z,{collapsible:!1,name:"Name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"sample template"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Note",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"Please review and sign this document"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"Description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"template description"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"URL",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"https://yourimage.com"}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"signers",required:!1,schemaName:"signers[]",qualifierMessage:void 0,schema:{type:"array",example:["joe@gmail.com","john@gmail.com"],xml:{name:"signers",wrapped:!0},items:{type:"string",example:"joe@example.com",xml:{name:"signers"},title:"signers"}}}),(0,t.jsx)(c.Z,{collapsible:!1,name:"folderId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"xjsba1GaxP"}})]})]})}),(0,t.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p.Z,{responseExample:'{\n  "Name": "sample template",\n  "Note": "Please review and sign this document",\n  "Description": "template description",\n  "URL": "https://yourimage.com",\n  "signers": [\n    "joe@gmail.com",\n    "john@gmail.com"\n  ],\n  "folderId": "xjsba1GaxP"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(h.default,{label:"404",value:"404",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Template not found!"})}),(0,t.jsx)("div",{})]}),(0,t.jsxs)(h.default,{label:"405",value:"405",children:[(0,t.jsx)("div",{children:(0,t.jsx)(a.p,{children:"Invalid API Token!'"})}),(0,t.jsx)("div",{})]})]})})})]})}function v(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}}}]);