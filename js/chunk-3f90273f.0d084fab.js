(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f90273f"],{"4c93":function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));function a(e){return null===e||void 0===e}function n(e){return Array.isArray(e)&&0===e.length}var o=function(e,r){var t=(void 0===r?{allowFalse:!0}:r).allowFalse,o={valid:!1,required:!0};return a(e)||n(e)?o:!1!==e||t?(o.valid=!!String(e).trim().length,o):o},s=!0,c=[{name:"allowFalse",default:!0}],i={validate:o,params:c,computesRequired:s}},"62ad":function(e,r,t){"use strict";var a=t("ade3"),n=t("5530"),o=(t("13d5"),t("a9e3"),t("b64b"),t("5319"),t("ac1f"),t("4ec9"),t("d3b7"),t("3ca3"),t("ddb0"),t("caad"),t("159b"),t("2ca0"),t("4b85"),t("2b0e")),s=t("d9f7"),c=t("80d2"),i=["sm","md","lg","xl"],l=function(){return i.reduce((function(e,r){return e[r]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return i.reduce((function(e,r){return e["offset"+Object(c["D"])(r)]={type:[String,Number],default:null},e}),{})}(),f=function(){return i.reduce((function(e,r){return e["order"+Object(c["D"])(r)]={type:[String,Number],default:null},e}),{})}(),d={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(f)};function v(e,r,t){var a=e;if(null!=t&&!1!==t){if(r){var n=r.replace(e,"");a+="-".concat(n)}return"col"!==e||""!==t&&!0!==t?(a+="-".concat(t),a.toLowerCase()):a.toLowerCase()}}var m=new Map;r["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},f),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,r){var t=r.props,n=r.data,o=r.children,c=(r.parent,"");for(var i in t)c+=String(t[i]);var l=m.get(c);return l||function(){var e,r;for(r in l=[],d)d[r].forEach((function(e){var a=t[e],n=v(r,e,a);n&&l.push(n)}));var n=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!n||!t.cols},Object(a["a"])(e,"col-".concat(t.cols),t.cols),Object(a["a"])(e,"offset-".concat(t.offset),t.offset),Object(a["a"])(e,"order-".concat(t.order),t.order),Object(a["a"])(e,"align-self-".concat(t.alignSelf),t.alignSelf),e)),m.set(c,l)}(),e(t.tag,Object(s["a"])(n,{class:l}),o)}})},"7f37":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(r){var a=r.invalid;return[t("form",{on:{submit:function(r){return r.preventDefault(),e.submit(r)}}},[t("v-toolbar",{attrs:{flat:""}},[t("v-toolbar-title",[e._v("Novo Usuario")]),t("v-spacer"),t("v-btn",{staticClass:"mx-2",attrs:{type:"submit",disabled:a,color:"primary"}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-content-save")]),e._v("Salvar ")],1),t("v-btn",{staticClass:"mx-2",on:{click:function(r){return r.preventDefault(),e.voltar(r)}}},[t("v-icon",{attrs:{left:""}},[e._v("mdi-backburger")]),e._v("Voltar ")],1)],1),t("validation-provider",{attrs:{name:"nome",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var a=r.errors;return[t("v-text-field",{staticClass:"pa-2",attrs:{"error-messages":a,label:"Nome",required:""},model:{value:e.form.nome,callback:function(r){e.$set(e.form,"nome",r)},expression:"form.nome"}})]}}],null,!0)}),t("v-row",{attrs:{justify:"space-between"}},[t("v-col",{attrs:{cols:"12",md:"4"}},[t("validation-provider",{attrs:{name:"cpf",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var a=r.errors;return[t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"###.###.###-##",expression:"'###.###.###-##'"}],staticClass:"pa-2",attrs:{"error-messages":a,label:"CPF","return-masked-value":"",required:""},model:{value:e.form.cpf,callback:function(r){e.$set(e.form,"cpf",r)},expression:"form.cpf"}})]}}],null,!0)})],1),t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"##/##/####",expression:"'##/##/####'"}],staticClass:"pa-2",attrs:{label:"Data de Nascimento","return-masked-value":""},model:{value:e.form.dataNascimento,callback:function(r){e.$set(e.form,"dataNascimento",r)},expression:"form.dataNascimento"}})],1),t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-select",{staticClass:"pa-2",attrs:{"item-text":"descricao","item-value":"abreviacao",label:"Sexo",items:e.sexoOpcoes},model:{value:e.form.sexo,callback:function(r){e.$set(e.form,"sexo",r)},expression:"form.sexo"}})],1)],1),t("validation-provider",{attrs:{name:"cargo",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var a=r.errors;return[t("v-select",{staticClass:"pa-2",attrs:{items:e.cargoOpcoes,"error-messages":a,"item-text":"nome","item-value":"id","return-object":"",label:"Cargo",required:"","data-vv-name":"cargo"},model:{value:e.form.cargo,callback:function(r){e.$set(e.form,"cargo",r)},expression:"form.cargo"}})]}}],null,!0)}),t("v-select",{staticClass:"pa-2",attrs:{items:e.perfisOpcoes,"item-text":"nome","item-value":"id","return-object":"",multiple:"",label:"Perfis"},model:{value:e.form.perfis,callback:function(r){e.$set(e.form,"perfis",r)},expression:"form.perfis"}})],1)]}}])}),t("v-overlay",{attrs:{value:e.loading}},[t("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)},n=[],o=t("1da1"),s=t("5530"),c=(t("96cf"),t("bc3a")),i=t.n(c),l=t("4c93"),u=t("2919"),f=t("7bb1");Object(f["extend"])("required",Object(s["a"])(Object(s["a"])({},l["a"]),{},{message:"Campo {_field_} deve ser preenchido"}));var d={components:{ValidationProvider:f["ValidationProvider"],ValidationObserver:f["ValidationObserver"]},data:function(){return{loading:!1,form:{cargo:null,perfis:null},sexoOpcoes:[{abreviacao:"M",descricao:"Masculino"},{abreviacao:"F",descricao:"Feminino"}],cargoOpcoes:[],perfisOpcoes:[]}},created:function(){this.buscarCargos(),this.buscarPerfis()},methods:{voltar:function(){this.$router.push({name:"usuarios"})},buscarCargos:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.loading=!0,r.next=4,i.a.get("".concat(u["a"],"/cargos"));case 4:t=r.sent,e.cargoOpcoes=t.data,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),e.$toasted.global.defaultError(r.t0.response.data);case 11:return r.prev=11,e.loading=!1,r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})))()},buscarPerfis:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.loading=!0,r.next=4,i.a.get("".concat(u["a"],"/perfis"));case 4:t=r.sent,e.perfisOpcoes=t.data,r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),e.$toasted.global.defaultError(r.t0.response.data);case 11:return r.prev=11,e.loading=!1,r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})))()},submit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.loading=!0,r.next=4,i.a.post("".concat(u["a"],"/usuarios"),e.form);case 4:t=r.sent,201==t.status&&(e.$toasted.global.defaultSuccess({message:"Usuário criado com sucesso!"}),e.voltar()),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),e.$toasted.global.defaultError(r.t0.response.data);case 11:return r.prev=11,e.loading=!1,r.finish(11);case 14:e.$refs.observer.validate();case 15:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})))()}}},v=d,m=t("2877"),p=t("6544"),b=t.n(p),g=t("8336"),x=t("62ad"),h=t("132d"),O=t("a797"),k=t("490a"),w=t("0fd9"),j=t("b974"),y=t("2fa4"),S=t("8654"),C=t("71d9"),V=t("2a7f"),N=Object(m["a"])(v,a,n,!1,null,null,null);r["default"]=N.exports;b()(N,{VBtn:g["a"],VCol:x["a"],VIcon:h["a"],VOverlay:O["a"],VProgressCircular:k["a"],VRow:w["a"],VSelect:j["a"],VSpacer:y["a"],VTextField:S["a"],VToolbar:C["a"],VToolbarTitle:V["a"]})}}]);
//# sourceMappingURL=chunk-3f90273f.0d084fab.js.map