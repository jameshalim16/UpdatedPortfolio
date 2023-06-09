!function() {
    "use strict";
    function t(t) {
        var e = function() {
            t(window.lazySizes),
            window.removeEventListener("lazyunveilread", e, !0)
        };
        window.lazySizes ? e() : window.addEventListener("lazyunveilread", e, !0)
    }
    window.lazySizes = function() {
        var t, e;
        if (function() {
            var t, a = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
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
            for (t in e = window.lazySizesConfig || window.lazysizesConfig || {},
            a)
                t in e || (e[t] = a[t])
        }(),
        !document || !document.getElementsByClassName)
            return {
                init: function() {},
                cfg: e,
                noSupport: !0
            };
        var a, i, n, o, r, s, d, l, c, u, f, m, g, h, p, v, y, z, A, b, w, E, C, L, _, N, T, M, R, S, W, x, B, q, D, F, k, H, P, $, I, O, J, U = document.documentElement, j = window.addEventListener.bind(window), G = window.requestIdleCallback, K = /^picture$/i, Q = ["load", "error", "lazyincluded", "_lazyloaded"], V = Array.prototype.forEach, X = function(t, e, a) {
            var i = a ? "addEventListener" : "removeEventListener";
            a && X(t, e),
            Q.forEach((function(a) {
                t[i](a, e)
            }
            ))
        }, Y = function(e, a, i, n, o) {
            var r = document.createEvent("Event");
            return i || (i = {}),
            i.instance = t,
            r.initEvent(a, !n, !o),
            r.detail = i,
            e.dispatchEvent(r),
            r
        }, Z = function(t, a) {
            var i;
            !window.HTMLPictureElement && (i = window.picturefill || e.pf) ? (a && a.src && !t.getAttribute("srcset") && t.setAttribute("srcset", a.src),
            i({
                reevaluate: !0,
                elements: [t]
            })) : a && a.src && (t.src = a.src)
        }, tt = function(t, e) {
            return (getComputedStyle(t, null) || {})[e]
        }, et = function(t, a, i) {
            for (i = i || t.offsetWidth; i < e.minSize && a && !t._lazysizesWidth; )
                i = a.offsetWidth,
                a = a.parentNode;
            return i
        }, at = (o = [],
        r = n = [],
        (d = function(t, e) {
            a && !e ? t.apply(this, arguments) : (r.push(t),
            i || (i = !0,
            (document.hidden ? setTimeout : requestAnimationFrame)(s)))
        }
        )._lsFlush = s = function() {
            var t = r;
            for (r = n.length ? o : n,
            a = !0,
            i = !1; t.length; )
                t.shift()();
            a = !1
        }
        ,
        d), it = function(t, e) {
            return e ? function() {
                at(t)
            }
            : function() {
                var e = this
                  , a = arguments;
                at((function() {
                    t.apply(e, a)
                }
                ))
            }
        }, nt = function(t) {
            var e, a, i = function() {
                e = null,
                t()
            }, n = function() {
                var t = Date.now() - a;
                t < 99 ? setTimeout(n, 99 - t) : (G || i)(i)
            };
            return function() {
                a = Date.now(),
                e || (e = setTimeout(n, 99))
            }
        }, ot = (b = /^img$/i,
        w = /^iframe$/i,
        E = "onscroll"in window && !/(gle|ing)bot/.test(navigator.userAgent),
        C = 0,
        L = 0,
        _ = -1,
        N = function(t) {
            L--,
            (!t || L < 0 || !t.target) && (L = 0)
        }
        ,
        T = function(t) {
            return null == A && (A = "hidden" == tt(document.body, "visibility")),
            A || !("hidden" == tt(t.parentNode, "visibility") && "hidden" == tt(t, "visibility"))
        }
        ,
        M = function(t, e) {
            var a, i = t, n = T(t);
            for (p -= e,
            z += e,
            v -= e,
            y += e; n && (i = i.offsetParent) && i != document.body && i != U; )
                (n = (tt(i, "opacity") || 1) > 0) && "visible" != tt(i, "overflow") && (a = i.getBoundingClientRect(),
                n = y > a.left && v < a.right && z > a.top - 1 && p < a.bottom + 1);
            return n
        }
        ,
        S = function(t) {
            var a, i = 0, n = e.throttleDelay, o = e.ricTimeout, r = function() {
                a = !1,
                i = Date.now(),
                t()
            }, s = G && o > 49 ? function() {
                G(r, {
                    timeout: o
                }),
                o !== e.ricTimeout && (o = e.ricTimeout)
            }
            : it((function() {
                setTimeout(r)
            }
            ), !0);
            return function(t) {
                var e;
                (t = !0 === t) && (o = 33),
                a || (a = !0,
                (e = n - (Date.now() - i)) < 0 && (e = 0),
                t || e < 9 ? s() : setTimeout(s, e))
            }
        }(R = function() {
            var a, i, n, o, r, s, d, u, m, b, w, N, R = t.elements;
            if ((f = e.loadMode) && L < 8 && (a = R.length)) {
                for (i = 0,
                _++; i < a; i++)
                    if (R[i] && !R[i]._lazyRace)
                        if (!E || t.prematureUnveil && t.prematureUnveil(R[i]))
                            F(R[i]);
                        else if ((u = R[i].getAttribute("data-expand")) && (s = 1 * u) || (s = C),
                        b || (b = !e.expand || e.expand < 1 ? U.clientHeight > 500 && U.clientWidth > 500 ? 500 : 370 : e.expand,
                        t._defEx = b,
                        w = b * e.expFactor,
                        N = e.hFac,
                        A = null,
                        C < w && L < 1 && _ > 2 && f > 2 && !document.hidden ? (C = w,
                        _ = 0) : C = f > 1 && _ > 1 && L < 6 ? b : 0),
                        m !== s && (g = innerWidth + s * N,
                        h = innerHeight + s,
                        d = -1 * s,
                        m = s),
                        n = R[i].getBoundingClientRect(),
                        (z = n.bottom) >= d && (p = n.top) <= h && (y = n.right) >= d * N && (v = n.left) <= g && (z || y || v || p) && (e.loadHidden || T(R[i])) && (c && L < 3 && !u && (f < 3 || _ < 4) || M(R[i], s))) {
                            if (F(R[i]),
                            r = !0,
                            L > 9)
                                break
                        } else
                            !r && c && !o && L < 4 && _ < 4 && f > 2 && (l[0] || e.preloadAfterLoad) && (l[0] || !u && (z || y || v || p || "auto" != R[i].getAttribute(e.sizesAttr))) && (o = l[0] || R[i]);
                o && !r && F(o)
            }
        }
        ),
        x = it(W = function(t) {
            var a = t.target;
            a._lazyCache ? delete a._lazyCache : (N(t),
            a.classList.add(e.loadedClass),
            a.classList.remove(e.loadingClass),
            X(a, B),
            Y(a, "lazyloaded"))
        }
        ),
        B = function(t) {
            x({
                target: t.target
            })
        }
        ,
        q = function(t) {
            var a, i = t.getAttribute(e.srcsetAttr);
            (a = e.customMedia[t.getAttribute("data-media") || t.getAttribute("media")]) && t.setAttribute("media", a),
            i && t.setAttribute("srcset", i)
        }
        ,
        D = it((function(t, a, i, n, o) {
            var r, s, d, l, c, f;
            (c = Y(t, "lazybeforeunveil", a)).defaultPrevented || (n && (i ? t.classList.add(e.autosizesClass) : t.setAttribute("sizes", n)),
            s = t.getAttribute(e.srcsetAttr),
            r = t.getAttribute(e.srcAttr),
            o && (l = (d = t.parentNode) && K.test(d.nodeName || "")),
            f = a.firesLoad || "src"in t && (s || r || l),
            c = {
                target: t
            },
            t.classList.add(e.loadingClass),
            f && (clearTimeout(u),
            u = setTimeout(N, 2500),
            X(t, B, !0)),
            l && V.call(d.getElementsByTagName("source"), q),
            s ? t.setAttribute("srcset", s) : r && !l && (w.test(t.nodeName) ? function(t, e) {
                try {
                    t.contentWindow.location.replace(e)
                } catch (a) {
                    t.src = e
                }
            }(t, r) : t.src = r),
            o && (s || l) && Z(t, {
                src: r
            })),
            t._lazyRace && delete t._lazyRace,
            t.classList.remove(e.lazyClass),
            at((function() {
                var e = t.complete && t.naturalWidth > 1;
                f && !e || (e && t.classList.add("ls-is-cached"),
                W(c),
                t._lazyCache = !0,
                setTimeout((function() {
                    "_lazyCache"in t && delete t._lazyCache
                }
                ), 9)),
                "lazy" == t.loading && L--
            }
            ), !0)
        }
        )),
        F = function(t) {
            if (!t._lazyRace) {
                var a, i = b.test(t.nodeName), n = i && (t.getAttribute(e.sizesAttr) || t.getAttribute("sizes")), o = "auto" == n;
                (!o && c || !i || !t.getAttribute("src") && !t.srcset || t.complete || t.classList.contains(e.errorClass) || !t.classList.contains(e.lazyClass)) && (a = Y(t, "lazyunveilread").detail,
                o && rt.updateElem(t, !0, t.offsetWidth),
                t._lazyRace = !0,
                L++,
                D(t, a, o, n, i))
            }
        }
        ,
        k = nt((function() {
            e.loadMode = 3,
            S()
        }
        )),
        P = function() {
            c || (Date.now() - m < 999 ? setTimeout(P, 999) : (c = !0,
            e.loadMode = 3,
            S(),
            j("scroll", H, !0)))
        }
        ,
        {
            _: function() {
                m = Date.now(),
                t.elements = document.getElementsByClassName(e.lazyClass),
                l = document.getElementsByClassName(e.lazyClass + " " + e.preloadClass),
                j("scroll", S, !0),
                j("resize", S, !0),
                j("pageshow", (function(t) {
                    if (t.persisted) {
                        var a = document.querySelectorAll("." + e.loadingClass);
                        a.length && a.forEach && requestAnimationFrame((function() {
                            a.forEach((function(t) {
                                t.complete && F(t)
                            }
                            ))
                        }
                        ))
                    }
                }
                )),
                window.MutationObserver && new MutationObserver(S).observe(U, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0
                }),
                j("hashchange", S, !0),
                ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(t) {
                    document.addEventListener(t, S, !0)
                }
                )),
                /d$|^c/.test(document.readyState) ? P() : (j("load", P),
                document.addEventListener("DOMContentLoaded", S),
                setTimeout(P, 2e4)),
                t.elements.length ? (R(),
                at._lsFlush()) : S()
            },
            checkElems: S,
            unveil: F,
            _aLSL: H = function() {
                3 == e.loadMode && (e.loadMode = 2),
                k()
            }
        }), rt = (I = it((function(t, e, a, i) {
            var n, o, r;
            if (t._lazysizesWidth = i,
            i += "px",
            t.setAttribute("sizes", i),
            K.test(e.nodeName || ""))
                for (o = 0,
                r = (n = e.getElementsByTagName("source")).length; o < r; o++)
                    n[o].setAttribute("sizes", i);
            a.detail.dataAttr || Z(t, a.detail)
        }
        )),
        O = function(t, e, a) {
            var i, n = t.parentNode;
            n && (a = et(t, n, a),
            (i = Y(t, "lazybeforesizes", {
                width: a,
                dataAttr: !!e
            })).defaultPrevented || (a = i.detail.width) && a !== t._lazysizesWidth && I(t, n, i, a))
        }
        ,
        {
            _: function() {
                $ = document.getElementsByClassName(e.autosizesClass),
                j("resize", J)
            },
            checkElems: J = nt((function() {
                var t, e = $.length;
                if (e)
                    for (t = 0; t < e; t++)
                        O($[t])
            }
            )),
            updateElem: O
        }), st = function() {
            !st.i && document.getElementsByClassName && (st.i = !0,
            rt._(),
            ot._())
        };
        return setTimeout((function() {
            e.init && st()
        }
        )),
        t = {
            cfg: e,
            autoSizer: rt,
            loader: ot,
            init: st,
            uP: Z,
            fire: Y,
            gW: et,
            rAF: at
        }
    }(),
    t((function(t) {
        var e, a, i = {};
        function n(t, e) {
            if (!i[t]) {
                var a = document.createElement(e ? "link" : "script")
                  , n = document.getElementsByTagName("script")[0];
                e ? (a.rel = "stylesheet",
                a.href = t) : a.src = t,
                i[t] = !0,
                i[a.src || a.href] = !0,
                n.parentNode.insertBefore(a, n)
            }
        }
        document.addEventListener && (a = /\(|\)|\s|'/,
        e = function(t, e) {
            var a = document.createElement("img");
            a.onload = function() {
                a.onload = null,
                a.onerror = null,
                a = null,
                e()
            }
            ,
            a.onerror = a.onload,
            a.src = t,
            a && a.complete && a.onload && a.onload()
        }
        ,
        addEventListener("lazybeforeunveil", (function(i) {
            var o, r, s;
            if (i.detail.instance == t && !i.defaultPrevented) {
                var d = i.target;
                if ("none" == d.preload && (d.preload = d.getAttribute("data-preload") || "auto"),
                null != d.getAttribute("data-autoplay"))
                    if (d.getAttribute("data-expand") && !d.autoplay)
                        try {
                            d.play()
                        } catch (t) {}
                    else
                        requestAnimationFrame((function() {
                            d.setAttribute("data-expand", "-10"),
                            d.classList.add(t.cfg.lazyClass)
                        }
                        ));
                (o = d.getAttribute("data-link")) && n(o, !0),
                (o = d.getAttribute("data-script")) && n(o),
                (o = d.getAttribute("data-require")) && (t.cfg.requireJs ? t.cfg.requireJs([o]) : n(o)),
                (r = d.getAttribute("data-bg")) && (i.detail.firesLoad = !0,
                e(r, (function() {
                    d.style.backgroundImage = "url(" + (a.test(r) ? JSON.stringify(r) : r) + ")",
                    i.detail.firesLoad = !1,
                    t.fire(d, "_lazyloaded", {}, !0, !0)
                }
                ))),
                (s = d.getAttribute("data-poster")) && (i.detail.firesLoad = !0,
                e(s, (function() {
                    d.poster = s,
                    i.detail.firesLoad = !1,
                    t.fire(d, "_lazyloaded", {}, !0, !0)
                }
                )))
            }
        }
        ), !1))
    }
    )),
    t((function(t) {
        if (window.addEventListener) {
            var e, a, i, n = Array.prototype.forEach, o = /^picture$/i, r = function(t) {
                return window.matchMedia ? (r = function(t) {
                    return !t || (matchMedia(t) || {}).matches
                }
                )(t) : window.Modernizr && Modernizr.mq ? !t || Modernizr.mq(t) : !t
            }, s = t.cfg;
            d.prototype = {
                _setupEvents: function() {
                    var t, e, a = this, i = function(t) {
                        t.naturalWidth < 36 ? a.addAspectRatio(t, !0) : a.removeAspectRatio(t, !0)
                    }, o = function() {
                        a.processImages()
                    };
                    document.addEventListener("load", (function(t) {
                        t.target.getAttribute && t.target.getAttribute("data-aspectratio") && i(t.target)
                    }
                    ), !0),
                    addEventListener("resize", (e = function() {
                        n.call(a.ratioElems, i)
                    }
                    ,
                    function() {
                        clearTimeout(t),
                        t = setTimeout(e, 99)
                    }
                    )),
                    document.addEventListener("DOMContentLoaded", o),
                    addEventListener("load", o)
                },
                processImages: function(t) {
                    var e, a;
                    t || (t = document),
                    e = "length"in t && !t.nodeName ? t : t.querySelectorAll("img[data-aspectratio]");
                    for (a = 0; a < e.length; a++)
                        e[a].naturalWidth > 36 ? this.removeAspectRatio(e[a]) : this.addAspectRatio(e[a])
                },
                getSelectedRatio: function(t) {
                    var e, a, i, n, d, l = t.parentNode;
                    if (l && o.test(l.nodeName || ""))
                        for (e = 0,
                        a = (i = l.getElementsByTagName("source")).length; e < a; e++)
                            if (n = i[e].getAttribute("data-media") || i[e].getAttribute("media"),
                            s.customMedia[n] && (n = s.customMedia[n]),
                            r(n)) {
                                d = i[e].getAttribute("data-aspectratio");
                                break
                            }
                    return d || t.getAttribute("data-aspectratio") || ""
                },
                parseRatio: (a = /^\s*([+\d\.]+)(\s*[\/x]\s*([+\d\.]+))?\s*$/,
                i = {},
                function(t) {
                    var e;
                    return !i[t] && (e = t.match(a)) && (e[3] ? i[t] = e[1] / e[3] : i[t] = 1 * e[1]),
                    i[t]
                }
                ),
                addAspectRatio: function(t, e) {
                    var a, i = t.offsetWidth, n = t.offsetHeight;
                    e || t.classList.add("lazyaspectratio"),
                    i < 36 && n <= 0 ? (i || n && window.console) && console.log("Define width or height of image, so we can calculate the other dimension") : (a = this.getSelectedRatio(t),
                    (a = this.parseRatio(a)) && (i ? t.style.height = i / a + "px" : t.style.width = n * a + "px"))
                },
                removeAspectRatio: function(t) {
                    t.classList.remove("lazyaspectratio"),
                    t.style.height = "",
                    t.style.width = "",
                    t.removeAttribute("data-aspectratio")
                }
            },
            e = new d,
            window.imageRatio = e
        }
        function d() {
            this.ratioElems = document.getElementsByClassName("lazyaspectratio"),
            this._setupEvents(),
            this.processImages()
        }
    }
    ))
}();
