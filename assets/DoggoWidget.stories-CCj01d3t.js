import{D as l}from"./DoggoWidget-CzvKFSHT.js";import"./jsx-runtime-z8MfsBtr.js";import"./index-C9rmetsa.js";import"./index-BofL8h0e.js";import"./RemoteDataProvider-B66CIwLN.js";import"./Card-BNZe5Qsc.js";import"./Button-VBjU_o9A.js";const W={title:"Widgets/DoggoWidget",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"number"},height:{control:"number"}}},o={args:{id:"doggo-1",title:"Random Doggo",width:300,height:200}},e={args:{id:"doggo-2",title:"Big Doggo",width:500,height:300}},t={args:{id:"doggo-3",title:"Removable Doggo",onRemove:p=>console.log(`Removing doggo widget ${p}`)}};var r,g,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    id: 'doggo-1',
    title: 'Random Doggo',
    width: 300,
    height: 200
  }
}`,...(i=(g=o.parameters)==null?void 0:g.docs)==null?void 0:i.source}}};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: 'doggo-2',
    title: 'Big Doggo',
    width: 500,
    height: 300
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    id: 'doggo-3',
    title: 'Removable Doggo',
    onRemove: id => console.log(\`Removing doggo widget \${id}\`)
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const b=["Default","CustomSize","WithRemoveButton"];export{e as CustomSize,o as Default,t as WithRemoveButton,b as __namedExportsOrder,W as default};
