import { defineComponent as i, ref as p, onMounted as m, openBlock as a, createElementBlock as o, createElementVNode as y, Fragment as g, renderList as v, renderSlot as h } from "vue";
const f = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [d, s] of e)
    n[d] = s;
  return n;
}, b = { class: "starry-sky-bg" }, x = { class: "stars" }, $ = i({
  name: "StarrySky"
}), k = /* @__PURE__ */ Object.assign($, {
  props: {
    starsCount: {
      type: [Number, String],
      default: () => 800
    },
    distance: {
      type: [Number, String],
      default: () => 800
    }
  },
  setup(t) {
    const e = t, n = p();
    return m(() => {
      n.value.forEach((s) => {
        let r = 0.1 + Math.random() * 1, u = e.distance + Math.random() * 300;
        s.style.transformOrigin = `0 0 ${u}px`, s.style.transform = `translate3d(0,0,-${u}px) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * -50}deg) scale(${r},${r})`;
      });
    }), (d, s) => (a(), o("div", b, [
      y("div", x, [
        (a(!0), o(g, null, v(t.starsCount, (r) => (a(), o("div", {
          key: r,
          class: "star",
          ref_for: !0,
          ref_key: "star",
          ref: n
        }))), 128))
      ])
    ]));
  }
}), c = /* @__PURE__ */ f(k, [["__scopeId", "data-v-130f34be"]]);
c.install = (t) => {
  t.component(c.__name, c);
};
const S = { class: "btn" }, M = i({
  name: "Button"
}), B = /* @__PURE__ */ Object.assign(M, {
  setup(t) {
    return (e, n) => (a(), o("div", S, [
      h(e.$slots, "default", {}, void 0, !0)
    ]));
  }
}), _ = /* @__PURE__ */ f(B, [["__scopeId", "data-v-abc9ef64"]]);
_.install = (t) => {
  t.component(_.__name, _);
};
const E = [c, _], l = (t) => {
  l.installed || (l.installed = !0, E.forEach((e) => {
    console.log(e), t.component(e.name, e);
  }));
}, C = {
  install: l
};
export {
  _ as Button,
  c as StarrySky,
  C as default
};
