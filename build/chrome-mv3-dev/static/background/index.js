(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jNzCU":[function(require,module,exports) {
var u = typeof globalThis.process < "u" ? globalThis.process.argv : [];
var h = ()=>typeof globalThis.process < "u" ? globalThis.process.env : {};
var B = new Set(u), _ = (e)=>B.has(e), G = u.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var U = _("--dry-run"), g = ()=>_("--verbose") || h().VERBOSE === "true", N = g();
var m = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var y = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), b = (...e)=>m("\uD83D\uDD35 INFO", ...e), f = (...e)=>m("\uD83D\uDFE0 WARN", ...e), M = 0, i = (...e)=>g() && m(`\u{1F7E1} ${M++}`, ...e);
var v = ()=>{
    let e = globalThis.browser?.runtime || globalThis.chrome?.runtime, t = ()=>setInterval(e.getPlatformInfo, 24e3);
    e.onStartup.addListener(t), t();
};
var n = {
    "isContentScript": false,
    "isBackground": true,
    "isReact": false,
    "runtimes": [
        "background-service-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/andororo/Docs/Projects/leetcode_despair/leetcode-despair/.plasmo/static/background/index.ts",
    "bundleId": "c338908e704c91f1",
    "envHash": "d99a5ffa57acd638",
    "verbose": "false",
    "secure": false,
    "serverPort": 60250
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function H(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = H;
module.bundle.hotData = {};
var c = globalThis.browser || globalThis.chrome || null;
function R() {
    return !n.host || n.host === "0.0.0.0" ? location.protocol.indexOf("http") === 0 ? location.hostname : "localhost" : n.host;
}
function x() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function d() {
    return n.port || location.port;
}
var P = "__plasmo_runtime_page_", S = "__plasmo_runtime_script_";
var O = `${n.secure ? "https" : "http"}://${R()}:${d()}/`;
async function k(e = 1470) {
    for(;;)try {
        await fetch(O);
        break;
    } catch  {
        await new Promise((o)=>setTimeout(o, e));
    }
}
if (c.runtime.getManifest().manifest_version === 3) {
    let e = c.runtime.getURL("/__plasmo_hmr_proxy__?url=");
    globalThis.addEventListener("fetch", function(t) {
        let o = t.request.url;
        if (o.startsWith(e)) {
            let s = new URL(decodeURIComponent(o.slice(e.length)));
            s.hostname === n.host && s.port === `${n.port}` ? (s.searchParams.set("t", Date.now().toString()), t.respondWith(fetch(s).then((r)=>new Response(r.body, {
                    headers: {
                        "Content-Type": r.headers.get("Content-Type") ?? "text/javascript"
                    }
                })))) : t.respondWith(new Response("Plasmo HMR", {
                status: 200,
                statusText: "Testing"
            }));
        }
    });
}
function E(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function C(e = d()) {
    let t = x();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function T(e) {
    typeof e.message == "string" && y("[plasmo/parcel-runtime]: " + e.message);
}
function L(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C(Number(d()) + 1));
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        await e(s);
    }), t.addEventListener("error", T), t;
}
function A(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(C());
    return t.addEventListener("message", async function(o) {
        let s = JSON.parse(o.data);
        if (s.type === "update" && await e(s.assets), s.type === "error") for (let r of s.diagnostics.ansi){
            let l = r.codeframe || r.stack;
            f("[plasmo/parcel-runtime]: " + r.message + `
` + l + `

` + r.hints.join(`
`));
        }
    }), t.addEventListener("error", T), t.addEventListener("open", ()=>{
        b(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        f(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var w = module.bundle.parent, a = {
    buildReady: !1,
    bgChanged: !1,
    csChanged: !1,
    pageChanged: !1,
    scriptPorts: new Set,
    pagePorts: new Set
};
async function p(e = !1) {
    if (e || a.buildReady && a.pageChanged) {
        i("BGSW Runtime - reloading Page");
        for (let t of a.pagePorts)t.postMessage(null);
    }
    if (e || a.buildReady && (a.bgChanged || a.csChanged)) {
        i("BGSW Runtime - reloading CS");
        let t = await c?.tabs.query({
            active: !0
        });
        for (let o of a.scriptPorts){
            let s = t.some((r)=>r.id === o.sender.tab?.id);
            o.postMessage({
                __plasmo_cs_active_tab__: s
            });
        }
        c.runtime.reload();
    }
}
if (!w || !w.isParcelRequire) {
    v();
    let e = A(async (t)=>{
        i("BGSW Runtime - On HMR Update"), a.bgChanged ||= t.filter((s)=>s.envHash === n.envHash).some((s)=>E(module.bundle, s.id));
        let o = t.find((s)=>s.type === "json");
        if (o) {
            let s = new Set(t.map((l)=>l.id)), r = Object.values(o.depsByBundle).map((l)=>Object.values(l)).flat();
            a.bgChanged ||= r.every((l)=>s.has(l));
        }
        p();
    });
    e.addEventListener("open", ()=>{
        let t = setInterval(()=>e.send("ping"), 24e3);
        e.addEventListener("close", ()=>clearInterval(t));
    }), e.addEventListener("close", async ()=>{
        await k(), p(!0);
    });
}
L(async (e)=>{
    switch(i("BGSW Runtime - On Build Repackaged"), e.type){
        case "build_ready":
            a.buildReady ||= !0, p();
            break;
        case "cs_changed":
            a.csChanged ||= !0, p();
            break;
    }
});
c.runtime.onConnect.addListener(function(e) {
    let t = e.name.startsWith(P), o = e.name.startsWith(S);
    if (t || o) {
        let s = t ? a.pagePorts : a.scriptPorts;
        s.add(e), e.onDisconnect.addListener(()=>{
            s.delete(e);
        }), e.onMessage.addListener(function(r) {
            i("BGSW Runtime - On source changed", r), r.__plasmo_cs_changed__ && (a.csChanged ||= !0), r.__plasmo_page_changed__ && (a.pageChanged ||= !0), p();
        });
    }
});
c.runtime.onMessage.addListener(function(t) {
    return t.__plasmo_full_reload__ && (i("BGSW Runtime - On top-level code changed"), p()), !0;
});

},{}],"8oeFb":[function(require,module,exports) {
var _background = require("../../../background");

},{"../../../background":"14rpM"}],"14rpM":[function(require,module,exports) {
// /**
//  * Updating a redirect rule using the Declarative Net Request API in a Chrome extension. 
//  * @param newRedirectUrl 
//  */
// async function setRedirectRule (newRedirectUrl: string) {
//   let newRedirectRule = {
//     id: 1,
//     priority: 1,
//     action: {
//         type: 'redirect',
//         redirect: { url: newRedirectUrl } 
//     },
//     condition: {
//         urlFilter: "*://*/*",
//         excludedInitiatorDomains: [
//           "leetcode.com",
//           "www.leetcode.com",
//           "developer.chrome.com"
//         ],
//         resourceTypes: ["main_frame"]
//       }
//     }
//     // console.log("New Redirect Rule:", newRedirectRule);
//     try{
//       //Ensure that the chrome.declarativeNetRequest.updateDynamicRules method is available in your Chrome environment
//       if (chrome && chrome.declarativeNetRequest && chrome.declarativeNetRequest.updateDynamicRules){
//         await chrome.declarativeNetRequest.updateDynamicRules({
//           removeRuleIds: [1],
//           //@ts-ignore
//           addRules: [newRedirectRule]
//         });
//       console.log("redirect Rule updated")
//       }else {
//         console.log("chrome.declarativeNetRequest.updateDynamicRules is not available");
//       }
//   }catch(error){
//     console.error("Error changing rule:", error);
//     console.log("Did not change rule");
//   }
// }
// setRedirectRule("https://leetcode.com/problemset/all/");
// //Helper function
// const isSubmissionSuccessURL = (url: string) =>
//   url.includes("/submissions/detail/") && url.includes("/check/")
// 
// async function fetchData() {
//   try {
//     const response = await fetch("https://leetcode.com/problems/two-sum/description/");
//     // Check if the request was successful (status code in the range of 200-299)
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.text(); // Use response.text() for HTML content
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }
// fetchData();
/**
 * Generate Random Leetcode URL to redirect to
 */ var _storage = require("./storage");
// Get Problem List from leetcode graphql API
const getProblemListFromLeetCodeAPI = async (difficulty, problemSet)=>{
    try {
        const query = `
      query problemsetQuestionList {
        problemsetQuestionList: questionList(
          categorySlug: ""
          limit: -1
          skip: 0
          filters: {
            ${difficulty && difficulty !== "all" ? "difficulty: " + difficulty : ""}
            ${problemSet?.length ? 'listId: "' + problemSet + '"' : ""}
          }
        ) {
          questions: data {
            acRate
            difficulty
            freqBar
            frontendQuestionId: questionFrontendId
            isFavor
            paidOnly: isPaidOnly
            status
            title
            titleSlug
            topicTags {
              name
              id
              slug
            }
            hasSolution
            hasVideoSolution
          }
        }
      }
    `;
        const body = {
            query
        };
        const response = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const responseData = await response.json();
        await (0, _storage.storage).updatePermissions(true);
        return responseData.data.problemsetQuestionList.questions;
    } catch (error) {
        console.log(error.toString());
        if (error.message.includes("NetworkError") || error.message.includes("CORS") || error.message === "Network response was not ok") {
            console.log("CORS error detected.");
            await (0, _storage.storage).updatePermissions(false);
        }
        return undefined;
    }
};
async function generateRandomLeetCodeProblem() {
    try {
        const problemSet = await (0, _storage.storage).getProblemSet();
        const difficulty = await (0, _storage.storage).getDifficulty();
        const includePremium = await (0, _storage.storage).getIncludePremium();
        let leetCodeProblems = [];
        // Check if list is from Leetcode Graphql or all
        if (problemSet === "all" || problemSet.startsWith("lg")) {
            await (0, _storage.storage).initiateLoading();
            // Remove lg- or all from string for better logic processing
            leetCodeProblems = await getProblemListFromLeetCodeAPI(difficulty, problemSet?.slice(3) || "");
            let randomIndex = Math.floor(Math.random() * leetCodeProblems.length);
            while(leetCodeProblems[randomIndex].paidOnly){
                randomIndex++;
                randomIndex = (leetCodeProblems.length + randomIndex) % leetCodeProblems.length;
            }
            const randomProblem = leetCodeProblems[randomIndex];
            // Replace anything that is not a string or whitespace with "" then replace empty spaces with "-"
            const randomProblemURL = "https://leetcode.com/problems/" + randomProblem.title.trim().replace(/[^a-zA-Z\s]/g, "").replace(/\s+/g, "-").toLowerCase() + "/";
            const randomProblemName = randomProblem.title;
            // await storage.set("loading", false)
            await (0, _storage.storage).stopLoading();
            return {
                url: randomProblemURL,
                name: randomProblemName
            };
        } else {
            // TODO: Need to find a way to filter out premium problems for these JSON files
            const problemSetURLs = {
                allNeetcode: "leetcode-problems/allProblems.json",
                NeetCode150: "leetcode-problems/neetCode150Problems.json",
                Blind75: "leetcode-problems/blind75Problems.json"
            };
            const res = await fetch(chrome.runtime.getURL(problemSetURLs[problemSet]));
            leetCodeProblems = await res.json();
            leetCodeProblems = leetCodeProblems.filter((problem)=>{
                return (includePremium || !problem.isPremium) && (difficulty == "all" || problem.difficulty.toLowerCase() === difficulty.toLowerCase());
            });
            let randomIndex = Math.floor(Math.random() * leetCodeProblems.length);
            const randomProblem = leetCodeProblems[randomIndex];
            const randomProblemURL = randomProblem.href;
            const randomProblemName = randomProblem.text;
            return {
                url: randomProblemURL,
                name: randomProblemName
            };
        }
    } catch (error) {
        console.error("Error generating random problem", error);
        return undefined;
    } finally{
        await (0, _storage.storage).stopLoading();
    }
}

},{"./storage":"5BWMO"}],"5BWMO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getProblemUrl", ()=>getProblemUrl);
parcelHelpers.export(exports, "getProblemSet", ()=>getProblemSet);
parcelHelpers.export(exports, "getDifficulty", ()=>getDifficulty);
parcelHelpers.export(exports, "getIncludePremium", ()=>getIncludePremium);
parcelHelpers.export(exports, "getProblemSolved", ()=>getProblemSolved);
parcelHelpers.export(exports, "initiateLoading", ()=>initiateLoading);
parcelHelpers.export(exports, "stopLoading", ()=>stopLoading);
parcelHelpers.export(exports, "getHyperTortureMode", ()=>getHyperTortureMode);
parcelHelpers.export(exports, "updateProblem", ()=>updateProblem);
parcelHelpers.export(exports, "updatePermissions", ()=>updatePermissions);
parcelHelpers.export(exports, "getLastCompletion", ()=>getLastCompletion);
parcelHelpers.export(exports, "updateStreak", ()=>updateStreak);
parcelHelpers.export(exports, "resetStreak", ()=>resetStreak);
parcelHelpers.export(exports, "resetHyperTortureStreak", ()=>resetHyperTortureStreak);
parcelHelpers.export(exports, "storage", ()=>_storage1);
var _storage = require("@plasmohq/storage");
var _storage1 = require("storage");
const storage = new (0, _storage.Storage)();
const getProblemUrl = async ()=>await storage.get("problemURL");
const getProblemSet = async ()=>await storage.get("problemSets") ?? "all";
const getDifficulty = async ()=>await storage.get("difficulty") ?? "all";
const getIncludePremium = async ()=>Boolean(await storage.get("includePremium")) ?? false;
const getProblemSolved = async ()=>Boolean(await storage.get("leetCodeProblemSolved")) ?? false;
const initiateLoading = async ()=>await storage.set("loading", true);
const stopLoading = async ()=>await storage.set("loading", false);
const getHyperTortureMode = async ()=>!!await storage.get("hyperTortureMode");
async function updateProblem(problem, isSolved) {
    return Promise.all([
        storage.set("problemURL", problem.url),
        storage.set("problemName", problem.name),
        storage.set("problemDate", new Date().toDateString()),
        updateProblemSolvedState(isSolved)
    ]);
}
async function updatePermissions(enabled) {
    await storage.set("permissionsEnabled", enabled);
}
// TODO: Maybe this needs to be exported for clarity (instead of being used in updateProblem and updateStreak)
async function updateProblemSolvedState(isSolved) {
    await storage.set("leetCodeProblemSolved", isSolved);
}
async function getLastCompletion() {
    const lastCompletedString = await storage.get("lastCompleted");
    // Returns Unix Epoch if item is null
    return lastCompletedString ? new Date(lastCompletedString) : new Date(0);
}
async function updateStreak() {
    if (await getHyperTortureMode()) {
        // Update hyper torture streak
        const [HT_bestStreak, HT_currentStreak] = await Promise.all([
            storage.get("HT_bestStreak"),
            storage.get("HT_currentStreak")
        ]);
        const HT_newStreak = (Number(HT_currentStreak) || 0) + 1;
        const HT_best = Number(HT_bestStreak) || 0;
        await storage.set("HT_currentStreak", HT_newStreak);
        // If new hyper torture streak higher than best hyper torture streak, update it
        if (HT_newStreak > HT_best) await storage.set("HT_bestStreak", HT_newStreak);
    } else {
        const [_, lastCompletion] = await Promise.all([
            updateProblemSolvedState(true),
            getLastCompletion()
        ]);
        const now = new Date();
        if (lastCompletion.toDateString() === new Date().toDateString()) return;
        const [bestStreak, currentStreak] = await Promise.all([
            storage.get("bestStreak"),
            storage.get("currentStreak")
        ]);
        const newStreak = (Number(currentStreak) || 0) + 1;
        const best = Number(bestStreak) || 0;
        await storage.set("currentStreak", newStreak);
        await storage.set("lastCompleted", now.toDateString());
        if (newStreak > best) await storage.set("bestStreak", newStreak);
    }
}
async function resetStreak() {
    await storage.set("currentStreak", 0);
}
async function resetHyperTortureStreak() {
    await storage.set("HT_currentStreak", 0);
}

},{"@plasmohq/storage":"aP4Cq","storage":"5BWMO","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"aP4Cq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseStorage", ()=>o);
parcelHelpers.export(exports, "Storage", ()=>l);
var _pify = require("pify");
var _pifyDefault = parcelHelpers.interopDefault(_pify);
var h = ()=>{
    try {
        let e = globalThis.navigator?.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (e[1] === "Chrome") return parseInt(e[2]) < 100 || globalThis.chrome.runtime?.getManifest()?.manifest_version === 2;
    } catch  {
        return !1;
    }
    return !1;
};
var o = class {
    #a;
    #e;
    get primaryClient() {
        return this.#e;
    }
    #t;
    get secondaryClient() {
        return this.#t;
    }
    #r;
    get area() {
        return this.#r;
    }
    get hasWebApi() {
        try {
            return typeof window < "u" && !!window.localStorage;
        } catch (e) {
            return console.error(e), !1;
        }
    }
    #s = new Map;
    #i;
    get copiedKeySet() {
        return this.#i;
    }
    isCopied = (e)=>this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
    #n = !1;
    get allCopied() {
        return this.#n;
    }
    getExtStorageApi = ()=>globalThis.browser?.storage || globalThis.chrome?.storage;
    get hasExtensionApi() {
        try {
            return !!this.getExtStorageApi();
        } catch (e) {
            return console.error(e), !1;
        }
    }
    isWatchSupported = ()=>this.hasExtensionApi;
    keyNamespace = "";
    isValidKey = (e)=>e.startsWith(this.keyNamespace);
    getNamespacedKey = (e)=>`${this.keyNamespace}${e}`;
    getUnnamespacedKey = (e)=>e.slice(this.keyNamespace.length);
    constructor({ area: e = "sync", allCopied: t = !1, copiedKeyList: s = [] } = {}){
        this.setCopiedKeySet(s), this.#r = e, this.#n = t;
        try {
            this.hasWebApi && (t || s.length > 0) && (this.#t = window.localStorage);
        } catch  {}
        try {
            this.hasExtensionApi && (this.#a = this.getExtStorageApi(), h() ? this.#e = (0, _pifyDefault.default)(this.#a[this.area], {
                exclude: [
                    "getBytesInUse"
                ],
                errorFirst: !1
            }) : this.#e = this.#a[this.area]);
        } catch  {}
    }
    setCopiedKeySet(e) {
        this.#i = new Set(e);
    }
    rawGetAll = ()=>this.#e?.get();
    getAll = async ()=>{
        let e = await this.rawGetAll();
        return Object.entries(e).filter(([t])=>this.isValidKey(t)).reduce((t, [s, a])=>(t[this.getUnnamespacedKey(s)] = a, t), {});
    };
    copy = async (e)=>{
        let t = e === void 0;
        if (!t && !this.copiedKeySet.has(e) || !this.allCopied || !this.hasExtensionApi) return !1;
        let s = this.allCopied ? await this.rawGetAll() : await this.#e.get((t ? [
            ...this.copiedKeySet
        ] : [
            e
        ]).map(this.getNamespacedKey));
        if (!s) return !1;
        let a = !1;
        for(let r in s){
            let i = s[r], n = this.#t?.getItem(r);
            this.#t?.setItem(r, i), a ||= i !== n;
        }
        return a;
    };
    rawGet = async (e)=>this.hasExtensionApi ? (await this.#e.get(e))[e] : this.isCopied(e) ? this.#t?.getItem(e) : null;
    rawSet = async (e, t)=>(this.isCopied(e) && this.#t?.setItem(e, t), this.hasExtensionApi && await this.#e.set({
            [e]: t
        }), null);
    clear = async (e = !1)=>{
        e && this.#t?.clear(), await this.#e.clear();
    };
    rawRemove = async (e)=>{
        this.isCopied(e) && this.#t?.removeItem(e), this.hasExtensionApi && await this.#e.remove(e);
    };
    removeAll = async ()=>{
        let e = await this.rawGetAll(), t = Object.keys(e);
        await Promise.all(t.map(this.rawRemove));
    };
    watch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#o(e), t;
    };
    #o = (e)=>{
        for(let t in e){
            let s = this.getNamespacedKey(t), a = this.#s.get(s)?.callbackSet || new Set;
            if (a.add(e[t]), a.size > 1) continue;
            let r = (i, n)=>{
                if (n !== this.area || !i[s]) return;
                let g = this.#s.get(s);
                Promise.all([
                    this.parseValue(i[s].newValue),
                    this.parseValue(i[s].oldValue)
                ]).then(([p, m])=>{
                    for (let d of g.callbackSet)d({
                        newValue: p,
                        oldValue: m
                    }, n);
                });
            };
            this.#a.onChanged.addListener(r), this.#s.set(s, {
                callbackSet: a,
                listener: r
            });
        }
    };
    unwatch = (e)=>{
        let t = this.isWatchSupported();
        return t && this.#c(e), t;
    };
    #c(e) {
        for(let t in e){
            let s = this.getNamespacedKey(t), a = e[t];
            if (this.#s.has(s)) {
                let r = this.#s.get(s);
                r.callbackSet.delete(a), r.callbackSet.size === 0 && (this.#s.delete(s), this.#a.onChanged.removeListener(r.listener));
            }
        }
    }
    unwatchAll = ()=>this.#h();
    #h() {
        this.#s.forEach(({ listener: e })=>this.#a.onChanged.removeListener(e)), this.#s.clear();
    }
    async getItem(e) {
        return this.get(e);
    }
    async setItem(e, t) {
        await this.set(e, t);
    }
    async removeItem(e) {
        return this.remove(e);
    }
}, l = class extends o {
    get = async (e)=>{
        let t = this.getNamespacedKey(e), s = await this.rawGet(t);
        return this.parseValue(s);
    };
    set = async (e, t)=>{
        let s = this.getNamespacedKey(e), a = JSON.stringify(t);
        return this.rawSet(s, a);
    };
    remove = async (e)=>{
        let t = this.getNamespacedKey(e);
        return this.rawRemove(t);
    };
    setNamespace = (e)=>{
        this.keyNamespace = e;
    };
    parseValue = async (e)=>{
        try {
            if (e !== void 0) return JSON.parse(e);
        } catch (t) {
            console.error(t);
        }
    };
};

},{"pify":"1siwu","@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"1siwu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>pify);
const processFunction = (function_, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(function_, self, arguments_);
        });
    };
