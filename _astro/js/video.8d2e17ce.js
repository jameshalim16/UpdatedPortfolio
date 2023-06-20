class t {
    el;
    thumbnailTime = 0;
    _promise;
    isPlay = !1;
    isLoaded = !1;
    constructor(i, {thumbnailTime: s=0}={}) {
        this.el = i,
        this.thumbnailTime = s
    }
    play() {
        if (!this.isPlay)
            return this.isPlay = !0,
            this._promise = this.el.play().catch(()=>{
                this.el.currentTime = this.thumbnailTime
            }
            )
    }
    pause() {
        this.isPlay && (this.isPlay = !1,
        this._promise?.then(()=>{
            this.isPlay || this.el.pause()
        }
        ))
    }
    load() {
        this.isLoaded || (this.isLoaded = !0,
        this.el.load())
    }
}
export {t as V};
