import {C as e, l as i, z as s} from "./CFooterCvLink.astro_astro_type_script_index_0_lang.262e3cbf.js";
(class extends e {
    static componentName = "CEventItem";
    isInitLottie = !1;
    onInit() {
        this.initLottie(),
        this.iconWrapper = this.el.querySelector(".icon-wrapper")
    }
    initLottie() {
        this.isInitLottie || (this.isInitLottie = !0,
        this.lottie = i.loadAnimation({
            container: this.refs.icon,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            path: `/assets/lottie/${this.el.dataset.cEventItemClosed === "true" ? "event_icon_close" : "event_icon_open"}.json`
        }),
        this.lottie.setSpeed(1.1))
    }
    onMouseenter() {
        s(this),
        this.lottie?.goToAndPlay(0)
    }
    onIntersect({isIntersecting: t}) {
        this.el?.classList.contains("-closed") || (t ? this.iconWrapper.classList.add("-play") : this.iconWrapper.classList.remove("-play"))
    }
    onDestroy() {
        this.lottie?.destroy()
    }
}
).register();
