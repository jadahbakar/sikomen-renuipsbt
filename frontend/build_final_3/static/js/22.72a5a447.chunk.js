(this["webpackJsonpsikomen-renuipsbt"]=this["webpackJsonpsikomen-renuipsbt"]||[]).push([[22],{597:function(e,a,t){"use strict";var r=t(19),n=t(52),s=t(1),c=t.n(s),o=t(64),l=t.n(o),u=t(514),i=t.n(u),m=t(515),d={tag:m.e,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(m.c)(i()(a,"card-footer"),t);return c.a.createElement(s,Object(r.a)({},o,{className:l}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},864:function(e,a,t){"use strict";t.r(a);var r=t(29),n=t(1),s=t.n(n),c=t(687),o=t(688),l=t(674),u=t(675),i=t(846),m=t(841),d=t(602),f=t(597),p=t(526),g=t(532),b=t.n(g),h=t(103),E=t.n(h),w=t(535),v=t(536);function k(){var e=Object(v.a)(["\n  color: #f86c6b;\n  font-size: 0.813em;\n"]);return k=function(){return e},e}var j=t(537).a.div(k()),P=function(e){var a=e.error;if(a)switch(a.type){case"required":return s.a.createElement(j,null," Harus Di Isi ");case"minLength":return s.a.createElement(j,null," UserId Harus 2 karakter ");default:return null}return null},O=t(156),N=function(e){var a=e.color;return s.a.createElement("hr",{style:{color:a,backgroundColor:a,height:.3,marginTop:0,marginBottom:"0.9em"}})};a.default=function(e){var a=Object(n.useContext)(O.a),t=Object(w.a)(),g=t.errors,h=t.register,v=t.handleSubmit,k=Object(n.useState)(""),j=Object(r.a)(k,2),R=j[0],I=j[1],x=Object(n.useState)(""),y=Object(r.a)(x,2),S=y[0],q=y[1],z=function(e,a,t){b.a.fire({icon:e,title:a,text:t,timer:1e3,footer:"@sikomen"}).then((function(e){I(""),q("")}))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,null,s.a.createElement(o.a,{xs:"12",sm:"12",md:{size:4,offset:4}},s.a.createElement(l.a,null,s.a.createElement(u.a,{className:"p-4"},s.a.createElement(i.a,{onSubmit:v((function(e){R===S&&E.a.post("".concat(a.backEndUsers,"/resetpassword"),{userId:a.user,password:R}).then((function(e){null===e.data.results?z("warning","Password Gagal Di Reset",""):z("success","Password Berhasil Di Reset","")})).catch((function(e){z("error","Gagal Reset Password",e),console.log(e)}))}))},s.a.createElement(m.a,{htmlFor:"prependedInput",className:"register-label-header"},"Reset Password"),s.a.createElement(N,{color:"#ff9375"}),s.a.createElement(p.d,{icon:"icon-lock",name:"password",value:R,change:function(e){return I(e.target.value)},placeholder:"Password",innerRef:h({required:!0}),error:s.a.createElement(P,{error:g.password})}),s.a.createElement(p.d,{icon:"icon-lock",name:"confirmPassword",value:S,change:function(e){return q(e.target.value)},placeholder:"Tulis Ulang Password",innerRef:h({required:!0}),error:s.a.createElement(P,{error:g.confirmPassword})}),s.a.createElement(d.a,{color:"danger",block:!0,size:"lg"},"Reset Password"))),s.a.createElement(f.a,{className:"text-center"},s.a.createElement(m.a,{htmlFor:"prependedInput"},"Pastikan data yang di Input sudah Benar."))))))}}}]);
//# sourceMappingURL=22.72a5a447.chunk.js.map