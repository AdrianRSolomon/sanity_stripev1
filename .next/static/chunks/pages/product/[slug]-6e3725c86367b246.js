(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{2502:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[slug]",function(){return n(4054)}])},5763:function(e,t,n){"use strict";var l=n(5893),r=n(9008),i=n.n(r),o=n(1163),c=function(e){var t=e.title,n=e.description,r=e.featuredImage,c=e.type,s=void 0===c?"article":c,a=(0,o.useRouter)();return(0,l.jsxs)(i(),{children:[(0,l.jsx)("title",{children:"NextJS Sanity eCommerce".concat(t?" | ".concat(t):"")}),(0,l.jsx)("meta",{name:"description",content:n}),(0,l.jsx)("meta",{property:"og:title",content:t}),(0,l.jsx)("meta",{property:"og:description",content:n}),r&&(0,l.jsx)("meta",{property:"og:image",content:"".concat(r)}),s&&(0,l.jsx)("meta",{property:"og:type",content:s}),(0,l.jsx)("meta",{property:"og:url",content:"".concat("https://react-woocommerce.vercel.app").concat(a.asPath)})]})};t.Z=c},4054:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return ex},default:function(){return eb}});var l=n(1799),r=n(5893),i=n(7294),o=n(5675),c=n.n(o),s=n(1664),a=n.n(s),u=n(2260),m=n(276),p=Object.defineProperty,f=Object.defineProperties,d=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&x(e,n,t[n]);if(y)for(var n of y(t))k.call(t,n)&&x(e,n,t[n]);return e},v=(e,t)=>f(e,d(t));function g(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(void 0===e.marks||Array.isArray(e.marks)&&e.marks.every(e=>"string"==typeof e))}function _(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||Array.isArray(e.markDefs)&&e.markDefs.every(e=>"string"==typeof e._key))&&"children"in e&&Array.isArray(e.children)&&e.children.every(e=>"object"==typeof e&&"_type"in e)}function w(e){return _(e)&&"listItem"in e&&"string"==typeof e.listItem&&(void 0===e.level||"number"==typeof e.level)}function E(e){return"@list"===e._type}function j(e){return"@span"===e._type}function I(e){return"@text"===e._type}let O=["strong","em","code","underline","strike-through"];function N(e,t,n){if(!g(e)||!e.marks||!e.marks.length)return[];let l=e.marks.slice(),r={};return l.forEach(e=>{r[e]=1;for(let l=t+1;l<n.length;l++){let i=n[l];if(i&&g(i)&&Array.isArray(i.marks)&&-1!==i.marks.indexOf(e))r[e]++;else break}}),l.sort((e,t)=>(function(e,t,n){let l=e[t],r=e[n];if(l!==r)return r-l;let i=O.indexOf(t),o=O.indexOf(n);return i!==o?i-o:t.localeCompare(n)})(r,e,t))}function $(e,t){return(e.level||1)===t.level&&e.listItem===t.listItem}function P(e,t,n){return{_type:"@list",_key:`${e._key||`${t}`}-parent`,mode:n,level:e.level||1,listItem:e.listItem,children:[e]}}function A(e,t){let n=t.level||1,l=t.listItem||"normal",r="string"==typeof t.listItem;if(E(e)&&(e.level||1)===n&&r&&(e.listItem||"normal")===l)return e;if(!("children"in e))return;let i=e.children[e.children.length-1];return i&&!g(i)?A(i,t):void 0}let C=/^\s/,S=/^\s/;var T=Object.defineProperty,D=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&q(e,n,t[n]);if(L)for(var n of L(t))B.call(t,n)&&q(e,n,t[n]);return e},U=(e,t)=>D(e,Z(t)),X=(e,t)=>{var n={};for(var l in e)M.call(e,l)&&0>t.indexOf(l)&&(n[l]=e[l]);if(null!=e&&L)for(var l of L(e))0>t.indexOf(l)&&B.call(e,l)&&(n[l]=e[l]);return n};function G(e,t,n){let l=t[n],r=e[n];return"function"==typeof l||l&&"function"==typeof r?l:l?F(F({},r),l):r}let J=({children:e,value:t})=>i.createElement("a",{href:null==t?void 0:t.href},e),K={textDecoration:"underline"},R=({children:e})=>i.createElement("li",null,e),V=(e,t)=>`Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,W=e=>V(`block type "${e}"`,"types"),z=e=>V(`mark type "${e}"`,"marks"),H=e=>V(`block style "${e}"`,"block"),Q=e=>V(`list style "${e}"`,"list"),Y=e=>V(`list item style "${e}"`,"listItem");function ee(e){console.warn(e)}let et={display:"none"},en=({value:e,isInline:t})=>{let n=W(e._type);return t?i.createElement("span",{style:et},n):i.createElement("div",{style:et},n)},el=({markType:e,children:t})=>i.createElement("span",{className:`unknown__pt__mark__${e}`},t),er=({children:e})=>i.createElement("p",null,e),ei=({children:e})=>i.createElement("ul",null,e),eo=({children:e})=>i.createElement("li",null,e),ec=()=>i.createElement("br",null),es=(0,i.createContext)({types:{},block:{normal:({children:e})=>i.createElement("p",null,e),blockquote:({children:e})=>i.createElement("blockquote",null,e),h1:({children:e})=>i.createElement("h1",null,e),h2:({children:e})=>i.createElement("h2",null,e),h3:({children:e})=>i.createElement("h3",null,e),h4:({children:e})=>i.createElement("h4",null,e),h5:({children:e})=>i.createElement("h5",null,e),h6:({children:e})=>i.createElement("h6",null,e)},marks:{em:({children:e})=>i.createElement("em",null,e),strong:({children:e})=>i.createElement("strong",null,e),code:({children:e})=>i.createElement("code",null,e),underline:({children:e})=>i.createElement("span",{style:K},e),"strike-through":({children:e})=>i.createElement("del",null,e),link:J},list:{number:({children:e})=>i.createElement("ol",null,e),bullet:({children:e})=>i.createElement("ul",null,e)},listItem:R,hardBreak:ec,unknownType:en,unknownMark:el,unknownList:ei,unknownListItem:eo,unknownBlockStyle:er});function ea({value:e,components:t,listNestingMode:n,onMissingComponent:l=ee}){let r=l||ep,o=Array.isArray(e)?e:[e],c=function(e,t){let n=[],l;for(let r=0;r<e.length;r++){let i=e[r];if(i){if(!w(i)){n.push(i),l=void 0;continue}if(!l){l=P(i,r,t),n.push(l);continue}if($(i,l)){l.children.push(i);continue}if((i.level||1)>l.level){let o=P(i,r,t);if("html"===t){let c=l.children[l.children.length-1],s=v(b({},c),{children:[...c.children,o]});l.children[l.children.length-1]=s}else l.children.push(o);l=o;continue}if((i.level||1)<l.level){let a=n[n.length-1],u=a&&A(a,i);if(u){(l=u).children.push(i);continue}l=P(i,r,t),n.push(l);continue}if(i.listItem!==l.listItem){let m=n[n.length-1],p=m&&A(m,{level:i.level||1});if(p&&p.listItem===i.listItem){(l=p).children.push(i);continue}l=P(i,r,t),n.push(l);continue}console.warn("Unknown state encountered for block",i),n.push(i)}}return n}(o,n||"html"),s=(0,i.useContext)(es),a=(0,i.useMemo)(()=>t?function(e,t){let{block:n,list:l,listItem:r,marks:i,types:o}=t,c=X(t,["block","list","listItem","marks","types"]);return F(U(F({},e),{block:G(e,t,"block"),list:G(e,t,"list"),listItem:G(e,t,"listItem"),marks:G(e,t,"marks"),types:G(e,t,"types")}),c)}(s,t):s,[s,t]),u=(0,i.useMemo)(()=>eu(a,r),[a,r]),m=c.map((e,t)=>u({node:e,index:t,isInline:!1,renderNode:u}));return t?i.createElement(es.Provider,{value:a},m):i.createElement(i.Fragment,null,m)}let eu=(e,t)=>function n(l){let{node:r,index:o,isInline:c}=l,s=r._key||`node-${o}`;return E(r)?function(l,r,o){let c=l.children.map((e,t)=>n({node:e._key?e:U(F({},e),{_key:`li-${r}-${t}`}),index:r,isInline:!1,renderNode:n})),s=e.list,a="function"==typeof s?s:s[l.listItem],u=a||e.unknownList;if(u===e.unknownList){let m=l.listItem||"bullet";t(Q(m),{nodeType:"listStyle",type:m})}return i.createElement(u,{key:o,value:l,index:r,isInline:!1,renderNode:n},c)}(r,o,s):w(r)?function(l,r,o){let c=em({node:l,index:r,isInline:!1,renderNode:n}),s=e.listItem,a="function"==typeof s?s:s[l.listItem],u=a||e.unknownListItem;if(u===e.unknownListItem){let m=l.listItem||"bullet";t(Y(m),{type:m,nodeType:"listItemStyle"})}let p=c.children;if(l.style&&"normal"!==l.style){let{listItem:f}=l,d=X(l,["listItem"]);p=n({node:d,index:r,isInline:!1,renderNode:n})}return i.createElement(u,{key:o,value:l,index:r,isInline:!1,renderNode:n},p)}(r,o,s):j(r)?function(l,r,o){let{markDef:c,markType:s,markKey:a}=l,u=e.marks[s]||e.unknownMark,m=l.children.map((e,t)=>n({node:e,index:t,isInline:!0,renderNode:n}));return u===e.unknownMark&&t(z(s),{nodeType:"mark",type:s}),i.createElement(u,{key:o,text:function e(t){let n="";return t.children.forEach(t=>{I(t)?n+=t.text:j(t)&&(n+=e(t))}),n}(l),value:c,markType:s,markKey:a,renderNode:n},m)}(r,o,s):_(r)?function(l,r,o,c){let s=em({node:l,index:r,isInline:c,renderNode:n}),{_key:a}=s,u=X(s,["_key"]),m=u.node.style||"normal",p="function"==typeof e.block?e.block:e.block[m],f=p||e.unknownBlockStyle;return f===e.unknownBlockStyle&&t(H(m),{nodeType:"blockStyle",type:m}),i.createElement(f,U(F({key:o},u),{value:u.node,renderNode:n}))}(r,o,s,c):I(r)?function(t,n){if("\n"===t.text){let l=e.hardBreak;return l?i.createElement(l,{key:n}):"\n"}return t.text}(r,s):function(l,r,o,c){let s=e.types[l._type],a={value:l,isInline:c,index:r,renderNode:n};if(s)return i.createElement(s,F({key:o},a));t(W(l._type),{nodeType:"block",type:l._type});let u=e.unknownType;return i.createElement(u,F({key:o},a))}(r,o,s,c)};function em(e){let{node:t,index:n,isInline:l,renderNode:r}=e,i=function(e){var t;let{children:n,markDefs:l=[]}=e;if(!n||!n.length)return[];let r=n.map(N),i={_type:"@span",children:[],markType:"<unknown>"},o=[i];for(let c=0;c<n.length;c++){let s=n[c];if(!s)continue;let a=r[c]||[],u=1;if(o.length>1)for(;u<o.length;u++){let m=(null==(t=o[u])?void 0:t.markKey)||"",p=a.indexOf(m);if(-1===p)break;a.splice(p,1)}let f=(o=o.slice(0,u))[o.length-1];if(f){for(let d of a){let y=l.find(e=>e._key===d),h=y?y._type:d,k={_type:"@span",_key:s._key,children:[],markDef:y,markType:h,markKey:d};f.children.push(k),o.push(k),f=k}if(g(s)){let x=s.text.split("\n");for(let b=x.length;b-- >1;)x.splice(b,0,"\n");f.children=f.children.concat(x.map(e=>({_type:"@text",text:e})))}else f.children=f.children.concat(s)}}return i.children}(t),o=i.map((e,t)=>r({node:e,isInline:!0,index:t,renderNode:r}));return{_key:t._key||`block-${n}`,children:o,index:n,isInline:l,node:t}}function ep(){}var ef=n(8105),ed=n(4184),ey=n.n(ed),eh=n(5763),ek=n(310),ex=!0,eb=function(e){var t=e.product,n=(0,i.useContext)(ek.Z).toggleCartVisibility,o=(0,i.useContext)(u.Z).dispatch,s=function(){o({type:m.Z.addToCart,payload:(0,l.Z)({},t)}),n()};return(0,r.jsxs)(r.Fragment,{children:[(null==t?void 0:t.name)&&(0,r.jsx)(eh.Z,{title:t.name,description:function(e){let t=Array.isArray(e)?e:[e],n="";return t.forEach((e,l)=>{if(!_(e))return;let r=!1;e.children.forEach(e=>{g(e)?(n+=r&&n&&!S.test(n)&&!C.test(e.text)?" ":"",n+=e.text,r=!1):r=!0}),l!==t.length-1&&(n+="\n\n")}),n}(t.description)}),(null==t?void 0:t.categories)&&(0,r.jsx)("div",{className:"flex sm:flex-row flex-col justify-between w-full max-w-2xl mx-auto sm:mt-0 mb-9 ",children:(0,r.jsx)(a(),{href:"/category/".concat(t.categories[0].slug),children:(0,r.jsxs)("a",{children:["\xab ",t.categories[0].title]})})}),(0,r.jsxs)("div",{className:"flex sm:flex-row flex-col justify-between w-full max-w-2xl mx-auto sm:mt-8 mt-3",children:[(0,r.jsx)("div",{className:"overflow-hidden relative sm:w-2/5 w-full sm:mb-0 mb-5 h-80",children:(null==t?void 0:t.featured_image)&&(0,r.jsx)(c(),{src:(0,ef.Z)(t.featured_image).url(),layout:"fill",quality:100,className:"object-cover",alt:t.name})}),(0,r.jsxs)("div",{className:"sm:w-3/5 w-full sm:pl-6 sm:pr-0 pl-5 pr-5 ",children:[(0,r.jsx)("h1",{className:"text-4xl text-left font-bold text-gray-900 sm:truncate mb-8",children:null==t?void 0:t.name}),(0,r.jsxs)("h2",{className:"mb-6",children:[(0,r.jsx)("span",{className:"text-xl text-gray-900 mr-2",children:"Price: "}),(0,r.jsxs)("span",{className:ey()("text-2xl mb-1",{"line-through text-gray-400 mr-3":null==t?void 0:t.on_sale,"text-gray-900":!(null==t?void 0:t.on_sale)}),children:["$",null==t?void 0:t.price]}),(null==t?void 0:t.on_sale)&&(0,r.jsxs)("span",{className:"text-red-600 text-2xl ",children:["NOW $",null==t?void 0:t.sale_price]})]}),(0,r.jsx)("h3",{className:"text-xl text-gray-900 mr-2",children:"Description:"}),(null==t?void 0:t.description)&&(0,r.jsx)("div",{className:"text-gray-600 text-sm mb-5",children:(0,r.jsx)(ea,{value:null==t?void 0:t.description})}),(0,r.jsx)("button",{onClick:s,className:"bg-black px-6 py-3 text-white text-xs uppercase hover:bg-white hover:text-black border-black border-2 transition-colors duration-500",children:"Add To Cart"})]})]})]})}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2502)}),_N_E=e.O()}]);