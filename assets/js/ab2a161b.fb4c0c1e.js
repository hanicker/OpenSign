"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[835],{29731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var s=n(85893),o=n(11151);const i={title:"How to generate self-signed document signing certificate?"},c="Steps to generate self-signed document singing certificate for testing OpenSign",r={id:"self-host/guides/how-to-generate-self-signed-document-signing-certificate",title:"How to generate self-signed document signing certificate?",description:"",source:"@site/docs/self-host/guides/how-to-generate-self-signed-document-signing-certificate.md",sourceDirName:"self-host/guides",slug:"/self-host/guides/how-to-generate-self-signed-document-signing-certificate",permalink:"/docs/self-host/guides/how-to-generate-self-signed-document-signing-certificate",draft:!1,unlisted:!1,editUrl:"https://github.com/opensignlabs/opensign/tree/feat-docs/docs/docs/self-host/guides/how-to-generate-self-signed-document-signing-certificate.md",tags:[],version:"current",frontMatter:{title:"How to generate self-signed document signing certificate?"},sidebar:"selfhostSidebar",previous:{title:"ENV variables which are used to setup OpenSign\u2122 with Docker on Localhost",permalink:"/docs/self-host/guides/env-variables"},next:{title:"How to upgrade self-hosted OpenSign to v2.1.0?",permalink:"/docs/self-host/guides/upgrade-to-v2.1.0"}},d={},a=[];function g(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"steps-to-generate-self-signed-document-singing-certificate-for-testing-opensign",children:"Steps to generate self-signed document singing certificate for testing OpenSign"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"# execute below command and use passphrase 'opensign'\nopenssl genrsa -des3 -out ./local_dev.key 2048\nopenssl req -key ./local_dev.key -new -x509 -days 365 -out ./local_dev.crt\nopenssl pkcs12 -inkey ./local_dev.key -in ./local_dev.crt -export -out ./local_dev.pfx\nopenssl base64 -in ./local_dev.pfx -out ./base64_pfx\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(g,{...e})}):g(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>c});var s=n(67294);const o={},i=s.createContext(o);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);