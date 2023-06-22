import {P as W, C as c, l as d, g as s, s as n, e as $, a as k, b as q, m as U, w as C, c as B, d as M, t as Y, o as G, f as K, h as z, i as X, j, k as Q, n as p, p as u, q as E} from "./CFooterCvLink.astro_astro_type_script_index_0_lang.635a4800.js";
import "./js/CEventItem.astro_astro_type_script_index_0_lang.781cf504.js";
import "./js/CButton.astro_astro_type_script_index_0_lang.e574c030.js";
import {L as a} from "_astro/js/Local.698f0f50.js";
import {V as v} from "_astro/js/vivus.bce1f9e7.js";
import {V as f} from "_astro/js/video.8d2e17ce.js";
(class extends W {
}
).register();
(class extends c {
    static componentName = "LApproachFigure";
    static intersectOptions = {
        rootMargin: "-15% 0%"
    };
    static intersectOnce = !0;
    isInitLottie = !1;
    isPlay = !1;
    onInit() {
        this.titles = [...this.el.querySelectorAll("[data-approach-title]")],
        this.catches = this.el.querySelector("[data-approach-catch]"),
        this.texts = [...this.el.querySelectorAll("[data-approach-text]")],
        this.descs = [...this.el.querySelectorAll("[data-approach-desc]")],
        this.initLottie()
    }
    initLottie() {
        this.isInitLottie || (this.isInitLottie = !0,
        this.lottie = d.loadAnimation({
            container: this.refs.lottie,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            path: `/assets/lottie/${this.isSp ? "our_approach_sp" : "our_approach"}.json`
        }),
        this.lottie.setSpeed(1.5))
    }
    textAnimation() {
        this.isPlay = !0,
        s.fromTo(this.titles, {
            opacity: 0,
            yPercent: 15
        }, {
            opacity: 1,
            yPercent: 0,
            duration: .8,
            stagger: .15,
            delay: .1,
            ease: "power4.out"
        }),
        s.fromTo(this.catches, {
            opacity: 0,
            yPercent: 15
        }, {
            opacity: 1,
            yPercent: 0,
            duration: .6,
            delay: .5,
            ease: "power4.out"
        }),
        s.fromTo(this.texts, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .6,
            delay: 1,
            ease: "power4.out"
        }),
        this.isSp || s.fromTo(this.descs, {
            opacity: 0,
            xPercent: -7
        }, {
            opacity: 1,
            xPercent: 0,
            duration: 1,
            delay: 1.15,
            ease: "power4.out"
        })
    }
    onIntersect({isIntersecting: i}) {
        i && (this.lottie?.play(),
        this.isPlay || this.textAnimation())
    }
    onDestroy() {
        this.lottie?.destroy()
    }
}
).register();
const A = n.parallaxBack
  , P = .1
  , J = -.2
  , m = n.scaleMinParallax
  , Z = 90
  , tt = 90
  , it = $["quart.inOut"]
  , V = n.easeParallax;
