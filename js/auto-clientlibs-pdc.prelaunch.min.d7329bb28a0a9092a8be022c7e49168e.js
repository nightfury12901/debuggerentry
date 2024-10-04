/*!
 * @sie/designkit
 * @copyright     2024 Sony Interactive Entertainment LLC, all rights reserved
 */

! function() {
    "use strict";

    function e(n) {
        "@babel/helpers - typeof";
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(n)
    }

    function n(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, n) {
        for (var o = 0; o < n.length; o++) {
            var t = n[o];
            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, a(t.key), t)
        }
    }

    function t(e, n, t) {
        return n && o(e.prototype, n), t && o(e, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function i(e, n) {
        if ("object" != typeof e || null === e) return e;
        var o = e[Symbol.toPrimitive];
        if (void 0 !== o) {
            var t = o.call(e, n || "default");
            if ("object" != typeof t) return t;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === n ? String : Number)(e)
    }

    function a(e) {
        var n = i(e, "string");
        return "symbol" == typeof n ? n : String(n)
    }
    var c = function(e) {
            var n = Array.isArray(e) ? e : [e];
            n.map(function(e) {
                return e()
            })
        },
        r = function(e, n) {
            _gpdc.elements.$document.ready(function() {
                window._dkDebug = !1, window._gpdc && _gpdc.user && "undefined" != typeof _gpdc.user.isLoggedIn ? c(e) : _gpdc.elements.$document.one("userInfoSet.dkComponents", function() {
                    return c(e)
                })
            })
        },
        d = "\nImplementation error!! Please contact designkit web team for assistance.",
        u = function() {
            function o() {
                throw n(this, o), TypeError("new of abstract class Logger")
            }
            return t(o, null, [{
                key: "logInitializer",
                value: function(e, n, o) {
                    var t = "__DK_PACKAGES",
                        i = window[t] ? window[t] : {},
                        a = i[e] ? i[e] : {
                            common: [],
                            components: []
                        };
                    a[n].push(o), i[e] = a, window[t] = i
                }
            }, {
                key: "groupStart",
                value: function(n) {
                    void 0 !== ("undefined" == typeof console ? "undefined" : e(console)) && "function" == typeof console.groupCollapsed && _gpdc.Logger.shouldDebug() && console.groupCollapsed("designkit - ".concat(n))
                }
            }, {
                key: "groupEnd",
                value: function() {
                    void 0 !== ("undefined" == typeof console ? "undefined" : e(console)) && "function" == typeof console.groupEnd && _gpdc.Logger.shouldDebug() && console.groupEnd()
                }
            }, {
                key: "shouldDebug",
                value: function() {
                    var e = (window.location.search || "").indexOf("_dkDebug=true") > -1;
                    return window._dkDebug || e
                }
            }, {
                key: "log",
                value: function() {
                    if (_gpdc.Logger.shouldDebug()) {
                        var n = void 0 !== ("undefined" == typeof console ? "undefined" : e(console)) && "function" == typeof console.info;
                        if (n) {
                            for (var o = arguments.length, t = new Array(o), i = 0; i < o; i++) t[i] = arguments[i];
                            var a = [].splice.call(t, 0);
                            a[1] && "object" === e(a[1]) && (a[1] = JSON.stringify(a[1], null, 2)), console.info("designkit - ".concat(Array.prototype.slice.call(a).join("\n")))
                        }
                    }
                }
            }, {
                key: "warn",
                value: function(n, o) {
                    void 0 !== ("undefined" == typeof console ? "undefined" : e(console)) && "function" == typeof console.warn && console.warn("designkit - ".concat(n).concat(o && d || ""))
                }
            }, {
                key: "error",
                value: function(n, o) {
                    void 0 !== ("undefined" == typeof console ? "undefined" : e(console)) && "function" == typeof console.error && console.error("designkit - ".concat(n).concat(o && d || ""))
                }
            }]), o
        }(),
        s = {
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
        l = {
            PROD: /(www|wwwglobal|author)\.playstation\.com/i,
            STAGE: /(author\.stage|stage)\.playstation\.com/i,
            PREVIEW: /preview\.www\.playstation\.com/i,
            WWWGLOBAL: /wwwglobal\.playstation\.com/i
        },
        p = ({
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
        m = ({
            IS_PORTRAIT: p.IS_PORTRAIT.matches,
            IS_LANDSCAPE: p.IS_LANDSCAPE.matches,
            IS_JETSTREAM_MOBILE: p.IS_JETSTREAM_MOBILE.matches,
            IS_MOBILE: p.IS_MOBILE.matches,
            IS_MOBILE_PORTRAIT: p.IS_MOBILE_PORTRAIT.matches,
            IS_TABLET: p.IS_TABLET.matches,
            IS_MAX_TABLET: p.IS_MAX_TABLET.matches,
            IS_TABLET_LG: p.IS_TABLET_LG.matches,
            IS_LAPTOP: p.IS_LAPTOP.matches,
            IS_DESKTOP: p.IS_DESKTOP.matches
        }, {
            EMPTY_LABEL: "empty"
        }),
        w = {
            loginApi: "/central/auth/login?locale=LOCALE&postSignInURL=PAGE_URL&cancelURL=PAGE_URL",
            logoutApi: "/central/auth/logout?locale=LOCALE&postSignOutURL=PAGE_URL&cancelURL=PAGE_URL",
            userApi: "/user/details",
            segmentsApi: "/user/segments"
        },
        g = function(e, n) {
            var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 180,
                t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".playstation.com";
            if (n) {
                var i = new Date;
                i.setTime(i.getTime() + 60 * o * 1e3), document.cookie = "".concat(e, "=").concat(encodeURIComponent(n), "; expires=").concat(i.toUTCString(), ";path=/; domain=").concat(t, ";secure")
            }
        },
        f = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = document.cookie.match(new RegExp("(^| )".concat(e, "=([^;]*)(;|$)")));
            return n ? decodeURIComponent(n[2]) : null
        },
        h = function() {
            function e() {
                n(this, e), this.cookie = s, window._gpdcEvidonQueue = [], this.init()
            }
            return t(e, [{
                key: "setEvidonCookie",
                value: function(e) {
                    g(this.cookie.LABELS.EU_COOKIE, e, this.cookie.COOKIE_AGE, this.cookie.DOMAIN)
                }
            }, {
                key: "setConsent",
                value: function(e) {
                    this.setEvidonCookie(e);
                    var n = new CustomEvent("evidonConsentState", {
                        detail: {
                            consent: e
                        },
                        bubbles: !0,
                        cancelable: !0
                    });
                    document.dispatchEvent(n)
                }
            }, {
                key: "setEvent",
                value: function(e, n) {
                    var o = function() {
                        _gpdc.analytics.event.addGDLEvent("click", e, {
                            moduleName: "cookie-banner",
                            elementType: "button",
                            assetName: m.EMPTY_LABEL,
                            linkUrl: m.EMPTY_LABEL,
                            label: "accept",
                            userActionFlag: !0
                        }, n)
                    };
                    return window._gpdc && _gpdc.analytics ? void o() : void window._gpdcEvidonQueue.push(o)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    window.evidon = window.evidon || {}, window.evidon.launchConsentAccepted = function() {
                        e.setConsent(e.cookie.LABELS.PREFERENCE_ACCEPT), window.evidon.banner && e.setEvent("accept", $("#_evidon-accept-button")), _gpdc.Logger.log("Evidon launchConsentAccepted called!!")
                    }, window.evidon.launchConsentWithdrawn = function() {
                        e.setConsent(e.cookie.LABELS.PREFERENCE_REJECT), _gpdc.Logger.log("Evidon launchConsentWithdrawn called!!")
                    }, window.evidon.launchConsentDeclined = function() {
                        window.evidon.notice.dropSuppressionCookie(1), e.setConsent(e.cookie.LABELS.PREFERENCE_REJECT), _gpdc.Logger.log("Evidon launchConsentDeclined called!!")
                    }, _gpdc.Logger.logInitializer("core", "common", "Evidon")
                }
            }]), e
        }(),
        E = "_gpdc_anonId",
        _ = function() {
            var e = localStorage.getItem(E);
            e || localStorage.setItem(E, S())
        },
        S = function() {
            var e = (new Date).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
                var o = (e + 16 * Math.random()) % 16 | 0;
                return e = Math.floor(e / 16), ("x" == n ? o : 3 & o | 8).toString(16)
            })
        },
        v = function() {
            function e() {
                throw n(this, e), TypeError("new of abstract class Services")
            }
            return t(e, null, [{
                key: "callGetApi",
                value: function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "json";
                    return new Promise(function(t, i) {
                        $.ajax({
                            type: "GET",
                            url: e,
                            dataType: o,
                            crossDomain: !0,
                            xhrFields: {
                                withCredentials: !0
                            },
                            async: n,
                            success: function(e) {
                                t(e)
                            },
                            error: function(e) {
                                i(e)
                            }
                        })
                    })
                }
            }]), e
        }(),
        I = function() {
            window.targetGlobalSettings = {
                dataProviders: [{
                    name: "segmentsProvider",
                    version: "1.0.0",
                    provider: function(e) {
                        var n = "function" == typeof e ? e : function() {};
                        L() ? A(n) : n(null, {})
                    }
                }]
            }, _gpdc.Logger.logInitializer("prelaunch", "components", "Target")
        },
        A = function(e) {
            return v.callGetApi(window._gpdc.config.baseIOUrl + w.segmentsApi, !1).then(function(n) {
                var o = n.segmentsMap;
                return e(null, o || {})
            }).catch(function(e) {
                return _gpdc.Logger.log("user/segments API error!", e)
            })
        },
        L = function() {
            var e = l.PROD.test(location.href) ? "np" : l.STAGE.test(location.href) ? "mgmt" : "e1",
                n = f(s.UH),
                o = "true" === f(s.ORACLE[e]);
            return !(!n || !o)
        };
    ! function(e) {
        window._gpdc = window._gpdc || {}, window._dkDebug = !1, _gpdc.Logger = u, _gpdc.InitializeComponents = r, I(), new h, _()
    }(jQuery)
}();