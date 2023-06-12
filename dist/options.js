/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/storage.ts":
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStorageData": function() { return /* binding */ getStorageData; },
/* harmony export */   "getStorageItem": function() { return /* binding */ getStorageItem; },
/* harmony export */   "initializeStorageWithDefaults": function() { return /* binding */ initializeStorageWithDefaults; },
/* harmony export */   "setStorageData": function() { return /* binding */ setStorageData; },
/* harmony export */   "setStorageItem": function() { return /* binding */ setStorageItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);



// Define your storage data here
// eslint-disable-line
function getStorageData() {
  return new Promise(function (resolve, reject) {
    chrome.storage.sync.get(null, function (result) {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }

      return resolve(result);
    });
  });
}
function setStorageData(data) {
  return new Promise(function (resolve, reject) {
    chrome.storage.sync.set(data, function () {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }

      return resolve();
    });
  });
}
function getStorageItem(key) {
  return new Promise(function (resolve, reject) {
    chrome.storage.sync.get([key], function (result) {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }

      return resolve(result[key]);
    });
  });
}
function setStorageItem(key, value) {
  return new Promise(function (resolve, reject) {
    chrome.storage.sync.set((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, key, value), function () {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }

      return resolve();
    });
  });
}
function initializeStorageWithDefaults(_x) {
  return _initializeStorageWithDefaults.apply(this, arguments);
}

function _initializeStorageWithDefaults() {
  _initializeStorageWithDefaults = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(defaults) {
    var currentStorageData, newStorageData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getStorageData();

          case 2:
            currentStorageData = _context.sent;
            newStorageData = Object.assign({}, defaults, currentStorageData);
            _context.next = 6;
            return setStorageData(newStorageData);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _initializeStorageWithDefaults.apply(this, arguments);
}

/***/ }),

/***/ "./src/utils/popup.ts":
/*!****************************!*\
  !*** ./src/utils/popup.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePopup": function() { return /* binding */ closePopup; },
/* harmony export */   "openPopup": function() { return /* binding */ openPopup; }
/* harmony export */ });
function openPopup(pathToPopup, popupId, callback) {
  fetch(chrome.runtime.getURL(pathToPopup)).then(function (response) {
    return response.text();
  }).then(function (htmlContent) {
    var div = document.createElement('div');
    div.innerHTML = htmlContent;
    div.classList.add("popup");
    div.classList.add("visible");
    div.setAttribute("id", popupId);
    var body = document.querySelector('body');
    body.appendChild(div);
    if (callback) callback();
  }).then().catch(function (error) {
    console.error('Error fetching HTML file:', error);
  });
}
function closePopup(popupId) {
  var popupToBeClosed = document.getElementById(popupId);
  popupToBeClosed.remove();
}

/***/ }),

/***/ "./static/data/castle_profiles.js":
/*!****************************************!*\
  !*** ./static/data/castle_profiles.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "1": [{
    "div_defender": "Obránce (vhodný pro nováčka)"
  }, {
    "div_economist": "Hospodář (vhodný pro nováčka)"
  }, {
    "div_farmer": "Farmář (pro hráče se 100 dny či VIP účtem)"
  }, {
    "div_attacker": "Útočník (pro hráče s 200 dny či VIP účtem)"
  }, {
    "div_storage": "Skladník (pro hráče s 300 dny či VIP účtem)"
  }],
  "5": [{
    "div_bratrstvo1": "Hrad Černého Bratrstva"
  }]
});

/***/ }),

/***/ "./static/data/technologies.js":
/*!*************************************!*\
  !*** ./static/data/technologies.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "1": {
    "div_defender": ["Vylepšený katapult", "Ohnivá střela", "Ocelová koule", "Pasti a Opraváři", "Zbrojnoš hodnost 3"],
    "div_economist": ["Nejlevnější nákup", "Nejlepší prodej", "Přestavba pily", "Studna a dům", "Fara u kostela"],
    "div_farmer": ["Jídlo nákup/prodej", "Tržiště +30K", "Děvečka ze statku", "Výkrm prasat a mrva", "Úplatkář V."],
    "div_attacker": ["Šermíř hodnost 5", "Modrý zbrojnoš", "Modrý střelec", "Střelec 4 a léčitel 5", "Dělo IV."],
    "div_storage": ["Tržiště +20K", "Dům level 9", "Druid", "Zbrojnoš hodnost 2", "Léčitel hodnost 7"]
  },
  "5": {
    "div_bratrstvo1": ["Ocelová koule + Dostřel", "Střelec hodnost +2", "Zbrojnoš a šermíř +3", "Tržiště +30K a Opravář II.", "Nejlevnější nákup"]
  }
});

/***/ }),

/***/ "./static/data/units.js":
/*!******************************!*\
  !*** ./static/data/units.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "1": {
    "div_defender": ["Dva zbrojnoši", "Bojovnice a střelec", "Trpaslík a zbrojnoš", "Stavitel a vlčák"],
    "div_economist": ["Vozík a stavitel", "Vozík a selka", "Vozík a vozík", "Zbrojnoš a prasátko"],
    "div_farmer": ["Dvě selky", "Selka a vlčák", "Selka a vozík", "Selka a Zlatý kňour"],
    "div_attacker": ["Dva bílí zbojnoši", "Šermíř a beranidlo", "Bojovnice a stavitel", "Dva červení střelci"],
    "div_storage": ["Šermíř a prasátko", "Velký pes a prasátko", "Stavitel a prasátko", "Selka a prasátko"]
  },
  "5": {
    "div_bratrstvo1": ["Čarodějnice a prasátko", "Černý šermíř a střelec", "Černý stavitel a vrrk", "Černý léčitel a kňour"]
  }
});

/***/ }),

