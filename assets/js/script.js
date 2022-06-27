!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document) return t(e);
        throw new Error("jQuery requires a window with a document");
    } : t(e);
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    function m(e) {
        return "function" == typeof e && "number" != typeof e.nodeType;
    }
    function x(e) {
        return null != e && e === e.window;
    }
    var t = [], r = Object.getPrototypeOf, s = t.slice, g = t.flat ? function(e) {
        return t.flat.call(e);
    } : function(e) {
        return t.concat.apply([], e);
    }, u = t.push, i = t.indexOf, n = {}, o = n.toString, v = n.hasOwnProperty, a = v.toString, l = a.call(Object), y = {}, E = C.document, c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
    }
    var f = "3.5.0", S = function(e, t) {
        return new S.fn.init(e, t);
    };
    function p(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this);
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            e = S.merge(this.constructor(), e);
            return e.prevObject = this, e;
        },
        each: function(e) {
            return S.each(this, e);
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2;
            }));
        },
        eq: function(e) {
            var t = this.length, e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [ this[e] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, r, i, n, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), 
        s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], 
        "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], 
        n = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, 
        a[t] = S.extend(l, n, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== o.call(e) || (e = r(e)) && ("function" != typeof (e = v.call(e, "constructor") && e.constructor) || a.call(e) !== l));
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0;
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n);
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++); else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (p(Object(e)) ? S.merge(t, "string" == typeof e ? [ e ] : e) : u.call(t, e)), 
            t;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
            return r;
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a);
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), 
    S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
    });
    function h(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (i && S(e).is(n)) break;
            r.push(e);
        }
        return r;
    }
    function T(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var f = function(n) {
        function ne(e, t) {
            return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320));
        }
        function ie(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }
        function oe() {
            T();
        }
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + +new Date(), p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), D = function(e, t) {
            return e === t && (l = !0), 0;
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; );
                    e.length = n - 1;
                }
            };
        }
        function se(t, e, n, r) {
            var i, o, s, u, l, a, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = e.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n;
                    } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), 
                    n;
                } else {
                    if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                    if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), 
                    n;
                }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (a = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        for ((f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), 
                        o = (l = h(t)).length; o--; ) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        a = l.join(",");
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(a)), n;
                    } catch (e) {
                        N(t, !0);
                    } finally {
                        s === S && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r);
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
            };
        }
        function le(e) {
            return e[S] = !0, e;
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) b.attrHandle[n[r]] = t;
        }
        function pe(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    for (var n, r = a([], e.length, o), i = r.length; i--; ) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function ye(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
            var t = e.namespaceURI, e = (e.ownerDocument || e).documentElement;
            return !Y.test(t || e && e.nodeName || "HTML");
        }, T = se.setDocument = function(e) {
            var e = e ? e.ownerDocument || e : p;
            return e != C && 9 === e.nodeType && e.documentElement && (a = (C = e).documentElement, 
            E = !i(C), p != C && (e = C.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", oe, !1) : e.attachEvent && e.attachEvent("onunload", oe)), 
            d.scope = ce(function(e) {
                return a.appendChild(e).appendChild(C.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
            }), d.attributes = ce(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), d.getElementsByTagName = ce(function(e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
            }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
            }), d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(te, ne);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) return (t = t.getElementById(e)) ? [ t ] : [];
            }) : (b.filter.ID = function(e) {
                var n = e.replace(te, ne);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === n;
                };
            }, b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++]; ) if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                return r;
            }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e);
            }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                var t;
                a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), 
                e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), 
                e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), 
                e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), 
                e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
            }), ce(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), 
                e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), 
                a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), v.push(",.*:");
            })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
            }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), 
            e = K.test(a.compareDocumentPosition), y = e || K.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, D = e ? function(e, t) {
                return e === t ? (l = !0, 0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
                var n;
            } : function(e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                if (i === o) return pe(e, t);
                for (n = e; n = n.parentNode; ) a.unshift(n);
                for (n = t; n = n.parentNode; ) s.unshift(n);
                for (;a[r] === s[r]; ) r++;
                return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
            }), C;
        }, se.matches = function(e, t) {
            return se(e, null, null, t);
        }, se.matchesSelector = function(e, t) {
            if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {
                N(t, !0);
            }
            return 0 < se(t, C, null, [ e ]).length;
        }, se.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e), y(e, t);
        }, se.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = b.attrHandle[t.toLowerCase()], n = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== n ? n : d.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
        }, se.escape = function(e) {
            return (e + "").replace(re, ie);
        }, se.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, se.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), 
            l) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return u = null, e;
        }, o = se.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r++]; ) n += o(t);
            return n;
        }, (b = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), 
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = m[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        e = se.attr(e, n);
                        return null == e ? "!=" === r : !r || (e += "", "=" === r ? e === i : "!=" === r ? e !== i : "^=" === r ? i && 0 === e.indexOf(i) : "*=" === r ? i && -1 < e.indexOf(i) : "$=" === r ? i && e.slice(-i.length) === i : "~=" === r ? -1 < (" " + e.replace(B, " ") + " ").indexOf(i) : "|=" === r && (e === i || e.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(h, e, t, g, v) {
                    var y = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === v ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var r, i, o, a, s, u, l = y != m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                for (;l; ) {
                                    for (a = e; a = a[l]; ) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling";
                                }
                                return !0;
                            }
                            if (u = [ m ? c.firstChild : c.lastChild ], m && p) {
                                for (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], 
                                a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop(); ) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [ k, s, d ];
                                    break;
                                }
                            } else if (!1 === (d = p ? s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1] : d)) for (;(a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [ k, d ]), 
                            a !== e)); );
                            return (d -= v) === g || d % g == 0 && 0 <= d / g;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return a[S] ? a(o) : 1 < a.length ? (t = [ e, e, "", o ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                        for (var n, r = a(e, o), i = r.length; i--; ) e[n = P(e, r[i])] = !(t[n] = r[i]);
                    }) : function(e) {
                        return a(e, 0, t);
                    }) : a;
                }
            },
            pseudos: {
                not: le(function(e) {
                    var r = [], i = [], s = f(e.replace($, "$1"));
                    return s[S] ? le(function(e, t, n, r) {
                        for (var i, o = s(e, null, r, []), a = e.length; a--; ) (i = o[a]) && (e[a] = !(t[a] = i));
                    }) : function(e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
                    };
                }),
                has: le(function(t) {
                    return function(e) {
                        return 0 < se(t, e).length;
                    };
                }),
                contains: le(function(t) {
                    return t = t.replace(te, ne), function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t);
                    };
                }),
                lang: le(function(n) {
                    return V.test(n || "") || se.error("unsupported lang: " + n), 
                    n = n.replace(te, ne).toLowerCase(), function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a;
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return J.test(e.nodeName);
                },
                input: function(e) {
                    return Q.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: ve(function() {
                    return [ 0 ];
                }),
                last: ve(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: ve(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: ve(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ve(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
                    return e;
                }),
                gt: ve(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = b.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }(e);
        for (e in {
            submit: !0,
            reset: !0
        }) b.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function be(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function(e, t, n) {
                for (;e = e[u]; ) if (1 === e.nodeType || f) return s(e, t, n);
                return !1;
            } : function(e, t, n) {
                var r, o, a = [ k, p ];
                if (n) {
                    for (;e = e[u]; ) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                } else for (;e = e[u]; ) if (1 === e.nodeType || f) if (o = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), 
                l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = o[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                    if ((o[c] = a)[2] = s(e, t, n)) return !0;
                }
                return !1;
            };
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
                return !0;
            } : i[0];
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) !(o = e[s]) || n && !n(o, r, i) || (a.push(o), 
            l && t.push(s));
            return a;
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i;
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e);
            }, a, !0), c = [ function(e, t, n) {
                e = !o && (n || t !== w) || ((i = t).nodeType ? u : l)(e, t, n);
                return i = null, e;
            } ]; s < r; s++) if (t = b.relative[e[s].type]) c = [ be(we(c), t) ]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                    for (n = ++s; n < r && !b.relative[e[n].type]; n++);
                    return function Ce(d, h, g, v, y, e) {
                        return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), 
                        le(function(e, t, n, r) {
                            var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                                return n;
                            }(h || "*", n.nodeType ? [ n ] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                            if (g && g(f, p, n, r), v) for (i = Te(p, u), v(i, [], n, r), 
                            o = i.length; o--; ) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                            if (e) {
                                if (y || d) {
                                    if (y) {
                                        for (i = [], o = p.length; o--; ) (a = p[o]) && i.push(f[o] = a);
                                        y(null, p = [], i, r);
                                    }
                                    for (o = p.length; o--; ) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
                                }
                            } else p = Te(p === t ? p.splice(l, p.length) : p), 
                            y ? y(null, t, p, r) : H.apply(t, p);
                        });
                    }(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
                }
                c.push(t);
            }
            return we(c);
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            for (a = e, s = [], u = b.preFilter; a; ) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), 
                s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), 
                i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
            if (!a) {
                for (n = (t = t || h(e)).length; n--; ) ((a = Ee(t[n]))[S] ? i : o).push(a);
                (a = A(e, (m = 0 < (y = i).length, x = 0 < (v = o).length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            for (a = 0, t || o.ownerDocument == C || (T(o), n = !E); s = v[a++]; ) if (s(o, t || C, n)) {
                                r.push(o);
                                break;
                            }
                            i && (k = h);
                        }
                        m && ((o = !s && o) && u--, e && c.push(o));
                    }
                    if (u += l, m && l !== u) {
                        for (a = 0; s = y[a++]; ) s(c, f, t, n);
                        if (e) {
                            if (0 < u) for (;l--; ) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f);
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                    }
                    return i && (k = h, w = p), c;
                }, m ? le(r) : r))).selector = e;
            }
            return a;
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (i = G.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], 
                !b.relative[s = a.type]); ) if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && xe(o)) break;
                    return H.apply(n, r), n;
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), 
            n;
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, 
        T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), 
            "" === e.firstChild.getAttribute("value");
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ce(function(e) {
            return null == e.getAttribute("disabled");
        }) || fe(R, function(e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
        }), se;
    }(C), k = (S.find = f, S.expr = f.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = f.uniqueSort, 
    S.text = f.getText, S.isXMLDoc = f.isXML, S.contains = f.contains, S.escapeSelector = f.escape, 
    S.expr.match.needsContext);
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r;
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r;
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r;
        }) : S.filter(n, e, r);
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [ r ] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0));
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, L = ((S.fn.init = function(e, t, n) {
        if (!e) return this;
        if (n = n || j, "string" != typeof e) return e.nodeType ? (this[0] = e, 
        this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
        if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : q.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (r[1]) {
            if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), 
            N.test(r[1]) && S.isPlainObject(t)) for (var r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
        }
        return (n = E.getElementById(r[2])) && (this[0] = n, this.length = 1), this;
    }).prototype = S.fn, j = S(E), /^(?:parents|prev(?:Until|All))/), H = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function O(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
            if (!k.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), S.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null;
        },
        parents: function(e) {
            return h(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n);
        },
        next: function(e) {
            return O(e, "nextSibling");
        },
        prev: function(e) {
            return O(e, "previousSibling");
        },
        nextAll: function(e) {
            return h(e, "nextSibling");
        },
        prevAll: function(e) {
            return h(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n);
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return T(e.firstChild);
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), 
            S.merge([], e.childNodes));
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = S.filter(t, n)), 
            1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), 
            this.pushStack(n);
        };
    });
    var P = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [ e ].slice(r));
        } catch (e) {
            n.apply(void 0, [ e ]);
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0;
        }), n) : S.extend({}, r);
        function c() {
            for (a = a || r.once, o = i = !0; u.length; l = -1) for (t = u.shift(); ++l < s.length; ) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, 
            t = !1);
            r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
        }
        var i, t, o, a, s = [], u = [], l = -1, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                    S.each(e, function(e, t) {
                        m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
                    });
                }(arguments), t && !i && c()), this;
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    for (var n; -1 < (n = S.inArray(t, s, n)); ) s.splice(n, 1), 
                    n <= l && l--;
                }), this;
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, s) : 0 < s.length;
            },
            empty: function() {
                return s = s && [], this;
            },
            disable: function() {
                return a = u = [], s = t = "", this;
            },
            disabled: function() {
                return !s;
            },
            lock: function() {
                return a = u = [], t || i || (s = t = ""), this;
            },
            locked: function() {
                return !!a;
            },
            fireWith: function(e, t) {
                return a || (t = [ e, (t = t || []).slice ? t.slice() : t ], u.push(t), 
                i || c()), this;
            },
            fire: function() {
                return f.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!o;
            }
        };
        return f;
    }, S.extend({
        Deferred: function(e) {
            var o = [ [ "notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2 ], [ "resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", a = {
                state: function() {
                    return i;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return a.then(null, e);
                },
                pipe: function() {
                    var i = arguments;
                    return S.Deferred(function(r) {
                        S.each(o, function(e, t) {
                            var n = m(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [ e ] : arguments);
                            });
                        }), i = null;
                    }).promise();
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(i < u)) {
                                    if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, 
                                    m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, 
                                    t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, 
                                    r = [ e ]), (s || o.resolveWith)(n, r));
                                }
                            }
                            var n = this, r = arguments, t = s ? e : function() {
                                try {
                                    e();
                                } catch (e) {
                                    S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), 
                                    u <= i + 1 && (a !== M && (n = void 0, r = [ e ]), 
                                    o.rejectWith(n, r));
                                }
                            };
                            i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), 
                            C.setTimeout(t));
                        };
                    }
                    return S.Deferred(function(e) {
                        o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), 
                        o[2][3].add(l(0, e, m(n) ? n : M));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? S.extend(e, a) : a;
                }
            }, s = {};
            return S.each(o, function(e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r;
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), 
                n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), 
                    this;
                }, s[t[0] + "With"] = n.fireWith;
            }), a.promise(s), e && e.call(s, s), s;
        },
        when: function(e) {
            function a(t) {
                return function(e) {
                    r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, 
                    --n || o.resolveWith(r, i);
                };
            }
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = S.Deferred();
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            for (;t--; ) I(i[t], a(t), o.reject);
            return o.promise();
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/, F = (S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e;
        });
    }, S.Deferred());
    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), 
        S.ready();
    }
    S.fn.ready = function(e) {
        return F.then(e).catch(function(e) {
            S.readyException(e);
        }), this;
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [ S ]);
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), 
    C.addEventListener("load", B));
    function $(e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, 
        m(r) || (a = !0), t = l ? a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
            return l.call(S(e), n);
        }) : t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }
    var _ = /^-ms-/, z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(_, "ms-").replace(z, U);
    }
    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function G() {
        this.expando = S.expando + G.uid++;
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = Object.create(null), V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [ t ] : t.match(P) || []).length;
                    for (;n--; ) delete r[t[n]];
                }
                void 0 !== t && !S.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !S.isEmptyObject(e);
        }
    };
    var Y = new G(), Q = new G(), J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;
    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), 
        "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
            } catch (e) {}
            Q.set(e, t, n);
        } else n = void 0;
        return n;
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e);
        },
        data: function(e, t, n) {
            return Q.access(e, t, n);
        },
        removeData: function(e, t) {
            Q.remove(e, t);
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function(e, t) {
            Y.remove(e, t);
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                Q.set(this, n);
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) || void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e);
                });
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                for (t = a.length; t--; ) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), 
                Z(o, r, i[r]));
                Y.set(o, "hasDataAttrs", !0);
            }
            return i;
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e);
            });
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return r = Y.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t), r = n.length, i = n.shift(), o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, function() {
                S.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            function s() {
                --r || i.resolveWith(o, [ o ]);
            }
            var n, r = 1, i = S.Deferred(), o = this, a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, 
            n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    function ae(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
    }
    var f = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, te = new RegExp("^(?:([+-])=|)(" + f + ")([a-z%]*)$", "i"), ne = [ "Top", "Right", "Bottom", "Left" ], re = E.documentElement, ie = function(e) {
        return S.contains(e.ownerDocument, e);
    }, oe = {
        composed: !0
    };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
    });
    function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return S.css(e, t, "");
        }, u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            for (l = l || c[3], c = +(u /= 2) || 1; a--; ) S.style(e, t, c + l), 
            (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            S.style(e, t, (c *= 2) + l), n = n || [];
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], 
        r && (r.unit = l, r.start = c, r.end = i)), i;
    }
    var ue = {};
    function le(e, t) {
        for (var n, r, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, 
        t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), 
        "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = r.ownerDocument, 
        s = r.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), 
        u = S.css(o, "display"), o.parentNode.removeChild(o), ue[s] = u = "none" === u ? "block" : u)))) : "none" !== n && (l[c] = "none", 
        Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e;
    }
    S.fn.extend({
        show: function() {
            return le(this, !0);
        },
        hide: function() {
            return le(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide();
            });
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ce = E.createDocumentFragment().appendChild(E.createElement("div")), ge = ((fe = E.createElement("input")).setAttribute("type", "radio"), 
    fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), 
    y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", 
    y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", 
    y.option = !!ce.lastChild, {
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    });
    function ve(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && A(e, t) ? S.merge([ e ], n) : n;
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [ o ] : o); else if (me.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || [ "", "" ])[1].toLowerCase(), 
            s = ge[s] || ge._default, a.innerHTML = s[1] + S.htmlPrefilter(o) + s[2], 
            c = s[0]; c--; ) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++]; ) if (r && -1 < S.inArray(o, r)) i && i.push(o); else if (l = ie(o), 
        a = ve(f.appendChild(o), "script"), l && ye(a), n) for (c = 0; o = a[c++]; ) he.test(o.type || "") && n.push(o);
        return f;
    }
    var be = /^key/, we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Te = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0;
    }
    function Ee() {
        return !1;
    }
    function Se(e, t) {
        return e === function() {
            try {
                return E.activeElement;
            } catch (e) {}
        }() == ("focus" === t);
    }
    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
        r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee; else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n);
        });
    }
    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation(); else if (r = s.call(arguments), 
                    Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, 
                    r !== n) return e.stopImmediatePropagation(), e.preventDefault(), 
                    n.value;
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation());
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, u, l, f, p, d, s, g, v = Y.get(t);
            if (V(t)) for (n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), 
            n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), 
            (a = v.handle) || (a = v.handle = function(e) {
                return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
            }), l = (e = (e || "").match(P) || [ "" ]).length; l--; ) d = g = (s = Te.exec(e[l]) || [])[1], 
            s = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, 
            d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, 
            g = S.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && S.expr.match.needsContext.test(i),
                namespace: s.join(".")
            }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, s, a) || t.addEventListener && t.addEventListener(d, a)), 
            f.add && (f.add.call(t, g), g.handler.guid || (g.handler.guid = n.guid)), 
            i ? p.splice(p.delegateCount++, 0, g) : p.push(g), S.event.global[d] = !0);
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                for (l = (t = (t || "").match(P) || [ "" ]).length; l--; ) if (d = g = (s = Te.exec(t[l]) || [])[1], 
                h = (s[2] || "").split(".").sort(), d) {
                    for (f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    a = o = p.length; o--; ) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                    c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), 
                    delete u[d]);
                } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t, n, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), e = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = S.event.handlers.call(this, u, e), t = 0; (i = a[t++]) && !u.isPropagationStopped(); ) for (u.currentTarget = i.elem, 
                n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped(); ) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, 
                u.data = o.data, void 0 !== (o = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = o) && (u.preventDefault(), 
                u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [ l ]).length), 
                a[i] && o.push(r);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return pe.test(e.type) && e.click && A(e, "input") && Ae(e, "click", Ce), 
                    !1;
                },
                trigger: function(e) {
                    e = this || e;
                    return pe.test(e.type) && e.click && A(e, "input") && Ae(e, "click"), 
                    !0;
                },
                _default: function(e) {
                    e = e.target;
                    return pe.test(e.type) && e.click && A(e, "input") && Y.get(e, "click") || A(e, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), 
        this[S.expando] = !0;
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Ae(this, e, Se), !1;
            },
            trigger: function() {
                return Ae(this, e), !0;
            },
            delegateType: t
        };
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, 
                t = r.handler.apply(this, arguments), e.type = i), t;
            }
        };
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return ke(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return ke(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, 
            t = void 0), !1 === n && (n = Ee), this.each(function() {
                S.event.remove(this, e, n, t);
            });
            for (i in e) this.off(i, t, e[i]);
            return this;
        }
    });
    var Ne = /<script|<style|<link/i, De = /checked\s*(?:[^=]|=\s*.checked.)/i, je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
    }
    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), 
        e;
    }
    function Oe(e, t) {
        var n, r, i, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), 
            s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (e = Q.access(e), e = S.extend({}, e), Q.set(t, e));
        }
    }
    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), 
        t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, 
            c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), 
            i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], 
            he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                nonce: u.nonce || u.getAttribute("nonce")
            }, l) : b(u.textContent.replace(je, ""), u, l));
        }
        return n;
    }
    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), 
        r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e;
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), 
            r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]); else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), 
            c;
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
                if (t = n[Y.expando]) {
                    if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                    n[Y.expando] = void 0;
                }
                n[Q.expando] && (n[Q.expando] = void 0);
            }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Re(this, e, !0);
        },
        remove: function(e) {
            return Re(this, e);
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return Pe(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
            });
        },
        prepend: function() {
            return Pe(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = qe(this, e)).insertBefore(e, t.firstChild);
            });
        },
        before: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t);
            });
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (;n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return Pe(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
            }, n);
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), 
            S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n);
        };
    });
    function Ie(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : C).getComputedStyle(e);
    }
    function We(e, t, n) {
        var i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in n = n.call(e), t) e.style[i] = o[i];
        return n;
    }
    var Me = new RegExp("^(" + f + ")(?!px)[a-z%]+$", "i"), Fe = new RegExp(ne.join("|"), "i");
    function Be(e, t, n) {
        var o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), 
        !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (e = s.width, t = s.minWidth, 
        o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = e, 
        s.minWidth = t, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function $e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            }
        };
    }
    !function() {
        function e() {
            var e;
            l && (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", 
            l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", 
            re.appendChild(u).appendChild(l), e = C.getComputedStyle(l), n = "1%" !== e.top, 
            s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), 
            r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), 
            re.removeChild(u), l = null);
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
        y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r;
            },
            pixelBoxStyles: function() {
                return e(), o;
            },
            pixelPosition: function() {
                return e(), n;
            },
            reliableMarginLeft: function() {
                return e(), s;
            },
            scrollboxSize: function() {
                return e(), i;
            },
            reliableTrDimensions: function() {
                var e, t, n;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), 
                n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", 
                t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), 
                n = C.getComputedStyle(t), a = 3 < parseInt(n.height), re.removeChild(e)), 
                a;
            }
        }));
    }();
    var _e = [ "Webkit", "Moz", "ms" ], ze = E.createElement("div").style, Ue = {};
    function Xe(e) {
        return S.cssProps[e] || Ue[e] || (e in ze ? e : Ue[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = _e.length; n--; ) if ((e = _e[n] + t) in ze) return e;
        }(e) || e);
    }
    var Ve = /^(none|table(?!-c[ea]).+)/, Ge = /^--/, Ye = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (;a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), 
        r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), 
        "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), 
        u;
    }
    function Ze(e, t, n) {
        var r = Ie(e), i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r), o = i, a = Be(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), 
        (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
    }
    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i);
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) return "" === (t = Be(e, "opacity")) ? "1" : t;
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t), u = Ge.test(t), l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), 
                o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), 
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), 
                a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
            }
        },
        css: function(e, t, n, r) {
            var i, s = X(t);
            return Ge.test(t) || (t = Xe(s)), "normal" === (i = void 0 === (i = (s = S.cssHooks[t] || S.cssHooks[s]) && "get" in s ? s.get(e, !0, n) : i) ? Be(e, t, r) : i) && t in Qe && (i = Qe[t]), 
            "" === n || n ? (s = parseFloat(i), !0 === n || isFinite(s) ? s || 0 : i) : i;
        }
    }), S.each([ "height", "width" ], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function() {
                    return Ze(e, u, n);
                });
            },
            set: function(e, t, n) {
                var i = Ie(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), n = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (n -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), 
                n && (a = te.exec(t)) && "px" !== (a[3] || "px") && (e.style[u] = t, 
                t = S.css(e, u)), Je(0, t, n);
            }
        };
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n;
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je);
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
            }, e, t, 1 < arguments.length);
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, 
            this.options = t, this.start = this.now = this.cur(), this.end = r, 
            this.unit = o || (S.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return (e && e.get ? e : et.propHooks._default).get(this);
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            (n && n.set ? n : et.propHooks._default).set(this), this;
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = S.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, S.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, fe, ot = /^(?:toggle|show|hide)$/, at = /queueHooks$/;
    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), 
        S.fx.tick());
    }
    function ut() {
        return C.setTimeout(function() {
            tt = void 0;
        }), tt = Date.now();
    }
    function lt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function ft(o, e, t) {
        var n, a, r = 0, i = ft.prefilters.length, s = S.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (a) return !1;
            for (var e = tt || ut(), e = Math.max(0, l.startTime + l.duration - e), n = 1 - (e / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [ l, n, e ]), n < 1 && i ? e : (i || s.notifyWith(o, [ l, 1, 0 ]), 
            s.resolveWith(o, [ l ]), !1);
        }, l = s.promise({
            elem: o,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: tt || ut(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                t = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(t), t;
            },
            stop: function(e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [ l, 1, 0 ]), s.resolveWith(o, [ l, e ])) : s.rejectWith(o, [ l, e ]), 
                this;
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], 
            o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), 
            delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i;
        }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), 
        n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), 
        S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l;
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = m(e) ? (t = e, [ "*" ]) : e.match(P)).length; r < i; r++) n = e[r], 
            ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var r, i, o, a, s, u, l, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, 
            s = a.empty.fire, a.empty.fire = function() {
                a.unqueued || s();
            }), a.unqueued++, p.always(function() {
                p.always(function() {
                    a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
                });
            })), t) if (i = t[r], ot.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r]) continue;
                    g = !0;
                }
                d[r] = v && v[r] || S.style(e, r);
            }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (f = S.css(e, "display")) && (l ? f = l : (le([ e ], !0), 
            l = e.style.display || l, f = S.css(e, "display"), le([ e ]))), ("inline" === f || "inline-block" === f && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                h.display = l;
            }), null == l && (f = h.display, l = "none" === f ? "" : f)), h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                display: l
            }), o && (v.hidden = !g), g && le([ e ], !0), p.done(function() {
                for (r in g || le([ e ]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]);
            })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, 
            u.start = 0));
        } ],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), 
        null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, 
        r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }, r;
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(t, e, n, r) {
            function a() {
                var e = ft(this, S.extend({}, t), o);
                (i || Y.get(this, "finish")) && e.stop(!0);
            }
            var i = S.isEmptyObject(t), o = S.speed(e, n, r);
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(i, e, o) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(o);
            }
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), 
            this.each(function() {
                var e = !0, t = null != i && i + "queueHooks", n = S.timers, r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), 
                e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i);
            });
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), 
                e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), 
                i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), S.each([ "toggle", "show", "hide" ], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
        };
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n);
        };
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0, n = S.timers;
        for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0;
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start();
    }, S.fx.interval = 13, S.fx.start = function() {
        nt || (nt = !0, st());
    }, S.fx.stop = function() {
        nt = null;
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, this.queue(e = e || "fx", function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n);
            };
        });
    }, fe = E.createElement("input"), ce = E.createElement("select").appendChild(E.createElement("option")), 
    fe.type = "checkbox", y.checkOn = "" !== fe.value, y.optSelected = ce.selected, 
    (fe = E.createElement("input")).value = "t", fe.type = "radio", y.radioValue = "t" === fe.value;
    var pt, dt = S.expr.attrHandle, ht = (S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e);
            });
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), 
            void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = S.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    var n;
                    if (!y.radioValue && "radio" === t && A(e, "input")) return n = e.value, 
                    e.setAttribute("type", t), n && (e.value = n), t;
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(P);
            if (i && 1 === e.nodeType) for (;n = i[r++]; ) e.removeAttribute(n);
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, 
            dt[o] = i), r;
        };
    }), /^(?:input|select|textarea|button)$/i), gt = /^(?:a|area)$/i;
    function vt(e) {
        return (e.match(P) || []).join(" ");
    }
    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e];
            });
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, 
            i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        }
    }), S.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        S.propFix[this.toLowerCase()] = this;
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, o, a, i, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, yt(this)));
            });
            if ((e = mt(t)).length) for (;n = this[u++]; ) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                for (a = 0; o = e[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (i = vt(r)) && n.setAttribute("class", i);
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, r, o, a, i, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, yt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length) for (;n = this[u++]; ) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                for (a = 0; o = e[a++]; ) for (;-1 < r.indexOf(" " + o + " "); ) r = r.replace(" " + o + " ", " ");
                i !== (i = vt(r)) && n.setAttribute("class", i);
            }
            return this;
        },
        toggleClass: function(i, t) {
            var o = typeof i, a = "string" == o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t);
            }) : this.each(function() {
                var e, t, n, r;
                if (a) for (t = 0, n = S(this), r = mt(i); e = r[t++]; ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else void 0 !== i && "boolean" != o || ((e = yt(this)) && Y.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", !e && !1 !== i && Y.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            for (var n, r = 0, t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1;
        }
    });
    function wt(e) {
        e.stopPropagation();
    }
    var xt = /\r/g, bt = (S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? n.call(this, e, S(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = S.map(e, function(e) {
                    return null == e ? "" : e + "";
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, e, "value") || (this.value = e));
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e));
                }
            },
            select: {
                get: function(e) {
                    for (var n, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length, r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                        if (n = S(n).val(), a) return n;
                        s.push(n);
                    }
                    return s;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = S.makeArray(t), a = i.length; a--; ) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), S.each([ "radio", "checkbox" ], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    }), y.focusin = "onfocusin" in C, /^(?:focusinfocus|focusoutblur)$/), Tt = (S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, a, s, u, l, c, f, p = [ n || E ], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [], o = f = a = n = n || E;
            if (3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), 
            h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, 
            e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : S.makeArray(t, [ e ]), 
            c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), 
                    a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
                }
                for (i = 0; (o = p[i++]) && !e.isPropagationStopped(); ) f = o, 
                e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), 
                (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), 
                !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), 
                S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), 
                n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), 
                S.event.triggered = void 0, a && (n[u] = a)), e.result;
            }
        },
        simulate: function(e, t, n) {
            n = S.extend(new S.Event(), n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(n, null, t);
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0);
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            S.event.simulate(r, e.target, S.event.fix(e));
        }
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this, t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
            }
        };
    }), C.location), Ct = {
        guid: Date.now()
    }, Et = /\?/, St = (S.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), 
        t;
    }, /\[\]$/), kt = /\r?\n/g, At = /^(?:submit|button|image|reset|file)$/i, Nt = /^(?:input|select|textarea|keygen)/i;
    S.param = function(e, t) {
        function i(e, t) {
            t = m(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t);
        }
        var n, r = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) !function Dt(n, e, r, i) {
            if (Array.isArray(e)) S.each(e, function(e, t) {
                r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
            }); else if (r || "object" !== w(e)) i(n, e); else for (var t in e) Dt(n + "[" + t + "]", e[t], r, i);
        }(n, e[n], t, i);
        return r.join("&");
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                };
            }).get();
        }
    });
    var jt = /%20/g, qt = /#.*$/, Lt = /([?&])_=[^&]*/, Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ot = /^(?:GET|HEAD)$/, Pt = /^\/\//, Rt = {}, Mt = {}, It = "*/".concat("*"), Wt = E.createElement("a");
    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(P) || [];
            if (m(t)) for (;n = i[r++]; ) "+" === n[0] ? (n = n.slice(1) || "*", 
            (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Bt(t, i, o, a) {
        var s = {}, u = t === Mt;
        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                t = t(i, o, a);
                return "string" != typeof t || u || s[t] ? u ? !(r = t) : void 0 : (i.dataTypes.unshift(t), 
                l(t), !1);
            }), r;
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*");
    }
    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && S.extend(!0, e, r), e;
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0);
            var c, f, p, n, d, h, g, i, r, v = S.ajaxSetup({}, t = t || {}), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) for (n = {}; t = Ht.exec(p); ) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "];
                    }
                    return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function() {
                    return h ? p : null;
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, 
                    a[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return null == h && (v.mimeType = e), this;
                },
                statusCode: function(e) {
                    if (e) if (h) T.always(e[T.status]); else for (var t in e) w[t] = [ w[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    e = e || u;
                    return c && c.abort(e), l(0, e), this;
                }
            };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), 
            v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [ "" ], 
            null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
                } catch (e) {
                    v.crossDomain = !0;
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), 
            Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), 
            v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), 
            v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (r = v.url.slice(f.length), 
            v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, 
            delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), r = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + r), 
            v.url = f + r), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), 
            S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), 
            T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), 
            v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), 
            c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [ T, v ]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout");
                }, v.timeout));
                try {
                    h = !1, c.send(a, l);
                } catch (e) {
                    if (h) throw e;
                    l(-1, e);
                }
            } else l(-1, "No Transport");
            function l(e, t, n, r) {
                var o, a, s, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, 
                r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), 
                    void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r) for (i in s) if (s[i] && s[i].test(r)) {
                        u.unshift(i);
                        break;
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break;
                            }
                            a = a || i;
                        }
                        o = o || a;
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o];
                }(v, T, n)), !r && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function() {}), 
                s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), 
                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
                    u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break;
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + u + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(v, s, T, r), r ? (v.ifModified && ((n = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = n), 
                (n = T.getResponseHeader("etag")) && (S.etag[f] = n)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, 
                o = s.data, r = !(a = s.error))) : (a = l, !e && l || (l = "error", 
                e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", 
                r ? x.resolveWith(y, [ o, l, T ]) : x.rejectWith(y, [ T, l, a ]), 
                T.statusCode(w), w = void 0, g && m.trigger(r ? "ajaxSuccess" : "ajaxError", [ T, v, r ? o : a ]), 
                b.fireWith(y, [ T, l ]), g && (m.trigger("ajaxComplete", [ T, v ]), 
                --S.active || S.event.trigger("ajaxStop")));
            }
            return T;
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script");
        }
    }), S.each([ "get", "post" ], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e));
        };
    }), S.ajaxPrefilter(function(e) {
        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n);
            }
        });
    }, S.fn.extend({
        wrapAll: function(e) {
            return this[0] && (m(e) && (e = e.call(this[0])), e = S(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = S(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes);
            }), this;
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e);
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest();
        } catch (e) {}
    };
    var _t = {
        0: 200,
        1223: 204
    }, zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), 
                i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), 
                e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, 
                        "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()));
                    };
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a();
                    });
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        };
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e;
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
                }), E.head.appendChild(r[0]);
            },
            abort: function() {
                i && i();
            }
        };
    });
    var Xt = [], Vt = /(=)\?(?=&|$)|\?\?/, Gt = (S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e;
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), 
        e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0];
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments;
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, 
            Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
        }), "script";
    }), y.createHTMLDocument = ((f = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 
    2 === f.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), 
        t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, 
        t.head.appendChild(r)) : t = E), r = !n && [], (n = N.exec(e)) ? [ t.createElement(n[1]) ] : (n = xe([ e ], t, r), 
        r && r.length && S(r).remove(), S.merge([], n.childNodes)));
        var r;
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem;
        }).length;
    }, S.offset = {
        setOffset: function(e, t, n) {
            var o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), 
            u = S.css(e, "left"), l = ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (l = c.position()).top, 
            l.left) : (a = parseFloat(o) || 0, parseFloat(u) || 0), null != (t = m(t) ? t.call(e, n, S.extend({}, s)) : t).top && (f.top = t.top - s.top + a), 
            null != t.left && (f.left = t.left - s.left + l), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), 
            "number" == typeof f.left && (f.left += "px"), c.css(f));
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e);
            });
            var e, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), 
            r = r.ownerDocument.defaultView, {
                top: e.top + r.pageYOffset,
                left: e.left + r.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect(); else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); ) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), 
                    i.left += S.css(e, "borderLeftWidth", !0));
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === S.css(e, "position"); ) e = e.offsetParent;
                return e || re;
            });
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
            }, t, e, arguments.length);
        };
    }), S.each([ "top", "left" ], function(e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
        });
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, 
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
                }, s, n ? e : void 0, n);
            };
        });
    }), S.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g), Yt = (S.proxy = function(e, t) {
        var r, n;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), 
        (n = function() {
            return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid = e.guid || S.guid++, n;
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0);
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, 
    S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "");
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S;
    }), C.jQuery), Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), 
        S;
    }, void 0 === e && (C.jQuery = C.$ = S), S;
});

