"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[2125],{52369:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(85893),o=t(11151);const r={title:"How to upgrade self-hosted OpenSign to v2.1.0?"},i="Steps to upgrade any previous self-hosted OpenSign to v2.1.0",a={id:"self-host/guides/upgrade-to-v2.1.0",title:"How to upgrade self-hosted OpenSign to v2.1.0?",description:"For self-hosted deployments, version 2.1.0 introduces changes to the signup process:",source:"@site/docs/self-host/guides/upgrade-to-v2.1.0.md",sourceDirName:"self-host/guides",slug:"/self-host/guides/upgrade-to-v2.1.0",permalink:"/docs/self-host/guides/upgrade-to-v2.1.0",draft:!1,unlisted:!1,editUrl:"https://github.com/opensignlabs/opensign/tree/feat-docs/docs/docs/self-host/guides/upgrade-to-v2.1.0.md",tags:[],version:"current",frontMatter:{title:"How to upgrade self-hosted OpenSign to v2.1.0?"},sidebar:"selfhostSidebar",previous:{title:"How to generate self-signed document signing certificate?",permalink:"/docs/self-host/guides/how-to-generate-self-signed-document-signing-certificate"},next:{title:"Digital Ocean",permalink:"/docs/self-host/One-click-Install/DigitalOcean"}},d={},l=[];function c(e){const s={h1:"h1",p:"p",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"steps-to-upgrade-any-previous-self-hosted-opensign-to-v210",children:"Steps to upgrade any previous self-hosted OpenSign to v2.1.0"}),"\n",(0,n.jsx)(s.p,{children:"For self-hosted deployments, version 2.1.0 introduces changes to the signup process:"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"New Deployment:"})," The signup button has been removed. During a fresh deployment, an admin creation wizard will guide you through creating an Admin user."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Migration from Previous Versions:"})," For those upgrading from any previous version to 2.1.0, follow these steps to promote an existing user to Admin:"]}),"\n",(0,n.jsx)(s.p,{children:'After upgrading, visit "https://public_url/upgrade-2.1" and enter the requested details to change the role of an existing user to Admin.\nEnsure you have your master key (set in the environment variable during installation) and the email ID of the user to be promoted ready.'}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"User Roles and Capabilities"}),"\nIn the self-hosted version, Admins have comprehensive control:"]}),"\n",(0,n.jsx)(s.p,{children:"Admin: Admins can manage users and share templates with the entire organization. Only Admins can create users, with roles being assigned as OrgAdmin, Editor, or User.\nOrgAdmin: OrgAdmins have the same access as Admins. Essentially they are new admins that can be created as and when needed.\nEditor: Editors can share templates with all users but cannot create users.\nUser: Users cannot share templates or create users. They can only create emplates for themselves.\nAll other features remain accessible to all roles."})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var n=t(67294);const o={},r=n.createContext(o);function i(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);