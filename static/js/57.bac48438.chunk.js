(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1147:function(a,t,e){"use strict";e.r(t);var n=e(19),s=e(20),i=e(50),r=e(22),o=e(21),c=e(0),d=e.n(c),l=e(42),u=e(75),m=e(11),p=e(38),b=e(29),k=e.n(b),h=e(43),f=e(13),E=e(52),O=e(7),j=e(90),T=e(208),g=e(287),v=e(288),K=e(24),y=function(a,t){var e={};return a.kode_transaksi||(e.kode_transaksi="Kode Transaksi Tidak Boleh Kosong"),e},S=function(a){Object(r.a)(e,a);var t=Object(o.a)(e);function e(){var a;Object(n.a)(this,e);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(a=t.call.apply(t,[this].concat(i))).state={aktif:!1},a}return Object(s.a)(e,[{key:"componentDidMount",value:function(){setTimeout(function(){document.getElementById("kode_transaksi").focus()},100)}},{key:"render",value:function(){var a=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}},this.props.isEdit?d.a.createElement(d.a.Fragment,null,d.a.createElement(g.a,{name:"id",component:K.b,type:"hidden",readOnly:this.props.isEdit})):null,d.a.createElement("input",{type:"hidden",name:"kode_transaksi_lama"}),d.a.createElement(g.a,{tabIndex:"1",id:"kode_transaksi",name:"kode_transaksi",component:K.e,type:"text",label:"Kode Transaksi",placeholder:"Masukan Kode Transaksi",onBlur:function(){return a.setState({aktif:!0})}}),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 text-right"},d.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(m.Cb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",d.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.submitting,type:"submit"},this.props.isLoading?d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),e}(c.Component);S=Object(v.a)({form:"ModalKodeTrransaksi",enableReinitialize:!0,validate:y})(S);var _=Object(p.b)(function(a){if(null!==a.datamaster.ShowModalKodeTransaksi)return{initialValues:{id:a.datamaster.ShowModalKodeTransaksi.id,kode_transaksi:a.datamaster.ShowModalKodeTransaksi.kode_transaksi,kode_transaksi_lama:a.datamaster.ShowModalKodeTransaksi.kode_transaksi}}},null)(S),D=function(a,t){k.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Transaksi "+a.kode_transaksi+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){e.isConfirmed&&Object(f.b)("paratransaksi/delete/by-kode-transaksi/"+a._id).then(function(){Object(h.d)("Data Berhasil Di Hapus").then(function(){return t(Object(m.Bb)())})}).catch(function(a){Object(h.e)("error",a.response.data)})})},M=function(a){Object(r.a)(e,a);var t=Object(o.a)(e);function e(a){var s;return Object(n.a)(this,e),(s=t.call(this,a)).state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kode_transaksi",text:"Kode Transaksi ",sort:!0},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,t){var e={id:t._id,kode_transaksi:t.kode_transaksi};return d.a.createElement("div",{className:"row text-center"},d.a.createElement("div",{className:"col-12"},d.a.createElement("button",{onClick:function(){return s.FormEditKodeTransaksi(e)},className:"btn btn-primary mr-3"},d.a.createElement("i",{className:"fa fa-edit"})),d.a.createElement("button",{onClick:function(){return D(t,s.props.dispatch)},className:"btn btn-danger"},d.a.createElement("i",{className:"fa fa-trash"}))))}}],dataKodeTransaksi:[{kode_transaksi:"Uang Makan"}]},s.handleSubmit=s.handleSubmit.bind(Object(i.a)(s)),s}return Object(s.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(m.Bb)())}},{key:"handleSubmit",value:function(a){var t=this;this.setState({isLoading:!0});var e={kode_transaksi:a.kode_transaksi},n={id:a.id,kode_transaksi:a.kode_transaksi};this.state.isEdit?Object(f.m)("paratransaksi/edit/by-kode-transaksi/"+a.id,e).then(function(){t.setState({isLoading:!1}),t.props.dispatch(Object(m.Cb)())}).then(function(){return Object(h.e)("success","Data Berhasil Diedit")}).then(function(){t.props.dispatch(Object(m.Bb)())}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(E.d)("ModalKodeTrransaksi"))}).catch(function(a){Object(h.e)("info",void 0===a.response?"Terjadi Kesalahan Saat Megirim Data ":a.response.data),t.setState({isLoading:!1})}):Object(f.h)("paratransaksi/add",n).then(function(){t.setState({isLoading:!1}),t.props.dispatch(Object(m.Cb)())}).then(function(){Object(h.e)("success","Data Berhasil Disimpan")}).then(function(){t.props.dispatch(Object(m.Bb)())}).then(function(){t.props.dispatch(Object(E.d)("ModalKodeTrransaksi"))}).then(function(){t.setState({isLoading:!1})}).catch(function(a){return Object(O.a)(a,"paratransaksi/reactive/by-kode-transaksi/",n,t.props.dispatch,Object(m.Bb)(),Object(m.Cb)(),"ModalKodeTrransaksi").then(function(){t.setState({isLoading:!1})})})}},{key:"FormEditKodeTransaksi",value:function(a){this.props.dispatch(Object(m.Db)()),this.props.dispatch(Object(m.ab)(a)),this.setState({isEdit:!0})}},{key:"showModalKodeTranaksi",value:function(){this.props.dispatch(Object(m.Db)()),this.props.dispatch(Object(m.ab)(!1)),this.setState({isEdit:!1,isLoading:!1})}},{key:"render",value:function(){var a=this;return d.a.createElement("div",null,d.a.createElement("ol",{className:"breadcrumb float-xl-right"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement(l.b,{to:"#"},"Data Master")),d.a.createElement("li",{className:"breadcrumb-item active"},"Master Kode Transaksi")),d.a.createElement("h1",{className:"page-header"},"Master Kode Transaksi "),d.a.createElement(u.a,null,d.a.createElement(u.c,null,"Master Kode Transaksi"),d.a.createElement("br",null),d.a.createElement("div",{className:"container"},d.a.createElement(j.a,{keyField:"kode_transaksi",tambahData:!0,handleClick:function(){return a.showModalKodeTranaksi()},exportCsv:!0,data:this.props.DataTransaksi,columns:this.state.columns,empty:this.props.DataTransaksi,textEmpty:"Data Jenis Kosong"})),d.a.createElement("br",null),d.a.createElement(T.a,{title:this.state.isEdit?"Edit Data Kode Transaksi":"Tambah Data Kode Transaksi",size:"P",content:d.a.createElement(_,{isLoading:this.state.isLoading,onSubmit:function(t){return a.handleSubmit(t)}})})))}}]),e}(d.a.Component);t.default=Object(p.b)(function(a){return{DataTransaksi:a.datamaster.getParamterTransaksi,hideModal:a.datamaster.modalDialog}},null)(M)}}]);
//# sourceMappingURL=57.bac48438.chunk.js.map