(this.webpackJsonpattentionboard2=this.webpackJsonpattentionboard2||[]).push([[0],{179:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a(1),n=a.n(c),s=a(55),l=a.n(s),r=(a(63),a(6)),o=a(7),h=a(11),b=a(10),j=(a(34),a(56)),d=(a(161),function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={chartData:e.chartData},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"chart",children:Object(i.jsx)(j.Bar,{data:this.state.chartData,options:{responsive:!0,title:{display:!0,text:this.props.title,fontSize:"20"},legend:{display:!1,position:"bottom"},scales:{yAxes:[{ticks:{stepSize:20,min:0,max:100}}],xAxes:[{gridLines:{display:!1}}]},tooltips:{mode:"point"},plugins:{datalabels:{color:"black",anchor:"end",align:"end",labels:{title:{font:{size:"16"}}}}}}})})}}]),a}(c.Component));d.defaultProps={title:"Title",displayTitle:!0,displayLegend:!0,legendPosition:"right"};var u=d,O=a(180),g=a(181),x=a(182),m=(c.Component,a.p+"static/media/KIT.36547446.png"),f=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(O.a,{fluid:!0,children:Object(i.jsxs)(g.a,{children:[Object(i.jsx)(x.a,{xs:6,sm:9,style:{display:"flex",alignItems:"center",backgroundColor:""},children:Object(i.jsx)("h1",{color:"black",style:{fontSize:"3vw"},children:" AttentionBoard"})}),Object(i.jsx)(x.a,{xs:6,sm:3,style:{display:"flex",justifyContent:"center"},children:Object(i.jsx)("img",{src:m,height:"75"})})]})}),Object(i.jsx)("hr",{})]})}}]),a}(c.Component),v=a(183),p=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={textTile:e.textTile,subtitleTile:e.subtitleTile,valueTile:e.valueTile},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(v.a,{border:"light",style:{height:"20vh",width:"",color:"rgba(0,0,0, 1)",backgroundColor:"rgba(232,232,232,1)"},children:Object(i.jsxs)(v.a.Body,{children:[Object(i.jsxs)(v.a.Title,{style:{fontSize:"2vh",fontWeight:"bold"},children:[" ",this.state.textTile]}),Object(i.jsxs)(v.a.Subtitle,{style:{fontSize:"1.5vh"},children:[" ",this.state.subtitleTile]}),Object(i.jsx)(v.a.Text,{style:{fontSize:"4vh",fontWeight:"bold"},children:this.state.valueTile})]})})})}}]),a}(c.Component),y=a(57),T=a.n(y),k=a.p+"static/media/test.7410af8f.mp4",W=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var i;return Object(r.a)(this,a),(i=t.call(this,e)).state={},i}return Object(o.a)(a,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)(T.a,{className:"react-player",url:k,width:"",height:"40vh",controls:!0})})}}]),a}(c.Component),C=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={chartData:{}},e}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.getChartData()}},{key:"getChartData",value:function(){this.setState({chartDataJA:{labels:["Woche 1","Woche 2","Woche 3","Woche 4"],datasets:[{label:"Gemeinsame Aufmerksamkeit",data:[54,35,80,10],backgroundColor:["rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)"]}]},chartDataAA:{labels:["Woche 1","Woche 2","Woche 3","Woche 4"],datasets:[{label:"Aufmerksamkeits\xe4hnlichkeit",data:[82,75,53,99],backgroundColor:["rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)"]}]},chartDataP:{labels:["Woche 1","Woche 2","Woche 3","Woche 4"],datasets:[{label:"Pr\xe4senz",data:[55,60,90,100],backgroundColor:["rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)"]}]},chartDataTest:{labels:["Woche 1","Woche 2","Woche 3","Woche 4"],datasets:[{label:"Test",data:[54,35,80,90],backgroundColor:["rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)","rgba(0,150, 130, 1)"]}]}})}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{}),Object(i.jsx)(O.a,{fluid:!0,children:Object(i.jsxs)(g.a,{children:[Object(i.jsx)(x.a,{md:4,lg:2,fluid:!0,children:Object(i.jsx)("div",{children:Object(i.jsxs)(O.a,{style:{height:window.innerHeight},children:[Object(i.jsx)(g.a,{style:{height:"auto",alignItems:"center"},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(p,{textTile:"Gemeinsame Aufmerksamkeit",subtitleTile:"Woche 1",valueTile:"54%"})})}),Object(i.jsx)(g.a,{style:{height:"auto",alignItems:"center"},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(p,{textTile:"\xc4hnlichkeits-Index",subtitleTile:"Woche 1",valueTile:"82"})})}),Object(i.jsx)(g.a,{style:{height:"auto",alignItems:"center"},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(p,{textTile:"Pr\xe4senz",subtitleTile:"Woche 1",valueTile:"55%"})})}),Object(i.jsx)(g.a,{style:{height:"auto",alignItems:"center"},children:Object(i.jsx)(x.a,{children:Object(i.jsx)(p,{textTile:"Pr\xe4sentationsanteil",subtitleTile:"Woche 1",valueTile:"54%"})})})]})})}),Object(i.jsxs)(x.a,{md:8,lg:10,children:[Object(i.jsxs)(g.a,{md:12,style:{height:"45vh"},children:[Object(i.jsx)(x.a,{md:12,lg:6,children:Object(i.jsx)(u,{chartData:this.state.chartDataJA,title:"Gemeinsame Aufmerksamkeit [in %]",legendPosition:"bottom"})}),Object(i.jsx)(x.a,{md:12,lg:6,children:Object(i.jsx)(u,{chartData:this.state.chartDataAA,title:"\xc4hnlichkeits-Index",legendPosition:"bottom"})})]}),Object(i.jsxs)(g.a,{style:{height:"45vh"},children:[Object(i.jsx)(x.a,{md:12,lg:6,children:Object(i.jsx)(u,{chartData:this.state.chartDataP,title:"Pr\xe4senz [in %]",legendPosition:"bottom"})}),Object(i.jsx)(x.a,{md:12,lg:6,children:Object(i.jsx)("div",{children:Object(i.jsx)(W,{})})})]})]})]})})]})}}]),a}(c.Component),D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,184)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),i(e),c(e),n(e),s(e)}))};l.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(C,{})}),document.getElementById("root")),D()},34:function(e,t,a){},63:function(e,t,a){}},[[179,1,2]]]);
//# sourceMappingURL=main.906b08aa.chunk.js.map