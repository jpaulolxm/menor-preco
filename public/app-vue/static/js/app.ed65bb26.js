(function(t){function e(e){for(var a,s,r=e[0],l=e[1],c=e[2],u=0,h=[];u<r.length;u++)s=r[u],i[s]&&h.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(h.length)h.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var l=n[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/app-vue/static/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"25df":function(t,e,n){t.exports=n.p+"img/cart.c5bdb58c.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("menu-tree-view-component"),n("v-content",[n("v-container",{staticStyle:{padding:"5px"},attrs:{fluid:"","fill-height":""}},[n("keep-alive",[n("router-view")],1)],1)],1),n("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"green",dark:"",fixed:""},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",[t._v("add")])],1),n("index-configuracao-component",{attrs:{dialog:t.dialog}})],1)},r=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,color:"teal darken-1",dark:"",app:"",fixed:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[n("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("span",{staticClass:"hidden-sm-and-down"},[t._v("Menor Preço")])],1),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{dark:"",icon:""}},a),[n("v-avatar",{attrs:{size:"32px",tile:""}},[n("img",{attrs:{src:t.images.logo,alt:"Vuetify"}})])],1)]}}])},[n("v-list",t._l(t.dropdownMenu,function(e,a){return n("v-list-tile",{key:a,on:{click:function(t){}}},[n("v-list-tile-title",{on:{click:t.logout}},[t._v(t._s(e.title))])],1)}),1)],1)],1),n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t._l(t.stateMenuTreeView,function(e){return[e.heading?n("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs6:""}},[e.heading?n("v-subheader",[t._v("\n                            "+t._s(e.heading)+"\n                        ")]):t._e()],1),n("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[n("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?n("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-tile",[n("v-list-tile-content",[t._v("\n                                "+t._s(e.text)+"\n                            ")])],1)]},proxy:!0}],null,!0),model:{value:e.model,callback:function(n){t.$set(e,"model",n)},expression:"item.model"}}):n("v-list-tile",{key:e.text,on:{click:function(n){return t.router(e.route)}}},[n("v-list-tile-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticStyle:{"text-decoration":"none"}},[t._v("\n                                "+t._s(e.text)+"\n                            ")])],1)],1)]})],2)],1)],1)},c=[],d={data:function(){return{drawer:null,images:{logo:n("25df")},dropdownMenu:[{title:"Sair",value:"/logout"}]}},methods:{router:function(t){this.$router.push({name:t})},logout:function(){axios.post("/logout").then(function(t){window.location.reload()}.bind(this)).catch(function(t){}.bind(this))}},computed:{stateMenuTreeView:function(){return this.$store.state.menuTreeView}}},u=d,h=n("2877"),p=Object(h["a"])(u,l,c,!1,null,"26bd02a8",null),f=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{persistent:"","max-width":"800px"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[n("v-card",[n("v-card-title",{staticClass:"grey lighten-4 py-4 title"},[t._v("\n               Adicionar Filtros\n            ")]),n("v-container",{staticClass:"pa-4",attrs:{"grid-list-sm":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{"prepend-icon":"place",placeholder:"Filtro"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"error"},on:{click:function(e){t.showDialog=!1}}},[t._v("Cancelar")]),n("v-btn",{attrs:{flat:"",color:"success"},on:{click:t.submit}},[t._v("Salvar")])],1)],1)],1),n("notify-component",{attrs:{show:t.notify.show,y:t.notify.y,x:t.notify.x,mode:t.notify.mode,timeout:t.notify.timeout,text:t.notify.text,type:t.notify.type}})],1)},g=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-snackbar",{attrs:{bottom:"bottom"===t.y,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("\n            "+t._s(t.value)+"\n        "),n("v-btn",{attrs:{color:"green",flat:""},on:{click:function(e){t.show=!1}}},[t._v("\n            Fechar\n        ")])],1)],1)},x=[],y=(n("c5f6"),{name:"NotifyComponent",data:function(){return{value:""}},props:{show:{type:Boolean,required:!0},y:{type:String,required:!0},x:{type:String,required:!0},mode:{type:String,required:!0},timeout:{type:Number,required:!0},text:{type:String,required:!0},type:{type:String,required:!0}},methods:{messager:function(t){try{for(var e in t.response.data.errors)this.value+=t.response.data.errors[e][0]}catch(n){this.value="REQUEST ERRO"}}},watch:{show:function(){this.value="","error"===this.type?this.messager(this.text):this.value=this.text}}}),b=y,_=Object(h["a"])(b,m,x,!1,null,"d5aaad90",null),w=_.exports,k={name:"IndexConfiguracaoComponent",components:{NotifyComponent:w},data:function(){return{form:{name:""},notify:{show:!1,y:"top",x:"",mode:"",timeout:6e3,text:"",type:""},showDialog:!1}},props:{dialog:Boolean},methods:{submit:function(){axios.post("filtros",this.form).then(function(t){this.notify.show=!0,this.notify.y="top",this.notify.x="right",this.notify.mode="multi-line",this.notify.text="Cadastro efetuado com sucesso!",this.notify.type="sucesso",this.showDialog=!1}.bind(this)).catch(function(t){this.notify.show=!0,this.notify.y="top",this.notify.x="right",this.notify.mode="multi-line",this.notify.text=t,this.notify.type="error"}.bind(this))}},watch:{dialog:function(){this.showDialog=this.dialog}}},C=k,D=Object(h["a"])(C,v,g,!1,null,"676a9502",null),E=D.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("v-toolbar",{attrs:{dark:"",color:"teal lighten-2"}},[n("v-toolbar-title",{staticClass:"white--text"},[t._v("Importação")]),n("v-spacer"),n("v-toolbar-title",{staticClass:"white--text",staticStyle:{"font-size":"12px",cursor:"pointer"},on:{click:t.btnDownload}},[t._v("Download planilha padrão")]),n("v-btn",{attrs:{icon:""},on:{click:t.btnDownload}},[n("v-icon",[t._v("arrow_downward")])],1)],1),n("v-flex",[n("div",{staticStyle:{width:"100%"}},[n("v-text-field",{staticStyle:{float:"left",width:"600px"},attrs:{label:"Selecione uma planilha","prepend-icon":"attach_file"},on:{click:t.pickFile},model:{value:t.fileName,callback:function(e){t.fileName=e},expression:"fileName"}}),n("v-spacer"),n("v-btn",{staticStyle:{float:"left"},attrs:{color:"info"},on:{click:function(e){return e.preventDefault(),t.pickFile(e)}}},[t._v("Selecionar")]),n("v-spacer"),n("input",{ref:"fileUpload",staticStyle:{display:"none"},attrs:{name:"fileUpload",type:"file",accept:".xlsx"},on:{change:t.onFilePicked}}),n("v-btn",{attrs:{color:"success"},on:{click:function(e){return e.preventDefault(),t.sendUpload(e)}}},[t._v("Importar")])],1)]),n("br"),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headersTable,items:t.desserts,pagination:t.pagination,"select-all":"","item-key":"id",loading:t.loading,"no-data-text":"Nenhum produto encontrato"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",[n("th",[n("v-checkbox",{attrs:{"input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},on:{click:function(e){return e.stopPropagation(),t.toggleAll(e)}}})],1),t._l(e.headers,function(e){return n("th",{key:e.text,staticClass:"text-xs-left",class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"active":""],on:{click:function(n){return t.changeSort(e.value)}}},[n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]),t._v("\n                    "+t._s(e.text)+"\n                ")],1)})],2)]}},{key:"items",fn:function(e){return[n("tr",[n("td",[n("v-checkbox",{attrs:{"input-value":e.selected,primary:"","hide-details":""}})],1),n("td",{staticClass:"text-xs-center"},[t._v("\n                    "+t._s(e.item.id)+"\n                ")]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[t._v(t._s(e.item.queue.descricao))]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[t._v(t._s(e.item.queue.file_name))]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[t._v(t._s(e.item.created_at))]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[n("v-btn",{attrs:{color:e.item.situacao.class_button,small:""},on:{click:function(n){return t.btnDownloadFile(e.item.situacao.id,e.item.id)}}},[t._v(t._s(e.item.situacao.name))])],1)])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),n("notify-component",{attrs:{show:t.notify.show,y:t.notify.y,x:t.notify.x,mode:t.notify.mode,timeout:t.notify.timeout,text:t.notify.text,type:t.notify.type}})],1)},A=[],O=(n("ac6a"),n("7f7f"),{name:"IndexImportacaoComponent",components:{NotifyComponent:w},data:function(){return{loading:!1,btnLoadin:!1,tipoAgenda:[],msgError:"",headers:axios.defaults.headers.common,file:"",fileName:"",idTipoAgenda:"",uploadPorcent:0,dialog:!1,fileUrl:"",produtos:[],selected:[],headersTable:[{text:"ID",value:"ID"},{text:"DESCRICAO",value:"DESCRICAO"},{text:"NOME DO AQUIVO",value:"NOME DO AQUIVO"},{text:"DATA",value:"DATA"}],desserts:[],notify:{show:!1,y:"top",x:"",mode:"",timeout:6e3,text:"",type:""}}},methods:{pickFile:function(){this.$refs.fileUpload.click()},onFilePicked:function(t){var e=this,n=t.target.files;if(void 0!==n[0]){if(this.fileName=n[0].name,this.fileName.lastIndexOf(".")<=0)return;var a=new FileReader;a.readAsDataURL(n[0]),a.addEventListener("load",function(){e.fileUrl=a.result,e.file=n[0]})}else this.fileName="",this.file="",this.fileUrl=""},btnDownload:function(){axios({method:"post",url:"download-planilha-padrao",responseType:"arraybuffer"}).then(function(t){this.loading=!1,this.$forceDownload(t,"consultaPreco.xlsx")}.bind(this)).catch(function(t){}).then(function(){}.bind(this))},btnDownloadFile:function(t,e){2===t&&(this.loading=!0,axios({method:"post",url:"consulta-download",responseType:"arraybuffer",data:{idFile:e}}).then(function(t){this.loading=!1,this.$forceDownload(t,"consulta-"+e+".csv")}.bind(this)).catch(function(){this.loading=!1}).then(function(){this.loading=!1}.bind(this)))},listarDownloads:function(){this.btnLoadin=!0,axios.post("download-listar").then(function(t){this.desserts=t.data,this.btnLoadin=!1}.bind(this)).catch(function(t){this.btnLoadin=!1}.bind(this))},sendUpload:function(){var t=new FormData;t.append("fileUpload",this.file),axios.post("importar",t,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){this.produtos=t.data.matriz,this.notify.show=!1,this.Queues()}.bind(this)).catch(function(t){this.notify.show=!0,this.notify.y="top",this.notify.x="right",this.notify.mode="multi-line",this.notify.text=t,this.notify.type="error"}.bind(this)).then(function(){}.bind(this))},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.desserts.slice()},changeSort:function(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)},Queues:function(){this.listarDownloads(),setInterval(function(){this.listarDownloads(),this.desserts.forEach(function(t){t.situacao.id})}.bind(this),1e4)}},mounted:function(){}}),I=O,j=Object(h["a"])(I,S,A,!1,null,"688ed84e",null),M=j.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm1":""}},[n("v-card",[n("v-img",{staticClass:"white--text",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline"},[t._v("Top 10 Australian beaches")])])],1)],1)],1),n("v-card-title",[n("div",[n("span",{staticClass:"grey--text"},[t._v("Number 10")]),n("br"),n("span",[t._v("Whitehaven Beach")]),n("br"),n("span",[t._v("Whitsunday Island, Whitsunday Islands")])])]),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Share")]),n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Explore")])],1)],1)],1),n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm1":""}},[n("v-card",[n("v-img",{staticClass:"white--text",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline"},[t._v("Top 10 Australian beaches")])])],1)],1)],1),n("v-card-title",[n("div",[n("span",{staticClass:"grey--text"},[t._v("Number 10")]),n("br"),n("span",[t._v("Whitehaven Beach")]),n("br"),n("span",[t._v("Whitsunday Island, Whitsunday Islands")])])]),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Share")]),n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Explore")])],1)],1)],1)],1),n("br"),n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm1":""}},[n("v-card",[n("v-img",{staticClass:"white--text",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline"},[t._v("Top 10 Australian beaches")])])],1)],1)],1),n("v-card-title",[n("div",[n("span",{staticClass:"grey--text"},[t._v("Number 10")]),n("br"),n("span",[t._v("Whitehaven Beach")]),n("br"),n("span",[t._v("Whitsunday Island, Whitsunday Islands")])])]),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Share")]),n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Explore")])],1)],1)],1),n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm1":""}},[n("v-card",[n("v-img",{staticClass:"white--text",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"fill-height":""}},[n("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[n("span",{staticClass:"headline"},[t._v("Top 10 Australian beaches")])])],1)],1)],1),n("v-card-title",[n("div",[n("span",{staticClass:"grey--text"},[t._v("Number 10")]),n("br"),n("span",[t._v("Whitehaven Beach")]),n("br"),n("span",[t._v("Whitsunday Island, Whitsunday Islands")])])]),n("v-card-actions",[n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Share")]),n("v-btn",{attrs:{flat:"",color:"orange"}},[t._v("Explore")])],1)],1)],1)],1)],1)},$=[],B={name:"Cards"},N=B,P=Object(h["a"])(N,T,$,!1,null,"39d109b0",null),U=P.exports,F={name:"IndexComponent",components:{MenuTreeViewComponent:f,VCardsComponent:U,IndexImportacaoComponent:M,IndexConfiguracaoComponent:E},data:function(){return{drawer:null,dialog:!1}},props:{source:String},methods:{}},R=F,q=Object(h["a"])(R,s,r,!1,null,"05466f0a",null),L=q.exports,V={components:{IndexComponent:L}},W=V,Q=Object(h["a"])(W,i,o,!1,null,null,null),z=Q.exports,J=n("8c4f"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("v-toolbar",{attrs:{dark:"",color:"teal lighten-2"}},[n("v-toolbar-title",{staticClass:"white--text"},[t._v("Gerar Download")]),n("v-btn",{attrs:{icon:""},on:{click:t.btnDownloadArquivo}},[n("v-icon",[t._v("arrow_downward")])],1),n("v-btn",{attrs:{icon:""},on:{click:t.listarDownloads}},[n("v-icon",[t._v("refresh")])],1)],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,pagination:t.pagination,"select-all":"","item-key":"id",loading:t.loading,"no-data-text":"Nenhum produto encontrato"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",[n("th",[n("v-checkbox",{attrs:{"input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},on:{click:function(e){return e.stopPropagation(),t.toggleAll(e)}}})],1),t._l(e.headers,function(e){return n("th",{key:e.text,staticClass:"text-xs-left",class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"active":""],on:{click:function(n){return t.changeSort(e.value)}}},[n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]),t._v("\n                    "+t._s(e.text)+"\n                ")],1)})],2)]}},{key:"items",fn:function(e){return[n("tr",[n("td",[n("v-checkbox",{attrs:{"input-value":e.selected,primary:"","hide-details":""}})],1),n("td",{staticClass:"text-xs-center"},[t._v("\n                    "+t._s(e.item.id)+"\n                ")]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[t._v(t._s(e.item.descricao))]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[t._v(t._s(e.item.file_name))]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[t._v(t._s(e.item.created_at))]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[n("v-btn",{attrs:{color:"success"},on:{click:function(n){return t.btnDownload(e.item.id)}}},[t._v("Download")])],1)])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),n("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("v-card",{attrs:{color:"primary",dark:""}},[n("v-card-text",[t._v("\n                Por favor aguarde...\n                "),n("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1)],1)},H=[],K={name:"DownloadConsultasComponent",data:function(){return{alerta:{value:!1,msg:"Error",color:"error",icon:"warning"},loading:!1,btnLoadin:!1,selected:[],headers:[{text:"ID",value:"ID"},{text:"DESCRICAO",value:"DESCRICAO"},{text:"NOME DO AQUIVO",value:"NOME DO AQUIVO"},{text:"DATA",value:"DATA"}],desserts:[]}},methods:{btnDownload:function(t){this.loading=!0,axios({method:"post",url:"consulta-download",responseType:"arraybuffer",data:{idFile:t}}).then(function(e){this.loading=!1,this.$forceDownload(e,"consulta-"+t+".csv")}.bind(this)).catch(function(){this.loading=!1}).then(function(){this.loading=!1}.bind(this))},btnDownloadArquivo:function(){this.loading=!0,this.btnLoadin=!0,axios.post("gerar-download").then(function(t){this.btnLoadin=!1,this.loading=!1,this.listarDownloads()}.bind(this)).catch(function(t){this.btnLoadin=!1,this.loading=!1}.bind(this))},listarDownloads:function(){this.btnLoadin=!0,axios.post("download-listar").then(function(t){this.desserts=t.data,this.btnLoadin=!1}.bind(this)).catch(function(t){this.btnLoadin=!1}.bind(this))},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.desserts.slice()},changeSort:function(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)}},mounted:function(){this.listarDownloads()}},X=K,Y=Object(h["a"])(X,G,H,!1,null,"373ad070",null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("v-toolbar",{attrs:{dark:"",color:"teal lighten-2"}},[n("v-toolbar-title",{staticClass:"white--text"},[t._v("Filtros")]),n("v-btn",{attrs:{icon:"",large:""},on:{click:t.listar}},[n("v-icon",[t._v("refresh")])],1),n("v-btn",{attrs:{icon:"",large:""},on:{click:t.destroy}},[n("v-icon",[t._v("cancel")])],1),n("v-menu",{attrs:{bottom:"",right:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({attrs:{dark:"",icon:""}},a),[n("v-icon",[t._v("more_vert")])],1)]}}])},[n("v-list",t._l(t.dropdownMenu,function(e,a){return n("v-list-tile",{key:a,on:{click:function(t){}}},[n("v-list-tile-title",{on:{click:function(n){return t.pesquisa(e.value)}}},[t._v(t._s(e.title))])],1)}),1)],1),n("v-text-field",{attrs:{"append-icon":"search",label:"Pesquisar","single-line":"","hide-details":""},on:{change:function(e){return t.pesquisa("")}},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,pagination:t.pagination,"select-all":"","item-key":"id",loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",[n("th",[n("v-checkbox",{attrs:{"input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},on:{click:function(e){return e.stopPropagation(),t.toggleAll(e)}}})],1),t._l(e.headers,function(e){return n("th",{key:e.text,staticClass:"text-xs-left",class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"active":""],on:{click:function(n){return t.changeSort(e.value)}}},[n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]),t._v("\n                    "+t._s(e.text)+"\n                ")],1)})],2)]}},{key:"items",fn:function(e){return[n("tr",{attrs:{active:e.selected},on:{click:function(t){e.selected=!e.selected}}},[n("td",[n("v-checkbox",{attrs:{"input-value":e.selected,primary:"","hide-details":""}})],1),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.name))]),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.updated_at))])])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},et=[],nt={name:"IndexFiltrosComponent",data:function(){return{loading:!1,showDialog:!1,pagination:{sortBy:"name"},form:{active:"",search:""},selected:[],headers:[{text:"EMPRESA",value:"EMPRESA"},{text:"DATA",value:"DATA"}],desserts:[]}},methods:{pesquisa:function(t){this.form.active=t,this.loading=!0,axios.post("pesquisa-filtros",this.form).then(function(t){this.selected=[],this.desserts=t.data,this.loading=!1}.bind(this)).catch(function(t){this.loading=!1}.bind(this))},listar:function(){axios.post("listar-filtros").then(function(t){this.selected=[],this.desserts=t.data}.bind(this)).catch(function(t){}.bind(this))},destroy:function(){axios.post("destroy-filtros",{list:this.selected}).then(function(t){this.selected=[],this.listar()}.bind(this)).catch(function(t){}.bind(this))},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.desserts.slice()},changeSort:function(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)}},mounted:function(){this.listar()}},at=nt,it=Object(h["a"])(at,tt,et,!1,null,"5209b307",null),ot=it.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("v-toolbar",{attrs:{dark:"",color:"teal lighten-2"}},[n("v-toolbar-title",{staticClass:"white--text"},[t._v("Consultas geradas")]),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"search",label:"Pesquisar","single-line":"","hide-details":""},on:{change:t.listar},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,pagination:t.pagination,"select-all":"","item-key":"id",loading:t.loading,"no-data-text":"Nenhum produto encontrato"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",[n("th",[n("v-checkbox",{attrs:{"input-value":e.all,indeterminate:e.indeterminate,primary:"","hide-details":""},on:{click:function(e){return e.stopPropagation(),t.toggleAll(e)}}})],1),t._l(e.headers,function(e){return n("th",{key:e.text,staticClass:"text-xs-left",class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"active":""],on:{click:function(n){return t.changeSort(e.value)}}},[n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]),t._v("\n                    "+t._s(e.text)+"\n                ")],1)})],2)]}},{key:"items",fn:function(e){return[n("tr",[n("td",[n("v-checkbox",{attrs:{"input-value":e.selected,primary:"","hide-details":""}})],1),n("td",{staticClass:"text-xs-center"},[t._v("\n                    "+t._s(e.item.id)+"\n                ")]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[t._v(t._s(e.item.codigo_barra))]),n("td",{staticClass:"text-xs-center",attrs:{nowrap:""}},[t._v(t._s(e.item.name))]),t._l(e.item.company,function(e){return n("td",{staticClass:"text-xs-center"},[t._v("\n                    "+t._s(e.valor)+"\n                    "),n("v-btn",{attrs:{icon:"",large:""},on:{click:function(n){t.openModalEndereco.showDialog=!t.openModalEndereco.showDialog,t.openModalEndereco.idEndereco=e.id}}},[n("v-icon",[t._v("place")])],1)],1)})],2)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),n("endereco-component",{attrs:{dialog:t.openModalEndereco.showDialog,"id-endereco":t.openModalEndereco.idEndereco}})],1)},rt=[],lt=(n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",[t._v("Endereço")]),n("v-spacer")],1),n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline"},[t._v("\n                    "+t._s(t.endereco.local)+"\n                ")]),n("v-card-text",[t._v("\n                    "+t._s(t.endereco.endereco)+"\n                ")]),n("v-spacer"),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Fechar")])],1)],1)],1)],1)],1)}),ct=[],dt={name:"EnderecoComponent",data:function(){return{endereco:"",showDialog:!1}},props:{dialog:Boolean,idEndereco:String},methods:{getEndereco:function(){axios.post("endereco",{idEndereco:this.idEndereco}).then(function(t){this.endereco=t.data}.bind(this)).catch(function(t){}.bind(this))}},watch:{dialog:function(){this.showDialog=this.dialog,this.getEndereco()}}},ut=dt,ht=Object(h["a"])(ut,lt,ct,!1,null,"34e65e87",null),pt=ht.exports,ft={name:"TableComponent",components:{EnderecoComponent:pt},data:function(){return{openModalEndereco:{showDialog:!1,idEndereco:""},loading:!1,pagination:{sortBy:"name"},search:"",selected:[],headers:[],desserts:[]}},methods:{listar:function(){this.loading=!0,axios.post("listar-produtos",{search:this.search}).then(function(t){this.desserts=t.data.desserts,this.headers=t.data.headers,this.loading=!1}.bind(this)).catch(function(t){this.loading=!1}.bind(this))},destroy:function(){axios.post("destroy-configuracao",{list:this.selected}).then(function(t){this.listar()}.bind(this)).catch(function(t){}.bind(this))},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.desserts.slice()},changeSort:function(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)}},mounted:function(){this.listar()}},vt=ft,gt=Object(h["a"])(vt,st,rt,!1,null,"310377c0",null),mt=gt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"100%"}},[n("v-toolbar",{attrs:{dark:"",color:"teal lighten-2"}},[n("v-toolbar-title",{staticClass:"white--text"},[t._v("Consultas rapidas")]),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"search",label:"Pesquisar","single-line":"","hide-details":""},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.listar(e)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,pagination:t.pagination,"select-all":"","item-key":"id",loading:t.loading,"no-data-text":"Nenhum produto encontrato"},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"headers",fn:function(e){return[n("tr",t._l(e.headers,function(e){return n("th",{key:e.text,staticClass:"text-xs-center",class:["column sortable",t.pagination.descending?"desc":"asc",e.value===t.pagination.sortBy?"active":""],on:{click:function(n){return t.changeSort(e.value)}}},[n("v-icon",{attrs:{small:""}},[t._v("arrow_upward")]),t._v("\n                    "+t._s(e.text)+"\n                ")],1)}),0)]}},{key:"items",fn:function(e){return t._l(e.item.valores,function(a){return n("tr",[n("td",{staticClass:"text-xs-center",staticStyle:{border:"1px solid grey"},attrs:{nowrap:""}},[t._v(t._s(e.item.name))]),n("td",{staticClass:"text-xs-center",staticStyle:{border:"1px solid grey"},attrs:{nowrap:""}},[t._v(t._s(a.company))]),n("td",{staticClass:"text-xs-center",staticStyle:{border:"1px solid grey"},style:{color:a.color,cursor:"pointer"},attrs:{nowrap:""},on:{click:function(e){t.openModalEndereco.showDialog=!t.openModalEndereco.showDialog,t.openModalEndereco.endereco=a.endereco}}},[t._v(t._s(a.valor))])])})}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.openModalEndereco.showDialog,callback:function(e){t.$set(t.openModalEndereco,"showDialog",e)},expression:"openModalEndereco.showDialog"}},[n("v-card",[n("v-card-title",[n("span",[t._v("Endereço")]),n("v-spacer")],1),n("v-card",{staticClass:"elevation-2"},[n("v-card-text",[t._v("\n                    "+t._s(t.openModalEndereco.endereco)+"\n                ")]),n("v-spacer"),n("v-card-actions",[n("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.openModalEndereco.showDialog=!1}}},[t._v("Fechar")])],1)],1)],1)],1)],1)},yt=[],bt={name:"ConsultaRapidaComponent",data:function(){return{openModalEndereco:{showDialog:!1,endereco:""},loading:!1,pagination:{sortBy:"name"},search:"",selected:[],headers:[],desserts:[]}},methods:{listar:function(){this.loading=!0,this.desserts=[],this.headers=[],axios.post("consulta-rapida",{search:this.search}).then(function(t){this.desserts=t.data.rows,this.headers=t.data.headers,this.loading=!1}.bind(this)).catch(function(t){this.loading=!1}.bind(this))},destroy:function(){axios.post("destroy-configuracao",{list:this.selected}).then(function(t){this.listar()}.bind(this)).catch(function(t){}.bind(this))},toggleAll:function(){this.selected.length?this.selected=[]:this.selected=this.desserts.slice()},changeSort:function(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)}},mounted:function(){}},_t=bt,wt=Object(h["a"])(_t,xt,yt,!1,null,"5738894a",null),kt=wt.exports;a["default"].use(J["a"]);var Ct=[{path:"/dashboard",name:"dashboard",component:L,children:[{path:"importacao",component:M,name:"importacao"},{path:"dwonload",component:Z,name:"dwonload"},{path:"filtros",component:ot,name:"filtros"},{path:"consultas-geradas",component:mt,name:"consultasGeradas"},{path:"consultas-rapidas",component:kt,name:"consultasRapidas"}]}],Dt=new J["a"]({mode:"history",routes:Ct}),Et=n("2f62");a["default"].use(Et["a"]);var St=new Et["a"].Store({state:{menuTreeView:[{icon:"dashboard",text:"Dashboard",route:"dashboard"},{icon:"arrow_upward",text:"Importação",route:"importacao"},{icon:"check_box",text:"Filtros",route:"filtros"},{icon:"search",text:"Consultas Rapidas",route:"consultasRapidas"}]},mutations:{},actions:{}}),At=n("ce5b"),Ot=n.n(At),It=(n("bf40"),{install:function(t,e){t.prototype.$alertaValidacao=function(t){var e="";try{for(var n in t.response.data.errors)e+=t.response.data.errors[n][0]+"<br>"}catch(a){e="REQUEST ERRO"}this.$notify({title:"Alerta",message:e,type:"warning",dangerouslyUseHTMLString:!0})},t.prototype.$jsonLog=function(t){try{console.log(JSON.stringify(t,null,2))}catch(e){console.log("Não foi possivel converter com jonLog")}},t.prototype.$forceDownload=function(t,e){try{var n=new Blob([t.data],{type:t.headers["content-type"]}),a=document.createElement("a"),i=window.URL.createObjectURL(n);a.setAttribute("href",i),a.setAttribute("download",e),a.style.visibility="hidden",document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(o){console.log("Não foi possivel Fazer o Download"),console.log(o)}}}});a["default"].use(Ot.a),window.axios=n("bc3a"),window.axios.defaults.headers.common["Cache-Control"]="no-cache",a["default"].use(It),new a["default"]({router:Dt,store:St,render:function(t){return t(z)}}).$mount("#app")}});
//# sourceMappingURL=app.ed65bb26.js.map