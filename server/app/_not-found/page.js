(()=>{var e={};e.id=492,e.ids=[492],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},5249:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>d});var n=t(260),s=t(8203),o=t(5155),i=t.n(o),a=t(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);t.d(r,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,638)),"/Users/migper/Documents/my-app/miguel-portfolio/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"]}],u=[],c={require:t,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4889:(e,r,t)=>{Promise.resolve().then(t.bind(t,1993)),Promise.resolve().then(t.bind(t,7913)),Promise.resolve().then(t.t.bind(t,9607,23))},5161:(e,r,t)=>{Promise.resolve().then(t.bind(t,2657)),Promise.resolve().then(t.bind(t,2789)),Promise.resolve().then(t.t.bind(t,8531,23))},6668:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},4812:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,1284,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},2657:(e,r,t)=>{"use strict";t.d(r,{default:()=>f});var n=t(5512),s=t(8531),o=t.n(s),i=t(9334),a=t(2933),l=t(8009),d=t(9383),u=t(1643),c=t(2289),m=t(6756);let p=(0,u.F)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"underline-offset-4 hover:underline text-primary"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-3 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),h=l.forwardRef(({className:e,variant:r,size:t,asChild:s=!1,...o},i)=>{let a=s?d.DX:"button";return(0,n.jsx)(a,{className:function(...e){return(0,m.Q)((0,c.$)(e))}(p({variant:r,size:t,className:e})),ref:i,...o})});h.displayName="Button";var v=t(2478);function f(){let e=(0,i.usePathname)(),{theme:r,setTheme:t}=(0,v.D)(),[s,d]=(0,l.useState)(!1),u=e.startsWith("/projects/"),c=(0,i.useRouter)();return(0,n.jsx)("header",{className:`sticky top-0 z-50 transition-all duration-300 ease-in-out ${s?"bg-scrolled":""}`,children:(0,n.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold cursor-pointer",onClick:()=>c.push("/"),onMouseEnter:e=>{u&&(e.currentTarget.textContent="Miguel")},onMouseLeave:e=>{u&&(e.currentTarget.textContent="Project Name")},children:u?"Project Name":"Miguel"}),(0,n.jsxs)("nav",{className:"flex items-center space-x-4",children:[(0,n.jsx)(o(),{href:"/about",className:"hover:underline",children:"About"}),(0,n.jsx)(h,{variant:"ghost",size:"sm",onClick:()=>t("dark"===r?"light":"dark"),children:"dark"===r?(0,n.jsx)(a.rRK,{className:"h-[1.2rem] w-[1.2rem] transition-all"}):(0,n.jsx)(a.gLX,{className:"h-[1.2rem] w-[1.2rem] transition-all"})})]})]})})}},2789:(e,r,t)=>{"use strict";t.d(r,{ThemeProvider:()=>o});var n=t(5512);t(8009);var s=t(2478);function o({children:e,...r}){return(0,n.jsx)(s.N,{...r,children:e})}},638:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>m,metadata:()=>c});var n=t(2740);t(2704);var s=t(9258),o=t.n(s),i=t(7913),a=t(1993),l=t(9607),d=t.n(l);function u(){return(0,n.jsx)("footer",{className:"border-t",children:(0,n.jsxs)("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[(0,n.jsx)("p",{children:"Handcrafted by Miguel"}),(0,n.jsxs)("div",{className:"space-x-4",children:[(0,n.jsx)(d(),{href:"/cv",className:"hover:underline",children:"CV"}),(0,n.jsx)(d(),{href:"https://www.linkedin.com/in/yourusername",className:"hover:underline",children:"LinkedIn"})]})]})})}let c={title:"Miguel's Portfolio",description:"Product Designer Portfolio"};function m({children:e}){return(0,n.jsx)("html",{lang:"en",suppressHydrationWarning:!0,children:(0,n.jsx)("body",{className:`${o().className} bg-gray-50 text-gray-900`,children:(0,n.jsx)(i.ThemeProvider,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:(0,n.jsxs)("div",{className:"min-h-screen",children:[(0,n.jsx)(a.default,{}),(0,n.jsx)("main",{className:"flex-1 w-full",children:e}),(0,n.jsx)(u,{})]})})})})}},1993:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});let n=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/migper/Documents/my-app/miguel-portfolio/components/Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/migper/Documents/my-app/miguel-portfolio/components/Header.tsx","default")},7913:(e,r,t)=>{"use strict";t.d(r,{ThemeProvider:()=>n});let n=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/migper/Documents/my-app/miguel-portfolio/components/theme-provider.tsx","ThemeProvider")},2704:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[638,183],()=>t(5249));module.exports=n})();