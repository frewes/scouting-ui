(this["webpackJsonpscouting-ui"]=this["webpackJsonpscouting-ui"]||[]).push([[0],{13:function(e,t,a){},23:function(e,t,a){e.exports=a(51)},3:function(e,t,a){"use strict";(function(e){a.d(t,"f",(function(){return i})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return m})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return g})),a.d(t,"b",(function(){return f}));var n=a(5),c=a.n(n),r=a(11),o=a.n(r),s=a(4),l="";function i(e){return Object(s.a)(e)}function u(e,t,a,n){return Object(s.c)(e,t,a,n)}function m(e,t){var a=t.filter((function(t){return t.ec5_parent_uuid===e.ec5_uuid}));return Object(s.b)(a)}function h(e,t){var a,n;return c.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:(a=new Headers).append("Content-Type","application/json"),n=JSON.stringify(s.d.auth),fetch("https://five.epicollect.net/api/oauth/token",{method:"POST",headers:a,body:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(e){t(e)}));case 5:case"end":return c.stop()}}))}function d(e,t){var a;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==l){n.next=4;break}h((function(a){console.log(a),l="Bearer "+a.access_token,setTimeout(d(e,t),1e3)}),(function(e){console.log("error",e)})),n.next=15;break;case 4:return console.log("AT = "+l),n.prev=5,n.next=8,c.a.awrap(o.a.get("https://five.epicollect.net/api/export/entries/"+s.d.project_slug+"?per_page=200",{headers:{Authorization:l}}));case 8:a=n.sent,e(a.data.data.entries),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),t(n.t0);case 15:case"end":return n.stop()}}),null,null,[[5,12]])}function g(t,a,n,r){var i,u;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(i="https://five.epicollect.net/api/export/media/"+s.d.project_slug+"?type=photo&format=entry_original&name="+a,""!==l){t.next=5;break}h((function(e){console.log(e),l="Bearer "+e.access_token,setTimeout(d(n,r),1e3)}),(function(e){console.log("error",e)})),t.next=17;break;case 5:return console.log("AT = "+l),t.prev=6,t.next=9,c.a.awrap(o.a.get(i,{headers:{Authorization:l},responseType:"arraybuffer",timeout:1e4}));case 9:u=t.sent,console.log(u),n(e.from(u.data,"binary").toString("base64")),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),r(t.t0);case 17:case"end":return t.stop()}}),null,null,[[6,14]])}function f(e,t){return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(""===l)h((function(a){console.log(a),l="Bearer "+a.access_token,setTimeout(d(e,t),10)}),(function(e){console.log("error",e)}));else{console.log("AT = "+l);try{p("https://five.epicollect.net/api/export/entries/"+s.d.project_slug+"?form_ref="+s.d.form_ref_match_scouting+"&per_page=1000",e,t)}catch(n){t(n)}}case 1:case"end":return a.stop()}}))}function p(e,t,a){var n,r;return c.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c.a.awrap(o.a.get(e,{headers:{Authorization:l}}));case 3:n=s.sent,r=n.data.data.entries,console.log("PARTIAL"),console.log(n),null!==n.data.links.next?t(p(n.data.links.next,(function(e){t(r.concat(e))}),a)):t(r),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),a(s.t0);case 13:case"end":return s.stop()}}),null,null,[[0,10]])}}).call(this,a(28).Buffer)},4:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return o}));var n={project_slug:"artemis-scouting",form_ref_pit_scouting:"a60f4a287fc94f9fb26dd500afa3f965_5c709f3f878d1",form_ref_match_scouting:"a60f4a287fc94f9fb26dd500afa3f965_5c763e134d320",auth:{grant_type:"client_credentials",client_id:1444,client_secret:"rpk95sxJBQYVCU4vi8PTCJ1sA6C8FcQW1pPZTPRW"}};function c(e){console.log("GET SCORE MATCH DATA"),console.log(e);var t={cargo:0,hatches:0,climbs:0,average_cargo:0,average_hatches:0};return e.forEach((function(e){t.cargo+=e.Total_Cargo,t.hatches+=e.Total_Hatches})),t.average_cargo=t.cargo/e.length,t.average_hatches=t.hatches/e.length,t}function r(e,t,a,n){console.log("RATE ALLIANCE MATCH DATA"),console.log(e);var r={cargo:0,hatches:0,climbs:0},o={cargo:0,hatches:0,climbs:0,average_cargo:0,average_hatches:0},s={cargo:0,hatches:0,climbs:0,average_cargo:0,average_hatches:0},l={cargo:0,hatches:0,climbs:0,average_cargo:0,average_hatches:0};return t&&(o=c(e.filter((function(e){return e.ec5_parent_uuid===t.ec5_uuid})))),a&&(s=c(e.filter((function(e){return e.ec5_parent_uuid===a.ec5_uuid})))),n&&(l=c(e.filter((function(e){return e.ec5_parent_uuid===n.ec5_uuid})))),r.cargo=o.average_cargo+s.average_cargo+l.average_cargo,r.hatches=o.average_hatches+s.average_hatches+l.average_hatches,r.climbs=o.climbs+s.climbs+l.climbs,r}function o(e){return c(e).cargo}},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),o=a.n(r),s=(a(13),a(6)),l=a(7),i=a(9),u=a(8),m=a(2),h=a(10),d=a(3),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={showpic:!1,error:!1},a.ToggleShowPic=a.ToggleShowPic.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"ToggleShowPic",value:function(){console.log(this.state.showpic),this.setState({showpic:!this.state.showpic})}},{key:"render",value:function(){var e=Object(d.f)(this.props.matches);return console.log("Team Data:"),console.log(this.props.team),c.a.createElement("div",{hidden:!this.props.team},e&&c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,Object.keys(e).map((function(t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,t.replace("_"," ")),c.a.createElement("td",null,e[t]))})))),c.a.createElement("div",{className:"gridspan"},this.state.showpic?this.props.loading?c.a.createElement("span",null,"Loading..."):this.props.pic?c.a.createElement("img",{alt:"No pic found",src:"data:image/jpeg;base64,"+this.props.pic,onClick:this.ToggleShowPic}):c.a.createElement("span",{className:this.state.error?"text-error":"",onClick:this.ToggleShowPic},"No photo found..."):c.a.createElement("button",{onClick:this.ToggleShowPic},c.a.createElement("i",{className:"fas fa-image"}))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={teamA:null,teamB:null,teamC:null,pics:[null,null,null],loading:[!1,!1,!1]},a.GetPhoto=a.GetPhoto.bind(Object(m.a)(a)),a.SelectorChange=a.SelectorChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"SelectorChange",value:function(e,t){var a=this;console.log("TARGET VALUE: "+e.target.value),console.log(this.props.scout_data),console.log(this.props.scout_data.find((function(t){return t.ec5_uuid===e.target.value})));var n=this.state.loading;n[t]=!0;var c=this.state.pics;c[t]="",0===t?this.setState({teamA:this.props.scout_data.find((function(t){return t.ec5_uuid===e.target.value})),loading:n,pics:c},(function(){a.GetPhoto(a.state.teamA,t)})):1===t?this.setState({teamB:this.props.scout_data.find((function(t){return t.ec5_uuid===e.target.value})),loading:n,pics:c},(function(){a.GetPhoto(a.state.teamB,t)})):2===t&&this.setState({teamC:this.props.scout_data.find((function(t){return t.ec5_uuid===e.target.value})),loading:n,pics:c},(function(){a.GetPhoto(a.state.teamC,t)}))}},{key:"GetPhoto",value:function(e,t){var a=this;e&&Object(d.c)(e.ec5_uuid,e.Picture_of_robot,(function(e){var n=a.state.pics;n[t]=e;var c=a.state.loading;c[t]=!1,console.log(n[t]),a.setState({pics:n,loading:c},(function(){console.log("STATE UPDATED"),console.log(a.state)}))}),(function(e){console.log(e),console.error("Error fetching team photo: "+e);var n=a.state.pics;n[t]="";var c=a.state.loading;c[t]=!1,a.setState({pics:n,loading:c})}))}},{key:"render",value:function(){var e=this;console.log(this.props.scout_data);var t=Object(d.e)(this.props.match_data,this.state.teamA,this.state.teamB,this.state.teamC);return c.a.createElement("div",{className:"primary-view"},0===this.props.match_data.length?c.a.createElement("div",{className:"selectors"},c.a.createElement(n.Fragment,null,c.a.createElement("h1",null,"Something went wrong..."))):c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"selectors"},c.a.createElement("div",{className:"team"},c.a.createElement("h1",{className:"team-selector"},"Alliance"),t&&c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,Object.keys(t).map((function(e){return c.a.createElement("tr",{key:e},c.a.createElement("td",null,e.replace("_"," ")),c.a.createElement("td",null,t[e]))}))))),[this.state.teamA,this.state.teamB,this.state.teamC].map((function(t,a){return c.a.createElement("div",{className:"team",key:a},c.a.createElement("select",{value:t?t.ec5_uuid:"",className:"team-selector",onChange:function(t){return e.SelectorChange(t,a)}},c.a.createElement("option",{value:""}),e.props.scout_data.sort((function(e,t){return e.Team_Number-t.Team_Number})).map((function(e,t){return c.a.createElement("option",{key:t,value:e.ec5_uuid},e.Team_Number," ",e.Team_Name)}))),t&&c.a.createElement(g,{team:t,matches:e.props.match_data.filter((function(e){return e.ec5_parent_uuid===t.ec5_uuid})),pic:e.state.pics[a],loading:e.state.loading[a]}))})))))}}]),t}(n.Component),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={teams:a.props.scout_data.map((function(e){return e.Gone=!1,e}))},a.toggle=a.toggle.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"toggle",value:function(e){var t=this;console.log("Toggling "+e);var a=this.state.teams;a.map((function(t){return t.ec5_uuid===e&&(t.Gone=!t.Gone),t})),this.setState({teams:a},(function(){return console.log(t.state.teams)}))}},{key:"render",value:function(){var e=this;return console.log("Test"),c.a.createElement("div",{className:"primary-view"},0===this.props.match_data.length?c.a.createElement("div",{className:"selectors"},c.a.createElement(n.Fragment,null,c.a.createElement("h1",null,"Something went wrong..."))):c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"allianceSelection"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Team number"),c.a.createElement("th",null,"Team name"),c.a.createElement("th",null,"Score"),c.a.createElement("th",null))),c.a.createElement("tbody",null,this.state.teams.map((function(t){return t.Rank=Object(d.d)(t,e.props.match_data),t})).sort((function(e,t){return t.Rank-e.Rank})).map((function(t,a){return c.a.createElement("tr",{key:a,className:t.Gone?"cross":"happy"},c.a.createElement("td",null,t.Team_Number),c.a.createElement("td",null,t.Team_Name),c.a.createElement("td",null,t.Rank),c.a.createElement("td",null,c.a.createElement("button",{className:"btn btn-primary",onClick:function(a){e.toggle(t.ec5_uuid)}},c.a.createElement("i",{className:"fas fa-times-circle"}))))})))))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={res:"",resClass:"",access_token:"",match_data:[],scout_data:[],page:"landing"},a.Update=a.Update.bind(Object(m.a)(a)),a.Update(),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"Update",value:function(){var e=this;Object(d.a)((function(t){console.log("TEAM DATA"),console.log(t),e.setState({scout_data:t},(function(){Object(d.b)((function(t){console.log(t),e.setState({res:"Success",resClass:"success",match_data:t})}),(function(t){console.error(t),e.setState({res:"Failed: "+t})}))}))}),(function(t){console.error(t),e.setState({res:"Failed: "+t,resClass:"danger"})}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"bg-dark"},c.a.createElement("div",{className:"bg-dark"},"landing"===this.state.page?c.a.createElement("div",{className:"landing"},c.a.createElement("div",{className:"landing-inner dark-overlay"},c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.setState({page:"strategy"})}},"Strategy"),c.a.createElement("button",{className:"btn",onClick:function(){return e.setState({page:"alliance"})}},"Alliance Selection")))):c.a.createElement("div",{className:"main container"},0===this.state.match_data.length?c.a.createElement("div",{className:"primary-view"},c.a.createElement("div",{className:"selectors"},c.a.createElement("h1",null,"Loading..."))):c.a.createElement(n.Fragment,null,"strategy"===this.state.page?c.a.createElement(f,{scout_data:this.state.scout_data,match_data:this.state.match_data}):c.a.createElement(p,{scout_data:this.state.scout_data,match_data:this.state.match_data})))),c.a.createElement("div",{className:"footer"},c.a.createElement("button",{className:"refresh",onClick:function(){return e.setState({page:"landing"})}},c.a.createElement("i",{className:"fas fa-home"})),c.a.createElement("button",{className:"refresh refresh-"+this.state.resClass,onClick:this.Update},c.a.createElement("i",{className:"fas fa-sync"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.490bf919.chunk.js.map