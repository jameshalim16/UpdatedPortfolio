/*! lazysizes - v5.3.2 */
!function(e) {
    var t = function(i, f, o) {
        "use strict";
        var h, p;
        if (function() {
            var e, t = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                fastLoadedClass: "ls-is-cached",
                iframeLoadMode: 0,
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            for (e in p = i.lazySizesConfig || i.lazysizesConfig || {},
            t)
                e in p || (p[e] = t[e])
        }(),
        !f || !f.getElementsByClassName)
            return {
                init: function() {},
                cfg: p,
                noSupport: !0
            };
        function d(e, t) {
            re(e, t) || e.setAttribute("class", (e[V]("class") || "").trim() + " " + t)
        }
        function u(e, t) {
            (t = re(e, t)) && e.setAttribute("class", (e[V]("class") || "").replace(t, " "))
        }
        function m(e, t) {
            var n;
            !J && (n = i.picturefill || p.pf) ? (t && t.src && !e[V]("srcset") && e.setAttribute("srcset", t.src),
            n({
                reevaluate: !0,
                elements: [e]
            })) : t && t.src && (e.src = t.src)
        }
        function e(n, e) {
            return e ? function() {
                he(n)
            }
            : function() {
                var e = this
                  , t = arguments;
                he(function() {
                    n.apply(e, t)
                })
            }
        }
        function t(e) {
            function t() {
                var e = o.now() - i;
                e < 99 ? te(t, 99 - e) : (ie || s)(s)
            }
            var n, i, s = function() {
                n = null,
                e()
            };
            return function() {
                i = o.now(),
                n = n || te(t, 99)
            }
        }
        function n() {
            !n.i && f.getElementsByClassName && (n.i = !0,
            me._(),
            pe._())
        }
        var s, a, l, g, v, b, w, r, C, y, $, x, k, z, A, c, T, E, F, M, B, W, _, L, j, N, H, O, S, R, P, D, I, q, U, X, Y, G, Z, K = f.documentElement, J = i.HTMLPictureElement, Q = "addEventListener", V = "getAttribute", ee = i[Q].bind(i), te = i.setTimeout, ne = i.requestAnimationFrame || te, ie = i.requestIdleCallback, se = /^picture$/i, oe = ["load", "error", "lazyincluded", "_lazyloaded"], ae = {}, le = Array.prototype.forEach, re = function(e, t) {
            return ae[t] || (ae[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
            ae[t].test(e[V]("class") || "") && ae[t]
        }, ce = function(t, n, e) {
            var i = e ? Q : "removeEventListener";
            e && ce(t, n),
            oe.forEach(function(e) {
                t[i](e, n)
            })
        }, de = function(e, t, n, i, s) {
            var o = f.createEvent("Event");
            return (n = n || {}).instance = h,
            o.initEvent(t, !i, !s),
            o.detail = n,
            e.dispatchEvent(o),
            o
        }, ue = function(e, t) {
            return (getComputedStyle(e, null) || {})[t]
        }, fe = function(e, t, n) {
            for (n = n || e.offsetWidth; n < p.minSize && t && !e._lazysizesWidth; )
                n = t.offsetWidth,
                t = t.parentNode;
            return n
        }, he = (G = [],
        Z = Y = [],
        ze._lsFlush = ke,
        ze), pe = (W = /^img$/i,
        _ = /^iframe$/i,
        L = "onscroll"in i && !/(gle|ing)bot/.test(navigator.userAgent),
        H = -1,
        O = function(e) {
            return (A = null == A ? "hidden" == ue(f.body, "visibility") : A) || !("hidden" == ue(e.parentNode, "visibility") && "hidden" == ue(e, "visibility"))
        }
        ,
        c = be,
        E = N = j = 0,
        F = p.throttleDelay,
        M = p.ricTimeout,
        B = ie && 49 < M ? function() {
            ie(we, {
                timeout: M
            }),
            M !== p.ricTimeout && (M = p.ricTimeout)
        }
        : e(function() {
            te(we)
        }, !0),
        R = e(Ce),
        P = function(e) {
            R({
                target: e.target
            })
        }
        ,
        D = e(function(t, e, n, i, s) {
            var o, a, l, r, c;
            (l = de(t, "lazybeforeunveil", e)).defaultPrevented || (i && (n ? d(t, p.autosizesClass) : t.setAttribute("sizes", i)),
            o = t[V](p.srcsetAttr),
            n = t[V](p.srcAttr),
            s && (a = (c = t.parentNode) && se.test(c.nodeName || "")),
            r = e.firesLoad || "src"in t && (o || n || a),
            l = {
                target: t
            },
            d(t, p.loadingClass),
            r && (clearTimeout(b),
            b = te(ve, 2500),
            ce(t, P, !0)),
            a && le.call(c.getElementsByTagName("source"), ye),
            o ? t.setAttribute("srcset", o) : n && !a && (_.test(t.nodeName) ? (i = n,
            0 == (c = (e = t).getAttribute("data-load-mode") || p.iframeLoadMode) ? e.contentWindow.location.replace(i) : 1 == c && (e.src = i)) : t.src = n),
            s && (o || a) && m(t, {
                src: n
            })),
            t._lazyRace && delete t._lazyRace,
            u(t, p.lazyClass),
            he(function() {
                var e = t.complete && 1 < t.naturalWidth;
                r && !e || (e && d(t, p.fastLoadedClass),
                Ce(l),
                t._lazyCache = !0,
                te(function() {
                    "_lazyCache"in t && delete t._lazyCache
                }, 9)),
                "lazy" == t.loading && N--
            }, !0)
        }),
        q = t(function() {
            p.loadMode = 3,
            S()
        }),
        {
            _: function() {
                r = o.now(),
                h.elements = f.getElementsByClassName(p.lazyClass),
                g = f.getElementsByClassName(p.lazyClass + " " + p.preloadClass),
                ee("scroll", S, !0),
                ee("resize", S, !0),
                ee("pageshow", function(e) {
                    var t;
                    !e.persisted || (t = f.querySelectorAll("." + p.loadingClass)).length && t.forEach && ne(function() {
                        t.forEach(function(e) {
                            e.complete && I(e)
                        })
                    })
                }),
                i.MutationObserver ? new MutationObserver(S).observe(K, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0
                }) : (K[Q]("DOMNodeInserted", S, !0),
                K[Q]("DOMAttrModified", S, !0),
                setInterval(S, 999)),
                ee("hashchange", S, !0),
                ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function(e) {
                    f[Q](e, S, !0)
                }),
                /d$|^c/.test(f.readyState) ? xe() : (ee("load", xe),
                f[Q]("DOMContentLoaded", S),
                te(xe, 2e4)),
                h.elements.length ? (be(),
                he._lsFlush()) : S()
            },
            checkElems: S = function(e) {
                var t;
                (e = !0 === e) && (M = 33),
                T || (T = !0,
                (t = F - (o.now() - E)) < 0 && (t = 0),
                e || t < 9 ? B() : te(B, t))
            }
            ,
            unveil: I = function(e) {
                var t, n, i, s;
                e._lazyRace || (!(s = "auto" == (i = (n = W.test(e.nodeName)) && (e[V](p.sizesAttr) || e[V]("sizes")))) && v || !n || !e[V]("src") && !e.srcset || e.complete || re(e, p.errorClass) || !re(e, p.lazyClass)) && (t = de(e, "lazyunveilread").detail,
                s && me.updateElem(e, !0, e.offsetWidth),
                e._lazyRace = !0,
                N++,
                D(e, t, s, i, n))
            }
            ,
            _aLSL: $e
        }), me = (a = e(function(e, t, n, i) {
            var s, o, a;
            if (e._lazysizesWidth = i,
            e.setAttribute("sizes", i += "px"),
            se.test(t.nodeName || ""))
                for (o = 0,
                a = (s = t.getElementsByTagName("source")).length; o < a; o++)
                    s[o].setAttribute("sizes", i);
            n.detail.dataAttr || m(e, n.detail)
        }),
        {
            _: function() {
                s = f.getElementsByClassName(p.autosizesClass),
                ee("resize", l)
            },
            checkElems: l = t(function() {
                var e, t = s.length;
                if (t)
                    for (e = 0; e < t; e++)
                        ge(s[e])
            }),
            updateElem: ge
        });
        function ge(e, t, n) {
            var i = e.parentNode;
            i && (n = fe(e, i, n),
            (t = de(e, "lazybeforesizes", {
                width: n,
                dataAttr: !!t
            })).defaultPrevented || (n = t.detail.width) && n !== e._lazysizesWidth && a(e, i, t, n))
        }
        function ve(e) {
            N--,
            e && !(N < 0) && e.target || (N = 0)
        }
        function be() {
            var e, t, n, i, s, o, a, l, r, c, d, u = h.elements;
            if ((w = p.loadMode) && N < 8 && (e = u.length)) {
                for (t = 0,
                H++; t < e; t++)
                    if (u[t] && !u[t]._lazyRace)
                        if (!L || h.prematureUnveil && h.prematureUnveil(u[t]))
                            I(u[t]);
                        else if ((a = u[t][V]("data-expand")) && (s = +a) || (s = j),
                        r || (r = !p.expand || p.expand < 1 ? 500 < K.clientHeight && 500 < K.clientWidth ? 500 : 370 : p.expand,
                        c = (h._defEx = r) * p.expFactor,
                        d = p.hFac,
                        A = null,
                        j < c && N < 1 && 2 < H && 2 < w && !f.hidden ? (j = c,
                        H = 0) : j = 1 < w && 1 < H && N < 6 ? r : 0),
                        l !== s && (C = innerWidth + s * d,
                        y = innerHeight + s,
                        o = -1 * s,
                        l = s),
                        c = u[t].getBoundingClientRect(),
                        (z = c.bottom) >= o && ($ = c.top) <= y && (k = c.right) >= o * d && (x = c.left) <= C && (z || k || x || $) && (p.loadHidden || O(u[t])) && (v && N < 3 && !a && (w < 3 || H < 4) || function(e, t) {
                            var n, i = e, s = O(e);
                            for ($ -= t,
                            z += t,
                            x -= t,
                            k += t; s && (i = i.offsetParent) && i != f.body && i != K; )
                                (s = 0 < (ue(i, "opacity") || 1)) && "visible" != ue(i, "overflow") && (n = i.getBoundingClientRect(),
                                s = k > n.left && x < n.right && z > n.top - 1 && $ < n.bottom + 1);
                            return s
                        }(u[t], s))) {
                            if (I(u[t]),
                            i = !0,
                            9 < N)
                                break
                        } else
                            !i && v && !n && N < 4 && H < 4 && 2 < w && (g[0] || p.preloadAfterLoad) && (g[0] || !a && (z || k || x || $ || "auto" != u[t][V](p.sizesAttr))) && (n = g[0] || u[t]);
                n && !i && I(n)
            }
        }
        function we() {
            T = !1,
            E = o.now(),
            c()
        }
        function Ce(e) {
            var t = e.target;
            t._lazyCache ? delete t._lazyCache : (ve(e),
            d(t, p.loadedClass),
            u(t, p.loadingClass),
            ce(t, P),
            de(t, "lazyloaded"))
        }
        function ye(e) {
            var t, n = e[V](p.srcsetAttr);
            (t = p.customMedia[e[V]("data-media") || e[V]("media")]) && e.setAttribute("media", t),
            n && e.setAttribute("srcset", n)
        }
        function $e() {
            3 == p.loadMode && (p.loadMode = 2),
            q()
        }
        function xe() {
            v || (o.now() - r < 999 ? te(xe, 999) : (v = !0,
            p.loadMode = 3,
            S(),
            ee("scroll", $e, !0)))
        }
        function ke() {
            var e = Z;
            for (Z = Y.length ? G : Y,
            X = !(U = !0); e.length; )
                e.shift()();
            U = !1
        }
        function ze(e, t) {
            U && !t ? e.apply(this, arguments) : (Z.push(e),
            X || (X = !0,
            (f.hidden ? te : ne)(ke)))
        }
        return te(function() {
            p.init && n()
        }),
        h = {
            cfg: p,
            autoSizer: me,
            loader: pe,
            init: n,
            uP: m,
            aC: d,
            rC: u,
            hC: re,
            fire: de,
            gW: fe,
            rAF: he
        }
    }(e, e.document, Date);
    e.lazySizes = t,
    "object" == typeof module && module.exports && (module.exports = t)
}("undefined" != typeof window ? window : {}),
document.addEventListener("lazybeforeunveil", function(e) {
    var t = e.target.getAttribute("data-bg");
    t && (e.target.style.backgroundImage = "url(" + t + ")")
}),
function(e) {
    var n = /iPhone/i
      , i = /iPod/i
      , s = /iPad/i
      , o = /\bAndroid(?:.+)Mobile\b/i
      , a = /Android/i
      , l = /\bAndroid(?:.+)SD4930UR\b/i
      , r = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i
      , c = /Windows Phone/i
      , d = /\bWindows(?:.+)ARM\b/i
      , u = /BlackBerry/i
      , f = /BB10/i
      , h = /Opera Mini/i
      , p = /\b(CriOS|Chrome)(?:.+)Mobile/i
      , m = /Mobile(?:.+)Firefox\b/i;
    function g(e, t) {
        return e.test(t)
    }
    function t(e) {
        var t = e || ("undefined" != typeof navigator ? navigator.userAgent : "")
          , e = t.split("[FBAN");
        void 0 !== (e = (t = void 0 !== e[1] ? e[0] : t).split("Twitter"))[1] && (t = e[0]);
        t = {
            apple: {
                phone: g(n, t) && !g(c, t),
                ipod: g(i, t),
                tablet: !g(n, t) && g(s, t) && !g(c, t),
                device: (g(n, t) || g(i, t) || g(s, t)) && !g(c, t)
            },
            amazon: {
                phone: g(l, t),
                tablet: !g(l, t) && g(r, t),
                device: g(l, t) || g(r, t)
            },
            android: {
                phone: !g(c, t) && g(l, t) || !g(c, t) && g(o, t),
                tablet: !g(c, t) && !g(l, t) && !g(o, t) && (g(r, t) || g(a, t)),
                device: !g(c, t) && (g(l, t) || g(r, t) || g(o, t) || g(a, t)) || g(/\bokhttp\b/i, t)
            },
            windows: {
                phone: g(c, t),
                tablet: g(d, t),
                device: g(c, t) || g(d, t)
            },
            other: {
                blackberry: g(u, t),
                blackberry10: g(f, t),
                opera: g(h, t),
                firefox: g(m, t),
                chrome: g(p, t),
                device: g(u, t) || g(f, t) || g(h, t) || g(m, t) || g(p, t)
            }
        };
        return t.any = t.apple.device || t.android.device || t.windows.device || t.other.device,
        t.phone = t.apple.phone || t.android.phone || t.windows.phone,
        t.tablet = t.apple.tablet || t.android.tablet || t.windows.tablet,
        t
    }
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = t : "undefined" != typeof module && module.exports && "undefined" != typeof window ? (module.exports = t(),
    module.exports.isMobile = t) : "function" == typeof define && define.amd ? define([], e.isMobile = t()) : e.isMobile = t()
}(this);
let spW = 768
  , spFlg = !1;
