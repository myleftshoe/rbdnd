(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(25)},15:function(e,t,n){},17:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=(n(15),n(1)),i=n(2),s=n(4),u=n(3),p=n(5),f=(n(17),n(6)),g=n(9),d=function(e,t){console.log(t);var n=t.removedIndex,a=t.addedIndex,o=t.payload;if(null===n&&null===a)return e;var r=Object(g.a)(e),c=o;return null!==n&&(c=r.splice(n,1)[0]),null!==a&&r.splice(a,0,c),r},m=function(e,t){for(var n=[],a=0;a<e;a++)n.push(t(a));return n},b=function(e){console.log("stopping event"),e.preventDefault(),e.stopPropagation()},v=(n(23),a.Component,-0);var h=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleScroll=function(t){e.setState({isDragging:!0}),t.preventDefault(),console.log(t)},e.onDragStart=function(e){console.log("onDragStart",e),v.scrollTop},e.onDrop=function(t){e.setState({items:d(e.state.items,t)})},e.containerRef=function(e){v=e,console.log(v)},e.state={items:m(50,function(e){return{id:e,data:"Draggable"+e}})},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.state.isDragging),o.a.createElement("div",null,o.a.createElement("div",{ref:this.containerRef,className:"simple-page-scroller",onContextMenu:b},o.a.createElement(f.Container,{onDragStart:this.onDragStart,onDrop:this.onDrop},this.state.items.map(function(e){return o.a.createElement(f.Draggable,{key:e.id},o.a.createElement("div",{className:"draggable-item"},e.data))}))))}}]),t}(a.Component),D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))}}]),t}(a.Component);c.a.render(o.a.createElement(D,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.101d14f5.chunk.js.map