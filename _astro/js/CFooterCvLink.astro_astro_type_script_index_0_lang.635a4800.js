var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(h) {
    return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h
}
var whatInput$1 = {
    exports: {}
};
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.12
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function(h, a) {
    (function(f, c) {
        h.exports = c()
    }
    )(commonjsGlobal, function() {
        return function(u) {
            var f = {};
            function c(p) {
                if (f[p])
                    return f[p].exports;
                var d = f[p] = {
                    exports: {},
                    id: p,
                    loaded: !1
                };
                return u[p].call(d.exports, d, d.exports, c),
                d.loaded = !0,
                d.exports
            }
            return c.m = u,
            c.c = f,
            c.p = "",
            c(0)
        }([function(u, f) {
            u.exports = function() {
                if (typeof document > "u" || typeof window > "u")
                    return {
                        ask: function() {
                            return "initial"
                        },
                        element: function() {
                            return null
                        },
                        ignoreKeys: function() {},
                        specificKeys: function() {},
                        registerOnChange: function() {},
                        unRegisterOnChange: function() {}
                    };
                var c = document.documentElement
                  , p = null
                  , d = "initial"
                  , m = d
                  , g = Date.now()
                  , v = !1
                  , _ = ["button", "input", "select", "textarea"]
                  , b = []
                  , P = [16, 17, 18, 91, 93]
                  , J = []
                  , x = {
                    keydown: "keyboard",
                    keyup: "keyboard",
                    mousedown: "mouse",
                    mousemove: "mouse",
                    MSPointerDown: "pointer",
                    MSPointerMove: "pointer",
                    pointerdown: "pointer",
                    pointermove: "pointer",
                    touchstart: "touch",
                    touchend: "touch"
                }
                  , w = !1
                  , pe = {
                    x: null,
                    y: null
                }
                  , L = {
                    2: "touch",
                    3: "touch",
                    4: "mouse"
                }
                  , R = !1;
                try {
                    var M = Object.defineProperty({}, "passive", {
                        get: function() {
                            R = !0
                        }
                    });
                    window.addEventListener("test", null, M)
                } catch {}
                var Z = function() {
                    x[li()] = "mouse",
                    he()
                }
                  , he = function() {
                    var ai = R ? {
                        passive: !0,
                        capture: !0
                    } : !0;
                    document.addEventListener("DOMContentLoaded", et, !0),
                    window.PointerEvent ? (window.addEventListener("pointerdown", ei, !0),
                    window.addEventListener("pointermove", oi, !0)) : window.MSPointerEvent ? (window.addEventListener("MSPointerDown", ei, !0),
                    window.addEventListener("MSPointerMove", oi, !0)) : (window.addEventListener("mousedown", ei, !0),
                    window.addEventListener("mousemove", oi, !0),
                    "ontouchstart"in window && (window.addEventListener("touchstart", ei, ai),
                    window.addEventListener("touchend", ei, !0))),
                    window.addEventListener(li(), oi, ai),
                    window.addEventListener("keydown", ei, !0),
                    window.addEventListener("keyup", ei, !0),
                    window.addEventListener("focusin", hi, !0),
                    window.addEventListener("focusout", fi, !0)
                }
                  , et = function() {
                    if (v = !(c.getAttribute("data-whatpersist") === "false" || document.body.getAttribute("data-whatpersist") === "false"),
                    v)
                        try {
                            window.sessionStorage.getItem("what-input") && (d = window.sessionStorage.getItem("what-input")),
                            window.sessionStorage.getItem("what-intent") && (m = window.sessionStorage.getItem("what-intent"))
                        } catch {}
                    ii("input"),
                    ii("intent")
                }
                  , ei = function(ai) {
                    var di = ai.which
                      , gi = x[ai.type];
                    gi === "pointer" && (gi = pi(ai));
                    var vi = !J.length && P.indexOf(di) === -1
                      , yi = J.length && J.indexOf(di) !== -1
                      , Si = gi === "keyboard" && di && (vi || yi) || gi === "mouse" || gi === "touch";
                    if (mi(gi) && (Si = !1),
                    Si && d !== gi && (d = gi,
                    ui("input", d),
                    ii("input")),
                    Si && m !== gi) {
                        var Ci = document.activeElement
                          , Di = Ci && Ci.nodeName && (_.indexOf(Ci.nodeName.toLowerCase()) === -1 || Ci.nodeName.toLowerCase() === "button" && !si(Ci, "form"));
                        Di && (m = gi,
                        ui("intent", m),
                        ii("intent"))
                    }
                }
                  , ii = function(ai) {
                    c.setAttribute("data-what" + ai, ai === "input" ? d : m),
                    ni(ai)
                }
                  , oi = function(ai) {
                    var di = x[ai.type];
                    di === "pointer" && (di = pi(ai)),
                    ti(ai),
                    (!w && !mi(di) || w && ai.type === "wheel" || ai.type === "mousewheel" || ai.type === "DOMMouseScroll") && m !== di && (m = di,
                    ui("intent", m),
                    ii("intent"))
                }
                  , hi = function(ai) {
                    if (!ai.target.nodeName) {
                        fi();
                        return
                    }
                    p = ai.target.nodeName.toLowerCase(),
                    c.setAttribute("data-whatelement", p),
                    ai.target.classList && ai.target.classList.length && c.setAttribute("data-whatclasses", ai.target.classList.toString().replace(" ", ","))
                }
                  , fi = function() {
                    p = null,
                    c.removeAttribute("data-whatelement"),
                    c.removeAttribute("data-whatclasses")
                }
                  , ui = function(ai, di) {
                    if (v)
                        try {
                            window.sessionStorage.setItem("what-" + ai, di)
                        } catch {}
                }
                  , pi = function(ai) {
                    return typeof ai.pointerType == "number" ? L[ai.pointerType] : ai.pointerType === "pen" ? "touch" : ai.pointerType
                }
                  , mi = function(ai) {
                    var di = Date.now()
                      , gi = ai === "mouse" && d === "touch" && di - g < 200;
                    return g = di,
                    gi
                }
                  , li = function() {
                    var ai = null;
                    return "onwheel"in document.createElement("div") ? ai = "wheel" : ai = document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll",
                    ai
                }
                  , ni = function(ai) {
                    for (var di = 0, gi = b.length; di < gi; di++)
                        b[di].type === ai && b[di].fn.call(void 0, ai === "input" ? d : m)
                }
                  , ri = function(ai) {
                    for (var di = 0, gi = b.length; di < gi; di++)
                        if (b[di].fn === ai)
                            return di
                }
                  , ti = function(ai) {
                    pe.x !== ai.screenX || pe.y !== ai.screenY ? (w = !1,
                    pe.x = ai.screenX,
                    pe.y = ai.screenY) : w = !0
                }
                  , si = function(ai, di) {
                    var gi = window.Element.prototype;
                    if (gi.matches || (gi.matches = gi.msMatchesSelector || gi.webkitMatchesSelector),
                    gi.closest)
                        return ai.closest(di);
                    do {
                        if (ai.matches(di))
                            return ai;
                        ai = ai.parentElement || ai.parentNode
                    } while (ai !== null && ai.nodeType === 1);
                    return null
                };
                return "addEventListener"in window && Array.prototype.indexOf && Z(),
                {
                    ask: function(ai) {
                        return ai === "intent" ? m : d
                    },
                    element: function() {
                        return p
                    },
                    ignoreKeys: function(ai) {
                        P = ai
                    },
                    specificKeys: function(ai) {
                        J = ai
                    },
                    registerOnChange: function(ai, di) {
                        b.push({
                            fn: ai,
                            type: di || "input"
                        })
                    },
                    unRegisterOnChange: function(ai) {
                        var di = ri(ai);
                        (di || di === 0) && b.splice(di, 1)
                    },
                    clearStorage: function() {
                        window.sessionStorage.clear()
                    }
                }
            }()
        }
        ])
    })
}
)(whatInput$1);
var whatInputExports = whatInput$1.exports;
const whatInput = getDefaultExportFromCjs(whatInputExports);
window._GLOBAL_ = window._GLOBAL_ || {};
function _assertThisInitialized(h) {
    if (h === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return h
}
function _inheritsLoose(h, a) {
    h.prototype = Object.create(a.prototype),
    h.prototype.constructor = h,
    h.__proto__ = a
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _config$1 = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _defaults = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, _suppressOverwrites, _reverting$1, _context$1, _bigNum$2 = 1e8, _tinyNum = 1 / _bigNum$2, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt$1 = Math.sqrt, _cos$1 = Math.cos, _sin$1 = Math.sin, _isString$1 = function(a) {
    return typeof a == "string"
}, _isFunction$1 = function(a) {
    return typeof a == "function"
}, _isNumber$1 = function(a) {
    return typeof a == "number"
}, _isUndefined = function(a) {
    return typeof a > "u"
}, _isObject = function(a) {
    return typeof a == "object"
}, _isNotFalse = function(a) {
    return a !== !1
}, _windowExists$2 = function() {
    return typeof window < "u"
}, _isFuncOrString = function(a) {
    return _isFunction$1(a) || _isString$1(a)
}, _isTypedArray = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp$1 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win$2, _coreInitted$3, _doc$2, _globals = {}, _installScope = {}, _coreReady, _install = function(a) {
    return (_installScope = _merge(a, _globals)) && gsap$4
}, _missingPlugin = function(a, u) {
    return console.warn("Invalid property", a, "set to", u, "Missing plugin? gsap.registerPlugin()")
}, _warn = function(a, u) {
    return !u && console.warn(a)
}, _addGlobal = function(a, u) {
    return a && (_globals[a] = u) && _installScope && (_installScope[a] = u) || _globals
}, _emptyFunc = function() {
    return 0
}, _startAtRevertConfig = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, _revertConfigNoKill = {
    suppressEvents: !0,
    kill: !1
}, _revertConfig = {
    suppressEvents: !0
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function(a) {
    var u = a[0], f, c;
    if (_isObject(u) || _isFunction$1(u) || (a = [a]),
    !(f = (u._gsap || {}).harness)) {
        for (c = _harnessPlugins.length; c-- && !_harnessPlugins[c].targetTest(u); )
            ;
        f = _harnessPlugins[c]
    }
    for (c = a.length; c--; )
        a[c] && (a[c]._gsap || (a[c]._gsap = new GSCache(a[c],f))) || a.splice(c, 1);
    return a
}, _getCache = function(a) {
    return a._gsap || _harness(toArray(a))[0]._gsap
}, _getProperty = function(a, u, f) {
    return (f = a[u]) && _isFunction$1(f) ? a[u]() : _isUndefined(f) && a.getAttribute && a.getAttribute(u) || f
}, _forEachName = function(a, u) {
    return (a = a.split(",")).forEach(u) || a
}, _round$2 = function(a) {
    return Math.round(a * 1e5) / 1e5 || 0
}, _roundPrecise = function(a) {
    return Math.round(a * 1e7) / 1e7 || 0
}, _parseRelative = function(a, u) {
    var f = u.charAt(0)
      , c = parseFloat(u.substr(2));
    return a = parseFloat(a),
    f === "+" ? a + c : f === "-" ? a - c : f === "*" ? a * c : a / c
}, _arrayContainsAny = function(a, u) {
    for (var f = u.length, c = 0; a.indexOf(u[c]) < 0 && ++c < f; )
        ;
    return c < f
}, _lazyRender = function() {
    var a = _lazyTweens.length, u = _lazyTweens.slice(0), f, c;
    for (_lazyLookup = {},
    _lazyTweens.length = 0,
    f = 0; f < a; f++)
        c = u[f],
        c && c._lazy && (c.render(c._lazy[0], c._lazy[1], !0)._lazy = 0)
}, _lazySafeRender = function(a, u, f, c) {
    _lazyTweens.length && !_reverting$1 && _lazyRender(),
    a.render(u, f, c || _reverting$1 && u < 0 && (a._initted || a._startAt)),
    _lazyTweens.length && !_reverting$1 && _lazyRender()
}, _numericIfPossible = function(a) {
    var u = parseFloat(a);
    return (u || u === 0) && (a + "").match(_delimitedValueExp).length < 2 ? u : _isString$1(a) ? a.trim() : a
}, _passThrough = function(a) {
    return a
}, _setDefaults = function(a, u) {
    for (var f in u)
        f in a || (a[f] = u[f]);
    return a
}, _setKeyframeDefaults = function(a) {
    return function(u, f) {
        for (var c in f)
            c in u || c === "duration" && a || c === "ease" || (u[c] = f[c])
    }
}, _merge = function(a, u) {
    for (var f in u)
        a[f] = u[f];
    return a
}, _mergeDeep = function h(a, u) {
    for (var f in u)
        f !== "__proto__" && f !== "constructor" && f !== "prototype" && (a[f] = _isObject(u[f]) ? h(a[f] || (a[f] = {}), u[f]) : u[f]);
    return a
}, _copyExcluding = function(a, u) {
    var f = {}, c;
    for (c in a)
        c in u || (f[c] = a[c]);
    return f
}, _inheritDefaults = function(a) {
    var u = a.parent || _globalTimeline
      , f = a.keyframes ? _setKeyframeDefaults(_isArray(a.keyframes)) : _setDefaults;
    if (_isNotFalse(a.inherit))
        for (; u; )
            f(a, u.vars.defaults),
            u = u.parent || u._dp;
    return a
}, _arraysMatch = function(a, u) {
    for (var f = a.length, c = f === u.length; c && f-- && a[f] === u[f]; )
        ;
    return f < 0
}, _addLinkedListItem = function(a, u, f, c, p) {
    f === void 0 && (f = "_first"),
    c === void 0 && (c = "_last");
    var d = a[c], m;
    if (p)
        for (m = u[p]; d && d[p] > m; )
            d = d._prev;
    return d ? (u._next = d._next,
    d._next = u) : (u._next = a[f],
    a[f] = u),
    u._next ? u._next._prev = u : a[c] = u,
    u._prev = d,
    u.parent = u._dp = a,
    u
}, _removeLinkedListItem = function(a, u, f, c) {
    f === void 0 && (f = "_first"),
    c === void 0 && (c = "_last");
    var p = u._prev
      , d = u._next;
    p ? p._next = d : a[f] === u && (a[f] = d),
    d ? d._prev = p : a[c] === u && (a[c] = p),
    u._next = u._prev = u.parent = null
}, _removeFromParent = function(a, u) {
    a.parent && (!u || a.parent.autoRemoveChildren) && a.parent.remove(a),
    a._act = 0
}, _uncache = function(a, u) {
    if (a && (!u || u._end > a._dur || u._start < 0))
        for (var f = a; f; )
            f._dirty = 1,
            f = f.parent;
    return a
}, _recacheAncestors = function(a) {
    for (var u = a.parent; u && u.parent; )
        u._dirty = 1,
        u.totalDuration(),
        u = u.parent;
    return a
}, _rewindStartAt = function(a, u, f, c) {
    return a._startAt && (_reverting$1 ? a._startAt.revert(_revertConfigNoKill) : a.vars.immediateRender && !a.vars.autoRevert || a._startAt.render(u, !0, c))
}, _hasNoPausedAncestors = function h(a) {
    return !a || a._ts && h(a.parent)
}, _elapsedCycleDuration = function(a) {
    return a._repeat ? _animationCycle(a._tTime, a = a.duration() + a._rDelay) * a : 0
}, _animationCycle = function(a, u) {
    var f = Math.floor(a /= u);
    return a && f === a ? f - 1 : f
}, _parentToChildTotalTime = function(a, u) {
    return (a - u._start) * u._ts + (u._ts >= 0 ? 0 : u._dirty ? u.totalDuration() : u._tDur)
}, _setEnd = function(a) {
    return a._end = _roundPrecise(a._start + (a._tDur / Math.abs(a._ts || a._rts || _tinyNum) || 0))
}, _alignPlayhead = function(a, u) {
    var f = a._dp;
    return f && f.smoothChildTiming && a._ts && (a._start = _roundPrecise(f._time - (a._ts > 0 ? u / a._ts : ((a._dirty ? a.totalDuration() : a._tDur) - u) / -a._ts)),
    _setEnd(a),
    f._dirty || _uncache(f, a)),
    a
}, _postAddChecks = function(a, u) {
    var f;
    if ((u._time || u._initted && !u._dur) && (f = _parentToChildTotalTime(a.rawTime(), u),
    (!u._dur || _clamp(0, u.totalDuration(), f) - u._tTime > _tinyNum) && u.render(f, !0)),
    _uncache(a, u)._dp && a._initted && a._time >= a._dur && a._ts) {
        if (a._dur < a.duration())
            for (f = a; f._dp; )
                f.rawTime() >= 0 && f.totalTime(f._tTime),
                f = f._dp;
        a._zTime = -_tinyNum
    }
}, _addToTimeline = function(a, u, f, c) {
    return u.parent && _removeFromParent(u),
    u._start = _roundPrecise((_isNumber$1(f) ? f : f || a !== _globalTimeline ? _parsePosition(a, f, u) : a._time) + u._delay),
    u._end = _roundPrecise(u._start + (u.totalDuration() / Math.abs(u.timeScale()) || 0)),
    _addLinkedListItem(a, u, "_first", "_last", a._sort ? "_start" : 0),
    _isFromOrFromStart(u) || (a._recent = u),
    c || _postAddChecks(a, u),
    a._ts < 0 && _alignPlayhead(a, a._tTime),
    a
}, _scrollTrigger = function(a, u) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", u)) && _globals.ScrollTrigger.create(u, a)
}, _attemptInitTween = function(a, u, f, c, p) {
    if (_initTween(a, u, p),
    !a._initted)
        return 1;
    if (!f && a._pt && !_reverting$1 && (a._dur && a.vars.lazy !== !1 || !a._dur && a.vars.lazy) && _lastRenderedFrame !== _ticker.frame)
        return _lazyTweens.push(a),
        a._lazy = [p, c],
        1
}, _parentPlayheadIsBeforeStart = function h(a) {
    var u = a.parent;
    return u && u._ts && u._initted && !u._lock && (u.rawTime() < 0 || h(u))
}, _isFromOrFromStart = function(a) {
    var u = a.data;
    return u === "isFromStart" || u === "isStart"
}, _renderZeroDurationTween = function(a, u, f, c) {
    var p = a.ratio, d = u < 0 || !u && (!a._start && _parentPlayheadIsBeforeStart(a) && !(!a._initted && _isFromOrFromStart(a)) || (a._ts < 0 || a._dp._ts < 0) && !_isFromOrFromStart(a)) ? 0 : 1, m = a._rDelay, g = 0, v, _, b;
    if (m && a._repeat && (g = _clamp(0, a._tDur, u),
    _ = _animationCycle(g, m),
    a._yoyo && _ & 1 && (d = 1 - d),
    _ !== _animationCycle(a._tTime, m) && (p = 1 - d,
    a.vars.repeatRefresh && a._initted && a.invalidate())),
    d !== p || _reverting$1 || c || a._zTime === _tinyNum || !u && a._zTime) {
        if (!a._initted && _attemptInitTween(a, u, c, f, g))
            return;
        for (b = a._zTime,
        a._zTime = u || (f ? _tinyNum : 0),
        f || (f = u && !b),
        a.ratio = d,
        a._from && (d = 1 - d),
        a._time = 0,
        a._tTime = g,
        v = a._pt; v; )
            v.r(d, v.d),
            v = v._next;
        u < 0 && _rewindStartAt(a, u, f, !0),
        a._onUpdate && !f && _callback(a, "onUpdate"),
        g && a._repeat && !f && a.parent && _callback(a, "onRepeat"),
        (u >= a._tDur || u < 0) && a.ratio === d && (d && _removeFromParent(a, 1),
        !f && !_reverting$1 && (_callback(a, d ? "onComplete" : "onReverseComplete", !0),
        a._prom && a._prom()))
    } else
        a._zTime || (a._zTime = u)
}, _findNextPauseTween = function(a, u, f) {
    var c;
    if (f > u)
        for (c = a._first; c && c._start <= f; ) {
            if (c.data === "isPause" && c._start > u)
                return c;
            c = c._next
        }
    else
        for (c = a._last; c && c._start >= f; ) {
            if (c.data === "isPause" && c._start < u)
                return c;
            c = c._prev
        }
}, _setDuration = function(a, u, f, c) {
    var p = a._repeat
      , d = _roundPrecise(u) || 0
      , m = a._tTime / a._tDur;
    return m && !c && (a._time *= d / a._dur),
    a._dur = d,
    a._tDur = p ? p < 0 ? 1e10 : _roundPrecise(d * (p + 1) + a._rDelay * p) : d,
    m > 0 && !c && _alignPlayhead(a, a._tTime = a._tDur * m),
    a.parent && _setEnd(a),
    f || _uncache(a.parent, a),
    a
}, _onUpdateTotalDuration = function(a) {
    return a instanceof Timeline ? _uncache(a) : _setDuration(a, a._dur)
}, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
}, _parsePosition = function h(a, u, f) {
    var c = a.labels, p = a._recent || _zeroPosition, d = a.duration() >= _bigNum$2 ? p.endTime(!1) : a._dur, m, g, v;
    return _isString$1(u) && (isNaN(u) || u in c) ? (g = u.charAt(0),
    v = u.substr(-1) === "%",
    m = u.indexOf("="),
    g === "<" || g === ">" ? (m >= 0 && (u = u.replace(/=/, "")),
    (g === "<" ? p._start : p.endTime(p._repeat >= 0)) + (parseFloat(u.substr(1)) || 0) * (v ? (m < 0 ? p : f).totalDuration() / 100 : 1)) : m < 0 ? (u in c || (c[u] = d),
    c[u]) : (g = parseFloat(u.charAt(m - 1) + u.substr(m + 1)),
    v && f && (g = g / 100 * (_isArray(f) ? f[0] : f).totalDuration()),
    m > 1 ? h(a, u.substr(0, m - 1), f) + g : d + g)) : u == null ? d : +u
}, _createTweenType = function(a, u, f) {
    var c = _isNumber$1(u[1]), p = (c ? 2 : 1) + (a < 2 ? 0 : 1), d = u[p], m, g;
    if (c && (d.duration = u[1]),
    d.parent = f,
    a) {
        for (m = d,
        g = f; g && !("immediateRender"in m); )
            m = g.vars.defaults || {},
            g = _isNotFalse(g.vars.inherit) && g.parent;
        d.immediateRender = _isNotFalse(m.immediateRender),
        a < 2 ? d.runBackwards = 1 : d.startAt = u[p - 1]
    }
    return new Tween(u[0],d,u[p + 1])
}, _conditionalReturn = function(a, u) {
    return a || a === 0 ? u(a) : u
}, _clamp = function(a, u, f) {
    return f < a ? a : f > u ? u : f
}, getUnit = function(a, u) {
    return !_isString$1(a) || !(u = _unitExp.exec(a)) ? "" : u[1]
}, clamp$1 = function(a, u, f) {
    return _conditionalReturn(f, function(c) {
        return _clamp(a, u, c)
    })
}, _slice = [].slice, _isArrayLike = function(a, u) {
    return a && _isObject(a) && "length"in a && (!u && !a.length || a.length - 1 in a && _isObject(a[0])) && !a.nodeType && a !== _win$2
}, _flatten = function(a, u, f) {
    return f === void 0 && (f = []),
    a.forEach(function(c) {
        var p;
        return _isString$1(c) && !u || _isArrayLike(c, 1) ? (p = f).push.apply(p, toArray(c)) : f.push(c)
    }) || f
}, toArray = function(a, u, f) {
    return _context$1 && !u && _context$1.selector ? _context$1.selector(a) : _isString$1(a) && !f && (_coreInitted$3 || !_wake()) ? _slice.call((u || _doc$2).querySelectorAll(a), 0) : _isArray(a) ? _flatten(a, f) : _isArrayLike(a) ? _slice.call(a, 0) : a ? [a] : []
}, selector = function(a) {
    return a = toArray(a)[0] || _warn("Invalid scope") || {},
    function(u) {
        var f = a.current || a.nativeElement || a;
        return toArray(u, f.querySelectorAll ? f : f === a ? _warn("Invalid scope") || _doc$2.createElement("div") : a)
    }
}, shuffle = function(a) {
    return a.sort(function() {
        return .5 - Math.random()
    })
}, distribute = function(a) {
    if (_isFunction$1(a))
        return a;
    var u = _isObject(a) ? a : {
        each: a
    }
      , f = _parseEase(u.ease)
      , c = u.from || 0
      , p = parseFloat(u.base) || 0
      , d = {}
      , m = c > 0 && c < 1
      , g = isNaN(c) || m
      , v = u.axis
      , _ = c
      , b = c;
    return _isString$1(c) ? _ = b = {
        center: .5,
        edges: .5,
        end: 1
    }[c] || 0 : !m && g && (_ = c[0],
    b = c[1]),
    function(P, J, x) {
        var w = (x || u).length, pe = d[w], L, R, M, Z, he, et, ei, ii, oi;
        if (!pe) {
            if (oi = u.grid === "auto" ? 0 : (u.grid || [1, _bigNum$2])[1],
            !oi) {
                for (ei = -_bigNum$2; ei < (ei = x[oi++].getBoundingClientRect().left) && oi < w; )
                    ;
                oi--
            }
            for (pe = d[w] = [],
            L = g ? Math.min(oi, w) * _ - .5 : c % oi,
            R = oi === _bigNum$2 ? 0 : g ? w * b / oi - .5 : c / oi | 0,
            ei = 0,
            ii = _bigNum$2,
            et = 0; et < w; et++)
                M = et % oi - L,
                Z = R - (et / oi | 0),
                pe[et] = he = v ? Math.abs(v === "y" ? Z : M) : _sqrt$1(M * M + Z * Z),
                he > ei && (ei = he),
                he < ii && (ii = he);
            c === "random" && shuffle(pe),
            pe.max = ei - ii,
            pe.min = ii,
            pe.v = w = (parseFloat(u.amount) || parseFloat(u.each) * (oi > w ? w - 1 : v ? v === "y" ? w / oi : oi : Math.max(oi, w / oi)) || 0) * (c === "edges" ? -1 : 1),
            pe.b = w < 0 ? p - w : p,
            pe.u = getUnit(u.amount || u.each) || 0,
            f = f && w < 0 ? _invertEase(f) : f
        }
        return w = (pe[P] - pe.min) / pe.max || 0,
        _roundPrecise(pe.b + (f ? f(w) : w) * pe.v) + pe.u
    }
}, _roundModifier = function(a) {
    var u = Math.pow(10, ((a + "").split(".")[1] || "").length);
    return function(f) {
        var c = _roundPrecise(Math.round(parseFloat(f) / a) * a * u);
        return (c - c % 1) / u + (_isNumber$1(f) ? 0 : getUnit(f))
    }
}, snap = function(a, u) {
    var f = _isArray(a), c, p;
    return !f && _isObject(a) && (c = f = a.radius || _bigNum$2,
    a.values ? (a = toArray(a.values),
    (p = !_isNumber$1(a[0])) && (c *= c)) : a = _roundModifier(a.increment)),
    _conditionalReturn(u, f ? _isFunction$1(a) ? function(d) {
        return p = a(d),
        Math.abs(p - d) <= c ? p : d
    }
    : function(d) {
        for (var m = parseFloat(p ? d.x : d), g = parseFloat(p ? d.y : 0), v = _bigNum$2, _ = 0, b = a.length, P, J; b--; )
            p ? (P = a[b].x - m,
            J = a[b].y - g,
            P = P * P + J * J) : P = Math.abs(a[b] - m),
            P < v && (v = P,
            _ = b);
        return _ = !c || v <= c ? a[_] : d,
        p || _ === d || _isNumber$1(d) ? _ : _ + getUnit(d)
    }
    : _roundModifier(a))
}, random = function(a, u, f, c) {
    return _conditionalReturn(_isArray(a) ? !u : f === !0 ? !!(f = 0) : !c, function() {
        return _isArray(a) ? a[~~(Math.random() * a.length)] : (f = f || 1e-5) && (c = f < 1 ? Math.pow(10, (f + "").length - 2) : 1) && Math.floor(Math.round((a - f / 2 + Math.random() * (u - a + f * .99)) / f) * f * c) / c
    })
}, pipe = function() {
    for (var a = arguments.length, u = new Array(a), f = 0; f < a; f++)
        u[f] = arguments[f];
    return function(c) {
        return u.reduce(function(p, d) {
            return d(p)
        }, c)
    }
}, unitize = function(a, u) {
    return function(f) {
        return a(parseFloat(f)) + (u || getUnit(f))
    }
}, normalize = function(a, u, f) {
    return mapRange(a, u, 0, 1, f)
}, _wrapArray = function(a, u, f) {
    return _conditionalReturn(f, function(c) {
        return a[~~u(c)]
    })
}, wrap = function h(a, u, f) {
    var c = u - a;
    return _isArray(a) ? _wrapArray(a, h(0, a.length), u) : _conditionalReturn(f, function(p) {
        return (c + (p - a) % c) % c + a
    })
}, wrapYoyo = function h(a, u, f) {
    var c = u - a
      , p = c * 2;
    return _isArray(a) ? _wrapArray(a, h(0, a.length - 1), u) : _conditionalReturn(f, function(d) {
        return d = (p + (d - a) % p) % p || 0,
        a + (d > c ? p - d : d)
    })
}, _replaceRandom = function(a) {
    for (var u = 0, f = "", c, p, d, m; ~(c = a.indexOf("random(", u)); )
        d = a.indexOf(")", c),
        m = a.charAt(c + 7) === "[",
        p = a.substr(c + 7, d - c - 7).match(m ? _delimitedValueExp : _strictNumExp),
        f += a.substr(u, c - u) + random(m ? p : +p[0], m ? 0 : +p[1], +p[2] || 1e-5),
        u = d + 1;
    return f + a.substr(u, a.length - u)
}, mapRange = function(a, u, f, c, p) {
    var d = u - a
      , m = c - f;
    return _conditionalReturn(p, function(g) {
        return f + ((g - a) / d * m || 0)
    })
}, interpolate = function h(a, u, f, c) {
    var p = isNaN(a + u) ? 0 : function(J) {
        return (1 - J) * a + J * u
    }
    ;
    if (!p) {
        var d = _isString$1(a), m = {}, g, v, _, b, P;
        if (f === !0 && (c = 1) && (f = null),
        d)
            a = {
                p: a
            },
            u = {
                p: u
            };
        else if (_isArray(a) && !_isArray(u)) {
            for (_ = [],
            b = a.length,
            P = b - 2,
            v = 1; v < b; v++)
                _.push(h(a[v - 1], a[v]));
            b--,
            p = function(x) {
                x *= b;
                var w = Math.min(P, ~~x);
                return _[w](x - w)
            }
            ,
            f = u
        } else
            c || (a = _merge(_isArray(a) ? [] : {}, a));
        if (!_) {
            for (g in u)
                _addPropTween.call(m, a, g, "get", u[g]);
            p = function(x) {
                return _renderPropTweens(x, m) || (d ? a.p : a)
            }
        }
    }
    return _conditionalReturn(f, p)
}, _getLabelInDirection = function(a, u, f) {
    var c = a.labels, p = _bigNum$2, d, m, g;
    for (d in c)
        m = c[d] - u,
        m < 0 == !!f && m && p > (m = Math.abs(m)) && (g = d,
        p = m);
    return g
}, _callback = function(a, u, f) {
    var c = a.vars, p = c[u], d = _context$1, m = a._ctx, g, v, _;
    if (p)
        return g = c[u + "Params"],
        v = c.callbackScope || a,
        f && _lazyTweens.length && _lazyRender(),
        m && (_context$1 = m),
        _ = g ? p.apply(v, g) : p.call(v),
        _context$1 = d,
        _
}, _interrupt = function(a) {
    return _removeFromParent(a),
    a.scrollTrigger && a.scrollTrigger.kill(!!_reverting$1),
    a.progress() < 1 && _callback(a, "onInterrupt"),
    a
}, _quickTween, _createPlugin = function(a) {
    a = !a.name && a.default || a;
    var u = a.name
      , f = _isFunction$1(a)
      , c = u && !f && a.init ? function() {
        this._props = []
    }
    : a
      , p = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
    }
      , d = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
    };
    if (_wake(),
    a !== c) {
        if (_plugins[u])
            return;
        _setDefaults(c, _setDefaults(_copyExcluding(a, p), d)),
        _merge(c.prototype, _merge(p, _copyExcluding(a, d))),
        _plugins[c.prop = u] = c,
        a.targetTest && (_harnessPlugins.push(c),
        _reservedProps[u] = 1),
        u = (u === "css" ? "CSS" : u.charAt(0).toUpperCase() + u.substr(1)) + "Plugin"
    }
    _addGlobal(u, c),
    a.register && a.register(gsap$4, c, PropTween)
}, _255 = 255, _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
}, _hue = function(a, u, f) {
    return a += a < 0 ? 1 : a > 1 ? -1 : 0,
    (a * 6 < 1 ? u + (f - u) * a * 6 : a < .5 ? f : a * 3 < 2 ? u + (f - u) * (2 / 3 - a) * 6 : u) * _255 + .5 | 0
}, splitColor = function(a, u, f) {
    var c = a ? _isNumber$1(a) ? [a >> 16, a >> 8 & _255, a & _255] : 0 : _colorLookup.black, p, d, m, g, v, _, b, P, J, x;
    if (!c) {
        if (a.substr(-1) === "," && (a = a.substr(0, a.length - 1)),
        _colorLookup[a])
            c = _colorLookup[a];
        else if (a.charAt(0) === "#") {
            if (a.length < 6 && (p = a.charAt(1),
            d = a.charAt(2),
            m = a.charAt(3),
            a = "#" + p + p + d + d + m + m + (a.length === 5 ? a.charAt(4) + a.charAt(4) : "")),
            a.length === 9)
                return c = parseInt(a.substr(1, 6), 16),
                [c >> 16, c >> 8 & _255, c & _255, parseInt(a.substr(7), 16) / 255];
            a = parseInt(a.substr(1), 16),
            c = [a >> 16, a >> 8 & _255, a & _255]
        } else if (a.substr(0, 3) === "hsl") {
            if (c = x = a.match(_strictNumExp),
            !u)
                g = +c[0] % 360 / 360,
                v = +c[1] / 100,
                _ = +c[2] / 100,
                d = _ <= .5 ? _ * (v + 1) : _ + v - _ * v,
                p = _ * 2 - d,
                c.length > 3 && (c[3] *= 1),
                c[0] = _hue(g + 1 / 3, p, d),
                c[1] = _hue(g, p, d),
                c[2] = _hue(g - 1 / 3, p, d);
            else if (~a.indexOf("="))
                return c = a.match(_numExp$1),
                f && c.length < 4 && (c[3] = 1),
                c
        } else
            c = a.match(_strictNumExp) || _colorLookup.transparent;
        c = c.map(Number)
    }
    return u && !x && (p = c[0] / _255,
    d = c[1] / _255,
    m = c[2] / _255,
    b = Math.max(p, d, m),
    P = Math.min(p, d, m),
    _ = (b + P) / 2,
    b === P ? g = v = 0 : (J = b - P,
    v = _ > .5 ? J / (2 - b - P) : J / (b + P),
    g = b === p ? (d - m) / J + (d < m ? 6 : 0) : b === d ? (m - p) / J + 2 : (p - d) / J + 4,
    g *= 60),
    c[0] = ~~(g + .5),
    c[1] = ~~(v * 100 + .5),
    c[2] = ~~(_ * 100 + .5)),
    f && c.length < 4 && (c[3] = 1),
    c
}, _colorOrderData = function(a) {
    var u = []
      , f = []
      , c = -1;
    return a.split(_colorExp).forEach(function(p) {
        var d = p.match(_numWithUnitExp) || [];
        u.push.apply(u, d),
        f.push(c += d.length + 1)
    }),
    u.c = f,
    u
}, _formatColors = function(a, u, f) {
    var c = "", p = (a + c).match(_colorExp), d = u ? "hsla(" : "rgba(", m = 0, g, v, _, b;
    if (!p)
        return a;
    if (p = p.map(function(P) {
        return (P = splitColor(P, u, 1)) && d + (u ? P[0] + "," + P[1] + "%," + P[2] + "%," + P[3] : P.join(",")) + ")"
    }),
    f && (_ = _colorOrderData(a),
    g = f.c,
    g.join(c) !== _.c.join(c)))
        for (v = a.replace(_colorExp, "1").split(_numWithUnitExp),
        b = v.length - 1; m < b; m++)
            c += v[m] + (~g.indexOf(m) ? p.shift() || d + "0,0,0,0)" : (_.length ? _ : p.length ? p : f).shift());
    if (!v)
        for (v = a.split(_colorExp),
        b = v.length - 1; m < b; m++)
            c += v[m] + p[m];
    return c + v[b]
}, _colorExp = function() {
    var h = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", a;
    for (a in _colorLookup)
        h += "|" + a + "\\b";
    return new RegExp(h + ")","gi")
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function(a) {
    var u = a.join(" "), f;
    if (_colorExp.lastIndex = 0,
    _colorExp.test(u))
        return f = _hslExp.test(u),
        a[1] = _formatColors(a[1], f),
        a[0] = _formatColors(a[0], f, _colorOrderData(a[1])),
        !0
}, _tickerActive, _ticker = function() {
    var h = Date.now, a = 500, u = 33, f = h(), c = f, p = 1e3 / 240, d = p, m = [], g, v, _, b, P, J, x = function w(pe) {
        var L = h() - c, R = pe === !0, M, Z, he, et;
        if (L > a && (f += L - u),
        c += L,
        he = c - f,
        M = he - d,
        (M > 0 || R) && (et = ++b.frame,
        P = he - b.time * 1e3,
        b.time = he = he / 1e3,
        d += M + (M >= p ? 4 : p - M),
        Z = 1),
        R || (g = v(w)),
        Z)
            for (J = 0; J < m.length; J++)
                m[J](he, P, et, pe)
    };
    return b = {
        time: 0,
        frame: 0,
        tick: function() {
            x(!0)
        },
        deltaRatio: function(pe) {
            return P / (1e3 / (pe || 60))
        },
        wake: function() {
            _coreReady && (!_coreInitted$3 && _windowExists$2() && (_win$2 = _coreInitted$3 = window,
            _doc$2 = _win$2.document || {},
            _globals.gsap = gsap$4,
            (_win$2.gsapVersions || (_win$2.gsapVersions = [])).push(gsap$4.version),
            _install(_installScope || _win$2.GreenSockGlobals || !_win$2.gsap && _win$2 || {}),
            _ = _win$2.requestAnimationFrame),
            g && b.sleep(),
            v = _ || function(pe) {
                return setTimeout(pe, d - b.time * 1e3 + 1 | 0)
            }
            ,
            _tickerActive = 1,
            x(2))
        },
        sleep: function() {
            (_ ? _win$2.cancelAnimationFrame : clearTimeout)(g),
            _tickerActive = 0,
            v = _emptyFunc
        },
        lagSmoothing: function(pe, L) {
            a = pe || 1 / 0,
            u = Math.min(L || 33, a)
        },
        fps: function(pe) {
            p = 1e3 / (pe || 240),
            d = b.time * 1e3 + p
        },
        add: function(pe, L, R) {
            var M = L ? function(Z, he, et, ei) {
                pe(Z, he, et, ei),
                b.remove(M)
            }
            : pe;
            return b.remove(pe),
            m[R ? "unshift" : "push"](M),
            _wake(),
            M
        },
        remove: function(pe, L) {
            ~(L = m.indexOf(pe)) && m.splice(L, 1) && J >= L && J--
        },
        _listeners: m
    },
    b
}(), _wake = function() {
    return !_tickerActive && _ticker.wake()
}, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function(a) {
    for (var u = {}, f = a.substr(1, a.length - 3).split(":"), c = f[0], p = 1, d = f.length, m, g, v; p < d; p++)
        g = f[p],
        m = p !== d - 1 ? g.lastIndexOf(",") : g.length,
        v = g.substr(0, m),
        u[c] = isNaN(v) ? v.replace(_quotesExp, "").trim() : +v,
        c = g.substr(m + 1).trim();
    return u
}, _valueInParentheses = function(a) {
    var u = a.indexOf("(") + 1
      , f = a.indexOf(")")
      , c = a.indexOf("(", u);
    return a.substring(u, ~c && c < f ? a.indexOf(")", f + 1) : f)
}, _configEaseFromString = function(a) {
    var u = (a + "").split("(")
      , f = _easeMap[u[0]];
    return f && u.length > 1 && f.config ? f.config.apply(null, ~a.indexOf("{") ? [_parseObjectInString(u[1])] : _valueInParentheses(a).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(a) ? _easeMap._CE("", a) : f
}, _invertEase = function(a) {
    return function(u) {
        return 1 - a(1 - u)
    }
}, _propagateYoyoEase = function h(a, u) {
    for (var f = a._first, c; f; )
        f instanceof Timeline ? h(f, u) : f.vars.yoyoEase && (!f._yoyo || !f._repeat) && f._yoyo !== u && (f.timeline ? h(f.timeline, u) : (c = f._ease,
        f._ease = f._yEase,
        f._yEase = c,
        f._yoyo = u)),
        f = f._next
}, _parseEase = function(a, u) {
    return a && (_isFunction$1(a) ? a : _easeMap[a] || _configEaseFromString(a)) || u
}, _insertEase = function(a, u, f, c) {
    f === void 0 && (f = function(g) {
        return 1 - u(1 - g)
    }
    ),
    c === void 0 && (c = function(g) {
        return g < .5 ? u(g * 2) / 2 : 1 - u((1 - g) * 2) / 2
    }
    );
    var p = {
        easeIn: u,
        easeOut: f,
        easeInOut: c
    }, d;
    return _forEachName(a, function(m) {
        _easeMap[m] = _globals[m] = p,
        _easeMap[d = m.toLowerCase()] = f;
        for (var g in p)
            _easeMap[d + (g === "easeIn" ? ".in" : g === "easeOut" ? ".out" : ".inOut")] = _easeMap[m + "." + g] = p[g]
    }),
    p
}, _easeInOutFromOut = function(a) {
    return function(u) {
        return u < .5 ? (1 - a(1 - u * 2)) / 2 : .5 + a((u - .5) * 2) / 2
    }
}, _configElastic = function h(a, u, f) {
    var c = u >= 1 ? u : 1
      , p = (f || (a ? .3 : .45)) / (u < 1 ? u : 1)
      , d = p / _2PI * (Math.asin(1 / c) || 0)
      , m = function(_) {
        return _ === 1 ? 1 : c * Math.pow(2, -10 * _) * _sin$1((_ - d) * p) + 1
    }
      , g = a === "out" ? m : a === "in" ? function(v) {
        return 1 - m(1 - v)
    }
    : _easeInOutFromOut(m);
    return p = _2PI / p,
    g.config = function(v, _) {
        return h(a, v, _)
    }
    ,
    g
}, _configBack = function h(a, u) {
    u === void 0 && (u = 1.70158);
    var f = function(d) {
        return d ? --d * d * ((u + 1) * d + u) + 1 : 0
    }
      , c = a === "out" ? f : a === "in" ? function(p) {
        return 1 - f(1 - p)
    }
    : _easeInOutFromOut(f);
    return c.config = function(p) {
        return h(a, p)
    }
    ,
    c
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(h, a) {
    var u = a < 5 ? a + 1 : a;
    _insertEase(h + ",Power" + (u - 1), a ? function(f) {
        return Math.pow(f, u)
    }
    : function(f) {
        return f
    }
    , function(f) {
        return 1 - Math.pow(1 - f, u)
    }, function(f) {
        return f < .5 ? Math.pow(f * 2, u) / 2 : 1 - Math.pow((1 - f) * 2, u) / 2
    })
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(h, a) {
    var u = 1 / a
      , f = 2 * u
      , c = 2.5 * u
      , p = function(m) {
        return m < u ? h * m * m : m < f ? h * Math.pow(m - 1.5 / a, 2) + .75 : m < c ? h * (m -= 2.25 / a) * m + .9375 : h * Math.pow(m - 2.625 / a, 2) + .984375
    };
    _insertEase("Bounce", function(d) {
        return 1 - p(1 - d)
    }, p)
}
)(7.5625, 2.75);
_insertEase("Expo", function(h) {
    return h ? Math.pow(2, 10 * (h - 1)) : 0
});
_insertEase("Circ", function(h) {
    return -(_sqrt$1(1 - h * h) - 1)
});
_insertEase("Sine", function(h) {
    return h === 1 ? 1 : -_cos$1(h * _HALF_PI) + 1
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function(a, u) {
        a === void 0 && (a = 1);
        var f = 1 / a
          , c = a + (u ? 0 : 1)
          , p = u ? 1 : 0
          , d = 1 - _tinyNum;
        return function(m) {
            return ((c * _clamp(0, d, m) | 0) + p) * f
        }
    }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(h) {
    return _callbackNames += h + "," + h + "Params,"
});
var GSCache = function(a, u) {
    this.id = _gsID++,
    a._gsap = this,
    this.target = a,
    this.harness = u,
    this.get = u ? u.get : _getProperty,
    this.set = u ? u.getSetter : _getSetter
}
  , Animation = function() {
    function h(u) {
        this.vars = u,
        this._delay = +u.delay || 0,
        (this._repeat = u.repeat === 1 / 0 ? -2 : u.repeat || 0) && (this._rDelay = u.repeatDelay || 0,
        this._yoyo = !!u.yoyo || !!u.yoyoEase),
        this._ts = 1,
        _setDuration(this, +u.duration, 1, 1),
        this.data = u.data,
        _context$1 && (this._ctx = _context$1,
        _context$1.data.push(this)),
        _tickerActive || _ticker.wake()
    }
    var a = h.prototype;
    return a.delay = function(f) {
        return f || f === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + f - this._delay),
        this._delay = f,
        this) : this._delay
    }
    ,
    a.duration = function(f) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? f + (f + this._rDelay) * this._repeat : f) : this.totalDuration() && this._dur
    }
    ,
    a.totalDuration = function(f) {
        return arguments.length ? (this._dirty = 0,
        _setDuration(this, this._repeat < 0 ? f : (f - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    a.totalTime = function(f, c) {
        if (_wake(),
        !arguments.length)
            return this._tTime;
        var p = this._dp;
        if (p && p.smoothChildTiming && this._ts) {
            for (_alignPlayhead(this, f),
            !p._dp || p.parent || _postAddChecks(p, this); p && p.parent; )
                p.parent._time !== p._start + (p._ts >= 0 ? p._tTime / p._ts : (p.totalDuration() - p._tTime) / -p._ts) && p.totalTime(p._tTime, !0),
                p = p.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && f < this._tDur || this._ts < 0 && f > 0 || !this._tDur && !f) && _addToTimeline(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== f || !this._dur && !c || this._initted && Math.abs(this._zTime) === _tinyNum || !f && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = f),
        _lazySafeRender(this, f, c)),
        this
    }
    ,
    a.time = function(f, c) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), f + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (f ? this._dur : 0), c) : this._time
    }
    ,
    a.totalProgress = function(f, c) {
        return arguments.length ? this.totalTime(this.totalDuration() * f, c) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    a.progress = function(f, c) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - f : f) + _elapsedCycleDuration(this), c) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    a.iteration = function(f, c) {
        var p = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (f - 1) * p, c) : this._repeat ? _animationCycle(this._tTime, p) + 1 : 1
    }
    ,
    a.timeScale = function(f) {
        if (!arguments.length)
            return this._rts === -_tinyNum ? 0 : this._rts;
        if (this._rts === f)
            return this;
        var c = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
        return this._rts = +f || 0,
        this._ts = this._ps || f === -_tinyNum ? 0 : this._rts,
        this.totalTime(_clamp(-this._delay, this._tDur, c), !0),
        _setEnd(this),
        _recacheAncestors(this)
    }
    ,
    a.paused = function(f) {
        return arguments.length ? (this._ps !== f && (this._ps = f,
        f ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (_wake(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)))),
        this) : this._ps
    }
    ,
    a.startTime = function(f) {
        if (arguments.length) {
            this._start = f;
            var c = this.parent || this._dp;
            return c && (c._sort || !this.parent) && _addToTimeline(c, this, f - this._delay),
            this
        }
        return this._start
    }
    ,
    a.endTime = function(f) {
        return this._start + (_isNotFalse(f) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    a.rawTime = function(f) {
        var c = this.parent || this._dp;
        return c ? f && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? _parentToChildTotalTime(c.rawTime(f), this) : this._tTime : this._tTime
    }
    ,
    a.revert = function(f) {
        f === void 0 && (f = _revertConfig);
        var c = _reverting$1;
        return _reverting$1 = f,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(f),
        this.totalTime(-.01, f.suppressEvents)),
        this.data !== "nested" && f.kill !== !1 && this.kill(),
        _reverting$1 = c,
        this
    }
    ,
    a.globalTime = function(f) {
        for (var c = this, p = arguments.length ? f : c.rawTime(); c; )
            p = c._start + p / (c._ts || 1),
            c = c._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(f) : p
    }
    ,
    a.repeat = function(f) {
        return arguments.length ? (this._repeat = f === 1 / 0 ? -2 : f,
        _onUpdateTotalDuration(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    a.repeatDelay = function(f) {
        if (arguments.length) {
            var c = this._time;
            return this._rDelay = f,
            _onUpdateTotalDuration(this),
            c ? this.time(c) : this
        }
        return this._rDelay
    }
    ,
    a.yoyo = function(f) {
        return arguments.length ? (this._yoyo = f,
        this) : this._yoyo
    }
    ,
    a.seek = function(f, c) {
        return this.totalTime(_parsePosition(this, f), _isNotFalse(c))
    }
    ,
    a.restart = function(f, c) {
        return this.play().totalTime(f ? -this._delay : 0, _isNotFalse(c))
    }
    ,
    a.play = function(f, c) {
        return f != null && this.seek(f, c),
        this.reversed(!1).paused(!1)
    }
    ,
    a.reverse = function(f, c) {
        return f != null && this.seek(f || this.totalDuration(), c),
        this.reversed(!0).paused(!1)
    }
    ,
    a.pause = function(f, c) {
        return f != null && this.seek(f, c),
        this.paused(!0)
    }
    ,
    a.resume = function() {
        return this.paused(!1)
    }
    ,
    a.reversed = function(f) {
        return arguments.length ? (!!f !== this.reversed() && this.timeScale(-this._rts || (f ? -_tinyNum : 0)),
        this) : this._rts < 0
    }
    ,
    a.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -_tinyNum,
        this
    }
    ,
    a.isActive = function() {
        var f = this.parent || this._dp, c = this._start, p;
        return !!(!f || this._ts && this._initted && f.isActive() && (p = f.rawTime(!0)) >= c && p < this.endTime(!0) - _tinyNum)
    }
    ,
    a.eventCallback = function(f, c, p) {
        var d = this.vars;
        return arguments.length > 1 ? (c ? (d[f] = c,
        p && (d[f + "Params"] = p),
        f === "onUpdate" && (this._onUpdate = c)) : delete d[f],
        this) : d[f]
    }
    ,
    a.then = function(f) {
        var c = this;
        return new Promise(function(p) {
            var d = _isFunction$1(f) ? f : _passThrough
              , m = function() {
                var v = c.then;
                c.then = null,
                _isFunction$1(d) && (d = d(c)) && (d.then || d === c) && (c.then = v),
                p(d),
                c.then = v
            };
            c._initted && c.totalProgress() === 1 && c._ts >= 0 || !c._tTime && c._ts < 0 ? m() : c._prom = m
        }
        )
    }
    ,
    a.kill = function() {
        _interrupt(this)
    }
    ,
    h
}();
_setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Timeline = function(h) {
    _inheritsLoose(a, h);
    function a(f, c) {
        var p;
        return f === void 0 && (f = {}),
        p = h.call(this, f) || this,
        p.labels = {},
        p.smoothChildTiming = !!f.smoothChildTiming,
        p.autoRemoveChildren = !!f.autoRemoveChildren,
        p._sort = _isNotFalse(f.sortChildren),
        _globalTimeline && _addToTimeline(f.parent || _globalTimeline, _assertThisInitialized(p), c),
        f.reversed && p.reverse(),
        f.paused && p.paused(!0),
        f.scrollTrigger && _scrollTrigger(_assertThisInitialized(p), f.scrollTrigger),
        p
    }
    var u = a.prototype;
    return u.to = function(c, p, d) {
        return _createTweenType(0, arguments, this),
        this
    }
    ,
    u.from = function(c, p, d) {
        return _createTweenType(1, arguments, this),
        this
    }
    ,
    u.fromTo = function(c, p, d, m) {
        return _createTweenType(2, arguments, this),
        this
    }
    ,
    u.set = function(c, p, d) {
        return p.duration = 0,
        p.parent = this,
        _inheritDefaults(p).repeatDelay || (p.repeat = 0),
        p.immediateRender = !!p.immediateRender,
        new Tween(c,p,_parsePosition(this, d),1),
        this
    }
    ,
    u.call = function(c, p, d) {
        return _addToTimeline(this, Tween.delayedCall(0, c, p), d)
    }
    ,
    u.staggerTo = function(c, p, d, m, g, v, _) {
        return d.duration = p,
        d.stagger = d.stagger || m,
        d.onComplete = v,
        d.onCompleteParams = _,
        d.parent = this,
        new Tween(c,d,_parsePosition(this, g)),
        this
    }
    ,
    u.staggerFrom = function(c, p, d, m, g, v, _) {
        return d.runBackwards = 1,
        _inheritDefaults(d).immediateRender = _isNotFalse(d.immediateRender),
        this.staggerTo(c, p, d, m, g, v, _)
    }
    ,
    u.staggerFromTo = function(c, p, d, m, g, v, _, b) {
        return m.startAt = d,
        _inheritDefaults(m).immediateRender = _isNotFalse(m.immediateRender),
        this.staggerTo(c, p, m, g, v, _, b)
    }
    ,
    u.render = function(c, p, d) {
        var m = this._time, g = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, _ = c <= 0 ? 0 : _roundPrecise(c), b = this._zTime < 0 != c < 0 && (this._initted || !v), P, J, x, w, pe, L, R, M, Z, he, et, ei;
        if (this !== _globalTimeline && _ > g && c >= 0 && (_ = g),
        _ !== this._tTime || d || b) {
            if (m !== this._time && v && (_ += this._time - m,
            c += this._time - m),
            P = _,
            Z = this._start,
            M = this._ts,
            L = !M,
            b && (v || (m = this._zTime),
            (c || !p) && (this._zTime = c)),
            this._repeat) {
                if (et = this._yoyo,
                pe = v + this._rDelay,
                this._repeat < -1 && c < 0)
                    return this.totalTime(pe * 100 + c, p, d);
                if (P = _roundPrecise(_ % pe),
                _ === g ? (w = this._repeat,
                P = v) : (w = ~~(_ / pe),
                w && w === _ / pe && (P = v,
                w--),
                P > v && (P = v)),
                he = _animationCycle(this._tTime, pe),
                !m && this._tTime && he !== w && (he = w),
                et && w & 1 && (P = v - P,
                ei = 1),
                w !== he && !this._lock) {
                    var ii = et && he & 1
                      , oi = ii === (et && w & 1);
                    if (w < he && (ii = !ii),
                    m = ii ? 0 : v,
                    this._lock = 1,
                    this.render(m || (ei ? 0 : _roundPrecise(w * pe)), p, !v)._lock = 0,
                    this._tTime = _,
                    !p && this.parent && _callback(this, "onRepeat"),
                    this.vars.repeatRefresh && !ei && (this.invalidate()._lock = 1),
                    m && m !== this._time || L !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (v = this._dur,
                    g = this._tDur,
                    oi && (this._lock = 2,
                    m = ii ? v : -1e-4,
                    this.render(m, !0),
                    this.vars.repeatRefresh && !ei && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !L)
                        return this;
                    _propagateYoyoEase(this, ei)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (R = _findNextPauseTween(this, _roundPrecise(m), _roundPrecise(P)),
            R && (_ -= P - (P = R._start))),
            this._tTime = _,
            this._time = P,
            this._act = !M,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = c,
            m = 0),
            !m && P && !p && (_callback(this, "onStart"),
            this._tTime !== _))
                return this;
            if (P >= m && c >= 0)
                for (J = this._first; J; ) {
                    if (x = J._next,
                    (J._act || P >= J._start) && J._ts && R !== J) {
                        if (J.parent !== this)
                            return this.render(c, p, d);
                        if (J.render(J._ts > 0 ? (P - J._start) * J._ts : (J._dirty ? J.totalDuration() : J._tDur) + (P - J._start) * J._ts, p, d),
                        P !== this._time || !this._ts && !L) {
                            R = 0,
                            x && (_ += this._zTime = -_tinyNum);
                            break
                        }
                    }
                    J = x
                }
            else {
                J = this._last;
                for (var hi = c < 0 ? c : P; J; ) {
                    if (x = J._prev,
                    (J._act || hi <= J._end) && J._ts && R !== J) {
                        if (J.parent !== this)
                            return this.render(c, p, d);
                        if (J.render(J._ts > 0 ? (hi - J._start) * J._ts : (J._dirty ? J.totalDuration() : J._tDur) + (hi - J._start) * J._ts, p, d || _reverting$1 && (J._initted || J._startAt)),
                        P !== this._time || !this._ts && !L) {
                            R = 0,
                            x && (_ += this._zTime = hi ? -_tinyNum : _tinyNum);
                            break
                        }
                    }
                    J = x
                }
            }
            if (R && !p && (this.pause(),
            R.render(P >= m ? 0 : -_tinyNum)._zTime = P >= m ? 1 : -1,
            this._ts))
                return this._start = Z,
                _setEnd(this),
                this.render(c, p, d);
            this._onUpdate && !p && _callback(this, "onUpdate", !0),
            (_ === g && this._tTime >= this.totalDuration() || !_ && m) && (Z === this._start || Math.abs(M) !== Math.abs(this._ts)) && (this._lock || ((c || !v) && (_ === g && this._ts > 0 || !_ && this._ts < 0) && _removeFromParent(this, 1),
            !p && !(c < 0 && !m) && (_ || m || !g) && (_callback(this, _ === g && c >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(_ < g && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    u.add = function(c, p) {
        var d = this;
        if (_isNumber$1(p) || (p = _parsePosition(this, p, c)),
        !(c instanceof Animation)) {
            if (_isArray(c))
                return c.forEach(function(m) {
                    return d.add(m, p)
                }),
                this;
            if (_isString$1(c))
                return this.addLabel(c, p);
            if (_isFunction$1(c))
                c = Tween.delayedCall(0, c);
            else
                return this
        }
        return this !== c ? _addToTimeline(this, c, p) : this
    }
    ,
    u.getChildren = function(c, p, d, m) {
        c === void 0 && (c = !0),
        p === void 0 && (p = !0),
        d === void 0 && (d = !0),
        m === void 0 && (m = -_bigNum$2);
        for (var g = [], v = this._first; v; )
            v._start >= m && (v instanceof Tween ? p && g.push(v) : (d && g.push(v),
            c && g.push.apply(g, v.getChildren(!0, p, d)))),
            v = v._next;
        return g
    }
    ,
    u.getById = function(c) {
        for (var p = this.getChildren(1, 1, 1), d = p.length; d--; )
            if (p[d].vars.id === c)
                return p[d]
    }
    ,
    u.remove = function(c) {
        return _isString$1(c) ? this.removeLabel(c) : _isFunction$1(c) ? this.killTweensOf(c) : (_removeLinkedListItem(this, c),
        c === this._recent && (this._recent = this._last),
        _uncache(this))
    }
    ,
    u.totalTime = function(c, p) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? c / this._ts : (this.totalDuration() - c) / -this._ts))),
        h.prototype.totalTime.call(this, c, p),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    u.addLabel = function(c, p) {
        return this.labels[c] = _parsePosition(this, p),
        this
    }
    ,
    u.removeLabel = function(c) {
        return delete this.labels[c],
        this
    }
    ,
    u.addPause = function(c, p, d) {
        var m = Tween.delayedCall(0, p || _emptyFunc, d);
        return m.data = "isPause",
        this._hasPause = 1,
        _addToTimeline(this, m, _parsePosition(this, c))
    }
    ,
    u.removePause = function(c) {
        var p = this._first;
        for (c = _parsePosition(this, c); p; )
            p._start === c && p.data === "isPause" && _removeFromParent(p),
            p = p._next
    }
    ,
    u.killTweensOf = function(c, p, d) {
        for (var m = this.getTweensOf(c, d), g = m.length; g--; )
            _overwritingTween !== m[g] && m[g].kill(c, p);
        return this
    }
    ,
    u.getTweensOf = function(c, p) {
        for (var d = [], m = toArray(c), g = this._first, v = _isNumber$1(p), _; g; )
            g instanceof Tween ? _arrayContainsAny(g._targets, m) && (v ? (!_overwritingTween || g._initted && g._ts) && g.globalTime(0) <= p && g.globalTime(g.totalDuration()) > p : !p || g.isActive()) && d.push(g) : (_ = g.getTweensOf(m, p)).length && d.push.apply(d, _),
            g = g._next;
        return d
    }
    ,
    u.tweenTo = function(c, p) {
        p = p || {};
        var d = this, m = _parsePosition(d, c), g = p, v = g.startAt, _ = g.onStart, b = g.onStartParams, P = g.immediateRender, J, x = Tween.to(d, _setDefaults({
            ease: p.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: m,
            overwrite: "auto",
            duration: p.duration || Math.abs((m - (v && "time"in v ? v.time : d._time)) / d.timeScale()) || _tinyNum,
            onStart: function() {
                if (d.pause(),
                !J) {
                    var pe = p.duration || Math.abs((m - (v && "time"in v ? v.time : d._time)) / d.timeScale());
                    x._dur !== pe && _setDuration(x, pe, 0, 1).render(x._time, !0, !0),
                    J = 1
                }
                _ && _.apply(x, b || [])
            }
        }, p));
        return P ? x.render(0) : x
    }
    ,
    u.tweenFromTo = function(c, p, d) {
        return this.tweenTo(p, _setDefaults({
            startAt: {
                time: _parsePosition(this, c)
            }
        }, d))
    }
    ,
    u.recent = function() {
        return this._recent
    }
    ,
    u.nextLabel = function(c) {
        return c === void 0 && (c = this._time),
        _getLabelInDirection(this, _parsePosition(this, c))
    }
    ,
    u.previousLabel = function(c) {
        return c === void 0 && (c = this._time),
        _getLabelInDirection(this, _parsePosition(this, c), 1)
    }
    ,
    u.currentLabel = function(c) {
        return arguments.length ? this.seek(c, !0) : this.previousLabel(this._time + _tinyNum)
    }
    ,
    u.shiftChildren = function(c, p, d) {
        d === void 0 && (d = 0);
        for (var m = this._first, g = this.labels, v; m; )
            m._start >= d && (m._start += c,
            m._end += c),
            m = m._next;
        if (p)
            for (v in g)
                g[v] >= d && (g[v] += c);
        return _uncache(this)
    }
    ,
    u.invalidate = function(c) {
        var p = this._first;
        for (this._lock = 0; p; )
            p.invalidate(c),
            p = p._next;
        return h.prototype.invalidate.call(this, c)
    }
    ,
    u.clear = function(c) {
        c === void 0 && (c = !0);
        for (var p = this._first, d; p; )
            d = p._next,
            this.remove(p),
            p = d;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        c && (this.labels = {}),
        _uncache(this)
    }
    ,
    u.totalDuration = function(c) {
        var p = 0, d = this, m = d._last, g = _bigNum$2, v, _, b;
        if (arguments.length)
            return d.timeScale((d._repeat < 0 ? d.duration() : d.totalDuration()) / (d.reversed() ? -c : c));
        if (d._dirty) {
            for (b = d.parent; m; )
                v = m._prev,
                m._dirty && m.totalDuration(),
                _ = m._start,
                _ > g && d._sort && m._ts && !d._lock ? (d._lock = 1,
                _addToTimeline(d, m, _ - m._delay, 1)._lock = 0) : g = _,
                _ < 0 && m._ts && (p -= _,
                (!b && !d._dp || b && b.smoothChildTiming) && (d._start += _ / d._ts,
                d._time -= _,
                d._tTime -= _),
                d.shiftChildren(-_, !1, -1 / 0),
                g = 0),
                m._end > p && m._ts && (p = m._end),
                m = v;
            _setDuration(d, d === _globalTimeline && d._time > p ? d._time : p, 1, 1),
            d._dirty = 0
        }
        return d._tDur
    }
    ,
    a.updateRoot = function(c) {
        if (_globalTimeline._ts && (_lazySafeRender(_globalTimeline, _parentToChildTotalTime(c, _globalTimeline)),
        _lastRenderedFrame = _ticker.frame),
        _ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config$1.autoSleep || 120;
            var p = _globalTimeline._first;
            if ((!p || !p._ts) && _config$1.autoSleep && _ticker._listeners.length < 2) {
                for (; p && !p._ts; )
                    p = p._next;
                p || _ticker.sleep()
            }
        }
    }
    ,
    a
}(Animation);
_setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function(a, u, f, c, p, d, m) {
    var g = new PropTween(this._pt,a,u,0,1,_renderComplexString,null,p), v = 0, _ = 0, b, P, J, x, w, pe, L, R;
    for (g.b = f,
    g.e = c,
    f += "",
    c += "",
    (L = ~c.indexOf("random(")) && (c = _replaceRandom(c)),
    d && (R = [f, c],
    d(R, a, u),
    f = R[0],
    c = R[1]),
    P = f.match(_complexStringNumExp) || []; b = _complexStringNumExp.exec(c); )
        x = b[0],
        w = c.substring(v, b.index),
        J ? J = (J + 1) % 5 : w.substr(-5) === "rgba(" && (J = 1),
        x !== P[_++] && (pe = parseFloat(P[_ - 1]) || 0,
        g._pt = {
            _next: g._pt,
            p: w || _ === 1 ? w : ",",
            s: pe,
            c: x.charAt(1) === "=" ? _parseRelative(pe, x) - pe : parseFloat(x) - pe,
            m: J && J < 4 ? Math.round : 0
        },
        v = _complexStringNumExp.lastIndex);
    return g.c = v < c.length ? c.substring(v, c.length) : "",
    g.fp = m,
    (_relExp.test(c) || L) && (g.e = 0),
    this._pt = g,
    g
}, _addPropTween = function(a, u, f, c, p, d, m, g, v, _) {
    _isFunction$1(c) && (c = c(p || 0, a, d));
    var b = a[u], P = f !== "get" ? f : _isFunction$1(b) ? v ? a[u.indexOf("set") || !_isFunction$1(a["get" + u.substr(3)]) ? u : "get" + u.substr(3)](v) : a[u]() : b, J = _isFunction$1(b) ? v ? _setterFuncWithParam : _setterFunc : _setterPlain, x;
    if (_isString$1(c) && (~c.indexOf("random(") && (c = _replaceRandom(c)),
    c.charAt(1) === "=" && (x = _parseRelative(P, c) + (getUnit(P) || 0),
    (x || x === 0) && (c = x))),
    !_ || P !== c || _forceAllPropTweens)
        return !isNaN(P * c) && c !== "" ? (x = new PropTween(this._pt,a,u,+P || 0,c - (P || 0),typeof b == "boolean" ? _renderBoolean : _renderPlain,0,J),
        v && (x.fp = v),
        m && x.modifier(m, this, a),
        this._pt = x) : (!b && !(u in a) && _missingPlugin(u, c),
        _addComplexStringPropTween.call(this, a, u, P, c, J, g || _config$1.stringFilter, v))
}, _processVars = function(a, u, f, c, p) {
    if (_isFunction$1(a) && (a = _parseFuncOrString(a, p, u, f, c)),
    !_isObject(a) || a.style && a.nodeType || _isArray(a) || _isTypedArray(a))
        return _isString$1(a) ? _parseFuncOrString(a, p, u, f, c) : a;
    var d = {}, m;
    for (m in a)
        d[m] = _parseFuncOrString(a[m], p, u, f, c);
    return d
}, _checkPlugin = function(a, u, f, c, p, d) {
    var m, g, v, _;
    if (_plugins[a] && (m = new _plugins[a]).init(p, m.rawVars ? u[a] : _processVars(u[a], c, p, d, f), f, c, d) !== !1 && (f._pt = g = new PropTween(f._pt,p,a,0,1,m.render,m,0,m.priority),
    f !== _quickTween))
        for (v = f._ptLookup[f._targets.indexOf(p)],
        _ = m._props.length; _--; )
            v[m._props[_]] = g;
    return m
}, _overwritingTween, _forceAllPropTweens, _initTween = function h(a, u, f) {
    var c = a.vars, p = c.ease, d = c.startAt, m = c.immediateRender, g = c.lazy, v = c.onUpdate, _ = c.onUpdateParams, b = c.callbackScope, P = c.runBackwards, J = c.yoyoEase, x = c.keyframes, w = c.autoRevert, pe = a._dur, L = a._startAt, R = a._targets, M = a.parent, Z = M && M.data === "nested" ? M.vars.targets : R, he = a._overwrite === "auto" && !_suppressOverwrites, et = a.timeline, ei, ii, oi, hi, fi, ui, pi, mi, li, ni, ri, ti, si;
    if (et && (!x || !p) && (p = "none"),
    a._ease = _parseEase(p, _defaults.ease),
    a._yEase = J ? _invertEase(_parseEase(J === !0 ? p : J, _defaults.ease)) : 0,
    J && a._yoyo && !a._repeat && (J = a._yEase,
    a._yEase = a._ease,
    a._ease = J),
    a._from = !et && !!c.runBackwards,
    !et || x && !c.stagger) {
        if (mi = R[0] ? _getCache(R[0]).harness : 0,
        ti = mi && c[mi.prop],
        ei = _copyExcluding(c, _reservedProps),
        L && (L._zTime < 0 && L.progress(1),
        u < 0 && P && m && !w ? L.render(-1, !0) : L.revert(P && pe ? _revertConfigNoKill : _startAtRevertConfig),
        L._lazy = 0),
        d) {
            if (_removeFromParent(a._startAt = Tween.set(R, _setDefaults({
                data: "isStart",
                overwrite: !1,
                parent: M,
                immediateRender: !0,
                lazy: !L && _isNotFalse(g),
                startAt: null,
                delay: 0,
                onUpdate: v,
                onUpdateParams: _,
                callbackScope: b,
                stagger: 0
            }, d))),
            a._startAt._dp = 0,
            a._startAt._sat = a,
            u < 0 && (_reverting$1 || !m && !w) && a._startAt.revert(_revertConfigNoKill),
            m && pe && u <= 0 && f <= 0) {
                u && (a._zTime = u);
                return
            }
        } else if (P && pe && !L) {
            if (u && (m = !1),
            oi = _setDefaults({
                overwrite: !1,
                data: "isFromStart",
                lazy: m && !L && _isNotFalse(g),
                immediateRender: m,
                stagger: 0,
                parent: M
            }, ei),
            ti && (oi[mi.prop] = ti),
            _removeFromParent(a._startAt = Tween.set(R, oi)),
            a._startAt._dp = 0,
            a._startAt._sat = a,
            u < 0 && (_reverting$1 ? a._startAt.revert(_revertConfigNoKill) : a._startAt.render(-1, !0)),
            a._zTime = u,
            !m)
                h(a._startAt, _tinyNum, _tinyNum);
            else if (!u)
                return
        }
        for (a._pt = a._ptCache = 0,
        g = pe && _isNotFalse(g) || g && !pe,
        ii = 0; ii < R.length; ii++) {
            if (fi = R[ii],
            pi = fi._gsap || _harness(R)[ii]._gsap,
            a._ptLookup[ii] = ni = {},
            _lazyLookup[pi.id] && _lazyTweens.length && _lazyRender(),
            ri = Z === R ? ii : Z.indexOf(fi),
            mi && (li = new mi).init(fi, ti || ei, a, ri, Z) !== !1 && (a._pt = hi = new PropTween(a._pt,fi,li.name,0,1,li.render,li,0,li.priority),
            li._props.forEach(function(ci) {
                ni[ci] = hi
            }),
            li.priority && (ui = 1)),
            !mi || ti)
                for (oi in ei)
                    _plugins[oi] && (li = _checkPlugin(oi, ei, a, ri, fi, Z)) ? li.priority && (ui = 1) : ni[oi] = hi = _addPropTween.call(a, fi, oi, "get", ei[oi], ri, Z, 0, c.stringFilter);
            a._op && a._op[ii] && a.kill(fi, a._op[ii]),
            he && a._pt && (_overwritingTween = a,
            _globalTimeline.killTweensOf(fi, ni, a.globalTime(u)),
            si = !a.parent,
            _overwritingTween = 0),
            a._pt && g && (_lazyLookup[pi.id] = 1)
        }
        ui && _sortPropTweensByPriority(a),
        a._onInit && a._onInit(a)
    }
    a._onUpdate = v,
    a._initted = (!a._op || a._pt) && !si,
    x && u <= 0 && et.render(_bigNum$2, !0, !0)
}, _updatePropTweens = function(a, u, f, c, p, d, m) {
    var g = (a._pt && a._ptCache || (a._ptCache = {}))[u], v, _, b, P;
    if (!g)
        for (g = a._ptCache[u] = [],
        b = a._ptLookup,
        P = a._targets.length; P--; ) {
            if (v = b[P][u],
            v && v.d && v.d._pt)
                for (v = v.d._pt; v && v.p !== u && v.fp !== u; )
                    v = v._next;
            if (!v)
                return _forceAllPropTweens = 1,
                a.vars[u] = "+=0",
                _initTween(a, m),
                _forceAllPropTweens = 0,
                1;
            g.push(v)
        }
    for (P = g.length; P--; )
        _ = g[P],
        v = _._pt || _,
        v.s = (c || c === 0) && !p ? c : v.s + (c || 0) + d * v.c,
        v.c = f - v.s,
        _.e && (_.e = _round$2(f) + getUnit(_.e)),
        _.b && (_.b = v.s + getUnit(_.b))
}, _addAliasesToVars = function(a, u) {
    var f = a[0] ? _getCache(a[0]).harness : 0, c = f && f.aliases, p, d, m, g;
    if (!c)
        return u;
    p = _merge({}, u);
    for (d in c)
        if (d in p)
            for (g = c[d].split(","),
            m = g.length; m--; )
                p[g[m]] = p[d];
    return p
}, _parseKeyframe = function(a, u, f, c) {
    var p = u.ease || c || "power1.inOut", d, m;
    if (_isArray(u))
        m = f[a] || (f[a] = []),
        u.forEach(function(g, v) {
            return m.push({
                t: v / (u.length - 1) * 100,
                v: g,
                e: p
            })
        });
    else
        for (d in u)
            m = f[d] || (f[d] = []),
            d === "ease" || m.push({
                t: parseFloat(a),
                v: u[d],
                e: p
            })
}, _parseFuncOrString = function(a, u, f, c, p) {
    return _isFunction$1(a) ? a.call(u, f, c, p) : _isString$1(a) && ~a.indexOf("random(") ? _replaceRandom(a) : a
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(h) {
    return _staggerPropsToSkip[h] = 1
});
var Tween = function(h) {
    _inheritsLoose(a, h);
    function a(f, c, p, d) {
        var m;
        typeof c == "number" && (p.duration = c,
        c = p,
        p = null),
        m = h.call(this, d ? c : _inheritDefaults(c)) || this;
        var g = m.vars, v = g.duration, _ = g.delay, b = g.immediateRender, P = g.stagger, J = g.overwrite, x = g.keyframes, w = g.defaults, pe = g.scrollTrigger, L = g.yoyoEase, R = c.parent || _globalTimeline, M = (_isArray(f) || _isTypedArray(f) ? _isNumber$1(f[0]) : "length"in c) ? [f] : toArray(f), Z, he, et, ei, ii, oi, hi, fi;
        if (m._targets = M.length ? _harness(M) : _warn("GSAP target " + f + " not found. https://greensock.com", !_config$1.nullTargetWarn) || [],
        m._ptLookup = [],
        m._overwrite = J,
        x || P || _isFuncOrString(v) || _isFuncOrString(_)) {
            if (c = m.vars,
            Z = m.timeline = new Timeline({
                data: "nested",
                defaults: w || {},
                targets: R && R.data === "nested" ? R.vars.targets : M
            }),
            Z.kill(),
            Z.parent = Z._dp = _assertThisInitialized(m),
            Z._start = 0,
            P || _isFuncOrString(v) || _isFuncOrString(_)) {
                if (ei = M.length,
                hi = P && distribute(P),
                _isObject(P))
                    for (ii in P)
                        ~_staggerTweenProps.indexOf(ii) && (fi || (fi = {}),
                        fi[ii] = P[ii]);
                for (he = 0; he < ei; he++)
                    et = _copyExcluding(c, _staggerPropsToSkip),
                    et.stagger = 0,
                    L && (et.yoyoEase = L),
                    fi && _merge(et, fi),
                    oi = M[he],
                    et.duration = +_parseFuncOrString(v, _assertThisInitialized(m), he, oi, M),
                    et.delay = (+_parseFuncOrString(_, _assertThisInitialized(m), he, oi, M) || 0) - m._delay,
                    !P && ei === 1 && et.delay && (m._delay = _ = et.delay,
                    m._start += _,
                    et.delay = 0),
                    Z.to(oi, et, hi ? hi(he, oi, M) : 0),
                    Z._ease = _easeMap.none;
                Z.duration() ? v = _ = 0 : m.timeline = 0
            } else if (x) {
                _inheritDefaults(_setDefaults(Z.vars.defaults, {
                    ease: "none"
                })),
                Z._ease = _parseEase(x.ease || c.ease || "none");
                var ui = 0, pi, mi, li;
                if (_isArray(x))
                    x.forEach(function(ni) {
                        return Z.to(M, ni, ">")
                    }),
                    Z.duration();
                else {
                    et = {};
                    for (ii in x)
                        ii === "ease" || ii === "easeEach" || _parseKeyframe(ii, x[ii], et, x.easeEach);
                    for (ii in et)
                        for (pi = et[ii].sort(function(ni, ri) {
                            return ni.t - ri.t
                        }),
                        ui = 0,
                        he = 0; he < pi.length; he++)
                            mi = pi[he],
                            li = {
                                ease: mi.e,
                                duration: (mi.t - (he ? pi[he - 1].t : 0)) / 100 * v
                            },
                            li[ii] = mi.v,
                            Z.to(M, li, ui),
                            ui += li.duration;
                    Z.duration() < v && Z.to({}, {
                        duration: v - Z.duration()
                    })
                }
            }
            v || m.duration(v = Z.duration())
        } else
            m.timeline = 0;
        return J === !0 && !_suppressOverwrites && (_overwritingTween = _assertThisInitialized(m),
        _globalTimeline.killTweensOf(M),
        _overwritingTween = 0),
        _addToTimeline(R, _assertThisInitialized(m), p),
        c.reversed && m.reverse(),
        c.paused && m.paused(!0),
        (b || !v && !x && m._start === _roundPrecise(R._time) && _isNotFalse(b) && _hasNoPausedAncestors(_assertThisInitialized(m)) && R.data !== "nested") && (m._tTime = -_tinyNum,
        m.render(Math.max(0, -_) || 0)),
        pe && _scrollTrigger(_assertThisInitialized(m), pe),
        m
    }
    var u = a.prototype;
    return u.render = function(c, p, d) {
        var m = this._time, g = this._tDur, v = this._dur, _ = c < 0, b = c > g - _tinyNum && !_ ? g : c < _tinyNum ? 0 : c, P, J, x, w, pe, L, R, M, Z;
        if (!v)
            _renderZeroDurationTween(this, c, p, d);
        else if (b !== this._tTime || !c || d || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _) {
            if (P = b,
            M = this.timeline,
            this._repeat) {
                if (w = v + this._rDelay,
                this._repeat < -1 && _)
                    return this.totalTime(w * 100 + c, p, d);
                if (P = _roundPrecise(b % w),
                b === g ? (x = this._repeat,
                P = v) : (x = ~~(b / w),
                x && x === b / w && (P = v,
                x--),
                P > v && (P = v)),
                L = this._yoyo && x & 1,
                L && (Z = this._yEase,
                P = v - P),
                pe = _animationCycle(this._tTime, w),
                P === m && !d && this._initted)
                    return this._tTime = b,
                    this;
                x !== pe && (M && this._yEase && _propagateYoyoEase(M, L),
                this.vars.repeatRefresh && !L && !this._lock && (this._lock = d = 1,
                this.render(_roundPrecise(w * x), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (_attemptInitTween(this, _ ? c : P, d, p, b))
                    return this._tTime = 0,
                    this;
                if (m !== this._time)
                    return this;
                if (v !== this._dur)
                    return this.render(c, p, d)
            }
            if (this._tTime = b,
            this._time = P,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = R = (Z || this._ease)(P / v),
            this._from && (this.ratio = R = 1 - R),
            P && !m && !p && (_callback(this, "onStart"),
            this._tTime !== b))
                return this;
            for (J = this._pt; J; )
                J.r(R, J.d),
                J = J._next;
            M && M.render(c < 0 ? c : !P && L ? -_tinyNum : M._dur * M._ease(P / this._dur), p, d) || this._startAt && (this._zTime = c),
            this._onUpdate && !p && (_ && _rewindStartAt(this, c, p, d),
            _callback(this, "onUpdate")),
            this._repeat && x !== pe && this.vars.onRepeat && !p && this.parent && _callback(this, "onRepeat"),
            (b === this._tDur || !b) && this._tTime === b && (_ && !this._onUpdate && _rewindStartAt(this, c, !0, !0),
            (c || !v) && (b === this._tDur && this._ts > 0 || !b && this._ts < 0) && _removeFromParent(this, 1),
            !p && !(_ && !m) && (b || m || L) && (_callback(this, b === g ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(b < g && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    u.targets = function() {
        return this._targets
    }
    ,
    u.invalidate = function(c) {
        return (!c || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(c),
        h.prototype.invalidate.call(this, c)
    }
    ,
    u.resetTo = function(c, p, d, m) {
        _tickerActive || _ticker.wake(),
        this._ts || this.play();
        var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts), v;
        return this._initted || _initTween(this, g),
        v = this._ease(g / this._dur),
        _updatePropTweens(this, c, p, d, m, v, g) ? this.resetTo(c, p, d, m) : (_alignPlayhead(this, 0),
        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    u.kill = function(c, p) {
        if (p === void 0 && (p = "all"),
        !c && (!p || p === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? _interrupt(this) : this;
        if (this.timeline) {
            var d = this.timeline.totalDuration();
            return this.timeline.killTweensOf(c, p, _overwritingTween && _overwritingTween.vars.overwrite !== !0)._first || _interrupt(this),
            this.parent && d !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / d, 0, 1),
            this
        }
        var m = this._targets, g = c ? toArray(c) : m, v = this._ptLookup, _ = this._pt, b, P, J, x, w, pe, L;
        if ((!p || p === "all") && _arraysMatch(m, g))
            return p === "all" && (this._pt = 0),
            _interrupt(this);
        for (b = this._op = this._op || [],
        p !== "all" && (_isString$1(p) && (w = {},
        _forEachName(p, function(R) {
            return w[R] = 1
        }),
        p = w),
        p = _addAliasesToVars(m, p)),
        L = m.length; L--; )
            if (~g.indexOf(m[L])) {
                P = v[L],
                p === "all" ? (b[L] = p,
                x = P,
                J = {}) : (J = b[L] = b[L] || {},
                x = p);
                for (w in x)
                    pe = P && P[w],
                    pe && ((!("kill"in pe.d) || pe.d.kill(w) === !0) && _removeLinkedListItem(this, pe, "_pt"),
                    delete P[w]),
                    J !== "all" && (J[w] = 1)
            }
        return this._initted && !this._pt && _ && _interrupt(this),
        this
    }
    ,
    a.to = function(c, p) {
        return new a(c,p,arguments[2])
    }
    ,
    a.from = function(c, p) {
        return _createTweenType(1, arguments)
    }
    ,
    a.delayedCall = function(c, p, d, m) {
        return new a(p,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: c,
            onComplete: p,
            onReverseComplete: p,
            onCompleteParams: d,
            onReverseCompleteParams: d,
            callbackScope: m
        })
    }
    ,
    a.fromTo = function(c, p, d) {
        return _createTweenType(2, arguments)
    }
    ,
    a.set = function(c, p) {
        return p.duration = 0,
        p.repeatDelay || (p.repeat = 0),
        new a(c,p)
    }
    ,
    a.killTweensOf = function(c, p, d) {
        return _globalTimeline.killTweensOf(c, p, d)
    }
    ,
    a
}(Animation);
_setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(h) {
    Tween[h] = function() {
        var a = new Timeline
          , u = _slice.call(arguments, 0);
        return u.splice(h === "staggerFromTo" ? 5 : 4, 0, 0),
        a[h].apply(a, u)
    }
});
var _setterPlain = function(a, u, f) {
    return a[u] = f
}
  , _setterFunc = function(a, u, f) {
    return a[u](f)
}
  , _setterFuncWithParam = function(a, u, f, c) {
    return a[u](c.fp, f)
}
  , _setterAttribute = function(a, u, f) {
    return a.setAttribute(u, f)
}
  , _getSetter = function(a, u) {
    return _isFunction$1(a[u]) ? _setterFunc : _isUndefined(a[u]) && a.setAttribute ? _setterAttribute : _setterPlain
}
  , _renderPlain = function(a, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * a) * 1e6) / 1e6, u)
}
  , _renderBoolean = function(a, u) {
    return u.set(u.t, u.p, !!(u.s + u.c * a), u)
}
  , _renderComplexString = function(a, u) {
    var f = u._pt
      , c = "";
    if (!a && u.b)
        c = u.b;
    else if (a === 1 && u.e)
        c = u.e;
    else {
        for (; f; )
            c = f.p + (f.m ? f.m(f.s + f.c * a) : Math.round((f.s + f.c * a) * 1e4) / 1e4) + c,
            f = f._next;
        c += u.c
    }
    u.set(u.t, u.p, c, u)
}
  , _renderPropTweens = function(a, u) {
    for (var f = u._pt; f; )
        f.r(a, f.d),
        f = f._next
}
  , _addPluginModifier = function(a, u, f, c) {
    for (var p = this._pt, d; p; )
        d = p._next,
        p.p === c && p.modifier(a, u, f),
        p = d
}
  , _killPropTweensOf = function(a) {
    for (var u = this._pt, f, c; u; )
        c = u._next,
        u.p === a && !u.op || u.op === a ? _removeLinkedListItem(this, u, "_pt") : u.dep || (f = 1),
        u = c;
    return !f
}
  , _setterWithModifier = function(a, u, f, c) {
    c.mSet(a, u, c.m.call(c.tween, f, c.mt), c)
}
  , _sortPropTweensByPriority = function(a) {
    for (var u = a._pt, f, c, p, d; u; ) {
        for (f = u._next,
        c = p; c && c.pr > u.pr; )
            c = c._next;
        (u._prev = c ? c._prev : d) ? u._prev._next = u : p = u,
        (u._next = c) ? c._prev = u : d = u,
        u = f
    }
    a._pt = p
}
  , PropTween = function() {
    function h(u, f, c, p, d, m, g, v, _) {
        this.t = f,
        this.s = p,
        this.c = d,
        this.p = c,
        this.r = m || _renderPlain,
        this.d = g || this,
        this.set = v || _setterPlain,
        this.pr = _ || 0,
        this._next = u,
        u && (u._prev = this)
    }
    var a = h.prototype;
    return a.modifier = function(f, c, p) {
        this.mSet = this.mSet || this.set,
        this.set = _setterWithModifier,
        this.m = f,
        this.mt = p,
        this.tween = c
    }
    ,
    h
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(h) {
    return _reservedProps[h] = 1
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: !1,
    defaults: _defaults,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
_config$1.stringFilter = _colorStringFilter;
var _media = []
  , _listeners = {}
  , _emptyArray = []
  , _lastMediaTime = 0
  , _dispatch = function(a) {
    return (_listeners[a] || _emptyArray).map(function(u) {
        return u()
    })
}
  , _onMediaChange = function() {
    var a = Date.now()
      , u = [];
    a - _lastMediaTime > 2 && (_dispatch("matchMediaInit"),
    _media.forEach(function(f) {
        var c = f.queries, p = f.conditions, d, m, g, v;
        for (m in c)
            d = _win$2.matchMedia(c[m]).matches,
            d && (g = 1),
            d !== p[m] && (p[m] = d,
            v = 1);
        v && (f.revert(),
        g && u.push(f))
    }),
    _dispatch("matchMediaRevert"),
    u.forEach(function(f) {
        return f.onMatch(f)
    }),
    _lastMediaTime = a,
    _dispatch("matchMedia"))
}
  , Context = function() {
    function h(u, f) {
        this.selector = f && selector(f),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        u && this.add(u)
    }
    var a = h.prototype;
    return a.add = function(f, c, p) {
        _isFunction$1(f) && (p = c,
        c = f,
        f = _isFunction$1);
        var d = this
          , m = function() {
            var v = _context$1, _ = d.selector, b;
            return v && v !== d && v.data.push(d),
            p && (d.selector = selector(p)),
            _context$1 = d,
            b = c.apply(d, arguments),
            _isFunction$1(b) && d._r.push(b),
            _context$1 = v,
            d.selector = _,
            d.isReverted = !1,
            b
        };
        return d.last = m,
        f === _isFunction$1 ? m(d) : f ? d[f] = m : m
    }
    ,
    a.ignore = function(f) {
        var c = _context$1;
        _context$1 = null,
        f(this),
        _context$1 = c
    }
    ,
    a.getTweens = function() {
        var f = [];
        return this.data.forEach(function(c) {
            return c instanceof h ? f.push.apply(f, c.getTweens()) : c instanceof Tween && !(c.parent && c.parent.data === "nested") && f.push(c)
        }),
        f
    }
    ,
    a.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    a.kill = function(f, c) {
        var p = this;
        if (f) {
            var d = this.getTweens();
            this.data.forEach(function(g) {
                g.data === "isFlip" && (g.revert(),
                g.getChildren(!0, !0, !1).forEach(function(v) {
                    return d.splice(d.indexOf(v), 1)
                }))
            }),
            d.map(function(g) {
                return {
                    g: g.globalTime(0),
                    t: g
                }
            }).sort(function(g, v) {
                return v.g - g.g || -1
            }).forEach(function(g) {
                return g.t.revert(f)
            }),
            this.data.forEach(function(g) {
                return !(g instanceof Animation) && g.revert && g.revert(f)
            }),
            this._r.forEach(function(g) {
                return g(f, p)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(g) {
                return g.kill && g.kill()
            });
        if (this.clear(),
        c) {
            var m = _media.indexOf(this);
            ~m && _media.splice(m, 1)
        }
    }
    ,
    a.revert = function(f) {
        this.kill(f || {})
    }
    ,
    h
}()
  , MatchMedia = function() {
    function h(u) {
        this.contexts = [],
        this.scope = u
    }
    var a = h.prototype;
    return a.add = function(f, c, p) {
        _isObject(f) || (f = {
            matches: f
        });
        var d = new Context(0,p || this.scope), m = d.conditions = {}, g, v, _;
        this.contexts.push(d),
        c = d.add("onMatch", c),
        d.queries = f;
        for (v in f)
            v === "all" ? _ = 1 : (g = _win$2.matchMedia(f[v]),
            g && (_media.indexOf(d) < 0 && _media.push(d),
            (m[v] = g.matches) && (_ = 1),
            g.addListener ? g.addListener(_onMediaChange) : g.addEventListener("change", _onMediaChange)));
        return _ && c(d),
        this
    }
    ,
    a.revert = function(f) {
        this.kill(f || {})
    }
    ,
    a.kill = function(f) {
        this.contexts.forEach(function(c) {
            return c.kill(f, !0)
        })
    }
    ,
    h
}()
  , _gsap = {
    registerPlugin: function() {
        for (var a = arguments.length, u = new Array(a), f = 0; f < a; f++)
            u[f] = arguments[f];
        u.forEach(function(c) {
            return _createPlugin(c)
        })
    },
    timeline: function(a) {
        return new Timeline(a)
    },
    getTweensOf: function(a, u) {
        return _globalTimeline.getTweensOf(a, u)
    },
    getProperty: function(a, u, f, c) {
        _isString$1(a) && (a = toArray(a)[0]);
        var p = _getCache(a || {}).get
          , d = f ? _passThrough : _numericIfPossible;
        return f === "native" && (f = ""),
        a && (u ? d((_plugins[u] && _plugins[u].get || p)(a, u, f, c)) : function(m, g, v) {
            return d((_plugins[m] && _plugins[m].get || p)(a, m, g, v))
        }
        )
    },
    quickSetter: function(a, u, f) {
        if (a = toArray(a),
        a.length > 1) {
            var c = a.map(function(_) {
                return gsap$4.quickSetter(_, u, f)
            })
              , p = c.length;
            return function(_) {
                for (var b = p; b--; )
                    c[b](_)
            }
        }
        a = a[0] || {};
        var d = _plugins[u]
          , m = _getCache(a)
          , g = m.harness && (m.harness.aliases || {})[u] || u
          , v = d ? function(_) {
            var b = new d;
            _quickTween._pt = 0,
            b.init(a, f ? _ + f : _, _quickTween, 0, [a]),
            b.render(1, b),
            _quickTween._pt && _renderPropTweens(1, _quickTween)
        }
        : m.set(a, g);
        return d ? v : function(_) {
            return v(a, g, f ? _ + f : _, m, 1)
        }
    },
    quickTo: function(a, u, f) {
        var c, p = gsap$4.to(a, _merge((c = {},
        c[u] = "+=0.1",
        c.paused = !0,
        c), f || {})), d = function(g, v, _) {
            return p.resetTo(u, g, v, _)
        };
        return d.tween = p,
        d
    },
    isTweening: function(a) {
        return _globalTimeline.getTweensOf(a, !0).length > 0
    },
    defaults: function(a) {
        return a && a.ease && (a.ease = _parseEase(a.ease, _defaults.ease)),
        _mergeDeep(_defaults, a || {})
    },
    config: function(a) {
        return _mergeDeep(_config$1, a || {})
    },
    registerEffect: function(a) {
        var u = a.name
          , f = a.effect
          , c = a.plugins
          , p = a.defaults
          , d = a.extendTimeline;
        (c || "").split(",").forEach(function(m) {
            return m && !_plugins[m] && !_globals[m] && _warn(u + " effect requires " + m + " plugin.")
        }),
        _effects[u] = function(m, g, v) {
            return f(toArray(m), _setDefaults(g || {}, p), v)
        }
        ,
        d && (Timeline.prototype[u] = function(m, g, v) {
            return this.add(_effects[u](m, _isObject(g) ? g : (v = g) && {}, this), v)
        }
        )
    },
    registerEase: function(a, u) {
        _easeMap[a] = _parseEase(u)
    },
    parseEase: function(a, u) {
        return arguments.length ? _parseEase(a, u) : _easeMap
    },
    getById: function(a) {
        return _globalTimeline.getById(a)
    },
    exportRoot: function(a, u) {
        a === void 0 && (a = {});
        var f = new Timeline(a), c, p;
        for (f.smoothChildTiming = _isNotFalse(a.smoothChildTiming),
        _globalTimeline.remove(f),
        f._dp = 0,
        f._time = f._tTime = _globalTimeline._time,
        c = _globalTimeline._first; c; )
            p = c._next,
            (u || !(!c._dur && c instanceof Tween && c.vars.onComplete === c._targets[0])) && _addToTimeline(f, c, c._start - c._delay),
            c = p;
        return _addToTimeline(_globalTimeline, f, 0),
        f
    },
    context: function(a, u) {
        return a ? new Context(a,u) : _context$1
    },
    matchMedia: function(a) {
        return new MatchMedia(a)
    },
    matchMediaRefresh: function() {
        return _media.forEach(function(a) {
            var u = a.conditions, f, c;
            for (c in u)
                u[c] && (u[c] = !1,
                f = 1);
            f && a.revert()
        }) || _onMediaChange()
    },
    addEventListener: function(a, u) {
        var f = _listeners[a] || (_listeners[a] = []);
        ~f.indexOf(u) || f.push(u)
    },
    removeEventListener: function(a, u) {
        var f = _listeners[a]
          , c = f && f.indexOf(u);
        c >= 0 && f.splice(c, 1)
    },
    utils: {
        wrap,
        wrapYoyo,
        distribute,
        random,
        snap,
        normalize,
        getUnit,
        clamp: clamp$1,
        splitColor,
        toArray,
        selector,
        mapRange,
        pipe,
        unitize,
        interpolate,
        shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
        PropTween,
        globals: _addGlobal,
        Tween,
        Timeline,
        Animation,
        getCache: _getCache,
        _removeLinkedListItem,
        reverting: function() {
            return _reverting$1
        },
        context: function(a) {
            return a && _context$1 && (_context$1.data.push(a),
            a._ctx = _context$1),
            _context$1
        },
        suppressOverwrites: function(a) {
            return _suppressOverwrites = a
        }
    }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(h) {
    return _gsap[h] = Tween[h]
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
    duration: 0
});
var _getPluginPropTween = function(a, u) {
    for (var f = a._pt; f && f.p !== u && f.op !== u && f.fp !== u; )
        f = f._next;
    return f
}
  , _addModifiers = function(a, u) {
    var f = a._targets, c, p, d;
    for (c in u)
        for (p = f.length; p--; )
            d = a._ptLookup[p][c],
            d && (d = d.d) && (d._pt && (d = _getPluginPropTween(d, c)),
            d && d.modifier && d.modifier(u[c], a, f[p], c))
}
  , _buildModifierPlugin = function(a, u) {
    return {
        name: a,
        rawVars: 1,
        init: function(c, p, d) {
            d._onInit = function(m) {
                var g, v;
                if (_isString$1(p) && (g = {},
                _forEachName(p, function(_) {
                    return g[_] = 1
                }),
                p = g),
                u) {
                    g = {};
                    for (v in p)
                        g[v] = u(p[v]);
                    p = g
                }
                _addModifiers(m, p)
            }
        }
    }
}
  , gsap$4 = _gsap.registerPlugin({
    name: "attr",
    init: function(a, u, f, c, p) {
        var d, m, g;
        this.tween = f;
        for (d in u)
            g = a.getAttribute(d) || "",
            m = this.add(a, "setAttribute", (g || 0) + "", u[d], c, p, 0, 0, d),
            m.op = d,
            m.b = g,
            this._props.push(d)
    },
    render: function(a, u) {
        for (var f = u._pt; f; )
            _reverting$1 ? f.set(f.t, f.p, f.b, f) : f.r(a, f.d),
            f = f._next
    }
}, {
    name: "endArray",
    init: function(a, u) {
        for (var f = u.length; f--; )
            this.add(a, f, a[f] || 0, u[f], 0, 0, 0, 0, 0, 1)
    }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap$4.version = "3.11.4";
_coreReady = 1;
_windowExists$2() && _wake();
_easeMap.Power0;
_easeMap.Power1;
_easeMap.Power2;
_easeMap.Power3;
_easeMap.Power4;
_easeMap.Linear;
_easeMap.Quad;
_easeMap.Cubic;
_easeMap.Quart;
_easeMap.Quint;
_easeMap.Strong;
_easeMap.Elastic;
_easeMap.Back;
_easeMap.SteppedEase;
_easeMap.Bounce;
_easeMap.Sine;
_easeMap.Expo;
_easeMap.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _recentSetterPlugin, _reverting, _windowExists$1 = function() {
    return typeof window < "u"
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD$1 = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, _renderCSSProp = function(a, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * a) * 1e4) / 1e4 + u.u, u)
}, _renderPropWithEnd = function(a, u) {
    return u.set(u.t, u.p, a === 1 ? u.e : Math.round((u.s + u.c * a) * 1e4) / 1e4 + u.u, u)
}, _renderCSSPropWithBeginning = function(a, u) {
    return u.set(u.t, u.p, a ? Math.round((u.s + u.c * a) * 1e4) / 1e4 + u.u : u.b, u)
}, _renderRoundedCSSProp = function(a, u) {
    var f = u.s + u.c * a;
    u.set(u.t, u.p, ~~(f + (f < 0 ? -.5 : .5)) + u.u, u)
}, _renderNonTweeningValue = function(a, u) {
    return u.set(u.t, u.p, a ? u.e : u.b, u)
}, _renderNonTweeningValueOnlyAtEnd = function(a, u) {
    return u.set(u.t, u.p, a !== 1 ? u.b : u.e, u)
}, _setterCSSStyle = function(a, u, f) {
    return a.style[u] = f
}, _setterCSSProp = function(a, u, f) {
    return a.style.setProperty(u, f)
}, _setterTransform = function(a, u, f) {
    return a._gsap[u] = f
}, _setterScale = function(a, u, f) {
    return a._gsap.scaleX = a._gsap.scaleY = f
}, _setterScaleWithRender = function(a, u, f, c, p) {
    var d = a._gsap;
    d.scaleX = d.scaleY = f,
    d.renderTransform(p, d)
}, _setterTransformWithRender = function(a, u, f, c, p) {
    var d = a._gsap;
    d[u] = f,
    d.renderTransform(p, d)
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function(a, u) {
    var f = this
      , c = this.target
      , p = c.style;
    if (a in _transformProps) {
        if (this.tfm = this.tfm || {},
        a !== "transform" && (a = _propertyAliases[a] || a,
        ~a.indexOf(",") ? a.split(",").forEach(function(d) {
            return f.tfm[d] = _get(c, d)
        }) : this.tfm[a] = c._gsap.x ? c._gsap[a] : _get(c, a)),
        this.props.indexOf(_transformProp) >= 0)
            return;
        c._gsap.svg && (this.svgo = c.getAttribute("data-svg-origin"),
        this.props.push(_transformOriginProp, u, "")),
        a = _transformProp
    }
    (p || u) && this.props.push(a, u, p[a])
}, _removeIndependentTransforms = function(a) {
    a.translate && (a.removeProperty("translate"),
    a.removeProperty("scale"),
    a.removeProperty("rotate"))
}, _revertStyle = function() {
    var a = this.props, u = this.target, f = u.style, c = u._gsap, p, d;
    for (p = 0; p < a.length; p += 3)
        a[p + 1] ? u[a[p]] = a[p + 2] : a[p + 2] ? f[a[p]] = a[p + 2] : f.removeProperty(a[p].replace(_capsExp, "-$1").toLowerCase());
    if (this.tfm) {
        for (d in this.tfm)
            c[d] = this.tfm[d];
        c.svg && (c.renderTransform(),
        u.setAttribute("data-svg-origin", this.svgo || "")),
        p = _reverting(),
        p && !p.isStart && !f[_transformProp] && (_removeIndependentTransforms(f),
        c.uncache = 1)
    }
}, _getStyleSaver = function(a, u) {
    var f = {
        target: a,
        props: [],
        revert: _revertStyle,
        save: _saveStyle
    };
    return u && u.split(",").forEach(function(c) {
        return f.save(c)
    }),
    f
}, _supports3D, _createElement = function(a, u) {
    var f = _doc$1.createElementNS ? _doc$1.createElementNS((u || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), a) : _doc$1.createElement(a);
    return f.style ? f : _doc$1.createElement(a)
}, _getComputedProperty = function h(a, u, f) {
    var c = getComputedStyle(a);
    return c[u] || c.getPropertyValue(u.replace(_capsExp, "-$1").toLowerCase()) || c.getPropertyValue(u) || !f && h(a, _checkPropPrefix(u) || u, 1) || ""
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function(a, u, f) {
    var c = u || _tempDiv
      , p = c.style
      , d = 5;
    if (a in p && !f)
        return a;
    for (a = a.charAt(0).toUpperCase() + a.substr(1); d-- && !(_prefixes[d] + a in p); )
        ;
    return d < 0 ? null : (d === 3 ? "ms" : d >= 0 ? _prefixes[d] : "") + a
}, _initCore$3 = function() {
    _windowExists$1() && window.document && (_win$1 = window,
    _doc$1 = _win$1.document,
    _docElement = _doc$1.documentElement,
    _tempDiv = _createElement("div") || {
        style: {}
    },
    _createElement("div"),
    _transformProp = _checkPropPrefix(_transformProp),
    _transformOriginProp = _transformProp + "Origin",
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    _supports3D = !!_checkPropPrefix("perspective"),
    _reverting = gsap$4.core.reverting,
    _pluginInitted = 1)
}, _getBBoxHack = function h(a) {
    var u = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), f = this.parentNode, c = this.nextSibling, p = this.style.cssText, d;
    if (_docElement.appendChild(u),
    u.appendChild(this),
    this.style.display = "block",
    a)
        try {
            d = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = h
        } catch {}
    else
        this._gsapBBox && (d = this._gsapBBox());
    return f && (c ? f.insertBefore(this, c) : f.appendChild(this)),
    _docElement.removeChild(u),
    this.style.cssText = p,
    d
}, _getAttributeFallbacks = function(a, u) {
    for (var f = u.length; f--; )
        if (a.hasAttribute(u[f]))
            return a.getAttribute(u[f])
}, _getBBox = function(a) {
    var u;
    try {
        u = a.getBBox()
    } catch {
        u = _getBBoxHack.call(a, !0)
    }
    return u && (u.width || u.height) || a.getBBox === _getBBoxHack || (u = _getBBoxHack.call(a, !0)),
    u && !u.width && !u.x && !u.y ? {
        x: +_getAttributeFallbacks(a, ["x", "cx", "x1"]) || 0,
        y: +_getAttributeFallbacks(a, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : u
}, _isSVG = function(a) {
    return !!(a.getCTM && (!a.parentNode || a.ownerSVGElement) && _getBBox(a))
}, _removeProperty = function(a, u) {
    if (u) {
        var f = a.style;
        u in _transformProps && u !== _transformOriginProp && (u = _transformProp),
        f.removeProperty ? ((u.substr(0, 2) === "ms" || u.substr(0, 6) === "webkit") && (u = "-" + u),
        f.removeProperty(u.replace(_capsExp, "-$1").toLowerCase())) : f.removeAttribute(u)
    }
}, _addNonTweeningPT = function(a, u, f, c, p, d) {
    var m = new PropTween(a._pt,u,f,0,1,d ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    return a._pt = m,
    m.b = c,
    m.e = p,
    a._props.push(f),
    m
}, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, _nonStandardLayouts = {
    grid: 1,
    flex: 1
}, _convertToUnit = function h(a, u, f, c) {
    var p = parseFloat(f) || 0, d = (f + "").trim().substr((p + "").length) || "px", m = _tempDiv.style, g = _horizontalExp.test(u), v = a.tagName.toLowerCase() === "svg", _ = (v ? "client" : "offset") + (g ? "Width" : "Height"), b = 100, P = c === "px", J = c === "%", x, w, pe, L;
    return c === d || !p || _nonConvertibleUnits[c] || _nonConvertibleUnits[d] ? p : (d !== "px" && !P && (p = h(a, u, f, "px")),
    L = a.getCTM && _isSVG(a),
    (J || d === "%") && (_transformProps[u] || ~u.indexOf("adius")) ? (x = L ? a.getBBox()[g ? "width" : "height"] : a[_],
    _round$2(J ? p / x * b : p / 100 * x)) : (m[g ? "width" : "height"] = b + (P ? d : c),
    w = ~u.indexOf("adius") || c === "em" && a.appendChild && !v ? a : a.parentNode,
    L && (w = (a.ownerSVGElement || {}).parentNode),
    (!w || w === _doc$1 || !w.appendChild) && (w = _doc$1.body),
    pe = w._gsap,
    pe && J && pe.width && g && pe.time === _ticker.time && !pe.uncache ? _round$2(p / pe.width * b) : ((J || d === "%") && !_nonStandardLayouts[_getComputedProperty(w, "display")] && (m.position = _getComputedProperty(a, "position")),
    w === a && (m.position = "static"),
    w.appendChild(_tempDiv),
    x = _tempDiv[_],
    w.removeChild(_tempDiv),
    m.position = "absolute",
    g && J && (pe = _getCache(w),
    pe.time = _ticker.time,
    pe.width = w[_]),
    _round$2(P ? x * p / b : x && p ? b / x * p : 0))))
}, _get = function(a, u, f, c) {
    var p;
    return _pluginInitted || _initCore$3(),
    u in _propertyAliases && u !== "transform" && (u = _propertyAliases[u],
    ~u.indexOf(",") && (u = u.split(",")[0])),
    _transformProps[u] && u !== "transform" ? (p = _parseTransform(a, c),
    p = u !== "transformOrigin" ? p[u] : p.svg ? p.origin : _firstTwoOnly(_getComputedProperty(a, _transformOriginProp)) + " " + p.zOrigin + "px") : (p = a.style[u],
    (!p || p === "auto" || c || ~(p + "").indexOf("calc(")) && (p = _specialProps[u] && _specialProps[u](a, u, f) || _getComputedProperty(a, u) || _getProperty(a, u) || (u === "opacity" ? 1 : 0))),
    f && !~(p + "").trim().indexOf(" ") ? _convertToUnit(a, u, p, f) + f : p
}, _tweenComplexCSSString = function(a, u, f, c) {
    if (!f || f === "none") {
        var p = _checkPropPrefix(u, a, 1)
          , d = p && _getComputedProperty(a, p, 1);
        d && d !== f ? (u = p,
        f = d) : u === "borderColor" && (f = _getComputedProperty(a, "borderTopColor"))
    }
    var m = new PropTween(this._pt,a.style,u,0,1,_renderComplexString), g = 0, v = 0, _, b, P, J, x, w, pe, L, R, M, Z, he;
    if (m.b = f,
    m.e = c,
    f += "",
    c += "",
    c === "auto" && (a.style[u] = c,
    c = _getComputedProperty(a, u) || c,
    a.style[u] = f),
    _ = [f, c],
    _colorStringFilter(_),
    f = _[0],
    c = _[1],
    P = f.match(_numWithUnitExp) || [],
    he = c.match(_numWithUnitExp) || [],
    he.length) {
        for (; b = _numWithUnitExp.exec(c); )
            pe = b[0],
            R = c.substring(g, b.index),
            x ? x = (x + 1) % 5 : (R.substr(-5) === "rgba(" || R.substr(-5) === "hsla(") && (x = 1),
            pe !== (w = P[v++] || "") && (J = parseFloat(w) || 0,
            Z = w.substr((J + "").length),
            pe.charAt(1) === "=" && (pe = _parseRelative(J, pe) + Z),
            L = parseFloat(pe),
            M = pe.substr((L + "").length),
            g = _numWithUnitExp.lastIndex - M.length,
            M || (M = M || _config$1.units[u] || Z,
            g === c.length && (c += M,
            m.e += M)),
            Z !== M && (J = _convertToUnit(a, u, w, M) || 0),
            m._pt = {
                _next: m._pt,
                p: R || v === 1 ? R : ",",
                s: J,
                c: L - J,
                m: x && x < 4 || u === "zIndex" ? Math.round : 0
            });
        m.c = g < c.length ? c.substring(g, c.length) : ""
    } else
        m.r = u === "display" && c === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    return _relExp.test(c) && (m.e = 0),
    this._pt = m,
    m
}, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, _convertKeywordsToPercentages = function(a) {
    var u = a.split(" ")
      , f = u[0]
      , c = u[1] || "50%";
    return (f === "top" || f === "bottom" || c === "left" || c === "right") && (a = f,
    f = c,
    c = a),
    u[0] = _keywordToPercent[f] || f,
    u[1] = _keywordToPercent[c] || c,
    u.join(" ")
}, _renderClearProps = function(a, u) {
    if (u.tween && u.tween._time === u.tween._dur) {
        var f = u.t, c = f.style, p = u.u, d = f._gsap, m, g, v;
        if (p === "all" || p === !0)
            c.cssText = "",
            g = 1;
        else
            for (p = p.split(","),
            v = p.length; --v > -1; )
                m = p[v],
                _transformProps[m] && (g = 1,
                m = m === "transformOrigin" ? _transformOriginProp : _transformProp),
                _removeProperty(f, m);
        g && (_removeProperty(f, _transformProp),
        d && (d.svg && f.removeAttribute("transform"),
        _parseTransform(f, 1),
        d.uncache = 1,
        _removeIndependentTransforms(c)))
    }
}, _specialProps = {
    clearProps: function(a, u, f, c, p) {
        if (p.data !== "isFromStart") {
            var d = a._pt = new PropTween(a._pt,u,f,0,0,_renderClearProps);
            return d.u = c,
            d.pr = -10,
            d.tween = p,
            a._props.push(f),
            1
        }
    }
}, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function(a) {
    return a === "matrix(1, 0, 0, 1, 0, 0)" || a === "none" || !a
}, _getComputedTransformMatrixAsArray = function(a) {
    var u = _getComputedProperty(a, _transformProp);
    return _isNullTransform(u) ? _identity2DMatrix : u.substr(7).match(_numExp$1).map(_round$2)
}, _getMatrix = function(a, u) {
    var f = a._gsap || _getCache(a), c = a.style, p = _getComputedTransformMatrixAsArray(a), d, m, g, v;
    return f.svg && a.getAttribute("transform") ? (g = a.transform.baseVal.consolidate().matrix,
    p = [g.a, g.b, g.c, g.d, g.e, g.f],
    p.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : p) : (p === _identity2DMatrix && !a.offsetParent && a !== _docElement && !f.svg && (g = c.display,
    c.display = "block",
    d = a.parentNode,
    (!d || !a.offsetParent) && (v = 1,
    m = a.nextElementSibling,
    _docElement.appendChild(a)),
    p = _getComputedTransformMatrixAsArray(a),
    g ? c.display = g : _removeProperty(a, "display"),
    v && (m ? d.insertBefore(a, m) : d ? d.appendChild(a) : _docElement.removeChild(a))),
    u && p.length > 6 ? [p[0], p[1], p[4], p[5], p[12], p[13]] : p)
}, _applySVGOrigin = function(a, u, f, c, p, d) {
    var m = a._gsap, g = p || _getMatrix(a, !0), v = m.xOrigin || 0, _ = m.yOrigin || 0, b = m.xOffset || 0, P = m.yOffset || 0, J = g[0], x = g[1], w = g[2], pe = g[3], L = g[4], R = g[5], M = u.split(" "), Z = parseFloat(M[0]) || 0, he = parseFloat(M[1]) || 0, et, ei, ii, oi;
    f ? g !== _identity2DMatrix && (ei = J * pe - x * w) && (ii = Z * (pe / ei) + he * (-w / ei) + (w * R - pe * L) / ei,
    oi = Z * (-x / ei) + he * (J / ei) - (J * R - x * L) / ei,
    Z = ii,
    he = oi) : (et = _getBBox(a),
    Z = et.x + (~M[0].indexOf("%") ? Z / 100 * et.width : Z),
    he = et.y + (~(M[1] || M[0]).indexOf("%") ? he / 100 * et.height : he)),
    c || c !== !1 && m.smooth ? (L = Z - v,
    R = he - _,
    m.xOffset = b + (L * J + R * w) - L,
    m.yOffset = P + (L * x + R * pe) - R) : m.xOffset = m.yOffset = 0,
    m.xOrigin = Z,
    m.yOrigin = he,
    m.smooth = !!c,
    m.origin = u,
    m.originIsAbsolute = !!f,
    a.style[_transformOriginProp] = "0px 0px",
    d && (_addNonTweeningPT(d, m, "xOrigin", v, Z),
    _addNonTweeningPT(d, m, "yOrigin", _, he),
    _addNonTweeningPT(d, m, "xOffset", b, m.xOffset),
    _addNonTweeningPT(d, m, "yOffset", P, m.yOffset)),
    a.setAttribute("data-svg-origin", Z + " " + he)
}, _parseTransform = function(a, u) {
    var f = a._gsap || new GSCache(a);
    if ("x"in f && !u && !f.uncache)
        return f;
    var c = a.style, p = f.scaleX < 0, d = "px", m = "deg", g = getComputedStyle(a), v = _getComputedProperty(a, _transformOriginProp) || "0", _, b, P, J, x, w, pe, L, R, M, Z, he, et, ei, ii, oi, hi, fi, ui, pi, mi, li, ni, ri, ti, si, ci, ai, di, gi, vi, yi;
    return _ = b = P = w = pe = L = R = M = Z = 0,
    J = x = 1,
    f.svg = !!(a.getCTM && _isSVG(a)),
    g.translate && ((g.translate !== "none" || g.scale !== "none" || g.rotate !== "none") && (c[_transformProp] = (g.translate !== "none" ? "translate3d(" + (g.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (g.rotate !== "none" ? "rotate(" + g.rotate + ") " : "") + (g.scale !== "none" ? "scale(" + g.scale.split(" ").join(",") + ") " : "") + (g[_transformProp] !== "none" ? g[_transformProp] : "")),
    c.scale = c.rotate = c.translate = "none"),
    ei = _getMatrix(a, f.svg),
    f.svg && (f.uncache ? (ti = a.getBBox(),
    v = f.xOrigin - ti.x + "px " + (f.yOrigin - ti.y) + "px",
    ri = "") : ri = !u && a.getAttribute("data-svg-origin"),
    _applySVGOrigin(a, ri || v, !!ri || f.originIsAbsolute, f.smooth !== !1, ei)),
    he = f.xOrigin || 0,
    et = f.yOrigin || 0,
    ei !== _identity2DMatrix && (fi = ei[0],
    ui = ei[1],
    pi = ei[2],
    mi = ei[3],
    _ = li = ei[4],
    b = ni = ei[5],
    ei.length === 6 ? (J = Math.sqrt(fi * fi + ui * ui),
    x = Math.sqrt(mi * mi + pi * pi),
    w = fi || ui ? _atan2(ui, fi) * _RAD2DEG : 0,
    R = pi || mi ? _atan2(pi, mi) * _RAD2DEG + w : 0,
    R && (x *= Math.abs(Math.cos(R * _DEG2RAD$1))),
    f.svg && (_ -= he - (he * fi + et * pi),
    b -= et - (he * ui + et * mi))) : (yi = ei[6],
    gi = ei[7],
    ci = ei[8],
    ai = ei[9],
    di = ei[10],
    vi = ei[11],
    _ = ei[12],
    b = ei[13],
    P = ei[14],
    ii = _atan2(yi, di),
    pe = ii * _RAD2DEG,
    ii && (oi = Math.cos(-ii),
    hi = Math.sin(-ii),
    ri = li * oi + ci * hi,
    ti = ni * oi + ai * hi,
    si = yi * oi + di * hi,
    ci = li * -hi + ci * oi,
    ai = ni * -hi + ai * oi,
    di = yi * -hi + di * oi,
    vi = gi * -hi + vi * oi,
    li = ri,
    ni = ti,
    yi = si),
    ii = _atan2(-pi, di),
    L = ii * _RAD2DEG,
    ii && (oi = Math.cos(-ii),
    hi = Math.sin(-ii),
    ri = fi * oi - ci * hi,
    ti = ui * oi - ai * hi,
    si = pi * oi - di * hi,
    vi = mi * hi + vi * oi,
    fi = ri,
    ui = ti,
    pi = si),
    ii = _atan2(ui, fi),
    w = ii * _RAD2DEG,
    ii && (oi = Math.cos(ii),
    hi = Math.sin(ii),
    ri = fi * oi + ui * hi,
    ti = li * oi + ni * hi,
    ui = ui * oi - fi * hi,
    ni = ni * oi - li * hi,
    fi = ri,
    li = ti),
    pe && Math.abs(pe) + Math.abs(w) > 359.9 && (pe = w = 0,
    L = 180 - L),
    J = _round$2(Math.sqrt(fi * fi + ui * ui + pi * pi)),
    x = _round$2(Math.sqrt(ni * ni + yi * yi)),
    ii = _atan2(li, ni),
    R = Math.abs(ii) > 2e-4 ? ii * _RAD2DEG : 0,
    Z = vi ? 1 / (vi < 0 ? -vi : vi) : 0),
    f.svg && (ri = a.getAttribute("transform"),
    f.forceCSS = a.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(a, _transformProp)),
    ri && a.setAttribute("transform", ri))),
    Math.abs(R) > 90 && Math.abs(R) < 270 && (p ? (J *= -1,
    R += w <= 0 ? 180 : -180,
    w += w <= 0 ? 180 : -180) : (x *= -1,
    R += R <= 0 ? 180 : -180)),
    u = u || f.uncache,
    f.x = _ - ((f.xPercent = _ && (!u && f.xPercent || (Math.round(a.offsetWidth / 2) === Math.round(-_) ? -50 : 0))) ? a.offsetWidth * f.xPercent / 100 : 0) + d,
    f.y = b - ((f.yPercent = b && (!u && f.yPercent || (Math.round(a.offsetHeight / 2) === Math.round(-b) ? -50 : 0))) ? a.offsetHeight * f.yPercent / 100 : 0) + d,
    f.z = P + d,
    f.scaleX = _round$2(J),
    f.scaleY = _round$2(x),
    f.rotation = _round$2(w) + m,
    f.rotationX = _round$2(pe) + m,
    f.rotationY = _round$2(L) + m,
    f.skewX = R + m,
    f.skewY = M + m,
    f.transformPerspective = Z + d,
    (f.zOrigin = parseFloat(v.split(" ")[2]) || 0) && (c[_transformOriginProp] = _firstTwoOnly(v)),
    f.xOffset = f.yOffset = 0,
    f.force3D = _config$1.force3D,
    f.renderTransform = f.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms,
    f.uncache = 0,
    f
}, _firstTwoOnly = function(a) {
    return (a = a.split(" "))[0] + " " + a[1]
}, _addPxTranslate = function(a, u, f) {
    var c = getUnit(u);
    return _round$2(parseFloat(u) + parseFloat(_convertToUnit(a, "x", f + "px", c))) + c
}, _renderNon3DTransforms = function(a, u) {
    u.z = "0px",
    u.rotationY = u.rotationX = "0deg",
    u.force3D = 0,
    _renderCSSTransforms(a, u)
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function(a, u) {
    var f = u || this
      , c = f.xPercent
      , p = f.yPercent
      , d = f.x
      , m = f.y
      , g = f.z
      , v = f.rotation
      , _ = f.rotationY
      , b = f.rotationX
      , P = f.skewX
      , J = f.skewY
      , x = f.scaleX
      , w = f.scaleY
      , pe = f.transformPerspective
      , L = f.force3D
      , R = f.target
      , M = f.zOrigin
      , Z = ""
      , he = L === "auto" && a && a !== 1 || L === !0;
    if (M && (b !== _zeroDeg || _ !== _zeroDeg)) {
        var et = parseFloat(_) * _DEG2RAD$1, ei = Math.sin(et), ii = Math.cos(et), oi;
        et = parseFloat(b) * _DEG2RAD$1,
        oi = Math.cos(et),
        d = _addPxTranslate(R, d, ei * oi * -M),
        m = _addPxTranslate(R, m, -Math.sin(et) * -M),
        g = _addPxTranslate(R, g, ii * oi * -M + M)
    }
    pe !== _zeroPx && (Z += "perspective(" + pe + _endParenthesis),
    (c || p) && (Z += "translate(" + c + "%, " + p + "%) "),
    (he || d !== _zeroPx || m !== _zeroPx || g !== _zeroPx) && (Z += g !== _zeroPx || he ? "translate3d(" + d + ", " + m + ", " + g + ") " : "translate(" + d + ", " + m + _endParenthesis),
    v !== _zeroDeg && (Z += "rotate(" + v + _endParenthesis),
    _ !== _zeroDeg && (Z += "rotateY(" + _ + _endParenthesis),
    b !== _zeroDeg && (Z += "rotateX(" + b + _endParenthesis),
    (P !== _zeroDeg || J !== _zeroDeg) && (Z += "skew(" + P + ", " + J + _endParenthesis),
    (x !== 1 || w !== 1) && (Z += "scale(" + x + ", " + w + _endParenthesis),
    R.style[_transformProp] = Z || "translate(0, 0)"
}, _renderSVGTransforms = function(a, u) {
    var f = u || this, c = f.xPercent, p = f.yPercent, d = f.x, m = f.y, g = f.rotation, v = f.skewX, _ = f.skewY, b = f.scaleX, P = f.scaleY, J = f.target, x = f.xOrigin, w = f.yOrigin, pe = f.xOffset, L = f.yOffset, R = f.forceCSS, M = parseFloat(d), Z = parseFloat(m), he, et, ei, ii, oi;
    g = parseFloat(g),
    v = parseFloat(v),
    _ = parseFloat(_),
    _ && (_ = parseFloat(_),
    v += _,
    g += _),
    g || v ? (g *= _DEG2RAD$1,
    v *= _DEG2RAD$1,
    he = Math.cos(g) * b,
    et = Math.sin(g) * b,
    ei = Math.sin(g - v) * -P,
    ii = Math.cos(g - v) * P,
    v && (_ *= _DEG2RAD$1,
    oi = Math.tan(v - _),
    oi = Math.sqrt(1 + oi * oi),
    ei *= oi,
    ii *= oi,
    _ && (oi = Math.tan(_),
    oi = Math.sqrt(1 + oi * oi),
    he *= oi,
    et *= oi)),
    he = _round$2(he),
    et = _round$2(et),
    ei = _round$2(ei),
    ii = _round$2(ii)) : (he = b,
    ii = P,
    et = ei = 0),
    (M && !~(d + "").indexOf("px") || Z && !~(m + "").indexOf("px")) && (M = _convertToUnit(J, "x", d, "px"),
    Z = _convertToUnit(J, "y", m, "px")),
    (x || w || pe || L) && (M = _round$2(M + x - (x * he + w * ei) + pe),
    Z = _round$2(Z + w - (x * et + w * ii) + L)),
    (c || p) && (oi = J.getBBox(),
    M = _round$2(M + c / 100 * oi.width),
    Z = _round$2(Z + p / 100 * oi.height)),
    oi = "matrix(" + he + "," + et + "," + ei + "," + ii + "," + M + "," + Z + ")",
    J.setAttribute("transform", oi),
    R && (J.style[_transformProp] = oi)
}, _addRotationalPropTween = function(a, u, f, c, p) {
    var d = 360, m = _isString$1(p), g = parseFloat(p) * (m && ~p.indexOf("rad") ? _RAD2DEG : 1), v = g - c, _ = c + v + "deg", b, P;
    return m && (b = p.split("_")[1],
    b === "short" && (v %= d,
    v !== v % (d / 2) && (v += v < 0 ? d : -d)),
    b === "cw" && v < 0 ? v = (v + d * _bigNum$1) % d - ~~(v / d) * d : b === "ccw" && v > 0 && (v = (v - d * _bigNum$1) % d - ~~(v / d) * d)),
    a._pt = P = new PropTween(a._pt,u,f,c,v,_renderPropWithEnd),
    P.e = _,
    P.u = "deg",
    a._props.push(f),
    P
}, _assign = function(a, u) {
    for (var f in u)
        a[f] = u[f];
    return a
}, _addRawTransformPTs = function(a, u, f) {
    var c = _assign({}, f._gsap), p = "perspective,force3D,transformOrigin,svgOrigin", d = f.style, m, g, v, _, b, P, J, x;
    c.svg ? (v = f.getAttribute("transform"),
    f.setAttribute("transform", ""),
    d[_transformProp] = u,
    m = _parseTransform(f, 1),
    _removeProperty(f, _transformProp),
    f.setAttribute("transform", v)) : (v = getComputedStyle(f)[_transformProp],
    d[_transformProp] = u,
    m = _parseTransform(f, 1),
    d[_transformProp] = v);
    for (g in _transformProps)
        v = c[g],
        _ = m[g],
        v !== _ && p.indexOf(g) < 0 && (J = getUnit(v),
        x = getUnit(_),
        b = J !== x ? _convertToUnit(f, g, v, x) : parseFloat(v),
        P = parseFloat(_),
        a._pt = new PropTween(a._pt,m,g,b,P - b,_renderCSSProp),
        a._pt.u = x || 0,
        a._props.push(g));
    _assign(m, c)
};
_forEachName("padding,margin,Width,Radius", function(h, a) {
    var u = "Top"
      , f = "Right"
      , c = "Bottom"
      , p = "Left"
      , d = (a < 3 ? [u, f, c, p] : [u + p, u + f, c + f, c + p]).map(function(m) {
        return a < 2 ? h + m : "border" + m + h
    });
    _specialProps[a > 1 ? "border" + h : h] = function(m, g, v, _, b) {
        var P, J;
        if (arguments.length < 4)
            return P = d.map(function(x) {
                return _get(m, x, v)
            }),
            J = P.join(" "),
            J.split(P[0]).length === 5 ? P[0] : J;
        P = (_ + "").split(" "),
        J = {},
        d.forEach(function(x, w) {
            return J[x] = P[w] = P[w] || P[(w - 1) / 2 | 0]
        }),
        m.init(g, J, b)
    }
});
var CSSPlugin = {
    name: "css",
    register: _initCore$3,
    targetTest: function(a) {
        return a.style && a.nodeType
    },
    init: function(a, u, f, c, p) {
        var d = this._props, m = a.style, g = f.vars.startAt, v, _, b, P, J, x, w, pe, L, R, M, Z, he, et, ei, ii;
        _pluginInitted || _initCore$3(),
        this.styles = this.styles || _getStyleSaver(a),
        ii = this.styles.props,
        this.tween = f;
        for (w in u)
            if (w !== "autoRound" && (_ = u[w],
            !(_plugins[w] && _checkPlugin(w, u, f, c, a, p)))) {
                if (J = typeof _,
                x = _specialProps[w],
                J === "function" && (_ = _.call(f, c, a, p),
                J = typeof _),
                J === "string" && ~_.indexOf("random(") && (_ = _replaceRandom(_)),
                x)
                    x(this, a, w, _, f) && (ei = 1);
                else if (w.substr(0, 2) === "--")
                    v = (getComputedStyle(a).getPropertyValue(w) + "").trim(),
                    _ += "",
                    _colorExp.lastIndex = 0,
                    _colorExp.test(v) || (pe = getUnit(v),
                    L = getUnit(_)),
                    L ? pe !== L && (v = _convertToUnit(a, w, v, L) + L) : pe && (_ += pe),
                    this.add(m, "setProperty", v, _, c, p, 0, 0, w),
                    d.push(w),
                    ii.push(w, 0, m[w]);
                else if (J !== "undefined") {
                    if (g && w in g ? (v = typeof g[w] == "function" ? g[w].call(f, c, a, p) : g[w],
                    _isString$1(v) && ~v.indexOf("random(") && (v = _replaceRandom(v)),
                    getUnit(v + "") || (v += _config$1.units[w] || getUnit(_get(a, w)) || ""),
                    (v + "").charAt(1) === "=" && (v = _get(a, w))) : v = _get(a, w),
                    P = parseFloat(v),
                    R = J === "string" && _.charAt(1) === "=" && _.substr(0, 2),
                    R && (_ = _.substr(2)),
                    b = parseFloat(_),
                    w in _propertyAliases && (w === "autoAlpha" && (P === 1 && _get(a, "visibility") === "hidden" && b && (P = 0),
                    ii.push("visibility", 0, m.visibility),
                    _addNonTweeningPT(this, m, "visibility", P ? "inherit" : "hidden", b ? "inherit" : "hidden", !b)),
                    w !== "scale" && w !== "transform" && (w = _propertyAliases[w],
                    ~w.indexOf(",") && (w = w.split(",")[0]))),
                    M = w in _transformProps,
                    M) {
                        if (this.styles.save(w),
                        Z || (he = a._gsap,
                        he.renderTransform && !u.parseTransform || _parseTransform(a, u.parseTransform),
                        et = u.smoothOrigin !== !1 && he.smooth,
                        Z = this._pt = new PropTween(this._pt,m,_transformProp,0,1,he.renderTransform,he,0,-1),
                        Z.dep = 1),
                        w === "scale")
                            this._pt = new PropTween(this._pt,he,"scaleY",he.scaleY,(R ? _parseRelative(he.scaleY, R + b) : b) - he.scaleY || 0,_renderCSSProp),
                            this._pt.u = 0,
                            d.push("scaleY", w),
                            w += "X";
                        else if (w === "transformOrigin") {
                            ii.push(_transformOriginProp, 0, m[_transformOriginProp]),
                            _ = _convertKeywordsToPercentages(_),
                            he.svg ? _applySVGOrigin(a, _, 0, et, 0, this) : (L = parseFloat(_.split(" ")[2]) || 0,
                            L !== he.zOrigin && _addNonTweeningPT(this, he, "zOrigin", he.zOrigin, L),
                            _addNonTweeningPT(this, m, w, _firstTwoOnly(v), _firstTwoOnly(_)));
                            continue
                        } else if (w === "svgOrigin") {
                            _applySVGOrigin(a, _, 1, et, 0, this);
                            continue
                        } else if (w in _rotationalProperties) {
                            _addRotationalPropTween(this, he, w, P, R ? _parseRelative(P, R + _) : _);
                            continue
                        } else if (w === "smoothOrigin") {
                            _addNonTweeningPT(this, he, "smooth", he.smooth, _);
                            continue
                        } else if (w === "force3D") {
                            he[w] = _;
                            continue
                        } else if (w === "transform") {
                            _addRawTransformPTs(this, _, a);
                            continue
                        }
                    } else
                        w in m || (w = _checkPropPrefix(w) || w);
                    if (M || (b || b === 0) && (P || P === 0) && !_complexExp.test(_) && w in m)
                        pe = (v + "").substr((P + "").length),
                        b || (b = 0),
                        L = getUnit(_) || (w in _config$1.units ? _config$1.units[w] : pe),
                        pe !== L && (P = _convertToUnit(a, w, v, L)),
                        this._pt = new PropTween(this._pt,M ? he : m,w,P,(R ? _parseRelative(P, R + b) : b) - P,!M && (L === "px" || w === "zIndex") && u.autoRound !== !1 ? _renderRoundedCSSProp : _renderCSSProp),
                        this._pt.u = L || 0,
                        pe !== L && L !== "%" && (this._pt.b = v,
                        this._pt.r = _renderCSSPropWithBeginning);
                    else if (w in m)
                        _tweenComplexCSSString.call(this, a, w, v, R ? R + _ : _);
                    else if (w in a)
                        this.add(a, w, v || a[w], R ? R + _ : _, c, p);
                    else if (w !== "parseTransform") {
                        _missingPlugin(w, _);
                        continue
                    }
                    M || (w in m ? ii.push(w, 0, m[w]) : ii.push(w, 1, v || a[w])),
                    d.push(w)
                }
            }
        ei && _sortPropTweensByPriority(this)
    },
    render: function(a, u) {
        if (u.tween._time || !_reverting())
            for (var f = u._pt; f; )
                f.r(a, f.d),
                f = f._next;
        else
            u.styles.revert()
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function(a, u, f) {
        var c = _propertyAliases[u];
        return c && c.indexOf(",") < 0 && (u = c),
        u in _transformProps && u !== _transformOriginProp && (a._gsap.x || _get(a, "x")) ? f && _recentSetterPlugin === f ? u === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = f || {}) && (u === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : a.style && !_isUndefined(a.style[u]) ? _setterCSSStyle : ~u.indexOf("-") ? _setterCSSProp : _getSetter(a, u)
    },
    core: {
        _removeProperty,
        _getMatrix
    }
};
gsap$4.utils.checkPrefix = _checkPropPrefix;
gsap$4.core.getStyleSaver = _getStyleSaver;
(function(h, a, u, f) {
    var c = _forEachName(h + "," + a + "," + u, function(p) {
        _transformProps[p] = 1
    });
    _forEachName(a, function(p) {
        _config$1.units[p] = "deg",
        _rotationalProperties[p] = 1
    }),
    _propertyAliases[c[13]] = h + "," + a,
    _forEachName(f, function(p) {
        var d = p.split(":");
        _propertyAliases[d[1]] = c[d[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(h) {
    _config$1.units[h] = "px"
});
gsap$4.registerPlugin(CSSPlugin);
var gsapWithCSS = gsap$4.registerPlugin(CSSPlugin) || gsap$4;
gsapWithCSS.core.Tween;
/*!
 * paths 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig
  , _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig
  , _DEG2RAD = Math.PI / 180
  , _sin = Math.sin
  , _cos = Math.cos
  , _abs = Math.abs
  , _sqrt = Math.sqrt
  , _isNumber = function(a) {
    return typeof a == "number"
}
  , _roundingNum = 1e5
  , _round$1 = function(a) {
    return Math.round(a * _roundingNum) / _roundingNum || 0
};
function transformRawPath(h, a, u, f, c, p, d) {
    for (var m = h.length, g, v, _, b, P; --m > -1; )
        for (g = h[m],
        v = g.length,
        _ = 0; _ < v; _ += 2)
            b = g[_],
            P = g[_ + 1],
            g[_] = b * a + P * f + p,
            g[_ + 1] = b * u + P * c + d;
    return h._dirty = 1,
    h
}
function arcToSegment(h, a, u, f, c, p, d, m, g) {
    if (!(h === m && a === g)) {
        u = _abs(u),
        f = _abs(f);
        var v = c % 360 * _DEG2RAD
          , _ = _cos(v)
          , b = _sin(v)
          , P = Math.PI
          , J = P * 2
          , x = (h - m) / 2
          , w = (a - g) / 2
          , pe = _ * x + b * w
          , L = -b * x + _ * w
          , R = pe * pe
          , M = L * L
          , Z = R / (u * u) + M / (f * f);
        Z > 1 && (u = _sqrt(Z) * u,
        f = _sqrt(Z) * f);
        var he = u * u
          , et = f * f
          , ei = (he * et - he * M - et * R) / (he * M + et * R);
        ei < 0 && (ei = 0);
        var ii = (p === d ? -1 : 1) * _sqrt(ei)
          , oi = ii * (u * L / f)
          , hi = ii * -(f * pe / u)
          , fi = (h + m) / 2
          , ui = (a + g) / 2
          , pi = fi + (_ * oi - b * hi)
          , mi = ui + (b * oi + _ * hi)
          , li = (pe - oi) / u
          , ni = (L - hi) / f
          , ri = (-pe - oi) / u
          , ti = (-L - hi) / f
          , si = li * li + ni * ni
          , ci = (ni < 0 ? -1 : 1) * Math.acos(li / _sqrt(si))
          , ai = (li * ti - ni * ri < 0 ? -1 : 1) * Math.acos((li * ri + ni * ti) / _sqrt(si * (ri * ri + ti * ti)));
        isNaN(ai) && (ai = P),
        !d && ai > 0 ? ai -= J : d && ai < 0 && (ai += J),
        ci %= J,
        ai %= J;
        var di = Math.ceil(_abs(ai) / (J / 4)), gi = [], vi = ai / di, yi = 4 / 3 * _sin(vi / 2) / (1 + _cos(vi / 2)), Si = _ * u, Ci = b * u, Di = b * -f, Ti = _ * f, Ei;
        for (Ei = 0; Ei < di; Ei++)
            c = ci + Ei * vi,
            pe = _cos(c),
            L = _sin(c),
            li = _cos(c += vi),
            ni = _sin(c),
            gi.push(pe - yi * L, L + yi * pe, li + yi * ni, ni - yi * li, li, ni);
        for (Ei = 0; Ei < gi.length; Ei += 2)
            pe = gi[Ei],
            L = gi[Ei + 1],
            gi[Ei] = pe * Si + L * Di + pi,
            gi[Ei + 1] = pe * Ci + L * Ti + mi;
        return gi[Ei - 2] = m,
        gi[Ei - 1] = g,
        gi
    }
}
function stringToRawPath(h) {
    var a = (h + "").replace(_scientific, function(oi) {
        var hi = +oi;
        return hi < 1e-4 && hi > -1e-4 ? 0 : hi
    }).match(_svgPathExp) || [], u = [], f = 0, c = 0, p = 2 / 3, d = a.length, m = 0, g = "ERROR: malformed path: " + h, v, _, b, P, J, x, w, pe, L, R, M, Z, he, et, ei, ii = function(hi, fi, ui, pi) {
        R = (ui - hi) / 3,
        M = (pi - fi) / 3,
        w.push(hi + R, fi + M, ui - R, pi - M, ui, pi)
    };
    if (!h || !isNaN(a[0]) || isNaN(a[1]))
        return console.log(g),
        u;
    for (v = 0; v < d; v++)
        if (he = J,
        isNaN(a[v]) ? (J = a[v].toUpperCase(),
        x = J !== a[v]) : v--,
        b = +a[v + 1],
        P = +a[v + 2],
        x && (b += f,
        P += c),
        v || (pe = b,
        L = P),
        J === "M")
            w && (w.length < 8 ? u.length -= 1 : m += w.length),
            f = pe = b,
            c = L = P,
            w = [b, P],
            u.push(w),
            v += 2,
            J = "L";
        else if (J === "C")
            w || (w = [0, 0]),
            x || (f = c = 0),
            w.push(b, P, f + a[v + 3] * 1, c + a[v + 4] * 1, f += a[v + 5] * 1, c += a[v + 6] * 1),
            v += 6;
        else if (J === "S")
            R = f,
            M = c,
            (he === "C" || he === "S") && (R += f - w[w.length - 4],
            M += c - w[w.length - 3]),
            x || (f = c = 0),
            w.push(R, M, b, P, f += a[v + 3] * 1, c += a[v + 4] * 1),
            v += 4;
        else if (J === "Q")
            R = f + (b - f) * p,
            M = c + (P - c) * p,
            x || (f = c = 0),
            f += a[v + 3] * 1,
            c += a[v + 4] * 1,
            w.push(R, M, f + (b - f) * p, c + (P - c) * p, f, c),
            v += 4;
        else if (J === "T")
            R = f - w[w.length - 4],
            M = c - w[w.length - 3],
            w.push(f + R, c + M, b + (f + R * 1.5 - b) * p, P + (c + M * 1.5 - P) * p, f = b, c = P),
            v += 2;
        else if (J === "H")
            ii(f, c, f = b, c),
            v += 1;
        else if (J === "V")
            ii(f, c, f, c = b + (x ? c - f : 0)),
            v += 1;
        else if (J === "L" || J === "Z")
            J === "Z" && (b = pe,
            P = L,
            w.closed = !0),
            (J === "L" || _abs(f - b) > .5 || _abs(c - P) > .5) && (ii(f, c, b, P),
            J === "L" && (v += 2)),
            f = b,
            c = P;
        else if (J === "A") {
            if (et = a[v + 4],
            ei = a[v + 5],
            R = a[v + 6],
            M = a[v + 7],
            _ = 7,
            et.length > 1 && (et.length < 3 ? (M = R,
            R = ei,
            _--) : (M = ei,
            R = et.substr(2),
            _ -= 2),
            ei = et.charAt(1),
            et = et.charAt(0)),
            Z = arcToSegment(f, c, +a[v + 1], +a[v + 2], +a[v + 3], +et, +ei, (x ? f : 0) + R * 1, (x ? c : 0) + M * 1),
            v += _,
            Z)
                for (_ = 0; _ < Z.length; _++)
                    w.push(Z[_]);
            f = w[w.length - 2],
            c = w[w.length - 1]
        } else
            console.log(g);
    return v = w.length,
    v < 6 ? (u.pop(),
    v = 0) : w[0] === w[v - 2] && w[1] === w[v - 1] && (w.closed = !0),
    u.totalPoints = m + v,
    u
}
function rawPathToString(h) {
    _isNumber(h[0]) && (h = [h]);
    var a = "", u = h.length, f, c, p, d;
    for (c = 0; c < u; c++) {
        for (d = h[c],
        a += "M" + _round$1(d[0]) + "," + _round$1(d[1]) + " C",
        f = d.length,
        p = 2; p < f; p++)
            a += _round$1(d[p++]) + "," + _round$1(d[p++]) + " " + _round$1(d[p++]) + "," + _round$1(d[p++]) + " " + _round$1(d[p++]) + "," + _round$1(d[p]) + " ";
        d.closed && (a += "z")
    }
    return a
}
/*!
 * CustomEase 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap$3, _coreInitted$2, _getGSAP$1 = function() {
    return gsap$3 || typeof window < "u" && (gsap$3 = window.gsap) && gsap$3.registerPlugin && gsap$3
}, _initCore$2 = function() {
    gsap$3 = _getGSAP$1(),
    gsap$3 ? (gsap$3.registerEase("_CE", CustomEase.create),
    _coreInitted$2 = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
}, _bigNum = 1e20, _round = function(a) {
    return ~~(a * 1e3 + (a < 0 ? -.5 : .5)) / 1e3
}, _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g, _findMinimum = function(a) {
    var u = a.length, f = _bigNum, c;
    for (c = 1; c < u; c += 6)
        +a[c] < f && (f = +a[c]);
    return f
}, _normalize = function(a, u, f) {
    !f && f !== 0 && (f = Math.max(+a[a.length - 1], +a[1]));
    var c = +a[0] * -1, p = -f, d = a.length, m = 1 / (+a[d - 2] + c), g = -u || (Math.abs(+a[d - 1] - +a[1]) < .01 * (+a[d - 2] - +a[0]) ? _findMinimum(a) + p : +a[d - 1] + p), v;
    for (g ? g = 1 / g : g = -m,
    v = 0; v < d; v += 2)
        a[v] = (+a[v] + c) * m,
        a[v + 1] = (+a[v + 1] + p) * g
}, _bezierToPoints = function h(a, u, f, c, p, d, m, g, v, _, b) {
    var P = (a + f) / 2, J = (u + c) / 2, x = (f + p) / 2, w = (c + d) / 2, pe = (p + m) / 2, L = (d + g) / 2, R = (P + x) / 2, M = (J + w) / 2, Z = (x + pe) / 2, he = (w + L) / 2, et = (R + Z) / 2, ei = (M + he) / 2, ii = m - a, oi = g - u, hi = Math.abs((f - m) * oi - (c - g) * ii), fi = Math.abs((p - m) * oi - (d - g) * ii), ui;
    return _ || (_ = [{
        x: a,
        y: u
    }, {
        x: m,
        y: g
    }],
    b = 1),
    _.splice(b || _.length - 1, 0, {
        x: et,
        y: ei
    }),
    (hi + fi) * (hi + fi) > v * (ii * ii + oi * oi) && (ui = _.length,
    h(a, u, P, J, R, M, et, ei, v, _, b),
    h(et, ei, Z, he, pe, L, m, g, v, _, b + 1 + (_.length - ui))),
    _
}, CustomEase = function() {
    function h(u, f, c) {
        _coreInitted$2 || _initCore$2(),
        this.id = u,
        this.setData(f, c)
    }
    var a = h.prototype;
    return a.setData = function(f, c) {
        c = c || {},
        f = f || "0,0,1,1";
        var p = f.match(_numExp), d = 1, m = [], g = [], v = c.precision || 1, _ = v <= 1, b, P, J, x, w, pe, L, R, M;
        if (this.data = f,
        (_needsParsingExp.test(f) || ~f.indexOf("M") && f.indexOf("C") < 0) && (p = stringToRawPath(f)[0]),
        b = p.length,
        b === 4)
            p.unshift(0, 0),
            p.push(1, 1),
            b = 8;
        else if ((b - 2) % 6)
            throw "Invalid CustomEase";
        for ((+p[0] != 0 || +p[b - 2] != 1) && _normalize(p, c.height, c.originY),
        this.segment = p,
        x = 2; x < b; x += 6)
            P = {
                x: +p[x - 2],
                y: +p[x - 1]
            },
            J = {
                x: +p[x + 4],
                y: +p[x + 5]
            },
            m.push(P, J),
            _bezierToPoints(P.x, P.y, +p[x], +p[x + 1], +p[x + 2], +p[x + 3], J.x, J.y, 1 / (v * 2e5), m, m.length - 1);
        for (b = m.length,
        x = 0; x < b; x++)
            L = m[x],
            R = m[x - 1] || L,
            (L.x > R.x || R.y !== L.y && R.x === L.x || L === R) && L.x <= 1 ? (R.cx = L.x - R.x,
            R.cy = L.y - R.y,
            R.n = L,
            R.nx = L.x,
            _ && x > 1 && Math.abs(R.cy / R.cx - m[x - 2].cy / m[x - 2].cx) > 2 && (_ = 0),
            R.cx < d && (R.cx ? d = R.cx : (R.cx = .001,
            x === b - 1 && (R.x -= .001,
            d = Math.min(d, .001),
            _ = 0)))) : (m.splice(x--, 1),
            b--);
        if (b = 1 / d + 1 | 0,
        w = 1 / b,
        pe = 0,
        L = m[0],
        _) {
            for (x = 0; x < b; x++)
                M = x * w,
                L.nx < M && (L = m[++pe]),
                P = L.y + (M - L.x) / L.cx * L.cy,
                g[x] = {
                    x: M,
                    cx: w,
                    y: P,
                    cy: 0,
                    nx: 9
                },
                x && (g[x - 1].cy = P - g[x - 1].y);
            g[b - 1].cy = m[m.length - 1].y - P
        } else {
            for (x = 0; x < b; x++)
                L.nx < x * w && (L = m[++pe]),
                g[x] = L;
            pe < m.length - 1 && (g[x - 1] = m[m.length - 2])
        }
        return this.ease = function(Z) {
            var he = g[Z * b | 0] || g[b - 1];
            return he.nx < Z && (he = he.n),
            he.y + (Z - he.x) / he.cx * he.cy
        }
        ,
        this.ease.custom = this,
        this.id && gsap$3 && gsap$3.registerEase(this.id, this.ease),
        this
    }
    ,
    a.getSVGData = function(f) {
        return h.getSVGData(this, f)
    }
    ,
    h.create = function(f, c, p) {
        return new h(f,c,p).ease
    }
    ,
    h.register = function(f) {
        gsap$3 = f,
        _initCore$2()
    }
    ,
    h.get = function(f) {
        return gsap$3.parseEase(f)
    }
    ,
    h.getSVGData = function(f, c) {
        c = c || {};
        var p = c.width || 100, d = c.height || 100, m = c.x || 0, g = (c.y || 0) + d, v = gsap$3.utils.toArray(c.path)[0], _, b, P, J, x, w, pe, L, R, M;
        if (c.invert && (d = -d,
        g = 0),
        typeof f == "string" && (f = gsap$3.parseEase(f)),
        f.custom && (f = f.custom),
        f instanceof h)
            _ = rawPathToString(transformRawPath([f.segment], p, 0, 0, -d, m, g));
        else {
            for (_ = [m, g],
            pe = Math.max(5, (c.precision || 1) * 200),
            J = 1 / pe,
            pe += 2,
            L = 5 / pe,
            R = _round(m + J * p),
            M = _round(g + f(J) * -d),
            b = (M - g) / (R - m),
            P = 2; P < pe; P++)
                x = _round(m + P * J * p),
                w = _round(g + f(P * J) * -d),
                (Math.abs((w - M) / (x - R) - b) > L || P === pe - 1) && (_.push(R, M),
                b = (w - M) / (x - R)),
                R = x,
                M = w;
            _ = "M" + _.join(",")
        }
        return v && v.setAttribute("d", _),
        _
    }
    ,
    h
}();
_getGSAP$1() && gsap$3.registerPlugin(CustomEase);
CustomEase.version = "3.11.4";
if (!window.gsap) {
    window.gsap = gsapWithCSS,
    gsapWithCSS.config({
        force3D: !0
    });
    const h = {
        ease: {
            page: ".37,0,.3,1"
        }
    };
    gsapWithCSS.registerPlugin(CustomEase);
    const a = Object.keys(h.ease);
    a.length > 0 && a.forEach(u=>{
        CustomEase.create(u, h.ease[u])
    }
    )
}
const scriptRel = "modulepreload"
  , assetsURL = function(h) {
    return "/" + h
}
  , seen = {}
  , __vitePreload = function(a, u, f) {
    if (!u || u.length === 0)
        return a();
    const c = document.getElementsByTagName("link");
    return Promise.all(u.map(p=>{
        if (p = assetsURL(p),
        p in seen)
            return;
        seen[p] = !0;
        const d = p.endsWith(".css")
          , m = d ? '[rel="stylesheet"]' : "";
        if (!!f)
            for (let _ = c.length - 1; _ >= 0; _--) {
                const b = c[_];
                if (b.href === p && (!d || b.rel === "stylesheet"))
                    return
            }
        else if (document.querySelector(`link[href="${p}"]${m}`))
            return;
        const v = document.createElement("link");
        if (v.rel = d ? "stylesheet" : scriptRel,
        d || (v.as = "script",
        v.crossOrigin = ""),
        v.href = p,
        document.head.appendChild(v),
        d)
            return new Promise((_,b)=>{
                v.addEventListener("load", _),
                v.addEventListener("error", ()=>b(new Error(`Unable to preload CSS for ${p}`)))
            }
            )
    }
    )).then(()=>a())
};
function init$4({transitions: h}) {
    __vitePreload(()=>Promise.resolve().then(()=>load), void 0).then(({init: a})=>a()),
    __vitePreload(()=>Promise.resolve().then(()=>window$1), void 0).then(({init: a})=>a()),
    __vitePreload(()=>Promise.resolve().then(()=>asynchronousTransition), void 0).then(({init: a})=>a(h))
}
const _ua = navigator.userAgent
  , TYPE_NAVIGATE = 0
  , TYPE_RELOAD = 1
  , TYPE_BACK_FORWARD = 2;
function getNavigationType() {
    switch (window.performance.navigation.type) {
    case TYPE_RELOAD:
        return "reload";
    case TYPE_BACK_FORWARD:
        return "backForward";
    case TYPE_NAVIGATE:
    default:
        return "default"
    }
}
const isEdge = /Edg/.test(_ua)
  , isChrome = /Chrome/.test(_ua)
  , isIosChrome = /CriOS/.test(_ua)
  , isSafari = !isEdge && !isChrome ? /Safari/.test(_ua) : !1
  , isIpad = /iPad/.test(_ua) || /Macintosh/.test(_ua) && "ontouchend"in document
  , isIos = /iPhone|iPod/.test(_ua) || isIpad
  , isAndroid = /Android/i.test(_ua)
  , isMobile = isIos || isAndroid;
isIpad || isAndroid && _ua.match(/Android.+Mobile/);
function getClientPos(h) {
    const a = h.changedTouches ? h.changedTouches[0] : h;
    return {
        x: a.clientX,
        y: a.clientY
    }
}
function throttle(h, a=200) {
    let u, f = 0;
    return function() {
        const c = performance.now() - f
          , p = ()=>{
            h.apply(this, arguments),
            f = performance.now()
        }
        ;
        u || p(),
        u && clearTimeout(u),
        c > a ? p() : u = setTimeout(p, a)
    }
}
function debounce(h, a=200) {
    let u;
    return function() {
        clearTimeout(u),
        u = setTimeout(()=>{
            h.apply(this, arguments)
        }
        , a)
    }
}
function onLoad(h) {
    document.readyState === "complete" ? h() : window.addEventListener("load", h)
}
function onLoadImage(h) {
    return new Promise(a=>{
        h.complete ? a(h) : h.addEventListener("load", ()=>{
            a(h)
        }
        )
    }
    )
}
function onLoadMedia(h) {
    return new Promise(a=>{
        h.readyState === 4 ? a({
            srcElement: h,
            target: h
        }) : h.addEventListener("loadeddata", a)
    }
    )
}
let isPassive = !1;
try {
    const h = Object.defineProperty({}, "passive", {
        get() {
            isPassive = !0
        }
    });
    window.addEventListener("testPassive", null, h),
    window.removeEventListener("testPassive", null, h)
} catch {
    isPassive = !1
}
const passive = isPassive ? {
    passive: !0
} : !1
  , listenersScroll = window._GLOBAL_.listenersScroll = window._GLOBAL_.listenersScroll || [];
let lengthListenersScroll;
function onScroll(h, a) {
    a && setTimeout(()=>{
        h(window.scrollY)
    }
    ),
    listenersScroll.push(h)
}
function offScroll(h) {
    listenersScroll.some((a,u)=>a === h ? (listenersScroll.splice(u, 1),
    !0) : !1)
}
const emitScroll = throttle(()=>{
    const {scrollY: h} = window;
    lengthListenersScroll = listenersScroll.length;
    for (let a = 0; a < lengthListenersScroll; a++)
        listenersScroll[a](h)
}
, 100)
  , {pow, sqrt, sin, cos, PI} = Math
  , c1 = 1.70158
  , c2 = c1 * 1.525
  , c3 = c1 + 1
  , c4 = 2 * PI / 3
  , c5 = 2 * PI / 4.5
  , n1 = 7.5625
  , d1 = 2.75;
function linear(h) {
    return h
}
function easeInQuad(h) {
    return h * h
}
function easeOutQuad(h) {
    return 1 - (1 - h) * (1 - h)
}
function easeInOutQuad(h) {
    return h < .5 ? 2 * h * h : 1 - pow(-2 * h + 2, 2) / 2
}
function easeInCubic(h) {
    return h * h * h
}
function easeOutCubic(h) {
    return 1 - pow(1 - h, 3)
}
function easeInOutCubic(h) {
    return h < .5 ? 4 * h * h * h : 1 - pow(-2 * h + 2, 3) / 2
}
function easeInQuart(h) {
    return h * h * h * h
}
function easeOutQuart(h) {
    return 1 - pow(1 - h, 4)
}
function easeInOutQuart(h) {
    return h < .5 ? 8 * h * h * h * h : 1 - pow(-2 * h + 2, 4) / 2
}
function easeInQuint(h) {
    return h * h * h * h * h
}
function easeOutQuint(h) {
    return 1 - pow(1 - h, 5)
}
function easeInOutQuint(h) {
    return h < .5 ? 16 * h * h * h * h * h : 1 - pow(-2 * h + 2, 5) / 2
}
function easeInSine(h) {
    return 1 - cos(h * PI / 2)
}
function easeOutSine(h) {
    return sin(h * PI / 2)
}
function easeInOutSine(h) {
    return -(cos(PI * h) - 1) / 2
}
function easeInExpo(h) {
    return h === 0 ? 0 : pow(2, 10 * h - 10)
}
function easeOutExpo(h) {
    return h === 1 ? 1 : 1 - pow(2, -10 * h)
}
function easeInOutExpo(h) {
    return h === 0 ? 0 : h === 1 ? 1 : h < .5 ? pow(2, 20 * h - 10) / 2 : (2 - pow(2, -20 * h + 10)) / 2
}
function easeInCirc(h) {
    return 1 - sqrt(1 - pow(h, 2))
}
function easeOutCirc(h) {
    return sqrt(1 - pow(h - 1, 2))
}
function easeInOutCirc(h) {
    return h < .5 ? (1 - sqrt(1 - pow(2 * h, 2))) / 2 : (sqrt(1 - pow(-2 * h + 2, 2)) + 1) / 2
}
function easeInBack(h) {
    return c3 * h * h * h - c1 * h * h
}
function easeOutBack(h) {
    return 1 + c3 * pow(h - 1, 3) + c1 * pow(h - 1, 2)
}
function easeInOutBack(h) {
    return h < .5 ? pow(2 * h, 2) * ((c2 + 1) * 2 * h - c2) / 2 : (pow(2 * h - 2, 2) * ((c2 + 1) * (h * 2 - 2) + c2) + 2) / 2
}
function easeInElastic(h) {
    return h === 0 ? 0 : h === 1 ? 1 : -pow(2, 10 * h - 10) * sin((h * 10 - 10.75) * c4)
}
function easeOutElastic(h) {
    return h === 0 ? 0 : h === 1 ? 1 : pow(2, -10 * h) * sin((h * 10 - .75) * c4) + 1
}
function easeInOutElastic(h) {
    return h === 0 ? 0 : h === 1 ? 1 : h < .5 ? -(pow(2, 20 * h - 10) * sin((20 * h - 11.125) * c5)) / 2 : pow(2, -20 * h + 10) * sin((20 * h - 11.125) * c5) / 2 + 1
}
function bounceOut(h) {
    return h < 1 / d1 ? n1 * h * h : h < 2 / d1 ? n1 * (h -= 1.5 / d1) * h + .75 : h < 2.5 / d1 ? n1 * (h -= 2.25 / d1) * h + .9375 : n1 * (h -= 2.625 / d1) * h + .984375
}
function easeInBounce(h) {
    return 1 - bounceOut(1 - h)
}
const easeOutBounce = bounceOut;
function easeInOutBounce(h) {
    return h < .5 ? (1 - bounceOut(1 - 2 * h)) / 2 : (1 + bounceOut(2 * h - 1)) / 2
}
const ease = {
    linear,
    "quad.in": easeInQuad,
    "quad.out": easeOutQuad,
    "quad.inOut": easeInOutQuad,
    "cubic.in": easeInCubic,
    "cubic.out": easeOutCubic,
    "cubic.inOut": easeInOutCubic,
    "quart.in": easeInQuart,
    "quart.out": easeOutQuart,
    "quart.inOut": easeInOutQuart,
    "quint.in": easeInQuint,
    "quint.out": easeOutQuint,
    "quint.inOut": easeInOutQuint,
    "sine.in": easeInSine,
    "sine.out": easeOutSine,
    "sine.inOut": easeInOutSine,
    "expo.in": easeInExpo,
    "expo.out": easeOutExpo,
    "expo.inOut": easeInOutExpo,
    "circ.in": easeInCirc,
    "circ.out": easeOutCirc,
    "circ.inOut": easeInOutCirc,
    "back.in": easeInBack,
    "back.out": easeOutBack,
    "back.inOut": easeInOutBack,
    "elastic.in": easeInElastic,
    "elastic.out": easeOutElastic,
    "elastic.inOut": easeInOutElastic,
    "bounce.in": easeInBounce,
    "bounce.out": easeOutBounce,
    "bounce.inOut": easeInOutBounce
}
  , store = window._GLOBAL_.store = window._GLOBAL_.store || {
    designWidthPc: 1600,
    designHeightPc: 964,
    designWidthSp: 828 / 2,
    designHeightSp: 1506 / 2,
    breakpoint: 768,
    baseWidthMinPc: 1200,
    pageId: "",
    pageIdPrev: "",
    cScroll: null,
    cIntersecting: null,
    scrollY: 0,
    scrollDirection: 0,
    scrollYSmooth: 0,
    scrollYNative: 0,
    windowHeightInitial: window.innerHeight,
    componentCache: new Map,
    modals: {},
    isOpenModal: !1,
    view: null,
    isTransitioning: !1,
    isTransitioned: !1,
    isLoadedStyles: !1,
    isLeave: !1,
    isPopstate: !1,
    popDirection: null,
    isInitializedAsynchronousTransition: !1,
    historyCount: 0,
    isScrollAnimating: !1,
    elTransitionContents: document.querySelector("[data-transition-contents]"),
    isActiveTypekit: !1,
    isHorizontalScroll: !1,
    CEye: null,
    easeParallax: ease["quad.in"],
    scaleMinParallax: .16,
    parallaxBack: .3
}
  , mediaSp = window.matchMedia(`screen and (max-width: ${store.breakpoint - 1}px)`)
  , mediaTb = window.matchMedia(`screen and (min-width: ${store.breakpoint}px) and (max-width: ${store.baseWidthMinPc - 1}px)`)
  , mediaTbPortrait = window.matchMedia(`screen and (min-width: ${store.breakpoint}px) and (orientation: portrait)`)
  , media = window._GLOBAL_.media = window._GLOBAL_.media || (()=>{
    const h = {};
    return Object.defineProperty(h, "isSp", {
        get: ()=>mediaSp.matches
    }),
    Object.defineProperty(h, "isTb", {
        get: ()=>mediaTb.matches
    }),
    Object.defineProperty(h, "isTbPortrait", {
        get: ()=>mediaTbPortrait.matches
    }),
    h
}
)();
function addMatchesListener(h, a=()=>{}
, u=a) {
    const f = c=>{
        c.matches ? a(c) : u(c)
    }
    ;
    h.addListener(f)
}
function isSpMatch(h, a) {
    addMatchesListener(mediaSp, h, a)
}
const listenersResize = window._GLOBAL_.listenersResize = window._GLOBAL_.listenersResize || []
  , listenersResizeAlways = window._GLOBAL_.listenersResizeAlways = window._GLOBAL_.listenersResizeAlways || []
  , listenersResetSize = window._GLOBAL_.listenersResetSize = window._GLOBAL_.listenersResetSize || []
  , listenersOrientationchange = window._GLOBAL_.listenersOrientationchange = window._GLOBAL_.listenersOrientationchange || [];
window._GLOBAL_.windowWidth = window._GLOBAL_.windowWidth || 0;
function init$3() {
    window.addEventListener("resize", ()=>{
        requestAnimationFrame(()=>{
            emitResize()
        }
        )
    }
    ),
    window.addEventListener("orientationchange", ()=>{
        const h = window.orientation !== 0;
        for (let a = 0; a < listenersOrientationchange.length; a++)
            listenersOrientationchange[a](h)
    }
    )
}
function onResize(h, a) {
    a && requestAnimationFrame(()=>{
        const u = getwindowSize();
        h({
            ...u,
            isForce: !1
        })
    }
    ),
    listenersResize.push(h)
}
function offResize(h) {
    listenersResize.some((a,u)=>a === h ? (listenersResize.splice(u, 1),
    !0) : !1)
}
function onResizeAlways(h, a) {
    a && requestAnimationFrame(()=>{
        const u = getwindowSize();
        h({
            ...u,
            isForce: !1
        })
    }
    ),
    listenersResizeAlways.push(h)
}
function offResizeAlways(h) {
    listenersResizeAlways.some((a,u)=>a === h ? (listenersResizeAlways.splice(u, 1),
    !0) : !1)
}
function onResetSize(h, a) {
    a && requestAnimationFrame(()=>{
        const u = getwindowSize();
        h({
            ...u,
            isForce: !1
        })
    }
    ),
    listenersResetSize.push(h)
}
function offResetSize(h) {
    listenersResetSize.some((a,u)=>a === h ? (listenersResetSize.splice(u, 1),
    !0) : !1)
}
function onOrientationchange(h, a) {
    a && requestAnimationFrame(()=>{
        const u = window.orientation !== 0;
        h(u)
    }
    ),
    listenersOrientationchange.push(h)
}
function offOrientationchange(h) {
    listenersOrientationchange.some((a,u)=>a === h ? (listenersOrientationchange.splice(u, 1),
    !0) : !1)
}
const emitResize = debounce((h=!1)=>{
    const {width: a, height: u} = getwindowSize()
      , f = {
        width: a,
        height: u,
        isForce: h
    };
    getStatusBarHeight();
    for (let c = 0; c < listenersResizeAlways.length; c++)
        listenersResizeAlways[c](f);
    if (!(!h && isMobile && window._GLOBAL_.windowWidth === a)) {
        window._GLOBAL_.windowWidth = a,
        getVh();
        for (let c = 0; c < listenersResetSize.length; c++)
            listenersResetSize[c](f);
        for (let c = 0; c < listenersResize.length; c++)
            listenersResize[c](f);
        emitScroll()
    }
}
, 100);
function getwindowSize() {
    const h = store.windowWidth = window.innerWidth
      , a = store.windowHeight = window.innerHeight;
    return {
        width: h,
        height: a
    }
}
function getStatusBarHeight() {
    let h = 0;
    if (media.isSp)
        if (isIosChrome)
            h = 68;
        else if (isIos && isSafari) {
            const {width: a, height: u} = window.screen;
            a / u > .5 ? h = 42 : h = 100
        } else
            isAndroid ? h = 72 : h = 100;
    else
        isIpad && isSafari && (h = 39);
    store.statusBarHeight = h,
    document.documentElement.style.setProperty("--sbh", h + "px")
}
function getVh() {
    let h = window.innerHeight * .01;
    document.documentElement.style.setProperty("--vh", `${h}px`)
}
const window$1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    emitResize,
    getStatusBarHeight,
    getVh,
    getwindowSize,
    init: init$3,
    offOrientationchange,
    offResetSize,
    offResize,
    offResizeAlways,
    onOrientationchange,
    onResetSize,
    onResize,
    onResizeAlways
}, Symbol.toStringTag, {
    value: "Module"
}))
  , eventBus = window._GLOBAL_.eventBus = window._GLOBAL_.eventBus || {
    listeners: {},
    emit(h, ...a) {
        if (!this.listeners[h])
            return;
        const u = this.listeners[h].slice();
        for (let f = 0; f < u.length; f++)
            u[f](...a)
    },
    on(h, a) {
        this.listeners[h] || (this.listeners[h] = []),
        this.listeners[h].push(a)
    },
    once(h, a) {
        this.listeners[h] || (this.listeners[h] = []);
        const u = (...f)=>{
            this.off(h, u),
            a(...f)
        }
        ;
        this.listeners[h].push(u)
    },
    off(h, a) {
        const u = this.listeners[h];
        !u || u.length === 0 || (u.some((f,c)=>f === a ? (u.splice(c, 1),
        !0) : !1),
        u.length === 0 && delete this.listeners[h])
    }
};
var tinyEmitter = {
    exports: {}
};
function E() {}
E.prototype = {
    on: function(h, a, u) {
        var f = this.e || (this.e = {});
        return (f[h] || (f[h] = [])).push({
            fn: a,
            ctx: u
        }),
        this
    },
    once: function(h, a, u) {
        var f = this;
        function c() {
            f.off(h, c),
            a.apply(u, arguments)
        }
        return c._ = a,
        this.on(h, c, u)
    },
    emit: function(h) {
        var a = [].slice.call(arguments, 1)
          , u = ((this.e || (this.e = {}))[h] || []).slice()
          , f = 0
          , c = u.length;
        for (f; f < c; f++)
            u[f].fn.apply(u[f].ctx, a);
        return this
    },
    off: function(h, a) {
        var u = this.e || (this.e = {})
          , f = u[h]
          , c = [];
        if (f && a)
            for (var p = 0, d = f.length; p < d; p++)
                f[p].fn !== a && f[p].fn._ !== a && c.push(f[p]);
        return c.length ? u[h] = c : delete u[h],
        this
    }
};
tinyEmitter.exports = E;
tinyEmitter.exports.TinyEmitter = E;
var tinyEmitterExports = tinyEmitter.exports;
const Emitter = getDefaultExportFromCjs(tinyEmitterExports);
class Renderer {
    constructor(a) {
        this.wrap = document.querySelector("[data-router-wrapper]"),
        this.properties = a,
        this.Transition = a.transition ? new a.transition.class(this.wrap,a.transition.name) : null
    }
    setup() {
        this.onEnter && this.onEnter(),
        this.onEnterCompleted && this.onEnterCompleted()
    }
    add() {
        this.wrap.insertAdjacentHTML("beforeend", this.properties.view.outerHTML)
    }
    update() {
        document.title = this.properties.page.title
    }
    show(a) {
        return new Promise(async u=>{
            this.update(),
            this.onEnter && this.onEnter(),
            this.Transition && await this.Transition.show(a),
            this.onEnterCompleted && this.onEnterCompleted(),
            u()
        }
        )
    }
    hide(a) {
        return new Promise(async u=>{
            this.onLeave && this.onLeave(),
            this.Transition && await this.Transition.hide(a),
            this.onLeaveCompleted && this.onLeaveCompleted(),
            u()
        }
        )
    }
}
const PARSER = new window.DOMParser;
class Helpers {
    constructor(a, u) {
        this.renderers = a,
        this.transitions = u
    }
    getOrigin(a) {
        const u = a.match(/(https?:\/\/[\w\-.]+)/);
        return u ? u[1].replace(/https?:\/\//, "") : null
    }
    getPathname(a) {
        const u = a.match(/https?:\/\/.*?(\/[\w_\-./]+)/);
        return u ? u[1] : "/"
    }
    getAnchor(a) {
        const u = a.match(/(#.*)$/);
        return u ? u[1] : null
    }
    getParams(a) {
        const u = a.match(/\?([\w_\-.=&]+)/);
        if (!u)
            return null;
        const f = u[1].split("&")
          , c = {};
        for (let p = 0; p < f.length; p++) {
            const d = f[p].split("=")
              , {0: m} = d
              , {1: g} = d;
            c[m] = g
        }
        return c
    }
    getDOM(a) {
        return typeof a == "string" ? PARSER.parseFromString(a, "text/html") : a
    }
    getView(a) {
        return a.querySelector("[data-router-view]")
    }
    getSlug(a) {
        return a.getAttribute("data-router-view")
    }
    getRenderer(a) {
        if (!this.renderers)
            return Promise.resolve(Renderer);
        if (a in this.renderers) {
            const u = this.renderers[a];
            return typeof u == "function" && !Renderer.isPrototypeOf(u) ? Promise.resolve(u()).then(({default: f})=>f) : typeof u.then == "function" ? Promise.resolve(u).then(({default: f})=>f) : Promise.resolve(u)
        }
        return Promise.resolve(Renderer)
    }
    getTransition(a) {
        return this.transitions ? a in this.transitions ? {
            class: this.transitions[a],
            name: a
        } : "default"in this.transitions ? {
            class: this.transitions.default,
            name: "default"
        } : null : null
    }
    getProperties(a) {
        const u = this.getDOM(a)
          , f = this.getView(u)
          , c = this.getSlug(f)
          , p = this.getRenderer(c, this.renderers)
          , d = this.getTransition(c, this.transitions);
        return {
            page: u,
            view: f,
            slug: c,
            renderer: p,
            transition: d
        }
    }
    getLocation(a) {
        return {
            href: a,
            anchor: this.getAnchor(a),
            origin: this.getOrigin(a),
            params: this.getParams(a),
            pathname: this.getPathname(a)
        }
    }
}
class Core extends Emitter {
    constructor({renderers: a, transitions: u}={}) {
        super(),
        this.Helpers = new Helpers(a,u),
        this.Transitions = u,
        this.Contextual = !1,
        this.location = this.Helpers.getLocation(window.location.href),
        this.properties = this.Helpers.getProperties(document.cloneNode(!0)),
        this.popping = !1,
        this.running = !1,
        this.trigger = null,
        this.direction = null,
        this.historyCount = Number(sessionStorage.getItem("historyCount")) || 0,
        this.prevHistoryCount = this.historyCount,
        this.cache = new Map,
        this.cacheFetch = new Map,
        this.cacheIntersectionObserver = new Map,
        setTimeout(()=>{
            this.fetchPage(this.location.pathname)
        }
        , 500),
        this.properties.renderer.then(f=>{
            this.From = new f(this.properties),
            this.From.setup()
        }
        ),
        this._navigate = this.navigate.bind(this),
        window.addEventListener("popstate", this.popState.bind(this)),
        this.detach = this.attach(document.querySelectorAll(this.getSelectorLink())),
        window.addEventListener("pagehide", ()=>{
            sessionStorage.setItem("historyCount", this.historyCount)
        }
        )
    }
    attachAll(a=document) {
        const u = a.querySelectorAll(this.getSelectorLink())
          , f = this.attach(u);
        return {
            links: u,
            detach: f
        }
    }
    attach(a) {
        const u = [...a].map(f=>{
            f.addEventListener("click", this._navigate);
            const c = this.listenPrefetch(f);
            return ()=>{
                f.removeEventListener("click", this._navigate),
                c()
            }
        }
        );
        return ()=>{
            u.forEach(f=>{
                f()
            }
            )
        }
    }
    navigate(a) {
        if (!(a.metaKey || a.ctrlKey)) {
            a.preventDefault();
            const u = a.currentTarget.hasAttribute("data-transition") ? a.currentTarget.dataset.transition : !1;
            this.redirect(a.currentTarget.href, u, a.currentTarget)
        }
    }
    redirect(a, u=!1, f="script") {
        if (this.trigger = f,
        !this.running && a !== this.location.href) {
            const c = this.Helpers.getLocation(a);
            this.Contextual = !1,
            u && (this.Contextual = this.Transitions.contextual[u].prototype,
            this.Contextual.name = u),
            c.origin !== this.location.origin || c.anchor && c.pathname === this.location.pathname ? window.location.href = a : (this.location = c,
            this.beforeFetch())
        }
    }
    popState(a) {
        this.trigger = "popstate",
        a.state?.count > this.historyCount ? this.direction = "forward" : this.direction = "back",
        this.historyCount = a.state?.count || 0,
        this.Contextual = !1;
        const u = this.Helpers.getLocation(window.location.href);
        this.location.pathname !== u.pathname || !this.location.anchor && !u.anchor ? (this.popping = !0,
        this.location = u,
        this.beforeFetch()) : this.location = u
    }
    pushState() {
        this.popping || window.history.pushState({
            count: ++this.historyCount
        }, "", this.location.href)
    }
    async fetch(a, u=!1) {
        if (this.cacheFetch.has(a))
            return this.cacheFetch.get(a);
        {
            const f = await fetch(a, {
                mode: "same-origin",
                method: "GET",
                headers: {
                    "X-Requested-With": "Highway"
                },
                credentials: "same-origin"
            });
            if (f.status >= 200 && f.status < 300)
                return this.cacheFetch.set(a, f),
                f;
            if (u)
                window.location.href = a;
            else
                return this.cacheFetch.set(a, null),
                null
        }
    }
    async fetchPage(a, u=!1) {
        if (this.cache.has(a))
            return this.cache.get(a);
        {
            const f = (async()=>{
                const c = await this.fetch(a, u);
                if (!c)
                    return this.cache.set(a, c),
                    null;
                const p = this.Helpers.getProperties(await c.text());
                return this.cache.set(a, p),
                p
            }
            )();
            return this.cache.set(a, f),
            f
        }
    }
    listenPrefetch(a) {
        if (this.cache.has(a.pathname))
            return ()=>{}
            ;
        if ("routerDisablePrefetch"in a.dataset) {
            const u = ()=>{
                this.fetchPage(a.pathname)
            }
            ;
            return a.addEventListener("mouseenter", u, {
                once: !0
            }),
            ()=>{
                a.removeEventListener("mouseenter", u, {
                    once: !0
                })
            }
        } else {
            const u = this.getIntersectionObserver();
            return u.observe(a),
            ()=>{
                u.unobserve(a)
            }
        }
    }
    getIntersectionObserver(a=0) {
        let u;
        return this.cacheIntersectionObserver.has(a) ? u = this.cacheIntersectionObserver.get(a) : (u = new IntersectionObserver(f=>{
            f.forEach(c=>{
                if (c.isIntersecting) {
                    const {target: p} = c;
                    this.fetchPage(p.pathname),
                    u.unobserve(p)
                }
            }
            )
        }
        ,{
            threshold: a
        }),
        this.cacheIntersectionObserver.set(a, u)),
        u
    }
    async beforeFetch() {
        this.pushState(),
        this.running = !0,
        this.emit("NAVIGATE_OUT", {
            from: {
                page: this.From.properties.page,
                view: this.From.properties.view
            },
            trigger: this.trigger,
            direction: this.direction,
            historyCount: this.historyCount,
            prevHistoryCount: this.prevHistoryCount,
            location: this.location
        });
        const a = {
            trigger: this.trigger,
            direction: this.direction,
            historyCount: this.historyCount,
            prevHistoryCount: this.prevHistoryCount,
            contextual: this.Contextual
        }
          , u = await Promise.all([this.fetchPage(this.location.pathname, !0), this.From.hide(a)]);
        this.properties = u[0],
        this.afterFetch()
    }
    async afterFetch() {
        const a = await this.properties.renderer;
        this.To = new a(this.properties),
        this.To.add(),
        this.emit("NAVIGATE_IN", {
            to: {
                page: this.To.properties.page,
                view: this.To.wrap.lastElementChild
            },
            trigger: this.trigger,
            direction: this.direction,
            historyCount: this.historyCount,
            prevHistoryCount: this.prevHistoryCount,
            location: this.location
        }),
        await this.To.show({
            trigger: this.trigger,
            direction: this.direction,
            historyCount: this.historyCount,
            prevHistoryCount: this.prevHistoryCount,
            contextual: this.Contextual
        }),
        this.popping = !1,
        this.running = !1,
        this.detach(),
        this.detach = this.attach(document.querySelectorAll(this.getSelectorLink())),
        this.emit("NAVIGATE_END", {
            to: {
                page: this.To.properties.page,
                view: this.To.wrap.lastElementChild
            },
            from: {
                page: this.From.properties.page,
                view: this.From.properties.view
            },
            trigger: this.trigger,
            direction: this.direction,
            historyCount: this.historyCount,
            prevHistoryCount: this.prevHistoryCount,
            location: this.location
        }),
        this.From = this.To,
        this.trigger = null,
        this.direction = null,
        this.prevHistoryCount = this.historyCount
    }
    getSelectorLink(a=window.location.pathname) {
        return `a[href]:not([href^="#"]):not([href^="${a}#"]):not([target]):not([download]):not([data-router-disabled])`
    }
}
class Transition {
    constructor(a, u) {
        this.wrap = a,
        this.name = u
    }
    show({trigger: a, contextual: u}) {
        const f = this.wrap.lastElementChild
          , c = this.wrap.firstElementChild;
        return new Promise(p=>{
            u ? (f.setAttribute("data-transition-in", u.name),
            f.removeAttribute("data-transition-out", u.name),
            u.in && u.in({
                to: f,
                from: c,
                trigger: a,
                done: p
            })) : (f.setAttribute("data-transition-in", this.name),
            f.removeAttribute("data-transition-out", this.name),
            this.in && this.in({
                to: f,
                from: c,
                trigger: a,
                done: p
            }))
        }
        )
    }
    hide({trigger: a, contextual: u}) {
        const f = this.wrap.firstElementChild;
        return new Promise(c=>{
            u ? (f.setAttribute("data-transition-out", u.name),
            f.removeAttribute("data-transition-in", u.name),
            u.out && u.out({
                from: f,
                trigger: a,
                done: c
            })) : (f.setAttribute("data-transition-out", this.name),
            f.removeAttribute("data-transition-in", this.name),
            this.out && this.out({
                from: f,
                trigger: a,
                done: c
            }))
        }
        )
    }
}
/*!
 * Highway v2.2.1
 * https://highway.js.org/
 * MIT License
 * Copyright (c) 2018 Dogstudio
 */
const Highway = {
    Core,
    Helpers,
    Renderer,
    Transition
}
  , cacheLoadImage = window._GLOBAL_.cacheLoadImage = window._GLOBAL_.cacheLoadImage || {};
function loadImage(h, a=!1) {
    const u = typeof h == "object" && h.constructor.name === "Array"
      , f = [];
    return (u ? h : [h]).forEach(c=>{
        const p = cacheLoadImage[c];
        if (p) {
            f.push(Promise.resolve(p));
            return
        }
        const d = document.createElement("img");
        a && (d.crossOrigin = "anonymous"),
        d.src = c;
        const m = onLoadImage(d);
        m.then(()=>{
            cacheLoadImage[c] = d
        }
        ),
        f.push(m)
    }
    ),
    u ? Promise.all(f) : f[0]
}
function getScrollingElement() {
    return document.scrollingElement || document.documentElement
}
function getScrollBarWidth() {
    return getSafeWindowWidth() - getScrollingElement().offsetWidth
}
function getSafeWindowWidth() {
    return isMobile ? Math.min(window.innerWidth, window.outerWidth) : window.innerWidth
}
function getSafeWindowHeight() {
    return isMobile ? Math.min(window.innerHeight, window.outerHeight) : window.innerHeight
}
function getVariableSize(h) {
    const a = media.isSp ? store.designWidthSp : store.designWidthPc
      , u = media.isSp ? store.designHeightSp : store.designHeightPc
      , f = store.isHorizontalScroll ? getSafeWindowHeight() : getSafeWindowWidth()
      , c = store.isHorizontalScroll ? u : a;
    return h * f / c
}
function getVariableSizeRem(h) {
    return `${h / 16}rem`
}
function getPreloadImagePath(h=document) {
    return [...h.querySelectorAll(`link[rel="preload"][as="image"]${media.isSp ? ":not([data-preload-pc])" : ":not([data-preload-sp])"}`)].map(u=>u.href)
}
const CLASS_NAME_WAIT = "sWait"
  , CLASS_NAME_TRANSITION = "sTransition"
  , listenersLeave = window._GLOBAL_.listenersLeave = window._GLOBAL_.listenersLeave || []
  , listenersLeaveCompleted = window._GLOBAL_.listenersLeaveCompleted = window._GLOBAL_.listenersLeaveCompleted || []
  , listenersEnter = window._GLOBAL_.listenersEnter = window._GLOBAL_.listenersEnter || []
  , listenersEnterReady = window._GLOBAL_.listenersEnterReady = window._GLOBAL_.listenersEnterReady || []
  , listenersEnterShow = window._GLOBAL_.listenersEnterShow = window._GLOBAL_.listenersEnterShow || []
  , listenersEnterCompleted = window._GLOBAL_.listenersEnterCompleted = window._GLOBAL_.listenersEnterCompleted || []
  , listenersLeaveCancelled = window._GLOBAL_.listenersLeaveCancelled = window._GLOBAL_.listenersLeaveCancelled || []
  , listenersEnterCancelled = window._GLOBAL_.listenersEnterCancelled = window._GLOBAL_.listenersEnterCancelled || []
  , state$3 = window._GLOBAL_.pageState = window._GLOBAL_.pageState || {
    highway: null,
    documentTo: null,
    isDisable: !1,
    isEnter: !1,
    stylesRemoveFrom: []
};
function init$2(h) {
    if (state$3.isDisable)
        return;
    window.history.scrollRestoration = "manual";
    const a = state$3.highway = new Highway.Core({
        transitions: h
    });
    store.historyCount = a.historyCount,
    store.prevHistoryCount = a.prevHistoryCount,
    eventBus.emit("initializedAsynchronousTransition"),
    store.isInitializedAsynchronousTransition = !0,
    a.on("NAVIGATE_OUT", ({trigger: u, direction: f, historyCount: c, prevHistoryCount: p})=>{
        if (store.isTransitioning) {
            state$3.isEnter ? emitEnterCancelled() : emitLeaveCancelled(),
            end(),
            window.location.reload();
            return
        }
        store.isTransitioned = !0,
        store.isPopstate = u === "popstate",
        store.popDirection = f,
        store.historyCount = c,
        store.prevHistoryCount = p,
        start(u)
    }
    ),
    a.on("NAVIGATE_IN", ({to: u})=>{
        store.isLeave = !1,
        state$3.isEnter = !0,
        state$3.documentTo = u.page,
        store.view = u.view,
        setPageId(u.page),
        document.body.id = store.pageId,
        emitEnter()
    }
    ),
    a.on("NAVIGATE_END", ({to: u})=>{
        u.page,
        emitEnterCompleted(),
        end()
    }
    ),
    eventBus.on("addCursorWait", addCursorWait),
    eventBus.on("removeCursorWait", removeCursorWait)
}
async function detectInitializedAsynchronousTransition(h) {
    if (!state$3.isDisable)
        return store.isInitializedAsynchronousTransition ? h() : new Promise(a=>{
            eventBus.once("initializedAsynchronousTransition", ()=>{
                a(h())
            }
            )
        }
        )
}
function start(h) {
    store.isTransitioning = !0,
    store.isLoadedStyles = !1,
    store.isLeave = !0,
    addCursorWait(),
    emitLeave(h),
    destroy(),
    document.documentElement.classList.add(CLASS_NAME_TRANSITION)
}
function end() {
    removeCursorWait(),
    requestAnimationFrame(()=>{
        store.isTransitioning = !1,
        state$3.isEnter = !1,
        document.documentElement.classList.remove(CLASS_NAME_TRANSITION)
    }
    )
}
function destroy(h=store.pageId) {
    eventBus.emit("destroy", h)
}
function destroyCompletely(h=store.pageIdPrev) {
    eventBus.emit("destroyCompletely", h)
}
function removePrevStyle() {
    state$3.stylesRemoveFrom.forEach(h=>{
        h && h.remove()
    }
    ),
    state$3.stylesRemoveFrom = []
}
function initAsynchronousTransitionEachPage(h=document) {}
async function attachAllLinks(h=document) {
    return state$3.isDisable ? void 0 : detectInitializedAsynchronousTransition(()=>state$3.highway.attachAll(h))
}
function attachLink(h) {
    if (!state$3.isDisable)
        return state$3.highway.attach(h)
}
function sendGaView(h) {
    GA_ID && typeof gtag < "u" && gtag("config", GA_ID, {
        page_path: window.location.pathname,
        page_title: h,
        page_location: window.location.href
    })
}
function addCursorWait() {
    document.documentElement.classList.add(CLASS_NAME_WAIT)
}
function removeCursorWait() {
    document.documentElement.classList.remove(CLASS_NAME_WAIT)
}
function setScrollPosition() {
    return store.isPopstate ? store.cScroll.scrollToPrevPagePosition() : store.cScroll.scrollToAnchor({
        immediate: !0
    })
}
function manageStyles() {
    const h = document.querySelector("#main-style")
      , a = 'head :is(style, link[rel="stylesheet"], link[rel="preload"]):not([data-no-reload])'
      , u = document.querySelectorAll(a)
      , f = [...u]
      , c = state$3.documentTo.querySelectorAll(a)
      , p = [...c];
    for (let m = 0; m < u.length; m++) {
        const g = u[m];
        for (let v = 0; v < c.length; v++) {
            const _ = c[v];
            if (g.outerHTML === _.outerHTML) {
                f[m] = null,
                p[v] = null;
                break
            }
        }
    }
    state$3.stylesRemoveFrom = f.map((m,g)=>m && u[g]);
    let d = [];
    for (const m of p) {
        if (!m)
            continue;
        const g = document.createElement(m.tagName);
        for (let _ = 0; _ < m.attributes.length; _++) {
            const b = m.attributes[_];
            g.setAttribute(b.nodeName, b.nodeValue)
        }
        m.tagName === "STYLE" && m.innerHTML && (g.innerHTML = m.innerHTML),
        d.push(new Promise(_=>{
            g.onload = ()=>{
                _()
            }
        }
        ));
        const v = m.parentNode.tagName;
        v === "HEAD" && document.head.insertBefore(g, h),
        v === "BODY" && document.body.appendChild(g)
    }
    return Promise.all(d).then(()=>{
        store.isLoadedStyles = !0,
        eventBus.emit("loadedStyles")
    }
    )
}
function manageScripts() {
    const h = document.querySelector("#main-script")
      , a = "head script:not([data-no-reload])"
      , u = [...state$3.documentTo.querySelectorAll(a)]
      , f = [...document.querySelectorAll(a)];
    for (let p = 0; p < f.length; p++) {
        const d = f[p];
        for (let m = 0; m < u.length; m++) {
            const g = u[m];
            if (d.outerHTML === g.outerHTML) {
                const v = document.createElement(d.tagName);
                for (let _ = 0; _ < d.attributes.length; _++) {
                    const b = d.attributes[_];
                    v.setAttribute(b.nodeName, b.nodeValue)
                }
                d.innerHTML && (v.innerHTML = d.innerHTML),
                d.parentNode.replaceChild(v, d),
                f.splice(p, 1),
                u.splice(m, 1);
                break
            }
        }
    }
    for (const p of f)
        p.parentNode.removeChild(p);
    let c = [];
    for (const p of u) {
        const d = document.createElement(p.tagName);
        for (let v = 0; v < p.attributes.length; v++) {
            const _ = p.attributes[v];
            d.setAttribute(_.nodeName, _.nodeValue)
        }
        p.innerHTML && (d.innerHTML = p.innerHTML);
        const m = p.getAttribute("src");
        p.getAttribute("type") === "module" && m && __vitePreload(()=>import(m), []),
        c.push(new Promise(v=>{
            d.onload = ()=>{
                v()
            }
        }
        ));
        const g = p.parentNode.tagName;
        g === "HEAD" && document.head.appendChild(d),
        g === "BODY" && document.body.insertBefore(d, h)
    }
    return Promise.all(c).then(()=>{
        store.isLoadedStyles = !0,
        eventBus.emit("loadedStyles")
    }
    )
}
function getPreloadImagePathToPage() {
    return getPreloadImagePath(state$3.documentTo)
}
function emitLeave(h) {
    eventBus.emit("leave", store.pageId, h),
    listenersLeave.forEach(a=>{
        a(store.pageId)
    }
    )
}
function emitLeaveCompleted() {
    eventBus.emit("leaveCompleted", store.pageId, store.pageIdPrev),
    listenersLeaveCompleted.forEach(h=>{
        h(store.pageId, store.pageIdPrev)
    }
    )
}
function emitEnter() {
    eventBus.emit("enter", store.pageId, store.pageIdPrev),
    listenersEnter.forEach(h=>{
        h(store.pageId, store.pageIdPrev)
    }
    )
}
function emitEnterReady() {
    eventBus.emit("enterReady", store.pageId, store.pageIdPrev),
    listenersEnterReady.forEach(h=>{
        h(store.pageId, store.pageIdPrev)
    }
    )
}
function emitEnterShow() {
    eventBus.emit("enterShow", store.pageId, store.pageIdPrev),
    listenersEnterShow.forEach(h=>{
        h(store.pageId, store.pageIdPrev)
    }
    )
}
function emitEnterCompleted() {
    eventBus.emit("enterCompleted", store.pageId, store.pageIdPrev),
    listenersEnterCompleted.forEach(h=>{
        h(store.pageId, store.pageIdPrev)
    }
    )
}
function emitEnterCancelled() {
    eventBus.emit("enterCancelled", store.pageId),
    listenersEnterCancelled.forEach(h=>{
        h(store.pageId)
    }
    )
}
function emitLeaveCancelled() {
    eventBus.emit("leaveCancelled", store.pageId),
    listenersLeaveCancelled.forEach(h=>{
        h(store.pageId)
    }
    )
}
function onLeave(h) {
    listenersLeave.push(h)
}
function offLeave(h) {
    listenersLeave.some((a,u)=>a === h ? (listenersLeave.splice(u, 1),
    !0) : !1)
}
function onLeaveCompleted(h) {
    listenersLeaveCompleted.push(h)
}
function offLeaveCompleted(h) {
    listenersLeaveCompleted.some((a,u)=>a === h ? (listenersLeaveCompleted.splice(u, 1),
    !0) : !1)
}
function onEnter(h) {
    listenersEnter.push(h)
}
function offEnter(h) {
    listenersEnter.some((a,u)=>a === h ? (listenersEnter.splice(u, 1),
    !0) : !1)
}
function onEnterCompleted(h) {
    listenersEnterCompleted.push(h)
}
function offEnterCompleted(h) {
    listenersEnterCompleted.some((a,u)=>a === h ? (listenersEnterCompleted.splice(u, 1),
    !0) : !1)
}
function onLeaveCancelled(h) {
    listenersLeaveCancelled.push(h)
}
function offLeaveCancelled(h) {
    listenersLeaveCancelled.some((a,u)=>a === h ? (listenersLeaveCancelled.splice(u, 1),
    !0) : !1)
}
function onEnterCancelled(h) {
    listenersEnterCancelled.push(h)
}
function offEnterCancelled(h) {
    listenersEnterCancelled.some((a,u)=>a === h ? (listenersEnterCancelled.splice(u, 1),
    !0) : !1)
}
const asynchronousTransition = Object.freeze(Object.defineProperty({
    __proto__: null,
    attachAllLinks,
    attachLink,
    destroy,
    destroyCompletely,
    detectInitializedAsynchronousTransition,
    emitEnter,
    emitEnterCancelled,
    emitEnterCompleted,
    emitEnterReady,
    emitEnterShow,
    emitLeave,
    emitLeaveCancelled,
    emitLeaveCompleted,
    getPreloadImagePathToPage,
    init: init$2,
    initAsynchronousTransitionEachPage,
    manageScripts,
    manageStyles,
    offEnter,
    offEnterCancelled,
    offEnterCompleted,
    offLeave,
    offLeaveCancelled,
    offLeaveCompleted,
    onEnter,
    onEnterCancelled,
    onEnterCompleted,
    onLeave,
    onLeaveCancelled,
    onLeaveCompleted,
    removePrevStyle,
    sendGaView,
    setScrollPosition
}, Symbol.toStringTag, {
    value: "Module"
}))
  , state$2 = {
    components: [],
    componentsLocal: {},
    componentsPermanent: [],
    elsPermanent: null
};
function addComponents(h, {priority: a=0, isLocal: u=!1}={}) {
    let f;
    u ? (f = state$2.componentsLocal[store.pageId],
    f || (f = state$2.componentsLocal[store.pageId] = [])) : f = state$2.components,
    f[a] || (f[a] = []),
    f[a] = f[a].concat(h)
}
function addComponent(h, {delay: a=0, priority: u=0, isLocal: f=!1}={}) {
    let c;
    f ? (c = state$2.componentsLocal[store.pageId],
    c || (c = state$2.componentsLocal[store.pageId] = [])) : c = state$2.components,
    c[u] || (c[u] = []),
    c[u].push(h),
    a ? setTimeout(()=>{
        initComponent(h)
    }
    , a) : initComponent(h)
}
function initComponents(h=document, a=!1) {
    a ? state$2.components.forEach(u=>{
        u?.forEach(f=>{
            f.createAll(h, {
                isPermanent: a
            })
        }
        )
    }
    ) : (state$2.components.forEach(u=>{
        u?.forEach(f=>{
            f.createAll(h)
        }
        )
    }
    ),
    state$2.componentsLocal[store.pageId]?.forEach(u=>{
        u?.forEach(f=>{
            f.createAll(h)
        }
        )
    }
    ))
}
function initComponent(h, a=!1) {
    a ? state$2.elsPermanent.forEach(u=>{
        h.createAll(u, {
            isPermanent: !0
        })
    }
    ) : (h.createAll(store.view),
    state$2.elsPermanent.forEach(u=>{
        h.createAll(u, {
            isPermanent: !0
        })
    }
    ))
}
function addPermanentComponent(h, {delay: a=0, priority: u=0}={}) {
    state$2.componentsPermanent[u] || (state$2.componentsPermanent[u] = []),
    state$2.componentsPermanent[u].push(h),
    a ? setTimeout(()=>{
        initComponent(h, !0)
    }
    , a) : initComponent(h, !0)
}
function initPermanentComponents() {
    state$2.componentsPermanent.forEach(h=>{
        h?.forEach(a=>{
            a.createAll()
        }
        )
    }
    )
}
function setPermanentRoot(h="[data-permanent]") {
    state$2.elsPermanent = document.querySelectorAll(h)
}
function initComponentsOnMutation(h) {
    let a;
    const u = new MutationObserver(async f=>{
        f.some(({target: c})=>c === h) && (initComponents(h),
        a && a.detach(),
        a = await attachAllLinks(h))
    }
    );
    return u.observe(h, {
        childList: !0
    }),
    {
        destroy: ()=>{
            u.disconnect(),
            a && a.detach()
        }
    }
}
function moveElFixedLocal(h) {
    const a = h.querySelector("[data-fixed-local]");
    if (!a)
        return;
    const u = document.querySelector("[data-fixed-local-container]");
    u.innerHTML = "",
    document.querySelector("[data-fixed-local-container]").appendChild(a)
}
const pageComponents = window._GLOBAL_.pageComponents = window._GLOBAL_.pageComponents || {};
async function initAsynchronousTransition() {
    (await __vitePreload(()=>Promise.resolve().then(()=>asynchronousTransition), void 0)).initAsynchronousTransitionEachPage()
}
function getPageId() {
    return store.pageId
}
function registerPageComponent(h) {
    const a = getPageId();
    a in pageComponents || (pageComponents[a] = h)
}
function initEachPage(h=document, a=!1) {
    initComponents(h),
    moveElFixedLocal(h);
    const u = pageComponents[getPageId()]
      , f = c=>{
        new c,
        eventBus.emit("initPageJs"),
        a && eventBus.emit("loadedStyles")
    }
    ;
    u ? f(u) : eventBus.once("readyPage", ()=>{
        f(pageComponents[getPageId()])
    }
    )
}
function setPageId(h=document) {
    store.pageIdPrev = sessionStorage.getItem("pageId");
    const a = store.pageId = h.body.id;
    sessionStorage.setItem("pageId", a)
}
isMobile && document.documentElement.classList.add("bMobile");
isAndroid && document.documentElement.classList.add("bAndroid");
const listenersMousedown = window._GLOBAL_.listenersMousedown = window._GLOBAL_.listenersMousedown || []
  , listenersMousemove = window._GLOBAL_.listenersMousemove = window._GLOBAL_.listenersMousemove || []
  , listenersMouseup = window._GLOBAL_.listenersMouseup = window._GLOBAL_.listenersMouseup || [];
function onMousedown(h) {
    listenersMousedown.push(h)
}
function offMousedown(h) {
    listenersMousedown.some((a,u)=>a === h ? (listenersMousedown.splice(u, 1),
    !0) : !1)
}
function onMousemove(h) {
    listenersMousemove.push(h)
}
function offMousemove(h) {
    listenersMousemove.some((a,u)=>a === h ? (listenersMousemove.splice(u, 1),
    !0) : !1)
}
function onMouseup(h) {
    listenersMouseup.push(h)
}
function offMouseup(h) {
    listenersMouseup.some((a,u)=>a === h ? (listenersMouseup.splice(u, 1),
    !0) : !1)
}
function isTouch() {
    return whatInput.ask("intent") === "touch"
}
function addMouseenterListener(h, a) {
    const u = f=>{
        isTouch() || a(f)
    }
    ;
    return h.addEventListener("mouseenter", u, passive),
    u
}
function addMousemoveListener(h, a) {
    const u = f=>{
        isTouch() || a(f)
    }
    ;
    return h.addEventListener("mousemove", u, passive),
    u
}
function addMouseleaveListener(h, a) {
    const u = f=>{
        isTouch() || a(f)
    }
    ;
    return h.addEventListener("mouseleave", u, passive),
    u
}
function removeMouseenterListener(h, a) {
    h.removeEventListener("mouseenter", a, passive)
}
function removeMousemoveListener(h, a) {
    h.removeEventListener("mousemove", a, passive)
}
function removeMouseleaveListener(h, a) {
    h.removeEventListener("mouseleave", a, passive)
}
const listenersLoadProgress = window._GLOBAL_.listenersLoadProgress = window._GLOBAL_.listenersLoadProgress || []
  , listenersLoadDone = window._GLOBAL_.listenersLoadDone = window._GLOBAL_.listenersLoadDone || [];
async function init$1() {
    onLoad(()=>{
        store.isLoadDone = !0,
        listenersLoadDone.forEach(h=>{
            h()
        }
        )
    }
    )
}
function onLoadProgress(h) {
    listenersLoadProgress.push(h)
}
function offLoadProgress(h) {
    listenersLoadProgress.some((a,u)=>a === h ? (listenersLoadProgress.splice(u, 1),
    !0) : !1)
}
function onLoadDone(h) {
    listenersLoadDone.push(h)
}
function offLoadDone(h) {
    listenersLoadDone.some((a,u)=>a === h ? (listenersLoadDone.splice(u, 1),
    !0) : !1)
}
const load = Object.freeze(Object.defineProperty({
    __proto__: null,
    init: init$1,
    offLoadDone,
    offLoadProgress,
    onLoadDone,
    onLoadProgress
}, Symbol.toStringTag, {
    value: "Module"
}));
function getUniqueId(h="") {
    return window._GLOBAL_.uniqueId = window._GLOBAL_.uniqueId > 0 ? window._GLOBAL_.uniqueId : 0,
    h + String(window._GLOBAL_.uniqueId++)
}
function pad(h, a) {
    return String(h).padStart(a, "0")
}
function pad2(h) {
    return pad(h, 2)
}
function camelCase(h) {
    return h.toLowerCase().replace(/[-_ ](.)/g, (a,u)=>u.toUpperCase())
}
function kebabCase(h) {
    return camelCase(h).replace(/[A-Z]/g, function(u) {
        return "-" + u.charAt(0).toLowerCase()
    })
}
class Component {
    refs = {};
    isPlayTick = !1;
    isDestroyed = !1;
    listeners = {};
    _intersectionObservers = [];
    constructor(a={}) {
        const {componentName: u} = this.constructor;
        let {selectorRoot: f} = this.constructor;
        const {el: c, context: p=document, isAutoPlayTick: d=this.constructor.isAutoPlayTick || !1, isDisableAutoPlayScroll: m=this.constructor.isDisableAutoPlayScroll || !1, isDisableAutoResize: g=this.constructor.isDisableAutoResize || !1, isPermanent: v=this.constructor.isPermanent || !1, cacheValue: _=this.constructor.componentName || this.constructor.selectorRoot || this.constructor.name} = a;
        this.isDisableAutoPlayScroll = m,
        this.isDisableAutoResize = g,
        this.isAutoPlayTick = d,
        this.isPermanent = v,
        this.cacheValue = _,
        this.option = a,
        c ? this.el = c : (!f && u && (f = `.${u}, [data-el="${u}"]`),
        this.el = p.querySelector(f));
        const b = this.el?.classList.value?.match(/astro-\w+/g)?.slice(-1)[0];
        if (u || b) {
            const P = u && `${u}-`;
            this.el.querySelectorAll(`${b ? `.${b}[data-ref], ` : ""}[data-ref][class*="${P}"], [data-ref^="${P}"]`).forEach(J=>{
                let x = J.dataset.ref || [...J.classList].find(pe=>pe.startsWith(P)) || J.classList[0];
                x = x.replace(P, "");
                const w = this.refs[x];
                w ? Array.isArray(w) ? w.push(J) : w && (this.refs[x] = [w, J]) : this.refs[x] = J
            }
            )
        }
        if (this.onMount && this.onMount(),
        this.onResizeFirst && (this.onResizeFirst = this.onResizeFirst.bind(this),
        eventBus.on("resizeFirst", this.onResizeFirst)),
        this.onResetSize && (this.onResetSize = this.onResetSize.bind(this),
        onResetSize(this.onResetSize, !0)),
        this.onResizeNative && (this.onResizeNative = this.onResizeNative.bind(this),
        onResize(this.onResizeNative, !0)),
        this.onResizeAlways && (this.onResizeAlways = this.onResizeAlways.bind(this),
        onResizeAlways(this.onResizeAlways, !0)),
        this.onOrientationchange && (this.onOrientationchange = this.onOrientationchange.bind(this),
        onOrientationchange(this.onOrientationchange, !0)),
        this.onTick && (this.onTick = this.onTick.bind(this),
        this.isAutoPlayTick && requestAnimationFrame(()=>{
            this.playTick()
        }
        )),
        this.el) {
            const P = store.componentCache.get(this.el);
            P ? P.push(_) : store.componentCache.set(this.el, [_]),
            this.onClick && (this.onClick = this.onClick.bind(this),
            this.el.addEventListener("click", this.onClick)),
            this.onMouseenter && (this.onMouseenter = addMouseenterListener(this.el, this.onMouseenter.bind(this))),
            this.onMousemove && (this.onMousemove = addMousemoveListener(this.el, this.onMousemove.bind(this))),
            this.onMouseleave && (this.onMouseleave = addMouseleaveListener(this.el, this.onMouseleave.bind(this)))
        }
        this.onMousedownDocument && (this.onMousedownDocument = this.onMousedownDocument.bind(this),
        onMousedown(this.onMousedownDocument)),
        this.onMousemoveDocument && (this.onMousemoveDocument = this.onMousemoveDocument.bind(this),
        onMousemove(this.onMousemoveDocument)),
        this.onMouseupDocument && (this.onMouseupDocument = this.onMouseupDocument.bind(this),
        onMouseup(this.onMouseupDocument)),
        this.onBeforeResetModalStyle && (this.onBeforeResetModalStyle = this.onBeforeResetModalStyle.bind(this),
        eventBus.on("beforeResetModalStyle", this.onBeforeResetModalStyle)),
        this.onOpenModal && (this.onOpenModal = this.onOpenModal.bind(this),
        eventBus.on("openModal", this.onOpenModal)),
        this.onStartOpenModal && (this.onStartOpenModal = this.onStartOpenModal.bind(this),
        eventBus.on("startOpenModal", this.onStartOpenModal)),
        this.onCompleteOpenModal && (this.onCompleteOpenModal = this.onCompleteOpenModal.bind(this),
        eventBus.on("completeOpenModal", this.onCompleteOpenModal)),
        this.onCloseModal && (this.onCloseModal = this.onCloseModal.bind(this),
        eventBus.on("closeModal", this.onCloseModal)),
        this.onStartCloseModal && (this.onStartCloseModal = this.onStartCloseModal.bind(this),
        eventBus.on("startCloseModal", this.onStartCloseModal)),
        this.onCompleteCloseModal && (this.onCompleteCloseModal = this.onCompleteCloseModal.bind(this),
        eventBus.on("completeCloseModal", this.onCompleteCloseModal)),
        this.onLeave && (this.onLeave = this.onLeave.bind(this),
        eventBus.on("leave", this.onLeave)),
        this.onLeaveCompleted && (this.onLeaveCompleted = this.onLeaveCompleted.bind(this),
        eventBus.on("leaveCompleted", this.onLeaveCompleted)),
        this.onEnter && (this.onEnter = this.onEnter.bind(this),
        eventBus.on("enter", this.onEnter)),
        this.onEnterReady && (this.onEnterReady = this.onEnterReady.bind(this),
        eventBus.on("enterReady", this.onEnterReady)),
        this.onEnterShow && (this.onEnterShow = this.onEnterShow.bind(this),
        eventBus.on("enterShow", this.onEnterShow)),
        this.onEnterCompleted && (this.onEnterCompleted = this.onEnterCompleted.bind(this),
        eventBus.on("enterCompleted", this.onEnterCompleted)),
        this.onLeaveCancelled && (this.onLeaveCancelled = this.onLeaveCancelled.bind(this),
        eventBus.on("leaveCancelled", this.onLeaveCancelled)),
        this.onEnterCancelled && (this.onEnterCancelled = this.onEnterCancelled.bind(this),
        eventBus.on("enterCancelled", this.onEnterCancelled)),
        this.onLoadDone && (this.onLoadDone = this.onLoadDone.bind(this),
        onLoadDone(this.onLoadDone)),
        store.cScroll ? this.initScroll() : eventBus.once("initPageJs", ()=>{
            this.initScroll()
        }
        ),
        this._onInit = ()=>{
            this.onIntersect && this.el && (this.onIntersect = this.onIntersect.bind(this),
            this.addIntersectionObserver({
                el: this.el,
                callback: this.onIntersect,
                param: this.option.intersectOptions || this.constructor.intersectOptions,
                once: this.option.intersectOnce || this.constructor.intersectOnce
            })),
            this.onInit && this.onInit()
        }
        ,
        this.isPermanent || (this._destroy = P=>{
            this._pageId === P && this.destroySelf()
        }
        ,
        eventBus.on("destroy", this._destroy),
        this._destroyCompletely = P=>{
            this._pageId === P && this.destroyCompletely()
        }
        ,
        eventBus.on("destroyCompletely", this._destroyCompletely))
    }
    initScroll() {
        if (this.onScrollNative && (this._onScrollNative = ()=>{
            this.onScrollNative(window.scrollY)
        }
        ,
        window.addEventListener("scroll", this._onScrollNative, passive)),
        this.onScrollThrottle && (this.onScrollThrottle = this.onScrollThrottle.bind(this),
        onScroll(this.onScrollThrottle)),
        this.onScroll && (this.onScroll = this.onScroll.bind(this),
        this.isDisableAutoPlayScroll || requestAnimationFrame(()=>{
            this.playScroll()
        }
        )),
        this.onResize && (this.onResize = this.onResize.bind(this),
        store.cScroll.onResizeSelf(this.onResize)),
        this.onView && (this._onView = (...a)=>{
            this.isDestroyed || store.isOpenModal || this.onView(...a)
        }
        ,
        store.cScroll.addView(this._onView)),
        this.onViewSelf) {
            "view"in this.el.dataset || (this.el.dataset.view = getUniqueId("onViewSelf-"));
            const a = this.el.dataset.view;
            this._onViewSelf = (u,f)=>{
                this.isDestroyed || store.isOpenModal || u !== a || (this.isEnter = f,
                this.onViewSelf(f))
            }
            ,
            store.cScroll.setViewSelf(this.el),
            store.cScroll.addView(this._onViewSelf, this.el)
        }
        if (this.onViewSelfOnce) {
            "view"in this.el.dataset || (this.el.dataset.view = getUniqueId("onViewSelf-")),
            "viewThreshold"in this.el.dataset || (this.el.dataset.viewThreshold = this.el.offsetHeight > window.innerHeight * .4 ? .4 : Math.min(window.innerHeight / this.el.offsetHeight, 1));
            const a = this.el.dataset.view;
            this._onViewSelfOnce = (u,f)=>{
                this.isDestroyed || store.isOpenModal || u !== a || !f || (this.isEnter = f,
                this.onViewSelfOnce(),
                store.cScroll.removeView(this._onViewSelfOnce))
            }
            ,
            store.cScroll.setViewSelf(this.el),
            store.cScroll.addView(this._onViewSelfOnce, this.el)
        }
    }
    get isPc() {
        return !media.isSp
    }
    get isSp() {
        return media.isSp
    }
    get isTb() {
        return media.isTb
    }
    get isTbPortrait() {
        return media.isTbPortrait
    }
    get scrollY() {
        return store.scrollY
    }
    get scrollYSmooth() {
        return store.scrollYSmooth
    }
    get scrollYNative() {
        return store.scrollYNative
    }
    emit(...a) {
        eventBus.emit(...a)
    }
    on(a, u) {
        this.listeners[a] = u,
        eventBus.on(a, u)
    }
    once(a, u) {
        this.listeners[a] = u,
        eventBus.once(a, u)
    }
    off(a, u) {
        eventBus.off(a, u)
    }
    emitResize() {
        this.onResetSize(!0),
        this.onResizeNative(!0),
        this.onResizeAlways(!0)
    }
    emitResizeAll() {
        emitResize(!0)
    }
    emitSelfResize() {
        this.onResize && this.onResize(getwindowSize())
    }
    addIntersectionObserver({el: a, callback: u, param: f, once: c}) {
        const p = store.cIntersecting.add({
            el: a,
            callback: d=>{
                u(d, store.scrollDirection)
            }
            ,
            param: f,
            once: c
        });
        return p && this._intersectionObservers.push(p),
        p
    }
    playTick() {
        this.isPlayTick || this.isDestroyed || (this.isPlayTick = !0,
        gsapWithCSS.ticker.add(this.onTick))
    }
    pauseTick() {
        this.isPlayTick && (this.isPlayTick = !1,
        gsapWithCSS.ticker.remove(this.onTick))
    }
    playScroll() {
        this.isPlayScroll || this.isDestroyed || (this.isPlayScroll = !0,
        store.cScroll.onAnimateScroll(this.onScroll))
    }
    pauseScroll() {
        this.isPlayScroll && (this.isPlayScroll = !1,
        store.cScroll.offAnimateScroll(this.onScroll))
    }
    scrollTo(...a) {
        store.cScroll.scrollTo(...a)
    }
    get isSmoothScroll() {
        return store.cScroll.isSmooth
    }
    initComponentsOnMutation(a=this.el) {
        this._initComponentsOnMutation = initComponentsOnMutation(a)
    }
    destroySelf() {
        this._onDestroy(),
        eventBus.off("destroy", this._destroy),
        this._destroy = null
    }
    _onDestroy() {
        this.isDestroyed = !0,
        this.onResizeFirst && (eventBus.off("resizeFirst", this.onResizeFirst),
        this.onResizeFirst = null),
        this.onResetSize && (offResetSize(this.onResetSize),
        this.onResetSize = null),
        this.onResizeNative && (offResize(this.onResizeNative),
        this.onResizeNative = null),
        this.onResizeAlways && (offResizeAlways(this.onResizeAlways),
        this.onResizeAlways = null),
        this.onOrientationchange && (offOrientationchange(this.onOrientationchange),
        this.onOrientationchange = null),
        this.onTick && (this.pauseTick(),
        this.onTick = null),
        this.el && (store.componentCache.set(this.el, store.componentCache.get(this.el).filter(a=>a !== this.cacheValue)),
        this.onClick && this.el.removeEventListener("click", this.onClick),
        this.onMouseenter && (removeMouseenterListener(this.el, this.onMouseenter),
        this.onMouseenter = null),
        this.onMousemove && (removeMousemoveListener(this.el, this.onMousemove),
        this.onMousemove = null),
        this.onMouseleave && (removeMouseleaveListener(this.el, this.onMouseleave),
        this.onMouseleave = null)),
        this.onMousedownDocument && (offMousedown(this.onMousedownDocument),
        this.onMousedownDocument = null),
        this.onMousemoveDocument && (offMousemove(this.onMousemoveDocument),
        this.onMousemoveDocument = null),
        this.onMouseupDocument && (offMouseup(this.onMouseupDocument),
        this.onMouseupDocument = null),
        this.onBeforeResetModalStyle && (eventBus.off("beforeResetModalStyle", this.onBeforeResetModalStyle),
        this.onBeforeResetModalStyle = null),
        this.onOpenModal && (eventBus.off("openModal", this.onOpenModal),
        this.onOpenModal = null),
        this.onStartOpenModal && (eventBus.off("startOpenModal", this.onStartOpenModal),
        this.onStartOpenModal = null),
        this.onCompleteOpenModal && (eventBus.off("completeOpenModal", this.onCompleteOpenModal),
        this.onCompleteOpenModal = null),
        this.onCloseModal && (eventBus.off("closeModal", this.onCloseModal),
        this.onCloseModal = null),
        this.onStartCloseModal && (eventBus.off("startCloseModal", this.onStartCloseModal),
        this.onStartCloseModal = null),
        this.onCompleteCloseModal && (eventBus.off("completeCloseModal", this.onCompleteCloseModal),
        this.onCompleteCloseModal = null),
        this.onLeave && (eventBus.off("leave", this.onLeave),
        this.onLeave = null),
        this.onLeaveCompleted && (eventBus.off("leaveCompleted", this.onLeaveCompleted),
        this.onLeaveCompleted = null),
        this.onEnter && (eventBus.off("enter", this.onEnter),
        this.onEnter = null),
        this.onEnterReady && (eventBus.off("enterReady", this.onEnterReady),
        this.onEnterReady = null),
        this.onEnterShow && (eventBus.off("enterShow", this.onEnterShow),
        this.onEnterShow = null),
        this.onEnterCompleted && (eventBus.off("enterCompleted", this.onEnterCompleted),
        this.onEnterCompleted = null),
        this.onLeaveCancelled && (eventBus.off("leaveCancelled", this.onLeaveCancelled),
        this.onLeaveCancelled = null),
        this.onEnterCancelled && (eventBus.off("enterCancelled", this.onEnterCancelled),
        this.onEnterCancelled = null),
        this._onScrollNative && (window.removeEventListener("scroll", this._onScrollNative, passive),
        this._onScrollNative = null),
        this.onScrollThrottle && (offScroll(this.onScrollThrottle),
        this.onScrollThrottle = null),
        this.onScroll && (this.pauseScroll(),
        this.onScroll = null),
        this.onResize && (store.cScroll.offResizeSelf(this.onResize),
        this.onResize = null),
        this._onView && (store.cScroll.removeView(this._onView),
        this._onView = null),
        this._onViewSelf && (store.cScroll.removeView(this._onViewSelf),
        this._onViewSelf = null),
        this._onViewSelfOnce && (store.cScroll.removeView(this._onViewSelfOnce),
        this._onViewSelfOnce = null),
        this._intersectionObservers.forEach(a=>{
            a.destroy()
        }
        ),
        this._intersectionObservers = [],
        this.onIntersect && (this.onIntersect = null),
        this._initComponentsOnMutation && (this._initComponentsOnMutation.destroy(),
        this._initComponentsOnMutation = null),
        Object.keys(this.listeners).forEach(a=>{
            eventBus.off(a, this.listeners[a])
        }
        )
    }
    destroyCompletely() {
        this.onDestroy && (this.onDestroy(),
        this.onDestroy = null),
        eventBus.off("destroyCompletely", this._destroyCompletely),
        this._destroyCompletely = null,
        this.el = null
    }
    destroy() {
        this.destroySelf(),
        this.destroyCompletely()
    }
    static create(a, u={}) {
        const f = this.componentName || this.selectorRoot || this.name;
        if (store.componentCache.get(a)?.some(p=>p === f))
            return;
        u.cacheValue = f;
        const c = new this({
            el: a,
            ...u
        });
        if (c._pageId = store.pageId,
        !c.isManual) {
            const p = ()=>{
                c._onInit()
            }
            ;
            store.isTransitioned && !store.isLoadedStyles ? eventBus.once("loadedStyles", p) : p()
        }
        return c
    }
    static createAll(a=document, u={}) {
        !this.selectorRoot && this.componentName && (this.selectorRoot = `.${this.componentName}, [data-el="${this.componentName}"]`);
        const {selector: f=this.selectorRoot} = u;
        return Array.prototype.map.call(a.querySelectorAll(f), c=>this.create(c, u))
    }
    static register({delay: a, priority: u, isLocal: f}={}) {
        this.isPermanent ? addPermanentComponent(this, {
            delay: a,
            priority: u
        }) : f ? addComponent(this, {
            delay: a,
            priority: u,
            isLocal: f
        }) : addComponent(this, {
            delay: a,
            priority: u
        })
    }
}
const invalidation = h=>{
    h.preventDefault()
}
  , eventOpts = {
    passive: !1
};
function preventScroll() {
    window.addEventListener("touchmove", invalidation, eventOpts),
    window.addEventListener("wheel", invalidation, eventOpts)
}
function allowScroll() {
    window.removeEventListener("touchmove", invalidation, eventOpts),
    window.removeEventListener("wheel", invalidation, eventOpts)
}
const state$1 = {
    modalOpened: null,
    targetFixedFull: null,
    scrollY: 0,
    overflowY: "",
    height: ""
};
eventBus.on("openModal", open);
eventBus.on("closeModal", close);
function open(h) {
    store.isOpenModal = !0,
    state$1.id = h,
    eventBus.emit("beforeSetModalStyle", state$1.id),
    state$1.modalOpened = store.modals[state$1.id],
    setStyleModal(),
    eventBus.emit("startOpenModal", state$1.id),
    state$1.modalOpened.open(()=>{
        eventBus.emit("completeOpenModal", state$1.id)
    }
    )
}
function close(h, a=!1) {
    state$1.modalOpened && (eventBus.emit("beforeResetModalStyle", state$1.id),
    resetStyleModal(),
    store.isOpenModal = !1,
    eventBus.emit("startCloseModal", state$1.id),
    state$1.modalOpened.close(()=>{
        state$1.modalOpened = null,
        eventBus.emit("completeCloseModal", state$1.id)
    }
    , a))
}
function setStyleModal() {
    if (state$1.modalOpened && state$1.modalOpened.el.scrollTo(0, 0),
    state$1.targetFixedFull = document.querySelectorAll("body, [data-fixed], .tp-dfwv"),
    state$1.padding = getScrollBarWidth(),
    state$1.padding) {
        const a = `${state$1.padding}px`;
        state$1.targetFixedFull.forEach(u=>{
            u.style.paddingRight = a
        }
        )
    }
    state$1.scrollY = window.pageYOffset,
    state$1.height = document.body.style.height,
    state$1.overflowY = document.documentElement.style.overflowY,
    document.documentElement.style.overflowY = "hidden";
    const {style: h} = document.body;
    h.position = "fixed",
    h.top = `-${state$1.scrollY}px`,
    h.width = "100%",
    h.height = "100%"
}
function resetStyleModal() {
    document.documentElement.style.overflowY = state$1.overflowY;
    const {style: h} = document.body;
    h.position = "",
    h.top = "",
    h.width = "",
    h.height = state$1.height,
    window.scrollTo(0, state$1.scrollY),
    state$1.padding && state$1.targetFixedFull.forEach(a=>{
        a.style.paddingRight = ""
    }
    )
}
const DEFAULT_OPTION = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: [0]
}
  , DEFAULT_SELECTOR = "[data-view]";
class MinimizeIntersecting {
    options;
    targetSelector;
    defaultOption;
    observerSets = [];
    id = 0;
    constructor(a={}) {
        this.options = a,
        this.targetSelector = a.targetSelector || DEFAULT_SELECTOR,
        this.defaultOption = a.defaultOption || DEFAULT_OPTION
    }
    add({el: a, callback: u, param: f={}, once: c=!1}) {
        const p = this.getData({
            el: a,
            callback: u,
            param: f,
            once: c
        });
        if (p)
            return this.setObserve(p),
            {
                destroy: ()=>{
                    this.remove(p)
                }
            }
    }
    remove(a) {
        if (!a)
            return;
        const {observerSet: {observer: u, listeners: f}, el: c} = a;
        u?.unobserve(c),
        f.splice(f.indexOf(a), 1)
    }
    setObserve(a) {
        const {root: u, rootMargin: f, threshold: c} = a.param;
        for (let g = 0; g < this.observerSets.length; g = g + 1 | 0) {
            const v = this.observerSets[g]
              , {param: _} = v;
            if (u === _.root && f === _.rootMargin && c.every((b,P)=>b === _.threshold[P])) {
                const {observer: b, listeners: P} = v;
                b.observe(a.el),
                a.observerSet = v,
                P.push(a);
                return
            }
        }
        const p = [a]
          , d = new IntersectionObserver((g,v)=>{
            this.checkView(g, v, p)
        }
        ,a.param);
        d.observe(a.el);
        const m = {
            observer: d,
            param: a.param,
            listeners: p
        };
        a.observerSet = m,
        this.observerSets.push(m)
    }
    checkView(a, u, f) {
        for (let c = 0; c < a.length; c = c + 1 | 0) {
            const p = a[c];
            for (let d = 0; d < f.length; d = d + 1 | 0) {
                const m = f[d];
                m.el === p.target && (m.callback(p),
                m.once && p.isIntersecting && (u.unobserve(m.el),
                f.splice(f.indexOf(m), 1)))
            }
        }
    }
    getData({el: a, callback: u, param: f, once: c}) {
        if (a) {
            if (typeof a == "string") {
                const p = a;
                if (a = document.querySelector(p),
                !a) {
                    console.error(`No matching element found for the given selector "${p}".`);
                    return
                }
            }
            return {
                el: a,
                name: "view" + this.id++,
                param: {
                    root: a.dataset.viewRoot && document.querySelector(a.dataset.viewRoot) || f.root || this.defaultOption.root,
                    rootMargin: a.dataset.viewMargin || f.rootMargin || this.defaultOption.rootMargin,
                    threshold: a.dataset.viewThreshold ? a.dataset.viewThreshold.split(",").map(p=>Number(p)) : Array.isArray(f.threshold) ? f.threshold : f.threshold ? [f.threshold] : this.defaultOption.threshold
                },
                once: "viewOnce"in a.dataset || c,
                callback: u
            }
        }
    }
}
function init({Scroll: h, permanentComponents: a=[], components: u=[], transitions: f, onDoneInit: c}) {
    setScrollBarWidthCustomProperty(),
    init$4({
        transitions: f
    }),
    setPageId();
    const p = store.view = document.querySelector("[data-router-view]");
    store.pageId !== "pTop" && (document.body.classList.remove("-loading"),
    p?.classList.add("-show")),
    store.cIntersecting = new MinimizeIntersecting({
        defaultOption: {
            root: null,
            rootMargin: "0% 0% 0% 0%",
            threshold: [0]
        }
    });
    const d = document.querySelector("[data-100vh]");
    g();
    function m() {
        setPermanentRoot(),
        u.length > 0 && addComponents(u),
        store.cScroll = h.create(document.body),
        initPermanentComponents(),
        a.forEach(v=>{
            new v
        }
        ),
        initEachPage(p, !0),
        initAsynchronousTransition(),
        store.cScroll?.fireViewSelf && store.cScroll?.fireViewSelf(),
        c && c(),
        store.cScroll.onResizeSelf(()=>{
            setScrollBarWidthCustomProperty(),
            emitResize(!0)
        }
        ),
        store.cScroll.onceResizeSelf(()=>{
            store.cScroll.update(),
            eventBus.emit("resizeFirst")
        }
        ),
        onLoad(()=>{
            emitResize(!0),
            store.cScroll.setResizeObserver(),
            eventBus.emit("loaded")
        }
        ),
        isSpMatch(()=>{
            location.reload()
        }
        , ()=>{
            location.reload()
        }
        )
    }
    function g() {
        !d || d && d.clientHeight > 0 ? m() : requestAnimationFrame(()=>{
            g()
        }
        )
    }
}
function setScrollBarWidthCustomProperty() {
    document.documentElement.style.setProperty("--scroll-bar-width", getScrollBarWidth() + "px")
}
const _builtInKeys = ["autoCSS", "callbackScope", "delay", "duration", "ease", "immediateRender", "lazy", "onComplete", "onCompleteParams", "onCompleteScope", "onStart", "onStartParams", "onStartScope", "onOverwrite", "onRepeat", "onRepeatParams", "onRepeatScope", "onReverseComplete", "onReverseCompleteParams", "onReverseCompleteScope", "onUpdate", "onUpdateParams", "onUpdateScope", "overwrite", "paused", "repeat", "repeatDelay", "startAt", "useFrames", "yoyo", "yoyoEase", "clearProps"];
function _getVarsKill(h) {
    const a = {};
    return Object.keys(h).forEach(u=>{
        _builtInKeys.some(f=>u === f) || (a[u] = !0)
    }
    ),
    a
}
function _killTweensOf(h, a) {
    const u = _getVarsKill(a);
    return gsap.killTweensOf(h, u),
    u
}
const _cacheTimeline = window._GLOBAL_.cacheTimeline = window._GLOBAL_.cacheTimeline || {}
  , gsapK = {
    to(h, a) {
        return !h || h.length === 0 ? Promise.resolve() : Array.isArray(a) ? Promise.all(a.map(u=>(_killTweensOf(h, u),
        gsap.to(h, u)))) : (_killTweensOf(h, a),
        gsap.to(h, a))
    },
    from(h, a) {
        return !h || h.length === 0 ? Promise.resolve() : Array.isArray(a) ? Promise.all(a.map(u=>(_killTweensOf(h, u),
        gsap.from(h, u)))) : (_killTweensOf(h, a),
        gsap.from(h, a))
    },
    fromTo(h, a, u) {
        return !h || h.length === 0 ? Promise.resolve() : Array.isArray(a) ? Promise.all(a.map(([f,c])=>(_killTweensOf(h, c),
        gsap.fromTo(h, f, c)))) : (_killTweensOf(h, u),
        gsap.fromTo(h, a, u))
    },
    set(h, a) {
        return !h || h.length === 0 ? Promise.resolve() : (_killTweensOf(h, a),
        gsap.set(h, a))
    },
    timeline(h, a) {
        return a && _cacheTimeline[a] && _cacheTimeline[a].pause().kill(),
        _cacheTimeline[a] = gsap.timeline(h)
    },
    scrub(h, a) {
        return !h || h.length === 0 ? Promise.resolve() : (a.duration || (a.duration = .05),
        a.ease || (a.ease = "expo.out"),
        "overwrite"in a || (a.overwrite = !0),
        gsap.to(h, a))
    },
    scrubCss(h, a) {
        return !h || h.length === 0 ? Promise.resolve() : (a.duration || (a.duration = .05),
        a.ease || (a.ease = "expo.out"),
        "overwrite"in a || (a.overwrite = !0),
        h.style.transitionProperty || (a.transitionProperty = Object.keys(_getVarsKill(a)).map(u=>kebabCase(u)).join(","),
        a.transitionDuration = `${a.duration}s`,
        a.transitionTimingFunction = "cubic-bezier(0.16, 1, 0.3, 1)"),
        gsap.set(h, a))
    },
    resetScrub(h, a) {
        if (!h || h.length === 0)
            return Promise.resolve();
        const u = _getVarsKill(a);
        return a.clearProps = Object.keys(u).join(","),
        "overwrite"in a || (a.overwrite = !0),
        gsap.set(h, a)
    }
};
function wait(h) {
    return new Promise(a=>{
        setTimeout(a, h * 1e3)
    }
    )
}
const DURATION_MOVE_HIDE = 1.6
  , DURATION_MOVE_HIDE_SP = 1.1
  , DURATION_MOVE_SHOW = 1.2
  , DURATION_MOVE_SHOW_SP = .8
  , EASE_MOVE_HIDE = "page"
  , EASE_MOVE_SHOW = "power4.out"
  , MOVE_HIDE = 40
  , MOVE_HIDE_SP = 50
  , MOVE_SHOW = 100
  , MOVE_SHOW_POP_BACK = 20
  , MOVE_SHOW_POP_BACK_SP = 30
  , SCALE_HIDE = .7
  , SCALE_HIDE_SP = .85
  , SCALE_HIDE_POP_BACK = .8
  , SCALE_HIDE_POP_BACK_SP = .9
  , DURATION_FADE_HIDE = DURATION_MOVE_HIDE * .9
  , DURATION_FADE_HIDE_SP = DURATION_MOVE_HIDE_SP * .9
  , DURATION_FADE_HIDE_SHADOW = DURATION_MOVE_SHOW * .9
  , DURATION_FADE_HIDE_SP_SHADOW = DURATION_MOVE_SHOW_SP * .9
  , EASE_FADE_HIDE = "power4.in"
  , EASE_FADE_HIDE_SHADOW = "page"
  , DELAY_SHOW = .1
  , DURATION_RATE_POP_BACK = .7
  , state = {
    isPullAddressBar: !1
}
  , elPageShadow = document.querySelector('[data-ref="pageShadow"]');
let isPopBack = !1;
class TransitionDefault extends Highway.Transition {
    async out({from: a, done: u}) {
        if (isMobile)
            a.classList.add("-show", "-out", "-immediate"),
            destroyCompletely();
        else {
            isPopBack = store.popDirection === "back",
            gsap.set(a.parentElement, {
                height: a.offsetHeight
            }),
            a.style.setProperty("--view-y", `${-store.scrollY}px`);
            const f = ["-show", "-out"];
            isPopBack && f.push("-back"),
            a.classList.remove("-in", "-back"),
            a.classList.add(...f),
            gsapK.to(a, [{
                opacity: isPopBack ? 1 : 0,
                duration: media.isSp ? DURATION_FADE_HIDE_SP : DURATION_FADE_HIDE,
                ease: EASE_FADE_HIDE
            }, {
                scale: isPopBack ? 1 : media.isSp ? SCALE_HIDE_SP : SCALE_HIDE,
                xPercent: -(isPopBack ? MOVE_SHOW : media.isSp ? MOVE_HIDE_SP : MOVE_HIDE) * (isPopBack ? -1 : 1),
                duration: isPopBack ? (media.isSp,
                DURATION_MOVE_SHOW * DURATION_RATE_POP_BACK) : media.isSp ? DURATION_MOVE_HIDE_SP : DURATION_MOVE_HIDE,
                ease: EASE_MOVE_HIDE
            }]).then(()=>{
                destroyCompletely()
            }
            ),
            isPopBack ? gsapK.set(elPageShadow, {
                opacity: 1
            }) : gsapK.to(elPageShadow, {
                opacity: 1,
                duration: media.isSp ? DURATION_FADE_HIDE_SP_SHADOW : DURATION_FADE_HIDE_SHADOW,
                ease: EASE_FADE_HIDE_SHADOW
            })
        }
        state.isPullAddressBar = isMobile && !store.isOpenModal && window.innerHeight > store.windowHeightInitial,
        state.isPullAddressBar ? (setStyleModal(),
        requestAnimationFrame(u)) : u()
    }
    in({from: a, to: u, done: f}) {
        isMobile || gsap.set(u, {
            xPercent: (isPopBack ? media.isSp ? MOVE_SHOW_POP_BACK_SP : MOVE_SHOW_POP_BACK : MOVE_SHOW) * (isPopBack ? -1 : 1),
            scale: isPopBack ? (media.isSp ? SCALE_HIDE_POP_BACK_SP : SCALE_HIDE_POP_BACK) * 1.1 : 1
        }),
        new Promise(c=>{
            state.isPullAddressBar ? requestAnimationFrame(()=>{
                resetStyleModal(),
                c()
            }
            ) : c()
        }
        ).then(()=>{
            new Promise(m=>{
                eventBus.once("initPageJs", m)
            }
            );
            const c = manageStyles()
              , p = manageScripts().then(()=>{
                initEachPage(u)
            }
            )
              , d = loadImage(getPreloadImagePathToPage());
            return Promise.all([c, p, d])
        }
        ).then(async()=>{
            if (emitEnterReady(),
            isMobile)
                u.classList.remove("-out"),
                u.classList.add("-show", "-in", "-immediate"),
                await wait(0),
                await setScrollPosition(),
                emitEnterShow(),
                emitLeaveCompleted(),
                a.remove(),
                removePrevStyle(),
                u.classList.remove("-in"),
                store.cScroll.update();
            else {
                isPopBack && gsapK.to(elPageShadow, {
                    opacity: 0,
                    duration: media.isSp ? DURATION_FADE_HIDE_SP_SHADOW : DURATION_FADE_HIDE_SHADOW,
                    ease: EASE_FADE_HIDE_SHADOW
                }),
                u.style.setProperty("--view-y", `${((store.isPopstate ? store.cScroll.getStorageScrollY() : 0) + window.innerHeight * .5) / u.offsetHeight * 100}%`);
                const c = ["-show", "-in"];
                return isPopBack && c.push("-back"),
                u.classList.remove("-out", "-back"),
                u.classList.add(...c),
                await setScrollPosition(),
                gsapK.to(u, [{
                    xPercent: 0,
                    scale: 1,
                    duration: media.isSp ? DURATION_MOVE_SHOW_SP : DURATION_MOVE_SHOW,
                    ease: EASE_MOVE_SHOW,
                    delay: DELAY_SHOW,
                    onStart: ()=>{
                        emitEnterShow()
                    }
                    ,
                    onComplete: ()=>{
                        emitLeaveCompleted(),
                        a.remove(),
                        removePrevStyle(),
                        u.parentElement.style.height = "",
                        u.classList.remove("-in", "-back"),
                        store.cScroll.update(),
                        gsap.set([u, elPageShadow], {
                            clearProps: !0
                        })
                    }
                }])
            }
        }
        ).then(f)
    }
}
function t() {
    return t = Object.assign ? Object.assign.bind() : function(h) {
        for (var a = 1; a < arguments.length; a++) {
            var u = arguments[a];
            for (var f in u)
                Object.prototype.hasOwnProperty.call(u, f) && (h[f] = u[f])
        }
        return h
    }
    ,
    t.apply(this, arguments)
}
function e(h, a, u) {
    return Math.max(h, Math.min(a, u))
}
class i {
    advance(a) {
        var u;
        if (!this.isRunning)
            return;
        let f = !1;
        if (this.lerp)
            this.value = (1 - (c = this.lerp)) * this.value + c * this.to,
            Math.round(this.value) === this.to && (this.value = this.to,
            f = !0);
        else {
            this.currentTime += a;
            const p = e(0, this.currentTime / this.duration, 1);
            f = p >= 1;
            const d = f ? 1 : this.easing(p);
            this.value = this.from + (this.to - this.from) * d
        }
        var c;
        (u = this.onUpdate) == null || u.call(this, this.value, {
            completed: f
        }),
        f && this.stop()
    }
    stop() {
        this.isRunning = !1
    }
    fromTo(a, u, {lerp: f=.1, duration: c=1, easing: p=m=>m, onUpdate: d}) {
        this.from = this.value = a,
        this.to = u,
        this.lerp = f,
        this.duration = c,
        this.easing = p,
        this.currentTime = 0,
        this.isRunning = !0,
        this.onUpdate = d
    }
}
function s(h, a) {
    let u;
    return function() {
        let f = arguments
          , c = this;
        clearTimeout(u),
        u = setTimeout(function() {
            h.apply(c, f)
        }, a)
    }
}
class o {
    constructor(a, u) {
        this.onWindowResize = ()=>{
            this.width = window.innerWidth,
            this.height = window.innerHeight
        }
        ,
        this.onWrapperResize = ()=>{
            this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight
        }
        ,
        this.onContentResize = ()=>{
            const f = this.wrapper === window ? document.documentElement : this.wrapper;
            this.scrollHeight = f.scrollHeight,
            this.scrollWidth = f.scrollWidth
        }
        ,
        this.wrapper = a,
        this.content = u,
        this.wrapper === window ? (window.addEventListener("resize", this.onWindowResize, !1),
        this.onWindowResize()) : (this.wrapperResizeObserver = new ResizeObserver(s(this.onWrapperResize, 100)),
        this.wrapperResizeObserver.observe(this.wrapper),
        this.onWrapperResize()),
        this.contentResizeObserver = new ResizeObserver(s(this.onContentResize, 100)),
        this.contentResizeObserver.observe(this.content),
        this.onContentResize()
    }
    destroy() {
        var a, u;
        window.removeEventListener("resize", this.onWindowResize, !1),
        (a = this.wrapperResizeObserver) == null || a.disconnect(),
        (u = this.contentResizeObserver) == null || u.disconnect()
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height
        }
    }
}
let n = ()=>({
    events: {},
    emit(h, ...a) {
        let u = this.events[h] || [];
        for (let f = 0, c = u.length; f < c; f++)
            u[f](...a)
    },
    on(h, a) {
        var u;
        return (u = this.events[h]) != null && u.push(a) || (this.events[h] = [a]),
        ()=>{
            var f;
            this.events[h] = (f = this.events[h]) == null ? void 0 : f.filter(c=>a !== c)
        }
    }
});
class r {
    constructor(a, {wheelMultiplier: u=1, touchMultiplier: f=2, normalizeWheel: c=!1}) {
        this.onTouchStart = p=>{
            const {clientX: d, clientY: m} = p.targetTouches ? p.targetTouches[0] : p;
            this.touchStart.x = d,
            this.touchStart.y = m,
            this.lastDelta = {
                x: 0,
                y: 0
            }
        }
        ,
        this.onTouchMove = p=>{
            const {clientX: d, clientY: m} = p.targetTouches ? p.targetTouches[0] : p
              , g = -(d - this.touchStart.x) * this.touchMultiplier
              , v = -(m - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = d,
            this.touchStart.y = m,
            this.lastDelta = {
                x: g,
                y: v
            },
            this.emitter.emit("scroll", {
                type: "touch",
                deltaX: g,
                deltaY: v,
                event: p
            })
        }
        ,
        this.onTouchEnd = p=>{
            this.emitter.emit("scroll", {
                type: "touch",
                inertia: !0,
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: p
            })
        }
        ,
        this.onWheel = p=>{
            let {deltaX: d, deltaY: m} = p;
            this.normalizeWheel && (d = e(-100, d, 100),
            m = e(-100, m, 100)),
            d *= this.wheelMultiplier,
            m *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                type: "wheel",
                deltaX: d,
                deltaY: m,
                event: p
            })
        }
        ,
        this.element = a,
        this.wheelMultiplier = u,
        this.touchMultiplier = f,
        this.normalizeWheel = c,
        this.touchStart = {
            x: null,
            y: null
        },
        this.emitter = n(),
        this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
    on(a, u) {
        return this.emitter.on(a, u)
    }
    destroy() {
        this.emitter.events = {},
        this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1
        }),
        this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }),
        this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }),
        this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1
        })
    }
}
class l {
    constructor({direction: a, gestureDirection: u, mouseMultiplier: f, smooth: c, wrapper: p=window, content: d=document.documentElement, wheelEventsTarget: m=p, smoothWheel: g=c == null || c, smoothTouch: v=!1, syncTouch: _=!1, syncTouchLerp: b=.1, touchInertiaMultiplier: P=35, duration: J, easing: x=et=>Math.min(1, 1.001 - Math.pow(2, -10 * et)), lerp: w=J ? null : .1, infinite: pe=!1, orientation: L=a ?? "vertical", gestureOrientation: R=u ?? "vertical", touchMultiplier: M=1, wheelMultiplier: Z=f ?? 1, normalizeWheel: he=!1}={}) {
        this.onVirtualScroll = ({type: et, inertia: ei, deltaX: ii, deltaY: oi, event: hi})=>{
            if (hi.ctrlKey)
                return;
            const fi = et === "touch"
              , ui = et === "wheel";
            if (this.options.gestureOrientation === "vertical" && oi === 0 || this.options.gestureOrientation === "horizontal" && ii === 0 || fi && this.options.gestureOrientation === "vertical" && this.scroll === 0 && !this.options.infinite && oi <= 0 || hi.composedPath().find(ni=>ni == null || ni.hasAttribute == null ? void 0 : ni.hasAttribute("data-lenis-prevent")))
                return;
            if (this.isStopped || this.isLocked)
                return void hi.preventDefault();
            if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && fi || this.options.smoothWheel && ui,
            !this.isSmooth)
                return this.isScrolling = !1,
                void this.animate.stop();
            hi.preventDefault();
            let pi = oi;
            this.options.gestureOrientation === "both" ? pi = Math.abs(oi) > Math.abs(ii) ? oi : ii : this.options.gestureOrientation === "horizontal" && (pi = ii);
            const mi = fi && this.options.syncTouch
              , li = fi && ei && Math.abs(pi) > 1;
            li && (pi = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(this.targetScroll + pi, t({
                programmatic: !1
            }, mi && {
                lerp: li ? this.syncTouchLerp : .4
            }))
        }
        ,
        this.onScroll = ()=>{
            if (!this.isScrolling) {
                const et = this.animatedScroll;
                this.animatedScroll = this.targetScroll = this.actualScroll,
                this.velocity = 0,
                this.direction = Math.sign(this.animatedScroll - et),
                this.emit()
            }
        }
        ,
        a && console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),
        u && console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),
        f && console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),
        c && console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),
        window.lenisVersion = "1.0.10",
        p !== document.documentElement && p !== document.body || (p = window),
        this.options = {
            wrapper: p,
            content: d,
            wheelEventsTarget: m,
            smoothWheel: g,
            smoothTouch: v,
            syncTouch: _,
            syncTouchLerp: b,
            touchInertiaMultiplier: P,
            duration: J,
            easing: x,
            lerp: w,
            infinite: pe,
            gestureOrientation: R,
            orientation: L,
            touchMultiplier: M,
            wheelMultiplier: Z,
            normalizeWheel: he
        },
        this.dimensions = new o(p,d),
        this.rootElement.classList.add("lenis"),
        this.velocity = 0,
        this.isStopped = !1,
        this.isSmooth = g || v,
        this.isScrolling = !1,
        this.targetScroll = this.animatedScroll = this.actualScroll,
        this.animate = new i,
        this.emitter = n(),
        this.options.wrapper.addEventListener("scroll", this.onScroll, {
            passive: !1
        }),
        this.virtualScroll = new r(m,{
            touchMultiplier: M,
            wheelMultiplier: Z,
            normalizeWheel: he
        }),
        this.virtualScroll.on("scroll", this.onVirtualScroll)
    }
    destroy() {
        this.emitter.events = {},
        this.options.wrapper.removeEventListener("scroll", this.onScroll, {
            passive: !1
        }),
        this.virtualScroll.destroy()
    }
    on(a, u) {
        return this.emitter.on(a, u)
    }
    off(a, u) {
        var f;
        this.emitter.events[a] = (f = this.emitter.events[a]) == null ? void 0 : f.filter(c=>u !== c)
    }
    setScroll(a) {
        this.isHorizontal ? this.rootElement.scrollLeft = a : this.rootElement.scrollTop = a
    }
    emit() {
        this.emitter.emit("scroll", this)
    }
    reset() {
        this.isLocked = !1,
        this.isScrolling = !1,
        this.velocity = 0,
        this.animate.stop()
    }
    start() {
        this.isStopped = !1,
        this.reset()
    }
    stop() {
        this.isStopped = !0,
        this.animate.stop(),
        this.reset()
    }
    raf(a) {
        const u = a - (this.time || a);
        this.time = a,
        this.animate.advance(.001 * u)
    }
    scrollTo(a, {offset: u=0, immediate: f=!1, lock: c=!1, duration: p=this.options.duration, easing: d=this.options.easing, lerp: m=!p && this.options.lerp, onComplete: g=null, force: v=!1, programmatic: _=!0}={}) {
        if (!this.isStopped || v) {
            if (["top", "left", "start"].includes(a))
                a = 0;
            else if (["bottom", "right", "end"].includes(a))
                a = this.limit;
            else {
                var b;
                let P;
                if (typeof a == "string" ? P = document.querySelector(a) : (b = a) != null && b.nodeType && (P = a),
                P) {
                    if (this.options.wrapper !== window) {
                        const x = this.options.wrapper.getBoundingClientRect();
                        u -= this.isHorizontal ? x.left : x.top
                    }
                    const J = P.getBoundingClientRect();
                    a = (this.isHorizontal ? J.left : J.top) + this.animatedScroll
                }
            }
            if (typeof a == "number") {
                if (a += u,
                this.options.infinite ? _ && (this.targetScroll = this.animatedScroll = this.scroll) : a = e(0, a, this.limit),
                f)
                    return this.animatedScroll = this.targetScroll = a,
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.emit(),
                    void (g == null || g());
                if (!_) {
                    if (a === this.targetScroll)
                        return;
                    this.targetScroll = a
                }
                this.animate.fromTo(this.animatedScroll, a, {
                    duration: p,
                    easing: d,
                    lerp: m,
                    onUpdate: (P,{completed: J})=>{
                        c && (this.isLocked = !0),
                        this.isScrolling = !0,
                        this.velocity = P - this.animatedScroll,
                        this.direction = Math.sign(this.velocity),
                        this.animatedScroll = P,
                        this.setScroll(this.scroll),
                        _ && (this.targetScroll = P),
                        J && (c && (this.isLocked = !1),
                        requestAnimationFrame(()=>{
                            this.isScrolling = !1
                        }
                        ),
                        this.velocity = 0,
                        g?.()),
                        this.emit()
                    }
                })
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window ? this.options.content : this.options.wrapper
    }
    get limit() {
        return this.isHorizontal ? this.dimensions.limit.x : this.dimensions.limit.y
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal"
    }
    get actualScroll() {
        return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
    }
    get scroll() {
        return this.options.infinite ? function(a, u) {
            let f = a % u;
            return (u > 0 && f < 0 || u < 0 && f > 0) && (f += u),
            f
        }(this.animatedScroll, this.limit) : this.animatedScroll
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit
    }
    get isSmooth() {
        return this.__isSmooth
    }
    set isSmooth(a) {
        this.__isSmooth !== a && (this.rootElement.classList.toggle("lenis-smooth", a),
        this.__isSmooth = a)
    }
    get isScrolling() {
        return this.__isScrolling
    }
    set isScrolling(a) {
        this.__isScrolling !== a && (this.rootElement.classList.toggle("lenis-scrolling", a),
        this.__isScrolling = a)
    }
    get isStopped() {
        return this.__isStopped
    }
    set isStopped(a) {
        this.__isStopped !== a && (this.rootElement.classList.toggle("lenis-stopped", a),
        this.__isStopped = a)
    }
}
/*!
 * ScrollToPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var gsap$2, _coreInitted$1, _window, _docEl, _body, _toArray$1, _config, ScrollTrigger, _windowExists = function() {
    return typeof window < "u"
}, _getGSAP = function() {
    return gsap$2 || _windowExists() && (gsap$2 = window.gsap) && gsap$2.registerPlugin && gsap$2
}, _isString = function(a) {
    return typeof a == "string"
}, _isFunction = function(a) {
    return typeof a == "function"
}, _max = function(a, u) {
    var f = u === "x" ? "Width" : "Height"
      , c = "scroll" + f
      , p = "client" + f;
    return a === _window || a === _docEl || a === _body ? Math.max(_docEl[c], _body[c]) - (_window["inner" + f] || _docEl[p] || _body[p]) : a[c] - a["offset" + f]
}, _buildGetter = function(a, u) {
    var f = "scroll" + (u === "x" ? "Left" : "Top");
    return a === _window && (a.pageXOffset != null ? f = "page" + u.toUpperCase() + "Offset" : a = _docEl[f] != null ? _docEl : _body),
    function() {
        return a[f]
    }
}, _clean = function(a, u, f, c) {
    if (_isFunction(a) && (a = a(u, f, c)),
    typeof a != "object")
        return _isString(a) && a !== "max" && a.charAt(1) !== "=" ? {
            x: a,
            y: a
        } : {
            y: a
        };
    if (a.nodeType)
        return {
            y: a,
            x: a
        };
    var p = {}, d;
    for (d in a)
        p[d] = d !== "onAutoKill" && _isFunction(a[d]) ? a[d](u, f, c) : a[d];
    return p
}, _getOffset = function(a, u) {
    if (a = _toArray$1(a)[0],
    !a || !a.getBoundingClientRect)
        return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
    var f = a.getBoundingClientRect()
      , c = !u || u === _window || u === _body
      , p = c ? {
        top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
        left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
    } : u.getBoundingClientRect()
      , d = {
        x: f.left - p.left,
        y: f.top - p.top
    };
    return !c && u && (d.x += _buildGetter(u, "x")(),
    d.y += _buildGetter(u, "y")()),
    d
}, _parseVal = function(a, u, f, c, p) {
    return !isNaN(a) && typeof a != "object" ? parseFloat(a) - p : _isString(a) && a.charAt(1) === "=" ? parseFloat(a.substr(2)) * (a.charAt(0) === "-" ? -1 : 1) + c - p : a === "max" ? _max(u, f) - p : Math.min(_max(u, f), _getOffset(a, u)[f] - p)
}, _initCore$1 = function() {
    gsap$2 = _getGSAP(),
    _windowExists() && gsap$2 && typeof document < "u" && document.body && (_window = window,
    _body = document.body,
    _docEl = document.documentElement,
    _toArray$1 = gsap$2.utils.toArray,
    gsap$2.config({
        autoKillThreshold: 7
    }),
    _config = gsap$2.config(),
    _coreInitted$1 = 1)
}, ScrollToPlugin = {
    version: "3.11.4",
    name: "scrollTo",
    rawVars: 1,
    register: function(a) {
        gsap$2 = a,
        _initCore$1()
    },
    init: function(a, u, f, c, p) {
        _coreInitted$1 || _initCore$1();
        var d = this
          , m = gsap$2.getProperty(a, "scrollSnapType");
        d.isWin = a === _window,
        d.target = a,
        d.tween = f,
        u = _clean(u, c, a, p),
        d.vars = u,
        d.autoKill = !!u.autoKill,
        d.getX = _buildGetter(a, "x"),
        d.getY = _buildGetter(a, "y"),
        d.x = d.xPrev = d.getX(),
        d.y = d.yPrev = d.getY(),
        ScrollTrigger || (ScrollTrigger = gsap$2.core.globals().ScrollTrigger),
        gsap$2.getProperty(a, "scrollBehavior") === "smooth" && gsap$2.set(a, {
            scrollBehavior: "auto"
        }),
        m && m !== "none" && (d.snap = 1,
        d.snapInline = a.style.scrollSnapType,
        a.style.scrollSnapType = "none"),
        u.x != null ? (d.add(d, "x", d.x, _parseVal(u.x, a, "x", d.x, u.offsetX || 0), c, p),
        d._props.push("scrollTo_x")) : d.skipX = 1,
        u.y != null ? (d.add(d, "y", d.y, _parseVal(u.y, a, "y", d.y, u.offsetY || 0), c, p),
        d._props.push("scrollTo_y")) : d.skipY = 1
    },
    render: function(a, u) {
        for (var f = u._pt, c = u.target, p = u.tween, d = u.autoKill, m = u.xPrev, g = u.yPrev, v = u.isWin, _ = u.snap, b = u.snapInline, P, J, x, w, pe; f; )
            f.r(a, f.d),
            f = f._next;
        P = v || !u.skipX ? u.getX() : m,
        J = v || !u.skipY ? u.getY() : g,
        x = J - g,
        w = P - m,
        pe = _config.autoKillThreshold,
        u.x < 0 && (u.x = 0),
        u.y < 0 && (u.y = 0),
        d && (!u.skipX && (w > pe || w < -pe) && P < _max(c, "x") && (u.skipX = 1),
        !u.skipY && (x > pe || x < -pe) && J < _max(c, "y") && (u.skipY = 1),
        u.skipX && u.skipY && (p.kill(),
        u.vars.onAutoKill && u.vars.onAutoKill.apply(p, u.vars.onAutoKillParams || []))),
        v ? _window.scrollTo(u.skipX ? P : u.x, u.skipY ? J : u.y) : (u.skipY || (c.scrollTop = u.y),
        u.skipX || (c.scrollLeft = u.x)),
        _ && (a === 1 || a === 0) && (J = c.scrollTop,
        P = c.scrollLeft,
        b ? c.style.scrollSnapType = b : c.style.removeProperty("scroll-snap-type"),
        c.scrollTop = J + 1,
        c.scrollLeft = P + 1,
        c.scrollTop = J,
        c.scrollLeft = P),
        u.xPrev = u.x,
        u.yPrev = u.y,
        ScrollTrigger && ScrollTrigger.update()
    },
    kill: function(a) {
        var u = a === "scrollTo";
        (u || a === "scrollTo_x") && (this.skipX = 1),
        (u || a === "scrollTo_y") && (this.skipY = 1)
    }
};
ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
_getGSAP() && gsap$2.registerPlugin(ScrollToPlugin);
const param$2 = {
    smoothWheel: !0,
    duration: 1.2,
    easing: h=>Math.min(1, 1.001 - Math.pow(2, -10 * h)),
    wheelMultiplier: 1,
    touchMultiplier: 2,
    ease: [.25, 0, .35, 1],
    durationScrollTo: 1
};
gsapWithCSS.registerPlugin(ScrollToPlugin);
class ScrollLenis extends Component {
    static isPermanent = !0;
    _scroll;
    scrollYSmoothOwn = 0;
    _callbackScroll;
    listenersResizeSelf = [];
    _callbackListCall = [];
    isHorizontal = !1;
    isSmooth = !1;
    handleResize = null;
    onInit() {
        const {smoothWheel: a, duration: u, easing: f, wheelMultiplier: c, touchMultiplier: p} = param$2
          , d = this.el.dataset.scrollDirection || "vertical";
        this.isHorizontal = d === "horizontal";
        const m = this.isHorizontal ? "both" : "vertical";
        this._scroll = new l({
            duration: u,
            easing: f,
            orientation: d,
            gestureOrientation: m,
            smoothWheel: a,
            wheelMultiplier: c,
            smoothTouch: !1,
            touchMultiplier: p,
            infinite: !1
        }) || null,
        this._updateIsSmooth(),
        this._addEventListener(),
        getNavigationType() !== "default" && (store.isInitializedAsynchronousTransition ? this.scrollToPrevPagePosition() : eventBus.once("initializedAsynchronousTransition", ()=>{
            this.scrollToPrevPagePosition()
        }
        )),
        this.handleResize = debounce(()=>{
            store.isOpenModal || this.updateResize()
        }
        ),
        eventBus.emit("initCScroll"),
        this.playTick()
    }
    scrollTo(a=0, u) {
        if (!this._scroll)
            return;
        store.isScrollAnimating = !0;
        const {immediate: f=!1, disableOffset: c=!1, onComplete: p} = u || {};
        return u.offset = c ? 0 : this._getOffsetY(),
        u.duration = f ? void 0 : "duration"in u ? u.duration : param$2.durationScrollTo,
        u.easing = f ? void 0 : "easing"in u ? u.easing : param$2.easing,
        new Promise(d=>{
            u.onComplete = ()=>{
                store.isScrollAnimating = !1,
                this.scrollYSmoothOwn = store.scrollY = this._scroll.scroll,
                p && p?.(),
                d()
            }
            ,
            this._scroll.scrollTo(a, u)
        }
        )
    }
    scrollToId(a, u) {
        const f = a === "top" ? 0 : `#${a}`;
        return this.scrollTo(f, u)
    }
    scrollToImmediate(a, u={}) {
        return u.immediate = !0,
        this.scrollTo(a, u)
    }
    scrollToAnchor(a) {
        if (location.hash) {
            const u = location.hash.slice(1, location.hash.length)
              , f = document.getElementById(u);
            return this.scrollTo(f || 0, a)
        } else
            return this.scrollTo(0, a)
    }
    scrollToPrevPagePosition(a={}) {
        return a.disableOffset = !0,
        this.scrollToImmediate(this.getStorageScrollY(), a)
    }
    onAnimateScroll(a) {
        this._scroll.on("scroll", a),
        this.on("updateScroll", a)
    }
    offAnimateScroll(a) {
        this._scroll.off("scroll", a),
        this.off("updateScroll", a)
    }
    start() {
        this._scroll && (this._scroll.start(),
        allowScroll())
    }
    stop() {
        this._scroll && (this._scroll.stop(),
        preventScroll())
    }
    enable() {
        this._scroll && (this.playTick(),
        this.start())
    }
    disable() {
        this._scroll && (this.stop(),
        this.pauseTick())
    }
    update() {
        this._scroll && (this._scroll.emit(),
        this.handleResize())
    }
    _updateIsSmooth() {
        this._scroll && (this.isSmooth = this._scroll.isSmooth,
        document.documentElement.classList[this.isSmooth ? "remove" : "add"]("sDisableSmoothScroll"))
    }
    onResizeSelf(a) {
        this.listenersResizeSelf.push(a)
    }
    onceResizeSelf(a) {
        const u = ()=>{
            this.offResizeSelf(u),
            a()
        }
        ;
        this.onResizeSelf(u)
    }
    offResizeSelf(a) {
        this.listenersResizeSelf.some((u,f)=>u === a ? (this.listenersResizeSelf.splice(f, 1),
        !0) : !1)
    }
    setResizeObserver() {
        const {el: a} = this;
        new ResizeObserver(f=>{
            for (const c of f)
                c.target === a && this.handleResize()
        }
        ).observe(a)
    }
    updateResize() {
        const a = getwindowSize();
        for (let u = 0; u < this.listenersResizeSelf.length; u = u + 1 | 0)
            this.listenersResizeSelf[u](a);
        this.emit("updateScroll", this._scroll)
    }
    _getOffsetY() {
        const a = document.querySelector(`[data-anchor-offset="${media.isSp ? "sp" : "pc"}"]`);
        return a ? -a.getBoundingClientRect().bottom : 0
    }
    _addEventListener() {
        this._callbackScroll = a=>{
            this.scrollYSmoothOwn = store.scrollY = a.scroll,
            store.scrollDirection = a.direction
        }
        ,
        this._scroll.on("scroll", this._callbackScroll),
        window.addEventListener("pagehide", ()=>{
            this.setStorageScrollY()
        }
        ),
        !this.isSmooth && this.isHorizontal && this.el.addEventListener("wheel", ({deltaY: a})=>{
            this.el.scrollBy(a, 0)
        }
        , passive)
    }
    setStorageScrollY(a=store.historyCount) {
        const u = JSON.parse(sessionStorage.getItem("historyScrollPosition") || "{}");
        u[a] = this.scrollYSmoothOwn,
        sessionStorage.setItem("historyScrollPosition", JSON.stringify(u))
    }
    getStorageScrollY() {
        const a = JSON.parse(sessionStorage.getItem("historyScrollPosition") || "{}");
        return Number(a[store.historyCount]) || location.hash || 0
    }
    get limit() {
        return this._scroll?.limit
    }
    checkScroll() {
        this._scroll.scroll.checkScroll(!0)
    }
    onTick(a) {
        this._scroll.raf(a * 1e3)
    }
    onLeave() {
        this.setStorageScrollY(store.prevHistoryCount)
    }
    onDestroy() {
        this._scroll.off("scroll", this._callbackScroll),
        this._scroll.destroy()
    }
}
init({
    Scroll: ScrollLenis,
    transitions: {
        default: TransitionDefault
    }
});
class Page extends Component {
    constructor(a={}) {
        const {el: u=store.view || document.body} = a;
        a.isManual = !0,
        super({
            el: u,
            ...a
        }),
        this.onInit && (store.isLoadedStyles ? this.onInit() : eventBus.once("loadedStyles", ()=>{
            this.onInit()
        }
        ))
    }
    static register() {
        registerPageComponent(this),
        eventBus.emit("readyPage")
    }
}
var lottie$1 = {
    exports: {}
};
(function(module, exports) {
    typeof navigator < "u" && function(h, a) {
        module.exports = a()
    }(commonjsGlobal, function() {
        var svgNS = "http://www.w3.org/2000/svg"
          , locationHref = ""
          , _useWebWorker = !1
          , initialDefaultFrame = -999999
          , setWebWorker = function(a) {
            _useWebWorker = !!a
        }
          , getWebWorker = function() {
            return _useWebWorker
        }
          , setLocationHref = function(a) {
            locationHref = a
        }
          , getLocationHref = function() {
            return locationHref
        };
        function createTag(h) {
            return document.createElement(h)
        }
        function extendPrototype(h, a) {
            var u, f = h.length, c;
            for (u = 0; u < f; u += 1) {
                c = h[u].prototype;
                for (var p in c)
                    Object.prototype.hasOwnProperty.call(c, p) && (a.prototype[p] = c[p])
            }
        }
        function getDescriptor(h, a) {
            return Object.getOwnPropertyDescriptor(h, a)
        }
        function createProxyFunction(h) {
            function a() {}
            return a.prototype = h,
            a
        }
        var audioControllerFactory = function() {
            function h(a) {
                this.audios = [],
                this.audioFactory = a,
                this._volume = 1,
                this._isMuted = !1
            }
            return h.prototype = {
                addAudio: function(u) {
                    this.audios.push(u)
                },
                pause: function() {
                    var u, f = this.audios.length;
                    for (u = 0; u < f; u += 1)
                        this.audios[u].pause()
                },
                resume: function() {
                    var u, f = this.audios.length;
                    for (u = 0; u < f; u += 1)
                        this.audios[u].resume()
                },
                setRate: function(u) {
                    var f, c = this.audios.length;
                    for (f = 0; f < c; f += 1)
                        this.audios[f].setRate(u)
                },
                createAudio: function(u) {
                    return this.audioFactory ? this.audioFactory(u) : window.Howl ? new window.Howl({
                        src: [u]
                    }) : {
                        isPlaying: !1,
                        play: function() {
                            this.isPlaying = !0
                        },
                        seek: function() {
                            this.isPlaying = !1
                        },
                        playing: function() {},
                        rate: function() {},
                        setVolume: function() {}
                    }
                },
                setAudioFactory: function(u) {
                    this.audioFactory = u
                },
                setVolume: function(u) {
                    this._volume = u,
                    this._updateVolume()
                },
                mute: function() {
                    this._isMuted = !0,
                    this._updateVolume()
                },
                unmute: function() {
                    this._isMuted = !1,
                    this._updateVolume()
                },
                getVolume: function() {
                    return this._volume
                },
                _updateVolume: function() {
                    var u, f = this.audios.length;
                    for (u = 0; u < f; u += 1)
                        this.audios[u].volume(this._volume * (this._isMuted ? 0 : 1))
                }
            },
            function() {
                return new h
            }
        }()
          , createTypedArray = function() {
            function h(u, f) {
                var c = 0, p = [], d;
                switch (u) {
                case "int16":
                case "uint8c":
                    d = 1;
                    break;
                default:
                    d = 1.1;
                    break
                }
                for (c = 0; c < f; c += 1)
                    p.push(d);
                return p
            }
            function a(u, f) {
                return u === "float32" ? new Float32Array(f) : u === "int16" ? new Int16Array(f) : u === "uint8c" ? new Uint8ClampedArray(f) : h(u, f)
            }
            return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? a : h
        }();
        function createSizedArray(h) {
            return Array.apply(null, {
                length: h
            })
        }
        function _typeof$6(h) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(u) {
                return typeof u
            }
            : _typeof$6 = function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            _typeof$6(h)
        }
        var subframeEnabled = !0
          , expressionsPlugin = null
          , expressionsInterfaces = null
          , idPrefix$1 = ""
          , isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          , bmPow = Math.pow
          , bmSqrt = Math.sqrt
          , bmFloor = Math.floor
          , bmMax = Math.max
          , bmMin = Math.min
          , BMMath = {};
        (function() {
            var h = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], a, u = h.length;
            for (a = 0; a < u; a += 1)
                BMMath[h[a]] = Math[h[a]]
        }
        )(),
        BMMath.random = Math.random,
        BMMath.abs = function(h) {
            var a = _typeof$6(h);
            if (a === "object" && h.length) {
                var u = createSizedArray(h.length), f, c = h.length;
                for (f = 0; f < c; f += 1)
                    u[f] = Math.abs(h[f]);
                return u
            }
            return Math.abs(h)
        }
        ;
        var defaultCurveSegments = 150
          , degToRads = Math.PI / 180
          , roundCorner = .5519;
        function styleDiv(h) {
            h.style.position = "absolute",
            h.style.top = 0,
            h.style.left = 0,
            h.style.display = "block",
            h.style.transformOrigin = "0 0",
            h.style.webkitTransformOrigin = "0 0",
            h.style.backfaceVisibility = "visible",
            h.style.webkitBackfaceVisibility = "visible",
            h.style.transformStyle = "preserve-3d",
            h.style.webkitTransformStyle = "preserve-3d",
            h.style.mozTransformStyle = "preserve-3d"
        }
        function BMEnterFrameEvent(h, a, u, f) {
            this.type = h,
            this.currentTime = a,
            this.totalTime = u,
            this.direction = f < 0 ? -1 : 1
        }
        function BMCompleteEvent(h, a) {
            this.type = h,
            this.direction = a < 0 ? -1 : 1
        }
        function BMCompleteLoopEvent(h, a, u, f) {
            this.type = h,
            this.currentLoop = u,
            this.totalLoops = a,
            this.direction = f < 0 ? -1 : 1
        }
        function BMSegmentStartEvent(h, a, u) {
            this.type = h,
            this.firstFrame = a,
            this.totalFrames = u
        }
        function BMDestroyEvent(h, a) {
            this.type = h,
            this.target = a
        }
        function BMRenderFrameErrorEvent(h, a) {
            this.type = "renderFrameError",
            this.nativeError = h,
            this.currentTime = a
        }
        function BMConfigErrorEvent(h) {
            this.type = "configError",
            this.nativeError = h
        }
        var createElementID = function() {
            var h = 0;
            return function() {
                return h += 1,
                idPrefix$1 + "__lottie_element_" + h
            }
        }();
        function HSVtoRGB(h, a, u) {
            var f, c, p, d, m, g, v, _;
            switch (d = Math.floor(h * 6),
            m = h * 6 - d,
            g = u * (1 - a),
            v = u * (1 - m * a),
            _ = u * (1 - (1 - m) * a),
            d % 6) {
            case 0:
                f = u,
                c = _,
                p = g;
                break;
            case 1:
                f = v,
                c = u,
                p = g;
                break;
            case 2:
                f = g,
                c = u,
                p = _;
                break;
            case 3:
                f = g,
                c = v,
                p = u;
                break;
            case 4:
                f = _,
                c = g,
                p = u;
                break;
            case 5:
                f = u,
                c = g,
                p = v;
                break
            }
            return [f, c, p]
        }
        function RGBtoHSV(h, a, u) {
            var f = Math.max(h, a, u), c = Math.min(h, a, u), p = f - c, d, m = f === 0 ? 0 : p / f, g = f / 255;
            switch (f) {
            case c:
                d = 0;
                break;
            case h:
                d = a - u + p * (a < u ? 6 : 0),
                d /= 6 * p;
                break;
            case a:
                d = u - h + p * 2,
                d /= 6 * p;
                break;
            case u:
                d = h - a + p * 4,
                d /= 6 * p;
                break
            }
            return [d, m, g]
        }
        function addSaturationToRGB(h, a) {
            var u = RGBtoHSV(h[0] * 255, h[1] * 255, h[2] * 255);
            return u[1] += a,
            u[1] > 1 ? u[1] = 1 : u[1] <= 0 && (u[1] = 0),
            HSVtoRGB(u[0], u[1], u[2])
        }
        function addBrightnessToRGB(h, a) {
            var u = RGBtoHSV(h[0] * 255, h[1] * 255, h[2] * 255);
            return u[2] += a,
            u[2] > 1 ? u[2] = 1 : u[2] < 0 && (u[2] = 0),
            HSVtoRGB(u[0], u[1], u[2])
        }
        function addHueToRGB(h, a) {
            var u = RGBtoHSV(h[0] * 255, h[1] * 255, h[2] * 255);
            return u[0] += a / 360,
            u[0] > 1 ? u[0] -= 1 : u[0] < 0 && (u[0] += 1),
            HSVtoRGB(u[0], u[1], u[2])
        }
        var rgbToHex = function() {
            var h = [], a, u;
            for (a = 0; a < 256; a += 1)
                u = a.toString(16),
                h[a] = u.length === 1 ? "0" + u : u;
            return function(f, c, p) {
                return f < 0 && (f = 0),
                c < 0 && (c = 0),
                p < 0 && (p = 0),
                "#" + h[f] + h[c] + h[p]
            }
        }()
          , setSubframeEnabled = function(a) {
            subframeEnabled = !!a
        }
          , getSubframeEnabled = function() {
            return subframeEnabled
        }
          , setExpressionsPlugin = function(a) {
            expressionsPlugin = a
        }
          , getExpressionsPlugin = function() {
            return expressionsPlugin
        }
          , setExpressionInterfaces = function(a) {
            expressionsInterfaces = a
        }
          , getExpressionInterfaces = function() {
            return expressionsInterfaces
        }
          , setDefaultCurveSegments = function(a) {
            defaultCurveSegments = a
        }
          , getDefaultCurveSegments = function() {
            return defaultCurveSegments
        }
          , setIdPrefix = function(a) {
            idPrefix$1 = a
        };
        function createNS(h) {
            return document.createElementNS(svgNS, h)
        }
        function _typeof$5(h) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(u) {
                return typeof u
            }
            : _typeof$5 = function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            _typeof$5(h)
        }
        var dataManager = function() {
            var h = 1, a = [], u, f, c = {
                onmessage: function() {},
                postMessage: function(J) {
                    u({
                        data: J
                    })
                }
            }, p = {
                postMessage: function(J) {
                    c.onmessage({
                        data: J
                    })
                }
            };
            function d(P) {
                if (window.Worker && window.Blob && getWebWorker()) {
                    var J = new Blob(["var _workerSelf = self; self.onmessage = ", P.toString()],{
                        type: "text/javascript"
                    })
                      , x = URL.createObjectURL(J);
                    return new Worker(x)
                }
                return u = P,
                c
            }
            function m() {
                f || (f = d(function(J) {
                    function x() {
                        function pe(li, ni) {
                            var ri, ti, si = li.length, ci, ai, di, gi;
                            for (ti = 0; ti < si; ti += 1)
                                if (ri = li[ti],
                                "ks"in ri && !ri.completed) {
                                    if (ri.completed = !0,
                                    ri.hasMask) {
                                        var vi = ri.masksProperties;
                                        for (ai = vi.length,
                                        ci = 0; ci < ai; ci += 1)
                                            if (vi[ci].pt.k.i)
                                                he(vi[ci].pt.k);
                                            else
                                                for (gi = vi[ci].pt.k.length,
                                                di = 0; di < gi; di += 1)
                                                    vi[ci].pt.k[di].s && he(vi[ci].pt.k[di].s[0]),
                                                    vi[ci].pt.k[di].e && he(vi[ci].pt.k[di].e[0])
                                    }
                                    ri.ty === 0 ? (ri.layers = M(ri.refId, ni),
                                    pe(ri.layers, ni)) : ri.ty === 4 ? Z(ri.shapes) : ri.ty === 5 && pi(ri)
                                }
                        }
                        function L(li, ni) {
                            if (li) {
                                var ri = 0
                                  , ti = li.length;
                                for (ri = 0; ri < ti; ri += 1)
                                    li[ri].t === 1 && (li[ri].data.layers = M(li[ri].data.refId, ni),
                                    pe(li[ri].data.layers, ni))
                            }
                        }
                        function R(li, ni) {
                            for (var ri = 0, ti = ni.length; ri < ti; ) {
                                if (ni[ri].id === li)
                                    return ni[ri];
                                ri += 1
                            }
                            return null
                        }
                        function M(li, ni) {
                            var ri = R(li, ni);
                            return ri ? ri.layers.__used ? JSON.parse(JSON.stringify(ri.layers)) : (ri.layers.__used = !0,
                            ri.layers) : null
                        }
                        function Z(li) {
                            var ni, ri = li.length, ti, si;
                            for (ni = ri - 1; ni >= 0; ni -= 1)
                                if (li[ni].ty === "sh")
                                    if (li[ni].ks.k.i)
                                        he(li[ni].ks.k);
                                    else
                                        for (si = li[ni].ks.k.length,
                                        ti = 0; ti < si; ti += 1)
                                            li[ni].ks.k[ti].s && he(li[ni].ks.k[ti].s[0]),
                                            li[ni].ks.k[ti].e && he(li[ni].ks.k[ti].e[0]);
                                else
                                    li[ni].ty === "gr" && Z(li[ni].it)
                        }
                        function he(li) {
                            var ni, ri = li.i.length;
                            for (ni = 0; ni < ri; ni += 1)
                                li.i[ni][0] += li.v[ni][0],
                                li.i[ni][1] += li.v[ni][1],
                                li.o[ni][0] += li.v[ni][0],
                                li.o[ni][1] += li.v[ni][1]
                        }
                        function et(li, ni) {
                            var ri = ni ? ni.split(".") : [100, 100, 100];
                            return li[0] > ri[0] ? !0 : ri[0] > li[0] ? !1 : li[1] > ri[1] ? !0 : ri[1] > li[1] ? !1 : li[2] > ri[2] ? !0 : ri[2] > li[2] ? !1 : null
                        }
                        var ei = function() {
                            var li = [4, 4, 14];
                            function ni(ti) {
                                var si = ti.t.d;
                                ti.t.d = {
                                    k: [{
                                        s: si,
                                        t: 0
                                    }]
                                }
                            }
                            function ri(ti) {
                                var si, ci = ti.length;
                                for (si = 0; si < ci; si += 1)
                                    ti[si].ty === 5 && ni(ti[si])
                            }
                            return function(ti) {
                                if (et(li, ti.v) && (ri(ti.layers),
                                ti.assets)) {
                                    var si, ci = ti.assets.length;
                                    for (si = 0; si < ci; si += 1)
                                        ti.assets[si].layers && ri(ti.assets[si].layers)
                                }
                            }
                        }()
                          , ii = function() {
                            var li = [4, 7, 99];
                            return function(ni) {
                                if (ni.chars && !et(li, ni.v)) {
                                    var ri, ti = ni.chars.length;
                                    for (ri = 0; ri < ti; ri += 1) {
                                        var si = ni.chars[ri];
                                        si.data && si.data.shapes && (Z(si.data.shapes),
                                        si.data.ip = 0,
                                        si.data.op = 99999,
                                        si.data.st = 0,
                                        si.data.sr = 1,
                                        si.data.ks = {
                                            p: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            s: {
                                                k: [100, 100],
                                                a: 0
                                            },
                                            a: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            }
                                        },
                                        ni.chars[ri].t || (si.data.shapes.push({
                                            ty: "no"
                                        }),
                                        si.data.shapes[0].it.push({
                                            p: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            s: {
                                                k: [100, 100],
                                                a: 0
                                            },
                                            a: {
                                                k: [0, 0],
                                                a: 0
                                            },
                                            r: {
                                                k: 0,
                                                a: 0
                                            },
                                            o: {
                                                k: 100,
                                                a: 0
                                            },
                                            sk: {
                                                k: 0,
                                                a: 0
                                            },
                                            sa: {
                                                k: 0,
                                                a: 0
                                            },
                                            ty: "tr"
                                        })))
                                    }
                                }
                            }
                        }()
                          , oi = function() {
                            var li = [5, 7, 15];
                            function ni(ti) {
                                var si = ti.t.p;
                                typeof si.a == "number" && (si.a = {
                                    a: 0,
                                    k: si.a
                                }),
                                typeof si.p == "number" && (si.p = {
                                    a: 0,
                                    k: si.p
                                }),
                                typeof si.r == "number" && (si.r = {
                                    a: 0,
                                    k: si.r
                                })
                            }
                            function ri(ti) {
                                var si, ci = ti.length;
                                for (si = 0; si < ci; si += 1)
                                    ti[si].ty === 5 && ni(ti[si])
                            }
                            return function(ti) {
                                if (et(li, ti.v) && (ri(ti.layers),
                                ti.assets)) {
                                    var si, ci = ti.assets.length;
                                    for (si = 0; si < ci; si += 1)
                                        ti.assets[si].layers && ri(ti.assets[si].layers)
                                }
                            }
                        }()
                          , hi = function() {
                            var li = [4, 1, 9];
                            function ni(ti) {
                                var si, ci = ti.length, ai, di;
                                for (si = 0; si < ci; si += 1)
                                    if (ti[si].ty === "gr")
                                        ni(ti[si].it);
                                    else if (ti[si].ty === "fl" || ti[si].ty === "st")
                                        if (ti[si].c.k && ti[si].c.k[0].i)
                                            for (di = ti[si].c.k.length,
                                            ai = 0; ai < di; ai += 1)
                                                ti[si].c.k[ai].s && (ti[si].c.k[ai].s[0] /= 255,
                                                ti[si].c.k[ai].s[1] /= 255,
                                                ti[si].c.k[ai].s[2] /= 255,
                                                ti[si].c.k[ai].s[3] /= 255),
                                                ti[si].c.k[ai].e && (ti[si].c.k[ai].e[0] /= 255,
                                                ti[si].c.k[ai].e[1] /= 255,
                                                ti[si].c.k[ai].e[2] /= 255,
                                                ti[si].c.k[ai].e[3] /= 255);
                                        else
                                            ti[si].c.k[0] /= 255,
                                            ti[si].c.k[1] /= 255,
                                            ti[si].c.k[2] /= 255,
                                            ti[si].c.k[3] /= 255
                            }
                            function ri(ti) {
                                var si, ci = ti.length;
                                for (si = 0; si < ci; si += 1)
                                    ti[si].ty === 4 && ni(ti[si].shapes)
                            }
                            return function(ti) {
                                if (et(li, ti.v) && (ri(ti.layers),
                                ti.assets)) {
                                    var si, ci = ti.assets.length;
                                    for (si = 0; si < ci; si += 1)
                                        ti.assets[si].layers && ri(ti.assets[si].layers)
                                }
                            }
                        }()
                          , fi = function() {
                            var li = [4, 4, 18];
                            function ni(ti) {
                                var si, ci = ti.length, ai, di;
                                for (si = ci - 1; si >= 0; si -= 1)
                                    if (ti[si].ty === "sh")
                                        if (ti[si].ks.k.i)
                                            ti[si].ks.k.c = ti[si].closed;
                                        else
                                            for (di = ti[si].ks.k.length,
                                            ai = 0; ai < di; ai += 1)
                                                ti[si].ks.k[ai].s && (ti[si].ks.k[ai].s[0].c = ti[si].closed),
                                                ti[si].ks.k[ai].e && (ti[si].ks.k[ai].e[0].c = ti[si].closed);
                                    else
                                        ti[si].ty === "gr" && ni(ti[si].it)
                            }
                            function ri(ti) {
                                var si, ci, ai = ti.length, di, gi, vi, yi;
                                for (ci = 0; ci < ai; ci += 1) {
                                    if (si = ti[ci],
                                    si.hasMask) {
                                        var Si = si.masksProperties;
                                        for (gi = Si.length,
                                        di = 0; di < gi; di += 1)
                                            if (Si[di].pt.k.i)
                                                Si[di].pt.k.c = Si[di].cl;
                                            else
                                                for (yi = Si[di].pt.k.length,
                                                vi = 0; vi < yi; vi += 1)
                                                    Si[di].pt.k[vi].s && (Si[di].pt.k[vi].s[0].c = Si[di].cl),
                                                    Si[di].pt.k[vi].e && (Si[di].pt.k[vi].e[0].c = Si[di].cl)
                                    }
                                    si.ty === 4 && ni(si.shapes)
                                }
                            }
                            return function(ti) {
                                if (et(li, ti.v) && (ri(ti.layers),
                                ti.assets)) {
                                    var si, ci = ti.assets.length;
                                    for (si = 0; si < ci; si += 1)
                                        ti.assets[si].layers && ri(ti.assets[si].layers)
                                }
                            }
                        }();
                        function ui(li) {
                            li.__complete || (hi(li),
                            ei(li),
                            ii(li),
                            oi(li),
                            fi(li),
                            pe(li.layers, li.assets),
                            L(li.chars, li.assets),
                            li.__complete = !0)
                        }
                        function pi(li) {
                            li.t.a.length === 0 && "m"in li.t.p
                        }
                        var mi = {};
                        return mi.completeData = ui,
                        mi.checkColors = hi,
                        mi.checkChars = ii,
                        mi.checkPathProperties = oi,
                        mi.checkShapes = fi,
                        mi.completeLayers = pe,
                        mi
                    }
                    if (p.dataManager || (p.dataManager = x()),
                    p.assetLoader || (p.assetLoader = function() {
                        function pe(R) {
                            var M = R.getResponseHeader("content-type");
                            return M && R.responseType === "json" && M.indexOf("json") !== -1 || R.response && _typeof$5(R.response) === "object" ? R.response : R.response && typeof R.response == "string" ? JSON.parse(R.response) : R.responseText ? JSON.parse(R.responseText) : null
                        }
                        function L(R, M, Z, he) {
                            var et, ei = new XMLHttpRequest;
                            try {
                                ei.responseType = "json"
                            } catch {}
                            ei.onreadystatechange = function() {
                                if (ei.readyState === 4)
                                    if (ei.status === 200)
                                        et = pe(ei),
                                        Z(et);
                                    else
                                        try {
                                            et = pe(ei),
                                            Z(et)
                                        } catch (ii) {
                                            he && he(ii)
                                        }
                            }
                            ;
                            try {
                                ei.open(["G", "E", "T"].join(""), R, !0)
                            } catch {
                                ei.open(["G", "E", "T"].join(""), M + "/" + R, !0)
                            }
                            ei.send()
                        }
                        return {
                            load: L
                        }
                    }()),
                    J.data.type === "loadAnimation")
                        p.assetLoader.load(J.data.path, J.data.fullPath, function(pe) {
                            p.dataManager.completeData(pe),
                            p.postMessage({
                                id: J.data.id,
                                payload: pe,
                                status: "success"
                            })
                        }, function() {
                            p.postMessage({
                                id: J.data.id,
                                status: "error"
                            })
                        });
                    else if (J.data.type === "complete") {
                        var w = J.data.animation;
                        p.dataManager.completeData(w),
                        p.postMessage({
                            id: J.data.id,
                            payload: w,
                            status: "success"
                        })
                    } else
                        J.data.type === "loadData" && p.assetLoader.load(J.data.path, J.data.fullPath, function(pe) {
                            p.postMessage({
                                id: J.data.id,
                                payload: pe,
                                status: "success"
                            })
                        }, function() {
                            p.postMessage({
                                id: J.data.id,
                                status: "error"
                            })
                        })
                }),
                f.onmessage = function(P) {
                    var J = P.data
                      , x = J.id
                      , w = a[x];
                    a[x] = null,
                    J.status === "success" ? w.onComplete(J.payload) : w.onError && w.onError()
                }
                )
            }
            function g(P, J) {
                h += 1;
                var x = "processId_" + h;
                return a[x] = {
                    onComplete: P,
                    onError: J
                },
                x
            }
            function v(P, J, x) {
                m();
                var w = g(J, x);
                f.postMessage({
                    type: "loadAnimation",
                    path: P,
                    fullPath: window.location.origin + window.location.pathname,
                    id: w
                })
            }
            function _(P, J, x) {
                m();
                var w = g(J, x);
                f.postMessage({
                    type: "loadData",
                    path: P,
                    fullPath: window.location.origin + window.location.pathname,
                    id: w
                })
            }
            function b(P, J, x) {
                m();
                var w = g(J, x);
                f.postMessage({
                    type: "complete",
                    animation: P,
                    id: w
                })
            }
            return {
                loadAnimation: v,
                loadData: _,
                completeAnimation: b
            }
        }()
          , ImagePreloader = function() {
            var h = function() {
                var L = createTag("canvas");
                L.width = 1,
                L.height = 1;
                var R = L.getContext("2d");
                return R.fillStyle = "rgba(0,0,0,0)",
                R.fillRect(0, 0, 1, 1),
                L
            }();
            function a() {
                this.loadedAssets += 1,
                this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }
            function u() {
                this.loadedFootagesCount += 1,
                this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }
            function f(L, R, M) {
                var Z = "";
                if (L.e)
                    Z = L.p;
                else if (R) {
                    var he = L.p;
                    he.indexOf("images/") !== -1 && (he = he.split("/")[1]),
                    Z = R + he
                } else
                    Z = M,
                    Z += L.u ? L.u : "",
                    Z += L.p;
                return Z
            }
            function c(L) {
                var R = 0
                  , M = setInterval(function() {
                    var Z = L.getBBox();
                    (Z.width || R > 500) && (this._imageLoaded(),
                    clearInterval(M)),
                    R += 1
                }
                .bind(this), 50)
            }
            function p(L) {
                var R = f(L, this.assetsPath, this.path)
                  , M = createNS("image");
                isSafari ? this.testImageLoaded(M) : M.addEventListener("load", this._imageLoaded, !1),
                M.addEventListener("error", function() {
                    Z.img = h,
                    this._imageLoaded()
                }
                .bind(this), !1),
                M.setAttributeNS("http://www.w3.org/1999/xlink", "href", R),
                this._elementHelper.append ? this._elementHelper.append(M) : this._elementHelper.appendChild(M);
                var Z = {
                    img: M,
                    assetData: L
                };
                return Z
            }
            function d(L) {
                var R = f(L, this.assetsPath, this.path)
                  , M = createTag("img");
                M.crossOrigin = "anonymous",
                M.addEventListener("load", this._imageLoaded, !1),
                M.addEventListener("error", function() {
                    Z.img = h,
                    this._imageLoaded()
                }
                .bind(this), !1),
                M.src = R;
                var Z = {
                    img: M,
                    assetData: L
                };
                return Z
            }
            function m(L) {
                var R = {
                    assetData: L
                }
                  , M = f(L, this.assetsPath, this.path);
                return dataManager.loadData(M, function(Z) {
                    R.img = Z,
                    this._footageLoaded()
                }
                .bind(this), function() {
                    R.img = {},
                    this._footageLoaded()
                }
                .bind(this)),
                R
            }
            function g(L, R) {
                this.imagesLoadedCb = R;
                var M, Z = L.length;
                for (M = 0; M < Z; M += 1)
                    L[M].layers || (!L[M].t || L[M].t === "seq" ? (this.totalImages += 1,
                    this.images.push(this._createImageData(L[M]))) : L[M].t === 3 && (this.totalFootages += 1,
                    this.images.push(this.createFootageData(L[M]))))
            }
            function v(L) {
                this.path = L || ""
            }
            function _(L) {
                this.assetsPath = L || ""
            }
            function b(L) {
                for (var R = 0, M = this.images.length; R < M; ) {
                    if (this.images[R].assetData === L)
                        return this.images[R].img;
                    R += 1
                }
                return null
            }
            function P() {
                this.imagesLoadedCb = null,
                this.images.length = 0
            }
            function J() {
                return this.totalImages === this.loadedAssets
            }
            function x() {
                return this.totalFootages === this.loadedFootagesCount
            }
            function w(L, R) {
                L === "svg" ? (this._elementHelper = R,
                this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
            }
            function pe() {
                this._imageLoaded = a.bind(this),
                this._footageLoaded = u.bind(this),
                this.testImageLoaded = c.bind(this),
                this.createFootageData = m.bind(this),
                this.assetsPath = "",
                this.path = "",
                this.totalImages = 0,
                this.totalFootages = 0,
                this.loadedAssets = 0,
                this.loadedFootagesCount = 0,
                this.imagesLoadedCb = null,
                this.images = []
            }
            return pe.prototype = {
                loadAssets: g,
                setAssetsPath: _,
                setPath: v,
                loadedImages: J,
                loadedFootages: x,
                destroy: P,
                getAsset: b,
                createImgData: d,
                createImageData: p,
                imageLoaded: a,
                footageLoaded: u,
                setCacheType: w
            },
            pe
        }();
        function BaseEvent() {}
        BaseEvent.prototype = {
            triggerEvent: function(a, u) {
                if (this._cbs[a])
                    for (var f = this._cbs[a], c = 0; c < f.length; c += 1)
                        f[c](u)
            },
            addEventListener: function(a, u) {
                return this._cbs[a] || (this._cbs[a] = []),
                this._cbs[a].push(u),
                function() {
                    this.removeEventListener(a, u)
                }
                .bind(this)
            },
            removeEventListener: function(a, u) {
                if (!u)
                    this._cbs[a] = null;
                else if (this._cbs[a]) {
                    for (var f = 0, c = this._cbs[a].length; f < c; )
                        this._cbs[a][f] === u && (this._cbs[a].splice(f, 1),
                        f -= 1,
                        c -= 1),
                        f += 1;
                    this._cbs[a].length || (this._cbs[a] = null)
                }
            }
        };
        var markerParser = function() {
            function h(a) {
                for (var u = a.split(`\r
`), f = {}, c, p = 0, d = 0; d < u.length; d += 1)
                    c = u[d].split(":"),
                    c.length === 2 && (f[c[0]] = c[1].trim(),
                    p += 1);
                if (p === 0)
                    throw new Error;
                return f
            }
            return function(a) {
                for (var u = [], f = 0; f < a.length; f += 1) {
                    var c = a[f]
                      , p = {
                        time: c.tm,
                        duration: c.dr
                    };
                    try {
                        p.payload = JSON.parse(a[f].cm)
                    } catch {
                        try {
                            p.payload = h(a[f].cm)
                        } catch {
                            p.payload = {
                                name: a[f].cm
                            }
                        }
                    }
                    u.push(p)
                }
                return u
            }
        }()
          , ProjectInterface = function() {
            function h(a) {
                this.compositions.push(a)
            }
            return function() {
                function a(u) {
                    for (var f = 0, c = this.compositions.length; f < c; ) {
                        if (this.compositions[f].data && this.compositions[f].data.nm === u)
                            return this.compositions[f].prepareFrame && this.compositions[f].data.xt && this.compositions[f].prepareFrame(this.currentFrame),
                            this.compositions[f].compInterface;
                        f += 1
                    }
                    return null
                }
                return a.compositions = [],
                a.currentFrame = 0,
                a.registerComposition = h,
                a
            }
        }()
          , renderers = {}
          , registerRenderer = function(a, u) {
            renderers[a] = u
        };
        function getRenderer(h) {
            return renderers[h]
        }
        function getRegisteredRenderer() {
            if (renderers.canvas)
                return "canvas";
            for (var h in renderers)
                if (renderers[h])
                    return h;
            return ""
        }
        function _typeof$4(h) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(u) {
                return typeof u
            }
            : _typeof$4 = function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            _typeof$4(h)
        }
        var AnimationItem = function() {
            this._cbs = [],
            this.name = "",
            this.path = "",
            this.isLoaded = !1,
            this.currentFrame = 0,
            this.currentRawFrame = 0,
            this.firstFrame = 0,
            this.totalFrames = 0,
            this.frameRate = 0,
            this.frameMult = 0,
            this.playSpeed = 1,
            this.playDirection = 1,
            this.playCount = 0,
            this.animationData = {},
            this.assets = [],
            this.isPaused = !0,
            this.autoplay = !1,
            this.loop = !0,
            this.renderer = null,
            this.animationID = createElementID(),
            this.assetsPath = "",
            this.timeCompleted = 0,
            this.segmentPos = 0,
            this.isSubframeEnabled = getSubframeEnabled(),
            this.segments = [],
            this._idle = !0,
            this._completedLoop = !1,
            this.projectInterface = ProjectInterface(),
            this.imagePreloader = new ImagePreloader,
            this.audioController = audioControllerFactory(),
            this.markers = [],
            this.configAnimation = this.configAnimation.bind(this),
            this.onSetupError = this.onSetupError.bind(this),
            this.onSegmentComplete = this.onSegmentComplete.bind(this),
            this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame",0,0,0)
        };
        extendPrototype([BaseEvent], AnimationItem),
        AnimationItem.prototype.setParams = function(h) {
            (h.wrapper || h.container) && (this.wrapper = h.wrapper || h.container);
            var a = "svg";
            h.animType ? a = h.animType : h.renderer && (a = h.renderer);
            var u = getRenderer(a);
            this.renderer = new u(this,h.rendererSettings),
            this.imagePreloader.setCacheType(a, this.renderer.globalData.defs),
            this.renderer.setProjectInterface(this.projectInterface),
            this.animType = a,
            h.loop === "" || h.loop === null || h.loop === void 0 || h.loop === !0 ? this.loop = !0 : h.loop === !1 ? this.loop = !1 : this.loop = parseInt(h.loop, 10),
            this.autoplay = "autoplay"in h ? h.autoplay : !0,
            this.name = h.name ? h.name : "",
            this.autoloadSegments = Object.prototype.hasOwnProperty.call(h, "autoloadSegments") ? h.autoloadSegments : !0,
            this.assetsPath = h.assetsPath,
            this.initialSegment = h.initialSegment,
            h.audioFactory && this.audioController.setAudioFactory(h.audioFactory),
            h.animationData ? this.setupAnimation(h.animationData) : h.path && (h.path.lastIndexOf("\\") !== -1 ? this.path = h.path.substr(0, h.path.lastIndexOf("\\") + 1) : this.path = h.path.substr(0, h.path.lastIndexOf("/") + 1),
            this.fileName = h.path.substr(h.path.lastIndexOf("/") + 1),
            this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")),
            dataManager.loadAnimation(h.path, this.configAnimation, this.onSetupError))
        }
        ,
        AnimationItem.prototype.onSetupError = function() {
            this.trigger("data_failed")
        }
        ,
        AnimationItem.prototype.setupAnimation = function(h) {
            dataManager.completeAnimation(h, this.configAnimation)
        }
        ,
        AnimationItem.prototype.setData = function(h, a) {
            a && _typeof$4(a) !== "object" && (a = JSON.parse(a));
            var u = {
                wrapper: h,
                animationData: a
            }
              , f = h.attributes;
            u.path = f.getNamedItem("data-animation-path") ? f.getNamedItem("data-animation-path").value : f.getNamedItem("data-bm-path") ? f.getNamedItem("data-bm-path").value : f.getNamedItem("bm-path") ? f.getNamedItem("bm-path").value : "",
            u.animType = f.getNamedItem("data-anim-type") ? f.getNamedItem("data-anim-type").value : f.getNamedItem("data-bm-type") ? f.getNamedItem("data-bm-type").value : f.getNamedItem("bm-type") ? f.getNamedItem("bm-type").value : f.getNamedItem("data-bm-renderer") ? f.getNamedItem("data-bm-renderer").value : f.getNamedItem("bm-renderer") ? f.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
            var c = f.getNamedItem("data-anim-loop") ? f.getNamedItem("data-anim-loop").value : f.getNamedItem("data-bm-loop") ? f.getNamedItem("data-bm-loop").value : f.getNamedItem("bm-loop") ? f.getNamedItem("bm-loop").value : "";
            c === "false" ? u.loop = !1 : c === "true" ? u.loop = !0 : c !== "" && (u.loop = parseInt(c, 10));
            var p = f.getNamedItem("data-anim-autoplay") ? f.getNamedItem("data-anim-autoplay").value : f.getNamedItem("data-bm-autoplay") ? f.getNamedItem("data-bm-autoplay").value : f.getNamedItem("bm-autoplay") ? f.getNamedItem("bm-autoplay").value : !0;
            u.autoplay = p !== "false",
            u.name = f.getNamedItem("data-name") ? f.getNamedItem("data-name").value : f.getNamedItem("data-bm-name") ? f.getNamedItem("data-bm-name").value : f.getNamedItem("bm-name") ? f.getNamedItem("bm-name").value : "";
            var d = f.getNamedItem("data-anim-prerender") ? f.getNamedItem("data-anim-prerender").value : f.getNamedItem("data-bm-prerender") ? f.getNamedItem("data-bm-prerender").value : f.getNamedItem("bm-prerender") ? f.getNamedItem("bm-prerender").value : "";
            d === "false" && (u.prerender = !1),
            u.path ? this.setParams(u) : this.trigger("destroy")
        }
        ,
        AnimationItem.prototype.includeLayers = function(h) {
            h.op > this.animationData.op && (this.animationData.op = h.op,
            this.totalFrames = Math.floor(h.op - this.animationData.ip));
            var a = this.animationData.layers, u, f = a.length, c = h.layers, p, d = c.length;
            for (p = 0; p < d; p += 1)
                for (u = 0; u < f; ) {
                    if (a[u].id === c[p].id) {
                        a[u] = c[p];
                        break
                    }
                    u += 1
                }
            if ((h.chars || h.fonts) && (this.renderer.globalData.fontManager.addChars(h.chars),
            this.renderer.globalData.fontManager.addFonts(h.fonts, this.renderer.globalData.defs)),
            h.assets)
                for (f = h.assets.length,
                u = 0; u < f; u += 1)
                    this.animationData.assets.push(h.assets[u]);
            this.animationData.__complete = !1,
            dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }
        ,
        AnimationItem.prototype.onSegmentComplete = function(h) {
            this.animationData = h;
            var a = getExpressionsPlugin();
            a && a.initExpressions(this),
            this.loadNextSegment()
        }
        ,
        AnimationItem.prototype.loadNextSegment = function() {
            var h = this.animationData.segments;
            if (!h || h.length === 0 || !this.autoloadSegments) {
                this.trigger("data_ready"),
                this.timeCompleted = this.totalFrames;
                return
            }
            var a = h.shift();
            this.timeCompleted = a.time * this.frameRate;
            var u = this.path + this.fileName + "_" + this.segmentPos + ".json";
            this.segmentPos += 1,
            dataManager.loadData(u, this.includeLayers.bind(this), function() {
                this.trigger("data_failed")
            }
            .bind(this))
        }
        ,
        AnimationItem.prototype.loadSegments = function() {
            var h = this.animationData.segments;
            h || (this.timeCompleted = this.totalFrames),
            this.loadNextSegment()
        }
        ,
        AnimationItem.prototype.imagesLoaded = function() {
            this.trigger("loaded_images"),
            this.checkLoaded()
        }
        ,
        AnimationItem.prototype.preloadImages = function() {
            this.imagePreloader.setAssetsPath(this.assetsPath),
            this.imagePreloader.setPath(this.path),
            this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }
        ,
        AnimationItem.prototype.configAnimation = function(h) {
            if (this.renderer)
                try {
                    this.animationData = h,
                    this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]),
                    this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip),
                    this.firstFrame = Math.round(this.animationData.ip)),
                    this.renderer.configAnimation(h),
                    h.assets || (h.assets = []),
                    this.assets = this.animationData.assets,
                    this.frameRate = this.animationData.fr,
                    this.frameMult = this.animationData.fr / 1e3,
                    this.renderer.searchExtraCompositions(h.assets),
                    this.markers = markerParser(h.markers || []),
                    this.trigger("config_ready"),
                    this.preloadImages(),
                    this.loadSegments(),
                    this.updaFrameModifier(),
                    this.waitForFontsLoaded(),
                    this.isPaused && this.audioController.pause()
                } catch (a) {
                    this.triggerConfigError(a)
                }
        }
        ,
        AnimationItem.prototype.waitForFontsLoaded = function() {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }
        ,
        AnimationItem.prototype.checkLoaded = function() {
            if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
                this.isLoaded = !0;
                var h = getExpressionsPlugin();
                h && h.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(function() {
                    this.trigger("DOMLoaded")
                }
                .bind(this), 0),
                this.gotoFrame(),
                this.autoplay && this.play()
            }
        }
        ,
        AnimationItem.prototype.resize = function(h, a) {
            var u = typeof h == "number" ? h : void 0
              , f = typeof a == "number" ? a : void 0;
            this.renderer.updateContainerSize(u, f)
        }
        ,
        AnimationItem.prototype.setSubframe = function(h) {
            this.isSubframeEnabled = !!h
        }
        ,
        AnimationItem.prototype.gotoFrame = function() {
            this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
            this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
            this.trigger("enterFrame"),
            this.renderFrame(),
            this.trigger("drawnFrame")
        }
        ,
        AnimationItem.prototype.renderFrame = function() {
            if (!(this.isLoaded === !1 || !this.renderer))
                try {
                    this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                } catch (h) {
                    this.triggerRenderFrameError(h)
                }
        }
        ,
        AnimationItem.prototype.play = function(h) {
            h && this.name !== h || this.isPaused === !0 && (this.isPaused = !1,
            this.trigger("_pause"),
            this.audioController.resume(),
            this._idle && (this._idle = !1,
            this.trigger("_active")))
        }
        ,
        AnimationItem.prototype.pause = function(h) {
            h && this.name !== h || this.isPaused === !1 && (this.isPaused = !0,
            this.trigger("_play"),
            this._idle = !0,
            this.trigger("_idle"),
            this.audioController.pause())
        }
        ,
        AnimationItem.prototype.togglePause = function(h) {
            h && this.name !== h || (this.isPaused === !0 ? this.play() : this.pause())
        }
        ,
        AnimationItem.prototype.stop = function(h) {
            h && this.name !== h || (this.pause(),
            this.playCount = 0,
            this._completedLoop = !1,
            this.setCurrentRawFrameValue(0))
        }
        ,
        AnimationItem.prototype.getMarkerData = function(h) {
            for (var a, u = 0; u < this.markers.length; u += 1)
                if (a = this.markers[u],
                a.payload && a.payload.name === h)
                    return a;
            return null
        }
        ,
        AnimationItem.prototype.goToAndStop = function(h, a, u) {
            if (!(u && this.name !== u)) {
                var f = Number(h);
                if (isNaN(f)) {
                    var c = this.getMarkerData(h);
                    c && this.goToAndStop(c.time, !0)
                } else
                    a ? this.setCurrentRawFrameValue(h) : this.setCurrentRawFrameValue(h * this.frameModifier);
                this.pause()
            }
        }
        ,
        AnimationItem.prototype.goToAndPlay = function(h, a, u) {
            if (!(u && this.name !== u)) {
                var f = Number(h);
                if (isNaN(f)) {
                    var c = this.getMarkerData(h);
                    c && (c.duration ? this.playSegments([c.time, c.time + c.duration], !0) : this.goToAndStop(c.time, !0))
                } else
                    this.goToAndStop(f, a, u);
                this.play()
            }
        }
        ,
        AnimationItem.prototype.advanceTime = function(h) {
            if (!(this.isPaused === !0 || this.isLoaded === !1)) {
                var a = this.currentRawFrame + h * this.frameModifier
                  , u = !1;
                a >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(a > this.totalFrames ? a % this.totalFrames : 0) || (u = !0,
                a = this.totalFrames - 1) : a >= this.totalFrames ? (this.playCount += 1,
                this.checkSegments(a % this.totalFrames) || (this.setCurrentRawFrameValue(a % this.totalFrames),
                this._completedLoop = !0,
                this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(a) : a < 0 ? this.checkSegments(a % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + a % this.totalFrames),
                this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (u = !0,
                a = 0)) : this.setCurrentRawFrameValue(a),
                u && (this.setCurrentRawFrameValue(a),
                this.pause(),
                this.trigger("complete"))
            }
        }
        ,
        AnimationItem.prototype.adjustSegment = function(h, a) {
            this.playCount = 0,
            h[1] < h[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
            this.totalFrames = h[0] - h[1],
            this.timeCompleted = this.totalFrames,
            this.firstFrame = h[1],
            this.setCurrentRawFrameValue(this.totalFrames - .001 - a)) : h[1] > h[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
            this.totalFrames = h[1] - h[0],
            this.timeCompleted = this.totalFrames,
            this.firstFrame = h[0],
            this.setCurrentRawFrameValue(.001 + a)),
            this.trigger("segmentStart")
        }
        ,
        AnimationItem.prototype.setSegment = function(h, a) {
            var u = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < h ? u = h : this.currentRawFrame + this.firstFrame > a && (u = a - h)),
            this.firstFrame = h,
            this.totalFrames = a - h,
            this.timeCompleted = this.totalFrames,
            u !== -1 && this.goToAndStop(u, !0)
        }
        ,
        AnimationItem.prototype.playSegments = function(h, a) {
            if (a && (this.segments.length = 0),
            _typeof$4(h[0]) === "object") {
                var u, f = h.length;
                for (u = 0; u < f; u += 1)
                    this.segments.push(h[u])
            } else
                this.segments.push(h);
            this.segments.length && a && this.adjustSegment(this.segments.shift(), 0),
            this.isPaused && this.play()
        }
        ,
        AnimationItem.prototype.resetSegments = function(h) {
            this.segments.length = 0,
            this.segments.push([this.animationData.ip, this.animationData.op]),
            h && this.checkSegments(0)
        }
        ,
        AnimationItem.prototype.checkSegments = function(h) {
            return this.segments.length ? (this.adjustSegment(this.segments.shift(), h),
            !0) : !1
        }
        ,
        AnimationItem.prototype.destroy = function(h) {
            h && this.name !== h || !this.renderer || (this.renderer.destroy(),
            this.imagePreloader.destroy(),
            this.trigger("destroy"),
            this._cbs = null,
            this.onEnterFrame = null,
            this.onLoopComplete = null,
            this.onComplete = null,
            this.onSegmentStart = null,
            this.onDestroy = null,
            this.renderer = null,
            this.renderer = null,
            this.imagePreloader = null,
            this.projectInterface = null)
        }
        ,
        AnimationItem.prototype.setCurrentRawFrameValue = function(h) {
            this.currentRawFrame = h,
            this.gotoFrame()
        }
        ,
        AnimationItem.prototype.setSpeed = function(h) {
            this.playSpeed = h,
            this.updaFrameModifier()
        }
        ,
        AnimationItem.prototype.setDirection = function(h) {
            this.playDirection = h < 0 ? -1 : 1,
            this.updaFrameModifier()
        }
        ,
        AnimationItem.prototype.setLoop = function(h) {
            this.loop = h
        }
        ,
        AnimationItem.prototype.setVolume = function(h, a) {
            a && this.name !== a || this.audioController.setVolume(h)
        }
        ,
        AnimationItem.prototype.getVolume = function() {
            return this.audioController.getVolume()
        }
        ,
        AnimationItem.prototype.mute = function(h) {
            h && this.name !== h || this.audioController.mute()
        }
        ,
        AnimationItem.prototype.unmute = function(h) {
            h && this.name !== h || this.audioController.unmute()
        }
        ,
        AnimationItem.prototype.updaFrameModifier = function() {
            this.frameModifier = this.frameMult * this.playSpeed * this.playDirection,
            this.audioController.setRate(this.playSpeed * this.playDirection)
        }
        ,
        AnimationItem.prototype.getPath = function() {
            return this.path
        }
        ,
        AnimationItem.prototype.getAssetsPath = function(h) {
            var a = "";
            if (h.e)
                a = h.p;
            else if (this.assetsPath) {
                var u = h.p;
                u.indexOf("images/") !== -1 && (u = u.split("/")[1]),
                a = this.assetsPath + u
            } else
                a = this.path,
                a += h.u ? h.u : "",
                a += h.p;
            return a
        }
        ,
        AnimationItem.prototype.getAssetData = function(h) {
            for (var a = 0, u = this.assets.length; a < u; ) {
                if (h === this.assets[a].id)
                    return this.assets[a];
                a += 1
            }
            return null
        }
        ,
        AnimationItem.prototype.hide = function() {
            this.renderer.hide()
        }
        ,
        AnimationItem.prototype.show = function() {
            this.renderer.show()
        }
        ,
        AnimationItem.prototype.getDuration = function(h) {
            return h ? this.totalFrames : this.totalFrames / this.frameRate
        }
        ,
        AnimationItem.prototype.updateDocumentData = function(h, a, u) {
            try {
                var f = this.renderer.getElementByPath(h);
                f.updateDocumentData(a, u)
            } catch {}
        }
        ,
        AnimationItem.prototype.trigger = function(h) {
            if (this._cbs && this._cbs[h])
                switch (h) {
                case "enterFrame":
                    this.triggerEvent(h, new BMEnterFrameEvent(h,this.currentFrame,this.totalFrames,this.frameModifier));
                    break;
                case "drawnFrame":
                    this.drawnFrameEvent.currentTime = this.currentFrame,
                    this.drawnFrameEvent.totalTime = this.totalFrames,
                    this.drawnFrameEvent.direction = this.frameModifier,
                    this.triggerEvent(h, this.drawnFrameEvent);
                    break;
                case "loopComplete":
                    this.triggerEvent(h, new BMCompleteLoopEvent(h,this.loop,this.playCount,this.frameMult));
                    break;
                case "complete":
                    this.triggerEvent(h, new BMCompleteEvent(h,this.frameMult));
                    break;
                case "segmentStart":
                    this.triggerEvent(h, new BMSegmentStartEvent(h,this.firstFrame,this.totalFrames));
                    break;
                case "destroy":
                    this.triggerEvent(h, new BMDestroyEvent(h,this));
                    break;
                default:
                    this.triggerEvent(h)
                }
            h === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(h,this.currentFrame,this.totalFrames,this.frameMult)),
            h === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(h,this.loop,this.playCount,this.frameMult)),
            h === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(h,this.frameMult)),
            h === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(h,this.firstFrame,this.totalFrames)),
            h === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(h,this))
        }
        ,
        AnimationItem.prototype.triggerRenderFrameError = function(h) {
            var a = new BMRenderFrameErrorEvent(h,this.currentFrame);
            this.triggerEvent("error", a),
            this.onError && this.onError.call(this, a)
        }
        ,
        AnimationItem.prototype.triggerConfigError = function(h) {
            var a = new BMConfigErrorEvent(h,this.currentFrame);
            this.triggerEvent("error", a),
            this.onError && this.onError.call(this, a)
        }
        ;
        var animationManager = function() {
            var h = {}
              , a = []
              , u = 0
              , f = 0
              , c = 0
              , p = !0
              , d = !1;
            function m(ni) {
                for (var ri = 0, ti = ni.target; ri < f; )
                    a[ri].animation === ti && (a.splice(ri, 1),
                    ri -= 1,
                    f -= 1,
                    ti.isPaused || b()),
                    ri += 1
            }
            function g(ni, ri) {
                if (!ni)
                    return null;
                for (var ti = 0; ti < f; ) {
                    if (a[ti].elem === ni && a[ti].elem !== null)
                        return a[ti].animation;
                    ti += 1
                }
                var si = new AnimationItem;
                return P(si, ni),
                si.setData(ni, ri),
                si
            }
            function v() {
                var ni, ri = a.length, ti = [];
                for (ni = 0; ni < ri; ni += 1)
                    ti.push(a[ni].animation);
                return ti
            }
            function _() {
                c += 1,
                hi()
            }
            function b() {
                c -= 1
            }
            function P(ni, ri) {
                ni.addEventListener("destroy", m),
                ni.addEventListener("_active", _),
                ni.addEventListener("_idle", b),
                a.push({
                    elem: ri,
                    animation: ni
                }),
                f += 1
            }
            function J(ni) {
                var ri = new AnimationItem;
                return P(ri, null),
                ri.setParams(ni),
                ri
            }
            function x(ni, ri) {
                var ti;
                for (ti = 0; ti < f; ti += 1)
                    a[ti].animation.setSpeed(ni, ri)
            }
            function w(ni, ri) {
                var ti;
                for (ti = 0; ti < f; ti += 1)
                    a[ti].animation.setDirection(ni, ri)
            }
            function pe(ni) {
                var ri;
                for (ri = 0; ri < f; ri += 1)
                    a[ri].animation.play(ni)
            }
            function L(ni) {
                var ri = ni - u, ti;
                for (ti = 0; ti < f; ti += 1)
                    a[ti].animation.advanceTime(ri);
                u = ni,
                c && !d ? window.requestAnimationFrame(L) : p = !0
            }
            function R(ni) {
                u = ni,
                window.requestAnimationFrame(L)
            }
            function M(ni) {
                var ri;
                for (ri = 0; ri < f; ri += 1)
                    a[ri].animation.pause(ni)
            }
            function Z(ni, ri, ti) {
                var si;
                for (si = 0; si < f; si += 1)
                    a[si].animation.goToAndStop(ni, ri, ti)
            }
            function he(ni) {
                var ri;
                for (ri = 0; ri < f; ri += 1)
                    a[ri].animation.stop(ni)
            }
            function et(ni) {
                var ri;
                for (ri = 0; ri < f; ri += 1)
                    a[ri].animation.togglePause(ni)
            }
            function ei(ni) {
                var ri;
                for (ri = f - 1; ri >= 0; ri -= 1)
                    a[ri].animation.destroy(ni)
            }
            function ii(ni, ri, ti) {
                var si = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), ci, ai = si.length;
                for (ci = 0; ci < ai; ci += 1)
                    ti && si[ci].setAttribute("data-bm-type", ti),
                    g(si[ci], ni);
                if (ri && ai === 0) {
                    ti || (ti = "svg");
                    var di = document.getElementsByTagName("body")[0];
                    di.innerText = "";
                    var gi = createTag("div");
                    gi.style.width = "100%",
                    gi.style.height = "100%",
                    gi.setAttribute("data-bm-type", ti),
                    di.appendChild(gi),
                    g(gi, ni)
                }
            }
            function oi() {
                var ni;
                for (ni = 0; ni < f; ni += 1)
                    a[ni].animation.resize()
            }
            function hi() {
                !d && c && p && (window.requestAnimationFrame(R),
                p = !1)
            }
            function fi() {
                d = !0
            }
            function ui() {
                d = !1,
                hi()
            }
            function pi(ni, ri) {
                var ti;
                for (ti = 0; ti < f; ti += 1)
                    a[ti].animation.setVolume(ni, ri)
            }
            function mi(ni) {
                var ri;
                for (ri = 0; ri < f; ri += 1)
                    a[ri].animation.mute(ni)
            }
            function li(ni) {
                var ri;
                for (ri = 0; ri < f; ri += 1)
                    a[ri].animation.unmute(ni)
            }
            return h.registerAnimation = g,
            h.loadAnimation = J,
            h.setSpeed = x,
            h.setDirection = w,
            h.play = pe,
            h.pause = M,
            h.stop = he,
            h.togglePause = et,
            h.searchAnimations = ii,
            h.resize = oi,
            h.goToAndStop = Z,
            h.destroy = ei,
            h.freeze = fi,
            h.unfreeze = ui,
            h.setVolume = pi,
            h.mute = mi,
            h.unmute = li,
            h.getRegisteredAnimations = v,
            h
        }()
          , BezierFactory = function() {
            var h = {};
            h.getBezierEasing = u;
            var a = {};
            function u(R, M, Z, he, et) {
                var ei = et || ("bez_" + R + "_" + M + "_" + Z + "_" + he).replace(/\./g, "p");
                if (a[ei])
                    return a[ei];
                var ii = new L([R, M, Z, he]);
                return a[ei] = ii,
                ii
            }
            var f = 4
              , c = .001
              , p = 1e-7
              , d = 10
              , m = 11
              , g = 1 / (m - 1)
              , v = typeof Float32Array == "function";
            function _(R, M) {
                return 1 - 3 * M + 3 * R
            }
            function b(R, M) {
                return 3 * M - 6 * R
            }
            function P(R) {
                return 3 * R
            }
            function J(R, M, Z) {
                return ((_(M, Z) * R + b(M, Z)) * R + P(M)) * R
            }
            function x(R, M, Z) {
                return 3 * _(M, Z) * R * R + 2 * b(M, Z) * R + P(M)
            }
            function w(R, M, Z, he, et) {
                var ei, ii, oi = 0;
                do
                    ii = M + (Z - M) / 2,
                    ei = J(ii, he, et) - R,
                    ei > 0 ? Z = ii : M = ii;
                while (Math.abs(ei) > p && ++oi < d);
                return ii
            }
            function pe(R, M, Z, he) {
                for (var et = 0; et < f; ++et) {
                    var ei = x(M, Z, he);
                    if (ei === 0)
                        return M;
                    var ii = J(M, Z, he) - R;
                    M -= ii / ei
                }
                return M
            }
            function L(R) {
                this._p = R,
                this._mSampleValues = v ? new Float32Array(m) : new Array(m),
                this._precomputed = !1,
                this.get = this.get.bind(this)
            }
            return L.prototype = {
                get: function(M) {
                    var Z = this._p[0]
                      , he = this._p[1]
                      , et = this._p[2]
                      , ei = this._p[3];
                    return this._precomputed || this._precompute(),
                    Z === he && et === ei ? M : M === 0 ? 0 : M === 1 ? 1 : J(this._getTForX(M), he, ei)
                },
                _precompute: function() {
                    var M = this._p[0]
                      , Z = this._p[1]
                      , he = this._p[2]
                      , et = this._p[3];
                    this._precomputed = !0,
                    (M !== Z || he !== et) && this._calcSampleValues()
                },
                _calcSampleValues: function() {
                    for (var M = this._p[0], Z = this._p[2], he = 0; he < m; ++he)
                        this._mSampleValues[he] = J(he * g, M, Z)
                },
                _getTForX: function(M) {
                    for (var Z = this._p[0], he = this._p[2], et = this._mSampleValues, ei = 0, ii = 1, oi = m - 1; ii !== oi && et[ii] <= M; ++ii)
                        ei += g;
                    --ii;
                    var hi = (M - et[ii]) / (et[ii + 1] - et[ii])
                      , fi = ei + hi * g
                      , ui = x(fi, Z, he);
                    return ui >= c ? pe(M, fi, Z, he) : ui === 0 ? fi : w(M, ei, ei + g, Z, he)
                }
            },
            h
        }()
          , pooling = function() {
            function h(a) {
                return a.concat(createSizedArray(a.length))
            }
            return {
                double: h
            }
        }()
          , poolFactory = function() {
            return function(h, a, u) {
                var f = 0
                  , c = h
                  , p = createSizedArray(c)
                  , d = {
                    newElement: m,
                    release: g
                };
                function m() {
                    var v;
                    return f ? (f -= 1,
                    v = p[f]) : v = a(),
                    v
                }
                function g(v) {
                    f === c && (p = pooling.double(p),
                    c *= 2),
                    u && u(v),
                    p[f] = v,
                    f += 1
                }
                return d
            }
        }()
          , bezierLengthPool = function() {
            function h() {
                return {
                    addedLength: 0,
                    percents: createTypedArray("float32", getDefaultCurveSegments()),
                    lengths: createTypedArray("float32", getDefaultCurveSegments())
                }
            }
            return poolFactory(8, h)
        }()
          , segmentsLengthPool = function() {
            function h() {
                return {
                    lengths: [],
                    totalLength: 0
                }
            }
            function a(u) {
                var f, c = u.lengths.length;
                for (f = 0; f < c; f += 1)
                    bezierLengthPool.release(u.lengths[f]);
                u.lengths.length = 0
            }
            return poolFactory(8, h, a)
        }();
        function bezFunction() {
            var h = Math;
            function a(P, J, x, w, pe, L) {
                var R = P * w + J * pe + x * L - pe * w - L * P - x * J;
                return R > -.001 && R < .001
            }
            function u(P, J, x, w, pe, L, R, M, Z) {
                if (x === 0 && L === 0 && Z === 0)
                    return a(P, J, w, pe, R, M);
                var he = h.sqrt(h.pow(w - P, 2) + h.pow(pe - J, 2) + h.pow(L - x, 2)), et = h.sqrt(h.pow(R - P, 2) + h.pow(M - J, 2) + h.pow(Z - x, 2)), ei = h.sqrt(h.pow(R - w, 2) + h.pow(M - pe, 2) + h.pow(Z - L, 2)), ii;
                return he > et ? he > ei ? ii = he - et - ei : ii = ei - et - he : ei > et ? ii = ei - et - he : ii = et - he - ei,
                ii > -1e-4 && ii < 1e-4
            }
            var f = function() {
                return function(P, J, x, w) {
                    var pe = getDefaultCurveSegments(), L, R, M, Z, he, et = 0, ei, ii = [], oi = [], hi = bezierLengthPool.newElement();
                    for (M = x.length,
                    L = 0; L < pe; L += 1) {
                        for (he = L / (pe - 1),
                        ei = 0,
                        R = 0; R < M; R += 1)
                            Z = bmPow(1 - he, 3) * P[R] + 3 * bmPow(1 - he, 2) * he * x[R] + 3 * (1 - he) * bmPow(he, 2) * w[R] + bmPow(he, 3) * J[R],
                            ii[R] = Z,
                            oi[R] !== null && (ei += bmPow(ii[R] - oi[R], 2)),
                            oi[R] = ii[R];
                        ei && (ei = bmSqrt(ei),
                        et += ei),
                        hi.percents[L] = he,
                        hi.lengths[L] = et
                    }
                    return hi.addedLength = et,
                    hi
                }
            }();
            function c(P) {
                var J = segmentsLengthPool.newElement(), x = P.c, w = P.v, pe = P.o, L = P.i, R, M = P._length, Z = J.lengths, he = 0;
                for (R = 0; R < M - 1; R += 1)
                    Z[R] = f(w[R], w[R + 1], pe[R], L[R + 1]),
                    he += Z[R].addedLength;
                return x && M && (Z[R] = f(w[R], w[0], pe[R], L[0]),
                he += Z[R].addedLength),
                J.totalLength = he,
                J
            }
            function p(P) {
                this.segmentLength = 0,
                this.points = new Array(P)
            }
            function d(P, J) {
                this.partialLength = P,
                this.point = J
            }
            var m = function() {
                var P = {};
                return function(J, x, w, pe) {
                    var L = (J[0] + "_" + J[1] + "_" + x[0] + "_" + x[1] + "_" + w[0] + "_" + w[1] + "_" + pe[0] + "_" + pe[1]).replace(/\./g, "p");
                    if (!P[L]) {
                        var R = getDefaultCurveSegments(), M, Z, he, et, ei, ii = 0, oi, hi, fi = null;
                        J.length === 2 && (J[0] !== x[0] || J[1] !== x[1]) && a(J[0], J[1], x[0], x[1], J[0] + w[0], J[1] + w[1]) && a(J[0], J[1], x[0], x[1], x[0] + pe[0], x[1] + pe[1]) && (R = 2);
                        var ui = new p(R);
                        for (he = w.length,
                        M = 0; M < R; M += 1) {
                            for (hi = createSizedArray(he),
                            ei = M / (R - 1),
                            oi = 0,
                            Z = 0; Z < he; Z += 1)
                                et = bmPow(1 - ei, 3) * J[Z] + 3 * bmPow(1 - ei, 2) * ei * (J[Z] + w[Z]) + 3 * (1 - ei) * bmPow(ei, 2) * (x[Z] + pe[Z]) + bmPow(ei, 3) * x[Z],
                                hi[Z] = et,
                                fi !== null && (oi += bmPow(hi[Z] - fi[Z], 2));
                            oi = bmSqrt(oi),
                            ii += oi,
                            ui.points[M] = new d(oi,hi),
                            fi = hi
                        }
                        ui.segmentLength = ii,
                        P[L] = ui
                    }
                    return P[L]
                }
            }();
            function g(P, J) {
                var x = J.percents
                  , w = J.lengths
                  , pe = x.length
                  , L = bmFloor((pe - 1) * P)
                  , R = P * J.addedLength
                  , M = 0;
                if (L === pe - 1 || L === 0 || R === w[L])
                    return x[L];
                for (var Z = w[L] > R ? -1 : 1, he = !0; he; )
                    if (w[L] <= R && w[L + 1] > R ? (M = (R - w[L]) / (w[L + 1] - w[L]),
                    he = !1) : L += Z,
                    L < 0 || L >= pe - 1) {
                        if (L === pe - 1)
                            return x[L];
                        he = !1
                    }
                return x[L] + (x[L + 1] - x[L]) * M
            }
            function v(P, J, x, w, pe, L) {
                var R = g(pe, L)
                  , M = 1 - R
                  , Z = h.round((M * M * M * P[0] + (R * M * M + M * R * M + M * M * R) * x[0] + (R * R * M + M * R * R + R * M * R) * w[0] + R * R * R * J[0]) * 1e3) / 1e3
                  , he = h.round((M * M * M * P[1] + (R * M * M + M * R * M + M * M * R) * x[1] + (R * R * M + M * R * R + R * M * R) * w[1] + R * R * R * J[1]) * 1e3) / 1e3;
                return [Z, he]
            }
            var _ = createTypedArray("float32", 8);
            function b(P, J, x, w, pe, L, R) {
                pe < 0 ? pe = 0 : pe > 1 && (pe = 1);
                var M = g(pe, R);
                L = L > 1 ? 1 : L;
                var Z = g(L, R), he, et = P.length, ei = 1 - M, ii = 1 - Z, oi = ei * ei * ei, hi = M * ei * ei * 3, fi = M * M * ei * 3, ui = M * M * M, pi = ei * ei * ii, mi = M * ei * ii + ei * M * ii + ei * ei * Z, li = M * M * ii + ei * M * Z + M * ei * Z, ni = M * M * Z, ri = ei * ii * ii, ti = M * ii * ii + ei * Z * ii + ei * ii * Z, si = M * Z * ii + ei * Z * Z + M * ii * Z, ci = M * Z * Z, ai = ii * ii * ii, di = Z * ii * ii + ii * Z * ii + ii * ii * Z, gi = Z * Z * ii + ii * Z * Z + Z * ii * Z, vi = Z * Z * Z;
                for (he = 0; he < et; he += 1)
                    _[he * 4] = h.round((oi * P[he] + hi * x[he] + fi * w[he] + ui * J[he]) * 1e3) / 1e3,
                    _[he * 4 + 1] = h.round((pi * P[he] + mi * x[he] + li * w[he] + ni * J[he]) * 1e3) / 1e3,
                    _[he * 4 + 2] = h.round((ri * P[he] + ti * x[he] + si * w[he] + ci * J[he]) * 1e3) / 1e3,
                    _[he * 4 + 3] = h.round((ai * P[he] + di * x[he] + gi * w[he] + vi * J[he]) * 1e3) / 1e3;
                return _
            }
            return {
                getSegmentsLength: c,
                getNewSegment: b,
                getPointInSegment: v,
                buildBezierData: m,
                pointOnLine2D: a,
                pointOnLine3D: u
            }
        }
        var bez = bezFunction()
          , initFrame = initialDefaultFrame
          , mathAbs = Math.abs;
        function interpolateValue(h, a) {
            var u = this.offsetTime, f;
            this.propType === "multidimensional" && (f = createTypedArray("float32", this.pv.length));
            for (var c = a.lastIndex, p = c, d = this.keyframes.length - 1, m = !0, g, v, _; m; ) {
                if (g = this.keyframes[p],
                v = this.keyframes[p + 1],
                p === d - 1 && h >= v.t - u) {
                    g.h && (g = v),
                    c = 0;
                    break
                }
                if (v.t - u > h) {
                    c = p;
                    break
                }
                p < d - 1 ? p += 1 : (c = 0,
                m = !1)
            }
            _ = this.keyframesMetadata[p] || {};
            var b, P, J, x, w, pe, L = v.t - u, R = g.t - u, M;
            if (g.to) {
                _.bezierData || (_.bezierData = bez.buildBezierData(g.s, v.s || g.e, g.to, g.ti));
                var Z = _.bezierData;
                if (h >= L || h < R) {
                    var he = h >= L ? Z.points.length - 1 : 0;
                    for (P = Z.points[he].point.length,
                    b = 0; b < P; b += 1)
                        f[b] = Z.points[he].point[b]
                } else {
                    _.__fnct ? pe = _.__fnct : (pe = BezierFactory.getBezierEasing(g.o.x, g.o.y, g.i.x, g.i.y, g.n).get,
                    _.__fnct = pe),
                    J = pe((h - R) / (L - R));
                    var et = Z.segmentLength * J, ei, ii = a.lastFrame < h && a._lastKeyframeIndex === p ? a._lastAddedLength : 0;
                    for (w = a.lastFrame < h && a._lastKeyframeIndex === p ? a._lastPoint : 0,
                    m = !0,
                    x = Z.points.length; m; ) {
                        if (ii += Z.points[w].partialLength,
                        et === 0 || J === 0 || w === Z.points.length - 1) {
                            for (P = Z.points[w].point.length,
                            b = 0; b < P; b += 1)
                                f[b] = Z.points[w].point[b];
                            break
                        } else if (et >= ii && et < ii + Z.points[w + 1].partialLength) {
                            for (ei = (et - ii) / Z.points[w + 1].partialLength,
                            P = Z.points[w].point.length,
                            b = 0; b < P; b += 1)
                                f[b] = Z.points[w].point[b] + (Z.points[w + 1].point[b] - Z.points[w].point[b]) * ei;
                            break
                        }
                        w < x - 1 ? w += 1 : m = !1
                    }
                    a._lastPoint = w,
                    a._lastAddedLength = ii - Z.points[w].partialLength,
                    a._lastKeyframeIndex = p
                }
            } else {
                var oi, hi, fi, ui, pi;
                if (d = g.s.length,
                M = v.s || g.e,
                this.sh && g.h !== 1)
                    if (h >= L)
                        f[0] = M[0],
                        f[1] = M[1],
                        f[2] = M[2];
                    else if (h <= R)
                        f[0] = g.s[0],
                        f[1] = g.s[1],
                        f[2] = g.s[2];
                    else {
                        var mi = createQuaternion(g.s)
                          , li = createQuaternion(M)
                          , ni = (h - R) / (L - R);
                        quaternionToEuler(f, slerp(mi, li, ni))
                    }
                else
                    for (p = 0; p < d; p += 1)
                        g.h !== 1 && (h >= L ? J = 1 : h < R ? J = 0 : (g.o.x.constructor === Array ? (_.__fnct || (_.__fnct = []),
                        _.__fnct[p] ? pe = _.__fnct[p] : (oi = g.o.x[p] === void 0 ? g.o.x[0] : g.o.x[p],
                        hi = g.o.y[p] === void 0 ? g.o.y[0] : g.o.y[p],
                        fi = g.i.x[p] === void 0 ? g.i.x[0] : g.i.x[p],
                        ui = g.i.y[p] === void 0 ? g.i.y[0] : g.i.y[p],
                        pe = BezierFactory.getBezierEasing(oi, hi, fi, ui).get,
                        _.__fnct[p] = pe)) : _.__fnct ? pe = _.__fnct : (oi = g.o.x,
                        hi = g.o.y,
                        fi = g.i.x,
                        ui = g.i.y,
                        pe = BezierFactory.getBezierEasing(oi, hi, fi, ui).get,
                        g.keyframeMetadata = pe),
                        J = pe((h - R) / (L - R)))),
                        M = v.s || g.e,
                        pi = g.h === 1 ? g.s[p] : g.s[p] + (M[p] - g.s[p]) * J,
                        this.propType === "multidimensional" ? f[p] = pi : f = pi
            }
            return a.lastIndex = c,
            f
        }
        function slerp(h, a, u) {
            var f = [], c = h[0], p = h[1], d = h[2], m = h[3], g = a[0], v = a[1], _ = a[2], b = a[3], P, J, x, w, pe;
            return J = c * g + p * v + d * _ + m * b,
            J < 0 && (J = -J,
            g = -g,
            v = -v,
            _ = -_,
            b = -b),
            1 - J > 1e-6 ? (P = Math.acos(J),
            x = Math.sin(P),
            w = Math.sin((1 - u) * P) / x,
            pe = Math.sin(u * P) / x) : (w = 1 - u,
            pe = u),
            f[0] = w * c + pe * g,
            f[1] = w * p + pe * v,
            f[2] = w * d + pe * _,
            f[3] = w * m + pe * b,
            f
        }
        function quaternionToEuler(h, a) {
            var u = a[0]
              , f = a[1]
              , c = a[2]
              , p = a[3]
              , d = Math.atan2(2 * f * p - 2 * u * c, 1 - 2 * f * f - 2 * c * c)
              , m = Math.asin(2 * u * f + 2 * c * p)
              , g = Math.atan2(2 * u * p - 2 * f * c, 1 - 2 * u * u - 2 * c * c);
            h[0] = d / degToRads,
            h[1] = m / degToRads,
            h[2] = g / degToRads
        }
        function createQuaternion(h) {
            var a = h[0] * degToRads
              , u = h[1] * degToRads
              , f = h[2] * degToRads
              , c = Math.cos(a / 2)
              , p = Math.cos(u / 2)
              , d = Math.cos(f / 2)
              , m = Math.sin(a / 2)
              , g = Math.sin(u / 2)
              , v = Math.sin(f / 2)
              , _ = c * p * d - m * g * v
              , b = m * g * d + c * p * v
              , P = m * p * d + c * g * v
              , J = c * g * d - m * p * v;
            return [b, P, J, _]
        }
        function getValueAtCurrentTime() {
            var h = this.comp.renderedFrame - this.offsetTime
              , a = this.keyframes[0].t - this.offsetTime
              , u = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(h === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= u && h >= u || this._caching.lastFrame < a && h < a))) {
                this._caching.lastFrame >= h && (this._caching._lastKeyframeIndex = -1,
                this._caching.lastIndex = 0);
                var f = this.interpolateValue(h, this._caching);
                this.pv = f
            }
            return this._caching.lastFrame = h,
            this.pv
        }
        function setVValue(h) {
            var a;
            if (this.propType === "unidimensional")
                a = h * this.mult,
                mathAbs(this.v - a) > 1e-5 && (this.v = a,
                this._mdf = !0);
            else
                for (var u = 0, f = this.v.length; u < f; )
                    a = h[u] * this.mult,
                    mathAbs(this.v[u] - a) > 1e-5 && (this.v[u] = a,
                    this._mdf = !0),
                    u += 1
        }
        function processEffectsSequence() {
            if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
                if (this.lock) {
                    this.setVValue(this.pv);
                    return
                }
                this.lock = !0,
                this._mdf = this._isFirstFrame;
                var h, a = this.effectsSequence.length, u = this.kf ? this.pv : this.data.k;
                for (h = 0; h < a; h += 1)
                    u = this.effectsSequence[h](u);
                this.setVValue(u),
                this._isFirstFrame = !1,
                this.lock = !1,
                this.frameId = this.elem.globalData.frameId
            }
        }
        function addEffect(h) {
            this.effectsSequence.push(h),
            this.container.addDynamicProperty(this)
        }
        function ValueProperty(h, a, u, f) {
            this.propType = "unidimensional",
            this.mult = u || 1,
            this.data = a,
            this.v = u ? a.k * u : a.k,
            this.pv = a.k,
            this._mdf = !1,
            this.elem = h,
            this.container = f,
            this.comp = h.comp,
            this.k = !1,
            this.kf = !1,
            this.vel = 0,
            this.effectsSequence = [],
            this._isFirstFrame = !0,
            this.getValue = processEffectsSequence,
            this.setVValue = setVValue,
            this.addEffect = addEffect
        }
        function MultiDimensionalProperty(h, a, u, f) {
            this.propType = "multidimensional",
            this.mult = u || 1,
            this.data = a,
            this._mdf = !1,
            this.elem = h,
            this.container = f,
            this.comp = h.comp,
            this.k = !1,
            this.kf = !1,
            this.frameId = -1;
            var c, p = a.k.length;
            for (this.v = createTypedArray("float32", p),
            this.pv = createTypedArray("float32", p),
            this.vel = createTypedArray("float32", p),
            c = 0; c < p; c += 1)
                this.v[c] = a.k[c] * this.mult,
                this.pv[c] = a.k[c];
            this._isFirstFrame = !0,
            this.effectsSequence = [],
            this.getValue = processEffectsSequence,
            this.setVValue = setVValue,
            this.addEffect = addEffect
        }
        function KeyframedValueProperty(h, a, u, f) {
            this.propType = "unidimensional",
            this.keyframes = a.k,
            this.keyframesMetadata = [],
            this.offsetTime = h.data.st,
            this.frameId = -1,
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: 0,
                _lastKeyframeIndex: -1
            },
            this.k = !0,
            this.kf = !0,
            this.data = a,
            this.mult = u || 1,
            this.elem = h,
            this.container = f,
            this.comp = h.comp,
            this.v = initFrame,
            this.pv = initFrame,
            this._isFirstFrame = !0,
            this.getValue = processEffectsSequence,
            this.setVValue = setVValue,
            this.interpolateValue = interpolateValue,
            this.effectsSequence = [getValueAtCurrentTime.bind(this)],
            this.addEffect = addEffect
        }
        function KeyframedMultidimensionalProperty(h, a, u, f) {
            this.propType = "multidimensional";
            var c, p = a.k.length, d, m, g, v;
            for (c = 0; c < p - 1; c += 1)
                a.k[c].to && a.k[c].s && a.k[c + 1] && a.k[c + 1].s && (d = a.k[c].s,
                m = a.k[c + 1].s,
                g = a.k[c].to,
                v = a.k[c].ti,
                (d.length === 2 && !(d[0] === m[0] && d[1] === m[1]) && bez.pointOnLine2D(d[0], d[1], m[0], m[1], d[0] + g[0], d[1] + g[1]) && bez.pointOnLine2D(d[0], d[1], m[0], m[1], m[0] + v[0], m[1] + v[1]) || d.length === 3 && !(d[0] === m[0] && d[1] === m[1] && d[2] === m[2]) && bez.pointOnLine3D(d[0], d[1], d[2], m[0], m[1], m[2], d[0] + g[0], d[1] + g[1], d[2] + g[2]) && bez.pointOnLine3D(d[0], d[1], d[2], m[0], m[1], m[2], m[0] + v[0], m[1] + v[1], m[2] + v[2])) && (a.k[c].to = null,
                a.k[c].ti = null),
                d[0] === m[0] && d[1] === m[1] && g[0] === 0 && g[1] === 0 && v[0] === 0 && v[1] === 0 && (d.length === 2 || d[2] === m[2] && g[2] === 0 && v[2] === 0) && (a.k[c].to = null,
                a.k[c].ti = null));
            this.effectsSequence = [getValueAtCurrentTime.bind(this)],
            this.data = a,
            this.keyframes = a.k,
            this.keyframesMetadata = [],
            this.offsetTime = h.data.st,
            this.k = !0,
            this.kf = !0,
            this._isFirstFrame = !0,
            this.mult = u || 1,
            this.elem = h,
            this.container = f,
            this.comp = h.comp,
            this.getValue = processEffectsSequence,
            this.setVValue = setVValue,
            this.interpolateValue = interpolateValue,
            this.frameId = -1;
            var _ = a.k[0].s.length;
            for (this.v = createTypedArray("float32", _),
            this.pv = createTypedArray("float32", _),
            c = 0; c < _; c += 1)
                this.v[c] = initFrame,
                this.pv[c] = initFrame;
            this._caching = {
                lastFrame: initFrame,
                lastIndex: 0,
                value: createTypedArray("float32", _)
            },
            this.addEffect = addEffect
        }
        var PropertyFactory = function() {
            function h(u, f, c, p, d) {
                f.sid && (f = u.globalData.slotManager.getProp(f));
                var m;
                if (!f.k.length)
                    m = new ValueProperty(u,f,p,d);
                else if (typeof f.k[0] == "number")
                    m = new MultiDimensionalProperty(u,f,p,d);
                else
                    switch (c) {
                    case 0:
                        m = new KeyframedValueProperty(u,f,p,d);
                        break;
                    case 1:
                        m = new KeyframedMultidimensionalProperty(u,f,p,d);
                        break
                    }
                return m.effectsSequence.length && d.addDynamicProperty(m),
                m
            }
            var a = {
                getProp: h
            };
            return a
        }();
        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
            addDynamicProperty: function(a) {
                this.dynamicProperties.indexOf(a) === -1 && (this.dynamicProperties.push(a),
                this.container.addDynamicProperty(this),
                this._isAnimated = !0)
            },
            iterateDynamicProperties: function() {
                this._mdf = !1;
                var a, u = this.dynamicProperties.length;
                for (a = 0; a < u; a += 1)
                    this.dynamicProperties[a].getValue(),
                    this.dynamicProperties[a]._mdf && (this._mdf = !0)
            },
            initDynamicPropertyContainer: function(a) {
                this.container = a,
                this.dynamicProperties = [],
                this._mdf = !1,
                this._isAnimated = !1
            }
        };
        var pointPool = function() {
            function h() {
                return createTypedArray("float32", 2)
            }
            return poolFactory(8, h)
        }();
        function ShapePath() {
            this.c = !1,
            this._length = 0,
            this._maxLength = 8,
            this.v = createSizedArray(this._maxLength),
            this.o = createSizedArray(this._maxLength),
            this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(h, a) {
            this.c = h,
            this.setLength(a);
            for (var u = 0; u < a; )
                this.v[u] = pointPool.newElement(),
                this.o[u] = pointPool.newElement(),
                this.i[u] = pointPool.newElement(),
                u += 1
        }
        ,
        ShapePath.prototype.setLength = function(h) {
            for (; this._maxLength < h; )
                this.doubleArrayLength();
            this._length = h
        }
        ,
        ShapePath.prototype.doubleArrayLength = function() {
            this.v = this.v.concat(createSizedArray(this._maxLength)),
            this.i = this.i.concat(createSizedArray(this._maxLength)),
            this.o = this.o.concat(createSizedArray(this._maxLength)),
            this._maxLength *= 2
        }
        ,
        ShapePath.prototype.setXYAt = function(h, a, u, f, c) {
            var p;
            switch (this._length = Math.max(this._length, f + 1),
            this._length >= this._maxLength && this.doubleArrayLength(),
            u) {
            case "v":
                p = this.v;
                break;
            case "i":
                p = this.i;
                break;
            case "o":
                p = this.o;
                break;
            default:
                p = [];
                break
            }
            (!p[f] || p[f] && !c) && (p[f] = pointPool.newElement()),
            p[f][0] = h,
            p[f][1] = a
        }
        ,
        ShapePath.prototype.setTripleAt = function(h, a, u, f, c, p, d, m) {
            this.setXYAt(h, a, "v", d, m),
            this.setXYAt(u, f, "o", d, m),
            this.setXYAt(c, p, "i", d, m)
        }
        ,
        ShapePath.prototype.reverse = function() {
            var h = new ShapePath;
            h.setPathData(this.c, this._length);
            var a = this.v
              , u = this.o
              , f = this.i
              , c = 0;
            this.c && (h.setTripleAt(a[0][0], a[0][1], f[0][0], f[0][1], u[0][0], u[0][1], 0, !1),
            c = 1);
            var p = this._length - 1, d = this._length, m;
            for (m = c; m < d; m += 1)
                h.setTripleAt(a[p][0], a[p][1], f[p][0], f[p][1], u[p][0], u[p][1], m, !1),
                p -= 1;
            return h
        }
        ,
        ShapePath.prototype.length = function() {
            return this._length
        }
        ;
        var shapePool = function() {
            function h() {
                return new ShapePath
            }
            function a(c) {
                var p = c._length, d;
                for (d = 0; d < p; d += 1)
                    pointPool.release(c.v[d]),
                    pointPool.release(c.i[d]),
                    pointPool.release(c.o[d]),
                    c.v[d] = null,
                    c.i[d] = null,
                    c.o[d] = null;
                c._length = 0,
                c.c = !1
            }
            function u(c) {
                var p = f.newElement(), d, m = c._length === void 0 ? c.v.length : c._length;
                for (p.setLength(m),
                p.c = c.c,
                d = 0; d < m; d += 1)
                    p.setTripleAt(c.v[d][0], c.v[d][1], c.o[d][0], c.o[d][1], c.i[d][0], c.i[d][1], d);
                return p
            }
            var f = poolFactory(4, h, a);
            return f.clone = u,
            f
        }();
        function ShapeCollection() {
            this._length = 0,
            this._maxLength = 4,
            this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(h) {
            this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)),
            this._maxLength *= 2),
            this.shapes[this._length] = h,
            this._length += 1
        }
        ,
        ShapeCollection.prototype.releaseShapes = function() {
            var h;
            for (h = 0; h < this._length; h += 1)
                shapePool.release(this.shapes[h]);
            this._length = 0
        }
        ;
        var shapeCollectionPool = function() {
            var h = {
                newShapeCollection: c,
                release: p
            }
              , a = 0
              , u = 4
              , f = createSizedArray(u);
            function c() {
                var d;
                return a ? (a -= 1,
                d = f[a]) : d = new ShapeCollection,
                d
            }
            function p(d) {
                var m, g = d._length;
                for (m = 0; m < g; m += 1)
                    shapePool.release(d.shapes[m]);
                d._length = 0,
                a === u && (f = pooling.double(f),
                u *= 2),
                f[a] = d,
                a += 1
            }
            return h
        }()
          , ShapePropertyFactory = function() {
            var h = -999999;
            function a(L, R, M) {
                var Z = M.lastIndex, he, et, ei, ii, oi, hi, fi, ui, pi, mi = this.keyframes;
                if (L < mi[0].t - this.offsetTime)
                    he = mi[0].s[0],
                    ei = !0,
                    Z = 0;
                else if (L >= mi[mi.length - 1].t - this.offsetTime)
                    he = mi[mi.length - 1].s ? mi[mi.length - 1].s[0] : mi[mi.length - 2].e[0],
                    ei = !0;
                else {
                    for (var li = Z, ni = mi.length - 1, ri = !0, ti, si, ci; ri && (ti = mi[li],
                    si = mi[li + 1],
                    !(si.t - this.offsetTime > L)); )
                        li < ni - 1 ? li += 1 : ri = !1;
                    if (ci = this.keyframesMetadata[li] || {},
                    ei = ti.h === 1,
                    Z = li,
                    !ei) {
                        if (L >= si.t - this.offsetTime)
                            ui = 1;
                        else if (L < ti.t - this.offsetTime)
                            ui = 0;
                        else {
                            var ai;
                            ci.__fnct ? ai = ci.__fnct : (ai = BezierFactory.getBezierEasing(ti.o.x, ti.o.y, ti.i.x, ti.i.y).get,
                            ci.__fnct = ai),
                            ui = ai((L - (ti.t - this.offsetTime)) / (si.t - this.offsetTime - (ti.t - this.offsetTime)))
                        }
                        et = si.s ? si.s[0] : ti.e[0]
                    }
                    he = ti.s[0]
                }
                for (hi = R._length,
                fi = he.i[0].length,
                M.lastIndex = Z,
                ii = 0; ii < hi; ii += 1)
                    for (oi = 0; oi < fi; oi += 1)
                        pi = ei ? he.i[ii][oi] : he.i[ii][oi] + (et.i[ii][oi] - he.i[ii][oi]) * ui,
                        R.i[ii][oi] = pi,
                        pi = ei ? he.o[ii][oi] : he.o[ii][oi] + (et.o[ii][oi] - he.o[ii][oi]) * ui,
                        R.o[ii][oi] = pi,
                        pi = ei ? he.v[ii][oi] : he.v[ii][oi] + (et.v[ii][oi] - he.v[ii][oi]) * ui,
                        R.v[ii][oi] = pi
            }
            function u() {
                var L = this.comp.renderedFrame - this.offsetTime
                  , R = this.keyframes[0].t - this.offsetTime
                  , M = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
                  , Z = this._caching.lastFrame;
                return Z !== h && (Z < R && L < R || Z > M && L > M) || (this._caching.lastIndex = Z < L ? this._caching.lastIndex : 0,
                this.interpolateShape(L, this.pv, this._caching)),
                this._caching.lastFrame = L,
                this.pv
            }
            function f() {
                this.paths = this.localShapeCollection
            }
            function c(L, R) {
                if (L._length !== R._length || L.c !== R.c)
                    return !1;
                var M, Z = L._length;
                for (M = 0; M < Z; M += 1)
                    if (L.v[M][0] !== R.v[M][0] || L.v[M][1] !== R.v[M][1] || L.o[M][0] !== R.o[M][0] || L.o[M][1] !== R.o[M][1] || L.i[M][0] !== R.i[M][0] || L.i[M][1] !== R.i[M][1])
                        return !1;
                return !0
            }
            function p(L) {
                c(this.v, L) || (this.v = shapePool.clone(L),
                this.localShapeCollection.releaseShapes(),
                this.localShapeCollection.addShape(this.v),
                this._mdf = !0,
                this.paths = this.localShapeCollection)
            }
            function d() {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (!this.effectsSequence.length) {
                        this._mdf = !1;
                        return
                    }
                    if (this.lock) {
                        this.setVValue(this.pv);
                        return
                    }
                    this.lock = !0,
                    this._mdf = !1;
                    var L;
                    this.kf ? L = this.pv : this.data.ks ? L = this.data.ks.k : L = this.data.pt.k;
                    var R, M = this.effectsSequence.length;
                    for (R = 0; R < M; R += 1)
                        L = this.effectsSequence[R](L);
                    this.setVValue(L),
                    this.lock = !1,
                    this.frameId = this.elem.globalData.frameId
                }
            }
            function m(L, R, M) {
                this.propType = "shape",
                this.comp = L.comp,
                this.container = L,
                this.elem = L,
                this.data = R,
                this.k = !1,
                this.kf = !1,
                this._mdf = !1;
                var Z = M === 3 ? R.pt.k : R.ks.k;
                this.v = shapePool.clone(Z),
                this.pv = shapePool.clone(this.v),
                this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                this.paths = this.localShapeCollection,
                this.paths.addShape(this.v),
                this.reset = f,
                this.effectsSequence = []
            }
            function g(L) {
                this.effectsSequence.push(L),
                this.container.addDynamicProperty(this)
            }
            m.prototype.interpolateShape = a,
            m.prototype.getValue = d,
            m.prototype.setVValue = p,
            m.prototype.addEffect = g;
            function v(L, R, M) {
                this.propType = "shape",
                this.comp = L.comp,
                this.elem = L,
                this.container = L,
                this.offsetTime = L.data.st,
                this.keyframes = M === 3 ? R.pt.k : R.ks.k,
                this.keyframesMetadata = [],
                this.k = !0,
                this.kf = !0;
                var Z = this.keyframes[0].s[0].i.length;
                this.v = shapePool.newElement(),
                this.v.setPathData(this.keyframes[0].s[0].c, Z),
                this.pv = shapePool.clone(this.v),
                this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                this.paths = this.localShapeCollection,
                this.paths.addShape(this.v),
                this.lastFrame = h,
                this.reset = f,
                this._caching = {
                    lastFrame: h,
                    lastIndex: 0
                },
                this.effectsSequence = [u.bind(this)]
            }
            v.prototype.getValue = d,
            v.prototype.interpolateShape = a,
            v.prototype.setVValue = p,
            v.prototype.addEffect = g;
            var _ = function() {
                var L = roundCorner;
                function R(M, Z) {
                    this.v = shapePool.newElement(),
                    this.v.setPathData(!0, 4),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.paths = this.localShapeCollection,
                    this.localShapeCollection.addShape(this.v),
                    this.d = Z.d,
                    this.elem = M,
                    this.comp = M.comp,
                    this.frameId = -1,
                    this.initDynamicPropertyContainer(M),
                    this.p = PropertyFactory.getProp(M, Z.p, 1, 0, this),
                    this.s = PropertyFactory.getProp(M, Z.s, 1, 0, this),
                    this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                    this.convertEllToPath())
                }
                return R.prototype = {
                    reset: f,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertEllToPath())
                    },
                    convertEllToPath: function() {
                        var Z = this.p.v[0]
                          , he = this.p.v[1]
                          , et = this.s.v[0] / 2
                          , ei = this.s.v[1] / 2
                          , ii = this.d !== 3
                          , oi = this.v;
                        oi.v[0][0] = Z,
                        oi.v[0][1] = he - ei,
                        oi.v[1][0] = ii ? Z + et : Z - et,
                        oi.v[1][1] = he,
                        oi.v[2][0] = Z,
                        oi.v[2][1] = he + ei,
                        oi.v[3][0] = ii ? Z - et : Z + et,
                        oi.v[3][1] = he,
                        oi.i[0][0] = ii ? Z - et * L : Z + et * L,
                        oi.i[0][1] = he - ei,
                        oi.i[1][0] = ii ? Z + et : Z - et,
                        oi.i[1][1] = he - ei * L,
                        oi.i[2][0] = ii ? Z + et * L : Z - et * L,
                        oi.i[2][1] = he + ei,
                        oi.i[3][0] = ii ? Z - et : Z + et,
                        oi.i[3][1] = he + ei * L,
                        oi.o[0][0] = ii ? Z + et * L : Z - et * L,
                        oi.o[0][1] = he - ei,
                        oi.o[1][0] = ii ? Z + et : Z - et,
                        oi.o[1][1] = he + ei * L,
                        oi.o[2][0] = ii ? Z - et * L : Z + et * L,
                        oi.o[2][1] = he + ei,
                        oi.o[3][0] = ii ? Z - et : Z + et,
                        oi.o[3][1] = he - ei * L
                    }
                },
                extendPrototype([DynamicPropertyContainer], R),
                R
            }()
              , b = function() {
                function L(R, M) {
                    this.v = shapePool.newElement(),
                    this.v.setPathData(!0, 0),
                    this.elem = R,
                    this.comp = R.comp,
                    this.data = M,
                    this.frameId = -1,
                    this.d = M.d,
                    this.initDynamicPropertyContainer(R),
                    M.sy === 1 ? (this.ir = PropertyFactory.getProp(R, M.ir, 0, 0, this),
                    this.is = PropertyFactory.getProp(R, M.is, 0, .01, this),
                    this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
                    this.pt = PropertyFactory.getProp(R, M.pt, 0, 0, this),
                    this.p = PropertyFactory.getProp(R, M.p, 1, 0, this),
                    this.r = PropertyFactory.getProp(R, M.r, 0, degToRads, this),
                    this.or = PropertyFactory.getProp(R, M.or, 0, 0, this),
                    this.os = PropertyFactory.getProp(R, M.os, 0, .01, this),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.localShapeCollection.addShape(this.v),
                    this.paths = this.localShapeCollection,
                    this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                    this.convertToPath())
                }
                return L.prototype = {
                    reset: f,
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertToPath())
                    },
                    convertStarToPath: function() {
                        var M = Math.floor(this.pt.v) * 2, Z = Math.PI * 2 / M, he = !0, et = this.or.v, ei = this.ir.v, ii = this.os.v, oi = this.is.v, hi = 2 * Math.PI * et / (M * 2), fi = 2 * Math.PI * ei / (M * 2), ui, pi, mi, li, ni = -Math.PI / 2;
                        ni += this.r.v;
                        var ri = this.data.d === 3 ? -1 : 1;
                        for (this.v._length = 0,
                        ui = 0; ui < M; ui += 1) {
                            pi = he ? et : ei,
                            mi = he ? ii : oi,
                            li = he ? hi : fi;
                            var ti = pi * Math.cos(ni)
                              , si = pi * Math.sin(ni)
                              , ci = ti === 0 && si === 0 ? 0 : si / Math.sqrt(ti * ti + si * si)
                              , ai = ti === 0 && si === 0 ? 0 : -ti / Math.sqrt(ti * ti + si * si);
                            ti += +this.p.v[0],
                            si += +this.p.v[1],
                            this.v.setTripleAt(ti, si, ti - ci * li * mi * ri, si - ai * li * mi * ri, ti + ci * li * mi * ri, si + ai * li * mi * ri, ui, !0),
                            he = !he,
                            ni += Z * ri
                        }
                    },
                    convertPolygonToPath: function() {
                        var M = Math.floor(this.pt.v), Z = Math.PI * 2 / M, he = this.or.v, et = this.os.v, ei = 2 * Math.PI * he / (M * 4), ii, oi = -Math.PI * .5, hi = this.data.d === 3 ? -1 : 1;
                        for (oi += this.r.v,
                        this.v._length = 0,
                        ii = 0; ii < M; ii += 1) {
                            var fi = he * Math.cos(oi)
                              , ui = he * Math.sin(oi)
                              , pi = fi === 0 && ui === 0 ? 0 : ui / Math.sqrt(fi * fi + ui * ui)
                              , mi = fi === 0 && ui === 0 ? 0 : -fi / Math.sqrt(fi * fi + ui * ui);
                            fi += +this.p.v[0],
                            ui += +this.p.v[1],
                            this.v.setTripleAt(fi, ui, fi - pi * ei * et * hi, ui - mi * ei * et * hi, fi + pi * ei * et * hi, ui + mi * ei * et * hi, ii, !0),
                            oi += Z * hi
                        }
                        this.paths.length = 0,
                        this.paths[0] = this.v
                    }
                },
                extendPrototype([DynamicPropertyContainer], L),
                L
            }()
              , P = function() {
                function L(R, M) {
                    this.v = shapePool.newElement(),
                    this.v.c = !0,
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.localShapeCollection.addShape(this.v),
                    this.paths = this.localShapeCollection,
                    this.elem = R,
                    this.comp = R.comp,
                    this.frameId = -1,
                    this.d = M.d,
                    this.initDynamicPropertyContainer(R),
                    this.p = PropertyFactory.getProp(R, M.p, 1, 0, this),
                    this.s = PropertyFactory.getProp(R, M.s, 1, 0, this),
                    this.r = PropertyFactory.getProp(R, M.r, 0, 0, this),
                    this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                    this.convertRectToPath())
                }
                return L.prototype = {
                    convertRectToPath: function() {
                        var M = this.p.v[0]
                          , Z = this.p.v[1]
                          , he = this.s.v[0] / 2
                          , et = this.s.v[1] / 2
                          , ei = bmMin(he, et, this.r.v)
                          , ii = ei * (1 - roundCorner);
                        this.v._length = 0,
                        this.d === 2 || this.d === 1 ? (this.v.setTripleAt(M + he, Z - et + ei, M + he, Z - et + ei, M + he, Z - et + ii, 0, !0),
                        this.v.setTripleAt(M + he, Z + et - ei, M + he, Z + et - ii, M + he, Z + et - ei, 1, !0),
                        ei !== 0 ? (this.v.setTripleAt(M + he - ei, Z + et, M + he - ei, Z + et, M + he - ii, Z + et, 2, !0),
                        this.v.setTripleAt(M - he + ei, Z + et, M - he + ii, Z + et, M - he + ei, Z + et, 3, !0),
                        this.v.setTripleAt(M - he, Z + et - ei, M - he, Z + et - ei, M - he, Z + et - ii, 4, !0),
                        this.v.setTripleAt(M - he, Z - et + ei, M - he, Z - et + ii, M - he, Z - et + ei, 5, !0),
                        this.v.setTripleAt(M - he + ei, Z - et, M - he + ei, Z - et, M - he + ii, Z - et, 6, !0),
                        this.v.setTripleAt(M + he - ei, Z - et, M + he - ii, Z - et, M + he - ei, Z - et, 7, !0)) : (this.v.setTripleAt(M - he, Z + et, M - he + ii, Z + et, M - he, Z + et, 2),
                        this.v.setTripleAt(M - he, Z - et, M - he, Z - et + ii, M - he, Z - et, 3))) : (this.v.setTripleAt(M + he, Z - et + ei, M + he, Z - et + ii, M + he, Z - et + ei, 0, !0),
                        ei !== 0 ? (this.v.setTripleAt(M + he - ei, Z - et, M + he - ei, Z - et, M + he - ii, Z - et, 1, !0),
                        this.v.setTripleAt(M - he + ei, Z - et, M - he + ii, Z - et, M - he + ei, Z - et, 2, !0),
                        this.v.setTripleAt(M - he, Z - et + ei, M - he, Z - et + ei, M - he, Z - et + ii, 3, !0),
                        this.v.setTripleAt(M - he, Z + et - ei, M - he, Z + et - ii, M - he, Z + et - ei, 4, !0),
                        this.v.setTripleAt(M - he + ei, Z + et, M - he + ei, Z + et, M - he + ii, Z + et, 5, !0),
                        this.v.setTripleAt(M + he - ei, Z + et, M + he - ii, Z + et, M + he - ei, Z + et, 6, !0),
                        this.v.setTripleAt(M + he, Z + et - ei, M + he, Z + et - ei, M + he, Z + et - ii, 7, !0)) : (this.v.setTripleAt(M - he, Z - et, M - he + ii, Z - et, M - he, Z - et, 1, !0),
                        this.v.setTripleAt(M - he, Z + et, M - he, Z + et - ii, M - he, Z + et, 2, !0),
                        this.v.setTripleAt(M + he, Z + et, M + he - ii, Z + et, M + he, Z + et, 3, !0)))
                    },
                    getValue: function() {
                        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                        this.iterateDynamicProperties(),
                        this._mdf && this.convertRectToPath())
                    },
                    reset: f
                },
                extendPrototype([DynamicPropertyContainer], L),
                L
            }();
            function J(L, R, M) {
                var Z;
                if (M === 3 || M === 4) {
                    var he = M === 3 ? R.pt : R.ks
                      , et = he.k;
                    et.length ? Z = new v(L,R,M) : Z = new m(L,R,M)
                } else
                    M === 5 ? Z = new P(L,R) : M === 6 ? Z = new _(L,R) : M === 7 && (Z = new b(L,R));
                return Z.k && L.addDynamicProperty(Z),
                Z
            }
            function x() {
                return m
            }
            function w() {
                return v
            }
            var pe = {};
            return pe.getShapeProp = J,
            pe.getConstructorFunction = x,
            pe.getKeyframedConstructorFunction = w,
            pe
        }();
        /*!
 Transformation Matrix v2.0
 (c) Epistemex 2014-2015
 www.epistemex.com
 By Ken Fyrstenberg
 Contributions by leeoniya.
 License: MIT, header required.
 */
        var Matrix = function() {
            var h = Math.cos
              , a = Math.sin
              , u = Math.tan
              , f = Math.round;
            function c() {
                return this.props[0] = 1,
                this.props[1] = 0,
                this.props[2] = 0,
                this.props[3] = 0,
                this.props[4] = 0,
                this.props[5] = 1,
                this.props[6] = 0,
                this.props[7] = 0,
                this.props[8] = 0,
                this.props[9] = 0,
                this.props[10] = 1,
                this.props[11] = 0,
                this.props[12] = 0,
                this.props[13] = 0,
                this.props[14] = 0,
                this.props[15] = 1,
                this
            }
            function p(ri) {
                if (ri === 0)
                    return this;
                var ti = h(ri)
                  , si = a(ri);
                return this._t(ti, -si, 0, 0, si, ti, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }
            function d(ri) {
                if (ri === 0)
                    return this;
                var ti = h(ri)
                  , si = a(ri);
                return this._t(1, 0, 0, 0, 0, ti, -si, 0, 0, si, ti, 0, 0, 0, 0, 1)
            }
            function m(ri) {
                if (ri === 0)
                    return this;
                var ti = h(ri)
                  , si = a(ri);
                return this._t(ti, 0, si, 0, 0, 1, 0, 0, -si, 0, ti, 0, 0, 0, 0, 1)
            }
            function g(ri) {
                if (ri === 0)
                    return this;
                var ti = h(ri)
                  , si = a(ri);
                return this._t(ti, -si, 0, 0, si, ti, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }
            function v(ri, ti) {
                return this._t(1, ti, ri, 1, 0, 0)
            }
            function _(ri, ti) {
                return this.shear(u(ri), u(ti))
            }
            function b(ri, ti) {
                var si = h(ti)
                  , ci = a(ti);
                return this._t(si, ci, 0, 0, -ci, si, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, u(ri), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(si, -ci, 0, 0, ci, si, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }
            function P(ri, ti, si) {
                return !si && si !== 0 && (si = 1),
                ri === 1 && ti === 1 && si === 1 ? this : this._t(ri, 0, 0, 0, 0, ti, 0, 0, 0, 0, si, 0, 0, 0, 0, 1)
            }
            function J(ri, ti, si, ci, ai, di, gi, vi, yi, Si, Ci, Di, Ti, Ei, wi, xi) {
                return this.props[0] = ri,
                this.props[1] = ti,
                this.props[2] = si,
                this.props[3] = ci,
                this.props[4] = ai,
                this.props[5] = di,
                this.props[6] = gi,
                this.props[7] = vi,
                this.props[8] = yi,
                this.props[9] = Si,
                this.props[10] = Ci,
                this.props[11] = Di,
                this.props[12] = Ti,
                this.props[13] = Ei,
                this.props[14] = wi,
                this.props[15] = xi,
                this
            }
            function x(ri, ti, si) {
                return si = si || 0,
                ri !== 0 || ti !== 0 || si !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ri, ti, si, 1) : this
            }
            function w(ri, ti, si, ci, ai, di, gi, vi, yi, Si, Ci, Di, Ti, Ei, wi, xi) {
                var _i = this.props;
                if (ri === 1 && ti === 0 && si === 0 && ci === 0 && ai === 0 && di === 1 && gi === 0 && vi === 0 && yi === 0 && Si === 0 && Ci === 1 && Di === 0)
                    return _i[12] = _i[12] * ri + _i[15] * Ti,
                    _i[13] = _i[13] * di + _i[15] * Ei,
                    _i[14] = _i[14] * Ci + _i[15] * wi,
                    _i[15] *= xi,
                    this._identityCalculated = !1,
                    this;
                var Pi = _i[0]
                  , ki = _i[1]
                  , Ri = _i[2]
                  , Li = _i[3]
                  , Fi = _i[4]
                  , Ii = _i[5]
                  , Oi = _i[6]
                  , bi = _i[7]
                  , Bi = _i[8]
                  , Ni = _i[9]
                  , Ai = _i[10]
                  , Vi = _i[11]
                  , Mi = _i[12]
                  , zi = _i[13]
                  , $i = _i[14]
                  , Hi = _i[15];
                return _i[0] = Pi * ri + ki * ai + Ri * yi + Li * Ti,
                _i[1] = Pi * ti + ki * di + Ri * Si + Li * Ei,
                _i[2] = Pi * si + ki * gi + Ri * Ci + Li * wi,
                _i[3] = Pi * ci + ki * vi + Ri * Di + Li * xi,
                _i[4] = Fi * ri + Ii * ai + Oi * yi + bi * Ti,
                _i[5] = Fi * ti + Ii * di + Oi * Si + bi * Ei,
                _i[6] = Fi * si + Ii * gi + Oi * Ci + bi * wi,
                _i[7] = Fi * ci + Ii * vi + Oi * Di + bi * xi,
                _i[8] = Bi * ri + Ni * ai + Ai * yi + Vi * Ti,
                _i[9] = Bi * ti + Ni * di + Ai * Si + Vi * Ei,
                _i[10] = Bi * si + Ni * gi + Ai * Ci + Vi * wi,
                _i[11] = Bi * ci + Ni * vi + Ai * Di + Vi * xi,
                _i[12] = Mi * ri + zi * ai + $i * yi + Hi * Ti,
                _i[13] = Mi * ti + zi * di + $i * Si + Hi * Ei,
                _i[14] = Mi * si + zi * gi + $i * Ci + Hi * wi,
                _i[15] = Mi * ci + zi * vi + $i * Di + Hi * xi,
                this._identityCalculated = !1,
                this
            }
            function pe() {
                return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1),
                this._identityCalculated = !0),
                this._identity
            }
            function L(ri) {
                for (var ti = 0; ti < 16; ) {
                    if (ri.props[ti] !== this.props[ti])
                        return !1;
                    ti += 1
                }
                return !0
            }
            function R(ri) {
                var ti;
                for (ti = 0; ti < 16; ti += 1)
                    ri.props[ti] = this.props[ti];
                return ri
            }
            function M(ri) {
                var ti;
                for (ti = 0; ti < 16; ti += 1)
                    this.props[ti] = ri[ti]
            }
            function Z(ri, ti, si) {
                return {
                    x: ri * this.props[0] + ti * this.props[4] + si * this.props[8] + this.props[12],
                    y: ri * this.props[1] + ti * this.props[5] + si * this.props[9] + this.props[13],
                    z: ri * this.props[2] + ti * this.props[6] + si * this.props[10] + this.props[14]
                }
            }
            function he(ri, ti, si) {
                return ri * this.props[0] + ti * this.props[4] + si * this.props[8] + this.props[12]
            }
            function et(ri, ti, si) {
                return ri * this.props[1] + ti * this.props[5] + si * this.props[9] + this.props[13]
            }
            function ei(ri, ti, si) {
                return ri * this.props[2] + ti * this.props[6] + si * this.props[10] + this.props[14]
            }
            function ii() {
                var ri = this.props[0] * this.props[5] - this.props[1] * this.props[4]
                  , ti = this.props[5] / ri
                  , si = -this.props[1] / ri
                  , ci = -this.props[4] / ri
                  , ai = this.props[0] / ri
                  , di = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / ri
                  , gi = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / ri
                  , vi = new Matrix;
                return vi.props[0] = ti,
                vi.props[1] = si,
                vi.props[4] = ci,
                vi.props[5] = ai,
                vi.props[12] = di,
                vi.props[13] = gi,
                vi
            }
            function oi(ri) {
                var ti = this.getInverseMatrix();
                return ti.applyToPointArray(ri[0], ri[1], ri[2] || 0)
            }
            function hi(ri) {
                var ti, si = ri.length, ci = [];
                for (ti = 0; ti < si; ti += 1)
                    ci[ti] = oi(ri[ti]);
                return ci
            }
            function fi(ri, ti, si) {
                var ci = createTypedArray("float32", 6);
                if (this.isIdentity())
                    ci[0] = ri[0],
                    ci[1] = ri[1],
                    ci[2] = ti[0],
                    ci[3] = ti[1],
                    ci[4] = si[0],
                    ci[5] = si[1];
                else {
                    var ai = this.props[0]
                      , di = this.props[1]
                      , gi = this.props[4]
                      , vi = this.props[5]
                      , yi = this.props[12]
                      , Si = this.props[13];
                    ci[0] = ri[0] * ai + ri[1] * gi + yi,
                    ci[1] = ri[0] * di + ri[1] * vi + Si,
                    ci[2] = ti[0] * ai + ti[1] * gi + yi,
                    ci[3] = ti[0] * di + ti[1] * vi + Si,
                    ci[4] = si[0] * ai + si[1] * gi + yi,
                    ci[5] = si[0] * di + si[1] * vi + Si
                }
                return ci
            }
            function ui(ri, ti, si) {
                var ci;
                return this.isIdentity() ? ci = [ri, ti, si] : ci = [ri * this.props[0] + ti * this.props[4] + si * this.props[8] + this.props[12], ri * this.props[1] + ti * this.props[5] + si * this.props[9] + this.props[13], ri * this.props[2] + ti * this.props[6] + si * this.props[10] + this.props[14]],
                ci
            }
            function pi(ri, ti) {
                if (this.isIdentity())
                    return ri + "," + ti;
                var si = this.props;
                return Math.round((ri * si[0] + ti * si[4] + si[12]) * 100) / 100 + "," + Math.round((ri * si[1] + ti * si[5] + si[13]) * 100) / 100
            }
            function mi() {
                for (var ri = 0, ti = this.props, si = "matrix3d(", ci = 1e4; ri < 16; )
                    si += f(ti[ri] * ci) / ci,
                    si += ri === 15 ? ")" : ",",
                    ri += 1;
                return si
            }
            function li(ri) {
                var ti = 1e4;
                return ri < 1e-6 && ri > 0 || ri > -1e-6 && ri < 0 ? f(ri * ti) / ti : ri
            }
            function ni() {
                var ri = this.props
                  , ti = li(ri[0])
                  , si = li(ri[1])
                  , ci = li(ri[4])
                  , ai = li(ri[5])
                  , di = li(ri[12])
                  , gi = li(ri[13]);
                return "matrix(" + ti + "," + si + "," + ci + "," + ai + "," + di + "," + gi + ")"
            }
            return function() {
                this.reset = c,
                this.rotate = p,
                this.rotateX = d,
                this.rotateY = m,
                this.rotateZ = g,
                this.skew = _,
                this.skewFromAxis = b,
                this.shear = v,
                this.scale = P,
                this.setTransform = J,
                this.translate = x,
                this.transform = w,
                this.applyToPoint = Z,
                this.applyToX = he,
                this.applyToY = et,
                this.applyToZ = ei,
                this.applyToPointArray = ui,
                this.applyToTriplePoints = fi,
                this.applyToPointStringified = pi,
                this.toCSS = mi,
                this.to2dCSS = ni,
                this.clone = R,
                this.cloneFromProps = M,
                this.equals = L,
                this.inversePoints = hi,
                this.inversePoint = oi,
                this.getInverseMatrix = ii,
                this._t = this.transform,
                this.isIdentity = pe,
                this._identity = !0,
                this._identityCalculated = !1,
                this.props = createTypedArray("float32", 16),
                this.reset()
            }
        }();
        function _typeof$3(h) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(u) {
                return typeof u
            }
            : _typeof$3 = function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            _typeof$3(h)
        }
        var lottie = {};
        function setLocation(h) {
            setLocationHref(h)
        }
        function searchAnimations() {
            animationManager.searchAnimations()
        }
        function setSubframeRendering(h) {
            setSubframeEnabled(h)
        }
        function setPrefix(h) {
            setIdPrefix(h)
        }
        function loadAnimation(h) {
            return animationManager.loadAnimation(h)
        }
        function setQuality(h) {
            if (typeof h == "string")
                switch (h) {
                case "high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case "medium":
                    setDefaultCurveSegments(50);
                    break;
                case "low":
                    setDefaultCurveSegments(10);
                    break
                }
            else
                !isNaN(h) && h > 1 && setDefaultCurveSegments(h)
        }
        function inBrowser() {
            return typeof navigator < "u"
        }
        function installPlugin(h, a) {
            h === "expressions" && setExpressionsPlugin(a)
        }
        function getFactory(h) {
            switch (h) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix;
            default:
                return null
            }
        }
        lottie.play = animationManager.play,
        lottie.pause = animationManager.pause,
        lottie.setLocationHref = setLocation,
        lottie.togglePause = animationManager.togglePause,
        lottie.setSpeed = animationManager.setSpeed,
        lottie.setDirection = animationManager.setDirection,
        lottie.stop = animationManager.stop,
        lottie.searchAnimations = searchAnimations,
        lottie.registerAnimation = animationManager.registerAnimation,
        lottie.loadAnimation = loadAnimation,
        lottie.setSubframeRendering = setSubframeRendering,
        lottie.resize = animationManager.resize,
        lottie.goToAndStop = animationManager.goToAndStop,
        lottie.destroy = animationManager.destroy,
        lottie.setQuality = setQuality,
        lottie.inBrowser = inBrowser,
        lottie.installPlugin = installPlugin,
        lottie.freeze = animationManager.freeze,
        lottie.unfreeze = animationManager.unfreeze,
        lottie.setVolume = animationManager.setVolume,
        lottie.mute = animationManager.mute,
        lottie.unmute = animationManager.unmute,
        lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations,
        lottie.useWebWorker = setWebWorker,
        lottie.setIDPrefix = setPrefix,
        lottie.__getFactory = getFactory,
        lottie.version = "5.11.0";
        function checkReady() {
            document.readyState === "complete" && (clearInterval(readyStateCheckInterval),
            searchAnimations())
        }
        function getQueryVariable(h) {
            for (var a = queryString.split("&"), u = 0; u < a.length; u += 1) {
                var f = a[u].split("=");
                if (decodeURIComponent(f[0]) == h)
                    return decodeURIComponent(f[1])
            }
            return null
        }
        var queryString = "";
        {
            var scripts = document.getElementsByTagName("script")
              , index = scripts.length - 1
              , myScript = scripts[index] || {
                src: ""
            };
            queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "",
            getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
            _typeof$3(exports) !== "object" && (window.bodymovin = lottie)
        } catch (h) {}
        var ShapeModifiers = function() {
            var h = {}
              , a = {};
            h.registerModifier = u,
            h.getModifier = f;
            function u(c, p) {
                a[c] || (a[c] = p)
            }
            function f(c, p, d) {
                return new a[c](p,d)
            }
            return h
        }();
        function ShapeModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}
        ,
        ShapeModifier.prototype.addShapeToModifier = function() {}
        ,
        ShapeModifier.prototype.addShape = function(h) {
            if (!this.closed) {
                h.sh.container.addDynamicProperty(h.sh);
                var a = {
                    shape: h.sh,
                    data: h,
                    localShapeCollection: shapeCollectionPool.newShapeCollection()
                };
                this.shapes.push(a),
                this.addShapeToModifier(a),
                this._isAnimated && h.setAsAnimated()
            }
        }
        ,
        ShapeModifier.prototype.init = function(h, a) {
            this.shapes = [],
            this.elem = h,
            this.initDynamicPropertyContainer(h),
            this.initModifierProperties(h, a),
            this.frameId = initialDefaultFrame,
            this.closed = !1,
            this.k = !1,
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }
        ,
        ShapeModifier.prototype.processKeys = function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
            this.iterateDynamicProperties())
        }
        ,
        extendPrototype([DynamicPropertyContainer], ShapeModifier);
        function TrimModifier() {}
        extendPrototype([ShapeModifier], TrimModifier),
        TrimModifier.prototype.initModifierProperties = function(h, a) {
            this.s = PropertyFactory.getProp(h, a.s, 0, .01, this),
            this.e = PropertyFactory.getProp(h, a.e, 0, .01, this),
            this.o = PropertyFactory.getProp(h, a.o, 0, 0, this),
            this.sValue = 0,
            this.eValue = 0,
            this.getValue = this.processKeys,
            this.m = a.m,
            this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }
        ,
        TrimModifier.prototype.addShapeToModifier = function(h) {
            h.pathsData = []
        }
        ,
        TrimModifier.prototype.calculateShapeEdges = function(h, a, u, f, c) {
            var p = [];
            a <= 1 ? p.push({
                s: h,
                e: a
            }) : h >= 1 ? p.push({
                s: h - 1,
                e: a - 1
            }) : (p.push({
                s: h,
                e: 1
            }),
            p.push({
                s: 0,
                e: a - 1
            }));
            var d = [], m, g = p.length, v;
            for (m = 0; m < g; m += 1)
                if (v = p[m],
                !(v.e * c < f || v.s * c > f + u)) {
                    var _, b;
                    v.s * c <= f ? _ = 0 : _ = (v.s * c - f) / u,
                    v.e * c >= f + u ? b = 1 : b = (v.e * c - f) / u,
                    d.push([_, b])
                }
            return d.length || d.push([0, 0]),
            d
        }
        ,
        TrimModifier.prototype.releasePathsData = function(h) {
            var a, u = h.length;
            for (a = 0; a < u; a += 1)
                segmentsLengthPool.release(h[a]);
            return h.length = 0,
            h
        }
        ,
        TrimModifier.prototype.processShapes = function(h) {
            var a, u;
            if (this._mdf || h) {
                var f = this.o.v % 360 / 360;
                if (f < 0 && (f += 1),
                this.s.v > 1 ? a = 1 + f : this.s.v < 0 ? a = 0 + f : a = this.s.v + f,
                this.e.v > 1 ? u = 1 + f : this.e.v < 0 ? u = 0 + f : u = this.e.v + f,
                a > u) {
                    var c = a;
                    a = u,
                    u = c
                }
                a = Math.round(a * 1e4) * 1e-4,
                u = Math.round(u * 1e4) * 1e-4,
                this.sValue = a,
                this.eValue = u
            } else
                a = this.sValue,
                u = this.eValue;
            var p, d, m = this.shapes.length, g, v, _, b, P, J = 0;
            if (u === a)
                for (d = 0; d < m; d += 1)
                    this.shapes[d].localShapeCollection.releaseShapes(),
                    this.shapes[d].shape._mdf = !0,
                    this.shapes[d].shape.paths = this.shapes[d].localShapeCollection,
                    this._mdf && (this.shapes[d].pathsData.length = 0);
            else if (u === 1 && a === 0 || u === 0 && a === 1) {
                if (this._mdf)
                    for (d = 0; d < m; d += 1)
                        this.shapes[d].pathsData.length = 0,
                        this.shapes[d].shape._mdf = !0
            } else {
                var x = [], w, pe;
                for (d = 0; d < m; d += 1)
                    if (w = this.shapes[d],
                    !w.shape._mdf && !this._mdf && !h && this.m !== 2)
                        w.shape.paths = w.localShapeCollection;
                    else {
                        if (p = w.shape.paths,
                        v = p._length,
                        P = 0,
                        !w.shape._mdf && w.pathsData.length)
                            P = w.totalShapeLength;
                        else {
                            for (_ = this.releasePathsData(w.pathsData),
                            g = 0; g < v; g += 1)
                                b = bez.getSegmentsLength(p.shapes[g]),
                                _.push(b),
                                P += b.totalLength;
                            w.totalShapeLength = P,
                            w.pathsData = _
                        }
                        J += P,
                        w.shape._mdf = !0
                    }
                var L = a, R = u, M = 0, Z;
                for (d = m - 1; d >= 0; d -= 1)
                    if (w = this.shapes[d],
                    w.shape._mdf) {
                        for (pe = w.localShapeCollection,
                        pe.releaseShapes(),
                        this.m === 2 && m > 1 ? (Z = this.calculateShapeEdges(a, u, w.totalShapeLength, M, J),
                        M += w.totalShapeLength) : Z = [[L, R]],
                        v = Z.length,
                        g = 0; g < v; g += 1) {
                            L = Z[g][0],
                            R = Z[g][1],
                            x.length = 0,
                            R <= 1 ? x.push({
                                s: w.totalShapeLength * L,
                                e: w.totalShapeLength * R
                            }) : L >= 1 ? x.push({
                                s: w.totalShapeLength * (L - 1),
                                e: w.totalShapeLength * (R - 1)
                            }) : (x.push({
                                s: w.totalShapeLength * L,
                                e: w.totalShapeLength
                            }),
                            x.push({
                                s: 0,
                                e: w.totalShapeLength * (R - 1)
                            }));
                            var he = this.addShapes(w, x[0]);
                            if (x[0].s !== x[0].e) {
                                if (x.length > 1) {
                                    var et = w.shape.paths.shapes[w.shape.paths._length - 1];
                                    if (et.c) {
                                        var ei = he.pop();
                                        this.addPaths(he, pe),
                                        he = this.addShapes(w, x[1], ei)
                                    } else
                                        this.addPaths(he, pe),
                                        he = this.addShapes(w, x[1])
                                }
                                this.addPaths(he, pe)
                            }
                        }
                        w.shape.paths = pe
                    }
            }
        }
        ,
        TrimModifier.prototype.addPaths = function(h, a) {
            var u, f = h.length;
            for (u = 0; u < f; u += 1)
                a.addShape(h[u])
        }
        ,
        TrimModifier.prototype.addSegment = function(h, a, u, f, c, p, d) {
            c.setXYAt(a[0], a[1], "o", p),
            c.setXYAt(u[0], u[1], "i", p + 1),
            d && c.setXYAt(h[0], h[1], "v", p),
            c.setXYAt(f[0], f[1], "v", p + 1)
        }
        ,
        TrimModifier.prototype.addSegmentFromArray = function(h, a, u, f) {
            a.setXYAt(h[1], h[5], "o", u),
            a.setXYAt(h[2], h[6], "i", u + 1),
            f && a.setXYAt(h[0], h[4], "v", u),
            a.setXYAt(h[3], h[7], "v", u + 1)
        }
        ,
        TrimModifier.prototype.addShapes = function(h, a, u) {
            var f = h.pathsData, c = h.shape.paths.shapes, p, d = h.shape.paths._length, m, g, v = 0, _, b, P, J, x = [], w, pe = !0;
            for (u ? (b = u._length,
            w = u._length) : (u = shapePool.newElement(),
            b = 0,
            w = 0),
            x.push(u),
            p = 0; p < d; p += 1) {
                for (P = f[p].lengths,
                u.c = c[p].c,
                g = c[p].c ? P.length : P.length + 1,
                m = 1; m < g; m += 1)
                    if (_ = P[m - 1],
                    v + _.addedLength < a.s)
                        v += _.addedLength,
                        u.c = !1;
                    else if (v > a.e) {
                        u.c = !1;
                        break
                    } else
                        a.s <= v && a.e >= v + _.addedLength ? (this.addSegment(c[p].v[m - 1], c[p].o[m - 1], c[p].i[m], c[p].v[m], u, b, pe),
                        pe = !1) : (J = bez.getNewSegment(c[p].v[m - 1], c[p].v[m], c[p].o[m - 1], c[p].i[m], (a.s - v) / _.addedLength, (a.e - v) / _.addedLength, P[m - 1]),
                        this.addSegmentFromArray(J, u, b, pe),
                        pe = !1,
                        u.c = !1),
                        v += _.addedLength,
                        b += 1;
                if (c[p].c && P.length) {
                    if (_ = P[m - 1],
                    v <= a.e) {
                        var L = P[m - 1].addedLength;
                        a.s <= v && a.e >= v + L ? (this.addSegment(c[p].v[m - 1], c[p].o[m - 1], c[p].i[0], c[p].v[0], u, b, pe),
                        pe = !1) : (J = bez.getNewSegment(c[p].v[m - 1], c[p].v[0], c[p].o[m - 1], c[p].i[0], (a.s - v) / L, (a.e - v) / L, P[m - 1]),
                        this.addSegmentFromArray(J, u, b, pe),
                        pe = !1,
                        u.c = !1)
                    } else
                        u.c = !1;
                    v += _.addedLength,
                    b += 1
                }
                if (u._length && (u.setXYAt(u.v[w][0], u.v[w][1], "i", w),
                u.setXYAt(u.v[u._length - 1][0], u.v[u._length - 1][1], "o", u._length - 1)),
                v > a.e)
                    break;
                p < d - 1 && (u = shapePool.newElement(),
                pe = !0,
                x.push(u),
                b = 0)
            }
            return x
        }
        ;
        function PuckerAndBloatModifier() {}
        extendPrototype([ShapeModifier], PuckerAndBloatModifier),
        PuckerAndBloatModifier.prototype.initModifierProperties = function(h, a) {
            this.getValue = this.processKeys,
            this.amount = PropertyFactory.getProp(h, a.a, 0, null, this),
            this._isAnimated = !!this.amount.effectsSequence.length
        }
        ,
        PuckerAndBloatModifier.prototype.processPath = function(h, a) {
            var u = a / 100
              , f = [0, 0]
              , c = h._length
              , p = 0;
            for (p = 0; p < c; p += 1)
                f[0] += h.v[p][0],
                f[1] += h.v[p][1];
            f[0] /= c,
            f[1] /= c;
            var d = shapePool.newElement();
            d.c = h.c;
            var m, g, v, _, b, P;
            for (p = 0; p < c; p += 1)
                m = h.v[p][0] + (f[0] - h.v[p][0]) * u,
                g = h.v[p][1] + (f[1] - h.v[p][1]) * u,
                v = h.o[p][0] + (f[0] - h.o[p][0]) * -u,
                _ = h.o[p][1] + (f[1] - h.o[p][1]) * -u,
                b = h.i[p][0] + (f[0] - h.i[p][0]) * -u,
                P = h.i[p][1] + (f[1] - h.i[p][1]) * -u,
                d.setTripleAt(m, g, v, _, b, P, p);
            return d
        }
        ,
        PuckerAndBloatModifier.prototype.processShapes = function(h) {
            var a, u, f = this.shapes.length, c, p, d = this.amount.v;
            if (d !== 0) {
                var m, g;
                for (u = 0; u < f; u += 1) {
                    if (m = this.shapes[u],
                    g = m.localShapeCollection,
                    !(!m.shape._mdf && !this._mdf && !h))
                        for (g.releaseShapes(),
                        m.shape._mdf = !0,
                        a = m.shape.paths.shapes,
                        p = m.shape.paths._length,
                        c = 0; c < p; c += 1)
                            g.addShape(this.processPath(a[c], d));
                    m.shape.paths = m.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ;
        var TransformPropertyFactory = function() {
            var h = [0, 0];
            function a(g) {
                var v = this._mdf;
                this.iterateDynamicProperties(),
                this._mdf = this._mdf || v,
                this.a && g.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                this.s && g.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                this.sk && g.skewFromAxis(-this.sk.v, this.sa.v),
                this.r ? g.rotate(-this.r.v) : g.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                this.data.p.s ? this.data.p.z ? g.translate(this.px.v, this.py.v, -this.pz.v) : g.translate(this.px.v, this.py.v, 0) : g.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            }
            function u(g) {
                if (this.elem.globalData.frameId !== this.frameId) {
                    if (this._isDirty && (this.precalculateMatrix(),
                    this._isDirty = !1),
                    this.iterateDynamicProperties(),
                    this._mdf || g) {
                        var v;
                        if (this.v.cloneFromProps(this.pre.props),
                        this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                        this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                        this.autoOriented) {
                            var _, b;
                            if (v = this.elem.globalData.frameRate,
                            this.p && this.p.keyframes && this.p.getValueAtTime)
                                this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (_ = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / v, 0),
                                b = this.p.getValueAtTime(this.p.keyframes[0].t / v, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (_ = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / v, 0),
                                b = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / v, 0)) : (_ = this.p.pv,
                                b = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / v, this.p.offsetTime));
                            else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                _ = [],
                                b = [];
                                var P = this.px
                                  , J = this.py;
                                P._caching.lastFrame + P.offsetTime <= P.keyframes[0].t ? (_[0] = P.getValueAtTime((P.keyframes[0].t + .01) / v, 0),
                                _[1] = J.getValueAtTime((J.keyframes[0].t + .01) / v, 0),
                                b[0] = P.getValueAtTime(P.keyframes[0].t / v, 0),
                                b[1] = J.getValueAtTime(J.keyframes[0].t / v, 0)) : P._caching.lastFrame + P.offsetTime >= P.keyframes[P.keyframes.length - 1].t ? (_[0] = P.getValueAtTime(P.keyframes[P.keyframes.length - 1].t / v, 0),
                                _[1] = J.getValueAtTime(J.keyframes[J.keyframes.length - 1].t / v, 0),
                                b[0] = P.getValueAtTime((P.keyframes[P.keyframes.length - 1].t - .01) / v, 0),
                                b[1] = J.getValueAtTime((J.keyframes[J.keyframes.length - 1].t - .01) / v, 0)) : (_ = [P.pv, J.pv],
                                b[0] = P.getValueAtTime((P._caching.lastFrame + P.offsetTime - .01) / v, P.offsetTime),
                                b[1] = J.getValueAtTime((J._caching.lastFrame + J.offsetTime - .01) / v, J.offsetTime))
                            } else
                                b = h,
                                _ = b;
                            this.v.rotate(-Math.atan2(_[1] - b[1], _[0] - b[0]))
                        }
                        this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    }
                    this.frameId = this.elem.globalData.frameId
                }
            }
            function f() {
                if (!this.a.k)
                    this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                    this.appliedTransformations = 1;
                else
                    return;
                if (!this.s.effectsSequence.length)
                    this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                    this.appliedTransformations = 2;
                else
                    return;
                if (this.sk)
                    if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length)
                        this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                        this.appliedTransformations = 3;
                    else
                        return;
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v),
                this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                this.appliedTransformations = 4)
            }
            function c() {}
            function p(g) {
                this._addDynamicProperty(g),
                this.elem.addDynamicProperty(g),
                this._isDirty = !0
            }
            function d(g, v, _) {
                if (this.elem = g,
                this.frameId = -1,
                this.propType = "transform",
                this.data = v,
                this.v = new Matrix,
                this.pre = new Matrix,
                this.appliedTransformations = 0,
                this.initDynamicPropertyContainer(_ || g),
                v.p && v.p.s ? (this.px = PropertyFactory.getProp(g, v.p.x, 0, 0, this),
                this.py = PropertyFactory.getProp(g, v.p.y, 0, 0, this),
                v.p.z && (this.pz = PropertyFactory.getProp(g, v.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(g, v.p || {
                    k: [0, 0, 0]
                }, 1, 0, this),
                v.rx) {
                    if (this.rx = PropertyFactory.getProp(g, v.rx, 0, degToRads, this),
                    this.ry = PropertyFactory.getProp(g, v.ry, 0, degToRads, this),
                    this.rz = PropertyFactory.getProp(g, v.rz, 0, degToRads, this),
                    v.or.k[0].ti) {
                        var b, P = v.or.k.length;
                        for (b = 0; b < P; b += 1)
                            v.or.k[b].to = null,
                            v.or.k[b].ti = null
                    }
                    this.or = PropertyFactory.getProp(g, v.or, 1, degToRads, this),
                    this.or.sh = !0
                } else
                    this.r = PropertyFactory.getProp(g, v.r || {
                        k: 0
                    }, 0, degToRads, this);
                v.sk && (this.sk = PropertyFactory.getProp(g, v.sk, 0, degToRads, this),
                this.sa = PropertyFactory.getProp(g, v.sa, 0, degToRads, this)),
                this.a = PropertyFactory.getProp(g, v.a || {
                    k: [0, 0, 0]
                }, 1, 0, this),
                this.s = PropertyFactory.getProp(g, v.s || {
                    k: [100, 100, 100]
                }, 1, .01, this),
                v.o ? this.o = PropertyFactory.getProp(g, v.o, 0, .01, g) : this.o = {
                    _mdf: !1,
                    v: 1
                },
                this._isDirty = !0,
                this.dynamicProperties.length || this.getValue(!0)
            }
            d.prototype = {
                applyToMatrix: a,
                getValue: u,
                precalculateMatrix: f,
                autoOrient: c
            },
            extendPrototype([DynamicPropertyContainer], d),
            d.prototype.addDynamicProperty = p,
            d.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
            function m(g, v, _) {
                return new d(g,v,_)
            }
            return {
                getTransformProperty: m
            }
        }();
        function RepeaterModifier() {}
        extendPrototype([ShapeModifier], RepeaterModifier),
        RepeaterModifier.prototype.initModifierProperties = function(h, a) {
            this.getValue = this.processKeys,
            this.c = PropertyFactory.getProp(h, a.c, 0, null, this),
            this.o = PropertyFactory.getProp(h, a.o, 0, null, this),
            this.tr = TransformPropertyFactory.getTransformProperty(h, a.tr, this),
            this.so = PropertyFactory.getProp(h, a.tr.so, 0, .01, this),
            this.eo = PropertyFactory.getProp(h, a.tr.eo, 0, .01, this),
            this.data = a,
            this.dynamicProperties.length || this.getValue(!0),
            this._isAnimated = !!this.dynamicProperties.length,
            this.pMatrix = new Matrix,
            this.rMatrix = new Matrix,
            this.sMatrix = new Matrix,
            this.tMatrix = new Matrix,
            this.matrix = new Matrix
        }
        ,
        RepeaterModifier.prototype.applyTransforms = function(h, a, u, f, c, p) {
            var d = p ? -1 : 1
              , m = f.s.v[0] + (1 - f.s.v[0]) * (1 - c)
              , g = f.s.v[1] + (1 - f.s.v[1]) * (1 - c);
            h.translate(f.p.v[0] * d * c, f.p.v[1] * d * c, f.p.v[2]),
            a.translate(-f.a.v[0], -f.a.v[1], f.a.v[2]),
            a.rotate(-f.r.v * d * c),
            a.translate(f.a.v[0], f.a.v[1], f.a.v[2]),
            u.translate(-f.a.v[0], -f.a.v[1], f.a.v[2]),
            u.scale(p ? 1 / m : m, p ? 1 / g : g),
            u.translate(f.a.v[0], f.a.v[1], f.a.v[2])
        }
        ,
        RepeaterModifier.prototype.init = function(h, a, u, f) {
            for (this.elem = h,
            this.arr = a,
            this.pos = u,
            this.elemsData = f,
            this._currentCopies = 0,
            this._elements = [],
            this._groups = [],
            this.frameId = -1,
            this.initDynamicPropertyContainer(h),
            this.initModifierProperties(h, a[u]); u > 0; )
                u -= 1,
                this._elements.unshift(a[u]);
            this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }
        ,
        RepeaterModifier.prototype.resetElements = function(h) {
            var a, u = h.length;
            for (a = 0; a < u; a += 1)
                h[a]._processed = !1,
                h[a].ty === "gr" && this.resetElements(h[a].it)
        }
        ,
        RepeaterModifier.prototype.cloneElements = function(h) {
            var a = JSON.parse(JSON.stringify(h));
            return this.resetElements(a),
            a
        }
        ,
        RepeaterModifier.prototype.changeGroupRender = function(h, a) {
            var u, f = h.length;
            for (u = 0; u < f; u += 1)
                h[u]._render = a,
                h[u].ty === "gr" && this.changeGroupRender(h[u].it, a)
        }
        ,
        RepeaterModifier.prototype.processShapes = function(h) {
            var a, u, f, c, p, d = !1;
            if (this._mdf || h) {
                var m = Math.ceil(this.c.v);
                if (this._groups.length < m) {
                    for (; this._groups.length < m; ) {
                        var g = {
                            it: this.cloneElements(this._elements),
                            ty: "gr"
                        };
                        g.it.push({
                            a: {
                                a: 0,
                                ix: 1,
                                k: [0, 0]
                            },
                            nm: "Transform",
                            o: {
                                a: 0,
                                ix: 7,
                                k: 100
                            },
                            p: {
                                a: 0,
                                ix: 2,
                                k: [0, 0]
                            },
                            r: {
                                a: 1,
                                ix: 6,
                                k: [{
                                    s: 0,
                                    e: 0,
                                    t: 0
                                }, {
                                    s: 0,
                                    e: 0,
                                    t: 1
                                }]
                            },
                            s: {
                                a: 0,
                                ix: 3,
                                k: [100, 100]
                            },
                            sa: {
                                a: 0,
                                ix: 5,
                                k: 0
                            },
                            sk: {
                                a: 0,
                                ix: 4,
                                k: 0
                            },
                            ty: "tr"
                        }),
                        this.arr.splice(0, 0, g),
                        this._groups.splice(0, 0, g),
                        this._currentCopies += 1
                    }
                    this.elem.reloadShapes(),
                    d = !0
                }
                p = 0;
                var v;
                for (f = 0; f <= this._groups.length - 1; f += 1) {
                    if (v = p < m,
                    this._groups[f]._render = v,
                    this.changeGroupRender(this._groups[f].it, v),
                    !v) {
                        var _ = this.elemsData[f].it
                          , b = _[_.length - 1];
                        b.transform.op.v !== 0 ? (b.transform.op._mdf = !0,
                        b.transform.op.v = 0) : b.transform.op._mdf = !1
                    }
                    p += 1
                }
                this._currentCopies = m;
                var P = this.o.v
                  , J = P % 1
                  , x = P > 0 ? Math.floor(P) : Math.ceil(P)
                  , w = this.pMatrix.props
                  , pe = this.rMatrix.props
                  , L = this.sMatrix.props;
                this.pMatrix.reset(),
                this.rMatrix.reset(),
                this.sMatrix.reset(),
                this.tMatrix.reset(),
                this.matrix.reset();
                var R = 0;
                if (P > 0) {
                    for (; R < x; )
                        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                        R += 1;
                    J && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, J, !1),
                    R += J)
                } else if (P < 0) {
                    for (; R > x; )
                        this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                        R -= 1;
                    J && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -J, !0),
                    R -= J)
                }
                f = this.data.m === 1 ? 0 : this._currentCopies - 1,
                c = this.data.m === 1 ? 1 : -1,
                p = this._currentCopies;
                for (var M, Z; p; ) {
                    if (a = this.elemsData[f].it,
                    u = a[a.length - 1].transform.mProps.v.props,
                    Z = u.length,
                    a[a.length - 1].transform.mProps._mdf = !0,
                    a[a.length - 1].transform.op._mdf = !0,
                    a[a.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (f / (this._currentCopies - 1)),
                    R !== 0) {
                        for ((f !== 0 && c === 1 || f !== this._currentCopies - 1 && c === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                        this.matrix.transform(pe[0], pe[1], pe[2], pe[3], pe[4], pe[5], pe[6], pe[7], pe[8], pe[9], pe[10], pe[11], pe[12], pe[13], pe[14], pe[15]),
                        this.matrix.transform(L[0], L[1], L[2], L[3], L[4], L[5], L[6], L[7], L[8], L[9], L[10], L[11], L[12], L[13], L[14], L[15]),
                        this.matrix.transform(w[0], w[1], w[2], w[3], w[4], w[5], w[6], w[7], w[8], w[9], w[10], w[11], w[12], w[13], w[14], w[15]),
                        M = 0; M < Z; M += 1)
                            u[M] = this.matrix.props[M];
                        this.matrix.reset()
                    } else
                        for (this.matrix.reset(),
                        M = 0; M < Z; M += 1)
                            u[M] = this.matrix.props[M];
                    R += 1,
                    p -= 1,
                    f += c
                }
            } else
                for (p = this._currentCopies,
                f = 0,
                c = 1; p; )
                    a = this.elemsData[f].it,
                    u = a[a.length - 1].transform.mProps.v.props,
                    a[a.length - 1].transform.mProps._mdf = !1,
                    a[a.length - 1].transform.op._mdf = !1,
                    p -= 1,
                    f += c;
            return d
        }
        ,
        RepeaterModifier.prototype.addShape = function() {}
        ;
        function RoundCornersModifier() {}
        extendPrototype([ShapeModifier], RoundCornersModifier),
        RoundCornersModifier.prototype.initModifierProperties = function(h, a) {
            this.getValue = this.processKeys,
            this.rd = PropertyFactory.getProp(h, a.r, 0, null, this),
            this._isAnimated = !!this.rd.effectsSequence.length
        }
        ,
        RoundCornersModifier.prototype.processPath = function(h, a) {
            var u = shapePool.newElement();
            u.c = h.c;
            var f, c = h._length, p, d, m, g, v, _, b = 0, P, J, x, w, pe, L;
            for (f = 0; f < c; f += 1)
                p = h.v[f],
                m = h.o[f],
                d = h.i[f],
                p[0] === m[0] && p[1] === m[1] && p[0] === d[0] && p[1] === d[1] ? (f === 0 || f === c - 1) && !h.c ? (u.setTripleAt(p[0], p[1], m[0], m[1], d[0], d[1], b),
                b += 1) : (f === 0 ? g = h.v[c - 1] : g = h.v[f - 1],
                v = Math.sqrt(Math.pow(p[0] - g[0], 2) + Math.pow(p[1] - g[1], 2)),
                _ = v ? Math.min(v / 2, a) / v : 0,
                pe = p[0] + (g[0] - p[0]) * _,
                P = pe,
                L = p[1] - (p[1] - g[1]) * _,
                J = L,
                x = P - (P - p[0]) * roundCorner,
                w = J - (J - p[1]) * roundCorner,
                u.setTripleAt(P, J, x, w, pe, L, b),
                b += 1,
                f === c - 1 ? g = h.v[0] : g = h.v[f + 1],
                v = Math.sqrt(Math.pow(p[0] - g[0], 2) + Math.pow(p[1] - g[1], 2)),
                _ = v ? Math.min(v / 2, a) / v : 0,
                x = p[0] + (g[0] - p[0]) * _,
                P = x,
                w = p[1] + (g[1] - p[1]) * _,
                J = w,
                pe = P - (P - p[0]) * roundCorner,
                L = J - (J - p[1]) * roundCorner,
                u.setTripleAt(P, J, x, w, pe, L, b),
                b += 1) : (u.setTripleAt(h.v[f][0], h.v[f][1], h.o[f][0], h.o[f][1], h.i[f][0], h.i[f][1], b),
                b += 1);
            return u
        }
        ,
        RoundCornersModifier.prototype.processShapes = function(h) {
            var a, u, f = this.shapes.length, c, p, d = this.rd.v;
            if (d !== 0) {
                var m, g;
                for (u = 0; u < f; u += 1) {
                    if (m = this.shapes[u],
                    g = m.localShapeCollection,
                    !(!m.shape._mdf && !this._mdf && !h))
                        for (g.releaseShapes(),
                        m.shape._mdf = !0,
                        a = m.shape.paths.shapes,
                        p = m.shape.paths._length,
                        c = 0; c < p; c += 1)
                            g.addShape(this.processPath(a[c], d));
                    m.shape.paths = m.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ;
        function floatEqual(h, a) {
            return Math.abs(h - a) * 1e5 <= Math.min(Math.abs(h), Math.abs(a))
        }
        function floatZero(h) {
            return Math.abs(h) <= 1e-5
        }
        function lerp(h, a, u) {
            return h * (1 - u) + a * u
        }
        function lerpPoint(h, a, u) {
            return [lerp(h[0], a[0], u), lerp(h[1], a[1], u)]
        }
        function quadRoots(h, a, u) {
            if (h === 0)
                return [];
            var f = a * a - 4 * h * u;
            if (f < 0)
                return [];
            var c = -a / (2 * h);
            if (f === 0)
                return [c];
            var p = Math.sqrt(f) / (2 * h);
            return [c - p, c + p]
        }
        function polynomialCoefficients(h, a, u, f) {
            return [-h + 3 * a - 3 * u + f, 3 * h - 6 * a + 3 * u, -3 * h + 3 * a, h]
        }
        function singlePoint(h) {
            return new PolynomialBezier(h,h,h,h,!1)
        }
        function PolynomialBezier(h, a, u, f, c) {
            c && pointEqual(h, a) && (a = lerpPoint(h, f, 1 / 3)),
            c && pointEqual(u, f) && (u = lerpPoint(h, f, 2 / 3));
            var p = polynomialCoefficients(h[0], a[0], u[0], f[0])
              , d = polynomialCoefficients(h[1], a[1], u[1], f[1]);
            this.a = [p[0], d[0]],
            this.b = [p[1], d[1]],
            this.c = [p[2], d[2]],
            this.d = [p[3], d[3]],
            this.points = [h, a, u, f]
        }
        PolynomialBezier.prototype.point = function(h) {
            return [((this.a[0] * h + this.b[0]) * h + this.c[0]) * h + this.d[0], ((this.a[1] * h + this.b[1]) * h + this.c[1]) * h + this.d[1]]
        }
        ,
        PolynomialBezier.prototype.derivative = function(h) {
            return [(3 * h * this.a[0] + 2 * this.b[0]) * h + this.c[0], (3 * h * this.a[1] + 2 * this.b[1]) * h + this.c[1]]
        }
        ,
        PolynomialBezier.prototype.tangentAngle = function(h) {
            var a = this.derivative(h);
            return Math.atan2(a[1], a[0])
        }
        ,
        PolynomialBezier.prototype.normalAngle = function(h) {
            var a = this.derivative(h);
            return Math.atan2(a[0], a[1])
        }
        ,
        PolynomialBezier.prototype.inflectionPoints = function() {
            var h = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(h))
                return [];
            var a = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / h
              , u = a * a - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / h;
            if (u < 0)
                return [];
            var f = Math.sqrt(u);
            return floatZero(f) ? f > 0 && f < 1 ? [a] : [] : [a - f, a + f].filter(function(c) {
                return c > 0 && c < 1
            })
        }
        ,
        PolynomialBezier.prototype.split = function(h) {
            if (h <= 0)
                return [singlePoint(this.points[0]), this];
            if (h >= 1)
                return [this, singlePoint(this.points[this.points.length - 1])];
            var a = lerpPoint(this.points[0], this.points[1], h)
              , u = lerpPoint(this.points[1], this.points[2], h)
              , f = lerpPoint(this.points[2], this.points[3], h)
              , c = lerpPoint(a, u, h)
              , p = lerpPoint(u, f, h)
              , d = lerpPoint(c, p, h);
            return [new PolynomialBezier(this.points[0],a,c,d,!0), new PolynomialBezier(d,p,f,this.points[3],!0)]
        }
        ;
        function extrema(h, a) {
            var u = h.points[0][a]
              , f = h.points[h.points.length - 1][a];
            if (u > f) {
                var c = f;
                f = u,
                u = c
            }
            for (var p = quadRoots(3 * h.a[a], 2 * h.b[a], h.c[a]), d = 0; d < p.length; d += 1)
                if (p[d] > 0 && p[d] < 1) {
                    var m = h.point(p[d])[a];
                    m < u ? u = m : m > f && (f = m)
                }
            return {
                min: u,
                max: f
            }
        }
        PolynomialBezier.prototype.bounds = function() {
            return {
                x: extrema(this, 0),
                y: extrema(this, 1)
            }
        }
        ,
        PolynomialBezier.prototype.boundingBox = function() {
            var h = this.bounds();
            return {
                left: h.x.min,
                right: h.x.max,
                top: h.y.min,
                bottom: h.y.max,
                width: h.x.max - h.x.min,
                height: h.y.max - h.y.min,
                cx: (h.x.max + h.x.min) / 2,
                cy: (h.y.max + h.y.min) / 2
            }
        }
        ;
        function intersectData(h, a, u) {
            var f = h.boundingBox();
            return {
                cx: f.cx,
                cy: f.cy,
                width: f.width,
                height: f.height,
                bez: h,
                t: (a + u) / 2,
                t1: a,
                t2: u
            }
        }
        function splitData(h) {
            var a = h.bez.split(.5);
            return [intersectData(a[0], h.t1, h.t), intersectData(a[1], h.t, h.t2)]
        }
        function boxIntersect(h, a) {
            return Math.abs(h.cx - a.cx) * 2 < h.width + a.width && Math.abs(h.cy - a.cy) * 2 < h.height + a.height
        }
        function intersectsImpl(h, a, u, f, c, p) {
            if (boxIntersect(h, a)) {
                if (u >= p || h.width <= f && h.height <= f && a.width <= f && a.height <= f) {
                    c.push([h.t, a.t]);
                    return
                }
                var d = splitData(h)
                  , m = splitData(a);
                intersectsImpl(d[0], m[0], u + 1, f, c, p),
                intersectsImpl(d[0], m[1], u + 1, f, c, p),
                intersectsImpl(d[1], m[0], u + 1, f, c, p),
                intersectsImpl(d[1], m[1], u + 1, f, c, p)
            }
        }
        PolynomialBezier.prototype.intersections = function(h, a, u) {
            a === void 0 && (a = 2),
            u === void 0 && (u = 7);
            var f = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(h, 0, 1), 0, a, f, u),
            f
        }
        ,
        PolynomialBezier.shapeSegment = function(h, a) {
            var u = (a + 1) % h.length();
            return new PolynomialBezier(h.v[a],h.o[a],h.i[u],h.v[u],!0)
        }
        ,
        PolynomialBezier.shapeSegmentInverted = function(h, a) {
            var u = (a + 1) % h.length();
            return new PolynomialBezier(h.v[u],h.i[u],h.o[a],h.v[a],!0)
        }
        ;
        function crossProduct(h, a) {
            return [h[1] * a[2] - h[2] * a[1], h[2] * a[0] - h[0] * a[2], h[0] * a[1] - h[1] * a[0]]
        }
        function lineIntersection(h, a, u, f) {
            var c = [h[0], h[1], 1]
              , p = [a[0], a[1], 1]
              , d = [u[0], u[1], 1]
              , m = [f[0], f[1], 1]
              , g = crossProduct(crossProduct(c, p), crossProduct(d, m));
            return floatZero(g[2]) ? null : [g[0] / g[2], g[1] / g[2]]
        }
        function polarOffset(h, a, u) {
            return [h[0] + Math.cos(a) * u, h[1] - Math.sin(a) * u]
        }
        function pointDistance(h, a) {
            return Math.hypot(h[0] - a[0], h[1] - a[1])
        }
        function pointEqual(h, a) {
            return floatEqual(h[0], a[0]) && floatEqual(h[1], a[1])
        }
        function ZigZagModifier() {}
        extendPrototype([ShapeModifier], ZigZagModifier),
        ZigZagModifier.prototype.initModifierProperties = function(h, a) {
            this.getValue = this.processKeys,
            this.amplitude = PropertyFactory.getProp(h, a.s, 0, null, this),
            this.frequency = PropertyFactory.getProp(h, a.r, 0, null, this),
            this.pointsType = PropertyFactory.getProp(h, a.pt, 0, null, this),
            this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
        }
        ;
        function setPoint(h, a, u, f, c, p, d) {
            var m = u - Math.PI / 2
              , g = u + Math.PI / 2
              , v = a[0] + Math.cos(u) * f * c
              , _ = a[1] - Math.sin(u) * f * c;
            h.setTripleAt(v, _, v + Math.cos(m) * p, _ - Math.sin(m) * p, v + Math.cos(g) * d, _ - Math.sin(g) * d, h.length())
        }
        function getPerpendicularVector(h, a) {
            var u = [a[0] - h[0], a[1] - h[1]]
              , f = -Math.PI * .5
              , c = [Math.cos(f) * u[0] - Math.sin(f) * u[1], Math.sin(f) * u[0] + Math.cos(f) * u[1]];
            return c
        }
        function getProjectingAngle(h, a) {
            var u = a === 0 ? h.length() - 1 : a - 1
              , f = (a + 1) % h.length()
              , c = h.v[u]
              , p = h.v[f]
              , d = getPerpendicularVector(c, p);
            return Math.atan2(0, 1) - Math.atan2(d[1], d[0])
        }
        function zigZagCorner(h, a, u, f, c, p, d) {
            var m = getProjectingAngle(a, u)
              , g = a.v[u % a._length]
              , v = a.v[u === 0 ? a._length - 1 : u - 1]
              , _ = a.v[(u + 1) % a._length]
              , b = p === 2 ? Math.sqrt(Math.pow(g[0] - v[0], 2) + Math.pow(g[1] - v[1], 2)) : 0
              , P = p === 2 ? Math.sqrt(Math.pow(g[0] - _[0], 2) + Math.pow(g[1] - _[1], 2)) : 0;
            setPoint(h, a.v[u % a._length], m, d, f, P / ((c + 1) * 2), b / ((c + 1) * 2))
        }
        function zigZagSegment(h, a, u, f, c, p) {
            for (var d = 0; d < f; d += 1) {
                var m = (d + 1) / (f + 1)
                  , g = c === 2 ? Math.sqrt(Math.pow(a.points[3][0] - a.points[0][0], 2) + Math.pow(a.points[3][1] - a.points[0][1], 2)) : 0
                  , v = a.normalAngle(m)
                  , _ = a.point(m);
                setPoint(h, _, v, p, u, g / ((f + 1) * 2), g / ((f + 1) * 2)),
                p = -p
            }
            return p
        }
        ZigZagModifier.prototype.processPath = function(h, a, u, f) {
            var c = h._length
              , p = shapePool.newElement();
            if (p.c = h.c,
            h.c || (c -= 1),
            c === 0)
                return p;
            var d = -1
              , m = PolynomialBezier.shapeSegment(h, 0);
            zigZagCorner(p, h, 0, a, u, f, d);
            for (var g = 0; g < c; g += 1)
                d = zigZagSegment(p, m, a, u, f, -d),
                g === c - 1 && !h.c ? m = null : m = PolynomialBezier.shapeSegment(h, (g + 1) % c),
                zigZagCorner(p, h, g + 1, a, u, f, d);
            return p
        }
        ,
        ZigZagModifier.prototype.processShapes = function(h) {
            var a, u, f = this.shapes.length, c, p, d = this.amplitude.v, m = Math.max(0, Math.round(this.frequency.v)), g = this.pointsType.v;
            if (d !== 0) {
                var v, _;
                for (u = 0; u < f; u += 1) {
                    if (v = this.shapes[u],
                    _ = v.localShapeCollection,
                    !(!v.shape._mdf && !this._mdf && !h))
                        for (_.releaseShapes(),
                        v.shape._mdf = !0,
                        a = v.shape.paths.shapes,
                        p = v.shape.paths._length,
                        c = 0; c < p; c += 1)
                            _.addShape(this.processPath(a[c], d, m, g));
                    v.shape.paths = v.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ;
        function linearOffset(h, a, u) {
            var f = Math.atan2(a[0] - h[0], a[1] - h[1]);
            return [polarOffset(h, f, u), polarOffset(a, f, u)]
        }
        function offsetSegment(h, a) {
            var u, f, c, p, d, m, g;
            g = linearOffset(h.points[0], h.points[1], a),
            u = g[0],
            f = g[1],
            g = linearOffset(h.points[1], h.points[2], a),
            c = g[0],
            p = g[1],
            g = linearOffset(h.points[2], h.points[3], a),
            d = g[0],
            m = g[1];
            var v = lineIntersection(u, f, c, p);
            v === null && (v = f);
            var _ = lineIntersection(d, m, c, p);
            return _ === null && (_ = d),
            new PolynomialBezier(u,v,_,m)
        }
        function joinLines(h, a, u, f, c) {
            var p = a.points[3]
              , d = u.points[0];
            if (f === 3 || pointEqual(p, d))
                return p;
            if (f === 2) {
                var m = -a.tangentAngle(1)
                  , g = -u.tangentAngle(0) + Math.PI
                  , v = lineIntersection(p, polarOffset(p, m + Math.PI / 2, 100), d, polarOffset(d, m + Math.PI / 2, 100))
                  , _ = v ? pointDistance(v, p) : pointDistance(p, d) / 2
                  , b = polarOffset(p, m, 2 * _ * roundCorner);
                return h.setXYAt(b[0], b[1], "o", h.length() - 1),
                b = polarOffset(d, g, 2 * _ * roundCorner),
                h.setTripleAt(d[0], d[1], d[0], d[1], b[0], b[1], h.length()),
                d
            }
            var P = pointEqual(p, a.points[2]) ? a.points[0] : a.points[2]
              , J = pointEqual(d, u.points[1]) ? u.points[3] : u.points[1]
              , x = lineIntersection(P, p, d, J);
            return x && pointDistance(x, p) < c ? (h.setTripleAt(x[0], x[1], x[0], x[1], x[0], x[1], h.length()),
            x) : p
        }
        function getIntersection(h, a) {
            var u = h.intersections(a);
            return u.length && floatEqual(u[0][0], 1) && u.shift(),
            u.length ? u[0] : null
        }
        function pruneSegmentIntersection(h, a) {
            var u = h.slice()
              , f = a.slice()
              , c = getIntersection(h[h.length - 1], a[0]);
            return c && (u[h.length - 1] = h[h.length - 1].split(c[0])[0],
            f[0] = a[0].split(c[1])[1]),
            h.length > 1 && a.length > 1 && (c = getIntersection(h[0], a[a.length - 1]),
            c) ? [[h[0].split(c[0])[0]], [a[a.length - 1].split(c[1])[1]]] : [u, f]
        }
        function pruneIntersections(h) {
            for (var a, u = 1; u < h.length; u += 1)
                a = pruneSegmentIntersection(h[u - 1], h[u]),
                h[u - 1] = a[0],
                h[u] = a[1];
            return h.length > 1 && (a = pruneSegmentIntersection(h[h.length - 1], h[0]),
            h[h.length - 1] = a[0],
            h[0] = a[1]),
            h
        }
        function offsetSegmentSplit(h, a) {
            var u = h.inflectionPoints(), f, c, p, d;
            if (u.length === 0)
                return [offsetSegment(h, a)];
            if (u.length === 1 || floatEqual(u[1], 1))
                return p = h.split(u[0]),
                f = p[0],
                c = p[1],
                [offsetSegment(f, a), offsetSegment(c, a)];
            p = h.split(u[0]),
            f = p[0];
            var m = (u[1] - u[0]) / (1 - u[0]);
            return p = p[1].split(m),
            d = p[0],
            c = p[1],
            [offsetSegment(f, a), offsetSegment(d, a), offsetSegment(c, a)]
        }
        function OffsetPathModifier() {}
        extendPrototype([ShapeModifier], OffsetPathModifier),
        OffsetPathModifier.prototype.initModifierProperties = function(h, a) {
            this.getValue = this.processKeys,
            this.amount = PropertyFactory.getProp(h, a.a, 0, null, this),
            this.miterLimit = PropertyFactory.getProp(h, a.ml, 0, null, this),
            this.lineJoin = a.lj,
            this._isAnimated = this.amount.effectsSequence.length !== 0
        }
        ,
        OffsetPathModifier.prototype.processPath = function(h, a, u, f) {
            var c = shapePool.newElement();
            c.c = h.c;
            var p = h.length();
            h.c || (p -= 1);
            var d, m, g, v = [];
            for (d = 0; d < p; d += 1)
                g = PolynomialBezier.shapeSegment(h, d),
                v.push(offsetSegmentSplit(g, a));
            if (!h.c)
                for (d = p - 1; d >= 0; d -= 1)
                    g = PolynomialBezier.shapeSegmentInverted(h, d),
                    v.push(offsetSegmentSplit(g, a));
            v = pruneIntersections(v);
            var _ = null
              , b = null;
            for (d = 0; d < v.length; d += 1) {
                var P = v[d];
                for (b && (_ = joinLines(c, b, P[0], u, f)),
                b = P[P.length - 1],
                m = 0; m < P.length; m += 1)
                    g = P[m],
                    _ && pointEqual(g.points[0], _) ? c.setXYAt(g.points[1][0], g.points[1][1], "o", c.length() - 1) : c.setTripleAt(g.points[0][0], g.points[0][1], g.points[1][0], g.points[1][1], g.points[0][0], g.points[0][1], c.length()),
                    c.setTripleAt(g.points[3][0], g.points[3][1], g.points[3][0], g.points[3][1], g.points[2][0], g.points[2][1], c.length()),
                    _ = g.points[3]
            }
            return v.length && joinLines(c, b, v[0][0], u, f),
            c
        }
        ,
        OffsetPathModifier.prototype.processShapes = function(h) {
            var a, u, f = this.shapes.length, c, p, d = this.amount.v, m = this.miterLimit.v, g = this.lineJoin;
            if (d !== 0) {
                var v, _;
                for (u = 0; u < f; u += 1) {
                    if (v = this.shapes[u],
                    _ = v.localShapeCollection,
                    !(!v.shape._mdf && !this._mdf && !h))
                        for (_.releaseShapes(),
                        v.shape._mdf = !0,
                        a = v.shape.paths.shapes,
                        p = v.shape.paths._length,
                        c = 0; c < p; c += 1)
                            _.addShape(this.processPath(a[c], d, g, m));
                    v.shape.paths = v.localShapeCollection
                }
            }
            this.dynamicProperties.length || (this._mdf = !1)
        }
        ;
        function getFontProperties(h) {
            for (var a = h.fStyle ? h.fStyle.split(" ") : [], u = "normal", f = "normal", c = a.length, p, d = 0; d < c; d += 1)
                switch (p = a[d].toLowerCase(),
                p) {
                case "italic":
                    f = "italic";
                    break;
                case "bold":
                    u = "700";
                    break;
                case "black":
                    u = "900";
                    break;
                case "medium":
                    u = "500";
                    break;
                case "regular":
                case "normal":
                    u = "400";
                    break;
                case "light":
                case "thin":
                    u = "200";
                    break
                }
            return {
                style: f,
                weight: h.fWeight || u
            }
        }
        var FontManager = function() {
            var h = 5e3
              , a = {
                w: 0,
                size: 0,
                shapes: [],
                data: {
                    shapes: []
                }
            }
              , u = [];
            u = u.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var f = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"]
              , c = [65039, 8205];
            function p(Z) {
                var he = Z.split(","), et, ei = he.length, ii = [];
                for (et = 0; et < ei; et += 1)
                    he[et] !== "sans-serif" && he[et] !== "monospace" && ii.push(he[et]);
                return ii.join(",")
            }
            function d(Z, he) {
                var et = createTag("span");
                et.setAttribute("aria-hidden", !0),
                et.style.fontFamily = he;
                var ei = createTag("span");
                ei.innerText = "giItT1WQy@!-/#",
                et.style.position = "absolute",
                et.style.left = "-10000px",
                et.style.top = "-10000px",
                et.style.fontSize = "300px",
                et.style.fontVariant = "normal",
                et.style.fontStyle = "normal",
                et.style.fontWeight = "normal",
                et.style.letterSpacing = "0",
                et.appendChild(ei),
                document.body.appendChild(et);
                var ii = ei.offsetWidth;
                return ei.style.fontFamily = p(Z) + ", " + he,
                {
                    node: ei,
                    w: ii,
                    parent: et
                }
            }
            function m() {
                var Z, he = this.fonts.length, et, ei, ii = he;
                for (Z = 0; Z < he; Z += 1)
                    this.fonts[Z].loaded ? ii -= 1 : this.fonts[Z].fOrigin === "n" || this.fonts[Z].origin === 0 ? this.fonts[Z].loaded = !0 : (et = this.fonts[Z].monoCase.node,
                    ei = this.fonts[Z].monoCase.w,
                    et.offsetWidth !== ei ? (ii -= 1,
                    this.fonts[Z].loaded = !0) : (et = this.fonts[Z].sansCase.node,
                    ei = this.fonts[Z].sansCase.w,
                    et.offsetWidth !== ei && (ii -= 1,
                    this.fonts[Z].loaded = !0)),
                    this.fonts[Z].loaded && (this.fonts[Z].sansCase.parent.parentNode.removeChild(this.fonts[Z].sansCase.parent),
                    this.fonts[Z].monoCase.parent.parentNode.removeChild(this.fonts[Z].monoCase.parent)));
                ii !== 0 && Date.now() - this.initTime < h ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            }
            function g(Z, he) {
                var et = document.body && he ? "svg" : "canvas", ei, ii = getFontProperties(Z);
                if (et === "svg") {
                    var oi = createNS("text");
                    oi.style.fontSize = "100px",
                    oi.setAttribute("font-family", Z.fFamily),
                    oi.setAttribute("font-style", ii.style),
                    oi.setAttribute("font-weight", ii.weight),
                    oi.textContent = "1",
                    Z.fClass ? (oi.style.fontFamily = "inherit",
                    oi.setAttribute("class", Z.fClass)) : oi.style.fontFamily = Z.fFamily,
                    he.appendChild(oi),
                    ei = oi
                } else {
                    var hi = new OffscreenCanvas(500,500).getContext("2d");
                    hi.font = ii.style + " " + ii.weight + " 100px " + Z.fFamily,
                    ei = hi
                }
                function fi(ui) {
                    return et === "svg" ? (ei.textContent = ui,
                    ei.getComputedTextLength()) : ei.measureText(ui).width
                }
                return {
                    measureText: fi
                }
            }
            function v(Z, he) {
                if (!Z) {
                    this.isLoaded = !0;
                    return
                }
                if (this.chars) {
                    this.isLoaded = !0,
                    this.fonts = Z.list;
                    return
                }
                if (!document.body) {
                    this.isLoaded = !0,
                    Z.list.forEach(function(ni) {
                        ni.helper = g(ni),
                        ni.cache = {}
                    }),
                    this.fonts = Z.list;
                    return
                }
                var et = Z.list, ei, ii = et.length, oi = ii;
                for (ei = 0; ei < ii; ei += 1) {
                    var hi = !0, fi, ui;
                    if (et[ei].loaded = !1,
                    et[ei].monoCase = d(et[ei].fFamily, "monospace"),
                    et[ei].sansCase = d(et[ei].fFamily, "sans-serif"),
                    !et[ei].fPath)
                        et[ei].loaded = !0,
                        oi -= 1;
                    else if (et[ei].fOrigin === "p" || et[ei].origin === 3) {
                        if (fi = document.querySelectorAll('style[f-forigin="p"][f-family="' + et[ei].fFamily + '"], style[f-origin="3"][f-family="' + et[ei].fFamily + '"]'),
                        fi.length > 0 && (hi = !1),
                        hi) {
                            var pi = createTag("style");
                            pi.setAttribute("f-forigin", et[ei].fOrigin),
                            pi.setAttribute("f-origin", et[ei].origin),
                            pi.setAttribute("f-family", et[ei].fFamily),
                            pi.type = "text/css",
                            pi.innerText = "@font-face {font-family: " + et[ei].fFamily + "; font-style: normal; src: url('" + et[ei].fPath + "');}",
                            he.appendChild(pi)
                        }
                    } else if (et[ei].fOrigin === "g" || et[ei].origin === 1) {
                        for (fi = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'),
                        ui = 0; ui < fi.length; ui += 1)
                            fi[ui].href.indexOf(et[ei].fPath) !== -1 && (hi = !1);
                        if (hi) {
                            var mi = createTag("link");
                            mi.setAttribute("f-forigin", et[ei].fOrigin),
                            mi.setAttribute("f-origin", et[ei].origin),
                            mi.type = "text/css",
                            mi.rel = "stylesheet",
                            mi.href = et[ei].fPath,
                            document.body.appendChild(mi)
                        }
                    } else if (et[ei].fOrigin === "t" || et[ei].origin === 2) {
                        for (fi = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'),
                        ui = 0; ui < fi.length; ui += 1)
                            et[ei].fPath === fi[ui].src && (hi = !1);
                        if (hi) {
                            var li = createTag("link");
                            li.setAttribute("f-forigin", et[ei].fOrigin),
                            li.setAttribute("f-origin", et[ei].origin),
                            li.setAttribute("rel", "stylesheet"),
                            li.setAttribute("href", et[ei].fPath),
                            he.appendChild(li)
                        }
                    }
                    et[ei].helper = g(et[ei], he),
                    et[ei].cache = {},
                    this.fonts.push(et[ei])
                }
                oi === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
            }
            function _(Z) {
                if (Z) {
                    this.chars || (this.chars = []);
                    var he, et = Z.length, ei, ii = this.chars.length, oi;
                    for (he = 0; he < et; he += 1) {
                        for (ei = 0,
                        oi = !1; ei < ii; )
                            this.chars[ei].style === Z[he].style && this.chars[ei].fFamily === Z[he].fFamily && this.chars[ei].ch === Z[he].ch && (oi = !0),
                            ei += 1;
                        oi || (this.chars.push(Z[he]),
                        ii += 1)
                    }
                }
            }
            function b(Z, he, et) {
                for (var ei = 0, ii = this.chars.length; ei < ii; ) {
                    if (this.chars[ei].ch === Z && this.chars[ei].style === he && this.chars[ei].fFamily === et)
                        return this.chars[ei];
                    ei += 1
                }
                return (typeof Z == "string" && Z.charCodeAt(0) !== 13 || !Z) && console && console.warn && !this._warned && (this._warned = !0,
                console.warn("Missing character from exported characters list: ", Z, he, et)),
                a
            }
            function P(Z, he, et) {
                var ei = this.getFontByName(he)
                  , ii = Z.charCodeAt(0);
                if (!ei.cache[ii + 1]) {
                    var oi = ei.helper;
                    if (Z === " ") {
                        var hi = oi.measureText("|" + Z + "|")
                          , fi = oi.measureText("||");
                        ei.cache[ii + 1] = (hi - fi) / 100
                    } else
                        ei.cache[ii + 1] = oi.measureText(Z) / 100
                }
                return ei.cache[ii + 1] * et
            }
            function J(Z) {
                for (var he = 0, et = this.fonts.length; he < et; ) {
                    if (this.fonts[he].fName === Z)
                        return this.fonts[he];
                    he += 1
                }
                return this.fonts[0]
            }
            function x(Z, he) {
                var et = Z.toString(16) + he.toString(16);
                return f.indexOf(et) !== -1
            }
            function w(Z, he) {
                return he ? Z === c[0] && he === c[1] : Z === c[1]
            }
            function pe(Z) {
                return u.indexOf(Z) !== -1
            }
            function L() {
                this.isLoaded = !0
            }
            var R = function() {
                this.fonts = [],
                this.chars = null,
                this.typekitLoaded = 0,
                this.isLoaded = !1,
                this._warned = !1,
                this.initTime = Date.now(),
                this.setIsLoadedBinded = this.setIsLoaded.bind(this),
                this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
            };
            R.isModifier = x,
            R.isZeroWidthJoiner = w,
            R.isCombinedCharacter = pe;
            var M = {
                addChars: _,
                addFonts: v,
                getCharData: b,
                getFontByName: J,
                measureText: P,
                checkLoadedFonts: m,
                setIsLoaded: L
            };
            return R.prototype = M,
            R
        }();
        function SlotManager(h) {
            this.animationData = h
        }
        SlotManager.prototype.getProp = function(h) {
            return this.animationData.slots && this.animationData.slots[h.sid] ? Object.assign(h, this.animationData.slots[h.sid].p) : h
        }
        ;
        function slotFactory(h) {
            return new SlotManager(h)
        }
        function RenderableElement() {}
        RenderableElement.prototype = {
            initRenderable: function() {
                this.isInRange = !1,
                this.hidden = !1,
                this.isTransparent = !1,
                this.renderableComponents = []
            },
            addRenderableComponent: function(a) {
                this.renderableComponents.indexOf(a) === -1 && this.renderableComponents.push(a)
            },
            removeRenderableComponent: function(a) {
                this.renderableComponents.indexOf(a) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(a), 1)
            },
            prepareRenderableFrame: function(a) {
                this.checkLayerLimits(a)
            },
            checkTransparency: function() {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0,
                this.hide()) : this.isTransparent && (this.isTransparent = !1,
                this.show())
            },
            checkLayerLimits: function(a) {
                this.data.ip - this.data.st <= a && this.data.op - this.data.st > a ? this.isInRange !== !0 && (this.globalData._mdf = !0,
                this._mdf = !0,
                this.isInRange = !0,
                this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0,
                this.isInRange = !1,
                this.hide())
            },
            renderRenderable: function() {
                var a, u = this.renderableComponents.length;
                for (a = 0; a < u; a += 1)
                    this.renderableComponents[a].renderFrame(this._isFirstFrame)
            },
            sourceRectAtTime: function() {
                return {
                    top: 0,
                    left: 0,
                    width: 100,
                    height: 100
                }
            },
            getLayerSize: function() {
                return this.data.ty === 5 ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {
                    w: this.data.width,
                    h: this.data.height
                }
            }
        };
        var getBlendMode = function() {
            var h = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            };
            return function(a) {
                return h[a] || ""
            }
        }();
        function SliderEffect(h, a, u) {
            this.p = PropertyFactory.getProp(a, h.v, 0, 0, u)
        }
        function AngleEffect(h, a, u) {
            this.p = PropertyFactory.getProp(a, h.v, 0, 0, u)
        }
        function ColorEffect(h, a, u) {
            this.p = PropertyFactory.getProp(a, h.v, 1, 0, u)
        }
        function PointEffect(h, a, u) {
            this.p = PropertyFactory.getProp(a, h.v, 1, 0, u)
        }
        function LayerIndexEffect(h, a, u) {
            this.p = PropertyFactory.getProp(a, h.v, 0, 0, u)
        }
        function MaskIndexEffect(h, a, u) {
            this.p = PropertyFactory.getProp(a, h.v, 0, 0, u)
        }
        function CheckboxEffect(h, a, u) {
            this.p = PropertyFactory.getProp(a, h.v, 0, 0, u)
        }
        function NoValueEffect() {
            this.p = {}
        }
        function EffectsManager(h, a) {
            var u = h.ef || [];
            this.effectElements = [];
            var f, c = u.length, p;
            for (f = 0; f < c; f += 1)
                p = new GroupEffect(u[f],a),
                this.effectElements.push(p)
        }
        function GroupEffect(h, a) {
            this.init(h, a)
        }
        extendPrototype([DynamicPropertyContainer], GroupEffect),
        GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
        GroupEffect.prototype.init = function(h, a) {
            this.data = h,
            this.effectElements = [],
            this.initDynamicPropertyContainer(a);
            var u, f = this.data.ef.length, c, p = this.data.ef;
            for (u = 0; u < f; u += 1) {
                switch (c = null,
                p[u].ty) {
                case 0:
                    c = new SliderEffect(p[u],a,this);
                    break;
                case 1:
                    c = new AngleEffect(p[u],a,this);
                    break;
                case 2:
                    c = new ColorEffect(p[u],a,this);
                    break;
                case 3:
                    c = new PointEffect(p[u],a,this);
                    break;
                case 4:
                case 7:
                    c = new CheckboxEffect(p[u],a,this);
                    break;
                case 10:
                    c = new LayerIndexEffect(p[u],a,this);
                    break;
                case 11:
                    c = new MaskIndexEffect(p[u],a,this);
                    break;
                case 5:
                    c = new EffectsManager(p[u],a);
                    break;
                default:
                    c = new NoValueEffect(p[u]);
                    break
                }
                c && this.effectElements.push(c)
            }
        }
        ;
        function BaseElement() {}
        BaseElement.prototype = {
            checkMasks: function() {
                if (!this.data.hasMask)
                    return !1;
                for (var a = 0, u = this.data.masksProperties.length; a < u; ) {
                    if (this.data.masksProperties[a].mode !== "n" && this.data.masksProperties[a].cl !== !1)
                        return !0;
                    a += 1
                }
                return !1
            },
            initExpressions: function() {
                var a = getExpressionInterfaces();
                if (a) {
                    var u = a("layer")
                      , f = a("effects")
                      , c = a("shape")
                      , p = a("text")
                      , d = a("comp");
                    this.layerInterface = u(this),
                    this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var m = f.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(m),
                    this.data.ty === 0 || this.data.xt ? this.compInterface = d(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = c(this.shapesData, this.itemsData, this.layerInterface),
                    this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = p(this),
                    this.layerInterface.text = this.layerInterface.textInterface)
                }
            },
            setBlendMode: function() {
                var a = getBlendMode(this.data.bm)
                  , u = this.baseElement || this.layerElement;
                u.style["mix-blend-mode"] = a
            },
            initBaseData: function(a, u, f) {
                this.globalData = u,
                this.comp = f,
                this.data = a,
                this.layerId = createElementID(),
                this.data.sr || (this.data.sr = 1),
                this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties)
            },
            getType: function() {
                return this.type
            },
            sourceRectAtTime: function() {}
        };
        function FrameElement() {}
        FrameElement.prototype = {
            initFrame: function() {
                this._isFirstFrame = !1,
                this.dynamicProperties = [],
                this._mdf = !1
            },
            prepareProperties: function(a, u) {
                var f, c = this.dynamicProperties.length;
                for (f = 0; f < c; f += 1)
                    (u || this._isParent && this.dynamicProperties[f].propType === "transform") && (this.dynamicProperties[f].getValue(),
                    this.dynamicProperties[f]._mdf && (this.globalData._mdf = !0,
                    this._mdf = !0))
            },
            addDynamicProperty: function(a) {
                this.dynamicProperties.indexOf(a) === -1 && this.dynamicProperties.push(a)
            }
        };
        function FootageElement(h, a, u) {
            this.initFrame(),
            this.initRenderable(),
            this.assetData = a.getAssetData(h.refId),
            this.footageData = a.imageLoader.getAsset(this.assetData),
            this.initBaseData(h, a, u)
        }
        FootageElement.prototype.prepareFrame = function() {}
        ,
        extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
        FootageElement.prototype.getBaseElement = function() {
            return null
        }
        ,
        FootageElement.prototype.renderFrame = function() {}
        ,
        FootageElement.prototype.destroy = function() {}
        ,
        FootageElement.prototype.initExpressions = function() {
            var h = getExpressionInterfaces();
            if (h) {
                var a = h("footage");
                this.layerInterface = a(this)
            }
        }
        ,
        FootageElement.prototype.getFootageData = function() {
            return this.footageData
        }
        ;
        function AudioElement(h, a, u) {
            this.initFrame(),
            this.initRenderable(),
            this.assetData = a.getAssetData(h.refId),
            this.initBaseData(h, a, u),
            this._isPlaying = !1,
            this._canPlay = !1;
            var f = this.globalData.getAssetsPath(this.assetData);
            this.audio = this.globalData.audioController.createAudio(f),
            this._currentTime = 0,
            this.globalData.audioController.addAudio(this),
            this._volumeMultiplier = 1,
            this._volume = 1,
            this._previousVolume = null,
            this.tm = h.tm ? PropertyFactory.getProp(this, h.tm, 0, a.frameRate, this) : {
                _placeholder: !0
            },
            this.lv = PropertyFactory.getProp(this, h.au && h.au.lv ? h.au.lv : {
                k: [100]
            }, 1, .01, this)
        }
        AudioElement.prototype.prepareFrame = function(h) {
            if (this.prepareRenderableFrame(h, !0),
            this.prepareProperties(h, !0),
            this.tm._placeholder)
                this._currentTime = h / this.data.sr;
            else {
                var a = this.tm.v;
                this._currentTime = a
            }
            this._volume = this.lv.v[0];
            var u = this._volume * this._volumeMultiplier;
            this._previousVolume !== u && (this._previousVolume = u,
            this.audio.volume(u))
        }
        ,
        extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
        AudioElement.prototype.renderFrame = function() {
            this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(),
            this.audio.seek(this._currentTime / this.globalData.frameRate),
            this._isPlaying = !0))
        }
        ,
        AudioElement.prototype.show = function() {}
        ,
        AudioElement.prototype.hide = function() {
            this.audio.pause(),
            this._isPlaying = !1
        }
        ,
        AudioElement.prototype.pause = function() {
            this.audio.pause(),
            this._isPlaying = !1,
            this._canPlay = !1
        }
        ,
        AudioElement.prototype.resume = function() {
            this._canPlay = !0
        }
        ,
        AudioElement.prototype.setRate = function(h) {
            this.audio.rate(h)
        }
        ,
        AudioElement.prototype.volume = function(h) {
            this._volumeMultiplier = h,
            this._previousVolume = h * this._volume,
            this.audio.volume(this._previousVolume)
        }
        ,
        AudioElement.prototype.getBaseElement = function() {
            return null
        }
        ,
        AudioElement.prototype.destroy = function() {}
        ,
        AudioElement.prototype.sourceRectAtTime = function() {}
        ,
        AudioElement.prototype.initExpressions = function() {}
        ;
        function BaseRenderer() {}
        BaseRenderer.prototype.checkLayers = function(h) {
            var a, u = this.layers.length, f;
            for (this.completeLayers = !0,
            a = u - 1; a >= 0; a -= 1)
                this.elements[a] || (f = this.layers[a],
                f.ip - f.st <= h - this.layers[a].st && f.op - f.st > h - this.layers[a].st && this.buildItem(a)),
                this.completeLayers = this.elements[a] ? this.completeLayers : !1;
            this.checkPendingElements()
        }
        ,
        BaseRenderer.prototype.createItem = function(h) {
            switch (h.ty) {
            case 2:
                return this.createImage(h);
            case 0:
                return this.createComp(h);
            case 1:
                return this.createSolid(h);
            case 3:
                return this.createNull(h);
            case 4:
                return this.createShape(h);
            case 5:
                return this.createText(h);
            case 6:
                return this.createAudio(h);
            case 13:
                return this.createCamera(h);
            case 15:
                return this.createFootage(h);
            default:
                return this.createNull(h)
            }
        }
        ,
        BaseRenderer.prototype.createCamera = function() {
            throw new Error("You're using a 3d camera. Try the html renderer.")
        }
        ,
        BaseRenderer.prototype.createAudio = function(h) {
            return new AudioElement(h,this.globalData,this)
        }
        ,
        BaseRenderer.prototype.createFootage = function(h) {
            return new FootageElement(h,this.globalData,this)
        }
        ,
        BaseRenderer.prototype.buildAllItems = function() {
            var h, a = this.layers.length;
            for (h = 0; h < a; h += 1)
                this.buildItem(h);
            this.checkPendingElements()
        }
        ,
        BaseRenderer.prototype.includeLayers = function(h) {
            this.completeLayers = !1;
            var a, u = h.length, f, c = this.layers.length;
            for (a = 0; a < u; a += 1)
                for (f = 0; f < c; ) {
                    if (this.layers[f].id === h[a].id) {
                        this.layers[f] = h[a];
                        break
                    }
                    f += 1
                }
        }
        ,
        BaseRenderer.prototype.setProjectInterface = function(h) {
            this.globalData.projectInterface = h
        }
        ,
        BaseRenderer.prototype.initItems = function() {
            this.globalData.progressiveLoad || this.buildAllItems()
        }
        ,
        BaseRenderer.prototype.buildElementParenting = function(h, a, u) {
            for (var f = this.elements, c = this.layers, p = 0, d = c.length; p < d; )
                c[p].ind == a && (!f[p] || f[p] === !0 ? (this.buildItem(p),
                this.addPendingElement(h)) : (u.push(f[p]),
                f[p].setAsParent(),
                c[p].parent !== void 0 ? this.buildElementParenting(h, c[p].parent, u) : h.setHierarchy(u))),
                p += 1
        }
        ,
        BaseRenderer.prototype.addPendingElement = function(h) {
            this.pendingElements.push(h)
        }
        ,
        BaseRenderer.prototype.searchExtraCompositions = function(h) {
            var a, u = h.length;
            for (a = 0; a < u; a += 1)
                if (h[a].xt) {
                    var f = this.createComp(h[a]);
                    f.initExpressions(),
                    this.globalData.projectInterface.registerComposition(f)
                }
        }
        ,
        BaseRenderer.prototype.getElementById = function(h) {
            var a, u = this.elements.length;
            for (a = 0; a < u; a += 1)
                if (this.elements[a].data.ind === h)
                    return this.elements[a];
            return null
        }
        ,
        BaseRenderer.prototype.getElementByPath = function(h) {
            var a = h.shift(), u;
            if (typeof a == "number")
                u = this.elements[a];
            else {
                var f, c = this.elements.length;
                for (f = 0; f < c; f += 1)
                    if (this.elements[f].data.nm === a) {
                        u = this.elements[f];
                        break
                    }
            }
            return h.length === 0 ? u : u.getElementByPath(h)
        }
        ,
        BaseRenderer.prototype.setupGlobalData = function(h, a) {
            this.globalData.fontManager = new FontManager,
            this.globalData.slotManager = slotFactory(h),
            this.globalData.fontManager.addChars(h.chars),
            this.globalData.fontManager.addFonts(h.fonts, a),
            this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
            this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
            this.globalData.imageLoader = this.animationItem.imagePreloader,
            this.globalData.audioController = this.animationItem.audioController,
            this.globalData.frameId = 0,
            this.globalData.frameRate = h.fr,
            this.globalData.nm = h.nm,
            this.globalData.compSize = {
                w: h.w,
                h: h.h
            }
        }
        ;
        function TransformElement() {}
        TransformElement.prototype = {
            initTransform: function() {
                this.finalTransform = {
                    mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                        o: 0
                    },
                    _matMdf: !1,
                    _opMdf: !1,
                    mat: new Matrix
                },
                this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                this.data.ty
            },
            renderTransform: function() {
                if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame,
                this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame,
                this.hierarchy) {
                    var a, u = this.finalTransform.mat, f = 0, c = this.hierarchy.length;
                    if (!this.finalTransform._matMdf)
                        for (; f < c; ) {
                            if (this.hierarchy[f].finalTransform.mProp._mdf) {
                                this.finalTransform._matMdf = !0;
                                break
                            }
                            f += 1
                        }
                    if (this.finalTransform._matMdf)
                        for (a = this.finalTransform.mProp.v.props,
                        u.cloneFromProps(a),
                        f = 0; f < c; f += 1)
                            a = this.hierarchy[f].finalTransform.mProp.v.props,
                            u.transform(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15])
                }
            },
            globalToLocal: function(a) {
                var u = [];
                u.push(this.finalTransform);
                for (var f = !0, c = this.comp; f; )
                    c.finalTransform ? (c.data.hasMask && u.splice(0, 0, c.finalTransform),
                    c = c.comp) : f = !1;
                var p, d = u.length, m;
                for (p = 0; p < d; p += 1)
                    m = u[p].mat.applyToPointArray(0, 0, 0),
                    a = [a[0] - m[0], a[1] - m[1], 0];
                return a
            },
            mHelper: new Matrix
        };
        function MaskElement(h, a, u) {
            this.data = h,
            this.element = a,
            this.globalData = u,
            this.storedData = [],
            this.masksProperties = this.data.masksProperties || [],
            this.maskElement = null;
            var f = this.globalData.defs, c, p = this.masksProperties ? this.masksProperties.length : 0;
            this.viewData = createSizedArray(p),
            this.solidPath = "";
            var d, m = this.masksProperties, g = 0, v = [], _, b, P = createElementID(), J, x, w, pe, L = "clipPath", R = "clip-path";
            for (c = 0; c < p; c += 1)
                if ((m[c].mode !== "a" && m[c].mode !== "n" || m[c].inv || m[c].o.k !== 100 || m[c].o.x) && (L = "mask",
                R = "mask"),
                (m[c].mode === "s" || m[c].mode === "i") && g === 0 ? (J = createNS("rect"),
                J.setAttribute("fill", "#ffffff"),
                J.setAttribute("width", this.element.comp.data.w || 0),
                J.setAttribute("height", this.element.comp.data.h || 0),
                v.push(J)) : J = null,
                d = createNS("path"),
                m[c].mode === "n")
                    this.viewData[c] = {
                        op: PropertyFactory.getProp(this.element, m[c].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, m[c], 3),
                        elem: d,
                        lastPath: ""
                    },
                    f.appendChild(d);
                else {
                    g += 1,
                    d.setAttribute("fill", m[c].mode === "s" ? "#000000" : "#ffffff"),
                    d.setAttribute("clip-rule", "nonzero");
                    var M;
                    if (m[c].x.k !== 0 ? (L = "mask",
                    R = "mask",
                    pe = PropertyFactory.getProp(this.element, m[c].x, 0, null, this.element),
                    M = createElementID(),
                    x = createNS("filter"),
                    x.setAttribute("id", M),
                    w = createNS("feMorphology"),
                    w.setAttribute("operator", "erode"),
                    w.setAttribute("in", "SourceGraphic"),
                    w.setAttribute("radius", "0"),
                    x.appendChild(w),
                    f.appendChild(x),
                    d.setAttribute("stroke", m[c].mode === "s" ? "#000000" : "#ffffff")) : (w = null,
                    pe = null),
                    this.storedData[c] = {
                        elem: d,
                        x: pe,
                        expan: w,
                        lastPath: "",
                        lastOperator: "",
                        filterId: M,
                        lastRadius: 0
                    },
                    m[c].mode === "i") {
                        b = v.length;
                        var Z = createNS("g");
                        for (_ = 0; _ < b; _ += 1)
                            Z.appendChild(v[_]);
                        var he = createNS("mask");
                        he.setAttribute("mask-type", "alpha"),
                        he.setAttribute("id", P + "_" + g),
                        he.appendChild(d),
                        f.appendChild(he),
                        Z.setAttribute("mask", "url(" + getLocationHref() + "#" + P + "_" + g + ")"),
                        v.length = 0,
                        v.push(Z)
                    } else
                        v.push(d);
                    m[c].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                    this.viewData[c] = {
                        elem: d,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, m[c].o, 0, .01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, m[c], 3),
                        invRect: J
                    },
                    this.viewData[c].prop.k || this.drawPath(m[c], this.viewData[c].prop.v, this.viewData[c])
                }
            for (this.maskElement = createNS(L),
            p = v.length,
            c = 0; c < p; c += 1)
                this.maskElement.appendChild(v[c]);
            g > 0 && (this.maskElement.setAttribute("id", P),
            this.element.maskedElement.setAttribute(R, "url(" + getLocationHref() + "#" + P + ")"),
            f.appendChild(this.maskElement)),
            this.viewData.length && this.element.addRenderableComponent(this)
        }
        MaskElement.prototype.getMaskProperty = function(h) {
            return this.viewData[h].prop
        }
        ,
        MaskElement.prototype.renderFrame = function(h) {
            var a = this.element.finalTransform.mat, u, f = this.masksProperties.length;
            for (u = 0; u < f; u += 1)
                if ((this.viewData[u].prop._mdf || h) && this.drawPath(this.masksProperties[u], this.viewData[u].prop.v, this.viewData[u]),
                (this.viewData[u].op._mdf || h) && this.viewData[u].elem.setAttribute("fill-opacity", this.viewData[u].op.v),
                this.masksProperties[u].mode !== "n" && (this.viewData[u].invRect && (this.element.finalTransform.mProp._mdf || h) && this.viewData[u].invRect.setAttribute("transform", a.getInverseMatrix().to2dCSS()),
                this.storedData[u].x && (this.storedData[u].x._mdf || h))) {
                    var c = this.storedData[u].expan;
                    this.storedData[u].x.v < 0 ? (this.storedData[u].lastOperator !== "erode" && (this.storedData[u].lastOperator = "erode",
                    this.storedData[u].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[u].filterId + ")")),
                    c.setAttribute("radius", -this.storedData[u].x.v)) : (this.storedData[u].lastOperator !== "dilate" && (this.storedData[u].lastOperator = "dilate",
                    this.storedData[u].elem.setAttribute("filter", null)),
                    this.storedData[u].elem.setAttribute("stroke-width", this.storedData[u].x.v * 2))
                }
        }
        ,
        MaskElement.prototype.getMaskelement = function() {
            return this.maskElement
        }
        ,
        MaskElement.prototype.createLayerSolidPath = function() {
            var h = "M0,0 ";
            return h += " h" + this.globalData.compSize.w,
            h += " v" + this.globalData.compSize.h,
            h += " h-" + this.globalData.compSize.w,
            h += " v-" + this.globalData.compSize.h + " ",
            h
        }
        ,
        MaskElement.prototype.drawPath = function(h, a, u) {
            var f = " M" + a.v[0][0] + "," + a.v[0][1], c, p;
            for (p = a._length,
            c = 1; c < p; c += 1)
                f += " C" + a.o[c - 1][0] + "," + a.o[c - 1][1] + " " + a.i[c][0] + "," + a.i[c][1] + " " + a.v[c][0] + "," + a.v[c][1];
            if (a.c && p > 1 && (f += " C" + a.o[c - 1][0] + "," + a.o[c - 1][1] + " " + a.i[0][0] + "," + a.i[0][1] + " " + a.v[0][0] + "," + a.v[0][1]),
            u.lastPath !== f) {
                var d = "";
                u.elem && (a.c && (d = h.inv ? this.solidPath + f : f),
                u.elem.setAttribute("d", d)),
                u.lastPath = f
            }
        }
        ,
        MaskElement.prototype.destroy = function() {
            this.element = null,
            this.globalData = null,
            this.maskElement = null,
            this.data = null,
            this.masksProperties = null
        }
        ;
        var filtersFactory = function() {
            var h = {};
            h.createFilter = a,
            h.createAlphaToLuminanceFilter = u;
            function a(f, c) {
                var p = createNS("filter");
                return p.setAttribute("id", f),
                c !== !0 && (p.setAttribute("filterUnits", "objectBoundingBox"),
                p.setAttribute("x", "0%"),
                p.setAttribute("y", "0%"),
                p.setAttribute("width", "100%"),
                p.setAttribute("height", "100%")),
                p
            }
            function u() {
                var f = createNS("feColorMatrix");
                return f.setAttribute("type", "matrix"),
                f.setAttribute("color-interpolation-filters", "sRGB"),
                f.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
                f
            }
            return h
        }()
          , featureSupport = function() {
            var h = {
                maskType: !0,
                svgLumaHidden: !0,
                offscreenCanvas: typeof OffscreenCanvas < "u"
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (h.maskType = !1),
            /firefox/i.test(navigator.userAgent) && (h.svgLumaHidden = !1),
            h
        }()
          , registeredEffects = {}
          , idPrefix = "filter_result_";
        function SVGEffects(h) {
            var a, u = "SourceGraphic", f = h.data.ef ? h.data.ef.length : 0, c = createElementID(), p = filtersFactory.createFilter(c, !0), d = 0;
            this.filters = [];
            var m;
            for (a = 0; a < f; a += 1) {
                m = null;
                var g = h.data.ef[a].ty;
                if (registeredEffects[g]) {
                    var v = registeredEffects[g].effect;
                    m = new v(p,h.effectsManager.effectElements[a],h,idPrefix + d,u),
                    u = idPrefix + d,
                    registeredEffects[g].countsAsEffect && (d += 1)
                }
                m && this.filters.push(m)
            }
            d && (h.globalData.defs.appendChild(p),
            h.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + c + ")")),
            this.filters.length && h.addRenderableComponent(this)
        }
        SVGEffects.prototype.renderFrame = function(h) {
            var a, u = this.filters.length;
            for (a = 0; a < u; a += 1)
                this.filters[a].renderFrame(h)
        }
        ;
        function registerEffect(h, a, u) {
            registeredEffects[h] = {
                effect: a,
                countsAsEffect: u
            }
        }
        function SVGBaseElement() {}
        SVGBaseElement.prototype = {
            initRendererElement: function() {
                this.layerElement = createNS("g")
            },
            createContainerElements: function() {
                this.matteElement = createNS("g"),
                this.transformedElement = this.layerElement,
                this.maskedElement = this.layerElement,
                this._sizeChanged = !1;
                var a = null;
                if (this.data.td) {
                    this.matteMasks = {};
                    var u = createNS("g");
                    u.setAttribute("id", this.layerId),
                    u.appendChild(this.layerElement),
                    a = u,
                    this.globalData.defs.appendChild(u)
                } else
                    this.data.tt ? (this.matteElement.appendChild(this.layerElement),
                    a = this.matteElement,
                    this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                this.data.ty === 0 && !this.data.hd) {
                    var f = createNS("clipPath")
                      , c = createNS("path");
                    c.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                    var p = createElementID();
                    if (f.setAttribute("id", p),
                    f.appendChild(c),
                    this.globalData.defs.appendChild(f),
                    this.checkMasks()) {
                        var d = createNS("g");
                        d.setAttribute("clip-path", "url(" + getLocationHref() + "#" + p + ")"),
                        d.appendChild(this.layerElement),
                        this.transformedElement = d,
                        a ? a.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                    } else
                        this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + p + ")")
                }
                this.data.bm !== 0 && this.setBlendMode()
            },
            renderElement: function() {
                this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()),
                this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
            },
            destroyBaseElement: function() {
                this.layerElement = null,
                this.matteElement = null,
                this.maskManager.destroy()
            },
            getBaseElement: function() {
                return this.data.hd ? null : this.baseElement
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data,this,this.globalData),
                this.renderableEffectsManager = new SVGEffects(this)
            },
            getMatte: function(a) {
                if (this.matteMasks || (this.matteMasks = {}),
                !this.matteMasks[a]) {
                    var u = this.layerId + "_" + a, f, c, p, d;
                    if (a === 1 || a === 3) {
                        var m = createNS("mask");
                        m.setAttribute("id", u),
                        m.setAttribute("mask-type", a === 3 ? "luminance" : "alpha"),
                        p = createNS("use"),
                        p.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                        m.appendChild(p),
                        this.globalData.defs.appendChild(m),
                        !featureSupport.maskType && a === 1 && (m.setAttribute("mask-type", "luminance"),
                        f = createElementID(),
                        c = filtersFactory.createFilter(f),
                        this.globalData.defs.appendChild(c),
                        c.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                        d = createNS("g"),
                        d.appendChild(p),
                        m.appendChild(d),
                        d.setAttribute("filter", "url(" + getLocationHref() + "#" + f + ")"))
                    } else if (a === 2) {
                        var g = createNS("mask");
                        g.setAttribute("id", u),
                        g.setAttribute("mask-type", "alpha");
                        var v = createNS("g");
                        g.appendChild(v),
                        f = createElementID(),
                        c = filtersFactory.createFilter(f);
                        var _ = createNS("feComponentTransfer");
                        _.setAttribute("in", "SourceGraphic"),
                        c.appendChild(_);
                        var b = createNS("feFuncA");
                        b.setAttribute("type", "table"),
                        b.setAttribute("tableValues", "1.0 0.0"),
                        _.appendChild(b),
                        this.globalData.defs.appendChild(c);
                        var P = createNS("rect");
                        P.setAttribute("width", this.comp.data.w),
                        P.setAttribute("height", this.comp.data.h),
                        P.setAttribute("x", "0"),
                        P.setAttribute("y", "0"),
                        P.setAttribute("fill", "#ffffff"),
                        P.setAttribute("opacity", "0"),
                        v.setAttribute("filter", "url(" + getLocationHref() + "#" + f + ")"),
                        v.appendChild(P),
                        p = createNS("use"),
                        p.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                        v.appendChild(p),
                        featureSupport.maskType || (g.setAttribute("mask-type", "luminance"),
                        c.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                        d = createNS("g"),
                        v.appendChild(P),
                        d.appendChild(this.layerElement),
                        v.appendChild(d)),
                        this.globalData.defs.appendChild(g)
                    }
                    this.matteMasks[a] = u
                }
                return this.matteMasks[a]
            },
            setMatte: function(a) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")")
            }
        };
        function HierarchyElement() {}
        HierarchyElement.prototype = {
            initHierarchy: function() {
                this.hierarchy = [],
                this._isParent = !1,
                this.checkParenting()
            },
            setHierarchy: function(a) {
                this.hierarchy = a
            },
            setAsParent: function() {
                this._isParent = !0
            },
            checkParenting: function() {
                this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
            }
        };
        function RenderableDOMElement() {}
        (function() {
            var h = {
                initElement: function(u, f, c) {
                    this.initFrame(),
                    this.initBaseData(u, f, c),
                    this.initTransform(u, f, c),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide()
                },
                hide: function() {
                    if (!this.hidden && (!this.isInRange || this.isTransparent)) {
                        var u = this.baseElement || this.layerElement;
                        u.style.display = "none",
                        this.hidden = !0
                    }
                },
                show: function() {
                    if (this.isInRange && !this.isTransparent) {
                        if (!this.data.hd) {
                            var u = this.baseElement || this.layerElement;
                            u.style.display = "block"
                        }
                        this.hidden = !1,
                        this._isFirstFrame = !0
                    }
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(u) {
                    this._mdf = !1,
                    this.prepareRenderableFrame(u),
                    this.prepareProperties(u, this.isInRange),
                    this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null,
                    this.destroyBaseElement()
                }
            };
            extendPrototype([RenderableElement, createProxyFunction(h)], RenderableDOMElement)
        }
        )();
        function IImageElement(h, a, u) {
            this.assetData = a.getAssetData(h.refId),
            this.assetData && this.assetData.sid && (this.assetData = a.slotManager.getProp(this.assetData)),
            this.initElement(h, a, u),
            this.sourceRect = {
                top: 0,
                left: 0,
                width: this.assetData.w,
                height: this.assetData.h
            }
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
        IImageElement.prototype.createContent = function() {
            var h = this.globalData.getAssetsPath(this.assetData);
            this.innerElem = createNS("image"),
            this.innerElem.setAttribute("width", this.assetData.w + "px"),
            this.innerElem.setAttribute("height", this.assetData.h + "px"),
            this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
            this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", h),
            this.layerElement.appendChild(this.innerElem)
        }
        ,
        IImageElement.prototype.sourceRectAtTime = function() {
            return this.sourceRect
        }
        ;
        function ProcessedElement(h, a) {
            this.elem = h,
            this.pos = a
        }
        function IShapeElement() {}
        IShapeElement.prototype = {
            addShapeToModifiers: function(a) {
                var u, f = this.shapeModifiers.length;
                for (u = 0; u < f; u += 1)
                    this.shapeModifiers[u].addShape(a)
            },
            isShapeInAnimatedModifiers: function(a) {
                for (var u = 0, f = this.shapeModifiers.length; u < f; )
                    if (this.shapeModifiers[u].isAnimatedWithShape(a))
                        return !0;
                return !1
            },
            renderModifiers: function() {
                if (this.shapeModifiers.length) {
                    var a, u = this.shapes.length;
                    for (a = 0; a < u; a += 1)
                        this.shapes[a].sh.reset();
                    u = this.shapeModifiers.length;
                    var f;
                    for (a = u - 1; a >= 0 && (f = this.shapeModifiers[a].processShapes(this._isFirstFrame),
                    !f); a -= 1)
                        ;
                }
            },
            searchProcessedElement: function(a) {
                for (var u = this.processedElements, f = 0, c = u.length; f < c; ) {
                    if (u[f].elem === a)
                        return u[f].pos;
                    f += 1
                }
                return 0
            },
            addProcessedElement: function(a, u) {
                for (var f = this.processedElements, c = f.length; c; )
                    if (c -= 1,
                    f[c].elem === a) {
                        f[c].pos = u;
                        return
                    }
                f.push(new ProcessedElement(a,u))
            },
            prepareFrame: function(a) {
                this.prepareRenderableFrame(a),
                this.prepareProperties(a, this.isInRange)
            }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
        }
          , lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
        };
        function SVGShapeData(h, a, u) {
            this.caches = [],
            this.styles = [],
            this.transformers = h,
            this.lStr = "",
            this.sh = u,
            this.lvl = a,
            this._isAnimated = !!u.k;
            for (var f = 0, c = h.length; f < c; ) {
                if (h[f].mProps.dynamicProperties.length) {
                    this._isAnimated = !0;
                    break
                }
                f += 1
            }
        }
        SVGShapeData.prototype.setAsAnimated = function() {
            this._isAnimated = !0
        }
        ;
        function SVGStyleData(h, a) {
            this.data = h,
            this.type = h.ty,
            this.d = "",
            this.lvl = a,
            this._mdf = !1,
            this.closed = h.hd === !0,
            this.pElem = createNS("path"),
            this.msElem = null
        }
        SVGStyleData.prototype.reset = function() {
            this.d = "",
            this._mdf = !1
        }
        ;
        function DashProperty(h, a, u, f) {
            this.elem = h,
            this.frameId = -1,
            this.dataProps = createSizedArray(a.length),
            this.renderer = u,
            this.k = !1,
            this.dashStr = "",
            this.dashArray = createTypedArray("float32", a.length ? a.length - 1 : 0),
            this.dashoffset = createTypedArray("float32", 1),
            this.initDynamicPropertyContainer(f);
            var c, p = a.length || 0, d;
            for (c = 0; c < p; c += 1)
                d = PropertyFactory.getProp(h, a[c].v, 0, 0, this),
                this.k = d.k || this.k,
                this.dataProps[c] = {
                    n: a[c].n,
                    p: d
                };
            this.k || this.getValue(!0),
            this._isAnimated = this.k
        }
        DashProperty.prototype.getValue = function(h) {
            if (!(this.elem.globalData.frameId === this.frameId && !h) && (this.frameId = this.elem.globalData.frameId,
            this.iterateDynamicProperties(),
            this._mdf = this._mdf || h,
            this._mdf)) {
                var a = 0
                  , u = this.dataProps.length;
                for (this.renderer === "svg" && (this.dashStr = ""),
                a = 0; a < u; a += 1)
                    this.dataProps[a].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[a].p.v : this.dashArray[a] = this.dataProps[a].p.v : this.dashoffset[0] = this.dataProps[a].p.v
            }
        }
        ,
        extendPrototype([DynamicPropertyContainer], DashProperty);
        function SVGStrokeStyleData(h, a, u) {
            this.initDynamicPropertyContainer(h),
            this.getValue = this.iterateDynamicProperties,
            this.o = PropertyFactory.getProp(h, a.o, 0, .01, this),
            this.w = PropertyFactory.getProp(h, a.w, 0, null, this),
            this.d = new DashProperty(h,a.d || {},"svg",this),
            this.c = PropertyFactory.getProp(h, a.c, 1, 255, this),
            this.style = u,
            this._isAnimated = !!this._isAnimated
        }
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
        function SVGFillStyleData(h, a, u) {
            this.initDynamicPropertyContainer(h),
            this.getValue = this.iterateDynamicProperties,
            this.o = PropertyFactory.getProp(h, a.o, 0, .01, this),
            this.c = PropertyFactory.getProp(h, a.c, 1, 255, this),
            this.style = u
        }
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
        function SVGNoStyleData(h, a, u) {
            this.initDynamicPropertyContainer(h),
            this.getValue = this.iterateDynamicProperties,
            this.style = u
        }
        extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
        function GradientProperty(h, a, u) {
            this.data = a,
            this.c = createTypedArray("uint8c", a.p * 4);
            var f = a.k.k[0].s ? a.k.k[0].s.length - a.p * 4 : a.k.k.length - a.p * 4;
            this.o = createTypedArray("float32", f),
            this._cmdf = !1,
            this._omdf = !1,
            this._collapsable = this.checkCollapsable(),
            this._hasOpacity = f,
            this.initDynamicPropertyContainer(u),
            this.prop = PropertyFactory.getProp(h, a.k, 1, null, this),
            this.k = this.prop.k,
            this.getValue(!0)
        }
        GradientProperty.prototype.comparePoints = function(h, a) {
            for (var u = 0, f = this.o.length / 2, c; u < f; ) {
                if (c = Math.abs(h[u * 4] - h[a * 4 + u * 2]),
                c > .01)
                    return !1;
                u += 1
            }
            return !0
        }
        ,
        GradientProperty.prototype.checkCollapsable = function() {
            if (this.o.length / 2 !== this.c.length / 4)
                return !1;
            if (this.data.k.k[0].s)
                for (var h = 0, a = this.data.k.k.length; h < a; ) {
                    if (!this.comparePoints(this.data.k.k[h].s, this.data.p))
                        return !1;
                    h += 1
                }
            else if (!this.comparePoints(this.data.k.k, this.data.p))
                return !1;
            return !0
        }
        ,
        GradientProperty.prototype.getValue = function(h) {
            if (this.prop.getValue(),
            this._mdf = !1,
            this._cmdf = !1,
            this._omdf = !1,
            this.prop._mdf || h) {
                var a, u = this.data.p * 4, f, c;
                for (a = 0; a < u; a += 1)
                    f = a % 4 === 0 ? 100 : 255,
                    c = Math.round(this.prop.v[a] * f),
                    this.c[a] !== c && (this.c[a] = c,
                    this._cmdf = !h);
                if (this.o.length)
                    for (u = this.prop.v.length,
                    a = this.data.p * 4; a < u; a += 1)
                        f = a % 2 === 0 ? 100 : 1,
                        c = a % 2 === 0 ? Math.round(this.prop.v[a] * 100) : this.prop.v[a],
                        this.o[a - this.data.p * 4] !== c && (this.o[a - this.data.p * 4] = c,
                        this._omdf = !h);
                this._mdf = !h
            }
        }
        ,
        extendPrototype([DynamicPropertyContainer], GradientProperty);
        function SVGGradientFillStyleData(h, a, u) {
            this.initDynamicPropertyContainer(h),
            this.getValue = this.iterateDynamicProperties,
            this.initGradientData(h, a, u)
        }
        SVGGradientFillStyleData.prototype.initGradientData = function(h, a, u) {
            this.o = PropertyFactory.getProp(h, a.o, 0, .01, this),
            this.s = PropertyFactory.getProp(h, a.s, 1, null, this),
            this.e = PropertyFactory.getProp(h, a.e, 1, null, this),
            this.h = PropertyFactory.getProp(h, a.h || {
                k: 0
            }, 0, .01, this),
            this.a = PropertyFactory.getProp(h, a.a || {
                k: 0
            }, 0, degToRads, this),
            this.g = new GradientProperty(h,a.g,this),
            this.style = u,
            this.stops = [],
            this.setGradientData(u.pElem, a),
            this.setGradientOpacity(a, u),
            this._isAnimated = !!this._isAnimated
        }
        ,
        SVGGradientFillStyleData.prototype.setGradientData = function(h, a) {
            var u = createElementID()
              , f = createNS(a.t === 1 ? "linearGradient" : "radialGradient");
            f.setAttribute("id", u),
            f.setAttribute("spreadMethod", "pad"),
            f.setAttribute("gradientUnits", "userSpaceOnUse");
            var c = [], p, d, m;
            for (m = a.g.p * 4,
            d = 0; d < m; d += 4)
                p = createNS("stop"),
                f.appendChild(p),
                c.push(p);
            h.setAttribute(a.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + u + ")"),
            this.gf = f,
            this.cst = c
        }
        ,
        SVGGradientFillStyleData.prototype.setGradientOpacity = function(h, a) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var u, f, c, p = createNS("mask"), d = createNS("path");
                p.appendChild(d);
                var m = createElementID()
                  , g = createElementID();
                p.setAttribute("id", g);
                var v = createNS(h.t === 1 ? "linearGradient" : "radialGradient");
                v.setAttribute("id", m),
                v.setAttribute("spreadMethod", "pad"),
                v.setAttribute("gradientUnits", "userSpaceOnUse"),
                c = h.g.k.k[0].s ? h.g.k.k[0].s.length : h.g.k.k.length;
                var _ = this.stops;
                for (f = h.g.p * 4; f < c; f += 2)
                    u = createNS("stop"),
                    u.setAttribute("stop-color", "rgb(255,255,255)"),
                    v.appendChild(u),
                    _.push(u);
                d.setAttribute(h.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + m + ")"),
                h.ty === "gs" && (d.setAttribute("stroke-linecap", lineCapEnum[h.lc || 2]),
                d.setAttribute("stroke-linejoin", lineJoinEnum[h.lj || 2]),
                h.lj === 1 && d.setAttribute("stroke-miterlimit", h.ml)),
                this.of = v,
                this.ms = p,
                this.ost = _,
                this.maskId = g,
                a.msElem = d
            }
        }
        ,
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
        function SVGGradientStrokeStyleData(h, a, u) {
            this.initDynamicPropertyContainer(h),
            this.getValue = this.iterateDynamicProperties,
            this.w = PropertyFactory.getProp(h, a.w, 0, null, this),
            this.d = new DashProperty(h,a.d || {},"svg",this),
            this.initGradientData(h, a, u),
            this._isAnimated = !!this._isAnimated
        }
        extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        function ShapeGroupData() {
            this.it = [],
            this.prevViewData = [],
            this.gr = createNS("g")
        }
        function SVGTransformData(h, a, u) {
            this.transform = {
                mProps: h,
                op: a,
                container: u
            },
            this.elements = [],
            this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        var buildShapeString = function(a, u, f, c) {
            if (u === 0)
                return "";
            var p = a.o, d = a.i, m = a.v, g, v = " M" + c.applyToPointStringified(m[0][0], m[0][1]);
            for (g = 1; g < u; g += 1)
                v += " C" + c.applyToPointStringified(p[g - 1][0], p[g - 1][1]) + " " + c.applyToPointStringified(d[g][0], d[g][1]) + " " + c.applyToPointStringified(m[g][0], m[g][1]);
            return f && u && (v += " C" + c.applyToPointStringified(p[g - 1][0], p[g - 1][1]) + " " + c.applyToPointStringified(d[0][0], d[0][1]) + " " + c.applyToPointStringified(m[0][0], m[0][1]),
            v += "z"),
            v
        }
          , SVGElementsRenderer = function() {
            var h = new Matrix
              , a = new Matrix
              , u = {
                createRenderFunction: f
            };
            function f(b) {
                switch (b.ty) {
                case "fl":
                    return m;
                case "gf":
                    return v;
                case "gs":
                    return g;
                case "st":
                    return _;
                case "sh":
                case "el":
                case "rc":
                case "sr":
                    return d;
                case "tr":
                    return c;
                case "no":
                    return p;
                default:
                    return null
                }
            }
            function c(b, P, J) {
                (J || P.transform.op._mdf) && P.transform.container.setAttribute("opacity", P.transform.op.v),
                (J || P.transform.mProps._mdf) && P.transform.container.setAttribute("transform", P.transform.mProps.v.to2dCSS())
            }
            function p() {}
            function d(b, P, J) {
                var x, w, pe, L, R, M, Z = P.styles.length, he = P.lvl, et, ei, ii, oi, hi;
                for (M = 0; M < Z; M += 1) {
                    if (L = P.sh._mdf || J,
                    P.styles[M].lvl < he) {
                        for (ei = a.reset(),
                        oi = he - P.styles[M].lvl,
                        hi = P.transformers.length - 1; !L && oi > 0; )
                            L = P.transformers[hi].mProps._mdf || L,
                            oi -= 1,
                            hi -= 1;
                        if (L)
                            for (oi = he - P.styles[M].lvl,
                            hi = P.transformers.length - 1; oi > 0; )
                                ii = P.transformers[hi].mProps.v.props,
                                ei.transform(ii[0], ii[1], ii[2], ii[3], ii[4], ii[5], ii[6], ii[7], ii[8], ii[9], ii[10], ii[11], ii[12], ii[13], ii[14], ii[15]),
                                oi -= 1,
                                hi -= 1
                    } else
                        ei = h;
                    if (et = P.sh.paths,
                    w = et._length,
                    L) {
                        for (pe = "",
                        x = 0; x < w; x += 1)
                            R = et.shapes[x],
                            R && R._length && (pe += buildShapeString(R, R._length, R.c, ei));
                        P.caches[M] = pe
                    } else
                        pe = P.caches[M];
                    P.styles[M].d += b.hd === !0 ? "" : pe,
                    P.styles[M]._mdf = L || P.styles[M]._mdf
                }
            }
            function m(b, P, J) {
                var x = P.style;
                (P.c._mdf || J) && x.pElem.setAttribute("fill", "rgb(" + bmFloor(P.c.v[0]) + "," + bmFloor(P.c.v[1]) + "," + bmFloor(P.c.v[2]) + ")"),
                (P.o._mdf || J) && x.pElem.setAttribute("fill-opacity", P.o.v)
            }
            function g(b, P, J) {
                v(b, P, J),
                _(b, P, J)
            }
            function v(b, P, J) {
                var x = P.gf
                  , w = P.g._hasOpacity
                  , pe = P.s.v
                  , L = P.e.v;
                if (P.o._mdf || J) {
                    var R = b.ty === "gf" ? "fill-opacity" : "stroke-opacity";
                    P.style.pElem.setAttribute(R, P.o.v)
                }
                if (P.s._mdf || J) {
                    var M = b.t === 1 ? "x1" : "cx"
                      , Z = M === "x1" ? "y1" : "cy";
                    x.setAttribute(M, pe[0]),
                    x.setAttribute(Z, pe[1]),
                    w && !P.g._collapsable && (P.of.setAttribute(M, pe[0]),
                    P.of.setAttribute(Z, pe[1]))
                }
                var he, et, ei, ii;
                if (P.g._cmdf || J) {
                    he = P.cst;
                    var oi = P.g.c;
                    for (ei = he.length,
                    et = 0; et < ei; et += 1)
                        ii = he[et],
                        ii.setAttribute("offset", oi[et * 4] + "%"),
                        ii.setAttribute("stop-color", "rgb(" + oi[et * 4 + 1] + "," + oi[et * 4 + 2] + "," + oi[et * 4 + 3] + ")")
                }
                if (w && (P.g._omdf || J)) {
                    var hi = P.g.o;
                    for (P.g._collapsable ? he = P.cst : he = P.ost,
                    ei = he.length,
                    et = 0; et < ei; et += 1)
                        ii = he[et],
                        P.g._collapsable || ii.setAttribute("offset", hi[et * 2] + "%"),
                        ii.setAttribute("stop-opacity", hi[et * 2 + 1])
                }
                if (b.t === 1)
                    (P.e._mdf || J) && (x.setAttribute("x2", L[0]),
                    x.setAttribute("y2", L[1]),
                    w && !P.g._collapsable && (P.of.setAttribute("x2", L[0]),
                    P.of.setAttribute("y2", L[1])));
                else {
                    var fi;
                    if ((P.s._mdf || P.e._mdf || J) && (fi = Math.sqrt(Math.pow(pe[0] - L[0], 2) + Math.pow(pe[1] - L[1], 2)),
                    x.setAttribute("r", fi),
                    w && !P.g._collapsable && P.of.setAttribute("r", fi)),
                    P.e._mdf || P.h._mdf || P.a._mdf || J) {
                        fi || (fi = Math.sqrt(Math.pow(pe[0] - L[0], 2) + Math.pow(pe[1] - L[1], 2)));
                        var ui = Math.atan2(L[1] - pe[1], L[0] - pe[0])
                          , pi = P.h.v;
                        pi >= 1 ? pi = .99 : pi <= -1 && (pi = -.99);
                        var mi = fi * pi
                          , li = Math.cos(ui + P.a.v) * mi + pe[0]
                          , ni = Math.sin(ui + P.a.v) * mi + pe[1];
                        x.setAttribute("fx", li),
                        x.setAttribute("fy", ni),
                        w && !P.g._collapsable && (P.of.setAttribute("fx", li),
                        P.of.setAttribute("fy", ni))
                    }
                }
            }
            function _(b, P, J) {
                var x = P.style
                  , w = P.d;
                w && (w._mdf || J) && w.dashStr && (x.pElem.setAttribute("stroke-dasharray", w.dashStr),
                x.pElem.setAttribute("stroke-dashoffset", w.dashoffset[0])),
                P.c && (P.c._mdf || J) && x.pElem.setAttribute("stroke", "rgb(" + bmFloor(P.c.v[0]) + "," + bmFloor(P.c.v[1]) + "," + bmFloor(P.c.v[2]) + ")"),
                (P.o._mdf || J) && x.pElem.setAttribute("stroke-opacity", P.o.v),
                (P.w._mdf || J) && (x.pElem.setAttribute("stroke-width", P.w.v),
                x.msElem && x.msElem.setAttribute("stroke-width", P.w.v))
            }
            return u
        }();
        function SVGShapeElement(h, a, u) {
            this.shapes = [],
            this.shapesData = h.shapes,
            this.stylesList = [],
            this.shapeModifiers = [],
            this.itemsData = [],
            this.processedElements = [],
            this.animatedContents = [],
            this.initElement(h, a, u),
            this.prevViewData = []
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
        SVGShapeElement.prototype.initSecondaryElement = function() {}
        ,
        SVGShapeElement.prototype.identityMatrix = new Matrix,
        SVGShapeElement.prototype.buildExpressionInterface = function() {}
        ,
        SVGShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
            this.filterUniqueShapes()
        }
        ,
        SVGShapeElement.prototype.filterUniqueShapes = function() {
            var h, a = this.shapes.length, u, f, c = this.stylesList.length, p, d = [], m = !1;
            for (f = 0; f < c; f += 1) {
                for (p = this.stylesList[f],
                m = !1,
                d.length = 0,
                h = 0; h < a; h += 1)
                    u = this.shapes[h],
                    u.styles.indexOf(p) !== -1 && (d.push(u),
                    m = u._isAnimated || m);
                d.length > 1 && m && this.setShapesAsAnimated(d)
            }
        }
        ,
        SVGShapeElement.prototype.setShapesAsAnimated = function(h) {
            var a, u = h.length;
            for (a = 0; a < u; a += 1)
                h[a].setAsAnimated()
        }
        ,
        SVGShapeElement.prototype.createStyleElement = function(h, a) {
            var u, f = new SVGStyleData(h,a), c = f.pElem;
            if (h.ty === "st")
                u = new SVGStrokeStyleData(this,h,f);
            else if (h.ty === "fl")
                u = new SVGFillStyleData(this,h,f);
            else if (h.ty === "gf" || h.ty === "gs") {
                var p = h.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
                u = new p(this,h,f),
                this.globalData.defs.appendChild(u.gf),
                u.maskId && (this.globalData.defs.appendChild(u.ms),
                this.globalData.defs.appendChild(u.of),
                c.setAttribute("mask", "url(" + getLocationHref() + "#" + u.maskId + ")"))
            } else
                h.ty === "no" && (u = new SVGNoStyleData(this,h,f));
            return (h.ty === "st" || h.ty === "gs") && (c.setAttribute("stroke-linecap", lineCapEnum[h.lc || 2]),
            c.setAttribute("stroke-linejoin", lineJoinEnum[h.lj || 2]),
            c.setAttribute("fill-opacity", "0"),
            h.lj === 1 && c.setAttribute("stroke-miterlimit", h.ml)),
            h.r === 2 && c.setAttribute("fill-rule", "evenodd"),
            h.ln && c.setAttribute("id", h.ln),
            h.cl && c.setAttribute("class", h.cl),
            h.bm && (c.style["mix-blend-mode"] = getBlendMode(h.bm)),
            this.stylesList.push(f),
            this.addToAnimatedContents(h, u),
            u
        }
        ,
        SVGShapeElement.prototype.createGroupElement = function(h) {
            var a = new ShapeGroupData;
            return h.ln && a.gr.setAttribute("id", h.ln),
            h.cl && a.gr.setAttribute("class", h.cl),
            h.bm && (a.gr.style["mix-blend-mode"] = getBlendMode(h.bm)),
            a
        }
        ,
        SVGShapeElement.prototype.createTransformElement = function(h, a) {
            var u = TransformPropertyFactory.getTransformProperty(this, h, this)
              , f = new SVGTransformData(u,u.o,a);
            return this.addToAnimatedContents(h, f),
            f
        }
        ,
        SVGShapeElement.prototype.createShapeElement = function(h, a, u) {
            var f = 4;
            h.ty === "rc" ? f = 5 : h.ty === "el" ? f = 6 : h.ty === "sr" && (f = 7);
            var c = ShapePropertyFactory.getShapeProp(this, h, f, this)
              , p = new SVGShapeData(a,u,c);
            return this.shapes.push(p),
            this.addShapeToModifiers(p),
            this.addToAnimatedContents(h, p),
            p
        }
        ,
        SVGShapeElement.prototype.addToAnimatedContents = function(h, a) {
            for (var u = 0, f = this.animatedContents.length; u < f; ) {
                if (this.animatedContents[u].element === a)
                    return;
                u += 1
            }
            this.animatedContents.push({
                fn: SVGElementsRenderer.createRenderFunction(h),
                element: a,
                data: h
            })
        }
        ,
        SVGShapeElement.prototype.setElementStyles = function(h) {
            var a = h.styles, u, f = this.stylesList.length;
            for (u = 0; u < f; u += 1)
                this.stylesList[u].closed || a.push(this.stylesList[u])
        }
        ,
        SVGShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var h, a = this.itemsData.length;
            for (h = 0; h < a; h += 1)
                this.prevViewData[h] = this.itemsData[h];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
            this.filterUniqueShapes(),
            a = this.dynamicProperties.length,
            h = 0; h < a; h += 1)
                this.dynamicProperties[h].getValue();
            this.renderModifiers()
        }
        ,
        SVGShapeElement.prototype.searchShapes = function(h, a, u, f, c, p, d) {
            var m = [].concat(p), g, v = h.length - 1, _, b, P = [], J = [], x, w, pe;
            for (g = v; g >= 0; g -= 1) {
                if (pe = this.searchProcessedElement(h[g]),
                pe ? a[g] = u[pe - 1] : h[g]._render = d,
                h[g].ty === "fl" || h[g].ty === "st" || h[g].ty === "gf" || h[g].ty === "gs" || h[g].ty === "no")
                    pe ? a[g].style.closed = !1 : a[g] = this.createStyleElement(h[g], c),
                    h[g]._render && a[g].style.pElem.parentNode !== f && f.appendChild(a[g].style.pElem),
                    P.push(a[g].style);
                else if (h[g].ty === "gr") {
                    if (!pe)
                        a[g] = this.createGroupElement(h[g]);
                    else
                        for (b = a[g].it.length,
                        _ = 0; _ < b; _ += 1)
                            a[g].prevViewData[_] = a[g].it[_];
                    this.searchShapes(h[g].it, a[g].it, a[g].prevViewData, a[g].gr, c + 1, m, d),
                    h[g]._render && a[g].gr.parentNode !== f && f.appendChild(a[g].gr)
                } else
                    h[g].ty === "tr" ? (pe || (a[g] = this.createTransformElement(h[g], f)),
                    x = a[g].transform,
                    m.push(x)) : h[g].ty === "sh" || h[g].ty === "rc" || h[g].ty === "el" || h[g].ty === "sr" ? (pe || (a[g] = this.createShapeElement(h[g], m, c)),
                    this.setElementStyles(a[g])) : h[g].ty === "tm" || h[g].ty === "rd" || h[g].ty === "ms" || h[g].ty === "pb" || h[g].ty === "zz" || h[g].ty === "op" ? (pe ? (w = a[g],
                    w.closed = !1) : (w = ShapeModifiers.getModifier(h[g].ty),
                    w.init(this, h[g]),
                    a[g] = w,
                    this.shapeModifiers.push(w)),
                    J.push(w)) : h[g].ty === "rp" && (pe ? (w = a[g],
                    w.closed = !0) : (w = ShapeModifiers.getModifier(h[g].ty),
                    a[g] = w,
                    w.init(this, h, g, a),
                    this.shapeModifiers.push(w),
                    d = !1),
                    J.push(w));
                this.addProcessedElement(h[g], g + 1)
            }
            for (v = P.length,
            g = 0; g < v; g += 1)
                P[g].closed = !0;
            for (v = J.length,
            g = 0; g < v; g += 1)
                J[g].closed = !0
        }
        ,
        SVGShapeElement.prototype.renderInnerContent = function() {
            this.renderModifiers();
            var h, a = this.stylesList.length;
            for (h = 0; h < a; h += 1)
                this.stylesList[h].reset();
            for (this.renderShape(),
            h = 0; h < a; h += 1)
                (this.stylesList[h]._mdf || this._isFirstFrame) && (this.stylesList[h].msElem && (this.stylesList[h].msElem.setAttribute("d", this.stylesList[h].d),
                this.stylesList[h].d = "M0 0" + this.stylesList[h].d),
                this.stylesList[h].pElem.setAttribute("d", this.stylesList[h].d || "M0 0"))
        }
        ,
        SVGShapeElement.prototype.renderShape = function() {
            var h, a = this.animatedContents.length, u;
            for (h = 0; h < a; h += 1)
                u = this.animatedContents[h],
                (this._isFirstFrame || u.element._isAnimated) && u.data !== !0 && u.fn(u.data, u.element, this._isFirstFrame)
        }
        ,
        SVGShapeElement.prototype.destroy = function() {
            this.destroyBaseElement(),
            this.shapesData = null,
            this.itemsData = null
        }
        ;
        function LetterProps(h, a, u, f, c, p) {
            this.o = h,
            this.sw = a,
            this.sc = u,
            this.fc = f,
            this.m = c,
            this.p = p,
            this._mdf = {
                o: !0,
                sw: !!a,
                sc: !!u,
                fc: !!f,
                m: !0,
                p: !0
            }
        }
        LetterProps.prototype.update = function(h, a, u, f, c, p) {
            this._mdf.o = !1,
            this._mdf.sw = !1,
            this._mdf.sc = !1,
            this._mdf.fc = !1,
            this._mdf.m = !1,
            this._mdf.p = !1;
            var d = !1;
            return this.o !== h && (this.o = h,
            this._mdf.o = !0,
            d = !0),
            this.sw !== a && (this.sw = a,
            this._mdf.sw = !0,
            d = !0),
            this.sc !== u && (this.sc = u,
            this._mdf.sc = !0,
            d = !0),
            this.fc !== f && (this.fc = f,
            this._mdf.fc = !0,
            d = !0),
            this.m !== c && (this.m = c,
            this._mdf.m = !0,
            d = !0),
            p.length && (this.p[0] !== p[0] || this.p[1] !== p[1] || this.p[4] !== p[4] || this.p[5] !== p[5] || this.p[12] !== p[12] || this.p[13] !== p[13]) && (this.p = p,
            this._mdf.p = !0,
            d = !0),
            d
        }
        ;
        function TextProperty(h, a) {
            this._frameId = initialDefaultFrame,
            this.pv = "",
            this.v = "",
            this.kf = !1,
            this._isFirstFrame = !0,
            this._mdf = !1,
            a.d && a.d.sid && (a.d = h.globalData.slotManager.getProp(a.d)),
            this.data = a,
            this.elem = h,
            this.comp = this.elem.comp,
            this.keysIndex = 0,
            this.canResize = !1,
            this.minimumFontSize = 1,
            this.effectsSequence = [],
            this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1
            },
            this.copyData(this.currentData, this.data.d.k[0].s),
            this.searchProperty() || this.completeTextData(this.currentData)
        }
        TextProperty.prototype.defaultBoxWidth = [0, 0],
        TextProperty.prototype.copyData = function(h, a) {
            for (var u in a)
                Object.prototype.hasOwnProperty.call(a, u) && (h[u] = a[u]);
            return h
        }
        ,
        TextProperty.prototype.setCurrentData = function(h) {
            h.__complete || this.completeTextData(h),
            this.currentData = h,
            this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
            this._mdf = !0
        }
        ,
        TextProperty.prototype.searchProperty = function() {
            return this.searchKeyframes()
        }
        ,
        TextProperty.prototype.searchKeyframes = function() {
            return this.kf = this.data.d.k.length > 1,
            this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
            this.kf
        }
        ,
        TextProperty.prototype.addEffect = function(h) {
            this.effectsSequence.push(h),
            this.elem.addDynamicProperty(this)
        }
        ,
        TextProperty.prototype.getValue = function(h) {
            if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !h)) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var a = this.currentData
                  , u = this.keysIndex;
                if (this.lock) {
                    this.setCurrentData(this.currentData);
                    return
                }
                this.lock = !0,
                this._mdf = !1;
                var f, c = this.effectsSequence.length, p = h || this.data.d.k[this.keysIndex].s;
                for (f = 0; f < c; f += 1)
                    u !== this.keysIndex ? p = this.effectsSequence[f](p, p.t) : p = this.effectsSequence[f](this.currentData, p.t);
                a !== p && this.setCurrentData(p),
                this.v = this.currentData,
                this.pv = this.v,
                this.lock = !1,
                this.frameId = this.elem.globalData.frameId
            }
        }
        ,
        TextProperty.prototype.getKeyframeValue = function() {
            for (var h = this.data.d.k, a = this.elem.comp.renderedFrame, u = 0, f = h.length; u <= f - 1 && !(u === f - 1 || h[u + 1].t > a); )
                u += 1;
            return this.keysIndex !== u && (this.keysIndex = u),
            this.data.d.k[this.keysIndex].s
        }
        ,
        TextProperty.prototype.buildFinalText = function(h) {
            for (var a = [], u = 0, f = h.length, c, p, d = !1; u < f; )
                c = h.charCodeAt(u),
                FontManager.isCombinedCharacter(c) ? a[a.length - 1] += h.charAt(u) : c >= 55296 && c <= 56319 ? (p = h.charCodeAt(u + 1),
                p >= 56320 && p <= 57343 ? (d || FontManager.isModifier(c, p) ? (a[a.length - 1] += h.substr(u, 2),
                d = !1) : a.push(h.substr(u, 2)),
                u += 1) : a.push(h.charAt(u))) : c > 56319 ? (p = h.charCodeAt(u + 1),
                FontManager.isZeroWidthJoiner(c, p) ? (d = !0,
                a[a.length - 1] += h.substr(u, 2),
                u += 1) : a.push(h.charAt(u))) : FontManager.isZeroWidthJoiner(c) ? (a[a.length - 1] += h.charAt(u),
                d = !0) : a.push(h.charAt(u)),
                u += 1;
            return a
        }
        ,
        TextProperty.prototype.completeTextData = function(h) {
            h.__complete = !0;
            var a = this.elem.globalData.fontManager, u = this.data, f = [], c, p, d, m = 0, g, v = u.m.g, _ = 0, b = 0, P = 0, J = [], x = 0, w = 0, pe, L, R = a.getFontByName(h.f), M, Z = 0, he = getFontProperties(R);
            h.fWeight = he.weight,
            h.fStyle = he.style,
            h.finalSize = h.s,
            h.finalText = this.buildFinalText(h.t),
            p = h.finalText.length,
            h.finalLineHeight = h.lh;
            var et = h.tr / 1e3 * h.finalSize, ei;
            if (h.sz)
                for (var ii = !0, oi = h.sz[0], hi = h.sz[1], fi, ui; ii; ) {
                    ui = this.buildFinalText(h.t),
                    fi = 0,
                    x = 0,
                    p = ui.length,
                    et = h.tr / 1e3 * h.finalSize;
                    var pi = -1;
                    for (c = 0; c < p; c += 1)
                        ei = ui[c].charCodeAt(0),
                        d = !1,
                        ui[c] === " " ? pi = c : (ei === 13 || ei === 3) && (x = 0,
                        d = !0,
                        fi += h.finalLineHeight || h.finalSize * 1.2),
                        a.chars ? (M = a.getCharData(ui[c], R.fStyle, R.fFamily),
                        Z = d ? 0 : M.w * h.finalSize / 100) : Z = a.measureText(ui[c], h.f, h.finalSize),
                        x + Z > oi && ui[c] !== " " ? (pi === -1 ? p += 1 : c = pi,
                        fi += h.finalLineHeight || h.finalSize * 1.2,
                        ui.splice(c, pi === c ? 1 : 0, "\r"),
                        pi = -1,
                        x = 0) : (x += Z,
                        x += et);
                    fi += R.ascent * h.finalSize / 100,
                    this.canResize && h.finalSize > this.minimumFontSize && hi < fi ? (h.finalSize -= 1,
                    h.finalLineHeight = h.finalSize * h.lh / h.s) : (h.finalText = ui,
                    p = h.finalText.length,
                    ii = !1)
                }
            x = -et,
            Z = 0;
            var mi = 0, li;
            for (c = 0; c < p; c += 1)
                if (d = !1,
                li = h.finalText[c],
                ei = li.charCodeAt(0),
                ei === 13 || ei === 3 ? (mi = 0,
                J.push(x),
                w = x > w ? x : w,
                x = -2 * et,
                g = "",
                d = !0,
                P += 1) : g = li,
                a.chars ? (M = a.getCharData(li, R.fStyle, a.getFontByName(h.f).fFamily),
                Z = d ? 0 : M.w * h.finalSize / 100) : Z = a.measureText(g, h.f, h.finalSize),
                li === " " ? mi += Z + et : (x += Z + et + mi,
                mi = 0),
                f.push({
                    l: Z,
                    an: Z,
                    add: _,
                    n: d,
                    anIndexes: [],
                    val: g,
                    line: P,
                    animatorJustifyOffset: 0
                }),
                v == 2) {
                    if (_ += Z,
                    g === "" || g === " " || c === p - 1) {
                        for ((g === "" || g === " ") && (_ -= Z); b <= c; )
                            f[b].an = _,
                            f[b].ind = m,
                            f[b].extra = Z,
                            b += 1;
                        m += 1,
                        _ = 0
                    }
                } else if (v == 3) {
                    if (_ += Z,
                    g === "" || c === p - 1) {
                        for (g === "" && (_ -= Z); b <= c; )
                            f[b].an = _,
                            f[b].ind = m,
                            f[b].extra = Z,
                            b += 1;
                        _ = 0,
                        m += 1
                    }
                } else
                    f[m].ind = m,
                    f[m].extra = 0,
                    m += 1;
            if (h.l = f,
            w = x > w ? x : w,
            J.push(x),
            h.sz)
                h.boxWidth = h.sz[0],
                h.justifyOffset = 0;
            else
                switch (h.boxWidth = w,
                h.j) {
                case 1:
                    h.justifyOffset = -h.boxWidth;
                    break;
                case 2:
                    h.justifyOffset = -h.boxWidth / 2;
                    break;
                default:
                    h.justifyOffset = 0
                }
            h.lineWidths = J;
            var ni = u.a, ri, ti;
            L = ni.length;
            var si, ci, ai = [];
            for (pe = 0; pe < L; pe += 1) {
                for (ri = ni[pe],
                ri.a.sc && (h.strokeColorAnim = !0),
                ri.a.sw && (h.strokeWidthAnim = !0),
                (ri.a.fc || ri.a.fh || ri.a.fs || ri.a.fb) && (h.fillColorAnim = !0),
                ci = 0,
                si = ri.s.b,
                c = 0; c < p; c += 1)
                    ti = f[c],
                    ti.anIndexes[pe] = ci,
                    (si == 1 && ti.val !== "" || si == 2 && ti.val !== "" && ti.val !== " " || si == 3 && (ti.n || ti.val == " " || c == p - 1) || si == 4 && (ti.n || c == p - 1)) && (ri.s.rn === 1 && ai.push(ci),
                    ci += 1);
                u.a[pe].s.totalChars = ci;
                var di = -1, gi;
                if (ri.s.rn === 1)
                    for (c = 0; c < p; c += 1)
                        ti = f[c],
                        di != ti.anIndexes[pe] && (di = ti.anIndexes[pe],
                        gi = ai.splice(Math.floor(Math.random() * ai.length), 1)[0]),
                        ti.anIndexes[pe] = gi
            }
            h.yOffset = h.finalLineHeight || h.finalSize * 1.2,
            h.ls = h.ls || 0,
            h.ascent = R.ascent * h.finalSize / 100
        }
        ,
        TextProperty.prototype.updateDocumentData = function(h, a) {
            a = a === void 0 ? this.keysIndex : a;
            var u = this.copyData({}, this.data.d.k[a].s);
            u = this.copyData(u, h),
            this.data.d.k[a].s = u,
            this.recalculate(a),
            this.setCurrentData(u),
            this.elem.addDynamicProperty(this)
        }
        ,
        TextProperty.prototype.recalculate = function(h) {
            var a = this.data.d.k[h].s;
            a.__complete = !1,
            this.keysIndex = 0,
            this._isFirstFrame = !0,
            this.getValue(a)
        }
        ,
        TextProperty.prototype.canResizeFont = function(h) {
            this.canResize = h,
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this)
        }
        ,
        TextProperty.prototype.setMinimumFontSize = function(h) {
            this.minimumFontSize = Math.floor(h) || 1,
            this.recalculate(this.keysIndex),
            this.elem.addDynamicProperty(this)
        }
        ;
        var TextSelectorProp = function() {
            var h = Math.max
              , a = Math.min
              , u = Math.floor;
            function f(p, d) {
                this._currentTextLength = -1,
                this.k = !1,
                this.data = d,
                this.elem = p,
                this.comp = p.comp,
                this.finalS = 0,
                this.finalE = 0,
                this.initDynamicPropertyContainer(p),
                this.s = PropertyFactory.getProp(p, d.s || {
                    k: 0
                }, 0, 0, this),
                "e"in d ? this.e = PropertyFactory.getProp(p, d.e, 0, 0, this) : this.e = {
                    v: 100
                },
                this.o = PropertyFactory.getProp(p, d.o || {
                    k: 0
                }, 0, 0, this),
                this.xe = PropertyFactory.getProp(p, d.xe || {
                    k: 0
                }, 0, 0, this),
                this.ne = PropertyFactory.getProp(p, d.ne || {
                    k: 0
                }, 0, 0, this),
                this.sm = PropertyFactory.getProp(p, d.sm || {
                    k: 100
                }, 0, 0, this),
                this.a = PropertyFactory.getProp(p, d.a, 0, .01, this),
                this.dynamicProperties.length || this.getValue()
            }
            f.prototype = {
                getMult: function(d) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var m = 0
                      , g = 0
                      , v = 1
                      , _ = 1;
                    this.ne.v > 0 ? m = this.ne.v / 100 : g = -this.ne.v / 100,
                    this.xe.v > 0 ? v = 1 - this.xe.v / 100 : _ = 1 + this.xe.v / 100;
                    var b = BezierFactory.getBezierEasing(m, g, v, _).get
                      , P = 0
                      , J = this.finalS
                      , x = this.finalE
                      , w = this.data.sh;
                    if (w === 2)
                        x === J ? P = d >= x ? 1 : 0 : P = h(0, a(.5 / (x - J) + (d - J) / (x - J), 1)),
                        P = b(P);
                    else if (w === 3)
                        x === J ? P = d >= x ? 0 : 1 : P = 1 - h(0, a(.5 / (x - J) + (d - J) / (x - J), 1)),
                        P = b(P);
                    else if (w === 4)
                        x === J ? P = 0 : (P = h(0, a(.5 / (x - J) + (d - J) / (x - J), 1)),
                        P < .5 ? P *= 2 : P = 1 - 2 * (P - .5)),
                        P = b(P);
                    else if (w === 5) {
                        if (x === J)
                            P = 0;
                        else {
                            var pe = x - J;
                            d = a(h(0, d + .5 - J), x - J);
                            var L = -pe / 2 + d
                              , R = pe / 2;
                            P = Math.sqrt(1 - L * L / (R * R))
                        }
                        P = b(P)
                    } else
                        w === 6 ? (x === J ? P = 0 : (d = a(h(0, d + .5 - J), x - J),
                        P = (1 + Math.cos(Math.PI + Math.PI * 2 * d / (x - J))) / 2),
                        P = b(P)) : (d >= u(J) && (d - J < 0 ? P = h(0, a(a(x, 1) - (J - d), 1)) : P = h(0, a(x - d, 1))),
                        P = b(P));
                    if (this.sm.v !== 100) {
                        var M = this.sm.v * .01;
                        M === 0 && (M = 1e-8);
                        var Z = .5 - M * .5;
                        P < Z ? P = 0 : (P = (P - Z) / M,
                        P > 1 && (P = 1))
                    }
                    return P * this.a.v
                },
                getValue: function(d) {
                    this.iterateDynamicProperties(),
                    this._mdf = d || this._mdf,
                    this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
                    d && this.data.r === 2 && (this.e.v = this._currentTextLength);
                    var m = this.data.r === 2 ? 1 : 100 / this.data.totalChars
                      , g = this.o.v / m
                      , v = this.s.v / m + g
                      , _ = this.e.v / m + g;
                    if (v > _) {
                        var b = v;
                        v = _,
                        _ = b
                    }
                    this.finalS = v,
                    this.finalE = _
                }
            },
            extendPrototype([DynamicPropertyContainer], f);
            function c(p, d, m) {
                return new f(p,d)
            }
            return {
                getTextSelectorProp: c
            }
        }();
        function TextAnimatorDataProperty(h, a, u) {
            var f = {
                propType: !1
            }
              , c = PropertyFactory.getProp
              , p = a.a;
            this.a = {
                r: p.r ? c(h, p.r, 0, degToRads, u) : f,
                rx: p.rx ? c(h, p.rx, 0, degToRads, u) : f,
                ry: p.ry ? c(h, p.ry, 0, degToRads, u) : f,
                sk: p.sk ? c(h, p.sk, 0, degToRads, u) : f,
                sa: p.sa ? c(h, p.sa, 0, degToRads, u) : f,
                s: p.s ? c(h, p.s, 1, .01, u) : f,
                a: p.a ? c(h, p.a, 1, 0, u) : f,
                o: p.o ? c(h, p.o, 0, .01, u) : f,
                p: p.p ? c(h, p.p, 1, 0, u) : f,
                sw: p.sw ? c(h, p.sw, 0, 0, u) : f,
                sc: p.sc ? c(h, p.sc, 1, 0, u) : f,
                fc: p.fc ? c(h, p.fc, 1, 0, u) : f,
                fh: p.fh ? c(h, p.fh, 0, 0, u) : f,
                fs: p.fs ? c(h, p.fs, 0, .01, u) : f,
                fb: p.fb ? c(h, p.fb, 0, .01, u) : f,
                t: p.t ? c(h, p.t, 0, 0, u) : f
            },
            this.s = TextSelectorProp.getTextSelectorProp(h, a.s, u),
            this.s.t = a.s.t
        }
        function TextAnimatorProperty(h, a, u) {
            this._isFirstFrame = !0,
            this._hasMaskedPath = !1,
            this._frameId = -1,
            this._textData = h,
            this._renderType = a,
            this._elem = u,
            this._animatorsData = createSizedArray(this._textData.a.length),
            this._pathData = {},
            this._moreOptions = {
                alignment: {}
            },
            this.renderedLetters = [],
            this.lettersChangedFlag = !1,
            this.initDynamicPropertyContainer(u)
        }
        TextAnimatorProperty.prototype.searchProperties = function() {
            var h, a = this._textData.a.length, u, f = PropertyFactory.getProp;
            for (h = 0; h < a; h += 1)
                u = this._textData.a[h],
                this._animatorsData[h] = new TextAnimatorDataProperty(this._elem,u,this);
            this._textData.p && "m"in this._textData.p ? (this._pathData = {
                a: f(this._elem, this._textData.p.a, 0, 0, this),
                f: f(this._elem, this._textData.p.f, 0, 0, this),
                l: f(this._elem, this._textData.p.l, 0, 0, this),
                r: f(this._elem, this._textData.p.r, 0, 0, this),
                p: f(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
            },
            this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
            this._moreOptions.alignment = f(this._elem, this._textData.m.a, 1, 0, this)
        }
        ,
        TextAnimatorProperty.prototype.getMeasures = function(h, a) {
            if (this.lettersChangedFlag = a,
            !(!this._mdf && !this._isFirstFrame && !a && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var u = this._moreOptions.alignment.v, f = this._animatorsData, c = this._textData, p = this.mHelper, d = this._renderType, m = this.renderedLetters.length, g, v, _, b, P = h.l, J, x, w, pe, L, R, M, Z, he, et, ei, ii, oi, hi, fi;
                if (this._hasMaskedPath) {
                    if (fi = this._pathData.m,
                    !this._pathData.n || this._pathData._mdf) {
                        var ui = fi.v;
                        this._pathData.r.v && (ui = ui.reverse()),
                        J = {
                            tLength: 0,
                            segments: []
                        },
                        b = ui._length - 1;
                        var pi;
                        for (ii = 0,
                        _ = 0; _ < b; _ += 1)
                            pi = bez.buildBezierData(ui.v[_], ui.v[_ + 1], [ui.o[_][0] - ui.v[_][0], ui.o[_][1] - ui.v[_][1]], [ui.i[_ + 1][0] - ui.v[_ + 1][0], ui.i[_ + 1][1] - ui.v[_ + 1][1]]),
                            J.tLength += pi.segmentLength,
                            J.segments.push(pi),
                            ii += pi.segmentLength;
                        _ = b,
                        fi.v.c && (pi = bez.buildBezierData(ui.v[_], ui.v[0], [ui.o[_][0] - ui.v[_][0], ui.o[_][1] - ui.v[_][1]], [ui.i[0][0] - ui.v[0][0], ui.i[0][1] - ui.v[0][1]]),
                        J.tLength += pi.segmentLength,
                        J.segments.push(pi),
                        ii += pi.segmentLength),
                        this._pathData.pi = J
                    }
                    if (J = this._pathData.pi,
                    x = this._pathData.f.v,
                    M = 0,
                    R = 1,
                    pe = 0,
                    L = !0,
                    et = J.segments,
                    x < 0 && fi.v.c)
                        for (J.tLength < Math.abs(x) && (x = -Math.abs(x) % J.tLength),
                        M = et.length - 1,
                        he = et[M].points,
                        R = he.length - 1; x < 0; )
                            x += he[R].partialLength,
                            R -= 1,
                            R < 0 && (M -= 1,
                            he = et[M].points,
                            R = he.length - 1);
                    he = et[M].points,
                    Z = he[R - 1],
                    w = he[R],
                    ei = w.partialLength
                }
                b = P.length,
                g = 0,
                v = 0;
                var mi = h.finalSize * 1.2 * .714, li = !0, ni, ri, ti, si, ci;
                si = f.length;
                var ai, di = -1, gi, vi, yi, Si = x, Ci = M, Di = R, Ti = -1, Ei, wi, xi, _i, Pi, ki, Ri, Li, Fi = "", Ii = this.defaultPropsArray, Oi;
                if (h.j === 2 || h.j === 1) {
                    var bi = 0
                      , Bi = 0
                      , Ni = h.j === 2 ? -.5 : -1
                      , Ai = 0
                      , Vi = !0;
                    for (_ = 0; _ < b; _ += 1)
                        if (P[_].n) {
                            for (bi && (bi += Bi); Ai < _; )
                                P[Ai].animatorJustifyOffset = bi,
                                Ai += 1;
                            bi = 0,
                            Vi = !0
                        } else {
                            for (ti = 0; ti < si; ti += 1)
                                ni = f[ti].a,
                                ni.t.propType && (Vi && h.j === 2 && (Bi += ni.t.v * Ni),
                                ri = f[ti].s,
                                ai = ri.getMult(P[_].anIndexes[ti], c.a[ti].s.totalChars),
                                ai.length ? bi += ni.t.v * ai[0] * Ni : bi += ni.t.v * ai * Ni);
                            Vi = !1
                        }
                    for (bi && (bi += Bi); Ai < _; )
                        P[Ai].animatorJustifyOffset = bi,
                        Ai += 1
                }
                for (_ = 0; _ < b; _ += 1) {
                    if (p.reset(),
                    Ei = 1,
                    P[_].n)
                        g = 0,
                        v += h.yOffset,
                        v += li ? 1 : 0,
                        x = Si,
                        li = !1,
                        this._hasMaskedPath && (M = Ci,
                        R = Di,
                        he = et[M].points,
                        Z = he[R - 1],
                        w = he[R],
                        ei = w.partialLength,
                        pe = 0),
                        Fi = "",
                        Li = "",
                        ki = "",
                        Oi = "",
                        Ii = this.defaultPropsArray;
                    else {
                        if (this._hasMaskedPath) {
                            if (Ti !== P[_].line) {
                                switch (h.j) {
                                case 1:
                                    x += ii - h.lineWidths[P[_].line];
                                    break;
                                case 2:
                                    x += (ii - h.lineWidths[P[_].line]) / 2;
                                    break
                                }
                                Ti = P[_].line
                            }
                            di !== P[_].ind && (P[di] && (x += P[di].extra),
                            x += P[_].an / 2,
                            di = P[_].ind),
                            x += u[0] * P[_].an * .005;
                            var Mi = 0;
                            for (ti = 0; ti < si; ti += 1)
                                ni = f[ti].a,
                                ni.p.propType && (ri = f[ti].s,
                                ai = ri.getMult(P[_].anIndexes[ti], c.a[ti].s.totalChars),
                                ai.length ? Mi += ni.p.v[0] * ai[0] : Mi += ni.p.v[0] * ai),
                                ni.a.propType && (ri = f[ti].s,
                                ai = ri.getMult(P[_].anIndexes[ti], c.a[ti].s.totalChars),
                                ai.length ? Mi += ni.a.v[0] * ai[0] : Mi += ni.a.v[0] * ai);
                            for (L = !0,
                            this._pathData.a.v && (x = P[0].an * .5 + (ii - this._pathData.f.v - P[0].an * .5 - P[P.length - 1].an * .5) * di / (b - 1),
                            x += this._pathData.f.v); L; )
                                pe + ei >= x + Mi || !he ? (oi = (x + Mi - pe) / w.partialLength,
                                vi = Z.point[0] + (w.point[0] - Z.point[0]) * oi,
                                yi = Z.point[1] + (w.point[1] - Z.point[1]) * oi,
                                p.translate(-u[0] * P[_].an * .005, -(u[1] * mi) * .01),
                                L = !1) : he && (pe += w.partialLength,
                                R += 1,
                                R >= he.length && (R = 0,
                                M += 1,
                                et[M] ? he = et[M].points : fi.v.c ? (R = 0,
                                M = 0,
                                he = et[M].points) : (pe -= w.partialLength,
                                he = null)),
                                he && (Z = w,
                                w = he[R],
                                ei = w.partialLength));
                            gi = P[_].an / 2 - P[_].add,
                            p.translate(-gi, 0, 0)
                        } else
                            gi = P[_].an / 2 - P[_].add,
                            p.translate(-gi, 0, 0),
                            p.translate(-u[0] * P[_].an * .005, -u[1] * mi * .01, 0);
                        for (ti = 0; ti < si; ti += 1)
                            ni = f[ti].a,
                            ni.t.propType && (ri = f[ti].s,
                            ai = ri.getMult(P[_].anIndexes[ti], c.a[ti].s.totalChars),
                            (g !== 0 || h.j !== 0) && (this._hasMaskedPath ? ai.length ? x += ni.t.v * ai[0] : x += ni.t.v * ai : ai.length ? g += ni.t.v * ai[0] : g += ni.t.v * ai));
                        for (h.strokeWidthAnim && (xi = h.sw || 0),
                        h.strokeColorAnim && (h.sc ? wi = [h.sc[0], h.sc[1], h.sc[2]] : wi = [0, 0, 0]),
                        h.fillColorAnim && h.fc && (_i = [h.fc[0], h.fc[1], h.fc[2]]),
                        ti = 0; ti < si; ti += 1)
                            ni = f[ti].a,
                            ni.a.propType && (ri = f[ti].s,
                            ai = ri.getMult(P[_].anIndexes[ti], c.a[ti].s.totalChars),
                            ai.length ? p.translate(-ni.a.v[0] * ai[0], -ni.a.v[1] * ai[1], ni.a.v[2] * ai[2]) : p.translate(-ni.a.v[0] * ai, -ni.a.v[1] * ai, ni.a.v[2] * ai));
                        for (ti = 0; ti < si; ti += 1)
                            ni = f[ti].a,
                            ni.s.propType && (ri = f[ti].s,
                            ai = ri.getMult(P[_].anIndexes[ti], c.a[ti].s.totalChars),
                            ai.length ? p.scale(1 + (ni.s.v[0] - 1) * ai[0], 1 + (ni.s.v[1] - 1) * ai[1], 1) : p.scale(1 + (ni.s.v[0] - 1) * ai, 1 + (ni.s.v[1] - 1) * ai, 1));
                        for (ti = 0; ti < si; ti += 1) {
                            if (ni = f[ti].a,
                            ri = f[ti].s,
                            ai = ri.getMult(P[_].anIndexes[ti], c.a[ti].s.totalChars),
                            ni.sk.propType && (ai.length ? p.skewFromAxis(-ni.sk.v * ai[0], ni.sa.v * ai[1]) : p.skewFromAxis(-ni.sk.v * ai, ni.sa.v * ai)),
                            ni.r.propType && (ai.length ? p.rotateZ(-ni.r.v * ai[2]) : p.rotateZ(-ni.r.v * ai)),
                            ni.ry.propType && (ai.length ? p.rotateY(ni.ry.v * ai[1]) : p.rotateY(ni.ry.v * ai)),
                            ni.rx.propType && (ai.length ? p.rotateX(ni.rx.v * ai[0]) : p.rotateX(ni.rx.v * ai)),
                            ni.o.propType && (ai.length ? Ei += (ni.o.v * ai[0] - Ei) * ai[0] : Ei += (ni.o.v * ai - Ei) * ai),
                            h.strokeWidthAnim && ni.sw.propType && (ai.length ? xi += ni.sw.v * ai[0] : xi += ni.sw.v * ai),
                            h.strokeColorAnim && ni.sc.propType)
                                for (Pi = 0; Pi < 3; Pi += 1)
                                    ai.length ? wi[Pi] += (ni.sc.v[Pi] - wi[Pi]) * ai[0] : wi[Pi] += (ni.sc.v[Pi] - wi[Pi]) * ai;
                            if (h.fillColorAnim && h.fc) {
                                if (ni.fc.propType)
                                    for (Pi = 0; Pi < 3; Pi += 1)
                                        ai.length ? _i[Pi] += (ni.fc.v[Pi] - _i[Pi]) * ai[0] : _i[Pi] += (ni.fc.v[Pi] - _i[Pi]) * ai;
                                ni.fh.propType && (ai.length ? _i = addHueToRGB(_i, ni.fh.v * ai[0]) : _i = addHueToRGB(_i, ni.fh.v * ai)),
                                ni.fs.propType && (ai.length ? _i = addSaturationToRGB(_i, ni.fs.v * ai[0]) : _i = addSaturationToRGB(_i, ni.fs.v * ai)),
                                ni.fb.propType && (ai.length ? _i = addBrightnessToRGB(_i, ni.fb.v * ai[0]) : _i = addBrightnessToRGB(_i, ni.fb.v * ai))
                            }
                        }
                        for (ti = 0; ti < si; ti += 1)
                            ni = f[ti].a,
                            ni.p.propType && (ri = f[ti].s,
                            ai = ri.getMult(P[_].anIndexes[ti], c.a[ti].s.totalChars),
                            this._hasMaskedPath ? ai.length ? p.translate(0, ni.p.v[1] * ai[0], -ni.p.v[2] * ai[1]) : p.translate(0, ni.p.v[1] * ai, -ni.p.v[2] * ai) : ai.length ? p.translate(ni.p.v[0] * ai[0], ni.p.v[1] * ai[1], -ni.p.v[2] * ai[2]) : p.translate(ni.p.v[0] * ai, ni.p.v[1] * ai, -ni.p.v[2] * ai));
                        if (h.strokeWidthAnim && (ki = xi < 0 ? 0 : xi),
                        h.strokeColorAnim && (Ri = "rgb(" + Math.round(wi[0] * 255) + "," + Math.round(wi[1] * 255) + "," + Math.round(wi[2] * 255) + ")"),
                        h.fillColorAnim && h.fc && (Li = "rgb(" + Math.round(_i[0] * 255) + "," + Math.round(_i[1] * 255) + "," + Math.round(_i[2] * 255) + ")"),
                        this._hasMaskedPath) {
                            if (p.translate(0, -h.ls),
                            p.translate(0, u[1] * mi * .01 + v, 0),
                            this._pathData.p.v) {
                                hi = (w.point[1] - Z.point[1]) / (w.point[0] - Z.point[0]);
                                var zi = Math.atan(hi) * 180 / Math.PI;
                                w.point[0] < Z.point[0] && (zi += 180),
                                p.rotate(-zi * Math.PI / 180)
                            }
                            p.translate(vi, yi, 0),
                            x -= u[0] * P[_].an * .005,
                            P[_ + 1] && di !== P[_ + 1].ind && (x += P[_].an / 2,
                            x += h.tr * .001 * h.finalSize)
                        } else {
                            switch (p.translate(g, v, 0),
                            h.ps && p.translate(h.ps[0], h.ps[1] + h.ascent, 0),
                            h.j) {
                            case 1:
                                p.translate(P[_].animatorJustifyOffset + h.justifyOffset + (h.boxWidth - h.lineWidths[P[_].line]), 0, 0);
                                break;
                            case 2:
                                p.translate(P[_].animatorJustifyOffset + h.justifyOffset + (h.boxWidth - h.lineWidths[P[_].line]) / 2, 0, 0);
                                break
                            }
                            p.translate(0, -h.ls),
                            p.translate(gi, 0, 0),
                            p.translate(u[0] * P[_].an * .005, u[1] * mi * .01, 0),
                            g += P[_].l + h.tr * .001 * h.finalSize
                        }
                        d === "html" ? Fi = p.toCSS() : d === "svg" ? Fi = p.to2dCSS() : Ii = [p.props[0], p.props[1], p.props[2], p.props[3], p.props[4], p.props[5], p.props[6], p.props[7], p.props[8], p.props[9], p.props[10], p.props[11], p.props[12], p.props[13], p.props[14], p.props[15]],
                        Oi = Ei
                    }
                    m <= _ ? (ci = new LetterProps(Oi,ki,Ri,Li,Fi,Ii),
                    this.renderedLetters.push(ci),
                    m += 1,
                    this.lettersChangedFlag = !0) : (ci = this.renderedLetters[_],
                    this.lettersChangedFlag = ci.update(Oi, ki, Ri, Li, Fi, Ii) || this.lettersChangedFlag)
                }
            }
        }
        ,
        TextAnimatorProperty.prototype.getValue = function() {
            this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId,
            this.iterateDynamicProperties())
        }
        ,
        TextAnimatorProperty.prototype.mHelper = new Matrix,
        TextAnimatorProperty.prototype.defaultPropsArray = [],
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
        function ITextElement() {}
        ITextElement.prototype.initElement = function(h, a, u) {
            this.lettersChangedFlag = !0,
            this.initFrame(),
            this.initBaseData(h, a, u),
            this.textProperty = new TextProperty(this,h.t,this.dynamicProperties),
            this.textAnimator = new TextAnimatorProperty(h.t,this.renderType,this),
            this.initTransform(h, a, u),
            this.initHierarchy(),
            this.initRenderable(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            this.createContent(),
            this.hide(),
            this.textAnimator.searchProperties(this.dynamicProperties)
        }
        ,
        ITextElement.prototype.prepareFrame = function(h) {
            this._mdf = !1,
            this.prepareRenderableFrame(h),
            this.prepareProperties(h, this.isInRange),
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(),
            this.textProperty._isFirstFrame = !1,
            this.textProperty._mdf = !1)
        }
        ,
        ITextElement.prototype.createPathShape = function(h, a) {
            var u, f = a.length, c, p = "";
            for (u = 0; u < f; u += 1)
                a[u].ty === "sh" && (c = a[u].ks.k,
                p += buildShapeString(c, c.i.length, !0, h));
            return p
        }
        ,
        ITextElement.prototype.updateDocumentData = function(h, a) {
            this.textProperty.updateDocumentData(h, a)
        }
        ,
        ITextElement.prototype.canResizeFont = function(h) {
            this.textProperty.canResizeFont(h)
        }
        ,
        ITextElement.prototype.setMinimumFontSize = function(h) {
            this.textProperty.setMinimumFontSize(h)
        }
        ,
        ITextElement.prototype.applyTextPropertiesToMatrix = function(h, a, u, f, c) {
            switch (h.ps && a.translate(h.ps[0], h.ps[1] + h.ascent, 0),
            a.translate(0, -h.ls, 0),
            h.j) {
            case 1:
                a.translate(h.justifyOffset + (h.boxWidth - h.lineWidths[u]), 0, 0);
                break;
            case 2:
                a.translate(h.justifyOffset + (h.boxWidth - h.lineWidths[u]) / 2, 0, 0);
                break
            }
            a.translate(f, c, 0)
        }
        ,
        ITextElement.prototype.buildColor = function(h) {
            return "rgb(" + Math.round(h[0] * 255) + "," + Math.round(h[1] * 255) + "," + Math.round(h[2] * 255) + ")"
        }
        ,
        ITextElement.prototype.emptyProp = new LetterProps,
        ITextElement.prototype.destroy = function() {}
        ;
        var emptyShapeData = {
            shapes: []
        };
        function SVGTextLottieElement(h, a, u) {
            this.textSpans = [],
            this.renderType = "svg",
            this.initElement(h, a, u)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
        SVGTextLottieElement.prototype.createContent = function() {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }
        ,
        SVGTextLottieElement.prototype.buildTextContents = function(h) {
            for (var a = 0, u = h.length, f = [], c = ""; a < u; )
                h[a] === String.fromCharCode(13) || h[a] === String.fromCharCode(3) ? (f.push(c),
                c = "") : c += h[a],
                a += 1;
            return f.push(c),
            f
        }
        ,
        SVGTextLottieElement.prototype.buildShapeData = function(h, a) {
            if (h.shapes && h.shapes.length) {
                var u = h.shapes[0];
                if (u.it) {
                    var f = u.it[u.it.length - 1];
                    f.s && (f.s.k[0] = a,
                    f.s.k[1] = a)
                }
            }
            return h
        }
        ,
        SVGTextLottieElement.prototype.buildNewText = function() {
            this.addDynamicProperty(this);
            var h, a, u = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(u ? u.l.length : 0),
            u.fc ? this.layerElement.setAttribute("fill", this.buildColor(u.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
            u.sc && (this.layerElement.setAttribute("stroke", this.buildColor(u.sc)),
            this.layerElement.setAttribute("stroke-width", u.sw)),
            this.layerElement.setAttribute("font-size", u.finalSize);
            var f = this.globalData.fontManager.getFontByName(u.f);
            if (f.fClass)
                this.layerElement.setAttribute("class", f.fClass);
            else {
                this.layerElement.setAttribute("font-family", f.fFamily);
                var c = u.fWeight
                  , p = u.fStyle;
                this.layerElement.setAttribute("font-style", p),
                this.layerElement.setAttribute("font-weight", c)
            }
            this.layerElement.setAttribute("aria-label", u.t);
            var d = u.l || []
              , m = !!this.globalData.fontManager.chars;
            a = d.length;
            var g, v = this.mHelper, _ = "", b = this.data.singleShape, P = 0, J = 0, x = !0, w = u.tr * .001 * u.finalSize;
            if (b && !m && !u.sz) {
                var pe = this.textContainer
                  , L = "start";
                switch (u.j) {
                case 1:
                    L = "end";
                    break;
                case 2:
                    L = "middle";
                    break;
                default:
                    L = "start";
                    break
                }
                pe.setAttribute("text-anchor", L),
                pe.setAttribute("letter-spacing", w);
                var R = this.buildTextContents(u.finalText);
                for (a = R.length,
                J = u.ps ? u.ps[1] + u.ascent : 0,
                h = 0; h < a; h += 1)
                    g = this.textSpans[h].span || createNS("tspan"),
                    g.textContent = R[h],
                    g.setAttribute("x", 0),
                    g.setAttribute("y", J),
                    g.style.display = "inherit",
                    pe.appendChild(g),
                    this.textSpans[h] || (this.textSpans[h] = {
                        span: null,
                        glyph: null
                    }),
                    this.textSpans[h].span = g,
                    J += u.finalLineHeight;
                this.layerElement.appendChild(pe)
            } else {
                var M = this.textSpans.length, Z;
                for (h = 0; h < a; h += 1) {
                    if (this.textSpans[h] || (this.textSpans[h] = {
                        span: null,
                        childSpan: null,
                        glyph: null
                    }),
                    !m || !b || h === 0) {
                        if (g = M > h ? this.textSpans[h].span : createNS(m ? "g" : "text"),
                        M <= h) {
                            if (g.setAttribute("stroke-linecap", "butt"),
                            g.setAttribute("stroke-linejoin", "round"),
                            g.setAttribute("stroke-miterlimit", "4"),
                            this.textSpans[h].span = g,
                            m) {
                                var he = createNS("g");
                                g.appendChild(he),
                                this.textSpans[h].childSpan = he
                            }
                            this.textSpans[h].span = g,
                            this.layerElement.appendChild(g)
                        }
                        g.style.display = "inherit"
                    }
                    if (v.reset(),
                    b && (d[h].n && (P = -w,
                    J += u.yOffset,
                    J += x ? 1 : 0,
                    x = !1),
                    this.applyTextPropertiesToMatrix(u, v, d[h].line, P, J),
                    P += d[h].l || 0,
                    P += w),
                    m) {
                        Z = this.globalData.fontManager.getCharData(u.finalText[h], f.fStyle, this.globalData.fontManager.getFontByName(u.f).fFamily);
                        var et;
                        if (Z.t === 1)
                            et = new SVGCompElement(Z.data,this.globalData,this);
                        else {
                            var ei = emptyShapeData;
                            Z.data && Z.data.shapes && (ei = this.buildShapeData(Z.data, u.finalSize)),
                            et = new SVGShapeElement(ei,this.globalData,this)
                        }
                        if (this.textSpans[h].glyph) {
                            var ii = this.textSpans[h].glyph;
                            this.textSpans[h].childSpan.removeChild(ii.layerElement),
                            ii.destroy()
                        }
                        this.textSpans[h].glyph = et,
                        et._debug = !0,
                        et.prepareFrame(0),
                        et.renderFrame(),
                        this.textSpans[h].childSpan.appendChild(et.layerElement),
                        Z.t === 1 && this.textSpans[h].childSpan.setAttribute("transform", "scale(" + u.finalSize / 100 + "," + u.finalSize / 100 + ")")
                    } else
                        b && g.setAttribute("transform", "translate(" + v.props[12] + "," + v.props[13] + ")"),
                        g.textContent = d[h].val,
                        g.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
                }
                b && g && g.setAttribute("d", _)
            }
            for (; h < this.textSpans.length; )
                this.textSpans[h].span.style.display = "none",
                h += 1;
            this._sizeChanged = !0
        }
        ,
        SVGTextLottieElement.prototype.sourceRectAtTime = function() {
            if (this.prepareFrame(this.comp.renderedFrame - this.data.st),
            this.renderInnerContent(),
            this._sizeChanged) {
                this._sizeChanged = !1;
                var h = this.layerElement.getBBox();
                this.bbox = {
                    top: h.y,
                    left: h.x,
                    width: h.width,
                    height: h.height
                }
            }
            return this.bbox
        }
        ,
        SVGTextLottieElement.prototype.getValue = function() {
            var h, a = this.textSpans.length, u;
            for (this.renderedFrame = this.comp.renderedFrame,
            h = 0; h < a; h += 1)
                u = this.textSpans[h].glyph,
                u && (u.prepareFrame(this.comp.renderedFrame - this.data.st),
                u._mdf && (this._mdf = !0))
        }
        ,
        SVGTextLottieElement.prototype.renderInnerContent = function() {
            if ((!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
            this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                this._sizeChanged = !0;
                var h, a, u = this.textAnimator.renderedLetters, f = this.textProperty.currentData.l;
                a = f.length;
                var c, p, d;
                for (h = 0; h < a; h += 1)
                    f[h].n || (c = u[h],
                    p = this.textSpans[h].span,
                    d = this.textSpans[h].glyph,
                    d && d.renderFrame(),
                    c._mdf.m && p.setAttribute("transform", c.m),
                    c._mdf.o && p.setAttribute("opacity", c.o),
                    c._mdf.sw && p.setAttribute("stroke-width", c.sw),
                    c._mdf.sc && p.setAttribute("stroke", c.sc),
                    c._mdf.fc && p.setAttribute("fill", c.fc))
            }
        }
        ;
        function ISolidElement(h, a, u) {
            this.initElement(h, a, u)
        }
        extendPrototype([IImageElement], ISolidElement),
        ISolidElement.prototype.createContent = function() {
            var h = createNS("rect");
            h.setAttribute("width", this.data.sw),
            h.setAttribute("height", this.data.sh),
            h.setAttribute("fill", this.data.sc),
            this.layerElement.appendChild(h)
        }
        ;
        function NullElement(h, a, u) {
            this.initFrame(),
            this.initBaseData(h, a, u),
            this.initFrame(),
            this.initTransform(h, a, u),
            this.initHierarchy()
        }
        NullElement.prototype.prepareFrame = function(h) {
            this.prepareProperties(h, !0)
        }
        ,
        NullElement.prototype.renderFrame = function() {}
        ,
        NullElement.prototype.getBaseElement = function() {
            return null
        }
        ,
        NullElement.prototype.destroy = function() {}
        ,
        NullElement.prototype.sourceRectAtTime = function() {}
        ,
        NullElement.prototype.hide = function() {}
        ,
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
        function SVGRendererBase() {}
        extendPrototype([BaseRenderer], SVGRendererBase),
        SVGRendererBase.prototype.createNull = function(h) {
            return new NullElement(h,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.createShape = function(h) {
            return new SVGShapeElement(h,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.createText = function(h) {
            return new SVGTextLottieElement(h,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.createImage = function(h) {
            return new IImageElement(h,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.createSolid = function(h) {
            return new ISolidElement(h,this.globalData,this)
        }
        ,
        SVGRendererBase.prototype.configAnimation = function(h) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
            this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
            this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + h.w + " " + h.h),
            this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", h.w),
            this.svgElement.setAttribute("height", h.h),
            this.svgElement.style.width = "100%",
            this.svgElement.style.height = "100%",
            this.svgElement.style.transform = "translate3d(0,0,0)",
            this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility),
            this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width),
            this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height),
            this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
            this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
            this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
            this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
            this.animationItem.wrapper.appendChild(this.svgElement);
            var a = this.globalData.defs;
            this.setupGlobalData(h, a),
            this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
            this.data = h;
            var u = createNS("clipPath")
              , f = createNS("rect");
            f.setAttribute("width", h.w),
            f.setAttribute("height", h.h),
            f.setAttribute("x", 0),
            f.setAttribute("y", 0);
            var c = createElementID();
            u.setAttribute("id", c),
            u.appendChild(f),
            this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + c + ")"),
            a.appendChild(u),
            this.layers = h.layers,
            this.elements = createSizedArray(h.layers.length)
        }
        ,
        SVGRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
            this.layerElement = null,
            this.globalData.defs = null;
            var h, a = this.layers ? this.layers.length : 0;
            for (h = 0; h < a; h += 1)
                this.elements[h] && this.elements[h].destroy && this.elements[h].destroy();
            this.elements.length = 0,
            this.destroyed = !0,
            this.animationItem = null
        }
        ,
        SVGRendererBase.prototype.updateContainerSize = function() {}
        ,
        SVGRendererBase.prototype.findIndexByInd = function(h) {
            var a = 0
              , u = this.layers.length;
            for (a = 0; a < u; a += 1)
                if (this.layers[a].ind === h)
                    return a;
            return -1
        }
        ,
        SVGRendererBase.prototype.buildItem = function(h) {
            var a = this.elements;
            if (!(a[h] || this.layers[h].ty === 99)) {
                a[h] = !0;
                var u = this.createItem(this.layers[h]);
                if (a[h] = u,
                getExpressionsPlugin() && (this.layers[h].ty === 0 && this.globalData.projectInterface.registerComposition(u),
                u.initExpressions()),
                this.appendElementInPos(u, h),
                this.layers[h].tt) {
                    var f = "tp"in this.layers[h] ? this.findIndexByInd(this.layers[h].tp) : h - 1;
                    if (f === -1)
                        return;
                    if (!this.elements[f] || this.elements[f] === !0)
                        this.buildItem(f),
                        this.addPendingElement(u);
                    else {
                        var c = a[f]
                          , p = c.getMatte(this.layers[h].tt);
                        u.setMatte(p)
                    }
                }
            }
        }
        ,
        SVGRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
                var h = this.pendingElements.pop();
                if (h.checkParenting(),
                h.data.tt)
                    for (var a = 0, u = this.elements.length; a < u; ) {
                        if (this.elements[a] === h) {
                            var f = "tp"in h.data ? this.findIndexByInd(h.data.tp) : a - 1
                              , c = this.elements[f]
                              , p = c.getMatte(this.layers[a].tt);
                            h.setMatte(p);
                            break
                        }
                        a += 1
                    }
            }
        }
        ,
        SVGRendererBase.prototype.renderFrame = function(h) {
            if (!(this.renderedFrame === h || this.destroyed)) {
                h === null ? h = this.renderedFrame : this.renderedFrame = h,
                this.globalData.frameNum = h,
                this.globalData.frameId += 1,
                this.globalData.projectInterface.currentFrame = h,
                this.globalData._mdf = !1;
                var a, u = this.layers.length;
                for (this.completeLayers || this.checkLayers(h),
                a = u - 1; a >= 0; a -= 1)
                    (this.completeLayers || this.elements[a]) && this.elements[a].prepareFrame(h - this.layers[a].st);
                if (this.globalData._mdf)
                    for (a = 0; a < u; a += 1)
                        (this.completeLayers || this.elements[a]) && this.elements[a].renderFrame()
            }
        }
        ,
        SVGRendererBase.prototype.appendElementInPos = function(h, a) {
            var u = h.getBaseElement();
            if (u) {
                for (var f = 0, c; f < a; )
                    this.elements[f] && this.elements[f] !== !0 && this.elements[f].getBaseElement() && (c = this.elements[f].getBaseElement()),
                    f += 1;
                c ? this.layerElement.insertBefore(u, c) : this.layerElement.appendChild(u)
            }
        }
        ,
        SVGRendererBase.prototype.hide = function() {
            this.layerElement.style.display = "none"
        }
        ,
        SVGRendererBase.prototype.show = function() {
            this.layerElement.style.display = "block"
        }
        ;
        function ICompElement() {}
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
        ICompElement.prototype.initElement = function(h, a, u) {
            this.initFrame(),
            this.initBaseData(h, a, u),
            this.initTransform(h, a, u),
            this.initRenderable(),
            this.initHierarchy(),
            this.initRendererElement(),
            this.createContainerElements(),
            this.createRenderableComponents(),
            (this.data.xt || !a.progressiveLoad) && this.buildAllItems(),
            this.hide()
        }
        ,
        ICompElement.prototype.prepareFrame = function(h) {
            if (this._mdf = !1,
            this.prepareRenderableFrame(h),
            this.prepareProperties(h, this.isInRange),
            !(!this.isInRange && !this.data.xt)) {
                if (this.tm._placeholder)
                    this.renderedFrame = h / this.data.sr;
                else {
                    var a = this.tm.v;
                    a === this.data.op && (a = this.data.op - 1),
                    this.renderedFrame = a
                }
                var u, f = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame),
                u = f - 1; u >= 0; u -= 1)
                    (this.completeLayers || this.elements[u]) && (this.elements[u].prepareFrame(this.renderedFrame - this.layers[u].st),
                    this.elements[u]._mdf && (this._mdf = !0))
            }
        }
        ,
        ICompElement.prototype.renderInnerContent = function() {
            var h, a = this.layers.length;
            for (h = 0; h < a; h += 1)
                (this.completeLayers || this.elements[h]) && this.elements[h].renderFrame()
        }
        ,
        ICompElement.prototype.setElements = function(h) {
            this.elements = h
        }
        ,
        ICompElement.prototype.getElements = function() {
            return this.elements
        }
        ,
        ICompElement.prototype.destroyElements = function() {
            var h, a = this.layers.length;
            for (h = 0; h < a; h += 1)
                this.elements[h] && this.elements[h].destroy()
        }
        ,
        ICompElement.prototype.destroy = function() {
            this.destroyElements(),
            this.destroyBaseElement()
        }
        ;
        function SVGCompElement(h, a, u) {
            this.layers = h.layers,
            this.supports3d = !0,
            this.completeLayers = !1,
            this.pendingElements = [],
            this.elements = this.layers ? createSizedArray(this.layers.length) : [],
            this.initElement(h, a, u),
            this.tm = h.tm ? PropertyFactory.getProp(this, h.tm, 0, a.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
        SVGCompElement.prototype.createComp = function(h) {
            return new SVGCompElement(h,this.globalData,this)
        }
        ;
        function SVGRenderer(h, a) {
            this.animationItem = h,
            this.layers = null,
            this.renderedFrame = -1,
            this.svgElement = createNS("svg");
            var u = "";
            if (a && a.title) {
                var f = createNS("title")
                  , c = createElementID();
                f.setAttribute("id", c),
                f.textContent = a.title,
                this.svgElement.appendChild(f),
                u += c
            }
            if (a && a.description) {
                var p = createNS("desc")
                  , d = createElementID();
                p.setAttribute("id", d),
                p.textContent = a.description,
                this.svgElement.appendChild(p),
                u += " " + d
            }
            u && this.svgElement.setAttribute("aria-labelledby", u);
            var m = createNS("defs");
            this.svgElement.appendChild(m);
            var g = createNS("g");
            this.svgElement.appendChild(g),
            this.layerElement = g,
            this.renderConfig = {
                preserveAspectRatio: a && a.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: a && a.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: a && a.contentVisibility || "visible",
                progressiveLoad: a && a.progressiveLoad || !1,
                hideOnTransparent: !(a && a.hideOnTransparent === !1),
                viewBoxOnly: a && a.viewBoxOnly || !1,
                viewBoxSize: a && a.viewBoxSize || !1,
                className: a && a.className || "",
                id: a && a.id || "",
                focusable: a && a.focusable,
                filterSize: {
                    width: a && a.filterSize && a.filterSize.width || "100%",
                    height: a && a.filterSize && a.filterSize.height || "100%",
                    x: a && a.filterSize && a.filterSize.x || "0%",
                    y: a && a.filterSize && a.filterSize.y || "0%"
                },
                width: a && a.width,
                height: a && a.height,
                runExpressions: !a || a.runExpressions === void 0 || a.runExpressions
            },
            this.globalData = {
                _mdf: !1,
                frameNum: -1,
                defs: m,
                renderConfig: this.renderConfig
            },
            this.elements = [],
            this.pendingElements = [],
            this.destroyed = !1,
            this.rendererType = "svg"
        }
        extendPrototype([SVGRendererBase], SVGRenderer),
        SVGRenderer.prototype.createComp = function(h) {
            return new SVGCompElement(h,this.globalData,this)
        }
        ;
        function CVContextData() {
            this.saved = [],
            this.cArrPos = 0,
            this.cTr = new Matrix,
            this.cO = 1;
            var h, a = 15;
            for (this.savedOp = createTypedArray("float32", a),
            h = 0; h < a; h += 1)
                this.saved[h] = createTypedArray("float32", 16);
            this._length = a
        }
        CVContextData.prototype.duplicate = function() {
            var h = this._length * 2
              , a = this.savedOp;
            this.savedOp = createTypedArray("float32", h),
            this.savedOp.set(a);
            var u = 0;
            for (u = this._length; u < h; u += 1)
                this.saved[u] = createTypedArray("float32", 16);
            this._length = h
        }
        ,
        CVContextData.prototype.reset = function() {
            this.cArrPos = 0,
            this.cTr.reset(),
            this.cO = 1
        }
        ,
        CVContextData.prototype.popTransform = function() {
            var h = this.saved[this.cArrPos], a, u = this.cTr.props;
            for (a = 0; a < 16; a += 1)
                u[a] = h[a];
            return h
        }
        ,
        CVContextData.prototype.popOpacity = function() {
            var h = this.savedOp[this.cArrPos];
            return this.cO = h,
            h
        }
        ,
        CVContextData.prototype.pop = function() {
            this.cArrPos -= 1;
            var h = this.popTransform()
              , a = this.popOpacity();
            return {
                transform: h,
                opacity: a
            }
        }
        ,
        CVContextData.prototype.push = function() {
            var h = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            var a, u = this.saved[this.cArrPos];
            for (a = 0; a < 16; a += 1)
                u[a] = h[a];
            this.savedOp[this.cArrPos] = this.cO,
            this.cArrPos += 1
        }
        ,
        CVContextData.prototype.getTransform = function() {
            return this.cTr
        }
        ,
        CVContextData.prototype.getOpacity = function() {
            return this.cO
        }
        ,
        CVContextData.prototype.setOpacity = function(h) {
            this.cO = h
        }
        ;
        function ShapeTransformManager() {
            this.sequences = {},
            this.sequenceList = [],
            this.transform_key_count = 0
        }
        ShapeTransformManager.prototype = {
            addTransformSequence: function(a) {
                var u, f = a.length, c = "_";
                for (u = 0; u < f; u += 1)
                    c += a[u].transform.key + "_";
                var p = this.sequences[c];
                return p || (p = {
                    transforms: [].concat(a),
                    finalTransform: new Matrix,
                    _mdf: !1
                },
                this.sequences[c] = p,
                this.sequenceList.push(p)),
                p
            },
            processSequence: function(a, u) {
                for (var f = 0, c = a.transforms.length, p = u; f < c && !u; ) {
                    if (a.transforms[f].transform.mProps._mdf) {
                        p = !0;
                        break
                    }
                    f += 1
                }
                if (p) {
                    var d;
                    for (a.finalTransform.reset(),
                    f = c - 1; f >= 0; f -= 1)
                        d = a.transforms[f].transform.mProps.v.props,
                        a.finalTransform.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15])
                }
                a._mdf = p
            },
            processSequences: function(a) {
                var u, f = this.sequenceList.length;
                for (u = 0; u < f; u += 1)
                    this.processSequence(this.sequenceList[u], a)
            },
            getNewKey: function() {
                return this.transform_key_count += 1,
                "_" + this.transform_key_count
            }
        };
        var lumaLoader = function() {
            var a = "__lottie_element_luma_buffer"
              , u = null
              , f = null
              , c = null;
            function p() {
                var g = createNS("svg")
                  , v = createNS("filter")
                  , _ = createNS("feColorMatrix");
                return v.setAttribute("id", a),
                _.setAttribute("type", "matrix"),
                _.setAttribute("color-interpolation-filters", "sRGB"),
                _.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"),
                v.appendChild(_),
                g.appendChild(v),
                g.setAttribute("id", a + "_svg"),
                featureSupport.svgLumaHidden && (g.style.display = "none"),
                g
            }
            function d() {
                u || (c = p(),
                document.body.appendChild(c),
                u = createTag("canvas"),
                f = u.getContext("2d"),
                f.filter = "url(#" + a + ")",
                f.fillStyle = "rgba(0,0,0,0)",
                f.fillRect(0, 0, 1, 1))
            }
            function m(g) {
                return u || d(),
                u.width = g.width,
                u.height = g.height,
                f.filter = "url(#" + a + ")",
                u
            }
            return {
                load: d,
                get: m
            }
        };
        function createCanvas(h, a) {
            if (featureSupport.offscreenCanvas)
                return new OffscreenCanvas(h,a);
            var u = createTag("canvas");
            return u.width = h,
            u.height = a,
            u
        }
        var assetLoader = function() {
            return {
                loadLumaCanvas: lumaLoader.load,
                getLumaCanvas: lumaLoader.get,
                createCanvas
            }
        }();
        function CVEffects() {}
        CVEffects.prototype.renderFrame = function() {}
        ;
        function CVMaskElement(h, a) {
            this.data = h,
            this.element = a,
            this.masksProperties = this.data.masksProperties || [],
            this.viewData = createSizedArray(this.masksProperties.length);
            var u, f = this.masksProperties.length, c = !1;
            for (u = 0; u < f; u += 1)
                this.masksProperties[u].mode !== "n" && (c = !0),
                this.viewData[u] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[u], 3);
            this.hasMasks = c,
            c && this.element.addRenderableComponent(this)
        }
        CVMaskElement.prototype.renderFrame = function() {
            if (this.hasMasks) {
                var h = this.element.finalTransform.mat, a = this.element.canvasContext, u, f = this.masksProperties.length, c, p, d;
                for (a.beginPath(),
                u = 0; u < f; u += 1)
                    if (this.masksProperties[u].mode !== "n") {
                        this.masksProperties[u].inv && (a.moveTo(0, 0),
                        a.lineTo(this.element.globalData.compSize.w, 0),
                        a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                        a.lineTo(0, this.element.globalData.compSize.h),
                        a.lineTo(0, 0)),
                        d = this.viewData[u].v,
                        c = h.applyToPointArray(d.v[0][0], d.v[0][1], 0),
                        a.moveTo(c[0], c[1]);
                        var m, g = d._length;
                        for (m = 1; m < g; m += 1)
                            p = h.applyToTriplePoints(d.o[m - 1], d.i[m], d.v[m]),
                            a.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
                        p = h.applyToTriplePoints(d.o[m - 1], d.i[0], d.v[0]),
                        a.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5])
                    }
                this.element.globalData.renderer.save(!0),
                a.clip()
            }
        }
        ,
        CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
        CVMaskElement.prototype.destroy = function() {
            this.element = null
        }
        ;
        function CVBaseElement() {}
        var operationsMap = {
            1: "source-in",
            2: "source-out",
            3: "source-in",
            4: "source-out"
        };
        CVBaseElement.prototype = {
            createElements: function() {},
            initRendererElement: function() {},
            createContainerElements: function() {
                if (this.data.tt >= 1) {
                    this.buffers = [];
                    var a = this.globalData.canvasContext
                      , u = assetLoader.createCanvas(a.canvas.width, a.canvas.height);
                    this.buffers.push(u);
                    var f = assetLoader.createCanvas(a.canvas.width, a.canvas.height);
                    this.buffers.push(f),
                    this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
                }
                this.canvasContext = this.globalData.canvasContext,
                this.transformCanvas = this.globalData.transformCanvas,
                this.renderableEffectsManager = new CVEffects
            },
            createContent: function() {},
            setBlendMode: function() {
                var a = this.globalData;
                if (a.blendMode !== this.data.bm) {
                    a.blendMode = this.data.bm;
                    var u = getBlendMode(this.data.bm);
                    a.canvasContext.globalCompositeOperation = u
                }
            },
            createRenderableComponents: function() {
                this.maskManager = new CVMaskElement(this.data,this)
            },
            hideElement: function() {
                !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0)
            },
            showElement: function() {
                this.isInRange && !this.isTransparent && (this.hidden = !1,
                this._isFirstFrame = !0,
                this.maskManager._isFirstFrame = !0)
            },
            clearCanvas: function(a) {
                a.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
            },
            prepareLayer: function() {
                if (this.data.tt >= 1) {
                    var a = this.buffers[0]
                      , u = a.getContext("2d");
                    this.clearCanvas(u),
                    u.drawImage(this.canvasContext.canvas, 0, 0),
                    this.currentTransform = this.canvasContext.getTransform(),
                    this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                    this.clearCanvas(this.canvasContext),
                    this.canvasContext.setTransform(this.currentTransform)
                }
            },
            exitLayer: function() {
                if (this.data.tt >= 1) {
                    var a = this.buffers[1]
                      , u = a.getContext("2d");
                    this.clearCanvas(u),
                    u.drawImage(this.canvasContext.canvas, 0, 0),
                    this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                    this.clearCanvas(this.canvasContext),
                    this.canvasContext.setTransform(this.currentTransform);
                    var f = this.comp.getElementById("tp"in this.data ? this.data.tp : this.data.ind - 1);
                    if (f.renderFrame(!0),
                    this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                    this.data.tt >= 3 && !document._isProxy) {
                        var c = assetLoader.getLumaCanvas(this.canvasContext.canvas)
                          , p = c.getContext("2d");
                        p.drawImage(this.canvasContext.canvas, 0, 0),
                        this.clearCanvas(this.canvasContext),
                        this.canvasContext.drawImage(c, 0, 0)
                    }
                    this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt],
                    this.canvasContext.drawImage(a, 0, 0),
                    this.canvasContext.globalCompositeOperation = "destination-over",
                    this.canvasContext.drawImage(this.buffers[0], 0, 0),
                    this.canvasContext.setTransform(this.currentTransform),
                    this.canvasContext.globalCompositeOperation = "source-over"
                }
            },
            renderFrame: function(a) {
                if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !a)) {
                    this.renderTransform(),
                    this.renderRenderable(),
                    this.setBlendMode();
                    var u = this.data.ty === 0;
                    this.prepareLayer(),
                    this.globalData.renderer.save(u),
                    this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),
                    this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),
                    this.renderInnerContent(),
                    this.globalData.renderer.restore(u),
                    this.exitLayer(),
                    this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                    this._isFirstFrame && (this._isFirstFrame = !1)
                }
            },
            destroy: function() {
                this.canvasContext = null,
                this.data = null,
                this.globalData = null,
                this.maskManager.destroy()
            },
            mHelper: new Matrix
        },
        CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,
        CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
        function CVShapeData(h, a, u, f) {
            this.styledShapes = [],
            this.tr = [0, 0, 0, 0, 0, 0];
            var c = 4;
            a.ty === "rc" ? c = 5 : a.ty === "el" ? c = 6 : a.ty === "sr" && (c = 7),
            this.sh = ShapePropertyFactory.getShapeProp(h, a, c, h);
            var p, d = u.length, m;
            for (p = 0; p < d; p += 1)
                u[p].closed || (m = {
                    transforms: f.addTransformSequence(u[p].transforms),
                    trNodes: []
                },
                this.styledShapes.push(m),
                u[p].elements.push(m))
        }
        CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
        function CVShapeElement(h, a, u) {
            this.shapes = [],
            this.shapesData = h.shapes,
            this.stylesList = [],
            this.itemsData = [],
            this.prevViewData = [],
            this.shapeModifiers = [],
            this.processedElements = [],
            this.transformsManager = new ShapeTransformManager,
            this.initElement(h, a, u)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
        CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,
        CVShapeElement.prototype.transformHelper = {
            opacity: 1,
            _opMdf: !1
        },
        CVShapeElement.prototype.dashResetter = [],
        CVShapeElement.prototype.createContent = function() {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }
        ,
        CVShapeElement.prototype.createStyleElement = function(h, a) {
            var u = {
                data: h,
                type: h.ty,
                preTransforms: this.transformsManager.addTransformSequence(a),
                transforms: [],
                elements: [],
                closed: h.hd === !0
            }
              , f = {};
            if (h.ty === "fl" || h.ty === "st" ? (f.c = PropertyFactory.getProp(this, h.c, 1, 255, this),
            f.c.k || (u.co = "rgb(" + bmFloor(f.c.v[0]) + "," + bmFloor(f.c.v[1]) + "," + bmFloor(f.c.v[2]) + ")")) : (h.ty === "gf" || h.ty === "gs") && (f.s = PropertyFactory.getProp(this, h.s, 1, null, this),
            f.e = PropertyFactory.getProp(this, h.e, 1, null, this),
            f.h = PropertyFactory.getProp(this, h.h || {
                k: 0
            }, 0, .01, this),
            f.a = PropertyFactory.getProp(this, h.a || {
                k: 0
            }, 0, degToRads, this),
            f.g = new GradientProperty(this,h.g,this)),
            f.o = PropertyFactory.getProp(this, h.o, 0, .01, this),
            h.ty === "st" || h.ty === "gs") {
                if (u.lc = lineCapEnum[h.lc || 2],
                u.lj = lineJoinEnum[h.lj || 2],
                h.lj == 1 && (u.ml = h.ml),
                f.w = PropertyFactory.getProp(this, h.w, 0, null, this),
                f.w.k || (u.wi = f.w.v),
                h.d) {
                    var c = new DashProperty(this,h.d,"canvas",this);
                    f.d = c,
                    f.d.k || (u.da = f.d.dashArray,
                    u.do = f.d.dashoffset[0])
                }
            } else
                u.r = h.r === 2 ? "evenodd" : "nonzero";
            return this.stylesList.push(u),
            f.style = u,
            f
        }
        ,
        CVShapeElement.prototype.createGroupElement = function() {
            var h = {
                it: [],
                prevViewData: []
            };
            return h
        }
        ,
        CVShapeElement.prototype.createTransformElement = function(h) {
            var a = {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, h.o, 0, .01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, h, this)
                }
            };
            return a
        }
        ,
        CVShapeElement.prototype.createShapeElement = function(h) {
            var a = new CVShapeData(this,h,this.stylesList,this.transformsManager);
            return this.shapes.push(a),
            this.addShapeToModifiers(a),
            a
        }
        ,
        CVShapeElement.prototype.reloadShapes = function() {
            this._isFirstFrame = !0;
            var h, a = this.itemsData.length;
            for (h = 0; h < a; h += 1)
                this.prevViewData[h] = this.itemsData[h];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
            a = this.dynamicProperties.length,
            h = 0; h < a; h += 1)
                this.dynamicProperties[h].getValue();
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame)
        }
        ,
        CVShapeElement.prototype.addTransformToStyleList = function(h) {
            var a, u = this.stylesList.length;
            for (a = 0; a < u; a += 1)
                this.stylesList[a].closed || this.stylesList[a].transforms.push(h)
        }
        ,
        CVShapeElement.prototype.removeTransformFromStyleList = function() {
            var h, a = this.stylesList.length;
            for (h = 0; h < a; h += 1)
                this.stylesList[h].closed || this.stylesList[h].transforms.pop()
        }
        ,
        CVShapeElement.prototype.closeStyles = function(h) {
            var a, u = h.length;
            for (a = 0; a < u; a += 1)
                h[a].closed = !0
        }
        ,
        CVShapeElement.prototype.searchShapes = function(h, a, u, f, c) {
            var p, d = h.length - 1, m, g, v = [], _ = [], b, P, J, x = [].concat(c);
            for (p = d; p >= 0; p -= 1) {
                if (b = this.searchProcessedElement(h[p]),
                b ? a[p] = u[b - 1] : h[p]._shouldRender = f,
                h[p].ty === "fl" || h[p].ty === "st" || h[p].ty === "gf" || h[p].ty === "gs")
                    b ? a[p].style.closed = !1 : a[p] = this.createStyleElement(h[p], x),
                    v.push(a[p].style);
                else if (h[p].ty === "gr") {
                    if (!b)
                        a[p] = this.createGroupElement(h[p]);
                    else
                        for (g = a[p].it.length,
                        m = 0; m < g; m += 1)
                            a[p].prevViewData[m] = a[p].it[m];
                    this.searchShapes(h[p].it, a[p].it, a[p].prevViewData, f, x)
                } else
                    h[p].ty === "tr" ? (b || (J = this.createTransformElement(h[p]),
                    a[p] = J),
                    x.push(a[p]),
                    this.addTransformToStyleList(a[p])) : h[p].ty === "sh" || h[p].ty === "rc" || h[p].ty === "el" || h[p].ty === "sr" ? b || (a[p] = this.createShapeElement(h[p])) : h[p].ty === "tm" || h[p].ty === "rd" || h[p].ty === "pb" || h[p].ty === "zz" || h[p].ty === "op" ? (b ? (P = a[p],
                    P.closed = !1) : (P = ShapeModifiers.getModifier(h[p].ty),
                    P.init(this, h[p]),
                    a[p] = P,
                    this.shapeModifiers.push(P)),
                    _.push(P)) : h[p].ty === "rp" && (b ? (P = a[p],
                    P.closed = !0) : (P = ShapeModifiers.getModifier(h[p].ty),
                    a[p] = P,
                    P.init(this, h, p, a),
                    this.shapeModifiers.push(P),
                    f = !1),
                    _.push(P));
                this.addProcessedElement(h[p], p + 1)
            }
            for (this.removeTransformFromStyleList(),
            this.closeStyles(v),
            d = _.length,
            p = 0; p < d; p += 1)
                _[p].closed = !0
        }
        ,
        CVShapeElement.prototype.renderInnerContent = function() {
            this.transformHelper.opacity = 1,
            this.transformHelper._opMdf = !1,
            this.renderModifiers(),
            this.transformsManager.processSequences(this._isFirstFrame),
            this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }
        ,
        CVShapeElement.prototype.renderShapeTransform = function(h, a) {
            (h._opMdf || a.op._mdf || this._isFirstFrame) && (a.opacity = h.opacity,
            a.opacity *= a.op.v,
            a._opMdf = !0)
        }
        ,
        CVShapeElement.prototype.drawLayer = function() {
            var h, a = this.stylesList.length, u, f, c, p, d, m, g = this.globalData.renderer, v = this.globalData.canvasContext, _, b;
            for (h = 0; h < a; h += 1)
                if (b = this.stylesList[h],
                _ = b.type,
                !((_ === "st" || _ === "gs") && b.wi === 0 || !b.data._shouldRender || b.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
                    for (g.save(),
                    d = b.elements,
                    _ === "st" || _ === "gs" ? (v.strokeStyle = _ === "st" ? b.co : b.grd,
                    v.lineWidth = b.wi,
                    v.lineCap = b.lc,
                    v.lineJoin = b.lj,
                    v.miterLimit = b.ml || 0) : v.fillStyle = _ === "fl" ? b.co : b.grd,
                    g.ctxOpacity(b.coOp),
                    _ !== "st" && _ !== "gs" && v.beginPath(),
                    g.ctxTransform(b.preTransforms.finalTransform.props),
                    f = d.length,
                    u = 0; u < f; u += 1) {
                        for ((_ === "st" || _ === "gs") && (v.beginPath(),
                        b.da && (v.setLineDash(b.da),
                        v.lineDashOffset = b.do)),
                        m = d[u].trNodes,
                        p = m.length,
                        c = 0; c < p; c += 1)
                            m[c].t === "m" ? v.moveTo(m[c].p[0], m[c].p[1]) : m[c].t === "c" ? v.bezierCurveTo(m[c].pts[0], m[c].pts[1], m[c].pts[2], m[c].pts[3], m[c].pts[4], m[c].pts[5]) : v.closePath();
                        (_ === "st" || _ === "gs") && (v.stroke(),
                        b.da && v.setLineDash(this.dashResetter))
                    }
                    _ !== "st" && _ !== "gs" && v.fill(b.r),
                    g.restore()
                }
        }
        ,
        CVShapeElement.prototype.renderShape = function(h, a, u, f) {
            var c, p = a.length - 1, d;
            for (d = h,
            c = p; c >= 0; c -= 1)
                a[c].ty === "tr" ? (d = u[c].transform,
                this.renderShapeTransform(h, d)) : a[c].ty === "sh" || a[c].ty === "el" || a[c].ty === "rc" || a[c].ty === "sr" ? this.renderPath(a[c], u[c]) : a[c].ty === "fl" ? this.renderFill(a[c], u[c], d) : a[c].ty === "st" ? this.renderStroke(a[c], u[c], d) : a[c].ty === "gf" || a[c].ty === "gs" ? this.renderGradientFill(a[c], u[c], d) : a[c].ty === "gr" ? this.renderShape(d, a[c].it, u[c].it) : a[c].ty;
            f && this.drawLayer()
        }
        ,
        CVShapeElement.prototype.renderStyledShape = function(h, a) {
            if (this._isFirstFrame || a._mdf || h.transforms._mdf) {
                var u = h.trNodes, f = a.paths, c, p, d, m = f._length;
                u.length = 0;
                var g = h.transforms.finalTransform;
                for (d = 0; d < m; d += 1) {
                    var v = f.shapes[d];
                    if (v && v.v) {
                        for (p = v._length,
                        c = 1; c < p; c += 1)
                            c === 1 && u.push({
                                t: "m",
                                p: g.applyToPointArray(v.v[0][0], v.v[0][1], 0)
                            }),
                            u.push({
                                t: "c",
                                pts: g.applyToTriplePoints(v.o[c - 1], v.i[c], v.v[c])
                            });
                        p === 1 && u.push({
                            t: "m",
                            p: g.applyToPointArray(v.v[0][0], v.v[0][1], 0)
                        }),
                        v.c && p && (u.push({
                            t: "c",
                            pts: g.applyToTriplePoints(v.o[c - 1], v.i[0], v.v[0])
                        }),
                        u.push({
                            t: "z"
                        }))
                    }
                }
                h.trNodes = u
            }
        }
        ,
        CVShapeElement.prototype.renderPath = function(h, a) {
            if (h.hd !== !0 && h._shouldRender) {
                var u, f = a.styledShapes.length;
                for (u = 0; u < f; u += 1)
                    this.renderStyledShape(a.styledShapes[u], a.sh)
            }
        }
        ,
        CVShapeElement.prototype.renderFill = function(h, a, u) {
            var f = a.style;
            (a.c._mdf || this._isFirstFrame) && (f.co = "rgb(" + bmFloor(a.c.v[0]) + "," + bmFloor(a.c.v[1]) + "," + bmFloor(a.c.v[2]) + ")"),
            (a.o._mdf || u._opMdf || this._isFirstFrame) && (f.coOp = a.o.v * u.opacity)
        }
        ,
        CVShapeElement.prototype.renderGradientFill = function(h, a, u) {
            var f = a.style, c;
            if (!f.grd || a.g._mdf || a.s._mdf || a.e._mdf || h.t !== 1 && (a.h._mdf || a.a._mdf)) {
                var p = this.globalData.canvasContext
                  , d = a.s.v
                  , m = a.e.v;
                if (h.t === 1)
                    c = p.createLinearGradient(d[0], d[1], m[0], m[1]);
                else {
                    var g = Math.sqrt(Math.pow(d[0] - m[0], 2) + Math.pow(d[1] - m[1], 2))
                      , v = Math.atan2(m[1] - d[1], m[0] - d[0])
                      , _ = a.h.v;
                    _ >= 1 ? _ = .99 : _ <= -1 && (_ = -.99);
                    var b = g * _
                      , P = Math.cos(v + a.a.v) * b + d[0]
                      , J = Math.sin(v + a.a.v) * b + d[1];
                    c = p.createRadialGradient(P, J, 0, d[0], d[1], g)
                }
                var x, w = h.g.p, pe = a.g.c, L = 1;
                for (x = 0; x < w; x += 1)
                    a.g._hasOpacity && a.g._collapsable && (L = a.g.o[x * 2 + 1]),
                    c.addColorStop(pe[x * 4] / 100, "rgba(" + pe[x * 4 + 1] + "," + pe[x * 4 + 2] + "," + pe[x * 4 + 3] + "," + L + ")");
                f.grd = c
            }
            f.coOp = a.o.v * u.opacity
        }
        ,
        CVShapeElement.prototype.renderStroke = function(h, a, u) {
            var f = a.style
              , c = a.d;
            c && (c._mdf || this._isFirstFrame) && (f.da = c.dashArray,
            f.do = c.dashoffset[0]),
            (a.c._mdf || this._isFirstFrame) && (f.co = "rgb(" + bmFloor(a.c.v[0]) + "," + bmFloor(a.c.v[1]) + "," + bmFloor(a.c.v[2]) + ")"),
            (a.o._mdf || u._opMdf || this._isFirstFrame) && (f.coOp = a.o.v * u.opacity),
            (a.w._mdf || this._isFirstFrame) && (f.wi = a.w.v)
        }
        ,
        CVShapeElement.prototype.destroy = function() {
            this.shapesData = null,
            this.globalData = null,
            this.canvasContext = null,
            this.stylesList.length = 0,
            this.itemsData.length = 0
        }
        ;
        function CVTextElement(h, a, u) {
            this.textSpans = [],
            this.yOffset = 0,
            this.fillColorAnim = !1,
            this.strokeColorAnim = !1,
            this.strokeWidthAnim = !1,
            this.stroke = !1,
            this.fill = !1,
            this.justifyOffset = 0,
            this.currentRender = null,
            this.renderType = "canvas",
            this.values = {
                fill: "rgba(0,0,0,0)",
                stroke: "rgba(0,0,0,0)",
                sWidth: 0,
                fValue: ""
            },
            this.initElement(h, a, u)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
        CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),
        CVTextElement.prototype.buildNewText = function() {
            var h = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(h.l ? h.l.length : 0);
            var a = !1;
            h.fc ? (a = !0,
            this.values.fill = this.buildColor(h.fc)) : this.values.fill = "rgba(0,0,0,0)",
            this.fill = a;
            var u = !1;
            h.sc && (u = !0,
            this.values.stroke = this.buildColor(h.sc),
            this.values.sWidth = h.sw);
            var f = this.globalData.fontManager.getFontByName(h.f), c, p, d = h.l, m = this.mHelper;
            this.stroke = u,
            this.values.fValue = h.finalSize + "px " + this.globalData.fontManager.getFontByName(h.f).fFamily,
            p = h.finalText.length;
            var g, v, _, b, P, J, x, w, pe, L, R = this.data.singleShape, M = h.tr * .001 * h.finalSize, Z = 0, he = 0, et = !0, ei = 0;
            for (c = 0; c < p; c += 1) {
                g = this.globalData.fontManager.getCharData(h.finalText[c], f.fStyle, this.globalData.fontManager.getFontByName(h.f).fFamily),
                v = g && g.data || {},
                m.reset(),
                R && d[c].n && (Z = -M,
                he += h.yOffset,
                he += et ? 1 : 0,
                et = !1),
                P = v.shapes ? v.shapes[0].it : [],
                x = P.length,
                m.scale(h.finalSize / 100, h.finalSize / 100),
                R && this.applyTextPropertiesToMatrix(h, m, d[c].line, Z, he),
                pe = createSizedArray(x - 1);
                var ii = 0;
                for (J = 0; J < x; J += 1)
                    if (P[J].ty === "sh") {
                        for (b = P[J].ks.k.i.length,
                        w = P[J].ks.k,
                        L = [],
                        _ = 1; _ < b; _ += 1)
                            _ === 1 && L.push(m.applyToX(w.v[0][0], w.v[0][1], 0), m.applyToY(w.v[0][0], w.v[0][1], 0)),
                            L.push(m.applyToX(w.o[_ - 1][0], w.o[_ - 1][1], 0), m.applyToY(w.o[_ - 1][0], w.o[_ - 1][1], 0), m.applyToX(w.i[_][0], w.i[_][1], 0), m.applyToY(w.i[_][0], w.i[_][1], 0), m.applyToX(w.v[_][0], w.v[_][1], 0), m.applyToY(w.v[_][0], w.v[_][1], 0));
                        L.push(m.applyToX(w.o[_ - 1][0], w.o[_ - 1][1], 0), m.applyToY(w.o[_ - 1][0], w.o[_ - 1][1], 0), m.applyToX(w.i[0][0], w.i[0][1], 0), m.applyToY(w.i[0][0], w.i[0][1], 0), m.applyToX(w.v[0][0], w.v[0][1], 0), m.applyToY(w.v[0][0], w.v[0][1], 0)),
                        pe[ii] = L,
                        ii += 1
                    }
                R && (Z += d[c].l,
                Z += M),
                this.textSpans[ei] ? this.textSpans[ei].elem = pe : this.textSpans[ei] = {
                    elem: pe
                },
                ei += 1
            }
        }
        ,
        CVTextElement.prototype.renderInnerContent = function() {
            var h = this.canvasContext;
            h.font = this.values.fValue,
            h.lineCap = "butt",
            h.lineJoin = "miter",
            h.miterLimit = 4,
            this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            var a, u, f, c, p, d, m = this.textAnimator.renderedLetters, g = this.textProperty.currentData.l;
            u = g.length;
            var v, _ = null, b = null, P = null, J, x;
            for (a = 0; a < u; a += 1)
                if (!g[a].n) {
                    if (v = m[a],
                    v && (this.globalData.renderer.save(),
                    this.globalData.renderer.ctxTransform(v.p),
                    this.globalData.renderer.ctxOpacity(v.o)),
                    this.fill) {
                        for (v && v.fc ? _ !== v.fc && (_ = v.fc,
                        h.fillStyle = v.fc) : _ !== this.values.fill && (_ = this.values.fill,
                        h.fillStyle = this.values.fill),
                        J = this.textSpans[a].elem,
                        c = J.length,
                        this.globalData.canvasContext.beginPath(),
                        f = 0; f < c; f += 1)
                            for (x = J[f],
                            d = x.length,
                            this.globalData.canvasContext.moveTo(x[0], x[1]),
                            p = 2; p < d; p += 6)
                                this.globalData.canvasContext.bezierCurveTo(x[p], x[p + 1], x[p + 2], x[p + 3], x[p + 4], x[p + 5]);
                        this.globalData.canvasContext.closePath(),
                        this.globalData.canvasContext.fill()
                    }
                    if (this.stroke) {
                        for (v && v.sw ? P !== v.sw && (P = v.sw,
                        h.lineWidth = v.sw) : P !== this.values.sWidth && (P = this.values.sWidth,
                        h.lineWidth = this.values.sWidth),
                        v && v.sc ? b !== v.sc && (b = v.sc,
                        h.strokeStyle = v.sc) : b !== this.values.stroke && (b = this.values.stroke,
                        h.strokeStyle = this.values.stroke),
                        J = this.textSpans[a].elem,
                        c = J.length,
                        this.globalData.canvasContext.beginPath(),
                        f = 0; f < c; f += 1)
                            for (x = J[f],
                            d = x.length,
                            this.globalData.canvasContext.moveTo(x[0], x[1]),
                            p = 2; p < d; p += 6)
                                this.globalData.canvasContext.bezierCurveTo(x[p], x[p + 1], x[p + 2], x[p + 3], x[p + 4], x[p + 5]);
                        this.globalData.canvasContext.closePath(),
                        this.globalData.canvasContext.stroke()
                    }
                    v && this.globalData.renderer.restore()
                }
        }
        ;
        function CVImageElement(h, a, u) {
            this.assetData = a.getAssetData(h.refId),
            this.img = a.imageLoader.getAsset(this.assetData),
            this.initElement(h, a, u)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
        CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,
        CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
        CVImageElement.prototype.createContent = function() {
            if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                var h = createTag("canvas");
                h.width = this.assetData.w,
                h.height = this.assetData.h;
                var a = h.getContext("2d"), u = this.img.width, f = this.img.height, c = u / f, p = this.assetData.w / this.assetData.h, d, m, g = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                c > p && g === "xMidYMid slice" || c < p && g !== "xMidYMid slice" ? (m = f,
                d = m * p) : (d = u,
                m = d / p),
                a.drawImage(this.img, (u - d) / 2, (f - m) / 2, d, m, 0, 0, this.assetData.w, this.assetData.h),
                this.img = h
            }
        }
        ,
        CVImageElement.prototype.renderInnerContent = function() {
            this.canvasContext.drawImage(this.img, 0, 0)
        }
        ,
        CVImageElement.prototype.destroy = function() {
            this.img = null
        }
        ;
        function CVSolidElement(h, a, u) {
            this.initElement(h, a, u)
        }
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
        CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,
        CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
        CVSolidElement.prototype.renderInnerContent = function() {
            var h = this.canvasContext;
            h.fillStyle = this.data.sc,
            h.fillRect(0, 0, this.data.sw, this.data.sh)
        }
        ;
        function CanvasRendererBase(h, a) {
            this.animationItem = h,
            this.renderConfig = {
                clearCanvas: a && a.clearCanvas !== void 0 ? a.clearCanvas : !0,
                context: a && a.context || null,
                progressiveLoad: a && a.progressiveLoad || !1,
                preserveAspectRatio: a && a.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: a && a.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: a && a.contentVisibility || "visible",
                className: a && a.className || "",
                id: a && a.id || ""
            },
            this.renderConfig.dpr = a && a.dpr || 1,
            this.animationItem.wrapper && (this.renderConfig.dpr = a && a.dpr || window.devicePixelRatio || 1),
            this.renderedFrame = -1,
            this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            },
            this.contextData = new CVContextData,
            this.elements = [],
            this.pendingElements = [],
            this.transformMat = new Matrix,
            this.completeLayers = !1,
            this.rendererType = "canvas"
        }
        extendPrototype([BaseRenderer], CanvasRendererBase),
        CanvasRendererBase.prototype.createShape = function(h) {
            return new CVShapeElement(h,this.globalData,this)
        }
        ,
        CanvasRendererBase.prototype.createText = function(h) {
            return new CVTextElement(h,this.globalData,this)
        }
        ,
        CanvasRendererBase.prototype.createImage = function(h) {
            return new CVImageElement(h,this.globalData,this)
        }
        ,
        CanvasRendererBase.prototype.createSolid = function(h) {
            return new CVSolidElement(h,this.globalData,this)
        }
        ,
        CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
        CanvasRendererBase.prototype.ctxTransform = function(h) {
            if (!(h[0] === 1 && h[1] === 0 && h[4] === 0 && h[5] === 1 && h[12] === 0 && h[13] === 0)) {
                if (!this.renderConfig.clearCanvas) {
                    this.canvasContext.transform(h[0], h[1], h[4], h[5], h[12], h[13]);
                    return
                }
                this.transformMat.cloneFromProps(h);
                var a = this.contextData.getTransform()
                  , u = a.props;
                this.transformMat.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]),
                a.cloneFromProps(this.transformMat.props);
                var f = a.props;
                this.canvasContext.setTransform(f[0], f[1], f[4], f[5], f[12], f[13])
            }
        }
        ,
        CanvasRendererBase.prototype.ctxOpacity = function(h) {
            var a = this.contextData.getOpacity();
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.globalAlpha *= h < 0 ? 0 : h,
                this.globalData.currentGlobalAlpha = a;
                return
            }
            a *= h < 0 ? 0 : h,
            this.contextData.setOpacity(a),
            this.globalData.currentGlobalAlpha !== a && (this.canvasContext.globalAlpha = a,
            this.globalData.currentGlobalAlpha = a)
        }
        ,
        CanvasRendererBase.prototype.reset = function() {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            this.contextData.reset()
        }
        ,
        CanvasRendererBase.prototype.save = function(h) {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.save();
                return
            }
            h && this.canvasContext.save(),
            this.contextData.push()
        }
        ,
        CanvasRendererBase.prototype.restore = function(h) {
            if (!this.renderConfig.clearCanvas) {
                this.canvasContext.restore();
                return
            }
            h && (this.canvasContext.restore(),
            this.globalData.blendMode = "source-over");
            var a = this.contextData.pop()
              , u = a.transform
              , f = a.opacity;
            this.canvasContext.setTransform(u[0], u[1], u[4], u[5], u[12], u[13]),
            this.globalData.currentGlobalAlpha !== f && (this.canvasContext.globalAlpha = f,
            this.globalData.currentGlobalAlpha = f)
        }
        ,
        CanvasRendererBase.prototype.configAnimation = function(h) {
            if (this.animationItem.wrapper) {
                this.animationItem.container = createTag("canvas");
                var a = this.animationItem.container.style;
                a.width = "100%",
                a.height = "100%";
                var u = "0px 0px 0px";
                a.transformOrigin = u,
                a.mozTransformOrigin = u,
                a.webkitTransformOrigin = u,
                a["-webkit-transform"] = u,
                a.contentVisibility = this.renderConfig.contentVisibility,
                this.animationItem.wrapper.appendChild(this.animationItem.container),
                this.canvasContext = this.animationItem.container.getContext("2d"),
                this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className),
                this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
            } else
                this.canvasContext = this.renderConfig.context;
            this.data = h,
            this.layers = h.layers,
            this.transformCanvas = {
                w: h.w,
                h: h.h,
                sx: 0,
                sy: 0,
                tx: 0,
                ty: 0
            },
            this.setupGlobalData(h, document.body),
            this.globalData.canvasContext = this.canvasContext,
            this.globalData.renderer = this,
            this.globalData.isDashed = !1,
            this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
            this.globalData.transformCanvas = this.transformCanvas,
            this.elements = createSizedArray(h.layers.length),
            this.updateContainerSize()
        }
        ,
        CanvasRendererBase.prototype.updateContainerSize = function(h, a) {
            this.reset();
            var u, f;
            h ? (u = h,
            f = a,
            this.canvasContext.canvas.width = u,
            this.canvasContext.canvas.height = f) : (this.animationItem.wrapper && this.animationItem.container ? (u = this.animationItem.wrapper.offsetWidth,
            f = this.animationItem.wrapper.offsetHeight) : (u = this.canvasContext.canvas.width,
            f = this.canvasContext.canvas.height),
            this.canvasContext.canvas.width = u * this.renderConfig.dpr,
            this.canvasContext.canvas.height = f * this.renderConfig.dpr);
            var c, p;
            if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
                var d = this.renderConfig.preserveAspectRatio.split(" ")
                  , m = d[1] || "meet"
                  , g = d[0] || "xMidYMid"
                  , v = g.substr(0, 4)
                  , _ = g.substr(4);
                c = u / f,
                p = this.transformCanvas.w / this.transformCanvas.h,
                p > c && m === "meet" || p < c && m === "slice" ? (this.transformCanvas.sx = u / (this.transformCanvas.w / this.renderConfig.dpr),
                this.transformCanvas.sy = u / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = f / (this.transformCanvas.h / this.renderConfig.dpr),
                this.transformCanvas.sy = f / (this.transformCanvas.h / this.renderConfig.dpr)),
                v === "xMid" && (p < c && m === "meet" || p > c && m === "slice") ? this.transformCanvas.tx = (u - this.transformCanvas.w * (f / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : v === "xMax" && (p < c && m === "meet" || p > c && m === "slice") ? this.transformCanvas.tx = (u - this.transformCanvas.w * (f / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0,
                _ === "YMid" && (p > c && m === "meet" || p < c && m === "slice") ? this.transformCanvas.ty = (f - this.transformCanvas.h * (u / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : _ === "YMax" && (p > c && m === "meet" || p < c && m === "slice") ? this.transformCanvas.ty = (f - this.transformCanvas.h * (u / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
            } else
                this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = u / (this.transformCanvas.w / this.renderConfig.dpr),
                this.transformCanvas.sy = f / (this.transformCanvas.h / this.renderConfig.dpr),
                this.transformCanvas.tx = 0,
                this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr,
                this.transformCanvas.sy = this.renderConfig.dpr,
                this.transformCanvas.tx = 0,
                this.transformCanvas.ty = 0);
            this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1],
            this.ctxTransform(this.transformCanvas.props),
            this.canvasContext.beginPath(),
            this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
            this.canvasContext.closePath(),
            this.canvasContext.clip(),
            this.renderFrame(this.renderedFrame, !0)
        }
        ,
        CanvasRendererBase.prototype.destroy = function() {
            this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
            var h, a = this.layers ? this.layers.length : 0;
            for (h = a - 1; h >= 0; h -= 1)
                this.elements[h] && this.elements[h].destroy && this.elements[h].destroy();
            this.elements.length = 0,
            this.globalData.canvasContext = null,
            this.animationItem.container = null,
            this.destroyed = !0
        }
        ,
        CanvasRendererBase.prototype.renderFrame = function(h, a) {
            if (!(this.renderedFrame === h && this.renderConfig.clearCanvas === !0 && !a || this.destroyed || h === -1)) {
                this.renderedFrame = h,
                this.globalData.frameNum = h - this.animationItem._isFirstFrame,
                this.globalData.frameId += 1,
                this.globalData._mdf = !this.renderConfig.clearCanvas || a,
                this.globalData.projectInterface.currentFrame = h;
                var u, f = this.layers.length;
                for (this.completeLayers || this.checkLayers(h),
                u = 0; u < f; u += 1)
                    (this.completeLayers || this.elements[u]) && this.elements[u].prepareFrame(h - this.layers[u].st);
                if (this.globalData._mdf) {
                    for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(),
                    u = f - 1; u >= 0; u -= 1)
                        (this.completeLayers || this.elements[u]) && this.elements[u].renderFrame();
                    this.renderConfig.clearCanvas !== !0 && this.restore()
                }
            }
        }
        ,
        CanvasRendererBase.prototype.buildItem = function(h) {
            var a = this.elements;
            if (!(a[h] || this.layers[h].ty === 99)) {
                var u = this.createItem(this.layers[h], this, this.globalData);
                a[h] = u,
                u.initExpressions()
            }
        }
        ,
        CanvasRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
                var h = this.pendingElements.pop();
                h.checkParenting()
            }
        }
        ,
        CanvasRendererBase.prototype.hide = function() {
            this.animationItem.container.style.display = "none"
        }
        ,
        CanvasRendererBase.prototype.show = function() {
            this.animationItem.container.style.display = "block"
        }
        ;
        function CVCompElement(h, a, u) {
            this.completeLayers = !1,
            this.layers = h.layers,
            this.pendingElements = [],
            this.elements = createSizedArray(this.layers.length),
            this.initElement(h, a, u),
            this.tm = h.tm ? PropertyFactory.getProp(this, h.tm, 0, a.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
        CVCompElement.prototype.renderInnerContent = function() {
            var h = this.canvasContext;
            h.beginPath(),
            h.moveTo(0, 0),
            h.lineTo(this.data.w, 0),
            h.lineTo(this.data.w, this.data.h),
            h.lineTo(0, this.data.h),
            h.lineTo(0, 0),
            h.clip();
            var a, u = this.layers.length;
            for (a = u - 1; a >= 0; a -= 1)
                (this.completeLayers || this.elements[a]) && this.elements[a].renderFrame()
        }
        ,
        CVCompElement.prototype.destroy = function() {
            var h, a = this.layers.length;
            for (h = a - 1; h >= 0; h -= 1)
                this.elements[h] && this.elements[h].destroy();
            this.layers = null,
            this.elements = null
        }
        ,
        CVCompElement.prototype.createComp = function(h) {
            return new CVCompElement(h,this.globalData,this)
        }
        ;
        function CanvasRenderer(h, a) {
            this.animationItem = h,
            this.renderConfig = {
                clearCanvas: a && a.clearCanvas !== void 0 ? a.clearCanvas : !0,
                context: a && a.context || null,
                progressiveLoad: a && a.progressiveLoad || !1,
                preserveAspectRatio: a && a.preserveAspectRatio || "xMidYMid meet",
                imagePreserveAspectRatio: a && a.imagePreserveAspectRatio || "xMidYMid slice",
                contentVisibility: a && a.contentVisibility || "visible",
                className: a && a.className || "",
                id: a && a.id || "",
                runExpressions: !a || a.runExpressions === void 0 || a.runExpressions
            },
            this.renderConfig.dpr = a && a.dpr || 1,
            this.animationItem.wrapper && (this.renderConfig.dpr = a && a.dpr || window.devicePixelRatio || 1),
            this.renderedFrame = -1,
            this.globalData = {
                frameNum: -1,
                _mdf: !1,
                renderConfig: this.renderConfig,
                currentGlobalAlpha: -1
            },
            this.contextData = new CVContextData,
            this.elements = [],
            this.pendingElements = [],
            this.transformMat = new Matrix,
            this.completeLayers = !1,
            this.rendererType = "canvas"
        }
        extendPrototype([CanvasRendererBase], CanvasRenderer),
        CanvasRenderer.prototype.createComp = function(h) {
            return new CVCompElement(h,this.globalData,this)
        }
        ;
        function HBaseElement() {}
        HBaseElement.prototype = {
            checkBlendMode: function() {},
            initRendererElement: function() {
                this.baseElement = createTag(this.data.tg || "div"),
                this.data.hasMask ? (this.svgElement = createNS("svg"),
                this.layerElement = createNS("g"),
                this.maskedElement = this.layerElement,
                this.svgElement.appendChild(this.layerElement),
                this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement,
                styleDiv(this.baseElement)
            },
            createContainerElements: function() {
                this.renderableEffectsManager = new CVEffects,
                this.transformedElement = this.baseElement,
                this.maskedElement = this.layerElement,
                this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                this.data.bm !== 0 && this.setBlendMode()
            },
            renderElement: function() {
                var a = this.transformedElement ? this.transformedElement.style : {};
                if (this.finalTransform._matMdf) {
                    var u = this.finalTransform.mat.toCSS();
                    a.transform = u,
                    a.webkitTransform = u
                }
                this.finalTransform._opMdf && (a.opacity = this.finalTransform.mProp.o.v)
            },
            renderFrame: function() {
                this.data.hd || this.hidden || (this.renderTransform(),
                this.renderRenderable(),
                this.renderElement(),
                this.renderInnerContent(),
                this._isFirstFrame && (this._isFirstFrame = !1))
            },
            destroy: function() {
                this.layerElement = null,
                this.transformedElement = null,
                this.matteElement && (this.matteElement = null),
                this.maskManager && (this.maskManager.destroy(),
                this.maskManager = null)
            },
            createRenderableComponents: function() {
                this.maskManager = new MaskElement(this.data,this,this.globalData)
            },
            addEffects: function() {},
            setMatte: function() {}
        },
        HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement,
        HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy,
        HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
        function HSolidElement(h, a, u) {
            this.initElement(h, a, u)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
        HSolidElement.prototype.createContent = function() {
            var h;
            this.data.hasMask ? (h = createNS("rect"),
            h.setAttribute("width", this.data.sw),
            h.setAttribute("height", this.data.sh),
            h.setAttribute("fill", this.data.sc),
            this.svgElement.setAttribute("width", this.data.sw),
            this.svgElement.setAttribute("height", this.data.sh)) : (h = createTag("div"),
            h.style.width = this.data.sw + "px",
            h.style.height = this.data.sh + "px",
            h.style.backgroundColor = this.data.sc),
            this.layerElement.appendChild(h)
        }
        ;
        function HShapeElement(h, a, u) {
            this.shapes = [],
            this.shapesData = h.shapes,
            this.stylesList = [],
            this.shapeModifiers = [],
            this.itemsData = [],
            this.processedElements = [],
            this.animatedContents = [],
            this.shapesContainer = createNS("g"),
            this.initElement(h, a, u),
            this.prevViewData = [],
            this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            }
        }
        extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
        HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,
        HShapeElement.prototype.createContent = function() {
            var h;
            if (this.baseElement.style.fontSize = 0,
            this.data.hasMask)
                this.layerElement.appendChild(this.shapesContainer),
                h = this.svgElement;
            else {
                h = createNS("svg");
                var a = this.comp.data ? this.comp.data : this.globalData.compSize;
                h.setAttribute("width", a.w),
                h.setAttribute("height", a.h),
                h.appendChild(this.shapesContainer),
                this.layerElement.appendChild(h)
            }
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
            this.filterUniqueShapes(),
            this.shapeCont = h
        }
        ,
        HShapeElement.prototype.getTransformedPoint = function(h, a) {
            var u, f = h.length;
            for (u = 0; u < f; u += 1)
                a = h[u].mProps.v.applyToPointArray(a[0], a[1], 0);
            return a
        }
        ,
        HShapeElement.prototype.calculateShapeBoundingBox = function(h, a) {
            var u = h.sh.v, f = h.transformers, c, p = u._length, d, m, g, v;
            if (!(p <= 1)) {
                for (c = 0; c < p - 1; c += 1)
                    d = this.getTransformedPoint(f, u.v[c]),
                    m = this.getTransformedPoint(f, u.o[c]),
                    g = this.getTransformedPoint(f, u.i[c + 1]),
                    v = this.getTransformedPoint(f, u.v[c + 1]),
                    this.checkBounds(d, m, g, v, a);
                u.c && (d = this.getTransformedPoint(f, u.v[c]),
                m = this.getTransformedPoint(f, u.o[c]),
                g = this.getTransformedPoint(f, u.i[0]),
                v = this.getTransformedPoint(f, u.v[0]),
                this.checkBounds(d, m, g, v, a))
            }
        }
        ,
        HShapeElement.prototype.checkBounds = function(h, a, u, f, c) {
            this.getBoundsOfCurve(h, a, u, f);
            var p = this.shapeBoundingBox;
            c.x = bmMin(p.left, c.x),
            c.xMax = bmMax(p.right, c.xMax),
            c.y = bmMin(p.top, c.y),
            c.yMax = bmMax(p.bottom, c.yMax)
        }
        ,
        HShapeElement.prototype.shapeBoundingBox = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        HShapeElement.prototype.tempBoundingBox = {
            x: 0,
            xMax: 0,
            y: 0,
            yMax: 0,
            width: 0,
            height: 0
        },
        HShapeElement.prototype.getBoundsOfCurve = function(h, a, u, f) {
            for (var c = [[h[0], f[0]], [h[1], f[1]]], p, d, m, g, v, _, b, P = 0; P < 2; ++P)
                d = 6 * h[P] - 12 * a[P] + 6 * u[P],
                p = -3 * h[P] + 9 * a[P] - 9 * u[P] + 3 * f[P],
                m = 3 * a[P] - 3 * h[P],
                d |= 0,
                p |= 0,
                m |= 0,
                p === 0 && d === 0 || (p === 0 ? (g = -m / d,
                g > 0 && g < 1 && c[P].push(this.calculateF(g, h, a, u, f, P))) : (v = d * d - 4 * m * p,
                v >= 0 && (_ = (-d + bmSqrt(v)) / (2 * p),
                _ > 0 && _ < 1 && c[P].push(this.calculateF(_, h, a, u, f, P)),
                b = (-d - bmSqrt(v)) / (2 * p),
                b > 0 && b < 1 && c[P].push(this.calculateF(b, h, a, u, f, P)))));
            this.shapeBoundingBox.left = bmMin.apply(null, c[0]),
            this.shapeBoundingBox.top = bmMin.apply(null, c[1]),
            this.shapeBoundingBox.right = bmMax.apply(null, c[0]),
            this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
        }
        ,
        HShapeElement.prototype.calculateF = function(h, a, u, f, c, p) {
            return bmPow(1 - h, 3) * a[p] + 3 * bmPow(1 - h, 2) * h * u[p] + 3 * (1 - h) * bmPow(h, 2) * f[p] + bmPow(h, 3) * c[p]
        }
        ,
        HShapeElement.prototype.calculateBoundingBox = function(h, a) {
            var u, f = h.length;
            for (u = 0; u < f; u += 1)
                h[u] && h[u].sh ? this.calculateShapeBoundingBox(h[u], a) : h[u] && h[u].it ? this.calculateBoundingBox(h[u].it, a) : h[u] && h[u].style && h[u].w && this.expandStrokeBoundingBox(h[u].w, a)
        }
        ,
        HShapeElement.prototype.expandStrokeBoundingBox = function(h, a) {
            var u = 0;
            if (h.keyframes) {
                for (var f = 0; f < h.keyframes.length; f += 1) {
                    var c = h.keyframes[f].s;
                    c > u && (u = c)
                }
                u *= h.mult
            } else
                u = h.v * h.mult;
            a.x -= u,
            a.xMax += u,
            a.y -= u,
            a.yMax += u
        }
        ,
        HShapeElement.prototype.currentBoxContains = function(h) {
            return this.currentBBox.x <= h.x && this.currentBBox.y <= h.y && this.currentBBox.width + this.currentBBox.x >= h.x + h.width && this.currentBBox.height + this.currentBBox.y >= h.y + h.height
        }
        ,
        HShapeElement.prototype.renderInnerContent = function() {
            if (this._renderShapeFrame(),
            !this.hidden && (this._isFirstFrame || this._mdf)) {
                var h = this.tempBoundingBox
                  , a = 999999;
                if (h.x = a,
                h.xMax = -a,
                h.y = a,
                h.yMax = -a,
                this.calculateBoundingBox(this.itemsData, h),
                h.width = h.xMax < h.x ? 0 : h.xMax - h.x,
                h.height = h.yMax < h.y ? 0 : h.yMax - h.y,
                this.currentBoxContains(h))
                    return;
                var u = !1;
                if (this.currentBBox.w !== h.width && (this.currentBBox.w = h.width,
                this.shapeCont.setAttribute("width", h.width),
                u = !0),
                this.currentBBox.h !== h.height && (this.currentBBox.h = h.height,
                this.shapeCont.setAttribute("height", h.height),
                u = !0),
                u || this.currentBBox.x !== h.x || this.currentBBox.y !== h.y) {
                    this.currentBBox.w = h.width,
                    this.currentBBox.h = h.height,
                    this.currentBBox.x = h.x,
                    this.currentBBox.y = h.y,
                    this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                    var f = this.shapeCont.style
                      , c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                    f.transform = c,
                    f.webkitTransform = c
                }
            }
        }
        ;
        function HTextElement(h, a, u) {
            this.textSpans = [],
            this.textPaths = [],
            this.currentBBox = {
                x: 999999,
                y: -999999,
                h: 0,
                w: 0
            },
            this.renderType = "svg",
            this.isMasked = !1,
            this.initElement(h, a, u)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
        HTextElement.prototype.createContent = function() {
            if (this.isMasked = this.checkMasks(),
            this.isMasked) {
                this.renderType = "svg",
                this.compW = this.comp.data.w,
                this.compH = this.comp.data.h,
                this.svgElement.setAttribute("width", this.compW),
                this.svgElement.setAttribute("height", this.compH);
                var h = createNS("g");
                this.maskedElement.appendChild(h),
                this.innerElem = h
            } else
                this.renderType = "html",
                this.innerElem = this.layerElement;
            this.checkParenting()
        }
        ,
        HTextElement.prototype.buildNewText = function() {
            var h = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(h.l ? h.l.length : 0);
            var a = this.innerElem.style
              , u = h.fc ? this.buildColor(h.fc) : "rgba(0,0,0,0)";
            a.fill = u,
            a.color = u,
            h.sc && (a.stroke = this.buildColor(h.sc),
            a.strokeWidth = h.sw + "px");
            var f = this.globalData.fontManager.getFontByName(h.f);
            if (!this.globalData.fontManager.chars)
                if (a.fontSize = h.finalSize + "px",
                a.lineHeight = h.finalSize + "px",
                f.fClass)
                    this.innerElem.className = f.fClass;
                else {
                    a.fontFamily = f.fFamily;
                    var c = h.fWeight
                      , p = h.fStyle;
                    a.fontStyle = p,
                    a.fontWeight = c
                }
            var d, m, g = h.l;
            m = g.length;
            var v, _, b, P = this.mHelper, J, x = "", w = 0;
            for (d = 0; d < m; d += 1) {
                if (this.globalData.fontManager.chars ? (this.textPaths[w] ? v = this.textPaths[w] : (v = createNS("path"),
                v.setAttribute("stroke-linecap", lineCapEnum[1]),
                v.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                v.setAttribute("stroke-miterlimit", "4")),
                this.isMasked || (this.textSpans[w] ? (_ = this.textSpans[w],
                b = _.children[0]) : (_ = createTag("div"),
                _.style.lineHeight = 0,
                b = createNS("svg"),
                b.appendChild(v),
                styleDiv(_)))) : this.isMasked ? v = this.textPaths[w] ? this.textPaths[w] : createNS("text") : this.textSpans[w] ? (_ = this.textSpans[w],
                v = this.textPaths[w]) : (_ = createTag("span"),
                styleDiv(_),
                v = createTag("span"),
                styleDiv(v),
                _.appendChild(v)),
                this.globalData.fontManager.chars) {
                    var pe = this.globalData.fontManager.getCharData(h.finalText[d], f.fStyle, this.globalData.fontManager.getFontByName(h.f).fFamily), L;
                    if (pe ? L = pe.data : L = null,
                    P.reset(),
                    L && L.shapes && L.shapes.length && (J = L.shapes[0].it,
                    P.scale(h.finalSize / 100, h.finalSize / 100),
                    x = this.createPathShape(P, J),
                    v.setAttribute("d", x)),
                    this.isMasked)
                        this.innerElem.appendChild(v);
                    else {
                        if (this.innerElem.appendChild(_),
                        L && L.shapes) {
                            document.body.appendChild(b);
                            var R = b.getBBox();
                            b.setAttribute("width", R.width + 2),
                            b.setAttribute("height", R.height + 2),
                            b.setAttribute("viewBox", R.x - 1 + " " + (R.y - 1) + " " + (R.width + 2) + " " + (R.height + 2));
                            var M = b.style
                              , Z = "translate(" + (R.x - 1) + "px," + (R.y - 1) + "px)";
                            M.transform = Z,
                            M.webkitTransform = Z,
                            g[d].yOffset = R.y - 1
                        } else
                            b.setAttribute("width", 1),
                            b.setAttribute("height", 1);
                        _.appendChild(b)
                    }
                } else if (v.textContent = g[d].val,
                v.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
                this.isMasked)
                    this.innerElem.appendChild(v);
                else {
                    this.innerElem.appendChild(_);
                    var he = v.style
                      , et = "translate3d(0," + -h.finalSize / 1.2 + "px,0)";
                    he.transform = et,
                    he.webkitTransform = et
                }
                this.isMasked ? this.textSpans[w] = v : this.textSpans[w] = _,
                this.textSpans[w].style.display = "block",
                this.textPaths[w] = v,
                w += 1
            }
            for (; w < this.textSpans.length; )
                this.textSpans[w].style.display = "none",
                w += 1
        }
        ,
        HTextElement.prototype.renderInnerContent = function() {
            var h;
            if (this.data.singleShape) {
                if (!this._isFirstFrame && !this.lettersChangedFlag)
                    return;
                if (this.isMasked && this.finalTransform._matMdf) {
                    this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
                    h = this.svgElement.style;
                    var a = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                    h.transform = a,
                    h.webkitTransform = a
                }
            }
            if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
            !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
                var u, f, c = 0, p = this.textAnimator.renderedLetters, d = this.textProperty.currentData.l;
                f = d.length;
                var m, g, v;
                for (u = 0; u < f; u += 1)
                    d[u].n ? c += 1 : (g = this.textSpans[u],
                    v = this.textPaths[u],
                    m = p[c],
                    c += 1,
                    m._mdf.m && (this.isMasked ? g.setAttribute("transform", m.m) : (g.style.webkitTransform = m.m,
                    g.style.transform = m.m)),
                    g.style.opacity = m.o,
                    m.sw && m._mdf.sw && v.setAttribute("stroke-width", m.sw),
                    m.sc && m._mdf.sc && v.setAttribute("stroke", m.sc),
                    m.fc && m._mdf.fc && (v.setAttribute("fill", m.fc),
                    v.style.color = m.fc));
                if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var _ = this.innerElem.getBBox();
                    this.currentBBox.w !== _.width && (this.currentBBox.w = _.width,
                    this.svgElement.setAttribute("width", _.width)),
                    this.currentBBox.h !== _.height && (this.currentBBox.h = _.height,
                    this.svgElement.setAttribute("height", _.height));
                    var b = 1;
                    if (this.currentBBox.w !== _.width + b * 2 || this.currentBBox.h !== _.height + b * 2 || this.currentBBox.x !== _.x - b || this.currentBBox.y !== _.y - b) {
                        this.currentBBox.w = _.width + b * 2,
                        this.currentBBox.h = _.height + b * 2,
                        this.currentBBox.x = _.x - b,
                        this.currentBBox.y = _.y - b,
                        this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                        h = this.svgElement.style;
                        var P = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        h.transform = P,
                        h.webkitTransform = P
                    }
                }
            }
        }
        ;
        function HCameraElement(h, a, u) {
            this.initFrame(),
            this.initBaseData(h, a, u),
            this.initHierarchy();
            var f = PropertyFactory.getProp;
            if (this.pe = f(this, h.pe, 0, 0, this),
            h.ks.p.s ? (this.px = f(this, h.ks.p.x, 1, 0, this),
            this.py = f(this, h.ks.p.y, 1, 0, this),
            this.pz = f(this, h.ks.p.z, 1, 0, this)) : this.p = f(this, h.ks.p, 1, 0, this),
            h.ks.a && (this.a = f(this, h.ks.a, 1, 0, this)),
            h.ks.or.k.length && h.ks.or.k[0].to) {
                var c, p = h.ks.or.k.length;
                for (c = 0; c < p; c += 1)
                    h.ks.or.k[c].to = null,
                    h.ks.or.k[c].ti = null
            }
            this.or = f(this, h.ks.or, 1, degToRads, this),
            this.or.sh = !0,
            this.rx = f(this, h.ks.rx, 0, degToRads, this),
            this.ry = f(this, h.ks.ry, 0, degToRads, this),
            this.rz = f(this, h.ks.rz, 0, degToRads, this),
            this.mat = new Matrix,
            this._prevMat = new Matrix,
            this._isFirstFrame = !0,
            this.finalTransform = {
                mProp: this
            }
        }
        extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
        HCameraElement.prototype.setup = function() {
            var h, a = this.comp.threeDElements.length, u, f, c;
            for (h = 0; h < a; h += 1)
                if (u = this.comp.threeDElements[h],
                u.type === "3d") {
                    f = u.perspectiveElem.style,
                    c = u.container.style;
                    var p = this.pe.v + "px"
                      , d = "0px 0px 0px"
                      , m = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    f.perspective = p,
                    f.webkitPerspective = p,
                    c.transformOrigin = d,
                    c.mozTransformOrigin = d,
                    c.webkitTransformOrigin = d,
                    f.transform = m,
                    f.webkitTransform = m
                }
        }
        ,
        HCameraElement.prototype.createElements = function() {}
        ,
        HCameraElement.prototype.hide = function() {}
        ,
        HCameraElement.prototype.renderFrame = function() {
            var h = this._isFirstFrame, a, u;
            if (this.hierarchy)
                for (u = this.hierarchy.length,
                a = 0; a < u; a += 1)
                    h = this.hierarchy[a].finalTransform.mProp._mdf || h;
            if (h || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                if (this.mat.reset(),
                this.hierarchy)
                    for (u = this.hierarchy.length - 1,
                    a = u; a >= 0; a -= 1) {
                        var f = this.hierarchy[a].finalTransform.mProp;
                        this.mat.translate(-f.p.v[0], -f.p.v[1], f.p.v[2]),
                        this.mat.rotateX(-f.or.v[0]).rotateY(-f.or.v[1]).rotateZ(f.or.v[2]),
                        this.mat.rotateX(-f.rx.v).rotateY(-f.ry.v).rotateZ(f.rz.v),
                        this.mat.scale(1 / f.s.v[0], 1 / f.s.v[1], 1 / f.s.v[2]),
                        this.mat.translate(f.a.v[0], f.a.v[1], f.a.v[2])
                    }
                if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                this.a) {
                    var c;
                    this.p ? c = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : c = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                    var p = Math.sqrt(Math.pow(c[0], 2) + Math.pow(c[1], 2) + Math.pow(c[2], 2))
                      , d = [c[0] / p, c[1] / p, c[2] / p]
                      , m = Math.sqrt(d[2] * d[2] + d[0] * d[0])
                      , g = Math.atan2(d[1], m)
                      , v = Math.atan2(d[0], -d[2]);
                    this.mat.rotateY(v).rotateX(-g)
                }
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                this.mat.translate(0, 0, this.pe.v);
                var _ = !this._prevMat.equals(this.mat);
                if ((_ || this.pe._mdf) && this.comp.threeDElements) {
                    u = this.comp.threeDElements.length;
                    var b, P, J;
                    for (a = 0; a < u; a += 1)
                        if (b = this.comp.threeDElements[a],
                        b.type === "3d") {
                            if (_) {
                                var x = this.mat.toCSS();
                                J = b.container.style,
                                J.transform = x,
                                J.webkitTransform = x
                            }
                            this.pe._mdf && (P = b.perspectiveElem.style,
                            P.perspective = this.pe.v + "px",
                            P.webkitPerspective = this.pe.v + "px")
                        }
                    this.mat.clone(this._prevMat)
                }
            }
            this._isFirstFrame = !1
        }
        ,
        HCameraElement.prototype.prepareFrame = function(h) {
            this.prepareProperties(h, !0)
        }
        ,
        HCameraElement.prototype.destroy = function() {}
        ,
        HCameraElement.prototype.getBaseElement = function() {
            return null
        }
        ;
        function HImageElement(h, a, u) {
            this.assetData = a.getAssetData(h.refId),
            this.initElement(h, a, u)
        }
        extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
        HImageElement.prototype.createContent = function() {
            var h = this.globalData.getAssetsPath(this.assetData)
              , a = new Image;
            this.data.hasMask ? (this.imageElem = createNS("image"),
            this.imageElem.setAttribute("width", this.assetData.w + "px"),
            this.imageElem.setAttribute("height", this.assetData.h + "px"),
            this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", h),
            this.layerElement.appendChild(this.imageElem),
            this.baseElement.setAttribute("width", this.assetData.w),
            this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(a),
            a.crossOrigin = "anonymous",
            a.src = h,
            this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }
        ;
        function HybridRendererBase(h, a) {
            this.animationItem = h,
            this.layers = null,
            this.renderedFrame = -1,
            this.renderConfig = {
                className: a && a.className || "",
                imagePreserveAspectRatio: a && a.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(a && a.hideOnTransparent === !1),
                filterSize: {
                    width: a && a.filterSize && a.filterSize.width || "400%",
                    height: a && a.filterSize && a.filterSize.height || "400%",
                    x: a && a.filterSize && a.filterSize.x || "-100%",
                    y: a && a.filterSize && a.filterSize.y || "-100%"
                }
            },
            this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            },
            this.pendingElements = [],
            this.elements = [],
            this.threeDElements = [],
            this.destroyed = !1,
            this.camera = null,
            this.supports3d = !0,
            this.rendererType = "html"
        }
        extendPrototype([BaseRenderer], HybridRendererBase),
        HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem,
        HybridRendererBase.prototype.checkPendingElements = function() {
            for (; this.pendingElements.length; ) {
                var h = this.pendingElements.pop();
                h.checkParenting()
            }
        }
        ,
        HybridRendererBase.prototype.appendElementInPos = function(h, a) {
            var u = h.getBaseElement();
            if (u) {
                var f = this.layers[a];
                if (!f.ddd || !this.supports3d)
                    if (this.threeDElements)
                        this.addTo3dContainer(u, a);
                    else {
                        for (var c = 0, p, d, m; c < a; )
                            this.elements[c] && this.elements[c] !== !0 && this.elements[c].getBaseElement && (d = this.elements[c],
                            m = this.layers[c].ddd ? this.getThreeDContainerByPos(c) : d.getBaseElement(),
                            p = m || p),
                            c += 1;
                        p ? (!f.ddd || !this.supports3d) && this.layerElement.insertBefore(u, p) : (!f.ddd || !this.supports3d) && this.layerElement.appendChild(u)
                    }
                else
                    this.addTo3dContainer(u, a)
            }
        }
        ,
        HybridRendererBase.prototype.createShape = function(h) {
            return this.supports3d ? new HShapeElement(h,this.globalData,this) : new SVGShapeElement(h,this.globalData,this)
        }
        ,
        HybridRendererBase.prototype.createText = function(h) {
            return this.supports3d ? new HTextElement(h,this.globalData,this) : new SVGTextLottieElement(h,this.globalData,this)
        }
        ,
        HybridRendererBase.prototype.createCamera = function(h) {
            return this.camera = new HCameraElement(h,this.globalData,this),
            this.camera
        }
        ,
        HybridRendererBase.prototype.createImage = function(h) {
            return this.supports3d ? new HImageElement(h,this.globalData,this) : new IImageElement(h,this.globalData,this)
        }
        ,
        HybridRendererBase.prototype.createSolid = function(h) {
            return this.supports3d ? new HSolidElement(h,this.globalData,this) : new ISolidElement(h,this.globalData,this)
        }
        ,
        HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull,
        HybridRendererBase.prototype.getThreeDContainerByPos = function(h) {
            for (var a = 0, u = this.threeDElements.length; a < u; ) {
                if (this.threeDElements[a].startPos <= h && this.threeDElements[a].endPos >= h)
                    return this.threeDElements[a].perspectiveElem;
                a += 1
            }
            return null
        }
        ,
        HybridRendererBase.prototype.createThreeDContainer = function(h, a) {
            var u = createTag("div"), f, c;
            styleDiv(u);
            var p = createTag("div");
            if (styleDiv(p),
            a === "3d") {
                f = u.style,
                f.width = this.globalData.compSize.w + "px",
                f.height = this.globalData.compSize.h + "px";
                var d = "50% 50%";
                f.webkitTransformOrigin = d,
                f.mozTransformOrigin = d,
                f.transformOrigin = d,
                c = p.style;
                var m = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                c.transform = m,
                c.webkitTransform = m
            }
            u.appendChild(p);
            var g = {
                container: p,
                perspectiveElem: u,
                startPos: h,
                endPos: h,
                type: a
            };
            return this.threeDElements.push(g),
            g
        }
        ,
        HybridRendererBase.prototype.build3dContainers = function() {
            var h, a = this.layers.length, u, f = "";
            for (h = 0; h < a; h += 1)
                this.layers[h].ddd && this.layers[h].ty !== 3 ? (f !== "3d" && (f = "3d",
                u = this.createThreeDContainer(h, "3d")),
                u.endPos = Math.max(u.endPos, h)) : (f !== "2d" && (f = "2d",
                u = this.createThreeDContainer(h, "2d")),
                u.endPos = Math.max(u.endPos, h));
            for (a = this.threeDElements.length,
            h = a - 1; h >= 0; h -= 1)
                this.resizerElem.appendChild(this.threeDElements[h].perspectiveElem)
        }
        ,
        HybridRendererBase.prototype.addTo3dContainer = function(h, a) {
            for (var u = 0, f = this.threeDElements.length; u < f; ) {
                if (a <= this.threeDElements[u].endPos) {
                    for (var c = this.threeDElements[u].startPos, p; c < a; )
                        this.elements[c] && this.elements[c].getBaseElement && (p = this.elements[c].getBaseElement()),
                        c += 1;
                    p ? this.threeDElements[u].container.insertBefore(h, p) : this.threeDElements[u].container.appendChild(h);
                    break
                }
                u += 1
            }
        }
        ,
        HybridRendererBase.prototype.configAnimation = function(h) {
            var a = createTag("div")
              , u = this.animationItem.wrapper
              , f = a.style;
            f.width = h.w + "px",
            f.height = h.h + "px",
            this.resizerElem = a,
            styleDiv(a),
            f.transformStyle = "flat",
            f.mozTransformStyle = "flat",
            f.webkitTransformStyle = "flat",
            this.renderConfig.className && a.setAttribute("class", this.renderConfig.className),
            u.appendChild(a),
            f.overflow = "hidden";
            var c = createNS("svg");
            c.setAttribute("width", "1"),
            c.setAttribute("height", "1"),
            styleDiv(c),
            this.resizerElem.appendChild(c);
            var p = createNS("defs");
            c.appendChild(p),
            this.data = h,
            this.setupGlobalData(h, c),
            this.globalData.defs = p,
            this.layers = h.layers,
            this.layerElement = this.resizerElem,
            this.build3dContainers(),
            this.updateContainerSize()
        }
        ,
        HybridRendererBase.prototype.destroy = function() {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
            this.animationItem.container = null,
            this.globalData.defs = null;
            var h, a = this.layers ? this.layers.length : 0;
            for (h = 0; h < a; h += 1)
                this.elements[h] && this.elements[h].destroy && this.elements[h].destroy();
            this.elements.length = 0,
            this.destroyed = !0,
            this.animationItem = null
        }
        ,
        HybridRendererBase.prototype.updateContainerSize = function() {
            var h = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight, u = h / a, f = this.globalData.compSize.w / this.globalData.compSize.h, c, p, d, m;
            f > u ? (c = h / this.globalData.compSize.w,
            p = h / this.globalData.compSize.w,
            d = 0,
            m = (a - this.globalData.compSize.h * (h / this.globalData.compSize.w)) / 2) : (c = a / this.globalData.compSize.h,
            p = a / this.globalData.compSize.h,
            d = (h - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2,
            m = 0);
            var g = this.resizerElem.style;
            g.webkitTransform = "matrix3d(" + c + ",0,0,0,0," + p + ",0,0,0,0,1,0," + d + "," + m + ",0,1)",
            g.transform = g.webkitTransform
        }
        ,
        HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
        HybridRendererBase.prototype.hide = function() {
            this.resizerElem.style.display = "none"
        }
        ,
        HybridRendererBase.prototype.show = function() {
            this.resizerElem.style.display = "block"
        }
        ,
        HybridRendererBase.prototype.initItems = function() {
            if (this.buildAllItems(),
            this.camera)
                this.camera.setup();
            else {
                var h = this.globalData.compSize.w, a = this.globalData.compSize.h, u, f = this.threeDElements.length;
                for (u = 0; u < f; u += 1) {
                    var c = this.threeDElements[u].perspectiveElem.style;
                    c.webkitPerspective = Math.sqrt(Math.pow(h, 2) + Math.pow(a, 2)) + "px",
                    c.perspective = c.webkitPerspective
                }
            }
        }
        ,
        HybridRendererBase.prototype.searchExtraCompositions = function(h) {
            var a, u = h.length, f = createTag("div");
            for (a = 0; a < u; a += 1)
                if (h[a].xt) {
                    var c = this.createComp(h[a], f, this.globalData.comp, null);
                    c.initExpressions(),
                    this.globalData.projectInterface.registerComposition(c)
                }
        }
        ;
        function HCompElement(h, a, u) {
            this.layers = h.layers,
            this.supports3d = !h.hasMask,
            this.completeLayers = !1,
            this.pendingElements = [],
            this.elements = this.layers ? createSizedArray(this.layers.length) : [],
            this.initElement(h, a, u),
            this.tm = h.tm ? PropertyFactory.getProp(this, h.tm, 0, a.frameRate, this) : {
                _placeholder: !0
            }
        }
        extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
        HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,
        HCompElement.prototype.createContainerElements = function() {
            this._createBaseContainerElements(),
            this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w),
            this.svgElement.setAttribute("height", this.data.h),
            this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }
        ,
        HCompElement.prototype.addTo3dContainer = function(h, a) {
            for (var u = 0, f; u < a; )
                this.elements[u] && this.elements[u].getBaseElement && (f = this.elements[u].getBaseElement()),
                u += 1;
            f ? this.layerElement.insertBefore(h, f) : this.layerElement.appendChild(h)
        }
        ,
        HCompElement.prototype.createComp = function(h) {
            return this.supports3d ? new HCompElement(h,this.globalData,this) : new SVGCompElement(h,this.globalData,this)
        }
        ;
        function HybridRenderer(h, a) {
            this.animationItem = h,
            this.layers = null,
            this.renderedFrame = -1,
            this.renderConfig = {
                className: a && a.className || "",
                imagePreserveAspectRatio: a && a.imagePreserveAspectRatio || "xMidYMid slice",
                hideOnTransparent: !(a && a.hideOnTransparent === !1),
                filterSize: {
                    width: a && a.filterSize && a.filterSize.width || "400%",
                    height: a && a.filterSize && a.filterSize.height || "400%",
                    x: a && a.filterSize && a.filterSize.x || "-100%",
                    y: a && a.filterSize && a.filterSize.y || "-100%"
                },
                runExpressions: !a || a.runExpressions === void 0 || a.runExpressions
            },
            this.globalData = {
                _mdf: !1,
                frameNum: -1,
                renderConfig: this.renderConfig
            },
            this.pendingElements = [],
            this.elements = [],
            this.threeDElements = [],
            this.destroyed = !1,
            this.camera = null,
            this.supports3d = !0,
            this.rendererType = "html"
        }
        extendPrototype([HybridRendererBase], HybridRenderer),
        HybridRenderer.prototype.createComp = function(h) {
            return this.supports3d ? new HCompElement(h,this.globalData,this) : new SVGCompElement(h,this.globalData,this)
        }
        ;
        var CompExpressionInterface = function() {
            return function(h) {
                function a(u) {
                    for (var f = 0, c = h.layers.length; f < c; ) {
                        if (h.layers[f].nm === u || h.layers[f].ind === u)
                            return h.elements[f].layerInterface;
                        f += 1
                    }
                    return null
                }
                return Object.defineProperty(a, "_name", {
                    value: h.data.nm
                }),
                a.layer = a,
                a.pixelAspect = 1,
                a.height = h.data.h || h.globalData.compSize.h,
                a.width = h.data.w || h.globalData.compSize.w,
                a.pixelAspect = 1,
                a.frameDuration = 1 / h.globalData.frameRate,
                a.displayStartTime = 0,
                a.numLayers = h.layers.length,
                a
            }
        }()
          , Expressions = function() {
            var h = {};
            h.initExpressions = a;
            function a(u) {
                var f = 0
                  , c = [];
                function p() {
                    f += 1
                }
                function d() {
                    f -= 1,
                    f === 0 && g()
                }
                function m(v) {
                    c.indexOf(v) === -1 && c.push(v)
                }
                function g() {
                    var v, _ = c.length;
                    for (v = 0; v < _; v += 1)
                        c[v].release();
                    c.length = 0
                }
                u.renderer.compInterface = CompExpressionInterface(u.renderer),
                u.renderer.globalData.projectInterface.registerComposition(u.renderer),
                u.renderer.globalData.pushExpression = p,
                u.renderer.globalData.popExpression = d,
                u.renderer.globalData.registerExpressionProperty = m
            }
            return h
        }()
          , MaskManagerInterface = function() {
            function h(u, f) {
                this._mask = u,
                this._data = f
            }
            Object.defineProperty(h.prototype, "maskPath", {
                get: function() {
                    return this._mask.prop.k && this._mask.prop.getValue(),
                    this._mask.prop
                }
            }),
            Object.defineProperty(h.prototype, "maskOpacity", {
                get: function() {
                    return this._mask.op.k && this._mask.op.getValue(),
                    this._mask.op.v * 100
                }
            });
            var a = function(f) {
                var c = createSizedArray(f.viewData.length), p, d = f.viewData.length;
                for (p = 0; p < d; p += 1)
                    c[p] = new h(f.viewData[p],f.masksProperties[p]);
                var m = function(v) {
                    for (p = 0; p < d; ) {
                        if (f.masksProperties[p].nm === v)
                            return c[p];
                        p += 1
                    }
                    return null
                };
                return m
            };
            return a
        }()
          , ExpressionPropertyInterface = function() {
            var h = {
                pv: 0,
                v: 0,
                mult: 1
            }
              , a = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
            };
            function u(d, m, g) {
                Object.defineProperty(d, "velocity", {
                    get: function() {
                        return m.getVelocityAtTime(m.comp.currentFrame)
                    }
                }),
                d.numKeys = m.keyframes ? m.keyframes.length : 0,
                d.key = function(v) {
                    if (!d.numKeys)
                        return 0;
                    var _ = "";
                    "s"in m.keyframes[v - 1] ? _ = m.keyframes[v - 1].s : "e"in m.keyframes[v - 2] ? _ = m.keyframes[v - 2].e : _ = m.keyframes[v - 2].s;
                    var b = g === "unidimensional" ? new Number(_) : Object.assign({}, _);
                    return b.time = m.keyframes[v - 1].t / m.elem.comp.globalData.frameRate,
                    b.value = g === "unidimensional" ? _[0] : _,
                    b
                }
                ,
                d.valueAtTime = m.getValueAtTime,
                d.speedAtTime = m.getSpeedAtTime,
                d.velocityAtTime = m.getVelocityAtTime,
                d.propertyGroup = m.propertyGroup
            }
            function f(d) {
                (!d || !("pv"in d)) && (d = h);
                var m = 1 / d.mult
                  , g = d.pv * m
                  , v = new Number(g);
                return v.value = g,
                u(v, d, "unidimensional"),
                function() {
                    return d.k && d.getValue(),
                    g = d.v * m,
                    v.value !== g && (v = new Number(g),
                    v.value = g,
                    u(v, d, "unidimensional")),
                    v
                }
            }
            function c(d) {
                (!d || !("pv"in d)) && (d = a);
                var m = 1 / d.mult
                  , g = d.data && d.data.l || d.pv.length
                  , v = createTypedArray("float32", g)
                  , _ = createTypedArray("float32", g);
                return v.value = _,
                u(v, d, "multidimensional"),
                function() {
                    d.k && d.getValue();
                    for (var b = 0; b < g; b += 1)
                        _[b] = d.v[b] * m,
                        v[b] = _[b];
                    return v
                }
            }
            function p() {
                return h
            }
            return function(d) {
                return d ? d.propType === "unidimensional" ? f(d) : c(d) : p
            }
        }()
          , TransformExpressionInterface = function() {
            return function(h) {
                function a(d) {
                    switch (d) {
                    case "scale":
                    case "Scale":
                    case "ADBE Scale":
                    case 6:
                        return a.scale;
                    case "rotation":
                    case "Rotation":
                    case "ADBE Rotation":
                    case "ADBE Rotate Z":
                    case 10:
                        return a.rotation;
                    case "ADBE Rotate X":
                        return a.xRotation;
                    case "ADBE Rotate Y":
                        return a.yRotation;
                    case "position":
                    case "Position":
                    case "ADBE Position":
                    case 2:
                        return a.position;
                    case "ADBE Position_0":
                        return a.xPosition;
                    case "ADBE Position_1":
                        return a.yPosition;
                    case "ADBE Position_2":
                        return a.zPosition;
                    case "anchorPoint":
                    case "AnchorPoint":
                    case "Anchor Point":
                    case "ADBE AnchorPoint":
                    case 1:
                        return a.anchorPoint;
                    case "opacity":
                    case "Opacity":
                    case 11:
                        return a.opacity;
                    default:
                        return null
                    }
                }
                Object.defineProperty(a, "rotation", {
                    get: ExpressionPropertyInterface(h.r || h.rz)
                }),
                Object.defineProperty(a, "zRotation", {
                    get: ExpressionPropertyInterface(h.rz || h.r)
                }),
                Object.defineProperty(a, "xRotation", {
                    get: ExpressionPropertyInterface(h.rx)
                }),
                Object.defineProperty(a, "yRotation", {
                    get: ExpressionPropertyInterface(h.ry)
                }),
                Object.defineProperty(a, "scale", {
                    get: ExpressionPropertyInterface(h.s)
                });
                var u, f, c, p;
                return h.p ? p = ExpressionPropertyInterface(h.p) : (u = ExpressionPropertyInterface(h.px),
                f = ExpressionPropertyInterface(h.py),
                h.pz && (c = ExpressionPropertyInterface(h.pz))),
                Object.defineProperty(a, "position", {
                    get: function() {
                        return h.p ? p() : [u(), f(), c ? c() : 0]
                    }
                }),
                Object.defineProperty(a, "xPosition", {
                    get: ExpressionPropertyInterface(h.px)
                }),
                Object.defineProperty(a, "yPosition", {
                    get: ExpressionPropertyInterface(h.py)
                }),
                Object.defineProperty(a, "zPosition", {
                    get: ExpressionPropertyInterface(h.pz)
                }),
                Object.defineProperty(a, "anchorPoint", {
                    get: ExpressionPropertyInterface(h.a)
                }),
                Object.defineProperty(a, "opacity", {
                    get: ExpressionPropertyInterface(h.o)
                }),
                Object.defineProperty(a, "skew", {
                    get: ExpressionPropertyInterface(h.sk)
                }),
                Object.defineProperty(a, "skewAxis", {
                    get: ExpressionPropertyInterface(h.sa)
                }),
                Object.defineProperty(a, "orientation", {
                    get: ExpressionPropertyInterface(h.or)
                }),
                a
            }
        }()
          , LayerExpressionInterface = function() {
            function h(v) {
                var _ = new Matrix;
                if (v !== void 0) {
                    var b = this._elem.finalTransform.mProp.getValueAtTime(v);
                    b.clone(_)
                } else {
                    var P = this._elem.finalTransform.mProp;
                    P.applyToMatrix(_)
                }
                return _
            }
            function a(v, _) {
                var b = this.getMatrix(_);
                return b.props[12] = 0,
                b.props[13] = 0,
                b.props[14] = 0,
                this.applyPoint(b, v)
            }
            function u(v, _) {
                var b = this.getMatrix(_);
                return this.applyPoint(b, v)
            }
            function f(v, _) {
                var b = this.getMatrix(_);
                return b.props[12] = 0,
                b.props[13] = 0,
                b.props[14] = 0,
                this.invertPoint(b, v)
            }
            function c(v, _) {
                var b = this.getMatrix(_);
                return this.invertPoint(b, v)
            }
            function p(v, _) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var b, P = this._elem.hierarchy.length;
                    for (b = 0; b < P; b += 1)
                        this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(v)
                }
                return v.applyToPointArray(_[0], _[1], _[2] || 0)
            }
            function d(v, _) {
                if (this._elem.hierarchy && this._elem.hierarchy.length) {
                    var b, P = this._elem.hierarchy.length;
                    for (b = 0; b < P; b += 1)
                        this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(v)
                }
                return v.inversePoint(_)
            }
            function m(v) {
                var _ = new Matrix;
                if (_.reset(),
                this._elem.finalTransform.mProp.applyToMatrix(_),
                this._elem.hierarchy && this._elem.hierarchy.length) {
                    var b, P = this._elem.hierarchy.length;
                    for (b = 0; b < P; b += 1)
                        this._elem.hierarchy[b].finalTransform.mProp.applyToMatrix(_);
                    return _.inversePoint(v)
                }
                return _.inversePoint(v)
            }
            function g() {
                return [1, 1, 1, 1]
            }
            return function(v) {
                var _;
                function b(w) {
                    J.mask = new MaskManagerInterface(w,v)
                }
                function P(w) {
                    J.effect = w
                }
                function J(w) {
                    switch (w) {
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                        return J.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                        return _;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                        return J.effect;
                    case "ADBE Text Properties":
                        return J.textInterface;
                    default:
                        return null
                    }
                }
                J.getMatrix = h,
                J.invertPoint = d,
                J.applyPoint = p,
                J.toWorld = u,
                J.toWorldVec = a,
                J.fromWorld = c,
                J.fromWorldVec = f,
                J.toComp = u,
                J.fromComp = m,
                J.sampleImage = g,
                J.sourceRectAtTime = v.sourceRectAtTime.bind(v),
                J._elem = v,
                _ = TransformExpressionInterface(v.finalTransform.mProp);
                var x = getDescriptor(_, "anchorPoint");
                return Object.defineProperties(J, {
                    hasParent: {
                        get: function() {
                            return v.hierarchy.length
                        }
                    },
                    parent: {
                        get: function() {
                            return v.hierarchy[0].layerInterface
                        }
                    },
                    rotation: getDescriptor(_, "rotation"),
                    scale: getDescriptor(_, "scale"),
                    position: getDescriptor(_, "position"),
                    opacity: getDescriptor(_, "opacity"),
                    anchorPoint: x,
                    anchor_point: x,
                    transform: {
                        get: function() {
                            return _
                        }
                    },
                    active: {
                        get: function() {
                            return v.isInRange
                        }
                    }
                }),
                J.startTime = v.data.st,
                J.index = v.data.ind,
                J.source = v.data.refId,
                J.height = v.data.ty === 0 ? v.data.h : 100,
                J.width = v.data.ty === 0 ? v.data.w : 100,
                J.inPoint = v.data.ip / v.comp.globalData.frameRate,
                J.outPoint = v.data.op / v.comp.globalData.frameRate,
                J._name = v.data.nm,
                J.registerMaskInterface = b,
                J.registerEffectsInterface = P,
                J
            }
        }()
          , propertyGroupFactory = function() {
            return function(h, a) {
                return function(u) {
                    return u = u === void 0 ? 1 : u,
                    u <= 0 ? h : a(u - 1)
                }
            }
        }()
          , PropertyInterface = function() {
            return function(h, a) {
                var u = {
                    _name: h
                };
                function f(c) {
                    return c = c === void 0 ? 1 : c,
                    c <= 0 ? u : a(c - 1)
                }
                return f
            }
        }()
          , EffectsExpressionInterface = function() {
            var h = {
                createEffectsInterface: a
            };
            function a(c, p) {
                if (c.effectsManager) {
                    var d = [], m = c.data.ef, g, v = c.effectsManager.effectElements.length;
                    for (g = 0; g < v; g += 1)
                        d.push(u(m[g], c.effectsManager.effectElements[g], p, c));
                    var _ = c.data.ef || []
                      , b = function(J) {
                        for (g = 0,
                        v = _.length; g < v; ) {
                            if (J === _[g].nm || J === _[g].mn || J === _[g].ix)
                                return d[g];
                            g += 1
                        }
                        return null
                    };
                    return Object.defineProperty(b, "numProperties", {
                        get: function() {
                            return _.length
                        }
                    }),
                    b
                }
                return null
            }
            function u(c, p, d, m) {
                function g(J) {
                    for (var x = c.ef, w = 0, pe = x.length; w < pe; ) {
                        if (J === x[w].nm || J === x[w].mn || J === x[w].ix)
                            return x[w].ty === 5 ? _[w] : _[w]();
                        w += 1
                    }
                    throw new Error
                }
                var v = propertyGroupFactory(g, d), _ = [], b, P = c.ef.length;
                for (b = 0; b < P; b += 1)
                    c.ef[b].ty === 5 ? _.push(u(c.ef[b], p.effectElements[b], p.effectElements[b].propertyGroup, m)) : _.push(f(p.effectElements[b], c.ef[b].ty, m, v));
                return c.mn === "ADBE Color Control" && Object.defineProperty(g, "color", {
                    get: function() {
                        return _[0]()
                    }
                }),
                Object.defineProperties(g, {
                    numProperties: {
                        get: function() {
                            return c.np
                        }
                    },
                    _name: {
                        value: c.nm
                    },
                    propertyGroup: {
                        value: v
                    }
                }),
                g.enabled = c.en !== 0,
                g.active = g.enabled,
                g
            }
            function f(c, p, d, m) {
                var g = ExpressionPropertyInterface(c.p);
                function v() {
                    return p === 10 ? d.comp.compInterface(c.p.v) : g()
                }
                return c.p.setGroupProperty && c.p.setGroupProperty(PropertyInterface("", m)),
                v
            }
            return h
        }()
          , ShapePathInterface = function() {
            return function(a, u, f) {
                var c = u.sh;
                function p(m) {
                    return m === "Shape" || m === "shape" || m === "Path" || m === "path" || m === "ADBE Vector Shape" || m === 2 ? p.path : null
                }
                var d = propertyGroupFactory(p, f);
                return c.setGroupProperty(PropertyInterface("Path", d)),
                Object.defineProperties(p, {
                    path: {
                        get: function() {
                            return c.k && c.getValue(),
                            c
                        }
                    },
                    shape: {
                        get: function() {
                            return c.k && c.getValue(),
                            c
                        }
                    },
                    _name: {
                        value: a.nm
                    },
                    ix: {
                        value: a.ix
                    },
                    propertyIndex: {
                        value: a.ix
                    },
                    mn: {
                        value: a.mn
                    },
                    propertyGroup: {
                        value: f
                    }
                }),
                p
            }
        }()
          , ShapeExpressionInterface = function() {
            function h(x, w, pe) {
                var L = [], R, M = x ? x.length : 0;
                for (R = 0; R < M; R += 1)
                    x[R].ty === "gr" ? L.push(u(x[R], w[R], pe)) : x[R].ty === "fl" ? L.push(f(x[R], w[R], pe)) : x[R].ty === "st" ? L.push(d(x[R], w[R], pe)) : x[R].ty === "tm" ? L.push(m(x[R], w[R], pe)) : x[R].ty === "tr" || (x[R].ty === "el" ? L.push(v(x[R], w[R], pe)) : x[R].ty === "sr" ? L.push(_(x[R], w[R], pe)) : x[R].ty === "sh" ? L.push(ShapePathInterface(x[R], w[R], pe)) : x[R].ty === "rc" ? L.push(b(x[R], w[R], pe)) : x[R].ty === "rd" ? L.push(P(x[R], w[R], pe)) : x[R].ty === "rp" ? L.push(J(x[R], w[R], pe)) : x[R].ty === "gf" ? L.push(c(x[R], w[R], pe)) : L.push(p(x[R], w[R])));
                return L
            }
            function a(x, w, pe) {
                var L, R = function(he) {
                    for (var et = 0, ei = L.length; et < ei; ) {
                        if (L[et]._name === he || L[et].mn === he || L[et].propertyIndex === he || L[et].ix === he || L[et].ind === he)
                            return L[et];
                        et += 1
                    }
                    return typeof he == "number" ? L[he - 1] : null
                };
                R.propertyGroup = propertyGroupFactory(R, pe),
                L = h(x.it, w.it, R.propertyGroup),
                R.numProperties = L.length;
                var M = g(x.it[x.it.length - 1], w.it[w.it.length - 1], R.propertyGroup);
                return R.transform = M,
                R.propertyIndex = x.cix,
                R._name = x.nm,
                R
            }
            function u(x, w, pe) {
                var L = function(he) {
                    switch (he) {
                    case "ADBE Vectors Group":
                    case "Contents":
                    case 2:
                        return L.content;
                    default:
                        return L.transform
                    }
                };
                L.propertyGroup = propertyGroupFactory(L, pe);
                var R = a(x, w, L.propertyGroup)
                  , M = g(x.it[x.it.length - 1], w.it[w.it.length - 1], L.propertyGroup);
                return L.content = R,
                L.transform = M,
                Object.defineProperty(L, "_name", {
                    get: function() {
                        return x.nm
                    }
                }),
                L.numProperties = x.np,
                L.propertyIndex = x.ix,
                L.nm = x.nm,
                L.mn = x.mn,
                L
            }
            function f(x, w, pe) {
                function L(R) {
                    return R === "Color" || R === "color" ? L.color : R === "Opacity" || R === "opacity" ? L.opacity : null
                }
                return Object.defineProperties(L, {
                    color: {
                        get: ExpressionPropertyInterface(w.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(w.o)
                    },
                    _name: {
                        value: x.nm
                    },
                    mn: {
                        value: x.mn
                    }
                }),
                w.c.setGroupProperty(PropertyInterface("Color", pe)),
                w.o.setGroupProperty(PropertyInterface("Opacity", pe)),
                L
            }
            function c(x, w, pe) {
                function L(R) {
                    return R === "Start Point" || R === "start point" ? L.startPoint : R === "End Point" || R === "end point" ? L.endPoint : R === "Opacity" || R === "opacity" ? L.opacity : null
                }
                return Object.defineProperties(L, {
                    startPoint: {
                        get: ExpressionPropertyInterface(w.s)
                    },
                    endPoint: {
                        get: ExpressionPropertyInterface(w.e)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(w.o)
                    },
                    type: {
                        get: function() {
                            return "a"
                        }
                    },
                    _name: {
                        value: x.nm
                    },
                    mn: {
                        value: x.mn
                    }
                }),
                w.s.setGroupProperty(PropertyInterface("Start Point", pe)),
                w.e.setGroupProperty(PropertyInterface("End Point", pe)),
                w.o.setGroupProperty(PropertyInterface("Opacity", pe)),
                L
            }
            function p() {
                function x() {
                    return null
                }
                return x
            }
            function d(x, w, pe) {
                var L = propertyGroupFactory(ei, pe)
                  , R = propertyGroupFactory(et, L);
                function M(ii) {
                    Object.defineProperty(et, x.d[ii].nm, {
                        get: ExpressionPropertyInterface(w.d.dataProps[ii].p)
                    })
                }
                var Z, he = x.d ? x.d.length : 0, et = {};
                for (Z = 0; Z < he; Z += 1)
                    M(Z),
                    w.d.dataProps[Z].p.setGroupProperty(R);
                function ei(ii) {
                    return ii === "Color" || ii === "color" ? ei.color : ii === "Opacity" || ii === "opacity" ? ei.opacity : ii === "Stroke Width" || ii === "stroke width" ? ei.strokeWidth : null
                }
                return Object.defineProperties(ei, {
                    color: {
                        get: ExpressionPropertyInterface(w.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(w.o)
                    },
                    strokeWidth: {
                        get: ExpressionPropertyInterface(w.w)
                    },
                    dash: {
                        get: function() {
                            return et
                        }
                    },
                    _name: {
                        value: x.nm
                    },
                    mn: {
                        value: x.mn
                    }
                }),
                w.c.setGroupProperty(PropertyInterface("Color", L)),
                w.o.setGroupProperty(PropertyInterface("Opacity", L)),
                w.w.setGroupProperty(PropertyInterface("Stroke Width", L)),
                ei
            }
            function m(x, w, pe) {
                function L(M) {
                    return M === x.e.ix || M === "End" || M === "end" ? L.end : M === x.s.ix ? L.start : M === x.o.ix ? L.offset : null
                }
                var R = propertyGroupFactory(L, pe);
                return L.propertyIndex = x.ix,
                w.s.setGroupProperty(PropertyInterface("Start", R)),
                w.e.setGroupProperty(PropertyInterface("End", R)),
                w.o.setGroupProperty(PropertyInterface("Offset", R)),
                L.propertyIndex = x.ix,
                L.propertyGroup = pe,
                Object.defineProperties(L, {
                    start: {
                        get: ExpressionPropertyInterface(w.s)
                    },
                    end: {
                        get: ExpressionPropertyInterface(w.e)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(w.o)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                L.mn = x.mn,
                L
            }
            function g(x, w, pe) {
                function L(M) {
                    return x.a.ix === M || M === "Anchor Point" ? L.anchorPoint : x.o.ix === M || M === "Opacity" ? L.opacity : x.p.ix === M || M === "Position" ? L.position : x.r.ix === M || M === "Rotation" || M === "ADBE Vector Rotation" ? L.rotation : x.s.ix === M || M === "Scale" ? L.scale : x.sk && x.sk.ix === M || M === "Skew" ? L.skew : x.sa && x.sa.ix === M || M === "Skew Axis" ? L.skewAxis : null
                }
                var R = propertyGroupFactory(L, pe);
                return w.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", R)),
                w.transform.mProps.p.setGroupProperty(PropertyInterface("Position", R)),
                w.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", R)),
                w.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", R)),
                w.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", R)),
                w.transform.mProps.sk && (w.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", R)),
                w.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", R))),
                w.transform.op.setGroupProperty(PropertyInterface("Opacity", R)),
                Object.defineProperties(L, {
                    opacity: {
                        get: ExpressionPropertyInterface(w.transform.mProps.o)
                    },
                    position: {
                        get: ExpressionPropertyInterface(w.transform.mProps.p)
                    },
                    anchorPoint: {
                        get: ExpressionPropertyInterface(w.transform.mProps.a)
                    },
                    scale: {
                        get: ExpressionPropertyInterface(w.transform.mProps.s)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(w.transform.mProps.r)
                    },
                    skew: {
                        get: ExpressionPropertyInterface(w.transform.mProps.sk)
                    },
                    skewAxis: {
                        get: ExpressionPropertyInterface(w.transform.mProps.sa)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                L.ty = "tr",
                L.mn = x.mn,
                L.propertyGroup = pe,
                L
            }
            function v(x, w, pe) {
                function L(Z) {
                    return x.p.ix === Z ? L.position : x.s.ix === Z ? L.size : null
                }
                var R = propertyGroupFactory(L, pe);
                L.propertyIndex = x.ix;
                var M = w.sh.ty === "tm" ? w.sh.prop : w.sh;
                return M.s.setGroupProperty(PropertyInterface("Size", R)),
                M.p.setGroupProperty(PropertyInterface("Position", R)),
                Object.defineProperties(L, {
                    size: {
                        get: ExpressionPropertyInterface(M.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(M.p)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                L.mn = x.mn,
                L
            }
            function _(x, w, pe) {
                function L(Z) {
                    return x.p.ix === Z ? L.position : x.r.ix === Z ? L.rotation : x.pt.ix === Z ? L.points : x.or.ix === Z || Z === "ADBE Vector Star Outer Radius" ? L.outerRadius : x.os.ix === Z ? L.outerRoundness : x.ir && (x.ir.ix === Z || Z === "ADBE Vector Star Inner Radius") ? L.innerRadius : x.is && x.is.ix === Z ? L.innerRoundness : null
                }
                var R = propertyGroupFactory(L, pe)
                  , M = w.sh.ty === "tm" ? w.sh.prop : w.sh;
                return L.propertyIndex = x.ix,
                M.or.setGroupProperty(PropertyInterface("Outer Radius", R)),
                M.os.setGroupProperty(PropertyInterface("Outer Roundness", R)),
                M.pt.setGroupProperty(PropertyInterface("Points", R)),
                M.p.setGroupProperty(PropertyInterface("Position", R)),
                M.r.setGroupProperty(PropertyInterface("Rotation", R)),
                x.ir && (M.ir.setGroupProperty(PropertyInterface("Inner Radius", R)),
                M.is.setGroupProperty(PropertyInterface("Inner Roundness", R))),
                Object.defineProperties(L, {
                    position: {
                        get: ExpressionPropertyInterface(M.p)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(M.r)
                    },
                    points: {
                        get: ExpressionPropertyInterface(M.pt)
                    },
                    outerRadius: {
                        get: ExpressionPropertyInterface(M.or)
                    },
                    outerRoundness: {
                        get: ExpressionPropertyInterface(M.os)
                    },
                    innerRadius: {
                        get: ExpressionPropertyInterface(M.ir)
                    },
                    innerRoundness: {
                        get: ExpressionPropertyInterface(M.is)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                L.mn = x.mn,
                L
            }
            function b(x, w, pe) {
                function L(Z) {
                    return x.p.ix === Z ? L.position : x.r.ix === Z ? L.roundness : x.s.ix === Z || Z === "Size" || Z === "ADBE Vector Rect Size" ? L.size : null
                }
                var R = propertyGroupFactory(L, pe)
                  , M = w.sh.ty === "tm" ? w.sh.prop : w.sh;
                return L.propertyIndex = x.ix,
                M.p.setGroupProperty(PropertyInterface("Position", R)),
                M.s.setGroupProperty(PropertyInterface("Size", R)),
                M.r.setGroupProperty(PropertyInterface("Rotation", R)),
                Object.defineProperties(L, {
                    position: {
                        get: ExpressionPropertyInterface(M.p)
                    },
                    roundness: {
                        get: ExpressionPropertyInterface(M.r)
                    },
                    size: {
                        get: ExpressionPropertyInterface(M.s)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                L.mn = x.mn,
                L
            }
            function P(x, w, pe) {
                function L(Z) {
                    return x.r.ix === Z || Z === "Round Corners 1" ? L.radius : null
                }
                var R = propertyGroupFactory(L, pe)
                  , M = w;
                return L.propertyIndex = x.ix,
                M.rd.setGroupProperty(PropertyInterface("Radius", R)),
                Object.defineProperties(L, {
                    radius: {
                        get: ExpressionPropertyInterface(M.rd)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                L.mn = x.mn,
                L
            }
            function J(x, w, pe) {
                function L(Z) {
                    return x.c.ix === Z || Z === "Copies" ? L.copies : x.o.ix === Z || Z === "Offset" ? L.offset : null
                }
                var R = propertyGroupFactory(L, pe)
                  , M = w;
                return L.propertyIndex = x.ix,
                M.c.setGroupProperty(PropertyInterface("Copies", R)),
                M.o.setGroupProperty(PropertyInterface("Offset", R)),
                Object.defineProperties(L, {
                    copies: {
                        get: ExpressionPropertyInterface(M.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(M.o)
                    },
                    _name: {
                        value: x.nm
                    }
                }),
                L.mn = x.mn,
                L
            }
            return function(x, w, pe) {
                var L;
                function R(Z) {
                    if (typeof Z == "number")
                        return Z = Z === void 0 ? 1 : Z,
                        Z === 0 ? pe : L[Z - 1];
                    for (var he = 0, et = L.length; he < et; ) {
                        if (L[he]._name === Z)
                            return L[he];
                        he += 1
                    }
                    return null
                }
                function M() {
                    return pe
                }
                return R.propertyGroup = propertyGroupFactory(R, M),
                L = h(x, w, R.propertyGroup),
                R.numProperties = L.length,
                R._name = "Contents",
                R
            }
        }()
          , TextExpressionInterface = function() {
            return function(h) {
                var a;
                function u(f) {
                    switch (f) {
                    case "ADBE Text Document":
                        return u.sourceText;
                    default:
                        return null
                    }
                }
                return Object.defineProperty(u, "sourceText", {
                    get: function() {
                        h.textProperty.getValue();
                        var c = h.textProperty.currentData.t;
                        return (!a || c !== a.value) && (a = new String(c),
                        a.value = c || new String(c),
                        Object.defineProperty(a, "style", {
                            get: function() {
                                return {
                                    fillColor: h.textProperty.currentData.fc
                                }
                            }
                        })),
                        a
                    }
                }),
                u
            }
        }();
        function _typeof$2(h) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(u) {
                return typeof u
            }
            : _typeof$2 = function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            _typeof$2(h)
        }
        var FootageInterface = function() {
            var h = function(f) {
                var c = ""
                  , p = f.getFootageData();
                function d() {
                    return c = "",
                    p = f.getFootageData(),
                    m
                }
                function m(g) {
                    if (p[g])
                        return c = g,
                        p = p[g],
                        _typeof$2(p) === "object" ? m : p;
                    var v = g.indexOf(c);
                    if (v !== -1) {
                        var _ = parseInt(g.substr(v + c.length), 10);
                        return p = p[_],
                        _typeof$2(p) === "object" ? m : p
                    }
                    return ""
                }
                return d
            }
              , a = function(f) {
                function c(p) {
                    return p === "Outline" ? c.outlineInterface() : null
                }
                return c._name = "Outline",
                c.outlineInterface = h(f),
                c
            };
            return function(u) {
                function f(c) {
                    return c === "Data" ? f.dataInterface : null
                }
                return f._name = "Data",
                f.dataInterface = a(u),
                f
            }
        }()
          , interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
        };
        function getInterface(h) {
            return interfaces[h] || null
        }
        function _typeof$1(h) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(u) {
                return typeof u
            }
            : _typeof$1 = function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            _typeof$1(h)
        }
        function seedRandom(h, a) {
            var u = this, f = 256, c = 6, p = 52, d = "random", m = a.pow(f, c), g = a.pow(2, p), v = g * 2, _ = f - 1, b;
            function P(M, Z, he) {
                var et = [];
                Z = Z === !0 ? {
                    entropy: !0
                } : Z || {};
                var ei = pe(w(Z.entropy ? [M, R(h)] : M === null ? L() : M, 3), et)
                  , ii = new J(et)
                  , oi = function() {
                    for (var fi = ii.g(c), ui = m, pi = 0; fi < g; )
                        fi = (fi + pi) * f,
                        ui *= f,
                        pi = ii.g(1);
                    for (; fi >= v; )
                        fi /= 2,
                        ui /= 2,
                        pi >>>= 1;
                    return (fi + pi) / ui
                };
                return oi.int32 = function() {
                    return ii.g(4) | 0
                }
                ,
                oi.quick = function() {
                    return ii.g(4) / 4294967296
                }
                ,
                oi.double = oi,
                pe(R(ii.S), h),
                (Z.pass || he || function(hi, fi, ui, pi) {
                    return pi && (pi.S && x(pi, ii),
                    hi.state = function() {
                        return x(ii, {})
                    }
                    ),
                    ui ? (a[d] = hi,
                    fi) : hi
                }
                )(oi, ei, "global"in Z ? Z.global : this == a, Z.state)
            }
            a["seed" + d] = P;
            function J(M) {
                var Z, he = M.length, et = this, ei = 0, ii = et.i = et.j = 0, oi = et.S = [];
                for (he || (M = [he++]); ei < f; )
                    oi[ei] = ei++;
                for (ei = 0; ei < f; ei++)
                    oi[ei] = oi[ii = _ & ii + M[ei % he] + (Z = oi[ei])],
                    oi[ii] = Z;
                et.g = function(hi) {
                    for (var fi, ui = 0, pi = et.i, mi = et.j, li = et.S; hi--; )
                        fi = li[pi = _ & pi + 1],
                        ui = ui * f + li[_ & (li[pi] = li[mi = _ & mi + fi]) + (li[mi] = fi)];
                    return et.i = pi,
                    et.j = mi,
                    ui
                }
            }
            function x(M, Z) {
                return Z.i = M.i,
                Z.j = M.j,
                Z.S = M.S.slice(),
                Z
            }
            function w(M, Z) {
                var he = [], et = _typeof$1(M), ei;
                if (Z && et == "object")
                    for (ei in M)
                        try {
                            he.push(w(M[ei], Z - 1))
                        } catch {}
                return he.length ? he : et == "string" ? M : M + "\0"
            }
            function pe(M, Z) {
                for (var he = M + "", et, ei = 0; ei < he.length; )
                    Z[_ & ei] = _ & (et ^= Z[_ & ei] * 19) + he.charCodeAt(ei++);
                return R(Z)
            }
            function L() {
                try {
                    var M = new Uint8Array(f);
                    return (u.crypto || u.msCrypto).getRandomValues(M),
                    R(M)
                } catch {
                    var Z = u.navigator
                      , he = Z && Z.plugins;
                    return [+new Date, u, he, u.screen, R(h)]
                }
            }
            function R(M) {
                return String.fromCharCode.apply(0, M)
            }
            pe(a.random(), h)
        }
        function initialize$2(h) {
            seedRandom([], h)
        }
        var propTypes = {
            SHAPE: "shape"
        };
        function _typeof(h) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(u) {
                return typeof u
            }
            : _typeof = function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            _typeof(h)
        }
        var ExpressionManager = function() {
            var ob = {}
              , Math = BMMath
              , window = null
              , document = null
              , XMLHttpRequest = null
              , fetch = null
              , frames = null;
            initialize$2(BMMath);
            function $bm_isInstanceOfArray(h) {
                return h.constructor === Array || h.constructor === Float32Array
            }
            function isNumerable(h, a) {
                return h === "number" || h === "boolean" || h === "string" || a instanceof Number
            }
            function $bm_neg(h) {
                var a = _typeof(h);
                if (a === "number" || a === "boolean" || h instanceof Number)
                    return -h;
                if ($bm_isInstanceOfArray(h)) {
                    var u, f = h.length, c = [];
                    for (u = 0; u < f; u += 1)
                        c[u] = -h[u];
                    return c
                }
                return h.propType ? h.v : -h
            }
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get
              , easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get
              , easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
            function sum(h, a) {
                var u = _typeof(h)
                  , f = _typeof(a);
                if (u === "string" || f === "string" || isNumerable(u, h) && isNumerable(f, a))
                    return h + a;
                if ($bm_isInstanceOfArray(h) && isNumerable(f, a))
                    return h = h.slice(0),
                    h[0] += a,
                    h;
                if (isNumerable(u, h) && $bm_isInstanceOfArray(a))
                    return a = a.slice(0),
                    a[0] = h + a[0],
                    a;
                if ($bm_isInstanceOfArray(h) && $bm_isInstanceOfArray(a)) {
                    for (var c = 0, p = h.length, d = a.length, m = []; c < p || c < d; )
                        (typeof h[c] == "number" || h[c]instanceof Number) && (typeof a[c] == "number" || a[c]instanceof Number) ? m[c] = h[c] + a[c] : m[c] = a[c] === void 0 ? h[c] : h[c] || a[c],
                        c += 1;
                    return m
                }
                return 0
            }
            var add = sum;
            function sub(h, a) {
                var u = _typeof(h)
                  , f = _typeof(a);
                if (isNumerable(u, h) && isNumerable(f, a))
                    return u === "string" && (h = parseInt(h, 10)),
                    f === "string" && (a = parseInt(a, 10)),
                    h - a;
                if ($bm_isInstanceOfArray(h) && isNumerable(f, a))
                    return h = h.slice(0),
                    h[0] -= a,
                    h;
                if (isNumerable(u, h) && $bm_isInstanceOfArray(a))
                    return a = a.slice(0),
                    a[0] = h - a[0],
                    a;
                if ($bm_isInstanceOfArray(h) && $bm_isInstanceOfArray(a)) {
                    for (var c = 0, p = h.length, d = a.length, m = []; c < p || c < d; )
                        (typeof h[c] == "number" || h[c]instanceof Number) && (typeof a[c] == "number" || a[c]instanceof Number) ? m[c] = h[c] - a[c] : m[c] = a[c] === void 0 ? h[c] : h[c] || a[c],
                        c += 1;
                    return m
                }
                return 0
            }
            function mul(h, a) {
                var u = _typeof(h), f = _typeof(a), c;
                if (isNumerable(u, h) && isNumerable(f, a))
                    return h * a;
                var p, d;
                if ($bm_isInstanceOfArray(h) && isNumerable(f, a)) {
                    for (d = h.length,
                    c = createTypedArray("float32", d),
                    p = 0; p < d; p += 1)
                        c[p] = h[p] * a;
                    return c
                }
                if (isNumerable(u, h) && $bm_isInstanceOfArray(a)) {
                    for (d = a.length,
                    c = createTypedArray("float32", d),
                    p = 0; p < d; p += 1)
                        c[p] = h * a[p];
                    return c
                }
                return 0
            }
            function div(h, a) {
                var u = _typeof(h), f = _typeof(a), c;
                if (isNumerable(u, h) && isNumerable(f, a))
                    return h / a;
                var p, d;
                if ($bm_isInstanceOfArray(h) && isNumerable(f, a)) {
                    for (d = h.length,
                    c = createTypedArray("float32", d),
                    p = 0; p < d; p += 1)
                        c[p] = h[p] / a;
                    return c
                }
                if (isNumerable(u, h) && $bm_isInstanceOfArray(a)) {
                    for (d = a.length,
                    c = createTypedArray("float32", d),
                    p = 0; p < d; p += 1)
                        c[p] = h / a[p];
                    return c
                }
                return 0
            }
            function mod(h, a) {
                return typeof h == "string" && (h = parseInt(h, 10)),
                typeof a == "string" && (a = parseInt(a, 10)),
                h % a
            }
            var $bm_sum = sum
              , $bm_sub = sub
              , $bm_mul = mul
              , $bm_div = div
              , $bm_mod = mod;
            function clamp(h, a, u) {
                if (a > u) {
                    var f = u;
                    u = a,
                    a = f
                }
                return Math.min(Math.max(h, a), u)
            }
            function radiansToDegrees(h) {
                return h / degToRads
            }
            var radians_to_degrees = radiansToDegrees;
            function degreesToRadians(h) {
                return h * degToRads
            }
            var degrees_to_radians = radiansToDegrees
              , helperLengthArray = [0, 0, 0, 0, 0, 0];
            function length(h, a) {
                if (typeof h == "number" || h instanceof Number)
                    return a = a || 0,
                    Math.abs(h - a);
                a || (a = helperLengthArray);
                var u, f = Math.min(h.length, a.length), c = 0;
                for (u = 0; u < f; u += 1)
                    c += Math.pow(a[u] - h[u], 2);
                return Math.sqrt(c)
            }
            function normalize(h) {
                return div(h, length(h))
            }
            function rgbToHsl(h) {
                var a = h[0], u = h[1], f = h[2], c = Math.max(a, u, f), p = Math.min(a, u, f), d, m, g = (c + p) / 2;
                if (c === p)
                    d = 0,
                    m = 0;
                else {
                    var v = c - p;
                    switch (m = g > .5 ? v / (2 - c - p) : v / (c + p),
                    c) {
                    case a:
                        d = (u - f) / v + (u < f ? 6 : 0);
                        break;
                    case u:
                        d = (f - a) / v + 2;
                        break;
                    case f:
                        d = (a - u) / v + 4;
                        break
                    }
                    d /= 6
                }
                return [d, m, g, h[3]]
            }
            function hue2rgb(h, a, u) {
                return u < 0 && (u += 1),
                u > 1 && (u -= 1),
                u < 1 / 6 ? h + (a - h) * 6 * u : u < 1 / 2 ? a : u < 2 / 3 ? h + (a - h) * (2 / 3 - u) * 6 : h
            }
            function hslToRgb(h) {
                var a = h[0], u = h[1], f = h[2], c, p, d;
                if (u === 0)
                    c = f,
                    d = f,
                    p = f;
                else {
                    var m = f < .5 ? f * (1 + u) : f + u - f * u
                      , g = 2 * f - m;
                    c = hue2rgb(g, m, a + 1 / 3),
                    p = hue2rgb(g, m, a),
                    d = hue2rgb(g, m, a - 1 / 3)
                }
                return [c, p, d, h[3]]
            }
            function linear(h, a, u, f, c) {
                if ((f === void 0 || c === void 0) && (f = a,
                c = u,
                a = 0,
                u = 1),
                u < a) {
                    var p = u;
                    u = a,
                    a = p
                }
                if (h <= a)
                    return f;
                if (h >= u)
                    return c;
                var d = u === a ? 0 : (h - a) / (u - a);
                if (!f.length)
                    return f + (c - f) * d;
                var m, g = f.length, v = createTypedArray("float32", g);
                for (m = 0; m < g; m += 1)
                    v[m] = f[m] + (c[m] - f[m]) * d;
                return v
            }
            function random(h, a) {
                if (a === void 0 && (h === void 0 ? (h = 0,
                a = 1) : (a = h,
                h = void 0)),
                a.length) {
                    var u, f = a.length;
                    h || (h = createTypedArray("float32", f));
                    var c = createTypedArray("float32", f)
                      , p = BMMath.random();
                    for (u = 0; u < f; u += 1)
                        c[u] = h[u] + p * (a[u] - h[u]);
                    return c
                }
                h === void 0 && (h = 0);
                var d = BMMath.random();
                return h + d * (a - h)
            }
            function createPath(h, a, u, f) {
                var c, p = h.length, d = shapePool.newElement();
                d.setPathData(!!f, p);
                var m = [0, 0], g, v;
                for (c = 0; c < p; c += 1)
                    g = a && a[c] ? a[c] : m,
                    v = u && u[c] ? u[c] : m,
                    d.setTripleAt(h[c][0], h[c][1], v[0] + h[c][0], v[1] + h[c][1], g[0] + h[c][0], g[1] + h[c][1], c, !0);
                return d
            }
            function initiateExpression(elem, data, property) {
                function noOp(h) {
                    return h
                }
                if (!elem.globalData.renderConfig.runExpressions)
                    return noOp;
                var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                thisProperty.valueAtTime = thisProperty.getValueAtTime,
                Object.defineProperty(thisProperty, "value", {
                    get: function() {
                        return thisProperty.v
                    }
                }),
                elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
                elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = function h(a, u) {
                    var f, c, p = this.pv.length ? this.pv.length : 1, d = createTypedArray("float32", p);
                    a = 5;
                    var m = Math.floor(time * a);
                    for (f = 0,
                    c = 0; f < m; ) {
                        for (c = 0; c < p; c += 1)
                            d[c] += -u + u * 2 * BMMath.random();
                        f += 1
                    }
                    var g = time * a
                      , v = g - Math.floor(g)
                      , _ = createTypedArray("float32", p);
                    if (p > 1) {
                        for (c = 0; c < p; c += 1)
                            _[c] = this.pv[c] + d[c] + (-u + u * 2 * BMMath.random()) * v;
                        return _
                    }
                    return this.pv + d[0] + (-u + u * 2 * BMMath.random()) * v
                }
                .bind(this);
                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty),
                loop_in = loopIn),
                thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty),
                loop_out = loopOut),
                thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
                function loopInDuration(h, a) {
                    return loopIn(h, a, !0)
                }
                function loopOutDuration(h, a) {
                    return loopOut(h, a, !0)
                }
                this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
                function lookAt(h, a) {
                    var u = [a[0] - h[0], a[1] - h[1], a[2] - h[2]]
                      , f = Math.atan2(u[0], Math.sqrt(u[1] * u[1] + u[2] * u[2])) / degToRads
                      , c = -Math.atan2(u[1], u[2]) / degToRads;
                    return [c, f, 0]
                }
                function easeOut(h, a, u, f, c) {
                    return applyEase(easeOutBez, h, a, u, f, c)
                }
                function easeIn(h, a, u, f, c) {
                    return applyEase(easeInBez, h, a, u, f, c)
                }
                function ease(h, a, u, f, c) {
                    return applyEase(easeInOutBez, h, a, u, f, c)
                }
                function applyEase(h, a, u, f, c, p) {
                    c === void 0 ? (c = u,
                    p = f) : a = (a - u) / (f - u),
                    a > 1 ? a = 1 : a < 0 && (a = 0);
                    var d = h(a);
                    if ($bm_isInstanceOfArray(c)) {
                        var m, g = c.length, v = createTypedArray("float32", g);
                        for (m = 0; m < g; m += 1)
                            v[m] = (p[m] - c[m]) * d + c[m];
                        return v
                    }
                    return (p - c) * d + c
                }
                function nearestKey(h) {
                    var a, u = data.k.length, f, c;
                    if (!data.k.length || typeof data.k[0] == "number")
                        f = 0,
                        c = 0;
                    else if (f = -1,
                    h *= elem.comp.globalData.frameRate,
                    h < data.k[0].t)
                        f = 1,
                        c = data.k[0].t;
                    else {
                        for (a = 0; a < u - 1; a += 1)
                            if (h === data.k[a].t) {
                                f = a + 1,
                                c = data.k[a].t;
                                break
                            } else if (h > data.k[a].t && h < data.k[a + 1].t) {
                                h - data.k[a].t > data.k[a + 1].t - h ? (f = a + 2,
                                c = data.k[a + 1].t) : (f = a + 1,
                                c = data.k[a].t);
                                break
                            }
                        f === -1 && (f = a + 1,
                        c = data.k[a].t)
                    }
                    var p = {};
                    return p.index = f,
                    p.time = c / elem.comp.globalData.frameRate,
                    p
                }
                function key(h) {
                    var a, u, f;
                    if (!data.k.length || typeof data.k[0] == "number")
                        throw new Error("The property has no keyframe at index " + h);
                    h -= 1,
                    a = {
                        time: data.k[h].t / elem.comp.globalData.frameRate,
                        value: []
                    };
                    var c = Object.prototype.hasOwnProperty.call(data.k[h], "s") ? data.k[h].s : data.k[h - 1].e;
                    for (f = c.length,
                    u = 0; u < f; u += 1)
                        a[u] = c[u],
                        a.value[u] = c[u];
                    return a
                }
                function framesToTime(h, a) {
                    return a || (a = elem.comp.globalData.frameRate),
                    h / a
                }
                function timeToFrames(h, a) {
                    return !h && h !== 0 && (h = time),
                    a || (a = elem.comp.globalData.frameRate),
                    h * a
                }
                function seedRandom(h) {
                    BMMath.seedrandom(randSeed + h)
                }
                function sourceRectAtTime() {
                    return elem.sourceRectAtTime()
                }
                function substring(h, a) {
                    return typeof value == "string" ? a === void 0 ? value.substring(h) : value.substring(h, a) : ""
                }
                function substr(h, a) {
                    return typeof value == "string" ? a === void 0 ? value.substr(h) : value.substr(h, a) : ""
                }
                function posterizeTime(h) {
                    time = h === 0 ? 0 : Math.floor(time * h) / h,
                    value = valueAtTime(time)
                }
                var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;
                function executeExpression(h) {
                    return value = h,
                    this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex,
                    textTotal = this.textTotal,
                    selectorValue = this.selectorValue),
                    thisLayer || (text = elem.layerInterface.text,
                    thisLayer = elem.layerInterface,
                    thisComp = elem.comp.compInterface,
                    toWorld = thisLayer.toWorld.bind(thisLayer),
                    fromWorld = thisLayer.fromWorld.bind(thisLayer),
                    fromComp = thisLayer.fromComp.bind(thisLayer),
                    toComp = thisLayer.toComp.bind(thisLayer),
                    mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null,
                    fromCompToSurface = fromComp),
                    transform || (transform = elem.layerInterface("ADBE Transform Group"),
                    $bm_transform = transform,
                    transform && (anchorPoint = transform.anchorPoint)),
                    elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")),
                    effect || (effect = thisLayer(4)),
                    hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                    hasParent && !parent && (parent = elem.hierarchy[0].layerInterface),
                    time = this.comp.renderedFrame / this.comp.globalData.frameRate,
                    _needsRandom && seedRandom(randSeed + time),
                    needsVelocity && (velocity = velocityAtTime(time)),
                    expression_function(),
                    this.frameExpressionId = elem.globalData.frameId,
                    scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt,
                    scoped_bm_rt)
                }
                return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData],
                executeExpression
            }
            return ob.initiateExpression = initiateExpression,
            ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath],
            ob
        }()
          , expressionHelpers = function() {
            function h(d, m, g) {
                m.x && (g.k = !0,
                g.x = !0,
                g.initiateExpression = ExpressionManager.initiateExpression,
                g.effectsSequence.push(g.initiateExpression(d, m, g).bind(g)))
            }
            function a(d) {
                return d *= this.elem.globalData.frameRate,
                d -= this.offsetTime,
                d !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < d ? this._cachingAtTime.lastIndex : 0,
                this._cachingAtTime.value = this.interpolateValue(d, this._cachingAtTime),
                this._cachingAtTime.lastFrame = d),
                this._cachingAtTime.value
            }
            function u(d) {
                var m = -.01
                  , g = this.getValueAtTime(d)
                  , v = this.getValueAtTime(d + m)
                  , _ = 0;
                if (g.length) {
                    var b;
                    for (b = 0; b < g.length; b += 1)
                        _ += Math.pow(v[b] - g[b], 2);
                    _ = Math.sqrt(_) * 100
                } else
                    _ = 0;
                return _
            }
            function f(d) {
                if (this.vel !== void 0)
                    return this.vel;
                var m = -.001, g = this.getValueAtTime(d), v = this.getValueAtTime(d + m), _;
                if (g.length) {
                    _ = createTypedArray("float32", g.length);
                    var b;
                    for (b = 0; b < g.length; b += 1)
                        _[b] = (v[b] - g[b]) / m
                } else
                    _ = (v - g) / m;
                return _
            }
            function c() {
                return this.pv
            }
            function p(d) {
                this.propertyGroup = d
            }
            return {
                searchExpressions: h,
                getSpeedAtTime: u,
                getVelocityAtTime: f,
                getValueAtTime: a,
                getStaticValueAtTime: c,
                setGroupProperty: p
            }
        }();
        function addPropertyDecorator() {
            function h(P, J, x) {
                if (!this.k || !this.keyframes)
                    return this.pv;
                P = P ? P.toLowerCase() : "";
                var w = this.comp.renderedFrame
                  , pe = this.keyframes
                  , L = pe[pe.length - 1].t;
                if (w <= L)
                    return this.pv;
                var R, M;
                x ? (J ? R = Math.abs(L - this.elem.comp.globalData.frameRate * J) : R = Math.max(0, L - this.elem.data.ip),
                M = L - R) : ((!J || J > pe.length - 1) && (J = pe.length - 1),
                M = pe[pe.length - 1 - J].t,
                R = L - M);
                var Z, he, et;
                if (P === "pingpong") {
                    var ei = Math.floor((w - M) / R);
                    if (ei % 2 !== 0)
                        return this.getValueAtTime((R - (w - M) % R + M) / this.comp.globalData.frameRate, 0)
                } else if (P === "offset") {
                    var ii = this.getValueAtTime(M / this.comp.globalData.frameRate, 0)
                      , oi = this.getValueAtTime(L / this.comp.globalData.frameRate, 0)
                      , hi = this.getValueAtTime(((w - M) % R + M) / this.comp.globalData.frameRate, 0)
                      , fi = Math.floor((w - M) / R);
                    if (this.pv.length) {
                        for (et = new Array(ii.length),
                        he = et.length,
                        Z = 0; Z < he; Z += 1)
                            et[Z] = (oi[Z] - ii[Z]) * fi + hi[Z];
                        return et
                    }
                    return (oi - ii) * fi + hi
                } else if (P === "continue") {
                    var ui = this.getValueAtTime(L / this.comp.globalData.frameRate, 0)
                      , pi = this.getValueAtTime((L - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (et = new Array(ui.length),
                        he = et.length,
                        Z = 0; Z < he; Z += 1)
                            et[Z] = ui[Z] + (ui[Z] - pi[Z]) * ((w - L) / this.comp.globalData.frameRate) / 5e-4;
                        return et
                    }
                    return ui + (ui - pi) * ((w - L) / .001)
                }
                return this.getValueAtTime(((w - M) % R + M) / this.comp.globalData.frameRate, 0)
            }
            function a(P, J, x) {
                if (!this.k)
                    return this.pv;
                P = P ? P.toLowerCase() : "";
                var w = this.comp.renderedFrame
                  , pe = this.keyframes
                  , L = pe[0].t;
                if (w >= L)
                    return this.pv;
                var R, M;
                x ? (J ? R = Math.abs(this.elem.comp.globalData.frameRate * J) : R = Math.max(0, this.elem.data.op - L),
                M = L + R) : ((!J || J > pe.length - 1) && (J = pe.length - 1),
                M = pe[J].t,
                R = M - L);
                var Z, he, et;
                if (P === "pingpong") {
                    var ei = Math.floor((L - w) / R);
                    if (ei % 2 === 0)
                        return this.getValueAtTime(((L - w) % R + L) / this.comp.globalData.frameRate, 0)
                } else if (P === "offset") {
                    var ii = this.getValueAtTime(L / this.comp.globalData.frameRate, 0)
                      , oi = this.getValueAtTime(M / this.comp.globalData.frameRate, 0)
                      , hi = this.getValueAtTime((R - (L - w) % R + L) / this.comp.globalData.frameRate, 0)
                      , fi = Math.floor((L - w) / R) + 1;
                    if (this.pv.length) {
                        for (et = new Array(ii.length),
                        he = et.length,
                        Z = 0; Z < he; Z += 1)
                            et[Z] = hi[Z] - (oi[Z] - ii[Z]) * fi;
                        return et
                    }
                    return hi - (oi - ii) * fi
                } else if (P === "continue") {
                    var ui = this.getValueAtTime(L / this.comp.globalData.frameRate, 0)
                      , pi = this.getValueAtTime((L + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (et = new Array(ui.length),
                        he = et.length,
                        Z = 0; Z < he; Z += 1)
                            et[Z] = ui[Z] + (ui[Z] - pi[Z]) * (L - w) / .001;
                        return et
                    }
                    return ui + (ui - pi) * (L - w) / .001
                }
                return this.getValueAtTime((R - ((L - w) % R + L)) / this.comp.globalData.frameRate, 0)
            }
            function u(P, J) {
                if (!this.k)
                    return this.pv;
                if (P = (P || .4) * .5,
                J = Math.floor(J || 5),
                J <= 1)
                    return this.pv;
                var x = this.comp.renderedFrame / this.comp.globalData.frameRate, w = x - P, pe = x + P, L = J > 1 ? (pe - w) / (J - 1) : 1, R = 0, M = 0, Z;
                this.pv.length ? Z = createTypedArray("float32", this.pv.length) : Z = 0;
                for (var he; R < J; ) {
                    if (he = this.getValueAtTime(w + R * L),
                    this.pv.length)
                        for (M = 0; M < this.pv.length; M += 1)
                            Z[M] += he[M];
                    else
                        Z += he;
                    R += 1
                }
                if (this.pv.length)
                    for (M = 0; M < this.pv.length; M += 1)
                        Z[M] /= J;
                else
                    Z /= J;
                return Z
            }
            function f(P) {
                this._transformCachingAtTime || (this._transformCachingAtTime = {
                    v: new Matrix
                });
                var J = this._transformCachingAtTime.v;
                if (J.cloneFromProps(this.pre.props),
                this.appliedTransformations < 1) {
                    var x = this.a.getValueAtTime(P);
                    J.translate(-x[0] * this.a.mult, -x[1] * this.a.mult, x[2] * this.a.mult)
                }
                if (this.appliedTransformations < 2) {
                    var w = this.s.getValueAtTime(P);
                    J.scale(w[0] * this.s.mult, w[1] * this.s.mult, w[2] * this.s.mult)
                }
                if (this.sk && this.appliedTransformations < 3) {
                    var pe = this.sk.getValueAtTime(P)
                      , L = this.sa.getValueAtTime(P);
                    J.skewFromAxis(-pe * this.sk.mult, L * this.sa.mult)
                }
                if (this.r && this.appliedTransformations < 4) {
                    var R = this.r.getValueAtTime(P);
                    J.rotate(-R * this.r.mult)
                } else if (!this.r && this.appliedTransformations < 4) {
                    var M = this.rz.getValueAtTime(P)
                      , Z = this.ry.getValueAtTime(P)
                      , he = this.rx.getValueAtTime(P)
                      , et = this.or.getValueAtTime(P);
                    J.rotateZ(-M * this.rz.mult).rotateY(Z * this.ry.mult).rotateX(he * this.rx.mult).rotateZ(-et[2] * this.or.mult).rotateY(et[1] * this.or.mult).rotateX(et[0] * this.or.mult)
                }
                if (this.data.p && this.data.p.s) {
                    var ei = this.px.getValueAtTime(P)
                      , ii = this.py.getValueAtTime(P);
                    if (this.data.p.z) {
                        var oi = this.pz.getValueAtTime(P);
                        J.translate(ei * this.px.mult, ii * this.py.mult, -oi * this.pz.mult)
                    } else
                        J.translate(ei * this.px.mult, ii * this.py.mult, 0)
                } else {
                    var hi = this.p.getValueAtTime(P);
                    J.translate(hi[0] * this.p.mult, hi[1] * this.p.mult, -hi[2] * this.p.mult)
                }
                return J
            }
            function c() {
                return this.v.clone(new Matrix)
            }
            var p = TransformPropertyFactory.getTransformProperty;
            TransformPropertyFactory.getTransformProperty = function(P, J, x) {
                var w = p(P, J, x);
                return w.dynamicProperties.length ? w.getValueAtTime = f.bind(w) : w.getValueAtTime = c.bind(w),
                w.setGroupProperty = expressionHelpers.setGroupProperty,
                w
            }
            ;
            var d = PropertyFactory.getProp;
            PropertyFactory.getProp = function(P, J, x, w, pe) {
                var L = d(P, J, x, w, pe);
                L.kf ? L.getValueAtTime = expressionHelpers.getValueAtTime.bind(L) : L.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(L),
                L.setGroupProperty = expressionHelpers.setGroupProperty,
                L.loopOut = h,
                L.loopIn = a,
                L.smooth = u,
                L.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(L),
                L.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(L),
                L.numKeys = J.a === 1 ? J.k.length : 0,
                L.propertyIndex = J.ix;
                var R = 0;
                return x !== 0 && (R = createTypedArray("float32", J.a === 1 ? J.k[0].s.length : J.k.length)),
                L._cachingAtTime = {
                    lastFrame: initialDefaultFrame,
                    lastIndex: 0,
                    value: R
                },
                expressionHelpers.searchExpressions(P, J, L),
                L.k && pe.addDynamicProperty(L),
                L
            }
            ;
            function m(P) {
                return this._cachingAtTime || (this._cachingAtTime = {
                    shapeValue: shapePool.clone(this.pv),
                    lastIndex: 0,
                    lastTime: initialDefaultFrame
                }),
                P *= this.elem.globalData.frameRate,
                P -= this.offsetTime,
                P !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < P ? this._caching.lastIndex : 0,
                this._cachingAtTime.lastTime = P,
                this.interpolateShape(P, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                this._cachingAtTime.shapeValue
            }
            var g = ShapePropertyFactory.getConstructorFunction()
              , v = ShapePropertyFactory.getKeyframedConstructorFunction();
            function _() {}
            _.prototype = {
                vertices: function(J, x) {
                    this.k && this.getValue();
                    var w = this.v;
                    x !== void 0 && (w = this.getValueAtTime(x, 0));
                    var pe, L = w._length, R = w[J], M = w.v, Z = createSizedArray(L);
                    for (pe = 0; pe < L; pe += 1)
                        J === "i" || J === "o" ? Z[pe] = [R[pe][0] - M[pe][0], R[pe][1] - M[pe][1]] : Z[pe] = [R[pe][0], R[pe][1]];
                    return Z
                },
                points: function(J) {
                    return this.vertices("v", J)
                },
                inTangents: function(J) {
                    return this.vertices("i", J)
                },
                outTangents: function(J) {
                    return this.vertices("o", J)
                },
                isClosed: function() {
                    return this.v.c
                },
                pointOnPath: function(J, x) {
                    var w = this.v;
                    x !== void 0 && (w = this.getValueAtTime(x, 0)),
                    this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(w));
                    for (var pe = this._segmentsLength, L = pe.lengths, R = pe.totalLength * J, M = 0, Z = L.length, he = 0, et; M < Z; ) {
                        if (he + L[M].addedLength > R) {
                            var ei = M
                              , ii = w.c && M === Z - 1 ? 0 : M + 1
                              , oi = (R - he) / L[M].addedLength;
                            et = bez.getPointInSegment(w.v[ei], w.v[ii], w.o[ei], w.i[ii], oi, L[M]);
                            break
                        } else
                            he += L[M].addedLength;
                        M += 1
                    }
                    return et || (et = w.c ? [w.v[0][0], w.v[0][1]] : [w.v[w._length - 1][0], w.v[w._length - 1][1]]),
                    et
                },
                vectorOnPath: function(J, x, w) {
                    J == 1 ? J = this.v.c : J == 0 && (J = .999);
                    var pe = this.pointOnPath(J, x)
                      , L = this.pointOnPath(J + .001, x)
                      , R = L[0] - pe[0]
                      , M = L[1] - pe[1]
                      , Z = Math.sqrt(Math.pow(R, 2) + Math.pow(M, 2));
                    if (Z === 0)
                        return [0, 0];
                    var he = w === "tangent" ? [R / Z, M / Z] : [-M / Z, R / Z];
                    return he
                },
                tangentOnPath: function(J, x) {
                    return this.vectorOnPath(J, x, "tangent")
                },
                normalOnPath: function(J, x) {
                    return this.vectorOnPath(J, x, "normal")
                },
                setGroupProperty: expressionHelpers.setGroupProperty,
                getValueAtTime: expressionHelpers.getStaticValueAtTime
            },
            extendPrototype([_], g),
            extendPrototype([_], v),
            v.prototype.getValueAtTime = m,
            v.prototype.initiateExpression = ExpressionManager.initiateExpression;
            var b = ShapePropertyFactory.getShapeProp;
            ShapePropertyFactory.getShapeProp = function(P, J, x, w, pe) {
                var L = b(P, J, x, w, pe);
                return L.propertyIndex = J.ix,
                L.lock = !1,
                x === 3 ? expressionHelpers.searchExpressions(P, J.pt, L) : x === 4 && expressionHelpers.searchExpressions(P, J.ks, L),
                L.k && P.addDynamicProperty(L),
                L
            }
        }
        function initialize$1() {
            addPropertyDecorator()
        }
        function addDecorator() {
            function h() {
                return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this),
                this.addEffect(this.getExpressionValue.bind(this)),
                !0) : null
            }
            TextProperty.prototype.getExpressionValue = function(a, u) {
                var f = this.calculateExpression(u);
                if (a.t !== f) {
                    var c = {};
                    return this.copyData(c, a),
                    c.t = f.toString(),
                    c.__complete = !1,
                    c
                }
                return a
            }
            ,
            TextProperty.prototype.searchProperty = function() {
                var a = this.searchKeyframes()
                  , u = this.searchExpressions();
                return this.kf = a || u,
                this.kf
            }
            ,
            TextProperty.prototype.searchExpressions = h
        }
        function initialize() {
            addDecorator()
        }
        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
            createMergeNode: function h(a, u) {
                var f = createNS("feMerge");
                f.setAttribute("result", a);
                var c, p;
                for (p = 0; p < u.length; p += 1)
                    c = createNS("feMergeNode"),
                    c.setAttribute("in", u[p]),
                    f.appendChild(c),
                    f.appendChild(c);
                return f
            }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
        function SVGTintFilter(h, a, u, f, c) {
            this.filterManager = a;
            var p = createNS("feColorMatrix");
            p.setAttribute("type", "matrix"),
            p.setAttribute("color-interpolation-filters", "linearRGB"),
            p.setAttribute("values", linearFilterValue + " 1 0"),
            this.linearFilter = p,
            p.setAttribute("result", f + "_tint_1"),
            h.appendChild(p),
            p = createNS("feColorMatrix"),
            p.setAttribute("type", "matrix"),
            p.setAttribute("color-interpolation-filters", "sRGB"),
            p.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            p.setAttribute("result", f + "_tint_2"),
            h.appendChild(p),
            this.matrixFilter = p;
            var d = this.createMergeNode(f, [c, f + "_tint_1", f + "_tint_2"]);
            h.appendChild(d)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter),
        SVGTintFilter.prototype.renderFrame = function(h) {
            if (h || this.filterManager._mdf) {
                var a = this.filterManager.effectElements[0].p.v
                  , u = this.filterManager.effectElements[1].p.v
                  , f = this.filterManager.effectElements[2].p.v / 100;
                this.linearFilter.setAttribute("values", linearFilterValue + " " + f + " 0"),
                this.matrixFilter.setAttribute("values", u[0] - a[0] + " 0 0 0 " + a[0] + " " + (u[1] - a[1]) + " 0 0 0 " + a[1] + " " + (u[2] - a[2]) + " 0 0 0 " + a[2] + " 0 0 0 1 0")
            }
        }
        ;
        function SVGFillFilter(h, a, u, f) {
            this.filterManager = a;
            var c = createNS("feColorMatrix");
            c.setAttribute("type", "matrix"),
            c.setAttribute("color-interpolation-filters", "sRGB"),
            c.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            c.setAttribute("result", f),
            h.appendChild(c),
            this.matrixFilter = c
        }
        SVGFillFilter.prototype.renderFrame = function(h) {
            if (h || this.filterManager._mdf) {
                var a = this.filterManager.effectElements[2].p.v
                  , u = this.filterManager.effectElements[6].p.v;
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + a[0] + " 0 0 0 0 " + a[1] + " 0 0 0 0 " + a[2] + " 0 0 0 " + u + " 0")
            }
        }
        ;
        function SVGStrokeEffect(h, a, u) {
            this.initialized = !1,
            this.filterManager = a,
            this.elem = u,
            this.paths = []
        }
        SVGStrokeEffect.prototype.initialize = function() {
            var h = this.elem.layerElement.children || this.elem.layerElement.childNodes, a, u, f, c;
            for (this.filterManager.effectElements[1].p.v === 1 ? (c = this.elem.maskManager.masksProperties.length,
            f = 0) : (f = this.filterManager.effectElements[0].p.v - 1,
            c = f + 1),
            u = createNS("g"),
            u.setAttribute("fill", "none"),
            u.setAttribute("stroke-linecap", "round"),
            u.setAttribute("stroke-dashoffset", 1),
            f; f < c; f += 1)
                a = createNS("path"),
                u.appendChild(a),
                this.paths.push({
                    p: a,
                    m: f
                });
            if (this.filterManager.effectElements[10].p.v === 3) {
                var p = createNS("mask")
                  , d = createElementID();
                p.setAttribute("id", d),
                p.setAttribute("mask-type", "alpha"),
                p.appendChild(u),
                this.elem.globalData.defs.appendChild(p);
                var m = createNS("g");
                for (m.setAttribute("mask", "url(" + getLocationHref() + "#" + d + ")"); h[0]; )
                    m.appendChild(h[0]);
                this.elem.layerElement.appendChild(m),
                this.masker = p,
                u.setAttribute("stroke", "#fff")
            } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
                if (this.filterManager.effectElements[10].p.v === 2)
                    for (h = this.elem.layerElement.children || this.elem.layerElement.childNodes; h.length; )
                        this.elem.layerElement.removeChild(h[0]);
                this.elem.layerElement.appendChild(u),
                this.elem.layerElement.removeAttribute("mask"),
                u.setAttribute("stroke", "#fff")
            }
            this.initialized = !0,
            this.pathMasker = u
        }
        ,
        SVGStrokeEffect.prototype.renderFrame = function(h) {
            this.initialized || this.initialize();
            var a, u = this.paths.length, f, c;
            for (a = 0; a < u; a += 1)
                if (this.paths[a].m !== -1 && (f = this.elem.maskManager.viewData[this.paths[a].m],
                c = this.paths[a].p,
                (h || this.filterManager._mdf || f.prop._mdf) && c.setAttribute("d", f.lastPath),
                h || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || f.prop._mdf)) {
                    var p;
                    if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
                        var d = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01
                          , m = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01
                          , g = c.getTotalLength();
                        p = "0 0 0 " + g * d + " ";
                        var v = g * (m - d), _ = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01, b = Math.floor(v / _), P;
                        for (P = 0; P < b; P += 1)
                            p += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
                        p += "0 " + g * 10 + " 0 0"
                    } else
                        p = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
                    c.setAttribute("stroke-dasharray", p)
                }
            if ((h || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2),
            (h || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
            (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (h || this.filterManager.effectElements[3].p._mdf)) {
                var J = this.filterManager.effectElements[3].p.v;
                this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(J[0] * 255) + "," + bmFloor(J[1] * 255) + "," + bmFloor(J[2] * 255) + ")")
            }
        }
        ;
        function SVGTritoneFilter(h, a, u, f) {
            this.filterManager = a;
            var c = createNS("feColorMatrix");
            c.setAttribute("type", "matrix"),
            c.setAttribute("color-interpolation-filters", "linearRGB"),
            c.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
            h.appendChild(c);
            var p = createNS("feComponentTransfer");
            p.setAttribute("color-interpolation-filters", "sRGB"),
            p.setAttribute("result", f),
            this.matrixFilter = p;
            var d = createNS("feFuncR");
            d.setAttribute("type", "table"),
            p.appendChild(d),
            this.feFuncR = d;
            var m = createNS("feFuncG");
            m.setAttribute("type", "table"),
            p.appendChild(m),
            this.feFuncG = m;
            var g = createNS("feFuncB");
            g.setAttribute("type", "table"),
            p.appendChild(g),
            this.feFuncB = g,
            h.appendChild(p)
        }
        SVGTritoneFilter.prototype.renderFrame = function(h) {
            if (h || this.filterManager._mdf) {
                var a = this.filterManager.effectElements[0].p.v
                  , u = this.filterManager.effectElements[1].p.v
                  , f = this.filterManager.effectElements[2].p.v
                  , c = f[0] + " " + u[0] + " " + a[0]
                  , p = f[1] + " " + u[1] + " " + a[1]
                  , d = f[2] + " " + u[2] + " " + a[2];
                this.feFuncR.setAttribute("tableValues", c),
                this.feFuncG.setAttribute("tableValues", p),
                this.feFuncB.setAttribute("tableValues", d)
            }
        }
        ;
        function SVGProLevelsFilter(h, a, u, f) {
            this.filterManager = a;
            var c = this.filterManager.effectElements
              , p = createNS("feComponentTransfer");
            (c[10].p.k || c[10].p.v !== 0 || c[11].p.k || c[11].p.v !== 1 || c[12].p.k || c[12].p.v !== 1 || c[13].p.k || c[13].p.v !== 0 || c[14].p.k || c[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", p)),
            (c[17].p.k || c[17].p.v !== 0 || c[18].p.k || c[18].p.v !== 1 || c[19].p.k || c[19].p.v !== 1 || c[20].p.k || c[20].p.v !== 0 || c[21].p.k || c[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", p)),
            (c[24].p.k || c[24].p.v !== 0 || c[25].p.k || c[25].p.v !== 1 || c[26].p.k || c[26].p.v !== 1 || c[27].p.k || c[27].p.v !== 0 || c[28].p.k || c[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", p)),
            (c[31].p.k || c[31].p.v !== 0 || c[32].p.k || c[32].p.v !== 1 || c[33].p.k || c[33].p.v !== 1 || c[34].p.k || c[34].p.v !== 0 || c[35].p.k || c[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", p)),
            (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (p.setAttribute("color-interpolation-filters", "sRGB"),
            h.appendChild(p)),
            (c[3].p.k || c[3].p.v !== 0 || c[4].p.k || c[4].p.v !== 1 || c[5].p.k || c[5].p.v !== 1 || c[6].p.k || c[6].p.v !== 0 || c[7].p.k || c[7].p.v !== 1) && (p = createNS("feComponentTransfer"),
            p.setAttribute("color-interpolation-filters", "sRGB"),
            p.setAttribute("result", f),
            h.appendChild(p),
            this.feFuncRComposed = this.createFeFunc("feFuncR", p),
            this.feFuncGComposed = this.createFeFunc("feFuncG", p),
            this.feFuncBComposed = this.createFeFunc("feFuncB", p))
        }
        SVGProLevelsFilter.prototype.createFeFunc = function(h, a) {
            var u = createNS(h);
            return u.setAttribute("type", "table"),
            a.appendChild(u),
            u
        }
        ,
        SVGProLevelsFilter.prototype.getTableValue = function(h, a, u, f, c) {
            for (var p = 0, d = 256, m, g = Math.min(h, a), v = Math.max(h, a), _ = Array.call(null, {
                length: d
            }), b, P = 0, J = c - f, x = a - h; p <= 256; )
                m = p / 256,
                m <= g ? b = x < 0 ? c : f : m >= v ? b = x < 0 ? f : c : b = f + J * Math.pow((m - h) / x, 1 / u),
                _[P] = b,
                P += 1,
                p += 256 / (d - 1);
            return _.join(" ")
        }
        ,
        SVGProLevelsFilter.prototype.renderFrame = function(h) {
            if (h || this.filterManager._mdf) {
                var a, u = this.filterManager.effectElements;
                this.feFuncRComposed && (h || u[3].p._mdf || u[4].p._mdf || u[5].p._mdf || u[6].p._mdf || u[7].p._mdf) && (a = this.getTableValue(u[3].p.v, u[4].p.v, u[5].p.v, u[6].p.v, u[7].p.v),
                this.feFuncRComposed.setAttribute("tableValues", a),
                this.feFuncGComposed.setAttribute("tableValues", a),
                this.feFuncBComposed.setAttribute("tableValues", a)),
                this.feFuncR && (h || u[10].p._mdf || u[11].p._mdf || u[12].p._mdf || u[13].p._mdf || u[14].p._mdf) && (a = this.getTableValue(u[10].p.v, u[11].p.v, u[12].p.v, u[13].p.v, u[14].p.v),
                this.feFuncR.setAttribute("tableValues", a)),
                this.feFuncG && (h || u[17].p._mdf || u[18].p._mdf || u[19].p._mdf || u[20].p._mdf || u[21].p._mdf) && (a = this.getTableValue(u[17].p.v, u[18].p.v, u[19].p.v, u[20].p.v, u[21].p.v),
                this.feFuncG.setAttribute("tableValues", a)),
                this.feFuncB && (h || u[24].p._mdf || u[25].p._mdf || u[26].p._mdf || u[27].p._mdf || u[28].p._mdf) && (a = this.getTableValue(u[24].p.v, u[25].p.v, u[26].p.v, u[27].p.v, u[28].p.v),
                this.feFuncB.setAttribute("tableValues", a)),
                this.feFuncA && (h || u[31].p._mdf || u[32].p._mdf || u[33].p._mdf || u[34].p._mdf || u[35].p._mdf) && (a = this.getTableValue(u[31].p.v, u[32].p.v, u[33].p.v, u[34].p.v, u[35].p.v),
                this.feFuncA.setAttribute("tableValues", a))
            }
        }
        ;
        function SVGDropShadowEffect(h, a, u, f, c) {
            var p = a.container.globalData.renderConfig.filterSize
              , d = a.data.fs || p;
            h.setAttribute("x", d.x || p.x),
            h.setAttribute("y", d.y || p.y),
            h.setAttribute("width", d.width || p.width),
            h.setAttribute("height", d.height || p.height),
            this.filterManager = a;
            var m = createNS("feGaussianBlur");
            m.setAttribute("in", "SourceAlpha"),
            m.setAttribute("result", f + "_drop_shadow_1"),
            m.setAttribute("stdDeviation", "0"),
            this.feGaussianBlur = m,
            h.appendChild(m);
            var g = createNS("feOffset");
            g.setAttribute("dx", "25"),
            g.setAttribute("dy", "0"),
            g.setAttribute("in", f + "_drop_shadow_1"),
            g.setAttribute("result", f + "_drop_shadow_2"),
            this.feOffset = g,
            h.appendChild(g);
            var v = createNS("feFlood");
            v.setAttribute("flood-color", "#00ff00"),
            v.setAttribute("flood-opacity", "1"),
            v.setAttribute("result", f + "_drop_shadow_3"),
            this.feFlood = v,
            h.appendChild(v);
            var _ = createNS("feComposite");
            _.setAttribute("in", f + "_drop_shadow_3"),
            _.setAttribute("in2", f + "_drop_shadow_2"),
            _.setAttribute("operator", "in"),
            _.setAttribute("result", f + "_drop_shadow_4"),
            h.appendChild(_);
            var b = this.createMergeNode(f, [f + "_drop_shadow_4", c]);
            h.appendChild(b)
        }
        extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
        SVGDropShadowEffect.prototype.renderFrame = function(h) {
            if (h || this.filterManager._mdf) {
                if ((h || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4),
                h || this.filterManager.effectElements[0].p._mdf) {
                    var a = this.filterManager.effectElements[0].p.v;
                    this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(a[0] * 255), Math.round(a[1] * 255), Math.round(a[2] * 255)))
                }
                if ((h || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
                h || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                    var u = this.filterManager.effectElements[3].p.v
                      , f = (this.filterManager.effectElements[2].p.v - 90) * degToRads
                      , c = u * Math.cos(f)
                      , p = u * Math.sin(f);
                    this.feOffset.setAttribute("dx", c),
                    this.feOffset.setAttribute("dy", p)
                }
            }
        }
        ;
        var _svgMatteSymbols = [];
        function SVGMatte3Effect(h, a, u) {
            this.initialized = !1,
            this.filterManager = a,
            this.filterElem = h,
            this.elem = u,
            u.matteElement = createNS("g"),
            u.matteElement.appendChild(u.layerElement),
            u.matteElement.appendChild(u.transformedElement),
            u.baseElement = u.matteElement
        }
        SVGMatte3Effect.prototype.findSymbol = function(h) {
            for (var a = 0, u = _svgMatteSymbols.length; a < u; ) {
                if (_svgMatteSymbols[a] === h)
                    return _svgMatteSymbols[a];
                a += 1
            }
            return null
        }
        ,
        SVGMatte3Effect.prototype.replaceInParent = function(h, a) {
            var u = h.layerElement.parentNode;
            if (u) {
                for (var f = u.children, c = 0, p = f.length; c < p && f[c] !== h.layerElement; )
                    c += 1;
                var d;
                c <= p - 2 && (d = f[c + 1]);
                var m = createNS("use");
                m.setAttribute("href", "#" + a),
                d ? u.insertBefore(m, d) : u.appendChild(m)
            }
        }
        ,
        SVGMatte3Effect.prototype.setElementAsMask = function(h, a) {
            if (!this.findSymbol(a)) {
                var u = createElementID()
                  , f = createNS("mask");
                f.setAttribute("id", a.layerId),
                f.setAttribute("mask-type", "alpha"),
                _svgMatteSymbols.push(a);
                var c = h.globalData.defs;
                c.appendChild(f);
                var p = createNS("symbol");
                p.setAttribute("id", u),
                this.replaceInParent(a, u),
                p.appendChild(a.layerElement),
                c.appendChild(p);
                var d = createNS("use");
                d.setAttribute("href", "#" + u),
                f.appendChild(d),
                a.data.hd = !1,
                a.show()
            }
            h.setMatte(a.layerId)
        }
        ,
        SVGMatte3Effect.prototype.initialize = function() {
            for (var h = this.filterManager.effectElements[0].p.v, a = this.elem.comp.elements, u = 0, f = a.length; u < f; )
                a[u] && a[u].data.ind === h && this.setElementAsMask(this.elem, a[u]),
                u += 1;
            this.initialized = !0
        }
        ,
        SVGMatte3Effect.prototype.renderFrame = function() {
            this.initialized || this.initialize()
        }
        ;
        function SVGGaussianBlurEffect(h, a, u, f) {
            h.setAttribute("x", "-100%"),
            h.setAttribute("y", "-100%"),
            h.setAttribute("width", "300%"),
            h.setAttribute("height", "300%"),
            this.filterManager = a;
            var c = createNS("feGaussianBlur");
            c.setAttribute("result", f),
            h.appendChild(c),
            this.feGaussianBlur = c
        }
        return SVGGaussianBlurEffect.prototype.renderFrame = function(h) {
            if (h || this.filterManager._mdf) {
                var a = .3
                  , u = this.filterManager.effectElements[0].p.v * a
                  , f = this.filterManager.effectElements[1].p.v
                  , c = f == 3 ? 0 : u
                  , p = f == 2 ? 0 : u;
                this.feGaussianBlur.setAttribute("stdDeviation", c + " " + p);
                var d = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
                this.feGaussianBlur.setAttribute("edgeMode", d)
            }
        }
        ,
        registerRenderer("canvas", CanvasRenderer),
        registerRenderer("html", HybridRenderer),
        registerRenderer("svg", SVGRenderer),
        ShapeModifiers.registerModifier("tm", TrimModifier),
        ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
        ShapeModifiers.registerModifier("rp", RepeaterModifier),
        ShapeModifiers.registerModifier("rd", RoundCornersModifier),
        ShapeModifiers.registerModifier("zz", ZigZagModifier),
        ShapeModifiers.registerModifier("op", OffsetPathModifier),
        setExpressionsPlugin(Expressions),
        setExpressionInterfaces(getInterface),
        initialize$1(),
        initialize(),
        registerEffect(20, SVGTintFilter, !0),
        registerEffect(21, SVGFillFilter, !0),
        registerEffect(22, SVGStrokeEffect, !1),
        registerEffect(23, SVGTritoneFilter, !0),
        registerEffect(24, SVGProLevelsFilter, !0),
        registerEffect(25, SVGDropShadowEffect, !0),
        registerEffect(28, SVGMatte3Effect, !1),
        registerEffect(29, SVGGaussianBlurEffect, !0),
        lottie
    })
}
)(lottie$1, lottie$1.exports);
var lottieExports = lottie$1.exports;
const lottie = getDefaultExportFromCjs(lottieExports)
  , DURATION_OUT = .25
  , DURATION_IN = .45
  , EASE_OUT = "power3.inOut"
  , EASE_IN = "back.out"
  , SCALE_X = 2.6;
function arrowIconMove(h, a={}) {
    if (!h.el)
        return;
    const {durationOut: u=DURATION_OUT, durationIn: f=DURATION_IN} = a
      , p = (h.el.querySelector("[data-arrow-icon]") || h.el).clientWidth
      , d = h.el.querySelector("[data-arrow-image]")
      , m = d.clientWidth
      , g = p / 2 + m / 2 * SCALE_X;
    h.tlArrowMove && h.tlArrowMove.kill(),
    h.tlArrowMove = gsapWithCSS.timeline(),
    h.tlArrowMove.fromTo(d, {
        x: 0,
        scaleX: 1
    }, {
        x: g,
        scaleX: SCALE_X,
        ease: EASE_OUT,
        duration: u
    }),
    h.tlArrowMove.fromTo(d, {
        x: -g,
        scaleX: SCALE_X
    }, {
        x: 0,
        scaleX: 1,
        ease: EASE_IN,
        duration: f
    })
}
function mix(h, a, u) {
    return h * (1 - u) + a * u
}
function clamp(h, a, u) {
    return Math.min(Math.max(h, a), u)
}
function map(h, a, u, f, c, p=!0) {
    if (p) {
        if (h <= a)
            return f;
        if (h >= u)
            return c
    }
    return (h - a) * (c - f) / (u - a) + f
}
function getLoopedNumber(h, a) {
    return (h + a) % a
}
function getRandom(h=0, a=1) {
    return Math.random() * (a - h) + h
}
(class extends Component {
    static selectorRoot = "[data-modal]:not([data-modal-manual])";
    isOpen = !1;
    onInit() {
        const {el: h} = this;
        this.elPage = document.querySelector("[data-router-inner]");
        const {id: a=h.id || h.dataset.modal, isDisableAnimation: u=!1} = h.dataset.modal ? JSON.parse(h.dataset.modal) : {};
        this.id = a,
        this.isDisableAnimation = u,
        this.elBody = document.body,
        this.elContent = this.el.querySelector("[data-modal-content]"),
        this.elBackdrop = this.el.querySelector("[data-modal-backdrop]"),
        this.elsClose = this.el.querySelectorAll("[data-modal-close]"),
        this.isDisableAnimation || (gsapK.set(this.elContent, {
            visibility: "hidden"
        }),
        this.elBackdrop && gsapK.set(this.elBackdrop, {
            opacity: 0
        })),
        this.elContent?.addEventListener("click", c=>{
            c.stopPropagation()
        }
        , passive);
        const f = c=>{
            this.isDisableAnimation || gsapK.set(c, {
                opacity: 0
            }),
            c.addEventListener("click", p=>{
                p.stopPropagation(),
                eventBus.emit("closeModal", this.id)
            }
            , passive)
        }
        ;
        this.elsClose.length > 0 ? this.elsClose.forEach(c=>{
            f(c)
        }
        ) : this.elsClose.length !== 0 && f(this.elsClose),
        store.modals[this.id] = this
    }
    onClick(h) {
        h.stopPropagation(),
        eventBus.emit("closeModal", this.id)
    }
    onBeforeResetModalStyle() {
        this.isDisableAnimation || gsap.set(this.elPage, {
            transformOrigin: `50% ${(store.cScroll.getStorageScrollY() + window.innerHeight * .5) / this.elPage.offsetHeight * 100}%`
        })
    }
    open(h) {
        this.isDisableAnimation || this.isOpen || (this.isOpen = !0,
        this.el.classList.add("-open"),
        this.elBody.classList.add("-open"),
        gsap.set(this.elContent, {
            xPercent: 100,
            visibility: "visible"
        }),
        gsapK.to(this.elContent, {
            xPercent: 0,
            duration: 1,
            ease: "power4.out",
            onComplete: this.elBackdrop ? null : h
        }),
        gsapK.to(this.elContent, {
            duration: .6,
            scrollTop: 0,
            ease: "power2.out"
        }),
        gsapK.to(this.elsClose, {
            opacity: 1,
            duration: .6,
            ease: "power2.out",
            delay: .2
        }),
        this.elBackdrop && gsapK.to(this.elBackdrop, {
            opacity: 1,
            duration: .6,
            ease: "power2.out"
        }),
        gsapK.to(this.elPage, {
            xPercent: -12,
            scale: .95,
            duration: 1,
            ease: "power4.out"
        }))
    }
    close(h, a=!1) {
        this.isDisableAnimation || this.isOpen && (this.isOpen = !1,
        gsapK.to(this.elContent, {
            xPercent: 100,
            duration: a ? .01 : this.isSp ? .8 : .5,
            ease: "power4.out",
            onComplete: this.elBackdrop ? null : ()=>{
                this.el.classList.remove("-open"),
                this.elBody.classList.remove("-open"),
                h && h()
            }
        }),
        gsapK.to(this.elContent, {
            duration: a ? .01 : this.isSp ? .6 : .35,
            ease: "power2.out"
        }),
        gsapK.to(this.elsClose, {
            opacity: 0,
            duration: a ? .01 : this.isSp ? .6 : .35,
            ease: "power2.out"
        }),
        this.elBackdrop && gsapK.to(this.elBackdrop, {
            opacity: 0,
            duration: a ? .01 : this.isSp ? .8 : .5,
            ease: "power2.out",
            onComplete: ()=>{
                this.el.classList.remove("-open"),
                this.elBody.classList.remove("-open"),
                gsapK.set(this.elContent, {
                    visibility: "hidden"
                }),
                h && h()
            }
        }),
        gsapK.to(this.elPage, {
            xPercent: 0,
            scale: 1,
            duration: a ? .01 : this.isSp ? .8 : .5,
            ease: "power4.out",
            clearProps: !0
        }))
    }
    onLeave() {
        this.isDisableAnimation || this.isOpen && this.close()
    }
}
).register();
(class extends Component {
    static selectorRoot = "[data-modal-trigger]:not([data-modal-trigger-manual])";
    isOpen = !1;
    onInit() {
        this.id = this.el.dataset.modalTrigger
    }
    onClick(h) {
        h.preventDefault(),
        this.isOpen ? (this.emit("closeModal", this.id),
        this.isOpen = !1) : (this.emit("openModal", this.id),
        this.isOpen = !0)
    }
    onCloseModal(h) {
        h === this.id && (this.isOpen = !1)
    }
    onLeave(h) {
        h === this.id && (this.isOpen = !1)
    }
}
).register();
class Wheel {
    constructor(a, u, f={}) {
        const {threshold: c=0, reset: p, eventListenerOptions: d={
            passive: !isSafari
        }} = f;
        this.el = a,
        this._callback = u,
        this._threshold = c,
        this.reset = p,
        this._type = "wheel",
        this._eventListenerOptions = d,
        this._handler = this._onWheel.bind(this),
        this.el.addEventListener("wheel", this._handler, this._eventListenerOptions)
    }
    _onWheel(a) {
        let u;
        const {deltaX: f, deltaY: c} = a;
        if (Math.abs(c) >= Math.abs(f)) {
            if (c > this._threshold)
                u = "Down";
            else if (c < -this._threshold)
                u = "Up";
            else if (this.reset) {
                this.reset(c, this._type);
                return
            }
        } else if (f > this._threshold)
            u = "Right";
        else if (f < -this._threshold)
            u = "Left";
        else if (this.reset) {
            this.reset(f, this._type);
            return
        }
        this._callback({
            e: a,
            diff: {
                y: c,
                x: f
            },
            direction: u,
            type: this._type
        })
    }
    destroy() {
        this.el.removeEventListener("wheel", this._handler, this._eventListenerOptions)
    }
}
class Drag {
    constructor(a, u, f={}) {
        const {threshold: c=120, isDetectOnStart: p=!1, isPreventDefault: d=!1, onStart: m, onUpdate: g, reset: v} = f;
        this.el = a,
        this._callback = u,
        this._threshold = c,
        this._isPreventDefault = d,
        this._onStart = m,
        this._onUpdate = p ? u : g,
        this.reset = v,
        this._type = "drag",
        this._isStart = !1,
        this._mousedownHandler = this._onMousedown.bind(this),
        this.el.addEventListener("mousedown", this._mousedownHandler, passive),
        this._mousemoveHandler = this._onMousemove.bind(this),
        this.el.addEventListener("mousemove", this._mousemoveHandler, this._isPreventDefault ? !1 : passive),
        this._mouseupHandler = this._onMouseup.bind(this),
        this.el.addEventListener("mouseup", this._mouseupHandler, passive)
    }
    _onMousedown(a) {
        this._isStart = !0,
        this._startPosition = getClientPos(a),
        this._onStart && this._onStart(this._startPosition, this._type)
    }
    _onMousemove(a) {
        if (this._isStart && (this._isPreventDefault && a.preventDefault(),
        this._onUpdate)) {
            const u = getClientPos(a)
              , f = u.y - this._startPosition.y
              , c = u.x - this._startPosition.x;
            let p;
            Math.abs(f) >= Math.abs(c) ? f < 0 ? p = "Down" : f > 0 && (p = "Up") : c < 0 ? p = "Right" : c > 0 && (p = "Left"),
            this._onUpdate({
                e: a,
                diff: {
                    y: f,
                    x: c
                },
                direction: p,
                type: this._type
            })
        }
    }
    _onMouseup(a) {
        if (!this._isStart)
            return;
        const u = getClientPos(a)
          , f = u.y - this._startPosition.y
          , c = u.x - this._startPosition.x;
        let p;
        if (Math.abs(f) >= Math.abs(c)) {
            if (f < -this._threshold)
                p = "Down";
            else if (f > this._threshold)
                p = "Up";
            else if (this.reset) {
                this.reset(f, this._type),
                this._isStart = !1;
                return
            }
        } else if (c < -this._threshold)
            p = "Right";
        else if (c > this._threshold)
            p = "Left";
        else if (this.reset) {
            this.reset(c, this._type),
            this._isStart = !1;
            return
        }
        this._callback({
            e: a,
            diff: {
                y: f,
                x: c
            },
            direction: p,
            type: this._type
        }),
        this._isStart = !1
    }
    destroy() {
        this.el.removeEventListener("mousedown", this._mousedownHandler, passive),
        this.el.removeEventListener("mousemove", this._mousemoveHandler, this._isPreventDefault ? !1 : passive),
        this.el.removeEventListener("mouseup", this._mouseupHandler, passive)
    }
}
class Swipe {
    constructor(a, u, f={}) {
        const {threshold: c=50, isDetectOnStart: p=!1, isPreventDefault: d=!1, onStart: m, onUpdate: g, reset: v} = f;
        this.el = a,
        this._callback = u,
        this._threshold = c,
        this._isPreventDefault = d,
        this._onStart = m,
        this._onUpdate = p ? u : g,
        this.reset = v,
        this._type = "swipe",
        this._isStart = !1,
        this._touchstartHandler = this._onTouchstart.bind(this),
        this.el.addEventListener("touchstart", this._touchstartHandler, passive),
        this._touchmoveHandler = this._onTouchmove.bind(this),
        this.el.addEventListener("touchmove", this._touchmoveHandler, this._isPreventDefault ? !1 : passive),
        this._touchendHandler = this._onTouchend.bind(this),
        this.el.addEventListener("touchend", this._touchendHandler, passive)
    }
    _onTouchstart(a) {
        this._isStart = !0,
        this._startPosition = getClientPos(a),
        this._onStart && this._onStart(this._startPosition, this._type)
    }
    _onTouchmove(a) {
        if (this._isStart && (this._isPreventDefault && a.preventDefault(),
        this._onUpdate)) {
            const u = getClientPos(a)
              , f = u.y - this._startPosition.y
              , c = u.x - this._startPosition.x;
            let p;
            Math.abs(f) >= Math.abs(c) ? f < 0 ? p = "Down" : f > 0 && (p = "Up") : c < 0 ? p = "Right" : c > 0 && (p = "Left"),
            this._onUpdate({
                e: a,
                diff: {
                    y: f,
                    x: c
                },
                direction: p,
                type: this._type
            })
        }
    }
    _onTouchend(a) {
        if (!this._isStart)
            return;
        const u = getClientPos(a)
          , f = u.y - this._startPosition.y
          , c = u.x - this._startPosition.x;
        let p;
        if (Math.abs(f) >= Math.abs(c)) {
            if (f < -this._threshold)
                p = "Down";
            else if (f > this._threshold)
                p = "Up";
            else if (this.reset) {
                this.reset(f, this._type),
                this._isStart = !1;
                return
            }
        } else if (c < -this._threshold)
            p = "Right";
        else if (c > this._threshold)
            p = "Left";
        else if (this.reset) {
            this.reset(c, this._type),
            this._isStart = !1;
            return
        }
        this._callback({
            e: a,
            diff: {
                y: f,
                x: c
            },
            direction: p,
            type: this._type
        }),
        this._isStart = !1
    }
    destroy() {
        this.el.removeEventListener("touchstart", this._touchstartHandler, passive),
        this.el.removeEventListener("touchmove", this._touchmoveHandler, this._isPreventDefault ? !1 : passive),
        this.el.removeEventListener("touchend", this._touchendHandler, passive)
    }
}
class Keyboard {
    constructor(a) {
        this._callback = a,
        this._type = "keyboard",
        this._handlerKeydown = this._onKeydown.bind(this),
        document.addEventListener("keydown", this._handlerKeydown),
        this._handlerKeyup = this._onKeyup.bind(this),
        document.addEventListener("keyup", this._handlerKeyup)
    }
    _onKeydown(a) {
        const {key: u} = a;
        if (this._downedKey && u !== this._downedKey)
            return;
        this._downedKey = u;
        let f;
        switch (u) {
        case "ArrowDown":
        case "PageDown":
        case "Down":
            f = "Down";
            break;
        case "ArrowUp":
        case "PageUp":
        case "Up":
            f = "Up";
            break;
        case "ArrowLeft":
        case "Left":
            f = "Left";
            break;
        case "ArrowRight":
        case "Right":
            f = "Right";
            break;
        case "Escape":
        case "Esc":
            f = "Escape";
            break
        }
        this._callback({
            e: a,
            diff: {
                y: 0,
                x: 0
            },
            direction: f,
            type: this._type
        })
    }
    _onKeyup({key: a}) {
        this._downedKey = null
    }
    destroy() {
        document.removeEventListener("keydown", this._handlerKeydown),
        document.removeEventListener("keyup", this._handlerKeyup)
    }
}
class Gesture {
    constructor(a, u, f={}) {
        const {thresholdWheel: c, thresholdDrag: p, thresholdSwipe: d, isDetectOnStart: m=!1, isPreventDefault: g, onStart: v, onUpdate: _, reset: b, disableWheel: P=!1, disableDrag: J=!1, disableSwipe: x=!1, disableKeyboard: w=!1} = f;
        P || (this.wheel = new Wheel(a,u,{
            threshold: c,
            reset: b
        })),
        J || (this.drag = new Drag(a,u,{
            threshold: p,
            isDetectOnStart: m,
            isPreventDefault: g,
            onStart: v,
            onUpdate: _,
            reset: b
        })),
        x || (this.swipe = new Swipe(a,u,{
            threshold: d,
            isDetectOnStart: m,
            isPreventDefault: g,
            onStart: v,
            onUpdate: _,
            reset: b
        })),
        w || (this.keyboard = new Keyboard(u))
    }
    destroy() {
        this.wheel && this.wheel.destroy(),
        this.drag && this.drag.destroy(),
        this.swipe && this.swipe.destroy(),
        this.keyboard && this.keyboard.destroy()
    }
}
(class extends Component {
    static selectorRoot = 'a[href*="#"]:not([href="#"])';
    onInit() {
        this.isDisableHash = "disableHash"in this.el.dataset,
        this.to = this.el.getAttribute("href"),
        this.onTouchStartHandler = this.onTouchStart.bind(this),
        this.swipe = new Swipe(this.el,()=>null,{
            onStart: this.onTouchStartHandler
        })
    }
    onMouseenter() {
        this.path = window.location.pathname
    }
    onTouchStart() {
        this.path = window.location.pathname
    }
    onClick(h) {
        const {cScroll: a} = store;
        if (a.isDisable)
            return;
        if (this.to === "#top") {
            h.preventDefault(),
            !this.isDisableHash && location.hash && window.history.pushState(null, "", window.location.pathname),
            store.isAnchor = !0,
            this.detectOpenModal();
            return
        }
        if (!this.to.startsWith("#") && !this.to.includes(this.path))
            return;
        const u = document.querySelector(this.el.hash.replace(/#(.+)/, (f,c)=>`#${decodeURIComponent(c)}`));
        u && (h.preventDefault(),
        this.isDisableHash || window.history.pushState(null, "", this.to),
        store.isAnchor = !0,
        this.detectOpenModal(u))
    }
    detectOpenModal(h) {
        store.isOpenModal ? (eventBus.emit("closeModal"),
        requestAnimationFrame(()=>{
            this.scrollTo(h)
        }
        )) : this.scrollTo(h)
    }
    scrollTo(h=0) {
        store.cScroll.scrollTo(h, {
            onComplete: ()=>{
                store.isAnchor = !1
            }
        })
    }
    onDestroy() {
        this.swipe.destroy()
    }
}
).register();
var isMergeableObject = function h(a) {
    return isNonNullObject(a) && !isSpecial(a)
};
function isNonNullObject(h) {
    return !!h && typeof h == "object"
}
function isSpecial(h) {
    var a = Object.prototype.toString.call(h);
    return a === "[object RegExp]" || a === "[object Date]" || isReactElement(h)
}
var canUseSymbol = typeof Symbol == "function" && Symbol.for
  , REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(h) {
    return h.$$typeof === REACT_ELEMENT_TYPE
}
function emptyTarget(h) {
    return Array.isArray(h) ? [] : {}
}
function cloneUnlessOtherwiseSpecified(h, a) {
    return a.clone !== !1 && a.isMergeableObject(h) ? deepmerge(emptyTarget(h), h, a) : h
}
function defaultArrayMerge(h, a, u) {
    return h.concat(a).map(function(f) {
        return cloneUnlessOtherwiseSpecified(f, u)
    })
}
function getMergeFunction(h, a) {
    if (!a.customMerge)
        return deepmerge;
    var u = a.customMerge(h);
    return typeof u == "function" ? u : deepmerge
}
function getEnumerableOwnPropertySymbols(h) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(h).filter(function(a) {
        return Object.propertyIsEnumerable.call(h, a)
    }) : []
}
function getKeys(h) {
    return Object.keys(h).concat(getEnumerableOwnPropertySymbols(h))
}
function propertyIsOnObject(h, a) {
    try {
        return a in h
    } catch {
        return !1
    }
}
function propertyIsUnsafe(h, a) {
    return propertyIsOnObject(h, a) && !(Object.hasOwnProperty.call(h, a) && Object.propertyIsEnumerable.call(h, a))
}
function mergeObject(h, a, u) {
    var f = {};
    return u.isMergeableObject(h) && getKeys(h).forEach(function(c) {
        f[c] = cloneUnlessOtherwiseSpecified(h[c], u)
    }),
    getKeys(a).forEach(function(c) {
        propertyIsUnsafe(h, c) || (propertyIsOnObject(h, c) && u.isMergeableObject(a[c]) ? f[c] = getMergeFunction(c, u)(h[c], a[c], u) : f[c] = cloneUnlessOtherwiseSpecified(a[c], u))
    }),
    f
}
function deepmerge(h, a, u) {
    u = u || {},
    u.arrayMerge = u.arrayMerge || defaultArrayMerge,
    u.isMergeableObject = u.isMergeableObject || isMergeableObject,
    u.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
    var f = Array.isArray(a)
      , c = Array.isArray(h)
      , p = f === c;
    return p ? f ? u.arrayMerge(h, a, u) : mergeObject(h, a, u) : cloneUnlessOtherwiseSpecified(a, u)
}
deepmerge.all = function h(a, u) {
    if (!Array.isArray(a))
        throw new Error("first argument should be an array");
    return a.reduce(function(f, c) {
        return deepmerge(f, c, u)
    }, {})
}
;
var deepmerge_1 = deepmerge
  , cjs = deepmerge_1;
const merge = getDefaultExportFromCjs(cjs);
(class extends Component {
    static selectorRoot = "[data-accordion]";
    isOpen = !1;
    isAnimating = !1;
    onInit() {
        if (this.isDestroyed)
            return;
        const {isDisablePc: h=!1, isDisableSp: a=!1} = merge(this.option, JSON.parse(this.el.dataset.accordion || "{}"));
        if (!this.isSp && h || this.isSp && a) {
            this.el.classList.add("-disable"),
            this.isDisable = !0;
            return
        }
        this.elsTrigger = this.el.querySelectorAll("[data-accordion-trigger]"),
        this.elContent = this.el.querySelector("[data-accordion-content]"),
        this.elIcon = this.el.querySelector("[data-accordion-icon]"),
        !(this.elsTrigger.length === 0 || !this.elContent) && (gsapK.set(this.elContent, {
            overflow: "hidden",
            height: 0
        }),
        this._onClickTrigger = this.clickTrigger.bind(this),
        this.elsTrigger.forEach(u=>{
            u.addEventListener("click", this._onClickTrigger, passive)
        }
        ))
    }
    clickTrigger() {
        this.isOpen ? this.close() : this.open()
    }
    open() {
        this.isAnimating || this.isOpen || (this.isOpen = !0,
        this.isAnimating = !0,
        this.elsTrigger.forEach(h=>{
            h.classList.add("-open")
        }
        ),
        this.elIcon && this.elIcon.classList.add("-open"),
        this.elContent.style.willChange = "height",
        gsapK.to(this.elContent, {
            height: "auto",
            duration: .7,
            ease: "power4.out",
            onComplete: ()=>{
                emitResize(!0),
                this.elContent && (this.elContent.style.willChange = "auto"),
                this.isAnimating = !1
            }
        }))
    }
    close() {
        this.isAnimating || !this.isOpen || (this.isOpen = !1,
        this.isAnimating = !0,
        this.elsTrigger.forEach(h=>{
            h.classList.remove("-open")
        }
        ),
        this.elIcon && this.elIcon.classList.remove("-open"),
        this.elContent.style.willChange = "height",
        gsapK.to(this.elContent, {
            height: 0,
            duration: .65,
            ease: "power4.out",
            onComplete: ()=>{
                emitResize(!0),
                this.elContent && (this.elContent.style.willChange = "auto"),
                this.isAnimating = !1
            }
        }))
    }
    onDestroy() {
        this.isDisable || (this.elsTrigger?.forEach(h=>{
            h.removeEventListener("click", this._onClickTrigger, passive)
        }
        ),
        this._onClickTrigger = null,
        this.elsTrigger = null,
        this.elContent = null)
    }
}
).register();
(class extends Component {
    static selectorRoot = "[data-arrow]";
    onMouseenter() {
        arrowIconMove(this)
    }
}
).register();
const param$1 = {
    ease: .5
}
  , THRESHOLD_SWIPE = 60
  , K_SWIPE = 10
  , THRESHOLD_DIRECTION = 1.5
  , CLASS_NAME_DISABLE_BUTTON = "-disable";
class SliderItem {
    constructor(a) {
        this.el = a,
        this._eClickHandler = void 0,
        this.onClick = void 0
    }
    init() {
        this._mouseTarget = this.el,
        this._eClickHandler = this._eClick.bind(this),
        this.el.addEventListener("click", this._eClickHandler)
    }
    _eClick(a) {
        this.onClick && this.onClick(a)
    }
    getPos() {
        const a = document.defaultView.getComputedStyle(this.el, null)
          , u = Number(a.width.replace("px", ""))
          , f = this.el.getBoundingClientRect()
          , c = window.pageXOffset || document.documentElement.scrollLeft
          , p = f.left + c;
        return {
            width: u,
            x: p,
            right: p + u
        }
    }
    onResize() {
        this.width = this.el.clientWidth
    }
    dispose() {
        this.el && (this._mouseTarget.removeEventListener("click", this._eClickHandler),
        this.el = null,
        this._eClickHandler = null),
        this.onClick = null
    }
}
(class extends Component {
    static selectorRoot = "[data-slider]:not([data-slider-manual])";
    _isInit = !1;
    _isDisable = !1;
    item = null;
    _isMouseDown = !1;
    _isMouseMove = !1;
    _isMouseMoveVertical = !1;
    _isProgressDrag = !1;
    _isWheeling = !1;
    _pos = null;
    _posOffset = null;
    _startPos = null;
    _listSize = null;
    _totalSize = 0;
    _listOffsetLeft = 0;
    _follow = 0;
    _isMoving = !1;
    _isMoveUseBtn = !1;
    _isMovingLoop = !1;
    _isLastPositionRight = !1;
    isIntersecting = !1;
    _moveTotal = 0;
    nowKey = 0;
    _nowKeyCurrent = -1;
    _nowKeyNext = -1;
    _nowKeyPrev = -1;
    _nowKeyCurrent2 = -1;
    _nowKeyNext2 = -1;
    _nowKeyPrev2 = -1;
    _nowKeyCurrent3 = -1;
    _nowKeyNext3 = -1;
    _nowKeyPrev3 = -1;
    _eMouseOverHandler = void 0;
    _eMouseOutHandler = void 0;
    _eMouseDownHandler = void 0;
    _eMouseMoveHandler = void 0;
    _eMouseUpHandler = void 0;
    _eWindowMouseUpHandler = void 0;
    _eClickNextBtnHandler = void 0;
    _eClickPrevBtnHandler = void 0;
    _eClickNextSlideHandler = void 0;
    _eClickPrevSlideHandler = void 0;
    _moveTween = void 0;
    _lastPos = void 0;
    onClickItem = void 0;
    indexCurrent = 0;
    positionLoopOneSide = 0;
    xNext = 0;
    xPrev = 0;
    mouse = null;
    mouseOld = null;
    mouseStart = null;
    mouseDiff = null;
    mouseDist = null;
    progress = {
        value: 0,
        start: 0,
        total: 0,
        offset: 0
    };
    onInit() {
        const {el: h} = this
          , {isDisablePc: a=!1, isDisableSp: u=!1, isLoop: f=!1, isLoopOneSide: c=!1, isAutoPlay: p=!1, interval: d=5, easePaginationProgress: m, fps: g=60, isLastPositionRight: v=!1, isManual: _=!1} = h.dataset.slider ? JSON.parse(h.dataset.slider) : {};
        if (!this.isSp && a || this.isSp && u) {
            h.classList.add("-disable"),
            this._isDisable = !0;
            return
        }
        this._option = {
            ...this.option,
            isDisablePc: a,
            isDisableSp: u,
            isLoop: f,
            isLoopOneSide: c,
            isAutoPlay: p,
            interval: d,
            isLastPositionRight: v,
            isManual: _
        },
        this.framerate = 60 / g,
        this.init()
    }
    init() {
        if (this._isDisable || this._isInit)
            return;
        this._isInit = !0;
        const {el: h, _option: a} = this;
        this._isLoopOneSide = this._option.isLoopOneSide === "pc" && !this.isSp || this._option.isLoopOneSide === "sp" && this.isSp || this._option.isLoopOneSide === !0,
        this._isLoop = this._option.isLoop === "pc" && !this.isSp || this._option.isLoop === "sp" && this.isSp || this._option.isLoop === !0 || this._isLoopOneSide,
        this._lastSlide = a.lastSlide || 1,
        this._lastSlideSp = a.lastSlideSp || 1,
        this.onMove = a.onMove,
        a.onChange && (this.onChange = a.onChange),
        this.isManualAddBackground = a.isManualAddBackground,
        this.elList = h.querySelector("[data-slider-list]"),
        this._parent = h,
        this._elCurrent = h.querySelectorAll("[data-slider-current]"),
        this._elAll = h.querySelectorAll("[data-slider-all]"),
        this._nextBtn = h.querySelector("[data-slider-next]"),
        this._prevBtn = h.querySelector("[data-slider-prev]"),
        this._progress = h.querySelector("[data-slider-progress]"),
        this._progressBar = h.querySelector("[data-slider-progress-bar]"),
        this._progressCircle = h.querySelector("[data-slider-progress-circle]"),
        this._paginationProgress = h.querySelector("[data-slider-pagination-progress]"),
        this._pos = {
            x: 0,
            y: 0
        },
        this._posOffset = {
            x: 0,
            y: 0
        },
        this._startPos = {
            x: 0,
            y: 0
        },
        this._listSize = {
            x: 0,
            y: 0
        },
        this._totalSize = 0,
        this.mouse = {
            x: 0,
            y: 0
        },
        this.mouseOld = {
            x: 0,
            y: 0
        },
        this.mouseStart = {
            x: 0,
            y: 0
        },
        this.mouseDiff = {
            x: 0,
            y: 0
        },
        this.mouseDist = {
            x: 0,
            y: 0
        },
        this.wheelTg = {
            x: 0,
            y: 0
        },
        this._progress && (this.progress.total = this._progress.getBoundingClientRect().width,
        this.progress.offset = this.el.offsetLeft,
        this._progressBar.style.transformOrigin = "left"),
        this.count = 0;
        let u = this.elList.querySelectorAll("[data-slider-item]");
        const f = !!this.el.dataset.sliderOriginalCount;
        if (this._isLoop && !f) {
            const d = document.createDocumentFragment();
            u.forEach(g=>{
                d.append(g.cloneNode(!0)),
                "sliderItemMore"in g.dataset || this.count++
            }
            );
            const m = d.cloneNode(!0);
            this._isLoopOneSide && Array.prototype.forEach.call(d.children, (g,v)=>{
                g.style.visibility = "hidden"
            }
            ),
            this.elList.prepend(d),
            this.elList.append(m),
            u = this.elList.querySelectorAll("[data-slider-item]"),
            this.elsOutOfOneSide = Array.prototype.slice.call(u, 0, this.count),
            this.el.dataset.sliderOriginalCount = this.count
        } else
            this.count = Number(this.el.dataset.sliderOriginalCount),
            this.elsOutOfOneSide = Array.prototype.slice.call(u, 0, this.count);
        this.item = Array.prototype.map.call(u, (d,m)=>{
            const g = new SliderItem(d);
            return g.init(),
            g.onClick = v=>{
                this._isMoveUseBtn || this._isMouseMove && (v.preventDefault(),
                v.stopPropagation(),
                this._isMouseMove = !1,
                this.enableClick())
            }
            ,
            !this._isLoop && !("sliderItemMore"in d.dataset) && this.count++,
            g
        }
        ),
        this._eMouseOverHandler = this._eMouseOver.bind(this),
        addMouseenterListener(this._parent, this._eMouseOverHandler),
        this._eMouseOutHandler = this._eMouseOut.bind(this),
        addMouseleaveListener(this._parent, this._eMouseOutHandler),
        this._eMouseDownHandler = this._eMouseDown.bind(this),
        this._parent.addEventListener("mousedown", this._eMouseDownHandler, passive),
        this._eDragstartHandler = this._eDragstart.bind(this),
        this._parent.addEventListener("dragstart", this._eDragstartHandler),
        this._eMouseMoveHandler = this._eMouseMove.bind(this),
        this._parent.addEventListener("mousemove", this._eMouseMoveHandler),
        this._eMouseUpHandler = this._eMouseUp.bind(this),
        this._parent.addEventListener("mouseup", this._eMouseUpHandler, passive),
        this._eWindowMouseUpHandler = this._eMouseUp.bind(this),
        window.addEventListener("mouseup", this._eWindowMouseUpHandler, passive),
        this._eMouseDownHandler = this._eMouseDown.bind(this),
        this._parent.addEventListener("touchstart", this._eMouseDownHandler, passive),
        this._eMouseMoveHandler = this._eMouseMove.bind(this),
        this._parent.addEventListener("touchmove", this._eMouseMoveHandler),
        this._eMouseUpHandler = this._eMouseUp.bind(this),
        this._parent.addEventListener("touchend", this._eMouseUpHandler, passive),
        this._eWindowMouseUpHandler = this._eMouseUp.bind(this),
        window.addEventListener("touchend", this._eWindowMouseUpHandler, passive),
        this._nextBtn && (this._eClickNextBtnHandler = this._eClickNextBtn.bind(this),
        this._nextBtn.addEventListener("click", this._eClickNextBtnHandler)),
        this._prevBtn && (this._eClickPrevBtnHandler = this._eClickPrevBtn.bind(this),
        this._prevBtn.addEventListener("click", this._eClickPrevBtnHandler),
        this._prevBtn.classList.add(CLASS_NAME_DISABLE_BUTTON),
        this._prevBtn.style.pointerEvents = "none"),
        this._progressCircle && (this._progressCircle.addEventListener("mousedown", this._eMouseDownHandler, passive),
        this._progressCircle.addEventListener("mouseup", this._eMouseUpHandler, passive),
        this._progressCircle.addEventListener("touchstart", this._eMouseDownHandler, passive),
        this._progressCircle.addEventListener("touchend", this._eMouseUpHandler, passive)),
        this._setCurrent(),
        this._setAll();
        const c = h.dataset.sliderInitialPosition;
        if (c) {
            const d = c - 1
              , m = h.querySelectorAll("[data-slider-item]").length;
            this._moveTo(m === d ? 0 : d, {
                disableAnimation: !0
            })
        } else
            this._isLoop && this._moveTo(this.count, {
                disableAnimation: !0
            });
        this.onResize(),
        this.widthItem = this.item[0].width,
        this._setProgress(this._getProgress()),
        this.elList.style.cursor = "grab";
        const p = debounce(()=>{
            if (!this._isWheeling)
                return;
            const d = Math.min(Math.max(this._getNowItemKey(), this._isLoopOneSide && this.positionLoopOneSide === 0 ? this.count : 0), this.item.length - this._lastSlide);
            this._moveTo(d, {
                isDrag: !0
            }),
            this._isWheeling = !1
        }
        , 100);
        this.wheel = new Wheel(this.el,({e: d, diff: m, direction: g})=>{
            (g === "Left" || g === "Right") && (d.preventDefault(),
            d.stopPropagation(),
            this._isWheeling || (this._moveTotal = 0,
            this._startPos.x = this._pos.x,
            this._isWheeling = !0,
            this.wheelTg.x = this._pos.x,
            this._option.isAutoPlay && this.stopTimer()),
            this.wheelTg.x -= m.x * .3),
            p()
        }
        ,{
            eventListenerOptions: !1
        })
    }
    setTimer() {
        this.timer || (this.tlTimerProgress = gsapK.fromTo(this._paginationProgress, {
            scaleX: 0,
            transformOrigin: "left"
        }, {
            scaleX: 1,
            duration: this._option.interval,
            ease: this._option.easePaginationProgress
        }),
        this.timer = gsapWithCSS.delayedCall(this._option.interval, ()=>{
            gsapK.set(this._paginationProgress, {
                scaleX: 0
            }),
            !this._isLoop && this.nowKey >= this.item.length - (this.isSp ? this._lastSlideSp : this._lastSlide) ? this._moveTo(0) : this._move(!0)
        }
        ))
    }
    stopTimer() {
        this.timer && (gsapK.set(this._paginationProgress, {
            scaleX: 0
        }),
        this.timer.kill(),
        this.tlTimerProgress.kill(),
        this.timer = null)
    }
    onResize() {
        if (this._isDisable || !this._isInit)
            return;
        const h = this._parent.getBoundingClientRect();
        this._lastPos = this._getLastPos(),
        this._listOffsetLeft = parseInt(h.left + parseInt(document.defaultView.getComputedStyle(this._parent, null).paddingLeft)),
        this._listSize.x = this._lastPos.right + this._pos.x * -1 + this._listOffsetLeft,
        this._maxMove = Math.floor(h.width / this._lastPos.width) * this._lastPos.width * .6,
        this.elList.style.transform = "",
        this._totalSize = this.item[this.item.length - 1].el.getBoundingClientRect().left - this.elList.getBoundingClientRect().left + this.elList.scrollLeft,
        this.item.forEach(a=>{
            a.onResize()
        }
        ),
        this._progress && (this.progress.total = this._progress.getBoundingClientRect().width,
        this.progress.offset = this.el.offsetLeft),
        this._initialX = this._pos.x,
        this._moveTo(this.nowKey, {
            disableAnimation: !0
        })
    }
    play() {
        this._isPlay || (this._isPlay = !0,
        this.playTick())
    }
    pause() {
        this._isPlay && (this._isPlay = !1,
        this.pauseTick())
    }
    _eClickNextBtn(h) {
        h && h.stopPropagation(),
        !(this.mouseDiffStartX > 0) && this._move(!0)
    }
    _eClickPrevBtn(h) {
        h && h.stopPropagation(),
        !(this.mouseDiffStartX > 0) && this._move(!1)
    }
    _eDragstart(h) {
        h.preventDefault()
    }
    _eMouseOver(h) {}
    _eMouseOut(h) {}
    _eMouseDown(h) {
        if (this._isMouseDown)
            return;
        this.el.style.cursor = "",
        document.documentElement.style.cursor = "grabbing",
        "sliderProgressCircle"in h.target.dataset && (this._isProgressDrag = !0,
        this._progressCircle && this._progressCircle.classList.add("-grabbing"));
        const {x: a, y: u} = getClientPos(h);
        this.mouseStart.x = this.mouse.x = a,
        this.mouseStart.y = this.mouse.y = u,
        this.mouseDiff.x = 0,
        this.mouseDiff.y = 0,
        this._isMouseDown = !0,
        this._moveTotal = 0,
        this._startPos.x = this._isProgressDrag ? -this._pos.x : this._pos.x,
        this.onMouseDownHandle && this.onMouseDownHandle()
    }
    _eMouseMove(h) {
        if (!this._isMoving) {
            if (this.progress.start = h.clientX,
            this._isMouseDown) {
                this._option.isAutoPlay && this.stopTimer(),
                this.mouseOld.x = this.mouse.x,
                this.mouseOld.y = this.mouse.y;
                const {x: a, y: u} = getClientPos(h);
                this.mouse.x = a,
                this.mouse.y = u,
                this.mouseDiff.x = this.mouseOld.x - this.mouse.x,
                this.mouseDiff.y = this.mouseOld.y - this.mouse.y,
                this.elList.classList.add("-drag");
                const f = u - this.mouseStart.y
                  , c = a - this.mouseStart.x;
                if (c === 0 || Math.abs(f) / Math.abs(c) >= THRESHOLD_DIRECTION) {
                    this._isMouseMoveVertical = !0;
                    return
                } else
                    h.cancelable && h.preventDefault()
            } else
                return;
            this._isMouseMoveVertical = !1,
            this._isMouseMove = !0,
            this.disableClick(),
            this._cancelMove()
        }
    }
    _eMouseUp(h) {
        if (this._isMouseDown) {
            if (this._isMouseDown = !1,
            this.onMouseUpHandle && this.onMouseUpHandle(),
            this.mouseDiffStartX = Math.abs(this.mouse.x - this.mouseStart.x),
            this.mouseDiffStartX > 0 && !this._isMouseMoveVertical)
                if (!this.isSp || this._isProgressDrag) {
                    const a = Math.min(Math.max(this._getNowItemKey(), this._isLoopOneSide && this.positionLoopOneSide === 0 ? this.count : 0), this.item.length - this._lastSlide);
                    this._moveTo(a, {
                        isDrag: !0
                    })
                } else {
                    let a = this.nowKey;
                    const u = this.mouseDiff.x * K_SWIPE;
                    Math.abs(-(this.mouse.x - this.mouseStart.x) + u) >= THRESHOLD_SWIPE && (a = this.mouseDiff.x > 0 ? this.nowKey + (1 + Math.floor(Math.abs(u) / 200)) : this.mouseDiff.x < 0 ? this.nowKey - (1 + Math.floor(Math.abs(u) / 200)) : this.nowKey),
                    a = Math.min(Math.max(a, this._isLoopOneSide && this.positionLoopOneSide === 0 ? this.count : 0), this.item.length - this._lastSlideSp),
                    this._moveTo(a, {
                        isDrag: !0
                    })
                }
            else
                this._option.isAutoPlay && this.setTimer();
            this.mouseDiff.x = 0,
            this.mouseDiff.y = 0,
            this._isProgressDrag = !1,
            document.documentElement.style.cursor = "",
            this._progressCircle && (this._progressCircle.style.cursor = ""),
            this.elList.style.cursor = "grab",
            this.elList.classList.remove("-drag")
        }
    }
    setWillChange() {
        this.elList.style.willChange = "transform"
    }
    resetWillChange() {
        this.elList.style.willChange = "auto"
    }
    disableClick() {
        this.item.forEach(({el: h})=>{
            h.style.pointerEvents = "none"
        }
        )
    }
    enableClick() {
        this.item.forEach(({el: h})=>{
            h.style.pointerEvents = "auto"
        }
        )
    }
    onTick(h, a, u) {
        if (this._isDisable || u % this.framerate !== 0 || this._movingLoop)
            return;
        const {ease: f} = param$1;
        let c;
        if (this._progress && (this.progress.value = (this.progress.start - this.progress.offset) / this.progress.total,
        c = (this._listSize.x - this._listSize.x / this.item.length) * this.progress.value),
        this._isMouseDown && !this._isMouseMoveVertical) {
            this.mouseDist.x = this._isProgressDrag ? (this.mouseStart.x - this.mouse.x) * (this.item.length / 2) : this.mouseStart.x - this.mouse.x,
            this.mouseDist.y = this.mouseStart.y - this.mouse.y;
            const g = this.mouseDist.x;
            this._moveTotal += Math.abs(g);
            const v = this._startPos.x - g;
            this._isProgressDrag && this.progress ? this._pos.x -= (c + this._pos.x) * f : this._pos.x += (v - this._pos.x) * f
        } else
            this._isWheeling ? this._pos.x += (this.wheelTg.x - this._pos.x) * f : this._pos.x += this._follow;
        this._lastPos || (this._lastPos = this._getLastPos());
        const p = this.isSp ? this._lastSlideSp : this._lastSlide
          , d = this._isLoopOneSide && this.positionLoopOneSide === 0 ? this._getXFromItemKey(this.count) : 0
          , m = -this._listSize.x + (this._option._isLastPositionRight ? this.el.clientWidth : this._lastPos.width * p);
        this._pos.x > d && (this._pos.x += (d - this._pos.x) * f),
        this._pos.x < m && (this._pos.x += (m - this._pos.x) * f),
        !this._isMoveUseBtn && this.elList && this.setListPositionX(),
        this._isMouseDown && this._setProgress(this._getProgress())
    }
    setListPositionX(h) {
        this.xPrev = this.xNext,
        this.xNext = this._pos.x + this._posOffset.x,
        this.xReal = this.xNext - this._initialX,
        gsapWithCSS.set(this.elList, {
            x: this.xNext
        }),
        this.onMove && this.onMove(this.xReal, h ? 0 : this.xNext - this.xPrev)
    }
    _move(h) {
        if (this._isMoveUseBtn)
            return;
        this._isMoveUseBtn = !0,
        this._cancelMove();
        let a = this._getNowItemKey();
        if (h) {
            a++;
            const u = this.isSp ? this._lastSlideSp : this._lastSlide;
            a >= this.item.length - u && (a = this.item.length - u)
        } else
            a--,
            a < 0 && (a = 0);
        this._moveTo(a)
    }
    _moveTo(h, {isDrag: a, disableAnimation: u}={}) {
        if (!u && (this._isMoving || this._movingLoop))
            return;
        const {isAutoPlay: f} = this._option;
        this._isMoving = !0,
        (h >= this.count * 2 || h < this.count) && (this._movingLoop = !0),
        f && this.stopTimer(),
        this.nowKey = h,
        this._setCurrent(),
        this._setBtnClass(),
        this.onChange && this.onChange(h);
        const c = this._getXFromItemKey(h);
        this._moveTween = gsapK.to(this._pos, {
            x: c,
            duration: u ? 0 : a ? .6 : .8,
            ease: a ? "power2.out" : "power2.inOut",
            overwrite: !0,
            onUpdate: ()=>{
                if (this.elList && this._pos && this._posOffset) {
                    if (this.changeSlideAnimation && u) {
                        const p = gsapWithCSS.timeline();
                        this.changeSlideAnimation({
                            tl: p,
                            changeSlide: ()=>{
                                this.setListPositionX(u)
                            }
                        })
                    } else
                        this.setListPositionX(u);
                    this._setProgress(this._getProgress())
                }
            }
            ,
            onComplete: ()=>{
                this.elList && this._pos && (this._pos.x = c,
                this._isMouseMove = !1,
                this._isMoving = !1,
                this._isMoveUseBtn = !1,
                this._movingLoop = !1,
                this.enableClick(),
                u && (this.setListPositionX(u),
                this._startPos.x = this._isProgressDrag ? -this._pos.x : this._pos.x),
                this._isLoop && (h >= this.count * 2 ? (this._moveTo(h - this.count, {
                    disableAnimation: !0
                }),
                this._isLoopOneSide && (this.positionLoopOneSide++,
                this.positionLoopOneSide > 0 && this.elsOutOfOneSide.forEach((p,d)=>{
                    p.style.visibility = ""
                }
                ))) : h < this.count ? (this._moveTo(h + this.count, {
                    disableAnimation: !0
                }),
                this._isLoopOneSide && (this.positionLoopOneSide--,
                this.positionLoopOneSide === 0 && this.elsOutOfOneSide.forEach((p,d)=>{
                    p.style.visibility = "hidden"
                }
                ))) : f && this.isIntersecting && this.setTimer()),
                this._setBtnClass())
            }
        })
    }
    _cancelMove() {
        this._isMoving && (this._moveTween && this._moveTween.kill(),
        this._isMouseMove = !1,
        this._isMoveUseBtn = !1,
        this._isMoving = !1)
    }
    _setCurrent() {
        this._isInit && this._elCurrent.length && !("sliderItemMore"in this.item[this.nowKey].el.dataset) && (this.indexCurrent = getLoopedNumber(this.nowKey, this.count),
        this._elCurrent.forEach(h=>{
            h.textContent = this.indexCurrent + 1 < 10 ? "0" + (this.indexCurrent + 1) : this.indexCurrent + 1
        }
        ),
        this.nowKey >= 0 && (this._nowKeyCurrent >= 0 && (this.item[this._nowKeyCurrent].el.classList.remove("-current"),
        this.item[this._nowKeyNext].el.classList.remove("-next"),
        this.item[this._nowKeyPrev].el.classList.remove("-prev"),
        this._isLoop && (this.item[this._nowKeyCurrent2].el.classList.remove("-current"),
        this.item[this._nowKeyNext2].el.classList.remove("-next"),
        this.item[this._nowKeyPrev2].el.classList.remove("-prev"),
        this.item[this._nowKeyCurrent3].el.classList.remove("-current"),
        this.item[this._nowKeyNext3].el.classList.remove("-next"),
        this.item[this._nowKeyPrev3].el.classList.remove("-prev"))),
        this._nowKeyCurrent = this.nowKey,
        this._nowKeyNext = getLoopedNumber(this.nowKey + 1, this.item.length),
        this._nowKeyPrev = getLoopedNumber(this.nowKey - 1, this.item.length),
        this.item[this._nowKeyCurrent].el.classList.add("-current"),
        this.item[this._nowKeyNext].el.classList.add("-next"),
        this.item[this._nowKeyPrev].el.classList.add("-prev"),
        this._isLoop && (this._nowKeyCurrent2 = getLoopedNumber(this._nowKeyCurrent + this.count, this.item.length),
        this._nowKeyNext2 = getLoopedNumber(this._nowKeyCurrent2 + 1, this.item.length),
        this._nowKeyPrev2 = getLoopedNumber(this._nowKeyCurrent2 - 1, this.item.length),
        this._nowKeyCurrent3 = getLoopedNumber(this._nowKeyCurrent - this.count, this.item.length),
        this._nowKeyNext3 = getLoopedNumber(this._nowKeyCurrent3 + 1, this.item.length),
        this._nowKeyPrev3 = getLoopedNumber(this._nowKeyCurrent3 - 1, this.item.length),
        this.item[this._nowKeyCurrent2].el.classList.add("-current"),
        this.item[this._nowKeyNext2].el.classList.add("-next"),
        this.item[this._nowKeyPrev2].el.classList.add("-prev"),
        this.item[this._nowKeyCurrent3].el.classList.add("-current"),
        this.item[this._nowKeyNext3].el.classList.add("-next"),
        this.item[this._nowKeyPrev3].el.classList.add("-prev"))))
    }
    _setAll() {
        this._elAll.length && this._elAll.forEach(h=>{
            h.textContent = this.count < 10 ? "0" + this.count : this.count
        }
        )
    }
    _setBtnClass() {
        if (this._nextBtn) {
            this._nextBtn.classList.remove(CLASS_NAME_DISABLE_BUTTON),
            this._nextBtn.style.pointerEvents = "",
            this._prevBtn.classList.remove(CLASS_NAME_DISABLE_BUTTON),
            this._prevBtn.style.pointerEvents = "";
            const h = this.nowKey;
            (h === 0 || this._isLoopOneSide && this.positionLoopOneSide === 0 && h === this.count) && (this._prevBtn.classList.add(CLASS_NAME_DISABLE_BUTTON),
            this._prevBtn.style.pointerEvents = "none");
            const a = this.isSp ? this._lastSlideSp : this._lastSlide;
            h >= this.item.length - a && (this._nextBtn.classList.add(CLASS_NAME_DISABLE_BUTTON),
            this._nextBtn.style.pointerEvents = "none")
        }
    }
    _setProgress(h) {
        this._progressBar && (gsapWithCSS.set(this._progressBar, {
            scaleX: h
        }),
        this._progressCircle && gsapWithCSS.set(this._progressCircle, {
            left: h * 100 + "%"
        }))
    }
    _getNowItemKey() {
        let h = 0
          , a = 9999;
        this._listOffsetLeft = parseInt(this._parent.getBoundingClientRect().left + parseInt(document.defaultView.getComputedStyle(this._parent, null).paddingLeft)) + Math.min(Math.max(this.mouseDiff.x * 20, -this._maxMove), this._maxMove);
        const u = this.item.length;
        for (let f = 0; f < u; f++) {
            const c = this.item[f]
              , p = Math.abs(c.getPos().x - this._listOffsetLeft);
            p < a && (a = p,
            h = f)
        }
        return h
    }
    _getXFromItemKey(h) {
        if (this.isDestroyed)
            return;
        const {sizeDifference: a} = this._option;
        let u = 0
          , f = 0
          , c = 0
          , p = 1;
        if (a) {
            h !== 0 && (u = this.el.clientWidth / 2,
            f = this.item[h].getPos().width / 2);
            for (let m = 0; m < h; m++)
                c += this.item[m].getPos().width
        } else
            c = this.item[0].getPos().width,
            p = h;
        const d = parseInt(document.defaultView.getComputedStyle(this.item[0].el, null).marginRight);
        return this._option._isLastPositionRight && h >= this.item.length - (this.isSp ? this._lastSlideSp : this._lastSlide) ? -this._listSize.x + this.el.clientWidth : -(c + d - u + f) * p
    }
    _getProgress() {
        return Math.abs(this._pos.x) >= this._totalSize - 1 ? 1 : this._pos.x > 0 ? 0 : Math.abs(this._pos.x) / this._totalSize
    }
    _getLastPos() {
        return this.item[this.item.length - 1].getPos()
    }
    onIntersect({isIntersecting: h}) {
        this._isDisable || !this._option || (this.isIntersecting = h,
        h ? (this.play(),
        this._option.isAutoPlay && this.setTimer()) : (this._option.isAutoPlay && this.stopTimer(),
        this.pause()))
    }
    onDestroy() {
        this._isDisable || (this._isInit && (this.pause(),
        this._option?.isAutoPlay && this.stopTimer(),
        this.item?.forEach(h=>{
            h.dispose()
        }
        ),
        removeMouseenterListener(this._parent, this._eMouseOverHandler),
        removeMouseleaveListener(this._parent, this._eMouseOutHandler),
        this._parent.removeEventListener("mousedown", this._eMouseDownHandler, passive),
        this._parent.removeEventListener("dragstart", this._eDragstartHandler),
        this._parent.removeEventListener("mousemove", this._eMouseMoveHandler),
        this._parent.removeEventListener("mouseup", this._eMouseUpHandler, passive),
        window.removeEventListener("mouseup", this._eWindowMouseUpHandler, passive),
        this._parent.removeEventListener("touchstart", this._eMouseDownHandler, passive),
        this._parent.removeEventListener("touchmove", this._eMouseMoveHandler),
        this._parent.removeEventListener("touchend", this._eMouseUpHandler, passive),
        window.removeEventListener("touchend", this._eWindowMouseUpHandler, passive),
        this._nextBtn && this._nextBtn.removeEventListener("click", this._eClickNextBtnHandler),
        this._prevBtn && this._prevBtn.removeEventListener("click", this._eClickPrevBtnHandler),
        this._progressCircle && (this._progressCircle.removeEventListener("mousedown", this._eMouseDownHandler, passive),
        this._progressCircle.removeEventListener("mouseup", this._eMouseUpHandler, passive),
        this._progressCircle.removeEventListener("touchstart", this._eMouseDownHandler, passive),
        this._progressCircle.removeEventListener("touchend", this._eMouseUpHandler, passive)),
        this.wheel && this.wheel.destroy(),
        this._isDisable = !1,
        this.item = null,
        this._isMouseDown = !1,
        this._isMouseMove = !1,
        this._isMouseMoveVertical = !1,
        this._isProgressDrag = !1,
        this._pos = null,
        this._posOffset = null,
        this._startPos = null,
        this._listSize = null,
        this._totalSize = 0,
        this._listOffsetLeft = 0,
        this._follow = 0,
        this._isMoving = !1,
        this._isMoveUseBtn = !1,
        this._moveTotal = 0,
        this.nowKey = 0,
        this._nowKeyCurrent = -1,
        this._nowKeyNext = -1,
        this._nowKeyPrev = -1,
        this._nowKeyCurrent2 = -1,
        this._nowKeyNext2 = -1,
        this._nowKeyPrev2 = -1,
        this._nowKeyCurrent3 = -1,
        this._nowKeyNext3 = -1,
        this._nowKeyPrev3 = -1,
        this._eMouseOverHandler = void 0,
        this._eMouseOutHandler = void 0,
        this._eMouseDownHandler = void 0,
        this._eMouseMoveHandler = void 0,
        this._eMouseUpHandler = void 0,
        this._eWindowMouseUpHandler = void 0,
        this._eClickNextBtnHandler = void 0,
        this._eClickPrevBtnHandler = void 0,
        this._eClickNextSlideHandler = void 0,
        this._eClickPrevSlideHandler = void 0,
        this._moveTween = void 0,
        this._lastPos = void 0,
        this.onClickItem = void 0,
        this.indexCurrent = 0,
        this.mouse = null,
        this.mouseOld = null,
        this.mouseStart = null,
        this.mouseDiff = null,
        this.mouseDist = null),
        this._option = null)
    }
}
).register();
(class extends Component {
    static selectorRoot = "[data-card]:not([data-card-manual])";
    onInit() {
        const {isYellow: h=!1} = this.el.dataset.card ? JSON.parse(this.el.dataset.card) : {};
        this.isYellow = h;
        const {isCareer: a=!1} = this.el.dataset.card ? JSON.parse(this.el.dataset.card) : {};
        this.isCareer = a
    }
    async onIntersect({isIntersecting: h}) {
        h && store.CEye.initLottie()
    }
    onMouseenter(h) {
        arrowIconMove(this);
        const {x: a, y: u} = getClientPos(h);
        store.CEye.show(a - this.centerX, u - this.centerY, this.isYellow, this.isCareer)
    }
    onMousemove(h) {
        const {x: a, y: u} = getClientPos(h);
        store.CEye.move(a - this.centerX, u - this.centerY)
    }
    onMouseleave() {
        store.CEye.hide()
    }
    onResize() {
        const {width: h, height: a} = this.el.getBoundingClientRect();
        this.centerX = h * .5,
        this.centerY = a * .5
    }
}
).register();
const SPEED = 60
  , SPEED_SP = 30;
class Marquee extends Component {
    static selectorRoot = "[data-marquee]:not([data-marquee-manual])";
    onInit() {
        if (this.isDestroyed)
            return;
        const {el: a} = this
          , u = a.closest("[data-modal]")
          , {isDuplicate: f=!0, isShort: c=!1, isInModal: p=!!u, isStop: d=!1, isStopSp: m=!1, speed: g=SPEED, speedSp: v=SPEED_SP} = a.dataset.marquee ? JSON.parse(a.dataset.marquee) : {};
        this._isInModal = p,
        this._isInModal && (this._modalId = u.id || u.dataset.modal),
        this.elWrapper = a.querySelector("[data-marquee-wrapper]");
        const _ = this.elInner = a.querySelector("[data-marquee-inner]");
        if (this.elSingle = a.querySelector("[data-marquee-single]"),
        this.isStop = d,
        this.isStopSp = m,
        this.speed = this.isSp ? v : g,
        !this.isSp && this.isStop || this.isSp && this.isStopSp ? this.pauseTick() : setTimeout(()=>{
            this.setSize()
        }
        , 100),
        f) {
            this.elsClone = [];
            {
                const b = this.elSingle.cloneNode(!0);
                _.append(b),
                this.elsClone.push(b)
            }
            {
                const b = this.elSingle.cloneNode(!0);
                _.append(b),
                this.elsClone.push(b)
            }
            if (c)
                if (this.isSp) {
                    if (this.isSp) {
                        {
                            const b = this.elSingle.cloneNode(!0);
                            _.append(b),
                            this.elsClone.push(b)
                        }
                        {
                            const b = this.elSingle.cloneNode(!0);
                            _.append(b),
                            this.elsClone.push(b)
                        }
                        {
                            const b = this.elSingle.cloneNode(!0);
                            _.append(b),
                            this.elsClone.push(b)
                        }
                    }
                } else {
                    {
                        const b = this.elSingle.cloneNode(!0);
                        _.append(b),
                        this.elsClone.push(b)
                    }
                    {
                        const b = this.elSingle.cloneNode(!0);
                        _.append(b),
                        this.elsClone.push(b)
                    }
                    {
                        const b = this.elSingle.cloneNode(!0);
                        _.append(b),
                        this.elsClone.push(b)
                    }
                    {
                        const b = this.elSingle.cloneNode(!0);
                        _.append(b),
                        this.elsClone.push(b)
                    }
                    {
                        const b = this.elSingle.cloneNode(!0);
                        _.append(b),
                        this.elsClone.push(b)
                    }
                }
        }
    }
    setSize() {
        this._widthSingle = this.option.widthSingle || this.elSingle.getBoundingClientRect().width
    }
    onIntersect({isIntersecting: a}) {
        this.isDestroyed || this._isInModal || !this.isSp && this.isStop || this.isSp && this.isStopSp || (a ? this.play() : this.pause())
    }
    play() {
        this.elWrapper && (this._isPlay || (this._isPlay = !0,
        this.elWrapper.style.willChange = "transform",
        this.playTick()))
    }
    pause() {
        this._isPlay && (this._isPlay = !1,
        this.pauseTick(),
        this.elWrapper && (this.elWrapper.style.willChange = ""))
    }
    onTick(a) {
        this.elWrapper.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,-${a * this.speed % this._widthSingle},0,0,1)`
    }
    onStartOpenModal(a) {
        if (!(!this.isSp && this.isStop || this.isSp && this.isStopSp)) {
            if (setTimeout(()=>{
                this.setSize()
            }
            , 100),
            this._isInModal) {
                a === this._modalId && this.play();
                return
            }
            this._isPlayPrev = this._isPlay,
            this._isPlayPrev && this.pause()
        }
    }
    onStartCloseModal() {
        !this.isSp && this.isStop || this.isSp && this.isStopSp || this._isPlayPrev && (this.play(),
        this._isPlayPrev = !1)
    }
    onCompleteCloseModal() {
        if (!(!this.isSp && this.isStop || this.isSp && this.isStopSp) && this._isInModal) {
            this.pause();
            return
        }
    }
    onDestroy() {
        this.pause(),
        this._callbackCall && (store.cScroll.removeView(this._callbackCall),
        this._callbackCall = null),
        this.elsClone && this.elsClone.forEach((a,u)=>{
            a.remove()
        }
        ),
        this._listener = null
    }
}
Marquee.register();
var tt = Object.defineProperty
  , nt = (h,a,u)=>a in h ? tt(h, a, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: u
}) : h[a] = u
  , $ = (h,a,u)=>(nt(h, typeof a != "symbol" ? a + "" : a, u),
u);
function st(h, a) {
    const u = Object.create(null)
      , f = h.split(",");
    for (let c = 0; c < f.length; c++)
        u[f[c]] = !0;
    return a ? c=>!!u[c.toLowerCase()] : c=>!!u[c]
}
function de(h) {
    if (y(h)) {
        const a = {};
        for (let u = 0; u < h.length; u++) {
            const f = h[u]
              , c = N(f) ? it(f) : de(f);
            if (c)
                for (const p in c)
                    a[p] = c[p]
        }
        return a
    } else if (N(h) || S(h))
        return h
}
const rt = /;(?![^(]*\))/g
  , ot = /:(.+)/;
function it(h) {
    const a = {};
    return h.split(rt).forEach(u=>{
        if (u) {
            const f = u.split(ot);
            f.length > 1 && (a[f[0].trim()] = f[1].trim())
        }
    }
    ),
    a
}
function me(h) {
    let a = "";
    if (N(h))
        a = h;
    else if (y(h))
        for (let u = 0; u < h.length; u++) {
            const f = me(h[u]);
            f && (a += f + " ")
        }
    else if (S(h))
        for (const u in h)
            h[u] && (a += u + " ");
    return a.trim()
}
function ct(h, a) {
    if (h.length !== a.length)
        return !1;
    let u = !0;
    for (let f = 0; u && f < h.length; f++)
        u = I(h[f], a[f]);
    return u
}
function I(h, a) {
    if (h === a)
        return !0;
    let u = ge(h)
      , f = ge(a);
    if (u || f)
        return u && f ? h.getTime() === a.getTime() : !1;
    if (u = y(h),
    f = y(a),
    u || f)
        return u && f ? ct(h, a) : !1;
    if (u = S(h),
    f = S(a),
    u || f) {
        if (!u || !f)
            return !1;
        const c = Object.keys(h).length
          , p = Object.keys(a).length;
        if (c !== p)
            return !1;
        for (const d in h) {
            const m = h.hasOwnProperty(d)
              , g = a.hasOwnProperty(d);
            if (m && !g || !m && g || !I(h[d], a[d]))
                return !1
        }
    }
    return String(h) === String(a)
}
function G(h, a) {
    return h.findIndex(u=>I(u, a))
}
const lt = Object.assign
  , ft = (h,a)=>{
    const u = h.indexOf(a);
    u > -1 && h.splice(u, 1)
}
  , at = Object.prototype.hasOwnProperty
  , U = (h,a)=>at.call(h, a)
  , y = Array.isArray
  , Y = h=>ye(h) === "[object Map]"
  , ge = h=>h instanceof Date
  , N = h=>typeof h == "string"
  , Q = h=>typeof h == "symbol"
  , S = h=>h !== null && typeof h == "object"
  , ut = Object.prototype.toString
  , ye = h=>ut.call(h)
  , pt = h=>ye(h).slice(8, -1)
  , X = h=>N(h) && h !== "NaN" && h[0] !== "-" && "" + parseInt(h, 10) === h
  , be = h=>{
    const a = Object.create(null);
    return u=>a[u] || (a[u] = h(u))
}
  , ht = /-(\w)/g
  , dt = be(h=>h.replace(ht, (a,u)=>u ? u.toUpperCase() : ""))
  , mt = /\B([A-Z])/g
  , xe = be(h=>h.replace(mt, "-$1").toLowerCase())
  , gt = (h,a)=>!Object.is(h, a)
  , ve = h=>{
    const a = parseFloat(h);
    return isNaN(a) ? h : a
}
;
let yt;
function we(h, a) {
    a = a || yt,
    a && a.active && a.effects.push(h)
}
const _e = h=>{
    const a = new Set(h);
    return a.w = 0,
    a.n = 0,
    a
}
  , Ee = h=>(h.w & O) > 0
  , $e = h=>(h.n & O) > 0
  , bt = ({deps: h})=>{
    if (h.length)
        for (let a = 0; a < h.length; a++)
            h[a].w |= O
}
  , xt = h=>{
    const {deps: a} = h;
    if (a.length) {
        let u = 0;
        for (let f = 0; f < a.length; f++) {
            const c = a[f];
            Ee(c) && !$e(c) ? c.delete(h) : a[u++] = c,
            c.w &= ~O,
            c.n &= ~O
        }
        a.length = u
    }
}
  , ee = new WeakMap;
let B = 0
  , O = 1;
const te = 30
  , z = [];
let C;
const W = Symbol("")
  , Se = Symbol("");
class vt {
    constructor(a, u=null, f) {
        this.fn = a,
        this.scheduler = u,
        this.active = !0,
        this.deps = [],
        we(this, f)
    }
    run() {
        if (!this.active)
            return this.fn();
        if (!z.includes(this))
            try {
                return z.push(C = this),
                $t(),
                O = 1 << ++B,
                B <= te ? bt(this) : Oe(this),
                this.fn()
            } finally {
                B <= te && xt(this),
                O = 1 << --B,
                ke(),
                z.pop();
                const a = z.length;
                C = a > 0 ? z[a - 1] : void 0
            }
    }
    stop() {
        this.active && (Oe(this),
        this.onStop && this.onStop(),
        this.active = !1)
    }
}
function Oe(h) {
    const {deps: a} = h;
    if (a.length) {
        for (let u = 0; u < a.length; u++)
            a[u].delete(h);
        a.length = 0
    }
}
function wt(h, a) {
    h.effect && (h = h.effect.fn);
    const u = new vt(h);
    a && (lt(u, a),
    a.scope && we(u, a.scope)),
    (!a || !a.lazy) && u.run();
    const f = u.run.bind(u);
    return f.effect = u,
    f
}
function _t(h) {
    h.effect.stop()
}
let K = !0;
const ne = [];
function Et() {
    ne.push(K),
    K = !1
}
function $t() {
    ne.push(K),
    K = !0
}
function ke() {
    const h = ne.pop();
    K = h === void 0 ? !0 : h
}
function F(h, a, u) {
    if (!St())
        return;
    let f = ee.get(h);
    f || ee.set(h, f = new Map);
    let c = f.get(u);
    c || f.set(u, c = _e()),
    Ot(c)
}
function St() {
    return K && C !== void 0
}
function Ot(h, a) {
    let u = !1;
    B <= te ? $e(h) || (h.n |= O,
    u = !Ee(h)) : u = !h.has(C),
    u && (h.add(C),
    C.deps.push(h))
}
function se(h, a, u, f, c, p) {
    const d = ee.get(h);
    if (!d)
        return;
    let m = [];
    if (a === "clear")
        m = [...d.values()];
    else if (u === "length" && y(h))
        d.forEach((g,v)=>{
            (v === "length" || v >= f) && m.push(g)
        }
        );
    else
        switch (u !== void 0 && m.push(d.get(u)),
        a) {
        case "add":
            y(h) ? X(u) && m.push(d.get("length")) : (m.push(d.get(W)),
            Y(h) && m.push(d.get(Se)));
            break;
        case "delete":
            y(h) || (m.push(d.get(W)),
            Y(h) && m.push(d.get(Se)));
            break;
        case "set":
            Y(h) && m.push(d.get(W));
            break
        }
    if (m.length === 1)
        m[0] && Te(m[0]);
    else {
        const g = [];
        for (const v of m)
            v && g.push(...v);
        Te(_e(g))
    }
}
function Te(h, a) {
    for (const u of y(h) ? h : [...h])
        (u !== C || u.allowRecurse) && (u.scheduler ? u.scheduler() : u.run())
}
const kt = st("__proto__,__v_isRef,__isVue")
  , Ae = new Set(Object.getOwnPropertyNames(Symbol).map(h=>Symbol[h]).filter(Q))
  , Tt = Me()
  , At = Me(!0)
  , Re = Rt();
function Rt() {
    const h = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(a=>{
        h[a] = function(...u) {
            const f = j(this);
            for (let p = 0, d = this.length; p < d; p++)
                F(f, "get", p + "");
            const c = f[a](...u);
            return c === -1 || c === !1 ? f[a](...u.map(j)) : c
        }
    }
    ),
    ["push", "pop", "shift", "unshift", "splice"].forEach(a=>{
        h[a] = function(...u) {
            Et();
            const f = j(this)[a].apply(this, u);
            return ke(),
            f
        }
    }
    ),
    h
}
function Me(h=!1, a=!1) {
    return function(u, f, c) {
        if (f === "__v_isReactive")
            return !h;
        if (f === "__v_isReadonly")
            return h;
        if (f === "__v_raw" && c === (h ? a ? zt : je : a ? Bt : Ce).get(u))
            return u;
        const p = y(u);
        if (!h && p && U(Re, f))
            return Reflect.get(Re, f, c);
        const d = Reflect.get(u, f, c);
        return (Q(f) ? Ae.has(f) : kt(f)) || (h || F(u, "get", f),
        a) ? d : re(d) ? !p || !X(f) ? d.value : d : S(d) ? h ? Ht(d) : D(d) : d
    }
}
const Mt = Ct();
function Ct(h=!1) {
    return function(a, u, f, c) {
        let p = a[u];
        if (!h && !Lt(f) && (f = j(f),
        p = j(p),
        !y(a) && re(p) && !re(f)))
            return p.value = f,
            !0;
        const d = y(a) && X(u) ? Number(u) < a.length : U(a, u)
          , m = Reflect.set(a, u, f, c);
        return a === j(c) && (d ? gt(f, p) && se(a, "set", u, f) : se(a, "add", u, f)),
        m
    }
}
function jt(h, a) {
    const u = U(h, a);
    h[a];
    const f = Reflect.deleteProperty(h, a);
    return f && u && se(h, "delete", a, void 0),
    f
}
function Pt(h, a) {
    const u = Reflect.has(h, a);
    return (!Q(a) || !Ae.has(a)) && F(h, "has", a),
    u
}
function It(h) {
    return F(h, "iterate", y(h) ? "length" : W),
    Reflect.ownKeys(h)
}
const Nt = {
    get: Tt,
    set: Mt,
    deleteProperty: jt,
    has: Pt,
    ownKeys: It
}
  , Kt = {
    get: At,
    set(h, a) {
        return !0
    },
    deleteProperty(h, a) {
        return !0
    }
}
  , Ce = new WeakMap
  , Bt = new WeakMap
  , je = new WeakMap
  , zt = new WeakMap;
function Dt(h) {
    switch (h) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function Vt(h) {
    return h.__v_skip || !Object.isExtensible(h) ? 0 : Dt(pt(h))
}
function D(h) {
    return h && h.__v_isReadonly ? h : Pe(h, !1, Nt, null, Ce)
}
function Ht(h) {
    return Pe(h, !0, Kt, null, je)
}
function Pe(h, a, u, f, c) {
    if (!S(h) || h.__v_raw && !(a && h.__v_isReactive))
        return h;
    const p = c.get(h);
    if (p)
        return p;
    const d = Vt(h);
    if (d === 0)
        return h;
    const m = new Proxy(h,d === 2 ? f : u);
    return c.set(h, m),
    m
}
function Lt(h) {
    return !!(h && h.__v_isReadonly)
}
function j(h) {
    const a = h && h.__v_raw;
    return a ? j(a) : h
}
function re(h) {
    return !!(h && h.__v_isRef === !0)
}
Promise.resolve();
let oe = !1;
const q = []
  , Wt = Promise.resolve()
  , V = h=>Wt.then(h)
  , Ie = h=>{
    q.includes(h) || q.push(h),
    oe || (oe = !0,
    V(Ft))
}
  , Ft = ()=>{
    for (const h of q)
        h();
    q.length = 0,
    oe = !1
}
  , qt = /^(spellcheck|draggable|form|list|type)$/
  , ie = ({el: h, get: a, effect: u, arg: f, modifiers: c})=>{
    let p;
    f === "class" && (h._class = h.className),
    u(()=>{
        let d = a();
        if (f)
            c?.camel && (f = dt(f)),
            ce(h, f, d, p);
        else {
            for (const m in d)
                ce(h, m, d[m], p && p[m]);
            for (const m in p)
                (!d || !(m in d)) && ce(h, m, null)
        }
        p = d
    }
    )
}
  , ce = (h,a,u,f)=>{
    if (a === "class")
        h.setAttribute("class", me(h._class ? [h._class, u] : u) || "");
    else if (a === "style") {
        u = de(u);
        const {style: c} = h;
        if (!u)
            h.removeAttribute("style");
        else if (N(u))
            u !== f && (c.cssText = u);
        else {
            for (const p in u)
                le(c, p, u[p]);
            if (f && !N(f))
                for (const p in f)
                    u[p] == null && le(c, p, "")
        }
    } else
        !(h instanceof SVGElement) && a in h && !qt.test(a) ? (h[a] = u,
        a === "value" && (h._value = u)) : a === "true-value" ? h._trueValue = u : a === "false-value" ? h._falseValue = u : u != null ? h.setAttribute(a, u) : h.removeAttribute(a)
}
  , Ne = /\s*!important$/
  , le = (h,a,u)=>{
    y(u) ? u.forEach(f=>le(h, a, f)) : a.startsWith("--") ? h.setProperty(a, u) : Ne.test(u) ? h.setProperty(xe(a), u.replace(Ne, ""), "important") : h[a] = u
}
  , k = (h,a)=>{
    const u = h.getAttribute(a);
    return u != null && h.removeAttribute(a),
    u
}
  , T = (h,a,u,f)=>{
    h.addEventListener(a, u, f)
}
  , Jt = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/
  , Zt = ["ctrl", "shift", "alt", "meta"]
  , Gt = {
    stop: h=>h.stopPropagation(),
    prevent: h=>h.preventDefault(),
    self: h=>h.target !== h.currentTarget,
    ctrl: h=>!h.ctrlKey,
    shift: h=>!h.shiftKey,
    alt: h=>!h.altKey,
    meta: h=>!h.metaKey,
    left: h=>"button"in h && h.button !== 0,
    middle: h=>"button"in h && h.button !== 1,
    right: h=>"button"in h && h.button !== 2,
    exact: (h,a)=>Zt.some(u=>h[`${u}Key`] && !a[u])
}
  , Ke = ({el: h, get: a, exp: u, arg: f, modifiers: c})=>{
    if (!f)
        return;
    let p = Jt.test(u) ? a(`(e => ${u}(e))`) : a(`($event => { ${u} })`);
    if (f === "vue:mounted") {
        V(p);
        return
    } else if (f === "vue:unmounted")
        return ()=>p();
    if (c) {
        f === "click" && (c.right && (f = "contextmenu"),
        c.middle && (f = "mouseup"));
        const d = p;
        p = m=>{
            if (!("key"in m && !(xe(m.key)in c))) {
                for (const g in c) {
                    const v = Gt[g];
                    if (v && v(m, c))
                        return
                }
                return d(m)
            }
        }
    }
    T(h, f, p, c)
}
  , Ut = ({el: h, get: a, effect: u})=>{
    const f = h.style.display;
    u(()=>{
        h.style.display = a() ? f : "none"
    }
    )
}
  , Be = ({el: h, get: a, effect: u})=>{
    u(()=>{
        h.textContent = ze(a())
    }
    )
}
  , ze = h=>h == null ? "" : S(h) ? JSON.stringify(h, null, 2) : String(h)
  , Yt = ({el: h, get: a, effect: u})=>{
    u(()=>{
        h.innerHTML = a()
    }
    )
}
  , Qt = ({el: h, exp: a, get: u, effect: f, modifiers: c})=>{
    const p = h.type
      , d = u(`(val) => { ${a} = val }`)
      , {trim: m, number: g=p === "number"} = c || {};
    if (h.tagName === "SELECT") {
        const v = h;
        T(h, "change", ()=>{
            const _ = Array.prototype.filter.call(v.options, b=>b.selected).map(b=>g ? ve(A(b)) : A(b));
            d(v.multiple ? _ : _[0])
        }
        ),
        f(()=>{
            const _ = u()
              , b = v.multiple;
            for (let P = 0, J = v.options.length; P < J; P++) {
                const x = v.options[P]
                  , w = A(x);
                if (b)
                    y(_) ? x.selected = G(_, w) > -1 : x.selected = _.has(w);
                else if (I(A(x), _)) {
                    v.selectedIndex !== P && (v.selectedIndex = P);
                    return
                }
            }
            !b && v.selectedIndex !== -1 && (v.selectedIndex = -1)
        }
        )
    } else if (p === "checkbox") {
        T(h, "change", ()=>{
            const _ = u()
              , b = h.checked;
            if (y(_)) {
                const P = A(h)
                  , J = G(_, P)
                  , x = J !== -1;
                if (b && !x)
                    d(_.concat(P));
                else if (!b && x) {
                    const w = [..._];
                    w.splice(J, 1),
                    d(w)
                }
            } else
                d(De(h, b))
        }
        );
        let v;
        f(()=>{
            const _ = u();
            y(_) ? h.checked = G(_, A(h)) > -1 : _ !== v && (h.checked = I(_, De(h, !0))),
            v = _
        }
        )
    } else if (p === "radio") {
        T(h, "change", ()=>{
            d(A(h))
        }
        );
        let v;
        f(()=>{
            const _ = u();
            _ !== v && (h.checked = I(_, A(h)))
        }
        )
    } else {
        const v = _=>m ? _.trim() : g ? ve(_) : _;
        T(h, "compositionstart", Xt),
        T(h, "compositionend", en),
        T(h, c?.lazy ? "change" : "input", ()=>{
            h.composing || d(v(h.value))
        }
        ),
        m && T(h, "change", ()=>{
            h.value = h.value.trim()
        }
        ),
        f(()=>{
            if (h.composing)
                return;
            const _ = h.value
              , b = u();
            document.activeElement === h && v(_) === b || _ !== b && (h.value = b)
        }
        )
    }
}
  , A = h=>"_value"in h ? h._value : h.value
  , De = (h,a)=>{
    const u = a ? "_trueValue" : "_falseValue";
    return u in h ? h[u] : a
}
  , Xt = h=>{
    h.target.composing = !0
}
  , en = h=>{
    const a = h.target;
    a.composing && (a.composing = !1,
    tn(a, "input"))
}
  , tn = (h,a)=>{
    const u = document.createEvent("HTMLEvents");
    u.initEvent(a, !0, !0),
    h.dispatchEvent(u)
}
  , Ve = Object.create(null)
  , H = (h,a,u)=>He(h, `return(${a})`, u)
  , He = (h,a,u)=>{
    const f = Ve[a] || (Ve[a] = nn(a));
    try {
        return f(h, u)
    } catch (c) {
        console.error(c)
    }
}
  , nn = h=>{
    try {
        return new Function("$data","$el",`with($data){${h}}`)
    } catch (a) {
        return console.error(`${a.message} in expression: ${h}`),
        ()=>{}
    }
}
  , sn = ({el: h, ctx: a, exp: u, effect: f})=>{
    V(()=>f(()=>He(a.scope, u, h)))
}
  , rn = {
    bind: ie,
    on: Ke,
    show: Ut,
    text: Be,
    html: Yt,
    model: Qt,
    effect: sn
}
  , on = (h,a,u)=>{
    const f = h.parentElement
      , c = new Comment("v-if");
    f.insertBefore(c, h);
    const p = [{
        exp: a,
        el: h
    }];
    let d, m;
    for (; (d = h.nextElementSibling) && (m = null,
    k(d, "v-else") === "" || (m = k(d, "v-else-if"))); )
        f.removeChild(d),
        p.push({
            exp: m,
            el: d
        });
    const g = h.nextSibling;
    f.removeChild(h);
    let v, _ = -1;
    const b = ()=>{
        v && (f.insertBefore(c, v.el),
        v.remove(),
        v = void 0)
    }
    ;
    return u.effect(()=>{
        for (let P = 0; P < p.length; P++) {
            const {exp: J, el: x} = p[P];
            if (!J || H(u.scope, J)) {
                P !== _ && (b(),
                v = new ue(x,u),
                v.insert(f, c),
                f.removeChild(c),
                _ = P);
                return
            }
        }
        _ = -1,
        b()
    }
    ),
    g
}
  , cn = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
  , Le = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
  , ln = /^\(|\)$/g
  , fn = /^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/
  , an = (h,a,u)=>{
    const f = a.match(cn);
    if (!f)
        return;
    const c = h.nextSibling
      , p = h.parentElement
      , d = new Text("");
    p.insertBefore(d, h),
    p.removeChild(h);
    const m = f[2].trim();
    let g = f[1].trim().replace(ln, "").trim(), v, _ = !1, b, P, J = "key", x = h.getAttribute(J) || h.getAttribute(J = ":key") || h.getAttribute(J = "v-bind:key");
    x && (h.removeAttribute(J),
    J === "key" && (x = JSON.stringify(x)));
    let w;
    (w = g.match(Le)) && (g = g.replace(Le, "").trim(),
    b = w[1].trim(),
    w[2] && (P = w[2].trim())),
    (w = g.match(fn)) && (v = w[1].split(",").map(ei=>ei.trim()),
    _ = g[0] === "[");
    let pe = !1, L, R, M;
    const Z = ei=>{
        const ii = new Map
          , oi = [];
        if (y(ei))
            for (let hi = 0; hi < ei.length; hi++)
                oi.push(he(ii, ei[hi], hi));
        else if (typeof ei == "number")
            for (let hi = 0; hi < ei; hi++)
                oi.push(he(ii, hi + 1, hi));
        else if (S(ei)) {
            let hi = 0;
            for (const fi in ei)
                oi.push(he(ii, ei[fi], hi++, fi))
        }
        return [oi, ii]
    }
      , he = (ei,ii,oi,hi)=>{
        const fi = {};
        v ? v.forEach((mi,li)=>fi[mi] = ii[_ ? li : mi]) : fi[g] = ii,
        hi ? (b && (fi[b] = hi),
        P && (fi[P] = oi)) : b && (fi[b] = oi);
        const ui = Ge(u, fi)
          , pi = x ? H(ui.scope, x) : oi;
        return ei.set(pi, oi),
        ui.key = pi,
        ui
    }
      , et = (ei,ii)=>{
        const oi = new ue(h,ei);
        return oi.key = ei.key,
        oi.insert(p, ii),
        oi
    }
    ;
    return u.effect(()=>{
        const ei = H(u.scope, m)
          , ii = M;
        if ([R,M] = Z(ei),
        !pe)
            L = R.map(oi=>et(oi, d)),
            pe = !0;
        else {
            for (let pi = 0; pi < L.length; pi++)
                M.has(L[pi].key) || L[pi].remove();
            const oi = [];
            let hi = R.length, fi, ui;
            for (; hi--; ) {
                const pi = R[hi]
                  , mi = ii.get(pi.key);
                let li;
                mi == null ? li = et(pi, fi ? fi.el : d) : (li = L[mi],
                Object.assign(li.ctx.scope, pi.scope),
                mi !== hi && (L[mi + 1] !== fi || ui === fi) && (ui = li,
                li.insert(p, fi ? fi.el : d))),
                oi.unshift(fi = li)
            }
            L = oi
        }
    }
    ),
    c
}
  , We = ({el: h, ctx: {scope: {$refs: a}}, get: u, effect: f})=>{
    let c;
    return f(()=>{
        const p = u();
        a[p] = h,
        c && p !== c && delete a[c],
        c = p
    }
    ),
    ()=>{
        c && delete a[c]
    }
}
  , un = /^(?:v-|:|@)/
  , pn = /\.([\w-]+)/g;
let fe = !1;
const Fe = (h,a)=>{
    const u = h.nodeType;
    if (u === 1) {
        const f = h;
        if (f.hasAttribute("v-pre"))
            return;
        k(f, "v-cloak");
        let c;
        if (c = k(f, "v-if"))
            return on(f, c, a);
        if (c = k(f, "v-for"))
            return an(f, c, a);
        if ((c = k(f, "v-scope")) || c === "") {
            const m = c ? H(a.scope, c) : {};
            a = Ge(a, m),
            m.$template && hn(f, m.$template)
        }
        const p = k(f, "v-once") != null;
        p && (fe = !0),
        (c = k(f, "ref")) && ae(f, We, `"${c}"`, a),
        qe(f, a);
        const d = [];
        for (const {name: m, value: g} of [...f.attributes])
            un.test(m) && m !== "v-cloak" && (m === "v-model" ? d.unshift([m, g]) : m[0] === "@" || /^v-on\b/.test(m) ? d.push([m, g]) : Je(f, m, g, a));
        for (const [m,g] of d)
            Je(f, m, g, a);
        p && (fe = !1)
    } else if (u === 3) {
        const f = h.data;
        if (f.includes(a.delimiters[0])) {
            let c = [], p = 0, d;
            for (; d = a.delimitersRE.exec(f); ) {
                const m = f.slice(p, d.index);
                m && c.push(JSON.stringify(m)),
                c.push(`$s(${d[1]})`),
                p = d.index + d[0].length
            }
            p < f.length && c.push(JSON.stringify(f.slice(p))),
            ae(h, Be, c.join("+"), a)
        }
    } else
        u === 11 && qe(h, a)
}
  , qe = (h,a)=>{
    let u = h.firstChild;
    for (; u; )
        u = Fe(u, a) || u.nextSibling
}
  , Je = (h,a,u,f)=>{
    let c, p, d;
    if (a = a.replace(pn, (m,g)=>((d || (d = {}))[g] = !0,
    "")),
    a[0] === ":")
        c = ie,
        p = a.slice(1);
    else if (a[0] === "@")
        c = Ke,
        p = a.slice(1);
    else {
        const m = a.indexOf(":")
          , g = m > 0 ? a.slice(2, m) : a.slice(2);
        c = rn[g] || f.dirs[g],
        p = m > 0 ? a.slice(m + 1) : void 0
    }
    c && (c === ie && p === "ref" && (c = We),
    ae(h, c, u, f, p, d),
    h.removeAttribute(a))
}
  , ae = (h,a,u,f,c,p)=>{
    const d = a({
        el: h,
        get: (m=u)=>H(f.scope, m, h),
        effect: f.effect,
        ctx: f,
        exp: u,
        arg: c,
        modifiers: p
    });
    d && f.cleanups.push(d)
}
  , hn = (h,a)=>{
    if (a[0] === "#") {
        const u = document.querySelector(a);
        h.appendChild(u.content.cloneNode(!0));
        return
    }
    h.innerHTML = a
}
  , Ze = h=>{
    const a = {
        delimiters: ["{{", "}}"],
        delimitersRE: /\{\{([^]+?)\}\}/g,
        ...h,
        scope: h ? h.scope : D({}),
        dirs: h ? h.dirs : {},
        effects: [],
        blocks: [],
        cleanups: [],
        effect: u=>{
            if (fe)
                return Ie(u),
                u;
            const f = wt(u, {
                scheduler: ()=>Ie(f)
            });
            return a.effects.push(f),
            f
        }
    };
    return a
}
  , Ge = (h,a={})=>{
    const u = h.scope
      , f = Object.create(u);
    Object.defineProperties(f, Object.getOwnPropertyDescriptors(a)),
    f.$refs = Object.create(u.$refs);
    const c = D(new Proxy(f,{
        set(p, d, m, g) {
            return g === c && !p.hasOwnProperty(d) ? Reflect.set(u, d, m) : Reflect.set(p, d, m, g)
        }
    }));
    return Ue(c),
    {
        ...h,
        scope: c
    }
}
  , Ue = h=>{
    for (const a of Object.keys(h))
        typeof h[a] == "function" && (h[a] = h[a].bind(h))
}
;
class ue {
    constructor(a, u, f=!1) {
        $(this, "template"),
        $(this, "ctx"),
        $(this, "key"),
        $(this, "parentCtx"),
        $(this, "isFragment"),
        $(this, "start"),
        $(this, "end"),
        this.isFragment = a instanceof HTMLTemplateElement,
        f ? this.template = a : this.isFragment ? this.template = a.content.cloneNode(!0) : this.template = a.cloneNode(!0),
        f ? this.ctx = u : (this.parentCtx = u,
        u.blocks.push(this),
        this.ctx = Ze(u)),
        Fe(this.template, this.ctx)
    }
    get el() {
        return this.start || this.template
    }
    insert(a, u=null) {
        if (this.isFragment)
            if (this.start) {
                let f = this.start, c;
                for (; f && (c = f.nextSibling,
                a.insertBefore(f, u),
                f !== this.end); )
                    f = c
            } else
                this.start = new Text(""),
                this.end = new Text(""),
                a.insertBefore(this.end, u),
                a.insertBefore(this.start, this.end),
                a.insertBefore(this.template, this.end);
        else
            a.insertBefore(this.template, u)
    }
    remove() {
        if (this.parentCtx && ft(this.parentCtx.blocks, this),
        this.start) {
            const a = this.start.parentNode;
            let u = this.start, f;
            for (; u && (f = u.nextSibling,
            a.removeChild(u),
            u !== this.end); )
                u = f
        } else
            this.template.parentNode.removeChild(this.template);
        this.teardown()
    }
    teardown() {
        this.ctx.blocks.forEach(a=>{
            a.teardown()
        }
        ),
        this.ctx.effects.forEach(_t),
        this.ctx.cleanups.forEach(a=>a())
    }
}
const Ye = h=>h.replace(/[-.*+?^${}()|[\]\/\\]/g, "\\$&")
  , Qe = h=>{
    const a = Ze();
    if (h && (a.scope = D(h),
    Ue(a.scope),
    h.$delimiters)) {
        const [f,c] = a.delimiters = h.$delimiters;
        a.delimitersRE = new RegExp(Ye(f) + "([^]+?)" + Ye(c),"g")
    }
    a.scope.$s = ze,
    a.scope.$nextTick = V,
    a.scope.$refs = Object.create(null);
    let u;
    return {
        directive(f, c) {
            return c ? (a.dirs[f] = c,
            this) : a.dirs[f]
        },
        mount(f) {
            if (typeof f == "string" && (f = document.querySelector(f),
            !f))
                return;
            f = f || document.documentElement;
            let c;
            return f.hasAttribute("v-scope") ? c = [f] : c = [...f.querySelectorAll("[v-scope]")].filter(p=>!p.matches("[v-scope] [v-scope]")),
            c.length || (c = [f]),
            u = c.map(p=>new ue(p,a,!0)),
            this
        },
        unmount() {
            u.forEach(f=>f.teardown())
        }
    }
}
  , Xe = document.currentScript;
Xe && Xe.hasAttribute("init") && Qe().mount();
function getUrl() {
    return new URL(document.location)
}
function getUrlParam(h, a) {
    return h.searchParams.get(a)
}
function setUrlParam(h, a, u) {
    h.searchParams.set(a, u)
}
function deleteUrlParam(h, a) {
    h.searchParams.delete(a)
}
function pushUrl(h) {
    window.history.pushState(null, "", h)
}
const PER_PAGE = 15
  , MAX_PAGER_PC = 5
  , MAX_PAGER_SP = 3
  , MAX_PAGER = media.isSp ? MAX_PAGER_SP : MAX_PAGER_PC
  , BEFORE_PAGER = 0;
class CPager extends Component {
    static selectorRoot = "[data-pager]";
    onInit() {
        this.maxPager = this.isSp ? MAX_PAGER_SP : MAX_PAGER,
        this.listStore = this.option.store,
        this.elPager = this.el.querySelector("[data-pager-inner]") || this.el,
        this.prev = this.elPager.querySelector("[data-pager-prev]"),
        this.next = this.elPager.querySelector("[data-pager-next]"),
        this.scrollTarget = document.querySelector(this.el.dataset.listScrollTo),
        this.scrollTarget && (this.scrollTargetFocus = this.scrollTarget.querySelector("a, label, select, button, input[type=radio], input[type=checkbox]")),
        this.targetList = document.querySelector(this.el.dataset.pagerTargetList);
        const a = this.pagerStore = D({
            chunkData: [],
            numbers: [],
            maxNumber: {},
            minNumber: {},
            hasMoreNext: !1,
            hasMorePrev: !1,
            isFirst: !1,
            isShowMax: !1,
            isShowMoreNext: !1,
            isShowMin: !1,
            isShowMorePrev: !1
        });
        this.vue = Qe({
            pagerStore: a,
            change: u=>{
                this.changePage(u)
            }
            ,
            next: ()=>{
                this.changePage(this.page + 1)
            }
            ,
            prev: ()=>{
                this.changePage(this.page - 1)
            }
        }).directive("visible", ({el: u, exp: f, get: c, effect: p})=>{
            p(()=>{
                u.style.visibility = c(f) ? "visible" : "hidden"
            }
            )
        }
        ).mount(this.elPager)
    }
    chunk(a, u) {
        return a.reduce((f,c,p)=>p % u ? f : [...f, a.slice(p, p + u)], [])
    }
    getPageFromParam() {
        this.url = getUrl();
        const a = getUrlParam(this.url, "page");
        this.page = a ? parseInt(a) : 1
    }
    setParamToURL() {
        this.url = getUrl(),
        this.page === 1 ? deleteUrlParam(this.url, "page") : setUrlParam(this.url, "page", this.page),
        pushUrl(this.url)
    }
    showList(a, u) {
        this.listStore.showData = this.pagerStore.chunkData[a - 1] || [],
        u ? this.listStore.showData.forEach((f,c)=>{
            f.isShow = !0
        }
        ) : (this.listStore.showData.forEach((f,c)=>{
            f.isShow = !1
        }
        ),
        setTimeout(()=>{
            this.listStore.showData.forEach((f,c)=>{
                gsapWithCSS.delayedCall(.1 * c, ()=>{
                    f.isShow = !0
                }
                )
            }
            )
        }
        , 200))
    }
    setPager() {
        if (this.page === 1 && this.pagerStore.chunkData.length === 1 || this.pagerStore.chunkData.length === 0) {
            this.hide();
            return
        } else
            this.show();
        const a = []
          , u = this.pagerStore.chunkData.length
          , f = Math.max(Math.min(this.page - 1 - BEFORE_PAGER, u - MAX_PAGER), 0);
        for (let c = f; c < u && c !== f + MAX_PAGER; c++) {
            const p = c + 1;
            a.push({
                pageNumber: p,
                text: pad2(p),
                isCurrent: p === this.page
            })
        }
        this.pagerStore.maxNumber = {
            pageNumber: u,
            text: pad2(u)
        },
        this.pagerStore.isShowMax = u !== a[a.length - 1].pageNumber,
        this.pagerStore.isShowMoreNext = u - a[a.length - 1].pageNumber > 1,
        this.pagerStore.minNumber = {
            pageNumber: 1,
            text: "01"
        },
        this.pagerStore.isShowMin = a[0].pageNumber - 1 > 0,
        this.pagerStore.isShowMorePrev = a[0].pageNumber - 1 > 1,
        this.pagerStore.numbers = a
    }
    judgeMore() {
        this.pagerStore.hasMorePrev = this.page !== 1,
        this.pagerStore.hasMoreNext = this.page !== this.pagerStore.maxNumber.pageNumber
    }
    update({isImmediate: a}) {
        this.pagerStore.chunkData = this.chunk(this.listStore.sortedData, PER_PAGE),
        this.listStore.isFirst ? (this.getPageFromParam(),
        this.page > this.pagerStore.chunkData.length ? this.changePage(1, !1, a) : this.changePage(this.page, !1, a)) : this.changePage(1, !1, a)
    }
    async changePage(a, u=!0, f) {
        this.page = a,
        this.option.replaceAnimation(()=>this.showList(a, f), f),
        this.setPager(),
        this.judgeMore(),
        u && this.setParamToURL()
    }
    show() {
        this.elPager.style.display = ""
    }
    hide() {
        this.elPager.style.display = "none"
    }
}
const DEFAULT_LIMIT_NUMBER = 10;
class ViewMore extends Component {
    static selectorRoot = "[data-view-more]";
    static intersectOptions = {
        rootMargin: "0% 0% -30%"
    };
    pageCount = 0;
    onInit() {
        this.limitNumber = Number(this.el.dataset.viewMore) || DEFAULT_LIMIT_NUMBER,
        this.listData = this.option.store
    }
    showList(a, u) {
        this.listData.showData = a,
        u ? this.listData.showData.forEach((f,c)=>{
            f.isShow = !0
        }
        ) : setTimeout(()=>{
            this.listData.showData.forEach((f,c)=>{
                gsap.delayedCall(.1 * Math.max(c - this.limitNumber * (this.pageCount - 1), 0), ()=>{
                    f.isShow = !0
                }
                )
            }
            )
        }
        , 100)
    }
    setMore() {
        this.listData.showData.length < this.listData.sortedData.length ? this.show() : this.hide()
    }
    showNext(a) {
        this.pageCount++;
        const u = this.listData.sortedData.slice(0, this.limitNumber * this.pageCount);
        this.option.replaceAnimation(()=>{
            this.showList(u, a),
            this.setMore()
        }
        , a)
    }
    showAll() {
        this.listData.showData = this.listData.sortedData,
        this.hide(),
        requestAnimationFrame(()=>{
            this.option.listContainer.querySelectorAll("a[href]")[this.limitNumber + 1].focus()
        }
        )
    }
    async reset(a) {
        this.pageCount = 0,
        this.showNext(a)
    }
    onClick() {
        this.showNext()
    }
    onIntersect({isIntersecting: a}) {
        a && this.showNext()
    }
    hide() {
        this.el.style.display = "none"
    }
    show() {
        this.el.style.display = "block"
    }
}
const param = {
    duration: 1
};
class DSortItem extends Component {
    static selectorRoot = "[data-sort-item]";
    input;
    id;
    value;
    name;
    label;
    textElem;
    text;
    onChangeHandler;
    isSelectTag;
    onInit() {
        this.input = this.el.querySelector("[data-sort-item-input]"),
        this.isSelectTag = this.input.tagName === "SELECT",
        this.id = this.input.id,
        this.value = this.input.value,
        this.name = this.input.name,
        this.isSelectTag ? this.selectTagGetData() : (this.label = this.el.querySelector('label[for="' + this.id + '"]'),
        this.textElem = this.label.querySelector("[data-sort-item-label-text]") || this.label,
        this.text = this.textElem.textContent),
        this.onChangeHandler = this.onChange.bind(this),
        this.input.addEventListener("change", this.onChangeHandler),
        this.value === "all" && this.input.checked && (this.label.style.pointerEvents = "none",
        this.input.style.pointerEvents = "none")
    }
    onChange() {
        this.isSelectTag || this.option.checkTarget({
            group: this.name,
            value: this.value
        }),
        this.option.createData(),
        this.value === "all" && this.input.checked && (this.label.style.pointerEvents = "none",
        this.input.style.pointerEvents = "none")
    }
    otherChange({group: a, value: u}) {
        this.isSelectTag || a === this.name && u !== this.value && (this.value === "all" && u !== "all" ? this.checkFalse() : this.value !== "all" && u === "all" && this.checkFalse())
    }
    check({group: a, value: u}) {
        if (this.isSelectTag) {
            if (a !== this.name)
                return;
            Array.prototype.some.call(this.input.options, (f,c)=>{
                const p = f.value === u;
                return p && (this.input.options[c].selected = !0),
                p
            }
            )
        } else
            a === this.name && (u === this.value && this.checkTrue(),
            this.value === "all" && this.checkFalse())
    }
    checkTrue() {
        this.input.checked = !0,
        this.value === "all" && (this.label.style.pointerEvents = "none",
        this.input.style.pointerEvents = "none")
    }
    checkFalse() {
        this.input.checked = !1,
        this.value === "all" && (this.label.style.pointerEvents = "",
        this.input.style.pointerEvents = "")
    }
    selectTagGetData() {
        this.value = this.input.value,
        this.text = this.input.options[this.input.selectedIndex].textContent
    }
    getStatus(a) {
        a[this.name] || (a[this.name] = []),
        this.isSelectTag ? (this.selectTagGetData(),
        a[this.name].push({
            value: this.value,
            text: this.text
        })) : this.input.checked && a[this.name].push({
            value: this.value,
            text: this.text
        })
    }
    onDestroy() {
        this.input.removeEventListener("change", this.onChangeHandler)
    }
}
class DArticleList extends Component {
    static selectorRoot = "[data-sort-article-list]";
    tl;
    notfoundText;
    scrollTarget;
    pager;
    store;
    vue;
    isPager;
    viewMore;
    scrollTargetFocus;
    isViewMore;
    onInit() {
        this.tl = null,
        this.initComponentsOnMutation(this.el);
        const a = this.store = D({
            sortedData: [],
            showData: [],
            isFirst: !0,
            isNotFound: !1
        });
        this.vue = Qe({
            store: a
        }).mount(this.el),
        this.notfoundText = document.querySelector("[data-sort-notfound]"),
        this.notfoundText && (this.notfoundText.style.display = "none"),
        this.scrollTarget = document.querySelector(this.el.dataset.listScrollTo),
        this.scrollTarget && (this.scrollTargetFocus = this.scrollTarget.querySelector("a, label, select, button, input[type=radio], input[type=checkbox]")),
        this.isPager = this.el.dataset.sortArticleList === "pager",
        this.isPager && (this.pager = CPager.createAll(this.option.context, {
            store: a,
            replaceAnimation: this.replaceAnimation.bind(this)
        })[0]),
        this.isViewMore = this.el.dataset.sortArticleList === "viewMore",
        this.isViewMore && (this.viewMore = ViewMore.createAll(this.option.context, {
            store: a,
            listContainer: this.el,
            replaceAnimation: this.replaceAnimation.bind(this)
        })[0]),
        this.isScroll = this.isPager
    }
    setStoreItem(a) {
        this.store.showData = a
    }
    replaceAnimation(a, u=!1) {
        gsapWithCSS.timeline().add([this.isScroll && !u && (!this.store.isFirst || store.pageId === store.pageIdPrev) && this.resetScroll()]).call(()=>{
            this.store.isFirst && (this.store.isFirst = !1),
            this.removeNotFound(),
            this.store.isNotFound = this.store.sortedData.length === 0,
            this.store.isNotFound ? this.setNotfound() : a()
        }
        )
    }
    removeItems() {
        if (this.destroyAnimation(),
        !!this.el.children.length)
            for (; this.el.firstChild; )
                this.el.removeChild(this.el.firstChild)
    }
    async setList(a, u) {
        this.store.sortedData.forEach(f=>{
            f.isShow = !1
        }
        ),
        u || await wait(.1),
        this.store.sortedData = a,
        this.pager ? this.pager.update({
            isFirst: this.store.isFirst,
            isImmediate: u
        }) : this.viewMore ? this.viewMore.reset(u) : (this.store.showData = a,
        this.replaceAnimation(()=>this.store.showData = a, u)),
        this.store.isFirst || this.option.setURLParams()
    }
    removeNotFound() {
        this.notfoundText && this.notfoundText.classList.remove("-isShow")
    }
    setNotfound() {
        this.notfoundText && (this.notfoundText.classList.add("-isShow"),
        this.emitResizeAll())
    }
    resetScroll() {
        return new Promise(a=>{
            this.scrollTo(this.scrollTarget || this.option.context, {
                duration: param.duration,
                onComplete: ()=>{
                    this.scrollTargetFocus && this.scrollTargetFocus.focus(),
                    a()
                }
            })
        }
        )
    }
    onDestroy() {
        this.vue.unmount()
    }
}
class Sort extends Component {
    static selectorRoot = "[data-sort]:not([data-sort-manual])";
    allDataList;
    currentData;
    articleListElem;
    articleList;
    resultElems;
    form;
    sortItems;
    defaultParams;
    accordions;
    async onInit() {
        merge(this.option, JSON.parse(this.el.dataset.sort || "{}"));
        const a = this.el.querySelector("[data-sort-data]");
        this.allDataList = JSON.parse(a?.textContent || ""),
        this.currentData = {},
        this.sortItems = DSortItem.createAll(this.el, {
            createData: this.createData.bind(this),
            checkTarget: this.checkTarget.bind(this)
        }),
        this.articleList = DArticleList.createAll(this.el, {
            allDataList: this.allDataList,
            context: this.el,
            setURLParams: this.setURLParams.bind(this)
        })[0],
        this.accordions = this.el.querySelectorAll("[data-sort-accordion]"),
        this.defaultParams = this.getURLParams(),
        this.accordions && this.openAccordion(),
        this.checkFromData(this.defaultParams),
        this.createData(!0)
    }
    createData(a=!1) {
        const u = {};
        this.sortItems.forEach(f=>f.getStatus(u)),
        this.currentData = u,
        this.sortExecute(a)
    }
    checkTarget({group: a, value: u}) {
        this.sortItems.forEach(f=>f.otherChange({
            group: a,
            value: u
        }))
    }
    sortExecute(a) {
        let u = this.allDataList.concat();
        const {currentData: f} = this;
        for (const c in f) {
            const p = f[c];
            if (p.length === 0 || p[0].value === "all") {
                p.length === 0 && this.sortItems.forEach(d=>{
                    d.name === c && d.value === "all" && d.checkTrue()
                }
                );
                continue
            }
            u = u.filter(d=>p.some(m=>m.value === d[c] || d[c].includes(m.value)))
        }
        this.articleList.setList(u, a)
    }
    setURLParams() {
        const a = new URL(window.location.href)
          , {currentData: u} = this;
        for (const c in u) {
            const p = u[c]
              , d = p.map(m=>m.value).join(",");
            p.length === 0 || p[0].value === "all" ? a.searchParams.delete(c) : a.searchParams.set(c, d)
        }
        const f = decodeURIComponent(a.href);
        window.history.pushState({}, "", f)
    }
    getURLParams() {
        const a = decodeURIComponent(location.search)
          , f = a.slice(1, a.length).split("&")
          , c = {};
        return f[0] !== "" && f.forEach(p=>{
            const d = p.split("=")
              , m = d[0]
              , g = d[1].split(",");
            c[m] = g.map(v=>({
                value: v
            }))
        }
        ),
        c
    }
    checkFromData(a) {
        for (const u in a)
            a[u].forEach(f=>{
                this.sortItems.forEach(c=>c.check({
                    group: u,
                    value: f.value
                }))
            }
            )
    }
    openAccordion() {
        const a = Object.keys(this.defaultParams);
        this.accordions.forEach(u=>{
            const f = u.dataset.sortAccordion;
            a.some(p=>p === f) && setTimeout(()=>u.click(), 1e3)
        }
        )
    }
    onDestroy() {
        this.allDataList = []
    }
}
Sort.register();
(class extends Component {
    static selectorRoot = "[data-parallax]";
    onInit() {
        const {isDisablePc: h=!1, isDisableSp: a=!1} = merge(this.option, JSON.parse(this.el.dataset.parallax || "{}"));
        this.isDisable = this.isSp ? a : h,
        this.elBackground = this.el.querySelector("[data-parallax-background]")
    }
    onIntersect({isIntersecting: h}) {
        this.isDisable || this.elBackground && (h ? (this.elBackground.style.willChange = "transform",
        this.playScroll()) : (this.pauseScroll(),
        this.elBackground.style.willChange = ""))
    }
    onScroll({scroll: h}) {
        this.isDisable || this.elBackground && (this.elBackground.style.transform = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${((h - this.yStart) / this.yDistance - 1) * this.move},0,1)`)
    }
    onResize({height: h}) {
        if (this.isDisable || !this.elBackground)
            return;
        this.elBackground.style.transform = "";
        const {scrollY: a} = this
          , {top: u, bottom: f, height: c} = this.el.getBoundingClientRect()
          , {height: p} = this.elBackground.getBoundingClientRect();
        this.yStart = u + a - h,
        this.yEnd = f + a,
        this.yDistance = this.yEnd - this.yStart,
        this.move = p - c
    }
}
).register();
function map_range(h, a, u, f, c) {
    return f + (c - f) * (h - a) / (u - a)
}
(class extends Component {
    static selectorRoot = "[data-kv-parallax]";
    onInit() {
        this.elBackground = this.el.querySelector("[data-parallax-background]"),
        this.elMask = this.el.querySelector("[data-parallax-mask]")
    }
    onIntersect({isIntersecting: h}) {
        this.elBackground && (h ? (this.elBackground.style.willChange = "transform",
        this.playScroll()) : (this.pauseScroll(),
        this.elBackground.style.willChange = ""))
    }
    onScroll({scroll: h}) {
        if (!this.elBackground)
            return;
        const a = (h / this.yDistance - .2) * this.move
          , u = `matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,${map_range(a, -20, 50, 0, 40)},0,1)`;
        this.elBackground.style.transform = u,
        this.elMask.style.transform = u
    }
    onResize({height: h}) {
        if (!this.elBackground)
            return;
        this.elBackground.style.transform = "";
        const {top: a, bottom: u, height: f} = this.el.getBoundingClientRect()
          , {height: c} = this.elBackground.getBoundingClientRect();
        this.yStart = a - h,
        this.yEnd = u,
        this.yDistance = this.yEnd - this.yStart,
        this.move = c * 1.1 - f
    }
}
).register();
/*!
 * strings: 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function getText(h) {
    var a = h.nodeType
      , u = "";
    if (a === 1 || a === 9 || a === 11) {
        if (typeof h.textContent == "string")
            return h.textContent;
        for (h = h.firstChild; h; h = h.nextSibling)
            u += getText(h)
    } else if (a === 3 || a === 4)
        return h.nodeValue;
    return u
}
/*!
 * SplitText: 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _doc, _win, _coreInitted, gsap$1, _context, _toArray, _stripExp = /(?:\r|\n|\t\t)/g, _multipleSpacesExp = /(?:\s\s+)/g, _initCore = function h(a) {
    _doc = document,
    _win = window,
    gsap$1 = gsap$1 || a || _win.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
    gsap$1 && (_toArray = gsap$1.utils.toArray,
    _context = gsap$1.core.context || function() {}
    ,
    _coreInitted = 1)
}, _getComputedStyle = function h(a) {
    return _win.getComputedStyle(a)
}, _isAbsolute = function h(a) {
    return a.position === "absolute" || a.absolute === !0
}, _findSpecialChars = function h(a, u) {
    for (var f = u.length, c; --f > -1; )
        if (c = u[f],
        a.substr(0, c.length) === c)
            return c.length
}, _divStart = " style='position:relative;display:inline-block;'", _cssClassFunc = function h(a, u) {
    a === void 0 && (a = "");
    var f = ~a.indexOf("++")
      , c = 1;
    return f && (a = a.split("++").join("")),
    function() {
        return "<" + u + _divStart + (a ? " class='" + a + (f ? c++ : "") + "'>" : ">")
    }
}, _swapText = function h(a, u, f) {
    var c = a.nodeType;
    if (c === 1 || c === 9 || c === 11)
        for (a = a.firstChild; a; a = a.nextSibling)
            h(a, u, f);
    else
        (c === 3 || c === 4) && (a.nodeValue = a.nodeValue.split(u).join(f))
}, _pushReversed = function h(a, u) {
    for (var f = u.length; --f > -1; )
        a.push(u[f])
}, _isBeforeWordDelimiter = function h(a, u, f) {
    for (var c; a && a !== u; ) {
        if (c = a._next || a.nextSibling,
        c)
            return c.textContent.charAt(0) === f;
        a = a.parentNode || a._parent
    }
}, _deWordify = function h(a) {
    var u = _toArray(a.childNodes), f = u.length, c, p;
    for (c = 0; c < f; c++)
        p = u[c],
        p._isSplit ? h(p) : c && p.previousSibling && p.previousSibling.nodeType === 3 ? (p.previousSibling.nodeValue += p.nodeType === 3 ? p.nodeValue : p.firstChild.nodeValue,
        a.removeChild(p)) : p.nodeType !== 3 && (a.insertBefore(p.firstChild, p),
        a.removeChild(p))
}, _getStyleAsNumber = function h(a, u) {
    return parseFloat(u[a]) || 0
}, _setPositionsAfterSplit = function h(a, u, f, c, p, d, m) {
    var g = _getComputedStyle(a), v = _getStyleAsNumber("paddingLeft", g), _ = -999, b = _getStyleAsNumber("borderBottomWidth", g) + _getStyleAsNumber("borderTopWidth", g), P = _getStyleAsNumber("borderLeftWidth", g) + _getStyleAsNumber("borderRightWidth", g), J = _getStyleAsNumber("paddingTop", g) + _getStyleAsNumber("paddingBottom", g), x = _getStyleAsNumber("paddingLeft", g) + _getStyleAsNumber("paddingRight", g), w = _getStyleAsNumber("fontSize", g) * (u.lineThreshold || .2), pe = g.textAlign, L = [], R = [], M = [], Z = u.wordDelimiter || " ", he = u.tag ? u.tag : u.span ? "span" : "div", et = u.type || u.split || "chars,words,lines", ei = p && ~et.indexOf("lines") ? [] : null, ii = ~et.indexOf("words"), oi = ~et.indexOf("chars"), hi = _isAbsolute(u), fi = u.linesClass, ui = ~(fi || "").indexOf("++"), pi = [], mi = g.display === "flex", li = a.style.display, ni, ri, ti, si, ci, ai, di, gi, vi, yi, Si, Ci;
    for (ui && (fi = fi.split("++").join("")),
    mi && (a.style.display = "block"),
    ri = a.getElementsByTagName("*"),
    ti = ri.length,
    ci = [],
    ni = 0; ni < ti; ni++)
        ci[ni] = ri[ni];
    if (ei || hi)
        for (ni = 0; ni < ti; ni++)
            si = ci[ni],
            ai = si.parentNode === a,
            (ai || hi || oi && !ii) && (Ci = si.offsetTop,
            ei && ai && Math.abs(Ci - _) > w && (si.nodeName !== "BR" || ni === 0) && (di = [],
            ei.push(di),
            _ = Ci),
            hi && (si._x = si.offsetLeft,
            si._y = Ci,
            si._w = si.offsetWidth,
            si._h = si.offsetHeight),
            ei && ((si._isSplit && ai || !oi && ai || ii && ai || !ii && si.parentNode.parentNode === a && !si.parentNode._isSplit) && (di.push(si),
            si._x -= v,
            _isBeforeWordDelimiter(si, a, Z) && (si._wordEnd = !0)),
            si.nodeName === "BR" && (si.nextSibling && si.nextSibling.nodeName === "BR" || ni === 0) && ei.push([])));
    for (ni = 0; ni < ti; ni++) {
        if (si = ci[ni],
        ai = si.parentNode === a,
        si.nodeName === "BR") {
            ei || hi ? (si.parentNode && si.parentNode.removeChild(si),
            ci.splice(ni--, 1),
            ti--) : ii || a.appendChild(si);
            continue
        }
        if (hi && (vi = si.style,
        !ii && !ai && (si._x += si.parentNode._x,
        si._y += si.parentNode._y),
        vi.left = si._x + "px",
        vi.top = si._y + "px",
        vi.position = "absolute",
        vi.display = "block",
        vi.width = si._w + 1 + "px",
        vi.height = si._h + "px"),
        !ii && oi)
            if (si._isSplit)
                for (si._next = ri = si.nextSibling,
                si.parentNode.appendChild(si); ri && ri.nodeType === 3 && ri.textContent === " "; )
                    si._next = ri.nextSibling,
                    si.parentNode.appendChild(ri),
                    ri = ri.nextSibling;
            else
                si.parentNode._isSplit ? (si._parent = si.parentNode,
                !si.previousSibling && si.firstChild && (si.firstChild._isFirst = !0),
                si.nextSibling && si.nextSibling.textContent === " " && !si.nextSibling.nextSibling && pi.push(si.nextSibling),
                si._next = si.nextSibling && si.nextSibling._isFirst ? null : si.nextSibling,
                si.parentNode.removeChild(si),
                ci.splice(ni--, 1),
                ti--) : ai || (Ci = !si.nextSibling && _isBeforeWordDelimiter(si.parentNode, a, Z),
                si.parentNode._parent && si.parentNode._parent.appendChild(si),
                Ci && si.parentNode.appendChild(_doc.createTextNode(" ")),
                he === "span" && (si.style.display = "inline"),
                L.push(si));
        else
            si.parentNode._isSplit && !si._isSplit && si.innerHTML !== "" ? R.push(si) : oi && !si._isSplit && (he === "span" && (si.style.display = "inline"),
            L.push(si))
    }
    for (ni = pi.length; --ni > -1; )
        pi[ni].parentNode.removeChild(pi[ni]);
    if (ei) {
        for (hi && (yi = _doc.createElement(he),
        a.appendChild(yi),
        Si = yi.offsetWidth + "px",
        Ci = yi.offsetParent === a ? 0 : a.offsetLeft,
        a.removeChild(yi)),
        vi = a.style.cssText,
        a.style.cssText = "display:none;"; a.firstChild; )
            a.removeChild(a.firstChild);
        for (gi = Z === " " && (!hi || !ii && !oi),
        ni = 0; ni < ei.length; ni++) {
            for (di = ei[ni],
            yi = _doc.createElement(he),
            yi.style.cssText = "display:block;text-align:" + pe + ";position:" + (hi ? "absolute;" : "relative;"),
            fi && (yi.className = fi + (ui ? ni + 1 : "")),
            M.push(yi),
            ti = di.length,
            ri = 0; ri < ti; ri++)
                di[ri].nodeName !== "BR" && (si = di[ri],
                yi.appendChild(si),
                gi && si._wordEnd && yi.appendChild(_doc.createTextNode(" ")),
                hi && (ri === 0 && (yi.style.top = si._y + "px",
                yi.style.left = v + Ci + "px"),
                si.style.top = "0px",
                Ci && (si.style.left = si._x - Ci + "px")));
            ti === 0 ? yi.innerHTML = "&nbsp;" : !ii && !oi && (_deWordify(yi),
            _swapText(yi, String.fromCharCode(160), " ")),
            hi && (yi.style.width = Si,
            yi.style.height = si._h + "px"),
            a.appendChild(yi)
        }
        a.style.cssText = vi
    }
    hi && (m > a.clientHeight && (a.style.height = m - J + "px",
    a.clientHeight < m && (a.style.height = m + b + "px")),
    d > a.clientWidth && (a.style.width = d - x + "px",
    a.clientWidth < d && (a.style.width = d + P + "px"))),
    mi && (li ? a.style.display = li : a.style.removeProperty("display")),
    _pushReversed(f, L),
    ii && _pushReversed(c, R),
    _pushReversed(p, M)
}, _splitRawText = function h(a, u, f, c) {
    var p = u.tag ? u.tag : u.span ? "span" : "div", d = u.type || u.split || "chars,words,lines", m = ~d.indexOf("chars"), g = _isAbsolute(u), v = u.wordDelimiter || " ", _ = v !== " " ? "" : g ? "&#173; " : " ", b = "</" + p + ">", P = 1, J = u.specialChars ? typeof u.specialChars == "function" ? u.specialChars : _findSpecialChars : null, x, w, pe, L, R, M, Z, he, et = _doc.createElement("div"), ei = a.parentNode;
    for (ei.insertBefore(et, a),
    et.textContent = a.nodeValue,
    ei.removeChild(a),
    a = et,
    x = getText(a),
    Z = x.indexOf("<") !== -1,
    u.reduceWhiteSpace !== !1 && (x = x.replace(_multipleSpacesExp, " ").replace(_stripExp, "")),
    Z && (x = x.split("<").join("{{LT}}")),
    R = x.length,
    w = (x.charAt(0) === " " ? _ : "") + f(),
    pe = 0; pe < R; pe++)
        if (M = x.charAt(pe),
        J && (he = J(x.substr(pe), u.specialChars)))
            M = x.substr(pe, he || 1),
            w += m && M !== " " ? c() + M + "</" + p + ">" : M,
            pe += he - 1;
        else if (M === v && x.charAt(pe - 1) !== v && pe) {
            for (w += P ? b : "",
            P = 0; x.charAt(pe + 1) === v; )
                w += _,
                pe++;
            pe === R - 1 ? w += _ : x.charAt(pe + 1) !== ")" && (w += _ + f(),
            P = 1)
        } else
            M === "{" && x.substr(pe, 6) === "{{LT}}" ? (w += m ? c() + "{{LT}}</" + p + ">" : "{{LT}}",
            pe += 5) : M.charCodeAt(0) >= 55296 && M.charCodeAt(0) <= 56319 || x.charCodeAt(pe + 1) >= 65024 && x.charCodeAt(pe + 1) <= 65039 ? (L = ((x.substr(pe, 12).split(emojiExp) || [])[1] || "").length || 2,
            w += m && M !== " " ? c() + x.substr(pe, L) + "</" + p + ">" : x.substr(pe, L),
            pe += L - 1) : w += m && M !== " " ? c() + M + "</" + p + ">" : M;
    a.outerHTML = w + (P ? b : ""),
    Z && _swapText(ei, "{{LT}}", "<")
}, _split = function h(a, u, f, c) {
    var p = _toArray(a.childNodes), d = p.length, m = _isAbsolute(u), g, v;
    if (a.nodeType !== 3 || d > 1) {
        for (u.absolute = !1,
        g = 0; g < d; g++)
            v = p[g],
            v._next = v._isFirst = v._parent = v._wordEnd = null,
            (v.nodeType !== 3 || /\S+/.test(v.nodeValue)) && (m && v.nodeType !== 3 && _getComputedStyle(v).display === "inline" && (v.style.display = "inline-block",
            v.style.position = "relative"),
            v._isSplit = !0,
            h(v, u, f, c));
        u.absolute = m,
        a._isSplit = !0;
        return
    }
    _splitRawText(a, u, f, c)
}, SplitText = function() {
    function h(u, f) {
        _coreInitted || _initCore(),
        this.elements = _toArray(u),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = f || {},
        _context(this),
        this.split(f)
    }
    var a = h.prototype;
    return a.split = function(f) {
        this.isSplit && this.revert(),
        this.vars = f = f || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var c = this.elements.length, p = f.tag ? f.tag : f.span ? "span" : "div", d = _cssClassFunc(f.wordsClass, p), m = _cssClassFunc(f.charsClass, p), g, v, _; --c > -1; )
            _ = this.elements[c],
            this._originals[c] = _.innerHTML,
            g = _.clientHeight,
            v = _.clientWidth,
            _split(_, f, d, m),
            _setPositionsAfterSplit(_, f, this.chars, this.words, this.lines, v, g);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    ,
    a.revert = function() {
        var f = this._originals;
        if (!f)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach(function(c, p) {
            return c.innerHTML = f[p]
        }),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    ,
    h.create = function(f, c) {
        return new h(f,c)
    }
    ,
    h
}();
SplitText.version = "3.11.4";
SplitText.register = _initCore;
function getLast(h) {
    return h[h.length - 1]
}
function shuffleArray(h) {
    const a = [...h];
    for (let u = a.length - 1; u > 0; u--) {
        const f = Math.floor(Math.random() * (u + 1))
          , c = a[u];
        a[u] = a[f],
        a[f] = c
    }
    return a
}
function getSerialNumbersArray(h) {
    return [...Array(h)].map((a,u)=>u)
}
const COLORS$1 = ["#f788e7", "#289d57", "#f9bcb0", "#97afe6", "#f70f17"];
(class extends Component {
    static selectorRoot = "[data-colorful]";
    onInit() {
        this.elsChar = new SplitText(this.el.querySelector("[data-colorful-text]") || this.el,{
            type: "chars",
            span: !0
        }).chars,
        gsap.set(this.elsChar, {
            display: "inline-block"
        }),
        this.delay = .45 / Math.max(this.elsChar.length, 8),
        this.colors = shuffleArray(COLORS$1),
        this.colorInitial = window.getComputedStyle(this.elsChar[0]).color,
        this.id = getUniqueId("DColorful")
    }
    onMouseenter() {
        const h = COLORS$1[Math.floor(Math.random() * COLORS$1.length)];
        this.elsChar.forEach((a,u)=>{
            gsapK.timeline({
                delay: this.delay * u
            }, `${this.id}${u}`).to(a, {
                color: h,
                duration: .3,
                ease: "power1.out"
            }).to(a, {
                color: this.colorInitial,
                duration: .6,
                ease: "power4.out",
                clearProps: "color"
            })
        }
        )
    }
}
).register();
(class extends Component {
    static componentName = "CHeader";
    static isPermanent = !0;
    static isDisableAutoPlayScroll = !0;
    isScroll = !1;
    prevScroll = 0;
    onInit() {
        this.elHeaderMenu = document.querySelector(".CHeaderMenu"),
        this.setDetectChangeHeight(),
        this.isSp && this.playScroll()
    }
    onScroll({scroll: h}) {
        if (this.isSp) {
            const a = Math.sign(h - this.prevScroll);
            !this.isScroll && a > 0 && h > 0 ? (this.isScroll = !0,
            document.querySelector("body").classList.add("-scroll"),
            this.el.classList.add("-scroll"),
            this.elHeaderMenu.classList.add("-scroll")) : this.isScroll && a < 0 && (this.isScroll = !1,
            document.querySelector("body").classList.remove("-scroll"),
            this.el.classList.remove("-scroll"),
            this.elHeaderMenu.classList.remove("-scroll")),
            this.prevScroll = h
        }
    }
    setDetectChangeHeight() {
        if (!this.isSp) {
            this.intersectionObserver && this.intersectionObserver.destroy();
            const h = store.pageId === "top";
            this.intersectionObserver = this.addIntersectionObserver({
                el: document.querySelector(h ? ".LWhat" : "[data-scroll-down-observer]"),
                callback: ({isIntersecting: a},u)=>{
                    !h && a || h && !a && u < 0 ? (this.el.classList.remove("-scroll"),
                    this.elHeaderMenu.classList.remove("-scroll")) : (h && a || !h && !a && u > 0) && (this.el.classList.add("-scroll"),
                    this.elHeaderMenu.classList.add("-scroll"))
                }
                ,
                param: h ? {
                    rootMargin: "0% 0% -100%"
                } : void 0
            })
        }
    }
    onEnter() {
        this.setDetectChangeHeight()
    }
}
).register();
(class extends Component {
    static componentName = "CHeaderMenu";
    static isPermanent = !0;
    isShow = !1;
    onInit() {
        this.headerNav = document.getElementById("CHeaderNav"),
        this.on("showCHeaderMenuItem", ()=>{
            this.isShow || (this.isShow = !0,
            gsap.to(this.el, {
                opacity: 1,
                duration: .3
            }))
        }
        ),
        this.on("hideCHeaderMenuItem", ()=>{
            this.isShow && (this.isShow = !1,
            gsap.to(this.el, {
                opacity: 0,
                duration: .3
            }))
        }
        )
    }
    onLeave() {
        this.emit("hideCHeaderMenuItem")
    }
    onResize() {
        this.headerNavW = this.headerNav.clientWidth,
        this.refs.nav.style.width = `${this.headerNavW}px`
    }
}
).register();
const ID$2 = "menu"
  , DELAY_OPEN$1 = .2;
(class extends Component {
    static componentName = "CFollowContents";
    static isPermanent = !0;
    onInit() {
        this.on("inCFooterFoot", ()=>{
            this.el.classList.add("-hide")
        }
        ),
        this.on("outCFooterFoot", ()=>{
            this.el.classList.remove("-hide")
        }
        ),
        this.contactButton = this.el.querySelector(".contactButton"),
        this.menuTrigger = this.el.querySelector(".menuTrigger"),
        this.eventButton = this.el.querySelector(".eventButton"),
        this.eventNav = document.querySelector("[data-event-button-trigger]"),
        this.isSp && this.addEventClass()
    }
    async onOpenModal(h) {
        h === ID$2 && (await wait(DELAY_OPEN$1),
        this.el.classList.add("-openMenu"))
    }
    onCloseModal(h) {
        h === ID$2 && this.el.classList.remove("-openMenu")
    }
    onEnter() {
        this.isSp && setTimeout(()=>{
            this.eventNav = document.querySelector("[data-event-button-trigger]"),
            this.addEventClass()
        }
        , 300)
    }
    addEventClass() {
        const h = location.href;
        h.match(/\/events\/.+/) !== null && !h.endsWith("/events/") && this.eventNav ? (this.contactButton.classList.add("-eventDetail"),
        this.menuTrigger.classList.add("-eventDetail"),
        this.eventButton.classList.add("-current")) : (this.contactButton.classList.remove("-eventDetail"),
        this.menuTrigger.classList.remove("-eventDetail"),
        this.eventButton.classList.remove("-current"))
    }
}
).register();
const ID$1 = "menu"
  , DELAY_OPEN = .2;
(class extends Component {
    static componentName = "CMenu";
    static isPermanent = !0;
    isOpen = !1;
    onInit() {
        this.el.style.pointerEvents = "none"
    }
    async onOpenModal(h) {
        h !== ID$1 || this.isOpen || (this.isOpen = !0,
        await wait(DELAY_OPEN),
        gsap.fromTo(this.refs.content, {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
        }, {
            "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: .5,
            ease: "power4.out"
        }),
        this.el.style.pointerEvents = "auto")
    }
    onCloseModal(h) {
        h !== ID$1 || !this.isOpen || (this.isOpen = !1,
        gsap.fromTo(this.refs.content, {
            "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }, {
            "clip-path": "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            duration: .46,
            ease: "power4.out"
        }),
        this.el.style.pointerEvents = "none")
    }
    onLeave() {
        this.emit("closeModal", ID$1)
    }
}
).register();
(class extends Component {
    static componentName = "CEye";
    static isPermanent = !0;
    isInitLottie = !1;
    isShow = !1;
    onInit() {
        store.CEye = this
    }
    initLottie() {
        if (this.isInitLottie)
            return !0;
        this.isInitLottie = !0,
        this.lottie = lottie.loadAnimation({
            container: this.el,
            renderer: "svg",
            loop: !0,
            autoplay: !1,
            path: "/assets/lottie/hover_icon.json"
        }),
        this.lottie.setSpeed(.7)
    }
    show(h, a, u=!1, f=!1) {
        this.lottie && (this.isShow || (this.isShow = !0,
        this.el.classList[u ? "add" : "remove"]("-yellow"),
        this.el.classList[f ? "add" : "remove"]("-career"),
        this.timerHide ? (this.timerHide.kill(),
        this.timerHide = null) : this._show(h, a)))
    }
    _show(h, a) {
        this.onLottieComplete && this.lottie.removeEventListener("complete", this.onLottieComplete),
        this.lottie.setLoop(!0),
        this.lottie.setSpeed(.7),
        this.lottie.play(),
        gsapK.set(this.el, {
            x: h,
            y: a,
            visibility: "visible"
        }),
        this.lottie.playSegments([[0, 10], [10, 60]], !0)
    }
    move(h, a) {
        gsapK.to(this.el, {
            x: h,
            y: a,
            duration: .4,
            ease: "power3.out"
        })
    }
    hide() {
        this.lottie && this.isShow && (this.isShow = !1,
        this.timerHide = gsap.delayedCall(.2, ()=>{
            this._hide(),
            this.timerHide = null
        }
        ))
    }
    _hide() {
        this.lottie.setLoop(!1),
        this.lottie.setSpeed(.7 * 2),
        this.lottie.playSegments([10, 0], !0),
        this.onLottieComplete = ()=>{
            this.lottie.pause(),
            gsapK.set(this.el, {
                visibility: "hidden"
            }),
            this.lottie.removeEventListener("complete", this.onLottieComplete),
            this.onLottieComplete = null
        }
        ,
        this.lottie.addEventListener("complete", this.onLottieComplete)
    }
    onLeave() {
        this.hide()
    }
}
).register();
const SCALE_IN = .3
  , SCALE_OUT = .5
  , DURATION_SCALE_IN = .5
  , DURATION_SCALE_OUT = .2
  , DURATION_FADE = .2
  , EASE_SCALE = "expo.out"
  , EASE_FADE = "power2.out"
  , DELAY_CLIP = .15;
(class extends Component {
    static componentName = "CHeaderMenuItem";
    static isPermanent = !0;
    isShow = !1;
    onInit() {
        this.id = this.el.dataset.id,
        this.el.classList.add("-hide"),
        gsap.set(this.refs.list, {
            "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        }),
        this.on("showCHeaderMenuItem", h=>{
            h === this.id && (this.isShow || (this.isShow = !0,
            this.refs.sub.style.pointerEvents = "auto",
            gsapK.fromTo(this.refs.sub, [[{
                opacity: 0
            }, {
                opacity: 1,
                duration: DURATION_FADE,
                ease: EASE_FADE
            }], [{
                scale: SCALE_IN
            }, {
                scale: 1,
                duration: DURATION_SCALE_IN,
                ease: EASE_SCALE
            }]]),
            gsapK.fromTo(this.refs.list, {
                "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
            }, {
                "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: DURATION_SCALE_IN,
                ease: EASE_SCALE,
                delay: DELAY_CLIP,
                clearProps: "clip-path",
                onStart: ()=>{
                    this.el.classList.remove("-hide")
                }
            }),
            gsapK.fromTo(this.refs.mask, {
                "clip-path": "polygon(0% 0%, 10% 0%, 10% 100%, 0% 100%)"
            }, {
                "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: DURATION_SCALE_IN,
                ease: EASE_SCALE,
                delay: DELAY_CLIP,
                clearProps: "clip-path"
            })))
        }
        ),
        this.on("hideCHeaderMenuItem", h=>{
            h === this.id && this.isShow && (this.isShow = !1,
            this.el.classList.add("-hide"),
            this.refs.sub.style.pointerEvents = "",
            gsapK.fromTo(this.refs.sub, [[{
                opacity: 1
            }, {
                opacity: 0,
                duration: DURATION_SCALE_OUT,
                ease: EASE_FADE,
                clearProps: "opacity"
            }], [{
                scale: 1
            }, {
                scale: SCALE_OUT,
                duration: DURATION_SCALE_OUT,
                ease: EASE_SCALE
            }]]),
            gsapK.fromTo(this.refs.list, {
                "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
            }, {
                "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                duration: DURATION_SCALE_OUT,
                ease: EASE_SCALE
            }))
        }
        )
    }
    onMouseenter() {
        this.emit("showCHeaderMenuItem", this.id),
        clearTimeout(this.timerLeave)
    }
    onMouseleave() {
        this.timerLeave = setTimeout(()=>{
            this.emit("hideCHeaderMenuItem", this.id)
        }
        , 150)
    }
    onClick() {
        isMobile && (this.isShow ? this.emit("hideCHeaderMenuItem", this.id) : this.emit("showCHeaderMenuItem", this.id))
    }
}
).register();
const ID = "menu"
  , DELAY_CLOSE = .28;
(class extends Component {
    static componentName = "CMenuTrigger";
    static isPermanent = !0;
    isOpen = !1;
    onClick() {
        this.isOpen ? this.emit("closeModal", "menu") : this.open()
    }
    open() {
        this.isOpen || (this.isOpen = !0,
        this.emit("openModal", "menu"))
    }
    close() {
        this.isOpen && (this.isOpen = !1,
        this.emit("closeModal", "menu"))
    }
    onOpenModal(h) {
        h === ID && (this.isOpen = !0,
        this.refs.text.textContent = "Close",
        this.el.classList.add("-open"))
    }
    async onCloseModal(h) {
        h === ID && (this.isOpen = !1,
        await wait(DELAY_CLOSE),
        this.refs.text.textContent = "Menu",
        this.el.classList.remove("-open"))
    }
}
).register();
(class extends Component {
    static componentName = "CContactButton";
    static isPermanent = !0;
    num = -1;
    onMouseenter() {
        this.num += 1,
        this.index = this.num % 3,
        gsapK.to(this.refs.svgIcon[this.index], {
            xPercent: this.index === 2 ? -30 : -40,
            yPercent: -5,
            opacity: 1,
            duration: .3,
            ease: "power4.out"
        }),
        gsapK.set(this.refs.svgIcon[this.index], {
            opacity: 1
        }),
        this.index === 0 && gsapK.to(this.refs.hand, {
            xPercent: -60,
            yPercent: -15,
            rotate: -15,
            opacity: 1,
            duration: .3,
            ease: "power4.out"
        }),
        gsapK.to(this.refs.bg, {
            xPercent: 25,
            yPercent: 10,
            rotate: 15,
            duration: .3,
            ease: "power4.out"
        })
    }
    onMouseleave() {
        gsapK.to(this.refs.svgIcon[this.index], {
            xPercent: 0,
            yPercent: 0,
            duration: .1,
            ease: "power4.out"
        }),
        gsapK.set(this.refs.svgIcon[this.index], {
            opacity: 0
        }),
        this.index === 0 && gsapK.to(this.refs.hand, {
            xPercent: 0,
            yPercent: 0,
            rotate: 0,
            opacity: 0,
            duration: .01,
            ease: "power4.out"
        }),
        gsapK.to(this.refs.bg, {
            xPercent: 0,
            yPercent: 0,
            rotate: 0,
            duration: .15,
            ease: "power4.out"
        })
    }
}
).register();
const COLOR_FONT = "#282828"
  , COLORS = ["#f788e7", "#289d57", "#f9bcb0", "#97afe6", "#f70f17"];
(class extends Component {
    static componentName = "CHeaderLink";
    static isPermanent = !0;
    isCurrent = !1;
    onInit() {
        this.isBack = "headerTriggerBack"in this.el.dataset,
        this.id = this.el.dataset.id,
        this.isTrigger = this.el.dataset.el === "CHeaderTrigger",
        this.pathname = !this.el.getAttribute("href") || this.el.getAttribute("href") === "#" ? "" : this.el.pathname,
        this.isBack && (this.on("CHeaderLink onMouseenter", (h,a)=>{
            h === this.id && (this.isCurrent || (this.el.style.setProperty("--color", a),
            this.el.classList.add("-hover"),
            this.isTrigger && this.el.classList.add("-open")))
        }
        ),
        this.on("CHeaderLink onMouseleave", h=>{
            h === this.id && this.el.classList.remove("-hover")
        }
        )),
        this.detectCurrent()
    }
    detectCurrent() {
        this.isBack && (this.el.attributes.href?.value && this.pathname === window.location.pathname ? (this.isCurrent = !0,
        this.el.classList.add("-current"),
        this.el.style.setProperty("--color", COLOR_FONT)) : (this.isCurrent = !1,
        this.el.classList.remove("-current")))
    }
    onMouseenter() {
        if (this.isCurrent || this.isBack)
            return;
        const h = Math.floor(Math.random() * COLORS.length);
        this.emit("CHeaderLink onMouseenter", this.id, COLORS[h])
    }
    onMouseleave() {
        this.isCurrent || this.isBack || this.emit("CHeaderLink onMouseleave", this.id)
    }
    onEnter() {
        this.detectCurrent()
    }
}
).register();
const PARALLAX$1 = store.parallaxBack * -1
  , SCALE_MIN$1 = store.scaleMinParallax
  , TRANSFORM_ORIGIN$1 = 200
  , EASE_PARALLAX$1 = store.easeParallax;
(class extends Component {
    static componentName = "CFooterCv";
    isParallax = !1;
    isInitLottie = !1;
    initLottie() {
        if (!(this.isDestroyed || !this.el))
            return this.isInitLottie ? !0 : (this.isInitLottie = !0,
            this.lotties = Array.prototype.map.call(this.el.querySelectorAll('[data-ref="lottie"]'), async h=>{
                const a = lottie.loadAnimation({
                    container: h,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !1,
                    path: "/assets/lottie/get_in_touch.json"
                });
                return a.setSpeed(.7),
                a
            }
            ),
            Promise.all(this.lotties))
    }
    async onIntersect({isIntersecting: h}) {
        this.isDestroyed || (h ? (await this.initLottie(),
        this.lotties?.forEach(async a=>{
            (await a).play()
        }
        ),
        this.playScroll()) : (this.pauseScroll(),
        this.lotties?.forEach(async a=>{
            (await a).pause()
        }
        ),
        this.refs.inner.style.willChange = "",
        this.refs.GShadow.style.willChange = ""))
    }
    onScroll({scroll: h}) {
        if (this.yStart <= h && h < this.yEnd) {
            this.isParallax || (this.isParallax = !0,
            this.refs.inner.style.willChange = "transform",
            this.refs.GShadow.style.willChange = "opacity");
            const a = EASE_PARALLAX$1(1 - (h - this.yStart) / this.yDistance);
            gsapK.scrub(this.refs.inner, {
                y: a * this.yDistance * PARALLAX$1,
                scale: 1 - a * SCALE_MIN$1
            }),
            gsapK.scrub(this.refs.GShadow, {
                opacity: a
            })
        } else
            this.isParallax && (this.isParallax = !1,
            gsapK.resetScrub(this.refs.inner, {
                y: 0,
                scale: 1
            }),
            gsapK.resetScrub(this.refs.GShadow, {
                opacity: 0
            }),
            this.refs.inner.style.willChange = "",
            this.refs.GShadow.style.willChange = "")
    }
    onResize({height: h}) {
        if (this.isDestroyed || !this.el)
            return;
        const {scrollY: a} = this
          , {top: u} = this.el.getBoundingClientRect();
        this.yStart = u + a - h,
        this.yEnd = this.yStart + h,
        this.yDistance = this.yEnd - this.yStart,
        this.refs.inner.style.transformOrigin = `center ${getVariableSizeRem(TRANSFORM_ORIGIN$1)}`
    }
}
).register();
const PARALLAX = store.parallaxBack
  , SCALE_MIN = 1
  , TRANSFORM_ORIGIN = -100
  , EASE_PARALLAX = ease["cubic.in"];
(class extends Component {
    static componentName = "CFooterFoot";
    static intersectOptions = {
        rootMargin: "0% 0% 10%"
    };
    isParallax = !1;
    isInitLottie = !1;
    onInit() {
        this.isSp || this.initLottie(),
        this.setInitialPosition = debounce(()=>{
            const {scrollY: h} = this;
            this.yStart >= h ? gsapK.resetScrub(this.refs.wrapper, {
                y: 1 * this.yDistance * PARALLAX,
                scale: 1 + 1 * SCALE_MIN
            }) : h >= this.yEnd && gsapK.resetScrub(this.refs.wrapper, {
                y: 0,
                scale: 1
            })
        }
        )
    }
    initLottie() {
        this.isInitLottie || (this.isInitLottie = !0,
        this.lottie = lottie.loadAnimation({
            container: this.refs.iconSvg,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            path: "/assets/lottie/pc_footer.json"
        }))
    }
    onIntersect({isIntersecting: h}) {
        h ? (this.playScroll(),
        this.emit("inCFooterFoot"),
        this.isSp || this.lottie?.goToAndPlay(0)) : (this.pauseScroll(),
        this.emit("outCFooterFoot"),
        this.isSp || this.lottie?.pause()),
        this.setInitialPosition()
    }
    onScroll({scroll: h}) {
        if (this.yStart <= h && h < this.yEnd) {
            this.isParallax || (this.isParallax = !0,
            this.refs.wrapper.style.willChange = "transform");
            const a = EASE_PARALLAX(1 - (h - this.yStart) / this.yDistance);
            gsapK.scrub(this.refs.wrapper, {
                y: a * this.yDistance * PARALLAX,
                scale: 1 + a * SCALE_MIN
            })
        } else
            this.isParallax && (this.isParallax = !1,
            this.refs.wrapper.style.willChange = "")
    }
    onResize({height: h}) {
        if (!this.el)
            return;
        const {scrollY: a} = this
          , {top: u} = this.el.getBoundingClientRect();
        this.yStart = u + a - h,
        this.yEnd = Math.min(this.yStart + h, store.cScroll.limit - h * (this.isSp ? .04 : .02)),
        this.yDistance = this.yEnd - this.yStart,
        this.refs.wrapper.style.transformOrigin = `center ${getVariableSizeRem(TRANSFORM_ORIGIN)}`,
        this.setInitialPosition()
    }
}
).register();
(class extends Component {
    static componentName = "CHeaderTrigger";
    static isPermanent = !0;
    onInit() {
        this.isSp || (this.id = this.el.dataset.id,
        this.headerMenu = document.querySelector(".CHeaderMenu"),
        this.on("showCHeaderMenuItem", h=>{
            h === this.id && this.el.classList.add("-open")
        }
        ),
        this.on("hideCHeaderMenuItem", h=>{
            h === this.id && this.el.classList.remove("-open")
        }
        ))
    }
    onMouseenter() {
        this.emit("showCHeaderMenuItem", this.id)
    }
    onClick() {
        isMobile && this.emit("showCHeaderMenuItem", this.id)
    }
}
).register();
(class extends Component {
    static componentName = "CFooterCvLink";
    isInitLottie = !1;
    onInit() {
        this.initLottie()
    }
    initLottie() {
        this.isInitLottie || (this.isInitLottie = !0,
        this.lottie = lottie.loadAnimation({
            container: this.refs.icon,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            path: `/assets/lottie/${this.el.dataset.cFooterCvLink}.json`
        }))
    }
    onMouseenter() {
        this.lottie?.goToAndPlay(0)
    }
}
).register();
export {gsapWithCSS as A, getSerialNumbersArray as B, Component as C, getDefaultExportFromCjs as D, D as E, Gesture as G, Marquee as M, Page as P, Qe as Q, Sort as S, V, __vitePreload as _, getVariableSizeRem as a, getVariableSize as b, map as c, getRandom as d, ease as e, easeOutSine as f, gsapK as g, easeInCubic as h, isAndroid as i, isMobile as j, linear as k, lottie as l, media as m, mix as n, onLoadMedia as o, clamp as p, easeInQuad as q, easeInOutCubic as r, store as s, throttle as t, shuffleArray as u, pad2 as v, wait as w, getLoopedNumber as x, getLast as y, arrowIconMove as z};
