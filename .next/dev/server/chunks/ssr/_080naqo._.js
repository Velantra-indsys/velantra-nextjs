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
"[project]/src/components/home/ProductsSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ProductsSection() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        const getCenteredScrollLeft = (card)=>{
            const sliderBox = productSlider.getBoundingClientRect();
            const cardBox = card.getBoundingClientRect();
            return productSlider.scrollLeft + cardBox.left + cardBox.width / 2 - sliderBox.left - sliderBox.width / 2;
        };
        const updateControls = (index)=>{
            activeProduct = index;
            productPrev.disabled = index === 0;
            productNext.disabled = index === productCards.length - 1;
            dots.forEach((dot, dotIndex)=>{
                dot.classList.toggle("active", dotIndex === index);
                dot.setAttribute("aria-current", dotIndex === index ? "true" : "false");
            });
        };
        const showProduct = (index)=>{
            const nextIndex = Math.max(0, Math.min(index, productCards.length - 1));
            productSlider.scrollTo({
                left: getCenteredScrollLeft(productCards[nextIndex]),
                behavior: "smooth"
            });
            updateControls(nextIndex);
        };
        const dots = productCards.map((_, index)=>{
            const dot = document.createElement("button");
            dot.type = "button";
            dot.setAttribute("aria-label", `Show product ${index + 1}`);
            const onClick = ()=>showProduct(index);
            dot.addEventListener("click", onClick);
            cleanups.push(()=>dot.removeEventListener("click", onClick));
            productDots.append(dot);
            return dot;
        });
        const onPrev = ()=>showProduct(activeProduct - 1);
        const onNext = ()=>showProduct(activeProduct + 1);
        const onScroll = ()=>{
            cancelAnimationFrame(scrollFrame);
            scrollFrame = requestAnimationFrame(()=>{
                const sliderCenter = productSlider.getBoundingClientRect().left + productSlider.clientWidth / 2;
                const nearestIndex = productCards.reduce((nearest, card, index)=>{
                    const box = card.getBoundingClientRect();
                    const distance = Math.abs(box.left + box.width / 2 - sliderCenter);
                    return distance < nearest.distance ? {
                        index,
                        distance
                    } : nearest;
                }, {
                    index: 0,
                    distance: Infinity
                }).index;
                updateControls(nearestIndex);
            });
        };
        const onResize = ()=>{
            if (!window.matchMedia("(max-width: 700px)").matches) return;
            productSlider.scrollTo({
                left: getCenteredScrollLeft(productCards[activeProduct])
            });
        };
        const onScrollEnd = ()=>showProduct(activeProduct);
        productPrev.addEventListener("click", onPrev);
        productNext.addEventListener("click", onNext);
        productSlider.addEventListener("scroll", onScroll, {
            passive: true
        });
        productSlider.addEventListener("scrollend", onScrollEnd);
        window.addEventListener("resize", onResize);
        updateControls(0);
        requestAnimationFrame(()=>{
            if (window.matchMedia("(max-width: 700px)").matches) showProduct(0);
        });
        return ()=>{
            cleanups.forEach((cleanup)=>cleanup());
            productPrev.removeEventListener("click", onPrev);
            productNext.removeEventListener("click", onNext);
            productSlider.removeEventListener("scroll", onScroll);
            productSlider.removeEventListener("scrollend", onScrollEnd);
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(scrollFrame);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
}),
"[project]/src/components/home/ContactSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ContactSection() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const forms = Array.from(document.querySelectorAll("form"));
        const cleanups = forms.map((form)=>{
            const onSubmit = (event)=>{
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
                    window.setTimeout(()=>{
                        button.innerHTML = original;
                        button.disabled = false;
                    }, 2000);
                    return;
                }
                button.innerHTML = "Request received";
                button.disabled = true;
                window.setTimeout(()=>{
                    button.innerHTML = original;
                    button.disabled = false;
                    form.reset();
                }, 2500);
            };
            form.addEventListener("submit", onSubmit);
            return ()=>form.removeEventListener("submit", onSubmit);
        });
        return ()=>cleanups.forEach((cleanup)=>cleanup());
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_080naqo._.js.map