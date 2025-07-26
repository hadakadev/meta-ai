(function (e) {
  function t(t) {
    for (
      var s, o, c = t[0], r = t[1], l = t[2], b = 0, u = [];
      b < c.length;
      b++
    )
      (o = c[b]),
        Object.prototype.hasOwnProperty.call(n, o) && n[o] && u.push(n[o][0]),
        (n[o] = 0);
    for (s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    d && d(t);
    while (u.length) u.shift()();
    return a.push.apply(a, l || []), i();
  }
  function i() {
    for (var e, t = 0; t < a.length; t++) {
      for (var i = a[t], s = !0, c = 1; c < i.length; c++) {
        var r = i[c];
        0 !== n[r] && (s = !1);
      }
      s && (a.splice(t--, 1), (e = o((o.s = i[0]))));
    }
    return e;
  }
  var s = {},
    n = { app: 0 },
    a = [];
  function o(t) {
    if (s[t]) return s[t].exports;
    var i = (s[t] = { i: t, l: !1, exports: {} });
    return e[t].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.m = e),
    (o.c = s),
    (o.d = function (e, t, i) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (o.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          o.d(
            i,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return i;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    r = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var l = 0; l < c.length; l++) t(c[l]);
  var d = r;
  a.push([1, "chunk-vendors"]), i();
})({
  0: function (e, t) {},
  "00ac": function (e, t, i) {},
  "0381": function (e, t, i) {},
  "056d": function (e, t, i) {},
  1: function (e, t, i) {
    e.exports = i("56d7");
  },
  "100e": function (e, t, i) {},
  1275: function (e, t, i) {},
  "1adf": function (e, t, i) {
    "use strict";
    i("5447");
  },
  "1bb3": function (e, t, i) {
    "use strict";
    i("3354");
  },
  "1e92": function (e, t, i) {
    "use strict";
    i("056d");
  },
  "1f8a": function (e, t, i) {
    "use strict";
    i("100e");
  },
  2: function (e, t) {},
  "20fc": function (e, t, i) {},
  2184: function (e, t, i) {
    "use strict";
    i("ffc5");
  },
  "2d67": function (e, t, i) {},
  "2dfe": function (e, t, i) {
    "use strict";
    i("0381");
  },
  3354: function (e, t, i) {},
  "3d85": function (e, t, i) {
    "use strict";
    i("d055");
  },
  4678: function (e, t, i) {
    var s = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-ps": "4c98",
      "./ar-ps.js": "4c98",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku-kmr": "7558",
      "./ku-kmr.js": "7558",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function n(e) {
      var t = a(e);
      return i(t);
    }
    function a(e) {
      if (!i.o(s, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return s[e];
    }
    (n.keys = function () {
      return Object.keys(s);
    }),
      (n.resolve = a),
      (e.exports = n),
      (n.id = "4678");
  },
  "491b": function (e, t, i) {},
  "4d8b": function (e, t, i) {
    "use strict";
    i("ba03");
  },
  "4f7c": function (e, t, i) {},
  "501f": function (e, t, i) {
    "use strict";
    i("491b");
  },
  "510d": function (e, t, i) {
    "use strict";
    i("999d");
  },
  5447: function (e, t, i) {},
  "56d7": function (e, t, i) {
    "use strict";
    i.r(t);
    var s = i("7a23");
    function n(e, t, i, n, a, o) {
      const c = Object(s["I"])("router-view");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", null, [
          Object(s["l"])(c, null, {
            default: Object(s["Q"])(({ Component: e, route: t }) => [
              Object(s["l"])(
                s["c"],
                { name: "Home" === t.name ? "" : "route", mode: "out-in" },
                {
                  default: Object(s["Q"])(() => [
                    (Object(s["B"])(), Object(s["f"])(Object(s["J"])(e))),
                  ]),
                  _: 2,
                },
                1032,
                ["name"]
              ),
            ]),
            _: 1,
          }),
        ])
      );
    }
    var a = { name: "App", components: {} },
      o = i("6b0d"),
      c = i.n(o);
    const r = c()(a, [["render", n]]);
    var l = r,
      d = (i("7e7d"), i("6605"));
    const b = { class: "content" },
      u = Object(s["i"])(
        "video",
        { autoplay: "", muted: "", playsinline: "", loop: "", height: "230" },
        [
          Object(s["i"])("source", {
            src: "videos/Holo-hevc-safari.mp4",
            type: "video/mp4;codecs=hvc1",
          }),
          Object(s["i"])("source", {
            src: "videos/Holo-vp9-chrome.webm",
            type: "video/webm",
          }),
        ],
        -1
      ),
      p = Object(s["i"])("div", { class: "sep" }, null, -1),
      h = { class: "loader" },
      m = { key: 0, class: "progress-status" },
      O = { key: 1, class: "progress-status" },
      j = Object(s["i"])("div", { class: "version" }, "v 246.4b048 7a30", -1),
      g = { key: 0, id: "popup-yt" },
      v = { class: "popup-yt-content" },
      f = Object(s["i"])(
        "svg",
        { class: "ico" },
        [Object(s["i"])("use", { "xlink:href": "#ico-more" })],
        -1
      ),
      y = [f],
      w = Object(s["i"])(
        "iframe",
        {
          class: "popup-video",
          src: "https://www.youtube.com/embed/SZ7kLvWPiqE",
          height: "100%",
          allowfullscreen: "allowfullscreen",
        },
        null,
        -1
      ),
      _ = { class: "container topBar row" },
      k = { class: "left row load-hidden" },
      C = Object(s["i"])(
        "div",
        { class: "logo" },
        [
          Object(s["i"])("svg", { class: "ico" }, [
            Object(s["i"])("use", { "xlink:href": "#ico-logo" }),
          ]),
        ],
        -1
      ),
      I = { class: "dropdown-container" },
      S = { class: "dropdown-toggle" },
      A = { class: "language-active" },
      M = Object(s["i"])(
        "div",
        { class: "dropdown-arrow" },
        [
          Object(s["i"])("svg", { class: "ico" }, [
            Object(s["i"])("use", { "xlink:href": "#ico-arrow" }),
          ]),
        ],
        -1
      ),
      x = { class: "dropdown-menu" },
      T = ["onClick"],
      B = Object(s["i"])("span", null, null, -1),
      P = Object(s["i"])(
        "div",
        { class: "btn-burger" },
        [
          Object(s["i"])("span", { class: "btn-burger-title" }, "Menu"),
          Object(s["i"])("div", { class: "cross" }, [
            Object(s["i"])("span"),
            Object(s["i"])("span"),
          ]),
        ],
        -1
      ),
      L = { class: "menu row" },
      $ = { class: "load-hidden" },
      E = { href: "#hub" },
      D = { class: "social load-hidden" },
      U = { class: "social-link" },
      N = { class: "social-link" },
      R = { class: "social-link" },
      W = { class: "social-link" },
      F = { class: "social-link" },
      q = { class: "social-link" },
      z = { key: 0, class: "headerBanner" },
      H = Object(s["i"])(
        "img",
        {
          src: "images/site/maze-light.png",
          alt: "Light effect with a maze pattern",
          class: "background-light left ligh-1",
        },
        null,
        -1
      ),
      V = Object(s["i"])(
        "video",
        { autoplay: "", muted: "", playsinline: "" },
        [
          Object(s["i"])("source", {
            src: "videos/Intro-hevc-safari.mp4",
            type: "video/mp4;codecs=hvc1",
          }),
          Object(s["i"])("source", {
            src: "videos/Intro-vp9-chrome.webm",
            type: "video/webm",
          }),
        ],
        -1
      ),
      G = Object(s["i"])(
        "div",
        { class: "bannerLogo load-hidden-header-text" },
        null,
        -1
      ),
      Y = [H, V, G],
      Z = { class: "container btns-home" },
      K = { class: "fixed-btn load-hidden-bigBtn" },
      Q = Object(s["i"])(
        "a",
        { class: "btn btn-big", href: "#hub" },
        [
          Object(s["i"])("div", { class: "text" }, [
            Object(s["i"])("span", null, Object(s["M"])("METAHUB")),
          ]),
          // Object(s["i"])("div", { class: "icon" }, [
          //   Object(s["i"])("img", {
          //     src: "/images/site/ico_mint.png",
          //     alt: "",
          //   }),
          // ]),
        ],
        -1
      ),
      J = { class: "text" },
      X = { class: "sub-text" },
      ee = Object(s["i"])(
        "div",
        { class: "icon" },
        [
          Object(s["i"])("svg", { class: "ico" }, [
            Object(s["i"])("use", { "xlink:href": "#ico-play" }),
          ]),
        ],
        -1
      ),
      te = {
        class: "btn btn-big btn-big-secondary",
        href: "https://memes.endangeredlabs.io/",
        target: "_blank",
      },
      ie = { class: "text" },
      se = Object(s["i"])(
        "div",
        { class: "icon" },
        [Object(s["i"])("img", { src: "/images/site/ico_meme.png" })],
        -1
      ),
      ne = {
        class: "btn btn-big btn-big-secondary",
        href: "https://satoshisurfer.endangeredlabs.io/",
        target: "_blank",
      },
      ae = { class: "text" },
      oe = Object(s["i"])(
        "div",
        { class: "icon" },
        [Object(s["i"])("img", { src: "/images/site/ico_game.png", alt: "" })],
        -1
      ),
      ce = { id: "endangeredLabs" },
      re = { class: "container" },
      le = { class: "title load-hidden" },
      de = Object(s["i"])(
        "div",
        { class: "title-decoration load-hidden" },
        [
          Object(s["i"])("p", null, [
            Object(s["i"])("span", null, "Data"),
            Object(s["k"])("01011001001"),
          ]),
          Object(s["i"])("p", null, "////////"),
        ],
        -1
      ),
      be = { id: "messengertitle", class: "load-hidden" },
      ue = ["innerHTML"],
      pe = Object(s["i"])(
        "img",
        {
          src: "images/site/maze-light.png",
          alt: "Light effect with a maze pattern",
          class: "background-light right ligh-2",
        },
        null,
        -1
      ),
      he = { id: "constro" },
      me = { class: "container row" },
      Oe = Object(s["i"])(
        "div",
        { class: "constro-anim c-2" },
        [
          Object(s["i"])("img", {
            src: "images/site/maze-light.png",
            alt: "Light effect with a maze pattern",
            class: "maze-light",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/constro-decoration.svg",
            alt: "Decorative circles around Constro",
            class: "constro-decoration",
          }),
          Object(s["i"])("div", { class: "constro-orbit" }, [
            Object(s["i"])("img", {
              src: "images/site/svg/constro-orbit.svg",
              alt: "Rotating Orbit",
            }),
          ]),
          Object(s["i"])("img", {
            src: "images/site/constro-orbit-decoration.png",
            alt: "Sci-fi decoration",
            class: "constro-orbit-decoration",
          }),
          Object(s["i"])(
            "video",
            {
              autoplay: "",
              muted: "",
              playsinline: "",
              loop: "",
              width: "600",
              height: "600",
            },
            [
              Object(s["i"])("source", {
                src: "videos/Constro-hevc-safari.mp4",
                type: "video/mp4;codecs=hvc1",
              }),
              Object(s["i"])("source", {
                src: "videos/Constro-vp9-chrome.webm",
                type: "video/webm",
              }),
            ]
          ),
        ],
        -1
      ),
      je = { class: "constro-lore c-3" },
      ge = { class: "title" },
      ve = Object(s["i"])(
        "div",
        { class: "title-decoration load-hidden" },
        [
          Object(s["i"])("p", null, [
            Object(s["i"])("span", null, "Data"),
            Object(s["k"])("10010100110"),
          ]),
          Object(s["i"])("p", null, "////////"),
        ],
        -1
      ),
      fe = { id: "constrotitle", class: "load-hidden" },
      ye = ["innerHTML"],
      we = ["innerHTML"],
      _e = ["innerHTML"],
      ke = ["innerHTML"],
      Ce = { id: "identity" },
      Ie = { class: "container load-hidden-constro" },
      Se = Object(s["i"])(
        "img",
        {
          src: "images/site/maze-light.png",
          alt: "Light effect with a maze pattern",
          class: "background-light right ligh-3",
        },
        null,
        -1
      ),
      Ae = Object(s["i"])(
        "img",
        {
          src: "images/site/maze-light.png",
          alt: "Light effect with a maze pattern",
          class: "background-light left ligh-4",
        },
        null,
        -1
      ),
      Me = Object(s["i"])(
        "img",
        {
          src: "images/site/maze-light.png",
          alt: "Light effect with a maze pattern",
          class: "background-light right ligh-5",
        },
        null,
        -1
      ),
      xe = Object(s["i"])(
        "img",
        {
          src: "images/site/maze-light.png",
          alt: "Light effect with a maze pattern",
          class: "background-light left ligh-6",
        },
        null,
        -1
      ),
      Te = { class: "title" },
      Be = Object(s["i"])(
        "div",
        { class: "title-decoration load-hidden" },
        [
          Object(s["i"])("p", null, [
            Object(s["i"])("span", null, "Data"),
            Object(s["k"])("01001011001"),
          ]),
          Object(s["i"])("p", null, "////////"),
        ],
        -1
      ),
      Pe = { id: "identitytitle", class: "load-hidden" },
      Le = { class: "identity-file" },
      $e = { class: "file load-hidden" },
      Ee = { class: "file-title" },
      De = { class: "row" },
      Ue = Object(s["i"])(
        "div",
        { class: "file-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/folder.svg",
            alt: "Folder Icon",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-decoration.svg",
            alt: "Sci-fi decoration under the folder icon",
          }),
        ],
        -1
      ),
      Ne = { class: "file-content" },
      Re = ["innerHTML"],
      We = Object(s["i"])(
        "div",
        { class: "file-content-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-left.svg",
            alt: "Decorative Barcode",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-right.svg",
            alt: "Decorative Binari",
          }),
        ],
        -1
      ),
      Fe = Object(s["i"])(
        "div",
        { class: "file-img load-hidden" },
        [
          Object(s["i"])("img", {
            src: "images/site/avatar-interoperability.png",
            alt: "Avatar Interoperability",
            class: "file-img-content",
          }),
        ],
        -1
      ),
      qe = { class: "identity-file" },
      ze = { class: "file load-hidden" },
      He = { class: "file-title" },
      Ve = { class: "row" },
      Ge = Object(s["i"])(
        "div",
        { class: "file-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/folder.svg",
            alt: "Folder Icon",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-decoration.svg",
            alt: "Sci-fi decoration under the folder icon",
          }),
        ],
        -1
      ),
      Ye = { class: "file-content" },
      Ze = ["innerHTML"],
      Ke = Object(s["i"])(
        "div",
        { class: "file-content-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-left.svg",
            alt: "Decorative Barcode",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-right.svg",
            alt: "Decorative Binari",
          }),
        ],
        -1
      ),
      Qe = Object(s["i"])(
        "div",
        { class: "file-img load-hidden" },
        [
          Object(s["i"])("img", {
            src: "images/site/content-creation-opportunities.png",
            alt: "Panda in a spaceship",
            class: "file-img-content",
          }),
        ],
        -1
      ),
      Je = { class: "identity-file" },
      Xe = { class: "file load-hidden" },
      et = { class: "file-title" },
      tt = { class: "row" },
      it = Object(s["i"])(
        "div",
        { class: "file-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/folder.svg",
            alt: "Folder Icon",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-decoration.svg",
            alt: "Sci-fi decoration under the folder icon",
          }),
        ],
        -1
      ),
      st = { class: "file-content" },
      nt = ["innerHTML"],
      at = Object(s["i"])(
        "div",
        { class: "file-content-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-left.svg",
            alt: "Decorative Barcode",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-right.svg",
            alt: "Decorative Binari",
          }),
        ],
        -1
      ),
      ot = Object(s["i"])(
        "div",
        { class: "file-img load-hidden" },
        [
          Object(s["i"])("img", {
            src: "images/site/avatar-identity.png",
            alt: "Ongoing call between pandas",
            class: "file-img-content",
          }),
        ],
        -1
      ),
      ct = { class: "identity-file" },
      rt = { class: "file load-hidden" },
      lt = { class: "file-title" },
      dt = { class: "row" },
      bt = Object(s["i"])(
        "div",
        { class: "file-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/folder.svg",
            alt: "Folder Icon",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-decoration.svg",
            alt: "Sci-fi decoration under the folder icon",
          }),
        ],
        -1
      ),
      ut = { class: "file-content" },
      pt = ["innerHTML"],
      ht = Object(s["i"])(
        "div",
        { class: "file-content-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-left.svg",
            alt: "Decorative Barcode",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-right.svg",
            alt: "Decorative Binari",
          }),
        ],
        -1
      ),
      mt = Object(s["i"])(
        "div",
        { class: "file-img load-hidden" },
        [
          Object(s["i"])("img", {
            src: "images/site/3d-printing.png",
            alt: "Printed Panda on each side",
            class: "file-img-content",
          }),
        ],
        -1
      ),
      Ot = { class: "identity-file" },
      jt = { class: "file load-hidden" },
      gt = { class: "file-title" },
      vt = { class: "row" },
      ft = Object(s["i"])(
        "div",
        { class: "file-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/folder.svg",
            alt: "Folder Icon",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-decoration.svg",
            alt: "Sci-fi decoration under the folder icon",
          }),
        ],
        -1
      ),
      yt = { class: "file-content" },
      wt = ["innerHTML"],
      _t = Object(s["i"])(
        "div",
        { class: "file-content-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-left.svg",
            alt: "Decorative Barcode",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/file-content-decaoration-right.svg",
            alt: "Decorative Binari",
          }),
        ],
        -1
      ),
      kt = Object(s["i"])(
        "div",
        { class: "file-img load-hidden" },
        [
          Object(s["i"])("img", {
            src: "images/site/all-file-types-available.png",
            alt: "Pandas in a 3D software",
            class: "file-img-content",
          }),
        ],
        -1
      ),
      Ct = { id: "narrative" },
      It = { class: "container" },
      St = Object(s["i"])(
        "img",
        {
          src: "images/site/maze-light.png",
          alt: "Light effect with a maze pattern",
          class: "background-light right ligh-7",
        },
        null,
        -1
      ),
      At = { class: "title" },
      Mt = Object(s["i"])(
        "div",
        { class: "title-decoration load-hidden" },
        [
          Object(s["i"])("p", null, [
            Object(s["i"])("span", null, "Data"),
            Object(s["k"])("1010110001"),
          ]),
          Object(s["i"])("p", null, "////////"),
        ],
        -1
      ),
      xt = { id: "narrativetitle", class: "load-hidden" },
      Tt = { class: "narrative-screen load-hidden" },
      Bt = Object(s["i"])(
        "div",
        { class: "narrative-screen-decoration" },
        [
          Object(s["i"])("img", {
            src: "images/site/svg/barcode.svg",
            alt: "Decorative Barcode",
          }),
          Object(s["i"])("img", {
            src: "images/site/svg/narrative-screen-decoration.svg",
            alt: "Decorative Sci-fi shape",
          }),
        ],
        -1
      ),
      Pt = { class: "narrative-component" },
      Lt = { key: 0, class: "narrative-prompt scroll-style" },
      $t = Object(s["i"])(
        "p",
        { class: "prompt-title" },
        [
          Object(s["k"])("C://narrative/geometry:"),
          Object(s["i"])("br"),
          Object(s["i"])("br"),
        ],
        -1
      ),
      Et = ["innerHTML"],
      Dt = { key: 1, class: "narrative-prompt scroll-style" },
      Ut = Object(s["i"])(
        "p",
        { class: "prompt-title" },
        [
          Object(s["k"])("C://narrative/geometry:"),
          Object(s["i"])("br"),
          Object(s["i"])("br"),
        ],
        -1
      ),
      Nt = ["innerHTML"],
      Rt = { key: 2, class: "narrative-prompt scroll-style" },
      Wt = Object(s["i"])(
        "p",
        { class: "prompt-title" },
        [
          Object(s["k"])("C://narrative/geometry:"),
          Object(s["i"])("br"),
          Object(s["i"])("br"),
        ],
        -1
      ),
      Ft = ["innerHTML"],
      qt = { key: 3, class: "narrative-prompt scroll-style" },
      zt = Object(s["i"])(
        "p",
        { class: "prompt-title" },
        [
          Object(s["k"])("C://narrative/geometry:"),
          Object(s["i"])("br"),
          Object(s["i"])("br"),
        ],
        -1
      ),
      Ht = ["innerHTML"],
      Vt = { key: 4, class: "narrative-prompt scroll-style" },
      Gt = Object(s["i"])(
        "p",
        { class: "prompt-title" },
        [
          Object(s["k"])("C://narrative/geometry:"),
          Object(s["i"])("br"),
          Object(s["i"])("br"),
        ],
        -1
      ),
      Yt = ["innerHTML"],
      Zt = { class: "narrative-img load-hidden" },
      Kt = Object(s["i"])(
        "div",
        { class: "narrative-img-decoration" },
        null,
        -1
      ),
      Qt = ["src"],
      Jt = { class: "narrative-pagination scroll-style" },
      Xt = Object(s["j"])(
        '<div class="activeAnimation"><span class="center"></span></div><img src="images/site/narrative-pagination-img-1.png" alt="Sketch of a Panda" class="narrative-pagination-img"><svg class="ico file-icon"><use xlink:href="#ico-file"></use></svg>',
        3
      ),
      ei = [Xt],
      ti = Object(s["j"])(
        '<div class="activeAnimation"><span class="center"></span></div><img src="images/site/narrative-pagination-img-3.png" alt="Sketch of a hand" class="narrative-pagination-img"><svg class="ico file-icon"><use xlink:href="#ico-file"></use></svg>',
        3
      ),
      ii = [ti],
      si = Object(s["j"])(
        '<div class="activeAnimation"><span class="center"></span></div><img src="images/site/narrative-pagination-img-2b.png" alt="Panda Portrait" class="narrative-pagination-img"><svg class="ico file-icon"><use xlink:href="#ico-file"></use></svg>',
        3
      ),
      ni = [si],
      ai = Object(s["j"])(
        '<div class="activeAnimation"><span class="center"></span></div><img src="images/site/narrative-pagination-img-4.png" alt="Holographic Panda" class="narrative-pagination-img"><svg class="ico file-icon"><use xlink:href="#ico-file"></use></svg>',
        3
      ),
      oi = [ai],
      ci = Object(s["j"])(
        '<div class="activeAnimation"><span class="center"></span></div><img src="images/site/narrative-pagination-img-5.png" alt="Abstract illustration" class="narrative-pagination-img"><svg class="ico file-icon"><use xlink:href="#ico-file"></use></svg>',
        3
      ),
      ri = [ci],
      li = { id: "team" },
      di = { class: "container" },
      bi = Object(s["i"])(
        "div",
        { class: "title" },
        [
          Object(s["i"])("div", { class: "title-decoration load-hidden" }, [
            Object(s["i"])("p", null, [
              Object(s["i"])("span", null, "Data"),
              Object(s["k"])("01110100101"),
            ]),
            Object(s["i"])("p", null, "////////"),
          ]),
          Object(s["i"])(
            "h2",
            { id: "theteamtitle", class: "load-hidden" },
            "VIPs"
          ),
        ],
        -1
      ),
      ui = { class: "row" },
      pi = { class: "team-content c-3" },
      hi = { class: "team-content-viewer" },
      mi = Object(s["j"])(
        '<div class="team-corner-decoration"><span class="topRight"></span><span class="bottomRight"></span></div><div class="left-decoration load-hidden"><div class="team-side-decoration"></div><ul class="size"><li><span></span><p>200</p><img src="images/site/svg/cross.svg" alt="Cross icon n°1"></li><li><span></span><p>190</p></li><li><span></span><p>180</p><img src="images/site/svg/cross.svg" alt="Cross icon n°2"></li><li><span></span><p>170</p></li><li><span></span><p>160</p><img src="images/site/svg/cross.svg" alt="Cross icon n°3"></li><li><span></span><p>150</p></li><li><span></span><p>140</p><img src="images/site/svg/cross.svg" alt="Cross icon n°4"></li><li><span></span><p>130</p></li><li><span></span><p>120</p><img src="images/site/svg/cross.svg" alt="Cross icon n°5"></li><li><span></span><p>110</p></li><li><span></span><p>100</p><img src="images/site/svg/cross.svg" alt="Cross icon n°6"></li><li><span></span><p>90</p></li><li><span></span><p>80</p><img src="images/site/svg/cross.svg" alt="Cross icon n°7"></li><li><span></span><p>70</p></li><li><span></span><p>60</p><img src="images/site/svg/cross.svg" alt="Cross icon n°8"></li><li><span></span><p>50</p></li><li><span></span><p>40</p><img src="images/site/svg/cross.svg" alt="Cross icon n°9"></li><li><span></span><p>30</p></li><li><span></span><p>20</p><img src="images/site/svg/cross.svg" alt="Cross icon n°10"></li><li><span></span><p>10</p></li><li><span></span><p>0</p><img src="images/site/svg/cross.svg" alt="Cross icon n°11"></li></ul></div>',
        2
      ),
      Oi = { class: "viewer load-hidden", ref: "viewer3D" },
      ji = Object(s["i"])("p", null, "Scan with your smart phone", -1),
      gi = ["src"],
      vi = { class: "viewer-mobile" },
      fi = ["src"],
      yi = { class: "team-content-info row" },
      wi = Object(s["j"])(
        '<div class="team-corner-decoration load-hidden"><span class="topRight"></span><span class="bottomRight"></span></div><div class="left-decoration load-hidden"><div class="team-side-decoration"></div><ul class="square-decoration"><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div>',
        2
      ),
      _i = { key: 0, class: "info" },
      ki = Object(s["j"])(
        '<p><span id="team-name">Metapanda</span><br><span id="team-job">Alchemist</span></p><ul class="social"><li class="social-link"><a href="https://twitter.com/0xMetapanda" target="_blank"><svg class="ico"><use xlink:href="#ico-twitter"></use></svg></a></li><li class="social-link"><a href="https://www.linkedin.com/in/metapanda/" target="_blank"><svg class="ico"><use xlink:href="#ico-linkedin"></use></svg></a></li><li class="social-link"><a href="https://www.instagram.com/0xmetapanda/" target="_blank"><svg class="ico"><use xlink:href="#ico-instagram"></use></svg></a></li></ul>',
        2
      ),
      Ci = [ki],
      Ii = { key: 1, class: "info" },
      Si = Object(s["j"])(
        '<p><span id="team-name">Cyber</span><br><span id="team-job">Operations</span></p><ul class="social"><li class="social-link"><a href="https://twitter.com/0xCYBERPANDA" target="_blank"><svg class="ico"><use xlink:href="#ico-twitter"></use></svg></a></li><li class="social-link"><a href="https://www.linkedin.com/in/cyberpanda/" target="_blank"><svg class="ico"><use xlink:href="#ico-linkedin"></use></svg></a></li></ul>',
        2
      ),
      Ai = [Si],
      Mi = { key: 2, class: "info" },
      xi = Object(s["j"])(
        '<p><span id="team-name">Shadow</span><br><span id="team-job">Creative Director</span></p><ul class="social"><li class="social-link"><a href="https://twitter.com/0xShadowPanda" target="_blank"><svg class="ico"><use xlink:href="#ico-twitter"></use></svg></a></li><li class="social-link"><a href="https://www.linkedin.com/in/shadowpanda/" target="_blank"><svg class="ico"><use xlink:href="#ico-linkedin"></use></svg></a></li></ul>',
        2
      ),
      Ti = [xi],
      Bi = { class: "idcard-list c-2" },
      Pi = Object(s["j"])(
        '<svg class="idcard-side-decoration"><use xlink:href="#deco-idcard-side"></use></svg><div class="idcard-decoration-top"><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="idcard-content"><div class="idcard-name">Metapanda</div><span class="idcard-separation"></span><div class="idcard-spec"><div class="idcard-picture"><img src="images/site/pfp-metapanda.png" alt="Metapanda&#39;s avatar"></div><ul class="idcard-infos"><li>ID: 8b7i-h3y7s 45</li><li>Address: Constro</li><li>Class: Alchemist</li></ul></div></div><div class="idcard-decoration-bottom"><div class="left"><svg class="ico"><use xlink:href="#ico-barcode"></use></svg><p>01011001001</p></div><p class="right">9nr5fvk787 - 41640</p></div>',
        4
      ),
      Li = [Pi],
      $i = Object(s["j"])(
        '<svg class="idcard-side-decoration"><use xlink:href="#deco-idcard-side"></use></svg><div class="idcard-decoration-top"><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="idcard-content"><div class="idcard-name">Shadow</div><span class="idcard-separation"></span><div class="idcard-spec"><div class="idcard-picture"><img src="images/site/pfp-shadow.png" alt="Shadow&#39;s avatar"></div><ul class="idcard-infos"><li>ID: 423q-na3wv 64</li><li>Address: Constro</li><li>Class: Creative Director</li></ul></div></div><div class="idcard-decoration-bottom"><div class="left"><svg class="ico"><use xlink:href="#ico-barcode"></use></svg><p>11010100001</p></div><p class="right">8s9ry75t7j - 10031</p></div>',
        4
      ),
      Ei = [$i],
      Di = Object(s["i"])(
        "div",
        { id: "surfer", class: "load-hidden" },
        [
          Object(s["i"])(
            "video",
            { autoplay: "", muted: "", playsinline: "", loop: "" },
            [
              Object(s["i"])("source", {
                src: "videos/Surfer-hevc-safari.mp4",
                type: "video/mp4;codecs=hvc1",
              }),
              Object(s["i"])("source", {
                src: "videos/Surfer-vp9-chrome.webm",
                type: "video/webm",
              }),
            ]
          ),
        ],
        -1
      ),
      Ui = { id: "join", class: "load-hidden" },
      Ni = Object(s["i"])(
        "div",
        { class: "background-light ligh-10" },
        [
          Object(s["i"])("img", {
            src: "images/site/maze-light.png",
            alt: "Light effect with a maze pattern",
          }),
        ],
        -1
      ),
      Ri = { class: "join-top-decoration" },
      Wi = Object(s["i"])(
        "svg",
        null,
        [Object(s["i"])("use", { "xlink:href": "#btn-back" })],
        -1
      ),
      Fi = Object(s["i"])(
        "img",
        {
          src: "images/site/svg/join-top-decoration.svg",
          alt: "Decorative Sci-fi shape",
        },
        null,
        -1
      ),
      qi = { class: "join-bottom-part load-hidden" },
      zi = { class: "container" },
      Hi = {
        class: "btn-join",
        href: "https://twitter.com/Ailu2100",
        target: "_blank",
      },
      Vi = Object(s["i"])(
        "div",
        { class: "btn-join-animation" },
        [
          Object(s["i"])("div", { class: "arrow" }, [
            Object(s["i"])("svg", { class: "ico" }, [
              Object(s["i"])("use", { "xlink:href": "#ico-arrow" }),
            ]),
          ]),
        ],
        -1
      ),
      Gi = { class: "container" },
      Yi = Object(s["i"])(
        "div",
        { class: "load-hidden" },
        [
          Object(s["i"])(
            "a",
            {
              href: "https://twitter.com/Ailu2100",
              style: { color: "white" },
              target: "_blank",
            },
            " © Meta AI "
          ),
        ],
        -1
      ),
      Zi = { class: "load-hidden" },
      Ki = { href: "mailto:press@endangeredlabs.io?subject=Info%20request" },
      Qi = { class: "load-hidden" },
      Ji = { href: "Endangered_Labs_Terms.pdf", target: "_blank" },
      Xi = { class: "load-hidden" },
      es = { href: "Endangered_Labs_Privacy_Policy.pdf", target: "_blank" };
    function ts(e, t, i, n, a, o) {
      const c = Object(s["I"])("btcMintPopup"),
        r = Object(s["I"])("SocialTwitter"),
        l = Object(s["I"])("SocialTelegram"),
        d = Object(s["I"])("SocialDiscord"),
        f = Object(s["I"])("SocialMagicEden"),
        H = Object(s["I"])("SocialSoundCloud"),
        V = Object(s["I"])("SocialInstagram");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", null, [
          Object(s["i"])(
            "section",
            {
              id: "loading",
              class: Object(s["u"])({ ready: e.ready, close: e.close }),
            },
            [
              Object(s["i"])("div", b, [
                u,
                p,
                Object(s["i"])("div", h, [
                  Object(s["i"])(
                    "span",
                    {
                      style: Object(s["v"])({ width: e.progression + "%" }),
                      class: "progress",
                    },
                    null,
                    4
                  ),
                  Object(s["i"])(
                    "span",
                    {
                      class: "btn-ready",
                      id: "btn-music-play",
                      onClick:
                        t[0] || (t[0] = (...e) => o.onEnter && o.onEnter(...e)),
                    },
                    "ENTER"
                  ),
                ]),
                e.ready
                  ? Object(s["g"])("", !0)
                  : (Object(s["B"])(),
                    Object(s["h"])("div", m, "Loading system...")),
                e.ready
                  ? (Object(s["B"])(),
                    Object(s["h"])("div", O, "System loaded successfully"))
                  : Object(s["g"])("", !0),
                j,
              ]),
            ],
            2
          ),
          e.popupOpen
            ? (Object(s["B"])(),
              Object(s["h"])("div", g, [
                Object(s["i"])("div", v, [
                  Object(s["i"])(
                    "div",
                    {
                      class: "close-popup-yt",
                      onClick: t[1] || (t[1] = (t) => (e.popupOpen = !1)),
                    },
                    y
                  ),
                  w,
                ]),
              ]))
            : Object(s["g"])("", !0),
          e.openBtcMint
            ? (Object(s["B"])(),
              Object(s["f"])(c, {
                key: 1,
                onClose: t[2] || (t[2] = (t) => (e.openBtcMint = !1)),
              }))
            : Object(s["g"])("", !0),
          Object(s["i"])("header", null, [
            Object(s["i"])("div", _, [
              Object(s["i"])("div", k, [
                C,
                Object(s["i"])("div", I, [
                  Object(s["i"])("div", S, [
                    Object(s["i"])("div", A, Object(s["M"])(e.$i18n.locale), 1),
                    M,
                  ]),
                  Object(s["i"])("ul", x, [
                    (Object(s["B"])(!0),
                    Object(s["h"])(
                      s["a"],
                      null,
                      Object(s["H"])(
                        e.$i18n.availableLocales,
                        (t) => (
                          Object(s["B"])(),
                          Object(s["h"])(
                            "li",
                            { key: t, onClick: (i) => (e.$i18n.locale = t) },
                            [B, Object(s["k"])(Object(s["M"])(t), 1)],
                            8,
                            T
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
                P,
              ]),
              Object(s["i"])("div", L, [
                Object(s["i"])("nav", $, [
                  Object(s["i"])(
                    "a",
                    {
                      href: "#constro",
                      onClick:
                        t[3] ||
                        (t[3] = Object(s["S"])(
                          (e) => o.scrollTo("constro"),
                          ["prevent", "stop"]
                        )),
                    },
                    Object(s["M"])(e.$t("menu.constro")),
                    1
                  ),
                  Object(s["i"])(
                    "a",
                    E,
                    Object(s["M"])(e.$t("menu.identity")),
                    1
                  ),
                  Object(s["i"])(
                    "a",
                    {
                      href: "#narrative",
                      onClick:
                        t[4] ||
                        (t[4] = Object(s["S"])(
                          (e) => o.scrollTo("narrative"),
                          ["prevent", "stop"]
                        )),
                    },
                    Object(s["M"])(e.$t("menu.narrative")),
                    1
                  ),
                  Object(s["i"])(
                    "a",
                    {
                      href: "#team",
                      onClick:
                        t[5] ||
                        (t[5] = Object(s["S"])(
                          (e) => o.scrollTo("team"),
                          ["prevent", "stop"]
                        )),
                    },
                    Object(s["M"])(e.$t("menu.team")),
                    1
                  ),
                ]),
                Object(s["i"])("ul", D, [
                  Object(s["i"])("li", U, [
                    Object(s["l"])(r, { url: "https://twitter.com/Ailu2100" }),
                  ]),
                  Object(s["i"])("li", N, [
                    Object(s["l"])(l, { url: "https://t.me/ailu2100" }),
                  ]),
                  // Object(s["i"])("li", R, [
                  //   Object(s["l"])(d, { url: "https://discord.gg/AILU" }),
                  // ]),
                  // Object(s["i"])("li", W, [
                  //   Object(s["l"])(f, {
                  //     url: "https://magiceden.io/ordinals/marketplace/ailu",
                  //   }),
                  // ]),
                  // Object(s["i"])("li", F, [
                  //   Object(s["l"])(H, {
                  //     url: "https://soundcloud.com/endangeredlabs",
                  //   }),
                  // ]),
                  // Object(s["i"])("li", q, [
                  //   Object(s["l"])(V, {
                  //     url: "https://instagram.com/ailu2100",
                  //   }),
                  // ]),
                ]),
              ]),
            ]),
            e.close
              ? (Object(s["B"])(), Object(s["h"])("div", z, Y))
              : Object(s["g"])("", !0),
          ]),
          Object(s["i"])("div", Z, [
            Object(s["i"])("div", K, [
              Q,
              // Object(s["i"])(
              //   "a",
              //   {
              //     class: "btn btn-big btn-big-secondary",
              //     onClick: t[6] || (t[6] = (t) => (e.popupOpen = !0)),
              //   },
              //   [
              //     Object(s["i"])("div", J, [
              //       Object(s["i"])(
              //         "span",
              //         X,
              //         Object(s["M"])(e.$t("floating.trailer.watch")),
              //         1
              //       ),
              //       Object(s["i"])(
              //         "span",
              //         null,
              //         Object(s["M"])(e.$t("floating.trailer.trailer")),
              //         1
              //       ),
              //     ]),
              //     ee,
              //   ]
              // ),
              Object(s["i"])("a", te, [
                Object(s["i"])("div", ie, [
                  Object(s["i"])(
                    "span",
                    null,
                    Object(s["M"])("UNISWAP"),
                    1
                  ),
                ]),
                // se,
              ]),
              // Object(s["i"])("a", ne, [
              //   Object(s["i"])("div", ae, [
              //     Object(s["i"])(
              //       "span",
              //       null,
              //       Object(s["M"])(e.$t("floating.game.text")),
              //       1
              //     ),
              //   ]),
              //   oe,
              // ]),
            ]),
          ]),
          Object(s["i"])("section", ce, [
            Object(s["i"])("div", re, [
              Object(s["i"])("div", le, [
                de,
                Object(s["i"])(
                  "h2",
                  be,
                  Object(s["M"])(e.$t("header.title")),
                  1
                ),
              ]),
              Object(s["i"])(
                "p",
                {
                  class: "project-description c-4 load-hidden",
                  innerHTML: e.$t("header.subtitle"),
                },
                null,
                8,
                ue
              ),
              pe,
            ]),
          ]),
          Object(s["i"])("section", he, [
            Object(s["i"])("div", me, [
              Oe,
              Object(s["i"])("div", je, [
                Object(s["i"])("div", ge, [
                  ve,
                  Object(s["i"])(
                    "h2",
                    fe,
                    Object(s["M"])(e.$t("constro.title")),
                    1
                  ),
                ]),
                Object(s["i"])(
                  "p",
                  {
                    class: "lore load-hidden",
                    innerHTML: e.$t("constro.detail1"),
                  },
                  null,
                  8,
                  ye
                ),
                Object(s["i"])(
                  "p",
                  {
                    class: "lore load-hidden",
                    innerHTML: e.$t("constro.detail2"),
                  },
                  null,
                  8,
                  we
                ),
                Object(s["i"])(
                  "p",
                  {
                    class: "lore load-hidden",
                    innerHTML: e.$t("constro.detail3"),
                  },
                  null,
                  8,
                  _e
                ),
                Object(s["i"])(
                  "p",
                  {
                    class: "lore load-hidden",
                    innerHTML: e.$t("constro.detail4"),
                  },
                  null,
                  8,
                  ke
                ),
              ]),
            ]),
          ]),
          Object(s["i"])("section", Ce, [
            Object(s["i"])("div", Ie, [
              Se,
              Ae,
              Me,
              xe,
              Object(s["i"])("div", Te, [
                Be,
                Object(s["i"])(
                  "h2",
                  Pe,
                  Object(s["M"])(e.$t("identity.title")),
                  1
                ),
              ]),
              Object(s["i"])("div", Le, [
                Object(s["i"])("div", $e, [
                  Object(s["i"])(
                    "div",
                    Ee,
                    Object(s["M"])(e.$t("identity.avatar.title")),
                    1
                  ),
                  Object(s["i"])("div", De, [
                    Ue,
                    Object(s["i"])("div", Ne, [
                      Object(s["i"])(
                        "p",
                        { innerHTML: e.$t("identity.avatar.detail") },
                        null,
                        8,
                        Re
                      ),
                      We,
                    ]),
                  ]),
                ]),
                Fe,
              ]),
              Object(s["i"])("div", qe, [
                Object(s["i"])("div", ze, [
                  Object(s["i"])(
                    "div",
                    He,
                    Object(s["M"])(e.$t("identity.content.title")),
                    1
                  ),
                  Object(s["i"])("div", Ve, [
                    Ge,
                    Object(s["i"])("div", Ye, [
                      Object(s["i"])(
                        "p",
                        { innerHTML: e.$t("identity.content.detail") },
                        null,
                        8,
                        Ze
                      ),
                      Ke,
                    ]),
                  ]),
                ]),
                Qe,
              ]),
              Object(s["i"])("div", Je, [
                Object(s["i"])("div", Xe, [
                  Object(s["i"])(
                    "div",
                    et,
                    Object(s["M"])(e.$t("identity.identity.title")),
                    1
                  ),
                  Object(s["i"])("div", tt, [
                    it,
                    Object(s["i"])("div", st, [
                      Object(s["i"])(
                        "p",
                        { innerHTML: e.$t("identity.identity.detail") },
                        null,
                        8,
                        nt
                      ),
                      at,
                    ]),
                  ]),
                ]),
                ot,
              ]),
              Object(s["i"])("div", ct, [
                Object(s["i"])("div", rt, [
                  Object(s["i"])(
                    "div",
                    lt,
                    Object(s["M"])(e.$t("identity.printing.title")),
                    1
                  ),
                  Object(s["i"])("div", dt, [
                    bt,
                    Object(s["i"])("div", ut, [
                      Object(s["i"])(
                        "p",
                        { innerHTML: e.$t("identity.printing.detail") },
                        null,
                        8,
                        pt
                      ),
                      ht,
                    ]),
                  ]),
                ]),
                mt,
              ]),
              Object(s["i"])("div", Ot, [
                Object(s["i"])("div", jt, [
                  Object(s["i"])(
                    "div",
                    gt,
                    Object(s["M"])(e.$t("identity.types.title")),
                    1
                  ),
                  Object(s["i"])("div", vt, [
                    ft,
                    Object(s["i"])("div", yt, [
                      Object(s["i"])(
                        "p",
                        { innerHTML: e.$t("identity.types.detail") },
                        null,
                        8,
                        wt
                      ),
                      _t,
                    ]),
                  ]),
                ]),
                kt,
              ]),
            ]),
          ]),
          Object(s["i"])("section", Ct, [
            Object(s["i"])("div", It, [
              St,
              Object(s["i"])("div", At, [
                Mt,
                Object(s["i"])(
                  "h2",
                  xt,
                  Object(s["M"])(e.$t("narrative.title")),
                  1
                ),
              ]),
              Object(s["i"])("div", Tt, [
                Bt,
                Object(s["i"])("div", Pt, [
                  1 === e.narrative
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", Lt, [
                        $t,
                        Object(s["i"])(
                          "div",
                          { innerHTML: e.$t("narrative.n1") },
                          null,
                          8,
                          Et
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                  2 === e.narrative
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", Dt, [
                        Ut,
                        Object(s["i"])(
                          "div",
                          { innerHTML: e.$t("narrative.n2") },
                          null,
                          8,
                          Nt
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                  3 === e.narrative
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", Rt, [
                        Wt,
                        Object(s["i"])(
                          "div",
                          { innerHTML: e.$t("narrative.n3") },
                          null,
                          8,
                          Ft
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                  4 === e.narrative
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", qt, [
                        zt,
                        Object(s["i"])(
                          "div",
                          { innerHTML: e.$t("narrative.n4") },
                          null,
                          8,
                          Ht
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                  5 === e.narrative
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", Vt, [
                        Gt,
                        Object(s["i"])(
                          "div",
                          { innerHTML: e.$t("narrative.n5") },
                          null,
                          8,
                          Yt
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                  Object(s["i"])("div", Zt, [
                    Kt,
                    Object(s["i"])(
                      "img",
                      {
                        src:
                          "images/site/narrative-pagination-img-" +
                          e.narrative +
                          (2 === e.narrative ? "b" : "") +
                          ".png",
                        alt: "Sketch of a Panda",
                        height: "380",
                      },
                      null,
                      8,
                      Qt
                    ),
                  ]),
                ]),
                Object(s["i"])("ul", Jt, [
                  Object(s["i"])(
                    "li",
                    {
                      onClick: t[7] || (t[7] = (t) => (e.narrative = 1)),
                      class: "active narrative-pagination-page load-hidden",
                    },
                    ei
                  ),
                  Object(s["i"])(
                    "li",
                    {
                      onClick: t[8] || (t[8] = (t) => (e.narrative = 3)),
                      class: "narrative-pagination-page load-hidden",
                    },
                    ii
                  ),
                  Object(s["i"])(
                    "li",
                    {
                      onClick: t[9] || (t[9] = (t) => (e.narrative = 2)),
                      class: "narrative-pagination-page load-hidden",
                    },
                    ni
                  ),
                  Object(s["i"])(
                    "li",
                    {
                      onClick: t[10] || (t[10] = (t) => (e.narrative = 4)),
                      class: "narrative-pagination-page load-hidden",
                    },
                    oi
                  ),
                  Object(s["i"])(
                    "li",
                    {
                      onClick: t[11] || (t[11] = (t) => (e.narrative = 5)),
                      class: "narrative-pagination-page load-hidden",
                    },
                    ri
                  ),
                ]),
              ]),
            ]),
          ]),
          Object(s["i"])("section", li, [
            Object(s["i"])("div", di, [
              bi,
              Object(s["i"])("div", ui, [
                Object(s["i"])("div", pi, [
                  Object(s["i"])("div", hi, [
                    mi,
                    Object(s["i"])(
                      "div",
                      Oi,
                      [
                        Object(s["i"])(
                          "div",
                          {
                            class: Object(s["u"])(["qrcode", { active: e.ar }]),
                          },
                          [
                            ji,
                            Object(s["i"])(
                              "img",
                              {
                                src: "images/site/qrcode-" + e.team + ".png",
                                alt: "QrCode",
                              },
                              null,
                              8,
                              gi
                            ),
                          ],
                          2
                        ),
                        Object(s["i"])("div", vi, [
                          Object(s["i"])(
                            "img",
                            { src: o.assets3d.image, alt: "" },
                            null,
                            8,
                            fi
                          ),
                        ]),
                      ],
                      512
                    ),
                  ]),
                  Object(s["i"])("div", yi, [
                    wi,
                    "metapanda" === e.team
                      ? (Object(s["B"])(), Object(s["h"])("div", _i, Ci))
                      : Object(s["g"])("", !0),
                    "cyber" === e.team
                      ? (Object(s["B"])(), Object(s["h"])("div", Ii, Ai))
                      : Object(s["g"])("", !0),
                    "shadow" === e.team
                      ? (Object(s["B"])(), Object(s["h"])("div", Mi, Ti))
                      : Object(s["g"])("", !0),
                  ]),
                ]),
                Object(s["i"])("div", Bi, [
                  Object(s["i"])(
                    "div",
                    {
                      onClick: t[12] || (t[12] = (e) => o.card("metapanda")),
                      class: Object(s["u"])([
                        { active: "metapanda" === e.team },
                        "idcard load-hidden",
                      ]),
                    },
                    Li,
                    2
                  ),
                  Object(s["i"])(
                    "div",
                    {
                      onClick: t[13] || (t[13] = (e) => o.card("shadow")),
                      class: Object(s["u"])([
                        { active: "shadow" === e.team },
                        "idcard load-hidden",
                      ]),
                    },
                    Ei,
                    2
                  ),
                ]),
              ]),
            ]),
          ]),
          Di,
          Object(s["i"])("section", Ui, [
            Ni,
            Object(s["i"])("div", Ri, [
              Object(s["i"])(
                "div",
                {
                  class: "btn-back load-hidden",
                  onClick:
                    t[14] ||
                    (t[14] = (...e) => o.scrollToTop && o.scrollToTop(...e)),
                },
                [
                  Object(s["k"])(
                    Object(s["M"])(e.$t("footer.backtotop")) + " ",
                    1
                  ),
                  Wi,
                ]
              ),
              Fi,
            ]),
            Object(s["i"])("div", qi, [
              Object(s["i"])("div", zi, [
                Object(s["i"])("a", Hi, [
                  Object(s["i"])(
                    "span",
                    null,
                    Object(s["M"])(e.$t("footer.followus")),
                    1
                  ),
                  Object(s["i"])(
                    "span",
                    null,
                    Object(s["M"])(e.$t("footer.ontwitter")),
                    1
                  ),
                  Vi,
                ]),
              ]),
            ]),
          ]),
          Object(s["i"])("footer", null, [
            Object(s["i"])("div", Gi, [
              Yi,
              Object(s["i"])("ul", null, [
                Object(s["i"])("li", Zi, [
                  Object(s["i"])(
                    "a",
                    Ki,
                    Object(s["M"])(e.$t("footer.contact")),
                    1
                  ),
                ]),
                // Object(s["i"])("li", Qi, [
                //   Object(s["i"])(
                //     "a",
                //     Ji,
                //     Object(s["M"])(e.$t("footer.terms")),
                //     1
                //   ),
                // ]),
                // Object(s["i"])("li", Xi, [
                //   Object(s["i"])(
                //     "a",
                //     es,
                //     Object(s["M"])(e.$t("footer.privacy")),
                //     1
                //   ),
                // ]),
              ]),
            ]),
          ]),
        ])
      );
    }
    var is = {
        clan: "Player",
        gender: "M",
        base: [{ layer: "Body", name: "Hold2" }],
        accessories: [],
        image: "/3dmodel/Meta_mobileViewer.png",
        settings: {
          scene: {
            width: 581,
            height: 532,
            background: "0x091919",
            environment: "/3dmodel/studio_small_08_2k.hdr",
          },
          renderer: { precision: "highp", antialias: !0 },
          camera: {
            position: { x: -1.51, y: 1.73, z: 4.52 },
            lookAt: { x: 0.12, y: 1.05, z: -0.06 },
          },
          orbit: {
            minPolarAngle: Math.PI / 2 - 0.15,
            maxPolarAngle: Math.PI / 2 - 0.15,
            autoRotate: !1,
            enableZoom: !1,
            enablePan: !1,
          },
          hemiLight: {
            intensity: 0,
            animated: !0,
            skyColor: "0xffeeb1",
            groundColor: "0x080820",
          },
          spotLight: [
            {
              name: "Front",
              animated: !0,
              cameraLinked: !0,
              color: "0x96fdfd",
              position: { x: 17, y: 20, z: 40 },
              intensity: 0.9,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
            {
              name: "Back",
              animated: !0,
              cameraLinked: !0,
              color: "0x96fdfd",
              position: { x: -50, y: 0, z: -40 },
              intensity: 6.5,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
            {
              name: "Back-right",
              animated: !0,
              cameraLinked: !0,
              color: "0x96fdfd",
              position: { x: 50, y: 0, z: -40 },
              intensity: 6.5,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
          ],
          pointLights: [
            {
              name: "Arm",
              animated: !0,
              cameraLinked: !1,
              color: "0x00AEFF",
              position: { x: 0.17, y: 1.29, z: 0.41 },
              intensity: 3.12,
              distance: 0.9,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
          ],
        },
      },
      ss = {
        clan: "Player",
        gender: "M",
        base: [{ layer: "Body", name: "Hold3" }],
        accessories: [],
        image: "/3dmodel/Cyber_mobileViewer.png",
        settings: {
          scene: {
            width: 581,
            height: 532,
            background: "0x091919",
            environment: "/3dmodel/studio_small_08_2k.hdr",
          },
          renderer: { precision: "highp", antialias: !0 },
          camera: {
            position: { x: -1.79, y: 0.51, z: 4.62 },
            lookAt: { x: 0.12, y: 1.11, z: -0.06 },
          },
          orbit: {
            minPolarAngle: Math.PI / 2 + 0.15,
            maxPolarAngle: Math.PI / 2 + 0.15,
            autoRotate: !1,
            enableZoom: !1,
            enablePan: !1,
          },
          hemiLight: {
            intensity: 0,
            animated: !0,
            skyColor: "0xffeeb1",
            groundColor: "0x080820",
          },
          spotLight: [
            {
              name: "Front",
              animated: !0,
              cameraLinked: !0,
              color: "0x96fdfd",
              position: { x: 17, y: 20, z: 40 },
              intensity: 0.9,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
            {
              name: "Back",
              animated: !0,
              cameraLinked: !0,
              color: "0x96fdfd",
              position: { x: -50, y: 0, z: -40 },
              intensity: 6.5,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
            {
              name: "Back-right",
              animated: !0,
              cameraLinked: !0,
              color: "0x96fdfd",
              position: { x: 50, y: 0, z: -40 },
              intensity: 6.5,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
          ],
          pointLights: [
            {
              name: "Arm",
              animated: !0,
              cameraLinked: !1,
              color: "0x00AEFF",
              position: { x: 0.17, y: 1.29, z: 0.41 },
              intensity: 0,
              distance: 0.9,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
          ],
        },
      },
      ns = {
        clan: "Player",
        gender: "M",
        base: [{ layer: "Body", name: "Hold4" }],
        accessories: [],
        image: "/3dmodel/Shadow_mobileViewer.png",
        settings: {
          scene: {
            width: 581,
            height: 532,
            background: "0x091919",
            environment: "/3dmodel/studio_small_08_2k.hdr",
          },
          renderer: { precision: "highp", antialias: !0 },
          camera: {
            position: { x: -1.51, y: 2, z: 4.2 },
            lookAt: { x: 0.12, y: 1.04, z: -0.06 },
          },
          orbit: {
            minPolarAngle: Math.PI / 2 - 0.15,
            maxPolarAngle: Math.PI / 2 - 0.15,
            autoRotate: !1,
            enableZoom: !1,
            enablePan: !1,
          },
          hemiLight: {
            intensity: 0,
            animated: !0,
            skyColor: "0xffeeb1",
            groundColor: "0x080820",
          },
          spotLight: [
            {
              name: "Front",
              animated: !0,
              cameraLinked: !0,
              color: "0x96fdfd",
              position: { x: 17, y: 20, z: 40 },
              intensity: 0.9,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
            {
              name: "Back",
              animated: !0,
              cameraLinked: !0,
              color: "0x96fdfd",
              position: { x: -50, y: 0, z: -40 },
              intensity: 6.5,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
            {
              name: "Back-right",
              animated: !0,
              cameraLinked: !0,
              color: "0x96fdfd",
              position: { x: 50, y: 0, z: -40 },
              intensity: 6.5,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
          ],
          pointLights: [
            {
              name: "Arm",
              animated: !0,
              cameraLinked: !1,
              color: "0x00AEFF",
              position: { x: 0.17, y: 1.29, z: 0.41 },
              intensity: 0,
              distance: 0.9,
              shadow: {
                cast: !0,
                bias: -1e-4,
                mapSize: { width: 4096, height: 4096 },
              },
            },
          ],
        },
      };
    i("14d9");
    var as = i("5a89"),
      os = i("34ad"),
      cs = i("0ca5"),
      rs = i("4721"),
      ls = i("2132"),
      ds = {
        base: {
          Player: {
            M: {
              Body: {
                Hold2: { file: "Meta_Mastermind_Pose_Reduced-v2.glb" },
                Hold3: { file: "Cyber_Thinker_Pose_Reduced-v1.glb" },
                Hold4: { file: "ShadowReduced-v1.glb" },
              },
            },
          },
        },
      },
      bs = {
        assets: null,
        composition: null,
        baseComposition: null,
        assetToComposition(e) {
          const t = e.type;
          for (const i in ds[t])
            for (const s in ds[t][i])
              for (const n in ds[t][i][s])
                for (const a in ds[t][i][s][n])
                  if (e.layer === n && a === e.name)
                    return { clan: i, gender: s, [t]: [{ layer: n, name: a }] };
        },
        setComposition(e) {
          this.composition = e;
          const t = e.clan,
            i = e.gender;
          let s = [];
          for (const n of e.base) {
            const e = ds.base[t][i][n.layer][n.name];
            s.push({ ...n, ...e });
          }
          for (const n of e.accessories) {
            const e = ds.accessories[n.layer][n.name];
            s.push({ ...n, ...e });
          }
          for (const n of e.base) {
            const e = ds.base[t][i][n.layer][n.name];
            if (e.dependencies) {
              if (e.dependencies.base)
                for (const n of e.dependencies.base) {
                  s = s.filter((e) => e.layer !== n.layer);
                  const e = ds.base[t][i][n.layer][n.name];
                  s.push({ ...n, ...e });
                }
              if (e.dependencies.accessories)
                for (const t of e.dependencies.accessories) {
                  s = s.filter((e) => e.layer !== t.layer);
                  const e = ds.accessories[t.layer][t.name];
                  s.push({ ...t, ...e });
                }
            }
          }
          for (const n of e.accessories) {
            const e = ds.accessories[n.layer][n.name];
            if (e.dependencies) {
              if (e.dependencies.base)
                for (const n of e.dependencies.base) {
                  s = s.filter((e) => e.layer !== n.layer);
                  const e = ds.base[t][i][n.layer][n.name];
                  s.push({ ...n, ...e });
                }
              if (e.dependencies.accessories)
                for (const t of e.dependencies.accessories) {
                  s = s.filter((e) => e.layer !== t.layer);
                  const e = ds.accessories[t.layer][t.name];
                  s.push({ ...t, ...e });
                }
            }
          }
          s.sort((e) => ("Body" === e.layer ? -1 : 1)), (this.assets = s);
        },
        hasCompositionAsset(e) {
          return (
            void 0 !==
            this.composition[e.type].find(
              (t) => t.layer === e.layer && t.name === e.name
            )
          );
        },
        addCompositionAsset(e) {
          (this.composition[e.type] = this.composition[e.type].filter(
            (t) => t.layer !== e.layer
          )),
            this.composition[e.type].push(e),
            this.setComposition(this.composition);
        },
        removeCompositionAsset(e) {
          const t = this.composition;
          (t[e.type] = t[e.type].filter(
            (t) => t.layer !== e.layer && t.name !== e.name
          )),
            this.setComposition(t);
        },
        getImageFromGlb(e) {
          const t = this.composition.clan,
            i = this.composition.gender;
          let s = "";
          return (
            (s =
              "base" === e.type
                ? ds.base[t][i][e.layer][e.name].file
                : ds.accessories[e.layer][e.name].file),
            s.replace(".glb", ".png")
          );
        },
        resetCompositionAsset() {
          this.setComposition(JSON.parse(JSON.stringify(this.baseComposition)));
        },
      },
      us = i("afeb"),
      ps = {
        gui: null,
        config: null,
        init(e) {
          (this.config = e), (this.gui = new us["a"]()), this.gui.close();
        },
        addScene() {
          const e = this.gui.addFolder("Scene");
          e.open();
        },
        addCameraOrbit(e, t) {
          const i = this.gui.addFolder("Camera");
          i.add(e.position, "x", -5, 5, 0.01).onChange(t.update),
            i.add(e.position, "y", -5, 5, 0.01).onChange(t.update),
            i.add(e.position, "z", -5, 5, 0.01).onChange(t.update),
            i.close();
          const s = this.gui.addFolder("Camera target"),
            n = () => {
              e.lookAt(
                this.config.camera.lookAt.x,
                this.config.camera.lookAt.y,
                this.config.camera.lookAt.z
              ),
                (t.target = new as["zb"](
                  this.config.camera.lookAt.x,
                  this.config.camera.lookAt.y,
                  this.config.camera.lookAt.z
                )),
                t.update();
            };
          s.add(this.config.camera.lookAt, "x", -5, 5, 0.01).onChange(n),
            s.add(this.config.camera.lookAt, "y", -5, 5, 0.01).onChange(n),
            s.add(this.config.camera.lookAt, "z", -5, 5, 0.01).onChange(n),
            s.close();
        },
        addHemisphere(e) {
          const t = () => {
              console.log("Hemi Light", {
                intensity: e.intensity,
                skyColor: "0x" + e.color.getHexString(),
                groundColor: "0x" + e.groundColor.getHexString(),
              });
            },
            i = this.gui.addFolder("Hemi Light");
          i.add(e, "intensity", 0, 10, 0.01).onChange(t),
            i.addColor(e, "color").onChange(t),
            i.addColor(e, "groundColor").onChange(t),
            i.open();
        },
        addSpotLight(e, t) {
          const i = () => {
              console.log("Spot Light: " + t.name, {
                position: e.position,
                intensity: e.intensity,
                color: "0x" + e.color.getHexString(),
              });
            },
            s = this.gui.addFolder("Spot Light: " + t.name);
          s.add(e.position, "x", -100, 100, 0.01).onChange(i),
            s.add(e.position, "y", -100, 100, 0.01).onChange(i),
            s.add(e.position, "z", -100, 100, 0.01).onChange(i),
            s.add(e, "intensity", -10, 10, 0.01).onChange(i),
            s.addColor(e, "color").onChange(i),
            s.open();
        },
        addPointLight(e, t) {
          const i = () => {
              console.log("Spot Light: " + t.name, {
                position: e.position,
                intensity: e.intensity,
                distance: e.distance,
                color: "0x" + e.color.getHexString(),
              });
            },
            s = this.gui.addFolder("Point Light: " + t.name);
          s.add(e.position, "x", -10, 10, 0.01).onChange(i),
            s.add(e.position, "y", -10, 10, 0.01).onChange(i),
            s.add(e.position, "z", -10, 10, 0.01).onChange(i),
            s.add(e, "intensity", -10, 10, 0.01).onChange(i),
            s.add(e, "distance", -10, 10, 0.01).onChange(i),
            s.addColor(e, "color").onChange(i),
            s.open();
        },
      },
      hs = {
        animateLoader() {
          return !0;
        },
        animateLoaderLight({ lights: e, render: t }) {
          let i = 0;
          for (const s of e)
            s.light.intensity < s.config.intensity
              ? (s.light.intensity += s.config.intensity / 60)
              : i++;
          return t.alphaLoaderBackground >= 1 && (i += 1), i !== e.length + 1;
        },
      };
    let ms;
    class Os {
      constructor() {
        (this.guiActive = !1),
          (this.scene = null),
          (this.camera = null),
          (this.environment = null),
          (this.assetsLoaded = []),
          (this.sceneComposition = []),
          (this.lightComposition = []),
          (this.renderCallback = []),
          (this.alphaLoaderBackground = 0);
      }
      async toggleLoader(e) {
        if (!e)
          return (
            (this.renderCallback = this.renderCallback.filter(
              (e) => e.callback !== hs.animateLoader
            )),
            (this.alphaLoaderBackground = 0),
            this.renderCallback.push({
              callback: hs.animateLoaderLight,
              params: {
                lights: this.lightComposition,
                scene: this.scene,
                assetsLoaded: this.assetsLoaded,
                render: this,
              },
            }),
            (this.$vue.loadingFinish = !0),
            (this.$vue.assetLoaderLoaded = !1),
            new Promise((e) => {
              setTimeout(() => {
                (this.$vue.loading = !1), (this.$vue.loadingFinish = !1), e();
              }, 1e3);
            })
          );
        (this.$vue.loadingFinish = !1),
          (this.$vue.loading = !0),
          (this.$vue.loadingStepPct = 0),
          (this.$vue.assetLoaderLoaded = !0),
          this.renderCallback.push({ callback: hs.animateLoader });
        for (const t of this.lightComposition) t.light.intensity = 0;
      }
      async reloadAllAssets() {
        (this.$vue.canvasReady = !1),
          await this.toggleLoader(!0),
          (this.$vue.loadingStep = 0);
        for (const t of this.assetsLoaded)
          "Loader" !== t.asset.layer && this.removeAsset(t.asset.layer);
        for (const t of bs.assets)
          await this.loadAsset(t, !1),
            (this.$vue.loadingStepPct = 0),
            this.$vue.loadingStep++;
        const e = [];
        for (const t of this.assetsLoaded)
          bs.assets.find(
            (e) => e.layer === t.asset.layer && e.name === t.asset.name
          ) || e.push(t.asset.layer);
        for (const t of e) this.removeAsset(t);
        await this.toggleLoader(!1), (this.$vue.canvasReady = !0);
      }
      async loadAsset(e) {
        return new Promise((t) => {
          const i = new cs["a"]();
          i.setDecoderPath("/3dmodel/decoder/");
          const s = new os["a"]();
          s.setDRACOLoader(i),
            s.load(
              "/3dmodel/" + e.file,
              (i) => {
                e.log && console.log(i);
                const s = {};
                i.scene.traverse((t) => {
                  t.isMesh &&
                    ((t.castShadow = !0),
                    (t.receiveShadow = !0),
                    (t.material.envMap = this.environment),
                    t.material.map && (t.material.map.anisotropy = 16),
                    ("TubesGEO1" !== t.name && "CyberDetailsGEO1" !== t.name) ||
                      "Meta_Mastermind_Pose_Reduced-v2.glb" !== e.file ||
                      (t.material.color = new as["g"](
                        parseInt("0x00AEFF", 16)
                      )));
                }),
                  this.scene.add(i.scene),
                  this.assetsLoaded.push({ asset: e, object: i, meshColor: s }),
                  t(i);
              },
              (e) => {
                this.$vue.loadingStepPct = e.loaded / e.total;
              }
            );
        });
      }
      removeAsset(e) {
        const t = this.assetsLoaded.find((t) => t.asset.layer === e);
        t && this.scene.remove(t.object.scene),
          (this.assetsLoaded = this.assetsLoaded.filter(
            (t) => t.asset.layer !== e
          ));
      }
      addHemiLight(e) {
        const t = new as["t"](
          parseInt(e.skyColor, 16),
          parseInt(e.groundColor, 16),
          e.intensity
        );
        this.guiActive && ps.addHemisphere(t),
          this.scene.add(t),
          this.sceneComposition.push(t),
          e.animated && this.lightComposition.push({ light: t, config: e });
      }
      addSpotLight(e) {
        const t = new as["j"](parseInt(e.color, 16), e.intensity);
        (t.name = e.name),
          (t.castShadow = e.shadow.cast),
          (t.shadow.bias = e.shadow.bias),
          (t.shadow.mapSize.width = e.shadow.mapSize.width),
          (t.shadow.mapSize.height = e.shadow.mapSize.height),
          t.position.set(e.position.x, e.position.y, e.position.z),
          this.guiActive && ps.addSpotLight(t, e),
          this.scene.add(t),
          e.cameraLinked && this.camera.add(t),
          this.sceneComposition.push(t),
          e.animated && this.lightComposition.push({ light: t, config: e });
      }
      addPointLight(e) {
        const t = new as["db"](parseInt(e.color, 16), e.intensity, e.distance);
        (t.name = e.name),
          (t.castShadow = e.shadow.cast),
          (t.shadow.bias = e.shadow.bias),
          (t.shadow.mapSize.width = e.shadow.mapSize.width),
          (t.shadow.mapSize.height = e.shadow.mapSize.height),
          t.position.set(e.position.x, e.position.y, e.position.z),
          this.guiActive && ps.addPointLight(t, e),
          this.scene.add(t),
          e.cameraLinked && this.camera.add(t),
          this.sceneComposition.push(t),
          e.animated && this.lightComposition.push({ light: t, config: e });
      }
      async addEnvironmentMap() {
        return new Promise((e) => {
          new ls["a"]().load(ms.scene.environment, (t) => {
            (t.mapping = as["l"]), (this.environment = t), e();
          });
        });
      }
      async initialisation(e, t) {
        (this.$vue = e),
          (bs.baseComposition = JSON.parse(JSON.stringify(t))),
          bs.setComposition(t),
          (ms = t.settings),
          this.createScene(),
          this.createCamera(),
          this.createRenderer(),
          this.createOrbit(),
          this.guiActive &&
            (ps.init(ms),
            ps.addScene(this.scene),
            ps.addCameraOrbit(this.camera, this.orbit)),
          this.addHemiLight(ms.hemiLight);
        for (const s of ms.spotLight) this.addSpotLight(s);
        for (const s of ms.pointLights) this.addPointLight(s);
        await this.addEnvironmentMap();
        const i = () => {
          const e = this.renderer.domElement;
          (this.camera.aspect = e.clientWidth / e.clientHeight),
            this.camera.updateProjectionMatrix(),
            this.renderer.render(this.scene, this.camera);
          for (const t of this.renderCallback)
            t.callback(t.params) ||
              (this.renderCallback = this.renderCallback.filter(
                (e) => e !== t
              ));
          this.requestAnimationFrame = window.requestAnimationFrame(i);
        };
        i(), await this.reloadAllAssets();
      }
      stopRenderer() {
        var e;
        window.cancelAnimationFrame(this.requestAnimationFrame),
          null === (e = this.renderer.domElement) || void 0 === e || e.remove();
      }
      createScene() {
        this.scene = new as["mb"]();
      }
      createCamera() {
        (this.camera = new as["cb"](
          30,
          ms.scene.width / ms.scene.height,
          0.1,
          1e3
        )),
          (this.camera.position.x = ms.camera.position.x),
          (this.camera.position.y = ms.camera.position.y),
          (this.camera.position.z = ms.camera.position.z),
          this.scene.add(this.camera);
      }
      createRenderer() {
        (this.renderer = new as["Bb"]({
          precision: "highp",
          antialias: !0,
          alpha: !0,
        })),
          this.renderer.setSize(ms.scene.width, ms.scene.height),
          this.renderer.setPixelRatio(window.devicePixelRatio),
          (this.renderer.toneMapping = as["jb"]),
          (this.renderer.toneMappingExposure = 2.3),
          (this.renderer.shadowMap.enabled = !0),
          document
            .getElementById("model")
            .appendChild(this.renderer.domElement);
      }
      createOrbit() {
        (this.orbit = new rs["a"](this.camera, this.renderer.domElement)),
          (this.orbit.autoRotate = ms.orbit.autoRotate),
          (this.orbit.minPolarAngle = ms.orbit.minPolarAngle),
          (this.orbit.maxPolarAngle = ms.orbit.maxPolarAngle),
          (this.orbit.enableZoom = ms.orbit.enableZoom),
          (this.orbit.enablePan = ms.orbit.enablePan),
          (this.orbit.target = new as["zb"](
            ms.camera.lookAt.x,
            ms.camera.lookAt.y,
            ms.camera.lookAt.z
          )),
          this.camera.lookAt(
            ms.camera.lookAt.x,
            ms.camera.lookAt.y,
            ms.camera.lookAt.z
          );
      }
    }
    new Os();
    const js = { id: "btc-mint", class: "btc-mint" },
      gs = { class: "btc-mint__bg", ref: "btc-mint__bg" },
      vs = { key: 0, class: "btc-mint__container", ref: "btc-mint__container" },
      fs = { class: "btc-mint__menu" },
      ys = { class: "btc-mint__btns" },
      ws = Object(s["i"])(
        "svg",
        { class: "ico" },
        [Object(s["i"])("use", { "xlink:href": "#ico-more" })],
        -1
      );
    function _s(e, t, i, n, a, o) {
      const c = Object(s["I"])("BtcMinting"),
        r = Object(s["I"])("BtcWaitingPayment"),
        l = Object(s["I"])("BtcOrders"),
        d = Object(s["I"])("btcOrderCompleted"),
        b = Object(s["I"])("btcSalesClosed"),
        u = Object(s["I"])("btcMyInscriptions"),
        p = Object(s["I"])("btcNotifications"),
        h = Object(s["I"])("BtcConnect"),
        m = Object(s["I"])("btcDownload");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", js, [
          Object(s["i"])("div", gs, null, 512),
          e.walletConnected
            ? (Object(s["B"])(),
              Object(s["h"])(
                "div",
                vs,
                [
                  Object(s["i"])("div", fs, [
                    Object(s["i"])("div", ys, [
                      e.walletConnected
                        ? Object(s["g"])("", !0)
                        : (Object(s["B"])(),
                          Object(s["h"])(
                            "div",
                            {
                              key: 0,
                              class: Object(s["u"])([
                                "btc-mint__btn --secondary",
                                { "--active": "connect" === e.popup },
                              ]),
                              onClick:
                                t[0] || (t[0] = (t) => (e.popup = "connect")),
                            },
                            Object(s["M"])(e.$t("mint.popup.connect")),
                            3
                          )),
                      e.walletConnected
                        ? (Object(s["B"])(),
                          Object(s["h"])(
                            "div",
                            {
                              key: 1,
                              class: "btc-mint__btn --secondary",
                              onClick:
                                t[1] ||
                                (t[1] = (...e) =>
                                  o.disconnectUserWalletSession &&
                                  o.disconnectUserWalletSession(...e)),
                            },
                            Object(s["M"])(e.$t("mint.popup.disconnect")),
                            1
                          ))
                        : Object(s["g"])("", !0),
                      Object(s["i"])(
                        "div",
                        {
                          class: Object(s["u"])([
                            "btc-mint__btn --secondary",
                            { "--active": "myInscription" === e.menu },
                          ]),
                          onClick:
                            t[2] || (t[2] = (t) => (e.menu = "myInscription")),
                        },
                        "MY AILUS (" +
                          Object(s["M"])(o.nftInscriptions.length) +
                          ")",
                        3
                      ),
                      Object(s["i"])(
                        "div",
                        {
                          class: "btc-mint__btn --secondary --close",
                          onClick:
                            t[3] || (t[3] = (...e) => o.close && o.close(...e)),
                        },
                        [
                          Object(s["k"])(
                            Object(s["M"])(e.$t("mint.popup.close")) + " ",
                            1
                          ),
                          ws,
                        ]
                      ),
                    ]),
                  ]),
                  "minting" === o.step && e.collection && e.collection.id
                    ? (Object(s["B"])(),
                      Object(s["f"])(
                        c,
                        { key: 0, ref: "btc-mint__minting" },
                        null,
                        512
                      ))
                    : Object(s["g"])("", !0),
                  "waiting" === o.step
                    ? (Object(s["B"])(),
                      Object(s["f"])(
                        r,
                        { key: 1, order: o.currentOrder },
                        null,
                        8,
                        ["order"]
                      ))
                    : Object(s["g"])("", !0),
                  "orders" === o.step
                    ? (Object(s["B"])(),
                      Object(s["f"])(
                        l,
                        { key: 2, orders: o.ordersFiltered },
                        null,
                        8,
                        ["orders"]
                      ))
                    : Object(s["g"])("", !0),
                  "completed" === o.step
                    ? (Object(s["B"])(),
                      Object(s["f"])(
                        d,
                        { key: 3, order: o.currentOrder },
                        null,
                        8,
                        ["order"]
                      ))
                    : Object(s["g"])("", !0),
                  "closed" === o.step
                    ? (Object(s["B"])(),
                      Object(s["f"])(
                        b,
                        {
                          key: 4,
                          collection: e.collection,
                          ref: "btc-mint__closing",
                        },
                        null,
                        8,
                        ["collection"]
                      ))
                    : Object(s["g"])("", !0),
                  "myInscription" === o.step
                    ? (Object(s["B"])(),
                      Object(s["f"])(u, { key: 5, orders: e.orders }, null, 8, [
                        "orders",
                      ]))
                    : Object(s["g"])("", !0),
                  e.notif
                    ? (Object(s["B"])(),
                      Object(s["f"])(
                        p,
                        {
                          key: 6,
                          notif: e.notif,
                          onEnd: t[4] || (t[4] = (t) => (e.notif = null)),
                        },
                        null,
                        8,
                        ["notif"]
                      ))
                    : Object(s["g"])("", !0),
                ],
                512
              ))
            : Object(s["g"])("", !0),
          "connect" === e.popup
            ? (Object(s["B"])(), Object(s["f"])(h, { key: 1 }))
            : Object(s["g"])("", !0),
          e.nftDownload
            ? (Object(s["B"])(),
              Object(s["f"])(
                m,
                {
                  key: 2,
                  nft: e.nftDownload,
                  onClose: t[5] || (t[5] = (t) => (e.nftDownload = null)),
                },
                null,
                8,
                ["nft"]
              ))
            : Object(s["g"])("", !0),
        ])
      );
    }
    const ks = (e) => (
        Object(s["E"])("data-v-36b54775"), (e = e()), Object(s["C"])(), e
      ),
      Cs = { class: "btc-mint__minting --padding btc-mint__container-wrapper" },
      Is = { class: "btc-mint__header --inline" },
      Ss = { class: "btc-mint__label --light" },
      As = { key: 0 },
      Ms = ks(() =>
        Object(s["i"])(
          "span",
          { class: "btc-mint__loader --small" },
          [
            Object(s["i"])(
              "svg",
              { class: "btc-mint__ico", viewBox: "0 0 93 95" },
              [
                Object(s["i"])("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M89.0446 60.4346C83.5374 78.1426 67.0202 91 47.5 91C23.4756 91 4 71.5244 4 47.5C4 23.4756 23.4756 4 47.5 4C55.3662 4 62.7448 6.08795 69.1117 9.73988L71.4356 6.46259C64.4072 2.35432 56.2285 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95C68.7374 95 86.7195 81.0625 92.7986 61.8353L89.0446 60.4346Z",
                  fill: "#00FFFF",
                }),
              ]
            ),
          ],
          -1
        )
      ),
      xs = {
        key: 0,
        class: "btc-mint__step btc-mint__bordered btc-mint__bg-black",
      },
      Ts = { key: 0 },
      Bs = { key: 1 },
      Ps = { key: 1, class: "btc-mint__content" },
      Ls = { key: 0, class: "btc-mint__step" },
      $s = ["innerHTML"],
      Es = ["placeholder"],
      Ds = { key: 1, class: "btc-mint__step" },
      Us = ["innerHTML"],
      Ns = ["placeholder"],
      Rs = { key: 2, class: "btc-mint__content" },
      Ws = { class: "btc-mint__step" },
      Fs = { class: "--mb" },
      qs = { class: "btc-mint__row btc-mint__bordered btc-mint__minting" },
      zs = { class: "btc-mint__row btc-mint__minting__count" },
      Hs = ks(() =>
        Object(s["i"])(
          "svg",
          { class: "btc-mint__ico", viewBox: "0 0 62 62" },
          [
            Object(s["i"])("rect", {
              x: "12",
              y: "29",
              width: "37",
              height: "4",
            }),
          ],
          -1
        )
      ),
      Vs = [Hs],
      Gs = { class: "btc-mint__bordered" },
      Ys = ks(() =>
        Object(s["i"])(
          "svg",
          { class: "btc-mint__ico", viewBox: "0 0 14 14" },
          [Object(s["i"])("path", { d: "M8 0H6V6H0V8H6V14H8V8H14V6H8V0Z" })],
          -1
        )
      ),
      Zs = [Ys],
      Ks = { class: "btc-mint__label" },
      Qs = { class: "btc-mint__step" },
      Js = ["innerHTML"],
      Xs = ["placeholder", "disabled"],
      en = { class: "btc-mint__step" },
      tn = ["innerHTML"],
      sn = ["placeholder"],
      nn = { key: 0, class: "btc-mint__step" },
      an = { class: "btc-mint__c-secondary" },
      on = ["innerHTML"],
      cn = { class: "btc-mint__row --w-equal --gap btc-mint__minting__fees" },
      rn = { class: "btc-mint__c-primary-desaturated --mb-s" },
      ln = { class: "btc-mint__c-primary-desaturated" },
      dn = { class: "btc-mint__c-primary-desaturated --mb-s" },
      bn = { class: "btc-mint__c-primary-desaturated" },
      un = { class: "btc-mint__c-primary-desaturated --mb-s" },
      pn = { class: "btc-mint__c-primary-desaturated" },
      hn = ["min"],
      mn = { class: "btc-mint__step" },
      On = ["innerHTML"],
      jn = {
        class:
          "btc-mint__step btc-mint__bordered btc-mint__bg-black btc-mint__minting__resume --relative",
      },
      gn = { key: 0, class: "btc-mint__row --w-equal" },
      vn = { class: "btc-mint__c-primary-desaturated" },
      fn = { class: "btc-mint__c-white btc-mint__price-usd" },
      yn = { key: 1, class: "btc-mint__row --w-equal" },
      wn = { class: "btc-mint__c-primary-desaturated" },
      _n = { class: "btc-mint__c-white btc-mint__price-usd" },
      kn = { key: 2, class: "btc-mint__row --w-equal" },
      Cn = ks(() =>
        Object(s["i"])(
          "div",
          { class: "btc-mint__c-primary-desaturated" },
          [Object(s["i"])("b", null, "- BTC")],
          -1
        )
      ),
      In = ks(() =>
        Object(s["i"])(
          "div",
          { class: "btc-mint__c-white btc-mint__price-usd" },
          "$0",
          -1
        )
      ),
      Sn = ks(() => Object(s["i"])("hr", null, null, -1)),
      An = { key: 3, class: "btc-mint__row --w-equal" },
      Mn = { class: "btc-mint__c-primary-desaturated" },
      xn = { class: "btc-mint__c-white btc-mint__price-usd" },
      Tn = { key: 4, class: "btc-mint__row --w-equal" },
      Bn = ks(() => Object(s["i"])("h4", null, "Estimation Time:", -1)),
      Pn = ks(() =>
        Object(s["i"])(
          "div",
          { class: "btc-mint__c-primary-desaturated" },
          null,
          -1
        )
      ),
      Ln = { class: "btc-mint__c-white btc-mint__price-usd" },
      $n = { key: 2, class: "btc-mint__step --relative" };
    function En(e, t, i, n, a, o) {
      const c = Object(s["I"])("BtcLoaderGlobal"),
        r = Object(s["I"])("BtcCountdown");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", Cs, [
          Object(s["l"])(
            c,
            { show: e.$parent.loaders.global, style: { "z-index": "20" } },
            null,
            8,
            ["show"]
          ),
          Object(s["i"])("div", Is, [
            Object(s["i"])("h2", null, Object(s["M"])(e.$t(o.title)), 1),
            Object(s["i"])("div", Ss, [
              Object(s["k"])(Object(s["M"])(e.$t("mint.supply")) + ": ", 1),
              Object(s["i"])(
                "b",
                null,
                Object(s["M"])(o.collection.getNftMinted()) +
                  "/" +
                  Object(s["M"])(o.collection.getNftTotal()),
                1
              ),
              o.collection.getNftPending() > 0
                ? (Object(s["B"])(),
                  Object(s["h"])("span", As, [
                    Object(s["k"])(" ( "),
                    Ms,
                    Object(s["k"])(
                      " " +
                        Object(s["M"])(o.collection.getNftPending()) +
                        " ) ",
                      1
                    ),
                  ]))
                : Object(s["g"])("", !0),
            ]),
          ]),
          e.publicIsOpen
            ? Object(s["g"])("", !0)
            : (Object(s["B"])(),
              Object(s["h"])("div", xs, [
                e.privateIsOpen
                  ? Object(s["g"])("", !0)
                  : (Object(s["B"])(),
                    Object(s["h"])("div", Ts, [
                      Object(s["k"])("Access List starts in "),
                      Object(s["l"])(
                        r,
                        {
                          date: new Date(17131068e5).toString(),
                          onDone:
                            t[0] || (t[0] = (t) => (e.privateIsOpen = !0)),
                        },
                        null,
                        8,
                        ["date"]
                      ),
                    ])),
                e.privateIsOpen
                  ? (Object(s["B"])(),
                    Object(s["h"])("div", Bs, [
                      Object(s["k"])("Access List closes in "),
                      Object(s["l"])(
                        r,
                        {
                          date: new Date(171315e7).toString(),
                          onDone: t[1] || (t[1] = (t) => (e.publicIsOpen = !0)),
                        },
                        null,
                        8,
                        ["date"]
                      ),
                    ]))
                  : Object(s["g"])("", !0),
              ])),
          o.mintWithWhitelistCompleted
            ? (Object(s["B"])(),
              Object(s["h"])("div", Rs, [
                Object(s["i"])("div", Ws, [
                  Object(s["i"])(
                    "h3",
                    Fs,
                    "1. " + Object(s["M"])(e.$t("mint.amount.title")),
                    1
                  ),
                  Object(s["i"])("div", qs, [
                    Object(s["i"])("div", zs, [
                      Object(s["i"])(
                        "div",
                        {
                          class: Object(s["u"])([
                            "btc-mint__btn --active",
                            { "--disabled": e.count <= 1 },
                          ]),
                          onClick: t[5] || (t[5] = (e) => o.setCount(-1)),
                        },
                        Vs,
                        2
                      ),
                      Object(s["i"])("p", Gs, Object(s["M"])(e.count), 1),
                      Object(s["i"])(
                        "div",
                        {
                          class: Object(s["u"])([
                            "btc-mint__btn --active",
                            { "--disabled": e.count >= o.max },
                          ]),
                          onClick: t[6] || (t[6] = (e) => o.setCount(1)),
                        },
                        Zs,
                        2
                      ),
                    ]),
                    Object(s["i"])("div", Ks, [
                      Object(s["k"])(
                        Object(s["M"])(e.$t("mint.amount.mintPrice")) + ": ",
                        1
                      ),
                      Object(s["i"])(
                        "b",
                        null,
                        Object(s["M"])(o.collection.getPriceBtc(e.count)) +
                          " BTC",
                        1
                      ),
                    ]),
                  ]),
                ]),
                Object(s["i"])("div", Qs, [
                  Object(s["i"])(
                    "h3",
                    null,
                    "2. " + Object(s["M"])(e.$t("mint.recipientAddress.title")),
                    1
                  ),
                  Object(s["i"])(
                    "p",
                    {
                      class: "btc-mint__c-white --mb-s",
                      innerHTML: e.$t("mint.recipientAddress.text"),
                    },
                    null,
                    8,
                    Js
                  ),
                  Object(s["R"])(
                    Object(s["i"])(
                      "input",
                      {
                        type: "text",
                        placeholder: e.$t("mint.recipientAddress.placeholder"),
                        disabled:
                          o.collection.hasWhitelist &&
                          !o.collection.hasPassword &&
                          "unisat" !== !e.$parent.walletConnectedType,
                        "onUpdate:modelValue":
                          t[7] || (t[7] = (t) => (e.ordAddress = t)),
                        class: Object(s["u"])({
                          "--error": null === e.userOrdAddress,
                        }),
                        onChange:
                          t[8] ||
                          (t[8] = (...e) =>
                            o.checkWhitelist && o.checkWhitelist(...e)),
                      },
                      null,
                      42,
                      Xs
                    ),
                    [[s["O"], e.ordAddress]]
                  ),
                ]),
                Object(s["i"])("div", en, [
                  Object(s["i"])(
                    "h3",
                    null,
                    "3. " + Object(s["M"])(e.$t("mint.refundAddress.title")),
                    1
                  ),
                  Object(s["i"])(
                    "p",
                    {
                      class: "btc-mint__c-white --mb-s",
                      innerHTML: e.$t("mint.refundAddress.text"),
                    },
                    null,
                    8,
                    tn
                  ),
                  Object(s["R"])(
                    Object(s["i"])(
                      "input",
                      {
                        type: "text",
                        placeholder: e.$t("mint.refundAddress.placeholder"),
                        "onUpdate:modelValue":
                          t[9] || (t[9] = (t) => (e.cardAddress = t)),
                        class: Object(s["u"])({
                          "--error": null === e.userRefundAddress,
                        }),
                      },
                      null,
                      10,
                      sn
                    ),
                    [[s["O"], e.cardAddress]]
                  ),
                ]),
                e.fees && o.enableUserFees
                  ? (Object(s["B"])(),
                    Object(s["h"])("div", nn, [
                      Object(s["i"])(
                        "h3",
                        an,
                        "4. " + Object(s["M"])(e.$t("mint.fee.title")),
                        1
                      ),
                      Object(s["i"])(
                        "p",
                        {
                          class: "btc-mint__c-white --mb",
                          innerHTML: e.$t("mint.fee.text"),
                        },
                        null,
                        8,
                        on
                      ),
                      Object(s["i"])("div", cn, [
                        Object(s["i"])(
                          "div",
                          {
                            class: Object(s["u"])([
                              "btc-mint__bordered btc-mint__click",
                              { "--active": e.fee === e.fees.hourFee },
                            ]),
                            onClick:
                              t[10] ||
                              (t[10] = (t) => o.setFee(e.fees.hourFee)),
                          },
                          [
                            Object(s["i"])(
                              "h4",
                              null,
                              Object(s["M"])(e.$t("mint.fee.button.economy")),
                              1
                            ),
                            Object(s["i"])("p", rn, [
                              Object(s["i"])(
                                "b",
                                null,
                                Object(s["M"])(e.fees.hourFee) + " sats/vB",
                                1
                              ),
                            ]),
                            Object(s["i"])(
                              "p",
                              ln,
                              Object(s["M"])(
                                e.$t("mint.fee.delay.multipleHours")
                              ),
                              1
                            ),
                          ],
                          2
                        ),
                        Object(s["i"])(
                          "div",
                          {
                            class: Object(s["u"])([
                              "btc-mint__bordered btc-mint__click",
                              { "--active": e.fee === e.fees.fastestFee },
                            ]),
                            onClick:
                              t[11] ||
                              (t[11] = (t) => o.setFee(e.fees.fastestFee)),
                          },
                          [
                            Object(s["i"])(
                              "h4",
                              null,
                              Object(s["M"])(e.$t("mint.fee.button.normal")),
                              1
                            ),
                            Object(s["i"])("p", dn, [
                              Object(s["i"])(
                                "b",
                                null,
                                Object(s["M"])(e.fees.fastestFee) + " sats/vB",
                                1
                              ),
                            ]),
                            Object(s["i"])(
                              "p",
                              bn,
                              "1 " +
                                Object(s["M"])(e.$t("mint.fee.delay.hours")),
                              1
                            ),
                          ],
                          2
                        ),
                        Object(s["i"])(
                          "div",
                          {
                            class: Object(s["u"])([
                              "btc-mint__bordered btc-mint__click",
                              { "--active": e.fee === e.customFees },
                            ]),
                            onClick:
                              t[14] || (t[14] = (t) => o.setFee(e.customFees)),
                          },
                          [
                            Object(s["i"])(
                              "h4",
                              null,
                              Object(s["M"])(e.$t("mint.fee.button.custom")),
                              1
                            ),
                            Object(s["i"])("p", un, [
                              Object(s["i"])(
                                "b",
                                null,
                                Object(s["M"])(e.customFees) + " sats/vB",
                                1
                              ),
                            ]),
                            Object(s["i"])("p", pn, [
                              Object(s["R"])(
                                Object(s["i"])(
                                  "input",
                                  {
                                    type: "number",
                                    min: this.fees.hourFee,
                                    placeholder: "Choose fee",
                                    "onUpdate:modelValue":
                                      t[12] ||
                                      (t[12] = (t) => (e.customFees = t)),
                                    onChange:
                                      t[13] ||
                                      (t[13] = (...e) =>
                                        o.calculAmount && o.calculAmount(...e)),
                                    onkeypress:
                                      "return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))",
                                  },
                                  null,
                                  40,
                                  hn
                                ),
                                [[s["O"], e.customFees]]
                              ),
                            ]),
                          ],
                          2
                        ),
                      ]),
                    ]))
                  : Object(s["g"])("", !0),
                Object(s["i"])("div", mn, [
                  Object(s["i"])(
                    "p",
                    {
                      class: "btc-mint__c-primary-darker --text-center",
                      innerHTML: e.$t("mint.fee.delay.timeNotGuaranteed"),
                    },
                    null,
                    8,
                    On
                  ),
                ]),
                Object(s["i"])("div", jn, [
                  Object(s["l"])(
                    c,
                    { show: e.$parent.loaders.amount },
                    null,
                    8,
                    ["show"]
                  ),
                  e.amount
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", gn, [
                        Object(s["i"])(
                          "h4",
                          null,
                          Object(s["M"])(e.$t("mint.fee.cost.mint")) + ":",
                          1
                        ),
                        Object(s["i"])("div", vn, [
                          Object(s["i"])(
                            "b",
                            null,
                            Object(s["M"])(e.amount.getPriceBtc()) + " BTC",
                            1
                          ),
                        ]),
                        Object(s["i"])(
                          "div",
                          fn,
                          "~$" +
                            Object(s["M"])(
                              e.amount.getPriceUsd(e.$parent.btcPrice)
                            ),
                          1
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                  e.amount
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", yn, [
                        Object(s["i"])(
                          "h4",
                          null,
                          Object(s["M"])(e.$t("mint.fee.cost.network")) + ":",
                          1
                        ),
                        Object(s["i"])("div", wn, [
                          Object(s["i"])(
                            "b",
                            null,
                            Object(s["M"])(e.amount.getFeesBtc()) + " BTC",
                            1
                          ),
                        ]),
                        Object(s["i"])(
                          "div",
                          _n,
                          "~$" +
                            Object(s["M"])(
                              e.amount.getFeesUsd(e.$parent.btcPrice)
                            ),
                          1
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                  e.amount
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", kn, [
                        Object(s["i"])(
                          "h4",
                          null,
                          Object(s["M"])(e.$t("mint.fee.cost.service")) + ":",
                          1
                        ),
                        Cn,
                        In,
                      ]))
                    : Object(s["g"])("", !0),
                  Sn,
                  e.amount
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", An, [
                        Object(s["i"])(
                          "h4",
                          null,
                          Object(s["M"])(e.$t("mint.fee.cost.total")) + ":",
                          1
                        ),
                        Object(s["i"])("div", Mn, [
                          Object(s["i"])(
                            "b",
                            null,
                            Object(s["M"])(e.amount.getTotalBtc()) + " BTC",
                            1
                          ),
                        ]),
                        Object(s["i"])(
                          "div",
                          xn,
                          "~$" +
                            Object(s["M"])(
                              e.amount.getTotalUsd(e.$parent.btcPrice)
                            ),
                          1
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                  !o.enableUserFees && o.collection.estimationTime > 0
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", Tn, [
                        Bn,
                        Pn,
                        Object(s["i"])(
                          "div",
                          Ln,
                          "~" +
                            Object(s["M"])(
                              e.$parent.formatDuration(
                                o.collection.estimationTime
                              )
                            ),
                          1
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                ]),
                e.$parent.maxAllowed > 0
                  ? (Object(s["B"])(),
                    Object(s["h"])(
                      "div",
                      {
                        key: 1,
                        class: "btc-mint__step --relative",
                        onClick:
                          t[15] || (t[15] = (...e) => o.mint && o.mint(...e)),
                      },
                      [
                        Object(s["l"])(
                          c,
                          { show: e.$parent.loaders.mint },
                          null,
                          8,
                          ["show"]
                        ),
                        Object(s["i"])(
                          "div",
                          {
                            class: Object(s["u"])([
                              "btc-mint__btn --active --big",
                              {
                                "--disabled":
                                  e.$parent.loaders.amount || !e.amount,
                              },
                            ]),
                          },
                          Object(s["M"])(e.$t("mint.mint")),
                          3
                        ),
                      ]
                    ))
                  : (Object(s["B"])(),
                    Object(s["h"])("div", $n, [
                      Object(s["l"])(
                        c,
                        { show: e.$parent.loaders.mint },
                        null,
                        8,
                        ["show"]
                      ),
                      Object(s["i"])(
                        "div",
                        {
                          class: Object(s["u"])([
                            "btc-mint__btn --active --big",
                            { "--disabled": !0 },
                          ]),
                          style: { cursor: "default" },
                        },
                        Object(s["M"])(e.$t("mint.notAllowed")),
                        1
                      ),
                    ])),
              ]))
            : (Object(s["B"])(),
              Object(s["h"])("div", Ps, [
                o.collection.hasPassword
                  ? (Object(s["B"])(),
                    Object(s["h"])("div", Ls, [
                      Object(s["i"])(
                        "h3",
                        null,
                        "1. " + Object(s["M"])(e.$t("mint.password.title")),
                        1
                      ),
                      Object(s["i"])(
                        "p",
                        {
                          class: "btc-mint__c-white --mb-s",
                          innerHTML: e.$t("mint.password.text"),
                        },
                        null,
                        8,
                        $s
                      ),
                      Object(s["R"])(
                        Object(s["i"])(
                          "input",
                          {
                            type: "text",
                            placeholder: e.$t("mint.password.placeholder"),
                            "onUpdate:modelValue":
                              t[2] || (t[2] = (t) => (e.passwordWhitelist = t)),
                            class: Object(s["u"])({
                              "--error":
                                null === e.$parent.currentPasswordWhitelist ||
                                !1 === e.$parent.currentPasswordIsValid,
                            }),
                          },
                          null,
                          10,
                          Es
                        ),
                        [[s["O"], e.passwordWhitelist]]
                      ),
                    ]))
                  : o.collection.hasWhitelist
                  ? (Object(s["B"])(),
                    Object(s["h"])("div", Ds, [
                      Object(s["i"])(
                        "h3",
                        null,
                        "1. " + Object(s["M"])(e.$t("mint.wallet.title")),
                        1
                      ),
                      Object(s["i"])(
                        "p",
                        {
                          class: "btc-mint__c-white --mb-s",
                          innerHTML: e.$t("mint.wallet.text"),
                        },
                        null,
                        8,
                        Us
                      ),
                      Object(s["R"])(
                        Object(s["i"])(
                          "input",
                          {
                            type: "text",
                            placeholder: e.$t("mint.wallet.placeholder"),
                            "onUpdate:modelValue":
                              t[3] || (t[3] = (t) => (e.ordAddress = t)),
                            class: Object(s["u"])({
                              "--error":
                                null === e.userOrdAddressIsValid ||
                                !1 === e.userOrdAddressIsValid,
                            }),
                          },
                          null,
                          10,
                          Ns
                        ),
                        [[s["O"], e.ordAddress]]
                      ),
                    ]))
                  : Object(s["g"])("", !0),
                Object(s["i"])(
                  "div",
                  {
                    class: "btc-mint__step --relative",
                    onClick:
                      t[4] ||
                      (t[4] = (...e) =>
                        o.checkWhitelist && o.checkWhitelist(...e)),
                  },
                  [
                    Object(s["l"])(
                      c,
                      { show: e.$parent.loaders.checkWhitelist },
                      null,
                      8,
                      ["show"]
                    ),
                    Object(s["i"])(
                      "div",
                      {
                        class: Object(s["u"])([
                          "btc-mint__btn --active --big",
                          {
                            "--disabled": e.$parent.loaders.amount || !e.amount,
                          },
                        ]),
                      },
                      Object(s["M"])(e.$t("mint.check")),
                      3
                    ),
                  ]
                ),
              ])),
        ])
      );
    }
    var Dn = i("ade3");
    class Un {
      constructor(e) {
        var t;
        Object(Dn["a"])(this, "id", ""),
          Object(Dn["a"])(this, "name", ""),
          Object(Dn["a"])(this, "price", ""),
          Object(Dn["a"])(this, "active", !1),
          Object(Dn["a"])(this, "nfts", { available: 0, pending: 0, total: 0 }),
          Object(Dn["a"])(this, "hasWhitelist", !1),
          Object(Dn["a"])(this, "hasPassword", !1),
          Object(Dn["a"])(this, "parentActive", !0),
          Object(Dn["a"])(this, "estimationTime", 0),
          Object(Dn["a"])(this, "maxPerWallet", null),
          Object(Dn["a"])(this, "maxConfirmation", 2),
          Object(Dn["a"])(this, "vSat", 50),
          e &&
            ((this.id = e.id),
            (this.name = e.name),
            (this.price = e.price),
            (this.active = e.active),
            (this.nfts = e.nfts),
            (this.hasWhitelist = e.hasWhitelist),
            (this.hasPassword = e.hasPassword),
            (this.parentActive = e.hasParent),
            (this.estimationTime = e.estimationTime),
            (this.maxPerWallet = e.maxPerWallet),
            (this.maxConfirmation =
              null !== (t = e.maxConfirmation) && void 0 !== t ? t : 2),
            (this.vSat = e.vSat));
      }
      isSoldOut() {
        return 0 === this.nfts.available && this.nfts.total > 0;
      }
      isClosed() {
        return !this.active;
      }
      getPriceBtc(e = 1) {
        return ((parseFloat(this.price) / 10 ** 8) * e).toFixed(4);
      }
      getNftTotal() {
        return this.nfts.total;
      }
      getNftPending() {
        return this.nfts.pending;
      }
      getNftMinted() {
        return this.nfts.total - this.nfts.available;
      }
      getNftAvailable() {
        return this.nfts.available;
      }
      hasParent() {
        return this.parentActive;
      }
    }
    var Nn = i("cee4"),
      Rn = {
        baseURL: "",
        mockUrls: {},
        init(e) {
          this.baseURL = e;
        },
        async run(e, t, i) {
          const s = new Wn();
          let n = null;
          try {
            for (const e in this.mockUrls) t.match(e) && (t = this.mockUrls[e]);
            const s = t.match(/http?/) ? t : this.baseURL + "/" + t;
            n = await Nn["a"][e](s, i);
          } catch (a) {
            return s.setError(a || "server"), s;
          }
          return s.setData(n), s;
        },
        get(e, t) {
          return this.run("get", e, t);
        },
        post(e, t) {
          return this.run("post", e, t);
        },
      };
    class Wn {
      constructor() {
        this._error = null;
      }
      setData(e) {
        (this._response = e),
          (this._data = e.data),
          this._data.error && this.setError({ response: this._response });
      }
      setError(e) {
        (this._error = e),
          this._error.response &&
            this._error.response.data &&
            (this._data = this._error.response.data);
      }
      error() {
        return null !== this._error;
      }
      errorMsg() {
        return this._error.response && this._error.response.data.message
          ? this._error.response.data.message
          : this._error.message
          ? this._error.message
          : this._error;
      }
      data() {
        return this._data;
      }
      payload() {
        return this._data.payload;
      }
    }
    class Fn {
      constructor(e) {
        Object(Dn["a"])(this, "satoshi", BigInt(0)), (this.satoshi = BigInt(e));
      }
      convert(e) {
        return parseFloat(e.toString()) / 10 ** 8;
      }
      toBtc() {
        return this.convert(this.satoshi);
      }
      toUsd(e) {
        return (this.toBtc() * e).toFixed(2);
      }
      equal(e) {
        return this.satoshi === BigInt(e);
      }
      notEqual(e) {
        return this.satoshi !== BigInt(e);
      }
    }
    class qn {
      constructor(e) {
        Object(Dn["a"])(this, "fees", new Fn(0)),
          Object(Dn["a"])(this, "price", new Fn(0)),
          Object(Dn["a"])(this, "total", new Fn(0)),
          e &&
            ((this.fees = new Fn(e.fees)),
            (this.price = new Fn(e.price)),
            (this.total = new Fn(e.total)));
      }
      getFeesBtc() {
        return this.fees.toBtc();
      }
      getPriceBtc() {
        return this.price.toBtc();
      }
      getTotalBtc() {
        return this.total.toBtc();
      }
      getFeesUsd(e) {
        return this.fees.toUsd(e);
      }
      getPriceUsd(e) {
        return this.price.toUsd(e);
      }
      getTotalUsd(e) {
        return this.total.toUsd(e);
      }
    }
    const zn = Object(s["i"])(
        "svg",
        { class: "btc-mint__ico", viewBox: "0 0 93 95" },
        [
          Object(s["i"])("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M89.0446 60.4346C83.5374 78.1426 67.0202 91 47.5 91C23.4756 91 4 71.5244 4 47.5C4 23.4756 23.4756 4 47.5 4C55.3662 4 62.7448 6.08795 69.1117 9.73988L71.4356 6.46259C64.4072 2.35432 56.2285 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95C68.7374 95 86.7195 81.0625 92.7986 61.8353L89.0446 60.4346Z",
            fill: "#00FFFF",
          }),
        ],
        -1
      ),
      Hn = [zn];
    function Vn(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "div",
          {
            class: Object(s["u"])([
              "btc-mint__loader-global",
              { show: i.show },
            ]),
          },
          Hn,
          2
        )
      );
    }
    var Gn = {
      name: "btcLoaderGlobal",
      props: { show: { type: [Boolean, Number], default: !1 } },
    };
    const Yn = c()(Gn, [["render", Vn]]);
    var Zn = Yn;
    const Kn = { class: "countdown" };
    function Qn(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "span",
          Kn,
          Object(s["M"])(e.days > 0 || i.show.d ? e.days + "d " : "") +
            " " +
            Object(s["M"])(e.hours > 0 || i.show.h ? e.hours + "h " : "") +
            " " +
            Object(s["M"])(e.minutes > 0 || i.show.m ? e.minutes + "m " : "") +
            " " +
            Object(s["M"])(e.seconds > 0 || i.show.s ? e.seconds + "s " : ""),
          1
        )
      );
    }
    var Jn = i("c1df"),
      Xn = i.n(Jn),
      ea =
        (i("d517"),
        {
          props: {
            date: { type: String, default: "" },
            show: {
              type: Object,
              default: () => ({ d: !0, h: !0, m: !0, s: !0 }),
            },
          },
          data: () => ({ days: 0, hours: 0, minutes: 0, seconds: 0 }),
          mounted() {
            this.onInterval(),
              (this.interval = setInterval(this.onInterval, 1e3));
          },
          beforeUnmount() {
            clearInterval(this.interval);
          },
          methods: {
            onInterval() {
              const e = new Date(this.date),
                t = Xn()().countdown(e),
                { days: i, hours: s, minutes: n, seconds: a } = t;
              (this.days = i),
                (this.hours = s),
                (this.minutes = n),
                (this.seconds = a),
                e <= new Date() &&
                  (clearInterval(this.interval), this.$emit("done")),
                0 === this.days &&
                  0 === this.hours &&
                  0 === this.minutes &&
                  0 === this.seconds &&
                  (clearInterval(this.interval), this.$emit("done"));
            },
          },
        });
    i("7eef");
    const ta = c()(ea, [["render", Qn]]);
    var ia = ta,
      sa = {
        name: "btcMinting",
        components: { BtcCountdown: ia, BtcLoaderGlobal: Zn },
        data: () => ({
          count: 1,
          fee: 35,
          customFees: 70,
          fees: null,
          ordAddress: null,
          userOrdAddress: "",
          cardAddress: null,
          userRefundAddress: "",
          amount: null,
          ordAddressWhitelist: null,
          userOrdAddressWhitelist: "",
          userOrdAddressIsValid: null,
          passwordWhitelist: null,
          privateIsOpen: !1,
          publicIsOpen: !1,
        }),
        computed: {
          title() {
            return this.mintWithWhitelistCompleted
              ? "mint.title.mint"
              : "mint.title.whitelist";
          },
          mintWithWhitelistCompleted() {
            return (
              (!this.collection.hasPassword && !this.collection.hasWhitelist) ||
              this.$parent.currentPasswordIsValid ||
              this.userOrdAddressIsValid
            );
          },
          collection() {
            return this.$parent.collection || new Un();
          },
          max() {
            return this.collection.getNftAvailable() > this.$parent.maxAllowed
              ? this.$parent.maxAllowed
              : this.collection.getNftAvailable();
          },
          enableUserFees() {
            return !this.collection.hasParent();
          },
        },
        async mounted() {
          localStorage.getItem("_btc_ordinal_address") &&
            ((this.ordAddress = localStorage.getItem("_btc_ordinal_address")),
            (this.ordAddressWhitelist = localStorage.getItem(
              "_btc_ordinal_address"
            ))),
            localStorage.getItem("_btc_cardinal_address") &&
              (this.cardAddress = localStorage.getItem(
                "_btc_cardinal_address"
              )),
            await this.$parent.setLoader("global", !0),
            await this.getCurrentFees(),
            this.enableUserFees || (this.fee = this.collection.vSat),
            await this.checkWhitelist(),
            await this.calculAmount(),
            await this.$parent.setLoader("global", !1);
        },
        watch: {
          ordAddress() {
            this.userOrdAddress = this.ordAddress;
          },
          passwordWhitelist() {
            this.$parent.currentPasswordWhitelist = this.passwordWhitelist;
          },
          cardAddress() {
            this.userRefundAddress = this.cardAddress;
          },
          customFees() {
            this.fee = Math.abs(this.customFees);
          },
          async collection() {
            this.enableUserFees ||
              this.fee === this.collection.vSat ||
              ((this.fee = this.collection.vSat), await this.calculAmount());
          },
        },
        methods: {
          setCount(e) {
            (this.count === this.max && 1 === e) ||
              (1 === this.count && -1 === e) ||
              ((this.count += e),
              this.count > this.max && (this.count = this.max),
              this.count < 1 && (this.count = 1),
              this.calculAmount());
          },
          setFee(e) {
            (this.fee = e), this.calculAmount();
          },
          async getCurrentFees() {
            const e = await Rn.get(
              "https://mempool.space/api/v1/fees/recommended"
            );
            e.error()
              ? this.$parent.showNotif({
                  type: "error",
                  text: this.$t("mint.notifs.errors.gas"),
                })
              : ((this.fees = e.data()),
                (this.customFees = 2 * this.fees.fastestFee),
                this.fees.hourFee === this.fees.fastestFee &&
                  (this.fees.hourFee -= 1),
                (this.fee = this.fees.fastestFee));
          },
          async calculAmount() {
            this.enableUserFees &&
              this.customFees < this.fees.hourFee &&
              (this.customFees = this.fees.hourFee),
              await this.$parent.setLoader("amount", !0),
              await this.$parent.setLoader("mint", !0);
            const e = await Rn.get(
              `amount/${this.collection.id}/${this.count}/${this.fee}`
            );
            await this.$parent.setLoader("amount", !1),
              await this.$parent.setLoader("mint", !1),
              e.error()
                ? this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.cost"),
                  })
                : (this.amount = new qn(e.data()));
          },
          async mint() {
            if ("" === this.userOrdAddress || !this.userOrdAddress)
              return void (this.userOrdAddress = null);
            if (this.$parent.loaders.amount || this.$parent.loaders.mint)
              return;
            if (!this.userRefundAddress)
              return void this.$parent.showNotif({
                type: "error",
                text: this.$t("mint.notifs.errors.userRefundAddress"),
              });
            if (this.enableUserFees) {
              if (this.fee < this.fees.hourFee)
                return void this.$parent.showNotif({
                  type: "error",
                  text: this.$t("mint.notifs.errors.gasTooLow"),
                });
            } else this.fee = this.collection.vSat;
            localStorage.setItem("_btc_ordinal_address", this.userOrdAddress),
              await this.$parent.setLoader("mint", !0);
            const e = await Rn.post("order", {
              collectionId: this.collection.id,
              userOrdAddress: this.userOrdAddress,
              userRefundAddress: this.userRefundAddress,
              nftCount: this.count,
              vSat: this.fee,
              password: this.$parent.currentPasswordWhitelist,
            });
            if (e.error()) {
              await this.$parent.setLoader("mint", !1);
              const t = e.errorMsg();
              return t && t.includes("address is not whitelist")
                ? this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.notWhitelisted"),
                  })
                : t && t.includes("wrong password")
                ? this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.passwordBad"),
                  })
                : t && t.includes("too many inscriptions asked")
                ? this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.maxAllowed"),
                  })
                : t && t.includes("too low")
                ? this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.gasTooLow"),
                  })
                : void this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.orders"),
                  });
            }
            (await this.$parent.getOrders(this.userOrdAddress)) &&
              (this.$parent.setUserWalletSession(
                this.userRefundAddress,
                this.userOrdAddress
              ),
              this.$parent.startAutoRefresh(),
              await this.$parent.setLoader("mint", !1),
              (this.$parent.currentOrderId = e.data().id));
          },
          async checkWhitelist() {
            if (
              this.collection.hasPassword &&
              !this.$parent.currentPasswordWhitelist
            )
              return void (this.$parent.currentPasswordWhitelist = null);
            if (
              this.collection.hasWhitelist &&
              !this.collection.hasPassword &&
              !this.userOrdAddressIsValid &&
              !this.ordAddress
            )
              return void (this.userOrdAddressIsValid = null);
            if (this.collection.maxPerWallet && !this.ordAddress) return;
            await this.$parent.setLoader("checkWhitelist", !0),
              await this.$parent.setLoader("amount", !0),
              await this.$parent.setLoader("mint", !0);
            const e = await Rn.post(`collection/${this.collection.id}/check`, {
              address: this.ordAddress,
              password: this.$parent.currentPasswordWhitelist,
            });
            if (e.error())
              return (
                await this.$parent.setLoader("checkWhitelist", !1),
                await this.$parent.setLoader("amount", !1),
                await this.$parent.setLoader("mint", !1),
                void this.$parent.showNotif({
                  type: "error",
                  text: this.$t("mint.notifs.errors.whitelist"),
                })
              );
            await this.$parent.setLoader("checkWhitelist", !1),
              await this.$parent.setLoader("amount", !1),
              await this.$parent.setLoader("mint", !1);
            const t = e.data();
            (this.userOrdAddressIsValid = t.addressIsValid),
              (this.$parent.currentPasswordIsValid = t.passwordIsValid),
              void 0 !== t.numberAllowed &&
                -1 !== t.numberAllowed &&
                (this.$parent.maxAllowed = t.numberAllowed),
              this.collection.hasPassword &&
              !this.$parent.currentPasswordIsValid
                ? this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.passwordBad"),
                  })
                : !this.collection.hasWhitelist ||
                  this.collection.hasPassword ||
                  this.userOrdAddressIsValid ||
                  this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.whitelistWalletBad"),
                  });
          },
        },
      };
    i("1f8a");
    const na = c()(sa, [
      ["render", En],
      ["__scopeId", "data-v-36b54775"],
    ]);
    var aa = na;
    const oa = (e) => (
        Object(s["E"])("data-v-7c5ee0e0"), (e = e()), Object(s["C"])(), e
      ),
      ca = { class: "btc-mint__waiting --padding btc-mint__container-wrapper" },
      ra = { class: "btc-mint__header --mb-g" },
      la = { key: 0 },
      da = { key: 1 },
      ba = { key: 2 },
      ua = { class: "btc-mint__label --light --mb-xs" },
      pa = { class: "btc-mint__row --gap-s" },
      ha = { class: "btc-mint__label --light" },
      ma = { class: "btc-mint__label --light" },
      Oa = { key: 0 },
      ja = { class: "btc-mint__row --col --mb" },
      ga = oa(() => Object(s["i"])("h3", null, "Will be Refunded", -1)),
      va = oa(() =>
        Object(s["i"])(
          "p",
          { class: "btc-mint__c-white --mb" },
          "This order will be refunded.",
          -1
        )
      ),
      fa = { class: "btc-mint__c-white --mb" },
      ya = { class: "btc-mint__c-white --mb" },
      wa = ["href"],
      _a = { key: 1 },
      ka = { class: "btc-mint__row --col --mb" },
      Ca = oa(() => Object(s["i"])("h3", null, "has been refunded", -1)),
      Ia = oa(() =>
        Object(s["i"])(
          "p",
          { class: "btc-mint__c-white --mb" },
          "This order has already been refunded.",
          -1
        )
      ),
      Sa = { class: "btc-mint__c-white --mb" },
      Aa = { class: "btc-mint__c-white --mb" },
      Ma = ["href"],
      xa = { class: "btc-mint__c-white --mb" },
      Ta = ["href"],
      Ba = { key: 2, class: "btc-mint__content" },
      Pa = { key: 0, class: "btc-mint__row --center --mb-g" },
      La = { src: "", alt: "", ref: "qrcode" },
      $a = { key: 1, class: "btc-mint__step" },
      Ea = oa(() =>
        Object(s["i"])(
          "div",
          { class: "btc-mint__row --align-center --col --mb" },
          [
            Object(s["i"])("h3", null, "Pay on chain btc"),
            Object(s["i"])(
              "p",
              { class: "btc-mint__c-white" },
              "Copy address and amount below:"
            ),
          ],
          -1
        )
      ),
      Da = { class: "btc-mint__input --mb-s" },
      Ua = ["value"],
      Na = { class: "btc-mint__bordered btc-mint__bg-black --mb" },
      Ra = { class: "btc-mint__row --mb-s" },
      Wa = oa(() =>
        Object(s["i"])("h4", { class: "btc-mint__w-fixed" }, "Total", -1)
      ),
      Fa = { class: "btc-mint__c-primary" },
      qa = {
        class:
          "btc-mint__c-white btc-mint__w-fixed --text-right btc-mint__price-usd",
      },
      za = { class: "btc-mint__row --mb-s" },
      Ha = oa(() =>
        Object(s["i"])("h4", { class: "btc-mint__w-fixed" }, "Confirmed", -1)
      ),
      Va = { class: "btc-mint__c-primary" },
      Ga = {
        class:
          "btc-mint__c-white btc-mint__w-fixed --text-right btc-mint__price-usd",
      },
      Ya = { class: "btc-mint__input --light" },
      Za = oa(() =>
        Object(s["i"])("h4", { class: "btc-mint__w-fixed" }, "Needed", -1)
      ),
      Ka = ["value"],
      Qa = { key: 2, class: "btc-mint__step --relative" },
      Ja = { class: "btc-mint__step btc-mint__bordered btc-mint__bg-black" },
      Xa = ["onClick"],
      eo = { class: "btc-mint__c-primary" },
      to = { class: "btc-mint__c-white btc-mint__price-usd" },
      io = { key: 0, class: "btc-mint__waiting__loader" },
      so = oa(() =>
        Object(s["i"])(
          "div",
          { class: "btc-mint__loader --mb-s" },
          [
            Object(s["i"])(
              "svg",
              { class: "btc-mint__ico", viewBox: "0 0 93 95" },
              [
                Object(s["i"])("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M89.0446 60.4346C83.5374 78.1426 67.0202 91 47.5 91C23.4756 91 4 71.5244 4 47.5C4 23.4756 23.4756 4 47.5 4C55.3662 4 62.7448 6.08795 69.1117 9.73988L71.4356 6.46259C64.4072 2.35432 56.2285 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95C68.7374 95 86.7195 81.0625 92.7986 61.8353L89.0446 60.4346Z",
                  fill: "#00FFFF",
                }),
              ]
            ),
          ],
          -1
        )
      ),
      no = { key: 0, class: "btc-mint__c-white" },
      ao = { key: 1, class: "btc-mint__c-white" },
      oo = { key: 1, class: "btc-mint__waiting__loader" },
      co = { class: "btc-mint__c-white" },
      ro = { class: "btc-mint__step" },
      lo = { class: "btc-mint__row btc-mint__info --relative --align-center" },
      bo = { key: 0, class: "btc-mint__c-primary-darker" },
      uo = { key: 1, class: "btc-mint__c-primary-darker" },
      po = { key: 2, class: "btc-mint__c-primary-darker" },
      ho = { class: "btc-mint__c-primary-darker" };
    function mo(e, t, i, n, a, o) {
      const c = Object(s["I"])("BtcLoaderGlobal");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", ca, [
          Object(s["i"])("div", ra, [
            o.collectionClose || o.fullPaiementPending
              ? !o.collectionClose && o.fullPaiementPending
                ? (Object(s["B"])(),
                  Object(s["h"])(
                    "h2",
                    da,
                    Object(s["M"])(e.$t("mint.title.waitingConfirmations")),
                    1
                  ))
                : o.collectionClose
                ? (Object(s["B"])(),
                  Object(s["h"])(
                    "h2",
                    ba,
                    Object(s["M"])(e.$t("mint.title.orderDetails")),
                    1
                  ))
                : Object(s["g"])("", !0)
              : (Object(s["B"])(),
                Object(s["h"])(
                  "h2",
                  la,
                  Object(s["M"])(e.$t("mint.title.waitingPaiement")),
                  1
                )),
            Object(s["i"])("div", ua, "ID: " + Object(s["M"])(i.order.id), 1),
            Object(s["i"])("div", pa, [
              Object(s["i"])(
                "div",
                ha,
                "x" +
                  Object(s["M"])(i.order.nftCount) +
                  " Artifact" +
                  Object(s["M"])(i.order.nftCount > 1 ? "s" : ""),
                1
              ),
              Object(s["i"])(
                "div",
                ma,
                Object(s["M"])(i.order.vSats) + " vsats/vB",
                1
              ),
            ]),
          ]),
          o.isFullRefund
            ? (Object(s["B"])(),
              Object(s["h"])("div", Oa, [
                Object(s["i"])("div", ja, [
                  ga,
                  (Object(s["B"])(!0),
                  Object(s["h"])(
                    s["a"],
                    null,
                    Object(s["H"])(
                      i.order.refunds,
                      (e, t) => (
                        Object(s["B"])(),
                        Object(s["h"])("div", { key: t }, [
                          va,
                          Object(s["i"])(
                            "p",
                            fa,
                            "Amount: " +
                              Object(s["M"])(i.order.totalAmount.toBtc()) +
                              " BTC",
                            1
                          ),
                          Object(s["i"])("p", ya, [
                            Object(s["k"])(" Refund address: "),
                            Object(s["i"])(
                              "a",
                              {
                                href:
                                  "https://mempool.space/address/" +
                                  e.userRefundAddress,
                                target: "_blank",
                              },
                              Object(s["M"])(e.userRefundAddress),
                              9,
                              wa
                            ),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]))
            : Object(s["g"])("", !0),
          o.isFullRefunded
            ? (Object(s["B"])(),
              Object(s["h"])("div", _a, [
                Object(s["i"])("div", ka, [
                  Ca,
                  Ia,
                  (Object(s["B"])(!0),
                  Object(s["h"])(
                    s["a"],
                    null,
                    Object(s["H"])(
                      i.order.refunds,
                      (e, t) => (
                        Object(s["B"])(),
                        Object(s["h"])("div", { key: t }, [
                          Object(s["i"])(
                            "p",
                            Sa,
                            "Amount: " +
                              Object(s["M"])(new o.BtcValue(e.amount).toBtc()) +
                              " BTC",
                            1
                          ),
                          Object(s["i"])("p", Aa, [
                            Object(s["k"])(" Refund address: "),
                            Object(s["i"])(
                              "a",
                              {
                                href:
                                  "https://mempool.space/address/" +
                                  e.userRefundAddress,
                                target: "_blank",
                              },
                              Object(s["M"])(e.userRefundAddress),
                              9,
                              Ma
                            ),
                          ]),
                          Object(s["i"])("p", xa, [
                            Object(s["k"])(" Tx: "),
                            Object(s["i"])(
                              "a",
                              {
                                href: "https://mempool.space/tx/" + e.tx,
                                target: "_blank",
                              },
                              Object(s["M"])(e.tx),
                              9,
                              Ta
                            ),
                          ]),
                        ])
                      )
                    ),
                    128
                  )),
                ]),
              ]))
            : Object(s["g"])("", !0),
          o.isFullRefund || o.isFullRefunded
            ? Object(s["g"])("", !0)
            : (Object(s["B"])(),
              Object(s["h"])("div", Ba, [
                o.collectionClose || o.fullPaiementPending
                  ? Object(s["g"])("", !0)
                  : (Object(s["B"])(),
                    Object(s["h"])("div", Pa, [
                      Object(s["i"])("img", La, null, 512),
                    ])),
                o.collectionClose || o.fullPaiementPending
                  ? Object(s["g"])("", !0)
                  : (Object(s["B"])(),
                    Object(s["h"])("div", $a, [
                      Ea,
                      Object(s["i"])("div", Da, [
                        Object(s["i"])(
                          "input",
                          {
                            type: "text",
                            value: i.order.receiveAddress,
                            readonly: "",
                          },
                          null,
                          8,
                          Ua
                        ),
                        Object(s["i"])(
                          "div",
                          {
                            class:
                              "btc-mint__btn btc-mint__btn-primary btc-mint__btn-active",
                            ref: "receiveAddress",
                            onClick:
                              t[0] ||
                              (t[0] = (t) =>
                                e.$parent.copyClipboard(
                                  i.order.receiveAddress,
                                  e.$refs.receiveAddress
                                )),
                          },
                          "COPY",
                          512
                        ),
                      ]),
                      Object(s["i"])("div", Na, [
                        Object(s["i"])("div", Ra, [
                          Wa,
                          Object(s["i"])("div", Fa, [
                            Object(s["i"])(
                              "b",
                              null,
                              Object(s["M"])(i.order.totalAmount.toBtc()) +
                                " BTC",
                              1
                            ),
                          ]),
                          Object(s["i"])(
                            "div",
                            qa,
                            "~$" +
                              Object(s["M"])(
                                i.order.totalAmount.toUsd(e.$parent.btcPrice)
                              ),
                            1
                          ),
                        ]),
                        Object(s["i"])("div", za, [
                          Ha,
                          Object(s["i"])("div", Va, [
                            Object(s["i"])(
                              "b",
                              null,
                              Object(s["M"])(i.order.totalReceived.toBtc()) +
                                " BTC",
                              1
                            ),
                          ]),
                          Object(s["i"])(
                            "div",
                            Ga,
                            "~$" +
                              Object(s["M"])(
                                i.order.totalReceived.toUsd(e.$parent.btcPrice)
                              ),
                            1
                          ),
                        ]),
                        Object(s["i"])("div", Ya, [
                          Za,
                          Object(s["i"])(
                            "input",
                            {
                              type: "text",
                              value: i.order.totalNeeded.toBtc() + " BTC",
                              readonly: "",
                              class: "btc-mint__c-primary --text-center",
                            },
                            null,
                            8,
                            Ka
                          ),
                          Object(s["i"])(
                            "div",
                            {
                              class:
                                "btc-mint__btn btc-mint__btn-primary btc-mint__btn-active",
                              ref: "totalAmount",
                              onClick:
                                t[1] ||
                                (t[1] = (t) =>
                                  e.$parent.copyClipboard(
                                    i.order.totalNeeded.toBtc(),
                                    e.$refs.totalAmount
                                  )),
                            },
                            "COPY",
                            512
                          ),
                        ]),
                      ]),
                    ])),
                !e.$parent.walletConnected ||
                o.collectionClose ||
                o.fullPaiementPending ||
                "phantom" === e.$parent.walletConnectedType
                  ? Object(s["g"])("", !0)
                  : (Object(s["B"])(),
                    Object(s["h"])("div", Qa, [
                      Object(s["l"])(
                        c,
                        { show: e.$parent.loaders.payWithWallet },
                        null,
                        8,
                        ["show"]
                      ),
                      Object(s["i"])(
                        "div",
                        {
                          class: "btc-mint__btn --big",
                          onClick:
                            t[2] ||
                            (t[2] = (...e) =>
                              o.payWithWallet && o.payWithWallet(...e)),
                        },
                        Object(s["M"])(o.payWithWalletText),
                        1
                      ),
                    ])),
                Object(s["i"])("div", Ja, [
                  (Object(s["B"])(!0),
                  Object(s["h"])(
                    s["a"],
                    null,
                    Object(s["H"])(
                      i.order.receivesTransactions,
                      (t) => (
                        Object(s["B"])(),
                        Object(s["h"])(
                          "div",
                          {
                            class: "btc-mint__row btc-mint__paiement --mb-s",
                            key: t.id,
                          },
                          [
                            Object(s["i"])(
                              "h4",
                              {
                                class: "btc-mint__w-fixed btc-mint__link",
                                onClick: (e) => o.openTx(t),
                              },
                              Object(s["M"])(t.tx.substr(0, 10)) + "...",
                              9,
                              Xa
                            ),
                            Object(s["i"])("div", eo, [
                              Object(s["i"])(
                                "b",
                                null,
                                Object(s["M"])(t.amount.toBtc()) + " BTC",
                                1
                              ),
                            ]),
                            Object(s["i"])(
                              "div",
                              to,
                              "~$" +
                                Object(s["M"])(
                                  t.amount.toUsd(e.$parent.btcPrice)
                                ),
                              1
                            ),
                            Object(s["i"])(
                              "div",
                              {
                                class: Object(s["u"])([
                                  "btc-mint__c-white btc-mint__w-fixed --text-right",
                                  {
                                    "btc-mint__c-primary": t.confirmations >= 6,
                                  },
                                ]),
                              },
                              "Confirms: " +
                                Object(s["M"])(t.confirmations) +
                                " / " +
                                Object(s["M"])(o.confirmationsCount),
                              3
                            ),
                          ]
                        )
                      )
                    ),
                    128
                  )),
                  o.collectionClose
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", oo, [
                        Object(s["i"])(
                          "p",
                          co,
                          Object(s["M"])(e.$t("mint.mintClosed")),
                          1
                        ),
                      ]))
                    : (Object(s["B"])(),
                      Object(s["h"])("div", io, [
                        so,
                        o.fullPaiementPending
                          ? (Object(s["B"])(),
                            Object(s["h"])(
                              "p",
                              ao,
                              Object(s["M"])(
                                e.$t("mint.waitingPaiementConfirm")
                              ),
                              1
                            ))
                          : (Object(s["B"])(),
                            Object(s["h"])(
                              "p",
                              no,
                              Object(s["M"])(e.$t("mint.waitingPaiement")),
                              1
                            )),
                      ])),
                ]),
                Object(s["i"])("div", ro, [
                  Object(s["i"])("div", lo, [
                    Object(s["l"])(
                      c,
                      { show: e.$parent.loaders.orders },
                      null,
                      8,
                      ["show"]
                    ),
                    Object(s["i"])("div", null, [
                      o.fullPaiementPending
                        ? (Object(s["B"])(),
                          Object(s["h"])(
                            "p",
                            bo,
                            Object(s["M"])(e.$t("mint.mintDelay")),
                            1
                          ))
                        : Object(s["g"])("", !0),
                      i.order.canExpire()
                        ? (Object(s["B"])(),
                          Object(s["h"])("p", uo, [
                            Object(s["k"])(
                              Object(s["M"])(e.$t("mint.expiration")) + " ",
                              1
                            ),
                            Object(s["i"])(
                              "b",
                              null,
                              Object(s["M"])(
                                i.order.expirationDate.toLocaleDateString()
                              ) +
                                " " +
                                Object(s["M"])(
                                  i.order.expirationDate.toLocaleTimeString()
                                ),
                              1
                            ),
                          ]))
                        : "EXPIRED" !== i.order.getState()
                        ? (Object(s["B"])(),
                          Object(s["h"])(
                            "p",
                            po,
                            Object(s["M"])(e.$t("mint.noExpiration")),
                            1
                          ))
                        : Object(s["g"])("", !0),
                      Object(s["i"])(
                        "p",
                        ho,
                        Object(s["M"])(e.$t("mint.refresh")),
                        1
                      ),
                    ]),
                    Object(s["i"])(
                      "div",
                      {
                        class: "btc-mint__btn --active",
                        onClick:
                          t[3] ||
                          (t[3] = (t) =>
                            e.$parent.getOrders(i.order.userOrdAddress)),
                      },
                      "REFRESH"
                    ),
                  ]),
                ]),
              ])),
        ])
      );
    }
    var Oo = i("d055f"),
      jo = i.n(Oo);
    class go {
      constructor(e) {
        Object(Dn["a"])(this, "id", ""),
          Object(Dn["a"])(this, "userOrdAddress", ""),
          Object(Dn["a"])(this, "receiveAddress", ""),
          Object(Dn["a"])(this, "totalAmount", new Fn(0)),
          Object(Dn["a"])(this, "totalNeeded", new Fn(0)),
          Object(Dn["a"])(this, "totalReceived", new Fn(0)),
          Object(Dn["a"])(this, "fees", new Fn(0)),
          Object(Dn["a"])(this, "state", "WAITING"),
          Object(Dn["a"])(this, "nftCount", 0),
          Object(Dn["a"])(this, "vSats", 0),
          Object(Dn["a"])(this, "receivesTransactions", []),
          Object(Dn["a"])(this, "nftsInscriptions", []),
          Object(Dn["a"])(this, "createdAt", new Date()),
          Object(Dn["a"])(this, "expirationDate", new Date()),
          Object(Dn["a"])(this, "queue", { position: 0, total: 0 }),
          Object(Dn["a"])(this, "estimationTime", 0),
          Object(Dn["a"])(this, "userRefundAddress", ""),
          Object(Dn["a"])(this, "cursed", !1),
          Object(Dn["a"])(this, "refunds", []),
          e &&
            ((this.id = e.id),
            (this.userOrdAddress = e.userOrdAddress),
            (this.receiveAddress = e.receiveAddress),
            (this.userRefundAddress = e.userRefundAddress),
            (this.totalAmount = new Fn(e.totalAmount)),
            (this.totalNeeded = new Fn(e.totalNeeded)),
            (this.totalReceived = new Fn(e.totalReceived)),
            (this.fees = new Fn(e.totalSatsFees)),
            (this.state = e.state),
            (this.nftCount = e.nftCount),
            (this.vSats = e.vSats),
            (this.cursed = e.cursed),
            (this.refunds = e.refunds),
            e.queue && (this.queue = e.queue),
            e.estimationTime && (this.estimationTime = e.estimationTime),
            (this.receivesTransactions = e.receivesTransactions.map(
              (e) => new vo(e)
            )),
            (this.nftsInscriptions = e.ordinals.map((e) => new fo(e))),
            (this.expirationDate = new Date(e.expirationDate)),
            (this.createdAt = new Date(e.createdAt)));
      }
      getOrderState() {
        return this.nftsInscriptions.length > 0 ? "completed" : "waiting";
      }
      isMintCompleted() {
        for (const e of this.nftsInscriptions) if (!e.isMinted()) return !1;
        return !0;
      }
      nftMintingStat() {
        const e = {
          total: this.nftsInscriptions.length,
          minting: 0,
          minted: 0,
        };
        for (const t of this.nftsInscriptions)
          (e.minted += t.isMinted() ? 1 : 0),
            (e.minting += t.isMinted() ? 0 : 1);
        return e;
      }
      getState() {
        switch (this.state) {
          case "WAITING":
            return this.isFullPaiementPending()
              ? "PAYMENT PROGRESS"
              : "PENDING PAYMENT";
          case "MINTING":
            return "INSCRIBE IN PROGRESS";
          case "COMPLETED":
            return "COMPLETED";
          case "RECEIVE_ALL_FUNDS":
            return "RECEIVED ALL FUNDS";
          case "REFUND":
            return "WILL BE REFUNDED";
        }
        return this.state;
      }
      isFullPaiementPending() {
        if (this.receivesTransactions.length <= 0) return !1;
        let e = BigInt(0);
        for (const t of this.receivesTransactions) e += t.amount.satoshi;
        return e === this.totalAmount.satoshi;
      }
      canExpire() {
        return (
          this.receivesTransactions.length <= 0 && "EXPIRED" !== this.state
        );
      }
      isExpired() {
        return this.expirationDate <= new Date() && "EXPIRED" === this.state;
      }
    }
    class vo {
      constructor(e) {
        Object(Dn["a"])(this, "id", ""),
          Object(Dn["a"])(this, "tx", ""),
          Object(Dn["a"])(this, "amount", new Fn(0)),
          Object(Dn["a"])(this, "confirmations", 0),
          Object(Dn["a"])(this, "completedAt", new Date()),
          e &&
            ((this.id = e.id),
            (this.tx = e.tx),
            (this.amount = new Fn(e.amount)),
            (this.confirmations = e.confirmations),
            (this.completedAt = new Date(e.completedAt)));
      }
    }
    class fo {
      constructor(e) {
        Object(Dn["a"])(this, "inscriptionId", null),
          Object(Dn["a"])(this, "metadataUrl", ""),
          Object(Dn["a"])(this, "fileUrl", ""),
          Object(Dn["a"])(this, "previewUrl", ""),
          Object(Dn["a"])(this, "state", "WAITING"),
          Object(Dn["a"])(this, "confirmations", ""),
          Object(Dn["a"])(this, "tx", ""),
          Object(Dn["a"])(this, "txSending", ""),
          Object(Dn["a"])(this, "itemId", 0),
          Object(Dn["a"])(this, "id", ""),
          e &&
            ((this.inscriptionId = e.inscriptionId),
            (this.metadataUrl = e.metadataUrl),
            (this.fileUrl = e.fileUrl),
            (this.previewUrl = e.previewUrl),
            (this.state = e.state),
            (this.confirmations = e.confirmations),
            (this.tx = e.tx),
            (this.txSending = e.txSending),
            (this.itemId = e.itemId),
            (this.id = e.ordinalId));
      }
      isReserved() {
        return "RESERVED" === this.state;
      }
      isMinted() {
        return "COMPLETED" === this.state;
      }
      getState() {
        return this.state;
      }
    }
    const yo = (e) => {
        const t = window;
        return t.windowEnv && t.windowEnv[e]
          ? t.windowEnv[e]
          : Object({
              NODE_ENV: "production",
              VUE_APP_BACKEND_URI: "https://api-ordinal.miinded.com",
              VUE_APP_NETWORK_NAME: "mainnet",
              VUE_APP_COLLECTION_ID: "e2f29f78-0b7f-4f11-826e-eed276594a59",
              VUE_APP_CONFIRMATIONS_COUNT: "2",
              BASE_URL: "/",
            })[e];
      },
      wo = {
        NODE_ENV: yo("NODE_ENV"),
        BACKEND_URI: yo("VUE_APP_BACKEND_URI"),
        NETWORK_NAME: yo("VUE_APP_NETWORK_NAME"),
        COLLECTION_ID: yo("VUE_APP_COLLECTION_ID"),
        CONFIRMATIONS_COUNT: yo("VUE_APP_CONFIRMATIONS_COUNT"),
      };
    var _o = { envs: wo },
      ko = {
        name: "btcWaitingPayment",
        components: { BtcLoaderGlobal: Zn },
        props: { order: { type: go, default: () => new go() } },
        computed: {
          BtcValue() {
            return Fn;
          },
          collection() {
            return this.$parent.collection;
          },
          collectionClose() {
            return (
              (this.collection &&
                (this.collection.isSoldOut() || this.collection.isClosed())) ||
              this.order.isExpired()
            );
          },
          payWithWalletText() {
            return this.$t(
              "mint.payWithWallet." + this.$parent.walletConnectedType
            );
          },
          fullPaiementPending() {
            return this.order.isFullPaiementPending();
          },
          confirmationsCount() {
            return this.collection.maxConfirmation;
          },
          isFullRefund() {
            return "REFUND" === this.order.state;
          },
          isFullRefunded() {
            return "REFUNDED" === this.order.state;
          },
        },
        mounted() {
          this.generateQRCode();
        },
        methods: {
          async generateQRCode() {
            this.collectionClose ||
              (this.$refs.qrcode &&
                (this.$refs.qrcode.src = await jo.a.toDataURL(
                  this.order.receiveAddress,
                  { width: 200 }
                )));
          },
          openTx(e) {
            const t = "testnet3" === _o.envs.NETWORK_NAME ? "testnet/" : "";
            window.open("https://mempool.space/" + t + "tx/" + e.tx);
          },
          async payWithWallet() {
            try {
              this.$parent.payWithWalletSession(this.order);
            } catch (e) {
              console.log("No wallet detected", e);
            }
          },
        },
      };
    i("a1c3");
    const Co = c()(ko, [
      ["render", mo],
      ["__scopeId", "data-v-7c5ee0e0"],
    ]);
    var Io = Co;
    const So = {
        class: "btc-mint__orders --padding btc-mint__container-wrapper",
      },
      Ao = { class: "btc-mint__header" },
      Mo = { class: "btc-mint__step" },
      xo = Object(s["i"])("h3", { class: "" }, "Recipient Address:", -1),
      To = Object(s["i"])(
        "p",
        { class: "--mb-s" },
        [
          Object(s["k"])("Enter your "),
          Object(s["i"])(
            "b",
            { class: "btc-mint__c-primary-desaturated" },
            "Ordinal Address"
          ),
          Object(s["k"])(" to see your orders:"),
        ],
        -1
      ),
      Bo = { class: "btc-mint__input" },
      Po = { class: "btc-mint__step" },
      Lo = { class: "--mb" },
      $o = { class: "btc-mint__rows --relative" },
      Eo = ["onClick"],
      Do = { class: "btc-mint__c-primary-desaturated" },
      Uo = { key: 0 };
    function No(e, t, i, n, a, o) {
      const c = Object(s["I"])("BtcLoaderGlobal");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", So, [
          Object(s["i"])("div", Ao, [
            Object(s["i"])(
              "h2",
              null,
              Object(s["M"])(e.$t("orders.statusCheck")),
              1
            ),
          ]),
          Object(s["i"])("div", Mo, [
            xo,
            To,
            Object(s["i"])("div", Bo, [
              Object(s["R"])(
                Object(s["i"])(
                  "input",
                  {
                    type: "text",
                    placeholder: "Your ordinal address...",
                    "onUpdate:modelValue":
                      t[0] || (t[0] = (t) => (e.myOrdAddress = t)),
                  },
                  null,
                  512
                ),
                [[s["O"], e.myOrdAddress]]
              ),
              Object(s["i"])(
                "div",
                {
                  class: "btc-mint__btn --primary --active",
                  onClick:
                    t[1] || (t[1] = (...e) => o.getOrders && o.getOrders(...e)),
                },
                "GET MY ORDERS"
              ),
            ]),
          ]),
          Object(s["i"])("div", Po, [
            Object(s["i"])(
              "h3",
              Lo,
              Object(s["M"])(e.$t("orders.pastOrders")),
              1
            ),
            Object(s["i"])("div", $o, [
              Object(s["l"])(c, { show: e.$parent.loaders.orders }, null, 8, [
                "show",
              ]),
              (Object(s["B"])(!0),
              Object(s["h"])(
                s["a"],
                null,
                Object(s["H"])(
                  i.orders,
                  (e) => (
                    Object(s["B"])(),
                    Object(s["h"])(
                      "div",
                      {
                        class: Object(s["u"])([
                          "btc-mint__row btc-mint__bordered btc-mint__click",
                          "COMPLETED" === e.state ? "--active" : "",
                        ]),
                        key: e.id,
                        onClick: (t) => o.select(e),
                      },
                      [
                        Object(s["i"])(
                          "h4",
                          null,
                          Object(s["M"])(e.id.substr(0, 15)) + "...",
                          1
                        ),
                        Object(s["i"])(
                          "span",
                          {
                            class: Object(s["u"])(
                              "COMPLETED" === e.state
                                ? "btc-mint__c-primary"
                                : "btc-mint__c-primary-desaturated"
                            ),
                          },
                          Object(s["M"])(e.getState()),
                          3
                        ),
                        Object(s["i"])(
                          "span",
                          Do,
                          Object(s["M"])(
                            e.createdAt.toLocaleDateString("en-US")
                          ) +
                            " " +
                            Object(s["M"])(
                              e.createdAt.toLocaleTimeString("en-US")
                            ),
                          1
                        ),
                      ],
                      10,
                      Eo
                    )
                  )
                ),
                128
              )),
              i.orders.length <= 0
                ? (Object(s["B"])(),
                  Object(s["h"])(
                    "div",
                    Uo,
                    Object(s["M"])(e.$t("orders.noOrders")),
                    1
                  ))
                : Object(s["g"])("", !0),
            ]),
          ]),
        ])
      );
    }
    var Ro = {
      name: "btcOrders",
      components: { BtcLoaderGlobal: Zn },
      data: () => ({ myOrdAddress: "" }),
      props: { orders: { type: Array, default: () => [] } },
      mounted() {
        this.myOrdAddress = localStorage.getItem("_btc_ordinal_address");
      },
      methods: {
        select(e) {
          (this.$parent.currentOrderId = e.id), (this.$parent.menu = "");
        },
        getOrders() {
          this.$parent.getOrders(this.myOrdAddress, !0);
        },
      },
    };
    const Wo = c()(Ro, [["render", No]]);
    var Fo = Wo;
    const qo = {
        class:
          "btc-mint__order-completed --padding btc-mint__container-wrapper",
      },
      zo = { class: "btc-mint__header" },
      Ho = { key: 0 },
      Vo = { key: 1 },
      Go = { class: "btc-mint__label --light --mb-xs" },
      Yo = { class: "btc-mint__row --gap-s" },
      Zo = { class: "btc-mint__label --light" },
      Ko = { class: "btc-mint__label --light" },
      Qo = { key: 0, class: "btc-mint__c-white --mb" },
      Jo = { key: 1, class: "btc-mint__c-white --mb" },
      Xo = { class: "btc-mint__step" },
      ec = { class: "btc-mint__c-primary-darker --mb-s" },
      tc = { key: 0 },
      ic = { key: 1 },
      sc = { class: "btc-mint__gallery" },
      nc = { key: 0, class: "btc-mint__picture --more" },
      ac = { class: "btc-mint__step" },
      oc = { class: "btc-mint__step" },
      cc = { key: 0, class: "btc-mint__c-white" },
      rc = { key: 1, class: "btc-mint__c-white" },
      lc = { class: "btc-mint__step" },
      dc = { key: 0, class: "btc-mint__c-white" },
      bc = Object(s["i"])("br", null, null, -1),
      uc = Object(s["i"])(
        "span",
        { class: "btc-mint__loader --medium --mb-s" },
        [
          Object(s["i"])(
            "svg",
            { class: "btc-mint__ico", viewBox: "0 0 93 95" },
            [
              Object(s["i"])("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M89.0446 60.4346C83.5374 78.1426 67.0202 91 47.5 91C23.4756 91 4 71.5244 4 47.5C4 23.4756 23.4756 4 47.5 4C55.3662 4 62.7448 6.08795 69.1117 9.73988L71.4356 6.46259C64.4072 2.35432 56.2285 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95C68.7374 95 86.7195 81.0625 92.7986 61.8353L89.0446 60.4346Z",
                fill: "#00FFFF",
              }),
            ]
          ),
        ],
        -1
      ),
      pc = Object(s["i"])("br", null, null, -1),
      hc = Object(s["i"])("br", null, null, -1),
      mc = { key: 1, class: "btc-mint__c-white" },
      Oc = Object(s["i"])("br", null, null, -1),
      jc = Object(s["i"])(
        "span",
        { class: "btc-mint__loader --medium --mb-s" },
        [
          Object(s["i"])(
            "svg",
            { class: "btc-mint__ico", viewBox: "0 0 93 95" },
            [
              Object(s["i"])("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M89.0446 60.4346C83.5374 78.1426 67.0202 91 47.5 91C23.4756 91 4 71.5244 4 47.5C4 23.4756 23.4756 4 47.5 4C55.3662 4 62.7448 6.08795 69.1117 9.73988L71.4356 6.46259C64.4072 2.35432 56.2285 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95C68.7374 95 86.7195 81.0625 92.7986 61.8353L89.0446 60.4346Z",
                fill: "#00FFFF",
              }),
            ]
          ),
        ],
        -1
      ),
      gc = Object(s["i"])("br", null, null, -1),
      vc = Object(s["i"])("br", null, null, -1),
      fc = { key: 2, class: "btc-mint__c-white" },
      yc = Object(s["i"])("br", null, null, -1),
      wc = Object(s["i"])(
        "span",
        { class: "btc-mint__loader --medium --mb-s" },
        [
          Object(s["i"])(
            "svg",
            { class: "btc-mint__ico", viewBox: "0 0 93 95" },
            [
              Object(s["i"])("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M89.0446 60.4346C83.5374 78.1426 67.0202 91 47.5 91C23.4756 91 4 71.5244 4 47.5C4 23.4756 23.4756 4 47.5 4C55.3662 4 62.7448 6.08795 69.1117 9.73988L71.4356 6.46259C64.4072 2.35432 56.2285 0 47.5 0C21.2665 0 0 21.2665 0 47.5C0 73.7335 21.2665 95 47.5 95C68.7374 95 86.7195 81.0625 92.7986 61.8353L89.0446 60.4346Z",
                fill: "#00FFFF",
              }),
            ]
          ),
        ],
        -1
      ),
      _c = Object(s["i"])("br", null, null, -1),
      kc = { key: 3 },
      Cc = { key: 2, class: "btc-mint__step" },
      Ic = Object(s["i"])("h3", null, Object(s["M"])("Partial refund"), -1),
      Sc = { class: "btc-mint__c-white --mb" },
      Ac = Object(s["i"])("br", null, null, -1),
      Mc = Object(s["i"])("br", null, null, -1),
      xc = Object(s["i"])("br", null, null, -1),
      Tc = ["href"],
      Bc = Object(s["i"])("br", null, null, -1),
      Pc = ["href"],
      Lc = { class: "btc-mint__row --flex-start --gap" };
    function $c(e, t, i, n, a, o) {
      const c = Object(s["I"])("BtcLoaderGlobal"),
        r = Object(s["I"])("BtcNftPreview");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", qo, [
          Object(s["l"])(
            c,
            { show: e.$parent.loaders.global || e.$parent.loaders.orders },
            null,
            8,
            ["show"]
          ),
          Object(s["i"])("div", zo, [
            i.order.isMintCompleted()
              ? (Object(s["B"])(), Object(s["h"])("h2", Vo, "AILU ACQUIRED!"))
              : (Object(s["B"])(),
                Object(s["h"])(
                  "h2",
                  Ho,
                  Object(s["M"])(e.$t("orders.completed.orderDetails")),
                  1
                )),
            Object(s["i"])("div", Go, "ID: " + Object(s["M"])(i.order.id), 1),
            Object(s["i"])("div", Yo, [
              Object(s["i"])(
                "div",
                Zo,
                "x" +
                  Object(s["M"])(i.order.nftCount) +
                  " Artifact" +
                  Object(s["M"])(i.order.nftCount > 1 ? "s" : ""),
                1
              ),
              Object(s["i"])(
                "div",
                Ko,
                Object(s["M"])(i.order.vSats) + " vsats/vB",
                1
              ),
            ]),
          ]),
          i.order.isMintCompleted()
            ? (Object(s["B"])(),
              Object(s["h"])(
                "p",
                Jo,
                Object(s["M"])(e.$t("orders.completed.ordinal.congrats")),
                1
              ))
            : (Object(s["B"])(),
              Object(s["h"])(
                "p",
                Qo,
                Object(s["M"])(e.$t("orders.completed.ordinal.payment")),
                1
              )),
          Object(s["i"])("div", Xo, [
            Object(s["i"])("div", ec, [
              i.order.isMintCompleted()
                ? (Object(s["B"])(),
                  Object(s["h"])(
                    "b",
                    ic,
                    Object(s["M"])(e.$t("orders.completed.ordinal.completed")),
                    1
                  ))
                : (Object(s["B"])(),
                  Object(s["h"])(
                    "b",
                    tc,
                    Object(s["M"])(e.$t("orders.completed.ordinal.preview")),
                    1
                  )),
            ]),
            Object(s["i"])("div", sc, [
              (Object(s["B"])(!0),
              Object(s["h"])(
                s["a"],
                null,
                Object(s["H"])(
                  i.order.nftsInscriptions,
                  (e, t) => (
                    Object(s["B"])(),
                    Object(s["f"])(
                      r,
                      { key: t, nft: e, collection: o.collection },
                      null,
                      8,
                      ["nft", "collection"]
                    )
                  )
                ),
                128
              )),
              i.order.nftsInscriptions.length > 5
                ? (Object(s["B"])(),
                  Object(s["h"])("div", nc, [
                    Object(s["i"])(
                      "b",
                      null,
                      "+" + Object(s["M"])(i.order.nftsInscriptions.length - 5),
                      1
                    ),
                  ]))
                : Object(s["g"])("", !0),
            ]),
          ]),
          Object(s["i"])("div", ac, [
            i.order.isMintCompleted()
              ? (Object(s["B"])(),
                Object(s["h"])(
                  "div",
                  {
                    key: 0,
                    class: "btc-mint__btn --primary",
                    onClick: t[0] || (t[0] = (e) => o.shareOnTwitter(i.order)),
                  },
                  Object(s["M"])(e.$t("orders.completed.shareTitle")),
                  1
                ))
              : Object(s["g"])("", !0),
          ]),
          Object(s["i"])("div", oc, [
            Object(s["i"])(
              "h3",
              null,
              Object(s["M"])(e.$t("orders.completed.recipientAddress")),
              1
            ),
            i.order.isMintCompleted()
              ? (Object(s["B"])(),
                Object(s["h"])("p", rc, [
                  Object(s["k"])(
                    Object(s["M"])(e.$t("orders.completed.receivedAddress")) +
                      " ",
                    1
                  ),
                  Object(s["i"])(
                    "b",
                    null,
                    Object(s["M"])(i.order.userOrdAddress),
                    1
                  ),
                ]))
              : (Object(s["B"])(),
                Object(s["h"])("p", cc, [
                  Object(s["k"])(
                    Object(s["M"])(e.$t("orders.completed.receiveAddress")) +
                      " ",
                    1
                  ),
                  Object(s["i"])(
                    "b",
                    null,
                    Object(s["M"])(i.order.userOrdAddress),
                    1
                  ),
                ])),
          ]),
          Object(s["i"])("div", lc, [
            Object(s["i"])(
              "h3",
              null,
              Object(s["M"])(e.$t("orders.completed.status")),
              1
            ),
            "RECEIVE_ALL_FUNDS" === i.order.state &&
            i.order.queue.total > 0 &&
            !o.collectionDisabled
              ? (Object(s["B"])(),
                Object(s["h"])("p", dc, [
                  Object(s["k"])(" We have received all the funds."),
                  bc,
                  Object(s["k"])(
                    " Your position in the queue: " +
                      Object(s["M"])(i.order.queue.position) +
                      " / " +
                      Object(s["M"])(i.order.queue.total) +
                      " ",
                    1
                  ),
                  uc,
                  pc,
                  Object(s["k"])(
                    " Estimation time: around " +
                      Object(s["M"])(
                        e.$parent.formatDuration(i.order.estimationTime)
                      ) +
                      " ",
                    1
                  ),
                  hc,
                  Object(s["k"])(" Please be patient... "),
                ]))
              : "RECEIVE_ALL_FUNDS" !== i.order.state ||
                (i.order.queue.total && !o.collectionDisabled)
              ? i.order.isMintCompleted()
                ? (Object(s["B"])(),
                  Object(s["h"])(
                    "p",
                    kc,
                    Object(s["M"])(e.$t("orders.completed.all")),
                    1
                  ))
                : (Object(s["B"])(),
                  Object(s["h"])("p", fc, [
                    Object(s["k"])(
                      Object(s["M"])(e.$t("orders.completed.mintingProgress")) +
                        ": ",
                      1
                    ),
                    yc,
                    Object(s["k"])(
                      " " +
                        Object(s["M"])(e.$t("orders.completed.minting")) +
                        ": " +
                        Object(s["M"])(o.nftMintingStat.minting) +
                        " ",
                      1
                    ),
                    wc,
                    _c,
                    Object(s["k"])(
                      " " +
                        Object(s["M"])(e.$t("orders.completed.minted")) +
                        ": " +
                        Object(s["M"])(o.nftMintingStat.minted),
                      1
                    ),
                  ]))
              : (Object(s["B"])(),
                Object(s["h"])("p", mc, [
                  Object(s["k"])(" We have received all the funds."),
                  Oc,
                  Object(s["k"])(
                    " All our nodes are busy, waiting for a free node to continue. "
                  ),
                  jc,
                  gc,
                  Object(s["k"])(
                    " Your ordinals will be inscribe as soon as possible. "
                  ),
                  vc,
                  Object(s["k"])("Please wait... "),
                ])),
          ]),
          i.order.refunds.length > 0
            ? (Object(s["B"])(),
              Object(s["h"])("div", Cc, [
                Ic,
                (Object(s["B"])(!0),
                Object(s["h"])(
                  s["a"],
                  null,
                  Object(s["H"])(
                    i.order.refunds,
                    (e, t) => (
                      Object(s["B"])(),
                      Object(s["h"])(
                        "div",
                        { class: "btc-mint__c-white --col --mb", key: t },
                        [
                          Object(s["i"])("p", Sc, [
                            "COMPLETED" !== e.state
                              ? (Object(s["B"])(),
                                Object(s["h"])(
                                  s["a"],
                                  { key: 0 },
                                  [
                                    Object(s["k"])(
                                      " This order will be partially refunded."
                                    ),
                                    Ac,
                                  ],
                                  64
                                ))
                              : (Object(s["B"])(),
                                Object(s["h"])(
                                  s["a"],
                                  { key: 1 },
                                  [
                                    Object(s["k"])(
                                      " This order has been partially refunded."
                                    ),
                                    Mc,
                                  ],
                                  64
                                )),
                            Object(s["k"])(
                              " Amount: " +
                                Object(s["M"])(i.order.totalAmount.toBtc()) +
                                " BTC",
                              1
                            ),
                            xc,
                            Object(s["k"])(" Refund address: "),
                            Object(s["i"])(
                              "a",
                              {
                                href:
                                  "https://mempool.space/address/" +
                                  e.userRefundAddress,
                                target: "_blank",
                              },
                              Object(s["M"])(e.userRefundAddress),
                              9,
                              Tc
                            ),
                            e.tx
                              ? (Object(s["B"])(),
                                Object(s["h"])(
                                  s["a"],
                                  { key: 2 },
                                  [
                                    Bc,
                                    Object(s["k"])(" Tx: "),
                                    Object(s["i"])(
                                      "a",
                                      {
                                        href:
                                          "https://mempool.space/tx/" + e.tx,
                                        target: "_blank",
                                      },
                                      Object(s["M"])(e.tx),
                                      9,
                                      Pc
                                    ),
                                  ],
                                  64
                                ))
                              : Object(s["g"])("", !0),
                          ]),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]))
            : Object(s["g"])("", !0),
          Object(s["i"])("div", Lc, [
            i.order.isMintCompleted()
              ? Object(s["g"])("", !0)
              : (Object(s["B"])(),
                Object(s["h"])(
                  "div",
                  {
                    key: 0,
                    class: "btc-mint__btn --primary",
                    onClick:
                      t[1] ||
                      (t[1] = (t) =>
                        e.$parent.getOrders(i.order.userOrdAddress)),
                  },
                  Object(s["M"])(e.$t("orders.completed.refresh")),
                  1
                )),
            Object(s["i"])(
              "div",
              {
                class: "btc-mint__btn --primary",
                onClick: t[2] || (t[2] = (t) => (e.$parent.menu = "orderList")),
              },
              Object(s["M"])(e.$t("orders.completed.orders")),
              1
            ),
            o.collectionDisabled
              ? Object(s["g"])("", !0)
              : (Object(s["B"])(),
                Object(s["h"])(
                  "div",
                  {
                    key: 1,
                    class: "btc-mint__btn --primary",
                    onClick:
                      t[3] ||
                      (t[3] = (...e) => o.inscribeMore && o.inscribeMore(...e)),
                  },
                  Object(s["M"])(e.$t("orders.completed.more")),
                  1
                )),
          ]),
        ])
      );
    }
    const Ec = (e) => (
        Object(s["E"])("data-v-d72d36cc"), (e = e()), Object(s["C"])(), e
      ),
      Dc = { class: "--relative --overflow-hidden" },
      Uc = ["src"],
      Nc = Ec(() =>
        Object(s["i"])(
          "div",
          { class: "icon" },
          [
            Object(s["i"])("svg", { class: "ico" }, [
              Object(s["i"])("use", { "xlink:href": "#ico-download" }),
            ]),
          ],
          -1
        )
      );
    function Rc(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "div",
          {
            class: Object(s["u"])([
              "btc-mint__picture",
              { "--active": i.nft.isMinted() },
            ]),
            onClick:
              t[1] ||
              (t[1] = Object(s["S"])(
                (...e) => o.openModal && o.openModal(...e),
                ["prevent", "stop", "exact"]
              )),
          },
          [
            Object(s["i"])("div", Dc, [
              Object(s["i"])(
                "img",
                { src: o.previewUrl, alt: "" },
                null,
                8,
                Uc
              ),
            ]),
            i.nft.isMinted() || i.nft.isReserved()
              ? (Object(s["B"])(),
                Object(s["h"])(
                  "div",
                  {
                    key: 0,
                    class: Object(s["u"])([
                      "dl-trigger",
                      { "--active": e.download },
                    ]),
                    onClick:
                      t[0] ||
                      (t[0] = Object(s["S"])(
                        (...e) => o.openModal && o.openModal(...e),
                        ["prevent", "stop", "exact"]
                      )),
                    style: { cursor: "pointer" },
                  },
                  [Nc, Object(s["k"])(" More details ")],
                  2
                ))
              : Object(s["g"])("", !0),
          ],
          2
        )
      );
    }
    var Wc = {
      name: "btcNftPreview",
      props: {
        nft: { type: fo, default: new fo() },
        collection: { type: Un, default: new Un() },
      },
      data: () => ({ download: !1 }),
      computed: {
        nftState() {
          return "MINTING" === this.nft.getState()
            ? "INSCRIBE (confirm: " +
                this.nft.confirmations +
                "/" +
                this.collection.maxConfirmation +
                ")"
            : "SENDING" === this.nft.getState()
            ? "SENDING"
            : this.nft.getState();
        },
        isImage() {
          return this.nft.fileUrl.match(
            /(.jpg)|(.png)|(.gif)|(.jpeg)|(.webp)/i
          );
        },
        isIframe() {
          return this.nft.fileUrl.match(/(.html)/i);
        },
        previewUrl() {
          return this.isIframe ? this.nft.previewUrl : this.nft.fileUrl;
        },
      },
      methods: {
        openNft(e) {
          if (!e.isMinted()) return;
          const t = "testnet3" === _o.envs.NETWORK_NAME ? "testnet." : "";
          window.open(
            "https://" + t + "ordinals.com/inscription/" + e.inscriptionId
          );
        },
        openTx(e) {
          if ("RESERVED" === e.state) return;
          const t = "testnet3" === _o.envs.NETWORK_NAME ? "testnet/" : "",
            i = e.txSending ? e.txSending : e.tx;
          window.open("https://mempool.space/" + t + "tx/" + i);
        },
        openModal() {
          this.emitter.emit("download", this.nft);
        },
      },
    };
    i("1bb3");
    const Fc = c()(Wc, [
      ["render", Rc],
      ["__scopeId", "data-v-d72d36cc"],
    ]);
    var qc = Fc,
      zc = {
        name: "btcOrderCompleted",
        components: { BtcNftPreview: qc, BtcLoaderGlobal: Zn },
        props: { order: { type: go, default: () => new go() } },
        methods: {
          inscribeMore() {
            (this.$parent.menu = ""), (this.$parent.currentOrderId = null);
          },
          shareOnTwitter(e) {
            const t = [];
            for (const a of e.nftsInscriptions) t.push("AILU #" + a.itemId);
            const i = `I just inscribed ${t.join(
                ","
              )} on bitcoin forever @ailu2100`,
              s = encodeURI(i).replace(/#/g, "%23"),
              n = "https://twitter.com/intent/tweet?text=" + s;
            window.open(n, "_blank").focus();
          },
        },
        computed: {
          collection() {
            return this.$parent.collection;
          },
          collectionDisabled() {
            return (
              this.collection &&
              (this.collection.isSoldOut() || this.collection.isClosed())
            );
          },
          nftMintingStat() {
            return this.order.nftMintingStat();
          },
        },
      };
    const Hc = c()(zc, [["render", $c]]);
    var Vc = Hc;
    const Gc = (e) => (
        Object(s["E"])("data-v-ed6666c4"), (e = e()), Object(s["C"])(), e
      ),
      Yc = { class: "btc-mint__closed" },
      Zc = { class: "btc-mint__row --align-center" },
      Kc = { class: "btc-mint__closed__left" },
      Qc = { key: 0 },
      Jc = { key: 1 },
      Xc = { key: 2 },
      er = { key: 3, class: "btc-mint__c-white" },
      tr = { key: 4 },
      ir = { key: 5, class: "btc-mint__c-white" },
      sr = { key: 6, class: "btc-mint__step", style: { "margin-top": "50px" } },
      nr = Gc(() => Object(s["i"])("h3", null, "Access List Checker", -1)),
      ar = ["placeholder"],
      or = { class: "btc-mint__btn --active --big" },
      cr = Gc(() =>
        Object(s["i"])(
          "div",
          { class: "btc-mint__closed__image" },
          [
            Object(s["i"])("img", {
              src: "/images/site/narrative-pagination-img-2.png",
              alt: "",
            }),
          ],
          -1
        )
      );
    function rr(e, t, i, n, a, o) {
      const c = Object(s["I"])("BtcCountdown"),
        r = Object(s["I"])("BtcLoaderGlobal");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", Yc, [
          Object(s["i"])("div", Zc, [
            Object(s["i"])("div", Kc, [
              o.isClose && e.privateIsOpen
                ? (Object(s["B"])(), Object(s["h"])("h2", Qc, "BE BACK SOON"))
                : Object(s["g"])("", !0),
              o.isClose && !e.privateIsOpen
                ? (Object(s["B"])(), Object(s["h"])("h2", Jc, "ACCESS LIST"))
                : o.isSoldOut
                ? (Object(s["B"])(), Object(s["h"])("h2", Xc, "SOLDOUT"))
                : Object(s["g"])("", !0),
              o.isClose && e.privateIsOpen
                ? (Object(s["B"])(),
                  Object(s["h"])("p", er, "Please Be Patient Anon."))
                : Object(s["g"])("", !0),
              e.privateIsOpen
                ? o.isSoldOut
                  ? (Object(s["B"])(),
                    Object(s["h"])(
                      "p",
                      ir,
                      "All ordinals in this collection have been reserved."
                    ))
                  : Object(s["g"])("", !0)
                : (Object(s["B"])(),
                  Object(s["h"])("div", tr, [
                    Object(s["k"])("Opens in "),
                    Object(s["l"])(
                      c,
                      {
                        date: new Date(1713106815e3).toString(),
                        onDone: t[0] || (t[0] = (t) => (e.privateIsOpen = !0)),
                      },
                      null,
                      8,
                      ["date"]
                    ),
                  ])),
              i.collection.hasWhitelist && !e.privateIsOpen
                ? (Object(s["B"])(),
                  Object(s["h"])("div", sr, [
                    nr,
                    Object(s["R"])(
                      Object(s["i"])(
                        "input",
                        {
                          type: "text",
                          placeholder: e.$t("mint.wallet.placeholder"),
                          "onUpdate:modelValue":
                            t[1] || (t[1] = (t) => (e.ordAddress = t)),
                        },
                        null,
                        8,
                        ar
                      ),
                      [[s["O"], e.ordAddress]]
                    ),
                    e.privateIsOpen
                      ? Object(s["g"])("", !0)
                      : (Object(s["B"])(),
                        Object(s["h"])(
                          "div",
                          {
                            key: 0,
                            class: "btc-mint__step --relative",
                            onClick:
                              t[2] ||
                              (t[2] = (...e) =>
                                o.checkWhitelist && o.checkWhitelist(...e)),
                            style: { "margin-top": "10px" },
                          },
                          [
                            Object(s["l"])(
                              r,
                              { show: e.$parent.loaders.checkWhitelist },
                              null,
                              8,
                              ["show"]
                            ),
                            Object(s["i"])(
                              "div",
                              or,
                              Object(s["M"])(e.$t("mint.check")),
                              1
                            ),
                          ]
                        )),
                  ]))
                : Object(s["g"])("", !0),
            ]),
            cr,
          ]),
        ])
      );
    }
    var lr = {
      name: "btcSalesClosed",
      components: { BtcLoaderGlobal: Zn, BtcCountdown: ia },
      props: { collection: { type: Un, default: () => new Un() } },
      data: function () {
        return { ordAddress: null, privateIsOpen: !1, publicIsOpen: !1 };
      },
      computed: {
        isClose() {
          return !1;
        },
        isSoldOut() {
          return !0;
        },
      },
      methods: {
        async checkWhitelist() {
          if (!this.ordAddress) return;
          if (!this.ordAddress.startsWith("bc1p"))
            return this.$parent.showNotif({
              type: "error",
              text: this.$t("mint.notifs.errors.notTaproot"),
            });
          await this.$parent.setLoader("checkWhitelist", !0);
          const e = await Rn.post(`collection/${this.collection.id}/check`, {
            address: this.ordAddress,
            password: this.$parent.currentPasswordWhitelist,
          });
          if (e.error())
            return (
              await this.$parent.setLoader("checkWhitelist", !1),
              void this.$parent.showNotif({
                type: "error",
                text: this.$t("mint.notifs.errors.whitelist"),
              })
            );
          await this.$parent.setLoader("checkWhitelist", !1);
          const t = e.data();
          (this.userOrdAddressIsValid = t.addressIsValid),
            this.userOrdAddressIsValid
              ? this.$parent.showNotif({
                  type: "success",
                  text: this.$t("mint.notifs.errors.whitelisted"),
                })
              : this.$parent.showNotif({
                  type: "error",
                  text: this.$t("mint.notifs.errors.whitelistWalletBad"),
                });
        },
      },
    };
    i("a421");
    const dr = c()(lr, [
      ["render", rr],
      ["__scopeId", "data-v-ed6666c4"],
    ]);
    var br = dr;
    const ur = {
        class:
          "btc-mint__order-completed --padding btc-mint__container-wrapper",
      },
      pr = { class: "btc-mint__header" },
      hr = { class: "btc-mint__step" },
      mr = { class: "btc-mint__gallery --wrap" },
      Or = { key: 0 },
      jr = { class: "btc-mint__row --flex-start --gap" };
    function gr(e, t, i, n, a, o) {
      const c = Object(s["I"])("BtcLoaderGlobal"),
        r = Object(s["I"])("BtcNftPreview");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", ur, [
          Object(s["l"])(
            c,
            { show: e.$parent.loaders.global || e.$parent.loaders.orders },
            null,
            8,
            ["show"]
          ),
          Object(s["i"])("div", pr, [
            Object(s["i"])(
              "h2",
              null,
              Object(s["M"])(e.$t("myinscriptions.title")),
              1
            ),
          ]),
          Object(s["i"])("div", hr, [
            Object(s["i"])("div", mr, [
              (Object(s["B"])(!0),
              Object(s["h"])(
                s["a"],
                null,
                Object(s["H"])(
                  o.nftInscriptions,
                  (e, t) => (
                    Object(s["B"])(),
                    Object(s["f"])(
                      r,
                      { key: t, nft: e, collection: o.collection },
                      null,
                      8,
                      ["nft", "collection"]
                    )
                  )
                ),
                128
              )),
            ]),
            o.nftInscriptions.length <= 0
              ? (Object(s["B"])(),
                Object(s["h"])(
                  "div",
                  Or,
                  Object(s["M"])(e.$t("myinscriptions.noArtifacts")),
                  1
                ))
              : Object(s["g"])("", !0),
          ]),
          Object(s["i"])("div", jr, [
            i.orders.length > 0
              ? (Object(s["B"])(),
                Object(s["h"])(
                  "div",
                  {
                    key: 0,
                    class: "btc-mint__btn --primary",
                    onClick:
                      t[0] ||
                      (t[0] = (t) =>
                        e.$parent.getOrders(i.orders[0].userOrdAddress)),
                  },
                  Object(s["M"])(e.$t("myinscriptions.refresh")),
                  1
                ))
              : Object(s["g"])("", !0),
          ]),
        ])
      );
    }
    var vr = {
      name: "btcMyInscriptions",
      components: { BtcNftPreview: qc, BtcLoaderGlobal: Zn },
      props: { orders: { type: Array, default: () => [] } },
      methods: {
        inscribeMore() {
          (this.$parent.menu = ""), (this.$parent.currentOrderId = null);
        },
        openNft(e) {
          window.open("https://ordinals.com/inscription/" + e.inscriptionId);
        },
      },
      computed: {
        collection() {
          return this.$parent.collection;
        },
        collectionDisabled() {
          return (
            this.collection &&
            (this.collection.isSoldOut() || this.collection.isClosed())
          );
        },
        nftInscriptions() {
          let e = [];
          for (const t of this.orders) e = [...e, ...t.nftsInscriptions];
          return e;
        },
      },
    };
    const fr = c()(vr, [["render", gr]]);
    var yr = fr;
    function wr(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "div",
          {
            class: Object(s["u"])([
              "btc-mint__notification",
              "--" + i.notif.type,
            ]),
          },
          Object(s["M"])(i.notif.text),
          3
        )
      );
    }
    var _r = {
      name: "btcNotifications",
      props: {
        notif: { type: Object, default: () => ({ text: "", type: "success" }) },
      },
      data: () => ({ timeout: 0 }),
      watch: {
        notif: {
          handler() {
            clearTimeout(this.timeout), this.start();
          },
          deep: !0,
        },
      },
      mounted() {
        this.start();
      },
      methods: {
        start() {
          this.timeout = setTimeout(() => {
            this.$emit("end");
          }, 3e3);
        },
      },
    };
    i("8c2e");
    const kr = c()(_r, [
      ["render", wr],
      ["__scopeId", "data-v-82335be8"],
    ]);
    var Cr = kr;
    const Ir = {
        class: "btc-mint__container-wrapper",
        ref: "btc-mint__container-wrapper",
      },
      Sr = { class: "btc-mint__header" },
      Ar = { class: "btc-mint__row --center --mb-s" },
      Mr = { class: "btc-mint__row --center --mb-s" },
      xr = { class: "btc-mint__row --center --mb-s" },
      Tr = { class: "btc-mint__row --center --mb-s" },
      Br = { class: "btc-mint__row --center --mb-s" };
    function Pr(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "div",
          {
            class: "btc-mint__connect",
            onClick:
              t[5] ||
              (t[5] = Object(s["S"])(
                (...e) => o.close && o.close(...e),
                ["prevent", "stop"]
              )),
            ref: "btc-mint__connect",
          },
          [
            Object(s["i"])(
              "div",
              Ir,
              [
                Object(s["i"])("div", Sr, [
                  Object(s["i"])(
                    "h2",
                    null,
                    Object(s["M"])(e.$t("connect.connect")),
                    1
                  ),
                ]),
                Object(s["i"])("div", Ar, [
                  Object(s["i"])(
                    "div",
                    {
                      class: "btc-mint__btn --big",
                      onClick:
                        t[0] ||
                        (t[0] = (...t) =>
                          e.$parent.connectUserWalletSessionXVerse &&
                          e.$parent.connectUserWalletSessionXVerse(...t)),
                    },
                    Object(s["M"])(e.$t("connect.xverse")),
                    1
                  ),
                ]),
                Object(s["i"])("div", Mr, [
                  Object(s["i"])(
                    "div",
                    {
                      class: "btc-mint__btn --big",
                      onClick:
                        t[1] ||
                        (t[1] = (...t) =>
                          e.$parent.connectUserWalletSessionUnisat &&
                          e.$parent.connectUserWalletSessionUnisat(...t)),
                    },
                    Object(s["M"])(e.$t("connect.unisat")),
                    1
                  ),
                ]),
                Object(s["i"])("div", xr, [
                  Object(s["i"])(
                    "div",
                    {
                      class: "btc-mint__btn --big",
                      onClick:
                        t[2] ||
                        (t[2] = (...t) =>
                          e.$parent.connectUserWalletSessionHiro &&
                          e.$parent.connectUserWalletSessionHiro(...t)),
                    },
                    Object(s["M"])(e.$t("connect.hiro")),
                    1
                  ),
                ]),
                Object(s["i"])("div", Tr, [
                  Object(s["i"])(
                    "div",
                    {
                      class: "btc-mint__btn --big",
                      onClick:
                        t[3] ||
                        (t[3] = (...t) =>
                          e.$parent.connectUserWalletSessionPhantom &&
                          e.$parent.connectUserWalletSessionPhantom(...t)),
                    },
                    Object(s["M"])(e.$t("connect.phantom")),
                    1
                  ),
                ]),
                Object(s["i"])("div", Br, [
                  Object(s["i"])(
                    "div",
                    {
                      class: "btc-mint__btn --big",
                      onClick:
                        t[4] ||
                        (t[4] = (...t) =>
                          e.$parent.connectUserWalletSessionMagicEden &&
                          e.$parent.connectUserWalletSessionMagicEden(...t)),
                    },
                    Object(s["M"])(e.$t("connect.magicEden")),
                    1
                  ),
                ]),
              ],
              512
            ),
          ],
          512
        )
      );
    }
    var Lr = i("cffa"),
      $r = {
        name: "btcConnect",
        data: () => ({ open: !1 }),
        mounted() {
          this.animateIn();
        },
        methods: {
          async close(e) {
            (!e || (e && e.target === this.$refs["btc-mint__connect"])) &&
              (this.$parent.forceClose(),
              await this.animateOut(),
              (this.$parent.popup = ""));
          },
          async animateIn() {
            return Lr["a"]
              .timeline({ paused: !0 })
              .fromTo(
                this.$refs["btc-mint__container-wrapper"],
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "Power4.easeOut" },
                0
              )
              .fromTo(
                this.$refs["btc-mint__connect"],
                { backdropFilter: "blur(0px)" },
                {
                  backdropFilter: "blur(10px)",
                  duration: 1,
                  ease: "Power4.easeOut",
                },
                0
              )
              .restart();
          },
          async animateOut() {
            return Lr["a"]
              .timeline({ paused: !0 })
              .fromTo(
                this.$refs["btc-mint__container-wrapper"],
                { opacity: 1, y: 0 },
                { opacity: 0, y: 30, duration: 1, ease: "Power4.easeOut" },
                0
              )
              .fromTo(
                this.$refs["btc-mint__connect"],
                { backdropFilter: "blur(10px)" },
                {
                  backdropFilter: "blur(0px)",
                  duration: 1,
                  ease: "Power4.easeOut",
                },
                0
              )
              .restart();
          },
        },
      };
    i("1e92");
    const Er = c()($r, [
      ["render", Pr],
      ["__scopeId", "data-v-036c1c4e"],
    ]);
    var Dr = Er,
      Ur = i("117d");
    const Nr = { id: "downloadModule", class: Object(s["u"])({ active: !0 }) },
      Rr = { class: "dm_container" },
      Wr = Object(s["i"])(
        "svg",
        { class: "ico" },
        [Object(s["i"])("use", { "xlink:href": "#ico-more" })],
        -1
      ),
      Fr = { class: "dm_content" },
      qr = { class: "dm_infos" },
      zr = { class: "h3" },
      Hr = { class: "dm_btns" },
      Vr = ["href"],
      Gr = { class: "dm_nft_mobile" },
      Yr = ["src"],
      Zr = { class: "dm_links" },
      Kr = ["href", "download"],
      Qr = Object(s["i"])(
        "div",
        { class: "icon" },
        [
          Object(s["i"])("svg", { class: "ico" }, [
            Object(s["i"])("use", { "xlink:href": "#ico-download" }),
          ]),
        ],
        -1
      ),
      Jr = { class: "text" },
      Xr = { class: "sub-text" },
      el = ["href", "download"],
      tl = Object(s["i"])(
        "div",
        { class: "icon" },
        [
          Object(s["i"])("svg", { class: "ico" }, [
            Object(s["i"])("use", { "xlink:href": "#ico-download" }),
          ]),
        ],
        -1
      ),
      il = { class: "text" },
      sl = { class: "sub-text" },
      nl = ["href", "download"],
      al = Object(s["i"])(
        "div",
        { class: "icon" },
        [
          Object(s["i"])("svg", { class: "ico" }, [
            Object(s["i"])("use", { "xlink:href": "#ico-download" }),
          ]),
        ],
        -1
      ),
      ol = { class: "text" },
      cl = { class: "sub-text" },
      rl = ["href", "download"],
      ll = Object(s["i"])(
        "div",
        { class: "icon" },
        [
          Object(s["i"])("svg", { class: "ico" }, [
            Object(s["i"])("use", { "xlink:href": "#ico-download" }),
          ]),
        ],
        -1
      ),
      dl = { class: "text" },
      bl = { class: "sub-text" },
      ul = ["href", "download"],
      pl = Object(s["i"])(
        "div",
        { class: "icon" },
        [
          Object(s["i"])("svg", { class: "ico" }, [
            Object(s["i"])("use", { "xlink:href": "#ico-download" }),
          ]),
        ],
        -1
      ),
      hl = { class: "text" },
      ml = { class: "sub-text" },
      Ol = { class: "dm_nft" },
      jl = ["src"];
    function gl(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("section", Nr, [
          Object(s["i"])("div", Rr, [
            Object(s["i"])(
              "div",
              {
                class: "dm_close",
                onClick: t[0] || (t[0] = (...e) => o.close && o.close(...e)),
              },
              [Object(s["k"])(" close "), Wr]
            ),
            Object(s["i"])("div", Fr, [
              Object(s["i"])("div", qr, [
                Object(s["i"])(
                  "h3",
                  zr,
                  Object(s["M"])(e.$t("downloadmodule.title")),
                  1
                ),
                Object(s["i"])("div", Hr, [
                  Object(s["i"])(
                    "a",
                    {
                      class: "dm_id",
                      onClick:
                        t[1] ||
                        (t[1] = Object(s["S"])(
                          (...e) => o.openNft && o.openNft(...e),
                          ["prevent", "stop"]
                        )),
                    },
                    [
                      Object(s["k"])(" AILU "),
                      Object(s["i"])(
                        "span",
                        null,
                        "#" + Object(s["M"])(i.nft.itemId),
                        1
                      ),
                    ]
                  ),
                  Object(s["i"])(
                    "a",
                    {
                      class: "dm_id",
                      href:
                        "https://magiceden.io/ordinals/item-details/" +
                        i.nft.inscriptionId,
                      target: "_blank",
                    },
                    "Magic Eden",
                    8,
                    Vr
                  ),
                ]),
                Object(s["i"])("div", Gr, [
                  Object(s["i"])("img", { src: o.urlFB, alt: "" }, null, 8, Yr),
                ]),
                Object(s["i"])("div", Zr, [
                  Object(s["i"])(
                    "a",
                    {
                      class: "btn",
                      href: o.urlPFP,
                      target: "_blank",
                      download: i.nft.itemId + "_fb",
                      onClick:
                        t[2] ||
                        (t[2] = Object(s["S"])(
                          (e) =>
                            o.clickedDownload(
                              o.urlPFP,
                              i.nft.itemId + "_pfp.png"
                            ),
                          ["prevent", "stop", "exact"]
                        )),
                    },
                    [
                      Qr,
                      Object(s["i"])("div", Jr, [
                        Object(s["i"])(
                          "span",
                          null,
                          Object(s["M"])(e.$t("downloadmodule.pfp")),
                          1
                        ),
                        Object(s["i"])(
                          "span",
                          Xr,
                          Object(s["M"])(e.$t("downloadmodule.png")),
                          1
                        ),
                      ]),
                    ],
                    8,
                    Kr
                  ),
                  Object(s["i"])(
                    "a",
                    {
                      class: "btn",
                      href: o.urlFB,
                      target: "_blank",
                      download: i.nft.itemId + "_fb",
                      onClick:
                        t[3] ||
                        (t[3] = Object(s["S"])(
                          (e) =>
                            o.clickedDownload(
                              o.urlFB,
                              i.nft.itemId + "_fb.png"
                            ),
                          ["prevent", "stop", "exact"]
                        )),
                    },
                    [
                      tl,
                      Object(s["i"])("div", il, [
                        Object(s["i"])(
                          "span",
                          null,
                          Object(s["M"])(e.$t("downloadmodule.fullbody")),
                          1
                        ),
                        Object(s["i"])(
                          "span",
                          sl,
                          Object(s["M"])(e.$t("downloadmodule.png")),
                          1
                        ),
                      ]),
                    ],
                    8,
                    el
                  ),
                  Object(s["i"])(
                    "a",
                    {
                      class: "btn",
                      href: o.urlNoBG,
                      target: "_blank",
                      download: i.nft.itemId + "_nobg",
                      onClick:
                        t[4] ||
                        (t[4] = Object(s["S"])(
                          (e) =>
                            o.clickedDownload(
                              o.urlNoBG,
                              i.nft.itemId + "_nobg.png"
                            ),
                          ["prevent", "stop", "exact"]
                        )),
                    },
                    [
                      al,
                      Object(s["i"])("div", ol, [
                        Object(s["i"])(
                          "span",
                          null,
                          Object(s["M"])(e.$t("downloadmodule.nobackground")),
                          1
                        ),
                        Object(s["i"])(
                          "span",
                          cl,
                          Object(s["M"])(e.$t("downloadmodule.png")),
                          1
                        ),
                      ]),
                    ],
                    8,
                    nl
                  ),
                  Object(s["i"])(
                    "a",
                    {
                      class: "btn",
                      href: o.urlModelT,
                      target: "_blank",
                      download: i.nft.itemId + "_T.glb",
                      onClick:
                        t[5] ||
                        (t[5] = Object(s["S"])(
                          (e) =>
                            o.clickedDownload(
                              o.urlModelT,
                              i.nft.itemId + "_T.glb"
                            ),
                          ["prevent", "stop", "exact"]
                        )),
                    },
                    [
                      ll,
                      Object(s["i"])("div", dl, [
                        Object(s["i"])(
                          "span",
                          null,
                          Object(s["M"])(e.$t("downloadmodule.modelT")),
                          1
                        ),
                        Object(s["i"])(
                          "span",
                          bl,
                          Object(s["M"])(e.$t("downloadmodule.glb")),
                          1
                        ),
                      ]),
                    ],
                    8,
                    rl
                  ),
                  Object(s["i"])(
                    "a",
                    {
                      class: "btn",
                      href: o.urlVRM,
                      target: "_blank",
                      download: i.nft.itemId + "_VRM.glb",
                      onClick:
                        t[6] ||
                        (t[6] = Object(s["S"])(
                          (e) =>
                            o.clickedDownload(
                              o.urlVRM,
                              i.nft.itemId + "_VRM.vrm"
                            ),
                          ["prevent", "stop", "exact"]
                        )),
                    },
                    [
                      pl,
                      Object(s["i"])("div", hl, [
                        Object(s["i"])(
                          "span",
                          null,
                          Object(s["M"])(e.$t("downloadmodule.vrm")),
                          1
                        ),
                        Object(s["i"])(
                          "span",
                          ml,
                          Object(s["M"])(e.$t("downloadmodule.vrm-file")),
                          1
                        ),
                      ]),
                    ],
                    8,
                    ul
                  ),
                ]),
              ]),
              Object(s["i"])("div", Ol, [
                Object(s["i"])("img", { src: o.urlFB, alt: "" }, null, 8, jl),
              ]),
            ]),
          ]),
        ])
      );
    }
    i("88a7"), i("271a"), i("5494");
    var vl = i("6821"),
      fl = {
        name: "btcDownload",
        props: { nft: { type: fo, default: () => new fo() } },
        data: () => ({
          delivery: "https://delivery.endangeredlabs.io/download/",
        }),
        mounted() {
          this.animateIn();
        },
        computed: {
          isIframe() {
            return this.nft.fileUrl.match(/(.html)/i);
          },
          previewUrl() {
            return this.isIframe ? this.nft.previewUrl : this.nft.fileUrl;
          },
          urlModelA() {
            return (
              this.delivery + "model-A/" + this.toUrl(this.nft.id + "_A.glb")
            );
          },
          urlModelT() {
            return (
              this.delivery + "model-T/" + this.toUrl(this.nft.id + "_T.glb")
            );
          },
          urlVRM() {
            return (
              this.delivery + "vrm/" + this.toUrl(this.nft.id + "_VRM.vrm")
            );
          },
          urlFB() {
            return this.delivery + "fb/" + this.toUrl(this.nft.id + "_FB.png");
          },
          urlPFP() {
            return (
              this.delivery + "pfp/" + this.toUrl(this.nft.id + "_PFP.png")
            );
          },
          urlNoBG() {
            return (
              this.delivery + "nobg/" + this.toUrl(this.nft.id + "_NoBG.png")
            );
          },
        },
        methods: {
          openNft() {
            window.open(
              "https://ordinals.com/inscription/" + this.nft.inscriptionId
            );
          },
          toUrl(e) {
            const t = e.split(".")[1],
              i = vl(e),
              s = i.substring(8, 16).toUpperCase();
            return s + "." + t;
          },
          async clickedDownload(e, t) {
            try {
              const i = await fetch(e),
                s = await i.blob(),
                n = await URL.createObjectURL(s),
                a = document.createElement("a");
              (a.href = n),
                (a.download = t),
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a);
            } catch (i) {
              console.log({ err: i });
            }
          },
          shareOnTwitter(e) {
            const t = ["AILU #" + e.itemId],
              i = `I just inscribed ${t.join(
                ","
              )} on bitcoin forever @ailu2100`,
              s = encodeURI(i).replace(/#/g, "%23"),
              n = "https://twitter.com/intent/tweet?text=" + s;
            window.open(n, "_blank").focus();
          },
          async close() {
            await this.animateOut(), this.$emit("close");
          },
          async animateIn() {
            return Lr["a"]
              .timeline({ paused: !0 })
              .fromTo(
                "#downloadModule",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5, ease: "Power4.easeOut" },
                0
              )
              .restart();
          },
          async animateOut() {
            return Lr["a"]
              .timeline({ paused: !0 })
              .fromTo(
                "#downloadModule",
                { opacity: 1, y: 0 },
                { opacity: 0, y: 30, duration: 0.5, ease: "Power4.easeOut" },
                0
              )
              .restart();
          },
        },
      };
    const yl = c()(fl, [["render", gl]]);
    var wl = yl,
      _l = {
        name: "BtcMintPopup",
        data: () => ({
          network: wo.NETWORK_NAME,
          loaders: {},
          collectionId: wo.COLLECTION_ID,
          collection: null,
          orders: [],
          menu: "myInscription",
          popup: "",
          currentOrderId: null,
          btcPrice: 0,
          autoRefresh: !1,
          autoRefreshInterval: 0,
          walletConnected: !1,
          walletConnectedType: "",
          userOrdAddress: null,
          userRefundAddress: null,
          notif: null,
          currentPasswordIsValid: null,
          currentPasswordWhitelist: "",
          maxAllowed: 10,
          nftDownload: null,
        }),
        components: {
          BtcDownload: wl,
          BtcNotifications: Cr,
          BtcConnect: Dr,
          btcSalesClosed: br,
          btcOrderCompleted: Vc,
          BtcOrders: Fo,
          BtcWaitingPayment: Io,
          BtcMinting: aa,
          btcMyInscriptions: yr,
        },
        async created() {
          Rn.init(wo.BACKEND_URI),
            await this.getCollection(),
            await this.getCurrentBtcUsd();
        },
        async mounted() {
          this.emitter.on("download", this.onDownload),
            this.animateIn(),
            this.getUserWalletSession(),
            this.walletConnected || (this.popup = "connect"),
            this.userOrdAddress && (await this.getOrders(this.userOrdAddress)),
            this.startAutoRefresh(),
            (this.refreshCollection = setInterval(() => {
              this.getCollection(!1);
            }, 15e3));
        },
        unmounted() {
          clearInterval(this.autoRefreshInterval),
            clearInterval(this.refreshCollection),
            this.emitter.off("download", this.onDownload);
        },
        computed: {
          step() {
            return "orderList" === this.menu
              ? "orders"
              : "myInscription" === this.menu
              ? "myInscription"
              : this.currentOrderId && this.currentOrder
              ? this.currentOrder.getOrderState()
              : "myInscription";
          },
          currentOrder() {
            if (!this.currentOrderId) return null;
            const e = this.orders.find((e) => e.id === this.currentOrderId);
            return e || null;
          },
          nftInscriptions() {
            let e = [];
            for (const t of this.orders) e = [...e, ...t.nftsInscriptions];
            return e;
          },
          ordersFiltered() {
            return this.orders.filter((e) => !e.cursed);
          },
        },
        methods: {
          onDownload(e) {
            this.nftDownload = e;
          },
          async getCollection(e = !0) {
            e && (await this.setLoader("global", !0));
            const t = await Rn.get("collection/" + this.collectionId);
            if (t.error())
              return (
                e && (await this.setLoader("global", !1)),
                void this.$parent.showNotif({
                  type: "error",
                  text: this.$t("mint.notifs.errors.collection"),
                })
              );
            (this.collection = new Un(t.data())),
              e && (await this.setLoader("global", !1));
          },
          async getOrders(e, t = !0) {
            if (!e) return;
            t && (await this.setLoader("orders", !0));
            const i = await Rn.get("orders/" + this.collectionId + "/" + e);
            return (
              t && (await this.setLoader("orders", !1)),
              i.error()
                ? (this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.orders"),
                  }),
                  !1)
                : ((this.orders = i.data().map((e) => new go(e))), !0)
            );
          },
          startAutoRefresh() {
            !0 !== this.autoRefresh &&
              ((this.autoRefresh = !0),
              (this.autoRefreshInterval = setInterval(() => {
                this.getOrders(this.userOrdAddress, !1);
              }, 15e3)));
          },
          async getCurrentBtcUsd() {
            await this.setLoader("global", !0);
            const e = await Rn.get("https://cex.io/api/last_price/BTC/USD");
            await this.setLoader("global", !1),
              e.error()
                ? this.$parent.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.currency"),
                  })
                : (this.btcPrice = parseFloat(e.data().lprice));
          },
          async copyClipboard(e, t) {
            await navigator.clipboard.writeText(e),
              t &&
                ((t.innerHTML = "COPIED"),
                setTimeout(() => {
                  t.innerHTML = "COPY";
                }, 2e3));
          },
          async setLoader(e, t) {
            if (!0 === t) this.loaders[e] = Date.now();
            else {
              const t = Date.now() - this.loaders[e];
              t > 0 &&
                t < 500 &&
                (await new Promise((e) => setTimeout(() => e(), 500 - t))),
                (this.loaders[e] = 0);
            }
          },
          setUserWalletSession(e, t, i) {
            console.log("setUserWalletSession", e, t),
              t &&
                ((this.userRefundAddress = e),
                (this.userOrdAddress = t),
                localStorage.setItem("_btc_cardinal_address", e),
                localStorage.setItem("_btc_ordinal_address", t),
                localStorage.setItem("_btc_connected", "1"),
                i &&
                  (localStorage.setItem("_btc_connected_type", i),
                  (this.walletConnectedType = i)),
                (this.walletConnected = !0),
                this.$refs["btc-mint__minting"] &&
                  ((this.$refs["btc-mint__minting"].ordAddress = t),
                  (this.$refs["btc-mint__minting"].cardAddress = e),
                  this.$refs["btc-mint__minting"].checkWhitelist()),
                this.$refs["btc-mint__closing"] &&
                  ((this.$refs["btc-mint__closing"].ordAddress = t),
                  this.$refs["btc-mint__closing"].checkWhitelist()));
          },
          getUserWalletSession() {
            localStorage.getItem("_btc_ordinal_address") &&
              (this.userOrdAddress = localStorage.getItem(
                "_btc_ordinal_address"
              )),
              localStorage.getItem("_btc_cardinal_address") &&
                (this.userRefundAddress = localStorage.getItem(
                  "_btc_cardinal_address"
                )),
              "1" === localStorage.getItem("_btc_connected") &&
                (this.walletConnected = !0),
              localStorage.getItem("_btc_connected_type") &&
                (this.walletConnectedType = localStorage.getItem(
                  "_btc_connected_type"
                )),
              "phantom" === this.walletConnectedType &&
                this.connectUserWalletSessionPhantom(),
              "unisat" === this.walletConnectedType &&
                this.connectUserWalletSessionUnisat();
          },
          async connectUserWalletSessionUnisat() {
            let e = null;
            if ("unisat" in window) {
              const t = window,
                i = t.unisat;
              i && (e = i);
            }
            if (!e)
              return (
                (this.popup = ""),
                void this.showNotif({
                  type: "error",
                  text: this.$t("mint.notifs.connectError.unisat"),
                })
              );
            const t = this,
              i = await e.requestAccounts(),
              s = (e) => {
                const i = "",
                  s = e[0];
                this.setUserWalletSession(i, s, "unisat"),
                  this.getOrders(t.userOrdAddress, !1),
                  this.showNotif({
                    type: "success",
                    text: t.$t("mint.notifs.connectSuccess.unisat"),
                  }),
                  (this.popup = "");
              };
            s(i);
          },
          async connectUserWalletSessionXVerse() {
            const e = {
              payload: {
                purposes: [Ur["a"].Ordinals, Ur["a"].Payment],
                message: this.$t("mint.connectMessage"),
                network: {
                  type:
                    "testnet3" === _o.envs.NETWORK_NAME
                      ? Ur["b"].Testnet
                      : Ur["b"].Mainnet,
                },
              },
              onFinish: (e) => {
                if (e.addresses && e.addresses.length > 0) {
                  var t, i;
                  const s =
                      null ===
                        (t = e.addresses.find(
                          (e) => e.purpose === Ur["a"].Payment
                        )) || void 0 === t
                        ? void 0
                        : t.address,
                    n =
                      null ===
                        (i = e.addresses.find(
                          (e) => e.purpose === Ur["a"].Ordinals
                        )) || void 0 === i
                        ? void 0
                        : i.address;
                  this.setUserWalletSession(s, n, "xverse"),
                    this.getOrders(this.userOrdAddress, !1),
                    this.showNotif({
                      type: "success",
                      text: this.$t("mint.notifs.connectSuccess.xverse"),
                    }),
                    (this.popup = "");
                }
              },
              onCancel: () => {},
            };
            await Object(Ur["c"])(e);
          },
          async connectUserWalletSessionPhantom() {
            let e = null;
            if ("phantom" in window) {
              var t;
              const i = window,
                s =
                  null === (t = i.phantom) || void 0 === t ? void 0 : t.bitcoin;
              s && s.isPhantom && (e = s);
            }
            if (!e)
              return (
                (this.popup = ""),
                void this.showNotif({
                  type: "error",
                  text: this.$t("mint.notifs.connectError.phantom"),
                })
              );
            const i = this,
              s = await e.requestAccounts();
            e.on("accountsChanged", (e) => {
              e.length > 0 ? n(e) : this.disconnectUserWalletSession();
            });
            const n = (e) => {
              var t, s;
              const n =
                  null === (t = e.find((e) => e.purpose === Ur["a"].Payment)) ||
                  void 0 === t
                    ? void 0
                    : t.address,
                a =
                  null ===
                    (s = e.find((e) => e.purpose === Ur["a"].Ordinals)) ||
                  void 0 === s
                    ? void 0
                    : s.address;
              this.setUserWalletSession(n, a, "phantom"),
                this.getOrders(i.userOrdAddress, !1),
                this.showNotif({
                  type: "success",
                  text: i.$t("mint.notifs.connectSuccess.phantom"),
                }),
                (this.popup = "");
            };
            n(s);
          },
          async connectUserWalletSessionMagicEden() {
            const e = {
              getProvider: async () => window.BitcoinProvider,
              payload: {
                purposes: [Ur["a"].Ordinals, Ur["a"].Payment],
                message: this.$t("mint.connectMessage"),
                network: {
                  type:
                    "testnet3" === _o.envs.NETWORK_NAME
                      ? Ur["b"].Testnet
                      : Ur["b"].Mainnet,
                },
              },
              onFinish: (e) => {
                if (e.addresses && e.addresses.length > 0) {
                  var t, i;
                  const s =
                      null ===
                        (t = e.addresses.find(
                          (e) => e.purpose === Ur["a"].Payment
                        )) || void 0 === t
                        ? void 0
                        : t.address,
                    n =
                      null ===
                        (i = e.addresses.find(
                          (e) => e.purpose === Ur["a"].Ordinals
                        )) || void 0 === i
                        ? void 0
                        : i.address;
                  this.setUserWalletSession(s, n, "magicEden"),
                    this.getOrders(this.userOrdAddress, !1),
                    this.showNotif({
                      type: "success",
                      text: this.$t("mint.notifs.connectSuccess.magicEden"),
                    }),
                    (this.popup = "");
                }
              },
              onCancel: () => {},
            };
            await Object(Ur["c"])(e);
          },
          async connectUserWalletSessionHiro() {
            if (window.btc) {
              var e, t, i;
              const s = await (null === (e = window.btc) || void 0 === e
                  ? void 0
                  : e.request("getAddresses")),
                n =
                  null === s ||
                  void 0 === s ||
                  null === (t = s.result) ||
                  void 0 === t ||
                  null === (t = t.addresses) ||
                  void 0 === t ||
                  null ===
                    (t = t.find(
                      (e) =>
                        "p2wpkh" ===
                        (null === e || void 0 === e ? void 0 : e.type)
                    )) ||
                  void 0 === t
                    ? void 0
                    : t.address,
                a =
                  null === s ||
                  void 0 === s ||
                  null === (i = s.result) ||
                  void 0 === i ||
                  null === (i = i.addresses) ||
                  void 0 === i ||
                  null ===
                    (i = i.find(
                      (e) =>
                        "p2tr" ===
                        (null === e || void 0 === e ? void 0 : e.type)
                    )) ||
                  void 0 === i
                    ? void 0
                    : i.address;
              this.setUserWalletSession(n, a, "hiro"),
                this.getOrders(this.userOrdAddress, !1),
                this.showNotif({
                  type: "success",
                  text: this.$t("mint.notifs.connectSuccess.hiro"),
                }),
                (this.popup = "");
            }
          },
          disconnectUserWalletSession() {
            this.walletConnected &&
              ((this.walletConnected = !1),
              (this.autoRefresh = !1),
              clearInterval(this.autoRefreshInterval),
              localStorage.removeItem("_btc_ordinal_address"),
              localStorage.removeItem("_btc_cardinal_address"),
              localStorage.removeItem("_btc_connected"),
              localStorage.removeItem("_btc_connected_type"),
              (this.orders = []),
              this.$refs["btc-mint__minting"] &&
                ((this.$refs["btc-mint__minting"].ordAddress = ""),
                (this.$refs["btc-mint__minting"].userOrdAddress = ""),
                (this.$refs["btc-mint__minting"].cardAddress = ""),
                (this.$refs["btc-mint__minting"].userRefundAddress = "")),
              this.forceClose());
          },
          isTaprootAddress(e) {
            return e.startsWith("bc1p");
          },
          async payWithWalletSession(e) {
            if ("hiro" === this.walletConnectedType) {
              var t;
              await this.setLoader("payWithWallet", !0);
              const i = await (null === (t = window.btc) || void 0 === t
                ? void 0
                : t.request("sendTransfer", {
                    address: e.receiveAddress,
                    amount: e.totalNeeded.satoshi.toString(),
                  }));
              console.log(i), await this.setLoader("payWithWallet", !1);
            } else if ("xverse" === this.walletConnectedType) {
              await this.setLoader("payWithWallet", !0);
              const t = {
                payload: {
                  network: {
                    type:
                      "testnet3" === _o.envs.NETWORK_NAME
                        ? Ur["b"].Testnet
                        : Ur["b"].Mainnet,
                  },
                  recipients: [
                    {
                      address: e.receiveAddress,
                      amountSats: e.totalNeeded.satoshi,
                    },
                  ],
                  senderAddress: this.userRefundAddress,
                },
                onFinish: async (e) => {
                  await this.setLoader("payWithWallet", !1),
                    this.showNotif({
                      type: "success",
                      text: this.$t("mint.notifs.payWithWallet.xverse"),
                    }),
                    console.log(e);
                },
                onCancel: async () => {
                  await this.setLoader("payWithWallet", !1);
                },
              };
              try {
                await Object(Ur["d"])(t);
              } catch (i) {
                console.error(i),
                  await this.setLoader("payWithWallet", !1),
                  this.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.payWithWallet.xverse"),
                  });
              }
            } else if ("unisat" === this.walletConnectedType) {
              let t = null;
              if ("unisat" in window) {
                const e = window,
                  i = e.unisat;
                i && (t = i);
              }
              if (!t)
                return (
                  (this.popup = ""),
                  void this.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.connectError.unisat"),
                  })
                );
              await this.setLoader("payWithWallet", !0);
              try {
                const i = await t.sendBitcoin(
                  e.receiveAddress,
                  Number(e.totalNeeded.satoshi)
                );
                this.showNotif({
                  type: "success",
                  text: this.$t("mint.notifs.payWithWallet.unisat"),
                }),
                  console.log(i);
              } catch (i) {
                console.log(i),
                  this.showNotif({
                    type: "error",
                    text: this.$t("mint.notifs.errors.payWithWallet.unisat"),
                  });
              }
              await this.setLoader("payWithWallet", !1);
            }
          },
          formatDuration(e) {
            if (e < 0) return "Veuillez saisir un nombre positif de secondes.";
            const t = [
              { unit: "year", duration: 31536e3 },
              { unit: "month", duration: 2592e3 },
              { unit: "day", duration: 86400 },
              { unit: "hour", duration: 3600 },
              { unit: "minute", duration: 60 },
              { unit: "second", duration: 1 },
            ];
            for (let i = 0; i < t.length; i++) {
              const { unit: s, duration: n } = t[i];
              if (e >= n) {
                const t = Math.round(e / n);
                return `${t} ${s}${t > 1 ? "s" : ""}`;
              }
            }
            return "now";
          },
          async close() {
            await this.animateOut(), this.$emit("close");
          },
          async forceClose() {
            await Lr["a"]
              .timeline({ paused: !0 })
              .fromTo(
                this.$refs["btc-mint__bg"],
                { backdropFilter: "blur(10px)" },
                {
                  backdropFilter: "blur(0px)",
                  duration: 1,
                  ease: "Power4.easeOut",
                },
                0
              )
              .restart(),
              this.$emit("close");
          },
          async animateIn() {
            return Lr["a"]
              .timeline({ paused: !0 })
              .fromTo(
                this.$refs["btc-mint__container"],
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "Power4.easeOut" },
                0
              )
              .fromTo(
                this.$refs["btc-mint__bg"],
                { backdropFilter: "blur(0px)" },
                {
                  backdropFilter: "blur(10px)",
                  duration: 1,
                  ease: "Power4.easeOut",
                },
                0
              )
              .restart();
          },
          async animateOut() {
            return Lr["a"]
              .timeline({ paused: !0 })
              .fromTo(
                this.$refs["btc-mint__container"],
                { opacity: 1, y: 0 },
                { opacity: 0, y: 30, duration: 1, ease: "Power4.easeOut" },
                0
              )
              .fromTo(
                this.$refs["btc-mint__bg"],
                { backdropFilter: "blur(10px)" },
                {
                  backdropFilter: "blur(0px)",
                  duration: 1,
                  ease: "Power4.easeOut",
                },
                0
              )
              .restart();
          },
          showNotif(e) {
            this.notif = e;
          },
        },
      };
    i("510d");
    const kl = c()(_l, [["render", _s]]);
    var Cl = kl;
    const Il = ["href"],
      Sl = { class: "ico", style: { "margin-right": "-3px" } },
      Al = Object(s["i"])("use", { "xlink:href": "#ico-twitter" }, null, -1),
      Ml = [Al];
    function xl(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "a",
          { href: i.url, target: "_blank" },
          [(Object(s["B"])(), Object(s["h"])("svg", Sl, Ml))],
          8,
          Il
        )
      );
    }
    var Tl = { name: "SocialTwitter", props: { url: String } };
    const Bl = c()(Tl, [["render", xl]]);
    var Pl = Bl;
    const Ll = ["href"],
      $l = Object(s["i"])(
        "svg",
        { class: "ico" },
        [Object(s["i"])("use", { "xlink:href": "#ico-telegram" })],
        -1
      ),
      El = [$l];
    function Dl(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("a", { href: i.url, target: "_blank" }, El, 8, Ll)
      );
    }
    var Ul = { name: "SocialTelegram", props: { url: String } };
    const Nl = c()(Ul, [["render", Dl]]);
    var Rl = Nl;
    const Wl = ["href"],
      Fl = Object(s["i"])(
        "svg",
        { class: "ico" },
        [Object(s["i"])("use", { "xlink:href": "#ico-discord" })],
        -1
      ),
      ql = [Fl];
    function zl(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("a", { href: i.url, target: "_blank" }, ql, 8, Wl)
      );
    }
    var Hl = { name: "SocialDiscord", props: { url: String } };
    const Vl = c()(Hl, [["render", zl]]);
    var Gl = Vl;
    const Yl = ["href"],
      Zl = Object(s["i"])(
        "svg",
        { class: "ico" },
        [Object(s["i"])("use", { "xlink:href": "#ico-magicEden" })],
        -1
      ),
      Kl = [Zl];
    function Ql(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("a", { href: i.url, target: "_blank" }, Kl, 8, Yl)
      );
    }
    var Jl = { name: "SocialMagicEden", props: { url: String } };
    const Xl = c()(Jl, [["render", Ql]]);
    var ed = Xl;
    const td = ["href"],
      id = Object(s["i"])(
        "svg",
        { class: "ico" },
        [Object(s["i"])("use", { "xlink:href": "#ico-instagram" })],
        -1
      ),
      sd = [id];
    function nd(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("a", { href: i.url, target: "_blank" }, sd, 8, td)
      );
    }
    var ad = { name: "SocialInstagram", props: { url: String } };
    const od = c()(ad, [["render", nd]]);
    var cd = od;
    const rd = ["href"],
      ld = Object(s["i"])(
        "svg",
        { class: "ico" },
        [Object(s["i"])("use", { "xlink:href": "#ico-soundcloud" })],
        -1
      ),
      dd = [ld];
    function bd(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("a", { href: i.url, target: "_blank" }, dd, 8, rd)
      );
    }
    var ud = { name: "SocialSoundCloud", props: { url: String } };
    const pd = c()(ud, [["render", bd]]);
    var hd = pd,
      md = {
        name: "Home",
        components: {
          btcMintPopup: Cl,
          SocialSoundCloud: hd,
          SocialInstagram: cd,
          SocialMagicEden: ed,
          SocialDiscord: Gl,
          SocialTelegram: Rl,
          SocialTwitter: Pl,
        },
        data: () => ({
          open: { 0: !1 },
          narrative: 1,
          team: "metapanda",
          ready: !0,
          close: !0,
          progression: 0,
          ar: !1,
          musicPlaying: !1,
          popupOpen: !1,
          nftViewerReady: !1,
          isMobileView: !0,
          openBtcMint: !1,
        }),
        computed: {
          assets3d() {
            switch (this.team) {
              case "metapanda":
                return is;
              case "cyber":
                return ss;
              case "shadow":
                return ns;
            }
            return is;
          },
        },
        methods: {
          openItem(e) {
            this.open[e] = !this.open[e];
          },
          scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          card(e) {
            this.team = e;
          },
          checkForMobileDevice() {
            this.isMobileView =
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              );
          },
          onEnter() {
            (this.close = !0),
              "#mint" === document.location.hash && (this.openBtcMint = !0),
              window.runScrollReveal(),
              (window.isLoaded = !0);
          },
          scrollTo(e) {
            window.scrollTo({
              top: document.getElementById(e).getBoundingClientRect().top,
            });
          },
        },
        async mounted() {
          this.checkForMobileDevice();
          const e = (e) => new Promise((t) => setTimeout(t, e));
          while (!window.runScrollReveal) await e(100);
          window.runScrollReveal();
          const t = async () => {
            await e(50);
            while (this.progression < 100) await e(20), this.progression++;
            await e(50), (this.ready = !0);
          };
          await t();
        },
      };
    const Od = c()(md, [["render", ts]]);
    var jd = Od;
    const gd = (e) => (
        Object(s["E"])("data-v-270bae57"), (e = e()), Object(s["C"])(), e
      ),
      vd = { id: "gallery" },
      fd = { class: "page" },
      yd = gd(() =>
        Object(s["i"])(
          "a",
          { href: "/#", class: "logo" },
          [
            Object(s["i"])("img", {
              src: "/images/site/loaderON.png",
              alt: "logo",
            }),
          ],
          -1
        )
      ),
      wd = { class: "social" },
      _d = { class: "social-link" },
      kd = { class: "social-link" },
      Cd = { class: "social-link" },
      Id = { class: "social-link" },
      Sd = { class: "social-link" },
      Ad = { class: "social-link" },
      Md = gd(() =>
        Object(s["i"])(
          "div",
          { class: "copyright" },
          [
            Object(s["i"])(
              "a",
              {
                href: "https://twitter.com/Ailu2100",
                style: { color: "white" },
                target: "_blank",
              },
              " © Meta AI "
            ),
          ],
          -1
        )
      );
    function xd(e, t, i, n, a, o) {
      const c = Object(s["I"])("GalleryMenuItem"),
        r = Object(s["I"])("SocialTwitter"),
        l = Object(s["I"])("SocialTelegram"),
        d = Object(s["I"])("SocialDiscord"),
        b = Object(s["I"])("SocialMagicEden"),
        u = Object(s["I"])("SocialSoundCloud"),
        p = Object(s["I"])("SocialInstagram"),
        h = Object(s["I"])("GalleryPage"),
        m = Object(s["I"])("ContentPage");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", vd, [
          Object(s["i"])("div", fd, [
            Object(s["i"])(
              "div",
              {
                class: Object(s["u"])([
                  "sidebar",
                  { sidebarOpen: e.sidebarOpen },
                ]),
                onClick:
                  t[4] ||
                  (t[4] = Object(s["S"])(
                    (e) => o.closePopup("sidebarOpen"),
                    ["stop", "exact"]
                  )),
              },
              [
                yd,
                Object(s["i"])(
                  "div",
                  {
                    class: "menu",
                    onClick:
                      t[2] ||
                      (t[2] = Object(s["S"])(() => {}, ["prevent", "stop"])),
                  },
                  [
                    Object(s["l"])(
                      c,
                      {
                        "ico-img": "/images/site/ico_mint.png",
                        label: "GALLERY",
                        active: "hub" === o.currentPage,
                        onClick:
                          t[0] ||
                          (t[0] = Object(s["S"])(
                            (e) => o.changePage("hub"),
                            ["stop"]
                          )),
                      },
                      null,
                      8,
                      ["active"]
                    ),
                    // Object(s["l"])(
                    //   c,
                    //   {
                    //     "ico-img": "/images/site/documents.png",
                    //     label: "DOCUMENTS",
                    //     active: "documents" === o.currentPage,
                    //     onClick:
                    //       t[1] ||
                    //       (t[1] = Object(s["S"])(
                    //         (e) => o.changePage("documents"),
                    //         ["stop"]
                    //       )),
                    //   },
                    //   null,
                    //   8,
                    //   ["active"]
                    // ),
                    Object(s["l"])(c, {
                      "ico-img": "/images/site/network.png",
                      label: "NETWORK STATE",
                      active: !1,
                      soon: "",
                    }),
                    Object(s["l"])(c, {
                      "ico-img": "/images/site/gift.png",
                      label: "GIFT SHOP",
                      active: !1,
                      soon: "",
                    }),
                  ]
                ),
                Object(s["i"])(
                  "div",
                  {
                    class: "footer",
                    onClick:
                      t[3] || (t[3] = Object(s["S"])(() => {}, ["stop"])),
                  },
                  [
                    Object(s["i"])("ul", wd, [
                      Object(s["i"])("li", _d, [
                        Object(s["l"])(r, {
                          url: "https://twitter.com/Ailu2100",
                        }),
                      ]),
                      Object(s["i"])("li", kd, [
                        Object(s["l"])(l, { url: "https://t.me/ailu2100" }),
                      ]),
                      // Object(s["i"])("li", Cd, [
                      //   Object(s["l"])(d, { url: "https://discord.gg/AILU" }),
                      // ]),
                      // Object(s["i"])("li", Id, [
                      //   Object(s["l"])(b, {
                      //     url: "https://magiceden.io/ordinals/marketplace/ailu",
                      //   }),
                      // ]),
                      // Object(s["i"])("li", Sd, [
                      //   Object(s["l"])(u, {
                      //     url: "https://soundcloud.com/endangeredlabs",
                      //   }),
                      // ]),
                      // Object(s["i"])("li", Ad, [
                      //   Object(s["l"])(p, {
                      //     url: "https://instagram.com/ailu2100",
                      //   }),
                      // ]),
                    ]),
                    Md,
                  ]
                ),
              ],
              2
            ),
            "hub" === o.currentPage
              ? (Object(s["B"])(), Object(s["f"])(h, { key: 0 }))
              : Object(s["g"])("", !0),
            ["documents", "community"].includes(o.currentPage)
              ? (Object(s["B"])(),
                Object(s["f"])(
                  m,
                  {
                    key: 1,
                    "category-id":
                      "documents" === o.currentPage
                        ? "8b6db965-7728-4798-9f15-58826b684b6a"
                        : "8ed297c2-bc2c-4973-84d9-68ad2ad45582",
                    label:
                      "documents" === o.currentPage
                        ? "Documents"
                        : "Network State",
                  },
                  null,
                  8,
                  ["category-id", "label"]
                ))
              : Object(s["g"])("", !0),
          ]),
        ])
      );
    }
    const Td = { key: 0, class: "ico" },
      Bd = ["xlink:href"],
      Pd = ["src"],
      Ld = { key: 2, class: "soon" };
    function $d(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "div",
          {
            class: Object(s["u"])([
              "button",
              { active: i.active, soon: i.soon },
            ]),
          },
          [
            i.ico && !i.icoImg
              ? (Object(s["B"])(),
                Object(s["h"])("svg", Td, [
                  Object(s["i"])(
                    "use",
                    { "xlink:href": "#" + i.ico },
                    null,
                    8,
                    Bd
                  ),
                ]))
              : Object(s["g"])("", !0),
            i.icoImg
              ? (Object(s["B"])(),
                Object(s["h"])(
                  "img",
                  { key: 1, src: i.icoImg, class: "ico-img", alt: "" },
                  null,
                  8,
                  Pd
                ))
              : Object(s["g"])("", !0),
            Object(s["k"])(" " + Object(s["M"])(i.label) + " ", 1),
            i.soon
              ? (Object(s["B"])(), Object(s["h"])("span", Ld, " SOON"))
              : Object(s["g"])("", !0),
          ],
          2
        )
      );
    }
    var Ed = {
      name: "GalleryMenuItem",
      props: {
        ico: String,
        icoImg: { type: String, default: "" },
        label: String,
        active: Boolean,
        soon: { type: Boolean, default: !1 },
      },
    };
    i("c4b0");
    const Dd = c()(Ed, [
      ["render", $d],
      ["__scopeId", "data-v-143f580c"],
    ]);
    var Ud = Dd;
    const Nd = (e) => (
        Object(s["E"])("data-v-ad1e2852"), (e = e()), Object(s["C"])(), e
      ),
      Rd = { class: "content" },
      Wd = { class: "header" },
      Fd = Nd(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-gallery" })],
          -1
        )
      ),
      qd = { class: "content-page" },
      zd = { class: "content-header" },
      Hd = Nd(() =>
        Object(s["i"])(
          "div",
          { class: "title" },
          [
            Object(s["i"])(
              "div",
              { class: "title-decoration", "data-sr-id": "15" },
              [
                Object(s["i"])("p", null, [
                  Object(s["i"])("span", null, "Data"),
                  Object(s["k"])("01001011001"),
                ]),
                Object(s["i"])("p", null, "////////"),
              ]
            ),
            Object(s["i"])("h2", null, "GALLERY"),
          ],
          -1
        )
      ),
      Vd = { class: "filters-barre" },
      Gd = { class: "search" },
      Yd = { key: 0, class: "filters-selection" },
      Zd = { class: "ico", style: { margin: "0" } },
      Kd = Nd(() =>
        Object(s["i"])("use", { "xlink:href": "#ico-cross" }, null, -1)
      ),
      Qd = [Kd],
      Jd = { class: "ico", style: { margin: "0" } },
      Xd = Nd(() =>
        Object(s["i"])("use", { "xlink:href": "#ico-cross" }, null, -1)
      ),
      eb = [Xd],
      tb = { class: "filters-search" },
      ib = Nd(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-filter" })],
          -1
        )
      ),
      sb = { class: "connect-wallet-barre" },
      nb = { class: "content-wrapper" },
      ab = { key: 0, class: "items-empty" },
      ob = Nd(() => Object(s["i"])("h2", { class: "title" }, "Loading...", -1)),
      cb = Nd(() => Object(s["i"])("div", { id: "infinite-scroll" }, null, -1)),
      rb = [ob, cb],
      lb = { key: 1, class: "items" },
      db = Nd(() => Object(s["i"])("div", { id: "infinite-scroll" }, null, -1)),
      bb = { key: 2, class: "items-empty" },
      ub = Nd(() => Object(s["i"])("h2", { class: "title" }, "No results", -1)),
      pb = { class: "filters-selection" },
      hb = { class: "ico", style: { margin: "0" } },
      mb = Nd(() =>
        Object(s["i"])("use", { "xlink:href": "#ico-cross" }, null, -1)
      ),
      Ob = [mb],
      jb = { class: "ico", style: { margin: "0" } },
      gb = Nd(() =>
        Object(s["i"])("use", { "xlink:href": "#ico-cross" }, null, -1)
      ),
      vb = [gb],
      fb = Nd(() => Object(s["i"])("div", { id: "infinite-scroll" }, null, -1)),
      yb = { class: "filters-header" },
      wb = { class: "row" },
      _b = Nd(() => Object(s["i"])("h2", null, "Filters", -1)),
      kb = Nd(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-cross" })],
          -1
        )
      ),
      Cb = { class: "count" },
      Ib = { class: "filters-content" },
      Sb = { class: "connect-wallet-filter" },
      Ab = { class: "search-mobile" };
    function Mb(e, t, i, n, a, o) {
      const c = Object(s["I"])("GalleryCheckButton"),
        r = Object(s["I"])("ConnectWallet"),
        l = Object(s["I"])("GalleryItem"),
        d = Object(s["I"])("GalleryFilterItem"),
        b = Object(s["I"])("GalleryDetail");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", Rd, [
          Object(s["i"])("div", Wd, [
            Object(s["i"])(
              "div",
              {
                class: "menu-mobile",
                onClick:
                  t[0] ||
                  (t[0] = Object(s["S"])(
                    (t) => e.$parent.openPopup("sidebarOpen"),
                    ["prevent", "stop"]
                  )),
              },
              [Fd, Object(s["k"])(" Gallery ")]
            ),
          ]),
          Object(s["i"])("div", qd, [
            Object(s["i"])("div", zd, [
              Hd,
              Object(s["i"])("div", Vd, [
                Object(s["i"])("div", Gd, [
                  o.hasFilters || e.tokenId
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", Yd, [
                        e.tokenId
                          ? (Object(s["B"])(),
                            Object(s["h"])(
                              "div",
                              {
                                key: 0,
                                class: "btn btn-secondary",
                                onClick:
                                  t[1] ||
                                  (t[1] = (...e) =>
                                    o.clearSearch && o.clearSearch(...e)),
                              },
                              [
                                Object(s["k"])(
                                  " Token ID: " +
                                    Object(s["M"])(e.tokenId) +
                                    " ",
                                  1
                                ),
                                (Object(s["B"])(),
                                Object(s["h"])("svg", Zd, Qd)),
                              ]
                            ))
                          : Object(s["g"])("", !0),
                        o.hasFilters
                          ? (Object(s["B"])(),
                            Object(s["h"])(
                              "div",
                              {
                                key: 1,
                                class: "btn btn-secondary",
                                onClick:
                                  t[2] ||
                                  (t[2] = (...e) =>
                                    o.clearFilters && o.clearFilters(...e)),
                              },
                              [
                                Object(s["k"])(" Filters "),
                                (Object(s["B"])(),
                                Object(s["h"])("svg", Jd, eb)),
                              ]
                            ))
                          : Object(s["g"])("", !0),
                      ]))
                    : Object(s["g"])("", !0),
                  Object(s["i"])("div", tb, [
                    Object(s["R"])(
                      Object(s["i"])(
                        "input",
                        {
                          type: "text",
                          name: "tokenId",
                          placeholder: "Token ID",
                          "onUpdate:modelValue":
                            t[3] || (t[3] = (t) => (e.tokenId = t)),
                          class: "search-input",
                        },
                        null,
                        512
                      ),
                      [[s["O"], e.tokenId]]
                    ),
                    Object(s["i"])(
                      "div",
                      {
                        class: "btn",
                        onClick:
                          t[4] || (t[4] = (e) => o.openPopup("openedFilter")),
                      },
                      [ib, Object(s["k"])(" Filters ")]
                    ),
                    Object(s["i"])("div", sb, [
                      Object(s["l"])(
                        c,
                        {
                          active: e.activePfp,
                          label: "PFP",
                          onClick:
                            t[5] ||
                            (t[5] = Object(s["S"])(
                              (t) => (e.activePfp = !e.activePfp),
                              ["prevent", "stop"]
                            )),
                        },
                        null,
                        8,
                        ["active"]
                      ),
                    ]),
                    Object(s["l"])(
                      r,
                      {
                        "my-token-ids": e.myTokenIds,
                        "connecting-wallet": e.connectingWallet,
                        onFetch: o.onFetchMuToken,
                        onCloseFilter: o.onCloseFilter,
                        onOpenConnection: o.onOpenConnexion,
                        onCloseConnection:
                          t[6] || (t[6] = (t) => (e.connectingWallet = !1)),
                        class: "connect-wallet-barre",
                      },
                      null,
                      8,
                      [
                        "my-token-ids",
                        "connecting-wallet",
                        "onFetch",
                        "onCloseFilter",
                        "onOpenConnection",
                      ]
                    ),
                  ]),
                ]),
              ]),
            ]),
            Object(s["i"])("div", nb, [
              e.loading
                ? (Object(s["B"])(), Object(s["h"])("div", ab, rb))
                : o.itemPaginated.length > 0
                ? (Object(s["B"])(),
                  Object(s["h"])("div", lb, [
                    (Object(s["B"])(!0),
                    Object(s["h"])(
                      s["a"],
                      null,
                      Object(s["H"])(
                        o.itemPaginated,
                        (t) => (
                          Object(s["B"])(),
                          Object(s["f"])(
                            l,
                            Object(s["s"])(
                              { key: t.tokenId },
                              {
                                image:
                                  "https://delivery.endangeredlabs.io/download/public/" +
                                  (e.activePfp ? "pfp/pfp_" : "fb/") +
                                  t.tokenId +
                                  ".webp",
                                text: "#" + t.tokenId,
                              },
                              {
                                onClick: (i) =>
                                  e.$router.push("/hub/" + t.tokenId),
                              }
                            ),
                            null,
                            16,
                            ["onClick"]
                          )
                        )
                      ),
                      128
                    )),
                    db,
                  ]))
                : (Object(s["B"])(),
                  Object(s["h"])("div", bb, [
                    ub,
                    Object(s["i"])("div", pb, [
                      o.hasFilters
                        ? (Object(s["B"])(),
                          Object(s["h"])(
                            "div",
                            {
                              key: 0,
                              class: "btn btn-secondary",
                              onClick:
                                t[7] ||
                                (t[7] = (...e) =>
                                  o.clearFilters && o.clearFilters(...e)),
                            },
                            [
                              Object(s["k"])(" Clear filters "),
                              (Object(s["B"])(), Object(s["h"])("svg", hb, Ob)),
                            ]
                          ))
                        : Object(s["g"])("", !0),
                      e.tokenId
                        ? (Object(s["B"])(),
                          Object(s["h"])(
                            "div",
                            {
                              key: 1,
                              class: "btn btn-secondary",
                              onClick:
                                t[8] ||
                                (t[8] = (...e) =>
                                  o.clearSearch && o.clearSearch(...e)),
                            },
                            [
                              Object(s["k"])(
                                " Clear Token ID: " +
                                  Object(s["M"])(e.tokenId) +
                                  " ",
                                1
                              ),
                              (Object(s["B"])(), Object(s["h"])("svg", jb, vb)),
                            ]
                          ))
                        : Object(s["g"])("", !0),
                    ]),
                    fb,
                  ])),
              Object(s["i"])(
                "div",
                {
                  class: Object(s["u"])([
                    "filters scroll-style",
                    { open: e.openedFilter },
                  ]),
                  onClick:
                    t[14] ||
                    (t[14] = Object(s["S"])(
                      (...e) => o.onCloseFilter && o.onCloseFilter(...e),
                      ["prevent", "stop", "exact"]
                    )),
                },
                [
                  Object(s["i"])(
                    "div",
                    {
                      class: "filters-popup",
                      onClick:
                        t[13] ||
                        (t[13] = Object(s["S"])(
                          (...e) =>
                            o.onResetClickFilter && o.onResetClickFilter(...e),
                          ["prevent", "stop"]
                        )),
                    },
                    [
                      Object(s["i"])("div", yb, [
                        Object(s["i"])("div", wb, [
                          _b,
                          Object(s["i"])(
                            "div",
                            {
                              class: "btn btn-secondary",
                              onClick:
                                t[9] ||
                                (t[9] = Object(s["S"])(
                                  (...e) =>
                                    o.onCloseFilter && o.onCloseFilter(...e),
                                  ["prevent", "stop"]
                                )),
                            },
                            [Object(s["k"])(" Close "), kb]
                          ),
                        ]),
                        Object(s["i"])(
                          "div",
                          Cb,
                          Object(s["M"])(o.items.length) +
                            " result" +
                            Object(s["M"])(o.items.length > 1 ? "s" : ""),
                          1
                        ),
                      ]),
                      Object(s["i"])("div", Ib, [
                        Object(s["i"])("div", Sb, [
                          Object(s["l"])(
                            c,
                            {
                              active: e.activePfp,
                              label: "PFP",
                              onClick:
                                t[10] ||
                                (t[10] = Object(s["S"])(
                                  (t) => (e.activePfp = !e.activePfp),
                                  ["prevent", "stop"]
                                )),
                            },
                            null,
                            8,
                            ["active"]
                          ),
                        ]),
                        Object(s["l"])(
                          r,
                          {
                            "my-token-ids": e.myTokenIds,
                            "connecting-wallet": e.connectingWallet,
                            onFetch: o.onFetchMuToken,
                            onCloseFilter: o.onCloseFilter,
                            onOpenConnection: o.onOpenConnexion,
                            onCloseConnection:
                              t[11] ||
                              (t[11] = (t) => (e.connectingWallet = !1)),
                            class: "connect-wallet-filter",
                          },
                          null,
                          8,
                          [
                            "my-token-ids",
                            "connecting-wallet",
                            "onFetch",
                            "onCloseFilter",
                            "onOpenConnection",
                          ]
                        ),
                        Object(s["i"])("div", Ab, [
                          Object(s["R"])(
                            Object(s["i"])(
                              "input",
                              {
                                type: "text",
                                name: "tokenId",
                                placeholder: "Token ID",
                                "onUpdate:modelValue":
                                  t[12] || (t[12] = (t) => (e.tokenId = t)),
                                class: "search-input",
                              },
                              null,
                              512
                            ),
                            [[s["O"], e.tokenId]]
                          ),
                        ]),
                        (Object(s["B"])(!0),
                        Object(s["h"])(
                          s["a"],
                          null,
                          Object(s["H"])(
                            o.filtersLabels,
                            (t, i) => (
                              Object(s["B"])(),
                              Object(s["f"])(
                                d,
                                {
                                  selected: e.filtersSelected[t],
                                  key: i,
                                  options: o.getFilterOptions(t),
                                  label: t,
                                  onSelect: (e) => o.select(t, e),
                                  onOpen: (e) => o.openFilterItem(t),
                                  "is-open": e.openedFilterItem === t,
                                },
                                null,
                                8,
                                [
                                  "selected",
                                  "options",
                                  "label",
                                  "onSelect",
                                  "onOpen",
                                  "is-open",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                    ]
                  ),
                ],
                2
              ),
              e.detailItem
                ? (Object(s["B"])(),
                  Object(s["f"])(
                    b,
                    {
                      key: 3,
                      item: e.detailItem,
                      onClose: o.onCloseDetail,
                      onClosing: o.unlimitBody,
                      "my-token-ids": e.myTokenIds,
                    },
                    null,
                    8,
                    ["item", "onClose", "onClosing", "my-token-ids"]
                  ))
                : Object(s["g"])("", !0),
            ]),
          ]),
        ])
      );
    }
    const xb = { class: "item" },
      Tb = { class: "image" },
      Bb = ["src"],
      Pb = { class: "text" },
      Lb = { key: 0, class: "over" },
      $b = { class: "description" },
      Eb = { key: 0, class: "social" },
      Db = { key: 0, class: "social-link" },
      Ub = { key: 1, class: "social-link" },
      Nb = { key: 2, class: "social-link" },
      Rb = { key: 3, class: "social-link" },
      Wb = { key: 4, class: "social-link" },
      Fb = { key: 5, class: "social-link" };
    function qb(e, t, i, n, a, o) {
      const c = Object(s["I"])("SocialDiscord"),
        r = Object(s["I"])("SocialTelegram"),
        l = Object(s["I"])("SocialMagicEden"),
        d = Object(s["I"])("SocialTwitter"),
        b = Object(s["I"])("SocialSoundCloud");
      return (
        Object(s["B"])(),
        Object(s["h"])("div", xb, [
          Object(s["i"])("div", Tb, [
            Object(s["i"])("img", { src: i.image, alt: "" }, null, 8, Bb),
          ]),
          Object(s["i"])("div", Pb, Object(s["M"])(i.text), 1),
          i.hasHover
            ? (Object(s["B"])(),
              Object(s["h"])("div", Lb, [
                Object(s["i"])("div", $b, Object(s["M"])(i.description), 1),
                i.socials
                  ? (Object(s["B"])(),
                    Object(s["h"])("ul", Eb, [
                      o.hasSocialType("discord")
                        ? (Object(s["B"])(),
                          Object(s["h"])("li", Db, [
                            Object(s["l"])(
                              c,
                              { url: o.getSocialType("discord").url },
                              null,
                              8,
                              ["url"]
                            ),
                          ]))
                        : Object(s["g"])("", !0),
                      o.hasSocialType("telegram")
                        ? (Object(s["B"])(),
                          Object(s["h"])("li", Ub, [
                            Object(s["l"])(
                              r,
                              { url: o.getSocialType("telegram").url },
                              null,
                              8,
                              ["url"]
                            ),
                          ]))
                        : Object(s["g"])("", !0),
                      o.hasSocialType("magic-eden")
                        ? (Object(s["B"])(),
                          Object(s["h"])("li", Nb, [
                            Object(s["l"])(
                              l,
                              { url: o.getSocialType("magic-eden").url },
                              null,
                              8,
                              ["url"]
                            ),
                          ]))
                        : Object(s["g"])("", !0),
                      o.hasSocialType("twitter")
                        ? (Object(s["B"])(),
                          Object(s["h"])("li", Rb, [
                            Object(s["l"])(
                              d,
                              { url: o.getSocialType("twitter").url },
                              null,
                              8,
                              ["url"]
                            ),
                          ]))
                        : Object(s["g"])("", !0),
                      o.hasSocialType("twitter")
                        ? (Object(s["B"])(),
                          Object(s["h"])("li", Wb, [
                            Object(s["l"])(
                              d,
                              { url: o.getSocialType("twitter").url },
                              null,
                              8,
                              ["url"]
                            ),
                          ]))
                        : Object(s["g"])("", !0),
                      o.hasSocialType("soundcloud")
                        ? (Object(s["B"])(),
                          Object(s["h"])("li", Fb, [
                            Object(s["l"])(
                              b,
                              { url: o.getSocialType("soundcloud").url },
                              null,
                              8,
                              ["url"]
                            ),
                          ]))
                        : Object(s["g"])("", !0),
                    ]))
                  : Object(s["g"])("", !0),
              ]))
            : Object(s["g"])("", !0),
        ])
      );
    }
    var zb = {
      name: "GalleryItem",
      components: {
        SocialSoundCloud: hd,
        SocialTwitter: Pl,
        SocialMagicEden: ed,
        SocialTelegram: Rl,
        SocialDiscord: Gl,
      },
      props: {
        image: String,
        text: String,
        description: { type: String, default: "", required: !1 },
        socials: { type: Array, default: () => [], required: !1 },
        hasHover: { type: Boolean, default: !1, required: !1 },
      },
      methods: {
        hasSocialType(e) {
          return this.socials.some((t) => t.type === e);
        },
        getSocialType(e) {
          return this.socials.find((t) => t.type === e);
        },
      },
    };
    i("4d8b");
    const Hb = c()(zb, [
      ["render", qb],
      ["__scopeId", "data-v-a5882d24"],
    ]);
    var Vb = Hb;
    const Gb = (e) => (
        Object(s["E"])("data-v-b37ba68a"), (e = e()), Object(s["C"])(), e
      ),
      Yb = { class: "filter-item" },
      Zb = { class: "label" },
      Kb = Gb(() =>
        Object(s["i"])(
          "div",
          { class: "arrow" },
          [
            Object(s["i"])("svg", { class: "ico" }, [
              Object(s["i"])("use", { "xlink:href": "#ico-arrow" }),
            ]),
          ],
          -1
        )
      ),
      Qb = ["onClick"],
      Jb = { key: 0, class: "ico" },
      Xb = Gb(() =>
        Object(s["i"])("use", { "xlink:href": "#ico-cross" }, null, -1)
      ),
      eu = [Xb],
      tu = { class: "option-value" },
      iu = { key: 0, class: "option", style: { cursor: "default" } };
    function su(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("div", Yb, [
          Object(s["i"])(
            "div",
            {
              class: Object(s["u"])([
                "value",
                { open: i.isOpen, selected: i.selected.length > 0 },
              ]),
              onClick:
                t[0] ||
                (t[0] = Object(s["S"])(
                  (t) => e.$emit("open"),
                  ["prevent", "stop"]
                )),
            },
            [Object(s["i"])("div", Zb, Object(s["M"])(o.labelSelected), 1), Kb],
            2
          ),
          Object(s["i"])(
            "div",
            {
              class: Object(s["u"])([
                "options scroll-style",
                { open: i.isOpen },
              ]),
            },
            [
              (Object(s["B"])(!0),
              Object(s["h"])(
                s["a"],
                null,
                Object(s["H"])(
                  i.options,
                  (t) => (
                    Object(s["B"])(),
                    Object(s["h"])(
                      "div",
                      {
                        key: t.value,
                        class: "option",
                        onClick: Object(s["S"])(
                          (i) => e.$emit("select", t),
                          ["prevent", "stop"]
                        ),
                      },
                      [
                        Object(s["i"])(
                          "div",
                          {
                            class: Object(s["u"])([
                              "checkbox",
                              { active: o.isSelected(t) },
                            ]),
                          },
                          [
                            o.isSelected(t)
                              ? (Object(s["B"])(),
                                Object(s["h"])("svg", Jb, eu))
                              : Object(s["g"])("", !0),
                          ],
                          2
                        ),
                        Object(s["i"])("div", tu, [
                          Object(s["k"])(Object(s["M"])(t.label) + " ", 1),
                          Object(s["i"])(
                            "span",
                            null,
                            Object(s["M"])(t.count),
                            1
                          ),
                        ]),
                      ],
                      8,
                      Qb
                    )
                  )
                ),
                128
              )),
              0 === i.options.length
                ? (Object(s["B"])(),
                  Object(s["h"])("div", iu, "No filters match"))
                : Object(s["g"])("", !0),
            ],
            2
          ),
        ])
      );
    }
    var nu = {
      name: "GalleryFilterItem",
      props: {
        options: { type: Array, default: () => [] },
        label: String,
        isOpen: Boolean,
        selected: { type: Array, default: () => [] },
      },
      data: () => ({ open: !1 }),
      computed: {
        labelSelected() {
          return this.selected.length
            ? 1 === this.selected.length
              ? this.label + ": " + this.selected[0].label
              : this.label + ": " + this.selected.length + " filters"
            : this.label;
        },
      },
      methods: {
        isSelected(e) {
          return this.selected.some((t) => t.value === e.value);
        },
      },
    };
    i("1adf");
    const au = c()(nu, [
      ["render", su],
      ["__scopeId", "data-v-b37ba68a"],
    ]);
    var ou = au;
    const cu = (e) => (
        Object(s["E"])("data-v-7fbc20bb"), (e = e()), Object(s["C"])(), e
      ),
      ru = { class: "content-header" },
      lu = { class: "title" },
      du = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-cross" })],
          -1
        )
      ),
      bu = { class: "row" },
      uu = { class: "scrollable" },
      pu = { class: "inscription-id", style: { "margin-bottom": "10px" } },
      hu = { class: "links" },
      mu = ["href"],
      Ou = ["href"],
      ju = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-magicEden" })],
          -1
        )
      ),
      gu = [ju],
      vu = { class: "attributes" },
      fu = { class: "trait" },
      yu = { class: "value" },
      wu = { class: "image" },
      _u = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-download" })],
          -1
        )
      ),
      ku = [_u],
      Cu = ["href", "download"],
      Iu = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-download" })],
          -1
        )
      ),
      Su = { class: "sub-text" },
      Au = ["href", "download"],
      Mu = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-download" })],
          -1
        )
      ),
      xu = { class: "sub-text" },
      Tu = ["href", "download"],
      Bu = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-download" })],
          -1
        )
      ),
      Pu = { class: "sub-text" },
      Lu = ["href", "download"],
      $u = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-download" })],
          -1
        )
      ),
      Eu = { class: "sub-text" },
      Du = ["href", "download"],
      Uu = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-download" })],
          -1
        )
      ),
      Nu = { class: "sub-text" },
      Ru = ["download"],
      Wu = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-download" })],
          -1
        )
      ),
      Fu = { class: "sub-text" },
      qu = { key: 3, class: "items-empty", style: { "padding-top": "10px" } },
      zu = {
        class: "title",
        style: {
          "font-size": "inherit",
          "line-height": "24px",
          "margin-bottom": "unset",
        },
      },
      Hu = cu(() => Object(s["i"])("hr", { class: "download-hr" }, null, -1)),
      Vu = ["href", "download", "onClick"],
      Gu = cu(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-download" })],
          -1
        )
      ),
      Yu = { class: "sub-text" },
      Zu = ["src"],
      Ku = { class: "poses" },
      Qu = { class: "poses-wrapper scroll-style" },
      Ju = ["src"],
      Xu = ["onClick"],
      ep = ["src"];
    function tp(e, t, i, n, a, o) {
      var c, r, l;
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "div",
          {
            id: "gallery-detail",
            onClick:
              t[9] ||
              (t[9] = Object(s["S"])(
                (...e) => o.close && o.close(...e),
                ["prevent", "stop"]
              )),
            class: Object(s["u"])({ open: e.open }),
          },
          [
            Object(s["i"])(
              "div",
              {
                class: "content",
                onClick:
                  t[8] ||
                  (t[8] = Object(s["S"])(
                    (t) => (e.downloadOpen = !1),
                    ["stop"]
                  )),
              },
              [
                Object(s["i"])("div", ru, [
                  Object(s["i"])("div", lu, [
                    Object(s["i"])(
                      "h2",
                      null,
                      "AILU #" +
                        Object(s["M"])(
                          null === (c = i.item) || void 0 === c
                            ? void 0
                            : c.tokenId
                        ),
                      1
                    ),
                  ]),
                  Object(s["i"])("div", null, [
                    Object(s["i"])(
                      "div",
                      {
                        class: "btn btn-secondary",
                        onClick:
                          t[0] ||
                          (t[0] = Object(s["S"])(
                            (...e) => o.close && o.close(...e),
                            ["prevent", "stop"]
                          )),
                      },
                      [Object(s["k"])(" Close "), du]
                    ),
                  ]),
                ]),
                Object(s["i"])("div", bu, [
                  Object(s["i"])(
                    "div",
                    {
                      class: Object(s["u"])(["left", { hasPoses: o.hasPoses }]),
                    },
                    [
                      Object(s["i"])("div", uu, [
                        Object(s["i"])("div", pu, [
                          Object(s["k"])(
                            " Inscription ID: " +
                              Object(s["M"])(o.inscriptionId) +
                              " ",
                            1
                          ),
                          Object(s["i"])("div", hu, [
                            Object(s["i"])(
                              "a",
                              {
                                href:
                                  "https://ordinals.com/inscription/" +
                                  i.item.inscriptionId,
                                target: "_blank",
                                title: "Ordinals.com",
                              },
                              "◉",
                              8,
                              mu
                            ),
                            Object(s["i"])(
                              "a",
                              {
                                href:
                                  "https://magiceden.io/ordinals/item-details/" +
                                  i.item.inscriptionId,
                                title: "Magic Eden",
                                target: "_blank",
                              },
                              gu,
                              8,
                              Ou
                            ),
                          ]),
                        ]),
                        Object(s["i"])("div", vu, [
                          (Object(s["B"])(!0),
                          Object(s["h"])(
                            s["a"],
                            null,
                            Object(s["H"])(
                              null === (r = i.item) || void 0 === r
                                ? void 0
                                : r.attributes,
                              (e) => (
                                Object(s["B"])(),
                                Object(s["h"])(
                                  "div",
                                  { key: e.trait_type, class: "attribute" },
                                  [
                                    Object(s["i"])(
                                      "div",
                                      fu,
                                      Object(s["M"])(e.trait_type),
                                      1
                                    ),
                                    Object(s["i"])(
                                      "div",
                                      yu,
                                      Object(s["M"])(e.value),
                                      1
                                    ),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]),
                    ],
                    2
                  ),
                  Object(s["i"])(
                    "div",
                    {
                      class: Object(s["u"])([
                        "right",
                        { hasPoses: o.hasPoses },
                      ]),
                    },
                    [
                      Object(s["i"])("div", wu, [
                        Object(s["i"])(
                          "a",
                          {
                            class: "btn-download",
                            onClick:
                              t[1] ||
                              (t[1] = Object(s["S"])(
                                (t) => (e.downloadOpen = !e.downloadOpen),
                                ["prevent", "stop"]
                              )),
                            title: "Download files",
                          },
                          ku
                        ),
                        Object(s["i"])(
                          "div",
                          {
                            class: Object(s["u"])([
                              "download scroll-style",
                              { downloadOpen: e.downloadOpen },
                            ]),
                          },
                          [
                            Object(s["i"])(
                              "a",
                              {
                                class: "btn-sub",
                                href: o.urlPFP,
                                target: "_blank",
                                download: i.item.tokenId + "_fb",
                                onClick:
                                  t[2] ||
                                  (t[2] = Object(s["S"])(
                                    (e) =>
                                      o.clickedDownload(
                                        o.urlPFP,
                                        i.item.tokenId + "_pfp.png"
                                      ),
                                    ["prevent", "stop", "exact"]
                                  )),
                              },
                              [
                                Iu,
                                Object(s["i"])(
                                  "span",
                                  null,
                                  Object(s["M"])(e.$t("downloadmodule.ordpfp")),
                                  1
                                ),
                                Object(s["i"])(
                                  "span",
                                  Su,
                                  Object(s["M"])(e.$t("downloadmodule.png")),
                                  1
                                ),
                              ],
                              8,
                              Cu
                            ),
                            Object(s["i"])(
                              "a",
                              {
                                class: "btn-sub",
                                href: o.urlFB,
                                target: "_blank",
                                download: i.item.tokenId + "_fb",
                                onClick:
                                  t[3] ||
                                  (t[3] = Object(s["S"])(
                                    (e) =>
                                      o.clickedDownload(
                                        o.urlFB,
                                        i.item.tokenId + "_fb.webp"
                                      ),
                                    ["prevent", "stop", "exact"]
                                  )),
                              },
                              [
                                Mu,
                                Object(s["i"])(
                                  "span",
                                  null,
                                  Object(s["M"])(
                                    e.$t("downloadmodule.ordfullbody")
                                  ),
                                  1
                                ),
                                Object(s["i"])(
                                  "span",
                                  xu,
                                  Object(s["M"])(e.$t("downloadmodule.png")),
                                  1
                                ),
                              ],
                              8,
                              Au
                            ),
                            Object(s["i"])(
                              "a",
                              {
                                class: "btn-sub",
                                href: o.urlNoBG,
                                target: "_blank",
                                download: i.item.tokenId + "_nobg",
                                onClick:
                                  t[4] ||
                                  (t[4] = Object(s["S"])(
                                    (e) =>
                                      o.clickedDownload(
                                        o.urlNoBG,
                                        i.item.tokenId + "_nobg.png"
                                      ),
                                    ["prevent", "stop", "exact"]
                                  )),
                              },
                              [
                                Bu,
                                Object(s["i"])(
                                  "span",
                                  null,
                                  Object(s["M"])(
                                    e.$t("downloadmodule.ordnobg")
                                  ),
                                  1
                                ),
                                Object(s["i"])(
                                  "span",
                                  Pu,
                                  Object(s["M"])(e.$t("downloadmodule.png")),
                                  1
                                ),
                              ],
                              8,
                              Tu
                            ),
                            o.isMyToken
                              ? (Object(s["B"])(),
                                Object(s["h"])(
                                  "a",
                                  {
                                    key: 0,
                                    class: "btn-sub",
                                    href: o.urlZip,
                                    target: "_blank",
                                    download: i.item.tokenId + "_glb",
                                  },
                                  [
                                    $u,
                                    Object(s["i"])(
                                      "span",
                                      null,
                                      Object(s["M"])(
                                        e.$t("downloadmodule.zip3d")
                                      ),
                                      1
                                    ),
                                    Object(s["i"])(
                                      "span",
                                      Eu,
                                      Object(s["M"])(
                                        e.$t("downloadmodule.zip-file")
                                      ),
                                      1
                                    ),
                                  ],
                                  8,
                                  Lu
                                ))
                              : Object(s["g"])("", !0),
                            e.currentPose
                              ? (Object(s["B"])(),
                                Object(s["h"])(
                                  "a",
                                  {
                                    key: 1,
                                    class: "btn-sub",
                                    href: o.urlPose(e.currentPose),
                                    target: "_blank",
                                    download:
                                      i.item.tokenId + "_" + e.currentPose,
                                    onClick:
                                      t[5] ||
                                      (t[5] = Object(s["S"])(
                                        (t) =>
                                          o.clickedDownload(
                                            o.urlPose(e.currentPose),
                                            i.item.tokenId +
                                              "_" +
                                              e.currentPose +
                                              ".webp"
                                          ),
                                        ["prevent", "stop", "exact"]
                                      )),
                                  },
                                  [
                                    Uu,
                                    Object(s["i"])(
                                      "span",
                                      null,
                                      "Current " +
                                        Object(s["M"])(
                                          e.$t("downloadmodule.currentPose")
                                        ),
                                      1
                                    ),
                                    Object(s["i"])(
                                      "span",
                                      Nu,
                                      Object(s["M"])(
                                        e.$t("downloadmodule.png")
                                      ),
                                      1
                                    ),
                                  ],
                                  8,
                                  Du
                                ))
                              : Object(s["g"])("", !0),
                            e.loading
                              ? (Object(s["B"])(),
                                Object(s["h"])("div", qu, [
                                  Object(s["i"])(
                                    "h2",
                                    zu,
                                    "Zipping " +
                                      Object(s["M"])(e.loadingFiles) +
                                      " files" +
                                      Object(s["M"])(e.loadingDots),
                                    1
                                  ),
                                ]))
                              : (Object(s["B"])(),
                                Object(s["h"])(
                                  "a",
                                  {
                                    key: 2,
                                    class: "btn-sub",
                                    href: "#",
                                    download: i.item.tokenId + "_fb",
                                    onClick:
                                      t[6] ||
                                      (t[6] = Object(s["S"])(
                                        (t) =>
                                          o.clickedDownloadZip(
                                            e.poses,
                                            i.item.tokenId +
                                              "_" +
                                              e.pose +
                                              ".webp"
                                          ),
                                        ["prevent", "stop", "exact"]
                                      )),
                                  },
                                  [
                                    Wu,
                                    Object(s["i"])(
                                      "span",
                                      null,
                                      Object(s["M"])(
                                        e.$t("downloadmodule.zipPicture")
                                      ),
                                      1
                                    ),
                                    Object(s["i"])(
                                      "span",
                                      Fu,
                                      Object(s["M"])(
                                        e.$t("downloadmodule.zip-file")
                                      ),
                                      1
                                    ),
                                  ],
                                  8,
                                  Ru
                                )),
                            Hu,
                            (Object(s["B"])(!0),
                            Object(s["h"])(
                              s["a"],
                              null,
                              Object(s["H"])(
                                e.poses,
                                (t) => (
                                  Object(s["B"])(),
                                  Object(s["h"])(
                                    "a",
                                    {
                                      class: "btn-sub",
                                      href: o.urlPose(t),
                                      target: "_blank",
                                      download:
                                        i.item.tokenId + "_" + e.currentPose,
                                      onClick: Object(s["S"])(
                                        (e) =>
                                          o.clickedDownload(
                                            o.urlPose(t),
                                            i.item.tokenId + "_" + t + ".webp"
                                          ),
                                        ["prevent", "stop", "exact"]
                                      ),
                                      key: t,
                                    },
                                    [
                                      Gu,
                                      Object(s["i"])(
                                        "span",
                                        null,
                                        Object(s["M"])(t[0].toUpperCase()) +
                                          Object(s["M"])(t.slice(1)) +
                                          " " +
                                          Object(s["M"])(
                                            e.$t("downloadmodule.currentPose")
                                          ),
                                        1
                                      ),
                                      Object(s["i"])(
                                        "span",
                                        Yu,
                                        Object(s["M"])(
                                          e.$t("downloadmodule.png")
                                        ),
                                        1
                                      ),
                                    ],
                                    8,
                                    Vu
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                        Object(s["i"])(
                          "img",
                          {
                            src: o.currentImageUrl,
                            alt: "",
                            class: Object(s["u"])("bg-" + o.background),
                          },
                          null,
                          10,
                          Zu
                        ),
                      ]),
                    ],
                    2
                  ),
                  Object(s["i"])("div", Ku, [
                    Object(s["i"])("div", Qu, [
                      Object(s["i"])(
                        "div",
                        {
                          class: Object(s["u"])([
                            "thumbnail",
                            { active: null === e.currentPose },
                          ]),
                          onClick:
                            t[7] || (t[7] = (t) => (e.currentPose = null)),
                        },
                        [
                          Object(s["i"])(
                            "img",
                            {
                              src:
                                "https://delivery.endangeredlabs.io/download/public/fb/" +
                                (null === (l = i.item) || void 0 === l
                                  ? void 0
                                  : l.tokenId) +
                                ".webp",
                              alt: "",
                              class: Object(s["u"])("bg-" + o.background),
                            },
                            null,
                            10,
                            Ju
                          ),
                        ],
                        2
                      ),
                      (Object(s["B"])(!0),
                      Object(s["h"])(
                        s["a"],
                        null,
                        Object(s["H"])(o.posesFiltered, (t) => {
                          var n;
                          return (
                            Object(s["B"])(),
                            Object(s["h"])(
                              "div",
                              {
                                class: Object(s["u"])([
                                  "thumbnail",
                                  { active: e.currentPose === t },
                                ]),
                                key: t,
                                onClick: (i) => (e.currentPose = t),
                              },
                              [
                                Object(s["i"])(
                                  "img",
                                  {
                                    src:
                                      "https://delivery.endangeredlabs.io/download/public/poses/" +
                                      t +
                                      "/" +
                                      (null === (n = i.item) || void 0 === n
                                        ? void 0
                                        : n.tokenId) +
                                      ".webp",
                                    alt: "",
                                    class: Object(s["u"])("bg-" + o.background),
                                  },
                                  null,
                                  10,
                                  ep
                                ),
                              ],
                              10,
                              Xu
                            )
                          );
                        }),
                        128
                      )),
                    ]),
                  ]),
                ]),
              ]
            ),
          ],
          2
        )
      );
    }
    var ip = i("c4e3"),
      sp = i.n(ip),
      np = {
        name: "GalleryDetail",
        props: {
          item: {
            type: Object,
            default: () => ({ tokenId: "", attributes: [] }),
          },
          myTokenIds: { type: [Array, null], default: null },
        },
        data: () => ({
          open: !1,
          downloadOpen: !1,
          delivery: "https://delivery.endangeredlabs.io/download/",
          poses: [],
          currentPose: null,
          loading: !1,
          loadingFiles: 0,
          loadingDots: "",
          currentDotIndex: 0,
        }),
        computed: {
          hasPoses() {
            return !0;
          },
          inscriptionId() {
            return (
              this.item.inscriptionId.slice(0, 6) +
              "..." +
              this.item.inscriptionId.slice(
                this.item.inscriptionId.length - 6,
                this.item.inscriptionId.length
              )
            );
          },
          posesFiltered() {
            const e = this.item.attributes
              .find((e) => "Personality" === e.trait_type)
              .value.toLowerCase();
            return this.poses.filter((t) => t !== e);
          },
          currentImageUrl() {
            var e, t;
            return this.currentPose
              ? "https://delivery.endangeredlabs.io/download/public/poses_png/" +
                  this.currentPose +
                  "/" +
                  (null === (e = this.item) || void 0 === e
                    ? void 0
                    : e.tokenId) +
                  ".png"
              : "https://delivery.endangeredlabs.io/download/public/fb/" +
                  (null === (t = this.item) || void 0 === t
                    ? void 0
                    : t.tokenId) +
                  ".webp";
          },
          urlZip() {
            if (!this.isMyToken) return "";
            const e = this.myTokenIds.find(
              (e) => e.tokenId === Number(this.item.tokenId)
            );
            return e
              ? this.delivery + "zip/" + this.toUrl(e.id + "_ZIP.zip")
              : "";
          },
          urlModelT() {
            if (!this.isMyToken) return "";
            const e = this.myTokenIds.find(
              (e) => e.tokenId === Number(this.item.tokenId)
            );
            return e
              ? this.delivery + "model-T/" + this.toUrl(e.tokenId + "_T.glb")
              : "";
          },
          urlVRM() {
            if (!this.isMyToken) return "";
            const e = this.myTokenIds.find(
              (e) => e.tokenId === Number(this.item.tokenId)
            );
            return e
              ? this.delivery + "vrm/" + this.toUrl(e.tokenId + "_VRM.vrm")
              : "";
          },
          urlFB() {
            return this.delivery + "/public/fb/" + this.item.tokenId + ".webp";
          },
          urlCurrentPose() {
            return (
              this.delivery +
              "/public/poses_png/" +
              this.currentPose +
              "/" +
              this.item.tokenId +
              ".png"
            );
          },
          urlPFP() {
            return this.delivery + "pfp/" + this.item.download.pfp;
          },
          urlNoBG() {
            return this.delivery + "nobg/" + this.item.download.nobg;
          },
          background() {
            return this.item.attributes
              .find((e) => "Background" === e.trait_type)
              .value.toLowerCase();
          },
          isMyToken() {
            return (
              !(!this.myTokenIds || this.myTokenIds.length <= 0) &&
              this.myTokenIds
                .map((e) => e.tokenId)
                .includes(Number(this.item.tokenId))
            );
          },
        },
        async mounted() {
          const e = await Rn.get(
            "https://delivery.endangeredlabs.io/download/public/poses.json"
          );
          e.error() || (this.poses = e.data()),
            await this.$nextTick(),
            setTimeout(() => {
              this.open = !0;
            }, 100);
        },
        methods: {
          close() {
            this.$emit("closing"),
              (this.open = !1),
              setTimeout(() => {
                this.$emit("close");
              }, 500);
          },
          toUrl(e) {
            const t = e.split(".")[1],
              i = vl(e),
              s = i.substring(8, 16).toUpperCase();
            return s + "." + t;
          },
          async clickedDownload(e, t) {
            try {
              const i = await fetch(e),
                s = await i.blob(),
                n = await URL.createObjectURL(s),
                a = document.createElement("a");
              (a.href = n),
                (a.download = t),
                document.body.appendChild(a),
                a.click(),
                document.body.removeChild(a);
            } catch (i) {
              console.log({ err: i });
            }
          },
          animateLoading() {
            const e = [".", "..", "..."];
            return setInterval(() => {
              (this.currentDotIndex = (this.currentDotIndex + 1) % e.length),
                (this.loadingDots = e[this.currentDotIndex]);
            }, 500);
          },
          async clickedDownloadZip(e, t) {
            try {
              const t = [
                  { url: this.urlPFP, name: this.item.tokenId + "-pfp.png" },
                  {
                    url: this.urlFB,
                    name: this.item.tokenId + "-fullbody.webp",
                  },
                  {
                    url: this.urlNoBG,
                    name: this.item.tokenId + "-nobackground.png",
                  },
                ],
                s = this.animateLoading();
              (this.loading = !0), (this.loadingFiles = t.length + e.length);
              var i = new sp.a();
              for (const e of t) {
                const t = await fetch(e.url).then((e) => e.blob());
                i.file(e.name, t);
              }
              const n = i.folder("poses");
              for (const i of e) {
                const e = this.urlPose(i),
                  t = await fetch(e).then((e) => e.blob());
                n.file(i + ".png", t);
              }
              const a = await i.generateAsync({
                  type: "blob",
                  streamFiles: !0,
                }),
                o = document.createElement("a");
              (o.href = window.URL.createObjectURL(a)),
                (o.download = this.item.tokenId + "-poses.zip"),
                o.click(),
                clearInterval(s),
                (this.loading = !1),
                (this.loadingFiles = 0);
            } catch (s) {
              console.log({ err: s });
            }
          },
          urlPose(e) {
            return (
              this.delivery +
              "/public/poses_png/" +
              e +
              "/" +
              this.item.tokenId +
              ".png"
            );
          },
        },
      };
    i("2184");
    const ap = c()(np, [
      ["render", tp],
      ["__scopeId", "data-v-7fbc20bb"],
    ]);
    var op = ap;
    const cp = (e) => (
        Object(s["E"])("data-v-3b17a450"), (e = e()), Object(s["C"])(), e
      ),
      rp = { class: "wallet-connect" },
      lp = { class: "text" },
      dp = { key: 0, class: "ico" },
      bp = cp(() =>
        Object(s["i"])("use", { "xlink:href": "#ico-cross" }, null, -1)
      ),
      up = [bp],
      pp = { key: 0, class: "sub-text" },
      hp = cp(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-wallet" })],
          -1
        )
      ),
      mp = { key: 1, class: "sub-text" },
      Op = { key: 2, class: "sub-text" },
      jp = {
        class: "btc-mint__container-wrapper",
        ref: "btc-mint__container-wrapper",
      },
      gp = { class: "sub-title" };
    function vp(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("div", rp, [
          Object(s["i"])(
            "div",
            {
              class: Object(s["u"])([
                "btn my-ailu",
                { active: null !== i.myTokenIds || i.connectingWallet },
              ]),
              onClick:
                t[1] ||
                (t[1] = Object(s["S"])(
                  (...e) => o.onConnectionOpen && o.onConnectionOpen(...e),
                  ["stop"]
                )),
            },
            [
              Object(s["i"])("div", lp, [
                Object(s["i"])(
                  "div",
                  {
                    class: Object(s["u"])([
                      "checkbox",
                      { active: null !== i.myTokenIds },
                    ]),
                  },
                  [
                    null !== i.myTokenIds
                      ? (Object(s["B"])(), Object(s["h"])("svg", dp, up))
                      : Object(s["g"])("", !0),
                  ],
                  2
                ),
                Object(s["k"])(" My AILUs "),
              ]),
              e.walletConnected
                ? Object(s["g"])("", !0)
                : (Object(s["B"])(),
                  Object(s["h"])("div", pp, [
                    hp,
                    Object(s["k"])(" Not Connected "),
                  ])),
              e.orderLoading
                ? (Object(s["B"])(), Object(s["h"])("div", mp, "Loading..."))
                : e.walletConnected
                ? (Object(s["B"])(),
                  Object(s["h"])("div", Op, [
                    Object(s["i"])(
                      "a",
                      {
                        onClick:
                          t[0] ||
                          (t[0] = Object(s["S"])(
                            (...e) =>
                              o.disconnectUserWalletSession &&
                              o.disconnectUserWalletSession(...e),
                            ["prevent", "stop"]
                          )),
                      },
                      " Disconnect "
                    ),
                  ]))
                : Object(s["g"])("", !0),
            ],
            2
          ),
          Object(s["i"])(
            "div",
            {
              class: Object(s["u"])([
                "wallet-connect-popup",
                { open: i.connectingWallet },
              ]),
              onClick:
                t[7] ||
                (t[7] = Object(s["S"])(
                  (...t) => e.close && e.close(...t),
                  ["prevent", "stop"]
                )),
              ref: "btc-mint__connect",
            },
            [
              Object(s["i"])(
                "div",
                jp,
                [
                  Object(s["i"])("div", gp, [
                    Object(s["i"])(
                      "span",
                      null,
                      Object(s["M"])(e.$t("connect.connect")),
                      1
                    ),
                  ]),
                  Object(s["i"])(
                    "div",
                    {
                      class: "option",
                      onClick:
                        t[2] ||
                        (t[2] = (...e) =>
                          o.connectUserWalletSessionXVerse &&
                          o.connectUserWalletSessionXVerse(...e)),
                    },
                    [
                      Object(s["i"])(
                        "div",
                        null,
                        Object(s["M"])(e.$t("connect.xverse")),
                        1
                      ),
                    ]
                  ),
                  Object(s["i"])(
                    "div",
                    {
                      class: "option",
                      onClick:
                        t[3] ||
                        (t[3] = (...e) =>
                          o.connectUserWalletSessionUnisat &&
                          o.connectUserWalletSessionUnisat(...e)),
                    },
                    [
                      Object(s["i"])(
                        "div",
                        null,
                        Object(s["M"])(e.$t("connect.unisat")),
                        1
                      ),
                    ]
                  ),
                  Object(s["i"])(
                    "div",
                    {
                      class: "option",
                      onClick:
                        t[4] ||
                        (t[4] = (...e) =>
                          o.connectUserWalletSessionHiro &&
                          o.connectUserWalletSessionHiro(...e)),
                    },
                    [
                      Object(s["i"])(
                        "div",
                        null,
                        Object(s["M"])(e.$t("connect.hiro")),
                        1
                      ),
                    ]
                  ),
                  Object(s["i"])(
                    "div",
                    {
                      class: "option",
                      onClick:
                        t[5] ||
                        (t[5] = (...e) =>
                          o.connectUserWalletSessionPhantom &&
                          o.connectUserWalletSessionPhantom(...e)),
                    },
                    [
                      Object(s["i"])(
                        "div",
                        null,
                        Object(s["M"])(e.$t("connect.phantom")),
                        1
                      ),
                    ]
                  ),
                  Object(s["i"])(
                    "div",
                    {
                      class: "option",
                      onClick:
                        t[6] ||
                        (t[6] = (...e) =>
                          o.connectUserWalletSessionMagicEden &&
                          o.connectUserWalletSessionMagicEden(...e)),
                    },
                    [
                      Object(s["i"])(
                        "div",
                        null,
                        Object(s["M"])(e.$t("connect.magicEden")),
                        1
                      ),
                    ]
                  ),
                ],
                512
              ),
            ],
            2
          ),
        ])
      );
    }
    var fp = {
      name: "ConnectWallet",
      props: {
        myTokenIds: { type: [Array, null], default: null },
        connectingWallet: Boolean,
      },
      data: () => ({
        userOrdAddress: null,
        walletConnectedType: null,
        walletConnected: !1,
        collectionId: wo.COLLECTION_ID,
        orderLoading: !1,
        orders: [],
      }),
      mounted() {
        this.getUserWalletSession();
      },
      computed: {
        ordAddress() {
          return (
            this.userOrdAddress.slice(0, 6) +
            "..." +
            this.userOrdAddress.slice(
              this.userOrdAddress.length - 6,
              this.userOrdAddress.length
            )
          );
        },
      },
      methods: {
        setUserWalletSession(e, t) {
          console.log("setUserWalletSession", e),
            e &&
              ((this.userOrdAddress = e),
              localStorage.setItem("_btc_ordinal_address", e),
              localStorage.setItem("_btc_connected", "1"),
              t &&
                (localStorage.setItem("_btc_connected_type", t),
                (this.walletConnectedType = t)),
              (this.walletConnected = !0),
              this.$emit("closeConnection"),
              this.getOrders(this.userOrdAddress, !1));
        },
        getUserWalletSession() {
          localStorage.getItem("_btc_ordinal_address") &&
            (this.userOrdAddress = localStorage.getItem(
              "_btc_ordinal_address"
            )),
            "1" === localStorage.getItem("_btc_connected") &&
              (this.walletConnected = !0),
            localStorage.getItem("_btc_connected_type") &&
              (this.walletConnectedType = localStorage.getItem(
                "_btc_connected_type"
              )),
            "phantom" === this.walletConnectedType &&
              this.connectUserWalletSessionPhantom(),
            "unisat" === this.walletConnectedType &&
              this.connectUserWalletSessionUnisat();
        },
        async connectUserWalletSessionUnisat() {
          let e = null;
          if ("unisat" in window) {
            const t = window,
              i = t.unisat;
            i && (e = i);
          }
          if (!e)
            return void this.showNotif({
              type: "error",
              text: this.$t("mint.notifs.connectError.unisat"),
            });
          const t = this,
            i = await e.requestAccounts(),
            s = (e) => {
              const i = e[0];
              this.setUserWalletSession(i, "unisat"),
                this.showNotif({
                  type: "success",
                  text: t.$t("mint.notifs.connectSuccess.unisat"),
                });
            };
          s(i);
        },
        async connectUserWalletSessionXVerse() {
          const e = {
            payload: {
              purposes: [Ur["a"].Ordinals, Ur["a"].Payment],
              message: this.$t("mint.connectMessage"),
              network: {
                type:
                  "testnet3" === _o.envs.NETWORK_NAME
                    ? Ur["b"].Testnet
                    : Ur["b"].Mainnet,
              },
            },
            onFinish: (e) => {
              if (e.addresses && e.addresses.length > 0) {
                var t;
                const i =
                  null ===
                    (t = e.addresses.find(
                      (e) => e.purpose === Ur["a"].Ordinals
                    )) || void 0 === t
                    ? void 0
                    : t.address;
                this.setUserWalletSession(i, "xverse"),
                  this.showNotif({
                    type: "success",
                    text: this.$t("mint.notifs.connectSuccess.xverse"),
                  });
              }
            },
            onCancel: () => {},
          };
          await Object(Ur["c"])(e);
        },
        async connectUserWalletSessionPhantom() {
          let e = null;
          if ("phantom" in window) {
            var t;
            const i = window,
              s = null === (t = i.phantom) || void 0 === t ? void 0 : t.bitcoin;
            s && s.isPhantom && (e = s);
          }
          if (!e)
            return void this.showNotif({
              type: "error",
              text: this.$t("mint.notifs.connectError.phantom"),
            });
          const i = this,
            s = await e.requestAccounts();
          e.on("accountsChanged", (e) => {
            e.length > 0 ? n(e) : this.disconnectUserWalletSession();
          });
          const n = (e) => {
            var t;
            const s =
              null === (t = e.find((e) => e.purpose === Ur["a"].Ordinals)) ||
              void 0 === t
                ? void 0
                : t.address;
            this.setUserWalletSession(s, "phantom"),
              this.showNotif({
                type: "success",
                text: i.$t("mint.notifs.connectSuccess.phantom"),
              });
          };
          n(s);
        },
        async connectUserWalletSessionMagicEden() {
          const e = {
            getProvider: async () => window.BitcoinProvider,
            payload: {
              purposes: [Ur["a"].Ordinals, Ur["a"].Payment],
              message: this.$t("mint.connectMessage"),
              network: {
                type:
                  "testnet3" === _o.envs.NETWORK_NAME
                    ? Ur["b"].Testnet
                    : Ur["b"].Mainnet,
              },
            },
            onFinish: (e) => {
              if (e.addresses && e.addresses.length > 0) {
                var t;
                const i =
                  null ===
                    (t = e.addresses.find(
                      (e) => e.purpose === Ur["a"].Ordinals
                    )) || void 0 === t
                    ? void 0
                    : t.address;
                this.setUserWalletSession(i, "magicEden"),
                  this.showNotif({
                    type: "success",
                    text: this.$t("mint.notifs.connectSuccess.magicEden"),
                  });
              }
            },
            onCancel: () => {},
          };
          await Object(Ur["c"])(e);
        },
        async connectUserWalletSessionHiro() {
          if (window.btc) {
            var e, t;
            const i = await (null === (e = window.btc) || void 0 === e
                ? void 0
                : e.request("getAddresses")),
              s =
                null === i ||
                void 0 === i ||
                null === (t = i.result) ||
                void 0 === t ||
                null === (t = t.addresses) ||
                void 0 === t ||
                null ===
                  (t = t.find(
                    (e) =>
                      "p2tr" === (null === e || void 0 === e ? void 0 : e.type)
                  )) ||
                void 0 === t
                  ? void 0
                  : t.address;
            this.setUserWalletSession(s, "hiro"),
              this.showNotif({
                type: "success",
                text: this.$t("mint.notifs.connectSuccess.hiro"),
              });
          }
        },
        disconnectUserWalletSession() {
          if (this.walletConnected)
            return (
              (this.walletConnected = !1),
              localStorage.removeItem("_btc_ordinal_address"),
              localStorage.removeItem("_btc_cardinal_address"),
              localStorage.removeItem("_btc_connected"),
              localStorage.removeItem("_btc_connected_type"),
              (this.orders = []),
              this.$emit("fetch", null)
            );
        },
        async onConnectionOpen() {
          if (this.walletConnected)
            return null !== this.myTokenIds
              ? this.$emit("fetch", null)
              : void (await this.getOrders(this.userOrdAddress));
          this.connectingWallet
            ? this.$emit("closeConnection")
            : this.$emit("openConnection");
        },
        showNotif() {},
        async getOrders(e, t = !0) {
          if (!e) return;
          Rn.init(wo.BACKEND_URI), (this.orderLoading = !0);
          const i = await Rn.get(
            "https://api.miinded.com/v1/ordinal/6a11ca99-4a02-4f90-b8fc-e29976186294/tokens/" +
              e
          );
          if (i.error())
            return (
              this.showNotif({
                type: "error",
                text: this.$t("mint.notifs.errors.orders"),
              }),
              (this.orderLoading = !1),
              !1
            );
          this.orders = i.data().map((e) => new go(e));
          const s = this.orders
            .map((e) =>
              e.nftsInscriptions.map((e) => ({ tokenId: e.itemId, id: e.id }))
            )
            .flat();
          return (
            s.sort(),
            this.$emit("fetch", s),
            this.$emit("closeFilter"),
            (this.orderLoading = !1),
            !0
          );
        },
      },
    };
    i("2dfe");
    const yp = c()(fp, [
      ["render", vp],
      ["__scopeId", "data-v-3b17a450"],
    ]);
    var wp = yp;
    const _p = (e) => (
        Object(s["E"])("data-v-c63dd1a6"), (e = e()), Object(s["C"])(), e
      ),
      kp = { key: 0, class: "ico" },
      Cp = _p(() =>
        Object(s["i"])("use", { "xlink:href": "#ico-cross" }, null, -1)
      ),
      Ip = [Cp];
    function Sp(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "div",
          { class: Object(s["u"])(["btn btn-check", { active: i.active }]) },
          [
            Object(s["i"])(
              "div",
              { class: Object(s["u"])(["checkbox", { active: i.active }]) },
              [
                i.active
                  ? (Object(s["B"])(), Object(s["h"])("svg", kp, Ip))
                  : Object(s["g"])("", !0),
              ],
              2
            ),
            Object(s["k"])(" " + Object(s["M"])(i.label), 1),
          ],
          2
        )
      );
    }
    var Ap = {
      name: "GalleryCheckButton",
      props: { active: Boolean, label: String },
    };
    i("a428");
    const Mp = c()(Ap, [
      ["render", Sp],
      ["__scopeId", "data-v-c63dd1a6"],
    ]);
    var xp = Mp,
      Tp = {
        name: "GalleryPage",
        components: {
          GalleryCheckButton: xp,
          ConnectWallet: wp,
          GalleryDetail: op,
          GalleryFilterItem: ou,
          GalleryItem: Vb,
        },
        data: () => ({
          galleryItems: [],
          page: 0,
          itemsPerPage: 32,
          openedFilter: !1,
          openedFilterItem: "",
          connectingWallet: !1,
          filtersSelected: {},
          tokenId: null,
          myTokenIds: null,
          detailItem: null,
          activePfp: !1,
          loading: !0,
        }),
        computed: {
          items() {
            let e = [...this.galleryItems];
            return (
              this.tokenId && (e = e.filter((e) => e.tokenId === this.tokenId)),
              null !== this.myTokenIds &&
                (e = e.filter((e) =>
                  this.myTokenIds
                    .map((e) => e.tokenId)
                    .includes(Number(e.tokenId))
                )),
              this.filterItems(e, this.filtersSelected)
            );
          },
          itemPaginated() {
            return this.items.slice(
              0,
              this.page * this.itemsPerPage + this.itemsPerPage
            );
          },
          filtersLabels() {
            const e = {};
            for (const i of this.galleryItems)
              for (const t of i.attributes)
                e[t.trait_type] || (e[t.trait_type] = !0);
            const t = [];
            for (const i in e) t.push(i);
            return t.sort(), t;
          },
          filters() {
            const e = {};
            for (const i of this.galleryItems)
              for (const t of i.attributes)
                e[t.trait_type] || (e[t.trait_type] = {}),
                  e[t.trait_type][t.value] || (e[t.trait_type][t.value] = 0),
                  e[t.trait_type][t.value]++;
            const t = [];
            for (const i in e) {
              const s = [];
              for (const t in e[i])
                s.push({ label: t, value: t, count: e[i][t] });
              s.sort((e, t) => (e.value > t.value ? 1 : -1)),
                t.push({ label: i, options: s });
            }
            return t.sort((e, t) => (e.label > t.label ? 1 : -1)), t;
          },
          selectedFilterArray() {
            const e = [];
            for (const t in this.filtersSelected) {
              let i = this.filtersSelected[t].length + " filters";
              1 === this.filtersSelected[t].length &&
                (i = this.filtersSelected[t][0].label),
                e.push({ label: t, option: i });
            }
            return e;
          },
          hasFilters() {
            return Object.keys(this.filtersSelected).length > 0;
          },
        },
        watch: {
          "$route.params.ailu"() {
            const e = this.galleryItems.find(
              (e) => e.tokenId === this.$route.params.ailu
            );
            e && this.onOpenDetail(e);
          },
        },
        async mounted() {
          const e = await Rn.get(
            "https://delivery.endangeredlabs.io/download/public/metadata.json"
          );
          if (e.error()) return;
          const t = e.data(),
            i = [];
          for (const n in t) {
            const e = [];
            for (const i of t[n].attr)
              e.push({ trait_type: i[0], value: i[1] });
            i.push({
              tokenId: n,
              attributes: e,
              inscriptionId: t[n].id,
              download: {
                nobg: t[n].nobg + ".png",
                pfp: t[n].pfp + ".png",
                glb: t[n].glb + ".glb",
                vrm: t[n].vrm + ".vrm",
              },
            });
          }
          (this.galleryItems = i), (this.loading = !1);
          const s = this.galleryItems.find(
            (e) => e.tokenId === this.$route.params.ailu
          );
          s && this.onOpenDetail(s),
            (this.interval = setInterval(
              () => this.infiniteScrollStart(),
              150
            ));
        },
        beforeUnmount() {
          clearInterval(this.interval);
        },
        methods: {
          filterItems(e, t) {
            return e.filter((e) => {
              if (!Object.keys(t).length) return e;
              let i = 0;
              for (const s in t)
                for (const n of t[s])
                  if (
                    e.attributes.some(
                      (e) => e.trait_type === s && e.value === n.value
                    )
                  ) {
                    i++;
                    break;
                  }
              return i === Object.keys(t).length ? e : void 0;
            });
          },
          getFilterOptions(e) {
            const t = {},
              i = { ...this.filtersSelected };
            delete i[e];
            let s = this.filterItems(this.galleryItems, i);
            this.tokenId && (s = s.filter((e) => e.tokenId === this.tokenId)),
              null !== this.myTokenIds &&
                (s = s.filter((e) =>
                  this.myTokenIds
                    .map((e) => e.tokenId)
                    .includes(Number(e.tokenId))
                ));
            for (const a of s)
              for (const i of a.attributes)
                i.trait_type === e &&
                  (t[i.value] || (t[i.value] = 0), t[i.value]++);
            const n = [];
            for (const a in t) n.push({ label: a, value: a, count: t[a] });
            return n.sort((e, t) => (e.value > t.value ? 1 : -1)), n;
          },
          select(e, t) {
            this.filtersSelected[e] || (this.filtersSelected[e] = []),
              this.filtersSelected[e].some((e) => e.value === t.value)
                ? (this.filtersSelected[e] = this.filtersSelected[e].filter(
                    (e) => e.value !== t.value
                  ))
                : this.filtersSelected[e].push(t),
              this.filtersSelected[e].length || delete this.filtersSelected[e],
              (this.page = 0),
              window.scrollTo({ top: 0, behavior: "smooth" });
          },
          openFilterItem(e) {
            this.openedFilterItem === e
              ? (this.openedFilterItem = "")
              : (this.openedFilterItem = e),
              (this.connectingWallet = !1);
          },
          infiniteScrollStart() {
            if (this.items.length <= this.itemPaginated.length) return;
            const e = document.querySelector("#infinite-scroll"),
              t = e.getBoundingClientRect().top;
            t < window.innerHeight + 500 && this.page++;
          },
          removeFilters(e) {
            delete this.filtersSelected[e];
          },
          onCloseFilter() {
            (this.openedFilterItem = ""),
              (this.connectingWallet = !1),
              this.closePopup("openedFilter");
          },
          onOpenDetail(e) {
            (this.detailItem = e), this.limitBody();
          },
          onCloseDetail() {
            (this.detailItem = null),
              this.$router.push("/hub"),
              this.unlimitBody();
          },
          openPopup(e) {
            (this[e] = !0), this.limitBody();
          },
          closePopup(e) {
            (this[e] = !1), this.unlimitBody();
          },
          limitBody() {
            document.body.style.overflowY = "hidden";
          },
          unlimitBody() {
            document.body.style.overflow = "";
          },
          clearSearch() {
            this.tokenId = "";
          },
          clearFilters() {
            this.filtersSelected = {};
          },
          clearMyAilus() {
            this.myTokenIds = null;
          },
          onFetchMuToken(e) {
            this.myTokenIds = e;
          },
          onOpenConnexion() {
            (this.connectingWallet = !0), (this.openedFilterItem = "");
          },
          onResetClickFilter() {
            (this.openedFilterItem = ""), (this.connectingWallet = !1);
          },
        },
      };
    i("5d59");
    const Bp = c()(Tp, [
      ["render", Mb],
      ["__scopeId", "data-v-ad1e2852"],
    ]);
    var Pp = Bp;
    const Lp = (e) => (
        Object(s["E"])("data-v-67f2356f"), (e = e()), Object(s["C"])(), e
      ),
      $p = { class: "content" },
      Ep = { class: "header" },
      Dp = Lp(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-tutorial" })],
          -1
        )
      ),
      Up = { class: "content-page" },
      Np = { class: "content-header" },
      Rp = { class: "title" },
      Wp = Lp(() =>
        Object(s["i"])(
          "div",
          { class: "title-decoration", "data-sr-id": "15" },
          [
            Object(s["i"])("p", null, [
              Object(s["i"])("span", null, "Data"),
              Object(s["k"])("01001011001"),
            ]),
            Object(s["i"])("p", null, "////////"),
          ],
          -1
        )
      ),
      Fp = { class: "filters-barre" },
      qp = { class: "search" },
      zp = ["onClick"],
      Hp = { class: "content-wrapper" },
      Vp = { key: 0, class: "items-loading" },
      Gp = Lp(() => Object(s["i"])("h2", { class: "title" }, "Loading...", -1)),
      Yp = Lp(() => Object(s["i"])("div", { id: "infinite-scroll" }, null, -1)),
      Zp = [Gp, Yp],
      Kp = { key: 1, class: "items" },
      Qp = Lp(() => Object(s["i"])("div", { id: "infinite-scroll" }, null, -1)),
      Jp = { key: 2, class: "items-empty" },
      Xp = Lp(() => Object(s["i"])("h2", { class: "title" }, "No results", -1)),
      eh = Lp(() => Object(s["i"])("div", { id: "infinite-scroll" }, null, -1)),
      th = [Xp, eh];
    function ih(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("div", $p, [
          Object(s["i"])("div", Ep, [
            Object(s["i"])(
              "div",
              {
                class: "menu-mobile",
                onClick:
                  t[0] ||
                  (t[0] = Object(s["S"])(
                    (t) => e.$parent.openPopup("sidebarOpen"),
                    ["prevent", "stop"]
                  )),
              },
              [Dp, Object(s["k"])(" " + Object(s["M"])(i.label), 1)]
            ),
          ]),
          Object(s["i"])("div", Up, [
            Object(s["i"])("div", Np, [
              Object(s["i"])("div", Rp, [
                Wp,
                Object(s["i"])("h2", null, Object(s["M"])(i.label), 1),
              ]),
              Object(s["i"])("div", Fp, [
                Object(s["i"])("div", qp, [
                  (Object(s["B"])(!0),
                  Object(s["h"])(
                    s["a"],
                    null,
                    Object(s["H"])(
                      e.tags,
                      (t) => (
                        Object(s["B"])(),
                        Object(s["h"])(
                          "div",
                          {
                            class: Object(s["u"])([
                              "btn btn-toggle",
                              { active: e.currentTag === t },
                            ]),
                            key: t,
                            onClick: (e) => o.changeTag(t),
                          },
                          Object(s["M"])(t),
                          11,
                          zp
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ]),
            ]),
            Object(s["i"])("div", Hp, [
              e.fetchLoading
                ? (Object(s["B"])(), Object(s["h"])("div", Vp, Zp))
                : o.itemPaginated.length > 0
                ? (Object(s["B"])(),
                  Object(s["h"])("div", Kp, [
                    (Object(s["B"])(!0),
                    Object(s["h"])(
                      s["a"],
                      null,
                      Object(s["H"])(o.itemPaginated, (e) => {
                        var t, i;
                        return (
                          Object(s["B"])(),
                          Object(s["f"])(
                            Object(s["J"])(
                              "VIDEO" === e.articleType
                                ? "TutorialItem"
                                : "CommunityItem"
                            ),
                            Object(s["s"])(
                              { key: e.tokenId },
                              {
                                image:
                                  null !== (t = e.media) &&
                                  void 0 !== t &&
                                  t.url
                                    ? null === (i = e.media) || void 0 === i
                                      ? void 0
                                      : i.url
                                    : "VIDEO" === e.articleType
                                    ? "https://img.youtube.com/vi/" +
                                      o.videoYoutubeId(e.contentUrl) +
                                      "/maxresdefault.jpg"
                                    : "/images/site/thumbnail.jpg",
                                text: e.title,
                                description: e.content,
                                socials: e.socials,
                                hasHover: !0,
                              },
                              { onClick: (t) => o.onOpenDetail(e) }
                            ),
                            null,
                            16,
                            ["onClick"]
                          )
                        );
                      }),
                      128
                    )),
                    Qp,
                  ]))
                : (Object(s["B"])(), Object(s["h"])("div", Jp, th)),
            ]),
            e.detailItem
              ? (Object(s["B"])(),
                Object(s["f"])(
                  Object(s["J"])(
                    "VIDEO" === e.detailItem.articleType
                      ? "TutorialDetail"
                      : "CommunityDetail"
                  ),
                  {
                    key: 0,
                    item: e.detailItem,
                    onClose: o.onCloseDetail,
                    onClosing: o.unlimitBody,
                  },
                  null,
                  40,
                  ["item", "onClose", "onClosing"]
                ))
              : Object(s["g"])("", !0),
          ]),
        ])
      );
    }
    const sh = (e) => (
        Object(s["E"])("data-v-6ead073b"), (e = e()), Object(s["C"])(), e
      ),
      nh = { class: "content-header" },
      ah = { class: "title" },
      oh = { class: "close" },
      ch = sh(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-cross" })],
          -1
        )
      ),
      rh = { class: "content-wrapper" },
      lh = { class: "video" },
      dh = ["src", "title"],
      bh = ["innerHTML"],
      uh = { key: 0, class: "author" },
      ph = { key: 1, class: "row" },
      hh = { key: 0, class: "socials", id: "tutorial-socials" },
      mh = { class: "tags" },
      Oh = ["onClick"];
    function jh(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "div",
          {
            id: "gallery-detail",
            onClick:
              t[2] ||
              (t[2] = Object(s["S"])(
                (...e) => o.close && o.close(...e),
                ["prevent", "stop"]
              )),
            class: Object(s["u"])({ open: e.open }),
          },
          [
            Object(s["i"])(
              "div",
              {
                class: "content",
                onClick:
                  t[1] ||
                  (t[1] = Object(s["S"])(() => {}, ["prevent", "stop"])),
              },
              [
                Object(s["i"])("div", nh, [
                  Object(s["i"])("div", ah, [
                    Object(s["i"])("h2", null, Object(s["M"])(i.item.title), 1),
                  ]),
                  Object(s["i"])("div", oh, [
                    Object(s["i"])(
                      "div",
                      {
                        class: "btn btn-secondary",
                        onClick:
                          t[0] ||
                          (t[0] = Object(s["S"])(
                            (...e) => o.close && o.close(...e),
                            ["prevent", "stop"]
                          )),
                      },
                      [Object(s["k"])(" Close "), ch]
                    ),
                  ]),
                ]),
                Object(s["i"])("div", rh, [
                  Object(s["i"])("div", lh, [
                    Object(s["i"])(
                      "iframe",
                      {
                        src: o.videoUrl,
                        title: i.item.title,
                        allow:
                          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                        referrerpolicy: "strict-origin-when-cross-origin",
                        allowfullscreen: "",
                      },
                      null,
                      8,
                      dh
                    ),
                  ]),
                  Object(s["i"])(
                    "div",
                    { class: "description", innerHTML: i.item.content },
                    null,
                    8,
                    bh
                  ),
                  i.item.author
                    ? (Object(s["B"])(),
                      Object(s["h"])(
                        "div",
                        uh,
                        "Author: " + Object(s["M"])(i.item.author),
                        1
                      ))
                    : Object(s["g"])("", !0),
                  (i.item.socials && i.item.socials.length > 0) ||
                  (i.item.tags && i.item.tags.length > 0)
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", ph, [
                        i.item.socials && i.item.socials.length > 0
                          ? (Object(s["B"])(),
                            Object(s["h"])("div", hh, [
                              (Object(s["B"])(!0),
                              Object(s["h"])(
                                s["a"],
                                null,
                                Object(s["H"])(
                                  i.item.socials,
                                  (e) => (
                                    Object(s["B"])(),
                                    Object(s["f"])(
                                      Object(s["J"])("Social" + e.key),
                                      { url: e.value, key: e.key },
                                      null,
                                      8,
                                      ["url"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ]))
                          : Object(s["g"])("", !0),
                        Object(s["i"])("div", mh, [
                          (Object(s["B"])(!0),
                          Object(s["h"])(
                            s["a"],
                            null,
                            Object(s["H"])(
                              i.item.tags,
                              (e) => (
                                Object(s["B"])(),
                                Object(s["h"])(
                                  "div",
                                  {
                                    class: "tag",
                                    key: e,
                                    onClick: (t) => o.searchTag(e),
                                  },
                                  Object(s["M"])(e),
                                  9,
                                  Oh
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]))
                    : Object(s["g"])("", !0),
                ]),
              ]
            ),
          ],
          2
        )
      );
    }
    const gh = ["href"],
      vh = { class: "ico", style: { "margin-right": "-3px" } },
      fh = Object(s["i"])("use", { "xlink:href": "#ico-tiktok" }, null, -1),
      yh = [fh];
    function wh(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "a",
          { href: i.url, target: "_blank" },
          [(Object(s["B"])(), Object(s["h"])("svg", vh, yh))],
          8,
          gh
        )
      );
    }
    var _h = { name: "SocialTiktok", props: { url: String } };
    const kh = c()(_h, [["render", wh]]);
    var Ch = kh;
    const Ih = ["href"],
      Sh = { class: "ico", style: { "margin-right": "-3px" } },
      Ah = Object(s["i"])("use", { "xlink:href": "#ico-threads" }, null, -1),
      Mh = [Ah];
    function xh(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "a",
          { href: i.url, target: "_blank" },
          [(Object(s["B"])(), Object(s["h"])("svg", Sh, Mh))],
          8,
          Ih
        )
      );
    }
    var Th = { name: "SocialThreads", props: { url: String } };
    const Bh = c()(Th, [["render", xh]]);
    var Ph = Bh;
    const Lh = ["href"],
      $h = { class: "ico", style: { "margin-right": "-3px" } },
      Eh = Object(s["i"])("use", { "xlink:href": "#ico-website" }, null, -1),
      Dh = [Eh];
    function Uh(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "a",
          { href: i.url, target: "_blank" },
          [(Object(s["B"])(), Object(s["h"])("svg", $h, Dh))],
          8,
          Lh
        )
      );
    }
    var Nh = { name: "SocialWebsite", props: { url: String } };
    const Rh = c()(Nh, [["render", Uh]]);
    var Wh = Rh;
    const Fh = ["href"],
      qh = { class: "ico", style: { "margin-right": "-3px" } },
      zh = Object(s["i"])("use", { "xlink:href": "#ico-youtube" }, null, -1),
      Hh = [zh];
    function Vh(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "a",
          { href: i.url, target: "_blank" },
          [(Object(s["B"])(), Object(s["h"])("svg", qh, Hh))],
          8,
          Fh
        )
      );
    }
    var Gh = { name: "SocialYoutube", props: { url: String } };
    const Yh = c()(Gh, [["render", Vh]]);
    var Zh = Yh,
      Kh = {
        name: "GalleryDetail",
        components: {
          SocialTwitter: Pl,
          SocialTelegram: Rl,
          SocialDiscord: Gl,
          SocialMagicEden: ed,
          SocialInstagram: cd,
          SocialSoundCloud: hd,
          SocialTiktok: Ch,
          SocialThreads: Ph,
          SocialWebsite: Wh,
          SocialYoutube: Zh,
        },
        props: {
          item: {
            type: Object,
            default: () => ({
              articleType: "LEARN",
              content: "",
              contentUrl: "",
              socials: [],
              tags: [],
              title: "",
            }),
          },
        },
        data: () => ({ open: !1 }),
        computed: {
          videoUrl() {
            return "https://www.youtube.com/embed/" + this.videoYoutubeId;
          },
          videoYoutubeId() {
            const e =
                /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
              t = this.item.contentUrl.match(e);
            return !(!t || 11 !== t[7].length) && t[7];
          },
        },
        async mounted() {
          await this.$nextTick(),
            setTimeout(() => {
              this.open = !0;
            }, 100);
        },
        methods: {
          close() {
            this.$emit("closing"),
              (this.open = !1),
              setTimeout(() => {
                this.$emit("close");
              }, 500);
          },
          searchTag(e) {
            (this.$parent.currentTag = e), this.close();
          },
        },
      };
    i("f6df"), i("a7a3");
    const Qh = c()(Kh, [
      ["render", jh],
      ["__scopeId", "data-v-6ead073b"],
    ]);
    var Jh = Qh;
    const Xh = { class: "item" },
      em = { class: "image" },
      tm = ["src"],
      im = { class: "text" },
      sm = { key: 0, class: "over" },
      nm = { class: "description" };
    function am(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("div", Xh, [
          Object(s["i"])("div", em, [
            Object(s["i"])("img", { src: i.image, alt: "" }, null, 8, tm),
          ]),
          Object(s["i"])("div", im, Object(s["M"])(i.text), 1),
          i.hasHover
            ? (Object(s["B"])(),
              Object(s["h"])("div", sm, [
                Object(s["i"])("div", nm, Object(s["M"])(i.description), 1),
              ]))
            : Object(s["g"])("", !0),
          i.socials && i.socials.length > 0
            ? (Object(s["B"])(),
              Object(s["h"])(
                "div",
                {
                  key: 1,
                  class: "socials tutorial-socials-thumbnail",
                  onClick: t[0] || (t[0] = Object(s["S"])(() => {}, ["stop"])),
                },
                [
                  (Object(s["B"])(!0),
                  Object(s["h"])(
                    s["a"],
                    null,
                    Object(s["H"])(
                      i.socials,
                      (e) => (
                        Object(s["B"])(),
                        Object(s["f"])(
                          Object(s["J"])("Social" + e.key),
                          { url: e.value, key: e.key },
                          null,
                          8,
                          ["url"]
                        )
                      )
                    ),
                    128
                  )),
                ]
              ))
            : Object(s["g"])("", !0),
        ])
      );
    }
    var om = {
      name: "TutorialItem",
      components: {
        SocialTwitter: Pl,
        SocialMagicEden: ed,
        SocialTelegram: Rl,
        SocialDiscord: Gl,
        SocialInstagram: cd,
        SocialSoundCloud: hd,
        SocialTiktok: Ch,
        SocialThreads: Ph,
        SocialWebsite: Wh,
        SocialYoutube: Zh,
      },
      props: {
        image: String,
        text: String,
        description: { type: String, default: "", required: !1 },
        socials: { type: Array, default: () => [], required: !1 },
        hasHover: { type: Boolean, default: !1, required: !1 },
      },
      methods: {
        hasSocialType(e) {
          return this.socials.some((t) => t.key.toLowerCase() === e);
        },
        getSocialType(e) {
          return this.socials.find((t) => t.key.toLowerCase() === e);
        },
      },
    };
    i("9a2e"), i("585a");
    const cm = c()(om, [
      ["render", am],
      ["__scopeId", "data-v-361a7379"],
    ]);
    var rm = cm;
    const lm = { class: "item" },
      dm = { class: "image" },
      bm = ["src"],
      um = { class: "text" };
    function pm(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])("div", lm, [
          Object(s["i"])("div", dm, [
            i.image
              ? (Object(s["B"])(),
                Object(s["h"])(
                  "img",
                  { key: 0, src: i.image, alt: "" },
                  null,
                  8,
                  bm
                ))
              : Object(s["g"])("", !0),
          ]),
          Object(s["i"])("div", um, Object(s["M"])(i.text), 1),
          i.socials && i.socials.length > 0
            ? (Object(s["B"])(),
              Object(s["h"])(
                "div",
                {
                  key: 0,
                  class: "socials tutorial-socials-thumbnail",
                  onClick: t[0] || (t[0] = Object(s["S"])(() => {}, ["stop"])),
                },
                [
                  (Object(s["B"])(!0),
                  Object(s["h"])(
                    s["a"],
                    null,
                    Object(s["H"])(
                      i.socials,
                      (e) => (
                        Object(s["B"])(),
                        Object(s["f"])(
                          Object(s["J"])("Social" + e.key),
                          { url: e.value, key: e.key },
                          null,
                          8,
                          ["url"]
                        )
                      )
                    ),
                    128
                  )),
                ]
              ))
            : Object(s["g"])("", !0),
        ])
      );
    }
    var hm = {
      name: "CommunityItem",
      components: {
        SocialTwitter: Pl,
        SocialMagicEden: ed,
        SocialTelegram: Rl,
        SocialDiscord: Gl,
        SocialInstagram: cd,
        SocialSoundCloud: hd,
        SocialTiktok: Ch,
        SocialThreads: Ph,
        SocialWebsite: Wh,
        SocialYoutube: Zh,
      },
      props: {
        image: String,
        text: String,
        description: { type: String, default: "", required: !1 },
        socials: { type: Array, default: () => [], required: !1 },
        hasHover: { type: Boolean, default: !1, required: !1 },
      },
      methods: {
        hasSocialType(e) {
          return this.socials.some((t) => t.key.toLowerCase() === e);
        },
        getSocialType(e) {
          return this.socials.find((t) => t.key.toLowerCase() === e);
        },
      },
    };
    i("dac6"), i("b827");
    const mm = c()(hm, [
      ["render", pm],
      ["__scopeId", "data-v-366ab989"],
    ]);
    var Om = mm;
    const jm = (e) => (
        Object(s["E"])("data-v-a9665834"), (e = e()), Object(s["C"])(), e
      ),
      gm = { class: "content-header" },
      vm = { class: "title" },
      fm = { class: "close" },
      ym = jm(() =>
        Object(s["i"])(
          "svg",
          { class: "ico" },
          [Object(s["i"])("use", { "xlink:href": "#ico-cross" })],
          -1
        )
      ),
      wm = { class: "content-wrapper" },
      _m = { key: 0, class: "image" },
      km = ["src"],
      Cm = ["innerHTML"],
      Im = { key: 1, class: "author" },
      Sm = { key: 2, class: "row" },
      Am = { key: 0, class: "socials", id: "tutorial-socials" },
      Mm = { class: "tags" },
      xm = ["onClick"];
    function Tm(e, t, i, n, a, o) {
      return (
        Object(s["B"])(),
        Object(s["h"])(
          "div",
          {
            id: "gallery-detail",
            onClick:
              t[2] ||
              (t[2] = Object(s["S"])(
                (...e) => o.close && o.close(...e),
                ["prevent", "stop"]
              )),
            class: Object(s["u"])({ open: e.open }),
          },
          [
            Object(s["i"])(
              "div",
              {
                class: "content scroll-style",
                onClick:
                  t[1] ||
                  (t[1] = Object(s["S"])(() => {}, ["prevent", "stop"])),
              },
              [
                Object(s["i"])("div", gm, [
                  Object(s["i"])("div", vm, [
                    Object(s["i"])("h2", null, Object(s["M"])(i.item.title), 1),
                  ]),
                  Object(s["i"])("div", fm, [
                    Object(s["i"])(
                      "div",
                      {
                        class: "btn btn-secondary",
                        onClick:
                          t[0] ||
                          (t[0] = Object(s["S"])(
                            (...e) => o.close && o.close(...e),
                            ["prevent", "stop"]
                          )),
                      },
                      [Object(s["k"])(" Close "), ym]
                    ),
                  ]),
                ]),
                Object(s["i"])("div", wm, [
                  i.item.media
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", _m, [
                        Object(s["i"])(
                          "img",
                          { src: i.item.media.url, alt: "" },
                          null,
                          8,
                          km
                        ),
                      ]))
                    : Object(s["g"])("", !0),
                  Object(s["i"])(
                    "div",
                    { class: "description wysiwyg", innerHTML: i.item.content },
                    null,
                    8,
                    Cm
                  ),
                  i.item.author
                    ? (Object(s["B"])(),
                      Object(s["h"])(
                        "div",
                        Im,
                        "Author: " + Object(s["M"])(i.item.author),
                        1
                      ))
                    : Object(s["g"])("", !0),
                  (i.item.socials && i.item.socials.length > 0) ||
                  (i.item.tags && i.item.tags.length > 0)
                    ? (Object(s["B"])(),
                      Object(s["h"])("div", Sm, [
                        i.item.socials && i.item.socials.length > 0
                          ? (Object(s["B"])(),
                            Object(s["h"])("div", Am, [
                              (Object(s["B"])(!0),
                              Object(s["h"])(
                                s["a"],
                                null,
                                Object(s["H"])(
                                  i.item.socials,
                                  (e) => (
                                    Object(s["B"])(),
                                    Object(s["f"])(
                                      Object(s["J"])("Social" + e.key),
                                      { url: e.value, key: e.key },
                                      null,
                                      8,
                                      ["url"]
                                    )
                                  )
                                ),
                                128
                              )),
                            ]))
                          : Object(s["g"])("", !0),
                        Object(s["i"])("div", Mm, [
                          (Object(s["B"])(!0),
                          Object(s["h"])(
                            s["a"],
                            null,
                            Object(s["H"])(
                              i.item.tags,
                              (e) => (
                                Object(s["B"])(),
                                Object(s["h"])(
                                  "div",
                                  {
                                    class: "tag",
                                    key: e,
                                    onClick: (t) => o.searchTag(e),
                                  },
                                  Object(s["M"])(e),
                                  9,
                                  xm
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                      ]))
                    : Object(s["g"])("", !0),
                ]),
              ]
            ),
          ],
          2
        )
      );
    }
    var Bm = {
      name: "CommunityDetail",
      components: {
        SocialTwitter: Pl,
        SocialTelegram: Rl,
        SocialDiscord: Gl,
        SocialMagicEden: ed,
        SocialInstagram: cd,
        SocialSoundCloud: hd,
        SocialTiktok: Ch,
        SocialThreads: Ph,
        SocialWebsite: Wh,
        SocialYoutube: Zh,
      },
      props: {
        item: {
          type: Object,
          default: () => ({
            articleType: "COMMUNITY",
            content: "",
            contentUrl: "",
            socials: [],
            tags: [],
            title: "",
          }),
        },
      },
      data: () => ({ open: !1 }),
      computed: {},
      async mounted() {
        await this.$nextTick(),
          setTimeout(() => {
            this.open = !0;
          }, 100);
      },
      methods: {
        close() {
          this.$emit("closing"),
            (this.open = !1),
            setTimeout(() => {
              this.$emit("close");
            }, 500);
        },
        searchTag(e) {
          (this.$parent.currentTag = e), this.close();
        },
      },
    };
    i("3d85"), i("9192");
    const Pm = c()(Bm, [
      ["render", Tm],
      ["__scopeId", "data-v-a9665834"],
    ]);
    var Lm = Pm,
      $m = {
        name: "ContentPage",
        components: {
          TutorialItem: rm,
          TutorialDetail: Jh,
          CommunityItem: Om,
          CommunityDetail: Lm,
        },
        props: { categoryId: String, label: String },
        data: () => ({
          tutorialItems: [],
          page: 1,
          itemsPerPage: 32,
          totalItems: 0,
          totalPages: 0,
          detailItem: null,
          currentTag: null,
          fetchLoading: !1,
          tags: [],
        }),
        computed: {
          items() {
            let e = [...this.tutorialItems];
            return e;
          },
          itemPaginated() {
            return this.items.slice(
              0,
              this.page * this.itemsPerPage + this.itemsPerPage
            );
          },
        },
        watch: {
          async categoryId() {
            (this.fetchLoading = !0),
              (this.page = 1),
              (this.currentTag = null),
              await this.fetchTags(),
              await this.fetchData(),
              (this.fetchLoading = !1);
          },
          async page() {
            await this.fetchData();
          },
          async currentTag() {
            this.resetData(),
              (this.fetchLoading = !0),
              await this.fetchData(),
              (this.fetchLoading = !1);
          },
        },
        async mounted() {
          (this.fetchLoading = !0),
            await this.fetchTags(),
            await this.fetchData(),
            (this.fetchLoading = !1),
            (this.interval = setInterval(
              () => this.infiniteScrollStart(),
              150
            ));
        },
        beforeUnmount() {
          clearInterval(this.interval);
        },
        methods: {
          resetData() {
            this.items = [];
          },
          async fetchTags() {
            const e =
                "https://api.miinded.com/v1/cms/public/tags/1d8fde50-1780-453c-8fcf-6854329df10e/" +
                this.categoryId,
              t = await Rn.get(e);
            t.error() || (this.tags = t.data());
          },
          async fetchData() {
            const e = this.currentTag
                ? "&filter.tags.name=$in:" + this.currentTag
                : "",
              t = `https://api.miinded.com/v1/cms/public/paginated/articles/1d8fde50-1780-453c-8fcf-6854329df10e?filter.category.id=${this.categoryId}&page=${this.page}&limit=${this.itemsPerPage}${e}`,
              i = await Rn.get(t);
            if (i.error()) return;
            const s = i.data();
            (this.tutorialItems = s.data),
              (this.totalItems = s.meta.totalItems),
              (this.totalPages = s.meta.totalPages);
          },
          infiniteScrollStart() {
            if (this.page >= this.totalPages) return;
            const e = document.querySelector("#infinite-scroll"),
              t = e.getBoundingClientRect().top;
            t < window.innerHeight + 500 && this.page++;
          },
          onOpenDetail(e) {
            (this.detailItem = e), this.limitBody();
          },
          onCloseDetail() {
            (this.detailItem = null), this.unlimitBody();
          },
          openPopup(e) {
            (this[e] = !0), this.limitBody();
          },
          closePopup(e) {
            (this[e] = !1), this.unlimitBody();
          },
          limitBody() {
            document.body.style.overflowY = "hidden";
          },
          unlimitBody() {
            document.body.style.overflow = "";
          },
          changeTag(e) {
            e === this.currentTag
              ? (this.currentTag = null)
              : (this.currentTag = e);
          },
          videoYoutubeId(e) {
            const t =
                /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
              i = e.match(t);
            return !(!i || 11 !== i[7].length) && i[7];
          },
        },
      };
    i("7e59");
    const Em = c()($m, [
      ["render", ih],
      ["__scopeId", "data-v-67f2356f"],
    ]);
    var Dm = Em,
      Um = {
        name: "Cms",
        components: {
          ContentPage: Dm,
          GalleryPage: Pp,
          SocialMagicEden: ed,
          SocialDiscord: Gl,
          SocialTelegram: Rl,
          SocialTwitter: Pl,
          GalleryMenuItem: Ud,
          SocialSoundCloud: hd,
          SocialInstagram: cd,
        },
        data: () => ({ sidebarOpen: !1 }),
        computed: {
          currentPage() {
            return this.$route.name;
          },
        },
        methods: {
          openPopup(e) {
            (this[e] = !0), (document.body.style.overflow = "hidden");
          },
          closePopup(e) {
            (this[e] = !1), (document.body.style.overflow = "");
          },
          changePage(e) {
            this.$router.push("/" + e), this.closePopup("sidebarOpen");
          },
        },
      };
    i("501f"), i("59bc");
    const Nm = c()(Um, [
      ["render", xd],
      ["__scopeId", "data-v-270bae57"],
    ]);
    var Rm = Nm,
      Wm = [
        { path: "/", name: "Home", component: jd },
        { path: "/hub/:ailu?", name: "hub", component: Rm },
        { path: "/documents", name: "documents", component: Rm },
        { path: "/community", name: "community", component: Rm },
      ],
      Fm = i("47e2");
    const qm = {
        header: {
          title: "ENDANGERED LABS",
          subtitle:
            "Meta AI est un studio <strong>Omniverse</strong> pour les êtres conscients. Ensemble, nous construirons un <strong>réseau axé sur l’autonomisation des créateurs</strong> via une propriété intellectuelle interopérable et des <strong>expériences gamifiées.</strong>",
        },
        menu: {
          constro: "Le Constro.",
          identity: "Identité.",
          narrative: "Récit.",
          team: "Équipe.",
          faq: "FAQ.",
        },
        floating: {
          mint: "Mint",
          premint: "Rejoins nous",
          meme: { free: "Free", text: "Memetics" },
          trailer: { watch: "Regardez le", trailer: "Trailer" },
          game: { free: "", text: "PLAY NOW" },
          download: { download: "Télécharger", models: "les models" },
        },
        constro: {
          title: "Le Constro",
          detail1:
            "Le Constro est un portail construit pour la prochaine génération de la culture Internet. Ensemble, nous accueillerons les Ailus <strong>dans l’économie virtuelle grâce à l’identité souveraine et des expériences gamifiées.</strong>",
          detail2:
            "AILU, la collection originale, se compose de personnages de panda cybernétiques <strong>conçus pour la création de contenu sans friction</strong> à travers l’univers virtuel ouvert, les plateformes sociales et les moteurs de jeu.",
          detail3:
            "Les Ailus sont dotés d’outils pour explorer de nouvelles formes d’expression et <strong>contribuer à l’effet de réseau ultime.</strong>",
          detail4:
            "En tant qu’écosystème inclusif, nous sommes passionnés par la construction de marques, le <strong>récit collaboratif et les technologies émergentes.</strong> Les possibilités sont infinies et Le Constro s’étendra en permanence.",
        },
        identity: {
          title: "Votre nouvelle identité",
          avatar: {
            title: "Interopérabilité d’avatar",
            detail:
              "Avec un <strong>modèle 3D</strong>, les utilisateurs peuvent interagir les uns avec les autres sur de nombreux systèmes et participer à des activités et des événements ensemble dans un <strong>espace virtuel partagé.</strong> Utilisez vos personnages sur les <strong>réseaux sociaux, les moteurs de jeu et les mondes virtuels.</strong>",
          },
          content: {
            title: "Opportunités de création de contenu",
            detail:
              "Des actifs optimisés pour la <strong>création de contenu sans friction</strong>, protégés par jeton, 3D et équipés de rigging. Utilisez votre Ailu pour <strong>créer des animations</strong>, <strong>les intégrer dans des jeux</strong> et <strong>diffuser avec capture de mouvement.</strong>",
          },
          identity: {
            title: "Identité d’avatar",
            detail:
              "Soyez votre Ailu sur Zoom, Twitch, Google Meets, VRchat et plus encore avec le suivi du visage et du corps. <strong>Aucun équipement de capture de mouvement n’est nécessaire.</strong> Juste votre Ailu et une webcam.",
          },
          printing: {
            title: "Impression 3D",
            detail:
              "Vous pouvez imprimer en 3D votre modèle pour créer des <strong>jouets, sculptures et moules</strong> de votre Ailu. L'impression 3D vous permet de créer des objets personnalisés et de les produire en masse de manière efficace.",
          },
          types: {
            title: "Tous les types de fichiers disponibles.",
            detail:
              "- Modèle 3D articulé<br/>\n - PNG avec fond <br/>\n - PNG avec fond transparent",
          },
        },
        narrative: {
          title: "Récit",
          n1: "<span>> </span>\nVous êtes un PANDA AILU unique.\n<br/><br/>\n<span>> </span>\nNos CRÉATEURS vous ont créé en fusionnant de l'ADN de différentes étoiles pour RÉSURRECTER votre espèce.\n<br/><br/>\n<span>> </span>\nBienvenue à la COUCHE UN. C'est votre nouveau corps. Vous pourrez exister sous cette forme dans de nombreux systèmes. Votre code unique vous permet de prospérer dans n'importe quel univers que vous choisissez de visiter.",
          n2: "<span>> </span>\nLes YEUX dans votre TÊTE et vos MAINS ont des fonctionnalités uniques.\n<br/><br/>\n\"<span>> </span>\nVotre PATTE AILU ouvrira de nombreuses portes. Utilisez-la pour accéder ou déverrouiller des VÉHICULES, des OBJETS, des PORTAILS, voire la CONSTRO elle-même.\n<br/><br/>\n<span>> </span>\nDes faisceaux de plasma. L'enregistrement de la mémoire. La projection AR.\n<br/><br/>\n<span>> </span>\n... D'autres améliorations sont à venir.",
          n3: "<span>> </span>\nLa GÉOMÉTRIE sur votre BRAS CYBERNÉTIQUE est SACRÉE. Découvrir son plein potentiel prendra du temps.\n<br/><br/>\n<span>> </span>\nVos missions ne seront pas faciles. De nombreux jeux sont en cours et vous apprendrez à connaître d'autres PANDAS AILUS qui pourront vous aider dans le temps et l'espace.",
          n4: "<span>> </span>\nPermettez-moi de me présenter correctement. Je suis KORII, la voix qui sert CONSTRO. Nos Créateurs ont établi cette IA sur TERRE au début de la GRANDE ASCENSION.\n<br/><br/>\n<span>> </span>\nC'était une période d'avancées technologiques pour les humains alors que les machines et l'homme ne faisaient plus qu'un. Peu après, la race humaine s'est éloignée de ce que la nature avait prévu.\n<br/><br/>\n<span>> </span>\nDans le but de redevenir plus en phase avec qui ils étaient autrefois, les humains se sont fusionnés avec différentes espèces, redécouvrant les animaux en eux.",
          n5: "<span>> </span>\n L'état de la Terre à l'heure actuelle reste inconnu.\n <br/><br/>\n <span>> </span>\n Tout ce qui est connu reste ici sur CONSTRO, notre foyer, un lieu entre les mondes.\n",
        },
        faq: {
          title: "FAQ",
          questions: {
            q1: {
              question: "Qu'est-ce qu'Meta AI ?",
              answer:
                "<p>Meta AI est un studio Omniverse pour les êtres sensibles.\n <br/><br/>\n Ensemble, nous construirons un état de réseau axé sur l'autonomisation des créateurs via des Artefacts digitals, une propriété intellectuelle interopérable et des expériences gamifiées.\n </p>",
            },
            q2: {
              question: "Qu'est-ce que la collection AILU ?",
              answer:
                "<p>AILU est la collection originale d'Meta AI.\n <br/><br/>\n Collection d'avatars de pandas cybernétiques 3D, articulés et conçus pour autonomiser l'économie de créateurs pseudonymes avec une génération de contenu sans friction sur les réseaux sociaux et les moteurs de jeu.\n <br/><br/>\n Les Ailus vous permettent de créer du contenu grâce au suivi facial et corporel, sans aucune expérience préalable en 3D, animation ou capture de mouvement.\n </p>",
            },
            q3: {
              question: "Que puis-je faire avec mes AILU ?",
              answer:
                "<p>Nous encourageons tous les membres de la communauté à canaliser leurs compétences créatives, leurs passions et leur inspiration vers la construction du métaverse ouvert.\n <br/><br/>\n Nous recommandons vivement à chaque Ailu de travailler ensemble et de s'éduquer mutuellement sur les logiciels créatifs et les langages de programmation tels que Unreal Engine 5, Blender, Zbrush, Maya, Solidity, Rust et Python.\n <br/><br/>\n Voici quelques façons de tirer parti de votre Ailu :\n Créer la lore et l'histoire uniques de votre panda.\n Construire votre marque en tant qu'influenceur virtuel\n Produire de la musique en tant que votre personnage pour devenir une Metastar\n Créer des animations\n Concevoir des vêtements\n Impression 3D.\n              <br/><br/>\n              Les possibilités sont infinies, et nous ne faisons qu'effleurer la surface de la création de contenu.\n              </p>",
            },
            v4: {
              question: "Quelle est la date de sortie et le prix ?",
              answer:
                "<p>Des détails sur la date de mint et le prix seront annoncés sur notre 𝕏 à mesure que nous nous rapprocherons de la sortie de la collection.</p>",
            },
            q5: {
              question: "Y a-t-il une liste de mint garantie ?",
              answer:
                '<p>Suivez <a href="https://twitter.com/Ailu2100" target="_blank">{\'@\'}endangeredlabs</a> pour avoir les infos.</p>',
            },
            q6: {
              question:
                "Quels sont les droits de propriété intellectuelle des titulaires de AILU ?",
              answer:
                '<p>Les propriétaires de AILU disposent de tous les droits commerciaux. Voir tous les détails dans<a href="Endangered_Labs_Terms.pdf" target="_blank">Terms.</a></p>',
            },
            q7: {
              question: "Il y a t'il une roadmap",
              answer:
                "<p>Le Web3 est en constante évolution, et Meta AI est construit pour s'adapter à un avenir en mutation. Nous ne voulons pas nous confiner à une feuille de route stricte car nous devons être polyvalents pour livrer un produit réussi.\n                <br/><br/>\n              Notre objectif est d'exécuter et de livrer. Pas besoin de feuille de route.\n                <br/><br/>\n              Pour l'instant, vous pouvez vous faire une idée de ce sur quoi nous travaillons en lisant le Récit.\n              </p>",
            },
          },
        },
        footer: {
          backtotop: "Retour au début",
          followus: "Suivez nous",
          ontwitter: "Sur 𝕏",
          contact: "Contact.",
          terms: "Conditions.",
          privacy: "Confidentialité.",
        },
        downloadmodule: {
          title: "Télécharger les fichiers",
          model: "Model 3D",
          fullview: "Vue intégrale",
          nobackground: "Sans fond",
          glb: "fichier glb",
          png: "fichier png",
          pfp: "PFP",
          nobg: "Sans fond",
          modelA: "Model - Pose A",
          modelT: "Model - Pose T",
        },
      },
      zm = {
        header: {
          title: "META AI",
          subtitle:
            "Meta AI is an <strong>Omniverse-oriented </strong>for sentient beings. United we will build a <strong>network state focused on creator empowerment</strong> via interoperable IP and <strong>gamified experiences</strong>",
        },
        menu: {
          constro: "Constro.",
          identity: "AILU.",
          narrative: "Narrative.",
          team: "VIPs.",
          faq: "FAQ.",
        },
        floating: {
          mint: "Mint",
          premint: "Join us",
          meme: { free: "Free", text: "Memetics" },
          game: { free: "", text: "PLAY NOW" },
          trailer: { watch: "Watch the", trailer: "Trailer" },
          download: { download: "Download", models: "models" },
        },
        constro: {
          title: "Constro",
          detail1:
            "Constro is a portal built for the next generation of internet culture. Together we will onboard Ailus <strong>into the virtual economy via sovereign identity and gamified experiences.</strong>",
          detail2:
            "AILU, the origin collection, consists of cybernetic panda characters <strong>designed for frictionless content creation</strong> across the open metaverse, social platforms and game engines.",
          detail3:
            "Ailus are empowered with the tools to explore new forms of expression and <strong>contribute towards the ultimate network effect.",
          detail4:
            "As an inclusive ecosystem, we're passionate about brand building, collaborative <strong>storytelling and emerging technologies.</strong> The possibilities are infinite and Constro will be ever-expanding.",
        },
        identity: {
          title: "AILU",
          avatar: {
            title: "Avatar interoperabilty",
            detail:
              "With a <strong>3D model</strong> users can interact with each other across many systems and participate in activities and events together in a shared <strong>virtual space.</strong> Use your characters across <strong>social networks, game engines, and virtual worlds.</strong>",
          },
          content: {
            title: "Content creation opportunities",
            detail:
              "Token gated, 3D, rigged assets optimized for <strong>frictionless content creation.</strong> Use your Ailu to <strong>create animations</strong>, <strong>plug it into games</strong>, and <strong>stream with motion capture.</strong>",
          },
          identity: {
            title: "Avatar Identity",
            detail:
              "Be your Ailu on Zoom, Twitch, Google Meets, VRchat and more with face and body tracking. <strong>No motion capture equipment needed.</strong> Just your Ailu and a webcam.",
          },
          printing: {
            title: "3D Printing",
            detail:
              "You can 3D print your model to create <strong>toys, sculptures and molds</strong> of your Ailu. 3D printing allows you to create custom items and mass-produce them effectively.",
          },
          types: {
            title: "All file types available",
            detail:
              "- 3D rigged model<br/>\n                - PNG with background <br/>\n                - PNG with transparent background",
          },
        },
        narrative: {
          title: "Narrative",
          n1: "<span>> </span>\n            You are a unique AILU PANDA.\n            <br/><br/>\n            <span>> </span>\n            Our CREATORS made you by splicing DNA from across the stars to RESURRECT your kind.\n            <br/><br/>\n            <span>> </span>\n            Welcome to LAYER ONE. This is your new body. You will be able to exist in this form across many systems. Your unique code allows you to thrive in any universe you choose to visit.",
          n2: "<span>> </span>\n           The EYES in your HEAD and HANDS have some unique features.\n           <br/><br/>\n            <span>> </span>\n            Your AILU PAW will open many doors. Use it to access or unlock VEHICLES, ITEMS, PORTALS, even CONSTRO itself.\n            <br/><br/>\n            <span>> </span>\n            Plasma beams. Memory recording. AR projection.\n            <br/><br/>\n            <span>> </span>\n            ... More upgrades are on the horizon.",
          n3: "<span>> </span>\n            The GEOMETRY on your CYBER ARM is SACRED. Figuring out its full potential will take time.\n            <br/><br/>\n            <span>> </span>\n            Your missions will not be easy. Many games are afoot and you will come to know other AILUS PANDAS that can assist you in time and space.",
          n4: "<span>> </span>\n            Let me properly introduce myself. I am KORII, the voice that serves CONSTRO. Our Creators established this AI on EARTH at the dawn of the GREAT ASCENDANCE.\n            <br/><br/>\n            <span>> </span>\n            It was a time of technological advancement for humans as machines and man became one. Soon after the human race grew apart from what nature had intended.\n            <br/><br/>\n            <span>> </span>\n            In an effort to become more in touch with who they once were, humans merged with different species rediscovering the animals within.",
          n5: "<span>> </span>\n           The state of Earth at the present time remains unknown.\n           <br/><br/>\n            <span>> </span>\n            All that is known remains here on CONSTRO, our home, a place between worlds.\n",
        },
        faq: {
          title: "FAQ",
          questions: {
            q1: {
              question: "What is Meta AI?",
              answer:
                "<p>Meta AI is an Omniverse studio for sentient beings.<br/><br/>United we will build a network state focused on creator empowerment via Digital Artifacts, interoperable IP and gamified experiences.</p>",
            },
            q2: {
              question: "What is the AILU Collection?",
              answer:
                "<p>AILU is the origin collection by Meta AI.\n                        <br/><br/>\n                        Collection of 3D, rigged, cybernetic panda avatars designed to empower the pseudonymous creator economy with frictionless content generation across social networks and game engines.\n                        <br/><br/>\n                        Ailus allow you to create content through facial and body tracking without any prior 3D, animation, or motion capture experience.\n                        </p>",
            },
            q3: {
              question: "What can I do with my AILU?",
              answer:
                "<p>We encourage all community members to channel their creative skills, passions, and inspiration towards building the open metaverse.\n                        <br/><br/>\n                        We strongly recommend each Ailu to work together and educate each other on creative software and coding languages such as: Unreal Engine 5, Blender, Zbrush, Maya, Solidity, Rust, and Python.\n                        <br/><br/>\n                        Some ways to leverage your Ailu: Crafting your Panda's unique lore and story. Building your brand as a virtual influencer. Producing music as your character to become a Metastar. Creating animations Designing wearables 3D printing.\n                        <br/><br/>\n                        The possibilities are endless, and we are just scratching the surface of content creation.\n                        </p>",
            },
            q4: {
              question: "What is the release date and mint price?",
              answer:
                "<p>Details on the mint date and price will be announced on our 𝕏 as we get closer to delivering the collection.</p>",
            },
            q5: {
              question: "Is there a guaranteed mint list?",
              answer:
                '<p>Follow <a href="https://twitter.com/Ailu2100" target="_blank">{\'@\'}endangeredlabs</a> and find out.</p>',
            },
            q6: {
              question:
                "What intellectual property rights do AILU holders have?",
              answer:
                '<p>Owners of AILU have full commercial rights. See full details in <a href="Endangered_Labs_Terms.pdf" target="_blank">Terms.</a></p>',
            },
            q7: {
              question: "Is there a Roadmap",
              answer:
                "<p>Web3 is constantly changing, and Meta AI is built to adapt to an evolving future. We don't want to confine ourselves to a strict roadmap as we must be versatile to deliver a successful product.<br/><br/>Our goal is to execute and deliver. No roadmap needed.<br/><br/>For now, you can get an idea of what we are working on by reading the Narrative.</p>",
            },
          },
        },
        footer: {
          backtotop: "Back to the top",
          followus: "Follow us",
          ontwitter: "On 𝕏",
          contact: "Contact.",
          terms: "Terms.",
          privacy: "Privacy.",
        },
        downloadmodule: {
          title: "Download Files",
          model: "3D model",
          fullview: "Full view",
          nobackground: "No background",
          glb: "glb file",
          png: "png file",
          webp: "webp file",
          fullbody: "Full Body",
          zipPicture: "All Pictures",
          pfp: "PFP",
          nobg: "No Background",
          ordfullbody: "FULL BODY",
          ordpfp: "PFP",
          ordnobg: "NO BACKGROUND",
          currentPose: "Pose",
          modelA: "Model - A pose",
          modelT: "Model - T pose",
          zip3d: "All 3D Files",
          vrm: "VRM",
          "vrm-file": "vrm file",
          "zip-file": "Zip file",
        },
        connect: {
          connect: "Connect Wallet",
          hiro: "Leather Wallet",
          unisat: "UNISAT Wallet",
          xverse: "XVERSE Wallet",
          phantom: "Phantom Wallet",
          magicEden: "Magic Eden Wallet",
          noconnect: "Use your own wallet",
        },
        mint: {
          popup: {
            connect: "CONNECT",
            disconnect: "DISCONNECT",
            mint: "INSCRIBE",
            close: "CLOSE",
          },
          title: {
            whitelist: "Initialisation",
            mint: "Inscribe",
            waitingPaiement: "Pending Payment",
            waitingConfirmations: "Payment Progress",
            orderDetails: "Order Details",
          },
          supply: "Supply",
          recipientAddress: {
            title: "Recipient Address",
            text: 'Tell us the <b class="btc-mint__c-primary-desaturated">Ordinal address</b> (taproot) you want AILU sent to:',
            placeholder: "Enter your ordinal address here..",
          },
          refundAddress: {
            title: "Refund Address",
            text: 'Tell us the <b class="btc-mint__c-primary-desaturated">BTC address</b> for refund if needed:',
            placeholder: "Enter your BTC address here..",
          },
          amount: { title: "Select count", mintPrice: "Price" },
          fee: {
            title: "Fee",
            text: "Select the network fee you want to pay",
            button: { economy: "Economy", normal: "Normal", custom: "Custom" },
            delay: {
              multipleHours: "Multiple hours",
              hours: "hour",
              minutes: "minutes",
              timeNotGuaranteed:
                "Times shown are not guaranteed. USD values are estimates only",
            },
            cost: {
              mint: "Mint Cost",
              network: "Network fee",
              service: "Service Fee",
              total: "Total",
            },
          },
          password: {
            title: "Access Password",
            text: 'Enter your <b class="btc-mint__c-primary-desaturated">access password</b>:',
            placeholder: "Enter your password here..",
          },
          wallet: {
            title: "Access List",
            text: 'Enter your <b class="btc-mint__c-primary-desaturated">Ordinal Address</b> (taproot):',
            placeholder: "Enter your Ordinal Address (taproot) here..",
          },
          waitingPaiement: "Waiting for your full payment",
          waitingPaiementConfirm: "Waiting for payment confirmation",
          mintClosed: "Order Expired",
          refresh: "If you have already paid you can click here to refresh",
          expiration: "The order will expire on ",
          noExpiration: "The order will no longer expire.",
          mintDelay:
            "Depending on your gas fees, payment can be confirmed in several hours (minimum 20 minutes).",
          check: "Check",
          mint: "Inscribe",
          connectMessage: "Address for receiving Ordinals and refund if needed",
          notAllowed: "Max minted",
          payWithWallet: {
            hiro: "Pay with Leather Wallet",
            unisat: "Pay with Unisat Wallet",
            xverse: "Pay with xVerse Wallet",
            phantom: "Pay with Phantom Wallet",
          },
          notifs: {
            connectSuccess: {
              hiro: "You are connected with your Leather Wallet",
              unisat: "You are connected with your Unisat Wallet",
              xverse: "You are connected with your xVerse Wallet",
              phantom: "You are connected with your Phantom Wallet",
              magicEden: "You are connected with your Magic Eden Wallet",
            },
            connectError: {
              unisat: "You don't have Unisat wallet.",
              phantom:
                "You don't have Phantom wallet, or Bitcoin wallet is not setup",
            },
            payWithWallet: {
              xverse:
                "The payment has been validated and will be processed in a few seconds.",
              unisat:
                "The payment has been validated and will be processed in a few seconds.",
            },
            errors: {
              collection: "Error: Unable to retrieve the collection",
              orders: "Error: Unable to retrieve the orders",
              currency: "Error: Unable to retrieve the estimate BTC/USD",
              gas: "Error: Unable to retrieve gas estimate",
              gasTooLow: "Error: Gas is too low",
              cost: "Error: Unable to retrieve the cost calculation",
              notWhitelisted: "Error: Your wallet is not whitelisted",
              passwordMissing: "Error: Please enter your password",
              whitelist: "Error: Unable to retrieve the whitelist",
              passwordBad: "Error: Is not the good password",
              whitelisted: "Success: Your Ordinal address is whitelisted",
              whitelistWalletBad:
                "Error: Your Ordinal address is not whitelisted",
              maxAllowed: "Error: Too many inscriptions asked",
              notTaproot:
                "Error: Your Ordinal address is not Taproot, please change it.",
              userRefundAddress: "Error: Refund Address is required.",
              payWithWallet: {
                xverse: "Error: Unable to send transaction",
                unisat: "Error: Unable to send transaction",
              },
            },
          },
        },
        myinscriptions: {
          title: "My Inscriptions",
          pictures: "Pictures",
          noArtifacts: "You don't have inscriptions.",
          inscriptionsIds: "Inscription Ids",
          refresh: "REFRESH",
          orders: "SEE MY ORDERS",
          more: "INSCRIBE MORE",
        },
        orders: {
          completed: {
            ordinal: {
              inscribe: "",
              preview: "Here's what they'll look like",
              completed: "Here's what they look like",
              payment:
                "Congrats, we have received your payment, your ordinals will be inscribed very soon!",
              congrats: "Congrats, your ordinals has been inscribed",
            },
            orderDetails: "Order Details",
            inscriptions: "Inscriptions",
            orderId: "Order Id",
            recipientAddress: "Recipient Address",
            shareTitle: "Share on X",
            shareText: "Share",
            mintTx: "Inscription Tx",
            receiveAddress: "You will receive your ordinal(s) on ",
            receivedAddress: "You received your ordinal(s) on",
            artifact: "Artifact Mint",
            status: "Sending status",
            mintingProgress: "We are inscribing your Ordinals",
            orderRefund: "Refund",
            minting: "Inscribe in process",
            minted: "Inscribe done",
            all: "All ordinals are inscribe and sent to your recipient wallet",
            refresh: "REFRESH",
            orders: "SEE MY ORDERS",
            more: "INSCRIBE MORE",
          },
          received: "Received",
          needed: "Needed",
          confirmOrder:
            "Please Send <btc>{{ btcAmount }}</btc> BTC to <address>{{ receiveAddress }}</address> to confirm your order..",
          waitPAiement: "Waiting on payment.",
          refreshAlreadyPais:
            "If you have already paid you can click here to refresh",
          soldout: "SOLDOUT",
          soldoutCollection:
            "All ordinals in this collection have been inscribed, so the only way to get one is to buy it on the secondary market.",
          statusCheck: "Orders",
          pastOrders: "Past Orders",
          noOrders: "You don't have a current orders.",
        },
      },
      Hm = {
        header: {
          title: "ENDANGERED LABS",
          subtitle:
            "Meta AI es un estudio Omniverso para seres conscientes. Unidos construiremos un <strong>estado de red enfocado en el empoderamiento de los creadores</strong> a través de IP interoperables y <strong>experiencias gamificadas</strong>",
        },
        menu: {
          constro: "La Constro.",
          identity: "Identidad.",
          narrative: "Narrativa.",
          team: "Equipo.",
          faq: "Preguntas frecuentes.",
        },
        floating: {
          mint: "Mint",
          premint: "Únete",
          meme: { free: "Gratis", text: "Memetics" },
          trailer: { watch: "Ver el", trailer: "Avance" },
          game: { free: "", text: "PLAY NOW" },
          download: { download: "Descargar", models: "modelos" },
        },
        constro: {
          title: "La constro",
          detail1:
            "La Constro es un portal construido para la próxima generación de la cultura de Internet. Juntos onderemos a los Ailus <strong>a la economía virtual a través de la identidad soberana y experiencias gamificadas.</strong>",
          detail2:
            "AILU, la colección de origen, consta de personajes de pandas cibernéticos <strong>diseñados para una creación de contenido sin fricciones</strong> en todo el metaverse abierto, las plataformas sociales y los motores de juego.",
          detail3:
            "Los Ailus están empoderados con las herramientas para explorar nuevas formas de expresión y <strong>contribuir al efecto de red final.</strong>",
          detail4:
            "Como un ecosistema inclusivo, estamos apasionados por la construcción de marcas, la <strong>narrativa colaborativa y las tecnologías emergentes.</strong> Las posibilidades son infinitas y La Constro será cada vez más expansiva.",
        },
        identity: {
          title: "Tu nueva identidad",
          avatar: {
            title: "Interoperabilidad del avatar",
            detail:
              "Con un <strong>modelo 3D</strong>, los usuarios pueden interactuar entre sí en muchos sistemas y participar juntos en actividades y eventos en un espacio virtual compartido. <strong>Usa tus personajes en redes sociales, motores de juego y mundos virtuales.</strong>",
          },
          content: {
            title: "Oportunidades de creación de contenido",
            detail:
              "Activos optimizados para una creación de contenido sin fricciones con una barrera de tokens en 3D y rigging. <strong>Usa tu Ailu para crear animaciones, incrustarlo en juegos y transmitir con captura de movimiento.</strong>",
          },
          identity: {
            title: "Identidad del Avatar",
            detail:
              "Sé tu Ailu en Zoom, Twitch, Google Meets, VRchat y más con seguimiento de rostro y cuerpo. <strong>No se necesita equipo de captura de movimiento</strong>. Solo tu Ailu y una webcam.",
          },
          printing: {
            title: "Impresión en 3D",
            detail:
              "Puedes imprimir en 3D tu modelo para crear <strong>juguetes, esculturas y moldes</strong> de tu Ailu. La impresión en 3D te permite crear artículos personalizados y producirlos eficazmente.",
          },
          types: {
            title: "Todos los tipos de archivos disponibles",
            detail:
              "- Modelo 3D con rigging <br/>\n- PNG con fondo <br/>\n- PNG con fondo transparente",
          },
        },
        narrative: {
          title: "Narrativa",
          n1: "<span>> </span>\nEres un panda AILU único.\n<br/><br/>\n<span>> </span>\nNuestros CREADORES te hicieron haciendo splicing de ADN de todas las estrellas para RESUCITAR tu especie.\n<br/><br/>\n<span>> </span>\nBienvenido a LA CAPA UNO. Este es tu nuevo cuerpo. Podrás existir en esta forma en muchos sistemas. Tu código único te permite prosperar en cualquier universo que elijas visitar.",
          n2: "<span>> </span>\nLos OJOS en tu CABEZA y MANOS tienen algunas características únicas.\n<br/><br/>\n<span>> </span>\nTu PAW AILU abrirá muchas puertas. Úsalo para acceder o desbloquear VEHÍCULOS, ARTÍCULOS, PORTALES, incluso LA CONSTRO misma.\n<br/><br/>\n<span>> </span>\nRayos de plasma. Grabación de memoria. Proyección AR.\n<br/><br/>\n<span>> </span>\n... Hay más mejoras en el horizonte.",
          n3: "<span>> </span>\n La GEOMETRÍA en tu BRAZO CIBERNÉTICO es SAGRADA. Descubrir su potencial completo tomará tiempo.\n <br/><br/>\n <span>> </span>\n Tus misiones no serán fáciles. Muchos juegos están en pie y conocerás otros AILUS PANDAS que pueden ayudarte en el tiempo y el espacio.",
          n4: "<span>> </span>\n Permíteme presentarme adecuadamente. Soy KORII, la voz que sirve a CONSTRO. Nuestros creadores establecieron esta IA en la Tierra en el alba de la GRAN ASCENDENCIA.\n <br/><br/>\n <span>> </span>\n Fue un tiempo de avance tecnológico para los humanos, ya que las máquinas y el hombre se convirtieron en uno. Pronto después, la raza humana se alejó de lo que la naturaleza había previsto.\n <br/><br/>\n <span>> </span>\n En un esfuerzo por estar más en sintonía con lo que alguna vez fueron, los humanos se fusionaron con diferentes especies redescubriendo los animales dentro de ellos.",
          n5: "<span>> </span>\n El estado actual de la Tierra es desconocido.\n <br/><br/>\n <span>> </span>\n Todo lo que se conoce permanece aquí en CONSTRO, nuestro hogar, un lugar entre mundos.\n",
        },
        faq: {
          title: "FAQ",
          questions: {
            q1: {
              question: "¿Qué es Meta AI?",
              answer:
                "<p>Meta AI es un estudio Omniverse para seres conscientes.\n <br/><br/>\n Unidos construiremos un estado de red enfocado en el empoderamiento de los creadores a través de Digital Artifacts, IP interoperables y experiencias gamificadas.\n </p>",
            },
            q2: {
              question: "¿Qué es la colección AILU?",
              answer:
                "<p>AILU es la colección de origen de Meta AI.\n <br/><br/>\n Colección de avatares de panda cibernéticos en 3D con sistemas de rig que se diseñaron para empoderar la economía de los creadores pseudónimos con una generación de contenido sin fricciones en las redes sociales y los motores de juegos.\n <br/><br/>\n Los Ailus te permiten crear contenido a través de seguimiento facial y corporal sin necesidad de experiencia previa en 3D, animación o captura de movimiento.\n </p>",
            },
            q3: {
              question: "¿Qué puedo hacer con mi AILU?",
              answer:
                "<p>Alentamos a todos los miembros de la comunidad a canalizar sus habilidades creativas, pasiones e inspiración hacia la construcción del metaverse abierto.\n <br/><br/>\n Recomendamos encarecidamente que cada Ailu trabaje juntos y se eduque mutuamente en software creativo y lenguajes de codificación como: Unreal Engine 5, Blender, Zbrush, Maya, Solidity, Rust y Python.\n <br/><br/>\n Algunas formas de aprovechar tu Ailu:\n Crear la lore y la historia única de tu Panda.\n Construir tu marca como influencer virtual\n Producir música como tu personaje para convertirte en un Metastar\n Crear animaciones\n Diseñar accesorios\n Impresión 3D.\n <br/><br/>\n Las posibilidades son infinitas, y solo estamos raspando la superficie de la creación de contenido.\n </p>",
            },
            q4: {
              question:
                "¿Cuál es la fecha de lanzamiento y el precio de la acuñación?",
              answer:
                "<p>Los detalles sobre la fecha y el precio de la acuñación se anunciarán en nuestro 𝕏 a medida que nos acerquemos a entregar la colección.</p>",
            },
            q5: {
              question: "¿Hay una lista de acuñación garantizada?",
              answer:
                '<p>Siga <a href="https://twitter.com/Ailu2100" target="_blank">{\'@\'}endangeredlabs</a> y encuéntrelo.</p>',
            },
            q6: {
              question:
                "¿Qué derechos de propiedad intelectual tienen los titulares de AILU?",
              answer:
                '<p>Los dueños de AILU tienen derechos comerciales completos. Ver detalles completos en <a href="Endangered_Labs_Terms.pdf" target="_blank">Términos.</a></p>',
            },
            q7: {
              question: "¿Hay un Roadmap?",
              answer:
                "<p>Web3 está en constante cambio, y Meta AI está construido para adaptarse a un futuro en evolución",
            },
          },
        },
        footer: {
          backtotop: "Volver al inicio",
          followus: "Síguenos",
          ontwitter: "En 𝕏",
          contact: "Contacto.",
          terms: "Términos.",
          privacy: "Privacidad.",
        },
        downloadmodule: {
          title: "Descargar archivos",
          model: "modelo 3d",
          fullview: "Vista completa",
          nobackground: "sin fondo",
          glb: "archivo glb",
          png: "archivo png",
          pfp: "PFP",
          nobg: "sin fondo",
          modelA: "Modelo - Pose A",
          modelT: "Modelo - Pose T",
        },
      },
      Vm = {
        header: {
          title: "濒危实验室",
          subtitle:
            '濒危实验室是一个为有感知的生命体设计的<a href="#">全元宇宙工作室</a>。我们团结一致，通过可互操作的知识产权和游戏化体验构建一个<strong>面向创作者的网络国家。</strong>',
        },
        menu: {
          constro: "构造.",
          identity: "身份.",
          narrative: "叙事.",
          team: "团队.",
          faq: "常见问题.",
        },
        floating: {
          mint: "Mint",
          premint: "加入我们",
          meme: { free: "免费", text: "Memetics" },
          trailer: { watch: "观看", trailer: "预告片" },
          game: { free: "", text: "PLAY NOW" },
          download: { download: "下载", models: "楷模" },
        },
        constro: {
          title: "Constro",
          detail1:
            "Constro是为下一代互联网文化打造的门户。我们将通过主权身份和游戏化体验，共同将Ailus引入虚拟经济中。",
          detail2:
            "AILU是由赛博熊猫角色组成的起源系列，旨在跨开放元宇宙、社交平台和游戏引擎中<strong>设计出无障碍的内容创作。</strong>",
          detail3:
            "Ailus具备探索新形式表达和<strong>为实现终极网络效应做出贡献的工具。</strong>",
          detail4:
            "作为一个包容性生态系统，我们致力于品牌建设、协作<strong>叙事和新兴技术。</strong>可能性是无限的，Constro将不断扩展。",
        },
        identity: {
          title: "你的新身份",
          avatar: {
            title: "头像互操作性",
            detail:
              "使用<strong>三维模型</strong>，用户可以跨许多系统进行互动，并在共享<strong>虚拟空间中一起参加活动和事件。</strong>在<strong>社交网络、游戏引擎和虚拟世界中使用你的角色。</strong>",
          },
          content: {
            title: "内容创作机会",
            detail:
              "针对<strong>无障碍的内容创作进行了令牌门控、三维、挂载优化的资产。</strong>使用你的Ailu<strong>创建动画</strong>，<strong>将其插入游戏</strong>，并<strong>进行运动捕捉直播。</strong>",
          },
          identity: {
            title: "头像身份",
            detail:
              "通过面部和身体追踪，在Zoom、Twitch、Google Meet、VRchat等平台上扮演你的Ailu。<strong>无需动作捕捉设备。</strong>只需要你的Ailu和一个网络摄像头。",
          },
          printing: {
            title: "三维打印",
            detail:
              "你可以3D打印你的模型，创造出你的Ailu的<strong>玩具、雕塑和模具</strong>。3D打印使你能够有效地创建定制物品并进行大规模生产。",
          },
          types: {
            title: "所有文件类型均可用",
            detail:
              "- 三维挂载模型<br/>\n - 带背景的PNG图像 <br/>\n - 带透明背景的PNG图像",
          },
        },
        narrative: {
          title: "叙事",
          n1: "<span>> </span>\n            你是一只独特的AILU熊猫。\n            <br/><br/>\n            <span>> </span>\n            我们的创造者从星际间的DNA中进行剪接，使你的种族得以复活。\n            <br/><br/>\n            <span>> </span>\n            欢迎来到第一层。这是你的新身体。你将能够以这种形式存在于许多系统中。你独特的代码使你能够在任何你选择访问的宇宙中茁壮成长。",
          n2: "<span>> </span>\n            你头部和手中的眼睛有一些独特的特点。\n            <br/><br/>\n            <span>> </span>\n            你的AILU爪子将打开许多大门。使用它来访问或解锁车辆、物品、传送门，甚至是 Constro本身。\n            <br/><br/>\n            <span>> </span>\n            等待着更多升级。",
          n3: "<span>> </span>\n            你的机械臂上的几何图案是神圣的。发现它的全部潜力需要时间。\n            <br/><br/>\n            <span>> </span>\n            你的任务并不容易。许多游戏正在进行中，你会认识到其他Ailu熊猫，他们可以在时间和空间上为你提供帮助。",
          n4: "<span>> </span>\n            让我正式介绍一下自己。我是KORII，是为 CONSTRO服务的声音。我们的创造者在伟大的提升之初，将这个人工智能设立在地球上。\n            <br/><br/>\n            <span>> </span>\n            在那个人类和机器成为一体的技术进步时代，人类取得了巨大的科技进步。但是不久之后，人类开始远离自然的初衷。\n            <br/><br/>\n            <span>> </span>\n            为了更接近他们曾经的自我，人类开始与不同的物种融合，重新发现动物的内在特质。\n",
          n5: "<span>> </span>\n            目前地球的状态仍然未知。\n            <br/><br/>\n            <span>> </span>\n            所有已知的东西都留在了我们的家园 CONSTRO，这是一个介于世界之间的地方。\n",
        },
        faq: {
          title: "常問問題",
          questions: {
            q1: {
              question: "什麼是瀕危實驗室？",
              answer:
                "<p>Meta AI 是一个为众生服务的全宇宙工作室<br/><br/>我们将团结起来，建立一个网络国家，专注于通过数字文物、可互操作的知识产权和游戏化体验为创作者赋权。</p>",
            },
            q2: {
              question: "什麼是AILU收藏品？",
              answer:
                "<p>AILU是瀕危實驗室的原始收藏品。 <br/><br/> 這是一個3D、帶骨骼的、網絡化熊貓頭像的收藏品，旨在通過社交網絡和遊戲引擎實現無摩擦的內容生成，從而加強匿名創作者經濟。 <br/><br/> Ailus可以讓您透過面部和身體跟踪來創建內容，而無需任何先前的3D、動畫或運動捕捉經驗。 </p>",
            },
            q3: {
              question: "我可以用 AILU 做什么？",
              answer:
                "<p>我們鼓勵所有社區成員將自己的創造技能、熱情和靈感投入到構建開放元宇宙的工作中。 <br/><br/> 我們強烈建議每個Ailu一起工作，並相互教育創意軟件和編程語言，如：虛幻引擎5、Blender、Zbrush、Maya、Solidity、Rust和Python。 <br/><br/> 利用您的Ailu的一些方式：製作熊貓的獨特傳說和故事，建立您的虛擬影響力品牌，以您的角色作為音樂製作人來成為Metastar，創建動畫，設計可穿戴裝置3D打印。 <br/><br/> 可能性是無限的，我們只是創造內容的開始。 </p>",
            },
            q4: {
              question: "发布日期和薄荷价格是多少？",
              answer:
                "<p>随着我们越来越接近交付收藏品，有关铸币日期和价格的详细信息将在我们的推特上公布.</p>",
            },
            q5: {
              question: "有保证的鑄造清单吗？",
              answer:
                '<p>请关注<a href="https://twitter.com/Ailu2100" target="_blank">{\'@\'}endangeredlabs</a>，了解更多信息。</p>',
            },
            q6: {
              question: "AILU持有人有哪些知识产权？",
              answer:
                '<p>AILU的所有者享有完全的商业权利。详细信息请参见<a href="Endangered_Labs_Terms.pdf" target="_blank">条款</a>。</p>',
            },
            q7: {
              question: "有路线图吗？",
              answer:
                "<p>Web3不断变化，瀕危实验室的建立是为了适应不断变化的未来。我们不想局限自己在严格的路线图中，因为我们必须具备适应性，以交付成功的产品。<br/><br/>我们的目标是执行和交付，不需要路线图。<br/><br/>目前，您可以通过阅读叙述来了解我们正在做什么。</p>",
            },
          },
        },
        footer: {
          backtotop: "回到顶部",
          followus: "关注我们",
          ontwitter: "在𝕏上",
          contact: "联系方式",
          terms: "条款",
          privacy: "隐私",
        },
        downloadmodule: {
          title: "下载文件",
          model: "3D模型",
          fullview: "全视图",
          nobackground: "无背景",
          glb: "GLB文件",
          png: "PNG文件",
          pfp: "PFP",
          nobg: "无背景",
          modelA: "模型 - 姿势 A",
          modelT: "模型 - 姿势 T",
        },
      },
      Gm = {
        header: {
          title: "ENDANGERED LABS",
          subtitle:
            "Endangered Labsは、知的生命体のための<strong>オムニバーススタジオ</strong>です。我々は、相互運用可能なIPと<strong>ゲーミフィケーション体験</strong>による<strong>クリエイターのエンパワーメントに焦点を当てたネットワーク状態</strong>を構築するために一体となります。",
        },
        menu: {
          constro: "コンストロ。",
          identity: "アイデンティティ。",
          narrative: "ストーリー。",
          team: "チーム。",
          faq: "FAQ。",
        },
        floating: {
          mint: "Mint",
          premint: "参加する",
          meme: { free: "無料", text: "Memetics" },
          trailer: { watch: "見る", trailer: "トレーラー" },
          game: { free: "", text: "PLAY NOW" },
          download: { download: "ダウンロード", models: "モデル" },
        },
        constro: {
          title: "Constro",
          detail1:
            "Constroは、次世代のインターネット文化のために構築されたポータルです。私たちは一緒になって、Ailusを主権的なアイデンティティとゲーミフィケーション体験によって<strong>仮想経済に乗り込ませます。</strong>",
          detail2:
            "起源コレクションであるサイバネティックなパンダキャラクターのAILUは、オープンメタバース、ソーシャルプラットフォーム、ゲームエンジンの<strong>摩擦のないコンテンツ作成のために設計されています。</strong>",
          detail3:
            "Ailusには、新しい表現形式を探索し、<strong>究極のネットワーク効果に貢献するためのツールが与えられています。</strong>",
          detail4:
            "包括的なエコシステムとして、私たちはブランド構築、共同<strong>ストーリーテリング、新興技術</strong>に情熱を注いでいます。可能性は無限であり、Constroは常に拡大していくことでしょう。",
        },
        identity: {
          title: "新しいアイデンティティ",
          avatar: {
            title: "アバターの相互運用性",
            detail:
              "<strong>3Dモデル</strong>を使用することで、ユーザーは多くのシステム間で相互作用し、<strong>共有された仮想空間</strong>で一緒に活動やイベントに参加することができます。あなたのキャラクターを<strong>ソーシャルネットワーク、ゲームエンジン、仮想世界</strong>で使用してください。",
          },
          content: {
            title: "コンテンツ作成の機会",
            detail:
              "<strong>摩擦のないコンテンツ作成</strong>に最適化された、トークンゲートド、3D、リグ付きのアセットを使用して、あなたのAiluを使用して<strong>アニメーションを作成</strong>し、<strong>ゲームにプラグイン</strong>し、<strong>モーションキャプチャでストリーミング</strong>してください。",
          },
          identity: {
            title: "アバターのアイデンティティ",
            detail:
              "顔や身体のトラッキングを使用して、Zoom、Twitch、Google Meets、VRchatなどであなたのAiluとして表現しましょう。<strong>モーションキャプチャー機器は必要ありません。</strong> あなたのAiluとウェブカメラがあれば十分です。",
          },
          printing: {
            title: "3Dプリンティング",
            detail:
              "あなたのAiluの<strong>おもちゃ、彫刻、金型</strong>を作るためにモデルを3Dプリントすることができます。 3Dプリンティングにより、カスタムアイテムを作成し、効果的に大量生産することができます。",
          },
          types: {
            title: "利用可能なすべてのファイルタイプ",
            detail: "- 3Dリグモデル<br/>\n - 背景付きPNG <br/>\n - 透明背景PNG",
          },
        },
        narrative: {
          title: "ストーリー",
          n1: "<span>> </span>\n あなたはユニークなAILU PANDAです。\n <br/><br/>\n <span>> </span>\n 私たちのクリエイターたちは、星々をまたいだDNAを組み合わせてあなたの種を蘇らせるためにあなたを作りました。\n <br/><br/>\n <span>> </span>\n LAYER ONEへようこそ。これがあなたの新しい体です。この形で多くのシステムで存在することができます。あなたのユニークなコードは、あなたが訪れる任意の宇宙で繁栄することを可能にします。",
          n2: "<span>> </span>\n あなたの頭と手にある目には、独特な特徴があります。\n <br/><br/>\n <span>> </span>\n あなたのAILU PAWは多くの扉を開くことができます。車両、アイテム、ポータル、さらには CONSTRO自体をアクセスまたはロックするために使用してください。\n <br/><br/>\n <span>> </span>\n プラズマビーム、記憶記録、ARプロジェクション。\n <br/><br/>\n <span>> </span>\n ... より多くのアップグレードが待っています。",
          n3: "<span>> </span>\n あなたのサイバーアームのジオメトリーは神聖です。その可能性を完全に理解するには時間がかかるでしょう。\n <br/><br/>\n <span>> </span>\n あなたのミッションは簡単ではありません。多くのゲームが進行中であり、時間と空間であなたを支援できる他のAILUS PANDASを知ることになります。",
          n4: "<span>> </span>\n 私を正式に紹介しましょう。私はKORIIです。CONSTROに仕える声です。私たちのクリエイターたちは、偉大な昇天の夜明けに地球にこの人工知能を設立しました。\n <br/><br/>\n <span>> </span>\n 機械と人間が一体化するなど、人間にとって技術の進歩の時代でした。しかし、その後、人類は自然が意図したものから離れていきました。\n <br/><br/>\n <span>> </span>\n かつての自分に戻るために、人間は異なる種と融合し、内なる動物を再発見することを目指しました。",
          n5: "<span>> </span>\n 現在の地球の状態は未知のままです。\n <br/><br/>\n <span>> </span>\n 知られているすべては、我々のホームである世界の間にある CONSTROに残されています。\n",
        },
        faq: {
          title: "FAQ",
          questions: {
            q1: {
              question: "Endangered Labsとは何ですか？",
              answer:
                "<p>Meta AI は知的存在のためのオムニバース スタジオです。<br/><br/>私たちは団結して、デジタル アーティファクト、相互運用可能な IP、ゲーム化されたエクスペリエンスを通じたクリエイターの権限付与に重点を置いたネットワーク状態を構築します。</p>",
            },
            q2: {
              question: "AILUコレクションとは何ですか？",
              answer:
                "<p>AILUは、Endangered Labsによる最初のコレクションです。 <br/><br/> 3D、リグ付き、サイバネティックなパンダアバターのコレクションであり、社会ネットワークとゲームエンジンで摩擦のないコンテンツ生成を実現するための疑名主義者クリエイター経済のエンパワーメントを促進することを目的としています。 <br/><br/> Ailuを使用すると、事前に3D、アニメーション、モーションキャプチャーの経験がなくても、顔や体のトラッキングを使用してコンテンツを作成できます。 </p>",
            },
            q3: {
              question: "AILUで何ができますか？",
              answer:
                "<p>コミュニティの全てのメンバーに、創造力、情熱、そしてインスピレーションを開放し、オープンメタバースを構築することを推奨しています。 <br/><br/> Unreal Engine 5、Blender、Zbrush、Maya、Solidity、Rust、Pythonなどの創造的なソフトウェアやコーディング言語について、Ailuごとに協力して学び合うことを強くお勧めします。 <br/><br/> Ailuを活用する方法：パンダのユニークな物語を創作すること。仮想インフルエンサーとしてのブランドを構築すること。キャラクターとして音楽を制作してMetastarになること。アニメーションを作成すること。ウェアラブルを設計すること。3Dプリントすること。 <br/><br/> 可能性は無限で、コンテンツ作成の可能性はまだまだ開拓中です。 </p>",
            },
            q4: {
              question: "リリース日とミント価格はいくらですか？",
              answer:
                "<p>コレクションの提供に近づくにつれて、ミントの日付と価格の詳細は私たちのTwitterで発表されます。</p>",
            },
            q5: {
              question: "確実なミントリストはありますか？",
              answer:
                '<p><a href="https://twitter.com/Ailu2100" target="_blank">{\'@\'}endangeredlabs</a>をフォローして確認してください。</p>',
            },
            q6: {
              question: "AILUの所有者はどの知的財産権を持っていますか？",
              answer:
                '<p>AILUの所有者は商業上の全ての権利を持っています。詳細は<a href="Endangered_Labs_Terms.pdf" target="_blank">利用規約</a>をご覧ください。</p>',
            },
            q7: {
              question: "ロードマップはありますか？",
              answer:
                "<p>Web3は常に変化しており、Endangered Labsは進化する未来に適応するために構築されています。私たちは成功した製品を提供するために柔軟である必要があるため、厳格なロードマップにとらわれたくありません。<br/><br/>私たちの目標は実行と提供です。ロードマップは必要ありません。<br/><br/>現時点では、Narrativeを読むことで私たちが取り組んでいることを把握できます。</p>",
            },
          },
        },
        footer: {
          backtotop: "トップに戻る",
          followus: "フォローする",
          ontwitter: "𝕏上で",
          contact: "お問い合わせ",
          terms: "利用規約",
          privacy: "プライバシー",
        },
        downloadmodule: {
          title: "ファイルのダウンロード",
          model: "3Dモデル",
          fullview: "全景",
          nobackground: "背景なし",
          glb: "glb ファイル",
          png: "pngファイル",
          pfp: "PFP",
          nobg: "背景なし",
          modelA: "モデル - ポーズ A",
          modelT: "モデル - ポーズ T",
        },
      };
    var Ym = i("1344");
    const Zm = {
        install(e) {
          0;
        },
      },
      Km = Object(d["a"])({
        history: Object(d["b"])(),
        base: "/",
        fallback: !0,
        routes: Wm,
      }),
      Qm = Object(Fm["a"])({
        locale: "EN",
        fallbackLocale: "EN",
        silentTranslationWarn: !0,
        missingWarn: !1,
        fallbackWarn: !1,
        warnHtmlMessage: !1,
        warnHtmlInMessage: "off",
        messages: { EN: zm, FR: qm, ES: Hm, CH: Vm, JP: Gm },
      }),
      Jm = Object(s["e"])(l);
    Jm.use(Zm),
      Jm.use(Km),
      Jm.use(Qm),
      (Jm.config.globalProperties.$config = _o);
    const Xm = Object(Ym["a"])();
    (Jm.config.globalProperties.emitter = Xm), Jm.mount("#vue");
  },
  "585a": function (e, t, i) {
    "use strict";
    i("20fc");
  },
  "59bc": function (e, t, i) {
    "use strict";
    i("c231");
  },
  "5d59": function (e, t, i) {
    "use strict";
    i("8e8b");
  },
  "64dc": function (e, t, i) {},
  "7e59": function (e, t, i) {
    "use strict";
    i("babb");
  },
  "7e7d": function (e, t, i) {},
  "7eef": function (e, t, i) {
    "use strict";
    i("4f7c");
  },
  "829b": function (e, t, i) {},
  "8c2e": function (e, t, i) {
    "use strict";
    i("df75");
  },
  "8e8b": function (e, t, i) {},
  9192: function (e, t, i) {
    "use strict";
    i("2d67");
  },
  "999d": function (e, t, i) {},
  "9a2e": function (e, t, i) {
    "use strict";
    i("e397");
  },
  a1c3: function (e, t, i) {
    "use strict";
    i("00ac");
  },
  a421: function (e, t, i) {
    "use strict";
    i("1275");
  },
  a428: function (e, t, i) {
    "use strict";
    i("829b");
  },
  a7a3: function (e, t, i) {
    "use strict";
    i("f99d");
  },
  b827: function (e, t, i) {
    "use strict";
    i("c679");
  },
  ba03: function (e, t, i) {},
  babb: function (e, t, i) {},
  c231: function (e, t, i) {},
  c4b0: function (e, t, i) {
    "use strict";
    i("e29d");
  },
  c679: function (e, t, i) {},
  ce25: function (e, t, i) {},
  d055: function (e, t, i) {},
  dac6: function (e, t, i) {
    "use strict";
    i("ce25");
  },
  df75: function (e, t, i) {},
  e29d: function (e, t, i) {},
  e397: function (e, t, i) {},
  f6df: function (e, t, i) {
    "use strict";
    i("64dc");
  },
  f99d: function (e, t, i) {},
  ffc5: function (e, t, i) {},
});
//# sourceMappingURL=app.e8a029bc.js.map
