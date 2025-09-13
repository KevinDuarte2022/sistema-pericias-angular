import{d as W,e as it,f as ht}from"./chunk-GCUUMVV4.js";import{$ as A,$b as $,$c as ft,Aa as g,Db as l,Gc as Y,Ic as bt,Ka as d,La as rt,Mb as B,Mc as ut,Na as b,Nc as pt,O as L,Oa as st,Oc as V,P as _,Pa as Z,Q as at,Sc as tt,U as c,Uc as O,Wb as s,Xb as ct,Zb as y,_ as S,_a as u,_c as et,aa as h,bb as T,cb as x,cc as M,cd as vt,db as J,dc as lt,dd as nt,eb as N,fb as j,gb as z,gd as F,ia as R,id as I,jb as Q,ma as r,mb as X,nb as K,oa as ot,pb as E,qb as m,rb as w,rc as dt,sb as C,sc as k,tb as H,ub as D,vb as p,wb as f,wc as q}from"./chunk-HBPRO42Z.js";var gt=`
    .p-tabs {
        display: flex;
        flex-direction: column;
    }

    .p-tablist {
        display: flex;
        position: relative;
        overflow: hidden;
    }

    .p-tablist-viewport {
        overflow-x: auto;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        overscroll-behavior: contain auto;
    }

    .p-tablist-viewport::-webkit-scrollbar {
        display: none;
    }

    .p-tablist-tab-list {
        position: relative;
        display: flex;
        background: dt('tabs.tablist.background');
        border-style: solid;
        border-color: dt('tabs.tablist.border.color');
        border-width: dt('tabs.tablist.border.width');
    }

    .p-tablist-content {
        flex-grow: 1;
    }

    .p-tablist-nav-button {
        all: unset;
        position: absolute !important;
        flex-shrink: 0;
        inset-block-start: 0;
        z-index: 2;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: dt('tabs.nav.button.background');
        color: dt('tabs.nav.button.color');
        width: dt('tabs.nav.button.width');
        transition:
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        box-shadow: dt('tabs.nav.button.shadow');
        outline-color: transparent;
        cursor: pointer;
    }

    .p-tablist-nav-button:focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.nav.button.focus.ring.shadow');
        outline: dt('tabs.nav.button.focus.ring.width') dt('tabs.nav.button.focus.ring.style') dt('tabs.nav.button.focus.ring.color');
        outline-offset: dt('tabs.nav.button.focus.ring.offset');
    }

    .p-tablist-nav-button:hover {
        color: dt('tabs.nav.button.hover.color');
    }

    .p-tablist-prev-button {
        inset-inline-start: 0;
    }

    .p-tablist-next-button {
        inset-inline-end: 0;
    }

    .p-tablist-prev-button:dir(rtl),
    .p-tablist-next-button:dir(rtl) {
        transform: rotate(180deg);
    }

    .p-tab {
        flex-shrink: 0;
        cursor: pointer;
        user-select: none;
        position: relative;
        border-style: solid;
        white-space: nowrap;
        gap: dt('tabs.tab.gap');
        background: dt('tabs.tab.background');
        border-width: dt('tabs.tab.border.width');
        border-color: dt('tabs.tab.border.color');
        color: dt('tabs.tab.color');
        padding: dt('tabs.tab.padding');
        font-weight: dt('tabs.tab.font.weight');
        transition:
            background dt('tabs.transition.duration'),
            border-color dt('tabs.transition.duration'),
            color dt('tabs.transition.duration'),
            outline-color dt('tabs.transition.duration'),
            box-shadow dt('tabs.transition.duration');
        margin: dt('tabs.tab.margin');
        outline-color: transparent;
    }

    .p-tab:not(.p-disabled):focus-visible {
        z-index: 1;
        box-shadow: dt('tabs.tab.focus.ring.shadow');
        outline: dt('tabs.tab.focus.ring.width') dt('tabs.tab.focus.ring.style') dt('tabs.tab.focus.ring.color');
        outline-offset: dt('tabs.tab.focus.ring.offset');
    }

    .p-tab:not(.p-tab-active):not(.p-disabled):hover {
        background: dt('tabs.tab.hover.background');
        border-color: dt('tabs.tab.hover.border.color');
        color: dt('tabs.tab.hover.color');
    }

    .p-tab-active {
        background: dt('tabs.tab.active.background');
        border-color: dt('tabs.tab.active.border.color');
        color: dt('tabs.tab.active.color');
    }

    .p-tabpanels {
        background: dt('tabs.tabpanel.background');
        color: dt('tabs.tabpanel.color');
        padding: dt('tabs.tabpanel.padding');
        outline: 0 none;
    }

    .p-tabpanel:focus-visible {
        box-shadow: dt('tabs.tabpanel.focus.ring.shadow');
        outline: dt('tabs.tabpanel.focus.ring.width') dt('tabs.tabpanel.focus.ring.style') dt('tabs.tabpanel.focus.ring.color');
        outline-offset: dt('tabs.tabpanel.focus.ring.offset');
    }

    .p-tablist-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        inset-block-end: dt('tabs.active.bar.bottom');
        height: dt('tabs.active.bar.height');
        background: dt('tabs.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }
`;var Mt=["data-p-icon","chevron-left"],yt=(()=>{class e extends W{static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275cmp=d({type:e,selectors:[["","data-p-icon","chevron-left"]],features:[b],attrs:Mt,decls:1,vars:0,consts:[["d","M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z","fill","currentColor"]],template:function(i,n){i&1&&(h(),Q(0,"path",0))},encapsulation:2})}return e})();var kt=["data-p-icon","chevron-right"],_t=(()=>{class e extends W{static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275cmp=d({type:e,selectors:[["","data-p-icon","chevron-right"]],features:[b],attrs:kt,decls:1,vars:0,consts:[["d","M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z","fill","currentColor"]],template:function(i,n){i&1&&(h(),Q(0,"path",0))},encapsulation:2})}return e})();var Ft=["previcon"],It=["nexticon"],Lt=["content"],Nt=["prevButton"],Et=["nextButton"],Vt=["inkbar"],Ot=["tabs"],P=["*"];function Pt(e,v){e&1&&X(0)}function St(e,v){if(e&1&&Z(0,Pt,1,0,"ng-container",11),e&2){let t=m(2);J("ngTemplateOutlet",t.prevIconTemplate||t._prevIconTemplate)}}function At(e,v){e&1&&(h(),z(0,"svg",10))}function Rt(e,v){if(e&1){let t=K();N(0,"button",9,3),E("click",function(){S(t);let n=m();return A(n.onPrevButtonClick())}),T(2,St,1,1,"ng-container")(3,At,1,0,":svg:svg",10),j()}if(e&2){let t=m();l(t.cx("prevButton")),u("aria-label",t.prevButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),g(2),x(t.prevIconTemplate||t._prevIconTemplate?2:3)}}function jt(e,v){e&1&&X(0)}function zt(e,v){if(e&1&&Z(0,jt,1,0,"ng-container",11),e&2){let t=m(2);J("ngTemplateOutlet",t.nextIconTemplate||t._nextIconTemplate)}}function Qt(e,v){e&1&&(h(),z(0,"svg",12))}function Kt(e,v){if(e&1){let t=K();N(0,"button",9,4),E("click",function(){S(t);let n=m();return A(n.onNextButtonClick())}),T(2,zt,1,1,"ng-container")(3,Qt,1,0,":svg:svg",12),j()}if(e&2){let t=m();l(t.cx("nextButton")),u("aria-label",t.nextButtonAriaLabel)("tabindex",t.tabindex())("data-pc-group-section","navigator"),g(2),x(t.nextIconTemplate||t._nextIconTemplate?2:3)}}function Ht(e,v){e&1&&C(0)}var $t={root:({instance:e})=>["p-tabs p-component",{"p-tabs-scrollable":e.scrollable()}]},Tt=(()=>{class e extends F{name="tabs";theme=gt;classes=$t;static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var qt={root:"p-tablist",content:"p-tablist-content p-tablist-viewport",tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},xt=(()=>{class e extends F{name="tablist";classes=qt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Bt=(()=>{class e extends I{prevIconTemplate;nextIconTemplate;templates;content;prevButton;nextButton;inkbar;tabs;pcTabs=c(L(()=>G));isPrevButtonEnabled=R(!1);isNextButtonEnabled=R(!1);resizeObserver;showNavigators=s(()=>this.pcTabs.showNavigators());tabindex=s(()=>this.pcTabs.tabindex());scrollable=s(()=>this.pcTabs.scrollable());_componentStyle=c(xt);constructor(){super(),ct(()=>{this.pcTabs.value(),q(this.platformId)&&setTimeout(()=>{this.updateInkBar()})})}get prevButtonAriaLabel(){return this.config.translation.aria.previous}get nextButtonAriaLabel(){return this.config.translation.aria.next}ngAfterViewInit(){super.ngAfterViewInit(),this.showNavigators()&&q(this.platformId)&&(this.updateButtonState(),this.bindResizeObserver())}_prevIconTemplate;_nextIconTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"previcon":this._prevIconTemplate=t.template;break;case"nexticon":this._nextIconTemplate=t.template;break}})}ngOnDestroy(){this.unbindResizeObserver(),super.ngOnDestroy()}onScroll(t){this.showNavigators()&&this.updateButtonState(),t.preventDefault()}onPrevButtonClick(){let t=this.content.nativeElement,i=O(t),n=Math.abs(t.scrollLeft)-i,a=n<=0?0:n;t.scrollLeft=Y(t)?-1*a:a}onNextButtonClick(){let t=this.content.nativeElement,i=O(t)-this.getVisibleButtonWidths(),n=t.scrollLeft+i,a=t.scrollWidth-i,o=n>=a?a:n;t.scrollLeft=Y(t)?-1*o:o}updateButtonState(){let t=this.content?.nativeElement,i=this.el?.nativeElement,{scrollWidth:n,offsetWidth:a}=t,o=Math.abs(t.scrollLeft),U=O(t);this.isPrevButtonEnabled.set(o!==0),this.isNextButtonEnabled.set(i.offsetWidth>=a&&o!==n-U)}updateInkBar(){let t=this.content?.nativeElement,i=this.inkbar?.nativeElement,n=this.tabs?.nativeElement,a=ut(t,'[data-pc-name="tab"][data-p-active="true"]');i&&(i.style.width=bt(a)+"px",i.style.left=tt(a).left-tt(n).left+"px")}getVisibleButtonWidths(){let t=this.prevButton?.nativeElement,i=this.nextButton?.nativeElement;return[t,i].reduce((n,a)=>a?n+O(a):n,0)}bindResizeObserver(){this.resizeObserver=new ResizeObserver(()=>this.updateButtonState()),this.resizeObserver.observe(this.el.nativeElement)}unbindResizeObserver(){this.resizeObserver&&(this.resizeObserver.unobserve(this.el.nativeElement),this.resizeObserver=null)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=d({type:e,selectors:[["p-tablist"]],contentQueries:function(i,n,a){if(i&1&&(H(a,Ft,4),H(a,It,4),H(a,vt,4)),i&2){let o;p(o=f())&&(n.prevIconTemplate=o.first),p(o=f())&&(n.nextIconTemplate=o.first),p(o=f())&&(n.templates=o)}},viewQuery:function(i,n){if(i&1&&(D(Lt,5),D(Nt,5),D(Et,5),D(Vt,5),D(Ot,5)),i&2){let a;p(a=f())&&(n.content=a.first),p(a=f())&&(n.prevButton=a.first),p(a=f())&&(n.nextButton=a.first),p(a=f())&&(n.inkbar=a.first),p(a=f())&&(n.tabs=a.first)}},hostVars:3,hostBindings:function(i,n){i&2&&(u("data-pc-name","tablist"),l(n.cx("root")))},features:[B([xt]),b],ngContentSelectors:P,decls:9,vars:9,consts:[["content",""],["tabs",""],["inkbar",""],["prevButton",""],["nextButton",""],["type","button","pRipple","",3,"class"],[3,"scroll"],["role","tablist"],["role","presentation"],["type","button","pRipple","",3,"click"],["data-p-icon","chevron-left"],[4,"ngTemplateOutlet"],["data-p-icon","chevron-right"]],template:function(i,n){if(i&1){let a=K();w(),T(0,Rt,4,6,"button",5),N(1,"div",6,0),E("scroll",function(U){return S(a),A(n.onScroll(U))}),N(3,"div",7,1),C(5),z(6,"span",8,2),j()(),T(8,Kt,4,6,"button",5)}i&2&&(x(n.showNavigators()&&n.isPrevButtonEnabled()?0:-1),g(),l(n.cx("content")),g(2),l(n.cx("tabList")),g(3),l(n.cx("activeBar")),u("data-pc-section","inkbar"),g(2),x(n.showNavigators()&&n.isNextButtonEnabled()?8:-1))},dependencies:[k,dt,yt,_t,ht,it,nt],encapsulation:2,changeDetection:0})}return e})(),Wt={root:({instance:e})=>["p-tab",{"p-tab-active":e.active(),"p-disabled":e.disabled()}]},wt=(()=>{class e extends F{name="tab";classes=Wt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Gt=(()=>{class e extends I{value=$();disabled=y(!1,{transform:M});pcTabs=c(L(()=>G));pcTabList=c(L(()=>Bt));el=c(ot);_componentStyle=c(wt);ripple=s(()=>this.config.ripple());id=s(()=>`${this.pcTabs.id()}_tab_${this.value()}`);ariaControls=s(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);active=s(()=>et(this.pcTabs.value(),this.value()));tabindex=s(()=>this.active()?this.pcTabs.tabindex():-1);mutationObserver;onFocus(t){this.pcTabs.selectOnFocus()&&this.changeActiveValue()}onClick(t){this.changeActiveValue()}onKeyDown(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break;default:break}t.stopPropagation()}ngAfterViewInit(){super.ngAfterViewInit(),this.bindMutationObserver()}onArrowRightKey(t){let i=this.findNextTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onHomeKey(t),t.preventDefault()}onArrowLeftKey(t){let i=this.findPrevTab(t.currentTarget);i?this.changeFocusedTab(t,i):this.onEndKey(t),t.preventDefault()}onHomeKey(t){let i=this.findFirstTab();this.changeFocusedTab(t,i),t.preventDefault()}onEndKey(t){let i=this.findLastTab();this.changeFocusedTab(t,i),t.preventDefault()}onPageDownKey(t){this.scrollInView(this.findLastTab()),t.preventDefault()}onPageUpKey(t){this.scrollInView(this.findFirstTab()),t.preventDefault()}onEnterKey(t){this.changeActiveValue(),t.preventDefault()}findNextTab(t,i=!1){let n=i?t:t.nextElementSibling;return n?V(n,"data-p-disabled")||V(n,"data-pc-section")==="inkbar"?this.findNextTab(n):n:null}findPrevTab(t,i=!1){let n=i?t:t.previousElementSibling;return n?V(n,"data-p-disabled")||V(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):n:null}findFirstTab(){return this.findNextTab(this.pcTabList?.tabs?.nativeElement?.firstElementChild,!0)}findLastTab(){return this.findPrevTab(this.pcTabList?.tabs?.nativeElement?.lastElementChild,!0)}changeActiveValue(){this.pcTabs.updateValue(this.value())}changeFocusedTab(t,i){pt(i),this.scrollInView(i)}scrollInView(t){t?.scrollIntoView?.({block:"nearest"})}bindMutationObserver(){q(this.platformId)&&(this.mutationObserver=new MutationObserver(t=>{t.forEach(()=>{this.active()&&this.pcTabList?.updateInkBar()})}),this.mutationObserver.observe(this.el.nativeElement,{childList:!0,characterData:!0,subtree:!0}))}unbindMutationObserver(){this.mutationObserver.disconnect()}ngOnDestroy(){this.mutationObserver&&this.unbindMutationObserver(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275cmp=d({type:e,selectors:[["p-tab"]],hostVars:10,hostBindings:function(i,n){i&1&&E("focus",function(o){return n.onFocus(o)})("click",function(o){return n.onClick(o)})("keydown",function(o){return n.onKeyDown(o)}),i&2&&(u("data-pc-name","tab")("id",n.id())("aria-controls",n.ariaControls())("role","tab")("aria-selected",n.active())("data-p-disabled",n.disabled())("data-p-active",n.active())("tabindex",n.tabindex()),l(n.cx("root")))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[B([wt]),st([it]),b],ngContentSelectors:P,decls:1,vars:0,template:function(i,n){i&1&&(w(),C(0))},dependencies:[k,nt],encapsulation:2,changeDetection:0})}return e})(),Ut={root:({instance:e})=>["p-tabpanel",{"p-tabpanel-active":e.active()}]},Ct=(()=>{class e extends F{name="tabpanel";classes=Ut;static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Zt=(()=>{class e extends I{pcTabs=c(L(()=>G));value=$(void 0);id=s(()=>`${this.pcTabs.id()}_tabpanel_${this.value()}`);ariaLabelledby=s(()=>`${this.pcTabs.id()}_tab_${this.value()}`);active=s(()=>et(this.pcTabs.value(),this.value()));_componentStyle=c(Ct);static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275cmp=d({type:e,selectors:[["p-tabpanel"]],hostVars:7,hostBindings:function(i,n){i&2&&(u("data-pc-name","tabpanel")("id",n.id())("role","tabpanel")("aria-labelledby",n.ariaLabelledby())("data-p-active",n.active()),l(n.cx("root")))},inputs:{value:[1,"value"]},outputs:{value:"valueChange"},features:[B([Ct]),b],ngContentSelectors:P,decls:1,vars:1,template:function(i,n){i&1&&(w(),T(0,Ht,1,0)),i&2&&x(n.active()?0:-1)},dependencies:[k],encapsulation:2,changeDetection:0})}return e})(),Jt={root:"p-tabpanels"},Dt=(()=>{class e extends F{name="tabpanels";classes=Jt;static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275prov=_({token:e,factory:e.\u0275fac})}return e})();var Xt=(()=>{class e extends I{_componentStyle=c(Dt);static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275cmp=d({type:e,selectors:[["p-tabpanels"]],hostVars:4,hostBindings:function(i,n){i&2&&(u("data-pc-name","tabpanels")("role","presentation"),l(n.cx("root")))},features:[B([Dt]),b],ngContentSelectors:P,decls:1,vars:0,template:function(i,n){i&1&&(w(),C(0))},dependencies:[k],encapsulation:2,changeDetection:0})}return e})(),G=(()=>{class e extends I{value=$(void 0);scrollable=y(!1,{transform:M});lazy=y(!1,{transform:M});selectOnFocus=y(!1,{transform:M});showNavigators=y(!0,{transform:M});tabindex=y(0,{transform:lt});id=R(ft("pn_id_"));_componentStyle=c(Tt);updateValue(t){this.value.update(()=>t)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=r(e)))(n||e)}})();static \u0275cmp=d({type:e,selectors:[["p-tabs"]],hostVars:4,hostBindings:function(i,n){i&2&&(u("data-pc-name","tabs")("id",n.id()),l(n.cx("root")))},inputs:{value:[1,"value"],scrollable:[1,"scrollable"],lazy:[1,"lazy"],selectOnFocus:[1,"selectOnFocus"],showNavigators:[1,"showNavigators"],tabindex:[1,"tabindex"]},outputs:{value:"valueChange"},features:[B([Tt]),b],ngContentSelectors:P,decls:1,vars:0,template:function(i,n){i&1&&(w(),C(0))},dependencies:[k],encapsulation:2,changeDetection:0})}return e})(),De=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=rt({type:e});static \u0275inj=at({imports:[G,Xt,Zt,Bt,Gt]})}return e})();export{Bt as a,Gt as b,Zt as c,Xt as d,G as e,De as f};
