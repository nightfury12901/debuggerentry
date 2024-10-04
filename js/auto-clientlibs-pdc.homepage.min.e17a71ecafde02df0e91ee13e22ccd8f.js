/*!
 * @sie/designkit
 * @copyright     2024 Sony Interactive Entertainment LLC, all rights reserved
 */

! function() {
    "use strict";

    function t(t, a) {
        if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function")
    }

    function a(t, a) {
        for (var e = 0; e < a.length; e++) {
            var i = a[e];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, n(i.key), i)
        }
    }

    function e(t, e, i) {
        return e && a(t.prototype, e), i && a(t, i), Object.defineProperty(t, "prototype", {
            writable: !1
        }), t
    }

    function i(t, a) {
        if ("object" != typeof t || null === t) return t;
        var e = t[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(t, a || "default");
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === a ? String : Number)(t)
    }

    function n(t) {
        var a = i(t, "string");
        return "symbol" == typeof a ? a : String(a)
    }
    var o = {
            IS_PORTRAIT: (window.matchMedia && matchMedia("(orientation: portrait)") || {}).matches,
            IS_LANDSCAPE: (window.matchMedia && matchMedia("(orientation: landscape)") || {}).matches,
            IS_MOBILE: (window.matchMedia && matchMedia("(max-width: 767px)") || {}).matches,
            IS_MOBILE_PORTRAIT: (window.matchMedia("(max-width: 767px) and (orientation: portrait)") || {}).matches,
            IS_TABLET: (window.matchMedia && matchMedia("(min-width: 768px)") || {}).matches,
            IS_DESKTOP: (window.matchMedia && matchMedia("(min-width: 1024px)") || {}).matches
        },
        c = {
            IS_PORTRAIT: window.matchMedia && matchMedia("(orientation: portrait)") || {},
            IS_LANDSCAPE: window.matchMedia && matchMedia("(orientation: landscape)") || {},
            IS_JETSTREAM_MOBILE: window.matchMedia && matchMedia("(max-width: 699px)") || {},
            IS_MOBILE: window.matchMedia && matchMedia("(max-width: 767px)") || {},
            IS_MOBILE_PORTRAIT: window.matchMedia("(max-width: 767px) and (orientation: portrait)") || {},
            IS_TABLET: window.matchMedia && matchMedia("(min-width: 768px)") || {},
            IS_TABLET_LG: window.matchMedia && matchMedia("(min-width: 1024px)") || {},
            IS_LAPTOP: window.matchMedia && matchMedia("(min-width: 1367px)") || {},
            IS_DESKTOP: window.matchMedia && matchMedia("(min-width: 1920px)") || {},
            IS_MAX_TABLET: window.matchMedia && matchMedia("(max-width: 1023px)") || {},
            IS_JUST_TABLET: window.matchMedia && matchMedia("(min-width: 768px) and (max-width: 1365px)") || {},
            IS_JUST_LAPTOP: window.matchMedia && matchMedia("(min-width: 1366px) and (max-width: 1919px)") || {}
        },
        r = ({
            IS_PORTRAIT: c.IS_PORTRAIT.matches,
            IS_LANDSCAPE: c.IS_LANDSCAPE.matches,
            IS_JETSTREAM_MOBILE: c.IS_JETSTREAM_MOBILE.matches,
            IS_MOBILE: c.IS_MOBILE.matches,
            IS_MOBILE_PORTRAIT: c.IS_MOBILE_PORTRAIT.matches,
            IS_TABLET: c.IS_TABLET.matches,
            IS_MAX_TABLET: c.IS_MAX_TABLET.matches,
            IS_TABLET_LG: c.IS_TABLET_LG.matches,
            IS_LAPTOP: c.IS_LAPTOP.matches,
            IS_DESKTOP: c.IS_DESKTOP.matches
        }, {
            EMPTY_LABEL: "empty"
        }),
        d = function() {
            function a() {
                t(this, a), this.bannersTracked = []
            }
            return e(a, [{
                key: "init",
                value: function() {
                    var t = this,
                        a = $('[data-component="hp-hero"]');
                    a && a.length && $.each(a, function(a, e) {
                        var i = new _gpdc.components.Slider,
                            n = {
                                impressionCallback: t.trackBannerImpression
                            },
                            o = $(e);
                        i.init(o, n), t.linkAssetNameToCtas(o)
                    }), _gpdc.Logger.logInitializer("home", "components", "Hero")
                }
            }, {
                key: "linkAssetNameToCtas",
                value: function(t) {
                    t.find(".slider__slide").each(function(t, a) {
                        var e = $(a),
                            i = e.find("[data-analytics-asset]");
                        i.length && e.find(".btn-block a").attr("data-analytics-asset", i.data("analytics-asset"))
                    })
                }
            }, {
                key: "trackBannerImpression",
                value: function(t, a) {
                    var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500;
                    if (this.bannersTracked = e, !this.bannersTracked.includes(a)) {
                        this.bannersTracked.push(a);
                        var n = t.find(".page-banner__keyart-anchor");
                        setTimeout(function() {
                            _gpdc.analytics.event.addGDLEvent("impression", "banner impression", {
                                userActionFlag: !1,
                                moduleName: "homepage hero banner",
                                label: r.EMPTY_LABEL,
                                position: n.data("analytics-position"),
                                linkUrl: n.attr("href") || r.EMPTY_LABEL,
                                assetName: n.data("analytics-asset") || r.EMPTY_LABEL,
                                elementType: n.data("media-type-".concat(o.IS_TABLET ? "tablet" : "mobile")) || "image"
                            }, n)
                        }, i)
                    }
                }
            }]), a
        }(),
        m = function() {
            function a() {
                t(this, a), this.carousel = new _gpdc.components.Carousel, _gpdc.Logger.logInitializer("home", "components", "Spotlight")
            }
            return e(a, [{
                key: "init",
                value: function() {
                    var t = this,
                        a = $('[data-component="spotlight"]'),
                        e = $(".three-column-spotlight .carousel-cell");
                    a.length && $.each(a, function(a, i) {
                        var n = $(i);
                        $.each(e, function(t, a) {
                            var e = $(a);
                            e.children().length || e.remove()
                        }), t.carousel.createCarousel(n, {
                            accessibility: !0,
                            cellAlign: "center",
                            wrapAround: !1,
                            contain: !0,
                            prevNextButtons: !0,
                            pageDots: !0,
                            percentPosition: !0,
                            fullscreen: !0,
                            imagesLoaded: !0,
                            watchCSS: !0,
                            initialIndex: 1
                        }).catch(function() {})
                    })
                }
            }]), a
        }();
    ! function(t) {
        _gpdc.elements.$document.ready(function() {
            (new d).init(), (new m).init()
        })
    }(jQuery)
}();