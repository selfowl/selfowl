(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{419:function(t,e,o){var content=o(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(190).default)("1b7833da",content,!0,{sourceMap:!1})},422:function(t,e,o){"use strict";o(419)},423:function(t,e,o){var n=o(189)(!1);n.push([t.i,"html{scroll-behavior:smooth}",""]),t.exports=n},426:function(t,e,o){"use strict";o.r(e);o(9),o(26),o(49),o(16),o(51),o(225),o(41);var n=o(416),r=o.n(n),l=o(417),c={name:"IndexPage",components:{},inject:["$chakraColorMode","$toggleColorMode"],data:function(){return{start_slice:0,pageID:1,end_slice:20,activeID:0,blank_array:[],selectProperty:{category:"всекатегории",type:"всетипы",district:"любой"},filt:"всекатегории",isOpen:!1,isOpen_2:!1,property:{imageUrl:"https://bit.ly/2Z4KKcF",imageAlt:"Rear view of modern home with pool",beds:3,baths:2,title:"Modern home in city center in the heart of historic Los Angeles",formattedPrice:"$1,900.00",reviewCount:34,rating:4},showModal:!1,mainStyles:{dark:{bg:"gray.700",color:"whiteAlpha.900"},light:{bg:"white",color:"gray.900"}}}},computed:{dataJson:function(){var t=[];return"всекатегории"===this.selectProperty.category?l:"участок"===this.selectProperty.category?(l.forEach((function(e){"участок"==e.category&&t.push(e)})),t):l},colorMode:function(){return this.$chakraColorMode()},theme:function(){return this.$chakraTheme()},toggleColorMode:function(){return this.$toggleColorMode}},methods:{getId:function(t){var e=t+20*(this.pageID-1);return console.log(e),e},selectPage:function(t){this.start_slice=20*(t-1),this.end_slice=20*t,this.pageID=t,window.scrollTo(0,0)},open:function(){this.isOpen=!0},close:function(){this.isOpen=!1},closeDialog:function(){this.isOpen_2=!1},openDialog:function(t){this.activeID=t,this.isOpen_2=!0,console.log(1)},prettify:function(t){return t.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")},kitcut:function(text,t){var e;return(text=text.trim()).length<=t?text:((e=(text=text.slice(0,t)).lastIndexOf(" "))>0&&(text=text.substr(0,e)),text+"...")},testfunc:function(){r.a.send("VKWebAppAllowNotifications").then((function(data){console.log(data)})),r.a.send("VKWebAppAddToHomeScreen").then((function(data){console.log(data)})).catch((function(t){}))}},mounted:function(){r.a.subscribe((function(t){return console.log(t)})),r.a.send("VKWebAppInit",{})}},d=(o(422),o(105)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("c-box",t._b({attrs:{w:"100vw",p:"4","flex-dir":"column"}},"c-box",t.mainStyles[t.colorMode],!1),[o("c-flex",{attrs:{align:"center",w:"100%"}},[o("c-flex",{attrs:{align:"center",justify:"center"}},[o("CButton",{attrs:{mr:"3","aria-label":"Switch to "+("light"===t.colorMode?"dark":"light")+" mode"},on:{click:t.open}},[t._v("🛠")]),t._v(" "),o("CIconButton",{attrs:{mr:"3",icon:"light"===t.colorMode?"moon":"sun","aria-label":"Switch to "+("light"===t.colorMode?"dark":"light")+" mode"},on:{click:t.toggleColorMode}}),t._v(" "),o("c-flex",{attrs:{align:"flex-start"}},[o("CHeading",{attrs:{"text-align":"left",as:"h3",size:"lg"}},[t._v("\n        ЮГ Недвижимость\n      ")])],1)],1)],1),t._v(" "),o("c-button",{attrs:{position:"fixed",zIndex:"999999",bottom:"15px",left:"calc(50% - 50px)","variant-color":"green",variant:"solid",w:"100px"},on:{click:function(e){return t.$router.push("map")}}},[t._v("🗺 Карта")])],1),o("hr"),t._v(" "),o("CBox",t._b({attrs:{d:"flex",w:"100vw",h:"100%","flex-dir":"column","justify-content":"flex-start"}},"CBox",t.mainStyles[t.colorMode],!1),[o("c-box",{attrs:{p:5,shadow:"md","border-width":"1px"}},[o("c-heading",[t._v("Каталог жилья")]),t._v(" "),o("c-text",{attrs:{mt:4}},[t._v("В данном каталоге Вы можете найти жильё в любом районе г. Сочи."),o("br"),t._v("Покупка/Аренда")])],1),t._v(" "),o("c-flex",{attrs:{display:"flex",flexDirection:"row",flexWrap:"wrap",align:"center"}},[t._l(t.dataJson.slice(t.start_slice,t.end_slice),(function(e,n){return o("CBox",{key:n},[o("c-box",{attrs:{maxW:"sm","border-width":"1px",rounded:"lg",overflow:"hidden",margin:"15px 0px",maxWidth:"360px"}},[o("CBox",{attrs:{maxHeight:"250px",overflow:"hidden"}},[o("c-badge",{attrs:{rounded:"full",px:"2","variant-color":"green",position:"absolute",margin:"15px",padding:"5px 15px"}},[t._v("\n          "+t._s(e.category+" • "+e.type)+"\n        ")]),o("c-image",{attrs:{src:e.image[0],width:"100%"}})],1),t._v(" "),o("c-box",{attrs:{p:"6"}},[o("c-box",{attrs:{d:"flex","align-items":"baseline"}},[o("c-box",{attrs:{color:"gray.500","font-weight":"semibold","letter-spacing":"wide","font-size":"xs","text-transform":"uppercase",ml:"2"}})],1),t._v(" "),o("c-box",{attrs:{mt:"1","font-weight":"semibold",as:"h4","line-height":"tight","is-truncated":"",display:"flex",columnGap:"5px",justifyContent:"flex-start",flexWrap:"nowrap",alignItems:"center"}},[t._v("\n      🏡 "+t._s(e.location.address)+"\n      ")]),t._v(" "),o("c-box",{attrs:{"font-weight":"bold",as:"h4","line-height":"tight","is-truncated":""}},[t._v("\n      💰 "+t._s(t.prettify(e.price.value)+" руб.")+"\n      ")]),t._v("\n      "+t._s(t.kitcut(e.description,150))+"\n      "),o("c-box",{attrs:{d:"flex",margin:"10px 0px",justifyContent:"space-between",mt:"2","align-items":"center"}},[o("NuxtLink",{attrs:{to:"/object/"+e["@internal-id"]}},[o("c-button",{attrs:{"variant-color":"blue",size:"md",w:"100%"}},[t._v("\n    Смотреть объект ➜\n  ")])],1),t._v(" "),o("c-icon-button",{attrs:{"variant-color":"vue","aria-label":"Позвонить нам",size:"md",icon:"phone"},on:{click:function(e){return t.openDialog(n)}}}),t._v(" "),o("a",{attrs:{href:"https://vk.me/yugned_ru",target:"_blank"}},[o("c-icon-button",{attrs:{"variant-color":"vue","aria-label":"Написать нам",size:"md",icon:"email"}})],1),t._v(" "),o("c-icon-button",{attrs:{"variant-color":"vue","aria-label":"В избранное",size:"md",icon:"add"},on:{click:t.testfunc}})],1)],1)],1)],1)})),t._v(" "),o("CBox",{attrs:{m:"15px"}},[o("c-box",{attrs:{d:"flex",w:"100%",margin:"10px",overflow:"auto",justifyContent:"space-evenly",mt:"2","align-items":"center"}},t._l(5,(function(e){return o("c-button",{key:e,attrs:{"variant-color":"vue","aria-label":"Позвонить нам",size:"md",m:"5px",w:"50%"},on:{click:function(o){return t.selectPage(e)}}},[t._v(t._s(e))])})),1)],1)],2)],1),t._v(" "),o("div",[o("c-alert-dialog",{attrs:{"is-open":t.isOpen_2,"least-destructive-ref":t.$refs.cancelRef,"on-close":t.closeDialog}},[o("c-alert-dialog-overlay"),t._v(" "),o("c-alert-dialog-content",[o("c-alert-dialog-header",{attrs:{"font-size":"lg","font-weight":"bold"}},[t._v("\n          Звонок менеджеру\n        ")]),t._v(" "),o("c-text",{attrs:{as:"cite",m:"0px 15px"}},[t._v("При звонке сообщите номер или адрес объекта")]),o("hr"),t._v(" "),o("c-alert-dialog-body",[o("b",[t._v("Менеджер объекта:")]),t._v(" "+t._s(t.dataJson[t.activeID]["sales-agent"].name)),o("br"),t._v(" "),o("b",[t._v("Адрес объекта:")]),t._v(" "+t._s(t.dataJson[t.activeID].location.address)),o("br"),t._v(" "),o("b",[t._v("Номер объекта:")]),t._v(" #"+t._s(t.dataJson[t.activeID]["@internal-id"])),o("br")]),t._v(" "),o("c-alert-dialog-footer",[o("c-button",{ref:"cancelRef",on:{click:t.closeDialog}},[t._v("\n            Закрыть\n          ")]),t._v(" "),o("a",{attrs:{href:"tel:"+t.dataJson[t.activeID]["sales-agent"].phone}},[o("c-button",{attrs:{variantColor:"vue",ml:"3"}},[t._v("\n            Позвонить\n          ")])],1)],1)],1)],1),t._v(" "),o("c-modal",{attrs:{"is-open":t.isOpen,"on-close":t.close}},[o("c-modal-content",{ref:"content"},[o("c-modal-header",[t._v("Фильтры • Сортировка")]),t._v(" "),o("c-modal-close-button"),t._v(" "),o("c-modal-body",[o("c-select",{attrs:{placeholder:"Тип жилья"},model:{value:t.selectProperty.category,callback:function(e){t.$set(t.selectProperty,"category",e)},expression:"selectProperty.category"}},[o("option",{attrs:{value:"всекатегории"}},[t._v("Все Категории")]),t._v(" "),o("option",{attrs:{value:"квартира"}},[t._v("Квартира")]),t._v(" "),o("option",{attrs:{value:"участок"}},[t._v("Земельный участок")]),t._v(" "),o("option",{attrs:{value:"домкоттедж"}},[t._v("Дом / Коттедж")]),t._v(" "),o("option",{attrs:{value:"таунхаус"}},[t._v("Таунхаус")])]),o("br"),t._v(" "),o("c-select",{attrs:{placeholder:"Тип сделки"},model:{value:t.selectProperty.type,callback:function(e){t.$set(t.selectProperty,"type",e)},expression:"selectProperty.type"}},[o("option",{attrs:{value:"всетипы"}},[t._v("Все типы")]),t._v(" "),o("option",{attrs:{value:"продажа"}},[t._v("Продажа")]),t._v(" "),o("option",{attrs:{value:"аренда"}},[t._v("Аренда")])]),o("br"),t._v(" "),o("c-select",{attrs:{placeholder:"Район"},model:{value:t.selectProperty.district,callback:function(e){t.$set(t.selectProperty,"district",e)},expression:"selectProperty.district"}},[o("option",{attrs:{value:"любой"}},[t._v("Любой")]),t._v(" "),o("option",{attrs:{value:"адлерский"}},[t._v("Адлерский")]),t._v(" "),o("option",{attrs:{value:"лазаревский"}},[t._v("Лазаревский")]),t._v(" "),o("option",{attrs:{value:"центральный"}},[t._v("Центральный")]),t._v(" "),o("option",{attrs:{value:"хостинский"}},[t._v("Хостинский")])]),o("br"),t._v(" "),o("CBox",{attrs:{display:"flex"}},[o("c-input",{attrs:{placeholder:"Стоимость от"}}),t._v(" "),o("c-input",{attrs:{placeholder:"Стоимость до"}})],1)],1),t._v(" "),o("c-modal-footer",[o("c-button",{attrs:{"variant-color":"blue",mr:"3"},on:{click:t.close}},[t._v("\n            Сохранить\n          ")]),t._v(" "),o("c-button",{on:{click:t.close}},[t._v("Отмена")])],1)],1),t._v(" "),o("c-modal-overlay")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o(294)(component,{CButton:o(96).CButton,CIconButton:o(96).CIconButton,CHeading:o(96).CHeading,CFlex:o(96).CFlex,CButton:o(96).CButton,CBox:o(96).CBox,CHeading:o(96).CHeading,CText:o(96).CText,CBadge:o(96).CBadge,CImage:o(96).CImage,CBox:o(96).CBox,CIconButton:o(96).CIconButton,CAlertDialogOverlay:o(96).CAlertDialogOverlay,CAlertDialogHeader:o(96).CAlertDialogHeader,CAlertDialogBody:o(96).CAlertDialogBody,CAlertDialogFooter:o(96).CAlertDialogFooter,CAlertDialogContent:o(96).CAlertDialogContent,CAlertDialog:o(96).CAlertDialog,CModalHeader:o(96).CModalHeader,CModalCloseButton:o(96).CModalCloseButton,CSelect:o(96).CSelect,CInput:o(96).CInput,CModalBody:o(96).CModalBody,CModalFooter:o(96).CModalFooter,CModalContent:o(96).CModalContent,CModalOverlay:o(96).CModalOverlay,CModal:o(96).CModal})}}]);