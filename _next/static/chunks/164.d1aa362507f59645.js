(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{8164:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var l=r(5893),o=r(7294),i=r(2037),n=r(6240);let c=e=>{let t=(0,n.F)("iconButton");return o.createElement("button",{className:(0,i.Z)(t.iconButton,e.className,e.active&&t.active),title:e.title,type:e.type,style:e.style,disabled:e.disabled,onClick:e.onClick,...e.dataAttributes,...e.ariaAttributes},e.children)};c.defaultProps={type:"button"};var a=r(911),s=r.n(a);let d=e=>{var t,r,l;let a=function(){let[e,t]=(0,o.useState)("undefined"!=typeof document&&"complete"==document.readyState);return(0,o.useEffect)(()=>{function e(){t(!0)}return window.addEventListener("load",e),()=>window.removeEventListener("load",e)},[]),e}(),d=(0,n.F)("carouselSlider"),u=function(e){let[t,r]=(0,o.useState)("undefined"!=typeof document&&!document.hidden);return(0,o.useEffect)(()=>{function t(){r(!document.hidden),e&&e(!document.hidden)}return document.addEventListener("visibilitychange",t),()=>document.removeEventListener("visibilitychange",t)},[]),t}(),m=(0,o.useRef)(),[p,h]=(0,o.useState)(0);function f(){return .5*m.current.clientWidth-.5*m.current.firstChild.clientWidth}function k(){return .5*m.current.clientWidth-.5*m.current.lastChild.clientWidth}return l=()=>{e.moveBlock?m.current.scrollLeft=m.current.clientWidth*p:(m.current.style.setProperty("--padding-left",f()+"px"),m.current.style.setProperty("--padding-right",k()+"px"))},(0,o.useEffect)(()=>(l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[]),!function(e,t){for(var r=arguments.length,l=Array(r>2?r-2:0),i=2;i<r;i++)l[i-2]=arguments[i];let n=(0,o.useRef)();(0,o.useEffect)(()=>{n.current=e},[e]),(0,o.useEffect)(()=>{if(t){let e=setTimeout(()=>n.current(),t);return()=>clearTimeout(e)}},[t,...l])}(()=>{if(e.moveBlock){let e=(p+1)%Math.ceil(m.current.scrollWidth/m.current.clientWidth);m.current.scrollLeft=m.current.clientWidth*e,h(e)}else{let t=m.current.scrollWidth-f()-k(),r=e.children.length;m.current.scrollLeft=t/r*((p+1)%r)}},a&&u&&e.speed,[p]),o.createElement("div",{className:(0,i.Z)(s().carouselSlider,d.carouselSlider,e.className)},o.createElement("div",{className:s().list,ref:m,onScroll:()=>{if(!e.moveBlock){let t=m.current.scrollWidth-f()-k(),r=e.children.length,l=m.current.scrollLeft/t*r+.5|0;l!=p&&h(l)}}},e.children),e.arrows&&o.createElement("nav",{className:d.arrows},o.createElement(c,{ariaAttributes:{"aria-label":"Previous Image"},disabled:p<=0,onClick:()=>{let e=p>0?p-1:p;m.current.scrollLeft=m.current.clientWidth*e,h(e)}},o.createElement(e.iconPrev,null)),o.createElement(c,{ariaAttributes:{"aria-label":"Next Image"},disabled:p>=Math.round((null===(t=m.current)||void 0===t?void 0:t.scrollWidth)/(null===(r=m.current)||void 0===r?void 0:r.clientWidth))-1,onClick:()=>{let e=p<Math.ceil(m.current.scrollWidth/m.current.clientWidth)-1?p+1:p;m.current.scrollLeft=m.current.clientWidth*e,h(e)}},o.createElement(e.iconNext,null))),e.dots&&!e.moveBlock&&o.createElement("nav",{className:d.dots,onClick:t=>{let r=parseFloat(t.target.id);if(!isNaN(r)){let t=m.current.scrollWidth-f()-k(),l=e.children.length;m.current.scrollLeft=t/l*r}}},o.Children.count(e.children)>1&&o.Children.map(e.children,(e,t)=>o.createElement("div",{className:d.dotContainer,id:t.toString()},o.createElement("div",{className:(0,i.Z)(d.dot,t==p&&d.active)})))))};d.defaultProps={speed:5e3};let u=e=>o.createElement("svg",{className:e.className,viewBox:"0 0 32 32",style:{display:"inline-block",verticalAlign:"middle",strokeLinecap:e.strokeLinecap,padding:e.padding,margin:e.margin,width:e.width,height:e.height}},e.outline&&o.createElement("polyline",{style:{fill:"none",stroke:e.colorSecondary,strokeWidth:e.outline},points:"20.5,8 12.4,15.9 20.5,24"}),o.createElement("polyline",{style:{fill:"none",stroke:e.colorPrimary,strokeWidth:e.stroke},points:"20.5,8 12.4,15.9 20.5,24"}));u.defaultProps={colorPrimary:"var(--color-primary)",stroke:1};let m=e=>o.createElement("svg",{className:e.className,viewBox:"0 0 32 32",style:{display:"inline-block",verticalAlign:"middle",strokeLinecap:e.strokeLinecap,padding:e.padding,margin:e.margin,width:e.width,height:e.height}},e.outline&&o.createElement("polyline",{style:{fill:"none",stroke:e.colorSecondary,strokeWidth:e.outline},points:"11.6,8 19.5,15.9 11.6,24"}),o.createElement("polyline",{style:{fill:"none",stroke:e.colorPrimary,strokeWidth:e.stroke},points:"11.6,8 19.5,15.9 11.6,24"}));m.defaultProps={colorPrimary:"var(--color-primary)",stroke:1};let p=e=>o.createElement("svg",{className:e.className,viewBox:"0 0 32 32",style:{display:"inline-block",verticalAlign:"middle",strokeLinecap:e.strokeLinecap,padding:e.padding,margin:e.margin,width:e.width,height:e.height}},e.outline&&o.createElement("path",{style:{fill:"none",stroke:e.colorSecondary,strokeWidth:e.outline},d:"M8,8h16 M24,8v16 M24,8L8,24"}),o.createElement("path",{style:{fill:"none",stroke:e.colorPrimary,strokeWidth:e.stroke},d:"M8,8h16 M24,8v16 M24,8L8,24"}));p.defaultProps={colorPrimary:"var(--color-primary)",stroke:1};var h=r(8656),f=r(7806);function k(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=e.indexOf(t);return -1!=l?e.substring(l+t.length+r):e}var v=r(2925),g=r.n(v),j=e=>{let[t,r]=(0,o.useState)(null);return(0,f.a)(e=>{r(e.matches)},"(max-width: 767px)"),(0,l.jsxs)("li",{className:g().project,children:[(0,l.jsx)("div",{children:(0,l.jsx)("h2",{className:g().name,children:e.project.name})}),null!=t&&(0,l.jsx)(d,{className:g().carousel,speed:4e3+2e3*Math.random(),arrows:!0,dots:!0,iconPrev:()=>(0,l.jsx)(u,{colorPrimary:"var(--color-secondary)",colorSecondary:"var(--color-primary)",stroke:2,strokeLinecap:"round",outline:3}),iconNext:()=>(0,l.jsx)(m,{colorPrimary:"var(--color-secondary)",colorSecondary:"var(--color-primary)",stroke:2,strokeLinecap:"round",outline:3}),children:t?e.project.pictureMobile.map(t=>(0,l.jsx)("div",{className:g().carouselItem,children:(0,l.jsx)(h.Z,{alt:"Project ".concat(e.project.name," image"),ratio:t.height/t.width,thumb:"".concat("https://portfolio.kozakl.smallhost.pl/api","/").concat(t.url,"?w=100&f=jpg"),srcSet:"".concat("https://portfolio.kozakl.smallhost.pl/api","/").concat(t.url,"?w=628&f=jpg 628w,\n                                                 ").concat("https://portfolio.kozakl.smallhost.pl/api","/").concat(t.url,"?w=718&f=jpg 718w"),sizes:"359px"})},t.url)):e.project.pictureDesktop.map(t=>(0,l.jsx)("div",{className:g().carouselItem,children:(0,l.jsx)(h.Z,{alt:"Project ".concat(e.project.name," image"),ratio:t.height/t.width,thumb:"".concat("https://portfolio.kozakl.smallhost.pl/api","/").concat(t.url,"?w=100&f=jpg"),srcSet:"".concat("https://portfolio.kozakl.smallhost.pl/api","/").concat(t.url,"?w=1339&f=jpg 1339w,\n                                                 ").concat("https://portfolio.kozakl.smallhost.pl/api","/").concat(t.url,"?w=1581&f=jpg 1581w,\n                                                 ").concat("https://portfolio.kozakl.smallhost.pl/api","/").concat(t.url,"?w=1844&f=jpg 1844w"),sizes:"(max-width: 1023px) 893px,   1054px"})},t.url))}),(0,l.jsxs)("div",{className:g().responsibilities,children:[(0,l.jsx)("h3",{children:"RESPONSIBILITIES"}),(0,l.jsx)("ul",{children:e.project.responsibilities.map(e=>(0,l.jsxs)("li",{children:["- ",e]},e))})]}),!!e.project.url.length&&(0,l.jsxs)("div",{className:g().url,children:[(0,l.jsx)(p,{colorPrimary:"var(--color-secondary)",stroke:2,margin:"-0.25em 0.25em -0.25em -0.25em",width:"1em"}),(0,l.jsx)("a",{href:e.project.url,target:"_blank",children:k(k(e.project.url,"http://"),"https://")})]})]},e.project.id)},y=r(6925),w=r.n(y),x=e=>(0,l.jsxs)("div",{className:w().work,id:"work",children:[(0,l.jsx)("div",{className:w().angle}),(0,l.jsxs)("div",{className:w().content,children:[(0,l.jsx)("h1",{className:w().headline,children:"Work"}),(0,l.jsx)("ul",{className:w().projects,children:e.projects.map(e=>(0,l.jsx)(j,{project:e},e.id))})]})]})},911:function(e){e.exports={carouselSlider:"CarouselSlider_carouselSlider__0vjZk",list:"CarouselSlider_list__NnxMu"}},6925:function(e){e.exports={work:"Work_work__r3ChI",angle:"Work_angle__wLYEL",content:"Work_content__ML1A2",headline:"Work_headline__wx8st",projects:"Work_projects__BLIEJ"}},2925:function(e){e.exports={project:"ProjectItem_project__h8mg1",name:"ProjectItem_name__z1ys3",carousel:"ProjectItem_carousel__PHICD",carouselItem:"ProjectItem_carouselItem__1FoJ5",responsibilities:"ProjectItem_responsibilities__knxGC",url:"ProjectItem_url__afdTj"}}}]);