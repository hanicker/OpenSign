"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[339],{47955:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=t(85893),c=t(11151);const o={title:"AWS S3"},i=void 0,a={id:"self-host/cloud-storage/s3",title:"AWS S3",description:"You can create an AWS S3 bucket to store your uploaded documents using OpenSign\u2122",source:"@site/docs/self-host/cloud-storage/s3.md",sourceDirName:"self-host/cloud-storage",slug:"/self-host/cloud-storage/s3",permalink:"/docs/self-host/cloud-storage/s3",draft:!1,unlisted:!1,editUrl:"https://github.com/opensignlabs/opensign/tree/feat-docs/docs/docs/self-host/cloud-storage/s3.md",tags:[],version:"current",frontMatter:{title:"AWS S3"},sidebar:"selfhostSidebar",previous:{title:"Cloud Storage",permalink:"/docs/category/cloud-storage"},next:{title:"Guides",permalink:"/docs/category/guides"}},r={},l=[{value:"You can create an AWS S3 bucket to store your uploaded documents using OpenSign\u2122",id:"you-can-create-an-aws-s3-bucket-to-store-your-uploaded-documents-using-opensign",level:2},{value:"AWS S3 -",id:"aws-s3--",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"you-can-create-an-aws-s3-bucket-to-store-your-uploaded-documents-using-opensign",children:"You can create an AWS S3 bucket to store your uploaded documents using OpenSign\u2122"}),"\n",(0,n.jsx)(s.h3,{id:"aws-s3--",children:"AWS S3 -"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Step 1 : Create a S3 bucket","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Login to ",(0,n.jsx)(s.a,{href:"https://aws.amazon.com/console/",children:"AWS console"})]}),"\n",(0,n.jsxs)(s.li,{children:["Navigate to S3 under services.\n",(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/1a734349-1c1a-4f53-8582-7318c22911f5",alt:"Screenshot 2024-09-30 203247"})]}),"\n",(0,n.jsxs)(s.li,{children:['Hit "Create Bucket" button on upper right corner.\n',(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/b036fa3b-20c4-4348-8697-68bcf2fd9de3",alt:"Screenshot 2024-09-30 195246"})]}),"\n",(0,n.jsxs)(s.li,{children:['Now provide bucket name and don\'t change any other options scroll down and click on "Create Bucket" button.\n',(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/3fb1a591-fffd-4703-9b1f-9cb1edbdf7fe",alt:"Screenshot 2024-09-30 195603"}),"\n",(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/a0b2be8a-a273-474d-88d5-614cb42de8dd",alt:"Screenshot 2024-09-30 195835"})]}),"\n",(0,n.jsx)(s.li,{children:"Click on name of bucket from list which we have just created."}),"\n",(0,n.jsxs)(s.li,{children:["Now go to permission Tab and scroll down to botton.\n",(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/dbf44b05-370b-40f8-bfc1-fd2f8441da46",alt:"Screenshot 2024-09-30 202035"})]}),"\n",(0,n.jsxs)(s.li,{children:['At the bottom you will see cross-origin resource sharign (cors) section click on "Edit" button.\n',(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/a9fb13b3-7a30-4c49-b3ea-6a30a2b7c357",alt:"Screenshot 2024-09-30 202057"})]}),"\n",(0,n.jsxs)(s.li,{children:['Now paste below line of code and add origin url in AllowedOrigins array and click on "Save changes".',"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'[\n    {\n        "AllowedHeaders": [\n            "*"\n        ],\n        "AllowedMethods": [\n            "GET",\n            "PUT",\n            "POST"\n        ],\n        "AllowedOrigins": [\n            "https://localhost:3001"\n        ],\n        "ExposeHeaders": [\n            "x-amz-server-side-encryption",\n            "x-amz-request-id",\n            "x-amz-id-2"\n        ],\n        "MaxAgeSeconds": 3000\n    }\n]\n'})}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:'Once done go to "Properties" there you will see region of bucket e.g us-east-1'}),"\n",(0,n.jsx)(s.li,{children:'set bucktname as "DO_SPACE" in ENV.'}),"\n",(0,n.jsx)(s.li,{children:'set region as "DO_REGION" in ENV.'}),"\n",(0,n.jsxs)(s.li,{children:["Replace region in this url ",(0,n.jsx)(s.code,{children:"s3.region.amazonaws.com"}),' and set it as "DO_ENDPOINT" in ENV.']}),"\n",(0,n.jsxs)(s.li,{children:["Replace bucketName and region in this url ",(0,n.jsx)(s.code,{children:"https://bucketName.s3.region.amazonaws.com"}),' and set us as "DO_BASEURL" in ENV.']}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Step 2 : Create a aws policy","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Navigate to IAM under services\n",(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/8109d2bb-1afb-4407-b5cd-4886a070d5cc",alt:"Screenshot 2024-09-30 200247"})]}),"\n",(0,n.jsx)(s.li,{children:'Now click on "Polices" from left side "access management" menu.'}),"\n",(0,n.jsxs)(s.li,{children:['Hit "Create Policy" button on upper right corner.\n',(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/1b3b5608-9a84-477d-b46e-aaf884a73343",alt:"Screenshot 2024-09-30 200939"})]}),"\n",(0,n.jsxs)(s.li,{children:["Search for S3 and Tick PutObject and GetObject from Action Allowed list.\n",(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/7168d261-abc4-4789-8e64-628c81c79e24",alt:"Screenshot 2024-09-30 200537"}),"\n",(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/863f8e7c-74eb-4f1b-9ea5-41524ba249ca",alt:"Screenshot 2024-09-30 200607"})]}),"\n",(0,n.jsxs)(s.li,{children:["provide policy name and hit on 'Create Policy\".\n",(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/4db2ab95-14bb-4ea1-a9a3-821e20e70038",alt:"Screenshot 2024-09-30 200808"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Step 3 : Create IAM user.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:['Now click on "Users" from left side "access management" menu and then click on "Create User" button.\n',(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/1aa1f071-6291-457f-a514-970f511866cb",alt:"Screenshot 2024-09-30 201026"})]}),"\n",(0,n.jsx)(s.li,{children:"Provide username and click on Next button."}),"\n",(0,n.jsxs)(s.li,{children:['Now select "Attach policies directly" from Permissions options.\n',(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/13c6d571-d3da-4259-8f04-8ec130d9091a",alt:"Screenshot 2024-09-30 201731"})]}),"\n",(0,n.jsxs)(s.li,{children:['Now search policy in "Permission Policies" section which we have created in previous step.\n',(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/c2b1643d-e3e3-49ee-920b-641e7ff819f5",alt:"Screenshot 2024-09-30 201742"})]}),"\n",(0,n.jsx)(s.li,{children:'Now scroll down and  Click on "Create User" Button.'}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["Step 4 : Generate Credentials","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Now Click on username form list which we have created in previous step."}),"\n",(0,n.jsxs)(s.li,{children:['Click on "Create Access Key" from right corner.\n',(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/d25abe2f-0cfc-4cc0-a02c-6b9fc6559dd2",alt:"Screenshot 2024-09-30 201850"})]}),"\n",(0,n.jsxs)(s.li,{children:['In the next step select "Application running outside AWS".\n',(0,n.jsx)(s.img,{src:"https://github.com/user-attachments/assets/f9b0cdb2-3718-4ae6-a4ba-68e144d1f4a1",alt:"Screenshot 2024-09-30 201917"})]}),"\n",(0,n.jsx)(s.li,{children:'In the next step you will see "Access key" and "Secret Access key". Copy both the values.'}),"\n",(0,n.jsx)(s.li,{children:'Set the value of "Access key" to "DO_ACCESS_KEY_ID" environment variable.'}),"\n",(0,n.jsx)(s.li,{children:'Set the value of "Secret Access key" to "DO_SECRET_ACCESS_KEY" environment variable.\nVisit below link if you face any issues while following the above instructions -'}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://repost.aws/knowledge-center/create-access-key",children:"https://repost.aws/knowledge-center/create-access-key"})}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var n=t(67294);const c={},o=n.createContext(c);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);