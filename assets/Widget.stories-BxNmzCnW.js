import{j as l}from"./jsx-runtime-z8MfsBtr.js";import{W as v}from"./RemoteDataProvider-CQT3h5XJ.js";import{W,M as w}from"./WidgetFactory-uFxn1z5C.js";import"./index-C9rmetsa.js";import"./index-BofL8h0e.js";import"./Card-BNZe5Qsc.js";import"./Button-VBjU_o9A.js";import"./DoggoWidget-ZCb-5usm.js";import"./TableWidget-U5xGeMpw.js";const $={title:"Components/Widget",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text"},onRemove:{action:"removed"}},args:{id:"widget-1",title:"Sample Widget"}},R=new w,e={args:{children:l.jsx("p",{children:"Widget content goes here"}),onRemove:void 0}},t={args:{title:"Removable Widget",children:l.jsx("p",{children:"Click the remove button to trigger action"}),onRemove:r=>console.log(`Removing widget ${r}`)}},o={args:{id:"story-widget"},render:r=>new W(R).createWidget(r.id,"popular-content",u=>console.log(`Removing widget ${u}`))};var i,n,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: <p>Widget content goes here</p>,
    onRemove: undefined
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};var s,d,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    title: 'Removable Widget',
    children: <p>Click the remove button to trigger action</p>,
    onRemove: id => console.log(\`Removing widget \${id}\`)
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var g,m,p;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'story-widget'
  },
  render: args => {
    const widgetFactory = new WidgetFactory(mockDataProvider);
    return widgetFactory.createWidget(args.id, 'popular-content', id => console.log(\`Removing widget \${id}\`));
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const C=["BasicWidget","InteractiveWidget","DataWidget"];export{e as BasicWidget,o as DataWidget,t as InteractiveWidget,C as __namedExportsOrder,$ as default};
