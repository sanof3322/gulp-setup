"use strict";

/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";

  var _t = function t() {
    return _t = Object.assign || function (t) {
      for (var e, n = 1, r = arguments.length; n < r; n++) {
        for (var o in e = arguments[n]) {
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }
      }

      return t;
    }, _t.apply(this, arguments);
  };

  function e(t, e, n, r) {
    return new (n || (n = Promise))(function (o, i) {
      function a(t) {
        try {
          c(r.next(t));
        } catch (t) {
          i(t);
        }
      }

      function u(t) {
        try {
          c(r.throw(t));
        } catch (t) {
          i(t);
        }
      }

      function c(t) {
        t.done ? o(t.value) : new n(function (e) {
          e(t.value);
        }).then(a, u);
      }

      c((r = r.apply(t, e || [])).next());
    });
  }

  function n(t, e) {
    var n,
        r,
        o,
        i,
        a = {
      label: 0,
      sent: function sent() {
        if (1 & o[0]) throw o[1];
        return o[1];
      },
      trys: [],
      ops: []
    };
    return i = {
      next: u(0),
      throw: u(1),
      return: u(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
      return this;
    }), i;

    function u(i) {
      return function (u) {
        return function (i) {
          if (n) throw new TypeError("Generator is already executing.");

          for (; a;) {
            try {
              if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

              switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                case 0:
                case 1:
                  o = i;
                  break;

                case 4:
                  return a.label++, {
                    value: i[1],
                    done: !1
                  };

                case 5:
                  a.label++, r = i[1], i = [0];
                  continue;

                case 7:
                  i = a.ops.pop(), a.trys.pop();
                  continue;

                default:
                  if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                    a = 0;
                    continue;
                  }

                  if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                    a.label = i[1];
                    break;
                  }

                  if (6 === i[0] && a.label < o[1]) {
                    a.label = o[1], o = i;
                    break;
                  }

                  if (o && a.label < o[2]) {
                    a.label = o[2], a.ops.push(i);
                    break;
                  }

                  o[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }

              i = e.call(t, a);
            } catch (t) {
              i = [6, t], r = 0;
            } finally {
              n = o = 0;
            }
          }

          if (5 & i[0]) throw i[1];
          return {
            value: i[0] ? i[1] : void 0,
            done: !0
          };
        }([i, u]);
      };
    }
  }

  var r = function t(e, n, r) {
    return e instanceof RegExp ? function (t, e) {
      if (!e) return t;
      var n = t.source.match(/\((?!\?)/g);
      if (n) for (var r = 0; r < n.length; r++) {
        e.push({
          name: r,
          prefix: null,
          delimiter: null,
          optional: !1,
          repeat: !1,
          pattern: null
        });
      }
      return t;
    }(e, n) : Array.isArray(e) ? function (e, n, r) {
      for (var o = [], i = 0; i < e.length; i++) {
        o.push(t(e[i], n, r).source);
      }

      return new RegExp("(?:" + o.join("|") + ")", p(r));
    }(e, n, r) : function (t, e, n) {
      return d(c(t, n), e, n);
    }(e, n, r);
  },
      o = c,
      i = s,
      a = d,
      u = new RegExp(["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"), "g");

  function c(t, e) {
    for (var n, r = [], o = 0, i = 0, a = "", c = e && e.delimiter || "/", s = e && e.whitelist || void 0, p = !1; null !== (n = u.exec(t));) {
      var d = n[0],
          h = n[1],
          v = n.index;
      if (a += t.slice(i, v), i = v + d.length, h) a += h[1], p = !0;else {
        var w = "",
            g = n[2],
            m = n[3],
            b = n[4],
            y = n[5];

        if (!p && a.length) {
          var x = a.length - 1,
              E = a[x];
          (!s || s.indexOf(E) > -1) && (w = E, a = a.slice(0, x));
        }

        a && (r.push(a), a = "", p = !1);
        var k = "+" === y || "*" === y,
            R = "?" === y || "*" === y,
            A = m || b,
            C = w || c;
        r.push({
          name: g || o++,
          prefix: w,
          delimiter: C,
          optional: R,
          repeat: k,
          pattern: A ? f(A) : "[^" + l(C === c ? C : C + c) + "]+?"
        });
      }
    }

    return (a || i < t.length) && r.push(a + t.substr(i)), r;
  }

  function s(t, e) {
    for (var n = new Array(t.length), r = 0; r < t.length; r++) {
      "object" == typeof t[r] && (n[r] = new RegExp("^(?:" + t[r].pattern + ")$", p(e)));
    }

    return function (e, r) {
      for (var o = "", i = r && r.encode || encodeURIComponent, a = !r || !1 !== r.validate, u = 0; u < t.length; u++) {
        var c = t[u];

        if ("string" != typeof c) {
          var s,
              l = e ? e[c.name] : void 0;

          if (Array.isArray(l)) {
            if (!c.repeat) throw new TypeError('Expected "' + c.name + '" to not repeat, but got array');

            if (0 === l.length) {
              if (c.optional) continue;
              throw new TypeError('Expected "' + c.name + '" to not be empty');
            }

            for (var f = 0; f < l.length; f++) {
              if (s = i(l[f], c), a && !n[u].test(s)) throw new TypeError('Expected all "' + c.name + '" to match "' + c.pattern + '"');
              o += (0 === f ? c.prefix : c.delimiter) + s;
            }
          } else if ("string" != typeof l && "number" != typeof l && "boolean" != typeof l) {
            if (!c.optional) throw new TypeError('Expected "' + c.name + '" to be ' + (c.repeat ? "an array" : "a string"));
          } else {
            if (s = i(String(l), c), a && !n[u].test(s)) throw new TypeError('Expected "' + c.name + '" to match "' + c.pattern + '", but got "' + s + '"');
            o += c.prefix + s;
          }
        } else o += c;
      }

      return o;
    };
  }

  function l(t) {
    return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }

  function f(t) {
    return t.replace(/([=!:$/()])/g, "\\$1");
  }

  function p(t) {
    return t && t.sensitive ? "" : "i";
  }

  function d(t, e, n) {
    for (var r = (n = n || {}).strict, o = !1 !== n.start, i = !1 !== n.end, a = n.delimiter || "/", u = [].concat(n.endsWith || []).map(l).concat("$").join("|"), c = o ? "^" : "", s = 0; s < t.length; s++) {
      var f = t[s];
      if ("string" == typeof f) c += l(f);else {
        var d = f.repeat ? "(?:" + f.pattern + ")(?:" + l(f.delimiter) + "(?:" + f.pattern + "))*" : f.pattern;
        e && e.push(f), f.optional ? f.prefix ? c += "(?:" + l(f.prefix) + "(" + d + "))?" : c += "(" + d + ")?" : c += l(f.prefix) + "(" + d + ")";
      }
    }

    if (i) r || (c += "(?:" + l(a) + ")?"), c += "$" === u ? "$" : "(?=" + u + ")";else {
      var h = t[t.length - 1],
          v = "string" == typeof h ? h[h.length - 1] === a : void 0 === h;
      r || (c += "(?:" + l(a) + "(?=" + u + "))?"), v || (c += "(?=" + l(a) + "|" + u + ")");
    }
    return new RegExp(c, p(n));
  }

  r.parse = o, r.compile = function (t, e) {
    return s(c(t, e), e);
  }, r.tokensToFunction = i, r.tokensToRegExp = a;

  var h,
      v = {
    bindClick: !0
  },
      w = /\/*$/,
      g = function g(r) {
    var o = function o(i, a, u) {
      return e(void 0, void 0, void 0, function () {
        var e, c, s, l, f, p, d, h;
        return n(this, function (n) {
          switch (n.label) {
            case 0:
              if (!(i.length > 0)) return [3, 2];

              if (e = i[0], c = {}, s = [], l = u.split("?")[0], f = l.match(e.path)) {
                for (p = 0, p = 0; p < e.paramNames.length; p++) {
                  c[e.paramNames[p].name] = f[p + 1];
                }

                if (p < f.length) for (d = p; d < f.length; d++) {
                  s.push(f[d]);
                }
              }

              return h = function (e) {
                var n = e.path,
                    r = e.params,
                    o = e.splats,
                    i = n.split("?"),
                    a = (i[0], (i[1] || "").split("&").reduce(function (e, n) {
                  var r,
                      o = n.split("="),
                      i = o[0],
                      a = o[1];
                  return i ? _t(_t({}, e), ((r = {})[decodeURIComponent(i)] = decodeURIComponent(a), r)) : e;
                }, {})),
                    u = !1,
                    c = {
                  get: function get(t, e) {
                    return c.params && void 0 !== c.params[t] ? c.params[t] : c.query && t in c.query ? c.query[t] : void 0 !== e ? e : void 0;
                  },
                  path: n,
                  params: r,
                  splats: o,
                  query: a,
                  stop: function stop() {
                    u = !0;
                  },
                  isStopped: function isStopped() {
                    return u;
                  }
                };
                return c;
              }({
                path: u,
                params: c,
                splats: s
              }), [4, e.callback(h, r)];

            case 1:
              if (n.sent(), !h.isStopped() && i.length > 1) return [2, o(i.slice(1), a, u)];
              n.label = 2;

            case 2:
              return a.length > 0 ? [4, a[0](r)] : [3, 4];

            case 3:
              if (n.sent(), a.length > 1) return [2, o([], a.slice(1), u)];
              n.label = 4;

            case 4:
              return [2, Promise.resolve()];
          }
        });
      });
    };

    return o;
  },
      m = {
    ignoreCase: !1,
    basePath: "/",
    engine: (void 0 === h && (h = {}), function () {
      var r,
          o = _t(_t({}, v), h),
          i = [],
          a = [],
          u = null,
          c = function c(t) {
        return e(void 0, void 0, void 0, function () {
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, i.reduce(function (e, n) {
                  return e.then(function () {
                    return n(t);
                  });
                }, Promise.resolve())];

              case 1:
                return e.sent(), [2];
            }
          });
        });
      },
          s = function s(t) {
        return e(void 0, void 0, void 0, function () {
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, a.reduce(function (e, n) {
                  return e.then(function () {
                    return n(t);
                  });
                }, Promise.resolve())];

              case 1:
                return e.sent(), [2];
            }
          });
        });
      },
          l = function l(t) {
        for (var e = t.target; e && "A" !== e.nodeName.toUpperCase();) {
          e = e.parentNode;
        }

        if (e && "A" === e.nodeName.toUpperCase()) {
          if (e.hasAttribute("data-routerjs-ignore") || e.hasAttribute("download") || e.hasAttribute("target") || "external" === e.getAttribute("rel")) return;
          var n = e.getAttribute("href");
          if (n && (function (t) {
            return new URL(t, window.location.origin).origin !== window.location.origin;
          }(n) || 0 === n.indexOf("mailto:") || 0 === n.indexOf("tel:"))) return;
          t.preventDefault(), r.navigate(e.pathname);
        }
      },
          f = function f(t) {
        return e(void 0, void 0, void 0, function () {
          var t;
          return n(this, function (e) {
            switch (e.label) {
              case 0:
                return t = window.location.pathname, null === u ? [3, 2] : [4, s(u)];

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return u = t, [4, c(t)];

              case 3:
                return e.sent(), [2];
            }
          });
        });
      };

      return r = {
        setup: function setup() {
          window.addEventListener("popstate", f), o.bindClick && window.addEventListener("click", l);
        },
        teardown: function teardown() {
          window.removeEventListener("popstate", f), window.removeEventListener("click", l);
        },
        addRouteChangeHandler: function addRouteChangeHandler(t) {
          i.push(t);
        },
        addRouteExitHandler: function addRouteExitHandler(t) {
          a.push(t);
        },
        navigate: function navigate(t) {
          return e(void 0, void 0, void 0, function () {
            return n(this, function (e) {
              switch (e.label) {
                case 0:
                  return "" + window.location.pathname + window.location.search === t ? [3, 4] : null === u ? [3, 2] : [4, s(u)];

                case 1:
                  e.sent(), e.label = 2;

                case 2:
                  return u = t, window.history.pushState({}, "", t), [4, c(t)];

                case 3:
                  e.sent(), e.label = 4;

                case 4:
                  return [2];
              }
            });
          });
        },
        back: function back() {
          window.history.back();
        },
        forward: function forward() {
          window.history.forward();
        },
        go: function go(t) {
          window.history.go(t);
        },
        setLocation: function setLocation(t) {
          window.location.pathname !== t && window.history.pushState({}, "", t);
        },
        run: function run(t) {
          var e = "" + window.location.pathname + window.location.search,
              n = t || e;
          e !== n && window.history.pushState({}, "", n), c(n);
        }
      };
    })
  };

  window.app = {
    loginTPL: () => '\n        <div class="row">\n            <div class="col-md-3"></div>\n            <div class="col">\n                <div class="card bg-light mb-3 mt-3">\n                    <div class="card-header">Log In</div>\n                    <div class="card-body">\n                    <h4 class="card-title">Light card title</h4>\n                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>\n                    </div>\n                </div>\n            </div>\n            <div class="col-md-3">\n                <button class="btn btn-primary" onclick="router.navigate(\'/cd\')">Go to CD</button>\n            </div>\n        </div>\n        ',

    init() {
      $("#main-content").html(this.loginTPL());
    }

  }, window.router = function (o) {
    var i = {
      routes: [],
      exits: []
    },
        a = [],
        u = new Map(),
        c = _t(_t({}, m), void 0),
        s = c.engine(),
        l = c.basePath.replace(w, ""),
        f = new RegExp("^" + l);

    u.set(500, [function (t, e) {
      console && console.error && (console.error('500 - path: "' + e.path + '"'), console.error(t));
    }]), u.set(404, [function (t, e) {
      console && console.warn && (console.warn('404 - path: "' + e.path + '"'), console.warn(t));
    }]);

    var p = function p(t) {
      return function (e) {
        var n = e.statusCode,
            r = void 0 === n ? 500 : n,
            o = u.get(r),
            i = u.get("*");
        if (!o && !i) throw e;
        o && o.length > 0 && o.forEach(function (n) {
          n(e, t);
        }), i && i.length > 0 && i.forEach(function (n) {
          n(e, t);
        });
      };
    },
        d = function d(t) {
      return function (r) {
        return e(void 0, void 0, void 0, function () {
          var e, o, u, c, s, l, d, h, v;
          return n(this, function (n) {
            switch (n.label) {
              case 0:
                for (e = i[t], o = [], u = "" === (u = r.replace(f, "")) ? "/" : u, c = "" === (c = (c = r.split("?")[0]).replace(f, "")) ? "/" : c, s = 0, l = e.length; s < l; s++) {
                  e[s].path.test(c) && o.push(s);
                }

                return d = function (t) {
                  var e = {
                    path: t,
                    set: function set(t, n) {
                      e[t] = n;
                    }
                  };
                  return e;
                }(u), "routes" !== t || 0 !== o.length ? [3, 1] : ((h = new Error('Path "' + u + '" not matched')).statusCode = 404, p(d)(h), [3, 4]);

              case 1:
                return n.trys.push([1, 3,, 4]), [4, g(d)(o.map(function (t) {
                  return e[t];
                }), a, u)];

              case 2:
                return n.sent(), [3, 4];

              case 3:
                return v = n.sent(), p(d)(v), [3, 4];

              case 4:
                return [2];
            }
          });
        });
      };
    };

    s.setup(), s.addRouteChangeHandler(d("routes")), s.addRouteExitHandler(d("exits"));

    var h = function h(t) {
      return function (e, n) {
        if (!n) throw new Error('Missing callback for path "' + e + '"');
        var o = i[t],
            a = [],
            u = r(e, a, {
          sensitive: !c.ignoreCase,
          strict: !1
        });
        o.push({
          url: e,
          path: u,
          paramNames: a,
          callback: n
        });
      };
    },
        v = {
      get: function get(t, e) {
        return h("routes")(t, e), v;
      },
      exit: function exit(t, e) {
        return h("exits")(t, e), v;
      },
      always: function always(t) {
        if (!t) throw new Error('A callback is mandatory when defining an "always" callback!');
        return a.push(t), v;
      },
      error: function error(t, e) {
        return u.set(t, function () {
          for (var t = 0, e = 0, n = arguments.length; e < n; e++) {
            t += arguments[e].length;
          }

          var r = Array(t),
              o = 0;

          for (e = 0; e < n; e++) {
            for (var i = arguments[e], a = 0, u = i.length; a < u; a++, o++) {
              r[o] = i[a];
            }
          }

          return r;
        }(u.get(t) || [], [e])), v;
      },
      run: function run(t) {
        return s.run(t), v;
      },
      teardown: function teardown() {
        return s.teardown(), v;
      },
      navigate: s.navigate,
      go: s.go,
      back: s.back,
      forward: s.forward,
      setLocation: s.setLocation,
      buildUrl: function buildUrl(t) {
        return "" + l + t;
      },
      getOptions: function getOptions() {
        return _t(_t({}, c), {
          basePath: l,
          engine: void 0
        });
      },
      _getOptions: function _getOptions() {
        return console.warn("@deprecated _getOptions is deprecated, use getOptions instead"), v.getOptions();
      },
      _showRoutes: function _showRoutes() {
        console.log(i);
      }
    };

    return v;
  }().get("/", () => {
    app.init();
  }).get("/cd", () => {
    alert("cd");
  }).error("*", (t, e) => {
    alert("error");
  }).error(404, (t, e) => {
    console.log("Route ".concat(e.path, " not found"));
  }).run();
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
"use strict";