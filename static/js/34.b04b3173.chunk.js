(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1177:function(e,t,a){"use strict";a.r(t);var n=a(19),r=a(20),i=a(22),o=a(21),s=a(0),l=a.n(s),c=a(42),d=a(75),u=a(84),m=a.n(u),b=a(38),p=a(85),h=a.n(p),f=a(11),g=a(287),E=a(288),k=a(24),v=a(710),j=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={aktif:!1},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.isEdit?document.getElementById("berat_bandrol").focus():document.getElementById("keterangan").focus()},100)}},{key:"render",value:function(){var e=this;return l.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},l.a.createElement(g.a,{id:"keterangan",tabIndex:"1",name:"keterangan",component:k.e,type:"text",label:"Keterangan",readOnly:this.props.isEdit,placeholder:"Masukan Keterangan"}),l.a.createElement(g.a,{tabIndex:"2",id:"berat_bandrol",name:"berat_bandrol",component:k.a,type:"text",label:"Berat Bandrol",onBlur:function(){return e.setState({aktif:!0})},placeholder:"Berat Bandrol"}),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 text-right"},l.a.createElement("button",{className:"btn btn-white",onClick:function(){return e.props.dispatch(Object(f.Cb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",l.a.createElement("button",{tabIndex:"3",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),a}(s.Component);j=Object(E.a)({form:"FormBandrol",enableReinitialize:!0,validate:v.a})(j);var O=Object(b.b)(function(e){if(null!==e.datamaster.ShowModalBandrol)return{initialValues:{keterangan:e.datamaster.ShowModalBandrol.keterangan,berat_bandrol:e.datamaster.ShowModalBandrol.berat_bandrol}}},null)(j),B=a(43),y=a(52),D=a(13),N=a(208),S=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={isEdit:!1,modalDialog:!1,columns:[{dataField:"keterangan",text:"Keterangan "},{dataField:"berat_bandrol",text:"Berat Bandrol "},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,t){var a={keterangan:t.keterangan,berat_bandrol:t.berat_bandrol};return l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"col-12"},l.a.createElement("button",{onClick:function(){return r.formEditDataKategori(a)},className:"btn btn-primary mr-3"},l.a.createElement("i",{className:"fa fa-edit"}))))}}]},r}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={berat_bandrol:e.berat_bandrol},n={keterangan:e.keterangan,berat_bandrol:e.berat_bandrol};this.state.isEdit?Object(D.m)("parabandrol/edit/by-keterangan/"+e.keterangan,a).then(function(){t.props.dispatch(Object(f.Cb)())}).then(function(){Object(B.e)("success","Data Berhasil Diedit")}).then(function(){t.props.dispatch(Object(f.kb)())}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(y.d)("FormBandrol"))}).catch(function(e){Object(B.e)("info","Terjadi Kesalahan Saat Mengirim Data"),t.setState({isLoading:!1})}):Object(D.h)("pababandrol/add",n).then(function(){t.props.dispatch(Object(f.Cb)())}).then(function(){Object(B.e)("success","Data Berhasil Disimpan")}).then(function(){t.props.dispatch(Object(f.kb)())}).then(function(){t.props.dispatch(Object(y.d)("FormBandrol"))}).then(function(){t.setState({isLoading:!1})}).catch(function(e){return t.ErrorHandling(e)})}},{key:"ErrorHandling",value:function(e){this.setState({isLoading:!1}),Object(B.a)(e)}},{key:"componentDidMount",value:function(){this.props.dispatch(Object(f.kb)())}},{key:"formEditDataKategori",value:function(e){this.props.dispatch(Object(f.Db)()),this.props.dispatch(Object(f.U)(e)),this.setState({isEdit:!0})}},{key:"showModalKategori",value:function(){this.props.dispatch(Object(f.Db)()),this.props.dispatch(Object(f.U)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("ol",{className:"breadcrumb float-xl-right"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement(c.b,{to:"#"},"Data Master")),l.a.createElement("li",{className:"breadcrumb-item active"},"Master Bandrol")),l.a.createElement("h1",{className:"page-header"},"Master Bandrol "),l.a.createElement(d.a,null,l.a.createElement(d.c,null,"Master Bandrol"),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement(h.a,{keyField:"keterangan",data:this.props.DataBandrol||[],columns:this.state.columns,search:!0,exportCSV:{fileName:"Export Master Gudang.csv"}},function(t){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 mb-3"},0===e.props.DataBandrol.length?l.a.createElement("button",{onClick:function(){return e.showModalKategori()},className:"btn btn-primary"},l.a.createElement("i",{className:"fa fa-plus"})):null),l.a.createElement("div",{className:"col-12"},l.a.createElement(m.a,t.baseProps),l.a.createElement("br",null)))})),l.a.createElement("br",null),l.a.createElement(N.a,{size:"P",title:this.state.isEdit?"Edit Data Bandrol":"Tambah Data Bandrol",content:l.a.createElement(O,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:function(t){return e.handleSubmit(t)}})})))}}]),a}(l.a.Component);t.default=Object(b.b)(function(e){return{DataBandrol:e.datamaster.getBandrol,hideModal:e.datamaster.modalDialog}},null)(S)},710:function(e,t,a){"use strict";t.a=function(e,t){var a={};return e.kode_gudang||(a.kode_gudang="Kode Gudang Tidak Boleh Kosong"),e.nama_gudang||(a.nama_gudang="Nama Gudang Tidak Boleh Kosong"),a}}}]);
//# sourceMappingURL=34.b04b3173.chunk.js.map