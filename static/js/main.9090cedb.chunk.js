(this.webpackJsonplyricsdo=this.webpackJsonplyricsdo||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},66:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},96:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(11),r=c.n(n),i=(c(45),c(46),c(2)),l=(c(47),c(3)),j=c.n(l),o=c(6),u=(c(48),c(20)),b=c.n(u),d=b.a.create({baseURL:"https://api.lyrics.ovh/suggest/"}),h=b.a.create({baseURL:"https://api.lyrics.ovh/v1/"}),m=(c(66),c(67),c.p+"static/media/Dog-swimming.8b3b94ca.png"),O=c(7),_=c.n(O),p=(c(33),c(0));c(87);c(88),c(89);var x=c(10),f=c.n(x),g=c(9),v=c.n(g),y=c(34),N=c(36),w=c.n(N);function S(e){var t=e.music,c=e.lyrics,a=t.artist,s=t.title,n=t.albumTitle,r=t.picture;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"songlyrics__header",children:[Object(p.jsxs)("div",{className:"songlyrics__data",children:[Object(p.jsx)("img",{src:r,alt:"album",className:"songlyrics__image"}),Object(p.jsxs)("div",{className:"songlyrics__caption",children:[Object(p.jsxs)("span",{className:"songlyrics__title",children:[Object(p.jsx)(v.a,{className:"songlyrics__header__icon"}),"\xa0",n]}),Object(p.jsxs)("span",{className:"songlyrics__artist",children:[Object(p.jsx)(f.a,{className:"songlyrics__header__icon"}),"\xa0",a]})]})]}),Object(p.jsx)("button",{onClick:function(){var e=new y.a("p","pt","a4"),t=500;t>=e.internal.pageSize.height&&(e.addPage(),t=0),e.setFont("cursive","bold",600),e.setFontSize(12),e.text(200,20,a),e.text(200,40,n),e.setFontSize(10),e.text(20,70,"".concat(c.lyrics.replace(/\r/g,"\r\n\n"))),e.save("".concat(s,".pdf"))},className:"songlyrics__download",children:Object(p.jsx)(w.a,{})})]})})}var k=function(e){var t=e.music,c=t.artist,s=t.title,n=t.albumTitle,r=(t.picture,Object(a.useState)("")),l=Object(i.a)(r,2),u=l[0],b=l[1],d=Object(a.useState)(!0),O=Object(i.a)(d,2),x=O[0],f=O[1];return Object(a.useEffect)((function(){var e="".concat(c,"/").concat(s);function t(){return(t=Object(o.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get(e);case 2:return c=t.sent,f(!1),b(c.data),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}f(!0),function(){t.apply(this,arguments)}()}),[c,s,n]),Object(p.jsxs)("div",{className:"songlyrics",children:[Object(p.jsx)(S,{music:t,lyrics:u}),Object(p.jsx)("div",{className:"songlyrics__div",children:u.lyrics&&!x?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("pre",{children:u.lyrics.replace(/\r/g,"\r\n\n")})}):u.lyrics||x?Object(p.jsx)(_.a,{loading:"true",color:"#ffffff"}):Object(p.jsxs)("div",{className:"songlyrics__error__content",children:[Object(p.jsx)("img",{src:m,className:"songlyrics__error",alt:"error"}),Object(p.jsx)("p",{children:"Sorry no Lyrics Found!!!"})]})})]})},T=c(37),C=c.n(T),F=c.p+"static/media/hero-background.182a0bbc.jpg";var L=function(e){var t=e.musicType;console.log("music type in search result",t);var c=Object(a.useState)(!0),s=Object(i.a)(c,2),n=s[0],r=s[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),b=u[0],h=u[1],m=Object(a.useState)(0),O=Object(i.a)(m,2),x=O[0],g=O[1],y=Object(a.useState)({artist:"",title:"",albumTitle:"",picture:""}),N=Object(i.a)(y,2),w=N[0],S=N[1];Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(t);case 2:return c=e.sent,h(c.data.data),r(!1),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r(!0),function(){e.apply(this,arguments)}()}),[t]);var T=7*x,L=b.slice(T,T+7).map((function(e,t){return Object(p.jsxs)("div",{className:"search__row__card",onClick:function(){var t;S({artist:(t=e).artist.name,title:t.title,albumTitle:t.album.title,picture:t.artist.picture_medium})},tabIndex:0,children:[Object(p.jsx)("img",{src:e.artist.picture_medium,alt:F}),Object(p.jsxs)("div",{className:"search__row__album__title",children:[Object(p.jsx)(f.a,{}),Object(p.jsx)("label",{children:e.artist.name})]}),Object(p.jsxs)("div",{className:"search__row__album__title",children:[Object(p.jsx)(v.a,{}),Object(p.jsx)("label",{children:e.album.title})]})]},e.id)})),D=Math.ceil(b.length/7);return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{className:"search__label",children:" Search Result"}),Object(p.jsxs)("label",{className:"search__musictype",children:[" : ",t]}),Object(p.jsx)("div",{children:n||0!=b.length?!n&&b.length>0?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"search__row",children:Object(p.jsx)("div",{className:"search__current__page",children:L})}),Object(p.jsx)("div",{className:"search__paginate",children:Object(p.jsx)(C.a,{previousLabel:"\u2190",nextLabel:"\u2192",pageCount:D,onPageChange:function(e){var t=e.selected;g(t)},containerClassName:"pagination",previousLinkClassName:"pagination__link",nextLinkClassName:"pagination__link",disabledClassName:"pagination__link--disabled",activeClassName:"pagination__link--active"})})]}):Object(p.jsx)(_.a,{loading:"true",color:"#ffffff"}):Object(p.jsx)("h1",{children:"No data available"})}),w.artist&&Object(p.jsx)(k,{music:w})]})};c(93);var D=function(e){var t=e.toggleHome,c=Object(a.useState)(""),s=Object(i.a)(c,2),n=s[0],r=s[1],l=Object(a.useState)(!1),j=Object(i.a)(l,2),o=j[0],u=j[1],b=Object(a.useState)(""),d=Object(i.a)(b,2),h=d[0],m=d[1],O=function(){n?(u(!0),t(!1)):(t(!1),m(!0))};return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("p",{className:"header__name font-effect-shadow-multiple",children:"Lyrics Finder"}),Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(p.jsxs)("div",{className:"header__search",children:[Object(p.jsx)("input",{className:"header__input__search",placeholder:"Search by Artist/ Song",name:"search",onChange:function(e){r(e.target.value),m(!1)},onKeyDown:function(e){13===e.keyCode&&O()},value:n,"data-testid":"header-search"}),Object(p.jsx)("button",{className:"header__searchbtn",onClick:O,"data-testid":"search-btn",children:Object(p.jsx)("i",{className:"fa fa-search"})})]}),h&&Object(p.jsx)("p",{style:{color:"white",fontSize:"12px",marginTop:"1%"},"data-testid":"error-text",children:"* This field is required."})]})]}),o&&n?Object(p.jsx)(L,{musicType:n}):""]})};c(94);var z=function(e){var t=e.genreType,c=Object(a.useState)([]),s=Object(i.a)(c,2),n=s[0],r=s[1],l=Object(a.useState)({artist:"",title:"",albumTitle:"",picture:""}),u=Object(i.a)(l,2),b=u[0],h=u[1];function m(e){h({artist:e.artist.name,title:e.title,albumTitle:e.album.title,picture:e.artist.picture_medium})}return Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(t);case 2:return c=e.sent,console.log(c.data.data),r(c.data.data),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(p.jsxs)("div",{children:[Object(p.jsxs)("label",{className:"row__genre",children:[" ",t]}),Object(p.jsx)("div",{className:"row__row",children:n.map((function(e){return Object(p.jsxs)("div",{className:"row__card",onClick:function(){return m(e)},tabIndex:0,role:"button",onKeyDown:function(t){13===t.keyCode&&m(e)},children:[Object(p.jsx)("img",{src:e.artist.picture_medium,alt:""}),Object(p.jsxs)("div",{className:"row__album__title",children:[Object(p.jsx)(f.a,{}),Object(p.jsx)("label",{children:e.artist.name})]}),Object(p.jsxs)("div",{className:"row__album__title",children:[Object(p.jsx)(v.a,{}),Object(p.jsx)("label",{children:e.album.title})]})]},e.id)}))}),b.artist&&Object(p.jsx)(k,{music:b})]})};var E=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(D,{toggleHome:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];s(e)},showHome:c}),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(z,{genreType:"popular"}),Object(p.jsx)(z,{genreType:"soul music"}),Object(p.jsx)(z,{genreType:"orchestra"}),Object(p.jsx)(z,{genreType:"country music"}),Object(p.jsx)(z,{genreType:"rock"})]})]})};var I=function(){return Object(p.jsx)("div",{className:"app",children:Object(p.jsx)(E,{})})},P=function(e){e&&e instanceof Function&&c.e(6).then(c.bind(null,484)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root")),P()}},[[96,1,3]]]);
//# sourceMappingURL=main.9090cedb.chunk.js.map