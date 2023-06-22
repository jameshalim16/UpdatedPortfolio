import {C as n, A as t, z as c} from "./CFooterCvLink.astro_astro_type_script_index_0_lang.262e3cbf.js";
const i = .7
  , a = .92
  , l = "power2.inOut"
  , f = "expo.out"
  , h = .33
  , e = 1.4
  , r = 1.9
  , O = .15
  , R = .63
  , s = ["#f788e7", "#289d57", "#f9bcb0", "#97afe6", "#f70f17"];
(class extends n {
    static componentName = "CButton";
    onInit() {
        t.set([this.refs.bg, this.refs.color], {
            clearProps: !0
        }),
        t.set([this.refs.bg, this.refs.color], {
            xPercent: -100,
            transformOrigin: "right"
        })
    }
    onMouseenter() {
        this.tl && this.tl.kill();
        const o = Math.floor(Math.random() * s.length);
        this.tl = t.timeline(),
        this.tl.set(this.refs.color, {
            "--background-color": s[o]
        }).set([this.refs.bg, this.refs.color], {
            xPercent: -100
        }).fromTo(this.refs.color, {
            "--background-color": s[o],
            xPercent: -100,
            scaleX: 1
        }, {
            xPercent: 100 * ((e - 1) / 2),
            scaleX: e,
            duration: i,
            ease: l
        }).progress(O).fromTo(this.refs.bg, {
            xPercent: -100 * r,
            scaleX: r
        }, {
            xPercent: 0,
            scaleX: 1,
            duration: a,
            ease: f
        }, h),
        c(this, {
            durationIn: R
        })
    }
}
).register();
