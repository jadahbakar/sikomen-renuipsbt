(this["webpackJsonpsikomen-renuipsbt"]=this["webpackJsonpsikomen-renuipsbt"]||[]).push([[12],{552:function(e,a,t){"use strict";function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return r}))},565:function(e,a,t){"use strict";var r=t(19),s=t(52),n=t(1),l=t.n(n),c=t(64),o=t.n(c),i=t(514),m=t.n(i),u=t(515),d={tag:u.e,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,n=e.tag,c=Object(s.a)(e,["className","cssModule","tag"]),o=Object(u.c)(m()(a,"card-header"),t);return l.a.createElement(n,Object(r.a)({},c,{className:o}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},674:function(e,a,t){"use strict";var r=t(19),s=t(52),n=t(1),l=t.n(n),c=t(64),o=t.n(c),i=t(514),m=t.n(i),u=t(515),d={tag:u.e,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.color,c=e.body,o=e.inverse,i=e.outline,d=e.tag,b=e.innerRef,p=Object(s.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(u.c)(m()(a,"card",!!o&&"text-white",!!c&&"card-body",!!n&&(i?"border":"bg")+"-"+n),t);return l.a.createElement(d,Object(r.a)({},p,{className:g,ref:b}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},675:function(e,a,t){"use strict";var r=t(19),s=t(52),n=t(1),l=t.n(n),c=t(64),o=t.n(c),i=t(514),m=t.n(i),u=t(515),d={tag:u.e,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},b=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,c=e.tag,o=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.c)(m()(a,"card-body"),t);return l.a.createElement(c,Object(r.a)({},o,{className:i,ref:n}))};b.propTypes=d,b.defaultProps={tag:"div"},a.a=b},807:function(e,a,t){"use strict";var r=t(19),s=t(552),n=t(52),l=t(1),c=t.n(l),o=t(64),i=t.n(o),m=t(514),u=t.n(m),d=t(515);function b(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?b(Object(t),!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var g={children:i.a.node,bar:i.a.bool,multi:i.a.bool,tag:d.e,value:i.a.oneOfType([i.a.string,i.a.number]),min:i.a.oneOfType([i.a.string,i.a.number]),max:i.a.oneOfType([i.a.string,i.a.number]),animated:i.a.bool,striped:i.a.bool,color:i.a.string,className:i.a.string,barClassName:i.a.string,cssModule:i.a.object,style:i.a.object,barAriaValueText:i.a.string,barAriaLabelledBy:i.a.string},E=function(e){var a=e.children,t=e.className,s=e.barClassName,l=e.cssModule,o=e.value,i=e.min,m=e.max,b=e.animated,g=e.striped,E=e.color,f=e.bar,v=e.multi,N=e.tag,j=e.style,O=e.barAriaValueText,y=e.barAriaLabelledBy,h=Object(n.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),_=Object(d.f)(o)/Object(d.f)(m)*100,x=Object(d.c)(u()(t,"progress"),l),T=Object(d.c)(u()("progress-bar",f&&t||s,b?"progress-bar-animated":null,E?"bg-"+E:null,g||b?"progress-bar-striped":null),l),w=v?a:c.a.createElement("div",Object(r.a)({},h,{className:T,style:p(p({},j),{},{width:_+"%"}),role:"progressbar","aria-valuenow":o,"aria-valuemin":i,"aria-valuemax":m,"aria-valuetext":O,"aria-labelledby":y,children:a}));return f?w:c.a.createElement(N,Object(r.a)({},h,{className:x,children:w}))};E.propTypes=g,E.defaultProps={tag:"div",value:0,min:0,max:100,style:{}},a.a=E},828:function(e,a,t){"use strict";var r=t(19),s=t(52),n=t(1),l=t.n(n),c=t(64),o=t.n(c),i=t(514),m=t.n(i),u=t(515),d={className:o.a.string,cssModule:o.a.object,size:o.a.string,bordered:o.a.bool,borderless:o.a.bool,striped:o.a.bool,dark:o.a.bool,hover:o.a.bool,responsive:o.a.oneOfType([o.a.bool,o.a.string]),tag:u.e,responsiveTag:u.e,innerRef:o.a.oneOfType([o.a.func,o.a.string,o.a.object])},b=function(e){var a=e.className,t=e.cssModule,n=e.size,c=e.bordered,o=e.borderless,i=e.striped,d=e.dark,b=e.hover,p=e.responsive,g=e.tag,E=e.responsiveTag,f=e.innerRef,v=Object(s.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),N=Object(u.c)(m()(a,"table",!!n&&"table-"+n,!!c&&"table-bordered",!!o&&"table-borderless",!!i&&"table-striped",!!d&&"table-dark",!!b&&"table-hover"),t),j=l.a.createElement(g,Object(r.a)({},v,{ref:f,className:N}));if(p){var O=Object(u.c)(!0===p?"table-responsive":"table-responsive-"+p,t);return l.a.createElement(E,{className:O},j)}return j};b.propTypes=d,b.defaultProps={tag:"table",responsiveTag:"div"},a.a=b},850:function(e,a,t){"use strict";t.r(a);var r=t(29),s=t(1),n=t.n(s),l=t(526),c=t(828),o=t(687),i=t(688),m=t(674),u=t(565),d=t(675),b=t(807),p=t(156),g=function(e){var a=e.color;return n.a.createElement("hr",{style:{color:a,backgroundColor:a,height:.3,marginTop:0,marginBottom:"0.9em"}})},E=function(e){var a=Object(s.useContext)(p.a).dashboardData.find((function(a){return a.project_id===e.projectId}));return n.a.createElement("div",{id:"results",className:"search-results"},n.a.createElement(c.a,{size:"sm"},n.a.createElement("thead",null,n.a.createElement("tr",{className:"align-middle"},n.a.createElement("th",{colSpan:"2"},"REKAP - Project ID = ",a.project_id," "))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Count NEN"),n.a.createElement("td",{style:{textAlign:"right"}},a.jml_nen)),n.a.createElement("tr",null,n.a.createElement("td",null,"Count EN"),n.a.createElement("td",{style:{textAlign:"right"}},a.jml_en)),n.a.createElement("tr",null,n.a.createElement("td",null,"Count RFC"),n.a.createElement("td",{style:{textAlign:"right"}},a.jml_rfc)),n.a.createElement("tr",null,n.a.createElement("td",null,"Count To Be Submited"),n.a.createElement("td",{style:{textAlign:"right"}},a.jml_tobesubmited)),n.a.createElement("tr",{style:{fontWeight:"bold"}},n.a.createElement("td",null,"Jumlah Dokumen"),n.a.createElement("td",{style:{textAlign:"right"}},a.jml_dokumen)))))};a.default=function(){var e=Object(s.useContext)(p.a),a=Object(l.i)("".concat(e.backEndDashboard),[]);e.setDashboardData(a);var t=Object(s.useState)(!1),c=Object(r.a)(t,2),f=c[0],v=c[1],N=function(){return v(!f)};return n.a.createElement("div",{className:"animated fadeIn"},n.a.createElement(o.a,null,n.a.createElement(i.a,null,n.a.createElement(m.a,null,n.a.createElement(u.a,null,"Process Engineering"," : "," ",n.a.createElement("font",{style:{color:"#10a45f",size:"7.em",weight:"700"}}," NEN / Approved ")),n.a.createElement(d.a,null,a.map((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{key:e.project_id},n.a.createElement(i.a,{xs:"12",sm:"12",md:"8",xl:"8"},n.a.createElement("span",{className:"title font-weight-bold",style:{cursor:"pointer"},onClick:N},e.project_nama),n.a.createElement("ul",null,n.a.createElement("div",{className:"progress-group"},n.a.createElement("div",{className:"progress-group-header"},n.a.createElement("i",{className:"icon-speedometer progress-group-icon"}),n.a.createElement("span",{className:"title"},"NEN"),n.a.createElement("span",{className:"ml-auto font-weight-bold"},e.jml_nen," ",n.a.createElement("span",{className:"text-muted small"},"(",e.persentase_nen," %)"))),n.a.createElement("div",{className:"progress-group-bars"},n.a.createElement(b.a,{className:"progress-xs",color:"success",value:e.persentase_nen}))),n.a.createElement("div",{className:"progress-group"},n.a.createElement("div",{className:"progress-group-header"},n.a.createElement("i",{className:"icon-speedometer progress-group-icon"}),n.a.createElement("span",{className:"title"},"EN"),n.a.createElement("span",{className:"ml-auto font-weight-bold"},e.jml_en," ",n.a.createElement("span",{className:"text-muted small"},"(",e.persentase_en," %)"))),n.a.createElement("div",{className:"progress-group-bars"},n.a.createElement(b.a,{className:"progress-xs",color:"info",value:e.persentase_en}))),n.a.createElement("div",{className:"progress-group"},n.a.createElement("div",{className:"progress-group-header"},n.a.createElement("i",{className:"icon-speedometer progress-group-icon"}),n.a.createElement("span",{className:"title"},"RFC"),n.a.createElement("span",{className:"ml-auto font-weight-bold"},e.jml_rfc," ",n.a.createElement("span",{className:"text-muted small"},"(",e.persentase_rfc," %)"))),n.a.createElement("div",{className:"progress-group-bars"},n.a.createElement(b.a,{className:"progress-xs",color:"warning",value:e.persentase_rfc}))),n.a.createElement("div",{className:"progress-group"},n.a.createElement("div",{className:"progress-group-header"},n.a.createElement("i",{className:"icon-speedometer progress-group-icon"}),n.a.createElement("span",{className:"title"},"To Be Submited"),n.a.createElement("span",{className:"ml-auto font-weight-bold"},e.jml_tobesubmited," ",n.a.createElement("span",{className:"text-muted small"},"(",e.persentase_tobesubmited," %)"))),n.a.createElement("div",{className:"progress-group-bars"},n.a.createElement(b.a,{className:"progress-xs",color:"danger",value:e.persentase_tobesubmited}))),f?n.a.createElement(E,{projectId:e.project_id}):null)),n.a.createElement(i.a,{xs:"12",sm:"12",md:"4",xl:"4"},n.a.createElement(l.a,{series:[e.persentase_nen,e.persentase_en,e.persentase_rfc,e.persentase_tobesubmited],total:e.jml_nen+e.jml_en+e.jml_rfc+e.jml_tobesubmited,colors:["#28a745","#17a2b8","#ffc107","#dc3545"],type:"radialBar",height:210}))),n.a.createElement(g,{color:"#ff9375"}))})))))))}}}]);
//# sourceMappingURL=12.5a42c09e.chunk.js.map