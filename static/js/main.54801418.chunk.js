(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,n){e.exports=n(84)},67:function(e,t,n){},73:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(29),i=n.n(s),o=(n(67),n(6)),c=n(7),l=n(9),u=n(8),m=n(10),p=n(60),h=n(27),d=n(58),f=n(59),v=n(35),b=n(44),E=n(24),O=n(18),j=n(20),k=n(26),y=n(51),g=n(25),w=(n(73),n(52)),C=n.n(w),S="https://hacker-news.firebaseio.com",N=0,x=[],T=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,null,[{key:"getNewsItem",value:function(e,t){var n=new Request("".concat(S,"/v0/item/").concat(e,".json"));fetch(n).then(function(e){if(200===e.status)return e.json();throw new Error("Something went wrong on api server!")}).then(function(e){t&&t(e)}).catch(function(e){console.error(e)})}},{key:"getNewsItems",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"topstories",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(x.length>0&&!n){N+=30;var a=x.slice(0,N);return e(a)}var r=new Request("".concat(S,"/v0/").concat(t,".json"));fetch(r).then(function(e){if(200===e.status)return e.json();throw new Error("Something went wrong on api server!")}).then(function(t){x=t,N+=30;var n=t.slice(0,N);e&&e(n)}).catch(function(e){console.error(e)})}},{key:"getBulkNewsItems",value:function(e,t){var n=[];e&&t&&(e.forEach(function(e){n.push(new Request("".concat(S,"/v0/item/").concat(e,".json")))}),Promise.all(n.map(function(e){return fetch(e).then(function(e){return e.json()})})).then(function(e){t(e)}))}}]),e}(),I=n(61),A=n(23);var L=function(e){return(new DOMParser).parseFromString(e,"text/html").documentElement.textContent},R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateExpanded=function(){var e=n.state.expanded;n.setState({expanded:!e,replies:e?[]:n.state.replies})},n.updateReplies=function(e){n.setState({replies:e})},n.fetchReplies=function(){T.getBulkNewsItems(n.props.kids,n.updateReplies)},n.state={expanded:!1,replies:[]},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(!!(!this.props.kids||!this.props.kids.length))return r.a.createElement("div",{className:"Comment"},r.a.createElement("i",null,"no replies"));var n=(this.props.depth||0)+1;if(n>5)return r.a.createElement("div",{className:"Comment"},r.a.createElement("i",null,"Continue this thread..."));var a=this.state.expanded,s=a?"angle-up":"angle-down",i=this.state.replies;return r.a.createElement("div",null,r.a.createElement("i",{className:"Comment",onClick:function(){e.updateExpanded()}},r.a.createElement(j.a,{icon:s}),this.props.kids.length," replies"),a&&this.fetchReplies(),a&&r.a.createElement(A.a,{variant:"flush"},i.map(function(e){return e.deleted?r.a.createElement("div",{key:e.id},r.a.createElement("i",null,"Deleted.")):r.a.createElement(A.a.Item,{key:"itm-"+e.id},r.a.createElement("div",{key:e.id},L(e.text)),r.a.createElement(t,{kids:e.kids,depth:n}))})))}}]),t}(r.a.Component),D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).updateComments=function(e){n.setState({comments:e})},n.state={comments:[],kids:[],expanded:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.item,t=e&&e.kids;T.getBulkNewsItems(t,this.updateComments)}},{key:"render",value:function(){var e=this.state.comments,t=(this.props.depth||0)+1;return e.length>0?r.a.createElement(A.a,{variant:"flush"},"Comments",e.map(function(e){return e.deleted?r.a.createElement("div",{key:e.id},r.a.createElement("i",null,"Deleted.")):r.a.createElement(A.a.Item,{key:"itm-"+e.id},r.a.createElement("div",{key:e.id},L(e.text)),r.a.createElement(R,{kids:e.kids,depth:t}))})):r.a.createElement("div",null,r.a.createElement("i",null,"Stand by."))}}]),t}(r.a.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"btn btn-outline-success",onClick:this.props.upvoteAction},r.a.createElement(j.a,{icon:"thumbs-up"}))}}]),t}(r.a.Component),B=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).changeShowComments=function(){var e=n.state.showComments;n.setState({showComments:!e})},n.state={showComments:!1},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props&&this.props.item){var t=this.props.item.by,n=" "+this.props.score,a=this.props.item.time,s=this.props.item.kids?this.props.item.kids.length:0,i=new Date(1e3*a),o=Math.abs(Date.now()-i)/36e5,c="hours";o>24&&(c="days",o/=24);var l=this.props.openedStory===this.props.item.id;return r.a.createElement("div",null,r.a.createElement(M,{upvoteAction:this.props.upvoteAction}),n," points by ",t," |",Math.floor(o)," ",c," ago |",r.a.createElement("span",{className:"Comment",onClick:function(){e.props.changeOpenedStory(e.props.item.id)}},s," comments"),l&&r.a.createElement(D,{key:this.props.item.id,item:this.props.item}))}return r.a.createElement("div",null,"No data available.")}}]),t}(r.a.Component),q=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).upvoteAction=function(){var e=n.state&&n.state.score;n.setState({score:e+1})},n.buildScore=function(){var e=n.state&&n.state.score;return(n.state.item&&n.state.item.score)+e},n.parseURL=function(e){var t=document.createElement("a");return t.setAttribute("href",e),t},n.state={item:null,index:n.props.index,score:0,searchTerm:n.props.searchTerm},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;T.getNewsItem(this.props.itemId,function(t){return e.setState({item:t})})}},{key:"render",value:function(){var e=this.state.item,t=" "+(e&&e.title),n=e&&e.url,a=this.buildScore(),s=this.parseURL(n),i=this.props.searchTerm&&this.props.searchTerm.toLowerCase();return i&&(t.toLowerCase().includes(i)||(""+n).toLowerCase().includes(i)||(e&&e.author||"").toLowerCase().includes(i))||!i?r.a.createElement("div",null,r.a.createElement(I.a,{border:"light",body:!0},r.a.createElement("div",{className:"item"},r.a.createElement("a",{href:n},t)," (",s.hostname,")"),r.a.createElement(B,{item:e,score:a,changeOpenedStory:this.props.changeOpenedStory,openedStory:this.props.openedStory,upvoteAction:this.upvoteAction})),r.a.createElement("br",null)):null}}]),t}(r.a.Component),P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).loadItems=function(){var e=n.state&&n.state.endpoint||"beststories";T.getNewsItems(function(e){return n.setState({items:e})},e,!0)},n.changeOpenedStory=function(e){var t=n.state.openedStory;e&&t!==e?n.setState({openedStory:e}):n.setState({openedStory:0})},n.state={endpoint:n.props.endpoint,items:null,isLoading:!1,openedStory:0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadItems()}},{key:"render",value:function(){var e=this,t=this.state.items;return t||(t=[]),r.a.createElement("div",{className:"container"},r.a.createElement(C.a,{dataLength:t.length,next:this.loadItems,hasMore:!0,loader:r.a.createElement("h4",null,"Loading..."),endMessage:r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("b",null,"Yay! You have seen it all"))},t.map(function(t,n){return r.a.createElement(q,{key:n,index:n,itemId:t,searchTerm:e.props.searchTerm,changeOpenedStory:e.changeOpenedStory,openedStory:e.state.openedStory})})))}}]),t}(r.a.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{endpoint:"topstories",searchTerm:this.props.searchTerm})}}]),t}(r.a.Component),J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{endpoint:"beststories",searchTerm:this.props.searchTerm})}}]),t}(r.a.Component),U=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(P,{endpoint:"newstories",searchTerm:this.props.searchTerm})}}]),t}(r.a.Component);g.b.add(k.c,k.d,k.a,k.b,y.a);var W=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={term:"",endpoint:"topstories"},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement(E.a,{className:"App"},r.a.createElement(h.a,{bg:"light",expand:"lg",sticky:"top"},r.a.createElement(h.a.Brand,{as:E.b,to:"/top",className:"btn btn-outline-warning"},r.a.createElement(j.a,{icon:["fab","hacker-news-square"]})," Hacker News"),r.a.createElement(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(h.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(E.b,{to:"/top",onClick:function(){e.setState({endpoint:"topstories"})},className:"nav-link"},"Top"),r.a.createElement(E.b,{to:"/new",onClick:function(){e.setState({endpoint:"newstories"})},className:"nav-link"},"New"),r.a.createElement(E.b,{to:"/best",onClick:function(){e.setState({endpoint:"beststories"})},className:"nav-link"},"Best")),r.a.createElement(f.a,{inline:!0},r.a.createElement(b.a,{className:"mr-sm-2"},r.a.createElement(d.a,{as:b.a.Prepend,variant:"primary"},r.a.createElement(j.a,{icon:"filter"})),r.a.createElement(v.a,{type:"text",placeholder:"Filter",value:this.state.term,onChange:this.handleChange.bind(this),"aria-describedby":"filter"}))))),r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/top",render:function(t){return r.a.createElement(F,Object.assign({},t,{searchTerm:e.state.term}))}}),r.a.createElement(O.a,{exact:!0,path:"/new",render:function(t){return r.a.createElement(U,Object.assign({},t,{searchTerm:e.state.term}))}}),r.a.createElement(O.a,{exact:!0,path:"/best",render:function(t){return r.a.createElement(J,Object.assign({},t,{searchTerm:e.state.term}))}}),r.a.createElement(O.a,{exact:!0,path:"/",component:F})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(83);i.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[62,1,2]]]);
//# sourceMappingURL=main.54801418.chunk.js.map