(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{62131:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/token/[contractAddress]/[tokenId]",function(){return a(5930)}])},5993:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(85893);a(67294);var i=a(34485),r=a.n(i);function o(e){let{maxWidth:t,children:a}=e;return(0,n.jsx)("div",{className:"".concat(r().container," ").concat(r()[t]),children:a})}},76725:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(85893);a(67294);var i=a(49365),r=a.n(i);function o(e){let{height:t,width:a}=e;return(0,n.jsx)("div",{style:{width:a,height:t,borderRadius:"inherit"},className:r().skeleton})}},5930:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSG:function(){return v},default:function(){return x}});var n=a(85893),i=a(18605),r=a(67294),o=a(5993),s=a(15644),l=a(25896),c=a.n(l),d=a(41664),u=a.n(d),m=a(83470),p=a(76725),f=a(86501),h=a(14017);let[g,_]=[(0,m.Z)(),(0,m.Z)()];var v=!0;function x(e){var t,a,l,d,m,v,x,y,b;let{nft:k,contractMetadata:N}=e,[j,w]=(0,r.useState)(),{contract:C,isLoading:T}=(0,i.cq)(s.YJ,"marketplace-v3"),{contract:E}=(0,i.cq)(s.f2),{data:O,isLoading:I}=(0,i.aB)(C,{tokenContract:s.f2,tokenId:k.metadata.id}),{data:Z,isLoading:P}=(0,i.QQ)(C,{tokenContract:s.f2,tokenId:k.metadata.id}),{data:A,isLoading:F}=(0,i.pc)(E,"Transfer",{queryFilter:{filters:{tokenId:k.metadata.id},order:"desc"}});async function V(){let e;if(!j){(0,f.ZP)("Please enter a bid value",{icon:"❌",style:h.Z,position:"bottom-center"});return}if(null==Z?void 0:Z[0])e=await (null==C?void 0:C.englishAuctions.makeBid(Z[0].id,j));else if(null==O?void 0:O[0])e=await (null==C?void 0:C.offers.makeOffer({assetContractAddress:s.f2,tokenId:k.metadata.id,totalPrice:j}));else throw Error("No valid listing found for this NFT");return e}async function $(){let e;if(null==Z?void 0:Z[0])e=await (null==C?void 0:C.englishAuctions.buyoutAuction(Z[0].id));else if(null==O?void 0:O[0])e=await (null==C?void 0:C.directListings.buyFromListing(O[0].id,1));else throw Error("No valid listing found for this NFT");return e}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.x7,{position:"bottom-center",reverseOrder:!1}),(0,n.jsx)(o.Z,{maxWidth:"lg",children:(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)("div",{className:c().metadataContainer,children:[(0,n.jsx)(i.CH,{metadata:k.metadata,className:c().image}),(0,n.jsxs)("div",{className:c().descriptionContainer,children:[(0,n.jsx)("h3",{className:c().descriptionTitle,children:"Description"}),(0,n.jsx)("p",{className:c().description,children:k.metadata.description}),(0,n.jsx)("h3",{className:c().descriptionTitle,children:"Traits"}),(0,n.jsx)("div",{className:c().traitsContainer,children:Object.entries((null==k?void 0:null===(t=k.metadata)||void 0===t?void 0:t.attributes)||{}).map(e=>{let[t,a]=e;return(0,n.jsxs)("div",{className:c().traitContainer,children:[(0,n.jsx)("p",{className:c().traitName,children:t}),(0,n.jsx)("p",{className:c().traitValue,children:(null==a?void 0:a.toString())||""})]},t)})}),(0,n.jsx)("h3",{className:c().descriptionTitle,children:"History"}),(0,n.jsx)("div",{className:c().traitsContainer,children:null==A?void 0:A.map((e,t)=>{var a,i,r,o;return(0,n.jsxs)("div",{className:c().eventsContainer,children:[(0,n.jsxs)("div",{className:c().eventContainer,children:[(0,n.jsx)("p",{className:c().traitName,children:"Event"}),(0,n.jsx)("p",{className:c().traitValue,children:t===A.length-1?"Mint":"Transfer"})]}),(0,n.jsxs)("div",{className:c().eventContainer,children:[(0,n.jsx)("p",{className:c().traitName,children:"From"}),(0,n.jsxs)("p",{className:c().traitValue,children:[null===(a=e.data.from)||void 0===a?void 0:a.slice(0,4),"...",null===(i=e.data.from)||void 0===i?void 0:i.slice(-2)]})]}),(0,n.jsxs)("div",{className:c().eventContainer,children:[(0,n.jsx)("p",{className:c().traitName,children:"To"}),(0,n.jsxs)("p",{className:c().traitValue,children:[null===(r=e.data.to)||void 0===r?void 0:r.slice(0,4),"...",null===(o=e.data.to)||void 0===o?void 0:o.slice(-2)]})]}),(0,n.jsx)("div",{className:c().eventContainer,children:(0,n.jsx)(u(),{className:c().txHashArrow,href:"".concat(s.t0,"/tx/").concat(e.transaction.transactionHash),target:"_blank",children:"↗"})})]},e.transaction.transactionHash)})})]})]}),(0,n.jsxs)("div",{className:c().listingContainer,children:[N&&(0,n.jsxs)("div",{className:c().contractMetadataContainer,children:[(0,n.jsx)(i.W8,{src:N.image,className:c().collectionImage}),(0,n.jsx)("p",{className:c().collectionName,children:N.name})]}),(0,n.jsx)("h1",{className:c().title,children:k.metadata.name}),(0,n.jsxs)("p",{className:c().collectionName,children:["Token ID #",k.metadata.id]}),(0,n.jsxs)(u(),{href:"/profile/".concat(k.owner),className:c().nftOwnerContainer,children:[(0,n.jsx)("div",{className:c().nftOwnerImage,style:{background:"linear-gradient(90deg, ".concat(g,", ").concat(_,")")}}),(0,n.jsxs)("div",{className:c().nftOwnerInfo,children:[(0,n.jsx)("p",{className:c().label,children:"Current Owner"}),(0,n.jsxs)("p",{className:c().nftOwnerAddress,children:[k.owner.slice(0,8),"...",k.owner.slice(-4)]})]})]}),(0,n.jsx)("div",{className:c().pricingContainer,children:(0,n.jsxs)("div",{className:c().pricingInfo,children:[(0,n.jsx)("p",{className:c().label,children:"Price"}),(0,n.jsx)("div",{className:c().pricingValue,children:T||I||P?(0,n.jsx)(p.Z,{width:"120",height:"24"}):(0,n.jsx)(n.Fragment,{children:O&&O[0]?(0,n.jsxs)(n.Fragment,{children:[null===(a=O[0])||void 0===a?void 0:a.currencyValuePerToken.displayValue," "+(null===(l=O[0])||void 0===l?void 0:l.currencyValuePerToken.symbol)]}):Z&&Z[0]?(0,n.jsxs)(n.Fragment,{children:[null===(d=Z[0])||void 0===d?void 0:d.buyoutCurrencyValue.displayValue," "+(null===(m=Z[0])||void 0===m?void 0:m.buyoutCurrencyValue.symbol)]}):"Not for sale"})}),(0,n.jsx)("div",{children:P?(0,n.jsx)(p.Z,{width:"120",height:"24"}):(0,n.jsx)(n.Fragment,{children:Z&&Z[0]&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:c().label,style:{marginTop:12},children:"Bids starting from"}),(0,n.jsxs)("div",{className:c().pricingValue,children:[null===(v=Z[0])||void 0===v?void 0:v.minimumBidCurrencyValue.displayValue," "+(null===(x=Z[0])||void 0===x?void 0:x.minimumBidCurrencyValue.symbol)]})]})})})]})}),T||I||P?(0,n.jsx)(p.Z,{width:"100%",height:"164"}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.tn,{contractAddress:s.YJ,action:async()=>await $(),onSuccess:()=>{(0,f.ZP)("Purchase success!",{icon:"✅",style:h.Z,position:"bottom-center"})},onError:e=>{(0,f.ZP)("Purchase failed! Reason: ".concat(e.message),{icon:"❌",style:h.Z,position:"bottom-center"})},children:"Buy at asking price"}),(0,n.jsx)("div",{className:"".concat(c().listingTimeContainer," ").concat(c().or),children:(0,n.jsx)("p",{className:c().listingTime,children:"or"})}),(0,n.jsx)("input",{className:c().input,defaultValue:(null==Z?void 0:null===(y=Z[0])||void 0===y?void 0:null===(b=y.minimumBidCurrencyValue)||void 0===b?void 0:b.displayValue)||0,type:"number",step:1e-6,onChange:e=>{w(e.target.value)}}),(0,n.jsx)(i.tn,{contractAddress:s.YJ,action:async()=>await V(),onSuccess:()=>{(0,f.ZP)("Bid success!",{icon:"✅",style:h.Z,position:"bottom-center"})},onError:e=>{console.log(e),(0,f.ZP)("Bid failed! Reason: ".concat(e.message),{icon:"❌",style:h.Z,position:"bottom-center"})},children:"Place bid"})]})]})]})})]})}},83470:function(e,t,a){"use strict";function n(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}a.d(t,{Z:function(){return n}})},14017:function(e,t){"use strict";t.Z={borderRadius:"4px",background:"#222528",color:"#fff","white-space":"pre-wrap","word-break":"break-word"}},34485:function(e){e.exports={container:"Container_container__WAGEk",xs:"Container_xs__lmLxX",sm:"Container_sm__NxnH_",md:"Container_md__R9xsg",lg:"Container_lg__ri4gN",xl:"Container_xl__2fgyR"}},49365:function(e){e.exports={skeleton:"Skeleton_skeleton__2C_Ou",pulse:"Skeleton_pulse__kM_6B"}},25896:function(e){e.exports={container:"Token_container__9s0fK",metadataContainer:"Token_metadataContainer__jhcGy",listingContainer:"Token_listingContainer__IhZxS",image:"Token_image__H7h2C",input:"Token_input__Odktg",contractMetadataContainer:"Token_contractMetadataContainer__juKmG",imageContainer:"Token_imageContainer__iA8Sc",crossButton:"Token_crossButton__kWnxP",collectionImage:"Token_collectionImage__niZfe",collectionName:"Token_collectionName__cFhKs",title:"Token_title__jJT0a",nftOwnerContainer:"Token_nftOwnerContainer__02bxs",nftOwnerImage:"Token_nftOwnerImage__vD_nJ",nftOwnerInfo:"Token_nftOwnerInfo__fGJDv",label:"Token_label__9Ed7k",nftOwnerAddress:"Token_nftOwnerAddress__3IWOZ",descriptionContainer:"Token_descriptionContainer__nhPLd",descriptionTitle:"Token_descriptionTitle__C0j5Z",traitsContainer:"Token_traitsContainer__tFYqd",traitContainer:"Token_traitContainer___o8Rp",eventsContainer:"Token_eventsContainer__T_8WP",traitValue:"Token_traitValue__YKY3f",traitName:"Token_traitName__2FHmj",eventContainer:"Token_eventContainer__ubrC_",txHashArrow:"Token_txHashArrow__IHgy1",pricingContainer:"Token_pricingContainer__WZR87",pricingInfo:"Token_pricingInfo__aZRmu",pricingValue:"Token_pricingValue__5ZXWr",buyButton:"Token_buyButton__AqcrL",listingTimeContainer:"Token_listingTimeContainer__KYs3v",listingTime:"Token_listingTime__TdHHY",or:"Token_or__N9F8M"}},86501:function(e,t,a){"use strict";let n,i;a.d(t,{x7:function(){return ei},ZP:function(){return er}});var r,o=a(67294);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let a="",n="",i="";for(let r in e){let o=e[r];"@"==r[0]?"i"==r[1]?a=r+" "+o+";":n+="f"==r[1]?m(o,r):r+"{"+m(o,"k"==r[1]?"":t)+"}":"object"==typeof o?n+=m(o,t?t.replace(/([^,])+/g,e=>r.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):r):null!=o&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=m.p?m.p(r,o):r+":"+o+";")}return a+(t&&i?t+"{"+i+"}":i)+n},p={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,n,i)=>{var r,o;let s=f(e),l=p[s]||(p[s]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(s));if(!p[l]){let t=s!==e?e:(e=>{let t,a,n=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?n.shift():t[3]?(a=t[3].replace(u," ").trim(),n.unshift(n[0][a]=n[0][a]||{})):n[0][t[1]]=t[2].replace(u," ").trim();return n[0]})(e);p[l]=m(i?{["@keyframes "+l]:t}:t,a?"":"."+l)}let h=a&&p.g?p.g:null;return a&&(p.g=p[l]),r=p[l],o=t,h?o.data=o.data.replace(h,r):-1===o.data.indexOf(r)&&(o.data=n?r+o.data:o.data+r),l},g=(e,t,a)=>e.reduce((e,n,i)=>{let r=t[i];if(r&&r.call){let e=r(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+n+(null==r?"":r)},"");function _(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}_.bind({g:1});let v,x,y,b=_.bind({k:1});function k(e,t){let a=this||{};return function(){let n=arguments;function i(r,o){let s=Object.assign({},r),l=s.className||i.className;a.p=Object.assign({theme:x&&x()},s),a.o=/ *go\d+/.test(l),s.className=_.apply(a,n)+(l?" "+l:""),t&&(s.ref=o);let c=e;return e[0]&&(c=s.as||e,delete s.as),y&&c[0]&&y(s),v(c,s)}return t?t(i):i}}var N=e=>"function"==typeof e,j=(e,t)=>N(e)?e(t):e,w=(n=0,()=>(++n).toString()),C=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},T=new Map,E=e=>{if(T.has(e))return;let t=setTimeout(()=>{T.delete(e),A({type:4,toastId:e})},1e3);T.set(e,t)},O=e=>{let t=T.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?I(e,{type:1,toast:a}):I(e,{type:0,toast:a});case 3:let{toastId:n}=t;return n?E(n):e.toasts.forEach(e=>{E(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},Z=[],P={toasts:[],pausedAt:void 0},A=e=>{P=I(P,e),Z.forEach(e=>{e(P)})},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},V=(e={})=>{let[t,a]=(0,o.useState)(P);(0,o.useEffect)(()=>(Z.push(a),()=>{let e=Z.indexOf(a);e>-1&&Z.splice(e,1)}),[t]);let n=t.toasts.map(t=>{var a,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}});return{...t,toasts:n}},$=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||w()}),H=e=>(t,a)=>{let n=$(t,e,a);return A({type:2,toast:n}),n.id},B=(e,t)=>H("blank")(e,t);B.error=H("error"),B.success=H("success"),B.loading=H("loading"),B.custom=H("custom"),B.dismiss=e=>{A({type:3,toastId:e})},B.remove=e=>A({type:4,toastId:e}),B.promise=(e,t,a)=>{let n=B.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(B.success(j(t.success,e),{id:n,...a,...null==a?void 0:a.success}),e)).catch(e=>{B.error(j(t.error,e),{id:n,...a,...null==a?void 0:a.error})}),e};var D=(e,t)=>{A({type:1,toast:{id:e,height:t}})},M=()=>{A({type:5,time:Date.now()})},S=e=>{let{toasts:t,pausedAt:a}=V(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),n=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&B.dismiss(t.id);return}return setTimeout(()=>B.dismiss(t.id),a)});return()=>{n.forEach(e=>e&&clearTimeout(e))}},[t,a]);let n=(0,o.useCallback)(()=>{a&&A({type:6,time:Date.now()})},[a]),i=(0,o.useCallback)((e,a)=>{let{reverseOrder:n=!1,gutter:i=8,defaultPosition:r}=a||{},o=t.filter(t=>(t.position||r)===(e.position||r)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...n?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:D,startPause:M,endPause:n,calculateOffset:i}}},L=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,z=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,R=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${b`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=k("div")`
  position: absolute;
`,W=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,J=({toast:e})=>{let{icon:t,type:a,iconTheme:n}=e;return void 0!==t?"string"==typeof t?o.createElement(q,null,t):t:"blank"===a?null:o.createElement(W,null,o.createElement(z,{...n}),"loading"!==a&&o.createElement(Y,null,"error"===a?o.createElement(L,{...n}):o.createElement(R,{...n})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,U=(e,t)=>{let a=e.includes("top")?1:-1,[n,i]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(a),K(a)];return{animation:t?`${b(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=o.memo(({toast:e,position:t,style:a,children:n})=>{let i=e.height?U(e.position||t||"top-center",e.visible):{opacity:0},r=o.createElement(J,{toast:e}),s=o.createElement(Q,{...e.ariaProps},j(e.message,e));return o.createElement(X,{className:e.className,style:{...i,...a,...e.style}},"function"==typeof n?n({icon:r,message:s}):o.createElement(o.Fragment,null,r,s))});r=o.createElement,m.p=void 0,v=r,x=void 0,y=void 0;var et=({id:e,className:t,style:a,onHeightUpdate:n,children:i})=>{let r=o.useCallback(t=>{if(t){let a=()=>{n(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return o.createElement("div",{ref:r,className:t,style:a},i)},ea=(e,t)=>{let a=e.includes("top"),n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...n}},en=_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:n,children:i,containerStyle:r,containerClassName:s})=>{let{toasts:l,handlers:c}=S(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...r},className:s,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let r=a.position||t,s=ea(r,c.calculateOffset(a,{reverseOrder:e,gutter:n,defaultPosition:t}));return o.createElement(et,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?en:"",style:s},"custom"===a.type?j(a.message,a):i?i(a):o.createElement(ee,{toast:a,position:r}))}))},er=B}},function(e){e.O(0,[774,888,179],function(){return e(e.s=62131)}),_N_E=e.O()}]);