"use strict";(self.webpackChunkprovired_angular_version=self.webpackChunkprovired_angular_version||[]).push([[270],{1747:(A,g,i)=>{i.d(g,{D:()=>v});var p=i(805),o=i(8256),m=i(6895),u=i(4247);function e(a,c){}function T(a,c){if(1&a&&o.YNc(0,e,0,0,"ng-template",3),2&a){const s=o.oxw();o.Q6J("ngTemplateOutlet",s.titulo)}}function f(a,c){}function R(a,c){1&a&&o._UZ(0,"div")}function x(a,c){}function P(a,c){if(1&a&&(o.YNc(0,R,1,0,"div",5),o.YNc(1,x,0,0,"ng-template",3)),2&a){const s=o.oxw();o.Q6J("ngIf",s.footer),o.xp6(1),o.Q6J("ngTemplateOutlet",s.pie)}}let v=(()=>{class a{constructor(){this.footer=!1}ngOnInit(){}ngAfterContentInit(){this.plantillas?.forEach(s=>{switch(s.getType()){case"header":this.titulo=s.template;break;case"content":this.contenido=s.template;break;case"footer":this.pie=s.template}})}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=o.Xpm({type:a,selectors:[["app-card-component"]],contentQueries:function(s,d,E){if(1&s&&o.Suo(E,p.jx,4),2&s){let h;o.iGM(h=o.CRH())&&(d.plantillas=h)}},inputs:{footer:"footer"},decls:6,vars:1,consts:[["pTemplate","header"],[1,"grid","p-fluid"],[1,"col-12"],[3,"ngTemplateOutlet"],["pTemplate","footer"],[4,"ngIf"]],template:function(s,d){1&s&&(o.TgZ(0,"p-card"),o.YNc(1,T,1,1,"ng-template",0),o.TgZ(2,"div",1)(3,"div",2),o.YNc(4,f,0,0,"ng-template",3),o.qZA()(),o.YNc(5,P,2,2,"ng-template",4),o.qZA()),2&s&&(o.xp6(4),o.Q6J("ngTemplateOutlet",d.contenido))},dependencies:[m.O5,m.tP,p.jx,u.Z]}),a})()},4270:(A,g,i)=>{i.r(g),i.d(g,{PageRedModule:()=>j});var p=i(6895),o=i(9965),m=i(805),u=i(2276),e=i(8256),T=i(3894),f=i(9721),R=i(4004),x=i(2340),P=i(6695),v=i(5267),a=i(529);let c=(()=>{class t{constructor(n,l){this.http=n,this.session=l,this.sessionLog=new u.U}getVencimientos(){let n=this.session.getSession();const{user:l}=n;let M=(new P.q).generateModel(v.N.CONTROLLERS_METHODS[1].controller,v.N.CONTROLLERS_METHODS[1].method,{user:l});return this.sessionLog=this.session.getSession(),this.http.post(x.N.apiBaseUrl+"index",M).pipe((0,R.U)(C=>{if(200==C.status)return C.data;throw new Error("Se ha presentado un error")}))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(a.eN),e.LFG(f.u))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var s=i(334),d=i(1747),E=i(3249),h=i(9385),Z=i(2453);function S(t,r){1&t&&(e.TgZ(0,"div",3)(1,"div",6)(2,"div",10)(3,"div",11)(4,"h4"),e._uU(5,"Audiencias y/o Vencimientos Pr\xf3ximos"),e.qZA()()()()())}const N=function(){return{field:"name_ciudad",header:"Cidad"}},y=function(){return{field:"name_despacho",header:"Despacho"}},I=function(){return{field:"fecha_vence_terminos",header:"Fecha",isFecha:!0}},D=function(t,r,n){return[t,r,n]};function L(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"div",12),e._UZ(1,"app-tabla-component",13),e.qZA(),e.TgZ(2,"div",14)(3,"div",11)(4,"app-button-component",15),e.NdJ("eventEmiter",function(){e.CHM(n);const _=e.oxw(3);return e.KtG(_.actionSeeMore())}),e.qZA()()()}if(2&t){const n=e.oxw(3);e.xp6(1),e.Q6J("cols",e.kEZ(7,D,e.DdM(4,N),e.DdM(5,y),e.DdM(6,I)))("data",n.vencimientosList)("fixStyleTable",!0)("stripedTable",!0)}}function Y(t,r){1&t&&(e.TgZ(0,"div",6)(1,"div",3)(2,"app-card-component",7),e.YNc(3,S,6,0,"ng-template",8),e.YNc(4,L,5,11,"ng-template",9),e.qZA()()())}function U(t,r){1&t&&(e.TgZ(0,"div",3)(1,"div",6)(2,"div",10)(3,"div",11)(4,"h4"),e._uU(5,"Audiencias y/o Vencimientos Pr\xf3ximos"),e.qZA()()()()())}function F(t,r){1&t&&(e.TgZ(0,"div",3)(1,"div",17),e._uU(2," No tiene audiencias y/o vencimientos programados. "),e.qZA()(),e.TgZ(3,"div",18)(4,"div",19)(5,"div",20),e._uU(6," Ahora usted puede programar las fechas de audiencias y/o vencimientos de t\xe9rminos en la plataforma de Provired, dando click en el boton "),e._UZ(7,"i",21),e._uU(8," (PROGRAMAR) que aparece en el REPORTE DE NOTIFICACIONES y en el LISTADO DE PROCESOS ACTIVOS. "),e.qZA()()())}function B(t,r){1&t&&(e.TgZ(0,"div",16)(1,"div",7)(2,"app-card-component"),e.YNc(3,U,6,0,"ng-template",8),e.YNc(4,F,9,0,"ng-template",9),e.qZA()()())}function J(t,r){if(1&t&&(e.TgZ(0,"div",3),e.YNc(1,Y,5,0,"div",4),e.YNc(2,B,5,0,"ng-template",null,5,e.W1O),e.qZA()),2&t){const n=e.MAs(3),l=e.oxw();e.xp6(1),e.Q6J("ngIf",l.vencimientosList.length>0)("ngIfElse",n)}}const Q=[{path:"",redirectTo:"start",pathMatch:"full"},{path:"start",component:(()=>{class t{constructor(n,l,_,M,C){this.breadCrumService=n,this.session=l,this.vencimientos=_,this.router=M,this.spinner=C,this.sessionReq=new u.U,this.redirect=!1,this.terminos=!1,this.vencimientosList=[]}ngOnInit(){try{this.sessionReq=this.session.getSession(),this.redirect=this.sessionReq.redirect,this.terminos=this.sessionReq.terminos_ok}catch(n){console.log(n)}this.breadCrumService.setItems([{label:"Inicio"}]),this.spinner.show(),this.vencimientos.getVencimientos().subscribe({next:n=>{n.length>0&&(this.vencimientosList=n),this.spinner.hide()},error:n=>{this.spinner.hide(),console.log(n)}})}actionSeeMore(){this.router.navigate(["provired/home-provired/home/inicio/audiencia"])}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(T.p),e.Y36(f.u),e.Y36(c),e.Y36(o.F0),e.Y36(s.t2))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-page-red"]],features:[e._Bn([m.ez])],decls:5,vars:2,consts:[["class","grid",4,"ngIf"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-clip-rotate-multiple",3,"fullScreen"],[2,"color","white"],[1,"grid"],["class","col-12",4,"ngIf","ngIfElse"],["noContent",""],[1,"col-12"],[1,"lg:col-8","xl:col-8","col-12","sm:col-12","lg:col-offset-2","xl:col-offset-2"],["pTemplate","header"],["pTemplate","content"],[1,"flex","flex-column-reverse","mt-4"],[1,"flex","align-items-center","justify-content-center"],[1,"p-2"],[3,"cols","data","fixStyleTable","stripedTable"],[1,"mt-3","flex","flex-column-reverse"],["nameButton","Ver m\xe1s",3,"eventEmiter"],[1,"col-12","mt-4"],[1,"col-12","ml-4"],[1,"grid","mt-5"],[1,"col-12","p-4"],[1,"text-justify"],[1,"pi","pi-calendar-plus"]],template:function(n,l){1&n&&(e.YNc(0,J,4,2,"div",0),e._UZ(1,"p-toast"),e.TgZ(2,"ngx-spinner",1)(3,"p",2),e._uU(4,"Loading..."),e.qZA()()),2&n&&(e.Q6J("ngIf","S"==l.sessionReq.tipousuario),e.xp6(2),e.Q6J("fullScreen",!0))},dependencies:[p.O5,d.D,m.jx,E.G,h.u,Z.FN,s.Ro],styles:["h4[_ngcontent-%COMP%]{color:#eb2e2e}"]}),t})()}];let V=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[o.Bz.forChild(Q),o.Bz]}),t})();var O=i(6031);let j=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[c],imports:[p.ez,o.Bz,V,O.GX,O.kP,O.aK,Z.EV,s.ef]}),t})()}}]);