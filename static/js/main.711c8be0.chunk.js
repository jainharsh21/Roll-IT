(this["webpackJsonproll-dice-state-exercise"]=this["webpackJsonproll-dice-state-exercise"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(7),s=n.n(a),l=(n(13),n(14),n(1)),r=n(2),c=n(3),u=n(4),h=n(5),d=(n(15),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("i",{className:"Die fas fa-dice-".concat(this.props.face," fa-6x ").concat(this.props.isRolling?"shaking":""),style:{color:"blue"}}))}}]),n}(i.Component)),f=(n(16),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={die1:"one",die2:"one",isRolling:!1},i.roll=i.roll.bind(Object(c.a)(i)),i}return Object(r.a)(n,[{key:"roll",value:function(){var e=this;this.setState({die1:this.props.sides[Math.floor(Math.random()*this.props.sides.length)],die2:this.props.sides[Math.floor(Math.random()*this.props.sides.length)],isRolling:!0}),setTimeout((function(){e.setState({isRolling:!1})}),1e3)}},{key:"render",value:function(){return o.a.createElement("div",{className:"RollDice "},o.a.createElement(d,{face:this.state.die1,isRolling:this.state.isRolling}),o.a.createElement(d,{face:this.state.die2,isRolling:this.state.isRolling}),o.a.createElement("button",{onClick:this.roll,disabled:this.state.isRolling},this.state.isRolling?"Rolling":"Roll Dice!"))}}]),n}(i.Component));f.defaultProps={sides:["one","two","three","four","five","six"]};var p=f;var m=function(){return o.a.createElement("div",{class:"App"},o.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.711c8be0.chunk.js.map