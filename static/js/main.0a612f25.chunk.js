(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),i=c(4),s=c(1),b=c(0),d=function(t){var e=t.tabs,c=t.selectedTab,a=t.selectedTabId,n=t.handleSelectedTab;return Object(b.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.title;return Object(b.jsx)("li",{className:a===e?"is-active":"","data-cy":"Tab",children:Object(b.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:function(){var t;a!==(t=e)&&n(t)},children:c})},e)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"tab-content",children:c.content})]})},l=(c(10),c(11),c(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),o=function(){var t=Object(s.useState)(l[0].id),e=Object(i.a)(t,2),c=e[0],a=e[1],n=l.find((function(t){return t.id===c}))||l[0];return Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("h1",{className:"title",children:"Selected tab is ".concat(n.title)}),Object(b.jsx)(d,{tabs:l,selectedTab:n,selectedTabId:c,handleSelectedTab:function(t){a(t)}})]})};n.a.render(Object(b.jsx)(o,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0a612f25.chunk.js.map