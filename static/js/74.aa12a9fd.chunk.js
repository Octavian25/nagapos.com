(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1136:function(e,t,a){"use strict";a.r(t);var n=a(19),l=a(20),r=a(50),o=a(22),c=a(21),i=a(0),s=a.n(i),d=a(42),u=a(75),m=a(38),g=a(13),E=a(288),b=a(7),h=a(43),p=a(103),f=a(287),k=a(24),_=a(90),O=a(126),j=a(125),A=a.n(j),y=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={},l}return Object(l.a)(a,[{key:"render",value:function(){var e=0,t=0;return this.props.data.forEach(function(a,n){a.detail.forEach(function(a,n){a.stock_on_hand,t+=a.berat_atribut,e+=a.berat}),a.detail.length}),s.a.createElement(s.a.Fragment,null,s.a.createElement(A.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Pindah Barang",sheet:"Laporan Pindah Barang",buttonText:"Export Exel"}),s.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," Laporan Pindah Barang ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," Periode ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," ",0===Object(b.l)("tgl_laporan").length?null:JSON.parse(Object(b.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(b.l)("tgl_laporan")).tgl_akhir," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," TOKO :  ",Object(b.j)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," ALAMAT :  ",Object(b.j)().alamat_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"})),s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"GUDANG ASAL"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BAKI ASAl"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"GUDANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BAKI TUJUAN"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BARCODE"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA BARANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA ATRIBUT"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT ATRIBUT"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"))),s.a.createElement("tbody",null,this.props.data.map(function(e,t){return s.a.createElement(s.a.Fragment,null,e.detail.map(function(e,a){return s.a.createElement("tr",{key:e.no_pindah},s.a.createElement("td",{style:{textAlign:"center"}}," ",++t),s.a.createElement("td",null," ",e.kode_gudang_asal),s.a.createElement("td",null," ",e.kode_baki_asal),s.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_gudang),s.a.createElement("td",{style:{textAlign:"center"}}," ",e.kode_baki),s.a.createElement("td",null,"\xa0",e.kode_barcode),s.a.createElement("td",null," ",e.nama_barang),s.a.createElement("td",null," ",e.nama_atribut),s.a.createElement("td",null," ",Object(b.f)(e.berat_atribut,2)),s.a.createElement("td",null," ",Object(b.f)(e.berat,3)))}))})),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("td",{colSpan:"7",style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"}},"Total"),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}}," "),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},Object(b.f)(t,2)),s.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},Object(b.f)(e,3))))))}}]),a}(i.Component),v=a(102),S=(a(207),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new v.default("l","mm",[297,210])),a=[],n=[],l=30,r=0,o=0;t.setFontSize(15),t.text("LAPORAN PINDAH BARANG",14,15),t.setFontSize(20),t.text(Object(b.j)().nama_toko,200,15),t.setFontSize(8);var c=Object(b.j)().alamat_toko.length;c>20&&t.text(Object(b.j)().alamat_toko.slice(0,48),200,20),c>50&&t.text(Object(b.j)().alamat_toko.slice(48,90),200,25),t.setFontSize(10),t.setProperties({title:"Laporan Pindah Barang"}),t.text("PERIODE : ".concat(0===Object(b.l)("tgl_laporan").length?null:JSON.parse(Object(b.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(b.l)("tgl_laporan")).tgl_akhir),14,25);var i=1;e.forEach(function(e,t){e.detail.forEach(function(e,t){var n=[i,e.kode_gudang_asal,e.kode_baki_asal,e.kode_gudang,e.kode_baki,e.kode_barcode,e.nama_barang,e.nama_atribut,{content:Object(b.f)(e.berat_atribut,3),styles:{halign:"right"}},{content:Object(b.f)(e.berat,3),styles:{halign:"right"}}];parseFloat(e.berat),parseFloat(e.berat_atribut),r+=parseFloat(e.berat),o+=parseFloat(e.berat_atribut),a.push(n),++i}),e.detail.length});var s=[{content:"Total",colSpan:7,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"",styles:{fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(Object(b.f)(o,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(b.f)(r,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];a.push(s);var d=[{colSpan:9,content:"Printed By ".concat(JSON.parse(Object(b.l)("userdata")).user_id," / ").concat(Object(b.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];a.push(d),t.autoTable({head:[[{content:"NO"},{content:"GUDANG ASAL"},{content:"BAKI ASAL"},{content:"GUDANG"},{content:"BAKI TUJUAN"},{content:"BARCODE"},{content:"NAMA BARANG"},{content:"NAMA ATR"},{content:"BRT ATR",styles:{halign:"right"}},{content:"BERAT",styles:{halign:"right"}}]],body:a,foot:n,startY:l,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"}}),l=t.autoTableEndPosY()+3,a=[],n=[];var u=t.internal.getNumberOfPages(),m=t.internal.pageSize.width,g=t.internal.pageSize.height;t.setFontSize(10);for(var E=1;E<u+1;E++){var h=m/2,p=g-10;t.setPage(E),t.text("".concat(E," of ").concat(u),h,p,{align:"center"})}t.save("Laporan Pindah Barang.pdf")}),x=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={date:new Date},l.setStartDate=l.setStartDate.bind(Object(r.a)(l)),l.setLastDate=l.setLastDate.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"exportPdf",value:function(){S(this.props.LaporanDataBarang)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this,t=[];this.props.LaporanDataBarang.forEach(function(e){e.detail.forEach(function(e){t.push(e),e.berat})});var a=[{dataField:"kode_gudang_asal",text:"Gudang Asal",footerAttrs:{colSpan:"5"},footer:function(e,a,n,l){return s.a.createElement("div",null,"Total Barang : ",t.length," ")}},{dataField:"kode_baki_asal",text:"Baki Asal"},{dataField:"kode_barcode",text:"Kode Barcode"},{dataField:"kode_gudang",text:"Gudang"},{dataField:"kode_baki",text:"Baki Tujuan"},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:function(e){return s.a.createElement("div",{className:"text-right"}," ",Object(b.f)(e,2)," ")},footer:function(e){return s.a.createElement("div",{className:"text-right"}," ",Object(b.f)(e.reduce(function(e,t){return e+t},0),2)," ")}}];return s.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(f.a,{name:"tgl_awal",component:k.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(f.a,{name:"tgl_akhir",component:k.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("div",{className:"text-right"},s.a.createElement("label",null,"\xa0"),s.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),s.a.createElement("div",{className:"col-12"},s.a.createElement(_.a,{keyField:"no_pindah",data:this.props.export?t:[],columns:a,empty:!0,textEmpty:"Data Laporan Pindah Barang Kosong"})),s.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{type:"button",onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(y,{data:this.props.LaporanDataBarang}))))))}}]),a}(i.Component);x=Object(E.a)({form:"HeadPindahBarang",enableReinitialize:!0,validate:O.a})(x);var N=Object(m.b)(function(e){return{initialValues:{tgl_awal:Object(b.h)(),tgl_akhir:Object(b.h)()}}})(x),D=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={isEdit:!1,modalDialog:!1,isLoading:!1,username:!1,export:!1,LaporanDataBarang:[],tgl_awal:new Date,tgl_akhir:new Date},l.handleSubmit=l.handleSubmit.bind(Object(r.a)(l)),l}return Object(l.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={tgl_awal:Object(b.e)(p(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(b.e)(p(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(g.j)("pindahbarang/get/report",a).then(function(e){0===e.data.length?(Object(h.e)("info","Data Yang Anda Cari Tidak Ada"),t.setState({isLoading:!1,export:!1,LaporanDataBarang:[]})):(Object(b.m)("tgl_laporan",JSON.stringify(a)),Object(h.e)("success","Laporan Pindah Barang Tersedia"),t.setState({LaporanDataBarang:e.data,isLoading:!1,export:!0}))}).catch(function(e){return t.errorHandling(e)})}},{key:"errorHandling",value:function(e){Object(h.a)(e),this.setState({isLoading:!1,export:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(d.b,{to:"#"},"Laporan Barang")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Pindah Barang")),s.a.createElement("h1",{className:"page-header"},"Laporan Pindah Barang "),s.a.createElement(u.a,null,s.a.createElement(u.c,null,"Filter Laporan"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement(N,{export:this.state.export,LaporanDataBarang:this.state.LaporanDataBarang,isLoading:this.state.isLoading,onSubmit:function(t){return e.handleSubmit(t)}})),s.a.createElement("br",null)))}}]),a}(s.a.Component);D=Object(E.a)({form:"FormLaporanPindahBarang",enableReinitialize:!0})(D);t.default=Object(m.b)(function(e){return{hideModal:e.datamaster.modalDialog}},null)(D)}}]);
//# sourceMappingURL=74.aa12a9fd.chunk.js.map