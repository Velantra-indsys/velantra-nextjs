module.exports = [
"[project]/src/hooks/useReveal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useReveal() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const items = Array.from(document.querySelectorAll('.reveal'));
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });
        items.forEach((item)=>observer.observe(item));
        const details = Array.from(document.querySelectorAll('.faq-list details'));
        const cleanups = details.map((item)=>{
            const onToggle = ()=>{
                if (!item.open) return;
                details.forEach((other)=>{
                    if (other !== item) other.open = false;
                });
            };
            item.addEventListener('toggle', onToggle);
            return ()=>item.removeEventListener('toggle', onToggle);
        });
        return ()=>{
            observer.disconnect();
            cleanups.forEach((cleanup)=>cleanup());
        };
    }, []);
}
}),
"[project]/src/hooks/useScrollHeader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollHeader",
    ()=>useScrollHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useScrollHeader() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const progress = document.getElementById('scroll-progress');
        const header = document.querySelector('.site-header.home-header');
        const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let ticking = false;
        const update = ()=>{
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? scrollY / docHeight * 100 : 0;
            if (progress) progress.style.width = `${pct}%`;
            if (header) header.classList.toggle('is-scrolled', scrollY > 40);
            if (!reduceMotion) {
                parallaxItems.forEach((item)=>{
                    const speed = parseFloat(item.dataset.parallax || '') || 0.1;
                    item.style.transform = `translateY(${scrollY * speed}px)`;
                });
            }
            ticking = false;
        };
        const onScroll = ()=>{
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        update();
        return ()=>window.removeEventListener('scroll', onScroll);
    }, []);
}
}),
"[project]/src/hooks/useTiltCard.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTiltCard",
    ()=>useTiltCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useTiltCard() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!window.matchMedia('(pointer: fine)').matches) return;
        const cards = Array.from(document.querySelectorAll('.tilt-card'));
        const cleanups = cards.map((card)=>{
            const onMove = (event)=>{
                const rect = card.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(900px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-4px)`;
            };
            const onLeave = ()=>{
                card.style.transform = '';
            };
            card.addEventListener('mousemove', onMove);
            card.addEventListener('mouseleave', onLeave);
            return ()=>{
                card.removeEventListener('mousemove', onMove);
                card.removeEventListener('mouseleave', onLeave);
            };
        });
        return ()=>cleanups.forEach((cleanup)=>cleanup());
    }, []);
}
}),
"[project]/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReveal.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useScrollHeader.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTiltCard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTiltCard.ts [app-ssr] (ecmascript)");
'use client';
;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReveal"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useScrollHeader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollHeader"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTiltCard$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTiltCard"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const host = document.querySelector('[data-body-class]');
        document.body.className = host?.dataset.bodyClass || 'antialiased overflow-x-hidden';
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const toggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('.main-nav');
        if (!toggle || !nav) return;
        const onToggle = ()=>{
            const isOpen = nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(isOpen));
        };
        const close = ()=>{
            nav.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        };
        toggle.addEventListener('click', onToggle);
        const links = Array.from(nav.querySelectorAll('a'));
        links.forEach((link)=>link.addEventListener('click', close));
        return ()=>{
            toggle.removeEventListener('click', onToggle);
            links.forEach((link)=>link.removeEventListener('click', close));
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "site-header home-header",
        children: [
            active === 'home' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "brand brand-lockup",
                href: "/",
                "aria-label": "Velantra home",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "brand-wordmark",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "menu-toggle",
                "aria-label": "Open navigation",
                "aria-expanded": "false",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 90
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/src/components/layout/Header.tsx",
                        lineNumber: 56,
                        columnNumber: 103
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "main-nav",
                "aria-label": "Main navigation",
                children: [
                    navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: active === item.key ? 'active' : undefined,
                            href: item.href,
                            "aria-current": active === item.key ? 'page' : undefined,
                            children: item.label
                        }, item.key, false, {
                            fileName: "[project]/src/components/layout/Header.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0m6skk7._.js.map