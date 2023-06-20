import {D as E} from "./CFooterCvLink.astro_astro_type_script_index_0_lang.635a4800.js";
var y = {
    exports: {}
};
/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.6
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */
(function(v, b) {
    (function() {
        function l(t) {
            if (typeof t > "u")
                throw new Error('Pathformer [constructor]: "element" parameter is required');
            if (t.constructor === String && (t = document.getElementById(t),
            !t))
                throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
            if (t instanceof window.SVGElement || t instanceof window.SVGGElement || /^svg$/i.test(t.nodeName))
                this.el = t;
            else
                throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
            this.scan(t)
        }
        l.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"],
        l.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"],
        l.prototype.scan = function(t) {
            for (var r, e, i, n, a = t.querySelectorAll(this.TYPES.join(",")), o = 0; o < a.length; o++)
                e = a[o],
                r = this[e.tagName.toLowerCase() + "ToPath"],
                i = r(this.parseAttr(e.attributes)),
                n = this.pathMaker(e, i),
                e.parentNode.replaceChild(n, e)
        }
        ,
        l.prototype.lineToPath = function(t) {
            var r = {}
              , e = t.x1 || 0
              , i = t.y1 || 0
              , n = t.x2 || 0
              , a = t.y2 || 0;
            return r.d = "M" + e + "," + i + "L" + n + "," + a,
            r
        }
        ,
        l.prototype.rectToPath = function(t) {
            var r = {}
              , e = parseFloat(t.x) || 0
              , i = parseFloat(t.y) || 0
              , n = parseFloat(t.width) || 0
              , a = parseFloat(t.height) || 0;
            if (t.rx || t.ry) {
                var o = parseInt(t.rx, 10) || -1
                  , h = parseInt(t.ry, 10) || -1;
                o = Math.min(Math.max(o < 0 ? h : o, 0), n / 2),
                h = Math.min(Math.max(h < 0 ? o : h, 0), a / 2),
                r.d = "M " + (e + o) + "," + i + " L " + (e + n - o) + "," + i + " A " + o + "," + h + ",0,0,1," + (e + n) + "," + (i + h) + " L " + (e + n) + "," + (i + a - h) + " A " + o + "," + h + ",0,0,1," + (e + n - o) + "," + (i + a) + " L " + (e + o) + "," + (i + a) + " A " + o + "," + h + ",0,0,1," + e + "," + (i + a - h) + " L " + e + "," + (i + h) + " A " + o + "," + h + ",0,0,1," + (e + o) + "," + i
            } else
                r.d = "M" + e + " " + i + " L" + (e + n) + " " + i + " L" + (e + n) + " " + (i + a) + " L" + e + " " + (i + a) + " Z";
            return r
        }
        ,
        l.prototype.polylineToPath = function(t) {
            var r = {}, e = t.points.trim().split(" "), i, n;
            if (t.points.indexOf(",") === -1) {
                var a = [];
                for (i = 0; i < e.length; i += 2)
                    a.push(e[i] + "," + e[i + 1]);
                e = a
            }
            for (n = "M" + e[0],
            i = 1; i < e.length; i++)
                e[i].indexOf(",") !== -1 && (n += "L" + e[i]);
            return r.d = n,
            r
        }
        ,
        l.prototype.polygonToPath = function(t) {
            var r = l.prototype.polylineToPath(t);
            return r.d += "Z",
            r
        }
        ,
        l.prototype.ellipseToPath = function(t) {
            var r = {}
              , e = parseFloat(t.rx) || 0
              , i = parseFloat(t.ry) || 0
              , n = parseFloat(t.cx) || 0
              , a = parseFloat(t.cy) || 0
              , o = n - e
              , h = a
              , c = parseFloat(n) + parseFloat(e)
              , p = a;
            return r.d = "M" + o + "," + h + "A" + e + "," + i + " 0,1,1 " + c + "," + p + "A" + e + "," + i + " 0,1,1 " + o + "," + p,
            r
        }
        ,
        l.prototype.circleToPath = function(t) {
            var r = {}
              , e = parseFloat(t.r) || 0
              , i = parseFloat(t.cx) || 0
              , n = parseFloat(t.cy) || 0
              , a = i - e
              , o = n
              , h = parseFloat(i) + parseFloat(e)
              , c = n;
            return r.d = "M" + a + "," + o + "A" + e + "," + e + " 0,1,1 " + h + "," + c + "A" + e + "," + e + " 0,1,1 " + a + "," + c,
            r
        }
        ,
        l.prototype.pathMaker = function(t, r) {
            var e, i, n = document.createElementNS("http://www.w3.org/2000/svg", "path");
            for (e = 0; e < t.attributes.length; e++)
                i = t.attributes[e],
                this.ATTR_WATCH.indexOf(i.name) === -1 && n.setAttribute(i.name, i.value);
            for (e in r)
                n.setAttribute(e, r[e]);
            return n
        }
        ,
        l.prototype.parseAttr = function(t) {
            for (var r, e = {}, i = 0; i < t.length; i++) {
                if (r = t[i],
                this.ATTR_WATCH.indexOf(r.name) !== -1 && r.value.indexOf("%") !== -1)
                    throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
                e[r.name] = r.value
            }
            return e
        }
        ;
        var f, d, m, u;
        function s(t, r, e) {
            f(),
            this.isReady = !1,
            this.setElement(t, r),
            this.setOptions(r),
            this.setCallback(e),
            this.isReady && this.init()
        }
        s.LINEAR = function(t) {
            return t
        }
        ,
        s.EASE = function(t) {
            return -Math.cos(t * Math.PI) / 2 + .5
        }
        ,
        s.EASE_OUT = function(t) {
            return 1 - Math.pow(1 - t, 3)
        }
        ,
        s.EASE_IN = function(t) {
            return Math.pow(t, 3)
        }
        ,
        s.EASE_OUT_BOUNCE = function(t) {
            var r = -Math.cos(t * (.5 * Math.PI)) + 1
              , e = Math.pow(r, 1.5)
              , i = Math.pow(1 - t, 2)
              , n = -Math.abs(Math.cos(e * (2.5 * Math.PI))) + 1;
            return 1 - i + n * i
        }
        ,
        s.prototype.setElement = function(t, r) {
            var e, i;
            if (typeof t > "u")
                throw new Error('Vivus [constructor]: "element" parameter is required');
            if (t.constructor === String && (t = document.getElementById(t),
            !t))
                throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
            if (this.parentEl = t,
            r && r.file) {
                i = this,
                e = function() {
                    var a = document.createElement("div");
                    a.innerHTML = this.responseText;
                    var o = a.querySelector("svg");
                    if (!o)
                        throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : " + r.file);
                    i.el = o,
                    i.el.setAttribute("width", "100%"),
                    i.el.setAttribute("height", "100%"),
                    i.parentEl.appendChild(i.el),
                    i.isReady = !0,
                    i.init(),
                    i = null
                }
                ;
                var n = new window.XMLHttpRequest;
                n.addEventListener("load", e),
                n.open("GET", r.file),
                n.send();
                return
            }
            switch (t.constructor) {
            case window.SVGSVGElement:
            case window.SVGElement:
            case window.SVGGElement:
                this.el = t,
                this.isReady = !0;
                break;
            case window.HTMLObjectElement:
                i = this,
                e = function(a) {
                    if (!i.isReady) {
                        if (i.el = t.contentDocument && t.contentDocument.querySelector("svg"),
                        !i.el && a)
                            throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
                        i.el && (t.getAttribute("built-by-vivus") && (i.parentEl.insertBefore(i.el, t),
                        i.parentEl.removeChild(t),
                        i.el.setAttribute("width", "100%"),
                        i.el.setAttribute("height", "100%")),
                        i.isReady = !0,
                        i.init(),
                        i = null)
                    }
                }
                ,
                e() || t.addEventListener("load", e);
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')
            }
        }
        ,
        s.prototype.setOptions = function(t) {
            var r = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"]
              , e = ["inViewport", "manual", "autostart"];
            if (t !== void 0 && t.constructor !== Object)
                throw new Error('Vivus [constructor]: "options" parameter must be an object');
            if (t = t || {},
            t.type && r.indexOf(t.type) === -1)
                throw new Error("Vivus [constructor]: " + t.type + " is not an existing animation `type`");
            if (this.type = t.type || r[0],
            t.start && e.indexOf(t.start) === -1)
                throw new Error("Vivus [constructor]: " + t.start + " is not an existing `start` option");
            if (this.start = t.start || e[0],
            this.isIE = window.navigator.userAgent.indexOf("MSIE") !== -1 || window.navigator.userAgent.indexOf("Trident/") !== -1 || window.navigator.userAgent.indexOf("Edge/") !== -1,
            this.duration = u(t.duration, 120),
            this.delay = u(t.delay, null),
            this.dashGap = u(t.dashGap, 1),
            this.forceRender = t.hasOwnProperty("forceRender") ? !!t.forceRender : this.isIE,
            this.reverseStack = !!t.reverseStack,
            this.selfDestroy = !!t.selfDestroy,
            this.onReady = t.onReady,
            this.map = [],
            this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null,
            this.ignoreInvisible = t.hasOwnProperty("ignoreInvisible") ? !!t.ignoreInvisible : !1,
            this.animTimingFunction = t.animTimingFunction || s.LINEAR,
            this.pathTimingFunction = t.pathTimingFunction || s.LINEAR,
            this.delay >= this.duration)
                throw new Error("Vivus [constructor]: delay must be shorter than duration")
        }
        ,
        s.prototype.setCallback = function(t) {
            if (t && t.constructor !== Function)
                throw new Error('Vivus [constructor]: "callback" parameter must be a function');
            this.callback = t || function() {}
        }
        ,
        s.prototype.mapping = function() {
            var t, r, e, i, n, a, o, h, c, p;
            for (h = a = o = 0,
            r = this.el.querySelectorAll("path"),
            p = !1,
            t = 0; t < r.length; t++)
                if (e = r[t],
                !this.isInvisible(e)) {
                    if (n = {
                        el: e,
                        length: 0,
                        startAt: 0,
                        duration: 0,
                        isResizeSensitive: !1
                    },
                    e.getAttribute("vector-effect") === "non-scaling-stroke") {
                        var w = e.getBoundingClientRect()
                          , g = e.getBBox();
                        c = Math.max(w.width / g.width, w.height / g.height),
                        n.isResizeSensitive = !0,
                        p = !0
                    } else
                        c = 1;
                    if (n.length = Math.ceil(e.getTotalLength() * c),
                    isNaN(n.length)) {
                        window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", e);
                        continue
                    }
                    this.map.push(n),
                    e.style.strokeDasharray = n.length + " " + (n.length + this.dashGap * 2),
                    e.style.strokeDashoffset = n.length + this.dashGap,
                    n.length += this.dashGap,
                    a += n.length,
                    this.renderPath(t)
                }
            for (p && console.warn("Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info."),
            a = a === 0 ? 1 : a,
            this.delay = this.delay === null ? this.duration / 3 : this.delay,
            this.delayUnit = this.delay / (r.length > 1 ? r.length - 1 : 1),
            this.reverseStack && this.map.reverse(),
            t = 0; t < this.map.length; t++) {
                switch (n = this.map[t],
                this.type) {
                case "delayed":
                    n.startAt = this.delayUnit * t,
                    n.duration = this.duration - this.delay;
                    break;
                case "oneByOne":
                    n.startAt = o / a * this.duration,
                    n.duration = n.length / a * this.duration;
                    break;
                case "sync":
                case "async":
                case "nsync":
                    n.startAt = 0,
                    n.duration = this.duration;
                    break;
                case "scenario-sync":
                    e = n.el,
                    i = this.parseAttr(e),
                    n.startAt = h + (u(i["data-delay"], this.delayUnit) || 0),
                    n.duration = u(i["data-duration"], this.duration),
                    h = i["data-async"] !== void 0 ? n.startAt : n.startAt + n.duration,
                    this.frameLength = Math.max(this.frameLength, n.startAt + n.duration);
                    break;
                case "scenario":
                    e = n.el,
                    i = this.parseAttr(e),
                    n.startAt = u(i["data-start"], this.delayUnit) || 0,
                    n.duration = u(i["data-duration"], this.duration),
                    this.frameLength = Math.max(this.frameLength, n.startAt + n.duration);
                    break
                }
                o += n.length,
                this.frameLength = this.frameLength || this.duration
            }
        }
        ,
        s.prototype.recalc = function() {
            this.mustRecalcScale || (this.mustRecalcScale = d(function() {
                this.performLineRecalc()
            }
            .bind(this)))
        }
        ,
        s.prototype.performLineRecalc = function() {
            for (var t, r, e, i, n, a = 0; a < this.map.length; a++)
                t = this.map[a],
                t.isResizeSensitive && (r = t.el,
                e = r.getBoundingClientRect(),
                i = r.getBBox(),
                n = Math.max(e.width / i.width, e.height / i.height),
                t.length = Math.ceil(r.getTotalLength() * n),
                r.style.strokeDasharray = t.length + " " + (t.length + this.dashGap * 2));
            this.trace(),
            this.mustRecalcScale = null
        }
        ,
        s.prototype.draw = function() {
            var t = this;
            if (this.currentFrame += this.speed,
            this.currentFrame <= 0)
                this.stop(),
                this.reset();
            else if (this.currentFrame >= this.frameLength)
                this.stop(),
                this.currentFrame = this.frameLength,
                this.trace(),
                this.selfDestroy && this.destroy();
            else {
                this.trace(),
                this.handle = d(function() {
                    t.draw()
                });
                return
            }
            this.callback(this),
            this.instanceCallback && (this.instanceCallback(this),
            this.instanceCallback = null)
        }
        ,
        s.prototype.trace = function() {
            var t, r, e, i;
            for (i = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength,
            t = 0; t < this.map.length; t++)
                e = this.map[t],
                r = (i - e.startAt) / e.duration,
                r = this.pathTimingFunction(Math.max(0, Math.min(1, r))),
                e.progress !== r && (e.progress = r,
                e.el.style.strokeDashoffset = Math.floor(e.length * (1 - r)),
                this.renderPath(t))
        }
        ,
        s.prototype.renderPath = function(t) {
            if (this.forceRender && this.map && this.map[t]) {
                var r = this.map[t]
                  , e = r.el.cloneNode(!0);
                r.el.parentNode.replaceChild(e, r.el),
                r.el = e
            }
        }
        ,
        s.prototype.init = function() {
            this.frameLength = 0,
            this.currentFrame = 0,
            this.map = [],
            new l(this.el),
            this.mapping(),
            this.starter(),
            this.onReady && this.onReady(this)
        }
        ,
        s.prototype.starter = function() {
            switch (this.start) {
            case "manual":
                return;
            case "autostart":
                this.play();
                break;
            case "inViewport":
                var t = this
                  , r = function() {
                    t.isInViewport(t.parentEl, 1) && (t.play(),
                    window.removeEventListener("scroll", r))
                };
                window.addEventListener("scroll", r),
                r();
                break
            }
        }
        ,
        s.prototype.getStatus = function() {
            return this.currentFrame === 0 ? "start" : this.currentFrame === this.frameLength ? "end" : "progress"
        }
        ,
        s.prototype.reset = function() {
            return this.setFrameProgress(0)
        }
        ,
        s.prototype.finish = function() {
            return this.setFrameProgress(1)
        }
        ,
        s.prototype.setFrameProgress = function(t) {
            return t = Math.min(1, Math.max(0, t)),
            this.currentFrame = Math.round(this.frameLength * t),
            this.trace(),
            this
        }
        ,
        s.prototype.play = function(t, r) {
            if (this.instanceCallback = null,
            t && typeof t == "function")
                this.instanceCallback = t,
                t = null;
            else if (t && typeof t != "number")
                throw new Error("Vivus [play]: invalid speed");
            return r && typeof r == "function" && !this.instanceCallback && (this.instanceCallback = r),
            this.speed = t || 1,
            this.handle || this.draw(),
            this
        }
        ,
        s.prototype.stop = function() {
            return this.handle && (m(this.handle),
            this.handle = null),
            this
        }
        ,
        s.prototype.destroy = function() {
            this.stop();
            var t, r;
            for (t = 0; t < this.map.length; t++)
                r = this.map[t],
                r.el.style.strokeDashoffset = null,
                r.el.style.strokeDasharray = null,
                this.renderPath(t)
        }
        ,
        s.prototype.isInvisible = function(t) {
            var r, e = t.getAttribute("data-ignore");
            return e !== null ? e !== "false" : this.ignoreInvisible ? (r = t.getBoundingClientRect(),
            !r.width && !r.height) : !1
        }
        ,
        s.prototype.parseAttr = function(t) {
            var r, e = {};
            if (t && t.attributes)
                for (var i = 0; i < t.attributes.length; i++)
                    r = t.attributes[i],
                    e[r.name] = r.value;
            return e
        }
        ,
        s.prototype.isInViewport = function(t, r) {
            var e = this.scrollY()
              , i = e + this.getViewportH()
              , n = t.getBoundingClientRect()
              , a = n.height
              , o = e + n.top
              , h = o + a;
            return r = r || 0,
            o + a * r <= i && h >= e
        }
        ,
        s.prototype.getViewportH = function() {
            var t = this.docElem.clientHeight
              , r = window.innerHeight;
            return t < r ? r : t
        }
        ,
        s.prototype.scrollY = function() {
            return window.pageYOffset || this.docElem.scrollTop
        }
        ,
        f = function() {
            s.prototype.docElem || (s.prototype.docElem = window.document.documentElement,
            d = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }
            }(),
            m = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t)
                }
            }())
        }
        ,
        u = function(t, r) {
            var e = parseInt(t, 10);
            return e >= 0 ? e : r
        }
        ,
        v.exports = s
    }
    )()
}
)(y);
var A = y.exports;
const T = E(A);
export {T as V};
