"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[253],{253:function(e,t,r){r.r(t),r.d(t,{default:function(){return b}});var n=r(861),a=r(439),c=r(757),i=r.n(c),s=r(243),u="https://api.themoviedb.org/3",o="6c7e0dbf534467d4aac979504763e884";function h(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("".concat(u,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var p=r(25),m=r(906),f=r(413),v=r(887),d=r(184),x=function(e){var t,r=e.onSubmit,n=(0,v.cI)(),a=n.register,c=n.handleSubmit,i=n.reset,s=n.formState.errors;return(0,d.jsxs)("form",{onSubmit:c((function(e,t){e.movieSearch||(s.movieSearch={type:"required",message:"Search field cannot be empty"}),0===Object.keys(s).length&&(r({query:e.movieSearch}),i())})),children:[s.movieSearch&&(0,d.jsx)("div",{children:null===(t=s.movieSearch)||void 0===t?void 0:t.message}),(0,d.jsx)("input",(0,f.Z)({name:"movieSearch",type:"text"},a("movieSearch"))),(0,d.jsx)("button",{type:"submit",children:"Search"})]})},S=r(791),y=r(87),b=function(){var e=(0,S.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],s=(0,y.lr)(),u=(0,a.Z)(s,2),o=u[0],l=u[1],f=(0,S.useState)(!1),v=(0,a.Z)(f,2),b=v[0],j=v[1],g=o.get("query");return(0,S.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,h(g);case 4:t=e.sent,c(t),j(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}g&&function(){e.apply(this,arguments)}()}),[o,g]),(0,d.jsxs)("div",{children:[b&&(0,d.jsx)(p.Z,{}),(0,d.jsx)(x,{onSubmit:function(e){l(e)}}),(0,d.jsx)(m.Z,{array:r})]})}},906:function(e,t,r){r(791);var n=r(689),a=r(87),c=r(184);t.Z=function(e){var t=e.array,r=(0,n.TH)(),i=r.pathname.includes("/movies")?"":"movies/";return(0,c.jsx)("ul",{children:t.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"".concat(i).concat(e.id),state:{from:r},children:e.title})},e.id)}))})}}}]);
//# sourceMappingURL=253.5291ea11.chunk.js.map