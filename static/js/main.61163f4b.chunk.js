(this.webpackJsonplyricsdo=this.webpackJsonplyricsdo||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},53:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),i=c(9),r=c.n(i),l=(c(30),c(31),c(2)),o=(c(32),[{id:1,image:"https://music.usc.edu/files/2016/07/PopularMusic_10_Header.jpg",type:"Popular Music"},{id:2,image:"https://akm-img-a-in.tosshub.com/indiatoday/music-day-story,-facebook_647_062116084641.jpg?wqTCLtMqwQpeuevah3aCZLvcopVtZz24&size=770:433",type:"Rock"},{id:3,image:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Sawai.jpg",type:"Classical"},{id:4,image:"https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201902/698639816.jpg",type:"Soul music"},{id:5,image:"https://www.cmuse.org/wp-content/uploads/2020/06/Characteristics-of-Country-Music.jpg",type:"Country music"},{id:6,image:"https://www.grammy.com/sites/com/files/styles/twitter_image/public/chicagosymphonyorchestra_toddrosenberg.jpg?itok=lgnURVxN",type:"Orchestra"},{id:7,image:"https://www.liveabout.com/thmb/GTjEPzMYKvwiEcU25JZeonzKYwA=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/TheAlmanacSingers-5902520f3df78c5456c436a1.jpg",type:"Folk Music"},{id:8,image:"https://media.npr.org/assets/img/2019/07/15/murder-falcon_wide-6a7466500034276836ba06a964a01981181c0817-s800-c85.jpg",type:"Heavy Metal"}]),j=c(4),u=c.n(j),b=c(5),d=(c(34),c(10)),m=c.n(d),h=m.a.create({baseURL:"https://api.lyrics.ovh/suggest/"}),p=m.a.create({baseURL:"https://api.lyrics.ovh/v1/"}),O=(c(53),c(54),c.p+"static/media/Dog-swimming.8b3b94ca.png"),x=c(6),g=c.n(x),f=c(24),_=c.n(f),v=n.a.createContext(null),y={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",height:"500px",width:"820px"}};function N(e){var t=e.children,c=Object(s.useContext)(v),n=c.artist,i=c.modalIsOpen,r=c.closeModal,l=c.image,o=c.album_title;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(_.a,{isOpen:i,style:y,children:[Object(a.jsx)("button",{type:"button",className:"modal__close",onClick:r,children:"\xd7"}),Object(a.jsxs)("div",{className:"modal__header",children:[Object(a.jsx)("img",{src:l,alt:"album"}),Object(a.jsxs)("span",{className:"modal__artist__details",children:[Object(a.jsx)("h5",{children:o}),Object(a.jsx)("i",{className:"album_icon"}),Object(a.jsx)("h6",{className:"modal-title",children:n})]})]}),Object(a.jsx)("hr",{className:"modal__hr"}),Object(a.jsx)("div",{className:"modal__content",children:Object(a.jsx)("div",{className:"modal-body",children:t})})]})})}var w=function(e){var t=e.artist,c=e.title,n=e.album_title,i=e.image,r=e.setArtistEmpty,o=Object(s.useState)(""),j=Object(l.a)(o,2),d=j[0],m=j[1],h=Object(s.useState)(!0),x=Object(l.a)(h,2),f=x[0],_=x[1],y=Object(s.useState)(!0),w=Object(l.a)(y,2),S=w[0],C=w[1];return Object(s.useEffect)((function(){var e="".concat(t,"/").concat(c);function a(){return(a=Object(b.a)(u.a.mark((function t(){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.get(e);case 2:return c=t.sent,_(!1),m(c.data),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}C(!0),_(!0),function(){a.apply(this,arguments)}()}),[t,c]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(v.Provider,{value:{artist:t,modalIsOpen:S,closeModal:function(){r(),C(!1)},image:i,album_title:n},children:d.lyrics&&!f?Object(a.jsx)(N,{children:Object(a.jsx)("p",{children:d.lyrics})}):d.lyrics||f?Object(a.jsx)(N,{children:Object(a.jsx)(g.a,{loading:"true"})}):Object(a.jsxs)(N,{children:[Object(a.jsx)("img",{src:O,className:"modal__error",alt:"error"}),Object(a.jsx)("p",{children:"Sorry no Lyrics Found!!!"})]})})})};c(73);var S=function(e){var t=e.genrePerPage,c=e.totalGenre,s=e.paginate,n=function(e,t){for(var c=[],a=1;a<=Math.ceil(t/e);a++)c.push(a);return c}(t,c);return Object(a.jsx)("nav",{className:"pagination__nav",children:Object(a.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(a.jsx)("li",{className:"page-item",children:Object(a.jsx)("a",{className:"page-link",onClick:function(){return s(e)},children:e})},e)}))})})},C=n.a.createContext(null);function k(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(""),r=Object(l.a)(i,2),o=r[0],j=r[1],u=Object(s.useState)(""),b=Object(l.a)(u,2),d=b[0],m=b[1],h=Object(s.useState)(""),p=Object(l.a)(h,2),O=p[0],x=p[1],g=Object(s.useContext)(C).currentGenre;return g.length<=0?Object(a.jsx)("h1",{style:{color:"white"},children:"No data available!!!"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("table",{children:Object(a.jsx)("tbody",{children:g.map((function(e){return Object(a.jsxs)("tr",{onClick:function(){return function(e,t,c,a){j(t),n(e),m(a),x(c)}(e.artist.name,e.title,e.album.title,e.artist.picture_medium)},children:[Object(a.jsx)("td",{className:"table__img__col",children:Object(a.jsx)("img",{src:e.album.cover_small,alt:"album"})}),Object(a.jsxs)("td",{className:"table__info",children:[Object(a.jsx)("span",{className:"table__album",children:e.album.title}),Object(a.jsx)("span",{className:"table__title",children:e.title})]})]},e.id)}))})}),c&&Object(a.jsx)(w,{artist:c,title:o,image:d,album_title:O,setArtistEmpty:function(){n("")}})]})}function T(e){var t=e.hideTable,c=e.musicType,s=e.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",className:"close",onClick:t,children:"\xd7"}),Object(a.jsx)("div",{className:"table__caption",children:Object(a.jsx)("p",{children:c})}),Object(a.jsx)("div",{className:"table__table",children:s?Object(a.jsx)(g.a,{loading:s,color:"#ffffff"}):Object(a.jsx)(k,{})})]})}var F=function(e){var t=e.musicType,c=e.hideTable,n=Object(s.useState)([]),i=Object(l.a)(n,2),r=i[0],o=i[1],j=Object(s.useState)(1),d=Object(l.a)(j,2),m=d[0],p=d[1],O=Object(s.useState)(5),x=Object(l.a)(O,1)[0],g=Object(s.useState)(!0),f=Object(l.a)(g,2),_=f[0],v=f[1],y=m*x,N=y-x,w=r.slice(N,y);return Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get(t);case 2:return c=e.sent,o(c.data.data),v(!1),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v(!0),function(){e.apply(this,arguments)}()}),[t]),Object(a.jsx)("div",{className:"table__div",children:Object(a.jsxs)("div",{className:"table__div__border",children:[Object(a.jsx)(C.Provider,{value:{currentGenre:w},children:Object(a.jsx)(T,{hideTable:c,musicType:t,loading:_})}),Object(a.jsx)(S,{genrePerPage:x,totalGenre:r.length,paginate:function(e){return p(e)}})]})})};var M=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("div",{className:"home__row",children:o.map((function(e){return Object(a.jsxs)("div",{className:"home__card",onClick:function(){return function(e){n(e.type)}(e)},children:[Object(a.jsx)("img",{src:e.image,alt:e.type}),Object(a.jsx)("label",{children:e.type})]},e.id)}))}),c&&Object(a.jsx)(F,{musicType:c,hideTable:function(){n("")}})]})};c(74);var P=function(e){var t=e.toggleHome,c=Object(s.useState)(""),n=Object(l.a)(c,2),i=n[0],r=n[1],o=Object(s.useState)(!1),j=Object(l.a)(o,2),u=j[0],b=j[1],d=Object(s.useState)(""),m=Object(l.a)(d,2),h=m[0],p=m[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("p",{className:"header__name font-effect-shadow-multiple",children:"Lyrics Finder"}),Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{className:"header__input__search",placeholder:"Search by Artist/ Song",name:"search",onChange:function(e){r(e.target.value),p(!1)},value:i}),Object(a.jsx)("button",{className:"header__searchbtn",onClick:function(){i?(b(!0),t(!1)):(t(!1),p(!0))},children:Object(a.jsx)("i",{className:"fa fa-search"})})]}),h&&Object(a.jsx)("p",{style:{color:"white",fontSize:"12px",marginTop:"1%"},children:"* This field is required."})]})]}),u&&Object(a.jsx)(F,{musicType:i,hideTable:function(){b(!1),t(!0),r("")}})]})};var L=function(){var e=Object(s.useState)(!0),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(P,{toggleHome:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n(e)},showHome:c}),c&&Object(a.jsx)(M,{})]})};var E=function(){return Object(a.jsx)("div",{className:"app",children:Object(a.jsx)(L,{})})},z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),z()}},[[76,1,2]]]);
//# sourceMappingURL=main.61163f4b.chunk.js.map