(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),c=n.n(r),i=n(10),l=n.n(i),s=(n(19),n(7)),d=n(3),u=n(4),o=n(6),A=n(5),m=n(8),g=function(e){Object(o.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){var t=e.target.id;a.setState(Object(s.a)({},t,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.player1,r=t.player2;a.props.names(n,r)},a.state={player1:"",player2:""},a.handleInputChange=a.handleInputChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)("div",{className:"screen",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{className:"input",required:!0,type:"text",id:"player1",placeholder:"Player 1",value:this.state.value,onChange:this.handleInputChange}),Object(a.jsx)("input",{className:"input",required:!0,type:"text",id:"player2",placeholder:"Player 2",value:this.state.value,onChange:this.handleInputChange}),Object(a.jsx)("small",{children:"Player 1 & 2 will have X & O respectively "})]}),Object(a.jsx)("button",{type:"submit",className:"btn-submit",children:"Submit"})]})})})}}]),n}(r.Component),h=n(11),j=n(12),p=function(e){Object(o.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleClick=function(){a.props.endgame(!1)},a.handleNewClick=function(){a.props.endgame(!1)},a.state={tied:"You guys tied!",playerWin:a.props.winner+" Won!"},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.winner,t=this.state,n=t.tied,r=t.playerWin;return Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:"screen",children:[Object(a.jsx)("p",{children:"Tied"===e?n:r}),"Tied"===e?Object(a.jsx)(h.a,{size:"35px",color:"#66d9ff"}):Object(a.jsx)(j.a,{size:"35px",color:"#66d9ff"}),Object(a.jsx)("button",{className:"btn-submit",onClick:this.handleClick,children:"Wanna play again?"})]})})}}]),n}(r.Component),b=function(e){Object(o.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).generateTiles=function(){for(var e=[],t=0;t<9;t++)e.push("tile not-played");return e},e.handleClick=function(t){var n=e.props,a=n.handleScore,r=n.endgame,c=t.target;2===c.classList.length&&e.play(c),document.getElementsByClassName("not-played").length<1&&(a("ties"),r(!0),e.reset())},e.play=function(t){var n=e.props,a=n.player1,r=n.player2,c=n.turn,i=n.handleScore,l=n.endgame;t.classList.remove("not-played"),a&&(t.innerHTML="X",c("player1",!1,"player2",!0),(e.diagonal("X")||e.row("X")||e.column("X"))&&(i("player1"),l(!0),e.reset())),r&&(t.innerHTML="O",c("player2",!1,"player1",!0),(e.diagonal("O")||e.row("O")||e.column("O"))&&(i("player2"),l(!0),e.reset()))},e.diagonal=function(e){var t=[document.getElementById("tile0").innerHTML,document.getElementById("tile4").innerHTML,document.getElementById("tile8").innerHTML],n=[document.getElementById("tile2").innerHTML,document.getElementById("tile4").innerHTML,document.getElementById("tile6").innerHTML];return t[0]===e&&t[1]===e&&t[2]===e||n[0]===e&&n[1]===e&&n[2]===e},e.row=function(e){var t=[document.getElementById("tile0").innerHTML,document.getElementById("tile1").innerHTML,document.getElementById("tile2").innerHTML],n=[document.getElementById("tile3").innerHTML,document.getElementById("tile4").innerHTML,document.getElementById("tile5").innerHTML],a=[document.getElementById("tile6").innerHTML,document.getElementById("tile7").innerHTML,document.getElementById("tile8").innerHTML];return t[0]===e&&t[1]===e&&t[2]===e||(n[0]===e&&n[1]===e&&n[2]===e||a[0]===e&&a[1]===e&&a[2]===e)},e.column=function(e){var t=[document.getElementById("tile0").innerHTML,document.getElementById("tile3").innerHTML,document.getElementById("tile6").innerHTML],n=[document.getElementById("tile1").innerHTML,document.getElementById("tile4").innerHTML,document.getElementById("tile7").innerHTML],a=[document.getElementById("tile2").innerHTML,document.getElementById("tile5").innerHTML,document.getElementById("tile8").innerHTML];return t[0]===e&&t[1]===e&&t[2]===e||(n[0]===e&&n[1]===e&&n[2]===e||a[0]===e&&a[1]===e&&a[2]===e)},e.reset=function(){for(var e=document.getElementsByClassName("tile"),t=0;t<e.length;t++)e[t].innerHTML="",e[t].classList.add("not-played")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"board",children:this.generateTiles().map((function(t,n){return Object(a.jsx)("div",{id:"tile".concat(n),className:t,onClick:e.handleClick},n)}))})}}]),n}(c.a.Component),y=function(e){Object(o.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleTurn=function(e,t,n,r){var c;a.setState((c={},Object(s.a)(c,e,t),Object(s.a)(c,n,r),c))},a.state={player1:!0,player2:!1,check:!0},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.player1,n=e.player2,r=this.props,c=r.userName1,i=r.userName2,l=r.endgame;return Object(a.jsxs)("div",{className:"game",children:[Object(a.jsxs)("p",{className:"turn-text",children:["Its ",t?c:i,"'s Turn"]}),Object(a.jsx)(b,{turn:this.handleTurn,player1:t,player2:n,handleScore:this.props.handleScore,endgame:l})]})}}]),n}(r.Component),v=n(13),O=function(e){Object(o.a)(n,e);var t=Object(A.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.player1,n=e.player2,r=e.ties,c=e.userName1,i=e.userName2;return Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsxs)("div",{className:"logo-title",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:"logo",src:"data:image/png;base64,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",alt:"logo"})}),Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("h1",{className:"h1",children:"TicTacToe"}),Object(a.jsxs)("small",{children:["Just for fun!! ",Object(a.jsx)(v.a,{color:"purple",size:"15px"})]})]})]}),Object(a.jsxs)("div",{className:"statistics",children:[Object(a.jsxs)("h3",{className:"winstat",children:[c," :\xa0",t]}),Object(a.jsxs)("h3",{className:"winstat",children:[i," :\xa0",n]}),Object(a.jsxs)("h3",{children:["Ties :\xa0",r]})]})]})}}]),n}(r.Component),B=function(e){Object(o.a)(n,e);var t=Object(A.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleScore=function(e){var t,n,r=a.state,c=r.userName1,i=r.userName2;n="player1"===e?c:"player2"===e?i:"Tied",a.setState((t={},Object(s.a)(t,e,a.state[e]+1),Object(s.a)(t,"winner",n),t))},a.handleName=function(e,t){a.setState({userName1:e,userName2:t,showLogin:!1})},a.handleEndgame=function(e){a.setState({showEndgame:e})},a.state={ties:0,userName1:"Player 1",userName2:"Player 2",winner:"",player1:0,player2:0,showLogin:!0,showEndgame:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.userName1,n=e.userName2,r=e.winner,c=e.player1,i=e.player2,l=e.ties,s=e.showLogin,d=e.showEndgame;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(O,{ties:l,player1:c,player2:i,userName1:t,userName2:n}),d?Object(a.jsx)(p,{winner:r,endgame:this.handleEndgame}):null,s?Object(a.jsx)(g,{names:this.handleName}):null,Object(a.jsx)(y,{userName1:t,userName2:n,endgame:this.handleEndgame,handleScore:this.handleScore})]})}}]),n}(c.a.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};l.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),f()}},[[20,1,2]]]);
//# sourceMappingURL=main.714c4427.chunk.js.map