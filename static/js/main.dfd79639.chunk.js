(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(25)},15:function(e,t,n){},17:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(15),n(1)),l=n(2),s=n(4),u=n(3),p=n(5),f=(n(17),n(6)),d=n(9),m=function(e,t){console.log(t);var n=t.removedIndex,a=t.addedIndex,o=t.payload;if(null===n&&null===a)return e;var r=Object(d.a)(e),c=o;return null!==n&&(c=r.splice(n,1)[0]),null!==a&&r.splice(a,0,c),r},g=function(e,t){for(var n=[],a=0;a<e;a++)n.push(t(a));return n},v=function(e){e.stopPropagation()},b=(n(23),a.Component,-0),h=0;function D(e){b.scrollTop=h}var j=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleScroll=function(t){e.setState({isDragging:!0}),t.preventDefault(),console.log(t)},e.onDragStart=function(e){console.log("onDragStart",e),h=b.scrollTop,b.addEventListener("scroll",D,{passive:!1})},e.onDrop=function(t){b.removeEventListener("scroll",D,{passive:!1}),e.setState({items:m(e.state.items,t)})},e.containerRef=function(e){b=e,console.log(b)},e.state={items:g(50,function(e){return{id:e,data:"Draggable"+e}})},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state.isDragging),o.a.createElement("div",null,o.a.createElement("div",{ref:this.containerRef,className:"simple-page-scroller",onContextMenu:v},o.a.createElement(f.Container,{onDragStart:this.onDragStart,onDrop:this.onDrop},this.state.items.map(function(e){return o.a.createElement(f.Draggable,{key:e.id},o.a.createElement("div",{className:"draggable-item"},e.data))}))))}}]),t}(a.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(j,null))}}]),t}(a.Component);c.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.dfd79639.chunk.js.map