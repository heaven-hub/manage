(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d27336c"],{f7f9:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("el-form",{staticClass:"order-form",attrs:{inline:!0,model:e.orderForm}},[t("el-form-item",{attrs:{label:"订单号"}},[t("el-input",{attrs:{placeholder:"订单号"},model:{value:e.orderForm.orderNo,callback:function(r){e.$set(e.orderForm,"orderNo",r)},expression:"orderForm.orderNo"}})],1),t("el-form-item",{attrs:{label:"收货人"}},[t("el-input",{attrs:{placeholder:"收货人"},model:{value:e.orderForm.consignee,callback:function(r){e.$set(e.orderForm,"consignee",r)},expression:"orderForm.consignee"}})],1),t("el-form-item",{attrs:{label:"手机号"}},[t("el-input",{attrs:{placeholder:"手机号"},model:{value:e.orderForm.phone,callback:function(r){e.$set(e.orderForm,"phone",r)},expression:"orderForm.phone"}})],1),t("el-form-item",{attrs:{label:"订单状态"}},[t("el-select",{attrs:{placeholder:"订单状态"},model:{value:e.orderForm.orderState,callback:function(r){e.$set(e.orderForm,"orderState",r)},expression:"orderForm.orderState"}},[t("el-option",{attrs:{label:"已送达",value:"已送达"}}),t("el-option",{attrs:{label:"未送达",value:"未送达"}}),t("el-option",{attrs:{label:"派送中",value:"派送中"}})],1)],1),t("el-form-item",{attrs:{label:"选择时间"}},[t("el-col",{attrs:{span:11}},[t("el-date-picker",{attrs:{"value-format":"yyyy:MM:dd HH:mm:ss",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.orderForm.date,callback:function(r){e.$set(e.orderForm,"date",r)},expression:"orderForm.date"}},[e._v(" > ")])],1)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),t("div",{staticClass:"table"},[t("el-table",{staticStyle:{width:"80%"},attrs:{data:e.orderData,border:""}},[t("el-table-column",{attrs:{fixed:"",prop:"orderNo",label:"订单号",width:"150"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v(e._s(r.row.orderNo))]}}])}),t("el-table-column",{attrs:{prop:"orderTime",label:"下单时间",width:"160"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v(e._s(r.row.orderTime))]}}])}),t("el-table-column",{attrs:{prop:"phone",label:"手机号",width:"120"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v(e._s(r.row.phone))]}}])}),t("el-table-column",{attrs:{prop:"consignee",label:"收货人",width:"120"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v(e._s(r.row.consignee))]}}])}),t("el-table-column",{attrs:{prop:"deliverAddress",label:"配送地址",width:"120"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v(e._s(r.row.deliverAddress))]}}])}),t("el-table-column",{attrs:{prop:"deliveryTime",label:"送达时间",width:"160"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v(e._s(r.row.deliveryTime))]}}])}),t("el-table-column",{attrs:{prop:"remarks",label:"用户备注",width:"120"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v(e._s(r.row.remarks))]}}])}),t("el-table-column",{attrs:{prop:"orderAmount",label:"订单金额",width:"120"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v(e._s(r.row.orderAmount))]}}])}),t("el-table-column",{attrs:{prop:"orderState",label:"订单状态",width:"120"},scopedSlots:e._u([{key:"default",fn:function(r){return[e._v(e._s(r.row.orderState))]}}])}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.check(r.row)}}},[e._v("查看")]),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.edit(r.row)}}},[e._v("编辑")])]}}])})],1)],1),t("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[1,3,5,10],"page-size":3,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},n=[],a=(t("422c"),t("1f90"),t("6a61"),t("2e91")),l=t("f8b7"),s=t("caaf"),d=t.n(s),i={data:function(){return{orderForm:{orderNo:"",consignee:"",phone:"",orderState:"",date:""},total:5,currentPage:1,pageSize:3,orderData:[]}},methods:{getOrderList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var t,o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(l["b"])({currentPage:e.currentPage,pageSize:e.pageSize,orderNo:e.orderForm.orderNo,consignee:e.orderForm.consignee,phone:e.orderForm.phone,orderState:e.orderForm.orderState,date:null==e.orderForm.date?JSON.stringify(""):JSON.stringify(e.orderForm.date)});case 2:t=r.sent,o=t.total,n=t.data,n.forEach((function(e){e.orderTime=d()(e.orderTime).format("YYYY:MM:DD HH:mm:ss"),e.deliveryTime=d()(e.deliveryTime).format("YYYY:MM:DD HH:mm:ss")})),e.orderData=n,e.total=o;case 8:case"end":return r.stop()}}),r)})))()},handleSizeChange:function(e){this.pageSize=e,this.getOrderList()},handleCurrentChange:function(e){this.currentPage=e,this.getOrderList()},onSubmit:function(){this.currentPage=1,this.getOrderList()},check:function(){},edit:function(){}},created:function(){this.getOrderList()}},u=i,c=t("c701"),m=Object(c["a"])(u,o,n,!1,null,"b4ec0398",null);r["default"]=m.exports},f8b7:function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"a",(function(){return a})),t.d(r,"c",(function(){return l}));var o=t("a6a2");function n(e){return o["a"].get("/order/search",e)}function a(){return o["a"].get("/order/totaldata")}function l(e){return o["a"].get("/order/ordertotal",e)}}}]);
//# sourceMappingURL=chunk-7d27336c.1d7dc3ae.js.map