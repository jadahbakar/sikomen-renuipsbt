(this["webpackJsonpsikomen-renuipsbt"]=this["webpackJsonpsikomen-renuipsbt"]||[]).push([[18],{555:function(e,a,t){"use strict";var n=t(536),r=t(1),l=t.n(r);function c(){var e=Object(n.a)(["\n  color: #f86c6b;\n  font-size: 0.813em;\n"]);return c=function(){return e},e}var o=t(537).a.div(c());a.a=function(e){var a=e.error;if(a)switch(a.type){case"required":return l.a.createElement(o,null," Harus Di Isi ");case"minLength":return l.a.createElement(o,null," UserId Harus 2 karakter ");case"pattern":return l.a.createElement(o,null," Alamat Em@il Tidak Sesuai ");default:return null}return null}},597:function(e,a,t){"use strict";var n=t(19),r=t(52),l=t(1),c=t.n(l),o=t(64),s=t.n(o),m=t(514),i=t.n(m),u=t(515),p={tag:u.e,className:s.a.string,cssModule:s.a.object},d=function(e){var a=e.className,t=e.cssModule,l=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),s=Object(u.c)(i()(a,"card-footer"),t);return c.a.createElement(l,Object(n.a)({},o,{className:s}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},830:function(e,a,t){"use strict";var n=t(19),r=t(52),l=t(1),c=t.n(l),o=t(64),s=t.n(o),m=t(514),i=t.n(m),u=t(515),p={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:u.e,className:s.a.string,cssModule:s.a.object},d=function(e){var a=e.className,t=e.cssModule,l=e.row,o=e.disabled,s=e.check,m=e.inline,p=e.tag,d=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),E=Object(u.c)(i()(a,!!l&&"row",s?"form-check":"form-group",!(!s||!m)&&"form-check-inline",!(!s||!o)&&"disabled"),t);return"fieldset"===p&&(d.disabled=o),c.a.createElement(p,Object(n.a)({},d,{className:E}))};d.propTypes=p,d.defaultProps={tag:"div"},a.a=d},851:function(e,a,t){"use strict";t.r(a);var n=t(29),r=t(1),l=t.n(r),c=t(698),o=t(674),s=t(675),m=t(846),i=t(841),u=t(687),p=t(688),d=t(830),E=t(602),g=t(597),f=t(526),h=t(532),b=t.n(h),x=t(103),k=t.n(x),j=t(535),v=(t(16),t(555)),N=t(156),O=function(e){var a=e.color;return l.a.createElement("hr",{style:{color:a,backgroundColor:a,height:.3,marginTop:0,marginBottom:"0.9em"}})};a.default=function(e){var a=Object(j.a)(),t=a.errors,h=a.register,x=a.handleSubmit,P=Object(r.useContext)(N.a),y=Object(r.useState)(""),I=Object(n.a)(y,2),S=I[0],C=I[1],K=Object(r.useState)(""),_=Object(n.a)(K,2),F=_[0],q=_[1],R=Object(r.useState)(""),T=Object(n.a)(R,2),L=T[0],M=T[1],w=Object(r.useState)(""),D=Object(n.a)(w,2),J=D[0],H=D[1],A=Object(r.useState)(""),B=Object(n.a)(A,2),U=B[0],z=B[1],G=Object(r.useState)(""),Q=Object(n.a)(G,2),V=Q[0],W=Q[1],X=Object(r.useState)(""),Y=Object(n.a)(X,2),Z=Y[0],$=Y[1],ee=Object(r.useState)(""),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],re=Object(r.useState)(""),le=Object(n.a)(re,2),ce=le[0],oe=le[1],se=Object(r.useState)(""),me=Object(n.a)(se,2),ie=me[0],ue=me[1],pe=Object(r.useState)([]),de=Object(n.a)(pe,2),Ee=de[0],ge=de[1],fe=Object(r.useState)(""),he=Object(n.a)(fe,2),be=he[0],xe=he[1],ke=Object(r.useState)([]),je=Object(n.a)(ke,2),ve=je[0],Ne=je[1],Oe="".concat(P.backEndMaster,"/projectjeniskategori/").concat(S),Pe=Object(f.i)("".concat(P.backEndKategori),[]),ye=Object(f.i)("".concat(Oe),[S]),Ie=Object(f.i)("".concat(P.backEndPropinsi),[]),Se=function(){e.history.push("/transaksi/projects")},Ce=function(e){return function(){ge(Ee.filter((function(a,t){return e!==t})))}},Ke=function(e){return function(){Ne(ve.filter((function(a,t){return e!==t})))}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{fluid:!0},l.a.createElement(o.a,null,l.a.createElement(s.a,{className:"p-4"},l.a.createElement(m.a,{onSubmit:x((function(e){k.a.post("".concat(P.backEndProject),{action:"i",id:0,kategori:parseInt(S),propinsi:parseInt(L),jenis:parseInt(F),nama:J,nomorKontrak:U,kontraktorNama:V,targetCod:Z,status:te,engineeringStatus:ce,picPln:ve,picKontraktor:Ee}).then((function(e){console.log("response",e),b.a.fire({icon:"success",position:"top-end",title:"Success",text:"ID Project : ".concat(e.data.results),timer:1e3,footer:"@sikomen"}).then((function(e){Se()}))})).catch((function(e){console.log("error",e);var a=e.response.data;e.response.data.includes("duplicate")&&(a="Data Sudah Ada"),b.a.fire({type:"error",title:"Gagal Menyimpan",text:a,timer:1e3,footer:"@sikomen"}).then((function(e){Se()}))}))}))},l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"},"Kategori, Lokasi dan Jenis"),l.a.createElement(O,{color:"#ff9375"}),l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"4",lg:"4",xl:"4",sm:"auto",xs:"auto"},l.a.createElement(f.e,{icon:"icon-list",name:"kategori",value:S,change:function(e){C(e.target.value),q(0),ye.length=0},placeholder:"Kategori",innerRef:h({required:!0}),error:l.a.createElement(v.a,{error:t.kategori})},l.a.createElement("option",{key:"",value:""},"Pilih Kategori..."),Pe.map((function(e){return l.a.createElement("option",{key:e.project_kategori_id,value:e.project_kategori_id},e.project_kategori_nama)})))),l.a.createElement(p.a,{md:"4",lg:"4",xl:"4",sm:"auto",xs:"auto"},l.a.createElement(f.e,{icon:"icon-location-pin",name:"propinsi",value:L,change:function(e){return M(e.target.value)},placeholder:"Propinsi",innerRef:h({required:!0}),error:l.a.createElement(v.a,{error:t.propinsi})},l.a.createElement("option",{key:"",value:""},"Pilih Propinsi..."),Ie.map((function(e){return l.a.createElement("option",{key:e.propinsi_id,value:e.propinsi_id},e.propinsi_nama)})))),l.a.createElement(p.a,{md:"4",lg:"4",xl:"4",sm:"auto",xs:"auto"},l.a.createElement(f.e,{icon:"icon-list",name:"jenis",value:F,change:function(e){return q(e.target.value)},placeholder:"Jenis",innerRef:h({required:!0}),error:l.a.createElement(v.a,{error:t.jenis})},l.a.createElement("option",{key:"",value:""},"Pilih Jenis..."),ye.map((function(e){return l.a.createElement("option",{key:e.project_jenis_id,value:e.project_jenis_id},e.project_jenis_nama)}))))),l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"},"Data Project"),l.a.createElement(O,{color:"#ff9375"}),l.a.createElement(d.a,{row:!0},l.a.createElement(p.a,{md:"2",lg:"2",xl:"2",sm:"auto",xs:"auto"},l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"}," Nama Project ")),l.a.createElement(p.a,{md:"10",lg:"10",xl:"10",sm:"auto",xs:"auto"},l.a.createElement(f.c,{icon:"icon-pencil",name:"namaProject",type:"text",value:J,change:function(e){return H(e.target.value)},placeholder:"Nama Project",innerRef:h({required:!0,minLength:3}),error:l.a.createElement(v.a,{error:t.namaProject})})),l.a.createElement(p.a,{md:"2",lg:"2",xl:"2",sm:"auto",xs:"auto"},l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"}," Nomor Kontrak")),l.a.createElement(p.a,{md:"10",lg:"10",xl:"10",sm:"auto",xs:"auto"},l.a.createElement(f.c,{icon:"icon-pencil",name:"noKontrak",type:"text",value:U,change:function(e){return z(e.target.value)},placeholder:"Nomor Kontrak",innerRef:h({required:!0,minLength:3}),error:l.a.createElement(v.a,{error:t.noKontrak})})),l.a.createElement(p.a,{md:"6",lg:"6",xl:"6",sm:"6",xs:"auto"},l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"3",lg:"3",xl:"3",sm:"3",xs:"auto"},l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"}," Kontraktor ")),l.a.createElement(p.a,{md:"9",lg:"9",xl:"9",sm:"9",xs:"auto"},l.a.createElement(f.c,{icon:"icon-pencil",name:"kontraktor",type:"text",value:V,change:function(e){return W(e.target.value)},placeholder:"Nama Kontraktor",innerRef:h({required:!0,minLength:3}),error:l.a.createElement(v.a,{error:t.noKontrak})})))),l.a.createElement(p.a,{md:"6",lg:"6",xl:"6",sm:"auto",xs:"auto"},l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"4",lg:"4",xl:"4",sm:"auto",xs:"auto"},l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"}," Target COD ")),l.a.createElement(p.a,{md:"8",lg:"8",xl:"8",sm:"auto",xs:"auto"},l.a.createElement(f.c,{icon:"icon-pencil",name:"targetCod",type:"text",value:Z,change:function(e){return $((a=e.target.value)?a.replace(/\D+/,""):"");var a},placeholder:"Target  COD",innerRef:h({required:!0,minLength:4}),error:l.a.createElement(v.a,{error:t.targetCod})})))),l.a.createElement(p.a,{md:"6",lg:"6",xl:"6",sm:"auto",xs:"auto"},l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"3",lg:"3",xl:"3",sm:"3",xs:"auto"},l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"}," Project Status ")),l.a.createElement(p.a,{md:"9",lg:"9",xl:"9",sm:"auto",xs:"auto"},l.a.createElement(f.c,{icon:"icon-pencil",name:"status",type:"text",value:te,change:function(e){return ne(e.target.value)},placeholder:"Project Status",innerRef:h({required:!0,minLength:3}),error:l.a.createElement(v.a,{error:t.status})})))),l.a.createElement(p.a,{md:"6",lg:"6",xl:"6",sm:"auto",xs:"auto"},l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"4",lg:"4",xl:"4",sm:"4",xs:"auto"},l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"}," Enginering Status ")),l.a.createElement(p.a,{md:"8",lg:"8",xl:"8",sm:"auto",xs:"auto"},l.a.createElement(f.c,{icon:"icon-pencil",name:"engineering",type:"text",value:ce,change:function(e){return oe(e.target.value)},placeholder:"Enginering Status",innerRef:h({required:!0}),error:l.a.createElement(v.a,{error:t.engineering})}))))),l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"},"Person In Charge - Kontraktor"),l.a.createElement(O,{color:"#ff8375"}),l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"10",lg:"10",xl:"10",sm:"auto",xs:"auto"},l.a.createElement(f.c,{icon:"fa fa-user",name:"picKontraktor",type:"text",value:ie,change:function(e){return ue(e.target.value)},placeholder:"Nama PIC Kontraktor"})),l.a.createElement(p.a,{md:"2",lg:"2",xl:"2",sm:"auto",xs:"auto"},l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"pull-right"},l.a.createElement(d.a,null,l.a.createElement("div",{className:"control"},l.a.createElement(E.a,{color:"success",block:!0,className:"pr-1",onClick:function(){""!==ie&&Ee.push({picKontraktor:ie.toUpperCase()}),ue("")}},l.a.createElement("i",{className:"fa fa-plus"}),l.a.createElement("span",null,"Tambah PIC")))))))),Ee.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"10",lg:"10",xl:"10",sm:"auto",xs:"auto"},l.a.createElement(f.c,{icon:"fa fa-user",name:"picKontraktor",type:"text",value:e.picKontraktor,isdisabled:!0})),l.a.createElement(p.a,{md:"2",lg:"2",xl:"2",sm:"auto",xs:"auto"},l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"pull-right"},l.a.createElement(d.a,null,l.a.createElement("div",{className:"control"},l.a.createElement(E.a,{color:"danger",block:!0,className:"pr-1",onClick:Ce(a)},l.a.createElement("i",{className:"fa fa-minus"}),l.a.createElement("span",null,"Hapus PIC")))))))))})),l.a.createElement(i.a,{htmlFor:"prependedInput",className:"register-label-header"},"Person In Charge - PLN"),l.a.createElement(O,{color:"#ff9375"}),l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"10",lg:"10",xl:"10",sm:"auto",xs:"auto"},l.a.createElement(f.c,{icon:"fa fa-user-o",name:"picPln",type:"text",value:be,change:function(e){return xe(e.target.value)},placeholder:"Nama PIC PLN"})),l.a.createElement(p.a,{md:"2",lg:"2",xl:"2",sm:"auto",xs:"auto"},l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"pull-right"},l.a.createElement(d.a,null,l.a.createElement("div",{className:"control"},l.a.createElement(E.a,{color:"success",block:!0,className:"pr-1",onClick:function(){""!==be&&ve.push({picPln:be.toUpperCase()}),xe("")}},l.a.createElement("i",{className:"fa fa-plus"}),l.a.createElement("span",null,"Tambah PIC")))))))),ve.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement(u.a,null,l.a.createElement(p.a,{md:"10",lg:"10",xl:"10",sm:"auto",xs:"auto"},l.a.createElement(f.c,{icon:"fa fa-user",name:"picPln",type:"text",value:e.picPln,isdisabled:!0})),l.a.createElement(p.a,{md:"2",lg:"2",xl:"2",sm:"auto",xs:"auto"},l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"pull-right"},l.a.createElement(d.a,null,l.a.createElement("div",{className:"control"},l.a.createElement(E.a,{color:"danger",block:!0,className:"pr-1",onClick:Ke(a)},l.a.createElement("i",{className:"fa fa-minus"}),l.a.createElement("span",null,"Hapus PIC")))))))))})),l.a.createElement(E.a,{color:"success",block:!0,size:"lg"},"TAMBAH PROJECT"))),l.a.createElement(g.a,{className:"text-center"},l.a.createElement(i.a,{htmlFor:"prependedInput"},"Pastikan data yang di Input sudah Benar.")))))}}}]);
//# sourceMappingURL=18.ba91fc80.chunk.js.map