import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as C}from"./index-BofL8h0e.js";import{M as h}from"./Modal-B2ppdwVx.js";import"./index-C9rmetsa.js";const g={title:"Components/Modal",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClose:{action:"closed"}}},n={args:{isOpen:!1,children:e.jsx("p",{children:"Modal content"})}},s={args:{isOpen:!0,children:e.jsxs("div",{children:[e.jsx("h2",{children:"Sample Modal"}),e.jsx("p",{children:"This is modal content"}),e.jsx("button",{onClick:()=>console.log("Action"),children:"Click Me"})]})}},o={render:()=>{const[M,t]=C.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(h,{isOpen:M,onClose:()=>t(!1),children:e.jsxs("div",{children:[e.jsx("h2",{children:"Interactive Modal"}),e.jsx("p",{children:"Click outside or press ESC to close"}),e.jsx("button",{onClick:()=>t(!1),children:"Close"})]})})]})}};var r,a,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    children: <p>Modal content</p>
  }
}`,...(l=(a=n.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,i,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    children: <div>
        <h2>Sample Modal</h2>
        <p>This is modal content</p>
        <button onClick={() => console.log('Action')}>Click Me</button>
      </div>
  }
}`,...(d=(i=s.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <h2>Interactive Modal</h2>
            <p>Click outside or press ESC to close</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </Modal>
      </>;
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const k=["ClosedModal","OpenModal","InteractiveModal"];export{n as ClosedModal,o as InteractiveModal,s as OpenModal,k as __namedExportsOrder,g as default};
