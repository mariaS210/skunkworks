(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),s=n.n(o),i=(n(86),n(79)),c=n(10),l=n(11),m=n(14),u=n(13),p=n(15),h=n(74),d=n(40),k=n(41),b=n(50),f=n(78),v=n(51),E=n(62),y=n(27),w=n(29),g=n(24),j=n(39),O=n(70),C=n(38),S=(n(92),n(71)),x=n.n(S),N="https://hacker-news.firebaseio.com",A=0,M=[],I=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"getNewsItem",value:function(e,t){var n=new Request("".concat(N,"/v0/item/").concat(e,".json"));fetch(n).then(function(e){if(200===e.status)return e.json();throw new Error("Something went wrong on api server!")}).then(function(e){t&&t(e)}).catch(function(e){console.error(e)})}},{key:"getNewsItems",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"topstories",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(M.length>0&&!n){A+=30;var a=M.slice(0,A);return e(a)}var r=new Request("".concat(N,"/v0/").concat(t,".json"));fetch(r).then(function(e){if(200===e.status)return e.json();throw new Error("Something went wrong on api server!")}).then(function(t){M=t,A+=30;var n=t.slice(0,A);e&&e(n)}).catch(function(e){console.error(e)})}},{key:"getBulkNewsItems",value:function(e,t){var n=[];e&&t&&(e.forEach(function(e){n.push(new Request("".concat(N,"/v0/item/").concat(e,".json")))}),Promise.all(n.map(function(e){return fetch(e).then(function(e){return e.json()})})).then(function(e){t(e)}))}}]),e}(),T=n(80),D=n(35);var L=function(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent},R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,n.updateExpanded=function(){var e=n.state.expanded;n._isMounted&&n.setState({expanded:!e,replies:e?[]:n.state.replies})},n.updateReplies=function(e){n._isMounted&&n.setState({replies:e})},n.fetchReplies=function(){I.getBulkNewsItems(n.props.kids,n.updateReplies)},n.state={expanded:!1,replies:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this;if(!!(!this.props.kids||!this.props.kids.length))return r.a.createElement("div",{className:"Comment"},r.a.createElement("i",null,"no replies"));var n=(this.props.depth||0)+1;if(n>5)return r.a.createElement("div",{className:"Comment"},r.a.createElement("i",null,"Continue this thread..."));var a=this.state.expanded,o=a?"angle-up":"angle-down",s=this.state.replies;return r.a.createElement("div",null,r.a.createElement("i",{className:"Comment",onClick:function(){e.updateExpanded()}},r.a.createElement(g.a,{icon:o}),this.props.kids.length," replies"),a&&this.fetchReplies(),a&&r.a.createElement(D.a,{variant:"flush"},s.map(function(e){return e.deleted?r.a.createElement("div",{key:e.id},r.a.createElement("i",null,"Deleted.")):r.a.createElement(D.a.Item,{key:"itm-"+e.id},r.a.createElement("div",{key:e.id},L(e.text)),r.a.createElement(t,{kids:e.kids,depth:n}))})))}}]),t}(r.a.Component),_=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e)))._isMounted=!1,n.updateComments=function(e){n._isMounted&&n.setState({comments:e})},n.state={comments:[],kids:[],expanded:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.props.item,t=e&&e.kids;I.getBulkNewsItems(t,this.updateComments)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this.state.comments,t=(this.props.depth||0)+1;return e.length>0?r.a.createElement(D.a,{variant:"flush"},e.map(function(e){return e.deleted?r.a.createElement("div",{key:e.id},r.a.createElement("i",null,"Deleted.")):r.a.createElement(D.a.Item,{key:"itm-"+e.id},r.a.createElement("div",{key:e.id},L(e.text)),r.a.createElement(R,{kids:e.kids,depth:t}))})):r.a.createElement("div",null,r.a.createElement("i",null,"Stand by."))}}]),t}(r.a.Component),B=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).changeShowComments=function(){var e=n.state.showComments;n.setState({showComments:!e})},n.state={showComments:!1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;if(this.props&&this.props.item){var t=this.props.item.url,n=this.props.item.by,a=" "+this.props.score,o=this.props.item.time,s=this.props.item.kids?this.props.item.kids.length:0,i=new Date(1e3*o),c=Math.abs(Date.now()-i)/36e5,l="hours";c>24&&(l="days",c/=24);var m=this.props.openedStory===this.props.item.id;return r.a.createElement("div",null,t&&r.a.createElement("div",{className:"btn btn-outline-warning",onClick:function(){e.props.bookmarkAction(e.props.item)}},r.a.createElement(g.a,{icon:"bookmark"})),a," points by ",n," |",Math.floor(c)," ",l," ago |",r.a.createElement("span",{className:"Comment",onClick:function(){e.props.changeOpenedStory(e.props.item.id)}},s," comments"),m&&r.a.createElement(_,{key:this.props.item.id,item:this.props.item}))}return r.a.createElement("div",null,"No data available.")}}]),t}(r.a.Component),q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).parseURL=function(e){var t=document.createElement("a");return t.setAttribute("href",e),t},n.state={item:null,index:n.props.index,searchTerm:n.props.searchTerm},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;I.getNewsItem(this.props.itemId,function(t){return e.setState({item:t})})}},{key:"render",value:function(){var e=this.state.item,t=" "+(e&&e.title),n=e&&e.url,a=e&&e.score,o="("+this.parseURL(n).hostname+")",s=this.props.searchTerm&&this.props.searchTerm.toLowerCase();if(s&&(t.toLowerCase().includes(s)||(""+n).toLowerCase().includes(s)||(e&&e.author||"").toLowerCase().includes(s))||!s){var i=n?r.a.createElement("a",{href:n},t):t;return r.a.createElement("div",null,r.a.createElement(T.a,{border:"light",body:!0},r.a.createElement("div",{className:"item"},i," ",n&&o),r.a.createElement(B,{item:e,score:a,changeOpenedStory:this.props.changeOpenedStory,openedStory:this.props.openedStory,bookmarkAction:this.props.bookmarkAction})),r.a.createElement("br",null))}return null}}]),t}(r.a.Component),U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).loadItems=function(){var e=n.state&&n.state.endpoint||"beststories";I.getNewsItems(function(e){return n.setState({items:e})},e,!0)},n.changeOpenedStory=function(e){var t=n.state.openedStory;e&&t!==e?n.setState({openedStory:e}):n.setState({openedStory:0})},n.state={endpoint:n.props.endpoint,items:null,isLoading:!1,openedStory:0,bookmarks:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this,t=this.state.items;return t||(t=[]),r.a.createElement("div",{className:"container"},r.a.createElement(x.a,{dataLength:t.length,next:this.loadItems,hasMore:!0,loader:r.a.createElement("h4",null,"Loading..."),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"Yay! You have seen it all"))},t.map(function(t,n){return r.a.createElement(q,{key:n,index:n,itemId:t,searchTerm:e.props.searchTerm,changeOpenedStory:e.changeOpenedStory,openedStory:e.state.openedStory,bookmarkAction:e.props.bookmarkAction})})))}}]),t}(r.a.Component),W=n(63),J=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={shown:Array(n.props.bookmarks.length).fill(!0)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleClose",value:function(e){var t=this.state.shown.slice(0);t.splice(e,1),this.props.bookmarks.splice(e,1),this.setState({shown:t})}},{key:"render",value:function(){var e=this,t=this.props.bookmarks;return t?r.a.createElement("div",{style:{position:"absolute",top:70,right:0}},t&&t.map(function(t,n){return r.a.createElement(W.a,{key:n,show:e.state.shown[n],onClose:function(){e.handleClose(n)}},r.a.createElement(W.a.Header,null,r.a.createElement(g.a,{icon:"bookmark",className:"rounded mr-2"}),r.a.createElement("span",{className:"mr-auto"},r.a.createElement("a",{href:t.url},t.title))))})):null}}]),t}(r.a.Component);C.b.add(j.d,j.c,j.a,j.b,O.a);var P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).bookmarkAction=function(e){e&&e.url&&(n.state.bookmarks.find(function(t){return t.url===e.url})||n.setState({bookmarks:[].concat(Object(i.a)(n.state.bookmarks),[e])}))},n.state={term:"",endpoint:"topstories",bookmarks:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.bookmarks;return r.a.createElement(y.a,{className:"App"},r.a.createElement(d.a,{bg:"light",expand:"lg",sticky:"top"},r.a.createElement(d.a.Brand,{as:y.b,to:"/top",className:"btn btn-outline-warning"},r.a.createElement(g.a,{icon:["fab","hacker-news-square"]})," Hacker News"),r.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(y.b,{to:"/top",className:"nav-link"},"Top"),r.a.createElement(y.b,{to:"/new",className:"nav-link"},"New"),r.a.createElement(y.b,{to:"/best",className:"nav-link"},"Best"),r.a.createElement(k.a,{title:"More",id:"basic-nav-dropdown"},r.a.createElement(k.a.Item,{as:y.b,to:"/ask"},"Ask"),r.a.createElement(k.a.Item,{as:y.b,to:"/show"},"Show"),r.a.createElement(k.a.Item,{as:y.b,to:"/job"},"Job"))),r.a.createElement(f.a,{inline:!0},r.a.createElement(E.a,{className:"mr-sm-2"},r.a.createElement(b.a,{as:E.a.Prepend,variant:"primary"},r.a.createElement(g.a,{icon:"filter"})),r.a.createElement(v.a,{type:"text",placeholder:"Filter",value:this.state.term,onChange:this.handleChange.bind(this),"aria-describedby":"filter"})))),t&&r.a.createElement(J,{bookmarks:t})),r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/top",render:function(t){return r.a.createElement(U,{endpoint:"topstories",key:"topstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/new",render:function(t){return r.a.createElement(U,{endpoint:"newstories",key:"newstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/best",render:function(t){return r.a.createElement(U,{endpoint:"beststories",key:"beststories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/ask",render:function(t){return r.a.createElement(U,{endpoint:"askstories",key:"askstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/show",render:function(t){return r.a.createElement(U,{endpoint:"showstories",key:"showstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/job",render:function(t){return r.a.createElement(U,{endpoint:"jobstories",key:"jobstories",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}}),r.a.createElement(w.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(U,{endpoint:"topstories",key:"home",searchTerm:e.state.term,bookmarkAction:e.bookmarkAction})}})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(113);s.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,n){e.exports=n(114)},86:function(e,t,n){},92:function(e,t,n){}},[[81,1,2]]]);
//# sourceMappingURL=main.dad3f906.chunk.js.map