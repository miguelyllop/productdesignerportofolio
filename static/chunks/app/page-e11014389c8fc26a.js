(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6162:(e,t,s)=>{Promise.resolve().then(s.bind(s,3075))},3075:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(5155),i=s(9001);s(1839);var l=s(5565);function n(){let[e]=(0,i.E)({loop:!0,mode:"free-snap",slides:{perView:2.2,spacing:15},breakpoints:{"(max-width: 768px)":{slides:{perView:1.2,spacing:10}}},created:e=>{let t;let s=!1,a={x:0,y:0},i=(t,s)=>{a.x-=t.deltaX,a.y-=t.deltaY,e.container.dispatchEvent(new CustomEvent(s,{detail:{x:a.x,y:a.y}}))},l=e=>{a={x:e.pageX,y:e.pageY},i(e,"ksDragStart")},n=e=>{i(e,"ksDrag")},r=e=>{i(e,"ksDragEnd")};e.container.addEventListener("wheel",e=>{Math.abs(e.deltaX)>Math.abs(e.deltaY)&&(e.preventDefault(),s||(l(e),s=!0),n(e),clearTimeout(t),t=setTimeout(()=>{s=!1,r(e)},50))},{passive:!1})}});return(0,a.jsx)("div",{className:"keen-slider-container",style:{padding:0,margin:0},children:(0,a.jsxs)("div",{ref:e,className:"keen-slider",style:{display:"flex",alignItems:"flex-start"},children:[(0,a.jsx)("div",{className:"keen-slider__slide flex-shrink-0",children:(0,a.jsx)(l.default,{src:"/images/image1.png",alt:"Image 1",width:1e3,height:900,className:"rounded-lg",style:{width:"auto",height:"90vh",maxWidth:"1000px",objectFit:"contain",marginBottom:"auto"}})}),(0,a.jsx)("div",{className:"keen-slider__slide flex-shrink-0",children:(0,a.jsx)("video",{src:"/videos/video1.mov",title:"Video 1",autoPlay:!0,loop:!0,muted:!0,className:"rounded-lg",style:{width:"auto",height:"90vh",maxWidth:"1000px",objectFit:"contain",marginBottom:"auto"}})}),(0,a.jsx)("div",{className:"keen-slider__slide flex-shrink-0",children:(0,a.jsx)("video",{src:"/videos/video2.mp4",title:"Video 2",autoPlay:!0,loop:!0,muted:!0,className:"rounded-lg",style:{width:"auto",height:"90vh",maxWidth:"1000px",objectFit:"contain",marginBottom:"auto"}})})]})})}function r(){return(0,a.jsxs)("section",{className:"py-16 pl-6 pr-6 text-left w-full",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50",children:"Miguel"}),(0,a.jsx)("p",{className:"text-lg text-muted-foreground leading-relaxed",children:"As a product designer, I specialize in creating intuitive and visually appealing user interfaces. With a keen eye for detail and a user-centered approach, I strive to deliver designs that not only look great but also solve real problems for users."})]})}var d=s(2115);let o=function(e){let{onProjectClick:t}=e,[s,i]=(0,d.useState)(null),l=[{id:1,title:"Project 1",year:2023},{id:2,title:"Project 2",year:2022},{id:3,title:"Project 3",year:2021}];return(0,a.jsx)("section",{className:"py-16 mx-auto w-full",children:(0,a.jsx)("ul",{className:"project-list space-y-6",children:0===l.length?(0,a.jsx)("p",{children:"No projects available."}):l.map((e,l)=>(0,a.jsxs)("li",{className:"project-item p-0 bg-white rounded-md transition-all duration-300 relative w-full ".concat(s&&s.id!==e.id?"opacity-50":""),onMouseEnter:()=>i(e),onMouseLeave:()=>i(null),onClick:()=>t(e),children:[(0,a.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("span",{className:"text-xl",children:l+1<10?"0".concat(l+1):l+1}),(0,a.jsx)("h3",{className:"text-lg font-semibold ml-10",children:e.title})]}),(0,a.jsx)("span",{className:"text-sm",children:e.year})]}),s&&s.id===e.id&&(0,a.jsx)("div",{className:"absolute inset-0 bg-transparent opacity-0 rounded-md"})]},e.id))})})};function c(){return(0,a.jsxs)("div",{className:"min-h-screen bg-background pt-0",children:[" ",(0,a.jsx)("div",{className:"py-0",children:(0,a.jsx)(n,{})}),(0,a.jsxs)("div",{className:"container mx-auto px-4",children:[(0,a.jsx)(r,{}),(0,a.jsx)(o,{onProjectClick:e=>{console.log("Project clicked:",e)}})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[677,280,441,517,358],()=>t(6162)),_N_E=e.O()}]);