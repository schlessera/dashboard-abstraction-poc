import{j as a}from"./jsx-runtime-z8MfsBtr.js";import{R as d,r as m}from"./index-BofL8h0e.js";import{R as g,a as u}from"./RemoteDataProvider-B66CIwLN.js";const l=({src:e,height:o})=>{const[i,n]=d.useState(!0);return m.useEffect(()=>{n(!0);const t=new Image;return t.onload=()=>{n(!1)},t.src=e,()=>{t.onload=null}},[e]),a.jsx("div",{style:{minHeight:o,height:o,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative"},children:i?a.jsx("div",{children:"Loading image..."}):a.jsx("img",{src:e,alt:"Random dog",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",position:"absolute",margin:"auto",top:0,left:0,right:0,bottom:0,borderRadius:"4px"}})})},p=({id:e,title:o="Random Doggo",onRemove:i,width:n=300,height:t=200})=>{const r=new u({endpoint:"https://dog.ceo/api/breeds/image/random",type:"json"});return a.jsx(g,{id:e,title:o,onRemove:i,remoteDataProvider:r,cacheKey:`doggo-${e}`,cacheTTL:30*60*1e3,renderData:s=>a.jsx(l,{src:s.message,height:t})})};p.__docgenInfo={description:"",methods:[],displayName:"DoggoWidget",props:{id:{required:!0,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Random Doggo'",computed:!1}},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"300",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"200",computed:!1}}}};export{p as D};
