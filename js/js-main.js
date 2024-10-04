(() => {
    "use strict";
    window.addEventListener("DOMContentLoaded", (() => {
        const e = new URLSearchParams(window.location.search),
            t = document.querySelector(".astro-portal"),
            o = (e => {
                var t;
                return (null === (t = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)")) || void 0 === t ? void 0 : t.pop()) || ""
            })("wcmmode");
        if ((!o || "edit" !== o && "preview" !== o || "disabled" === e.get("wcmmode")) && t) {
            t.className = "astro-portal";
            const e = t.querySelector(".button > a");
            e && (t.innerHTML = "", t.appendChild(e), e.className = "astro-portal-wrapper")
        }
    })), window.addEventListener("load", (() => {
        const e = document.createElement("script");
        e.src = "/content/dam/global_pdc/en/year9/home/static/js/astro.js", e.async = !0, document.body.appendChild(e); {
            const e = document.createElement("link");
            e.rel = "stylesheet", e.href = "/content/dam/global_pdc/en/year9/home/static/css/astro.css", document.head.appendChild(e)
        }
    }))
})();
//# sourceMappingURL=main.js.map