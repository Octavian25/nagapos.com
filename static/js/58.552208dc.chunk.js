(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{1148:function(a,t,e){"use strict";e.r(t);var n=e(19),i=e(20),s=e(50),o=e(22),r=e(21),c=e(0),d=e.n(c),l=e(42),b=e(75),u=e(11),m=e(38),p=e(29),h=e.n(p),g=e(43),f=e(13),k=e(52),E=e(7),B=e(90),O=e(208),j=e(287),K=e(288),v=e(24),y=function(a,t){var e={};return a.kondisi_barang||(e.kondisi_barang="Kondisi Barang Tidak Boleh Kosong"),e},S=e(58),D=e.n(S),_=function(a){Object(o.a)(e,a);var t=Object(r.a)(e);function e(){var a;Object(n.a)(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return(a=t.call.apply(t,[this].concat(s))).state={aktif:!1},a}return Object(i.a)(e,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("kondisi_barang").focus()},100)}},{key:"render",value:function(){var a=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},d.a.createElement("input",{name:"kondisi_barang_lama",type:"hidden"}),this.props.isEdit?d.a.createElement(d.a.Fragment,null,d.a.createElement(j.a,{name:"id",component:v.b,type:"hidden",readOnly:this.props.isEdit})):null,d.a.createElement(j.a,{tabIndex:"1",id:"kondisi_barang",name:"kondisi_barang",component:v.e,type:"text",label:"Kode Kondisi Barang",onBlur:function(){return a.setState({aktif:!0})},placeholder:"Masukan Kode Kondisi Barang"}),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 text-right"},d.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(u.Cb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",d.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?d.a.createElement(D.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),e}(c.Component);_=Object(K.a)({form:"ModalKondisiBarang",enableReinitialize:!0,validate:y})(_);var M=Object(m.b)(function(a){if(null!==a.datamaster.ShowModalKondisiBarang)return{initialValues:{id:a.datamaster.ShowModalKondisiBarang.id,kondisi_barang_lama:a.datamaster.ShowModalKondisiBarang.kondisi_barang,kondisi_barang:a.datamaster.ShowModalKondisiBarang.kondisi_barang}}},null)(_),w=function(a,t){h.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Kondisi Barang "+a.kondisi_barang+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){e.isConfirmed&&Object(f.b)("parakondisi/delete/by-kode-kondisi/"+a._id,{}).then(function(){Object(g.d)("Data Berhasil Di Hapus").then(function(){return t(Object(u.sb)())})})}).catch(function(a){Object(g.e)("error",a.response.data)})},C=function(a){Object(o.a)(e,a);var t=Object(r.a)(e);function e(a){var i;return Object(n.a)(this,e),(i=t.call(this,a)).state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kondisi_barang",text:"Kode Kondisi Barang",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,t){var e={id:t._id,kondisi_barang:t.kondisi_barang};return d.a.createElement("div",{className:"row text-center"},d.a.createElement("div",{className:"col-12"},d.a.createElement("button",{onClick:function(){return i.formEditKondisiBarang(e)},className:"btn btn-primary mr-3"},d.a.createElement("i",{className:"fa fa-edit"})),d.a.createElement("button",{onClick:function(){return w(t,i.props.dispatch)},className:"btn btn-danger"},d.a.createElement("i",{className:"fa fa-trash"}))))}}]},i.handleSubmit=i.handleSubmit.bind(Object(s.a)(i)),i}return Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(u.sb)())}},{key:"handleSubmit",value:function(a){var t=this;this.setState({isLoading:!0});var e={kondisi_barang:a.kondisi_barang},n={kondisi_barang:a.kondisi_barang};this.state.isEdit?Object(f.m)("parakondisi/edit/by-kode-kondisi/"+a.id,e).then(function(){t.props.dispatch(Object(u.Cb)())}).then(function(){return Object(g.e)("success","Data Berhasil Diedit")}).then(function(){t.props.dispatch(Object(u.sb)())}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(k.d)("ModalKondisiBarang"))}).catch(function(a){Object(g.e)("info",void 0===a.response?"Terjadi Kesalahan Saat Megirim Data ":a.response.data),t.setState({isLoading:!1})}):Object(f.h)("parakondisi/add",n).then(function(){t.props.dispatch(Object(u.Cb)())}).then(function(){return Object(g.e)("success","Data Berhasil Disimpan")}).then(function(){t.props.dispatch(Object(u.sb)())}).then(function(){t.props.dispatch(Object(k.d)("ModalKondisiBarang"))}).then(function(){t.setState({isLoading:!1})}).catch(function(a){return Object(E.a)(a,"parakondisi/reactive/by-kode-kondisi/",n,t.props.dispatch,Object(u.sb)(),Object(u.Cb)(),"ModalKondisiBarang").then(function(){t.setState({isLoading:!1})})})}},{key:"formEditKondisiBarang",value:function(a){this.props.dispatch(Object(u.Db)()),this.props.dispatch(Object(u.bb)(a)),this.setState({isEdit:!0})}},{key:"ShowModalKondisiBarang",value:function(){this.props.dispatch(Object(u.Db)()),this.props.dispatch(Object(u.bb)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var a=this;return d.a.createElement("div",null,d.a.createElement("ol",{className:"breadcrumb float-xl-right"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement(l.b,{to:"#"},"Data Master")),d.a.createElement("li",{className:"breadcrumb-item active"},"Master Kondisi Barang")),d.a.createElement("h1",{className:"page-header"},"Master Kondisi Barang "),d.a.createElement(b.a,null,d.a.createElement(b.c,null,"Master Kondisi Barang"),d.a.createElement("br",null),d.a.createElement("div",{className:"container"},d.a.createElement(B.a,{keyField:"kondisi_barang",tambahData:!0,handleClick:function(){return a.ShowModalKondisiBarang()},exportCsv:!0,data:this.props.DataKondisiBarang,columns:this.state.columns,empty:this.props.DataKondisiBarang,textEmpty:"Data Baki Kosong"})),d.a.createElement("br",null),d.a.createElement(O.a,{size:"P",title:this.state.isEdit?"Edit Data Kondisi Barang":"Tambah Data Kondisi Barang",content:d.a.createElement(M,{isEdit:this.state.isEdit,isLoading:this.state.isLoading,onSubmit:function(t){return a.handleSubmit(t)}})})))}}]),e}(d.a.Component);t.default=Object(m.b)(function(a){return{DataKondisiBarang:a.datamaster.getDataKondisiBarang,hideModal:a.datamaster.modalDialog}},null)(C)}}]);
//# sourceMappingURL=58.552208dc.chunk.js.map