const filterCache = new WeakMap();
function pify(input, options) {
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === "object" || objectType === "function"))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? "null" : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === "string" || typeof key === "symbol" ? key === pattern : pattern.test(key);
        const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = descriptor === undefined || descriptor.writable || descriptor.configurable;
        const included = options.include ? options.include.some((element)=>match(element)) : !options.exclude.some((element)=>match(element));
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFunction(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === "function") {
                const pified = processFunction(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5G9Z5"}],"5G9Z5":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["jNzCU","8oeFb"], "8oeFb", "parcelRequirec814")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksU0FBVSxNQUFNLEVBQUUsSUFBSTtJQUN4QyxPQUFPLEtBQUssUUFBUSxRQUFRLFNBQVUsR0FBRztRQUN2QyxJQUFJLFFBQVEsYUFBYSxRQUFRLGdCQUFnQixLQUFLLGVBQWUsTUFDbkU7UUFHRixPQUFPLGVBQWUsTUFBTSxLQUFLO1lBQy9CLFlBQVk7WUFDWixLQUFLO2dCQUNILE9BQU8sTUFBTSxDQUFDLElBQUk7WUFDcEI7UUFDRjtJQUNGO0lBRUEsT0FBTztBQUNUO0FBRUEsUUFBUSxTQUFTLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0lBQzVDLE9BQU8sZUFBZSxNQUFNLFVBQVU7UUFDcEMsWUFBWTtRQUNaLEtBQUs7SUFDUDtBQUNGIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvLnBucG0vQHBsYXNtb2hxK3BhcmNlbC1ydW50aW1lQDAuMjMuMC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1ydW50aW1lL2Rpc3QvcnVudGltZS1hMzZlYTcwYWZmNmQ0MWQwLmpzIiwiLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50cyIsImJhY2tncm91bmQudHMiLCJzdG9yYWdlLnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwbGFzbW9ocStzdG9yYWdlQDEuOS4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3N0b3JhZ2UvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9waWZ5QDYuMS4wL25vZGVfbW9kdWxlcy9waWZ5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItanNAMi45LjNfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3RyYW5zZm9ybWVyLWpzL3NyYy9lc21vZHVsZS1oZWxwZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB1PXR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmFyZ3Y6W107dmFyIGg9KCk9PnR5cGVvZiBnbG9iYWxUaGlzLnByb2Nlc3M8XCJ1XCI/Z2xvYmFsVGhpcy5wcm9jZXNzLmVudjp7fTt2YXIgQj1uZXcgU2V0KHUpLF89ZT0+Qi5oYXMoZSksRz11LmZpbHRlcihlPT5lLnN0YXJ0c1dpdGgoXCItLVwiKSYmZS5pbmNsdWRlcyhcIj1cIikpLm1hcChlPT5lLnNwbGl0KFwiPVwiKSkucmVkdWNlKChlLFt0LG9dKT0+KGVbdF09byxlKSx7fSk7dmFyIFU9XyhcIi0tZHJ5LXJ1blwiKSxnPSgpPT5fKFwiLS12ZXJib3NlXCIpfHxoKCkuVkVSQk9TRT09PVwidHJ1ZVwiLE49ZygpO3ZhciBtPShlPVwiXCIsLi4udCk9PmNvbnNvbGUubG9nKGUucGFkRW5kKDkpLFwifFwiLC4uLnQpO3ZhciB5PSguLi5lKT0+Y29uc29sZS5lcnJvcihcIlxcdXsxRjUzNH0gRVJST1JcIi5wYWRFbmQoOSksXCJ8XCIsLi4uZSksYj0oLi4uZSk9Pm0oXCJcXHV7MUY1MzV9IElORk9cIiwuLi5lKSxmPSguLi5lKT0+bShcIlxcdXsxRjdFMH0gV0FSTlwiLC4uLmUpLE09MCxpPSguLi5lKT0+ZygpJiZtKGBcXHV7MUY3RTF9ICR7TSsrfWAsLi4uZSk7dmFyIHY9KCk9PntsZXQgZT1nbG9iYWxUaGlzLmJyb3dzZXI/LnJ1bnRpbWV8fGdsb2JhbFRoaXMuY2hyb21lPy5ydW50aW1lLHQ9KCk9PnNldEludGVydmFsKGUuZ2V0UGxhdGZvcm1JbmZvLDI0ZTMpO2Uub25TdGFydHVwLmFkZExpc3RlbmVyKHQpLHQoKX07dmFyIG49e1wiaXNDb250ZW50U2NyaXB0XCI6ZmFsc2UsXCJpc0JhY2tncm91bmRcIjp0cnVlLFwiaXNSZWFjdFwiOmZhbHNlLFwicnVudGltZXNcIjpbXCJiYWNrZ3JvdW5kLXNlcnZpY2UtcnVudGltZVwiXSxcImhvc3RcIjpcImxvY2FsaG9zdFwiLFwicG9ydFwiOjE4MTUsXCJlbnRyeUZpbGVQYXRoXCI6XCIvVXNlcnMvYW5kb3Jvcm8vRG9jcy9Qcm9qZWN0cy9sZWV0Y29kZV9kZXNwYWlyL2xlZXRjb2RlLWRlc3BhaXIvLnBsYXNtby9zdGF0aWMvYmFja2dyb3VuZC9pbmRleC50c1wiLFwiYnVuZGxlSWRcIjpcImMzMzg5MDhlNzA0YzkxZjFcIixcImVudkhhc2hcIjpcImQ5OWE1ZmZhNTdhY2Q2MzhcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo2MDI1MH07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBIKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9SDttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGM9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBSKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/bG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIik9PT0wP2xvY2F0aW9uLmhvc3RuYW1lOlwibG9jYWxob3N0XCI6bi5ob3N0fWZ1bmN0aW9uIHgoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBkKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgUD1cIl9fcGxhc21vX3J1bnRpbWVfcGFnZV9cIixTPVwiX19wbGFzbW9fcnVudGltZV9zY3JpcHRfXCI7dmFyIE89YCR7bi5zZWN1cmU/XCJodHRwc1wiOlwiaHR0cFwifTovLyR7UigpfToke2QoKX0vYDthc3luYyBmdW5jdGlvbiBrKGU9MTQ3MCl7Zm9yKDs7KXRyeXthd2FpdCBmZXRjaChPKTticmVha31jYXRjaHthd2FpdCBuZXcgUHJvbWlzZShvPT5zZXRUaW1lb3V0KG8sZSkpfX1pZihjLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uPT09Myl7bGV0IGU9Yy5ydW50aW1lLmdldFVSTChcIi9fX3BsYXNtb19obXJfcHJveHlfXz91cmw9XCIpO2dsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImZldGNoXCIsZnVuY3Rpb24odCl7bGV0IG89dC5yZXF1ZXN0LnVybDtpZihvLnN0YXJ0c1dpdGgoZSkpe2xldCBzPW5ldyBVUkwoZGVjb2RlVVJJQ29tcG9uZW50KG8uc2xpY2UoZS5sZW5ndGgpKSk7cy5ob3N0bmFtZT09PW4uaG9zdCYmcy5wb3J0PT09YCR7bi5wb3J0fWA/KHMuc2VhcmNoUGFyYW1zLnNldChcInRcIixEYXRlLm5vdygpLnRvU3RyaW5nKCkpLHQucmVzcG9uZFdpdGgoZmV0Y2gocykudGhlbihyPT5uZXcgUmVzcG9uc2Uoci5ib2R5LHtoZWFkZXJzOntcIkNvbnRlbnQtVHlwZVwiOnIuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik/P1widGV4dC9qYXZhc2NyaXB0XCJ9fSkpKSk6dC5yZXNwb25kV2l0aChuZXcgUmVzcG9uc2UoXCJQbGFzbW8gSE1SXCIse3N0YXR1czoyMDAsc3RhdHVzVGV4dDpcIlRlc3RpbmdcIn0pKX19KX1mdW5jdGlvbiBFKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gQyhlPWQoKSl7bGV0IHQ9eCgpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIFQoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIEwoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KEMoTnVtYmVyKGQoKSkrMSkpO3JldHVybiB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsYXN5bmMgZnVuY3Rpb24obyl7bGV0IHM9SlNPTi5wYXJzZShvLmRhdGEpO2F3YWl0IGUocyl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLFQpLHR9ZnVuY3Rpb24gQShlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoQygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCBzPUpTT04ucGFyc2Uoby5kYXRhKTtpZihzLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHMuYXNzZXRzKSxzLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCByIG9mIHMuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IGw9ci5jb2RlZnJhbWV8fHIuc3RhY2s7ZihcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIityLm1lc3NhZ2UrYFxuYCtsK2BcblxuYCtyLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsVCksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57YihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PntmKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgdz1tb2R1bGUuYnVuZGxlLnBhcmVudCxhPXtidWlsZFJlYWR5OiExLGJnQ2hhbmdlZDohMSxjc0NoYW5nZWQ6ITEscGFnZUNoYW5nZWQ6ITEsc2NyaXB0UG9ydHM6bmV3IFNldCxwYWdlUG9ydHM6bmV3IFNldH07YXN5bmMgZnVuY3Rpb24gcChlPSExKXtpZihlfHxhLmJ1aWxkUmVhZHkmJmEucGFnZUNoYW5nZWQpe2koXCJCR1NXIFJ1bnRpbWUgLSByZWxvYWRpbmcgUGFnZVwiKTtmb3IobGV0IHQgb2YgYS5wYWdlUG9ydHMpdC5wb3N0TWVzc2FnZShudWxsKX1pZihlfHxhLmJ1aWxkUmVhZHkmJihhLmJnQ2hhbmdlZHx8YS5jc0NoYW5nZWQpKXtpKFwiQkdTVyBSdW50aW1lIC0gcmVsb2FkaW5nIENTXCIpO2xldCB0PWF3YWl0IGM/LnRhYnMucXVlcnkoe2FjdGl2ZTohMH0pO2ZvcihsZXQgbyBvZiBhLnNjcmlwdFBvcnRzKXtsZXQgcz10LnNvbWUocj0+ci5pZD09PW8uc2VuZGVyLnRhYj8uaWQpO28ucG9zdE1lc3NhZ2Uoe19fcGxhc21vX2NzX2FjdGl2ZV90YWJfXzpzfSl9Yy5ydW50aW1lLnJlbG9hZCgpfX1pZighd3x8IXcuaXNQYXJjZWxSZXF1aXJlKXt2KCk7bGV0IGU9QShhc3luYyB0PT57aShcIkJHU1cgUnVudGltZSAtIE9uIEhNUiBVcGRhdGVcIiksYS5iZ0NoYW5nZWR8fD10LmZpbHRlcihzPT5zLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUocz0+RShtb2R1bGUuYnVuZGxlLHMuaWQpKTtsZXQgbz10LmZpbmQocz0+cy50eXBlPT09XCJqc29uXCIpO2lmKG8pe2xldCBzPW5ldyBTZXQodC5tYXAobD0+bC5pZCkpLHI9T2JqZWN0LnZhbHVlcyhvLmRlcHNCeUJ1bmRsZSkubWFwKGw9Pk9iamVjdC52YWx1ZXMobCkpLmZsYXQoKTthLmJnQ2hhbmdlZHx8PXIuZXZlcnkobD0+cy5oYXMobCkpfXAoKX0pO2UuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e2xldCB0PXNldEludGVydmFsKCgpPT5lLnNlbmQoXCJwaW5nXCIpLDI0ZTMpO2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PmNsZWFySW50ZXJ2YWwodCkpfSksZS5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIixhc3luYygpPT57YXdhaXQgaygpLHAoITApfSl9TChhc3luYyBlPT57c3dpdGNoKGkoXCJCR1NXIFJ1bnRpbWUgLSBPbiBCdWlsZCBSZXBhY2thZ2VkXCIpLGUudHlwZSl7Y2FzZVwiYnVpbGRfcmVhZHlcIjp7YS5idWlsZFJlYWR5fHw9ITAscCgpO2JyZWFrfWNhc2VcImNzX2NoYW5nZWRcIjp7YS5jc0NoYW5nZWR8fD0hMCxwKCk7YnJlYWt9fX0pO2MucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoZnVuY3Rpb24oZSl7bGV0IHQ9ZS5uYW1lLnN0YXJ0c1dpdGgoUCksbz1lLm5hbWUuc3RhcnRzV2l0aChTKTtpZih0fHxvKXtsZXQgcz10P2EucGFnZVBvcnRzOmEuc2NyaXB0UG9ydHM7cy5hZGQoZSksZS5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCk9PntzLmRlbGV0ZShlKX0pLGUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uKHIpe2koXCJCR1NXIFJ1bnRpbWUgLSBPbiBzb3VyY2UgY2hhbmdlZFwiLHIpLHIuX19wbGFzbW9fY3NfY2hhbmdlZF9fJiYoYS5jc0NoYW5nZWR8fD0hMCksci5fX3BsYXNtb19wYWdlX2NoYW5nZWRfXyYmKGEucGFnZUNoYW5nZWR8fD0hMCkscCgpfSl9fSk7Yy5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbih0KXtyZXR1cm4gdC5fX3BsYXNtb19mdWxsX3JlbG9hZF9fJiYoaShcIkJHU1cgUnVudGltZSAtIE9uIHRvcC1sZXZlbCBjb2RlIGNoYW5nZWRcIikscCgpKSwhMH0pO1xuIiwiaW1wb3J0IFwiLi4vLi4vLi4vYmFja2dyb3VuZFwiIiwiLy8gLyoqXG4vLyAgKiBVcGRhdGluZyBhIHJlZGlyZWN0IHJ1bGUgdXNpbmcgdGhlIERlY2xhcmF0aXZlIE5ldCBSZXF1ZXN0IEFQSSBpbiBhIENocm9tZSBleHRlbnNpb24uIFxuLy8gICogQHBhcmFtIG5ld1JlZGlyZWN0VXJsIFxuLy8gICovXG4vLyBhc3luYyBmdW5jdGlvbiBzZXRSZWRpcmVjdFJ1bGUgKG5ld1JlZGlyZWN0VXJsOiBzdHJpbmcpIHtcbi8vICAgbGV0IG5ld1JlZGlyZWN0UnVsZSA9IHtcbi8vICAgICBpZDogMSxcbi8vICAgICBwcmlvcml0eTogMSxcbi8vICAgICBhY3Rpb246IHtcbi8vICAgICAgICAgdHlwZTogJ3JlZGlyZWN0Jyxcbi8vICAgICAgICAgcmVkaXJlY3Q6IHsgdXJsOiBuZXdSZWRpcmVjdFVybCB9IFxuLy8gICAgIH0sXG4vLyAgICAgY29uZGl0aW9uOiB7XG4vLyAgICAgICAgIHVybEZpbHRlcjogXCIqOi8vKi8qXCIsXG4vLyAgICAgICAgIGV4Y2x1ZGVkSW5pdGlhdG9yRG9tYWluczogW1xuLy8gICAgICAgICAgIFwibGVldGNvZGUuY29tXCIsXG4vLyAgICAgICAgICAgXCJ3d3cubGVldGNvZGUuY29tXCIsXG4vLyAgICAgICAgICAgXCJkZXZlbG9wZXIuY2hyb21lLmNvbVwiXG4vLyAgICAgICAgIF0sXG4vLyAgICAgICAgIHJlc291cmNlVHlwZXM6IFtcIm1haW5fZnJhbWVcIl1cbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJOZXcgUmVkaXJlY3QgUnVsZTpcIiwgbmV3UmVkaXJlY3RSdWxlKTtcbi8vICAgICB0cnl7XG4vLyAgICAgICAvL0Vuc3VyZSB0aGF0IHRoZSBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LnVwZGF0ZUR5bmFtaWNSdWxlcyBtZXRob2QgaXMgYXZhaWxhYmxlIGluIHlvdXIgQ2hyb21lIGVudmlyb25tZW50XG4vLyAgICAgICBpZiAoY2hyb21lICYmIGNocm9tZS5kZWNsYXJhdGl2ZU5ldFJlcXVlc3QgJiYgY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC51cGRhdGVEeW5hbWljUnVsZXMpe1xuLy8gICAgICAgICBhd2FpdCBjaHJvbWUuZGVjbGFyYXRpdmVOZXRSZXF1ZXN0LnVwZGF0ZUR5bmFtaWNSdWxlcyh7XG4vLyAgICAgICAgICAgcmVtb3ZlUnVsZUlkczogWzFdLFxuLy8gICAgICAgICAgIC8vQHRzLWlnbm9yZVxuLy8gICAgICAgICAgIGFkZFJ1bGVzOiBbbmV3UmVkaXJlY3RSdWxlXVxuLy8gICAgICAgICB9KTtcbi8vICAgICAgIGNvbnNvbGUubG9nKFwicmVkaXJlY3QgUnVsZSB1cGRhdGVkXCIpXG4vLyAgICAgICB9ZWxzZSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiY2hyb21lLmRlY2xhcmF0aXZlTmV0UmVxdWVzdC51cGRhdGVEeW5hbWljUnVsZXMgaXMgbm90IGF2YWlsYWJsZVwiKTtcbi8vICAgICAgIH1cbi8vICAgfWNhdGNoKGVycm9yKXtcbi8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY2hhbmdpbmcgcnVsZTpcIiwgZXJyb3IpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiRGlkIG5vdCBjaGFuZ2UgcnVsZVwiKTtcbi8vICAgfVxuLy8gfVxuLy8gc2V0UmVkaXJlY3RSdWxlKFwiaHR0cHM6Ly9sZWV0Y29kZS5jb20vcHJvYmxlbXNldC9hbGwvXCIpO1xuXG5cbi8vIC8vSGVscGVyIGZ1bmN0aW9uXG4vLyBjb25zdCBpc1N1Ym1pc3Npb25TdWNjZXNzVVJMID0gKHVybDogc3RyaW5nKSA9PlxuLy8gICB1cmwuaW5jbHVkZXMoXCIvc3VibWlzc2lvbnMvZGV0YWlsL1wiKSAmJiB1cmwuaW5jbHVkZXMoXCIvY2hlY2svXCIpXG5cbi8vIFxuICBcblxuXG4vLyBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbGVldGNvZGUuY29tL3Byb2JsZW1zL3R3by1zdW0vZGVzY3JpcHRpb24vXCIpO1xuICAgIFxuLy8gICAgIC8vIENoZWNrIGlmIHRoZSByZXF1ZXN0IHdhcyBzdWNjZXNzZnVsIChzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMjAwLTI5OSlcbi8vICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4vLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4vLyAgICAgfVxuXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTsgLy8gVXNlIHJlc3BvbnNlLnRleHQoKSBmb3IgSFRNTCBjb250ZW50XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbi8vICAgfVxuLy8gfVxuLy8gZmV0Y2hEYXRhKCk7XG5cblxuLyoqXG4gKiBHZW5lcmF0ZSBSYW5kb20gTGVldGNvZGUgVVJMIHRvIHJlZGlyZWN0IHRvXG4gKi9cblxuaW1wb3J0IHtzdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmFnZVwiXG5cblxuLy8gR2V0IFByb2JsZW0gTGlzdCBmcm9tIGxlZXRjb2RlIGdyYXBocWwgQVBJXG5jb25zdCBnZXRQcm9ibGVtTGlzdEZyb21MZWV0Q29kZUFQSSA9IGFzeW5jIChkaWZmaWN1bHR5LCBwcm9ibGVtU2V0KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcXVlcnkgPSBgXG4gICAgICBxdWVyeSBwcm9ibGVtc2V0UXVlc3Rpb25MaXN0IHtcbiAgICAgICAgcHJvYmxlbXNldFF1ZXN0aW9uTGlzdDogcXVlc3Rpb25MaXN0KFxuICAgICAgICAgIGNhdGVnb3J5U2x1ZzogXCJcIlxuICAgICAgICAgIGxpbWl0OiAtMVxuICAgICAgICAgIHNraXA6IDBcbiAgICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgICAke1xuICAgICAgICAgICAgICBkaWZmaWN1bHR5ICYmIGRpZmZpY3VsdHkgIT09IFwiYWxsXCJcbiAgICAgICAgICAgICAgICA/IFwiZGlmZmljdWx0eTogXCIgKyBkaWZmaWN1bHR5XG4gICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAke3Byb2JsZW1TZXQ/Lmxlbmd0aCA/IFwibGlzdElkOiBcIiArICdcIicgKyBwcm9ibGVtU2V0ICsgJ1wiJyA6IFwiXCJ9XG4gICAgICAgICAgfVxuICAgICAgICApIHtcbiAgICAgICAgICBxdWVzdGlvbnM6IGRhdGEge1xuICAgICAgICAgICAgYWNSYXRlXG4gICAgICAgICAgICBkaWZmaWN1bHR5XG4gICAgICAgICAgICBmcmVxQmFyXG4gICAgICAgICAgICBmcm9udGVuZFF1ZXN0aW9uSWQ6IHF1ZXN0aW9uRnJvbnRlbmRJZFxuICAgICAgICAgICAgaXNGYXZvclxuICAgICAgICAgICAgcGFpZE9ubHk6IGlzUGFpZE9ubHlcbiAgICAgICAgICAgIHN0YXR1c1xuICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgIHRpdGxlU2x1Z1xuICAgICAgICAgICAgdG9waWNUYWdzIHtcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBzbHVnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYXNTb2x1dGlvblxuICAgICAgICAgICAgaGFzVmlkZW9Tb2x1dGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGBcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBxdWVyeVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2xlZXRjb2RlLmNvbS9ncmFwaHFsXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgYXdhaXQgc3RvcmFnZS51cGRhdGVQZXJtaXNzaW9ucyh0cnVlKVxuICAgIHJldHVybiByZXNwb25zZURhdGEuZGF0YS5wcm9ibGVtc2V0UXVlc3Rpb25MaXN0LnF1ZXN0aW9uc1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yLnRvU3RyaW5nKCkpXG4gICAgaWYgKFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIk5ldHdvcmtFcnJvclwiKSB8fFxuICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcyhcIkNPUlNcIikgfHxcbiAgICAgIGVycm9yLm1lc3NhZ2UgPT09IFwiTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rXCJcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ09SUyBlcnJvciBkZXRlY3RlZC5cIilcbiAgICAgIGF3YWl0IHN0b3JhZ2UudXBkYXRlUGVybWlzc2lvbnMoZmFsc2UpXG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTGVldENvZGVQcm9ibGVtKCk6IFByb21pc2U8e1xuICB1cmw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbn0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9ibGVtU2V0ID0gYXdhaXQgc3RvcmFnZS5nZXRQcm9ibGVtU2V0KClcbiAgICBjb25zdCBkaWZmaWN1bHR5ID0gYXdhaXQgc3RvcmFnZS5nZXREaWZmaWN1bHR5KClcbiAgICBjb25zdCBpbmNsdWRlUHJlbWl1bSA9IGF3YWl0IHN0b3JhZ2UuZ2V0SW5jbHVkZVByZW1pdW0oKVxuICAgIGxldCBsZWV0Q29kZVByb2JsZW1zID0gW11cbiAgICAvLyBDaGVjayBpZiBsaXN0IGlzIGZyb20gTGVldGNvZGUgR3JhcGhxbCBvciBhbGxcbiAgICBpZiAocHJvYmxlbVNldCA9PT0gXCJhbGxcIiB8fCBwcm9ibGVtU2V0LnN0YXJ0c1dpdGgoXCJsZ1wiKSkge1xuICAgICAgYXdhaXQgc3RvcmFnZS5pbml0aWF0ZUxvYWRpbmcoKVxuICAgICAgLy8gUmVtb3ZlIGxnLSBvciBhbGwgZnJvbSBzdHJpbmcgZm9yIGJldHRlciBsb2dpYyBwcm9jZXNzaW5nXG4gICAgICBsZWV0Q29kZVByb2JsZW1zID0gYXdhaXQgZ2V0UHJvYmxlbUxpc3RGcm9tTGVldENvZGVBUEkoXG4gICAgICAgIGRpZmZpY3VsdHksXG4gICAgICAgIHByb2JsZW1TZXQ/LnNsaWNlKDMpIHx8IFwiXCJcbiAgICAgIClcbiAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZXRDb2RlUHJvYmxlbXMubGVuZ3RoKVxuICAgICAgd2hpbGUgKGxlZXRDb2RlUHJvYmxlbXNbcmFuZG9tSW5kZXhdLnBhaWRPbmx5KSB7XG4gICAgICAgIHJhbmRvbUluZGV4KytcbiAgICAgICAgcmFuZG9tSW5kZXggPVxuICAgICAgICAgIChsZWV0Q29kZVByb2JsZW1zLmxlbmd0aCArIHJhbmRvbUluZGV4KSAlIGxlZXRDb2RlUHJvYmxlbXMubGVuZ3RoXG4gICAgICB9XG4gICAgICBjb25zdCByYW5kb21Qcm9ibGVtID0gbGVldENvZGVQcm9ibGVtc1tyYW5kb21JbmRleF1cbiAgICAgIC8vIFJlcGxhY2UgYW55dGhpbmcgdGhhdCBpcyBub3QgYSBzdHJpbmcgb3Igd2hpdGVzcGFjZSB3aXRoIFwiXCIgdGhlbiByZXBsYWNlIGVtcHR5IHNwYWNlcyB3aXRoIFwiLVwiXG4gICAgICBjb25zdCByYW5kb21Qcm9ibGVtVVJMID1cbiAgICAgICAgXCJodHRwczovL2xlZXRjb2RlLmNvbS9wcm9ibGVtcy9cIiArXG4gICAgICAgIHJhbmRvbVByb2JsZW0udGl0bGVcbiAgICAgICAgICAudHJpbSgpXG4gICAgICAgICAgLnJlcGxhY2UoL1teYS16QS1aXFxzXS9nLCBcIlwiKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKVxuICAgICAgICAgIC50b0xvd2VyQ2FzZSgpICtcbiAgICAgICAgXCIvXCJcbiAgICAgIGNvbnN0IHJhbmRvbVByb2JsZW1OYW1lID0gcmFuZG9tUHJvYmxlbS50aXRsZVxuICAgICAgLy8gYXdhaXQgc3RvcmFnZS5zZXQoXCJsb2FkaW5nXCIsIGZhbHNlKVxuICAgICAgYXdhaXQgc3RvcmFnZS5zdG9wTG9hZGluZygpXG4gICAgICByZXR1cm4geyB1cmw6IHJhbmRvbVByb2JsZW1VUkwsIG5hbWU6IHJhbmRvbVByb2JsZW1OYW1lIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETzogTmVlZCB0byBmaW5kIGEgd2F5IHRvIGZpbHRlciBvdXQgcHJlbWl1bSBwcm9ibGVtcyBmb3IgdGhlc2UgSlNPTiBmaWxlc1xuICAgICAgY29uc3QgcHJvYmxlbVNldFVSTHMgPSB7XG4gICAgICAgIGFsbE5lZXRjb2RlOiBcImxlZXRjb2RlLXByb2JsZW1zL2FsbFByb2JsZW1zLmpzb25cIixcbiAgICAgICAgTmVldENvZGUxNTA6IFwibGVldGNvZGUtcHJvYmxlbXMvbmVldENvZGUxNTBQcm9ibGVtcy5qc29uXCIsXG4gICAgICAgIEJsaW5kNzU6IFwibGVldGNvZGUtcHJvYmxlbXMvYmxpbmQ3NVByb2JsZW1zLmpzb25cIlxuICAgICAgfVxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKHByb2JsZW1TZXRVUkxzW3Byb2JsZW1TZXRdKSlcbiAgICAgIGxlZXRDb2RlUHJvYmxlbXMgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICBsZWV0Q29kZVByb2JsZW1zID0gbGVldENvZGVQcm9ibGVtcy5maWx0ZXIoKHByb2JsZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoaW5jbHVkZVByZW1pdW0gfHwgIXByb2JsZW0uaXNQcmVtaXVtKSAmJlxuICAgICAgICAgIChkaWZmaWN1bHR5ID09IFwiYWxsXCIgfHxcbiAgICAgICAgICAgIHByb2JsZW0uZGlmZmljdWx0eS50b0xvd2VyQ2FzZSgpID09PSBkaWZmaWN1bHR5LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIClcbiAgICAgIH0pXG5cbiAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZXRDb2RlUHJvYmxlbXMubGVuZ3RoKVxuICAgICAgY29uc3QgcmFuZG9tUHJvYmxlbSA9IGxlZXRDb2RlUHJvYmxlbXNbcmFuZG9tSW5kZXhdXG4gICAgICBjb25zdCByYW5kb21Qcm9ibGVtVVJMID0gcmFuZG9tUHJvYmxlbS5ocmVmXG4gICAgICBjb25zdCByYW5kb21Qcm9ibGVtTmFtZSA9IHJhbmRvbVByb2JsZW0udGV4dFxuICAgICAgcmV0dXJuIHsgdXJsOiByYW5kb21Qcm9ibGVtVVJMLCBuYW1lOiByYW5kb21Qcm9ibGVtTmFtZSB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBnZW5lcmF0aW5nIHJhbmRvbSBwcm9ibGVtXCIsIGVycm9yKVxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBzdG9yYWdlLnN0b3BMb2FkaW5nKClcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gXCJAcGxhc21vaHEvc3RvcmFnZVwiXG5cbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpXG5cbmV4cG9ydCBjb25zdCBnZXRQcm9ibGVtVXJsID0gYXN5bmMgKCkgPT4gYXdhaXQgc3RvcmFnZS5nZXQoXCJwcm9ibGVtVVJMXCIpXG5leHBvcnQgY29uc3QgZ2V0UHJvYmxlbVNldCA9IGFzeW5jICgpID0+XG4gIChhd2FpdCBzdG9yYWdlLmdldChcInByb2JsZW1TZXRzXCIpKSA/PyBcImFsbFwiXG5leHBvcnQgY29uc3QgZ2V0RGlmZmljdWx0eSA9IGFzeW5jICgpID0+XG4gIChhd2FpdCBzdG9yYWdlLmdldChcImRpZmZpY3VsdHlcIikpID8/IFwiYWxsXCJcbmV4cG9ydCBjb25zdCBnZXRJbmNsdWRlUHJlbWl1bSA9IGFzeW5jICgpID0+XG4gIEJvb2xlYW4oYXdhaXQgc3RvcmFnZS5nZXQoXCJpbmNsdWRlUHJlbWl1bVwiKSkgPz8gZmFsc2VcbmV4cG9ydCBjb25zdCBnZXRQcm9ibGVtU29sdmVkID0gYXN5bmMgKCkgPT5cbiAgQm9vbGVhbihhd2FpdCBzdG9yYWdlLmdldChcImxlZXRDb2RlUHJvYmxlbVNvbHZlZFwiKSkgPz8gZmFsc2VcbmV4cG9ydCBjb25zdCBpbml0aWF0ZUxvYWRpbmcgPSBhc3luYyAoKSA9PiBhd2FpdCBzdG9yYWdlLnNldChcImxvYWRpbmdcIiwgdHJ1ZSlcbmV4cG9ydCBjb25zdCBzdG9wTG9hZGluZyA9IGFzeW5jICgpID0+IGF3YWl0IHN0b3JhZ2Uuc2V0KFwibG9hZGluZ1wiLCBmYWxzZSlcbmV4cG9ydCBjb25zdCBnZXRIeXBlclRvcnR1cmVNb2RlID0gYXN5bmMgKCkgPT5cbiAgISEoYXdhaXQgc3RvcmFnZS5nZXQoXCJoeXBlclRvcnR1cmVNb2RlXCIpKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvYmxlbShcbiAgcHJvYmxlbTogeyB1cmw6IHN0cmluZzsgbmFtZTogc3RyaW5nIH0sXG4gIGlzU29sdmVkOiBib29sZWFuXG4pIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICBzdG9yYWdlLnNldChcInByb2JsZW1VUkxcIiwgcHJvYmxlbS51cmwpLFxuICAgIHN0b3JhZ2Uuc2V0KFwicHJvYmxlbU5hbWVcIiwgcHJvYmxlbS5uYW1lKSxcbiAgICBzdG9yYWdlLnNldChcInByb2JsZW1EYXRlXCIsIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpLFxuICAgIHVwZGF0ZVByb2JsZW1Tb2x2ZWRTdGF0ZShpc1NvbHZlZClcbiAgXSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBlcm1pc3Npb25zKGVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgYXdhaXQgc3RvcmFnZS5zZXQoXCJwZXJtaXNzaW9uc0VuYWJsZWRcIiwgZW5hYmxlZClcbn1cblxuLy8gVE9ETzogTWF5YmUgdGhpcyBuZWVkcyB0byBiZSBleHBvcnRlZCBmb3IgY2xhcml0eSAoaW5zdGVhZCBvZiBiZWluZyB1c2VkIGluIHVwZGF0ZVByb2JsZW0gYW5kIHVwZGF0ZVN0cmVhaylcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVByb2JsZW1Tb2x2ZWRTdGF0ZShpc1NvbHZlZDogYm9vbGVhbikge1xuICBhd2FpdCBzdG9yYWdlLnNldChcImxlZXRDb2RlUHJvYmxlbVNvbHZlZFwiLCBpc1NvbHZlZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExhc3RDb21wbGV0aW9uKCkge1xuICBjb25zdCBsYXN0Q29tcGxldGVkU3RyaW5nID0gYXdhaXQgc3RvcmFnZS5nZXQoXCJsYXN0Q29tcGxldGVkXCIpXG4gIC8vIFJldHVybnMgVW5peCBFcG9jaCBpZiBpdGVtIGlzIG51bGxcbiAgcmV0dXJuIGxhc3RDb21wbGV0ZWRTdHJpbmcgPyBuZXcgRGF0ZShsYXN0Q29tcGxldGVkU3RyaW5nKSA6IG5ldyBEYXRlKDApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTdHJlYWsoKSB7XG4gIGlmIChhd2FpdCBnZXRIeXBlclRvcnR1cmVNb2RlKCkpIHtcbiAgICAvLyBVcGRhdGUgaHlwZXIgdG9ydHVyZSBzdHJlYWtcbiAgICBjb25zdCBbSFRfYmVzdFN0cmVhaywgSFRfY3VycmVudFN0cmVha10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBzdG9yYWdlLmdldChcIkhUX2Jlc3RTdHJlYWtcIiksXG4gICAgICBzdG9yYWdlLmdldChcIkhUX2N1cnJlbnRTdHJlYWtcIilcbiAgICBdKVxuXG4gICAgY29uc3QgSFRfbmV3U3RyZWFrID0gKE51bWJlcihIVF9jdXJyZW50U3RyZWFrKSB8fCAwKSArIDFcbiAgICBjb25zdCBIVF9iZXN0ID0gTnVtYmVyKEhUX2Jlc3RTdHJlYWspIHx8IDBcblxuICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KFwiSFRfY3VycmVudFN0cmVha1wiLCBIVF9uZXdTdHJlYWspXG4gICAgLy8gSWYgbmV3IGh5cGVyIHRvcnR1cmUgc3RyZWFrIGhpZ2hlciB0aGFuIGJlc3QgaHlwZXIgdG9ydHVyZSBzdHJlYWssIHVwZGF0ZSBpdFxuICAgIGlmIChIVF9uZXdTdHJlYWsgPiBIVF9iZXN0KSBhd2FpdCBzdG9yYWdlLnNldChcIkhUX2Jlc3RTdHJlYWtcIiwgSFRfbmV3U3RyZWFrKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IFtfLCBsYXN0Q29tcGxldGlvbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB1cGRhdGVQcm9ibGVtU29sdmVkU3RhdGUodHJ1ZSksXG4gICAgICBnZXRMYXN0Q29tcGxldGlvbigpXG4gICAgXSlcblxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgICBpZiAobGFzdENvbXBsZXRpb24udG9EYXRlU3RyaW5nKCkgPT09IG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKCkpIHJldHVyblxuXG4gICAgY29uc3QgW2Jlc3RTdHJlYWssIGN1cnJlbnRTdHJlYWtdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgc3RvcmFnZS5nZXQoXCJiZXN0U3RyZWFrXCIpLFxuICAgICAgc3RvcmFnZS5nZXQoXCJjdXJyZW50U3RyZWFrXCIpXG4gICAgXSlcblxuICAgIGNvbnN0IG5ld1N0cmVhayA9IChOdW1iZXIoY3VycmVudFN0cmVhaykgfHwgMCkgKyAxXG4gICAgY29uc3QgYmVzdCA9IE51bWJlcihiZXN0U3RyZWFrKSB8fCAwXG5cbiAgICBhd2FpdCBzdG9yYWdlLnNldChcImN1cnJlbnRTdHJlYWtcIiwgbmV3U3RyZWFrKVxuICAgIGF3YWl0IHN0b3JhZ2Uuc2V0KFwibGFzdENvbXBsZXRlZFwiLCBub3cudG9EYXRlU3RyaW5nKCkpXG4gICAgaWYgKG5ld1N0cmVhayA+IGJlc3QpIGF3YWl0IHN0b3JhZ2Uuc2V0KFwiYmVzdFN0cmVha1wiLCBuZXdTdHJlYWspXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0U3RyZWFrKCkge1xuICBhd2FpdCBzdG9yYWdlLnNldChcImN1cnJlbnRTdHJlYWtcIiwgMClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlc2V0SHlwZXJUb3J0dXJlU3RyZWFrKCkge1xuICBhd2FpdCBzdG9yYWdlLnNldChcIkhUX2N1cnJlbnRTdHJlYWtcIiwgMClcbn1cblxuZXhwb3J0ICogYXMgc3RvcmFnZSBmcm9tIFwic3RvcmFnZVwiXG4iLCJpbXBvcnQgeSBmcm9tXCJwaWZ5XCI7dmFyIGg9KCk9Pnt0cnl7bGV0IGU9KGdsb2JhbFRoaXMubmF2aWdhdG9yPy51c2VyQWdlbnQpLm1hdGNoKC8ob3BlcmF8Y2hyb21lfHNhZmFyaXxmaXJlZm94fG1zaWV8dHJpZGVudCg/PVxcLykpXFwvP1xccyooXFxkKykvaSl8fFtdO2lmKGVbMV09PT1cIkNocm9tZVwiKXJldHVybiBwYXJzZUludChlWzJdKTwxMDB8fGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWU/LmdldE1hbmlmZXN0KCk/Lm1hbmlmZXN0X3ZlcnNpb249PT0yfWNhdGNoe3JldHVybiExfXJldHVybiExfTt2YXIgbz1jbGFzc3sjYTsjZTtnZXQgcHJpbWFyeUNsaWVudCgpe3JldHVybiB0aGlzLiNlfSN0O2dldCBzZWNvbmRhcnlDbGllbnQoKXtyZXR1cm4gdGhpcy4jdH0jcjtnZXQgYXJlYSgpe3JldHVybiB0aGlzLiNyfWdldCBoYXNXZWJBcGkoKXt0cnl7cmV0dXJuIHR5cGVvZiB3aW5kb3c8XCJ1XCImJiEhd2luZG93LmxvY2FsU3RvcmFnZX1jYXRjaChlKXtyZXR1cm4gY29uc29sZS5lcnJvcihlKSwhMX19I3M9bmV3IE1hcDsjaTtnZXQgY29waWVkS2V5U2V0KCl7cmV0dXJuIHRoaXMuI2l9aXNDb3BpZWQ9ZT0+dGhpcy5oYXNXZWJBcGkmJih0aGlzLmFsbENvcGllZHx8dGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpKTsjbj0hMTtnZXQgYWxsQ29waWVkKCl7cmV0dXJuIHRoaXMuI259Z2V0RXh0U3RvcmFnZUFwaT0oKT0+Z2xvYmFsVGhpcy5icm93c2VyPy5zdG9yYWdlfHxnbG9iYWxUaGlzLmNocm9tZT8uc3RvcmFnZTtnZXQgaGFzRXh0ZW5zaW9uQXBpKCl7dHJ5e3JldHVybiEhdGhpcy5nZXRFeHRTdG9yYWdlQXBpKCl9Y2F0Y2goZSl7cmV0dXJuIGNvbnNvbGUuZXJyb3IoZSksITF9fWlzV2F0Y2hTdXBwb3J0ZWQ9KCk9PnRoaXMuaGFzRXh0ZW5zaW9uQXBpO2tleU5hbWVzcGFjZT1cIlwiO2lzVmFsaWRLZXk9ZT0+ZS5zdGFydHNXaXRoKHRoaXMua2V5TmFtZXNwYWNlKTtnZXROYW1lc3BhY2VkS2V5PWU9PmAke3RoaXMua2V5TmFtZXNwYWNlfSR7ZX1gO2dldFVubmFtZXNwYWNlZEtleT1lPT5lLnNsaWNlKHRoaXMua2V5TmFtZXNwYWNlLmxlbmd0aCk7Y29uc3RydWN0b3Ioe2FyZWE6ZT1cInN5bmNcIixhbGxDb3BpZWQ6dD0hMSxjb3BpZWRLZXlMaXN0OnM9W119PXt9KXt0aGlzLnNldENvcGllZEtleVNldChzKSx0aGlzLiNyPWUsdGhpcy4jbj10O3RyeXt0aGlzLmhhc1dlYkFwaSYmKHR8fHMubGVuZ3RoPjApJiYodGhpcy4jdD13aW5kb3cubG9jYWxTdG9yYWdlKX1jYXRjaHt9dHJ5e3RoaXMuaGFzRXh0ZW5zaW9uQXBpJiYodGhpcy4jYT10aGlzLmdldEV4dFN0b3JhZ2VBcGkoKSxoKCk/dGhpcy4jZT15KHRoaXMuI2FbdGhpcy5hcmVhXSx7ZXhjbHVkZTpbXCJnZXRCeXRlc0luVXNlXCJdLGVycm9yRmlyc3Q6ITF9KTp0aGlzLiNlPXRoaXMuI2FbdGhpcy5hcmVhXSl9Y2F0Y2h7fX1zZXRDb3BpZWRLZXlTZXQoZSl7dGhpcy4jaT1uZXcgU2V0KGUpfXJhd0dldEFsbD0oKT0+dGhpcy4jZT8uZ2V0KCk7Z2V0QWxsPWFzeW5jKCk9PntsZXQgZT1hd2FpdCB0aGlzLnJhd0dldEFsbCgpO3JldHVybiBPYmplY3QuZW50cmllcyhlKS5maWx0ZXIoKFt0XSk9PnRoaXMuaXNWYWxpZEtleSh0KSkucmVkdWNlKCh0LFtzLGFdKT0+KHRbdGhpcy5nZXRVbm5hbWVzcGFjZWRLZXkocyldPWEsdCkse30pfTtjb3B5PWFzeW5jIGU9PntsZXQgdD1lPT09dm9pZCAwO2lmKCF0JiYhdGhpcy5jb3BpZWRLZXlTZXQuaGFzKGUpfHwhdGhpcy5hbGxDb3BpZWR8fCF0aGlzLmhhc0V4dGVuc2lvbkFwaSlyZXR1cm4hMTtsZXQgcz10aGlzLmFsbENvcGllZD9hd2FpdCB0aGlzLnJhd0dldEFsbCgpOmF3YWl0IHRoaXMuI2UuZ2V0KCh0P1suLi50aGlzLmNvcGllZEtleVNldF06W2VdKS5tYXAodGhpcy5nZXROYW1lc3BhY2VkS2V5KSk7aWYoIXMpcmV0dXJuITE7bGV0IGE9ITE7Zm9yKGxldCByIGluIHMpe2xldCBpPXNbcl0sbj10aGlzLiN0Py5nZXRJdGVtKHIpO3RoaXMuI3Q/LnNldEl0ZW0ocixpKSxhfHw9aSE9PW59cmV0dXJuIGF9O3Jhd0dldD1hc3luYyBlPT50aGlzLmhhc0V4dGVuc2lvbkFwaT8oYXdhaXQgdGhpcy4jZS5nZXQoZSkpW2VdOnRoaXMuaXNDb3BpZWQoZSk/dGhpcy4jdD8uZ2V0SXRlbShlKTpudWxsO3Jhd1NldD1hc3luYyhlLHQpPT4odGhpcy5pc0NvcGllZChlKSYmdGhpcy4jdD8uc2V0SXRlbShlLHQpLHRoaXMuaGFzRXh0ZW5zaW9uQXBpJiZhd2FpdCB0aGlzLiNlLnNldCh7W2VdOnR9KSxudWxsKTtjbGVhcj1hc3luYyhlPSExKT0+e2UmJnRoaXMuI3Q/LmNsZWFyKCksYXdhaXQgdGhpcy4jZS5jbGVhcigpfTtyYXdSZW1vdmU9YXN5bmMgZT0+e3RoaXMuaXNDb3BpZWQoZSkmJnRoaXMuI3Q/LnJlbW92ZUl0ZW0oZSksdGhpcy5oYXNFeHRlbnNpb25BcGkmJmF3YWl0IHRoaXMuI2UucmVtb3ZlKGUpfTtyZW1vdmVBbGw9YXN5bmMoKT0+e2xldCBlPWF3YWl0IHRoaXMucmF3R2V0QWxsKCksdD1PYmplY3Qua2V5cyhlKTthd2FpdCBQcm9taXNlLmFsbCh0Lm1hcCh0aGlzLnJhd1JlbW92ZSkpfTt3YXRjaD1lPT57bGV0IHQ9dGhpcy5pc1dhdGNoU3VwcG9ydGVkKCk7cmV0dXJuIHQmJnRoaXMuI28oZSksdH07I289ZT0+e2ZvcihsZXQgdCBpbiBlKXtsZXQgcz10aGlzLmdldE5hbWVzcGFjZWRLZXkodCksYT10aGlzLiNzLmdldChzKT8uY2FsbGJhY2tTZXR8fG5ldyBTZXQ7aWYoYS5hZGQoZVt0XSksYS5zaXplPjEpY29udGludWU7bGV0IHI9KGksbik9PntpZihuIT09dGhpcy5hcmVhfHwhaVtzXSlyZXR1cm47bGV0IGc9dGhpcy4jcy5nZXQocyk7UHJvbWlzZS5hbGwoW3RoaXMucGFyc2VWYWx1ZShpW3NdLm5ld1ZhbHVlKSx0aGlzLnBhcnNlVmFsdWUoaVtzXS5vbGRWYWx1ZSldKS50aGVuKChbcCxtXSk9Pntmb3IobGV0IGQgb2YgZy5jYWxsYmFja1NldClkKHtuZXdWYWx1ZTpwLG9sZFZhbHVlOm19LG4pfSl9O3RoaXMuI2Eub25DaGFuZ2VkLmFkZExpc3RlbmVyKHIpLHRoaXMuI3Muc2V0KHMse2NhbGxiYWNrU2V0OmEsbGlzdGVuZXI6cn0pfX07dW53YXRjaD1lPT57bGV0IHQ9dGhpcy5pc1dhdGNoU3VwcG9ydGVkKCk7cmV0dXJuIHQmJnRoaXMuI2MoZSksdH07I2MoZSl7Zm9yKGxldCB0IGluIGUpe2xldCBzPXRoaXMuZ2V0TmFtZXNwYWNlZEtleSh0KSxhPWVbdF07aWYodGhpcy4jcy5oYXMocykpe2xldCByPXRoaXMuI3MuZ2V0KHMpO3IuY2FsbGJhY2tTZXQuZGVsZXRlKGEpLHIuY2FsbGJhY2tTZXQuc2l6ZT09PTAmJih0aGlzLiNzLmRlbGV0ZShzKSx0aGlzLiNhLm9uQ2hhbmdlZC5yZW1vdmVMaXN0ZW5lcihyLmxpc3RlbmVyKSl9fX11bndhdGNoQWxsPSgpPT50aGlzLiNoKCk7I2goKXt0aGlzLiNzLmZvckVhY2goKHtsaXN0ZW5lcjplfSk9PnRoaXMuI2Eub25DaGFuZ2VkLnJlbW92ZUxpc3RlbmVyKGUpKSx0aGlzLiNzLmNsZWFyKCl9YXN5bmMgZ2V0SXRlbShlKXtyZXR1cm4gdGhpcy5nZXQoZSl9YXN5bmMgc2V0SXRlbShlLHQpe2F3YWl0IHRoaXMuc2V0KGUsdCl9YXN5bmMgcmVtb3ZlSXRlbShlKXtyZXR1cm4gdGhpcy5yZW1vdmUoZSl9fSxsPWNsYXNzIGV4dGVuZHMgb3tnZXQ9YXN5bmMgZT0+e2xldCB0PXRoaXMuZ2V0TmFtZXNwYWNlZEtleShlKSxzPWF3YWl0IHRoaXMucmF3R2V0KHQpO3JldHVybiB0aGlzLnBhcnNlVmFsdWUocyl9O3NldD1hc3luYyhlLHQpPT57bGV0IHM9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpLGE9SlNPTi5zdHJpbmdpZnkodCk7cmV0dXJuIHRoaXMucmF3U2V0KHMsYSl9O3JlbW92ZT1hc3luYyBlPT57bGV0IHQ9dGhpcy5nZXROYW1lc3BhY2VkS2V5KGUpO3JldHVybiB0aGlzLnJhd1JlbW92ZSh0KX07c2V0TmFtZXNwYWNlPWU9Pnt0aGlzLmtleU5hbWVzcGFjZT1lfTtwYXJzZVZhbHVlPWFzeW5jIGU9Pnt0cnl7aWYoZSE9PXZvaWQgMClyZXR1cm4gSlNPTi5wYXJzZShlKX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKHQpfX19O2V4cG9ydHtvIGFzIEJhc2VTdG9yYWdlLGwgYXMgU3RvcmFnZX07XG4iLCJjb25zdCBwcm9jZXNzRnVuY3Rpb24gPSAoZnVuY3Rpb25fLCBvcHRpb25zLCBwcm94eSwgdW53cmFwcGVkKSA9PiBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuXHRjb25zdCBQID0gb3B0aW9ucy5wcm9taXNlTW9kdWxlO1xuXG5cdHJldHVybiBuZXcgUCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0aWYgKG9wdGlvbnMubXVsdGlBcmdzKSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2goKC4uLnJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAob3B0aW9ucy5lcnJvckZpcnN0KSB7XG5cdFx0XHRcdFx0aWYgKHJlc3VsdFswXSkge1xuXHRcdFx0XHRcdFx0cmVqZWN0KHJlc3VsdCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJlc3VsdC5zaGlmdCgpO1xuXHRcdFx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAob3B0aW9ucy5lcnJvckZpcnN0KSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2goKGVycm9yLCByZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmd1bWVudHNfLnB1c2gocmVzb2x2ZSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMgPT09IHByb3h5ID8gdW53cmFwcGVkIDogdGhpcztcblx0XHRSZWZsZWN0LmFwcGx5KGZ1bmN0aW9uXywgc2VsZiwgYXJndW1lbnRzXyk7XG5cdH0pO1xufTtcblxuY29uc3QgZmlsdGVyQ2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwaWZ5KGlucHV0LCBvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSB7XG5cdFx0ZXhjbHVkZTogWy8uKyg/OlN5bmN8U3RyZWFtKSQvXSxcblx0XHRlcnJvckZpcnN0OiB0cnVlLFxuXHRcdHByb21pc2VNb2R1bGU6IFByb21pc2UsXG5cdFx0Li4ub3B0aW9ucyxcblx0fTtcblxuXHRjb25zdCBvYmplY3RUeXBlID0gdHlwZW9mIGlucHV0O1xuXHRpZiAoIShpbnB1dCAhPT0gbnVsbCAmJiAob2JqZWN0VHlwZSA9PT0gJ29iamVjdCcgfHwgb2JqZWN0VHlwZSA9PT0gJ2Z1bmN0aW9uJykpKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgXFxgaW5wdXRcXGAgdG8gYmUgYSBcXGBGdW5jdGlvblxcYCBvciBcXGBPYmplY3RcXGAsIGdvdCBcXGAke2lucHV0ID09PSBudWxsID8gJ251bGwnIDogb2JqZWN0VHlwZX1cXGBgKTtcblx0fVxuXG5cdGNvbnN0IGZpbHRlciA9ICh0YXJnZXQsIGtleSkgPT4ge1xuXHRcdGxldCBjYWNoZWQgPSBmaWx0ZXJDYWNoZS5nZXQodGFyZ2V0KTtcblxuXHRcdGlmICghY2FjaGVkKSB7XG5cdFx0XHRjYWNoZWQgPSB7fTtcblx0XHRcdGZpbHRlckNhY2hlLnNldCh0YXJnZXQsIGNhY2hlZCk7XG5cdFx0fVxuXG5cdFx0aWYgKGtleSBpbiBjYWNoZWQpIHtcblx0XHRcdHJldHVybiBjYWNoZWRba2V5XTtcblx0XHR9XG5cblx0XHRjb25zdCBtYXRjaCA9IHBhdHRlcm4gPT4gKHR5cGVvZiBwYXR0ZXJuID09PSAnc3RyaW5nJyB8fCB0eXBlb2Yga2V5ID09PSAnc3ltYm9sJykgPyBrZXkgPT09IHBhdHRlcm4gOiBwYXR0ZXJuLnRlc3Qoa2V5KTtcblx0XHRjb25zdCBkZXNjcmlwdG9yID0gUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuXHRcdGNvbnN0IHdyaXRhYmxlT3JDb25maWd1cmFibGVPd24gPSAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkIHx8IGRlc2NyaXB0b3Iud3JpdGFibGUgfHwgZGVzY3JpcHRvci5jb25maWd1cmFibGUpO1xuXHRcdGNvbnN0IGluY2x1ZGVkID0gb3B0aW9ucy5pbmNsdWRlID8gb3B0aW9ucy5pbmNsdWRlLnNvbWUoZWxlbWVudCA9PiBtYXRjaChlbGVtZW50KSkgOiAhb3B0aW9ucy5leGNsdWRlLnNvbWUoZWxlbWVudCA9PiBtYXRjaChlbGVtZW50KSk7XG5cdFx0Y29uc3Qgc2hvdWxkRmlsdGVyID0gaW5jbHVkZWQgJiYgd3JpdGFibGVPckNvbmZpZ3VyYWJsZU93bjtcblx0XHRjYWNoZWRba2V5XSA9IHNob3VsZEZpbHRlcjtcblx0XHRyZXR1cm4gc2hvdWxkRmlsdGVyO1xuXHR9O1xuXG5cdGNvbnN0IGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuXHRjb25zdCBwcm94eSA9IG5ldyBQcm94eShpbnB1dCwge1xuXHRcdGFwcGx5KHRhcmdldCwgdGhpc0FyZywgYXJncykge1xuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHRhcmdldCk7XG5cblx0XHRcdGlmIChjYWNoZWQpIHtcblx0XHRcdFx0cmV0dXJuIFJlZmxlY3QuYXBwbHkoY2FjaGVkLCB0aGlzQXJnLCBhcmdzKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgcGlmaWVkID0gb3B0aW9ucy5leGNsdWRlTWFpbiA/IHRhcmdldCA6IHByb2Nlc3NGdW5jdGlvbih0YXJnZXQsIG9wdGlvbnMsIHByb3h5LCB0YXJnZXQpO1xuXHRcdFx0Y2FjaGUuc2V0KHRhcmdldCwgcGlmaWVkKTtcblx0XHRcdHJldHVybiBSZWZsZWN0LmFwcGx5KHBpZmllZCwgdGhpc0FyZywgYXJncyk7XG5cdFx0fSxcblxuXHRcdGdldCh0YXJnZXQsIGtleSkge1xuXHRcdFx0Y29uc3QgcHJvcGVydHkgPSB0YXJnZXRba2V5XTtcblxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1leHRlbmQtbmF0aXZlL25vLXVzZS1leHRlbmQtbmF0aXZlXG5cdFx0XHRpZiAoIWZpbHRlcih0YXJnZXQsIGtleSkgfHwgcHJvcGVydHkgPT09IEZ1bmN0aW9uLnByb3RvdHlwZVtrZXldKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wZXJ0eTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgY2FjaGVkID0gY2FjaGUuZ2V0KHByb3BlcnR5KTtcblxuXHRcdFx0aWYgKGNhY2hlZCkge1xuXHRcdFx0XHRyZXR1cm4gY2FjaGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IHBpZmllZCA9IHByb2Nlc3NGdW5jdGlvbihwcm9wZXJ0eSwgb3B0aW9ucywgcHJveHksIHRhcmdldCk7XG5cdFx0XHRcdGNhY2hlLnNldChwcm9wZXJ0eSwgcGlmaWVkKTtcblx0XHRcdFx0cmV0dXJuIHBpZmllZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHByb3BlcnR5O1xuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiBwcm94eTtcbn1cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJpbmRleC5qcy5tYXAifQ==
 globalThis.define=__define;  })(globalThis.define);