"use strict";(self.webpackChunkQUESTechBlog=self.webpackChunkQUESTechBlog||[]).push([[568],{8287:function(e,t,n){var a=n(7294),r=n(394),i=n.n(r),l=n(2318),o=n(1597);t.Z=function(e){var t=e.image,n=e.title,r=e.tags,c=e.writeAt;return a.createElement(o.rU,{className:"preview-card",to:"/post/"+n},a.createElement("img",{className:"preview-card__image",src:t||"https://dummyimage.com/1024x800/000/fff",alt:"preview"}),a.createElement("div",{className:"preview-card__body"},a.createElement("div",{className:"preview-card__title"},n||"제목없음"),c?a.createElement("p",{className:"preview-card__description"},i()(c).tz("Asia/Seoul").format("YYYY.MM.DD")):a.createElement(a.Fragment,null),a.createElement("div",{className:"preview-card__tags"},null==r?void 0:r.map((function(e,t){return a.createElement(l.Z,{tag:e,key:e+"-"+t})})))))}},1609:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(7294),r=n(3639),i=n(1597),l=n(9324),o=n(8287);var c=function(e){var t=e.page,n=e.endPage,r=e.onClick,i=function(e,t){return t<=5?Array.from({length:t},(function(e,t){return t+1})):e<=3?Array.from({length:5},(function(e,t){return t+1})):e>=t-2?Array.from({length:5},(function(e,n){return t-4+n})):Array.from({length:5},(function(t,n){return e-2+n}))}(t,n);return a.createElement("div",{className:"pagination"},a.createElement("button",{className:"pagination__button pagination__button--prev",type:"button",disabled:n<1||n<t||t<=1,onClick:function(){n<1||n<t||t<=1||r(t-1)}},a.createElement("i",{className:"material-icons"},"chevron_left")),i.map((function(e){var n=e===t;return a.createElement("button",{key:"pagination-"+e,className:"pagination__button pagination__button--page "+(n?"pagination__button--selected":""),type:"button",disabled:n,onClick:function(){return r(e)}},e)})),a.createElement("button",{className:"pagination__button pagination__button--next",type:"button",disabled:t>=n,onClick:function(){r(t+1)}},a.createElement("i",{className:"material-icons"},"navigate_next")))},u=n(1084);function m(e){var t=e.data,n=e.pageContext;return a.createElement(l.Z,null,a.createElement(u.Z,{title:"QUES 기술 블로그",description:"퀘스 QUES 개발팀 기술블로그",image:"https://avatars.githubusercontent.com/u/76085248?s=200&v=4",url:"https://quesdevteam.github.io/posts"}),a.createElement(r.Z,null,a.createElement("div",{className:"posts-container"},t.allMarkdownRemark.edges.map((function(e){var t,n,r,i,l=e.node;return a.createElement(o.Z,{key:"article-"+l.frontmatter.title,tags:null!==(t=l.frontmatter.tags)&&void 0!==t?t:[],title:l.frontmatter.title,writeAt:l.frontmatter.date,image:null===(n=l.frontmatter.preview)||void 0===n||null===(r=n[0])||void 0===r||null===(i=r.external)||void 0===i?void 0:i.url})})))),a.createElement(c,{endPage:n.numPages,page:n.currentPage,onClick:function(e){return(0,i.c4)("/posts/"+e)}}))}}}]);
//# sourceMappingURL=component---src-templates-posts-index-tsx-18a97b5b17c1ac31dcfb.js.map