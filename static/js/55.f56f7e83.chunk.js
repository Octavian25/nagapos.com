(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1146:function(e,a,t){"use strict";t.r(a);var n=t(19),o=t(20),r=t(50),i=t(22),s=t(21),u=t(0),c=t.n(u),p=t(42),d=t(75),l=t(11),m=t(38),h=t(29),b=t.n(h),g=t(43),f=t(13),E=t(52),_=t(7),j=t(90),k=t(287),O=t(288),v=t(24),G=function(e,a){var t={};return e.kode_group||(t.kode_group="Kode Group Tidak Boleh Kosong"),e.nama_group||(t.nama_group="Nama Group Tidak Boleh Kosong"),e.harga||(t.harga="Harga Tidak Boleh Kosong"),e.persentase||(t.persentase="Persentase Tidak Boleh Kosong"),t},D=t(58),M=t.n(D),y=t(76),x=Object(y.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),S=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={aktif:!1},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.isEdit?document.getElementById("nama_group").focus():(e.props.change("jenis_group","MUDA"),document.getElementById("kode_group").focus())},100)}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},this.props.isEdit?c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,{name:"id",component:v.b,type:"hidden",readOnly:this.props.isEdit})):null,c.a.createElement(k.a,{tabIndex:"1",id:"kode_group",name:"kode_group",component:v.e,type:"text",label:" Kode Group",readOnly:this.props.isEdit,placeholder:"Masukan Kode Group"}),c.a.createElement(k.a,{tabIndex:"2",id:"nama_group",name:"nama_group",component:v.e,type:"text",label:" Nama Group",placeholder:"Masukan Nama Group"}),c.a.createElement(k.a,{tabIndex:"3",id:"jenis_group",name:"jenis_group",component:v.f,options:[{name:"TUA",value:"TUA"},{name:"MUDA",value:"MUDA"}],type:"text",label:"Jenis Group",placeholder:"Pilih Jenis Group"}),c.a.createElement(k.a,Object.assign({tabIndex:"3",name:"harga_modal",component:v.e,type:"text",label:"Harga Modal"},x,{placeholder:"Masukan Harga Modal"})),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 text-right"},c.a.createElement("button",{className:"btn btn-danger",onClick:function(){return e.props.dispatch(Object(l.Cb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",c.a.createElement("button",{tabIndex:"5",className:this.state.aktif?"btn btn-success":"btn btn-primary",disabled:this.props.submitting,type:"submit"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))),this.props.isLoading?c.a.createElement(M.a,{loading:!0,background:"rgba(0, 0, 0, 0.35)",loaderColor:"rgba(94, 147, 117, 1)"}):null)}}]),t}(u.Component);S=Object(O.a)({form:"ModalFormDataGroup",enableReinitialize:!0,validate:G})(S);var N=Object(m.b)(function(e){if(null!==e.datamaster.ShowModalGroup)return{initialValues:{id:e.datamaster.ShowModalGroup.id,kode_group:e.datamaster.ShowModalGroup.kode_group,nama_group:e.datamaster.ShowModalGroup.nama_group,jenis_group:e.datamaster.ShowModalGroup.jenis_group,persentase:e.datamaster.ShowModalGroup.persentase,harga_modal:e.datamaster.ShowModalGroup.harga_modal}}},null)(S),w=t(208),C=function(e,a,t){b.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kode Group "+e+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(e){e.isConfirmed&&Object(f.b)("group/delete/by-kode-group/"+a).then(function(){Object(g.d)("Data Berhasil Di Hapus").then(function(){return t(Object(l.v)())})}).catch(function(e){Object(g.e)("error",e.response.data)})})},K=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var o;return Object(n.a)(this,t),(o=a.call(this,e)).state={isEdit:!1,isLoading:!1,modalDialog:!1,columns:[{dataField:"kode_group",text:"Kode Group",sort:!0},{dataField:"nama_group",text:"Nama Group"},{dataField:"jenis_group",text:"Jenis Group"},{dataField:"harga_modal",text:"Harga Modal",headerClasses:"text-right",formatter:function(e){return c.a.createElement("div",{className:"text-right"}," ",void 0===e?0:e.toLocaleString("kr-KO")," ")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a){var t={id:a._id,kode_group:a.kode_group,nama_group:a.nama_group,jenis_group:a.jenis_group,persentase:a.persentase.toFixed(1),harga:a.harga,harga_modal:a.harga_modal};return c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{onClick:function(){return o.formEditDataGroup(t)},className:"btn btn-primary mr-3"},c.a.createElement("i",{className:"fa fa-edit"})),c.a.createElement("button",{onClick:function(){return C(a.kode_group,a._id,o.props.dispatch)},className:"btn btn-danger"},c.a.createElement("i",{className:"fa fa-trash"}))))}}]},o.handleSubmit=o.handleSubmit.bind(Object(r.a)(o)),o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(l.v)())}},{key:"handleSubmit",value:function(e){var a=this;this.setState({isLoading:!0});var t={nama_group:e.nama_group,jenis_group:e.jenis_group,harga_modal:e.harga_modal,kadar:0,persentase:0},n={kode_group:e.kode_group,nama_group:e.nama_group,jenis_group:e.jenis_group,kadar:0,harga_modal:e.harga_modal,persentase:0};this.state.isEdit?Object(f.m)("group/edit/by-kode-group/"+e.id,t).then(function(){a.props.dispatch(Object(l.Cb)())}).then(function(){Object(g.e)("success","Data Berhasil Diupdate")}).then(function(){a.props.dispatch(Object(l.v)())}).then(function(){a.setState({isLoading:!1})}).then(function(){a.props.dispatch(Object(E.e)("ModalFormDataGroup"))}).catch(function(e){Object(g.e)("info",void 0===e.response?"Terjadi Kesalahan Saat Megirim Data ":e.response.data),a.setState({isLoading:!1})}):Object(f.h)("group/add",n).then(function(){a.props.dispatch(Object(l.Cb)())}).then(function(){Object(g.e)("success","Data Berhasil Disimpan")}).then(function(){a.props.dispatch(Object(l.v)())}).then(function(){a.props.dispatch(Object(E.e)("ModalFormDataGroup"))}).then(function(){a.setState({isLoading:!1})}).catch(function(e){return Object(_.a)(e,"group/reactive/by-kode-group",n,a.props.dispatch,Object(l.v)(),Object(l.Cb)(),"ModalFormDataGroup").then(function(){a.setState({isLoading:!1})})})}},{key:"formEditDataGroup",value:function(e){this.props.dispatch(Object(l.Db)()),this.props.dispatch(Object(l.X)(e)),this.setState({isEdit:!0})}},{key:"ShowModalGroup",value:function(){this.props.dispatch(Object(l.Db)()),this.props.dispatch(Object(l.X)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("ol",{className:"breadcrumb float-xl-right"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement(p.b,{to:"#"},"Data Master")),c.a.createElement("li",{className:"breadcrumb-item active"},"Master Group")),c.a.createElement("h1",{className:"page-header"},"Master Group "),c.a.createElement(d.a,null,c.a.createElement(d.c,null,"Master Group"),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},c.a.createElement(j.a,{keyField:"kode_group",tambahData:!0,handleClick:function(){return e.ShowModalGroup()},exportCsv:!0,data:this.props.DataGroup,columns:this.state.columns,empty:this.props.DataGroup,textEmpty:"Data Group Kosong"})),c.a.createElement("br",null),c.a.createElement(w.a,{size:"P",title:this.state.isEdit?"Edit Data Data Group":"Tambah Data Data Group",content:c.a.createElement(N,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(a){return e.handleSubmit(a)}})})))}}]),t}(c.a.Component);a.default=Object(m.b)(function(e){return{DataGroup:e.datamaster.GetDataGroup,hideModal:e.datamaster.modalDialog}},null)(K)}}]);
//# sourceMappingURL=55.f56f7e83.chunk.js.map