(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useReveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useReveal() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReveal.useEffect": ()=>{
            const items = Array.from(document.querySelectorAll('.reveal'));
            const observer = new IntersectionObserver({
                "useReveal.useEffect": (entries)=>{
                    entries.forEach({
                        "useReveal.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                                observer.unobserve(entry.target);
                            }
                        }
                    }["useReveal.useEffect"]);
                }
            }["useReveal.useEffect"], {
                threshold: 0.12
            });
            items.forEach({
                "useReveal.useEffect": (item)=>observer.observe(item)
            }["useReveal.useEffect"]);
            const details = Array.from(document.querySelectorAll('.faq-list details'));
            const cleanups = details.map({
                "useReveal.useEffect.cleanups": (item)=>{
                    const onToggle = {
                        "useReveal.useEffect.cleanups.onToggle": ()=>{
                            if (!item.open) return;
                            details.forEach({
                                "useReveal.useEffect.cleanups.onToggle": (other)=>{
                                    if (other !== item) other.open = false;
                                }
                            }["useReveal.useEffect.cleanups.onToggle"]);
                        }
                    }["useReveal.useEffect.cleanups.onToggle"];
                    item.addEventListener('toggle', onToggle);
                    return ({
                        "useReveal.useEffect.cleanups": ()=>item.removeEventListener('toggle', onToggle)
                    })["useReveal.useEffect.cleanups"];
                }
            }["useReveal.useEffect.cleanups"]);
            return ({
                "useReveal.useEffect": ()=>{
                    observer.disconnect();
                    cleanups.forEach({
                        "useReveal.useEffect": (cleanup)=>cleanup()
                    }["useReveal.useEffect"]);
                }
            })["useReveal.useEffect"];
        }
    }["useReveal.useEffect"], []);
}
_s(useReveal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useScrollHeader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollHeader",
    ()=>useScrollHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useScrollHeader() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollHeader.useEffect": ()=>{
            const progress = document.getElementById('scroll-progress');
            const header = document.querySelector('.site-header.home-header');
            const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            let ticking = false;
            const update = {
                "useScrollHeader.useEffect.update": ()=>{
                    const scrollY = window.scrollY;
                    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const pct = docHeight > 0 ? scrollY / docHeight * 100 : 0;
                    if (progress) progress.style.width = `${pct}%`;
                    if (header) header.classList.toggle('is-scrolled', scrollY > 40);
                    if (!reduceMotion) {
                        parallaxItems.forEach({
                            "useScrollHeader.useEffect.update": (item)=>{
                                const speed = parseFloat(item.dataset.parallax || '') || 0.1;
                                item.style.transform = `translateY(${scrollY * speed}px)`;
                            }
                        }["useScrollHeader.useEffect.update"]);
                    }
                    ticking = false;
                }
            }["useScrollHeader.useEffect.update"];
            const onScroll = {
                "useScrollHeader.useEffect.onScroll": ()=>{
                    if (!ticking) {
                        requestAnimationFrame(update);
                        ticking = true;
                    }
                }
            }["useScrollHeader.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            update();
            return ({
                "useScrollHeader.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["useScrollHeader.useEffect"];
        }
    }["useScrollHeader.useEffect"], []);
}
_s(useScrollHeader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTiltCard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTiltCard",
    ()=>useTiltCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useTiltCard() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTiltCard.useEffect": ()=>{
            if (!window.matchMedia('(pointer: fine)').matches) return;
            const cards = Array.from(document.querySelectorAll('.tilt-card'));
            const cleanups = cards.map({
                "useTiltCard.useEffect.cleanups": (card)=>{
                    const onMove = {
                        "useTiltCard.useEffect.cleanups.onMove": (event)=>{
                            const rect = card.getBoundingClientRect();
                            const x = (event.clientX - rect.left) / rect.width - 0.5;
                            const y = (event.clientY - rect.top) / rect.height - 0.5;
                            card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
                        }
                    }["useTiltCard.useEffect.cleanups.onMove"];
                    const onLeave = {
                        "useTiltCard.useEffect.cleanups.onLeave": ()=>{
                            card.style.transform = '';
                        }
                    }["useTiltCard.useEffect.cleanups.onLeave"];
                    card.addEventListener('mousemove', onMove);
                    card.addEventListener('mouseleave', onLeave);
                    return ({
                        "useTiltCard.useEffect.cleanups": ()=>{
                            card.removeEventListener('mousemove', onMove);
                            card.removeEventListener('mouseleave', onLeave);
                        }
                    })["useTiltCard.useEffect.cleanups"];
                }
            }["useTiltCard.useEffect.cleanups"]);
            return ({
                "useTiltCard.useEffect": ()=>cleanups.forEach({
                        "useTiltCard.useEffect": (cleanup)=>cleanup()
                    }["useTiltCard.useEffect"])
            })["useTiltCard.useEffect"];
        }
    }["useTiltCard.useEffect"], []);
}
_s(useTiltCard, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScrollHeader.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTiltCard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTiltCard.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const navItems = [
    {
        key: 'home',
        href: '/',
        label: 'Home'
    },
    {
        key: 'about',
        href: '/about',
        label: 'About Us'
    },
    {
        key: 'smart-id',
        href: '/smart-id',
        label: 'Smart-ID'
    },
    {
        key: 'smart-gate',
        href: '/smart-gate',
        label: 'Smart-Gate'
    },
    {
        key: 'smart-people',
        href: '/smart-people',
        label: 'Smart-People'
    }
];
function Header({ active }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollHeader"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTiltCard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTiltCard"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const host = document.querySelector('[data-body-class]');
            document.body.className = host?.dataset.bodyClass || 'antialiased overflow-x-hidden';
        }
    }["Header.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const toggle = document.querySelector('.menu-toggle');
            const nav = document.querySelector('.main-nav');
            if (!toggle || !nav) return;
            const onToggle = {
                "Header.useEffect.onToggle": ()=>{
                    const isOpen = nav.classList.toggle('open');
                    toggle.setAttribute('aria-expanded', String(isOpen));
                }
            }["Header.useEffect.onToggle"];
            const close = {
                "Header.useEffect.close": ()=>{
                    nav.classList.remove('open');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            }["Header.useEffect.close"];
            toggle.addEventListener('click', onToggle);
            const links = Array.from(nav.querySelectorAll('a'));
            links.forEach({
                "Header.useEffect": (link)=>link.addEventListener('click', close)
            }["Header.useEffect"]);
            return ({
                "Header.useEffect": ()=>{
                    toggle.removeEventListener('click', onToggle);
                    links.forEach({
                        "Header.useEffect": (link)=>link.removeEventListener('click', close)
                    }["Header.useEffect"]);
                }
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "site-header home-header",
        children: [
            active === 'home' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "brand brand-lockup",
                href: "/",
                "aria-label": "Velantra home",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "brand-wordmark",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/Velentra-logo-text.png",
                        alt: "Velantra Business Management Platform"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 53,
                        columnNumber: 44
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "menu-toggle",
                "aria-label": "Open navigation",
                "aria-expanded": "false",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 90
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 103
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 116
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "main-nav",
                "aria-label": "Main navigation",
                children: [
                    navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: active === item.key ? 'active' : undefined,
                            href: item.href,
                            "aria-current": active === item.key ? 'page' : undefined,
                            children: item.label
                        }, item.key, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "button button-small button-primary",
                        href: "/#contact",
                        children: "Contact"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Header.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Header.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Header, "kmHRLd802Ppuk7J/uiNNQ5n/cfg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollHeader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollHeader"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTiltCard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTiltCard"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ProductsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ProductsSection() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsSection.useEffect": ()=>{
            const productSlider = document.querySelector("[data-product-slider]");
            const productCards = productSlider ? Array.from(productSlider.querySelectorAll(".product-highlight")) : [];
            const productPrev = document.querySelector("[data-product-prev]");
            const productNext = document.querySelector("[data-product-next]");
            const productDots = document.querySelector("[data-product-dots]");
            if (!productSlider || !productCards.length || !productPrev || !productNext || !productDots) return;
            let activeProduct = 0;
            let scrollFrame = 0;
            const cleanups = [];
            productDots.replaceChildren();
            const getCenteredScrollLeft = {
                "ProductsSection.useEffect.getCenteredScrollLeft": (card)=>{
                    const sliderBox = productSlider.getBoundingClientRect();
                    const cardBox = card.getBoundingClientRect();
                    return productSlider.scrollLeft + cardBox.left + cardBox.width / 2 - sliderBox.left - sliderBox.width / 2;
                }
            }["ProductsSection.useEffect.getCenteredScrollLeft"];
            const updateControls = {
                "ProductsSection.useEffect.updateControls": (index)=>{
                    activeProduct = index;
                    productPrev.disabled = index === 0;
                    productNext.disabled = index === productCards.length - 1;
                    dots.forEach({
                        "ProductsSection.useEffect.updateControls": (dot, dotIndex)=>{
                            dot.classList.toggle("active", dotIndex === index);
                            dot.setAttribute("aria-current", dotIndex === index ? "true" : "false");
                        }
                    }["ProductsSection.useEffect.updateControls"]);
                }
            }["ProductsSection.useEffect.updateControls"];
            const showProduct = {
                "ProductsSection.useEffect.showProduct": (index)=>{
                    const nextIndex = Math.max(0, Math.min(index, productCards.length - 1));
                    productSlider.scrollTo({
                        left: getCenteredScrollLeft(productCards[nextIndex]),
                        behavior: "smooth"
                    });
                    updateControls(nextIndex);
                }
            }["ProductsSection.useEffect.showProduct"];
            const dots = productCards.map({
                "ProductsSection.useEffect.dots": (_, index)=>{
                    const dot = document.createElement("button");
                    dot.type = "button";
                    dot.setAttribute("aria-label", `Show product ${index + 1}`);
                    const onClick = {
                        "ProductsSection.useEffect.dots.onClick": ()=>showProduct(index)
                    }["ProductsSection.useEffect.dots.onClick"];
                    dot.addEventListener("click", onClick);
                    cleanups.push({
                        "ProductsSection.useEffect.dots": ()=>dot.removeEventListener("click", onClick)
                    }["ProductsSection.useEffect.dots"]);
                    productDots.append(dot);
                    return dot;
                }
            }["ProductsSection.useEffect.dots"]);
            const onPrev = {
                "ProductsSection.useEffect.onPrev": ()=>showProduct(activeProduct - 1)
            }["ProductsSection.useEffect.onPrev"];
            const onNext = {
                "ProductsSection.useEffect.onNext": ()=>showProduct(activeProduct + 1)
            }["ProductsSection.useEffect.onNext"];
            const onScroll = {
                "ProductsSection.useEffect.onScroll": ()=>{
                    cancelAnimationFrame(scrollFrame);
                    scrollFrame = requestAnimationFrame({
                        "ProductsSection.useEffect.onScroll": ()=>{
                            const sliderCenter = productSlider.getBoundingClientRect().left + productSlider.clientWidth / 2;
                            const nearestIndex = productCards.reduce({
                                "ProductsSection.useEffect.onScroll": (nearest, card, index)=>{
                                    const box = card.getBoundingClientRect();
                                    const distance = Math.abs(box.left + box.width / 2 - sliderCenter);
                                    return distance < nearest.distance ? {
                                        index,
                                        distance
                                    } : nearest;
                                }
                            }["ProductsSection.useEffect.onScroll"], {
                                index: 0,
                                distance: Infinity
                            }).index;
                            updateControls(nearestIndex);
                        }
                    }["ProductsSection.useEffect.onScroll"]);
                }
            }["ProductsSection.useEffect.onScroll"];
            const onResize = {
                "ProductsSection.useEffect.onResize": ()=>{
                    if (!window.matchMedia("(max-width: 700px)").matches) return;
                    productSlider.scrollTo({
                        left: getCenteredScrollLeft(productCards[activeProduct])
                    });
                }
            }["ProductsSection.useEffect.onResize"];
            const onScrollEnd = {
                "ProductsSection.useEffect.onScrollEnd": ()=>showProduct(activeProduct)
            }["ProductsSection.useEffect.onScrollEnd"];
            productPrev.addEventListener("click", onPrev);
            productNext.addEventListener("click", onNext);
            productSlider.addEventListener("scroll", onScroll, {
                passive: true
            });
            productSlider.addEventListener("scrollend", onScrollEnd);
            window.addEventListener("resize", onResize);
            updateControls(0);
            requestAnimationFrame({
                "ProductsSection.useEffect": ()=>{
                    if (window.matchMedia("(max-width: 700px)").matches) showProduct(0);
                }
            }["ProductsSection.useEffect"]);
            return ({
                "ProductsSection.useEffect": ()=>{
                    cleanups.forEach({
                        "ProductsSection.useEffect": (cleanup)=>cleanup()
                    }["ProductsSection.useEffect"]);
                    productPrev.removeEventListener("click", onPrev);
                    productNext.removeEventListener("click", onNext);
                    productSlider.removeEventListener("scroll", onScroll);
                    productSlider.removeEventListener("scrollend", onScrollEnd);
                    window.removeEventListener("resize", onResize);
                    cancelAnimationFrame(scrollFrame);
                }
            })["ProductsSection.useEffect"];
        }
    }["ProductsSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "home-section products-section",
            id: "products",
            dangerouslySetInnerHTML: {
                __html: String.raw`<div class="container">
        <div class="home-heading centered reveal"><h2>Three products. One operational advantage.</h2><p>Give employees, security teams, and HR leaders the tools they need while keeping every workflow connected.</p></div>
        <div class="product-highlight-grid" data-product-slider>
          <article class="product-highlight tilt-card reveal"><div class="product-icon product-icon-id"><svg class="smart-id-home-icon" width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><defs><linearGradient id="homeSmartIdBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1565FF"/><stop offset="100%" stop-color="#0A2E8A"/></linearGradient><linearGradient id="homeSmartIdShieldGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1DE9B6"/><stop offset="100%" stop-color="#1A3DFF"/></linearGradient></defs><rect x="180" y="70" width="170" height="280" rx="20" fill="none" stroke="#082D7D" stroke-width="10"/><rect x="235" y="82" width="30" height="8" rx="4" fill="#082D7D"/><rect x="95" y="120" width="220" height="140" rx="18" fill="url(#homeSmartIdBlueGrad)"/><circle cx="145" cy="170" r="22" fill="white"/><path d="M110 230 C110 205, 180 205, 180 230 L180 240 L110 240 Z" fill="white"/><rect x="195" y="160" width="85" height="8" rx="4" fill="white"/><rect x="195" y="182" width="85" height="8" rx="4" fill="white"/><rect x="195" y="205" width="50" height="8" rx="4" fill="white"/><path d="M290 235 C330 235, 355 210, 355 210 L355 290 C355 340, 290 370, 290 370 C290 370, 225 340, 225 290 L225 210 C225 210, 250 235, 290 235 Z" fill="url(#homeSmartIdShieldGrad)"/><path d="M255 285 L275 305 L320 255" fill="none" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div><span>Employee Work Buddy</span><h3>Smart-ID</h3><p>Smart ID empowers employees with instant access to attendance, leave, approvals, and company updates from a single app.
Designed to simplify daily operations, improve engagement, and enhance workplace efficiency.</p><ul><li>Employee ID</li><li>Attendance</li><li>Leave </li><li>Approval </li><li>Notice Board & Announcements</li><li>Team AttendanceTravel & Expense Claims</li></ul><a class="product-link" href="/smart-id">View Product <b>→</b></a></article>
          <article class="product-highlight featured tilt-card reveal delay-1"><div class="product-icon product-icon-gate"><i class="bi bi-door-open" aria-hidden="true"></i></div><span>Visitor &amp; Gate Control</span><h3>Smart-Gate</h3><p>Smart Gate is an intelligent gate automation platform that streamlines visitor management, vehicle tracking, material movement, and security compliance through real-time monitoring and digital access control.</p><ul><li>Visitor</li><li>Vehicle</li><li>Material Inward & Outward</li><li>Document Verification</li><li>Live Monitoring Dashboard</li><li>QR & Digital Pass</li></ul><a class="product-link" href="/smart-gate">View Product <b>→</b></a></article>
          <article class="product-highlight tilt-card reveal delay-2"><div class="product-icon product-icon-people"><i class="bi bi-people" aria-hidden="true"></i></div><span>People &amp; HR Operations</span><h3>Smart-People</h3><p>Smart People is a comprehensive Human Resource Management platform that simplifies employee administration, recruitment, attendance, payroll, performance, and HR operations through a single intelligent system.</p><ul><li>Employee</li><li>Recruitment</li><li>Employee Lifecycle</li><li>Attendance Management</li><li>Shift Management</li><li>Payroll Management</li></ul><a class="product-link" href="/smart-people">View Product <b>→</b></a></article>
        </div>
        <div class="product-slider-controls" data-product-slider-controls aria-label="Product slider controls">
          <button type="button" data-product-prev aria-label="Previous product"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6"/></svg></button>
          <div class="product-slider-dots" data-product-dots></div>
          <button type="button" data-product-next aria-label="Next product"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6"/></svg></button>
        </div>
      </div>`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/home/ProductsSection.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(ProductsSection, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ProductsSection;
var _c;
__turbopack_context__.k.register(_c, "ProductsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ContactSection() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactSection.useEffect": ()=>{
            const forms = Array.from(document.querySelectorAll("form"));
            const cleanups = forms.map({
                "ContactSection.useEffect.cleanups": (form)=>{
                    const onSubmit = {
                        "ContactSection.useEffect.cleanups.onSubmit": (event)=>{
                            const contactMail = form.dataset.contactMail;
                            event.preventDefault();
                            const button = form.querySelector("button[type='submit']");
                            if (!button) return;
                            const original = button.innerHTML;
                            if (contactMail) {
                                const formData = new FormData(form);
                                const message = [
                                    `Full name: ${formData.get("name") || ""}`,
                                    `Work email: ${formData.get("email") || ""}`,
                                    `Company: ${formData.get("company") || ""}`,
                                    `Product interest: ${formData.get("product") || ""}`,
                                    "",
                                    "Message:",
                                    `${formData.get("message") || ""}`
                                ].join("\n");
                                button.innerHTML = "Opening email...";
                                button.disabled = true;
                                window.location.href = `mailto:${contactMail}?subject=${encodeURIComponent("Velentra demo request")}&body=${encodeURIComponent(message)}`;
                                window.setTimeout({
                                    "ContactSection.useEffect.cleanups.onSubmit": ()=>{
                                        button.innerHTML = original;
                                        button.disabled = false;
                                    }
                                }["ContactSection.useEffect.cleanups.onSubmit"], 2000);
                                return;
                            }
                            button.innerHTML = "Request received";
                            button.disabled = true;
                            window.setTimeout({
                                "ContactSection.useEffect.cleanups.onSubmit": ()=>{
                                    button.innerHTML = original;
                                    button.disabled = false;
                                    form.reset();
                                }
                            }["ContactSection.useEffect.cleanups.onSubmit"], 2500);
                        }
                    }["ContactSection.useEffect.cleanups.onSubmit"];
                    form.addEventListener("submit", onSubmit);
                    return ({
                        "ContactSection.useEffect.cleanups": ()=>form.removeEventListener("submit", onSubmit)
                    })["ContactSection.useEffect.cleanups"];
                }
            }["ContactSection.useEffect.cleanups"]);
            return ({
                "ContactSection.useEffect": ()=>cleanups.forEach({
                        "ContactSection.useEffect": (cleanup)=>cleanup()
                    }["ContactSection.useEffect"])
            })["ContactSection.useEffect"];
        }
    }["ContactSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "home-cta",
            id: "contact",
            dangerouslySetInnerHTML: {
                __html: String.raw`<div class="container reveal">
        <div class="contact-intro">
          <h2 class="contact-title">Contact Us</h2>
          <span>Ready to modernize operations?</span>
          <h3>Build a smarter, more connected workplace.</h3>
          <p>Tell us about your organization and the workflows you want to improve. Our team will contact you with a tailored Velantra demo.</p>
          <div class="contact-details">
            <a class="contact-method contact-method-whatsapp" href="https://wa.me/916374326329" target="_blank" rel="noopener" aria-label="Chat with Velantra sales on WhatsApp">
              <i aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><path d="M16 3.6A12.1 12.1 0 0 0 5.8 22.2L4 28l6-1.6A12.1 12.1 0 1 0 16 3.6Zm0 22.1c-2 0-3.9-.6-5.6-1.7l-.4-.2-3.5.9 1-3.4-.3-.4A9.9 9.9 0 1 1 16 25.7Zm5.4-7.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1a8.1 8.1 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.3-.5-.4Z"/></svg></i>
              <span><small>WhatsApp</small><b>Chat with us</b></span>
            </a>
            <a class="contact-method contact-method-email" href="mailto:sales@indsys.com">
              <span><small>Email us</small><b>sales@indsys.com</b></span>
            </a>
          </div>
        </div>
        <form class="contact-form" action="mailto:sales@indsys.com" method="post" enctype="text/plain" data-contact-mail="hemanthviky@gmail.com">
          <div class="contact-form-head"><span>Book a demo</span><h3>Tell us about your needs</h3><p>Complete the form and our team will get back to you.</p></div>
          <div class="contact-form-grid">
            <label>Full name<input type="text" name="name" autocomplete="name" placeholder="Your full name" required></label>
            <label>Work email<input type="email" name="email" autocomplete="email" placeholder="name@company.com" required></label>
            <label>Company<input type="text" name="company" autocomplete="organization" placeholder="Company name" required></label>
            <label>Product interest<select name="product" required><option value="" selected disabled>Select a product</option><option>Smart-ID</option><option>Smart-Gate</option><option>Smart-People</option><option>Complete Velantra Suite</option></select></label>
          </div>
          <label>How can we help?<textarea name="message" placeholder="Tell us about your Employee, gate, or HR requirements" required></textarea></label>
          <button class="button contact-submit" type="submit">Submit demo request <b>→</b></button>
          <small>By submitting, you agree to be contacted about your request.</small>
        </form>
      </div>`
            }
        }, void 0, false, {
            fileName: "[project]/src/components/home/ContactSection.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(ContactSection, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_1ctc7tk._.js.map