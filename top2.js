$(function(t) {
    var e = t(window);
    t(".global-header .anime-elm,.top-main-sec .anime-elm").addClass("set-anime"),
    t(".js-top-main-slider").slick({
        dots: !1,
        arrows: !1,
        fade: !0,
        speed: 1,
        autoplaySpeed: 250,
        autoplay: !0,
        draggable: !1,
        pauseOnFocus: !1,
        pauseOnHover: !1,
        touchMove: !1,
        swipe: !1
    }).slick("slickPause").on({
        mouseenter: function() {
            t(this).parents(".js-top-main-slider").slick("slickPlay")
        },
        mouseleave: function() {
            t(this).parents(".js-top-main-slider").slick("slickPause")
        }
    }, ".top-main-slider-elm");
    let s = t(".top-main-slider02");
    s.length && setTimeout(function() {
        s.slick("slickSetOption", "autoplaySpeed", 380, !0).slick("slickPlay"),
        t(".top-main-slider02-wrap").on("mouseenter", function(e) {
            t(this).find(".top-main-slider02").slick("slickPause")
        }).on("mouseleave", function(e) {
            t(this).find(".top-main-slider02").slick("slickPlay")
        })
    }, 2e3);
    const i = t("#top-service-main-slider");
    if (i.length) {
        const l = t("#top-service-main-slider-current-num");
        if (i.slick({
            fade: !0,
            dots: !1,
            arrows: !1,
            infinite: !0,
            speed: 800
        }),
        l.length) {
            let n = gsap.timeline({
                overwrite: !0
            });
            n.fromTo("#top-service-main-slider-meter", 5, {
                width: "0%"
            }, {
                width: "100%",
                delay: 1,
                ease: Power0.easeNone,
                onComplete: function() {
                    i.slick("slickNext")
                }
            }),
            i.on("beforeChange", function(e, s, i, t) {
                let o = t + 1;
                o < 10 && (o = "0" + o),
                l.text(o),
                n.restart()
            })
        }
    }
    if (t("#js-top-service-slider").slick({
        dots: !1,
        arrows: !1,
        slidesToShow: 2,
        infinite: !1,
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 1
            }
        }]
    }),
    t("#js-top-stories-slider").length) {
        let i = !1;
        spFlg && (i = !0);
        let s = {
            dots: !1,
            arrows: !1,
            slidesToShow: 2,
            lazyLoad: "progressive",
            responsive: [{
                breakpoint: 769,
                settings: "unslick"
            }]
        };
        t("#js-top-stories-slider").slick(s).on("destroy", function(e, s) {
            i = !0
        }),
        e.on("resize orientationchange", function(e) {
            i && !spFlg && (t("#js-top-stories-slider").slick(s),
            i = !1)
        })
    }
});
