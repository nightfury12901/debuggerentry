/*!
 * @sie/designkit
 * @copyright     2024 Sony Interactive Entertainment LLC, all rights reserved
 */

! function() {
    "use strict";

    function e(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function t(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, n(i.key), i)
        }
    }

    function a(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function i(e, t) {
        if ("object" != typeof e || null === e) return e;
        var a = e[Symbol.toPrimitive];
        if (void 0 !== a) {
            var i = a.call(e, t || "default");
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }

    function n(e) {
        var t = i(e, "string");
        return "symbol" == typeof t ? t : String(t)
    }
    var c = {
            IS_PORTRAIT: (window.matchMedia && matchMedia("(orientation: portrait)") || {}).matches,
            IS_LANDSCAPE: (window.matchMedia && matchMedia("(orientation: landscape)") || {}).matches,
            IS_MOBILE: (window.matchMedia && matchMedia("(max-width: 767px)") || {}).matches,
            IS_MOBILE_PORTRAIT: (window.matchMedia("(max-width: 767px) and (orientation: portrait)") || {}).matches,
            IS_TABLET: (window.matchMedia && matchMedia("(min-width: 768px)") || {}).matches,
            IS_DESKTOP: (window.matchMedia && matchMedia("(min-width: 1024px)") || {}).matches
        },
        o = {
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
            IS_PORTRAIT: o.IS_PORTRAIT.matches,
            IS_LANDSCAPE: o.IS_LANDSCAPE.matches,
            IS_JETSTREAM_MOBILE: o.IS_JETSTREAM_MOBILE.matches,
            IS_MOBILE: o.IS_MOBILE.matches,
            IS_MOBILE_PORTRAIT: o.IS_MOBILE_PORTRAIT.matches,
            IS_TABLET: o.IS_TABLET.matches,
            IS_MAX_TABLET: o.IS_MAX_TABLET.matches,
            IS_TABLET_LG: o.IS_TABLET_LG.matches,
            IS_LAPTOP: o.IS_LAPTOP.matches,
            IS_DESKTOP: o.IS_DESKTOP.matches
        }, {
            EMPTY_LABEL: "empty"
        }),
        d = function() {
            function t() {
                e(this, t), this.isRendering = {
                    mobile: !1,
                    desktop: !1,
                    count: 0
                }
            }
            return a(t, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = $('[data-component="game-grid"]'),
                        a = function(a) {
                            e.isRendering = {
                                mobile: a,
                                desktop: !a,
                                count: 1
                            }, a && (e.isRendering.count = t.length), $.each(t, function(t, i) {
                                var n = $(i);
                                n && n.length ? (e.createCarousels(n, !1, a), e.setTheme(n)) : e.isRendering.count--
                            })
                        },
                        i = function(t) {
                            e.isRendering.count <= 0 && (e.isRendering = {
                                mobile: !1,
                                desktop: !1,
                                count: 0
                            }), e.isRendering.mobile || e.isRendering.desktop || a(t)
                        };
                    a(c.IS_MOBILE), o.IS_TABLET.onchange = function(e) {
                        e.matches && i(!1)
                    }, o.IS_MOBILE.onchange = function(e) {
                        e.matches && i(!0)
                    }, this.trackClick(t), _gpdc.Logger.logInitializer("game-grid", "components", "Game Grid")
                }
            }, {
                key: "trackClick",
                value: function(e) {
                    var t = e.find(".game-grid__game a");
                    t.on("click.dkGameGridTileClick", function(e) {
                        _gpdc.analytics._satelliteTrack("user_engagement")
                    })
                }
            }, {
                key: "setTheme",
                value: function(e) {
                    e.data("include-banner") ? e.css("background", e.find('[data-component="page-banner"]').data("banner-theme")) : e.data("game-grid-theme") && e.css("background", e.data("game-grid-theme"))
                }
            }, {
                key: "createMobileCarousels",
                value: function(e, t, a) {
                    var i = this,
                        n = e.find(".game-grid__collections");
                    n.off("ready.flickity");
                    var c = e.find(".game-grid__games");
                    $.each(c, function(e, n) {
                        var c = $(n),
                            o = c.children();
                        $.each(o, function(e, t) {
                            var a = $(t);
                            a.removeClass("carousel-cell"), e % 4 == 0 && $('<div class="game-grid__cell carousel-cell"></div>').appendTo(c);
                            var i = e <= 3 ? 0 : e >= 8 ? 2 : 1;
                            a.appendTo(c.find(".game-grid__cell").get(i))
                        }), c.children().remove(".game-grid__game"), c.one("ready.flickity", function() {
                            return i.isRendering.count--
                        }), t.createCarousel(c, a, ".game-grid__collection", ".game-grid__pagination").catch(function() {}), c.attr("aria-live", "polite")
                    })
                }
            }, {
                key: "createDesktopCarousels",
                value: function(e, t, a) {
                    var i = this,
                        n = e.find(".game-grid__collections");
                    n.find(".game-grid__game").removeClass("carousel-cell");
                    var c = e.find('.game-grid__collection[data-collection-subtitle="true"]'),
                        o = e.find('.game-grid__collection[data-collection-btn="true"]');
                    (c.length || o.length) && this.setDynamicHeader(n), a.adapativeHeight = !1, a.draggable = !1, a.cellAlign = "left", n.one("ready.flickity", function() {
                        return i.isRendering.count--
                    }), t.createCarousel(n, a).catch(function() {}), e.find(".carousel-cell.is-selected").attr("tabindex", 0);
                    var d = function(e) {
                        e = e.toLowerCase();
                        var t = "click.dkGameGridNextCollectionBtnClick";
                        "previous" === e && (t = "click.dkGameGridPrevCollectionBtnClick"), n.siblings(".button--".concat(e)).on(t, function(t) {
                            _gpdc.analytics.event.addGDLEvent("click", "select games grid ".concat(e), {
                                moduleName: "games grid",
                                elementType: "button",
                                assetName: r.EMPTY_LABEL,
                                label: e,
                                userActionFlag: !0
                            }, $(t.currentTarget)), _gpdc.analytics._satelliteTrack("user_engagement"), n.flickity(e)
                        })
                    };
                    d("previous"), d("next"), n.attr("aria-live", "polite")
                }
            }, {
                key: "createCarousels",
                value: function(e, t, a) {
                    var i = new _gpdc.components.Carousel,
                        n = {
                            accessibility: !0,
                            cellAlign: "center",
                            wrapAround: !0,
                            initialIndex: 0,
                            fullscreen: !0,
                            imagesLoaded: !0,
                            percentPosition: !0,
                            prevNextButtons: !1,
                            pageDots: !1
                        };
                    if (t) return void(c.IS_MOBILE ? this.createMobileCarousels(e, i, n) : e.data("multiple-collections") && this.createDesktopCarousels(e, i, n));
                    if (a) {
                        var o = e.find(".game-grid__collections"),
                            r = e.find(".game-grid__games");
                        return $.each(r, function(e, t) {
                            return $(t).removeAttr("aria-live")
                        }), i.destroyCarousel(o), o.removeAttr("aria-live"), o.find(".game-grid__game").addClass("carousel-cell"), o.siblings(".button--previous").off("click.dkGameGridPrevCollectionBtnClick"), o.siblings(".button--next").off("click.dkGameGridNextCollectionBtnClick"), void this.createMobileCarousels(e, i, n)
                    }
                    var d = e.find(".game-grid__games");
                    $.each(d, function(e, t) {
                        var a = $(t),
                            n = a.find(".game-grid__game");
                        $.each(a, function(e, t) {
                            return $(t).removeAttr("aria-live")
                        }), i.destroyCarousel(a), $.each(n, function(e, t) {
                            return $(t).appendTo(a)
                        }), a.children(".game-grid__cell").remove()
                    }), e.data("multiple-collections") ? this.createDesktopCarousels(e, i, n) : this.isRendering.count--
                }
            }, {
                key: "setDynamicHeader",
                value: function(e) {
                    var t = e.closest('[data-component="game-grid"]'),
                        a = e.find(".game-grid__collection-header"),
                        i = Math.max.apply(null, a.map(function() {
                            return $(this).outerHeight()
                        }).get()),
                        n = i - t.find(".button--previous").height() / 2;
                    $.each(a, function(e, t) {
                        $(t).css("min-height", i)
                    }), t.find(".button--previous").addClass("button--balance").css("top", n), t.find(".button--next").addClass("button--balance").css("top", n)
                }
            }]), t
        }(),
        l = function() {
            var e = $('[data-component="game-grid-v2"]');
            e.length && (_gpdc.Logger.logInitializer("core", "components", "Game Grid v2"), e.each(s))
        },
        s = function(e, t) {
            var a = null,
                i = $(t),
                n = i.find(".game-grid-v2-tile");
            n.on("click.dkGameGrid", function(e) {
                var t = $(e.currentTarget);
                _gpdc.analytics.event.addGDLEvent("click", "select game tile", {
                    moduleName: "games grid",
                    elementType: "link",
                    assetName: t.data("analytics-asset"),
                    linkUrl: t.attr("href"),
                    label: t.data("analytics-label"),
                    userActionFlag: !0,
                    position: t.index() + 1
                }, t), _gpdc.analytics._satelliteTrack("user_engagement")
            }), _gpdc.analytics._satelliteTrack("user_engagement"), i.on("mouseenter.dkGameGrid", ".game-grid-v2-tile", function(e) {
                a && clearTimeout(a), n.addClass("+not-hover"), $(e.currentTarget).removeClass("+not-hover")
            }), i.on("mouseleave.dkGameGrid", ".game-grid-v2-tile", function(e) {
                a = setTimeout(function() {
                    n.removeClass("+not-hover")
                }, 150)
            }), i.find(".pills__item").on("click", function(e) {
                var t = $(e.currentTarget),
                    a = i.find('.tabs__tab-content[data-content-order="'.concat(t.attr("data-content-order"), '"] .game-grid-v2-tile'));
                a.each(function(e, t) {
                    var a = $(t),
                        i = a.data("original-delay");
                    i && a.css({
                        "animation-delay": i
                    })
                }), _gpdc.analytics.event.addGDLEvent("click", "select tab", {
                    moduleName: "games grid",
                    elementType: "tab",
                    assetName: r.EMPTY_LABEL,
                    linkUrl: r.EMPTY_LABEL,
                    label: t.data("dtm-label"),
                    userActionFlag: !0,
                    position: t.index() + 1
                }, t), _gpdc.analytics._satelliteTrack("user_engagement")
            }), i.find(".btn--view-all").on("click.dkGameGrid", function(e) {
                var t = $(e.currentTarget);
                _gpdc.analytics.event.addGDLEvent("click", "select button", {
                    moduleName: "games grid",
                    elementType: "button",
                    assetName: r.EMPTY_LABEL,
                    linkUrl: r.EMPTY_LABEL,
                    label: t.data("analytics-label"),
                    userActionFlag: !0
                }, t), _gpdc.analytics._satelliteTrack("user_engagement")
            }), i.find("[data-truncation]").on("click.dkGameGrid", function(e) {
                var t = $(e.currentTarget),
                    a = t.closest(".tabs__tab-content"),
                    i = t.data(),
                    n = i.truncation,
                    c = i.total,
                    o = c - n,
                    d = a.find(".game-grid-v2-tile--truncated").slice(0, n);
                d.each(function(e, t) {
                    var a = $(t);
                    a.data("original-delay", a.css("animation-delay")), a.css({
                        "animation-delay": "".concat(50 * e, "ms")
                    })
                }), d.removeClass("game-grid-v2-tile--truncated"), _gpdc.analytics.event.addGDLEvent("click", "select button", {
                    moduleName: "games grid",
                    elementType: "button",
                    assetName: r.EMPTY_LABEL,
                    linkUrl: r.EMPTY_LABEL,
                    label: t.data("analytics-label"),
                    userActionFlag: !0
                }, t), _gpdc.analytics._satelliteTrack("user_engagement"), o <= 0 ? (t.hide(), t.next().length || t.closest(".game-grid-v2__footer").hide()) : t.data("total", o)
            })
        },
        m = function() {
            function t() {
                var a = this;
                e(this, t), window._gpdc && _gpdc.user && "undefined" != typeof _gpdc.user.isLoggedIn ? this.initModules() : _gpdc.elements.$document.one("userInfoSet.dkComponents", function() {
                    return a.initModules()
                })
            }
            return a(t, [{
                key: "initModules",
                value: function() {
                    (new d).init(), l()
                }
            }]), t
        }();
    ! function(e) {
        _gpdc.elements.$document.ready(function() {
            new m
        })
    }(jQuery)
}();