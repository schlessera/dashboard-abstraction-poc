import{T as i}from"./TableWidget-BL78sYG4.js";import"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";import"./RemoteDataProvider-CYF7xnSS.js";import"./index-BofL8h0e.js";import"./Card-BNZe5Qsc.js";import"./Button-VBjU_o9A.js";const h={title:"Widgets/TableWidget",component:i,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{id:"table-1",title:"Team Members",filename:`table-data-${Math.floor(Math.random()*20)+1}.json`}},a={args:{id:"table-2",title:"Removable Table",filename:`table-data-${Math.floor(Math.random()*20)+1}.json`,onRemove:l=>console.log(`Removing table widget ${l}`)}};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    id: 'table-1',
    title: 'Team Members',
    filename: \`table-data-\${Math.floor(Math.random() * 20) + 1}.json\`
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,s,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    id: 'table-2',
    title: 'Removable Table',
    filename: \`table-data-\${Math.floor(Math.random() * 20) + 1}.json\`,
    onRemove: id => console.log(\`Removing table widget \${id}\`)
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const M=["Default","WithRemoveButton"];export{e as Default,a as WithRemoveButton,M as __namedExportsOrder,h as default};
