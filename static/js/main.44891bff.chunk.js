(this["webpackJsonpyoutube-playlist"]=this["webpackJsonpyoutube-playlist"]||[]).push([[0],{41:function(n,e,t){n.exports=t(57)},57:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),o=t(33),r=t.n(o),l=t(14),c=t(38),d=t(3),u={bgcolor:"#353535",bgcolorItem:"#414141",bgcolorItemActive:"#405c63",bgcolorPlayed:"#526d4e",border:"none",borderPlayed:"none",color:"#fff"},s={bgcolor:"#fff",bgcolorItem:"#fff",bgcolorItemActive:"#80a7b1",bgcolorPlayed:"#7d9979",border:"1px solid #353535",borderPlayed:"none",color:"#353535"},p=t(4);function m(){var n=Object(p.a)(["\n  width: 100%;\n  max-width: 1500px;\n  background-color: ",";\n  color: ",";\n  transition: all 0.2s ease-in-out;\n\n  @media (min-width: 1000px) {\n    display: flex;\n  }\n"]);return m=function(){return n},n}var h=d.c.main(m(),(function(n){return n.theme.bgcolor}),(function(n){return n.theme.color})),f=t(36),g=t.n(f);function v(){var n=Object(p.a)(["\n  height: 300px;\n\n  @media (min-width: 600px) {\n    height: 100vh;\n    max-height: 500px;\n  }\n\n  @media (min-width: 1000px) {\n    flex: 0.6;\n    height: 600px;\n    max-height: 600px;\n  }\n"]);return v=function(){return n},n}var b=d.c.div(v()),x=function(n){var e=n.activeVideo,t=n.autoPlay,i=n.endCallback;return a.a.createElement(b,null,a.a.createElement(g.a,{className:"react-player",width:"100%",height:"100%",playing:t,controls:!0,url:e.url,onEnded:i}))};function y(){var n=Object(p.a)(["\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n\n  body {\n    font-size: 10px;\n    font-family: 'Hind', sans-serif;\n  }\n\n  .App {\n    min-height: 100vh;\n    display:flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]);return y=function(){return n},n}var E="#505770",w="#4b965f",V=Object(d.b)(y());function j(){var n=Object(p.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0 15px;\n\n  .nightMode {\n    display: inline-block;\n    width: 95px;\n    font-size: 0.8rem;\n    margin-right: 10px;\n\n    @media (min-width: 500px) {\n      font-size: 1rem;\n    }\n  }\n\n  input {\n    display: none;\n\n    &:checked + label::before {\n      left: 50%;\n    }\n  }\n\n  label {\n    width: 30px;\n    height: 20px;\n    border-radius: 30px;\n    position: relative;\n    background-color: ",";\n    cursor: pointer;\n\n    &::before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 5px;\n      transform: translateY(-50%);\n      width: 10px;\n      height: 10px;\n      border-radius: 20px;\n      background-color: white;\n      transition: all 0.1s ease-in-out;\n    }\n  }\n"]);return j=function(){return n},n}var k=d.c.div(j(),E),O=function(n){var e=n.nightMode,t=n.toggleNightMode;return a.a.createElement(k,null,a.a.createElement("span",{className:"nightMode"},e?"Bright Mode":"Night Mode"," "),a.a.createElement("input",{type:"checkbox",id:"checkbox"}),a.a.createElement("label",{htmlFor:"checkbox",onClick:t}))};function M(){var n=Object(p.a)(["\n  height: 65px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 0.8rem;\n  font-weight: bold;\n  background-color: #696969;\n  color: white;\n  padding: 0 15px;\n\n  @media (min-width: 500px) {\n    font-size: 0.9rem;\n  }\n\n  span {\n    display: block;\n    width: 45px;\n    border-radius: 30px;\n    text-align: center;\n    padding: 3px 0;\n    font-size: 0.7rem;\n  }\n"]);return M=function(){return n},n}var N=d.c.div(M()),z=function(n){var e=n.activeVideo,t=n.totalVideo;return a.a.createElement(N,null,a.a.createElement("p",null,e.title),a.a.createElement("span",null,e.num," / ",t))};function I(){var n=Object(p.a)(["\n  list-style-type: none;\n  height: calc(100% - 115px);\n  display: flex;\n  flex-direction: column;\n  overflow-y: scroll;\n  font-size: 0.8rem;\n\n  li {\n    flex: 1;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n\n    .col-1 {\n      width: 15px;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n\n      .active {\n        width: 5px;\n        height: 5px;\n        border-radius: 50%;\n        background-color: ",";\n      }\n    }\n\n    .col-2 {\n      flex: 1;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      font-weight: lighter;\n      border-radius: 10px;\n      padding-right: 15px;\n\n      span:nth-child(1) {\n        width: 20px;\n        margin-right: 7px;\n        border-right: 3px solid gray;\n      }\n\n      span:nth-child(2) {\n        font-size: 0.9rem;\n\n        a {\n          text-decoration: none;\n          color: ",";\n        }\n      }\n\n      span:nth-child(3) {\n        display: flex;\n        justify-content: center;\n        margin-left: auto;\n        border-radius: 5px;\n        width: 45px;\n        padding: 5px 0;\n        font-size: 0.6rem;\n        background: #565656;\n        color: #fff;\n      }\n    }\n  }\n"]);return I=function(){return n},n}var P=d.c.ul(I(),w,(function(n){return n.theme.color})),S=t(13),J=function(n){var e=n.video,t=n.activeVideo;return a.a.createElement("li",{key:e.title},a.a.createElement("div",{className:"col-1"},t.num===e.num?a.a.createElement("span",{className:"active"}):null),a.a.createElement("div",{className:"col-2"},a.a.createElement("span",null,e.num),a.a.createElement("span",null,a.a.createElement(S.b,{to:"/".concat(e.id)},e.title)),a.a.createElement("span",null,e.duration)))},A=function(n){var e=n.videos,t=n.activeVideo;return a.a.createElement(P,null,e.map((function(n){return a.a.createElement(J,{key:n.title,video:n,activeVideo:t})})))};function C(){var n=Object(p.a)(["\n  height: 600px;\n  font-size: 1.2rem;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n\n  @media (min-width: 1000px) {\n    flex: 0.4;\n  }\n"]);return C=function(){return n},n}var B=d.c.div(C()),q=function(n){var e=n.nightMode,t=n.toggleNightMode,i=n.activeVideo,o=n.totalVideo,r=n.videos;return a.a.createElement(B,null,a.a.createElement(O,{nightMode:e,toggleNightMode:t}),a.a.createElement(z,{activeVideo:i,totalVideo:o}),a.a.createElement(A,{videos:r,activeVideo:i}))},F=function(n){var e=JSON.parse(document.querySelector('[name="videos"]').value),t=JSON.parse(localStorage.getItem("playlist")),o={videos:e.playlist,activeVideo:e.playlist[0],autoPlay:!0,nightMode:!0},r=Object(i.useState)(o||t),p=Object(c.a)(r,2),m=p[0],f=p[1];Object(i.useEffect)((function(){localStorage.setItem("playlist",JSON.stringify(m))}),[m]),Object(i.useEffect)((function(){var e=n.match.params.activeVideo;if(e){var t=m.videos.findIndex((function(n){return n.id===e}));f((function(n){return Object(l.a)(Object(l.a)({},n),{},{activeVideo:m.videos[t]})}))}else n.history.push("/".concat(m.activeVideo.id))}),[m.videos,m.activeVideo,n.match.params,n.history]);return a.a.createElement(d.a,{theme:m.nightMode?u:s},a.a.createElement(h,null,a.a.createElement(x,{activeVideo:m.activeVideo,autoPlay:m.autoPlay,endCallback:function(){var e=n.match.params.activeVideo,t=m.videos.findIndex((function(n){return n.id===e})),i=t===m.videos.length-1?0:t+1;n.history.push("/".concat(m.videos[i].id))}}),a.a.createElement(q,{nightMode:m.nightMode,toggleNightMode:function(){f((function(n){return Object(l.a)(Object(l.a)({},n),{},{nightMode:!m.nightMode})}))},activeVideo:m.activeVideo,totalVideo:m.videos.length,videos:m.videos})))},H=t(1),Y=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(V,null),a.a.createElement(H.c,null,a.a.createElement(H.a,{exact:!0,path:"/",component:F}),a.a.createElement(H.a,{exact:!0,path:"/:activeVideo",component:F})))};r.a.render(a.a.createElement(S.a,{basename:"/youtube-playlist"},a.a.createElement(Y,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.44891bff.chunk.js.map