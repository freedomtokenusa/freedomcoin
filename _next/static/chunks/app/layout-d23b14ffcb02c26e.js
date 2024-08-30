(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7773:function(e,t,a){Promise.resolve().then(a.bind(a,8604)),Promise.resolve().then(a.bind(a,7531)),Promise.resolve().then(a.bind(a,2158)),Promise.resolve().then(a.bind(a,7012)),Promise.resolve().then(a.bind(a,2418)),Promise.resolve().then(a.bind(a,5150)),Promise.resolve().then(a.t.bind(a,6857,23)),Promise.resolve().then(a.bind(a,5317)),Promise.resolve().then(a.bind(a,7744)),Promise.resolve().then(a.t.bind(a,8173,23)),Promise.resolve().then(a.t.bind(a,231,23)),Promise.resolve().then(a.t.bind(a,6653,23)),Promise.resolve().then(a.t.bind(a,4841,23)),Promise.resolve().then(a.t.bind(a,3849,23)),Promise.resolve().then(a.bind(a,2667))},2418:function(e,t,a){"use strict";a.d(t,{default:function(){return f}});var r=a(7437),s=a(2126),i=a(4245),o=a(495),n=a(2265),l=a(7440);let d=n.forwardRef((e,t)=>{let{className:a,type:s,...i}=e;return(0,r.jsx)("input",{type:s,className:(0,l.cn)("flex w-full rounded-md lg:rounded-xl border md:border-2 lg:border-[3px] border-black text-base sm:text-lg md:text-xl lg:text-2xl bg-background px-4 py-1 md:py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...i})});d.displayName="Input";let u=n.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)("textarea",{className:(0,l.cn)("flex min-h-[80px] w-full rounded-md lg:rounded-xl border md:border-2 lg:border-[3px] border-black text-lg md:text-xl lg:text-2xl bg-background px-4 py-2 ring-offset-background file:border-0 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...s})});u.displayName="Textarea";var c=a(5657),m=a(3274);function f(){let[e,t]=(0,n.useState)(!1),[a,l]=(0,n.useState)({name:"",email:"",country:"",phone_number:"",message:""}),f=e=>t=>{l(a=>({...a,[e]:t.target.value}))},{toast:g}=(0,c.pm)(),p=(0,i.Ry)({name:(0,i.Z_)().required("Name is required"),email:(0,i.Z_)().email("Invalid email").required("Email is required"),country:(0,i.Z_)(),phone:(0,i.Z_)(),message:(0,i.Z_)().required("Message is required")}),x=async e=>{e.preventDefault();try{t(!0),await p.validate(a,{abortEarly:!1}),await s.Z.post("https://api.thotianatoken.com/api/contact",a),g({title:"Success",description:"Your message has been sent successfully.",duration:3e3}),l({name:"",email:"",country:"",phone_number:"",message:""})}catch(e){console.log(e),"ValidationError"===e.name?g({title:"Validation Error",description:e.errors[0],duration:3e3}):g({title:"Error",description:"An error occurred. Please try again later.",duration:3e3})}finally{t(!1)}};return(0,r.jsxs)("form",{onSubmit:x,className:"flex flex-col gap-2 md:gap-3",children:[(0,r.jsx)(d,{type:"text",placeholder:"Name*",value:a.name,onChange:f("name")}),(0,r.jsx)(d,{type:"email",placeholder:"Email*",value:a.email,onChange:f("email")}),(0,r.jsx)(d,{type:"email",placeholder:"Country",value:a.country,onChange:f("country")}),(0,r.jsx)(d,{type:"tel",placeholder:"Phone Number",value:a.phone_number,onChange:f("phone_number")}),(0,r.jsx)(u,{placeholder:"Message",rows:5,value:a.message,onChange:f("message")}),(0,r.jsx)("div",{className:"",children:(0,r.jsxs)(o.z,{type:"submit",variant:"outline",size:"lg",className:"flex justify-between rounded-lg w-full font-alt font-normal",disabled:e,children:["Submit",e&&(0,r.jsx)(m.Z,{className:"mr-2 w-6 md:w-8 h-6 md:h-8 animate-spin"}),!e&&(0,r.jsx)("svg",{width:"85",height:"35",viewBox:"0 0 85 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"w-[2.5em] h-auto",children:(0,r.jsx)("path",{d:"M0.208619 17.7916L79.7916 17.7913M79.7916 17.7913L64.9212 2.92094M79.7916 17.7913L64.9212 32.6617",stroke:"#F80000",strokeWidth:"6"})})]})})]})}},5317:function(e,t,a){"use strict";a.d(t,{Sheet:function(){return d},SheetContent:function(){return g},SheetTrigger:function(){return u}});var r=a(7437),s=a(2265),i=a(3304),o=a(2218),n=a(4697),l=a(7440);let d=i.fC,u=i.xz;i.x8;let c=i.h_,m=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...s,ref:t})});m.displayName=i.aV.displayName;let f=(0,o.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),g=s.forwardRef((e,t)=>{let{side:a="right",className:s,children:o,...d}=e;return(0,r.jsxs)(c,{children:[(0,r.jsx)(m,{}),(0,r.jsxs)(i.VY,{ref:t,className:(0,l.cn)(f({side:a}),s),...d,children:[o,(0,r.jsxs)(i.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,r.jsx)(n.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});g.displayName=i.VY.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.Dx,{ref:t,className:(0,l.cn)("text-lg font-semibold text-foreground",a),...s})}).displayName=i.Dx.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.dk,{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",a),...s})}).displayName=i.dk.displayName},7744:function(e,t,a){"use strict";a.d(t,{Toaster:function(){return h}});var r=a(7437),s=a(2265),i=a(4504),o=a(2218),n=a(4697),l=a(7440);let d=i.zt,u=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.l_,{ref:t,className:(0,l.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",a),...s})});u.displayName=i.l_.displayName;let c=(0,o.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-black border-primary bg-opacity-80 text-background",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),m=s.forwardRef((e,t)=>{let{className:a,variant:s,...o}=e;return(0,r.jsx)(i.fC,{ref:t,className:(0,l.cn)(c({variant:s}),a),...o})});m.displayName=i.fC.displayName,s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.aU,{ref:t,className:(0,l.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",a),...s})}).displayName=i.aU.displayName;let f=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.x8,{ref:t,className:(0,l.cn)("absolute right-2 top-2 text-white rounded-md p-1 opacity-50 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",a),"toast-close":"",...s,children:(0,r.jsx)(n.Z,{className:"w-4 h-4"})})});f.displayName=i.x8.displayName;let g=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.Dx,{ref:t,className:(0,l.cn)("text-lg uppercase font-semibold",a),...s})});g.displayName=i.Dx.displayName;let p=s.forwardRef((e,t)=>{let{className:a,...s}=e;return(0,r.jsx)(i.dk,{ref:t,className:(0,l.cn)("text-lg opacity-90",a),...s})});p.displayName=i.dk.displayName;var x=a(5657);function h(){let{toasts:e}=(0,x.pm)();return(0,r.jsxs)(d,{children:[e.map(function(e){let{id:t,title:a,description:s,action:i,...o}=e;return(0,r.jsxs)(m,{...o,children:[(0,r.jsxs)("div",{className:"grid gap-1",children:[a&&(0,r.jsx)(g,{children:a}),s&&(0,r.jsx)(p,{children:s})]}),i,(0,r.jsx)(f,{})]},t)}),(0,r.jsx)(u,{})]})}},2667:function(e,t,a){"use strict";var r=a(7437),s=a(1910),i=a(8800),o=a(1156);a(5438);var n=a(5429),l=a(5538),d=a(3494),u=a(836),c=a(9062),m=a(6189),f=a(2265),g=a(5442),p=a(8782);t.default=e=>{let{children:t}=e,a=g.Q.Devnet,{autoConnect:x}=(0,p.O)(),h=(0,f.useMemo)(()=>(0,n.Wf)(a),[a]),b=(0,f.useMemo)(()=>[new l.O,new d.e,new u.P,new c.H,new m.A],[a]);return(0,r.jsx)(s.U,{endpoint:h,children:(0,r.jsx)(i.n,{wallets:b,autoConnect:!0,children:(0,r.jsx)(o.s,{children:t})})})}},6857:function(){},8604:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/34098567023465092934675.6b52d88a.png",height:229,width:387,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAWklEQVR42l3KOwqAMBCE4YmlL7QQm2BnpYKltV7E+18gKf0XIoQsfMwyjP6LUoslSCvZkD35KvJgx0bpMeDGQzfZ4ECn7AJjo6KsUs6Jx6goOZMNa1x0Z5DcB5S5H17eIpF7AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},7531:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/logo.d2e0079c.png",height:72,width:176,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVElEQVR42gXAMQqCUBgA4O+veC3NQWsnaOoALQ1eQARBNxHvIM7iSbyViwdQnAU6THiIuL24AxwpvaHAgPzKmOiRLXH5bhEz/PFD86RG2VHttCufE+B3DKLr/rNXAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},2158:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/telegram9482659238745.d8738b22.png",height:339,width:299,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA1klEQVR42h2M0UrCUABA79/mTwSiQUH11E+MiFkq7layUIvhbOokb9OBLchFeauNoLa9HIeP5xw4wvGr6ZWzR8M9xTDOOLCqVJoV6je1VAwmdWaRJHz1MfYPmb/4SCU57h4hvKVBXuRlDBirEav1iizPaE5NxCi85F2vMfsGvVmPltMi1jH28zWir0x0okvZxh7fIV3Jx/cng6CLkL65g1vPpu1YdIYWyW/CcGkjLtxz/rJ/NskXmx+9uxRFgReWsdY5SR8Wj0wixTSaE7wtCGPF/VMj3QKcYrtxrEi48wAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},7012:function(e,t,a){"use strict";a.r(t),t.default={src:"/_next/static/media/thotiana82473589234.0f60f502.png",height:378,width:378,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABC0lEQVR42mMAgQt2+Zr+ohoHE5W1fsWzMvyyVjY6ZGCvpQmWvJa8Q/OKS/O7CgXJ/23q0v8nWur+9xMU/29tn/GOIXOrJsNh76ZDN80K/i9MSPy5uLTgf7ex2v8MdoafLiFz/3ulrjnIsNrA/NcOda//1daG/3tjQ/63Wqv/zzBS+h/uVvO/Jjj3F4OQsPove3Gt/ymKwv8rTcX+93gZ/e90BfLt/P8Huvj+YhAXVT8YK6n4v9zS/OfigKD/2+Pi/q8PDfwZ72D031/P6xADA4OaZqqq4rsANYX/XQ4u/xf6+v+vtHH9n2Jr9C5YyB/ikwx5aU0HPrFD4RpSv5J0RH556Lsc9BK3BUsCAIwbaM1wVzx/AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[571,212,814,406,28,487,971,23,744],function(){return e(e.s=7773)}),_N_E=e.O()}]);