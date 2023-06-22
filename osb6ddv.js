/* Copyright 2023 © Adobe Systems */
/*{"k":"1.9.3","auto_updating":true,"last_published":"2022-02-01 22:46:48 UTC"}*/
(function(config) {
    (function() {
        'use strict';
        var f, g = [];
        function l(a) {
            g.push(a);
            1 == g.length && f()
        }
        function m() {
            for (; g.length; )
                g[0](),
                g.shift()
        }
        f = function() {
            setTimeout(m)
        }
        ;
        function n(a) {
            this.a = p;
            this.b = void 0;
            this.f = [];
            var b = this;
            try {
                a(function(a) {
                    q(b, a)
                }, function(a) {
                    r(b, a)
                })
            } catch (c) {
                r(b, c)
            }
        }
        var p = 2;
        function t(a) {
            return new n(function(b, c) {
                c(a)
            }
            )
        }
        function u(a) {
            return new n(function(b) {
                b(a)
            }
            )
        }
        function q(a, b) {
            if (a.a == p) {
                if (b == a)
                    throw new TypeError;
                var c = !1;
                try {
                    var d = b && b.then;
                    if (null != b && "object" == typeof b && "function" == typeof d) {
                        d.call(b, function(b) {
                            c || q(a, b);
                            c = !0
                        }, function(b) {
                            c || r(a, b);
                            c = !0
                        });
                        return
                    }
                } catch (e) {
                    c || r(a, e);
                    return
                }
                a.a = 0;
                a.b = b;
                v(a)
            }
        }
        function r(a, b) {
            if (a.a == p) {
                if (b == a)
                    throw new TypeError;
                a.a = 1;
                a.b = b;
                v(a)
            }
        }
        function v(a) {
            l(function() {
                if (a.a != p)
                    for (; a.f.length; ) {
                        var b = a.f.shift()
                          , c = b[0]
                          , d = b[1]
                          , e = b[2]
                          , b = b[3];
                        try {
                            0 == a.a ? "function" == typeof c ? e(c.call(void 0, a.b)) : e(a.b) : 1 == a.a && ("function" == typeof d ? e(d.call(void 0, a.b)) : b(a.b))
                        } catch (h) {
                            b(h)
                        }
                    }
            })
        }
        n.prototype.g = function(a) {
            return this.c(void 0, a)
        }
        ;
        n.prototype.c = function(a, b) {
            var c = this;
            return new n(function(d, e) {
                c.f.push([a, b, d, e]);
                v(c)
            }
            )
        }
        ;
        function w(a) {
            return new n(function(b, c) {
                function d(c) {
                    return function(d) {
                        h[c] = d;
                        e += 1;
                        e == a.length && b(h)
                    }
                }
                var e = 0
                  , h = [];
                0 == a.length && b(h);
                for (var k = 0; k < a.length; k += 1)
                    u(a[k]).c(d(k), c)
            }
            )
        }
        function x(a) {
            return new n(function(b, c) {
                for (var d = 0; d < a.length; d += 1)
                    u(a[d]).c(b, c)
            }
            )
        }
        ;window.Promise || (window.Promise = n,
        window.Promise.resolve = u,
        window.Promise.reject = t,
        window.Promise.race = x,
        window.Promise.all = w,
        window.Promise.prototype.then = n.prototype.c,
        window.Promise.prototype["catch"] = n.prototype.g);
    }());

    (function() {
        function n(a, b) {
            -1 === a.className.split(/\s+/).indexOf(b) && (a.className += " " + b)
        }
        function aa(a, b) {
            if (-1 !== a.className.split(/\s+/).indexOf(b)) {
                var c = a.className.split(/\s+/);
                c.splice(c.indexOf(b), 1);
                a.className = c.join(" ")
            }
        }
        function ba(a, b) {
            document.addEventListener ? a.addEventListener("scroll", b, !1) : a.attachEvent("scroll", b)
        }
        function ca(a) {
            document.body ? a() : document.addEventListener ? document.addEventListener("DOMContentLoaded", function c() {
                document.removeEventListener("DOMContentLoaded", c);
                a()
            }) : document.attachEvent("onreadystatechange", function d() {
                if ("interactive" == document.readyState || "complete" == document.readyState)
                    document.detachEvent("onreadystatechange", d),
                    a()
            })
        }
        ;function da(a) {
            this.g = document.createElement("div");
            this.g.setAttribute("aria-hidden", "true");
            this.g.appendChild(document.createTextNode(a));
            this.i = document.createElement("span");
            this.m = document.createElement("span");
            this.D = document.createElement("span");
            this.o = document.createElement("span");
            this.A = -1;
            this.i.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.m.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.o.style.cssText = "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
            this.D.style.cssText = "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";
            this.i.appendChild(this.D);
            this.m.appendChild(this.o);
            this.g.appendChild(this.i);
            this.g.appendChild(this.m)
        }
        function u(a, b) {
            a.g.style.cssText = "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-synthesis:none;font:" + b + ";"
        }
        function ea(a) {
            var b = a.g.offsetWidth
              , c = b + 100;
            a.o.style.width = c + "px";
            a.m.scrollLeft = c;
            a.i.scrollLeft = a.i.scrollWidth + 100;
            return a.A !== b ? (a.A = b,
            !0) : !1
        }
        function fa(a, b) {
            function c() {
                var e = d;
                ea(e) && null !== e.g.parentNode && b(e.A)
            }
            var d = a;
            ba(a.i, c);
            ba(a.m, c);
            ea(a)
        }
        ;function ka() {
            var a = {};
            this.family = "_fff_";
            this.style = a.style || "normal";
            this.weight = a.weight || "normal";
            this.stretch = a.stretch || "normal"
        }
        var la = null
          , ma = null
          , na = null
          , oa = null;
        function pa() {
            if (null === ma)
                if (qa() && /Apple/.test(window.navigator.vendor)) {
                    var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                    ma = !!a && 603 > parseInt(a[1], 10)
                } else
                    ma = !1;
            return ma
        }
        function qa() {
            null === oa && (oa = !!document.fonts);
            return oa
        }
        function v(a, b) {
            var c = a.style
              , d = a.weight;
            if (null === na) {
                var e = document.createElement("div");
                try {
                    e.style.font = "condensed 100px sans-serif"
                } catch (f) {}
                na = "" !== e.style.font
            }
            return [c, d, na ? a.stretch : "", "100px", b].join(" ")
        }
        ka.prototype.load = function(a, b) {
            var c = this
              , d = a || "BESbswy"
              , e = 0
              , f = b || 3E3
              , g = (new Date).getTime();
            return new Promise(function(h, k) {
                if (qa() && !pa()) {
                    var q = new Promise(function(m, r) {
                        function p() {
                            (new Date).getTime() - g >= f ? r() : document.fonts.load(v(c, '"' + c.family + '"'), d).then(function(t) {
                                1 <= t.length ? m() : setTimeout(p, 25)
                            }, function() {
                                r()
                            })
                        }
                        p()
                    }
                    )
                      , V = new Promise(function(m, r) {
                        e = setTimeout(r, f)
                    }
                    );
                    Promise.race([V, q]).then(function() {
                        clearTimeout(e);
                        h(c)
                    }, function() {
                        k(c)
                    })
                } else
                    ca(function() {
                        function m() {
                            var l;
                            if (l = -1 != w && -1 != z || -1 != w && -1 != A || -1 != z && -1 != A)
                                (l = w != z && w != A && z != A) || (null === la && (l = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),
                                la = !!l && (536 > parseInt(l[1], 10) || 536 === parseInt(l[1], 10) && 11 >= parseInt(l[2], 10))),
                                l = la && (w == ha && z == ha && A == ha || w == ia && z == ia && A == ia || w == ja && z == ja && A == ja)),
                                l = !l;
                            l && (null !== x.parentNode && x.parentNode.removeChild(x),
                            clearTimeout(e),
                            h(c))
                        }
                        function r() {
                            if ((new Date).getTime() - g >= f)
                                null !== x.parentNode && x.parentNode.removeChild(x),
                                k(c);
                            else {
                                var l = document.hidden;
                                if (!0 === l || void 0 === l)
                                    w = p.g.offsetWidth,
                                    z = t.g.offsetWidth,
                                    A = B.g.offsetWidth,
                                    m();
                                e = setTimeout(r, 50)
                            }
                        }
                        var p = new da(d)
                          , t = new da(d)
                          , B = new da(d)
                          , w = -1
                          , z = -1
                          , A = -1
                          , ha = -1
                          , ia = -1
                          , ja = -1
                          , x = document.createElement("div");
                        x.dir = "ltr";
                        u(p, v(c, "sans-serif"));
                        u(t, v(c, "serif"));
                        u(B, v(c, "monospace"));
                        x.appendChild(p.g);
                        x.appendChild(t.g);
                        x.appendChild(B.g);
                        document.body.appendChild(x);
                        ha = p.g.offsetWidth;
                        ia = t.g.offsetWidth;
                        ja = B.g.offsetWidth;
                        r();
                        fa(p, function(l) {
                            w = l;
                            m()
                        });
                        u(p, v(c, '"' + c.family + '",sans-serif'));
                        fa(t, function(l) {
                            z = l;
                            m()
                        });
                        u(t, v(c, '"' + c.family + '",serif'));
                        fa(B, function(l) {
                            A = l;
                            m()
                        });
                        u(B, v(c, '"' + c.family + '",monospace'))
                    })
            }
            )
        }
        ;
        var ra = null;
        function sa() {
            if (!ra) {
                if (/MSIE|Trident/.test(navigator.userAgent))
                    return Promise.resolve(["woff", "opentype", "truetype"]);
                var a = document.createElement("style")
                  , b = document.getElementsByTagName("head")[0];
                a.appendChild(document.createTextNode('@font-face{font-family:"_fff_";src:url(data:font/woff2;base64,d09GMgABAAAAAADcAAoAAAAAAggAAACWAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABk4ALAoUNAE2AiQDCAsGAAQgBSAHIBtvAciuMTaGVo8IaqBbcKPeB3CyAAIO4unr9nb72QE3p00iGQQIZcAAcAMEJOztBx7zdWVWn//BAPW1l0BN429cPrCPE75MA637gPs0DjavNxzHtWeXXErKIV3AF9TbHqCTOATL2BgjeIH30lQwSAonU1LabV8Iz12wDvgd/obV5QVxXDKvUhW1QfWNrS6HzEQJaP4tBA==) format("woff2"),url(data:application/font-woff;base64,d09GRgABAAAAAAHgAAoAAAAAAggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABUAAAABcAAABOBIQEIWNtYXAAAAFwAAAAJgAAACwADABzZ2x5ZgAAAaAAAAAUAAAAFAwBPQJoZWFkAAAA9AAAAC0AAAA2CHEB92hoZWEAAAEkAAAAFgAAACQMAQgDaG10eAAAAWgAAAAIAAAACAgAAABsb2NhAAABmAAAAAYAAAAGAAoAAG1heHAAAAE8AAAAEwAAACAABAACbmFtZQAAAbQAAAAeAAAAIAAjCF5wb3N0AAAB1AAAAAwAAAAgAAMAAHgBY2BkYABhb81vuvH8Nl8ZmFgYQOBCWvVrMP3VURxEczBAxBmYQAQAAFIIBgAAAHgBY2BkYGBhAAEOKAkUQQVMAAJKABkAAHgBY2BkYGBgAkIgjQ0AAAC+AAcAeAFjAIEUBkYGcoECgwILmAEiASBRAK4AAAAAAAgAAAB4AWNgYGBkYAZiBgYeBhYGBSDNAoQgvsP//xDy/0EwnwEATX4GfAAAAAAAAAAKAAAAAQAAAAAIAAQAAAEAADEBCAAEAHgBY2BgYGKQY2BmYGThZGAEshmgbCYw2wEABjMAigAAeAFjYGbACwAAfQAE) format("woff")}'));
                b.appendChild(a);
                ra = (new ka).load("@", 5E3).then(function() {
                    var c = new da("@")
                      , d = ["opentype", "truetype"];
                    u(c, "_fff_");
                    document.body.appendChild(c.g);
                    var e = c.g.offsetWidth;
                    200 <= e && d.unshift("woff");
                    300 == e && d.unshift("woff2");
                    b.removeChild(a);
                    document.body.removeChild(c.g);
                    return d
                }, function() {
                    return ["opentype", "truetype"]
                })
            }
            return ra
        }
        ;function ta(a) {
            for (var b = /\burl\(('|"|)([^'"]+?)\1\)( format\(('|"|)([^'"]+?)\4\))?/g, c, d = []; c = b.exec(a); )
                c[2] && d.push({
                    url: c[2],
                    format: c[5]
                });
            return d
        }
        ;function ua(a, b) {
            this.status = b.status;
            this.ok = 200 <= b.status && 300 > b.status || 0 === b.status;
            this.statusText = b.statusText;
            this.body = a
        }
        ua.prototype.arrayBuffer = function() {
            return Promise.resolve(this.body)
        }
        ;
        var va = !(window.XDomainRequest && !("responseType"in XMLHttpRequest.prototype));
        function wa(a) {
            console.log("fetchImpl");
            var b = {};
            return new Promise(function(c, d) {
                if (va) {
                    var e = new XMLHttpRequest;
                    e.onload = function() {
                        c(new ua(e.response,{
                            status: e.status,
                            statusText: e.statusText
                        }))
                    }
                    ;
                    e.onerror = function() {
                        d(new TypeError("Network request failed"))
                    }
                    ;
                    e.open("GET", a);
                    e.responseType = "arraybuffer";
                    b && Object.keys(b).forEach(function(f) {
                        e.setRequestHeader(f, b[f])
                    });
                    e.send(null)
                } else
                    e = new XDomainRequest,
                    e.open("GET", a.replace(/^http(s)?:/i, window.location.protocol)),
                    e.ontimeout = function() {
                        return !0
                    }
                    ,
                    e.onprogress = function() {
                        return !0
                    }
                    ,
                    e.onload = function() {
                        c(new ua(e.responseText,{
                            status: e.status,
                            statusText: e.statusText
                        }))
                    }
                    ,
                    e.onerror = function() {
                        d(new TypeError("Network request failed"))
                    }
                    ,
                    setTimeout(function() {
                        e.send(null)
                    }, 0)
            }
            )
        }
        ;function xa(a, b, c) {
            var d = this
              , e = c || {};
            this.source = b;
            this.m = null;
            this.g = [];
            this.promise = new Promise(function(f, g) {
                d.A = f;
                d.o = g
            }
            );
            this.u = "unloaded";
            this.i = null;
            Object.defineProperties(this, {
                family: {
                    get: function() {
                        return a
                    }
                },
                style: {
                    get: function() {
                        return e.style || "normal"
                    }
                },
                weight: {
                    get: function() {
                        return e.weight || "normal"
                    }
                },
                stretch: {
                    get: function() {
                        return e.stretch || "normal"
                    }
                },
                display: {
                    get: function() {
                        return e.display || "auto"
                    }
                },
                unicodeRange: {
                    get: function() {
                        return e.unicodeRange || "U+0-10FFFF"
                    }
                },
                variant: {
                    get: function() {
                        return e.variant || "normal"
                    }
                },
                featureSettings: {
                    get: function() {
                        return e.featureSettings || "normal"
                    }
                },
                status: {
                    get: function() {
                        return this.u
                    }
                },
                loaded: {
                    get: function() {
                        return this.promise
                    }
                }
            });
            "string" === typeof b ? this.g = ta(b) : (this.m = b,
            this.u = "loaded",
            this.A(d))
        }
        var y = null;
        function ya(a, b) {
            for (var c = null, d = 0; d < b.length; d++)
                for (var e = 0; e < a.g.length; e++)
                    if (b[d] === a.g[e].format && null === c) {
                        c = a.g[e].url;
                        break
                    }
            c || 0 === b.length || (c = a.g[0].url);
            return c
        }
        xa.prototype.load = function() {
            var a = this;
            "unloaded" === a.u && (a.u = "loading",
            sa().then(function(b) {
                (b = ya(a, b)) ? wa(b).then(function(c) {
                    if (c.ok)
                        return c.arrayBuffer();
                    throw c;
                }).then(function(c) {
                    a.m = c;
                    a.u = "loaded";
                    a.A(a)
                }).catch(function() {
                    a.u = "error";
                    a.o(a)
                }) : (a.u = "error",
                a.o(a))
            }).catch(function() {
                a.u = "error";
                a.o(a)
            }));
            return this.promise
        }
        ;
        var C = document.createElement("div");
        function za(a) {
            C.style.cssText = "font:" + a;
            if (C.style.fontFamily) {
                a: {
                    a = C.style.fontFamily;
                    for (var b = "", c = [], d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        if ("'" === e || '"' === e) {
                            b = d + 1;
                            do
                                if (b = a.indexOf(e, b) + 1,
                                !b) {
                                    a = null;
                                    break a
                                }
                            while ("\\" === a.charAt(b - 2));
                            c.push(a.slice(d + 1, b - 1));
                            d = b - 1;
                            b = ""
                        } else
                            "," === e ? (b = b.trim(),
                            "" !== b && (c.push(b),
                            b = "")) : b += e
                    }
                    b = b.trim();
                    "" !== b && c.push(b);
                    a = c
                }
                if (a)
                    return {
                        size: C.style.fontSize,
                        lineHeight: C.style.lineHeight || "normal",
                        style: C.style.fontStyle || "normal",
                        variant: C.style.fontVariant || "normal",
                        weight: C.style.fontWeight || "normal",
                        stretch: C.style.fontStretch || "normal",
                        family: a
                    }
            }
            return null
        }
        ;function D() {
            this.fonts = [];
            this.u = "loaded";
            Object.defineProperties(this, {
                status: {
                    get: function() {
                        return this.u
                    }
                },
                size: {
                    get: function() {
                        return this.fonts.length
                    }
                }
            })
        }
        D.prototype.add = function(a) {
            if (!this.has(a)) {
                y || (y = document.createElement("style"),
                document.head.appendChild(y));
                if ("loaded" === a.u) {
                    var b = new Uint8Array(a.m);
                    for (var c = "", d = 0; d < b.length; d++)
                        c += String.fromCharCode(b[d]);
                    b = "url(data:font/opentype;base64," + btoa(c) + ")"
                } else
                    b = a.source;
                y.sheet.insertRule('@font-face{font-family:"' + a.family + '";font-style:' + a.style + ";font-weight:" + a.weight + ";font-display:" + a.display + ";src:" + b + ";}", 0);
                a.i = y.sheet.cssRules[0];
                this.fonts.push(a)
            }
        }
        ;
        D.prototype["delete"] = function(a) {
            var b = this.fonts.indexOf(a);
            if (-1 !== b) {
                if (y && a.i)
                    for (var c = 0; c < y.sheet.cssRules.length; c++)
                        if (a.i === y.sheet.cssRules[c]) {
                            y.sheet.deleteRule(c);
                            a.i = null;
                            break
                        }
                this.fonts.splice(b, 1);
                return !0
            }
            return !1
        }
        ;
        D.prototype.clear = function() {
            this.fonts = []
        }
        ;
        D.prototype.has = function(a) {
            return -1 !== this.fonts.indexOf(a)
        }
        ;
        D.prototype.forEach = function(a) {
            var b = this;
            this.fonts.forEach(function(c, d) {
                a(c, d, b)
            })
        }
        ;
        function Aa(a, b) {
            function c(e) {
                return "bold" === e ? 700 : "normal" === e ? 400 : e
            }
            var d = za(b);
            return null === d ? null : a.fonts.filter(function(e) {
                for (var f = d.family, g = 0; g < f.length; g++)
                    if (e.family === f[g] && e.style === d.style && e.stretch === d.stretch && c(e.weight) === c(d.weight))
                        return !0;
                return !1
            })
        }
        D.prototype.load = function(a) {
            var b = this
              , c = Aa(this, a);
            return null === c ? Promise.reject([]) : c.length ? (b.u = "loading",
            Promise.all(c.map(function(d) {
                return d.load()
            })).then(function() {
                b.u = "loaded";
                return c
            }).catch(function() {
                b.u = "loaded";
                return c
            })) : Promise.resolve([])
        }
        ;
        D.prototype.check = function(a) {
            a = Aa(this, a);
            if (0 === a.length)
                return !1;
            for (var b = 0; b < a.length; b++)
                if ("loaded" !== a[b].status)
                    return !1;
            return !0
        }
        ;
        if (window.FontFace)
            E = window.FontFace,
            E.prototype.load = window.FontFace.prototype.load,
            F = document.fonts;
        else {
            var E = xa;
            E.prototype.load = xa.prototype.load;
            var F = new D
        }
        ;function G(a, b) {
            return (a & 65535) * b + (((a >>> 16) * b & 65535) << 16)
        }
        function Ba(a, b) {
            a = G(a & 4294967295, 3432918353);
            a = G(a << 15 | a >>> 17, 461845907);
            b = (b || 0) ^ a;
            b = G(b << 13 | b >>> 19, 5) + 3864292196;
            b ^= 4;
            b = G(b ^ b >>> 16, 2246822507);
            b = G(b ^ b >>> 13, 3266489909);
            return (b ^ b >>> 16) >>> 0
        }
        function Ca(a, b) {
            b = b || 0;
            var c, d = a.length % 4, e = a.length - d;
            for (c = 0; c < e; c += 4) {
                var f = (a.charCodeAt(c) & 4294967295) << 0 | (a.charCodeAt(c + 1) & 4294967295) << 8 | (a.charCodeAt(c + 2) & 4294967295) << 16 | (a.charCodeAt(c + 3) & 4294967295) << 24;
                f = G(f, 3432918353);
                f = f << 15 | f >>> 17;
                f = G(f, 461845907);
                b ^= f;
                b = b << 13 | b >>> 19;
                b = G(b, 5) + 3864292196
            }
            f = 0;
            switch (d) {
            case 3:
                f ^= (a.charCodeAt(c + 2) & 4294967295) << 16;
            case 2:
                f ^= (a.charCodeAt(c + 1) & 4294967295) << 8;
            case 1:
                f ^= (a.charCodeAt(c) & 4294967295) << 0,
                f = G(f, 3432918353),
                f = G(f << 15 | f >>> 17, 461845907),
                b ^= f
            }
            b ^= a.length;
            b = G(b ^ b >>> 16, 2246822507);
            b = G(b ^ b >>> 13, 3266489909);
            return (b ^ b >>> 16) >>> 0
        }
        ;function Da(a) {
            this.values = Array(Math.ceil(a / 32));
            this.size = a;
            for (a = 0; a < this.values.length; a++)
                this.values[a] = 0
        }
        Da.prototype.set = function(a) {
            if (Math.floor(a / 32 + 1) > this.values.length)
                throw Error("Index is out of bounds.");
            var b = Math.floor(a / 32);
            this.values[b] |= 1 << a - 32 * b
        }
        ;
        Da.prototype.has = function(a) {
            if (Math.floor(a / 32 + 1) > this.values.length)
                throw Error("Index is out of bounds.");
            var b = Math.floor(a / 32);
            return !!(this.values[b] & 1 << a - 32 * b)
        }
        ;
        function Ea(a, b) {
            this.size = a;
            this.g = b;
            this.data = new Da(a)
        }
        var H = [2449897292, 4218179547, 2675077685, 1031960064, 1478620578, 1386343184, 3194259988, 2656050674, 3012733295, 2193273665];
        Ea.prototype.add = function(a) {
            if ("string" !== typeof a && "number" !== typeof a)
                throw Error("Value should be a string or number.");
            for (var b = "number" === typeof a, c = 0; c < this.g; c++)
                this.data.set(b ? Ba(a, H[c]) % this.size : Ca(a, H[c]) % this.size)
        }
        ;
        Ea.prototype.has = function(a) {
            if ("string" !== typeof a && "number" !== typeof a)
                throw Error("Value should be a string or number.");
            for (var b = "number" === typeof a, c = 0; c < this.g; c++)
                if (!this.data.has(b ? Ba(a, H[c]) % this.size : Ca(a, H[c]) % this.size))
                    return !1;
            return !0
        }
        ;
        function Fa(a) {
            a = [a.size, a.g].concat(a.data.values);
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a[c];
                b += String.fromCharCode((d & 4278190080) >>> 24) + String.fromCharCode((d & 16711680) >>> 16) + String.fromCharCode((d & 65280) >>> 8) + String.fromCharCode((d & 255) >>> 0)
            }
            a = b;
            b = "";
            if (window.btoa)
                b = window.btoa(a);
            else {
                d = 0;
                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; a.charAt(d | 0) || (e = "=",
                d % 1); b += e.charAt(63 & f >> 8 - d % 1 * 8)) {
                    c = a.charCodeAt(d += .75);
                    if (255 < c)
                        throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    var f = f << 8 | c
                }
            }
            return b.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
        }
        ;function I(a, b, c, d) {
            this.unicode = a;
            this.features = b || [];
            this.g = c || null;
            this.i = d || null
        }
        I.prototype.get = function(a) {
            var b = Ga(this);
            var c = "";
            if (null !== this.g)
                for (var d = new Uint8Array(this.g.buffer,this.g.byteOffset,this.g.byteLength), e = 0; e < d.byteLength; e++)
                    0 !== d[e] && (c += String.fromCharCode(d[e]));
            c = c.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
            d = Ha(this);
            return "" !== c ? {
                format: a,
                unicode: b,
                gdyn: c,
                v: "3"
            } : {
                format: a,
                unicode: b,
                features: d,
                v: "3"
            }
        }
        ;
        function Ga(a) {
            if (a.unicode.length) {
                var b = Math.min(Math.ceil(Math.log(.01) * (a.unicode.length || 1) / Math.log(1 / Math.pow(2, Math.log(2)))), 9586)
                  , c = new Ea(b,Math.max(Math.min(Math.round(Math.log(2) * b / (a.unicode.length || 1)), H.length), 1));
                a.unicode.forEach(function(d) {
                    c.add(d)
                });
                return Fa(c)
            }
            return "AAAAAQAAAAEAAAAB"
        }
        function Ha(a) {
            return a.features.length ? a.features.map(function(b) {
                return b.trim()
            }).join(",") : "NONE"
        }
        ;function Ia() {
            this.keys = [];
            this.g = [];
            var a = 0, b = 2, c;
            a: for (; 64 > a; b++) {
                for (c = 2; c * c <= b; c++)
                    if (0 === b % c)
                        continue a;
                8 > a && (this.g[a] = Ja(Math.pow(b, .5)));
                this.keys[a] = Ja(Math.pow(b, 1 / 3));
                a++
            }
        }
        Ia.prototype.hash = function(a) {
            var b = this.keys.slice(0)
              , c = this.g.slice(0);
            a += String.fromCharCode(128);
            for (var d = Math.ceil((a.length / 4 + 2) / 16), e = Array(d), f = 0; f < d; f++) {
                e[f] = Array(16);
                for (var g = 0; 16 > g; g++)
                    e[f][g] = a.charCodeAt(64 * f + 4 * g) << 24 | a.charCodeAt(64 * f + 4 * g + 1) << 16 | a.charCodeAt(64 * f + 4 * g + 2) << 8 | a.charCodeAt(64 * f + 4 * g + 3)
            }
            e[d - 1][14] = 8 * (a.length - 1) / Math.pow(2, 32);
            e[d - 1][14] = Math.floor(e[d - 1][14]);
            e[d - 1][15] = 8 * (a.length - 1) & 4294967295;
            a = Array(64);
            for (f = 0; f < d; f++) {
                for (g = 0; 16 > g; g++)
                    a[g] = e[f][g];
                for (g = 16; 64 > g; g++) {
                    var h = a[g - 15];
                    var k = a[g - 2];
                    a[g] = (J(17, k) ^ J(19, k) ^ k >>> 10) + a[g - 7] + (J(7, h) ^ J(18, h) ^ h >>> 3) + a[g - 16] & 4294967295
                }
                h = c[0];
                k = c[1];
                var q = c[2];
                var V = c[3];
                var m = c[4];
                var r = c[5];
                var p = c[6];
                var t = c[7];
                for (g = 0; 64 > g; g++) {
                    var B = t + (J(6, m) ^ J(11, m) ^ J(25, m)) + (m & r ^ ~m & p) + b[g] + a[g]
                      , w = (J(2, h) ^ J(13, h) ^ J(22, h)) + (h & k ^ h & q ^ k & q);
                    t = p;
                    p = r;
                    r = m;
                    m = V + B & 4294967295;
                    V = q;
                    q = k;
                    k = h;
                    h = B + w & 4294967295
                }
                c[0] = c[0] + h & 4294967295;
                c[1] = c[1] + k & 4294967295;
                c[2] = c[2] + q & 4294967295;
                c[3] = c[3] + V & 4294967295;
                c[4] = c[4] + m & 4294967295;
                c[5] = c[5] + r & 4294967295;
                c[6] = c[6] + p & 4294967295;
                c[7] = c[7] + t & 4294967295
            }
            return K(c[0]) + K(c[1]) + K(c[2]) + K(c[3]) + K(c[4]) + K(c[5]) + K(c[6]) + K(c[7])
        }
        ;
        function J(a, b) {
            return b >>> a | b << 32 - a
        }
        function Ja(a) {
            return 4294967296 * (a - Math.floor(a)) | 0
        }
        function K(a) {
            for (var b = "", c, d = 7; 0 <= d; d--)
                c = a >>> 4 * d & 15,
                b += c.toString(16);
            return b
        }
        ;function Ka(a) {
            this.g = a
        }
        function L(a, b) {
            return a.g.replace(/\{([^\{\}]+)\}/g, function(c, d) {
                if ("?" == d.charAt(0)) {
                    c = d.slice(1).split(",");
                    d = [];
                    for (var e = 0; e < c.length; e++)
                        b.hasOwnProperty(c[e]) && d.push(c[e] + "=" + encodeURIComponent(b[c[e]]));
                    return d.length ? "?" + d.join("&") : ""
                }
                return b.hasOwnProperty(d) ? encodeURIComponent(b[d]) : ""
            })
        }
        ;var La = !(window.XDomainRequest && !("responseType"in XMLHttpRequest.prototype));
        function M(a, b) {
            return new Promise(function(c, d) {
                var e = b || {
                    method: "GET",
                    headers: {},
                    body: null
                };
                if (La) {
                    var f = new XMLHttpRequest;
                    f.onload = function() {
                        c({
                            body: f.response,
                            status: f.status,
                            statusText: f.statusText
                        })
                    }
                    ;
                    f.onerror = function() {
                        d(Error("Network request failed"))
                    }
                    ;
                    f.open(e.method, a, !0);
                    f.responseType = "arraybuffer";
                    e.headers && Object.keys(e.headers).forEach(function(g) {
                        f.setRequestHeader(g, e.headers[g])
                    });
                    f.send(e.body)
                } else
                    f = new XDomainRequest,
                    f.open(e.method, a.replace(/^http(s)?:/i, window.location.protocol)),
                    f.ontimeout = function() {
                        return !0
                    }
                    ,
                    f.onprogress = function() {
                        return !0
                    }
                    ,
                    f.onload = function() {
                        c({
                            body: null,
                            status: f.status,
                            statusText: f.statusText
                        })
                    }
                    ,
                    f.onerror = function() {
                        d(Error("Network request failed"))
                    }
                    ,
                    setTimeout(function() {
                        f.send(e.body)
                    }, 0)
            }
            )
        }
        ;function Ma(a, b, c) {
            this.unicode = a;
            this.features = b || [];
            this.g = c || null;
            this.i = null
        }
        var Na = {};
        Ma.prototype.create = function() {
            var a = this
              , b = Oa(a)
              , c = new Ka(window.Typekit.config.primer);
            Na[b] || (Na[b] = new Promise(function(d, e) {
                var f = L(c, {
                    primer: Oa(a)
                });
                M(f, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: Pa(a)
                }).then(function(g) {
                    200 === g.status ? d(b) : e('Failed to create primer "' + f + '": ' + g.status)
                }).catch(function(g) {
                    e(g)
                })
            }
            ));
            return Na[b]
        }
        ;
        function Qa(a) {
            var b = "";
            a = new Uint8Array(a.g.buffer,a.g.byteOffset,a.g.byteLength);
            for (var c = 0; c < a.byteLength; c++)
                b += String.fromCharCode(a[c]);
            return btoa(b)
        }
        function Ra(a) {
            return a.features.length ? a.features.map(function(b) {
                return b.trim()
            }).join(",") : "NONE"
        }
        function Pa(a) {
            var b = "version=1.0&unicode=" + encodeURIComponent(a.unicode.join(","));
            return b = a.g ? b + ("&dyna=" + encodeURIComponent(Qa(a))) : b + ("&features=" + encodeURIComponent(Ra(a)))
        }
        function Oa(a) {
            if (null === a.i) {
                var b = {
                    version: "1.0",
                    unicode: a.unicode.join(",")
                };
                a.g ? b.dyna = Qa(a) : b.features = Ra(a);
                a.i = (new Ia).hash(JSON.stringify(b))
            }
            return a.i
        }
        ;function Sa(a) {
            return a.map(function(b) {
                return "U+" + b.toString(16)
            }).join(",")
        }
        ;function N(a) {
            this.values = a || []
        }
        N.prototype.C = function() {
            for (var a = {}, b = 0; b < this.values.length; b++)
                a[this.values[b]] = this.values[b];
            return Object.keys(a).map(function(c) {
                return a[c]
            }).sort(function(c, d) {
                return c - d
            })
        }
        ;
        function Ta(a, b) {
            for (var c = {}, d = new N, e = 0; e < a.values.length; e++)
                c[a.values[e]] = !0;
            for (e = 0; e < b.values.length; e++)
                c[b.values[e]] || d.values.push(b.values[e]);
            return d
        }
        function Ua(a, b) {
            for (var c = {}, d = new N, e = 0; e < a.values.length; e++)
                c[a.values[e]] = !0;
            for (e = 0; e < b.values.length; e++)
                c[b.values[e]] && d.values.push(b.values[e]);
            return d
        }
        function O(a, b) {
            var c = new N;
            c.values = a.values.concat(b.values);
            return c
        }
        function P(a) {
            a = a.split(/\s*,\s*/);
            for (var b = [], c = 0; c < a.length; c++) {
                var d = /^(u\+([0-9a-f?]{1,6})(?:-([0-9a-f]{1,6}))?)$/i.exec(a[c]);
                if (d) {
                    if (-1 !== d[2].indexOf("?")) {
                        var e = parseInt(d[2].replace("?", "0"), 16);
                        d = parseInt(d[2].replace("?", "f"), 16)
                    } else
                        e = parseInt(d[2], 16),
                        d = d[3] ? parseInt(d[3], 16) : e;
                    if (e !== d)
                        for (; e <= d; e++)
                            b.push(e);
                    else
                        b.push(e)
                }
            }
            return new N(b)
        }
        ;function Q(a) {
            this.i = a;
            this.g = 0
        }
        Q.prototype.read = function(a, b) {
            var c = a.read(this.i, b || this.g);
            b || (this.g += a.B);
            return c
        }
        ;
        function Va(a, b, c) {
            for (var d = a.g, e = [], f = 0; f < c; f += 1)
                e.push(b.read(a.i, d)),
                d += b.B;
            a.g += b.B * c;
            return e
        }
        ;var Wa = {
            B: 1,
            read: function(a, b) {
                return a.getUint8(b || 0)
            }
        }
          , R = {
            B: 2,
            read: function(a, b) {
                return a.getUint16(b || 0)
            }
        }
          , S = {
            B: 4,
            read: function(a, b) {
                return a.getUint32(b || 0)
            }
        }
          , Xa = {
            B: 4,
            read: function(a, b) {
                return a.getUint32(b || 0)
            }
        };
        function T(a) {
            return 0 === a % 4 ? a : a + (4 - a % 4)
        }
        function U(a, b) {
            a = new Uint8Array(a.buffer,a.byteOffset,a.byteLength);
            (new Uint8Array(b.buffer,b.byteOffset,b.byteLength)).set(a, 0)
        }
        function W(a) {
            var b = 0, c;
            for (c in a)
                b += a[c].B;
            return {
                B: b,
                read: function(d, e) {
                    e = e || 0;
                    var f = {}, g;
                    for (g in a)
                        f[g] = a[g].read(d, e),
                        e += a[g].B;
                    return f
                }
            }
        }
        function Ya(a) {
            for (var b = new Uint32Array(4), c = 0; c < a.byteLength; c += 4)
                b[0] += a.getUint32(c);
            return b[0]
        }
        ;var Za = W({
            type: S,
            O: R,
            W: R,
            T: R,
            V: R
        })
          , X = W({
            tag: Xa,
            R: S,
            offset: S,
            length: S
        });
        function $a(a) {
            this.arrayBuffer = a;
            this.A = new Q(new DataView(a));
            this.o = [];
            this.m = [];
            this.i = [];
            this.g = {};
            a = this.A.read(Za);
            if (1330926671 == a.type || 65536 == a.type) {
                a = Va(this.A, X, a.O);
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    this.i.push(c.tag);
                    this.g[c.tag] = new DataView(this.arrayBuffer,c.offset,T(c.length));
                    this.o[b] = c.length;
                    this.m[b] = c.offset
                }
            } else
                throw Error("Font data is invalid");
        }
        function ab(a, b) {
            for (var c = [], d = Za.B + X.B * a.i.length, e = 0; e < a.i.length; e++) {
                var f = a.i[e]
                  , g = b.i[f] || null;
                if (null !== g) {
                    f = T(g.length) - T(a.o[e]);
                    for (var h = 0; h < a.i.length; h++)
                        e !== h && a.m[h] > a.m[e] && (a.m[h] += f);
                    a.o[e] = g.length
                }
                d += T(a.o[e])
            }
            d = new ArrayBuffer(d);
            U(new DataView(a.arrayBuffer,0,Za.B), new DataView(d,0,Za.B));
            for (e = 0; e < a.i.length; e++) {
                f = a.i[e];
                g = b.i[f] || null;
                if (null !== g)
                    for (1668112752 !== f && 1195661646 !== f && U(a.g[f], new DataView(d,a.m[e],T(a.o[e]))),
                    a.g[f] = new DataView(d,a.m[e],T(a.o[e])),
                    g = g.L,
                    h = 0; h < g.length; h++)
                        g[h].apply(a.g[f]);
                else
                    U(a.g[f], new DataView(d,a.m[e],T(a.o[e]))),
                    a.g[f] = new DataView(d,a.m[e],T(a.o[e]));
                1751474532 === f && a.g[f].setUint32(8, 0);
                1330851634 === f && a.g[f].setUint16(8, 0);
                c[e] = Ya(a.g[f])
            }
            b = new DataView(d,Za.B,X.B * a.i.length);
            for (e = 0; e < a.i.length; e++)
                f = a.i[e],
                b.setUint32(e * X.B, f),
                b.setUint32(e * X.B + 4, c[e]),
                b.setUint32(e * X.B + 8, a.m[e]),
                b.setUint32(e * X.B + 12, a.o[e]);
            c = 2981146554 - Ya(new DataView(d));
            a.g[1751474532].setUint32(8, c);
            a.arrayBuffer = d
        }
        ;function bb(a, b) {
            this.tag = a;
            this.length = b;
            this.L = []
        }
        ;function cb(a, b, c) {
            this.type = a;
            this.offset = b;
            this.data = c
        }
        var db = W({
            offset: S,
            K: S,
            P: S
        });
        cb.prototype.apply = function(a) {
            if (1 === this.type || 2 === this.type)
                U(this.data, new DataView(a.buffer,a.byteOffset + this.offset,this.data.byteLength));
            else if (3 === this.type) {
                var b = this.data.getUint32(0)
                  , c = new DataView(a.buffer,a.byteOffset + this.offset,a.byteLength - this.offset)
                  , d = new DataView(a.buffer,a.byteOffset + this.offset - b,a.byteLength - this.offset);
                U(c, d)
            } else if (4 === this.type) {
                c = new Q(this.data);
                var e = Va(c, db, this.data.byteLength / db.B);
                for (b = 0; b < e.length; b++)
                    c = new DataView(a.buffer,a.byteOffset + e[b].offset,e[b].K),
                    d = new DataView(a.buffer,a.byteOffset + e[b].offset + e[b].P,e[b].K),
                    U(c, d)
            } else if (5 === this.type)
                for (c = new Q(this.data); c.g < this.data.byteLength; )
                    for (d = c.read(R),
                    e = c.read(R),
                    b = 0; b < e; b++)
                        for (var f = c.read(S), g = c.read(S); f < g; )
                            a.setUint16(f, a.getUint16(f) + d),
                            f += 2
        }
        ;
        function eb(a) {
            this.g = new Q(new DataView(a));
            this.i = {};
            this.m = [];
            this.status = this.g.read(Wa);
            if (0 === this.status) {
                this.g.g = 10;
                for (var b = Va(this.g, fb, this.g.read(R)), c = 0; c < b.length; c++) {
                    var d = new bb(b[c].tag,b[c].length);
                    this.m.push(d);
                    this.i[b[c].tag] = d
                }
                b = this.g.read(R);
                for (c = 0; c < b; c++) {
                    var e = this.g.read(gb);
                    d = this.i[e.tag];
                    for (var f = 0; f < e.N; f++) {
                        var g = this.g.read(hb)
                          , h = new DataView(a,this.g.g,g.length);
                        d.L.push(new cb(g.type,g.offset,h));
                        this.g.g += g.length
                    }
                }
            }
        }
        function ib() {
            var a = new Uint8Array(new ArrayBuffer(1));
            a[0] = 1;
            return new eb(a.buffer)
        }
        var fb = W({
            tag: Xa,
            S,
            offset: S,
            length: S
        })
          , gb = W({
            tag: Xa,
            X: Wa,
            U: S,
            N: R
        })
          , hb = W({
            type: Wa,
            offset: S,
            length: S
        });
        function jb(a, b) {
            return new Promise(function(c, d) {
                var e = L(a, b.get("m"));
                if (e.length <= kb)
                    M(e).then(function(k) {
                        200 === k.status ? c(k.body) : d(Error('Invalid fetch response: "' + e + '": ' + k.status))
                    }).catch(function() {
                        d(Error('Failed to fetch: "' + e + '"'))
                    });
                else {
                    var f = new Ma(b.unicode,b.features,b.i)
                      , g = Oa(f)
                      , h = L(a, {
                        format: "m",
                        primer: g
                    });
                    M(h).then(function(k) {
                        200 === k.status ? c(k.body) : 404 === k.status ? f.create().then(function() {
                            M(h).then(function(q) {
                                200 === q.status ? c(q.body) : d(Error('Invalid fetch response after creating primer "' + h + '": ' + q.status))
                            }).catch(function() {
                                d(Error('Failed to fetch: "' + h + '"'))
                            })
                        }).catch(function() {
                            d(Error('Failed to create primer "' + g + '"'))
                        }) : d(Error('Invalid fetch response: "' + h + '": ' + k.status))
                    }).catch(function() {
                        d(Error('Failed to fetch: "' + h + '"'))
                    })
                }
            }
            )
        }
        var kb = 4096;
        function lb(a) {
            this.i = null;
            this.D = a;
            this.data = null;
            this.o = Promise.resolve();
            this.A = [];
            this.g = null
        }
        lb.prototype.load = function() {
            var a = this.D
              , b = this;
            b.i || (a.u = "loading",
            b.i = new Promise(function(c, d) {
                var e = new I(a.unicode.C(),a.features.C());
                jb(a.url, e).then(function(f) {
                    b.data = new $a(f);
                    ab(b.data, ib());
                    b.g = new E(a.family,(new DataView(b.data.arrayBuffer)).buffer,Y(a));
                    b.g.load().then(function() {
                        a.u = "loaded";
                        c(a)
                    }).catch(function(g) {
                        a.u = "error";
                        d(g)
                    })
                }).catch(function(f) {
                    a.u = "error";
                    d(f)
                })
            }
            ));
            return b.i
        }
        ;
        lb.prototype.m = function() {
            return this.g
        }
        ;
        lb.prototype.H = function(a) {
            var b = this.D
              , c = this;
            c.A.push(a);
            c.o = c.o.then(function() {
                var d = P(c.A.join(","));
                c.A = [];
                var e = Ta(b.unicode, d);
                if (0 === e.values.length)
                    return Promise.resolve();
                b.unicode = O(b.unicode, e);
                return "unloaded" === b.u ? Promise.resolve() : c.load().then(function() {
                    var f = c.data.g[1195661646]
                      , g = c.data.g[1146703425];
                    if (!f || !g)
                        return Promise.reject(Error('Font "' + b.family + '" does not contain DYNA/GDYN table.'));
                    f = new I(e.C(),null,f,g);
                    return jb(b.url, f).then(function(h) {
                        h = new eb(h);
                        return 0 === h.status ? (ab(c.data, h),
                        c.g = new E(b.family,(new DataView(c.data.arrayBuffer)).buffer,Y(b)),
                        F.add(c.g),
                        c.g.load()) : Promise.resolve()
                    })
                })
            });
            return c.o
        }
        ;
        function mb(a) {
            if (6 < a.length) {
                var b = new DataView(a.buffer)
                  , c = b.getUint8(0)
                  , d = b.getUint8(1);
                b = b.getUint32(2);
                if (1 === d) {
                    a = new Uint8Array(a.buffer,6);
                    a = new DataView(a.buffer,a.byteOffset,a.byteLength);
                    d = [];
                    for (var e = 0; e < a.byteLength; ) {
                        var f = a.getUint16(e);
                        if (0 <= f && 55295 >= f || 57344 <= f && 65535 >= f)
                            d.push(f),
                            e += 2;
                        else if (55296 === (f & 63488))
                            f = ((f & 1023) << 10) + (a.getUint16(e + 2) & 1023) + 65536,
                            d.push(f),
                            e += 4;
                        else
                            throw Error("Failed to decode: " + f);
                    }
                    if (d.length !== b)
                        throw Error("Number of codepoints in header does not match data.");
                    return {
                        version: c,
                        I: d
                    }
                }
                throw Error("Invalid encoding type: " + d);
            }
            throw Error("Invalid ordering data.");
        }
        ;function nb(a) {
            return Math.log2 ? Math.log2(a) : Math.log(a) / Math.LN2
        }
        function ob(a) {
            this.size = 64;
            this.m = a;
            a = Math.ceil(a.length / 64);
            a--;
            a |= a >> 1;
            a |= a >> 2;
            a |= a >> 4;
            a |= a >> 8;
            a |= a >> 16;
            this.g = ++a;
            this.A = 1 === this.g ? 0 : Math.floor(nb(this.g + 1));
            this.i = Math.pow(2, this.A + 1) - 1;
            this.o = {};
            for (a = 0; a < this.g; a++)
                for (var b = a * this.size, c = Math.min(this.m.length, b + this.size); b < c; b++)
                    this.o[this.m[b]] = a + (this.i - this.g)
        }
        function pb(a, b) {
            for (var c = {}, d = 0; d < b.length; d++) {
                var e = b[d];
                a.o.hasOwnProperty(e) && (e = a.o[e],
                c[e] = e)
            }
            a = [];
            for (var f in c)
                a.push(c[f]);
            return a.sort(function(g, h) {
                return g - h
            })
        }
        function qb(a, b) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = b[d];
                if (e < a.i) {
                    var f = Math.pow(2, Math.floor(nb(e + 1)))
                      , g = a.g / f * a.size;
                    e = e - f + 1;
                    f = e * g;
                    c = c.concat(a.m.slice(f, f + Math.max(0, Math.min(a.m.length, f + g) - e * g)))
                }
            }
            return c.sort(function(h, k) {
                return h - k
            })
        }
        function rb(a, b, c) {
            c = c || .6;
            var d = pb(a, b);
            b = [];
            for (var e = 0; e < a.i; e++)
                b[e] = e < a.i - a.g ? null : -1 !== d.indexOf(e) ? 1 : 0;
            for (d = a.A; 0 < d; d--) {
                var f = Math.pow(2, d);
                for (e = 0; e < f; e++) {
                    var g = Math.pow(2, d) + e - 1
                      , h = Math.floor((g - 1) / 2);
                    b[h] = null === b[h] ? b[g] : b[h] + b[g]
                }
            }
            e = [];
            for (f = [0]; f.length; )
                g = f.pop(),
                g >= a.i || (d = Math.floor(nb(g + 1)),
                b[g] / (a.g / Math.pow(2, d)) >= c ? e.push(g) : (f.push(2 * g + 1),
                f.push(2 * g + 2)));
            return e.sort(function(k, q) {
                return k - q
            })
        }
        ;function sb(a, b) {
            this.o = a;
            this.A = null;
            this.D = Promise.resolve(a);
            this.G = [];
            this.g = null;
            a = mb(new Uint8Array(atob(b).split("").map(function(c) {
                return c.charCodeAt(0)
            })));
            this.J = a.I;
            this.M = a.version;
            this.I = new N(this.J);
            this.version = a.version;
            this.i = new ob(this.J);
            this.data = null
        }
        sb.prototype.m = function() {
            return this.g
        }
        ;
        sb.prototype.load = function() {
            var a = this.o
              , b = this;
            this.A || (a.u = "loading",
            this.A = new Promise(function(c, d) {
                var e = a.unicode.C()
                  , f = [];
                f = e.length ? rb(b.i, e) : [0];
                e = qb(b.i, f);
                a.unicode = O(a.unicode, new N(e));
                tb(b, f).then(function(g) {
                    b.data = new $a(g);
                    ab(b.data, ib());
                    b.g = new E(a.family,(new DataView(b.data.arrayBuffer)).buffer,Y(a));
                    b.g.load().then(function() {
                        a.u = "loaded";
                        c(a)
                    }).catch(function(h) {
                        a.u = "error";
                        d(h)
                    })
                }).catch(function(g) {
                    a.u = "error";
                    d(g)
                })
            }
            ));
            return this.A
        }
        ;
        sb.prototype.H = function(a) {
            var b = this
              , c = this.o;
            b.G.push(a);
            b.D = b.D.then(function() {
                var d = P(b.G.join(","));
                b.G = [];
                d = Ua(b.I, d);
                d = Ta(c.unicode, d);
                if (0 === d.values.length)
                    return Promise.resolve(c);
                var e = rb(b.i, c.unicode.C(), 1)
                  , f = rb(b.i, d.C());
                d = qb(b.i, f);
                c.unicode = O(c.unicode, new N(d));
                return "unloaded" === c.u ? Promise.resolve(c) : b.load().then(function() {
                    return tb(b, f, e).then(function(g) {
                        g = new eb(g);
                        return 0 === g.status ? (ab(b.data, g),
                        b.g = new E(c.family,(new DataView(b.data.arrayBuffer)).buffer,Y(c)),
                        F.add(b.g),
                        b.g.load()) : Promise.resolve()
                    })
                })
            });
            return b.D
        }
        ;
        function tb(a, b, c) {
            var d = a.o;
            return new Promise(function(e, f) {
                var g = {
                    format: "m",
                    features: ub(d),
                    chunks: b.join("."),
                    order: a.M,
                    v: "4"
                };
                c && (g.state = c.join("."));
                var h = L(d.url, g);
                M(h).then(function(k) {
                    200 === k.status ? e(k.body) : f(Error('Invalid fetch response: "' + h + '": ' + k.status))
                }).catch(function() {
                    f(Error('Failed to fetch: "' + h + '"'))
                })
            }
            )
        }
        ;function vb(a) {
            a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
            var b = [];
            do {
                var c = a.currentNode;
                if (c && "SCRIPT" !== c.nodeName && "STYLE" !== c.nodeName && "NOSCRIPT" !== c.nodeName && "TEMPLATE" !== c.nodeName && "LINK" !== c.nodeName && "TITLE" !== c.nodeName) {
                    c.shadowRoot && (b = b.concat(vb(c.shadowRoot)));
                    for (var d = c.childNodes, e = 0; e < d.length; e++)
                        d[e].nodeType !== Node.TEXT_NODE || /^\s*$/.test(d[e].nodeValue) || b.push(d[e].nodeValue);
                    "INPUT" === c.nodeName && "hidden" !== c.type && "password" !== c.type && b.push(c.value);
                    "TEXTAREA" === c.nodeName && b.push(c.value)
                }
            } while (a.nextNode());
            return b
        }
        function wb(a) {
            a = vb(a).join("");
            for (var b = new N, c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                if (55296 === (d & 63488) && c < a.length) {
                    var e = a.charCodeAt(c + 1);
                    56320 === (e & 64512) ? b.values.push(((d & 1023) << 10) + (e & 1023) + 65536) : b.values.push(d);
                    c++
                } else
                    b.values.push(d)
            }
            return b.C()
        }
        ;function xb(a, b) {
            this.o = a;
            this.A = b;
            this.i = null;
            this.m = [];
            var c = this;
            yb && (this.i = new MutationObserver(function(d) {
                for (var e = [], f = 0; f < d.length; f++)
                    if (d[f].addedNodes.length || "characterData" === d[f].type || "attributes" === d[f].type) {
                        var g = d[f].target;
                        3 === g.nodeType && (g = g.parentNode);
                        g && (e.push(g),
                        g.shadowRoot && zb(c, g.shadowRoot))
                    }
                e.length && b(e)
            }
            ))
        }
        var yb = !!window.MutationObserver;
        xb.prototype.g = function(a) {
            a.target && (a = a.target,
            3 === a.nodeType && (a = a.parentNode),
            this.A([a]))
        }
        ;
        function Ab(a) {
            zb(a, a.o)
        }
        function Bb(a, b) {
            b = document.createTreeWalker(b, NodeFilter.SHOW_ELEMENT, null, !1);
            var c = new Set;
            do {
                var d = b.currentNode;
                d.shadowRoot && (c.add(d.shadowRoot),
                Bb(a, d.shadowRoot).forEach(function(e) {
                    c.add(e)
                }))
            } while (b.nextNode());
            return c
        }
        function zb(a, b) {
            Cb(a, b);
            Bb(a, b).forEach(function(c) {
                Cb(a, c)
            })
        }
        function Cb(a, b) {
            a.m.includes(b) || (yb ? a.i.observe(b, {
                attributes: !0,
                characterData: !0,
                subtree: !0,
                childList: !0
            }) : (b.addEventListener("DOMAttrModified", a.g.bind(a), !1),
            b.addEventListener("DOMNodeInserted", a.g.bind(a), !1),
            b.addEventListener("DOMCharacterDataModified", a.g.bind(a), !1)),
            a.m.push(b))
        }
        ;function Db(a) {
            var b = document.body
              , c = this;
            this.cache = {};
            this.g = new xb(b,function(d) {
                var e = [];
                d.forEach(function(f) {
                    wb(f).forEach(function(g) {
                        c.cache[g] || (e.push(g),
                        c.cache[g] = !0)
                    })
                });
                e.length && a(e)
            }
            )
        }
        ;function Eb(a) {
            this.i = a || {};
            this.g = document.documentElement
        }
        Eb.prototype.inactive = function() {
            aa(this.g, "wf-loading");
            n(this.g, "wf-inactive");
            Z(this, "inactive")
        }
        ;
        Eb.prototype.active = function() {
            aa(this.g, "wf-loading");
            n(this.g, "wf-active");
            Z(this, "active")
        }
        ;
        Eb.prototype.loading = function() {
            n(this.g, "wf-loading");
            Z(this, "loading")
        }
        ;
        function Fb(a, b) {
            aa(a.g, Gb(b, "loading"));
            n(a.g, Gb(b, "inactive"));
            Z(a, "fontinactive", b)
        }
        function Hb(a, b) {
            n(a.g, Gb(b, "loading"));
            Z(a, "fontloading", b)
        }
        function Gb(a, b) {
            return "wf-" + a.family + "-" + Ib(a) + "-" + b
        }
        function Z(a, b, c) {
            if (a.i[b])
                try {
                    if (c)
                        a.i[b](c.family, Ib(c));
                    else
                        a.i[b]()
                } catch (d) {
                    console.error('Typekit: Error in "' + b + '" callback', d)
                }
        }
        ;function Jb(a) {
            a = (a || "").split(/\s*,\s*/);
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = /^"([\u0020-\u007e]{1,4})"(?:\s+(\d+|on|off))?$/i.exec(a[c]);
                d && (b[d[1]] = d[2] ? parseInt(d[2].replace("on", "1").replace("off", "0"), 10) : 1)
            }
            return b
        }
        ;function Kb(a) {
            this.values = a || {}
        }
        Kb.prototype.C = function() {
            var a = this
              , b = [];
            Object.keys(this.values).forEach(function(c) {
                0 !== a.values[c] && b.push(c)
            });
            return b
        }
        ;
        function Lb(a) {
            a = (a || "").split(/\s*,\s*/);
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = /^([\u0020-\u007e]{1,4})$/i.exec(a[c]);
                d && (b[d[1]] = 1)
            }
            return new Kb(b)
        }
        ;function Mb(a) {
            this.i = a;
            this.o = null;
            this.A = Promise.resolve(a);
            this.D = [];
            var b = new I(a.unicode.C(),a.features.C());
            this.g = new E(a.family,Nb(this, b),Y(a))
        }
        function Nb(a, b) {
            a = a.i;
            var c = b.get("l")
              , d = b.get("d");
            b = b.get("m");
            return "url(" + L(a.url, c) + ') format("woff2"),url(' + L(a.url, d) + ') format("woff"),url(' + L(a.url, b) + ') format("opentype")'
        }
        Mb.prototype.m = function() {
            return this.g
        }
        ;
        Mb.prototype.load = function() {
            var a = this.i
              , b = this;
            this.o || (a.u = "loading",
            this.o = new Promise(function(c, d) {
                b.g.load().then(function() {
                    a.u = "loaded";
                    c(a)
                }).catch(function(e) {
                    a.u = "error";
                    d(e)
                })
            }
            ));
            return this.o
        }
        ;
        Mb.prototype.H = function(a) {
            var b = this
              , c = this.i;
            b.D.push(a);
            b.A = b.A.then(function() {
                var d = P(b.D.join(","));
                b.D = [];
                d = Ta(c.unicode, d);
                if (0 === d.values.length)
                    return Promise.resolve(c);
                c.unicode = O(c.unicode, d);
                return "unloaded" === c.u ? Promise.resolve(c) : b.load().then(function() {
                    var e = new I(c.unicode.C(),c.features.C());
                    b.g = new E(c.family,Nb(b, e),Y(c));
                    F.add(b.g);
                    return b.g.load().then(function() {
                        return c
                    })
                })
            });
            return b.A
        }
        ;
        var Ob = !!window.ArrayBuffer;
        function Pb(a, b, c) {
            var d = c || {};
            this.url = new Ka(b);
            this.unicode = P(d.unicodeRange || d.unicode || "");
            this.features = new Kb(Jb(d.featureSettings || ""));
            d.features && (this.features = Lb(d.features));
            delete d.featureSettings;
            this.u = "unloaded";
            Object.defineProperties(this, {
                family: {
                    get: function() {
                        return a.replace(/['"]/g, "")
                    }
                },
                style: {
                    get: function() {
                        return d.style || "normal"
                    }
                },
                weight: {
                    get: function() {
                        return d.weight || "normal"
                    }
                },
                stretch: {
                    get: function() {
                        return d.stretch || "normal"
                    }
                },
                display: {
                    get: function() {
                        return d.display || "auto"
                    }
                },
                unicodeRange: {
                    get: function() {
                        var e = this.unicode.C();
                        return e.length ? Sa(e) : "U+0-10ffff"
                    }
                },
                featureSettings: {
                    get: function() {
                        var e = this.features.C();
                        return e.length ? e.join(",") : "normal"
                    }
                },
                status: {
                    get: function() {
                        return this.u
                    }
                },
                dynamic: {
                    get: function() {
                        return d.dynamic || !1
                    }
                },
                variable: {
                    get: function() {
                        return d.variable || !1
                    }
                }
            });
            b = null;
            Ob && this.dynamic ? d.order ? b = new sb(this,d.order) : b = new lb(this) : b = new Mb(this);
            this.g = b
        }
        function Y(a) {
            return {
                style: a.style,
                weight: a.weight,
                stretch: a.stretch,
                unicodeRange: a.unicodeRange,
                display: a.display
            }
        }
        function Ib(a) {
            var b = a.weight.toString();
            return a.style[0] + ("b" === b[0] ? "7" : "n" === b[0] ? "4" : b[0])
        }
        function ub(a) {
            a = a.features.C();
            return a.length ? a.map(function(b) {
                return b.trim()
            }).join(",") : "NONE"
        }
        Pb.prototype.load = function() {
            return this.g.load()
        }
        ;
        Pb.prototype.update = function(a) {
            return this.g.H(a)
        }
        ;
        function Qb() {
            this.fonts = [];
            Object.defineProperties(this, {
                status: {
                    get: function() {
                        for (var a = 0; a < this.fonts.length; a++)
                            if ("loading" === this.fonts[a].status)
                                return "loading";
                        return "loaded"
                    }
                },
                size: {
                    get: function() {
                        return this.fonts.length
                    }
                }
            })
        }
        Qb.prototype.has = function(a) {
            return -1 !== this.fonts.indexOf(a)
        }
        ;
        Qb.prototype.add = function(a) {
            if (!this.has(a)) {
                var b = a.g.m();
                b && F.add(b);
                this.fonts.push(a)
            }
            return this
        }
        ;
        Qb.prototype["delete"] = function(a) {
            var b = this.fonts.indexOf(a);
            return -1 !== b && (this.fonts.splice(b, 1),
            a = a.g.m()) ? F.delete(a) : !1
        }
        ;
        Qb.prototype.forEach = function(a) {
            var b = this;
            this.fonts.forEach(function(c, d) {
                a(c, d, b)
            })
        }
        ;
        function Rb(a) {
            this.url = new Ka(a.ping);
            this.A = a.p;
            this.o = a.h;
            this.i = a.a;
            this.D = a.t;
            this.version = a.j;
            this.g = window.location.hostname;
            this.m = a.l || ""
        }
        function Sb(a, b) {
            b.length && M(L(a.url, {
                s: a.A,
                k: a.D,
                ht: a.o,
                h: a.g,
                f: b.join("."),
                a: a.i,
                js: a.version,
                app: a.m,
                e: "js",
                _: Date.now()
            }))
        }
        ;function Tb() {
            this.data = new N;
            this.g = P("U+20-7E")
        }
        Tb.prototype.set = function(a) {
            this.data = O(this.data, a)
        }
        ;
        Tb.prototype.get = function() {
            return O(this.g, this.data)
        }
        ;
        function Ub() {
            var a = config;
            this.F = [];
            this.fonts = new Qb;
            this.cache = new Tb;
            this.ping = new Rb(a);
            this.g = a.c;
            a.f && (a.f.forEach(function(b) {
                this.F.push(new Pb(b.family,b.source,b.descriptors))
            }, this),
            a.ping && Sb(this.ping, a.f.map(function(b) {
                return b.id
            })))
        }
        function Vb(a) {
            a.F.forEach(function(b) {
                b.dynamic && b.update(Sa(a.cache.get().C()))
            })
        }
        function Wb(a) {
            if (a.g && a.g.length) {
                for (var b = document.createElement("style"), c = "", d = 0; d < a.g.length; d += 2)
                    c += a.g[d] + "{font-family:" + a.g[d + 1] + ";}";
                b.textContent = c;
                document.head.appendChild(b)
            }
        }
        Ub.prototype.load = function(a) {
            var b = this
              , c = new Eb(a);
            c.loading();
            ca(function() {
                b.cache.set(new N(wb(document.body)));
                Ab((new Db(function(d) {
                    b.cache.set(new N(d));
                    Vb(b)
                }
                )).g);
                Promise.all(b.F.map(function(d) {
                    Hb(c, d);
                    return d.dynamic ? d.update(Sa(b.cache.get().C())).then(function() {
                        return d.load()
                    }).catch(function(e) {
                        Fb(c, d);
                        throw e;
                    }) : d.load().catch(function(e) {
                        Fb(c, d);
                        throw e;
                    })
                })).then(function() {
                    b.F.map(function(d) {
                        aa(c.g, Gb(d, "loading"));
                        n(c.g, Gb(d, "active"));
                        Z(c, "fontactive", d);
                        b.fonts.add(d)
                    });
                    c.active()
                }).catch(function() {
                    c.inactive()
                })
            });
            Wb(b)
        }
        ;
        var Xb = new Ub;
        window.Typekit = {};
        window.Typekit.config = config;
        window.Typekit.load = Xb.load.bind(Xb);
        window.Typekit.fonts = Xb.fonts;
        window.Typekit.kit = Xb.F;
        window.Typekit.Font = function(a, b, c) {
            var d = window.Typekit.user
              , e = window.Typekit.token
              , f = c || {}
              , g = (f.style || "normal").toString();
            f = (f.weight || "normal").toString();
            /^(normal|italic|oblique)$/.test(g) || (g = "normal");
            /^(([1-9]00)|normal|bold)$/.test(f) || (f = "400");
            g = g[0] + ("b" === f[0] ? "7" : "n" === f[0] ? "4" : f[0]);
            b = config.preview.replace("{user}", encodeURIComponent(d)).replace("{font_alias}", encodeURIComponent(b)).replace("{fvd}", encodeURIComponent(g)) + "&token=" + encodeURIComponent(e);
            return new Pb(a,b,c)
        }
        ;
    }());
}({
    "a": "93678648",
    "h": "tk",
    "t": "osb6ddv",
    "p": 1,
    "j": "1.9.3",
    "c": [".tk-dnp-shuei-gothic-gin-std", "\"dnp-shuei-gothic-gin-std\",sans-serif", ".tk-neue-haas-grotesk-display", "\"neue-haas-grotesk-display\",sans-serif", ".tk-neue-haas-grotesk-text", "\"neue-haas-grotesk-text\",sans-serif"],
    "l": "typekit",
    "type": "dynamic",
    "preview": "https://use.typekit.net/pf/{user}/{font_alias}/{fvd}/{format}{?subset_id,primer,token,unicode,features,gdyn,v,chunks,state,order}",
    "ping": "https://p.typekit.net/p.gif{?s,k,ht,h,f,a,js,app,e,_}",
    "primer": "https://primer.typekit.net/primer/{primer}",
    "f": [{
        "source": "https://use.typekit.net/af/b00c99/00000000000000007735aae5/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 35681,
        "dynamic": true,
        "family": "dnp-shuei-gothic-gin-std",
        "descriptors": {
            "display": "auto",
            "featureSettings": "\"ALL \"",
            "subset": "",
            "order": "AAEAACBBAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF9OADACAKkAIHUoMAEwbjCkZeUwrzD8MPNOujDITgpOLVQIMLkwwzBZMFcwZzCSMOowizBmMOkwRFuaMEwA4DDXZbAwfk7lML8wbzC3MEswazCiZbkw6zBqMNUwXzDsMEowjDBVME9OCzBoMLAwZDBbUWVPGlVPWDSJi4mBT38wVGcsMOAwTTD7MOEwrTCJ/wgw7f8JMIow0DCrWSdSKTDJAKAwszCIMIIw4zC1doQwYDBCT1xRaDDAMFMwuDBIMI8wUTC7ZkKQeDCBMAxRbI2FMN1SBjANU+9nADB/fQQwk2b0UfpiEDBGMGP/AWcIgeowx/8flZMw3pDoMF1STTBhMMtUDDDnYMWITGzVdntlmXUfeT6ABVKgWDEwxnJ5MIR0BnEhMKZUwTBplYt27mEPICZbUDDWgP1S1f8aMNFO1lGFVt5lhzDTZjYw5ZAaXnQwqFThMHNT1iAUZDowqU6GixuJj1+MMKogHWshdx8w2jCjihhOKjBYIBxj0ohoANeM6k4Nii11O2cfMN9oAwDnX8VnCVkaieMgGTC6UAua2FvnMLZ6y5V3MMF35ZZQl2IAu2nYVzAweGBpAOpbtpHRUxYA8U6LXmKKFwCuXw9fFQAKmqhiS4ECW1RbomAqYkB+ajCniaeTS2fRfSJPtoYaUEOPrnXwj+ZVRl/DAKIvmGpfYCeWdSATMOJPU2P1ICKZ34qNbnJsF4rrfbgkay90gzlo153mf6FUDS+iYSh1SyJhUMJS+IStVBFZfX5aL1cDw4qCeeNOynPAkcAA6XcmT5KRGTI1ZaEhKy+caZtOxmTvUUiQS5bGY9ZjepAhMBCM+iSunyx7M40QT/6FH4b4nrR/X2GYaW0wWlKbMNwweVwPAOMhIjDKeLoA/E/dAOEwdlu5IBggOU/hXFMA030wMAAAxACjAKVSJZhMaRxyaZabaX0A9ne2MLGXcV6mX5dRhgDYMMRXKADrbnYgOwDoALcAyH+OAPSRzV7PAORaGlWeWRYAtADWV38A84Mjip5Qz1IHeTqW+wCrAO1sQmw0ALBz/gDJU9dbnwFTTogAugDiAMoAoQD4IDow1E7taEgA3AD/AKwAzFIdXeUA3wDRXpcA8DDvUeqQAQDej/2M/ACmAL9b/jDZkCMAtWMBTuMAsVnLALhmDgDNAMAA9QD6MKwA7iAeANAAzgD9AOwA9wCzAPJRKgC5T1UAvQCkANkAxgC2AKgArQDBbTsAwwDUAVIAxZmZAL4A+wD5AOUA0gDmAKcA3QDLAM8Aqlf6ANUAsgDaAK8wvQDHYR+KcQD+TthO9k7LU92TMlesAO99QgC8AMJoPGH0ANtRmWVwMFJbjGzojwlZc1b9MBFUSmPQYB2Kc2KeU/BfU3tJW4lcS1MXjqtbZl4Cdnp7oTDNYweKADByX4VySDDYX9x2+DDbei6VooJyWSlOO2UvMKFUBDAFVIwwz2tjZyqQU5D9MG1ec5FNZ5yKZo13U59ZCZBOUJkwcH2aT7+PvGx6/5NVtjDmMI2Ky1I2Zvh1MWEbbYhOpFGNbXeP0V44XHF8IYzHiP19IJAxkFVpglRzmAL/D5jfdvRW8mDzfVBTwmdxe1YwgFeLXoNlxU5FdUxr204WbUFnZVtjMIN7xGghTgl5wWOlgm9Pm3ssU+N9RGV0UXFTc5hNXzdT+F3digiWZFFDXBFOrHBrmKhfYnVqe8BnG/9eTox9OWYvir+KMWLFkEpcSlvGMM6XXnOLZc97l3U3YpVPAWVZlYBf9VukTvt1MG6QmF6X82tiT09bWFkriseWTV76Y6F6eltXMFZ2fVIwZw1PEVNYZT5RSXE2jLeRz3C5egt9YX3okGlSqVxVVx9/bjCGexFmIDC0YoBS2YhTZ1AwsmcrY9t3QIADWOtZD3leMK6QMl9xi3dY8nz7/waAsmU/kc5UaE+LU8tTV09NZ2GYLVPKeftr1GIRUXdPoWIWgfRO1ZgGZyhrzmXpjbMwUILxY6iMu47KkCB6Dol/XqdWaIxhUXifjYHzkFRQZX3aU7tf2GJ/flT/DDDkdXBTzViDUKxxZ26WZb2P1F4MU3Awh1wOfL50A24vZTl8DXJHa4tUK2OibMEwZXC6WSqYWDB7i1iKrVNDe1SJllJ1T+6CsV4DUU1f64B3Up9T9/8eU/NlrQQgME6KsFcLhD1TQGgqU0qCLJoTgF6YVFMFUrleK3cLf9JlHYygje9OS5PIbQuQAHnRU+RicV81f8xqGW4FeY8wvFbbaXWQFGnLluOESVQmghdOJlNUdn6a1H3gYUtavVNBXPZvFFM5aiFZgn1xZXV1M4nSlwB/pFNaTl+QH1cSURqEVzAcdTpOB/8LaDmKVW3xjKlRdv9cWmZrPo2KMPZwY4ysmAWW4nVZXEVS32u1lYlU5ZXcX7RsEZgIAAlkrmTBUAn/FWy7f6let3K2eYF0sFARedJbzFbgl2ld8VM6kBCJqluumBiQYFjwfWNTyFLiWTGAATAOVH16P16ce8mRzFwxMHVmblffa3SD71PyT8JOm5dgeuBOOF8KguWKbYhXMA+LcFJyW3hiU2eXY7KAiYIHcbF3IGJVi4B382tkgU4EQYo7grhXznc8iIsEOnnLboBOfgQ4ZTZdEV9cZhR37YoqdSOO/WW8h7pW4wAAAAEAAgADAAQABQAGAAcACAALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwExAUEBQgFgAWEBeAF9AX4BkgK7ArwCxgLaAtwDAAMBAwIDAwMEAwUDBgMHAwgDCgMLAwwDJwMoAzIDNgORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDowOkA6UDpgOnA6gDqQOxA7IDswO0A7UDtgO3A7gDuQO6A7sDvAO9A74DvwPAA8EDxAPFA8YDxwPIA8kEAQQQBBEEEgQTBBQEFQQWBBcEGAQZBBoEGwQcBB0EHgQfBCEEIgQjBCQEJQQmBCcEKAQpBCoEKwQsBC0ELgQvBDAEMQQyBDMENAQ1BDYENwQ5BDsEPAQ9BD4EPwRABEIEQwREBEUERgRHBEgESQRKBEsETARNBE4ETwRRIAIgAyAQIBEgEiAVIBYgGiAgICEgJSAwIDIgMyA+IEQgWiBdIQMhCSEKIRMhFiEhITshYCFhIWIhYyFkIWUhZiFnIWghaSFqIWshcCFxIXIhcyF0IXUhdiF3IXgheSF6IXshfyGQIZEhkiGTIcQhxSHGIdIh1CHmIech6CHpIfUiACICIgMiByIIIgsiESISIhkiGiIdIh4iHyIgIiciKCIpIioiKyIsIi0iLiI0IjUiPCI9IlIiYCJmImciaiJrIoIigyKGIocipSK/IxIjKSMqI6cjqCOpI6sjrCOtJGAkYSRiJGMkZCRlJGYkZyRoJGkkaiRsJG0kbiRvJHAkcSRyJHMkdCR1JHYkdyR4JHkkeiR7JHwkfSR+JH8kgCSBJIIkgySEJIUkhiSHJIgkiSSKJIskjCSNJI4kjySQJJwknSSeJJ8koCShJKIkoySkJKUkpiSnJKgkqSSqJKskrCStJK8ksCSxJLIksyS0JLUk6iUAJQElAiUDJQQlBSUGJQclCCUJJQolCyUMJQ0lDiUPJRAlESUSJRMlFCUVJRYlFyUYJRklGiUbJRwlHSUeJR8lICUhJSIlIyUkJSUlJiUnJSglKSUqJSslLCUtJS4lLyUwJTElMiUzJTQlNSU2JTclOCU5JTolOyU8JT0lPiU/JUAlQSVCJUMlRCVFJUYlRyVIJUklSiVLJVAlXiVhJWolbSVuJW8lcCVxJXIlcyWBJYIlgyWEJYUlhiWHJYgliSWKJYsljCWNJY4ljyWUJZUloCWhJaIlsiWzJbclvCW9JcElxiXHJcklyyXOJc8l4iXjJeQl5SXvJgAmASYCJgMmBSYGJg4mHCYdJh4mHyZAJkImYCZhJmImYyZkJmUmZiZnJmombSZvJ3Yndyd4J3kneid7J3wnfSd+J6ErBSsGKwcrlS6OLpAuki6TLpQumS6bLp8uoC7BLsQu0S7YLuQu6C7pLusu7S7vLvIvAC8BLwIvAy8ELwUvBi8HLwgvCS8KLwsvDC8NLw4vDy8QLxEvEi8TLxQvFS8WLxcvGC8ZLxovGy8cLx0vHi8fLyAvIS8iLyMvJC8lLyYvJy8oLykvKi8rLywvLS8uLy8vMC8xLzIvMy80LzUvNi83LzgvOi87LzwvPS8+Lz8vQC9BL0IvQy9EL0UvRi9HL0gvSS9KL0svTC9NL04vTy9QL1EvUi9TL1QvVS9WL1gvWS9aL1svXC9dL14vXy9gL2EvYi9jL2QvZS9mL2gvaS9qL2svbC9tL24vby9wL3Ivcy91L3Yvdy94L3kvei97L3wvfS9+L38vgC+BL4Ivgy+EL4Uvhi+HL4gviS+KL4svjC+NL44vjy+QL5Evki+TL5QvlS+WL5cvmS+aL5svnS+eL58voC+jL6QvpS+mL6cvqC+pL6ovqy+sL60vri+vL7AvsS+yL7MvtC+1L7Yvty+4L7kvui+7L7wvvS++L78vwC/BL8Ivwy/EL8Uvxi/HL8kvyi/LL8wvzS/OL88v0C/RL9Iv0y/UL9UwAzAEMAYwBzAIMAkwCjALMBIwEzAUMBUwHTAfMCAwNjBBMEMwRTBHMEkwXDBeMGIwbDBxMHQwdzB6MHwwfTCFMI4wkDCRMJQwlTCWMJswnDCdMJ4wpTC+MMIwxTDMMNIw6DDuMPAw8TDyMPQw9TD3MPgw+TD6MP0w/jIqMisyLDItMi4yLzIwMjEyMjIzMjQyNjI3MjgyOTI6MjsyPDI9Mj4yPzJAMkEyQjJDMlEyUjJTMlQyVTJWMlcyWDJZMloyWzKRMpIykzKUMpYymDKZMp0ynjKkMqUypjKnMqgyqTKqMqsyrDKtMq4yrzKwMv8zADMDMwUzDTMUMxUzFjMYMx4zIjMjMyYzJzMqMyszMTMzMzYzOTM7M0IzRzNJM0ozTTNOM1EzVzN7M3wzfTN+M38zhTOGM4cziDOJM44zjzOQM5YzlzOYM5wznTOeM58zoDOhM6IzozOkM6UzpjOwM7EzsjOzM8QzyDPLM8wzzTPUPU5OAU4DTghODk4QThFOFE4VThdOGE4ZTh5OIU4oTjFOMk42TjlOPE4/TkJOQ05NTk5OT05VTlZOV05YTllOXU5eTmJOcU5zToBOgk6FTolOik6OTpFOkk6UTpVOmE6ZTpxOnk6fTqBOoU6iTqVOpk6oTqtOrU6uTrBOs062TsBOwU7CTsROx07NTs5Oz07UTtdO2U7dTt5O307hTuRO7k7wTvJO9078TwBPA08JTwpPDU8OTw9PEE8cTx1PL08wTzRPNk84TzlPOk88Tz1PQ09GT0dPTk9QT1FPVk9XT1lPWk9bT11PXk9pT29PcE9zT3VPdk97T3xPg0+GT4hPik+NT49PkU+UT5ZPmE+aT51PoE+rT61Prk+vT7VPw0/ET8lPyk/NT85P0E/RT9RP10/YT9pP20/fT+BP40/kT+VP70/zT/VP9k/4T/pP/1AFUAZQDVAPUBJQFFAWUBlQGlAeUB9QIVAiUCNQJFAlUCZQKFApUCpQK1AsUC1QNlA5UEBQQlBGUEdQSFBJUE9QUFBVUFZQWlBcUGxQcFByUHRQdVB2UHhQfVCAUIVQjVCRUJRQmFCaUK1QslCzULRQtVC3UL5QxVDJUMpQzVDRUNVQ1lDYUNpQ3lDjUOVQ51DtUO5Q9FD1UPlQ+1EAUQFRAlEEUQlRElEUURVRFlEYUR9RIVEyUTdROlE7UTxRP1FAUUFRRFFFUUZRR1FKUUtRTFFOUVBRUlFUUVpRXFFiUWRRaVFqUWtRbVFuUXVRfFGAUYJRiVGKUYxRj1GQUZFRklGTUZVRllGXUZ1RoFGiUaRRpVGmUahRqVGqUatRrFGwUbFRslGzUbRRtVG2UbdRvVG+UcRRxVHGUclRy1HMUc1R1lHbUdxR3VHgUeFR5lHnUelR7FHtUfBR8VH1UfZR+FH5Uf1R/lIAUgNSBFIIUgpSC1IOUhFSFFIVUhdSJFInUipSLlIzUjdSOFI5UjpSO1JDUkRSR1JKUktSTFJPUlRSVlJbUl1SXlJjUmRSZVJpUmpSb1JwUnFSc1J0Un1Sf1KDUodSiFKJUo1SkVKSUpRSnFKjUqZSqlKrUqxSrVKvUrFStFK1UrxSvlLAUsFSw1LFUsdSyVLNUtJS11LYUttS3VLeUuBS41LkUuZS51LyUvNS9VL5UvpS/lL/UwBTAVMCUwZTCFMNUw9TEFMVUxlTGlMdUyBTIVMjUyRTKlMvUzFTM1M4UztTP1NFU0ZTR1NIU0lTTVNRU1JTU1NcU15TYFNmU2lTblNvU3FTclN0U3VTd1N4U3tTf1OCU4RTk1OWU5hTmlOgU6VTplOoU6lTrVOuU7BTslOzU7ZTw1PJU8xTzlPUU9lT21PfU+FT4lPlU+hT6VPqU+tT7FPtU+5T8VP2U/pUAVQDVAlUClQLVA5UD1QQVBtUHVQfVCBUKVQsVC1ULlQ2VDhUOVQ7VDxUPVQ+VEBUQlRGVEhUSVROVFFUX1RqVHBUcVR1VHZUd1R7VHxUgFSEVIZUilSLVI5Uj1SQVJJUnFSiVKRUpVSoVKlUq1SsVK9UslSzVLhUvFS9VL5UwFTCVMRUx1TIVMlU2FTiVOZU6FTpVO1U7lTyVPpU/VT/VQRVBlUHVQ9VEFUUVRZVLlUvVTFVM1U4VTlVPlVAVURVRVVMVVNVVlVXVVxVXVVeVWNVe1V8VX5VgFWDVYRVhlWHVYlVilWLVZhVmVWaVZxVnVWfVadVqFWpVapVq1WsVa5VsFXEVcVVx1XUVdpV3FXfVeNV5FX3VflV/VX+VgZWCVYUVhZWF1YYVhtWKVYvVjFWMlY0VjZWOFZCVkxWTlZQVlNWW1ZkVmpWa1ZsVnRWeFZ6VoBWhlaHVopWj1aUVplWoFaiVqVWrla0VrZWvFbAVsFWwlbDVshWylbOVtFW01bXVthW2lbuVvBW81b5VvpW/1cAVwNXBFcIVwlXDVcPVxNXFlcYVxxXJlcnVy1XN1c4VztXQFdCV0dXSldOV09XUFdRV1lXYVdkV2VXZldpV2pXgleIV4lXk1egV6JXo1ekV6pXsFezV8BXw1fGV8dXyFfLV9JX01fUV9ZX3FfgV+NX9Ff3V/lX/FgAWAJYBVgGWApYC1gVWBlYHVghWCRYKlgvWDBYNVg6WD1YQFhBWEpYS1hRWFJYVFhXWFhYWVhaWF5YYVhiWGlYa1hwWHJYdVh5WH5YhViTWJdYnFieWJ9YqFirWK5YslizWLhYuVi6WLtYvljBWMVYx1jKWMxY0VjTWNVY11jYWNlY3FjeWN9Y5FjlWOxY7ljvWPFY91j5WPpY+1j8WP1ZAlkKWQtZEFkVWRhZGVkbWRxZIlklWSxZLVkuWTJZN1k4WT5ZRFlHWUhZSVlOWU9ZUFlRWVNZVFlVWVdZWFlaWVtZXVlgWWJZY1llWWdZaFlpWWpZbFluWXRZeFmBWYNZhFmKWY1Zk1mWWZlZm1mdWaNZpFmlWahZrFmyWblZulm7Wb5ZxlnJWdBZ0VnTWdRZ2VnaWdxZ5VnmWehZ6lnrWfZZ+1n/WgFaA1oJWhFaGFocWh9aIFolWilaL1o1WjZaPFpAWkFaRlpJWlpaYlpqWmxaf1qSWppam1q8Wr5awVrCWslay1rMWtBa1lrXWuFa41rmWula+lr7WwlbC1sMWxZbIlsqWyxbMFsyWzZbPltAW0NbRVtRW1VbVltaW1tbXFtdW19bZFtlW2lba1twW3Fbc1t1W3pbgFuDW4Vbh1uIW4tbjVuPW5Vbl1uYW5lbm1ucW51bo1ulW6ZbsFuzW7RbtVu4W79bwFvCW8NbxFvFW8dbyVvQW9Jb01vUW9hb21vdW95b31vhW+Jb5FvlW+Zb6FvpW+tb7lvwW/Nb9Vv2W/hb+lv/XAFcAlwEXAVcBlwHXAhcCVwKXAtcDVwTXBZcGlweXCBcIlwkXChcLVw4XDlcOlw7XDxcPVw+XD9cQFxBXEZcSFxNXE5cT1xQXFFcW1xeXGBcYVxiXGRcZVxsXG5cb1x2XHlcjFyQXJFclFyhXKZcqFypXKtcrFyxXLNctly3XLhculy7XLxcvlzFXMdc2VzgXOFc6FzpXOpc7VzvXPBc9Vz6XPtc/V0HXQtdDl0UXRVdFl0XXRhdGV0aXRtdH10iXSddKV1CXUtdTF1OXVBdUl1TXVxdaV1sXW1db11zXXZdgl2EXYddi12MXZBdnV2iXaxdrl23XbhduV26XbxdvV3JXcxdzV3QXdJd013WXdtd3l3hXeNd5l3nXehd613uXfJd8130XfVd9137Xf1d/l4GXgteEV4WXhleGl4bXh1eJV4tXi9eMF4zXjZeN149XkBeQ15EXkVeR15MXk5eVF5VXldeX15hXmNeZF5yXnVedl54Xnleel57XnxefV5+Xn9egV6EXodeil6PXpVell6aXqBeq16tXrVetl64XsFewl7DXsheyV7KXtBe017WXtpe217dXt9e4F7hXuJe417oXule7F7wXvFe8170XvZe9174Xvte/F7+Xv9fAV8DXwRfCV8LXwxfDV8QXxFfE18UXxZfF18YXxtfH18hXyVfJl8nXylfLV8vXzFfNF84XzxfPl9BX0VfSF9KX0xfTl9RX1ZfV19ZX11fYV9mX2dfaV9qX2tfbF9tX3Bfc193X3lffF9/X4BfgV+CX4NfhF+HX4hfil+LX5BfkV+SX5NfmF+ZX55foF+hX6hfqV+qX61frl+zX7dfuV+8X71fzF/NX9Zf11/ZX91f3l/gX+Rf8F/xX/hf+1/9X/9gDmAPYBBgEmAVYBZgGWAbYBxgIGAhYCVgJmAoYClgK2AvYDFgOmBBYEJgQ2BGYEpgS2BNYFBgUmBVYFlgWmBdYF9gYGBiYGNgZGBlYGhgamBrYGxgbWBvYHBgdWB3YIFgg2CEYIVgiWCKYItgjGCNYJJglGCWYJdgmmCbYJ9goGCjYKZgp2CpYKpgsmCzYLRgtWC2YLhgvGC9YMZgx2DRYNNg1WDYYNpg3GDeYN9g4GDhYONg52DoYPBg8WDyYPRg9mD3YPlg+mD7YQBhAWEDYQZhCGEJYQ1hDmERYRVhGmEgYSFhJ2EsYTBhNGE3YTxhPWE+YT9hQmFEYUdhSGFKYUxhTWFOYVNhVWFYYVlhWmFdYV9hYmFjYWVhZ2FoYWthbmFvYXBhcWFzYXRhdWF2YXdhfmGCYYdhimGOYZBhkWGUYZZhmWGaYaRhp2GpYathrGGuYbJhtmG6Yb5hw2HGYcdhyGHJYcphy2HMYc1h0GHjYeZh8mH2Yfdh+GH6Yfxh/WH+Yf9iAGIIYgliCmIMYg1iDmISYhNiFGIaYhtiHWIeYh9iIWImYipiLmIvYjBiMmIzYjRiOGI7Yj9iQWJHYkhiSWJNYk5iWGJbYl5iYGJjYmhibmJ2YnlifGJ+YoJig2KEYoliimKRYpJik2KUYpZil2KYYptinGKmYqtirGKxYrViuWK7YrxivWLCYsZix2LIYsliymLMYs1iz2LQYtFi0mLTYtRi12LYYtli22LcYt1i4GLhYuxi7WLuYu9i8WLzYvVi9mL3Yv5i/2MCYwhjCWMMYxFjGWMfYydjKGMrYy9jOmM9Yz5jP2NJY0xjTWNPY1BjVWNXY1xjZ2NoY2lja2NuY3JjdmN3Y3tjgGODY4hjiWOMY45jj2OSY5ZjmGObY59joGOjY6djqWOqY6tjrGO0Y7Vju2O+Y8Bjw2PEY8ZjyWPPY9pj4WPjY+lj7mP0Y/Zj+mQGZA1kD2QTZBRkFmQXZBxkJmQoZCxkLWQ0ZDZkPmRCZE5kUWRYZGBkZ2RpZG9kdmR4ZHpkg2SIZJJkk2SVZJpknWSeZKRkpWSpZKtkrWSwZLJkuWS7ZLxkwmTFZMdkzWTOZNJk1GTYZNpk4GThZOJk42TmZOdk7GTxZPJk9GT2ZPpk/WT+ZQBlBWUYZRxlImUjZSRlKmUrZSxlNGU1ZTdlOGU7ZUVlSGVNZU5lT2VRZVVlVmVXZVhlXWVeZWJlY2VmZWxlcmV3ZXhlgmWDZYhliWWMZY5lkGWRZZdlm2WcZZ9lpGWlZadlq2WsZa9lt2XBZcNlxGXGZctlzGXSZddl2WXbZeBl4WXiZeZl52XoZexl7WXxZfpl+2YAZgJmA2YGZgdmCWYKZgxmD2YTZhVmHGYfZiRmJWYnZihmLWYuZjFmNGY1ZjtmPGY/ZkFmQ2ZEZklmS2ZPZlJmV2ZZZl1mXmZfZmJmZGZlZmZmZ2ZoZmlmb2ZwZnNmdGZ2ZnpmgWaDZoRmh2aIZolmjmaRZpZml2aYZplmnWagZqJmpmarZq5msma0ZrhmuWa8Zr5mv2bBZsRmx2bJZtZm2WbaZtxm3WbgZuZm6WbwZvJm82b1Zvdm+Wb6Zvtm/Gb9Zv5m/2cDZwtnDmcPZxRnFWcWZxdnHWceZyZnJ2ctZy5nMWc0ZzZnN2c4ZzpnPWc/Z0FnRmdJZ05nT2dRZ1NnVmdZZ1xnXmdfZ2BnYmdjZ2RnZmdqZ21nb2dwZ3Jnc2d1Z3dnfGd+Z39nhWeHZ4lni2eMZ5BnlWeaZ51noGehZ6JnpmepZ69ns2e0Z7Znt2e4Z7lnu2fAZ8FnxGfGZ8pnzmfPZ9Bn02fUZ9hn2mfdZ95n4mfkZ+dn6WfsZ+5n72fxZ/Nn9Gf1Z/pn+2f+Z/9oAmgEaAVoE2gWaBdoHmgiaCloK2gyaDRoOGg9aEBoQWhCaENoRGhGaE1oTmhQaFFoUmhTaFRoWWhcaF1oX2hjaGdodGh2aHdofmh/aIFog2iFaI1ojmiPaJNolGiXaJtonWifaKBoomimaKdoqGitaK9osGixaLNotWi2aLloumi8aMRoxmjIaMloymjLaM1oz2jSaNRo1WjYaNpo32jgaOFo42jnaO5o72jyaPlo+mkAaQFpBGkFaQhpC2kMaQ1pDmkPaRJpGWkaaRtpIWkiaSNpJWkmaShpKmkwaTRpNmk5aT1pP2lKaVNpVGlVaVlpWmlcaV1pXmlgaWFpYmloaWppa2luaW9pc2l0aXdpeGl5aXxpfmmBaYppjmmRaZRplWmYaZxpoGmnaa5psWmyabRpu2m+ab9pwWnDacdpymnMac1pzmnQadNp2Wndad5p4mnnaehp62ntafJp+Wn7af1p/2oCagVqCmoLagxqEmoTahRqF2obah5qH2oiaiNqKWoqaitqLmowajVqNmo4ajlqOmo9akRqRmpHakhqS2pYallqYWpiamZqa2pyanNqeGp+an9qgGqEao1qjmqQapdqnGqgaqJqo2qqaqxqrmqzarhqu2rBasJqw2rRatNq2mrbat5q32riauRq6Grqavpq+2sEawVrCmsSaxZrHWsfayBrI2snazJrN2s4azlrOms9a0NrR2tJa0xrTmtQa1NrVGtZa1trX2tha2ZraWtqa29rc2t4a3lre2t/a4Brg2uEa4ZriWuKa41rlWuWa5hrnmuka6prq2uva7Frsmuza7Rrt2u6a7trvGu/a8BrxWvGa8trzWvSa9Nr1mvYa99r62vsa+9r82wIbA9sE2wUbBtsI2wkbDdsOGw+bD9sQGxBbE5sUGxVbFdsWmxcbF1sXmxfbGBsYmxobGpsb2xwbHJsc2x9bH5sgWyCbINshmyIbIxsjWyQbJJsk2yWbJlsmmybbKFsomyrbK5ssWyzbLhsuWy6bLxsvWy+bL9sxGzFbMlsymzMbNNs12zZbNps22zdbOFs4mzjbOVs6mzvbPBs8WzzbQRtDG0SbRdtGW0bbR5tH20lbSltKm0rbTJtM201bTZtOG09bT5tRG1FbVltWm1cbWNtZG1mbWltam1sbW5tb210bXhteW2FbYdtjG2ObZNtlW2WbZltm22cbaxtr22ybbVtuG28bcBtxW3Gbcdty23Mbc9t0W3SbdVt2G3Zbd5t4W3kbeZt6G3qbett7G3ubfJt8231bfdt+G35bfpt+238bgduCG4JbgpuC24TbhVuGW4abhtuHW4fbiBuIW4jbiRuJW4mbiduKW4rbixuLW4ubjhuOW46bjxuPm5DbkpuTW5OblZuWG5bblxuX25nbmtubm5vbn5uf26Cboxuj26YbpxunW6fbqJupW6qbq9usm62brduum69br9uwm7EbsVuyW7Lbsxu0W7TbtRu1W7dbt5u7G7vbvJu9G73bvhu/m7/bwFvAm8GbwlvD28RbxNvFW8gbyJvI28rbyxvMW8ybzhvPm8/b0FvRW9Rb1RvWG9bb1xvX29kb2ZvbW9ub29vcG90b3hvem98b4BvgW+Cb4Rvhm+Ib45vkW+Xb6Fvo2+kb6pvsW+zb7VvuW/Ab8Fvwm/Db8Zv1G/Vb9hv22/fb+Bv4W/kb+tv7G/ub+9v8W/zb/Vv9m/6b/5wAXAFcAZwB3AJcAtwD3ARcBVwGHAacBtwHXAecB9wJnAncChwLHAwcDJwPnBMcFFwWHBvcHBweHB8cH1whXCJcIpwjnCScJlwq3CscK1wrnCvcLNwuHC7cMhwy3DPcNlw3XDfcPFw+XD9cQRxCXEPcRRxGXEacRxxJnEwcTxxRnFHcUlxTHFOcVVxVnFZcVxxYnFkcWVxZnFpcWxxbnF9cYRxiHGKcY9xlHGVcZlxn3GocaxxuXG+ccFxw3HIcclxznHQcdJx1HHVcddx33HgceVx5nHncexx7XHucfVx+XH7cfxx/nH/cgZyDXIQchtyKHIqcixyLXIwcjJyNXI2cjpyO3I8cj1yPnI/ckByRnJLckxyUnJYcllyW3Jdcl9yYXJicmdycnJ0cn1yfnKAcoFygnKHcpJylnKgcqJyp3Kscq9ysXKycrlyvnLCcsNyxHLGcs5y0HLSctdy2XLbcuBy4XLiculy7HLtcvdy+HL5cvxy/XMKcxZzF3MbcxxzHXMfcyRzJXMpcypzK3Mucy9zNHM2czdzPnM/c0RzRXNOc09zV3Njc2hzanNwc3JzdXN3c3hzenN7c4Rzh3OJc5ZzqXOyc7Nzu3O9c8JzyHPJc8pzzXPOc9Jz1nPec+Bz43Plc+pz7XPuc/Fz9XP4dAV0B3QJdCJ0JXQmdCl0KnQudDJ0M3Q0dDV0NnQ6dD90QXRVdFl0WnRbdFx0XnRfdGB0Y3RkdGl0anRvdHB0c3R2dH50g3SJdIt0nnSfdKJ0p3S9dMp0z3TUdNx04HTidON05nTndOl07nTwdPF08nT2dPd0+HUBdQN1BHUFdQx1DXUOdRF1E3UVdRh1GnUcdR51JXUmdSt1LHUvdTJ1OHU8dUR1RnVJdUp1TXVPdVF1VHVadVt1XHVddWB1YnVkdWV1ZnVndWl1a3VtdW91c3V0dXZ1d3V4dX91gnWGdYd1iXWKdYt1jnWPdZF1lHWadZ11o3Wldat1sXWydbN1tXW4dbl1vHW9db51wnXDdcV1x3XKdc110nXUddV12HXZddt13nXideN16XXydfN19HX6dfx1/nX/dgF2CXYLdg12H3YgdiF2InYkdid2MHY0djt2QnZGdkd2SHZMdlJ2VnZYdlx2YXZidmd2aHZpdmp2bHZwdnJ2dnZ4dnx2gHaCdoN2hnaHdoh2i3aOdpB2k3aWdpl2mnabdpx2nnamdq52sHa0drd2uHa5drp2v3bCdsN2xnbIdsp2zXbSdtZ213bbdtx23nbfduF243bkduV253bqdvJ2+3b+dwF3BHcHdwh3CXcMdxt3HnckdyV3KXc3dzh3OndGd0d3Wndbd2F3Yndjd2V3Zndod2t3eXd+d393i3eOd5F3nnegd6V3rHetd7B3s3e5d7t3vHe9d793x3fNd9d32nfbd9x34nfjd+d36Xfud+93/HgCeAx4EngUeBV4IHgheCV4JngneDJ4NHg6eD94RXhOeF14ZHhreGx4b3hyeHR4enh8eIF4hniHeIx4jXiOeJF4k3iVeJd4mnijeKd4qXiqeK94tXi8eL54wXjFeMZ4ynjLeNB40XjUeNp453joeOx473j0eP15AXkHeQ55EXkSeRl5JnkqeSt5LHkweTx5QHlBeUd5SHlJeVB5U3lVeVZ5V3laeV15X3lgeWJ5ZXloeW15d3l6eX95gHmEeYV5inmNeY55lHmbeZ15pnmneap5rnmwebF5s3m5ebp5vXm+eb95wHnJedV52HnfeeF55Hnmeed56XnsefB6AHoIeg16FHoXehh6GXoaehx6H3ogejF6Mno3ejt6PHo9ej56QHpCekN6RnpJek16TnpPelB6V3phemJ6Y3ppemt6cHp0enZ6eXp9en96gXqDeoR6iHqSepN6lXqWepd6mHqfeql6qnqueq96sHq2erp6v3rDesR6xXrHesh6ynrNes960XrSetN61XrZetp63Hrdet964XrieuN65Xrmeud66nrreu1673rwevZ6+Hr5evp6/3sCewR7BnsIewp7C3sPexh7GXsbex57IHsleyZ7KHs1ezZ7OXtFe0Z7SHtLe0x7TXtPe1B7UXtSe117ZXtne2x7bntwe3F7dHt1e3p7hnuHe4t7jXuPe5J7lHuVe5h7mXuae5x7nXuee597qnute7F7tHu4e8F7xnvHe8t7zHvPe9174Hvke+V75nvpe+1783v2e/d8AHwHfBF8EnwTfBR8F3wefB98I3wnfCp8K3w3fDh8PXw+fD98QHxDfEx8TXxPfFB8VHxWfFh8X3xgfGR8ZXxsfHN8dXx+fIF8gnyDfIl8i3yNfJB8knyVfJd8mHybfJ98oXyifKR8pXynfKh8q3ytfK58sXyyfLN8uXy9fMB8wnzFfMp8znzSfNZ82HzcfN5833zgfOJ853zvfPJ89Hz2fPh8+nz+fQB9An0FfQZ9Cn0LfQ19EH0UfRV9F30YfRl9Gn0bfRx9IX0rfSx9Ln0vfTJ9M301fTp9P31DfUV9Rn1IfUt9TH1OfU99Vn1bfV59Yn1mfWh9bn1yfXN9dX12fXl9fX2JfY99k32ZfZt9nH2ffaB9on2jfat9rH2tfa59r32wfbF9sn20fbV9t326fbt9vX2+fb99x33Kfct9z33RfdJ91X3Wfdh93H3dfd594X3kfel97H3vffJ99H37fgF+BH4Ffgl+Cn4LfhJ+G34efh9+IX4ifiN+Jn4rfi5+MX4yfjV+N345fjp+O349fj5+QX5DfkZ+Sn5Lfk1+Un5VflZ+WX5dfl5+YX5mfmd+aX5rfm1+cH55fnt+fH59fn9+gn6Dfoh+iX6Kfox+jn6PfpB+kn6TfpR+ln6bfpx/Nn84fzp/RX9Hf0x/TX9Of1B/UX9Uf1V/WH9gf2d/aH9pf2p/a39wf3J/dX93f3h/eX+Cf4N/hX+Gf4d/iH+Kf4x/lH+af51/nn+jf6h/rn+vf7J/tn+4f7l/vX/Bf8V/xn/Kf9R/1X/gf+F/5n/pf+t/8H/zf/l/+3/8gACABIAGgAuADIAQgBKAFYAXgBiAGYAcgCGAKIAzgDaAO4A9gD+ARoBKgFKAVoBYgFqAX4BhgGKAaIBvgHCAcoBzgHSAdoB5gH2AfoB/gISAhYCGgIeAi4CMgJOAloCYgJqAm4CdgKGAooClgKmAqoCsgK2Ar4CxgLSAuoDDgMSAxoDMgM6A1oDZgNqA24DdgN6A4YDkgOWA74DxgPSA+ID8gQWBBoEHgQiBCYEKgRqBG4EjgSmBL4ExgTOBOYE+gUaBS4FQgVGBU4FUgVWBX4FlgWaBa4FugXCBcYF0gXiBeYF6gX+BgIGCgYOBiIGKgY+Bk4GVgZqBnIGdgaCBo4GkgaiBqYGwgbOBtYG4gbqBvYG+gb+BwIHCgcaByIHJgc2B0YHTgdiB2YHagd+B4IHjgeWB54Hoge2B+oH7gfyB/oIBggKCBYIIggmCCoIMgg2CDoIQghKCFoIYghuCHIIegh+CKYIqgiuCLoIzgjWCNoI3gjiCOYJAgkeCWIJZglqCXYJfgmKCZIJmgmiCaoJrgm6CcYJ2gneCeIJ+gouCjYKSgpmCnYKfgqWCpoKrgqyCrYKvgrOCuYK7gr2CxYLRgtKC04LUgteC2YLbgtyC3oLfguGC44LmgueC64LzgvSC+YL6gvuDAYMCgwODBIMFgwaDCYMOgxaDF4MYgxyDKIMrgy+DMYMygzSDNYM2gziDQINFg0aDSYNKg0+DUINSg1iDYoNzg3WDd4N7g3yDf4OFg4eDiYOKg46Dk4OWg5qDnoOfg6CDooOog6qDq4Oxg7WDvYPBg8WDx4PKg8yDzoPTg9aD2IPcg9+D4IPpg+uD8IPxg/KD9IP2g/eD+4P9hAOEBIQHhAqEC4QMhA2EDoQThCCEIoQphCqELIQxhDWEOIQ8hEaESIROhFuEYYRihGOEZoRphGuEbIRthG6Eb4RxhHWEd4R5hHqEgoSEhIuEkISUhJmEnISfhKGEsoS0hLiEuYS7hLyEv4TBhMSExoTJhMqEy4TNhNCE0YTWhNmE2oTchOyE7oT0hPyE/4UAhQaFEYUThRSFFYUXhRiFGoUhhSOFJoUshS2FNYU9hT6FQIVBhUOFSIVJhUqFS4VOhVOFVYVXhViFWYVahWOFaIVphWqFa4VthXeFfoWAhYSFh4WIhYqFkIWRhZSFl4WZhZuFnIWkhaaFqIWphaqFq4Wsha6Fr4WwhbmFuoXBhcmFzYXPhdCF1YXchd2F5IXlhemF6oX3hfmF+oX7hf6GAoYGhgeGCoYLhhOGFoYXhiKGLYYvhjCGP4ZNhk6GUIZUhlWGWoZchl6GX4ZnhmuGcYZ5hnuGioaLhoyGk4aVhqOGpIaphqqGq4avhrCGtobEhsaGx4bJhsuGzYbOhtSG2Ybbht6G34bkhumG7Ibthu6G74b5hvuG/ocAhwKHA4cGhwiHCYcKhw2HEYcShxiHGocchyWHKYc0hzeHO4c/h0mHS4dMh06HU4dVh1eHWYdfh2CHY4dmh2iHaoduh3SHdod4h3+HgoeNh5+Hooerh6+Hs4e7h72HwIfEh8aHx4fLh9CH0ofgh+yH74fyh/aH94f5h/uH/ogFiAeIDYgOiA+IEYgViBaIH4ghiCKII4gniDGINog5iDuIQIhCiESIRohNiFKIWYhbiF2IXohhiGKIY4hriHCIcoh1iHeIfYh+iH+IgYiCiIiIjYiSiJaIl4iZiJ6IooikiKuIroiwiLGItIi1iLeIv4jBiMKIw4jEiMWIz4jUiNWI2IjZiNyI3YjfiOGI6IjyiPOI9Ij1iPiI+Yj8iP6JAokEiQeJCokMiRCJEokTiRyJHYkeiSWJKokriTaJOIk7iUGJQ4lEiUyJTYlWiV6JX4lgiWSJZolqiW2Jb4lyiXSJd4l+iYOJhomHiYiJiomTiZeJmImaiaGJpompiayJr4myibOJuom9ib+JwInaidyJ3YnmieeJ9In4igKKA4oKigyKDooQihKKE4oWihuKHYofiiOKJYozijSKNoo3ijqKPIpBikaKSIpQilGKUopUiluKXopgimKKY4ppimuKbIpuinCKcop5inyKhIqFioeKiYqMipGKk4qVipiKmoqgiqGKo4qkiqWKpoqniqiKrIqyirmKvIq+isKKxIrMis2Kz4rSitaK2orbityK3orfiuCK4YriiuSK5orniu2K7orxivOK9or3iviK+or+iwCLAYsCiwSLB4sMiw6LEIsUixaLF4sZixqLHYsgiyGLJosoiyuLLIszizmLPotBi0mLTItOi0+LU4tWi1qLW4tci1+LZotri2yLb4txi3KLdIt9i3+Lg4uKi4yLjouQi5KLk4uWi5mLmow3jDqMP4xBjEaMSIxKjEyMToxQjFWMWoxijGqMa4xsjHiMeYx6jHyMgoyFjImMioyMjI2MjoyUjJiMnYyejKGMooynjKiMqoyrjK2MroyvjLCMsoyzjLSMtoy4jLyMvYy/jMCMwYzCjMOMxIzIjMqMzYzOjNGM04zajNuM3IzejOCM4ozjjOSM5oztjPCM9Iz7jP2NBI0FjQeNCI0KjQuNDY0PjRKNE40UjRaNZI1mjWeNa41tjXCNcY1zjXSNdo2BjZmNo42ojbqNvo3CjcuNzI3PjdaN2o3bjd2N343hjeON6I3qjeuN8431jfyN/44IjgmOCo4PjhCOHY4ejh+OKo4wjjSONY5CjkSOR45IjkmOSo5MjlCOVY5Zjl+OYI5jjmSOco50jnaOfI6BjoSOhY6HjoqOi46NjpGOk46UjpmOoY6qjqyOr46wjrGOvo7AjsWOxo7IjsuOzI7Njs+O0o7bjt+O4o7jjuuO+I77jvyO/o8DjwWPCo8MjxKPE48UjxWPGY8bjxyPHY8fjyaPKY8qjy+PM484jzmPO48+jz+PQo9Ej0WPRo9Jj0yPTY9Oj1ePXI9fj2GPYo9jj2SPm4+cj56Pn4+jj6ePqI+tj6+PsI+xj7KPt4+6j7uPv4/Cj8SPxY/Oj9qP4o/lj+mP6o/rj+2P74/wj/SP94/4j/mP+pADkAWQBpALkA2QDpAPkBGQE5AVkBaQF5AZkB2QHpAikCeQLpA1kDaQOJA5kDyQPpBBkEKQRZBHkEmQTZBPkFCQUZBSkFaQWJBZkFyQXpBhkGOQZZBnkGiQbZBukG+QcpB1kHaQd5B6kHyQfZB/kICQgZCCkIOQhJCHkImQipCPkJGQo5CmkKiQqpCvkLGQtZC4kMGQypDOkNuQ3pDhkOKQ5JDtkPWQ95ECkRKRFZEnkS2RMJEykUmRSpFLkUyRTpFSkVSRVpFYkWKRY5FlkWmRapFskXKRc5F1kXeReJGCkYeRiZGLkY2RkJGSkZeRnJGikaSRqpGrkayRr5GxkbSRtZG4kbqRwZHGkceRyJHJkcuR0JHWkdeR2JHakduR3JHdkd6R35HhkeOR5JHlkeaR55Htke6R9ZH2kfyR/5IGkgqSDZIOkhCSEZIUkhWSHpIpkiySNJI3kjmSOpI8kj+SQJJEkkWSSJJJkkuSTpJQklGSV5JZklqSW5JekmKSZJJmkmeScZJ3kniSfpKAkoOShZKIkpGSk5KVkpaSmJKakpuSnJKnkq2St5K5ks+S0JLSktOS1ZLXktmS4JLkkueS6ZLqku2S8pLzkviS+ZL6kvuS/JL/kwKTBpMPkxCTGJMZkxqTHZMekyCTIZMikyOTJZMmkyiTK5Msky6TL5M1kzqTO5NEk0iTTZNUk1aTV5Nbk1yTYJNsk26TcJN1k3yTfpOMk5STlpOXk5qTpJOnk6yTrZOuk7CTuZPDk8aT0JPRk9aT15PYk92T3pPhk+ST5ZPok/iUA5QHlBCUE5QUlBiUGZQalCGUK5QxlDWUNpQ4lDqUQZRElEWUSJRRlFKUU5RalFuUXpRglGKUapRwlHWUd5R8lH2UfpR/lIGVgpWDlYeVipWPlZGVkpWUlZaVmJWZlaCVo5WklaWVp5Wola2VspW5lbuVvJW+lcOVx5XKlcyVzZXUldWV1pXYleGV4pXllhyWIZYoliqWLpYvljKWO5Y/lkCWQpZElkuWTJZPlluWXJZdll6WX5ZilmOWZZZmlmqWbJZwlnKWc5Z2lneWeJZ6ln2WhZaGloiWipaLlo2WjpaPlpSWlZaXlpiWmZaclp2WoJajlqeWqJaqlq+WsJaxlrKWtJa2lreWuJa5lruWvJbAlsGWxJbFlseWyZbLlsyWzZbOltGW1ZbWltmW25bcluiW6pbrlvCW8pb2lveW+ZcElwaXB5cIlwqXDZcOlw+XEZcTlxaXGZcclx6XJJcnlyqXMJcylzOXOJc5lzuXPZc+l0KXQ5dEl0aXSJdJl02XT5dRl1KXVpdZl1yXYZdkl2aXaJdrl22XdJd5l3qXfJeBl4SXhZeGl4uXjZePl5CXmJecl6CXo5eml6iXq5etl7OXtJfDl8aXyJfLl9OX3Jftl+6X8pf1l/aX+5f/mAGYA5gMmA+YEJgRmBKYE5gXmBqYIZgkmCyYMJg0mDeYOJg7mDyYPZhGmEuYTphPmFWYV5hamFuYZZhnmGuYb5hwmHGYc5h0mKqYr5ixmLaYw5jEmMaY25jcmOKY6ZjrmO2Y7pjvmPKY9Jj8mP2Y/pkDmQWZCZkKmQyZEJkSmROZFJkYmR2ZHpkgmSGZJJknmSiZLJkumT2ZPplCmUWZSZlLmUyZUJlRmVKZVZlXmZaZl5mYmZ6ZpZmomayZrZmumbOZtJm8mcGZxJnFmcaZyJnQmdGZ0pnVmdiZ25ndmeKZ7ZnumfGZ8pn4mfuZ/5oBmgWaDpoPmhKaGZoomiuaMJo3mj6aQJpCmkOaRZpNmk6aUppVmleaWppbml+aYppkmmWaaZpqmmuarZqwmriavJrAmsSaz5rRmtOa2Zrcmt6a35rimuOa5prqmuua7Zrumu+a8Zr0mvea+5sGmxibGpsfmyKbI5slmyebKJspmyqbLpsvmzGbMps7mzybQZtCm0ObRJtFm02bTptPm1GbVJtYm1qbb5tym3SbdZuDm46bj5uRm5Kbk5uWm5ebn5ugm6ibqpurm62brpuxm7SbuZu7m8CbxpvJm8qbz5vRm9Kb1JvWm9ub4Zvim+Ob5Jvom/Cb8Zvym/WcAJwEnAacCJwJnAqcDJwNnBCcEpwTnBScFZwbnCGcJJwlnC2cLpwvnDCcMpw5nDqcO5w+nEacR5xInFKcV5xanGCcZ5x2nHic5ZznnOmc65zsnPCc85z0nPadA50GnQedCJ0JnQ6dEp0VnRudH50jnSadKJ0qnSudLJ07nT6dP51BnUSdRp1InVCdUZ1ZnVydXZ1enWCdYZ1knWudbJ1vnXCdcp16nYediZ2PnZqdpJ2pnaudr52ynbSduJ26nbudwZ3CncSdxp3PndOd153Zne2d753ynfid+Z36nf2eGZ4anhueHp51nnieeZ58nn2ef56Bnoiei56MnpGekp6TnpWel56dnp+epZ6mnqmeqp6tnrWeuJ65nrqeu568nr6ev57EnsyezZ7Ons+e0J7RntKe1J7Yntme257cnt2e3p7gnuWe6J7vnvSe9p73nvme+578nv2fB58Inw6fE58VnyCfIZ87nz6fSp9Ln06fT59Sn1SfX59gn2GfYp9jn2afZ59qn2yfcp92n3eflZ+cn52foPmS+ZP5mfnD+ez6DvoP+hD6EvoT+hT6FvoX+hj6Gfoa+hv6HPod+h76H/og+iH6Ivoj+iX6Jvon+ij6Kfoq+iv6LPot+jb6RvpK+mr7AfsC/hD+Ef4S/hn+MP4x/jL+M/41/jb+N/44/jn+Ov47/jz+Pf4+/j/+QP5B/kL+Q/5E/kf+SP8C/wP/BP8F/wf/Cv8N/w7/EP8R/xL/E/8U/xb/F/8Y/xn/G/8c/x3/IP8h/yL/I/8k/yX/Jv8n/yj/Kf8q/yv/LP8t/y7/L/8w/zH/Mv8z/zT/Nf82/zf/OP85/zr/O/88/z3/Pv8//0D/Qf9C/0P/RP9F/0b/R/9I/0n/Sv9L/0z/Tf9O/0//UP9R/1L/U/9U/1X/Vv9X/1j/Wf9a/1v/Xf9h/2L/Y/9k/2X/Zv9n/2j/af9q/2v/bP9t/27/b/9w/3H/cv9z/3T/df92/3f/eP95/3r/e/98/33/fv9//4D/gf+C/4P/hP+F/4b/h/+I/4n/iv+L/4z/jf+O/4//kP+R/5L/lP+V/5b/l/+Y/5n/mv+b/5z/nf+e/5//4P/h/+L/4//k/+X/6Ng83QDYRt4a2FDf0NhW3HTYY9zd2GPe9th+3A/YftwY2H7cd9h+3ITYftzT2H7c3Nh+3O3Yft0g",
            "dynamic": true
        }
    }, {
        "source": "https://use.typekit.net/af/d6d890/00000000000000007735aaee/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 35682,
        "dynamic": true,
        "family": "dnp-shuei-gothic-gin-std",
        "descriptors": {
            "weight": "500",
            "display": "auto",
            "featureSettings": "\"ALL \"",
            "subset": "",
            "order": "AAEAACBBAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF9OADACAKkAIHUoMAEwbjCkZeUwrzD8MPNOujDITgpOLVQIMLkwwzBZMFcwZzCSMOowizBmMOkwRFuaMEwA4DDXZbAwfk7lML8wbzC3MEswazCiZbkw6zBqMNUwXzDsMEowjDBVME9OCzBoMLAwZDBbUWVPGlVPWDSJi4mBT38wVGcsMOAwTTD7MOEwrTCJ/wgw7f8JMIow0DCrWSdSKTDJAKAwszCIMIIw4zC1doQwYDBCT1xRaDDAMFMwuDBIMI8wUTC7ZkKQeDCBMAxRbI2FMN1SBjANU+9nADB/fQQwk2b0UfpiEDBGMGP/AWcIgeowx/8flZMw3pDoMF1STTBhMMtUDDDnYMWITGzVdntlmXUfeT6ABVKgWDEwxnJ5MIR0BnEhMKZUwTBplYt27mEPICZbUDDWgP1S1f8aMNFO1lGFVt5lhzDTZjYw5ZAaXnQwqFThMHNT1iAUZDowqU6GixuJj1+MMKogHWshdx8w2jCjihhOKjBYIBxj0ohoANeM6k4Nii11O2cfMN9oAwDnX8VnCVkaieMgGTC6UAua2FvnMLZ6y5V3MMF35ZZQl2IAu2nYVzAweGBpAOpbtpHRUxYA8U6LXmKKFwCuXw9fFQAKmqhiS4ECW1RbomAqYkB+ajCniaeTS2fRfSJPtoYaUEOPrnXwj+ZVRl/DAKIvmGpfYCeWdSATMOJPU2P1ICKZ34qNbnJsF4rrfbgkay90gzlo153mf6FUDS+iYSh1SyJhUMJS+IStVBFZfX5aL1cDw4qCeeNOynPAkcAA6XcmT5KRGTI1ZaEhKy+caZtOxmTvUUiQS5bGY9ZjepAhMBCM+iSunyx7M40QT/6FH4b4nrR/X2GYaW0wWlKbMNwweVwPAOMhIjDKeLoA/E/dAOEwdlu5IBggOU/hXFMA030wMAAAxACjAKVSJZhMaRxyaZabaX0A9ne2MLGXcV6mX5dRhgDYMMRXKADrbnYgOwDoALcAyH+OAPSRzV7PAORaGlWeWRYAtADWV38A84Mjip5Qz1IHeTqW+wCrAO1sQmw0ALBz/gDJU9dbnwFTTogAugDiAMoAoQD4IDow1E7taEgA3AD/AKwAzFIdXeUA3wDRXpcA8DDvUeqQAQDej/2M/ACmAL9b/jDZkCMAtWMBTuMAsVnLALhmDgDNAMAA9QD6MKwA7iAeANAAzgD9AOwA9wCzAPJRKgC5T1UAvQCkANkAxgC2AKgArQDBbTsAwwDUAVIAxZmZAL4A+wD5AOUA0gDmAKcA3QDLAM8Aqlf6ANUAsgDaAK8wvQDHYR+KcQD+TthO9k7LU92TMlesAO99QgC8AMJoPGH0ANtRmWVwMFJbjGzojwlZc1b9MBFUSmPQYB2Kc2KeU/BfU3tJW4lcS1MXjqtbZl4Cdnp7oTDNYweKADByX4VySDDYX9x2+DDbei6VooJyWSlOO2UvMKFUBDAFVIwwz2tjZyqQU5D9MG1ec5FNZ5yKZo13U59ZCZBOUJkwcH2aT7+PvGx6/5NVtjDmMI2Ky1I2Zvh1MWEbbYhOpFGNbXeP0V44XHF8IYzHiP19IJAxkFVpglRzmAL/D5jfdvRW8mDzfVBTwmdxe1YwgFeLXoNlxU5FdUxr204WbUFnZVtjMIN7xGghTgl5wWOlgm9Pm3ssU+N9RGV0UXFTc5hNXzdT+F3digiWZFFDXBFOrHBrmKhfYnVqe8BnG/9eTox9OWYvir+KMWLFkEpcSlvGMM6XXnOLZc97l3U3YpVPAWVZlYBf9VukTvt1MG6QmF6X82tiT09bWFkriseWTV76Y6F6eltXMFZ2fVIwZw1PEVNYZT5RSXE2jLeRz3C5egt9YX3okGlSqVxVVx9/bjCGexFmIDC0YoBS2YhTZ1AwsmcrY9t3QIADWOtZD3leMK6QMl9xi3dY8nz7/waAsmU/kc5UaE+LU8tTV09NZ2GYLVPKeftr1GIRUXdPoWIWgfRO1ZgGZyhrzmXpjbMwUILxY6iMu47KkCB6Dol/XqdWaIxhUXifjYHzkFRQZX3aU7tf2GJ/flT/DDDkdXBTzViDUKxxZ26WZb2P1F4MU3Awh1wOfL50A24vZTl8DXJHa4tUK2OibMEwZXC6WSqYWDB7i1iKrVNDe1SJllJ1T+6CsV4DUU1f64B3Up9T9/8eU/NlrQQgME6KsFcLhD1TQGgqU0qCLJoTgF6YVFMFUrleK3cLf9JlHYygje9OS5PIbQuQAHnRU+RicV81f8xqGW4FeY8wvFbbaXWQFGnLluOESVQmghdOJlNUdn6a1H3gYUtavVNBXPZvFFM5aiFZgn1xZXV1M4nSlwB/pFNaTl+QH1cSURqEVzAcdTpOB/8LaDmKVW3xjKlRdv9cWmZrPo2KMPZwY4ysmAWW4nVZXEVS32u1lYlU5ZXcX7RsEZgIAAlkrmTBUAn/FWy7f6let3K2eYF0sFARedJbzFbgl2ld8VM6kBCJqluumBiQYFjwfWNTyFLiWTGAATAOVH16P16ce8mRzFwxMHVmblffa3SD71PyT8JOm5dgeuBOOF8KguWKbYhXMA+LcFJyW3hiU2eXY7KAiYIHcbF3IGJVi4B382tkgU4EQYo7grhXznc8iIsEOnnLboBOfgQ4ZTZdEV9cZhR37YoqdSOO/WW8h7pW4wAAAAEAAgADAAQABQAGAAcACAALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwExAUEBQgFgAWEBeAF9AX4BkgK7ArwCxgLaAtwDAAMBAwIDAwMEAwUDBgMHAwgDCgMLAwwDJwMoAzIDNgORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDowOkA6UDpgOnA6gDqQOxA7IDswO0A7UDtgO3A7gDuQO6A7sDvAO9A74DvwPAA8EDxAPFA8YDxwPIA8kEAQQQBBEEEgQTBBQEFQQWBBcEGAQZBBoEGwQcBB0EHgQfBCEEIgQjBCQEJQQmBCcEKAQpBCoEKwQsBC0ELgQvBDAEMQQyBDMENAQ1BDYENwQ5BDsEPAQ9BD4EPwRABEIEQwREBEUERgRHBEgESQRKBEsETARNBE4ETwRRIAIgAyAQIBEgEiAVIBYgGiAgICEgJSAwIDIgMyA+IEQgWiBdIQMhCSEKIRMhFiEhITshYCFhIWIhYyFkIWUhZiFnIWghaSFqIWshcCFxIXIhcyF0IXUhdiF3IXgheSF6IXshfyGQIZEhkiGTIcQhxSHGIdIh1CHmIech6CHpIfUiACICIgMiByIIIgsiESISIhkiGiIdIh4iHyIgIiciKCIpIioiKyIsIi0iLiI0IjUiPCI9IlIiYCJmImciaiJrIoIigyKGIocipSK/IxIjKSMqI6cjqCOpI6sjrCOtJGAkYSRiJGMkZCRlJGYkZyRoJGkkaiRsJG0kbiRvJHAkcSRyJHMkdCR1JHYkdyR4JHkkeiR7JHwkfSR+JH8kgCSBJIIkgySEJIUkhiSHJIgkiSSKJIskjCSNJI4kjySQJJwknSSeJJ8koCShJKIkoySkJKUkpiSnJKgkqSSqJKskrCStJK8ksCSxJLIksyS0JLUk6iUAJQElAiUDJQQlBSUGJQclCCUJJQolCyUMJQ0lDiUPJRAlESUSJRMlFCUVJRYlFyUYJRklGiUbJRwlHSUeJR8lICUhJSIlIyUkJSUlJiUnJSglKSUqJSslLCUtJS4lLyUwJTElMiUzJTQlNSU2JTclOCU5JTolOyU8JT0lPiU/JUAlQSVCJUMlRCVFJUYlRyVIJUklSiVLJVAlXiVhJWolbSVuJW8lcCVxJXIlcyWBJYIlgyWEJYUlhiWHJYgliSWKJYsljCWNJY4ljyWUJZUloCWhJaIlsiWzJbclvCW9JcElxiXHJcklyyXOJc8l4iXjJeQl5SXvJgAmASYCJgMmBSYGJg4mHCYdJh4mHyZAJkImYCZhJmImYyZkJmUmZiZnJmombSZvJ3Yndyd4J3kneid7J3wnfSd+J6ErBSsGKwcrlS6OLpAuki6TLpQumS6bLp8uoC7BLsQu0S7YLuQu6C7pLusu7S7vLvIvAC8BLwIvAy8ELwUvBi8HLwgvCS8KLwsvDC8NLw4vDy8QLxEvEi8TLxQvFS8WLxcvGC8ZLxovGy8cLx0vHi8fLyAvIS8iLyMvJC8lLyYvJy8oLykvKi8rLywvLS8uLy8vMC8xLzIvMy80LzUvNi83LzgvOi87LzwvPS8+Lz8vQC9BL0IvQy9EL0UvRi9HL0gvSS9KL0svTC9NL04vTy9QL1EvUi9TL1QvVS9WL1gvWS9aL1svXC9dL14vXy9gL2EvYi9jL2QvZS9mL2gvaS9qL2svbC9tL24vby9wL3Ivcy91L3Yvdy94L3kvei97L3wvfS9+L38vgC+BL4Ivgy+EL4Uvhi+HL4gviS+KL4svjC+NL44vjy+QL5Evki+TL5QvlS+WL5cvmS+aL5svnS+eL58voC+jL6QvpS+mL6cvqC+pL6ovqy+sL60vri+vL7AvsS+yL7MvtC+1L7Yvty+4L7kvui+7L7wvvS++L78vwC/BL8Ivwy/EL8Uvxi/HL8kvyi/LL8wvzS/OL88v0C/RL9Iv0y/UL9UwAzAEMAYwBzAIMAkwCjALMBIwEzAUMBUwHTAfMCAwNjBBMEMwRTBHMEkwXDBeMGIwbDBxMHQwdzB6MHwwfTCFMI4wkDCRMJQwlTCWMJswnDCdMJ4wpTC+MMIwxTDMMNIw6DDuMPAw8TDyMPQw9TD3MPgw+TD6MP0w/jIqMisyLDItMi4yLzIwMjEyMjIzMjQyNjI3MjgyOTI6MjsyPDI9Mj4yPzJAMkEyQjJDMlEyUjJTMlQyVTJWMlcyWDJZMloyWzKRMpIykzKUMpYymDKZMp0ynjKkMqUypjKnMqgyqTKqMqsyrDKtMq4yrzKwMv8zADMDMwUzDTMUMxUzFjMYMx4zIjMjMyYzJzMqMyszMTMzMzYzOTM7M0IzRzNJM0ozTTNOM1EzVzN7M3wzfTN+M38zhTOGM4cziDOJM44zjzOQM5YzlzOYM5wznTOeM58zoDOhM6IzozOkM6UzpjOwM7EzsjOzM8QzyDPLM8wzzTPUPU5OAU4DTghODk4QThFOFE4VThdOGE4ZTh5OIU4oTjFOMk42TjlOPE4/TkJOQ05NTk5OT05VTlZOV05YTllOXU5eTmJOcU5zToBOgk6FTolOik6OTpFOkk6UTpVOmE6ZTpxOnk6fTqBOoU6iTqVOpk6oTqtOrU6uTrBOs062TsBOwU7CTsROx07NTs5Oz07UTtdO2U7dTt5O307hTuRO7k7wTvJO9078TwBPA08JTwpPDU8OTw9PEE8cTx1PL08wTzRPNk84TzlPOk88Tz1PQ09GT0dPTk9QT1FPVk9XT1lPWk9bT11PXk9pT29PcE9zT3VPdk97T3xPg0+GT4hPik+NT49PkU+UT5ZPmE+aT51PoE+rT61Prk+vT7VPw0/ET8lPyk/NT85P0E/RT9RP10/YT9pP20/fT+BP40/kT+VP70/zT/VP9k/4T/pP/1AFUAZQDVAPUBJQFFAWUBlQGlAeUB9QIVAiUCNQJFAlUCZQKFApUCpQK1AsUC1QNlA5UEBQQlBGUEdQSFBJUE9QUFBVUFZQWlBcUGxQcFByUHRQdVB2UHhQfVCAUIVQjVCRUJRQmFCaUK1QslCzULRQtVC3UL5QxVDJUMpQzVDRUNVQ1lDYUNpQ3lDjUOVQ51DtUO5Q9FD1UPlQ+1EAUQFRAlEEUQlRElEUURVRFlEYUR9RIVEyUTdROlE7UTxRP1FAUUFRRFFFUUZRR1FKUUtRTFFOUVBRUlFUUVpRXFFiUWRRaVFqUWtRbVFuUXVRfFGAUYJRiVGKUYxRj1GQUZFRklGTUZVRllGXUZ1RoFGiUaRRpVGmUahRqVGqUatRrFGwUbFRslGzUbRRtVG2UbdRvVG+UcRRxVHGUclRy1HMUc1R1lHbUdxR3VHgUeFR5lHnUelR7FHtUfBR8VH1UfZR+FH5Uf1R/lIAUgNSBFIIUgpSC1IOUhFSFFIVUhdSJFInUipSLlIzUjdSOFI5UjpSO1JDUkRSR1JKUktSTFJPUlRSVlJbUl1SXlJjUmRSZVJpUmpSb1JwUnFSc1J0Un1Sf1KDUodSiFKJUo1SkVKSUpRSnFKjUqZSqlKrUqxSrVKvUrFStFK1UrxSvlLAUsFSw1LFUsdSyVLNUtJS11LYUttS3VLeUuBS41LkUuZS51LyUvNS9VL5UvpS/lL/UwBTAVMCUwZTCFMNUw9TEFMVUxlTGlMdUyBTIVMjUyRTKlMvUzFTM1M4UztTP1NFU0ZTR1NIU0lTTVNRU1JTU1NcU15TYFNmU2lTblNvU3FTclN0U3VTd1N4U3tTf1OCU4RTk1OWU5hTmlOgU6VTplOoU6lTrVOuU7BTslOzU7ZTw1PJU8xTzlPUU9lT21PfU+FT4lPlU+hT6VPqU+tT7FPtU+5T8VP2U/pUAVQDVAlUClQLVA5UD1QQVBtUHVQfVCBUKVQsVC1ULlQ2VDhUOVQ7VDxUPVQ+VEBUQlRGVEhUSVROVFFUX1RqVHBUcVR1VHZUd1R7VHxUgFSEVIZUilSLVI5Uj1SQVJJUnFSiVKRUpVSoVKlUq1SsVK9UslSzVLhUvFS9VL5UwFTCVMRUx1TIVMlU2FTiVOZU6FTpVO1U7lTyVPpU/VT/VQRVBlUHVQ9VEFUUVRZVLlUvVTFVM1U4VTlVPlVAVURVRVVMVVNVVlVXVVxVXVVeVWNVe1V8VX5VgFWDVYRVhlWHVYlVilWLVZhVmVWaVZxVnVWfVadVqFWpVapVq1WsVa5VsFXEVcVVx1XUVdpV3FXfVeNV5FX3VflV/VX+VgZWCVYUVhZWF1YYVhtWKVYvVjFWMlY0VjZWOFZCVkxWTlZQVlNWW1ZkVmpWa1ZsVnRWeFZ6VoBWhlaHVopWj1aUVplWoFaiVqVWrla0VrZWvFbAVsFWwlbDVshWylbOVtFW01bXVthW2lbuVvBW81b5VvpW/1cAVwNXBFcIVwlXDVcPVxNXFlcYVxxXJlcnVy1XN1c4VztXQFdCV0dXSldOV09XUFdRV1lXYVdkV2VXZldpV2pXgleIV4lXk1egV6JXo1ekV6pXsFezV8BXw1fGV8dXyFfLV9JX01fUV9ZX3FfgV+NX9Ff3V/lX/FgAWAJYBVgGWApYC1gVWBlYHVghWCRYKlgvWDBYNVg6WD1YQFhBWEpYS1hRWFJYVFhXWFhYWVhaWF5YYVhiWGlYa1hwWHJYdVh5WH5YhViTWJdYnFieWJ9YqFirWK5YslizWLhYuVi6WLtYvljBWMVYx1jKWMxY0VjTWNVY11jYWNlY3FjeWN9Y5FjlWOxY7ljvWPFY91j5WPpY+1j8WP1ZAlkKWQtZEFkVWRhZGVkbWRxZIlklWSxZLVkuWTJZN1k4WT5ZRFlHWUhZSVlOWU9ZUFlRWVNZVFlVWVdZWFlaWVtZXVlgWWJZY1llWWdZaFlpWWpZbFluWXRZeFmBWYNZhFmKWY1Zk1mWWZlZm1mdWaNZpFmlWahZrFmyWblZulm7Wb5ZxlnJWdBZ0VnTWdRZ2VnaWdxZ5VnmWehZ6lnrWfZZ+1n/WgFaA1oJWhFaGFocWh9aIFolWilaL1o1WjZaPFpAWkFaRlpJWlpaYlpqWmxaf1qSWppam1q8Wr5awVrCWslay1rMWtBa1lrXWuFa41rmWula+lr7WwlbC1sMWxZbIlsqWyxbMFsyWzZbPltAW0NbRVtRW1VbVltaW1tbXFtdW19bZFtlW2lba1twW3Fbc1t1W3pbgFuDW4Vbh1uIW4tbjVuPW5Vbl1uYW5lbm1ucW51bo1ulW6ZbsFuzW7RbtVu4W79bwFvCW8NbxFvFW8dbyVvQW9Jb01vUW9hb21vdW95b31vhW+Jb5FvlW+Zb6FvpW+tb7lvwW/Nb9Vv2W/hb+lv/XAFcAlwEXAVcBlwHXAhcCVwKXAtcDVwTXBZcGlweXCBcIlwkXChcLVw4XDlcOlw7XDxcPVw+XD9cQFxBXEZcSFxNXE5cT1xQXFFcW1xeXGBcYVxiXGRcZVxsXG5cb1x2XHlcjFyQXJFclFyhXKZcqFypXKtcrFyxXLNctly3XLhculy7XLxcvlzFXMdc2VzgXOFc6FzpXOpc7VzvXPBc9Vz6XPtc/V0HXQtdDl0UXRVdFl0XXRhdGV0aXRtdH10iXSddKV1CXUtdTF1OXVBdUl1TXVxdaV1sXW1db11zXXZdgl2EXYddi12MXZBdnV2iXaxdrl23XbhduV26XbxdvV3JXcxdzV3QXdJd013WXdtd3l3hXeNd5l3nXehd613uXfJd8130XfVd9137Xf1d/l4GXgteEV4WXhleGl4bXh1eJV4tXi9eMF4zXjZeN149XkBeQ15EXkVeR15MXk5eVF5VXldeX15hXmNeZF5yXnVedl54Xnleel57XnxefV5+Xn9egV6EXodeil6PXpVell6aXqBeq16tXrVetl64XsFewl7DXsheyV7KXtBe017WXtpe217dXt9e4F7hXuJe417oXule7F7wXvFe8170XvZe9174Xvte/F7+Xv9fAV8DXwRfCV8LXwxfDV8QXxFfE18UXxZfF18YXxtfH18hXyVfJl8nXylfLV8vXzFfNF84XzxfPl9BX0VfSF9KX0xfTl9RX1ZfV19ZX11fYV9mX2dfaV9qX2tfbF9tX3Bfc193X3lffF9/X4BfgV+CX4NfhF+HX4hfil+LX5BfkV+SX5NfmF+ZX55foF+hX6hfqV+qX61frl+zX7dfuV+8X71fzF/NX9Zf11/ZX91f3l/gX+Rf8F/xX/hf+1/9X/9gDmAPYBBgEmAVYBZgGWAbYBxgIGAhYCVgJmAoYClgK2AvYDFgOmBBYEJgQ2BGYEpgS2BNYFBgUmBVYFlgWmBdYF9gYGBiYGNgZGBlYGhgamBrYGxgbWBvYHBgdWB3YIFgg2CEYIVgiWCKYItgjGCNYJJglGCWYJdgmmCbYJ9goGCjYKZgp2CpYKpgsmCzYLRgtWC2YLhgvGC9YMZgx2DRYNNg1WDYYNpg3GDeYN9g4GDhYONg52DoYPBg8WDyYPRg9mD3YPlg+mD7YQBhAWEDYQZhCGEJYQ1hDmERYRVhGmEgYSFhJ2EsYTBhNGE3YTxhPWE+YT9hQmFEYUdhSGFKYUxhTWFOYVNhVWFYYVlhWmFdYV9hYmFjYWVhZ2FoYWthbmFvYXBhcWFzYXRhdWF2YXdhfmGCYYdhimGOYZBhkWGUYZZhmWGaYaRhp2GpYathrGGuYbJhtmG6Yb5hw2HGYcdhyGHJYcphy2HMYc1h0GHjYeZh8mH2Yfdh+GH6Yfxh/WH+Yf9iAGIIYgliCmIMYg1iDmISYhNiFGIaYhtiHWIeYh9iIWImYipiLmIvYjBiMmIzYjRiOGI7Yj9iQWJHYkhiSWJNYk5iWGJbYl5iYGJjYmhibmJ2YnlifGJ+YoJig2KEYoliimKRYpJik2KUYpZil2KYYptinGKmYqtirGKxYrViuWK7YrxivWLCYsZix2LIYsliymLMYs1iz2LQYtFi0mLTYtRi12LYYtli22LcYt1i4GLhYuxi7WLuYu9i8WLzYvVi9mL3Yv5i/2MCYwhjCWMMYxFjGWMfYydjKGMrYy9jOmM9Yz5jP2NJY0xjTWNPY1BjVWNXY1xjZ2NoY2lja2NuY3JjdmN3Y3tjgGODY4hjiWOMY45jj2OSY5ZjmGObY59joGOjY6djqWOqY6tjrGO0Y7Vju2O+Y8Bjw2PEY8ZjyWPPY9pj4WPjY+lj7mP0Y/Zj+mQGZA1kD2QTZBRkFmQXZBxkJmQoZCxkLWQ0ZDZkPmRCZE5kUWRYZGBkZ2RpZG9kdmR4ZHpkg2SIZJJkk2SVZJpknWSeZKRkpWSpZKtkrWSwZLJkuWS7ZLxkwmTFZMdkzWTOZNJk1GTYZNpk4GThZOJk42TmZOdk7GTxZPJk9GT2ZPpk/WT+ZQBlBWUYZRxlImUjZSRlKmUrZSxlNGU1ZTdlOGU7ZUVlSGVNZU5lT2VRZVVlVmVXZVhlXWVeZWJlY2VmZWxlcmV3ZXhlgmWDZYhliWWMZY5lkGWRZZdlm2WcZZ9lpGWlZadlq2WsZa9lt2XBZcNlxGXGZctlzGXSZddl2WXbZeBl4WXiZeZl52XoZexl7WXxZfpl+2YAZgJmA2YGZgdmCWYKZgxmD2YTZhVmHGYfZiRmJWYnZihmLWYuZjFmNGY1ZjtmPGY/ZkFmQ2ZEZklmS2ZPZlJmV2ZZZl1mXmZfZmJmZGZlZmZmZ2ZoZmlmb2ZwZnNmdGZ2ZnpmgWaDZoRmh2aIZolmjmaRZpZml2aYZplmnWagZqJmpmarZq5msma0ZrhmuWa8Zr5mv2bBZsRmx2bJZtZm2WbaZtxm3WbgZuZm6WbwZvJm82b1Zvdm+Wb6Zvtm/Gb9Zv5m/2cDZwtnDmcPZxRnFWcWZxdnHWceZyZnJ2ctZy5nMWc0ZzZnN2c4ZzpnPWc/Z0FnRmdJZ05nT2dRZ1NnVmdZZ1xnXmdfZ2BnYmdjZ2RnZmdqZ21nb2dwZ3Jnc2d1Z3dnfGd+Z39nhWeHZ4lni2eMZ5BnlWeaZ51noGehZ6JnpmepZ69ns2e0Z7Znt2e4Z7lnu2fAZ8FnxGfGZ8pnzmfPZ9Bn02fUZ9hn2mfdZ95n4mfkZ+dn6WfsZ+5n72fxZ/Nn9Gf1Z/pn+2f+Z/9oAmgEaAVoE2gWaBdoHmgiaCloK2gyaDRoOGg9aEBoQWhCaENoRGhGaE1oTmhQaFFoUmhTaFRoWWhcaF1oX2hjaGdodGh2aHdofmh/aIFog2iFaI1ojmiPaJNolGiXaJtonWifaKBoomimaKdoqGitaK9osGixaLNotWi2aLloumi8aMRoxmjIaMloymjLaM1oz2jSaNRo1WjYaNpo32jgaOFo42jnaO5o72jyaPlo+mkAaQFpBGkFaQhpC2kMaQ1pDmkPaRJpGWkaaRtpIWkiaSNpJWkmaShpKmkwaTRpNmk5aT1pP2lKaVNpVGlVaVlpWmlcaV1pXmlgaWFpYmloaWppa2luaW9pc2l0aXdpeGl5aXxpfmmBaYppjmmRaZRplWmYaZxpoGmnaa5psWmyabRpu2m+ab9pwWnDacdpymnMac1pzmnQadNp2Wndad5p4mnnaehp62ntafJp+Wn7af1p/2oCagVqCmoLagxqEmoTahRqF2obah5qH2oiaiNqKWoqaitqLmowajVqNmo4ajlqOmo9akRqRmpHakhqS2pYallqYWpiamZqa2pyanNqeGp+an9qgGqEao1qjmqQapdqnGqgaqJqo2qqaqxqrmqzarhqu2rBasJqw2rRatNq2mrbat5q32riauRq6Grqavpq+2sEawVrCmsSaxZrHWsfayBrI2snazJrN2s4azlrOms9a0NrR2tJa0xrTmtQa1NrVGtZa1trX2tha2ZraWtqa29rc2t4a3lre2t/a4Brg2uEa4ZriWuKa41rlWuWa5hrnmuka6prq2uva7Frsmuza7Rrt2u6a7trvGu/a8BrxWvGa8trzWvSa9Nr1mvYa99r62vsa+9r82wIbA9sE2wUbBtsI2wkbDdsOGw+bD9sQGxBbE5sUGxVbFdsWmxcbF1sXmxfbGBsYmxobGpsb2xwbHJsc2x9bH5sgWyCbINshmyIbIxsjWyQbJJsk2yWbJlsmmybbKFsomyrbK5ssWyzbLhsuWy6bLxsvWy+bL9sxGzFbMlsymzMbNNs12zZbNps22zdbOFs4mzjbOVs6mzvbPBs8WzzbQRtDG0SbRdtGW0bbR5tH20lbSltKm0rbTJtM201bTZtOG09bT5tRG1FbVltWm1cbWNtZG1mbWltam1sbW5tb210bXhteW2FbYdtjG2ObZNtlW2WbZltm22cbaxtr22ybbVtuG28bcBtxW3Gbcdty23Mbc9t0W3SbdVt2G3Zbd5t4W3kbeZt6G3qbett7G3ubfJt8231bfdt+G35bfpt+238bgduCG4JbgpuC24TbhVuGW4abhtuHW4fbiBuIW4jbiRuJW4mbiduKW4rbixuLW4ubjhuOW46bjxuPm5DbkpuTW5OblZuWG5bblxuX25nbmtubm5vbn5uf26Cboxuj26YbpxunW6fbqJupW6qbq9usm62brduum69br9uwm7EbsVuyW7Lbsxu0W7TbtRu1W7dbt5u7G7vbvJu9G73bvhu/m7/bwFvAm8GbwlvD28RbxNvFW8gbyJvI28rbyxvMW8ybzhvPm8/b0FvRW9Rb1RvWG9bb1xvX29kb2ZvbW9ub29vcG90b3hvem98b4BvgW+Cb4Rvhm+Ib45vkW+Xb6Fvo2+kb6pvsW+zb7VvuW/Ab8Fvwm/Db8Zv1G/Vb9hv22/fb+Bv4W/kb+tv7G/ub+9v8W/zb/Vv9m/6b/5wAXAFcAZwB3AJcAtwD3ARcBVwGHAacBtwHXAecB9wJnAncChwLHAwcDJwPnBMcFFwWHBvcHBweHB8cH1whXCJcIpwjnCScJlwq3CscK1wrnCvcLNwuHC7cMhwy3DPcNlw3XDfcPFw+XD9cQRxCXEPcRRxGXEacRxxJnEwcTxxRnFHcUlxTHFOcVVxVnFZcVxxYnFkcWVxZnFpcWxxbnF9cYRxiHGKcY9xlHGVcZlxn3GocaxxuXG+ccFxw3HIcclxznHQcdJx1HHVcddx33HgceVx5nHncexx7XHucfVx+XH7cfxx/nH/cgZyDXIQchtyKHIqcixyLXIwcjJyNXI2cjpyO3I8cj1yPnI/ckByRnJLckxyUnJYcllyW3Jdcl9yYXJicmdycnJ0cn1yfnKAcoFygnKHcpJylnKgcqJyp3Kscq9ysXKycrlyvnLCcsNyxHLGcs5y0HLSctdy2XLbcuBy4XLiculy7HLtcvdy+HL5cvxy/XMKcxZzF3MbcxxzHXMfcyRzJXMpcypzK3Mucy9zNHM2czdzPnM/c0RzRXNOc09zV3Njc2hzanNwc3JzdXN3c3hzenN7c4Rzh3OJc5ZzqXOyc7Nzu3O9c8JzyHPJc8pzzXPOc9Jz1nPec+Bz43Plc+pz7XPuc/Fz9XP4dAV0B3QJdCJ0JXQmdCl0KnQudDJ0M3Q0dDV0NnQ6dD90QXRVdFl0WnRbdFx0XnRfdGB0Y3RkdGl0anRvdHB0c3R2dH50g3SJdIt0nnSfdKJ0p3S9dMp0z3TUdNx04HTidON05nTndOl07nTwdPF08nT2dPd0+HUBdQN1BHUFdQx1DXUOdRF1E3UVdRh1GnUcdR51JXUmdSt1LHUvdTJ1OHU8dUR1RnVJdUp1TXVPdVF1VHVadVt1XHVddWB1YnVkdWV1ZnVndWl1a3VtdW91c3V0dXZ1d3V4dX91gnWGdYd1iXWKdYt1jnWPdZF1lHWadZ11o3Wldat1sXWydbN1tXW4dbl1vHW9db51wnXDdcV1x3XKdc110nXUddV12HXZddt13nXideN16XXydfN19HX6dfx1/nX/dgF2CXYLdg12H3YgdiF2InYkdid2MHY0djt2QnZGdkd2SHZMdlJ2VnZYdlx2YXZidmd2aHZpdmp2bHZwdnJ2dnZ4dnx2gHaCdoN2hnaHdoh2i3aOdpB2k3aWdpl2mnabdpx2nnamdq52sHa0drd2uHa5drp2v3bCdsN2xnbIdsp2zXbSdtZ213bbdtx23nbfduF243bkduV253bqdvJ2+3b+dwF3BHcHdwh3CXcMdxt3HnckdyV3KXc3dzh3OndGd0d3Wndbd2F3Yndjd2V3Zndod2t3eXd+d393i3eOd5F3nnegd6V3rHetd7B3s3e5d7t3vHe9d793x3fNd9d32nfbd9x34nfjd+d36Xfud+93/HgCeAx4EngUeBV4IHgheCV4JngneDJ4NHg6eD94RXhOeF14ZHhreGx4b3hyeHR4enh8eIF4hniHeIx4jXiOeJF4k3iVeJd4mnijeKd4qXiqeK94tXi8eL54wXjFeMZ4ynjLeNB40XjUeNp453joeOx473j0eP15AXkHeQ55EXkSeRl5JnkqeSt5LHkweTx5QHlBeUd5SHlJeVB5U3lVeVZ5V3laeV15X3lgeWJ5ZXloeW15d3l6eX95gHmEeYV5inmNeY55lHmbeZ15pnmneap5rnmwebF5s3m5ebp5vXm+eb95wHnJedV52HnfeeF55Hnmeed56XnsefB6AHoIeg16FHoXehh6GXoaehx6H3ogejF6Mno3ejt6PHo9ej56QHpCekN6RnpJek16TnpPelB6V3phemJ6Y3ppemt6cHp0enZ6eXp9en96gXqDeoR6iHqSepN6lXqWepd6mHqfeql6qnqueq96sHq2erp6v3rDesR6xXrHesh6ynrNes960XrSetN61XrZetp63Hrdet964XrieuN65Xrmeud66nrreu1673rwevZ6+Hr5evp6/3sCewR7BnsIewp7C3sPexh7GXsbex57IHsleyZ7KHs1ezZ7OXtFe0Z7SHtLe0x7TXtPe1B7UXtSe117ZXtne2x7bntwe3F7dHt1e3p7hnuHe4t7jXuPe5J7lHuVe5h7mXuae5x7nXuee597qnute7F7tHu4e8F7xnvHe8t7zHvPe9174Hvke+V75nvpe+1783v2e/d8AHwHfBF8EnwTfBR8F3wefB98I3wnfCp8K3w3fDh8PXw+fD98QHxDfEx8TXxPfFB8VHxWfFh8X3xgfGR8ZXxsfHN8dXx+fIF8gnyDfIl8i3yNfJB8knyVfJd8mHybfJ98oXyifKR8pXynfKh8q3ytfK58sXyyfLN8uXy9fMB8wnzFfMp8znzSfNZ82HzcfN5833zgfOJ853zvfPJ89Hz2fPh8+nz+fQB9An0FfQZ9Cn0LfQ19EH0UfRV9F30YfRl9Gn0bfRx9IX0rfSx9Ln0vfTJ9M301fTp9P31DfUV9Rn1IfUt9TH1OfU99Vn1bfV59Yn1mfWh9bn1yfXN9dX12fXl9fX2JfY99k32ZfZt9nH2ffaB9on2jfat9rH2tfa59r32wfbF9sn20fbV9t326fbt9vX2+fb99x33Kfct9z33RfdJ91X3Wfdh93H3dfd594X3kfel97H3vffJ99H37fgF+BH4Ffgl+Cn4LfhJ+G34efh9+IX4ifiN+Jn4rfi5+MX4yfjV+N345fjp+O349fj5+QX5DfkZ+Sn5Lfk1+Un5VflZ+WX5dfl5+YX5mfmd+aX5rfm1+cH55fnt+fH59fn9+gn6Dfoh+iX6Kfox+jn6PfpB+kn6TfpR+ln6bfpx/Nn84fzp/RX9Hf0x/TX9Of1B/UX9Uf1V/WH9gf2d/aH9pf2p/a39wf3J/dX93f3h/eX+Cf4N/hX+Gf4d/iH+Kf4x/lH+af51/nn+jf6h/rn+vf7J/tn+4f7l/vX/Bf8V/xn/Kf9R/1X/gf+F/5n/pf+t/8H/zf/l/+3/8gACABIAGgAuADIAQgBKAFYAXgBiAGYAcgCGAKIAzgDaAO4A9gD+ARoBKgFKAVoBYgFqAX4BhgGKAaIBvgHCAcoBzgHSAdoB5gH2AfoB/gISAhYCGgIeAi4CMgJOAloCYgJqAm4CdgKGAooClgKmAqoCsgK2Ar4CxgLSAuoDDgMSAxoDMgM6A1oDZgNqA24DdgN6A4YDkgOWA74DxgPSA+ID8gQWBBoEHgQiBCYEKgRqBG4EjgSmBL4ExgTOBOYE+gUaBS4FQgVGBU4FUgVWBX4FlgWaBa4FugXCBcYF0gXiBeYF6gX+BgIGCgYOBiIGKgY+Bk4GVgZqBnIGdgaCBo4GkgaiBqYGwgbOBtYG4gbqBvYG+gb+BwIHCgcaByIHJgc2B0YHTgdiB2YHagd+B4IHjgeWB54Hoge2B+oH7gfyB/oIBggKCBYIIggmCCoIMgg2CDoIQghKCFoIYghuCHIIegh+CKYIqgiuCLoIzgjWCNoI3gjiCOYJAgkeCWIJZglqCXYJfgmKCZIJmgmiCaoJrgm6CcYJ2gneCeIJ+gouCjYKSgpmCnYKfgqWCpoKrgqyCrYKvgrOCuYK7gr2CxYLRgtKC04LUgteC2YLbgtyC3oLfguGC44LmgueC64LzgvSC+YL6gvuDAYMCgwODBIMFgwaDCYMOgxaDF4MYgxyDKIMrgy+DMYMygzSDNYM2gziDQINFg0aDSYNKg0+DUINSg1iDYoNzg3WDd4N7g3yDf4OFg4eDiYOKg46Dk4OWg5qDnoOfg6CDooOog6qDq4Oxg7WDvYPBg8WDx4PKg8yDzoPTg9aD2IPcg9+D4IPpg+uD8IPxg/KD9IP2g/eD+4P9hAOEBIQHhAqEC4QMhA2EDoQThCCEIoQphCqELIQxhDWEOIQ8hEaESIROhFuEYYRihGOEZoRphGuEbIRthG6Eb4RxhHWEd4R5hHqEgoSEhIuEkISUhJmEnISfhKGEsoS0hLiEuYS7hLyEv4TBhMSExoTJhMqEy4TNhNCE0YTWhNmE2oTchOyE7oT0hPyE/4UAhQaFEYUThRSFFYUXhRiFGoUhhSOFJoUshS2FNYU9hT6FQIVBhUOFSIVJhUqFS4VOhVOFVYVXhViFWYVahWOFaIVphWqFa4VthXeFfoWAhYSFh4WIhYqFkIWRhZSFl4WZhZuFnIWkhaaFqIWphaqFq4Wsha6Fr4WwhbmFuoXBhcmFzYXPhdCF1YXchd2F5IXlhemF6oX3hfmF+oX7hf6GAoYGhgeGCoYLhhOGFoYXhiKGLYYvhjCGP4ZNhk6GUIZUhlWGWoZchl6GX4ZnhmuGcYZ5hnuGioaLhoyGk4aVhqOGpIaphqqGq4avhrCGtobEhsaGx4bJhsuGzYbOhtSG2Ybbht6G34bkhumG7Ibthu6G74b5hvuG/ocAhwKHA4cGhwiHCYcKhw2HEYcShxiHGocchyWHKYc0hzeHO4c/h0mHS4dMh06HU4dVh1eHWYdfh2CHY4dmh2iHaoduh3SHdod4h3+HgoeNh5+Hooerh6+Hs4e7h72HwIfEh8aHx4fLh9CH0ofgh+yH74fyh/aH94f5h/uH/ogFiAeIDYgOiA+IEYgViBaIH4ghiCKII4gniDGINog5iDuIQIhCiESIRohNiFKIWYhbiF2IXohhiGKIY4hriHCIcoh1iHeIfYh+iH+IgYiCiIiIjYiSiJaIl4iZiJ6IooikiKuIroiwiLGItIi1iLeIv4jBiMKIw4jEiMWIz4jUiNWI2IjZiNyI3YjfiOGI6IjyiPOI9Ij1iPiI+Yj8iP6JAokEiQeJCokMiRCJEokTiRyJHYkeiSWJKokriTaJOIk7iUGJQ4lEiUyJTYlWiV6JX4lgiWSJZolqiW2Jb4lyiXSJd4l+iYOJhomHiYiJiomTiZeJmImaiaGJpompiayJr4myibOJuom9ib+JwInaidyJ3YnmieeJ9In4igKKA4oKigyKDooQihKKE4oWihuKHYofiiOKJYozijSKNoo3ijqKPIpBikaKSIpQilGKUopUiluKXopgimKKY4ppimuKbIpuinCKcop5inyKhIqFioeKiYqMipGKk4qVipiKmoqgiqGKo4qkiqWKpoqniqiKrIqyirmKvIq+isKKxIrMis2Kz4rSitaK2orbityK3orfiuCK4YriiuSK5orniu2K7orxivOK9or3iviK+or+iwCLAYsCiwSLB4sMiw6LEIsUixaLF4sZixqLHYsgiyGLJosoiyuLLIszizmLPotBi0mLTItOi0+LU4tWi1qLW4tci1+LZotri2yLb4txi3KLdIt9i3+Lg4uKi4yLjouQi5KLk4uWi5mLmow3jDqMP4xBjEaMSIxKjEyMToxQjFWMWoxijGqMa4xsjHiMeYx6jHyMgoyFjImMioyMjI2MjoyUjJiMnYyejKGMooynjKiMqoyrjK2MroyvjLCMsoyzjLSMtoy4jLyMvYy/jMCMwYzCjMOMxIzIjMqMzYzOjNGM04zajNuM3IzejOCM4ozjjOSM5oztjPCM9Iz7jP2NBI0FjQeNCI0KjQuNDY0PjRKNE40UjRaNZI1mjWeNa41tjXCNcY1zjXSNdo2BjZmNo42ojbqNvo3CjcuNzI3PjdaN2o3bjd2N343hjeON6I3qjeuN8431jfyN/44IjgmOCo4PjhCOHY4ejh+OKo4wjjSONY5CjkSOR45IjkmOSo5MjlCOVY5Zjl+OYI5jjmSOco50jnaOfI6BjoSOhY6HjoqOi46NjpGOk46UjpmOoY6qjqyOr46wjrGOvo7AjsWOxo7IjsuOzI7Njs+O0o7bjt+O4o7jjuuO+I77jvyO/o8DjwWPCo8MjxKPE48UjxWPGY8bjxyPHY8fjyaPKY8qjy+PM484jzmPO48+jz+PQo9Ej0WPRo9Jj0yPTY9Oj1ePXI9fj2GPYo9jj2SPm4+cj56Pn4+jj6ePqI+tj6+PsI+xj7KPt4+6j7uPv4/Cj8SPxY/Oj9qP4o/lj+mP6o/rj+2P74/wj/SP94/4j/mP+pADkAWQBpALkA2QDpAPkBGQE5AVkBaQF5AZkB2QHpAikCeQLpA1kDaQOJA5kDyQPpBBkEKQRZBHkEmQTZBPkFCQUZBSkFaQWJBZkFyQXpBhkGOQZZBnkGiQbZBukG+QcpB1kHaQd5B6kHyQfZB/kICQgZCCkIOQhJCHkImQipCPkJGQo5CmkKiQqpCvkLGQtZC4kMGQypDOkNuQ3pDhkOKQ5JDtkPWQ95ECkRKRFZEnkS2RMJEykUmRSpFLkUyRTpFSkVSRVpFYkWKRY5FlkWmRapFskXKRc5F1kXeReJGCkYeRiZGLkY2RkJGSkZeRnJGikaSRqpGrkayRr5GxkbSRtZG4kbqRwZHGkceRyJHJkcuR0JHWkdeR2JHakduR3JHdkd6R35HhkeOR5JHlkeaR55Htke6R9ZH2kfyR/5IGkgqSDZIOkhCSEZIUkhWSHpIpkiySNJI3kjmSOpI8kj+SQJJEkkWSSJJJkkuSTpJQklGSV5JZklqSW5JekmKSZJJmkmeScZJ3kniSfpKAkoOShZKIkpGSk5KVkpaSmJKakpuSnJKnkq2St5K5ks+S0JLSktOS1ZLXktmS4JLkkueS6ZLqku2S8pLzkviS+ZL6kvuS/JL/kwKTBpMPkxCTGJMZkxqTHZMekyCTIZMikyOTJZMmkyiTK5Msky6TL5M1kzqTO5NEk0iTTZNUk1aTV5Nbk1yTYJNsk26TcJN1k3yTfpOMk5STlpOXk5qTpJOnk6yTrZOuk7CTuZPDk8aT0JPRk9aT15PYk92T3pPhk+ST5ZPok/iUA5QHlBCUE5QUlBiUGZQalCGUK5QxlDWUNpQ4lDqUQZRElEWUSJRRlFKUU5RalFuUXpRglGKUapRwlHWUd5R8lH2UfpR/lIGVgpWDlYeVipWPlZGVkpWUlZaVmJWZlaCVo5WklaWVp5Wola2VspW5lbuVvJW+lcOVx5XKlcyVzZXUldWV1pXYleGV4pXllhyWIZYoliqWLpYvljKWO5Y/lkCWQpZElkuWTJZPlluWXJZdll6WX5ZilmOWZZZmlmqWbJZwlnKWc5Z2lneWeJZ6ln2WhZaGloiWipaLlo2WjpaPlpSWlZaXlpiWmZaclp2WoJajlqeWqJaqlq+WsJaxlrKWtJa2lreWuJa5lruWvJbAlsGWxJbFlseWyZbLlsyWzZbOltGW1ZbWltmW25bcluiW6pbrlvCW8pb2lveW+ZcElwaXB5cIlwqXDZcOlw+XEZcTlxaXGZcclx6XJJcnlyqXMJcylzOXOJc5lzuXPZc+l0KXQ5dEl0aXSJdJl02XT5dRl1KXVpdZl1yXYZdkl2aXaJdrl22XdJd5l3qXfJeBl4SXhZeGl4uXjZePl5CXmJecl6CXo5eml6iXq5etl7OXtJfDl8aXyJfLl9OX3Jftl+6X8pf1l/aX+5f/mAGYA5gMmA+YEJgRmBKYE5gXmBqYIZgkmCyYMJg0mDeYOJg7mDyYPZhGmEuYTphPmFWYV5hamFuYZZhnmGuYb5hwmHGYc5h0mKqYr5ixmLaYw5jEmMaY25jcmOKY6ZjrmO2Y7pjvmPKY9Jj8mP2Y/pkDmQWZCZkKmQyZEJkSmROZFJkYmR2ZHpkgmSGZJJknmSiZLJkumT2ZPplCmUWZSZlLmUyZUJlRmVKZVZlXmZaZl5mYmZ6ZpZmomayZrZmumbOZtJm8mcGZxJnFmcaZyJnQmdGZ0pnVmdiZ25ndmeKZ7ZnumfGZ8pn4mfuZ/5oBmgWaDpoPmhKaGZoomiuaMJo3mj6aQJpCmkOaRZpNmk6aUppVmleaWppbml+aYppkmmWaaZpqmmuarZqwmriavJrAmsSaz5rRmtOa2Zrcmt6a35rimuOa5prqmuua7Zrumu+a8Zr0mvea+5sGmxibGpsfmyKbI5slmyebKJspmyqbLpsvmzGbMps7mzybQZtCm0ObRJtFm02bTptPm1GbVJtYm1qbb5tym3SbdZuDm46bj5uRm5Kbk5uWm5ebn5ugm6ibqpurm62brpuxm7SbuZu7m8CbxpvJm8qbz5vRm9Kb1JvWm9ub4Zvim+Ob5Jvom/Cb8Zvym/WcAJwEnAacCJwJnAqcDJwNnBCcEpwTnBScFZwbnCGcJJwlnC2cLpwvnDCcMpw5nDqcO5w+nEacR5xInFKcV5xanGCcZ5x2nHic5ZznnOmc65zsnPCc85z0nPadA50GnQedCJ0JnQ6dEp0VnRudH50jnSadKJ0qnSudLJ07nT6dP51BnUSdRp1InVCdUZ1ZnVydXZ1enWCdYZ1knWudbJ1vnXCdcp16nYediZ2PnZqdpJ2pnaudr52ynbSduJ26nbudwZ3CncSdxp3PndOd153Zne2d753ynfid+Z36nf2eGZ4anhueHp51nnieeZ58nn2ef56Bnoiei56MnpGekp6TnpWel56dnp+epZ6mnqmeqp6tnrWeuJ65nrqeu568nr6ev57EnsyezZ7Ons+e0J7RntKe1J7Yntme257cnt2e3p7gnuWe6J7vnvSe9p73nvme+578nv2fB58Inw6fE58VnyCfIZ87nz6fSp9Ln06fT59Sn1SfX59gn2GfYp9jn2afZ59qn2yfcp92n3eflZ+cn52foPmS+ZP5mfnD+ez6DvoP+hD6EvoT+hT6FvoX+hj6Gfoa+hv6HPod+h76H/og+iH6Ivoj+iX6Jvon+ij6Kfoq+iv6LPot+jb6RvpK+mr7AfsC/hD+Ef4S/hn+MP4x/jL+M/41/jb+N/44/jn+Ov47/jz+Pf4+/j/+QP5B/kL+Q/5E/kf+SP8C/wP/BP8F/wf/Cv8N/w7/EP8R/xL/E/8U/xb/F/8Y/xn/G/8c/x3/IP8h/yL/I/8k/yX/Jv8n/yj/Kf8q/yv/LP8t/y7/L/8w/zH/Mv8z/zT/Nf82/zf/OP85/zr/O/88/z3/Pv8//0D/Qf9C/0P/RP9F/0b/R/9I/0n/Sv9L/0z/Tf9O/0//UP9R/1L/U/9U/1X/Vv9X/1j/Wf9a/1v/Xf9h/2L/Y/9k/2X/Zv9n/2j/af9q/2v/bP9t/27/b/9w/3H/cv9z/3T/df92/3f/eP95/3r/e/98/33/fv9//4D/gf+C/4P/hP+F/4b/h/+I/4n/iv+L/4z/jf+O/4//kP+R/5L/lP+V/5b/l/+Y/5n/mv+b/5z/nf+e/5//4P/h/+L/4//k/+X/6Ng83QDYRt4a2FDf0NhW3HTYY9zd2GPe9th+3A/YftwY2H7cd9h+3ITYftzT2H7c3Nh+3O3Yft0g",
            "dynamic": true
        }
    }, {
        "source": "https://use.typekit.net/af/d4ab54/00000000000000007735aaec/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 35683,
        "dynamic": true,
        "family": "dnp-shuei-gothic-gin-std",
        "descriptors": {
            "weight": "600",
            "display": "auto",
            "featureSettings": "\"ALL \"",
            "subset": "",
            "order": "AAEAACBBAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF9OADACAKkAIHUoMAEwbjCkZeUwrzD8MPNOujDITgpOLVQIMLkwwzBZMFcwZzCSMOowizBmMOkwRFuaMEwA4DDXZbAwfk7lML8wbzC3MEswazCiZbkw6zBqMNUwXzDsMEowjDBVME9OCzBoMLAwZDBbUWVPGlVPWDSJi4mBT38wVGcsMOAwTTD7MOEwrTCJ/wgw7f8JMIow0DCrWSdSKTDJAKAwszCIMIIw4zC1doQwYDBCT1xRaDDAMFMwuDBIMI8wUTC7ZkKQeDCBMAxRbI2FMN1SBjANU+9nADB/fQQwk2b0UfpiEDBGMGP/AWcIgeowx/8flZMw3pDoMF1STTBhMMtUDDDnYMWITGzVdntlmXUfeT6ABVKgWDEwxnJ5MIR0BnEhMKZUwTBplYt27mEPICZbUDDWgP1S1f8aMNFO1lGFVt5lhzDTZjYw5ZAaXnQwqFThMHNT1iAUZDowqU6GixuJj1+MMKogHWshdx8w2jCjihhOKjBYIBxj0ohoANeM6k4Nii11O2cfMN9oAwDnX8VnCVkaieMgGTC6UAua2FvnMLZ6y5V3MMF35ZZQl2IAu2nYVzAweGBpAOpbtpHRUxYA8U6LXmKKFwCuXw9fFQAKmqhiS4ECW1RbomAqYkB+ajCniaeTS2fRfSJPtoYaUEOPrnXwj+ZVRl/DAKIvmGpfYCeWdSATMOJPU2P1ICKZ34qNbnJsF4rrfbgkay90gzlo153mf6FUDS+iYSh1SyJhUMJS+IStVBFZfX5aL1cDw4qCeeNOynPAkcAA6XcmT5KRGTI1ZaEhKy+caZtOxmTvUUiQS5bGY9ZjepAhMBCM+iSunyx7M40QT/6FH4b4nrR/X2GYaW0wWlKbMNwweVwPAOMhIjDKeLoA/E/dAOEwdlu5IBggOU/hXFMA030wMAAAxACjAKVSJZhMaRxyaZabaX0A9ne2MLGXcV6mX5dRhgDYMMRXKADrbnYgOwDoALcAyH+OAPSRzV7PAORaGlWeWRYAtADWV38A84Mjip5Qz1IHeTqW+wCrAO1sQmw0ALBz/gDJU9dbnwFTTogAugDiAMoAoQD4IDow1E7taEgA3AD/AKwAzFIdXeUA3wDRXpcA8DDvUeqQAQDej/2M/ACmAL9b/jDZkCMAtWMBTuMAsVnLALhmDgDNAMAA9QD6MKwA7iAeANAAzgD9AOwA9wCzAPJRKgC5T1UAvQCkANkAxgC2AKgArQDBbTsAwwDUAVIAxZmZAL4A+wD5AOUA0gDmAKcA3QDLAM8Aqlf6ANUAsgDaAK8wvQDHYR+KcQD+TthO9k7LU92TMlesAO99QgC8AMJoPGH0ANtRmWVwMFJbjGzojwlZc1b9MBFUSmPQYB2Kc2KeU/BfU3tJW4lcS1MXjqtbZl4Cdnp7oTDNYweKADByX4VySDDYX9x2+DDbei6VooJyWSlOO2UvMKFUBDAFVIwwz2tjZyqQU5D9MG1ec5FNZ5yKZo13U59ZCZBOUJkwcH2aT7+PvGx6/5NVtjDmMI2Ky1I2Zvh1MWEbbYhOpFGNbXeP0V44XHF8IYzHiP19IJAxkFVpglRzmAL/D5jfdvRW8mDzfVBTwmdxe1YwgFeLXoNlxU5FdUxr204WbUFnZVtjMIN7xGghTgl5wWOlgm9Pm3ssU+N9RGV0UXFTc5hNXzdT+F3digiWZFFDXBFOrHBrmKhfYnVqe8BnG/9eTox9OWYvir+KMWLFkEpcSlvGMM6XXnOLZc97l3U3YpVPAWVZlYBf9VukTvt1MG6QmF6X82tiT09bWFkriseWTV76Y6F6eltXMFZ2fVIwZw1PEVNYZT5RSXE2jLeRz3C5egt9YX3okGlSqVxVVx9/bjCGexFmIDC0YoBS2YhTZ1AwsmcrY9t3QIADWOtZD3leMK6QMl9xi3dY8nz7/waAsmU/kc5UaE+LU8tTV09NZ2GYLVPKeftr1GIRUXdPoWIWgfRO1ZgGZyhrzmXpjbMwUILxY6iMu47KkCB6Dol/XqdWaIxhUXifjYHzkFRQZX3aU7tf2GJ/flT/DDDkdXBTzViDUKxxZ26WZb2P1F4MU3Awh1wOfL50A24vZTl8DXJHa4tUK2OibMEwZXC6WSqYWDB7i1iKrVNDe1SJllJ1T+6CsV4DUU1f64B3Up9T9/8eU/NlrQQgME6KsFcLhD1TQGgqU0qCLJoTgF6YVFMFUrleK3cLf9JlHYygje9OS5PIbQuQAHnRU+RicV81f8xqGW4FeY8wvFbbaXWQFGnLluOESVQmghdOJlNUdn6a1H3gYUtavVNBXPZvFFM5aiFZgn1xZXV1M4nSlwB/pFNaTl+QH1cSURqEVzAcdTpOB/8LaDmKVW3xjKlRdv9cWmZrPo2KMPZwY4ysmAWW4nVZXEVS32u1lYlU5ZXcX7RsEZgIAAlkrmTBUAn/FWy7f6let3K2eYF0sFARedJbzFbgl2ld8VM6kBCJqluumBiQYFjwfWNTyFLiWTGAATAOVH16P16ce8mRzFwxMHVmblffa3SD71PyT8JOm5dgeuBOOF8KguWKbYhXMA+LcFJyW3hiU2eXY7KAiYIHcbF3IGJVi4B382tkgU4EQYo7grhXznc8iIsEOnnLboBOfgQ4ZTZdEV9cZhR37YoqdSOO/WW8h7pW4wAAAAEAAgADAAQABQAGAAcACAALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwExAUEBQgFgAWEBeAF9AX4BkgK7ArwCxgLaAtwDAAMBAwIDAwMEAwUDBgMHAwgDCgMLAwwDJwMoAzIDNgORA5IDkwOUA5UDlgOXA5gDmQOaA5sDnAOdA54DnwOgA6EDowOkA6UDpgOnA6gDqQOxA7IDswO0A7UDtgO3A7gDuQO6A7sDvAO9A74DvwPAA8EDxAPFA8YDxwPIA8kEAQQQBBEEEgQTBBQEFQQWBBcEGAQZBBoEGwQcBB0EHgQfBCEEIgQjBCQEJQQmBCcEKAQpBCoEKwQsBC0ELgQvBDAEMQQyBDMENAQ1BDYENwQ5BDsEPAQ9BD4EPwRABEIEQwREBEUERgRHBEgESQRKBEsETARNBE4ETwRRIAIgAyAQIBEgEiAVIBYgGiAgICEgJSAwIDIgMyA+IEQgWiBdIQMhCSEKIRMhFiEhITshYCFhIWIhYyFkIWUhZiFnIWghaSFqIWshcCFxIXIhcyF0IXUhdiF3IXgheSF6IXshfyGQIZEhkiGTIcQhxSHGIdIh1CHmIech6CHpIfUiACICIgMiByIIIgsiESISIhkiGiIdIh4iHyIgIiciKCIpIioiKyIsIi0iLiI0IjUiPCI9IlIiYCJmImciaiJrIoIigyKGIocipSK/IxIjKSMqI6cjqCOpI6sjrCOtJGAkYSRiJGMkZCRlJGYkZyRoJGkkaiRsJG0kbiRvJHAkcSRyJHMkdCR1JHYkdyR4JHkkeiR7JHwkfSR+JH8kgCSBJIIkgySEJIUkhiSHJIgkiSSKJIskjCSNJI4kjySQJJwknSSeJJ8koCShJKIkoySkJKUkpiSnJKgkqSSqJKskrCStJK8ksCSxJLIksyS0JLUk6iUAJQElAiUDJQQlBSUGJQclCCUJJQolCyUMJQ0lDiUPJRAlESUSJRMlFCUVJRYlFyUYJRklGiUbJRwlHSUeJR8lICUhJSIlIyUkJSUlJiUnJSglKSUqJSslLCUtJS4lLyUwJTElMiUzJTQlNSU2JTclOCU5JTolOyU8JT0lPiU/JUAlQSVCJUMlRCVFJUYlRyVIJUklSiVLJVAlXiVhJWolbSVuJW8lcCVxJXIlcyWBJYIlgyWEJYUlhiWHJYgliSWKJYsljCWNJY4ljyWUJZUloCWhJaIlsiWzJbclvCW9JcElxiXHJcklyyXOJc8l4iXjJeQl5SXvJgAmASYCJgMmBSYGJg4mHCYdJh4mHyZAJkImYCZhJmImYyZkJmUmZiZnJmombSZvJ3Yndyd4J3kneid7J3wnfSd+J6ErBSsGKwcrlS6OLpAuki6TLpQumS6bLp8uoC7BLsQu0S7YLuQu6C7pLusu7S7vLvIvAC8BLwIvAy8ELwUvBi8HLwgvCS8KLwsvDC8NLw4vDy8QLxEvEi8TLxQvFS8WLxcvGC8ZLxovGy8cLx0vHi8fLyAvIS8iLyMvJC8lLyYvJy8oLykvKi8rLywvLS8uLy8vMC8xLzIvMy80LzUvNi83LzgvOi87LzwvPS8+Lz8vQC9BL0IvQy9EL0UvRi9HL0gvSS9KL0svTC9NL04vTy9QL1EvUi9TL1QvVS9WL1gvWS9aL1svXC9dL14vXy9gL2EvYi9jL2QvZS9mL2gvaS9qL2svbC9tL24vby9wL3Ivcy91L3Yvdy94L3kvei97L3wvfS9+L38vgC+BL4Ivgy+EL4Uvhi+HL4gviS+KL4svjC+NL44vjy+QL5Evki+TL5QvlS+WL5cvmS+aL5svnS+eL58voC+jL6QvpS+mL6cvqC+pL6ovqy+sL60vri+vL7AvsS+yL7MvtC+1L7Yvty+4L7kvui+7L7wvvS++L78vwC/BL8Ivwy/EL8Uvxi/HL8kvyi/LL8wvzS/OL88v0C/RL9Iv0y/UL9UwAzAEMAYwBzAIMAkwCjALMBIwEzAUMBUwHTAfMCAwNjBBMEMwRTBHMEkwXDBeMGIwbDBxMHQwdzB6MHwwfTCFMI4wkDCRMJQwlTCWMJswnDCdMJ4wpTC+MMIwxTDMMNIw6DDuMPAw8TDyMPQw9TD3MPgw+TD6MP0w/jIqMisyLDItMi4yLzIwMjEyMjIzMjQyNjI3MjgyOTI6MjsyPDI9Mj4yPzJAMkEyQjJDMlEyUjJTMlQyVTJWMlcyWDJZMloyWzKRMpIykzKUMpYymDKZMp0ynjKkMqUypjKnMqgyqTKqMqsyrDKtMq4yrzKwMv8zADMDMwUzDTMUMxUzFjMYMx4zIjMjMyYzJzMqMyszMTMzMzYzOTM7M0IzRzNJM0ozTTNOM1EzVzN7M3wzfTN+M38zhTOGM4cziDOJM44zjzOQM5YzlzOYM5wznTOeM58zoDOhM6IzozOkM6UzpjOwM7EzsjOzM8QzyDPLM8wzzTPUPU5OAU4DTghODk4QThFOFE4VThdOGE4ZTh5OIU4oTjFOMk42TjlOPE4/TkJOQ05NTk5OT05VTlZOV05YTllOXU5eTmJOcU5zToBOgk6FTolOik6OTpFOkk6UTpVOmE6ZTpxOnk6fTqBOoU6iTqVOpk6oTqtOrU6uTrBOs062TsBOwU7CTsROx07NTs5Oz07UTtdO2U7dTt5O307hTuRO7k7wTvJO9078TwBPA08JTwpPDU8OTw9PEE8cTx1PL08wTzRPNk84TzlPOk88Tz1PQ09GT0dPTk9QT1FPVk9XT1lPWk9bT11PXk9pT29PcE9zT3VPdk97T3xPg0+GT4hPik+NT49PkU+UT5ZPmE+aT51PoE+rT61Prk+vT7VPw0/ET8lPyk/NT85P0E/RT9RP10/YT9pP20/fT+BP40/kT+VP70/zT/VP9k/4T/pP/1AFUAZQDVAPUBJQFFAWUBlQGlAeUB9QIVAiUCNQJFAlUCZQKFApUCpQK1AsUC1QNlA5UEBQQlBGUEdQSFBJUE9QUFBVUFZQWlBcUGxQcFByUHRQdVB2UHhQfVCAUIVQjVCRUJRQmFCaUK1QslCzULRQtVC3UL5QxVDJUMpQzVDRUNVQ1lDYUNpQ3lDjUOVQ51DtUO5Q9FD1UPlQ+1EAUQFRAlEEUQlRElEUURVRFlEYUR9RIVEyUTdROlE7UTxRP1FAUUFRRFFFUUZRR1FKUUtRTFFOUVBRUlFUUVpRXFFiUWRRaVFqUWtRbVFuUXVRfFGAUYJRiVGKUYxRj1GQUZFRklGTUZVRllGXUZ1RoFGiUaRRpVGmUahRqVGqUatRrFGwUbFRslGzUbRRtVG2UbdRvVG+UcRRxVHGUclRy1HMUc1R1lHbUdxR3VHgUeFR5lHnUelR7FHtUfBR8VH1UfZR+FH5Uf1R/lIAUgNSBFIIUgpSC1IOUhFSFFIVUhdSJFInUipSLlIzUjdSOFI5UjpSO1JDUkRSR1JKUktSTFJPUlRSVlJbUl1SXlJjUmRSZVJpUmpSb1JwUnFSc1J0Un1Sf1KDUodSiFKJUo1SkVKSUpRSnFKjUqZSqlKrUqxSrVKvUrFStFK1UrxSvlLAUsFSw1LFUsdSyVLNUtJS11LYUttS3VLeUuBS41LkUuZS51LyUvNS9VL5UvpS/lL/UwBTAVMCUwZTCFMNUw9TEFMVUxlTGlMdUyBTIVMjUyRTKlMvUzFTM1M4UztTP1NFU0ZTR1NIU0lTTVNRU1JTU1NcU15TYFNmU2lTblNvU3FTclN0U3VTd1N4U3tTf1OCU4RTk1OWU5hTmlOgU6VTplOoU6lTrVOuU7BTslOzU7ZTw1PJU8xTzlPUU9lT21PfU+FT4lPlU+hT6VPqU+tT7FPtU+5T8VP2U/pUAVQDVAlUClQLVA5UD1QQVBtUHVQfVCBUKVQsVC1ULlQ2VDhUOVQ7VDxUPVQ+VEBUQlRGVEhUSVROVFFUX1RqVHBUcVR1VHZUd1R7VHxUgFSEVIZUilSLVI5Uj1SQVJJUnFSiVKRUpVSoVKlUq1SsVK9UslSzVLhUvFS9VL5UwFTCVMRUx1TIVMlU2FTiVOZU6FTpVO1U7lTyVPpU/VT/VQRVBlUHVQ9VEFUUVRZVLlUvVTFVM1U4VTlVPlVAVURVRVVMVVNVVlVXVVxVXVVeVWNVe1V8VX5VgFWDVYRVhlWHVYlVilWLVZhVmVWaVZxVnVWfVadVqFWpVapVq1WsVa5VsFXEVcVVx1XUVdpV3FXfVeNV5FX3VflV/VX+VgZWCVYUVhZWF1YYVhtWKVYvVjFWMlY0VjZWOFZCVkxWTlZQVlNWW1ZkVmpWa1ZsVnRWeFZ6VoBWhlaHVopWj1aUVplWoFaiVqVWrla0VrZWvFbAVsFWwlbDVshWylbOVtFW01bXVthW2lbuVvBW81b5VvpW/1cAVwNXBFcIVwlXDVcPVxNXFlcYVxxXJlcnVy1XN1c4VztXQFdCV0dXSldOV09XUFdRV1lXYVdkV2VXZldpV2pXgleIV4lXk1egV6JXo1ekV6pXsFezV8BXw1fGV8dXyFfLV9JX01fUV9ZX3FfgV+NX9Ff3V/lX/FgAWAJYBVgGWApYC1gVWBlYHVghWCRYKlgvWDBYNVg6WD1YQFhBWEpYS1hRWFJYVFhXWFhYWVhaWF5YYVhiWGlYa1hwWHJYdVh5WH5YhViTWJdYnFieWJ9YqFirWK5YslizWLhYuVi6WLtYvljBWMVYx1jKWMxY0VjTWNVY11jYWNlY3FjeWN9Y5FjlWOxY7ljvWPFY91j5WPpY+1j8WP1ZAlkKWQtZEFkVWRhZGVkbWRxZIlklWSxZLVkuWTJZN1k4WT5ZRFlHWUhZSVlOWU9ZUFlRWVNZVFlVWVdZWFlaWVtZXVlgWWJZY1llWWdZaFlpWWpZbFluWXRZeFmBWYNZhFmKWY1Zk1mWWZlZm1mdWaNZpFmlWahZrFmyWblZulm7Wb5ZxlnJWdBZ0VnTWdRZ2VnaWdxZ5VnmWehZ6lnrWfZZ+1n/WgFaA1oJWhFaGFocWh9aIFolWilaL1o1WjZaPFpAWkFaRlpJWlpaYlpqWmxaf1qSWppam1q8Wr5awVrCWslay1rMWtBa1lrXWuFa41rmWula+lr7WwlbC1sMWxZbIlsqWyxbMFsyWzZbPltAW0NbRVtRW1VbVltaW1tbXFtdW19bZFtlW2lba1twW3Fbc1t1W3pbgFuDW4Vbh1uIW4tbjVuPW5Vbl1uYW5lbm1ucW51bo1ulW6ZbsFuzW7RbtVu4W79bwFvCW8NbxFvFW8dbyVvQW9Jb01vUW9hb21vdW95b31vhW+Jb5FvlW+Zb6FvpW+tb7lvwW/Nb9Vv2W/hb+lv/XAFcAlwEXAVcBlwHXAhcCVwKXAtcDVwTXBZcGlweXCBcIlwkXChcLVw4XDlcOlw7XDxcPVw+XD9cQFxBXEZcSFxNXE5cT1xQXFFcW1xeXGBcYVxiXGRcZVxsXG5cb1x2XHlcjFyQXJFclFyhXKZcqFypXKtcrFyxXLNctly3XLhculy7XLxcvlzFXMdc2VzgXOFc6FzpXOpc7VzvXPBc9Vz6XPtc/V0HXQtdDl0UXRVdFl0XXRhdGV0aXRtdH10iXSddKV1CXUtdTF1OXVBdUl1TXVxdaV1sXW1db11zXXZdgl2EXYddi12MXZBdnV2iXaxdrl23XbhduV26XbxdvV3JXcxdzV3QXdJd013WXdtd3l3hXeNd5l3nXehd613uXfJd8130XfVd9137Xf1d/l4GXgteEV4WXhleGl4bXh1eJV4tXi9eMF4zXjZeN149XkBeQ15EXkVeR15MXk5eVF5VXldeX15hXmNeZF5yXnVedl54Xnleel57XnxefV5+Xn9egV6EXodeil6PXpVell6aXqBeq16tXrVetl64XsFewl7DXsheyV7KXtBe017WXtpe217dXt9e4F7hXuJe417oXule7F7wXvFe8170XvZe9174Xvte/F7+Xv9fAV8DXwRfCV8LXwxfDV8QXxFfE18UXxZfF18YXxtfH18hXyVfJl8nXylfLV8vXzFfNF84XzxfPl9BX0VfSF9KX0xfTl9RX1ZfV19ZX11fYV9mX2dfaV9qX2tfbF9tX3Bfc193X3lffF9/X4BfgV+CX4NfhF+HX4hfil+LX5BfkV+SX5NfmF+ZX55foF+hX6hfqV+qX61frl+zX7dfuV+8X71fzF/NX9Zf11/ZX91f3l/gX+Rf8F/xX/hf+1/9X/9gDmAPYBBgEmAVYBZgGWAbYBxgIGAhYCVgJmAoYClgK2AvYDFgOmBBYEJgQ2BGYEpgS2BNYFBgUmBVYFlgWmBdYF9gYGBiYGNgZGBlYGhgamBrYGxgbWBvYHBgdWB3YIFgg2CEYIVgiWCKYItgjGCNYJJglGCWYJdgmmCbYJ9goGCjYKZgp2CpYKpgsmCzYLRgtWC2YLhgvGC9YMZgx2DRYNNg1WDYYNpg3GDeYN9g4GDhYONg52DoYPBg8WDyYPRg9mD3YPlg+mD7YQBhAWEDYQZhCGEJYQ1hDmERYRVhGmEgYSFhJ2EsYTBhNGE3YTxhPWE+YT9hQmFEYUdhSGFKYUxhTWFOYVNhVWFYYVlhWmFdYV9hYmFjYWVhZ2FoYWthbmFvYXBhcWFzYXRhdWF2YXdhfmGCYYdhimGOYZBhkWGUYZZhmWGaYaRhp2GpYathrGGuYbJhtmG6Yb5hw2HGYcdhyGHJYcphy2HMYc1h0GHjYeZh8mH2Yfdh+GH6Yfxh/WH+Yf9iAGIIYgliCmIMYg1iDmISYhNiFGIaYhtiHWIeYh9iIWImYipiLmIvYjBiMmIzYjRiOGI7Yj9iQWJHYkhiSWJNYk5iWGJbYl5iYGJjYmhibmJ2YnlifGJ+YoJig2KEYoliimKRYpJik2KUYpZil2KYYptinGKmYqtirGKxYrViuWK7YrxivWLCYsZix2LIYsliymLMYs1iz2LQYtFi0mLTYtRi12LYYtli22LcYt1i4GLhYuxi7WLuYu9i8WLzYvVi9mL3Yv5i/2MCYwhjCWMMYxFjGWMfYydjKGMrYy9jOmM9Yz5jP2NJY0xjTWNPY1BjVWNXY1xjZ2NoY2lja2NuY3JjdmN3Y3tjgGODY4hjiWOMY45jj2OSY5ZjmGObY59joGOjY6djqWOqY6tjrGO0Y7Vju2O+Y8Bjw2PEY8ZjyWPPY9pj4WPjY+lj7mP0Y/Zj+mQGZA1kD2QTZBRkFmQXZBxkJmQoZCxkLWQ0ZDZkPmRCZE5kUWRYZGBkZ2RpZG9kdmR4ZHpkg2SIZJJkk2SVZJpknWSeZKRkpWSpZKtkrWSwZLJkuWS7ZLxkwmTFZMdkzWTOZNJk1GTYZNpk4GThZOJk42TmZOdk7GTxZPJk9GT2ZPpk/WT+ZQBlBWUYZRxlImUjZSRlKmUrZSxlNGU1ZTdlOGU7ZUVlSGVNZU5lT2VRZVVlVmVXZVhlXWVeZWJlY2VmZWxlcmV3ZXhlgmWDZYhliWWMZY5lkGWRZZdlm2WcZZ9lpGWlZadlq2WsZa9lt2XBZcNlxGXGZctlzGXSZddl2WXbZeBl4WXiZeZl52XoZexl7WXxZfpl+2YAZgJmA2YGZgdmCWYKZgxmD2YTZhVmHGYfZiRmJWYnZihmLWYuZjFmNGY1ZjtmPGY/ZkFmQ2ZEZklmS2ZPZlJmV2ZZZl1mXmZfZmJmZGZlZmZmZ2ZoZmlmb2ZwZnNmdGZ2ZnpmgWaDZoRmh2aIZolmjmaRZpZml2aYZplmnWagZqJmpmarZq5msma0ZrhmuWa8Zr5mv2bBZsRmx2bJZtZm2WbaZtxm3WbgZuZm6WbwZvJm82b1Zvdm+Wb6Zvtm/Gb9Zv5m/2cDZwtnDmcPZxRnFWcWZxdnHWceZyZnJ2ctZy5nMWc0ZzZnN2c4ZzpnPWc/Z0FnRmdJZ05nT2dRZ1NnVmdZZ1xnXmdfZ2BnYmdjZ2RnZmdqZ21nb2dwZ3Jnc2d1Z3dnfGd+Z39nhWeHZ4lni2eMZ5BnlWeaZ51noGehZ6JnpmepZ69ns2e0Z7Znt2e4Z7lnu2fAZ8FnxGfGZ8pnzmfPZ9Bn02fUZ9hn2mfdZ95n4mfkZ+dn6WfsZ+5n72fxZ/Nn9Gf1Z/pn+2f+Z/9oAmgEaAVoE2gWaBdoHmgiaCloK2gyaDRoOGg9aEBoQWhCaENoRGhGaE1oTmhQaFFoUmhTaFRoWWhcaF1oX2hjaGdodGh2aHdofmh/aIFog2iFaI1ojmiPaJNolGiXaJtonWifaKBoomimaKdoqGitaK9osGixaLNotWi2aLloumi8aMRoxmjIaMloymjLaM1oz2jSaNRo1WjYaNpo32jgaOFo42jnaO5o72jyaPlo+mkAaQFpBGkFaQhpC2kMaQ1pDmkPaRJpGWkaaRtpIWkiaSNpJWkmaShpKmkwaTRpNmk5aT1pP2lKaVNpVGlVaVlpWmlcaV1pXmlgaWFpYmloaWppa2luaW9pc2l0aXdpeGl5aXxpfmmBaYppjmmRaZRplWmYaZxpoGmnaa5psWmyabRpu2m+ab9pwWnDacdpymnMac1pzmnQadNp2Wndad5p4mnnaehp62ntafJp+Wn7af1p/2oCagVqCmoLagxqEmoTahRqF2obah5qH2oiaiNqKWoqaitqLmowajVqNmo4ajlqOmo9akRqRmpHakhqS2pYallqYWpiamZqa2pyanNqeGp+an9qgGqEao1qjmqQapdqnGqgaqJqo2qqaqxqrmqzarhqu2rBasJqw2rRatNq2mrbat5q32riauRq6Grqavpq+2sEawVrCmsSaxZrHWsfayBrI2snazJrN2s4azlrOms9a0NrR2tJa0xrTmtQa1NrVGtZa1trX2tha2ZraWtqa29rc2t4a3lre2t/a4Brg2uEa4ZriWuKa41rlWuWa5hrnmuka6prq2uva7Frsmuza7Rrt2u6a7trvGu/a8BrxWvGa8trzWvSa9Nr1mvYa99r62vsa+9r82wIbA9sE2wUbBtsI2wkbDdsOGw+bD9sQGxBbE5sUGxVbFdsWmxcbF1sXmxfbGBsYmxobGpsb2xwbHJsc2x9bH5sgWyCbINshmyIbIxsjWyQbJJsk2yWbJlsmmybbKFsomyrbK5ssWyzbLhsuWy6bLxsvWy+bL9sxGzFbMlsymzMbNNs12zZbNps22zdbOFs4mzjbOVs6mzvbPBs8WzzbQRtDG0SbRdtGW0bbR5tH20lbSltKm0rbTJtM201bTZtOG09bT5tRG1FbVltWm1cbWNtZG1mbWltam1sbW5tb210bXhteW2FbYdtjG2ObZNtlW2WbZltm22cbaxtr22ybbVtuG28bcBtxW3Gbcdty23Mbc9t0W3SbdVt2G3Zbd5t4W3kbeZt6G3qbett7G3ubfJt8231bfdt+G35bfpt+238bgduCG4JbgpuC24TbhVuGW4abhtuHW4fbiBuIW4jbiRuJW4mbiduKW4rbixuLW4ubjhuOW46bjxuPm5DbkpuTW5OblZuWG5bblxuX25nbmtubm5vbn5uf26Cboxuj26YbpxunW6fbqJupW6qbq9usm62brduum69br9uwm7EbsVuyW7Lbsxu0W7TbtRu1W7dbt5u7G7vbvJu9G73bvhu/m7/bwFvAm8GbwlvD28RbxNvFW8gbyJvI28rbyxvMW8ybzhvPm8/b0FvRW9Rb1RvWG9bb1xvX29kb2ZvbW9ub29vcG90b3hvem98b4BvgW+Cb4Rvhm+Ib45vkW+Xb6Fvo2+kb6pvsW+zb7VvuW/Ab8Fvwm/Db8Zv1G/Vb9hv22/fb+Bv4W/kb+tv7G/ub+9v8W/zb/Vv9m/6b/5wAXAFcAZwB3AJcAtwD3ARcBVwGHAacBtwHXAecB9wJnAncChwLHAwcDJwPnBMcFFwWHBvcHBweHB8cH1whXCJcIpwjnCScJlwq3CscK1wrnCvcLNwuHC7cMhwy3DPcNlw3XDfcPFw+XD9cQRxCXEPcRRxGXEacRxxJnEwcTxxRnFHcUlxTHFOcVVxVnFZcVxxYnFkcWVxZnFpcWxxbnF9cYRxiHGKcY9xlHGVcZlxn3GocaxxuXG+ccFxw3HIcclxznHQcdJx1HHVcddx33HgceVx5nHncexx7XHucfVx+XH7cfxx/nH/cgZyDXIQchtyKHIqcixyLXIwcjJyNXI2cjpyO3I8cj1yPnI/ckByRnJLckxyUnJYcllyW3Jdcl9yYXJicmdycnJ0cn1yfnKAcoFygnKHcpJylnKgcqJyp3Kscq9ysXKycrlyvnLCcsNyxHLGcs5y0HLSctdy2XLbcuBy4XLiculy7HLtcvdy+HL5cvxy/XMKcxZzF3MbcxxzHXMfcyRzJXMpcypzK3Mucy9zNHM2czdzPnM/c0RzRXNOc09zV3Njc2hzanNwc3JzdXN3c3hzenN7c4Rzh3OJc5ZzqXOyc7Nzu3O9c8JzyHPJc8pzzXPOc9Jz1nPec+Bz43Plc+pz7XPuc/Fz9XP4dAV0B3QJdCJ0JXQmdCl0KnQudDJ0M3Q0dDV0NnQ6dD90QXRVdFl0WnRbdFx0XnRfdGB0Y3RkdGl0anRvdHB0c3R2dH50g3SJdIt0nnSfdKJ0p3S9dMp0z3TUdNx04HTidON05nTndOl07nTwdPF08nT2dPd0+HUBdQN1BHUFdQx1DXUOdRF1E3UVdRh1GnUcdR51JXUmdSt1LHUvdTJ1OHU8dUR1RnVJdUp1TXVPdVF1VHVadVt1XHVddWB1YnVkdWV1ZnVndWl1a3VtdW91c3V0dXZ1d3V4dX91gnWGdYd1iXWKdYt1jnWPdZF1lHWadZ11o3Wldat1sXWydbN1tXW4dbl1vHW9db51wnXDdcV1x3XKdc110nXUddV12HXZddt13nXideN16XXydfN19HX6dfx1/nX/dgF2CXYLdg12H3YgdiF2InYkdid2MHY0djt2QnZGdkd2SHZMdlJ2VnZYdlx2YXZidmd2aHZpdmp2bHZwdnJ2dnZ4dnx2gHaCdoN2hnaHdoh2i3aOdpB2k3aWdpl2mnabdpx2nnamdq52sHa0drd2uHa5drp2v3bCdsN2xnbIdsp2zXbSdtZ213bbdtx23nbfduF243bkduV253bqdvJ2+3b+dwF3BHcHdwh3CXcMdxt3HnckdyV3KXc3dzh3OndGd0d3Wndbd2F3Yndjd2V3Zndod2t3eXd+d393i3eOd5F3nnegd6V3rHetd7B3s3e5d7t3vHe9d793x3fNd9d32nfbd9x34nfjd+d36Xfud+93/HgCeAx4EngUeBV4IHgheCV4JngneDJ4NHg6eD94RXhOeF14ZHhreGx4b3hyeHR4enh8eIF4hniHeIx4jXiOeJF4k3iVeJd4mnijeKd4qXiqeK94tXi8eL54wXjFeMZ4ynjLeNB40XjUeNp453joeOx473j0eP15AXkHeQ55EXkSeRl5JnkqeSt5LHkweTx5QHlBeUd5SHlJeVB5U3lVeVZ5V3laeV15X3lgeWJ5ZXloeW15d3l6eX95gHmEeYV5inmNeY55lHmbeZ15pnmneap5rnmwebF5s3m5ebp5vXm+eb95wHnJedV52HnfeeF55Hnmeed56XnsefB6AHoIeg16FHoXehh6GXoaehx6H3ogejF6Mno3ejt6PHo9ej56QHpCekN6RnpJek16TnpPelB6V3phemJ6Y3ppemt6cHp0enZ6eXp9en96gXqDeoR6iHqSepN6lXqWepd6mHqfeql6qnqueq96sHq2erp6v3rDesR6xXrHesh6ynrNes960XrSetN61XrZetp63Hrdet964XrieuN65Xrmeud66nrreu1673rwevZ6+Hr5evp6/3sCewR7BnsIewp7C3sPexh7GXsbex57IHsleyZ7KHs1ezZ7OXtFe0Z7SHtLe0x7TXtPe1B7UXtSe117ZXtne2x7bntwe3F7dHt1e3p7hnuHe4t7jXuPe5J7lHuVe5h7mXuae5x7nXuee597qnute7F7tHu4e8F7xnvHe8t7zHvPe9174Hvke+V75nvpe+1783v2e/d8AHwHfBF8EnwTfBR8F3wefB98I3wnfCp8K3w3fDh8PXw+fD98QHxDfEx8TXxPfFB8VHxWfFh8X3xgfGR8ZXxsfHN8dXx+fIF8gnyDfIl8i3yNfJB8knyVfJd8mHybfJ98oXyifKR8pXynfKh8q3ytfK58sXyyfLN8uXy9fMB8wnzFfMp8znzSfNZ82HzcfN5833zgfOJ853zvfPJ89Hz2fPh8+nz+fQB9An0FfQZ9Cn0LfQ19EH0UfRV9F30YfRl9Gn0bfRx9IX0rfSx9Ln0vfTJ9M301fTp9P31DfUV9Rn1IfUt9TH1OfU99Vn1bfV59Yn1mfWh9bn1yfXN9dX12fXl9fX2JfY99k32ZfZt9nH2ffaB9on2jfat9rH2tfa59r32wfbF9sn20fbV9t326fbt9vX2+fb99x33Kfct9z33RfdJ91X3Wfdh93H3dfd594X3kfel97H3vffJ99H37fgF+BH4Ffgl+Cn4LfhJ+G34efh9+IX4ifiN+Jn4rfi5+MX4yfjV+N345fjp+O349fj5+QX5DfkZ+Sn5Lfk1+Un5VflZ+WX5dfl5+YX5mfmd+aX5rfm1+cH55fnt+fH59fn9+gn6Dfoh+iX6Kfox+jn6PfpB+kn6TfpR+ln6bfpx/Nn84fzp/RX9Hf0x/TX9Of1B/UX9Uf1V/WH9gf2d/aH9pf2p/a39wf3J/dX93f3h/eX+Cf4N/hX+Gf4d/iH+Kf4x/lH+af51/nn+jf6h/rn+vf7J/tn+4f7l/vX/Bf8V/xn/Kf9R/1X/gf+F/5n/pf+t/8H/zf/l/+3/8gACABIAGgAuADIAQgBKAFYAXgBiAGYAcgCGAKIAzgDaAO4A9gD+ARoBKgFKAVoBYgFqAX4BhgGKAaIBvgHCAcoBzgHSAdoB5gH2AfoB/gISAhYCGgIeAi4CMgJOAloCYgJqAm4CdgKGAooClgKmAqoCsgK2Ar4CxgLSAuoDDgMSAxoDMgM6A1oDZgNqA24DdgN6A4YDkgOWA74DxgPSA+ID8gQWBBoEHgQiBCYEKgRqBG4EjgSmBL4ExgTOBOYE+gUaBS4FQgVGBU4FUgVWBX4FlgWaBa4FugXCBcYF0gXiBeYF6gX+BgIGCgYOBiIGKgY+Bk4GVgZqBnIGdgaCBo4GkgaiBqYGwgbOBtYG4gbqBvYG+gb+BwIHCgcaByIHJgc2B0YHTgdiB2YHagd+B4IHjgeWB54Hoge2B+oH7gfyB/oIBggKCBYIIggmCCoIMgg2CDoIQghKCFoIYghuCHIIegh+CKYIqgiuCLoIzgjWCNoI3gjiCOYJAgkeCWIJZglqCXYJfgmKCZIJmgmiCaoJrgm6CcYJ2gneCeIJ+gouCjYKSgpmCnYKfgqWCpoKrgqyCrYKvgrOCuYK7gr2CxYLRgtKC04LUgteC2YLbgtyC3oLfguGC44LmgueC64LzgvSC+YL6gvuDAYMCgwODBIMFgwaDCYMOgxaDF4MYgxyDKIMrgy+DMYMygzSDNYM2gziDQINFg0aDSYNKg0+DUINSg1iDYoNzg3WDd4N7g3yDf4OFg4eDiYOKg46Dk4OWg5qDnoOfg6CDooOog6qDq4Oxg7WDvYPBg8WDx4PKg8yDzoPTg9aD2IPcg9+D4IPpg+uD8IPxg/KD9IP2g/eD+4P9hAOEBIQHhAqEC4QMhA2EDoQThCCEIoQphCqELIQxhDWEOIQ8hEaESIROhFuEYYRihGOEZoRphGuEbIRthG6Eb4RxhHWEd4R5hHqEgoSEhIuEkISUhJmEnISfhKGEsoS0hLiEuYS7hLyEv4TBhMSExoTJhMqEy4TNhNCE0YTWhNmE2oTchOyE7oT0hPyE/4UAhQaFEYUThRSFFYUXhRiFGoUhhSOFJoUshS2FNYU9hT6FQIVBhUOFSIVJhUqFS4VOhVOFVYVXhViFWYVahWOFaIVphWqFa4VthXeFfoWAhYSFh4WIhYqFkIWRhZSFl4WZhZuFnIWkhaaFqIWphaqFq4Wsha6Fr4WwhbmFuoXBhcmFzYXPhdCF1YXchd2F5IXlhemF6oX3hfmF+oX7hf6GAoYGhgeGCoYLhhOGFoYXhiKGLYYvhjCGP4ZNhk6GUIZUhlWGWoZchl6GX4ZnhmuGcYZ5hnuGioaLhoyGk4aVhqOGpIaphqqGq4avhrCGtobEhsaGx4bJhsuGzYbOhtSG2Ybbht6G34bkhumG7Ibthu6G74b5hvuG/ocAhwKHA4cGhwiHCYcKhw2HEYcShxiHGocchyWHKYc0hzeHO4c/h0mHS4dMh06HU4dVh1eHWYdfh2CHY4dmh2iHaoduh3SHdod4h3+HgoeNh5+Hooerh6+Hs4e7h72HwIfEh8aHx4fLh9CH0ofgh+yH74fyh/aH94f5h/uH/ogFiAeIDYgOiA+IEYgViBaIH4ghiCKII4gniDGINog5iDuIQIhCiESIRohNiFKIWYhbiF2IXohhiGKIY4hriHCIcoh1iHeIfYh+iH+IgYiCiIiIjYiSiJaIl4iZiJ6IooikiKuIroiwiLGItIi1iLeIv4jBiMKIw4jEiMWIz4jUiNWI2IjZiNyI3YjfiOGI6IjyiPOI9Ij1iPiI+Yj8iP6JAokEiQeJCokMiRCJEokTiRyJHYkeiSWJKokriTaJOIk7iUGJQ4lEiUyJTYlWiV6JX4lgiWSJZolqiW2Jb4lyiXSJd4l+iYOJhomHiYiJiomTiZeJmImaiaGJpompiayJr4myibOJuom9ib+JwInaidyJ3YnmieeJ9In4igKKA4oKigyKDooQihKKE4oWihuKHYofiiOKJYozijSKNoo3ijqKPIpBikaKSIpQilGKUopUiluKXopgimKKY4ppimuKbIpuinCKcop5inyKhIqFioeKiYqMipGKk4qVipiKmoqgiqGKo4qkiqWKpoqniqiKrIqyirmKvIq+isKKxIrMis2Kz4rSitaK2orbityK3orfiuCK4YriiuSK5orniu2K7orxivOK9or3iviK+or+iwCLAYsCiwSLB4sMiw6LEIsUixaLF4sZixqLHYsgiyGLJosoiyuLLIszizmLPotBi0mLTItOi0+LU4tWi1qLW4tci1+LZotri2yLb4txi3KLdIt9i3+Lg4uKi4yLjouQi5KLk4uWi5mLmow3jDqMP4xBjEaMSIxKjEyMToxQjFWMWoxijGqMa4xsjHiMeYx6jHyMgoyFjImMioyMjI2MjoyUjJiMnYyejKGMooynjKiMqoyrjK2MroyvjLCMsoyzjLSMtoy4jLyMvYy/jMCMwYzCjMOMxIzIjMqMzYzOjNGM04zajNuM3IzejOCM4ozjjOSM5oztjPCM9Iz7jP2NBI0FjQeNCI0KjQuNDY0PjRKNE40UjRaNZI1mjWeNa41tjXCNcY1zjXSNdo2BjZmNo42ojbqNvo3CjcuNzI3PjdaN2o3bjd2N343hjeON6I3qjeuN8431jfyN/44IjgmOCo4PjhCOHY4ejh+OKo4wjjSONY5CjkSOR45IjkmOSo5MjlCOVY5Zjl+OYI5jjmSOco50jnaOfI6BjoSOhY6HjoqOi46NjpGOk46UjpmOoY6qjqyOr46wjrGOvo7AjsWOxo7IjsuOzI7Njs+O0o7bjt+O4o7jjuuO+I77jvyO/o8DjwWPCo8MjxKPE48UjxWPGY8bjxyPHY8fjyaPKY8qjy+PM484jzmPO48+jz+PQo9Ej0WPRo9Jj0yPTY9Oj1ePXI9fj2GPYo9jj2SPm4+cj56Pn4+jj6ePqI+tj6+PsI+xj7KPt4+6j7uPv4/Cj8SPxY/Oj9qP4o/lj+mP6o/rj+2P74/wj/SP94/4j/mP+pADkAWQBpALkA2QDpAPkBGQE5AVkBaQF5AZkB2QHpAikCeQLpA1kDaQOJA5kDyQPpBBkEKQRZBHkEmQTZBPkFCQUZBSkFaQWJBZkFyQXpBhkGOQZZBnkGiQbZBukG+QcpB1kHaQd5B6kHyQfZB/kICQgZCCkIOQhJCHkImQipCPkJGQo5CmkKiQqpCvkLGQtZC4kMGQypDOkNuQ3pDhkOKQ5JDtkPWQ95ECkRKRFZEnkS2RMJEykUmRSpFLkUyRTpFSkVSRVpFYkWKRY5FlkWmRapFskXKRc5F1kXeReJGCkYeRiZGLkY2RkJGSkZeRnJGikaSRqpGrkayRr5GxkbSRtZG4kbqRwZHGkceRyJHJkcuR0JHWkdeR2JHakduR3JHdkd6R35HhkeOR5JHlkeaR55Htke6R9ZH2kfyR/5IGkgqSDZIOkhCSEZIUkhWSHpIpkiySNJI3kjmSOpI8kj+SQJJEkkWSSJJJkkuSTpJQklGSV5JZklqSW5JekmKSZJJmkmeScZJ3kniSfpKAkoOShZKIkpGSk5KVkpaSmJKakpuSnJKnkq2St5K5ks+S0JLSktOS1ZLXktmS4JLkkueS6ZLqku2S8pLzkviS+ZL6kvuS/JL/kwKTBpMPkxCTGJMZkxqTHZMekyCTIZMikyOTJZMmkyiTK5Msky6TL5M1kzqTO5NEk0iTTZNUk1aTV5Nbk1yTYJNsk26TcJN1k3yTfpOMk5STlpOXk5qTpJOnk6yTrZOuk7CTuZPDk8aT0JPRk9aT15PYk92T3pPhk+ST5ZPok/iUA5QHlBCUE5QUlBiUGZQalCGUK5QxlDWUNpQ4lDqUQZRElEWUSJRRlFKUU5RalFuUXpRglGKUapRwlHWUd5R8lH2UfpR/lIGVgpWDlYeVipWPlZGVkpWUlZaVmJWZlaCVo5WklaWVp5Wola2VspW5lbuVvJW+lcOVx5XKlcyVzZXUldWV1pXYleGV4pXllhyWIZYoliqWLpYvljKWO5Y/lkCWQpZElkuWTJZPlluWXJZdll6WX5ZilmOWZZZmlmqWbJZwlnKWc5Z2lneWeJZ6ln2WhZaGloiWipaLlo2WjpaPlpSWlZaXlpiWmZaclp2WoJajlqeWqJaqlq+WsJaxlrKWtJa2lreWuJa5lruWvJbAlsGWxJbFlseWyZbLlsyWzZbOltGW1ZbWltmW25bcluiW6pbrlvCW8pb2lveW+ZcElwaXB5cIlwqXDZcOlw+XEZcTlxaXGZcclx6XJJcnlyqXMJcylzOXOJc5lzuXPZc+l0KXQ5dEl0aXSJdJl02XT5dRl1KXVpdZl1yXYZdkl2aXaJdrl22XdJd5l3qXfJeBl4SXhZeGl4uXjZePl5CXmJecl6CXo5eml6iXq5etl7OXtJfDl8aXyJfLl9OX3Jftl+6X8pf1l/aX+5f/mAGYA5gMmA+YEJgRmBKYE5gXmBqYIZgkmCyYMJg0mDeYOJg7mDyYPZhGmEuYTphPmFWYV5hamFuYZZhnmGuYb5hwmHGYc5h0mKqYr5ixmLaYw5jEmMaY25jcmOKY6ZjrmO2Y7pjvmPKY9Jj8mP2Y/pkDmQWZCZkKmQyZEJkSmROZFJkYmR2ZHpkgmSGZJJknmSiZLJkumT2ZPplCmUWZSZlLmUyZUJlRmVKZVZlXmZaZl5mYmZ6ZpZmomayZrZmumbOZtJm8mcGZxJnFmcaZyJnQmdGZ0pnVmdiZ25ndmeKZ7ZnumfGZ8pn4mfuZ/5oBmgWaDpoPmhKaGZoomiuaMJo3mj6aQJpCmkOaRZpNmk6aUppVmleaWppbml+aYppkmmWaaZpqmmuarZqwmriavJrAmsSaz5rRmtOa2Zrcmt6a35rimuOa5prqmuua7Zrumu+a8Zr0mvea+5sGmxibGpsfmyKbI5slmyebKJspmyqbLpsvmzGbMps7mzybQZtCm0ObRJtFm02bTptPm1GbVJtYm1qbb5tym3SbdZuDm46bj5uRm5Kbk5uWm5ebn5ugm6ibqpurm62brpuxm7SbuZu7m8CbxpvJm8qbz5vRm9Kb1JvWm9ub4Zvim+Ob5Jvom/Cb8Zvym/WcAJwEnAacCJwJnAqcDJwNnBCcEpwTnBScFZwbnCGcJJwlnC2cLpwvnDCcMpw5nDqcO5w+nEacR5xInFKcV5xanGCcZ5x2nHic5ZznnOmc65zsnPCc85z0nPadA50GnQedCJ0JnQ6dEp0VnRudH50jnSadKJ0qnSudLJ07nT6dP51BnUSdRp1InVCdUZ1ZnVydXZ1enWCdYZ1knWudbJ1vnXCdcp16nYediZ2PnZqdpJ2pnaudr52ynbSduJ26nbudwZ3CncSdxp3PndOd153Zne2d753ynfid+Z36nf2eGZ4anhueHp51nnieeZ58nn2ef56Bnoiei56MnpGekp6TnpWel56dnp+epZ6mnqmeqp6tnrWeuJ65nrqeu568nr6ev57EnsyezZ7Ons+e0J7RntKe1J7Yntme257cnt2e3p7gnuWe6J7vnvSe9p73nvme+578nv2fB58Inw6fE58VnyCfIZ87nz6fSp9Ln06fT59Sn1SfX59gn2GfYp9jn2afZ59qn2yfcp92n3eflZ+cn52foPmS+ZP5mfnD+ez6DvoP+hD6EvoT+hT6FvoX+hj6Gfoa+hv6HPod+h76H/og+iH6Ivoj+iX6Jvon+ij6Kfoq+iv6LPot+jb6RvpK+mr7AfsC/hD+Ef4S/hn+MP4x/jL+M/41/jb+N/44/jn+Ov47/jz+Pf4+/j/+QP5B/kL+Q/5E/kf+SP8C/wP/BP8F/wf/Cv8N/w7/EP8R/xL/E/8U/xb/F/8Y/xn/G/8c/x3/IP8h/yL/I/8k/yX/Jv8n/yj/Kf8q/yv/LP8t/y7/L/8w/zH/Mv8z/zT/Nf82/zf/OP85/zr/O/88/z3/Pv8//0D/Qf9C/0P/RP9F/0b/R/9I/0n/Sv9L/0z/Tf9O/0//UP9R/1L/U/9U/1X/Vv9X/1j/Wf9a/1v/Xf9h/2L/Y/9k/2X/Zv9n/2j/af9q/2v/bP9t/27/b/9w/3H/cv9z/3T/df92/3f/eP95/3r/e/98/33/fv9//4D/gf+C/4P/hP+F/4b/h/+I/4n/iv+L/4z/jf+O/4//kP+R/5L/lP+V/5b/l/+Y/5n/mv+b/5z/nf+e/5//4P/h/+L/4//k/+X/6Ng83QDYRt4a2FDf0NhW3HTYY9zd2GPe9th+3A/YftwY2H7cd9h+3ITYftzT2H7c3Nh+3O3Yft0g",
            "dynamic": true
        }
    }, {
        "source": "https://use.typekit.net/af/341e74/00000000000000007735bb34/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39488,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "100",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/c91b88/00000000000000007735bb36/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39489,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "100",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/99b799/00000000000000007735bb38/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39490,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "200",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/a458e7/00000000000000007735bb4c/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39491,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "200",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/144886/00000000000000007735bb55/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39492,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "300",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/3a42f6/00000000000000007735bb42/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39493,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "300",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/2807c7/00000000000000007735bb48/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39494,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/2b59e1/00000000000000007735bb53/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39495,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/1ba16c/00000000000000007735bb5a/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39496,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "500",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/6c4da4/00000000000000007735bb5e/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39497,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "500",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/153042/00000000000000007735bb62/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39498,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "600",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/8a7571/00000000000000007735bb67/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39499,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "600",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/384d9b/00000000000000007735bb6a/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39500,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "700",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/fcc1c9/00000000000000007735bb6c/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39501,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "700",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGmAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAAAFgEAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BkgH8Af0B/gH/AhgCGQIaAhsCNwLGAscCyQLYAtkC2gLbAtwC3QOUA6kDvAPAHoAegR6CHoMehB6FHvIe8yAJIBogICAhIDAgMiAzIEQgcCB0IHUgdiB3IHggeSCAIIEggiCDIIQghSCGIIcgiCCJIRMhJiEuIVMhVCFbIVwhXSFeIgIiBiIRIhIiFSIZIhoiHiIrIkgiYCJkImUkxSXK8AHwAvj/+wD7AfsC+wP7BA=="
        }
    }, {
        "source": "https://use.typekit.net/af/c906c2/00000000000000007735bb6e/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39502,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "900",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGkAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAQABAQECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERARIBEwEUARUBFgEXARgBGQEaARsBHAEdAR4BHwEgASEBIgEjASQBJQEmAScBKAEpASoBKwEsAS0BLgEvATABMQEyATMBNAE1ATYBNwE4ATkBOgE7ATwBPQE+AT8BQAFBAUIBQwFEAUUBRgFHAUgBSQFKAUsBTAFNAU4BTwFQAVEBVAFVAVYBVwFYAVkBWgFbAVwBXQFeAV8BYAFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoBewF8AX0BfgGSAfwB/QH+Af8CGAIZAhoCGwI3AsYCxwLJAtgC2QLaAtsC3ALdA5QDqQO8A8AegB6BHoIegx6EHoUe8h7zIAkgGiAgICEgMCAyIDMgRCBwIHQgdSB2IHcgeCB5IIAggSCCIIMghCCFIIYghyCIIIkhEyEmIS4hUyFUIVshXCFdIV4iAiIGIhEiEiIVIhkiGiIeIisiSCJgImQiZSTFJcrwAfAC+P/7APsB+wL7A/sE"
        }
    }, {
        "source": "https://use.typekit.net/af/31808c/00000000000000007735bb70/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39503,
        "dynamic": false,
        "family": "neue-haas-grotesk-display",
        "descriptors": {
            "weight": "900",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/0230dd/00000000000000007735bb33/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39504,
        "dynamic": false,
        "family": "neue-haas-grotesk-text",
        "descriptors": {
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/aed66e/00000000000000007735bb35/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39505,
        "dynamic": false,
        "family": "neue-haas-grotesk-text",
        "descriptors": {
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/160664/00000000000000007735bb32/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39506,
        "dynamic": false,
        "family": "neue-haas-grotesk-text",
        "descriptors": {
            "weight": "500",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGmAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAAAEwEAAQEBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8BIAEhASIBIwEkASUBJgEnASgBKQEqASsBLAEtAS4BLwEwATEBMgEzATQBNQE2ATcBOAE5AToBOwE8AT0BPgE/AUABQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVQBVQFWAVcBWAFZAVoBWwFcAV0BXgFfAWABYQFiAWMBZAFlAWYBZwFoAWkBagFrAWwBbQFuAW8BcAFxAXIBcwF0AXUBdgF3AXgBeQF6AXsBfAF9AX4BkgH8Af0B/gH/AhgCGQIaAhsCNwLGAscCyQLYAtkC2gLbAtwC3QOUA6kDvAPAHoAegR6CHoMehB6FHvIe8yAJIBogICAhIDAgMiAzIEQgcCB0IHUgdiB3IHggeSCAIIEggiCDIIQghSCGIIcgiCCJIRMhJiEuIVMhVCFbIVwhXSFeIgIiBiIRIhIiFSIZIhoiHiIrIkgiYCJkImUkxSXK8AHwAvj/+wD7AfsC+wP7BA=="
        }
    }, {
        "source": "https://use.typekit.net/af/fe63ce/00000000000000007735bb4b/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39507,
        "dynamic": false,
        "family": "neue-haas-grotesk-text",
        "descriptors": {
            "weight": "500",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/305037/00000000000000007735bb39/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39508,
        "dynamic": false,
        "family": "neue-haas-grotesk-text",
        "descriptors": {
            "weight": "700",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }, {
        "source": "https://use.typekit.net/af/68a7c6/00000000000000007735bb3d/30/{format}{?primer,unicode,gdyn,features,v,chunks,state,order}",
        "id": 39509,
        "dynamic": false,
        "family": "neue-haas-grotesk-text",
        "descriptors": {
            "weight": "700",
            "style": "italic",
            "display": "auto",
            "unicodeRange": "U+20-7E,U+A0-FF,U+152-153,U+178,U+2DC,U+2013-2014,U+2018-2019,U+201C-201E,U+2022,U+2026,U+2039-203A,U+20AC,U+2122",
            "featureSettings": "\"ALL \"",
            "subset": "7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191",
            "order": "AAEAAAGlAG8AaQBwAHEAbQBsAGsAagByAGEAYgBjAHMAdABoAGcAZgB6AHkAeAB3AHYAdQBlAGQAbgBdAFsAWgBZAFgAVwBWAFUAVABTAFIAUQBQAE8ATgBNAEwASwBKAEkASABHAEYARQBEAEMAQgBBAD8APgA8ADkAOAA3ADYANQA0ADMAMgAxADAALgAtACwAKQAoACEAfQB7AHwAYAB+ACIAIwAkACUAJgAnACoAKwAvADoAOwA9AEAAXABeAF8AqQAgAOAAoCAmIBQgHSAcANcA5yAZALsA6gDxAK4AoiATICIA6QDjISIA/ADhIBggOQDTAMQAowClAPYA2ADrAOgAtwDIAPQA5AC0ANYA8yCsAKsA7QCwAMkBUwC6AOIAygChAPggOgDcAP8ArADMAN8A0QDwAN4ApgC/ALUAsQC4AM0AwAD1APoA7iAeANAAzgD9AOwA9wCzAPIAuQC9AKQA2QDGALYAqACtAMEAwwDUAVIAxQC+APsA+QDlANIA5gCnAN0AywDPAKoA1QCyANoArwDHAP4A7wC8AMIA2yIPAAABAAEBAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwBLQEuAS8BMAExATIBMwE0ATUBNgE3ATgBOQE6ATsBPAE9AT4BPwFAAUEBQgFDAUQBRQFGAUcBSAFJAUoBSwFMAU0BTgFPAVABUQFUAVUBVgFXAVgBWQFaAVsBXAFdAV4BXwFgAWEBYgFjAWQBZQFmAWcBaAFpAWoBawFsAW0BbgFvAXABcQFyAXMBdAF1AXYBdwF4AXkBegF7AXwBfQF+AZIB/AH9Af4B/wIYAhkCGgIbAjcCxgLHAskC2ALZAtoC2wLcAt0DlAOpA7wDwB6AHoEegh6DHoQehR7yHvMgCSAaICAgISAwIDIgMyBEIHAgdCB1IHYgdyB4IHkggCCBIIIggyCEIIUghiCHIIggiSETISYhLiFTIVQhWyFcIV0hXiICIgYiESISIhUiGSIaIh4iKyJIImAiZCJlJMUlyvAB8AL4//sA+wH7AvsD+wQ="
        }
    }]
}))
