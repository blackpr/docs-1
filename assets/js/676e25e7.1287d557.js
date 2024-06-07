"use strict";(self.webpackChunkplatformatic_oss_website=self.webpackChunkplatformatic_oss_website||[]).push([[36898],{28301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(74848),r=n(28453),i=n(11470),o=n(19365);const s={sidebar_position:1},c="Cloud Quick Start Guide",l={id:"platformatic-cloud/quick-start-guide",title:"Cloud Quick Start Guide",description:"This guide shows you how to create and deploy an application to",source:"@site/versioned_docs/version-1.41.1/platformatic-cloud/quick-start-guide.md",sourceDirName:"platformatic-cloud",slug:"/platformatic-cloud/quick-start-guide",permalink:"/docs/1.41.1/platformatic-cloud/quick-start-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/platformatic/oss/edit/main/versioned_docs/version-1.41.1/platformatic-cloud/quick-start-guide.md",tags:[],version:"1.41.1",sidebarPosition:1,frontMatter:{sidebar_position:1}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Log in to Platformatic Cloud",id:"log-in-to-platformatic-cloud",level:2},{value:"Create a Cloud app",id:"create-a-cloud-app",level:2},{value:"Create a static app workspace",id:"create-a-static-app-workspace",level:2},{value:"Create a dynamic app workspace",id:"create-a-dynamic-app-workspace",level:2},{value:"Create a GitHub repository",id:"create-a-github-repository",level:2},{value:"Add the workspace API keys as repository secrets",id:"add-the-workspace-api-keys-as-repository-secrets",level:2},{value:"Create a new Platformatic app",id:"create-a-new-platformatic-app",level:2},{value:"Deploy the app",id:"deploy-the-app",level:2},{value:"Test the deployed app",id:"test-the-deployed-app",level:2},{value:"Preview pull request changes",id:"preview-pull-request-changes",level:2},{value:"Calculate the risk of a pull request",id:"calculate-the-risk-of-a-pull-request",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"cloud-quick-start-guide",children:"Cloud Quick Start Guide"}),"\n",(0,a.jsx)(t.p,{children:"This guide shows you how to create and deploy an application to\nPlatformatic Cloud."}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsx)(t.p,{children:"To follow along with this guide you'll need to have these things installed:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://nodejs.org/",children:"Node.js"})," >= v18.8.0 or >= v20.6.0"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://docs.npmjs.com/cli/",children:"npm"})," v7 or later"]}),"\n",(0,a.jsxs)(t.li,{children:["A code editor, for example ",(0,a.jsx)(t.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["You will also need to have a ",(0,a.jsx)(t.a,{href:"https://github.com/",children:"GitHub"})," account."]}),"\n",(0,a.jsx)(t.h2,{id:"log-in-to-platformatic-cloud",children:"Log in to Platformatic Cloud"}),"\n",(0,a.jsxs)(t.p,{children:["Go to the ",(0,a.jsx)(t.a,{href:"https://platformatic.cloud/",children:"Platformatic Cloud"})," website and click on the\n",(0,a.jsx)(t.strong,{children:"Continue with GitHub"})," button. You'll be transferred to a GitHub page that\nasks you to Authorize Platformatic Cloud. To continue, click on the\n",(0,a.jsx)(t.strong,{children:"Authorize platformatic"})," button."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of Continue with GitHub button",src:n(35294).A+"",width:"482",height:"122"})}),"\n",(0,a.jsxs)(t.p,{children:["On the Platformatic Cloud Service Agreements page, check the boxes and\nclick the ",(0,a.jsx)(t.strong,{children:"Continue"})," button. You'll then be redirected to your Cloud Dashboard page."]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-cloud-app",children:"Create a Cloud app"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of an empty Apps page",src:n(64879).A+"",width:"2994",height:"686"})}),"\n",(0,a.jsxs)(t.p,{children:["Click the ",(0,a.jsx)(t.strong,{children:"Create an app now"})," button on your Cloud Dashboard page."]}),"\n",(0,a.jsxs)(t.p,{children:["Enter ",(0,a.jsx)(t.code,{children:"quick-start-app"})," as your application name. Click the ",(0,a.jsx)(t.strong,{children:"Create Application"})," button."]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-static-app-workspace",children:"Create a static app workspace"}),"\n",(0,a.jsxs)(t.p,{children:["Enter ",(0,a.jsx)(t.code,{children:"production"})," as the name for your workspace. Then click on the ",(0,a.jsx)(t.strong,{children:"Create Workspace"})," button."]}),"\n",(0,a.jsxs)(t.p,{children:["On the next page you'll see the ",(0,a.jsx)(t.strong,{children:"Workspace ID"})," and ",(0,a.jsx)(t.strong,{children:"API key"})," for your app workspace.\nCopy them and store them somewhere secure for future reference, for example in a password manager app.\nThe API key will be used to deploy your app to the workspace that you've just created."]}),"\n",(0,a.jsxs)(t.p,{children:["Click on the ",(0,a.jsx)(t.strong,{children:"Back to dashboard"})," button."]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-dynamic-app-workspace",children:"Create a dynamic app workspace"}),"\n",(0,a.jsxs)(t.p,{children:["On your Cloud Dashboard, click on your app, then click on ",(0,a.jsx)(t.strong,{children:"Create Workspace"})," in the ",(0,a.jsx)(t.strong,{children:"Workspaces"}),"\nsidebar."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of the create app workspace screen",src:n(1295).A+"",width:"1446",height:"908"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"Dynamic Workspace"})," option will be automatically enabled as you have already created a\nstatic workspace. Dynamic workspaces can be used to deploy preview applications for GitHub\npull requests."]}),"\n",(0,a.jsxs)(t.p,{children:["Enter ",(0,a.jsx)(t.code,{children:"development"})," as the name for your workspace, then click on the ",(0,a.jsx)(t.strong,{children:"Create Workspace"})," button.\nCopy the ",(0,a.jsx)(t.strong,{children:"Workspace ID"})," and ",(0,a.jsx)(t.strong,{children:"API key"})," and store them somewhere secure."]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-github-repository",children:"Create a GitHub repository"}),"\n",(0,a.jsxs)(t.p,{children:["Go to the ",(0,a.jsx)(t.a,{href:"https://github.com/new",children:"Create a new repository"})," page on GitHub.\nEnter ",(0,a.jsx)(t.code,{children:"quick-start-app"})," as the ",(0,a.jsx)(t.strong,{children:"Repository name"})," for your new repository.\nClick on the ",(0,a.jsx)(t.strong,{children:"Add a README file"})," checkbox and click the ",(0,a.jsx)(t.strong,{children:"Create repository"}),"\nbutton."]}),"\n",(0,a.jsx)(t.h2,{id:"add-the-workspace-api-keys-as-repository-secrets",children:"Add the workspace API keys as repository secrets"}),"\n",(0,a.jsxs)(t.p,{children:["Go to the ",(0,a.jsx)(t.strong,{children:"Settings"})," tab on your app's GitHub repository. Click into the\n",(0,a.jsx)(t.strong,{children:"Secrets and variables > Actions"})," section and add the following secrets:"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Name"})}),(0,a.jsx)(t.th,{children:(0,a.jsx)(t.strong,{children:"Secret"})})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"PLATFORMATIC_STATIC_WORKSPACE_ID"})}),(0,a.jsx)(t.td,{children:"Your app's static workspace ID"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"PLATFORMATIC_STATIC_WORKSPACE_API_KEY"})}),(0,a.jsx)(t.td,{children:"Your app's static workspace API key"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"PLATFORMATIC_DYNAMIC_WORKSPACE_ID"})}),(0,a.jsx)(t.td,{children:"Your app's dynamic workspace ID"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"PLATFORMATIC_DYNAMIC_WORKSPACE_API_KEY"})}),(0,a.jsx)(t.td,{children:"Your app's dynamic workspace API key"})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["Click on the ",(0,a.jsx)(t.strong,{children:"New repository secret"})," button to add a secret."]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.p,{children:["You can also use the ",(0,a.jsx)(t.a,{href:"https://cli.github.com/",children:"GitHub CLI"})," to set secrets on your GitHub repository, for example:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"gh secret set \\\n  --app actions \\\n  --env-file <FILENAME_OF_ENV_FILE_WITH_SECRETS> \\\n  --repos <YOUR_GITHUB_USERNAME>/<REPO_NAME>\n"})})]}),"\n",(0,a.jsx)(t.h2,{id:"create-a-new-platformatic-app",children:"Create a new Platformatic app"}),"\n",(0,a.jsx)(t.p,{children:"In your terminal, use Git to clone your repository from GitHub. For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:username/quick-start-app.git\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["See the GitHub documentation for help with\n",(0,a.jsx)(t.a,{href:"https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",children:"Cloning a repository"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:"Now change in to the project directory:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd quick-start-app\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now run this command to start the Platformatic creator wizard:"}),"\n",(0,a.jsxs)(i.A,{groupId:"package-manager-create",children:[(0,a.jsx)(o.A,{value:"npm",label:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm create platformatic@latest\n"})})}),(0,a.jsx)(o.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"yarn create platformatic\n"})})}),(0,a.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pnpm create platformatic@latest\n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"This interactive command-line tool will ask you some questions about how you'd\nlike to set up your new Platformatic app. For this guide, select these options:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"- Which kind of project do you want to create?     => DB\n- Where would you like to create your project?     => .\n- Do you want to create default migrations?        => yes\n- Do you want to create a plugin?                  => yes\n- Do you want to use TypeScript?                   => no\n- Do you want to overwrite the existing README.md? => yes\n- Do you want to run npm install?                  => yes (this can take a while)\n- Do you want to apply the migrations?             => yes\n- Do you want to generate types?                   => yes\n- Do you want to create the github action to deploy this application to Platformatic Cloud dynamic workspace? => yes\n- Do you want to create the github action to deploy this application to Platformatic Cloud static workspace? => yes\n"})}),"\n",(0,a.jsx)(t.p,{children:"Copy and paste your dynamic and static workspace IDs when prompted by the creator wizard."}),"\n",(0,a.jsxs)(t.p,{children:["Once the wizard is complete, you'll have a Platformatic app project in the\n",(0,a.jsx)(t.code,{children:"quick-start-app"})," directory, with example migration files and a plugin script."]}),"\n",(0,a.jsx)(t.h2,{id:"deploy-the-app",children:"Deploy the app"}),"\n",(0,a.jsx)(t.p,{children:"In your project directory, commit your application with Git:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'git add .\n\ngit commit -m "Add Platformatic app"\n'})}),"\n",(0,a.jsx)(t.p,{children:"Now push your changes up to GitHub:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git push origin main\n"})}),"\n",(0,a.jsxs)(t.p,{children:["On the GitHub repository page in your browser click on the ",(0,a.jsx)(t.strong,{children:"Actions"})," tab.\nYou should now see the Platformatic Cloud deployment workflow running."]}),"\n",(0,a.jsx)(t.h2,{id:"test-the-deployed-app",children:"Test the deployed app"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of a static app workspace that has had an app deployed to it",src:n(67936).A+"",width:"2994",height:"2288"})}),"\n",(0,a.jsxs)(t.p,{children:["Once the GitHub Actions deployment workflow has completed, go to the ",(0,a.jsx)(t.code,{children:"production"})," workspace\nfor your app in Platformatic Cloud. Click on the link for the ",(0,a.jsx)(t.strong,{children:"Entry Point"}),". You should now\nsee the Platformatic DB app home page."]}),"\n",(0,a.jsxs)(t.p,{children:["Click on the ",(0,a.jsx)(t.strong,{children:"OpenAPI Documentation"})," link to try out your app's REST API using Scalar."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of Scalar for a Platformatic DB app",src:n(15257).A+"",width:"1631",height:"946"})}),"\n",(0,a.jsx)(t.h2,{id:"preview-pull-request-changes",children:"Preview pull request changes"}),"\n",(0,a.jsx)(t.p,{children:"When a pull request is opened on your project's GitHub repository, a preview app will automatically\nbe deployed to your app's dynamic workspace."}),"\n",(0,a.jsx)(t.p,{children:"To see a preview app in action, create a new Git branch:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git checkout -b add-hello-endpoint\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Then open up your app's ",(0,a.jsx)(t.code,{children:"plugin.js"})," file in your code editor. Add the following code inside\nthe existing empty function:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"app.get('/hello', async function(request, reply) {\n  return { hello: 'from Platformatic Cloud' }\n})\n"})}),"\n",(0,a.jsx)(t.p,{children:"Save the changes, then commit and push them up to GitHub:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'git add plugin.js\n\ngit commit -m "Add hello endpoint"\n\ngit push -u origin add-hello-endpoint\n'})}),"\n",(0,a.jsx)(t.p,{children:"Now create a pull request for your changes on GitHub. At the bottom of the\npull request page you'll see that a deployment has been triggered to your\napp's dynamic workspace."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of checks on a GitHub pull request",src:n(57031).A+"",width:"1828",height:"552"})}),"\n",(0,a.jsx)(t.p,{children:"Once the deployment has completed, a comment will appear on your pull request\nwith a link to the preview app."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of a deployed preview app comment on a GitHub pull request",src:n(54307).A+"",width:"1836",height:"402"})}),"\n",(0,a.jsxs)(t.p,{children:["Click on the ",(0,a.jsx)(t.strong,{children:"Application URL"})," link. If you add ",(0,a.jsx)(t.code,{children:"/hello"})," on to the URL,\nyou should receive a response from the endpoint that you just added to\nyour application."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of a JSON response from an API endpoint",src:n(12786).A+"",width:"888",height:"96"})}),"\n",(0,a.jsx)(t.h2,{id:"calculate-the-risk-of-a-pull-request",children:"Calculate the risk of a pull request"}),"\n",(0,a.jsx)(t.p,{children:"You can use the Platformatic Cloud API to calculate the risk of a pull request\nbeing merged into your production environment. The risk score is calculated\nbased on the potential breaking changes in the application API. For example, if a\npull request adds a new endpoint, it will not be considered a breaking change\nand will not increase the risk score. However, if a pull request changes the\nopen API specification for an existing endpoint, it will be considered a\nbreaking change and will increase the risk score."}),"\n",(0,a.jsxs)(t.p,{children:["To calculate the risk score for a pull request, you can use the Platformatic Risk\nCalculation GitHub Action. If you are using the latest version of the Platformatic\napp creator, this action will already be set up for you. If not, here is an ",(0,a.jsx)(t.a,{href:"https://github.com/platformatic/onestep#deploy-app-to-the-dynamic-workspace-and-calculate-the-risk",children:"example"}),"\nof how to set it up."]}),"\n",(0,a.jsx)(t.p,{children:"When a Platformatic Deploy Action is finished, the Platformatic Risk Calculation\nAction will be triggered. The risk score will be calculated for each production\nworkspace that exists for your app. Besides the risk score, the action will also\nreturn a list of breaking changes that were detected in the pull request and show\nthe graph of services that are affected by the changes."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Screenshot of a risk calculation comment on a GitHub pull request",src:n(13971).A+"",width:"1718",height:"1638"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var i=n(74848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>I});var a=n(96540),r=n(18215),i=n(23104),o=n(56347),s=n(205),c=n(57485),l=n(31682),d=n(89466);function p(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function A(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[o,c]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,p]=A({queryString:n,groupId:r}),[m,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=l??m;return u({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{g&&c(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),p(e),x(e)}),[p,x,i]),tabValues:i}}var x=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(74848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==a&&(l(t),o(r))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>c.push(e),onKeyDown:p,onClick:d,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,f.jsx)(j,{...t,...e}),(0,f.jsx)(b,{...t,...e})]})}function I(e){const t=(0,x.default)();return(0,f.jsx)(y,{...e,children:p(e.children)},String(t))}},67936:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/app-workspace-static-deployed-76f8e3279aa037894d45647b7528261e.png"},35294:(e,t,n)=>{n.d(t,{A:()=>a});const a="data:image/png;base64,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"},64879:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/cloud-apps-empty-6b8f78009b9da6a74e8f03754b50c9c0.png"},54307:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/github-pr-deploy-comment-720f81cbacab20ce77fbd20206dafd51.png"},57031:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/github-pr-deploy-in-progress-95105f47cd34c895071ef4cca94754aa.png"},13971:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/github-pr-risk-calculation-comment-6cf2a78f5682c9dbebb7d828c9adbd44.png"},12786:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/hello-json-response-f52762d42d5844974b2a37d050c328a3.png"},15257:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/platformatic-db-scalar-3a2a0c0a40a2a80fcc3ce7d001cf5dc0.png"},1295:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/workspace-create-dynamic-47b784d30bbdcfd4eb9da2dc224bae1a.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>s});var a=n(96540);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);