(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(3),a=n.n(i),c=n(4),u=n(2),l=n(52),d=n(78),s=n(79),O=n.n(s),f=n(18),g=n(85),p=n(80),m=n.n(p),v="SHOW_ALL",D="SHOW_COMPLETED",b="SHOW_ACTIVE",E={ADD_TODO:"ADD_TODO",TOGGLE_TODO:"TOGGLE_TODO",SORT_TODO:"SORT_TODO",REMOVE_TODO:"REMOVE_TODO"},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.ADD_TODO:return[].concat(Object(g.a)(e),[{id:t.id,text:t.text,completed:!1}]);case E.TOGGLE_TODO:return e.map(function(e){return e.id===t.id?Object(f.a)({},e,{completed:!e.completed}):e});case E.SORT_TODO:var n=t.dragIndex,r=t.hoverIndex,o=e[n];return m()(e,{$splice:[[n,1],[r,0,o]]});case E.REMOVE_TODO:return e.filter(function(e){return e.id!==t.id});default:return e}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;switch((arguments.length>1?arguments[1]:void 0).type){case"ADD_TODO":return e+1;default:return e}},j=Object(u.combineReducers)({todos:T,visibilityFilter:h,idCounter:_}),y=(n(97),n(13)),x=n(14),C=n(16),w=n(15),k=n(17),S=n(23),I=n(24),R=Object(c.b)(function(e){return{idCounter:e.idCounter}})(function(e){var t=e.idCounter,n=e.dispatch,r={};return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:function(e){var o,i;e.preventDefault(),r.value.trim()&&(n((o=t,i=r.value,{type:"ADD_TODO",id:o,text:i})),r.value="")}},o.a.createElement("input",{autoFocus:!0,ref:function(e){return r=e}}),o.a.createElement("button",{type:"submit"},"Add Todo")))}),L=n(81),A=n.n(L);function V(){var e=Object(S.a)(["\n    color: #61dafb;\n    margin: 0;\n    line-height: 50px;\n"]);return V=function(){return e},e}function G(){var e=Object(S.a)(["\n  background-color: #282c34;\n    display: flex;\n    flex-direction: row;\n    height: 50px;\n"]);return G=function(){return e},e}var B=I.a.header(G()),M=I.a.h1(V()),N=function(e){var t=e.children,n=e.style;return o.a.createElement(B,{style:n},o.a.createElement("img",{src:A.a,className:"App-logo",alt:"logo"}),t,o.a.createElement(M,null,"Todo List"))},F=function(e){var t=e.active,n=e.children,r=e.onClick;return o.a.createElement("button",{onClick:r,disabled:t,style:{marginLeft:"4px"}},n)},W=Object(c.b)(function(e,t){return{active:t.filter===e.visibilityFilter}},function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}})(F),X=function(){return o.a.createElement("div",null,o.a.createElement("span",null,"Show: "),o.a.createElement(W,{filter:v},"All"),o.a.createElement(W,{filter:b},"Active"),o.a.createElement(W,{filter:D},"Completed"))},H=n(7),P=n(84),U=n.n(P),J="card",Y={height:120,marginTop:"auto",color:"white",padding:"1rem",textAlign:"center"},$={drop:function(){return{name:"Dustbin"}},hover:function(e,t,n){t.getClientOffset(),Object(i.findDOMNode)(n).getBoundingClientRect(),t.isOver({shallow:!0}),t.canDrop()}},q=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.canDrop,n=e.isOver,o=t&&n,i="#222";return o?i="darkgreen":t&&(i="darkkhaki"),(0,e.connectDropTarget)(r.createElement("div",{style:Object(f.a)({},Y,{backgroundColor:i})},o?"Release to drop":"Drag a card here to remove"))}}]),t}(r.Component),z=Object(H.DropTarget)(J,$,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver(),canDrop:t.canDrop()}})(q),K={border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move"},Q={beginDrag:function(e){return{id:e.id,index:e.index}},endDrag:function(e,t,n){if(console.log("endDrag props",e),console.log("props",n),t.didDrop()){var r=t.getItem();console.log("item",r);var o=t.getDropResult();o&&(console.log("dropResult",o),"Dustbin"===o.name&&e.onDropToDustbin())}}},Z={hover:function(e,t,n){if(!n)return null;var r=t.getItem().index,o=e.index;if(r!==o){var a=Object(i.findDOMNode)(n).getBoundingClientRect(),c=(a.bottom-a.top)/2,u=t.getClientOffset().y-a.top;r<o&&u<c||r>o&&u>c||(e.moveCard(r,o),t.getItem().index=o)}}},ee=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.isDragging,o=e.connectDragSource,i=e.connectDropTarget,a=e.onClick,c=e.index,u=n?0:1;return o(i(r.createElement("div",{onClick:a,style:Object(f.a)({},K,{cursor:n?"grabbing":"grab",opacity:u})},c+1," ",t)))}}]),t}(r.Component),te=Object(H.DropTarget)(J,Z,function(e){return{connectDropTarget:e.dropTarget()}})(Object(H.DragSource)(J,Q,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(ee)),ne=function(e){var t=e.onClick,n=e.completed,r=e.text,i=e.id,a=e.onDropToDustbin,c=e.moveCard,u=e.index;return o.a.createElement(te,{onClick:t,onDropToDustbin:a,moveCard:c,style:{textDecoration:n?"line-through":"none"},text:r,id:i,index:u})},re=function(e){var t=e.todos,n=e.toggleTodo,r=e.removeTodo,i=e.sortCard;return o.a.createElement("div",null,t.map(function(e,t){return o.a.createElement(ne,Object.assign({key:e.id,index:t},e,{onClick:function(){return n(e.id)},onDropToDustbin:function(){return r(e.id)},moveCard:function(e,t){return i(e,t)}}))}))},oe=function(e,t){switch(t){case v:return e;case D:return e.filter(function(e){return e.completed});case b:return e.filter(function(e){return!e.completed});default:throw new Error("Unknown filter: "+t)}},ie=Object(c.b)(function(e){return{todos:oe(e.todos,e.visibilityFilter)}},function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))},removeTodo:function(t){return e(function(e){return{type:"REMOVE_TODO",id:e}}(t))},sortCard:function(t,n){return e(function(e,t){return{type:E.SORT_TODO,dragIndex:e,hoverIndex:t}}(t,n))}}})(re);function ae(){return o.a.createElement(H.DragDropContextProvider,{backend:U.a},o.a.createElement(ie,null),o.a.createElement(z,null))}function ce(){var e=Object(S.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n"]);return ce=function(){return e},e}var ue=I.a.div(ce()),le=function(e){function t(){return Object(y.a)(this,t),Object(C.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return o.a.createElement(ue,null,o.a.createElement(N,null),o.a.createElement(R,null),o.a.createElement(X,null),o.a.createElement(ae,null))}}]),t}(r.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de={key:"root",storage:O.a},se=Object(l.a)(de,j),Oe=Object(u.createStore)(se,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),fe=Object(l.b)(Oe);a.a.render(o.a.createElement(c.a,{store:Oe},o.a.createElement(d.a,{loading:null,persistor:fe},o.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},87:function(e,t,n){e.exports=n(219)},97:function(e,t,n){}},[[87,2,1]]]);
//# sourceMappingURL=main.3d2fc2f2.chunk.js.map