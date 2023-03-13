var Ct=Object.defineProperty;var Et=(e,t,s)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var u=(e,t,s)=>(Et(e,typeof t!="symbol"?t+"":t,s),s);import{j as ee,u as _,a as R,r as y,p as a,L as q,A as Re,F as Tt,G as Nt,l as Rt,C as vt,S as H,s as _t,w as qe,D as It,b as L,U as Ot,c as wt,f as E,d as te,e as Fe,g as At,P as Pt,M as kt,h as Ut,N as Lt,i as Dt,k as xe,m as x,n as Me,o as Ge,q as M,t as se,R as $,v as qt,x as He,y as ne,z as Ft,B as xt,E as Mt,H as Gt,I as Ht,J as $t,K as T,O as d,Q as ve,T as Kt,V as Wt,W as Bt,X as jt,Y as Vt}from"./vendor-7db9f202.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const G=ee.Fragment,n=ee.jsx,c=ee.jsxs,w="/ecommerce-v18",J=w+"/",v=w+"/signin",D=w+"/signup",$e=w+"/forgot_password",ae=w+"/checkout/step1",Qt=w+"/checkout/step2",zt=w+"/checkout/step3",Yt=w+"/account",re=e=>new Intl.NumberFormat("hi-IN",{style:"currency",currency:"INR"}).format(e),Ke=e=>!e||(e==null?void 0:e.length)===0?0:e.reduce((s,r)=>s+r,0).toFixed(2),Z=(e,t="info")=>{const s=document.createElement("div"),r=document.createElement("span");s.className=`toast ${t==="info"?"toast-info":t==="success"?"toast-success":"toast-error"}`,r.className="toast-msg",r.textContent=e,s.appendChild(r),document.querySelector(".toast")&&document.body.removeChild(document.querySelector(".toast")),document.body.appendChild(s),setTimeout(()=>{try{document.body.removeChild(s)}catch(o){console.log(o)}},3e3)},oe="SIGNIN",We="SIGNIN_SUCCESS",ie="SIGNUP",Xt="SIGNUP_SUCCESS",ce="SIGNOUT",Be="SIGNOUT_SUCCESS",je="RESET_PASSWORD",le="SIGNIN_WITH_GOOGLE",de="SIGNIN_WITH_FACEBOOK",Ve="SET_AUTH_STATUS",Jt="ON_AUTHSTATE_CHANGED",ue="ON_AUTHSTATE_SUCCESS",he="ON_AUTHSTATE_FAIL",me="GET_PRODUCTS",Zt="SEARCH_PRODUCT",es="SEARCH_PRODUCT_SUCCESS",Qe="GET_PRODUCTS_SUCCESS",ts="ADD_PRODUCT",ss="ADD_PRODUCT_SUCCESS",ns="REMOVE_PRODUCT",as="REMOVE_PRODUCT_SUCCESS",rs="EDIT_PRODUCT",os="EDIT_PRODUCT_SUCCESS",is="CLEAR_SEARCH_STATE",ze="LOADING",Ye="IS_AUTHENTICATING",Xe="SET_REQUEST_STATUS",Je="SET_CART_ITEMS",Ze="ADD_TO_CART",et="REMOVE_FROM_CART",tt="CLEAR_CART",st="ADD_QTY_ITEM",nt="MINUS_QTY_ITEM",cs="SET_TEXT_FILTER",ls="SET_BRAND_FILTER",ds="SET_MIN_PRICE_FILTER",us="SET_MAX_PRICE_FILTER",at="RESET_FILTER",hs="APPLY_FILTER",ms="CLEAR_RECENT_SEARCH",ps="REMOVE_SELECTED_RECENT",rt="SET_PROFILE",gs="UPDATE_PROFILE_SUCCESS",ot="CLEAR_PROFILE",ys="SET_CHECKOUT_SHIPPING_DETAILS",bs="SET_CHECKOUT_PAYMENT_DETAILS",it="RESET_CHECKOUT",_e=(e=[])=>({type:Je,payload:e}),fs=e=>({type:Ze,payload:e}),ct=e=>({type:et,payload:e}),lt=()=>({type:tt}),Ss=e=>({type:st,payload:e}),Cs=e=>({type:nt,payload:e}),Es=()=>{const{cart:e}=_(o=>({cart:o.cart})),t=R(),s=o=>!!e.find(i=>i.id===o);return{cart:e,isItemOnCart:s,addToCart:o=>{s(o.id)?(t(ct(o.id)),Z("Item removed from cart","info")):(t(fs(o)),Z("Item added to cart","success"))}}},Ts=(e=!1)=>{const[t,s]=y.useState(e);return y.useEffect(()=>(s(!0),()=>{s(!1)}),[]),t},pe=e=>{y.useLayoutEffect(()=>{e?document.title=e:document.title="V18 - eCommerce React App"},[e])},Ns=()=>{const[e,t]=y.useState(!1);return{isOpenModal:e,onOpenModal:()=>{t(!0)},onCloseModal:()=>{t(!1)}}},B=()=>{y.useEffect(()=>{window.scrollTo(0,0)},[])},dt=({history:e})=>(B(),c("div",{className:"page-not-found",children:[n("h1",{children:":( Page you are looking for doesn't exists."}),n("br",{}),n("button",{className:"button",onClick:e.goBack,type:"button",children:"Go back"})]}));dt.propTypes={history:a.shape({goBack:a.func}).isRequired};class ge extends y.Component{static getDerivedStateFromError(){return{hasError:!0}}constructor(t){super(t),this.state={hasError:!1}}componentDidCatch(t){console.log(t)}render(){const{hasError:t}=this.state,{children:s}=this.props;return t?n("div",{className:"loader",children:n("h3",{children:":( Something went wrong."})}):s}}ge.propTypes={children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired};const K=({message:e,description:t,buttonLabel:s,action:r})=>c("div",{className:"loader",children:[n("h2",{className:"text-center",style:{wordBreak:"break-all"},children:e||"Message"}),t&&n("span",{children:t}),n("br",{}),r&&n("button",{className:"button button-small",onClick:r,type:"button",children:s||"Okay"})]});K.defaultProps={description:void 0,buttonLabel:"Okay",action:void 0};K.propTypes={message:a.string.isRequired,description:a.string,buttonLabel:a.string,action:a.func};const j=({src:e,alt:t,className:s})=>{const r={},[o,i]=y.useState(r[e]),l=()=>{r[e]=!0,i(!0)};return c(G,{children:[!o&&n(q,{style:{position:"absolute",top:0,bottom:0,right:0,left:0,margin:"auto"}}),n("img",{alt:t||"",className:`${s||""} ${o?"is-img-loaded":"is-img-loading"}`,onLoad:l,src:e})]})};j.defaultProps={className:"image-loader"};j.propTypes={src:a.string.isRequired,alt:a.string,className:a.string};const ye=({isOpen:e,onRequestClose:t,afterOpenModal:s,overrideStyle:r,children:o})=>{const i={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",position:"fixed",padding:"50px 20px",transition:"all .5s ease",zIndex:9999,marginRight:"-50%",transform:"translate(-50%, -50%)",boxShadow:"0 5px 10px rgba(0, 0, 0, .1)",animation:"scale .3s ease",...r}};return Re.setAppElement("#app"),n(Re,{closeTimeoutMS:300,contentLabel:"Product Modal",isOpen:e,onAfterOpen:s,onRequestClose:t,shouldCloseOnOverlayClick:!0,style:i,children:o})};ye.defaultProps={overrideStyle:{},afterOpenModal:()=>{}};ye.propTypes={isOpen:a.bool.isRequired,onRequestClose:a.func.isRequired,afterOpenModal:a.func,overrideStyle:a.object,children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired};const Rs=(e,t)=>({type:oe,payload:{email:e,password:t}}),Ie=e=>({type:We,payload:e}),vs=e=>({type:ie,payload:e}),_s=()=>({type:ce}),Oe=()=>({type:Be}),Is=e=>({type:ue,payload:e}),Os=e=>({type:he,payload:e}),ws=()=>({type:le}),As=()=>({type:de}),be=({isLoading:e})=>{const t=R();return c("div",{className:"auth-provider",children:[c("button",{className:"button auth-provider-button provider-facebook",disabled:e,onClick:()=>{t(As())},type:"button",children:[n(Tt,{}),"Continue with Facebook"]}),c("button",{className:"button auth-provider-button provider-google",disabled:e,onClick:()=>{t(ws())},type:"button",children:[n(Nt,{}),"Continue with Google"]})]})};be.propTypes={isLoading:a.bool.isRequired};const W=({product:e,isItemOnCart:t,addToCart:s})=>{const r=()=>{e&&e.id},o=t?t(e.id):!1,i=()=>{s&&s({...e,selectedSize:e.sizes[0]})};return n(Rt.SkeletonTheme,{color:"#e1e1e1",highlightColor:"#f2f2f2",children:c("div",{className:`product-card ${e.id?"":"product-loading"}`,style:{border:e&&o?"1px solid #a6a5a5":"",boxShadow:e&&o?"0 10px 15px rgba(0, 0, 0, .07)":"none"},children:[o&&n(vt,{className:"fa fa-check product-card-check"}),c("div",{className:"product-card-content",onClick:r,role:"presentation",children:[n("div",{className:"product-card-img-wrapper",children:e.image?n(j,{alt:e.name,className:"product-card-img",src:e.image}):n(H,{width:"100%",height:"90%"})}),c("div",{className:"product-details",children:[n("h5",{className:"product-card-name text-overflow-ellipsis margin-auto",children:e.name||n(H,{width:80})}),n("p",{className:"product-card-brand",children:e.brand||n(H,{width:60})}),n("h4",{className:"product-card-price",children:e.price?`Rs. ${e.price}`:n(H,{width:40})})]})]}),e.id&&n("button",{className:`product-card-button button-small button button-block ${o?"button-border button-border-gray":""}`,onClick:i,type:"button",children:o?"Remove from cart":"Add to cart"})]})})};W.defaultProps={isItemOnCart:void 0,addToCart:void 0};W.propTypes={product:a.object.isRequired,isItemOnCart:a.func,addToCart:a.func};const ut=({products:e})=>{const{addToCart:t,isItemOnCart:s}=Es();return n("div",{className:"product-grid",children:e.length===0?new Array(12).fill({}).map((r,o)=>n(W,{product:r},`product-skeleton ${o}`)):e.map(r=>n(W,{isItemOnCart:s,addToCart:t,product:r},r.id))})};ut.propTypes={products:a.array.isRequired};const V=(e=!0)=>({type:ze,payload:e}),fe=e=>({type:Xe,payload:e}),O=(e=!0)=>({type:Ye,payload:e}),N=(e=null)=>({type:Ve,payload:e}),Ps=e=>({type:me,payload:e}),ks=e=>({type:Qe,payload:e}),Se=e=>{const{products:t,filteredProducts:s,isLoading:r,requestStatus:o,children:i}=e,[l,h]=y.useState(!1),f=R(),m=()=>{h(!0),f(Ps(t.lastRefKey))};return y.useEffect(()=>((t.items.length===0||!t.lastRefKey)&&m(),window.scrollTo(0,0),()=>f(V(!1))),[]),y.useEffect(()=>{h(!1)},[t.lastRefKey]),s.length===0&&!r?n(K,{message:(o==null?void 0:o.message)||"No products found."}):s.length===0&&o?n(K,{message:(o==null?void 0:o.message)||"Something went wrong :(",action:m,buttonLabel:"Try Again"}):c(ge,{children:[i,t.items.length<=t.total&&n("div",{className:"d-flex-center padding-l",children:n("button",{className:"button button-small",disabled:l,onClick:m,type:"button",children:l?"Fetching Items...":"Show More Items"})})]})};Se.defaultProps={requestStatus:null};Se.propTypes={products:a.object.isRequired,filteredProducts:a.array.isRequired,isLoading:a.bool.isRequired,requestStatus:a.string,children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired};const Us=()=>{const e=_(t=>({filteredProducts:t.products.items,products:t.products,requestStatus:t.app.requestStatus,isLoading:t.app.loading}),_t);return n("main",{className:"content",children:n("section",{className:"product-list-wrapper",children:n(Se,{...e,children:n(ut,{products:e.filteredProducts})})})})},ht=()=>{const{profile:e,isAuthenticating:t}=_(l=>({profile:l.profile,isAuthenticating:l.app.isAuthenticating})),s=y.useRef(null),r=R(),o=l=>{const h=l.target.closest("div.user-nav");try{!h&&s.current.classList.contains("user-sub-open")&&s.current.classList.remove("user-sub-open")}catch(f){console.log(f)}};return y.useEffect(()=>(document.addEventListener("click",o),()=>document.removeEventListener("click",o)),[]),t?c("div",{className:"user-nav",children:[n("span",{children:"Signing Out"})," ",n(q,{})]}):c("div",{className:"user-nav",onClick:()=>{s.current.classList.toggle("user-sub-open")},onKeyDown:()=>{},ref:s,role:"button",tabIndex:0,children:[n("h5",{className:"text-overflow-ellipsis",children:e.fullname&&e.fullname.split(" ")[0]}),n("div",{className:"user-nav-img-wrapper",children:n("img",{alt:"",className:"user-nav-img",src:e.avatar})}),n(It,{style:{fontSize:"1.2rem",marginLeft:"1rem"}}),c("div",{className:"user-nav-sub",children:[e.role!=="ADMIN"&&c(L,{to:Yt,className:"user-nav-sub-link",children:["View Account",n(Ot,{})]}),c("h6",{className:"user-nav-sub-link margin-0 d-flex",onClick:()=>r(_s()),role:"presentation",children:["Sign Out",n(wt,{})]})]})]})};ht.propType={profile:a.object.isRequired};const Ls=qe(ht),Ds={apiKey:"AIzaSyDxX8ztCRmT6lkFKpNmJWfa1LHptLjR6KM",authDomain:"ecommerce-313203.firebaseapp.com",databaseURL:"https://ecommerce-313203-default-rtdb.asia-southeast1.firebasedatabase.app/",projectId:"ecommerce-313203",storageBucket:"ecommerce-313203.appspot.com",messagingSenderId:"633972212347",appId:"1:633972212347:web:2327108db57c8cb24c98de"};class qs{constructor(){u(this,"createAccount",(t,s)=>this.auth.createUserWithEmailAndPassword(t,s));u(this,"signIn",(t,s)=>this.auth.signInWithEmailAndPassword(t,s));u(this,"signInWithGoogle",()=>this.auth.signInWithPopup(new E.auth.GoogleAuthProvider));u(this,"signInWithFacebook",()=>this.auth.signInWithPopup(new E.auth.FacebookAuthProvider));u(this,"signInWithGithub",()=>this.auth.signInWithPopup(new E.auth.GithubAuthProvider));u(this,"signOut",()=>this.auth.signOut());u(this,"passwordReset",t=>this.auth.sendPasswordResetEmail(t));u(this,"addUser",(t,s)=>this.db.collection("users").doc(t).set(s));u(this,"getUser",t=>this.db.collection("users").doc(t).get());u(this,"passwordUpdate",t=>this.auth.currentUser.updatePassword(t));u(this,"changePassword",(t,s)=>new Promise((r,o)=>{this.reauthenticate(t).then(()=>{this.auth.currentUser.updatePassword(s).then(()=>{r("Password updated successfully!")}).catch(l=>o(l))}).catch(i=>o(i))}));u(this,"reauthenticate",t=>{const s=this.auth.currentUser,r=E.auth.EmailAuthProvider.credential(s.email,t);return s.reauthenticateWithCredential(r)});u(this,"updateEmail",(t,s)=>new Promise((r,o)=>{this.reauthenticate(t).then(()=>{this.auth.currentUser.updateEmail(s).then(()=>{r("Email Successfully updated")}).catch(l=>o(l))}).catch(i=>o(i))}));u(this,"updateProfile",(t,s)=>this.db.collection("users").doc(t).update(s));u(this,"onAuthStateChanged",()=>new Promise((t,s)=>{this.auth.onAuthStateChanged(r=>{r?t(r):s(new Error("Auth State Changed failed"))})}));u(this,"saveCartItems",(t,s)=>this.db.collection("users").doc(s).update({cart:t}));u(this,"setAuthPersistence",()=>this.auth.setPersistence(E.auth.Auth.Persistence.LOCAL));u(this,"getSingleProduct",t=>this.db.collection("products").doc(t).get());u(this,"getProducts",t=>{let s=!1;return new Promise((r,o)=>{(async()=>{if(t)try{const l=await this.db.collection("products").orderBy(E.firestore.FieldPath.documentId()).startAfter(t).limit(6).get(),h=[];l.forEach(m=>h.push({id:m.id,...m.data()}));const f=l.docs[l.docs.length-1];r({products:h,lastKey:f})}catch(i){o((i==null?void 0:i.message)||":( Failed to fetch products.")}else{const i=setTimeout(()=>{s=!0,o(new Error("Request timeout, please try again"))},15e3);try{const h=(await this.db.collection("products").get()).docs.length,m=await this.db.collection("products").orderBy(E.firestore.FieldPath.documentId()).limit(6).get();if(clearTimeout(i),!s){const b=[];m.forEach(p=>b.push({id:p.id,...p.data()}));const C=m.docs[m.docs.length-1];r({products:b,lastKey:C,total:h})}}catch(l){if(s)return;o((l==null?void 0:l.message)||":( Failed to fetch products.")}}})()})});u(this,"searchProducts",t=>{let s=!1;return new Promise((r,o)=>{(async()=>{const i=this.db.collection("products"),l=setTimeout(()=>{s=!0,o(new Error("Request timeout, please try again"))},15e3);try{const h=i.orderBy("name_lower").where("name_lower",">=",t).where("name_lower","<=",`${t}`).limit(12),f=i.orderBy("dateAdded","desc").where("keywords","array-contains-any",t.split(" ")).limit(12),m=await h.get(),b=await f.get();if(clearTimeout(l),!s){const C=[],p=[];let k=null;m.empty||(m.forEach(I=>{C.push({id:I.id,...I.data()})}),k=m.docs[m.docs.length-1]),b.empty||b.forEach(I=>{p.push({id:I.id,...I.data()})});const g=[...C,...p],A={};g.forEach(I=>{A[I.id]=I}),r({products:Object.values(A),lastKey:k})}}catch(h){if(s)return;o(h)}})()})});u(this,"getFeaturedProducts",(t=12)=>this.db.collection("products").where("isFeatured","==",!0).limit(t).get());u(this,"getRecommendedProducts",(t=12)=>this.db.collection("products").where("isRecommended","==",!0).limit(t).get());u(this,"addProduct",(t,s)=>this.db.collection("products").doc(t).set(s));u(this,"generateKey",()=>this.db.collection("products").doc().id);u(this,"storeImage",async(t,s,r)=>await(await this.storage.ref(s).child(t).put(r)).ref.getDownloadURL());u(this,"deleteImage",t=>this.storage.ref("products").child(t).delete());u(this,"editProduct",(t,s)=>this.db.collection("products").doc(t).update(s));u(this,"removeProduct",t=>this.db.collection("products").doc(t).delete());E.initializeApp(Ds),this.storage=E.storage(),this.db=E.firestore(),this.auth=E.auth()}}const S=new qs,Fs=()=>{const{isOpenModal:e,onOpenModal:t,onCloseModal:s}=Ns(),{cart:r,user:o}=_(p=>({cart:p.cart,user:p.auth})),i=te(),{pathname:l}=Fe(),h=R(),f=Ts();y.useEffect(()=>{f&&S.auth.currentUser&&r.length!==0&&S.saveCartItems(r,S.auth.currentUser.uid).then(()=>{console.log("Item saved to cart")}).catch(p=>{console.log(p)})},[r.length]);const m=()=>{r.length!==0&&o?(document.body.classList.remove("is-cart-open"),i.push(ae)):t()},b=()=>{s(),document.body.classList.remove("cart-open"),i.push(v)},C=()=>{r.length!==0&&h(lt())};return o&&o.role==="ADMIN"?null:c(ge,{children:[c(ye,{isOpen:e,onRequestClose:s,children:[n("p",{className:"text-center",children:"You must sign in to continue checking out"}),n("br",{}),c("div",{className:"d-flex-center",children:[n("button",{className:"button button-border button-border-gray button-small",onClick:s,type:"button",children:"Continue shopping"})," ",n("button",{className:"button button-small",onClick:b,type:"button",children:"Sign in to checkout"})]})]}),c("div",{className:"cart",children:[c("div",{className:"cart-list",children:[c("div",{className:"cart-header",children:[c("h3",{className:"cart-header-title",children:["My Cart  ",c("span",{children:["(",` ${r.length} ${r.length>1?"items":"item"}`,")"]})]}),n(Ee,{children:({onClickToggle:p})=>n("span",{className:"cart-toggle button button-border button-border-gray button-small",onClick:p,role:"presentation",children:"Close"})}),n("button",{className:"cart-clear button button-border button-border-gray button-small",disabled:r.length===0,onClick:C,type:"button",children:n("span",{children:"Clear Cart"})})]}),r.length<=0&&n("div",{className:"cart-empty",children:n("h5",{className:"cart-empty-msg",children:"Your cart is empty"})}),r.map((p,k)=>n(Ce,{product:p,cart:r,dispatch:h},`${p.id}_${k}`))]}),c("div",{className:"cart-checkout",children:[c("div",{className:"cart-total",children:[n("p",{className:"cart-total-title",children:"Subtotal Amout:"}),n("h2",{className:"cart-total-amount",children:re(Ke(r.map(p=>p.price*p.quantity)))})]}),n("button",{className:"cart-checkout-button button",disabled:r.length===0||l==="/checkout",onClick:m,type:"button",children:"Check Out"})]})]})]})},Ce=({product:e})=>{const t=R(),s=()=>t(ct(e.id));return c("div",{className:"cart-item",children:[n(mt,{product:e}),c("div",{className:"cart-item-wrapper",children:[n("div",{className:"cart-item-img-wrapper",children:n(j,{alt:e.name,className:"cart-item-img",src:e.image})}),c("div",{className:"cart-item-details",children:[n(L,{to:`/product/${e.id}`,onClick:()=>document.body.classList.remove("is-cart-open"),children:n("h4",{className:"underline cart-item-name",children:e.name})}),c("div",{className:"cart-item-specs",children:[c("div",{children:[n("span",{className:"spec-title",children:"Quantity"}),n("h5",{className:"my-0",children:e.quantity})]}),c("div",{children:[n("span",{className:"spec-title",children:"Size"}),c("h5",{className:"my-0",children:[e.selectedSize," ","mm"]})]}),c("div",{children:[n("span",{className:"spec-title",children:"Color"}),n("div",{style:{backgroundColor:e.selectedColor||e.availableColors[0],width:"15px",height:"15px",borderRadius:"50%"}})]})]})]}),n("div",{className:"cart-item-price",children:n("h4",{className:"my-0",children:re(parseFloat(e.price)*e.quantity)})}),n("button",{className:"cart-item-remove button button-border button-border-gray button-small",onClick:s,type:"button",children:n(At,{})})]})]})};Ce.propTypes={product:a.shape({id:a.string,name:a.string,brand:a.string,price:a.string,quantity:a.number,maxQuantity:a.number,description:a.string,keywords:a.arrayOf(a.string),selectedSize:a.string,selectedColor:a.string,imageCollection:a.arrayOf(a.string),sizes:a.arrayOf(a.number),image:a.string,imageUrl:a.string,isFeatured:a.bool,isRecommended:a.bool,availableColors:a.arrayOf(a.string)}).isRequired};const mt=({product:e})=>{const t=R(),s=()=>{e.quantity<e.maxQuantity&&t(Ss(e.id))},r=()=>{e.maxQuantity>=e.quantity&&e.quantity!==0&&t(Cs(e.id))};return c("div",{className:"cart-item-control",children:[n("button",{className:"button button-border button-border-gray button-small cart-control cart-control-add",disabled:e.maxQuantity===e.quantity,onClick:s,type:"button",children:n(Pt,{style:{fontSize:"9px"}})}),n("button",{className:"button button-border button-border-gray button-small cart-control cart-control-minus",disabled:e.quantity===1,onClick:r,type:"button",children:n(kt,{style:{fontSize:"9px"}})})]})};mt.propTypes={product:a.shape({id:a.string,name:a.string,brand:a.string,price:a.string,quantity:a.number,maxQuantity:a.number,description:a.string,keywords:a.arrayOf(a.string),selectedSize:a.string,selectedColor:a.string,imageCollection:a.arrayOf(a.string),sizes:a.arrayOf(a.number),image:a.string,imageUrl:a.string,isFeatured:a.bool,isRecommended:a.bool,availableColors:a.arrayOf(a.string)}).isRequired};const Ee=({children:e})=>{const t=()=>{document.body.classList.contains("is-cart-open")?document.body.classList.remove("is-cart-open"):document.body.classList.add("is-cart-open")};return document.addEventListener("click",s=>{const r=s.target.closest(".cart"),o=s.target.closest(".cart-toggle"),i=s.target.closest(".cart-item-remove");!r&&document.body.classList.contains("is-cart-open")&&!o&&!i&&document.body.classList.remove("is-cart-open")}),e({onClickToggle:t})};Ee.propTypes={children:a.oneOfType([a.arrayOf(a.node),a.func,a.node]).isRequired};const pt=({count:e,children:t})=>c("div",{className:"badge",children:[t,e>=1&&n("span",{className:"badge-count",children:e})]});pt.propTypes={count:a.number.isRequired,children:a.oneOfType([a.arrayOf(a.node),a.node]).isRequired};const xs="/ecommerce-v18/assets/cart-2c78d023.png",Ms=()=>{const[e,t]=y.useState(""),{filter:s,isLoading:r}=_(g=>({filter:g.filter,isLoading:g.app.loading})),o=y.useRef(null),i=te(),l=R(),h=window.screen.width<=800,f=g=>{const A=g.target.value.trimStart();t(A)},m=g=>{g.keyCode===13&&(g.target.blur(),o.current.classList.remove("is-open-recent-search"),h&&i.push("/"),i.push(`/search/${e.trim().toLowerCase()}`))},b=g=>{g.target.closest(".searchbar")||(o.current.classList.remove("is-open-recent-search"),document.removeEventListener("click",b))},C=g=>{g.target.select(),s.recent.length!==0&&(o.current.classList.add("is-open-recent-search"),document.addEventListener("click",b))},p=g=>{o.current.classList.remove("is-open-recent-search"),i.push(`/search/${g.trim().toLowerCase()}`)},k=()=>{};return n(G,{children:c("div",{className:"searchbar",ref:o,children:[n(Ut,{className:"searchbar-icon"}),n("input",{className:"search-input searchbar-input",onChange:f,onKeyUp:m,onFocus:C,placeholder:"Search product...",readOnly:r,type:"text",value:e}),s.recent.length!==0&&c("div",{className:"searchbar-recent",children:[c("div",{className:"searchbar-recent-header",children:[n("h5",{children:"Recent Search"}),n("h5",{className:"searchbar-recent-clear text-subtle",onClick:k,role:"presentation",children:"Clear"})]}),s.recent.map((g,A)=>c("div",{className:"searchbar-recent-wrapper",children:[n("h5",{className:"searchbar-recent-keyword margin-0",onClick:()=>p(g),role:"presentation",children:g}),n("span",{className:"searchbar-recent-button text-subtle",onClick:()=>l(removeSelectedRecent(g)),role:"presentation",children:"X"})]},`search-${g}-${A}`))]})]})})},Gs=()=>{const e=y.useRef(null),{pathname:t}=Fe(),s=_(l=>({cartLength:l.cart.length,user:l.auth,isAuthenticating:l.app.isAuthenticating,isLoading:l.app.loading})),r=()=>{e.current&&window.screen.width>480&&(window.pageYOffset>=70?e.current.classList.add("is-nav-scrolled"):e.current.classList.remove("is-nav-scrolled"))};y.useEffect(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[]);const o=l=>{s.isAuthenticating&&l.preventDefault()},i=[ae,Qt,zt,v,D,$e];return s.user&&s.user.role,c("nav",{className:"navigation",ref:e,children:[n("div",{className:"logo",children:n(L,{onClick:o,to:J,children:n("img",{alt:"Logo",src:xs})})}),n("ul",{className:"navigation-menu-main",children:n("li",{children:n(Lt,{activeClassName:"navigation-menu-active",exact:!0,to:J,children:"Home"})})}),n(Ms,{}),c("ul",{className:"navigation-menu",children:[n("li",{className:"navigation-menu-item",children:n(Ee,{children:({onClickToggle:l})=>n("button",{className:"button-link navigation-menu-link cart-toggle",disabled:i.includes(t),onClick:l,type:"button",children:n(pt,{count:s.cartLength,children:n(Dt,{style:{fontSize:"2.4rem"}})})})})}),s.user?n("li",{className:"navigation-menu-item",children:n(Ls,{})}):c("li",{className:"navigation-action",children:[t!==D&&n(L,{className:"button button-small",onClick:o,to:D,children:"Sign Up"}),t!==v&&n(L,{className:"button button-small button-muted margin-left-s",onClick:o,to:v,children:"Sign In"})]})]})]})};a.string.isRequired,a.shape({values:a.object,touched:a.object,errors:a.object}).isRequired,a.func.isRequired,a.func.isRequired;a.arrayOf(a.object),a.oneOfType([a.object,a.array]).isRequired,a.string.isRequired,a.string,a.bool,a.string,a.string;const P=({field:e,form:{touched:t,errors:s},label:r,inputRef:o,...i})=>c("div",{className:"input-group",children:[t[e.name]&&s[e.name]?n("span",{className:"label-input label-error",children:s[e.name]}):n("label",{className:"label-input",htmlFor:e.name,children:r}),n("input",{type:"text",id:e.name,className:`input-form ${t[e.name]&&s[e.name]&&"input-error"}`,ref:o,...e,...i})]});P.defaultProps={inputRef:void 0};P.propTypes={label:a.string.isRequired,field:a.object.isRequired,form:a.object.isRequired,inputRef:a.oneOfType([a.func,a.shape({current:a.instanceOf(Element)})])};a.string,a.string,a.object.isRequired;a.string.isRequired,a.object.isRequired,a.object.isRequired;const Hs=xe().shape({email:x().email("Email is not valid.").required("Email is required."),password:x().required("Password is required.").min(8,"Password length should be at least 8 characters.").matches(/[A-Z\W]/g,"Password should contain at least 1 uppercase letter."),fullname:x().required("Full name is required.").min(4,"Name should be at least 4 characters.")}),gt=({history:e})=>{const{isAuthenticating:t,authStatus:s}=_(l=>({isAuthenticating:l.app.isAuthenticating,authStatus:l.app.authStatus})),r=R();B(),pe("Sign Up"),y.useEffect(()=>()=>{r(N(null)),r(O(!1))},[]);const o=()=>e.push(v),i=l=>{console.log("sign up clicked"),r(vs({fullname:l.fullname.trim(),email:l.email.trim().toLowerCase(),password:l.password.trim()}))};return c("div",{className:"auth-content",children:[(s==null?void 0:s.success)&&n("div",{className:"loader",children:c("h3",{className:"toast-success auth-success",children:[s==null?void 0:s.message,n(q,{})]})}),!(s!=null&&s.success)&&c(G,{children:[(s==null?void 0:s.message)&&n("h5",{className:"text-center toast-error",children:s==null?void 0:s.message}),c("div",{className:`auth ${(s==null?void 0:s.message)&&!(s!=null&&s.success)&&"input-error"}`,children:[c("div",{className:"auth-main",children:[n("h3",{children:"Sign up to V18"}),n(Me,{initialValues:{fullname:"",email:"",password:""},validateOnChange:!0,validationSchema:Hs,onSubmit:i,children:()=>c(Ge,{children:[n("div",{className:"auth-field",children:n(M,{disabled:t,name:"fullname",type:"text",label:"* Full Name",placeholder:"John Doe",style:{textTransform:"capitalize"},component:P})}),n("div",{className:"auth-field",children:n(M,{disabled:t,name:"email",type:"email",label:"* Email",placeholder:"test@example.com",component:P})}),n("div",{className:"auth-field",children:n(M,{disabled:t,name:"password",type:"password",label:"* Password",placeholder:"Your Password",component:P})}),n("br",{}),n("div",{className:"auth-field auth-action auth-action-signup",children:c("button",{className:"button auth-button",disabled:t,type:"submit",children:[t?"Signing Up":"Sign Up"," ",t?n(q,{}):n(se,{})]})})]})})]}),n("div",{className:"auth-divider",children:n("h6",{children:"OR"})}),n(be,{isLoading:t})]}),c("div",{className:"auth-message",children:[n("span",{className:"auth-info",children:n("strong",{children:"Already have an account?"})}),n("button",{className:"button button-small button-border button-border-gray",disabled:t,onClick:o,type:"button",children:"Sign In"})]})]})]})};gt.propTypes={history:a.shape({push:a.func}).isRequired};const $s=xe().shape({email:x().email("Email is not valid.").required("Email is required."),password:x().required("Password is required.")}),yt=({history:e})=>{const{authStatus:t,isAuthenticating:s}=_(h=>({authStatus:h.app.authStatus,isAuthenticating:h.app.isAuthenticating})),r=R();B(),pe("Sign In"),y.useEffect(()=>()=>{r(N(null)),r(O(!1))},[]);const o=()=>e.push(D),i=h=>{r(Rs(h.email,h.password))},l=h=>{s&&h.preventDefault()};return c("div",{className:"auth-content",children:[(t==null?void 0:t.success)&&n("div",{className:"loader",children:c("h3",{className:"toast-success auth-success",children:[t.message,n(q,{})]})}),!(t!=null&&t.success)&&c(G,{children:[(t==null?void 0:t.message)&&n("h5",{className:"text-center toast-error",children:t==null?void 0:t.message}),c("div",{className:`auth ${(t==null?void 0:t.message)&&!(t!=null&&t.success)&&"input-error"}`,children:[c("div",{className:"auth-main",children:[n("h3",{children:"Sign in to V18"}),n("br",{}),n("div",{className:"auth-wrapper",children:n(Me,{initialValues:{email:"",password:""},validateOnChange:!0,validationSchema:$s,onSubmit:i,children:()=>c(Ge,{children:[n("div",{className:"auth-field",children:n(M,{disabled:s,name:"email",type:"email",label:"Email",placeholder:"test@example.com",component:P})}),n("div",{className:"auth-field",children:n(M,{disabled:s,name:"password",type:"password",label:"Password",placeholder:"Your Password",component:P})}),n("br",{}),c("div",{className:"auth-field auth-action",children:[n(L,{onClick:l,style:{textDecoration:"underline"},to:$e,children:n("span",{children:"Forgot password?"})}),c("button",{className:"button auth-button",disabled:s,type:"submit",children:[s?"Signing In":"Sign In"," ",s?n(q,{}):n(se,{})]})]})]})})})]}),n("div",{className:"auth-divider",children:n("h6",{children:"OR"})}),n(be,{isLoading:s})]}),c("div",{className:"auth-message",children:[n("span",{className:"auth-info",children:n("strong",{children:"Don't have an account?"})}),n("button",{className:"button button-small button-border button-border-gray button-icon",disabled:s,onClick:o,type:"button",children:"Sign Up"})]})]})]})};yt.propTypes={history:a.shape({push:a.func}).isRequired};const Ks=e=>qe(t=>{console.log("with checkout");const s=_(i=>({isAuth:!!i.auth.id&&!!i.auth.role,cart:i.cart,shipping:i.checkout.shipping,payment:i.checkout.payment,profile:i.profile})),r=s.shipping.isInternational?50:0,o=Ke(s.cart.map(i=>i.price*i.quantity));return s.isAuth?s.cart.length===0?n($,{to:"/"}):s.isAuth&&s.cart.length!==0?(console.log("I ws here"),n(e,{...t,cart:s.cart,payment:s.payment,profile:s.profile,shipping:s.shipping,subtotal:Number(o+r)})):null:n($,{to:v})}),bt=({cart:e,subtotal:t})=>{pe("Check Out Step 1"),B();const s=R(),r=te(),o=()=>r.push("/"),i=()=>{Z("Feature not ready yet :)","info")};return n("div",{className:"checkout",children:c("div",{className:"checkout-step-1",children:[n("h3",{className:"text-center",children:"Order Summary"}),n("span",{className:"d-block text-center",children:"Review items in your cart."}),n("br",{}),n("div",{className:"checkout-items",children:e.map(l=>n(Ce,{cart:e,dispatch:s,product:l},l.id))}),n("br",{}),c("div",{className:"cart-total text-right",children:[n("p",{className:"cart-total-title",children:"Subtotal:"}),n("h2",{className:"cart-total-amount",children:re(t)})]}),n("br",{}),c("div",{className:"checkout-shipping-action",children:[c("button",{className:"button button-muted",onClick:o,type:"button",children:[n(qt,{}),"  Continue Shopping"]}),c("button",{className:"button",onClick:i,type:"submit",children:["Place Order  ",n(se,{})]})]})]})})};bt.propTypes={cart:a.arrayOf(a.object).isRequired,subtotal:a.number.isRequired};const Ws=Ks(bt),Te=({isAuth:e,role:t,component:s,path:r,...o})=>n(ne,{...o,render:i=>{const{from:l}=i.location.state||{from:{pathname:"/"}};return e&&(t==="USER"||t==="ADMIN")&&(r===v||r===D)?n($,{to:l}):n("main",{className:"content",children:n(s,{...i})})}});Te.defaultProps={isAuth:!1,role:"USER",path:"/"};Te.propTypes={isAuth:a.bool,role:a.string,component:a.func.isRequired,path:a.string,rest:a.any};const Bs=({auth:e})=>({isAuth:!!e,role:(e==null?void 0:e.role)||""}),Q=He(Bs)(Te),Ne=({isAuth:e,role:t,component:s,...r})=>n(ne,{...r,component:o=>e&&t==="USER"?n("main",{className:"content",children:n(s,{...o})}):n($,{to:{pathname:v,state:{from:o.location}}})});Ne.defaultProps={isAuth:!1,role:"USER"};Ne.propTypes={isAuth:a.bool,role:a.string,component:a.func.isRequired,rest:a.any};const js=({auth:e})=>({isAuth:!!e,role:(e==null?void 0:e.role)||""}),Vs=He(js)(Ne),Qs=Ft(),zs=()=>n(xt,{history:Qs,children:c(G,{children:[n(Gs,{}),n(Fs,{}),c(Mt,{children:[n(ne,{path:J,component:Us,exact:!0}),n(Q,{path:D,component:gt,exact:!0}),n(Q,{path:v,exact:!0,component:yt}),n(Vs,{path:ae,exact:!0,component:Ws}),n(Q,{component:dt})]})]})}),ft=({store:e})=>n(y.StrictMode,{children:n(Gt,{store:e,children:n(zs,{})})});ft.propTypes={store:a.any.isRequired};const Ys="modulepreload",Xs=function(e){return"/ecommerce-v18/"+e},we={},Js=function(t,s,r){if(!s||s.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(s.map(i=>{if(i=Xs(i),i in we)return;we[i]=!0;const l=i.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(!!r)for(let b=o.length-1;b>=0;b--){const C=o[b];if(C.href===i&&(!l||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${h}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Ys,l||(m.as="script",m.crossOrigin=""),m.href=i,document.head.appendChild(m),l)return new Promise((b,C)=>{m.addEventListener("load",b),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},Zs=e=>{e&&e instanceof Function&&Js(()=>import("./web-vitals-bd683175.js"),[]).then(({getCLS:t,getFID:s,getFCP:r,getLCP:o,getTTFB:i})=>{t(e),s(e),r(e),o(e),i(e)})};const en=null,tn=(e=en,t)=>{switch(t.type){case We:return{id:t.payload.id,role:t.payload.role,provider:t.payload.provider};case Be:return null;default:return e}},z={lastRefKey:null,total:0,items:[]},sn=(e={...z,searchedProducts:z},t)=>{switch(t.type){case Qe:return{...e,lastRefKey:t.payload.lastKey,total:t.payload.total,items:[...e.items,...t.payload.products]};case ss:return{...e,items:[...e.items,t.payload]};case es:return{...e,searchedProducts:{lastRefKey:t.payload.lastKey,total:t.payload.total,items:[...e.searchedProducts.items,...t.payload.products]}};case is:return{...e,searchedProducts:z};case as:return{...e,items:e.items.filter(s=>s.id!==t.payload)};case os:return{...e,items:e.items.map(s=>s.id===t.payload.id?{...s,...t.payload.updates}:s)};default:return e}},nn={loading:!1,isAuthenticating:!1,authStatus:null,requestStatus:null,theme:"light"},an=(e=nn,t)=>{switch(t.type){case ze:return{...e,loading:t.payload};case Ye:return{...e,isAuthenticating:t.payload};case Xe:return{...e,requestStatus:t.payload};case Ve:return{...e,authStatus:t.payload};default:return e}},rn=(e=[],t)=>{switch(t.type){case Je:return t.payload;case Ze:return e.some(s=>s.id===t.payload.id)?e:[t.payload,...e];case et:return e.filter(s=>s.id!==t.payload);case tt:return[];case st:return e.map(s=>s.id===t.payload?{...s,quantity:s.quantity+1}:s);case nt:return e.map(s=>s.id===t.payload?{...s,quantity:s.quantity-1}:s);default:return e}},Ae={recent:[],keyword:"",brand:"",minPrice:0,maxPrice:0,sortBy:""},on=(e=Ae,t)=>{switch(t.type){case cs:return{...e,recent:e.recent.find(s=>s===t.payload)||t.payload===""?e.recent:[t.payload,...e.recent],keyword:t.payload};case ls:return{...e,brand:t.payload};case us:return{...e,maxPrice:t.payload};case ds:return{...e,minPrice:t.payload};case at:return Ae;case ms:return{...e,recent:[]};case ps:return{...e,recent:e.recent.filter(s=>s!==t.payload)};case hs:return{...e,...t.payload};default:return e}},cn=(e={},t)=>{switch(t.type){case rt:return t.payload;case gs:return{...e,...t.payload};case ot:return{};default:return e}},Pe={shipping:{},payment:{type:"paypal",name:"",cardnumber:"",expiry:"",ccv:""}},ln=(e=Pe,t)=>{switch(t.type){case ys:return{...e,shipping:t.payload};case bs:return{...e,payment:t.payload};case it:return Pe;default:return e}},dn=Ht({auth:tn,products:sn,app:an,cart:rn,filter:on,profile:cn,checkout:ln});function*un(){yield d(V(!0)),yield d(fe(null))}function*ke(e){yield d(V(!1)),yield d(fe((e==null?void 0:e.message)||"Failed to fetch products")),console.log("ERROR: ",e)}function*hn({type:e,payload:t}){switch(e){case me:try{yield un();const s=yield $t(),r=yield T(S.getProducts,t);r.products.length===0?ke("No items found."):(yield d(ks({products:r.products,lastKey:r.lastKey?r.lastKey:s.products.lastRefKey,total:r.total?r.total:s.products.total})),yield d(fe(""))),yield d(V(!1))}catch(s){console.log(s),yield ke(s)}break}}const mn=()=>({type:at}),Ue=()=>({type:ot}),Y=e=>({type:rt,payload:e}),pn=()=>({type:it}),Le="/ecommerce-v18/assets/defaultAvatar-6d69d324.jpg",De="/ecommerce-v18/assets/defaultBanner-2759a645.jpg";function*F(e){const t={success:!1,type:"auth",isError:!0};switch(yield d(O(!1)),e.code){case"auth/network-request-failed":yield d(N({...t,message:"Network error has occured. Please try again."}));break;case"auth/email-already-in-use":yield d(N({...t,message:"Email is already in use. Please use another email"}));break;case"auth/wrong-password":yield d(N({...t,message:"Incorrect email or password"}));break;case"auth/user-not-found":yield d(N({...t,message:"Incorrect email or password"}));break;case"auth/reset-password-error":yield d(N({...t,message:"Failed to send password reset email. Did you type your email correctly?"}));break;default:yield d(N({...t,message:e.message}));break}}function*U(){yield d(O()),yield d(N({}))}function*gn({type:e,payload:t}){switch(e){case oe:try{yield U(),yield T(S.signIn,t.email,t.password)}catch(s){yield F(s)}break;case le:try{yield U(),yield T(S.signInWithGoogle)}catch(s){yield F(s)}break;case de:try{yield U(),yield T(S.signInWithFacebook)}catch(s){yield F(s)}break;case ie:try{console.log("I was in saga auth"),yield U();const s=yield T(S.createAccount,t.email,t.password),o={fullname:t.fullname.split(" ").map(i=>i[0].toUpperCase().concat(i.substring(1))).join(" "),avatar:Le,banner:De,email:t.email,address:"",cart:[],mobile:{data:{}},role:"USER",dateJoined:s.user.metadata.creationTime||new Date().getTime()};yield T(S.addUser,s.user.uid,o),yield d(Y(o)),yield d(O(!1))}catch(s){yield F(s)}break;case ce:{try{yield U(),yield T(S.signOut),yield d(lt()),yield d(Ue()),yield d(mn()),yield d(pn()),yield d(Oe()),yield d(O(!1)),yield T(history.push,v)}catch(s){console.log(s)}break}case je:{try{yield U(),yield T(S.passwordReset,t),yield d(N({success:!0,type:"reset",message:"Password reset email has been sent to your provided email."})),yield d(O(!1))}catch{F({code:"auth/reset-password-error"})}break}case ue:{const s=yield T(S.getUser,t.uid);if(s.data()){const r=s.data();yield d(Y(r)),yield d(_e(r.cart)),yield d(_e(r.cart)),yield d(Ie({id:t.uid,role:r.role,provider:t.providerData[0].providerId}))}else if(t.providerData[0].providerId!=="password"&&!s.data()){const r={fullname:t.displayName?t.displayName:"User",avatar:t.photoURL?t.photoURL:Le,banner:De,email:t.email,address:"",cart:[],mobile:{data:{}},role:"USER",dateJoined:t.metadata.creationTime};yield T(S.addUser,t.uid,r),yield d(Y(r)),yield d(Ie({id:t.uid,role:r.role,provider:t.providerData[0].providerId}))}yield d(N({success:!0,type:"auth",isError:!1,message:"Successfully signed in. Redirecting..."})),yield d(O(!1));break}case he:{yield d(Ue()),yield d(Oe());break}default:throw new Error(`Unexpected Auth Action Type. ${e}`)}}function*yn(){yield ve([oe,ie,Xt,ce,le,de,Jt,ue,he,je],gn),yield ve([ts,Zt,ns,rs,me],hn)}const St=Kt(),bn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||jt,fn=bn(Wt(St)),X=Bt(dn,fn);St.run(yn);const Sn=document.getElementById("app");S.auth.onAuthStateChanged(e=>{e?X.dispatch(Is(e)):X.dispatch(Os("Failed to authenticate")),Vt.render(n(ft,{store:X}),Sn)});Zs();