(class extends a {
    static componentName = "LService";
    isShow = !1;
    isParallaxHeading = !1;
    isShowCommunityHeader = !1;
    isParallaxBrand = !1;
    onMount() {
        const i = document.querySelector(".LApproach");
        this.refApproachInner = i.querySelector(".inner"),
        this.refApproachShadow = i.querySelector(".GShadow")
    }
    onIntersect({isIntersecting: i}) {
        i ? this.playScroll() : (this.pauseScroll(),
        s.resetScrub(this.refs.brand, {
            y: 0,
            scale: 1
        }),
        s.resetScrub(this.refApproachShadow, {
            opacity: 0
        }),
        this.refApproachInner.style.willChange = "",
        this.refApproachShadow.style.willChange = "",
        this.refs.heading.style.willChange = "",
        this.refs.GShadow.style.willChange = "",
        this.refs.communityHeader.style.willChange = "")
    }
    onScroll({scroll: i}) {
        if (this.yStart <= i && i < this.yEnd)
            if (this.isShow || (this.isShow = !0),
            this.yStartCommunity <= i && i < this.yEndCommunity) {
                this.isParallaxBrand || (this.isParallaxBrand = !0,
                this.refs.brand.style.willChange = "transform",
                this.refs.brandShadow.style.willChange = "opacity");
                const t = V((i - this.yStartCommunity) / this.yDistanceCommunity);
                s.scrub(this.refs.brand, {
                    y: t * this.yDistanceCommunity * A,
                    scale: 1 - t * m
                }),
                s.scrub(this.refs.brandShadow, {
                    opacity: t
                })
            } else if (this.isParallaxBrand && (this.isParallaxBrand = !1,
            s.resetScrub(this.refs.brand, {
                y: 0
            }),
            s.resetScrub(this.refs.brandShadow, {
                opacity: 0
            }),
            this.refs.brand.style.willChange = "",
            this.refs.brandShadow.style.willChange = ""),
            i < this.yEndBrand) {
                this.isParallaxHeading || (this.isParallaxHeading = !0,
                this.refApproachInner.style.willChange = "transform",
                this.refApproachShadow.style.willChange = "opacity",
                this.refs.heading.style.willChange = "transform",
                this.refs.GShadow.style.willChange = "opacity",
                this.refs.communityHeader.style.willChange = "transform");
                const t = V((i - this.yStart) / this.yDistanceBrand);
                s.scrub(this.refApproachInner, {
                    y: t * this.yDistanceBrand * A,
                    scale: 1 - t * m
                }),
                s.scrub(this.refApproachShadow, {
                    opacity: t
                });
                {
                    const e = Math.max(t, 0);
                    s.scrub(this.refs.heading, {
                        y: t * this.yDistanceBrand * P,
                        scale: 1 - e * m
                    }),
                    s.scrub(this.refs.GShadow, {
                        opacity: e
                    })
                }
                if (i > this.yEndSlideDownCommunity)
                    this.isShowCommunityHeader && (this.isShowCommunityHeader = !1,
                    s.resetScrub(this.refs.communityHeader, {
                        y: 0
                    }));
                else if (this.isShowCommunityHeader || (this.isShowCommunityHeader = !0),
                i >= this.yStartSlideDownCommunity) {
                    const e = i - this.yStartSlideDownCommunity;
                    s.scrub(this.refs.communityHeader, {
                        y: this.transformYStartCommunity + e + it(e / this.yDistanceSlideDownCommunity) * this.yDistanceSlideDownCommunity
                    })
                } else
                    s.scrub(this.refs.communityHeader, {
                        y: this.transformYStartCommunity + (i - this.yStartSlideDownCommunity) * J
                    })
            } else
                this.isParallaxHeading && (this.isParallaxHeading = !1,
                s.resetScrub(this.refApproachInner, {
                    y: 0,
                    scale: 1
                }),
                s.resetScrub(this.refApproachShadow, {
                    opacity: 0
                }),
                s.resetScrub(this.refs.heading, {
                    y: 0,
                    scale: 1
                }),
                s.resetScrub(this.refs.GShadow, {
                    opacity: 1
                }),
                s.resetScrub(this.refs.communityHeader, {
                    y: 0
                }),
                this.refApproachInner.style.willChange = "",
                this.refApproachShadow.style.willChange = "",
                this.refs.heading.style.willChange = "",
                this.refs.GShadow.style.willChange = "",
                this.refs.communityHeader.style.willChange = "");
        else
            this.isShow && (this.isShow = !1)
    }
    onResize({height: i}) {
        const {scrollY: t} = this
          , {top: e} = this.el.getBoundingClientRect()
          , {top: o} = this.refs.brandHeader.getBoundingClientRect()
          , {top: r} = this.refs.community.getBoundingClientRect();
        this.yStart = e + t - i * (this.isSp ? .78 : .88),
        this.yCenterBrand = o + t - i * .5,
        this.yEndBrand = o + t,
        this.yDistanceBrand = this.yEndBrand - this.yStart,
        this.yStartCommunity = r + t - i * (this.isSp,
        .75),
        this.yEndCommunity = r + t,
        this.yDistanceCommunity = this.yEndCommunity - this.yStartCommunity,
        this.yEnd = this.yEndCommunity,
        this.refApproachInner.style.transformOrigin = `center ${Z}%`,
        this.refs.brand.style.transformOrigin = `center ${tt}%`;
        const S = 0
          , y = 0;
        this.refs.heading.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${S * this.yDistanceBrand * P},0,${1 / (1 - y * m)})`
    }
    onResizeAlways({height: i}) {
        s.resetScrub(this.refs.communityHeader, {
            y: 0
        });
        const {scrollY: t} = this
          , {bottom: e} = this.refs.brandHeader.getBoundingClientRect()
          , {top: o, height: r} = this.refs.communityHeader.getBoundingClientRect();
        this.yStartSlideDownCommunity = e + t + r - i,
        this.yDistanceSlideDownCommunity = r,
        this.yEndSlideDownCommunity = this.yStartSlideDownCommunity + this.yDistanceSlideDownCommunity,
        this.transformYStartCommunity = e - o
    }
}
).register();
const et = n.parallaxBack * -1
  , st = n.scaleMinParallax
  , ot = 200
  , rt = n.easeParallax;
(class extends a {
    static componentName = "LProduct";
    isParallax = !1;
    isInitLottie = !1;
    onInit() {
        this.initLottie()
    }
    initLottie() {
        this.isInitLottie || (this.isInitLottie = !0,
        this.lottie = d.loadAnimation({
            container: this.refs.illust,
            renderer: "svg",
            loop: !0,
            autoplay: !1,
            path: "/assets/lottie/top_product_illust.json"
        }))
    }
    onDestroy() {
        this.lottie?.destroy()
    }
    onIntersect({isIntersecting: i}) {
        i ? (this.playScroll(),
        this.lottie?.play()) : (this.pauseScroll(),
        this.lottie?.pause())
    }
    onScroll({scroll: i}) {
        if (this.yStart <= i && i < this.yEnd) {
            this.isParallax || (this.isParallax = !0,
            this.refs.inner.style.willChange = "transform",
            this.refs.GShadow.style.willChange = "opacity");
            const t = rt(1 - (i - this.yStart) / this.yDistance);
            s.scrub(this.refs.inner, {
                y: t * this.yDistance * et,
                scale: 1 - t * st
            }),
            s.scrub(this.refs.GShadow, {
                opacity: t
            })
        } else
            this.isParallax && (this.isParallax = !1,
            s.resetScrub(this.refs.inner, {
                y: 0,
                scale: 1
            }),
            s.resetScrub(this.refs.GShadow, {
                opacity: 0
            }),
            this.refs.inner.style.willChange = "",
            this.refs.GShadow.style.willChange = "")
    }
    onResize({height: i}) {
        const {scrollY: t} = this
          , {top: e} = this.el.getBoundingClientRect();
        this.yStart = e + t - i,
        this.yEnd = this.yStart + i,
        this.yDistance = this.yEnd - this.yStart,
        this.refs.inner.style.transformOrigin = `center ${k(ot)}`
    }
}
).register();
const at = 100
  , nt = 40
  , ht = .3
  , lt = .6
  , dt = .15
  , ct = .55;
(class extends a {
    static componentName = "LWe";
    static isDisableAutoPlayScroll = !0;
    isInitVivus = !1;
    static intersectOptions = {
        rootMargin: "20% 0%"
    };
    onInit() {
        this.isSp && (this.refs.line[this.refs.line.length - 1].remove(),
        this.refs.line = this.refs.line.slice(0, this.refs.line.length - 1))
    }
    async initVivus() {
        if (this.isInitVivus)
            return;
        this.isInitVivus = !0,
        this.vivus = new v(this.refs.text,{
            file: "/assets/we_are.svg",
            type: "oneByOne",
            start: "manual"
        });
        const i = ()=>{
            if (!this.vivus.el) {
                setTimeout(i, 100);
                return
            }
            this.vivus.el.setAttribute("aria-label", "We are NEWPEACE")
        }
        ;
        i()
    }
    onIntersect({isIntersecting: i}) {
        i ? (this.initVivus(),
        this.refs.line.forEach(t=>{
            t.style.willChange = "transform"
        }
        ),
        this.playScroll()) : (this.pauseScroll(),
        this.refs.line.forEach(t=>{
            t.style.willChange = ""
        }
        ))
    }
    onScroll({scroll: i}) {
        const t = (i - this.yStart) / this.yDistance;
        s.scrub(this.refs.image, {
            "--parallax": t * 2 - 1
        }),
        this.vivus?.setFrameProgress((t - this.vivusProgressMin) / (this.vivusProgressMax - this.vivusProgressMin))
    }
    onResize({height: i}) {
        const {scrollY: t} = this
          , {top: e, bottom: o} = this.el.getBoundingClientRect();
        this.yStart = e + t - i,
        this.yEnd = o + t,
        this.yDistance = this.yEnd - this.yStart,
        this.move = q(this.isSp ? nt : at),
        this.vivusProgressMin = this.isSp ? dt : ht,
        this.vivusProgressMax = this.isSp ? ct : lt,
        this.onScroll({
            scroll: t,
            velocity: 0
        })
    }
}
).register();
(class extends a {
    static componentName = "LNews";
    isInitVivus = !1;
    static intersectOptions = {
        rootMargin: "0% 0% -60% 0%"
    };
    async initVivus() {
        this.isInitVivus || (this.isInitVivus = !0,
        U.isSp ? this.vivus = new v(this.refs.line,{
            file: "/assets/airplane_sp.svg",
            type: "oneByOne",
            start: "autostart",
            duration: 50
        }) : this.vivus = new v(this.refs.line,{
            file: "/assets/airplane_pc.svg",
            type: "oneByOne",
            start: "autostart",
            duration: 70
        }))
    }
    onIntersect({isIntersecting: i}) {
        i && this.initVivus()
    }
}
).register();
const yt = 26
  , I = 32;
(class extends a {
    static componentName = "LOpening";
    static intersectOptions = {
        rootMargin: "-100% 0% 0% 0%"
    };
    isInitLottie = !1;
    isLoadedLottie = !1;
    isComplete = !1;
    isCanplay = !1;
    isEndOpening = !1;
    onInit() {
        n.isTransitioned ? this.resetPage() : (this.bg = this.refs.bg,
        this.logo = this.refs.logo,
        this.once("initializedAsynchronousTransition", async()=>{
            window.scrollY === 0 ? (await this.initLottie(),
            this.lottieLogo.play(),
            this.lottieBg.play()) : this.resetPage()
        }
        ),
        this.elLKvSectionVideo = document.querySelector(`.LKvSection .video[data-ref="video-${this.isSp ? "sp" : "pc"}"]`),
        this.elLKvSectionVideo.addEventListener("canplay", ()=>{
            this.isCanplay = !0,
            this.playVideo()
        }
        , {
            once: !0
        }))
    }
    resetPage() {
        this.emit("finishOpening"),
        this.showPage(),
        this.complete()
    }
    initLottie() {
        return this.isInitLottie ? !0 : (this.isInitLottie = !0,
        this.lottieBg = d.loadAnimation({
            container: this.bg,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            path: `/assets/lottie/${this.isSp ? "bg_sp" : "bg"}.json`,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        }),
        this.lottieLogo = d.loadAnimation({
            container: this.logo,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            path: `/assets/lottie/${this.isSp ? "logo_sp" : "logo"}.json`
        }),
        this.isLoadedLottie = !0,
        this.onLotieEnterFrame = ()=>{
            this.lottieLogo.currentFrame >= yt && (this.isEndOpening = !0,
            this.isCanplay || (this.lottieLogo.pause(),
            this.lottieBg.pause(),
            this.lottieLogo.removeEventListener("enterFrame", this.onLotieEnterFrame),
            this.playVideo()),
            this.lottieLogo.currentFrame >= I && (this.lottieLogo.removeEventListener("enterFrame", this.onLotieEnterFrame),
            this.emit("finishOpening")))
        }
        ,
        this.lottieLogo.addEventListener("enterFrame", this.onLotieEnterFrame),
        this.onLotieCompleteLogo = ()=>{
            this.lottieLogo.removeEventListener("complete", this.onLotieCompleteLogo),
            this.isSp ? this.complete() : (this.lottieLogo?.destroy(),
            this.lottieLogo = null)
        }
        ,
        this.lottieLogo.addEventListener("complete", this.onLotieCompleteLogo),
        this.onLotieCompleteBg = ()=>{
            this.lottieBg.removeEventListener("complete", this.onLotieCompleteBg),
            this.isSp ? (this.lottieBg?.destroy(),
            this.lottieBg = null) : this.complete()
        }
        ,
        this.lottieBg.addEventListener("complete", this.onLotieCompleteBg),
        this.onLotieEnterFrameBg = ()=>{
            this.lottieBg.removeEventListener("enterFrame", this.onLotieEnterFrameBg),
            this.showPage()
        }
        ,
        this.lottieBg.addEventListener("enterFrame", this.onLotieEnterFrameBg),
        Promise.all([this.lottieBg, this.lottieLogo]))
    }
    playVideo() {
        !this.isCanplay || !this.isEndOpening || (this.onLotieEnterFrame = ()=>{
            this.lottieLogo.currentFrame >= I && (this.lottieLogo.removeEventListener("enterFrame", this.onLotieEnterFrame),
            this.emit("finishOpening"))
        }
        ,
        this.lottieLogo.addEventListener("enterFrame", this.onLotieEnterFrame),
        this.lottieLogo.play(),
        this.lottieBg.play())
    }
    showPage() {
        document.body.classList.remove("-loading"),
        n.view.classList.add("-show")
    }
    complete() {
        this.el.remove(),
        this.myDestroy(),
        this.isComplete = !0
    }
    myDestroy() {
        !this.isInitLottie || !this.isLoadedLottie || !this.lottieLogo || (this.lottieLogo?.removeEventListener("enterFrame", this.onLotieEnterFrame),
        this.lottieLogo?.removeEventListener("complete", this.onLotieComplete),
        this.lottieBg?.destroy(),
        this.lottieLogo?.destroy(),
        this.lottieBg = null,
        this.lottieLogo = null)
    }
    onDestroy() {
        this.myDestroy()
    }
}
).register();
const L = 6
  , pt = -25
  , T = 10
  , x = "#282828"
  , ut = "#555555"
  , F = .45;
class mt extends c {
    static selectorRoot = "[data-word-double]";
    isShow = !1;
    lines;
    delayTotal = F;
    onInit() {
        const t = this.el.querySelectorAll("[data-word-double-item]")
          , e = t[1]
          , r = t[0].querySelectorAll("[data-word-line]")
          , S = (r.length > 0 ? [...r] : [e]).map(g=>[...g.querySelectorAll("span")])
          , y = e.querySelectorAll("[data-word-line]");
        this.lines = (y.length > 0 ? [...y] : [e]).map((g,N)=>{
            const b = ft.create(g, {
                elsCharSecond: S[N]
            });
            return this.delayTotal = b.delayTotal,
            b
        }
        )
    }
    async show() {
        if (!this.isShow)
            return this.isShow = !0,
            Promise.all(this.lines.map(async(t,e)=>{
                if (await C(t.delayTotal * e),
                !!this.isShow)
                    return t.show()
            }
            ))
    }
    async hide() {
        if (this.isShow)
            return this.isShow = !1,
            Promise.all(this.lines.map(t=>{
                if (!this.isShow)
                    return t.hide()
            }
            ))
    }
    visible() {
        this.lines.forEach(t=>t.visible())
    }
    hidden() {
        this.lines.forEach(t=>t.hidden())
    }
}
class ft extends c {
    static selectorRoot = "[data-word-line]";
    isShow = !1;
    delayTotal = F;
    delay = 0;
    onInit() {
        this.elsChar = [...this.el.querySelectorAll("span")],
        this.elsChar.forEach((t,e)=>{
            const o = [t, this.option.elsCharSecond[e]];
            gsap.set(o, {
                display: "inline-block",
                whiteSpace: "pre",
                transformOrigin: "center bottom",
                yPercent: T,
                opacity: 0,
                color: t.dataset.color || x
            })
        }
        ),
        this.delay = this.delayTotal / Math.max(this.elsChar.length, 6)
    }
    async show() {
        this.isShow || (this.isShow = !0,
        this.el.style.visibility = "visible",
        this.tween && this.tweens.forEach(t=>{
            t.kill()
        }
        ),
        await Promise.all(this.tweens = this.elsChar.map((t,e)=>{
            const o = M(-L, L)
              , r = [t, this.option.elsCharSecond[e]];
            return gsap.timeline({
                delay: this.delay * e
            }).set(r, {
                color: t.dataset.color || ut
            }).to(r, {
                yPercent: pt * B(Math.abs(o), 0, L, 1, .6),
                rotate: o,
                opacity: 1,
                duration: .3,
                ease: "back.inOut"
            }).add([gsap.to(r, {
                yPercent: 0,
                rotate: 0,
                duration: .45,
                ease: "back.out",
                clearProps: "transform"
            }), gsap.to(r, {
                color: x,
                duration: .45,
                ease: "power2.inOut",
                clearProps: "color"
            })])
        }
        )))
    }
    async hide() {
        this.isShow && (this.isShow = !1,
        this.tween && this.tweens.forEach(t=>{
            t.kill()
        }
        ),
        await Promise.all(this.tweens = this.elsChar.map((t,e)=>{
            const o = [t, this.option.elsCharSecond[e]];
            return gsap.timeline({
                delay: this.delay * e
            }).add([gsap.to(o, {
                opacity: 0,
                duration: .3,
                ease: "power2.inOut"
            }), gsap.to(o, {
                yPercent: T,
                duration: .4,
                ease: "back.inOut"
            })])
        }
        )),
        this.el && (this.el.style.visibility = ""))
    }
    visible() {
        this.el.style.visibility = "visible"
    }
    hidden() {
        this.el.style.visibility = ""
    }
}
const D = .01
  , St = 8
  , gt = 2.6
  , Lt = Q
  , wt = K
  , vt = z
  , Ct = X || !j;
(class extends a {
    static componentName = "LIntro";
    static intersectOptions = {
        rootMargin: "0% 0% 10%"
    };
    isVisible = !1;
    isStatic = !1;
    isPlayVideo = !1;
    isLoop = !1;
    isShowText = !1;
    isAutoScroll = !1;
    frame = 0;
    videoDuration = 6;
    onInit() {
        this.elVideo = this.refs[`video-${this.isSp ? "sp" : "pc"}`],
        this.elVideoLoop = this.refs[`videoLoop-${this.isSp ? "sp" : "pc"}`],
        this.video = new f(this.elVideo),
        this.video.load(),
        this.videoLoop = new f(this.elVideoLoop),
        this.word = mt.create(this.refs.wrapper),
        this.startAutoScrollDown = Y(()=>{
            this.isAutoScroll = !0,
            this.scrollTo(this.yEndScroll, {
                duration: St * (1 - this.scrollY / this.yEndScroll),
                easing: Lt,
                onComplete: ()=>{
                    this.isAutoScroll = !1
                }
            })
        }
        ),
        this.on("visible LIntro", ()=>{
            this.visible()
        }
        ),
        this.on("hidden LIntro", ()=>{
            this.hidden()
        }
        ),
        G(this.elVideo).then(()=>{
            this.videoDuration = this.elVideo.duration * .99,
            this.emitSelfResize()
        }
        ),
        setTimeout(()=>{
            this.videoLoop.load()
        }
        , 2e3)
    }
    visible() {
        this.isDestroyed || this.isVisible || (this.isVisible = !0,
        this.el.style.visibility = "visible")
    }
    hidden() {
        this.isDestroyed || this.isVisible && (this.isVisible = !1,
        this.el.style.visibility = "")
    }
    startAutoScrollUp() {
        this.isAutoScroll = !0,
        this.scrollTo(0, {
            duration: gt * (this.scrollY / this.yEndScroll),
            easing: wt,
            onComplete: ()=>{
                this.isAutoScroll = !1
            }
        })
    }
    onIntersect({isIntersecting: i}, t) {
        this.elVideo && (this.isIntersecting = i,
        i ? (this.playScroll(),
        this.isVisible || this.visible(),
        t <= 0 ? this.startLoopVideo() : this.elVideo.style.visibility = "") : (this.pauseScroll(),
        this.stopLoopVideo(),
        this.elVideo.style.visibility = "hidden",
        this.isVisible && this.hidden()))
    }
    showText() {
        this.word.show()
    }
    hideText() {
        this.word.hide()
    }
    startLoopVideo() {
        this.elVideoLoop.currentTime = 0,
        this.elVideoLoop.playbackRate = 1,
        this.videoLoop.play(),
        this.elVideoLoop.style.visibility = "visible",
        this.elVideo.style.visibility = "hidden",
        this.video.pause(),
        this.isPlayVideo = !1
    }
    stopLoopVideo() {
        this.elVideo.style.visibility = "",
        this.elVideoLoop.style.visibility = "",
        this.videoLoop.pause()
    }
    onTick() {
        this.isPlayVideo && (this.elVideo.currentTime - this.targetTime >= -D || this.elVideo.currentTime >= this.videoDuration) && (this.pauseTick(),
        this.startAutoScrollDown())
    }
    onScroll({scroll: i, direction: t}) {
        if (this.elVideo) {
            if (!this.isStatic && i >= this.yEnd)
                this.isStatic = !0,
                this.refs.wrapper.classList.add("-static");
            else if (i >= this.yStart && i < this.yEnd && (this.isStatic && (this.isStatic = !1,
            this.refs.wrapper.classList.remove("-static")),
            i < this.yEndVideo ? (this.isLoop && (this.isLoop = !1,
            this.stopLoopVideo(),
            this.hideText()),
            this.targetTime = Math.min((i - this.yStart) / this.yDiffVideo, 1) * this.videoDuration,
            Ct && t >= 0 ? (this.elVideo.playbackRate = Math.max(Math.min((this.targetTime - this.elVideo.currentTime) * 4, 8), 1),
            !this.isPlayVideo && this.elVideo.currentTime - this.targetTime < -D && (this.isPlayVideo = !0,
            this.video.play(),
            this.playTick())) : (this.isPlayVideo && (this.isPlayVideo = !1,
            this.video.pause()),
            this.frame++ % 3 === 0 && (this.elVideo.currentTime = this.targetTime,
            t < 0 ? this.startAutoScrollUp() : (this.isPlayVideo = !0,
            this.playTick())))) : this.isLoop || (this.isLoop = !0,
            this.startLoopVideo()),
            i >= this.yStartUp)) {
                const e = vt((i - this.yStartUp) / this.yDiffUp) * this.videoDuration;
                s.scrub(this.refs.inner, {
                    yPercent: e * this.moveVideo
                }),
                i >= this.yStartText ? this.isShowText || (this.isShowText = !0,
                this.showText()) : this.isShowText && (this.isShowText = !1)
            }
        }
    }
    onResize({height: i}) {
        const {scrollY: t} = this
          , {top: e, bottom: o} = this.el.getBoundingClientRect()
          , {height: r} = this.elVideo.getBoundingClientRect();
        this.yStart = e + t - i * (this.isSp ? 1.04 : 1.027),
        this.yEnd = o + t - r,
        this.yEndScroll = this.yEnd - i * (this.isSp ? .2 : .3),
        this.yEndVideo = this.yEnd - i * (this.isSp ? .3 : .5),
        this.yStartUp = this.yEndVideo - i * (this.isSp ? .5 : .8),
        this.yDiffVideo = this.yEndVideo - this.yStart,
        this.yDiffUp = this.yEnd - this.yStartUp,
        this.yStartText = this.yStartUp + i * (this.isSp ? .5 : .8),
        this.moveVideo = this.isSp ? -3 : -4
    }
    onLeave() {
        this.isAutoScroll && this.scrollTo(this.scrollY, {
            immediate: !0
        })
    }
}
).register();
const h = 150;
(class extends a {
    static componentName = "LKvCover";
    yStart = 0;
    yEnd = 0;
    yDiff = 1e3;
    isHide = !0;
    isLIntroShow = !1;
    onInit() {
        this.elLKvSection = document.querySelector(".LKvSection"),
        this.elLIntroVideo = document.querySelector(`.LIntro [data-ref="video-${this.isSp ? "sp" : "pc"}"]`),
        this.video = new f(this.refs.video),
        this.on("intersect LKvSection", i=>{
            i ? (this.show(),
            this.playScroll()) : (this.pauseScroll(),
            this.hide());
            const t = p(-h, h, scroll >= this.yEndClip ? 1 : 0);
            s.resetScrub(this.elLIntroVideo, {
                clipPath: `polygon(${u(0 - t, 0, 99.9)}% 0%, 100% 0%, 100% 100%, ${u(h - 100 - t, 0, 99.9)}% 100%)`
            })
        }
        )
    }
    onScroll({scroll: i}) {
        if (this.yStart < i && i <= this.yEnd) {
            this.show();
            const t = E((i - this.yStart) / this.yDiff);
            if (s.scrub(this.refs.video, {
                xPercent: p(5, -200, t),
                scale: p(1, 1.4, t)
            }),
            this.yStartClip <= i && i <= this.yEndClip) {
                this.isLIntroShow || (this.isLIntroShow = !0,
                this.emit("visible LIntro"));
                const e = p(-h, h, E((i - this.yStartClip) / this.yDiffClip));
                s.scrub(this.elLIntroVideo, {
                    clipPath: `polygon(${u(0 - e, 0, 99.9)}% 0%, 100% 0%, 100% 100%, ${u(h - 100 - e, 0, 99.9)}% 100%)`
                })
            } else
                this.isLIntroShow && i < this.yStartClip && (this.isLIntroShow = !1,
                this.emit("hidden LIntro"),
                this.elLIntroVideo.currentTime = 0)
        } else
            this.hide()
    }
    show() {
        this.isHide && (this.isHide = !1,
        this.video.play(),
        this.el.style.visibility = "visible")
    }
    hide() {
        this.isHide || (this.isHide = !0,
        this.el.style.visibility = "",
        this.video.pause())
    }
    onResize() {
        const i = this.elLKvSection.getBoundingClientRect().height;
        this.yStart = 0,
        this.yEnd = i * .5,
        this.yDiff = this.yEnd - this.yStart,
        this.yStartClip = i * (this.isSp ? .23 : .15),
        this.yEndClip = i * (this.isSp ? .35 : .45),
        this.yDiffClip = this.yEndClip - this.yStartClip
    }
}
).register();
(class extends a {
    static componentName = "LKvScroll";
    onInit() {
        this.cIntersecting = n.cIntersecting.add({
            el: "[data-scroll-down-observer]",
            callback: ({isIntersecting: i})=>{
                this.el?.classList[i ? "remove" : "add"]("-hide")
            }
        })
    }
    onDestroy() {
        this.cIntersecting.destroy()
    }
}
).register();
const w = 6
  , bt = -25
  , O = 10
  , R = "#282828"
  , Et = "#555555"
  , H = .45;
class _ extends c {
    static selectorRoot = "[data-word]";
    isShow = !1;
    lines;
    delayTotal = H;
    onInit() {
        const t = this.el.querySelectorAll("[data-word-line]");
        this.lines = (t.length > 0 ? [...t] : [this.el]).map(e=>{
            const o = At.create(e);
            return this.delayTotal = o.delayTotal,
            o
        }
        )
    }
    async show() {
        return Promise.all(this.lines.map(async(t,e)=>(await C(t.delayTotal * e),
        t.show())))
    }
    async hide() {
        return Promise.all(this.lines.map(t=>t.hide()))
    }
    visible() {
        this.lines.forEach(t=>t.visible())
    }
    hidden() {
        this.lines.forEach(t=>t.hidden())
    }
}
class At extends c {
    static selectorRoot = "[data-word-line]";
    isShow = !1;
    delayTotal = H;
    delay = 0;
    onInit() {
        this.elsChar = [...this.el.querySelectorAll("span")],
        this.elsChar.forEach(t=>{
            gsap.set(t, {
                display: "inline-block",
                whiteSpace: "pre",
                transformOrigin: "center bottom",
                yPercent: O,
                opacity: 0,
                color: t.dataset.color || R
            })
        }
        ),
        this.delay = this.delayTotal / Math.max(this.elsChar.length, 6)
    }
    async show() {
        this.isShow || (this.isShow = !0,
        this.el.style.visibility = "visible",
        await Promise.all(this.elsChar.map((t,e)=>{
            const o = M(-w, w);
            return gsap.timeline({
                delay: this.delay * e
            }).set(t, {
                color: t.dataset.color || Et
            }).to(t, {
                yPercent: bt * B(Math.abs(o), 0, w, 1, .6),
                rotate: o,
                opacity: 1,
                duration: .3,
                ease: "back.inOut"
            }).add([gsap.to(t, {
                yPercent: 0,
                rotate: 0,
                duration: .45,
                ease: "back.out",
                clearProps: "transform"
            }), gsap.to(t, {
                color: R,
                duration: .45,
                ease: "power2.inOut",
                clearProps: "color"
            })])
        }
        )))
    }
    async hide() {
        this.isShow && (this.isShow = !1,
        await Promise.all(this.elsChar.map((t,e)=>gsap.timeline({
            delay: this.delay * e
        }).add([gsap.to(t, {
            opacity: 0,
            duration: .3,
            ease: "power2.inOut"
        }), gsap.to(t, {
            yPercent: O,
            duration: .4,
            ease: "back.inOut"
        })]))),
        this.el && (this.el.style.visibility = ""))
    }
    visible() {
        this.el.style.visibility = "visible"
    }
    hidden() {
        this.el.style.visibility = ""
    }
}
const l = [1, 7, 9.5, 12.9];
(class extends a {
    static componentName = "LKvSection";
    static intersectOptions = {
        rootMargin: "-80% 0% -20% 0%"
    };
    indexWord = -1;
    isLoaded = !1;
    isAnimatingWord = !1;
    isIntersecting = !1;
    isFinishOpening = !1;
    onInit() {
        n.isTransitioned && (this.isFinishOpening = !0),
        this.elVideo = this.refs[`video-${this.isSp ? "sp" : "pc"}`],
        this.video = new f(this.elVideo,{
            thumbnailTime: 2
        }),
        this.wordCommon = _.create(this.refs.wordCommon),
        this.words = this.refs.word.map(i=>_.create(i)),
        this.onTimeupdateVideo = async()=>{
            if (this.isAnimatingWord)
                return;
            this.isAnimatingWord = !0;
            let i;
            this.indexWord === 2 && this.elVideo.currentTime >= l[3] ? i = 3 : this.indexWord === 1 && this.elVideo.currentTime >= l[2] ? i = 2 : this.indexWord === 0 && this.elVideo.currentTime >= l[1] ? i = 1 : (this.indexWord === 3 || this.indexWord === -1) && this.elVideo.currentTime < l[1] && this.elVideo.currentTime >= l[0] && (i = 0,
            this.indexWord === -1 && (this.wordCommon.show(),
            await C(this.wordCommon.delayTotal))),
            i >= 0 && (this.words[this.indexWord]?.hide(),
            this.indexWord = i,
            await this.words[this.indexWord].show()),
            this.isAnimatingWord = !1
        }
        ,
        this.elVideo.addEventListener("timeupdate", this.onTimeupdateVideo),
        this.on("finishOpening", ()=>{
            this.isFinishOpening = !0,
            this.play()
        }
        )
    }
    onIntersect({isIntersecting: i}) {
        this.elVideo && (this.isIntersecting = i,
        i ? (this.isLoaded || (this.isLoaded = !0,
        this.video.load()),
        this.play()) : this.pause(),
        this.emit("intersect LKvSection", i))
    }
    play() {
        this.isDestroyed || this.isFinishOpening && this.isIntersecting && (this.isPlay || (this.isPlay = !0,
        this.el.style.visibility = "visible",
        this.video.play(),
        this.wordCommon.visible(),
        this.words[this.indexWord]?.visible()))
    }
    pause() {
        this.isDestroyed || this.isIntersecting || this.isPlay && (this.isPlay = !1,
        this.el.style.visibility = "",
        this.wordCommon.hidden(),
        this.words[this.indexWord]?.hidden(),
        this.video.pause())
    }
    onDestroy() {
        this.elVideo.removeEventListener("timeupdate", this.onTimeupdateVideo)
    }
}
).register();
class Pt extends a {
    isInitLottie = !1;
    initLottie() {
        if (!this.isDestroyed)
            return this.isInitLottie ? !0 : (this.isInitLottie = !0,
            this.lotties = Array.prototype.map.call(this.el.querySelectorAll('[data-ref="lottie"]'), async t=>{
                const e = d.loadAnimation({
                    container: t,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !1,
                    path: `/assets/lottie/${t.dataset.lottie}`
                });
                return e.setSpeed(.7),
                e
            }
            ),
            Promise.all(this.lotties))
    }
    async onIntersect({isIntersecting: t}) {
        t ? (await this.initLottie(),
        this.lotties?.forEach(async e=>{
            (await e).play()
        }
        )) : this.lotties?.forEach(async e=>{
            (await e).pause()
        }
        )
    }
    onDestroy() {
        this.lotties?.forEach(async t=>{
            (await t).destroy()
        }
        )
    }
}
(class extends a {
    static componentName = "LServiceSection";
    onInit() {
        Pt.create(this.refs["header-inner"])
    }
}
).register();
