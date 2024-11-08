"use strict";(self.webpackChunkazalea=self.webpackChunkazalea||[]).push([[6144],{1622:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(6540),i=n(4164),s=n(3427),a=n(2303),l=n(1422);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var o=n(4848);function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function m(e){let{summary:t,children:n,...m}=e;(0,s.A)().collectAnchor(m.id);const u=(0,a.A)(),h=(0,r.useRef)(null),{collapsed:f,setCollapsed:g}=(0,l.u)({initialState:!m.open}),[x,b]=(0,r.useState)(m.open),w=r.isValidElement(t)?t:(0,o.jsx)("summary",{children:t??"Details"});return(0,o.jsxs)("details",{...m,ref:h,open:x,"data-collapsed":f,className:(0,i.A)(c.details,u&&c.isBrowser,m.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&p(t,h.current)&&(e.preventDefault(),f?(g(!1),b(!0)):g(!0))},children:[w,(0,o.jsx)(l.N,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),b(!e)},children:(0,o.jsx)("div",{className:c.collapsibleContent,children:n})})]})}const u={details:"details_b_Ee"},h="alert alert--info";function f(e){let{...t}=e;return(0,o.jsx)(m,{...t,className:(0,i.A)(h,u.details,t.className)})}},2550:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var r=n(4164),i=n(1754),s=n(5965),a=n(4848);function l(e){let{className:t}=e;const n=(0,i.$S)();return(0,a.jsx)(c,{items:n.items,className:t})}function c(e){const{items:t,className:n}=e;if(!t)return(0,a.jsx)(l,{...e});const c=(0,i.d1)(t);return(0,a.jsx)("section",{className:(0,r.A)("row",n),children:c.map(((e,t)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(s.A,{item:e})},t)))})}},5965:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var r=n(4164),i=n(8774),s=n(1754),a=n(5846),l=n(6654),c=n(1312),o=n(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var p=n(4848);function m(e){let{href:t,children:n}=e;return(0,p.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function u(e){let{href:t,icon:n,title:i,description:s}=e;return(0,p.jsxs)(m,{href:t,children:[(0,p.jsxs)(o.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,p.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,p.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,p.jsx)(u,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,p.jsx)(f,{item:t});case"category":return(0,p.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},5846:(e,t,n)=>{n.d(t,{W:()=>o});var r=n(6540),i=n(4586);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function o(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},1679:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});n(6540);var r=n(781),i=(n(1622),n(2550),n(5965),n(1122),n(4848));function s(){let e=[{banner:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/142781fe-9277-41c2-9e3f-ec0b253bd5d4/dg9ro0m-fb8954ef-108b-4636-bf9c-af1d493204c4.png/v1/fill/w_1200,h_666,q_70,strp/_free__furry_wallpaper__almost__6k__12__ai__by_notsuspiciouscat_dg9ro0m-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzEwIiwicGF0aCI6IlwvZlwvMTQyNzgxZmUtOTI3Ny00MWMyLTllM2YtZWMwYjI1M2JkNWQ0XC9kZzlybzBtLWZiODk1NGVmLTEwOGItNDYzNi1iZjljLWFmMWQ0OTMyMDRjNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7NpZGk-F-H0bBCDCKHQutBBzro39H6YTMcPRcpQtCzY",img:"https://cdn.discordapp.com/icons/1137801967016620114/32525e687cc49afec6b989099168a491.webp?size=96",owner:"Voltrex",a:!0,name:"Dark Network",tag:"PUBLIC",description:"We have a toxic community :3",link:"https://discord.gg/nbEawQ7crx"},{banner:"https://media.discordapp.net/attachments/1123842919904845886/1198497402085199912/IMG_0881.png?ex=662ddcaf&is=661b67af&hm=f4fe1813ffc4ae4ec9f991bd054bcee58021f66e5a81eb2b260cae92064702a4&=&format=webp&quality=lossless&width=550&height=254",img:"https://cdn.discordapp.com/icons/1123842919254732910/888c8ba93a1b7cddefc24ca60d9d9314.webp",owner:"elaina_kawaii",name:"Re:Birth SMP",tag:"CLOSED",description:"Best realm fr",link:"https://discord.gg/gDqdRmUuzG"}];return(0,i.jsxs)(r.A,{children:[(0,i.jsx)("div",{className:"banner",style:{width:"100%",height:"200px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("h1",{children:"Azalea Featured Servers"})}),(0,i.jsx)("div",{style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"fit-content",flexDirection:"column",gap:"10px"},children:e.map((e=>(0,i.jsx)("div",{className:"center",style:{width:"100%",height:"fit-content",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("div",{className:"card",style:{background:`url(${e.banner})`,backgroundSize:"cover",backgroundPosition:"center",width:"800px",display:"flex",flexDirection:"row",gap:"20px"},children:(0,i.jsxs)("div",{style:{border:"1px solid var(--ifm-color-emphasis-200)",background:"linear-gradient(45deg, var(--ifm-card-background-color), transparent)",backgroundSize:"cover",backgroundPosition:"center",backdropFilter:"blur(3.5px)",padding:"10px",width:"100%",height:"100%",display:"flex",flexDirection:"row",gap:"20px"},children:[(0,i.jsx)("div",{className:"icon",children:(0,i.jsx)("img",{src:e.img,style:{width:"85px",borderRadius:"85px"}})}),(0,i.jsxs)("div",{className:"info",children:[(0,i.jsxs)("div",{className:"name",style:{display:"flex",gap:"10px",alignItems:"center",height:"fit-content"},children:[(0,i.jsx)("h1",{style:{margin:"0",padding:"0"},children:e.name}),(0,i.jsx)("span",{className:"tag-a",style:{background:"rgba(0,0,0,35%)",color:"#fff",backdropFilter:"blur(10px)",padding:".12em .5em",borderRadius:"6px"},children:e.tag})]}),(0,i.jsx)("p",{children:e.description}),(0,i.jsxs)("a",{style:{display:"flex",gap:"10px"},href:e.link,children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{fill:"currentcolor",width:"16px"},children:(0,i.jsx)("path",{d:"M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"})})," Visit"]})]})]})})})))}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})}}}]);