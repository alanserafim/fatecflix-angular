"use strict";(self.webpackChunkfatecflix_angular=self.webpackChunkfatecflix_angular||[]).push([[8],{1008:(D,b,d)=>{d.r(b),d.d(b,{ExerciciosModule:()=>j});var u=d(6895),l=d(6582),r=d(4006);class m{}var t=d(4650),g=d(2340),_=d(529);let Z=(()=>{class o{constructor(e){this.http=e}atualizarExercicio(e,i,c){return this.http.post(`${g.N.api_url}/api/v1/exercicios/${i}/curso/${c}`,e)}getExercicioById(e){return this.http.get(`${g.N.api_url}/api/v1/exercicios/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(_.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=d(9549),x=d(4144),p=d(4859),C=d(7392),h=d(8790),s=d(3546);function M(o,n){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",19)(2,"mat-form-field",20),t._UZ(3,"input",21),t.qZA(),t.TgZ(4,"button",15),t.NdJ("click",function(){const a=t.CHM(e).index,f=t.oxw();return t.KtG(f.removeDoFormArray(f.afirmativas,a))}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()(),t.BQk()}if(2&o){const e=n.index;t.xp6(1),t.Q6J("formGroupName",e)}}let E=(()=>{class o{constructor(e,i,c,a){this.fb=e,this.route=i,this.router=c,this.atualizaExercicio=a,this.formAfirmativa=this.fb.group({afirmativas:new r.Oe([])}),this.submitted=!1,this.afirmativas=this.formAfirmativa.get("afirmativas")}ngOnInit(){this.exercicio=new m,this.exercicioId=this.route.snapshot.params.id,this.cursoId=this.route.snapshot.params.cursoId,this.atualizaExercicio.getExercicioById(this.exercicioId).subscribe(e=>{console.log(e),this.exercicio=e;for(const i of this.exercicio.afirmativas)this.afirmativas.push(new r.NI(i,r.kI.required))},e=>console.log(e)),console.log(this.afirmativas)}addAfirmativa(){this.afirmativas.push(this.fb.group({afirmativa:""}))}getAfirmativas(e){return e.get("afirmativas").controls}removeDoFormArray(e,i){e.removeAt(i),this.exercicio.afirmativas?.pop()?.at(i)}updateExercicio(){for(let e of this.afirmativas.value)console.log(e.afirmativa),this.exercicio.afirmativas?.push(e.afirmativa);this.atualizaExercicio.atualizarExercicio(this.exercicio,this.exercicioId,this.cursoId).subscribe(e=>console.log(e),e=>console.log(e)),this.exercicio=new m,this.gotoList()}onSubmit(){this.updateExercicio()}gotoList(){this.router.navigate(["/usuario/sucesso"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.qu),t.Y36(l.gz),t.Y36(l.F0),t.Y36(Z))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-atualiza-exercicio"]],decls:40,vars:9,consts:[[1,"content"],[1,"card__container"],[1,"card__1"],[1,"card__2"],[1,""],[3,"hidden"],[3,"ngSubmit"],[1,"input"],["for","titulo"],["type","text","id","titulo","required","","name","titulo",1,"form-control",3,"value","ngModel","ngModelChange"],["for","enunciado"],["type","text","id","enunciado","required","","name","enunciado",1,"form-control",3,"value","ngModel","ngModelChange"],["for","resposta"],["type","text","id","resposta","required","","name","resposta",1,"form-control",3,"value","ngModel","ngModelChange"],[3,"formGroup"],["mat-button","","type","button","color","primary",3,"click"],["formArrayName","afirmativas","fxFlex","100","fxLayout","column"],[4,"ngFor","ngForOf"],["mat-button","","type","submit"],[3,"formGroupName"],["fxFlex","100"],["formControlName","afirmativas","matInput","","type","text","placeholder","Afirmativa:",1,"form-control"]],template:function(e,i){1&e&&(t.TgZ(0,"body"),t._UZ(1,"app-header"),t.TgZ(2,"div",0)(3,"mat-card",1)(4,"mat-card",2)(5,"mat-card-header")(6,"mat-card-title"),t._uU(7,"Fatecflix"),t.qZA()(),t.TgZ(8,"mat-card-content")(9,"h2"),t._uU(10,"Atualizar exercicio"),t.qZA()(),t._UZ(11,"mat-card-footer"),t.qZA(),t.TgZ(12,"mat-card",3)(13,"h1",4),t._uU(14,"Atualizar Dados"),t.qZA(),t._UZ(15,"div",5),t.TgZ(16,"form",6),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(17,"div",7)(18,"label",8),t._uU(19,"Titulo:"),t.qZA(),t.TgZ(20,"input",9),t.NdJ("ngModelChange",function(a){return i.exercicio.titulo=a}),t.qZA()(),t.TgZ(21,"div",7)(22,"label",10),t._uU(23,"Enunciado:"),t.qZA(),t.TgZ(24,"input",11),t.NdJ("ngModelChange",function(a){return i.exercicio.enunciado=a}),t.qZA()(),t.TgZ(25,"div",7)(26,"label",12),t._uU(27,"Resposta da Quest\xe3o:"),t.qZA(),t.TgZ(28,"input",13),t.NdJ("ngModelChange",function(a){return i.exercicio.resposta=a}),t.qZA()(),t.TgZ(29,"span"),t._uU(30,"Afirmativas"),t.qZA(),t.TgZ(31,"form",14)(32,"button",15),t.NdJ("click",function(){return i.addAfirmativa()}),t.TgZ(33,"mat-icon"),t._uU(34,"add"),t.qZA()(),t.TgZ(35,"div",16),t.YNc(36,M,7,1,"ng-container",17),t.qZA()(),t.TgZ(37,"mat-card-actions")(38,"button",18),t._uU(39," ATUALIZAR "),t.qZA()()()()()()()),2&e&&(t.xp6(15),t.Q6J("hidden",i.submitted),t.xp6(5),t.Q6J("value",i.exercicio.titulo)("ngModel",i.exercicio.titulo),t.xp6(4),t.Q6J("value",i.exercicio.enunciado)("ngModel",i.exercicio.enunciado),t.xp6(4),t.Q6J("value",i.exercicio.resposta)("ngModel",i.exercicio.resposta),t.xp6(3),t.Q6J("formGroup",i.formAfirmativa),t.xp6(5),t.Q6J("ngForOf",i.afirmativas.controls))},dependencies:[u.sg,v.KE,x.Nt,p.lW,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.On,r.F,C.Hw,h.G,s.a8,s.dk,s.dn,s.n5,s.hq,s.rt,r.sg,r.u,r.x0,r.CE],styles:["body[_ngcontent-%COMP%]{background-color:#d8dee7}.card__container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;margin:2em;width:70%}.card__1[_ngcontent-%COMP%]{background-color:var(--primary-color);width:30%;max-width:350px;color:#fff;display:flex;flex-direction:column;justify-content:space-between;text-align:center;border-radius:6px}.card__1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:jus;font-size:2.5em}.card__1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify;font-size:1.5em}.card__2[_ngcontent-%COMP%]{box-shadow:none;width:70%}button[_ngcontent-%COMP%]{color:#fefefe;background-color:var(--primary-color);width:100%;height:50px;border-radius:12px}mat-card-actions[_ngcontent-%COMP%]{margin-top:2em}.input[_ngcontent-%COMP%]{width:100%;margin-top:1em;display:flex;flex-direction:column}.input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;border-radius:8px;min-height:5vh;padding:3px}.form-control[_ngcontent-%COMP%]{width:100%}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:rgb(66,16,11);background:linear-gradient(135deg,rgba(66,16,11,1) 51%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 100%)}.content[_ngcontent-%COMP%]{flex:1 0 auto;display:flex;justify-content:center}.footer[_ngcontent-%COMP%]{flex-shrink:0}@media (max-width: 850px){.card__container[_ngcontent-%COMP%]{flex-direction:column;width:90%;height:auto;padding:1em;margin:0}.card__1[_ngcontent-%COMP%]{width:90%;max-width:unset}.card__2[_ngcontent-%COMP%]{width:90%}.content[_ngcontent-%COMP%]{padding:1em}mat-card-header[_ngcontent-%COMP%]{align-self:center}button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;background-color:var(--primary-color);color:#fefefe}.content[_ngcontent-%COMP%]{height:auto}.footer[_ngcontent-%COMP%]{display:none}}"]}),o})(),O=(()=>{class o{constructor(e){this.http=e}deletaExercicio(e){return this.http.delete(`${g.N.api_url}/api/v1/exercicios/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(_.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),y=(()=>{class o{constructor(e,i,c,a){this.deletarExercicio=e,this.consultaExercicio=i,this.router=c,this.route=a}ngOnInit(){this.exercicio=new m,this.exercicioId=this.route.snapshot.params.id,this.consultaExercicio.getExercicioById(this.exercicioId).subscribe(e=>{console.log(e),this.exercicio=e},e=>console.log(e))}deleteExercicio(){this.deletarExercicio.deletaExercicio(this.exercicioId).subscribe(()=>{this.router.navigate(["/exercicio/listar"])})}cancel(){this.router.navigate(["/exercicio/listar"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(O),t.Y36(Z),t.Y36(l.F0),t.Y36(l.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-deleta-exercicio"]],decls:21,vars:2,consts:[[1,"card__container"],[1,"card__1"],[1,"card__2"],["appearance","outline",1,"input"],["matInput","","placeholder","Titulo do exercicio","name","titulo","disabled","",3,"value"],["matInput","","placeholder","Enunciado do exercicio","name","enunciado","disabled","",3,"value"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"body"),t._UZ(1,"app-header"),t.TgZ(2,"mat-card",0)(3,"mat-card",1)(4,"mat-card-header")(5,"mat-card-title"),t._uU(6,"Fatecflix"),t.qZA()(),t.TgZ(7,"mat-card-content")(8,"h2"),t._uU(9,"Excluir Exercicio"),t.qZA()(),t._UZ(10,"mat-card-footer"),t.qZA(),t.TgZ(11,"mat-card",2)(12,"form")(13,"mat-form-field",3),t._UZ(14,"input",4),t.qZA(),t.TgZ(15,"mat-form-field",3),t._UZ(16,"input",5),t.qZA()(),t.TgZ(17,"button",6),t.NdJ("click",function(){return i.deleteExercicio()}),t._uU(18," Excluir "),t.qZA(),t.TgZ(19,"button",7),t.NdJ("click",function(){return i.cancel()}),t._uU(20," Cancelar "),t.qZA()()()()),2&e&&(t.xp6(14),t.Q6J("value",i.exercicio.titulo),t.xp6(2),t.Q6J("value",i.exercicio.enunciado))},dependencies:[v.KE,x.Nt,p.lW,r._Y,r.JL,r.F,h.G,s.a8,s.dk,s.dn,s.n5,s.rt],styles:["body[_ngcontent-%COMP%]{background-color:#d8dee7}.card__container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;width:70%;margin:2em 2em 2em 240px}.card__1[_ngcontent-%COMP%]{background-color:var(--primary-color);width:30%;max-width:350px;color:#fff;display:flex;flex-direction:column;justify-content:space-between;border-radius:6px}.card__1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:jus;font-size:2.5em}.card__1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify;font-size:1.5em}.card__2[_ngcontent-%COMP%]{box-shadow:none;width:70%}.descricaoInput[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{color:var(--primary-color);margin:auto;width:100%;height:50px;border-radius:12px}mat-form-field[_ngcontent-%COMP%]{margin-top:1em}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:rgb(66,16,11);background:linear-gradient(135deg,rgba(66,16,11,1) 51%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 100%)}.content[_ngcontent-%COMP%]{flex:1 0 auto;display:flex;justify-content:center}.footer[_ngcontent-%COMP%]{flex-shrink:0}@media (max-width: 850px){.card__container[_ngcontent-%COMP%]{flex-direction:column;width:90%;height:auto;padding:1em;margin:0}.card__1[_ngcontent-%COMP%]{width:90%;max-width:unset}.card__2[_ngcontent-%COMP%]{width:90%}.content[_ngcontent-%COMP%]{padding:1em}mat-card-header[_ngcontent-%COMP%]{align-self:center}button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;background-color:var(--primary-color);color:#fefefe}.content[_ngcontent-%COMP%]{height:auto}.footer[_ngcontent-%COMP%]{display:none}}"]}),o})(),A=(()=>{class o{constructor(e){this.http=e}listarExercicios(e){return this.http.get(`${g.N.api_url}/api/v1/exercicios/curso/${e}`)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(_.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var T=d(7569),P=d(202);function N(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(e);const c=t.oxw(2);return t.KtG(c.gotoCadastra())}),t._uU(1," CADASTRAR EXERCICIOS "),t.qZA()}}function w(o,n){if(1&o&&(t.TgZ(0,"div",9)(1,"label",15),t._uU(2),t.qZA()()),2&o){const e=t.oxw().$implicit;t.xp6(2),t.hij("Resposta da Quest\xe3o: ",e.resposta,"")}}function I(o,n){if(1&o&&(t.TgZ(0,"form"),t._UZ(1,"input",16),t.TgZ(2,"label",15),t._uU(3),t.qZA()()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("value",e),t.xp6(2),t.Oqu(e)}}function U(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.atualiza(c.exercicioId))}),t._uU(1,"Atualizar"),t.qZA()}}function q(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"button",17),t.NdJ("click",function(){t.CHM(e);const c=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.deleta(c.exercicioId))}),t._uU(1,"Deletar"),t.qZA()}}function F(o,n){if(1&o&&(t.TgZ(0,"form")(1,"div",9)(2,"label",10),t._uU(3),t.qZA()(),t.TgZ(4,"div",9)(5,"label",11),t._uU(6),t.qZA()(),t.YNc(7,w,3,1,"div",12),t.TgZ(8,"span"),t._uU(9,"Afirmativas"),t.qZA(),t.YNc(10,I,4,2,"form",7),t.TgZ(11,"mat-card-actions")(12,"button",13),t._uU(13," RESPONDER "),t.qZA(),t.YNc(14,U,2,0,"button",14),t.YNc(15,q,2,0,"button",14),t.qZA()()),2&o){const e=n.$implicit,i=t.oxw().ngIf;t.xp6(3),t.Oqu(e.titulo),t.xp6(3),t.Oqu(e.enunciado),t.xp6(1),t.Q6J("ngIf",i.roles.includes("INSTRUTOR")),t.xp6(3),t.Q6J("ngForOf",e.afirmativas),t.xp6(4),t.Q6J("ngIf",i.roles.includes("INSTRUTOR")),t.xp6(1),t.Q6J("ngIf",i.roles.includes("INSTRUTOR"))}}function J(o,n){if(1&o&&(t.TgZ(0,"div",2),t.YNc(1,N,2,0,"button",3),t.TgZ(2,"mat-card",4)(3,"mat-card",5)(4,"mat-card-header")(5,"mat-card-title"),t._uU(6,"Fatecflix"),t.qZA()(),t.TgZ(7,"mat-card-content")(8,"h2"),t._uU(9,"Exercicios"),t.qZA()(),t._UZ(10,"mat-card-footer"),t.qZA(),t.TgZ(11,"mat-card",6),t.YNc(12,F,16,6,"form",7),t.ALo(13,"async"),t.qZA()()()),2&o){const e=n.ngIf,i=t.oxw();t.xp6(1),t.Q6J("ngIf",e.roles.includes("INSTRUTOR")),t.xp6(11),t.Q6J("ngForOf",t.lcZ(13,2,i.exercicios))}}let z=(()=>{class o{constructor(e,i,c,a){this.listarExercicios=e,this.router=i,this.route=c,this.usuarioLogadoService=a,this.usuarioLogado$=this.usuarioLogadoService.retornaUsuarioLogado(),this.isLoggedIn=!0}ngOnInit(){this.cursoId=this.route.snapshot.params.id,this.reloadData()}reloadData(){this.exercicios=this.listarExercicios.listarExercicios(this.cursoId),console.log(this.exercicios)}atualiza(e){this.router.navigate(["/exercicios/atualizar",e,"curso",this.cursoId])}deleta(e){this.router.navigate(["/exercicios/deletar",e])}gotoCadastra(){this.router.navigate(["/exercicios/cadastrar",this.cursoId])}recebeUsuarioLogado(){this.usuarioLogadoService.retornaUsuarioLogado().subscribe(e=>{console.log(e)},e=>{alert("Credenciais inv\xe1lidas"),console.log(e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(A),t.Y36(l.F0),t.Y36(l.gz),t.Y36(T.I))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-lista-exercicio"]],decls:5,vars:3,consts:[["class","content",4,"ngIf"],[1,"footer"],[1,"content"],["mat-button","","type","submit",3,"click",4,"ngIf"],[1,"card__container"],[1,"card__1"],[1,"card__2"],[4,"ngFor","ngForOf"],["mat-button","","type","submit",3,"click"],[1,"input"],["for","titulo"],["for","enunciado"],["class","input",4,"ngIf"],["mat-button","","type","submit"],[3,"click",4,"ngIf"],["for","resposta"],["type","radio","id","resposta","required","","name","resposta",1,"form-control",3,"value"],[3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"body"),t._UZ(1,"app-header"),t.YNc(2,J,14,4,"div",0),t.ALo(3,"async"),t._UZ(4,"app-footer",1),t.qZA()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,i.usuarioLogado$)))},dependencies:[u.sg,u.O5,p.lW,r._Y,r.JL,r.F,P.c,h.G,s.a8,s.dk,s.dn,s.n5,s.hq,s.rt,u.Ov],styles:[".tabela[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center;font-size:1.5em;font-weight:500;color:#000}.tabela[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center}table[_ngcontent-%COMP%]{width:80%;margin:auto}th.mat-sort-header-sorted[_ngcontent-%COMP%]{color:#000}.tabela[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:var(--secondary-text-color);text-align:center;font-size:2em;font-weight:500}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:rgb(66,16,11);background:linear-gradient(135deg,rgba(66,16,11,1) 51%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 100%)}.content[_ngcontent-%COMP%]{flex:1 0 auto}.footer[_ngcontent-%COMP%]{flex-shrink:0}"]}),o})(),k=(()=>{class o{constructor(e){this.http=e}cadastrarNovoExercicio(e,i){return this.http.post(`${g.N.api_url}/api/v1/exercicios/curso/${i}`,e)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(_.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function L(o,n){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",19)(2,"mat-form-field",20),t._UZ(3,"input",21),t.qZA(),t.TgZ(4,"button",15),t.NdJ("click",function(){const a=t.CHM(e).index,f=t.oxw();return t.KtG(f.removeDoFormArray(f.afirmativas,a))}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()(),t.BQk()}if(2&o){const e=n.index;t.xp6(1),t.Q6J("formGroupName",e)}}const S=[{path:"cadastrar/:id",component:(()=>{class o{constructor(e,i,c,a){this.fb=e,this.cadastrarExercicioService=i,this.router=c,this.activatedRoute=a,this.formAfirmativa=this.fb.group({afirmativas:new r.Oe([])}),this.afirmativas=this.formAfirmativa.get("afirmativas"),this.exercicio=new m,this.submitted=!1}ngOnInit(){this.exercicio=new m,this.cursoId=this.activatedRoute.snapshot.params.id}novoExercicio(){this.submitted=!0,this.exercicio=new m}cadastraNovoExercicio(){for(let e of this.afirmativas.value)console.log(e.role),this.exercicio.afirmativas?.push(e.role);this.cadastrarExercicioService.cadastrarNovoExercicio(this.exercicio,this.cursoId).subscribe(e=>{console.log(e),this.router.navigate(["usuario/sucesso"])},e=>{alert("Cadastro n\xe3o realizado!"),console.log(e),console.log(this.exercicio),console.log(this.cursoId)})}addAfirmativa(){this.afirmativas.push(this.fb.group({afirmativa:""}))}removeDoFormArray(e,i){e.removeAt(i),this.exercicio.afirmativas?.pop()?.at(i)}onSubmit(){this.submitted=!0,this.cadastraNovoExercicio()}gotoList(){this.router.navigate(["/usuario/sucesso"])}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(r.qu),t.Y36(k),t.Y36(l.F0),t.Y36(l.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-novo-exercicio"]],decls:40,vars:9,consts:[[1,"content"],[1,"card__container"],[1,"card__1"],[1,"card__2"],[1,""],[3,"hidden"],[3,"ngSubmit"],[1,"input"],["for","titulo"],["type","text","id","titulo","required","","name","titulo",1,"form-control",3,"value","ngModel","ngModelChange"],["for","enunciado"],["type","text","id","enunciado","required","","name","enunciado",1,"form-control",3,"value","ngModel","ngModelChange"],["for","resposta"],["type","text","id","resposta","required","","name","resposta",1,"form-control",3,"value","ngModel","ngModelChange"],[3,"formGroup"],["mat-button","","type","button","color","primary",3,"click"],["formArrayName","afirmativas","fxFlex","100","fxLayout","column"],[4,"ngFor","ngForOf"],["mat-button","","type","submit"],[3,"formGroupName"],["fxFlex","100"],["formControlName","afirmativas","matInput","","type","text","placeholder","Afirmativa:",1,"form-control"]],template:function(e,i){1&e&&(t.TgZ(0,"body"),t._UZ(1,"app-header"),t.TgZ(2,"div",0)(3,"mat-card",1)(4,"mat-card",2)(5,"mat-card-header")(6,"mat-card-title"),t._uU(7,"Fatecflix"),t.qZA()(),t.TgZ(8,"mat-card-content")(9,"h2"),t._uU(10,"Cadastrar exercicio"),t.qZA()(),t._UZ(11,"mat-card-footer"),t.qZA(),t.TgZ(12,"mat-card",3)(13,"h1",4),t._uU(14,"Cadastrar Dados"),t.qZA(),t._UZ(15,"div",5),t.TgZ(16,"form",6),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(17,"div",7)(18,"label",8),t._uU(19,"Titulo:"),t.qZA(),t.TgZ(20,"input",9),t.NdJ("ngModelChange",function(a){return i.exercicio.titulo=a}),t.qZA()(),t.TgZ(21,"div",7)(22,"label",10),t._uU(23,"Enunciado:"),t.qZA(),t.TgZ(24,"input",11),t.NdJ("ngModelChange",function(a){return i.exercicio.enunciado=a}),t.qZA()(),t.TgZ(25,"div",7)(26,"label",12),t._uU(27,"Resposta da Quest\xe3o:"),t.qZA(),t.TgZ(28,"input",13),t.NdJ("ngModelChange",function(a){return i.exercicio.resposta=a}),t.qZA()(),t.TgZ(29,"span"),t._uU(30,"Afirmativas"),t.qZA(),t.TgZ(31,"form",14)(32,"button",15),t.NdJ("click",function(){return i.addAfirmativa()}),t.TgZ(33,"mat-icon"),t._uU(34,"add"),t.qZA()(),t.TgZ(35,"div",16),t.YNc(36,L,7,1,"ng-container",17),t.qZA()(),t.TgZ(37,"mat-card-actions")(38,"button",18),t._uU(39," Cadastrar "),t.qZA()()()()()()()),2&e&&(t.xp6(15),t.Q6J("hidden",i.submitted),t.xp6(5),t.Q6J("value",i.exercicio.titulo)("ngModel",i.exercicio.titulo),t.xp6(4),t.Q6J("value",i.exercicio.enunciado)("ngModel",i.exercicio.enunciado),t.xp6(4),t.Q6J("value",i.exercicio.resposta)("ngModel",i.exercicio.resposta),t.xp6(3),t.Q6J("formGroup",i.formAfirmativa),t.xp6(5),t.Q6J("ngForOf",i.afirmativas.controls))},dependencies:[u.sg,v.KE,x.Nt,p.lW,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.On,r.F,C.Hw,h.G,s.a8,s.dk,s.dn,s.n5,s.hq,s.rt,r.sg,r.u,r.x0,r.CE],styles:["body[_ngcontent-%COMP%]{background-color:#d8dee7}.card__container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;margin:2em;width:70%}.card__1[_ngcontent-%COMP%]{background-color:var(--primary-color);width:30%;max-width:350px;color:#fff;display:flex;flex-direction:column;justify-content:space-between;border-radius:6px}.card__1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:jus;font-size:2.5em}.card__1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify;font-size:1.5em}.card__2[_ngcontent-%COMP%]{box-shadow:none;width:70%}.descricaoInput[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{color:var(--primary-color);margin:auto;width:100%;height:50px;border-radius:12px}mat-form-field[_ngcontent-%COMP%]{margin-top:1em}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:rgb(66,16,11);background:linear-gradient(135deg,rgba(66,16,11,1) 51%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 100%)}.content[_ngcontent-%COMP%]{flex:1 0 auto;display:flex;justify-content:center}.footer[_ngcontent-%COMP%]{flex-shrink:0}@media (max-width: 850px){.card__container[_ngcontent-%COMP%]{flex-direction:column;width:90%;height:auto;padding:1em;margin:0}.card__1[_ngcontent-%COMP%]{width:90%;max-width:unset}.card__2[_ngcontent-%COMP%]{width:90%}.content[_ngcontent-%COMP%]{padding:1em}mat-card-header[_ngcontent-%COMP%]{align-self:center}button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;background-color:var(--primary-color);color:#fefefe}.content[_ngcontent-%COMP%]{height:auto}.footer[_ngcontent-%COMP%]{display:none}}"]}),o})()},{path:"listar/:id",component:z},{path:"deletar/:id",component:y},{path:"atualizar/:id/curso/:cursoId",component:E}];let Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(S),l.Bz]}),o})();var Q=d(5035),R=d(9892),G=d(782);let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,Y,x.c,p.ot,r.u5,C.Ps,Q._,R.O,s.QW,G.N6,r.UX]}),o})()}}]);