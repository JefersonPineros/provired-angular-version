"use strict";(self.webpackChunkprovired_angular_version=self.webpackChunkprovired_angular_version||[]).push([[592],{3752:(u,i,t)=>{t.d(i,{W:()=>o});let o=(()=>{class r{}return r.TOKEN_AUTHORIZATION={TOKEN:"YWYxODYxM2E4c2RmK0ZXUHIwVjFyM2Qq8XRxYUJzQVdEWA==",API_KEY:"6LfY88EaAAAAAKjsd8wLV-3IBDd1ufx9HwY10a0W"},r})()},4690:(u,i,t)=>{t.d(i,{K:()=>o});class o{constructor(a,n,s,_,e,c,d){this.username=a,this.fi=n,this.ff=s,this.group_users=_,this.parent=e,this.from=c,this.rows=d}}},4739:(u,i,t)=>{t.d(i,{w:()=>r});var o=t(4690);class r extends o.K{constructor(n,s){super(),this.name_file=n,this.name_user=s}}},3799:(u,i,t)=>{t.d(i,{s:()=>o});class o{constructor(a,n,s,_,e,c,d,h,l,p,v,E){this.depto=a,this.municipio=n,this.corporacion=s,this.despacho=_,this.demandante=e,this.demandado=c,this.radicacion=d,this.juzgado_origen=h,this.codigo23=l,this.proceso=p,this.suscriptor=v,this.etiqueta=E}}},8262:(u,i,t)=>{t.d(i,{N:()=>n});var o=t(529),r=t(2340),a=t(8256);let n=(()=>{class s{constructor(e){this.http=e}login(e){return this.http.post(r.N.apiBaseUrl+"login",e)}enviarCorreoToken(e){return this.http.get(`${r.N.apiBaseUrl}sendCambio/${e}`)}validarToken(e){return this.http.get(`${r.N.apiBaseUrl}validarCodigo/${e.user}/${e.token}`)}updatePass(e){const c=new o.WM({"Content-Type":"text/plain;charset-UTF-8"});return this.http.post(`${r.N.apiBaseUrl}actualizaPassword`,e,{headers:c})}}return s.\u0275fac=function(e){return new(e||s)(a.LFG(o.eN))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);