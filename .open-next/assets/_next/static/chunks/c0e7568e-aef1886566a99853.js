"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5797],{90535:function(e,t,o){o.d(t,{$j:function(){return tx},Bj:function(){return et},CP:function(){return ow},Ct:function(){return tm},E5:function(){return e1},EK:function(){return tT},Fg:function(){return Z},J2:function(){return oR},Jh:function(){return ts},Kq:function(){return oB},Kx:function(){return oZ},LL:function(){return j},LZ:function(){return w},Lg:function(){return v},Lt:function(){return I},NM:function(){return t3},OK:function(){return rR},Of:function(){return O},Ph:function(){return oO},Q5:function(){return F},R:function(){return ry},RV:function(){return R},Re:function(){return k},Rm:function(){return $},SV:function(){return rp},Tb:function(){return er},Uy:function(){return t4},W2:function(){return tQ},X6:function(){return tH},XZ:function(){return tI},Xp:function(){return of},Y8:function(){return oN},ZE:function(){return e0},ZH:function(){return C},Zb:function(){return tC},__:function(){return e5},bT:function(){return y},bg:function(){return z},d2:function(){return ee},dG:function(){return E},eb:function(){return K},f6:function(){return Y},fe:function(){return S},g9:function(){return U},gF:function(){return tV},gG:function(){return t$},h4:function(){return H},hO:function(){return N},h_:function(){return ou},iX:function(){return t7},kC:function(){return tv},kS:function(){return rk},li:function(){return oe},m4:function(){return b},mh:function(){return oa},oi:function(){return o9},p2:function(){return ta},qE:function(){return tr},qh:function(){return D},rj:function(){return tB},rs:function(){return oG},sJ:function(){return or},sN:function(){return rz},sz:function(){return t6},td:function(){return rE},tx:function(){return G},u:function(){return rs},uE:function(){return rl},v2:function(){return rw},vI:function(){return os},xu:function(){return tf},xv:function(){return th},zx:function(){return tS}});var r=o(20920),n=o(57437),i=o(68426),a=o(2265),d=o(80717),l=o(82558),c=o(71033),s=o(50032),u=o(97859),f=o(17746),p=o(63573),h=o(74048),g=o(54887),m=o(52141);let b=r.m4,v=(0,r.fi)(),w=[],y={},x={card:{initial:{scale:.97,willChange:"transform"},hidden:{opacity:0},visible:{opacity:1,transition:{when:"beforeChildren",duration:.1}},scaleIn:{scale:1},scaleOut:{scale:.97}},children:{hidden:{opacity:0},visible:{opacity:1}},transition:{type:"spring",visualDuration:.2,bounce:.25}};function $(e){return z(e)||S(e)}function k(e){return e instanceof Node&&e.nodeType===Node.ELEMENT_NODE}function z(e){return k(e)&&"A"===e.nodeName}function j(e){return k(e)&&"INPUT"===e.nodeName}function S(e){return k(e)&&"BUTTON"===e.nodeName}function R(e){return k(e)&&"SELECT"===e.nodeName}function C(e){return k(e)&&"TEXTAREA"===e.nodeName}function E(e,t){return e.contains(t)||e===t}function N(e){return 0===e?0:`${e/16}rem`}function I(e,t,o){return(t?.map(o)||[]).map((t,o)=>0===o?t:{[`@media screen and (min-width: ${e[o-1]}px)`]:t})}function _(e,t){return void 0===e?t||w:Array.isArray(e)?e:[e]}function M(e,t,o=w){if(!Array.isArray(o))throw Error("the property must be array of numbers");if(0===o.length)return null;let{media:n,space:i}=(0,r.aQ)(e);return I(n,o,e=>{var o;return o=N(i[e]),t.reduce((e,t)=>(e[t]=o,e),{})})}function L(e,t){let{$size:o,$weight:n}=t,{font:i,media:a}=(0,r.aQ)(t.theme),{family:d,sizes:l,weights:c}=i[e],s=n&&c[n]||c.regular,u=l[2],f={position:"relative",fontFamily:d,fontWeight:`${s}`,padding:"1px 0",margin:0,"&:before":{content:'""',display:"block",height:0},"&:after":{content:'""',display:"block",height:0},"& > code, & > span":{display:"block"},"&:not([hidden])":{display:"block"}};return o?[f,...I(a,o,e=>(function(e){let{ascenderHeight:t,descenderHeight:o,fontSize:r,iconSize:n,letterSpacing:i,lineHeight:a}=e,d=t+o,l=a-d,c=2*Math.floor(1.125*r/2)+1;return{fontSize:N(r),lineHeight:`calc(${a} / ${r})`,letterSpacing:N(i),transform:`translateY(${N(o)})`,"&:before":{marginTop:`calc(${N(0-d)} - 1px)`},"&:after":{marginBottom:"-1px"},"& svg:not([data-sanity-icon])":{fontSize:`calc(${c} / 16 * 1rem)`,margin:N((l-c)/2)},"& [data-sanity-icon]":{fontSize:`calc(${n} / 16 * 1rem)`,margin:N((l-n)/2)}}})(l[e]||u))]:(L.warned||(console.warn("No size specified for responsive font",{fontKey:e,$size:o,props:t,base:f}),L.warned=!0),[f])}function T(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$align,e=>({textAlign:e}))}function F(e,t){let o;let r=(0,i.c)(3);r[0]!==t||r[1]!==e?(o=()=>[_(e,t),JSON.stringify(e??t)],r[0]=t,r[1]=e,r[2]=o):o=r[2];let[n,d]=(0,a.useState)(o),[l,c]=n,s=JSON.stringify(e??t);return s!==c&&d([_(e,t),s]),l}function O(e,t,o){let r,n,d;let l=(0,i.c)(9),c=void 0===t?Q:t;l[0]!==o||l[1]!==c||l[2]!==e?(r=t=>{if(!e)return;let r=t.target;if(!(r instanceof Node))return;let n=o?.();if(!n||n.contains(r)){for(let e of c().flat())if(e&&(r===e||e.contains(r)))return;e(t)}},l[0]=o,l[1]=c,l[2]=e,l[3]=r):r=l[3];let s=(0,m.i)(r),u=!!e;l[4]!==u||l[5]!==s?(n=()=>{if(!u)return;let e=e=>s(e);return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},l[4]=u,l[5]=s,l[6]=n):n=l[6],l[7]!==u?(d=[u],l[7]=u,l[8]=d):d=l[8],(0,a.useEffect)(n,d),(0,a.useDebugValue)(e?"MouseDown On":"MouseDown Off")}function Q(){return w}function A(e,t){let o,r;let n=(0,i.c)(4);n[0]!==t||n[1]!==e?(o=()=>{e.current?.setCustomValidity(t||"")},r=[t,e],n[0]=t,n[1]=e,n[2]=o,n[3]=r):(o=n[2],r=n[3]),(0,a.useEffect)(o,r)}let B="u">typeof document&&"u">typeof window&&window.ResizeObserver?window.ResizeObserver:h.do,P=function(){let e=new WeakMap,t=new WeakMap;return{subscribe(o,r){let n=t.get(o)||[],i=e.get(o);return t.has(o)||(t.set(o,n),i=({subscribe(e,t){let o=new B(([e])=>{t({_contentRect:e.contentRect,border:{width:e.borderBoxSize[0].inlineSize,height:e.borderBoxSize[0].blockSize},content:{width:e.contentRect.width,height:e.contentRect.height}})});return o.observe(e),()=>{o.unobserve(e),o.disconnect()}}}).subscribe(o,e=>{for(let t of n)t(e)})),n.push(r),()=>{let e=n.indexOf(r);e>-1&&n.splice(e,1),0===n.length&&i&&i()}}}}();function H(e){let t,o;let r=(0,i.c)(3),[n,d]=(0,a.useState)(null);return r[0]!==e?(t=()=>{if(e)return P.subscribe(e,d)},o=[e],r[0]=e,r[1]=t,r[2]=o):(t=r[1],o=r[2]),(0,a.useEffect)(t,o),n}function D(e){let t,o,r;let n=(0,i.c)(5);n[0]!==e?(t=t=>e(t),n[0]=e,n[1]=t):t=n[1];let d=(0,m.i)(t);n[2]!==d?(o=()=>{let e=e=>d(e);return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},n[2]=d,n[3]=o):o=n[3],n[4]===Symbol.for("react.memo_cache_sentinel")?(r=[],n[4]=r):r=n[4],(0,a.useEffect)(o,r)}function V(e,t){let o,r;let n=(0,i.c)(4);return(0,a.useDebugValue)(e),n[0]!==e?(o=t=>{let o=window.matchMedia(e);return o.addEventListener("change",t),()=>o.removeEventListener("change",t)},n[0]=e,n[1]=o):o=n[1],n[2]!==e?(r=()=>window.matchMedia(e).matches,n[2]=e,n[3]=r):r=n[3],(0,a.useSyncExternalStore)(o,r,t)}let W=function(){if("u">typeof globalThis)return globalThis;if("u">typeof window)return window;if("u">typeof self)return self;if("u">typeof global)return global;throw Error("@sanity/ui: could not locate global scope")}();function G(e,t){let o=Symbol.for(e);return typeof document>"u"?(0,a.createContext)(t):(W[o]=W[o]||(0,a.createContext)(t),W[o])}let X=G("@sanity/ui/context/theme",null);function Y(e){let t,o,l,c;let s=(0,i.c)(15),u=(0,a.useContext)(X),{children:f}=e,p=e.scheme??(u?.scheme||"light"),h=e.theme??(u?.theme||null),g=e.tone??(u?.tone||"default");e:{let e;if(!h){t=null;break e}s[0]!==h||s[1]!==p||s[2]!==g?(e={version:0,theme:h,scheme:p,tone:g},s[0]=h,s[1]=p,s[2]=g,s[3]=e):e=s[3],t=e}let m=t;t:{let e;if(!h){o=null;break t}s[4]!==h||s[5]!==p||s[6]!==g?(e=(0,r.BA)(h,p,g),s[4]=h,s[5]=p,s[6]=g,s[7]=e):e=s[7],o=e}let b=o;if(!b){let e;return s[8]===Symbol.for("react.memo_cache_sentinel")?(e=(0,n.jsx)("pre",{children:'ThemeProvider: no "theme" property provided'}),s[8]=e):e=s[8],e}return s[9]!==f||s[10]!==b?(l=(0,n.jsx)(d.f6,{theme:b,children:f}),s[9]=f,s[10]=b,s[11]=l):l=s[11],s[12]!==l||s[13]!==m?(c=(0,n.jsx)(X.Provider,{value:m,children:l}),s[12]=l,s[13]=m,s[14]=c):c=s[14],c}function q(){let e=(0,a.useContext)(X);if(!e)throw Error("useRootTheme(): missing context value");return e}function K(e){let t;let o=(0,i.c)(5),{children:r,scheme:a,tone:d}=e,l=q(),c=a||l.scheme;return o[0]!==r||o[1]!==l.theme||o[2]!==c||o[3]!==d?(t=(0,n.jsx)(Y,{scheme:c,theme:l.theme,tone:d,children:r}),o[0]=r,o[1]=l.theme,o[2]=c,o[3]=d,o[4]=t):t=o[4],t}function Z(){return(0,d.Fg)()}function U(){let e;let t=(0,i.c)(2),o=(0,d.Fg)();return t[0]!==o?(e=(0,r.aQ)(o),t[0]=o,t[1]=e):e=t[1],e}function J(){return 0}function ee(){let e;let t=(0,i.c)(2),{media:o}=U();t[0]!==o?(e=function(e){let t;let o=e.length,r=()=>{if(!t){t=[];for(let n=o;n>-1;n-=1){var r;let o=0===(r=n)?`screen and (max-width: ${e[r]-1}px)`:r===e.length?`screen and (min-width: ${e[r-1]}px)`:`screen and (min-width: ${e[r-1]}px) and (max-width: ${e[r]-1}px)`;t.push({index:n,mq:window.matchMedia(o)})}}return t};return{getSnapshot:()=>{for(let{index:e,mq:t}of r())if(t.matches)return e;return 0},subscribe:e=>{let t=[];for(let{mq:o}of r()){let r=()=>{o.matches&&e()};o.addEventListener("change",r),t.push(()=>o.removeEventListener("change",r))}return()=>{for(let e of t)e()}}}}(o),t[0]=o,t[1]=e):e=t[1];let r=e;return(0,a.useSyncExternalStore)(r.subscribe,r.getSnapshot,J)}function et(e){return V("(prefers-color-scheme: dark)",void 0===e?eo:e)}function eo(){return!1}function er(e){return V("(prefers-reduced-motion: reduce)",void 0===e?en:e)}function en(){return!1}function ei(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return I(o,e.$border,e=>e?{"&&":{border:n}}:{"&&":{border:0}})}function ea(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return I(o,e.$borderTop,e=>e?{"&&":{borderTop:n}}:{"&&":{borderTop:0}})}function ed(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return I(o,e.$borderRight,e=>e?{"&&":{borderRight:n}}:{"&&":{borderRight:0}})}function el(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return I(o,e.$borderBottom,e=>e?{"&&":{borderBottom:n}}:{"&&":{borderBottom:0}})}function ec(e){let{card:t,media:o}=(0,r.aQ)(e.theme),n=`${t.border?.width??1}px solid var(--card-border-color)`;return I(o,e.$borderLeft,e=>e?{"&&":{borderLeft:n}}:{"&&":{borderLeft:0}})}Y.displayName="ThemeProvider",K.displayName="ThemeColorProvider";let es={'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eu={content:"content-box",border:"border-box"},ef={stretch:"stretch",fill:"100%"};function ep(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$display,e=>({"&:not([hidden])":{display:e}}))}function eh(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$sizing,e=>({boxSizing:eu[e]}))}function eg(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$height,e=>({height:ef[e]}))}function em(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$overflow,e=>({overflow:e}))}let eb={minWidth:0,minHeight:0};function ev(){return[eb,ew]}function ew(e){let{media:t}=(0,r.aQ)(e.theme);return e.$flex?I(t,e.$flex,e=>({flex:`${e}`})):w}let ey={"&&:not([hidden])":{display:"flex"}};function ex(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$align,e=>({alignItems:e}))}function e$(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return I(t,e.$gap,e=>({gap:e?N(o[e]):void 0}))}function ek(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$wrap,e=>({flexWrap:e}))}function ez(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$justify,e=>({justifyContent:e}))}function ej(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$direction,e=>({flexDirection:e}))}function eS(e){return`inset 0 0 0 ${e.width}px ${e.color}`}function eR(e){let{base:t,border:o,focusRing:r}=e,n=r.offset+r.width,i=0-r.offset,a=t?t.bg:"var(--card-bg-color)";return[i>0&&`inset 0 0 0 ${i}px var(--card-focus-ring-color)`,o&&eS(o),i<0&&`0 0 0 ${0-i}px ${a}`,n>0&&`0 0 0 ${n}px var(--card-focus-ring-color)`].filter(Boolean).join(",")}let eC={auto:"auto",full:"1 / -1"},eE={auto:"auto",full:"1 / -1"};function eN(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$row,e=>"number"==typeof e?{gridRow:`span ${e} / span ${e}`}:{gridRow:eC[e]})}function eI(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$rowStart,e=>({gridRowStart:`${e}`}))}function e_(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$rowEnd,e=>({gridRowEnd:`${e}`}))}function eM(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$column,e=>"number"==typeof e?{gridColumn:`span ${e} / span ${e}`}:{gridColumn:eE[e]})}function eL(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$columnStart,e=>({gridColumnStart:`${e}`}))}function eT(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$columnEnd,e=>({gridColumnEnd:`${e}`}))}let eF={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"}},eO={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"},eQ={auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0, 1fr)"};function eA(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$autoFlow,e=>({gridAutoFlow:e}))}function eB(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$autoRows,e=>({gridAutoRows:e&&eQ[e]}))}function eP(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$autoCols,e=>({gridAutoColumns:e&&eO[e]}))}function eH(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$columns,e=>({gridTemplateColumns:e&&`repeat(${e},minmax(0,1fr));`}))}function eD(e){let{media:t}=(0,r.aQ)(e.theme);return I(t,e.$rows,e=>({gridTemplateRows:e&&`repeat(${e},minmax(0,1fr));`}))}function eV(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return I(t,e.$gap,e=>({gridGap:e?N(o[e]):void 0}))}function eW(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return I(t,e.$gapX,e=>({columnGap:e?N(o[e]):void 0}))}function eG(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return I(t,e.$gapY,e=>({rowGap:e?N(o[e]):void 0}))}function eX(e){let{$fontSize:t,$iconLeft:o,$iconRight:n,$padding:i,$space:a}=e,{font:d,media:l,space:c}=(0,r.aQ)(e.theme),s=Math.max(i.length,a.length,t.length),u=[],f=[],p=[];for(let e=0;e<s;e+=1)p[e]=void 0===t[e]?p[e-1]:t[e],u[e]=void 0===i[e]?u[e-1]:i[e],f[e]=void 0===a[e]?f[e-1]:a[e];return I(l,u,(e,t)=>{let r=d.text.sizes[p[t]]||d.text.sizes[2],i=r.lineHeight-r.ascenderHeight-r.descenderHeight,a=c[u[t]],l=c[f[t]],s={paddingTop:N(a-r.ascenderHeight),paddingRight:N(a),paddingBottom:N(a-r.descenderHeight),paddingLeft:N(a)};return n&&(s.paddingRight=N(a+i+l)),o&&(s.paddingLeft=N(a+i+l)),s})}function eY(e){return eX({...e,$iconRight:!0})}let eq=(0,d.iv)`
  &:not([hidden]) {
    display: flex;
  }

  align-items: center;
`;function eK(){return eq}function eZ(e){let{$scheme:t,$tone:o,$weight:n}=e,{color:i,font:a}=(0,r.aQ)(e.theme);return(0,d.iv)`
    appearance: none;
    background: none;
    border: 0;
    border-radius: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    font-family: ${a.text.family};
    font-weight: ${n&&a.text.weights[n]||a.text.weights.regular};
    margin: 0;
    position: relative;
    z-index: 1;
    display: block;

    /* NOTE: This is a hack to disable Chrome’s autofill styles */
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--input-fg-color) !important;
      transition: background-color 5000s;
      transition-delay: 86400s /* 24h */;
    }

    /* &:is(textarea) */
    &[data-as='textarea'] {
      resize: none;
    }

    color: var(--input-fg-color);

    &::placeholder {
      color: var(--input-placeholder-color);
    }

    &[data-scheme='${t}'][data-tone='${o}'] {
      --input-fg-color: ${i.input.default.enabled.fg};
      --input-placeholder-color: ${i.input.default.enabled.placeholder};

      /* enabled */
      &:not(:invalid):not(:disabled):not(:read-only) {
        --input-fg-color: ${i.input.default.enabled.fg};
        --input-placeholder-color: ${i.input.default.enabled.placeholder};
      }

      /* disabled */
      &:not(:invalid):disabled {
        --input-fg-color: ${i.input.default.disabled.fg};
        --input-placeholder-color: ${i.input.default.disabled.placeholder};
      }

      /* invalid */
      &:invalid {
        --input-fg-color: ${i.input.invalid.enabled.fg};
        --input-placeholder-color: ${i.input.invalid.enabled.placeholder};
      }

      /* readOnly */
      &:read-only {
        --input-fg-color: ${i.input.default.readOnly.fg};
        --input-placeholder-color: ${i.input.default.readOnly.placeholder};
      }
    }
  `}function eU(e){let{font:t,media:o}=(0,r.aQ)(e.theme);return I(o,e.$fontSize,e=>{let o=t.text.sizes[e]||t.text.sizes[2];return{fontSize:N(o.fontSize),lineHeight:`${o.lineHeight/o.fontSize}`}})}function eJ(e){let{$hasPrefix:t,$hasSuffix:o,$scheme:n,$tone:i,$unstableDisableFocusRing:a}=e,{color:l,input:c}=(0,r.aQ)(e.theme);return(0,d.iv)`
    --input-box-shadow: none;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    pointer-events: none;
    z-index: 0;

    background-color: var(--card-bg-color);
    box-shadow: var(--input-box-shadow);

    border-top-left-radius: ${t?0:void 0};
    border-bottom-left-radius: ${t?0:void 0};
    border-top-right-radius: ${o?0:void 0};
    border-bottom-right-radius: ${o?0:void 0};

    &[data-scheme='${n}'][data-tone='${i}'] {
      --card-bg-color: ${l.input.default.enabled.bg};
      --card-fg-color: ${l.input.default.enabled.fg};

      /* enabled */
      *:not(:disabled) + &[data-border] {
        --input-box-shadow: ${eS({color:l.input.default.enabled.border,width:c.border.width})};
      }

      /* invalid */
      *:not(:disabled):invalid + & {
        --card-bg-color: ${l.input.invalid.enabled.bg};
        --card-fg-color: ${l.input.invalid.enabled.fg};

        &[data-border] {
          --input-box-shadow: ${eS({color:l.input.invalid.enabled.border,width:c.border.width})};
        }
      }

      /* focused */
      *:not(:disabled):focus + & {
        &[data-border] {
          --input-box-shadow: ${a?void 0:eR({border:{color:l.input.default.enabled.border,width:c.border.width},focusRing:c.text.focusRing})};
        }

        &:not([data-border]) {
          --input-box-shadow: ${a?void 0:eR({focusRing:c.text.focusRing})};
        }
      }

      /* disabled */
      *:not(:invalid):disabled + & {
        --card-bg-color: ${l.input.default.disabled.bg} !important;
        --card-fg-color: ${l.input.default.disabled.fg} !important;
        --card-icon-color: ${l.input.default.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${eS({color:l.input.default.disabled.border,width:c.border.width})};
        }
      }

      *:invalid:disabled + & {
        --card-bg-color: ${l.input.invalid.disabled.bg} !important;
        --card-fg-color: ${l.input.invalid.disabled.fg} !important;
        --card-icon-color: ${l.input.invalid.disabled.fg} !important;

        &[data-border] {
          --input-box-shadow: ${eS({color:l.input.invalid.disabled.border,width:c.border.width})};
        }
      }

      /* readOnly */
      *:not(:invalid):read-only + & {
        --card-bg-color: ${l.input.default.readOnly.bg} !important;
        --card-fg-color: ${l.input.default.readOnly.fg} !important;
      }

      *:invalid:read-only + & {
        --card-bg-color: ${l.input.invalid.readOnly.bg} !important;
        --card-fg-color: ${l.input.invalid.readOnly.fg} !important;
      }

      /* hovered */
      @media (hover: hover) {
        *:not(:disabled):not(:read-only):not(:invalid):hover + & {
          --card-bg-color: ${l.input.default.hovered.bg};
          --card-fg-color: ${l.input.default.hovered.fg};
        }

        *:invalid:not(:disabled):not(:read-only):hover + & {
          --card-bg-color: ${l.input.invalid.hovered.bg};
          --card-fg-color: ${l.input.invalid.hovered.fg};
        }

        *:not(:disabled):not(:read-only):not(:invalid):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${eS({color:l.input.default.hovered.border,width:c.border.width})};
        }

        *:invalid:not(:disabled):not(:read-only):not(:focus):hover + &[data-border] {
          --input-box-shadow: ${eS({color:l.input.invalid.hovered.border,width:c.border.width})};
        }
      }
    }
  `}function e0(e){let{theme:t}=e;return[M(t,["padding"],e.$padding),M(t,["paddingLeft","paddingRight"],e.$paddingX),M(t,["paddingTop","paddingBottom"],e.$paddingY),M(t,["paddingTop"],e.$paddingTop),M(t,["paddingRight"],e.$paddingRight),M(t,["paddingBottom"],e.$paddingBottom),M(t,["paddingLeft"],e.$paddingLeft)].filter(Boolean)}function e1(e){let{media:t,radius:o}=(0,r.aQ)(e.theme);return I(t,e.$radius,e=>{let t=0;return"number"==typeof e&&(t=N(o[e])),"full"===e&&(t="9999px"),{borderRadius:t}})}function e2(e,t){return`${e.map(N).join(" ")} ${t}`}let e3=d.zo.span.withConfig({displayName:"SpanWithTextOverflow",componentId:"sc-ol2i3b-0"})`display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;overflow:clip;`,e4=d.zo.div.withConfig({displayName:"StyledLabel",componentId:"sc-1luap7z-0"})(function(e){return L("label",e)},T,function(e){let{$accent:t,$muted:o}=e,{font:n}=(0,r.aQ)(e.theme);return(0,d.iv)`
    text-transform: uppercase;

    ${t&&(0,d.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,d.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `}),e5=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u,f;let p=(0,i.c)(22);p[0]!==e?({accent:o,align:r,children:a,muted:l,size:c,textOverflow:s,weight:u,...d}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=a,p[4]=d,p[5]=l,p[6]=c,p[7]=s,p[8]=u):(o=p[1],r=p[2],a=p[3],d=p[4],l=p[5],c=p[6],s=p[7],u=p[8]);let h=void 0!==l&&l,g=void 0===c?2:c,m=a;if("ellipsis"===s){let e;p[9]!==m?(e=(0,n.jsx)(e3,{children:m}),p[9]=m,p[10]=e):e=p[10],m=e}else{let e;p[11]!==m?(e=(0,n.jsx)("span",{children:m}),p[11]=m,p[12]=e):e=p[12],m=e}let b=F(r),v=F(g);return p[13]!==o||p[14]!==m||p[15]!==h||p[16]!==t||p[17]!==d||p[18]!==b||p[19]!==v||p[20]!==u?(f=(0,n.jsx)(e4,{"data-ui":"Label",...d,$accent:o,$align:b,$muted:h,$size:v,$weight:u,ref:t,children:m}),p[13]=o,p[14]=m,p[15]=h,p[16]=t,p[17]=d,p[18]=b,p[19]=v,p[20]=u,p[21]=f):f=p[21],f});e5.displayName="ForwardRef(Label)";let e6=d.zo.div.withConfig({displayName:"StyledAvatar",componentId:"sc-1rj7kl0-0"})(function(e){let{avatar:t,media:o}=(0,r.aQ)(e.theme);return I(o,e.$size,e=>{let o=t.sizes[e]||t.sizes[0];return{width:N(o.size),height:N(o.size),borderRadius:N(o.size/2),"&>svg":{width:N(o.size),height:N(o.size),borderRadius:N(o.size/2)}}})},function(e){let{$color:t}=e,{avatar:o}=(0,r.aQ)(e.theme);return{"--avatar-bg-color":`var(--card-avatar-${t}-bg-color)`,"--avatar-fg-color":`var(--card-avatar-${t}-fg-color)`,backgroundColor:"var(--avatar-bg-color)",position:"relative",boxSizing:"border-box",userSelect:"none",boxShadow:"0 0 0 1px var(--card-bg-color)",'&[data-status="inactive"]':{opacity:"0.5"},"&>svg":{"&:not([hidden])":{display:"block"}},'&[data-as="button"]':{WebkitFontSmoothing:"inherit",appearance:"none",margin:0,padding:0,border:0,font:"inherit",color:"inherit",outline:"none","&:focus":{boxShadow:eR({focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:"none"}}}}),e7=d.zo.div.withConfig({displayName:"Arrow",componentId:"sc-1rj7kl0-1"})(function(){return{position:"absolute",boxSizing:"border-box",zIndex:"0",opacity:"0",transition:"all 0.2s linear",transform:"rotate(-90deg) translate3d(0, 6px, 0)",left:0,right:0,top:0,bottom:0,"& > svg":{width:"11px",height:"7px",position:"absolute",top:"-5px",left:"50%",transform:"translateX(-6px)","&:not([hidden])":{display:"block"}},"[data-arrow-position='inside'] > &":{transform:"rotate(-90deg) translate3d(0, 6px, 0)",opacity:"0"},"[data-arrow-position='top'] > &":{opacity:"1",transform:"rotate(0deg)"},"[data-arrow-position='bottom'] > &":{opacity:"1",transform:"rotate(-180deg)"}}}),e8=d.zo.ellipse.withConfig({displayName:"BgStroke",componentId:"sc-1rj7kl0-2"})(function(){return{strokeWidth:"4px",stroke:"var(--card-bg-color)"}}),e9=d.zo.ellipse.withConfig({displayName:"Stroke",componentId:"sc-1rj7kl0-3"})(function(){return{strokeWidth:"2px",stroke:"var(--avatar-bg-color)",'[data-status="editing"] &':{strokeDasharray:"2 4",strokeLinecap:"round"}}}),te=d.zo.div.withConfig({displayName:"Initials",componentId:"sc-1rj7kl0-4"})(function(){return{width:"100%",height:"100%",color:"var(--avatar-fg-color)",alignItems:"center",justifyContent:"center",textTransform:"uppercase",textAlign:"center",borderRadius:"50%","&:not([hidden])":{display:"flex"}}}),tt=(0,d.zo)(e5).withConfig({displayName:"InitialsLabel",componentId:"sc-1rj7kl0-5"})({color:"inherit"}),to=d.zo.svg.withConfig({displayName:"AvatarImage",componentId:"sc-1rj7kl0-6"})(function(){return{position:"relative"}}),tr=(0,a.forwardRef)(function(e,t){let o,r,d,c,s,u,f,p,h,g,m,b,v,w,y,x,$,k,z,j,S,R;let C=(0,i.c)(52);C[0]!==e?({__unstable_hideInnerStroke:o,as:c,color:h,src:p,title:b,initials:s,onImageLoadError:u,arrowPosition:d,animateArrowFrom:r,status:g,size:m,...f}=e,C[0]=e,C[1]=o,C[2]=r,C[3]=d,C[4]=c,C[5]=s,C[6]=u,C[7]=f,C[8]=p,C[9]=h,C[10]=g,C[11]=m,C[12]=b):(o=C[1],r=C[2],d=C[3],c=C[4],s=C[5],u=C[6],f=C[7],p=C[8],h=C[9],g=C[10],m=C[11],b=C[12]);let E=void 0===h?"gray":h,N=void 0===g?"online":g,I=void 0===m?1:m,{avatar:_}=U(),M=l.isValidElementType(c)?c:"div",L=F(I),T=(_.sizes[L[0]]||_.sizes[0]).size,O=T/2,Q=(0,a.useId)(),[A,B]=(0,a.useState)(r||d||"inside"),[P,H]=(0,a.useState)(!1),D=`avatar-image-${Q}`;C[13]!==A||C[14]!==d?(v=()=>{if(A===d)return;let e=requestAnimationFrame(()=>B(d));return()=>cancelAnimationFrame(e)},w=[A,d],C[13]=A,C[14]=d,C[15]=v,C[16]=w):(v=C[15],w=C[16]),(0,a.useEffect)(v,w),C[17]!==p?(y=()=>{p&&H(!1)},x=[p],C[17]=p,C[18]=y,C[19]=x):(y=C[18],x=C[19]),(0,a.useEffect)(y,x),C[20]!==u?($=()=>{H(!0),u&&u(Error("Avatar: the image failed to load"))},C[20]=u,C[21]=$):$=C[21];let V=$;C[22]!==L?(k=L.map(tn),C[22]=L,C[23]=k):k=C[23];let W=k,G="string"==typeof M?M:void 0;return C[24]!==E?(z=(0,n.jsx)(e7,{children:(0,n.jsx)("svg",{width:"11",height:"7",viewBox:"0 0 11 7",fill:"none",children:(0,n.jsx)("path",{d:"M6.67948 1.50115L11 7L0 7L4.32052 1.50115C4.92109 0.736796 6.07891 0.736795 6.67948 1.50115Z",fill:E})})}),C[24]=E,C[25]=z):z=C[25],C[26]!==o||C[27]!==O||C[28]!==T||C[29]!==V||C[30]!==P||C[31]!==D||C[32]!==p?(j=!P&&p&&(0,n.jsxs)(to,{viewBox:`0 0 ${T} ${T}`,fill:"none",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:D,patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:(0,n.jsx)("image",{href:p,width:"1",height:"1",onError:V})})}),(0,n.jsx)("circle",{cx:O,cy:O,r:O,fill:`url(#${D})`}),!o&&(0,n.jsx)(e8,{cx:O,cy:O,rx:O,ry:O,vectorEffect:"non-scaling-stroke"}),(0,n.jsx)(e9,{cx:O,cy:O,rx:O,ry:O,vectorEffect:"non-scaling-stroke"})]}),C[26]=o,C[27]=O,C[28]=T,C[29]=V,C[30]=P,C[31]=D,C[32]=p,C[33]=j):j=C[33],C[34]!==P||C[35]!==s||C[36]!==W||C[37]!==p?(S=(P||!p)&&s&&(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(te,{children:(0,n.jsx)(tt,{forwardedAs:"span",size:W,weight:"medium",children:s})})}),C[34]=P,C[35]=s,C[36]=W,C[37]=p,C[38]=S):S=C[38],C[39]!==A||C[40]!==M||C[41]!==E||C[42]!==t||C[43]!==f||C[44]!==L||C[45]!==N||C[46]!==z||C[47]!==j||C[48]!==S||C[49]!==G||C[50]!==b?(R=(0,n.jsxs)(e6,{as:M,"data-as":G,"data-ui":"Avatar",...f,$color:E,$size:L,"aria-label":b,"data-arrow-position":A,"data-status":N,ref:t,title:b,children:[z,j,S]}),C[39]=A,C[40]=M,C[41]=E,C[42]=t,C[43]=f,C[44]=L,C[45]=N,C[46]=z,C[47]=j,C[48]=S,C[49]=G,C[50]=b,C[51]=R):R=C[51],R});function tn(e){return 1===e?1:2===e?3:3===e?5:0}tr.displayName="ForwardRef(Avatar)";let ti=d.zo.div.withConfig({displayName:"StyledAvatarCounter",componentId:"sc-1ydx86y-0"})(function(e){let{avatar:t,media:o}=(0,r.aQ)(e.theme);return I(o,e.$size,e=>{let o=t.sizes[e];return o?{borderRadius:N(o.size/2),minWidth:N(o.size),height:N(o.size)}:y})},function(e){let{space:t}=(0,r.aQ)(e.theme);return(0,d.iv)`
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    user-select: none;
    color: inherit;
    color: var(--card-fg-color);
    background: var(--card-bg-color);
    box-shadow:
      0 0 0 1px var(--card-bg-color),
      inset 0 0 0 1px var(--card-hairline-hard-color);
    padding: 0 ${N(t[2])};

    &:not([hidden]) {
      display: flex;
    }
  `}),ta=(0,a.forwardRef)(function(e,t){let o,r,a;let d=(0,i.c)(9),{count:l,size:c}=e,s=F(void 0===c?1:c);d[0]!==s?(o=s.map(td),d[0]=s,d[1]=o):o=d[1];let u=o;return d[2]!==l||d[3]!==u?(r=(0,n.jsx)(e5,{as:"span",size:u,weight:"medium",children:l}),d[2]=l,d[3]=u,d[4]=r):r=d[4],d[5]!==t||d[6]!==s||d[7]!==r?(a=(0,n.jsx)(ti,{$size:s,"data-ui":"AvatarCounter",ref:t,children:r}),d[5]=t,d[6]=s,d[7]=r,d[8]=a):a=d[8],a});function td(e){return 1===e?1:2===e?3:3===e?5:0}ta.displayName="ForwardRef(AvatarCounter)";let tl=(0,d.iv)`
  white-space: nowrap;

  & > div {
    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  }
`,tc=d.zo.div.withConfig({displayName:"StyledAvatarStack",componentId:"sc-cysmbb-0"})(function(e){let{avatar:t,media:o}=(0,r.aQ)(e.theme);return I(o,e.$size,e=>{let o=t.sizes[e];return o?{"& > div + div":{marginLeft:N(o.distance)}}:y})},function(){return tl}),ts=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f;let p=(0,i.c)(22);p[0]!==e?({children:o,maxLength:d,size:l,...r}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=d,p[4]=l):(o=p[1],r=p[2],d=p[3],l=p[4]);let h=void 0===d?4:d,g=void 0===l?1:l,m=a.Children.toArray(o).filter(a.isValidElement),b=F(g),v=m.length,w=v-(Math.max(h,0)-1),y=w>1?m.slice(w,v):m;p[5]!==v||p[6]!==b?(c=0===v&&(0,n.jsx)("div",{children:(0,n.jsx)(ta,{count:v,size:b})}),p[5]=v,p[6]=b,p[7]=c):c=p[7],p[8]!==w||p[9]!==v||p[10]!==b?(s=0!==v&&w>1&&(0,n.jsx)("div",{children:(0,n.jsx)(ta,{count:w,size:b})}),p[8]=w,p[9]=v,p[10]=b,p[11]=s):s=p[11],p[12]!==b?(u=(e,t)=>(0,n.jsx)("div",{children:(0,a.cloneElement)(e,{size:b})},String(t)),p[12]=b,p[13]=u):u=p[13];let x=y.map(u);return p[14]!==tc||p[15]!==t||p[16]!==r||p[17]!==b||p[18]!==c||p[19]!==s||p[20]!==x?(f=(0,n.jsxs)(tc,{"data-ui":"AvatarStack",...r,ref:t,$size:b,children:[c,s,x]}),p[14]=tc,p[15]=t,p[16]=r,p[17]=b,p[18]=c,p[19]=s,p[20]=x,p[21]=f):f=p[21],f});ts.displayName="ForwardRef(AvatarStack)";let tu=d.zo.div.withConfig({displayName:"StyledBox",componentId:"sc-1hhky9f-0"})(function(){return es},ev,function(){return[eh,eg,em,ep]},function(){return[eN,eI,e_,eM,eL,eT]},function(e){let{theme:t}=e;return[M(t,["margin"],e.$margin),M(t,["marginLeft","marginRight"],e.$marginX),M(t,["marginTop","marginBottom"],e.$marginY),M(t,["marginTop"],e.$marginTop),M(t,["marginRight"],e.$marginRight),M(t,["marginBottom"],e.$marginBottom),M(t,["marginLeft"],e.$marginLeft)].filter(Boolean)},e0),tf=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u,f,p,h,g,m,b,v,w,y,x,$,k,z,j,S,R,C,E,N,I;let _=(0,i.c)(59);_[0]!==e?({as:R,column:o,columnStart:a,columnEnd:r,display:C,flex:d,height:l,margin:E,marginX:p,marginY:h,marginTop:f,marginRight:u,marginBottom:c,marginLeft:s,overflow:g,padding:N,paddingX:y,paddingY:x,paddingTop:w,paddingRight:v,paddingBottom:m,paddingLeft:b,row:k,rowStart:j,rowEnd:z,sizing:S,...$}=e,_[0]=e,_[1]=o,_[2]=r,_[3]=a,_[4]=d,_[5]=l,_[6]=c,_[7]=s,_[8]=u,_[9]=f,_[10]=p,_[11]=h,_[12]=g,_[13]=m,_[14]=b,_[15]=v,_[16]=w,_[17]=y,_[18]=x,_[19]=$,_[20]=k,_[21]=z,_[22]=j,_[23]=S,_[24]=R,_[25]=C,_[26]=E,_[27]=N):(o=_[1],r=_[2],a=_[3],d=_[4],l=_[5],c=_[6],s=_[7],u=_[8],f=_[9],p=_[10],h=_[11],g=_[12],m=_[13],b=_[14],v=_[15],w=_[16],y=_[17],x=_[18],$=_[19],k=_[20],z=_[21],j=_[22],S=_[23],R=_[24],C=_[25],E=_[26],N=_[27]);let M=void 0===R?"div":R,L=void 0===C?"block":C,T=void 0===E?0:E,O=void 0===N?0:N,Q="string"==typeof M?M:void 0,A=F(o),B=F(a),P=F(r),H=F(L),D=F(d),V=F(l),W=F(T),G=F(p),X=F(h),Y=F(f),q=F(u),K=F(c),Z=F(s),U=F(g),J=F(O),ee=F(y),et=F(x),eo=F(w),er=F(v),en=F(m),ei=F(b),ea=F(k),ed=F(j),el=F(z),ec=F(S);return _[28]!==M||_[29]!==e.children||_[30]!==t||_[31]!==$||_[32]!==V||_[33]!==W||_[34]!==G||_[35]!==X||_[36]!==Y||_[37]!==q||_[38]!==K||_[39]!==Z||_[40]!==U||_[41]!==J||_[42]!==ee||_[43]!==et||_[44]!==eo||_[45]!==er||_[46]!==en||_[47]!==ei||_[48]!==ea||_[49]!==ed||_[50]!==el||_[51]!==ec||_[52]!==Q||_[53]!==A||_[54]!==B||_[55]!==P||_[56]!==H||_[57]!==D?(I=(0,n.jsx)(tu,{"data-as":Q,"data-ui":"Box",...$,$column:A,$columnStart:B,$columnEnd:P,$display:H,$flex:D,$height:V,$margin:W,$marginX:G,$marginY:X,$marginTop:Y,$marginRight:q,$marginBottom:K,$marginLeft:Z,$overflow:U,$padding:J,$paddingX:ee,$paddingY:et,$paddingTop:eo,$paddingRight:er,$paddingBottom:en,$paddingLeft:ei,$row:ea,$rowStart:ed,$rowEnd:el,$sizing:ec,as:M,ref:t,children:e.children}),_[28]=M,_[29]=e.children,_[30]=t,_[31]=$,_[32]=V,_[33]=W,_[34]=G,_[35]=X,_[36]=Y,_[37]=q,_[38]=K,_[39]=Z,_[40]=U,_[41]=J,_[42]=ee,_[43]=et,_[44]=eo,_[45]=er,_[46]=en,_[47]=ei,_[48]=ea,_[49]=ed,_[50]=el,_[51]=ec,_[52]=Q,_[53]=A,_[54]=B,_[55]=P,_[56]=H,_[57]=D,_[58]=I):I=_[58],I});tf.displayName="ForwardRef(Box)";let tp=d.zo.div.withConfig({displayName:"StyledText",componentId:"sc-11ov82j-0"})(function(e){return L("text",e)},T,function(e){let{$accent:t,$muted:o}=e,{font:n}=(0,r.aQ)(e.theme);return(0,d.iv)`
    color: var(--card-fg-color);

    ${t&&(0,d.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,d.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
      background-color: var(--card-code-bg-color);
      color: var(--card-code-fg-color);
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${n.text.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
      color: var(--card-icon-color);

      & path {
        vector-effect: non-scaling-stroke !important;
      }
    }
  `}),th=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u,f,p;let h=(0,i.c)(22);h[0]!==e?({accent:d,align:o,children:r,muted:l,size:c,textOverflow:s,weight:u,...a}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=a,h[4]=d,h[5]=l,h[6]=c,h[7]=s,h[8]=u):(o=h[1],r=h[2],a=h[3],d=h[4],l=h[5],c=h[6],s=h[7],u=h[8]);let g=void 0!==d&&d,m=void 0!==l&&l,b=void 0===c?2:c,v=r;if("ellipsis"===s){let e;h[9]!==v?(e=(0,n.jsx)(e3,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let w=F(o),y=F(b);return h[11]!==v?(f=(0,n.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==g||h[14]!==m||h[15]!==t||h[16]!==a||h[17]!==w||h[18]!==y||h[19]!==f||h[20]!==u?(p=(0,n.jsx)(tp,{"data-ui":"Text",...a,$accent:g,$align:w,$muted:m,ref:t,$size:y,$weight:u,children:f}),h[13]=g,h[14]=m,h[15]=t,h[16]=a,h[17]=w,h[18]=y,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});th.displayName="ForwardRef(Text)";let tg=(0,d.zo)(tf).withConfig({displayName:"StyledBadge",componentId:"sc-5u140l-0"})(e1,function(e){let{$tone:t}=e;return{"--card-bg-color":`var(--card-badge-${t}-bg-color)`,"--card-fg-color":`var(--card-badge-${t}-fg-color)`,backgroundColor:"var(--card-bg-color)",cursor:"default","&:not([hidden])":{display:"inline-block",verticalAlign:"top"}}}),tm=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u;let f=(0,i.c)(17);if(f[0]!==e){let{children:t,fontSize:n,mode:i,padding:s,radius:u,tone:p,...h}=e;o=t,a=n,d=s,l=u,c=p,r=h,f[0]=e,f[1]=o,f[2]=r,f[3]=a,f[4]=d,f[5]=l,f[6]=c}else o=f[1],r=f[2],a=f[3],d=f[4],l=f[5],c=f[6];let p=void 0===a?1:a,h=void 0===d?1:d,g=void 0===c?"default":c,m=F(void 0===l?"full":l),b=F(h);return f[7]!==o||f[8]!==p?(s=(0,n.jsx)(th,{size:p,children:o}),f[7]=o,f[8]=p,f[9]=s):s=f[9],f[10]!==t||f[11]!==r||f[12]!==m||f[13]!==b||f[14]!==s||f[15]!==g?(u=(0,n.jsx)(tg,{"data-ui":"Badge",...r,$tone:g,$radius:m,padding:b,ref:t,children:s}),f[10]=t,f[11]=r,f[12]=m,f[13]=b,f[14]=s,f[15]=g,f[16]=u):u=f[16],u});tm.displayName="ForwardRef(Badge)";let tb=(0,d.zo)(tf).withConfig({displayName:"StyledFlex",componentId:"sc-oxesg3-0"})(ev,function(){return[ey,ex,e$,ek,ez,ej]}),tv=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u;let f=(0,i.c)(17);f[0]!==e?({align:o,as:r,direction:c,gap:a,justify:d,wrap:s,...l}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=a,f[4]=d,f[5]=l,f[6]=c,f[7]=s):(o=f[1],r=f[2],a=f[3],d=f[4],l=f[5],c=f[6],s=f[7]);let p=void 0===c?"row":c,h=F(o),g=F(p),m=F(a),b=F(d),v=F(s);return f[8]!==r||f[9]!==t||f[10]!==l||f[11]!==h||f[12]!==g||f[13]!==m||f[14]!==b||f[15]!==v?(u=(0,n.jsx)(tb,{"data-ui":"Flex",...l,$align:h,$direction:g,$gap:m,$justify:b,$wrap:v,forwardedAs:r,ref:t}),f[8]=r,f[9]=t,f[10]=l,f[11]=h,f[12]=g,f[13]=m,f[14]=b,f[15]=v,f[16]=u):u=f[16],u});tv.displayName="ForwardRef(Flex)";let tw=(0,d.F4)`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,ty=(0,d.zo)(th).withConfig({displayName:"StyledSpinner",componentId:"sc-124hnd0-0"})`& > span > svg{animation:${tw} 500ms linear infinite;}`,tx=(0,a.forwardRef)(function(e,t){let o,r;let a=(0,i.c)(4);return a[0]===Symbol.for("react.memo_cache_sentinel")?(o=(0,n.jsx)(c.L4p,{}),a[0]=o):o=a[0],a[1]!==e||a[2]!==t?(r=(0,n.jsx)(ty,{"data-ui":"Spinner",...e,ref:t,children:o}),a[1]=e,a[2]=t,a[3]=r):r=a[3],r});function t$(e,t,o=!1){return{"--card-backdrop-color":e.backdrop,"--card-focus-ring-color":e.focusRing,"--card-shadow-outline-color":e.shadow.outline,"--card-shadow-umbra-color":e.shadow.umbra,"--card-shadow-penumbra-color":e.shadow.penumbra,"--card-shadow-ambient-color":e.shadow.ambient,"--card-accent-fg-color":t.accent.fg,"--card-avatar-gray-bg-color":t.avatar.gray.bg,"--card-avatar-gray-fg-color":t.avatar.gray.fg,"--card-avatar-blue-bg-color":t.avatar.blue.bg,"--card-avatar-blue-fg-color":t.avatar.blue.fg,"--card-avatar-purple-bg-color":t.avatar.purple.bg,"--card-avatar-purple-fg-color":t.avatar.purple.fg,"--card-avatar-magenta-bg-color":t.avatar.magenta.bg,"--card-avatar-magenta-fg-color":t.avatar.magenta.fg,"--card-avatar-red-bg-color":t.avatar.red.bg,"--card-avatar-red-fg-color":t.avatar.red.fg,"--card-avatar-orange-bg-color":t.avatar.orange.bg,"--card-avatar-orange-fg-color":t.avatar.orange.fg,"--card-avatar-yellow-bg-color":t.avatar.yellow.bg,"--card-avatar-yellow-fg-color":t.avatar.yellow.fg,"--card-avatar-green-bg-color":t.avatar.green.bg,"--card-avatar-green-fg-color":t.avatar.green.fg,"--card-avatar-cyan-bg-color":t.avatar.cyan.bg,"--card-avatar-cyan-fg-color":t.avatar.cyan.fg,"--card-bg-color":t.bg,"--card-bg-image":o?`repeating-conic-gradient(${t.bg} 0% 25%, ${t.muted.bg} 0% 50%)`:void 0,"--card-border-color":t.border,"--card-badge-default-bg-color":t.badge.default.bg,"--card-badge-default-dot-color":t.badge.default.dot,"--card-badge-default-fg-color":t.badge.default.fg,"--card-badge-default-icon-color":t.badge.default.icon,"--card-badge-neutral-bg-color":t.badge.neutral?.bg,"--card-badge-neutral-dot-color":t.badge.neutral?.dot,"--card-badge-neutral-fg-color":t.badge.neutral?.fg,"--card-badge-neutral-icon-color":t.badge.neutral?.icon,"--card-badge-primary-bg-color":t.badge.primary.bg,"--card-badge-primary-dot-color":t.badge.primary.dot,"--card-badge-primary-fg-color":t.badge.primary.fg,"--card-badge-primary-icon-color":t.badge.primary.icon,"--card-badge-suggest-bg-color":t.badge.suggest?.bg,"--card-badge-suggest-dot-color":t.badge.suggest?.dot,"--card-badge-suggest-fg-color":t.badge.suggest?.fg,"--card-badge-suggest-icon-color":t.badge.suggest?.icon,"--card-badge-positive-bg-color":t.badge.positive.bg,"--card-badge-positive-dot-color":t.badge.positive.dot,"--card-badge-positive-fg-color":t.badge.positive.fg,"--card-badge-positive-icon-color":t.badge.positive.icon,"--card-badge-caution-bg-color":t.badge.caution.bg,"--card-badge-caution-dot-color":t.badge.caution.dot,"--card-badge-caution-fg-color":t.badge.caution.fg,"--card-badge-caution-icon-color":t.badge.caution.icon,"--card-badge-critical-bg-color":t.badge.critical.bg,"--card-badge-critical-dot-color":t.badge.critical.dot,"--card-badge-critical-fg-color":t.badge.critical.fg,"--card-badge-critical-icon-color":t.badge.critical.icon,"--card-code-bg-color":t.code.bg,"--card-code-fg-color":t.code.fg,"--card-fg-color":t.fg,"--card-icon-color":t.icon,"--card-kbd-bg-color":t.kbd.bg,"--card-kbd-border-color":t.kbd.border,"--card-kbd-fg-color":t.kbd.fg,"--card-link-fg-color":t.link.fg,"--card-muted-bg-color":t.muted.bg,"--card-muted-fg-color":t.muted.fg,"--card-skeleton-color-from":t.skeleton.from,"--card-skeleton-color-to":t.skeleton.to,"--card-bg2-color":t.muted.bg,"--card-link-color":t.link.fg,"--card-hairline-soft-color":t.border,"--card-hairline-hard-color":t.border}}function tk(...e){return e.filter(Boolean).join(",")}tx.displayName="ForwardRef(Spinner)";let tz=d.zo.button.withConfig({displayName:"StyledButton",componentId:"sc-aaekt4-0"})(e1,function(e){let{$width:t}=e,{style:o}=(0,r.aQ)(e.theme);return(0,d.iv)`
    ${o?.button};

    -webkit-font-smoothing: inherit;
    appearance: none;
    display: inline-flex;
    align-items: center;
    font: inherit;
    border: 0;
    outline: none;
    user-select: none;
    text-decoration: none;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    text-align: left;
    position: relative;
    vertical-align: top;

    ${"fill"===t&&(0,d.iv)`
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    `}

    & > span {
      display: block;
      flex: 1;
      min-width: 0;
      border-radius: inherit;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  `},function(e){let{$mode:t}=e,{button:o,color:n,style:i}=(0,r.aQ)(e.theme),a="ghost"===e.$mode,d=n.button[t]||n.button.default,l=d[e.$tone]||d.default,c={width:o.border.width,color:"var(--card-border-color)"},s=void 0;return[t$(n,l.enabled),{backgroundColor:"var(--card-bg-color)",color:"var(--card-fg-color)",boxShadow:eS(c),'&:disabled, &[data-disabled="true"]':t$(n,l.disabled),"&:not([data-disabled='true'])":{boxShadow:tk(eS(c),a?s:void 0),"&:focus":{boxShadow:eR({base:n,border:{width:2,color:n.bg},focusRing:o.focusRing})},"&:focus:not(:focus-visible)":{boxShadow:tk(eS(c),a?s:void 0)},"@media (hover: hover)":{"&:hover":t$(n,l.hovered),"&:active":t$(n,l.pressed),"&[data-hovered]":t$(n,l.hovered)},"&[data-selected]":t$(n,l.pressed)}},i?.button?.root].filter(Boolean)}),tj=d.zo.div.withConfig({displayName:"LoadingBox",componentId:"sc-aaekt4-1"})`position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background-color:var(--card-bg-color);border-radius:inherit;z-index:1;box-shadow:inherit;`,tS=(0,a.forwardRef)(function(e,t){let o,r,d,c,s,u,f,p,h,g,m,b,v,w,y,x,$,k,z,j,S,R,C,E,N,I,_,M,L,T,O;let Q=(0,i.c)(66);Q[0]!==e?({children:d,disabled:c,fontSize:w,icon:o,iconRight:r,justify:y,loading:s,mode:x,padding:$,paddingX:g,paddingY:m,paddingTop:h,paddingBottom:u,paddingLeft:f,paddingRight:p,radius:k,selected:v,space:z,text:C,textAlign:E,textWeight:N,tone:j,type:S,muted:R,width:I,...b}=e,Q[0]=e,Q[1]=o,Q[2]=r,Q[3]=d,Q[4]=c,Q[5]=s,Q[6]=u,Q[7]=f,Q[8]=p,Q[9]=h,Q[10]=g,Q[11]=m,Q[12]=b,Q[13]=v,Q[14]=w,Q[15]=y,Q[16]=x,Q[17]=$,Q[18]=k,Q[19]=z,Q[20]=j,Q[21]=S,Q[22]=R,Q[23]=C,Q[24]=E,Q[25]=N,Q[26]=I):(o=Q[1],r=Q[2],d=Q[3],c=Q[4],s=Q[5],u=Q[6],f=Q[7],p=Q[8],h=Q[9],g=Q[10],m=Q[11],b=Q[12],v=Q[13],w=Q[14],y=Q[15],x=Q[16],$=Q[17],k=Q[18],z=Q[19],j=Q[20],S=Q[21],R=Q[22],C=Q[23],E=Q[24],N=Q[25],I=Q[26]);let A=void 0===w?1:w,B=void 0===y?"center":y,P=void 0===x?"default":x,H=void 0===$?3:$,D=void 0===k?2:k,V=void 0===z?3:z,W=void 0===j?"default":j,G=void 0===S?"button":S,X=void 0!==R&&R,{button:Y}=U(),q=F(B),K=F(H),Z=F(g),J=F(m),ee=F(h),et=F(u),eo=F(f),er=F(p),en=F(D),ei=F(V);Q[27]!==K||Q[28]!==et||Q[29]!==eo||Q[30]!==er||Q[31]!==ee||Q[32]!==Z||Q[33]!==J?(_={padding:K,paddingX:Z,paddingY:J,paddingTop:ee,paddingBottom:et,paddingLeft:eo,paddingRight:er},Q[27]=K,Q[28]=et,Q[29]=eo,Q[30]=er,Q[31]=ee,Q[32]=Z,Q[33]=J,Q[34]=_):_=Q[34];let ea=_,ed=!!(s||c),el=v?"":void 0,ec=!!(s||c);return Q[35]!==s?(M=!!s&&(0,n.jsx)(tj,{children:(0,n.jsx)(tx,{})}),Q[35]=s,Q[36]=M):M=Q[36],Q[37]!==o||Q[38]!==r||Q[39]!==ea||Q[40]!==Y||Q[41]!==A||Q[42]!==q||Q[43]!==X||Q[44]!==ei||Q[45]!==C||Q[46]!==E||Q[47]!==N?(L=(o||C||r)&&(0,n.jsx)(tf,{as:"span",...ea,children:(0,n.jsxs)(tv,{as:"span",justify:q,gap:ei,children:[o&&(0,n.jsxs)(th,{size:A,children:[(0,a.isValidElement)(o)&&o,(0,l.isValidElementType)(o)&&(0,n.jsx)(o,{})]}),C&&(0,n.jsx)(tf,{children:(0,n.jsx)(th,{muted:X,align:E,size:A,textOverflow:"ellipsis",weight:N??Y.textWeight,children:C})}),r&&(0,n.jsxs)(th,{size:A,children:[(0,a.isValidElement)(r)&&r,(0,l.isValidElementType)(r)&&(0,n.jsx)(r,{})]})]})}),Q[37]=o,Q[38]=r,Q[39]=ea,Q[40]=Y,Q[41]=A,Q[42]=q,Q[43]=X,Q[44]=ei,Q[45]=C,Q[46]=E,Q[47]=N,Q[48]=L):L=Q[48],Q[49]!==ea||Q[50]!==d?(T=d&&(0,n.jsx)(tf,{as:"span",...ea,children:d}),Q[49]=ea,Q[50]=d,Q[51]=T):T=Q[51],Q[52]!==P||Q[53]!==en||Q[54]!==t||Q[55]!==b||Q[56]!==ed||Q[57]!==el||Q[58]!==ec||Q[59]!==M||Q[60]!==L||Q[61]!==T||Q[62]!==W||Q[63]!==G||Q[64]!==I?(O=(0,n.jsxs)(tz,{"data-ui":"Button",...b,$mode:P,$radius:en,$tone:W,"data-disabled":ed,"data-selected":el,disabled:ec,ref:t,type:G,$width:I,children:[M,L,T]}),Q[52]=P,Q[53]=en,Q[54]=t,Q[55]=b,Q[56]=ed,Q[57]=el,Q[58]=ec,Q[59]=M,Q[60]=L,Q[61]=T,Q[62]=W,Q[63]=G,Q[64]=I,Q[65]=O):O=Q[65],O});tS.displayName="ForwardRef(Button)";let tR=(0,d.zo)(tf).withConfig({displayName:"StyledCard",componentId:"sc-osnro2-0"})(function(){return[ei,ea,ed,el,ec]},e1,function(e){let{card:t,media:o,shadow:n}=(0,r.aQ)(e.theme);return I(o,e.$shadow,e=>(function(e,t=1){if(!e)return y;let o=`0 0 0 ${N(t)} var(--card-shadow-outline-color)`,r=e2(e.umbra,"var(--card-shadow-umbra-color)"),n=e2(e.penumbra,"var(--card-shadow-penumbra-color)"),i=e2(e.ambient,"var(--card-shadow-ambient-color)");return{boxShadow:`${o}, ${r}, ${n}, ${i}`}})(n[e],t.shadow.outline))},function(e){return[function(e){let{$checkered:t}=e,{space:o}=(0,r.aQ)(e.theme);return(0,d.iv)`
    ${t&&(0,d.iv)`
      background-size: ${o[3]}px ${o[3]}px;
      background-position: 50% 50%;
      background-image: var(--card-bg-image);
    `}

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      outline: none;
      text-decoration: none;
    }

    /* &:is(pre) */
    &[data-as='pre'] {
      font: inherit;
    }
  `}(e),function(e){let{$checkered:t,$focusRing:o,$muted:n}=e,{card:i,color:a,style:l}=(0,r.aQ)(e.theme),c={width:i.border.width,color:"var(--card-border-color)"};return(0,d.iv)`
    color-scheme: ${a._dark?"dark":"light"};

    ${t$(a,a,t)}

    background-color: ${n?"var(--card-muted-bg-color)":"var(--card-bg-color)"};
    color: var(--card-fg-color);

    /* &:is(button) */
    &[data-as='button'] {
      --card-focus-ring-box-shadow: none;

      cursor: default;
      box-shadow: var(--card-focus-ring-box-shadow);

      &:disabled {
        ${t$(a,a.selectable.default.disabled,t)}
      }

      &:not(:disabled) {
        &[data-pressed] {
          ${t$(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t$(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t$(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t$(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?eR({base:a,border:c,focusRing:i.focusRing}):void 0};
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      cursor: pointer;
      box-shadow: var(--card-focus-ring-box-shadow);

      &[data-disabled] {
        ${t$(a,a.selectable.default.disabled,t)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t$(a,a.selectable.default.pressed,t)}
        }

        &[data-selected] {
          ${t$(a,a.selectable.default.selected,t)}
        }

        @media (hover: hover) {
          &:not([data-pressed]):not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t$(a,a.selectable.default.hovered,t)}
            }

            &:active {
              ${t$(a,a.selectable.default.pressed,t)}
            }
          }
        }

        &:focus-visible {
          --card-focus-ring-box-shadow: ${o?eR({base:a,border:c,focusRing:i.focusRing}):void 0};
        }
      }
    }

    ${l?.card?.root}
  `}(e)]}),tC=(0,a.forwardRef)(function(e,t){let o,r,a,d,c,s,u,f,p,h,g,m,b,v,w,y,x,$;let k=(0,i.c)(42);k[0]!==e?({__unstable_checkered:b,__unstable_focusRing:v,as:o,border:r,borderTop:s,borderRight:c,borderBottom:a,borderLeft:d,muted:u,pressed:f,radius:w,scheme:h,selected:g,shadow:m,tone:y,...p}=e,k[0]=e,k[1]=o,k[2]=r,k[3]=a,k[4]=d,k[5]=c,k[6]=s,k[7]=u,k[8]=f,k[9]=p,k[10]=h,k[11]=g,k[12]=m,k[13]=b,k[14]=v,k[15]=w,k[16]=y):(o=k[1],r=k[2],a=k[3],d=k[4],c=k[5],s=k[6],u=k[7],f=k[8],p=k[9],h=k[10],g=k[11],m=k[12],b=k[13],v=k[14],w=k[15],y=k[16]);let z=void 0!==b&&b,j=void 0!==v&&v,S=void 0===w?0:w,R=void 0===y?"default":y,C=(0,l.isValidElementType)(o)?o:"div",E=q(),N="inherit"===R?E.tone:R,I="string"==typeof C?C:void 0,_=E.scheme,M=F(r),L=F(s),T=F(c),O=F(a),Q=F(d),A=F(S),B=F(m),P=z?"":void 0,H=f?"":void 0,D=g?"":void 0;return k[17]!==C||k[18]!==z||k[19]!==j||k[20]!==u||k[21]!==t||k[22]!==p||k[23]!==E.scheme||k[24]!==g||k[25]!==Q||k[26]!==A||k[27]!==B||k[28]!==P||k[29]!==H||k[30]!==D||k[31]!==I||k[32]!==M||k[33]!==L||k[34]!==T||k[35]!==O||k[36]!==N?(x=(0,n.jsx)(tR,{"data-as":I,"data-scheme":_,"data-ui":"Card","data-tone":N,...p,$border:M,$borderTop:L,$borderRight:T,$borderBottom:O,$borderLeft:Q,$checkered:z,$focusRing:j,$muted:u,$radius:A,$shadow:B,$tone:N,"data-checkered":P,"data-pressed":H,"data-selected":D,forwardedAs:C,ref:t,selected:g}),k[17]=C,k[18]=z,k[19]=j,k[20]=u,k[21]=t,k[22]=p,k[23]=E.scheme,k[24]=g,k[25]=Q,k[26]=A,k[27]=B,k[28]=P,k[29]=H,k[30]=D,k[31]=I,k[32]=M,k[33]=L,k[34]=T,k[35]=O,k[36]=N,k[37]=x):x=k[37],k[38]!==h||k[39]!==x||k[40]!==N?($=(0,n.jsx)(K,{scheme:h,tone:N,children:x}),k[38]=h,k[39]=x,k[40]=N,k[41]=$):$=k[41],$});tC.displayName="ForwardRef(Card)";let tE=d.zo.div.withConfig({displayName:"StyledCheckbox",componentId:"sc-1l5mt2l-0"})(function(){return(0,d.iv)`
    position: relative;
    display: inline-block;
  `}),tN=d.zo.input.withConfig({displayName:"Input",componentId:"sc-1l5mt2l-1"})(function(e){let{color:t,input:o,radius:n}=(0,r.aQ)(e.theme),{focusRing:i}=o.checkbox;return(0,d.iv)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
    z-index: 1;
    padding: 0;
    margin: 0;

    & + span {
      position: relative;
      display: block;
      height: ${N(o.checkbox.size)};
      width: ${N(o.checkbox.size)};
      box-sizing: border-box;
      box-shadow: ${eS({color:t.input.default.enabled.border,width:o.border.width})};
      border-radius: ${N(n[2])};
      line-height: 1;
      background-color: ${t.input.default.enabled.bg};

      & > svg {
        display: block;
        position: absolute;
        opacity: 0;
        height: 100%;
        width: 100%;

        & > path {
          vector-effect: non-scaling-stroke;
          stroke-width: 1.5px !important;
        }
      }
    }

    &:checked + span {
      background: ${t.input.default.enabled.fg};
      box-shadow: ${eS({color:t.input.default.enabled.fg,width:o.border.width})};
      color: ${t.input.default.enabled.bg};
    }

    /* focus */
    &:not(:disabled):focus:focus-visible + span {
      box-shadow: ${eR({focusRing:i})};
    }

    /* focus when checked - uses a different offset */
    &:not(:disabled):focus:focus-visible&:checked + span {
      box-shadow: ${eR({focusRing:{width:1,offset:1}})};
    }

    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${eS({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      color: ${t.input.default.disabled.fg};
    }
    &[data-error]&:checked + span {
      background-color: ${t.input.invalid.enabled.muted.bg};
      color: ${t.input.default.enabled.bg};
    }
    &[data-error]&:checked&:not(:disabled):focus:focus-visible + span {
      box-shadow: ${eR({border:{width:o.border.width,color:t.input.invalid.readOnly.muted.bg},focusRing:{width:1,offset:1}})};
    }

    &:disabled + span {
      background-color: ${t.input.default.disabled.bg};
      box-shadow: ${eS({width:o.border.width,color:t.input.default.disabled.border})};
      color: ${t.input.default.disabled.fg};
    }
    &:disabled&:checked + span {
      background-color: ${t.input.default.disabled.muted.bg};
    }

    &[data-read-only] + span {
      background-color: ${t.input.default.readOnly.bg};
      box-shadow: ${eS({width:o.border.width,color:t.input.default.readOnly.border})};
      color: ${t.input.default.readOnly.fg};
    }

    &[data-read-only]&:checked + span {
      background-color: ${t.input.default.readOnly.muted.bg};
    }

    &:checked + span > svg:first-child {
      opacity: 1;
    }
    &:indeterminate + span > svg:last-child {
      opacity: 1;
    }
  `}),tI=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,u,f,p,h,g,m,b,v,w;let y=(0,i.c)(25);y[0]!==e?({checked:o,className:r,disabled:l,indeterminate:s,customValidity:d,readOnly:u,style:p,...f}=e,y[0]=e,y[1]=o,y[2]=r,y[3]=d,y[4]=l,y[5]=s,y[6]=u,y[7]=f,y[8]=p):(o=y[1],r=y[2],d=y[3],l=y[4],s=y[5],u=y[6],f=y[7],p=y[8]);let x=(0,a.useRef)(null);y[9]===Symbol.for("react.memo_cache_sentinel")?(h=()=>x.current,y[9]=h):h=y[9],(0,a.useImperativeHandle)(t,h),y[10]!==s?(g=()=>{x.current&&(x.current.indeterminate=s||!1)},m=[s],y[10]=s,y[11]=g,y[12]=m):(g=y[11],m=y[12]),(0,a.useEffect)(g,m),A(x,d);let $=!l&&u?"":void 0,k=d?"":void 0,z=l||u;return y[13]!==o||y[14]!==u||y[15]!==f||y[16]!==$||y[17]!==k||y[18]!==z?(b=(0,n.jsx)(tN,{"data-read-only":$,"data-error":k,...f,checked:o,disabled:z,type:"checkbox",readOnly:u,ref:x}),y[13]=o,y[14]=u,y[15]=f,y[16]=$,y[17]=k,y[18]=z,y[19]=b):b=y[19],y[20]===Symbol.for("react.memo_cache_sentinel")?(v=(0,n.jsxs)("span",{children:[(0,n.jsx)(c.KML,{}),(0,n.jsx)(c.HFL,{})]}),y[20]=v):v=y[20],y[21]!==r||y[22]!==p||y[23]!==b?(w=(0,n.jsxs)(tE,{className:r,"data-ui":"Checkbox",style:p,children:[b,v]}),y[21]=r,y[22]=p,y[23]=b,y[24]=w):w=y[24],w});function t_({theme:e}){let{color:{syntax:t}}=(0,r.aQ)(e);return{"&.atrule":{color:t.atrule},"&.attr-name":{color:t.attrName},"&.attr-value":{color:t.attrValue},"&.attribute":{color:t.attribute},"&.boolean":{color:t.boolean},"&.builtin":{color:t.builtin},"&.cdata":{color:t.cdata},"&.char":{color:t.char},"&.class":{color:t.class},"&.class-name":{color:t.className},"&.comment":{color:t.comment},"&.constant":{color:t.constant},"&.deleted":{color:t.deleted},"&.doctype":{color:t.doctype},"&.entity":{color:t.entity},"&.function":{color:t.function},"&.hexcode":{color:t.hexcode},"&.id":{color:t.id},"&.important":{color:t.important},"&.inserted":{color:t.inserted},"&.keyword":{color:t.keyword},"&.number":{color:t.number},"&.operator":{color:t.operator},"&.prolog":{color:t.prolog},"&.property":{color:t.property},"&.pseudo-class":{color:t.pseudoClass},"&.pseudo-element":{color:t.pseudoElement},"&.punctuation":{color:t.punctuation},"&.regex":{color:t.regex},"&.selector":{color:t.selector},"&.string":{color:t.string},"&.symbol":{color:t.symbol},"&.tag":{color:t.tag},"&.unit":{color:t.unit},"&.url":{color:t.url},"&.variable":{color:t.variable}}}tI.displayName="ForwardRef(Checkbox)";let tM=(0,a.lazy)(()=>Promise.all([o.e(1545),o.e(83)]).then(o.bind(o,80083))),tL=d.zo.pre.withConfig({displayName:"StyledCode",componentId:"sc-4dymyn-0"})(function(){return(0,d.iv)`
    color: var(--card-code-fg-color);

    & code {
      font-family: inherit;

      &.refractor .token {
        ${t_}
      }
    }

    & a {
      color: inherit;
      text-decoration: underline;
      border-radius: 1px;
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},function(e){return L("code",e)}),tT=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f,p;let h=(0,i.c)(20);h[0]!==e?({children:o,language:r,size:l,weight:c,...d}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=d,h[4]=l,h[5]=c):(o=h[1],r=h[2],d=h[3],l=h[4],c=h[5]);let g=F(void 0===l?2:l);return h[6]!==o?(s=(0,n.jsx)("code",{children:o}),h[6]=o,h[7]=s):s=h[7],h[8]!==o||h[9]!==r?(u=(0,n.jsx)(tM,{language:r,value:o}),h[8]=o,h[9]=r,h[10]=u):u=h[10],h[11]!==s||h[12]!==u?(f=(0,n.jsx)(a.Suspense,{fallback:s,children:u}),h[11]=s,h[12]=u,h[13]=f):f=h[13],h[14]!==t||h[15]!==d||h[16]!==g||h[17]!==f||h[18]!==c?(p=(0,n.jsx)(tL,{"data-ui":"Code",...d,$size:g,$weight:c,ref:t,children:f}),h[14]=t,h[15]=d,h[16]=g,h[17]=f,h[18]=c,h[19]=p):p=h[19],p});tT.displayName="ForwardRef(Code)";let tF={width:"100%",margin:"0 auto"},tO=(0,d.zo)(tf).withConfig({displayName:"StyledContainer",componentId:"sc-wyroop-0"})(function(){return tF},function(e){let{container:t,media:o}=(0,r.aQ)(e.theme);return I(o,e.$width,e=>({maxWidth:"auto"===e?"none":N(t[e])}))}),tQ=(0,a.forwardRef)(function(e,t){let o,r,a,d;let l=(0,i.c)(9);l[0]!==e?({as:o,width:a,...r}=e,l[0]=e,l[1]=o,l[2]=r,l[3]=a):(o=l[1],r=l[2],a=l[3]);let c=F(void 0===a?2:a);return l[4]!==o||l[5]!==t||l[6]!==r||l[7]!==c?(d=(0,n.jsx)(tO,{"data-ui":"Container",...r,$width:c,forwardedAs:o,ref:t}),l[4]=o,l[5]=t,l[6]=r,l[7]=c,l[8]=d):d=l[8],d});tQ.displayName="ForwardRef(Container)";let tA=(0,d.zo)(tf).withConfig({displayName:"StyledGrid",componentId:"sc-v8t8oz-0"})(function(){return[eF,eA,eB,eP,eH,eD,eV,eW,eG]}),tB=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u,f,p,h,g;let m=(0,i.c)(26);m[0]!==e?({as:o,autoRows:d,autoCols:r,autoFlow:a,columns:c,gap:s,gapX:u,gapY:f,rows:h,children:l,...p}=e,m[0]=e,m[1]=o,m[2]=r,m[3]=a,m[4]=d,m[5]=l,m[6]=c,m[7]=s,m[8]=u,m[9]=f,m[10]=p,m[11]=h):(o=m[1],r=m[2],a=m[3],d=m[4],l=m[5],c=m[6],s=m[7],u=m[8],f=m[9],p=m[10],h=m[11]);let b="string"==typeof o?o:void 0,v=F(d),w=F(r),y=F(a),x=F(c),$=F(s),k=F(u),z=F(f),j=F(h);return m[12]!==o||m[13]!==l||m[14]!==t||m[15]!==p||m[16]!==b||m[17]!==v||m[18]!==w||m[19]!==y||m[20]!==x||m[21]!==$||m[22]!==k||m[23]!==z||m[24]!==j?(g=(0,n.jsx)(tA,{"data-as":b,"data-ui":"Grid",...p,$autoRows:v,$autoCols:w,$autoFlow:y,$columns:x,$gap:$,$gapX:k,$gapY:z,$rows:j,forwardedAs:o,ref:t,children:l}),m[12]=o,m[13]=l,m[14]=t,m[15]=p,m[16]=b,m[17]=v,m[18]=w,m[19]=y,m[20]=x,m[21]=$,m[22]=k,m[23]=z,m[24]=j,m[25]=g):g=m[25],g});tB.displayName="ForwardRef(Grid)";let tP=d.zo.div.withConfig({displayName:"StyledHeading",componentId:"sc-137lwim-0"})(function(e){let{$accent:t,$muted:o}=e,{font:n}=(0,r.aQ)(e.theme);return(0,d.iv)`
    ${t&&(0,d.iv)`
      color: var(--card-accent-fg-color);
    `}

    ${o&&(0,d.iv)`
      color: var(--card-muted-fg-color);
    `}

    & code {
      font-family: ${n.code.family};
      border-radius: 1px;
    }

    & a {
      text-decoration: none;
      border-radius: 1px;
      color: var(--card-link-color);
      outline: none;

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }

      &:focus {
        box-shadow:
          0 0 0 1px var(--card-bg-color),
          0 0 0 3px var(--card-focus-ring-color);
      }

      &:focus:not(:focus-visible) {
        box-shadow: none;
      }
    }

    & strong {
      font-weight: ${n.heading.weights.bold};
    }

    & svg {
      /* Certain popular CSS libraries changes the defaults for SVG display */
      /* Make sure SVGs are rendered as inline elements */
      display: inline;
    }

    & [data-sanity-icon] {
      vertical-align: baseline;
    }
  `},T,function(e){return L("heading",e)}),tH=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u,f,p;let h=(0,i.c)(22);h[0]!==e?({accent:d,align:o,children:r,muted:l,size:c,textOverflow:s,weight:u,...a}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=a,h[4]=d,h[5]=l,h[6]=c,h[7]=s,h[8]=u):(o=h[1],r=h[2],a=h[3],d=h[4],l=h[5],c=h[6],s=h[7],u=h[8]);let g=void 0!==d&&d,m=void 0!==l&&l,b=void 0===c?2:c,v=r;if("ellipsis"===s){let e;h[9]!==v?(e=(0,n.jsx)(e3,{children:v}),h[9]=v,h[10]=e):e=h[10],v=e}let w=F(o),y=F(b);return h[11]!==v?(f=(0,n.jsx)("span",{children:v}),h[11]=v,h[12]=f):f=h[12],h[13]!==g||h[14]!==m||h[15]!==t||h[16]!==a||h[17]!==w||h[18]!==y||h[19]!==f||h[20]!==u?(p=(0,n.jsx)(tP,{"data-ui":"Heading",...a,$accent:g,$align:w,$muted:m,$size:y,$weight:u,ref:t,children:f}),h[13]=g,h[14]=m,h[15]=t,h[16]=a,h[17]=w,h[18]=y,h[19]=f,h[20]=u,h[21]=p):p=h[21],p});tH.displayName="ForwardRef(Heading)";let tD=(0,d.zo)(tf).withConfig({displayName:"StyledInline",componentId:"sc-1pkiy6j-0"})(function(){return{lineHeight:"0","&&:not([hidden])":{display:"block"},"& > div":{display:"inline-block",verticalAlign:"middle"}}},function(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return I(t,e.$space,e=>{let t=N(.5===e?o[1]/2:o[e]);return{margin:`-${t} 0 0 -${t}`,"& > div":{padding:`${t} 0 0 ${t}`}}})}),tV=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s;let u=(0,i.c)(13);u[0]!==e?({as:o,children:r,space:l,...d}=e,u[0]=e,u[1]=o,u[2]=r,u[3]=d,u[4]=l):(o=u[1],r=u[2],d=u[3],l=u[4]),u[5]!==r?(c=a.Children.map(r,tW),u[5]=r,u[6]=c):c=u[6];let f=c,p=F(l);return u[7]!==o||u[8]!==f||u[9]!==d||u[10]!==p||u[11]!==t?(s=(0,n.jsx)(tD,{"data-ui":"Inline",...d,$space:p,forwardedAs:o,ref:t,children:f}),u[7]=o,u[8]=f,u[9]=d,u[10]=p,u[11]=t,u[12]=s):s=u[12],s});function tW(e){return e&&(0,n.jsx)("div",{children:e})}tV.displayName="ForwardRef(Inline)";let tG=d.zo.kbd.withConfig({displayName:"StyledKBD",componentId:"sc-1w7yd8w-0"})(e1,function(){return(0,d.iv)`
    --card-bg-color: var(--card-kbd-bg-color);
    --card-border-color: var(--card-kbd-border-color);
    --card-fg-color: var(--card-kbd-fg-color);

    box-shadow: inset 0 0 0 1px var(--card-border-color);
    background: var(--card-bg-color);
    font: inherit;

    vertical-align: top;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),tX=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u;let f=(0,i.c)(17);f[0]!==e?({children:o,fontSize:a,padding:d,radius:l,...r}=e,f[0]=e,f[1]=o,f[2]=r,f[3]=a,f[4]=d,f[5]=l):(o=f[1],r=f[2],a=f[3],d=f[4],l=f[5]);let p=void 0===a?0:a,h=void 0===d?1:d,g=F(void 0===l?2:l);return f[6]!==o||f[7]!==p?(c=(0,n.jsx)(th,{as:"span",size:p,weight:"semibold",children:o}),f[6]=o,f[7]=p,f[8]=c):c=f[8],f[9]!==h||f[10]!==c?(s=(0,n.jsx)(tf,{as:"span",padding:h,children:c}),f[9]=h,f[10]=c,f[11]=s):s=f[11],f[12]!==t||f[13]!==r||f[14]!==g||f[15]!==s?(u=(0,n.jsx)(tG,{"data-ui":"KBD",...r,$radius:g,ref:t,children:s}),f[12]=t,f[13]=r,f[14]=g,f[15]=s,f[16]=u):u=f[16],u});tX.displayName="ForwardRef(KBD)";let tY={name:"@sanity/ui/origin",fn({middlewareData:e,placement:t,rects:o}){let[r]=t.split("-"),n=o.floating.width,i=o.floating.height,a=e.shift?.x||0,d=e.shift?.y||0;if(n<=0||i<=0)return{};let{originX:l,originY:c}=["bottom","top"].includes(r)?{originX:tq(.5-a/n,0,1),originY:"bottom"===r?0:1}:{originX:"left"===r?1:0,originY:tq(.5-d/i,0,1)};return{data:{originX:l,originY:c}}}};function tq(e,t,o){return Math.min(Math.max(e,t),o)}function tK(e,t,o){let r=t.x-e.x,n=t.y-e.y;return tZ(e,t,Math.min(1,o/Math.sqrt(r*r+n*n)))}function tZ(e,t,o){return{x:e.x+(t.x-e.x)*o,y:e.y+(t.y-e.y)*o}}let tU=d.zo.div.withConfig({displayName:"StyledArrow",componentId:"sc-12vzy6c-0"})(({$w:e})=>(0,d.iv)`
    position: absolute;
    width: ${e}px;
    height: ${e}px;

    :empty + & {
      display: none;
    }

    & > svg {
      display: block;
      line-height: 0;
      transform-origin: ${e/2}px ${e/2}px;
    }

    [data-placement^='top'] > & {
      bottom: -${e}px;

      & > svg {
        transform: rotate(0);
      }
    }

    [data-placement^='right'] > & {
      left: -${e}px;

      & > svg {
        transform: rotate(90deg);
      }
    }

    [data-placement^='left'] > & {
      right: -${e}px;

      & > svg {
        transform: rotate(-90deg);
      }
    }

    [data-placement^='bottom'] > & {
      top: -${e}px;

      & > svg {
        transform: rotate(180deg);
      }
    }
  `),tJ=d.zo.path.withConfig({displayName:"StrokePath",componentId:"sc-12vzy6c-1"})`stroke:var(--card-shadow-outline-color);`,t0=d.zo.path.withConfig({displayName:"ShapePath",componentId:"sc-12vzy6c-2"})`fill:var(--card-bg-color);`,t1=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u,f,p;let h=(0,i.c)(29);h[0]!==e?({width:d,height:o,radius:a,...r}=e,h[0]=e,h[1]=o,h[2]=r,h[3]=a,h[4]=d):(o=h[1],r=h[2],a=h[3],d=h[4]);let g=void 0===a?0:a,{card:m}=U(),b=m.shadow.outline,v=d/2;h[5]!==v||h[6]!==o||h[7]!==g||h[8]!==d?(l=(function(e){let t=e.length,o=[];for(let r=0;r<t;r+=1){let t=e[r],n=e[r-1],i=e[r+1];if(n&&t.radius){let e=tK(t,n,t.radius),r=tK(t,i,t.radius),a=tZ(e,t,.5),d=tZ(t,r,.5);o.push({type:"point",...e}),o.push({type:"curve",curveEnd:r,startControl:a,endControl:d})}else o.push({type:"point",...t})}return o})([{x:0,y:0},{x:g,y:0,radius:g},{x:v,y:o-1,radius:g},{x:d-g,y:0,radius:g},{x:d,y:0}]).map((e,t)=>"point"===e.type?`${0===t?"M":"L"} ${e.x} ${e.y}`:"curve"===e.type?`C ${e.startControl.x} ${e.startControl.y} ${e.endControl.x} ${e.endControl.y} ${e.curveEnd.x} ${e.curveEnd.y}`:"").join(" "),h[5]=v,h[6]=o,h[7]=g,h[8]=d,h[9]=l):l=h[9];let w=l,y=`${w}`,x=`${w} M ${d} -1 M 0 -1 Z`,$=`0 0 ${d} ${d}`;h[10]!==b||h[11]!==d?(c=(0,n.jsx)("mask",{id:"stroke-mask",children:(0,n.jsx)("rect",{x:0,y:b,width:d,height:d,fill:"white"})}),h[10]=b,h[11]=d,h[12]=c):c=h[12];let k=2*b;return h[13]!==y||h[14]!==k?(s=(0,n.jsx)(tJ,{d:y,mask:"url(#stroke-mask)",strokeWidth:k}),h[13]=y,h[14]=k,h[15]=s):s=h[15],h[16]!==x?(u=(0,n.jsx)(t0,{d:x}),h[16]=x,h[17]=u):u=h[17],h[18]!==$||h[19]!==c||h[20]!==s||h[21]!==u||h[22]!==d?(f=(0,n.jsxs)("svg",{width:d,height:d,viewBox:$,children:[c,s,u]}),h[18]=$,h[19]=c,h[20]=s,h[21]=u,h[22]=d,h[23]=f):f=h[23],h[24]!==t||h[25]!==r||h[26]!==f||h[27]!==d?(p=(0,n.jsx)(tU,{...r,$w:d,ref:t,children:f}),h[24]=t,h[25]=r,h[26]=f,h[27]=d,h[28]=p):p=h[28],p});t1.displayName="ForwardRef(Arrow)";let t2=G("@sanity/ui/context/boundaryElement",null);function t3(e){let t,o;let r=(0,i.c)(5),{children:a,element:d}=e;r[0]!==d?(t={version:0,element:d},r[0]=d,r[1]=t):t=r[1];let l=t;return r[2]!==a||r[3]!==l?(o=(0,n.jsx)(t2.Provider,{value:l,children:a}),r[2]=a,r[3]=l,r[4]=o):o=r[4],o}function t4(e){return!!(e&&"object"==typeof e&&!Array.isArray(e))}t3.displayName="BoundaryElementProvider";let t5={version:0,element:null};function t6(){let e=(0,a.useContext)(t2);if(e&&(!t4(e)||0!==e.version))throw Error("useBoundaryElement(): the context value is not compatible");return e||t5}let t7=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f;let p=(0,i.c)(18),h=U();p[0]!==e?({children:r,media:o,...d}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=d):(o=p[1],r=p[2],d=p[3]);let g=o??h.media,[m,b]=(0,a.useState)(null),v=H(m)?.border.width??window.innerWidth;if(p[4]!==g||p[5]!==v){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]>t&&o.push(r);return o}(g,v);l=e.length?e.join(" "):void 0,p[4]=g,p[5]=v,p[6]=l}else l=p[6];let w=l;if(p[7]!==g||p[8]!==v){let e=function(e,t){let o=[];for(let r=0;r<e.length;r+=1)e[r]<=t&&o.push(r);return o}(g,v);c=e.length?e.join(" "):void 0,p[7]=g,p[8]=v,p[9]=c}else c=p[9];let y=c;return p[10]!==m?(s=()=>m,u=[m],p[10]=m,p[11]=s,p[12]=u):(s=p[11],u=p[12]),(0,a.useImperativeHandle)(t,s,u),p[13]!==r||p[14]!==w||p[15]!==y||p[16]!==d?(f=(0,n.jsx)("div",{"data-ui":"ElementQuery",...d,"data-eq-max":w,"data-eq-min":y,ref:b,children:r}),p[13]=r,p[14]=w,p[15]=y,p[16]=d,p[17]=f):f=p[17],f});function t8(e){if(!t4(e)||0!==e.version)throw Error("the context value is not compatible");if(!e)throw Error("components using `useLayer()` should be wrapped in a <LayerProvider>.");if(0===e.version)return e;throw Error("could not get layer context")}t7.displayName="ForwardRef(ElementQuery)";let t9=G("@sanity/ui/context/layer",null);function oe(e){let t,o,r,d,l,c,s;let u=(0,i.c)(19),{children:f,zOffset:p}=e,h=(0,a.useContext)(t9);u[0]!==h?(t=h&&t8(h),u[0]=h,u[1]=t):t=u[1];let g=t,m=g?.registerChild,b=(g?.level??0)+1,v=F(void 0===p?0:p),w=v.length-1,y=Math.min(ee(),w),x=g?g.zIndex+v[y]:v[y];u[2]===Symbol.for("react.memo_cache_sentinel")?(o={},u[2]=o):o=u[2];let[,$]=(0,a.useState)(o),[k,z]=(0,a.useState)(0),j=0===k;u[3]!==m||u[4]!==$?(r=e=>{let t=m?.(e);return void 0!==e?$(t=>{let o=t[e]??0,r={...t,[e]:o+1};return z(Object.keys(r).length),r}):z(oo),()=>{void 0!==e?$(t=>{let o={...t};return 1===o[e]?(delete o[e],z(Object.keys(o).length)):o[e]=o[e]-1,o}):z(ot),t?.()}},u[3]=m,u[4]=$,u[5]=r):r=u[5];let S=r;u[6]!==b||u[7]!==m?(d=()=>m?.(b),l=[b,m],u[6]=b,u[7]=m,u[8]=d,u[9]=l):(d=u[8],l=u[9]),(0,a.useEffect)(d,l),u[10]!==j||u[11]!==b||u[12]!==S||u[13]!==k||u[14]!==x?(c={version:0,isTopLayer:j,level:b,registerChild:S,size:k,zIndex:x},u[10]=j,u[11]=b,u[12]=S,u[13]=k,u[14]=x,u[15]=c):c=u[15];let R=c;return u[16]!==f||u[17]!==R?(s=(0,n.jsx)(t9.Provider,{value:R,children:f}),u[16]=f,u[17]=R,u[18]=s):s=u[18],s}function ot(e){return e-1}function oo(e){return e+1}function or(){let e=(0,i.c)(2),t=(0,a.useContext)(t9);if(!t)throw Error("useLayer(): missing context value");try{let o;return e[0]!==t?(o=t8(t),e[0]=t,e[1]=o):o=e[1],o}catch(e){throw e instanceof Error?Error(`useLayer(): ${e.message}`):Error(`useLayer(): ${e}`)}}oe.displayName="LayerProvider";let on=d.zo.div.withConfig({displayName:"StyledLayer",componentId:"sc-16kojrv-0"})({position:"relative"}),oi=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f,p,h,g;let m=(0,i.c)(22);m[0]!==e?({children:o,onActivate:r,onFocus:d,style:c,...l}=e,m[0]=e,m[1]=o,m[2]=r,m[3]=d,m[4]=l,m[5]=c):(o=m[1],r=m[2],d=m[3],l=m[4],c=m[5]);let b=void 0===c?y:c,{zIndex:v,isTopLayer:w}=or(),x=(0,a.useRef)(null),$=(0,a.useRef)(null),z=(0,a.useRef)(w);m[6]===Symbol.for("react.memo_cache_sentinel")?(s=()=>$.current,m[6]=s):s=m[6],(0,a.useImperativeHandle)(t,s),m[7]!==w||m[8]!==r?(u=()=>{z.current!==w&&w&&r?.({activeElement:x.current}),z.current=w},f=[w,r],m[7]=w,m[8]=r,m[9]=u,m[10]=f):(u=m[9],f=m[10]),(0,a.useEffect)(u,f),m[11]!==w||m[12]!==d?(p=e=>{d?.(e);let t=$.current,o=document.activeElement;!w||!t||!o||k(o)&&E(t,o)&&(x.current=o)},m[11]=w,m[12]=d,m[13]=p):p=m[13];let j=p;return m[14]!==b||m[15]!==v?(h={...b,zIndex:v},m[14]=b,m[15]=v,m[16]=h):h=m[16],m[17]!==o||m[18]!==j||m[19]!==l||m[20]!==h?(g=(0,n.jsx)(on,{...l,"data-ui":"Layer",onFocus:j,ref:$,style:h,children:o}),m[17]=o,m[18]=j,m[19]=l,m[20]=h,m[21]=g):g=m[21],g}),oa=(0,a.forwardRef)(function(e,t){let o,r,a,d,l;let c=(0,i.c)(11);c[0]!==e?({children:o,zOffset:a,...r}=e,c[0]=e,c[1]=o,c[2]=r,c[3]=a):(o=c[1],r=c[2],a=c[3]);let s=void 0===a?1:a;return c[4]!==o||c[5]!==t||c[6]!==r?(d=(0,n.jsx)(oi,{...r,ref:t,children:o}),c[4]=o,c[5]=t,c[6]=r,c[7]=d):d=c[7],c[8]!==d||c[9]!==s?(l=(0,n.jsx)(oe,{zOffset:s,children:d}),c[8]=d,c[9]=s,c[10]=l):l=c[10],l});oa.displayName="ForwardRef(Layer)";let od="@sanity/ui/context/portal",ol=Symbol.for(`${od}/element`);W[ol]=null;let oc=G(od,{version:0,boundaryElement:null,get element(){return typeof document>"u"?null:(W[ol]||(W[ol]=document.createElement("div"),W[ol].setAttribute("data-portal",""),document.body.appendChild(W[ol])),W[ol])}});function os(){let e=(0,a.useContext)(oc);if(!e)throw Error("usePortal(): missing context value");if(!t4(e)||0!==e.version)throw Error("usePortal(): the context value is not compatible");return e}function ou(e){let t;let o=(0,i.c)(3),{children:r,__unstable_name:n}=e,a=os(),d=(n?a.elements&&a.elements[n]:a.element)||a.elements?.default;return d?(o[0]!==r||o[1]!==d?(t=(0,g.createPortal)(r,d),o[0]=r,o[1]=d,o[2]=t):t=o[2],t):null}function of(e){let t,o;let r=(0,i.c)(7),{boundaryElement:d,children:l,element:c,__unstable_elements:s}=e,u=function(e){let t=(0,a.useRef)(e);return function(e,t){if(!e||!t)return e===t;let o=Object.keys(e),r=Object.keys(t);return o.length===r.length&&o.every(o=>e[o]===t[o])}(t.current,e)||(t.current=e),t.current}(s),f=(0,a.useSyncExternalStore)(og,oh,op),p=d||null,h=c||f;r[0]!==u||r[1]!==p||r[2]!==h?(t={version:0,boundaryElement:p,element:h,elements:u},r[0]=u,r[1]=p,r[2]=h,r[3]=t):t=r[3];let g=t;return r[4]!==l||r[5]!==g?(o=(0,n.jsx)(oc.Provider,{value:g,children:l}),r[4]=l,r[5]=g,r[6]=o):o=r[6],o}function op(){return null}function oh(){return document.body}ou.displayName="Portal",of.displayName="PortalProvider";let og=()=>()=>{},om=d.zo.div.withConfig({displayName:"StyledSrOnly",componentId:"sc-mubr0c-0"})`display:block;width:0;height:0;position:absolute;overflow:hidden;overflow:clip;`;(0,a.forwardRef)(function(e,t){let o;let r=(0,i.c)(4),{as:a,children:d}=e;return r[0]!==a||r[1]!==d||r[2]!==t?(o=(0,n.jsx)(om,{"aria-hidden":!0,as:a,"data-ui":"SrOnly",ref:t,children:d}),r[0]=a,r[1]=d,r[2]=t,r[3]=o):o=r[3],o}).displayName="ForwardRef(SrOnly)";let ob=d.zo.div.withConfig({displayName:"StyledVirtualList",componentId:"sc-dlqsj4-0"})`position:relative;`,ov=d.zo.div.withConfig({displayName:"ItemWrapper",componentId:"sc-dlqsj4-1"})`position:absolute;left:0;right:0;`,ow=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f,p,h,g,m,b,v,w,y,x,$,k;let z=(0,i.c)(56);z[0]!==e?({as:c,gap:s,getItemKey:o,items:u,onChange:r,renderItem:d,...l}=e,z[0]=e,z[1]=o,z[2]=r,z[3]=d,z[4]=l,z[5]=c,z[6]=s,z[7]=u):(o=z[1],r=z[2],d=z[3],l=z[4],c=z[5],s=z[6],u=z[7]);let j=void 0===c?"div":c,S=void 0===s?0:s;z[8]!==u?(f=void 0===u?[]:u,z[8]=u,z[9]=f):f=z[9];let R=f,{space:C}=U(),E=(0,a.useRef)(null),N=(0,a.useRef)(null),[I,_]=(0,a.useState)(0),[M,L]=(0,a.useState)(0),[T,F]=(0,a.useState)(-1);z[10]===Symbol.for("react.memo_cache_sentinel")?(p=()=>E.current,z[10]=p):p=z[10],(0,a.useImperativeHandle)(t,p),z[11]===Symbol.for("react.memo_cache_sentinel")?(h=()=>{if(!N.current)return;let e=N.current.firstChild;e instanceof HTMLElement&&F(e.offsetHeight)},z[11]=h):h=z[11],z[12]!==d?(g=[d],z[12]=d,z[13]=g):g=z[13],(0,a.useEffect)(h,g),z[14]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{if(!E.current)return;let e=function(e){let t=e;for(;t&&!function(e){if(!(e instanceof Element))return!1;let t=window.getComputedStyle(e);return t.overflowX.includes("auto")||t.overflowX.includes("scroll")||t.overflowY.includes("auto")||t.overflowY.includes("scroll")}(t);)t=t.parentNode;return t}(E.current.parentNode);if(e){if(!(e instanceof HTMLElement))return;let t=()=>{_(e.scrollTop)};e.addEventListener("scroll",t,{passive:!0});let o=new B(e=>{L(e[0].contentRect.height)});return o.observe(e),t(),()=>{e.removeEventListener("scroll",t),o.unobserve(e),o.disconnect()}}let t=()=>{_(window.scrollY)},o=()=>{L(window.innerHeight)};return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",o),L(window.innerHeight),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",o)}},b=[],z[14]=m,z[15]=b):(m=z[14],b=z[15]),(0,a.useEffect)(m,b);let O=R.length,Q=T?O*(T+C[S])-C[S]:0,A=Q?Math.max(Math.floor(I/Q*O)-2,0):0,P=Q?Math.ceil((I+M)/Q*O)+1:0;z[16]!==A||z[17]!==S||z[18]!==T||z[19]!==r||z[20]!==M||z[21]!==I||z[22]!==C||z[23]!==P?(w=()=>{r&&r({fromIndex:A,gap:C[S],itemHeight:T,scrollHeight:M,scrollTop:I,toIndex:P})},v=[A,S,T,r,M,I,C,P],z[16]=A,z[17]=S,z[18]=T,z[19]=r,z[20]=M,z[21]=I,z[22]=C,z[23]=P,z[24]=v,z[25]=w):(v=z[24],w=z[25]),(0,a.useEffect)(w,v);e:{let e;if(!d||0===R.length){y=null;break e}if(-1===T){let e,t;z[26]!==R[0]||z[27]!==d?(e=d(R[0]),z[26]=R[0],z[27]=d,z[28]=e):e=z[28],z[29]!==e?(t=[(0,n.jsx)(ov,{children:e},0)],z[29]=e,z[30]=t):t=z[30],y=t;break e}if(z[31]!==A||z[32]!==S||z[33]!==o||z[34]!==T||z[35]!==R||z[36]!==d||z[37]!==C||z[38]!==P){let t;z[40]!==A||z[41]!==S||z[42]!==o||z[43]!==T||z[44]!==d||z[45]!==C?(t=(e,t)=>{let r=A+t,i=d(e),a=o?o(e,r):r;return(0,n.jsx)(ov,{style:{top:r*(T+C[S])},children:i},a)},z[40]=A,z[41]=S,z[42]=o,z[43]=T,z[44]=d,z[45]=C,z[46]=t):t=z[46],e=R.slice(A,P).map(t),z[31]=A,z[32]=S,z[33]=o,z[34]=T,z[35]=R,z[36]=d,z[37]=C,z[38]=P,z[39]=e}else e=z[39];y=e}let H=y;z[47]!==Q?(x={height:Q},z[47]=Q,z[48]=x):x=z[48];let D=x;return z[49]!==H||z[50]!==D?($=(0,n.jsx)("div",{ref:N,style:D,children:H}),z[49]=H,z[50]=D,z[51]=$):$=z[51],z[52]!==j||z[53]!==l||z[54]!==$?(k=(0,n.jsx)(ob,{as:j,"data-ui":"VirtualList",...l,ref:E,children:$}),z[52]=j,z[53]=l,z[54]=$,z[55]=k):k=z[55],k});function oy(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,o=t&&"isReactWarning"in t&&t.isReactWarning;return o?e.ref:(o=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}ow.displayName="ForwardRef(VirtualList)";let ox=[0,0,0,0],o$={top:["bottom","left","right"],"top-start":["bottom-start","left-start","right-start"],"top-end":["bottom-end","left-end","right-end"],bottom:["top","left","right"],"bottom-start":["top-start","left-start","right-start"],"bottom-end":["top-end","left-end","right-end"],left:["right","top","bottom"],"left-start":["right-start","top-start","bottom-start"],"left-end":["right-end","top-end","bottom-end"],right:["left","top","bottom"],"right-start":["left-start","top-start","bottom-start"],"right-end":["left-end","top-end","bottom-end"]},ok=(0,d.zo)(f.E.create(tC)).withConfig({displayName:"MotionCard",componentId:"sc-ihg31s-0"})`&:not([hidden]){display:flex;}flex-direction:column;width:max-content;min-width:min-content;will-change:transform;`,oz=(0,d.zo)(f.E.create(tv)).withConfig({displayName:"MotionFlex",componentId:"sc-ihg31s-1"})`will-change:opacity;`,oj=(0,a.memo)((0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u,f,p,h,g,m,b,v,w,y,$,k,z,j,S,R,C,E,N,I,_,M,L,T;let F=(0,i.c)(66);F[0]!==e?({__unstable_margins:s,animate:o,arrow:r,arrowRef:a,arrowX:d,arrowY:l,children:c,padding:h,placement:g,originX:u,originY:f,overflow:p,radius:m,scheme:v,shadow:w,strategy:y,style:$,tone:k,width:z,x:j,y:S,...b}=e,F[0]=e,F[1]=o,F[2]=r,F[3]=a,F[4]=d,F[5]=l,F[6]=c,F[7]=s,F[8]=u,F[9]=f,F[10]=p,F[11]=h,F[12]=g,F[13]=m,F[14]=b,F[15]=v,F[16]=w,F[17]=y,F[18]=$,F[19]=k,F[20]=z,F[21]=j,F[22]=S):(o=F[1],r=F[2],a=F[3],d=F[4],l=F[5],c=F[6],s=F[7],u=F[8],f=F[9],p=F[10],h=F[11],g=F[12],m=F[13],b=F[14],v=F[15],w=F[16],y=F[17],$=F[18],k=F[19],z=F[20],j=F[21],S=F[22]);let{zIndex:O}=or(),Q=s||ox,A=(j??0)+Q[3],B=(S??0)+Q[0],P=o?"transform":void 0;F[23]!==u||F[24]!==f||F[25]!==y||F[26]!==$||F[27]!==P||F[28]!==z||F[29]!==A||F[30]!==B||F[31]!==O?(R={left:A,originX:u,originY:f,position:y,top:B,width:z,zIndex:O,willChange:P,...$},F[23]=u,F[24]=f,F[25]=y,F[26]=$,F[27]=P,F[28]=z,F[29]=A,F[30]=B,F[31]=O,F[32]=R):R=F[32];let H=R,D=null!==d?d:void 0,V=null!==l?l:void 0;F[33]!==D||F[34]!==V?(C={left:D,top:V,right:void 0,bottom:void 0},F[33]=D,F[34]=V,F[35]=C):C=F[35];let W=C,G=b;return F[36]!==o?(E=o?["hidden","initial"]:void 0,F[36]=o,F[37]=E):E=F[37],F[38]!==o?(N=o?["visible","scaleIn"]:void 0,F[38]=o,F[39]=N):N=F[39],F[40]!==o?(I=o?["hidden","scaleOut"]:void 0,F[40]=o,F[41]=I):I=F[41],F[42]!==c||F[43]!==h?(_=(0,n.jsx)(tv,{direction:"column",flex:1,padding:h,children:c}),F[42]=c,F[43]=h,F[44]=_):_=F[44],F[45]!==p||F[46]!==_?(M=(0,n.jsx)(oz,{"data-ui":"Popover__wrapper",direction:"column",flex:1,overflow:p,variants:x.children,transition:x.transition,children:_}),F[45]=p,F[46]=_,F[47]=M):M=F[47],F[48]!==r||F[49]!==a||F[50]!==W?(L=r&&(0,n.jsx)(t1,{ref:a,style:W,width:19,height:8,radius:2}),F[48]=r,F[49]=a,F[50]=W,F[51]=L):L=F[51],F[52]!==g||F[53]!==m||F[54]!==t||F[55]!==H||F[56]!==v||F[57]!==w||F[58]!==M||F[59]!==L||F[60]!==G||F[61]!==E||F[62]!==N||F[63]!==I||F[64]!==k?(T=(0,n.jsxs)(ok,{"data-ui":"Popover",...G,"data-placement":g,radius:m,ref:t,scheme:v,shadow:w,sizing:"border",style:H,tone:k,variants:x.card,transition:x.transition,initial:E,animate:N,exit:I,children:[M,L]}),F[52]=g,F[53]=m,F[54]=t,F[55]=H,F[56]=v,F[57]=w,F[58]=M,F[59]=L,F[60]=G,F[61]=E,F[62]=N,F[63]=I,F[64]=k,F[65]=T):T=F[65],T}));oj.displayName="Memo(ForwardRef(PopoverCard))";let oS=()=>{let e;let t=(0,i.c)(2),{zIndex:o}=or();return t[0]!==o?(e=(0,n.jsx)("div",{style:{height:"100vh",inset:0,position:"fixed",width:"100vw",zIndex:o}}),t[0]=o,t[1]=e):e=t[1],e},oR=(0,a.memo)((0,a.forwardRef)(function(e,t){let{container:o,layer:r}=U(),i=t6(),{__unstable_margins:d=ox,animate:l=!1,arrow:c=!1,boundaryElement:f=i.element,children:h,constrainSize:g=!1,content:m,disabled:b,fallbackPlacements:v=e.fallbackPlacements??o$[e.placement??"bottom"],matchReferenceWidth:w,floatingBoundary:y=e.boundaryElement??i.element,modal:x,onActivate:$,open:k,overflow:z="hidden",padding:j,placement:S="bottom",placementStrategy:R="flip",portal:C,preventOverflow:E=!0,radius:N=3,referenceBoundary:I=e.boundaryElement??i.element,referenceElement:_,scheme:M,shadow:L=3,tone:T="inherit",width:O="auto",zOffset:Q=r.popover.zOffset,updateRef:A,...B}=e,P=!er()&&l,D=H(f)?.border,V=F(j),W=F(N),G=F(L),X=F(O),Y=F(Q),q=(0,a.useRef)(null),K=(0,a.useRef)(null),Z="viewport";(0,a.useImperativeHandle)(t,()=>q.current);let J=ee(),et=g||E?D?.width:void 0,eo=function(e){let{container:t,mediaIndex:o,width:r}=e,n=r[o],i=void 0===n?r[r.length-1]:n;return"number"==typeof i?t[i]:void 0}({container:o,mediaIndex:J,width:X}),en=(0,a.useRef)(eo);(0,a.useEffect)(()=>{en.current=eo},[eo]);let ei=function(e){let{boundaryWidth:t,currentWidth:o}=e;if(!(void 0===o&&void 0===t))return Math.min(o??1/0,(t||1/0)-8)}({boundaryWidth:et,currentWidth:eo}),ea=(0,a.useRef)(ei);(0,a.useEffect)(()=>{ea.current=ei},[ei]);let ed=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{let e=q.current;if(!k||!e)return;let t=ed.current;w?void 0!==t&&(e.style.width=`${t}px`):void 0!==eo&&(e.style.width=`${eo}px`),"number"==typeof ei&&(e.style.maxWidth=`${ei}px`)},[eo,w,ei,k]);let el=(0,a.useMemo)(()=>{let e=[];return(g||E)&&("autoPlacement"===R?e.push((0,u.X5)({allowedPlacements:[S].concat(v)})):e.push((0,u.RR)({boundary:y||void 0,fallbackPlacements:v,padding:4,rootBoundary:Z}))),e.push((0,u.cv)({mainAxis:4})),(g||w)&&e.push(function(e){let{apply:t,margins:o,padding:r=0}=e;return{name:"@sanity/ui/size",async fn(n){let{elements:i,placement:a,platform:d,rects:l}=n,{floating:c,reference:u}=l,f=await (0,s.US)(n,{altBoundary:!0,boundary:e.boundaryElement||void 0,elementContext:"floating",padding:r,rootBoundary:"viewport"}),p=1/0,h=1/0,g=c.width,m=c.height;a.includes("top")&&(p=g-(f.left+f.right),h=m-f.top),a.includes("right")&&(p=g-f.right,h=m-(f.top+f.bottom)),a.includes("bottom")&&(p=g-(f.left+f.right),h=m-f.bottom),a.includes("left")&&(p=g-f.left,h=m-(f.top+f.bottom)),t({availableWidth:p-o[1]-o[3],availableHeight:h-o[0]-o[2],elements:i,referenceWidth:u.width-o[1]-o[3]});let b=await d.getDimensions(i.floating),v=b.height;return g!==b.width||m!==v?{reset:{rects:!0}}:{}}}}({apply({availableWidth:e,availableHeight:t,elements:o,referenceWidth:r}){ed.current=r;let n=en.current,i=ea.current;w?o.floating.style.width=`${r}px`:void 0!==n&&(o.floating.style.width=`${n}px`),g&&(o.floating.style.maxWidth=`${Math.min(e,i??1/0)}px`,o.floating.style.maxHeight=`${t}px`)},boundaryElement:y||void 0,margins:d,padding:4})),E&&e.push((0,u.uY)({boundary:y||void 0,rootBoundary:Z,padding:4})),c&&e.push((0,u.x7)({element:K,padding:4})),P&&e.push(tY),e.push((0,u.Cp)({boundary:I||void 0,padding:4,strategy:"referenceHidden"})),e},[P,c,g,v,S,R,y,d,w,E,I]),{x:ec,y:es,middlewareData:eu,placement:ef,refs:ep,strategy:eh,update:eg}=(0,u.YF)({middleware:el,placement:S,whileElementsMounted:s.Me,elements:_?{reference:_}:void 0}),em=eu.hide?.referenceHidden,eb=eu.arrow?.x,ev=eu.arrow?.y,ew=eu["@sanity/ui/origin"]?.originX,ey=eu["@sanity/ui/origin"]?.originY,ex=(0,a.useCallback)(e=>{K.current=e},[]),e$=(0,a.useCallback)(e=>{q.current=e,ep.setFloating(e)},[ep]),ek=(0,a.useCallback)(e=>{ep.setReference(e);let t=oy(h);"function"==typeof t?t(e):t&&(t.current=e)},[h,ep]),ez=(0,a.useMemo)(()=>_?h:h?(0,a.cloneElement)(h,{ref:ek}):null,[h,_,ek]);if((0,a.useEffect)(()=>{A&&("function"==typeof A?A(eg):A&&(A.current=eg))},[eg,A]),b)return h||(0,n.jsx)(n.Fragment,{});let ej=(0,n.jsxs)(oe,{zOffset:Y,children:[x&&(0,n.jsx)(oS,{}),(0,n.jsx)(oj,{...B,__unstable_margins:d,animate:P,arrow:c,arrowRef:ex,arrowX:eb,arrowY:ev,hidden:em,overflow:z,padding:V,placement:ef,radius:W,ref:e$,scheme:M,shadow:G,originX:ew,originY:ey,strategy:eh,tone:T,width:w?ed.current:eo,x:ec,y:es,children:m})]}),eS=k&&(C?(0,n.jsx)(ou,{__unstable_name:"string"==typeof C?C:void 0,children:ej}):ej);return(0,n.jsxs)(n.Fragment,{children:[P?(0,n.jsx)(p.M,{children:eS}):eS,ez]})}));oR.displayName="Memo(ForwardRef(Popover))";let oC=d.zo.div.withConfig({displayName:"StyledRadio",componentId:"sc-ccrwkf-0"})(function(){return(0,d.iv)`
    position: relative;

    &:not([hidden]) {
      display: inline-block;
    }

    &[data-read-only] {
      outline: 1px solid red;
    }
  `}),oE=d.zo.input.withConfig({displayName:"Input",componentId:"sc-ccrwkf-1"})(function(e){let{color:t,input:o}=(0,r.aQ)(e.theme),n=(o.radio.size-o.radio.markSize)/2;return(0,d.iv)`
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    z-index: 1;
    padding: 0;
    margin: 0;
    border-radius: ${N(o.radio.size/2)};
    border: none;

    /* enabled */
    & + span {
      display: block;
      position: relative;
      height: ${N(o.radio.size)};
      width: ${N(o.radio.size)};
      border-radius: ${N(o.radio.size/2)};
      background: ${t.input.default.enabled.bg};
      box-shadow: ${eS({color:t.input.default.enabled.border,width:o.border.width})};

      &::after {
        content: '';
        position: absolute;
        top: ${N(n)};
        left: ${N(n)};
        height: ${N(o.radio.markSize)};
        width: ${N(o.radio.markSize)};
        border-radius: ${N(o.radio.markSize/2)};
        background: ${t.input.default.enabled.fg};
        opacity: 0;
      }
    }

    /* focused */
    &:not(:disabled):focus + span {
      box-shadow: ${eR({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.radio.focusRing})};
    }

    &:not(:disabled):focus:not(:focus-visible) + span {
      box-shadow: ${eS({color:t.input.default.enabled.border,width:o.border.width})};
    }

    &:checked + span::after {
      opacity: 1;
    }

    /* customValidity */
    &[data-error] + span {
      background-color: ${t.input.invalid.enabled.border};
      box-shadow: ${eS({width:o.border.width,color:t.input.invalid.enabled.muted.bg})};
      &::after {
        background: ${t.input.invalid.enabled.muted.bg};
      }
    }

    /* read only */
    &[data-read-only] + span {
      box-shadow: 0 0 0 1px ${t.input.default.readOnly.border};
      background: ${t.input.default.readOnly.bg};

      &::after {
        background: ${t.input.default.readOnly.border};
      }
    }

    /* disabled */
    &:not([data-read-only]):disabled + span {
      box-shadow: 0 0 0 1px ${t.input.default.disabled.border};
      background: ${t.input.default.disabled.bg};

      &::after {
        background: ${t.input.default.disabled.border};
      }
    }
  `}),oN=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f,p,h;let g=(0,i.c)(19);g[0]!==e?({className:o,disabled:d,style:s,customValidity:r,readOnly:l,...c}=e,g[0]=e,g[1]=o,g[2]=r,g[3]=d,g[4]=l,g[5]=c,g[6]=s):(o=g[1],r=g[2],d=g[3],l=g[4],c=g[5],s=g[6]);let m=(0,a.useRef)(null);g[7]===Symbol.for("react.memo_cache_sentinel")?(u=()=>m.current,g[7]=u):u=g[7],(0,a.useImperativeHandle)(t,u),A(m,r);let b=!d&&l?"":void 0,v=r?"":void 0,w=d||l;return g[8]!==l||g[9]!==c||g[10]!==b||g[11]!==v||g[12]!==w?(f=(0,n.jsx)(oE,{"data-read-only":b,"data-error":v,...c,disabled:w,readOnly:l,ref:m,type:"radio"}),g[8]=l,g[9]=c,g[10]=b,g[11]=v,g[12]=w,g[13]=f):f=g[13],g[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,n.jsx)("span",{}),g[14]=p):p=g[14],g[15]!==o||g[16]!==s||g[17]!==f?(h=(0,n.jsxs)(oC,{className:o,"data-ui":"Radio",style:s,children:[f,p]}),g[15]=o,g[16]=s,g[17]=f,g[18]=h):h=g[18],h});function oI(e){let{font:t}=(0,r.aQ)(e.theme);return(0,d.iv)`
    -webkit-font-smoothing: antialiased;
    appearance: none;
    border: 0;
    font-family: ${t.text.family};
    color: inherit;
    width: 100%;
    outline: none;
    margin: 0;

    &:disabled {
      opacity: 1;
    }
  `}function o_(e){let{color:t,input:o}=(0,r.aQ)(e.theme);return(0,d.iv)`
    /* enabled */
    background-color: ${t.input.default.enabled.bg};
    color: ${t.input.default.enabled.fg};
    box-shadow: ${eS({color:t.input.default.enabled.border,width:o.border.width})};

    /* hovered */
    @media (hover: hover) {
      &:not(:disabled):hover {
        background-color: ${t.input.default.hovered.bg};
        color: ${t.input.default.hovered.fg};
        box-shadow: ${eS({color:t.input.default.hovered.border,width:o.border.width})};
      }
    }

    /* focused */
    &:not(:disabled):focus {
      box-shadow: ${eR({border:{width:o.border.width,color:t.input.default.enabled.border},focusRing:o.select.focusRing})};
    }

    /* read-only */
    &[data-read-only] {
      background-color: ${t.input.default.readOnly.bg};
      color: ${t.input.default.readOnly.fg};
      box-shadow: ${eS({color:t.input.default.readOnly.border,width:o.border.width})};
    }

    /* disabled */
    &:not([data-read-only]):disabled {
      background-color: ${t.input.default.disabled.bg};
      color: ${t.input.default.disabled.fg};
      box-shadow: ${eS({color:t.input.default.disabled.border,width:o.border.width})};
    }
  `}function oM(e){let{$fontSize:t}=e,{font:o,media:n}=(0,r.aQ)(e.theme);return I(n,t,e=>{var t;return{fontSize:N((t=o.text.sizes[e]||o.text.sizes[2]).fontSize),lineHeight:`${N(t.lineHeight)}`}})}oN.displayName="ForwardRef(Radio)";let oL=d.zo.div.withConfig({displayName:"StyledSelect",componentId:"sc-5mxno7-0"})(function(){return(0,d.iv)`
    position: relative;
    width: -moz-available;
    width: -webkit-fill-available;
    width: stretch;

    &:not([hidden]) {
      display: inline-block;
    }
  `}),oT=d.zo.select.withConfig({displayName:"Input",componentId:"sc-5mxno7-1"})(function(){return[e1,oI,o_,oM,eY]}),oF=(0,d.zo)(tf).withConfig({displayName:"IconBox",componentId:"sc-5mxno7-2"})(function(e){let{color:t}=(0,r.aQ)(e.theme);return(0,d.iv)`
    pointer-events: none;
    position: absolute;
    top: 0;
    right: 0;

    /* enabled */
    --card-fg-color: ${t.input.default.enabled.fg};

    /* hover */
    @media (hover: hover) {
      select:not(disabled):not(:read-only):hover + && {
        --card-fg-color: ${t.input.default.hovered.fg};
      }
    }

    /* disabled */
    select:disabled + && {
      --card-fg-color: ${t.input.default.disabled.fg};
    }

    /* read-only */
    select[data-read-only] + && {
      --card-fg-color: ${t.input.default.readOnly.fg};
    }
  `}),oO=(0,a.forwardRef)(function(e,t){let o,r,d,l,s,u,f,p,h,g,m,b,v,w,y;let x=(0,i.c)(29);x[0]!==e?({children:o,customValidity:r,disabled:d,fontSize:u,padding:f,radius:p,readOnly:l,space:h,...s}=e,x[0]=e,x[1]=o,x[2]=r,x[3]=d,x[4]=l,x[5]=s,x[6]=u,x[7]=f,x[8]=p,x[9]=h):(o=x[1],r=x[2],d=x[3],l=x[4],s=x[5],u=x[6],f=x[7],p=x[8],h=x[9]);let $=void 0===u?2:u,k=void 0===f?3:f,z=void 0===p?2:p,j=void 0===h?3:h,S=(0,a.useRef)(null);x[10]===Symbol.for("react.memo_cache_sentinel")?(g=()=>S.current,x[10]=g):g=x[10],(0,a.useImperativeHandle)(t,g),A(S,r);let R=!d&&l?"":void 0,C=F($),E=F(k),N=F(z),I=F(j),_=d||l;return x[11]!==o||x[12]!==s||x[13]!==_||x[14]!==R||x[15]!==C||x[16]!==E||x[17]!==N||x[18]!==I?(m=(0,n.jsx)(oT,{"data-read-only":R,"data-ui":"Select",...s,$fontSize:C,$padding:E,$radius:N,$space:I,disabled:_,ref:S,children:o}),x[11]=o,x[12]=s,x[13]=_,x[14]=R,x[15]=C,x[16]=E,x[17]=N,x[18]=I,x[19]=m):m=x[19],x[20]===Symbol.for("react.memo_cache_sentinel")?(b=(0,n.jsx)(c.v4q,{}),x[20]=b):b=x[20],x[21]!==$?(v=(0,n.jsx)(th,{size:$,children:b}),x[21]=$,x[22]=v):v=x[22],x[23]!==k||x[24]!==v?(w=(0,n.jsx)(oF,{padding:k,children:v}),x[23]=k,x[24]=v,x[25]=w):w=x[25],x[26]!==m||x[27]!==w?(y=(0,n.jsxs)(oL,{"data-ui":"Select",children:[m,w]}),x[26]=m,x[27]=w,x[28]=y):y=x[28],y});oO.displayName="ForwardRef(Select)";let oQ={"&&:not([hidden])":{display:"grid"},'&[data-as="ul"],&[data-as="ol"]':{listStyle:"none"},gridTemplateColumns:"minmax(0, 1fr)",gridAutoRows:"min-content"},oA=(0,d.zo)(tf).withConfig({displayName:"StyledStack",componentId:"sc-8dpfq2-0"})(function(){return oQ},function(e){let{media:t,space:o}=(0,r.aQ)(e.theme);return I(t,e.$space,e=>({gridGap:N(o[e])}))}),oB=(0,a.forwardRef)(function(e,t){let o,r,a,d;let l=(0,i.c)(10);l[0]!==e?({as:o,space:a,...r}=e,l[0]=e,l[1]=o,l[2]=r,l[3]=a):(o=l[1],r=l[2],a=l[3]);let c="string"==typeof o?o:void 0,s=F(a);return l[4]!==o||l[5]!==t||l[6]!==r||l[7]!==c||l[8]!==s?(d=(0,n.jsx)(oA,{"data-as":c,"data-ui":"Stack",...r,$space:s,forwardedAs:o,ref:t}),l[4]=o,l[5]=t,l[6]=r,l[7]=c,l[8]=s,l[9]=d):d=l[9],d});oB.displayName="ForwardRef(Stack)";let oP=d.zo.span.withConfig({displayName:"StyledSwitch",componentId:"sc-dw1foe-0"})(function(){return(0,d.iv)`
    position: relative;
    &:not([hidden]) {
      display: inline-block;
    }
  `}),oH=d.zo.input.withConfig({displayName:"Input",componentId:"sc-dw1foe-1"})(function(){return(0,d.iv)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    outline: none;
    padding: 0;
    margin: 0;

    /* Place the input element above the representation element */
    z-index: 1;
  `}),oD=d.zo.span.withConfig({displayName:"Representation",componentId:"sc-dw1foe-2"})(function(e){let{color:t,input:o}=(0,r.aQ)(e.theme);return(0,d.iv)`
    --switch-bg-color: ${t.input.default.enabled.border};
    --switch-fg-color: ${t.input.default.enabled.bg};
    --switch-box-shadow: none;

    &:not([hidden]) {
      display: block;
    }
    position: relative;
    width: ${N(o.switch.width)};
    height: ${N(o.switch.height)};
    border-radius: ${N(o.switch.height/2)};

    /* Make sure it’s not possible to interact with the wrapper element */
    pointer-events: none;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      box-shadow: var(--switch-box-shadow);
      border-radius: inherit;
    }

    /* Focus styles */
    input:focus + && {
      --switch-box-shadow: ${eR({focusRing:o.switch.focusRing})};
    }

    input:focus:not(:focus-visible) + && {
      --switch-box-shadow: none;
    }

    input:checked + && {
      --switch-bg-color: ${t.input.default.enabled.fg};
      --switch-fg-color: ${t.input.default.enabled.bg};
    }

    @media (hover: hover) {
      input:not(:disabled):hover + && {
        --switch-bg-color: ${t.input.default.hovered.border};
        --switch-fg-color: ${t.input.default.hovered.bg};
      }

      input:not(:disabled):checked:hover + && {
        --switch-bg-color: ${t.input.default.enabled.fg};
        --switch-fg-color: ${t.input.default.enabled.bg};
      }
    }

    input:not([data-read-only]):disabled + && {
      --switch-bg-color: ${t.input.default.disabled.border};
      --switch-fg-color: ${t.input.default.disabled.bg};
    }

    input[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.border};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }

    input:checked[data-read-only]:disabled + && {
      --switch-bg-color: ${t.input.default.readOnly.fg};
      --switch-fg-color: ${t.input.default.readOnly.bg};
    }
  `}),oV=d.zo.span.withConfig({displayName:"Track",componentId:"sc-dw1foe-3"})(function(e){let{input:t}=(0,r.aQ)(e.theme);return(0,d.iv)`
    &:not([hidden]) {
      display: block;
    }
    background-color: var(--switch-bg-color);
    position: absolute;
    left: 0;
    top: 0;
    width: ${N(t.switch.width)};
    height: ${N(t.switch.height)};
    border-radius: ${N(t.switch.height/2)};
  `}),oW=d.zo.span.withConfig({displayName:"Thumb",componentId:"sc-dw1foe-4"})(function(e){let{$indeterminate:t}=e,{input:o}=(0,r.aQ)(e.theme),n=o.switch.width,i=o.switch.height,a=o.switch.padding,l=i-2*o.switch.padding,c=n-2*a-l,s=n/2-l/2-a,u=!0!==t&&!0===e.$checked;return(0,d.iv)`
    &:not([hidden]) {
      display: block;
    }
    position: absolute;
    left: ${N(a)};
    top: ${N(a)};
    height: ${N(l)};
    width: ${N(l)};
    border-radius: ${N(l/2)};
    transition-property: transform;
    transition-duration: ${o.switch.transitionDurationMs}ms;
    transition-timing-function: ${o.switch.transitionTimingFunction};
    background: var(--switch-fg-color);
    transform: translate3d(0, 0, 0);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.05);

    ${u&&(0,d.iv)`
      transform: translate3d(${c}px, 0, 0);
    `}

    ${t&&(0,d.iv)`
      transform: translate3d(${s}px, 0, 0);
    `}
  `}),oG=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f,p,h,g,m,b,v;let w=(0,i.c)(26);w[0]!==e?({checked:o,className:r,disabled:d,indeterminate:l,readOnly:c,style:u,...s}=e,w[0]=e,w[1]=o,w[2]=r,w[3]=d,w[4]=l,w[5]=c,w[6]=s,w[7]=u):(o=w[1],r=w[2],d=w[3],l=w[4],c=w[5],s=w[6],u=w[7]);let y=(0,a.useRef)(null);w[8]===Symbol.for("react.memo_cache_sentinel")?(f=()=>y.current,w[8]=f):f=w[8],(0,a.useImperativeHandle)(t,f),w[9]!==l?(p=()=>{y.current&&(y.current.indeterminate=l||!1)},h=[l],w[9]=l,w[10]=p,w[11]=h):(p=w[10],h=w[11]),(0,a.useEffect)(p,h);let x=!d&&c?"":void 0,$=!0!==l&&o,k=d||c;return w[12]!==s||w[13]!==x||w[14]!==$||w[15]!==k?(g=(0,n.jsx)(oH,{"data-read-only":x,...s,checked:$,disabled:k,type:"checkbox",ref:y}),w[12]=s,w[13]=x,w[14]=$,w[15]=k,w[16]=g):g=w[16],w[17]===Symbol.for("react.memo_cache_sentinel")?(m=(0,n.jsx)(oV,{}),w[17]=m):m=w[17],w[18]!==o||w[19]!==l?(b=(0,n.jsxs)(oD,{"aria-hidden":!0,"data-name":"representation",children:[m,(0,n.jsx)(oW,{$checked:o,$indeterminate:l})]}),w[18]=o,w[19]=l,w[20]=b):b=w[20],w[21]!==r||w[22]!==u||w[23]!==g||w[24]!==b?(v=(0,n.jsxs)(oP,{className:r,"data-ui":"Switch",style:u,children:[g,b]}),w[21]=r,w[22]=u,w[23]=g,w[24]=b,w[25]=v):v=w[25],v});oG.displayName="ForwardRef(Switch)";let oX=d.zo.span.withConfig({displayName:"StyledTextArea",componentId:"sc-1d6h1o8-0"})(eK),oY=d.zo.span.withConfig({displayName:"InputRoot",componentId:"sc-1d6h1o8-1"})`flex:1;min-width:0;display:block;position:relative;`,oq=d.zo.textarea.withConfig({displayName:"Input",componentId:"sc-1d6h1o8-2"})(eX,eZ,eU),oK=d.zo.div.withConfig({displayName:"Presentation",componentId:"sc-1d6h1o8-3"})(e1,eJ),oZ=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f,p,h,g,m,b;let v=(0,i.c)(29);v[0]!==e?({border:l,customValidity:r,disabled:c,fontSize:s,padding:u,radius:f,weight:p,__unstable_disableFocusRing:o,...d}=e,v[0]=e,v[1]=o,v[2]=r,v[3]=d,v[4]=l,v[5]=c,v[6]=s,v[7]=u,v[8]=f,v[9]=p):(o=v[1],r=v[2],d=v[3],l=v[4],c=v[5],s=v[6],u=v[7],f=v[8],p=v[9]);let w=void 0===l||l,y=void 0!==c&&c,x=void 0===s?2:s,$=void 0===u?3:u,k=void 0===f?2:f,z=(0,a.useRef)(null),j=q();v[10]===Symbol.for("react.memo_cache_sentinel")?(h=()=>z.current,v[10]=h):h=v[10],(0,a.useImperativeHandle)(t,h),A(z,r);let S=j.scheme,R=j.tone,C=F(x),E=F($),N=j.scheme,I=F(0);v[11]!==y||v[12]!==d||v[13]!==j.scheme||v[14]!==j.tone||v[15]!==I||v[16]!==C||v[17]!==E||v[18]!==p?(g=(0,n.jsx)(oq,{"data-as":"textarea","data-scheme":S,"data-tone":R,...d,$fontSize:C,$padding:E,$scheme:N,$space:I,$tone:j.tone,$weight:p,disabled:y,ref:z}),v[11]=y,v[12]=d,v[13]=j.scheme,v[14]=j.tone,v[15]=I,v[16]=C,v[17]=E,v[18]=p,v[19]=g):g=v[19];let _=F(k),M=w?"":void 0;return v[20]!==o||v[21]!==j.scheme||v[22]!==j.tone||v[23]!==_||v[24]!==M?(m=(0,n.jsx)(oK,{$radius:_,$unstableDisableFocusRing:o,$scheme:j.scheme,$tone:j.tone,"data-border":M,"data-scheme":j.scheme,"data-tone":j.tone}),v[20]=o,v[21]=j.scheme,v[22]=j.tone,v[23]=_,v[24]=M,v[25]=m):m=v[25],v[26]!==g||v[27]!==m?(b=(0,n.jsx)(oX,{"data-ui":"TextArea",children:(0,n.jsxs)(oY,{children:[g,m]})}),v[26]=g,v[27]=m,v[28]=b):b=v[28],b});oZ.displayName="ForwardRef(TextArea)";let oU={zIndex:2},oJ=(0,d.zo)(tC).attrs({forwardedAs:"span"}).withConfig({displayName:"StyledTextInput",componentId:"sc-h62wco-0"})(eK),o0=d.zo.span.withConfig({displayName:"InputRoot",componentId:"sc-h62wco-1"})`flex:1;min-width:0;display:block;position:relative;`,o1=(0,d.zo)(tC).attrs({forwardedAs:"span"}).withConfig({displayName:"Prefix",componentId:"sc-h62wco-2"})`border-top-right-radius:0;border-bottom-right-radius:0;& > span{display:block;margin:-1px;}`,o2=(0,d.zo)(tC).attrs({forwardedAs:"span"}).withConfig({displayName:"Suffix",componentId:"sc-h62wco-3"})`border-top-left-radius:0;border-bottom-left-radius:0;& > span{display:block;margin:-1px;}`,o3=d.zo.input.withConfig({displayName:"Input",componentId:"sc-h62wco-4"})(eX,eZ,eU),o4=d.zo.span.withConfig({displayName:"Presentation",componentId:"sc-h62wco-5"})(e1,eJ),o5=(0,d.zo)(tf).withConfig({displayName:"LeftBox",componentId:"sc-h62wco-6"})`position:absolute;top:0;left:0;`,o6=(0,d.zo)(tf).withConfig({displayName:"RightBox",componentId:"sc-h62wco-7"})`position:absolute;top:0;right:0;`,o7=(0,d.zo)(tC).withConfig({displayName:"RightCard",componentId:"sc-h62wco-8"})`background-color:transparent;position:absolute;top:0;right:0;`,o8=(0,d.zo)(tS).withConfig({displayName:"TextInputClearButton",componentId:"sc-h62wco-9"})({"&:not([hidden])":{display:"block"}}),o9=(0,a.forwardRef)(function(e,t){let o,r,d,s,u,f,p,h,g,m,b,v,w,x,$,k,z,j,S,R,C,E,N,I,_,M,L,T,O,Q,B;let P=(0,i.c)(84);P[0]!==e?({__unstable_disableFocusRing:d,border:b,clearButton:s,disabled:v,fontSize:w,icon:o,iconRight:r,onClear:f,padding:x,prefix:p,radius:$,readOnly:h,space:k,suffix:m,customValidity:u,type:z,weight:j,...g}=e,P[0]=e,P[1]=o,P[2]=r,P[3]=d,P[4]=s,P[5]=u,P[6]=f,P[7]=p,P[8]=h,P[9]=g,P[10]=m,P[11]=b,P[12]=v,P[13]=w,P[14]=x,P[15]=$,P[16]=k,P[17]=z,P[18]=j):(o=P[1],r=P[2],d=P[3],s=P[4],u=P[5],f=P[6],p=P[7],h=P[8],g=P[9],m=P[10],b=P[11],v=P[12],w=P[13],x=P[14],$=P[15],k=P[16],z=P[17],j=P[18]);let H=void 0===b||b,D=void 0!==v&&v,V=void 0===w?2:w,W=void 0===x?3:x,G=void 0===$?2:$,X=void 0===k?3:k,Y=void 0===z?"text":z,K=(0,a.useRef)(null),Z=q(),U=F(V),J=F(W),ee=F(G),et=F(X),eo=!!s,er=!!o,en=!!r,ei=!!m,ea=!!p;P[19]===Symbol.for("react.memo_cache_sentinel")?(S=()=>K.current,P[19]=S):S=P[19],(0,a.useImperativeHandle)(t,S),A(K,u),P[20]!==f?(R=e=>{e.preventDefault(),e.stopPropagation(),f&&f(),K.current?.focus()},P[20]=f,P[21]=R):R=P[21];let ed=R;P[22]!==p||P[23]!==ee?(C=p&&(0,n.jsx)(o1,{borderTop:!0,borderLeft:!0,borderBottom:!0,radius:ee,sizing:"border",tone:"inherit",children:(0,n.jsx)("span",{children:p})}),P[22]=p,P[23]=ee,P[24]=C):C=P[24];let el=C,ec=H?"":void 0;P[25]!==o||P[26]!==U||P[27]!==J?(E=o&&(0,n.jsx)(o5,{padding:J,children:(0,n.jsxs)(th,{size:U,children:[(0,a.isValidElement)(o)&&o,(0,l.isValidElementType)(o)&&(0,n.jsx)(o,{})]})}),P[25]=o,P[26]=U,P[27]=J,P[28]=E):E=P[28],P[29]!==eo||P[30]!==r||P[31]!==U||P[32]!==J?(N=!eo&&r&&(0,n.jsx)(o6,{padding:J,children:(0,n.jsxs)(th,{size:U,children:[(0,a.isValidElement)(r)&&r,(0,l.isValidElementType)(r)&&(0,n.jsx)(r,{})]})}),P[29]=eo,P[30]=r,P[31]=U,P[32]=J,P[33]=N):N=P[33],P[34]!==ea||P[35]!==ei||P[36]!==d||P[37]!==ee||P[38]!==Z.scheme||P[39]!==Z.tone||P[40]!==ec||P[41]!==E||P[42]!==N?(I=(0,n.jsxs)(o4,{$hasPrefix:ea,$unstableDisableFocusRing:d,$hasSuffix:ei,$radius:ee,$scheme:Z.scheme,$tone:Z.tone,"data-border":ec,"data-scheme":Z.scheme,"data-tone":Z.tone,children:[E,N]}),P[34]=ea,P[35]=ei,P[36]=d,P[37]=ee,P[38]=Z.scheme,P[39]=Z.tone,P[40]=ec,P[41]=E,P[42]=N,P[43]=I):I=P[43];let es=I;P[44]!==J?(_=J.map(rt),P[44]=J,P[45]=_):_=P[45];let eu=_;P[46]!==J?(M=J.map(ro),P[46]=J,P[47]=M):M=P[47];let ef=M,ep="object"==typeof s?s:y;P[48]!==s||P[49]!==eu||P[50]!==ef||P[51]!==ep||P[52]!==u||P[53]!==D||P[54]!==U||P[55]!==ed||P[56]!==ee||P[57]!==h?(L=!D&&!h&&s&&(0,n.jsx)(o7,{forwardedAs:"span",padding:eu,style:oU,tone:u?"critical":"inherit",children:(0,n.jsx)(o8,{"aria-label":"Clear","data-qa":"clear-button",fontSize:U,icon:c.Two,mode:"bleed",padding:ef,radius:ee,...ep,onClick:ed,onMouseDown:re})}),P[48]=s,P[49]=eu,P[50]=ef,P[51]=ep,P[52]=u,P[53]=D,P[54]=U,P[55]=ed,P[56]=ee,P[57]=h,P[58]=L):L=P[58];let eh=L;P[59]!==ee||P[60]!==m?(T=m&&(0,n.jsx)(o2,{borderTop:!0,borderRight:!0,borderBottom:!0,radius:ee,sizing:"border",tone:"inherit",children:(0,n.jsx)("span",{children:m})}),P[59]=ee,P[60]=m,P[61]=T):T=P[61];let eg=T,em=en||eo;return P[62]!==er||P[63]!==D||P[64]!==U||P[65]!==J||P[66]!==h||P[67]!==g||P[68]!==Z.scheme||P[69]!==Z.tone||P[70]!==et||P[71]!==em||P[72]!==Y||P[73]!==j?(O=(0,n.jsx)(o3,{"data-as":"input","data-scheme":Z.scheme,"data-tone":Z.tone,...g,$fontSize:U,$iconLeft:er,$iconRight:em,$padding:J,$scheme:Z.scheme,$space:et,$tone:Z.tone,$weight:j,disabled:D,readOnly:h,ref:K,type:Y}),P[62]=er,P[63]=D,P[64]=U,P[65]=J,P[66]=h,P[67]=g,P[68]=Z.scheme,P[69]=Z.tone,P[70]=et,P[71]=em,P[72]=Y,P[73]=j,P[74]=O):O=P[74],P[75]!==eh||P[76]!==es||P[77]!==O?(Q=(0,n.jsxs)(o0,{children:[O,es,eh]}),P[75]=eh,P[76]=es,P[77]=O,P[78]=Q):Q=P[78],P[79]!==el||P[80]!==Z.tone||P[81]!==eg||P[82]!==Q?(B=(0,n.jsxs)(oJ,{"data-ui":"TextInput",tone:Z.tone,children:[el,Q,eg]}),P[79]=el,P[80]=Z.tone,P[81]=eg,P[82]=Q,P[83]=B):B=P[83],B});function re(e){e.preventDefault(),e.stopPropagation()}function rt(e){return 0===e?0:1===e||2===e?1:e-2}function ro(e){return 0===e||1===e?0:2===e?1:e-1}function rr(e){let t,o;let r=(0,i.c)(3),[n,d]=(0,a.useState)(e),l=(0,a.useRef)(void 0);r[0]===Symbol.for("react.memo_cache_sentinel")?(t=(e,t)=>{let o=()=>{d(e)};if(l.current&&(clearTimeout(l.current),l.current=void 0),!t)return o();l.current=setTimeout(o,t)},r[0]=t):t=r[0];let c=t;return r[1]!==n?(o=[n,c],r[1]=n,r[2]=o):o=r[2],o}o9.displayName="ForwardRef(TextInput)";let rn={top:["top-end","top-start","bottom","left","right"],"top-start":["top","top-end","bottom-start","left-start","right-start"],"top-end":["top","top-start","bottom-end","left-end","right-end"],bottom:["bottom-end","bottom-start","top","left","right"],"bottom-start":["bottom","bottom-end","top-start","left-start","right-start"],"bottom-end":["bottom","bottom-start","top-end","left-end","right-end"],left:["left-end","left-start","right","top","bottom"],"left-start":["left","left-end","right-start","top-start","bottom-start"],"left-end":["left","left-start","right-end","top-end","bottom-end"],right:["right-end","right-start","left","top","bottom"],"right-start":["right","right-end","left-start","top-start","bottom-start"],"right-end":["right","right-start","left-end","top-end","bottom-end"]},ri=(0,d.zo)(f.E.create(tC)).withConfig({displayName:"MotionCard",componentId:"sc-1xn138w-0"})`will-change:transform;`,ra=(0,a.memo)((0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u,f,p,h,g,m,b,v,w,y,$,k,z,j,S;let R=(0,i.c)(48);R[0]!==e?({animate:o,arrow:r,arrowRef:a,arrowX:d,arrowY:l,children:c,originX:s,originY:u,padding:f,placement:p,radius:h,scheme:m,shadow:b,style:v,...g}=e,R[0]=e,R[1]=o,R[2]=r,R[3]=a,R[4]=d,R[5]=l,R[6]=c,R[7]=s,R[8]=u,R[9]=f,R[10]=p,R[11]=h,R[12]=g,R[13]=m,R[14]=b,R[15]=v):(o=R[1],r=R[2],a=R[3],d=R[4],l=R[5],c=R[6],s=R[7],u=R[8],f=R[9],p=R[10],h=R[11],g=R[12],m=R[13],b=R[14],v=R[15]);let C=o?"transform":void 0;R[16]!==s||R[17]!==u||R[18]!==v||R[19]!==C?(w={originX:s,originY:u,willChange:C,...v},R[16]=s,R[17]=u,R[18]=v,R[19]=C,R[20]=w):w=R[20];let E=w,N=null!==d?d:void 0,I=null!==l?l:void 0;R[21]!==N||R[22]!==I?(y={left:N,top:I,right:void 0,bottom:void 0},R[21]=N,R[22]=I,R[23]=y):y=R[23];let _=y,M=g;return R[24]!==o?($=o?["hidden","initial"]:void 0,R[24]=o,R[25]=$):$=R[25],R[26]!==o?(k=o?["visible","scaleIn"]:void 0,R[26]=o,R[27]=k):k=R[27],R[28]!==o?(z=o?["hidden","scaleOut"]:void 0,R[28]=o,R[29]=z):z=R[29],R[30]!==r||R[31]!==a||R[32]!==_?(j=r&&(0,n.jsx)(t1,{ref:a,style:_,width:15,height:6,radius:2}),R[30]=r,R[31]=a,R[32]=_,R[33]=j):j=R[33],R[34]!==c||R[35]!==f||R[36]!==p||R[37]!==h||R[38]!==t||R[39]!==E||R[40]!==m||R[41]!==b||R[42]!==M||R[43]!==$||R[44]!==k||R[45]!==z||R[46]!==j?(S=(0,n.jsxs)(ri,{"data-ui":"Tooltip__card",...M,"data-placement":p,padding:f,radius:h,ref:t,scheme:m,shadow:b,style:E,variants:x.card,transition:x.transition,initial:$,animate:k,exit:z,children:[c,j]}),R[34]=c,R[35]=f,R[36]=p,R[37]=h,R[38]=t,R[39]=E,R[40]=m,R[41]=b,R[42]=M,R[43]=$,R[44]=k,R[45]=z,R[46]=j,R[47]=S):S=R[47],S}));ra.displayName="Memo(ForwardRef(TooltipCard))";let rd=G("@sanity/ui/context/tooltipDelayGroup",null);function rl(e){let t,o;let r=(0,i.c)(9),{children:a,delay:d}=e,[l,c]=rr(!1),[s,u]=rr(null),f="number"==typeof d?d:d?.open||0,p="number"==typeof d?d:d?.close||0,h=l?1:f;r[0]!==p||r[1]!==s||r[2]!==c||r[3]!==u||r[4]!==h?(t={setIsGroupActive:c,openTooltipId:s,setOpenTooltipId:u,openDelay:h,closeDelay:p},r[0]=p,r[1]=s,r[2]=c,r[3]=u,r[4]=h,r[5]=t):t=r[5];let g=t;return r[6]!==a||r[7]!==g?(o=(0,n.jsx)(rd.Provider,{value:g,children:a}),r[6]=a,r[7]=g,r[8]=o):o=r[8],o}rl.displayName="TooltipDelayGroupProvider";let rc=(0,d.zo)(oa).withConfig({displayName:"StyledTooltip",componentId:"sc-13f2zvh-0"})`pointer-events:none;`,rs=(0,a.forwardRef)(function(e,t){let o=t6(),{layer:r}=U(),{animate:d=!1,arrow:l=!1,boundaryElement:c=o?.element,children:f,content:h,disabled:g,fallbackPlacements:b=e.fallbackPlacements??rn[e.placement??"bottom"],padding:v=2,placement:w="bottom",portal:y,radius:x=2,scheme:$,shadow:k=2,zOffset:z=r.tooltip.zOffset,delay:j,...S}=e,R=!er()&&d,C=F(b),E=(0,a.useRef)(null),[N,I]=(0,a.useState)(null),_=(0,a.useRef)(null),M="viewport",[L,T]=(0,a.useState)(0);(0,a.useImperativeHandle)(t,()=>E.current);let O=os(),Q="string"==typeof y?O.elements?.[y]||null:O.element,A=(0,a.useMemo)(()=>{let e=[];return e.push((0,u.RR)({boundary:c||void 0,fallbackPlacements:C,padding:4,rootBoundary:M})),e.push((0,u.cv)({mainAxis:4})),e.push((0,u.uY)({boundary:c||void 0,rootBoundary:M,padding:4})),l&&e.push((0,u.x7)({element:_,padding:4})),R&&e.push(tY),e},[R,l,c,C]),{floatingStyles:B,placement:P,middlewareData:H,refs:D,update:V}=(0,u.YF)({middleware:A,placement:w,whileElementsMounted:s.Me,elements:{reference:N}}),W=H.arrow?.x,G=H.arrow?.y,X=H["@sanity/ui/origin"]?.originX,Y=H["@sanity/ui/origin"]?.originY,q=(0,a.useId)(),[K,Z]=rr(!1),J=(0,a.useContext)(rd),{setIsGroupActive:ee,setOpenTooltipId:et}=J||{},eo=K||J?.openTooltipId===q,en=null!==J,ei="number"==typeof j?j:j?.open||0,ea="number"==typeof j?j:j?.close||0,ed=en?J.openDelay:ei,el=en?J.closeDelay:ea,ec=(0,a.useCallback)((e,t)=>{if(en){if(e){let o=t?0:ed;ee?.(e,o),et?.(q,o)}else{let o=el>200?el:200;ee?.(e,o),et?.(null,t?0:el)}}else Z(e,t?0:e?ed:el)},[en,ed,ee,et,q,el,Z]),es=(0,a.useCallback)(e=>{ec(!1),f?.props?.onBlur?.(e)},[f?.props,ec]),eu=(0,a.useCallback)(e=>{ec(!1,!0),f?.props.onClick?.(e)},[f?.props,ec]),ef=(0,a.useCallback)(e=>{ec(!1,!0),f?.props.onContextMenu?.(e)},[f?.props,ec]),ep=(0,a.useCallback)(e=>{ec(!0),f?.props?.onFocus?.(e)},[f?.props,ec]),eh=(0,a.useCallback)(e=>{ec(!0),f?.props?.onMouseEnter?.(e)},[f?.props,ec]),eg=(0,a.useCallback)(e=>{ec(!1),f?.props?.onMouseLeave?.(e)},[f?.props,ec]);(function(e){let t,o,r;let n=(0,i.c)(10),{handleIsOpenChange:d,referenceElement:l,showTooltip:c,isInsideGroup:s}=e;n[0]!==d||n[1]!==l?(t=(e,t)=>{l&&(l===e||e instanceof Node&&l.contains(e)||(d(!1),t()))},n[0]=d,n[1]=l,n[2]=t):t=n[2];let u=(0,m.i)(t);n[3]!==s||n[4]!==u||n[5]!==c?(o=()=>{if(!c||s)return;let e=t=>{u(t.target,()=>window.removeEventListener("mousemove",e))};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},n[3]=s,n[4]=u,n[5]=c,n[6]=o):o=n[6],n[7]!==s||n[8]!==c?(r=[s,c],n[7]=s,n[8]=c,n[9]=r):r=n[9],(0,a.useEffect)(o,r)})({handleIsOpenChange:ec,referenceElement:N,showTooltip:eo,isInsideGroup:en}),(0,a.useEffect)(()=>{g&&eo&&ec(!1)},[g,ec,eo]),(0,a.useEffect)(()=>{!h&&eo&&ec(!1)},[h,ec,eo]),(0,a.useEffect)(()=>{if(eo)return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)};function e(e){"Escape"===e.key&&ec(!1,!0)}},[ec,eo]),(0,a.useLayoutEffect)(()=>{T(Math.min(...c?[c.offsetWidth]:[],Q?.offsetWidth||document.body.offsetWidth)-8)},[c,Q]);let em=(0,a.useCallback)(e=>{_.current=e,V()},[V]),eb=(0,a.useCallback)(e=>{E.current=e,D.setFloating(e)},[D]),ev=(0,a.useMemo)(()=>f?(0,a.cloneElement)(f,{onBlur:es,onFocus:ep,onMouseEnter:eh,onMouseLeave:eg,onClick:eu,onContextMenu:ef,ref:I}):null,[f,es,eu,ef,ep,eh,eg]);if((0,a.useImperativeHandle)(f?oy(f):null,()=>N,[N]),!ev)return(0,n.jsx)(n.Fragment,{});if(g)return ev;let ew=(0,n.jsx)(rc,{"data-ui":"Tooltip",...S,ref:eb,style:{...B,maxWidth:L>0?`${L}px`:void 0},zOffset:z,children:(0,n.jsx)(ra,{...S,animate:R,arrow:l,arrowRef:em,arrowX:W,arrowY:G,originX:X,originY:Y,padding:v,placement:P,radius:x,ref:eb,scheme:$,shadow:k,children:h})}),ey=eo&&(y?(0,n.jsx)(ou,{__unstable_name:"string"==typeof y?y:void 0,children:ew}):ew);return(0,n.jsxs)(n.Fragment,{children:[R?(0,n.jsx)(p.M,{children:ey}):ey,ev]})});rs.displayName="ForwardRef(Tooltip)";let ru=d.zo.kbd.withConfig({displayName:"StyledHotkeys",componentId:"sc-b37mge-0"})`font:inherit;padding:1px;&:not([hidden]){display:block;}`,rf=(0,d.zo)(tX).withConfig({displayName:"Key",componentId:"sc-b37mge-1"})`&:not([hidden]){display:block;}`,rp=(0,a.forwardRef)(function(e,t){let o,r,a,d,l,c,s,u,f;let p=(0,i.c)(24);p[0]!==e?({fontSize:o,keys:r,padding:a,radius:d,space:c,...l}=e,p[0]=e,p[1]=o,p[2]=r,p[3]=a,p[4]=d,p[5]=l,p[6]=c):(o=p[1],r=p[2],a=p[3],d=p[4],l=p[5],c=p[6]);let h=F(void 0===c?.5:c);if(!r||0===r.length){let e;return p[7]===Symbol.for("react.memo_cache_sentinel")?(e=(0,n.jsx)(n.Fragment,{}),p[7]=e):e=p[7],e}if(p[8]!==o||p[9]!==r||p[10]!==a||p[11]!==d){let e;p[13]!==o||p[14]!==a||p[15]!==d?(e=(e,t)=>(0,n.jsx)(rf,{fontSize:o,padding:a,radius:d,children:e},t),p[13]=o,p[14]=a,p[15]=d,p[16]=e):e=p[16],s=r.map(e),p[8]=o,p[9]=r,p[10]=a,p[11]=d,p[12]=s}else s=p[12];return p[17]!==h||p[18]!==s?(u=(0,n.jsx)(tV,{as:"span",space:h,children:s}),p[17]=h,p[18]=s,p[19]=u):u=p[19],p[20]!==t||p[21]!==l||p[22]!==u?(f=(0,n.jsx)(ru,{"data-ui":"Hotkeys",...l,ref:t,children:u}),p[20]=t,p[21]=l,p[22]=u,p[23]=f):f=p[23],f});rp.displayName="ForwardRef(Hotkeys)";let rh=G("@sanity/ui/context/menu",null);function rg(e){return z(e)&&"true"!==e.getAttribute("data-disabled")||S(e)&&!e.disabled}function rm(e){return e.filter(rg)}let rb=[],rv=(0,d.zo)(tf).withConfig({displayName:"StyledMenu",componentId:"sc-xt0tnv-0"})`outline:none;overflow:auto;`,rw=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f,p,h,g,m,b,v,w,y,x,$,k,z,j,S,R;let C=(0,i.c)(50);if(C[0]!==e){let{children:t,focusFirst:n,focusLast:i,onClickOutside:a,onEscape:b,onItemClick:v,onItemSelect:w,onKeyDown:y,originElement:x,padding:$,registerElement:k,shouldFocus:z,space:j,...S}=e;r=t,d=a,l=b,c=v,s=w,u=y,f=x,g=$,p=k,o=z,m=j,h=S,C[0]=e,C[1]=o,C[2]=r,C[3]=d,C[4]=l,C[5]=c,C[6]=s,C[7]=u,C[8]=f,C[9]=p,C[10]=h,C[11]=g,C[12]=m}else o=C[1],r=C[2],d=C[3],l=C[4],c=C[5],s=C[6],u=C[7],f=C[8],p=C[9],h=C[10],g=C[11],m=C[12];let E=void 0===g?1:g,N=void 0===m?1:m,I=o??(e.focusFirst&&"first"||e.focusLast&&"last"||null),_=(0,a.useRef)(null);C[13]===Symbol.for("react.memo_cache_sentinel")?(b=()=>_.current,C[13]=b):b=C[13],(0,a.useImperativeHandle)(t,b);let{isTopLayer:M}=or();C[14]!==u||C[15]!==f||C[16]!==I?(v={onKeyDown:u,originElement:f,shouldFocus:I,rootElementRef:_},C[14]=u,C[15]=f,C[16]=I,C[17]=v):v=C[17];let{activeElement:L,activeIndex:T,handleItemMouseEnter:F,handleItemMouseLeave:Q,handleKeyDown:A,mount:B}=function(e){let{onKeyDown:t,originElement:o,shouldFocus:r,rootElementRef:n}=e,i=(0,a.useRef)([]),[d,l]=(0,a.useState)(-1),c=(0,a.useRef)(d),s=(0,a.useMemo)(()=>i.current[d]||null,[d]),u=!!n.current,f=(0,a.useCallback)(e=>{l(e),c.current=e},[]),p=(0,a.useCallback)((e,t)=>e?(-1===i.current.indexOf(e)&&(i.current.push(e),function(e,t){if(!e)return;let o=new WeakMap;for(let r of t)o.set(r,function(e,t){let o=[],r=t;for(;r!==e;){let t=r.parentElement;if(!t)break;let n=Array.from(t.childNodes).indexOf(r);if(o.unshift(n),t===e)break;r=t}return o}(e,r));t.sort((e,t)=>{let r=o.get(e)||rb,n=o.get(t)||rb,i=Math.max(r.length,n.length);for(let e=0;e<i;e+=1){let t=r[e]||-1,o=n[e]||-1;if(t!==o)return t-o}return 0})}(n.current,i.current)),t&&f(i.current.indexOf(e)),()=>{let t=i.current.indexOf(e);t>-1&&i.current.splice(t,1)}):()=>{},[n,f]),h=(0,a.useCallback)(e=>{if("Tab"===e.key){o&&o.focus();return}if("Home"===e.key){e.preventDefault(),e.stopPropagation();let t=rm(i.current)[0];if(!t)return;f(i.current.indexOf(t));return}if("End"===e.key){e.preventDefault(),e.stopPropagation();let t=rm(i.current),o=t[t.length-1];if(!o)return;f(i.current.indexOf(o));return}if("ArrowUp"===e.key){e.preventDefault(),e.stopPropagation();let t=rm(i.current),o=t.length;if(0===o)return;let r=i.current[c.current],n=t.indexOf(r),a=t[n=(n-1+o)%o];f(i.current.indexOf(a));return}if("ArrowDown"===e.key){e.preventDefault(),e.stopPropagation();let t=rm(i.current),o=t.length;if(0===o)return;let r=i.current[c.current],n=t.indexOf(r),a=t[n=(n+1)%o];f(i.current.indexOf(a));return}t&&t(e)},[t,o,f]),g=(0,a.useCallback)(e=>{let t=e.currentTarget;f(i.current.indexOf(t))},[f]),m=(0,a.useCallback)(()=>{f(-2),n.current?.focus()},[n,f]);return(0,a.useEffect)(()=>{if(!u)return;let e=requestAnimationFrame(()=>{if(-1===d){if("first"===r){let e=rm(i.current)[0];e&&f(i.current.indexOf(e))}if("last"===r){let e=rm(i.current),t=e[e.length-1];t&&f(i.current.indexOf(t))}return}(i.current[d]||null)?.focus()});return()=>cancelAnimationFrame(e)},[d,u,f,r]),{activeElement:s,activeIndex:d,handleItemMouseEnter:g,handleItemMouseLeave:m,handleKeyDown:h,mount:p}}(v),P=(0,a.useRef)(null);C[18]!==p?(w=e=>{P.current&&(P.current(),P.current=null),_.current=e,_.current&&p&&(P.current=p(_.current))},C[18]=p,C[19]=w):w=C[19];let H=w;C[20]!==T||C[21]!==s?(y=()=>{s&&s(T)},x=[T,s],C[20]=T,C[21]=s,C[22]=y,C[23]=x):(y=C[22],x=C[23]),(0,a.useEffect)(y,x),C[24]===Symbol.for("react.memo_cache_sentinel")?($=()=>[_.current],C[24]=$):$=C[24],O(M&&d,$),C[25]!==M||C[26]!==l?(k=e=>{M&&"Escape"===e.key&&(e.stopPropagation(),l&&l())},C[25]=M,C[26]=l,C[27]=k):k=C[27],D(k),C[28]!==L||C[29]!==T||C[30]!==F||C[31]!==Q||C[32]!==B||C[33]!==d||C[34]!==l||C[35]!==c||C[36]!==p?(z={version:0,activeElement:L,activeIndex:T,mount:B,onClickOutside:d,onEscape:l,onItemClick:c,onItemMouseEnter:F,onItemMouseLeave:Q,registerElement:p,onMouseEnter:F,onMouseLeave:Q},C[28]=L,C[29]=T,C[30]=F,C[31]=Q,C[32]=B,C[33]=d,C[34]=l,C[35]=c,C[36]=p,C[37]=z):z=C[37];let V=z;return C[38]!==r||C[39]!==N?(j=(0,n.jsx)(oB,{space:N,children:r}),C[38]=r,C[39]=N,C[40]=j):j=C[40],C[41]!==A||C[42]!==H||C[43]!==E||C[44]!==h||C[45]!==j?(S=(0,n.jsx)(rv,{"data-ui":"Menu",...h,onKeyDown:A,padding:E,ref:H,role:"menu",tabIndex:-1,children:j}),C[41]=A,C[42]=H,C[43]=E,C[44]=h,C[45]=j,C[46]=S):S=C[46],C[47]!==S||C[48]!==V?(R=(0,n.jsx)(rh.Provider,{value:V,children:S}),C[47]=S,C[48]=V,C[49]=R):R=C[49],R});rw.displayName="ForwardRef(Menu)";let ry=d.zo.hr.withConfig({displayName:"MenuDivider",componentId:"sc-uhoxwu-0"})`height:1px;border:0;background:var(--card-hairline-soft-color);margin:0;`;ry.displayName="MenuDivider";let rx=(0,d.zo)(tf).withConfig({displayName:"Selectable",componentId:"sc-1w01ang-0"})(e1,function(){return(0,d.iv)`
    background-color: inherit;
    color: inherit;

    &[data-as='button'] {
      -webkit-font-smoothing: inherit;
      appearance: none;
      outline: none;
      font: inherit;
      text-align: inherit;
      border: 0;
      width: -moz-available;
      width: -webkit-fill-available;
      width: stretch;
    }

    /* &:is(a) */
    &[data-as='a'] {
      text-decoration: none;
    }
  `},function(e){let{$tone:t}=e,{color:o,style:n}=(0,r.aQ)(e.theme),i=o.selectable[t];return(0,d.iv)`
    ${t$(o,i.enabled)}

    background-color: var(--card-bg-color);
    color: var(--card-fg-color);
    outline: none;

    /* &:is(button) */
    &[data-as='button'] {
      &:disabled {
        ${t$(o,i.disabled)}
      }

      &:not(:disabled) {
        &[aria-pressed='true'] {
          ${t$(o,i.pressed)}
        }

        &[data-selected],
        &[aria-selected='true'] > & {
          ${t$(o,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t$(o,i.hovered)}
            }

            &:active {
              ${t$(o,i.pressed)}
            }
          }
        }
      }
    }

    /* &:is(a) */
    &[data-as='a'] {
      &[data-disabled] {
        ${t$(o,i.disabled)}
      }

      &:not([data-disabled]) {
        &[data-pressed] {
          ${t$(o,i.pressed)}
        }

        &[data-selected] {
          ${t$(o,i.selected)}
        }

        @media (hover: hover) {
          &:not([data-selected]) {
            &[data-hovered],
            &:hover {
              ${t$(o,i.hovered)}
            }
            &:active {
              ${t$(o,i.pressed)}
            }
          }
        }
      }
    }

    ${n?.card?.root}
  `});function r$(){let e=(0,a.useContext)(rh);if(!e)throw Error("useMenu(): missing context value");if(!t4(e)||0!==e.version)throw Error("useMenu(): the context value is not compatible");return e}function rk(e){let t,o,r,d,s,u,f,p,h,g,m,b,v,w,y,x,$,k,z,j,S,R,C,E,N,I,_,M,L,T,O,Q,A,B,P;let H=(0,i.c)(79);H[0]!==e?({as:f,children:o,fontSize:p,icon:t,menu:r,onClick:d,padding:h,popover:s,radius:g,space:m,text:v,tone:b,...u}=e,H[0]=e,H[1]=t,H[2]=o,H[3]=r,H[4]=d,H[5]=s,H[6]=u,H[7]=f,H[8]=p,H[9]=h,H[10]=g,H[11]=m,H[12]=b,H[13]=v):(t=H[1],o=H[2],r=H[3],d=H[4],s=H[5],u=H[6],f=H[7],p=H[8],h=H[9],g=H[10],m=H[11],b=H[12],v=H[13]);let D=void 0===f?"button":f,V=void 0===p?1:p,W=void 0===h?3:h,G=void 0===g?2:g,X=void 0===m?3:m,Y=void 0===b?"default":b,K=r$(),{scheme:Z}=q(),{activeElement:U,mount:J,onClickOutside:ee,onEscape:et,onItemClick:eo,onItemMouseEnter:er,registerElement:en}=K,ei=er??K.onMouseEnter,[ea,ed]=(0,a.useState)(null),[el,ec]=(0,a.useState)(!1),[es,eu]=(0,a.useState)(null),ef=!!U&&U===ea,[ep,eh]=(0,a.useState)(!1);H[14]!==ei?(w=e=>{eh(!1),ei(e),ec(!0)},H[14]=ei,H[15]=w):w=H[15];let eg=w;H[16]!==ea?(y=e=>{"ArrowLeft"===e.key&&(e.stopPropagation(),ec(!1),requestAnimationFrame(()=>{ea?.focus()}))},H[16]=ea,H[17]=y):y=H[17];let em=y;H[18]!==d?(x=e=>{d?.(e),eu("first"),ec(!0)},H[18]=d,H[19]=x):x=H[19];let eb=x;H[20]!==eo?($=()=>{ec(!1),eo?.()},H[20]=eo,H[21]=$):$=H[21];let ev=$;H[22]===Symbol.for("react.memo_cache_sentinel")?(k=()=>eh(!0),H[22]=k):k=H[22];let ew=k;H[23]!==J||H[24]!==ea?(z=()=>J(ea),j=[J,ea],H[23]=J,H[24]=ea,H[25]=z,H[26]=j):(z=H[25],j=H[26]),(0,a.useEffect)(z,j),H[27]!==ef?(S=()=>{ef||ec(!1)},R=[ef],H[27]=ef,H[28]=S,H[29]=R):(S=H[28],R=H[29]),(0,a.useEffect)(S,R),H[30]!==el?(C=()=>{el||eh(!1)},E=[el],H[30]=el,H[31]=C,H[32]=E):(C=H[31],E=H[32]),(0,a.useEffect)(C,E),H[33]!==es?(N=()=>{if(!es)return;let e=requestAnimationFrame(()=>eu(null));return()=>cancelAnimationFrame(e)},I=[es],H[33]=es,H[34]=N,H[35]=I):(N=H[34],I=H[35]),(0,a.useEffect)(N,I),H[36]!==o||H[37]!==ev||H[38]!==em||H[39]!==r||H[40]!==ee||H[41]!==et||H[42]!==en||H[43]!==es?(_=(0,n.jsx)(rw,{...r,onClickOutside:ee,onEscape:et,onItemClick:ev,onKeyDown:em,onMouseEnter:ew,registerElement:en,shouldFocus:es,children:o}),H[36]=o,H[37]=ev,H[38]=em,H[39]=r,H[40]=ee,H[41]=et,H[42]=en,H[43]=es,H[44]=_):_=H[44];let ey=_;H[45]===Symbol.for("react.memo_cache_sentinel")?(M=e=>{let t=e.currentTarget;if(document.activeElement===t&&"ArrowRight"===e.key){eu("first"),ec(!0),eh(!0);return}},H[45]=M):M=H[45];let ex=M,e$="button"===D?ep:void 0,ek="button"!==D?ep:void 0,ez=!ep&&ef?"":void 0,ej=F(G),eS="button"===D?"button":void 0;return H[46]!==t||H[47]!==V?(L=t&&(0,n.jsxs)(th,{size:V,children:[(0,a.isValidElement)(t)&&t,(0,l.isValidElementType)(t)&&(0,n.jsx)(t,{})]}),H[46]=t,H[47]=V,H[48]=L):L=H[48],H[49]!==V||H[50]!==v?(T=(0,n.jsx)(tf,{flex:1,children:(0,n.jsx)(th,{size:V,textOverflow:"ellipsis",weight:"medium",children:v})}),H[49]=V,H[50]=v,H[51]=T):T=H[51],H[52]===Symbol.for("react.memo_cache_sentinel")?(O=(0,n.jsx)(c.XCv,{}),H[52]=O):O=H[52],H[53]!==V?(Q=(0,n.jsx)(th,{size:V,children:O}),H[53]=V,H[54]=Q):Q=H[54],H[55]!==W||H[56]!==X||H[57]!==L||H[58]!==T||H[59]!==Q?(A=(0,n.jsxs)(tv,{gap:X,padding:W,children:[L,T,Q]}),H[55]=W,H[56]=X,H[57]=L,H[58]=T,H[59]=Q,H[60]=A):A=H[60],H[61]!==D||H[62]!==eb||H[63]!==eg||H[64]!==u||H[65]!==Z||H[66]!==e$||H[67]!==ek||H[68]!==ez||H[69]!==ej||H[70]!==eS||H[71]!==A||H[72]!==Y?(B=(0,n.jsx)(rx,{"data-as":D,"data-ui":"MenuGroup",forwardedAs:D,...u,"aria-pressed":e$,"data-pressed":ek,"data-selected":ez,$radius:ej,$tone:Y,$scheme:Z,onClick:eb,onKeyDown:ex,onMouseEnter:eg,ref:ed,tabIndex:-1,type:eS,children:A}),H[61]=D,H[62]=eb,H[63]=eg,H[64]=u,H[65]=Z,H[66]=e$,H[67]=ek,H[68]=ez,H[69]=ej,H[70]=eS,H[71]=A,H[72]=Y,H[73]=B):B=H[73],H[74]!==ey||H[75]!==el||H[76]!==s||H[77]!==B?(P=(0,n.jsx)(oR,{...s,content:ey,"data-ui":"MenuGroup__popover",open:el,children:B}),H[74]=ey,H[75]=el,H[76]=s,H[77]=B,H[78]=P):P=H[78],P}rx.displayName="Selectable",rk.displayName="MenuGroup";let rz=(0,a.forwardRef)(function(e,t){let o,r,d,c,s,u,f,p,h,g,m,b,v,w,y,x,$,k,z,j,S,R,C,E,N,I,_,M,L,T,O,Q;let A=(0,i.c)(73);A[0]!==e?({as:x,children:d,disabled:c,fontSize:$,hotkeys:s,icon:o,iconRight:r,onClick:u,padding:k,paddingX:m,paddingY:b,paddingTop:g,paddingRight:h,paddingBottom:f,paddingLeft:p,pressed:v,radius:z,selected:y,space:j,text:R,tone:S,...w}=e,A[0]=e,A[1]=o,A[2]=r,A[3]=d,A[4]=c,A[5]=s,A[6]=u,A[7]=f,A[8]=p,A[9]=h,A[10]=g,A[11]=m,A[12]=b,A[13]=v,A[14]=w,A[15]=y,A[16]=x,A[17]=$,A[18]=k,A[19]=z,A[20]=j,A[21]=S,A[22]=R):(o=A[1],r=A[2],d=A[3],c=A[4],s=A[5],u=A[6],f=A[7],p=A[8],h=A[9],g=A[10],m=A[11],b=A[12],v=A[13],w=A[14],y=A[15],x=A[16],$=A[17],k=A[18],z=A[19],j=A[20],S=A[21],R=A[22]);let B=void 0===x?"button":x,P=void 0===$?1:$,H=void 0===k?3:k,D=void 0===z?2:z,V=void 0===j?3:j,W=void 0===S?"default":S,{scheme:G}=q(),X=r$(),{activeElement:Y,mount:K,onItemClick:Z,onItemMouseEnter:U,onItemMouseLeave:J}=X,ee=U??X.onMouseEnter,et=J??X.onMouseLeave,[eo,er]=(0,a.useState)(null),en=!!Y&&Y===eo,ei=(0,a.useRef)(null);A[23]===Symbol.for("react.memo_cache_sentinel")?(C=()=>ei.current,A[23]=C):C=A[23],(0,a.useImperativeHandle)(t,C),A[24]!==K||A[25]!==eo||A[26]!==y?(E=()=>K(eo,y),N=[K,eo,y],A[24]=K,A[25]=eo,A[26]=y,A[27]=E,A[28]=N):(E=A[27],N=A[28]),(0,a.useEffect)(E,N),A[29]!==c||A[30]!==u||A[31]!==Z?(I=e=>{c||(u&&u(e),Z&&Z())},A[29]=c,A[30]=u,A[31]=Z,A[32]=I):I=A[32];let ea=I;A[33]!==H||A[34]!==f||A[35]!==p||A[36]!==h||A[37]!==g||A[38]!==m||A[39]!==b?(_={padding:H,paddingX:m,paddingY:b,paddingTop:g,paddingRight:h,paddingBottom:f,paddingLeft:p},A[33]=H,A[34]=f,A[35]=p,A[36]=h,A[37]=g,A[38]=m,A[39]=b,A[40]=_):_=A[40];let ed=_,el=F(P);A[41]!==el?(M=el.map(rj),A[41]=el,A[42]=M):M=A[42];let ec=M;A[43]===Symbol.for("react.memo_cache_sentinel")?(L=e=>{ei.current=e,er(e)},A[43]=L):L=A[43];let es=L,eu="button"!==B&&v?"":void 0,ef=en?"":void 0,ep=c?"":void 0,eh=F(D),eg=F(0),em=c?"default":W,eb="button"===B?"button":void 0;return A[44]!==o||A[45]!==r||A[46]!==P||A[47]!==s||A[48]!==ec||A[49]!==ed||A[50]!==V||A[51]!==R?(T=(o||R||r)&&(0,n.jsxs)(tv,{as:"span",gap:V,align:"center",...ed,children:[o&&(0,n.jsxs)(th,{size:P,children:[(0,a.isValidElement)(o)&&o,(0,l.isValidElementType)(o)&&(0,n.jsx)(o,{})]}),R&&(0,n.jsx)(tf,{flex:1,children:(0,n.jsx)(th,{size:P,textOverflow:"ellipsis",weight:"medium",children:R})}),s&&(0,n.jsx)(rp,{fontSize:ec,keys:s,style:{marginTop:-4,marginBottom:-4}}),r&&(0,n.jsxs)(th,{size:P,children:[(0,a.isValidElement)(r)&&r,(0,l.isValidElementType)(r)&&(0,n.jsx)(r,{})]})]}),A[44]=o,A[45]=r,A[46]=P,A[47]=s,A[48]=ec,A[49]=ed,A[50]=V,A[51]=R,A[52]=T):T=A[52],A[53]!==d||A[54]!==ed?(O=d&&(0,n.jsx)(tf,{as:"span",...ed,children:d}),A[53]=d,A[54]=ed,A[55]=O):O=A[55],A[56]!==B||A[57]!==c||A[58]!==ea||A[59]!==ee||A[60]!==et||A[61]!==w||A[62]!==G||A[63]!==eu||A[64]!==ef||A[65]!==ep||A[66]!==eh||A[67]!==eg||A[68]!==em||A[69]!==eb||A[70]!==T||A[71]!==O?(Q=(0,n.jsxs)(rx,{"data-ui":"MenuItem",role:"menuitem",...w,"data-pressed":eu,"data-selected":ef,"data-disabled":ep,forwardedAs:B,$radius:eh,$padding:eg,$tone:em,$scheme:G,disabled:c,onClick:ea,onMouseEnter:ee,onMouseLeave:et,ref:es,tabIndex:-1,type:eb,children:[T,O]}),A[56]=B,A[57]=c,A[58]=ea,A[59]=ee,A[60]=et,A[61]=w,A[62]=G,A[63]=eu,A[64]=ef,A[65]=ep,A[66]=eh,A[67]=eg,A[68]=em,A[69]=eb,A[70]=T,A[71]=O,A[72]=Q):Q=A[72],Q});function rj(e){return e-1}rz.displayName="ForwardRef(MenuItem)";let rS=(0,d.zo)(tS).withConfig({displayName:"CustomButton",componentId:"sc-1kns779-0"})`max-width:100%;`,rR=(0,a.forwardRef)(function(e,t){let o,r,d,l,c,s,u,f,p,h,g,m,b,v,w,y;let x=(0,i.c)(30);x[0]!==e?({icon:r,id:d,focused:o,fontSize:p,label:l,onClick:c,onFocus:s,padding:h,selected:f,...u}=e,x[0]=e,x[1]=o,x[2]=r,x[3]=d,x[4]=l,x[5]=c,x[6]=s,x[7]=u,x[8]=f,x[9]=p,x[10]=h):(o=x[1],r=x[2],d=x[3],l=x[4],c=x[5],s=x[6],u=x[7],f=x[8],p=x[9],h=x[10]);let $=void 0===p?1:p,k=void 0===h?2:h,z=(0,a.useRef)(null),j=(0,a.useRef)(!1);x[11]===Symbol.for("react.memo_cache_sentinel")?(g=()=>z.current,x[11]=g):g=x[11],(0,a.useImperativeHandle)(t,g),x[12]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{j.current=!1},x[12]=m):m=x[12];let S=m;x[13]!==s?(b=e=>{j.current=!0,s&&s(e)},x[13]=s,x[14]=b):b=x[14];let R=b;x[15]!==o?(v=()=>{o&&!j.current&&(z.current&&z.current.focus(),j.current=!0)},w=[o],x[15]=o,x[16]=v,x[17]=w):(v=x[16],w=x[17]),(0,a.useEffect)(v,w);let C=f?"true":"false",E=f?0:-1;return x[18]!==$||x[19]!==R||x[20]!==r||x[21]!==d||x[22]!==l||x[23]!==c||x[24]!==k||x[25]!==u||x[26]!==f||x[27]!==C||x[28]!==E?(y=(0,n.jsx)(rS,{"data-ui":"Tab",...u,"aria-selected":C,fontSize:$,icon:r,id:d,mode:"bleed",onClick:c,onBlur:S,onFocus:R,padding:k,ref:z,role:"tab",selected:f,tabIndex:E,text:l,type:"button"}),x[18]=$,x[19]=R,x[20]=r,x[21]=d,x[22]=l,x[23]=c,x[24]=k,x[25]=u,x[26]=f,x[27]=C,x[28]=E,x[29]=y):y=x[29],y});rR.displayName="ForwardRef(Tab)";let rC=(0,d.zo)(tV).withConfig({displayName:"CustomInline",componentId:"sc-5cm04m-0"})`& > div{display:inline-block;vertical-align:middle;max-width:100%;box-sizing:border-box;}`,rE=(0,a.forwardRef)(function(e,t){let o,r,d,l,c;let s=(0,i.c)(15);s[0]!==e?({children:o,...r}=e,s[0]=e,s[1]=o,s[2]=r):(o=s[1],r=s[2]);let[u,f]=(0,a.useState)(-1);if(s[3]!==o||s[4]!==u){let e;let t=a.Children.toArray(o).filter(a.isValidElement);s[6]!==u?(e=(e,t)=>(0,a.cloneElement)(e,{focused:u===t,key:t,onFocus:()=>f(t)}),s[6]=u,s[7]=e):e=s[7],d=t.map(e),s[3]=o,s[4]=u,s[5]=d}else d=s[5];let p=d,h=p.length;s[8]!==h?(l=e=>{"ArrowLeft"===e.key&&f(e=>(e+h-1)%h),"ArrowRight"===e.key&&f(e=>(e+1)%h)},s[8]=h,s[9]=l):l=s[9];let g=l;return s[10]!==g||s[11]!==t||s[12]!==r||s[13]!==p?(c=(0,n.jsx)(rC,{"data-ui":"TabList",...r,onKeyDown:g,ref:t,role:"tablist",children:p}),s[10]=g,s[11]=t,s[12]=r,s[13]=p,s[14]=c):c=s[14],c});rE.displayName="ForwardRef(TabList)"}}]);