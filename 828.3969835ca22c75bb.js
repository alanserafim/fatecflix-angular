"use strict";(self.webpackChunkfatecflix_angular=self.webpackChunkfatecflix_angular||[]).push([[828],{4828:(jt,N,s)=>{s.r(N),s.d(N,{AulasModule:()=>Vt});var t=s(4650),A=s(6895),C=s(7579),y=s(1135),P=s(9646),S=s(9751),O=s(576),J=s(3268);function D(a,o,e){return e?D(a,o).pipe((0,J.Z)(e)):new S.y(n=>{const i=(...l)=>n.next(1===l.length?l[0]:l),r=a(i);return(0,O.m)(o)?()=>o(i,r):void 0})}var f=s(9841),U=s(9635),at=s(6451),F=s(5698),Q=s(8675),nt=s(8505),L=s(2722),it=s(4033),V=s(8421),Z=s(4482);const rt={connector:()=>new C.x};function j(a,o=rt){const{connector:e}=o;return(0,Z.e)((n,i)=>{const r=e();(0,V.Xf)(a(function ot(a){return new S.y(o=>a.subscribe(o))}(r))).subscribe(i),i.add(n.subscribe(r))})}var ut=s(3900),dt=s(5577),E=s(5403),ct=s(4671),ht=s(5032),$=s(3269);function k(...a){const o=(0,$.jO)(a);return(0,Z.e)((e,n)=>{const i=a.length,r=new Array(i);let l=a.map(()=>!1),m=!1;for(let h=0;h<i;h++)(0,V.Xf)(a[h]).subscribe((0,E.x)(n,_=>{r[h]=_,!m&&!l[h]&&(l[h]=!0,(m=l.every(ct.y))&&(l=null))},ht.Z));e.subscribe((0,E.x)(n,h=>{if(m){const _=[h,...r];n.next(o?o(..._):_)}}))})}var T=s(4004),gt=s(5026),pt=s(1884);const{isArray:mt}=Array;function ft(a){return 1===a.length&&mt(a[0])?a[0]:a}function X(...a){const o=(0,$.jO)(a);return o?(0,U.z)(X(...a),(0,J.Z)(o)):(0,Z.e)((e,n)=>{(0,f.l)([e,...ft(a)])(n)})}var _t=s(9300);const bt=["youtubeContainer"];let q=(()=>{class a{constructor(e,n){this._ngZone=e,this._youtubeContainer=new C.x,this._destroyed=new C.x,this._playerChanges=new y.X(void 0),this._videoId=new y.X(void 0),this._height=new y.X(390),this._width=new y.X(640),this._startSeconds=new y.X(void 0),this._endSeconds=new y.X(void 0),this._suggestedQuality=new y.X(void 0),this._playerVars=new y.X(void 0),this.ready=this._getLazyEmitter("onReady"),this.stateChange=this._getLazyEmitter("onStateChange"),this.error=this._getLazyEmitter("onError"),this.apiChange=this._getLazyEmitter("onApiChange"),this.playbackQualityChange=this._getLazyEmitter("onPlaybackQualityChange"),this.playbackRateChange=this._getLazyEmitter("onPlaybackRateChange"),this._isBrowser=(0,A.NF)(n)}get videoId(){return this._videoId.value}set videoId(e){this._videoId.next(e)}get height(){return this._height.value}set height(e){this._height.next(e||390)}get width(){return this._width.value}set width(e){this._width.next(e||640)}set startSeconds(e){this._startSeconds.next(e)}set endSeconds(e){this._endSeconds.next(e)}set suggestedQuality(e){this._suggestedQuality.next(e)}get playerVars(){return this._playerVars.value}set playerVars(e){this._playerVars.next(e)}ngOnInit(){if(!this._isBrowser)return;let e=(0,P.of)(!0);if(!window.YT||!window.YT.Player){const i=new C.x;this._existingApiReadyCallback=window.onYouTubeIframeAPIReady,window.onYouTubeIframeAPIReady=()=>{this._existingApiReadyCallback&&this._existingApiReadyCallback(),this._ngZone.run(()=>i.next(!0))},e=i.pipe((0,F.q)(1),(0,Q.O)(!1))}const n=function Pt(a,o,e,n,i,r,l){const m=(0,f.a)([o,r]).pipe(k((0,f.a)([n,i])),(0,T.U)(([h,_])=>{const[c,g]=h,[v,Y]=_;return c?{videoId:c,playerVars:g,width:v,height:Y}:void 0}));return(0,f.a)([a,m,(0,P.of)(l)]).pipe(function Tt(a){return(0,U.z)(X(a),function yt(a){return(0,Z.e)((o,e)=>{let n=!1,i=0;o.subscribe((0,E.x)(e,r=>(n||(n=!a(r,i++)))&&e.next(r)))})}(([o,e])=>!e),(0,T.U)(([o])=>o))}(e),(0,gt.R)(xt,void 0),(0,pt.x)())}(this._youtubeContainer,this._videoId,e,this._width,this._height,this._playerVars,this._ngZone).pipe((0,nt.b)(i=>{this._playerChanges.next(i)}),function Ct(a){return(0,dt.z)(o=>o?H(o)?(0,P.of)(o):new S.y(e=>{let n=!1,i=!1;const r=l=>{i=!0,n||(l.target.removeEventListener("onReady",r),e.next(l.target))};return o.addEventListener("onReady",r),()=>{n=!0,i||a(o)}}).pipe((0,F.q)(1),(0,Q.O)(void 0)):(0,P.of)(void 0))}(i=>{H(i)||i.destroy()}),(0,L.R)(this._destroyed),function lt(a){return a?o=>j(a)(o):o=>function st(a,o){const e=(0,O.m)(a)?a:()=>a;return(0,O.m)(o)?j(o,{connector:e}):n=>new it.c(n,e)}(new C.x)(o)}());n.subscribe(i=>{this._player=i,i&&this._pendingPlayerState&&this._initializePlayer(i,this._pendingPlayerState),this._pendingPlayerState=void 0}),function vt(a,o,e){(0,f.a)([a,o,e]).subscribe(([n,i,r])=>n&&n.setSize(i,r))}(n,this._width,this._height),function At(a,o){(0,f.a)([a,o]).subscribe(([e,n])=>e&&n&&e.setPlaybackQuality(n))}(n,this._suggestedQuality),function Mt(a,o,e,n,i,r){const l=(0,f.a)([e,n]).pipe((0,T.U)(([c,g])=>({startSeconds:c,endSeconds:g}))),m=l.pipe(R(a,c=>!!c&&!function St(a){const o=a.getPlayerState();return o!==YT.PlayerState.UNSTARTED&&o!==YT.PlayerState.CUED}(c))),h=o.pipe(R(a,(c,g)=>!!c&&c.videoId!==g)),_=a.pipe(R((0,f.a)([o,l]),([c,g],v)=>!(!v||c==v.videoId&&!g.startSeconds&&!g.endSeconds)));(0,at.T)(_,h,m).pipe(k((0,f.a)([a,o,l,i])),(0,T.U)(([c,g])=>g),(0,L.R)(r)).subscribe(([c,g,v,Y])=>{!g||!c||(c.videoId=g,c.cueVideoById({videoId:g,suggestedQuality:Y,...v}))})}(n,this._videoId,this._startSeconds,this._endSeconds,this._suggestedQuality,this._destroyed),n.connect()}ngAfterViewInit(){this._youtubeContainer.next(this.youtubeContainer.nativeElement)}ngOnDestroy(){this._player&&(this._player.destroy(),window.onYouTubeIframeAPIReady=this._existingApiReadyCallback),this._playerChanges.complete(),this._videoId.complete(),this._height.complete(),this._width.complete(),this._startSeconds.complete(),this._endSeconds.complete(),this._suggestedQuality.complete(),this._youtubeContainer.complete(),this._playerVars.complete(),this._destroyed.next(),this._destroyed.complete()}playVideo(){this._player?this._player.playVideo():this._getPendingState().playbackState=YT.PlayerState.PLAYING}pauseVideo(){this._player?this._player.pauseVideo():this._getPendingState().playbackState=YT.PlayerState.PAUSED}stopVideo(){this._player?this._player.stopVideo():this._getPendingState().playbackState=YT.PlayerState.CUED}seekTo(e,n){this._player?this._player.seekTo(e,n):this._getPendingState().seek={seconds:e,allowSeekAhead:n}}mute(){this._player?this._player.mute():this._getPendingState().muted=!0}unMute(){this._player?this._player.unMute():this._getPendingState().muted=!1}isMuted(){return this._player?this._player.isMuted():!!this._pendingPlayerState&&!!this._pendingPlayerState.muted}setVolume(e){this._player?this._player.setVolume(e):this._getPendingState().volume=e}getVolume(){return this._player?this._player.getVolume():this._pendingPlayerState&&null!=this._pendingPlayerState.volume?this._pendingPlayerState.volume:0}setPlaybackRate(e){if(this._player)return this._player.setPlaybackRate(e);this._getPendingState().playbackRate=e}getPlaybackRate(){return this._player?this._player.getPlaybackRate():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackRate?this._pendingPlayerState.playbackRate:0}getAvailablePlaybackRates(){return this._player?this._player.getAvailablePlaybackRates():[]}getVideoLoadedFraction(){return this._player?this._player.getVideoLoadedFraction():0}getPlayerState(){if(this._isBrowser&&window.YT)return this._player?this._player.getPlayerState():this._pendingPlayerState&&null!=this._pendingPlayerState.playbackState?this._pendingPlayerState.playbackState:YT.PlayerState.UNSTARTED}getCurrentTime(){return this._player?this._player.getCurrentTime():this._pendingPlayerState&&this._pendingPlayerState.seek?this._pendingPlayerState.seek.seconds:0}getPlaybackQuality(){return this._player?this._player.getPlaybackQuality():"default"}getAvailableQualityLevels(){return this._player?this._player.getAvailableQualityLevels():[]}getDuration(){return this._player?this._player.getDuration():0}getVideoUrl(){return this._player?this._player.getVideoUrl():""}getVideoEmbedCode(){return this._player?this._player.getVideoEmbedCode():""}_getPendingState(){return this._pendingPlayerState||(this._pendingPlayerState={}),this._pendingPlayerState}_initializePlayer(e,n){const{playbackState:i,playbackRate:r,volume:l,muted:m,seek:h}=n;switch(i){case YT.PlayerState.PLAYING:e.playVideo();break;case YT.PlayerState.PAUSED:e.pauseVideo();break;case YT.PlayerState.CUED:e.stopVideo()}null!=r&&e.setPlaybackRate(r),null!=l&&e.setVolume(l),null!=m&&(m?e.mute():e.unMute()),null!=h&&e.seekTo(h.seconds,h.allowSeekAhead)}_getLazyEmitter(e){return this._playerChanges.pipe((0,ut.w)(n=>n?D(i=>{n.addEventListener(e,i)},i=>{try{n.removeEventListener&&n.removeEventListener(e,i)}catch{}}):(0,P.of)()),n=>new S.y(i=>n.subscribe({next:r=>this._ngZone.run(()=>i.next(r)),error:r=>i.error(r),complete:()=>i.complete()})),(0,L.R)(this._destroyed))}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.R0b),t.Y36(t.Lbi))},a.\u0275cmp=t.Xpm({type:a,selectors:[["youtube-player"]],viewQuery:function(e,n){if(1&e&&t.Gf(bt,5),2&e){let i;t.iGM(i=t.CRH())&&(n.youtubeContainer=i.first)}},inputs:{videoId:"videoId",height:"height",width:"width",startSeconds:"startSeconds",endSeconds:"endSeconds",suggestedQuality:"suggestedQuality",playerVars:"playerVars",showBeforeIframeApiLoads:"showBeforeIframeApiLoads"},outputs:{ready:"ready",stateChange:"stateChange",error:"error",apiChange:"apiChange",playbackQualityChange:"playbackQualityChange",playbackRateChange:"playbackRateChange"},decls:2,vars:0,consts:[["youtubeContainer",""]],template:function(e,n){1&e&&t._UZ(0,"div",null,0)},encapsulation:2,changeDetection:0}),a})();function xt(a,[o,e,n]){if(a&&e&&a.playerVars!==e.playerVars)a.destroy();else{if(!e)return void(a&&a.destroy());if(a)return a}const i=n.runOutsideAngular(()=>new YT.Player(o,e));return i.videoId=e.videoId,i.playerVars=e.playerVars,i}function H(a){return"getPlayerStatus"in a}function R(a,o){return(0,U.z)(k(a),(0,_t.h)(([e,n])=>o(n,e)),(0,T.U)(([e])=>e))}let Zt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({}),a})();var d=s(4006),w=s(4859),u=s(3546),wt=s(7392),I=s(4144),It=s(782),p=s(6582);class b{}var x=s(2340),K=s(529);let z=(()=>{class a{constructor(e){this.http=e}cadastrarNovaAula(e,n){return this.http.post(`${x.N.api_url}/api/v1/aulas/curso/${n}`,e)}getAulaById(e){return this.http.get(`${x.N.api_url}/api/v1/aulas/${e}`)}atualizarAula(e,n,i){return this.http.post(`${x.N.api_url}/api/v1/aulas/${n}/curso/${i}`,e)}deletaAula(e){return this.http.delete(`${x.N.api_url}/api/v1/aulas/${e}`)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(K.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var M=s(9549);let Ot=(()=>{class a{constructor(e,n,i){this.consultaAula=e,this.route=n,this.router=i,this.submitted=!1}ngOnInit(){this.aula=new b,this.id=this.route.snapshot.params.id,this.cursoId=this.route.snapshot.params.cursoId,console.log(this.cursoId),this.consultaAula.getAulaById(this.id).subscribe(e=>{console.log(e),this.aula=e},e=>console.log(e))}updateAula(){this.consultaAula.atualizarAula(this.aula,this.id,this.cursoId).subscribe(e=>console.log(e),e=>console.log(e)),this.aula=new b,this.gotoList()}onSubmit(){this.updateAula()}gotoList(){this.router.navigate(["/usuario/sucesso"])}gotoAula(){this.router.navigate(["/aulas/dashboard",this.id])}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(z),t.Y36(p.gz),t.Y36(p.F0))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-atualizar-aulas"]],decls:31,vars:9,consts:[[3,"hidden"],[3,"ngSubmit"],["cadastrarAulaForm","ngForm"],[1,"container"],["appearance","outline","hideRequiredMarker",""],["name","titulo","required","","matInput","",3,"value","ngModel","ngModelChange"],["matInput","","name","conteudo","required","",3,"value","ngModel","ngModelChange"],["matInput","","name","video","required","",3,"value","ngModel","ngModelChange"],["mat-button","","type","submit",3,"disabled"],["mat-button","",3,"click"],[1,"btn","btn-success",3,"click"]],template:function(e,n){if(1&e&&(t._uU(0,"<<<<<<< HEAD\n"),t.TgZ(1,"mat-card",0)(2,"mat-card-title"),t._uU(3,"Atualizar de aulas"),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5,"Atualize as aulas nos cursos selecionados"),t.qZA(),t.TgZ(6,"form",1,2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(8,"div",3)(9,"mat-form-field",4)(10,"mat-label"),t._uU(11,"Titulo da aula"),t.qZA(),t.TgZ(12,"input",5),t.NdJ("ngModelChange",function(r){return n.aula.titulo=r}),t.qZA()(),t.TgZ(13,"mat-form-field",4)(14,"mat-label"),t._uU(15,"Descri\xe7\xe3o textual"),t.qZA(),t.TgZ(16,"textarea",6),t.NdJ("ngModelChange",function(r){return n.aula.conteudo=r}),t.qZA()(),t.TgZ(17,"mat-form-field",4)(18,"mat-label"),t._uU(19,"Link do v\xeddeo"),t.qZA(),t.TgZ(20,"input",7),t.NdJ("ngModelChange",function(r){return n.aula.video=r}),t.qZA()()(),t.TgZ(21,"mat-card-actions")(22,"button",8),t._uU(23,"SALVAR"),t.qZA(),t.TgZ(24,"button",9),t.NdJ("click",function(){return n.gotoAula()}),t._uU(25,"CANCELAR"),t.qZA()()()(),t.TgZ(26,"div",0)(27,"button",10),t.NdJ("click",function(){return n.updateAula()}),t._uU(28,"UPDATE"),t.qZA()(),t._UZ(29,"br"),t._uU(30,"\n=======\n>>>>>>> ae5ee28555c3a61ae53da23962a0654f7f008833\n")),2&e){const i=t.MAs(7);t.xp6(1),t.Q6J("hidden",n.submitted),t.xp6(11),t.Q6J("value",n.aula.titulo)("ngModel",n.aula.titulo),t.xp6(4),t.Q6J("value",n.aula.conteudo)("ngModel",n.aula.conteudo),t.xp6(4),t.Q6J("value",n.aula.video)("ngModel",n.aula.video),t.xp6(2),t.Q6J("disabled",i.invalid),t.xp6(4),t.Q6J("hidden",!n.submitted)}},dependencies:[u.a8,u.n5,u.$j,u.hq,w.lW,M.KE,M.hX,I.Nt,d._Y,d.Fj,d.JJ,d.JL,d.Q7,d.On,d.F],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),a})(),Ut=(()=>{class a{constructor(e,n,i){this.router=e,this.cadastrarAulaService=n,this.activatedRoute=i,this.aula=new b,this.submitted=!1}ngOnInit(){this.aula=new b,this.cursoId=this.activatedRoute.snapshot.params.id}novaAula(){this.submitted=!0,this.aula=new b}cadastraNovaAula(){this.cadastrarAulaService.cadastrarNovaAula(this.aula,this.cursoId).subscribe(e=>{console.log(e),this.router.navigate(["usuario/sucesso"])},e=>{alert("Cadastro n\xe3o realizado!"),console.log(e),console.log(this.aula),console.log(this.cursoId)})}onSubmit(){this.submitted=!0,this.cadastraNovaAula()}gotoCurso(e){this.router.navigate(["/cursos/detalhar",e])}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.F0),t.Y36(z),t.Y36(p.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-cadastrar-aulas"]],decls:29,vars:6,consts:[[3,"hidden"],[3,"ngSubmit"],["cadastrarAulaForm","ngForm"],[1,"container"],["appearance","outline","hideRequiredMarker",""],["name","titulo","required","","matInput","",3,"ngModel","ngModelChange"],["matInput","","name","conteudo","required","",3,"ngModel","ngModelChange"],["matInput","","name","video","required","",3,"ngModel","ngModelChange"],["mat-button","","type","submit",3,"disabled"],["mat-button","",3,"click"],[1,"btn","btn-success",3,"click"]],template:function(e,n){if(1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-title"),t._uU(2,"Inclus\xe3o de aulas"),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4,"Adicone novas aulas nos cursos selecionados"),t.qZA(),t.TgZ(5,"form",1,2),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(7,"div",3)(8,"mat-form-field",4)(9,"mat-label"),t._uU(10,"Titulo da aula"),t.qZA(),t.TgZ(11,"input",5),t.NdJ("ngModelChange",function(r){return n.aula.titulo=r}),t.qZA()(),t.TgZ(12,"mat-form-field",4)(13,"mat-label"),t._uU(14,"Descri\xe7\xe3o textual"),t.qZA(),t.TgZ(15,"textarea",6),t.NdJ("ngModelChange",function(r){return n.aula.conteudo=r}),t.qZA()(),t.TgZ(16,"mat-form-field",4)(17,"mat-label"),t._uU(18,"Link do v\xeddeo"),t.qZA(),t.TgZ(19,"input",7),t.NdJ("ngModelChange",function(r){return n.aula.video=r}),t.qZA()()(),t.TgZ(20,"mat-card-actions")(21,"button",8),t._uU(22,"SALVAR"),t.qZA(),t.TgZ(23,"button",9),t.NdJ("click",function(){return n.gotoCurso(n.cursoId)}),t._uU(24,"CANCELAR"),t.qZA()()()(),t.TgZ(25,"div",0)(26,"button",10),t.NdJ("click",function(){return n.novaAula()}),t._uU(27,"Add"),t.qZA()(),t._UZ(28,"br")),2&e){const i=t.MAs(6);t.Q6J("hidden",n.submitted),t.xp6(11),t.Q6J("ngModel",n.aula.titulo),t.xp6(4),t.Q6J("ngModel",n.aula.conteudo),t.xp6(4),t.Q6J("ngModel",n.aula.video),t.xp6(2),t.Q6J("disabled",i.invalid),t.xp6(4),t.Q6J("hidden",!n.submitted)}},dependencies:[u.a8,u.n5,u.$j,u.hq,w.lW,M.KE,M.hX,I.Nt,d._Y,d.Fj,d.JJ,d.JL,d.Q7,d.On,d.F],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}"]}),a})();var Lt=s(202),W=s(8790),Et=s(7569);let kt=(()=>{class a{constructor(e){this.http=e}listarAulas(e){return this.http.get(`${x.N.api_url}/api/v1/aulas/curso/${e}`)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(K.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var tt=s(1481);function Rt(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.atualiza(i.aulaId))}),t._uU(1,"Atualizar"),t.qZA()}}function zt(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.deleta(i.aulaId))}),t._uU(1,"Deletar"),t.qZA()}}function Yt(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",8)(1,"button",7),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.updateSrc(r.video))}),t._uU(2),t.qZA(),t.YNc(3,Rt,2,0,"button",9),t.YNc(4,zt,2,0,"button",9),t.qZA()}if(2&a){const e=o.$implicit,n=t.oxw().ngIf;t.xp6(2),t.hij(" ",e.titulo," "),t.xp6(1),t.Q6J("ngIf",n.roles.includes("INSTRUTOR")),t.xp6(1),t.Q6J("ngIf",n.roles.includes("INSTRUTOR"))}}function Nt(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",1)(1,"section",2)(2,"div",3),t._UZ(3,"youtube-player",4),t.qZA()(),t.TgZ(4,"section",2),t.YNc(5,Yt,5,3,"div",5),t.ALo(6,"async"),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.gotoExercicio(i.cursoId))}),t._uU(9,"Realizar os Exercicios"),t.qZA()()()()}if(2&a){const e=t.oxw();t.xp6(3),t.Q6J("videoId",e.videoId)("height",555)("width",900),t.xp6(2),t.Q6J("ngForOf",t.lcZ(6,4,e.aulas))}}let et=(()=>{class a{constructor(e,n,i,r,l){this.usuarioLogadoService=e,this.aulasService=n,this.activatedRoute=i,this.router=r,this._sanitizer=l,this.videoUrl="",this.arr=[],this.videoId="",this.usuarioLogado$=this.usuarioLogadoService.retornaUsuarioLogado(),this.isLoggedIn=!0}ngOnInit(){this.cursoId=this.activatedRoute.snapshot.params.id,this.reloadData(),this.getUrl()}recebeUsuarioLogado(){this.usuarioLogadoService.retornaUsuarioLogado().subscribe(e=>{console.log(e)},e=>{alert("Credenciais inv\xe1lidas"),console.log(e)})}updateSrc(e){this.videoId=e.replace("https://www.youtube.com/watch?v=","")}getUrl(){this.aulasService.listarAulas(this.cursoId).subscribe(e=>{this.videoUrl=e[0].video,this.videoId=this.videoUrl.replace("https://www.youtube.com/watch?v=",""),console.log(this.videoId)})}transform(e){return this._sanitizer.bypassSecurityTrustResourceUrl(e)}reloadData(){this.aulas=this.aulasService.listarAulas(this.cursoId)}atualiza(e){this.router.navigate(["/aulas/atualizar",e,"cursos",this.cursoId])}deleta(e){this.router.navigate(["/aulas/deletar",e])}gotoExercicio(e){this.router.navigate(["/exercicios/listar",e])}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(Et.I),t.Y36(kt),t.Y36(p.gz),t.Y36(p.F0),t.Y36(tt.H7))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-listar-aulas"]],decls:2,vars:3,consts:[["class","wrapper",4,"ngIf"],[1,"wrapper"],[1,"container"],[1,"card-video"],["suggestedQuality","highres",3,"videoId","height","width"],["class","mat-elevation-z4","style","margin-left: 5px;",4,"ngFor","ngForOf"],[1,"mat-elevation-z4",2,"margin-top","10px","margin-left","5px"],[3,"click"],[1,"mat-elevation-z4",2,"margin-left","5px"],[3,"click",4,"ngIf"]],template:function(e,n){1&e&&(t.YNc(0,Nt,10,6,"div",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,n.usuarioLogado$))},dependencies:[A.sg,A.O5,q,A.Ov],styles:[".example-card[_ngcontent-%COMP%]{max-width:400px;margin-bottom:1em}mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}button.mat-fab[_ngcontent-%COMP%]{background-color:var(--primary-color)}.lista_aulas[_ngcontent-%COMP%]{max-height:50%}.dashboard[_ngcontent-%COMP%]{margin:1em;padding:1em;height:auto;background:rgb(66,16,11);background:linear-gradient(135deg,rgba(66,16,11,1) 51%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 100%)}mat-grid-tile[_ngcontent-%COMP%]{height:70vh;overflow-y:scroll;background-color:transparent}mat-grid-list[_ngcontent-%COMP%]{height:70vh}.container[_ngcontent-%COMP%]{max-height:95%;max-width:95%}app-exibir-aula[_ngcontent-%COMP%]{width:auto;height:auto}app-listar-aulas[_ngcontent-%COMP%]{padding:1em;height:auto;width:auto}.tile_lista[_ngcontent-%COMP%]{background-color:transparent}.tile_aula[_ngcontent-%COMP%]{background-color:#fff}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100%;background:rgb(66,16,11);background:linear-gradient(135deg,rgba(66,16,11,1) 51%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 100%)}.content[_ngcontent-%COMP%]{flex:1 0 auto}.footer[_ngcontent-%COMP%]{flex-shrink:0}"]}),a})();const Jt=[{path:"cadastrar/:id",component:Ut},{path:"exibir/:id",component:(()=>{class a{constructor(e){this._sanitizer=e,this.aula=new b,this.safeURL=this._sanitizer.bypassSecurityTrustResourceUrl(this.aula.video)}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(tt.H7))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-exibir-aula"]],decls:14,vars:1,consts:[[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],[1,"card-video"],["width","90%","height","555","title","YouTube video player","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header"),t._UZ(2,"div",1),t.TgZ(3,"mat-card-title"),t._uU(4,"Aula 01"),t.qZA(),t.TgZ(5,"mat-card-subtitle"),t._uU(6,"Tipos Primitivos em Python"),t.qZA()(),t.TgZ(7,"div",2),t._UZ(8,"iframe",3),t.qZA(),t.TgZ(9,"mat-card-content")(10,"h1"),t._uU(11,"Tipos Primitivos em Python"),t.qZA(),t.TgZ(12,"p"),t._uU(13," Tipos primitivos s\xe3o tipos de dados primitivos(b\xe1sicos), ou seja tipos de dados que podemos manipular dentro de uma variavel, por exemplo: Inteiro - int -> Numeros inteiros( -2,-1,1,2,3,4....) Real, Ponto futuante - float -> Numeros com casas decimais(2.56) Booleano - bool -> verdadeiro ou falso (true, false) complexo - complex -> aindan\xe3o sei tenho de pesquisar mais :c String - str -> textos alfanumericos(\"o rato roeu a roupa do rei\") Para conferir cada tipo podemos usar a fun\xe7\xe3o type. nome = 'Dormin' #string idade = 26 #int altura = 1.75 #float humano = true #bool type(nome) Espero ter ajudado conforme for aprendendo postarei cada vez mais :) "),t.qZA()()()),2&e&&(t.xp6(8),t.Q6J("src",n.safeURL,t.uOi))},dependencies:[u.a8,u.dk,u.dn,u.n5,u.$j,u.kc],styles:[".example-card[_ngcontent-%COMP%]{width:95%;height:100%;box-shadow:none}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}mat-card-content[_ngcontent-%COMP%]{padding-top:2em;width:100%;text-align:justify}.card-video[_ngcontent-%COMP%]{display:flex;justify-content:center}.mat-card-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),a})()},{path:"listar/:id",component:et},{path:"dashboard/:id",component:(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard-aulas"]],decls:5,vars:0,consts:[[1,"wrapper"],[1,"content"],[1,"footer"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-header"),t.TgZ(2,"div",1),t._UZ(3,"app-listar-aulas"),t.qZA(),t._UZ(4,"app-footer",2),t.qZA())},dependencies:[Lt.c,W.G,et],styles:[".dashboard[_ngcontent-%COMP%]{margin:1em;padding:1em;height:auto;background:rgb(66,16,11);background:linear-gradient(135deg,rgba(66,16,11,1) 51%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 100%)}mat-grid-tile[_ngcontent-%COMP%]{height:70vh;overflow-y:scroll;background-color:transparent}mat-grid-list[_ngcontent-%COMP%]{height:70vh}.container[_ngcontent-%COMP%]{max-height:95%;max-width:95%}app-exibir-aula[_ngcontent-%COMP%]{width:auto;height:auto}app-listar-aulas[_ngcontent-%COMP%]{padding:1em;height:auto;width:auto}.tile_lista[_ngcontent-%COMP%]{background-color:transparent}.tile_aula[_ngcontent-%COMP%]{background-color:#fff}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background:rgb(66,16,11);background:linear-gradient(135deg,rgba(66,16,11,1) 51%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 100%)}.content[_ngcontent-%COMP%]{flex:1 0 auto}.footer[_ngcontent-%COMP%]{flex-shrink:0}"]}),a})()},{path:"atualizar/:id/cursos/:cursoId",component:Ot},{path:"deletar/:id",component:(()=>{class a{constructor(e,n,i){this.router=e,this.route=n,this.deletaAulaService=i}ngOnInit(){this.aula=new b,this.id=this.route.snapshot.params.id,this.deletaAulaService.getAulaById(this.id).subscribe(e=>{console.log(e),this.aula=e},e=>console.log(e))}deleteAula(){this.deletaAulaService.deletaAula(this.id).subscribe(()=>{this.router.navigate(["/usuario/sucesso"])})}cancel(){this.router.navigate(["/cursos/listar"])}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(z))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-deletar-aulas"]],decls:21,vars:2,consts:[[1,"card__container"],[1,"card__1"],[1,"card__2"],["appearance","outline",1,"input"],["matInput","","placeholder","Titulo da Aula","name","titulo","disabled","",3,"value"],["matInput","","placeholder","Descri\xe7\xe3o","name","descricao","disabled","",3,"value"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"body"),t._UZ(1,"app-header"),t.TgZ(2,"mat-card",0)(3,"mat-card",1)(4,"mat-card-header")(5,"mat-card-title"),t._uU(6,"Fatecflix"),t.qZA()(),t.TgZ(7,"mat-card-content")(8,"h2"),t._uU(9,"Excluir Aula"),t.qZA()(),t._UZ(10,"mat-card-footer"),t.qZA(),t.TgZ(11,"mat-card",2)(12,"form")(13,"mat-form-field",3),t._UZ(14,"input",4),t.qZA(),t.TgZ(15,"mat-form-field",3),t._UZ(16,"input",5),t.qZA()(),t.TgZ(17,"button",6),t.NdJ("click",function(){return n.deleteAula()}),t._uU(18," Excluir "),t.qZA(),t.TgZ(19,"button",7),t.NdJ("click",function(){return n.cancel()}),t._uU(20," Cancelar "),t.qZA()()()()),2&e&&(t.xp6(14),t.Q6J("value",n.aula.titulo),t.xp6(2),t.Q6J("value",n.aula.conteudo))},dependencies:[u.a8,u.dk,u.dn,u.n5,u.rt,w.lW,M.KE,I.Nt,d._Y,d.JL,d.F,W.G],styles:["body[_ngcontent-%COMP%]{background-color:#d8dee7}.card__container[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;width:70%;margin:2em 2em 2em 240px}.card__1[_ngcontent-%COMP%]{background-color:var(--primary-color);width:30%;max-width:350px;color:#fff;display:flex;flex-direction:column;justify-content:space-between;border-radius:6px}.card__1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:jus;font-size:2.5em}.card__1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify;font-size:1.5em}.card__2[_ngcontent-%COMP%]{box-shadow:none;width:70%}.descricaoInput[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{width:100%}button[_ngcontent-%COMP%]{color:var(--primary-color);margin:auto;width:100%;height:50px;border-radius:12px}mat-form-field[_ngcontent-%COMP%]{margin-top:1em}html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%}body[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:rgb(66,16,11);background:linear-gradient(135deg,rgba(66,16,11,1) 51%,rgba(0,0,0,1) 91%,rgba(0,0,0,1) 100%)}.content[_ngcontent-%COMP%]{flex:1 0 auto;display:flex;justify-content:center}.footer[_ngcontent-%COMP%]{flex-shrink:0}@media (max-width: 850px){.card__container[_ngcontent-%COMP%]{flex-direction:column;width:90%;height:auto;padding:1em;margin:0}.card__1[_ngcontent-%COMP%]{width:90%;max-width:unset}.card__2[_ngcontent-%COMP%]{width:90%}.content[_ngcontent-%COMP%]{padding:1em}mat-card-header[_ngcontent-%COMP%]{align-self:center}button[_ngcontent-%COMP%]{width:100%;height:50px;border-radius:12px;background-color:var(--primary-color);color:#fefefe}.content[_ngcontent-%COMP%]{height:auto}.footer[_ngcontent-%COMP%]{display:none}}"]}),a})()}];let Dt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.Bz.forChild(Jt),p.Bz]}),a})();var Ft=s(9892),Qt=s(5035);let Vt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[A.ez,u.QW,Dt,w.ot,I.c,d.u5,wt.Ps,It.N6,Qt._,Ft.O,Zt]}),a})()}}]);