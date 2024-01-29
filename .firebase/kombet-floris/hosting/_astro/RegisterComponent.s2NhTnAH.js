import{j as e}from"./jsx-runtime.G4i-1Giy.js";import{u as l}from"./index.esm.ybw2TbqF.js";import"./index.UCAuQZPX.js";function m(){const{register:r,handleSubmit:t,watch:i,formState:{errors:s}}=l(),o=a=>{console.log(a)};return e.jsxs("div",{className:"p-4 w-96",children:[e.jsx("img",{style:{filter:"brightness(0) saturate(100%) invert(54%) sepia(78%) saturate(4692%) hue-rotate(305deg) brightness(97%) contrast(90%)"},src:"/icon.png",alt:"Logo",className:"w-20 mx-auto"}),e.jsx("h1",{className:"text-3xl text-center font-bold",children:"Register"}),e.jsx("h2",{className:"text-center",children:"Register to create new account"}),e.jsx("br",{}),e.jsxs("form",{onSubmit:t(o),children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{...r("email",{required:!0,pattern:/^\S+@\S+$/i}),type:"email",name:"email",id:"email",placeholder:"Email",className:"border border-gray-400 rounded-md p-2"}),s.email?.type==="required"&&e.jsx("span",{className:"text-red-500",children:"Email is required"}),s.email?.type==="pattern"&&e.jsx("span",{className:"text-red-500",children:"Email is not valid"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"password",children:"Password"}),e.jsx("input",{...r("password",{required:!0,minLength:8}),type:"password",name:"password",id:"password",placeholder:"Password",className:"border border-gray-400 rounded-md p-2"}),s.password?.type==="required"&&e.jsx("span",{className:"text-red-500",children:"Password is required"}),s.password?.type==="minLength"&&e.jsx("span",{className:"text-red-500",children:"Password must be at least 8 characters"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"password",children:"Confirm Password"}),e.jsx("input",{...r("password_confirmation",{required:!0,minLength:8,validate:a=>a===i("password")}),type:"password",name:"password_confirmation",id:"password_confirmation",placeholder:"Confirm Password",className:"border border-gray-400 rounded-md p-2"}),s.password_confirmation?.type==="required"&&e.jsx("span",{className:"text-red-500",children:"Password confirmation is required"}),s.password_confirmation?.type==="minLength"&&e.jsx("span",{className:"text-red-500",children:"Password confirmation must be at least 8 characters"}),s.password_confirmation?.type==="validate"&&e.jsx("span",{className:"text-red-500",children:"Password confirmation must match"})]}),e.jsx("div",{className:"flex flex-col mt-2",children:e.jsx("input",{type:"submit",value:"Register",className:"bg-pink-500 hover:bg-pink-600 cursor-pointer text-white rounded-md p-2"})}),e.jsx("div",{className:"flex flex-col mt-2",children:e.jsx("a",{href:"/auth/login",className:"text-center text-blue-500 hover:text-blue-600",children:"Already have an account? Login"})})]})]})}export{m as default};