/***/ "./styles/options.scss":
/*!*****************************!*\
  !*** ./styles/options.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/options.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_options_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/options.scss */ "./styles/options.scss");
/* harmony import */ var _utils_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/popup */ "./src/utils/popup.ts");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./src/storage.ts");
/* harmony import */ var _static_data_castle_profiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/data/castle_profiles */ "./static/data/castle_profiles.js");
/* harmony import */ var _static_data_technologies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/data/technologies */ "./static/data/technologies.js");
/* harmony import */ var _static_data_units__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/data/units */ "./static/data/units.js");





 // Data




console.log("OLONGJOHNOSON"); //servers_table

var setTechnologies = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(id_race, id_castle_profile, forceValue) {
    var technologyElement;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!forceValue) {
              _context.next = 3;
              break;
            }

            _context.next = 3;
            return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.setStorageData)({
              "id_technology": forceValue
            });

          case 3:
            technologyElement = document.getElementById("id_technology");
            technologyElement.innerHTML = "";
            _static_data_technologies__WEBPACK_IMPORTED_MODULE_7__["default"][id_race][id_castle_profile].map(function (technologyValue, index) {
              var option = document.createElement("option");
              option.innerHTML = technologyValue;
              option.value = index;
              technologyElement.appendChild(option);
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function setTechnologies(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var setUnits = /*#__PURE__*/function () {
  var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(id_race, id_castle_profile, forceValue) {
    var unitElement;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!forceValue) {
              _context2.next = 3;
              break;
            }

            _context2.next = 3;
            return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.setStorageData)({
              "id_unit": forceValue
            });

          case 3:
            unitElement = document.getElementById("id_unit");
            unitElement.innerHTML = "";
            _static_data_units__WEBPACK_IMPORTED_MODULE_8__["default"][id_race][id_castle_profile].map(function (unitValue, index) {
              var option = document.createElement("option");
              option.innerHTML = unitValue;
              option.value = index;
              unitElement.appendChild(option);
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function setUnits(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var table = document.getElementById("servers_table");
var div = document.createElement("div");
div.innerHTML = "Nastavení registrace";
div.classList.add("options");

div.onclick = function () {
  (0,_utils_popup__WEBPACK_IMPORTED_MODULE_4__.openPopup)("options/popup/popup.html", "autologin1", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
    var img, closeImage, id_existing_player, id_existing_hero, settingsFields;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            img = chrome.runtime.getURL('icons/background.jpg');
            closeImage = chrome.runtime.getURL('icons/ui-icons_e9cd86_256x240.png');
            document.getElementById("autologin1").style.backgroundImage = "url(" + img + ")";
            document.getElementById("closeButton").style.backgroundImage = "url(" + closeImage + ")";

            document.getElementById("closeButton").onclick = function () {
              (0,_utils_popup__WEBPACK_IMPORTED_MODULE_4__.closePopup)("autologin1");
            };

            _context9.t0 = console;
            _context9.next = 8;
            return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getStorageData)();

          case 8:
            _context9.t1 = _context9.sent;

            _context9.t0.log.call(_context9.t0, _context9.t1);

            id_existing_player = document.getElementById("id_existing_player");
            id_existing_hero = document.getElementById("id_existing_hero");
            settingsFields = document.getElementsByClassName("autologinSettings"); // Handle text fields

            Array.from([id_existing_player, id_existing_hero]).forEach( /*#__PURE__*/function () {
              var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(element) {
                var savedValue;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getStorageItem)(element.id);

                      case 2:
                        savedValue = _context4.sent;
                        if (savedValue) element.value = savedValue;

                        element.onchange = /*#__PURE__*/function () {
                          var _ref5 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(e) {
                            var target;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    target = e.target;
                                    _context3.next = 3;
                                    return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.setStorageData)((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, target.id, target.value));

                                  case 3:
                                  case "end":
                                    return _context3.stop();
                                }
                              }
                            }, _callee3);
                          }));

                          return function (_x8) {
                            return _ref5.apply(this, arguments);
                          };
                        }();

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));

              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }()); // Handle option select fields 260906 1001

            Array.from(settingsFields).forEach( /*#__PURE__*/function () {
              var _ref6 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8(element) {
                var valueSet, raceSelected, castleProfileElement;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getStorageItem)(element.id);

                      case 2:
                        valueSet = _context8.sent;

                        if (!(element.id === "id_castle_profile" && valueSet)) {
                          _context8.next = 10;
                          break;
                        }

                        _context8.next = 6;
                        return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getStorageItem)("id_race");

                      case 6:
                        raceSelected = _context8.sent;
                        castleProfileElement = document.getElementById("id_castle_profile");
                        castleProfileElement.innerHTML = "";
                        _static_data_castle_profiles__WEBPACK_IMPORTED_MODULE_6__["default"][raceSelected].map( /*#__PURE__*/function () {
                          var _ref7 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(castleProfile) {
                            var key, value, option;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
                              while (1) {
                                switch (_context5.prev = _context5.next) {
                                  case 0:
                                    key = Object.keys(castleProfile)[0];
                                    value = Object.values(castleProfile)[0];
                                    _context5.next = 4;
                                    return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.setStorageData)({
                                      "id_castle_profile": key
                                    });

                                  case 4:
                                    option = document.createElement("option");
                                    option.innerHTML = value;
                                    option.value = key;
                                    castleProfileElement.appendChild(option);

                                  case 8:
                                  case "end":
                                    return _context5.stop();
                                }
                              }
                            }, _callee5);
                          }));

                          return function (_x10) {
                            return _ref7.apply(this, arguments);
                          };
                        }());

                      case 10:
                        if (valueSet) {
                          element.value = valueSet;
                        }

                        element.onchange = /*#__PURE__*/function () {
                          var _ref8 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7(e) {
                            var value, key, _castleProfileElement, id_race, newCastleProfile, _id_race;

                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
                              while (1) {
                                switch (_context7.prev = _context7.next) {
                                  case 0:
                                    value = e.target.value;
                                    key = element.id; //await setStorageData({ [key]: value });

                                    _context7.next = 4;
                                    return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.setStorageData)((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));

                                  case 4:
                                    _context7.t0 = key;
                                    _context7.next = _context7.t0 === "id_race" ? 7 : _context7.t0 === "id_castle_profile" ? 19 : 25;
                                    break;

                                  case 7:
                                    // Change castle profile
                                    _castleProfileElement = document.getElementById("id_castle_profile");
                                    _castleProfileElement.innerHTML = "";
                                    _static_data_castle_profiles__WEBPACK_IMPORTED_MODULE_6__["default"][value].map( /*#__PURE__*/function () {
                                      var _ref9 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6(castleProfile) {
                                        var key, value, option;
                                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
                                          while (1) {
                                            switch (_context6.prev = _context6.next) {
                                              case 0:
                                                key = Object.keys(castleProfile)[0];
                                                value = Object.values(castleProfile)[0]; // add castle profile

                                                option = document.createElement("option");
                                                option.innerHTML = value;
                                                option.value = key;

                                                _castleProfileElement.appendChild(option);

                                              case 6:
                                              case "end":
                                                return _context6.stop();
                                            }
                                          }
                                        }, _callee6);
                                      }));

                                      return function (_x12) {
                                        return _ref9.apply(this, arguments);
                                      };
                                    }());
                                    _context7.next = 12;
                                    return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getStorageItem)("id_race");

                                  case 12:
                                    id_race = _context7.sent;
                                    newCastleProfile = Object.keys(Object.values(_static_data_castle_profiles__WEBPACK_IMPORTED_MODULE_6__["default"][value])[0])[0];
                                    _context7.next = 16;
                                    return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.setStorageData)({
                                      "id_castle_profile": newCastleProfile
                                    });

                                  case 16:
                                    setTechnologies(id_race, newCastleProfile, "1");
                                    setUnits(id_race, newCastleProfile, "1");
                                    return _context7.abrupt("break", 25);

                                  case 19:
                                    _context7.next = 21;
                                    return (0,_storage__WEBPACK_IMPORTED_MODULE_5__.getStorageItem)("id_race");

                                  case 21:
                                    _id_race = _context7.sent;
                                    setTechnologies(_id_race, value);
                                    setUnits(_id_race, value);
                                    return _context7.abrupt("break", 25);

                                  case 25:
                                  case "end":
                                    return _context7.stop();
                                }
                              }
                            }, _callee7);
                          }));

                          return function (_x11) {
                            return _ref8.apply(this, arguments);
                          };
                        }();

                      case 12:
                      case "end":
                        return _context8.stop();
                    }
                  }
                }, _callee8);
              }));

              return function (_x9) {
                return _ref6.apply(this, arguments);
              };
            }());

          case 15:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  })));
};

