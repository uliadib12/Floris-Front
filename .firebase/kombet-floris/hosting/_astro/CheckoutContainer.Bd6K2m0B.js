import{j as e}from"./jsx-runtime.G4i-1Giy.js";import{r as n}from"./index.UCAuQZPX.js";import{u as j}from"./index.esm.ybw2TbqF.js";import{C as y}from"./cartServices.l6aAegER.js";class h{name;email;phone;address;day;time;constructor(d,t,r,a,i,l){this.name=d,this.email=t,this.phone=r,this.address=a,this.day=i,this.time=l}static Empty(){return new h("","","","","","")}}class o{name;variant;price;quantity;image;constructor(d,t,r,a,i){this.name=d,this.variant=t,this.price=r,this.quantity=a,this.image=i}static Empty(){return new o("","",0,0,"")}static GetProductsFromStorage(){const t=y.getCartFromStorage().products;return t.length===0?[]:t.map(a=>new o(a.name,a.variantName,a.price,a.quantity,a.image))}}class g{products;address;payment;paymentSelected=0;orderMenu=0;allowOrderMenu=0;constructor(d,t,r){this.address=d,this.products=t,this.payment=r}}const c=n.createContext(null);function N(){const[s,d]=n.useContext(c),{register:t,handleSubmit:r,formState:{errors:a}}=j(),i=l=>{let m=1;s.allowOrderMenu>=m&&(m=s.allowOrderMenu);const f={name:l.name,email:l.email,phone:l.phone,address:l.address,day:l.day,time:l.time};d({...s,orderMenu:1,allowOrderMenu:m,address:f})};return e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Address"}),e.jsxs("form",{onSubmit:r(i),children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"name",children:"Name"}),a.name?.type==="required"&&e.jsx("span",{className:"text-red-500",children:"This field is required"}),e.jsx("input",{...t("name",{required:!0}),defaultValue:s?.address?.name,type:"text",name:"name",id:"name",className:"border border-gray-400 rounded-md p-2"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),a.email?.type==="required"&&e.jsx("span",{className:"text-red-500",children:"This field is required"}),a.email?.type==="pattern"&&e.jsx("span",{className:"text-red-500",children:"Invalid email address"}),e.jsx("input",{...t("email",{required:!0,pattern:/^\S+@\S+$/i}),defaultValue:s?.address?.email,type:"email",name:"email",id:"email",className:"border border-gray-400 rounded-md p-2"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"phone",children:"Phone"}),a.phone?.type==="required"&&e.jsx("span",{className:"text-red-500",children:"This field is required"}),a.phone?.type==="pattern"&&e.jsx("span",{className:"text-red-500",children:"Invalid phone number"}),e.jsx("input",{...t("phone",{required:!0,pattern:/^[0-9]+$/i}),defaultValue:s?.address?.phone,type:"text",name:"phone",id:"phone",className:"border border-gray-400 rounded-md p-2"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"address",children:"Address"}),a.address?.type==="required"&&e.jsx("span",{className:"text-red-500",children:"This field is required"}),e.jsx("input",{...t("address",{required:!0}),defaultValue:s?.address?.address,type:"text",name:"address",id:"address",className:"border border-gray-400 rounded-md p-2"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"day",children:"Day"}),a.day?.type==="required"&&e.jsx("span",{className:"text-red-500",children:"This field is required"}),e.jsx("input",{...t("day",{required:!0}),defaultValue:s?.address?.day,type:"date",name:"day",id:"day",className:"border border-gray-400 rounded-md p-2"})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"time",children:"Time"}),a.time?.type==="required"&&e.jsx("span",{className:"text-red-500",children:"This field is required"}),e.jsx("input",{...t("time",{required:!0}),defaultValue:s?.address?.time,type:"time",name:"time",id:"time",className:"border border-gray-400 rounded-md p-2"})]})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx("input",{type:"submit",value:"Save",className:"bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer"})})]})]})}function b(){const[s,d]=n.useContext(c);return e.jsx("div",{className:"flex flex-col gap-4 p-4",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Payment"}),e.jsx(u,{title:s?.payment.at(0).method,description:s?.payment.at(0).description,icon:s?.payment.at(0).icon,active:s.paymentSelected===0,onClick:()=>d({...s,paymentSelected:0})}),e.jsx(u,{title:s?.payment.at(1).method,description:s?.payment.at(1).description,icon:s?.payment.at(1).icon,active:s.paymentSelected===1,onClick:()=>d({...s,paymentSelected:1})})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx("button",{onClick:()=>d({...s,orderMenu:2,allowOrderMenu:2}),className:"bg-pink-500 text-white rounded-md px-4 py-2",children:"Next"})})]})})}function u({title:s,description:d,icon:t,active:r,onClick:a}){return e.jsx("button",{onClick:a,className:(r?"border-pink-500":"border-gray-200")+" flex gap-4 p-4 border-2 rounded-md",children:e.jsxs("div",{className:"flex flex-row justify-between items-center w-full",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx("div",{className:"w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center",children:t}),e.jsx("h1",{className:"font-bold",children:s})]}),e.jsx("p",{children:d})]}),e.jsx("div",{children:e.jsx("div",{className:(r?"bg-pink-500":"bg-gray-200")+" w-8 h-8 rounded-full flex items-center justify-center",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"#fff",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})})})]})})}function v(){const[s,d]=n.useContext(c);return e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Review"}),e.jsx(w,{name:s?.address?.name,phone:s?.address?.phone,address:s?.address?.address,day:s?.address?.day,time:s?.address?.time}),e.jsx(k,{payment:s?.payment?.at(s?.paymentSelected).method})]})}function w({name:s,phone:d,address:t,day:r,time:a}){return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h2",{children:"Address"}),e.jsx("p",{className:"text-gray-400",children:s}),e.jsx("p",{className:"text-gray-400",children:d}),e.jsx("p",{className:"text-gray-400",children:t}),e.jsxs("p",{className:"text-gray-400",children:[r,", ",a]})]})}function k({payment:s}){return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h2",{children:"Payment"}),e.jsx("p",{className:"text-gray-400",children:s})]})}function S(){const[s,d]=n.useContext(c),t=r=>{s?.allowOrderMenu<r||d({...s,orderMenu:r})};return e.jsxs("div",{className:"p-4",children:[e.jsxs("ul",{id:"menu-order",className:"flex gap-4 justify-center",children:[e.jsx("button",{onClick:()=>t(0),className:(s?.orderMenu===0?"bg-pink-500 text-white font-bold":"bg-gray-100")+"  rounded-md p-2",children:"Address"}),e.jsx("button",{onClick:()=>t(1),className:(s?.orderMenu===1?"bg-pink-500 text-white font-bold":"bg-gray-100")+" rounded-md p-2",children:"Payment"}),e.jsx("button",{onClick:()=>t(2),className:(s?.orderMenu===2?"bg-pink-500 text-white font-bold":"bg-gray-100")+" rounded-md p-2",children:"Review"})]}),e.jsxs("div",{children:[s?.orderMenu===0&&e.jsx(N,{}),s?.orderMenu===1&&e.jsx(b,{}),s?.orderMenu===2&&e.jsx(v,{})]})]})}function C(){const[s,d]=n.useContext(c);return e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("h1",{className:"text-2xl font-bold",children:["In Your Cart (",s?.products.length,")"]}),e.jsx("div",{className:"flex flex-col gap-4",children:s?.products.map((t,r)=>e.jsx(q,{name:t.name,variant:t.variant,price:t.price,image:t.image,quantity:t.quantity},r))}),e.jsx("div",{className:"flex flex-col gap-4",children:e.jsxs("div",{className:"flex flex-row justify-between items-center",children:[e.jsx("h1",{className:"font-bold",children:"Total"}),e.jsx("p",{className:"font-bold text-orange-500",children:x(s?.products.reduce((t,r)=>t+r.price*r.quantity,0))})]})})]})}function q({name:s,variant:d,price:t,quantity:r,image:a}){return e.jsxs("div",{className:"flex flex-row justify-between items-center w-full",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx("div",{className:"w-16 h-16 bg-gray-200 rounded-md",children:e.jsx("img",{src:a,alt:"product",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h1",{className:"font-bold",children:s}),e.jsx("p",{className:"text-gray-400",children:d}),e.jsx("p",{className:"text-gray-400",children:x(t)})]})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("p",{className:"text-gray-400",children:["Qty: ",r]}),e.jsxs("p",{className:"text-gray-400",children:["Total: ",x(t*r)]})]})]})}function x(s){return s?s.toLocaleString("id-ID",{style:"currency",currency:"IDR"}):"Rp0"}class p{id;method;description;icon;constructor(d,t,r,a){this.id=d,this.method=t,this.description=r,this.icon=a}}function F(){const[s,d]=n.useState(void 0);n.useEffect(()=>{const a=h.Empty(),i=o.GetProductsFromStorage(),l=[new p("transfer","Transfer","Pay with Transfer Bank or E-Wallet","💳"),new p("cod","Cash on Delivery","Pay with cash upon delivery","💵")];d(new g(a,i,l))},[]);const[t,r]=n.useState(!1);return e.jsx(c.Provider,{value:[s,d],children:e.jsxs("div",{className:"p-4 lg:p-10 lg:grid lg:grid-cols-3 gap-3",children:[e.jsx("div",{className:"lg:min-h-[85vh] lg:col-span-2 border-2 border-solid border-pink-400 border-opacity-50 rounded-sm",children:e.jsx(S,{})}),e.jsx("div",{className:"mt-2 lg:mt-0 h-fit border-2 border-solid border-pink-400 border-opacity-50 rounded-sm",children:e.jsx(C,{})}),e.jsx("div",{className:"fixed bottom-0 right-6 m-4",children:e.jsx("button",{onClick:()=>{s?.allowOrderMenu>=2&&r(!0)},className:(s?.allowOrderMenu>=2?"bg-pink-500":"bg-gray-300 pointer-events-none")+" hover:bg-pink-600 border-2 border-solid border-white text-white font-bold py-2 px-4 rounded-lg",children:"Order Now"})}),e.jsx("div",{className:(t?"fixed":"hidden")+" top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center",children:e.jsxs("div",{className:"bg-white p-4 rounded-md",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Order Success"}),e.jsx("p",{className:"text-gray-400",children:"Your order has been placed. We will contact you soon."}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx("button",{onClick:()=>window.location.replace("/"),className:"bg-pink-500 text-white rounded-md px-4 py-2",children:"Close"})})]})})]})})}export{F as default};