(this["webpackJsonpsikomen-renuipsbt"]=this["webpackJsonpsikomen-renuipsbt"]||[]).push([[14],{526:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return d})),a.d(t,"e",(function(){return f})),a.d(t,"h",(function(){return v})),a.d(t,"f",(function(){return z})),a.d(t,"i",(function(){return k})),a.d(t,"b",(function(){return j})),a.d(t,"g",(function(){return N})),a.d(t,"a",(function(){return B}));var n=a(1),r=a.n(n),c=a(838),o=a(839),s=a(686),l=a(840),i=function(e){var t=e.icon,a=e.type,n=e.name,i=e.value,u=e.change,m=e.placeholder,p=e.focus,d=e.innerRef,f=e.error,h=e.isdisabled;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginBottom:"1em"}},r.a.createElement(c.a,null,r.a.createElement(o.a,{addonType:"prepend"},r.a.createElement(s.a,null,r.a.createElement("i",{className:t}))),r.a.createElement(l.a,{name:n,type:a,value:i,onChange:u,placeholder:m,autoComplete:"off",autoFocus:p,innerRef:d,disabled:h})),f))},u=(a(685),a(29)),m=a(602),p={buttonStyle:{position:"absolute",left:"1em",top:"0.7em"}},d=function(e){var t=e.icon,a=e.name,i=e.value,d=e.change,f=e.placeholder,h=e.innerRef,b=Object(n.useState)(!0),g=Object(u.a)(b,2),E=g[0],y=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginBottom:"1em"}},r.a.createElement(c.a,null,r.a.createElement(o.a,{addonType:"prepend"},r.a.createElement(s.a,null,r.a.createElement("i",{className:t}))),r.a.createElement(l.a,{name:a,type:E?"password":"text",value:i,onChange:d,placeholder:f,autoComplete:"off",innerRef:h}),r.a.createElement(o.a,{addonType:"append"},r.a.createElement(m.a,{outline:!0,color:"info",onClick:function(){y(!E)}},r.a.createElement("i",{className:"fa fa-eye",style:p.buttonStyle}))))))},f=function(e){var t=e.icon,a=e.name,n=e.value,i=e.change,u=e.placeholder,m=e.children,p=e.innerRef,d=e.error,f=e.isdisabled;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginBottom:"1em"}},r.a.createElement(c.a,null,r.a.createElement(o.a,{addonType:"prepend"},r.a.createElement(s.a,null,r.a.createElement("i",{className:t}))),r.a.createElement(l.a,{name:a,type:"select",value:n,onChange:i,placeholder:u,autoComplete:"off",innerRef:p,disabled:f},m)),d))},h=(a(157),a(687),a(688),a(841),a(522)),b=a.n(h),g=a(523),E=a(103),y=a.n(E),v=function(e,t,a){var r=Object(n.useState)([]),c=Object(u.a)(r,2),o=c[0],s=c[1];return""!==t&&(y.a.defaults.headers.common.Authorization=t),Object(n.useEffect)((function(){var t=function(){var t=Object(g.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y()(e);case 2:a=t.sent,s(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();a.length>=0&&""!==a[0]&&t(),a!==[]&&0!==a.length||t()}),a),[o]},k=function(e,t){var a=Object(n.useState)([]),r=Object(u.a)(a,2),c=r[0],o=r[1],s=function(){var t=Object(g.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get(e);case 2:a=t.sent,o(a.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){"undefined"===typeof t&&null===t||(t.length>=0&&""!==t[0]&&s(),t!==[]&&0!==t.length||s())}),t),c},j=function(){var e=Object(g.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(t);case 2:return a=e.sent,e.abrupt("return",a.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=a(532),S=a.n(x),w=a(544),z=function(e,t,a,n,r){S.a.fire({icon:e,title:t,html:a,timer:n,footer:w.description}).then((function(e){r()}))},O=(a(569),a(514)),C=a.n(O),N=function(e){var t=e.rounded,a=void 0!==t&&t,n=e.isToogled,c=e.onToogle,o=C()("slider",{rounded:a});return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:n,onChange:c}),r.a.createElement("span",{className:o})))},R=a(603),T=a.n(R),B=function(e){var t=e.total,a=e.series,n=e.colors,c=e.height;console.log("total",t);var o={chart:{height:350,type:"radialBar"},colors:n,plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return t}}}}},labels:["NEN","EN","RFC","TBS"]};return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{options:o,series:a,type:"radialBar",height:c}))}},544:function(e){e.exports=JSON.parse('{"name":"sikomen-renuipsbt","version":"1.0.0","description":"SiKomen","author":{"name":"Dedy Styawan & Shandy Siswandy","url":"http://teknotama.id","github":"https://github.com/jadahbakar"},"contributors":[{"name":"Dedy Styawan & Shandy Siswandy","url":"http://dotcode.id"}],"homepage":".","copyright":"Copyright 2020 SiKomen - DotCode - creativeLabs \u0141ukasz Holeczek","license":"https://coreui.io/pro/license/","private":true,"repository":{"type":"git","url":"git@github.com:jadahbakar/sikomen-renuipsbt.git"},"dependencies":{"@coreui/coreui-plugin-chartjs-custom-tooltips":"^1.3.1","@coreui/coreui-pro":"^2.1.16","@coreui/icons":"0.3.0","@coreui/react":"^2.5.4","apexcharts":"^3.22.0","axios":"^0.19.1","bootstrap":"^4.4.1","chart.js":"^2.8.0","classnames":"^2.2.6","codemirror":"^5.52.0","core-js":"^3.6.2","crypto-js":"^4.0.0","enzyme":"^3.11.0","enzyme-adapter-react-16":"^1.15.2","fast-json-stringify":"^1.16.4","flag-icon-css":"^3.3.0","font-awesome":"^4.7.0","form-data":"^3.0.0","node-sass":"^4.14.1","prop-types":"^15.7.2","rc-switch":"^3.2.1","react":"^16.12.0","react-apexcharts":"^1.3.7","react-app-polyfill":"^1.0.5","react-big-calendar":"^0.21.0","react-bootstrap-table":"4.3.1","react-chartjs-2":"^2.8.0","react-codemirror2":"^6.0.0","react-dates":"^20.2.3","react-dom":"^16.12.0","react-google-maps":"9.4.5","react-grid-layout":"^0.17.1","react-hook-form":"^4.9.8","react-ladda":"6.0.0","react-quill":"1.3.3","react-router-config":"^5.1.1","react-router-dom":"^5.1.2","react-scroll":"^1.7.16","react-select":"^3.0.8","react-table":"^6.11.5","react-test-renderer":"^16.12.0","react-text-mask-hoc":"^0.11.0","react-toastify":"^5.4.0","reactstrap":"^8.4.1","simple-line-icons":"^2.4.1","spinkit":"^2.0.0","styled-components":"^5.0.1","sweetalert2":"^9.8.1","sweetalert2-react-content":"^3.0.1"},"devDependencies":{"mutationobserver-shim":"^0.3.3","react-scripts":"^3.4.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","test:cov":"npm test -- --coverage --watchAll=false","test:debug":"react-scripts --inspect-brk test --runInBand","eject":"react-scripts eject"},"bugs":{"url":"https://github.com/coreui/coreui-pro-react-admin-template/issues"},"eslintConfig":{"extends":"react-app"},"browserslist":[">0.2%","not dead","not ie <= 10","not op_mini all"],"jest":{"collectCoverageFrom":["src/**/*.{js,jsx}","!**/*index.js","!src/serviceWorker.js","!src/polyfill.js"]},"engines":{"node":">=8.10","npm":">=6"},"standard":{"globals":["sessionStorage","fetch"]}}')},569:function(e,t,a){},859:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),o=a(698),s=a(103),l=a.n(s),i=a(51),u=a(526),m=a(598),p=[{path:"/",name:"Home",component:y,exact:!0},{path:"/dashboard",name:"Dashboard",component:r.a.lazy((function(){return a.e(12).then(a.bind(null,850))}))},{path:"/transaksi/projects",exact:!0,name:"Projects",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(13),a.e(23)]).then(a.bind(null,863))}))},{path:"/transaksi/projects/input",exact:!0,name:"Input",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(18)]).then(a.bind(null,851))}))},{path:"/transaksi/projects/edit",exact:!0,name:"Edit",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(17)]).then(a.bind(null,852))}))},{path:"/transaksi/dokumen",exact:!0,name:"Dokumen",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(10)]).then(a.bind(null,857))}))},{path:"/approvallist/approval",exact:!0,name:"Approval",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,853))}))},{path:"/transaksi/rekap",exact:!0,name:"Rekap",component:r.a.lazy((function(){return a.e(15).then(a.bind(null,854))}))},{path:"/passwordreset",exact:!0,name:"PasswordReset",component:r.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(22)]).then(a.bind(null,864))}))}],d=a(156),f="".concat(i.a,"/users"),h=r.a.lazy((function(){return a.e(19).then(a.bind(null,856))})),b=r.a.lazy((function(){return a.e(24).then(a.bind(null,848))})),g=r.a.lazy((function(){return Promise.all([a.e(7),a.e(20)]).then(a.bind(null,860))})),E=function(){return r.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},r.a.createElement("div",{className:"sk-spinner sk-spinner-pulse"}))},y=t.default=function(e){var t,a=Object(n.useContext)(d.a),s="Bearer "+sessionStorage.getItem("tkn");Object(n.useEffect)((function(){a.setToken(s),a.setUser(sessionStorage.getItem("userid")),sessionStorage.removeItem("userid")}),[]);var i=Object(u.h)("".concat(a.backEndUsers,"/menu"),s,[])[0].results;void 0!==i&&(t={items:i.userMenu.map((function(e){return e.menu}))});l.a.defaults.headers.common.Authorization=s,l.a.get("".concat(a.backEndUsers,"/checktoken")).then((function(e){"success"===e.data.status&&"fail"===e.data.results.statusToken&&y()})).catch((function(e){console.log("error",e),e.status||y()}));var y=function(){sessionStorage.clear(),e.history.push("/login")};return r.a.createElement("div",{className:"app"},r.a.createElement(m.d,{fixed:!0},r.a.createElement(n.Suspense,{fallback:E()},r.a.createElement(g,{onLogout:function(t){return function(t){t.preventDefault();l.a.defaults.headers.common.Authorization=s,l.a.post("".concat(f,"/logout"),{action:"expired"}).then((function(t){"success"===t.data.status&&"ok"===t.data.results.statusToken&&(sessionStorage.clear(),e.history.push("/login"))})).catch((function(e){e&&console.log(e)}))}(t)},onReset:function(t){e.history.push("/passwordreset")}}))),r.a.createElement("div",{className:"app-body"},r.a.createElement(m.f,{fixed:!0,display:"lg"},r.a.createElement(m.i,null),r.a.createElement(m.h,null),r.a.createElement(n.Suspense,null,r.a.createElement(m.k,Object.assign({navConfig:t},e))),r.a.createElement(m.g,null),r.a.createElement(m.j,null)),r.a.createElement("main",{className:"main"},r.a.createElement(m.b,{appRoutes:p}),r.a.createElement(o.a,{fluid:!0},r.a.createElement(n.Suspense,{fallback:E()},r.a.createElement(c.d,null,p.map((function(e,t){return e.component?r.a.createElement(c.b,{key:t,path:e.path,exact:e.exact,name:e.name,render:function(t){return r.a.createElement(e.component,t)}}):null})),r.a.createElement(c.a,{from:"/",to:"/dashboard"}))))),r.a.createElement(m.a,{fixed:!0},r.a.createElement(n.Suspense,{fallback:E()},r.a.createElement(h,null)))),r.a.createElement(m.c,null,r.a.createElement(n.Suspense,{fallback:E()},r.a.createElement(b,null))))}}}]);
//# sourceMappingURL=14.57a78404.chunk.js.map