(this["webpackJsonpdynamic-time"]=this["webpackJsonpdynamic-time"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),c=n.n(i);n(13);var o=function(e){var t=e.ms;return r.a.createElement("div",{className:"time-container"},r.a.createElement("div",{className:"time-inner-container"},r.a.createElement("div",{className:"time-digits"},function(e){var t=Math.floor(e/36e5),n=e%36e5,a=Math.floor(n/6e4),r=n%6e4,i=Math.floor(r/1e3);return String(t).padStart(2,"0")+":"+String(a).padStart(2,"0")+":"+String(i).padStart(2,"0")}(t)),r.a.createElement("div",{className:"time-text"},r.a.createElement("div",{className:"time-text-item"},"Hour"),r.a.createElement("div",{className:"time-text-item"},"Minute"),r.a.createElement("div",{className:"time-text-item"},"Second"))))},s=n(3),l=n(4),m=n(6),u=n(5),d=n(7),v=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(m.a)(this,Object(u.a)(t).call(this,e))).start=function(){n.interval=setInterval((function(){n.setState({second:n.state.second+1e3,run:!0})}),1e3)},n.reset=function(){clearInterval(n.interval),n.setState({second:0,run:!1})},n.stop=function(){clearInterval(n.interval),n.setState({run:!1})},n.state={second:0,run:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement(o,{ms:this.state.second}),r.a.createElement("button",{onClick:this.state.run?this.stop:this.start},"Start"),r.a.createElement("button",{onClick:this.reset},"Reset"))}}]),t}(a.Component);n(14);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.cd1f6587.chunk.js.map