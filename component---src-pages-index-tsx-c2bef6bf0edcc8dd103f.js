"use strict";(self.webpackChunkQUESTechBlog=self.webpackChunkQUESTechBlog||[]).push([[691],{2163:function(e,t,r){var a=r(7294),n=r(8),l=r.n(n),i=r(9406),c=r(4160),m=r(7530);t.Z=function(e){let{image:t,title:r,tags:n,writer:s,writeAt:o}=e;const u=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(!t&&u.current){const e="linear-gradient(45deg, #fff, #fff)";u.current.style.background=e}}),[t,u]),a.createElement(c.rU,{className:"preview-card",to:"/post/"+(0,m.b)(r)},t?a.createElement("img",{className:"preview-card__image",src:t,alt:"preview"}):a.createElement("div",{className:"preview-card__image",ref:u},a.createElement("div",{className:"preview-card__image__title"},r)),a.createElement("div",{className:"preview-card__body"},a.createElement("div",{className:"preview-card__title"},r||"제목없음"),s||o?a.createElement("p",{className:"preview-card__description"},l()(o).tz("Asia/Seoul").format("YYYY.MM.DD"),s&&" ・ "+s):a.createElement(a.Fragment,null),a.createElement("div",{className:"preview-card__tags"},null==n?void 0:n.map(((e,t)=>a.createElement(i.Z,{tag:e,key:e+"-"+t}))))))}},81:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var a=r(7294),n=r(4160),l=r(7181);var i=function(){return a.createElement("div",{className:"jumbotron"},a.createElement("div",{className:"jumbotron__container"}))},c=r(682),m=r(2163),s=r(7928);function o(){const e=(0,n.K2)("4185773812");return a.createElement(l.Z,null,a.createElement(s.Z,{title:"QUES 기술 블로그",description:"퀘스 QUES 개발팀 기술블로그",image:"https://avatars.githubusercontent.com/u/76085248?s=200&v=4",url:"https://quesdevteam.github.io/"}),a.createElement(i,null),a.createElement(c.Z,{className:"posts-container"},e.allMarkdownRemark.edges.map((e=>{var t,r,n,l;let{node:i}=e;return a.createElement(m.Z,{key:"article-"+i.frontmatter.title,tags:null!==(t=i.frontmatter.tags)&&void 0!==t?t:[],title:i.frontmatter.title,writeAt:i.frontmatter.date,writer:i.frontmatter.writer[0].name,image:null===(r=i.frontmatter.preview)||void 0===r||null===(n=r[0])||void 0===n||null===(l=n.external)||void 0===l?void 0:l.url})}))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c2bef6bf0edcc8dd103f.js.map