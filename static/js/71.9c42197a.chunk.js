(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1128:function(t,e,a){"use strict";a.r(e);var n=a(19),r=a(20),l=a(50),o=a(22),i=a(21),c=a(0),s=a.n(c),u=a(42),d=a(75),m=a(38),b=a(288),g=a(7),h=(a(303),a(43)),E=a(13),f=a(287),p=a(11),k=a(90),y=a(24),O=a(125),x=a.n(O),j=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={},r}return Object(r.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Timbang Baki",sheet:"Laporan Timbang Baki",buttonText:"Export Exel"}),s.a.createElement("table",{rowkey:"kode_member",id:"table-to-xls",style:{display:"none"}},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10",style:{textAlign:"center"}}," LAPORAN TIMBANG BAKI ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," TOKO :  ",Object(g.j)().nama_toko," ")),s.a.createElement("tr",null,s.a.createElement("th",{colSpan:"10"}," ALAMAT :  ",Object(g.j)().alamat_toko," ")),s.a.createElement("tr",null),s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE GUDANG"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"KODE BAKI"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"QTY"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT BAKI"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"BERAT BANDROL"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TOTAL"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TIMBANGAN"),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"SELISIH"))),s.a.createElement("tbody",null,this.props.data.map(function(t,e){return s.a.createElement("tr",{key:e},s.a.createElement("td",{style:{textAlign:"center"}}," ",e+1),s.a.createElement("td",null," ",t.kode_gudang),s.a.createElement("td",null," ",t.kode_toko),s.a.createElement("td",null," ",t.qty),s.a.createElement("td",null," ",t.berat),s.a.createElement("td",null," ",t.berat_baki),s.a.createElement("td",null," ",t.berat_bandrol),s.a.createElement("td",null," ",t.total),s.a.createElement("td",null," ",t.timbang),s.a.createElement("td",null," ",t.selisih))})),s.a.createElement("tfoot",null,s.a.createElement("tr",null,s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"},colSpan:"3"},"  "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.qty}).reduce(function(t,e){return t+e},0),"   "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.berat}).reduce(function(t,e){return t+e},0),"  "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.berat_baki}).reduce(function(t,e){return t+e},0),"  "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.berat_bandrol}).reduce(function(t,e){return t+e},0),"  "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.total}).reduce(function(t,e){return t+e},0),"  "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.timbang}).reduce(function(t,e){return t+e},0),"  "),s.a.createElement("th",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}}," ",this.props.data.map(function(t){return t.selisih}).reduce(function(t,e){return t+e},0),"  ")))))}}]),a}(c.Component),v=a(102),C=(a(207),function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=new v.default("l","mm",[297,210]),n=[],r=30,l=0,o=0,i=0,c=0,s=0,u=0,d=0;a.setFontSize(15),a.text("LAPORAN TIMBANG BAKI",14,15),a.setFontSize(20),a.text(Object(g.j)().nama_toko,200,15),a.setFontSize(8);var m=Object(g.j)().alamat_toko.length;m>20&&a.text(Object(g.j)().alamat_toko.slice(0,48),200,20),m>50&&a.text(Object(g.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN TIMBANG BAKI"}),t=[[{content:"NO"},{content:"GUDANG"},{content:"BAKI"},{content:"QTY",styles:{halign:"right"}},{content:"BERAT",styles:{halign:"right"}},{content:"BERAT BAKI",styles:{halign:"right"}},{content:"BERAT BANDROL",styles:{halign:"right"}},{content:"TOTAL",styles:{halign:"right"}},{content:"TIMBANGAN",styles:{halign:"right"}},{content:"SELISIH",styles:{halign:"right"}}]],e.forEach(function(t,e){var a=[{content:"".concat(++e),styles:{cellWidth:10}},t.kode_gudang,t.kode_toko,{content:t.qty,styles:{halign:"right"}},{content:Object(g.f)(t.berat,3),styles:{halign:"right"}},{content:Object(g.f)(t.berat_baki,3),styles:{halign:"right"}},{content:Object(g.f)(t.berat_bandrol,3),styles:{halign:"right"}},{content:Object(g.f)(t.total,3),styles:{halign:"right"}},{content:Object(g.f)(t.timbang,3),styles:{halign:"right"}},{content:Object(g.f)(t.selisih,3),styles:{halign:"right"}}];l+=t.berat,o+=t.berat_baki,i+=t.berat_bandrol,c+=t.total,s+=t.timbang,u+=t.selisih,d+=t.qty,n.push(a)});var b=[{content:"Total",colSpan:3,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:"".concat(d),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(g.f)(l,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(g.f)(o,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(g.f)(i,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(g.f)(c,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(g.f)(s,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}},{content:"".concat(Object(g.f)(u,3)),styles:{fillColor:"#E8E5E5",textColor:"#000",halign:"right"}}];n.push(b);var h=[{colSpan:6,content:"Printed By ".concat(JSON.parse(Object(g.l)("userdata")).user_id," / ").concat(Object(g.i)()),styles:{fontStyle:"italic",textColor:"#000"}}];n.push(h),a.autoTable({head:t,body:n,startY:r,theme:"plain",rowPageBreak:"avoid",margin:{top:10},bodyStyles:{fontSize:8},headStyles:{fontSize:8,textColor:"#000",fillColor:"#E8E5E5"}}),r=a.autoTableEndPosY()+3,n=[];var E=a.internal.getNumberOfPages(),f=a.internal.pageSize.width,p=a.internal.pageSize.height;a.setFontSize(10);for(var k=1;k<E+1;k++){var y=f/2,O=p-10;a.setPage(k),a.text("".concat(k," of ").concat(E),y,O,{align:"center"})}var x=a.output("datauristring"),j=window.open();j.document.open(),j.document.write("<html><head><title>LAPORAN TIMBANG BAKI</title></head><body style='margin:0 !important'><embed width='100%' height='100%'  src="+x+"></embed></body></html>")}),A=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={loading:!1},r.setStartDate=r.setStartDate.bind(Object(l.a)(r)),r.setLastDate=r.setLastDate.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(p.lb)())}},{key:"setStartDate",value:function(t){this.setState({tgl_awal:new Date(t)})}},{key:"setLastDate",value:function(t){if(new Date(t)>new Date)return Object(h.e)("info","Tanggal tidak boleh lebih dari hari ini"),!1;this.setState({tgl_akhir:new Date(t)})}},{key:"exportPdf",value:function(){C(this.props.data)}},{key:"render",value:function(){var t=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{onSubmit:function(e){return t.props.handleSubmit(e)},autoComplete:"off",onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()}},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement(f.a,{name:"tgl_awal",component:y.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(e){return t.setStartDate(e)},placeholder:"Masukan Tanggal Dari"})),s.a.createElement("div",{className:"col-4 mb-2"},s.a.createElement("label",null," \xa0 "),s.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.submitting,type:"submit"},this.props.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Memfilter"):"Lihat Laporan")),s.a.createElement("div",{className:"col-12"},s.a.createElement(k.a,{keyField:"kode_barcode",data:this.props.data||[],columns:this.props.columns,empty:!0,textEmpty:"Data Laporan Barang Detail Kosong"})),this.props.export?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("button",{onClick:function(){return t.exportPdf()},className:"btn btn-warning btn-block"}," ","Export PDF"," ")),s.a.createElement("div",{className:"col-lg-6"},s.a.createElement(j,{data:this.props.data||[],kode_baki:this.props.kode_baki}))):null)))}}]),a}(c.Component);A=Object(b.a)({form:"HeadFilterLaporanTimbangBarang",enableReinitialize:!0})(A);var B=Object(m.b)(function(t){return{databaki:t.datamaster.getDataBaki,initialValues:{tgl_awal:Object(g.h)(),tgl_akhir:Object(g.h)()}}})(A),N=a(127),S=a.n(N),_=function(t){Object(o.a)(a,t);var e=Object(i.a)(a);function a(t){var r;return Object(n.a)(this,a),(r=e.call(this,t)).state={isEdit:!1,modalDialog:!1,isLoading:!1,export:!1,kode_baki:[],LaporanBarangDetail:!1,columns:[{dataField:"kode_gudang",text:"Kode Gudang"},{dataField:"kode_toko",text:"Kode Baki"},{dataField:"qty",text:"Qty",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(g.f)(t,3)," ")}},{dataField:"berat",text:"Berat",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(g.f)(t,3)," ")}},{dataField:"berat_baki",text:"Berat Baki",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(g.f)(t,3)," ")}},{dataField:"berat_bandrol",text:"Berat Bandrol",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(g.f)(t,3)," ")}},{dataField:"total",text:"Total",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(g.f)(t,3)," ")}},{dataField:"timbang",text:"Timbangan",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(g.f)(t,3)," ")}},{dataField:"selisih",text:"Selisih",headerClasses:"text-right",formatter:function(t){return s.a.createElement("div",{className:"text-right"}," ",Object(g.f)(t,3)," ")}}]},r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(Object(g.l)("userdata"));this.setState({username:t.user_id})}},{key:"handleSubmit",value:function(t){var e=this,a={tgl_awal:Object(g.e)(S()(new Date(t.tgl_awal)).format("YYYY-MM-DD"))};this.setState({isLoading:!0,kode_toko:t.kode_baki}),Object(E.d)("timbang-baki/reports?tanggal=".concat(a.tgl_awal)).then(function(t){0===t.data.length?(e.setState({export:!1,LaporanBarangDetail:[]}),Object(h.e)("info","Laporan Timbang Barang Tidak Tersedia")):(Object(h.e)("success","Laporan Timbang Barang Tersedia"),e.setState({export:!0,LaporanBarangDetail:t.data[0].detail_barang}),console.log(e.state.LaporanBarangDetail))}).then(function(){e.setState({isLoading:!1})}).catch(function(t){return e.errorHandling(t)})}},{key:"errorHandling",value:function(t){Object(h.a)(t),this.setState({isLoading:!1})}},{key:"render",value:function(){var t=this;return s.a.createElement("div",null,s.a.createElement("ol",{className:"breadcrumb float-xl-right"},s.a.createElement("li",{className:"breadcrumb-item"},s.a.createElement(u.b,{to:"#"},"Laporan Timbang Baki")),s.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Timbang Baki Detail")),s.a.createElement("h1",{className:"page-header"},"Laporan Timbang Baki"),s.a.createElement(d.a,null,s.a.createElement(d.c,null,"Filter Laporan"),s.a.createElement("br",null),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement(B,{kode_baki:this.state.kode_baki,export:this.state.export,columns:this.state.columns,data:this.state.LaporanBarangDetail,isLoading:this.state.isLoading,onSubmit:function(e){return t.handleSubmit(e)}})))),s.a.createElement("br",null)))}}]),a}(s.a.Component);_=Object(b.a)({form:"FormLaporanTimbangBarang",enableReinitialize:!0})(_);e.default=Object(m.b)(function(t){return{hideModal:t.datamaster.modalDialog}},null)(_)}}]);
//# sourceMappingURL=71.9c42197a.chunk.js.map