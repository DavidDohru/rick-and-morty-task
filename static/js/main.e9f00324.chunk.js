(this["webpackJsonprick-and-morty-task"]=this["webpackJsonprick-and-morty-task"]||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(17),s=c.n(r),i=(c(66),c(67),c(68),c(8)),o=(c(69),c(106)),l=c(103),j=c(26),d=c(25),u=c.n(d),h=c(43),b=c(44),O=c.n(b),p=function(){var e=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://rickandmortyapi.com/api/character");case 3:c=e.sent,t(c.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://rickandmortyapi.com/api/location");case 3:c=e.sent,t(c.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://rickandmortyapi.com/api/episode");case 3:c=e.sent,t(c.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=(c(89),c(104)),m=(c(90),c(1)),g=function(e){var t,c,n,a=e.show,r=e.setShow,s=e.character;return Object(m.jsxs)(v.a,{size:"xl",show:a,onHide:function(){return r(!1)},children:[Object(m.jsx)(v.a.Header,{closeButton:!0,children:Object(m.jsx)(v.a.Title,{children:s.name})}),Object(m.jsxs)(v.a.Body,{className:"PersonCardPopup__container",children:[Object(m.jsx)("img",{alt:s.name,src:s.image}),Object(m.jsxs)("div",{className:"PersonCardPopup__container_text",children:[Object(m.jsxs)("p",{children:["Gender: ",s.gender]}),Object(m.jsxs)("p",{children:["Species: ",s.species]}),Object(m.jsxs)("p",{children:["Status: ",s.status]}),Object(m.jsxs)("p",{children:["Location: ",null===(t=s.location)||void 0===t?void 0:t.name]}),Object(m.jsxs)("p",{children:["Location(URL): ",null===(c=s.location)||void 0===c?void 0:c.url]}),Object(m.jsxs)("p",{children:["Episode(URL): ",null===(n=s.episode)||void 0===n?void 0:n[0]]})]})]})]})},_=function(e){var t=e.character,c=Object(n.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1];return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsxs)("div",{onClick:function(){return o(!0)},className:"RouteCharacters__container-characters",children:[Object(m.jsx)("h3",{children:t.name}),Object(m.jsx)("img",{alt:t.name,src:t.image}),Object(m.jsxs)("p",{className:"RouteCharacters__container-characters_gender",children:["Gender: ",t.gender]}),Object(m.jsxs)("p",{className:"RouteCharacters__container-characters_species",children:["Species: ",t.species]}),Object(m.jsxs)("p",{className:"".concat("Alive"===t.status?"alive__status":"dead__status"),children:["Status: ",t.status]})]}),Object(m.jsx)(g,{show:s,setShow:o,character:t})]})},N=c(18),y=function(e){var t=e.setStatus,c=e.setSpecies,n=e.setGender,a=Object(N.c)((function(e){return e.characterReducer.show}));return Object(m.jsx)(m.Fragment,{children:a&&Object(m.jsxs)("div",{className:"RouteCharacters__container-input",children:["Species:",Object(m.jsxs)("select",{onChange:function(e){c(e.target.value)},className:"RouteCharacters__container-input_species",placeholder:"filter by gender",children:[Object(m.jsx)("option",{value:"Both",children:"Both"}),Object(m.jsx)("option",{value:"Human",children:"Human"}),Object(m.jsx)("option",{value:"Alien",children:"Alien"})]}),"Status:",Object(m.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"RouteCharacters__container-input_species",placeholder:"filter by gender",children:[Object(m.jsx)("option",{value:"Both",children:"All"}),Object(m.jsx)("option",{value:"Dead",children:"Dead"}),Object(m.jsx)("option",{value:"Alive",children:"Alive"}),Object(m.jsx)("option",{value:"unknown",children:"unknown"})]}),"Gender:",Object(m.jsxs)("select",{onChange:function(e){n(e.target.value)},className:"RouteCharacters__container-input_species",placeholder:"filter by gender",children:[Object(m.jsx)("option",{value:"Both",children:"Both"}),Object(m.jsx)("option",{value:"Male",children:"Male"}),Object(m.jsx)("option",{value:"Female",children:"Female"})]})]})})},S=function(){var e,t=Object(n.useState)([]),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)("Both"),o=Object(i.a)(s,2),l=o[0],j=o[1],d=Object(n.useState)("Both"),u=Object(i.a)(d,2),h=u[0],b=u[1],O=Object(n.useState)("Both"),x=Object(i.a)(O,2),f=x[0],v=x[1];return Object(n.useEffect)((function(){p(r)}),[]),Object(m.jsxs)("div",{className:"RouteCharacters",children:[Object(m.jsx)("div",{className:"RouteCharacters__container_title",children:Object(m.jsx)("h2",{children:"List of Characters"})}),Object(m.jsx)(y,{setSpecies:j,setGender:v,setStatus:b}),Object(m.jsx)("div",{className:"RouteCharacters__container",children:function(e){return e.length&&"Both"===f||!e.length||"Male"!==f&&"Female"!==f?e:e.filter((function(e){return e.gender===f}))}(function(e){return e.length&&"Both"===h?e:e.length?e.filter((function(e){return e.status===h})):e}((e=a,e.length&&"Both"===l||!e.length||"Human"!==l&&"Alien"!==l?e:e.filter((function(e){return e.species===l}))))).map((function(e){return Object(m.jsx)(_,{character:e},e.id)}))})]})},w=c(9),C=c(105),k=c(102),L=(c(95),function(e){var t=e.item;return Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.id}),Object(m.jsx)("td",{children:t.name}),Object(m.jsx)("td",{children:t.air_date}),Object(m.jsx)("td",{children:t.url})]})},t.id)}),E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(N.c)((function(e){return console.log(e.episodeReducer.show),e.episodeReducer.show}));Object(n.useEffect)((function(){f(a)}),[]);var d;return Object(m.jsxs)("div",{className:"Episodes__container",children:[Object(m.jsx)("div",{className:"Episodes__container-title",children:Object(m.jsx)("h2",{children:"Episodes:"})}),j&&Object(m.jsx)(C.a.Control,{className:"Episodes__container-filter",onChange:function(e){var t=e.target;return l(t.value)},value:o,placeholder:"filter by names"}),Object(m.jsxs)(k.a,{bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"name"}),Object(m.jsx)("th",{children:"Air date"}),Object(m.jsx)("th",{children:"Url episode"})]})}),(d=c,d&&o.length?d.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})):d).map((function(e){return Object(m.jsx)(L,{item:e},e.id)}))]})]})},R=(c(96),function(e){var t=e.name,c=e.setName,n=e.setType,a=e.dimension,r=e.setDimension,s=e.type,i=Object(N.c)((function(e){return console.log(e.locationReducer.show),e.locationReducer.show}));return Object(m.jsx)(m.Fragment,{children:i&&Object(m.jsxs)("div",{className:"Locations__container-form",children:[Object(m.jsx)(C.a.Control,{placeholder:"filter by names",value:t,onChange:function(e){var t=e.target;return c(t.value)}}),Object(m.jsx)(C.a.Control,{placeholder:"filter by types",value:s,onChange:function(e){var t=e.target;return n(t.value)}}),Object(m.jsx)(C.a.Control,{placeholder:"filter by dimensions",value:a,onChange:function(e){var t=e.target;return r(t.value)}})]})})}),B=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],j=Object(n.useState)(""),d=Object(i.a)(j,2),u=d[0],h=d[1],b=Object(n.useState)([]),O=Object(i.a)(b,2),p=O[0],f=O[1];Object(n.useEffect)((function(){x(f)}),[]);var v;return Object(m.jsxs)("div",{className:"Locations__container",children:[Object(m.jsx)("div",{className:"Locations__container-title",children:Object(m.jsx)("h2",{children:"Locations"})}),Object(m.jsx)(R,{name:c,setName:a,type:o,setType:l,dimension:u,setDimension:h}),Object(m.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Type"}),Object(m.jsx)("th",{children:"Dimension"})]})}),Object(m.jsx)("tbody",{children:function(e){return e.length&&u.length?e.filter((function(e){return e.dimension.toLowerCase().includes(u.toLowerCase())})):e}(function(e){return e.length&&o.length?e.filter((function(e){return e.type.toLowerCase().includes(o.toLowerCase())})):e}((v=p,v.length&&c.length?v.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())})):v))).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.type}),Object(m.jsx)("td",{children:e.dimension})]},e.id)}))})]})]})},M=c(32),I=c(60),A=c(107),P=(c(97),function(e,t,c){return localStorage.setItem(t,JSON.stringify([].concat(Object(M.a)(c),[e])))}),T=function(e,t,c){return localStorage.setItem(t,JSON.stringify(c.filter((function(t){return t!==e}))))};JSON.parse(localStorage.getItem("array"))||localStorage.setItem("array",JSON.stringify([])),JSON.parse(localStorage.getItem("checked"))||localStorage.setItem("checked",JSON.stringify([]));var J=function(){var e=Object(N.c)((function(e){return e.myWatchListReducer.show})),t=Object(n.useState)(0),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),o=Object(i.a)(s,2),l=o[0],j=o[1],d=Object(n.useState)(0),u=Object(i.a)(d,2),h=u[0],b=u[1],O=Object(n.useState)(JSON.parse(localStorage.getItem("array"))||[]),p=Object(i.a)(O,2),x=p[0],f=p[1],v=Object(n.useState)(JSON.parse(localStorage.getItem("checked"))||[]),g=Object(i.a)(v,2),_=g[0],y=g[1];return Object(n.useEffect)((function(){f(JSON.parse(localStorage.getItem("array")))}),[h]),Object(m.jsxs)("div",{className:"MyWatchList__container",children:[x.length>0&&Object(m.jsx)("div",{className:"MyWatchList__container-title",children:Object(m.jsx)("h2",{children:"My watch list :"})}),e&&Object(m.jsxs)("div",{className:"is_valid",children:[Object(m.jsx)(C.a.Control,{isInvalid:!1===a,isValid:!0===a,value:l,onChange:function(e){var t=e.target;t.value.length>0?r(!0):t.value.length<=0&&r(!1),j(t.value)},placeholder:"Write down a new episode to watch later"}),Object(m.jsx)("div",{className:"is_valid-text",children:!1===a&&"Empty , min length = 1"})]}),x.length>0&&Object(m.jsx)("ul",{className:"MyWatchList__container-list_all",children:x.map((function(e){return Object(m.jsxs)("li",{className:"MyWatchList__container-list",children:[Object(m.jsx)(C.a.Check,{checked:JSON.parse(localStorage.getItem("checked")).includes(e.id),value:_,onChange:function(){return y((function(t){return t.includes(e.id)?(T(e.id,"checked",_),t.filter((function(t){return t!==e.id}))):(P(e.id,"checked",_),[].concat(Object(M.a)(t),[e.id]))}))}}),Object(m.jsx)("div",{className:_.includes(e.id)?"checked":"unChecked",children:e.name}),Object(m.jsx)(I.a,{className:"MyWatchList__container-button_close",onClick:function(){var t,c,n;b((function(e){return e+1})),t=e.id,c="array",n=x,localStorage.setItem(c,JSON.stringify(n.filter((function(e){return e.id!==t})))),T(e.id,"checked",_)}})]},e.id)}))}),e&&Object(m.jsx)(A.a,{onClick:function(){if(l.length){var e={name:l,id:(new Date).toLocaleString()};f((function(t){return[].concat(Object(M.a)(t),[e])})),P(e,"array",x),j(""),r(0)}else b((function(e){return e+1})),r(!1)},children:"Add new episode"}),x.length<=0&&Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"MyWatchList__container_empty",children:Object(m.jsx)("h3",{className:"MyWatchList__container_empty-title",children:"Your list is empty ..."})})})]})},W=function(){return Object(m.jsxs)(w.c,{children:[Object(m.jsx)(w.a,{path:"/Episodes",exact:!0,children:Object(m.jsx)(E,{})}),Object(m.jsx)(w.a,{path:"/Locations",exact:!0,children:Object(m.jsx)(B,{})}),Object(m.jsx)(w.a,{path:"/My_watch_list",exact:!0,children:Object(m.jsx)(J,{})}),Object(m.jsx)(w.a,{path:"",children:Object(m.jsx)(S,{})})]})},D=function(){var e=Object(N.b)(),t=Object(n.useState)("/"),c=Object(i.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),d=Object(i.a)(s,2),u=d[0],h=d[1];return Object(m.jsxs)(j.a,{children:[Object(m.jsx)(o.a,{className:"NavigationBar",bg:"dark",variant:"dark",children:Object(m.jsxs)(l.a,{className:"NavigationBar__container",children:[Object(m.jsx)(o.a.Brand,{children:Object(m.jsx)(j.b,{className:"NavigationBar__logo-filter_container",onClick:function(){r("/"),h("character")},to:"/",children:Object(m.jsx)("div",{className:"NavigationBar__logo"})})}),Object(m.jsxs)("nav",{className:"NavigationBar__link-container",children:[Object(m.jsx)(j.b,{onClick:function(){h("character"),r("/")},className:"NavigationBar__link \n                  ".concat("character"===u&&"choosen_nav_link"),to:"/",children:"Characters"}),Object(m.jsx)(j.b,{onClick:function(){r("/Episodes"),h("episodes")},className:"NavigationBar__link \n                 ".concat("episodes"===u&&"choosen_nav_link"),to:"/Episodes",children:"Episodes"}),Object(m.jsx)(j.b,{onClick:function(){r("/Locations"),h("locations")},className:"NavigationBar__link \n                  ".concat("locations"===u&&"choosen_nav_link"),to:"/Locations",children:"Locations"}),Object(m.jsx)(j.b,{onClick:function(){r("/My_watch_list"),h("My_watch_list")},className:"NavigationBar__link \n                  ".concat("My_watch_list"===u&&"choosen_nav_link"),to:"/My_watch_list",children:"My watch list"}),Object(m.jsx)("div",{onClick:function(){"/"===a&&e({type:"CHARACTER/OPEN"}),"/Episodes"===a&&e({type:"EPISODE/OPEN"}),"/Locations"===a&&e({type:"LOCATION/OPEN"}),"/My_watch_list"===a&&e({type:"MYWATCHLIST/OPEN"})},className:"NavigationBar__icon-filter"})]})]})}),Object(m.jsx)(W,{})]})};var F=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(D,{})})},H=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},G=c(61),U=c(39),Y="CHARACTER/OPEN",z={show:!1},V="EPISODE/OPEN",q={show:!1},K="LOCATION/OPEN",Q={show:!1},X="MYWATCHLIST/OPEN",Z={show:!1},$=Object(U.combineReducers)({characterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return{show:!e.show};default:return e}},episodeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{show:!e.show};default:return e}},locationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return{show:!e.show};default:return e}},myWatchListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return{show:!e.show};default:return e}}}),ee=Object(U.createStore)($,Object(G.composeWithDevTools)());s.a.render(Object(m.jsx)(N.a,{store:ee,children:Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(F,{})})}),document.getElementById("root")),H()},66:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.e9f00324.chunk.js.map