(this["webpackJsonppost-gen"]=this["webpackJsonppost-gen"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},20:function(e,t){},21:function(e,t){},22:function(e,t){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(5),i=n.n(r),a=(n(13),n(14),n(1));var l=function(){return Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)("p",{id:"Header-text",children:"\ud83e\udd16 Post Generator"})})},s=n(4),d=n(2),f=n.p+"static/media/herald-logo.8d473bf3.png",u=n.p+"static/media/herald-post-template.c6de8d3c.png",b=n(9);n(23);var p=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=(t[0],t[1]);Object(c.useEffect)((function(){n(i())}),[]);var o=function(e,t){var n=new d.fabric.Rect({originX:"center",originY:"center",left:400,top:400,width:530,height:530,absolutePositioned:!0,fill:"yellow"});d.fabric.Image.fromURL(t,(function(t){t.set({originY:"center",originX:"center",scaleX:.5,scaleY:.5,left:400,top:350,clipPath:n}),e.add(t),e.renderAll()}))},r=function(e,t){var n=new d.fabric.Textbox(t,{originY:"center",originX:"center",left:400,top:530,width:320,fontSize:28,fill:"#fff",fontFamily:"Open Sans",fontWeight:800,textAlign:"center",cornerSize:12,transparentCorners:!1});return e.add(n),e.setActiveObject(n),n},i=function(){var e,t=new d.fabric.Canvas("mainCanvas",{height:800,width:800,backgroundColor:"#ffede8",preserveObjectStacking:!0,controlsAboveOverlay:!0});return o(t,f),e=t,document.querySelector("#btn-addText").onclick=function(){r(e,"New Text")},function(e){document.querySelector("#btn-save").onclick=function(){var t=e.toDataURL({format:"png",quality:1,multipier:3,width:530,height:530,left:135,top:135});Object(b.saveAs)(t,"magic-image.png")}}(t),function(e){document.querySelector("#backgroundpick").onchange=function(t){var n=t.target.files[0],c=new FileReader;return c.onload=function(t){o(e,t.target.result)},n?c.readAsDataURL(n):null}}(t),function(e){var t=document.querySelector("#colorPicker"),n=document.querySelector("#colorPickerInput"),c=[],o="#ffffff";t.onmousedown=function(){c=e.getActiveObjects().filter((function(e){return e instanceof d.fabric.Textbox})),console.log(c)},t.onmousemove=function(){o=n.value,c.forEach((function(e){return e.set("fill","#".concat(o))})),e.renderAll()},n.onmousedown=function(){c=e.getActiveObjects().filter((function(e){return e instanceof d.fabric.Textbox})),console.log(c)},n.onchange=function(){o=n.value,console.log(c,o),c.forEach((function(e){return e.set("fill","#".concat(o))})),e.renderAll()}}(t),function(e){var t=document.querySelectorAll(".fontOption"),n=[];t.forEach((function(t){t.onclick=function(){(n=e.getActiveObjects().filter((function(e){return e instanceof d.fabric.Textbox}))).forEach((function(e){return e.set("fontFamily",t.innerHTML)})),console.log(n,t.innerHTML),e.renderAll()}}))}(t),t};return Object(a.jsxs)("div",{className:"App-Canvas",children:[Object(a.jsx)("canvas",{id:"mainCanvas"}),Object(a.jsx)("img",{className:"gui",src:u})]})},j=n(6);var x=function(e){var t=Object(c.useState)("#aabbaa"),n=Object(s.a)(t,2),o=n[0],r=n[1];return Object(a.jsxs)("div",{id:"AppColorPicker",children:[Object(a.jsx)(j.b,{id:"colorPicker",color:o,onChange:r}),Object(a.jsx)(j.a,{id:"colorPickerInput",color:o,onChange:r})]})};function g(){document.getElementById("backgroundpick").click()}function h(e){var t="fa fa-"+e.icon+" btn";return Object(a.jsx)("button",{className:t,id:e.id,onClick:e.click?e.click:void 0,children:Object(a.jsx)("span",{children:e.text})})}function m(){return Object(a.jsxs)("div",{className:"dropdown",children:[Object(a.jsx)(h,{icon:"font dropbtn",id:"select-font",text:" font"}),Object(a.jsxs)("div",{className:"dropdown-content",children:[Object(a.jsx)("p",{className:"fontOption",id:"pickfont1",children:"Cheltenham"}),Object(a.jsx)("p",{className:"fontOption",id:"pickfont2",children:"Roboto"}),Object(a.jsx)("p",{className:"fontOption",id:"pickfont3",children:"Times New Roman"})]})]})}var v=function(e){return Object(a.jsx)("div",{className:"App-Config",children:Object(a.jsxs)("div",{id:"config-wrapper",children:[Object(a.jsx)("p",{className:"Upload-text",children:"Upload the image"}),Object(a.jsx)("input",{id:"backgroundpick",type:"file",name:""}),Object(a.jsxs)("div",{id:"picker",className:"control-items",children:[Object(a.jsx)(h,{icon:"upload",id:"btn-upload",text:" IMAGE",click:g}),Object(a.jsx)(h,{icon:"plus-circle",id:"btn-addText",text:" TEXT"})]}),Object(a.jsx)(m,{}),Object(a.jsx)("br",{}),Object(a.jsx)(x,{colorState:e.colorState}),Object(a.jsx)("br",{}),Object(a.jsx)(h,{icon:"download",id:"btn-save",text:" SAVE"})]})})};d.fabric.Object.prototype.controls.deleteControl=new d.fabric.Control({x:.5,y:-.5,offsetY:16,cursorStyle:"pointer",mouseUpHandler:w,render:y,cornerSize:24}),d.fabric.Object.prototype.transparentCorners=!1,d.fabric.Object.prototype.cornerColor="#00dba1",d.fabric.Object.prototype.borderColor="#b8b8b8",d.fabric.Object.prototype.cornerStyle="circle",d.fabric.Object.prototype.controls.deleteControl=new d.fabric.Control({x:.5,y:-.5,offsetY:16,cursorStyle:"pointer",mouseUpHandler:w,render:y,cornerSize:24}),d.fabric.Textbox.prototype.controls.deleteControl=new d.fabric.Control({x:.5,y:-.5,offsetY:16,cursorStyle:"pointer",mouseUpHandler:w,render:y,cornerSize:24});var O=document.createElement("img");function w(e,t){var n=t.target,c=n.canvas;c.remove(n),c.requestRenderAll()}function y(e,t,n,c,o){var r=this.cornerSize;e.save(),e.translate(t+20,n-36),e.rotate(d.fabric.util.degreesToRadians(o.angle)),e.drawImage(O,-r/2,-r/2,r,r),e.restore()}O.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";var C=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(l,{}),Object(a.jsxs)("div",{id:"App-Body",children:[Object(a.jsx)(v,{}),Object(a.jsx)(p,{})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),k()}},[[26,1,2]]]);
//# sourceMappingURL=main.2471ae13.chunk.js.map