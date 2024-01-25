"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[1520],{9104:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>x,metadata:()=>j,toc:()=>f});var l=a(85893),t=a(11151),i=a(58219),n=(a(62316),a(51039)),r=a.n(n),m=(a(82723),a(9487)),o=a(41429),c=a(5397),d=a(4667),p=a(9472),h=a(85162);const x={id:"gettemplatelist",title:"Get Template list",description:"The Get Template List API allows you to retrieve a list of available templates. This functionality provides an overview of all templates, enabling users to choose from existing templates when creating documents.",sidebar_label:"Get Template list",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVl1PKzcQ/SvuPPVKS7KBe6m6T0UVpagIkEhVqRAhZ3c2GfDavrY3H4r2v1+Ns5ssREBVXfWhT5DxOfPlObPeQJAzD9k9jLGySgb0MEmgQJ87soGMhgzGcxQXGEQHEVfkgzi7vRRSKbP0Ym1qEYxwGBzhAoUUihGmFHIhScmpQhE6/wMxnpMXZa1z9i8VhbWwziyoQC+kFmaBbkG4jHyl9sxEoJZTRXomao/Oc8x8boxHUTpTCVyRD3y6Y4jlHLXIHcpoL0xeV6iDH0ACxqKTnMFlARnMMHQszh0SsNLJCgM6bs8GtKwQMlBUEZ8SN+ZrjW4NCTj8WpPDArJSKo8J+LBWjC6NqyABXFllCoQsuJpP8zlWErINVHJFVV1B9iVNEwhryyRdV1N00DBPVpYdjdIm2aXgn8l+twzejpk2E/brrdEePWOP05T/vBwOX+c5el/WSuw6CgnkRgfUgfHSWkV5PBg+eSZtDhMw0yfMY9sduwm0DenQ1yr0cNI5yQVTwMp/zN+a+YZ3SB8c6RkksTUy9C272mE1+n2qK398O+OejCmw9dDFnuDjP7vJY9a1CR+QOrTQZkv5zagC3fukMmJEHAam0EepzUOwPhsOu2isnUFuKmbfLPVH8XZJRhmZfeQ7mumojn97Oddxnt+L/WQQmiaBsL2AXS6PXWw+jHlhcRbe93WcHp8cjdKj9Kfx6DT7/HP25XSQpunfkMCqUsxt9VW099cF7X7XtvgP4jSvYf2Ret0HaPrdIa1I42On2cfjNH08ZUiTwOf0y6F2L/VCKiriKh+bZ9Q/fD/lonPmg8nqhw/b8Ifl0xYUz+FFsX37tsgKw9y02zxu8DCHDIavFrtHt+i2eu1UTyE+yBnp2ZG0dmAsak8zreTUs1qG0tJwMQLeih7z2lFY33EvtuWujqSlo202PUFY+gNZEW0xfVS7wecoWfKcPunSRHJb4o1FzYMeG7QYweF3mbwgH4+7T1u8LFEaJ16xxVR6LITRIswxHrL9ZDAS3mJOZXvPA/GgH/SdqZC/sbzVFelnnz3oI3F/U5aUk1TiL5x6Cjj5sevccrk86NinyLmgMK+nwqE1e/gsGmNb+6zdj0+QQEBX+Zvyjh8DebfH3gg1jOBhO70yj9OLlSS+3db0y2sST5OiHLXH3rydXdxeiZNBCklvOP5BysOry1/Pr+/O2SuP1/aKRoN0kLLJGh8qqXuBXryo2tF8cb+bvRT/p0+wViUBV2FolaQo8Nj1TSvee3gh3kkCc+MD2zcbHug/nWoaNm8fQizpgjxXu38KPeO693BbSFVzUOAX1RvY9oW1h074hyPGQnY/aZJOthxwyznLc7T9AAfLk73sNtTF+Ria5hua1/JN",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},u=void 0,j={id:"API-docs/gettemplatelist",title:"Get Template list",description:"The Get Template List API allows you to retrieve a list of available templates. This functionality provides an overview of all templates, enabling users to choose from existing templates when creating documents.",source:"@site/docs/API-docs/gettemplatelist.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/gettemplatelist",permalink:"/docs/API-docs/gettemplatelist",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"gettemplatelist",title:"Get Template list",description:"The Get Template List API allows you to retrieve a list of available templates. This functionality provides an overview of all templates, enabling users to choose from existing templates when creating documents.",sidebar_label:"Get Template list",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVl1PKzcQ/SvuPPVKS7KBe6m6T0UVpagIkEhVqRAhZ3c2GfDavrY3H4r2v1+Ns5ssREBVXfWhT5DxOfPlObPeQJAzD9k9jLGySgb0MEmgQJ87soGMhgzGcxQXGEQHEVfkgzi7vRRSKbP0Ym1qEYxwGBzhAoUUihGmFHIhScmpQhE6/wMxnpMXZa1z9i8VhbWwziyoQC+kFmaBbkG4jHyl9sxEoJZTRXomao/Oc8x8boxHUTpTCVyRD3y6Y4jlHLXIHcpoL0xeV6iDH0ACxqKTnMFlARnMMHQszh0SsNLJCgM6bs8GtKwQMlBUEZ8SN+ZrjW4NCTj8WpPDArJSKo8J+LBWjC6NqyABXFllCoQsuJpP8zlWErINVHJFVV1B9iVNEwhryyRdV1N00DBPVpYdjdIm2aXgn8l+twzejpk2E/brrdEePWOP05T/vBwOX+c5el/WSuw6CgnkRgfUgfHSWkV5PBg+eSZtDhMw0yfMY9sduwm0DenQ1yr0cNI5yQVTwMp/zN+a+YZ3SB8c6RkksTUy9C272mE1+n2qK398O+OejCmw9dDFnuDjP7vJY9a1CR+QOrTQZkv5zagC3fukMmJEHAam0EepzUOwPhsOu2isnUFuKmbfLPVH8XZJRhmZfeQ7mumojn97Oddxnt+L/WQQmiaBsL2AXS6PXWw+jHlhcRbe93WcHp8cjdKj9Kfx6DT7/HP25XSQpunfkMCqUsxt9VW099cF7X7XtvgP4jSvYf2Ret0HaPrdIa1I42On2cfjNH08ZUiTwOf0y6F2L/VCKiriKh+bZ9Q/fD/lonPmg8nqhw/b8Ifl0xYUz+FFsX37tsgKw9y02zxu8DCHDIavFrtHt+i2eu1UTyE+yBnp2ZG0dmAsak8zreTUs1qG0tJwMQLeih7z2lFY33EvtuWujqSlo202PUFY+gNZEW0xfVS7wecoWfKcPunSRHJb4o1FzYMeG7QYweF3mbwgH4+7T1u8LFEaJ16xxVR6LITRIswxHrL9ZDAS3mJOZXvPA/GgH/SdqZC/sbzVFelnnz3oI3F/U5aUk1TiL5x6Cjj5sevccrk86NinyLmgMK+nwqE1e/gsGmNb+6zdj0+QQEBX+Zvyjh8DebfH3gg1jOBhO70yj9OLlSS+3db0y2sST5OiHLXH3rydXdxeiZNBCklvOP5BysOry1/Pr+/O2SuP1/aKRoN0kLLJGh8qqXuBXryo2tF8cb+bvRT/p0+wViUBV2FolaQo8Nj1TSvee3gh3kkCc+MD2zcbHug/nWoaNm8fQizpgjxXu38KPeO693BbSFVzUOAX1RvY9oW1h074hyPGQnY/aZJOthxwyznLc7T9AAfLk73sNtTF+Ria5hua1/JN",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Delete Template from ID",permalink:"/docs/API-docs/delete-template"},next:{title:"Get Webhook",permalink:"/docs/API-docs/get-webhook"}},g={},f=[{value:"Request",id:"request",level:2}];function y(e){const s={h2:"h2",p:"p",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"openapi__heading",children:(0,l.jsx)(s.p,{children:"Get Template list"})}),"\n",(0,l.jsx)(r(),{method:"get",path:"/templatelist"}),"\n",(0,l.jsx)(s.p,{children:"The Get Template List API allows you to retrieve a list of available templates. This functionality provides an overview of all templates, enabling users to choose from existing templates when creating documents."}),"\n",(0,l.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Query Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)(o.Z,{className:"paramsItem",param:{name:"limit",in:"query",required:!1,style:"form",explode:!0,schema:{maximum:500,type:"number"},example:10}}),(0,l.jsx)(o.Z,{className:"paramsItem",param:{name:"skip",in:"query",required:!1,style:"form",explode:!0,schema:{type:"number"},example:0}})]})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(i.Z,{children:[(0,l.jsxs)(h.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"successful operation"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(d.Z,{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"result"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"template[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(d.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",format:"string",example:"x1Hbnms2Pg"}}),(0,l.jsx)(d.Z,{collapsible:!1,name:"Title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"sample template"}}),(0,l.jsx)(d.Z,{collapsible:!1,name:"Note",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"template note"}}),(0,l.jsx)(d.Z,{collapsible:!1,name:"Folder",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"folder name"}}),(0,l.jsx)(d.Z,{collapsible:!1,name:"File",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"https://templateuser.com"}}),(0,l.jsx)(d.Z,{collapsible:!1,name:"Owner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"template creator name"}}),(0,l.jsx)(d.Z,{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"Signers"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(d.Z,{collapsible:!1,name:"Name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"joe"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})}),(0,l.jsx)(d.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}}),(0,l.jsx)(d.Z,{collapsible:!1,name:"updatedAt",required:!1,schemaName:"date",qualifierMessage:void 0,schema:{type:"string",example:"2023-10-07T16:49:56.000Z",xml:{name:"date"},title:"date"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(c.Z,{responseExample:'{\n  "result": [\n    {\n      "objectId": "x1Hbnms2Pg",\n      "Title": "sample template",\n      "Note": "template note",\n      "Folder": "folder name",\n      "File": "https://templateuser.com",\n      "Owner": "template creator name",\n      "Signers": [\n        {\n          "Name": "joe"\n        }\n      ],\n      "createdAt": "2023-10-07T16:49:56.000Z",\n      "updatedAt": "2023-10-07T16:49:56.000Z"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(h.default,{label:"405",value:"405",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Invalid API Token!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(h.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(p.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(h.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,l.jsx)(h.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(c.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function v(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(y,{...e})}):y(e)}}}]);