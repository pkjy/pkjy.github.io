(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["example"],{"03aa":function(e,t,n){"use strict";n("12f9")},"12d6":function(e,t,n){"use strict";n("f446")},"12f9":function(e,t,n){},"227f":function(e,t,n){"use strict";n("4138")},4138:function(e,t,n){},"428e":function(e,t,n){"use strict";n("4caf")},"4caf":function(e,t,n){},7242:function(e,t,n){},ceda:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r={class:"example"};function a(e,t,n,a,o,l){var i=Object(c["resolveComponent"])("QrcodePure"),d=Object(c["resolveComponent"])("Directive"),u=Object(c["resolveComponent"])("WaterMark"),s=Object(c["resolveComponent"])("Captcha"),b=Object(c["resolveComponent"])("UploadImage");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createVNode"])(i,{id:"#QrcodePure"}),Object(c["createVNode"])(d),Object(c["createVNode"])(u),Object(c["createVNode"])(s),Object(c["createVNode"])(b,{id:"#UploadImage"})])}var o=Object(c["createTextVNode"])("二维码解码"),l={class:"text-left",style:{"margin-top":"16px"}},i=Object(c["createTextVNode"])(" 二维码值为： "),d=Object(c["createTextVNode"])(" 简介：先上传二维码文件，再点击解码。项目仓库 "),u=Object(c["createElementVNode"])("a",{href:"https://github.com/pkjy/qrcode-pure"},"qrcode-pure",-1),s=Object(c["createTextVNode"])("。 "),b=Object(c["createTextVNode"])("二维码编码"),f=Object(c["createTextVNode"])("编码"),v={class:"text-left",style:{"margin-top":"16px"}},j={class:"canvas-box",ref:"canvasBoxA"},O=Object(c["createTextVNode"])(" 简介：输入需要编码的值，再点击编码即可。项目仓库 "),p=Object(c["createElementVNode"])("a",{href:"https://github.com/pkjy/qrcode-pure"},"qrcode-pure",-1),m=Object(c["createTextVNode"])("。 ");function h(e,t,n,r,a,h){var x=Object(c["resolveComponent"])("example-card"),C=Object(c["resolveComponent"])("el-button");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(x,null,{header:Object(c["withCtx"])((function(){return[o]})),content:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("input",{type:"file",multiple:"",onChange:t[0]||(t[0]=function(){return e.handleChange&&e.handleChange.apply(e,arguments)})},null,32),Object(c["createElementVNode"])("div",l,[Object(c["createElementVNode"])("div",null,[i,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.result,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{style:{"text-decoration":"underline","margin-right":"5px"},key:t},Object(c["toDisplayString"])(e.text),1)})),128))])])]})),desc:Object(c["withCtx"])((function(){return[d,u,s]})),_:1}),Object(c["createVNode"])(x,null,{header:Object(c["withCtx"])((function(){return[b]})),content:Object(c["withCtx"])((function(){return[Object(c["withDirectives"])(Object(c["createElementVNode"])("input",{placeholder:"请输入二维码值",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.qrValue=t})},null,512),[[c["vModelText"],e.qrValue]]),Object(c["createVNode"])(C,{onClick:e.encode,type:"primary",size:"mini"},{default:Object(c["withCtx"])((function(){return[f]})),_:1},8,["onClick"]),Object(c["createElementVNode"])("div",v,[Object(c["createElementVNode"])("div",j,null,512)])]})),desc:Object(c["withCtx"])((function(){return[O,p,m]})),_:1})])}n("159b"),n("07ac");var x={style:{"margin-top":"12px"}},C={class:"f-s_16 card__header"},w={class:"card__content"},g={class:"card__footer"};function V(e,t,n,r,a,o){var l=Object(c["resolveComponent"])("el-card");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",x,[Object(c["createVNode"])(l,{class:"box-card"},{header:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("span",C,[Object(c["renderSlot"])(e.$slots,"header",{},void 0,!0)])]})),default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",w,[Object(c["renderSlot"])(e.$slots,"content",{},void 0,!0)]),Object(c["createElementVNode"])("div",g,[Object(c["createElementVNode"])("span",null,[Object(c["renderSlot"])(e.$slots,"desc",{},void 0,!0)])])]})),_:3})])}var N=Object(c["defineComponent"])({name:"ExampleCard"}),_=(n("12d6"),n("6b0d")),k=n.n(_);const y=k()(N,[["render",V],["__scopeId","data-v-7cac606d"]]);var E=y,T=n("fcdb"),B=n.n(T),I=Object(c["defineComponent"])({name:"QrcodePure",components:{ExampleCard:E},setup:function(){var e=Object(c["ref"])([]),t=Object(c["ref"])(""),n=Object(c["ref"])(),r=function(t){0!==t.target.files.length&&(e.value=[],Object.values(t.target.files).forEach((function(t){var n=document.createElement("canvas"),c=n.getContext("2d"),r=new FileReader;r.onload=function(t){var r=new Image;r.onload=function(){if(n.width=r.width,n.height=r.height,c){c.drawImage(r,0,0);var t=B.a.QRDecode(n);e.value.push(t)}},r.src=t&&t.target&&t.target.result},t&&r.readAsDataURL(t)})))},a=function(){var e=B.a.QREncode({text:t.value});n.value.hasChildNodes()&&n.value.removeChild(n.value.firstChild),n.value.appendChild(e.canvas)};return{handleChange:r,encode:a,result:e,qrValue:t,canvasBoxA:n}}});n("d923");const M=k()(I,[["render",h]]);var D=M,S=Object(c["createTextVNode"])("水纹效果指令：（v-wave）"),U=Object(c["createTextVNode"])("v-wave"),L=Object(c["createTextVNode"])("v-wave"),z=Object(c["createTextVNode"])("v-wave"),R=Object(c["createTextVNode"])(" 简介：在按钮上添加v-wave指令即可实现。 "),W=Object(c["createTextVNode"])("下载CANVAS指令：（v-download）"),q={class:"text-left"},A={class:"canvas-box",ref:"canvasBoxB"},Q=Object(c["createTextVNode"])("下载"),F=Object(c["createTextVNode"])(" 简介：在canvas的DOM或者其父级上添加指令v-download，接收两个参数，status为开始下载的开关，布尔值，为真时将开始下载。fileName为文件的名称。 ");function P(e,t,n,r,a,o){var l=Object(c["resolveComponent"])("el-button"),i=Object(c["resolveComponent"])("example-card"),d=Object(c["resolveDirective"])("waves"),u=Object(c["resolveDirective"])("download");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(i,null,{header:Object(c["withCtx"])((function(){return[S]})),content:Object(c["withCtx"])((function(){return[Object(c["withDirectives"])(Object(c["createVNode"])(l,{type:"primary"},{default:Object(c["withCtx"])((function(){return[U]})),_:1},512),[[d]]),Object(c["withDirectives"])(Object(c["createVNode"])(l,{type:"success"},{default:Object(c["withCtx"])((function(){return[L]})),_:1},512),[[d]]),Object(c["withDirectives"])(Object(c["createVNode"])(l,{type:"danger"},{default:Object(c["withCtx"])((function(){return[z]})),_:1},512),[[d]])]})),desc:Object(c["withCtx"])((function(){return[R]})),_:1}),Object(c["createVNode"])(i,null,{header:Object(c["withCtx"])((function(){return[W]})),content:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",q,[Object(c["withDirectives"])(Object(c["createElementVNode"])("div",A,null,512),[[u,{status:e.downloadTag,fileName:Date.now()}]])]),Object(c["createVNode"])(l,{size:"small",type:"primary",style:{width:"150px",margin:"10px auto 0"},onClick:t[0]||(t[0]=function(t){return e.downloadTag=!e.downloadTag})},{default:Object(c["withCtx"])((function(){return[Q]})),_:1})]})),desc:Object(c["withCtx"])((function(){return[F]})),_:1})])}var H=n("1da1"),J=(n("96cf"),Object(c["defineComponent"])({name:"Directive",components:{ExampleCard:E},setup:function(){var e=Object(c["ref"])(),t=Object(c["ref"])(!1),n=function(){var t=Object(H["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=B.a.QREncode({text:"hello,world"}),t.next=3,Object(c["nextTick"])();case 3:e.value.hasChildNodes()&&e.value.removeChild(e.value.firstChild),e.value.appendChild(n.canvas),e.value.setAttribute("v-download","");case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n(),{downloadTag:t,shareLink:"pkjy.github.io",canvasBoxB:e}}}));const $=k()(J,[["render",P]]);var G=$,K=Object(c["createTextVNode"])("水印示例"),X=Object(c["createTextVNode"])(" 水印一 "),Y=Object(c["createTextVNode"])(" 水印二 "),Z=Object(c["createTextVNode"])(" 清除 "),ee=Object(c["createTextVNode"])(" 简介：全屏添加水印。 ");function te(e,t,n,r,a,o){var l=Object(c["resolveComponent"])("el-button"),i=Object(c["resolveComponent"])("example-card");return Object(c["openBlock"])(),Object(c["createBlock"])(i,null,{header:Object(c["withCtx"])((function(){return[K]})),content:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{type:"primary",class:"mr-2",onClick:t[0]||(t[0]=function(t){return e.setWatermark("pkjy")})},{default:Object(c["withCtx"])((function(){return[X]})),_:1}),Object(c["createVNode"])(l,{type:"success",class:"mr-2",onClick:t[1]||(t[1]=function(t){return e.setWatermark("水印二")})},{default:Object(c["withCtx"])((function(){return[Y]})),_:1}),Object(c["createVNode"])(l,{class:"mr-2",type:"danger",onClick:e.clear},{default:Object(c["withCtx"])((function(){return[Z]})),_:1},8,["onClick"])]})),desc:Object(c["withCtx"])((function(){return[ee]})),_:1})}n("a4d3"),n("e01a"),n("d3b7"),n("25f0");var ne=n("d257"),ce=n("b85c"),re=(n("a434"),n("6dd8")),ae="undefined"===typeof window;function oe(e){var t,n=Object(ce["a"])(e);try{for(n.s();!(t=n.n()).done;){var c=t.value,r=c.target.__resizeListeners__||[];r.length&&r.forEach((function(e){e()}))}}catch(a){n.e(a)}finally{n.f()}}function le(e,t){ae||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new re["a"](oe),e.__ro__.observe(e)),e.__resizeListeners__.push(t))}function ie(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}var de=Symbol("watermark-dom-symbol");function ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(c["ref"])(document.body),t=Object(ne["d"])((function(){var t=Object(c["unref"])(e);if(t){var n=t.clientHeight,r=t.clientWidth;l({height:n,width:r})}})),n=de.toString(),r=Object(c["shallowRef"])(),a=function(){var n=Object(c["unref"])(r);r.value=void 0;var a=Object(c["unref"])(e);a&&(n&&a.removeChild(n),ie(a,t))};function o(e){var t=document.createElement("canvas"),n=300,c=240;Object.assign(t,{width:n,height:c});var r=t.getContext("2d");return r&&(r.rotate(-20*Math.PI/120),r.font="16px Vedana",r.fillStyle="rgba(0, 0, 0, 0.15)",r.textAlign="left",r.textBaseline="middle",r.fillText(e,n/20,c)),t.toDataURL("image/png")}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c["unref"])(r);t&&(Object(ne["b"])(e.width)&&(t.style.width="".concat(e.width,"px")),Object(ne["b"])(e.height)&&(t.style.height="".concat(e.height,"px")),Object(ne["b"])(e.str)&&(t.style.background="url(".concat(o(e.str),") left top repeat")))}var i=function(t){if(Object(c["unref"])(r))return l({str:t}),n;var a=document.createElement("div");r.value=a,a.id=n,a.style.pointerEvents="none",a.style.top="0px",a.style.left="0px",a.style.position="fixed",a.style.zIndex="99999";var o=Object(c["unref"])(e);if(!o)return n;var i=o.clientHeight,d=o.clientWidth;return l({str:t,width:d,height:i}),o.appendChild(a),n};function d(e){i(e),le(document.documentElement,t);var n=Object(c["getCurrentInstance"])();n&&Object(c["onBeforeUnmount"])((function(){a()}))}return{setWatermark:d,clear:a}}var se=Object(c["defineComponent"])({name:"WaterMark",components:{ExampleCard:E},setup:function(){var e=ue(),t=e.setWatermark,n=e.clear;return{setWatermark:t,clear:n}}});const be=k()(se,[["render",te]]);var fe=be,ve=Object(c["createTextVNode"])("图形验证码"),je={class:"m-t_1"},Oe=Object(c["createTextVNode"])(" 简介：使用canvas绘制图形验证码, update 事件接收当前验证码内容作为入参。安全考虑，生产环境请使用服务端渲染验证码。 ");function pe(e,t,n,r,a,o){var l=Object(c["resolveComponent"])("validate-code"),i=Object(c["resolveComponent"])("example-card");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(i,null,{header:Object(c["withCtx"])((function(){return[ve]})),content:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{ref:"validate-code",onUpdate:t[0]||(t[0]=function(t){return e.validateCode=t})},null,512),Object(c["createElementVNode"])("div",je,"当前验证码："+Object(c["toDisplayString"])(e.validateCode),1)]})),desc:Object(c["withCtx"])((function(){return[Oe]})),_:1})])}var me={class:"validate-code"};function he(e,t,n,r,a,o){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",me,[Object(c["createElementVNode"])("canvas",{ref:"canvasDom",onClick:t[0]||(t[0]=function(){return e.draw&&e.draw.apply(e,arguments)})},"您的浏览器不支持Canvas",512)])}n("a9e3"),n("ac1f"),n("1276");var xe=Object(c["defineComponent"])({name:"validateCode",props:{codeLength:{default:4,type:Number}},setup:function(e,t){var n=t.emit,r=Object(c["ref"])(),a=Object(c["ref"])(),o=["red","yellow","blue","green","pink","black"],l=Object(c["ref"])([]);function i(){l.value=[];for(var t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=t.split(""),c=0;c<e.codeLength;c++){var r=Math.floor(Math.random()*n.length);l.value.push(n[r])}}function d(){i(),s()}function u(){for(var e=3,t=160,n=30,c=0;c<e;c++){if(!a.value)return;a.value.strokeStyle=o[Math.floor(5*Math.random())],a.value.beginPath(),a.value.moveTo(Math.floor(Math.random()*t),Math.floor(Math.random()*n)),a.value.lineTo(Math.floor(Math.random()*t),Math.floor(Math.random()*n)),a.value.stroke()}}function s(){var e=r.value;if(e.width=160,e.height=40,a.value=e.getContext("2d"),a.value){a.value.fillStyle="#BFEFFF",a.value.fillRect(0,0,160,40),a.value.font="20px Verdana";for(var t=15,n=0;n<4;n++)a.value.fillStyle=o[Math.floor(5*Math.random())],a.value.fillText(l.value[n],t,25),t+=40;u()}}return Object(c["watch"])((function(){return l.value}),(function(e){for(var t="",c=0;c<e.length;c++)t+=e[c];n("update",t.toUpperCase())})),Object(c["onMounted"])((function(){d()})),{canvasDom:r,colors:o,ctx:a,draw:d}}});n("03aa");const Ce=k()(xe,[["render",he],["__scopeId","data-v-6a3add2e"]]);var we=Ce,ge=Object(c["defineComponent"])({name:"Captcha",components:{ExampleCard:E,ValidateCode:we},setup:function(){var e=Object(c["ref"])("");return{validateCode:e}}});const Ve=k()(ge,[["render",pe]]);var Ne=Ve,_e=Object(c["createTextVNode"])("上传图片"),ke=Object(c["createTextVNode"])(" 简介：利用el-upload组件，支持拖动上传。 ");function ye(e,t,n,r,a,o){var l=Object(c["resolveComponent"])("UploadImage",!0),i=Object(c["resolveComponent"])("example-card");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",null,[Object(c["createVNode"])(i,null,{header:Object(c["withCtx"])((function(){return[_e]})),content:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(l,{value:e.imageSrc,onUpload:e.upLoad},null,8,["value","onUpload"])]})),desc:Object(c["withCtx"])((function(){return[ke]})),_:1})])}var Ee=function(e){return Object(c["pushScopeId"])("data-v-ee0bbd20"),e=e(),Object(c["popScopeId"])(),e},Te={class:"upload-container"},Be=Ee((function(){return Object(c["createElementVNode"])("i",{class:"el-icon-upload"},null,-1)})),Ie=Ee((function(){return Object(c["createElementVNode"])("div",{class:"el-upload__text"},[Object(c["createTextVNode"])(" 将文件拖到此处，或"),Object(c["createElementVNode"])("em",null,"点击上传")],-1)})),Me={class:"image-preview"},De={class:"image-preview-wrapper"},Se=["src"],Ue={class:"image-preview-action"};function Le(e,t,n,r,a,o){var l=Object(c["resolveComponent"])("el-upload");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Te,[Object(c["createVNode"])(l,{data:e.dataObj,multiple:!1,"show-file-list":!1,"on-success":e.handleImageSuccess,class:"image-uploader",drag:"",action:"https://httpbin.org/post"},{default:Object(c["withCtx"])((function(){return[Be,Ie]})),_:1},8,["data","on-success"]),Object(c["createElementVNode"])("div",Me,[Object(c["withDirectives"])(Object(c["createElementVNode"])("div",De,[Object(c["createElementVNode"])("img",{src:e.imageUrl},null,8,Se),Object(c["createElementVNode"])("div",Ue,[Object(c["createElementVNode"])("i",{class:"el-icon-delete",onClick:t[0]||(t[0]=function(){return e.rmImage&&e.rmImage.apply(e,arguments)})})])],512),[[c["vShow"],e.imageUrl.length>1]])])])}var ze=Object(c["defineComponent"])({name:"UploadImage",props:{value:{type:String,default:""}},setup:function(e,t){var n=t.emit,r=Object(c["reactive"])({token:"",key:""}),a=Object(c["computed"])((function(){return e.value})),o=function(e){n("upload",e)},l=function(){o("")},i=function(e){console.log("res",e),o(e.files.file)};return{rmImage:l,handleImageSuccess:i,dataObj:r,imageUrl:a}}});n("227f");const Re=k()(ze,[["render",Le],["__scopeId","data-v-ee0bbd20"]]);var We=Re,qe=Object(c["defineComponent"])({name:"UploadImageExample",components:{ExampleCard:E,UploadImage:We},setup:function(){var e=Object(c["ref"])(""),t=function(t){e.value=t};return{upLoad:t,imageSrc:e}}});const Ae=k()(qe,[["render",ye]]);var Qe=Ae,Fe=Object(c["defineComponent"])({name:"Example",components:{QrcodePure:D,Directive:G,WaterMark:fe,Captcha:Ne,UploadImage:Qe}});n("428e");const Pe=k()(Fe,[["render",a],["__scopeId","data-v-5537ea5e"]]);t["default"]=Pe},d923:function(e,t,n){"use strict";n("7242")},f446:function(e,t,n){}}]);