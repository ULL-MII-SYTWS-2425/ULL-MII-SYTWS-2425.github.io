(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{658:function(e,a,r){"use strict";r.r(a);r(35),r(57),r(56),r(38),r(12),r(125);var t={data:{organization:{teams:{totalCount:6,edges:[{node:{name:"casiano-rodriguez-leon-alu0100291865",members:{totalCount:1,edges:[{memberAccessUrl:"https://github.com/orgs/ULL-MII-SYTWS-2425/people/casiano-rodriguez",node:{name:"Casiano as ULL alumni",url:"https://github.com/casiano-rodriguez",email:"",login:"casiano-rodriguez"}}]},url:"https://github.com/orgs/ULL-MII-SYTWS-2425/teams/casiano-rodriguez-leon-alu0100291865"}},{node:{name:"daniel_felipe-gomez-alu0101438139",members:{totalCount:1,edges:[{memberAccessUrl:"https://github.com/orgs/ULL-MII-SYTWS-2425/people/DanielFelipeGomez",node:{name:"Daniel Felipe Gómez Aristizabal",url:"https://github.com/DanielFelipeGomez",email:"",login:"DanielFelipeGomez"}}]},url:"https://github.com/orgs/ULL-MII-SYTWS-2425/teams/daniel_felipe-gomez-alu0101438139"}},{node:{name:"ismael-martin-herrera-alu0101397375",members:{totalCount:1,edges:[{memberAccessUrl:"https://github.com/orgs/ULL-MII-SYTWS-2425/people/imh-02",node:{name:"Ismael Martín Herrera",url:"https://github.com/imh-02",email:"ismael.martin.26@ull.edu.es",login:"imh-02"}}]},url:"https://github.com/orgs/ULL-MII-SYTWS-2425/teams/ismael-martin-herrera-alu0101397375"}},{node:{name:"nicolas-aranda-robayna-alu0123456789",members:{totalCount:1,edges:[{memberAccessUrl:"https://github.com/orgs/ULL-MII-SYTWS-2425/people/nicarandar",node:{name:"Nicolás Aranda",url:"https://github.com/nicarandar",email:"",login:"nicarandar"}}]},url:"https://github.com/orgs/ULL-MII-SYTWS-2425/teams/nicolas-aranda-robayna-alu0123456789"}},{node:{name:"rebeca-rodriguez-alu0101394763",members:{totalCount:1,edges:[{memberAccessUrl:"https://github.com/orgs/ULL-MII-SYTWS-2425/people/rrrguez",node:{name:"Rebeca Rguez",url:"https://github.com/rrrguez",email:"",login:"rrrguez"}}]},url:"https://github.com/orgs/ULL-MII-SYTWS-2425/teams/rebeca-rodriguez-alu0101394763"}},{node:{name:"rebeca-rodriguez-rodriguez-alu0101394763",members:{totalCount:0,edges:[]},url:"https://github.com/orgs/ULL-MII-SYTWS-2425/teams/rebeca-rodriguez-rodriguez-alu0101394763"}}]}}}};function o(e){return e.charAt(0).toUpperCase()+e.slice(1)}var n={data:function(){return{rawTeams:t.data.organization.teams.edges,totalCount:t.data.organization.teams.totalCount}},computed:{teams:function(){return this.rawTeams&&Array.isArray(this.rawTeams)?this.rawTeams.map((function(e){var a,r=e.node,t=null==r||null===(a=r.members)||void 0===a?void 0:a.edges;if(!t||!Array.isArray(t)||0===t.length)return{name:r.name,url:r.url,repositories:r.url+"/repositories",userName:o(r.name.split(/[-_]/)[0]),userUrl:"",notifications:"",length:0};var n=t[0].node;return{name:r.name,url:r.url,repositories:r.url+"/repositories",userName:n.name||o(r.name.split(/[-_]/)[0]),userUrl:n.url,notifications:"https://github.com/notifications?query=author%3A".concat(n.login),length:t.length}})):[]}}},i=r(9),s=Object(i.a)(n,(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",[r("h2",[e._v(e._s(e.totalCount)+" Teams")]),e._v(" "),r("ul",e._l(e.teams,(function(a){return r("li",{key:a.name},[r("a",{attrs:{href:a.url}},[e._v(e._s(a.name)+" ("+e._s(a.length)+" member)")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:a.repositories,target:"_blank"}},[e._v("Repositories")])]),e._v(" "),r("li",[r("a",{attrs:{href:a.userUrl,target:"_blank"}},[e._v(e._s(a.userName))])]),e._v(" "),r("li",[r("a",{attrs:{href:a.notifications,target:"_blank"}},[e._v(" Notifications")])])])])})),0)])}),[],!1,null,null,null);a.default=s.exports}}]);