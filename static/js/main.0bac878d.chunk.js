(this.webpackJsonpskunkworks=this.webpackJsonpskunkworks||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),s=a.n(o),i=(a(87),a(80)),c=a(11),l=a(12),m=a(16),u=a(15),p=a(17),h=a(75),d=a(32),k=a(40),b=a(51),f=a(79),v=a(52),E=a(63),g=a(28),w=a(30),y=a(21),j=a(27),O=a(72),S=a(39),N=(a(93),a(44)),x=a(42),C=a.n(x),A="https://hacker-news.firebaseio.com",I=0,M=[],T=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"getNewsItem",value:function(e,t){var a=new Request("".concat(A,"/v0/item/").concat(e,".json"));fetch(a).then((function(e){if(200===e.status)return e.json();throw new Error("Something went wrong on api server!")})).then((function(e){t&&t(e)})).catch((function(e){console.error(e)}))}},{key:"getNewsItems",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"topstories",a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(M.length>0&&!a){I+=30;var n=M.slice(0,I);return e(n)}var r=new Request("".concat(A,"/v0/").concat(t,".json"));fetch(r).then((function(e){if(200===e.status)return e.json();throw new Error("Something went wrong on api server!")})).then((function(t){M=t,I+=30;var a=t.slice(0,I);e&&e(a)})).catch((function(e){console.error(e)}))}},{key:"getBulkNewsItems",value:function(e,t){var a=[];e&&t&&(e.forEach((function(e){a.push(new Request("".concat(A,"/v0/item/").concat(e,".json")))})),Promise.all(a.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){t(e)})))}},{key:"getBulkNewsItemsPaginated",value:function(e,t,a,n,r){arguments.length>5&&void 0!==arguments[5]&&arguments[5];var o=[],s=e.slice(t,a);if(!s)return n;r&&(s.forEach((function(e){o.push(new Request("".concat(A,"/v0/item/").concat(e,".json")))})),Promise.all(o.map((function(e){return fetch(e).then((function(e){return e.json()}))}))).then((function(e){r(n.concat(e))})))}}]),e}(),R=a(81),L=a(65),_=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,a._sliceLength=5,a.updateExpanded=function(){var e=a.state.expanded;a._isMounted&&a.setState({expanded:!e,replies:e?[]:a.state.replies})},a.fetchNextReplies=function(){var e=a.state.replies.length,t=e+a._sliceLength;T.getBulkNewsItemsPaginated(a.props.kids,e,t,a.state.replies,(function(e){return a.setState({replies:e})}))},a.updateReplies=function(e){a._isMounted&&a.setState({replies:e})},a.fetchFirstReplies=function(){T.getBulkNewsItemsPaginated(a.props.kids,0,a._sliceLength,[],a.updateReplies)},a.checkMore=function(){return a.state.replies.length<a.props.kids.length},a.state={expanded:a.props.expanded,replies:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;if(!!(!this.props.kids||!this.props.kids.length))return r.a.createElement("div",{className:"Comment"},r.a.createElement("i",null,"no replies"));var a=(this.props.depth||0)+1;if(a>5)return r.a.createElement("div",{className:"Comment"},r.a.createElement("i",null,"Continue this thread..."));var n=this.state.expanded,o=n?"angle-up":"angle-down",s=this.state.replies;return r.a.createElement("div",null,!this.props.hideReplies&&r.a.createElement("i",{className:"Comment",onClick:function(){e.updateExpanded()}},r.a.createElement(y.a,{icon:o}),this.props.kids.length," replies"),n&&this.fetchFirstReplies(),n&&r.a.createElement(L.a,{variant:"flush"},r.a.createElement(C.a,{dataLength:s.length,next:this.fetchNextReplies,hasMore:this.checkMore,loader:r.a.createElement(N.a,{animation:"border",variant:"secondary",size:"sm"}),endMessage:r.a.createElement("p",null,"-")},s.map((function(e){return e.deleted?r.a.createElement("div",{key:e.id},r.a.createElement("i",null,"Deleted.")):r.a.createElement(L.a.Item,{key:"itm-"+e.id},r.a.createElement("div",{key:e.id,dangerouslySetInnerHTML:{__html:unescape(e.text)}}),r.a.createElement(t,{kids:e.kids,depth:a}))})))))}}]),t}(r.a.Component),B=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).changeShowComments=function(){var e=a.state.showComments;a.setState({showComments:!e})},a.computeTimeString=function(e){var t=new Date(1e3*e),a=Math.abs(Date.now()-t)/36e5,n="hours";a>24&&(n="days",a/=24);var r=Math.floor(a);return" ".concat(r," ").concat(n," ago")},a.computeIcon=function(e){var t="job"===e.type?"suitcase":"link";return"story"===e.type&&(e.title.startsWith("Ask HN: ")?t="question":e.title.startsWith("Show HN: ")&&(t="eye")),t},a.state={showComments:!1},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.props&&this.props.item){var t=this.props.item,a=" "+this.props.score,n=t.kids?t.kids.length:0,o=this.computeTimeString(t.time),s=this.props.openedStory===this.props.item.id,i=this.computeIcon(t),c=t.url?"":"disabled";return r.a.createElement("div",null,r.a.createElement("div",{className:"btn btn-outline-warning ".concat(c),onClick:function(){t.url&&e.props.bookmarkAction(t)},disabled:!t.url},r.a.createElement(y.a,{icon:i})),a," points by ",t.by," |",o," | ",r.a.createElement("span",{className:"Comment",onClick:function(){e.props.changeOpenedStory(t.id)}}," ",n," comments"),s&&r.a.createElement(_,{key:t.id,kids:t.kids,depth:0,expanded:!0,hideReplies:!0}))}return r.a.createElement("div",null,"No data available.")}}]),t}(r.a.Component),q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).parseURL=function(e){var t=document.createElement("a");return t.setAttribute("href",e),t},a.state={item:null,index:a.props.index,searchTerm:a.props.searchTerm},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.getNewsItem(this.props.itemId,(function(t){return e.setState({item:t})}))}},{key:"render",value:function(){var e=this.state.item,t=" "+(e&&e.title),a=e&&e.url,n=e&&e.score,o="("+this.parseURL(a).hostname+")",s=this.props.searchTerm&&this.props.searchTerm.toLowerCase();if(s&&(t.toLowerCase().includes(s)||(""+a).toLowerCase().includes(s)||(e&&e.author||"").toLowerCase().includes(s))||!s){var i=a?r.a.createElement("a",{href:a},t):t;return r.a.createElement("div",null,r.a.createElement(R.a,{border:"light",body:!0},r.a.createElement("div",{className:"item"},i," ",a&&o),r.a.createElement(B,{item:e,score:n,changeOpenedStory:this.props.changeOpenedStory,openedStory:this.props.openedStory,bookmarkAction:this.props.bookmarkAction})),r.a.createElement("br",null))}return null}}]),t}(r.a.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).loadItems=function(){var e=a.state&&a.state.endpoint||"beststories";T.getNewsItems((function(e){return a.setState({items:e})}),e,!0)},a.changeOpenedStory=function(e){var t=a.state.openedStory;e&&t!==e?a.setState({openedStory:e}):a.setState({openedStory:0})},a.state={endpoint:a.props.endpoint,items:null,isLoading:!1,openedStory:0,bookmarks:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this,t=this.state.items;t||(t=[]);var n=a(94).version;return r.a.createElement("div",null,r.a.createElement(d.a,{fixed:"bottom",bg:"light"},r.a.createElement("a",{href:"https://github.com/mariaS210/skunkworks"},r.a.createElement(y.a,{icon:["fab","github"]})," ","version ",n)),r.a.createElement("div",{className:"container"},r.a.createElement(C.a,{dataLength:t.length,next:this.loadItems,hasMore:!0,loader:r.a.createElement(N.a,{animation:"border",variant:"dark"}),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"Yay! You have seen it all"))},t.map((function(t,a){return r.a.createElement(q,{key:a,index:a,itemId:t,searchTerm:e.props.searchTerm,changeOpenedStory:e.changeOpenedStory,openedStory:e.state.openedStory,bookmarkAction:e.props.bookmarkAction})})))))}}]),t}(r.a.Component),P=a(64),H=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={shown:Array(a.props.bookmarks.length).fill(!0)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleClose",value:function(e){var t=this.state.shown.slice(0);t.splice(e,1),this.props.bookmarks.splice(e,1),this.setState({shown:t})}},{key:"render",value:function(){var e=this,t=this.props.bookmarks;return t?r.a.createElement("div",{style:{position:"absolute",top:70,right:0}},t&&t.map((function(t,a){return r.a.createElement(P.a,{key:a,show:e.state.shown[a],onClose:function(){e.handleClose(a)}},r.a.createElement(P.a.Header,null,r.a.createElement(y.a,{icon:"bookmark",className:"rounded mr-2"}),r.a.createElement("span",{className:"mr-auto"},r.a.createElement("a",{href:t.url},t.title))))}))):null}}]),t}(r.a.Component);S.b.add(j.e,j.c,j.a,j.b,j.h,j.d,j.g,j.f,O.a);var W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).bookmarkAction=function(e){e&&e.url&&(a.state.bookmarks.find((function(t){return t.url===e.url}))||a.setState({bookmarks:[].concat(Object(i.a)(a.state.bookmarks),[e])}))},a.state={term:"",endpoint:"topstories",bookmarks:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.bookmarks;return r.a.createElement(g.a,{className:"App"},r.a.createElement(d.a,{bg:"light",expand:"lg",sticky:"top"},r.a.createElement(d.a.Brand,{as:g.b,to:"/top",className:"btn btn-outline-warning"},r.a.createElement(y.a,{icon:["fab","hacker-news-square"]})," Hacker News"),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(g.b,{to:"/top",className:"nav-link"},"Top"),r.a.createElement(g.b,{to:"/new",className:"nav-link"},"New"),r.a.createElement(g.b,{to:"/best",className:"nav-link"},"Best"),r.a.createElement(k.a,{title:"More",id:"basic-nav-dropdown"},r.a.createElement(k.a.Item,{as:g.b,to:"/ask"},"Ask"),r.a.createElement(k.a.Item,{as:g.b,to:"/show"},"Show"),r.a.createElement(k.a.Item,{as:g.b,to:"/job"},"Job"))),r.a.createElement(f.a,{inline:!0},r.a.createElement(E.a,{className:"mr-sm-2"},r.a.createElement(b.a,{as:E.a.Prepend,variant:"primary"},r.a.createElement(y.a,{icon:"filter"})),r.a.createElement(v.a,{type:"text",placeholder:"Filter",value:this.state.term,onChange:this.handleChange.bind(this),"aria-describedby":"filter"})))),t&&r.a.createElement(H,{bookmarks:t})),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/top",render:function(t){return r.a.createElement(D,{endpoint:"topstories",key:"topstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/new",render:function(t){return r.a.createElement(D,{endpoint:"newstories",key:"newstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/best",render:function(t){return r.a.createElement(D,{endpoint:"beststories",key:"beststories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/ask",render:function(t){return r.a.createElement(D,{endpoint:"askstories",key:"askstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/show",render:function(t){return r.a.createElement(D,{endpoint:"showstories",key:"showstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/job",render:function(t){return r.a.createElement(D,{endpoint:"jobstories",key:"jobstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(D,{endpoint:"topstories",key:"home",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(115);s.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){e.exports=a(116)},87:function(e,t,a){},93:function(e,t,a){},94:function(e){e.exports=JSON.parse('{"name":"skunkworks","version":"0.1.0","homepage":"https://skunkworks.netlify.com/","private":true,"dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.25","@fortawesome/free-brands-svg-icons":"^5.11.2","@fortawesome/free-solid-svg-icons":"^5.11.2","@fortawesome/react-fontawesome":"^0.1.7","bootstrap":"^4.3.1","gh-pages":"^2.1.1","react":"^16.11.0","react-bootstrap":"^1.0.0-beta.14","react-dom":"^16.11.0","react-infinite-scroll-component":"^4.5.3","react-router-dom":"^5.1.2","react-scripts":"^3.3.1"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')}},[[82,1,2]]]);
//# sourceMappingURL=main.0bac878d.chunk.js.map