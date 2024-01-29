"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[7894],{79523:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>f,contentTitle:()=>j,default:()=>P,frontMatter:()=>u,metadata:()=>x,toc:()=>v});var l=s(85893),t=s(11151),i=s(58219),n=(s(62316),s(51039)),r=s.n(n),d=(s(82723),s(9487)),p=s(41429),o=s(5397),c=s(4667),m=s(9472),h=s(85162);const u={id:"delete-template",title:"Delete Template",description:"The Delete Template API provides you with the ability to remove a specific template from the templates. If a template is no longer needed",sidebar_label:"Delete Template",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVttu4zYQ/RV2njaAbMlJNkX11LQxtkaDZrF2UaCOEdDSyOKGIrnkyLFh6N8L0pKt2LtBCxRFn2yNznDmnLlQOyC+cpDOYYaVkZzQwSKCHF1mhSGhFaQwK5HdoURC1qHY7ccJM1avRY6ObXXNXgSVjEpkfCmkoC0jzSxWeo2MM2cwE4XIGHX+hdVVgHcWN2STgvEjQjimNJNardAyhZhjDhFog5b7vCY5pJCHrLqkIALDLa+Q0HpOO1C8QkihO/NJ+COE52Q4lXBKdHLHdPEqK0YlpxDdeUJLZPuQ/hyLX2phMYeUbI0RONpKH82JykifDG6M1DlCWnDpPCArseKQ7oC2JiDJCrWCCAptK05HS9Ms/PnOaOXQeY/LJPE/J4XpsmyTYq7OMnSuqKXcfgcRZFoRKvKe3BgpsiBd/Nl59915Qnr5GTPyOlovNIl98L3ZK36eOm54oJvCT5vykjvzi7mCJmpLk9/S206XyeXVYJQMku9no5v0+of0/c0wSZI/IYJNJb1vW8PcF7iJgATJ43NzBgthXwFbS+PB18n1GzIqTazQtcr/Re3QWm3f1uBr8ZseA6GkUPjU9cPTdXL9dHMg9P6c0EStuRR5GNKZfkb13/Lph6d9+PNCiT0ovIdXZPv2PckKqdTHeQ9zTiWkEHdzGu96M95ABA7tutsCtZWQQklkXBrHjvhKqNWAGzPUBpUTKyX50g0zXcXciHg9Aj9+DrPaCtpOvTB77psBN2KwT+2oADfiV9xC1DHro9ptUyLP0QYVhCp0cG75PhhUU7FSQa316GwnzUrh/C70r3Od1RUqCpVjhbbsxJstucOcaRWWmH/p7VfD0WEDB9che1SPaqorZLXDopZMCvXs0kc1YPOHohCZ4JL9gUsnCBfvOuVeXl7OFLsIPh8ElfWSWTT6CF8FY5C173V4uIAICG3lHoop2rXIsK3SN0LFARy3rcyz0MpYceGr25p+PHXyrSVFhsphr/luP3y8Z1fDBKJec/yNlOP7yc/j36Zjf6pvr32JRsNkmHiT0Y4qrnqBTq7N0+rujlP5v7pl284m3FBsJBdhQoNSu3b05odLFSJI+xfsIoJSO/KQ3c734+9WNo03f6nRbiGdLyJYcyv40g/AfAe5cP5/frgov6nRu0/tnXvB/tld/VVC3fwqP7xrLmv/BBE84/bko6FZNFE3xD7jPeI2y9BQz/dsr/o9clhed+P78WwMTfMXkHRBTQ==",sidebar_class_name:"delete api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},j=void 0,x={id:"API-docs/delete-template",title:"Delete Template",description:"The Delete Template API provides you with the ability to remove a specific template from the templates. If a template is no longer needed",source:"@site/docs/API-docs/delete-template.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/delete-template",permalink:"/docs/API-docs/delete-template",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-template",title:"Delete Template",description:"The Delete Template API provides you with the ability to remove a specific template from the templates. If a template is no longer needed",sidebar_label:"Delete Template",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVttu4zYQ/RV2njaAbMlJNkX11LQxtkaDZrF2UaCOEdDSyOKGIrnkyLFh6N8L0pKt2LtBCxRFn2yNznDmnLlQOyC+cpDOYYaVkZzQwSKCHF1mhSGhFaQwK5HdoURC1qHY7ccJM1avRY6ObXXNXgSVjEpkfCmkoC0jzSxWeo2MM2cwE4XIGHX+hdVVgHcWN2STgvEjQjimNJNardAyhZhjDhFog5b7vCY5pJCHrLqkIALDLa+Q0HpOO1C8QkihO/NJ+COE52Q4lXBKdHLHdPEqK0YlpxDdeUJLZPuQ/hyLX2phMYeUbI0RONpKH82JykifDG6M1DlCWnDpPCArseKQ7oC2JiDJCrWCCAptK05HS9Ms/PnOaOXQeY/LJPE/J4XpsmyTYq7OMnSuqKXcfgcRZFoRKvKe3BgpsiBd/Nl59915Qnr5GTPyOlovNIl98L3ZK36eOm54oJvCT5vykjvzi7mCJmpLk9/S206XyeXVYJQMku9no5v0+of0/c0wSZI/IYJNJb1vW8PcF7iJgATJ43NzBgthXwFbS+PB18n1GzIqTazQtcr/Re3QWm3f1uBr8ZseA6GkUPjU9cPTdXL9dHMg9P6c0EStuRR5GNKZfkb13/Lph6d9+PNCiT0ovIdXZPv2PckKqdTHeQ9zTiWkEHdzGu96M95ABA7tutsCtZWQQklkXBrHjvhKqNWAGzPUBpUTKyX50g0zXcXciHg9Aj9+DrPaCtpOvTB77psBN2KwT+2oADfiV9xC1DHro9ptUyLP0QYVhCp0cG75PhhUU7FSQa316GwnzUrh/C70r3Od1RUqCpVjhbbsxJstucOcaRWWmH/p7VfD0WEDB9che1SPaqorZLXDopZMCvXs0kc1YPOHohCZ4JL9gUsnCBfvOuVeXl7OFLsIPh8ElfWSWTT6CF8FY5C173V4uIAICG3lHoop2rXIsK3SN0LFARy3rcyz0MpYceGr25p+PHXyrSVFhsphr/luP3y8Z1fDBKJec/yNlOP7yc/j36Zjf6pvr32JRsNkmHiT0Y4qrnqBTq7N0+rujlP5v7pl284m3FBsJBdhQoNSu3b05odLFSJI+xfsIoJSO/KQ3c734+9WNo03f6nRbiGdLyJYcyv40g/AfAe5cP5/frgov6nRu0/tnXvB/tld/VVC3fwqP7xrLmv/BBE84/bko6FZNFE3xD7jPeI2y9BQz/dsr/o9clhed+P78WwMTfMXkHRBTQ==",sidebar_class_name:"delete api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Update Template",permalink:"/docs/API-docs/update-template"},next:{title:"Get Template list",permalink:"/docs/API-docs/gettemplatelist"}},f={},v=[{value:"Request",id:"request",level:2}];function y(e){const a={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"openapi__heading",children:(0,l.jsx)(a.p,{children:"Delete Template"})}),"\n",(0,l.jsx)(r(),{method:"delete",path:"/template/{template_id}"}),"\n",(0,l.jsx)(a.p,{children:"The Delete Template API provides you with the ability to remove a specific template from the templates. If a template is no longer needed"}),"\n",(0,l.jsx)(a.h2,{id:"request",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p.Z,{className:"paramsItem",param:{name:"template_id",in:"path",description:"ID of the template that needs to be deleted",required:!0,style:"simple",explode:!1,schema:{type:"string",format:"string"}}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(i.Z,{children:[(0,l.jsxs)(h.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Template deleted successfully!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(c.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Bxh2aspHp3"}}),(0,l.jsx)(c.Z,{collapsible:!1,name:"deletedAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}})]})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(o.Z,{responseExample:'{\n  "objectId": "Bxh2aspHp3",\n  "deletedAt": "2023-10-07T16:49:56.000Z"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(h.default,{label:"404",value:"404",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Template not found!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Template not found!"}})})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(o.Z,{responseExample:'{\n  "error": "Template not found!"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(h.default,{label:"405",value:"405",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Invalid API Token!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(o.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function P(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(y,{...e})}):y(e)}}}]);