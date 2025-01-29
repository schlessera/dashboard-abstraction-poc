var h=Object.defineProperty;var m=(a,e,t)=>e in a?h(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var l=(a,e,t)=>m(a,typeof e!="symbol"?e+"":e,t);import{j as r}from"./jsx-runtime-z8MfsBtr.js";import{r as o}from"./index-BofL8h0e.js";import{D as p}from"./RemoteDataProvider-CYF7xnSS.js";import{D as T}from"./DoggoWidget-B2P8DGFg.js";import{T as y}from"./TableWidget-BL78sYG4.js";class S{async getMostPopularContent(){return[{id:"1",title:"Getting Started Guide",views:1200},{id:"2",title:"Advanced Tutorial",views:850},{id:"3",title:"API Reference",views:750}]}async getSearchTraffic(){return{daily:1500,weekly:10500,trend:"up",percentage:12.5}}}const f=({dataProvider:a,...e})=>{const[t,s]=o.useState([]);return o.useEffect(()=>{(async()=>{const c=await a.getMostPopularContent();s(c)})()},[a]),r.jsx(p,{...e,dataProvider:a,title:"Most Popular Content",children:r.jsx("ul",{children:t.map(n=>r.jsxs("li",{children:[n.title," - ",n.views," views"]},n.id))})})};f.__docgenInfo={description:"",methods:[],displayName:"MostPopularContent",props:{dataProvider:{required:!0,tsType:{name:"DataProvider"},description:""}}};const u=({dataProvider:a,...e})=>{const[t,s]=o.useState(null);return o.useEffect(()=>{(async()=>{const c=await a.getSearchTraffic();s(c)})()},[a]),t?r.jsx(p,{...e,dataProvider:a,title:"Search Traffic",children:r.jsxs("div",{children:[r.jsxs("p",{children:["Daily Searches: ",t.daily]}),r.jsxs("p",{children:["Weekly Searches: ",t.weekly]}),r.jsxs("p",{children:["Trend: ",t.trend==="up"?"↑":"↓"," ",t.percentage,"%"]})]})}):null};u.__docgenInfo={description:"",methods:[],displayName:"SearchTraffic",props:{dataProvider:{required:!0,tsType:{name:"DataProvider"},description:""}}};const i=class i{constructor(e){this.dataProvider=e}getWidgetTypes(){return i.widgetTypes}getRandomTableFile(){return`table-data-${Math.floor(Math.random()*i.TABLE_FILE_COUNT)+1}.json`}createWidget(e,t,s){switch(t){case"popular-content":return r.jsx(f,{id:e,dataProvider:this.dataProvider,onRemove:s},e);case"search-traffic":return r.jsx(u,{id:e,dataProvider:this.dataProvider,onRemove:s},e);case"doggo":return r.jsx(T,{id:e,onRemove:s},e);case"table":return r.jsx(y,{id:e,onRemove:s,filename:this.getRandomTableFile()},e);default:throw new Error(`Unknown widget type: ${t}`)}}};l(i,"widgetTypes",[{type:"popular-content",label:"Most Popular Content",description:"Shows the most viewed content"},{type:"search-traffic",label:"Search Traffic",description:"Displays search analytics"},{type:"doggo",label:"Random Dog",description:"Shows a random dog image"},{type:"table",label:"Data Table",description:"Displays random tabular data"}]),l(i,"TABLE_FILE_COUNT",20);let d=i;export{S as M,d as W};
