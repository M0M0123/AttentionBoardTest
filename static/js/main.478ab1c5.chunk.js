(this.webpackJsonpattentionboard2=this.webpackJsonpattentionboard2||[]).push([[0],{184:function(e,t,a){},185:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a(0),n=a.n(c),l=a(18),s=a.n(l),r=(a(68),a(8)),o=a(9),h=a(11),b=a(10),j=(a(39),a(59)),d=(a(166),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={chartData:e.chartData},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"chart",children:Object(i.jsx)(j.Bar,{data:this.state.chartData,height:"auto",options:{responsive:!0,title:{display:!0,text:this.props.title,fontSize:"20"},legend:{display:!1,position:"bottom"},scales:{yAxes:[{ticks:{stepSize:20,min:0,max:100}}],xAxes:[{gridLines:{display:!1}}]},tooltips:{mode:"point"},plugins:{datalabels:{color:"black",anchor:"end",align:"end",labels:{title:{font:{size:"16"}}}}}}})})}}]),a}(c.Component));d.defaultProps={title:"Title",displayTitle:!0,displayLegend:!0,legendPosition:"right"};var u=d,g=a(187),O=a(188),x=a(189),m=(c.Component,a.p+"static/media/KIT.36547446.png"),v=(a.p,a.p+"static/media/AttentionBoard.4e388671.png"),f=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(g.a,{fluid:!0,children:Object(i.jsxs)(O.a,{children:[Object(i.jsx)(x.a,{xs:12,sm:10,style:{display:"flex",alignItems:"center",backgroundColor:""},children:Object(i.jsx)("img",{src:v,height:"75"})}),Object(i.jsx)(x.a,{xs:0,sm:2,style:{display:"flex",justifyContent:"center"},children:Object(i.jsx)("img",{src:m,height:"75"})})]})}),Object(i.jsx)("hr",{})]})}}]),a}(c.Component),p=a(191),T=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={textTile:e.textTile,subtitleTile:e.subtitleTile,valueTile:e.valueTile,colorTile:e.colorTile,increaseTile:e.increaseTile},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(p.a,{border:"light",style:{height:"22vh",width:"",color:this.state.colorTile,backgroundColor:"rgba(232,232,232,1)"},children:Object(i.jsxs)(p.a.Body,{children:[Object(i.jsxs)(p.a.Title,{style:{fontSize:"2vh",fontWeight:"bold"},children:[" ",this.state.textTile]}),Object(i.jsxs)(p.a.Subtitle,{style:{fontSize:"1.5vh"},children:[" ",this.state.subtitleTile]}),Object(i.jsxs)(p.a.Text,{style:{fontSize:"4vh",fontWeight:"bold"},children:[Object(i.jsx)("div",{children:this.state.valueTile}),Object(i.jsx)("div",{style:{fontSize:"1.5vh",fontWeight:"bold"},children:this.state.increaseTile})]})]})})})}}]),a}(c.Component),y=a(21),W=a.n(y),k=(a.p,a.p+"static/media/Woche2.c1d95c65.mp4"),C=(c.Component,a(190)),D=(a(184),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(C.a,{indicators:"false",children:[Object(i.jsxs)(C.a.Item,{interval:1e4,children:[Object(i.jsx)(W.a,{className:"react-player",url:k,width:"",height:"40vh",controls:!0}),Object(i.jsx)(C.a.Caption,{style:{color:"rgba(0,0,0,0.6)"},children:Object(i.jsx)("h3",{children:"Woche 1"})})]}),Object(i.jsxs)(C.a.Item,{children:[Object(i.jsx)(W.a,{className:"react-player",url:k,width:"",height:"40vh",controls:!0}),Object(i.jsx)(C.a.Caption,{style:{color:"rgba(0,0,0,0.6)"},children:Object(i.jsx)("h3",{children:"Woche 2"})})]})]})}}]),a}(c.Component)),A=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={chartData:{}},e}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartDataJA:{labels:["Woche 1","Woche 2","Woche 3","Woche 4"],datasets:[{label:"Gemeinsame Aufmerksamkeit",data:[70,80],backgroundColor:["rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)"]}]},chartDataAA:{labels:["Woche 1","Woche 2","Woche 3","Woche 4"],datasets:[{label:"Aufmerksamkeits\xe4hnlichkeit",data:[73,75],backgroundColor:["rgba(99,99,99,1)","rgba(99,99,99,1)","rgba(99,99,99,1)","rgba(99,99,99,1)"]}]},chartDataP:{labels:["Woche 1","Woche 2","Woche 3","Woche 4"],datasets:[{label:"Pr\xe4senz",data:[85,83],backgroundColor:["rgba(20,144,255,1)","rgba(20,144,255,1)","rgba(20,144,255,1)","rgba(20,144,255,1)"]}]},chartDataPA:{labels:["Woche 1","Woche 2","Woche 3","Woche 4"],datasets:[{label:"Test",data:[54,35,80,90],backgroundColor:["rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)"]}]}})}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{}),Object(i.jsx)(g.a,{fluid:!0,children:Object(i.jsxs)(O.a,{children:[Object(i.jsx)(x.a,{md:4,lg:2,fluid:!0,children:Object(i.jsx)("div",{children:Object(i.jsxs)(g.a,{style:{height:window.innerHeight},children:[Object(i.jsx)(O.a,{style:{height:"auto",alignItems:"center"},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(T,{textTile:"Gemeinsame Aufmerksamkeit",subtitleTile:"Woche 2",valueTile:"54%",colorTile:"rgba(0,150,130,1)",increaseTile:"+14% zu Woche 1",style:{height:"auto",alignItems:"center"}})})}),Object(i.jsx)(O.a,{style:{height:"auto",alignItems:"center"},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(T,{textTile:"\xc4hnlichkeits-Index",subtitleTile:"Woche 2",valueTile:"82",colorTile:"rgba(99,99,99,1)",increaseTile:"+XX% zu Woche 1"})})}),Object(i.jsx)(O.a,{style:{height:"auto",alignItems:"center"},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(T,{textTile:"Pr\xe4senz",subtitleTile:"Woche 2",valueTile:"55%",colorTile:"rgba(20,144,255,1)",increaseTile:"+XX% zu Woche 1"})})}),Object(i.jsx)(O.a,{style:{height:"auto",alignItems:"center"},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(T,{textTile:"Pr\xe4sentationsanteil",subtitleTile:"Woche 2",valueTile:"54%",colorTile:"rgab(0,150, 130, 1)",increaseTile:"+XX% zu Woche 1"})})})]})})}),Object(i.jsxs)(x.a,{md:8,lg:10,children:[Object(i.jsxs)(O.a,{style:{height:"45vh"},children:[Object(i.jsx)(x.a,{md:12,lg:6,children:Object(i.jsx)(u,{chartData:this.state.chartDataJA,title:"Gemeinsame Aufmerksamkeit [in %]",legendPosition:"bottom"})}),Object(i.jsx)(x.a,{md:12,lg:6,children:Object(i.jsx)(u,{chartData:this.state.chartDataAA,title:"\xc4hnlichkeits-Index",legendPosition:"bottom"})})]}),Object(i.jsxs)(O.a,{style:{height:"45vh"},children:[Object(i.jsx)(x.a,{md:12,lg:6,children:Object(i.jsx)(u,{chartData:this.state.chartDataP,title:"Pr\xe4senz [in %]",legendPosition:"bottom"})}),Object(i.jsx)(x.a,{md:12,lg:6,children:Object(i.jsx)("div",{children:Object(i.jsx)(D,{})})})]})]})]})})]})}}]),a}(c.Component),z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,192)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),i(e),c(e),n(e),l(e)}))};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root")),z()},39:function(e,t,a){},68:function(e,t,a){}},[[185,1,2]]]);
//# sourceMappingURL=main.478ab1c5.chunk.js.map