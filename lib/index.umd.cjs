(function(n,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(n=typeof globalThis<"u"?globalThis:n||self,e(n.Vue3Components={},n.Vue))})(this,function(n,e){"use strict";const b="",i=(t,o)=>{const s=t.__vccOpts||t;for(const[d,c]of o)s[d]=c;return s},u={class:"starry-sky-bg"},p={class:"stars"},m=e.defineComponent({name:"StarrySky"}),r=i(Object.assign(m,{props:{starsCount:{type:[Number,String],default:()=>800},distance:{type:[Number,String],default:()=>800}},setup(t){const o=t,s=e.ref();return e.onMounted(()=>{s.value.forEach(c=>{let _=.1+Math.random()*1,f=o.distance+Math.random()*300;c.style.transformOrigin=`0 0 ${f}px`,c.style.transform=`translate3d(0,0,-${f}px) rotateY(${Math.random()*360}deg) rotateX(${Math.random()*-50}deg) scale(${_},${_})`})}),(d,c)=>(e.openBlock(),e.createElementBlock("div",u,[e.createElementVNode("div",p,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.starsCount,_=>(e.openBlock(),e.createElementBlock("div",{key:_,class:"star",ref_for:!0,ref_key:"star",ref:s}))),128))])]))}}),[["__scopeId","data-v-130f34be"]]);r.install=t=>{t.component(r.__name,r)};const S="",y={class:"btn"},h=e.defineComponent({name:"Button"}),a=i(Object.assign(h,{setup(t){return(o,s)=>(e.openBlock(),e.createElementBlock("div",y,[e.renderSlot(o.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-abc9ef64"]]);a.install=t=>{t.component(a.__name,a)};const k=[r,a],l=t=>{l.installed||(l.installed=!0,k.forEach(o=>{console.log(o),t.component(o.name,o)}))},g={install:l};n.Button=a,n.StarrySky=r,n.default=g,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});