function scrollAnime(e, t, n) {
    let o = t;
    !0 === spFlg && (o = n),
    $(e).each(function() {
        let e = $(this)
          , t = e.find(".anime-elm");
        var n = e.offset().top
          , i = e.height()
          , s = $(window).scrollTop();
        s > n - (window.innerHeight || windowElm.height()) + o && s < n + i && (t.length ? t : e).addClass("set-anime")
    })
}
function slideTextBoxFunc() {
    let e = $(".slide-text-box");
    e.length && e.each(function() {
        let n = $(this);
        if (!n.parents("#global-nav").length) {
            var i = n.html();
            let e = n.find(".slide-text-inner")
              , t = 0;
            n.find(".slide-text-inner:eq(0) .flex").each(function() {
                t += $(this).innerWidth()
            }),
            n.css({
                width: t
            }),
            1 === e.length && e.after(i + i);
            i = n.innerWidth() / 70;
            n.hasClass("type-rev") ? gsap.to(n, i, {
                x: "100%",
                repeat: -1,
                overwrite: !0,
                ease: Linear.easeNone
            }) : (gsap.set(n, {
                x: "0",
                overwrite: !0
            }),
            gsap.to(n, i, {
                x: "-100%",
                repeat: -1,
                overwrite: !0,
                ease: Linear.easeNone
            }))
        }
    })
}
function setCtBtn01Circle() {
    let e = $(".ct-btn01");
    e.length && e.each(function(e, t) {
        let n = $(this);
        var i = n.innerHeight()
          , s = n.innerWidth();
        let o = n.find(".ct-btn01-svg");
        o.length && o.remove();
        var a = s / 2
          , l = i - 44 - 2
          , r = '<div class="ct-btn01-svg"><svg width="' + s + '" height="' + i + '"><path class="ct-btn01-svg-elm" d="';
        r += "M " + a + ",1",
        r += "h" + (a - 23),
        r += "c12,0,22,9.8,22,22",
        r += "l0," + l,
        r += "c0,12.2-9.8,22-22,22",
        r += "H23",
        r += "C10.8," + i + ",1," + (35 + l) + ",1," + (23 + l),
        r += "L1,22",
        r += "C1,10.8,10.8,1,23,1",
        r += "H" + a + 'Z"></svg></div>',
        n.append(r),
        n.find(".ct-btn01-svg-elm").css({
            "stroke-dashoffset": 2 * s + 2 * i,
            "stroke-dasharray": 2 * s + 2 * i
        })
    })
}
spFlg = !(window.innerWidth > spW),
window.onpageshow = function(e) {
    e.persisted && location.reload()
}
,
function() {
    const t = document.querySelector('meta[name="viewport"]');
    function e() {
        var e = 360 < window.outerWidth ? "width=device-width" : "width=360";
        t.getAttribute("content") !== e && t.setAttribute("content", e)
    }
    addEventListener("resize", e, !1),
    e()
}(),
$(function() {
    let n = $(window);
    n.on("resize orientationchange", function() {
        var e = window.innerWidth || $(window).outerWidth();
        spFlg = !(e > spW)
    });
    let i = $("body"), t, s = !1;
    function o() {
        i.removeAttr("style"),
        $("html, body").scrollTop(t),
        s = !1
    }
    let a = $("#global-header"), l, r = 0, c = !1, d = !1;
    function u() {
        a.removeClass("hide"),
        a.addClass("show").removeClass("up")
    }
    n.on("resize scroll orientationchange", function() {
        var e, t;
        !1 === s && (l = window.innerHeight,
        (e = n.scrollTop()) > l ? (a.addClass("fix"),
        !1 === d && (a.addClass("no-anime"),
        d = !0,
        setTimeout(function() {
            a.removeClass("no-anime")
        }, 10))) : (a.hasClass("fix") && a.fadeOut(300, function() {
            a.fadeIn().removeClass("fix show")
        }),
        d = !1),
        e > r ? (c = !0,
        ((t = $(document).height()) - (n.height() + e)) / t == 0 ? u() : (a.hasClass("show") && a.removeClass("show").addClass("up"),
        a.addClass("hide"))) : (c = !1,
        setTimeout(function() {
            !1 === c && a.hasClass("fix") && u()
        }, 450)),
        r = e)
    });
    let f = $("#global-nav");
    $("#header-menu-btn").on("click", function() {
        let e = $(this);
        e.toggleClass("on"),
        f.removeClass("scroll global-nav-open"),
        a.addClass("global-header-active"),
        f.fadeIn(400, function() {
            f.addClass("scroll"),
            setTimeout(function() {
                if (!f.find(".slide-start").length) {
                    let e = $("#global-nav .slide-text-box");
                    e.addClass("slide-start");
                    var i = e.html();
                    let t = 0;
                    e.find(".slide-text-inner .flex").each(function() {
                        t += $(this).innerWidth()
                    }),
                    e.css({
                        width: t
                    });
                    let n = e.find(".slide-text-inner");
                    n.after(i + i),
                    gsap.to(e, e.innerWidth() / 70, {
                        x: "-100%",
                        repeat: -1,
                        ease: Linear.easeNone
                    })
                }
            }, 250)
        }),
        setTimeout(function() {
            "block" == f.css("display") && (f.addClass("global-nav-open"),
            t = n.scrollTop(),
            i.css({
                position: "fixed",
                width: "100%",
                "z-index": "1",
                top: -t
            }),
            setTimeout(function() {
                i.css({
                    "-webkit-transform": "translate3d(0," + t + "px,0)",
                    transform: "translate3d(0," + t + "px,0)"
                })
            }, 400),
            s = !0)
        }, 250)
    }),
    $("#header-menu-btn-close").on("click", function() {
        f.fadeOut(),
        f.removeClass("scroll"),
        o(),
        setTimeout(function() {
            f.removeClass("global-nav-open"),
            $(".header-link-toggle").removeClass("on"),
            $(".header-link-list-sub").removeAttr("style")
        }, 250)
    }),
    $(".header-link-list-sub").each(function(e, t) {
        let n = $(this);
        n.parents(".header-link-list-elm-sp").find(".header-link-sp").addClass("header-link-toggle")
    }),
    $(".header-link-toggle").on("click", function(e) {
        e.preventDefault(),
        $(this).toggleClass("on").parents(".header-link-list-elm-sp").find(".header-link-list-sub").slideToggle()
    }),
    n.on("resize orientationchange", function() {
        !spFlg && f.hasClass("global-nav-open") && (f.removeAttr("style").removeClass("scroll global-nav-open"),
        $(".header-link-toggle").removeClass("on"),
        $(".header-link-list-sub").removeAttr("style"),
        o())
    }),
    $(document).on("click", ".js-smooth a,a.js-smooth", function() {
        var e = $(this).attr("href")
          , t = $("#" == e || "" == e ? "html" : e).offset().top;
        return $(this).parents(".global-nav").length ? (f.fadeOut(),
        f.removeClass("scroll"),
        o(),
        setTimeout(function() {
            f.removeClass("global-nav-open"),
            $(".header-link-toggle").removeClass("on"),
            $(".header-link-list-sub").removeAttr("style"),
            $("html, body").animate({
                scrollTop: t
            }, 600, "swing")
        }, 250)) : $("html, body").animate({
            scrollTop: t
        }, 600, "swing"),
        !1
    });
    var e = 'a:not([target="_blank"],[href^="mailto:"],.no-anime,.header-link-toggle,.js-no-fade)';
    let h = !1;
    function p() {
        let i = n.scrollTop() + window.innerHeight - 200
          , s = $(".project-list-elm")
          , o = $(".page-fill-elm");
        $(".js-bg-sec").each(function() {
            let e = $(this);
            var t = e.offset().top
              , n = t + e.innerHeight();
            t < i && i < n && (n = this.getAttribute("data-bgcolor"),
            gsap.to("#js-page-bg-elm", 1.5, {
                backgroundColor: n,
                overwrite: !0
            }),
            s.length ? gsap.to(s, 1.5, {
                backgroundColor: n,
                overwrite: !0
            }) : o.length && gsap.to(o, 1.5, {
                fill: n,
                overwrite: !0
            }))
        })
    }
    function m(e, t, n) {
        $(e).length && ($(e).on({
            mouseenter: function() {
                spFlg ? $(n).removeClass("on-mouse") : $(n).addClass("on-mouse")
            },
            mouseleave: function() {
                spFlg || $(n).removeClass("on-mouse")
            },
            mousemove: function(e) {
                spFlg || $(n).css({
                    top: e.clientY,
                    left: e.clientX
                })
            }
        }, t),
        $(e).on({
            mouseenter: function() {
                spFlg || $(n).removeClass("on-mouse")
            },
            mouseleave: function() {
                spFlg || $(n).addClass("on-mouse")
            }
        }, ".cursor-hidden-area"))
    }
    i.on("mousedown", e, function(e) {
        h = !1
    }),
    i.on("mousemove", e, function(e) {
        h = !0
    }),
    i.on("click", e, function(e) {
        var t;
        h || $(this).parents(".js-smooth").length || (e.preventDefault(),
        t = $(this).attr("href"),
        i.addClass("js-fadeout"),
        setTimeout(function() {
            window.location.href = t
        }, 500))
    }),
    $(".page-bg-elm").length && (p(),
    n.on("scroll resize orientationchange", function(e) {
        p()
    })),
    $(".animate").length && n.on("scroll resize orientationchange", function() {
        scrollAnime(".animate", 150, 100)
    }),
    m("#js-top-stories-slider", ".stories-slider-link", ".cursor-img-stories"),
    m(".top-service-slider-inner", ".top-service-slider", ".cursor-img-service-slider"),
    m(".top-service-sec", ".top-service-main-slider", ".cursor-img-service-slider"),
    m(".next-link-sec", ".next-link", ".cursor-img-next-link"),
    m(".service-business-slider", 'a:not([target="_blank"])', ".service-business-link"),
    m(".service-business-slider", 'a[target="_blank"]', ".service-business-link-blank"),
    m(".project-single-img-slider-set", ".project-single-img-slider", ".cursor-img-project-single-img-slider"),
    m(".member-rel-slider", ".member-rel-slider-link", ".cursor-img-member-rel-link"),
    m(".mix-friends-sec", ".mix-friends-slider", ".cursor-img-mix-friends-slider");
    let g = $(".project-list-link")
      , v = ".project-list-img-box";
    if (g.length)
        g.on("mouseenter", function(n) {
            if (!isMobile.any && !spFlg) {
                let e = $(this)
                  , t = e.find(v);
                var i = this.getBoundingClientRect().left
                  , s = this.getBoundingClientRect().top
                  , i = n.clientX - i
                  , s = n.clientY - s
                  , i = i - t.innerWidth() / 2
                  , s = s - t.innerHeight() / 2;
                e.addClass("is-active"),
                gsap.set(t, {
                    x: i,
                    y: s
                }),
                gsap.to(t, .7, {
                    autoAlpha: 1,
                    scale: 1,
                    ease: Expo.easeOut
                }),
                gsap.to(t.find(".project-list-img "), .35, {
                    scale: 1,
                    ease: Expo.easeOut
                })
            }
        }),
        g.on("mouseleave", function(e) {
            if (!isMobile.any && !spFlg) {
                let e = $(this)
                  , t = e.find(v);
                gsap.to(t, .7 - .2, {
                    autoAlpha: 0,
                    overwrite: !0,
                    scaleX: 0,
                    ease: Expo.easeOut
                }),
                gsap.to(t.find(".project-list-img "), .7 - .2, {
                    scaleX: 2,
                    overwrite: !0,
                    ease: Expo.easeOut
                }),
                e.removeClass("is-active")
            }
        }),
        g.on("mousemove", function(n) {
            if (!isMobile.any && !spFlg) {
                let e = $(this)
                  , t = e.find(v);
                var i = this.getBoundingClientRect().left
                  , s = this.getBoundingClientRect().top
                  , i = n.clientX - i
                  , s = n.clientY - s
                  , i = i - t.innerWidth() / 2
                  , s = s - t.innerHeight() / 2;
                gsap.to(t, 1, {
                    x: i,
                    y: s,
                    overwrite: !1
                })
            }
        });
    function b() {
        let t = window.pageYOffset || document.documentElement.scrollTop
          , a = window.innerHeight
          , l = t + a;
        $(".js-parallax-img-box").each(function() {
            let n = $(this);
            var i = n.offset().top
              , s = n.innerHeight()
              , e = i - a
              , o = i + s;
            if (t > e && t < o) {
                let e = n.find(".js-parallax-img");
                o = e.innerHeight() - s;
                let t = ((l - i) * (o / (a + s))).toFixed(1);
                requestAnimationFrame(()=>{
                    gsap.set(e, {
                        y: -t
                    })
                }
                )
            }
        })
    }
    setCtBtn01Circle(),
    n.on("resize orientationchange", function() {
        setCtBtn01Circle(),
        slideTextBoxFunc()
    }),
    $(".js-parallax-img-box").length && (b(),
    $(window).on("scroll resize orientationchange", function() {
        b()
    }));
    let w = $(".wpcf7-select");
    if (w.length) {
        let i = !1;
        w.each(function(e, t) {
            let n = $(this)
              , i = n.parents(".wpcf7-form-control-wrap");
            i.addClass("select-box-wrap");
            let s = n.find("option");
            i.append('<span class="select-box-list"></span>');
            let o = i.find(".select-box-list");
            s.each(function() {
                var e = $(this).html();
                "お選びください" !== e && o.append('<span class="select-box-list-elm" data-val="' + $(this).val() + '">' + e + "</li>")
            })
        });
        function C(e) {
            let t = $(e)
              , n = t.find(".select-box-list");
            t.hasClass("on") ? n.slideUp(250, function() {
                t.removeClass("on")
            }) : (n.css({
                display: "none"
            }),
            t.addClass("on"),
            n.slideDown(250),
            setTimeout(function() {
                i = !0
            }, 10))
        }
        $(document).on("click", ".wpcf7-form-control-wrap", function(e) {
            C(this)
        }),
        $(document).on("keyup", ".select-box-wrap", function(e) {
            13 == e.keyCode && C(this)
        }),
        $(document).on("change", ".select-box-wrap select", function() {
            let e = $(this)
              , t = e.parents(".select-box-wrap")
              , n = e.val();
            t.find(".select-box-list-elm").removeClass("selected").each(function() {
                $(this).data("val") === n && $(this).addClass("selected")
            }),
            i = !1,
            $(".wpcf7-form-control-wrap").removeClass("on"),
            $(".select-box-list").css({
                display: "none"
            })
        }),
        $(document).on("click", ".select-box-list-elm", function(e) {
            let t = $(this)
              , n = t.parents(".wpcf7-form-control-wrap")
              , i = n.find("select");
            n.find(".selected").removeClass("selected"),
            t.addClass("selected"),
            i.val(t.data("val")),
            n.find(".select-box-list").slideUp(250, function() {
                t.removeClass("on")
            })
        }),
        $(document).on("click", function(e) {
            let t = $(e.target)
              , n = !0;
            (t.hasClass("select-box-wrap") || t.parents(".select-box-wrap").length) && (n = !1),
            n && ($(".wpcf7-form-control-wrap").removeClass("on"),
            $(".select-box-list").css({
                display: "none"
            }),
            i = !1)
        })
    }
    e = $('.wysiwyg iframe[src*="youtube"],.wysiwyg iframe[src*="vimeo"]');
    e.length && e.wrap('<span class="iframe-wrap block">');
    e = $(".wysiwyg video");
    e.length && e.wrap('<span class="iframe-wrap block">')
}),
window.addEventListener("load", function() {
    $(".animate").length && setTimeout(function() {
        scrollAnime(".animate", 150, 100)
    }, 80);
    try {
        Typekit.load({
            active: function() {
                setTimeout(function() {
                    slideTextBoxFunc(),
                    setCtBtn01Circle()
                }, 80)
            }
        })
    } catch (e) {
        slideTextBoxFunc()
    }
    const e = $("#thanks-img-slider");
    e.length && e.slick({
        dots: !1,
        arrows: !1,
        fade: !0,
        speed: 1,
        autoplaySpeed: 220,
        autoplay: !0,
        draggable: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        touchMove: !1,
        swipe: !1
    }).on("afterChange", function(e, t, n) {
        t.slideCount - 1 === n && $(this).slick("slickPause")
    });
    const t = $("#notfound-img-slider");
    t.length && t.slick({
        dots: !1,
        arrows: !1,
        fade: !0,
        speed: 1,
        autoplaySpeed: 220,
        autoplay: !1,
        draggable: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        touchMove: !1,
        swipe: !1
    });
    const n = document.getElementById("music-src");
    if (null !== n) {
        const i = new Audio(n.getAttribute("data-src"))
          , s = $("#notfound-play-btn");
        s.on("click", function() {
            let e = $(this);
            e.toggleClass("on"),
            e.hasClass("on") ? (i.play(),
            t.slick("slickPlay")) : (i.pause(),
            i.currentTime = 0,
            t.slick("slickPause").slick("slickGoTo", 0))
        }),
        i.addEventListener("ended", ()=>{
            t.slick("slickPause").slick("slickGoTo", 0),
            s.removeClass("on")
        }
        )
    }
});
