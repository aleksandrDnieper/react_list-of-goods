(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){t.exports=n(23)},17:function(t,e,n){},18:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n.n(o),a=n(6),r=n.n(a),c=(n(17),n(1)),l=n(7),i=n(8),u=n(10),d=n(9),m=n(11),g=(n(18),n(2)),h=n.n(g),f=function(t){var e=t.goods;return s.a.createElement("ul",{className:"list"},e.map((function(t){return s.a.createElement("li",{key:h.a.v4(),className:"list__item"},t)})))},p=(n(21),function(t){var e=t.reversed,n=t.sortedAlpha,o=t.resetedGoods,a=t.sortByLength,r=t.selectAction,c=t.length,l=t.selectedArray;return s.a.createElement("div",{className:"controls"},s.a.createElement("button",{type:"button",className:"controls__button",onClick:e},"Reverse"),s.a.createElement("button",{type:"button",className:"controls__button",onClick:n},"Sort Alpha"),s.a.createElement("button",{type:"button",className:"controls__button",onClick:o},"Reset"),s.a.createElement("button",{type:"button",className:"controls__button",onClick:a},"Sort by length"),s.a.createElement("select",{className:"select",value:c,onChange:r},l.map((function(t,e){return s.a.createElement("option",{key:h.a.v4(),value:e+1},e+1)}))))}),b=(n(22),function(t){function e(){var t,n;Object(l.a)(this,e);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(n=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(s)))).state={goods:n.props.listOfGoods,isClicked:!1,initialGoods:Object(c.a)(n.props.listOfGoods),length:1},n.startClick=function(){n.setState({isClicked:!0})},n.reversed=function(){n.setState((function(t){return{goods:Object(c.a)(t.goods).reverse()}}))},n.sortedAlpha=function(){n.setState((function(t){return{goods:Object(c.a)(t.goods).sort()}}))},n.resetedGoods=function(){n.setState((function(t){return{goods:Object(c.a)(t.initialGoods),length:1}}))},n.sortByLength=function(){var t=function(t,e){return t.length-e.length};n.setState((function(e){return{goods:Object(c.a)(e.goods).sort(t)}}))},n.selescted=function(t){n.setState({goods:Object(c.a)(n.props.listOfGoods).filter((function(e){return e.length>=t.target.value})),length:t.target.value})},n}return Object(m.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.isClicked,n=t.goods,o=t.initialGoods;return e?s.a.createElement(s.a.Fragment,null,s.a.createElement(p,{reversed:this.reversed,sortedAlpha:this.sortedAlpha,resetedGoods:this.resetedGoods,sortByLength:this.sortByLength,selectAction:this.selescted,length:this.state.length,selectedArray:o}),s.a.createElement(f,{goods:n})):s.a.createElement("button",{type:"button",className:"button_start",onClick:this.startClick},"start")}}]),e}(s.a.Component)),v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("h1",{className:"title"},"Goods"),s.a.createElement(b,{listOfGoods:v}))};r.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.546e60dc.chunk.js.map