table.appendChild(div);
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQVYsRUFBNEIsR0FBNUIsQ0FBUjtvQ0EzQmlDOztrQ0FBQTtvQ0FBQTtvQ0FBQSxPQStCWDlFLHdEQUFjLENBQUMsU0FBRCxDQS9CSDs7a0NBQUE7b0NBK0IzQjBDLFFBL0IyQjtvQ0FnQ2pDRCxlQUFlLENBQUNDLFFBQUQsRUFBVXZDLEtBQVYsQ0FBZjtvQ0FDQStDLFFBQVEsQ0FBQ1IsUUFBRCxFQUFVdkMsS0FBVixDQUFSO29DQWpDaUM7O2tDQUFBO2tDQUFBO29DQUFBO2dDQUFBOzhCQUFBOzRCQUFBOzBCQUFBLENBQTdDOzswQkFBQTs0QkFBQTswQkFBQTt3QkFBQTs7c0JBdEIrQjtzQkFBQTt3QkFBQTtvQkFBQTtrQkFBQTtnQkFBQTtjQUFBLENBQW5DOztjQUFBO2dCQUFBO2NBQUE7WUFBQTs7VUEzQmdEO1VBQUE7WUFBQTtRQUFBO01BQUE7SUFBQTtFQUFBLENBQTNDLEdBQVQ7QUErRkgsQ0FoR0Q7O0FBa0dBa0QsS0FBSyxDQUFDeEIsV0FBTixDQUFrQlQsR0FBbEIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24td2VicGFjay8uL3NyYy9zdG9yYWdlLnRzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24td2VicGFjay8uL3NyYy91dGlscy9wb3B1cC50cyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXdlYnBhY2svLi9zdGF0aWMvZGF0YS9jYXN0bGVfcHJvZmlsZXMuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi13ZWJwYWNrLy4vc3RhdGljL2RhdGEvdGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24td2VicGFjay8uL3N0YXRpYy9kYXRhL3VuaXRzLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24td2VicGFjay8uL3N0eWxlcy9vcHRpb25zLnNjc3MiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lLmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24td2VicGFjay8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2Nocm9tZS1leHRlbnNpb24td2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2hyb21lLWV4dGVuc2lvbi13ZWJwYWNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXdlYnBhY2svd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXdlYnBhY2svLi9zcmMvb3B0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEZWZpbmUgeW91ciBzdG9yYWdlIGRhdGEgaGVyZVxyXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2Uge30gLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2VEYXRhKCk6IFByb21pc2U8U3RvcmFnZT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChudWxsLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXNvbHZlKHJlc3VsdCBhcyBTdG9yYWdlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3RvcmFnZURhdGEoZGF0YTogU3RvcmFnZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldChkYXRhLCAoKSA9PiB7XHJcbiAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gcmVqZWN0KGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0b3JhZ2VJdGVtPEtleSBleHRlbmRzIGtleW9mIFN0b3JhZ2U+KFxyXG4gIGtleTogS2V5LFxyXG4pOiBQcm9taXNlPFN0b3JhZ2VbS2V5XT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChba2V5XSwgKHJlc3VsdCkgPT4ge1xyXG4gICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzb2x2ZSgocmVzdWx0IGFzIFN0b3JhZ2UpW2tleV0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdG9yYWdlSXRlbTxLZXkgZXh0ZW5kcyBrZXlvZiBTdG9yYWdlPihcclxuICBrZXk6IEtleSxcclxuICB2YWx1ZTogU3RvcmFnZVtLZXldLFxyXG4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBba2V5XTogdmFsdWUgfSwgKCkgPT4ge1xyXG4gICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlamVjdChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplU3RvcmFnZVdpdGhEZWZhdWx0cyhkZWZhdWx0czogU3RvcmFnZSkge1xyXG4gIGNvbnN0IGN1cnJlbnRTdG9yYWdlRGF0YSA9IGF3YWl0IGdldFN0b3JhZ2VEYXRhKCk7XHJcbiAgY29uc3QgbmV3U3RvcmFnZURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgY3VycmVudFN0b3JhZ2VEYXRhKTtcclxuICBhd2FpdCBzZXRTdG9yYWdlRGF0YShuZXdTdG9yYWdlRGF0YSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG9wZW5Qb3B1cCggcGF0aFRvUG9wdXA6IHN0cmluZywgcG9wdXBJZDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQgKTogdm9pZCB7XHJcbiAgZmV0Y2goY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKHBhdGhUb1BvcHVwKSlcclxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXHJcbiAgLnRoZW4oaHRtbENvbnRlbnQgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmlubmVySFRNTCA9IGh0bWxDb250ZW50O1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwb3B1cFwiKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBwb3B1cElkKTtcclxuXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG5cclxuICB9KVxyXG4gIC50aGVuKClcclxuICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgSFRNTCBmaWxlOicsIGVycm9yKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUG9wdXAoIHBvcHVwSWQ6IHN0cmluZyk6IHZvaWQge1xyXG4gIGNvbnN0IHBvcHVwVG9CZUNsb3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBvcHVwSWQpO1xyXG4gIHBvcHVwVG9CZUNsb3NlZC5yZW1vdmUoKTtcclxufSIsImV4cG9ydCBkZWZhdWx0e1xyXG4gICAgXCIxXCI6IFtcclxuICAgICAgICB7XCJkaXZfZGVmZW5kZXJcIjogXCJPYnLDoW5jZSAodmhvZG7DvSBwcm8gbm92w6HEjWthKVwifSxcclxuICAgICAgICB7XCJkaXZfZWNvbm9taXN0XCI6IFwiSG9zcG9kw6HFmSAodmhvZG7DvSBwcm8gbm92w6HEjWthKVwifSxcclxuICAgICAgICB7XCJkaXZfZmFybWVyXCI6IFwiRmFybcOhxZkgKHBybyBocsOhxI1lIHNlIDEwMCBkbnkgxI1pIFZJUCDDusSNdGVtKVwifSxcclxuICAgICAgICB7XCJkaXZfYXR0YWNrZXJcIjogXCLDmnRvxI1uw61rIChwcm8gaHLDocSNZSBzIDIwMCBkbnkgxI1pIFZJUCDDusSNdGVtKVwifSxcclxuICAgICAgICB7XCJkaXZfc3RvcmFnZVwiOiBcIlNrbGFkbsOtayAocHJvIGhyw6HEjWUgcyAzMDAgZG55IMSNaSBWSVAgw7rEjXRlbSlcIn1cclxuICAgIF0sXHJcbiAgICBcIjVcIjogW1xyXG4gICAgICAgIHtcImRpdl9icmF0cnN0dm8xXCI6IFwiSHJhZCDEjGVybsOpaG8gQnJhdHJzdHZhXCJ9XHJcbiAgICBdXHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcIjFcIjoge1xyXG4gICAgICAgIFwiZGl2X2RlZmVuZGVyXCI6IFtcclxuICAgICAgICAgICAgXCJWeWxlcMWhZW7DvSBrYXRhcHVsdFwiLFxyXG4gICAgICAgICAgICBcIk9obml2w6Egc3TFmWVsYVwiLFxyXG4gICAgICAgICAgICBcIk9jZWxvdsOhIGtvdWxlXCIsXHJcbiAgICAgICAgICAgIFwiUGFzdGkgYSBPcHJhdsOhxZlpXCIsXHJcbiAgICAgICAgICAgIFwiWmJyb2pub8WhIGhvZG5vc3QgM1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImRpdl9lY29ub21pc3RcIjogW1xyXG4gICAgICAgICAgICBcIk5lamxldm7Em2rFocOtIG7DoWt1cFwiLFxyXG4gICAgICAgICAgICBcIk5lamxlcMWhw60gcHJvZGVqXCIsXHJcbiAgICAgICAgICAgIFwiUMWZZXN0YXZiYSBwaWx5XCIsXHJcbiAgICAgICAgICAgIFwiU3R1ZG5hIGEgZMWvbVwiLFxyXG4gICAgICAgICAgICBcIkZhcmEgdSBrb3N0ZWxhXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZGl2X2Zhcm1lclwiOiBbXHJcbiAgICAgICAgICAgIFwiSsOtZGxvIG7DoWt1cC9wcm9kZWpcIixcclxuICAgICAgICAgICAgXCJUcsW+acWhdMSbICszMEtcIixcclxuICAgICAgICAgICAgXCJExJt2ZcSNa2EgemUgc3RhdGt1XCIsXHJcbiAgICAgICAgICAgIFwiVsO9a3JtIHByYXNhdCBhIG1ydmFcIixcclxuICAgICAgICAgICAgXCLDmnBsYXRrw6HFmSBWLlwiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImRpdl9hdHRhY2tlclwiOiBbXHJcbiAgICAgICAgICAgIFwixaBlcm3DrcWZIGhvZG5vc3QgNVwiLFxyXG4gICAgICAgICAgICBcIk1vZHLDvSB6YnJvam5vxaFcIixcclxuICAgICAgICAgICAgXCJNb2Ryw70gc3TFmWVsZWNcIixcclxuICAgICAgICAgICAgXCJTdMWZZWxlYyA0IGEgbMOpxI1pdGVsIDVcIixcclxuICAgICAgICAgICAgXCJExJtsbyBJVi5cIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJkaXZfc3RvcmFnZVwiOiBbXHJcbiAgICAgICAgICAgIFwiVHLFvmnFoXTEmyArMjBLXCIsXHJcbiAgICAgICAgICAgIFwiRMWvbSBsZXZlbCA5XCIsXHJcbiAgICAgICAgICAgIFwiRHJ1aWRcIixcclxuICAgICAgICAgICAgXCJaYnJvam5vxaEgaG9kbm9zdCAyXCIsXHJcbiAgICAgICAgICAgIFwiTMOpxI1pdGVsIGhvZG5vc3QgN1wiXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIFwiNVwiOiB7XHJcbiAgICAgICAgXCJkaXZfYnJhdHJzdHZvMVwiOiBbXHJcbiAgICAgICAgICAgIFwiT2NlbG92w6Ega291bGUgKyBEb3N0xZllbFwiLFxyXG4gICAgICAgICAgICBcIlN0xZllbGVjIGhvZG5vc3QgKzJcIixcclxuICAgICAgICAgICAgXCJaYnJvam5vxaEgYSDFoWVybcOtxZkgKzNcIixcclxuICAgICAgICAgICAgXCJUcsW+acWhdMSbICszMEsgYSBPcHJhdsOhxZkgSUkuXCIsXHJcbiAgICAgICAgICAgIFwiTmVqbGV2bsSbasWhw60gbsOha3VwXCJcclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgXCIxXCI6IHtcclxuICAgICAgICBcImRpdl9kZWZlbmRlclwiOiBbXHJcbiAgICAgICAgICAgIFwiRHZhIHpicm9qbm/FoWlcIixcclxuICAgICAgICAgICAgXCJCb2pvdm5pY2UgYSBzdMWZZWxlY1wiLFxyXG4gICAgICAgICAgICBcIlRycGFzbMOtayBhIHpicm9qbm/FoVwiLFxyXG4gICAgICAgICAgICBcIlN0YXZpdGVsIGEgdmzEjcOha1wiXHJcbiAgICAgICAgXSxcclxuICAgICAgICBcImRpdl9lY29ub21pc3RcIjogW1xyXG4gICAgICAgICAgICBcIlZvesOtayBhIHN0YXZpdGVsXCIsXHJcbiAgICAgICAgICAgIFwiVm96w61rIGEgc2Vsa2FcIixcclxuICAgICAgICAgICAgXCJWb3rDrWsgYSB2b3rDrWtcIixcclxuICAgICAgICAgICAgXCJaYnJvam5vxaEgYSBwcmFzw6F0a29cIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJkaXZfZmFybWVyXCI6IFtcclxuICAgICAgICAgICAgXCJEdsSbIHNlbGt5XCIsXHJcbiAgICAgICAgICAgIFwiU2Vsa2EgYSB2bMSNw6FrXCIsXHJcbiAgICAgICAgICAgIFwiU2Vsa2EgYSB2b3rDrWtcIixcclxuICAgICAgICAgICAgXCJTZWxrYSBhIFpsYXTDvSBrxYhvdXJcIlxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJkaXZfYXR0YWNrZXJcIjogW1xyXG4gICAgICAgICAgICBcIkR2YSBiw61sw60gemJvam5vxaFpXCIsXHJcbiAgICAgICAgICAgIFwixaBlcm3DrcWZIGEgYmVyYW5pZGxvXCIsXHJcbiAgICAgICAgICAgIFwiQm9qb3ZuaWNlIGEgc3Rhdml0ZWxcIixcclxuICAgICAgICAgICAgXCJEdmEgxI1lcnZlbsOtIHN0xZllbGNpXCJcclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiZGl2X3N0b3JhZ2VcIjogW1xyXG4gICAgICAgICAgICBcIsWgZXJtw63FmSBhIHByYXPDoXRrb1wiLFxyXG4gICAgICAgICAgICBcIlZlbGvDvSBwZXMgYSBwcmFzw6F0a29cIixcclxuICAgICAgICAgICAgXCJTdGF2aXRlbCBhIHByYXPDoXRrb1wiLFxyXG4gICAgICAgICAgICBcIlNlbGthIGEgcHJhc8OhdGtvXCJcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAgXCI1XCI6IHtcclxuICAgICAgICBcImRpdl9icmF0cnN0dm8xXCI6IFtcclxuICAgICAgICAgICAgXCLEjGFyb2TEm2puaWNlIGEgcHJhc8OhdGtvXCIsXHJcbiAgICAgICAgICAgIFwixIxlcm7DvSDFoWVybcOtxZkgYSBzdMWZZWxlY1wiLFxyXG4gICAgICAgICAgICBcIsSMZXJuw70gc3Rhdml0ZWwgYSB2cnJrXCIsXHJcbiAgICAgICAgICAgIFwixIxlcm7DvSBsw6nEjWl0ZWwgYSBrxYhvdXJcIlxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5cbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuICAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgICAgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHksXG4gICAgICAkU3ltYm9sID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSxcbiAgICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICAgIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLFxuICAgICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvci5faW52b2tlID0gZnVuY3Rpb24gKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgaWYgKFwiZXhlY3V0aW5nXCIgPT09IHN0YXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuXG4gICAgICAgIGlmIChcImNvbXBsZXRlZFwiID09PSBzdGF0ZSkge1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IG1ldGhvZCkgdGhyb3cgYXJnO1xuICAgICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcblxuICAgICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICAgIGlmIChcInN1c3BlbmRlZFN0YXJ0XCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQuYXJnO1xuICAgICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG4gICAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgICBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBcImNvbXBsZXRlZFwiIDogXCJzdXNwZW5kZWRZaWVsZFwiLCByZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KGlubmVyRm4sIHNlbGYsIGNvbnRleHQpLCBnZW5lcmF0b3I7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cblxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcblxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG5cbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkgOiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICB0aGlzLl9pbnZva2UgPSBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuXG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSB7XG4gICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkpIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgcmV0dXJuIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcsIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6ICEwXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSwgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoc2tpcFRlbXBSZXNldCkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldLFxuICAgICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgICAgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZmluYWxseUVudHJ5ICYmIChcImJyZWFrXCIgPT09IHR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0eXBlKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MgJiYgKGZpbmFsbHlFbnRyeSA9IG51bGwpO1xuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH0sIGV4cG9ydHM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9vcHRpb25zLnNjc3MnO1xyXG5pbXBvcnQgeyBvcGVuUG9wdXAsIGNsb3NlUG9wdXAgfSBmcm9tICcuL3V0aWxzL3BvcHVwJztcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZURhdGEsIGdldFN0b3JhZ2VJdGVtLCBzZXRTdG9yYWdlRGF0YSB9IGZyb20gJy4vc3RvcmFnZSc7XHJcblxyXG4vLyBEYXRhXHJcbmltcG9ydCBjYXN0bGVfcHJvZmlsZXMgZnJvbSBcIi4uL3N0YXRpYy9kYXRhL2Nhc3RsZV9wcm9maWxlc1wiO1xyXG5pbXBvcnQgdGVjaG5vbG9naWVzIGZyb20gXCIuLi9zdGF0aWMvZGF0YS90ZWNobm9sb2dpZXNcIjtcclxuaW1wb3J0IHVuaXRzIGZyb20gXCIuLi9zdGF0aWMvZGF0YS91bml0c1wiO1xyXG5cclxuY29uc29sZS5sb2coXCJPTE9OR0pPSE5PU09OXCIpO1xyXG4vL3NlcnZlcnNfdGFibGVcclxuXHJcblxyXG5jb25zdCBzZXRUZWNobm9sb2dpZXMgPSBhc3luYyAoaWRfcmFjZTogc3RyaW5nLCBpZF9jYXN0bGVfcHJvZmlsZTogc3RyaW5nLCBmb3JjZVZhbHVlPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZihmb3JjZVZhbHVlKSBhd2FpdCBzZXRTdG9yYWdlRGF0YSh7IFwiaWRfdGVjaG5vbG9neVwiOiBmb3JjZVZhbHVlfSk7XHJcbiAgICBjb25zdCB0ZWNobm9sb2d5RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfdGVjaG5vbG9neVwiKTtcclxuICAgIHRlY2hub2xvZ3lFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB0ZWNobm9sb2dpZXNbaWRfcmFjZV1baWRfY2FzdGxlX3Byb2ZpbGVdLm1hcCggKHRlY2hub2xvZ3lWYWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSB0ZWNobm9sb2d5VmFsdWU7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gaW5kZXg7XHJcbiAgICAgICAgdGVjaG5vbG9neUVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0VW5pdHMgPSBhc3luYyAoaWRfcmFjZTogc3RyaW5nLCBpZF9jYXN0bGVfcHJvZmlsZTogc3RyaW5nLCBmb3JjZVZhbHVlPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBpZihmb3JjZVZhbHVlKSBhd2FpdCBzZXRTdG9yYWdlRGF0YSh7IFwiaWRfdW5pdFwiOiBmb3JjZVZhbHVlfSk7XHJcbiAgICBjb25zdCB1bml0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfdW5pdFwiKTtcclxuICAgIHVuaXRFbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB1bml0c1tpZF9yYWNlXVtpZF9jYXN0bGVfcHJvZmlsZV0ubWFwKCAodW5pdFZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLmlubmVySFRNTCA9IHVuaXRWYWx1ZTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBpbmRleDtcclxuICAgICAgICB1bml0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5jb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVyc190YWJsZVwiKTtcclxuY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZGl2LmlubmVySFRNTCA9IFwiTmFzdGF2ZW7DrSByZWdpc3RyYWNlXCI7XHJcbmRpdi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uc1wiKTtcclxuZGl2Lm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBvcGVuUG9wdXAoXCJvcHRpb25zL3BvcHVwL3BvcHVwLmh0bWxcIiwgXCJhdXRvbG9naW4xXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBpbWcgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ljb25zL2JhY2tncm91bmQuanBnJyk7XHJcbiAgICAgICAgY29uc3QgY2xvc2VJbWFnZSA9IGNocm9tZS5ydW50aW1lLmdldFVSTCgnaWNvbnMvdWktaWNvbnNfZTljZDg2XzI1NngyNDAucG5nJyk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0b2xvZ2luMVwiKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybChcIiArIGltZyArIFwiKVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VCdXR0b25cIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoXCIgKyBjbG9zZUltYWdlICsgXCIpXCI7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VCdXR0b25cIikub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY2xvc2VQb3B1cChcImF1dG9sb2dpbjFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBnZXRTdG9yYWdlRGF0YSgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWRfZXhpc3RpbmdfcGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9leGlzdGluZ19wbGF5ZXJcIik7XHJcbiAgICAgICAgY29uc3QgaWRfZXhpc3RpbmdfaGVybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWRfZXhpc3RpbmdfaGVyb1wiKTtcclxuICAgICAgICBjb25zdCBzZXR0aW5nc0ZpZWxkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhdXRvbG9naW5TZXR0aW5nc1wiKTtcclxuICAgICAgICAvLyBIYW5kbGUgdGV4dCBmaWVsZHNcclxuICAgICAgICBBcnJheS5mcm9tKFtpZF9leGlzdGluZ19wbGF5ZXIsIGlkX2V4aXN0aW5nX2hlcm9dKS5mb3JFYWNoKGFzeW5jIGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhdmVkVmFsdWUgPSBhd2FpdCBnZXRTdG9yYWdlSXRlbShlbGVtZW50LmlkKTtcclxuICAgICAgICAgICAgaWYoc2F2ZWRWYWx1ZSkgZWxlbWVudC52YWx1ZSA9IHNhdmVkVmFsdWU7XHJcbiAgICAgICAgICAgIChlbGVtZW50IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQgKS5vbmNoYW5nZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgc2V0U3RvcmFnZURhdGEoeyBbdGFyZ2V0LmlkXTogdGFyZ2V0LnZhbHVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIG9wdGlvbiBzZWxlY3QgZmllbGRzIDI2MDkwNiAxMDAxXHJcbiAgICAgICAgQXJyYXkuZnJvbShzZXR0aW5nc0ZpZWxkcykuZm9yRWFjaChhc3luYyBmdW5jdGlvbiAoZWxlbWVudCkge1xyXG5cclxuICAgICAgICAgICAgLy8gTG9hZCBzYXZlZCBkYXRhIFxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZVNldCA9IGF3YWl0IGdldFN0b3JhZ2VJdGVtKGVsZW1lbnQuaWQpO1xyXG4gICAgICAgICAgICBpZihlbGVtZW50LmlkID09PSBcImlkX2Nhc3RsZV9wcm9maWxlXCIgJiYgdmFsdWVTZXQpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFjZVNlbGVjdGVkID0gYXdhaXQgZ2V0U3RvcmFnZUl0ZW0oXCJpZF9yYWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FzdGxlUHJvZmlsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlkX2Nhc3RsZV9wcm9maWxlXCIpO1xyXG4gICAgICAgICAgICAgICAgY2FzdGxlUHJvZmlsZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNhc3RsZV9wcm9maWxlc1tyYWNlU2VsZWN0ZWRdLm1hcCggYXN5bmMgKGNhc3RsZVByb2ZpbGUpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoY2FzdGxlUHJvZmlsZSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBPYmplY3QudmFsdWVzKGNhc3RsZVByb2ZpbGUpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNldFN0b3JhZ2VEYXRhKHsgXCJpZF9jYXN0bGVfcHJvZmlsZVwiOiBrZXkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc3RsZVByb2ZpbGVFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih2YWx1ZVNldCl7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gdmFsdWVTZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKGVsZW1lbnQgYXMgSFRNTFRleHRBcmVhRWxlbWVudCApLm9uY2hhbmdlID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gKGUudGFyZ2V0IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQgKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGVsZW1lbnQuaWQ7XHJcbiAgICAgICAgICAgICAgICAvL2F3YWl0IHNldFN0b3JhZ2VEYXRhKHsgW2tleV06IHZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgc2V0U3RvcmFnZURhdGEoeyBba2V5XTogdmFsdWV9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goa2V5KXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaWRfcmFjZVwiOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hhbmdlIGNhc3RsZSBwcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhc3RsZVByb2ZpbGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZF9jYXN0bGVfcHJvZmlsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzdGxlUHJvZmlsZUVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzdGxlX3Byb2ZpbGVzW3ZhbHVlXS5tYXAoIGFzeW5jIChjYXN0bGVQcm9maWxlKSA9PiB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGNhc3RsZVByb2ZpbGUpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBPYmplY3QudmFsdWVzKGNhc3RsZVByb2ZpbGUpWzBdO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgY2FzdGxlIHByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udmFsdWUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXN0bGVQcm9maWxlRWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWRfcmFjZSA9IGF3YWl0IGdldFN0b3JhZ2VJdGVtKFwiaWRfcmFjZVwiKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Nhc3RsZVByb2ZpbGUgPSBPYmplY3Qua2V5cyhPYmplY3QudmFsdWVzKGNhc3RsZV9wcm9maWxlc1t2YWx1ZV0pWzBdKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2V0U3RvcmFnZURhdGEoeyBcImlkX2Nhc3RsZV9wcm9maWxlXCI6IG5ld0Nhc3RsZVByb2ZpbGV9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUZWNobm9sb2dpZXMoaWRfcmFjZSwgbmV3Q2FzdGxlUHJvZmlsZSwgXCIxXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVbml0cyhpZF9yYWNlLCBuZXdDYXN0bGVQcm9maWxlLCBcIjFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlkX2Nhc3RsZV9wcm9maWxlXCI6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZF9yYWNlID0gYXdhaXQgZ2V0U3RvcmFnZUl0ZW0oXCJpZF9yYWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUZWNobm9sb2dpZXMoaWRfcmFjZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVbml0cyhpZF9yYWNlLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG59XHJcblxyXG50YWJsZS5hcHBlbmRDaGlsZChkaXYpOyJdLCJuYW1lcyI6WyJnZXRTdG9yYWdlRGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJyZXN1bHQiLCJydW50aW1lIiwibGFzdEVycm9yIiwic2V0U3RvcmFnZURhdGEiLCJkYXRhIiwic2V0IiwiZ2V0U3RvcmFnZUl0ZW0iLCJrZXkiLCJzZXRTdG9yYWdlSXRlbSIsInZhbHVlIiwiaW5pdGlhbGl6ZVN0b3JhZ2VXaXRoRGVmYXVsdHMiLCJkZWZhdWx0cyIsImN1cnJlbnRTdG9yYWdlRGF0YSIsIm5ld1N0b3JhZ2VEYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwib3BlblBvcHVwIiwicGF0aFRvUG9wdXAiLCJwb3B1cElkIiwiY2FsbGJhY2siLCJmZXRjaCIsImdldFVSTCIsInRoZW4iLCJyZXNwb25zZSIsInRleHQiLCJodG1sQ29udGVudCIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImNsb3NlUG9wdXAiLCJwb3B1cFRvQmVDbG9zZWQiLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZSIsImNhc3RsZV9wcm9maWxlcyIsInRlY2hub2xvZ2llcyIsInVuaXRzIiwibG9nIiwic2V0VGVjaG5vbG9naWVzIiwiaWRfcmFjZSIsImlkX2Nhc3RsZV9wcm9maWxlIiwiZm9yY2VWYWx1ZSIsInRlY2hub2xvZ3lFbGVtZW50IiwibWFwIiwidGVjaG5vbG9neVZhbHVlIiwiaW5kZXgiLCJvcHRpb24iLCJzZXRVbml0cyIsInVuaXRFbGVtZW50IiwidW5pdFZhbHVlIiwidGFibGUiLCJvbmNsaWNrIiwiaW1nIiwiY2xvc2VJbWFnZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiaWRfZXhpc3RpbmdfcGxheWVyIiwiaWRfZXhpc3RpbmdfaGVybyIsInNldHRpbmdzRmllbGRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJlbGVtZW50IiwiaWQiLCJzYXZlZFZhbHVlIiwib25jaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWVTZXQiLCJyYWNlU2VsZWN0ZWQiLCJjYXN0bGVQcm9maWxlRWxlbWVudCIsImNhc3RsZVByb2ZpbGUiLCJrZXlzIiwidmFsdWVzIiwibmV3Q2FzdGxlUHJvZmlsZSJdLCJzb3VyY2VSb290IjoiIn0=