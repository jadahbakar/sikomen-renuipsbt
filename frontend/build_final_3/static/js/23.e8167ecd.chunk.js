(this["webpackJsonpsikomen-renuipsbt"]=this["webpackJsonpsikomen-renuipsbt"]||[]).push([[23],{555:function(e,t,a){"use strict";var n=a(536),r=a(1),o=a.n(r);function l(){var e=Object(n.a)(["\n  color: #f86c6b;\n  font-size: 0.813em;\n"]);return l=function(){return e},e}var c=a(537).a.div(l());t.a=function(e){var t=e.error;if(t)switch(t.type){case"required":return o.a.createElement(c,null," Harus Di Isi ");case"minLength":return o.a.createElement(c,null," UserId Harus 2 karakter ");case"pattern":return o.a.createElement(c,null," Alamat Em@il Tidak Sesuai ");default:return null}return null}},863:function(e,t,a){"use strict";a.r(t);var n=a(522),r=a.n(n),o=a(523),l=a(29),c=a(1),i=a.n(c),s=a(698),u=a(674),m=a(675),d=a(846),p=a(841),f=a(687),g=a(688),E=a(602),k=a(565),h=a(526),b=a(535),j=a(105),v=a(836),_=(a(596),a(156)),y=a(555),x=a(684),C=a(532),N=a.n(C),T=a(103),P=a.n(T),w=a(829),O=a.n(w),S={colStyle:{marginTop:"0.5em"},align:{textAlign:"right"}},D=function(e,t,a){return 12*Math.max.apply(Math,Object(x.a)(e.map((function(e){var a="";return"number"===typeof(a="string"===typeof t?O.a.get(e,t):t(e))?a.toString().length:(a||"").length}))).concat([a.length]))},I=function(e){return e=[{Header:"Aksi",width:"201",accessor:"project_id",className:"center",filterable:!1,Cell:function(e){return i.a.createElement("div",null,i.a.createElement(_.a.Consumer,null,(function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(j.b,{to:{pathname:"/transaksi/dokumen",state:{projectId:e.value}},className:"btn ghost-light icon-doc"}),i.a.createElement(E.a,{color:"ghost-danger",onClick:function(){return a={projectId:e.value,url:t.backEndProject,reload:t.reloadTableAfterDelete},void N.a.fire({title:"Hapus ".concat(a.projectId," ?"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",footer:"@sikomen"}).then((function(e){e.isConfirmed&&P.a.post("".concat(a.url),{action:"d",id:a.projectId,kategori:0,propinsi:0,jenis:0,nama:0,nomorKontrak:0,kontraktorNama:0,targetCod:0,status:0,engineeringStatus:0,picPln:[],picKontraktor:[]}).then((function(e){a.reload(a.projectId),N.a.fire({title:"Deleted!",text:"Your Project deleted.",icon:"success",timer:1e3,footer:"@sikomen"})})).catch((function(e){console.log("error",e)}))}));var a}},i.a.createElement("i",{className:"icon-trash"})),i.a.createElement(j.b,{to:{pathname:"/transaksi/rekap",state:{projectId:e.value}},className:"btn ghost-light fa fa-table"}))})))}},{Header:"Project ID",accessor:"project_id",width:"130",Cell:function(e){return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(_.a.Consumer,null,(function(t){return i.a.createElement(E.a,{block:!0,color:"ghost-info"},i.a.createElement(j.b,{to:"/transaksi/projects/edit",onClick:function(){return t.setProjectId(e.value)}},e.value))})))}},{Header:"Nama",accessor:"project_nama",width:D(e,"project_nama","Nama"),filterable:!0,Cell:function(e){return i.a.createElement("div",{style:S.colStyle},e.value)}},{Header:"Nomor Kontrak",accessor:"project_nomor_kontrak",width:D(e,"project_nomor_kontrak","Nomor Kontrak"),filterable:!1,Cell:function(e){return i.a.createElement("div",{style:S.colStyle},e.value)}},{Header:"Nama Kontraktor",accessor:"project_kontraktor_nama",width:D(e,"project_kontraktor_nama","Nama Kontraktor"),filterable:!1,Cell:function(e){return i.a.createElement("div",{style:S.colStyle},e.value)}},{Header:"Target COD",accessor:"project_target_cod",width:D(e,"project_target_cod","Target COD"),filterable:!1,Cell:function(e){return i.a.createElement("div",{style:S.colStyle},e.value)}}]},K=function(e){var t=e.color;return i.a.createElement("hr",{style:{color:t,backgroundColor:t,height:.3,marginTop:0,marginBottom:"0.9em"}})};t.default=function(){var e=Object(c.useContext)(_.a),t=Object(b.a)(),a=t.errors,n=t.register,x=t.handleSubmit,C=Object(c.useState)([]),N=Object(l.a)(C,2),T=N[0],P=N[1],w=Object(h.i)("".concat(e.backEndKategori),[]),O=Object(h.i)("".concat(e.backEndPropinsi),[]),S=function(){var t=Object(o.a)(r.a.mark((function t(a){var n,o,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.value,e.setKategori(n),e.setJenis(0),P([]),o="".concat(e.backEndMaster,"/projectjeniskategori/").concat(n),t.next=7,Object(h.b)("".concat(o));case 7:l=t.sent,P(l);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){e.fetchTableData.length=0}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{fluid:!0},i.a.createElement(u.a,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{onSubmit:x((function(t){e.reloadTableProjects()}))},i.a.createElement(p.a,{htmlFor:"prependedInput",className:"register-label-header"},"Kategori, Lokasi dan Jenis"),i.a.createElement(K,{color:"#ff9375"}),i.a.createElement(f.a,null,i.a.createElement(g.a,{md:"3",lg:"3",xl:"3",sm:"auto",xs:"auto"},i.a.createElement(h.e,{icon:"icon-list",name:"kategori",value:e.kategori,change:S,placeholder:"Kategori",innerRef:n({required:!0}),error:i.a.createElement(y.a,{error:a.kategori})},i.a.createElement("option",{key:"",value:""},"Pilih Kategori..."),w.map((function(e){return i.a.createElement("option",{key:e.project_kategori_id,value:e.project_kategori_id},e.project_kategori_nama)})))),i.a.createElement(g.a,{md:"3",lg:"3",xl:"3",sm:"auto",xs:"auto"},i.a.createElement(h.e,{icon:"icon-location-pin",name:"propinsi",value:e.propinsi,change:function(t){return e.setPropinsi(t.target.value)},placeholder:"Propinsi",innerRef:n({required:!0}),error:i.a.createElement(y.a,{error:a.propinsi})},i.a.createElement("option",{key:"",value:""},"Pilih Propinsi..."),O.map((function(e){return i.a.createElement("option",{key:e.propinsi_id,value:e.propinsi_id},e.propinsi_nama)})))),i.a.createElement(g.a,{md:"3",lg:"3",xl:"3",sm:"auto",xs:"auto"},i.a.createElement(h.e,{icon:"icon-list",name:"jenis",value:e.jenis,change:function(t){return e.setJenis(t.target.value)},placeholder:"Jenis",innerRef:n({required:!0}),error:i.a.createElement(y.a,{error:a.jenis})},i.a.createElement("option",{key:"",value:""},"Pilih Jenis..."),T.map((function(e){return i.a.createElement("option",{key:e.project_jenis_id,value:e.project_jenis_id},e.project_jenis_nama)})))),i.a.createElement(g.a,{md:"3",lg:"3",xl:"3",sm:"auto",xs:"auto"},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(E.a,{color:"light",block:!0,className:"pr-1"},i.a.createElement("i",{className:"icon-magnifier-add"}),i.a.createElement("span",null,"Cari")))))))),i.a.createElement(u.a,null,i.a.createElement(k.a,null,i.a.createElement("i",{className:"fa fa-table"}),"Table of Projects",i.a.createElement("div",{className:"card-header-actions"})),i.a.createElement(m.a,null,i.a.createElement(f.a,null,i.a.createElement(g.a,{xs:"6"},i.a.createElement(j.b,{to:"/transaksi/projects/input"},i.a.createElement(E.a,{className:"btn-dropbox btn-brand mr-1 mb-1"},i.a.createElement("i",{className:"fa fa-plus"}),i.a.createElement("span",null,"Tambah Project"))))),i.a.createElement("div",{style:{marginTop:"0.5em"}}),i.a.createElement(v.a,{data:e.fetchTableData,columns:I(e.fetchTableData),defaultPageSize:9,className:"-striped -highlight",noDataText:"Tidak Terdapat Data",loading:e.loading,filterable:!0}),i.a.createElement("nav",null)))))}}}]);
//# sourceMappingURL=23.e8167ecd.chunk.js.map