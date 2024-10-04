/*!
 * @sie/designkit
 * @copyright     2024 Sony Interactive Entertainment LLC, all rights reserved
 */

! function() {
    "use strict";

    function e(e, r) {
        var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (null != t) {
            var n, a, o, i, c = [],
                s = !0,
                l = !1;
            try {
                if (o = (t = t.call(e)).next, 0 === r) {
                    if (Object(t) !== t) return;
                    s = !1
                } else
                    for (; !(s = (n = o.call(t)).done) && (c.push(n.value), c.length !== r); s = !0);
            } catch (e) {
                l = !0, a = e
            } finally {
                try {
                    if (!s && null != t.return && (i = t.return(), Object(i) !== i)) return
                } finally {
                    if (l) throw a
                }
            }
            return c
        }
    }

    function r(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r && (n = n.filter(function(r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            })), t.push.apply(t, n)
        }
        return t
    }

    function t(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? r(Object(n), !0).forEach(function(r) {
                c(e, r, n[r])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
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

    function a(e, r) {
        if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, b(n.key), n)
        }
    }

    function i(e, r, t) {
        return r && o(e.prototype, r), t && o(e, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function c(e, r, t) {
        return r = b(r), r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t, e
    }

    function s(r, t) {
        return d(r) || e(r, t) || g(r, t) || h()
    }

    function l(e) {
        return u(e) || p(e) || g(e) || f()
    }

    function u(e) {
        if (Array.isArray(e)) return m(e)
    }

    function d(e) {
        if (Array.isArray(e)) return e
    }

    function p(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function g(e, r) {
        if (e) {
            if ("string" == typeof e) return m(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? m(e, r) : void 0
        }
    }

    function m(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
        return n
    }

    function f() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function h() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function v(e, r) {
        if ("object" != typeof e || null === e) return e;
        var t = e[Symbol.toPrimitive];
        if (void 0 !== t) {
            var n = t.call(e, r || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === r ? String : Number)(e)
    }

    function b(e) {
        var r = v(e, "string");
        return "symbol" == typeof r ? r : String(r)
    }

    function y(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function w(e, r) {
        return r = {
            exports: {}
        }, e(r, r.exports), r.exports
    }
    var k = {
            AEM_VERSION: "AEM 6.5.19"
        },
        A = {
            loginApi: "/central/auth/login?locale=LOCALE&postSignInURL=PAGE_URL&cancelURL=PAGE_URL",
            logoutApi: "/central/auth/logout?locale=LOCALE&postSignOutURL=PAGE_URL&cancelURL=PAGE_URL",
            userApi: "/user/details",
            segmentsApi: "/user/segments"
        },
        q = {
            query: "pdpr",
            cookie: {
                name: "pdcRedirect",
                value: "pdc",
                expiry: 86400
            }
        },
        E = {
            LABELS: {
                EU_COOKIE: "eucookiepreference",
                PREFERENCE_ACCEPT: "accept",
                PREFERENCE_REJECT: "reject"
            },
            DOMAIN: ".playstation.com",
            COOKIE_AGE: 3650,
            UH: "userinfo",
            ORACLE: {
                e1: "isSignedIn_e",
                np: "isSignedIn",
                mgmt: "isSignedIn_m"
            },
            SUBSCRIPTION: {
                e1: "pdcsi_e",
                np: "pdcsi",
                mgmt: "pdcsi_m"
            },
            WS2: {
                e1: "pdcws2_e",
                np: "pdcws2",
                mgmt: "pdcws2_m"
            }
        },
        S = {
            PROD: /(www|wwwglobal|author)\.playstation\.com/i,
            STAGE: /(author\.stage|stage)\.playstation\.com/i,
            PREVIEW: /preview\.www\.playstation\.com/i,
            WWWGLOBAL: /wwwglobal\.playstation\.com/i
        },
        L = {
            navFooter: "navFooter",
            userState: "userState",
            gpdcUser: "gpdcUser"
        },
        I = ({
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
        D = ({
            IS_PORTRAIT: I.IS_PORTRAIT.matches,
            IS_LANDSCAPE: I.IS_LANDSCAPE.matches,
            IS_JETSTREAM_MOBILE: I.IS_JETSTREAM_MOBILE.matches,
            IS_MOBILE: I.IS_MOBILE.matches,
            IS_MOBILE_PORTRAIT: I.IS_MOBILE_PORTRAIT.matches,
            IS_TABLET: I.IS_TABLET.matches,
            IS_MAX_TABLET: I.IS_MAX_TABLET.matches,
            IS_TABLET_LG: I.IS_TABLET_LG.matches,
            IS_LAPTOP: I.IS_LAPTOP.matches,
            IS_DESKTOP: I.IS_DESKTOP.matches
        }, {
            EMPTY_LABEL: "empty"
        }),
        T = "javascript:void(0);",
        x = function(e, r) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 180,
                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".playstation.com";
            if (r) {
                var a = new Date;
                a.setTime(a.getTime() + 60 * t * 1e3), document.cookie = "".concat(e, "=").concat(encodeURIComponent(r), "; expires=").concat(a.toUTCString(), ";path=/; domain=").concat(n, ";secure")
            }
        },
        P = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                r = document.cookie.match(new RegExp("(^| )".concat(e, "=([^;]*)(;|$)")));
            return r ? decodeURIComponent(r[2]) : null
        },
        O = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ".playstation.com";
            e && (document.cookie = "".concat(e, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=").concat(r, ";"))
        },
        C = function(e) {
            var r = null;
            try {
                r = JSON.parse(e)
            } catch (e) {}
            return r
        },
        U = function(e) {
            return !(!e || e === T)
        },
        R = function(e, r) {
            var t = new URL(e),
                n = new URLSearchParams(t.search);
            n.set(q.query, _gpdc.config.pdprQuery);
            var a = r && "psns" === t.protocol ? "".concat(t.protocol, ":").concat(t.path) : t.origin + t.pathname;
            return "".concat(a, "?").concat(n.toString()).concat(t.hash ? "".concat(t.hash) : "")
        },
        _ = function() {
            function e() {
                throw a(this, e), TypeError("new of abstract class Services")
            }
            return i(e, null, [{
                key: "callGetApi",
                value: function(e) {
                    var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "json";
                    return new Promise(function(n, a) {
                        $.ajax({
                            type: "GET",
                            url: e,
                            dataType: t,
                            crossDomain: !0,
                            xhrFields: {
                                withCredentials: !0
                            },
                            async: r,
                            success: function(e) {
                                n(e)
                            },
                            error: function(e) {
                                a(e)
                            }
                        })
                    })
                }
            }]), e
        }(),
        N = function() {
            function e(r) {
                a(this, e), this.elements = r, this.info = {}, this.uhCookie = P(E.UH), this.cookieEnv = S.PROD.test(location.href) ? "np" : S.STAGE.test(location.href) ? "mgmt" : "e1", this.oracleSession = "true" === P(E.ORACLE[this.cookieEnv])
            }
            return i(e, [{
                key: "setCatchpointTraces",
                value: function(e) {
                    window.RProfiler && (window.RProfiler.addInfo("tracepoint", "locale", _gpdc.config.locale || ""), window.RProfiler.addInfo("tracepoint", "loggedin", "".concat(e)))
                }
            }, {
                key: "setPlusUserState",
                value: function() {
                    var e = null;
                    try {
                        e = JSON.parse(decodeURIComponent(P(E.SUBSCRIPTION[this.cookieEnv])))
                    } catch (e) {
                        _gpdc.Logger.log("Plus Subscription cookie not found!")
                    }
                    return e ? (this.info.subscriptions = {}, e.psPlusSubscription && (this.info.subscriptions.plus = {
                        type: "psplus",
                        status: e.psPlusSubscription.status || null,
                        tier: e.psPlusSubscription.psPlusTier || null,
                        duration: (e.psPlusSubscription.isTrial ? "trial" : e.psPlusSubscription.duration) || null,
                        flag: e.psPlusSubscription.flag || null
                    }), e.loyaltySubscription && (this.info.subscriptions.loyalty = {
                        type: "loyalty",
                        status: e.loyaltySubscription.enrollStatus || null,
                        tier: e.loyaltySubscription.statusLevel || null
                    }), e.ubisoftPlusSubscription && (this.info.subscriptions.ubisoftPlus = {
                        type: "ubisoft-plus",
                        status: e.ubisoftPlusSubscription.status || null
                    }), void(e.gtaPlusSubscription && (this.info.subscriptions.gtaPlus = {
                        type: "gta-plus",
                        status: e.gtaPlusSubscription.status || null
                    }))) : void(this.info.subscriptions = null)
                }
            }, {
                key: "isUserMature",
                value: function(e) {
                    return !!this.info.age && this.info.age >= parseInt(this.elements.$body.data(e) || "17", 10)
                }
            }, {
                key: "fetchUserInfo",
                value: function() {
                    var e = this,
                        r = C(sessionStorage.getItem(L.gpdcUser));
                    return this.uhCookie && this.oracleSession && r && this.uhCookie === r.encrypted_id ? (this.info = r, Promise.resolve()) : this.uhCookie && this.oracleSession ? _.callGetApi(window._gpdc.config.baseIOUrl + A.userApi, !1).then(function(r) {
                        e.info = Object.assign(e.info, r), sessionStorage.setItem(L.gpdcUser, JSON.stringify(e.info))
                    }).catch(function(e) {
                        return _gpdc.Logger.log("user/details API error!", e)
                    }) : (sessionStorage.removeItem(L.gpdcUser), Promise.resolve())
                }
            }, {
                key: "getUserInfoFromCookies",
                value: function() {
                    return this.uhCookie && this.oracleSession ? (this.info.encrypted_id = this.uhCookie, this.info.isLoggedIn = !0, this.info.isArkhamLoggedIn = !0, this.setPlusUserState(), this.setCatchpointTraces(this.info.isLoggedIn), this.info) : (this.info.isLoggedIn = !1, this.info.isArkhamLoggedIn = !!this.oracleSession, this.setCatchpointTraces(this.info.isLoggedIn), this.info)
                }
            }, {
                key: "getUserProfileInfo",
                value: function() {
                    var e = this;
                    return new Promise(function(r) {
                        e.fetchUserInfo().then(function() {
                            e.info.online_id = (e.info.handle || "").replace(/"/, ""), e.info.age && (window.digitalData.user.profile.privacyInfo.ageOptOut = e.info.age < 16), e.info.isMature = e.isUserMature("age-threshold"), e.info.isPageRatingMature = !!e.elements.$body.data("advanced-age-gate") && e.isUserMature("rating-age-threshold"), e.setPlusUserState(), r()
                        })
                    })
                }
            }]), e
        }(),
        F = function() {
            function e(r) {
                a(this, e), this.elements = r, this.config = {}, this.baseIOUrl = "", this.init()
            }
            return i(e, [{
                key: "setIOBaseUrl",
                value: function() {
                    this.baseIOUrl = this.elements.$body.data("base-io-url") || ""
                }
            }, {
                key: "getRegion",
                value: function() {
                    return this.elements.$body.data("region") || "AMER"
                }
            }, {
                key: "getLocale",
                value: function() {
                    return this.elements.$body.data("locale") || "en-us"
                }
            }, {
                key: "getLocaleParts",
                value: function() {
                    return this.getLocale().split("-")
                }
            }, {
                key: "getLocaleFormat",
                value: function(e) {
                    var r = this.getLocaleParts(),
                        t = r.pop().toUpperCase();
                    return "".concat(r.join("-")).concat(e).concat(t)
                }
            }, {
                key: "getFormattedLocale",
                value: function() {
                    return this.getLocaleFormat("_")
                }
            }, {
                key: "getProductFormattedLocale",
                value: function() {
                    return this.getLocaleFormat("-")
                }
            }, {
                key: "getCountryCode",
                value: function() {
                    return this.getLocaleParts().pop().toUpperCase()
                }
            }, {
                key: "getIOBaseUrl",
                value: function() {
                    return this.baseIOUrl
                }
            }, {
                key: "getPageCategory",
                value: function() {
                    return this.elements.$body.data("page-category") || ""
                }
            }, {
                key: "getDataDirection",
                value: function() {
                    return this.elements.$html.attr("dir") || "ltr"
                }
            }, {
                key: "getSiteRunMode",
                value: function() {
                    return this.elements.$body.attr("data-run-mode") || "publish"
                }
            }, {
                key: "getTemplateName",
                value: function() {
                    return (this.elements.$body.data("template") || "").replace("pdc-", "")
                }
            }, {
                key: "init",
                value: function() {
                    this.setIOBaseUrl(), this.config.personalization = this.config.personalization || {}, this.config.personalization.teasersPresentOnPage = !1, this.config.isGetHelpTopicTemplate = !1, this.config.pageVars = this.config.pageVars = {}, this.config.personalization = this.config.personalization || {}, this.config.region = this.getRegion(), this.config.locale = this.getLocale(), this.config.formattedLocale = this.getFormattedLocale(), this.config.productFormattedLocale = this.getProductFormattedLocale(), this.config.countryCode = this.getCountryCode(), this.config.baseIOUrl = this.getIOBaseUrl(), this.config.pageCategory = this.getPageCategory(), this.config.textDirection = this.getDataDirection(), this.config.siteRunMode = this.getSiteRunMode(), this.config.templateName = this.getTemplateName(), this.config.aemVersion = k, this.config.pdprQuery = "", window.PDC = window.PDC || {}, window.PDC.Locale = {
                        Locale: [this.config.locale],
                        getLocale: function() {
                            return [window._gpdc.config.locale]
                        }
                    }
                }
            }]), e
        }(),
        B = function() {
            function e() {
                a(this, e), this.init()
            }
            return i(e, [{
                key: "init",
                value: function() {
                    this.elements = {}, this.elements.$window = $(window), this.elements.$document = $(document), this.elements.$html = $("html"), this.elements.$body = $("body"), this.elements.$gdk = $("#gdk__content"), this.elements.$head = this.elements.$html.find("head")
                }
            }]), e
        }(),
        j = function() {
            function e(r) {
                a(this, e), this.elements = r, this.browser = {
                    os: "unknown",
                    device: "unknown"
                }, this.init()
            }
            return i(e, [{
                key: "detectBrowser",
                value: function() {
                    var e = window.navigator && navigator.userAgent || "",
                        r = [],
                        t = !1;
                    /Android/i.test(e) && (r.push("os-android"), this.browser.os = "android"), /iPhone/i.test(e) && (t = !0, this.browser.device = "iphone", r.push("device-iphone")), /iPod/i.test(e) && (t = !0, this.browser.device = "ipod", r.push("device-ipod")), /iPad/i.test(e) && (t = !0, this.browser.device = "ipad", r.push("device-ipad")), /PlayStation 5/i.test(e) && (this.browser.device = "ps5", r.push("device-ps5"), "hide" !== sessionStorage.getItem(L.navFooter) && sessionStorage.setItem(L.navFooter, "hide")), /PLAYSTATION 4/i.test(e) && (this.browser.device = "ps4", r.push("device-ps4")), /PLAYSTATION 3/i.test(e) && (this.browser.device = "ps3", r.push("device-ps3")), /MSIE 10.0/i.test(e) && r.push("browser-ie10"), t && (r.push("os-ios"), this.browser.os = "ios"), this.elements.$html.addClass(r.join(" "))
                }
            }, {
                key: "isSupportedBrowser",
                value: function() {
                    var e = this,
                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = !0;
                    return this.browser && this.browser.os && this.browser.device && $.each(r, function(r, a) {
                        var o = a && a.os,
                            i = a && a.devices;
                        if (e.browser.os == o) return "object" == n(i) ? $.each(i, function(r, n) {
                            if (e.browser.device == n) return t = !1, !1
                        }) : "all" == i && (t = !1), !1
                    }), t
                }
            }, {
                key: "getViewport",
                value: function() {
                    return document.body ? window.getComputedStyle(document.body, ":after").content.replace(/"/g, "") : window.getComputedStyle(document.head, ":after").content.replace(/"/g, "")
                }
            }, {
                key: "getScrollbarWidth",
                value: function() {
                    $(document).ready(function() {
                        document.documentElement.style.setProperty("--scrollbar-width", window.innerWidth - document.documentElement.clientWidth + "px")
                    })
                }
            }, {
                key: "init",
                value: function() {
                    this.detectBrowser(), this.getScrollbarWidth(), this.browser.getViewport = this.getViewport, this.browser.isSupportedBrowser = this.isSupportedBrowser
                }
            }]), e
        }();
    window._gpdc = window._gpdc || {};
    var V = function() {
            function e() {
                a(this, e), this.init()
            }
            return i(e, [{
                key: "listenForUserConsent",
                value: function(e) {
                    document.addEventListener("evidonConsentState", function(r) {
                        "accept" === r.detail.consent && e()
                    })
                }
            }, {
                key: "isUserConsentedCookie",
                value: function() {
                    var e = P(E.LABELS.EU_COOKIE);
                    return e && "rejected" !== e
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        r = (new B).elements,
                        t = new F(r),
                        n = new j(r),
                        a = new N(r);
                    this.gpdc = window._gpdc, this.gpdc.elements = r, this.gpdc.config = t.config, this.gpdc.browser = n.browser, this.gpdc.components = {}, this.gpdc.isUserConsentedCookie = this.isUserConsentedCookie, this.gpdc.listenForUserConsent = this.listenForUserConsent, this.gpdc.user = a.getUserInfoFromCookies(), a.getUserProfileInfo().then(function() {
                        e.gpdc.user = Object.assign(e.gpdc.user, a.info), $.event.trigger({
                            type: "userInfoSet",
                            message: "user info has been set",
                            time: new Date
                        })
                    }), _gpdc.Logger.logInitializer("preload", "components", "GPDC")
                }
            }]), e
        }(),
        M = function() {
            function e() {
                a(this, e), this.init()
            }
            return i(e, [{
                key: "generateIOUrl",
                value: function(e, r) {
                    var t = _gpdc.config.baseIOUrl + A[e],
                        n = decodeURIComponent(location.href.replace(".com//", ".com/"));
                    return n = r && !_gpdc.user.isLoggedIn ? R(n, !1) : n, t.replace("LOCALE", _gpdc.config.formattedLocale).replace(/PAGE_URL/g, encodeURIComponent(n))
                }
            }, {
                key: "getGuestLocale",
                value: function(e, r) {
                    var t = window._gpdc.config.productFormattedLocale;
                    return e(t) ? r(t) : r()
                }
            }, {
                key: "onSignOut",
                value: function() {
                    return sessionStorage.removeItem(L.gpdcUser), Promise.resolve(!0)
                }
            }, {
                key: "init",
                value: function() {
                    var e = P(q.cookie);
                    window.psnWebToolbar = {
                        authLoginRedirectUri: this.generateIOUrl("loginApi", e),
                        authLogoutRedirectUri: this.generateIOUrl("logoutApi", e),
                        authSmcid: window.location.href.includes("/ps-plus/") ? "web:pdc:psplus" : "web:pdc"
                    }, psnWebToolbar.getGuestLocale = this.getGuestLocale, psnWebToolbar.onSignOut = this.onSignOut, window._gpdc.config.doSignIn = function() {
                        return psnWebToolbar.doSignIn()
                    }, _gpdc.Logger.logInitializer("preload", "components", "Oracle hooks")
                }
            }]), e
        }(),
        z = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        G = w(function(e, r) {
            ! function(e, t) {
                t(r)
            }(z, function(e) {
                function r(e, r) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r && (n = n.filter(function(r) {
                            return Object.getOwnPropertyDescriptor(e, r).enumerable
                        })), t.push.apply(t, n)
                    }
                    return t
                }

                function t(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(n), !0).forEach(function(r) {
                            c(e, r, n[r])
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
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

                function a(e, r) {
                    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
                }

                function o(e, r) {
                    for (var t = 0; t < r.length; t++) {
                        var n = r[t];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function i(e, r, t) {
                    return r && o(e.prototype, r), t && o(e, t), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }

                function c(e, r, t) {
                    return r in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t, e
                }

                function s() {
                    return s = Object.assign || function(e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }
                        return e
                    }, s.apply(this, arguments)
                }

                function l(e, r) {
                    return u(e) || d(e, r) || p(e, r) || m()
                }

                function u(e) {
                    if (Array.isArray(e)) return e
                }

                function d(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var n, a, o = [],
                            i = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(i = (n = t.next()).done) && (o.push(n.value), !r || o.length !== r); i = !0);
                        } catch (e) {
                            c = !0, a = e
                        } finally {
                            try {
                                i || null == t.return || t.return()
                            } finally {
                                if (c) throw a
                            }
                        }
                        return o
                    }
                }

                function p(e, r) {
                    if (e) {
                        if ("string" == typeof e) return g(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? g(e, r) : void 0
                    }
                }

                function g(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                    return n
                }

                function m() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }

                function f(e) {
                    return Array.isArray(e)
                }

                function h(e) {
                    return "boolean" == typeof e
                }
                var v = function() {
                        function e() {
                            a(this, e), this.isLocaleFirstSegment = !1, this.regexIndicator = "$/", this.dataLayerName = "digitalData", this.channel = "web", this.homePathname = "/", this.debug = !1
                        }
                        return i(e, [{
                            key: "setConfiguration",
                            value: function(e) {
                                s(this, e)
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
                    b = new v,
                    y = function(e) {
                        return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                    },
                    w = function() {
                        function e() {
                            a(this, e)
                        }
                        return i(e, [{
                            key: "logger",
                            value: function(e, r) {
                                var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    n = window.console[e];
                                r && t ? n(r) : r && !t ? n("GlobalDataLayer ".concat(e, ": ").concat(r)) : n()
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
                            value: function(e, r) {
                                this.logger("groupCollapsed", "🕵️‍♀️ Global Data Layer: ".concat(e), !0), this.logger("log", r, !0), this.logger("groupEnd")
                            }
                        }]), e
                    }(),
                    k = new w,
                    A = function() {
                        var e = window.location.pathname;
                        return b.isLocaleFirstSegment && (e = "/" === e.split("").pop() ? e : "".concat(e, "/"), e = e.replace(/^.+?[\/]/, "/")), e !== b.homePathname ? e : "/home"
                    },
                    q = function(e) {
                        var r = null,
                            t = !1,
                            n = A(),
                            a = n.replace(/\/?$/, "/");
                        return Object.keys(e).some(function(n) {
                            var o = !1;
                            return 0 === n.indexOf(b.regexIndicator) && a.match(n.replace(b.regexIndicator, "")) ? (o = !0, t = !0) : n.includes("*") && a.match(new RegExp("^" + n.replace(/\//g, "\\/").replace("*", "(.*)"))) ? o = !0 : a === n.replace(/\/?$/, "/") && (o = !0), o && (r = {
                                key: n,
                                match: e[n],
                                regex: t
                            }), o
                        }), r
                    },
                    E = function(e, r) {
                        b.debug && k.debug(e, r)
                    },
                    S = {
                        create: function(e) {
                            var r, t = {
                                pageInfo: {
                                    pageName: this.getPagename(e),
                                    emcid: null === e || void 0 === e ? void 0 : e.emcid,
                                    category: {
                                        primaryCategory: this.getPrimaryCategory(e)
                                    },
                                    sysEnv: this.getDeviceType(),
                                    destinationUrl: location.href,
                                    version: null !== (r = null === e || void 0 === e ? void 0 : e.app.env) && void 0 !== r ? r : "",
                                    sellableItems: "boolean" == typeof(null === e || void 0 === e ? void 0 : e.hasSellableItems) ? e.hasSellableItems : "empty"
                                }
                            };
                            return e && E("Page", t), t
                        },
                        getDeviceType: function() {
                            var e, r = "web",
                                t = null === (e = navigator.userAgent) || void 0 === e ? void 0 : e.toLowerCase();
                            return window.matchMedia("(max-width: 767px)").matches ? r = "mobile" : window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches ? r = "tablet" : t && /playstation 4/i.test(t) ? r = "ps4" : t && /playstation 5/i.test(t) && (r = "ps5"), r
                        },
                        getPrimaryCategory: function(e) {
                            if (!e) return "";
                            var r = A(),
                                t = "other";
                            if (e.primaryCategory) t = e.primaryCategory;
                            else if (e.isErrorPage) t = this.getPrimaryCategoryFromCallback(e);
                            else if ("/home" === r) t = "home";
                            else if (e.pageTypes) {
                                var n = q(e.pageTypes);
                                if (n) {
                                    var a = n.match;
                                    t = a
                                }
                            }
                            return t
                        },
                        getPrimaryCategoryFromCallback: function(e) {
                            var r = "other";
                            if ("function" != typeof e.isErrorPage) k.warn('The "isErrorPage" parameter should be a function, '.concat(n(e.isErrorPage), " given."));
                            else {
                                var t = e.isErrorPage();
                                "boolean" != typeof t ? k.warn('The "isErrorPage" function should return a boolean, '.concat(t, " was given.")) : t ? r = "error" : (delete e.isErrorPage, r = this.getPrimaryCategory(e))
                            }
                            return r
                        },
                        getPagename: function(e) {
                            if (!e) return "";
                            var r = A().toLowerCase().replace(/^\/|\/$/g, "");
                            if (e.pageNames) {
                                var t = q(e.pageNames);
                                if (t) {
                                    var n = t.key,
                                        a = t.match,
                                        o = t.regex,
                                        i = (o ? n.replace(b.regexIndicator, "") : n.replace("/*", "")).replace(/^\/|\/$/g, "");
                                    r = r.replace(o ? new RegExp(i) : i, a)
                                }
                            }
                            var c = r.split("/").filter(function(e) {
                                return "" !== e
                            });
                            return c.unshift(e.app.name), c.unshift(b.channel), c.map(y).join(":")
                        }
                    },
                    L = {
                        create: function(e) {
                            var r = e ? "".concat(b.channel, "-").concat(e.app.name, ":").concat(e.app.version, ":empty") : "";
                            return e && E("Page instance", r), r
                        }
                    },
                    I = function(e) {
                        var r, t, n, a, o;
                        return {
                            subscriptionType: null !== (r = e.type) && void 0 !== r ? r : null,
                            subscriptionStatus: null !== (t = e.status) && void 0 !== t ? t : null,
                            subscriptionTier: null !== (n = e.tier) && void 0 !== n ? n : null,
                            subscriptionDuration: null !== (a = e.duration) && void 0 !== a ? a : null,
                            subscriptionFlag: null !== (o = e.flag) && void 0 !== o ? o : null
                        }
                    },
                    D = {
                        create: function(e) {
                            var r, t, n, a, o, i, c, s, l, u, d, p, g, m = {
                                visitorType: (null === (r = null === e || void 0 === e ? void 0 : e.user) || void 0 === r ? void 0 : r.id) ? "signed_in" : "guest",
                                plusUser: null,
                                plusSubscriptionState: null,
                                hashedRepeatId: null === (t = null === e || void 0 === e ? void 0 : e.user) || void 0 === t ? void 0 : t.hashedRepeatId
                            };
                            (null === e || void 0 === e ? void 0 : e.user) && (m = this.setPlusSubscriptionState(m, e));
                            var f = null !== (o = null === (a = null === (n = null === e || void 0 === e ? void 0 : e.user) || void 0 === n ? void 0 : n.privacy) || void 0 === a ? void 0 : a.ws2Settings) && void 0 !== o ? o : {},
                                h = f.personalizedads,
                                v = f.personalizedrecommendations,
                                b = f.personalizedmedia,
                                y = f.personalizedmaster,
                                w = {
                                    profile: {
                                        privacyInfo: {
                                            caPrivacyOptOut: null !== (s = null === (c = null === (i = null === e || void 0 === e ? void 0 : e.user) || void 0 === i ? void 0 : i.privacy) || void 0 === c ? void 0 : c.caPrivacyOptOut) && void 0 !== s && s,
                                            ageOptOut: null !== (d = null === (u = null === (l = null === e || void 0 === e ? void 0 : e.user) || void 0 === l ? void 0 : l.privacy) || void 0 === u ? void 0 : u.ageOptOut) && void 0 !== d ? d : null,
                                            ws2Settings: {
                                                personalizedAds: h ? "".concat(h, " personalized advertising") : null,
                                                personalizedRecommendations: v ? "".concat(v, " purchase recommendations") : null,
                                                personalizedMedia: b ? "".concat(b, " personalized media") : null,
                                                personalizedMaster: y ? "".concat(y, " basic personalization") : null
                                            }
                                        },
                                        profileInfo: {
                                            profileID: null !== (g = null === (p = null === e || void 0 === e ? void 0 : e.user) || void 0 === p ? void 0 : p.id) && void 0 !== g ? g : null,
                                            language: e ? this.getLocale(e) : "",
                                            attributes: m
                                        }
                                    }
                                };
                            return e && E("User", w), w
                        },
                        setPlusSubscriptionState: function(e, r) {
                            var t, n, a, o;
                            if ("boolean" == typeof r.user.plus) return e.plusUser = r.user.plus ? "plususer" : "nonplususer", e;
                            var i = [];
                            return (null === (t = r.user.subscriptions) || void 0 === t ? void 0 : t.plus) && i.push(I(r.user.subscriptions.plus)), (null === (n = r.user.subscriptions) || void 0 === n ? void 0 : n.loyalty) && i.push(I(r.user.subscriptions.loyalty)), (null === (a = r.user.subscriptions) || void 0 === a ? void 0 : a.gtaPlus) && i.push(I(r.user.subscriptions.gtaPlus)), (null === (o = r.user.subscriptions) || void 0 === o ? void 0 : o.ubisoftPlus) && i.push(I(r.user.subscriptions.ubisoftPlus)), e.plusSubscriptionState = i.length ? i : null, e
                        },
                        getLocale: function(e) {
                            var r = "";
                            return e.locale && e.locale.includes("-") ? (r = e.locale, r.split("-").reverse().join("-")) : (k.warn(e.locale ? "The given locale code ".concat(e.locale, ' is not a valid "language-country" code.') : "The locale code is a mandatory parameter."), "invalid-locale")
                        }
                    },
                    T = function() {
                        return {
                            page: S.create(),
                            user: D.create(),
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
                    x = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                                reset: !0
                            },
                            r = b.dataLayerName;
                        return e.reset && (window[r] = T()), window[r]
                    },
                    P = function(e, r) {
                        var t = x({
                            reset: !1
                        });
                        t.event.push(r), E(e, r)
                    },
                    O = ["button", "image", "video", "link", "form", "popup"],
                    C = ["click", "impression", "search", "invalid-action"],
                    U = function() {
                        return Math.round((new Date).getTime() / 1e3)
                    },
                    R = function() {
                        function e(r, t) {
                            a(this, e);
                            var n, o, i, c, s, l, u, d;
                            r = this.transform(r), P("".concat(t, " event"), {
                                eventInfo: {
                                    eventName: r.name,
                                    timeStamp: U(),
                                    eventAction: null !== (n = r.eventAction) && void 0 !== n ? n : null
                                },
                                attributes: {
                                    assetName: null !== (o = r.assetName) && void 0 !== o ? o : null,
                                    linkURL: null !== (i = r.linkURL) && void 0 !== i ? i : null,
                                    label: null !== (c = r.label) && void 0 !== c ? c : null,
                                    userActionFlag: null !== (s = r.userActionFlag) && void 0 !== s && s,
                                    moduleName: null !== (l = r.moduleName) && void 0 !== l ? l : "invalid-module",
                                    elementType: null !== (u = r.elementType) && void 0 !== u ? u : "invalid-element",
                                    position: null !== (d = r.position) && void 0 !== d ? d : null
                                }
                            })
                        }
                        return i(e, [{
                            key: "transform",
                            value: function(e) {
                                return e.userActionFlag && !h(e.userActionFlag) && (k.warn('the "userActionFlag" value needs to be a boolean, '.concat(n(e.userActionFlag), " given.")), e.userActionFlag = !1), e.moduleName || k.warn('the "moduleName" property is required.'), e.elementType ? O.includes(e.elementType) || (k.warn('the "elementType" property is invalid.'), delete e.elementType) : k.warn('the "elementType" property is required.'), e.eventAction && !C.includes(e.eventAction) && (k.warn('the "eventAction" property is invalid.'), e.eventAction = "invalid-action"), e
                            }
                        }]), e
                    }(),
                    _ = {
                        create: function(e, r) {
                            new R(t(t({}, r), {}, {
                                name: e,
                                eventAction: "click"
                            }), "Click")
                        }
                    },
                    N = {
                        create: function(e, r) {
                            new R(t(t({}, r), {}, {
                                name: e,
                                eventAction: "impression"
                            }), "Impression")
                        }
                    },
                    F = i(function e(r, n, o) {
                        a(this, e);
                        var i = x({
                            reset: !1
                        });
                        n || (k.warn("".concat(r, " - name is required.")), n = "invalid-name");
                        var c = t(t({}, o), {}, {
                            componentInfo: t(t({}, o.componentInfo), {}, {
                                componentName: n.toLowerCase()
                            })
                        });
                        i.component.push(c), E(r, c)
                    }),
                    B = "Product component",
                    j = function(e) {
                        return e.ageRating && !f(e.ageRating) && (k.warn("".concat(B, " - ageRating should be an array of strings, ").concat(n(e.ageRating), " given.")), delete e.ageRating), e
                    },
                    V = {
                        create: function(e) {
                            var r, t, n, a, o, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            i = j(i), new F(B, e, {
                                componentInfo: {
                                    componentID: null !== (r = i.sku) && void 0 !== r ? r : null
                                },
                                category: {
                                    primaryCategory: "product"
                                },
                                attributes: {
                                    ageRating: i.ageRating ? i.ageRating.join(",") : null,
                                    developer: null !== (t = i.developer) && void 0 !== t ? t : null,
                                    publisher: null !== (n = i.publisher) && void 0 !== n ? n : null,
                                    releaseDate: null !== (a = i.releaseDate) && void 0 !== a ? a : null,
                                    genre: null !== (o = i.genre) && void 0 !== o ? o : null
                                }
                            })
                        }
                    },
                    M = function(e, r) {
                        e.commerceEvent = {
                            eventInfo: {
                                eventName: r
                            }
                        }
                    },
                    z = function(e) {
                        return e.genres && Array.isArray(e.genres) && (e.genres = e.genres.join(",")), e
                    },
                    G = ["conceptId", "id", "skuIds"],
                    H = function(e, r) {
                        var t, n, a, o, i, c, s, l, u, d, p, g, m = !0;
                        if (G.forEach(function(e) {
                                r[e] && (m = !1)
                            }), m) return k.warn("Product View event not fired as ".concat(G.join(", "), " parameters are all missing.")), !1;
                        r = z(r);
                        var f = {
                            productInfo: {
                                productID: null !== (t = r.id) && void 0 !== t ? t : null,
                                conceptID: null !== (n = r.conceptId) && void 0 !== n ? n : null,
                                productName: null !== (a = r.name) && void 0 !== a ? a : null,
                                productIDproductName: "".concat(r.id, ":").concat(null !== (o = r.name) && void 0 !== o ? o : null),
                                productType: null !== (i = r.type) && void 0 !== i ? i : null,
                                sku: null !== (c = r.skuIds) && void 0 !== c ? c : null,
                                productGenre: null !== (s = r.genres) && void 0 !== s ? s : null,
                                productReleaseDate: null !== (l = r.releaseDate) && void 0 !== l ? l : null,
                                productPrice: null !== (d = null === (u = r.price) || void 0 === u ? void 0 : u.toString()) && void 0 !== d ? d : null,
                                currency: null !== (p = r.priceCurrency) && void 0 !== p ? p : null,
                                merchandisingCategory: null !== (g = r.merchandisingCategory) && void 0 !== g ? g : null
                            }
                        };
                        return e.product.push(f), f
                    },
                    $ = {
                        init: function(e) {
                            e = Array.isArray(e) ? e : [e];
                            var r = x({
                                    reset: !1
                                }),
                                t = [];
                            e.forEach(function(e) {
                                var n = H(r, e);
                                n && (t.push(n), E("Product view", n))
                            }), t.length && M(r, "product_view")
                        }
                    },
                    J = "Form component",
                    Y = function(e) {
                        return e
                    },
                    Q = {
                        create: function(e) {
                            var r, t, n, a, o, i, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            c = Y(c), new F(J, e, {
                                componentInfo: {
                                    componentID: null !== (r = c.id) && void 0 !== r ? r : null
                                },
                                category: {
                                    primaryCategory: "form"
                                },
                                attributes: {
                                    formStep: null !== (t = c.formStep) && void 0 !== t ? t : null,
                                    description: null !== (n = c.description) && void 0 !== n ? n : null,
                                    formStepFlag: null !== (a = c.formStepFlag) && void 0 !== a ? a : null,
                                    isUserFlowStart: null !== (o = c.isUserFlowStart) && void 0 !== o ? o : null,
                                    isUserFlowComplete: null !== (i = c.isUserFlowComplete) && void 0 !== i ? i : null
                                }
                            })
                        }
                    },
                    W = "Media component",
                    Z = ["auto", "manual"],
                    K = ["live", "vod"],
                    X = ["short", "long"],
                    ee = function(e) {
                        return e.componentType && !Z.includes(e.componentType) && (k.warn("".concat(W, ' - "componentType" can only be one of the following values: ').concat(Z.join(", "), ".")), e.componentType = "invalid-component-type"), e.subCategory1 && !K.includes(e.subCategory1) && (k.warn("".concat(W, ' - "subCategory1" can only be one of the following values: ').concat(K.join(", "), ".")), e.subCategory1 = "invalid-sub-category"), e.format && !X.includes(e.format) && (k.warn("".concat(W, ' - "format" can only be one of the following values: ').concat(X.join(", "), ".")), e.format = "invalid-format"), e
                    },
                    re = {
                        create: function(e) {
                            var r, t, n, a, o, i, c, s, l, u, d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            d = ee(d), new F(W, e, {
                                componentInfo: {
                                    componentID: null !== (r = d.id) && void 0 !== r ? r : null
                                },
                                category: {
                                    primaryCategory: "video"
                                },
                                attributes: {
                                    subCategory1: null !== (t = d.subCategory1) && void 0 !== t ? t : null,
                                    subCategory2: null !== (n = d.subCategory2) && void 0 !== n ? n : null,
                                    componentType: null !== (a = d.componentType) && void 0 !== a ? a : null,
                                    componentURL: null !== (o = d.componentURL) && void 0 !== o ? o : null,
                                    format: null !== (i = d.format) && void 0 !== i ? i : null,
                                    network: null !== (c = d.network) && void 0 !== c ? c : null,
                                    tmsChannelID: null !== (s = d.tmsChannelID) && void 0 !== s ? s : null,
                                    tmsAiringID: null !== (l = d.tmsAiringID) && void 0 !== l ? l : null,
                                    entryPoint: null !== (u = d.entryPoint) && void 0 !== u ? u : null
                                }
                            })
                        }
                    },
                    te = {
                        create: function(e, r) {
                            new R(t(t({}, r), {}, {
                                name: e
                            }), "Generic")
                        }
                    },
                    ne = {
                        create: function(e) {
                            P("Raw event", e)
                        }
                    },
                    ae = "Generic component",
                    oe = {
                        create: function(e, r) {
                            var n, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                o = null !== (n = a.id) && void 0 !== n ? n : null;
                            o && delete a.id, r || (k.warn("".concat(ae, " - the category argument is required.")), r = "invalid-category"), new F(ae, e, {
                                componentInfo: {
                                    componentID: o
                                },
                                category: {
                                    primaryCategory: r
                                },
                                attributes: t({}, a)
                            })
                        }
                    },
                    ie = ["name", "currency"],
                    ce = ["cart_add", "in_cart", "add_pre_order", "add_to_library", "wishlist_add", "wishlist_remove", "subscribe", "buy", "download", "upgrade"],
                    se = function(e, r) {
                        return r ? (isNaN(r) ? (k.warn('The "'.concat(e, '" parameter should be a number, ').concat(n(r), " given.")), r = 0) : r = parseFloat(r.toFixed(2)), r) : r
                    },
                    le = function(e, r, t) {
                        ie.forEach(function(e) {
                            t[e] || (k.warn("The ".concat(e, " parameter is required.")), t[e] = "invalid-".concat(e))
                        });
                        var a = t.name,
                            o = t.sku,
                            i = t.currency,
                            c = t.category,
                            s = t.productDiscount,
                            l = t.productDiscountType,
                            u = t.price;
                        Number.isInteger(parseInt(r)) || (k.warn('The "quantity" parameter should be a number, '.concat(n(r), " given.")), r = 0), u = se("price", u);
                        var d = {
                            quantity: "string" == typeof r ? parseInt(r) : r,
                            price: {
                                basePrice: null !== u && void 0 !== u ? u : null,
                                totalBasePrice: u ? u * r : null
                            },
                            productInfo: {
                                productID: "".concat(a, ":").concat(o),
                                productName: a,
                                sku: o,
                                merchandisingCategory: c
                            }
                        };
                        s && (d.productDiscount = se("productDiscount", s)), l && (d.productDiscountType = l);
                        var p = {
                            price: {
                                currency: i.toLowerCase()
                            },
                            item: d
                        };
                        return e.cartInstance = p, p
                    },
                    ue = {
                        init: function(e, r) {
                            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "cart_add";
                            if (!ce.includes(t)) return void k.warn("The event name: ".concat(t, " is not allowed. Allowed event names: ").concat(ce.join(", "), "."));
                            var n = x({
                                    reset: !1
                                }),
                                a = le(n, e, r);
                            M(n, "".concat(t, "_").concat(Date.now())), E(t, a)
                        }
                    },
                    de = ["system-error", "user-error"],
                    pe = ["errorSeverity", "errorCode", "errorDescription"],
                    ge = function() {
                        function e(r, t) {
                            a(this, e);
                            var n, o, i, c = this.transform(r, t),
                                s = l(c, 2);
                            r = s[0], t = s[1];
                            var u = x({
                                    reset: !1
                                }),
                                d = {
                                    errorInfo: {
                                        errorName: r
                                    },
                                    category: {
                                        primaryCategory: "error"
                                    },
                                    attributes: {
                                        errorAPIURL: null !== (n = t.errorAPIURL) && void 0 !== n ? n : null,
                                        errorLocation: null !== (o = t.errorLocation) && void 0 !== o ? o : null,
                                        errorType: null !== (i = t.errorType) && void 0 !== i ? i : null,
                                        errorSeverity: t.errorSeverity,
                                        errorCode: t.errorCode,
                                        errorDescription: t.errorDescription
                                    }
                                };
                            E("Error component", d), u.component.push(d)
                        }
                        return i(e, [{
                            key: "transform",
                            value: function(e, r) {
                                return e || (k.warn("ErrorComponent - name is required."), e = "invalid-error-name"), r || (r = {}), pe.forEach(function(e) {
                                    r[e] || (k.warn("ErrorComponent - ".concat(e, " is required.")), r[e] = "invalid-".concat(e))
                                }), r.errorType && !de.includes(r.errorType) && (k.warn('"errorType" can only be one of the following values: '.concat(de.join(", "), ".")), r.errorType = "invalid-error-type"), [e, r]
                            }
                        }]), e
                    }(),
                    me = function(e) {
                        return e.term ? "number" != typeof e.count ? (k.warn('Search event not fired as "count" parameter is missing or not a number.'), !1) : !(!e.type || !["manual", "auto"].includes(e.type)) || (k.warn('Search event not fired as "type" parameter is missing or invalid.'), !1) : (k.warn('Search event not fired as "term" parameter is missing.'), !1)
                    },
                    fe = {
                        track: function(e) {
                            if (!me(e)) return !1;
                            var r = x({
                                    reset: !1
                                }),
                                t = {
                                    onsiteSearchTerm: e.term,
                                    onsiteSearchResults: e.count,
                                    onsiteSearchType: e.type
                                };
                            e.categories && Object.keys(e.categories).forEach(function(r) {
                                var n = r.charAt(0).toUpperCase() + r.slice(1);
                                t["onsiteSearchResults".concat(n)] = e.categories[r]
                            }), r.search.push(t), window._satellite.track("search"), E("Search", t)
                        }
                    },
                    he = ["conceptId", "name", "skuId"],
                    ve = function(e, r) {
                        var t, n, a, o, i, c, s, l, u, d, p, g, m, f = !0;
                        if (he.forEach(function(e) {
                                r[e] && (f = !1)
                            }), f) return k.warn("Product Impression event not fired as ".concat(he.join(", "), " parameters are all missing.")), !1;
                        var h = {
                            quantity: null !== (t = r.quantity) && void 0 !== t ? t : 1,
                            productDiscount: null !== (a = null === (n = r.discount) || void 0 === n ? void 0 : n.toString()) && void 0 !== a ? a : null,
                            discountType: null !== (o = r.discountType) && void 0 !== o ? o : null,
                            currency: null !== (i = r.priceCurrency) && void 0 !== i ? i : null,
                            productPrice: null !== (s = null === (c = r.price) || void 0 === c ? void 0 : c.toString()) && void 0 !== s ? s : null,
                            productInfo: {
                                conceptID: null !== (l = r.conceptId) && void 0 !== l ? l : null,
                                productID: "".concat(null !== (u = r.name) && void 0 !== u ? u : null, ":").concat(null !== (d = r.skuId) && void 0 !== d ? d : null),
                                productName: null !== (p = r.name) && void 0 !== p ? p : null,
                                sku: null !== (g = r.skuId) && void 0 !== g ? g : null,
                                merchandisingCategory: null !== (m = r.merchandisingCategory) && void 0 !== m ? m : null
                            }
                        };
                        return e.productImpression.item.push(h), h
                    },
                    be = {
                        init: function(e) {
                            e = Array.isArray(e) ? e : [e];
                            var r = x({
                                reset: !1
                            });
                            e.forEach(function(e) {
                                var t = ve(r, e);
                                t && E("Product Impression", t)
                            })
                        }
                    },
                    ye = function(e, r) {
                        e.tournamentEvent = {
                            eventInfo: {
                                eventName: r
                            }
                        }
                    },
                    we = ["id"],
                    ke = ["tournament_registration", "tournament_withdrawal", "tournament_selected"],
                    Ae = function(e, r) {
                        we.forEach(function(e) {
                            r[e] || (k.warn("The ".concat(e, " parameter is required.")), r[e] = "invalid-".concat(e))
                        });
                        var t = r.id,
                            n = r.joinableStatus,
                            a = r.maxPlayers,
                            o = r.matchStatus,
                            i = r.prizePool,
                            c = r.prizeCurrency,
                            s = r.entryCondition,
                            l = r.userOccurrenceStatus,
                            u = {
                                tournamentId: t,
                                tournamentJoinableStatus: n,
                                tournamentMaxPlayers: a,
                                tournamentMatchStatus: o,
                                tournamentPrizePool: i,
                                tournamentPrizeCurrency: c,
                                tournamentEntryCondition: s,
                                tournamentUserOccurrenceStatus: l
                            };
                        return e.tournamentInfo = {
                            attributes: u
                        }, {
                            attributes: u
                        }
                    },
                    qe = {
                        init: function(e) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tournament_selected";
                            if (!ke.includes(r)) return void k.warn("The event name: ".concat(r, " is not allowed. Allowed event names: ").concat(ke.join(", "), "."));
                            var t = x({
                                    reset: !1
                                }),
                                n = Ae(t, e);
                            ye(t, "".concat(r, "_").concat(Date.now())), E(r, n)
                        }
                    },
                    Ee = {
                        pageview: function(e) {
                            var r, t = x();
                            e.locale && 1 === location.pathname.indexOf(e.locale) ? b.setLocaleIsFirstSegment(!0) : b.setLocaleIsFirstSegment(!1), b.setDebugStatus(null !== (r = e.debug) && void 0 !== r && r), t.page = S.create(e), t.user = D.create(e), t.pageInstanceID = L.create(e)
                        },
                        use: function(e) {
                            return "object" !== n(e) ? void k.warn("The given plugin is not a valid object.") : "function" != typeof e.install ? void k.warn("The given plugin doesn't implement an install method.") : void e.install(Ee)
                        },
                        config: function(e) {
                            b.setConfiguration(e)
                        },
                        event: {
                            click: _.create,
                            impression: N.create,
                            generic: te.create,
                            raw: ne.create
                        },
                        search: fe.track,
                        component: {
                            product: V.create,
                            form: Q.create,
                            media: re.create,
                            generic: oe.create
                        },
                        ecommerce: {
                            product: {
                                view: $.init,
                                impression: be.init
                            },
                            cart: {
                                add: ue.init
                            }
                        },
                        tournament: {
                            track: qe.init
                        },
                        error: function(e, r) {
                            new ge(e, r)
                        }
                    };
                e.default = Ee, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            })
        }),
        H = y(G),
        J = function() {
            function e() {
                throw a(this, e), TypeError("new of abstract class DDLUtils")
            }
            return i(e, null, [{
                key: "stripStartCharacter",
                value: function(r) {
                    return e.isValidString(r) ? r.replace(/^(#|\.)/, "") : r
                }
            }, {
                key: "isValidElement",
                value: function(e) {
                    return e instanceof Element
                }
            }, {
                key: "convertJQueryElement",
                value: function(e) {
                    return "undefined" != typeof jQuery && e instanceof jQuery ? e[0] : e
                }
            }, {
                key: "isValidString",
                value: function(e) {
                    return "string" == typeof e
                }
            }, {
                key: "slugifyString",
                value: function(r, t) {
                    return e.isValidString(r) ? (r = String.prototype.trim ? r.trim() : r, r.toLowerCase().replace(/\s+/g, t || "-")) : ""
                }
            }, {
                key: "truncateString",
                value: function(r, t) {
                    var n = parseInt(t, 10) || 150,
                        a = e.isValidString(r) ? r : "";
                    return a = a.trim().replace(/(\n|\t)/g, " ").replace(/\s+/g, " "), a.length > n ? a.substr(0, n) + "..." : a
                }
            }, {
                key: "logging",
                value: function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info";
                    return window.freezeLinksForTesting && window.console && window.console[r] ? (window.console[r]("DIGITAL DATA OBJECT: ".concat(e, ".\n"), window.digitalData), "".concat(r.toUpperCase(), ":").concat(e)) : e
                }
            }, {
                key: "isFrozenLinks",
                value: function() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.search;
                    return window.freezeLinksForTesting = !1, r.match(/preventDefault=true/) && (window.freezeLinksForTesting = !0, e.logging("initial page impression")), window.freezeLinksForTesting
                }
            }, {
                key: "frozenLinkMessaging",
                value: function() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Unspecified type";
                    return e.logging("".concat(r, " added"))
                }
            }, {
                key: "getQueryString",
                value: function(r) {
                    var t = {};
                    return e.isValidString(r) && (r = r.replace(/^\?/, ""), r.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(e, r, n) {
                        r && (t[decodeURI(r)] = decodeURI(n))
                    })), t
                }
            }, {
                key: "setQueryString",
                value: function(e) {
                    var r, t = [];
                    if ("object" === n(e))
                        for (r in e) e.hasOwnProperty(r) && t.push(encodeURI(r) + "=" + encodeURI(e[r]));
                    return t.length ? "?" + t.join("&") : ""
                }
            }, {
                key: "sanitizeURIObject",
                value: function(e) {
                    var r = (e.hash || "").split("?");
                    return !e.search && e.hash && r && (e.search = r[1] || "", e.hash = r[0] || ""), e
                }
            }, {
                key: "parseUri",
                value: function() {
                    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = e.sanitizeURIObject(new URL(r));
                    return t.queryObject = e.getQueryString(t.search), t
                }
            }, {
                key: "jsonParseUtility",
                value: function(e) {
                    try {
                        var r = {};
                        return e && "string" == typeof e && (e = e.replace(/&quot;/gi, '"'), r = JSON.parse(e)), r
                    } catch (r) {
                        throw "DigitalDataLayer Events API: Translating JSON object failed - " + e
                    }
                }
            }]), e
        }(),
        Y = {
            debugDataLayer: window.location.href.includes("showDTMObject=true"),
            frozenLinks: window.location.href.includes("preventDefault=true"),
            regexes: {
                store: /^(https?\:)?(\/{2})(store\.(playstation|sonyentertainmentnetwork))/,
                psns: /^(psns\:browse)/,
                direct: /^(https?\:)?(\/{2})(direct\.(playstation|sonyentertainmentnetwork))/
            },
            emcidElements: [".return-url-link", ".sign-out-btn a", "#sb-signin-link", "#sb-social-toolbar-root"],
            dtmAttributes: {
                track: "data-track",
                trackwrapper: "data-track-wrapper",
                modulename: "data-track-modulename",
                noclickdelay: "data-track-noclickdelay"
            },
            clickableElements: ["button[data-track]", 'input[type="button"][data-track]', 'input[type="cancel"][data-track]', 'input[type="reset"][data-track]', 'input[type="submit"][data-track]', "a[data-track]", "div[data-track]"].join(","),
            allBtnElms: ["button", 'input[type="button"]', 'input[type="cancel"]', 'input[type="reset"]', 'input[type="submit"]', ".dtm-type-button", ".link-btn", ".in-line-tab-item"].join(","),
            allVideoElems: [".cq-dd-video", ".lb_youtube", ".lb_s7video"].join(","),
            imagePathRegex: /image\/SIEPDC|content\/SIEPDC|\/images|\/videos/i
        },
        Q = function() {
            function e() {
                throw a(this, e), TypeError("new of abstract class EventUtils")
            }
            return i(e, null, [{
                key: "findActiveElement",
                value: function(e, r, t) {
                    var n, a, o = r || ["a", "button", "input"],
                        i = t || {
                            method: "closest"
                        },
                        c = o.length;
                    if (J.isValidElement(e)) {
                        for (n = e.tagName.toLowerCase(), a = 0; a < c; a += 1)
                            if (n === o[a]) return e;
                        return e[i.method](o.join(",")) || e
                    }
                    return null
                }
            }, {
                key: "returnActiveElement",
                value: function(r, t) {
                    var n = e.findActiveElement(t);
                    return r === n ? r : n
                }
            }, {
                key: "getParentModule",
                value: function(e) {
                    var r = ["div[" + Y.dtmAttributes.modulename + "]", "div.moduleComponent", "div.dtmTrackModule", "div[id]", "nav"];
                    return e.closest(r.join(","))
                }
            }, {
                key: "createModuleName",
                value: function(r, t) {
                    var n = e.getParentModule(r);
                    if (n) {
                        if (n.hasAttribute(Y.dtmAttributes.modulename)) return n.getAttribute(Y.dtmAttributes.modulename);
                        if (n.className) return n.className.trim().split(" ")[0];
                        if (n.hasAttribute("id")) return n.getAttribute("id").match(/^[a-zA-Z0-9\-]+/i)[0]
                    }
                    return t || "unknown"
                }
            }, {
                key: "getTarget",
                value: function(e) {
                    var r = e.getAttribute("target") || "_self";
                    return r.toLowerCase().trim().replace("_", "")
                }
            }, {
                key: "isTargetBlank",
                value: function(r) {
                    var t = J.isValidString(r) ? r : e.getTarget(r);
                    return "blank" === t
                }
            }, {
                key: "isButton",
                value: function(e) {
                    return e.matches(Y.allBtnElms)
                }
            }, {
                key: "isVideo",
                value: function(e) {
                    return e.matches(Y.allVideoElems)
                }
            }, {
                key: "isForm",
                value: function(e) {
                    return "submit" === e.getAttribute("type") ? e.closest("form") : null
                }
            }, {
                key: "isLightBoxTrigger",
                value: function(e) {
                    return e.classList.contains("cboxElement")
                }
            }, {
                key: "isTrackDelayOptOut",
                value: function(e) {
                    return !!e.getAttribute(Y.dtmAttributes.noclickdelay)
                }
            }, {
                key: "isAjaxAPI",
                value: function(e) {
                    return !(!e.getAttribute("data-api") && !e.getAttribute("data-apiurl"))
                }
            }, {
                key: "isPageRefreshing",
                value: function(r, t, n) {
                    var a = !!n && e.isAjaxAPI(n);
                    return !(!r || /^(#|(javascript|psns)\:)/i.test(r) || e.isTargetBlank(t) || a)
                }
            }, {
                key: "checkDataTrackFromParent",
                value: function(e) {
                    var r = e.getAttribute(Y.dtmAttributes.trackwrapper);
                    return r && "true" === r ? e.closest("[" + Y.dtmAttributes.track + "]") || e : e
                }
            }, {
                key: "getLinkURL",
                value: function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = e.getAttribute("href") || e.getAttribute("data-href");
                    return U(t) ? t && t.indexOf("//") > -1 ? t.split("//")[1] : t : r.linkUrl || r.linkURL || D.EMPTY_LABEL
                }
            }, {
                key: "getFormattedText",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return e ? e.trim().replace(/[^a-zA-Z0-9]/g, "-").toLowerCase() : e
                }
            }, {
                key: "getLabel",
                value: function(r, t) {
                    if (e.isVideo(r)) return D.EMPTY_LABEL;
                    var n = e.getFormattedText((r.innerText || r.getAttribute("value") || "").trim()),
                        a = n ? J.truncateString(n) : D.EMPTY_LABEL;
                    return a !== D.EMPTY_LABEL ? a : t && t !== D.EMPTY_LABEL ? t : a
                }
            }, {
                key: "getClosestSectionPersName",
                value: function(e) {
                    try {
                        var r = e.closest("section");
                        return r.getAttribute("data-persname") || null
                    } catch (e) {
                        return null
                    }
                }
            }, {
                key: "getElemType",
                value: function(r) {
                    return e.isButton(r) ? "button" : e.isVideo(r) ? "video" : "link"
                }
            }, {
                key: "getImageName",
                value: function(e) {
                    if (!e) return D.EMPTY_LABEL;
                    if (e.indexOf("/") > -1 && Y.imagePathRegex.test(e)) {
                        var r = e.substring(e.lastIndexOf("/") + 1);
                        return r.indexOf("?") > -1 && (r = r.split("?")[0]), r.indexOf(".") > -1 && (r = r.split(".")[0].trim()), r.startsWith("-") && (r = r.slice(1).trim()), r
                    }
                    return e
                }
            }, {
                key: "getAssetName",
                value: function(r) {
                    var t, n = r.querySelector("iframe,img,video");
                    if (n) try {
                        var a = J.parseUri(n.getAttribute("src"));
                        t = a.file || a.pathname
                    } catch (e) {
                        t = n.getAttribute("src")
                    }
                    return e.getImageName(t)
                }
            }, {
                key: "getPosition",
                value: function(e, r) {
                    if (r.position || r.impressionCount) return r.position;
                    try {
                        return e.getAttribute("data-cusposition") || "1"
                    } catch (e) {
                        return _gpdc.Logger.log('DDL Event Tracker :: "data-cusposition" not found'), "1"
                    }
                }
            }, {
                key: "addClickDelay",
                value: function(r, t) {
                    if (window.freezeLinksForTesting) return t.preventDefault(), !1;
                    if (J.isValidElement(r) && !e.isTrackDelayOptOut(r)) {
                        var n = e.isForm(r),
                            a = e.getTarget(r),
                            o = n ? n.getAttribute("action") : r.getAttribute("href");
                        if (!e.isPageRefreshing(o, a, n)) return o;
                        t.preventDefault();
                        var i = setTimeout(function() {
                            clearTimeout(i), n ? n.submit() : window[a].location = o
                        }, 500);
                        return o
                    }
                }
            }, {
                key: "getEventInfo",
                value: function(r) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = J.convertJQueryElement(r);
                    n = J.isValidElement(n) ? n : document.createElement("span");
                    var a = Object.assign({
                        eventName: t.eventName || e.createModuleName(r, "unknown eventName"),
                        eventAction: t.eventAction || e.getElemType(r)
                    }, t);
                    return a
                }
            }, {
                key: "getEventAttributes",
                value: function(r) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        a = e.isForm(r),
                        o = t.assetName ? e.getImageName(t.assetName) : e.getAssetName(r),
                        i = a && a.getAttribute("action") || e.getLinkURL(r, t),
                        c = Object.assign({
                            linkURL: i,
                            elementType: t.elementType,
                            userActionFlag: t.userActionFlag,
                            position: e.getPosition(r, t),
                            assetName: o || D.EMPTY_LABEL,
                            persName: e.getClosestSectionPersName(r),
                            label: e.getFormattedText(t.label) || e.getLabel(r, o),
                            moduleName: t.moduleName || e.createModuleName(r, "unknown moduleName")
                        }),
                        s = t.sku || t.productID;
                    if (s) {
                        var l = t.sku ? "sku" : "productID",
                            u = digitalData.product.find(function(e) {
                                return e.productInfo[l].includes(s)
                            }),
                            d = u ? null : digitalData.component || [];
                        if (!(u || d && d.length)) return t.sku && (c.sku = t.sku), c;
                        var p = u ? u.productInfo : null;
                        if (!p && d[0]) {
                            var g = d[0],
                                m = g.componentInfo,
                                f = void 0 === m ? {} : m,
                                h = g.category,
                                v = void 0 === h ? {} : h,
                                b = g.attributes,
                                y = void 0 === b ? {} : b;
                            p = {
                                productID: f.componentID,
                                conceptID: null,
                                productName: f.componentName,
                                productType: v.primaryCategory,
                                releaseDate: y.releaseDate,
                                productPrice: parseFloat(y.price || "0"),
                                priceCurrency: y.priceCurrency
                            }
                        }
                        c = $.extend(c, {
                            sku: t.sku || p.sku,
                            productID: p.productID,
                            conceptID: p.conceptID,
                            productName: p.productName,
                            productType: p.productType,
                            releaseDate: p.productReleaseDate,
                            productPrice: parseFloat(p.productPrice || "0"),
                            currencyCode: p.currency,
                            quantity: 1
                        }), n && (c.productDiscount = parseFloat(p.productDiscount || "0"), c.productDiscountType = p.productDiscountType)
                    }
                    return c
                }
            }, {
                key: "setAkamaiBoomR",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if ("button" === e.elementType) try {
                        var r = e.label.replace(/ /g, "").replace(/[^a-z0-9\s]/gi, ""),
                            t = "".concat(r.toLowerCase().substring(0, 12), "Cli"),
                            n = "".concat(r.toLowerCase().substring(0, 12), "Con"),
                            a = ["download", "digital", "shopnow", "freetrial", "membership", "subscribe", "stream", "startstreaming", "getpsnow"],
                            o = {};
                        o[t] = 1, o[n] = 1, $.each(a, function(e, t) {
                            window.BOOMR && r.toLowerCase().indexOf(t) !== -1 && (_gpdc.Logger.log("DDL Event Tracker :: MPulse Button Variables passed", o), BOOMR.session.length++, BOOMR.sendMetrics(o))
                        })
                    } catch (e) {
                        _gpdc.Logger.log("DDL Event Tracker :: Error while calling Akamai mPulse", e)
                    }
                }
            }, {
                key: "transformAttrs",
                value: function(r) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        a = J.convertJQueryElement(r);
                    a = J.isValidElement(a) ? a : document.createElement("span");
                    var o = e.getEventAttributes(a, t, n);
                    return e.setAkamaiBoomR(t), o
                }
            }]), e
        }(),
        W = function(e, r) {
            Y.debugDataLayer && (console.groupCollapsed("🕵️‍♀️ DataLayer Debug: ".concat(e)), console.log(r), console.groupEnd())
        },
        Z = {
            default: "cart_add",
            addtocart: "cart_add",
            preorder: "add_pre_order",
            incart: "in_cart",
            addtowishlist: "wishlist_add",
            removefromwishlist: "wishlist_remove",
            addtolibrary: "add_to_library",
            subscribe: "subscribe",
            buy: "buy",
            download: "download",
            upgrade: "upgrade"
        },
        K = function(e, r) {
            if (r) return r;
            if (!e) return null;
            try {
                var t = Object.keys(Z),
                    n = $(e).data(),
                    a = n.trackClick,
                    o = a.split(":"),
                    i = (o[1] || "").toLowerCase();
                return t.includes(i) ? i : null
            } catch (e) {
                return null
            }
        },
        X = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                n = arguments.length > 3 ? arguments[3] : void 0;
            if (r.sku) {
                var a = K(e, t) || "default",
                    o = {
                        name: r.productName,
                        sku: r.sku,
                        price: r.productPrice,
                        currency: r.currencyCode,
                        category: r.productType
                    };
                n && (o.productDiscount = r.productDiscount, o.productDiscountType = r.productDiscountType), H.ecommerce.cart.add(r.quantity, o, Z[a])
            }
        },
        ee = function(e) {
            var r = J.convertJQueryElement(e);
            if (J.isValidElement(r)) return r = Q.checkDataTrackFromParent(r), J.jsonParseUtility(r.getAttribute(Y.dtmAttributes.track))
        },
        re = function(e) {
            var r = $(e);
            return !(!r.length || !r.closest('[data-mfe-name="tierSelector"]').length) && ("button" === r.get(0).nodeName && "mfe-tier-selector#standalonePrice#footer#cta" === r.data("qa"))
        },
        te = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = $(e),
                a = n.data() || {},
                o = a.satelliteTrack,
                i = !!t.sku,
                c = n.closest('[data-component="cx-browse-tiles"]').length > 0,
                s = re(e),
                l = Q.transformAttrs(e, t, s),
                u = {
                    eventInfo: Q.getEventInfo(e, r),
                    attributes: l
                };
            return H.event.raw(u), i && X(e, l, null, s), c && _gpdc.analytics._satelliteTrack("user_engagement"), o && !c && _gpdc.analytics._satelliteTrack(o), W("Event", u), u
        },
        ne = function(e) {
            var r, t = e ? e.currentTarget : null;
            return t ? (r = ee(t), _gpdc.analytics.commerce.updateInternalLinkHref(e, t), _gpdc.analytics.commerce.updatePDPRInUrl(t), te(Q.returnActiveElement(t, e.target), r.eventInfo, r.attributes), void Q.addClickDelay(t, e)) : void _gpdc.Logger.log("Unable to track DTM Click event. Error: event target not found!")
        },
        ae = function(e, r) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = arguments.length > 3 ? arguments[3] : void 0;
            if ("function" != typeof H.event[e]) return void _gpdc.Logger.warn("Invalid GDL Event name passed!");
            if ("raw" === e) return void H.event.raw(r);
            var a = !!t.sku,
                o = Q.transformAttrs(n, t),
                i = {
                    eventInfo: {
                        eventName: r,
                        eventAction: e
                    },
                    attributes: o
                };
            W("Event", i), H.event[e](r, o), a && X(n, o)
        },
        oe = i(function e() {
            a(this, e);
            var r = _gpdc.elements.$body.data("game-info") || null;
            if (null !== r) {
                var t = r.name,
                    n = r.category,
                    o = r.attributes;
                H.component.generic(t, n, o)
            }
            _gpdc.Logger.logInitializer("preload", "components", "Analytics: Component")
        }),
        ie = /^(https?\:)?(\/{2})(store\.(playstation|sonyentertainmentnetwork))/,
        ce = /^(psns\:browse)/,
        se = /^(https?\:)?(\/{2})(blog\.(playstation|sonyentertainmentnetwork))/,
        le = /^(https?\:)?(\/{2})(direct\.(playstation|sonyentertainmentnetwork))/,
        ue = function() {
            function e() {
                throw a(this, e), TypeError("new of abstract class CommerceUtils")
            }
            return i(e, null, [{
                key: "isStoreURL",
                value: function(e) {
                    return "string" == typeof e && (ie.test(e) || ce.test(e))
                }
            }, {
                key: "isInternalURL",
                value: function(r) {
                    return e.isStoreURL(r) || e.isDirectURL(r) || e.isBlogURL(r)
                }
            }, {
                key: "isDirectURL",
                value: function(e) {
                    return e && le.test(e)
                }
            }, {
                key: "isBlogURL",
                value: function(e) {
                    return e && se.test(e)
                }
            }, {
                key: "matchConsoleToGamePlatform",
                value: function(r, t, n, a, o) {
                    var i = n ? n.match(a) : [r.getAttribute("data-platform") || "no-platform-info"];
                    return t[0].toLowerCase() === i[0].toLowerCase() ? e.updateButtonStoreLink(r) : r
                }
            }, {
                key: "getData",
                value: function() {
                    var e = Array.prototype.slice.call(arguments);
                    return e.forEach(function(e) {
                        if (e) return e
                    }), "null"
                }
            }, {
                key: "getProductIDFromStoreLink",
                value: function(e) {
                    var r;
                    if ("string" == typeof e && (r = /(\/cid|\?(category|product))\=([^\?&]*)/.exec(e), r && r.length)) return r.reverse(), r[0]
                }
            }, {
                key: "getSuitableHref",
                value: function(e) {
                    if (J.isValidElement(e)) {
                        var r = e.getAttribute("href");
                        return r && !/^(javascript\:)/i.test(r) ? r : e.getAttribute("data-href")
                    }
                    return null
                }
            }, {
                key: "createSMCIDItems",
                value: function(r, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        o = arguments.length > 4 ? arguments[4] : void 0,
                        i = window._gpdc.analytics,
                        c = window.digitalData || {},
                        s = c.product,
                        l = (r ? ee(r) : {}).attributes,
                        u = (s && s[0] || {}).productInfo || {},
                        d = ["pdc", i.page.locale(), (i.page.pagename() || "").replace(/\:/g, "-")];
                    if (l || n || a) {
                        var p = l && l.moduleName || n,
                            g = l && l.label || a,
                            m = p && g && "-" || "";
                        d.push(p + m + g)
                    }
                    if (l) {
                        var f = e.getData(l.productName, u.productName || null);
                        f = (f || "").replace(/[^\w\s]/gi, ""), d.push(J.slugifyString(f)), d.push(e.getProductIDFromStoreLink(t))
                    }
                    return o && d.push(o), d.join(":")
                }
            }, {
                key: "setPlayStationNetworkStoreURL",
                value: function(r) {
                    var t = e.getProductIDFromStoreLink(r);
                    if (t) {
                        var n = J.parseUri(r);
                        return n.queryObject[t.match(/STORE-/) ? "category" : "product"] = t, "psns:browse" + J.setQueryString(n.queryObject)
                    }
                    return r
                }
            }, {
                key: "updateButtonStoreLink",
                value: function(r) {
                    var t = J.convertJQueryElement(r);
                    if (J.isValidElement(t)) {
                        var n = t.getAttribute("href");
                        e.isStoreURL(n) && (t.setAttribute("href", e.setPlayStationNetworkStoreURL(n)), t.setAttribute("target", e.setPlayStationNetworkStoreURL("_self")))
                    }
                    return t
                }
            }]), e
        }(),
        de = function() {
            function e() {
                a(this, e), this.handleEmcid()
            }
            return i(e, [{
                key: "appendCIDs",
                value: function(e, r) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        a = "smcid",
                        o = "emcid",
                        i = J.parseUri(e),
                        c = r && r.getAttribute("target") || "_self",
                        s = i.queryObject;
                    if (!s.hasOwnProperty(a)) {
                        var l = (window.location.search || "").match(/emcid=([^&]+)/i),
                            u = l ? l[1] : "",
                            d = P("sc_emcid"),
                            p = P("sc-cmp-type"),
                            g = p === a ? p : null;
                        s[a] = ue.createSMCIDItems(r, e, t, n, g), !u || d && d == u && "_self" !== c || (s[o] = u)
                    }
                    return e = "psns" === i.protocol ? "".concat(i.protocol, ":").concat(i.path) : i.origin + i.pathname, e = e + J.setQueryString(s) + (i.hash ? "".concat(i.hash) : "")
                }
            }, {
                key: "getGamePlatform",
                value: function(e) {
                    var r = J.convertJQueryElement(e);
                    return J.isValidElement(r) ? (r.getAttribute("href") || "").split("-").pop() : null
                }
            }, {
                key: "updateInternalLinkHref",
                value: function(e, r) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        o = ue.getSuitableHref(r);
                    if (!o) return !1;
                    var i = r.getAttribute("target"),
                        c = ue.isInternalURL(o) ? this.appendCIDs(o, r, t, n) : o;
                    return a ? (r.setAttribute("href", c), c) : ("_blank" === i ? (e && "function" == typeof e.preventDefault && e.preventDefault(), window.open(c, i), r.setAttribute("href", c.split("&emcid=")[0])) : r.setAttribute("href", c), ue.isDirectURL(o) ? void 0 : r.setAttribute("href", c))
                }
            }, {
                key: "updatePDPRInUrl",
                value: function(e) {
                    var r = ue.getSuitableHref(e);
                    r && ue.isStoreURL(r) && _gpdc.config.pdprQuery && window._gpdc.listenForUserConsent(function() {
                        return e.setAttribute("href", R(r, !0))
                    })
                }
            }, {
                key: "updateStoreLinksOnConsoles",
                value: function(e, r) {
                    var t = /^ps[0-9]/i,
                        n = window._gpdc.browser.device.match(t),
                        a = document.querySelectorAll(e) || null;
                    if (n && a) return Array.prototype.forEach.call(a, function(e) {
                        return ue.matchConsoleToGamePlatform(e, n, r, t)
                    }), a
                }
            }, {
                key: "handleEmcid",
                value: function() {
                    if (window.location.search) {
                        var e = "sc-cmp-id",
                            r = "sc-cmp-type",
                            t = 1440,
                            n = window.htmlEncode(window.location.search || "").match(/emcid=([^&]+)/i),
                            a = window._gpdc.user;
                        n && window._gpdc.listenForUserConsent(function() {
                            var o = ".playstation.com",
                                i = n[1];
                            x("sc_emcid", i), (!a || !a.isLoggedIn) && x("sc_emcid_login", i), x(e, i, t, o), x(r, "emcid", t, o)
                        });
                        var o = null,
                            i = "; ".concat(document.cookie);
                        2 === i.split("; sc_emcid=").length && (o = i.split("; sc_emcid=").pop().split(";").shift()), o && $.each($(Y.emcidElements.join(", ")), function(e, r) {
                            var t = $(r),
                                n = P("sc_emcid"),
                                a = "emcid_added_".concat(n),
                                o = "".concat(location.href.indexOf("?") > -1 ? "&" : "?", "emcid=").concat(n);
                            t.hasClass(a) || (t.addClass(a), t.data("signouthref") ? t.data("signouthref", "".concat(t.data("signouthref")).concat(o)) : t.data("href") ? (t.data("href", "".concat(t.data("href")).concat(o)), $("#sb-signin-link").attr("href", t.data("href"))) : t.attr("href", "".concat(t.data("href")).concat(o))), $('.return-url-link[href=""]').length && $('.return-url-link[href=""]').attr("href", $("#sb-social-toolbar-root").data("href"))
                        })
                    }
                }
            }]), e
        }(),
        pe = function() {
            function e() {
                a(this, e), this.cookieEnv = S.PROD.test(location.href) ? "np" : S.STAGE.test(location.href) ? "mgmt" : "e1";
                var r = _gpdc.elements.$body.data("product-info") || null,
                    t = r && "boolean" == typeof r.hasSellableItems ? r.hasSellableItems : D.EMPTY_LABEL;
                H.pageview({
                    primaryCategory: window._gpdc.config.pageCategory || null,
                    app: {
                        env: this.environment(),
                        name: "pdc",
                        version: $('meta[property="cq:pagemodel_root_url"]').length ? this.aemVersion() + "-spa" : this.aemVersion()
                    },
                    emcid: this.emcid(),
                    user: this.user(),
                    locale: window._gpdc.config.locale,
                    isErrorPage: function() {
                        return !!document.querySelector('meta[name="title"][content^="404"]')
                    },
                    hasSellableItems: t
                }), W("Pageview", window.digitalData.page.pageInfo), W("User", window.digitalData.user.profile)
            }
            return i(e, [{
                key: "pagename",
                value: function() {
                    return window.digitalData.page.pageInfo.pageName
                }
            }, {
                key: "locale",
                value: function() {
                    return window.digitalData.user.profile.profileInfo.language
                }
            }, {
                key: "aemVersion",
                value: function() {
                    return window._gpdc.config.aemVersion ? window._gpdc.config.aemVersion.AEM_VERSION : ""
                }
            }, {
                key: "environment",
                value: function() {
                    var e = "pdc-local",
                        r = window.location.hostname,
                        t = "";
                    return r.match(/dev/i) ? t = "dev" : r.match(/qa/i) ? t = "qa" : r.match(/stage/i) ? t = "stage" : r.match(/^www\.playstation/i) && (t = "prod"), t ? e + t : e
                }
            }, {
                key: "emcid",
                value: function() {
                    var e = window._gpdc.user,
                        r = new URLSearchParams(location.search),
                        t = r.get("emcid"),
                        n = P("sc_emcid_login");
                    return t || n ? e && e.isLoggedIn && n ? (O("sc_emcid_login"), n) : t ? t : null : null
                }
            }, {
                key: "getWS2Settings",
                value: function() {
                    var e = null,
                        r = {};
                    try {
                        e = JSON.parse(decodeURIComponent(P(E.WS2[this.cookieEnv])))
                    } catch (e) {
                        _gpdc.Logger.log("WS2 settings cookie not found!")
                    }
                    return e ? (Object.entries(e).forEach(function(e) {
                        var t = s(e, 2),
                            n = t[0],
                            a = t[1];
                        return "enabled" === a && (r[n] = "allow")
                    }), r) : r
                }
            }, {
                key: "userPrivacy",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.age,
                        t = {
                            caPrivacyOptOut: "true" === P("California-User"),
                            ws2Settings: this.getWS2Settings()
                        };
                    if (e.isLoggedIn && "undefined" == typeof r) {
                        var n = C(sessionStorage.getItem(L.gpdcUser));
                        r = n && n.encrypted_id === e.encrypted_id && n.age || null
                    }
                    return e.isLoggedIn && r && (t.ageOptOut = r < 16), {
                        privacy: t
                    }
                }
            }, {
                key: "user",
                value: function e() {
                    var e = window._gpdc.user,
                        r = this.userPrivacy(e);
                    return e && e.isLoggedIn ? t(t({}, r), {}, {
                        subscriptions: e.subscriptions,
                        id: e.encrypted_id
                    }) : t({}, r)
                }
            }]), e
        }(),
        ge = i(function e() {
            a(this, e);
            var r = _gpdc.elements.$body.data("product-info") || null;
            if (r) {
                var t = [];
                if (r.skus && Array.isArray(r.skus)) {
                    var n = r.skus.findIndex(function(e) {
                            return e.productId === r.productId
                        }),
                        o = n <= 0 ? r.skus : r.skus.reduce(function(e, t) {
                            return r.productId === t.productId ? [t].concat(l(e)) : [].concat(l(e), [t])
                        }, []);
                    o.forEach(function(e) {
                        e && (e.id = e.productId, e.type = e.productType, e.merchandisingCategory = e.productType, e.skuIds = e.skuId), t.push(e)
                    })
                } else {
                    var i = r.skuIds || "";
                    r.id = r.productId, r.type = r.productType, r.merchandisingCategory = r.productType, i && Array.isArray(i) ? i.forEach(function(e) {
                        r.skuIds = e, t.push(Object.assign({}, r))
                    }) : t.push(r)
                }
                H.ecommerce.product.view(t), W("product_view", t), t.length && _gpdc.elements.$document.one("satelliteTrack__prod_view", function() {
                    return _gpdc.analytics._satelliteTrack("prod_view")
                }), _gpdc.Logger.logInitializer("preload", "components", "Analytics: Product")
            }
        }),
        me = function() {
            function e() {
                a(this, e)
            }
            return i(e, [{
                key: "track",
                value: function(e) {
                    H.search(e);
                    var r = window.digitalData.search;
                    W("Search", r[r.length - 1])
                }
            }]), e
        }(),
        fe = function() {
            function e() {
                a(this, e)
            }
            return i(e, [{
                key: "track",
                value: function(e, r) {
                    var t = window.digitalData.component.form;
                    W("Form", t), H.component.form(e, r)
                }
            }]), e
        }(),
        he = function(e, r) {
            e || _gpdc.Logger.warn("No SKU ID, product impression tracking failed!");
            var t = _gpdc.elements.$body.data("product-info") || null,
                n = r || {
                    skuId: e
                },
                a = ve(n, t);
            window.digitalData && digitalData.productImpression && (digitalData.productImpression.item = []), W("Product Impression", a), H.ecommerce.product.impression(a), _gpdc.analytics._satelliteTrack("product_impression")
        },
        ve = function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                t = e.skuId,
                n = e.basePriceValue,
                a = e.discountedValue,
                o = e.discountType,
                i = r.conceptId,
                c = r.priceCurrency,
                s = r.productType,
                l = be(n, a);
            return {
                conceptId: i || null,
                name: null,
                skuId: t,
                price: n && Number.isInteger(n) && n / 100 || 0,
                discount: l,
                discountType: o || null,
                priceCurrency: c || null,
                merchandisingCategory: s || null,
                quantity: 1
            }
        },
        be = function(e, r) {
            if (!e || !r) return 0;
            try {
                return ((e - r) / e).toFixed(2)
            } catch (e) {
                return _gpdc.Logger.warn("ProductImpression Tracking: discount format failed!"), 0
            }
        },
        ye = i(function e() {
            a(this, e), _gpdc.Logger.logInitializer("preload", "components", "Analytics");
            var r = function(e) {
                console.log('_satellite.track called with "'.concat(e, '"'));
                try {
                    _satellite.track(e)
                } catch (r) {
                    _gpdc.Logger.log("_satellite.track not defined! Event Name:", e)
                }
            };
            _gpdc.analytics = {
                _satelliteTrack: r,
                search: new me,
                commerce: new de,
                form: new fe,
                page: new pe,
                product: new ge,
                components: new oe,
                productImpression: he,
                event: {
                    addGDLEvent: ae,
                    addRawEvent: te,
                    logCartAdd: X
                }
            }, _gpdc.elements.$body.on("click.ddlLinkClicks", Y.clickableElements, ne)
        }),
        we = w(function(e, r) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.bodyRegExps = {
                xml: /&(?:#\d+|#x[\da-fA-F]+|[0-9a-zA-Z]+);?/g,
                html4: /&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#x[\da-fA-F]+|[0-9a-zA-Z]+);?/g,
                html5: /&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#x[\da-fA-F]+|[0-9a-zA-Z]+);?/g
            }, r.namedReferences = {
                xml: {
                    entities: {
                        "&lt;": "<",
                        "&gt;": ">",
                        "&quot;": '"',
                        "&apos;": "'",
                        "&amp;": "&"
                    },
                    characters: {
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&apos;",
                        "&": "&amp;"
                    }
                },
                html4: {
                    entities: {
                        "&apos;": "'",
                        "&nbsp": " ",
                        "&nbsp;": " ",
                        "&iexcl": "¡",
                        "&iexcl;": "¡",
                        "&cent": "¢",
                        "&cent;": "¢",
                        "&pound": "£",
                        "&pound;": "£",
                        "&curren": "¤",
                        "&curren;": "¤",
                        "&yen": "¥",
                        "&yen;": "¥",
                        "&brvbar": "¦",
                        "&brvbar;": "¦",
                        "&sect": "§",
                        "&sect;": "§",
                        "&uml": "¨",
                        "&uml;": "¨",
                        "&copy": "©",
                        "&copy;": "©",
                        "&ordf": "ª",
                        "&ordf;": "ª",
                        "&laquo": "«",
                        "&laquo;": "«",
                        "&not": "¬",
                        "&not;": "¬",
                        "&shy": "­",
                        "&shy;": "­",
                        "&reg": "®",
                        "&reg;": "®",
                        "&macr": "¯",
                        "&macr;": "¯",
                        "&deg": "°",
                        "&deg;": "°",
                        "&plusmn": "±",
                        "&plusmn;": "±",
                        "&sup2": "²",
                        "&sup2;": "²",
                        "&sup3": "³",
                        "&sup3;": "³",
                        "&acute": "´",
                        "&acute;": "´",
                        "&micro": "µ",
                        "&micro;": "µ",
                        "&para": "¶",
                        "&para;": "¶",
                        "&middot": "·",
                        "&middot;": "·",
                        "&cedil": "¸",
                        "&cedil;": "¸",
                        "&sup1": "¹",
                        "&sup1;": "¹",
                        "&ordm": "º",
                        "&ordm;": "º",
                        "&raquo": "»",
                        "&raquo;": "»",
                        "&frac14": "¼",
                        "&frac14;": "¼",
                        "&frac12": "½",
                        "&frac12;": "½",
                        "&frac34": "¾",
                        "&frac34;": "¾",
                        "&iquest": "¿",
                        "&iquest;": "¿",
                        "&Agrave": "À",
                        "&Agrave;": "À",
                        "&Aacute": "Á",
                        "&Aacute;": "Á",
                        "&Acirc": "Â",
                        "&Acirc;": "Â",
                        "&Atilde": "Ã",
                        "&Atilde;": "Ã",
                        "&Auml": "Ä",
                        "&Auml;": "Ä",
                        "&Aring": "Å",
                        "&Aring;": "Å",
                        "&AElig": "Æ",
                        "&AElig;": "Æ",
                        "&Ccedil": "Ç",
                        "&Ccedil;": "Ç",
                        "&Egrave": "È",
                        "&Egrave;": "È",
                        "&Eacute": "É",
                        "&Eacute;": "É",
                        "&Ecirc": "Ê",
                        "&Ecirc;": "Ê",
                        "&Euml": "Ë",
                        "&Euml;": "Ë",
                        "&Igrave": "Ì",
                        "&Igrave;": "Ì",
                        "&Iacute": "Í",
                        "&Iacute;": "Í",
                        "&Icirc": "Î",
                        "&Icirc;": "Î",
                        "&Iuml": "Ï",
                        "&Iuml;": "Ï",
                        "&ETH": "Ð",
                        "&ETH;": "Ð",
                        "&Ntilde": "Ñ",
                        "&Ntilde;": "Ñ",
                        "&Ograve": "Ò",
                        "&Ograve;": "Ò",
                        "&Oacute": "Ó",
                        "&Oacute;": "Ó",
                        "&Ocirc": "Ô",
                        "&Ocirc;": "Ô",
                        "&Otilde": "Õ",
                        "&Otilde;": "Õ",
                        "&Ouml": "Ö",
                        "&Ouml;": "Ö",
                        "&times": "×",
                        "&times;": "×",
                        "&Oslash": "Ø",
                        "&Oslash;": "Ø",
                        "&Ugrave": "Ù",
                        "&Ugrave;": "Ù",
                        "&Uacute": "Ú",
                        "&Uacute;": "Ú",
                        "&Ucirc": "Û",
                        "&Ucirc;": "Û",
                        "&Uuml": "Ü",
                        "&Uuml;": "Ü",
                        "&Yacute": "Ý",
                        "&Yacute;": "Ý",
                        "&THORN": "Þ",
                        "&THORN;": "Þ",
                        "&szlig": "ß",
                        "&szlig;": "ß",
                        "&agrave": "à",
                        "&agrave;": "à",
                        "&aacute": "á",
                        "&aacute;": "á",
                        "&acirc": "â",
                        "&acirc;": "â",
                        "&atilde": "ã",
                        "&atilde;": "ã",
                        "&auml": "ä",
                        "&auml;": "ä",
                        "&aring": "å",
                        "&aring;": "å",
                        "&aelig": "æ",
                        "&aelig;": "æ",
                        "&ccedil": "ç",
                        "&ccedil;": "ç",
                        "&egrave": "è",
                        "&egrave;": "è",
                        "&eacute": "é",
                        "&eacute;": "é",
                        "&ecirc": "ê",
                        "&ecirc;": "ê",
                        "&euml": "ë",
                        "&euml;": "ë",
                        "&igrave": "ì",
                        "&igrave;": "ì",
                        "&iacute": "í",
                        "&iacute;": "í",
                        "&icirc": "î",
                        "&icirc;": "î",
                        "&iuml": "ï",
                        "&iuml;": "ï",
                        "&eth": "ð",
                        "&eth;": "ð",
                        "&ntilde": "ñ",
                        "&ntilde;": "ñ",
                        "&ograve": "ò",
                        "&ograve;": "ò",
                        "&oacute": "ó",
                        "&oacute;": "ó",
                        "&ocirc": "ô",
                        "&ocirc;": "ô",
                        "&otilde": "õ",
                        "&otilde;": "õ",
                        "&ouml": "ö",
                        "&ouml;": "ö",
                        "&divide": "÷",
                        "&divide;": "÷",
                        "&oslash": "ø",
                        "&oslash;": "ø",
                        "&ugrave": "ù",
                        "&ugrave;": "ù",
                        "&uacute": "ú",
                        "&uacute;": "ú",
                        "&ucirc": "û",
                        "&ucirc;": "û",
                        "&uuml": "ü",
                        "&uuml;": "ü",
                        "&yacute": "ý",
                        "&yacute;": "ý",
                        "&thorn": "þ",
                        "&thorn;": "þ",
                        "&yuml": "ÿ",
                        "&yuml;": "ÿ",
                        "&quot": '"',
                        "&quot;": '"',
                        "&amp": "&",
                        "&amp;": "&",
                        "&lt": "<",
                        "&lt;": "<",
                        "&gt": ">",
                        "&gt;": ">",
                        "&OElig;": "Œ",
                        "&oelig;": "œ",
                        "&Scaron;": "Š",
                        "&scaron;": "š",
                        "&Yuml;": "Ÿ",
                        "&circ;": "ˆ",
                        "&tilde;": "˜",
                        "&ensp;": " ",
                        "&emsp;": " ",
                        "&thinsp;": " ",
                        "&zwnj;": "‌",
                        "&zwj;": "‍",
                        "&lrm;": "‎",
                        "&rlm;": "‏",
                        "&ndash;": "–",
                        "&mdash;": "—",
                        "&lsquo;": "‘",
                        "&rsquo;": "’",
                        "&sbquo;": "‚",
                        "&ldquo;": "“",
                        "&rdquo;": "”",
                        "&bdquo;": "„",
                        "&dagger;": "†",
                        "&Dagger;": "‡",
                        "&permil;": "‰",
                        "&lsaquo;": "‹",
                        "&rsaquo;": "›",
                        "&euro;": "€",
                        "&fnof;": "ƒ",
                        "&Alpha;": "Α",
                        "&Beta;": "Β",
                        "&Gamma;": "Γ",
                        "&Delta;": "Δ",
                        "&Epsilon;": "Ε",
                        "&Zeta;": "Ζ",
                        "&Eta;": "Η",
                        "&Theta;": "Θ",
                        "&Iota;": "Ι",
                        "&Kappa;": "Κ",
                        "&Lambda;": "Λ",
                        "&Mu;": "Μ",
                        "&Nu;": "Ν",
                        "&Xi;": "Ξ",
                        "&Omicron;": "Ο",
                        "&Pi;": "Π",
                        "&Rho;": "Ρ",
                        "&Sigma;": "Σ",
                        "&Tau;": "Τ",
                        "&Upsilon;": "Υ",
                        "&Phi;": "Φ",
                        "&Chi;": "Χ",
                        "&Psi;": "Ψ",
                        "&Omega;": "Ω",
                        "&alpha;": "α",
                        "&beta;": "β",
                        "&gamma;": "γ",
                        "&delta;": "δ",
                        "&epsilon;": "ε",
                        "&zeta;": "ζ",
                        "&eta;": "η",
                        "&theta;": "θ",
                        "&iota;": "ι",
                        "&kappa;": "κ",
                        "&lambda;": "λ",
                        "&mu;": "μ",
                        "&nu;": "ν",
                        "&xi;": "ξ",
                        "&omicron;": "ο",
                        "&pi;": "π",
                        "&rho;": "ρ",
                        "&sigmaf;": "ς",
                        "&sigma;": "σ",
                        "&tau;": "τ",
                        "&upsilon;": "υ",
                        "&phi;": "φ",
                        "&chi;": "χ",
                        "&psi;": "ψ",
                        "&omega;": "ω",
                        "&thetasym;": "ϑ",
                        "&upsih;": "ϒ",
                        "&piv;": "ϖ",
                        "&bull;": "•",
                        "&hellip;": "…",
                        "&prime;": "′",
                        "&Prime;": "″",
                        "&oline;": "‾",
                        "&frasl;": "⁄",
                        "&weierp;": "℘",
                        "&image;": "ℑ",
                        "&real;": "ℜ",
                        "&trade;": "™",
                        "&alefsym;": "ℵ",
                        "&larr;": "←",
                        "&uarr;": "↑",
                        "&rarr;": "→",
                        "&darr;": "↓",
                        "&harr;": "↔",
                        "&crarr;": "↵",
                        "&lArr;": "⇐",
                        "&uArr;": "⇑",
                        "&rArr;": "⇒",
                        "&dArr;": "⇓",
                        "&hArr;": "⇔",
                        "&forall;": "∀",
                        "&part;": "∂",
                        "&exist;": "∃",
                        "&empty;": "∅",
                        "&nabla;": "∇",
                        "&isin;": "∈",
                        "&notin;": "∉",
                        "&ni;": "∋",
                        "&prod;": "∏",
                        "&sum;": "∑",
                        "&minus;": "−",
                        "&lowast;": "∗",
                        "&radic;": "√",
                        "&prop;": "∝",
                        "&infin;": "∞",
                        "&ang;": "∠",
                        "&and;": "∧",
                        "&or;": "∨",
                        "&cap;": "∩",
                        "&cup;": "∪",
                        "&int;": "∫",
                        "&there4;": "∴",
                        "&sim;": "∼",
                        "&cong;": "≅",
                        "&asymp;": "≈",
                        "&ne;": "≠",
                        "&equiv;": "≡",
                        "&le;": "≤",
                        "&ge;": "≥",
                        "&sub;": "⊂",
                        "&sup;": "⊃",
                        "&nsub;": "⊄",
                        "&sube;": "⊆",
                        "&supe;": "⊇",
                        "&oplus;": "⊕",
                        "&otimes;": "⊗",
                        "&perp;": "⊥",
                        "&sdot;": "⋅",
                        "&lceil;": "⌈",
                        "&rceil;": "⌉",
                        "&lfloor;": "⌊",
                        "&rfloor;": "⌋",
                        "&lang;": "〈",
                        "&rang;": "〉",
                        "&loz;": "◊",
                        "&spades;": "♠",
                        "&clubs;": "♣",
                        "&hearts;": "♥",
                        "&diams;": "♦"
                    },
                    characters: {
                        "'": "&apos;",
                        " ": "&nbsp;",
                        "¡": "&iexcl;",
                        "¢": "&cent;",
                        "£": "&pound;",
                        "¤": "&curren;",
                        "¥": "&yen;",
                        "¦": "&brvbar;",
                        "§": "&sect;",
                        "¨": "&uml;",
                        "©": "&copy;",
                        "ª": "&ordf;",
                        "«": "&laquo;",
                        "¬": "&not;",
                        "­": "&shy;",
                        "®": "&reg;",
                        "¯": "&macr;",
                        "°": "&deg;",
                        "±": "&plusmn;",
                        "²": "&sup2;",
                        "³": "&sup3;",
                        "´": "&acute;",
                        "µ": "&micro;",
                        "¶": "&para;",
                        "·": "&middot;",
                        "¸": "&cedil;",
                        "¹": "&sup1;",
                        "º": "&ordm;",
                        "»": "&raquo;",
                        "¼": "&frac14;",
                        "½": "&frac12;",
                        "¾": "&frac34;",
                        "¿": "&iquest;",
                        "À": "&Agrave;",
                        "Á": "&Aacute;",
                        "Â": "&Acirc;",
                        "Ã": "&Atilde;",
                        "Ä": "&Auml;",
                        "Å": "&Aring;",
                        "Æ": "&AElig;",
                        "Ç": "&Ccedil;",
                        "È": "&Egrave;",
                        "É": "&Eacute;",
                        "Ê": "&Ecirc;",
                        "Ë": "&Euml;",
                        "Ì": "&Igrave;",
                        "Í": "&Iacute;",
                        "Î": "&Icirc;",
                        "Ï": "&Iuml;",
                        "Ð": "&ETH;",
                        "Ñ": "&Ntilde;",
                        "Ò": "&Ograve;",
                        "Ó": "&Oacute;",
                        "Ô": "&Ocirc;",
                        "Õ": "&Otilde;",
                        "Ö": "&Ouml;",
                        "×": "&times;",
                        "Ø": "&Oslash;",
                        "Ù": "&Ugrave;",
                        "Ú": "&Uacute;",
                        "Û": "&Ucirc;",
                        "Ü": "&Uuml;",
                        "Ý": "&Yacute;",
                        "Þ": "&THORN;",
                        "ß": "&szlig;",
                        "à": "&agrave;",
                        "á": "&aacute;",
                        "â": "&acirc;",
                        "ã": "&atilde;",
                        "ä": "&auml;",
                        "å": "&aring;",
                        "æ": "&aelig;",
                        "ç": "&ccedil;",
                        "è": "&egrave;",
                        "é": "&eacute;",
                        "ê": "&ecirc;",
                        "ë": "&euml;",
                        "ì": "&igrave;",
                        "í": "&iacute;",
                        "î": "&icirc;",
                        "ï": "&iuml;",
                        "ð": "&eth;",
                        "ñ": "&ntilde;",
                        "ò": "&ograve;",
                        "ó": "&oacute;",
                        "ô": "&ocirc;",
                        "õ": "&otilde;",
                        "ö": "&ouml;",
                        "÷": "&divide;",
                        "ø": "&oslash;",
                        "ù": "&ugrave;",
                        "ú": "&uacute;",
                        "û": "&ucirc;",
                        "ü": "&uuml;",
                        "ý": "&yacute;",
                        "þ": "&thorn;",
                        "ÿ": "&yuml;",
                        '"': "&quot;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "Œ": "&OElig;",
                        "œ": "&oelig;",
                        "Š": "&Scaron;",
                        "š": "&scaron;",
                        "Ÿ": "&Yuml;",
                        "ˆ": "&circ;",
                        "˜": "&tilde;",
                        " ": "&ensp;",
                        " ": "&emsp;",
                        " ": "&thinsp;",
                        "‌": "&zwnj;",
                        "‍": "&zwj;",
                        "‎": "&lrm;",
                        "‏": "&rlm;",
                        "–": "&ndash;",
                        "—": "&mdash;",
                        "‘": "&lsquo;",
                        "’": "&rsquo;",
                        "‚": "&sbquo;",
                        "“": "&ldquo;",
                        "”": "&rdquo;",
                        "„": "&bdquo;",
                        "†": "&dagger;",
                        "‡": "&Dagger;",
                        "‰": "&permil;",
                        "‹": "&lsaquo;",
                        "›": "&rsaquo;",
                        "€": "&euro;",
                        "ƒ": "&fnof;",
                        "Α": "&Alpha;",
                        "Β": "&Beta;",
                        "Γ": "&Gamma;",
                        "Δ": "&Delta;",
                        "Ε": "&Epsilon;",
                        "Ζ": "&Zeta;",
                        "Η": "&Eta;",
                        "Θ": "&Theta;",
                        "Ι": "&Iota;",
                        "Κ": "&Kappa;",
                        "Λ": "&Lambda;",
                        "Μ": "&Mu;",
                        "Ν": "&Nu;",
                        "Ξ": "&Xi;",
                        "Ο": "&Omicron;",
                        "Π": "&Pi;",
                        "Ρ": "&Rho;",
                        "Σ": "&Sigma;",
                        "Τ": "&Tau;",
                        "Υ": "&Upsilon;",
                        "Φ": "&Phi;",
                        "Χ": "&Chi;",
                        "Ψ": "&Psi;",
                        "Ω": "&Omega;",
                        "α": "&alpha;",
                        "β": "&beta;",
                        "γ": "&gamma;",
                        "δ": "&delta;",
                        "ε": "&epsilon;",
                        "ζ": "&zeta;",
                        "η": "&eta;",
                        "θ": "&theta;",
                        "ι": "&iota;",
                        "κ": "&kappa;",
                        "λ": "&lambda;",
                        "μ": "&mu;",
                        "ν": "&nu;",
                        "ξ": "&xi;",
                        "ο": "&omicron;",
                        "π": "&pi;",
                        "ρ": "&rho;",
                        "ς": "&sigmaf;",
                        "σ": "&sigma;",
                        "τ": "&tau;",
                        "υ": "&upsilon;",
                        "φ": "&phi;",
                        "χ": "&chi;",
                        "ψ": "&psi;",
                        "ω": "&omega;",
                        "ϑ": "&thetasym;",
                        "ϒ": "&upsih;",
                        "ϖ": "&piv;",
                        "•": "&bull;",
                        "…": "&hellip;",
                        "′": "&prime;",
                        "″": "&Prime;",
                        "‾": "&oline;",
                        "⁄": "&frasl;",
                        "℘": "&weierp;",
                        "ℑ": "&image;",
                        "ℜ": "&real;",
                        "™": "&trade;",
                        "ℵ": "&alefsym;",
                        "←": "&larr;",
                        "↑": "&uarr;",
                        "→": "&rarr;",
                        "↓": "&darr;",
                        "↔": "&harr;",
                        "↵": "&crarr;",
                        "⇐": "&lArr;",
                        "⇑": "&uArr;",
                        "⇒": "&rArr;",
                        "⇓": "&dArr;",
                        "⇔": "&hArr;",
                        "∀": "&forall;",
                        "∂": "&part;",
                        "∃": "&exist;",
                        "∅": "&empty;",
                        "∇": "&nabla;",
                        "∈": "&isin;",
                        "∉": "&notin;",
                        "∋": "&ni;",
                        "∏": "&prod;",
                        "∑": "&sum;",
                        "−": "&minus;",
                        "∗": "&lowast;",
                        "√": "&radic;",
                        "∝": "&prop;",
                        "∞": "&infin;",
                        "∠": "&ang;",
                        "∧": "&and;",
                        "∨": "&or;",
                        "∩": "&cap;",
                        "∪": "&cup;",
                        "∫": "&int;",
                        "∴": "&there4;",
                        "∼": "&sim;",
                        "≅": "&cong;",
                        "≈": "&asymp;",
                        "≠": "&ne;",
                        "≡": "&equiv;",
                        "≤": "&le;",
                        "≥": "&ge;",
                        "⊂": "&sub;",
                        "⊃": "&sup;",
                        "⊄": "&nsub;",
                        "⊆": "&sube;",
                        "⊇": "&supe;",
                        "⊕": "&oplus;",
                        "⊗": "&otimes;",
                        "⊥": "&perp;",
                        "⋅": "&sdot;",
                        "⌈": "&lceil;",
                        "⌉": "&rceil;",
                        "⌊": "&lfloor;",
                        "⌋": "&rfloor;",
                        "〈": "&lang;",
                        "〉": "&rang;",
                        "◊": "&loz;",
                        "♠": "&spades;",
                        "♣": "&clubs;",
                        "♥": "&hearts;",
                        "♦": "&diams;"
                    }
                },
                html5: {
                    entities: {
                        "&AElig": "Æ",
                        "&AElig;": "Æ",
                        "&AMP": "&",
                        "&AMP;": "&",
                        "&Aacute": "Á",
                        "&Aacute;": "Á",
                        "&Abreve;": "Ă",
                        "&Acirc": "Â",
                        "&Acirc;": "Â",
                        "&Acy;": "А",
                        "&Afr;": "𝔄",
                        "&Agrave": "À",
                        "&Agrave;": "À",
                        "&Alpha;": "Α",
                        "&Amacr;": "Ā",
                        "&And;": "⩓",
                        "&Aogon;": "Ą",
                        "&Aopf;": "𝔸",
                        "&ApplyFunction;": "⁡",
                        "&Aring": "Å",
                        "&Aring;": "Å",
                        "&Ascr;": "𝒜",
                        "&Assign;": "≔",
                        "&Atilde": "Ã",
                        "&Atilde;": "Ã",
                        "&Auml": "Ä",
                        "&Auml;": "Ä",
                        "&Backslash;": "∖",
                        "&Barv;": "⫧",
                        "&Barwed;": "⌆",
                        "&Bcy;": "Б",
                        "&Because;": "∵",
                        "&Bernoullis;": "ℬ",
                        "&Beta;": "Β",
                        "&Bfr;": "𝔅",
                        "&Bopf;": "𝔹",
                        "&Breve;": "˘",
                        "&Bscr;": "ℬ",
                        "&Bumpeq;": "≎",
                        "&CHcy;": "Ч",
                        "&COPY": "©",
                        "&COPY;": "©",
                        "&Cacute;": "Ć",
                        "&Cap;": "⋒",
                        "&CapitalDifferentialD;": "ⅅ",
                        "&Cayleys;": "ℭ",
                        "&Ccaron;": "Č",
                        "&Ccedil": "Ç",
                        "&Ccedil;": "Ç",
                        "&Ccirc;": "Ĉ",
                        "&Cconint;": "∰",
                        "&Cdot;": "Ċ",
                        "&Cedilla;": "¸",
                        "&CenterDot;": "·",
                        "&Cfr;": "ℭ",
                        "&Chi;": "Χ",
                        "&CircleDot;": "⊙",
                        "&CircleMinus;": "⊖",
                        "&CirclePlus;": "⊕",
                        "&CircleTimes;": "⊗",
                        "&ClockwiseContourIntegral;": "∲",
                        "&CloseCurlyDoubleQuote;": "”",
                        "&CloseCurlyQuote;": "’",
                        "&Colon;": "∷",
                        "&Colone;": "⩴",
                        "&Congruent;": "≡",
                        "&Conint;": "∯",
                        "&ContourIntegral;": "∮",
                        "&Copf;": "ℂ",
                        "&Coproduct;": "∐",
                        "&CounterClockwiseContourIntegral;": "∳",
                        "&Cross;": "⨯",
                        "&Cscr;": "𝒞",
                        "&Cup;": "⋓",
                        "&CupCap;": "≍",
                        "&DD;": "ⅅ",
                        "&DDotrahd;": "⤑",
                        "&DJcy;": "Ђ",
                        "&DScy;": "Ѕ",
                        "&DZcy;": "Џ",
                        "&Dagger;": "‡",
                        "&Darr;": "↡",
                        "&Dashv;": "⫤",
                        "&Dcaron;": "Ď",
                        "&Dcy;": "Д",
                        "&Del;": "∇",
                        "&Delta;": "Δ",
                        "&Dfr;": "𝔇",
                        "&DiacriticalAcute;": "´",
                        "&DiacriticalDot;": "˙",
                        "&DiacriticalDoubleAcute;": "˝",
                        "&DiacriticalGrave;": "`",
                        "&DiacriticalTilde;": "˜",
                        "&Diamond;": "⋄",
                        "&DifferentialD;": "ⅆ",
                        "&Dopf;": "𝔻",
                        "&Dot;": "¨",
                        "&DotDot;": "⃜",
                        "&DotEqual;": "≐",
                        "&DoubleContourIntegral;": "∯",
                        "&DoubleDot;": "¨",
                        "&DoubleDownArrow;": "⇓",
                        "&DoubleLeftArrow;": "⇐",
                        "&DoubleLeftRightArrow;": "⇔",
                        "&DoubleLeftTee;": "⫤",
                        "&DoubleLongLeftArrow;": "⟸",
                        "&DoubleLongLeftRightArrow;": "⟺",
                        "&DoubleLongRightArrow;": "⟹",
                        "&DoubleRightArrow;": "⇒",
                        "&DoubleRightTee;": "⊨",
                        "&DoubleUpArrow;": "⇑",
                        "&DoubleUpDownArrow;": "⇕",
                        "&DoubleVerticalBar;": "∥",
                        "&DownArrow;": "↓",
                        "&DownArrowBar;": "⤓",
                        "&DownArrowUpArrow;": "⇵",
                        "&DownBreve;": "̑",
                        "&DownLeftRightVector;": "⥐",
                        "&DownLeftTeeVector;": "⥞",
                        "&DownLeftVector;": "↽",
                        "&DownLeftVectorBar;": "⥖",
                        "&DownRightTeeVector;": "⥟",
                        "&DownRightVector;": "⇁",
                        "&DownRightVectorBar;": "⥗",
                        "&DownTee;": "⊤",
                        "&DownTeeArrow;": "↧",
                        "&Downarrow;": "⇓",
                        "&Dscr;": "𝒟",
                        "&Dstrok;": "Đ",
                        "&ENG;": "Ŋ",
                        "&ETH": "Ð",
                        "&ETH;": "Ð",
                        "&Eacute": "É",
                        "&Eacute;": "É",
                        "&Ecaron;": "Ě",
                        "&Ecirc": "Ê",
                        "&Ecirc;": "Ê",
                        "&Ecy;": "Э",
                        "&Edot;": "Ė",
                        "&Efr;": "𝔈",
                        "&Egrave": "È",
                        "&Egrave;": "È",
                        "&Element;": "∈",
                        "&Emacr;": "Ē",
                        "&EmptySmallSquare;": "◻",
                        "&EmptyVerySmallSquare;": "▫",
                        "&Eogon;": "Ę",
                        "&Eopf;": "𝔼",
                        "&Epsilon;": "Ε",
                        "&Equal;": "⩵",
                        "&EqualTilde;": "≂",
                        "&Equilibrium;": "⇌",
                        "&Escr;": "ℰ",
                        "&Esim;": "⩳",
                        "&Eta;": "Η",
                        "&Euml": "Ë",
                        "&Euml;": "Ë",
                        "&Exists;": "∃",
                        "&ExponentialE;": "ⅇ",
                        "&Fcy;": "Ф",
                        "&Ffr;": "𝔉",
                        "&FilledSmallSquare;": "◼",
                        "&FilledVerySmallSquare;": "▪",
                        "&Fopf;": "𝔽",
                        "&ForAll;": "∀",
                        "&Fouriertrf;": "ℱ",
                        "&Fscr;": "ℱ",
                        "&GJcy;": "Ѓ",
                        "&GT": ">",
                        "&GT;": ">",
                        "&Gamma;": "Γ",
                        "&Gammad;": "Ϝ",
                        "&Gbreve;": "Ğ",
                        "&Gcedil;": "Ģ",
                        "&Gcirc;": "Ĝ",
                        "&Gcy;": "Г",
                        "&Gdot;": "Ġ",
                        "&Gfr;": "𝔊",
                        "&Gg;": "⋙",
                        "&Gopf;": "𝔾",
                        "&GreaterEqual;": "≥",
                        "&GreaterEqualLess;": "⋛",
                        "&GreaterFullEqual;": "≧",
                        "&GreaterGreater;": "⪢",
                        "&GreaterLess;": "≷",
                        "&GreaterSlantEqual;": "⩾",
                        "&GreaterTilde;": "≳",
                        "&Gscr;": "𝒢",
                        "&Gt;": "≫",
                        "&HARDcy;": "Ъ",
                        "&Hacek;": "ˇ",
                        "&Hat;": "^",
                        "&Hcirc;": "Ĥ",
                        "&Hfr;": "ℌ",
                        "&HilbertSpace;": "ℋ",
                        "&Hopf;": "ℍ",
                        "&HorizontalLine;": "─",
                        "&Hscr;": "ℋ",
                        "&Hstrok;": "Ħ",
                        "&HumpDownHump;": "≎",
                        "&HumpEqual;": "≏",
                        "&IEcy;": "Е",
                        "&IJlig;": "Ĳ",
                        "&IOcy;": "Ё",
                        "&Iacute": "Í",
                        "&Iacute;": "Í",
                        "&Icirc": "Î",
                        "&Icirc;": "Î",
                        "&Icy;": "И",
                        "&Idot;": "İ",
                        "&Ifr;": "ℑ",
                        "&Igrave": "Ì",
                        "&Igrave;": "Ì",
                        "&Im;": "ℑ",
                        "&Imacr;": "Ī",
                        "&ImaginaryI;": "ⅈ",
                        "&Implies;": "⇒",
                        "&Int;": "∬",
                        "&Integral;": "∫",
                        "&Intersection;": "⋂",
                        "&InvisibleComma;": "⁣",
                        "&InvisibleTimes;": "⁢",
                        "&Iogon;": "Į",
                        "&Iopf;": "𝕀",
                        "&Iota;": "Ι",
                        "&Iscr;": "ℐ",
                        "&Itilde;": "Ĩ",
                        "&Iukcy;": "І",
                        "&Iuml": "Ï",
                        "&Iuml;": "Ï",
                        "&Jcirc;": "Ĵ",
                        "&Jcy;": "Й",
                        "&Jfr;": "𝔍",
                        "&Jopf;": "𝕁",
                        "&Jscr;": "𝒥",
                        "&Jsercy;": "Ј",
                        "&Jukcy;": "Є",
                        "&KHcy;": "Х",
                        "&KJcy;": "Ќ",
                        "&Kappa;": "Κ",
                        "&Kcedil;": "Ķ",
                        "&Kcy;": "К",
                        "&Kfr;": "𝔎",
                        "&Kopf;": "𝕂",
                        "&Kscr;": "𝒦",
                        "&LJcy;": "Љ",
                        "&LT": "<",
                        "&LT;": "<",
                        "&Lacute;": "Ĺ",
                        "&Lambda;": "Λ",
                        "&Lang;": "⟪",
                        "&Laplacetrf;": "ℒ",
                        "&Larr;": "↞",
                        "&Lcaron;": "Ľ",
                        "&Lcedil;": "Ļ",
                        "&Lcy;": "Л",
                        "&LeftAngleBracket;": "⟨",
                        "&LeftArrow;": "←",
                        "&LeftArrowBar;": "⇤",
                        "&LeftArrowRightArrow;": "⇆",
                        "&LeftCeiling;": "⌈",
                        "&LeftDoubleBracket;": "⟦",
                        "&LeftDownTeeVector;": "⥡",
                        "&LeftDownVector;": "⇃",
                        "&LeftDownVectorBar;": "⥙",
                        "&LeftFloor;": "⌊",
                        "&LeftRightArrow;": "↔",
                        "&LeftRightVector;": "⥎",
                        "&LeftTee;": "⊣",
                        "&LeftTeeArrow;": "↤",
                        "&LeftTeeVector;": "⥚",
                        "&LeftTriangle;": "⊲",
                        "&LeftTriangleBar;": "⧏",
                        "&LeftTriangleEqual;": "⊴",
                        "&LeftUpDownVector;": "⥑",
                        "&LeftUpTeeVector;": "⥠",
                        "&LeftUpVector;": "↿",
                        "&LeftUpVectorBar;": "⥘",
                        "&LeftVector;": "↼",
                        "&LeftVectorBar;": "⥒",
                        "&Leftarrow;": "⇐",
                        "&Leftrightarrow;": "⇔",
                        "&LessEqualGreater;": "⋚",
                        "&LessFullEqual;": "≦",
                        "&LessGreater;": "≶",
                        "&LessLess;": "⪡",
                        "&LessSlantEqual;": "⩽",
                        "&LessTilde;": "≲",
                        "&Lfr;": "𝔏",
                        "&Ll;": "⋘",
                        "&Lleftarrow;": "⇚",
                        "&Lmidot;": "Ŀ",
                        "&LongLeftArrow;": "⟵",
                        "&LongLeftRightArrow;": "⟷",
                        "&LongRightArrow;": "⟶",
                        "&Longleftarrow;": "⟸",
                        "&Longleftrightarrow;": "⟺",
                        "&Longrightarrow;": "⟹",
                        "&Lopf;": "𝕃",
                        "&LowerLeftArrow;": "↙",
                        "&LowerRightArrow;": "↘",
                        "&Lscr;": "ℒ",
                        "&Lsh;": "↰",
                        "&Lstrok;": "Ł",
                        "&Lt;": "≪",
                        "&Map;": "⤅",
                        "&Mcy;": "М",
                        "&MediumSpace;": " ",
                        "&Mellintrf;": "ℳ",
                        "&Mfr;": "𝔐",
                        "&MinusPlus;": "∓",
                        "&Mopf;": "𝕄",
                        "&Mscr;": "ℳ",
                        "&Mu;": "Μ",
                        "&NJcy;": "Њ",
                        "&Nacute;": "Ń",
                        "&Ncaron;": "Ň",
                        "&Ncedil;": "Ņ",
                        "&Ncy;": "Н",
                        "&NegativeMediumSpace;": "​",
                        "&NegativeThickSpace;": "​",
                        "&NegativeThinSpace;": "​",
                        "&NegativeVeryThinSpace;": "​",
                        "&NestedGreaterGreater;": "≫",
                        "&NestedLessLess;": "≪",
                        "&NewLine;": "\n",
                        "&Nfr;": "𝔑",
                        "&NoBreak;": "⁠",
                        "&NonBreakingSpace;": " ",
                        "&Nopf;": "ℕ",
                        "&Not;": "⫬",
                        "&NotCongruent;": "≢",
                        "&NotCupCap;": "≭",
                        "&NotDoubleVerticalBar;": "∦",
                        "&NotElement;": "∉",
                        "&NotEqual;": "≠",
                        "&NotEqualTilde;": "≂̸",
                        "&NotExists;": "∄",
                        "&NotGreater;": "≯",
                        "&NotGreaterEqual;": "≱",
                        "&NotGreaterFullEqual;": "≧̸",
                        "&NotGreaterGreater;": "≫̸",
                        "&NotGreaterLess;": "≹",
                        "&NotGreaterSlantEqual;": "⩾̸",
                        "&NotGreaterTilde;": "≵",
                        "&NotHumpDownHump;": "≎̸",
                        "&NotHumpEqual;": "≏̸",
                        "&NotLeftTriangle;": "⋪",
                        "&NotLeftTriangleBar;": "⧏̸",
                        "&NotLeftTriangleEqual;": "⋬",
                        "&NotLess;": "≮",
                        "&NotLessEqual;": "≰",
                        "&NotLessGreater;": "≸",
                        "&NotLessLess;": "≪̸",
                        "&NotLessSlantEqual;": "⩽̸",
                        "&NotLessTilde;": "≴",
                        "&NotNestedGreaterGreater;": "⪢̸",
                        "&NotNestedLessLess;": "⪡̸",
                        "&NotPrecedes;": "⊀",
                        "&NotPrecedesEqual;": "⪯̸",
                        "&NotPrecedesSlantEqual;": "⋠",
                        "&NotReverseElement;": "∌",
                        "&NotRightTriangle;": "⋫",
                        "&NotRightTriangleBar;": "⧐̸",
                        "&NotRightTriangleEqual;": "⋭",
                        "&NotSquareSubset;": "⊏̸",
                        "&NotSquareSubsetEqual;": "⋢",
                        "&NotSquareSuperset;": "⊐̸",
                        "&NotSquareSupersetEqual;": "⋣",
                        "&NotSubset;": "⊂⃒",
                        "&NotSubsetEqual;": "⊈",
                        "&NotSucceeds;": "⊁",
                        "&NotSucceedsEqual;": "⪰̸",
                        "&NotSucceedsSlantEqual;": "⋡",
                        "&NotSucceedsTilde;": "≿̸",
                        "&NotSuperset;": "⊃⃒",
                        "&NotSupersetEqual;": "⊉",
                        "&NotTilde;": "≁",
                        "&NotTildeEqual;": "≄",
                        "&NotTildeFullEqual;": "≇",
                        "&NotTildeTilde;": "≉",
                        "&NotVerticalBar;": "∤",
                        "&Nscr;": "𝒩",
                        "&Ntilde": "Ñ",
                        "&Ntilde;": "Ñ",
                        "&Nu;": "Ν",
                        "&OElig;": "Œ",
                        "&Oacute": "Ó",
                        "&Oacute;": "Ó",
                        "&Ocirc": "Ô",
                        "&Ocirc;": "Ô",
                        "&Ocy;": "О",
                        "&Odblac;": "Ő",
                        "&Ofr;": "𝔒",
                        "&Ograve": "Ò",
                        "&Ograve;": "Ò",
                        "&Omacr;": "Ō",
                        "&Omega;": "Ω",
                        "&Omicron;": "Ο",
                        "&Oopf;": "𝕆",
                        "&OpenCurlyDoubleQuote;": "“",
                        "&OpenCurlyQuote;": "‘",
                        "&Or;": "⩔",
                        "&Oscr;": "𝒪",
                        "&Oslash": "Ø",
                        "&Oslash;": "Ø",
                        "&Otilde": "Õ",
                        "&Otilde;": "Õ",
                        "&Otimes;": "⨷",
                        "&Ouml": "Ö",
                        "&Ouml;": "Ö",
                        "&OverBar;": "‾",
                        "&OverBrace;": "⏞",
                        "&OverBracket;": "⎴",
                        "&OverParenthesis;": "⏜",
                        "&PartialD;": "∂",
                        "&Pcy;": "П",
                        "&Pfr;": "𝔓",
                        "&Phi;": "Φ",
                        "&Pi;": "Π",
                        "&PlusMinus;": "±",
                        "&Poincareplane;": "ℌ",
                        "&Popf;": "ℙ",
                        "&Pr;": "⪻",
                        "&Precedes;": "≺",
                        "&PrecedesEqual;": "⪯",
                        "&PrecedesSlantEqual;": "≼",
                        "&PrecedesTilde;": "≾",
                        "&Prime;": "″",
                        "&Product;": "∏",
                        "&Proportion;": "∷",
                        "&Proportional;": "∝",
                        "&Pscr;": "𝒫",
                        "&Psi;": "Ψ",
                        "&QUOT": '"',
                        "&QUOT;": '"',
                        "&Qfr;": "𝔔",
                        "&Qopf;": "ℚ",
                        "&Qscr;": "𝒬",
                        "&RBarr;": "⤐",
                        "&REG": "®",
                        "&REG;": "®",
                        "&Racute;": "Ŕ",
                        "&Rang;": "⟫",
                        "&Rarr;": "↠",
                        "&Rarrtl;": "⤖",
                        "&Rcaron;": "Ř",
                        "&Rcedil;": "Ŗ",
                        "&Rcy;": "Р",
                        "&Re;": "ℜ",
                        "&ReverseElement;": "∋",
                        "&ReverseEquilibrium;": "⇋",
                        "&ReverseUpEquilibrium;": "⥯",
                        "&Rfr;": "ℜ",
                        "&Rho;": "Ρ",
                        "&RightAngleBracket;": "⟩",
                        "&RightArrow;": "→",
                        "&RightArrowBar;": "⇥",
                        "&RightArrowLeftArrow;": "⇄",
                        "&RightCeiling;": "⌉",
                        "&RightDoubleBracket;": "⟧",
                        "&RightDownTeeVector;": "⥝",
                        "&RightDownVector;": "⇂",
                        "&RightDownVectorBar;": "⥕",
                        "&RightFloor;": "⌋",
                        "&RightTee;": "⊢",
                        "&RightTeeArrow;": "↦",
                        "&RightTeeVector;": "⥛",
                        "&RightTriangle;": "⊳",
                        "&RightTriangleBar;": "⧐",
                        "&RightTriangleEqual;": "⊵",
                        "&RightUpDownVector;": "⥏",
                        "&RightUpTeeVector;": "⥜",
                        "&RightUpVector;": "↾",
                        "&RightUpVectorBar;": "⥔",
                        "&RightVector;": "⇀",
                        "&RightVectorBar;": "⥓",
                        "&Rightarrow;": "⇒",
                        "&Ropf;": "ℝ",
                        "&RoundImplies;": "⥰",
                        "&Rrightarrow;": "⇛",
                        "&Rscr;": "ℛ",
                        "&Rsh;": "↱",
                        "&RuleDelayed;": "⧴",
                        "&SHCHcy;": "Щ",
                        "&SHcy;": "Ш",
                        "&SOFTcy;": "Ь",
                        "&Sacute;": "Ś",
                        "&Sc;": "⪼",
                        "&Scaron;": "Š",
                        "&Scedil;": "Ş",
                        "&Scirc;": "Ŝ",
                        "&Scy;": "С",
                        "&Sfr;": "𝔖",
                        "&ShortDownArrow;": "↓",
                        "&ShortLeftArrow;": "←",
                        "&ShortRightArrow;": "→",
                        "&ShortUpArrow;": "↑",
                        "&Sigma;": "Σ",
                        "&SmallCircle;": "∘",
                        "&Sopf;": "𝕊",
                        "&Sqrt;": "√",
                        "&Square;": "□",
                        "&SquareIntersection;": "⊓",
                        "&SquareSubset;": "⊏",
                        "&SquareSubsetEqual;": "⊑",
                        "&SquareSuperset;": "⊐",
                        "&SquareSupersetEqual;": "⊒",
                        "&SquareUnion;": "⊔",
                        "&Sscr;": "𝒮",
                        "&Star;": "⋆",
                        "&Sub;": "⋐",
                        "&Subset;": "⋐",
                        "&SubsetEqual;": "⊆",
                        "&Succeeds;": "≻",
                        "&SucceedsEqual;": "⪰",
                        "&SucceedsSlantEqual;": "≽",
                        "&SucceedsTilde;": "≿",
                        "&SuchThat;": "∋",
                        "&Sum;": "∑",
                        "&Sup;": "⋑",
                        "&Superset;": "⊃",
                        "&SupersetEqual;": "⊇",
                        "&Supset;": "⋑",
                        "&THORN": "Þ",
                        "&THORN;": "Þ",
                        "&TRADE;": "™",
                        "&TSHcy;": "Ћ",
                        "&TScy;": "Ц",
                        "&Tab;": "\t",
                        "&Tau;": "Τ",
                        "&Tcaron;": "Ť",
                        "&Tcedil;": "Ţ",
                        "&Tcy;": "Т",
                        "&Tfr;": "𝔗",
                        "&Therefore;": "∴",
                        "&Theta;": "Θ",
                        "&ThickSpace;": "  ",
                        "&ThinSpace;": " ",
                        "&Tilde;": "∼",
                        "&TildeEqual;": "≃",
                        "&TildeFullEqual;": "≅",
                        "&TildeTilde;": "≈",
                        "&Topf;": "𝕋",
                        "&TripleDot;": "⃛",
                        "&Tscr;": "𝒯",
                        "&Tstrok;": "Ŧ",
                        "&Uacute": "Ú",
                        "&Uacute;": "Ú",
                        "&Uarr;": "↟",
                        "&Uarrocir;": "⥉",
                        "&Ubrcy;": "Ў",
                        "&Ubreve;": "Ŭ",
                        "&Ucirc": "Û",
                        "&Ucirc;": "Û",
                        "&Ucy;": "У",
                        "&Udblac;": "Ű",
                        "&Ufr;": "𝔘",
                        "&Ugrave": "Ù",
                        "&Ugrave;": "Ù",
                        "&Umacr;": "Ū",
                        "&UnderBar;": "_",
                        "&UnderBrace;": "⏟",
                        "&UnderBracket;": "⎵",
                        "&UnderParenthesis;": "⏝",
                        "&Union;": "⋃",
                        "&UnionPlus;": "⊎",
                        "&Uogon;": "Ų",
                        "&Uopf;": "𝕌",
                        "&UpArrow;": "↑",
                        "&UpArrowBar;": "⤒",
                        "&UpArrowDownArrow;": "⇅",
                        "&UpDownArrow;": "↕",
                        "&UpEquilibrium;": "⥮",
                        "&UpTee;": "⊥",
                        "&UpTeeArrow;": "↥",
                        "&Uparrow;": "⇑",
                        "&Updownarrow;": "⇕",
                        "&UpperLeftArrow;": "↖",
                        "&UpperRightArrow;": "↗",
                        "&Upsi;": "ϒ",
                        "&Upsilon;": "Υ",
                        "&Uring;": "Ů",
                        "&Uscr;": "𝒰",
                        "&Utilde;": "Ũ",
                        "&Uuml": "Ü",
                        "&Uuml;": "Ü",
                        "&VDash;": "⊫",
                        "&Vbar;": "⫫",
                        "&Vcy;": "В",
                        "&Vdash;": "⊩",
                        "&Vdashl;": "⫦",
                        "&Vee;": "⋁",
                        "&Verbar;": "‖",
                        "&Vert;": "‖",
                        "&VerticalBar;": "∣",
                        "&VerticalLine;": "|",
                        "&VerticalSeparator;": "❘",
                        "&VerticalTilde;": "≀",
                        "&VeryThinSpace;": " ",
                        "&Vfr;": "𝔙",
                        "&Vopf;": "𝕍",
                        "&Vscr;": "𝒱",
                        "&Vvdash;": "⊪",
                        "&Wcirc;": "Ŵ",
                        "&Wedge;": "⋀",
                        "&Wfr;": "𝔚",
                        "&Wopf;": "𝕎",
                        "&Wscr;": "𝒲",
                        "&Xfr;": "𝔛",
                        "&Xi;": "Ξ",
                        "&Xopf;": "𝕏",
                        "&Xscr;": "𝒳",
                        "&YAcy;": "Я",
                        "&YIcy;": "Ї",
                        "&YUcy;": "Ю",
                        "&Yacute": "Ý",
                        "&Yacute;": "Ý",
                        "&Ycirc;": "Ŷ",
                        "&Ycy;": "Ы",
                        "&Yfr;": "𝔜",
                        "&Yopf;": "𝕐",
                        "&Yscr;": "𝒴",
                        "&Yuml;": "Ÿ",
                        "&ZHcy;": "Ж",
                        "&Zacute;": "Ź",
                        "&Zcaron;": "Ž",
                        "&Zcy;": "З",
                        "&Zdot;": "Ż",
                        "&ZeroWidthSpace;": "​",
                        "&Zeta;": "Ζ",
                        "&Zfr;": "ℨ",
                        "&Zopf;": "ℤ",
                        "&Zscr;": "𝒵",
                        "&aacute": "á",
                        "&aacute;": "á",
                        "&abreve;": "ă",
                        "&ac;": "∾",
                        "&acE;": "∾̳",
                        "&acd;": "∿",
                        "&acirc": "â",
                        "&acirc;": "â",
                        "&acute": "´",
                        "&acute;": "´",
                        "&acy;": "а",
                        "&aelig": "æ",
                        "&aelig;": "æ",
                        "&af;": "⁡",
                        "&afr;": "𝔞",
                        "&agrave": "à",
                        "&agrave;": "à",
                        "&alefsym;": "ℵ",
                        "&aleph;": "ℵ",
                        "&alpha;": "α",
                        "&amacr;": "ā",
                        "&amalg;": "⨿",
                        "&amp": "&",
                        "&amp;": "&",
                        "&and;": "∧",
                        "&andand;": "⩕",
                        "&andd;": "⩜",
                        "&andslope;": "⩘",
                        "&andv;": "⩚",
                        "&ang;": "∠",
                        "&ange;": "⦤",
                        "&angle;": "∠",
                        "&angmsd;": "∡",
                        "&angmsdaa;": "⦨",
                        "&angmsdab;": "⦩",
                        "&angmsdac;": "⦪",
                        "&angmsdad;": "⦫",
                        "&angmsdae;": "⦬",
                        "&angmsdaf;": "⦭",
                        "&angmsdag;": "⦮",
                        "&angmsdah;": "⦯",
                        "&angrt;": "∟",
                        "&angrtvb;": "⊾",
                        "&angrtvbd;": "⦝",
                        "&angsph;": "∢",
                        "&angst;": "Å",
                        "&angzarr;": "⍼",
                        "&aogon;": "ą",
                        "&aopf;": "𝕒",
                        "&ap;": "≈",
                        "&apE;": "⩰",
                        "&apacir;": "⩯",
                        "&ape;": "≊",
                        "&apid;": "≋",
                        "&apos;": "'",
                        "&approx;": "≈",
                        "&approxeq;": "≊",
                        "&aring": "å",
                        "&aring;": "å",
                        "&ascr;": "𝒶",
                        "&ast;": "*",
                        "&asymp;": "≈",
                        "&asympeq;": "≍",
                        "&atilde": "ã",
                        "&atilde;": "ã",
                        "&auml": "ä",
                        "&auml;": "ä",
                        "&awconint;": "∳",
                        "&awint;": "⨑",
                        "&bNot;": "⫭",
                        "&backcong;": "≌",
                        "&backepsilon;": "϶",
                        "&backprime;": "‵",
                        "&backsim;": "∽",
                        "&backsimeq;": "⋍",
                        "&barvee;": "⊽",
                        "&barwed;": "⌅",
                        "&barwedge;": "⌅",
                        "&bbrk;": "⎵",
                        "&bbrktbrk;": "⎶",
                        "&bcong;": "≌",
                        "&bcy;": "б",
                        "&bdquo;": "„",
                        "&becaus;": "∵",
                        "&because;": "∵",
                        "&bemptyv;": "⦰",
                        "&bepsi;": "϶",
                        "&bernou;": "ℬ",
                        "&beta;": "β",
                        "&beth;": "ℶ",
                        "&between;": "≬",
                        "&bfr;": "𝔟",
                        "&bigcap;": "⋂",
                        "&bigcirc;": "◯",
                        "&bigcup;": "⋃",
                        "&bigodot;": "⨀",
                        "&bigoplus;": "⨁",
                        "&bigotimes;": "⨂",
                        "&bigsqcup;": "⨆",
                        "&bigstar;": "★",
                        "&bigtriangledown;": "▽",
                        "&bigtriangleup;": "△",
                        "&biguplus;": "⨄",
                        "&bigvee;": "⋁",
                        "&bigwedge;": "⋀",
                        "&bkarow;": "⤍",
                        "&blacklozenge;": "⧫",
                        "&blacksquare;": "▪",
                        "&blacktriangle;": "▴",
                        "&blacktriangledown;": "▾",
                        "&blacktriangleleft;": "◂",
                        "&blacktriangleright;": "▸",
                        "&blank;": "␣",
                        "&blk12;": "▒",
                        "&blk14;": "░",
                        "&blk34;": "▓",
                        "&block;": "█",
                        "&bne;": "=⃥",
                        "&bnequiv;": "≡⃥",
                        "&bnot;": "⌐",
                        "&bopf;": "𝕓",
                        "&bot;": "⊥",
                        "&bottom;": "⊥",
                        "&bowtie;": "⋈",
                        "&boxDL;": "╗",
                        "&boxDR;": "╔",
                        "&boxDl;": "╖",
                        "&boxDr;": "╓",
                        "&boxH;": "═",
                        "&boxHD;": "╦",
                        "&boxHU;": "╩",
                        "&boxHd;": "╤",
                        "&boxHu;": "╧",
                        "&boxUL;": "╝",
                        "&boxUR;": "╚",
                        "&boxUl;": "╜",
                        "&boxUr;": "╙",
                        "&boxV;": "║",
                        "&boxVH;": "╬",
                        "&boxVL;": "╣",
                        "&boxVR;": "╠",
                        "&boxVh;": "╫",
                        "&boxVl;": "╢",
                        "&boxVr;": "╟",
                        "&boxbox;": "⧉",
                        "&boxdL;": "╕",
                        "&boxdR;": "╒",
                        "&boxdl;": "┐",
                        "&boxdr;": "┌",
                        "&boxh;": "─",
                        "&boxhD;": "╥",
                        "&boxhU;": "╨",
                        "&boxhd;": "┬",
                        "&boxhu;": "┴",
                        "&boxminus;": "⊟",
                        "&boxplus;": "⊞",
                        "&boxtimes;": "⊠",
                        "&boxuL;": "╛",
                        "&boxuR;": "╘",
                        "&boxul;": "┘",
                        "&boxur;": "└",
                        "&boxv;": "│",
                        "&boxvH;": "╪",
                        "&boxvL;": "╡",
                        "&boxvR;": "╞",
                        "&boxvh;": "┼",
                        "&boxvl;": "┤",
                        "&boxvr;": "├",
                        "&bprime;": "‵",
                        "&breve;": "˘",
                        "&brvbar": "¦",
                        "&brvbar;": "¦",
                        "&bscr;": "𝒷",
                        "&bsemi;": "⁏",
                        "&bsim;": "∽",
                        "&bsime;": "⋍",
                        "&bsol;": "\\",
                        "&bsolb;": "⧅",
                        "&bsolhsub;": "⟈",
                        "&bull;": "•",
                        "&bullet;": "•",
                        "&bump;": "≎",
                        "&bumpE;": "⪮",
                        "&bumpe;": "≏",
                        "&bumpeq;": "≏",
                        "&cacute;": "ć",
                        "&cap;": "∩",
                        "&capand;": "⩄",
                        "&capbrcup;": "⩉",
                        "&capcap;": "⩋",
                        "&capcup;": "⩇",
                        "&capdot;": "⩀",
                        "&caps;": "∩︀",
                        "&caret;": "⁁",
                        "&caron;": "ˇ",
                        "&ccaps;": "⩍",
                        "&ccaron;": "č",
                        "&ccedil": "ç",
                        "&ccedil;": "ç",
                        "&ccirc;": "ĉ",
                        "&ccups;": "⩌",
                        "&ccupssm;": "⩐",
                        "&cdot;": "ċ",
                        "&cedil": "¸",
                        "&cedil;": "¸",
                        "&cemptyv;": "⦲",
                        "&cent": "¢",
                        "&cent;": "¢",
                        "&centerdot;": "·",
                        "&cfr;": "𝔠",
                        "&chcy;": "ч",
                        "&check;": "✓",
                        "&checkmark;": "✓",
                        "&chi;": "χ",
                        "&cir;": "○",
                        "&cirE;": "⧃",
                        "&circ;": "ˆ",
                        "&circeq;": "≗",
                        "&circlearrowleft;": "↺",
                        "&circlearrowright;": "↻",
                        "&circledR;": "®",
                        "&circledS;": "Ⓢ",
                        "&circledast;": "⊛",
                        "&circledcirc;": "⊚",
                        "&circleddash;": "⊝",
                        "&cire;": "≗",
                        "&cirfnint;": "⨐",
                        "&cirmid;": "⫯",
                        "&cirscir;": "⧂",
                        "&clubs;": "♣",
                        "&clubsuit;": "♣",
                        "&colon;": ":",
                        "&colone;": "≔",
                        "&coloneq;": "≔",
                        "&comma;": ",",
                        "&commat;": "@",
                        "&comp;": "∁",
                        "&compfn;": "∘",
                        "&complement;": "∁",
                        "&complexes;": "ℂ",
                        "&cong;": "≅",
                        "&congdot;": "⩭",
                        "&conint;": "∮",
                        "&copf;": "𝕔",
                        "&coprod;": "∐",
                        "&copy": "©",
                        "&copy;": "©",
                        "&copysr;": "℗",
                        "&crarr;": "↵",
                        "&cross;": "✗",
                        "&cscr;": "𝒸",
                        "&csub;": "⫏",
                        "&csube;": "⫑",
                        "&csup;": "⫐",
                        "&csupe;": "⫒",
                        "&ctdot;": "⋯",
                        "&cudarrl;": "⤸",
                        "&cudarrr;": "⤵",
                        "&cuepr;": "⋞",
                        "&cuesc;": "⋟",
                        "&cularr;": "↶",
                        "&cularrp;": "⤽",
                        "&cup;": "∪",
                        "&cupbrcap;": "⩈",
                        "&cupcap;": "⩆",
                        "&cupcup;": "⩊",
                        "&cupdot;": "⊍",
                        "&cupor;": "⩅",
                        "&cups;": "∪︀",
                        "&curarr;": "↷",
                        "&curarrm;": "⤼",
                        "&curlyeqprec;": "⋞",
                        "&curlyeqsucc;": "⋟",
                        "&curlyvee;": "⋎",
                        "&curlywedge;": "⋏",
                        "&curren": "¤",
                        "&curren;": "¤",
                        "&curvearrowleft;": "↶",
                        "&curvearrowright;": "↷",
                        "&cuvee;": "⋎",
                        "&cuwed;": "⋏",
                        "&cwconint;": "∲",
                        "&cwint;": "∱",
                        "&cylcty;": "⌭",
                        "&dArr;": "⇓",
                        "&dHar;": "⥥",
                        "&dagger;": "†",
                        "&daleth;": "ℸ",
                        "&darr;": "↓",
                        "&dash;": "‐",
                        "&dashv;": "⊣",
                        "&dbkarow;": "⤏",
                        "&dblac;": "˝",
                        "&dcaron;": "ď",
                        "&dcy;": "д",
                        "&dd;": "ⅆ",
                        "&ddagger;": "‡",
                        "&ddarr;": "⇊",
                        "&ddotseq;": "⩷",
                        "&deg": "°",
                        "&deg;": "°",
                        "&delta;": "δ",
                        "&demptyv;": "⦱",
                        "&dfisht;": "⥿",
                        "&dfr;": "𝔡",
                        "&dharl;": "⇃",
                        "&dharr;": "⇂",
                        "&diam;": "⋄",
                        "&diamond;": "⋄",
                        "&diamondsuit;": "♦",
                        "&diams;": "♦",
                        "&die;": "¨",
                        "&digamma;": "ϝ",
                        "&disin;": "⋲",
                        "&div;": "÷",
                        "&divide": "÷",
                        "&divide;": "÷",
                        "&divideontimes;": "⋇",
                        "&divonx;": "⋇",
                        "&djcy;": "ђ",
                        "&dlcorn;": "⌞",
                        "&dlcrop;": "⌍",
                        "&dollar;": "$",
                        "&dopf;": "𝕕",
                        "&dot;": "˙",
                        "&doteq;": "≐",
                        "&doteqdot;": "≑",
                        "&dotminus;": "∸",
                        "&dotplus;": "∔",
                        "&dotsquare;": "⊡",
                        "&doublebarwedge;": "⌆",
                        "&downarrow;": "↓",
                        "&downdownarrows;": "⇊",
                        "&downharpoonleft;": "⇃",
                        "&downharpoonright;": "⇂",
                        "&drbkarow;": "⤐",
                        "&drcorn;": "⌟",
                        "&drcrop;": "⌌",
                        "&dscr;": "𝒹",
                        "&dscy;": "ѕ",
                        "&dsol;": "⧶",
                        "&dstrok;": "đ",
                        "&dtdot;": "⋱",
                        "&dtri;": "▿",
                        "&dtrif;": "▾",
                        "&duarr;": "⇵",
                        "&duhar;": "⥯",
                        "&dwangle;": "⦦",
                        "&dzcy;": "џ",
                        "&dzigrarr;": "⟿",
                        "&eDDot;": "⩷",
                        "&eDot;": "≑",
                        "&eacute": "é",
                        "&eacute;": "é",
                        "&easter;": "⩮",
                        "&ecaron;": "ě",
                        "&ecir;": "≖",
                        "&ecirc": "ê",
                        "&ecirc;": "ê",
                        "&ecolon;": "≕",
                        "&ecy;": "э",
                        "&edot;": "ė",
                        "&ee;": "ⅇ",
                        "&efDot;": "≒",
                        "&efr;": "𝔢",
                        "&eg;": "⪚",
                        "&egrave": "è",
                        "&egrave;": "è",
                        "&egs;": "⪖",
                        "&egsdot;": "⪘",
                        "&el;": "⪙",
                        "&elinters;": "⏧",
                        "&ell;": "ℓ",
                        "&els;": "⪕",
                        "&elsdot;": "⪗",
                        "&emacr;": "ē",
                        "&empty;": "∅",
                        "&emptyset;": "∅",
                        "&emptyv;": "∅",
                        "&emsp13;": " ",
                        "&emsp14;": " ",
                        "&emsp;": " ",
                        "&eng;": "ŋ",
                        "&ensp;": " ",
                        "&eogon;": "ę",
                        "&eopf;": "𝕖",
                        "&epar;": "⋕",
                        "&eparsl;": "⧣",
                        "&eplus;": "⩱",
                        "&epsi;": "ε",
                        "&epsilon;": "ε",
                        "&epsiv;": "ϵ",
                        "&eqcirc;": "≖",
                        "&eqcolon;": "≕",
                        "&eqsim;": "≂",
                        "&eqslantgtr;": "⪖",
                        "&eqslantless;": "⪕",
                        "&equals;": "=",
                        "&equest;": "≟",
                        "&equiv;": "≡",
                        "&equivDD;": "⩸",
                        "&eqvparsl;": "⧥",
                        "&erDot;": "≓",
                        "&erarr;": "⥱",
                        "&escr;": "ℯ",
                        "&esdot;": "≐",
                        "&esim;": "≂",
                        "&eta;": "η",
                        "&eth": "ð",
                        "&eth;": "ð",
                        "&euml": "ë",
                        "&euml;": "ë",
                        "&euro;": "€",
                        "&excl;": "!",
                        "&exist;": "∃",
                        "&expectation;": "ℰ",
                        "&exponentiale;": "ⅇ",
                        "&fallingdotseq;": "≒",
                        "&fcy;": "ф",
                        "&female;": "♀",
                        "&ffilig;": "ﬃ",
                        "&fflig;": "ﬀ",
                        "&ffllig;": "ﬄ",
                        "&ffr;": "𝔣",
                        "&filig;": "ﬁ",
                        "&fjlig;": "fj",
                        "&flat;": "♭",
                        "&fllig;": "ﬂ",
                        "&fltns;": "▱",
                        "&fnof;": "ƒ",
                        "&fopf;": "𝕗",
                        "&forall;": "∀",
                        "&fork;": "⋔",
                        "&forkv;": "⫙",
                        "&fpartint;": "⨍",
                        "&frac12": "½",
                        "&frac12;": "½",
                        "&frac13;": "⅓",
                        "&frac14": "¼",
                        "&frac14;": "¼",
                        "&frac15;": "⅕",
                        "&frac16;": "⅙",
                        "&frac18;": "⅛",
                        "&frac23;": "⅔",
                        "&frac25;": "⅖",
                        "&frac34": "¾",
                        "&frac34;": "¾",
                        "&frac35;": "⅗",
                        "&frac38;": "⅜",
                        "&frac45;": "⅘",
                        "&frac56;": "⅚",
                        "&frac58;": "⅝",
                        "&frac78;": "⅞",
                        "&frasl;": "⁄",
                        "&frown;": "⌢",
                        "&fscr;": "𝒻",
                        "&gE;": "≧",
                        "&gEl;": "⪌",
                        "&gacute;": "ǵ",
                        "&gamma;": "γ",
                        "&gammad;": "ϝ",
                        "&gap;": "⪆",
                        "&gbreve;": "ğ",
                        "&gcirc;": "ĝ",
                        "&gcy;": "г",
                        "&gdot;": "ġ",
                        "&ge;": "≥",
                        "&gel;": "⋛",
                        "&geq;": "≥",
                        "&geqq;": "≧",
                        "&geqslant;": "⩾",
                        "&ges;": "⩾",
                        "&gescc;": "⪩",
                        "&gesdot;": "⪀",
                        "&gesdoto;": "⪂",
                        "&gesdotol;": "⪄",
                        "&gesl;": "⋛︀",
                        "&gesles;": "⪔",
                        "&gfr;": "𝔤",
                        "&gg;": "≫",
                        "&ggg;": "⋙",
                        "&gimel;": "ℷ",
                        "&gjcy;": "ѓ",
                        "&gl;": "≷",
                        "&glE;": "⪒",
                        "&gla;": "⪥",
                        "&glj;": "⪤",
                        "&gnE;": "≩",
                        "&gnap;": "⪊",
                        "&gnapprox;": "⪊",
                        "&gne;": "⪈",
                        "&gneq;": "⪈",
                        "&gneqq;": "≩",
                        "&gnsim;": "⋧",
                        "&gopf;": "𝕘",
                        "&grave;": "`",
                        "&gscr;": "ℊ",
                        "&gsim;": "≳",
                        "&gsime;": "⪎",
                        "&gsiml;": "⪐",
                        "&gt": ">",
                        "&gt;": ">",
                        "&gtcc;": "⪧",
                        "&gtcir;": "⩺",
                        "&gtdot;": "⋗",
                        "&gtlPar;": "⦕",
                        "&gtquest;": "⩼",
                        "&gtrapprox;": "⪆",
                        "&gtrarr;": "⥸",
                        "&gtrdot;": "⋗",
                        "&gtreqless;": "⋛",
                        "&gtreqqless;": "⪌",
                        "&gtrless;": "≷",
                        "&gtrsim;": "≳",
                        "&gvertneqq;": "≩︀",
                        "&gvnE;": "≩︀",
                        "&hArr;": "⇔",
                        "&hairsp;": " ",
                        "&half;": "½",
                        "&hamilt;": "ℋ",
                        "&hardcy;": "ъ",
                        "&harr;": "↔",
                        "&harrcir;": "⥈",
                        "&harrw;": "↭",
                        "&hbar;": "ℏ",
                        "&hcirc;": "ĥ",
                        "&hearts;": "♥",
                        "&heartsuit;": "♥",
                        "&hellip;": "…",
                        "&hercon;": "⊹",
                        "&hfr;": "𝔥",
                        "&hksearow;": "⤥",
                        "&hkswarow;": "⤦",
                        "&hoarr;": "⇿",
                        "&homtht;": "∻",
                        "&hookleftarrow;": "↩",
                        "&hookrightarrow;": "↪",
                        "&hopf;": "𝕙",
                        "&horbar;": "―",
                        "&hscr;": "𝒽",
                        "&hslash;": "ℏ",
                        "&hstrok;": "ħ",
                        "&hybull;": "⁃",
                        "&hyphen;": "‐",
                        "&iacute": "í",
                        "&iacute;": "í",
                        "&ic;": "⁣",
                        "&icirc": "î",
                        "&icirc;": "î",
                        "&icy;": "и",
                        "&iecy;": "е",
                        "&iexcl": "¡",
                        "&iexcl;": "¡",
                        "&iff;": "⇔",
                        "&ifr;": "𝔦",
                        "&igrave": "ì",
                        "&igrave;": "ì",
                        "&ii;": "ⅈ",
                        "&iiiint;": "⨌",
                        "&iiint;": "∭",
                        "&iinfin;": "⧜",
                        "&iiota;": "℩",
                        "&ijlig;": "ĳ",
                        "&imacr;": "ī",
                        "&image;": "ℑ",
                        "&imagline;": "ℐ",
                        "&imagpart;": "ℑ",
                        "&imath;": "ı",
                        "&imof;": "⊷",
                        "&imped;": "Ƶ",
                        "&in;": "∈",
                        "&incare;": "℅",
                        "&infin;": "∞",
                        "&infintie;": "⧝",
                        "&inodot;": "ı",
                        "&int;": "∫",
                        "&intcal;": "⊺",
                        "&integers;": "ℤ",
                        "&intercal;": "⊺",
                        "&intlarhk;": "⨗",
                        "&intprod;": "⨼",
                        "&iocy;": "ё",
                        "&iogon;": "į",
                        "&iopf;": "𝕚",
                        "&iota;": "ι",
                        "&iprod;": "⨼",
                        "&iquest": "¿",
                        "&iquest;": "¿",
                        "&iscr;": "𝒾",
                        "&isin;": "∈",
                        "&isinE;": "⋹",
                        "&isindot;": "⋵",
                        "&isins;": "⋴",
                        "&isinsv;": "⋳",
                        "&isinv;": "∈",
                        "&it;": "⁢",
                        "&itilde;": "ĩ",
                        "&iukcy;": "і",
                        "&iuml": "ï",
                        "&iuml;": "ï",
                        "&jcirc;": "ĵ",
                        "&jcy;": "й",
                        "&jfr;": "𝔧",
                        "&jmath;": "ȷ",
                        "&jopf;": "𝕛",
                        "&jscr;": "𝒿",
                        "&jsercy;": "ј",
                        "&jukcy;": "є",
                        "&kappa;": "κ",
                        "&kappav;": "ϰ",
                        "&kcedil;": "ķ",
                        "&kcy;": "к",
                        "&kfr;": "𝔨",
                        "&kgreen;": "ĸ",
                        "&khcy;": "х",
                        "&kjcy;": "ќ",
                        "&kopf;": "𝕜",
                        "&kscr;": "𝓀",
                        "&lAarr;": "⇚",
                        "&lArr;": "⇐",
                        "&lAtail;": "⤛",
                        "&lBarr;": "⤎",
                        "&lE;": "≦",
                        "&lEg;": "⪋",
                        "&lHar;": "⥢",
                        "&lacute;": "ĺ",
                        "&laemptyv;": "⦴",
                        "&lagran;": "ℒ",
                        "&lambda;": "λ",
                        "&lang;": "⟨",
                        "&langd;": "⦑",
                        "&langle;": "⟨",
                        "&lap;": "⪅",
                        "&laquo": "«",
                        "&laquo;": "«",
                        "&larr;": "←",
                        "&larrb;": "⇤",
                        "&larrbfs;": "⤟",
                        "&larrfs;": "⤝",
                        "&larrhk;": "↩",
                        "&larrlp;": "↫",
                        "&larrpl;": "⤹",
                        "&larrsim;": "⥳",
                        "&larrtl;": "↢",
                        "&lat;": "⪫",
                        "&latail;": "⤙",
                        "&late;": "⪭",
                        "&lates;": "⪭︀",
                        "&lbarr;": "⤌",
                        "&lbbrk;": "❲",
                        "&lbrace;": "{",
                        "&lbrack;": "[",
                        "&lbrke;": "⦋",
                        "&lbrksld;": "⦏",
                        "&lbrkslu;": "⦍",
                        "&lcaron;": "ľ",
                        "&lcedil;": "ļ",
                        "&lceil;": "⌈",
                        "&lcub;": "{",
                        "&lcy;": "л",
                        "&ldca;": "⤶",
                        "&ldquo;": "“",
                        "&ldquor;": "„",
                        "&ldrdhar;": "⥧",
                        "&ldrushar;": "⥋",
                        "&ldsh;": "↲",
                        "&le;": "≤",
                        "&leftarrow;": "←",
                        "&leftarrowtail;": "↢",
                        "&leftharpoondown;": "↽",
                        "&leftharpoonup;": "↼",
                        "&leftleftarrows;": "⇇",
                        "&leftrightarrow;": "↔",
                        "&leftrightarrows;": "⇆",
                        "&leftrightharpoons;": "⇋",
                        "&leftrightsquigarrow;": "↭",
                        "&leftthreetimes;": "⋋",
                        "&leg;": "⋚",
                        "&leq;": "≤",
                        "&leqq;": "≦",
                        "&leqslant;": "⩽",
                        "&les;": "⩽",
                        "&lescc;": "⪨",
                        "&lesdot;": "⩿",
                        "&lesdoto;": "⪁",
                        "&lesdotor;": "⪃",
                        "&lesg;": "⋚︀",
                        "&lesges;": "⪓",
                        "&lessapprox;": "⪅",
                        "&lessdot;": "⋖",
                        "&lesseqgtr;": "⋚",
                        "&lesseqqgtr;": "⪋",
                        "&lessgtr;": "≶",
                        "&lesssim;": "≲",
                        "&lfisht;": "⥼",
                        "&lfloor;": "⌊",
                        "&lfr;": "𝔩",
                        "&lg;": "≶",
                        "&lgE;": "⪑",
                        "&lhard;": "↽",
                        "&lharu;": "↼",
                        "&lharul;": "⥪",
                        "&lhblk;": "▄",
                        "&ljcy;": "љ",
                        "&ll;": "≪",
                        "&llarr;": "⇇",
                        "&llcorner;": "⌞",
                        "&llhard;": "⥫",
                        "&lltri;": "◺",
                        "&lmidot;": "ŀ",
                        "&lmoust;": "⎰",
                        "&lmoustache;": "⎰",
                        "&lnE;": "≨",
                        "&lnap;": "⪉",
                        "&lnapprox;": "⪉",
                        "&lne;": "⪇",
                        "&lneq;": "⪇",
                        "&lneqq;": "≨",
                        "&lnsim;": "⋦",
                        "&loang;": "⟬",
                        "&loarr;": "⇽",
                        "&lobrk;": "⟦",
                        "&longleftarrow;": "⟵",
                        "&longleftrightarrow;": "⟷",
                        "&longmapsto;": "⟼",
                        "&longrightarrow;": "⟶",
                        "&looparrowleft;": "↫",
                        "&looparrowright;": "↬",
                        "&lopar;": "⦅",
                        "&lopf;": "𝕝",
                        "&loplus;": "⨭",
                        "&lotimes;": "⨴",
                        "&lowast;": "∗",
                        "&lowbar;": "_",
                        "&loz;": "◊",
                        "&lozenge;": "◊",
                        "&lozf;": "⧫",
                        "&lpar;": "(",
                        "&lparlt;": "⦓",
                        "&lrarr;": "⇆",
                        "&lrcorner;": "⌟",
                        "&lrhar;": "⇋",
                        "&lrhard;": "⥭",
                        "&lrm;": "‎",
                        "&lrtri;": "⊿",
                        "&lsaquo;": "‹",
                        "&lscr;": "𝓁",
                        "&lsh;": "↰",
                        "&lsim;": "≲",
                        "&lsime;": "⪍",
                        "&lsimg;": "⪏",
                        "&lsqb;": "[",
                        "&lsquo;": "‘",
                        "&lsquor;": "‚",
                        "&lstrok;": "ł",
                        "&lt": "<",
                        "&lt;": "<",
                        "&ltcc;": "⪦",
                        "&ltcir;": "⩹",
                        "&ltdot;": "⋖",
                        "&lthree;": "⋋",
                        "&ltimes;": "⋉",
                        "&ltlarr;": "⥶",
                        "&ltquest;": "⩻",
                        "&ltrPar;": "⦖",
                        "&ltri;": "◃",
                        "&ltrie;": "⊴",
                        "&ltrif;": "◂",
                        "&lurdshar;": "⥊",
                        "&luruhar;": "⥦",
                        "&lvertneqq;": "≨︀",
                        "&lvnE;": "≨︀",
                        "&mDDot;": "∺",
                        "&macr": "¯",
                        "&macr;": "¯",
                        "&male;": "♂",
                        "&malt;": "✠",
                        "&maltese;": "✠",
                        "&map;": "↦",
                        "&mapsto;": "↦",
                        "&mapstodown;": "↧",
                        "&mapstoleft;": "↤",
                        "&mapstoup;": "↥",
                        "&marker;": "▮",
                        "&mcomma;": "⨩",
                        "&mcy;": "м",
                        "&mdash;": "—",
                        "&measuredangle;": "∡",
                        "&mfr;": "𝔪",
                        "&mho;": "℧",
                        "&micro": "µ",
                        "&micro;": "µ",
                        "&mid;": "∣",
                        "&midast;": "*",
                        "&midcir;": "⫰",
                        "&middot": "·",
                        "&middot;": "·",
                        "&minus;": "−",
                        "&minusb;": "⊟",
                        "&minusd;": "∸",
                        "&minusdu;": "⨪",
                        "&mlcp;": "⫛",
                        "&mldr;": "…",
                        "&mnplus;": "∓",
                        "&models;": "⊧",
                        "&mopf;": "𝕞",
                        "&mp;": "∓",
                        "&mscr;": "𝓂",
                        "&mstpos;": "∾",
                        "&mu;": "μ",
                        "&multimap;": "⊸",
                        "&mumap;": "⊸",
                        "&nGg;": "⋙̸",
                        "&nGt;": "≫⃒",
                        "&nGtv;": "≫̸",
                        "&nLeftarrow;": "⇍",
                        "&nLeftrightarrow;": "⇎",
                        "&nLl;": "⋘̸",
                        "&nLt;": "≪⃒",
                        "&nLtv;": "≪̸",
                        "&nRightarrow;": "⇏",
                        "&nVDash;": "⊯",
                        "&nVdash;": "⊮",
                        "&nabla;": "∇",
                        "&nacute;": "ń",
                        "&nang;": "∠⃒",
                        "&nap;": "≉",
                        "&napE;": "⩰̸",
                        "&napid;": "≋̸",
                        "&napos;": "ŉ",
                        "&napprox;": "≉",
                        "&natur;": "♮",
                        "&natural;": "♮",
                        "&naturals;": "ℕ",
                        "&nbsp": " ",
                        "&nbsp;": " ",
                        "&nbump;": "≎̸",
                        "&nbumpe;": "≏̸",
                        "&ncap;": "⩃",
                        "&ncaron;": "ň",
                        "&ncedil;": "ņ",
                        "&ncong;": "≇",
                        "&ncongdot;": "⩭̸",
                        "&ncup;": "⩂",
                        "&ncy;": "н",
                        "&ndash;": "–",
                        "&ne;": "≠",
                        "&neArr;": "⇗",
                        "&nearhk;": "⤤",
                        "&nearr;": "↗",
                        "&nearrow;": "↗",
                        "&nedot;": "≐̸",
                        "&nequiv;": "≢",
                        "&nesear;": "⤨",
                        "&nesim;": "≂̸",
                        "&nexist;": "∄",
                        "&nexists;": "∄",
                        "&nfr;": "𝔫",
                        "&ngE;": "≧̸",
                        "&nge;": "≱",
                        "&ngeq;": "≱",
                        "&ngeqq;": "≧̸",
                        "&ngeqslant;": "⩾̸",
                        "&nges;": "⩾̸",
                        "&ngsim;": "≵",
                        "&ngt;": "≯",
                        "&ngtr;": "≯",
                        "&nhArr;": "⇎",
                        "&nharr;": "↮",
                        "&nhpar;": "⫲",
                        "&ni;": "∋",
                        "&nis;": "⋼",
                        "&nisd;": "⋺",
                        "&niv;": "∋",
                        "&njcy;": "њ",
                        "&nlArr;": "⇍",
                        "&nlE;": "≦̸",
                        "&nlarr;": "↚",
                        "&nldr;": "‥",
                        "&nle;": "≰",
                        "&nleftarrow;": "↚",
                        "&nleftrightarrow;": "↮",
                        "&nleq;": "≰",
                        "&nleqq;": "≦̸",
                        "&nleqslant;": "⩽̸",
                        "&nles;": "⩽̸",
                        "&nless;": "≮",
                        "&nlsim;": "≴",
                        "&nlt;": "≮",
                        "&nltri;": "⋪",
                        "&nltrie;": "⋬",
                        "&nmid;": "∤",
                        "&nopf;": "𝕟",
                        "&not": "¬",
                        "&not;": "¬",
                        "&notin;": "∉",
                        "&notinE;": "⋹̸",
                        "&notindot;": "⋵̸",
                        "&notinva;": "∉",
                        "&notinvb;": "⋷",
                        "&notinvc;": "⋶",
                        "&notni;": "∌",
                        "&notniva;": "∌",
                        "&notnivb;": "⋾",
                        "&notnivc;": "⋽",
                        "&npar;": "∦",
                        "&nparallel;": "∦",
                        "&nparsl;": "⫽⃥",
                        "&npart;": "∂̸",
                        "&npolint;": "⨔",
                        "&npr;": "⊀",
                        "&nprcue;": "⋠",
                        "&npre;": "⪯̸",
                        "&nprec;": "⊀",
                        "&npreceq;": "⪯̸",
                        "&nrArr;": "⇏",
                        "&nrarr;": "↛",
                        "&nrarrc;": "⤳̸",
                        "&nrarrw;": "↝̸",
                        "&nrightarrow;": "↛",
                        "&nrtri;": "⋫",
                        "&nrtrie;": "⋭",
                        "&nsc;": "⊁",
                        "&nsccue;": "⋡",
                        "&nsce;": "⪰̸",
                        "&nscr;": "𝓃",
                        "&nshortmid;": "∤",
                        "&nshortparallel;": "∦",
                        "&nsim;": "≁",
                        "&nsime;": "≄",
                        "&nsimeq;": "≄",
                        "&nsmid;": "∤",
                        "&nspar;": "∦",
                        "&nsqsube;": "⋢",
                        "&nsqsupe;": "⋣",
                        "&nsub;": "⊄",
                        "&nsubE;": "⫅̸",
                        "&nsube;": "⊈",
                        "&nsubset;": "⊂⃒",
                        "&nsubseteq;": "⊈",
                        "&nsubseteqq;": "⫅̸",
                        "&nsucc;": "⊁",
                        "&nsucceq;": "⪰̸",
                        "&nsup;": "⊅",
                        "&nsupE;": "⫆̸",
                        "&nsupe;": "⊉",
                        "&nsupset;": "⊃⃒",
                        "&nsupseteq;": "⊉",
                        "&nsupseteqq;": "⫆̸",
                        "&ntgl;": "≹",
                        "&ntilde": "ñ",
                        "&ntilde;": "ñ",
                        "&ntlg;": "≸",
                        "&ntriangleleft;": "⋪",
                        "&ntrianglelefteq;": "⋬",
                        "&ntriangleright;": "⋫",
                        "&ntrianglerighteq;": "⋭",
                        "&nu;": "ν",
                        "&num;": "#",
                        "&numero;": "№",
                        "&numsp;": " ",
                        "&nvDash;": "⊭",
                        "&nvHarr;": "⤄",
                        "&nvap;": "≍⃒",
                        "&nvdash;": "⊬",
                        "&nvge;": "≥⃒",
                        "&nvgt;": ">⃒",
                        "&nvinfin;": "⧞",
                        "&nvlArr;": "⤂",
                        "&nvle;": "≤⃒",
                        "&nvlt;": "<⃒",
                        "&nvltrie;": "⊴⃒",
                        "&nvrArr;": "⤃",
                        "&nvrtrie;": "⊵⃒",
                        "&nvsim;": "∼⃒",
                        "&nwArr;": "⇖",
                        "&nwarhk;": "⤣",
                        "&nwarr;": "↖",
                        "&nwarrow;": "↖",
                        "&nwnear;": "⤧",
                        "&oS;": "Ⓢ",
                        "&oacute": "ó",
                        "&oacute;": "ó",
                        "&oast;": "⊛",
                        "&ocir;": "⊚",
                        "&ocirc": "ô",
                        "&ocirc;": "ô",
                        "&ocy;": "о",
                        "&odash;": "⊝",
                        "&odblac;": "ő",
                        "&odiv;": "⨸",
                        "&odot;": "⊙",
                        "&odsold;": "⦼",
                        "&oelig;": "œ",
                        "&ofcir;": "⦿",
                        "&ofr;": "𝔬",
                        "&ogon;": "˛",
                        "&ograve": "ò",
                        "&ograve;": "ò",
                        "&ogt;": "⧁",
                        "&ohbar;": "⦵",
                        "&ohm;": "Ω",
                        "&oint;": "∮",
                        "&olarr;": "↺",
                        "&olcir;": "⦾",
                        "&olcross;": "⦻",
                        "&oline;": "‾",
                        "&olt;": "⧀",
                        "&omacr;": "ō",
                        "&omega;": "ω",
                        "&omicron;": "ο",
                        "&omid;": "⦶",
                        "&ominus;": "⊖",
                        "&oopf;": "𝕠",
                        "&opar;": "⦷",
                        "&operp;": "⦹",
                        "&oplus;": "⊕",
                        "&or;": "∨",
                        "&orarr;": "↻",
                        "&ord;": "⩝",
                        "&order;": "ℴ",
                        "&orderof;": "ℴ",
                        "&ordf": "ª",
                        "&ordf;": "ª",
                        "&ordm": "º",
                        "&ordm;": "º",
                        "&origof;": "⊶",
                        "&oror;": "⩖",
                        "&orslope;": "⩗",
                        "&orv;": "⩛",
                        "&oscr;": "ℴ",
                        "&oslash": "ø",
                        "&oslash;": "ø",
                        "&osol;": "⊘",
                        "&otilde": "õ",
                        "&otilde;": "õ",
                        "&otimes;": "⊗",
                        "&otimesas;": "⨶",
                        "&ouml": "ö",
                        "&ouml;": "ö",
                        "&ovbar;": "⌽",
                        "&par;": "∥",
                        "&para": "¶",
                        "&para;": "¶",
                        "&parallel;": "∥",
                        "&parsim;": "⫳",
                        "&parsl;": "⫽",
                        "&part;": "∂",
                        "&pcy;": "п",
                        "&percnt;": "%",
                        "&period;": ".",
                        "&permil;": "‰",
                        "&perp;": "⊥",
                        "&pertenk;": "‱",
                        "&pfr;": "𝔭",
                        "&phi;": "φ",
                        "&phiv;": "ϕ",
                        "&phmmat;": "ℳ",
                        "&phone;": "☎",
                        "&pi;": "π",
                        "&pitchfork;": "⋔",
                        "&piv;": "ϖ",
                        "&planck;": "ℏ",
                        "&planckh;": "ℎ",
                        "&plankv;": "ℏ",
                        "&plus;": "+",
                        "&plusacir;": "⨣",
                        "&plusb;": "⊞",
                        "&pluscir;": "⨢",
                        "&plusdo;": "∔",
                        "&plusdu;": "⨥",
                        "&pluse;": "⩲",
                        "&plusmn": "±",
                        "&plusmn;": "±",
                        "&plussim;": "⨦",
                        "&plustwo;": "⨧",
                        "&pm;": "±",
                        "&pointint;": "⨕",
                        "&popf;": "𝕡",
                        "&pound": "£",
                        "&pound;": "£",
                        "&pr;": "≺",
                        "&prE;": "⪳",
                        "&prap;": "⪷",
                        "&prcue;": "≼",
                        "&pre;": "⪯",
                        "&prec;": "≺",
                        "&precapprox;": "⪷",
                        "&preccurlyeq;": "≼",
                        "&preceq;": "⪯",
                        "&precnapprox;": "⪹",
                        "&precneqq;": "⪵",
                        "&precnsim;": "⋨",
                        "&precsim;": "≾",
                        "&prime;": "′",
                        "&primes;": "ℙ",
                        "&prnE;": "⪵",
                        "&prnap;": "⪹",
                        "&prnsim;": "⋨",
                        "&prod;": "∏",
                        "&profalar;": "⌮",
                        "&profline;": "⌒",
                        "&profsurf;": "⌓",
                        "&prop;": "∝",
                        "&propto;": "∝",
                        "&prsim;": "≾",
                        "&prurel;": "⊰",
                        "&pscr;": "𝓅",
                        "&psi;": "ψ",
                        "&puncsp;": " ",
                        "&qfr;": "𝔮",
                        "&qint;": "⨌",
                        "&qopf;": "𝕢",
                        "&qprime;": "⁗",
                        "&qscr;": "𝓆",
                        "&quaternions;": "ℍ",
                        "&quatint;": "⨖",
                        "&quest;": "?",
                        "&questeq;": "≟",
                        "&quot": '"',
                        "&quot;": '"',
                        "&rAarr;": "⇛",
                        "&rArr;": "⇒",
                        "&rAtail;": "⤜",
                        "&rBarr;": "⤏",
                        "&rHar;": "⥤",
                        "&race;": "∽̱",
                        "&racute;": "ŕ",
                        "&radic;": "√",
                        "&raemptyv;": "⦳",
                        "&rang;": "⟩",
                        "&rangd;": "⦒",
                        "&range;": "⦥",
                        "&rangle;": "⟩",
                        "&raquo": "»",
                        "&raquo;": "»",
                        "&rarr;": "→",
                        "&rarrap;": "⥵",
                        "&rarrb;": "⇥",
                        "&rarrbfs;": "⤠",
                        "&rarrc;": "⤳",
                        "&rarrfs;": "⤞",
                        "&rarrhk;": "↪",
                        "&rarrlp;": "↬",
                        "&rarrpl;": "⥅",
                        "&rarrsim;": "⥴",
                        "&rarrtl;": "↣",
                        "&rarrw;": "↝",
                        "&ratail;": "⤚",
                        "&ratio;": "∶",
                        "&rationals;": "ℚ",
                        "&rbarr;": "⤍",
                        "&rbbrk;": "❳",
                        "&rbrace;": "}",
                        "&rbrack;": "]",
                        "&rbrke;": "⦌",
                        "&rbrksld;": "⦎",
                        "&rbrkslu;": "⦐",
                        "&rcaron;": "ř",
                        "&rcedil;": "ŗ",
                        "&rceil;": "⌉",
                        "&rcub;": "}",
                        "&rcy;": "р",
                        "&rdca;": "⤷",
                        "&rdldhar;": "⥩",
                        "&rdquo;": "”",
                        "&rdquor;": "”",
                        "&rdsh;": "↳",
                        "&real;": "ℜ",
                        "&realine;": "ℛ",
                        "&realpart;": "ℜ",
                        "&reals;": "ℝ",
                        "&rect;": "▭",
                        "&reg": "®",
                        "&reg;": "®",
                        "&rfisht;": "⥽",
                        "&rfloor;": "⌋",
                        "&rfr;": "𝔯",
                        "&rhard;": "⇁",
                        "&rharu;": "⇀",
                        "&rharul;": "⥬",
                        "&rho;": "ρ",
                        "&rhov;": "ϱ",
                        "&rightarrow;": "→",
                        "&rightarrowtail;": "↣",
                        "&rightharpoondown;": "⇁",
                        "&rightharpoonup;": "⇀",
                        "&rightleftarrows;": "⇄",
                        "&rightleftharpoons;": "⇌",
                        "&rightrightarrows;": "⇉",
                        "&rightsquigarrow;": "↝",
                        "&rightthreetimes;": "⋌",
                        "&ring;": "˚",
                        "&risingdotseq;": "≓",
                        "&rlarr;": "⇄",
                        "&rlhar;": "⇌",
                        "&rlm;": "‏",
                        "&rmoust;": "⎱",
                        "&rmoustache;": "⎱",
                        "&rnmid;": "⫮",
                        "&roang;": "⟭",
                        "&roarr;": "⇾",
                        "&robrk;": "⟧",
                        "&ropar;": "⦆",
                        "&ropf;": "𝕣",
                        "&roplus;": "⨮",
                        "&rotimes;": "⨵",
                        "&rpar;": ")",
                        "&rpargt;": "⦔",
                        "&rppolint;": "⨒",
                        "&rrarr;": "⇉",
                        "&rsaquo;": "›",
                        "&rscr;": "𝓇",
                        "&rsh;": "↱",
                        "&rsqb;": "]",
                        "&rsquo;": "’",
                        "&rsquor;": "’",
                        "&rthree;": "⋌",
                        "&rtimes;": "⋊",
                        "&rtri;": "▹",
                        "&rtrie;": "⊵",
                        "&rtrif;": "▸",
                        "&rtriltri;": "⧎",
                        "&ruluhar;": "⥨",
                        "&rx;": "℞",
                        "&sacute;": "ś",
                        "&sbquo;": "‚",
                        "&sc;": "≻",
                        "&scE;": "⪴",
                        "&scap;": "⪸",
                        "&scaron;": "š",
                        "&sccue;": "≽",
                        "&sce;": "⪰",
                        "&scedil;": "ş",
                        "&scirc;": "ŝ",
                        "&scnE;": "⪶",
                        "&scnap;": "⪺",
                        "&scnsim;": "⋩",
                        "&scpolint;": "⨓",
                        "&scsim;": "≿",
                        "&scy;": "с",
                        "&sdot;": "⋅",
                        "&sdotb;": "⊡",
                        "&sdote;": "⩦",
                        "&seArr;": "⇘",
                        "&searhk;": "⤥",
                        "&searr;": "↘",
                        "&searrow;": "↘",
                        "&sect": "§",
                        "&sect;": "§",
                        "&semi;": ";",
                        "&seswar;": "⤩",
                        "&setminus;": "∖",
                        "&setmn;": "∖",
                        "&sext;": "✶",
                        "&sfr;": "𝔰",
                        "&sfrown;": "⌢",
                        "&sharp;": "♯",
                        "&shchcy;": "щ",
                        "&shcy;": "ш",
                        "&shortmid;": "∣",
                        "&shortparallel;": "∥",
                        "&shy": "­",
                        "&shy;": "­",
                        "&sigma;": "σ",
                        "&sigmaf;": "ς",
                        "&sigmav;": "ς",
                        "&sim;": "∼",
                        "&simdot;": "⩪",
                        "&sime;": "≃",
                        "&simeq;": "≃",
                        "&simg;": "⪞",
                        "&simgE;": "⪠",
                        "&siml;": "⪝",
                        "&simlE;": "⪟",
                        "&simne;": "≆",
                        "&simplus;": "⨤",
                        "&simrarr;": "⥲",
                        "&slarr;": "←",
                        "&smallsetminus;": "∖",
                        "&smashp;": "⨳",
                        "&smeparsl;": "⧤",
                        "&smid;": "∣",
                        "&smile;": "⌣",
                        "&smt;": "⪪",
                        "&smte;": "⪬",
                        "&smtes;": "⪬︀",
                        "&softcy;": "ь",
                        "&sol;": "/",
                        "&solb;": "⧄",
                        "&solbar;": "⌿",
                        "&sopf;": "𝕤",
                        "&spades;": "♠",
                        "&spadesuit;": "♠",
                        "&spar;": "∥",
                        "&sqcap;": "⊓",
                        "&sqcaps;": "⊓︀",
                        "&sqcup;": "⊔",
                        "&sqcups;": "⊔︀",
                        "&sqsub;": "⊏",
                        "&sqsube;": "⊑",
                        "&sqsubset;": "⊏",
                        "&sqsubseteq;": "⊑",
                        "&sqsup;": "⊐",
                        "&sqsupe;": "⊒",
                        "&sqsupset;": "⊐",
                        "&sqsupseteq;": "⊒",
                        "&squ;": "□",
                        "&square;": "□",
                        "&squarf;": "▪",
                        "&squf;": "▪",
                        "&srarr;": "→",
                        "&sscr;": "𝓈",
                        "&ssetmn;": "∖",
                        "&ssmile;": "⌣",
                        "&sstarf;": "⋆",
                        "&star;": "☆",
                        "&starf;": "★",
                        "&straightepsilon;": "ϵ",
                        "&straightphi;": "ϕ",
                        "&strns;": "¯",
                        "&sub;": "⊂",
                        "&subE;": "⫅",
                        "&subdot;": "⪽",
                        "&sube;": "⊆",
                        "&subedot;": "⫃",
                        "&submult;": "⫁",
                        "&subnE;": "⫋",
                        "&subne;": "⊊",
                        "&subplus;": "⪿",
                        "&subrarr;": "⥹",
                        "&subset;": "⊂",
                        "&subseteq;": "⊆",
                        "&subseteqq;": "⫅",
                        "&subsetneq;": "⊊",
                        "&subsetneqq;": "⫋",
                        "&subsim;": "⫇",
                        "&subsub;": "⫕",
                        "&subsup;": "⫓",
                        "&succ;": "≻",
                        "&succapprox;": "⪸",
                        "&succcurlyeq;": "≽",
                        "&succeq;": "⪰",
                        "&succnapprox;": "⪺",
                        "&succneqq;": "⪶",
                        "&succnsim;": "⋩",
                        "&succsim;": "≿",
                        "&sum;": "∑",
                        "&sung;": "♪",
                        "&sup1": "¹",
                        "&sup1;": "¹",
                        "&sup2": "²",
                        "&sup2;": "²",
                        "&sup3": "³",
                        "&sup3;": "³",
                        "&sup;": "⊃",
                        "&supE;": "⫆",
                        "&supdot;": "⪾",
                        "&supdsub;": "⫘",
                        "&supe;": "⊇",
                        "&supedot;": "⫄",
                        "&suphsol;": "⟉",
                        "&suphsub;": "⫗",
                        "&suplarr;": "⥻",
                        "&supmult;": "⫂",
                        "&supnE;": "⫌",
                        "&supne;": "⊋",
                        "&supplus;": "⫀",
                        "&supset;": "⊃",
                        "&supseteq;": "⊇",
                        "&supseteqq;": "⫆",
                        "&supsetneq;": "⊋",
                        "&supsetneqq;": "⫌",
                        "&supsim;": "⫈",
                        "&supsub;": "⫔",
                        "&supsup;": "⫖",
                        "&swArr;": "⇙",
                        "&swarhk;": "⤦",
                        "&swarr;": "↙",
                        "&swarrow;": "↙",
                        "&swnwar;": "⤪",
                        "&szlig": "ß",
                        "&szlig;": "ß",
                        "&target;": "⌖",
                        "&tau;": "τ",
                        "&tbrk;": "⎴",
                        "&tcaron;": "ť",
                        "&tcedil;": "ţ",
                        "&tcy;": "т",
                        "&tdot;": "⃛",
                        "&telrec;": "⌕",
                        "&tfr;": "𝔱",
                        "&there4;": "∴",
                        "&therefore;": "∴",
                        "&theta;": "θ",
                        "&thetasym;": "ϑ",
                        "&thetav;": "ϑ",
                        "&thickapprox;": "≈",
                        "&thicksim;": "∼",
                        "&thinsp;": " ",
                        "&thkap;": "≈",
                        "&thksim;": "∼",
                        "&thorn": "þ",
                        "&thorn;": "þ",
                        "&tilde;": "˜",
                        "&times": "×",
                        "&times;": "×",
                        "&timesb;": "⊠",
                        "&timesbar;": "⨱",
                        "&timesd;": "⨰",
                        "&tint;": "∭",
                        "&toea;": "⤨",
                        "&top;": "⊤",
                        "&topbot;": "⌶",
                        "&topcir;": "⫱",
                        "&topf;": "𝕥",
                        "&topfork;": "⫚",
                        "&tosa;": "⤩",
                        "&tprime;": "‴",
                        "&trade;": "™",
                        "&triangle;": "▵",
                        "&triangledown;": "▿",
                        "&triangleleft;": "◃",
                        "&trianglelefteq;": "⊴",
                        "&triangleq;": "≜",
                        "&triangleright;": "▹",
                        "&trianglerighteq;": "⊵",
                        "&tridot;": "◬",
                        "&trie;": "≜",
                        "&triminus;": "⨺",
                        "&triplus;": "⨹",
                        "&trisb;": "⧍",
                        "&tritime;": "⨻",
                        "&trpezium;": "⏢",
                        "&tscr;": "𝓉",
                        "&tscy;": "ц",
                        "&tshcy;": "ћ",
                        "&tstrok;": "ŧ",
                        "&twixt;": "≬",
                        "&twoheadleftarrow;": "↞",
                        "&twoheadrightarrow;": "↠",
                        "&uArr;": "⇑",
                        "&uHar;": "⥣",
                        "&uacute": "ú",
                        "&uacute;": "ú",
                        "&uarr;": "↑",
                        "&ubrcy;": "ў",
                        "&ubreve;": "ŭ",
                        "&ucirc": "û",
                        "&ucirc;": "û",
                        "&ucy;": "у",
                        "&udarr;": "⇅",
                        "&udblac;": "ű",
                        "&udhar;": "⥮",
                        "&ufisht;": "⥾",
                        "&ufr;": "𝔲",
                        "&ugrave": "ù",
                        "&ugrave;": "ù",
                        "&uharl;": "↿",
                        "&uharr;": "↾",
                        "&uhblk;": "▀",
                        "&ulcorn;": "⌜",
                        "&ulcorner;": "⌜",
                        "&ulcrop;": "⌏",
                        "&ultri;": "◸",
                        "&umacr;": "ū",
                        "&uml": "¨",
                        "&uml;": "¨",
                        "&uogon;": "ų",
                        "&uopf;": "𝕦",
                        "&uparrow;": "↑",
                        "&updownarrow;": "↕",
                        "&upharpoonleft;": "↿",
                        "&upharpoonright;": "↾",
                        "&uplus;": "⊎",
                        "&upsi;": "υ",
                        "&upsih;": "ϒ",
                        "&upsilon;": "υ",
                        "&upuparrows;": "⇈",
                        "&urcorn;": "⌝",
                        "&urcorner;": "⌝",
                        "&urcrop;": "⌎",
                        "&uring;": "ů",
                        "&urtri;": "◹",
                        "&uscr;": "𝓊",
                        "&utdot;": "⋰",
                        "&utilde;": "ũ",
                        "&utri;": "▵",
                        "&utrif;": "▴",
                        "&uuarr;": "⇈",
                        "&uuml": "ü",
                        "&uuml;": "ü",
                        "&uwangle;": "⦧",
                        "&vArr;": "⇕",
                        "&vBar;": "⫨",
                        "&vBarv;": "⫩",
                        "&vDash;": "⊨",
                        "&vangrt;": "⦜",
                        "&varepsilon;": "ϵ",
                        "&varkappa;": "ϰ",
                        "&varnothing;": "∅",
                        "&varphi;": "ϕ",
                        "&varpi;": "ϖ",
                        "&varpropto;": "∝",
                        "&varr;": "↕",
                        "&varrho;": "ϱ",
                        "&varsigma;": "ς",
                        "&varsubsetneq;": "⊊︀",
                        "&varsubsetneqq;": "⫋︀",
                        "&varsupsetneq;": "⊋︀",
                        "&varsupsetneqq;": "⫌︀",
                        "&vartheta;": "ϑ",
                        "&vartriangleleft;": "⊲",
                        "&vartriangleright;": "⊳",
                        "&vcy;": "в",
                        "&vdash;": "⊢",
                        "&vee;": "∨",
                        "&veebar;": "⊻",
                        "&veeeq;": "≚",
                        "&vellip;": "⋮",
                        "&verbar;": "|",
                        "&vert;": "|",
                        "&vfr;": "𝔳",
                        "&vltri;": "⊲",
                        "&vnsub;": "⊂⃒",
                        "&vnsup;": "⊃⃒",
                        "&vopf;": "𝕧",
                        "&vprop;": "∝",
                        "&vrtri;": "⊳",
                        "&vscr;": "𝓋",
                        "&vsubnE;": "⫋︀",
                        "&vsubne;": "⊊︀",
                        "&vsupnE;": "⫌︀",
                        "&vsupne;": "⊋︀",
                        "&vzigzag;": "⦚",
                        "&wcirc;": "ŵ",
                        "&wedbar;": "⩟",
                        "&wedge;": "∧",
                        "&wedgeq;": "≙",
                        "&weierp;": "℘",
                        "&wfr;": "𝔴",
                        "&wopf;": "𝕨",
                        "&wp;": "℘",
                        "&wr;": "≀",
                        "&wreath;": "≀",
                        "&wscr;": "𝓌",
                        "&xcap;": "⋂",
                        "&xcirc;": "◯",
                        "&xcup;": "⋃",
                        "&xdtri;": "▽",
                        "&xfr;": "𝔵",
                        "&xhArr;": "⟺",
                        "&xharr;": "⟷",
                        "&xi;": "ξ",
                        "&xlArr;": "⟸",
                        "&xlarr;": "⟵",
                        "&xmap;": "⟼",
                        "&xnis;": "⋻",
                        "&xodot;": "⨀",
                        "&xopf;": "𝕩",
                        "&xoplus;": "⨁",
                        "&xotime;": "⨂",
                        "&xrArr;": "⟹",
                        "&xrarr;": "⟶",
                        "&xscr;": "𝓍",
                        "&xsqcup;": "⨆",
                        "&xuplus;": "⨄",
                        "&xutri;": "△",
                        "&xvee;": "⋁",
                        "&xwedge;": "⋀",
                        "&yacute": "ý",
                        "&yacute;": "ý",
                        "&yacy;": "я",
                        "&ycirc;": "ŷ",
                        "&ycy;": "ы",
                        "&yen": "¥",
                        "&yen;": "¥",
                        "&yfr;": "𝔶",
                        "&yicy;": "ї",
                        "&yopf;": "𝕪",
                        "&yscr;": "𝓎",
                        "&yucy;": "ю",
                        "&yuml": "ÿ",
                        "&yuml;": "ÿ",
                        "&zacute;": "ź",
                        "&zcaron;": "ž",
                        "&zcy;": "з",
                        "&zdot;": "ż",
                        "&zeetrf;": "ℨ",
                        "&zeta;": "ζ",
                        "&zfr;": "𝔷",
                        "&zhcy;": "ж",
                        "&zigrarr;": "⇝",
                        "&zopf;": "𝕫",
                        "&zscr;": "𝓏",
                        "&zwj;": "‍",
                        "&zwnj;": "‌"
                    },
                    characters: {
                        "Æ": "&AElig;",
                        "&": "&amp;",
                        "Á": "&Aacute;",
                        "Ă": "&Abreve;",
                        "Â": "&Acirc;",
                        "А": "&Acy;",
                        "𝔄": "&Afr;",
                        "À": "&Agrave;",
                        "Α": "&Alpha;",
                        "Ā": "&Amacr;",
                        "⩓": "&And;",
                        "Ą": "&Aogon;",
                        "𝔸": "&Aopf;",
                        "⁡": "&af;",
                        "Å": "&angst;",
                        "𝒜": "&Ascr;",
                        "≔": "&coloneq;",
                        "Ã": "&Atilde;",
                        "Ä": "&Auml;",
                        "∖": "&ssetmn;",
                        "⫧": "&Barv;",
                        "⌆": "&doublebarwedge;",
                        "Б": "&Bcy;",
                        "∵": "&because;",
                        "ℬ": "&bernou;",
                        "Β": "&Beta;",
                        "𝔅": "&Bfr;",
                        "𝔹": "&Bopf;",
                        "˘": "&breve;",
                        "≎": "&bump;",
                        "Ч": "&CHcy;",
                        "©": "&copy;",
                        "Ć": "&Cacute;",
                        "⋒": "&Cap;",
                        "ⅅ": "&DD;",
                        "ℭ": "&Cfr;",
                        "Č": "&Ccaron;",
                        "Ç": "&Ccedil;",
                        "Ĉ": "&Ccirc;",
                        "∰": "&Cconint;",
                        "Ċ": "&Cdot;",
                        "¸": "&cedil;",
                        "·": "&middot;",
                        "Χ": "&Chi;",
                        "⊙": "&odot;",
                        "⊖": "&ominus;",
                        "⊕": "&oplus;",
                        "⊗": "&otimes;",
                        "∲": "&cwconint;",
                        "”": "&rdquor;",
                        "’": "&rsquor;",
                        "∷": "&Proportion;",
                        "⩴": "&Colone;",
                        "≡": "&equiv;",
                        "∯": "&DoubleContourIntegral;",
                        "∮": "&oint;",
                        "ℂ": "&complexes;",
                        "∐": "&coprod;",
                        "∳": "&awconint;",
                        "⨯": "&Cross;",
                        "𝒞": "&Cscr;",
                        "⋓": "&Cup;",
                        "≍": "&asympeq;",
                        "⤑": "&DDotrahd;",
                        "Ђ": "&DJcy;",
                        "Ѕ": "&DScy;",
                        "Џ": "&DZcy;",
                        "‡": "&ddagger;",
                        "↡": "&Darr;",
                        "⫤": "&DoubleLeftTee;",
                        "Ď": "&Dcaron;",
                        "Д": "&Dcy;",
                        "∇": "&nabla;",
                        "Δ": "&Delta;",
                        "𝔇": "&Dfr;",
                        "´": "&acute;",
                        "˙": "&dot;",
                        "˝": "&dblac;",
                        "`": "&grave;",
                        "˜": "&tilde;",
                        "⋄": "&diamond;",
                        "ⅆ": "&dd;",
                        "𝔻": "&Dopf;",
                        "¨": "&uml;",
                        "⃜": "&DotDot;",
                        "≐": "&esdot;",
                        "⇓": "&dArr;",
                        "⇐": "&lArr;",
                        "⇔": "&iff;",
                        "⟸": "&xlArr;",
                        "⟺": "&xhArr;",
                        "⟹": "&xrArr;",
                        "⇒": "&rArr;",
                        "⊨": "&vDash;",
                        "⇑": "&uArr;",
                        "⇕": "&vArr;",
                        "∥": "&spar;",
                        "↓": "&downarrow;",
                        "⤓": "&DownArrowBar;",
                        "⇵": "&duarr;",
                        "̑": "&DownBreve;",
                        "⥐": "&DownLeftRightVector;",
                        "⥞": "&DownLeftTeeVector;",
                        "↽": "&lhard;",
                        "⥖": "&DownLeftVectorBar;",
                        "⥟": "&DownRightTeeVector;",
                        "⇁": "&rightharpoondown;",
                        "⥗": "&DownRightVectorBar;",
                        "⊤": "&top;",
                        "↧": "&mapstodown;",
                        "𝒟": "&Dscr;",
                        "Đ": "&Dstrok;",
                        "Ŋ": "&ENG;",
                        "Ð": "&ETH;",
                        "É": "&Eacute;",
                        "Ě": "&Ecaron;",
                        "Ê": "&Ecirc;",
                        "Э": "&Ecy;",
                        "Ė": "&Edot;",
                        "𝔈": "&Efr;",
                        "È": "&Egrave;",
                        "∈": "&isinv;",
                        "Ē": "&Emacr;",
                        "◻": "&EmptySmallSquare;",
                        "▫": "&EmptyVerySmallSquare;",
                        "Ę": "&Eogon;",
                        "𝔼": "&Eopf;",
                        "Ε": "&Epsilon;",
                        "⩵": "&Equal;",
                        "≂": "&esim;",
                        "⇌": "&rlhar;",
                        "ℰ": "&expectation;",
                        "⩳": "&Esim;",
                        "Η": "&Eta;",
                        "Ë": "&Euml;",
                        "∃": "&exist;",
                        "ⅇ": "&exponentiale;",
                        "Ф": "&Fcy;",
                        "𝔉": "&Ffr;",
                        "◼": "&FilledSmallSquare;",
                        "▪": "&squf;",
                        "𝔽": "&Fopf;",
                        "∀": "&forall;",
                        "ℱ": "&Fscr;",
                        "Ѓ": "&GJcy;",
                        ">": "&gt;",
                        "Γ": "&Gamma;",
                        "Ϝ": "&Gammad;",
                        "Ğ": "&Gbreve;",
                        "Ģ": "&Gcedil;",
                        "Ĝ": "&Gcirc;",
                        "Г": "&Gcy;",
                        "Ġ": "&Gdot;",
                        "𝔊": "&Gfr;",
                        "⋙": "&ggg;",
                        "𝔾": "&Gopf;",
                        "≥": "&geq;",
                        "⋛": "&gtreqless;",
                        "≧": "&geqq;",
                        "⪢": "&GreaterGreater;",
                        "≷": "&gtrless;",
                        "⩾": "&ges;",
                        "≳": "&gtrsim;",
                        "𝒢": "&Gscr;",
                        "≫": "&gg;",
                        "Ъ": "&HARDcy;",
                        "ˇ": "&caron;",
                        "^": "&Hat;",
                        "Ĥ": "&Hcirc;",
                        "ℌ": "&Poincareplane;",
                        "ℋ": "&hamilt;",
                        "ℍ": "&quaternions;",
                        "─": "&boxh;",
                        "Ħ": "&Hstrok;",
                        "≏": "&bumpeq;",
                        "Е": "&IEcy;",
                        "Ĳ": "&IJlig;",
                        "Ё": "&IOcy;",
                        "Í": "&Iacute;",
                        "Î": "&Icirc;",
                        "И": "&Icy;",
                        "İ": "&Idot;",
                        "ℑ": "&imagpart;",
                        "Ì": "&Igrave;",
                        "Ī": "&Imacr;",
                        "ⅈ": "&ii;",
                        "∬": "&Int;",
                        "∫": "&int;",
                        "⋂": "&xcap;",
                        "⁣": "&ic;",
                        "⁢": "&it;",
                        "Į": "&Iogon;",
                        "𝕀": "&Iopf;",
                        "Ι": "&Iota;",
                        "ℐ": "&imagline;",
                        "Ĩ": "&Itilde;",
                        "І": "&Iukcy;",
                        "Ï": "&Iuml;",
                        "Ĵ": "&Jcirc;",
                        "Й": "&Jcy;",
                        "𝔍": "&Jfr;",
                        "𝕁": "&Jopf;",
                        "𝒥": "&Jscr;",
                        "Ј": "&Jsercy;",
                        "Є": "&Jukcy;",
                        "Х": "&KHcy;",
                        "Ќ": "&KJcy;",
                        "Κ": "&Kappa;",
                        "Ķ": "&Kcedil;",
                        "К": "&Kcy;",
                        "𝔎": "&Kfr;",
                        "𝕂": "&Kopf;",
                        "𝒦": "&Kscr;",
                        "Љ": "&LJcy;",
                        "<": "&lt;",
                        "Ĺ": "&Lacute;",
                        "Λ": "&Lambda;",
                        "⟪": "&Lang;",
                        "ℒ": "&lagran;",
                        "↞": "&twoheadleftarrow;",
                        "Ľ": "&Lcaron;",
                        "Ļ": "&Lcedil;",
                        "Л": "&Lcy;",
                        "⟨": "&langle;",
                        "←": "&slarr;",
                        "⇤": "&larrb;",
                        "⇆": "&lrarr;",
                        "⌈": "&lceil;",
                        "⟦": "&lobrk;",
                        "⥡": "&LeftDownTeeVector;",
                        "⇃": "&downharpoonleft;",
                        "⥙": "&LeftDownVectorBar;",
                        "⌊": "&lfloor;",
                        "↔": "&leftrightarrow;",
                        "⥎": "&LeftRightVector;",
                        "⊣": "&dashv;",
                        "↤": "&mapstoleft;",
                        "⥚": "&LeftTeeVector;",
                        "⊲": "&vltri;",
                        "⧏": "&LeftTriangleBar;",
                        "⊴": "&trianglelefteq;",
                        "⥑": "&LeftUpDownVector;",
                        "⥠": "&LeftUpTeeVector;",
                        "↿": "&upharpoonleft;",
                        "⥘": "&LeftUpVectorBar;",
                        "↼": "&lharu;",
                        "⥒": "&LeftVectorBar;",
                        "⋚": "&lesseqgtr;",
                        "≦": "&leqq;",
                        "≶": "&lg;",
                        "⪡": "&LessLess;",
                        "⩽": "&les;",
                        "≲": "&lsim;",
                        "𝔏": "&Lfr;",
                        "⋘": "&Ll;",
                        "⇚": "&lAarr;",
                        "Ŀ": "&Lmidot;",
                        "⟵": "&xlarr;",
                        "⟷": "&xharr;",
                        "⟶": "&xrarr;",
                        "𝕃": "&Lopf;",
                        "↙": "&swarrow;",
                        "↘": "&searrow;",
                        "↰": "&lsh;",
                        "Ł": "&Lstrok;",
                        "≪": "&ll;",
                        "⤅": "&Map;",
                        "М": "&Mcy;",
                        " ": "&MediumSpace;",
                        "ℳ": "&phmmat;",
                        "𝔐": "&Mfr;",
                        "∓": "&mp;",
                        "𝕄": "&Mopf;",
                        "Μ": "&Mu;",
                        "Њ": "&NJcy;",
                        "Ń": "&Nacute;",
                        "Ň": "&Ncaron;",
                        "Ņ": "&Ncedil;",
                        "Н": "&Ncy;",
                        "​": "&ZeroWidthSpace;",
                        "\n": "&NewLine;",
                        "𝔑": "&Nfr;",
                        "⁠": "&NoBreak;",
                        " ": "&nbsp;",
                        "ℕ": "&naturals;",
                        "⫬": "&Not;",
                        "≢": "&nequiv;",
                        "≭": "&NotCupCap;",
                        "∦": "&nspar;",
                        "∉": "&notinva;",
                        "≠": "&ne;",
                        "≂̸": "&nesim;",
                        "∄": "&nexists;",
                        "≯": "&ngtr;",
                        "≱": "&ngeq;",
                        "≧̸": "&ngeqq;",
                        "≫̸": "&nGtv;",
                        "≹": "&ntgl;",
                        "⩾̸": "&nges;",
                        "≵": "&ngsim;",
                        "≎̸": "&nbump;",
                        "≏̸": "&nbumpe;",
                        "⋪": "&ntriangleleft;",
                        "⧏̸": "&NotLeftTriangleBar;",
                        "⋬": "&ntrianglelefteq;",
                        "≮": "&nlt;",
                        "≰": "&nleq;",
                        "≸": "&ntlg;",
                        "≪̸": "&nLtv;",
                        "⩽̸": "&nles;",
                        "≴": "&nlsim;",
                        "⪢̸": "&NotNestedGreaterGreater;",
                        "⪡̸": "&NotNestedLessLess;",
                        "⊀": "&nprec;",
                        "⪯̸": "&npreceq;",
                        "⋠": "&nprcue;",
                        "∌": "&notniva;",
                        "⋫": "&ntriangleright;",
                        "⧐̸": "&NotRightTriangleBar;",
                        "⋭": "&ntrianglerighteq;",
                        "⊏̸": "&NotSquareSubset;",
                        "⋢": "&nsqsube;",
                        "⊐̸": "&NotSquareSuperset;",
                        "⋣": "&nsqsupe;",
                        "⊂⃒": "&vnsub;",
                        "⊈": "&nsubseteq;",
                        "⊁": "&nsucc;",
                        "⪰̸": "&nsucceq;",
                        "⋡": "&nsccue;",
                        "≿̸": "&NotSucceedsTilde;",
                        "⊃⃒": "&vnsup;",
                        "⊉": "&nsupseteq;",
                        "≁": "&nsim;",
                        "≄": "&nsimeq;",
                        "≇": "&ncong;",
                        "≉": "&napprox;",
                        "∤": "&nsmid;",
                        "𝒩": "&Nscr;",
                        "Ñ": "&Ntilde;",
                        "Ν": "&Nu;",
                        "Œ": "&OElig;",
                        "Ó": "&Oacute;",
                        "Ô": "&Ocirc;",
                        "О": "&Ocy;",
                        "Ő": "&Odblac;",
                        "𝔒": "&Ofr;",
                        "Ò": "&Ograve;",
                        "Ō": "&Omacr;",
                        "Ω": "&ohm;",
                        "Ο": "&Omicron;",
                        "𝕆": "&Oopf;",
                        "“": "&ldquo;",
                        "‘": "&lsquo;",
                        "⩔": "&Or;",
                        "𝒪": "&Oscr;",
                        "Ø": "&Oslash;",
                        "Õ": "&Otilde;",
                        "⨷": "&Otimes;",
                        "Ö": "&Ouml;",
                        "‾": "&oline;",
                        "⏞": "&OverBrace;",
                        "⎴": "&tbrk;",
                        "⏜": "&OverParenthesis;",
                        "∂": "&part;",
                        "П": "&Pcy;",
                        "𝔓": "&Pfr;",
                        "Φ": "&Phi;",
                        "Π": "&Pi;",
                        "±": "&pm;",
                        "ℙ": "&primes;",
                        "⪻": "&Pr;",
                        "≺": "&prec;",
                        "⪯": "&preceq;",
                        "≼": "&preccurlyeq;",
                        "≾": "&prsim;",
                        "″": "&Prime;",
                        "∏": "&prod;",
                        "∝": "&vprop;",
                        "𝒫": "&Pscr;",
                        "Ψ": "&Psi;",
                        '"': "&quot;",
                        "𝔔": "&Qfr;",
                        "ℚ": "&rationals;",
                        "𝒬": "&Qscr;",
                        "⤐": "&drbkarow;",
                        "®": "&reg;",
                        "Ŕ": "&Racute;",
                        "⟫": "&Rang;",
                        "↠": "&twoheadrightarrow;",
                        "⤖": "&Rarrtl;",
                        "Ř": "&Rcaron;",
                        "Ŗ": "&Rcedil;",
                        "Р": "&Rcy;",
                        "ℜ": "&realpart;",
                        "∋": "&niv;",
                        "⇋": "&lrhar;",
                        "⥯": "&duhar;",
                        "Ρ": "&Rho;",
                        "⟩": "&rangle;",
                        "→": "&srarr;",
                        "⇥": "&rarrb;",
                        "⇄": "&rlarr;",
                        "⌉": "&rceil;",
                        "⟧": "&robrk;",
                        "⥝": "&RightDownTeeVector;",
                        "⇂": "&downharpoonright;",
                        "⥕": "&RightDownVectorBar;",
                        "⌋": "&rfloor;",
                        "⊢": "&vdash;",
                        "↦": "&mapsto;",
                        "⥛": "&RightTeeVector;",
                        "⊳": "&vrtri;",
                        "⧐": "&RightTriangleBar;",
                        "⊵": "&trianglerighteq;",
                        "⥏": "&RightUpDownVector;",
                        "⥜": "&RightUpTeeVector;",
                        "↾": "&upharpoonright;",
                        "⥔": "&RightUpVectorBar;",
                        "⇀": "&rightharpoonup;",
                        "⥓": "&RightVectorBar;",
                        "ℝ": "&reals;",
                        "⥰": "&RoundImplies;",
                        "⇛": "&rAarr;",
                        "ℛ": "&realine;",
                        "↱": "&rsh;",
                        "⧴": "&RuleDelayed;",
                        "Щ": "&SHCHcy;",
                        "Ш": "&SHcy;",
                        "Ь": "&SOFTcy;",
                        "Ś": "&Sacute;",
                        "⪼": "&Sc;",
                        "Š": "&Scaron;",
                        "Ş": "&Scedil;",
                        "Ŝ": "&Scirc;",
                        "С": "&Scy;",
                        "𝔖": "&Sfr;",
                        "↑": "&uparrow;",
                        "Σ": "&Sigma;",
                        "∘": "&compfn;",
                        "𝕊": "&Sopf;",
                        "√": "&radic;",
                        "□": "&square;",
                        "⊓": "&sqcap;",
                        "⊏": "&sqsubset;",
                        "⊑": "&sqsubseteq;",
                        "⊐": "&sqsupset;",
                        "⊒": "&sqsupseteq;",
                        "⊔": "&sqcup;",
                        "𝒮": "&Sscr;",
                        "⋆": "&sstarf;",
                        "⋐": "&Subset;",
                        "⊆": "&subseteq;",
                        "≻": "&succ;",
                        "⪰": "&succeq;",
                        "≽": "&succcurlyeq;",
                        "≿": "&succsim;",
                        "∑": "&sum;",
                        "⋑": "&Supset;",
                        "⊃": "&supset;",
                        "⊇": "&supseteq;",
                        "Þ": "&THORN;",
                        "™": "&trade;",
                        "Ћ": "&TSHcy;",
                        "Ц": "&TScy;",
                        "\t": "&Tab;",
                        "Τ": "&Tau;",
                        "Ť": "&Tcaron;",
                        "Ţ": "&Tcedil;",
                        "Т": "&Tcy;",
                        "𝔗": "&Tfr;",
                        "∴": "&therefore;",
                        "Θ": "&Theta;",
                        "  ": "&ThickSpace;",
                        " ": "&thinsp;",
                        "∼": "&thksim;",
                        "≃": "&simeq;",
                        "≅": "&cong;",
                        "≈": "&thkap;",
                        "𝕋": "&Topf;",
                        "⃛": "&tdot;",
                        "𝒯": "&Tscr;",
                        "Ŧ": "&Tstrok;",
                        "Ú": "&Uacute;",
                        "↟": "&Uarr;",
                        "⥉": "&Uarrocir;",
                        "Ў": "&Ubrcy;",
                        "Ŭ": "&Ubreve;",
                        "Û": "&Ucirc;",
                        "У": "&Ucy;",
                        "Ű": "&Udblac;",
                        "𝔘": "&Ufr;",
                        "Ù": "&Ugrave;",
                        "Ū": "&Umacr;",
                        _: "&lowbar;",
                        "⏟": "&UnderBrace;",
                        "⎵": "&bbrk;",
                        "⏝": "&UnderParenthesis;",
                        "⋃": "&xcup;",
                        "⊎": "&uplus;",
                        "Ų": "&Uogon;",
                        "𝕌": "&Uopf;",
                        "⤒": "&UpArrowBar;",
                        "⇅": "&udarr;",
                        "↕": "&varr;",
                        "⥮": "&udhar;",
                        "⊥": "&perp;",
                        "↥": "&mapstoup;",
                        "↖": "&nwarrow;",
                        "↗": "&nearrow;",
                        "ϒ": "&upsih;",
                        "Υ": "&Upsilon;",
                        "Ů": "&Uring;",
                        "𝒰": "&Uscr;",
                        "Ũ": "&Utilde;",
                        "Ü": "&Uuml;",
                        "⊫": "&VDash;",
                        "⫫": "&Vbar;",
                        "В": "&Vcy;",
                        "⊩": "&Vdash;",
                        "⫦": "&Vdashl;",
                        "⋁": "&xvee;",
                        "‖": "&Vert;",
                        "∣": "&smid;",
                        "|": "&vert;",
                        "❘": "&VerticalSeparator;",
                        "≀": "&wreath;",
                        " ": "&hairsp;",
                        "𝔙": "&Vfr;",
                        "𝕍": "&Vopf;",
                        "𝒱": "&Vscr;",
                        "⊪": "&Vvdash;",
                        "Ŵ": "&Wcirc;",
                        "⋀": "&xwedge;",
                        "𝔚": "&Wfr;",
                        "𝕎": "&Wopf;",
                        "𝒲": "&Wscr;",
                        "𝔛": "&Xfr;",
                        "Ξ": "&Xi;",
                        "𝕏": "&Xopf;",
                        "𝒳": "&Xscr;",
                        "Я": "&YAcy;",
                        "Ї": "&YIcy;",
                        "Ю": "&YUcy;",
                        "Ý": "&Yacute;",
                        "Ŷ": "&Ycirc;",
                        "Ы": "&Ycy;",
                        "𝔜": "&Yfr;",
                        "𝕐": "&Yopf;",
                        "𝒴": "&Yscr;",
                        "Ÿ": "&Yuml;",
                        "Ж": "&ZHcy;",
                        "Ź": "&Zacute;",
                        "Ž": "&Zcaron;",
                        "З": "&Zcy;",
                        "Ż": "&Zdot;",
                        "Ζ": "&Zeta;",
                        "ℨ": "&zeetrf;",
                        "ℤ": "&integers;",
                        "𝒵": "&Zscr;",
                        "á": "&aacute;",
                        "ă": "&abreve;",
                        "∾": "&mstpos;",
                        "∾̳": "&acE;",
                        "∿": "&acd;",
                        "â": "&acirc;",
                        "а": "&acy;",
                        "æ": "&aelig;",
                        "𝔞": "&afr;",
                        "à": "&agrave;",
                        "ℵ": "&aleph;",
                        "α": "&alpha;",
                        "ā": "&amacr;",
                        "⨿": "&amalg;",
                        "∧": "&wedge;",
                        "⩕": "&andand;",
                        "⩜": "&andd;",
                        "⩘": "&andslope;",
                        "⩚": "&andv;",
                        "∠": "&angle;",
                        "⦤": "&ange;",
                        "∡": "&measuredangle;",
                        "⦨": "&angmsdaa;",
                        "⦩": "&angmsdab;",
                        "⦪": "&angmsdac;",
                        "⦫": "&angmsdad;",
                        "⦬": "&angmsdae;",
                        "⦭": "&angmsdaf;",
                        "⦮": "&angmsdag;",
                        "⦯": "&angmsdah;",
                        "∟": "&angrt;",
                        "⊾": "&angrtvb;",
                        "⦝": "&angrtvbd;",
                        "∢": "&angsph;",
                        "⍼": "&angzarr;",
                        "ą": "&aogon;",
                        "𝕒": "&aopf;",
                        "⩰": "&apE;",
                        "⩯": "&apacir;",
                        "≊": "&approxeq;",
                        "≋": "&apid;",
                        "'": "&apos;",
                        "å": "&aring;",
                        "𝒶": "&ascr;",
                        "*": "&midast;",
                        "ã": "&atilde;",
                        "ä": "&auml;",
                        "⨑": "&awint;",
                        "⫭": "&bNot;",
                        "≌": "&bcong;",
                        "϶": "&bepsi;",
                        "‵": "&bprime;",
                        "∽": "&bsim;",
                        "⋍": "&bsime;",
                        "⊽": "&barvee;",
                        "⌅": "&barwedge;",
                        "⎶": "&bbrktbrk;",
                        "б": "&bcy;",
                        "„": "&ldquor;",
                        "⦰": "&bemptyv;",
                        "β": "&beta;",
                        "ℶ": "&beth;",
                        "≬": "&twixt;",
                        "𝔟": "&bfr;",
                        "◯": "&xcirc;",
                        "⨀": "&xodot;",
                        "⨁": "&xoplus;",
                        "⨂": "&xotime;",
                        "⨆": "&xsqcup;",
                        "★": "&starf;",
                        "▽": "&xdtri;",
                        "△": "&xutri;",
                        "⨄": "&xuplus;",
                        "⤍": "&rbarr;",
                        "⧫": "&lozf;",
                        "▴": "&utrif;",
                        "▾": "&dtrif;",
                        "◂": "&ltrif;",
                        "▸": "&rtrif;",
                        "␣": "&blank;",
                        "▒": "&blk12;",
                        "░": "&blk14;",
                        "▓": "&blk34;",
                        "█": "&block;",
                        "=⃥": "&bne;",
                        "≡⃥": "&bnequiv;",
                        "⌐": "&bnot;",
                        "𝕓": "&bopf;",
                        "⋈": "&bowtie;",
                        "╗": "&boxDL;",
                        "╔": "&boxDR;",
                        "╖": "&boxDl;",
                        "╓": "&boxDr;",
                        "═": "&boxH;",
                        "╦": "&boxHD;",
                        "╩": "&boxHU;",
                        "╤": "&boxHd;",
                        "╧": "&boxHu;",
                        "╝": "&boxUL;",
                        "╚": "&boxUR;",
                        "╜": "&boxUl;",
                        "╙": "&boxUr;",
                        "║": "&boxV;",
                        "╬": "&boxVH;",
                        "╣": "&boxVL;",
                        "╠": "&boxVR;",
                        "╫": "&boxVh;",
                        "╢": "&boxVl;",
                        "╟": "&boxVr;",
                        "⧉": "&boxbox;",
                        "╕": "&boxdL;",
                        "╒": "&boxdR;",
                        "┐": "&boxdl;",
                        "┌": "&boxdr;",
                        "╥": "&boxhD;",
                        "╨": "&boxhU;",
                        "┬": "&boxhd;",
                        "┴": "&boxhu;",
                        "⊟": "&minusb;",
                        "⊞": "&plusb;",
                        "⊠": "&timesb;",
                        "╛": "&boxuL;",
                        "╘": "&boxuR;",
                        "┘": "&boxul;",
                        "└": "&boxur;",
                        "│": "&boxv;",
                        "╪": "&boxvH;",
                        "╡": "&boxvL;",
                        "╞": "&boxvR;",
                        "┼": "&boxvh;",
                        "┤": "&boxvl;",
                        "├": "&boxvr;",
                        "¦": "&brvbar;",
                        "𝒷": "&bscr;",
                        "⁏": "&bsemi;",
                        "\\": "&bsol;",
                        "⧅": "&bsolb;",
                        "⟈": "&bsolhsub;",
                        "•": "&bullet;",
                        "⪮": "&bumpE;",
                        "ć": "&cacute;",
                        "∩": "&cap;",
                        "⩄": "&capand;",
                        "⩉": "&capbrcup;",
                        "⩋": "&capcap;",
                        "⩇": "&capcup;",
                        "⩀": "&capdot;",
                        "∩︀": "&caps;",
                        "⁁": "&caret;",
                        "⩍": "&ccaps;",
                        "č": "&ccaron;",
                        "ç": "&ccedil;",
                        "ĉ": "&ccirc;",
                        "⩌": "&ccups;",
                        "⩐": "&ccupssm;",
                        "ċ": "&cdot;",
                        "⦲": "&cemptyv;",
                        "¢": "&cent;",
                        "𝔠": "&cfr;",
                        "ч": "&chcy;",
                        "✓": "&checkmark;",
                        "χ": "&chi;",
                        "○": "&cir;",
                        "⧃": "&cirE;",
                        "ˆ": "&circ;",
                        "≗": "&cire;",
                        "↺": "&olarr;",
                        "↻": "&orarr;",
                        "Ⓢ": "&oS;",
                        "⊛": "&oast;",
                        "⊚": "&ocir;",
                        "⊝": "&odash;",
                        "⨐": "&cirfnint;",
                        "⫯": "&cirmid;",
                        "⧂": "&cirscir;",
                        "♣": "&clubsuit;",
                        ":": "&colon;",
                        ",": "&comma;",
                        "@": "&commat;",
                        "∁": "&complement;",
                        "⩭": "&congdot;",
                        "𝕔": "&copf;",
                        "℗": "&copysr;",
                        "↵": "&crarr;",
                        "✗": "&cross;",
                        "𝒸": "&cscr;",
                        "⫏": "&csub;",
                        "⫑": "&csube;",
                        "⫐": "&csup;",
                        "⫒": "&csupe;",
                        "⋯": "&ctdot;",
                        "⤸": "&cudarrl;",
                        "⤵": "&cudarrr;",
                        "⋞": "&curlyeqprec;",
                        "⋟": "&curlyeqsucc;",
                        "↶": "&curvearrowleft;",
                        "⤽": "&cularrp;",
                        "∪": "&cup;",
                        "⩈": "&cupbrcap;",
                        "⩆": "&cupcap;",
                        "⩊": "&cupcup;",
                        "⊍": "&cupdot;",
                        "⩅": "&cupor;",
                        "∪︀": "&cups;",
                        "↷": "&curvearrowright;",
                        "⤼": "&curarrm;",
                        "⋎": "&cuvee;",
                        "⋏": "&cuwed;",
                        "¤": "&curren;",
                        "∱": "&cwint;",
                        "⌭": "&cylcty;",
                        "⥥": "&dHar;",
                        "†": "&dagger;",
                        "ℸ": "&daleth;",
                        "‐": "&hyphen;",
                        "⤏": "&rBarr;",
                        "ď": "&dcaron;",
                        "д": "&dcy;",
                        "⇊": "&downdownarrows;",
                        "⩷": "&eDDot;",
                        "°": "&deg;",
                        "δ": "&delta;",
                        "⦱": "&demptyv;",
                        "⥿": "&dfisht;",
                        "𝔡": "&dfr;",
                        "♦": "&diams;",
                        "ϝ": "&gammad;",
                        "⋲": "&disin;",
                        "÷": "&divide;",
                        "⋇": "&divonx;",
                        "ђ": "&djcy;",
                        "⌞": "&llcorner;",
                        "⌍": "&dlcrop;",
                        $: "&dollar;",
                        "𝕕": "&dopf;",
                        "≑": "&eDot;",
                        "∸": "&minusd;",
                        "∔": "&plusdo;",
                        "⊡": "&sdotb;",
                        "⌟": "&lrcorner;",
                        "⌌": "&drcrop;",
                        "𝒹": "&dscr;",
                        "ѕ": "&dscy;",
                        "⧶": "&dsol;",
                        "đ": "&dstrok;",
                        "⋱": "&dtdot;",
                        "▿": "&triangledown;",
                        "⦦": "&dwangle;",
                        "џ": "&dzcy;",
                        "⟿": "&dzigrarr;",
                        "é": "&eacute;",
                        "⩮": "&easter;",
                        "ě": "&ecaron;",
                        "≖": "&eqcirc;",
                        "ê": "&ecirc;",
                        "≕": "&eqcolon;",
                        "э": "&ecy;",
                        "ė": "&edot;",
                        "≒": "&fallingdotseq;",
                        "𝔢": "&efr;",
                        "⪚": "&eg;",
                        "è": "&egrave;",
                        "⪖": "&eqslantgtr;",
                        "⪘": "&egsdot;",
                        "⪙": "&el;",
                        "⏧": "&elinters;",
                        "ℓ": "&ell;",
                        "⪕": "&eqslantless;",
                        "⪗": "&elsdot;",
                        "ē": "&emacr;",
                        "∅": "&varnothing;",
                        " ": "&emsp13;",
                        " ": "&emsp14;",
                        " ": "&emsp;",
                        "ŋ": "&eng;",
                        " ": "&ensp;",
                        "ę": "&eogon;",
                        "𝕖": "&eopf;",
                        "⋕": "&epar;",
                        "⧣": "&eparsl;",
                        "⩱": "&eplus;",
                        "ε": "&epsilon;",
                        "ϵ": "&varepsilon;",
                        "=": "&equals;",
                        "≟": "&questeq;",
                        "⩸": "&equivDD;",
                        "⧥": "&eqvparsl;",
                        "≓": "&risingdotseq;",
                        "⥱": "&erarr;",
                        "ℯ": "&escr;",
                        "η": "&eta;",
                        "ð": "&eth;",
                        "ë": "&euml;",
                        "€": "&euro;",
                        "!": "&excl;",
                        "ф": "&fcy;",
                        "♀": "&female;",
                        "ﬃ": "&ffilig;",
                        "ﬀ": "&fflig;",
                        "ﬄ": "&ffllig;",
                        "𝔣": "&ffr;",
                        "ﬁ": "&filig;",
                        fj: "&fjlig;",
                        "♭": "&flat;",
                        "ﬂ": "&fllig;",
                        "▱": "&fltns;",
                        "ƒ": "&fnof;",
                        "𝕗": "&fopf;",
                        "⋔": "&pitchfork;",
                        "⫙": "&forkv;",
                        "⨍": "&fpartint;",
                        "½": "&half;",
                        "⅓": "&frac13;",
                        "¼": "&frac14;",
                        "⅕": "&frac15;",
                        "⅙": "&frac16;",
                        "⅛": "&frac18;",
                        "⅔": "&frac23;",
                        "⅖": "&frac25;",
                        "¾": "&frac34;",
                        "⅗": "&frac35;",
                        "⅜": "&frac38;",
                        "⅘": "&frac45;",
                        "⅚": "&frac56;",
                        "⅝": "&frac58;",
                        "⅞": "&frac78;",
                        "⁄": "&frasl;",
                        "⌢": "&sfrown;",
                        "𝒻": "&fscr;",
                        "⪌": "&gtreqqless;",
                        "ǵ": "&gacute;",
                        "γ": "&gamma;",
                        "⪆": "&gtrapprox;",
                        "ğ": "&gbreve;",
                        "ĝ": "&gcirc;",
                        "г": "&gcy;",
                        "ġ": "&gdot;",
                        "⪩": "&gescc;",
                        "⪀": "&gesdot;",
                        "⪂": "&gesdoto;",
                        "⪄": "&gesdotol;",
                        "⋛︀": "&gesl;",
                        "⪔": "&gesles;",
                        "𝔤": "&gfr;",
                        "ℷ": "&gimel;",
                        "ѓ": "&gjcy;",
                        "⪒": "&glE;",
                        "⪥": "&gla;",
                        "⪤": "&glj;",
                        "≩": "&gneqq;",
                        "⪊": "&gnapprox;",
                        "⪈": "&gneq;",
                        "⋧": "&gnsim;",
                        "𝕘": "&gopf;",
                        "ℊ": "&gscr;",
                        "⪎": "&gsime;",
                        "⪐": "&gsiml;",
                        "⪧": "&gtcc;",
                        "⩺": "&gtcir;",
                        "⋗": "&gtrdot;",
                        "⦕": "&gtlPar;",
                        "⩼": "&gtquest;",
                        "⥸": "&gtrarr;",
                        "≩︀": "&gvnE;",
                        "ъ": "&hardcy;",
                        "⥈": "&harrcir;",
                        "↭": "&leftrightsquigarrow;",
                        "ℏ": "&plankv;",
                        "ĥ": "&hcirc;",
                        "♥": "&heartsuit;",
                        "…": "&mldr;",
                        "⊹": "&hercon;",
                        "𝔥": "&hfr;",
                        "⤥": "&searhk;",
                        "⤦": "&swarhk;",
                        "⇿": "&hoarr;",
                        "∻": "&homtht;",
                        "↩": "&larrhk;",
                        "↪": "&rarrhk;",
                        "𝕙": "&hopf;",
                        "―": "&horbar;",
                        "𝒽": "&hscr;",
                        "ħ": "&hstrok;",
                        "⁃": "&hybull;",
                        "í": "&iacute;",
                        "î": "&icirc;",
                        "и": "&icy;",
                        "е": "&iecy;",
                        "¡": "&iexcl;",
                        "𝔦": "&ifr;",
                        "ì": "&igrave;",
                        "⨌": "&qint;",
                        "∭": "&tint;",
                        "⧜": "&iinfin;",
                        "℩": "&iiota;",
                        "ĳ": "&ijlig;",
                        "ī": "&imacr;",
                        "ı": "&inodot;",
                        "⊷": "&imof;",
                        "Ƶ": "&imped;",
                        "℅": "&incare;",
                        "∞": "&infin;",
                        "⧝": "&infintie;",
                        "⊺": "&intercal;",
                        "⨗": "&intlarhk;",
                        "⨼": "&iprod;",
                        "ё": "&iocy;",
                        "į": "&iogon;",
                        "𝕚": "&iopf;",
                        "ι": "&iota;",
                        "¿": "&iquest;",
                        "𝒾": "&iscr;",
                        "⋹": "&isinE;",
                        "⋵": "&isindot;",
                        "⋴": "&isins;",
                        "⋳": "&isinsv;",
                        "ĩ": "&itilde;",
                        "і": "&iukcy;",
                        "ï": "&iuml;",
                        "ĵ": "&jcirc;",
                        "й": "&jcy;",
                        "𝔧": "&jfr;",
                        "ȷ": "&jmath;",
                        "𝕛": "&jopf;",
                        "𝒿": "&jscr;",
                        "ј": "&jsercy;",
                        "є": "&jukcy;",
                        "κ": "&kappa;",
                        "ϰ": "&varkappa;",
                        "ķ": "&kcedil;",
                        "к": "&kcy;",
                        "𝔨": "&kfr;",
                        "ĸ": "&kgreen;",
                        "х": "&khcy;",
                        "ќ": "&kjcy;",
                        "𝕜": "&kopf;",
                        "𝓀": "&kscr;",
                        "⤛": "&lAtail;",
                        "⤎": "&lBarr;",
                        "⪋": "&lesseqqgtr;",
                        "⥢": "&lHar;",
                        "ĺ": "&lacute;",
                        "⦴": "&laemptyv;",
                        "λ": "&lambda;",
                        "⦑": "&langd;",
                        "⪅": "&lessapprox;",
                        "«": "&laquo;",
                        "⤟": "&larrbfs;",
                        "⤝": "&larrfs;",
                        "↫": "&looparrowleft;",
                        "⤹": "&larrpl;",
                        "⥳": "&larrsim;",
                        "↢": "&leftarrowtail;",
                        "⪫": "&lat;",
                        "⤙": "&latail;",
                        "⪭": "&late;",
                        "⪭︀": "&lates;",
                        "⤌": "&lbarr;",
                        "❲": "&lbbrk;",
                        "{": "&lcub;",
                        "[": "&lsqb;",
                        "⦋": "&lbrke;",
                        "⦏": "&lbrksld;",
                        "⦍": "&lbrkslu;",
                        "ľ": "&lcaron;",
                        "ļ": "&lcedil;",
                        "л": "&lcy;",
                        "⤶": "&ldca;",
                        "⥧": "&ldrdhar;",
                        "⥋": "&ldrushar;",
                        "↲": "&ldsh;",
                        "≤": "&leq;",
                        "⇇": "&llarr;",
                        "⋋": "&lthree;",
                        "⪨": "&lescc;",
                        "⩿": "&lesdot;",
                        "⪁": "&lesdoto;",
                        "⪃": "&lesdotor;",
                        "⋚︀": "&lesg;",
                        "⪓": "&lesges;",
                        "⋖": "&ltdot;",
                        "⥼": "&lfisht;",
                        "𝔩": "&lfr;",
                        "⪑": "&lgE;",
                        "⥪": "&lharul;",
                        "▄": "&lhblk;",
                        "љ": "&ljcy;",
                        "⥫": "&llhard;",
                        "◺": "&lltri;",
                        "ŀ": "&lmidot;",
                        "⎰": "&lmoustache;",
                        "≨": "&lneqq;",
                        "⪉": "&lnapprox;",
                        "⪇": "&lneq;",
                        "⋦": "&lnsim;",
                        "⟬": "&loang;",
                        "⇽": "&loarr;",
                        "⟼": "&xmap;",
                        "↬": "&rarrlp;",
                        "⦅": "&lopar;",
                        "𝕝": "&lopf;",
                        "⨭": "&loplus;",
                        "⨴": "&lotimes;",
                        "∗": "&lowast;",
                        "◊": "&lozenge;",
                        "(": "&lpar;",
                        "⦓": "&lparlt;",
                        "⥭": "&lrhard;",
                        "‎": "&lrm;",
                        "⊿": "&lrtri;",
                        "‹": "&lsaquo;",
                        "𝓁": "&lscr;",
                        "⪍": "&lsime;",
                        "⪏": "&lsimg;",
                        "‚": "&sbquo;",
                        "ł": "&lstrok;",
                        "⪦": "&ltcc;",
                        "⩹": "&ltcir;",
                        "⋉": "&ltimes;",
                        "⥶": "&ltlarr;",
                        "⩻": "&ltquest;",
                        "⦖": "&ltrPar;",
                        "◃": "&triangleleft;",
                        "⥊": "&lurdshar;",
                        "⥦": "&luruhar;",
                        "≨︀": "&lvnE;",
                        "∺": "&mDDot;",
                        "¯": "&strns;",
                        "♂": "&male;",
                        "✠": "&maltese;",
                        "▮": "&marker;",
                        "⨩": "&mcomma;",
                        "м": "&mcy;",
                        "—": "&mdash;",
                        "𝔪": "&mfr;",
                        "℧": "&mho;",
                        "µ": "&micro;",
                        "⫰": "&midcir;",
                        "−": "&minus;",
                        "⨪": "&minusdu;",
                        "⫛": "&mlcp;",
                        "⊧": "&models;",
                        "𝕞": "&mopf;",
                        "𝓂": "&mscr;",
                        "μ": "&mu;",
                        "⊸": "&mumap;",
                        "⋙̸": "&nGg;",
                        "≫⃒": "&nGt;",
                        "⇍": "&nlArr;",
                        "⇎": "&nhArr;",
                        "⋘̸": "&nLl;",
                        "≪⃒": "&nLt;",
                        "⇏": "&nrArr;",
                        "⊯": "&nVDash;",
                        "⊮": "&nVdash;",
                        "ń": "&nacute;",
                        "∠⃒": "&nang;",
                        "⩰̸": "&napE;",
                        "≋̸": "&napid;",
                        "ŉ": "&napos;",
                        "♮": "&natural;",
                        "⩃": "&ncap;",
                        "ň": "&ncaron;",
                        "ņ": "&ncedil;",
                        "⩭̸": "&ncongdot;",
                        "⩂": "&ncup;",
                        "н": "&ncy;",
                        "–": "&ndash;",
                        "⇗": "&neArr;",
                        "⤤": "&nearhk;",
                        "≐̸": "&nedot;",
                        "⤨": "&toea;",
                        "𝔫": "&nfr;",
                        "↮": "&nleftrightarrow;",
                        "⫲": "&nhpar;",
                        "⋼": "&nis;",
                        "⋺": "&nisd;",
                        "њ": "&njcy;",
                        "≦̸": "&nleqq;",
                        "↚": "&nleftarrow;",
                        "‥": "&nldr;",
                        "𝕟": "&nopf;",
                        "¬": "&not;",
                        "⋹̸": "&notinE;",
                        "⋵̸": "&notindot;",
                        "⋷": "&notinvb;",
                        "⋶": "&notinvc;",
                        "⋾": "&notnivb;",
                        "⋽": "&notnivc;",
                        "⫽⃥": "&nparsl;",
                        "∂̸": "&npart;",
                        "⨔": "&npolint;",
                        "↛": "&nrightarrow;",
                        "⤳̸": "&nrarrc;",
                        "↝̸": "&nrarrw;",
                        "𝓃": "&nscr;",
                        "⊄": "&nsub;",
                        "⫅̸": "&nsubseteqq;",
                        "⊅": "&nsup;",
                        "⫆̸": "&nsupseteqq;",
                        "ñ": "&ntilde;",
                        "ν": "&nu;",
                        "#": "&num;",
                        "№": "&numero;",
                        " ": "&numsp;",
                        "⊭": "&nvDash;",
                        "⤄": "&nvHarr;",
                        "≍⃒": "&nvap;",
                        "⊬": "&nvdash;",
                        "≥⃒": "&nvge;",
                        ">⃒": "&nvgt;",
                        "⧞": "&nvinfin;",
                        "⤂": "&nvlArr;",
                        "≤⃒": "&nvle;",
                        "<⃒": "&nvlt;",
                        "⊴⃒": "&nvltrie;",
                        "⤃": "&nvrArr;",
                        "⊵⃒": "&nvrtrie;",
                        "∼⃒": "&nvsim;",
                        "⇖": "&nwArr;",
                        "⤣": "&nwarhk;",
                        "⤧": "&nwnear;",
                        "ó": "&oacute;",
                        "ô": "&ocirc;",
                        "о": "&ocy;",
                        "ő": "&odblac;",
                        "⨸": "&odiv;",
                        "⦼": "&odsold;",
                        "œ": "&oelig;",
                        "⦿": "&ofcir;",
                        "𝔬": "&ofr;",
                        "˛": "&ogon;",
                        "ò": "&ograve;",
                        "⧁": "&ogt;",
                        "⦵": "&ohbar;",
                        "⦾": "&olcir;",
                        "⦻": "&olcross;",
                        "⧀": "&olt;",
                        "ō": "&omacr;",
                        "ω": "&omega;",
                        "ο": "&omicron;",
                        "⦶": "&omid;",
                        "𝕠": "&oopf;",
                        "⦷": "&opar;",
                        "⦹": "&operp;",
                        "∨": "&vee;",
                        "⩝": "&ord;",
                        "ℴ": "&oscr;",
                        "ª": "&ordf;",
                        "º": "&ordm;",
                        "⊶": "&origof;",
                        "⩖": "&oror;",
                        "⩗": "&orslope;",
                        "⩛": "&orv;",
                        "ø": "&oslash;",
                        "⊘": "&osol;",
                        "õ": "&otilde;",
                        "⨶": "&otimesas;",
                        "ö": "&ouml;",
                        "⌽": "&ovbar;",
                        "¶": "&para;",
                        "⫳": "&parsim;",
                        "⫽": "&parsl;",
                        "п": "&pcy;",
                        "%": "&percnt;",
                        ".": "&period;",
                        "‰": "&permil;",
                        "‱": "&pertenk;",
                        "𝔭": "&pfr;",
                        "φ": "&phi;",
                        "ϕ": "&varphi;",
                        "☎": "&phone;",
                        "π": "&pi;",
                        "ϖ": "&varpi;",
                        "ℎ": "&planckh;",
                        "+": "&plus;",
                        "⨣": "&plusacir;",
                        "⨢": "&pluscir;",
                        "⨥": "&plusdu;",
                        "⩲": "&pluse;",
                        "⨦": "&plussim;",
                        "⨧": "&plustwo;",
                        "⨕": "&pointint;",
                        "𝕡": "&popf;",
                        "£": "&pound;",
                        "⪳": "&prE;",
                        "⪷": "&precapprox;",
                        "⪹": "&prnap;",
                        "⪵": "&prnE;",
                        "⋨": "&prnsim;",
                        "′": "&prime;",
                        "⌮": "&profalar;",
                        "⌒": "&profline;",
                        "⌓": "&profsurf;",
                        "⊰": "&prurel;",
                        "𝓅": "&pscr;",
                        "ψ": "&psi;",
                        " ": "&puncsp;",
                        "𝔮": "&qfr;",
                        "𝕢": "&qopf;",
                        "⁗": "&qprime;",
                        "𝓆": "&qscr;",
                        "⨖": "&quatint;",
                        "?": "&quest;",
                        "⤜": "&rAtail;",
                        "⥤": "&rHar;",
                        "∽̱": "&race;",
                        "ŕ": "&racute;",
                        "⦳": "&raemptyv;",
                        "⦒": "&rangd;",
                        "⦥": "&range;",
                        "»": "&raquo;",
                        "⥵": "&rarrap;",
                        "⤠": "&rarrbfs;",
                        "⤳": "&rarrc;",
                        "⤞": "&rarrfs;",
                        "⥅": "&rarrpl;",
                        "⥴": "&rarrsim;",
                        "↣": "&rightarrowtail;",
                        "↝": "&rightsquigarrow;",
                        "⤚": "&ratail;",
                        "∶": "&ratio;",
                        "❳": "&rbbrk;",
                        "}": "&rcub;",
                        "]": "&rsqb;",
                        "⦌": "&rbrke;",
                        "⦎": "&rbrksld;",
                        "⦐": "&rbrkslu;",
                        "ř": "&rcaron;",
                        "ŗ": "&rcedil;",
                        "р": "&rcy;",
                        "⤷": "&rdca;",
                        "⥩": "&rdldhar;",
                        "↳": "&rdsh;",
                        "▭": "&rect;",
                        "⥽": "&rfisht;",
                        "𝔯": "&rfr;",
                        "⥬": "&rharul;",
                        "ρ": "&rho;",
                        "ϱ": "&varrho;",
                        "⇉": "&rrarr;",
                        "⋌": "&rthree;",
                        "˚": "&ring;",
                        "‏": "&rlm;",
                        "⎱": "&rmoustache;",
                        "⫮": "&rnmid;",
                        "⟭": "&roang;",
                        "⇾": "&roarr;",
                        "⦆": "&ropar;",
                        "𝕣": "&ropf;",
                        "⨮": "&roplus;",
                        "⨵": "&rotimes;",
                        ")": "&rpar;",
                        "⦔": "&rpargt;",
                        "⨒": "&rppolint;",
                        "›": "&rsaquo;",
                        "𝓇": "&rscr;",
                        "⋊": "&rtimes;",
                        "▹": "&triangleright;",
                        "⧎": "&rtriltri;",
                        "⥨": "&ruluhar;",
                        "℞": "&rx;",
                        "ś": "&sacute;",
                        "⪴": "&scE;",
                        "⪸": "&succapprox;",
                        "š": "&scaron;",
                        "ş": "&scedil;",
                        "ŝ": "&scirc;",
                        "⪶": "&succneqq;",
                        "⪺": "&succnapprox;",
                        "⋩": "&succnsim;",
                        "⨓": "&scpolint;",
                        "с": "&scy;",
                        "⋅": "&sdot;",
                        "⩦": "&sdote;",
                        "⇘": "&seArr;",
                        "§": "&sect;",
                        ";": "&semi;",
                        "⤩": "&tosa;",
                        "✶": "&sext;",
                        "𝔰": "&sfr;",
                        "♯": "&sharp;",
                        "щ": "&shchcy;",
                        "ш": "&shcy;",
                        "­": "&shy;",
                        "σ": "&sigma;",
                        "ς": "&varsigma;",
                        "⩪": "&simdot;",
                        "⪞": "&simg;",
                        "⪠": "&simgE;",
                        "⪝": "&siml;",
                        "⪟": "&simlE;",
                        "≆": "&simne;",
                        "⨤": "&simplus;",
                        "⥲": "&simrarr;",
                        "⨳": "&smashp;",
                        "⧤": "&smeparsl;",
                        "⌣": "&ssmile;",
                        "⪪": "&smt;",
                        "⪬": "&smte;",
                        "⪬︀": "&smtes;",
                        "ь": "&softcy;",
                        "/": "&sol;",
                        "⧄": "&solb;",
                        "⌿": "&solbar;",
                        "𝕤": "&sopf;",
                        "♠": "&spadesuit;",
                        "⊓︀": "&sqcaps;",
                        "⊔︀": "&sqcups;",
                        "𝓈": "&sscr;",
                        "☆": "&star;",
                        "⊂": "&subset;",
                        "⫅": "&subseteqq;",
                        "⪽": "&subdot;",
                        "⫃": "&subedot;",
                        "⫁": "&submult;",
                        "⫋": "&subsetneqq;",
                        "⊊": "&subsetneq;",
                        "⪿": "&subplus;",
                        "⥹": "&subrarr;",
                        "⫇": "&subsim;",
                        "⫕": "&subsub;",
                        "⫓": "&subsup;",
                        "♪": "&sung;",
                        "¹": "&sup1;",
                        "²": "&sup2;",
                        "³": "&sup3;",
                        "⫆": "&supseteqq;",
                        "⪾": "&supdot;",
                        "⫘": "&supdsub;",
                        "⫄": "&supedot;",
                        "⟉": "&suphsol;",
                        "⫗": "&suphsub;",
                        "⥻": "&suplarr;",
                        "⫂": "&supmult;",
                        "⫌": "&supsetneqq;",
                        "⊋": "&supsetneq;",
                        "⫀": "&supplus;",
                        "⫈": "&supsim;",
                        "⫔": "&supsub;",
                        "⫖": "&supsup;",
                        "⇙": "&swArr;",
                        "⤪": "&swnwar;",
                        "ß": "&szlig;",
                        "⌖": "&target;",
                        "τ": "&tau;",
                        "ť": "&tcaron;",
                        "ţ": "&tcedil;",
                        "т": "&tcy;",
                        "⌕": "&telrec;",
                        "𝔱": "&tfr;",
                        "θ": "&theta;",
                        "ϑ": "&vartheta;",
                        "þ": "&thorn;",
                        "×": "&times;",
                        "⨱": "&timesbar;",
                        "⨰": "&timesd;",
                        "⌶": "&topbot;",
                        "⫱": "&topcir;",
                        "𝕥": "&topf;",
                        "⫚": "&topfork;",
                        "‴": "&tprime;",
                        "▵": "&utri;",
                        "≜": "&trie;",
                        "◬": "&tridot;",
                        "⨺": "&triminus;",
                        "⨹": "&triplus;",
                        "⧍": "&trisb;",
                        "⨻": "&tritime;",
                        "⏢": "&trpezium;",
                        "𝓉": "&tscr;",
                        "ц": "&tscy;",
                        "ћ": "&tshcy;",
                        "ŧ": "&tstrok;",
                        "⥣": "&uHar;",
                        "ú": "&uacute;",
                        "ў": "&ubrcy;",
                        "ŭ": "&ubreve;",
                        "û": "&ucirc;",
                        "у": "&ucy;",
                        "ű": "&udblac;",
                        "⥾": "&ufisht;",
                        "𝔲": "&ufr;",
                        "ù": "&ugrave;",
                        "▀": "&uhblk;",
                        "⌜": "&ulcorner;",
                        "⌏": "&ulcrop;",
                        "◸": "&ultri;",
                        "ū": "&umacr;",
                        "ų": "&uogon;",
                        "𝕦": "&uopf;",
                        "υ": "&upsilon;",
                        "⇈": "&uuarr;",
                        "⌝": "&urcorner;",
                        "⌎": "&urcrop;",
                        "ů": "&uring;",
                        "◹": "&urtri;",
                        "𝓊": "&uscr;",
                        "⋰": "&utdot;",
                        "ũ": "&utilde;",
                        "ü": "&uuml;",
                        "⦧": "&uwangle;",
                        "⫨": "&vBar;",
                        "⫩": "&vBarv;",
                        "⦜": "&vangrt;",
                        "⊊︀": "&vsubne;",
                        "⫋︀": "&vsubnE;",
                        "⊋︀": "&vsupne;",
                        "⫌︀": "&vsupnE;",
                        "в": "&vcy;",
                        "⊻": "&veebar;",
                        "≚": "&veeeq;",
                        "⋮": "&vellip;",
                        "𝔳": "&vfr;",
                        "𝕧": "&vopf;",
                        "𝓋": "&vscr;",
                        "⦚": "&vzigzag;",
                        "ŵ": "&wcirc;",
                        "⩟": "&wedbar;",
                        "≙": "&wedgeq;",
                        "℘": "&wp;",
                        "𝔴": "&wfr;",
                        "𝕨": "&wopf;",
                        "𝓌": "&wscr;",
                        "𝔵": "&xfr;",
                        "ξ": "&xi;",
                        "⋻": "&xnis;",
                        "𝕩": "&xopf;",
                        "𝓍": "&xscr;",
                        "ý": "&yacute;",
                        "я": "&yacy;",
                        "ŷ": "&ycirc;",
                        "ы": "&ycy;",
                        "¥": "&yen;",
                        "𝔶": "&yfr;",
                        "ї": "&yicy;",
                        "𝕪": "&yopf;",
                        "𝓎": "&yscr;",
                        "ю": "&yucy;",
                        "ÿ": "&yuml;",
                        "ź": "&zacute;",
                        "ž": "&zcaron;",
                        "з": "&zcy;",
                        "ż": "&zdot;",
                        "ζ": "&zeta;",
                        "𝔷": "&zfr;",
                        "ж": "&zhcy;",
                        "⇝": "&zigrarr;",
                        "𝕫": "&zopf;",
                        "𝓏": "&zscr;",
                        "‍": "&zwj;",
                        "‌": "&zwnj;"
                    }
                }
            }
        });
    y(we);
    var ke = (we.bodyRegExps, we.namedReferences, w(function(e, r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.numericUnicodeMap = {
            0: 65533,
            128: 8364,
            130: 8218,
            131: 402,
            132: 8222,
            133: 8230,
            134: 8224,
            135: 8225,
            136: 710,
            137: 8240,
            138: 352,
            139: 8249,
            140: 338,
            142: 381,
            145: 8216,
            146: 8217,
            147: 8220,
            148: 8221,
            149: 8226,
            150: 8211,
            151: 8212,
            152: 732,
            153: 8482,
            154: 353,
            155: 8250,
            156: 339,
            158: 382,
            159: 376
        }
    }));
    y(ke);
    var Ae = (ke.numericUnicodeMap, w(function(e, r) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.fromCodePoint = String.fromCodePoint || function(e) {
            return String.fromCharCode(Math.floor((e - 65536) / 1024) + 55296, (e - 65536) % 1024 + 56320)
        }, r.getCodePoint = String.prototype.codePointAt ? function(e, r) {
            return e.codePointAt(r)
        } : function(e, r) {
            return 1024 * (e.charCodeAt(r) - 55296) + e.charCodeAt(r + 1) - 56320 + 65536
        }, r.highSurrogateFrom = 55296, r.highSurrogateTo = 56319
    }));
    y(Ae);
    var qe = (Ae.fromCodePoint, Ae.getCodePoint, Ae.highSurrogateFrom, Ae.highSurrogateTo, w(function(e, r) {
        function t(e, r) {
            var t = void 0 === r ? c : r,
                n = t.mode,
                a = void 0 === n ? "specialChars" : n,
                s = t.numeric,
                l = void 0 === s ? "decimal" : s,
                u = t.level,
                d = void 0 === u ? "all" : u;
            if (!e) return "";
            var p = o[d].characters,
                g = "hexadecimal" === l;
            return e.replace(i[a], function(e) {
                var r = p[e];
                if (r) return r;
                var t = e.length > 1 ? Ae.getCodePoint(e, 0) : e.charCodeAt(0);
                return (g ? "&#x" + t.toString(16) : "&#" + t) + ";"
            })
        }

        function n(e, r) {
            var t = void 0 === r ? s : r,
                n = t.level,
                a = void 0 === n ? "all" : n,
                i = t.scope,
                c = void 0 === i ? "xml" === a ? "strict" : "body" : i;
            if (!e) return "";
            var l = o[a].entities,
                u = "attribute" === c;
            return e.replace(p[a][c], function(e) {
                if (u && "=" === e[e.length - 1]) return e;
                if ("#" != e[1]) return l[e] || e;
                var r = e[2],
                    t = "x" == r || "X" == r ? parseInt(e.substr(3), 16) : parseInt(e.substr(2));
                return t >= 1114111 ? m : t > 65535 ? Ae.fromCodePoint(t) : g(ke.numericUnicodeMap[t] || t)
            })
        }
        var a = z && z.__assign || function() {
            return a = Object.assign || function(e) {
                for (var r, t = 1, n = arguments.length; t < n; t++) {
                    r = arguments[t];
                    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
                }
                return e
            }, a.apply(this, arguments)
        };
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = a(a({}, we.namedReferences), {
                all: we.namedReferences.html5
            }),
            i = {
                specialChars: /[<>'"&]/g,
                nonAscii: /(?:[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
                nonAsciiPrintable: /(?:[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
                extensive: /(?:[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g
            },
            c = {
                mode: "specialChars",
                level: "all",
                numeric: "decimal"
            };
        r.encode = t;
        var s = {
                scope: "body",
                level: "all"
            },
            l = /&(?:#\d+|#x[\da-fA-F]+|[0-9a-zA-Z]+);/g,
            u = /&(?:#\d+|#x[\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,
            d = {
                xml: {
                    strict: l,
                    attribute: u,
                    body: we.bodyRegExps.xml
                },
                html4: {
                    strict: l,
                    attribute: u,
                    body: we.bodyRegExps.html4
                },
                html5: {
                    strict: l,
                    attribute: u,
                    body: we.bodyRegExps.html5
                }
            },
            p = a(a({}, d), {
                all: d.html5
            }),
            g = String.fromCharCode,
            m = g(65533);
        r.decode = n
    }));
    y(qe);
    var Ee = qe.encode,
        Se = (qe.decode, function() {
            var e = new URLSearchParams(location.search || ""),
                r = e.get(q.query),
                t = P(q.cookie.name);
            r && (_gpdc.config.pdprQuery = window.htmlEncode(r || t), window._gpdc.listenForUserConsent(function() {
                "1" === r && null === t && x(q.cookie.name, q.cookie.value, q.cookie.expiry)
            }))
        });
    window.htmlEncode = Ee,
        function(e) {
            var r = function() {
                if (window._gpdcEvidonQueue && _gpdcEvidonQueue.length)
                    for (; _gpdcEvidonQueue.length;) _gpdcEvidonQueue.shift()()
            };
            window.sharedNav = window.sharedNav || {}, window.sharedNav.opts = window.sharedNav.opts || {
                skipToAnchor: "gdk__content",
                webToolbarType: "oracle"
            }, window._dkDebug = !1, new V, Se(), new M, new ye, r()
        }(jQuery)
}();