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
    var o = ({
            IS_PORTRAIT: (window.matchMedia && matchMedia("(orientation: portrait)") || {}).matches,
            IS_LANDSCAPE: (window.matchMedia && matchMedia("(orientation: landscape)") || {}).matches,
            IS_MOBILE: (window.matchMedia && matchMedia("(max-width: 767px)") || {}).matches,
            IS_MOBILE_PORTRAIT: (window.matchMedia("(max-width: 767px) and (orientation: portrait)") || {}).matches,
            IS_TABLET: (window.matchMedia && matchMedia("(min-width: 768px)") || {}).matches,
            IS_DESKTOP: (window.matchMedia && matchMedia("(min-width: 1024px)") || {}).matches
        }, {
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
        }),
        c = ({
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
        s = function(t, a, e) {
            var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                n = a.offset().top,
                o = 400;
            i && (o = 800, window.scrollTo(0, t.offset().top)), t.animate({
                scrollTop: n
            }, {
                duration: o,
                step: function(t, e) {
                    var i = a.offset().top;
                    e.end != i && (e.end = i)
                }
            }).animate({
                scrollTop: n - e
            }, {
                duration: 200,
                step: function(t, i) {
                    var n = a.offset().top - e;
                    i.end != n && (i.end = n)
                }
            })
        },
        r = function(t) {
            return t.toString().trim().replace(/[^a-z-_0-9]/gi, "")
        },
        d = function() {
            function a() {
                t(this, a), this.$els = {
                    win: _gpdc.elements.$window,
                    html: $("html"),
                    htmlBody: $("html, body"),
                    dkNav: $("#sony-bar.dk-nav__wrapper"),
                    nav: $("#shared-nav-root #shared-nav-container"),
                    tertiary: $("#jetstream-tertiary-nav .tertiary-container")
                }, this.EVENT_CHANGE = "hashchange.dkHashAnchor", this.EVENT_LOAD = "load.dkHashAnchor", this.EVENT_CLICK = "click.dkHashAnchor", this.pageLoad = !0, this.hashRegex = new RegExp("^#")
            }
            return e(a, [{
                key: "bind",
                value: function() {
                    this.onHashChange = this.onHashChange.bind(this), this.onHashAnchorClick = this.onHashAnchorClick.bind(this)
                }
            }, {
                key: "init",
                value: function() {
                    var t = this;
                    this.$els.win.on(this.EVENT_CHANGE, this.onHashChange), "complete" === document.readyState ? (window.scrollTo(0, 0), this.highlightTertiaryLink(), this.$els.win.trigger(this.EVENT_CHANGE)) : this.$els.win.on(this.EVENT_LOAD, function() {
                        return window.scrollTo(0, 0), t.highlightTertiaryLink(), t.$els.win.trigger(t.EVENT_CHANGE)
                    });
                    var a = 'a[href^="#"]';
                    $("#gdk__content ".concat(a)).on(this.EVENT_CLICK, this.onHashAnchorClick), this.$els.tertiary.on(this.EVENT_CLICK, a, this.onHashAnchorClick), _gpdc.Logger.logInitializer("core", "common", "Hash Anchor Plugin")
                }
            }, {
                key: "onHashAnchorClick",
                value: function(t) {
                    var a = $(t.currentTarget).attr("href") || "";
                    if (location.href.includes(a) && a.length > 1) return this.scrollToElementByHash(a), !1
                }
            }, {
                key: "onHashChange",
                value: function(t) {
                    var a = window.location.hash;
                    if (a) {
                        t.preventDefault();
                        var e = window.htmlEncode(a);
                        return e.includes("?") ? void this.sanitizeHashUrl(e) : void this.scrollToElementByHash(e)
                    }
                }
            }, {
                key: "scrollToElementByHash",
                value: function(t) {
                    t = r(t), t = this.hashRegex.test(t) ? t : "#".concat(t);
                    var a = $("".concat(t, ', [name="').concat(t.substring(1), '"]')).first();
                    if (a.length) {
                        var e = (a.offset().top, this.calculateNavigationOffset());
                        location.href.includes(t) && s(this.$els.htmlBody, a, e)
                    }
                }
            }, {
                key: "highlightTertiaryLink",
                value: function() {
                    var t = window.location.hash;
                    if (this.$els.html.css("--nav-offset", "".concat(this.calculateNavigationOffset(), "px")), !this.pageLoad || !t || "#" === t || !this.$els.tertiary.length) return void(this.pageLoad = !1);
                    var a = window.htmlEncode(t);
                    this.pageLoad = !1;
                    var e = this.$els.tertiary.find(".tertiary-tab__link"),
                        i = this.$els.tertiary.find('.tertiary-tab__link[href="'.concat(a, '"]'));
                    e.length && i.length && (e.removeClass("tertiary-tab__link--active"), i.addClass("tertiary-tab__link--active"))
                }
            }, {
                key: "calculateNavigationOffset",
                value: function() {
                    var t = 0;
                    return this.$els.dkNav.length && (t += this.$els.dkNav.outerHeight()), this.$els.nav.length && (t += this.$els.nav.outerHeight()), this.$els.tertiary.length && (t += this.$els.tertiary.outerHeight()), t
                }
            }, {
                key: "sanitizeHashUrl",
                value: function(t) {
                    var a = t.split("?");
                    if (a) {
                        var e = "".concat(location.origin).concat(location.pathname);
                        window.location.replace("".concat(e, "?").concat(a[1] || "").concat(a[0] || ""))
                    }
                }
            }]), a
        }(),
        l = function() {
            function a() {
                t(this, a)
            }
            return e(a, [{
                key: "logTabsDtmEvent",
                value: function(t, a, e, i) {
                    t.closest(".tabs").data("include-tracking") !== !1 && (_gpdc.analytics.event.addGDLEvent("click", "".concat(i, " tabbedContainer"), {
                        assetName: c.EMPTY_LABEL,
                        position: e,
                        label: a,
                        moduleName: "tabbedContainer",
                        elementType: "link",
                        userActionFlag: !0,
                        linkUrl: c.EMPTY_LABEL
                    }, t), _gpdc.analytics._satelliteTrack("user_engagement"))
                }
            }, {
                key: "logTabLinksDtmEvent",
                value: function(t, a, e, i) {
                    _gpdc.analytics.event.addGDLEvent("click", "".concat(i, " store link"), {
                        assetName: c.EMPTY_LABEL,
                        position: e,
                        label: a,
                        moduleName: "PS Plus Games List",
                        elementType: "link",
                        userActionFlag: !1,
                        linkUrl: t.attr("href")
                    }, t), _gpdc.analytics._satelliteTrack("store_click")
                }
            }, {
                key: "tabPressed",
                value: function(t, a) {
                    if (a.hasClass("pills__item--active")) return void console.log("do nothing");
                    var e = a.closest(".tabs").find(".tabs__content"),
                        i = a.data("content-order"),
                        n = e.find("[data-content-order='".concat(i, "']")),
                        o = a.siblings(".pills__item--active").data("content-order") || 1,
                        c = e.find("[data-content-order='".concat(o, "']")),
                        s = "slideInLeft--fast",
                        r = "slideInRight--fast",
                        d = "slideOutLeft--fast",
                        l = "slideOutRight--fast",
                        h = "display--hidden",
                        m = n.find("[data-component='media-carousel'], .simple-carousel");
                    m.length > 0 && setTimeout(function() {
                        n.find(".flickity-enabled").flickity("resize");
                        var t = m.closest(".tabs__tab-content:not(.display--hidden)"),
                            a = t.find(".is-selected .media-block").height();
                        m.find(".flickity-button").css("top", a / 2)
                    }, 50), i > o ? (c.removeClass("".concat(s, " ").concat(r, " ").concat(d)).addClass("".concat(l, " ").concat(h)), n.removeClass("".concat(s, " ").concat(d, " ").concat(l, " ").concat(h)).addClass(r)) : (c.removeClass("".concat(s, " ").concat(r, " ").concat(l)).addClass("".concat(d, " ").concat(h)), n.removeClass("".concat(r, " ").concat(d, " ").concat(l, " ").concat(h)).addClass(s)), this.logTabsDtmEvent(e, a.data("dtm-label"), i, "open")
                }
            }, {
                key: "init",
                value: function() {
                    var t = this;
                    this.textDirection = _gpdc.config.textDirection, this.tabPressed = this.tabPressed.bind(this);
                    var a = $('[data-component="tabs"]');
                    a.find(".pills").on("change.dkPills", this.tabPressed);
                    var e = a.find(".carousel");
                    if (e.length) {
                        e.closest(".max-width--defaults").removeClass("max-width--defaults");
                        var i = e.closest(".tabbed-component").find(".pills"),
                            n = "";
                        if (i.data("sticky")) {
                            var o = new d,
                                c = o.calculateNavigationOffset();
                            a.css("--sticky-top", "".concat(c, "px")), n = "pills--sticky"
                        }
                        var s = e.closest(".tabbed-component");
                        s.find(".tabs__title").addClass("max-width--defaults"), s.find(".pills").wrap('<div class="max-width--defaults '.concat(n, '"></div>')), window.dispatchEvent(new Event("resize"))
                    }
                    var r = a.find("div.tabs__tab-content p.txt-style-base > a");
                    r.on("click.dkTabLink", function(a) {
                        var e = a.currentTarget,
                            i = $(e);
                        t.logTabLinksDtmEvent(i, i.data("dtm-label"), i.attr("dtm-position"), "select")
                    }), _gpdc.Logger.logInitializer("tabs", "components", "Tabbed Containers")
                }
            }]), a
        }(),
        h = function() {
            function a() {
                var e = this;
                t(this, a), window._gpdc && _gpdc.user && "undefined" != typeof _gpdc.user.isLoggedIn ? this.initModules() : _gpdc.elements.$document.one("userInfoSet.dkComponents", function() {
                    return e.initModules()
                })
            }
            return e(a, [{
                key: "initModules",
                value: function() {
                    (new l).init()
                }
            }]), a
        }();
    ! function(t) {
        _gpdc.elements.$document.ready(function() {
            window._dkDebug = !1, new h
        })
    }(jQuery)
}();