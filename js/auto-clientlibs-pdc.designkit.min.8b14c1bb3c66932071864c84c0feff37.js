
! function() {
    "use strict";

    function e(e, t) {
        var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != a) {
            var n, i, o, r, s = [],
                c = !0,
                l = !1;
            try {
                if (o = (a = a.call(e)).next, 0 === t) {
                    if (Object(a) !== a) return;
                    c = !1
                } else
                    for (; !(c = (n = o.call(a)).done) && (s.push(n.value), s.length !== t); c = !0);
            } catch (e) {
                l = !0, i = e
            } finally {
                try {
                    if (!c && null != a.return && (r = a.return(), Object(r) !== r)) return
                } finally {
                    if (l) throw i
                }
            }
            return s
        }
    }

    function t(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), a.push.apply(a, n)
        }
        return a
    }

    function a(e) {
        for (var a = 1; a < arguments.length; a++) {
            var n = null != arguments[a] ? arguments[a] : {};
            a % 2 ? t(Object(n), !0).forEach(function(t) {
                r(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var a = 0; a < t.length; a++) {
            var n = t[a];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, m(n.key), n)
        }
    }

    function o(e, t, a) {
        return t && i(e.prototype, t), a && i(e, a), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function r(e, t, a) {
        return t = m(t), t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a, e
    }

    function s(t, a) {
        return d(t) || e(t, a) || g(t, a) || f()
    }

    function c(e) {
        return l(e) || u(e) || g(e) || p()
    }

    function l(e) {
        if (Array.isArray(e)) return h(e)
    }

    function d(e) {
        if (Array.isArray(e)) return e
    }

    function u(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function g(e, t) {
        if (e) {
            if ("string" == typeof e) return h(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? h(e, t) : void 0
        }
    }

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n
    }

    function p() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function f() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function v(e, t) {
        if ("object" != typeof e || null === e) return e;
        var a = e[Symbol.toPrimitive];
        if (void 0 !== a) {
            var n = a.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(e)
    }

    function m(e) {
        var t = v(e, "string");
        return "symbol" == typeof t ? t : String(t)
    }

    function y(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function k(e, t) {
        return t = {
            exports: {}
        }, e(t, t.exports), t.exports
    }
    var _, b = {
            PROD: /(www|wwwglobal|author)\.playstation\.com/i,
            STAGE: /(author\.stage|stage)\.playstation\.com/i,
            PREVIEW: /preview\.www\.playstation\.com/i,
            WWWGLOBAL: /wwwglobal\.playstation\.com/i
        },
        C = {
            navFooter: "navFooter",
            userState: "userState",
            gpdcUser: "gpdcUser"
        },
        w = {
            IS_PORTRAIT: (window.matchMedia && matchMedia("(orientation: portrait)") || {}).matches,
            IS_LANDSCAPE: (window.matchMedia && matchMedia("(orientation: landscape)") || {}).matches,
            IS_MOBILE: (window.matchMedia && matchMedia("(max-width: 767px)") || {}).matches,
            IS_MOBILE_PORTRAIT: (window.matchMedia("(max-width: 767px) and (orientation: portrait)") || {}).matches,
            IS_TABLET: (window.matchMedia && matchMedia("(min-width: 768px)") || {}).matches,
            IS_DESKTOP: (window.matchMedia && matchMedia("(min-width: 1024px)") || {}).matches
        },
        T = {
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
        A = {
            IS_PORTRAIT: T.IS_PORTRAIT.matches,
            IS_LANDSCAPE: T.IS_LANDSCAPE.matches,
            IS_JETSTREAM_MOBILE: T.IS_JETSTREAM_MOBILE.matches,
            IS_MOBILE: T.IS_MOBILE.matches,
            IS_MOBILE_PORTRAIT: T.IS_MOBILE_PORTRAIT.matches,
            IS_TABLET: T.IS_TABLET.matches,
            IS_MAX_TABLET: T.IS_MAX_TABLET.matches,
            IS_TABLET_LG: T.IS_TABLET_LG.matches,
            IS_LAPTOP: T.IS_LAPTOP.matches,
            IS_DESKTOP: T.IS_DESKTOP.matches
        },
        L = {
            EMPTY_LABEL: "empty"
        },
        E = "javascript:void(0);",
        I = function(e, t) {
            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 180,
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".playstation.com";
            if (t) {
                var i = new Date;
                i.setTime(i.getTime() + 60 * a * 1e3), document.cookie = "".concat(e, "=").concat(encodeURIComponent(t), "; expires=").concat(i.toUTCString(), ";path=/; domain=").concat(n, ";secure")
            }
        },
        S = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = document.cookie.match(new RegExp("(^| )".concat(e, "=([^;]*)(;|$)")));
            return t ? decodeURIComponent(t[2]) : null
        },
        x = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".playstation.com";
            e && (document.cookie = "".concat(e, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=").concat(t, ";"))
        },
        P = function(e) {
            var t = null;
            try {
                t = JSON.parse(e)
            } catch (e) {}
            return t
        },
        M = function(e, t, a) {
            var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                i = t.offset().top,
                o = 400;
            n && (o = 800, window.scrollTo(0, e.offset().top)), e.animate({
                scrollTop: i
            }, {
                duration: o,
                step: function(e, a) {
                    var n = t.offset().top;
                    a.end != n && (a.end = n)
                }
            }).animate({
                scrollTop: i - a
            }, {
                duration: 200,
                step: function(e, n) {
                    var i = t.offset().top - a;
                    n.end != i && (n.end = i)
                }
            })
        },
        D = function(e, t) {
            return t ? t.find(e) : $(e)
        },
        O = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "buttonblock",
                a = e.parents("[data-component]");
            return a.length ? $(a.get().reverse()[0]).data("component") : t
        },
        N = function(e) {
            return e.toString().trim().replace(/[^a-z-_0-9]/gi, "")
        },
        B = function() {
            var e = {
                    mobile: 30,
                    desktop: 20,
                    default: 200
                },
                t = w.IS_MOBILE ? e.mobile : null,
                a = w.IS_DESKTOP ? e.mobile : e.desktop,
                n = Math.round(window.innerHeight * (t || a) / 100) || e.default;
            return "".concat(isNaN(n) || n < e.default ? e.default : n, "px")
        },
        G = function(e) {
            return !(!e || e === E)
        },
        R = function() {
            function e() {
                n(this, e), this.$els = {
                    win: _gpdc.elements.$window,
                    html: $("html"),
                    htmlBody: $("html, body"),
                    dkNav: $("#sony-bar.dk-nav__wrapper"),
                    nav: $("#shared-nav-root #shared-nav-container"),
                    tertiary: $("#jetstream-tertiary-nav .tertiary-container")
                }, this.EVENT_CHANGE = "hashchange.dkHashAnchor", this.EVENT_LOAD = "load.dkHashAnchor", this.EVENT_CLICK = "click.dkHashAnchor", this.pageLoad = !0, this.hashRegex = new RegExp("^#")
            }
            return o(e, [{
                key: "bind",
                value: function() {
                    this.onHashChange = this.onHashChange.bind(this), this.onHashAnchorClick = this.onHashAnchorClick.bind(this)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    this.$els.win.on(this.EVENT_CHANGE, this.onHashChange), "complete" === document.readyState ? (window.scrollTo(0, 0), this.highlightTertiaryLink(), this.$els.win.trigger(this.EVENT_CHANGE)) : this.$els.win.on(this.EVENT_LOAD, function() {
                        return window.scrollTo(0, 0), e.highlightTertiaryLink(), e.$els.win.trigger(e.EVENT_CHANGE)
                    });
                    var t = 'a[href^="#"]';
                    $("#gdk__content ".concat(t)).on(this.EVENT_CLICK, this.onHashAnchorClick), this.$els.tertiary.on(this.EVENT_CLICK, t, this.onHashAnchorClick), _gpdc.Logger.logInitializer("core", "common", "Hash Anchor Plugin")
                }
            }, {
                key: "onHashAnchorClick",
                value: function(e) {
                    var t = $(e.currentTarget).attr("href") || "";
                    if (location.href.includes(t) && t.length > 1) return this.scrollToElementByHash(t), !1
                }
            }, {
                key: "onHashChange",
                value: function(e) {
                    var t = window.location.hash;
                    if (t) {
                        e.preventDefault();
                        var a = window.htmlEncode(t);
                        return a.includes("?") ? void this.sanitizeHashUrl(a) : void this.scrollToElementByHash(a)
                    }
                }
            }, {
                key: "scrollToElementByHash",
                value: function(e) {
                    e = N(e), e = this.hashRegex.test(e) ? e : "#".concat(e);
                    var t = $("".concat(e, ', [name="').concat(e.substring(1), '"]')).first();
                    if (t.length) {
                        var a = (t.offset().top, this.calculateNavigationOffset());
                        location.href.includes(e) && M(this.$els.htmlBody, t, a)
                    }
                }
            }, {
                key: "highlightTertiaryLink",
                value: function() {
                    var e = window.location.hash;
                    if (this.$els.html.css("--nav-offset", "".concat(this.calculateNavigationOffset(), "px")), !this.pageLoad || !e || "#" === e || !this.$els.tertiary.length) return void(this.pageLoad = !1);
                    var t = window.htmlEncode(e);
                    this.pageLoad = !1;
                    var a = this.$els.tertiary.find(".tertiary-tab__link"),
                        n = this.$els.tertiary.find('.tertiary-tab__link[href="'.concat(t, '"]'));
                    a.length && n.length && (a.removeClass("tertiary-tab__link--active"), n.addClass("tertiary-tab__link--active"))
                }
            }, {
                key: "calculateNavigationOffset",
                value: function() {
                    var e = 0;
                    return this.$els.dkNav.length && (e += this.$els.dkNav.outerHeight()), this.$els.nav.length && (e += this.$els.nav.outerHeight()), this.$els.tertiary.length && (e += this.$els.tertiary.outerHeight()), e
                }
            }, {
                key: "sanitizeHashUrl",
                value: function(e) {
                    var t = e.split("?");
                    if (t) {
                        var a = "".concat(location.origin).concat(location.pathname);
                        window.location.replace("".concat(a, "?").concat(t[1] || "").concat(t[0] || ""))
                    }
                }
            }]), e
        }(),
        F = function() {
            function e() {
                n(this, e), this.$els = {
                    win: _gpdc.elements.$window
                }, this.DISABLE_AUTOPLAY_CLASS = "no-autoplay", this.videoEls = D('[data-component="live-image"], [data-component="bg-video"]'), this.EVENT_KEYDOWN = "keydown", this.init()
            }
            return o(e, [{
                key: "init",
                value: function() {
                    this.videoEls.length && (this.$els.win.one(this.EVENT_KEYDOWN, $.proxy(this.onTabPressed, this)), _gpdc.Logger.logInitializer("core", "common", "Disable Autoplay on Tab Press Plugin"))
                }
            }, {
                key: "onTabPressed",
                value: function(e) {
                    var t = e.keyCode || e.which;
                    9 === t && (_gpdc.elements.$body.addClass(this.DISABLE_AUTOPLAY_CLASS), this.videoEls.each(function(e, t) {
                        $(t).find("video").each(function(e, t) {
                            var a = $(t);
                            a.data("auto-pause-play", !1), a.removeAttr("autoplay"), a.closest(".media-block").addClass("+inline-video--paused"), t.pause()
                        })
                    }))
                }
            }]), e
        }(),
        V = function() {
            function e() {
                n(this, e), this.init()
            }
            return o(e, [{
                key: "init",
                value: function() {
                    if (window.lozad) {
                        var e = $(document),
                            t = lozad(".lozad", {
                                rootMargin: B(),
                                threshold: 0,
                                loaded: function(t) {
                                    t.classList.add("lazy-loaded"), e.trigger("layoutShift.lozad")
                                }
                            });
                        t.observe(), _gpdc.components.lozad = {
                            _observer: t
                        }
                    }
                    _gpdc.Logger.logInitializer("core", "common", "Lozad")
                }
            }]), e
        }(),
        U = {
            INPUTS_RESERVED_KEY_CODES: [8, 9, 16, 37, 38, 39, 40],
            INLINE_VIDEO_WAIT: 500,
            DTM_IGNORE_EVENT: "ignore-dtm-click-event",
            COMPONENT_INSTANCE_ID_ATTR: "uuid"
        },
        H = {
            EMBED_URL: "https://www.youtube.com/embed/"
        },
        z = {
            endpoint: _gpdc.elements.$body.data("wc-api"),
            arkhamAPIHost: _gpdc.elements.$body.data("arkham-api"),
            arkhamAPIPath: "/api/session/v1/signin?redirect_uri=CURRENT_PAGE_URL&flow=web:walletAdmin",
            loadingClass: "loading",
            loadedAction: "checkout_app_visible",
            loginAction: "checkout_signin_required",
            pswrdVerifAction: "checkout_password_verification_required",
            closeActions: ["checkout_cart_cancel", "checkout_continue_shopping", "checkout_error_dismiss", "checkout_thankyou_dismiss"]
        },
        j = function(e) {
            return e.includes(W.newStoreUrl) || e.includes(W.pdcDirectUrl)
        },
        W = {
            btnBlock: ".btn-block",
            btnBlockGated: ".btn-block [data-age-gated]",
            btnBlockGatedForce: ".btn-block [data-force-age-gate]",
            btnLinkSelector: '.btn-block [class^="cta__"]:not(.cta__inner), .btn-block .text-link',
            btnLinkV2Selector: ".btn--cta__btn-container .btn--cta, .btn--cta__btn-container .text-link",
            btnVideoSelector: ".btn-block [data-video-dam], .btn-block [data-video-youtube]",
            btnPSNLogin: '[data-manual-login="true"]',
            btnLoyalty: '[data-loyalty-program="true"]',
            btnAgeGateSelector: ".btn-block .age-gate__input-btn",
            oldStoreUrl: "store.sonyentertainmentnetwork",
            newStoreUrl: "store.playstation",
            pdcDirectUrl: "direct.playstation",
            consoleUrlPrefix: {
                product: "psns:browse?product=",
                category: "psns:browse?category="
            }
        },
        K = {
            pictureTag: {
                lower: '<source srcset="IMG_SRC_DESKTOP?$400pxDESKTOP_TRANSPARENT" media="(min-width: 768px)">\n                    <source srcset="IMG_SRC_MOBILE?$200pxMOBILE_TRANSPARENT" media="(min-width: 320px)">\n                    <img src="IMG_SRC_DESKTOP?$100pxDESKTOP_TRANSPARENT">',
                main: '<source srcset="IMG_SRC_DESKTOP?$1600pxDESKTOP_TRANSPARENT" media="(min-width: 1024px)">\n                    <source srcset="IMG_SRC_DESKTOP?$1200pxDESKTOP_TRANSPARENT" media="(min-width: 768px)">\n                    <source srcset="IMG_SRC_MOBILE?$800pxMOBILE_TRANSPARENT" media="(min-width: 320px)">\n                    <img src="IMG_SRC_DESKTOP?$100pxDESKTOP_TRANSPARENT">',
                fullscreen: '<source srcset="IMG_SRC_DESKTOP?$4000pxDESKTOP_TRANSPARENT" media="(min-width: 3000px)">\n                    <source srcset="IMG_SRC_DESKTOP?$2400pxDESKTOP_TRANSPARENT" media="(min-width: 1367px)">\n                    <source srcset="IMG_SRC_DESKTOP?$1600pxDESKTOP_TRANSPARENT" media="(min-width: 1024px)">\n                    <source srcset="IMG_SRC_DESKTOP?$1200pxDESKTOP_TRANSPARENT" media="(min-width: 768px)">\n                    <source srcset="IMG_SRC_MOBILE?$800pxMOBILE_TRANSPARENT" media="(min-width: 320px)">\n                    <img src="IMG_SRC_DESKTOP?$100pxDESKTOP_TRANSPARENT">'
            }
        },
        Y = {
            COOKIE_NAME: "gpdc_gated",
            TYPE_TEMPLATE_ID_MAP: {
                SIGN_IN: "#age-gate__user-sign-in-required",
                DOB: "#age-gate__user-input-required",
                SHALL_NOT_PASS: "#age-gate__user-shall-not-pass"
            },
            CONTENT: "#gdk__content .cmp-container",
            FIELDS: {
                y: ".year",
                m: ".month",
                d: ".day"
            }
        },
        q = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C.userState;
                n(this, e), this.hashAnchor = new R, this.userStateStorage = t
            }
            return o(e, [{
                key: "save",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U.COMPONENT_INSTANCE_ID_ATTR,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    e && (sessionStorage.setItem(this.userStateStorage, JSON.stringify({
                        idAttr: t,
                        value: e,
                        cellIndex: a
                    })), _gpdc.Logger.log("User State has been saved in sessionStorage for element with id: ".concat(e)))
                }
            }, {
                key: "clear",
                value: function() {
                    sessionStorage.removeItem(this.userStateStorage)
                }
            }, {
                key: "retrieve",
                value: function() {
                    var e = this,
                        t = sessionStorage.getItem(this.userStateStorage);
                    if (t) {
                        var a = P(t) || {},
                            n = a.idAttr,
                            i = a.value,
                            o = a.cellIndex,
                            r = void 0 === o ? null : o;
                        if (sessionStorage.removeItem(this.userStateStorage), _gpdc.user && _gpdc.user.isLoggedIn && n && i) {
                            var s = $("[data-".concat(n, '="').concat(i, '"]'));
                            s.length && (s.data(U.DTM_IGNORE_EVENT, !0), setTimeout(function() {
                                e.hashAnchor.$els.htmlBody.animate({
                                    scrollTop: s.offset().top - e.hashAnchor.calculateNavigationOffset()
                                }, 0), r >= 0 && s.data("carousel") ? e.selectCarouselElement(s, r) : s.data("pxp-action") ? e.handleExpWidgetReopen(s) : s.get(0).click()
                            }, 200))
                        }
                    }
                }
            }, {
                key: "selectCarouselElement",
                value: function(e, t) {
                    if ("image-gallery" === e.data("component")) {
                        var a = e.find('[data-component="image-block"]:eq('.concat(t, ")")).get(0);
                        return void(a && a.click())
                    }
                    var n = (e.data("flickity") || {}).cells,
                        i = n && n[t] ? $(n[t].element) : null;
                    i.length && (e.find(".carousel-cell.is-selected").removeClass("is-selected"), i.addClass("is-selected").trigger($.Event("keydown", {
                        key: "Enter",
                        keyCode: 13,
                        preventDefault: function() {}
                    })))
                }
            }, {
                key: "handleExpWidgetReopen",
                value: function(e) {
                    window.PSEXP && PSEXP.isClickReady ? e.get(0).click() : document.addEventListener("psexp-click-ready", function(t) {
                        return e.get(0).click()
                    }, !1)
                }
            }]), e
        }(),
        Z = "no-scroll",
        X = "curtain",
        J = "curtain__blur",
        Q = function(e, t) {
            var a = "addClass" === e ? "on" : "off";
            $("html, body")[e](Z), t && t.length && t[a]("touchmove.dkUtilsLockScreen", function(e) {
                return e.preventDefault(), e.stopPropagation(), !1
            })
        },
        ee = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "100",
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "dark",
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                i = $(".modal.modal--visible"),
                o = n ? [X, n] : [X],
                r = i.length && !e;
            return new Promise(function(n, i) {
                var s = $(".".concat(o.join(".").trim())),
                    c = [a, "opacity--".concat(t)];
                s.length || (s = $('<div class="'.concat(o.join(" "), '" />')), $("#gdk__content").append(s)), s[0].$wrapper || (s[0].$wrapper = $(".cmp-container")), e ? (s.removeClass("display--hidden"), setTimeout(function() {
                    s.addClass(c)
                }, 10), setTimeout(function() {
                    s[0].$wrapper.addClass(J)
                }, 250)) : (!r && s[0].$wrapper.removeClass(J), s.removeClass(c), setTimeout(function() {
                    s.attr("class", "".concat(o.join(" "), " display--hidden"))
                }, 250)), r || Q(e ? "addClass" : "removeClass", s), n()
            })
        },
        te = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#gdk__content",
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return new Promise(function(n, i) {
                var o = ($(e).html() || "").trim();
                if (o) {
                    if (a) {
                        var r = $($.parseHTML(o)).addClass(e.replace(/^#+/, ""));
                        $(t).append(r)
                    } else $(t).append($.parseHTML(o));
                    n("success")
                } else i("failure")
            })
        },
        ae = function(e) {
            var t = $(e);
            t.length && t.html("")
        },
        ne = function(e) {
            if (!e || "false" === e) return null;
            if (e.startsWith("#")) return e;
            var t = /^rgba\(/.test(e);
            e = e.substring(t ? 5 : 4).split(")")[0].split(e.indexOf(",") > -1 ? "," : " ");
            var a = (+e[0]).toString(16),
                n = (+e[1]).toString(16),
                i = (+e[2]).toString(16);
            if (a = 1 == a.length ? "0".concat(a) : a, n = 1 == n.length ? "0".concat(n) : n, i = 1 == i.length ? "0".concat(i) : i, !t) return "#".concat(a).concat(n).concat(i);
            var o = Math.round(255 * +e[3]).toString(16);
            return o = 1 == o.length ? "0".concat(o) : o, "#".concat(a).concat(n).concat(i).concat(o)
        },
        ie = function(e) {
            var t = e.length > 7;
            return "".concat(t ? e.substring(0, 7) : e, "00")
        },
        oe = function(e, t, a, n, i, o) {
            var r = e.data(t) || "";
            if (r) {
                var s = {};
                r = ne(r), n && (s = {
                    "--gradient-start-color": r,
                    "--gradient-end-color": ie(r)
                }), i && (s["--gradient-start-color-tablet"] = r, s["--gradient-end-color-tablet"] = ie(r)), o && (s["--gradient-start-color-desktop"] = r, s["--gradient-end-color-desktop"] = ie(r)), a && (s[a] = r), e.css(s)
            }
        },
        re = function(e, t) {
            var a = parseInt(t.css("width")),
                n = parseInt(_gpdc.elements.$body.css("width")),
                i = parseInt(e.css("padding-inline-end")),
                o = t.offset().left,
                r = t.position().left,
                s = {
                    left: i,
                    right: n - i
                };
            o < s.left ? e.animate({
                scrollLeft: r
            }, 100) : o + a > s.right && e.animate({
                scrollLeft: r + a - (n - i - i)
            }, 100)
        },
        se = function(e, t, a) {
            t = Array.isArray(t) ? t : [t], $.each(t, function(t, n) {
                var i = "custom-".concat(n, "-").concat(a),
                    o = e && e.length ? e : $("[data-".concat(i, "]"));
                $.each(o, function(e, t) {
                    var a = $(t).data(i);
                    a && a !== !1 && t.style.setProperty("--".concat(i), a)
                })
            })
        },
        ce = function(e) {
            var t = ((window._gpdc || {}).browser || {}).device || "";
            if (t.match(/ps3/i) || t.match(/ps4/i) || t.match(/ps5/i)) {
                var a = e.attr("href") || "";
                (a.includes(W.oldStoreUrl) || a.includes(W.newStoreUrl)) && e.attr({
                    href: le(a),
                    target: "_self"
                })
            }
        },
        le = function(e) {
            var t = {};
            return e.replace(/([^#\/&=?]+)=([^?&=]+)/gi, function(e, a, n, i) {
                t[a] = decodeURIComponent(n)
            }), t.cid && (e = t.cid.match(/STORE-/) ? W.consoleUrlPrefix.category : W.consoleUrlPrefix.product + t.cid), e
        },
        de = "agegate-curtain",
        ue = function() {
            function e() {
                n(this, e);
                var t = new Date;
                this.IGNORE_RATING_CLASS = "ignore-rating", this.RATED_VIDEO_NOT_SELECTOR = ':not([data-component="video-block"])', this.userState = new q, this.isMatureRatedPage = _gpdc.elements.$body.data("rated-mature"), this.ageGateType = _gpdc.elements.$body.data("age-gate-type"), this.ageThreshold = parseInt(_gpdc.elements.$body.data("age-threshold") || "17", 10), this.cookieTimeout = parseInt(_gpdc.elements.$body.data("cookie-timeout") || "120", 10), this.isAutoTriggered = _gpdc.elements.$body.data("auto-trigger-gated-page"), this.isAdvancedAgeGate = _gpdc.elements.$body.data("advanced-age-gate"), this.ratingAgeThreshold = this.isAdvancedAgeGate ? parseInt(_gpdc.elements.$body.data("rating-age-threshold") || this.ageThreshold, 10) : this.ageThreshold, this.ratingAgeLessThanAgeThreshold = this.ratingAgeThreshold < this.ageThreshold, this.loggedInUser = _gpdc.user && _gpdc.user.isLoggedIn ? _gpdc.user : null, this.usersAge = 0, this.$ageGate = null, this.$ageGateVideo = null, this.lastElementTabIndex = 2, this.$triggerElement = null, this.formValidations = {
                    year: {
                        regx: /^\d{4}$/,
                        min: 1869,
                        max: t.getFullYear()
                    },
                    month: {
                        regx: /^\d{1,2}$/,
                        min: 1,
                        max: 12,
                        currentMonth: t.getMonth() + 1
                    },
                    day: {
                        regx: /^\d{1,2}$/,
                        min: 1,
                        max: 31,
                        currentDay: t.getDate()
                    }
                }
            }
            return o(e, [{
                key: "getAgeGateElement",
                value: function() {
                    return this.isAdvancedAgeGate && "video-block" === this.triggerComponent ? this.$ageGateVideo : this.$ageGate
                }
            }, {
                key: "checkAgeGateStatus",
                value: function(e) {
                    this.loggedInUser && this.loggedInUser.isMature || this.usersAge >= this.ageThreshold ? this.setAgeGateSuccess(e, !1) : this.isAdvancedAgeGate && this.usersAge >= this.ratingAgeThreshold && this.setAgeGateSuccess(e, !0)
                }
            }, {
                key: "setAgeGateSuccess",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (t) return $('[data-component="video-block"][data-age-gated="true"]').attr("data-age-gated", !1).data("age-gated", !1), void $('[data-component="video-block"][data-force-age-gate="true"]').attr("data-force-age-gate", !1).data("force-age-gate", !1);
                    var a = '[data-component="image-block"][data-age-gated]:not([data-lightbox="true"])';
                    this.isAutoTriggered && _gpdc.elements.$body.attr("data-auto-trigger-gated-page", !1), this.isMatureRatedPage && (_gpdc.elements.$body.addClass(this.IGNORE_RATING_CLASS), _gpdc.elements.$body.attr("data-rated-mature", !1).data("rated-mature", !1));
                    var n = this.isAdvancedAgeGate && this.usersAge < this.ratingAgeThreshold ? this.RATED_VIDEO_NOT_SELECTOR : "";
                    $('[data-age-gated="true"]' + n).attr("data-age-gated", !1).data("age-gated", !1), $('[data-force-age-gate="true"]' + n).attr("data-force-age-gate", !1).data("force-age-gate", !1), $("".concat(a, '[href="').concat(E, '"]')).attr("tabindex", -1), e || this.userState.clear()
                }
            }, {
                key: "updateSignInLink",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ".age-gate",
                        a = $("".concat(t, ' [data-sign-in-link="true"]'));
                    a.length && a.on("click.dkSignIn", function(t) {
                        var a = t.currentTarget;
                        e.logAgeGateDtmEvent($(a), "select sign in", "sign in", "link", "user_engagement"), window._gpdc.config.doSignIn()
                    })
                }
            }, {
                key: "logAgeGateDtmEvent",
                value: function(e, t, a, n, i) {
                    _gpdc.analytics.event.addGDLEvent("click", t, {
                        moduleName: "age-gate",
                        elementType: n,
                        assetName: L.EMPTY_LABEL,
                        linkUrl: L.EMPTY_LABEL,
                        label: a,
                        userActionFlag: !0,
                        position: 1
                    }, e), i && _gpdc.analytics._satelliteTrack(i)
                }
            }, {
                key: "toggleSubmitBtnState",
                value: function(e) {
                    var t = this.getAgeGateElement().find(".age-gate__input-btn");
                    e ? (t.attr("aria-disabled", "true"), t.addClass("cta__disabled")) : (t.attr("aria-disabled", "false"), t.removeClass("cta__disabled"))
                }
            }, {
                key: "getUsersAgeInYears",
                value: function(e, t, a) {
                    var n = new Date,
                        i = new Date(e, t, a),
                        o = n.getMonth() - i.getMonth(),
                        r = n.getFullYear() - i.getFullYear();
                    return (o < 0 || 0 === o && n.getDate() < i.getDate()) && r--, r
                }
            }, {
                key: "toggleFormValidityState",
                value: function() {
                    var e = this.getAgeGateElement(),
                        t = e.find("#age-gate-day"),
                        a = e.find("#age-gate-month"),
                        n = e.find("#age-gate-year"),
                        i = $(".age-gate__error-notice"),
                        o = [t.attr("aria-invalid"), a.attr("aria-invalid"), n.attr("aria-invalid")];
                    o.includes("true") ? (this.toggleSubmitBtnState(!0), i.removeClass("visibility--hidden")) : (this.toggleSubmitBtnState(!1), i.addClass("visibility--hidden")), t.val() && a.val() && n.val() || this.toggleSubmitBtnState(!0)
                }
            }, {
                key: "validateInputField",
                value: function(e, t, a) {
                    var n, i, o, r, s, c, l = this.formValidations[t],
                        d = this.getAgeGateElement(),
                        u = d.find("#age-gate-month"),
                        g = d.find("#age-gate-year"),
                        h = !0;
                    if (h = "" === a || l.regx.test(a) && a >= l.min && a <= l.max, "year" !== t && (n = parseInt(g.val() || "0", 10), i = parseInt(u.val() || "0", 10), r = n === this.formValidations.year.max, o = "true" == g.attr("aria-invalid"), s = "true" == u.attr("aria-invalid")), !h) return h;
                    if ("month" !== t || o || (h = r ? a <= l.currentMonth : h), "day" === t && !o && !s) {
                        var p = i === this.formValidations.month.currentMonth;
                        c = new Date(n, i, 0).getDate(), c = r && p ? l.currentDay : c, h = !a || a <= c
                    }
                    return h
                }
            }, {
                key: "ageGateClose",
                value: function(e, t, a) {
                    var n = this,
                        i = this.getAgeGateElement(),
                        o = i.find(".age-gate__input-btn");
                    ee(!1, "100", "dark", de).then(function(r) {
                        i.addClass("display--hidden"), "DOB" === n.ageGateType && ($.each(i.find(".age-gate__input-field"), function(e, t) {
                            var a = $(t);
                            a.val("").removeClass("dirty").attr("aria-invalid", !1), a.closest("label").removeClass("hasError")
                        }), i.find(".age-gate__error-notice").addClass("visibility--hidden"), o.off("click.psAgeGate")), e.off(t), n.ageGateAccessibilityUtils("off"), null !== a && a()
                    })
                }
            }, {
                key: "defineAgeGateEscape",
                value: function(e) {
                    var t = this,
                        a = this.getAgeGateElement(),
                        n = a.find(".text-link"),
                        i = a.find(".age-gate__close");
                    if (this.isAutoTriggered) {
                        n.removeClass("display--hidden").data("satellite-track", "user_engagement"), i.remove();
                        var o = !1;
                        try {
                            var r = new URL(document.referrer);
                            o = r.origin === location.origin
                        } catch (e) {
                            o = (document.referrer || "").startsWith(location.origin)
                        }
                        return void(o && n.on("click.psAgeGateBack", function(e) {
                            e.preventDefault(), n.attr("href", document.referrer), t.logAgeGateDtmEvent(n, "back to playstation click", "back to playstation", "link", "user_engagement"), window.history.back(-1)
                        }))
                    }
                    n.remove(), i.removeClass("display--hidden"), i.on("click.psAgeGate", function(a) {
                        return t.ageGateClose(i, "click.psAgeGate", e)
                    }), _gpdc.elements.$document.on("keyup.psAgeGate", function(a) {
                        "Escape" !== a.key && "Esc" !== a.key && 27 !== a.keyCode || (a.stopPropagation(), t.ageGateClose(_gpdc.elements.$document, "keyup.psAgeGate", e))
                    })
                }
            }, {
                key: "showAccessDenied",
                value: function() {
                    var e = this;
                    this.isAutoTriggered && ae(Y.CONTENT);
                    var t = this.getCorrectAgeGateElm(".age-gate.user-shall-not-pass"),
                        a = t.ageGateElmVar,
                        n = t.ageGateElmRef;
                    this[a] = n, ee(!0, "100", "dark", de).then(function(t) {
                        e[a] && e[a].length ? (e.defineAgeGateEscape(null), e[a].removeClass("display--hidden")) : te(Y.TYPE_TEMPLATE_ID_MAP.SHALL_NOT_PASS).then(function(t) {
                            var a = e.getCorrectAgeGateElm(".age-gate.user-shall-not-pass", !0),
                                n = a.ageGateElmVar,
                                i = a.ageGateElmRef;
                            e[n] = i, e.applyTabOrder("ACCESS_DENIED"), e.defineAgeGateEscape(null)
                        }).catch(function() {
                            return _gpdc.Logger.warn("Unable to find Age Gate Shall Not Pass HTML Template!!")
                        })
                    }).then(function(t) {
                        e.ageGateAccessibilityUtils("on")
                    })
                }
            }, {
                key: "attachInputFieldEventHandler",
                value: function(e, t) {
                    var a = this;
                    e.on("keyup.psAgeGate blur.psAgeGate", function(n) {
                        var i, o = n.which || n.keyCode,
                            r = e.val(),
                            s = r.length,
                            c = parseInt(e.attr("minlength")),
                            l = parseInt(e.attr("maxlength")),
                            d = e.attr("name"),
                            u = 0,
                            g = !1;
                        e.addClass("dirty");
                        var h = a.getAgeGateElement().find("#age-gate-day");
                        (s >= c || "blur" == n.type || !r && e.hasClass("dirty")) && (u = parseInt(r.substring(0, l), 10), u = isNaN(u) ? "" : u, e.val(u), g = a.validateInputField(e, d, u), e.attr("aria-invalid", !g), e.closest("label")["".concat(g ? "remove" : "add", "Class")]("hasError"), "day" != d && h.hasClass("dirty") && (i = a.validateInputField(h, "day", h.val()), h.attr("aria-invalid", !i), h.closest("label")["".concat(i ? "remove" : "add", "Class")]("hasError")), g && r && s >= l && o && U.INPUTS_RESERVED_KEY_CODES.indexOf(o) === -1 && t.focus()), r || e.removeClass("dirty"), a.toggleFormValidityState()
                    })
                }
            }, {
                key: "attachSubmitBtnLogic",
                value: function() {
                    var e = this;
                    return new Promise(function(t, a) {
                        var n = e.getAgeGateElement(),
                            i = n.find(".age-gate__input-btn");
                        i.on("click.psAgeGate", function(o) {
                            if (o.preventDefault(), o.stopPropagation(), !i.hasClass("cta__disabled")) {
                                var r = n.find("#age-gate-day").val(),
                                    s = n.find("#age-gate-year").val(),
                                    c = n.find("#age-gate-month").val();
                                c = parseInt(c || "1", 10) - 1, e.usersAge = e.getUsersAgeInYears(s, c, r);
                                var l = e.isAdvancedAgeGate && "video-block" === e.triggerComponent,
                                    d = e.usersAge < e.ageThreshold,
                                    u = e.usersAge < e.ratingAgeThreshold,
                                    g = !!d && (l && !u);
                                I(Y.COOKIE_NAME, e.usersAge, e.cookieTimeout);
                                var h = l ? u : d;
                                if (h) ee(!0, "100", "dark", de).then(function(t) {
                                    n.remove(), n = null, e.showAccessDenied(), l && !d && e.setAgeGateSuccess(!1, !1), e.logAgeGateDtmEvent(i, "submit age-gate too-young", "sumbit", "button"), a()
                                });
                                else {
                                    if (!e.isAutoTriggered) return void ee(!1, "100", "dark", de).then(function(a) {
                                        n.addClass("display--hidden"), e.logAgeGateDtmEvent(i, "submit age-gate", "submit", "button", "age_gate_submit"), n.remove(), t(g)
                                    });
                                    e.logAgeGateDtmEvent(i, "submit age-gate", "submit", "button", "age_gate_submit"), window.location.reload()
                                }
                            }
                        })
                    })
                }
            }, {
                key: "applyTabOrder",
                value: function(e) {
                    var t = this,
                        a = this.getAgeGateElement(),
                        n = a.find(".age-gate__input-btn");
                    switch (e) {
                        case "SIGN_IN":
                            this.lastElementTabIndex = 2, a.find('[data-sign-in-link="true"]').attr("tabindex", this.lastElementTabIndex);
                            break;
                        case "ACCESS_DENIED":
                            this.lastElementTabIndex = 2, a.find(".text-block a").attr("tabindex", this.lastElementTabIndex);
                            break;
                        case "DOB":
                            var i = (_gpdc.elements.$body.data("date-format") || "YYYY/MM/DD").toLowerCase().split(/\/|\-|\:|\.|\,/);
                            i.forEach(function(e, n) {
                                var i = Y.FIELDS[e.substring(0, 1)],
                                    o = n + 1;
                                a.find(i).addClass("order--".concat(o)), a.find("".concat(i, " input")).attr("tabindex", o + 1), t.lastElementTabIndex++
                            }), n.attr("tabindex", this.lastElementTabIndex), this.lastElementTabIndex++, a.find('[data-sign-in-link="true"]').attr("tabindex", this.lastElementTabIndex)
                    }
                }
            }, {
                key: "handleCustomFocus",
                value: function(e, t, a) {
                    16 === e.keyCode || "Tab" !== e.key && 9 !== e.keyCode || (e.preventDefault(), e.stopPropagation(), this.getAgeGateElement().find('[tabindex="'.concat(e.shiftKey ? t : a, '"]')).focus())
                }
            }, {
                key: "ageGateAccessibilityUtils",
                value: function(e) {
                    var t = this,
                        a = this.getAgeGateElement();
                    "on" === e ? a.find('[tabindex="2"]').focus() : this.$triggerElement && this.$triggerElement.focus(), a.find('[tabindex="'.concat(this.lastElementTabIndex, '"]'))[e]("keydown.dkAgeGate", function(e) {
                        t.handleCustomFocus(e, t.lastElementTabIndex - 1, 1)
                    }), a.find('[tabindex="1"]')[e]("keydown.dkAgeGate", function(e) {
                        t.handleCustomFocus(e, t.lastElementTabIndex, 2)
                    })
                }
            }, {
                key: "defineDOBAgeGateFields",
                value: function(e, t) {
                    var a = this,
                        n = this.getAgeGateElement(),
                        i = n.find(".age-gate__input-field");
                    this.applyTabOrder(this.ageGateType), i.each(function(e, t) {
                        var i = $(t),
                            o = i.get(0).tabIndex + 1,
                            r = n.find('[tabindex="'.concat(o, '"]'));
                        a.attachInputFieldEventHandler(i, r)
                    }), this.attachSubmitBtnLogic().then(function(t) {
                        return e(t)
                    }).catch(t)
                }
            }, {
                key: "showAgeGate",
                value: function() {
                    var e = this;
                    return new Promise(function(t, a) {
                        var n = e.getCorrectAgeGateElm(".age-gate"),
                            i = n.ageGateElmVar,
                            o = n.ageGateElmRef;
                        e[i] = o, e[i] && e[i].length ? ("DOB" === e.ageGateType && e.defineDOBAgeGateFields(t, a), e.defineAgeGateEscape(a), ee(!0, "100", "dark", de).then(function(t) {
                            e[i].removeClass("display--hidden"), e.logAgeGateDtmEvent(e[i], "open age-gate", L.EMPTY_LABEL, "popup"), e.ageGateAccessibilityUtils("on")
                        })) : te(Y.TYPE_TEMPLATE_ID_MAP[e.ageGateType]).then(function(n) {
                            var i = e.getCorrectAgeGateElm(".age-gate", !0),
                                o = i.ageGateElmVar,
                                r = i.ageGateElmRef;
                            e[o] = r, e.updateSignInLink(), e.defineAgeGateEscape(a), "DOB" === e.ageGateType ? ee(!0, "100", "dark", de).then(function(n) {
                                e.defineDOBAgeGateFields(t, a)
                            }).then(function(t) {
                                e.logAgeGateDtmEvent(e[o], "open age-gate", L.EMPTY_LABEL, "popup"), e.ageGateAccessibilityUtils("on")
                            }) : (ee(!0, "100", "dark", de).then(function(t) {
                                e.applyTabOrder(e.ageGateType), e.logAgeGateDtmEvent(e[o], "open age-gate", L.EMPTY_LABEL, "popup"), e.ageGateAccessibilityUtils("on")
                            }), a())
                        }).catch(function(e) {
                            _gpdc.Logger.warn("Unable to find Age Gate HTML Template!!", e)
                        })
                    })
                }
            }, {
                key: "getCorrectAgeGateElm",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = this.isAdvancedAgeGate && "video-block" === this.triggerComponent ? "rated-video-gate" : "generic-gate",
                        n = "rated-video-gate" === a ? ":not(.generic-gate)" : ":not(.rated-video-gate)",
                        i = "rated-video-gate" === a ? "$ageGateVideo" : "$ageGate",
                        o = $("".concat(e).concat(t ? n : ".".concat(a)));
                    return t && (o.addClass(a), o = $("".concat(e, ".").concat(a))), {
                        ageGateElmVar: i,
                        ageGateElmRef: o
                    }
                }
            }, {
                key: "isGated",
                value: function(e) {
                    if (!e || !e.length) return !1;
                    var t = e.data(),
                        a = t.ageGated,
                        n = void 0 !== a && a,
                        i = t.forceAgeGate,
                        o = void 0 !== i && i;
                    return n === !0 || o === !0
                }
            }, {
                key: "triggerIfNeeded",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return this.isGated(e) ? (t && (t.preventDefault(), t.stopPropagation()), this.userState.save(e.data(U.COMPONENT_INSTANCE_ID_ATTR)), this.triggerAgeGate(e)) : Promise.resolve()
                }
            }, {
                key: "callShowAgeGate",
                value: function(e, t) {
                    var a = this;
                    this.showAgeGate().then(function(t) {
                        a.setAgeGateSuccess(!1, t), e()
                    }).catch(t)
                }
            }, {
                key: "triggerAgeGate",
                value: function(e) {
                    var t = this;
                    return new Promise(function(a, n) {
                        t.$triggerElement = e;
                        var i = function() {
                            e.trigger("success.psAgeGate.attr"), a()
                        };
                        if (t.$triggerElement && !t.$triggerElement.hasClass("media-block") && (t.$triggerElement = t.$triggerElement.find(".media-block")), t.usersAge = t.loggedInUser ? t.loggedInUser.age : parseInt(S(Y.COOKIE_NAME) || "0"), t.triggerComponent = t.$triggerElement ? t.$triggerElement.data("component") : null, t.isAdvancedAgeGate && "video-block" === t.triggerComponent) {
                            var o = t.usersAge >= t.ratingAgeThreshold;
                            return void(o || t.loggedInUser && t.loggedInUser.isPageRatingMature ? (I(Y.COOKIE_NAME, t.usersAge || t.loggedInUser.age, t.cookieTimeout), t.setAgeGateSuccess(!1, t.ratingAgeLessThanAgeThreshold), i()) : t.usersAge || t.loggedInUser ? (I(Y.COOKIE_NAME, t.usersAge || 1, t.cookieTimeout), t.showAccessDenied(), n()) : t.callShowAgeGate(i, n))
                        }
                        var r = t.usersAge >= t.ageThreshold;
                        r || t.loggedInUser && t.loggedInUser.isMature ? (I(Y.COOKIE_NAME, t.usersAge || t.loggedInUser.age, t.cookieTimeout), t.setAgeGateSuccess(!1, !1), i()) : t.usersAge || t.loggedInUser ? (I(Y.COOKIE_NAME, t.usersAge || 1, t.cookieTimeout), t.showAccessDenied(), n()) : (t.isAutoTriggered && ae(Y.CONTENT), t.callShowAgeGate(i, n))
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    this.usersAge = this.loggedInUser ? this.loggedInUser.age : parseInt(S(Y.COOKIE_NAME) || "0"), this.isMatureRatedPage && (this.loggedInUser && !this.loggedInUser.isMature ? this.isAutoTriggered = !0 : _gpdc.elements.$body.addClass(this.IGNORE_RATING_CLASS));
                    var t = S(Y.COOKIE_NAME);
                    !this.isAdvancedAgeGate || "success" !== t && "failure" !== t || x(Y.COOKIE_NAME), this.isAutoTriggered ? this.triggerAgeGate(null).catch(function(e) {}) : this.checkAgeGateStatus(!0);
                    var a = $("[data-trigger-gated-elm]");
                    return !(!a || !a.length) && (a.each(function(t, a) {
                        var n = $(a);
                        n.on("click.psAgeGate", function() {
                            e.triggerAgeGate(n).then(function(e) {
                                n.trigger("success.psAgeGate.attr")
                            }).catch(function(e) {})
                        })
                    }), void _gpdc.Logger.logInitializer("core", "components", "Age Gate"))
                }
            }]), e
        }(),
        ge = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "setUpVideoPlayers",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = {
                            controls: !0,
                            controlBar: {
                                pictureInPictureToggle: !1,
                                volumePanel: !0,
                                currentTimeDisplay: !0,
                                durationDisplay: !0,
                                remainingTimeDisplay: !1,
                                timeTooltip: !1
                            },
                            autoplay: !1,
                            preload: "auto",
                            fluid: !0,
                            fill: !0
                        };
                    $.each(t, function(t, a) {
                        var i = $(a).closest(".media-block--video"),
                            o = videojs(a, n);
                        o.on("ready", function() {
                            var t = parseInt(i.attr("tabindex") || "0", 10) + 1;
                            e.setUpCustomButtons(i, t, o)
                        })
                    }), 1 === t.length && a && t.focus()
                }
            }, {
                key: "addCustomListeners",
                value: function(e, t, a, n) {
                    e.on("keyup.dkVideoBlock", function(e) {
                        var t = e.key,
                            a = e.keyCode;
                        if ("Enter" == t || "Space" == t || 13 == a || 32 == a) {
                            var i = $(document.activeElement);
                            i.is("video") || i.hasClass("media-block--video") || i.hasClass("vjs-volume-bar") ? n.paused() ? n.play() : n.pause() : i.hasClass("pause-video") && setTimeout(function() {
                                return i.prev().focus()
                            }, 30)
                        }
                    }), e.on("keydown.dkVideoBlock", function(a) {
                        16 === a.keyCode || "Tab" !== a.key && 9 !== a.keyCode || (a.preventDefault(), a.stopPropagation(), !a.shiftKey && $(a.target).hasClass("media-block--video") ? e.find('[tabindex="'.concat(t, '"]:visible')).eq(0).focus() : a.shiftKey && t > 2 && e.closest(".media-lightbox").find('[tabindex="'.concat(t - 2, '"]')).focus())
                    }), e.find('[tabindex="'.concat(a, '"]')).on("keydown.dkVideoBlock", function(n) {
                        if (16 !== n.keyCode && ("Tab" === n.key || 9 === n.keyCode))
                            if (n.preventDefault(), n.stopPropagation(), n.shiftKey) e.find('[tabindex="'.concat(a - 1, '"]')).focus();
                            else {
                                var i = e.closest(".media-lightbox").find('[tabindex="'.concat(t + 6, '"]'));
                                i.length ? i.focus() : function() {}
                            }
                    })
                }
            }, {
                key: "setUpCustomButtons",
                value: function(e, t, a) {
                    var n, i, o, r, s, c, l = $("#custom-btn-template"),
                        d = l.prop("content"),
                        u = $(d).find("svg"),
                        g = t + 5;
                    e.find(".vjs-big-play-button").attr("tabindex", t), e.find(".vjs-mute-control").attr("tabindex", t + 2), e.find(".vjs-volume-bar").attr("tabindex", t + 3), e.find(".vjs-progress-holder").attr("tabindex", t + 4);
                    var h = e.find(".vjs-control-bar .vjs-play-control");
                    $.each(u, function(e, l) {
                        var d = a.controlBar.addChild("button"),
                            u = $(l).attr("data-btn-id"),
                            p = d.el(),
                            f = $(p);
                        switch (f.append(document.importNode(l, !0)), u) {
                            case "play-video":
                                n = f.attr("tabindex", t), f.addClass("play-video"), f.insertBefore(h);
                                break;
                            case "pause-video":
                                i = f.attr("tabindex", t), f.addClass("pause-video"), f.insertBefore(h);
                                break;
                            case "replay-video":
                                o = f.attr("tabindex", t), f.addClass("replay-video"), f.insertAfter(h);
                                break;
                            case "back-to-start":
                                r = f, f.addClass("back-to-start").attr("tabindex", t + 1), f.insertAfter(h);
                                break;
                            case "full-screen":
                                s = f.attr("tabindex", g), f.addClass("full-screen-control");
                                break;
                            case "close-full-screen":
                                c = f.attr("tabindex", g), f.addClass("close-full-screen-control")
                        }
                    }), a.on("play", function() {
                        $(".vjs-big-play-button").hide(), $(".vjs-big-play-button", ".vjs-control-bar .play-video").attr("aria-pressed", !0), $(".vjs-control-bar .pause-video").attr("aria-pressed", !1), n.hide(), o.hide(), r.show(), i.show().focus()
                    }), a.on("pause", function() {
                        $(".vjs-big-play-button", ".vjs-control-bar .play-video").attr("aria-pressed", !1), $(".vjs-control-bar .pause-video").attr("aria-pressed", !0), i.hide(), n.show().focus()
                    }), a.on("ended", function() {
                        $(".vjs-big-play-button", ".vjs-control-bar .play-video").attr("aria-pressed", !1), $(".vjs-control-bar .pause-video").attr("aria-pressed", !1), n.hide(), r.hide(), o.show().focus()
                    }), a.on("fullscreenchange", function() {
                        setTimeout(function() {
                            a.hasClass("vjs-fullscreen") ? $(a.el_).find('[tabindex="'.concat(t, '"]')).focus() : (c.hide(), s.show().focus())
                        }, 50)
                    }), n.on("click.dkPlayVideo touchend.dkPlayVideo", function() {
                        $(".vjs-big-play-button", ".vjs-control-bar .play-video").attr("aria-pressed", !0), $(".vjs-control-bar .pause-video").attr("aria-pressed", !1), n.hide(), i.show(), a.play()
                    }), i.on("click.dkPauseVideo touchend.dkPauseVideo", function() {
                        $(".vjs-big-play-button", ".vjs-control-bar .play-video").attr("aria-pressed", !1), $(".vjs-control-bar .pause-video").attr("aria-pressed", !0), i.hide(), n.show(), a.pause()
                    }), o.on("click.dkReplayVideo touchend.dkReplayVideo", function() {
                        o.hide(), r.show(), i.show(), a.play()
                    }), r.on("click.dkBackToStart touchend.dkBackToStart", function() {
                        a.currentTime(0)
                    }), s.on("click.dkFullScreen touchend.dkFullScreen", function() {
                        s.hide(), c.show(), a.requestFullscreen()
                    }), c.on("click.dkCloseFullScreen touchend.dkCloseFullScreen", function() {
                        c.hide(), s.show(), a.exitFullscreen()
                    }), this.addCustomListeners(e, t, g, a)
                }
            }]), e
        }(),
        he = function() {
            function e() {
                n(this, e), this.ageGate = new ue
            }
            return o(e, [{
                key: "processEmbedVideo",
                value: function(e, t, a, n, i, o) {
                    var r = $.trim(e.attr("data-playlist") || ""),
                        s = "".concat(H.EMBED_URL).concat(a, "?controls=1&enablejsapi=1");
                    n && i && (s += "&clip=".concat(n, "&clipt=").concat(i)), o && (s += "&start=".concat(o)), r || "true" !== e.attr("data-loop") ? r && (s += "&loop=1&listType=playlist&list=".concat(r)) : s += "&loop=1&playlist=".concat(a), "true" === e.attr("data-autoplay") && (s += "&autoplay=1&rel=0", t.attr("allow", "autoplay; encrypted-media"));
                    var c = e.attr("data-yt-captions");
                    c && (s += "&cc_lang_pref=".concat(c, "&cc_load_policy=1"));
                    var l = window.location.origin;
                    s += "&origin=".concat(l, "&widget_referrer=").concat(l);
                    var d = "yt-video-".concat(a);
                    t.attr("src", s), t.attr("id", d);
                    try {
                        var u = new YT.Player(d);
                        t.data("player", u)
                    } catch (e) {
                        _gpdc.Logger.warn("YouTube API error", e)
                    }
                }
            }, {
                key: "setupEmbeddedVideos",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '[data-embed-video="true"]',
                        a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = t instanceof jQuery ? t : $(t);
                    n && n.length && n.each(function(t, n) {
                        var i = $(n),
                            o = i.find("iframe"),
                            r = i.data(),
                            s = r.videoId,
                            c = r.clipId,
                            l = r.clipTiming,
                            d = r.videoTimeStamp;
                        a ? e.processEmbedVideo(i, o, s, c, l, d) : (o.hide(), e.ageGate.triggerIfNeeded(i).then(function() {
                            o.show(), e.processEmbedVideo(i, o, s, c, l, d)
                        }).catch(function() {
                            _gpdc.Logger.log("Age gate failed on YT Embed Video Block.")
                        }))
                    })
                }
            }, {
                key: "loadYoutubeApi",
                value: function() {
                    var e = document.createElement("script");
                    e.src = "https://www.youtube.com/iframe_api";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t)
                }
            }, {
                key: "init",
                value: function() {
                    this.loadYoutubeApi(), this.setupEmbeddedVideos('[data-embed-video="true"]', !1), _gpdc.Logger.logInitializer("core", "components", "Media Block: Youtube Embed Video")
                }
            }]), e
        }(),
        pe = "lightbox-curtain",
        fe = 6,
        ve = 1,
        me = function() {
            function e() {
                n(this, e), this.videoPlayer = new ge, this.ytEmbedVideo = new he, this.carousel = new ye, _gpdc.Logger.logInitializer("core", "components", "Media Lightbox")
            }
            return o(e, [{
                key: "openMediaLightbox",
                value: function(e, t, a, n) {
                    var i = this,
                        o = $(".media-lightbox__main");
                    return _ = t, _.data("dk-media-lightbox") === !0 ? Promise.reject() : (_.data("dk-media-lightbox", !0), new Promise(function(r, s) {
                        o.length ? i.displayMediaLightbox(n, !1, e).then(function(n) {
                            i.chooseLightboxType(e, t, a, o), r(n)
                        }, function(e) {
                            return s(err)
                        }) : te("#media-lightbox__template").then(function(c) {
                            o = $(".media-lightbox__main"), i.displayMediaLightbox(n, !0, e).then(function(n) {
                                i.chooseLightboxType(e, t, a, o), r(n)
                            }, function(e) {
                                return s(err)
                            })
                        }).catch(function(e) {
                            s(e), _gpdc.Logger.warn("Unable to find Media LightBox HTML Template!!")
                        })
                    }))
                }
            }, {
                key: "chooseLightboxType",
                value: function(e, t, a, n) {
                    var i = $(".media-lightbox"),
                        o = $(".media-lightbox__lower");
                    if (ve = 1, "carousel" === e) n.addClass("carousel"), this.createLightboxCarousels(a);
                    else {
                        var r = t.data("component");
                        i.addClass("no-carousel"), o.addClass("no-carousel-lower"), "video-block" === r || "live-image" === r ? this.cloneMediaBlockIntoLightbox("video", t, n, "main") : "image-block" === r && (this.cloneMediaBlockIntoLightbox("image", t, n, "main"), this.fullscreenLightboxMedia())
                    }
                }
            }, {
                key: "displayMediaLightbox",
                value: function(e, t, a) {
                    var n = this,
                        i = $(".media-lightbox"),
                        o = $(".media-lightbox__main"),
                        r = $(".media-lightbox__lower");
                    return new Promise(function(s, c) {
                        ee(!0, "100", "dark", pe).then(function(c) {
                            i.addClass("show reveal theme--".concat(e, " ").concat(e)), o.addClass("reveal"), setTimeout(function() {
                                r.addClass("reveal"), n.lightboxAccessibilityUtils("on", a)
                            }, 250), t && (i.find(".media-lightbox__close").on("click.dkMediaLightbox", function(e) {
                                return n.closeMediaLightbox(e)
                            }), _gpdc.elements.$document.on("keyup.dkMediaLightboxImage", function(e) {
                                "Escape" !== e.key && "Esc" !== e.key && 27 !== e.keyCode || (e.stopPropagation(), n.closeMediaLightbox(e))
                            }), o.on("click", function(e) {
                                return e.stopPropagation()
                            }), n.carousel.addAnalyticsEventHandlers(o)), s(c)
                        }, function(e) {
                            return c(e)
                        })
                    })
                }
            }, {
                key: "closeMediaLightbox",
                value: function(e) {
                    var t = $(".media-lightbox"),
                        a = $(".media-lightbox__main"),
                        n = $(".media-lightbox__fullscreen-image"),
                        i = $(".media-lightbox__lower");
                    return a.hasClass("fullscreen") ? void this.exitFullScreenMode(e) : (i.hasClass("flickity-enabled") && (this.carousel.destroyCarousel(i), i.empty()), a.hasClass("flickity-enabled") && (a.removeClass("carousel"), this.carousel.destroyCarousel(a)), t.removeClass("reveal no-carousel"), a.removeClass("reveal"), i.removeClass("reveal no-carousel-lower"), n.removeClass("reveal"), this.lightboxAccessibilityUtils("off"), void ee(!1, "100", "dark", pe).then(function() {
                        setTimeout(function() {
                            t.removeClass("show light dark"), i.removeClass("fullscreen"), a.removeClass("fullscreen").empty(), n.removeClass("show").empty()
                        }, 250)
                    }))
                }
            }, {
                key: "createLightboxCarousels",
                value: function(e) {
                    var t = this,
                        a = $(".media-lightbox__main"),
                        n = $(".media-lightbox__lower"),
                        i = e.find(".carousel-cell, .media-carousel__cell"),
                        o = e.data("carousel-cell-index");
                    $.each(i, function(e, i) {
                        var r = $(i);
                        r = r.hasClass("media-block") ? r : r.find(".media-block");
                        var s = r.data("component");
                        switch (s) {
                            case "image-block":
                                t.cloneMediaBlockIntoLightbox("image", r, a, "main", !0, e), t.cloneMediaBlockIntoLightbox("image", r, n, "lower", !0, e);
                                break;
                            case "video-block":
                            case "live-image":
                                t.cloneMediaBlockIntoLightbox("video", r, a, "main", !0, e), t.cloneMediaBlockIntoLightbox("image", r, n, "lower", !0, e);
                                break;
                            default:
                                e < o ? o-- : e === o && (o = 0)
                        }
                    }), this.carousel.createCarousel(a, {
                        accessibility: !0,
                        cellAlign: "center",
                        contain: !1,
                        prevNextButtons: !0,
                        pageDots: !1,
                        percentPosition: !0,
                        fullscreen: !0,
                        imagesLoaded: !0,
                        initialIndex: o
                    }).catch(function() {}), this.carousel.createCarousel(n, {
                        asNavFor: ".media-lightbox__main",
                        cellAlign: "left",
                        contain: !1,
                        prevNextButtons: !0,
                        pageDots: !1,
                        percentPosition: !0,
                        imagesLoaded: !0,
                        accessibility: !1,
                        initialIndex: o
                    }).catch(function() {}), this.fullscreenLightboxMedia(), this.carousel.addAnalyticsEventHandlers(a), n.on("click.dkMediaLightbox", function(e) {
                        return e.stopPropagation()
                    }), n.on("hover.dkMediaLightbox", function() {
                        a.hasClass("carousel") && a.addClass("shade")
                    }, function() {
                        a.hasClass("carousel") && a.removeClass("shade")
                    })
                }
            }, {
                key: "cloneMediaBlockIntoLightbox",
                value: function(e, t, a, n) {
                    var i, o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        r = $(".toCloneImage"),
                        s = $(".toCloneVideo"),
                        c = $(".toCloneYoutubeVideo"),
                        l = t.attr("data-caption"),
                        d = t.data(),
                        u = d.videoId,
                        g = d.clipId,
                        h = d.clipTiming,
                        p = d.videoTimeStamp,
                        f = d.ytCaptions,
                        v = "video" === e && !u;
                    if ("image" === e) {
                        var m, y, k = t.data("component");
                        "video-block" !== k && "live-image" !== k || "lower" != n ? (m = t.attr("data-src"), y = t.attr("data-src-desktop") || m) : (m = t.attr("data-video-thumbnail"), y = t.attr("data-video-desktop-thumbnail") || m);
                        var _ = this.getTransparentRenditionVariant(t, !0),
                            b = this.getTransparentRenditionVariant(t, !1),
                            C = K.pictureTag[n || "main"],
                            w = C.replace(/IMG_SRC_MOBILE/g, m).replace(/IMG_SRC_DESKTOP/g, y).replace(/MOBILE_TRANSPARENT/g, _).replace(/DESKTOP_TRANSPARENT/g, b);
                        r.clone().appendTo(a), i = a.find(".toCloneImage"), i.attr({
                            "data-src": m,
                            "data-src-desktop": y
                        }), i.removeClass("cloner toCloneImage"), i.find(".media-block__img").html(w)
                    } else if (v) {
                        var T, A = t.data("src"),
                            L = _gpdc.elements.$window.width() > 767 ? t.data("src-desktop") : A;
                        s.clone().appendTo(a), i = a.find(".toCloneVideo"), T = i.find("video"), T.addClass("video-js"), i.removeClass("cloner toCloneVideo"), i.find("source").attr("src", L || A), this.videoPlayer.setUpVideoPlayers(T, !0)
                    } else "video" === e && u && (c.clone().appendTo(a), i = a.find(".toCloneYoutubeVideo"), i.attr({
                        "data-video-id": u,
                        "data-clip-id": g,
                        "data-clip-timing": h,
                        "data-video-time-stamp": p,
                        "data-component": "youtube-embed-block",
                        "data-yt-captions": f
                    }).removeClass("cloner toCloneYoutubeVideo"), this.ytEmbedVideo.setupEmbeddedVideos('[data-component="youtube-embed-block"]', !1));
                    "main" === n && l && i.append('<figcaption class="media-block__caption">'.concat(l, "</figcaption>")), o ? (i.addClass("carousel-cell"), "lower" !== n ? (ve++, i.attr("tabindex", ve)) : i.attr("tabindex", -1)) : "fullscreen" !== n && (ve++, i.attr("tabindex", ve)), "lower" !== n && v && (ve += fe), u && (ve++, i.find("iframe").attr("tabindex", ve))
                }
            }, {
                key: "exitFullScreenMode",
                value: function(e) {
                    e.stopPropagation();
                    var t = $(".media-lightbox__main"),
                        a = $(".media-lightbox__lower"),
                        n = $(".media-lightbox__fullscreen-image"),
                        i = $(".media-lightbox").data("close-label");
                    n.removeClass("reveal"), t.removeClass("fullscreen"), a.removeClass("fullscreen"), setTimeout(function() {
                        t.addClass("reveal"), n.removeClass("show").empty(), $(".media-lightbox__close svg").attr("aria-label", i)
                    }, 450)
                }
            }, {
                key: "fullscreenLightboxMedia",
                value: function() {
                    var e = this,
                        t = $(".media-lightbox__main"),
                        a = $(".media-lightbox__lower"),
                        n = $(".media-lightbox__fullscreen-image"),
                        i = t.find('[data-component="image-block"]'),
                        o = $(".media-lightbox").data("close-fullscreen-label");
                    $.each(i, function(i, r) {
                        var s = $(r);
                        s.on("click.dkMediaLightbox keypress.dkMediaLightboxKeyPress", function(i) {
                            return i.stopPropagation(), t.hasClass("fullscreen") ? void e.exitFullScreenMode(i) : void("keypress" === i.type && 13 !== i.keyCode || (t.addClass("fullscreen"), a.addClass("fullscreen"), e.cloneMediaBlockIntoLightbox("image", s, n, "fullscreen"), n.addClass("show"), t.removeClass("reveal"), setTimeout(function() {
                                n.addClass("reveal"), $(".media-lightbox__close svg").attr("aria-label", o), $(".media-lightbox__close").focus()
                            }, 450)))
                        }), n.on("click.dkMediaLightbox", function(t) {
                            return e.exitFullScreenMode(t)
                        })
                    })
                }
            }, {
                key: "getTransparentRenditionVariant",
                value: function(e, t) {
                    var a = '[media="(min-width: '.concat(t ? "320px" : "768px", ')"]');
                    return (e.find("source".concat(a)).attr("srcset") || "").indexOf("--t$") > -1 ? "--t$" : "$"
                }
            }, {
                key: "handleCustomFocus",
                value: function(e, t, a) {
                    var n = $(".media-lightbox");
                    16 === e.keyCode || "Tab" !== e.key && 9 !== e.keyCode || (e.preventDefault(), e.stopPropagation(), n.find('[tabindex="'.concat(e.shiftKey ? t : a, '"]')).focus())
                }
            }, {
                key: "lightboxAccessibilityUtils",
                value: function(e, t) {
                    var a = this,
                        n = $(".media-lightbox");
                    "on" === e ? "carousel" === t ? n.find(".is-selected")[0].focus() : n.find('[tabindex="2"]').focus() : _ && (_.data("dk-media-lightbox", !1), setTimeout(function() {
                        return _.focus()
                    }, 300)), n.find('[tabindex="'.concat(ve, '"]'))[e]("keydown.dkMediaLightbox", function(e) {
                        a.handleCustomFocus(e, ve - 1, 1)
                    }), n.find('[tabindex="1"]')[e]("keydown.dkMediaLightbox", function(e) {
                        a.handleCustomFocus(e, ve, 2)
                    })
                }
            }]), e
        }(),
        ye = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '[data-carousel="true"]',
                    a = arguments.length > 1 ? arguments[1] : void 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "carousel";
                n(this, e), this.$carousels = $(t), this.config = a, this.module = i, this.userState = new q, this.arrowShape = "M32.483 43.12l-16.66-16.185a2.007 2.007 0 0 1 0-2.879l16.66-16.18a2.007 2.007 0 0 1 2.823.026l.617.622a2.007 2.007 0 0 1-.027 2.853l-13.058 12.68a2.007 2.007 0 0 0 0 2.878L35.896 39.62a2.007 2.007 0 0 1 .027 2.852l-.617.622a2.007 2.007 0 0 1-2.823.027z", this.carouselCellClass = ".carousel-cell, .media-carousel__cell", this.isAdvancedAgeGate = _gpdc.elements.$body.data("advanced-age-gate")
            }
            return o(e, [{
                key: "init",
                value: function() {
                    this.textDirection = _gpdc.config.textDirection, this.createCarousel(this.$carousels, this.options).catch(function() {}), this.addCarouselClickHandlers(), _gpdc.Logger.logInitializer("core", "components", "Carousel")
                }
            }, {
                key: "addCarouselClickHandlers",
                value: function() {
                    var e = this;
                    $.each(this.$carousels, function(t, a) {
                        var n = $(a);
                        $.each(n.find(e.carouselCellClass), function(e, t) {
                            return $(t).data("cell-idx", e)
                        }), n.on("keyup.dkCarouselFocus", function(e) {
                            var t = e.key,
                                a = e.keyCode;
                            "Tab" !== t && 9 !== a || n.addClass("focus-in")
                        }), n.on("blur.dkCarouselBlur", function() {
                            n.removeClass("focus-in")
                        }), n.on("keydown.dkCarousel", function(t, a, i, o) {
                            var r = t.target,
                                s = t.type,
                                c = t.key,
                                l = t.keyCode;
                            if ("keydown" == s && ("Enter" === c || 13 === l)) {
                                var d = $(r),
                                    u = d.filter(".carousel-cell.is-selected, .media-carousel__cell.is-selected").length ? d : d.find(".carousel-cell.is-selected, .media-carousel__cell.is-selected");
                                e.performLightboxChecks(u, u.find("picture"), n, u.data("cell-idx"))
                            }
                        }), n.on("staticClick.flickity", function(t, a, i, o) {
                            var r = t.target,
                                s = t.type;
                            "staticClick" == s && e.performLightboxChecks($(i), $(r), n, o)
                        }), e.addAnalyticsEventHandlers(n)
                    })
                }
            }, {
                key: "performLightboxChecks",
                value: function(e, t, a, n) {
                    var i = this;
                    if (e && e.length && t && t.length) {
                        var o = $(e).hasClass("media-block") ? $(e) : $(e).find(".media-block"),
                            r = a.data("disable-lightbox");
                        if (!this.shouldContinueClickHandling(t, o, r) || !t.closest(".media-block__inner").length) return void _gpdc.Logger.log("Carousel Cell click - action returned due to either lightbox disabled or click being on Pause/Play toggle or on cell description text, buttons, etc");
                        var s = a.data("lightbox-theme") || "dark",
                            c = new ue,
                            l = this.isAdvancedAgeGate ? c.isGated(o) : a.data("carousel-age-gated");
                        l ? (this.userState.save(a.data(U.COMPONENT_INSTANCE_ID_ATTR), U.COMPONENT_INSTANCE_ID_ATTR, n), c.triggerAgeGate(o).then(function(t) {
                            i.userState.clear(), i.triggerLightBox(e, a, s, n, o, r), i.logCarouselDtmEvent(a, "click", e)
                        }).catch(function(e) {
                            _gpdc.Logger.log("Age gate failed on Carousel!", e)
                        })) : (this.triggerLightBox(e, a, s, n, o, r), this.logCarouselDtmEvent(a, "click", e))
                    }
                }
            }, {
                key: "shouldContinueClickHandling",
                value: function(e, t, a) {
                    var n = e.hasClass("icon") || e.closest(".media-block__overlay").length;
                    if (t.data("pause-play-toggle") && n) return !1;
                    var i = t.data("component");
                    return !(!a || "video-block" !== i) || (!(!a || "video-block" === i || !t.data("age-gated")) || !a)
                }
            }, {
                key: "triggerLightBox",
                value: function(e, t, a, n, i, o) {
                    var r = "video-block" === i.data("component");
                    if (!o || r) {
                        var s = new me;
                        return t.data("carousel-cell-index", n), this.isAdvancedAgeGate || o && r ? void s.openMediaLightbox("singleMedia", i, null, a).catch(function() {}) : void s.openMediaLightbox("carousel", e, t, a).catch(function() {})
                    }
                }
            }, {
                key: "addAttributes",
                value: function(e) {
                    var t = !1;
                    $.each(e.find(this.carouselCellClass), function(e, a) {
                        var n = $(a),
                            i = n.hasClass("media-block") ? n : n.find(".media-block");
                        (i.data("age-gated") || i.data("force-age-gate")) && (t = !0), i.attr("data-slide", e), n.attr("data-slide", e)
                    }), e.data("carousel-age-gated", t)
                }
            }, {
                key: "createCarousel",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '[data-carousel="true"]',
                        a = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".media-carousel",
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".media-carousel__pagination";
                    return new Promise(function(o, r) {
                        var s = navigator || {},
                            c = s.userAgent,
                            l = $(t);
                        l.length ? ($.each(l, function(t, o) {
                            var r = $(o),
                                s = r.closest(".game-hero__gallery").length,
                                l = r.data("initial-index"),
                                d = r.data("adaptive-height"),
                                u = {
                                    rightToLeft: "rtl" === e.textDirection,
                                    cellAlign: "center",
                                    accessibility: !0,
                                    adaptiveHeight: "undefined" == typeof d || d,
                                    wrapAround: !s || r.find(e.carouselCellClass).length > 2,
                                    groupCells: !1,
                                    prevNextButtons: !0,
                                    pageDots: !0,
                                    percentPosition: !0,
                                    arrowShape: e.arrowShape,
                                    watchCSS: !0,
                                    contain: !0,
                                    selectedAttraction: .04,
                                    friction: .4
                                },
                                g = Object.assign(u, a);
                            if (!r.hasClass("gallery")) {
                                l >= 0 && (g.initialIndex = l), /PlayStation 5/i.test(c) && r.find(".hide-on-console").closest(".media-carousel__cell, .carousel-cell").remove(), (r.hasClass("slider__controls--swatches") || r.hasClass("slider__controls--thumbnails")) && (g.wrapAround = !1, g.contain = !0), e.addAttributes(r), r.data("initial-index") > 0 && (g.initialIndex = r.data("initial-index"));
                                var h = "".concat(n).concat(s ? ", .game-hero__gallery" : ""),
                                    p = "".concat(i).concat(s ? ", .game-hero__gallery_pagination" : ""),
                                    f = r.closest(h).find(p);
                                if (f.length) {
                                    g.pageDots = !1;
                                    var v = function(e, t) {
                                        f[0].pagination("select", t + 1)
                                    };
                                    f.on("change.dkPagination", function(e, t) {
                                        r.off("change.flickity", v), r.flickity("select", t - 1), r.on("change.flickity", v)
                                    })
                                }
                                r.on("ready.flickity", function() {
                                    r.addClass("flickity-ready");
                                    var e = r.closest(".media-carousel__content").find(".media-carousel__pager");
                                    e.length && e.prepend('\n                                <div class="'.concat(r.attr("class"), '">\n                                    <div class="media-carousel__cell"><!-- --></div>\n                                </div>\n                            '))
                                }), r.flickity(g);
                                var m = r.data("flickity");
                                r.find(".media-carousel__cell .media-carousel__description").length && r.find(".flickity-button").css("top", r.find(".is-selected .media-block").height() / 2), r.on("change.flickity", function(e, t) {
                                    var a = $(".media-block--video .video-js"),
                                        n = $(".embed-video iframe");
                                    g.fullscreen && ($.each(a, function(e, t) {
                                        return videojs($(t).attr("id")).pause()
                                    }), $.each(n, function(e, t) {
                                        return $(t)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                                    })), f.length && f[0].pagination("select", t + 1)
                                });
                                var y = null,
                                    k = null;
                                r.on("dragMove.flickity", function(e, t, a) {
                                    k = m.selectedIndex, y = a.x > 0 ? "prev" : "next"
                                }), r.on("dragEnd.flickity", function() {
                                    m.selectedIndex !== k && e.logCarouselDtmEvent(r, y)
                                });
                                var _ = r.data("carousel-mobile"),
                                    b = r.data("carousel-desktop");
                                (_ || void 0 == _) && w.IS_MOBILE && r.find(e.carouselCellClass).attr("tabindex", -1), (b || void 0 == b) && w.IS_TABLET && r.find(e.carouselCellClass).attr("tabindex", -1), s && m.cells.length < 4 && (r.find(".flickity-button").hide(), r.find(".flickity-page-dots").hide(), !w.IS_MOBILE && m.unbindDrag()), r.find(".flickity-button.previous").attr("tabindex", -1), r.find(".flickity-button.next").attr("tabindex", -1)
                            }
                        }), o("success")) : r("error")
                    })
                }
            }, {
                key: "destroyCarousel",
                value: function(e) {
                    return new Promise(function(t) {
                        e.hasClass("flickity-ready") && e.flickity("destroy").removeClass("flickity-ready"), t()
                    })
                }
            }, {
                key: "getMediaType",
                value: function(e) {
                    var t = (e.hasClass("media-block") ? e : e.find(".media-block")).data() || {},
                        a = t.component;
                    return "video-block" == a || "live-image" == a ? "video" : "image"
                }
            }, {
                key: "addAnalyticsEventHandlers",
                value: function(e) {
                    var t = this;
                    e.find(".next").on("click.carouselNext", function() {
                        return t.logCarouselDtmEvent(e, "next")
                    }), e.find(".previous, .prev").on("click.carouselPrev", function() {
                        return t.logCarouselDtmEvent(e, "prev")
                    })
                }
            }, {
                key: "logCarouselDtmEvent",
                value: function(e, t, a) {
                    var n = a && a.length ? a : e.find(".is-selected"),
                        i = this.getMediaType(n),
                        o = "",
                        r = "",
                        s = "";
                    if ("next" == t || "prev" == t) o = "select carousel ".concat(t), i = "button";
                    else if ("click" == t) {
                        var c = n.hasClass("media-block") ? n : n.find(".media-block");
                        o = "select ".concat(i), r = c.data("src-desktop") || c.data("src"), s = e.find(this.carouselCellClass).index(n)
                    }
                    _gpdc.analytics.event.addGDLEvent("click", o, {
                        moduleName: this.module,
                        elementType: i,
                        assetName: r || L.EMPTY_LABEL,
                        linkUrl: L.EMPTY_LABEL,
                        label: "click" !== t ? t : L.EMPTY_LABEL,
                        userActionFlag: !0,
                        position: s + 1 || "1"
                    }, e), _gpdc.analytics._satelliteTrack("user_engagement")
                }
            }]), e
        }(),
        ke = 9,
        _e = ["a[href]:not([disabled])", 'div[role="button"]', "button:not([disabled])", "textarea:not([disabled])", 'input[type="text"]:not([disabled])', 'input[type="radio"]:not([disabled])', 'input[type="checkbox"]:not([disabled])', "select:not([disabled])", '[data-component="video-block"]'],
        be = [".age-gate:not(.display--hidden)", ".media-lightbox.show"],
        Ce = function() {
            function e(t, a) {
                n(this, e), this.$last = $(document.activeElement), this.$doc = a ? a : _gpdc.elements.$document, this.$target = t, this.$focusable = t.find(_e.join(", ")), this.focusLimit = this.$focusable.length - 1, this.focusIndex = null, this.onKeyDown = this.onKeyDown.bind(this), this.$doc.on("keydown.dkFocusTrap", this.onKeyDown)
            }
            return o(e, [{
                key: "destroy",
                value: function() {
                    this.$doc.off("keydown.dkFocusTrap", this.onKeyDown), this.$last.focus()
                }
            }, {
                key: "autoFocusFirstItem",
                value: function() {
                    this.focusLimit && (this.focusIndex = 0, this.$focusable.eq(this.focusIndex).focus())
                }
            }, {
                key: "onKeyDown",
                value: function(e) {
                    var t = "Tab" === e.key || e.keyCode === ke;
                    !this.isExcluded() && t && (e.preventDefault(), e.shiftKey ? this.focusIndex = null !== this.focusIndex ? this.focusIndex - 1 : this.focusLimit : this.focusIndex = null !== this.focusIndex ? this.focusIndex + 1 : 0, this.focusIndex < 0 ? this.focusIndex = this.focusLimit : this.focusIndex > this.focusLimit && (this.focusIndex = 0), this.$focusable.eq(this.focusIndex).focus())
                }
            }, {
                key: "isExcluded",
                value: function() {
                    return $(be.join(", ")).length
                }
            }]), e
        }(),
        we = {
            mobile: T.IS_MOBILE,
            tablet: T.IS_JUST_TABLET,
            laptop: T.IS_JUST_LAPTOP,
            desktop: T.IS_DESKTOP
        },
        Te = "disabled",
        Ae = {
            cellAlign: "grid",
            accessibility: !1,
            imagesLoaded: !0,
            adaptiveHeight: !1,
            groupCells: !1,
            prevNextButtons: !1,
            pageDots: !1,
            percentPosition: !0,
            watchCSS: !0,
            selectedAttraction: .01,
            friction: .15
        },
        Le = function() {
            function e(t) {
                n(this, e), this.$context = t, _gpdc.Logger.logInitializer("core", "components", "Simple Carousel"), this.initializeSimpleCarousel = this.initializeSimpleCarousel.bind(this)
            }
            return o(e, [{
                key: "logCarouselChange",
                value: function(e, t, a) {
                    _gpdc.analytics.event.addGDLEvent("click", "select carousel ".concat(t), {
                        moduleName: a,
                        label: t,
                        assetName: L.EMPTY_LABEL,
                        elementType: "button",
                        userActionFlag: !0
                    }, e), _gpdc.analytics._satelliteTrack("user_engagement")
                }
            }, {
                key: "initializeSimpleCarousel",
                value: function(e, t) {
                    var a = this,
                        n = navigator || {},
                        i = n.userAgent,
                        o = $(t),
                        r = o.find(".carousel"),
                        s = o.find(".pagination"),
                        c = o.find(".carousel-navigation"),
                        l = c.find(".btn--quick-action.carousel-nav-prev"),
                        d = c.find(".btn--quick-action.carousel-nav-next"),
                        u = o.data("flickity-options") || {},
                        g = o.data("module-name") || "carousel";
                    /PlayStation 5/i.test(i) && r.find(".hide-on-console").closest(".media-carousel__cell, .carousel-cell").remove(), this.handleRTLchange(u, _gpdc.config.textDirection, o);
                    var h = $.extend(Object.assign({}, Ae), u),
                        p = s.data("pages");
                    h.wrapAround = void 0 !== u.wrapAround ? u.wrapAround : !s.length || p > 2, h.forceCenter = Object.keys(we).map(function(e) {
                        return o.hasClass("carousel-center@".concat(e)) ? we[e] : null
                    }).filter(function(e) {
                        return e
                    }), h.wrapAround && r.find(".simple-carousel-cell").each(function(e, t) {
                        $(t).clone(!0, !0).addClass("simple-carousel-clone").appendTo(r)
                    });
                    var f = o.closest('[data-component!=""]').attr("data-component");
                    r.find('a[href!=""]').each(function(e, t) {
                        _gpdc.analytics.commerce.updateInternalLinkHref({}, t, f, "", !0), _gpdc.analytics.commerce.updatePDPRInUrl(t)
                    });
                    var v = r.find(".simple-carousel-cell");
                    h.getGridMarginSize = function() {
                        return (window.innerWidth - s.width()) / 2
                    };
                    var m = function(e, t) {
                            var a = "prev" === t ? l : d;
                            return e && a.hasClass(Te) ? void a.removeClass(Te) : void(!e && !a.hasClass(Te) && a.addClass(Te))
                        },
                        y = function(e) {
                            m(e > 0, "prev"), m(e < p - 1, "next")
                        },
                        k = function(e, t) {
                            t >= p && (t -= p), s && s[0].pagination("select", t + 1), !h.wrapAround && y(t)
                        },
                        _ = function() {
                            var e = 0,
                                t = o.width();
                            v.each(function(a, n) {
                                var i = $(n);
                                i[0].$focusables || (i[0].$focusables = i.find(_e.join(", "))), 0 === e && (e = i.width());
                                var o = i.offset(),
                                    r = o.left,
                                    s = r >= 0 && Math.floor(r + e) <= t,
                                    c = {
                                        tabindex: s ? 0 : -1,
                                        "aria-hidden": !s
                                    };
                                i.attr(c), i[0].$focusables.attr(c)
                            })
                        };
                    r.on("scroll.flickity", _), r.on("change.flickity", k), r.on("dragStart.flickity", function() {
                        return v.css("pointer-events", "none")
                    }), r.on("dragEnd.flickity", function() {
                        return v.css("pointer-events", "all")
                    }), r.flickity(h);
                    var b = r.data("flickity");
                    h.wrapAround || y(b.selectedIndex);
                    var C = null,
                        w = null;
                    r.on("dragMove.flickity", function(e, t, a) {
                        w = b.selectedIndex, C = a.x > 0 ? "prev" : "next"
                    }), r.on("dragEnd.flickity", function() {
                        b.selectedIndex !== w && a.logCarouselChange(r, C, g)
                    }), c && c.find(".btn--quick-action").on("click.dkCarouselNavigation", function(e) {
                        var t = e.currentTarget,
                            n = $(t);
                        if (!n.hasClass(Te)) {
                            var i = n.hasClass("carousel-nav-next") ? "next" : "previous";
                            r.flickity(i);
                            var o = "next" === i ? "next" : "prev";
                            a.logCarouselChange(r, o, g)
                        }
                    }), s.length && s.on("change.dkPagination", function(e, t) {
                        r.off("change.flickity", k), r.flickity("select", t - 1), r.on("change.flickity", k), !h.wrapAround && y(t - 1)
                    })
                }
            }, {
                key: "handleRTLchange",
                value: function(e, t, a) {
                    e.cellAlign && "rtl" === t && ("left" === e.cellAlign || "grid" === e.cellAlign ? (a.addClass("simple-carousel--right"), e.cellAlign = "right") : "right" === e.cellAlign && (e.cellAlign = "left", a.addClass("simple-carousel--left")))
                }
            }, {
                key: "init",
                value: function() {
                    D('[data-carousel-simple="true"]', this.$context).each(this.initializeSimpleCarousel)
                }
            }]), e
        }(),
        Ee = function(e, t, a, n) {
            var i = {
                assetName: e.data("video-id") || e.data("src-desktop") || e.data("src") || L.EMPTY_LABEL,
                position: "1",
                label: L.EMPTY_LABEL,
                moduleName: a,
                elementType: t,
                userActionFlag: !1
            };
            n && (i.linkUrl = n), _gpdc.analytics.event.addGDLEvent("click", "select ".concat(t), i, e), _gpdc.analytics._satelliteTrack("asset_click")
        },
        Ie = "video.media-block__video",
        $e = {
            selector: ".page-banner",
            keyartSelector: ".page-banner__keyart"
        },
        Se = function() {
            function e(t) {
                n(this, e), this.$context = t, this.ageGate = null, this.mediaLightBox = null
            }
            return o(e, [{
                key: "init",
                value: function() {
                    if (!_gpdc.elements.$body.hasClass("no-autoplay")) {
                        var e = D('[data-component="live-image"], [data-component="bg-video"]', this.$context);
                        e.length && (this.ageGate = new ue, this.mediaLightBox = new me, $.each(e, this.processInlineVideo.bind(this)), _gpdc.Logger.logInitializer("core", "components", "Media Block: Inline Video"))
                    }
                }
            }, {
                key: "processInlineVideo",
                value: function(e, t) {
                    var a = this,
                        n = $(t),
                        i = this.getVideoForCurrentDevice(n),
                        o = n.find(".media-block__img");
                    if (i.length && o.length) {
                        var r = n.data("auto-pause-play"),
                            s = n.data("pause-play-toggle"),
                            c = n.data("playback-limit"),
                            l = n.data("post-playback");
                        if (c && !s && this.addVideoPlayEndHandler(n, i, c, l), "image" !== l) {
                            var d = s || "replay" === l ? n.find(".media-block__overlay > .icon") : n;
                            d.on("click.dkInlineVideo", function(e) {
                                e.preventDefault(), e.stopPropagation(), a.onVideoClick(n, s, l)
                            }), this.setupBannerBGVideoOverlay(n, s, l)
                        }
                        i.hasClass("lozad") && !i.hasClass("lazy-loaded") ? i.watch({
                            properties: "attr_class",
                            callback: function(e) {
                                return a.checkIfVideoPlaying(e, n, i, r)
                            }
                        }) : this.checkIfVideoPlaying(null, n, i, r)
                    }
                }
            }, {
                key: "addVideoPlayEndHandler",
                value: function(e, t, a, n) {
                    var i = this,
                        o = {
                            image: {
                                class: "+inline-video--removed",
                                state: "removed"
                            },
                            replay: {
                                class: "+replay-inline-video",
                                state: "replay"
                            }
                        },
                        r = 0;
                    t.on("ended.dkInlineVideo", function(t) {
                        var s = t.currentTarget;
                        if (r++, r === a) {
                            var c = o[n];
                            e.addClass(c.class).data("video-ended", !0), i.onVideoStateChange(e, c.state), _gpdc.Logger.log("Video playback reached set count limit: ".concat(r)), r = 0
                        } else s.play()
                    })
                }
            }, {
                key: "onVideoClick",
                value: function(e, t, a) {
                    var n = this,
                        i = e.find("video:visible").get(0);
                    if (t) {
                        var o = e.hasClass("+inline-video--paused");
                        return o ? i.play() : i.pause(), e[o ? "removeClass" : "addClass"]("+inline-video--paused").data("user-paused", !o),
                            e.find(".media-block__icon--play").attr("aria-pressed", o), e.find(".media-block__icon--pause").attr("aria-pressed", !o), void this.onVideoStateChange(e, o ? "playing" : "paused")
                    }
                    if (e.closest('[data-carousel="true"]').length) return void _gpdc.Logger.log("Returned from inline video click, since it is in carousel");
                    var r = e.data("video-ended");
                    return r ? "replay" === a ? (e.removeClass("+replay-inline-video").data("video-ended", !1), i.currentTime = 0, e.attr("aria-pressed", !1), i.play(), void this.onVideoStateChange(e, "playing")) : void("dam" !== a && "youtube" !== a || this.ageGate.triggerIfNeeded(e).then(function() {
                        n.mediaLightBox.openMediaLightbox("singleMedia", e, null, e.data("lightbox-theme") || "dark").catch(function() {}), Ee(e, "video", "liveimageblock")
                    }).catch(function() {
                        return _gpdc.Logger.log("Age gate failed on Live Image Block.")
                    })) : void 0
                }
            }, {
                key: "checkIfVideoPlaying",
                value: function(e, t, a, n) {
                    var i = this;
                    try {
                        a.on("error.dkInlineVideo", function() {
                            return i.applyFallback(t)
                        }), a.on("loadeddata.dkInlineVideo", function() {
                            var e = a.get(0);
                            e.readyState >= 1 && setTimeout(function() {
                                return e.buffered && e.buffered.length ? (e.buffered.end(0) > 0 || !e.paused || t.hasClass("+inline-video--paused") ? i.setupVideoInView(t, a, n) : i.applyFallback(t), void a.off("loadeddata.dkInlineVideo")) : void i.applyFallback(t)
                            }, U.INLINE_VIDEO_WAIT)
                        })
                    } catch (e) {
                        this.applyFallback(t), a.off("loadeddata.dkInlineVideo"), _gpdc.Logger.log("Inline Video exception while checking if video is playing:", e)
                    }
                    e && setTimeout(function() {
                        return a.unwatch(e.id)
                    }, 10)
                }
            }, {
                key: "applyFallback",
                value: function(e) {
                    e.removeClass("+inline-video").addClass("+inline-video--removed"), this.onVideoStateChange(e, "removed"), e.parent().hasClass("media-carousel__cell") || e.removeClass("+interactive"), e.find("video").remove(), e.find(".media-block__overlay").remove()
                }
            }, {
                key: "setupVideoInView",
                value: function(e, t, a) {
                    if (!_gpdc.elements.$body.hasClass("no-autoplay") && a && window.Waypoint) {
                        new Waypoint.Inview({
                            element: t,
                            enter: function() {
                                e.data("video-ended") || e.data("user-paused") || _gpdc.elements.$body.hasClass("no-autoplay") || (t.get(0).play(), e.removeClass("+inline-video--paused"))
                            },
                            exited: function() {
                                e.data("video-ended") || e.data("user-paused") || (t.get(0).pause(), e.addClass("+inline-video--paused"))
                            }
                        })
                    }
                }
            }, {
                key: "getVideoForCurrentDevice",
                value: function(e) {
                    var t = Ie,
                        a = !!e.hasClass("media-block--bg--v2");
                    t += a ? T.IS_DESKTOP.matches ? "\\@large" : T.IS_TABLET_LG.matches ? "\\@medium" : "" : w.IS_TABLET ? "\\@tablet" : "";
                    var n = e.find(t);
                    return n.length ? n : a ? t !== Ie ? (T.IS_TABLET_LG.matches && (n = e.find("".concat(Ie, "\\@medium"))), n.length ? n : e.find(Ie)) : void 0 : e.find(Ie)
                }
            }, {
                key: "onVideoStateChange",
                value: function(e, t) {
                    e.data("parent-banner") && e.closest($e.selector).attr("data-banner-bg-overlay-state", t)
                }
            }, {
                key: "setupBannerBGVideoOverlay",
                value: function(e, t, a) {
                    var n = this,
                        i = e.closest($e.selector);
                    if ("bg-video" === e.attr("data-component") && i.length) {
                        e.data("parent-banner", !0);
                        var o = $('<button class="banner-bg-overlay +normalized hidden" tabindex="-1"></button>');
                        o.insertAfter(i.find($e.keyartSelector)), o.removeClass("hidden").on("click.pageBanner", function() {
                            return n.onVideoClick(e, t, a)
                        })
                    }
                }
            }]), e
        }(),
        xe = function() {
            function e(t) {
                n(this, e), this.$context = t, this.ageGate = null, this.mediaLightBox = null, this.ytLinkClass = "media-block__youtube-link"
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = '[data-component="video-block"][data-lightbox="true"]',
                        t = D("".concat(e, ":not(.carousel ").concat(e, ")"), this.$context),
                        a = D(".simple-carousel ".concat(e), this.$context),
                        n = t.add(a);
                    return !!n.length && (this.ageGate = new ue, this.mediaLightBox = new me, $.each(n, this.process.bind(this)), void _gpdc.Logger.logInitializer("core", "components", "Media Block: Video"))
                }
            }, {
                key: "process",
                value: function(e, t) {
                    var a = this,
                        n = $(t);
                    n.on("click.dkVideoBlock keydown.dkVideoBlockKeyDown", function(e) {
                        var t = e.key,
                            i = e.type,
                            o = e.target,
                            r = $(o),
                            s = r.hasClass(a.ytLinkClass) || r.closest(".".concat(a.ytLinkClass)).length;
                        "keydown" === i && "Enter" !== t || s || a.ageGate.triggerIfNeeded(n, e).then(function() {
                            a.mediaLightBox.openMediaLightbox("singleMedia", n, null, n.data("lightbox-theme") || "dark").catch(function() {}), Ee(n, "video", "videoblock")
                        }).catch(function() {
                            return _gpdc.Logger.log("Age gate failed on Video Block.")
                        })
                    })
                }
            }]), e
        }(),
        Pe = function() {
            function e(t) {
                n(this, e), this.$context = t, this.ageGate = null, this.mediaLightBox = null
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = D('[data-component="image-block"][data-lightbox]:not([data-carousel="true"] [data-component="image-block"][data-lightbox]), [data-component="cards"] [data-component="image-block"][data-lightbox]', this.$context);
                    return !!e.length && (this.ageGate = new ue, this.mediaLightBox = new me, $.each(e, this.process.bind(this)), void _gpdc.Logger.logInitializer("core", "components", "Media Block: Image"))
                }
            }, {
                key: "process",
                value: function(e, t) {
                    var a = this,
                        n = $(t),
                        i = n.data("lightbox"),
                        o = n.closest("a.simple-carousel-cell").attr("href"),
                        r = n.attr("href"),
                        s = r || o || E,
                        c = G(s);
                    i || n.data("age-gated") || r ? n.attr("tabindex", 0) : n.removeAttr("tabindex"), n.on("click.dkImageBlock keydown.dkImageBlockKeyUp", function(e) {
                        var t = e.type,
                            o = e.key;
                        "keydown" === t && "Enter" !== o || a.ageGate.triggerIfNeeded(n, e).then(function() {
                            return i && a.mediaLightBox.openMediaLightbox("singleMedia", n, null, n.data("lightbox-theme") || "dark").catch(function() {}), i || c ? void Ee(n, "image", "imageblock", c ? s : null) : void n.attr("tabindex", -1)
                        }).catch(function() {
                            return _gpdc.Logger.log("Age gate failed on Image Block.")
                        })
                    })
                }
            }]), e
        }(),
        Me = function(e) {
            var t = D(".media-block.media-block--bg", e);
            t.length && (_gpdc.Logger.logInitializer("core", "components", "Media Block: Background"), t.each(De))
        },
        De = function(e, t) {
            var a = $(t);
            Oe(a), Ne(a)
        },
        Oe = function(e) {
            oe(e, "gradient-theme", null, !0), oe(e, "gradient-theme-tablet", null, !1, !0, !0)
        },
        Ne = function(e) {
            var t = e.data("scroll-effect");
            "parallax" === t && new SimpleParallax(e.find(".media-block__inner")[0], {
                scale: 1.3
            })
        },
        Be = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = new Pe,
                        t = new xe,
                        a = new Se,
                        n = new he;
                    Me(), e.init(), t.init(), a.init(), n.init()
                }
            }]), e
        }(),
        Ge = '.text-block a, .title-block a, .stat-block a, [class*="txt-block-"] a:not(.btn--cta):not(.text-link)',
        Re = ".autogameslist",
        Fe = function() {
            $.each($(Ge), Ve), _gpdc.Logger.logInitializer("core", "components", "Text Block: Tracker")
        },
        Ve = function(e, t) {
            var a = $(t),
                n = a.attr("href") || "",
                i = a.children("span:visible"),
                o = He(i.text() || a.text()),
                r = a.closest(".txt-block-title").length ? "titleblock" : "textblock";
            n = _gpdc.analytics.commerce.updateInternalLinkHref(null, t, r, o, !0), _gpdc.analytics.commerce.updatePDPRInUrl(t), a.closest(Re).length || a.on("click.DKTextBlocks", function() {
                return Ue(a, r, n, o, e + 1)
            })
        },
        Ue = function(e, t, a, n, i) {
            _gpdc.analytics.event.addGDLEvent("click", "select ".concat(t, " link"), {
                label: n,
                position: i,
                elementType: "link",
                userActionFlag: !0,
                moduleName: t,
                assetName: L.EMPTY_LABEL,
                linkUrl: a || L.EMPTY_LABEL
            }, e), _gpdc.analytics._satelliteTrack("user_engagement")
        },
        He = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e ? e.trim().replace(/\s+/g, "-").toLowerCase() : L.EMPTY_LABEL
        },
        ze = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "changeOlStartingPos",
                value: function() {
                    var e = $("[data-ol-order-start]");
                    $.each(e, function(e, t) {
                        var a = $(t).find("ol").eq(0),
                            n = ($(t).data("ol-order-start") || 1) - 1;
                        a.css("counter-reset", "item ".concat(n < -1 ? 0 : n))
                    })
                }
            }, {
                key: "wrapTables",
                value: function() {
                    var e = $(".text-block table, .textblock table, .txt-block-paragraph table");
                    $.each(e, function(e, t) {
                        var a = $(t);
                        a.find("p").each(function(e, t) {
                            var a = $(t);
                            0 === a.html().replace(/\s$|&nbsp;$/g, "").length && a.remove()
                        }), a.wrap('<div class="text-block__table"></div>')
                    })
                }
            }, {
                key: "init",
                value: function() {
                    this.changeOlStartingPos(), this.wrapTables(), Fe(), _gpdc.Logger.logInitializer("core", "components", "Text Block")
                }
            }]), e
        }(),
        je = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "formatLinkLabel",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e ? String(e).trim().replace(/\s+/g, "-").toLowerCase() : L.EMPTY_LABEL
                }
            }, {
                key: "trackClick",
                value: function(e, t, a) {
                    if (e.data(U.DTM_IGNORE_EVENT)) return void e.data(U.DTM_IGNORE_EVENT, !1);
                    var n = e.data("sku") || null,
                        i = t ? e.data("media-block-src") || e.data("video-id") : e.data("analytics-asset"),
                        o = O(e),
                        r = "hp-hero" === o,
                        s = {
                            elementType: "button",
                            assetName: i || L.EMPTY_LABEL,
                            linkUrl: e.attr("href") || L.EMPTY_LABEL,
                            label: e.data("dtm-label"),
                            userActionFlag: !0,
                            position: e.data("dtm-position") || e.data("btn-position")
                        };
                    s.moduleName = r ? "homepage hero banner" : o, n && (s.sku = n);
                    var c = a ? "Purchase Intent" : "select".concat(n ? " purchase" : t ? " video" : "", " button"),
                        l = r ? "select homepage hero banner button" : c,
                        d = r ? "banner_click" : "user_engagement";
                    j(s.linkUrl) && (d = "store_click", s.userActionFlag = !1, l = "select store button"), _gpdc.analytics.event.addRawEvent(e, {
                        eventName: l,
                        eventAction: "click"
                    }, s), _gpdc.analytics._satelliteTrack(d)
                }
            }, {
                key: "getButtonLabelText",
                value: function(e) {
                    var t = e.data("dtm-label-override");
                    return t && w.IS_TABLET ? this.formatLinkLabel(t) : this.formatLinkLabel(e.data("dtm-label"))
                }
            }, {
                key: "addClickHandlerForButtonBlocks",
                value: function() {
                    var e = this,
                        t = $(W.btnLinkSelector);
                    $.each(t, function(t, a) {
                        var n = $(a),
                            i = e.getButtonLabelText(n);
                        if (n.data({
                                "btn-position": t + 1,
                                "dtm-label": i
                            }), !(n.is(W.btnVideoSelector) || n.is(W.btnAgeGateSelector) || n.is(W.btnPSNLogin) || n.is(W.btnLoyalty))) {
                            _gpdc.analytics.commerce.updateInternalLinkHref({}, a, "buttonblock", i, !0), _gpdc.analytics.commerce.updatePDPRInUrl(a);
                            var o = n.attr("href") || "",
                                r = o.indexOf(W.newStoreUrl) > -1 || o.indexOf(W.pdcDirectUrl) > -1;
                            n.on("click.DKButtonBlocks", function(t) {
                                return r && "_blank" !== n.attr("target") ? void e.trackClick(n, !1, r) : void e.trackClick(n, !1, r)
                            }), ce(n)
                        }
                    })
                }
            }, {
                key: "addClickHandlerForWishlistBatarangBtn",
                value: function() {
                    var e = $('button[data-qa="wishlistToggle"][data-track-click*=":addToWishlist"]');
                    e.length && $.each(e, function(e, t) {
                        var a = $(t);
                        a.data({
                            "btn-position": e + 1,
                            "dtm-label": "Add To Wishlist"
                        }), a.on("click.pdcWishlist", function() {
                            var e = a.data("telemetry-meta") || {},
                                t = e.itemId;
                            if (t) {
                                var n = digitalData.product.find(function(e) {
                                        return e.productInfo.productID === t
                                    }),
                                    i = n ? n.productInfo : null;
                                if (i) {
                                    var o = {
                                        quantity: 1,
                                        productName: i.productName,
                                        currencyCode: i.currency,
                                        sku: t
                                    };
                                    _gpdc.analytics.event.logCartAdd(a, o, "addtowishlist")
                                }
                            }
                        })
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    this.addClickHandlerForButtonBlocks(), setTimeout(function() {
                        return e.addClickHandlerForWishlistBatarangBtn()
                    }, 700), _gpdc.Logger.logInitializer("core", "components", "Button Block: Tracker")
                }
            }]), e
        }(),
        We = "webcheckout-curtain",
        Ke = function() {
            function e() {
                n(this, e), this.WebCheckoutConstants = z, this.clientIdAttr = b.PREVIEW.test(location.href || "") ? "data-preview-cid" : b.WWWGLOBAL.test(location.href || "") ? "data-wwwglobal-cid" : "data-cid", this.$webCheckout = null, this.$webCheckoutWrapper = null, this.webCheckoutClientId = null, this.arkhamSessionAPIUrl = "", this.displayClass = w.IS_MOBILE_PORTRAIT ? "fadeInUpBig" : "slideInRight", this.hideClass = "".concat(w.IS_MOBILE_PORTRAIT ? "fadeOutUpBig" : "slideOutRight", " display--hidden")
            }
            return o(e, [{
                key: "appendQuery",
                value: function(e, t, a) {
                    return "".concat(e).concat(e.indexOf("?") > -1 ? "&" : "?").concat(t, "=").concat(a)
                }
            }, {
                key: "toggleWebCheckout",
                value: function(e) {
                    var t = this,
                        a = 80;
                    e ? ee(e, a, "dark", We).then(function() {
                        t.$webCheckoutWrapper.removeClass(t.hideClass).addClass(t.displayClass), t.toggleCurtainClickHandler("on")
                    }) : ee(e, a, "dark", We).then(function() {
                        t.$webCheckoutWrapper.removeClass(t.displayClass).addClass(t.hideClass), t.toggleCurtainClickHandler("off")
                    })
                }
            }, {
                key: "toggleCurtainClickHandler",
                value: function(e) {
                    var t = this;
                    $("#gdk__content .curtain")[e]("click.dkWebCheckout", function() {
                        t.toggleWebCheckout(t.$webCheckoutWrapper.hasClass("display--hidden"))
                    })
                }
            }, {
                key: "attachWebCheckoutiFrame",
                value: function(e, t) {
                    var a = this;
                    return new Promise(function(n, i) {
                        var o = window._gpdc.config || {},
                            r = o.productFormattedLocale,
                            s = "".concat(a.WebCheckoutConstants.endpoint, "/buynow/").concat(e);
                        if (a.$webCheckoutWrapper = $("#gdk__content .webcheckout__wrapper"), !window._gpdc) return void i("window._gpdc is not defined");
                        var c = _gpdc.analytics.commerce.appendCIDs(s) || "",
                            l = c.match(/emcid=([^&]+)/i) || "",
                            d = c.match(/smcid=([^&]+)/i) || "";
                        l && (s = a.appendQuery(s, "emcid", l[1])), d && (s = a.appendQuery(s, "smcid", d[1])), s = a.appendQuery(s, "privacy-policy", "exempt"), s = a.appendQuery(s, "language", r || "en-US"), _gpdc.user.isLoggedIn && (s = a.appendQuery(s, "age", _gpdc.user.age || "18")), s = a.appendQuery(s, "clientId", a.webCheckoutClientId), a.$webCheckout = a.$webCheckoutWrapper.find("iframe"), a.$webCheckout.attr("src") !== s && (a.$webCheckoutWrapper.addClass(a.WebCheckoutConstants.loadingClass), a.$webCheckout.attr({
                            src: "".concat(s),
                            "data-sku-id": e,
                            "data-uuid": t
                        })), n()
                    })
                }
            }, {
                key: "doPasswordVerification",
                value: function() {
                    this.arkhamSessionAPIUrl || (this.arkhamSessionAPIUrl = this.WebCheckoutConstants.arkhamAPIHost + this.WebCheckoutConstants.arkhamAPIPath.replace("CURRENT_PAGE_URL", encodeURIComponent(window.location.href))), window.location.href = this.arkhamSessionAPIUrl
                }
            }, {
                key: "onWindowMessage",
                value: function(e) {
                    var t = e.originalEvent,
                        a = (P(t.data) || {}).action;
                    return a ? void(a === this.WebCheckoutConstants.loginAction ? (_gpdc.Logger.log("Web Checkout - action to Login: ", a), this.userState.save(this.$webCheckout.data(U.COMPONENT_INSTANCE_ID_ATTR)), window._gpdc.config.doSignIn()) : a === this.WebCheckoutConstants.pswrdVerifAction ? (_gpdc.Logger.log("Web Checkout - action to Password Verification: ", a), this.userState.save(this.$webCheckout.data(U.COMPONENT_INSTANCE_ID_ATTR)), this.doPasswordVerification()) : this.WebCheckoutConstants.closeActions.includes(a) ? (this.toggleWebCheckout(!1), _gpdc.Logger.log("Web Checkout - action to close iFrame: ", a)) : a === this.WebCheckoutConstants.loadedAction ? (this.$webCheckoutWrapper.removeClass(this.WebCheckoutConstants.loadingClass), _gpdc.Logger.log("Web Checkout - action to remove iFrame loader: ", a)) : _gpdc.Logger.log("Web Checkout - unhandled event action: ", a)) : void _gpdc.Logger.log("Web Checkout - response does not contain valid/expected data object")
                }
            }, {
                key: "displayFailSafe",
                value: function(e) {
                    var t = this.$webCheckoutWrapper.data("country-failsafe-text"),
                        a = $('<div class="text-block failsafe-wrap"><p><a href="">'.concat(t, "</a></p></div>"));
                    if (t) {
                        var n = window.location.href;
                        "publish" === _gpdc.config.siteRunMode && (n = n.replace(_gpdc.config.locale, (_gpdc.user.locale || "").toLowerCase())), a.find("a").attr("href", n), a.insertAfter(e.closest(".btn-block")), ae(e.parent())
                    }
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = $("[data-sku]"),
                        a = _gpdc.elements.$body.data("store-disabled");
                    if (a || !t || !t.length) return !1;
                    var n = new je,
                        i = _gpdc.user.isLoggedIn && (_gpdc.user.legalCountry || "").toLowerCase() !== window._gpdc.config.countryCode.toLowerCase();
                    this.userState = new q, te("#webcheckout__wrapper-template").then(function(a) {
                        e.$webCheckoutWrapper = $("#gdk__content .webcheckout__wrapper"), e.webCheckoutClientId = e.$webCheckoutWrapper.attr(e.clientIdAttr), $.each(t, function(t, a) {
                            var o = $(a);
                            return i ? void e.displayFailSafe(o) : void o.on("click.dkWebCheckout", function(t) {
                                t.stopPropagation(), t.stopImmediatePropagation();
                                var a = $(t.currentTarget);
                                e.attachWebCheckoutiFrame(a.data("sku"), a.data(U.COMPONENT_INSTANCE_ID_ATTR)).then(function() {
                                    return e.toggleWebCheckout(!0)
                                }).catch(function(e) {
                                    return _gpdc.Logger.log("WebCheckout failure: ", e)
                                }), a.is(':not([class^="cta__"])') && n.trackClick(a)
                            })
                        }), _gpdc.elements.$window.on("message.dkWebCheckout", e.onWindowMessage.bind(e))
                    }).catch(function() {
                        return _gpdc.Logger.warn("Unable to find webcheckout HTML Template!!")
                    }), _gpdc.Logger.logInitializer("core", "components", "Button Block: Web Checkout")
                }
            }]), e
        }(),
        Ye = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = $("[data-pxp-campaign]");
                    if (!e || !e.length) return !1;
                    var t = new q;
                    $.each(e, function(e, a) {
                        var n = $(a),
                            i = n.data("pxp-action") || "";
                        if (i.includes("manualForceToComplete")) {
                            var o = "PXP_TASK_".concat(e);
                            i = "".concat(i, ",").concat(o), n.attr({
                                "data-pxp-action": i,
                                id: o
                            })
                        }
                        n.on("click.psexpClick", function() {
                            return t.save(n.data(U.COMPONENT_INSTANCE_ID_ATTR))
                        })
                    }), _gpdc.Logger.logInitializer("core", "components", "Button BLock: Experience PlayStation")
                }
            }]), e
        }(),
        qe = function() {
            function e() {
                n(this, e), this.$buttons = $(W.btnVideoSelector), this.buttonBlockTracker = new je, this.mediaLightBox = new me, this.ageGate = new ue
            }
            return o(e, [{
                key: "onClick",
                value: function(e) {
                    e.preventDefault();
                    var t = $(e.currentTarget),
                        a = t.data(),
                        n = a.videoDam,
                        i = a.videoYoutube,
                        o = a.lightboxTheme,
                        r = void 0 === o ? "dark" : o;
                    t.data("component", "video-block"), n ? t.data("src", n) : t.data("video-id", i), this.ageGate.isGated(t) || (this.mediaLightBox.openMediaLightbox("singleMedia", t, null, r), this.buttonBlockTracker.trackClick(t, !0))
                }
            }, {
                key: "addEventListeners",
                value: function(e) {
                    e.on("click.dkVideoButtonClick", this.onClick.bind(this))
                }
            }, {
                key: "init",
                value: function() {
                    this.$buttons.length && (_gpdc.Logger.logInitializer("core", "components", "Button Block: Video"), this.addEventListeners(this.$buttons))
                }
            }]), e
        }(),
        Ze = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        Xe = k(function(e, t) {
            ! function(e, a) {
                a(t)
            }(Ze, function(e) {
                function t(e, t) {
                    var a = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        t && (n = n.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        })), a.push.apply(a, n)
                    }
                    return a
                }

                function a(e) {
                    for (var a = 1; a < arguments.length; a++) {
                        var n = null != arguments[a] ? arguments[a] : {};
                        a % 2 ? t(Object(n), !0).forEach(function(t) {
                            s(e, t, n[t])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        })
                    }
                    return e
                }

                function n(e) {
                    "@babel/helpers - typeof";
                    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function o(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function r(e, t, a) {
                    return t && o(e.prototype, t), a && o(e, a), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }

                function s(e, t, a) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = a, e
                }

                function c() {
                    return c = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = arguments[t];
                            for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                        }
                        return e
                    }, c.apply(this, arguments)
                }

                function l(e, t) {
                    return d(e) || u(e, t) || g(e, t) || p()
                }

                function d(e) {
                    if (Array.isArray(e)) return e
                }

                function u(e, t) {
                    var a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != a) {
                        var n, i, o = [],
                            r = !0,
                            s = !1;
                        try {
                            for (a = a.call(e); !(r = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); r = !0);
                        } catch (e) {
                            s = !0, i = e
                        } finally {
                            try {
                                r || null == a.return || a.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                        return o
                    }
                }

                function g(e, t) {
                    if (e) {
                        if ("string" == typeof e) return h(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? h(e, t) : void 0
                    }
                }

                function h(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
                    return n
                }

                function p() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function f(e) {
                    return Array.isArray(e)
                }

                function v(e) {
                    return "boolean" == typeof e
                }
                var m = function() {
                        function e() {
                            i(this, e), this.isLocaleFirstSegment = !1, this.regexIndicator = "$/", this.dataLayerName = "digitalData", this.channel = "web", this.homePathname = "/", this.debug = !1
                        }
                        return r(e, [{
                            key: "setConfiguration",
                            value: function(e) {
                                c(this, e)
                            }
                        }, {
                            key: "setLocaleIsFirstSegment",
                            value: function(e) {
                                this.isLocaleFirstSegment = e
                            }
                        }, {
                            key: "setDebugStatus",
                            value: function(e) {
                                this.debug = e
                            }
                        }]), e
                    }(),
                    y = new m,
                    k = function(e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    _ = function() {
                        function e() {
                            i(this, e)
                        }
                        return r(e, [{
                            key: "logger",
                            value: function(e, t) {
                                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    n = window.console[e];
                                t && a ? n(t) : t && !a ? n("GlobalDataLayer ".concat(e, ": ").concat(t)) : n()
                            }
                        }, {
                            key: "warn",
                            value: function(e) {
                                this.logger("warn", e)
                            }
                        }, {
                            key: "error",
                            value: function(e) {
                                this.logger("error", e)
                            }
                        }, {
                            key: "info",
                            value: function(e) {
                                this.logger("info", e)
                            }
                        }, {
                            key: "log",
                            value: function(e) {
                                this.logger("log", e)
                            }
                        }, {
                            key: "debug",
                            value: function(e, t) {
                                this.logger("groupCollapsed", "🕵️‍♀️ Global Data Layer: ".concat(e), !0), this.logger("log", t, !0), this.logger("groupEnd")
                            }
                        }]), e
                    }(),
                    b = new _,
                    C = function() {
                        var e = window.location.pathname;
                        return y.isLocaleFirstSegment && (e = "/" === e.split("").pop() ? e : "".concat(e, "/"), e = e.replace(/^.+?[\/]/, "/")), e !== y.homePathname ? e : "/home"
                    },
                    w = function(e) {
                        var t = null,
                            a = !1,
                            n = C(),
                            i = n.replace(/\/?$/, "/");
                        return Object.keys(e).some(function(n) {
                            var o = !1;
                            return 0 === n.indexOf(y.regexIndicator) && i.match(n.replace(y.regexIndicator, "")) ? (o = !0, a = !0) : n.includes("*") && i.match(new RegExp("^" + n.replace(/\//g, "\\/").replace("*", "(.*)"))) ? o = !0 : i === n.replace(/\/?$/, "/") && (o = !0), o && (t = {
                                key: n,
                                match: e[n],
                                regex: a
                            }), o
                        }), t
                    },
                    T = function(e, t) {
                        y.debug && b.debug(e, t)
                    },
                    A = {
                        create: function(e) {
                            var t, a = {
                                pageInfo: {
                                    pageName: this.getPagename(e),
                                    emcid: null === e || void 0 === e ? void 0 : e.emcid,
                                    category: {
                                        primaryCategory: this.getPrimaryCategory(e)
                                    },
                                    sysEnv: this.getDeviceType(),
                                    destinationUrl: location.href,
                                    version: null !== (t = null === e || void 0 === e ? void 0 : e.app.env) && void 0 !== t ? t : "",
                                    sellableItems: "boolean" == typeof(null === e || void 0 === e ? void 0 : e.hasSellableItems) ? e.hasSellableItems : "empty"
                                }
                            };
                            return e && T("Page", a), a
                        },
                        getDeviceType: function() {
                            var e, t = "web",
                                a = null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.toLowerCase();
                            return window.matchMedia("(max-width: 767px)").matches ? t = "mobile" : window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches ? t = "tablet" : a && /playstation 4/i.test(a) ? t = "ps4" : a && /playstation 5/i.test(a) && (t = "ps5"), t
                        },
                        getPrimaryCategory: function(e) {
                            if (!e) return "";
                            var t = C(),
                                a = "other";
                            if (e.primaryCategory) a = e.primaryCategory;
                            else if (e.isErrorPage) a = this.getPrimaryCategoryFromCallback(e);
                            else if ("/home" === t) a = "home";
                            else if (e.pageTypes) {
                                var n = w(e.pageTypes);
                                if (n) {
                                    var i = n.match;
                                    a = i
                                }
                            }
                            return a
                        },
                        getPrimaryCategoryFromCallback: function(e) {
                            var t = "other";
                            if ("function" != typeof e.isErrorPage) b.warn('The "isErrorPage" parameter should be a function, '.concat(n(e.isErrorPage), " given."));
                            else {
                                var a = e.isErrorPage();
                                "boolean" != typeof a ? b.warn('The "isErrorPage" function should return a boolean, '.concat(a, " was given.")) : a ? t = "error" : (delete e.isErrorPage, t = this.getPrimaryCategory(e))
                            }
                            return t
                        },
                        getPagename: function(e) {
                            if (!e) return "";
                            var t = C().toLowerCase().replace(/^\/|\/$/g, "");
                            if (e.pageNames) {
                                var a = w(e.pageNames);
                                if (a) {
                                    var n = a.key,
                                        i = a.match,
                                        o = a.regex,
                                        r = (o ? n.replace(y.regexIndicator, "") : n.replace("/*", "")).replace(/^\/|\/$/g, "");
                                    t = t.replace(o ? new RegExp(r) : r, i)
                                }
                            }
                            var s = t.split("/").filter(function(e) {
                                return "" !== e
                            });
                            return s.unshift(e.app.name), s.unshift(y.channel), s.map(k).join(":")
                        }
                    },
                    L = {
                        create: function(e) {
                            var t = e ? "".concat(y.channel, "-").concat(e.app.name, ":").concat(e.app.version, ":empty") : "";
                            return e && T("Page instance", t), t
                        }
                    },
                    E = function(e) {
                        var t, a, n, i, o;
                        return {
                            subscriptionType: null !== (t = e.type) && void 0 !== t ? t : null,
                            subscriptionStatus: null !== (a = e.status) && void 0 !== a ? a : null,
                            subscriptionTier: null !== (n = e.tier) && void 0 !== n ? n : null,
                            subscriptionDuration: null !== (i = e.duration) && void 0 !== i ? i : null,
                            subscriptionFlag: null !== (o = e.flag) && void 0 !== o ? o : null
                        }
                    },
                    I = {
                        create: function(e) {
                            var t, a, n, i, o, r, s, c, l, d, u, g, h, p = {
                                visitorType: (null === (t = null === e || void 0 === e ? void 0 : e.user) || void 0 === t ? void 0 : t.id) ? "signed_in" : "guest",
                                plusUser: null,
                                plusSubscriptionState: null,
                                hashedRepeatId: null === (a = null === e || void 0 === e ? void 0 : e.user) || void 0 === a ? void 0 : a.hashedRepeatId
                            };
                            (null === e || void 0 === e ? void 0 : e.user) && (p = this.setPlusSubscriptionState(p, e));
                            var f = null !== (o = null === (i = null === (n = null === e || void 0 === e ? void 0 : e.user) || void 0 === n ? void 0 : n.privacy) || void 0 === i ? void 0 : i.ws2Settings) && void 0 !== o ? o : {},
                                v = f.personalizedads,
                                m = f.personalizedrecommendations,
                                y = f.personalizedmedia,
                                k = f.personalizedmaster,
                                _ = {
                                    profile: {
                                        privacyInfo: {
                                            caPrivacyOptOut: null !== (c = null === (s = null === (r = null === e || void 0 === e ? void 0 : e.user) || void 0 === r ? void 0 : r.privacy) || void 0 === s ? void 0 : s.caPrivacyOptOut) && void 0 !== c && c,
                                            ageOptOut: null !== (u = null === (d = null === (l = null === e || void 0 === e ? void 0 : e.user) || void 0 === l ? void 0 : l.privacy) || void 0 === d ? void 0 : d.ageOptOut) && void 0 !== u ? u : null,
                                            ws2Settings: {
                                                personalizedAds: v ? "".concat(v, " personalized advertising") : null,
                                                personalizedRecommendations: m ? "".concat(m, " purchase recommendations") : null,
                                                personalizedMedia: y ? "".concat(y, " personalized media") : null,
                                                personalizedMaster: k ? "".concat(k, " basic personalization") : null
                                            }
                                        },
                                        profileInfo: {
                                            profileID: null !== (h = null === (g = null === e || void 0 === e ? void 0 : e.user) || void 0 === g ? void 0 : g.id) && void 0 !== h ? h : null,
                                            language: e ? this.getLocale(e) : "",
                                            attributes: p
                                        }
                                    }
                                };
                            return e && T("User", _), _
                        },
                        setPlusSubscriptionState: function(e, t) {
                            var a, n, i, o;
                            if ("boolean" == typeof t.user.plus) return e.plusUser = t.user.plus ? "plususer" : "nonplususer", e;
                            var r = [];
                            return (null === (a = t.user.subscriptions) || void 0 === a ? void 0 : a.plus) && r.push(E(t.user.subscriptions.plus)), (null === (n = t.user.subscriptions) || void 0 === n ? void 0 : n.loyalty) && r.push(E(t.user.subscriptions.loyalty)), (null === (i = t.user.subscriptions) || void 0 === i ? void 0 : i.gtaPlus) && r.push(E(t.user.subscriptions.gtaPlus)), (null === (o = t.user.subscriptions) || void 0 === o ? void 0 : o.ubisoftPlus) && r.push(E(t.user.subscriptions.ubisoftPlus)), e.plusSubscriptionState = r.length ? r : null, e
                        },
                        getLocale: function(e) {
                            var t = "";
                            return e.locale && e.locale.includes("-") ? (t = e.locale, t.split("-").reverse().join("-")) : (b.warn(e.locale ? "The given locale code ".concat(e.locale, ' is not a valid "language-country" code.') : "The locale code is a mandatory parameter."), "invalid-locale")
                        }
                    },
                    $ = function() {
                        return {
                            page: A.create(),
                            user: I.create(),
                            pageInstanceID: L.create(),
                            event: [],
                            search: [],
                            component: [],
                            product: [],
                            commerceEvent: null,
                            cartInstance: null,
                            tournamentEvent: null,
                            tournamentInfo: null,
                            productImpression: {
                                item: []
                            }
                        }
                    },
                    S = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                reset: !0
                            },
                            t = y.dataLayerName;
                        return e.reset && (window[t] = $()), window[t]
                    },
                    x = function(e, t) {
                        var a = S({
                            reset: !1
                        });
                        a.event.push(t), T(e, t)
                    },
                    P = ["button", "image", "video", "link", "form", "popup"],
                    M = ["click", "impression", "search", "invalid-action"],
                    D = function() {
                        return Math.round((new Date).getTime() / 1e3)
                    },
                    O = function() {
                        function e(t, a) {
                            i(this, e);
                            var n, o, r, s, c, l, d, u;
                            t = this.transform(t), x("".concat(a, " event"), {
                                eventInfo: {
                                    eventName: t.name,
                                    timeStamp: D(),
                                    eventAction: null !== (n = t.eventAction) && void 0 !== n ? n : null
                                },
                                attributes: {
                                    assetName: null !== (o = t.assetName) && void 0 !== o ? o : null,
                                    linkURL: null !== (r = t.linkURL) && void 0 !== r ? r : null,
                                    label: null !== (s = t.label) && void 0 !== s ? s : null,
                                    userActionFlag: null !== (c = t.userActionFlag) && void 0 !== c && c,
                                    moduleName: null !== (l = t.moduleName) && void 0 !== l ? l : "invalid-module",
                                    elementType: null !== (d = t.elementType) && void 0 !== d ? d : "invalid-element",
                                    position: null !== (u = t.position) && void 0 !== u ? u : null
                                }
                            })
                        }
                        return r(e, [{
                            key: "transform",
                            value: function(e) {
                                return e.userActionFlag && !v(e.userActionFlag) && (b.warn('the "userActionFlag" value needs to be a boolean, '.concat(n(e.userActionFlag), " given.")), e.userActionFlag = !1), e.moduleName || b.warn('the "moduleName" property is required.'), e.elementType ? P.includes(e.elementType) || (b.warn('the "elementType" property is invalid.'), delete e.elementType) : b.warn('the "elementType" property is required.'), e.eventAction && !M.includes(e.eventAction) && (b.warn('the "eventAction" property is invalid.'), e.eventAction = "invalid-action"), e
                            }
                        }]), e
                    }(),
                    N = {
                        create: function(e, t) {
                            new O(a(a({}, t), {}, {
                                name: e,
                                eventAction: "click"
                            }), "Click")
                        }
                    },
                    B = {
                        create: function(e, t) {
                            new O(a(a({}, t), {}, {
                                name: e,
                                eventAction: "impression"
                            }), "Impression")
                        }
                    },
                    G = r(function e(t, n, o) {
                        i(this, e);
                        var r = S({
                            reset: !1
                        });
                        n || (b.warn("".concat(t, " - name is required.")), n = "invalid-name");
                        var s = a(a({}, o), {}, {
                            componentInfo: a(a({}, o.componentInfo), {}, {
                                componentName: n.toLowerCase()
                            })
                        });
                        r.component.push(s), T(t, s)
                    }),
                    R = "Product component",
                    F = function(e) {
                        return e.ageRating && !f(e.ageRating) && (b.warn("".concat(R, " - ageRating should be an array of strings, ").concat(n(e.ageRating), " given.")), delete e.ageRating), e
                    },
                    V = {
                        create: function(e) {
                            var t, a, n, i, o, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            r = F(r), new G(R, e, {
                                componentInfo: {
                                    componentID: null !== (t = r.sku) && void 0 !== t ? t : null
                                },
                                category: {
                                    primaryCategory: "product"
                                },
                                attributes: {
                                    ageRating: r.ageRating ? r.ageRating.join(",") : null,
                                    developer: null !== (a = r.developer) && void 0 !== a ? a : null,
                                    publisher: null !== (n = r.publisher) && void 0 !== n ? n : null,
                                    releaseDate: null !== (i = r.releaseDate) && void 0 !== i ? i : null,
                                    genre: null !== (o = r.genre) && void 0 !== o ? o : null
                                }
                            })
                        }
                    },
                    U = function(e, t) {
                        e.commerceEvent = {
                            eventInfo: {
                                eventName: t
                            }
                        }
                    },
                    H = function(e) {
                        return e.genres && Array.isArray(e.genres) && (e.genres = e.genres.join(",")), e
                    },
                    z = ["conceptId", "id", "skuIds"],
                    j = function(e, t) {
                        var a, n, i, o, r, s, c, l, d, u, g, h, p = !0;
                        if (z.forEach(function(e) {
                                t[e] && (p = !1)
                            }), p) return b.warn("Product View event not fired as ".concat(z.join(", "), " parameters are all missing.")), !1;
                        t = H(t);
                        var f = {
                            productInfo: {
                                productID: null !== (a = t.id) && void 0 !== a ? a : null,
                                conceptID: null !== (n = t.conceptId) && void 0 !== n ? n : null,
                                productName: null !== (i = t.name) && void 0 !== i ? i : null,
                                productIDproductName: "".concat(t.id, ":").concat(null !== (o = t.name) && void 0 !== o ? o : null),
                                productType: null !== (r = t.type) && void 0 !== r ? r : null,
                                sku: null !== (s = t.skuIds) && void 0 !== s ? s : null,
                                productGenre: null !== (c = t.genres) && void 0 !== c ? c : null,
                                productReleaseDate: null !== (l = t.releaseDate) && void 0 !== l ? l : null,
                                productPrice: null !== (u = null === (d = t.price) || void 0 === d ? void 0 : d.toString()) && void 0 !== u ? u : null,
                                currency: null !== (g = t.priceCurrency) && void 0 !== g ? g : null,
                                merchandisingCategory: null !== (h = t.merchandisingCategory) && void 0 !== h ? h : null
                            }
                        };
                        return e.product.push(f), f
                    },
                    W = {
                        init: function(e) {
                            e = Array.isArray(e) ? e : [e];
                            var t = S({
                                    reset: !1
                                }),
                                a = [];
                            e.forEach(function(e) {
                                var n = j(t, e);
                                n && (a.push(n), T("Product view", n))
                            }), a.length && U(t, "product_view")
                        }
                    },
                    K = "Form component",
                    Y = function(e) {
                        return e
                    },
                    q = {
                        create: function(e) {
                            var t, a, n, i, o, r, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            s = Y(s), new G(K, e, {
                                componentInfo: {
                                    componentID: null !== (t = s.id) && void 0 !== t ? t : null
                                },
                                category: {
                                    primaryCategory: "form"
                                },
                                attributes: {
                                    formStep: null !== (a = s.formStep) && void 0 !== a ? a : null,
                                    description: null !== (n = s.description) && void 0 !== n ? n : null,
                                    formStepFlag: null !== (i = s.formStepFlag) && void 0 !== i ? i : null,
                                    isUserFlowStart: null !== (o = s.isUserFlowStart) && void 0 !== o ? o : null,
                                    isUserFlowComplete: null !== (r = s.isUserFlowComplete) && void 0 !== r ? r : null
                                }
                            })
                        }
                    },
                    Z = "Media component",
                    X = ["auto", "manual"],
                    J = ["live", "vod"],
                    Q = ["short", "long"],
                    ee = function(e) {
                        return e.componentType && !X.includes(e.componentType) && (b.warn("".concat(Z, ' - "componentType" can only be one of the following values: ').concat(X.join(", "), ".")), e.componentType = "invalid-component-type"), e.subCategory1 && !J.includes(e.subCategory1) && (b.warn("".concat(Z, ' - "subCategory1" can only be one of the following values: ').concat(J.join(", "), ".")), e.subCategory1 = "invalid-sub-category"), e.format && !Q.includes(e.format) && (b.warn("".concat(Z, ' - "format" can only be one of the following values: ').concat(Q.join(", "), ".")), e.format = "invalid-format"), e
                    },
                    te = {
                        create: function(e) {
                            var t, a, n, i, o, r, s, c, l, d, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            u = ee(u), new G(Z, e, {
                                componentInfo: {
                                    componentID: null !== (t = u.id) && void 0 !== t ? t : null
                                },
                                category: {
                                    primaryCategory: "video"
                                },
                                attributes: {
                                    subCategory1: null !== (a = u.subCategory1) && void 0 !== a ? a : null,
                                    subCategory2: null !== (n = u.subCategory2) && void 0 !== n ? n : null,
                                    componentType: null !== (i = u.componentType) && void 0 !== i ? i : null,
                                    componentURL: null !== (o = u.componentURL) && void 0 !== o ? o : null,
                                    format: null !== (r = u.format) && void 0 !== r ? r : null,
                                    network: null !== (s = u.network) && void 0 !== s ? s : null,
                                    tmsChannelID: null !== (c = u.tmsChannelID) && void 0 !== c ? c : null,
                                    tmsAiringID: null !== (l = u.tmsAiringID) && void 0 !== l ? l : null,
                                    entryPoint: null !== (d = u.entryPoint) && void 0 !== d ? d : null
                                }
                            })
                        }
                    },
                    ae = {
                        create: function(e, t) {
                            new O(a(a({}, t), {}, {
                                name: e
                            }), "Generic")
                        }
                    },
                    ne = {
                        create: function(e) {
                            x("Raw event", e)
                        }
                    },
                    ie = "Generic component",
                    oe = {
                        create: function(e, t) {
                            var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                o = null !== (n = i.id) && void 0 !== n ? n : null;
                            o && delete i.id, t || (b.warn("".concat(ie, " - the category argument is required.")), t = "invalid-category"), new G(ie, e, {
                                componentInfo: {
                                    componentID: o
                                },
                                category: {
                                    primaryCategory: t
                                },
                                attributes: a({}, i)
                            })
                        }
                    },
                    re = ["name", "currency"],
                    se = ["cart_add", "in_cart", "add_pre_order", "add_to_library", "wishlist_add", "wishlist_remove", "subscribe", "buy", "download", "upgrade"],
                    ce = function(e, t) {
                        return t ? (isNaN(t) ? (b.warn('The "'.concat(e, '" parameter should be a number, ').concat(n(t), " given.")), t = 0) : t = parseFloat(t.toFixed(2)), t) : t
                    },
                    le = function(e, t, a) {
                        re.forEach(function(e) {
                            a[e] || (b.warn("The ".concat(e, " parameter is required.")), a[e] = "invalid-".concat(e))
                        });
                        var i = a.name,
                            o = a.sku,
                            r = a.currency,
                            s = a.category,
                            c = a.productDiscount,
                            l = a.productDiscountType,
                            d = a.price;
                        Number.isInteger(parseInt(t)) || (b.warn('The "quantity" parameter should be a number, '.concat(n(t), " given.")), t = 0), d = ce("price", d);
                        var u = {
                            quantity: "string" == typeof t ? parseInt(t) : t,
                            price: {
                                basePrice: null !== d && void 0 !== d ? d : null,
                                totalBasePrice: d ? d * t : null
                            },
                            productInfo: {
                                productID: "".concat(i, ":").concat(o),
                                productName: i,
                                sku: o,
                                merchandisingCategory: s
                            }
                        };
                        c && (u.productDiscount = ce("productDiscount", c)), l && (u.productDiscountType = l);
                        var g = {
                            price: {
                                currency: r.toLowerCase()
                            },
                            item: u
                        };
                        return e.cartInstance = g, g
                    },
                    de = {
                        init: function(e, t) {
                            var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "cart_add";
                            if (!se.includes(a)) return void b.warn("The event name: ".concat(a, " is not allowed. Allowed event names: ").concat(se.join(", "), "."));
                            var n = S({
                                    reset: !1
                                }),
                                i = le(n, e, t);
                            U(n, "".concat(a, "_").concat(Date.now())), T(a, i)
                        }
                    },
                    ue = ["system-error", "user-error"],
                    ge = ["errorSeverity", "errorCode", "errorDescription"],
                    he = function() {
                        function e(t, a) {
                            i(this, e);
                            var n, o, r, s = this.transform(t, a),
                                c = l(s, 2);
                            t = c[0], a = c[1];
                            var d = S({
                                    reset: !1
                                }),
                                u = {
                                    errorInfo: {
                                        errorName: t
                                    },
                                    category: {
                                        primaryCategory: "error"
                                    },
                                    attributes: {
                                        errorAPIURL: null !== (n = a.errorAPIURL) && void 0 !== n ? n : null,
                                        errorLocation: null !== (o = a.errorLocation) && void 0 !== o ? o : null,
                                        errorType: null !== (r = a.errorType) && void 0 !== r ? r : null,
                                        errorSeverity: a.errorSeverity,
                                        errorCode: a.errorCode,
                                        errorDescription: a.errorDescription
                                    }
                                };
                            T("Error component", u), d.component.push(u)
                        }
                        return r(e, [{
                            key: "transform",
                            value: function(e, t) {
                                return e || (b.warn("ErrorComponent - name is required."), e = "invalid-error-name"), t || (t = {}), ge.forEach(function(e) {
                                    t[e] || (b.warn("ErrorComponent - ".concat(e, " is required.")), t[e] = "invalid-".concat(e))
                                }), t.errorType && !ue.includes(t.errorType) && (b.warn('"errorType" can only be one of the following values: '.concat(ue.join(", "), ".")), t.errorType = "invalid-error-type"), [e, t]
                            }
                        }]), e
                    }(),
                    pe = function(e) {
                        return e.term ? "number" != typeof e.count ? (b.warn('Search event not fired as "count" parameter is missing or not a number.'), !1) : !(!e.type || !["manual", "auto"].includes(e.type)) || (b.warn('Search event not fired as "type" parameter is missing or invalid.'), !1) : (b.warn('Search event not fired as "term" parameter is missing.'), !1)
                    },
                    fe = {
                        track: function(e) {
                            if (!pe(e)) return !1;
                            var t = S({
                                    reset: !1
                                }),
                                a = {
                                    onsiteSearchTerm: e.term,
                                    onsiteSearchResults: e.count,
                                    onsiteSearchType: e.type
                                };
                            e.categories && Object.keys(e.categories).forEach(function(t) {
                                var n = t.charAt(0).toUpperCase() + t.slice(1);
                                a["onsiteSearchResults".concat(n)] = e.categories[t]
                            }), t.search.push(a), window._satellite.track("search"), T("Search", a)
                        }
                    },
                    ve = ["conceptId", "name", "skuId"],
                    me = function(e, t) {
                        var a, n, i, o, r, s, c, l, d, u, g, h, p, f = !0;
                        if (ve.forEach(function(e) {
                                t[e] && (f = !1)
                            }), f) return b.warn("Product Impression event not fired as ".concat(ve.join(", "), " parameters are all missing.")), !1;
                        var v = {
                            quantity: null !== (a = t.quantity) && void 0 !== a ? a : 1,
                            productDiscount: null !== (i = null === (n = t.discount) || void 0 === n ? void 0 : n.toString()) && void 0 !== i ? i : null,
                            discountType: null !== (o = t.discountType) && void 0 !== o ? o : null,
                            currency: null !== (r = t.priceCurrency) && void 0 !== r ? r : null,
                            productPrice: null !== (c = null === (s = t.price) || void 0 === s ? void 0 : s.toString()) && void 0 !== c ? c : null,
                            productInfo: {
                                conceptID: null !== (l = t.conceptId) && void 0 !== l ? l : null,
                                productID: "".concat(null !== (d = t.name) && void 0 !== d ? d : null, ":").concat(null !== (u = t.skuId) && void 0 !== u ? u : null),
                                productName: null !== (g = t.name) && void 0 !== g ? g : null,
                                sku: null !== (h = t.skuId) && void 0 !== h ? h : null,
                                merchandisingCategory: null !== (p = t.merchandisingCategory) && void 0 !== p ? p : null
                            }
                        };
                        return e.productImpression.item.push(v), v
                    },
                    ye = {
                        init: function(e) {
                            e = Array.isArray(e) ? e : [e];
                            var t = S({
                                reset: !1
                            });
                            e.forEach(function(e) {
                                var a = me(t, e);
                                a && T("Product Impression", a)
                            })
                        }
                    },
                    ke = function(e, t) {
                        e.tournamentEvent = {
                            eventInfo: {
                                eventName: t
                            }
                        }
                    },
                    _e = ["id"],
                    be = ["tournament_registration", "tournament_withdrawal", "tournament_selected"],
                    Ce = function(e, t) {
                        _e.forEach(function(e) {
                            t[e] || (b.warn("The ".concat(e, " parameter is required.")), t[e] = "invalid-".concat(e))
                        });
                        var a = t.id,
                            n = t.joinableStatus,
                            i = t.maxPlayers,
                            o = t.matchStatus,
                            r = t.prizePool,
                            s = t.prizeCurrency,
                            c = t.entryCondition,
                            l = t.userOccurrenceStatus,
                            d = {
                                tournamentId: a,
                                tournamentJoinableStatus: n,
                                tournamentMaxPlayers: i,
                                tournamentMatchStatus: o,
                                tournamentPrizePool: r,
                                tournamentPrizeCurrency: s,
                                tournamentEntryCondition: c,
                                tournamentUserOccurrenceStatus: l
                            };
                        return e.tournamentInfo = {
                            attributes: d
                        }, {
                            attributes: d
                        }
                    },
                    we = {
                        init: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tournament_selected";
                            if (!be.includes(t)) return void b.warn("The event name: ".concat(t, " is not allowed. Allowed event names: ").concat(be.join(", "), "."));
                            var a = S({
                                    reset: !1
                                }),
                                n = Ce(a, e);
                            ke(a, "".concat(t, "_").concat(Date.now())), T(t, n)
                        }
                    },
                    Te = {
                        pageview: function(e) {
                            var t, a = S();
                            e.locale && 1 === location.pathname.indexOf(e.locale) ? y.setLocaleIsFirstSegment(!0) : y.setLocaleIsFirstSegment(!1), y.setDebugStatus(null !== (t = e.debug) && void 0 !== t && t), a.page = A.create(e), a.user = I.create(e), a.pageInstanceID = L.create(e)
                        },
                        use: function(e) {
                            return "object" !== n(e) ? void b.warn("The given plugin is not a valid object.") : "function" != typeof e.install ? void b.warn("The given plugin doesn't implement an install method.") : void e.install(Te)
                        },
                        config: function(e) {
                            y.setConfiguration(e)
                        },
                        event: {
                            click: N.create,
                            impression: B.create,
                            generic: ae.create,
                            raw: ne.create
                        },
                        search: fe.track,
                        component: {
                            product: V.create,
                            form: q.create,
                            media: te.create,
                            generic: oe.create
                        },
                        ecommerce: {
                            product: {
                                view: W.init,
                                impression: ye.init
                            },
                            cart: {
                                add: de.init
                            }
                        },
                        tournament: {
                            track: we.init
                        },
                        error: function(e, t) {
                            new he(e, t)
                        }
                    };
                e.default = Te, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            })
        });
    y(Xe);
    var Je, Qe, et, tt = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "loyalty_page";
            return _gpdc.analytics._satelliteTrack(e)
        },
        at = function(e, t, a, n, i, o, r, s) {
            var c = o ? "close ".concat(a) : s ? "select sign in" : "select ".concat(t);
            _gpdc.analytics.event.addGDLEvent("click", c, {
                moduleName: a,
                elementType: t,
                assetName: L.EMPTY_LABEL,
                linkUrl: i || L.EMPTY_LABEL,
                label: n,
                userActionFlag: !0,
                position: 1
            }, e), tt(r || "loyalty_engagement")
        },
        nt = function() {
            var e = $(W.btnPSNLogin);
            if (e.length) return _gpdc.Logger.logInitializer("core", "components", "Button Block: PSN Login"), window._gpdc && _gpdc.user && _gpdc.user.isArkhamLoggedIn ? void e.remove() : void e.on("click.dkPSNLoginClick", it).removeClass("display--hidden")
        },
        it = function(e) {
            e && e.preventDefault();
            var t = $(e.currentTarget);
            at(t, t.hasClass("text-link") ? "link" : "button", t.data("module-name") || O(t), "Log in to PSN", null, !1, "user_engagement", !0), _gpdc.config.doSignIn()
        },
        ot = function() {
            $.each($(W.btnLinkV2Selector), rt), _gpdc.Logger.logInitializer("core", "components", "Button V2: Tracker")
        },
        rt = function(e, t) {
            var a = $(t);
            a.is(W.btnPSNLogin) || a.is(W.btnLoyalty) || (a.on("click.dkButtonV2Tracker", st), ce(a))
        },
        st = function(e) {
            var t = e.currentTarget,
                a = $(t),
                n = a.data("track-js");
            if (!n) return _gpdc.analytics.commerce.updateInternalLinkHref({}, t, "buttonblock", "", !0), void _gpdc.analytics.commerce.updatePDPRInUrl(t);
            _gpdc.analytics.commerce.updateInternalLinkHref({}, t, n.attributes.moduleName, n.attributes.label, !0), _gpdc.analytics.commerce.updatePDPRInUrl(t);
            var i = a.attr("href") || "",
                o = "_blank" === a.attr("target");
            !o && e.preventDefault(), ct(a, n, i), o || (window.location.href = i)
        },
        ct = function(e, t, a) {
            if (e.data(U.DTM_IGNORE_EVENT)) return void e.data(U.DTM_IGNORE_EVENT, !1);
            var n = "user_engagement";
            t.attributes.label = String(t.attributes.label).trim().replace(/\s+/g, "-").toLowerCase(), j(a) ? (n = "store_click", t.attributes.userActionFlag = !1, t.eventInfo.eventName = "select store button") : t.attributes.userActionFlag = !0, _gpdc.analytics.event.addRawEvent(e, t.eventInfo, t.attributes), _gpdc.analytics._satelliteTrack(n)
        },
        lt = function() {
            function e() {
                n(this, e), this.ageGate = new ue
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = new Ke,
                        t = new Ye,
                        a = new je,
                        n = new qe;
                    n.init(), e.init(), t.init(), a.init(), nt(), ot(), this.aemPatch(), this.applyAgeGate()
                }
            }, {
                key: "applyAgeGate",
                value: function() {
                    var e = this,
                        t = $("".concat(W.btnBlockGated, ", ").concat(W.btnBlockGatedForce));
                    t.on("click.dkBtnBlock", function(t) {
                        var a = $(t.currentTarget);
                        e.ageGate.isGated(a) && e.ageGate.triggerIfNeeded(a, t).then(function() {
                            a[0].click()
                        }).catch(function() {
                            return _gpdc.Logger.log("Age gate failed on Button.")
                        })
                    })
                }
            }, {
                key: "aemPatch",
                value: function() {
                    var e = $(W.btnBlock);
                    (e || e.length) && $.each(e, function(e, t) {
                        var a = $(t),
                            n = a.parent();
                        if (n.hasClass("buttonblock")) {
                            var i = a.attr("class").split(/\s+/);
                            $.each(i, function(e, t) {
                                t.includes("--auto") && n.addClass(t)
                            })
                        }
                    })
                }
            }]), e
        }(),
        dt = o(function e() {
            n(this, e), se(null, ["mobile", "tablet", "desktop"], "width"), _gpdc.Logger.logInitializer("core", "components", "Blocks")
        }),
        ut = function() {
            function e() {
                n(this, e), this.init()
            }
            return o(e, [{
                key: "removeNavFooter",
                value: function() {
                    $("#sony-bar").remove(), $("#shared-nav-root").remove(), $("#jetstream-tertiary-nav").remove(), $(".gdk .site-footer, .gdk .site-footer-v2").remove()
                }
            }, {
                key: "addStickyBehavior",
                value: function(e, t) {
                    window.sharedNav && window.sharedNav.makeSticky(t.length ? t[0] : e[0])
                }
            }, {
                key: "addTerNavAnchorsActiveLogic",
                value: function(e) {
                    var t = e.find("a.tertiary-tab__link");
                    $.each(t, function(t, a) {
                        $(a).on("click.pdcTertiaryNav", function(t) {
                            var a = t.currentTarget;
                            e.find("a.tertiary-tab__link--active").removeClass("tertiary-tab__link--active"), $(a).addClass("tertiary-tab__link--active"), _gpdc.analytics._satelliteTrack("user_engagement")
                        })
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = "hide" === sessionStorage.getItem(C.navFooter);
                    if (e) return void this.removeNavFooter();
                    var t = $("#shared-nav-container"),
                        a = $("#jetstream-tertiary-nav");
                    t && t.length && (this.addStickyBehavior(t, a), this.addTerNavAnchorsActiveLogic(a)), _gpdc.Logger.logInitializer("core", "components", "Jetstream Tertiary Nav")
                }
            }]), e
        }(),
        gt = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "addWaypointAnimation",
                value: function(e, t) {
                    if (w.IS_LANDSCAPE) {
                        var a = e.data("tablet-up-animation-class");
                        if (!a) return;
                        var n = new Waypoint({
                            element: e.get(0),
                            handler: function() {
                                t.addClass(a), n.destroy()
                            },
                            offset: "90%"
                        })
                    } else {
                        var i = e.data("mobile-animation-class");
                        if (!i) return;
                        $.each(t, function(e, t) {
                            var a = new Waypoint({
                                element: t,
                                handler: function() {
                                    $(t).addClass(i), a.destroy()
                                },
                                offset: "90%"
                            })
                        })
                    }
                }
            }, {
                key: "applyAnimations",
                value: function(e, t, a) {
                    var n = e.data("grid-animation-".concat(a)) || "";
                    if (n) {
                        if ("tablet-up" === a) {
                            var i = e.data("grid-animation-delay-step") || .2,
                                o = e.data("grid-animation-sequence") || "";
                            $.each(t, function(e, a) {
                                var n = "disabled" === o ? 0 : "reversed" === o ? t.length - e - 1 : e;
                                $(a).css("--animation-delay", "".concat(n * i, "s"))
                            })
                        }
                        e.data("".concat(a, "-animation-class"), n)
                    }
                }
            }, {
                key: "processContentGrids",
                value: function(e) {
                    var t = this;
                    $.each(e, function(e, a) {
                        var n = $(a),
                            i = n.find('div[class^="box"]');
                        t.applyAnimations(n, i, "mobile"), t.applyAnimations(n, i, "tablet-up"), t.addWaypointAnimation(n, i)
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = $(".content-grid");
                    e.length && this.processContentGrids(e), _gpdc.Logger.logInitializer("core", "components", "Content Grid")
                }
            }]), e
        }(),
        ht = function() {
            function e() {
                n(this, e), this.formMessage = "form__message", this.input = "input", this.inputItem = "".concat(this.input, "__item"), this.inputError = "".concat(this.input, "__error"), window._gpdc.components.form = this, this.init()
            }
            return o(e, [{
                key: "addInputItemHandlers",
                value: function(e) {
                    var t = this,
                        a = "input[type=text],input[type=number],input[type=email],input[type=password],select",
                        n = this.inputItem,
                        i = ".".concat(n),
                        o = "".concat(n, "--focused"),
                        r = "".concat(n, "--filled");
                    e.find(a).each(function(e, a) {
                        var n = $(a);
                        "" !== n.val() && n.closest(".".concat(t.inputItem)).addClass(r)
                    }).on("focus.dkInput", function(e) {
                        var t = e.currentTarget;
                        $(t).closest(i).addClass(o)
                    }).on("blur.dkInput", function(e) {
                        var t = e.currentTarget,
                            a = $(t),
                            n = a.closest(i),
                            s = a.val();
                        "" === s ? n.removeClass(r) : n.addClass(r), n.removeClass(o)
                    })
                }
            }, {
                key: "addFormValidationHandlers",
                value: function(e) {
                    var t = ".".concat(this.input),
                        a = ".".concat(this.inputError),
                        n = {
                            errorsContainer: function(e) {
                                var n = e.$element.closest(t);
                                if (n.length) {
                                    var i = n.find(a);
                                    return i.empty(), i
                                }
                                return e
                            }
                        },
                        i = this.inputItem,
                        o = ".".concat(this.inputItem),
                        r = "".concat(i, "--success"),
                        s = "".concat(i, "--error"),
                        c = "[class$='server-validation-error']";
                    e.parsley().destroy(), e.parsley(n).on("field:error", function(e) {
                        e.$element.closest(t).find(c).remove(), e.$element.closest(o).removeClass(r).addClass(s), e.$element.attr("aria-invalid", "true")
                    }).on("field:success", function(e) {
                        e.$element.closest(o).removeClass(s).addClass(r), e.$element.attr("aria-invalid", "false")
                    }).on("form:submit", function(t) {
                        var a = new je;
                        return a.trackClick(e.find("[type=submit]")), !0
                    })
                }
            }, {
                key: "addTextAreaLetterCounter",
                value: function(e) {
                    var t = ".".concat(this.input);
                    e.find("textarea").each(function(e, a) {
                        var n = $(a),
                            i = n.closest(t).find(".current");
                        n.on("keyup.dkInput", function() {
                            i.text(n.val().length)
                        })
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = $('[data-component="form"]');
                    t && t.length && ($.each(t, function(t, a) {
                        var n = $(a),
                            i = n.data("bound") || !1;
                        i || (e.addInputItemHandlers(n), e.addFormValidationHandlers(n), e.addTextAreaLetterCounter(n), n.data("bound", !0))
                    }), _gpdc.Logger.logInitializer("core", "components", "Forms"))
                }
            }]), e
        }(),
        pt = function() {
            function e() {
                n(this, e), _gpdc.Logger.logInitializer("core", "components", "Search Bar"), this.bind()
            }
            return o(e, [{
                key: "bind",
                value: function() {
                    this._onFormSubmit = this._onFormSubmit.bind(this), this._onInputKeyUp = this._onInputKeyUp.bind(this), this._onInputFocus = this._onInputFocus.bind(this), this._onInputBlur = this._onInputBlur.bind(this), this._onSubmitClick = this._onSubmitClick.bind(this), this._onClearClick = this._onClearClick.bind(this)
                }
            }, {
                key: "init",
                value: function() {
                    var e = "dkSearchBar",
                        t = $(".search-bar__input");
                    this.$form = $('[name="gdk-search-box"]'), this.$form.on("submit.".concat(e), this._onFormSubmit), t.on("keyup.".concat(e), this._onInputKeyUp).trigger("keyup.".concat(e)), t.on("focus.".concat(e), this._onInputFocus), t.on("blur.".concat(e), this._onInputBlur), t.data("bar-keyup-event-name", "keyup.".concat(e)), $(".search-bar__submit").on("click.".concat(e), this._onSubmitClick), $(".search-bar__clear").on("click.".concat(e), this._onClearClick)
                }
            }, {
                key: "_onInputFocus",
                value: function(e) {
                    this.$form.addClass("border--active")
                }
            }, {
                key: "_onInputBlur",
                value: function(e) {
                    this.$form.removeClass("border--active")
                }
            }, {
                key: "_onFormSubmit",
                value: function(e) {
                    e.preventDefault();
                    var t = this.$form.attr("action");
                    if (t && location.pathname !== t) {
                        var a = this.$form.serializeArray(),
                            n = a.find(function(e) {
                                return "q" === e.name
                            });
                        if (n && n.value) {
                            var i = a.filter(function(e) {
                                return !!e.value && (e.value = window.htmlEncode(e.value), !0)
                            });
                            location.href = "".concat(t, "?").concat($.param(i))
                        }
                    }
                }
            }, {
                key: "_onInputKeyUp",
                value: function(e) {
                    var t = e.currentTarget.value,
                        a = $(e.currentTarget),
                        n = a[0],
                        i = "search-bar__clear--active";
                    n.$clear || (n.$clear = a.parent().find(".search-bar__clear")), t && !n.$clear.hasClass(i) ? n.$clear.addClass(i) : !t && n.$clear.hasClass(i) && n.$clear.removeClass(i)
                }
            }, {
                key: "_onSubmitClick",
                value: function(e) {
                    e.preventDefault(), $(e.currentTarget).closest("form").trigger("submit")
                }
            }, {
                key: "_onClearClick",
                value: function(e) {
                    e.preventDefault();
                    var t = $(e.currentTarget).removeClass("search-bar__clear--active").prevAll(".search-bar__input");
                    t[0].cleared = !0, t.val(""), t.trigger("keydown")
                }
            }]), e
        }(),
        ft = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = $('[data-component="cookie-launcher"]');
                    return !(!e || !e.length) && (e.on("click.dkCookie", function() {
                        window.evidon && window.evidon.notice.showOptions()
                    }), void _gpdc.Logger.logInitializer("core", "components", "Cookie Launcher"))
                }
            }]), e
        }(),
        vt = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "init",
                value: function() {
                    _gpdc.Logger.logInitializer("core", "components", "A11y"), _gpdc.elements.$document.on("keydown.dkA11yEnter", 'div[role="button"]', function(e) {
                        "Enter" === e.key ? $(e.currentTarget).trigger("click") : " " === e.key && (e.preventDefault(), $(e.currentTarget).trigger("click"))
                    })
                }
            }]), e
        }(),
        mt = function() {
            function e() {
                n(this, e), this.videoEqualsQueryParamRegex = new RegExp("video=")
            }
            return o(e, [{
                key: "autoloadVideo",
                value: function(e) {
                    var t = new URLSearchParams(e) || {},
                        a = t.get("video"),
                        n = $(".video-autoload-template"),
                        i = n.find('[data-auto-load-query="' + a + '"]');
                    if (i && i.length) {
                        var o = new _gpdc.components.VideoButton;
                        o.addEventListeners(n.find(W.btnVideoSelector)), i.click()
                    }
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = window.location && window.location.search || "";
                    t && this.videoEqualsQueryParamRegex.test(t) && (te("#video-autoload__template").then(function(a) {
                        e.autoloadVideo(t)
                    }).catch(function(e) {
                        _gpdc.Logger.warn("Unable to find VideoAutoload HTML Template!!")
                    }), _gpdc.Logger.logInitializer("core", "components", "Video Autoload"))
                }
            }]), e
        }(),
        yt = function() {
            function e() {
                n(this, e), this.ALERT_SHOW_DELAY = 1e3, this.ALERT_COOKIE_PREFIX = "pdcAlert", this.ALERT_COOKIE_TIMEOUT_OFFSET = 6048e5, this.ALERT_PINNED_CLASS = "pinned-top", this.fadeInAlertsWrapper = !1, this.$els = {
                    sonyBar: $("#sony-bar:not(.dk-nav__wrapper)"),
                    tertiary: $("#jetstream-tertiary-nav .tertiary-container")
                }
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = $('[data-component="alerts"]');
                    if (t.length) {
                        this.hashAnchor = new R;
                        var a = t.eq(0),
                            n = a.find(".alerts__item");
                        a.css("--alert-top", "".concat(this.hashAnchor.calculateNavigationOffset() + this.getSonyBarOffset(), "px")), a.css("--alert-top-pinned", this.$els.tertiary.length || !A.IS_JETSTREAM_MOBILE ? "64px" : "60px"), $.each(n, function(t, n) {
                            return e.processAlerts(a, $(n), t)
                        }), this.fadeInAlertsWrapper && setTimeout(function() {
                            a.addClass("in"), $.each(n, function(t, a) {
                                return e.trackAlertEvent($(a), "impression", "alert impression", "image")
                            })
                        }, this.ALERT_SHOW_DELAY), _gpdc.Logger.logInitializer("core", "components", "Alerts")
                    }
                }
            }, {
                key: "processAlerts",
                value: function(e, t, a) {
                    return this.shouldDisplayAlert(t) ? (this.fadeInAlertsWrapper = !0, t.data("analytics-position", a + 1), this.pinAlertToTop(e), void this.addListeners(e, t)) : void t.remove()
                }
            }, {
                key: "shouldDisplayAlert",
                value: function(e) {
                    var t = S(this.ALERT_COOKIE_PREFIX + (e.data("alert-id") || ""));
                    if (t) return !1;
                    var a = new Date((new Date).toUTCString()).getTime(),
                        n = e.data("start-time"),
                        i = e.data("end-time");
                    return n && i && n < a && i > a
                }
            }, {
                key: "addListeners",
                value: function(e, t) {
                    var a = this,
                        n = t.find(".alerts__item__collapsable"),
                        i = t.find(".alerts__item__link"),
                        o = t.find(".alerts__item__close");
                    _gpdc.elements.$window.scroll(function() {
                        return a.pinAlertToTop(e)
                    }), A.IS_LAPTOP || n.on("click.dkAlertsExpand", function(e) {
                        var t = e.currentTarget,
                            n = $(t),
                            i = n.parent();
                        i.toggleClass("collapsed"), i.hasClass("collapsed") || a.trackAlertEvent(n, "click", "expand alert", "image")
                    }), o.on("click.dkAlertsClose", function(e) {
                        var t = e.currentTarget,
                            n = $(t);
                        a.persistAlertDismissal(n), a.trackAlertEvent(n, "click", "close alert", "button")
                    }), i.length && i.on("click.dkAlertsLink", function(e) {
                        e.preventDefault();
                        var t = $(e.currentTarget),
                            n = t.attr("href");
                        G(n) && (a.persistAlertDismissal(t), window.open(n, "_blank")), a.trackAlertEvent(t, "click", "select alert link", "link")
                    })
                }
            }, {
                key: "pinAlertToTop",
                value: function(e) {
                    e[_gpdc.elements.$window.scrollTop() > 0 ? "addClass" : "removeClass"](this.ALERT_PINNED_CLASS)
                }
            }, {
                key: "persistAlertDismissal",
                value: function(e) {
                    var t = e.closest(".alerts__item"),
                        a = t.data("alert-id") || "",
                        n = t.data("end-time") + this.ALERT_COOKIE_TIMEOUT_OFFSET,
                        i = Math.floor((n - (new Date).getTime()) / 6e4);
                    t.remove(), a && I(this.ALERT_COOKIE_PREFIX + a, "dismissed", i)
                }
            }, {
                key: "getSonyBarOffset",
                value: function() {
                    return this.$els.sonyBar.length && !A.IS_JETSTREAM_MOBILE ? this.$els.sonyBar.outerHeight() : 0
                }
            }, {
                key: "trackAlertEvent",
                value: function(e, t, a, n) {
                    _gpdc.analytics.event.addGDLEvent(t, a, {
                        userActionFlag: "click" === t,
                        moduleName: "alert",
                        label: e.data("analytics-label") || L.EMPTY_LABEL,
                        position: e.data("analytics-position"),
                        linkUrl: L.EMPTY_LABEL,
                        assetName: L.EMPTY_LABEL,
                        elementType: n
                    }, e), _gpdc.analytics._satelliteTrack("user_engagement")
                }
            }]), e
        }(),
        kt = function() {
            function e() {
                n(this, e), this.activeSlideId = 0, this.rotateInterval = null, this.keepRotation = !1, this.isRotationPaused = !1, this.$slider = null, this.$controlsWrapper = null, this.$controls = null, this.$slides = null, this.isAutoRotationEnabled = null, this.displayHidden = "display--hidden", this.autoRotateEventDataAttr = "auto-rotate-event", this.bannersTracked = [], this.activeClass = "is-selected"
            }
            return o(e, [{
                key: "init",
                value: function(e) {
                    var t = this,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e && e.length ? (this.options = a, this.$slider = e, this.$controlsWrapper = this.$slider.find(this.options.controlsWrapperSelector || ".slider__controls"), this.$controls = this.$slider.find(".slider__control, .slider-custom-slide"), this.$activeControl = this.$controls.filter(".".concat(this.activeClass)), this.$slides = this.$slider.find(".slider__slide"), this.componentType = this.$slider.data("component"), this.isAutoRotationEnabled = this.$slider.data("auto-rotate"), this.addEventHandlers(), this.setControlsHeight(), this.$slider.attr("aria-live", "polite"), this.isAutoRotationEnabled && (this.keepRotation = !0, this.configureAutoRotate()), this.options.impressionCallback && setTimeout(function() {
                        t.options.impressionCallback(t.$slides.eq(0), 1, t.bannersTracked)
                    }, 200), this.options.onInit && "function" == typeof this.options.onInit && this.options.onInit(this.$activeControl), void _gpdc.Logger.logInitializer("core", "components", "Slider")) : void _gpdc.Logger.log("Invalid params, Slider not initialized!")
                }
            }, {
                key: "addEventHandlers",
                value: function() {
                    var e = this;
                    this.$controlsWrapper.on("change.flickity", function() {
                        return e.updateSlide(null, !1)
                    }), this.$controls.on("click.dkSliderControlClick keydown.dkSliderControlKeyDown", function(t) {
                        var a = t.key,
                            n = t.type,
                            i = t.currentTarget;
                        "keydown" === n && "Enter" !== a || e.updateSlide($(i), !0)
                    }), this.$controls.hover(function(t) {
                        var a = t.currentTarget;
                        w.IS_TABLET && e.$controls.not($(a)).find("figure").addClass("not-hovered")
                    }, function() {
                        w.IS_TABLET && e.$controls.find("figure").removeClass("not-hovered")
                    })
                }
            }, {
                key: "setControlsHeight",
                value: function() {
                    var e = this;
                    w.IS_DESKTOP || (this.$slider.css("--controls-wrapper-height", this.$controlsWrapper.outerHeight()), _gpdc.elements.$window.on("resize.slider", function() {
                        return e.$slider.css("--controls-wrapper-height", e.$controlsWrapper.outerHeight())
                    }))
                }
            }, {
                key: "configureAutoRotate",
                value: function() {
                    var e = this;
                    this.sliderWaypoint = new Waypoint.Inview({
                        element: this.$slider.get(0),
                        enter: function() {
                            e.isRotationPaused = !1
                        },
                        exited: function() {
                            e.isRotationPaused = !0
                        }
                    }), setTimeout(function() {
                        e.keepRotation && (e.isRotationPaused || (e.$slider.data(e.autoRotateEventDataAttr, !0), e.triggerUpdateSlide()), e.rotateInterval = setInterval(function() {
                            e.isRotationPaused || (e.$slider.data(e.autoRotateEventDataAttr, !0), e.triggerUpdateSlide())
                        }, e.$slider.data("other-slides-display-time") || 3e3))
                    }, this.$slider.data("first-slide-display-time") || 6e3)
                }
            }, {
                key: "triggerUpdateSlide",
                value: function() {
                    this.activeSlideId++, this.activeSlideId > this.$controls.length && (this.activeSlideId = 1), this.$controlsWrapper.hasClass("flickity-enabled") ? this.$controlsWrapper.flickity("select", this.activeSlideId - 1, !0, !1) : this.$controls.filter('[data-control-id="'.concat(this.activeSlideId, '"]')).click()
                }
            }, {
                key: "updateSlide",
                value: function(e, t) {
                    this.keepRotation = this.clearAutoRotatation(), e && e.length || (e = this.$controls.filter(".".concat(this.activeClass)));
                    var a = e.data("control-id"),
                        n = this.$slider.find("[data-slide='".concat(a, "'], [data-slide-id='").concat(a, "']"));
                    if (w.IS_MOBILE && this.$controls.closest(".slider__controls.carousel").flickity("selectCell", a - 1), this.activeSlideId = a, this.$controls.removeClass(this.activeClass), e.addClass(this.activeClass), this.$slides.not(".".concat(this.displayHidden)).addClass(this.displayHidden), n.removeClass(this.displayHidden), n.find('[data-carousel="true"]').flickity("resize"), this.$slider.hasClass("product-picker") && "spin-set" !== this.componentType) {
                        var i = "div[class*=slider__control--]";
                        this.$controls.find(i).removeClass(this.activeClass), e.find(i).addClass(this.activeClass), "function" == typeof this.options.clickCallback && this.options.clickCallback(e)
                    }
                    "hp-hero" == this.componentType && this.options.impressionCallback(n, a, this.bannersTracked, 0), "featured-hardware" !== this.componentType && "spin-set" !== this.componentType || this.options.clickCallback(n, e), "featured-hardware-v2" === this.componentType && this.options.clickCallback(n, e, t), "image-comparison-slider-gallery" === this.componentType && this.options.clickCallback(n, a, this.bannersTracked)
                }
            }, {
                key: "clearAutoRotatation",
                value: function() {
                    var e = this.$slider.data(this.autoRotateEventDataAttr);
                    return e ? (this.$slider.data(this.autoRotateEventDataAttr, !1), !0) : !(!this.isAutoRotationEnabled || e) && (clearInterval(this.rotateInterval), !1)
                }
            }]), e
        }(),
        _t = function() {
            function e() {
                n(this, e), _gpdc.Logger.logInitializer("core", "components", "Pagination")
            }
            return o(e, [{
                key: "api",
                value: function(e) {
                    var t = $(this),
                        a = t.data("pages");
                    if ("select" === e) {
                        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                        var r = i[0];
                        if (t[0].$blips.removeClass("pagination__blip--active"), t.find('[data-page="'.concat(r, '"]')).addClass("pagination__blip--active"), r >= 9 && t[0].pages > 9 && r < t[0].pages - 1) {
                            var s = Math.abs(9 - r);
                            t[0].$slider.css("transform", "translateX(calc(((var(--blip-width) * ".concat(s + 1, ") + (var(--blip-gap) * ").concat(s + 1, ")) * -1))"))
                        } else r < 9 ? t[0].$slider.css("transform", "translateX(0)") : r === a && t[0].$slider.css("transform", "translateX(calc(((var(--blip-width) * ".concat(r - 10, ") + (var(--blip-gap) * ").concat(r - 10, ")) * -1))"))
                    }
                }
            }, {
                key: "initPaginator",
                value: function(e, t) {
                    var a = $(t),
                        n = a.data("pages");
                    a[0].pagination = this.api.bind(t), a[0].pages = n, a[0].$blips = a.find(".pagination__blip"), a[0].$slider = a.find(".pagination__slider"), a[0].$blips.on("keydown.dkPagination", function(e) {
                        "Enter" === e.key && $(e.currentTarget).trigger("click")
                    }), a[0].$blips.on("click.dkPagination", function(e) {
                        var t = $(e.currentTarget);
                        if (t.attr("href"));
                        else {
                            e.preventDefault(), a[0].$blips.removeClass("pagination__blip--active"), t.addClass("pagination__blip--active");
                            var i = t.data(),
                                o = i.page;
                            if (a.trigger("change.dkPagination", [o, e]), o >= 9 && n > 9 && o < n - 1) {
                                var r = Math.abs(9 - o);
                                a[0].$slider.css("transform", "translateX(calc(((var(--blip-width) * ".concat(r + 1, ") + (var(--blip-gap) * ").concat(r + 1, ")) * -1))"))
                            } else o < 9 ? a[0].$slider.css("transform", "translateX(0)") : o === n && a[0].$slider.css("transform", "translateX(calc(((var(--blip-width) * ".concat(o - 10, ") + (var(--blip-gap) * ").concat(o - 10, ")) * -1))"))
                        }
                    }), a[0].$blips.filter(".pagination__blip--active").trigger("click")
                }
            }, {
                key: "init",
                value: function() {
                    var e = $('[data-component="pagination"]');
                    e.length && e.each(this.initPaginator.bind(this))
                }
            }]), e
        }(),
        bt = function() {
            function e() {
                n(this, e), this.hashAnchor = new R
            }
            return o(e, [{
                key: "addListeners",
                value: function(e) {
                    var t = $('div[data-component="pills"]');
                    t.each(function(t, a) {
                        var n = $(a);
                        n.find(".pills__item").on("click.dkPillsClick", function(e) {
                            var t = $(e.currentTarget);
                            t.hasClass("pills__item--active") || (n.trigger("change.dkPills", [t, e]), t.attr("href") || (t.addClass("pills__item--active").attr("aria-selected", "true").trigger("blur").siblings().removeClass("pills__item--active").attr("aria-selected", "false"), re(n, t)))
                        }), n.data("sticky") && (n.css("--sticky-top", "".concat(e, "px")), n.addClass("pills--sticky"))
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = this.hashAnchor.calculateNavigationOffset();
                    this.addListeners(e), _gpdc.Logger.logInitializer("core", "components", "Pills")
                }
            }]), e
        }(),
        Ct = function() {
            function e() {
                n(this, e), this.selectors = {
                    component: '[data-component="exclusive-badge"]',
                    targetId: "legal-text-target-id",
                    legalText: "data-exclusive-badge-id",
                    expiration: "expiration",
                    legalMessage: "legal-message",
                    dateToken: ":expirationDate"
                }
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = $(this.selectors.component);
                    e.length && ($.each(e, this.processExclusiveBadge.bind(this)), _gpdc.Logger.logInitializer("core", "components", "Exclusive Badge"))
                }
            }, {
                key: "processExclusiveBadge",
                value: function(e, t) {
                    var a = $(t),
                        n = a.data(this.selectors.targetId) || "",
                        i = a.data(this.selectors.expiration) || "",
                        o = a.data(this.selectors.legalMessage) || "",
                        r = n ? _gpdc.elements.$body.find("[".concat(this.selectors.legalText, '="').concat(n, '"]')) : [];
                    return r.length && o ? (o.includes(this.selectors.dateToken) && (o = o.replace(this.selectors.dateToken, i)), void r.html(o)) : void _gpdc.Logger.log("Exclusive Badge | Either No matching legal text wrapper found or no legal message authored")
                }
            }]), e
        }(),
        wt = function() {
            function e() {
                n(this, e), _gpdc.Logger.logInitializer("core", "components", "Nav accordion")
            }
            return o(e, [{
                key: "updateNavAccordions",
                value: function(e, t, a) {
                    return e ? (null === t || t) && (t = !1, a.length && a.each(function(e, t) {
                        var a = $(t);
                        a.attr("role", "button"), 0 === e ? (a.attr("aria-expanded", "true"), a.parent().find(".nav-list").slideDown(300)) : (a.attr("aria-expanded", "false"), a.parent().find(".nav-list").slideUp(0))
                    })) : null !== t && t || (t = !0, a.length && a.each(function(e, t) {
                        var a = $(t);
                        a.attr({
                            "aria-expanded": null,
                            role: "heading"
                        }), a.parent().find(".nav-list").slideDown(0)
                    })), t
                }
            }, {
                key: "addClickHandlers",
                value: function(e) {
                    e.on("click", function(e) {
                        e.stopPropagation(), e.preventDefault();
                        var t = e.target;
                        if (t.getAttribute("aria-expanded")) {
                            var a = "true" === t.getAttribute("aria-expanded").toLowerCase();
                            a ? ($(t).attr("aria-expanded", "false"), $(t).parent().find(".nav-list").stop().slideUp(300)) : ($(t).attr("aria-expanded", "true"), $(t).parent().find(".nav-list").stop().slideDown(300))
                        }
                    })
                }
            }, {
                key: "setupAndAddClickHandlers",
                value: function() {
                    var e = this,
                        t = $('[data-component="footer-nav"]');
                    if (t.length && T && T.IS_MOBILE_PORTRAIT) {
                        var a = this.updateNavAccordions(A.IS_MOBILE_PORTRAIT, null, t);
                        this.addClickHandlers(t);
                        try {
                            T.IS_MOBILE_PORTRAIT.addEventListener("change", function(n) {
                                var i = n.matches;
                                a = e.updateNavAccordions(i, a, t)
                            })
                        } catch (e) {}
                    }
                }
            }, {
                key: "init",
                value: function() {
                    this.setupAndAddClickHandlers(), _gpdc.Logger.logInitializer("core", "components", "Footer Accordion")
                }
            }]), e
        }(),
        Tt = function() {
            var e = $('[data-component="page-hero"]');
            e.length && (_gpdc.Logger.logInitializer("core", "components", "Page Banner"), e.each(At))
        },
        At = function(e, t) {
            var a = $(t);
            oe(a, "custom-theme", "--ph-gradient-start", !0, !1, !0), Lt(a)
        },
        Lt = function(e) {
            var t = e.find(".page-hero-gradient .content-override:visible .media-block");
            _gpdc.analytics.event.addGDLEvent("impression", "page-hero", {
                userActionFlag: !1,
                moduleName: "page-hero",
                label: L.EMPTY_LABEL,
                assetName: t.data("analytics-asset") || L.EMPTY_LABEL,
                elementType: t.hasClass("+inline-video") ? "video" : "image"
            }, e)
        },
        Et = function(e) {
            var t = D('[data-component="content-spacer"]', e);
            t.length && (se(t, ["mobile", "tablet-large", "desktop"], "height"), _gpdc.Logger.logInitializer("core", "components", "Content Spacer"))
        },
        It = function() {
            _gpdc.Logger.logInitializer("core", "components", "Flickity Overrides"), Flickity.prototype._createResizeClass = function() {
                this.element.classList.add("flickity-resize")
            }, Flickity.createMethods.push("_createResizeClass");
            var e = Flickity.prototype,
                t = e.resize,
                a = e.setCellAlign,
                n = e.onresize;
            Flickity.prototype.resize = function() {
                this.element.classList.remove("flickity-resize"), t.call(this), this.element.classList.add("flickity-resize")
            }, Flickity.prototype.onresize = function() {
                this.setCellAlign(), n.call(this)
            }, Flickity.prototype.setCellAlign = function() {
                return "grid" === this.options.cellAlign ? void(this.options.forceCenter && this.options.forceCenter.map(function(e) {
                    return e.matches
                }).some(Boolean) ? this.cellAlign = .5 : this.cellAlign = "left" === this.originSide ? 0 : 1) : void a.call(this)
            }, Flickity.prototype.positionSlider = function() {
                var e = this.x;
                "grid" !== this.options.cellAlign || this.options.forceCenter && this.options.forceCenter.map(function(e) {
                    return e.matches
                }).some(Boolean) || (e += this.options.getGridMarginSize()), this.options.wrapAround && this.cells.length > 1 && (e = fizzyUIUtils.modulo(e, this.slideableWidth), e -= this.slideableWidth, this.shiftWrapCells(e)), this.setTranslateX(e, this.isAnimating), this.dispatchScrollEvent()
            }
        },
        $t = function(e) {
            var t = D('[data-component="clickable-tiles"]', e);
            t.length && ($.each(t, St), _gpdc.Logger.logInitializer("core", "components", "Clickable Tiles"))
        },
        St = function(e, t) {
            var a = $(t).find(".clickable-tiles__tile-content a.surface");
            $.each(a, xt)
        },
        xt = function(e, t) {
            var a = $(t);
            a.on("click.DKClickableTiles", function() {
                var e = a.data("track");
                e && (_gpdc.analytics.event.addRawEvent(a, e.eventInfo, e.attributes), _gpdc.analytics._satelliteTrack("user_engagement"))
            })
        },
        Pt = function(e) {
            return '\n        <svg viewBox="0 0 64 64" role="img" focusable="false" aria-hidden="true">\n            <use href="'.concat(e, '#ps-icon_utility_cancel-copy"></use>\n        </svg>\n        ')
        },
        Mt = function(e) {
            return '\n        <div class="txt-block-title txt-block-title--large country-selector__title mt--none ">\n            <div class="icon txt-block-title__sticker ">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 128">\n                    <g transform="translate(16 32)">\n                        <path d="M118.118836 12.5186944L102.146451 12.5186944C102.082678 12.5182548 102.028765 12.5658246 102.021264 12.6291566L102.021264 50.0011506C102.025168 50.0673981 102.080089 50.1189738 102.146451 50.1189738L108.619354 50.1189738C108.681534 50.1150799 108.729935 50.0634519 108.729813 50.0011506L108.729813 16.6940513C108.729813 16.6572316 108.729813 16.6351398 108.773997 16.6351398L116.18212 16.6351398C118.884686 16.6351398 120.364838 19.3524336 120.364838 24.2789092 120.364838 29.2053849 118.89205 31.9374065 116.18212 31.9374065L111.719573 31.9374065C111.657393 31.9413002 111.608992 31.9929283 111.609114 32.0552295L111.609114 35.9360258C111.604513 35.9671458 111.614373 35.9986634 111.635889 36.0216134 111.657404 36.0445634 111.688221 36.056434 111.719573 36.0538488L118.111472 36.0538488C120.442418 36.013773 122.645117 34.9794157 124.164631 33.2113681 126.057163 31.0831895 127.051295 28.0050627 127.051295 24.3230929 127.051295 17.1800713 123.560788 12.5407893 118.111472 12.5407893M137.648004 12.5184533L131.167737 12.5184533C131.136474 12.5166822 131.105695 12.5272008 131.082204 12.5479283 131.058713 12.5686559 131.044444 12.5978855 131.042551 12.6291566L131.042551 50.0011506C131.046454 50.0673981 131.101375 50.1189738 131.167737 50.1189738L137.648004 50.1189738C137.711509 50.1153361 137.76219 50.0646548 137.765827 50.0011506L137.765827 12.6365205C137.761934 12.5743409 137.710306 12.5259396 137.648004 12.5260614M165.903441 21.620527C165.899538 21.5542795 165.844616 21.5027038 165.778254 21.5027038L154.238961 21.5027038C143.929445 21.5027038 142.57448 29.0949258 142.57448 35.7740191L142.57448 41.5399839C142.57448 46.5106432 145.659971 50.1189738 149.93842 50.1189738L156.234588 50.1189738C156.296768 50.1150799 156.345169 50.0634519 156.345047 50.0011506L156.345047 46.1277183C156.345169 46.065417 156.296768 46.013789 156.234588 46.0098953L151.698401 46.0098953C150.66745 46.0098953 149.268301 45.553331 149.268301 41.9891842L149.268301 35.7666552C149.268301 31.6207571 149.651226 28.9771027 150.512807 27.4674951 151.440664 25.8032447 152.906088 25.5823265 154.194777 25.5823265L159.113889 25.5823265C159.113889 25.5823265 159.150708 25.5823265 159.158072 25.6412381 159.165436 25.7001496 159.158072 50.0011506 159.158072 50.0011506 159.158072 50.0662225 159.210823 50.1189738 159.275895 50.1189738L165.741434 50.1189738C165.807797 50.1189738 165.862718 50.0673981 165.866621 50.0011506L165.866621 21.620527 165.903441 21.620527zM212.509815 28.1597054L209.313866 27.9166954C206.920585 27.7105051 205.145876 26.384996 205.145876 22.46738 205.145876 17.8870096 207.200415 16.6351398 209.939801 16.6351398L218.776528 16.6351398C218.837478 16.6319638 218.887254 16.5852987 218.894351 16.5246807L218.894351 12.6365205C218.887254 12.5759025 218.837478 12.5292375 218.776528 12.5260614L209.019308 12.5260614C202.988241 12.5260614 198.709792 16.0681164 198.709792 23.1227707L198.709792 23.4246922C198.709792 28.9918306 202.134024 32.9978138 207.244599 33.4028305L210.418457 33.6384766C212.841193 33.8225751 214.3508 35.9875734 214.3508 39.2718905L214.3508 40.1997469C214.3508 42.254286 213.835325 46.0172592 209.424325 46.0172592L200.241492 46.0172592C200.179312 46.021153 200.130911 46.072781 200.131033 46.1350823L200.131033 50.0011506C200.130911 50.0634519 200.179312 50.1150799 200.241492 50.1189737L211.633507 50.1189737C215.146106 50.1189737 221.02253 48.6977333 221.02253 39.1393395 221.02253 35.6856518 220.234588 32.9536302 218.643977 30.9800944 217.281648 29.2937522 215.271293 28.3732597 212.509815 28.1597054M265.567001 21.620527C265.567001 21.5554551 265.51425 21.5027039 265.449178 21.5027039L253.887793 21.5027039C243.578277 21.5027039 242.230676 29.0949258 242.230676 35.7740191L242.230676 41.5399839C242.230676 46.5106432 245.316167 50.1189737 249.594616 50.1189737L255.868692 50.1189737C255.932197 50.1153361 255.982878 50.0646548 255.986516 50.0011506L255.986516 46.1277183C255.982878 46.0642142 255.932197 46.0135329 255.868692 46.0098953L251.369325 46.0098953C250.338374 46.0098953 248.953953 45.553331 248.953953 41.9891842L248.953953 35.7666552C248.953953 31.6207571 249.336878 28.9771027 250.183731 27.4674951 251.111587 25.8032447 252.591739 25.5823265 253.865701 25.5823265L258.799541 25.5823265C258.799541 25.5823265 258.843724 25.5823265 258.851088 25.6412381L258.851088 50.0011506C258.851088 50.0662225 258.903839 50.1189737 258.968911 50.1189737L265.441814 50.1189737C265.503994 50.1150799 265.552395 50.0634519 265.552273 50.0011506L265.567001 21.620527zM239.535474 21.5027039L232.510276 21.5027039C232.488785 21.4990735 232.473152 21.4803137 232.473456 21.4585203L232.473456 16.7529628C232.473456 16.687891 232.420705 16.6351396 232.355633 16.6351396L225.890094 16.6351396C225.823732 16.6351396 225.768811 16.6867154 225.764907 16.7529628L225.764907 41.5473478C225.764907 46.5106432 228.857762 50.1189738 233.128847 50.1189738L237.760765 50.1189738C237.827127 50.1189738 237.882048 50.0673981 237.885952 50.0011506L237.885952 46.1350823C237.885952 46.0659434 237.829904 46.0098953 237.760765 46.0098953L234.91092 46.0098953C234.174526 46.0098953 232.473456 45.9657117 232.466092 42.3279254L232.466092 25.6117823C232.466092 25.5914473 232.482577 25.5749626 232.502912 25.5749626 234.660546 25.5749626 239.535474 25.5749626 239.535474 25.5749626 239.597776 25.5750844 239.649404 25.5266831 239.653297 25.4645035L239.653297 21.620527C239.653297 21.5892784 239.640884 21.5593096 239.618788 21.5372135 239.596692 21.5151174 239.566723 21.5027039 239.535474 21.5027039M284.7427 21.5027039L277.746957 21.5027039C277.722555 21.5027039 277.702774 21.4829223 277.702774 21.4585203L277.702774 16.7529628C277.704793 16.7236517 277.695052 16.6947437 277.675705 16.6726325 277.656358 16.6505213 277.628998 16.637029 277.599679 16.6351398L271.112048 16.6351398C271.046976 16.6351398 270.994225 16.687891 270.994225 16.7529628L270.994225 41.5473478C270.994225 46.5106432 274.079715 50.1189737 278.358164 50.1189737L282.990082 50.1189737C283.055154 50.1189737 283.107905 50.0662225 283.107905 50.0011506L283.107905 46.1350823C283.10802 46.06872 283.05633 46.0137989 282.990082 46.0098953L280.147602 46.0098953C279.411208 46.0098953 277.717502 45.9657117 277.717502 42.3279254L277.717502 25.6117823C277.717502 25.5914473 277.733986 25.5749626 277.754321 25.5749626 279.889864 25.5749626 284.757428 25.5749626 284.757428 25.5749626 284.816872 25.5713501 284.864275 25.5239478 284.867887 25.4645035L284.867887 21.620527C284.867887 21.5582257 284.819608 21.5065977 284.757428 21.5027039M295.442504 21.50244L288.969601 21.50244C288.90453 21.50244 288.851778 21.5554551 288.851778 21.620527L288.851778 50.0011506C288.855416 50.0646548 288.906097 50.1153361 288.969601 50.1189737L295.442504 50.1189737C295.473753 50.1189737 295.503722 50.1065602 295.525818 50.0844641 295.547914 50.062368 295.560328 50.0323992 295.560328 50.0011506L295.560328 21.620527C295.562534 21.588653 295.550831 21.5573852 295.528238 21.534793 295.505646 21.5122008 295.474378 21.5004977 295.442504 21.50244M295.442504 12.5186973L288.969601 12.5186973C288.9073 12.5185757 288.855672 12.566977 288.851778 12.6291566L288.851778 18.0563802C288.855672 18.1185598 288.9073 18.1669611 288.969601 18.1668393L295.442504 18.1668393C295.473625 18.1714397 295.505142 18.1615798 295.528092 18.1400642 295.551042 18.1185486 295.562913 18.087732 295.560328 18.0563802L295.560328 12.6365205C295.560396 12.6059033 295.547753 12.5766312 295.525416 12.5556908 295.50308 12.5347503 295.473054 12.5240202 295.442504 12.5260614M340.215258 21.5027039L328.6686 21.5027039C328.606421 21.5065977 328.558141 21.5582257 328.558141 21.620527L328.558141 50.0011506C328.558141 50.0634519 328.606421 50.1150799 328.6686 50.1189737L335.156231 50.1189737C335.218411 50.1150799 335.266812 50.0634519 335.26669 50.0011506L335.26669 25.6338741C335.26382 25.6214943 335.267537 25.6085095 335.276523 25.5995235 335.285509 25.5905375 335.298494 25.5868205 335.310874 25.5896905L340.215258 25.5896905C341.548131 25.5896905 343.013555 25.8106087 343.941411 27.3496721 344.802992 28.7414567 345.185917 31.1862847 345.185917 35.0228973 345.185917 35.1922679 345.185917 50.0085146 345.185917 50.0085146 345.185795 50.0708158 345.234197 50.1224439 345.296376 50.1263376L351.754551 50.1263376C351.819623 50.1263376 351.872374 50.0735864 351.872374 50.0085146L351.872374 35.7666552C351.872374 29.0949258 350.546865 21.5027039 340.222622 21.5027039M312.07028 21.5027039C301.260017 21.5027039 299.875596 29.1317455 299.875596 35.8034749 299.875596 42.4752042 301.260017 50.1410655 312.07028 50.1410655 322.880544 50.1410655 324.257601 42.4825682 324.257601 35.8034749 324.257601 29.1243815 322.880544 21.5027039 312.07028 21.5027039M316.171995 44.1320907C315.155771 45.8110689 313.535704 46.0319871 312.07028 46.0319871 310.604856 46.0319871 308.992154 45.8110689 307.961202 44.1320907 307.033346 42.6593027 306.606237 39.9788287 306.606237 35.8034749L306.606237 35.8034749C306.606237 30.8769992 307.21008 28.0787021 308.565045 26.753193 309.375078 25.9431596 310.428122 25.6117823 312.07028 25.6117823 313.712439 25.6117823 314.772846 25.9431596 315.58288 26.753193 316.930481 28.0787021 317.534324 30.8917271 317.534324 35.8329306 317.534324 40.0082844 317.107215 42.6593027 316.171995 44.1615464M169.555955 21.5027005C169.529519 21.503295 169.505035 21.5167525 169.490367 21.5387545 169.475699 21.5607564 169.472694 21.5885328 169.482316 21.613163L179.055437 49.7360488C179.073828 49.80854 179.073828 49.8844758 179.055437 49.956967L173.650306 63.882177C173.650306 63.9484524 173.650306 64 173.716581 64L179.349995 64C179.424594 63.9971053 179.490708 63.9511132 179.519366 63.882177L196.375424 21.613163C196.375424 21.5468876 196.375424 21.5027005 196.301784 21.5027005L190.160258 21.5027005C190.090069 21.5069795 190.027872 21.5493866 189.998252 21.613163L182.862594 40.0966517C182.862594 40.1555632 182.811047 40.1555632 182.781591 40.0966517L176.485422 21.613163C176.463151 21.5468012 176.400778 21.5022483 176.33078 21.5027005L169.555955 21.5027005zM359.199494 43.852261C360.930092 43.8603859 362.3272 45.2684632 362.321805 46.9990718 362.316379 48.7296804 360.910495 50.1289948 359.17988 50.1263031 357.449265 50.1236036 356.047747 48.7199163 356.047728 46.9892993 356.018401 46.1460719 356.341539 45.328717 356.939546 44.7335036 357.537554 44.1382901 358.356414 43.8189846 359.199494 43.852261L359.199494 43.852261zM359.199494 49.6550454C360.279653 49.6639973 361.258441 49.0202157 361.678018 48.0248368 362.097594 47.029458 361.875009 45.8792685 361.11438 45.112283 360.353751 44.3452975 359.205454 44.1131492 358.206618 44.5244281 357.207782 44.935707 356.555877 45.9091032 356.55584 46.9892993 356.52903 47.7003143 356.798186 48.3906266 357.299209 48.8958365 357.800232 49.4010464 358.488281 49.6759381 359.199494 49.6550454L359.199494 49.6550454zM357.954989 45.1630422L359.427777 45.1630422C360.090531 45.1630422 360.576551 45.3618686 360.576551 46.1056265 360.601414 46.5226104 360.321063 46.8964119 359.913797 46.9892993L359.913797 46.9892993C360.149443 47.0482108 360.311449 47.2249453 360.429272 47.6446899 360.547095 48.0644345 360.679646 48.4326315 360.782742 48.7787366L360.097895 48.7787366C360.009528 48.5062709 359.891705 48.0423427 359.818065 47.7919687 359.71497 47.3722241 359.597147 47.2396732 359.081671 47.2396732L358.625107 47.2396732 358.625107 48.7787366 357.97708 48.7787366 357.954989 45.1630422zM358.603015 46.7904729L359.184767 46.7904729C359.641331 46.7904729 359.921161 46.6137384 359.921161 46.1939938 359.921161 45.7742492 359.582419 45.6269704 359.22895 45.6269704L358.625107 45.6269704 358.603015 46.7904729zM30.3259471 0L30.3259471 58.4328616 43.5810386 62.6229433 43.5810386 13.6306524C43.5810386 11.3183753 44.6119902 9.78667587 46.2615127 10.3168795 48.419147 10.9133586 48.8388916 13.0415372 48.8388916 15.3243585L48.8388916 34.8903463C57.0717761 38.8742377 63.566771 34.8903463 63.566771 24.3746404 63.566771 13.6232885 59.7669781 8.83672765 48.5811537 4.98538718 42.5987948 2.9680892 36.5032577 1.30343465 30.3259471 0"></path>\n                        <path d="M46.0774142 54.0807732L67.3223802 46.5180071C69.7303885 45.6269704 70.0985855 44.4192843 68.1471415 43.7786216 66.1956974 43.1379588 62.6462785 43.3146934 60.2161784 44.1910022L46.0774142 49.1763894 46.0774142 41.2380624 46.8874475 40.9729605C50.0900532 39.9378914 53.3924659 39.2418672 56.7403989 38.8963295 62.9381771 38.2714931 69.1974318 39.0259231 75.0692448 41.1055114 81.3138657 43.0864112 82.0134399 45.9804395 80.4301929 47.9907951 78.8469459 50.0011506 74.9440578 51.422391 74.9440578 51.422391L46.0774142 61.7319066 46.0774142 54.0807732zM6.09122155 53.2781038C-.308042054 51.4886664-1.37581331 47.7256932 1.54030681 45.553331 4.23550875 43.5650673 8.83797106 42.0701876 8.83797106 42.0701876L27.7706601 35.3469106 27.7706601 43.0054079 14.1473716 47.8656081C11.7319994 48.727189 11.3711663 49.9422391 13.3152464 50.5829019 15.2593265 51.2235646 18.8087454 51.0615579 21.2241177 50.1705212L27.7706601 47.8656081 27.7706601 54.7361638 26.4525148 54.9497181C19.6304625 56.0564592 12.6414229 55.4826754 6.09122155 53.2781038zM75.9455536 56.3635945C77.6720845 56.3717195 79.065895 57.7764998 79.0605004 59.5030413 79.0550745 61.2295828 77.6524875 62.6256004 75.9259395 62.6229087 74.1993916 62.6202092 72.8011705 61.2198189 72.8011514 59.4932689 72.7718192 58.6519939 73.0941792 57.8365086 73.6908075 57.2426748 74.2874359 56.6488409 75.1044256 56.3303131 75.9455536 56.3635945zM75.9455536 62.1590151C77.0257126 62.167967 78.0045 61.5241853 78.4240766 60.5288064 78.8436532 59.5334276 78.6210686 58.3832381 77.8604394 57.6162526 77.0998101 56.8492672 75.9515128 56.6171188 74.9526768 57.0283977 73.9538409 57.4396766 73.3019364 58.4130728 73.3018993 59.4932689 73.2750888 60.2042839 73.5442453 60.8945963 74.0452684 61.3998062 74.5462915 61.9050161 75.2343401 62.1799078 75.9455536 62.1590151L75.9455536 62.1590151zM74.7084117 57.6743758L76.1370161 57.6743758C76.7997706 57.6743758 77.2931546 57.8658382 77.2931546 58.6095961 77.3173498 59.0288256 77.0332482 59.403465 76.6230361 59.4932689L76.6230361 59.4932689C76.8586821 59.5521804 77.0280528 59.728915 77.1458758 60.1486595 77.2636988 60.5684041 77.3962497 60.9366011 77.4993449 61.2827062L76.8365903 61.2827062C76.7408591 61.0102405 76.6230361 60.5463123 76.5493967 60.2959383 76.4463015 59.8761938 76.3284785 59.7436428 75.8130027 59.7436428L75.3858942 59.7436428 75.3858942 61.2827062 74.7378675 61.2827062 74.7084117 57.6743758zM75.3564384 59.2944425L75.9308257 59.2944425C76.38739 59.2944425 76.6672197 59.117708 76.6672197 58.6979634 76.6672197 58.2782188 76.3284785 58.1309401 75.9750094 58.1309401L75.3564384 58.1309401 75.3564384 59.2944425z"></path>\n                    </g>\n                </svg>\n            </div>\n        <h2 class="txt-style-large-title txt-block-title__title">'.concat(e, "</h2>\n        </div>\n        ")
        },
        Dt = function(e, t) {
            return e.map(function(e, a) {
                return "\n        <a href=".concat(t.replace(_gpdc.config.locale, e.localeCode), '\n           class="country-selector__country" tabindex="0"\n           data-position="').concat(a + 1, '" data-label="').concat(e.countryName, '"\n        >\n            <p class="txt-style-secondary m--none">').concat(e.countryName, "</p>\n        </a>\n    ")
            }).join("")
        },
        Ot = function(e, t) {
            return e.regions.map(function(e) {
                return '\n                <div class="country-selector__region" role="region" aria-label="Americas">\n                    <p class="txt-style-medium-title country-selector__region-title">'.concat(e.regionName, '</p>\n\n                    <div class="mesh-row country-selector__countries">\n                        ').concat(Dt(e.countries, t), "\n                    </div>\n                </div>\n                ")
            }).join("")
        },
        Nt = function(e) {
            var t = new URL(location.href),
                a = t.searchParams;
            return a.set("country-selector", "true"), t.search = a.toString(), $("#gdk__content").append('\n        <div class="country-selector" data-component="country-selector" role="dialog" aria-modal="true" aria-label="'.concat(e.overlayTitle, '">\n            <div class="country-selector__header">\n                <div role="button" tabindex="0" class="country-selector__close" aria-label="Close">\n                    ').concat(Pt(e.closeSpritePath), '\n                </div>\n            </div>\n            <div class="country-selector__content">\n                <div class="mesh-container mb--none">\n                    <div class="mesh-row justify-content--center">\n                        <div class="mesh-col-10">\n                            ').concat(Mt(e.overlayTitle), '\n                        </div>\n                        <div class="mesh-col-10 country-selector__regions">\n                            ').concat(Ot(e, t.toString()), "\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        "))
        },
        Bt = function() {
            var e = S("country");
            return e
        },
        Gt = function() {
            return "/content.country-selector.json/?locale=".concat(_gpdc.config.locale, "&userCountry=").concat(Bt())
        },
        Rt = '[data-component="country-selector"]',
        Ft = function() {
            var e = $(".site-footer-v2 .site-footer-v2__country-btn");
            e.length && e.on("click.dkCS", Vt)
        },
        Vt = function(e) {
            e.stopPropagation();
            var t = $(Rt);
            return t.length ? void Ut(t, $(e.currentTarget)) : void $.ajax({
                type: "GET",
                url: Gt(),
                crossDomain: !0,
                xhrFields: {
                    withCredentials: !0
                },
                success: function(a) {
                    Nt(a), t = $(Rt), Ut(t, $(e.currentTarget)), t.find(".country-selector__country").on("click.dkCS", zt)
                },
                error: function(e) {
                    _gpdc.Logger.log("Country selector API error!", e)
                }
            })
        },
        Ut = function(e, t) {
            var a = e.find(".country-selector__close");
            e.addClass("show"), Q("addClass"), Je = new Ce(e, _gpdc.elements.$document), a.on("click.dkCS", function() {
                return Ht(e, t, a)
            }), _gpdc.elements.$document.on("keyup.dkCS", function(n) {
                n.stopPropagation(), "Escape" !== n.key && "Esc" !== n.key && 27 !== n.keyCode || Ht(e, t, a)
            }), setTimeout(function() {
                return a.focus()
            }, 0)
        },
        Ht = function(e, t, a) {
            e.removeClass("show"), Q("removeClass"), a.off("click.dkCS"), _gpdc.elements.$document.off("keyup.dkCS"), Je && (Je.destroy(), Je = null), setTimeout(function() {
                return t.focus()
            }, 0)
        },
        zt = function(e) {
            var t = e.currentTarget,
                a = $(t),
                n = a.data(),
                i = n.position,
                o = n.label,
                r = t.href;
            _gpdc.analytics.event.addGDLEvent("click", "select country", {
                label: o,
                linkUrl: r,
                position: i,
                elementType: "link",
                userActionFlag: !1,
                moduleName: "countryselector",
                assetName: L.EMPTY_LABEL
            }, a), _gpdc.analytics._satelliteTrack("user_engagement")
        },
        jt = function(e, t) {
            _gpdc.elements.$html.attr("data-hotspot-modal-active", e), t.closest(".gpdc-section, .page-section")[e ? "addClass" : "removeClass"]("image-hotspots-section"), t.parents(".cmp-container")[e ? "addClass" : "removeClass"]("image-hotspots-cmp-container")
        },
        Wt = function(e) {
            var t = e.data("html");
            if (t) return t;
            var a = e.data("item-index"),
                n = e.data("$template").html(),
                i = $(n).find('[data-item-index="'.concat(a, '"]')).html();
            return e.data("html", i), i
        },
        Kt = function(e) {
            var t = e.match(/([0-9]+,[0-9]+)/g).map(function(e) {
                    return e.split(",")
                }),
                a = t.map(function(e) {
                    return e[0]
                }),
                n = t.map(function(e) {
                    return e[1]
                });
            return [(Math.min.apply(Math, c(a)) + Math.max.apply(Math, c(a))) / 2, (Math.min.apply(Math, c(n)) + Math.max.apply(Math, c(n))) / 2]
        },
        Yt = new ue,
        qt = function(e) {
            var t = $(".image-hotspots--active"),
                a = t.data(),
                n = a.trap;
            n.isExcluded() || "Escape" !== e.key && "Esc" !== e.key && 27 !== e.keyCode || (e.stopPropagation(), t.find(".image-hotspots__sidebar .image-hotspots__close").trigger("click"))
        },
        Zt = function(e) {
            var t = $(e.currentTarget).closest(".image-hotspots");
            t.addClass("image-hotspots--expanded"), t.find(".image-hotspots__pin--active").removeClass("image-hotspots__pin--active"), jt(!0, t);
            var a = t.find(".image-hotspots__container"),
                n = a.find(".media-block");
            a.scrollTop((n.height() - a.height()) / 2), a.scrollLeft((n.width() - a.width()) / 2)
        },
        Xt = function(e) {
            e.preventDefault();
            var t = $(e.currentTarget).closest(".image-hotspots");
            t.removeClass("image-hotspots--active image-hotspots--expanded"), t.find(".image-hotspots__pin--active").removeClass("image-hotspots__pin--active"), jt(!1, t), _gpdc.elements.$document.off("keyup.DKImageHotspots", qt);
            var a = t.data(),
                n = a.trap;
            n && (n.destroy(), t.data("trap", null))
        },
        Jt = function(e) {
            var t = $(e.currentTarget),
                a = "image-hotspots__pin--active",
                n = t.data(),
                i = n.$component,
                o = n.$sidebar,
                r = i.attr("class").match(/image-hotspots--(side|wide|full)/gm);
            if (!t.hasClass(a)) {
                _gpdc.analytics.event.addGDLEvent("click", "select image hotspot", {
                    moduleName: "image-hotspot".concat(A.IS_TABLET_LG && r.length ? "-".concat(r[0].replace("image-hotspots--", "")) : ""),
                    elementType: "button",
                    assetName: L.EMPTY_LABEL,
                    linkUrl: L.EMPTY_LABEL,
                    label: t.attr("aria-label"),
                    userActionFlag: !0
                }, t), _gpdc.analytics._satelliteTrack("user_engagement");
                var s = Wt(t),
                    c = i.data("age-gate-unlocked") === !0 || i.hasClass("image-hotspots--side") ? $([]) : $(s).find('[data-age-gated="true"]'),
                    l = Yt.isGated(c.eq(0));
                Yt.triggerIfNeeded(c.eq(0)).then(function() {
                    if (i.addClass("image-hotspots--active"), !i.hasClass("image-hotspots--side") && l && i.data("age-gate-unlocked", !0), t.addClass(a).siblings().removeClass(a), o.html('\n            <div class="'.concat(A.IS_MAX_TABLET ? "slideInUp--fast" : "fadeIn", ' image-hotspots__content" aria-live="polite">\n                ').concat(s, "\n            </div>\n        ")), i.data("age-gate-unlocked") === !0 && o.find('[data-age-gated="true"]').attr("data-age-gated", !1), A.IS_MAX_TABLET) {
                        var e = o.find(".image-hotspots__content .box");
                        e.scrollTop(0), setTimeout(function() {
                            return e.removeClass("slideInUp--fast")
                        }, 410)
                    } else o.scrollTop(0);
                    _gpdc.components.lozad._observer.observe(), new _gpdc.components.InlineVideo(o).init(), new _gpdc.components.ImageBlock(o).init(), o.find(".btn--cta").on("click.DKImageHotspots", function(e) {
                        var t = $(e.currentTarget),
                            a = t.data("track-js");
                        a && (a.attributes.moduleName = "image-hotspot".concat(A.IS_TABLET_LG && r.length ? "-".concat(r[0].replace("image-hotspots--", "")) : ""), _gpdc.analytics.event.addGDLEvent("raw", a), _gpdc.analytics._satelliteTrack("user_engagement"))
                    }), i.hasClass("image-hotspots--side") || setTimeout(function() {
                        jt(!0, i);
                        var e = new Ce(o);
                        e.autoFocusFirstItem(), i.data("trap", e), _gpdc.elements.$document.on("keyup.DKImageHotspots", qt)
                    }, 100)
                }).catch(function() {})
            }
        },
        Qt = function(e) {
            "Enter" === e.key && $(e.target).trigger("click")
        },
        ea = function(e) {
            var t = $(e.target);
            t.closest(".image-hotspots").data("age-gate-unlocked", !0)
        },
        ta = function(e) {
            var t = $(e.target);
            if (t.hasClass("image-hotspots__sidebar")) {
                if (!A.IS_MAX_TABLET) return void $(".image-hotspots__close").trigger("click");
                var a = $(".image-hotspots__content");
                a.addClass("slideOutDown--fast"), a.removeAttr("style"), setTimeout(function() {
                    t.removeAttr("style"), t.closest(".image-hotspots").removeClass("image-hotspots--active"), $(".image-hotspots__pin--active").removeClass("image-hotspots__pin--active")
                }, 400)
            }
        },
        aa = !1,
        na = function(e) {
            Qe = e.originalEvent.touches[0].clientY
        },
        ia = function(e) {
            var t = Math.abs(Qe - et),
                a = $(".image-hotspots__sidebar"),
                n = $(".image-hotspots__content"),
                i = n.find(".box");
            t >= 100 && aa && i.scrollTop() <= 0 ? (aa = !1, Qe = null, et = null, a.css("--slide-out-start", t), n.addClass("slideOutDown--fast"), n.removeAttr("style"), setTimeout(function() {
                a.removeAttr("style"), a.closest(".image-hotspots").removeClass("image-hotspots--active"), $(".image-hotspots__pin--active").removeClass("image-hotspots__pin--active")
            }, 400)) : aa && (aa = !1, n.removeAttr("style"), a.css({
                "--slide-in-start": t,
                "--slide-in-start-opacity": 1
            }), n.addClass("slideInUp--fast"), setTimeout(function() {
                n.removeClass("slideInUp--fast"), a.removeAttr("style")
            }, 400))
        },
        oa = function(e) {
            var t = e.originalEvent.touches[0].clientY;
            if (t > et) {
                var a = $(".image-hotspots__content"),
                    n = a.find(".box"),
                    i = n.scrollTop();
                0 !== i || aa || (aa = !0, Qe = t), i <= 0 && a.attr("style", "transform: translate3d(0, ".concat(Math.abs(Qe - t), "px, 0) !important"))
            }
            et = t
        },
        ra = function(e, t) {
            var a = $(t),
                n = a.find(".image-hotspots__area"),
                i = a.find(".image-hotspots__sidebar"),
                o = a.find(".image-hotspots__template"),
                r = a.data(),
                c = r.width,
                l = r.height,
                d = n.find(".image-hotspots__pin");
            a.css({
                "--image-width": "".concat(c, "px"),
                "--image-height": "".concat(l, "px")
            }), d.on("click.DKImageHotspots", Jt), a.on("click.DKImageHotspots", ".image-hotspots__close", Xt), a.on("click.DKImageHotspots", ".image-hotspots__mobile-close", Xt), a.on("click.DKImageHotspots", ".image-hotspots__poster", Zt), i.on("click.DKImageHotspots", ta), i.on("success.psAgeGate.attr", ".media-block", ea), A.IS_MAX_TABLET && (i.on("keyup.DKImageHotspots", Qt), i.on("touchstart.DKImageHotspots", na), i.on("touchend.DKImageHotspots", ia), i.on("touchmove.DKImageHotspots", oa)), d.each(function(e, t) {
                var n = $(t),
                    r = Kt(n.data("coordinates")),
                    d = s(r, 2),
                    u = d[0],
                    g = d[1];
                n.css({
                    left: "".concat(Math.round(u / c * 100), "%"),
                    top: "".concat(Math.round(g / l * 100), "%")
                }), n.data({
                    $template: o,
                    $sidebar: i,
                    $component: a
                })
            }), a.removeClass("image-hotspots--loading")
        },
        sa = function() {
            var e = $('[data-component="image-hotspots"]');
            e.length && (_gpdc.Logger.logInitializer("core", "components", "Image Hotspots"), e.each(ra))
        },
        ca = function() {
            function e(t) {
                n(this, e), this.$context = t
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = D('[data-component="cards"]', this.$context);
                    t.length && ($.each(t, function(t, a) {
                        var n = $(a),
                            i = n.find('a[data-component="card"]'),
                            o = "mcp-data-collection" === n.data("module-name"),
                            r = null;
                        o && (r = e.addMCPImpressionTracking(n, i)), e.addClickListener(i, o, r)
                    }), _gpdc.Logger.logInitializer("core", "components", "CardCollection"))
                }
            }, {
                key: "addMCPImpressionTracking",
                value: function(e, t) {
                    var a = this,
                        n = e.find(".carousel");
                    if (!n.length) return null;
                    var i = [];
                    $.each(t, function(e, t) {
                        return i.push($(t).attr("data-mcp-product-id"))
                    });
                    var o = {
                            experienceId: n.data("mcp-experience-id"),
                            stat: "Impression",
                            control: !1,
                            catalog: {
                                Product: i
                            }
                        },
                        r = new Waypoint({
                            element: e.get(0),
                            handler: function() {
                                a.salesForceSendStat(o), r.destroy()
                            },
                            offset: "20%"
                        });
                    return o
                }
            }, {
                key: "addClickListener",
                value: function(e, t, n) {
                    var i = this;
                    e.on("click.dkCardCollection", function(e) {
                        var o = $(e.currentTarget),
                            r = "_blank" === o.attr("target"),
                            s = o.data("track-js");
                        if ((s || t) && (r || (e.preventDefault(), e.stopPropagation()), s && (t && (s.attributes.moduleName += "-recommendations"), _gpdc.analytics.event.addRawEvent(o, s.eventInfo, s.attributes), _gpdc.analytics._satelliteTrack("user_engagement")), t && n && i.salesForceSendStat(a(a({}, n), {}, {
                                stat: "Clickthrough",
                                catalog: {
                                    Product: [o.data("mcp-product-id")]
                                }
                            })), !r)) {
                            var c = o.attr("href");
                            G(c) && (window.location.href = c)
                        }
                    })
                }
            }, {
                key: "salesForceSendStat",
                value: function(e) {
                    try {
                        SalesforceInteractions.mcis.sendStat({
                            campaignStats: [e]
                        })
                    } catch (e) {
                        _gpdc.Logger.log("CardCollection::SF Tracking error", e)
                    }
                }
            }]), e
        }(),
        la = function(e) {
            var t = $('div[data-component="filter"]');
            t.each(function(t, a) {
                var n = $(a),
                    i = e + 11;
                n.data("sticky") && (T.IS_MOBILE.matches ? n.css("--sticky-top", "".concat(e, "px")) : n.css("--sticky-top", "".concat(i, "px")), n.addClass("filter--sticky"))
            })
        },
        da = function(e) {
            var t = $(".filter"),
                a = ($("html, body"), $(".filter__sortButton")),
                n = $(".filter__filterButton--open"),
                i = $(".filter__filterButton--close"),
                o = $(".filter__filterButton--close-mobile"),
                r = $(".filter__FilterListWrapper"),
                s = $(".filter__SortListWrapper"),
                c = $(".game-grid-v2__tabs-with-filter"),
                l = $(".game-grid-v2__filter");
            a.on("click.sortToggle", function() {
                r.removeClass("filter__FilterListWrapper--show"), c.removeClass("mesh-col-10"), c.css("grid-area", "content"), i.css("display", "none"), n.css("display", "block"), t.addClass("filter--adjust-filter"), s.toggleClass("filter__SortListWrapper--show"), e.IS_MAX_TABLET.matches && Q("removeClass", r)
            }), n.on("click.filterToggle", function() {
                s.removeClass("filter__SortListWrapper--show"), n.css("display", "none"), i.css("display", "block"), c.css("grid-area", "unset"), c.addClass("mesh-col-10"), t.addClass("filter--adjust-filter"), r.addClass("filter__FilterListWrapper--show"), e.IS_MAX_TABLET.matches && (Q("addClass", r), l.css("z-index", 9999))
            }), i.on("click.closeFilterDesktop", function() {
                i.css("display", "none"), n.css("display", "block"), c.css("grid-area", "content"), c.removeClass("mesh-col-10"), t.removeClass("filter--adjust-filter"), r.removeClass("filter__FilterListWrapper--show")
            }), o.on("click.closeFilterMobile", function() {
                n.css("display", "block"), i.css("display", "none"), c.removeClass("mesh-col-10"), c.css("grid-area", "content"), t.removeClass("filter--adjust-filter"), r.removeClass("filter__FilterListWrapper--show"), e.IS_MAX_TABLET.matches && Q("removeClass", r), l.css("z-index", "")
            })
        },
        ua = function(e) {
            var t = new Date((new Date).toLocaleString("en-US", {
                    timeZone: "America/Los_Angeles"
                })),
                a = new Date(t.setHours(0, 0, 0, 0)).getTime();
            return "Coming Soon" == e ? "> ".concat(a) : "Out Now" == e ? "< ".concat(a) : ""
        },
        ga = function() {
            return '\n    <a href="#" data-analytics-asset="/assets/images/sandbox/organisms/game-grid/the-quarry-store-artwork-01-en-28apr22" data-analytics-label="The Quarry" class="simple-carousel-cell game-grid-v2-tile game-grid-v2-tile--grid mesh-col-2" style="animation-delay: 0ms;">\n        <div class="game-grid-v2-tile__keyart  game-grid-v2-tile__keyart--loading">\n            <div class="media-block media-block--image" data-uuid="318cfe81-ce08-4f43-8533-5702dd745b61" data-component="image-block" data-age-gated="false" data-lightbox="" data-lightbox-theme="light" data-src="/assets/images/sandbox/organisms/game-grid/the-quarry-store-artwork-01-en-28apr22.jpg">\n                <div class="media-block__inner">\n                    <figure class="media-block__figure ">\n                        <picture class="media-block__img lozad lazy-loaded" data-alt="" data-loaded="true">\n                        </picture>\n                    </figure>\n                </div>\n            </div>\n\n            <div class="game-grid-v2-tile__badge">\n            </div>\n        </div>\n\n        <div class="game-grid-v2-tile__content">\n            <div class="game-grid-v2-tile__title txt-style-secondary txt-style-secondary--primary txt-style-secondary--m-0">\n                <p> </p>\n            </div>\n        </div>\n    </a>\n    '
        },
        ha = function(e, t) {
            return "\n    <a href=".concat(e.url, ' data-analytics-asset="" data-analytics-label="" class="simple-carousel-cell game-grid-v2-tile game-grid-v2-tile--grid mesh-col-2 ').concat(t > 23 ? "game-grid-v2-tile--truncated" : null, '" style="animation-delay: 0ms;">\n        <div class="game-grid-v2-tile__keyart">\n\n            <div class="media-block media-block--image" data-uuid="318cfe81-ce08-4f43-8533-5702dd745b61" data-component="image-block" data-age-gated="false" data-lightbox="" data-lightbox-theme="light" data-src="/assets/images/sandbox/organisms/game-grid/the-quarry-store-artwork-01-en-28apr22.jpg">\n                <div class="media-block__inner">\n                    <figure class="media-block__figure ">\n                        <picture class="media-block__img lozad lazy-loaded" data-alt="" data-loaded="true">\n                            <source srcset="').concat(e.image, '?$1200px$" media="(min-width: 768px)">\n                            <source srcset="').concat(e.image, '?$800px$" media="(min-width: 320px)">\n                            <noscript><img src="').concat(e.image, '?$100px$" alt=""/></noscript>\n                        <img></picture>\n                    </figure>\n                </div>\n            </div>\n\n            <div class="game-grid-v2-tile__badge">\n                ').concat(pa(e.platforms), '\n            </div>\n        </div>\n\n        <div class="game-grid-v2-tile__content">\n            <div class="game-grid-v2-tile__title txt-style-secondary txt-style-secondary--primary txt-style-secondary--m-0">\n                <p>').concat(e.productName, "</p>\n            </div>\n        </div>\n    </a>\n    ");
        },
        pa = function(e) {
            var t = "";
            switch (e.join("")) {
                case "PS4":
                    t = '<svg viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">\n            <g fill="none">\n                <rect fill="#000" opacity=".07957" width="43.63636" height="24" rx="6"></rect>\n                <path d="M37.0909 2.18182H6.54546c-2.40996 0-4.36363 1.95366-4.36363 4.36363v10.9091c0 2.40997 1.95367 4.36363 4.36363 4.36363h30.54546c2.40997 0 4.36364-1.95366 4.36364-4.36363V6.54545c0-2.40997-1.95367-4.36363-4.36364-4.36363Z" fill="#000"></path>\n                <path d="M30.47438 13.59609c0 .02262-.0155.04027-.03288.04027h-4.4072c-.0357 0-.05448-.01048-.05965-.02648-.00517-.02427.00658-.04193.03241-.06344l4.38605-3.17114c.03054-.02151.08127-.0182.08127.05242v3.16837Zm2.21603-.03466-.95826-.00109c-.01912 0-.0349-.01746-.0349-.03819V9.85223c0-.56355-.34142-.7485-.82198-.41025l-5.76245 4.03762c-.22618.15875-.3022.3377-.2477.46972.04734.1151.17167.19421.42127.19421l5.3517.00055c.01483.00109.02678.0131.0306.02837v.51554c0 .02128.01483.03928.033.03928h.96256c.01817 0 .03348-.018.03348-.03928v-.50463c0-.02128.01578-.03928.03347-.03928h.95921c.01913 0 .03443-.018.03443-.03928v-.50518c0-.02128-.0153-.03819-.03443-.03819Zm-15.88936-4.2887h-5.42349c-.01789 0-.0321.01691-.0321.03764v.50683c0 .02128.01421.03764.03256.03764h5.09737c.43208 0 .63711.37044.63711.88382 0 .51392-.20457.88326-.63711.88326h-4.03276c-.62565 0-1.09718.62577-1.09718 1.45557v1.6116c0 .02182.01468.03818.03257.03818h.9192c.0179 0 .03211-.01691.03211-.03819v-1.6116c0-.51337.24907-.87235.60639-.87235h3.86533c.86967 0 1.29579-.63503 1.29579-1.46538 0-.82926-.42612-1.46702-1.29579-1.46702Zm9.1724.54436v-.50618c0-.02127-.0148-.03818-.03237-.03818h-3.02263c-.87683 0-1.30553.63763-1.30553 1.46672v2.52164c0 .51327-.20672.8831-.64282.8831h-2.84089c-.01803 0-.03237.0169-.03237.03817v.50673c0 .02127.01434.03818.03237.03818h3.16924c.87682 0 1.30645-.636 1.30645-1.46563v-2.52328c0-.51327.20672-.88309.6419-.88309h2.69428c.01804 0 .03238-.01745.03238-.03818Z" fill="#FCFCFC"></path>\n            </g>\n        </svg>';
                    break;
                case "PS5":
                    t = '<svg viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">\n            <g fill="none">\n                <rect fill="#000" opacity=".07957" width="43.63636" height="24" rx="6"></rect>\n                <path d="M37.0909 2.18182H6.54546c-2.40996 0-4.36363 1.95366-4.36363 4.36363v10.9091c0 2.40997 1.95367 4.36363 4.36363 4.36363h30.54546c2.40997 0 4.36364-1.95366 4.36364-4.36363V6.54545c0-2.40997-1.95367-4.36363-4.36364-4.36363Z" fill="#FFF"></path>\n                <path d="M16.64596 9.27273h-5.48613c-.01788 0-.03256.01745-.03256.03872V9.816c0 .02127.01468.03873.03302.03873h4.9959c.41044 0 .74292.396.74292.88418 0 .48764-.33248.88364-.74292.88364h-3.79622c-.68055 0-1.2327.65618-1.2327 1.46618v1.59982c0 .02181.01468.03872.03302.03872h.91397c.01789 0 .03302-.0169.03302-.03872v-1.59982c0-.48764.33248-.8831.74246-.8831h3.79622c.68055 0 1.2327-.65672 1.2327-1.46672s-.55215-1.46618-1.2327-1.46618Zm14.55698 2.35036h-4.11645c-.19476 0-.3524-.18764-.3524-.42V9.894c0-.02127.01467-.03927.03254-.03927h5.52878c.01787 0 .03299-.01746.03299-.03873v-.50455c0-.02181-.01512-.03872-.033-.03872h-6.50713c-.01833 0-.033.0169-.033.03872v2.01c0 .48764.3327.88419.74283.88419h4.20901c.44955 0 .82256.438.82073.97309-.00138.53454-.36569.96654-.81477.96654h-4.9248c-.01833 0-.033.01746-.033.03873v.50455c0 .02127.01467.03872.033.03872h5.41467c.7199 0 1.30372-.69436 1.30372-1.55236 0-.85691-.58381-1.55182-1.30372-1.55182ZM21.9277 9.27273c-.63146 0-1.14302.65618-1.14302 1.46618v2.52218c0 .48818-.30829.88418-.68887.88418h-2.18696c-.01659 0-.0302.01746-.0302.03873v.50455c0 .02127.01361.03872.0302.03872h2.6411c.63105 0 1.14303-.65618 1.14303-1.46618v-2.52218c0-.48818.30829-.88418.68887-.88418h2.21758c.01658 0 .03061-.01746.03061-.03873v-.50455c0-.02181-.0136-.03872-.03061-.03872H21.9277Z" fill="#000"></path>\n            </g>\n        </svg>';
                    break;
                case "PS4PS5":
                    t = '<svg viewBox="0 0 70 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n            <defs>\n                <path d="M6.54545 2.18182h56.72728c2.40997 0 4.36363 1.95366 4.36363 4.36363v10.9091c0 2.40997-1.95366 4.36363-4.36363 4.36363H6.54545c-2.40997 0-4.36363-1.95366-4.36363-4.36363V6.54545c0-2.40997 1.95366-4.36363 4.36363-4.36363Z" id="svg-def-56-icon-badges-ps4-ps5-a"></path>\n                <path d="M6.54545 2.18182h56.72728c2.40997 0 4.36363 1.95366 4.36363 4.36363v10.9091c0 2.40997-1.95366 4.36363-4.36363 4.36363H6.54545c-2.40997 0-4.36363-1.95366-4.36363-4.36363V6.54545c0-2.40997 1.95366-4.36363 4.36363-4.36363Z" id="svg-def-56-icon-badges-ps4-ps5-c"></path>\n            </defs>\n            <g fill="none" fill-rule="evenodd">\n                <rect fill="#000" fill-rule="nonzero" opacity=".07957" width="69.81818" height="24" rx="6"></rect>\n                <path d="M63.27273 2.18182H6.54545c-2.40997 0-4.36363 1.95366-4.36363 4.36363v10.9091c0 2.40997 1.95366 4.36363 4.36363 4.36363h56.72728c2.40997 0 4.36363-1.95366 4.36363-4.36363V6.54545c0-2.40997-1.95366-4.36363-4.36363-4.36363Z" fill="#000" fill-rule="nonzero"></path>\n                <mask id="svg-def-56-icon-badges-ps4-ps5-b" fill="#fff">\n                    <use xlink:href="#svg-def-56-icon-badges-ps4-ps5-a"></use>\n                </mask>\n                <path d="M2.18182-4.36364h37.0909l-6.93047 26.18182H6.54545c-2.40997 0-4.36363-1.95366-4.36363-4.36363V-4.36364Z" fill="#FFF" fill-rule="nonzero" mask="url(#svg-def-56-icon-badges-ps4-ps5-b)"></path>\n                <mask id="svg-def-56-icon-badges-ps4-ps5-d" fill="#fff">\n                    <use xlink:href="#svg-def-56-icon-badges-ps4-ps5-c"></use>\n                </mask>\n                <path d="M13.85496 9.27273H8.36883c-.01789 0-.03256.01745-.03256.03872V9.816c0 .02127.01467.03873.03301.03873h4.9959c.41044 0 .74292.396.74292.88418 0 .48764-.33248.88364-.74292.88364H9.56896c-.68055 0-1.2327.65618-1.2327 1.46618v1.59982c0 .02181.01468.03872.03302.03872h.91398c.01788 0 .03302-.0169.03302-.03872v-1.59982c0-.48764.33247-.8831.74246-.8831h3.79622c.68055 0 1.2327-.65672 1.2327-1.46672s-.55215-1.46618-1.2327-1.46618Zm14.55697 2.35036h-4.11645c-.19476 0-.3524-.18764-.3524-.42V9.894c0-.02127.01467-.03927.03254-.03927h5.52878c.01787 0 .033-.01746.033-.03873v-.50455c0-.02181-.01513-.03872-.033-.03872h-6.50714c-.01833 0-.033.0169-.033.03872v2.01c0 .48764.3327.88419.74283.88419h4.20902c.44954 0 .82255.438.82072.97309-.00137.53454-.36568.96654-.81477.96654h-4.9248c-.01833 0-.033.01746-.033.03873v.50455c0 .02127.01467.03872.033.03872h5.41467c.71991 0 1.30372-.69436 1.30372-1.55236 0-.85691-.5838-1.55182-1.30372-1.55182ZM19.1367 9.27273c-.63147 0-1.14302.65618-1.14302 1.46618v2.52218c0 .48818-.3083.88418-.68888.88418h-2.18696c-.01658 0-.03019.01746-.03019.03873v.50455c0 .02127.0136.03872.0302.03872h2.6411c.63104 0 1.14302-.65618 1.14302-1.46618v-2.52218c0-.48818.30829-.88418.68887-.88418h2.21758c.01658 0 .03062-.01746.03062-.03873v-.50455c0-.02181-.01361-.03872-.03062-.03872H19.1367Z" fill="#000" fill-rule="nonzero" mask="url(#d)"></path>\n                <path d="M59.49256 13.59609c0 .02262-.0155.04027-.03288.04027h-4.4072c-.0357 0-.05448-.01048-.05965-.02648-.00517-.02427.00658-.04193.03241-.06344l4.38605-3.17114c.03054-.02151.08127-.0182.08127.05242v3.16837Zm2.21603-.03466-.95825-.00109c-.01913 0-.03491-.01746-.03491-.03819V9.85223c0-.56355-.34142-.7485-.82198-.41025L54.131 13.4796c-.22618.15875-.3022.3377-.2477.46972.04734.1151.17167.19421.42127.19421l5.3517.00055c.01483.00109.02679.0131.03061.02837v.51554c0 .02128.01482.03928.033.03928h.96256c.01817 0 .03347-.018.03347-.03928v-.50463c0-.02128.01578-.03928.03347-.03928h.95921c.01913 0 .03443-.018.03443-.03928v-.50518c0-.02128-.0153-.03819-.03443-.03819Zm-15.88935-4.2887h-5.4235c-.01788 0-.0321.01691-.0321.03764v.50683c0 .02128.01422.03764.03256.03764h5.09737c.43208 0 .63711.37044.63711.88382 0 .51392-.20457.88326-.63711.88326h-4.03276c-.62565 0-1.09717.62577-1.09717 1.45557v1.6116c0 .02182.01467.03818.03256.03818h.9192c.0179 0 .03212-.01691.03212-.03819v-1.6116c0-.51337.24906-.87235.60638-.87235h3.86534c.86966 0 1.29578-.63503 1.29578-1.46538 0-.82926-.42612-1.46702-1.29578-1.46702Zm9.1724.54436v-.50618c0-.02127-.0148-.03818-.03238-.03818h-3.02263c-.87683 0-1.30553.63763-1.30553 1.46672v2.52164c0 .51327-.20672.8831-.64282.8831H47.1474c-.01803 0-.03237.0169-.03237.03817v.50673c0 .02127.01434.03818.03237.03818h3.16924c.87682 0 1.30645-.636 1.30645-1.46563v-2.52328c0-.51327.20672-.88309.6419-.88309h2.69428c.01804 0 .03238-.01745.03238-.03818Z" fill="#FCFCFC" fill-rule="nonzero" mask="url(#svg-def-56-icon-badges-ps4-ps5-d)"></path>\n            </g>\n        </svg>';
                case "PS5PS4":
                    t = '<svg viewBox="0 0 70 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n            <defs>\n                <path d="M6.54545 2.18182h56.72728c2.40997 0 4.36363 1.95366 4.36363 4.36363v10.9091c0 2.40997-1.95366 4.36363-4.36363 4.36363H6.54545c-2.40997 0-4.36363-1.95366-4.36363-4.36363V6.54545c0-2.40997 1.95366-4.36363 4.36363-4.36363Z" id="svg-def-56-icon-badges-ps4-ps5-a"></path>\n                <path d="M6.54545 2.18182h56.72728c2.40997 0 4.36363 1.95366 4.36363 4.36363v10.9091c0 2.40997-1.95366 4.36363-4.36363 4.36363H6.54545c-2.40997 0-4.36363-1.95366-4.36363-4.36363V6.54545c0-2.40997 1.95366-4.36363 4.36363-4.36363Z" id="svg-def-56-icon-badges-ps4-ps5-c"></path>\n            </defs>\n            <g fill="none" fill-rule="evenodd">\n                <rect fill="#000" fill-rule="nonzero" opacity=".07957" width="69.81818" height="24" rx="6"></rect>\n                <path d="M63.27273 2.18182H6.54545c-2.40997 0-4.36363 1.95366-4.36363 4.36363v10.9091c0 2.40997 1.95366 4.36363 4.36363 4.36363h56.72728c2.40997 0 4.36363-1.95366 4.36363-4.36363V6.54545c0-2.40997-1.95366-4.36363-4.36363-4.36363Z" fill="#000" fill-rule="nonzero"></path>\n                <mask id="svg-def-56-icon-badges-ps4-ps5-b" fill="#fff">\n                    <use xlink:href="#svg-def-56-icon-badges-ps4-ps5-a"></use>\n                </mask>\n                <path d="M2.18182-4.36364h37.0909l-6.93047 26.18182H6.54545c-2.40997 0-4.36363-1.95366-4.36363-4.36363V-4.36364Z" fill="#FFF" fill-rule="nonzero" mask="url(#svg-def-56-icon-badges-ps4-ps5-b)"></path>\n                <mask id="svg-def-56-icon-badges-ps4-ps5-d" fill="#fff">\n                    <use xlink:href="#svg-def-56-icon-badges-ps4-ps5-c"></use>\n                </mask>\n                <path d="M13.85496 9.27273H8.36883c-.01789 0-.03256.01745-.03256.03872V9.816c0 .02127.01467.03873.03301.03873h4.9959c.41044 0 .74292.396.74292.88418 0 .48764-.33248.88364-.74292.88364H9.56896c-.68055 0-1.2327.65618-1.2327 1.46618v1.59982c0 .02181.01468.03872.03302.03872h.91398c.01788 0 .03302-.0169.03302-.03872v-1.59982c0-.48764.33247-.8831.74246-.8831h3.79622c.68055 0 1.2327-.65672 1.2327-1.46672s-.55215-1.46618-1.2327-1.46618Zm14.55697 2.35036h-4.11645c-.19476 0-.3524-.18764-.3524-.42V9.894c0-.02127.01467-.03927.03254-.03927h5.52878c.01787 0 .033-.01746.033-.03873v-.50455c0-.02181-.01513-.03872-.033-.03872h-6.50714c-.01833 0-.033.0169-.033.03872v2.01c0 .48764.3327.88419.74283.88419h4.20902c.44954 0 .82255.438.82072.97309-.00137.53454-.36568.96654-.81477.96654h-4.9248c-.01833 0-.033.01746-.033.03873v.50455c0 .02127.01467.03872.033.03872h5.41467c.71991 0 1.30372-.69436 1.30372-1.55236 0-.85691-.5838-1.55182-1.30372-1.55182ZM19.1367 9.27273c-.63147 0-1.14302.65618-1.14302 1.46618v2.52218c0 .48818-.3083.88418-.68888.88418h-2.18696c-.01658 0-.03019.01746-.03019.03873v.50455c0 .02127.0136.03872.0302.03872h2.6411c.63104 0 1.14302-.65618 1.14302-1.46618v-2.52218c0-.48818.30829-.88418.68887-.88418h2.21758c.01658 0 .03062-.01746.03062-.03873v-.50455c0-.02181-.01361-.03872-.03062-.03872H19.1367Z" fill="#000" fill-rule="nonzero" mask="url(#d)"></path>\n                <path d="M59.49256 13.59609c0 .02262-.0155.04027-.03288.04027h-4.4072c-.0357 0-.05448-.01048-.05965-.02648-.00517-.02427.00658-.04193.03241-.06344l4.38605-3.17114c.03054-.02151.08127-.0182.08127.05242v3.16837Zm2.21603-.03466-.95825-.00109c-.01913 0-.03491-.01746-.03491-.03819V9.85223c0-.56355-.34142-.7485-.82198-.41025L54.131 13.4796c-.22618.15875-.3022.3377-.2477.46972.04734.1151.17167.19421.42127.19421l5.3517.00055c.01483.00109.02679.0131.03061.02837v.51554c0 .02128.01482.03928.033.03928h.96256c.01817 0 .03347-.018.03347-.03928v-.50463c0-.02128.01578-.03928.03347-.03928h.95921c.01913 0 .03443-.018.03443-.03928v-.50518c0-.02128-.0153-.03819-.03443-.03819Zm-15.88935-4.2887h-5.4235c-.01788 0-.0321.01691-.0321.03764v.50683c0 .02128.01422.03764.03256.03764h5.09737c.43208 0 .63711.37044.63711.88382 0 .51392-.20457.88326-.63711.88326h-4.03276c-.62565 0-1.09717.62577-1.09717 1.45557v1.6116c0 .02182.01467.03818.03256.03818h.9192c.0179 0 .03212-.01691.03212-.03819v-1.6116c0-.51337.24906-.87235.60638-.87235h3.86534c.86966 0 1.29578-.63503 1.29578-1.46538 0-.82926-.42612-1.46702-1.29578-1.46702Zm9.1724.54436v-.50618c0-.02127-.0148-.03818-.03238-.03818h-3.02263c-.87683 0-1.30553.63763-1.30553 1.46672v2.52164c0 .51327-.20672.8831-.64282.8831H47.1474c-.01803 0-.03237.0169-.03237.03817v.50673c0 .02127.01434.03818.03237.03818h3.16924c.87682 0 1.30645-.636 1.30645-1.46563v-2.52328c0-.51327.20672-.88309.6419-.88309h2.69428c.01804 0 .03238-.01745.03238-.03818Z" fill="#FCFCFC" fill-rule="nonzero" mask="url(#svg-def-56-icon-badges-ps4-ps5-d)"></path>\n            </g>\n        </svg>';
                    break;
                default:
                    return
            }
            return t
        },
        fa = function(e) {
            return '\n    <div class="icon">\n        <svg viewBox="0 0 64 64" aria-hidden="true">\n            <use href="'.concat(e, '#ps-icon_utility_tick"></use>\n        </svg>\n    </div>\n    ')
        },
        va = function(e) {
            return '\n    <div class="txt-block-title txt-block-title--small mt--none filter--no-results-msg">\n        <h4 class="txt-style-small-title txt-block-title__title"> '.concat(e, " </h4>\n    </div>\n    ")
        },
        ma = function() {
            function e() {
                n(this, e), this.filter = $('[data-component="filter"]'), this.$genrePageComponent = $('[data-component="genre-page-component"]'), this.genreGamesGrid = $(".game-grid-v2__filter"), this.filterButton = "filterButton", this.sortButton = "sortButton", this.input = "input[type=checkbox]", this.currentSortKey = "name-a-z", this.checkedClass = "checked", this.pageGenre = "", this.indexCrawler = "", this.noResultMessage = "", this.hashAnchor = new R, this.releaseInfo = [], this.platforms = [], this.games = [], this.totalPageSize = 1e3
            }
            return o(e, [{
                key: "filterSelectHandler",
                value: function(e) {
                    var t = this;
                    this.filter.find("div.filter__form-group-item").on("click.dkFilterCheckBoxClick", function(e) {
                        e.stopPropagation(), e.preventDefault();
                        var a = e.currentTarget,
                            n = $(a),
                            i = a.querySelector('input[type="checkbox"]'),
                            o = t.$genrePageComponent.data("svg-utility-path");
                        if (n.hasClass(t.checkedClass)) {
                            n.removeClass(t.checkedClass), t[i.name] = t[i.name].filter(function(e) {
                                return e !== i.value
                            });
                            var r = i.nextElementSibling;
                            i.parentElement.removeChild(r)
                        } else n.addClass(t.checkedClass), i.insertAdjacentHTML("afterend", fa(o)), t[i.name].includes(i.value) || t[i.name].push(i.value)
                    })
                }
            }, {
                key: "sortSelectHandler",
                value: function() {
                    var e = this;
                    $("li.filter__SortListItem").on("click.dkSelectSortClick", function(t) {
                        var a = t.currentTarget,
                            n = a.innerText;
                        $("#filter-sort-label").text(n), e.currentSortKey = a.dataset.sortKey;
                        var i = e.sortGames(),
                            o = $(".filter__SortListWrapper");
                        o.removeClass("filter__SortListWrapper--show"), e.resortHandler(i)
                    })
                }
            }, {
                key: "sortGames",
                value: function() {
                    var e = [];
                    switch (this.currentSortKey) {
                        case "name-a-z":
                            e = this.games.sort(function(e, t) {
                                return e.productName > t.productName ? 1 : t.productName > e.productName ? -1 : 0
                            });
                            break;
                        case "name-z-a":
                            e = this.games.sort(function(e, t) {
                                return t.productName > e.productName ? 1 : e.productName > t.productName ? -1 : 0
                            });
                            break;
                        case "release-date-old-new":
                            e = this.games.sort(function(e, t) {
                                return e.releaseDateTimestamp > t.releaseDateTimestamp ? 1 : t.releaseDateTimestamp > e.releaseDateTimestamp ? -1 : 0
                            });
                            break;
                        case "release-date-new-old":
                            e = this.games.sort(function(e, t) {
                                return t.releaseDateTimestamp > e.releaseDateTimestamp ? 1 : e.releaseDateTimestamp > t.releaseDateTimestamp ? -1 : 0
                            });
                            break;
                        default:
                            return e
                    }
                    return e
                }
            }, {
                key: "resortHandler",
                value: function(e) {
                    var t = e.length ? e.map(ha) : va(this.noResultMessage);
                    return e.length || $(".game-grid-v2.with-filters .game-grid-v2__content").addClass("genre-no-results"), $(".game-grid-v2__tabs-with-filter").html(t)
                }
            }, {
                key: "scrollToTop",
                value: function() {
                    $("html, body").animate({
                        scrollTop: this.genreGamesGrid.offset().top - this.navOffset
                    }, 2e3)
                }
            }, {
                key: "resetLoadMoreButton",
                value: function(e) {
                    var t = this.genreGamesGrid.find(".game-grid-v2__footer button"),
                        a = t.data("truncation");
                    t.attr("data-total", e - a)
                }
            }, {
                key: "handleAPIresponse",
                value: function(e, t) {
                    var a = this;
                    this.CallFilterAPI(e).then(function(e) {
                        a.games = e;
                        var n = $(".game-grid-v2__tabs-with-filter"),
                            i = $(".filter__FilterListWrapper"),
                            o = $(".filter__filterButton--open"),
                            r = $(".filter__filterButton--close");
                        r.css("display", "none"), o.css("display", "block"), n.css("grid-area", "content"), n.removeClass("mesh-col-10"), i.removeClass("filter__FilterListWrapper--show"), T.IS_MAX_TABLET.matches && Q("removeClass", i), a.resetLoadMoreButton(e.length);
                        var s = a.sortGames();
                        a.resortHandler(s), t && a.scrollToTop()
                    }).catch(function(e) {
                        a.games = [], $(".game-grid-v2.with-filters .game-grid-v2__content").addClass("genre-no-results"), $(".game-grid-v2__tabs-with-filter").html(va(a.noResultMessage))
                    })
                }
            }, {
                key: "CallFilterAPI",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this.filter.data("genre-api-url"),
                        a = "indexName=".concat(e.requests[0].indexName, "&").concat(e.requests[0].params);
                    return new Promise(function(e, n) {
                        var i = {
                            origin: "*",
                            type: "GET",
                            url: "".concat(t, "?").concat(a),
                            dataType: "json",
                            crossDomain: !0,
                            contentType: "application/json",
                            success: e,
                            error: n
                        };
                        $.ajax(i)
                    })
                }
            }, {
                key: "handleInitialLoad",
                value: function() {
                    var e = {
                        requests: [{
                            indexName: "".concat(this.indexCrawler),
                            params: "page=0&hitsPerPage=".concat(this.totalPageSize, "&filters=(genre:").concat(this.pageGenre, ")AND(platforms:'PS5'+OR+platforms:'PS4')AND(pageType:'game')")
                        }]
                    };
                    this.handleAPIresponse(e, !1)
                }
            }, {
                key: "setPlaceHolders",
                value: function() {
                    var e = this.games.map(function() {
                        return ga()
                    });
                    return $(".game-grid-v2__tabs-with-filter").html(e)
                }
            }, {
                key: "submitHandler",
                value: function() {
                    var e = this;
                    $("#submit-filter").on("click.dkFilterSubmit", function(t) {
                        e.setPlaceHolders();
                        var a = e.platforms.length ? e.platforms.join("'+OR+platforms:'") : "PS5'+OR+platforms:'PS4",
                            n = ua(e.releaseInfo.join("")),
                            i = n ? "AND(releaseDateTimestamp ".concat(n, ")") : "",
                            o = {
                                requests: [{
                                    indexName: "".concat(e.indexCrawler),
                                    params: "page=0&hitsPerPage=".concat(e.totalPageSize, "&filters=(genre:").concat(e.pageGenre, ")AND(platforms:'").concat(a, "')AND(pageType:'game')").concat(i)
                                }]
                            };
                        e.sortSelectHandler(), e.handleAPIresponse(o, !0)
                    })
                }
            }, {
                key: "resetHandler",
                value: function() {
                    var e = this;
                    $(".filter__resetButton").on("click.dkFilterReset", function() {
                        e.releaseInfo = [], e.platforms = [];
                        var t = $(".filter__form-group-item");
                        $.each(t, function(e, t) {
                            var a = $(t);
                            a.removeClass("checked"), a.find(".icon").remove()
                        });
                        var a = {
                            requests: [{
                                indexName: "".concat(e.indexCrawler),
                                params: "page=0&hitsPerPage=".concat(e.totalPageSize, "&filters=(genre:").concat(e.pageGenre, ")AND(platforms:'PS5'+OR+platforms:'PS4')AND(pageType:'game')")
                            }]
                        };
                        e.sortSelectHandler(), e.handleAPIresponse(a, !0)
                    })
                }
            }, {
                key: "init",
                value: function() {
                    this.filter.length && (da(T), this.sortSelectHandler(), this.filterSelectHandler(), this.submitHandler(), this.resetHandler(), this.pageGenre = this.filter.data("page-genre"), this.indexCrawler = this.filter.data("index-crawler"), this.noResultMessage = this.filter.data("no-result-msg"), this.navOffset = this.hashAnchor.calculateNavigationOffset(), la(this.navOffset), this.handleInitialLoad(), $(".page-banner-v2__logo-content--title-wrapper > h2").text(this.pageGenre), _gpdc.Logger.logInitializer("core", "components", "Filter"))
                }
            }]), e
        }(),
        ya = function() {
            $('[data-component="blog-feed"]').on("click.BlogFeed", ".blog-post", function(e) {
                var t = $(e.currentTarget);
                _gpdc.analytics.event.addGDLEvent("click", "select blog image", {
                    moduleName: "blog feed",
                    elementType: "image",
                    assetName: L.EMPTY_LABEL,
                    linkUrl: t.attr("href").includes("http") ? t.attr("href") : L.EMPTY_LABEL,
                    label: t.find("h4").text() || L.EMPTY_LABEL,
                    userActionFlag: !0,
                    position: t.index() + 1
                }, t), _gpdc.analytics._satelliteTrack("user_engagement")
            })
        },
        ka = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "trackCellEvent",
                value: function(e, t) {
                    _gpdc.analytics.event.addGDLEvent("click", "select image", {
                        userActionFlag: !1,
                        moduleName: "highlights-carousel",
                        label: L.EMPTY_LABEL,
                        position: e.data("analytics-position"),
                        linkUrl: t || L.EMPTY_LABEL,
                        assetName: e.data("analytics-asset") || L.EMPTY_LABEL,
                        elementType: "image"
                    }, e)
                }
            }, {
                key: "onCellClick",
                value: function(e) {
                    var t = e.currentTarget,
                        a = $(t),
                        n = a.attr("href") || "";
                    this.trackCellEvent(a, n), _gpdc.analytics._satelliteTrack("asset_click")
                }
            }, {
                key: "processHiglightsCarousel",
                value: function(e) {
                    var t = this;
                    $.each(e, function(e, a) {
                        var n = $(a),
                            i = n.find(".simple-carousel-cell");
                        i.data("analytics-position", e + 1), i.on("click.dkHighlightsCarouselComponent", t.onCellClick.bind(t))
                    })
                }
            }, {
                key: "init",
                value: function() {
                    var e = $(".highlights-carousel");
                    this.processHiglightsCarousel(e), _gpdc.Logger.logInitializer("core", "components", "HighlightsCarousel")
                }
            }]), e
        }(),
        _a = ["fill", "filter", "clip-path", "mask"],
        ba = ["symbol"],
        Ca = function() {
            $("svg").each(function(e, t) {
                var a = $(t),
                    n = a.closest("svg"),
                    i = a.find("[id]");
                i.each(function(t, a) {
                    var i = $(a);
                    if (!i.closest(ba.join(", ")).length) {
                        var o = i.attr("id"),
                            r = "svg-def-".concat(e, "-").concat(o);
                        i.attr("id", r), _a.forEach(function(e) {
                            n.find("[".concat(e, '="url(#').concat(o, ')"]')).attr(e, "url(#".concat(r, ")"))
                        });
                        var s = n[0].querySelector('[*|href="#'.concat(o, '"]'));
                        $(s).attr("xlink:href", "#".concat(r))
                    }
                })
            }), _gpdc.Logger.logInitializer("core", "components", "Icons")
        },
        wa = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = $('[data-component="featured-hardware"]');
                    t && t.length && $.each(t, function(t, a) {
                        var n = new _gpdc.components.Slider,
                            i = $(a),
                            o = {
                                clickCallback: e.trackControlClick
                            };
                        n.init(i, o), $.each(i.find(".hp-slider__control"), function(e, t) {
                            return $(t).data("analytics-position", e + 1)
                        })
                    }), _gpdc.Logger.logInitializer("home", "components", "Featured Hardware")
                }
            }, {
                key: "trackControlClick",
                value: function(e, t) {
                    var a = e.data("analytics-label".concat(w.IS_DESKTOP ? "-desktop" : "")) || w.IS_DESKTOP && e.data("analytics-label") || L.EMPTY_LABEL;
                    _gpdc.analytics.event.addGDLEvent("click", "select image", {
                        userActionFlag: !1,
                        moduleName: "featured hardware carousel",
                        label: a,
                        position: t.data("analytics-position"),
                        linkUrl: L.EMPTY_LABEL,
                        assetName: e.data("analytics-asset") || L.EMPTY_LABEL,
                        elementType: "image"
                    }, t), _gpdc.analytics._satelliteTrack("asset_click")
                }
            }]), e
        }(),
        Ta = function() {
            function e() {
                n(this, e), this.arrowShape = "M32.483 43.12l-16.66-16.185a2.007 2.007 0 0 1 0-2.879l16.66-16.18a2.007 2.007 0 0 1 2.823.026l.617.622a2.007 2.007 0 0 1-.027 2.853l-13.058 12.68a2.007 2.007 0 0 0 0 2.878L35.896 39.62a2.007 2.007 0 0 1 .027 2.852l-.617.622a2.007 2.007 0 0 1-2.823.027z", this.activeClass = "is-selected"
            }
            return o(e, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = $('[data-component="featured-hardware-v2"]');
                    t && t.length && $.each(t, function(t, a) {
                        var n = new _gpdc.components.Slider,
                            i = $(a),
                            o = i.find(".slider-custom-slide"),
                            r = i.find('[data-carousel-simple="true"] .carousel'),
                            s = {
                                clickCallback: e.onArrowClick.bind(e)
                            },
                            c = {
                                controlsWrapperSelector: ".simple-carousel",
                                onInit: function(t) {
                                    return t.addClass(e.activeClass)
                                },
                                clickCallback: function(t, a, n) {
                                    return e.onControlClick(t, a, n, o, r)
                                }
                            };
                        n.init(i, c, s), $.each(o, function(e, t) {
                            return $(t).data("analytics-position", e + 1)
                        })
                    }), _gpdc.Logger.logInitializer("home", "components", "Featured Hardware V2")
                }
            }, {
                key: "onControlClick",
                value: function(e, t, a, n, i) {
                    n.removeClass(this.activeClass), t.addClass(this.activeClass), "function" == typeof i.flickity && i.flickity("select", t.index()), a && this.trackControlClick(e, t)
                }
            }, {
                key: "onArrowClick",
                value: function() {
                    var e = 0,
                        t = $('[data-control-id="'.concat(e, '"]'));
                    $(".slider__controls-button-prev").on("click.featuredHardwarev2", function() {
                        0 != e && (t.removeClass("is-selected"), t.prev().addClass("is-selected"), t = $('[data-control-id="'.concat(e - 1, '"]')), e--)
                    }), $(".slider__controls-button-next").on("click.featuredHardwarev2", function() {
                        t.removeClass("is-selected"), t.next().addClass("is-selected"), t = $('[data-control-id="'.concat(e + 1, '"]')), e++
                    }), _gpdc.analytics._satelliteTrack("user_engagement")
                }
            }, {
                key: "trackControlClick",
                value: function(e, t) {
                    var a = e.data("analytics-label".concat(w.IS_DESKTOP ? "-desktop" : "")) || w.IS_DESKTOP && e.data("analytics-label") || L.EMPTY_LABEL;
                    _gpdc.analytics.event.addGDLEvent("click", "select image", {
                        userActionFlag: !1,
                        moduleName: "featured hardware carousel",
                        label: a,
                        position: t.index() + 1,
                        linkUrl: L.EMPTY_LABEL,
                        assetName: e.data("analytics-asset") || L.EMPTY_LABEL,
                        elementType: "image"
                    }, t), _gpdc.analytics._satelliteTrack("asset_click")
                }
            }]), e
        }(),
        Aa = function() {
            return $(".site-footer-v2 a[data-track]").data("satellite-track", "user_engagement")
        },
        La = function() {
            function e() {
                n(this, e), this.init()
            }
            return o(e, [{
                key: "initModules",
                value: function() {
                    It();
                    var e = new Be,
                        t = (new me, new ye),
                        a = new Le,
                        n = new gt,
                        i = new ze,
                        o = new ue,
                        r = new lt,
                        s = (new dt, new ht),
                        c = new pt,
                        l = new ft,
                        d = new mt,
                        u = new q,
                        g = new vt,
                        h = new yt,
                        p = new _t,
                        f = new bt,
                        v = new Ct,
                        m = new wt,
                        y = new ca,
                        k = new ma,
                        _ = new ka;
                    p.init(), f.init(), o.init(), n.init(), i.init(), r.init(), s.init(), c.init(), l.init(), e.init(), t.init(), a.init(), d.init(), g.init(), h.init(), v.init(), m.init(), y.init(), k.init(), _.init(), ya(), Tt(), Et(), $t(), Ft(), sa(), Ca(), (new wa).init(), (new Ta).init(), Aa(), u.retrieve(), o.updateSignInLink("body")
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    new ut;
                    _gpdc.components.AgeGate = ue, _gpdc.components.BGBlock = Me, _gpdc.components.ImageBlock = Pe, _gpdc.components.InlineVideo = Se, _gpdc.components.VideoBlock = xe, _gpdc.components.VideoButton = qe, _gpdc.components.YTEmbedVideo = he, _gpdc.components.VideoPlayer = ge, _gpdc.components.Carousel = ye, _gpdc.components.Slider = kt, _gpdc.components.MediaLightbox = me, _gpdc.components.CarouselSimple = Le, _gpdc.components.Pagination = _t, _gpdc.components.CardCollection = ca, _gpdc.components.Filter = ma, _gpdc.components.HighlightsCarousel = ka, window._gpdc && _gpdc.user && "undefined" != typeof _gpdc.user.isLoggedIn ? this.initModules() : _gpdc.elements.$document.one("userInfoSet.dkComponents", function() {
                        return e.initModules()
                    })
                }
            }]), e
        }(),
        Ea = function(e) {
            try {
                return /\i\m\g\/([^=]+)/.exec(e[0].currentSrc)[1]
            } catch (e) {
                return L.EMPTY_LABEL
            }
        },
        Ia = function() {
            $(".rawhtml div[data-crl8-container-id]").on("click.BazaarVoice", 'button[type="button"]', function(e) {
                var t = $(e.currentTarget);
                _gpdc.analytics.event.addGDLEvent("click", "select image", {
                    moduleName: "BazaarVoice gallery",
                    elementType: "image",
                    assetName: Ea(t.find("img")),
                    linkUrl: L.EMPTY_LABEL,
                    label: L.EMPTY_LABEL,
                    userActionFlag: !1,
                    position: t.closest('div[role="listitem"]').index() + 1
                }, t), _gpdc.analytics._satelliteTrack("asset_click")
            })
        },
        $a = function() {
            window._gpdc = window._gpdc || {}, _gpdc.author = _gpdc.author || {}, _gpdc.author.componentExpiry = function() {
                var e = $("[data-component-time]");
                if (e.length) {
                    var t = (new Date).valueOf();
                    e.each(function(e, a) {
                        var n = $(a),
                            i = new Date(n.data("on-time") || t).valueOf(),
                            o = new Date(n.data("off-time")).valueOf();
                        if ("undefined" == typeof Granite || "undefined" == typeof Granite.author) {
                            if (t > o || t < i) {
                                var r = n.parent();
                                try {
                                    r.length && r.children().length < 2 ? r.remove() : n.remove()
                                } catch (e) {}
                            }
                        } else t < i ? n.addClass("component--is-pending") : t < o ? n.addClass("component--is-expiring") : t > o && n.addClass("component--is-expired");
                        $(".gpdc-section[data-component-time]").css("display", "inline-block"), $(".content-grid[data-component-time]").css("display", "grid"), $(".cmp-experiencefragment[data-component-time]").css("display", "block"), $(".gpdc-iwc[data-component-time]").css("display", "block")
                    })
                }
            }, _gpdc.author.componentExpiry()
        },
        Sa = function() {
            var e = navigator || {},
                t = e.userAgent;
            if (/PlayStation 5/i.test(t)) {
                var a = $(".media-block--video--youtube");
                $.each(a, function(e, t) {
                    var a = $(t),
                        n = a.closest(".carousel");
                    n.length ? a.addClass("hide-on-console") : a.remove()
                })
            }
        };
    ! function(e) {
        var t = window;
        t.sharedNav && sharedNav.setPublicUrl && t.sharedNav.setPublicUrl("/etc.clientlibs/global_pdc/clientlibs/clientlibs-jetstream/resources"), _gpdc.components = {}, _gpdc.elements.$document.ready(function() {
            t._dkDebug = !1, Sa();
            var e = new R;
            new F, new La, new V, e.bind(), e.init(), Ia(), $a(), xa()
        })
    }(jQuery);
    var xa = function() {
        var e = $('[data-component="rating"]');
        !e.length && _gpdc.elements.$document.trigger("satelliteTrack__prod_view")
    }
}();