"use strict";

var e, t;

!function(s) {
    s.fn.simplebox = function(e) {
        function t() {
            o.fadeOut(i), n.removeClass("slb--opened"), r = !1, a.css("overflow", "auto");
        }
        var e = s.extend({
            fadeSpeed: 400,
            darkMode: !1
        }, e), a = s("body"), o = s('<div id="overlay"></div>'), c = s('<div class="cross"></div>'), n = s("<img class='slb'>"), i = e.fadeSpeed, r = !1;
        e.darkMode ? (o.css("background-color", "black"), c.addClass("cross--dark"), 
        s(".slb").addClass("slb--invert"), n.addClass("slb--invert")) : (o.css("background-color", "white"), 
        c.addClass("cross--light"));
        return o.click(t), c.click(t), s(document).keyup(function(s) {
            27 == s.keyCode && r && t();
        }), this.each(function() {
            o.append(c), s(this).click(function() {
                r = !0, a.css("overflow", "hidden");
                var d = s(this).attr("src");
                n.attr("src", d), n.css("max-height", "80%"), n.addClass("pop-in"), 
                n.removeClass("pop-out"), n.addClass("center"), n.addClass("slb--opened"), 
                o.css("pointer-events", "initial"), o.append(n), a.append(o), o.fadeIn(i);
            });
        });
    };
}(jQuery), function() {
    function e(e) {
        if (null === e || "object" != typeof e) return e;
        var n, t = e.constructor();
        for (n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
    }
    function t(e) {
        var n = new t.Index();
        return n.pipeline.add(t.trimmer, t.stopWordFilter, t.stemmer), e && e.call(n, n), 
        n;
    }
    t.version = "0.9.5", ((lunr = t).utils = {}).warn = function(e) {
        return function(t) {
            e.console && console.warn && console.warn(t);
        };
    }(this), t.utils.toString = function(e) {
        return null == e ? "" : e.toString();
    }, (t.EventEmitter = function() {
        this.events = {};
    }).prototype.addListener = function() {
        var e = Array.prototype.slice.call(arguments), t = e.pop();
        if ("function" != typeof t) throw new TypeError("last argument must be a function");
        e.forEach(function(e) {
            this.hasHandler(e) || (this.events[e] = []), this.events[e].push(t);
        }, this);
    }, t.EventEmitter.prototype.removeListener = function(e, t) {
        this.hasHandler(e) && -1 !== (t = this.events[e].indexOf(t)) && (this.events[e].splice(t, 1), 
        0 == this.events[e].length && delete this.events[e]);
    }, t.EventEmitter.prototype.emit = function(e) {
        var t;
        this.hasHandler(e) && (t = Array.prototype.slice.call(arguments, 1), this.events[e].forEach(function(e) {
            e.apply(void 0, t);
        }, this));
    }, t.EventEmitter.prototype.hasHandler = function(e) {
        return e in this.events;
    }, (t.tokenizer = function(e) {
        return arguments.length && null != e ? Array.isArray(e) ? (n = (n = e.filter(function(e) {
            return null != e;
        })).map(function(e) {
            return t.utils.toString(e).toLowerCase();
        }), i = [], n.forEach(function(e) {
            e = e.split(t.tokenizer.seperator);
            i = i.concat(e);
        }, this), i) : e.toString().trim().toLowerCase().split(t.tokenizer.seperator) : [];
        var n, i;
    }).defaultSeperator = /[\s\-]+/, t.tokenizer.seperator = t.tokenizer.defaultSeperator, 
    t.tokenizer.setSeperator = function(e) {
        null != e && "object" == typeof e && (t.tokenizer.seperator = e);
    }, t.tokenizer.resetSeperator = function() {
        t.tokenizer.seperator = t.tokenizer.defaultSeperator;
    }, t.tokenizer.getSeperator = function() {
        return t.tokenizer.seperator;
    }, (t.Pipeline = function() {
        this._queue = [];
    }).registeredFunctions = {}, t.Pipeline.registerFunction = function(e, n) {
        n in t.Pipeline.registeredFunctions && t.utils.warn("Overwriting existing registered function: " + n), 
        e.label = n, t.Pipeline.registeredFunctions[n] = e;
    }, t.Pipeline.getRegisteredFunction = function(e) {
        return e in t.Pipeline.registeredFunctions != 1 ? null : t.Pipeline.registeredFunctions[e];
    }, t.Pipeline.warnIfFunctionNotRegistered = function(e) {
        e.label && e.label in this.registeredFunctions || t.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n", e);
    }, t.Pipeline.load = function(e) {
        var n = new t.Pipeline();
        return e.forEach(function(e) {
            var i = t.Pipeline.getRegisteredFunction(e);
            if (!i) throw new Error("Cannot load un-registered function: " + e);
            n.add(i);
        }), n;
    }, t.Pipeline.prototype.add = function() {
        Array.prototype.slice.call(arguments).forEach(function(e) {
            t.Pipeline.warnIfFunctionNotRegistered(e), this._queue.push(e);
        }, this);
    }, t.Pipeline.prototype.after = function(e, n) {
        t.Pipeline.warnIfFunctionNotRegistered(n);
        e = this._queue.indexOf(e);
        if (-1 === e) throw new Error("Cannot find existingFn");
        this._queue.splice(e + 1, 0, n);
    }, t.Pipeline.prototype.before = function(e, n) {
        t.Pipeline.warnIfFunctionNotRegistered(n);
        e = this._queue.indexOf(e);
        if (-1 === e) throw new Error("Cannot find existingFn");
        this._queue.splice(e, 0, n);
    }, t.Pipeline.prototype.remove = function(e) {
        e = this._queue.indexOf(e);
        -1 !== e && this._queue.splice(e, 1);
    }, t.Pipeline.prototype.run = function(e) {
        for (var t = [], n = e.length, i = this._queue.length, o = 0; o < n; o++) {
            for (var r = e[o], s = 0; s < i && null != (r = this._queue[s](r, o, e)); s++);
            null != r && t.push(r);
        }
        return t;
    }, t.Pipeline.prototype.reset = function() {
        this._queue = [];
    }, t.Pipeline.prototype.get = function() {
        return this._queue;
    }, t.Pipeline.prototype.toJSON = function() {
        return this._queue.map(function(e) {
            return t.Pipeline.warnIfFunctionNotRegistered(e), e.label;
        });
    }, (t.Index = function() {
        this._fields = [], this._ref = "id", this.pipeline = new t.Pipeline(), this.documentStore = new t.DocumentStore(), 
        this.index = {}, this.eventEmitter = new t.EventEmitter(), this._idfCache = {}, 
        this.on("add", "remove", "update", function() {
            this._idfCache = {};
        }.bind(this));
    }).prototype.on = function() {
        var e = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, e);
    }, t.Index.prototype.off = function(e, t) {
        return this.eventEmitter.removeListener(e, t);
    }, t.Index.load = function(e) {
        e.version !== t.version && t.utils.warn("version mismatch: current " + t.version + " importing " + e.version);
        var i, n = new this();
        for (i in n._fields = e.fields, n._ref = e.ref, n.documentStore = t.DocumentStore.load(e.documentStore), 
        n.pipeline = t.Pipeline.load(e.pipeline), n.index = {}, e.index) n.index[i] = t.InvertedIndex.load(e.index[i]);
        return n;
    }, t.Index.prototype.addField = function(e) {
        return this._fields.push(e), this.index[e] = new t.InvertedIndex(), this;
    }, t.Index.prototype.setRef = function(e) {
        return this._ref = e, this;
    }, t.Index.prototype.saveDocument = function(e) {
        return this.documentStore = new t.DocumentStore(e), this;
    }, t.Index.prototype.addDoc = function(e, n) {
        var i;
        e && (n = void 0 === n || n, i = e[this._ref], this.documentStore.addDoc(i, e), 
        this._fields.forEach(function(n) {
            var s, o = this.pipeline.run(t.tokenizer(e[n])), r = (this.documentStore.addFieldLength(i, n, o.length), 
            {});
            for (s in o.forEach(function(e) {
                e in r ? r[e] += 1 : r[e] = 1;
            }, this), r) {
                var u = r[s], u = Math.sqrt(u);
                this.index[n].addToken(s, {
                    ref: i,
                    tf: u
                });
            }
        }, this), n && this.eventEmitter.emit("add", e, this));
    }, t.Index.prototype.removeDocByRef = function(e) {
        e && !1 !== this.documentStore.isDocStored() && this.documentStore.hasDoc(e) && (e = this.documentStore.getDoc(e), 
        this.removeDoc(e, !1));
    }, t.Index.prototype.removeDoc = function(e, n) {
        var i;
        e && (n = void 0 === n || n, i = e[this._ref], this.documentStore.hasDoc(i) && (this.documentStore.removeDoc(i), 
        this._fields.forEach(function(n) {
            this.pipeline.run(t.tokenizer(e[n])).forEach(function(e) {
                this.index[n].removeToken(e, i);
            }, this);
        }, this), n && this.eventEmitter.emit("remove", e, this)));
    }, t.Index.prototype.updateDoc = function(e, t) {
        t = void 0 === t || t;
        this.removeDocByRef(e[this._ref], !1), this.addDoc(e, !1), t && this.eventEmitter.emit("update", e, this);
    }, t.Index.prototype.idf = function(e, t) {
        var n = "@" + t + "/" + e;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, n)) return this._idfCache[n];
        t = this.index[t].getDocFreq(e), e = 1 + Math.log(this.documentStore.length / (t + 1));
        return this._idfCache[n] = e;
    }, t.Index.prototype.getFields = function() {
        return this._fields.slice();
    }, t.Index.prototype.search = function(e, n) {
        if (!e) return [];
        e = "string" == typeof e ? {
            any: e
        } : JSON.parse(JSON.stringify(e));
        var i = null;
        null != n && (i = JSON.stringify(n));
        for (var o = new t.Configuration(i, this.getFields()).get(), r = {}, s = Object.keys(e), u = 0; u < s.length; u++) {
            var a = s[u];
            r[a] = this.pipeline.run(t.tokenizer(e[a]));
        }
        var c, l = {};
        for (c in o) {
            var d = r[c] || r.any;
            if (d) {
                var f = this.fieldSearch(d, c, o), h = o[c].boost;
                for (p in f) f[p] = f[p] * h;
                for (p in f) p in l ? l[p] += f[p] : l[p] = f[p];
            }
        }
        var v, p, g = [];
        for (p in l) v = {
            ref: p,
            score: l[p]
        }, this.documentStore.hasDoc(p) && (v.doc = this.documentStore.getDoc(p)), 
        g.push(v);
        return g.sort(function(e, t) {
            return t.score - e.score;
        }), g;
    }, t.Index.prototype.fieldSearch = function(e, t, n) {
        var i = n[t].bool, o = n[t].expand, n = n[t].boost, s = null, u = {};
        return 0 !== n ? (e.forEach(function(e) {
            var n = [ e ], r = (1 == o && (n = this.index[t].expandToken(e)), {});
            n.forEach(function(n) {
                var o = this.index[t].getDocs(n), a = this.idf(n, t);
                if (s && "AND" == i) {
                    var c, l = {};
                    for (c in s) c in o && (l[c] = o[c]);
                    o = l;
                }
                for (c in n == e && this.fieldSearchStats(u, n, o), o) {
                    var d = this.index[t].getTermFrequency(n, c), f = this.documentStore.getFieldLength(c, t), h = 1, p = 1, d = d * a * (h = 0 != f ? 1 / Math.sqrt(f) : h) * (p = n != e ? .15 * (1 - (n.length - e.length) / n.length) : p);
                    c in r ? r[c] += d : r[c] = d;
                }
            }, this), s = this.mergeScores(s, r, i);
        }, this), s = this.coordNorm(s, u, e.length)) : void 0;
    }, t.Index.prototype.mergeScores = function(e, t, n) {
        if (!e) return t;
        if ("AND" == n) {
            var i = {};
            for (o in t) o in e && (i[o] = e[o] + t[o]);
            return i;
        }
        for (var o in t) o in e ? e[o] += t[o] : e[o] = t[o];
        return e;
    }, t.Index.prototype.fieldSearchStats = function(e, t, n) {
        for (var i in n) i in e ? e[i].push(t) : e[i] = [ t ];
    }, t.Index.prototype.coordNorm = function(e, t, n) {
        for (var i in e) {
            var o;
            i in t && (o = t[i].length, e[i] = e[i] * o / n);
        }
        return e;
    }, t.Index.prototype.toJSON = function() {
        var e = {};
        return this._fields.forEach(function(t) {
            e[t] = this.index[t].toJSON();
        }, this), {
            version: t.version,
            fields: this._fields,
            ref: this._ref,
            documentStore: this.documentStore.toJSON(),
            index: e,
            pipeline: this.pipeline.toJSON()
        };
    }, t.Index.prototype.use = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        t.unshift(this), e.apply(this, t);
    }, (t.DocumentStore = function(e) {
        this._save = null == e || e, this.docs = {}, this.docInfo = {}, this.length = 0;
    }).load = function(e) {
        var t = new this();
        return t.length = e.length, t.docs = e.docs, t.docInfo = e.docInfo, t._save = e.save, 
        t;
    }, t.DocumentStore.prototype.isDocStored = function() {
        return this._save;
    }, t.DocumentStore.prototype.addDoc = function(t, n) {
        this.hasDoc(t) || this.length++, this.docs[t] = !0 === this._save ? e(n) : null;
    }, t.DocumentStore.prototype.getDoc = function(e) {
        return !1 === this.hasDoc(e) ? null : this.docs[e];
    }, t.DocumentStore.prototype.hasDoc = function(e) {
        return e in this.docs;
    }, t.DocumentStore.prototype.removeDoc = function(e) {
        this.hasDoc(e) && (delete this.docs[e], delete this.docInfo[e], this.length--);
    }, t.DocumentStore.prototype.addFieldLength = function(e, t, n) {
        null != e && 0 != this.hasDoc(e) && (this.docInfo[e] || (this.docInfo[e] = {}), 
        this.docInfo[e][t] = n);
    }, t.DocumentStore.prototype.updateFieldLength = function(e, t, n) {
        null != e && 0 != this.hasDoc(e) && this.addFieldLength(e, t, n);
    }, t.DocumentStore.prototype.getFieldLength = function(e, t) {
        return null != e && e in this.docs && t in this.docInfo[e] ? this.docInfo[e][t] : 0;
    }, t.DocumentStore.prototype.toJSON = function() {
        return {
            docs: this.docs,
            docInfo: this.docInfo,
            length: this.length,
            save: this._save
        };
    }, t.stemmer = function() {
        var e = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log"
        }, t = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: ""
        }, i = "[aeiouy]", o = "[^aeiou][^aeiouy]*", c = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), d = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"), f = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"), h = new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"), p = /^(.+?)(ss|i)es$/, v = /^(.+?)([^s])s$/, g = /^(.+?)eed$/, m = /^(.+?)(ed|ing)$/, y = /.$/, S = /(at|bl|iz)$/, x = new RegExp("([^aeiouylsz])\\1$"), w = new RegExp("^" + o + i + "[^aeiouwxy]$"), I = /^(.+?[^aeiou])y$/, b = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, E = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, D = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, F = /^(.+?)(s|t)(ion)$/, _ = /^(.+?)e$/, P = /ll$/, k = new RegExp("^" + o + i + "[^aeiouwxy]$");
        return function(n) {
            var o, r, a, l, s, i, u, z;
            return n.length < 3 ? n : ("y" == (r = n.substr(0, 1)) && (n = r.toUpperCase() + n.substr(1)), 
            u = v, (s = p).test(n) ? n = n.replace(s, "$1$2") : u.test(n) && (n = n.replace(u, "$1$2")), 
            u = m, (s = g).test(n) ? (z = s.exec(n), (s = c).test(z[1]) && (n = n.replace(s = y, ""))) : u.test(n) && (i = (z = u.exec(n))[1], 
            (u = h).test(i) && (n = i, a = x, l = w, (u = S).test(n) ? n += "e" : a.test(n) ? n = n.replace(s = y, "") : l.test(n) && (n += "e"))), 
            (s = I).test(n) && (n = (i = (z = s.exec(n))[1]) + "i"), (s = b).test(n) && (i = (z = s.exec(n))[1], 
            o = z[2], (s = c).test(i) && (n = i + e[o])), (s = E).test(n) && (i = (z = s.exec(n))[1], 
            o = z[2], (s = c).test(i) && (n = i + t[o])), u = F, (s = D).test(n) ? (i = (z = s.exec(n))[1], 
            (s = d).test(i) && (n = i)) : u.test(n) && (i = (z = u.exec(n))[1] + z[2], 
            (u = d).test(i) && (n = i)), (s = _).test(n) && (i = (z = s.exec(n))[1], 
            u = f, a = k, ((s = d).test(i) || u.test(i) && !a.test(i)) && (n = i)), 
            u = d, (s = P).test(n) && u.test(n) && (n = n.replace(s = y, "")), "y" == r ? r.toLowerCase() + n.substr(1) : n);
        };
    }(), t.Pipeline.registerFunction(t.stemmer, "stemmer"), t.stopWordFilter = function(e) {
        return e && !0 !== t.stopWordFilter.stopWords[e] ? e : void 0;
    }, t.clearStopWords = function() {
        t.stopWordFilter.stopWords = {};
    }, t.addStopWords = function(e) {
        null != e && !1 !== Array.isArray(e) && e.forEach(function(e) {
            t.stopWordFilter.stopWords[e] = !0;
        }, this);
    }, t.resetStopWords = function() {
        t.stopWordFilter.stopWords = t.defaultStopWords;
    }, t.stopWordFilter.stopWords = t.defaultStopWords = {
        "": !0,
        a: !0,
        able: !0,
        about: !0,
        across: !0,
        after: !0,
        all: !0,
        almost: !0,
        also: !0,
        am: !0,
        among: !0,
        an: !0,
        and: !0,
        any: !0,
        are: !0,
        as: !0,
        at: !0,
        be: !0,
        because: !0,
        been: !0,
        but: !0,
        by: !0,
        can: !0,
        cannot: !0,
        could: !0,
        dear: !0,
        did: !0,
        do: !0,
        does: !0,
        either: !0,
        else: !0,
        ever: !0,
        every: !0,
        for: !0,
        from: !0,
        get: !0,
        got: !0,
        had: !0,
        has: !0,
        have: !0,
        he: !0,
        her: !0,
        hers: !0,
        him: !0,
        his: !0,
        how: !0,
        however: !0,
        i: !0,
        if: !0,
        in: !0,
        into: !0,
        is: !0,
        it: !0,
        its: !0,
        just: !0,
        least: !0,
        let: !0,
        like: !0,
        likely: !0,
        may: !0,
        me: !0,
        might: !0,
        most: !0,
        must: !0,
        my: !0,
        neither: !0,
        no: !0,
        nor: !0,
        not: !0,
        of: !0,
        off: !0,
        often: !0,
        on: !0,
        only: !0,
        or: !0,
        other: !0,
        our: !0,
        own: !0,
        rather: !0,
        said: !0,
        say: !0,
        says: !0,
        she: !0,
        should: !0,
        since: !0,
        so: !0,
        some: !0,
        than: !0,
        that: !0,
        the: !0,
        their: !0,
        them: !0,
        then: !0,
        there: !0,
        these: !0,
        they: !0,
        this: !0,
        tis: !0,
        to: !0,
        too: !0,
        twas: !0,
        us: !0,
        wants: !0,
        was: !0,
        we: !0,
        were: !0,
        what: !0,
        when: !0,
        where: !0,
        which: !0,
        while: !0,
        who: !0,
        whom: !0,
        why: !0,
        will: !0,
        with: !0,
        would: !0,
        yet: !0,
        you: !0,
        your: !0
    }, t.Pipeline.registerFunction(t.stopWordFilter, "stopWordFilter"), t.Pipeline.registerFunction(t.trimmer = function(e) {
        if (null == e) throw new Error("token should not be undefined");
        return e.replace(/^\W+/, "").replace(/\W+$/, "");
    }, "trimmer"), (t.InvertedIndex = function() {
        this.root = {
            docs: {},
            df: 0
        };
    }).load = function(e) {
        var t = new this();
        return t.root = e.root, t;
    }, t.InvertedIndex.prototype.addToken = function(e, t, n) {
        for (var n = n || this.root, i = 0; i <= e.length - 1; ) {
            var o = e[i];
            o in n || (n[o] = {
                docs: {},
                df: 0
            }), i += 1, n = n[o];
        }
        var r = t.ref;
        n.docs[r] ? n.docs[r] = {
            tf: t.tf
        } : (n.docs[r] = {
            tf: t.tf
        }, n.df += 1);
    }, t.InvertedIndex.prototype.hasToken = function(e) {
        if (!e) return !1;
        for (var t = this.root, n = 0; n < e.length; n++) {
            if (!t[e[n]]) return !1;
            t = t[e[n]];
        }
        return !0;
    }, t.InvertedIndex.prototype.getNode = function(e) {
        if (!e) return null;
        for (var t = this.root, n = 0; n < e.length; n++) {
            if (!t[e[n]]) return null;
            t = t[e[n]];
        }
        return t;
    }, t.InvertedIndex.prototype.getDocs = function(e) {
        e = this.getNode(e);
        return null == e ? {} : e.docs;
    }, t.InvertedIndex.prototype.getTermFrequency = function(e, t) {
        e = this.getNode(e);
        return null != e && t in e.docs ? e.docs[t].tf : 0;
    }, t.InvertedIndex.prototype.getDocFreq = function(e) {
        e = this.getNode(e);
        return null == e ? 0 : e.df;
    }, t.InvertedIndex.prototype.removeToken = function(e, t) {
        e && null != (e = this.getNode(e)) && t in e.docs && (delete e.docs[t], 
        --e.df);
    }, t.InvertedIndex.prototype.expandToken = function(e, t, n) {
        if (null == e || "" == e) return [];
        var i, t = t || [];
        if (null == n && null == (n = this.getNode(e))) return t;
        for (i in 0 < n.df && t.push(e), n) "docs" !== i && "df" !== i && this.expandToken(e + i, t, n[i]);
        return t;
    }, t.InvertedIndex.prototype.toJSON = function() {
        return {
            root: this.root
        };
    }, (t.Configuration = function(e, n) {
        var i, e = e || "";
        if (null == n) throw new Error("fields should not be null");
        this.config = {};
        try {
            i = JSON.parse(e), this.buildUserConfig(i, n);
        } catch (o) {
            t.utils.warn("user configuration parse failed, will use default configuration"), 
            this.buildDefaultConfig(n);
        }
    }).prototype.buildDefaultConfig = function(e) {
        this.reset(), e.forEach(function(e) {
            this.config[e] = {
                boost: 1,
                bool: "OR",
                expand: !1
            };
        }, this);
    }, t.Configuration.prototype.buildUserConfig = function(e, n) {
        var s, u, i = "OR", o = !1;
        if (this.reset(), "bool" in e && (i = e.bool || i), "expand" in e && (o = e.expand || o), 
        "fields" in e) for (var r in e.fields) -1 < n.indexOf(r) ? (u = o, null != (s = e.fields[r]).expand && (u = s.expand), 
        this.config[r] = {
            boost: s.boost || 0 === s.boost ? s.boost : 1,
            bool: s.bool || i,
            expand: u
        }) : t.utils.warn("field name in user configuration not found in index instance fields"); else this.addAllFields2UserConfig(i, o, n);
    }, t.Configuration.prototype.addAllFields2UserConfig = function(e, t, n) {
        n.forEach(function(n) {
            this.config[n] = {
                boost: 1,
                bool: e,
                expand: t
            };
        }, this);
    }, t.Configuration.prototype.get = function() {
        return this.config;
    }, t.Configuration.prototype.reset = function() {
        this.config = {};
    }, lunr.SortedSet = function() {
        this.length = 0, this.elements = [];
    }, lunr.SortedSet.load = function(e) {
        var t = new this();
        return t.elements = e, t.length = e.length, t;
    }, lunr.SortedSet.prototype.add = function() {
        for (var t, e = 0; e < arguments.length; e++) ~this.indexOf(t = arguments[e]) || this.elements.splice(this.locationFor(t), 0, t);
        this.length = this.elements.length;
    }, lunr.SortedSet.prototype.toArray = function() {
        return this.elements.slice();
    }, lunr.SortedSet.prototype.map = function(e, t) {
        return this.elements.map(e, t);
    }, lunr.SortedSet.prototype.forEach = function(e, t) {
        return this.elements.forEach(e, t);
    }, lunr.SortedSet.prototype.indexOf = function(e) {
        for (var t = 0, n = this.elements.length, i = n - t, o = t + Math.floor(i / 2), r = this.elements[o]; 1 < i; ) {
            if (r === e) return o;
            i = (n = e < r ? o : n) - (t = r < e ? o : t), o = t + Math.floor(i / 2), 
            r = this.elements[o];
        }
        return r === e ? o : -1;
    }, lunr.SortedSet.prototype.locationFor = function(e) {
        for (var t = 0, n = this.elements.length, i = n - t, o = t + Math.floor(i / 2), r = this.elements[o]; 1 < i; ) i = (n = e < r ? o : n) - (t = r < e ? o : t), 
        o = t + Math.floor(i / 2), r = this.elements[o];
        return e < r ? o : r < e ? o + 1 : void 0;
    }, lunr.SortedSet.prototype.intersect = function(e) {
        for (var t = new lunr.SortedSet(), n = 0, i = 0, o = this.length, r = e.length, s = this.elements, u = e.elements; !(o - 1 < n || r - 1 < i); ) s[n] !== u[i] ? s[n] < u[i] ? n++ : s[n] > u[i] && i++ : (t.add(s[n]), 
        n++, i++);
        return t;
    }, lunr.SortedSet.prototype.clone = function() {
        var e = new lunr.SortedSet();
        return e.elements = this.toArray(), e.length = e.elements.length, e;
    }, lunr.SortedSet.prototype.union = function(e) {
        for (var t, e = this.length >= e.length ? (t = this, e) : (t = e, this), i = t.clone(), o = 0, r = e.toArray(); o < r.length; o++) i.add(r[o]);
        return i;
    }, lunr.SortedSet.prototype.toJSON = function() {
        return this.toArray();
    }, function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.elasticlunr = t();
    }(this, function() {
        return t;
    });
}(), function($) {
    $.fn.fitVids = function(options) {
        var head, div, settings = {
            customSelector: null,
            ignore: null
        };
        return document.getElementById("fit-vids-style") || (head = document.head || document.getElementsByTagName("head")[0], 
        (div = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', 
        head.appendChild(div.childNodes[1])), options && $.extend(settings, options), 
        this.each(function() {
            var selectors = [ "iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed" ], ignoreList = (settings.customSelector && selectors.push(settings.customSelector), 
            ".fitvidsignore"), selectors = (settings.ignore && (ignoreList = ignoreList + ", " + settings.ignore), 
            $(this).find(selectors.join(",")));
            (selectors = (selectors = selectors.not("object object")).not(ignoreList)).each(function() {
                var aspectRatio, videoID, $this = $(this);
                0 < $this.parents(ignoreList).length || "embed" === this.tagName.toLowerCase() && $this.parent("object").length || $this.parent(".fluid-width-video-wrapper").length || ($this.css("height") || $this.css("width") || !isNaN($this.attr("height")) && !isNaN($this.attr("width")) || ($this.attr("height", 9), 
                $this.attr("width", 16)), aspectRatio = ("object" === this.tagName.toLowerCase() || $this.attr("height") && !isNaN(parseInt($this.attr("height"), 10)) ? parseInt($this.attr("height"), 10) : $this.height()) / (isNaN(parseInt($this.attr("width"), 10)) ? $this.width() : parseInt($this.attr("width"), 10)), 
                $this.attr("id") || (videoID = "fitvid" + Math.floor(999999 * Math.random()), 
                $this.attr("id", videoID)), $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * aspectRatio + "%"), 
                $this.removeAttr("height").removeAttr("width"));
            });
        });
    };
}(window.jQuery || window.Zepto), function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("pangu", [], t) : "object" == typeof exports ? exports.pangu = t() : e.pangu = t();
}(window, function() {
    return e = [ function(e, t, n) {
        var a;
        void 0 !== (t = "function" == typeof (a = function() {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e);
            }
            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(e, a.key, a);
                }
            }
            function i(e, n) {
                return !n || "object" !== t(n) && "function" != typeof n ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : n;
            }
            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            var c = function(e) {
                function t() {
                    var e;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, t), (e = i(this, o(t).call(this))).blockTags = /^(div|p|h1|h2|h3|h4|h5|h6)$/i, 
                    e.ignoredTags = /^(script|code|pre|textarea)$/i, e.presentationalTags = /^(b|code|del|em|i|s|strong)$/i, 
                    e.spaceLikeTags = /^(br|hr|i|img|pangu)$/i, e.spaceSensitiveTags = /^(a|del|pre|s|strike|u)$/i, 
                    e.isAutoSpacingPageExecuted = !1, e;
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && r(e, t);
                }(t, e), a(t.prototype, [ {
                    key: "isContentEditable",
                    value: function(e) {
                        return e.isContentEditable || e.getAttribute && "true" === e.getAttribute("g_editable");
                    }
                }, {
                    key: "isSpecificTag",
                    value: function(e, t) {
                        return e && e.nodeName && 0 <= e.nodeName.search(t);
                    }
                }, {
                    key: "isInsideSpecificTag",
                    value: function(e, t) {
                        var a = e;
                        if (2 < arguments.length && void 0 !== arguments[2] && arguments[2] && this.isSpecificTag(a, t)) return !0;
                        for (;a.parentNode; ) if (a = a.parentNode, this.isSpecificTag(a, t)) return !0;
                        return !1;
                    }
                }, {
                    key: "canIgnoreNode",
                    value: function(e) {
                        var t = e;
                        if (t && (this.isSpecificTag(t, this.ignoredTags) || this.isContentEditable(t))) return !0;
                        for (;t.parentNode; ) if ((t = t.parentNode) && (this.isSpecificTag(t, this.ignoredTags) || this.isContentEditable(t))) return !0;
                        return !1;
                    }
                }, {
                    key: "isFirstTextChild",
                    value: function(e, t) {
                        for (var n = e.childNodes, a = 0; a < n.length; a++) {
                            var i = n[a];
                            if (i.nodeType !== Node.COMMENT_NODE && i.textContent) return i === t;
                        }
                        return !1;
                    }
                }, {
                    key: "isLastTextChild",
                    value: function(e, t) {
                        for (var n = e.childNodes, a = n.length - 1; -1 < a; a--) {
                            var i = n[a];
                            if (i.nodeType !== Node.COMMENT_NODE && i.textContent) return i === t;
                        }
                        return !1;
                    }
                }, {
                    key: "spacingNodeByXPath",
                    value: function(e, t) {
                        if (t instanceof Node && !(t instanceof DocumentFragment)) for (var a, i = document.evaluate(e, t, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), o = i.snapshotLength - 1; -1 < o; --o) {
                            var s, c, n = i.snapshotItem(o);
                            if (this.isSpecificTag(n.parentNode, this.presentationalTags) && !this.isInsideSpecificTag(n.parentNode, this.ignoredTags) && ((r = n.parentNode).previousSibling && (c = r.previousSibling).nodeType === Node.TEXT_NODE && (s = c.data.substr(-1) + n.data.toString().charAt(0)) !== this.spacing(s) && (c.data = "".concat(c.data, " ")), 
                            r.nextSibling && (s = r.nextSibling).nodeType === Node.TEXT_NODE && (c = n.data.substr(-1) + s.data.toString().charAt(0)) !== this.spacing(c) && (s.data = " ".concat(s.data))), 
                            this.canIgnoreNode(n)) a = n; else {
                                var r = this.spacing(n.data);
                                if (n.data !== r && (n.data = r), a) {
                                    if (n.nextSibling && 0 <= n.nextSibling.nodeName.search(this.spaceLikeTags)) {
                                        a = n;
                                        continue;
                                    }
                                    var d = n.data.toString().substr(-1) + a.data.toString().substr(0, 1);
                                    if (this.spacing(d) !== d) {
                                        for (var y = a; y.parentNode && -1 === y.nodeName.search(this.spaceSensitiveTags) && this.isFirstTextChild(y.parentNode, y); ) y = y.parentNode;
                                        for (var v = n; v.parentNode && -1 === v.nodeName.search(this.spaceSensitiveTags) && this.isLastTextChild(v.parentNode, v); ) v = v.parentNode;
                                        if (v.nextSibling && 0 <= v.nextSibling.nodeName.search(this.spaceLikeTags)) {
                                            a = n;
                                            continue;
                                        }
                                        -1 === v.nodeName.search(this.blockTags) && (-1 === y.nodeName.search(this.spaceSensitiveTags) ? -1 === y.nodeName.search(this.ignoredTags) && -1 === y.nodeName.search(this.blockTags) && (a.previousSibling ? -1 === a.previousSibling.nodeName.search(this.spaceLikeTags) && (a.data = " ".concat(a.data)) : this.canIgnoreNode(a) || (a.data = " ".concat(a.data))) : -1 === v.nodeName.search(this.spaceSensitiveTags) ? n.data = "".concat(n.data, " ") : ((d = document.createElement("pangu")).innerHTML = " ", 
                                        y.previousSibling && -1 !== y.previousSibling.nodeName.search(this.spaceLikeTags) || y.parentNode.insertBefore(d, y), 
                                        d.previousElementSibling || d.parentNode && d.parentNode.removeChild(d)));
                                    }
                                }
                                a = n;
                            }
                        }
                    }
                }, {
                    key: "spacingNode",
                    value: function(e) {
                        var t = ".//*/text()[normalize-space(.)]";
                        e.children && 0 === e.children.length && (t = ".//text()[normalize-space(.)]"), 
                        this.spacingNodeByXPath(t, e);
                    }
                }, {
                    key: "spacingElementById",
                    value: function(e) {
                        e = 'id("'.concat(e, '")//text()');
                        this.spacingNodeByXPath(e, document);
                    }
                }, {
                    key: "spacingElementByClassName",
                    value: function(e) {
                        e = '//*[contains(concat(" ", normalize-space(@class), " "), "'.concat(e, '")]//text()');
                        this.spacingNodeByXPath(e, document);
                    }
                }, {
                    key: "spacingElementByTagName",
                    value: function(e) {
                        e = "//".concat(e, "//text()");
                        this.spacingNodeByXPath(e, document);
                    }
                }, {
                    key: "spacingPageTitle",
                    value: function() {
                        this.spacingNodeByXPath("/html/head/title/text()", document);
                    }
                }, {
                    key: "spacingPageBody",
                    value: function() {
                        var e = "/html/body//*/text()[normalize-space(.)]";
                        [ "script", "style", "textarea" ].forEach(function(t) {
                            e = "".concat(e, '[translate(name(..),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz")!="').concat(t, '"]');
                        }), this.spacingNodeByXPath(e, document);
                    }
                }, {
                    key: "spacingPage",
                    value: function() {
                        this.spacingPageTitle(), this.spacingPageBody();
                    }
                }, {
                    key: "autoSpacingPage",
                    value: function() {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1e3, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 500, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 2e3;
                        if (document.body instanceof Node && !this.isAutoSpacingPageExecuted) {
                            this.isAutoSpacingPageExecuted = !0;
                            var a = this, i = function(e) {
                                var t = this, n = arguments, a = !1;
                                return function() {
                                    a || (a = !0, e.apply(t, n));
                                };
                            }(function() {
                                a.spacingPage();
                            }), o = document.getElementsByTagName("video");
                            if (0 === o.length) setTimeout(function() {
                                i();
                            }, e); else for (var r = 0; r < o.length; r++) {
                                var c = o[r];
                                if (4 === c.readyState) {
                                    setTimeout(function() {
                                        i();
                                    }, 3e3);
                                    break;
                                }
                                c.addEventListener("loadeddata", function() {
                                    setTimeout(function() {
                                        i();
                                    }, 4e3);
                                });
                            }
                            var s = [], u = function(e, t, n) {
                                var a = this, i = arguments, o = null, r = null;
                                return function() {
                                    var c = a, s = i, u = +new Date();
                                    clearTimeout(o), n <= u - (r = r || u) ? (e.apply(c, s), 
                                    r = u) : o = setTimeout(function() {
                                        e.apply(c, s);
                                    }, t);
                                };
                            }(function() {
                                for (;s.length; ) {
                                    var e = s.shift();
                                    e && a.spacingNode(e);
                                }
                            }, t, {
                                maxWait: n
                            });
                            new MutationObserver(function(e, t) {
                                e.forEach(function(e) {
                                    switch (e.type) {
                                      case "childList":
                                        e.addedNodes.forEach(function(e) {
                                            e.nodeType === Node.ELEMENT_NODE ? s.push(e) : e.nodeType === Node.TEXT_NODE && s.push(e.parentNode);
                                        });
                                        break;

                                      case "characterData":
                                        var t = e.target;
                                        t.nodeType === Node.TEXT_NODE && s.push(t.parentNode);
                                    }
                                }), u();
                            }).observe(document.body, {
                                characterData: !0,
                                childList: !0,
                                subtree: !0
                            });
                        }
                    }
                } ]), t;
            }(n(1).Pangu), s = new c();
            e.exports = s, e.exports.default = s, e.exports.Pangu = c;
        }) ? a.apply(t, []) : a) && (e.exports = t);
    }, function(e, t, n) {
        var a;
        void 0 !== (t = "function" == typeof (a = function() {
            function t(e) {
                return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e);
            }
            function n(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                    Object.defineProperty(e, a.key, a);
                }
            }
            var a = "⺀-⻿⼀-⿟぀-ゟ゠-ヺー-ヿ㄀-ㄯ㈀-㋿㐀-䶿一-鿿豈-﫿", i = new RegExp("[".concat(a, "]")), o = new RegExp("([".concat(a, "])[ ]*([\\:]+|\\.)[ ]*([").concat(a, "])"), "g"), r = new RegExp("([".concat(a, "])[ ]*([~\\!;,\\?]+)[ ]*"), "g"), c = new RegExp("([\\.]{2,}|…)([".concat(a, "])"), "g"), s = new RegExp("([".concat(a, "])\\:([A-Z0-9\\(\\)])"), "g"), u = new RegExp("([".concat(a, '])([`"״])'), "g"), p = new RegExp('([`"״])(['.concat(a, "])"), "g"), l = /([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g, f = new RegExp("([".concat(a, "])('[^s])"), "g"), g = new RegExp("(')([".concat(a, "])"), "g"), d = new RegExp("([A-Za-z0-9".concat(a, "])( )('s)"), "g"), h = new RegExp("([".concat(a, "])(#)([").concat(a, "]+)(#)([").concat(a, "])"), "g"), y = new RegExp("([".concat(a, "])(#([^ ]))"), "g"), v = new RegExp("(([^ ])#)([".concat(a, "])"), "g"), b = new RegExp("([".concat(a, "])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])"), "g"), m = new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([".concat(a, "])"), "g"), $ = /([\/]) ([a-z\-_\.\/]+)/g, E = /([\/\.])([A-Za-z\-_\.\/]+) ([\/])/g, S = new RegExp("([".concat(a, "])([\\(\\[\\{<>“])"), "g"), T = new RegExp("([\\)\\]\\}<>”])([".concat(a, "])"), "g"), N = /([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/, w = new RegExp("([A-Za-z0-9".concat(a, "])[ ]*([“])([A-Za-z0-9").concat(a, "\\-_ ]+)([”])"), "g"), k = new RegExp("([“])([A-Za-z0-9".concat(a, "\\-_ ]+)([”])[ ]*([A-Za-z0-9").concat(a, "])"), "g"), P = /([A-Za-z0-9])([\(\[\{])/g, O = /([\)\]\}])([A-Za-z0-9])/g, _ = new RegExp("([".concat(a, "])([A-Za-zͰ-Ͽ0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/¡-ÿ⅐-↏✀—➿])"), "g"), x = new RegExp("([A-Za-zͰ-Ͽ0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?¡-ÿ⅐-↏✀—➿])([".concat(a, "])"), "g"), R = /(%)([A-Za-z])/g, A = /([ ]*)([\u00b7\u2022\u2027])([ ]*)/g, a = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this.version = "4.0.7";
                }
                return n(e.prototype, [ {
                    key: "convertToFullwidth",
                    value: function(e) {
                        return e.replace(/~/g, "～").replace(/!/g, "！").replace(/;/g, "；").replace(/:/g, "：").replace(/,/g, "，").replace(/\./g, "。").replace(/\?/g, "？");
                    }
                }, {
                    key: "spacing",
                    value: function(e) {
                        if ("string" != typeof e) return console.warn("spacing(text) only accepts string but got ".concat(t(e))), 
                        e;
                        if (e.length <= 1 || !i.test(e)) return e;
                        var n = this;
                        return e.replace(o, function(e, t, a, i) {
                            a = n.convertToFullwidth(a);
                            return "".concat(t).concat(a).concat(i);
                        }).replace(r, function(e, t, a) {
                            a = n.convertToFullwidth(a);
                            return "".concat(t).concat(a);
                        }).replace(c, "$1 $2").replace(s, "$1：$2").replace(u, "$1 $2").replace(p, "$1 $2").replace(l, "$1$2$3").replace(f, "$1 $2").replace(g, "$1 $2").replace(d, "$1's").replace(h, "$1 $2$3$4 $5").replace(y, "$1 $2").replace(v, "$1 $3").replace(b, "$1 $2 $3").replace(m, "$1 $2 $3").replace($, "$1$2").replace(E, "$1$2$3").replace(S, "$1 $2").replace(T, "$1 $2").replace(N, "$1$2$3").replace(w, "$1 $2$3$4").replace(k, "$1$2$3 $4").replace(P, "$1 $2").replace(O, "$1 $2").replace(_, "$1 $2").replace(x, "$1 $2").replace(R, "$1 $2").replace(A, "・");
                    }
                }, {
                    key: "spacingText",
                    value: function(e) {
                        var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {};
                        try {
                            t = this.spacing(e);
                        } catch (e) {
                            return void n(e);
                        }
                        n(null, t);
                    }
                }, {
                    key: "spacingTextSync",
                    value: function(e) {
                        return this.spacing(e);
                    }
                } ]), e;
            }(), z = new a();
            e.exports = z, e.exports.default = z, e.exports.Pangu = a;
        }) ? a.apply(t, []) : a) && (e.exports = t);
    } ], t = {}, n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(a, i, function(t) {
            return e[t];
        }.bind(null, i));
        return a;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
    function n(a) {
        if (t[a]) return t[a].exports;
        var i = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    var e, t;
}), e = this, t = function() {
    function e(e, t) {
        var r, n = Object.keys(e);
        return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(e), 
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r)), n;
    }
    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(r), !0).forEach(function(e) {
                c(t, e, r[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
            });
        }
        return t;
    }
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    function o(e, t, n) {
        t && i(e.prototype, t), n && i(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        });
    }
    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        Object.defineProperty(e, "prototype", {
            value: Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            writable: !1
        }), t && u(e, t);
    }
    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
    }
    function u(e, t) {
        return (u = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e;
        })(e, t);
    }
    function l(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), 
                !0;
            } catch (e) {
                return !1;
            }
        }();
        return function() {
            var i, r = s(e);
            return function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e);
            }(this, t ? (i = s(this).constructor, Reflect.construct(r, arguments, i)) : r.apply(this, arguments));
        };
    }
    function f(e) {
        return function(e) {
            if (Array.isArray(e)) return d(e);
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
    }
    function v(e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === b(e);
    }
    function g(e) {
        return "string" == typeof e;
    }
    function y(e) {
        return "number" == typeof e;
    }
    function m(e) {
        return "object" === n(e);
    }
    function k(e) {
        return null != e;
    }
    function M(e) {
        return !e.trim().length;
    }
    function b(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
    }
    var L = Object.prototype.hasOwnProperty, S = function() {
        function e(t) {
            var n = this, i = (r(this, e), this._keys = [], this._keyMap = {}, 0);
            t.forEach(function(e) {
                e = _(e);
                i += e.weight, n._keys.push(e), n._keyMap[e.id] = e, i += e.weight;
            }), this._keys.forEach(function(e) {
                e.weight /= i;
            });
        }
        return o(e, [ {
            key: "get",
            value: function(e) {
                return this._keyMap[e];
            }
        }, {
            key: "keys",
            value: function() {
                return this._keys;
            }
        }, {
            key: "toJSON",
            value: function() {
                return JSON.stringify(this._keys);
            }
        } ]), e;
    }();
    function _(e) {
        var t = null, n = null, r = null, i = 1, o = null;
        if (g(e) || v(e)) r = e, t = O(e), n = j(e); else {
            if (!L.call(e, "name")) throw new Error("Missing ".concat("name", " property in key"));
            var c = e.name, r = c;
            if (L.call(e, "weight") && (i = e.weight) <= 0) throw new Error("Property 'weight' in key '".concat(c, "' must be a positive integer"));
            t = O(c), n = j(c), o = e.getFn;
        }
        return {
            path: t,
            id: n,
            weight: i,
            src: r,
            getFn: o
        };
    }
    function O(e) {
        return v(e) ? e : e.split(".");
    }
    function j(e) {
        return v(e) ? e.join(".") : e;
    }
    var A = {
        useExtendedSearch: !1,
        getFn: function(e, t) {
            var n = [], r = !1;
            return function e(t, i, o) {
                if (k(t)) if (i[o]) {
                    var c = t[i[o]];
                    if (k(c)) if (o === i.length - 1 && (g(c) || y(c) || function(e) {
                        return !0 === e || !1 === e || function(e) {
                            return m(e) && null !== e;
                        }(e) && "[object Boolean]" == b(e);
                    }(c))) n.push(null == c ? "" : function(e) {
                        if ("string" == typeof e) return e;
                        var t = e + "";
                        return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                    }(c)); else if (v(c)) {
                        r = !0;
                        for (var a = 0, s = c.length; a < s; a += 1) e(c[a], i, o + 1);
                    } else i.length && e(c, i, o + 1);
                } else n.push(t);
            }(e, g(t) ? t.split(".") : t, 0), r ? n : n[0];
        },
        ignoreLocation: !1,
        ignoreFieldNorm: !1,
        fieldNormWeight: 1
    }, I = t(t(t(t({}, {
        isCaseSensitive: !1,
        includeScore: !1,
        keys: [],
        shouldSort: !0,
        sortFn: function(e, t) {
            return e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1;
        }
    }), {
        includeMatches: !1,
        findAllMatches: !1,
        minMatchCharLength: 1
    }), {
        location: 0,
        threshold: .6,
        distance: 100
    }), A), C = /[^ ]+/g;
    var $ = function() {
        function e() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, n = t.getFn, n = void 0 === n ? I.getFn : n, t = t.fieldNormWeight, t = void 0 === t ? I.fieldNormWeight : t;
            r(this, e), this.norm = function(argument_0, argument_1) {
                var e = 0 < arguments.length && void 0 !== argument_0 ? argument_0 : 1, argument_0 = 1 < arguments.length && void 0 !== argument_1 ? argument_1 : 3, n = new Map(), r = Math.pow(10, argument_0);
                return {
                    get: function(t) {
                        t = t.match(C).length;
                        if (n.has(t)) return n.get(t);
                        var o = 1 / Math.pow(t, .5 * e), o = parseFloat(Math.round(o * r) / r);
                        return n.set(t, o), o;
                    },
                    clear: function() {
                        n.clear();
                    }
                };
            }(t, 3), this.getFn = n, this.isCreated = !1, this.setIndexRecords();
        }
        return o(e, [ {
            key: "setSources",
            value: function() {
                this.docs = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            }
        }, {
            key: "setIndexRecords",
            value: function() {
                this.records = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
            }
        }, {
            key: "setKeys",
            value: function() {
                var e = this, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
                this.keys = t, this._keysMap = {}, t.forEach(function(t, n) {
                    e._keysMap[t.id] = n;
                });
            }
        }, {
            key: "create",
            value: function() {
                var e = this;
                !this.isCreated && this.docs.length && (this.isCreated = !0, g(this.docs[0]) ? this.docs.forEach(function(t, n) {
                    e._addString(t, n);
                }) : this.docs.forEach(function(t, n) {
                    e._addObject(t, n);
                }), this.norm.clear());
            }
        }, {
            key: "add",
            value: function(e) {
                var t = this.size();
                g(e) ? this._addString(e, t) : this._addObject(e, t);
            }
        }, {
            key: "removeAt",
            value: function(e) {
                this.records.splice(e, 1);
                for (var t = e, n = this.size(); t < n; t += 1) --this.records[t].i;
            }
        }, {
            key: "getValueForItemAtKeyId",
            value: function(e, t) {
                return e[this._keysMap[t]];
            }
        }, {
            key: "size",
            value: function() {
                return this.records.length;
            }
        }, {
            key: "_addString",
            value: function(e, t) {
                k(e) && !M(e) && (t = {
                    v: e,
                    i: t,
                    n: this.norm.get(e)
                }, this.records.push(t));
            }
        }, {
            key: "_addObject",
            value: function(e, t) {
                var n = this, r = {
                    i: t,
                    $: {}
                };
                this.keys.forEach(function(t, i) {
                    var o = t.getFn ? t.getFn(e) : n.getFn(e, t.path);
                    k(o) && (v(o) ? function() {
                        for (var e = [], t = [ {
                            nestedArrIndex: -1,
                            value: o
                        } ]; t.length; ) {
                            var c = t.pop(), a = c.nestedArrIndex, c = c.value;
                            k(c) && (g(c) && !M(c) ? (a = {
                                v: c,
                                i: a,
                                n: n.norm.get(c)
                            }, e.push(a)) : v(c) && c.forEach(function(e, n) {
                                t.push({
                                    nestedArrIndex: n,
                                    value: e
                                });
                            }));
                        }
                        r.$[i] = e;
                    }() : g(o) && !M(o) && (t = {
                        v: o,
                        n: n.norm.get(o)
                    }, r.$[i] = t));
                }), this.records.push(r);
            }
        }, {
            key: "toJSON",
            value: function() {
                return {
                    keys: this.keys,
                    records: this.records
                };
            }
        } ]), e;
    }();
    function F(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r = n.getFn, r = void 0 === r ? I.getFn : r, n = n.fieldNormWeight, n = void 0 === n ? I.fieldNormWeight : n, r = new $({
            getFn: r,
            fieldNormWeight: n
        });
        return r.setKeys(e.map(_)), r.setSources(t), r.create(), r;
    }
    function R(e, argument_1) {
        var argument_1 = 1 < arguments.length && void 0 !== argument_1 ? argument_1 : {}, n = argument_1.errors, i = argument_1.currentLocation, c = argument_1.expectedLocation, s = argument_1.distance, s = void 0 === s ? I.distance : s, argument_1 = argument_1.ignoreLocation, argument_1 = void 0 === argument_1 ? I.ignoreLocation : argument_1, n = (void 0 === n ? 0 : n) / e.length;
        if (argument_1) return n;
        e = Math.abs((void 0 === c ? 0 : c) - (void 0 === i ? 0 : i));
        return s ? n + e / s : e ? 1 : n;
    }
    var P = 32;
    var T = function() {
        function e(t) {
            var n = this, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, o = i.location, o = void 0 === o ? I.location : o, a = i.threshold, a = void 0 === a ? I.threshold : a, u = i.distance, u = void 0 === u ? I.distance : u, l = i.includeMatches, l = void 0 === l ? I.includeMatches : l, d = i.findAllMatches, d = void 0 === d ? I.findAllMatches : d, g = i.minMatchCharLength, g = void 0 === g ? I.minMatchCharLength : g, p = i.isCaseSensitive, p = void 0 === p ? I.isCaseSensitive : p, i = i.ignoreLocation, i = void 0 === i ? I.ignoreLocation : i;
            if (r(this, e), this.options = {
                location: o,
                threshold: a,
                distance: u,
                includeMatches: l,
                findAllMatches: d,
                minMatchCharLength: g,
                isCaseSensitive: p,
                ignoreLocation: i
            }, this.pattern = p ? t : t.toLowerCase(), this.chunks = [], this.pattern.length) {
                var b = function(e, t) {
                    n.chunks.push({
                        pattern: e,
                        alphabet: function(e) {
                            for (var t = {}, n = 0, r = e.length; n < r; n += 1) {
                                var i = e.charAt(n);
                                t[i] = (t[i] || 0) | 1 << r - n - 1;
                            }
                            return t;
                        }(e),
                        startIndex: t
                    });
                }, o = this.pattern.length;
                if (P < o) {
                    for (var w = 0, a = o % P, S = o - a; w < S; ) b(this.pattern.substr(w, P), w), 
                    w += P;
                    a && b(this.pattern.substr(u = o - P), u);
                } else b(this.pattern, 0);
            }
        }
        return o(e, [ {
            key: "searchIn",
            value: function(e) {
                var t = this.options, n = t.isCaseSensitive, r = t.includeMatches;
                if (n || (e = e.toLowerCase()), this.pattern === e) return t = {
                    isMatch: !0,
                    score: 0
                }, r && (t.indices = [ [ 0, e.length - 1 ] ]), t;
                var n = this.options, c = n.location, a = n.distance, s = n.threshold, u = n.findAllMatches, h = n.minMatchCharLength, l = n.ignoreLocation, d = [], v = 0, g = !1, t = (this.chunks.forEach(function(t) {
                    var n = t.pattern, i = t.alphabet, t = t.startIndex, n = function(e, t, n, argument_3) {
                        var argument_3 = 3 < arguments.length && void 0 !== argument_3 ? argument_3 : {}, i = argument_3.location, i = void 0 === i ? I.location : i, c = argument_3.distance, a = void 0 === c ? I.distance : c, c = argument_3.threshold, c = void 0 === c ? I.threshold : c, h = argument_3.findAllMatches, l = void 0 === h ? I.findAllMatches : h, h = argument_3.minMatchCharLength, h = void 0 === h ? I.minMatchCharLength : h, v = argument_3.includeMatches, v = void 0 === v ? I.includeMatches : v, argument_3 = argument_3.ignoreLocation, p = void 0 === argument_3 ? I.ignoreLocation : argument_3;
                        if (t.length > P) throw new Error("Pattern length exceeds max of ".concat(P, "."));
                        for (var m, k = t.length, M = e.length, b = Math.max(0, Math.min(i, M)), x = c, L = b, S = 1 < h || v, _ = S ? Array(M) : []; -1 < (m = e.indexOf(t, L)); ) {
                            var O = R(t, {
                                currentLocation: m,
                                expectedLocation: b,
                                distance: a,
                                ignoreLocation: p
                            }), x = Math.min(O, x), L = m + k;
                            if (S) for (var j = 0; j < k; ) j += _[m + j] = 1;
                        }
                        L = -1;
                        for (var A = [], C = 1, E = k + M, $ = 1 << k - 1, F = 0; F < k; F += 1) {
                            for (var W = 0, T = E; W < T; ) R(t, {
                                errors: F,
                                currentLocation: b + T,
                                expectedLocation: b,
                                distance: a,
                                ignoreLocation: p
                            }) <= x ? W = T : E = T, T = Math.floor((E - W) / 2 + W);
                            var E = T, z = Math.max(1, b - T + 1), D = l ? M : Math.min(b + T, M) + k, K = Array(D + 2);
                            K[D + 1] = (1 << F) - 1;
                            for (var q = D; z <= q; --q) {
                                var B = q - 1, J = n[e.charAt(B)];
                                if (S && (_[B] = +!!J), K[q] = (K[q + 1] << 1 | 1) & J, 
                                F && (K[q] |= (A[q + 1] | A[q]) << 1 | 1 | A[q + 1]), 
                                K[q] & $ && (C = R(t, {
                                    errors: F,
                                    currentLocation: B,
                                    expectedLocation: b,
                                    distance: a,
                                    ignoreLocation: p
                                })) <= x) {
                                    if (x = C, (L = B) <= b) break;
                                    z = Math.max(1, 2 * b - L);
                                }
                            }
                            if (R(t, {
                                errors: F + 1,
                                currentLocation: b,
                                expectedLocation: b,
                                distance: a,
                                ignoreLocation: p
                            }) > x) break;
                            A = K;
                        }
                        argument_3 = {
                            isMatch: 0 <= L,
                            score: Math.max(.001, C)
                        };
                        return S && ((i = function(argument_0, argument_1) {
                            for (var e = 0 < arguments.length && void 0 !== argument_0 ? argument_0 : [], t = 1 < arguments.length && void 0 !== argument_1 ? argument_1 : I.minMatchCharLength, n = [], r = -1, o = 0, c = e.length; o < c; o += 1) {
                                var a = e[o];
                                a && -1 === r ? r = o : a || -1 === r || ((a = o - 1) - r + 1 >= t && n.push([ r, a ]), 
                                r = -1);
                            }
                            return e[o - 1] && t <= o - r && n.push([ r, o - 1 ]), 
                            n;
                        }(_, h)).length ? v && (argument_3.indices = i) : argument_3.isMatch = !1), 
                        argument_3;
                    }(e, n, i, {
                        location: c + t,
                        distance: a,
                        threshold: s,
                        findAllMatches: u,
                        minMatchCharLength: h,
                        includeMatches: r,
                        ignoreLocation: l
                    }), i = n.isMatch, t = n.score, n = n.indices;
                    i && (g = !0), v += t, i && n && (d = [].concat(f(d), f(n)));
                }), {
                    isMatch: g,
                    score: g ? v / this.chunks.length : 1
                });
                return g && r && (t.indices = d), t;
            }
        } ]), e;
    }(), z = function() {
        function e(t) {
            r(this, e), this.pattern = t;
        }
        return o(e, [ {
            key: "search",
            value: function() {}
        } ], [ {
            key: "isMultiMatch",
            value: function(e) {
                return D(e, this.multiRegex);
            }
        }, {
            key: "isSingleMatch",
            value: function(e) {
                return D(e, this.singleRegex);
            }
        } ]), e;
    }();
    function D(e, t) {
        e = e.match(t);
        return e ? e[1] : null;
    }
    var A = function() {
        a(n, z);
        var t = l(n);
        function n(e) {
            return r(this, n), t.call(this, e);
        }
        return o(n, [ {
            key: "search",
            value: function(e) {
                e = e === this.pattern;
                return {
                    isMatch: e,
                    score: e ? 0 : 1,
                    indices: [ 0, this.pattern.length - 1 ]
                };
            }
        } ], [ {
            key: "type",
            get: function() {
                return "exact";
            }
        }, {
            key: "multiRegex",
            get: function() {
                return /^="(.*)"$/;
            }
        }, {
            key: "singleRegex",
            get: function() {
                return /^=(.*)$/;
            }
        } ]), n;
    }(), q = function() {
        a(n, z);
        var t = l(n);
        function n(e) {
            return r(this, n), t.call(this, e);
        }
        return o(n, [ {
            key: "search",
            value: function(e) {
                var t = -1 === e.indexOf(this.pattern);
                return {
                    isMatch: t,
                    score: t ? 0 : 1,
                    indices: [ 0, e.length - 1 ]
                };
            }
        } ], [ {
            key: "type",
            get: function() {
                return "inverse-exact";
            }
        }, {
            key: "multiRegex",
            get: function() {
                return /^!"(.*)"$/;
            }
        }, {
            key: "singleRegex",
            get: function() {
                return /^!(.*)$/;
            }
        } ]), n;
    }(), B = function() {
        a(n, z);
        var t = l(n);
        function n(e) {
            return r(this, n), t.call(this, e);
        }
        return o(n, [ {
            key: "search",
            value: function(e) {
                e = e.startsWith(this.pattern);
                return {
                    isMatch: e,
                    score: e ? 0 : 1,
                    indices: [ 0, this.pattern.length - 1 ]
                };
            }
        } ], [ {
            key: "type",
            get: function() {
                return "prefix-exact";
            }
        }, {
            key: "multiRegex",
            get: function() {
                return /^\^"(.*)"$/;
            }
        }, {
            key: "singleRegex",
            get: function() {
                return /^\^(.*)$/;
            }
        } ]), n;
    }(), J = function() {
        a(n, z);
        var t = l(n);
        function n(e) {
            return r(this, n), t.call(this, e);
        }
        return o(n, [ {
            key: "search",
            value: function(e) {
                var t = !e.startsWith(this.pattern);
                return {
                    isMatch: t,
                    score: t ? 0 : 1,
                    indices: [ 0, e.length - 1 ]
                };
            }
        } ], [ {
            key: "type",
            get: function() {
                return "inverse-prefix-exact";
            }
        }, {
            key: "multiRegex",
            get: function() {
                return /^!\^"(.*)"$/;
            }
        }, {
            key: "singleRegex",
            get: function() {
                return /^!\^(.*)$/;
            }
        } ]), n;
    }(), U = function() {
        a(n, z);
        var t = l(n);
        function n(e) {
            return r(this, n), t.call(this, e);
        }
        return o(n, [ {
            key: "search",
            value: function(e) {
                var t = e.endsWith(this.pattern);
                return {
                    isMatch: t,
                    score: t ? 0 : 1,
                    indices: [ e.length - this.pattern.length, e.length - 1 ]
                };
            }
        } ], [ {
            key: "type",
            get: function() {
                return "suffix-exact";
            }
        }, {
            key: "multiRegex",
            get: function() {
                return /^"(.*)"\$$/;
            }
        }, {
            key: "singleRegex",
            get: function() {
                return /^(.*)\$$/;
            }
        } ]), n;
    }(), V = function() {
        a(n, z);
        var t = l(n);
        function n(e) {
            return r(this, n), t.call(this, e);
        }
        return o(n, [ {
            key: "search",
            value: function(e) {
                var t = !e.endsWith(this.pattern);
                return {
                    isMatch: t,
                    score: t ? 0 : 1,
                    indices: [ 0, e.length - 1 ]
                };
            }
        } ], [ {
            key: "type",
            get: function() {
                return "inverse-suffix-exact";
            }
        }, {
            key: "multiRegex",
            get: function() {
                return /^!"(.*)"\$$/;
            }
        }, {
            key: "singleRegex",
            get: function() {
                return /^!(.*)\$$/;
            }
        } ]), n;
    }(), G = function() {
        a(n, z);
        var t = l(n);
        function n(e) {
            var i, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, c = o.location, c = void 0 === c ? I.location : c, s = o.threshold, s = void 0 === s ? I.threshold : s, h = o.distance, h = void 0 === h ? I.distance : h, f = o.includeMatches, f = void 0 === f ? I.includeMatches : f, v = o.findAllMatches, v = void 0 === v ? I.findAllMatches : v, y = o.minMatchCharLength, y = void 0 === y ? I.minMatchCharLength : y, m = o.isCaseSensitive, m = void 0 === m ? I.isCaseSensitive : m, o = o.ignoreLocation, o = void 0 === o ? I.ignoreLocation : o;
            return r(this, n), (i = t.call(this, e))._bitapSearch = new T(e, {
                location: c,
                threshold: s,
                distance: h,
                includeMatches: f,
                findAllMatches: v,
                minMatchCharLength: y,
                isCaseSensitive: m,
                ignoreLocation: o
            }), i;
        }
        return o(n, [ {
            key: "search",
            value: function(e) {
                return this._bitapSearch.searchIn(e);
            }
        } ], [ {
            key: "type",
            get: function() {
                return "fuzzy";
            }
        }, {
            key: "multiRegex",
            get: function() {
                return /^"(.*)"$/;
            }
        }, {
            key: "singleRegex",
            get: function() {
                return /^(.*)$/;
            }
        } ]), n;
    }(), H = function() {
        a(n, z);
        var t = l(n);
        function n(e) {
            return r(this, n), t.call(this, e);
        }
        return o(n, [ {
            key: "search",
            value: function(e) {
                for (var t, n = 0, r = [], i = this.pattern.length; -1 < (t = e.indexOf(this.pattern, n)); ) r.push([ t, (n = t + i) - 1 ]);
                var o = !!r.length;
                return {
                    isMatch: o,
                    score: o ? 0 : 1,
                    indices: r
                };
            }
        } ], [ {
            key: "type",
            get: function() {
                return "include";
            }
        }, {
            key: "multiRegex",
            get: function() {
                return /^'"(.*)"$/;
            }
        }, {
            key: "singleRegex",
            get: function() {
                return /^'(.*)$/;
            }
        } ]), n;
    }(), Q = [ A, H, B, J, V, U, q, G ], X = Q.length, Y = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
    var ee = new Set([ G.type, H.type ]), A = function() {
        function e(t) {
            var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = n.isCaseSensitive, i = void 0 === i ? I.isCaseSensitive : i, c = n.includeMatches, c = void 0 === c ? I.includeMatches : c, s = n.minMatchCharLength, s = void 0 === s ? I.minMatchCharLength : s, h = n.ignoreLocation, h = void 0 === h ? I.ignoreLocation : h, f = n.findAllMatches, f = void 0 === f ? I.findAllMatches : f, v = n.location, v = void 0 === v ? I.location : v, y = n.threshold, y = void 0 === y ? I.threshold : y, n = n.distance, n = void 0 === n ? I.distance : n;
            r(this, e), this.query = null, this.options = {
                isCaseSensitive: i,
                includeMatches: c,
                minMatchCharLength: s,
                findAllMatches: f,
                ignoreLocation: h,
                location: v,
                threshold: y,
                distance: n
            }, this.pattern = i ? t : t.toLowerCase(), this.query = function(e, argument_1) {
                var t = 1 < arguments.length && void 0 !== argument_1 ? argument_1 : {};
                return e.split("|").map(function(e) {
                    for (var n = e.trim().split(Y).filter(function(e) {
                        return e && !!e.trim();
                    }), r = [], i = 0, o = n.length; i < o; i += 1) {
                        for (var c = n[i], a = !1, s = -1; !a && ++s < X; ) {
                            var u = Q[s], h = u.isMultiMatch(c);
                            h && (r.push(new u(h, t)), a = !0);
                        }
                        if (!a) for (s = -1; ++s < X; ) {
                            var l = Q[s], f = l.isSingleMatch(c);
                            if (f) {
                                r.push(new l(f, t));
                                break;
                            }
                        }
                    }
                    return r;
                });
            }(this.pattern, this.options);
        }
        return o(e, [ {
            key: "searchIn",
            value: function(e) {
                var t = this.query;
                if (!t) return {
                    isMatch: !1,
                    score: 1
                };
                var n = this.options, r = n.includeMatches;
                e = n.isCaseSensitive ? e : e.toLowerCase();
                for (var i = 0, o = [], c = 0, a = 0, s = t.length; a < s; a += 1) {
                    for (var k, u = t[a], i = o.length = 0, h = 0, l = u.length; h < l; h += 1) {
                        var d = u[h], v = d.search(e), g = v.isMatch, y = v.indices, v = v.score;
                        if (!g) {
                            o.length = i = c = 0;
                            break;
                        }
                        i += 1, c += v, r && (g = d.constructor.type, ee.has(g) ? o = [].concat(f(o), f(y)) : o.push(y));
                    }
                    if (i) return k = {
                        isMatch: !0,
                        score: c / i
                    }, r && (k.indices = o), k;
                }
                return {
                    isMatch: !1,
                    score: 1
                };
            }
        } ], [ {
            key: "condition",
            value: function(e, t) {
                return t.useExtendedSearch;
            }
        } ]), e;
    }(), ne = [];
    function re(e, t) {
        for (var n = 0, r = ne.length; n < r; n += 1) {
            var i = ne[n];
            if (i.condition(e, t)) return new i(e, t);
        }
        return new T(e, t);
    }
    function le(e) {
        return c({}, ie, Object.keys(e).map(function(t) {
            return c({}, t, e[t]);
        }));
    }
    var ie = "$and", ce = "$path", se = function(e) {
        return !(!e[ie] && !e.$or);
    };
    function de(e, t) {
        e = e.matches;
        t.matches = [], k(e) && e.forEach(function(e) {
            var n;
            k(e.indices) && e.indices.length && (n = {
                indices: e.indices,
                value: e.value
            }, e.key && (n.key = e.key.src), -1 < e.idx && (n.refIndex = e.idx), 
            t.matches.push(n));
        });
    }
    function ve(e, t) {
        t.score = e.score;
    }
    B = function() {
        function e(n) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, o = 2 < arguments.length ? arguments[2] : void 0;
            r(this, e), this.options = t(t({}, I), i), this.options.useExtendedSearch, 
            this._keyStore = new S(this.options.keys), this.setCollection(n, o);
        }
        return o(e, [ {
            key: "setCollection",
            value: function(e, t) {
                if (this._docs = e, t && !(t instanceof $)) throw new Error("Incorrect 'index' type");
                this._myIndex = t || F(this.options.keys, this._docs, {
                    getFn: this.options.getFn,
                    fieldNormWeight: this.options.fieldNormWeight
                });
            }
        }, {
            key: "add",
            value: function(e) {
                k(e) && (this._docs.push(e), this._myIndex.add(e));
            }
        }, {
            key: "remove",
            value: function() {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : function() {
                    return !1;
                }, t = [], n = 0, r = this._docs.length; n < r; n += 1) {
                    var i = this._docs[n];
                    e(i, n) && (this.removeAt(n), --n, --r, t.push(i));
                }
                return t;
            }
        }, {
            key: "removeAt",
            value: function(e) {
                this._docs.splice(e, 1), this._myIndex.removeAt(e);
            }
        }, {
            key: "getIndex",
            value: function() {
                return this._myIndex;
            }
        }, {
            key: "search",
            value: function(e) {
                var n = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).limit, n = void 0 === n ? -1 : n, i = this.options, o = i.includeMatches, c = i.includeScore, a = i.shouldSort, s = i.sortFn, i = i.ignoreFieldNorm, e = g(e) ? g(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
                return function(e, t) {
                    var r = void 0 === (t = t.ignoreFieldNorm) ? I.ignoreFieldNorm : t;
                    e.forEach(function(e) {
                        var t = 1;
                        e.matches.forEach(function(e) {
                            var n = e.key, i = e.norm, e = e.score, n = n ? n.weight : null;
                            t *= Math.pow(0 === e && n ? Number.EPSILON : e, (n || 1) * (r ? 1 : i));
                        }), e.score = t;
                    });
                }(e, {
                    ignoreFieldNorm: i
                }), a && e.sort(s), function(e, t, argument_2) {
                    var argument_2 = 2 < arguments.length && void 0 !== argument_2 ? argument_2 : {}, r = void 0 === (r = argument_2.includeMatches) ? I.includeMatches : r, argument_2 = argument_2.includeScore, argument_2 = void 0 === argument_2 ? I.includeScore : argument_2, a = [];
                    return r && a.push(de), argument_2 && a.push(ve), e.map(function(e) {
                        var n = e.idx, r = {
                            item: t[n],
                            refIndex: n
                        };
                        return a.length && a.forEach(function(t) {
                            t(e, r);
                        }), r;
                    });
                }(e = y(n) && -1 < n ? e.slice(0, n) : e, this._docs, {
                    includeMatches: o,
                    includeScore: c
                });
            }
        }, {
            key: "_searchStringList",
            value: function(e) {
                var t = re(e, this.options), e = this._myIndex.records, r = [];
                return e.forEach(function(e) {
                    var a, s, c, n = e.v, i = e.i, e = e.n;
                    k(n) && (a = (c = t.searchIn(n)).isMatch, s = c.score, c = c.indices, 
                    a && r.push({
                        item: n,
                        idx: i,
                        matches: [ {
                            score: s,
                            value: n,
                            norm: e,
                            indices: c
                        } ]
                    }));
                }), r;
            }
        }, {
            key: "_searchLogical",
            value: function(e) {
                var t = this, n = function(e, t, argument_2) {
                    var argument_2 = (2 < arguments.length && void 0 !== argument_2 ? argument_2 : {}).auto, r = void 0 === argument_2 || argument_2;
                    return function e(n) {
                        var i = Object.keys(n), o = function(e) {
                            return !!e[ce];
                        }(n);
                        if (!o && 1 < i.length && !se(n)) return e(le(n));
                        if (function(e) {
                            return !v(e) && m(e) && !se(e);
                        }(n)) {
                            var c = o ? n[ce] : i[0], o = o ? n.$val : n[c];
                            if (!g(o)) throw new Error("Invalid value for key ".concat(c));
                            c = {
                                keyId: j(c),
                                pattern: o
                            };
                            return r && (c.searcher = re(o, t)), c;
                        }
                        var u = {
                            children: [],
                            operator: i[0]
                        };
                        return i.forEach(function(t) {
                            t = n[t];
                            v(t) && t.forEach(function(t) {
                                u.children.push(e(t));
                            });
                        }), u;
                    }(e = se(e) ? e : le(e));
                }(e, this.options), r = function e(n, r, i) {
                    var c, o;
                    if (!n.children) return o = n.keyId, c = n.searcher, (o = t._findMatches({
                        key: t._keyStore.get(o),
                        value: t._myIndex.getValueForItemAtKeyId(r, o),
                        searcher: c
                    })) && o.length ? [ {
                        idx: i,
                        item: r,
                        matches: o
                    } ] : [];
                    for (var s = [], u = 0, h = n.children.length; u < h; u += 1) {
                        var l = e(n.children[u], r, i);
                        if (l.length) s.push.apply(s, f(l)); else if (n.operator === ie) return [];
                    }
                    return s;
                }, e = this._myIndex.records, o = {}, c = [];
                return e.forEach(function(e) {
                    var t = e.$, i = e.i;
                    k(t) && (e = r(n, t, i)).length && (o[i] || (o[i] = {
                        idx: i,
                        item: t,
                        matches: []
                    }, c.push(o[i])), e.forEach(function(e) {
                        var t, e = e.matches;
                        (t = o[i].matches).push.apply(t, f(e));
                    }));
                }), c;
            }
        }, {
            key: "_searchObjectList",
            value: function(e) {
                var t = this, n = re(e, this.options), e = this._myIndex, i = e.keys, e = e.records, c = [];
                return e.forEach(function(e) {
                    var a, r = e.$, e = e.i;
                    k(r) && (a = [], i.forEach(function(e, i) {
                        a.push.apply(a, f(t._findMatches({
                            key: e,
                            value: r[i],
                            searcher: n
                        })));
                    }), a.length && c.push({
                        idx: e,
                        item: r,
                        matches: a
                    }));
                }), c;
            }
        }, {
            key: "_findMatches",
            value: function(e) {
                var t = e.key, n = e.value, r = e.searcher;
                if (!k(n)) return [];
                var s, u, a, i = [];
                return v(n) ? n.forEach(function(e) {
                    var s, u, a, n = e.v, o = e.i, e = e.n;
                    k(n) && (s = (a = r.searchIn(n)).isMatch, u = a.score, a = a.indices, 
                    s && i.push({
                        score: u,
                        key: t,
                        value: n,
                        idx: o,
                        norm: e,
                        indices: a
                    }));
                }) : (e = n.v, n = n.n, s = (a = r.searchIn(e)).isMatch, u = a.score, 
                a = a.indices, s && i.push({
                    score: u,
                    key: t,
                    value: e,
                    norm: n,
                    indices: a
                })), i;
            }
        } ]), e;
    }();
    return B.version = "6.6.2", B.createIndex = F, B.parseIndex = function(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n = t.getFn, n = void 0 === n ? I.getFn : n, t = t.fieldNormWeight, t = void 0 === t ? I.fieldNormWeight : t, c = e.keys, e = e.records, n = new $({
            getFn: n,
            fieldNormWeight: t
        });
        return n.setKeys(c), n.setIndexRecords(e), n;
    }, B.config = I, function() {
        ne.push.apply(ne, arguments);
    }(A), B;
}, "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Fuse = t(), 
function(e) {
    "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define([], function() {
        return window.hljs;
    }));
}(function(e) {
    function t(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;");
    }
    function r(e) {
        return e.nodeName.toLowerCase();
    }
    function n(e, t) {
        e = e && e.exec(t);
        return e && 0 == e.index;
    }
    function a(e) {
        return (e.className + " " + (e.parentNode ? e.parentNode.className : "")).split(/\s+/).map(function(e) {
            return e.replace(/^lang(uage)?-/, "");
        }).filter(function(e) {
            return v(e) || /no(-?)highlight|plain|text/.test(e);
        })[0];
    }
    function i(e, t) {
        var r, n = {};
        for (r in e) n[r] = e[r];
        if (t) for (r in t) n[r] = t[r];
        return n;
    }
    function s(e) {
        var t = [];
        return function n(e, a) {
            for (var i = e.firstChild; i; i = i.nextSibling) 3 == i.nodeType ? a += i.nodeValue.length : 1 == i.nodeType && (t.push({
                event: "start",
                offset: a,
                node: i
            }), a = n(i, a), r(i).match(/br|hr|img|input/) || t.push({
                event: "stop",
                offset: a,
                node: i
            }));
            return a;
        }(e, 0), t;
    }
    function c(e, n, a) {
        function i() {
            return e.length && n.length ? e[0].offset != n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" == n[0].event ? e : n : e.length ? e : n;
        }
        function s(e) {
            u += "<" + r(e) + Array.prototype.map.call(e.attributes, function(e) {
                return " " + e.nodeName + '="' + t(e.value) + '"';
            }).join("") + ">";
        }
        function c(e) {
            u += "</" + r(e) + ">";
        }
        function o(e) {
            ("start" == e.event ? s : c)(e.node);
        }
        for (var l = 0, u = "", d = []; e.length || n.length; ) {
            var b = i();
            if (u += t(a.substr(l, b[0].offset - l)), l = b[0].offset, b == e) {
                for (d.reverse().forEach(c); o(b.splice(0, 1)[0]), (b = i()) == e && b.length && b[0].offset == l; );
                d.reverse().forEach(s);
            } else "start" == b[0].event ? d.push(b[0].node) : d.pop(), o(b.splice(0, 1)[0]);
        }
        return u + t(a.substr(l));
    }
    function o(e) {
        function t(e) {
            return e && e.source || e;
        }
        function r(r, n) {
            return new RegExp(t(r), "m" + (e.cI ? "i" : "") + (n ? "g" : ""));
        }
        !function n(a, s) {
            var c, o, l;
            a.compiled || (a.compiled = !0, a.k = a.k || a.bK, a.k && (c = {}, o = function(t, r) {
                (r = e.cI ? r.toLowerCase() : r).split(" ").forEach(function(e) {
                    e = e.split("|"), c[e[0]] = [ t, e[1] ? Number(e[1]) : 1 ];
                });
            }, "string" == typeof a.k ? o("keyword", a.k) : Object.keys(a.k).forEach(function(e) {
                o(e, a.k[e]);
            }), a.k = c), a.lR = r(a.l || /\b\w+\b/, !0), s && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), 
            a.b || (a.b = /\B|\b/), a.bR = r(a.b), a.e || a.eW || (a.e = /\B|\b/), 
            a.e && (a.eR = r(a.e)), a.tE = t(a.e) || "", a.eW && s.tE && (a.tE += (a.e ? "|" : "") + s.tE)), 
            a.i && (a.iR = r(a.i)), void 0 === a.r && (a.r = 1), a.c || (a.c = []), 
            l = [], a.c.forEach(function(e) {
                e.v ? e.v.forEach(function(t) {
                    l.push(i(e, t));
                }) : l.push("self" == e ? a : e);
            }), a.c = l, a.c.forEach(function(e) {
                n(e, a);
            }), a.starts && n(a.starts, s), s = a.c.map(function(e) {
                return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
            }).concat([ a.tE, a.i ]).map(t).filter(Boolean), a.t = s.length ? r(s.join("|"), !0) : {
                exec: function() {
                    return null;
                }
            });
        }(e);
    }
    function l(e, r, a, i) {
        function s(e, t) {
            for (var r = 0; r < t.c.length; r++) if (n(t.c[r].bR, e)) return t.c[r];
        }
        function c(e, t) {
            if (n(e.eR, t)) {
                for (;e.endsParent && e.parent; ) e = e.parent;
                return e;
            }
            return e.eW ? c(e.parent, t) : void 0;
        }
        function d(e, t) {
            return !a && n(t.iR, e);
        }
        function b(e, t) {
            t = y.cI ? t[0].toLowerCase() : t[0];
            return e.k.hasOwnProperty(t) && e.k[t];
        }
        function p(e, t, r, n) {
            n = '<span class="' + (n ? "" : N.classPrefix);
            return (n += e + '">') + t + (r ? "" : "</span>");
        }
        function f() {
            if (!x.k) return t(E);
            var e = "", r = 0;
            x.lR.lastIndex = 0;
            for (var n = x.lR.exec(E); n; ) {
                e += t(E.substr(r, n.index - r));
                var a = b(x, n);
                a ? (B += a[1], e += p(a[0], t(n[0]))) : e += t(n[0]), r = x.lR.lastIndex, 
                n = x.lR.exec(E);
            }
            return e + t(E.substr(r));
        }
        function m() {
            if (x.sL && !w[x.sL]) return t(E);
            var e = x.sL ? l(x.sL, E, !0, C[x.sL]) : u(E);
            return 0 < x.r && (B += e.r), "continuous" == x.subLanguageMode && (C[x.sL] = e.top), 
            p(e.language, e.value, !1, !0);
        }
        function g() {
            return (void 0 !== x.sL ? m : f)();
        }
        function _(e, r) {
            var n = e.cN ? p(e.cN, "", !0) : "";
            E = e.rB ? (M += n, "") : e.eB ? (M += t(r) + n, "") : (M += n, r), 
            x = Object.create(e, {
                parent: {
                    value: x
                }
            });
        }
        function h(e, r) {
            if (E += e, void 0 === r) return M += g(), 0;
            e = s(r, x);
            if (e) return M += g(), _(e, r), e.rB ? 0 : r.length;
            var a = c(x, r);
            if (a) {
                e = x;
                for (e.rE || e.eE || (E += r), M += g(); x.cN && (M += "</span>"), 
                B += x.r, (x = x.parent) != a.parent; );
                return e.eE && (M += t(r)), E = "", a.starts && _(a.starts, ""), 
                e.rE ? 0 : r.length;
            }
            if (d(r, x)) throw new Error('Illegal lexeme "' + r + '" for mode "' + (x.cN || "<unnamed>") + '"');
            return E += r, r.length || 1;
        }
        var y = v(e);
        if (!y) throw new Error('Unknown language: "' + e + '"');
        o(y);
        for (var x = i || y, C = {}, M = "", k = x; k != y; k = k.parent) k.cN && (M = p(k.cN, "", !0) + M);
        var E = "", B = 0;
        try {
            for (var L, $, z = 0; x.t.lastIndex = z, L = x.t.exec(r); ) $ = h(r.substr(z, L.index - z), L[0]), 
            z = L.index + $;
            for (h(r.substr(z)), k = x; k.parent; k = k.parent) k.cN && (M += "</span>");
            return {
                r: B,
                value: M,
                language: e,
                top: x
            };
        } catch (R) {
            if (-1 != R.message.indexOf("Illegal")) return {
                r: 0,
                value: t(r)
            };
            throw R;
        }
    }
    function u(e, r) {
        r = r || N.languages || Object.keys(w);
        var n = {
            r: 0,
            value: t(e)
        }, a = n;
        return r.forEach(function(t) {
            var r;
            v(t) && ((r = l(t, e, !1)).language = t, r.r > a.r && (a = r), r.r > n.r && (a = n, 
            n = r));
        }), a.language && (n.second_best = a), n;
    }
    function d(e) {
        return N.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function(e, t) {
            return t.replace(/\t/g, N.tabReplace);
        })), e = N.useBR ? e.replace(/\n/g, "<br>") : e;
    }
    function b(e, t, r) {
        t = t ? y[t] : r, r = [ e.trim() ];
        return e.match(/\bhljs\b/) || r.push("hljs"), -1 === e.indexOf(t) && r.push(t), 
        r.join(" ").trim();
    }
    function p(e) {
        var n, i, r, p, t = a(e);
        /no(-?)highlight|plain|text/.test(t) || (N.useBR ? (r = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : r = e, 
        n = r.textContent, i = t ? l(t, n, !0) : u(n), (r = s(r)).length && ((p = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = i.value, 
        i.value = c(r, s(p), n)), i.value = d(i.value), e.innerHTML = i.value, e.className = b(e.className, t, i.language), 
        e.result = {
            language: i.language,
            re: i.r
        }, i.second_best && (e.second_best = {
            language: i.second_best.language,
            re: i.second_best.r
        }));
    }
    function m() {
        var e;
        m.called || (m.called = !0, e = document.querySelectorAll("pre code"), Array.prototype.forEach.call(e, p));
    }
    function v(e) {
        return w[e] || w[y[e]];
    }
    var N = {
        classPrefix: "hljs-",
        tabReplace: null,
        useBR: !1,
        languages: void 0
    }, w = {}, y = {};
    return e.highlight = l, e.highlightAuto = u, e.fixMarkup = d, e.highlightBlock = p, 
    e.configure = function(e) {
        N = i(N, e);
    }, e.initHighlighting = m, e.initHighlightingOnLoad = function() {
        addEventListener("DOMContentLoaded", m, !1), addEventListener("load", m, !1);
    }, e.registerLanguage = function(t, r) {
        (r = w[t] = r(e)).aliases && r.aliases.forEach(function(e) {
            y[e] = t;
        });
    }, e.listLanguages = function() {
        return Object.keys(w);
    }, e.getLanguage = v, e.inherit = i, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", 
    e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", 
    e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", 
    e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [ e.BE ]
    }, e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [ e.BE ]
    }, e.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/
    }, e.C = function(t, r, n) {
        t = e.inherit({
            cN: "comment",
            b: t,
            e: r,
            c: []
        }, n || {});
        return t.c.push(e.PWM), t;
    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), 
    e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    }, e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    }, e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    }, e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [ e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [ e.BE ]
        } ]
    }, e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    }, e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    }, e;
}), hljs.registerLanguage("apache", function(e) {
    var t = {
        cN: "number",
        b: "[\\$%]\\d+"
    };
    return {
        aliases: [ "apacheconf" ],
        cI: !0,
        c: [ e.HCM, {
            cN: "tag",
            b: "</?",
            e: ">"
        }, {
            cN: "keyword",
            b: /\w+/,
            r: 0,
            k: {
                common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
            },
            starts: {
                e: /$/,
                r: 0,
                k: {
                    literal: "on off all"
                },
                c: [ {
                    cN: "sqbracket",
                    b: "\\s\\[",
                    e: "\\]$"
                }, {
                    cN: "cbracket",
                    b: "[\\$%]\\{",
                    e: "\\}",
                    c: [ "self", t ]
                }, t, e.QSM ]
            }
        } ],
        i: /\S/
    };
}), hljs.registerLanguage("bash", function(e) {
    var t = {
        cN: "variable",
        v: [ {
            b: /\$[\w\d#@][\w\d_]*/
        }, {
            b: /\$\{(.*?)}/
        } ]
    }, r = {
        cN: "string",
        b: /"/,
        e: /"/,
        c: [ e.BE, t, {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [ e.BE ]
        } ]
    };
    return {
        aliases: [ "sh", "zsh" ],
        l: /-?[a-z\.]+/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [ {
            cN: "shebang",
            b: /^#![^\n]+sh\s*$/,
            r: 10
        }, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [ e.inherit(e.TM, {
                b: /\w[\w\d_]*/
            }) ],
            r: 0
        }, e.HCM, e.NM, r, {
            cN: "string",
            b: /'/,
            e: /'/
        }, t ]
    };
}), hljs.registerLanguage("coffeescript", function(e) {
    var t = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off",
        reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
        built_in: "npm require console print module global window document"
    }, r = "[A-Za-z$_][0-9A-Za-z$_]*", n = {
        cN: "subst",
        b: /#\{/,
        e: /}/,
        k: t
    }, a = [ e.BNM, e.inherit(e.CNM, {
        starts: {
            e: "(\\s*/)?",
            r: 0
        }
    }), {
        cN: "string",
        v: [ {
            b: /'''/,
            e: /'''/,
            c: [ e.BE ]
        }, {
            b: /'/,
            e: /'/,
            c: [ e.BE ]
        }, {
            b: /"""/,
            e: /"""/,
            c: [ e.BE, n ]
        }, {
            b: /"/,
            e: /"/,
            c: [ e.BE, n ]
        } ]
    }, {
        cN: "regexp",
        v: [ {
            b: "///",
            e: "///",
            c: [ n, e.HCM ]
        }, {
            b: "//[gim]*",
            r: 0
        }, {
            b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        } ]
    }, {
        cN: "property",
        b: "@" + r
    }, {
        b: "`",
        e: "`",
        eB: !0,
        eE: !0,
        sL: "javascript"
    } ], n = (n.c = a, e.inherit(e.TM, {
        b: r
    })), s = "(\\(.*\\))?\\s*\\B[-=]>", c = {
        cN: "params",
        b: "\\([^\\(]",
        rB: !0,
        c: [ {
            b: /\(/,
            e: /\)/,
            k: t,
            c: [ "self" ].concat(a)
        } ]
    };
    return {
        aliases: [ "coffee", "cson", "iced" ],
        k: t,
        i: /\/\*/,
        c: a.concat([ e.C("###", "###"), e.HCM, {
            cN: "function",
            b: "^\\s*" + r + "\\s*=\\s*" + s,
            e: "[-=]>",
            rB: !0,
            c: [ n, c ]
        }, {
            b: /[:\(,=]\s*/,
            r: 0,
            c: [ {
                cN: "function",
                b: s,
                e: "[-=]>",
                rB: !0,
                c: [ c ]
            } ]
        }, {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [ {
                bK: "extends",
                eW: !0,
                i: /[:="\[\]]/,
                c: [ n ]
            }, n ]
        }, {
            cN: "attribute",
            b: r + ":",
            e: ":",
            rB: !0,
            rE: !0,
            r: 0
        } ])
    };
}), hljs.registerLanguage("cpp", function(e) {
    var t = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary intmax_t uintmax_t int8_t uint8_t int16_t uint16_t int32_t uint32_t  int64_t uint64_t int_least8_t uint_least8_t int_least16_t uint_least16_t int_least32_t uint_least32_t int_least64_t uint_least64_t int_fast8_t uint_fast8_t int_fast16_t uint_fast16_t int_fast32_t uint_fast32_t int_fast64_t uint_fast64_t intptr_t uintptr_t atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong atomic_wchar_t atomic_char16_t atomic_char32_t atomic_intmax_t atomic_uintmax_t atomic_intptr_t atomic_uintptr_t atomic_size_t atomic_ptrdiff_t atomic_int_least8_t atomic_int_least16_t atomic_int_least32_t atomic_int_least64_t atomic_uint_least8_t atomic_uint_least16_t atomic_uint_least32_t atomic_uint_least64_t atomic_int_fast8_t atomic_int_fast16_t atomic_int_fast32_t atomic_int_fast64_t atomic_uint_fast8_t atomic_uint_fast16_t atomic_uint_fast32_t atomic_uint_fast64_t",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
    };
    return {
        aliases: [ "c", "cc", "h", "c++", "h++", "hpp" ],
        k: t,
        i: "</",
        c: [ e.CLCM, e.CBCM, e.QSM, {
            cN: "string",
            b: "'\\\\?.",
            e: "'",
            i: "."
        }, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, e.CNM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line pragma",
            c: [ {
                b: /\\\n/,
                r: 0
            }, {
                b: 'include\\s*[<"]',
                e: '[>"]',
                k: "include",
                i: "\\n"
            }, e.CLCM ]
        }, {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: t,
            c: [ "self" ]
        }, {
            b: e.IR + "::",
            k: t
        }, {
            bK: "new throw return else",
            r: 0
        }, {
            cN: "function",
            b: "(" + e.IR + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [ {
                b: e.IR + "\\s*\\(",
                rB: !0,
                c: [ e.TM ],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [ e.CBCM ]
            }, e.CLCM, e.CBCM ]
        } ]
    };
}), hljs.registerLanguage("cs", function(e) {
    var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield", r = e.IR + "(<" + e.IR + ">)?";
    return {
        aliases: [ "csharp" ],
        k: t,
        i: /::/,
        c: [ e.C("///", "$", {
            rB: !0,
            c: [ {
                cN: "xmlDocTag",
                v: [ {
                    b: "///",
                    r: 0
                }, {
                    b: "\x3c!--|--\x3e"
                }, {
                    b: "</?",
                    e: ">"
                } ]
            } ]
        }), e.CLCM, e.CBCM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {
            cN: "string",
            b: '@"',
            e: '"',
            c: [ {
                b: '""'
            } ]
        }, e.ASM, e.QSM, e.CNM, {
            bK: "class namespace interface",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [ e.TM, e.CLCM, e.CBCM ]
        }, {
            bK: "new return throw await",
            r: 0
        }, {
            cN: "function",
            b: "(" + r + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [ {
                b: e.IR + "\\s*\\(",
                rB: !0,
                c: [ e.TM ],
                r: 0
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [ e.ASM, e.QSM, e.CNM, e.CBCM ]
            }, e.CLCM, e.CBCM ]
        } ]
    };
}), hljs.registerLanguage("css", function(e) {
    var t = "[a-zA-Z-][a-zA-Z0-9_-]*", r = {
        cN: "function",
        b: t + "\\(",
        rB: !0,
        eE: !0,
        e: "\\("
    }, n = {
        cN: "rule",
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [ {
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                cN: "value",
                eW: !0,
                eE: !0,
                c: [ r, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                    cN: "hexcolor",
                    b: "#[0-9A-Fa-f]+"
                }, {
                    cN: "important",
                    b: "!important"
                } ]
            }
        } ]
    };
    return {
        cI: !0,
        i: /[=\/|']/,
        c: [ e.CBCM, n, {
            cN: "id",
            b: /\#[A-Za-z0-9_-]+/
        }, {
            cN: "class",
            b: /\.[A-Za-z0-9_-]+/,
            r: 0
        }, {
            cN: "attr_selector",
            b: /\[/,
            e: /\]/,
            i: "$"
        }, {
            cN: "pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [ {
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [ r, e.ASM, e.QSM, e.CSSNM ]
            } ]
        }, {
            cN: "tag",
            b: t,
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: /\S/,
            r: 0,
            c: [ e.CBCM, n ]
        } ]
    };
}), hljs.registerLanguage("diff", function(e) {
    return {
        aliases: [ "patch" ],
        c: [ {
            cN: "chunk",
            r: 10,
            v: [ {
                b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
            }, {
                b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
            }, {
                b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
            } ]
        }, {
            cN: "header",
            v: [ {
                b: /Index: /,
                e: /$/
            }, {
                b: /=====/,
                e: /=====$/
            }, {
                b: /^\-\-\-/,
                e: /$/
            }, {
                b: /^\*{3} /,
                e: /$/
            }, {
                b: /^\+\+\+/,
                e: /$/
            }, {
                b: /\*{5}/,
                e: /\*{5}$/
            } ]
        }, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {
            cN: "deletion",
            b: "^\\-",
            e: "$"
        }, {
            cN: "change",
            b: "^\\!",
            e: "$"
        } ]
    };
}), hljs.registerLanguage("http", function(e) {
    return {
        aliases: [ "https" ],
        i: "\\S",
        c: [ {
            cN: "status",
            b: "^HTTP/[0-9\\.]+",
            e: "$",
            c: [ {
                cN: "number",
                b: "\\b\\d{3}\\b"
            } ]
        }, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: !0,
            e: "$",
            c: [ {
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            } ]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                cN: "string",
                e: "$"
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: "",
                eW: !0
            }
        } ]
    };
}), hljs.registerLanguage("ini", function(e) {
    return {
        cI: !0,
        i: /\S/,
        c: [ e.C(";", "$"), {
            cN: "title",
            b: "^\\[",
            e: "\\]"
        }, {
            cN: "setting",
            b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
            e: "$",
            c: [ {
                cN: "value",
                eW: !0,
                k: "on off true false yes no",
                c: [ e.QSM, e.NM ],
                r: 0
            } ]
        } ]
    };
}), hljs.registerLanguage("java", function(e) {
    var t = e.UIR + "(<" + e.UIR + ">)?", r = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private";
    return {
        aliases: [ "jsp" ],
        k: r,
        i: /<\//,
        c: [ {
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            r: 0,
            c: [ {
                cN: "javadoctag",
                b: "(^|\\s)@[A-Za-z]+"
            } ]
        }, e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [ {
                bK: "extends implements"
            }, e.UTM ]
        }, {
            bK: "new throw return",
            r: 0
        }, {
            cN: "function",
            b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: r,
            c: [ {
                b: e.UIR + "\\s*\\(",
                rB: !0,
                r: 0,
                c: [ e.UTM ]
            }, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: r,
                r: 0,
                c: [ e.ASM, e.QSM, e.CNM, e.CBCM ]
            }, e.CLCM, e.CBCM ]
        }, {
            cN: "number",
            b: "(\\b(0b[01_]+)|\\b0[xX][a-fA-F0-9_]+|(\\b[\\d_]+(\\.[\\d_]*)?|\\.[\\d_]+)([eE][-+]?\\d+)?)[lLfF]?",
            r: 0
        }, {
            cN: "annotation",
            b: "@[A-Za-z]+"
        } ]
    };
}), hljs.registerLanguage("javascript", function(e) {
    return {
        aliases: [ "js" ],
        k: {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as await",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        },
        c: [ {
            cN: "pi",
            r: 10,
            v: [ {
                b: /^\s*('|")use strict('|")/
            }, {
                b: /^\s*('|")use asm('|")/
            } ]
        }, e.ASM, e.QSM, {
            cN: "string",
            b: "`",
            e: "`",
            c: [ e.BE, {
                cN: "subst",
                b: "\\$\\{",
                e: "\\}"
            } ]
        }, e.CLCM, e.CBCM, {
            cN: "number",
            b: "\\b(0[xXbBoO][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            r: 0
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [ e.CLCM, e.CBCM, e.RM, {
                b: /</,
                e: />\s*[);\]]/,
                r: 0,
                sL: "xml"
            } ],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [ e.inherit(e.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [ e.CLCM, e.CBCM ],
                i: /["'\(]/
            } ],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + e.IR,
            r: 0
        }, {
            bK: "import",
            e: "[;$]",
            k: "import from as",
            c: [ e.ASM, e.QSM ]
        }, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [ {
                bK: "extends"
            }, e.UTM ]
        } ]
    };
}), hljs.registerLanguage("json", function(e) {
    var t = {
        literal: "true false null"
    }, r = [ e.QSM, e.CNM ], n = {
        cN: "value",
        e: ",",
        eW: !0,
        eE: !0,
        c: r,
        k: t
    }, a = {
        b: "{",
        e: "}",
        c: [ {
            cN: "attribute",
            b: '\\s*"',
            e: '"\\s*:\\s*',
            eB: !0,
            eE: !0,
            c: [ e.BE ],
            i: "\\n",
            starts: n
        } ],
        i: "\\S"
    }, e = {
        b: "\\[",
        e: "\\]",
        c: [ e.inherit(n, {
            cN: null
        }) ],
        i: "\\S"
    };
    return r.splice(r.length, 0, a, e), {
        c: r,
        k: t,
        i: "\\S"
    };
}), hljs.registerLanguage("makefile", function(e) {
    var t = {
        cN: "variable",
        b: /\$\(/,
        e: /\)/,
        c: [ e.BE ]
    };
    return {
        aliases: [ "mk", "mak" ],
        c: [ e.HCM, {
            b: /^\w+\s*\W*=/,
            rB: !0,
            r: 0,
            starts: {
                cN: "constant",
                e: /\s*\W*=/,
                eE: !0,
                starts: {
                    e: /$/,
                    r: 0,
                    c: [ t ]
                }
            }
        }, {
            cN: "title",
            b: /^[\w]+:\s*$/
        }, {
            cN: "phony",
            b: /^\.PHONY:/,
            e: /$/,
            k: ".PHONY",
            l: /[\.\w]+/
        }, {
            b: /^\t+/,
            e: /$/,
            r: 0,
            c: [ e.QSM, t ]
        } ]
    };
}), hljs.registerLanguage("xml", function(e) {
    var r = {
        b: /<\?(php)?(?!\w)/,
        e: /\?>/,
        sL: "php",
        subLanguageMode: "continuous"
    }, n = {
        eW: !0,
        i: /</,
        r: 0,
        c: [ r, {
            cN: "attribute",
            b: "[A-Za-z0-9\\._:-]+",
            r: 0
        }, {
            b: "=",
            r: 0,
            c: [ {
                cN: "value",
                c: [ r ],
                v: [ {
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s\/>]+/
                } ]
            } ]
        } ]
    };
    return {
        aliases: [ "html", "xhtml", "rss", "atom", "xsl", "plist" ],
        cI: !0,
        c: [ {
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [ {
                b: "\\[",
                e: "\\]"
            } ]
        }, e.C("\x3c!--", "--\x3e", {
            r: 10
        }), {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [ n ],
            starts: {
                e: "</style>",
                rE: !0,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [ n ],
            starts: {
                e: "<\/script>",
                rE: !0,
                sL: ""
            }
        }, r, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [ {
                cN: "title",
                b: /[^ \/><\n\t]+/,
                r: 0
            }, n ]
        } ]
    };
}), hljs.registerLanguage("markdown", function(e) {
    return {
        aliases: [ "md", "mkdown", "mkd" ],
        c: [ {
            cN: "header",
            v: [ {
                b: "^#{1,6}",
                e: "$"
            }, {
                b: "^.+?\\n[=-]{2,}$"
            } ]
        }, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {
            cN: "bullet",
            b: "^([*+-]|(\\d+\\.))\\s+"
        }, {
            cN: "strong",
            b: "[*_]{2}.+?[*_]{2}"
        }, {
            cN: "emphasis",
            v: [ {
                b: "\\*.+?\\*"
            }, {
                b: "_.+?_",
                r: 0
            } ]
        }, {
            cN: "blockquote",
            b: "^>\\s+",
            e: "$"
        }, {
            cN: "code",
            v: [ {
                b: "`.+?`"
            }, {
                b: "^( {4}|\t)",
                e: "$",
                r: 0
            } ]
        }, {
            cN: "horizontal_rule",
            b: "^[-\\*]{3,}",
            e: "$"
        }, {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [ {
                cN: "link_label",
                b: "\\[",
                e: "\\]",
                eB: !0,
                rE: !0,
                r: 0
            }, {
                cN: "link_url",
                b: "\\]\\(",
                e: "\\)",
                eB: !0,
                eE: !0
            }, {
                cN: "link_reference",
                b: "\\]\\[",
                e: "\\]",
                eB: !0,
                eE: !0
            } ],
            r: 10
        }, {
            b: "^\\[.+\\]:",
            rB: !0,
            c: [ {
                cN: "link_reference",
                b: "\\[",
                e: "\\]:",
                eB: !0,
                eE: !0,
                starts: {
                    cN: "link_url",
                    e: "$"
                }
            } ]
        } ]
    };
}), hljs.registerLanguage("nginx", function(e) {
    var t = {
        cN: "variable",
        v: [ {
            b: /\$\d+/
        }, {
            b: /\$\{/,
            e: /}/
        }, {
            b: "[\\$\\@]" + e.UIR
        } ]
    }, t = {
        eW: !0,
        l: "[a-z/_]+",
        k: {
            built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
        },
        r: 0,
        i: "=>",
        c: [ e.HCM, {
            cN: "string",
            c: [ e.BE, t ],
            v: [ {
                b: /"/,
                e: /"/
            }, {
                b: /'/,
                e: /'/
            } ]
        }, {
            cN: "url",
            b: "([a-z]+):/",
            e: "\\s",
            eW: !0,
            eE: !0,
            c: [ t ]
        }, {
            cN: "regexp",
            c: [ e.BE, t ],
            v: [ {
                b: "\\s\\^",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "~\\*?\\s+",
                e: "\\s|{|;",
                rE: !0
            }, {
                b: "\\*(\\.[a-z\\-]+)+"
            }, {
                b: "([a-z\\-]+\\.)+\\*"
            } ]
        }, {
            cN: "number",
            b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
        }, {
            cN: "number",
            b: "\\b\\d+[kKmMgGdshdwy]*\\b",
            r: 0
        }, t ]
    };
    return {
        aliases: [ "nginxconf" ],
        c: [ e.HCM, {
            b: e.UIR + "\\s",
            e: ";|{",
            rB: !0,
            c: [ {
                cN: "title",
                b: e.UIR,
                starts: t
            } ],
            r: 0
        } ],
        i: "[^\\s\\}]"
    };
}), hljs.registerLanguage("objectivec", function(e) {
    var n = /[a-zA-Z@][a-zA-Z0-9_]*/, a = "@interface @class @protocol @implementation";
    return {
        aliases: [ "m", "mm", "objc", "obj-c" ],
        k: {
            keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
            literal: "false true FALSE TRUE nil YES NO NULL",
            built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
        },
        l: n,
        i: "</",
        c: [ {
            cN: "built_in",
            b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+"
        }, e.CLCM, e.CBCM, e.CNM, e.QSM, {
            cN: "string",
            v: [ {
                b: '@"',
                e: '"',
                i: "\\n",
                c: [ e.BE ]
            }, {
                b: "'",
                e: "[^\\\\]'",
                i: "[^\\\\][^']"
            } ]
        }, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            c: [ {
                cN: "title",
                v: [ {
                    b: '"',
                    e: '"'
                }, {
                    b: "<",
                    e: ">"
                } ]
            } ]
        }, {
            cN: "class",
            b: "(" + a.split(" ").join("|") + ")\\b",
            e: "({|$)",
            eE: !0,
            k: a,
            l: n,
            c: [ e.UTM ]
        }, {
            cN: "variable",
            b: "\\." + e.UIR,
            r: 0
        } ]
    };
}), hljs.registerLanguage("perl", function(e) {
    var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when", r = {
        cN: "subst",
        b: "[$@]\\{",
        e: "\\}",
        k: t
    }, n = {
        b: "->{",
        e: "}"
    }, a = {
        cN: "variable",
        v: [ {
            b: /\$\d/
        }, {
            b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
        }, {
            b: /[\$%@][^\s\w{]/,
            r: 0
        } ]
    }, i = e.C("^(__END__|__DATA__)", "\\n$", {
        r: 5
    }), s = [ e.BE, r, a ], a = [ a, e.HCM, i, e.C("^\\=\\w", "\\=cut", {
        eW: !0
    }), n, {
        cN: "string",
        c: s,
        v: [ {
            b: "q[qwxr]?\\s*\\(",
            e: "\\)",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\[",
            e: "\\]",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\{",
            e: "\\}",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\|",
            e: "\\|",
            r: 5
        }, {
            b: "q[qwxr]?\\s*\\<",
            e: "\\>",
            r: 5
        }, {
            b: "qw\\s+q",
            e: "q",
            r: 5
        }, {
            b: "'",
            e: "'",
            c: [ e.BE ]
        }, {
            b: '"',
            e: '"'
        }, {
            b: "`",
            e: "`",
            c: [ e.BE ]
        }, {
            b: "{\\w+}",
            c: [],
            r: 0
        }, {
            b: "-?\\w+\\s*\\=\\>",
            c: [],
            r: 0
        } ]
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [ e.HCM, i, {
            cN: "regexp",
            b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
            r: 10
        }, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [ e.BE ],
            r: 0
        } ]
    }, {
        cN: "sub",
        bK: "sub",
        e: "(\\s*\\(.*?\\))?[;{]",
        r: 5
    }, {
        cN: "operator",
        b: "-\\w\\b",
        r: 0
    } ];
    return r.c = a, {
        aliases: [ "pl" ],
        k: t,
        c: n.c = a
    };
}), hljs.registerLanguage("php", function(e) {
    var t = {
        cN: "variable",
        b: "\\$+[a-zA-Z_-Ã¿][a-zA-Z0-9_-Ã¿]*"
    }, r = {
        cN: "preprocessor",
        b: /<\?(php)?|\?>/
    }, n = {
        cN: "string",
        c: [ e.BE, r ],
        v: [ {
            b: 'b"',
            e: '"'
        }, {
            b: "b'",
            e: "'"
        }, e.inherit(e.ASM, {
            i: null
        }), e.inherit(e.QSM, {
            i: null
        }) ]
    }, a = {
        v: [ e.BNM, e.CNM ]
    };
    return {
        aliases: [ "php3", "php4", "php5", "php6" ],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [ e.CLCM, e.HCM, e.C("/\\*", "\\*/", {
            c: [ {
                cN: "phpdoc",
                b: "\\s@[A-Za-z]+"
            }, r ]
        }), e.C("__halt_compiler.+?;", !1, {
            eW: !0,
            k: "__halt_compiler",
            l: e.UIR
        }), {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [ e.BE ]
        }, r, t, {
            b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
        }, {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [ e.UTM, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: [ "self", t, e.CBCM, n, a ]
            } ]
        }, {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [ {
                bK: "extends implements"
            }, e.UTM ]
        }, {
            bK: "namespace",
            e: ";",
            i: /[\.']/,
            c: [ e.UTM ]
        }, {
            bK: "use",
            e: ";",
            c: [ e.UTM ]
        }, {
            b: "=>"
        }, n, a ]
    };
}), hljs.registerLanguage("python", function(e) {
    var t = {
        cN: "prompt",
        b: /^(>>>|\.\.\.) /
    }, r = {
        cN: "string",
        c: [ e.BE ],
        v: [ {
            b: /(u|b)?r?'''/,
            e: /'''/,
            c: [ t ],
            r: 10
        }, {
            b: /(u|b)?r?"""/,
            e: /"""/,
            c: [ t ],
            r: 10
        }, {
            b: /(u|r|ur)'/,
            e: /'/,
            r: 10
        }, {
            b: /(u|r|ur)"/,
            e: /"/,
            r: 10
        }, {
            b: /(b|br)'/,
            e: /'/
        }, {
            b: /(b|br)"/,
            e: /"/
        }, e.ASM, e.QSM ]
    }, n = {
        cN: "number",
        r: 0,
        v: [ {
            b: e.BNR + "[lLjJ]?"
        }, {
            b: "\\b(0o[0-7]+)[lLjJ]?"
        }, {
            b: e.CNR + "[lLjJ]?"
        } ]
    };
    return {
        aliases: [ "py", "gyp" ],
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
            built_in: "Ellipsis NotImplemented"
        },
        i: /(<\/|->|\?)/,
        c: [ t, n, r, e.HCM, {
            v: [ {
                cN: "function",
                bK: "def",
                r: 10
            }, {
                cN: "class",
                bK: "class"
            } ],
            e: /:/,
            i: /[${=;\n,]/,
            c: [ e.UTM, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [ "self", t, n, r ]
            } ]
        }, {
            cN: "decorator",
            b: /@/,
            e: /$/
        }, {
            b: /\b(print|exec)\(/
        } ]
    };
}), hljs.registerLanguage("ruby", function(e) {
    var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?", r = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor", n = {
        cN: "yardoctag",
        b: "@[A-Za-z]+"
    }, a = {
        cN: "value",
        b: "#<",
        e: ">"
    }, n = [ e.C("#", "$", {
        c: [ n ]
    }), e.C("^\\=begin", "^\\=end", {
        c: [ n ],
        r: 10
    }), e.C("^__END__", "\\n$") ], s = {
        cN: "subst",
        b: "#\\{",
        e: "}",
        k: r
    }, c = {
        cN: "string",
        c: [ e.BE, s ],
        v: [ {
            b: /'/,
            e: /'/
        }, {
            b: /"/,
            e: /"/
        }, {
            b: /`/,
            e: /`/
        }, {
            b: "%[qQwWx]?\\(",
            e: "\\)"
        }, {
            b: "%[qQwWx]?\\[",
            e: "\\]"
        }, {
            b: "%[qQwWx]?{",
            e: "}"
        }, {
            b: "%[qQwWx]?<",
            e: ">"
        }, {
            b: "%[qQwWx]?/",
            e: "/"
        }, {
            b: "%[qQwWx]?%",
            e: "%"
        }, {
            b: "%[qQwWx]?-",
            e: "-"
        }, {
            b: "%[qQwWx]?\\|",
            e: "\\|"
        }, {
            b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
        } ]
    }, o = {
        cN: "params",
        b: "\\(",
        e: "\\)",
        k: r
    }, c = [ c, a, {
        cN: "class",
        bK: "class module",
        e: "$|;",
        i: /=/,
        c: [ e.inherit(e.TM, {
            b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
        }), {
            cN: "inheritance",
            b: "<\\s*",
            c: [ {
                cN: "parent",
                b: "(" + e.IR + "::)?" + e.IR
            } ]
        } ].concat(n)
    }, {
        cN: "function",
        bK: "def",
        e: " |$|;",
        r: 0,
        c: [ e.inherit(e.TM, {
            b: t
        }), o ].concat(n)
    }, {
        cN: "constant",
        b: "(::)?(\\b[A-Z]\\w*(::)?)+",
        r: 0
    }, {
        cN: "symbol",
        b: e.UIR + "(\\!|\\?)?:",
        r: 0
    }, {
        cN: "symbol",
        b: ":",
        c: [ c, {
            b: t
        } ],
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        cN: "variable",
        b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
    }, {
        b: "(" + e.RSR + ")\\s*",
        c: [ a, {
            cN: "regexp",
            c: [ e.BE, s ],
            i: /\n/,
            v: [ {
                b: "/",
                e: "/[a-z]*"
            }, {
                b: "%r{",
                e: "}[a-z]*"
            }, {
                b: "%r\\(",
                e: "\\)[a-z]*"
            }, {
                b: "%r!",
                e: "![a-z]*"
            }, {
                b: "%r\\[",
                e: "\\][a-z]*"
            } ]
        } ].concat(n),
        r: 0
    } ].concat(n);
    s.c = c, o.c = c;
    return {
        aliases: [ "rb", "gemspec", "podspec", "thor", "irb" ],
        k: r,
        c: n.concat([ {
            b: /^\s*=>/,
            cN: "status",
            starts: {
                e: "$",
                c: c
            }
        }, {
            cN: "prompt",
            b: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>)",
            starts: {
                e: "$",
                c: c
            }
        } ]).concat(c)
    };
}), hljs.registerLanguage("sql", function(e) {
    var t = e.C("--", "$");
    return {
        cI: !0,
        i: /[<>]/,
        c: [ {
            cN: "operator",
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate savepoint release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
            e: /;/,
            eW: !0,
            k: {
                keyword: "abs absolute acos action add adddate addtime aes_decrypt aes_encrypt after aggregate all allocate alter analyze and any are as asc ascii asin assertion at atan atan2 atn2 authorization authors avg backup before begin benchmark between bin binlog bit_and bit_count bit_length bit_or bit_xor both by cache call cascade cascaded case cast catalog ceil ceiling chain change changed char_length character_length charindex charset check checksum checksum_agg choose close coalesce coercibility collate collation collationproperty column columns columns_updated commit compress concat concat_ws concurrent connect connection connection_id consistent constraint constraints continue contributors conv convert convert_tz corresponding cos cot count count_big crc32 create cross cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime data database databases datalength date_add date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts datetimeoffsetfromparts day dayname dayofmonth dayofweek dayofyear deallocate declare decode default deferrable deferred degrees delayed delete des_decrypt des_encrypt des_key_file desc describe descriptor diagnostics difference disconnect distinct distinctrow div do domain double drop dumpfile each else elt enclosed encode encrypt end end-exec engine engines eomonth errors escape escaped event eventdata events except exception exec execute exists exp explain export_set extended external extract fast fetch field fields find_in_set first first_value floor flush for force foreign format found found_rows from from_base64 from_days from_unixtime full function get get_format get_lock getdate getutcdate global go goto grant grants greatest group group_concat grouping grouping_id gtid_subset gtid_subtract handler having help hex high_priority hosts hour ident_current ident_incr ident_seed identified identity if ifnull ignore iif ilike immediate in index indicator inet6_aton inet6_ntoa inet_aton inet_ntoa infile initially inner innodb input insert install instr intersect into is is_free_lock is_ipv4 is_ipv4_compat is_ipv4_mapped is_not is_not_null is_used_lock isdate isnull isolation join key kill language last last_day last_insert_id last_value lcase lead leading least leaves left len lenght level like limit lines ln load load_file local localtime localtimestamp locate lock log log10 log2 logfile logs low_priority lower lpad ltrim make_set makedate maketime master master_pos_wait match matched max md5 medium merge microsecond mid min minute mod mode module month monthname mutex name_const names national natural nchar next no no_write_to_binlog not now nullif nvarchar oct octet_length of old_password on only open optimize option optionally or ord order outer outfile output pad parse partial partition password patindex percent_rank percentile_cont percentile_disc period_add period_diff pi plugin position pow power pragma precision prepare preserve primary prior privileges procedure procedure_analyze processlist profile profiles public publishingservername purge quarter query quick quote quotename radians rand read references regexp relative relaylog release release_lock rename repair repeat replace replicate reset restore restrict return returns reverse revoke right rlike rollback rollup round row row_count rows rpad rtrim savepoint schema scroll sec_to_time second section select serializable server session session_user set sha sha1 sha2 share show sign sin size slave sleep smalldatetimefromparts snapshot some soname soundex sounds_like space sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sql_variant_property sqlstate sqrt square start starting status std stddev stddev_pop stddev_samp stdev stdevp stop str str_to_date straight_join strcmp string stuff subdate substr substring subtime subtring_index sum switchoffset sysdate sysdatetime sysdatetimeoffset system_user sysutcdatetime table tables tablespace tan temporary terminated tertiary_weights then time time_format time_to_sec timediff timefromparts timestamp timestampadd timestampdiff timezone_hour timezone_minute to to_base64 to_days to_seconds todatetimeoffset trailing transaction translation trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse ucase uncompress uncompressed_length unhex unicode uninstall union unique unix_timestamp unknown unlock update upgrade upped upper usage use user user_resources using utc_date utc_time utc_timestamp uuid uuid_short validate_password_strength value values var var_pop var_samp variables variance varp version view warnings week weekday weekofyear weight_string when whenever where with work write xml xor year yearweek zon",
                literal: "true false null",
                built_in: "array bigint binary bit blob boolean char character date dec decimal float int integer interval number numeric real serial smallint varchar varying int8 serial8 text"
            },
            c: [ {
                cN: "string",
                b: "'",
                e: "'",
                c: [ e.BE, {
                    b: "''"
                } ]
            }, {
                cN: "string",
                b: '"',
                e: '"',
                c: [ e.BE, {
                    b: '""'
                } ]
            }, {
                cN: "string",
                b: "`",
                e: "`",
                c: [ e.BE ]
            }, e.CNM, e.CBCM, t ]
        }, e.CBCM, t ]
    };
}), jQuery(function($) {
    var posts, url, searchInput, searchButton, searchResult, popular, options = {
        shouldSort: !1,
        tokenize: !0,
        matchAllTokens: !0,
        threshold: 0,
        maxPatternLength: 32,
        ignoreLocation: !0,
        minMatchCharLength: 1,
        keys: [ {
            name: "title"
        }, {
            name: "excerpt"
        } ]
    }, html = (pangu.autoSpacingPage(), $("html")), viewport = $(window);
    function menu() {
        html.toggleClass("menu-active");
    }
    $("#menu").on({
        click: function() {
            menu();
        }
    }), $(".nav-menu").on({
        click: function() {
            menu();
        }
    }), $(".nav-close").on({
        click: function() {
            menu();
        }
    }), viewport.on({
        resize: function() {
            html.removeClass("menu-active");
        },
        orientationchange: function() {
            html.removeClass("menu-active");
        }
    }), "undefined" != typeof gh_search_key && "" != gh_search_key && (html.addClass("has-search"), 
    searchInput = $(".search-field"), searchButton = $(".search-button"), searchResult = $(".search-result"), 
    popular = $(".popular-wrapper"), url = siteUrl + "/ghost/api/v3/content/posts/?key=" + gh_search_key + "&limit=all&fields=id,title,excerpt,url,updated_at,visibility&order=updated_at%20desc&formats=plaintext", 
    searchInput.on("keyup", function(e) {
        var output = "";
        fuse = new Fuse(posts, options), (result = fuse.search(e.target.value)).forEach(function(post) {
            output += '<div class="search-result-row"><a class="search-result-row-link" href="' + post.item.url + '"><div class="search-result-row-title">' + post.item.title + '</div><div class="search-result-row-excerpt">' + post.item.excerpt + "</div></a></div>", 
            console.log(post);
        }), searchResult.html(output), 0 < e.target.value.length ? searchButton.addClass("search-button-clear") : searchButton.removeClass("search-button-clear"), 
        0 < result.length ? popular.hide() : popular.show();
    }), $(".search-form").on("submit", function(e) {
        e.preventDefault();
    }), searchButton.on("click", function() {
        $(this).hasClass("search-button-clear") && searchInput.val("").focus().keyup();
    })), function() {
        var modalOverlay = $(".search-wrapper"), modal = $(".search"), modalInput = $(".search-field");
        $(".nav-search").on("click", function(e) {
            e.preventDefault(), modalOverlay.show().outerWidth(), html.addClass("search-active"), 
            modalInput.focus(), $.get(url, function(data) {
                console.log(""), 0 < data.posts.length && (posts = data.posts);
            }), html.hasClass("menu-active") && html.removeClass("menu-active");
        }), $(".search-wrapper-close, .search-wrapper").on("click", function() {
            html.removeClass("search-active");
        }), modal.on("click", function(e) {
            e.stopPropagation();
        }), $(document).keyup(function(e) {
            27 === e.keyCode && html.hasClass("search-active") && (html.removeClass("search-active"), 
            modalInput.val("").keyup());
        }), modalOverlay.on("transitionend", function(e) {
            html.hasClass("search-active") || modalOverlay.hide();
        }), modal.on("transitionend", function(e) {
            e.stopPropagation();
        });
    }();
    var cover = $(".cover"), coverPosition = 0;
    function prlx() {
        var windowPosition;
        1 <= cover.length && (windowPosition = viewport.scrollTop(), coverPosition = 0 < windowPosition ? Math.floor(.25 * windowPosition) : 0, 
        cover.css({
            "-webkit-transform": "translate3d(0, " + coverPosition + "px, 0)",
            transform: "translate3d(0, " + coverPosition + "px, 0)"
        }), viewport.scrollTop() < cover.height() ? html.addClass("cover-active") : html.removeClass("cover-active"));
    }
    prlx(), viewport.on({
        scroll: function() {
            prlx();
        },
        resize: function() {
            prlx();
        },
        orientationchange: function() {
            prlx();
        }
    }), document.querySelectorAll(".kg-gallery-image img").forEach(function(image) {
        var container = image.closest(".kg-gallery-image"), width = image.attributes.width.value, image = image.attributes.height.value;
        container.style.flex = width / image + " 1 0%";
    });
    var toggle = $(".js-theme"), toggleText = toggle.find(".theme-text");
    function system() {
        html.removeClass([ "theme-dark", "theme-light" ]), localStorage.removeItem("attila_theme"), 
        toggleText.text(toggle.attr("data-system"));
    }
    function dark() {
        html.removeClass("theme-light").addClass("theme-dark"), localStorage.setItem("attila_theme", "dark"), 
        toggleText.text(toggle.attr("data-dark"));
    }
    function light() {
        html.removeClass("theme-dark").addClass("theme-light"), localStorage.setItem("attila_theme", "light"), 
        toggleText.text(toggle.attr("data-light"));
    }
    switch (localStorage.getItem("attila_theme")) {
      case "dark":
        dark();
        break;

      case "light":
        light();
        break;

      default:
        system();
    }
    toggle.on("click", function(e) {
        e.preventDefault(), (html.hasClass("theme-dark") || html.hasClass("theme-light") ? html.hasClass("theme-dark") ? light : system : dark)();
    });
});
//# sourceMappingURL=script.js.map
/*! attila 最后修改于： 2022-06-28 */