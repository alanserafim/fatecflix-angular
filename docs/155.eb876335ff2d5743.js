"use strict";(self.webpackChunkfatecflix_angular=self.webpackChunkfatecflix_angular||[]).push([[155],{5017:(Fe,X,h)=>{h.d(X,{Ov:()=>ee,Z9:()=>Q,eX:()=>A,k:()=>L,o2:()=>w,yy:()=>J});var o=h(4033),$=h(7579),F=h(4650);class w{}function Q(M){return M&&"function"==typeof M.connect&&!(M instanceof o.c)}class J{applyChanges(l,c,u,D,m){l.forEachOperation((C,x,k)=>{let g,b;if(null==C.previousIndex){const S=u(C,x,k);g=c.createEmbeddedView(S.templateRef,S.context,S.index),b=1}else null==k?(c.remove(x),b=3):(g=c.get(x),c.move(g,k),b=2);m&&m({context:g?.context,operation:b,record:C})})}detach(){}}class A{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(l,c,u,D,m){l.forEachOperation((C,x,k)=>{let g,b;null==C.previousIndex?(g=this._insertView(()=>u(C,x,k),k,c,D(C)),b=g?1:0):null==k?(this._detachAndCacheView(x,c),b=3):(g=this._moveView(x,k,c,D(C)),b=2),m&&m({context:g?.context,operation:b,record:C})})}detach(){for(const l of this._viewCache)l.destroy();this._viewCache=[]}_insertView(l,c,u,D){const m=this._insertViewFromCache(c,u);if(m)return void(m.context.$implicit=D);const C=l();return u.createEmbeddedView(C.templateRef,C.context,C.index)}_detachAndCacheView(l,c){const u=c.detach(l);this._maybeCacheView(u,c)}_moveView(l,c,u,D){const m=u.get(l);return u.move(m,c),m.context.$implicit=D,m}_maybeCacheView(l,c){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(l);else{const u=c.indexOf(l);-1===u?l.destroy():c.remove(u)}}_insertViewFromCache(l,c){const u=this._viewCache.pop();return u&&c.insert(u,l),u||null}}class ee{constructor(l=!1,c,u=!0,D){this._multiple=l,this._emitChanges=u,this.compareWith=D,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new $.x,c&&c.length&&(l?c.forEach(m=>this._markSelected(m)):this._markSelected(c[0]),this._selectedToEmit.length=0)}get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}select(...l){this._verifyValueAssignment(l),l.forEach(u=>this._markSelected(u));const c=this._hasQueuedChanges();return this._emitChangeEvent(),c}deselect(...l){this._verifyValueAssignment(l),l.forEach(u=>this._unmarkSelected(u));const c=this._hasQueuedChanges();return this._emitChangeEvent(),c}setSelection(...l){this._verifyValueAssignment(l);const c=this.selected,u=new Set(l);l.forEach(m=>this._markSelected(m)),c.filter(m=>!u.has(m)).forEach(m=>this._unmarkSelected(m));const D=this._hasQueuedChanges();return this._emitChangeEvent(),D}toggle(l){return this.isSelected(l)?this.deselect(l):this.select(l)}clear(l=!0){this._unmarkAll();const c=this._hasQueuedChanges();return l&&this._emitChangeEvent(),c}isSelected(l){if(this.compareWith){for(const c of this._selection)if(this.compareWith(c,l))return!0;return!1}return this._selection.has(l)}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(l){this._multiple&&this.selected&&this._selected.sort(l)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(l){this.isSelected(l)||(this._multiple||this._unmarkAll(),this.isSelected(l)||this._selection.add(l),this._emitChanges&&this._selectedToEmit.push(l))}_unmarkSelected(l){this.isSelected(l)&&(this._selection.delete(l),this._emitChanges&&this._deselectedToEmit.push(l))}_unmarkAll(){this.isEmpty()||this._selection.forEach(l=>this._unmarkSelected(l))}_verifyValueAssignment(l){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}}const L=new F.OlP("_ViewRepeater")},7155:(Fe,X,h)=>{h.d(X,{ev:()=>pe,Dz:()=>fe,w1:()=>_e,ge:()=>me,fO:()=>he,XQ:()=>xe,as:()=>Me,Ee:()=>Te,Gk:()=>Ee,nj:()=>be,BZ:()=>Se,by:()=>tt,p0:()=>Ke});var o=h(4650),$=h(445),F=h(1281),w=h(5017),Q=h(3353),K=h(5589),J=h(6895),A=h(7579),ee=h(2076),H=h(1135),ge=h(9751),L=h(576),l=h(9646),c=h(2722),u=h(5698);const D=[[["caption"]],[["colgroup"],["col"]]],m=["caption","colgroup, col"];function k(t){return class extends t{constructor(...n){super(...n),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(n){const e=this._sticky;this._sticky=(0,F.Ig)(n),this._hasStickyChanged=e!==this._sticky}hasStickyChanged(){const n=this._hasStickyChanged;return this._hasStickyChanged=!1,n}resetStickyChanged(){this._hasStickyChanged=!1}}}const g=new o.OlP("CDK_TABLE");let S=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkCellDef",""]]}),t})(),N=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkHeaderCellDef",""]]}),t})(),Y=(()=>{class t{constructor(e){this.template=e}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkFooterCellDef",""]]}),t})();class Ne{}const Ae=k(Ne);let E=(()=>{class t extends Ae{constructor(e){super(),this._table=e,this._stickyEnd=!1}get name(){return this._name}set name(e){this._setNameInput(e)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){const s=this._stickyEnd;this._stickyEnd=(0,F.Ig)(e),this._hasStickyChanged=s!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=[`cdk-column-${this.cssClassFriendlyName}`]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(g,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkColumnDef",""]],contentQueries:function(e,s,i){if(1&e&&(o.Suo(i,S,5),o.Suo(i,N,5),o.Suo(i,Y,5)),2&e){let r;o.iGM(r=o.CRH())&&(s.cell=r.first),o.iGM(r=o.CRH())&&(s.headerCell=r.first),o.iGM(r=o.CRH())&&(s.footerCell=r.first)}},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[o._Bn([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),o.qOj]}),t})();class te{constructor(n,e){e.nativeElement.classList.add(...n._columnCssClassName)}}let oe=(()=>{class t extends te{constructor(e,s){super(e,s)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(E),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[o.qOj]}),t})(),se=(()=>{class t extends te{constructor(e,s){if(super(e,s),1===e._table?._elementRef.nativeElement.nodeType){const i=e._table._elementRef.nativeElement.getAttribute("role");s.nativeElement.setAttribute("role","grid"===i||"treegrid"===i?"gridcell":"cell")}}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(E),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:[1,"cdk-cell"],features:[o.qOj]}),t})();class we{constructor(){this.tasks=[],this.endTasks=[]}}const ne=new o.OlP("_COALESCED_STYLE_SCHEDULER");let Ce=(()=>{class t{constructor(e){this._ngZone=e,this._currentSchedule=null,this._destroyed=new A.x}schedule(e){this._createScheduleIfNeeded(),this._currentSchedule.tasks.push(e)}scheduleEnd(e){this._createScheduleIfNeeded(),this._currentSchedule.endTasks.push(e)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createScheduleIfNeeded(){this._currentSchedule||(this._currentSchedule=new we,this._getScheduleObservable().pipe((0,c.R)(this._destroyed)).subscribe(()=>{for(;this._currentSchedule.tasks.length||this._currentSchedule.endTasks.length;){const e=this._currentSchedule;this._currentSchedule=new we;for(const s of e.tasks)s();for(const s of e.endTasks)s()}this._currentSchedule=null}))}_getScheduleObservable(){return this._ngZone.isStable?(0,ee.D)(Promise.resolve(void 0)):this._ngZone.onStable.pipe((0,u.q)(1))}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(o.R0b))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac}),t})(),ie=(()=>{class t{constructor(e,s){this.template=e,this._differs=s}ngOnChanges(e){if(!this._columnsDiffer){const s=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(s).create(),this._columnsDiffer.diff(s)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof B?e.headerCell.template:this instanceof G?e.footerCell.template:e.cell.template}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4))},t.\u0275dir=o.lG2({type:t,features:[o.TTD]}),t})();class He extends ie{}const Be=k(He);let B=(()=>{class t extends Be{constructor(e,s,i){super(e,s),this._table=i}ngOnChanges(e){super.ngOnChanges(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(g,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[o.qOj,o.TTD]}),t})();class Ge extends ie{}const Ie=k(Ge);let G=(()=>{class t extends Ie{constructor(e,s,i){super(e,s),this._table=i}ngOnChanges(e){super.ngOnChanges(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(g,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[o.qOj,o.TTD]}),t})(),P=(()=>{class t extends ie{constructor(e,s,i){super(e,s),this._table=i}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc),o.Y36(o.ZZ4),o.Y36(g,8))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[o.qOj]}),t})(),T=(()=>{class t{constructor(e){this._viewContainer=e,t.mostRecentCellOutlet=this}ngOnDestroy(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}return t.mostRecentCellOutlet=null,t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b))},t.\u0275dir=o.lG2({type:t,selectors:[["","cdkCellOutlet",""]]}),t})(),re=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&o.GkF(0,0)},dependencies:[T],encapsulation:2}),t})(),le=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&o.GkF(0,0)},dependencies:[T],encapsulation:2}),t})(),U=(()=>{class t{constructor(e){this.templateRef=e,this._contentClassName="cdk-no-data-row"}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.Rgc))},t.\u0275dir=o.lG2({type:t,selectors:[["ng-template","cdkNoDataRow",""]]}),t})();const De=["top","bottom","left","right"];class Le{constructor(n,e,s,i,r=!0,a=!0,d){this._isNativeHtmlTable=n,this._stickCellCss=e,this.direction=s,this._coalescedStyleScheduler=i,this._isBrowser=r,this._needsPositionStickyOnElement=a,this._positionListener=d,this._cachedCellWidths=[],this._borderCellCss={top:`${e}-border-elem-top`,bottom:`${e}-border-elem-bottom`,left:`${e}-border-elem-left`,right:`${e}-border-elem-right`}}clearStickyPositioning(n,e){const s=[];for(const i of n)if(i.nodeType===i.ELEMENT_NODE){s.push(i);for(let r=0;r<i.children.length;r++)s.push(i.children[r])}this._coalescedStyleScheduler.schedule(()=>{for(const i of s)this._removeStickyStyle(i,e)})}updateStickyColumns(n,e,s,i=!0){if(!n.length||!this._isBrowser||!e.some(p=>p)&&!s.some(p=>p))return void(this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:[]}),this._positionListener.stickyEndColumnsUpdated({sizes:[]})));const r=n[0],a=r.children.length,d=this._getCellWidths(r,i),f=this._getStickyStartColumnPositions(d,e),y=this._getStickyEndColumnPositions(d,s),_=e.lastIndexOf(!0),R=s.indexOf(!0);this._coalescedStyleScheduler.schedule(()=>{const p="rtl"===this.direction,O=p?"right":"left",ot=p?"left":"right";for(const I of n)for(let v=0;v<a;v++){const Oe=I.children[v];e[v]&&this._addStickyStyle(Oe,O,f[v],v===_),s[v]&&this._addStickyStyle(Oe,ot,y[v],v===R)}this._positionListener&&(this._positionListener.stickyColumnsUpdated({sizes:-1===_?[]:d.slice(0,_+1).map((I,v)=>e[v]?I:null)}),this._positionListener.stickyEndColumnsUpdated({sizes:-1===R?[]:d.slice(R).map((I,v)=>s[v+R]?I:null).reverse()}))})}stickRows(n,e,s){if(!this._isBrowser)return;const i="bottom"===s?n.slice().reverse():n,r="bottom"===s?e.slice().reverse():e,a=[],d=[],f=[];for(let _=0,R=0;_<i.length;_++){if(!r[_])continue;a[_]=R;const p=i[_];f[_]=this._isNativeHtmlTable?Array.from(p.children):[p];const O=p.getBoundingClientRect().height;R+=O,d[_]=O}const y=r.lastIndexOf(!0);this._coalescedStyleScheduler.schedule(()=>{for(let _=0;_<i.length;_++){if(!r[_])continue;const R=a[_],p=_===y;for(const O of f[_])this._addStickyStyle(O,s,R,p)}"top"===s?this._positionListener?.stickyHeaderRowsUpdated({sizes:d,offsets:a,elements:f}):this._positionListener?.stickyFooterRowsUpdated({sizes:d,offsets:a,elements:f})})}updateStickyFooterContainer(n,e){if(!this._isNativeHtmlTable)return;const s=n.querySelector("tfoot");this._coalescedStyleScheduler.schedule(()=>{e.some(i=>!i)?this._removeStickyStyle(s,["bottom"]):this._addStickyStyle(s,"bottom",0,!1)})}_removeStickyStyle(n,e){for(const i of e)n.style[i]="",n.classList.remove(this._borderCellCss[i]);De.some(i=>-1===e.indexOf(i)&&n.style[i])?n.style.zIndex=this._getCalculatedZIndex(n):(n.style.zIndex="",this._needsPositionStickyOnElement&&(n.style.position=""),n.classList.remove(this._stickCellCss))}_addStickyStyle(n,e,s,i){n.classList.add(this._stickCellCss),i&&n.classList.add(this._borderCellCss[e]),n.style[e]=`${s}px`,n.style.zIndex=this._getCalculatedZIndex(n),this._needsPositionStickyOnElement&&(n.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(n){const e={top:100,bottom:10,left:1,right:1};let s=0;for(const i of De)n.style[i]&&(s+=e[i]);return s?`${s}`:""}_getCellWidths(n,e=!0){if(!e&&this._cachedCellWidths.length)return this._cachedCellWidths;const s=[],i=n.children;for(let r=0;r<i.length;r++)s.push(i[r].getBoundingClientRect().width);return this._cachedCellWidths=s,s}_getStickyStartColumnPositions(n,e){const s=[];let i=0;for(let r=0;r<n.length;r++)e[r]&&(s[r]=i,i+=n[r]);return s}_getStickyEndColumnPositions(n,e){const s=[];let i=0;for(let r=n.length;r>0;r--)e[r]&&(s[r]=i,i+=n[r]);return s}}const ce=new o.OlP("CDK_SPL");let j=(()=>{class t{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","rowOutlet",""]]}),t})(),V=(()=>{class t{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","headerRowOutlet",""]]}),t})(),z=(()=>{class t{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","footerRowOutlet",""]]}),t})(),Z=(()=>{class t{constructor(e,s){this.viewContainer=e,this.elementRef=s}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.s_b),o.Y36(o.SBq))},t.\u0275dir=o.lG2({type:t,selectors:[["","noDataRowOutlet",""]]}),t})(),q=(()=>{class t{constructor(e,s,i,r,a,d,f,y,_,R,p,O){this._differs=e,this._changeDetectorRef=s,this._elementRef=i,this._dir=a,this._platform=f,this._viewRepeater=y,this._coalescedStyleScheduler=_,this._viewportRuler=R,this._stickyPositioningListener=p,this._ngZone=O,this._onDestroy=new A.x,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._stickyColumnStylesNeedReset=!0,this._forceRecalculateCellWidths=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this._fixedLayout=!1,this.contentChanged=new o.vpe,this.viewChange=new H.X({start:0,end:Number.MAX_VALUE}),r||this._elementRef.nativeElement.setAttribute("role","table"),this._document=d,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=(0,F.Ig)(e),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}get fixedLayout(){return this._fixedLayout}set fixedLayout(e){this._fixedLayout=(0,F.Ig)(e),this._forceRecalculateCellWidths=!0,this._stickyColumnStylesNeedReset=!0}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((e,s)=>this.trackBy?this.trackBy(s.dataIndex,s.data):s),this._viewportRuler.change().pipe((0,c.R)(this._onDestroy)).subscribe(()=>{this._forceRecalculateCellWidths=!0})}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const s=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._stickyColumnStylesNeedReset=this._stickyColumnStylesNeedReset||s,this._forceRecalculateCellWidths=s,this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():this._stickyColumnStylesNeedReset&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){[this._rowOutlet.viewContainer,this._headerRowOutlet.viewContainer,this._footerRowOutlet.viewContainer,this._cachedRenderRowsMap,this._customColumnDefs,this._customRowDefs,this._customHeaderRowDefs,this._customFooterRowDefs,this._columnDefsByName].forEach(e=>{e.clear()}),this._headerRowDefs=[],this._footerRowDefs=[],this._defaultRowDef=null,this._onDestroy.next(),this._onDestroy.complete(),(0,w.Z9)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){this._renderRows=this._getAllRenderRows();const e=this._dataDiffer.diff(this._renderRows);if(!e)return this._updateNoDataRow(),void this.contentChanged.next();const s=this._rowOutlet.viewContainer;this._viewRepeater.applyChanges(e,s,(i,r,a)=>this._getEmbeddedViewArgs(i.item,a),i=>i.item.data,i=>{1===i.operation&&i.context&&this._renderCellTemplateForItem(i.record.item.rowDef,i.context)}),this._updateRowIndexContext(),e.forEachIdentityChange(i=>{s.get(i.currentIndex).context.$implicit=i.item.data}),this._updateNoDataRow(),this._ngZone&&o.R0b.isInAngularZone()?this._ngZone.onStable.pipe((0,u.q)(1),(0,c.R)(this._onDestroy)).subscribe(()=>{this.updateStickyColumnStyles()}):this.updateStickyColumnStyles(),this.contentChanged.next()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}setNoDataRow(e){this._customNoDataRow=e}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet),i=this._elementRef.nativeElement.querySelector("thead");i&&(i.style.display=e.length?"":"none");const r=this._headerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,r,"top"),this._headerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet),i=this._elementRef.nativeElement.querySelector("tfoot");i&&(i.style.display=e.length?"":"none");const r=this._footerRowDefs.map(a=>a.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,r,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,r),this._footerRowDefs.forEach(a=>a.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),s=this._getRenderedRows(this._rowOutlet),i=this._getRenderedRows(this._footerRowOutlet);(this._isNativeHtmlTable&&!this._fixedLayout||this._stickyColumnStylesNeedReset)&&(this._stickyStyler.clearStickyPositioning([...e,...s,...i],["left","right"]),this._stickyColumnStylesNeedReset=!1),e.forEach((r,a)=>{this._addStickyColumnStyles([r],this._headerRowDefs[a])}),this._rowDefs.forEach(r=>{const a=[];for(let d=0;d<s.length;d++)this._renderRows[d].rowDef===r&&a.push(s[d]);this._addStickyColumnStyles(a,r)}),i.forEach((r,a)=>{this._addStickyColumnStyles([r],this._footerRowDefs[a])}),Array.from(this._columnDefsByName.values()).forEach(r=>r.resetStickyChanged())}_getAllRenderRows(){const e=[],s=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let i=0;i<this._data.length;i++){let r=this._data[i];const a=this._getRenderRowsForData(r,i,s.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(let d=0;d<a.length;d++){let f=a[d];const y=this._cachedRenderRowsMap.get(f.data);y.has(f.rowDef)?y.get(f.rowDef).push(f):y.set(f.rowDef,[f]),e.push(f)}}return e}_getRenderRowsForData(e,s,i){return this._getRowDefs(e,s).map(a=>{const d=i&&i.has(a)?i.get(a):[];if(d.length){const f=d.shift();return f.dataIndex=s,f}return{data:e,rowDef:a,dataIndex:s}})}_cacheColumnDefs(){this._columnDefsByName.clear(),W(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(s=>{this._columnDefsByName.has(s.name),this._columnDefsByName.set(s.name,s)})}_cacheRowDefs(){this._headerRowDefs=W(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=W(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=W(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(s=>!s.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(a,d)=>a||!!d.getColumnsDiff(),s=this._rowDefs.reduce(e,!1);s&&this._forceRenderDataRows();const i=this._headerRowDefs.reduce(e,!1);i&&this._forceRenderHeaderRows();const r=this._footerRowDefs.reduce(e,!1);return r&&this._forceRenderFooterRows(),s||i||r}_switchDataSource(e){this._data=[],(0,w.Z9)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;(0,w.Z9)(this.dataSource)?e=this.dataSource.connect(this):function M(t){return!!t&&(t instanceof ge.y||(0,L.m)(t.lift)&&(0,L.m)(t.subscribe))}(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=(0,l.of)(this.dataSource)),this._renderChangeSubscription=e.pipe((0,c.R)(this._onDestroy)).subscribe(s=>{this._data=s||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,s)=>this._renderRow(this._headerRowOutlet,e,s)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,s)=>this._renderRow(this._footerRowOutlet,e,s)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,s){const i=Array.from(s.columns||[]).map(d=>this._columnDefsByName.get(d)),r=i.map(d=>d.sticky),a=i.map(d=>d.stickyEnd);this._stickyStyler.updateStickyColumns(e,r,a,!this._fixedLayout||this._forceRecalculateCellWidths)}_getRenderedRows(e){const s=[];for(let i=0;i<e.viewContainer.length;i++){const r=e.viewContainer.get(i);s.push(r.rootNodes[0])}return s}_getRowDefs(e,s){if(1==this._rowDefs.length)return[this._rowDefs[0]];let i=[];if(this.multiTemplateDataRows)i=this._rowDefs.filter(r=>!r.when||r.when(s,e));else{let r=this._rowDefs.find(a=>a.when&&a.when(s,e))||this._defaultRowDef;r&&i.push(r)}return i}_getEmbeddedViewArgs(e,s){return{templateRef:e.rowDef.template,context:{$implicit:e.data},index:s}}_renderRow(e,s,i,r={}){const a=e.viewContainer.createEmbeddedView(s.template,r,i);return this._renderCellTemplateForItem(s,r),a}_renderCellTemplateForItem(e,s){for(let i of this._getCellTemplates(e))T.mostRecentCellOutlet&&T.mostRecentCellOutlet._viewContainer.createEmbeddedView(i,s);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let s=0,i=e.length;s<i;s++){const a=e.get(s).context;a.count=i,a.first=0===s,a.last=s===i-1,a.even=s%2==0,a.odd=!a.even,this.multiTemplateDataRows?(a.dataIndex=this._renderRows[s].dataIndex,a.renderIndex=s):a.index=this._renderRows[s].dataIndex}}_getCellTemplates(e){return e&&e.columns?Array.from(e.columns,s=>{const i=this._columnDefsByName.get(s);return e.extractCellTemplate(i)}):[]}_applyNativeTableSections(){const e=this._document.createDocumentFragment(),s=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const i of s){const r=this._document.createElement(i.tag);r.setAttribute("role","rowgroup");for(const a of i.outlets)r.appendChild(a.elementRef.nativeElement);e.appendChild(r)}this._elementRef.nativeElement.appendChild(e)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(s,i)=>s||i.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&(this._stickyColumnStylesNeedReset=!0,this.updateStickyColumnStyles())}_setupStickyStyler(){this._stickyStyler=new Le(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement,this._stickyPositioningListener),(this._dir?this._dir.change:(0,l.of)()).pipe((0,c.R)(this._onDestroy)).subscribe(s=>{this._stickyStyler.direction=s,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(s=>!s._table||s._table===this)}_updateNoDataRow(){const e=this._customNoDataRow||this._noDataRow;if(!e)return;const s=0===this._rowOutlet.viewContainer.length;if(s===this._isShowingNoDataRow)return;const i=this._noDataRowOutlet.viewContainer;if(s){const r=i.createEmbeddedView(e.templateRef),a=r.rootNodes[0];1===r.rootNodes.length&&a?.nodeType===this._document.ELEMENT_NODE&&(a.setAttribute("role","row"),a.classList.add(e._contentClassName))}else i.clear();this._isShowingNoDataRow=s}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(o.ZZ4),o.Y36(o.sBO),o.Y36(o.SBq),o.$8M("role"),o.Y36($.Is,8),o.Y36(J.K0),o.Y36(Q.t4),o.Y36(w.k),o.Y36(ne),o.Y36(K.rL),o.Y36(ce,12),o.Y36(o.R0b,8))},t.\u0275cmp=o.Xpm({type:t,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(e,s,i){if(1&e&&(o.Suo(i,U,5),o.Suo(i,E,5),o.Suo(i,P,5),o.Suo(i,B,5),o.Suo(i,G,5)),2&e){let r;o.iGM(r=o.CRH())&&(s._noDataRow=r.first),o.iGM(r=o.CRH())&&(s._contentColumnDefs=r),o.iGM(r=o.CRH())&&(s._contentRowDefs=r),o.iGM(r=o.CRH())&&(s._contentHeaderRowDefs=r),o.iGM(r=o.CRH())&&(s._contentFooterRowDefs=r)}},viewQuery:function(e,s){if(1&e&&(o.Gf(j,7),o.Gf(V,7),o.Gf(z,7),o.Gf(Z,7)),2&e){let i;o.iGM(i=o.CRH())&&(s._rowOutlet=i.first),o.iGM(i=o.CRH())&&(s._headerRowOutlet=i.first),o.iGM(i=o.CRH())&&(s._footerRowOutlet=i.first),o.iGM(i=o.CRH())&&(s._noDataRowOutlet=i.first)}},hostAttrs:[1,"cdk-table"],hostVars:2,hostBindings:function(e,s){2&e&&o.ekj("cdk-table-fixed-layout",s.fixedLayout)},inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows",fixedLayout:"fixedLayout"},outputs:{contentChanged:"contentChanged"},exportAs:["cdkTable"],features:[o._Bn([{provide:g,useExisting:t},{provide:w.k,useClass:w.yy},{provide:ne,useClass:Ce},{provide:ce,useValue:null}])],ngContentSelectors:m,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,s){1&e&&(o.F$t(D),o.Hsn(0),o.Hsn(1,1),o.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[j,V,z,Z],styles:[".cdk-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),t})();function W(t,n){return t.concat(Array.from(n))}let Pe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[K.Cl]}),t})();var ve=h(3238),ke=h(6451),de=h(9841),ue=h(4004);const Ue=[[["caption"]],[["colgroup"],["col"]]],je=["caption","colgroup, col"];let Se=(()=>{class t extends q{constructor(){super(...arguments),this.stickyCssClass="mat-table-sticky",this.needsPositionStickyOnElement=!1}}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],hostVars:2,hostBindings:function(e,s){2&e&&o.ekj("mat-table-fixed-layout",s.fixedLayout)},exportAs:["matTable"],features:[o._Bn([{provide:w.k,useClass:w.yy},{provide:q,useExisting:t},{provide:g,useExisting:t},{provide:ne,useClass:Ce},{provide:ce,useValue:null}]),o.qOj],ngContentSelectors:je,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(e,s){1&e&&(o.F$t(Ue),o.Hsn(0),o.Hsn(1,1),o.GkF(2,0)(3,1)(4,2)(5,3))},dependencies:[j,V,z,Z],styles:["mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:first-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-cell:last-of-type:not(:only-of-type),[dir=rtl] td.mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}.mat-table-sticky{position:sticky !important}.mat-table-fixed-layout{table-layout:fixed}"],encapsulation:2}),t})(),fe=(()=>{class t extends S{}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matCellDef",""]],features:[o._Bn([{provide:S,useExisting:t}]),o.qOj]}),t})(),he=(()=>{class t extends N{}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matHeaderCellDef",""]],features:[o._Bn([{provide:N,useExisting:t}]),o.qOj]}),t})(),_e=(()=>{class t extends E{get name(){return this._name}set name(e){this._setNameInput(e)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[o._Bn([{provide:E,useExisting:t},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:t}]),o.qOj]}),t})(),me=(()=>{class t extends oe{}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[o.qOj]}),t})(),pe=(()=>{class t extends se{}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[o.qOj]}),t})(),Me=(()=>{class t extends B{}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[o._Bn([{provide:B,useExisting:t}]),o.qOj]}),t})(),be=(()=>{class t extends P{}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[o._Bn([{provide:P,useExisting:t}]),o.qOj]}),t})(),xe=(()=>{class t extends re{}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[o._Bn([{provide:re,useExisting:t}]),o.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&o.GkF(0,0)},dependencies:[T],encapsulation:2}),t})(),Ee=(()=>{class t extends le{}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275cmp=o.Xpm({type:t,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[o._Bn([{provide:le,useExisting:t}]),o.qOj],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(e,s){1&e&&o.GkF(0,0)},dependencies:[T],encapsulation:2}),t})(),Te=(()=>{class t extends U{constructor(){super(...arguments),this._contentClassName="mat-no-data-row"}}return t.\u0275fac=function(){let n;return function(s){return(n||(n=o.n5z(t)))(s||t)}}(),t.\u0275dir=o.lG2({type:t,selectors:[["ng-template","matNoDataRow",""]],features:[o._Bn([{provide:U,useExisting:t}]),o.qOj]}),t})(),Ke=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[Pe,ve.BQ,ve.BQ]}),t})();class et extends w.o2{constructor(n=[]){super(),this._renderData=new H.X([]),this._filter=new H.X(""),this._internalPageChanges=new A.x,this._renderChangesSubscription=null,this.sortingDataAccessor=(e,s)=>{const i=e[s];if((0,F.t6)(i)){const r=Number(i);return r<9007199254740991?r:i}return i},this.sortData=(e,s)=>{const i=s.active,r=s.direction;return i&&""!=r?e.sort((a,d)=>{let f=this.sortingDataAccessor(a,i),y=this.sortingDataAccessor(d,i);const _=typeof f,R=typeof y;_!==R&&("number"===_&&(f+=""),"number"===R&&(y+=""));let p=0;return null!=f&&null!=y?f>y?p=1:f<y&&(p=-1):null!=f?p=1:null!=y&&(p=-1),p*("asc"==r?1:-1)}):e},this.filterPredicate=(e,s)=>{const i=Object.keys(e).reduce((a,d)=>a+e[d]+"\u25ec","").toLowerCase(),r=s.trim().toLowerCase();return-1!=i.indexOf(r)},this._data=new H.X(n),this._updateChangeSubscription()}get data(){return this._data.value}set data(n){n=Array.isArray(n)?n:[],this._data.next(n),this._renderChangesSubscription||this._filterData(n)}get filter(){return this._filter.value}set filter(n){this._filter.next(n),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(n){this._sort=n,this._updateChangeSubscription()}get paginator(){return this._paginator}set paginator(n){this._paginator=n,this._updateChangeSubscription()}_updateChangeSubscription(){const n=this._sort?(0,ke.T)(this._sort.sortChange,this._sort.initialized):(0,l.of)(null),e=this._paginator?(0,ke.T)(this._paginator.page,this._internalPageChanges,this._paginator.initialized):(0,l.of)(null),i=(0,de.a)([this._data,this._filter]).pipe((0,ue.U)(([d])=>this._filterData(d))),r=(0,de.a)([i,n]).pipe((0,ue.U)(([d])=>this._orderData(d))),a=(0,de.a)([r,e]).pipe((0,ue.U)(([d])=>this._pageData(d)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=a.subscribe(d=>this._renderData.next(d))}_filterData(n){return this.filteredData=null==this.filter||""===this.filter?n:n.filter(e=>this.filterPredicate(e,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(n){return this.sort?this.sortData(n.slice(),this.sort):n}_pageData(n){if(!this.paginator)return n;const e=this.paginator.pageIndex*this.paginator.pageSize;return n.slice(e,e+this.paginator.pageSize)}_updatePaginator(n){Promise.resolve().then(()=>{const e=this.paginator;if(e&&(e.length=n,e.pageIndex>0)){const s=Math.ceil(e.length/e.pageSize)-1||0,i=Math.min(e.pageIndex,s);i!==e.pageIndex&&(e.pageIndex=i,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}}class tt extends et{}}}]);