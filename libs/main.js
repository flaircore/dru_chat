/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/pusher-js/dist/web/pusher.js":
/*!***************************************************!*\
  !*** ./node_modules/pusher-js/dist/web/pusher.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Pusher JavaScript Library v7.0.3
 * https://pusher.com/
 *
 * Copyright 2020, Pusher
 * Released under the MIT licence.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package base64 implements Base64 encoding and decoding.
 */
// Invalid character used in decoding to indicate
// that the character to decode is out of range of
// alphabet and cannot be decoded.
var INVALID_BYTE = 256;
/**
 * Implements standard Base64 encoding.
 *
 * Operates in constant time.
 */
var Coder = /** @class */ (function () {
    // TODO(dchest): methods to encode chunk-by-chunk.
    function Coder(_paddingCharacter) {
        if (_paddingCharacter === void 0) { _paddingCharacter = "="; }
        this._paddingCharacter = _paddingCharacter;
    }
    Coder.prototype.encodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 8 + 5) / 6 | 0;
        }
        return (length + 2) / 3 * 4 | 0;
    };
    Coder.prototype.encode = function (data) {
        var out = "";
        var i = 0;
        for (; i < data.length - 2; i += 3) {
            var c = (data[i] << 16) | (data[i + 1] << 8) | (data[i + 2]);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            out += this._encodeByte((c >>> 1 * 6) & 63);
            out += this._encodeByte((c >>> 0 * 6) & 63);
        }
        var left = data.length - i;
        if (left > 0) {
            var c = (data[i] << 16) | (left === 2 ? data[i + 1] << 8 : 0);
            out += this._encodeByte((c >>> 3 * 6) & 63);
            out += this._encodeByte((c >>> 2 * 6) & 63);
            if (left === 2) {
                out += this._encodeByte((c >>> 1 * 6) & 63);
            }
            else {
                out += this._paddingCharacter || "";
            }
            out += this._paddingCharacter || "";
        }
        return out;
    };
    Coder.prototype.maxDecodedLength = function (length) {
        if (!this._paddingCharacter) {
            return (length * 6 + 7) / 8 | 0;
        }
        return length / 4 * 3 | 0;
    };
    Coder.prototype.decodedLength = function (s) {
        return this.maxDecodedLength(s.length - this._getPaddingLength(s));
    };
    Coder.prototype.decode = function (s) {
        if (s.length === 0) {
            return new Uint8Array(0);
        }
        var paddingLength = this._getPaddingLength(s);
        var length = s.length - paddingLength;
        var out = new Uint8Array(this.maxDecodedLength(length));
        var op = 0;
        var i = 0;
        var haveBad = 0;
        var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
        for (; i < length - 4; i += 4) {
            v0 = this._decodeChar(s.charCodeAt(i + 0));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            out[op++] = (v1 << 4) | (v2 >>> 2);
            out[op++] = (v2 << 6) | v3;
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
            haveBad |= v2 & INVALID_BYTE;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (i < length - 1) {
            v0 = this._decodeChar(s.charCodeAt(i));
            v1 = this._decodeChar(s.charCodeAt(i + 1));
            out[op++] = (v0 << 2) | (v1 >>> 4);
            haveBad |= v0 & INVALID_BYTE;
            haveBad |= v1 & INVALID_BYTE;
        }
        if (i < length - 2) {
            v2 = this._decodeChar(s.charCodeAt(i + 2));
            out[op++] = (v1 << 4) | (v2 >>> 2);
            haveBad |= v2 & INVALID_BYTE;
        }
        if (i < length - 3) {
            v3 = this._decodeChar(s.charCodeAt(i + 3));
            out[op++] = (v2 << 6) | v3;
            haveBad |= v3 & INVALID_BYTE;
        }
        if (haveBad !== 0) {
            throw new Error("Base64Coder: incorrect characters for decoding");
        }
        return out;
    };
    // Standard encoding have the following encoded/decoded ranges,
    // which we need to convert between.
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  +   /
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   43  47
    //
    // Encode 6 bits in b into a new character.
    Coder.prototype._encodeByte = function (b) {
        // Encoding uses constant time operations as follows:
        //
        // 1. Define comparison of A with B using (A - B) >>> 8:
        //          if A > B, then result is positive integer
        //          if A <= B, then result is 0
        //
        // 2. Define selection of C or 0 using bitwise AND: X & C:
        //          if X == 0, then result is 0
        //          if X != 0, then result is C
        //
        // 3. Start with the smallest comparison (b >= 0), which is always
        //    true, so set the result to the starting ASCII value (65).
        //
        // 4. Continue comparing b to higher ASCII values, and selecting
        //    zero if comparison isn't true, otherwise selecting a value
        //    to add to result, which:
        //
        //          a) undoes the previous addition
        //          b) provides new value to add
        //
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 43);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 43) - 63 + 47);
        return String.fromCharCode(result);
    };
    // Decode a character code into a byte.
    // Must return 256 if character is out of alphabet range.
    Coder.prototype._decodeChar = function (c) {
        // Decoding works similar to encoding: using the same comparison
        // function, but now it works on ranges: result is always incremented
        // by value, but this value becomes zero if the range is not
        // satisfied.
        //
        // Decoding starts with invalid value, 256, which is then
        // subtracted when the range is satisfied. If none of the ranges
        // apply, the function returns 256, which is then checked by
        // the caller to throw error.
        var result = INVALID_BYTE; // start with invalid character
        // c == 43 (c > 42 and c < 44)
        result += (((42 - c) & (c - 44)) >>> 8) & (-INVALID_BYTE + c - 43 + 62);
        // c == 47 (c > 46 and c < 48)
        result += (((46 - c) & (c - 48)) >>> 8) & (-INVALID_BYTE + c - 47 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    Coder.prototype._getPaddingLength = function (s) {
        var paddingLength = 0;
        if (this._paddingCharacter) {
            for (var i = s.length - 1; i >= 0; i--) {
                if (s[i] !== this._paddingCharacter) {
                    break;
                }
                paddingLength++;
            }
            if (s.length < 4 || paddingLength > 2) {
                throw new Error("Base64Coder: incorrect padding");
            }
        }
        return paddingLength;
    };
    return Coder;
}());
exports.Coder = Coder;
var stdCoder = new Coder();
function encode(data) {
    return stdCoder.encode(data);
}
exports.encode = encode;
function decode(s) {
    return stdCoder.decode(s);
}
exports.decode = decode;
/**
 * Implements URL-safe Base64 encoding.
 * (Same as Base64, but '+' is replaced with '-', and '/' with '_').
 *
 * Operates in constant time.
 */
var URLSafeCoder = /** @class */ (function (_super) {
    __extends(URLSafeCoder, _super);
    function URLSafeCoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // URL-safe encoding have the following encoded/decoded ranges:
    //
    // ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789  -   _
    // Index:   0 - 25                    26 - 51              52 - 61   62  63
    // ASCII:  65 - 90                    97 - 122             48 - 57   45  95
    //
    URLSafeCoder.prototype._encodeByte = function (b) {
        var result = b;
        // b >= 0
        result += 65;
        // b > 25
        result += ((25 - b) >>> 8) & ((0 - 65) - 26 + 97);
        // b > 51
        result += ((51 - b) >>> 8) & ((26 - 97) - 52 + 48);
        // b > 61
        result += ((61 - b) >>> 8) & ((52 - 48) - 62 + 45);
        // b > 62
        result += ((62 - b) >>> 8) & ((62 - 45) - 63 + 95);
        return String.fromCharCode(result);
    };
    URLSafeCoder.prototype._decodeChar = function (c) {
        var result = INVALID_BYTE;
        // c == 45 (c > 44 and c < 46)
        result += (((44 - c) & (c - 46)) >>> 8) & (-INVALID_BYTE + c - 45 + 62);
        // c == 95 (c > 94 and c < 96)
        result += (((94 - c) & (c - 96)) >>> 8) & (-INVALID_BYTE + c - 95 + 63);
        // c > 47 and c < 58
        result += (((47 - c) & (c - 58)) >>> 8) & (-INVALID_BYTE + c - 48 + 52);
        // c > 64 and c < 91
        result += (((64 - c) & (c - 91)) >>> 8) & (-INVALID_BYTE + c - 65 + 0);
        // c > 96 and c < 123
        result += (((96 - c) & (c - 123)) >>> 8) & (-INVALID_BYTE + c - 97 + 26);
        return result;
    };
    return URLSafeCoder;
}(Coder));
exports.URLSafeCoder = URLSafeCoder;
var urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data) {
    return urlSafeCoder.encode(data);
}
exports.encodeURLSafe = encodeURLSafe;
function decodeURLSafe(s) {
    return urlSafeCoder.decode(s);
}
exports.decodeURLSafe = decodeURLSafe;
exports.encodedLength = function (length) {
    return stdCoder.encodedLength(length);
};
exports.maxDecodedLength = function (length) {
    return stdCoder.maxDecodedLength(length);
};
exports.decodedLength = function (s) {
    return stdCoder.decodedLength(s);
};
//# sourceMappingURL=base64.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Package utf8 implements UTF-8 encoding and decoding.
 */
var INVALID_UTF16 = "utf8: invalid string";
var INVALID_UTF8 = "utf8: invalid source encoding";
/**
 * Encodes the given string into UTF-8 byte array.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encode(s) {
    // Calculate result length and allocate output array.
    // encodedLength() also validates string and throws errors,
    // so we don't need repeat validation here.
    var arr = new Uint8Array(encodedLength(s));
    var pos = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            arr[pos++] = c;
        }
        else if (c < 0x800) {
            arr[pos++] = 0xc0 | c >> 6;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else if (c < 0xd800) {
            arr[pos++] = 0xe0 | c >> 12;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
        else {
            i++; // get one more character
            c = (c & 0x3ff) << 10;
            c |= s.charCodeAt(i) & 0x3ff;
            c += 0x10000;
            arr[pos++] = 0xf0 | c >> 18;
            arr[pos++] = 0x80 | (c >> 12) & 0x3f;
            arr[pos++] = 0x80 | (c >> 6) & 0x3f;
            arr[pos++] = 0x80 | c & 0x3f;
        }
    }
    return arr;
}
exports.encode = encode;
/**
 * Returns the number of bytes required to encode the given string into UTF-8.
 * Throws if the source string has invalid UTF-16 encoding.
 */
function encodedLength(s) {
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var c = s.charCodeAt(i);
        if (c < 0x80) {
            result += 1;
        }
        else if (c < 0x800) {
            result += 2;
        }
        else if (c < 0xd800) {
            result += 3;
        }
        else if (c <= 0xdfff) {
            if (i >= s.length - 1) {
                throw new Error(INVALID_UTF16);
            }
            i++; // "eat" next character
            result += 4;
        }
        else {
            throw new Error(INVALID_UTF16);
        }
    }
    return result;
}
exports.encodedLength = encodedLength;
/**
 * Decodes the given byte array from UTF-8 into a string.
 * Throws if encoding is invalid.
 */
function decode(arr) {
    var chars = [];
    for (var i = 0; i < arr.length; i++) {
        var b = arr[i];
        if (b & 0x80) {
            var min = void 0;
            if (b < 0xe0) {
                // Need 1 more byte.
                if (i >= arr.length) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                if ((n1 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x1f) << 6 | (n1 & 0x3f);
                min = 0x80;
            }
            else if (b < 0xf0) {
                // Need 2 more bytes.
                if (i >= arr.length - 1) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 12 | (n1 & 0x3f) << 6 | (n2 & 0x3f);
                min = 0x800;
            }
            else if (b < 0xf8) {
                // Need 3 more bytes.
                if (i >= arr.length - 2) {
                    throw new Error(INVALID_UTF8);
                }
                var n1 = arr[++i];
                var n2 = arr[++i];
                var n3 = arr[++i];
                if ((n1 & 0xc0) !== 0x80 || (n2 & 0xc0) !== 0x80 || (n3 & 0xc0) !== 0x80) {
                    throw new Error(INVALID_UTF8);
                }
                b = (b & 0x0f) << 18 | (n1 & 0x3f) << 12 | (n2 & 0x3f) << 6 | (n3 & 0x3f);
                min = 0x10000;
            }
            else {
                throw new Error(INVALID_UTF8);
            }
            if (b < min || (b >= 0xd800 && b <= 0xdfff)) {
                throw new Error(INVALID_UTF8);
            }
            if (b >= 0x10000) {
                // Surrogate pair.
                if (b > 0x10ffff) {
                    throw new Error(INVALID_UTF8);
                }
                b -= 0x10000;
                chars.push(String.fromCharCode(0xd800 | (b >> 10)));
                b = 0xdc00 | (b & 0x3ff);
            }
        }
        chars.push(String.fromCharCode(b));
    }
    return chars.join("");
}
exports.decode = decode;
//# sourceMappingURL=utf8.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// required so we don't have to do require('pusher').default etc.
module.exports = __webpack_require__(3).default;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_receiver_factory.ts
var ScriptReceiverFactory = (function () {
    function ScriptReceiverFactory(prefix, name) {
        this.lastId = 0;
        this.prefix = prefix;
        this.name = name;
    }
    ScriptReceiverFactory.prototype.create = function (callback) {
        this.lastId++;
        var number = this.lastId;
        var id = this.prefix + number;
        var name = this.name + '[' + number + ']';
        var called = false;
        var callbackWrapper = function () {
            if (!called) {
                callback.apply(null, arguments);
                called = true;
            }
        };
        this[number] = callbackWrapper;
        return { number: number, id: id, name: name, callback: callbackWrapper };
    };
    ScriptReceiverFactory.prototype.remove = function (receiver) {
        delete this[receiver.number];
    };
    return ScriptReceiverFactory;
}());

var ScriptReceivers = new ScriptReceiverFactory('_pusher_script_', 'Pusher.ScriptReceivers');

// CONCATENATED MODULE: ./src/core/defaults.ts
var Defaults = {
    VERSION: "7.0.3",
    PROTOCOL: 7,
    wsPort: 80,
    wssPort: 443,
    wsPath: '',
    httpHost: 'sockjs.pusher.com',
    httpPort: 80,
    httpsPort: 443,
    httpPath: '/pusher',
    stats_host: 'stats.pusher.com',
    authEndpoint: '/pusher/auth',
    authTransport: 'ajax',
    activityTimeout: 120000,
    pongTimeout: 30000,
    unavailableTimeout: 10000,
    cluster: 'mt1',
    cdn_http: "http://js.pusher.com",
    cdn_https: "https://js.pusher.com",
    dependency_suffix: ""
};
/* harmony default export */ var defaults = (Defaults);

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependency_loader.ts


var dependency_loader_DependencyLoader = (function () {
    function DependencyLoader(options) {
        this.options = options;
        this.receivers = options.receivers || ScriptReceivers;
        this.loading = {};
    }
    DependencyLoader.prototype.load = function (name, options, callback) {
        var self = this;
        if (self.loading[name] && self.loading[name].length > 0) {
            self.loading[name].push(callback);
        }
        else {
            self.loading[name] = [callback];
            var request = runtime.createScriptRequest(self.getPath(name, options));
            var receiver = self.receivers.create(function (error) {
                self.receivers.remove(receiver);
                if (self.loading[name]) {
                    var callbacks = self.loading[name];
                    delete self.loading[name];
                    var successCallback = function (wasSuccessful) {
                        if (!wasSuccessful) {
                            request.cleanup();
                        }
                    };
                    for (var i = 0; i < callbacks.length; i++) {
                        callbacks[i](error, successCallback);
                    }
                }
            });
            request.send(receiver);
        }
    };
    DependencyLoader.prototype.getRoot = function (options) {
        var cdn;
        var protocol = runtime.getDocument().location.protocol;
        if ((options && options.useTLS) || protocol === 'https:') {
            cdn = this.options.cdn_https;
        }
        else {
            cdn = this.options.cdn_http;
        }
        return cdn.replace(/\/*$/, '') + '/' + this.options.version;
    };
    DependencyLoader.prototype.getPath = function (name, options) {
        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
    };
    return DependencyLoader;
}());
/* harmony default export */ var dependency_loader = (dependency_loader_DependencyLoader);

// CONCATENATED MODULE: ./src/runtimes/web/dom/dependencies.ts



var DependenciesReceivers = new ScriptReceiverFactory('_pusher_dependencies', 'Pusher.DependenciesReceivers');
var Dependencies = new dependency_loader({
    cdn_http: defaults.cdn_http,
    cdn_https: defaults.cdn_https,
    version: defaults.VERSION,
    suffix: defaults.dependency_suffix,
    receivers: DependenciesReceivers
});

// CONCATENATED MODULE: ./src/core/utils/url_store.ts
var urlStore = {
    baseUrl: 'https://pusher.com',
    urls: {
        authenticationEndpoint: {
            path: '/docs/authenticating_users'
        },
        javascriptQuickStart: {
            path: '/docs/javascript_quick_start'
        },
        triggeringClientEvents: {
            path: '/docs/client_api_guide/client_events#trigger-events'
        },
        encryptedChannelSupport: {
            fullUrl: 'https://github.com/pusher/pusher-js/tree/cc491015371a4bde5743d1c87a0fbac0feb53195#encrypted-channel-support'
        }
    }
};
var buildLogSuffix = function (key) {
    var urlPrefix = 'See:';
    var urlObj = urlStore.urls[key];
    if (!urlObj)
        return '';
    var url;
    if (urlObj.fullUrl) {
        url = urlObj.fullUrl;
    }
    else if (urlObj.path) {
        url = urlStore.baseUrl + urlObj.path;
    }
    if (!url)
        return '';
    return urlPrefix + " " + url;
};
/* harmony default export */ var url_store = ({ buildLogSuffix: buildLogSuffix });

// CONCATENATED MODULE: ./src/core/errors.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BadEventName = (function (_super) {
    __extends(BadEventName, _super);
    function BadEventName(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return BadEventName;
}(Error));

var RequestTimedOut = (function (_super) {
    __extends(RequestTimedOut, _super);
    function RequestTimedOut(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return RequestTimedOut;
}(Error));

var TransportPriorityTooLow = (function (_super) {
    __extends(TransportPriorityTooLow, _super);
    function TransportPriorityTooLow(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return TransportPriorityTooLow;
}(Error));

var TransportClosed = (function (_super) {
    __extends(TransportClosed, _super);
    function TransportClosed(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return TransportClosed;
}(Error));

var UnsupportedFeature = (function (_super) {
    __extends(UnsupportedFeature, _super);
    function UnsupportedFeature(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return UnsupportedFeature;
}(Error));

var UnsupportedTransport = (function (_super) {
    __extends(UnsupportedTransport, _super);
    function UnsupportedTransport(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return UnsupportedTransport;
}(Error));

var UnsupportedStrategy = (function (_super) {
    __extends(UnsupportedStrategy, _super);
    function UnsupportedStrategy(msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return UnsupportedStrategy;
}(Error));

var HTTPAuthError = (function (_super) {
    __extends(HTTPAuthError, _super);
    function HTTPAuthError(status, msg) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, msg) || this;
        _this.status = status;
        Object.setPrototypeOf(_this, _newTarget.prototype);
        return _this;
    }
    return HTTPAuthError;
}(Error));


// CONCATENATED MODULE: ./src/runtimes/isomorphic/auth/xhr_auth.ts



var ajax = function (context, socketId, callback) {
    var self = this, xhr;
    xhr = runtime.createXHR();
    xhr.open('POST', self.options.authEndpoint, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    for (var headerName in this.authOptions.headers) {
        xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = void 0;
                var parsed = false;
                try {
                    data = JSON.parse(xhr.responseText);
                    parsed = true;
                }
                catch (e) {
                    callback(new HTTPAuthError(200, 'JSON returned from auth endpoint was invalid, yet status code was 200. Data was: ' +
                        xhr.responseText), { auth: '' });
                }
                if (parsed) {
                    callback(null, data);
                }
            }
            else {
                var suffix = url_store.buildLogSuffix('authenticationEndpoint');
                callback(new HTTPAuthError(xhr.status, 'Unable to retrieve auth string from auth endpoint - ' +
                    ("received status: " + xhr.status + " from " + self.options.authEndpoint + ". ") +
                    ("Clients must be authenticated to join private or presence channels. " + suffix)), { auth: '' });
            }
        }
    };
    xhr.send(this.composeQuery(socketId));
    return xhr;
};
/* harmony default export */ var xhr_auth = (ajax);

// CONCATENATED MODULE: ./src/core/base64.ts
function encode(s) {
    return btoa(utob(s));
}
var fromCharCode = String.fromCharCode;
var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var b64tab = {};
for (var base64_i = 0, l = b64chars.length; base64_i < l; base64_i++) {
    b64tab[b64chars.charAt(base64_i)] = base64_i;
}
var cb_utob = function (c) {
    var cc = c.charCodeAt(0);
    return cc < 0x80
        ? c
        : cc < 0x800
            ? fromCharCode(0xc0 | (cc >>> 6)) + fromCharCode(0x80 | (cc & 0x3f))
            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
                fromCharCode(0x80 | (cc & 0x3f));
};
var utob = function (u) {
    return u.replace(/[^\x00-\x7F]/g, cb_utob);
};
var cb_encode = function (ccc) {
    var padlen = [0, 2, 1][ccc.length % 3];
    var ord = (ccc.charCodeAt(0) << 16) |
        ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) |
        (ccc.length > 2 ? ccc.charCodeAt(2) : 0);
    var chars = [
        b64chars.charAt(ord >>> 18),
        b64chars.charAt((ord >>> 12) & 63),
        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
    ];
    return chars.join('');
};
var btoa = window.btoa ||
    function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };

// CONCATENATED MODULE: ./src/core/utils/timers/abstract_timer.ts
var Timer = (function () {
    function Timer(set, clear, delay, callback) {
        var _this = this;
        this.clear = clear;
        this.timer = set(function () {
            if (_this.timer) {
                _this.timer = callback(_this.timer);
            }
        }, delay);
    }
    Timer.prototype.isRunning = function () {
        return this.timer !== null;
    };
    Timer.prototype.ensureAborted = function () {
        if (this.timer) {
            this.clear(this.timer);
            this.timer = null;
        }
    };
    return Timer;
}());
/* harmony default export */ var abstract_timer = (Timer);

// CONCATENATED MODULE: ./src/core/utils/timers/index.ts
var timers_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function timers_clearTimeout(timer) {
    window.clearTimeout(timer);
}
function timers_clearInterval(timer) {
    window.clearInterval(timer);
}
var OneOffTimer = (function (_super) {
    timers_extends(OneOffTimer, _super);
    function OneOffTimer(delay, callback) {
        return _super.call(this, setTimeout, timers_clearTimeout, delay, function (timer) {
            callback();
            return null;
        }) || this;
    }
    return OneOffTimer;
}(abstract_timer));

var PeriodicTimer = (function (_super) {
    timers_extends(PeriodicTimer, _super);
    function PeriodicTimer(delay, callback) {
        return _super.call(this, setInterval, timers_clearInterval, delay, function (timer) {
            callback();
            return timer;
        }) || this;
    }
    return PeriodicTimer;
}(abstract_timer));


// CONCATENATED MODULE: ./src/core/util.ts

var Util = {
    now: function () {
        if (Date.now) {
            return Date.now();
        }
        else {
            return new Date().valueOf();
        }
    },
    defer: function (callback) {
        return new OneOffTimer(0, callback);
    },
    method: function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var boundArguments = Array.prototype.slice.call(arguments, 1);
        return function (object) {
            return object[name].apply(object, boundArguments.concat(arguments));
        };
    }
};
/* harmony default export */ var util = (Util);

// CONCATENATED MODULE: ./src/core/utils/collections.ts


function extend(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < sources.length; i++) {
        var extensions = sources[i];
        for (var property in extensions) {
            if (extensions[property] &&
                extensions[property].constructor &&
                extensions[property].constructor === Object) {
                target[property] = extend(target[property] || {}, extensions[property]);
            }
            else {
                target[property] = extensions[property];
            }
        }
    }
    return target;
}
function stringify() {
    var m = ['Pusher'];
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            m.push(arguments[i]);
        }
        else {
            m.push(safeJSONStringify(arguments[i]));
        }
    }
    return m.join(' : ');
}
function arrayIndexOf(array, item) {
    var nativeIndexOf = Array.prototype.indexOf;
    if (array === null) {
        return -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
        return array.indexOf(item);
    }
    for (var i = 0, l = array.length; i < l; i++) {
        if (array[i] === item) {
            return i;
        }
    }
    return -1;
}
function objectApply(object, f) {
    for (var key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            f(object[key], key, object);
        }
    }
}
function keys(object) {
    var keys = [];
    objectApply(object, function (_, key) {
        keys.push(key);
    });
    return keys;
}
function values(object) {
    var values = [];
    objectApply(object, function (value) {
        values.push(value);
    });
    return values;
}
function apply(array, f, context) {
    for (var i = 0; i < array.length; i++) {
        f.call(context || window, array[i], i, array);
    }
}
function map(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        result.push(f(array[i], i, array, result));
    }
    return result;
}
function mapObject(object, f) {
    var result = {};
    objectApply(object, function (value, key) {
        result[key] = f(value);
    });
    return result;
}
function filter(array, test) {
    test =
        test ||
            function (value) {
                return !!value;
            };
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array, result)) {
            result.push(array[i]);
        }
    }
    return result;
}
function filterObject(object, test) {
    var result = {};
    objectApply(object, function (value, key) {
        if ((test && test(value, key, object, result)) || Boolean(value)) {
            result[key] = value;
        }
    });
    return result;
}
function flatten(object) {
    var result = [];
    objectApply(object, function (value, key) {
        result.push([key, value]);
    });
    return result;
}
function any(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
function collections_all(array, test) {
    for (var i = 0; i < array.length; i++) {
        if (!test(array[i], i, array)) {
            return false;
        }
    }
    return true;
}
function encodeParamsObject(data) {
    return mapObject(data, function (value) {
        if (typeof value === 'object') {
            value = safeJSONStringify(value);
        }
        return encodeURIComponent(encode(value.toString()));
    });
}
function buildQueryString(data) {
    var params = filterObject(data, function (value) {
        return value !== undefined;
    });
    var query = map(flatten(encodeParamsObject(params)), util.method('join', '=')).join('&');
    return query;
}
function decycleObject(object) {
    var objects = [], paths = [];
    return (function derez(value, path) {
        var i, name, nu;
        switch (typeof value) {
            case 'object':
                if (!value) {
                    return null;
                }
                for (i = 0; i < objects.length; i += 1) {
                    if (objects[i] === value) {
                        return { $ref: paths[i] };
                    }
                }
                objects.push(value);
                paths.push(path);
                if (Object.prototype.toString.apply(value) === '[object Array]') {
                    nu = [];
                    for (i = 0; i < value.length; i += 1) {
                        nu[i] = derez(value[i], path + '[' + i + ']');
                    }
                }
                else {
                    nu = {};
                    for (name in value) {
                        if (Object.prototype.hasOwnProperty.call(value, name)) {
                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
                        }
                    }
                }
                return nu;
            case 'number':
            case 'string':
            case 'boolean':
                return value;
        }
    })(object, '$');
}
function safeJSONStringify(source) {
    try {
        return JSON.stringify(source);
    }
    catch (e) {
        return JSON.stringify(decycleObject(source));
    }
}

// CONCATENATED MODULE: ./src/core/logger.ts


var logger_Logger = (function () {
    function Logger() {
        this.globalLog = function (message) {
            if (window.console && window.console.log) {
                window.console.log(message);
            }
        };
    }
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(this.globalLog, args);
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(this.globalLogWarn, args);
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log(this.globalLogError, args);
    };
    Logger.prototype.globalLogWarn = function (message) {
        if (window.console && window.console.warn) {
            window.console.warn(message);
        }
        else {
            this.globalLog(message);
        }
    };
    Logger.prototype.globalLogError = function (message) {
        if (window.console && window.console.error) {
            window.console.error(message);
        }
        else {
            this.globalLogWarn(message);
        }
    };
    Logger.prototype.log = function (defaultLoggingFunction) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var message = stringify.apply(this, arguments);
        if (core_pusher.log) {
            core_pusher.log(message);
        }
        else if (core_pusher.logToConsole) {
            var log = defaultLoggingFunction.bind(this);
            log(message);
        }
    };
    return Logger;
}());
/* harmony default export */ var logger = (new logger_Logger());

// CONCATENATED MODULE: ./src/runtimes/web/auth/jsonp_auth.ts

var jsonp = function (context, socketId, callback) {
    if (this.authOptions.headers !== undefined) {
        logger.warn('To send headers with the auth request, you must use AJAX, rather than JSONP.');
    }
    var callbackName = context.nextAuthCallbackID.toString();
    context.nextAuthCallbackID++;
    var document = context.getDocument();
    var script = document.createElement('script');
    context.auth_callbacks[callbackName] = function (data) {
        callback(null, data);
    };
    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
    script.src =
        this.options.authEndpoint +
            '?callback=' +
            encodeURIComponent(callback_name) +
            '&' +
            this.composeQuery(socketId);
    var head = document.getElementsByTagName('head')[0] || document.documentElement;
    head.insertBefore(script, head.firstChild);
};
/* harmony default export */ var jsonp_auth = (jsonp);

// CONCATENATED MODULE: ./src/runtimes/web/dom/script_request.ts
var ScriptRequest = (function () {
    function ScriptRequest(src) {
        this.src = src;
    }
    ScriptRequest.prototype.send = function (receiver) {
        var self = this;
        var errorString = 'Error loading ' + self.src;
        self.script = document.createElement('script');
        self.script.id = receiver.id;
        self.script.src = self.src;
        self.script.type = 'text/javascript';
        self.script.charset = 'UTF-8';
        if (self.script.addEventListener) {
            self.script.onerror = function () {
                receiver.callback(errorString);
            };
            self.script.onload = function () {
                receiver.callback(null);
            };
        }
        else {
            self.script.onreadystatechange = function () {
                if (self.script.readyState === 'loaded' ||
                    self.script.readyState === 'complete') {
                    receiver.callback(null);
                }
            };
        }
        if (self.script.async === undefined &&
            document.attachEvent &&
            /opera/i.test(navigator.userAgent)) {
            self.errorScript = document.createElement('script');
            self.errorScript.id = receiver.id + '_error';
            self.errorScript.text = receiver.name + "('" + errorString + "');";
            self.script.async = self.errorScript.async = false;
        }
        else {
            self.script.async = true;
        }
        var head = document.getElementsByTagName('head')[0];
        head.insertBefore(self.script, head.firstChild);
        if (self.errorScript) {
            head.insertBefore(self.errorScript, self.script.nextSibling);
        }
    };
    ScriptRequest.prototype.cleanup = function () {
        if (this.script) {
            this.script.onload = this.script.onerror = null;
            this.script.onreadystatechange = null;
        }
        if (this.script && this.script.parentNode) {
            this.script.parentNode.removeChild(this.script);
        }
        if (this.errorScript && this.errorScript.parentNode) {
            this.errorScript.parentNode.removeChild(this.errorScript);
        }
        this.script = null;
        this.errorScript = null;
    };
    return ScriptRequest;
}());
/* harmony default export */ var script_request = (ScriptRequest);

// CONCATENATED MODULE: ./src/runtimes/web/dom/jsonp_request.ts


var jsonp_request_JSONPRequest = (function () {
    function JSONPRequest(url, data) {
        this.url = url;
        this.data = data;
    }
    JSONPRequest.prototype.send = function (receiver) {
        if (this.request) {
            return;
        }
        var query = buildQueryString(this.data);
        var url = this.url + '/' + receiver.number + '?' + query;
        this.request = runtime.createScriptRequest(url);
        this.request.send(receiver);
    };
    JSONPRequest.prototype.cleanup = function () {
        if (this.request) {
            this.request.cleanup();
        }
    };
    return JSONPRequest;
}());
/* harmony default export */ var jsonp_request = (jsonp_request_JSONPRequest);

// CONCATENATED MODULE: ./src/runtimes/web/timeline/jsonp_timeline.ts


var getAgent = function (sender, useTLS) {
    return function (data, callback) {
        var scheme = 'http' + (useTLS ? 's' : '') + '://';
        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
        var request = runtime.createJSONPRequest(url, data);
        var receiver = runtime.ScriptReceivers.create(function (error, result) {
            ScriptReceivers.remove(receiver);
            request.cleanup();
            if (result && result.host) {
                sender.host = result.host;
            }
            if (callback) {
                callback(error, result);
            }
        });
        request.send(receiver);
    };
};
var jsonp_timeline_jsonp = {
    name: 'jsonp',
    getAgent: getAgent
};
/* harmony default export */ var jsonp_timeline = (jsonp_timeline_jsonp);

// CONCATENATED MODULE: ./src/core/transports/url_schemes.ts

function getGenericURL(baseScheme, params, path) {
    var scheme = baseScheme + (params.useTLS ? 's' : '');
    var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
    return scheme + '://' + host + path;
}
function getGenericPath(key, queryString) {
    var path = '/app/' + key;
    var query = '?protocol=' +
        defaults.PROTOCOL +
        '&client=js' +
        '&version=' +
        defaults.VERSION +
        (queryString ? '&' + queryString : '');
    return path + query;
}
var ws = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '') + getGenericPath(key, 'flash=false');
        return getGenericURL('ws', params, path);
    }
};
var http = {
    getInitial: function (key, params) {
        var path = (params.httpPath || '/pusher') + getGenericPath(key);
        return getGenericURL('http', params, path);
    }
};
var sockjs = {
    getInitial: function (key, params) {
        return getGenericURL('http', params, params.httpPath || '/pusher');
    },
    getPath: function (key, params) {
        return getGenericPath(key);
    }
};

// CONCATENATED MODULE: ./src/core/events/callback_registry.ts

var callback_registry_CallbackRegistry = (function () {
    function CallbackRegistry() {
        this._callbacks = {};
    }
    CallbackRegistry.prototype.get = function (name) {
        return this._callbacks[prefix(name)];
    };
    CallbackRegistry.prototype.add = function (name, callback, context) {
        var prefixedEventName = prefix(name);
        this._callbacks[prefixedEventName] =
            this._callbacks[prefixedEventName] || [];
        this._callbacks[prefixedEventName].push({
            fn: callback,
            context: context
        });
    };
    CallbackRegistry.prototype.remove = function (name, callback, context) {
        if (!name && !callback && !context) {
            this._callbacks = {};
            return;
        }
        var names = name ? [prefix(name)] : keys(this._callbacks);
        if (callback || context) {
            this.removeCallback(names, callback, context);
        }
        else {
            this.removeAllCallbacks(names);
        }
    };
    CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
        apply(names, function (name) {
            this._callbacks[name] = filter(this._callbacks[name] || [], function (binding) {
                return ((callback && callback !== binding.fn) ||
                    (context && context !== binding.context));
            });
            if (this._callbacks[name].length === 0) {
                delete this._callbacks[name];
            }
        }, this);
    };
    CallbackRegistry.prototype.removeAllCallbacks = function (names) {
        apply(names, function (name) {
            delete this._callbacks[name];
        }, this);
    };
    return CallbackRegistry;
}());
/* harmony default export */ var callback_registry = (callback_registry_CallbackRegistry);
function prefix(name) {
    return '_' + name;
}

// CONCATENATED MODULE: ./src/core/events/dispatcher.ts


var dispatcher_Dispatcher = (function () {
    function Dispatcher(failThrough) {
        this.callbacks = new callback_registry();
        this.global_callbacks = [];
        this.failThrough = failThrough;
    }
    Dispatcher.prototype.bind = function (eventName, callback, context) {
        this.callbacks.add(eventName, callback, context);
        return this;
    };
    Dispatcher.prototype.bind_global = function (callback) {
        this.global_callbacks.push(callback);
        return this;
    };
    Dispatcher.prototype.unbind = function (eventName, callback, context) {
        this.callbacks.remove(eventName, callback, context);
        return this;
    };
    Dispatcher.prototype.unbind_global = function (callback) {
        if (!callback) {
            this.global_callbacks = [];
            return this;
        }
        this.global_callbacks = filter(this.global_callbacks || [], function (c) { return c !== callback; });
        return this;
    };
    Dispatcher.prototype.unbind_all = function () {
        this.unbind();
        this.unbind_global();
        return this;
    };
    Dispatcher.prototype.emit = function (eventName, data, metadata) {
        for (var i = 0; i < this.global_callbacks.length; i++) {
            this.global_callbacks[i](eventName, data);
        }
        var callbacks = this.callbacks.get(eventName);
        var args = [];
        if (metadata) {
            args.push(data, metadata);
        }
        else if (data) {
            args.push(data);
        }
        if (callbacks && callbacks.length > 0) {
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i].fn.apply(callbacks[i].context || window, args);
            }
        }
        else if (this.failThrough) {
            this.failThrough(eventName, data);
        }
        return this;
    };
    return Dispatcher;
}());
/* harmony default export */ var dispatcher = (dispatcher_Dispatcher);

// CONCATENATED MODULE: ./src/core/transports/transport_connection.ts
var transport_connection_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var transport_connection_TransportConnection = (function (_super) {
    transport_connection_extends(TransportConnection, _super);
    function TransportConnection(hooks, name, priority, key, options) {
        var _this = _super.call(this) || this;
        _this.initialize = runtime.transportConnectionInitializer;
        _this.hooks = hooks;
        _this.name = name;
        _this.priority = priority;
        _this.key = key;
        _this.options = options;
        _this.state = 'new';
        _this.timeline = options.timeline;
        _this.activityTimeout = options.activityTimeout;
        _this.id = _this.timeline.generateUniqueID();
        return _this;
    }
    TransportConnection.prototype.handlesActivityChecks = function () {
        return Boolean(this.hooks.handlesActivityChecks);
    };
    TransportConnection.prototype.supportsPing = function () {
        return Boolean(this.hooks.supportsPing);
    };
    TransportConnection.prototype.connect = function () {
        var _this = this;
        if (this.socket || this.state !== 'initialized') {
            return false;
        }
        var url = this.hooks.urls.getInitial(this.key, this.options);
        try {
            this.socket = this.hooks.getSocket(url, this.options);
        }
        catch (e) {
            util.defer(function () {
                _this.onError(e);
                _this.changeState('closed');
            });
            return false;
        }
        this.bindListeners();
        logger.debug('Connecting', { transport: this.name, url: url });
        this.changeState('connecting');
        return true;
    };
    TransportConnection.prototype.close = function () {
        if (this.socket) {
            this.socket.close();
            return true;
        }
        else {
            return false;
        }
    };
    TransportConnection.prototype.send = function (data) {
        var _this = this;
        if (this.state === 'open') {
            util.defer(function () {
                if (_this.socket) {
                    _this.socket.send(data);
                }
            });
            return true;
        }
        else {
            return false;
        }
    };
    TransportConnection.prototype.ping = function () {
        if (this.state === 'open' && this.supportsPing()) {
            this.socket.ping();
        }
    };
    TransportConnection.prototype.onOpen = function () {
        if (this.hooks.beforeOpen) {
            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
        }
        this.changeState('open');
        this.socket.onopen = undefined;
    };
    TransportConnection.prototype.onError = function (error) {
        this.emit('error', { type: 'WebSocketError', error: error });
        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
    };
    TransportConnection.prototype.onClose = function (closeEvent) {
        if (closeEvent) {
            this.changeState('closed', {
                code: closeEvent.code,
                reason: closeEvent.reason,
                wasClean: closeEvent.wasClean
            });
        }
        else {
            this.changeState('closed');
        }
        this.unbindListeners();
        this.socket = undefined;
    };
    TransportConnection.prototype.onMessage = function (message) {
        this.emit('message', message);
    };
    TransportConnection.prototype.onActivity = function () {
        this.emit('activity');
    };
    TransportConnection.prototype.bindListeners = function () {
        var _this = this;
        this.socket.onopen = function () {
            _this.onOpen();
        };
        this.socket.onerror = function (error) {
            _this.onError(error);
        };
        this.socket.onclose = function (closeEvent) {
            _this.onClose(closeEvent);
        };
        this.socket.onmessage = function (message) {
            _this.onMessage(message);
        };
        if (this.supportsPing()) {
            this.socket.onactivity = function () {
                _this.onActivity();
            };
        }
    };
    TransportConnection.prototype.unbindListeners = function () {
        if (this.socket) {
            this.socket.onopen = undefined;
            this.socket.onerror = undefined;
            this.socket.onclose = undefined;
            this.socket.onmessage = undefined;
            if (this.supportsPing()) {
                this.socket.onactivity = undefined;
            }
        }
    };
    TransportConnection.prototype.changeState = function (state, params) {
        this.state = state;
        this.timeline.info(this.buildTimelineMessage({
            state: state,
            params: params
        }));
        this.emit(state, params);
    };
    TransportConnection.prototype.buildTimelineMessage = function (message) {
        return extend({ cid: this.id }, message);
    };
    return TransportConnection;
}(dispatcher));
/* harmony default export */ var transport_connection = (transport_connection_TransportConnection);

// CONCATENATED MODULE: ./src/core/transports/transport.ts

var transport_Transport = (function () {
    function Transport(hooks) {
        this.hooks = hooks;
    }
    Transport.prototype.isSupported = function (environment) {
        return this.hooks.isSupported(environment);
    };
    Transport.prototype.createConnection = function (name, priority, key, options) {
        return new transport_connection(this.hooks, name, priority, key, options);
    };
    return Transport;
}());
/* harmony default export */ var transports_transport = (transport_Transport);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/transports/transports.ts




var WSTransport = new transports_transport({
    urls: ws,
    handlesActivityChecks: false,
    supportsPing: false,
    isInitialized: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    isSupported: function () {
        return Boolean(runtime.getWebSocketAPI());
    },
    getSocket: function (url) {
        return runtime.createWebSocket(url);
    }
});
var httpConfiguration = {
    urls: http,
    handlesActivityChecks: false,
    supportsPing: true,
    isInitialized: function () {
        return true;
    }
};
var streamingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createStreamingSocket(url);
    }
}, httpConfiguration);
var pollingConfiguration = extend({
    getSocket: function (url) {
        return runtime.HTTPFactory.createPollingSocket(url);
    }
}, httpConfiguration);
var xhrConfiguration = {
    isSupported: function () {
        return runtime.isXHRSupported();
    }
};
var XHRStreamingTransport = new transports_transport((extend({}, streamingConfiguration, xhrConfiguration)));
var XHRPollingTransport = new transports_transport(extend({}, pollingConfiguration, xhrConfiguration));
var Transports = {
    ws: WSTransport,
    xhr_streaming: XHRStreamingTransport,
    xhr_polling: XHRPollingTransport
};
/* harmony default export */ var transports = (Transports);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transports.ts






var SockJSTransport = new transports_transport({
    file: 'sockjs',
    urls: sockjs,
    handlesActivityChecks: true,
    supportsPing: false,
    isSupported: function () {
        return true;
    },
    isInitialized: function () {
        return window.SockJS !== undefined;
    },
    getSocket: function (url, options) {
        return new window.SockJS(url, null, {
            js_path: Dependencies.getPath('sockjs', {
                useTLS: options.useTLS
            }),
            ignore_null_origin: options.ignoreNullOrigin
        });
    },
    beforeOpen: function (socket, path) {
        socket.send(JSON.stringify({
            path: path
        }));
    }
});
var xdrConfiguration = {
    isSupported: function (environment) {
        var yes = runtime.isXDRSupported(environment.useTLS);
        return yes;
    }
};
var XDRStreamingTransport = new transports_transport((extend({}, streamingConfiguration, xdrConfiguration)));
var XDRPollingTransport = new transports_transport(extend({}, pollingConfiguration, xdrConfiguration));
transports.xdr_streaming = XDRStreamingTransport;
transports.xdr_polling = XDRPollingTransport;
transports.sockjs = SockJSTransport;
/* harmony default export */ var transports_transports = (transports);

// CONCATENATED MODULE: ./src/runtimes/web/net_info.ts
var net_info_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NetInfo = (function (_super) {
    net_info_extends(NetInfo, _super);
    function NetInfo() {
        var _this = _super.call(this) || this;
        var self = _this;
        if (window.addEventListener !== undefined) {
            window.addEventListener('online', function () {
                self.emit('online');
            }, false);
            window.addEventListener('offline', function () {
                self.emit('offline');
            }, false);
        }
        return _this;
    }
    NetInfo.prototype.isOnline = function () {
        if (window.navigator.onLine === undefined) {
            return true;
        }
        else {
            return window.navigator.onLine;
        }
    };
    return NetInfo;
}(dispatcher));

var net_info_Network = new NetInfo();

// CONCATENATED MODULE: ./src/core/transports/assistant_to_the_transport_manager.ts


var assistant_to_the_transport_manager_AssistantToTheTransportManager = (function () {
    function AssistantToTheTransportManager(manager, transport, options) {
        this.manager = manager;
        this.transport = transport;
        this.minPingDelay = options.minPingDelay;
        this.maxPingDelay = options.maxPingDelay;
        this.pingDelay = undefined;
    }
    AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
        var _this = this;
        options = extend({}, options, {
            activityTimeout: this.pingDelay
        });
        var connection = this.transport.createConnection(name, priority, key, options);
        var openTimestamp = null;
        var onOpen = function () {
            connection.unbind('open', onOpen);
            connection.bind('closed', onClosed);
            openTimestamp = util.now();
        };
        var onClosed = function (closeEvent) {
            connection.unbind('closed', onClosed);
            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
                _this.manager.reportDeath();
            }
            else if (!closeEvent.wasClean && openTimestamp) {
                var lifespan = util.now() - openTimestamp;
                if (lifespan < 2 * _this.maxPingDelay) {
                    _this.manager.reportDeath();
                    _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
                }
            }
        };
        connection.bind('open', onOpen);
        return connection;
    };
    AssistantToTheTransportManager.prototype.isSupported = function (environment) {
        return this.manager.isAlive() && this.transport.isSupported(environment);
    };
    return AssistantToTheTransportManager;
}());
/* harmony default export */ var assistant_to_the_transport_manager = (assistant_to_the_transport_manager_AssistantToTheTransportManager);

// CONCATENATED MODULE: ./src/core/connection/protocol/protocol.ts
var Protocol = {
    decodeMessage: function (messageEvent) {
        try {
            var messageData = JSON.parse(messageEvent.data);
            var pusherEventData = messageData.data;
            if (typeof pusherEventData === 'string') {
                try {
                    pusherEventData = JSON.parse(messageData.data);
                }
                catch (e) { }
            }
            var pusherEvent = {
                event: messageData.event,
                channel: messageData.channel,
                data: pusherEventData
            };
            if (messageData.user_id) {
                pusherEvent.user_id = messageData.user_id;
            }
            return pusherEvent;
        }
        catch (e) {
            throw { type: 'MessageParseError', error: e, data: messageEvent.data };
        }
    },
    encodeMessage: function (event) {
        return JSON.stringify(event);
    },
    processHandshake: function (messageEvent) {
        var message = Protocol.decodeMessage(messageEvent);
        if (message.event === 'pusher:connection_established') {
            if (!message.data.activity_timeout) {
                throw 'No activity timeout specified in handshake';
            }
            return {
                action: 'connected',
                id: message.data.socket_id,
                activityTimeout: message.data.activity_timeout * 1000
            };
        }
        else if (message.event === 'pusher:error') {
            return {
                action: this.getCloseAction(message.data),
                error: this.getCloseError(message.data)
            };
        }
        else {
            throw 'Invalid handshake';
        }
    },
    getCloseAction: function (closeEvent) {
        if (closeEvent.code < 4000) {
            if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
                return 'backoff';
            }
            else {
                return null;
            }
        }
        else if (closeEvent.code === 4000) {
            return 'tls_only';
        }
        else if (closeEvent.code < 4100) {
            return 'refused';
        }
        else if (closeEvent.code < 4200) {
            return 'backoff';
        }
        else if (closeEvent.code < 4300) {
            return 'retry';
        }
        else {
            return 'refused';
        }
    },
    getCloseError: function (closeEvent) {
        if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
            return {
                type: 'PusherError',
                data: {
                    code: closeEvent.code,
                    message: closeEvent.reason || closeEvent.message
                }
            };
        }
        else {
            return null;
        }
    }
};
/* harmony default export */ var protocol_protocol = (Protocol);

// CONCATENATED MODULE: ./src/core/connection/connection.ts
var connection_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var connection_Connection = (function (_super) {
    connection_extends(Connection, _super);
    function Connection(id, transport) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.transport = transport;
        _this.activityTimeout = transport.activityTimeout;
        _this.bindListeners();
        return _this;
    }
    Connection.prototype.handlesActivityChecks = function () {
        return this.transport.handlesActivityChecks();
    };
    Connection.prototype.send = function (data) {
        return this.transport.send(data);
    };
    Connection.prototype.send_event = function (name, data, channel) {
        var event = { event: name, data: data };
        if (channel) {
            event.channel = channel;
        }
        logger.debug('Event sent', event);
        return this.send(protocol_protocol.encodeMessage(event));
    };
    Connection.prototype.ping = function () {
        if (this.transport.supportsPing()) {
            this.transport.ping();
        }
        else {
            this.send_event('pusher:ping', {});
        }
    };
    Connection.prototype.close = function () {
        this.transport.close();
    };
    Connection.prototype.bindListeners = function () {
        var _this = this;
        var listeners = {
            message: function (messageEvent) {
                var pusherEvent;
                try {
                    pusherEvent = protocol_protocol.decodeMessage(messageEvent);
                }
                catch (e) {
                    _this.emit('error', {
                        type: 'MessageParseError',
                        error: e,
                        data: messageEvent.data
                    });
                }
                if (pusherEvent !== undefined) {
                    logger.debug('Event recd', pusherEvent);
                    switch (pusherEvent.event) {
                        case 'pusher:error':
                            _this.emit('error', {
                                type: 'PusherError',
                                data: pusherEvent.data
                            });
                            break;
                        case 'pusher:ping':
                            _this.emit('ping');
                            break;
                        case 'pusher:pong':
                            _this.emit('pong');
                            break;
                    }
                    _this.emit('message', pusherEvent);
                }
            },
            activity: function () {
                _this.emit('activity');
            },
            error: function (error) {
                _this.emit('error', error);
            },
            closed: function (closeEvent) {
                unbindListeners();
                if (closeEvent && closeEvent.code) {
                    _this.handleCloseEvent(closeEvent);
                }
                _this.transport = null;
                _this.emit('closed');
            }
        };
        var unbindListeners = function () {
            objectApply(listeners, function (listener, event) {
                _this.transport.unbind(event, listener);
            });
        };
        objectApply(listeners, function (listener, event) {
            _this.transport.bind(event, listener);
        });
    };
    Connection.prototype.handleCloseEvent = function (closeEvent) {
        var action = protocol_protocol.getCloseAction(closeEvent);
        var error = protocol_protocol.getCloseError(closeEvent);
        if (error) {
            this.emit('error', error);
        }
        if (action) {
            this.emit(action, { action: action, error: error });
        }
    };
    return Connection;
}(dispatcher));
/* harmony default export */ var connection_connection = (connection_Connection);

// CONCATENATED MODULE: ./src/core/connection/handshake/index.ts



var handshake_Handshake = (function () {
    function Handshake(transport, callback) {
        this.transport = transport;
        this.callback = callback;
        this.bindListeners();
    }
    Handshake.prototype.close = function () {
        this.unbindListeners();
        this.transport.close();
    };
    Handshake.prototype.bindListeners = function () {
        var _this = this;
        this.onMessage = function (m) {
            _this.unbindListeners();
            var result;
            try {
                result = protocol_protocol.processHandshake(m);
            }
            catch (e) {
                _this.finish('error', { error: e });
                _this.transport.close();
                return;
            }
            if (result.action === 'connected') {
                _this.finish('connected', {
                    connection: new connection_connection(result.id, _this.transport),
                    activityTimeout: result.activityTimeout
                });
            }
            else {
                _this.finish(result.action, { error: result.error });
                _this.transport.close();
            }
        };
        this.onClosed = function (closeEvent) {
            _this.unbindListeners();
            var action = protocol_protocol.getCloseAction(closeEvent) || 'backoff';
            var error = protocol_protocol.getCloseError(closeEvent);
            _this.finish(action, { error: error });
        };
        this.transport.bind('message', this.onMessage);
        this.transport.bind('closed', this.onClosed);
    };
    Handshake.prototype.unbindListeners = function () {
        this.transport.unbind('message', this.onMessage);
        this.transport.unbind('closed', this.onClosed);
    };
    Handshake.prototype.finish = function (action, params) {
        this.callback(extend({ transport: this.transport, action: action }, params));
    };
    return Handshake;
}());
/* harmony default export */ var connection_handshake = (handshake_Handshake);

// CONCATENATED MODULE: ./src/core/auth/pusher_authorizer.ts

var pusher_authorizer_PusherAuthorizer = (function () {
    function PusherAuthorizer(channel, options) {
        this.channel = channel;
        var authTransport = options.authTransport;
        if (typeof runtime.getAuthorizers()[authTransport] === 'undefined') {
            throw "'" + authTransport + "' is not a recognized auth transport";
        }
        this.type = authTransport;
        this.options = options;
        this.authOptions = options.auth || {};
    }
    PusherAuthorizer.prototype.composeQuery = function (socketId) {
        var query = 'socket_id=' +
            encodeURIComponent(socketId) +
            '&channel_name=' +
            encodeURIComponent(this.channel.name);
        for (var i in this.authOptions.params) {
            query +=
                '&' +
                    encodeURIComponent(i) +
                    '=' +
                    encodeURIComponent(this.authOptions.params[i]);
        }
        return query;
    };
    PusherAuthorizer.prototype.authorize = function (socketId, callback) {
        PusherAuthorizer.authorizers =
            PusherAuthorizer.authorizers || runtime.getAuthorizers();
        PusherAuthorizer.authorizers[this.type].call(this, runtime, socketId, callback);
    };
    return PusherAuthorizer;
}());
/* harmony default export */ var pusher_authorizer = (pusher_authorizer_PusherAuthorizer);

// CONCATENATED MODULE: ./src/core/timeline/timeline_sender.ts

var timeline_sender_TimelineSender = (function () {
    function TimelineSender(timeline, options) {
        this.timeline = timeline;
        this.options = options || {};
    }
    TimelineSender.prototype.send = function (useTLS, callback) {
        if (this.timeline.isEmpty()) {
            return;
        }
        this.timeline.send(runtime.TimelineTransport.getAgent(this, useTLS), callback);
    };
    return TimelineSender;
}());
/* harmony default export */ var timeline_sender = (timeline_sender_TimelineSender);

// CONCATENATED MODULE: ./src/core/channels/channel.ts
var channel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var channel_Channel = (function (_super) {
    channel_extends(Channel, _super);
    function Channel(name, pusher) {
        var _this = _super.call(this, function (event, data) {
            logger.debug('No callbacks on ' + name + ' for ' + event);
        }) || this;
        _this.name = name;
        _this.pusher = pusher;
        _this.subscribed = false;
        _this.subscriptionPending = false;
        _this.subscriptionCancelled = false;
        return _this;
    }
    Channel.prototype.authorize = function (socketId, callback) {
        return callback(null, { auth: '' });
    };
    Channel.prototype.trigger = function (event, data) {
        if (event.indexOf('client-') !== 0) {
            throw new BadEventName("Event '" + event + "' does not start with 'client-'");
        }
        if (!this.subscribed) {
            var suffix = url_store.buildLogSuffix('triggeringClientEvents');
            logger.warn("Client event triggered before channel 'subscription_succeeded' event . " + suffix);
        }
        return this.pusher.send_event(event, data, this.name);
    };
    Channel.prototype.disconnect = function () {
        this.subscribed = false;
        this.subscriptionPending = false;
    };
    Channel.prototype.handleEvent = function (event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName === 'pusher_internal:subscription_succeeded') {
            this.handleSubscriptionSucceededEvent(event);
        }
        else if (eventName.indexOf('pusher_internal:') !== 0) {
            var metadata = {};
            this.emit(eventName, data, metadata);
        }
    };
    Channel.prototype.handleSubscriptionSucceededEvent = function (event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.emit('pusher:subscription_succeeded', event.data);
        }
    };
    Channel.prototype.subscribe = function () {
        var _this = this;
        if (this.subscribed) {
            return;
        }
        this.subscriptionPending = true;
        this.subscriptionCancelled = false;
        this.authorize(this.pusher.connection.socket_id, function (error, data) {
            if (error) {
                _this.subscriptionPending = false;
                logger.error(error.toString());
                _this.emit('pusher:subscription_error', Object.assign({}, {
                    type: 'AuthError',
                    error: error.message
                }, error instanceof HTTPAuthError ? { status: error.status } : {}));
            }
            else {
                _this.pusher.send_event('pusher:subscribe', {
                    auth: data.auth,
                    channel_data: data.channel_data,
                    channel: _this.name
                });
            }
        });
    };
    Channel.prototype.unsubscribe = function () {
        this.subscribed = false;
        this.pusher.send_event('pusher:unsubscribe', {
            channel: this.name
        });
    };
    Channel.prototype.cancelSubscription = function () {
        this.subscriptionCancelled = true;
    };
    Channel.prototype.reinstateSubscription = function () {
        this.subscriptionCancelled = false;
    };
    return Channel;
}(dispatcher));
/* harmony default export */ var channels_channel = (channel_Channel);

// CONCATENATED MODULE: ./src/core/channels/private_channel.ts
var private_channel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var private_channel_PrivateChannel = (function (_super) {
    private_channel_extends(PrivateChannel, _super);
    function PrivateChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PrivateChannel.prototype.authorize = function (socketId, callback) {
        var authorizer = factory.createAuthorizer(this, this.pusher.config);
        return authorizer.authorize(socketId, callback);
    };
    return PrivateChannel;
}(channels_channel));
/* harmony default export */ var private_channel = (private_channel_PrivateChannel);

// CONCATENATED MODULE: ./src/core/channels/members.ts

var members_Members = (function () {
    function Members() {
        this.reset();
    }
    Members.prototype.get = function (id) {
        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
            return {
                id: id,
                info: this.members[id]
            };
        }
        else {
            return null;
        }
    };
    Members.prototype.each = function (callback) {
        var _this = this;
        objectApply(this.members, function (member, id) {
            callback(_this.get(id));
        });
    };
    Members.prototype.setMyID = function (id) {
        this.myID = id;
    };
    Members.prototype.onSubscription = function (subscriptionData) {
        this.members = subscriptionData.presence.hash;
        this.count = subscriptionData.presence.count;
        this.me = this.get(this.myID);
    };
    Members.prototype.addMember = function (memberData) {
        if (this.get(memberData.user_id) === null) {
            this.count++;
        }
        this.members[memberData.user_id] = memberData.user_info;
        return this.get(memberData.user_id);
    };
    Members.prototype.removeMember = function (memberData) {
        var member = this.get(memberData.user_id);
        if (member) {
            delete this.members[memberData.user_id];
            this.count--;
        }
        return member;
    };
    Members.prototype.reset = function () {
        this.members = {};
        this.count = 0;
        this.myID = null;
        this.me = null;
    };
    return Members;
}());
/* harmony default export */ var members = (members_Members);

// CONCATENATED MODULE: ./src/core/channels/presence_channel.ts
var presence_channel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var presence_channel_PresenceChannel = (function (_super) {
    presence_channel_extends(PresenceChannel, _super);
    function PresenceChannel(name, pusher) {
        var _this = _super.call(this, name, pusher) || this;
        _this.members = new members();
        return _this;
    }
    PresenceChannel.prototype.authorize = function (socketId, callback) {
        var _this = this;
        _super.prototype.authorize.call(this, socketId, function (error, authData) {
            if (!error) {
                authData = authData;
                if (authData.channel_data === undefined) {
                    var suffix = url_store.buildLogSuffix('authenticationEndpoint');
                    logger.error("Invalid auth response for channel '" + _this.name + "'," +
                        ("expected 'channel_data' field. " + suffix));
                    callback('Invalid auth response');
                    return;
                }
                var channelData = JSON.parse(authData.channel_data);
                _this.members.setMyID(channelData.user_id);
            }
            callback(error, authData);
        });
    };
    PresenceChannel.prototype.handleEvent = function (event) {
        var eventName = event.event;
        if (eventName.indexOf('pusher_internal:') === 0) {
            this.handleInternalEvent(event);
        }
        else {
            var data = event.data;
            var metadata = {};
            if (event.user_id) {
                metadata.user_id = event.user_id;
            }
            this.emit(eventName, data, metadata);
        }
    };
    PresenceChannel.prototype.handleInternalEvent = function (event) {
        var eventName = event.event;
        var data = event.data;
        switch (eventName) {
            case 'pusher_internal:subscription_succeeded':
                this.handleSubscriptionSucceededEvent(event);
                break;
            case 'pusher_internal:member_added':
                var addedMember = this.members.addMember(data);
                this.emit('pusher:member_added', addedMember);
                break;
            case 'pusher_internal:member_removed':
                var removedMember = this.members.removeMember(data);
                if (removedMember) {
                    this.emit('pusher:member_removed', removedMember);
                }
                break;
        }
    };
    PresenceChannel.prototype.handleSubscriptionSucceededEvent = function (event) {
        this.subscriptionPending = false;
        this.subscribed = true;
        if (this.subscriptionCancelled) {
            this.pusher.unsubscribe(this.name);
        }
        else {
            this.members.onSubscription(event.data);
            this.emit('pusher:subscription_succeeded', this.members);
        }
    };
    PresenceChannel.prototype.disconnect = function () {
        this.members.reset();
        _super.prototype.disconnect.call(this);
    };
    return PresenceChannel;
}(private_channel));
/* harmony default export */ var presence_channel = (presence_channel_PresenceChannel);

// EXTERNAL MODULE: ./node_modules/@stablelib/utf8/lib/utf8.js
var utf8 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@stablelib/base64/lib/base64.js
var base64 = __webpack_require__(0);

// CONCATENATED MODULE: ./src/core/channels/encrypted_channel.ts
var encrypted_channel_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var encrypted_channel_EncryptedChannel = (function (_super) {
    encrypted_channel_extends(EncryptedChannel, _super);
    function EncryptedChannel(name, pusher, nacl) {
        var _this = _super.call(this, name, pusher) || this;
        _this.key = null;
        _this.nacl = nacl;
        return _this;
    }
    EncryptedChannel.prototype.authorize = function (socketId, callback) {
        var _this = this;
        _super.prototype.authorize.call(this, socketId, function (error, authData) {
            if (error) {
                callback(error, authData);
                return;
            }
            var sharedSecret = authData['shared_secret'];
            if (!sharedSecret) {
                callback(new Error("No shared_secret key in auth payload for encrypted channel: " + _this.name), null);
                return;
            }
            _this.key = Object(base64["decode"])(sharedSecret);
            delete authData['shared_secret'];
            callback(null, authData);
        });
    };
    EncryptedChannel.prototype.trigger = function (event, data) {
        throw new UnsupportedFeature('Client events are not currently supported for encrypted channels');
    };
    EncryptedChannel.prototype.handleEvent = function (event) {
        var eventName = event.event;
        var data = event.data;
        if (eventName.indexOf('pusher_internal:') === 0 ||
            eventName.indexOf('pusher:') === 0) {
            _super.prototype.handleEvent.call(this, event);
            return;
        }
        this.handleEncryptedEvent(eventName, data);
    };
    EncryptedChannel.prototype.handleEncryptedEvent = function (event, data) {
        var _this = this;
        if (!this.key) {
            logger.debug('Received encrypted event before key has been retrieved from the authEndpoint');
            return;
        }
        if (!data.ciphertext || !data.nonce) {
            logger.error('Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' +
                data);
            return;
        }
        var cipherText = Object(base64["decode"])(data.ciphertext);
        if (cipherText.length < this.nacl.secretbox.overheadLength) {
            logger.error("Expected encrypted event ciphertext length to be " + this.nacl.secretbox.overheadLength + ", got: " + cipherText.length);
            return;
        }
        var nonce = Object(base64["decode"])(data.nonce);
        if (nonce.length < this.nacl.secretbox.nonceLength) {
            logger.error("Expected encrypted event nonce length to be " + this.nacl.secretbox.nonceLength + ", got: " + nonce.length);
            return;
        }
        var bytes = this.nacl.secretbox.open(cipherText, nonce, this.key);
        if (bytes === null) {
            logger.debug('Failed to decrypt an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...');
            this.authorize(this.pusher.connection.socket_id, function (error, authData) {
                if (error) {
                    logger.error("Failed to make a request to the authEndpoint: " + authData + ". Unable to fetch new key, so dropping encrypted event");
                    return;
                }
                bytes = _this.nacl.secretbox.open(cipherText, nonce, _this.key);
                if (bytes === null) {
                    logger.error("Failed to decrypt event with new key. Dropping encrypted event");
                    return;
                }
                _this.emit(event, _this.getDataToEmit(bytes));
                return;
            });
            return;
        }
        this.emit(event, this.getDataToEmit(bytes));
    };
    EncryptedChannel.prototype.getDataToEmit = function (bytes) {
        var raw = Object(utf8["decode"])(bytes);
        try {
            return JSON.parse(raw);
        }
        catch (_a) {
            return raw;
        }
    };
    return EncryptedChannel;
}(private_channel));
/* harmony default export */ var encrypted_channel = (encrypted_channel_EncryptedChannel);

// CONCATENATED MODULE: ./src/core/connection/connection_manager.ts
var connection_manager_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var connection_manager_ConnectionManager = (function (_super) {
    connection_manager_extends(ConnectionManager, _super);
    function ConnectionManager(key, options) {
        var _this = _super.call(this) || this;
        _this.state = 'initialized';
        _this.connection = null;
        _this.key = key;
        _this.options = options;
        _this.timeline = _this.options.timeline;
        _this.usingTLS = _this.options.useTLS;
        _this.errorCallbacks = _this.buildErrorCallbacks();
        _this.connectionCallbacks = _this.buildConnectionCallbacks(_this.errorCallbacks);
        _this.handshakeCallbacks = _this.buildHandshakeCallbacks(_this.errorCallbacks);
        var Network = runtime.getNetwork();
        Network.bind('online', function () {
            _this.timeline.info({ netinfo: 'online' });
            if (_this.state === 'connecting' || _this.state === 'unavailable') {
                _this.retryIn(0);
            }
        });
        Network.bind('offline', function () {
            _this.timeline.info({ netinfo: 'offline' });
            if (_this.connection) {
                _this.sendActivityCheck();
            }
        });
        _this.updateStrategy();
        return _this;
    }
    ConnectionManager.prototype.connect = function () {
        if (this.connection || this.runner) {
            return;
        }
        if (!this.strategy.isSupported()) {
            this.updateState('failed');
            return;
        }
        this.updateState('connecting');
        this.startConnecting();
        this.setUnavailableTimer();
    };
    ConnectionManager.prototype.send = function (data) {
        if (this.connection) {
            return this.connection.send(data);
        }
        else {
            return false;
        }
    };
    ConnectionManager.prototype.send_event = function (name, data, channel) {
        if (this.connection) {
            return this.connection.send_event(name, data, channel);
        }
        else {
            return false;
        }
    };
    ConnectionManager.prototype.disconnect = function () {
        this.disconnectInternally();
        this.updateState('disconnected');
    };
    ConnectionManager.prototype.isUsingTLS = function () {
        return this.usingTLS;
    };
    ConnectionManager.prototype.startConnecting = function () {
        var _this = this;
        var callback = function (error, handshake) {
            if (error) {
                _this.runner = _this.strategy.connect(0, callback);
            }
            else {
                if (handshake.action === 'error') {
                    _this.emit('error', {
                        type: 'HandshakeError',
                        error: handshake.error
                    });
                    _this.timeline.error({ handshakeError: handshake.error });
                }
                else {
                    _this.abortConnecting();
                    _this.handshakeCallbacks[handshake.action](handshake);
                }
            }
        };
        this.runner = this.strategy.connect(0, callback);
    };
    ConnectionManager.prototype.abortConnecting = function () {
        if (this.runner) {
            this.runner.abort();
            this.runner = null;
        }
    };
    ConnectionManager.prototype.disconnectInternally = function () {
        this.abortConnecting();
        this.clearRetryTimer();
        this.clearUnavailableTimer();
        if (this.connection) {
            var connection = this.abandonConnection();
            connection.close();
        }
    };
    ConnectionManager.prototype.updateStrategy = function () {
        this.strategy = this.options.getStrategy({
            key: this.key,
            timeline: this.timeline,
            useTLS: this.usingTLS
        });
    };
    ConnectionManager.prototype.retryIn = function (delay) {
        var _this = this;
        this.timeline.info({ action: 'retry', delay: delay });
        if (delay > 0) {
            this.emit('connecting_in', Math.round(delay / 1000));
        }
        this.retryTimer = new OneOffTimer(delay || 0, function () {
            _this.disconnectInternally();
            _this.connect();
        });
    };
    ConnectionManager.prototype.clearRetryTimer = function () {
        if (this.retryTimer) {
            this.retryTimer.ensureAborted();
            this.retryTimer = null;
        }
    };
    ConnectionManager.prototype.setUnavailableTimer = function () {
        var _this = this;
        this.unavailableTimer = new OneOffTimer(this.options.unavailableTimeout, function () {
            _this.updateState('unavailable');
        });
    };
    ConnectionManager.prototype.clearUnavailableTimer = function () {
        if (this.unavailableTimer) {
            this.unavailableTimer.ensureAborted();
        }
    };
    ConnectionManager.prototype.sendActivityCheck = function () {
        var _this = this;
        this.stopActivityCheck();
        this.connection.ping();
        this.activityTimer = new OneOffTimer(this.options.pongTimeout, function () {
            _this.timeline.error({ pong_timed_out: _this.options.pongTimeout });
            _this.retryIn(0);
        });
    };
    ConnectionManager.prototype.resetActivityCheck = function () {
        var _this = this;
        this.stopActivityCheck();
        if (this.connection && !this.connection.handlesActivityChecks()) {
            this.activityTimer = new OneOffTimer(this.activityTimeout, function () {
                _this.sendActivityCheck();
            });
        }
    };
    ConnectionManager.prototype.stopActivityCheck = function () {
        if (this.activityTimer) {
            this.activityTimer.ensureAborted();
        }
    };
    ConnectionManager.prototype.buildConnectionCallbacks = function (errorCallbacks) {
        var _this = this;
        return extend({}, errorCallbacks, {
            message: function (message) {
                _this.resetActivityCheck();
                _this.emit('message', message);
            },
            ping: function () {
                _this.send_event('pusher:pong', {});
            },
            activity: function () {
                _this.resetActivityCheck();
            },
            error: function (error) {
                _this.emit('error', error);
            },
            closed: function () {
                _this.abandonConnection();
                if (_this.shouldRetry()) {
                    _this.retryIn(1000);
                }
            }
        });
    };
    ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
        var _this = this;
        return extend({}, errorCallbacks, {
            connected: function (handshake) {
                _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
                _this.clearUnavailableTimer();
                _this.setConnection(handshake.connection);
                _this.socket_id = _this.connection.id;
                _this.updateState('connected', { socket_id: _this.socket_id });
            }
        });
    };
    ConnectionManager.prototype.buildErrorCallbacks = function () {
        var _this = this;
        var withErrorEmitted = function (callback) {
            return function (result) {
                if (result.error) {
                    _this.emit('error', { type: 'WebSocketError', error: result.error });
                }
                callback(result);
            };
        };
        return {
            tls_only: withErrorEmitted(function () {
                _this.usingTLS = true;
                _this.updateStrategy();
                _this.retryIn(0);
            }),
            refused: withErrorEmitted(function () {
                _this.disconnect();
            }),
            backoff: withErrorEmitted(function () {
                _this.retryIn(1000);
            }),
            retry: withErrorEmitted(function () {
                _this.retryIn(0);
            })
        };
    };
    ConnectionManager.prototype.setConnection = function (connection) {
        this.connection = connection;
        for (var event in this.connectionCallbacks) {
            this.connection.bind(event, this.connectionCallbacks[event]);
        }
        this.resetActivityCheck();
    };
    ConnectionManager.prototype.abandonConnection = function () {
        if (!this.connection) {
            return;
        }
        this.stopActivityCheck();
        for (var event in this.connectionCallbacks) {
            this.connection.unbind(event, this.connectionCallbacks[event]);
        }
        var connection = this.connection;
        this.connection = null;
        return connection;
    };
    ConnectionManager.prototype.updateState = function (newState, data) {
        var previousState = this.state;
        this.state = newState;
        if (previousState !== newState) {
            var newStateDescription = newState;
            if (newStateDescription === 'connected') {
                newStateDescription += ' with new socket ID ' + data.socket_id;
            }
            logger.debug('State changed', previousState + ' -> ' + newStateDescription);
            this.timeline.info({ state: newState, params: data });
            this.emit('state_change', { previous: previousState, current: newState });
            this.emit(newState, data);
        }
    };
    ConnectionManager.prototype.shouldRetry = function () {
        return this.state === 'connecting' || this.state === 'connected';
    };
    return ConnectionManager;
}(dispatcher));
/* harmony default export */ var connection_manager = (connection_manager_ConnectionManager);

// CONCATENATED MODULE: ./src/core/channels/channels.ts




var channels_Channels = (function () {
    function Channels() {
        this.channels = {};
    }
    Channels.prototype.add = function (name, pusher) {
        if (!this.channels[name]) {
            this.channels[name] = createChannel(name, pusher);
        }
        return this.channels[name];
    };
    Channels.prototype.all = function () {
        return values(this.channels);
    };
    Channels.prototype.find = function (name) {
        return this.channels[name];
    };
    Channels.prototype.remove = function (name) {
        var channel = this.channels[name];
        delete this.channels[name];
        return channel;
    };
    Channels.prototype.disconnect = function () {
        objectApply(this.channels, function (channel) {
            channel.disconnect();
        });
    };
    return Channels;
}());
/* harmony default export */ var channels = (channels_Channels);
function createChannel(name, pusher) {
    if (name.indexOf('private-encrypted-') === 0) {
        if (pusher.config.nacl) {
            return factory.createEncryptedChannel(name, pusher, pusher.config.nacl);
        }
        var errMsg = 'Tried to subscribe to a private-encrypted- channel but no nacl implementation available';
        var suffix = url_store.buildLogSuffix('encryptedChannelSupport');
        throw new UnsupportedFeature(errMsg + ". " + suffix);
    }
    else if (name.indexOf('private-') === 0) {
        return factory.createPrivateChannel(name, pusher);
    }
    else if (name.indexOf('presence-') === 0) {
        return factory.createPresenceChannel(name, pusher);
    }
    else {
        return factory.createChannel(name, pusher);
    }
}

// CONCATENATED MODULE: ./src/core/utils/factory.ts










var Factory = {
    createChannels: function () {
        return new channels();
    },
    createConnectionManager: function (key, options) {
        return new connection_manager(key, options);
    },
    createChannel: function (name, pusher) {
        return new channels_channel(name, pusher);
    },
    createPrivateChannel: function (name, pusher) {
        return new private_channel(name, pusher);
    },
    createPresenceChannel: function (name, pusher) {
        return new presence_channel(name, pusher);
    },
    createEncryptedChannel: function (name, pusher, nacl) {
        return new encrypted_channel(name, pusher, nacl);
    },
    createTimelineSender: function (timeline, options) {
        return new timeline_sender(timeline, options);
    },
    createAuthorizer: function (channel, options) {
        if (options.authorizer) {
            return options.authorizer(channel, options);
        }
        return new pusher_authorizer(channel, options);
    },
    createHandshake: function (transport, callback) {
        return new connection_handshake(transport, callback);
    },
    createAssistantToTheTransportManager: function (manager, transport, options) {
        return new assistant_to_the_transport_manager(manager, transport, options);
    }
};
/* harmony default export */ var factory = (Factory);

// CONCATENATED MODULE: ./src/core/transports/transport_manager.ts

var transport_manager_TransportManager = (function () {
    function TransportManager(options) {
        this.options = options || {};
        this.livesLeft = this.options.lives || Infinity;
    }
    TransportManager.prototype.getAssistant = function (transport) {
        return factory.createAssistantToTheTransportManager(this, transport, {
            minPingDelay: this.options.minPingDelay,
            maxPingDelay: this.options.maxPingDelay
        });
    };
    TransportManager.prototype.isAlive = function () {
        return this.livesLeft > 0;
    };
    TransportManager.prototype.reportDeath = function () {
        this.livesLeft -= 1;
    };
    return TransportManager;
}());
/* harmony default export */ var transport_manager = (transport_manager_TransportManager);

// CONCATENATED MODULE: ./src/core/strategies/sequential_strategy.ts



var sequential_strategy_SequentialStrategy = (function () {
    function SequentialStrategy(strategies, options) {
        this.strategies = strategies;
        this.loop = Boolean(options.loop);
        this.failFast = Boolean(options.failFast);
        this.timeout = options.timeout;
        this.timeoutLimit = options.timeoutLimit;
    }
    SequentialStrategy.prototype.isSupported = function () {
        return any(this.strategies, util.method('isSupported'));
    };
    SequentialStrategy.prototype.connect = function (minPriority, callback) {
        var _this = this;
        var strategies = this.strategies;
        var current = 0;
        var timeout = this.timeout;
        var runner = null;
        var tryNextStrategy = function (error, handshake) {
            if (handshake) {
                callback(null, handshake);
            }
            else {
                current = current + 1;
                if (_this.loop) {
                    current = current % strategies.length;
                }
                if (current < strategies.length) {
                    if (timeout) {
                        timeout = timeout * 2;
                        if (_this.timeoutLimit) {
                            timeout = Math.min(timeout, _this.timeoutLimit);
                        }
                    }
                    runner = _this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: _this.failFast }, tryNextStrategy);
                }
                else {
                    callback(true);
                }
            }
        };
        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    };
    SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
        var timer = null;
        var runner = null;
        if (options.timeout > 0) {
            timer = new OneOffTimer(options.timeout, function () {
                runner.abort();
                callback(true);
            });
        }
        runner = strategy.connect(minPriority, function (error, handshake) {
            if (error && timer && timer.isRunning() && !options.failFast) {
                return;
            }
            if (timer) {
                timer.ensureAborted();
            }
            callback(error, handshake);
        });
        return {
            abort: function () {
                if (timer) {
                    timer.ensureAborted();
                }
                runner.abort();
            },
            forceMinPriority: function (p) {
                runner.forceMinPriority(p);
            }
        };
    };
    return SequentialStrategy;
}());
/* harmony default export */ var sequential_strategy = (sequential_strategy_SequentialStrategy);

// CONCATENATED MODULE: ./src/core/strategies/best_connected_ever_strategy.ts


var best_connected_ever_strategy_BestConnectedEverStrategy = (function () {
    function BestConnectedEverStrategy(strategies) {
        this.strategies = strategies;
    }
    BestConnectedEverStrategy.prototype.isSupported = function () {
        return any(this.strategies, util.method('isSupported'));
    };
    BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
        return connect(this.strategies, minPriority, function (i, runners) {
            return function (error, handshake) {
                runners[i].error = error;
                if (error) {
                    if (allRunnersFailed(runners)) {
                        callback(true);
                    }
                    return;
                }
                apply(runners, function (runner) {
                    runner.forceMinPriority(handshake.transport.priority);
                });
                callback(null, handshake);
            };
        });
    };
    return BestConnectedEverStrategy;
}());
/* harmony default export */ var best_connected_ever_strategy = (best_connected_ever_strategy_BestConnectedEverStrategy);
function connect(strategies, minPriority, callbackBuilder) {
    var runners = map(strategies, function (strategy, i, _, rs) {
        return strategy.connect(minPriority, callbackBuilder(i, rs));
    });
    return {
        abort: function () {
            apply(runners, abortRunner);
        },
        forceMinPriority: function (p) {
            apply(runners, function (runner) {
                runner.forceMinPriority(p);
            });
        }
    };
}
function allRunnersFailed(runners) {
    return collections_all(runners, function (runner) {
        return Boolean(runner.error);
    });
}
function abortRunner(runner) {
    if (!runner.error && !runner.aborted) {
        runner.abort();
        runner.aborted = true;
    }
}

// CONCATENATED MODULE: ./src/core/strategies/cached_strategy.ts




var cached_strategy_CachedStrategy = (function () {
    function CachedStrategy(strategy, transports, options) {
        this.strategy = strategy;
        this.transports = transports;
        this.ttl = options.ttl || 1800 * 1000;
        this.usingTLS = options.useTLS;
        this.timeline = options.timeline;
    }
    CachedStrategy.prototype.isSupported = function () {
        return this.strategy.isSupported();
    };
    CachedStrategy.prototype.connect = function (minPriority, callback) {
        var usingTLS = this.usingTLS;
        var info = fetchTransportCache(usingTLS);
        var strategies = [this.strategy];
        if (info && info.timestamp + this.ttl >= util.now()) {
            var transport = this.transports[info.transport];
            if (transport) {
                this.timeline.info({
                    cached: true,
                    transport: info.transport,
                    latency: info.latency
                });
                strategies.push(new sequential_strategy([transport], {
                    timeout: info.latency * 2 + 1000,
                    failFast: true
                }));
            }
        }
        var startTimestamp = util.now();
        var runner = strategies
            .pop()
            .connect(minPriority, function cb(error, handshake) {
            if (error) {
                flushTransportCache(usingTLS);
                if (strategies.length > 0) {
                    startTimestamp = util.now();
                    runner = strategies.pop().connect(minPriority, cb);
                }
                else {
                    callback(error);
                }
            }
            else {
                storeTransportCache(usingTLS, handshake.transport.name, util.now() - startTimestamp);
                callback(null, handshake);
            }
        });
        return {
            abort: function () {
                runner.abort();
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    };
    return CachedStrategy;
}());
/* harmony default export */ var cached_strategy = (cached_strategy_CachedStrategy);
function getTransportCacheKey(usingTLS) {
    return 'pusherTransport' + (usingTLS ? 'TLS' : 'NonTLS');
}
function fetchTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            var serializedCache = storage[getTransportCacheKey(usingTLS)];
            if (serializedCache) {
                return JSON.parse(serializedCache);
            }
        }
        catch (e) {
            flushTransportCache(usingTLS);
        }
    }
    return null;
}
function storeTransportCache(usingTLS, transport, latency) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            storage[getTransportCacheKey(usingTLS)] = safeJSONStringify({
                timestamp: util.now(),
                transport: transport,
                latency: latency
            });
        }
        catch (e) {
        }
    }
}
function flushTransportCache(usingTLS) {
    var storage = runtime.getLocalStorage();
    if (storage) {
        try {
            delete storage[getTransportCacheKey(usingTLS)];
        }
        catch (e) {
        }
    }
}

// CONCATENATED MODULE: ./src/core/strategies/delayed_strategy.ts

var delayed_strategy_DelayedStrategy = (function () {
    function DelayedStrategy(strategy, _a) {
        var number = _a.delay;
        this.strategy = strategy;
        this.options = { delay: number };
    }
    DelayedStrategy.prototype.isSupported = function () {
        return this.strategy.isSupported();
    };
    DelayedStrategy.prototype.connect = function (minPriority, callback) {
        var strategy = this.strategy;
        var runner;
        var timer = new OneOffTimer(this.options.delay, function () {
            runner = strategy.connect(minPriority, callback);
        });
        return {
            abort: function () {
                timer.ensureAborted();
                if (runner) {
                    runner.abort();
                }
            },
            forceMinPriority: function (p) {
                minPriority = p;
                if (runner) {
                    runner.forceMinPriority(p);
                }
            }
        };
    };
    return DelayedStrategy;
}());
/* harmony default export */ var delayed_strategy = (delayed_strategy_DelayedStrategy);

// CONCATENATED MODULE: ./src/core/strategies/if_strategy.ts
var IfStrategy = (function () {
    function IfStrategy(test, trueBranch, falseBranch) {
        this.test = test;
        this.trueBranch = trueBranch;
        this.falseBranch = falseBranch;
    }
    IfStrategy.prototype.isSupported = function () {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.isSupported();
    };
    IfStrategy.prototype.connect = function (minPriority, callback) {
        var branch = this.test() ? this.trueBranch : this.falseBranch;
        return branch.connect(minPriority, callback);
    };
    return IfStrategy;
}());
/* harmony default export */ var if_strategy = (IfStrategy);

// CONCATENATED MODULE: ./src/core/strategies/first_connected_strategy.ts
var FirstConnectedStrategy = (function () {
    function FirstConnectedStrategy(strategy) {
        this.strategy = strategy;
    }
    FirstConnectedStrategy.prototype.isSupported = function () {
        return this.strategy.isSupported();
    };
    FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
        var runner = this.strategy.connect(minPriority, function (error, handshake) {
            if (handshake) {
                runner.abort();
            }
            callback(error, handshake);
        });
        return runner;
    };
    return FirstConnectedStrategy;
}());
/* harmony default export */ var first_connected_strategy = (FirstConnectedStrategy);

// CONCATENATED MODULE: ./src/runtimes/web/default_strategy.ts







function testSupportsStrategy(strategy) {
    return function () {
        return strategy.isSupported();
    };
}
var getDefaultStrategy = function (config, baseOptions, defineTransport) {
    var definedTransports = {};
    function defineTransportStrategy(name, type, priority, options, manager) {
        var transport = defineTransport(config, name, type, priority, options, manager);
        definedTransports[name] = transport;
        return transport;
    }
    var ws_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.wsHost + ':' + config.wsPort,
        hostTLS: config.wsHost + ':' + config.wssPort,
        httpPath: config.wsPath
    });
    var wss_options = Object.assign({}, ws_options, {
        useTLS: true
    });
    var sockjs_options = Object.assign({}, baseOptions, {
        hostNonTLS: config.httpHost + ':' + config.httpPort,
        hostTLS: config.httpHost + ':' + config.httpsPort,
        httpPath: config.httpPath
    });
    var timeouts = {
        loop: true,
        timeout: 15000,
        timeoutLimit: 60000
    };
    var ws_manager = new transport_manager({
        lives: 2,
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var streaming_manager = new transport_manager({
        lives: 2,
        minPingDelay: 10000,
        maxPingDelay: config.activityTimeout
    });
    var ws_transport = defineTransportStrategy('ws', 'ws', 3, ws_options, ws_manager);
    var wss_transport = defineTransportStrategy('wss', 'ws', 3, wss_options, ws_manager);
    var sockjs_transport = defineTransportStrategy('sockjs', 'sockjs', 1, sockjs_options);
    var xhr_streaming_transport = defineTransportStrategy('xhr_streaming', 'xhr_streaming', 1, sockjs_options, streaming_manager);
    var xdr_streaming_transport = defineTransportStrategy('xdr_streaming', 'xdr_streaming', 1, sockjs_options, streaming_manager);
    var xhr_polling_transport = defineTransportStrategy('xhr_polling', 'xhr_polling', 1, sockjs_options);
    var xdr_polling_transport = defineTransportStrategy('xdr_polling', 'xdr_polling', 1, sockjs_options);
    var ws_loop = new sequential_strategy([ws_transport], timeouts);
    var wss_loop = new sequential_strategy([wss_transport], timeouts);
    var sockjs_loop = new sequential_strategy([sockjs_transport], timeouts);
    var streaming_loop = new sequential_strategy([
        new if_strategy(testSupportsStrategy(xhr_streaming_transport), xhr_streaming_transport, xdr_streaming_transport)
    ], timeouts);
    var polling_loop = new sequential_strategy([
        new if_strategy(testSupportsStrategy(xhr_polling_transport), xhr_polling_transport, xdr_polling_transport)
    ], timeouts);
    var http_loop = new sequential_strategy([
        new if_strategy(testSupportsStrategy(streaming_loop), new best_connected_ever_strategy([
            streaming_loop,
            new delayed_strategy(polling_loop, { delay: 4000 })
        ]), polling_loop)
    ], timeouts);
    var http_fallback_loop = new if_strategy(testSupportsStrategy(http_loop), http_loop, sockjs_loop);
    var wsStrategy;
    if (baseOptions.useTLS) {
        wsStrategy = new best_connected_ever_strategy([
            ws_loop,
            new delayed_strategy(http_fallback_loop, { delay: 2000 })
        ]);
    }
    else {
        wsStrategy = new best_connected_ever_strategy([
            ws_loop,
            new delayed_strategy(wss_loop, { delay: 2000 }),
            new delayed_strategy(http_fallback_loop, { delay: 5000 })
        ]);
    }
    return new cached_strategy(new first_connected_strategy(new if_strategy(testSupportsStrategy(ws_transport), wsStrategy, http_fallback_loop)), definedTransports, {
        ttl: 1800000,
        timeline: baseOptions.timeline,
        useTLS: baseOptions.useTLS
    });
};
/* harmony default export */ var default_strategy = (getDefaultStrategy);

// CONCATENATED MODULE: ./src/runtimes/web/transports/transport_connection_initializer.ts

/* harmony default export */ var transport_connection_initializer = (function () {
    var self = this;
    self.timeline.info(self.buildTimelineMessage({
        transport: self.name + (self.options.useTLS ? 's' : '')
    }));
    if (self.hooks.isInitialized()) {
        self.changeState('initialized');
    }
    else if (self.hooks.file) {
        self.changeState('initializing');
        Dependencies.load(self.hooks.file, { useTLS: self.options.useTLS }, function (error, callback) {
            if (self.hooks.isInitialized()) {
                self.changeState('initialized');
                callback(true);
            }
            else {
                if (error) {
                    self.onError(error);
                }
                self.onClose();
                callback(false);
            }
        });
    }
    else {
        self.onClose();
    }
});

// CONCATENATED MODULE: ./src/runtimes/web/http/http_xdomain_request.ts

var http_xdomain_request_hooks = {
    getRequest: function (socket) {
        var xdr = new window.XDomainRequest();
        xdr.ontimeout = function () {
            socket.emit('error', new RequestTimedOut());
            socket.close();
        };
        xdr.onerror = function (e) {
            socket.emit('error', e);
            socket.close();
        };
        xdr.onprogress = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
        };
        xdr.onload = function () {
            if (xdr.responseText && xdr.responseText.length > 0) {
                socket.onChunk(200, xdr.responseText);
            }
            socket.emit('finished', 200);
            socket.close();
        };
        return xdr;
    },
    abortRequest: function (xdr) {
        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
        xdr.abort();
    }
};
/* harmony default export */ var http_xdomain_request = (http_xdomain_request_hooks);

// CONCATENATED MODULE: ./src/core/http/http_request.ts
var http_request_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var MAX_BUFFER_LENGTH = 256 * 1024;
var http_request_HTTPRequest = (function (_super) {
    http_request_extends(HTTPRequest, _super);
    function HTTPRequest(hooks, method, url) {
        var _this = _super.call(this) || this;
        _this.hooks = hooks;
        _this.method = method;
        _this.url = url;
        return _this;
    }
    HTTPRequest.prototype.start = function (payload) {
        var _this = this;
        this.position = 0;
        this.xhr = this.hooks.getRequest(this);
        this.unloader = function () {
            _this.close();
        };
        runtime.addUnloadListener(this.unloader);
        this.xhr.open(this.method, this.url, true);
        if (this.xhr.setRequestHeader) {
            this.xhr.setRequestHeader('Content-Type', 'application/json');
        }
        this.xhr.send(payload);
    };
    HTTPRequest.prototype.close = function () {
        if (this.unloader) {
            runtime.removeUnloadListener(this.unloader);
            this.unloader = null;
        }
        if (this.xhr) {
            this.hooks.abortRequest(this.xhr);
            this.xhr = null;
        }
    };
    HTTPRequest.prototype.onChunk = function (status, data) {
        while (true) {
            var chunk = this.advanceBuffer(data);
            if (chunk) {
                this.emit('chunk', { status: status, data: chunk });
            }
            else {
                break;
            }
        }
        if (this.isBufferTooLong(data)) {
            this.emit('buffer_too_long');
        }
    };
    HTTPRequest.prototype.advanceBuffer = function (buffer) {
        var unreadData = buffer.slice(this.position);
        var endOfLinePosition = unreadData.indexOf('\n');
        if (endOfLinePosition !== -1) {
            this.position += endOfLinePosition + 1;
            return unreadData.slice(0, endOfLinePosition);
        }
        else {
            return null;
        }
    };
    HTTPRequest.prototype.isBufferTooLong = function (buffer) {
        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
    };
    return HTTPRequest;
}(dispatcher));
/* harmony default export */ var http_request = (http_request_HTTPRequest);

// CONCATENATED MODULE: ./src/core/http/state.ts
var State;
(function (State) {
    State[State["CONNECTING"] = 0] = "CONNECTING";
    State[State["OPEN"] = 1] = "OPEN";
    State[State["CLOSED"] = 3] = "CLOSED";
})(State || (State = {}));
/* harmony default export */ var state = (State);

// CONCATENATED MODULE: ./src/core/http/http_socket.ts



var autoIncrement = 1;
var http_socket_HTTPSocket = (function () {
    function HTTPSocket(hooks, url) {
        this.hooks = hooks;
        this.session = randomNumber(1000) + '/' + randomString(8);
        this.location = getLocation(url);
        this.readyState = state.CONNECTING;
        this.openStream();
    }
    HTTPSocket.prototype.send = function (payload) {
        return this.sendRaw(JSON.stringify([payload]));
    };
    HTTPSocket.prototype.ping = function () {
        this.hooks.sendHeartbeat(this);
    };
    HTTPSocket.prototype.close = function (code, reason) {
        this.onClose(code, reason, true);
    };
    HTTPSocket.prototype.sendRaw = function (payload) {
        if (this.readyState === state.OPEN) {
            try {
                runtime.createSocketRequest('POST', getUniqueURL(getSendURL(this.location, this.session))).start(payload);
                return true;
            }
            catch (e) {
                return false;
            }
        }
        else {
            return false;
        }
    };
    HTTPSocket.prototype.reconnect = function () {
        this.closeStream();
        this.openStream();
    };
    HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
        this.closeStream();
        this.readyState = state.CLOSED;
        if (this.onclose) {
            this.onclose({
                code: code,
                reason: reason,
                wasClean: wasClean
            });
        }
    };
    HTTPSocket.prototype.onChunk = function (chunk) {
        if (chunk.status !== 200) {
            return;
        }
        if (this.readyState === state.OPEN) {
            this.onActivity();
        }
        var payload;
        var type = chunk.data.slice(0, 1);
        switch (type) {
            case 'o':
                payload = JSON.parse(chunk.data.slice(1) || '{}');
                this.onOpen(payload);
                break;
            case 'a':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                for (var i = 0; i < payload.length; i++) {
                    this.onEvent(payload[i]);
                }
                break;
            case 'm':
                payload = JSON.parse(chunk.data.slice(1) || 'null');
                this.onEvent(payload);
                break;
            case 'h':
                this.hooks.onHeartbeat(this);
                break;
            case 'c':
                payload = JSON.parse(chunk.data.slice(1) || '[]');
                this.onClose(payload[0], payload[1], true);
                break;
        }
    };
    HTTPSocket.prototype.onOpen = function (options) {
        if (this.readyState === state.CONNECTING) {
            if (options && options.hostname) {
                this.location.base = replaceHost(this.location.base, options.hostname);
            }
            this.readyState = state.OPEN;
            if (this.onopen) {
                this.onopen();
            }
        }
        else {
            this.onClose(1006, 'Server lost session', true);
        }
    };
    HTTPSocket.prototype.onEvent = function (event) {
        if (this.readyState === state.OPEN && this.onmessage) {
            this.onmessage({ data: event });
        }
    };
    HTTPSocket.prototype.onActivity = function () {
        if (this.onactivity) {
            this.onactivity();
        }
    };
    HTTPSocket.prototype.onError = function (error) {
        if (this.onerror) {
            this.onerror(error);
        }
    };
    HTTPSocket.prototype.openStream = function () {
        var _this = this;
        this.stream = runtime.createSocketRequest('POST', getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
        this.stream.bind('chunk', function (chunk) {
            _this.onChunk(chunk);
        });
        this.stream.bind('finished', function (status) {
            _this.hooks.onFinished(_this, status);
        });
        this.stream.bind('buffer_too_long', function () {
            _this.reconnect();
        });
        try {
            this.stream.start();
        }
        catch (error) {
            util.defer(function () {
                _this.onError(error);
                _this.onClose(1006, 'Could not start streaming', false);
            });
        }
    };
    HTTPSocket.prototype.closeStream = function () {
        if (this.stream) {
            this.stream.unbind_all();
            this.stream.close();
            this.stream = null;
        }
    };
    return HTTPSocket;
}());
function getLocation(url) {
    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
    return {
        base: parts[1],
        queryString: parts[2]
    };
}
function getSendURL(url, session) {
    return url.base + '/' + session + '/xhr_send';
}
function getUniqueURL(url) {
    var separator = url.indexOf('?') === -1 ? '?' : '&';
    return url + separator + 't=' + +new Date() + '&n=' + autoIncrement++;
}
function replaceHost(url, hostname) {
    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
    return urlParts[1] + hostname + urlParts[3];
}
function randomNumber(max) {
    return Math.floor(Math.random() * max);
}
function randomString(length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(randomNumber(32).toString(32));
    }
    return result.join('');
}
/* harmony default export */ var http_socket = (http_socket_HTTPSocket);

// CONCATENATED MODULE: ./src/core/http/http_streaming_socket.ts
var http_streaming_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr_streaming' + url.queryString;
    },
    onHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
    }
};
/* harmony default export */ var http_streaming_socket = (http_streaming_socket_hooks);

// CONCATENATED MODULE: ./src/core/http/http_polling_socket.ts
var http_polling_socket_hooks = {
    getReceiveURL: function (url, session) {
        return url.base + '/' + session + '/xhr' + url.queryString;
    },
    onHeartbeat: function () {
    },
    sendHeartbeat: function (socket) {
        socket.sendRaw('[]');
    },
    onFinished: function (socket, status) {
        if (status === 200) {
            socket.reconnect();
        }
        else {
            socket.onClose(1006, 'Connection interrupted (' + status + ')', false);
        }
    }
};
/* harmony default export */ var http_polling_socket = (http_polling_socket_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http_xhr_request.ts

var http_xhr_request_hooks = {
    getRequest: function (socket) {
        var Constructor = runtime.getXHRAPI();
        var xhr = new Constructor();
        xhr.onreadystatechange = xhr.onprogress = function () {
            switch (xhr.readyState) {
                case 3:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    break;
                case 4:
                    if (xhr.responseText && xhr.responseText.length > 0) {
                        socket.onChunk(xhr.status, xhr.responseText);
                    }
                    socket.emit('finished', xhr.status);
                    socket.close();
                    break;
            }
        };
        return xhr;
    },
    abortRequest: function (xhr) {
        xhr.onreadystatechange = null;
        xhr.abort();
    }
};
/* harmony default export */ var http_xhr_request = (http_xhr_request_hooks);

// CONCATENATED MODULE: ./src/runtimes/isomorphic/http/http.ts





var HTTP = {
    createStreamingSocket: function (url) {
        return this.createSocket(http_streaming_socket, url);
    },
    createPollingSocket: function (url) {
        return this.createSocket(http_polling_socket, url);
    },
    createSocket: function (hooks, url) {
        return new http_socket(hooks, url);
    },
    createXHR: function (method, url) {
        return this.createRequest(http_xhr_request, method, url);
    },
    createRequest: function (hooks, method, url) {
        return new http_request(hooks, method, url);
    }
};
/* harmony default export */ var http_http = (HTTP);

// CONCATENATED MODULE: ./src/runtimes/web/http/http.ts


http_http.createXDR = function (method, url) {
    return this.createRequest(http_xdomain_request, method, url);
};
/* harmony default export */ var web_http_http = (http_http);

// CONCATENATED MODULE: ./src/runtimes/web/runtime.ts












var Runtime = {
    nextAuthCallbackID: 1,
    auth_callbacks: {},
    ScriptReceivers: ScriptReceivers,
    DependenciesReceivers: DependenciesReceivers,
    getDefaultStrategy: default_strategy,
    Transports: transports_transports,
    transportConnectionInitializer: transport_connection_initializer,
    HTTPFactory: web_http_http,
    TimelineTransport: jsonp_timeline,
    getXHRAPI: function () {
        return window.XMLHttpRequest;
    },
    getWebSocketAPI: function () {
        return window.WebSocket || window.MozWebSocket;
    },
    setup: function (PusherClass) {
        var _this = this;
        window.Pusher = PusherClass;
        var initializeOnDocumentBody = function () {
            _this.onDocumentBody(PusherClass.ready);
        };
        if (!window.JSON) {
            Dependencies.load('json2', {}, initializeOnDocumentBody);
        }
        else {
            initializeOnDocumentBody();
        }
    },
    getDocument: function () {
        return document;
    },
    getProtocol: function () {
        return this.getDocument().location.protocol;
    },
    getAuthorizers: function () {
        return { ajax: xhr_auth, jsonp: jsonp_auth };
    },
    onDocumentBody: function (callback) {
        var _this = this;
        if (document.body) {
            callback();
        }
        else {
            setTimeout(function () {
                _this.onDocumentBody(callback);
            }, 0);
        }
    },
    createJSONPRequest: function (url, data) {
        return new jsonp_request(url, data);
    },
    createScriptRequest: function (src) {
        return new script_request(src);
    },
    getLocalStorage: function () {
        try {
            return window.localStorage;
        }
        catch (e) {
            return undefined;
        }
    },
    createXHR: function () {
        if (this.getXHRAPI()) {
            return this.createXMLHttpRequest();
        }
        else {
            return this.createMicrosoftXHR();
        }
    },
    createXMLHttpRequest: function () {
        var Constructor = this.getXHRAPI();
        return new Constructor();
    },
    createMicrosoftXHR: function () {
        return new ActiveXObject('Microsoft.XMLHTTP');
    },
    getNetwork: function () {
        return net_info_Network;
    },
    createWebSocket: function (url) {
        var Constructor = this.getWebSocketAPI();
        return new Constructor(url);
    },
    createSocketRequest: function (method, url) {
        if (this.isXHRSupported()) {
            return this.HTTPFactory.createXHR(method, url);
        }
        else if (this.isXDRSupported(url.indexOf('https:') === 0)) {
            return this.HTTPFactory.createXDR(method, url);
        }
        else {
            throw 'Cross-origin HTTP requests are not supported';
        }
    },
    isXHRSupported: function () {
        var Constructor = this.getXHRAPI();
        return (Boolean(Constructor) && new Constructor().withCredentials !== undefined);
    },
    isXDRSupported: function (useTLS) {
        var protocol = useTLS ? 'https:' : 'http:';
        var documentProtocol = this.getProtocol();
        return (Boolean(window['XDomainRequest']) && documentProtocol === protocol);
    },
    addUnloadListener: function (listener) {
        if (window.addEventListener !== undefined) {
            window.addEventListener('unload', listener, false);
        }
        else if (window.attachEvent !== undefined) {
            window.attachEvent('onunload', listener);
        }
    },
    removeUnloadListener: function (listener) {
        if (window.addEventListener !== undefined) {
            window.removeEventListener('unload', listener, false);
        }
        else if (window.detachEvent !== undefined) {
            window.detachEvent('onunload', listener);
        }
    }
};
/* harmony default export */ var runtime = (Runtime);

// CONCATENATED MODULE: ./src/core/timeline/level.ts
var TimelineLevel;
(function (TimelineLevel) {
    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
})(TimelineLevel || (TimelineLevel = {}));
/* harmony default export */ var timeline_level = (TimelineLevel);

// CONCATENATED MODULE: ./src/core/timeline/timeline.ts



var timeline_Timeline = (function () {
    function Timeline(key, session, options) {
        this.key = key;
        this.session = session;
        this.events = [];
        this.options = options || {};
        this.sent = 0;
        this.uniqueID = 0;
    }
    Timeline.prototype.log = function (level, event) {
        if (level <= this.options.level) {
            this.events.push(extend({}, event, { timestamp: util.now() }));
            if (this.options.limit && this.events.length > this.options.limit) {
                this.events.shift();
            }
        }
    };
    Timeline.prototype.error = function (event) {
        this.log(timeline_level.ERROR, event);
    };
    Timeline.prototype.info = function (event) {
        this.log(timeline_level.INFO, event);
    };
    Timeline.prototype.debug = function (event) {
        this.log(timeline_level.DEBUG, event);
    };
    Timeline.prototype.isEmpty = function () {
        return this.events.length === 0;
    };
    Timeline.prototype.send = function (sendfn, callback) {
        var _this = this;
        var data = extend({
            session: this.session,
            bundle: this.sent + 1,
            key: this.key,
            lib: 'js',
            version: this.options.version,
            cluster: this.options.cluster,
            features: this.options.features,
            timeline: this.events
        }, this.options.params);
        this.events = [];
        sendfn(data, function (error, result) {
            if (!error) {
                _this.sent++;
            }
            if (callback) {
                callback(error, result);
            }
        });
        return true;
    };
    Timeline.prototype.generateUniqueID = function () {
        this.uniqueID++;
        return this.uniqueID;
    };
    return Timeline;
}());
/* harmony default export */ var timeline_timeline = (timeline_Timeline);

// CONCATENATED MODULE: ./src/core/strategies/transport_strategy.ts




var transport_strategy_TransportStrategy = (function () {
    function TransportStrategy(name, priority, transport, options) {
        this.name = name;
        this.priority = priority;
        this.transport = transport;
        this.options = options || {};
    }
    TransportStrategy.prototype.isSupported = function () {
        return this.transport.isSupported({
            useTLS: this.options.useTLS
        });
    };
    TransportStrategy.prototype.connect = function (minPriority, callback) {
        var _this = this;
        if (!this.isSupported()) {
            return failAttempt(new UnsupportedStrategy(), callback);
        }
        else if (this.priority < minPriority) {
            return failAttempt(new TransportPriorityTooLow(), callback);
        }
        var connected = false;
        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
        var handshake = null;
        var onInitialized = function () {
            transport.unbind('initialized', onInitialized);
            transport.connect();
        };
        var onOpen = function () {
            handshake = factory.createHandshake(transport, function (result) {
                connected = true;
                unbindListeners();
                callback(null, result);
            });
        };
        var onError = function (error) {
            unbindListeners();
            callback(error);
        };
        var onClosed = function () {
            unbindListeners();
            var serializedTransport;
            serializedTransport = safeJSONStringify(transport);
            callback(new TransportClosed(serializedTransport));
        };
        var unbindListeners = function () {
            transport.unbind('initialized', onInitialized);
            transport.unbind('open', onOpen);
            transport.unbind('error', onError);
            transport.unbind('closed', onClosed);
        };
        transport.bind('initialized', onInitialized);
        transport.bind('open', onOpen);
        transport.bind('error', onError);
        transport.bind('closed', onClosed);
        transport.initialize();
        return {
            abort: function () {
                if (connected) {
                    return;
                }
                unbindListeners();
                if (handshake) {
                    handshake.close();
                }
                else {
                    transport.close();
                }
            },
            forceMinPriority: function (p) {
                if (connected) {
                    return;
                }
                if (_this.priority < p) {
                    if (handshake) {
                        handshake.close();
                    }
                    else {
                        transport.close();
                    }
                }
            }
        };
    };
    return TransportStrategy;
}());
/* harmony default export */ var transport_strategy = (transport_strategy_TransportStrategy);
function failAttempt(error, callback) {
    util.defer(function () {
        callback(error);
    });
    return {
        abort: function () { },
        forceMinPriority: function () { }
    };
}

// CONCATENATED MODULE: ./src/core/strategies/strategy_builder.ts





var strategy_builder_Transports = runtime.Transports;
var strategy_builder_defineTransport = function (config, name, type, priority, options, manager) {
    var transportClass = strategy_builder_Transports[type];
    if (!transportClass) {
        throw new UnsupportedTransport(type);
    }
    var enabled = (!config.enabledTransports ||
        arrayIndexOf(config.enabledTransports, name) !== -1) &&
        (!config.disabledTransports ||
            arrayIndexOf(config.disabledTransports, name) === -1);
    var transport;
    if (enabled) {
        options = Object.assign({ ignoreNullOrigin: config.ignoreNullOrigin }, options);
        transport = new transport_strategy(name, priority, manager ? manager.getAssistant(transportClass) : transportClass, options);
    }
    else {
        transport = strategy_builder_UnsupportedStrategy;
    }
    return transport;
};
var strategy_builder_UnsupportedStrategy = {
    isSupported: function () {
        return false;
    },
    connect: function (_, callback) {
        var deferred = util.defer(function () {
            callback(new UnsupportedStrategy());
        });
        return {
            abort: function () {
                deferred.ensureAborted();
            },
            forceMinPriority: function () { }
        };
    }
};

// CONCATENATED MODULE: ./src/core/config.ts


function getConfig(opts) {
    var config = {
        activityTimeout: opts.activityTimeout || defaults.activityTimeout,
        authEndpoint: opts.authEndpoint || defaults.authEndpoint,
        authTransport: opts.authTransport || defaults.authTransport,
        cluster: opts.cluster || defaults.cluster,
        httpPath: opts.httpPath || defaults.httpPath,
        httpPort: opts.httpPort || defaults.httpPort,
        httpsPort: opts.httpsPort || defaults.httpsPort,
        pongTimeout: opts.pongTimeout || defaults.pongTimeout,
        statsHost: opts.statsHost || defaults.stats_host,
        unavailableTimeout: opts.unavailableTimeout || defaults.unavailableTimeout,
        wsPath: opts.wsPath || defaults.wsPath,
        wsPort: opts.wsPort || defaults.wsPort,
        wssPort: opts.wssPort || defaults.wssPort,
        enableStats: getEnableStatsConfig(opts),
        httpHost: getHttpHost(opts),
        useTLS: shouldUseTLS(opts),
        wsHost: getWebsocketHost(opts)
    };
    if ('auth' in opts)
        config.auth = opts.auth;
    if ('authorizer' in opts)
        config.authorizer = opts.authorizer;
    if ('disabledTransports' in opts)
        config.disabledTransports = opts.disabledTransports;
    if ('enabledTransports' in opts)
        config.enabledTransports = opts.enabledTransports;
    if ('ignoreNullOrigin' in opts)
        config.ignoreNullOrigin = opts.ignoreNullOrigin;
    if ('timelineParams' in opts)
        config.timelineParams = opts.timelineParams;
    if ('nacl' in opts) {
        config.nacl = opts.nacl;
    }
    return config;
}
function getHttpHost(opts) {
    if (opts.httpHost) {
        return opts.httpHost;
    }
    if (opts.cluster) {
        return "sockjs-" + opts.cluster + ".pusher.com";
    }
    return defaults.httpHost;
}
function getWebsocketHost(opts) {
    if (opts.wsHost) {
        return opts.wsHost;
    }
    if (opts.cluster) {
        return getWebsocketHostFromCluster(opts.cluster);
    }
    return getWebsocketHostFromCluster(defaults.cluster);
}
function getWebsocketHostFromCluster(cluster) {
    return "ws-" + cluster + ".pusher.com";
}
function shouldUseTLS(opts) {
    if (runtime.getProtocol() === 'https:') {
        return true;
    }
    else if (opts.forceTLS === false) {
        return false;
    }
    return true;
}
function getEnableStatsConfig(opts) {
    if ('enableStats' in opts) {
        return opts.enableStats;
    }
    if ('disableStats' in opts) {
        return !opts.disableStats;
    }
    return false;
}

// CONCATENATED MODULE: ./src/core/pusher.ts












var pusher_Pusher = (function () {
    function Pusher(app_key, options) {
        var _this = this;
        checkAppKey(app_key);
        options = options || {};
        if (!options.cluster && !(options.wsHost || options.httpHost)) {
            var suffix = url_store.buildLogSuffix('javascriptQuickStart');
            logger.warn("You should always specify a cluster when connecting. " + suffix);
        }
        if ('disableStats' in options) {
            logger.warn('The disableStats option is deprecated in favor of enableStats');
        }
        this.key = app_key;
        this.config = getConfig(options);
        this.channels = factory.createChannels();
        this.global_emitter = new dispatcher();
        this.sessionID = Math.floor(Math.random() * 1000000000);
        this.timeline = new timeline_timeline(this.key, this.sessionID, {
            cluster: this.config.cluster,
            features: Pusher.getClientFeatures(),
            params: this.config.timelineParams || {},
            limit: 50,
            level: timeline_level.INFO,
            version: defaults.VERSION
        });
        if (this.config.enableStats) {
            this.timelineSender = factory.createTimelineSender(this.timeline, {
                host: this.config.statsHost,
                path: '/timeline/v2/' + runtime.TimelineTransport.name
            });
        }
        var getStrategy = function (options) {
            return runtime.getDefaultStrategy(_this.config, options, strategy_builder_defineTransport);
        };
        this.connection = factory.createConnectionManager(this.key, {
            getStrategy: getStrategy,
            timeline: this.timeline,
            activityTimeout: this.config.activityTimeout,
            pongTimeout: this.config.pongTimeout,
            unavailableTimeout: this.config.unavailableTimeout,
            useTLS: Boolean(this.config.useTLS)
        });
        this.connection.bind('connected', function () {
            _this.subscribeAll();
            if (_this.timelineSender) {
                _this.timelineSender.send(_this.connection.isUsingTLS());
            }
        });
        this.connection.bind('message', function (event) {
            var eventName = event.event;
            var internal = eventName.indexOf('pusher_internal:') === 0;
            if (event.channel) {
                var channel = _this.channel(event.channel);
                if (channel) {
                    channel.handleEvent(event);
                }
            }
            if (!internal) {
                _this.global_emitter.emit(event.event, event.data);
            }
        });
        this.connection.bind('connecting', function () {
            _this.channels.disconnect();
        });
        this.connection.bind('disconnected', function () {
            _this.channels.disconnect();
        });
        this.connection.bind('error', function (err) {
            logger.warn(err);
        });
        Pusher.instances.push(this);
        this.timeline.info({ instances: Pusher.instances.length });
        if (Pusher.isReady) {
            this.connect();
        }
    }
    Pusher.ready = function () {
        Pusher.isReady = true;
        for (var i = 0, l = Pusher.instances.length; i < l; i++) {
            Pusher.instances[i].connect();
        }
    };
    Pusher.getClientFeatures = function () {
        return keys(filterObject({ ws: runtime.Transports.ws }, function (t) {
            return t.isSupported({});
        }));
    };
    Pusher.prototype.channel = function (name) {
        return this.channels.find(name);
    };
    Pusher.prototype.allChannels = function () {
        return this.channels.all();
    };
    Pusher.prototype.connect = function () {
        this.connection.connect();
        if (this.timelineSender) {
            if (!this.timelineSenderTimer) {
                var usingTLS = this.connection.isUsingTLS();
                var timelineSender = this.timelineSender;
                this.timelineSenderTimer = new PeriodicTimer(60000, function () {
                    timelineSender.send(usingTLS);
                });
            }
        }
    };
    Pusher.prototype.disconnect = function () {
        this.connection.disconnect();
        if (this.timelineSenderTimer) {
            this.timelineSenderTimer.ensureAborted();
            this.timelineSenderTimer = null;
        }
    };
    Pusher.prototype.bind = function (event_name, callback, context) {
        this.global_emitter.bind(event_name, callback, context);
        return this;
    };
    Pusher.prototype.unbind = function (event_name, callback, context) {
        this.global_emitter.unbind(event_name, callback, context);
        return this;
    };
    Pusher.prototype.bind_global = function (callback) {
        this.global_emitter.bind_global(callback);
        return this;
    };
    Pusher.prototype.unbind_global = function (callback) {
        this.global_emitter.unbind_global(callback);
        return this;
    };
    Pusher.prototype.unbind_all = function (callback) {
        this.global_emitter.unbind_all();
        return this;
    };
    Pusher.prototype.subscribeAll = function () {
        var channelName;
        for (channelName in this.channels.channels) {
            if (this.channels.channels.hasOwnProperty(channelName)) {
                this.subscribe(channelName);
            }
        }
    };
    Pusher.prototype.subscribe = function (channel_name) {
        var channel = this.channels.add(channel_name, this);
        if (channel.subscriptionPending && channel.subscriptionCancelled) {
            channel.reinstateSubscription();
        }
        else if (!channel.subscriptionPending &&
            this.connection.state === 'connected') {
            channel.subscribe();
        }
        return channel;
    };
    Pusher.prototype.unsubscribe = function (channel_name) {
        var channel = this.channels.find(channel_name);
        if (channel && channel.subscriptionPending) {
            channel.cancelSubscription();
        }
        else {
            channel = this.channels.remove(channel_name);
            if (channel && channel.subscribed) {
                channel.unsubscribe();
            }
        }
    };
    Pusher.prototype.send_event = function (event_name, data, channel) {
        return this.connection.send_event(event_name, data, channel);
    };
    Pusher.prototype.shouldUseTLS = function () {
        return this.config.useTLS;
    };
    Pusher.instances = [];
    Pusher.isReady = false;
    Pusher.logToConsole = false;
    Pusher.Runtime = runtime;
    Pusher.ScriptReceivers = runtime.ScriptReceivers;
    Pusher.DependenciesReceivers = runtime.DependenciesReceivers;
    Pusher.auth_callbacks = runtime.auth_callbacks;
    return Pusher;
}());
/* harmony default export */ var core_pusher = __webpack_exports__["default"] = (pusher_Pusher);
function checkAppKey(key) {
    if (key === null || key === undefined) {
        throw 'You must pass your app key when you instantiate Pusher.';
    }
}
runtime.setup(pusher_Pusher);


/***/ })
/******/ ]);
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_0__);
//const Pusher = require("pusher")

//import './scss/main.scss'

// https://stackoverflow.com/questions/34782493/difference-between-csrf-and-x-csrf-token
// https://stackoverflow.com/questions/44133536/is-it-safe-to-store-a-jwt-in-localstorage-with-reactjs
(function ($, Drupal, drupalSettings) {

  var receiver_id = '';
  var my_id = drupalSettings.dru_chat.user;// load from request instead

  console.log('CHAT JS JS JSJ');
  console.log('CHAT JS JS JSJ');
  console.log(my_id);
  console.log('CHAT JS JS JSJ');
  console.log('CHAT JS JS JSJ');

  // https://stackoverflow.com/questions/34782493/difference-between-csrf-and-x-csrf-token

  $(document).ready(function () {

    // ajax setup form csrf token
    /*$.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })

    */

    // Enable pusher logging - don't include this in production
    pusher_js__WEBPACK_IMPORTED_MODULE_0___default.a.logToConsole = true;

    var pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_0___default.a('load from config_form app id', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('dru-chat-event', function(data) {
      //alert(JSON.stringify(data));

      if (my_id === data.from) {

        //alert('SENDER!!!')
        $('#'+data.to).click()

      } else if (my_id === data.to) {

        if (receiver_id === data.from) {

          // if receiver is selected, reload the selected user ...\
          $('#'+data.from).click()
        } else {

          // if not populate counter
          var unread = parseInt($('#' + data.from).find('.pending').html())
          if (unread) {
            $('#'+ data.from).find('.pending').html(unread + 1)
          } else {
            $('#' + data.from).append('<span class="pending">1</span>')
          }
        }

      }
    });


    $('.user').click(function () {
      $('.user').removeClass('active');
      $(this).addClass('active');
      $(this).find('.pending').remove()

      receiver_id = $(this).attr('id');
      //alert(receiver_id);

      $.ajax({
        //protocol: '',
        type: 'get',
        url: 'http://localhost/dru_8_tests/web/dru-chat/messages/' + receiver_id,
        data:'',
        cache: false,
        success: function (data) {
          //console.log(data);
          $('#messages').html(data);
          scrollToBottom()
        }
      });

    })

    // send message

    $(document).on('keyup', '.dru-chat-message-box input', function (e) {

      var message = $(this).val()

      if (e.keyCode === 13 && message !== '' && receiver_id !== ''){
        //alert(message)
        $(this).val('') // clear input
        var request_data = 'receiver_id=' + receiver_id + '&message=' + message

        $.ajax({
          type: 'post',
          url: 'http://localhost/dru_8_tests/web/dru-chat/new-message',
          data: request_data,
          cache: false,
          success: function (data) {
            console.log(data)

          },

          error: function (jqXHR, status, err) {

          },

          complete: function () {
            scrollToBottom()

          }

        })
      }
    })

  });


  function scrollToBottom() {
    $('.message-wrapper').animate({
      scrollTop: $('.message-wrapper').get(0).scrollHeight
    }, 50)
  }


})(jQuery, Drupal, drupalSettings);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3B1c2hlci1qcy9kaXN0L3dlYi9wdXNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3VCO0FBQzdCLENBQUM7QUFDRCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0NBQWdDO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxrQkFBa0I7QUFDbEY7QUFDQSx5REFBeUQsY0FBYztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQ0FBaUM7QUFDbEYsd0hBQXdILG1CQUFtQixFQUFFO0FBQzdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRCx5Q0FBeUMsZUFBZTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELCtEQUErRDtBQUM3SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHlCQUF5QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0JBQWdCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsc0JBQXNCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsaUNBQWlDOztBQUVoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLFdBQVc7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsY0FBYztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0EsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isa0JBQWtCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLHVCQUF1QixFQUFFO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsaUNBQWlDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHVDQUF1QztBQUNuRSx1REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0QsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0QsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7QUFLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwrQkFBK0I7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsNkNBQTZDLHNCQUFzQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxlQUFlO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw0Q0FBNEM7QUFDMUU7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7Ozs7OztBQU1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBLGlCQUFpQixvQ0FBb0MsdUJBQXVCLEtBQUs7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7Ozs7O0FBS0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7Ozs7OztBQU1EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxvQkFBb0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsMENBQTBDLGtDQUFrQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQ0FBZ0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0Q0FBNEM7QUFDOUU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGtEQUFrRDtBQUNsRCxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCw2QkFBNkI7QUFDN0U7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLDhDQUE4QztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdDQUFnQztBQUNoRSx1Q0FBdUMsNkNBQTZDO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLDZDQUE2QztBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsNENBQTRDO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxzQ0FBc0M7QUFDdEM7QUFDQSxLQUFLO0FBQ0wseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsY0FBYztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxjQUFjO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsY0FBYztBQUMxRCxzREFBc0QsY0FBYztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDhCQUE4QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLDhCQUE4QjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQkFBc0I7QUFDdkI7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGdCQUFnQjtBQUNoQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDO0FBQ3ZDOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxVQUFVLHdCQUF3QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDRCQUE0QixFQUFFO0FBQzlCLHVDQUF1QztBQUN2QztBQUNBOztBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsNENBQTRDO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNEJBQTRCLHFDQUFxQztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsT0FBTztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQsbUNBQW1DO0FBQ25DLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxPQUFPO0FBQ1A7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ3I5SUQ7QUFBQTtBQUFBO0FBQUE7QUFDK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0EsSUFBSSxnREFBTTs7QUFFVixxQkFBcUIsZ0RBQU07QUFDM0I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxLQUFLOztBQUVMOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7O0FBRVg7O0FBRUEsV0FBVzs7QUFFWDtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUwsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQSxDQUFDLGtDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8qIVxuICogUHVzaGVyIEphdmFTY3JpcHQgTGlicmFyeSB2Ny4wLjNcbiAqIGh0dHBzOi8vcHVzaGVyLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgMjAyMCwgUHVzaGVyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2VuY2UuXG4gKi9cblxuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUHVzaGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIlB1c2hlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBQYWNrYWdlIGJhc2U2NCBpbXBsZW1lbnRzIEJhc2U2NCBlbmNvZGluZyBhbmQgZGVjb2RpbmcuXG4gKi9cbi8vIEludmFsaWQgY2hhcmFjdGVyIHVzZWQgaW4gZGVjb2RpbmcgdG8gaW5kaWNhdGVcbi8vIHRoYXQgdGhlIGNoYXJhY3RlciB0byBkZWNvZGUgaXMgb3V0IG9mIHJhbmdlIG9mXG4vLyBhbHBoYWJldCBhbmQgY2Fubm90IGJlIGRlY29kZWQuXG52YXIgSU5WQUxJRF9CWVRFID0gMjU2O1xuLyoqXG4gKiBJbXBsZW1lbnRzIHN0YW5kYXJkIEJhc2U2NCBlbmNvZGluZy5cbiAqXG4gKiBPcGVyYXRlcyBpbiBjb25zdGFudCB0aW1lLlxuICovXG52YXIgQ29kZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETyhkY2hlc3QpOiBtZXRob2RzIHRvIGVuY29kZSBjaHVuay1ieS1jaHVuay5cbiAgICBmdW5jdGlvbiBDb2RlcihfcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICBpZiAoX3BhZGRpbmdDaGFyYWN0ZXIgPT09IHZvaWQgMCkgeyBfcGFkZGluZ0NoYXJhY3RlciA9IFwiPVwiOyB9XG4gICAgICAgIHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIgPSBfcGFkZGluZ0NoYXJhY3RlcjtcbiAgICB9XG4gICAgQ29kZXIucHJvdG90eXBlLmVuY29kZWRMZW5ndGggPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIChsZW5ndGggKiA4ICsgNSkgLyA2IHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGxlbmd0aCArIDIpIC8gMyAqIDQgfCAwO1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBvdXQgPSBcIlwiO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgZGF0YS5sZW5ndGggLSAyOyBpICs9IDMpIHtcbiAgICAgICAgICAgIHZhciBjID0gKGRhdGFbaV0gPDwgMTYpIHwgKGRhdGFbaSArIDFdIDw8IDgpIHwgKGRhdGFbaSArIDJdKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAzICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMiAqIDYpICYgNjMpO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDEgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAwICogNikgJiA2Myk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxlZnQgPSBkYXRhLmxlbmd0aCAtIGk7XG4gICAgICAgIGlmIChsZWZ0ID4gMCkge1xuICAgICAgICAgICAgdmFyIGMgPSAoZGF0YVtpXSA8PCAxNikgfCAobGVmdCA9PT0gMiA/IGRhdGFbaSArIDFdIDw8IDggOiAwKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAzICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMiAqIDYpICYgNjMpO1xuICAgICAgICAgICAgaWYgKGxlZnQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMSAqIDYpICYgNjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0ICs9IHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIgfHwgXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyIHx8IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIENvZGVyLnByb3RvdHlwZS5tYXhEZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgICAgICBpZiAoIXRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAobGVuZ3RoICogNiArIDcpIC8gOCB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlbmd0aCAvIDQgKiAzIHwgMDtcbiAgICB9O1xuICAgIENvZGVyLnByb3RvdHlwZS5kZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4RGVjb2RlZExlbmd0aChzLmxlbmd0aCAtIHRoaXMuX2dldFBhZGRpbmdMZW5ndGgocykpO1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KDApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYWRkaW5nTGVuZ3RoID0gdGhpcy5fZ2V0UGFkZGluZ0xlbmd0aChzKTtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHMubGVuZ3RoIC0gcGFkZGluZ0xlbmd0aDtcbiAgICAgICAgdmFyIG91dCA9IG5ldyBVaW50OEFycmF5KHRoaXMubWF4RGVjb2RlZExlbmd0aChsZW5ndGgpKTtcbiAgICAgICAgdmFyIG9wID0gMDtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgaGF2ZUJhZCA9IDA7XG4gICAgICAgIHZhciB2MCA9IDAsIHYxID0gMCwgdjIgPSAwLCB2MyA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoIC0gNDsgaSArPSA0KSB7XG4gICAgICAgICAgICB2MCA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAwKSk7XG4gICAgICAgICAgICB2MSA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAxKSk7XG4gICAgICAgICAgICB2MiA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAyKSk7XG4gICAgICAgICAgICB2MyA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAzKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjAgPDwgMikgfCAodjEgPj4+IDQpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYxIDw8IDQpIHwgKHYyID4+PiAyKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MiA8PCA2KSB8IHYzO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MCAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjEgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYyICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MyAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHYwID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSkpO1xuICAgICAgICAgICAgdjEgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMSkpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYwIDw8IDIpIHwgKHYxID4+PiA0KTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjAgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYxICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgbGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgdjIgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpICsgMikpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYxIDw8IDQpIHwgKHYyID4+PiAyKTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjIgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBsZW5ndGggLSAzKSB7XG4gICAgICAgICAgICB2MyA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAzKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjIgPDwgNikgfCB2MztcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjMgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhdmVCYWQgIT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhc2U2NENvZGVyOiBpbmNvcnJlY3QgY2hhcmFjdGVycyBmb3IgZGVjb2RpbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dDtcbiAgICB9O1xuICAgIC8vIFN0YW5kYXJkIGVuY29kaW5nIGhhdmUgdGhlIGZvbGxvd2luZyBlbmNvZGVkL2RlY29kZWQgcmFuZ2VzLFxuICAgIC8vIHdoaWNoIHdlIG5lZWQgdG8gY29udmVydCBiZXR3ZWVuLlxuICAgIC8vXG4gICAgLy8gQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXogMDEyMzQ1Njc4OSAgKyAgIC9cbiAgICAvLyBJbmRleDogICAwIC0gMjUgICAgICAgICAgICAgICAgICAgIDI2IC0gNTEgICAgICAgICAgICAgIDUyIC0gNjEgICA2MiAgNjNcbiAgICAvLyBBU0NJSTogIDY1IC0gOTAgICAgICAgICAgICAgICAgICAgIDk3IC0gMTIyICAgICAgICAgICAgIDQ4IC0gNTcgICA0MyAgNDdcbiAgICAvL1xuICAgIC8vIEVuY29kZSA2IGJpdHMgaW4gYiBpbnRvIGEgbmV3IGNoYXJhY3Rlci5cbiAgICBDb2Rlci5wcm90b3R5cGUuX2VuY29kZUJ5dGUgPSBmdW5jdGlvbiAoYikge1xuICAgICAgICAvLyBFbmNvZGluZyB1c2VzIGNvbnN0YW50IHRpbWUgb3BlcmF0aW9ucyBhcyBmb2xsb3dzOlxuICAgICAgICAvL1xuICAgICAgICAvLyAxLiBEZWZpbmUgY29tcGFyaXNvbiBvZiBBIHdpdGggQiB1c2luZyAoQSAtIEIpID4+PiA4OlxuICAgICAgICAvLyAgICAgICAgICBpZiBBID4gQiwgdGhlbiByZXN1bHQgaXMgcG9zaXRpdmUgaW50ZWdlclxuICAgICAgICAvLyAgICAgICAgICBpZiBBIDw9IEIsIHRoZW4gcmVzdWx0IGlzIDBcbiAgICAgICAgLy9cbiAgICAgICAgLy8gMi4gRGVmaW5lIHNlbGVjdGlvbiBvZiBDIG9yIDAgdXNpbmcgYml0d2lzZSBBTkQ6IFggJiBDOlxuICAgICAgICAvLyAgICAgICAgICBpZiBYID09IDAsIHRoZW4gcmVzdWx0IGlzIDBcbiAgICAgICAgLy8gICAgICAgICAgaWYgWCAhPSAwLCB0aGVuIHJlc3VsdCBpcyBDXG4gICAgICAgIC8vXG4gICAgICAgIC8vIDMuIFN0YXJ0IHdpdGggdGhlIHNtYWxsZXN0IGNvbXBhcmlzb24gKGIgPj0gMCksIHdoaWNoIGlzIGFsd2F5c1xuICAgICAgICAvLyAgICB0cnVlLCBzbyBzZXQgdGhlIHJlc3VsdCB0byB0aGUgc3RhcnRpbmcgQVNDSUkgdmFsdWUgKDY1KS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gNC4gQ29udGludWUgY29tcGFyaW5nIGIgdG8gaGlnaGVyIEFTQ0lJIHZhbHVlcywgYW5kIHNlbGVjdGluZ1xuICAgICAgICAvLyAgICB6ZXJvIGlmIGNvbXBhcmlzb24gaXNuJ3QgdHJ1ZSwgb3RoZXJ3aXNlIHNlbGVjdGluZyBhIHZhbHVlXG4gICAgICAgIC8vICAgIHRvIGFkZCB0byByZXN1bHQsIHdoaWNoOlxuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgICAgICBhKSB1bmRvZXMgdGhlIHByZXZpb3VzIGFkZGl0aW9uXG4gICAgICAgIC8vICAgICAgICAgIGIpIHByb3ZpZGVzIG5ldyB2YWx1ZSB0byBhZGRcbiAgICAgICAgLy9cbiAgICAgICAgdmFyIHJlc3VsdCA9IGI7XG4gICAgICAgIC8vIGIgPj0gMFxuICAgICAgICByZXN1bHQgKz0gNjU7XG4gICAgICAgIC8vIGIgPiAyNVxuICAgICAgICByZXN1bHQgKz0gKCgyNSAtIGIpID4+PiA4KSAmICgoMCAtIDY1KSAtIDI2ICsgOTcpO1xuICAgICAgICAvLyBiID4gNTFcbiAgICAgICAgcmVzdWx0ICs9ICgoNTEgLSBiKSA+Pj4gOCkgJiAoKDI2IC0gOTcpIC0gNTIgKyA0OCk7XG4gICAgICAgIC8vIGIgPiA2MVxuICAgICAgICByZXN1bHQgKz0gKCg2MSAtIGIpID4+PiA4KSAmICgoNTIgLSA0OCkgLSA2MiArIDQzKTtcbiAgICAgICAgLy8gYiA+IDYyXG4gICAgICAgIHJlc3VsdCArPSAoKDYyIC0gYikgPj4+IDgpICYgKCg2MiAtIDQzKSAtIDYzICsgNDcpO1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShyZXN1bHQpO1xuICAgIH07XG4gICAgLy8gRGVjb2RlIGEgY2hhcmFjdGVyIGNvZGUgaW50byBhIGJ5dGUuXG4gICAgLy8gTXVzdCByZXR1cm4gMjU2IGlmIGNoYXJhY3RlciBpcyBvdXQgb2YgYWxwaGFiZXQgcmFuZ2UuXG4gICAgQ29kZXIucHJvdG90eXBlLl9kZWNvZGVDaGFyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgLy8gRGVjb2Rpbmcgd29ya3Mgc2ltaWxhciB0byBlbmNvZGluZzogdXNpbmcgdGhlIHNhbWUgY29tcGFyaXNvblxuICAgICAgICAvLyBmdW5jdGlvbiwgYnV0IG5vdyBpdCB3b3JrcyBvbiByYW5nZXM6IHJlc3VsdCBpcyBhbHdheXMgaW5jcmVtZW50ZWRcbiAgICAgICAgLy8gYnkgdmFsdWUsIGJ1dCB0aGlzIHZhbHVlIGJlY29tZXMgemVybyBpZiB0aGUgcmFuZ2UgaXMgbm90XG4gICAgICAgIC8vIHNhdGlzZmllZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRGVjb2Rpbmcgc3RhcnRzIHdpdGggaW52YWxpZCB2YWx1ZSwgMjU2LCB3aGljaCBpcyB0aGVuXG4gICAgICAgIC8vIHN1YnRyYWN0ZWQgd2hlbiB0aGUgcmFuZ2UgaXMgc2F0aXNmaWVkLiBJZiBub25lIG9mIHRoZSByYW5nZXNcbiAgICAgICAgLy8gYXBwbHksIHRoZSBmdW5jdGlvbiByZXR1cm5zIDI1Niwgd2hpY2ggaXMgdGhlbiBjaGVja2VkIGJ5XG4gICAgICAgIC8vIHRoZSBjYWxsZXIgdG8gdGhyb3cgZXJyb3IuXG4gICAgICAgIHZhciByZXN1bHQgPSBJTlZBTElEX0JZVEU7IC8vIHN0YXJ0IHdpdGggaW52YWxpZCBjaGFyYWN0ZXJcbiAgICAgICAgLy8gYyA9PSA0MyAoYyA+IDQyIGFuZCBjIDwgNDQpXG4gICAgICAgIHJlc3VsdCArPSAoKCg0MiAtIGMpICYgKGMgLSA0NCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQzICsgNjIpO1xuICAgICAgICAvLyBjID09IDQ3IChjID4gNDYgYW5kIGMgPCA0OClcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ2IC0gYykgJiAoYyAtIDQ4KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDcgKyA2Myk7XG4gICAgICAgIC8vIGMgPiA0NyBhbmQgYyA8IDU4XG4gICAgICAgIHJlc3VsdCArPSAoKCg0NyAtIGMpICYgKGMgLSA1OCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ4ICsgNTIpO1xuICAgICAgICAvLyBjID4gNjQgYW5kIGMgPCA5MVxuICAgICAgICByZXN1bHQgKz0gKCgoNjQgLSBjKSAmIChjIC0gOTEpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA2NSArIDApO1xuICAgICAgICAvLyBjID4gOTYgYW5kIGMgPCAxMjNcbiAgICAgICAgcmVzdWx0ICs9ICgoKDk2IC0gYykgJiAoYyAtIDEyMykpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDk3ICsgMjYpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLl9nZXRQYWRkaW5nTGVuZ3RoID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFyIHBhZGRpbmdMZW5ndGggPSAwO1xuICAgICAgICBpZiAodGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAoc1tpXSAhPT0gdGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlbmd0aCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHMubGVuZ3RoIDwgNCB8fCBwYWRkaW5nTGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJhc2U2NENvZGVyOiBpbmNvcnJlY3QgcGFkZGluZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFkZGluZ0xlbmd0aDtcbiAgICB9O1xuICAgIHJldHVybiBDb2Rlcjtcbn0oKSk7XG5leHBvcnRzLkNvZGVyID0gQ29kZXI7XG52YXIgc3RkQ29kZXIgPSBuZXcgQ29kZXIoKTtcbmZ1bmN0aW9uIGVuY29kZShkYXRhKSB7XG4gICAgcmV0dXJuIHN0ZENvZGVyLmVuY29kZShkYXRhKTtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuZnVuY3Rpb24gZGVjb2RlKHMpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZGVjb2RlKHMpO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG4vKipcbiAqIEltcGxlbWVudHMgVVJMLXNhZmUgQmFzZTY0IGVuY29kaW5nLlxuICogKFNhbWUgYXMgQmFzZTY0LCBidXQgJysnIGlzIHJlcGxhY2VkIHdpdGggJy0nLCBhbmQgJy8nIHdpdGggJ18nKS5cbiAqXG4gKiBPcGVyYXRlcyBpbiBjb25zdGFudCB0aW1lLlxuICovXG52YXIgVVJMU2FmZUNvZGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVUkxTYWZlQ29kZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVVJMU2FmZUNvZGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8vIFVSTC1zYWZlIGVuY29kaW5nIGhhdmUgdGhlIGZvbGxvd2luZyBlbmNvZGVkL2RlY29kZWQgcmFuZ2VzOlxuICAgIC8vXG4gICAgLy8gQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXogMDEyMzQ1Njc4OSAgLSAgIF9cbiAgICAvLyBJbmRleDogICAwIC0gMjUgICAgICAgICAgICAgICAgICAgIDI2IC0gNTEgICAgICAgICAgICAgIDUyIC0gNjEgICA2MiAgNjNcbiAgICAvLyBBU0NJSTogIDY1IC0gOTAgICAgICAgICAgICAgICAgICAgIDk3IC0gMTIyICAgICAgICAgICAgIDQ4IC0gNTcgICA0NSAgOTVcbiAgICAvL1xuICAgIFVSTFNhZmVDb2Rlci5wcm90b3R5cGUuX2VuY29kZUJ5dGUgPSBmdW5jdGlvbiAoYikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gYjtcbiAgICAgICAgLy8gYiA+PSAwXG4gICAgICAgIHJlc3VsdCArPSA2NTtcbiAgICAgICAgLy8gYiA+IDI1XG4gICAgICAgIHJlc3VsdCArPSAoKDI1IC0gYikgPj4+IDgpICYgKCgwIC0gNjUpIC0gMjYgKyA5Nyk7XG4gICAgICAgIC8vIGIgPiA1MVxuICAgICAgICByZXN1bHQgKz0gKCg1MSAtIGIpID4+PiA4KSAmICgoMjYgLSA5NykgLSA1MiArIDQ4KTtcbiAgICAgICAgLy8gYiA+IDYxXG4gICAgICAgIHJlc3VsdCArPSAoKDYxIC0gYikgPj4+IDgpICYgKCg1MiAtIDQ4KSAtIDYyICsgNDUpO1xuICAgICAgICAvLyBiID4gNjJcbiAgICAgICAgcmVzdWx0ICs9ICgoNjIgLSBiKSA+Pj4gOCkgJiAoKDYyIC0gNDUpIC0gNjMgKyA5NSk7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlc3VsdCk7XG4gICAgfTtcbiAgICBVUkxTYWZlQ29kZXIucHJvdG90eXBlLl9kZWNvZGVDaGFyID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IElOVkFMSURfQllURTtcbiAgICAgICAgLy8gYyA9PSA0NSAoYyA+IDQ0IGFuZCBjIDwgNDYpXG4gICAgICAgIHJlc3VsdCArPSAoKCg0NCAtIGMpICYgKGMgLSA0NikpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ1ICsgNjIpO1xuICAgICAgICAvLyBjID09IDk1IChjID4gOTQgYW5kIGMgPCA5NilcbiAgICAgICAgcmVzdWx0ICs9ICgoKDk0IC0gYykgJiAoYyAtIDk2KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gOTUgKyA2Myk7XG4gICAgICAgIC8vIGMgPiA0NyBhbmQgYyA8IDU4XG4gICAgICAgIHJlc3VsdCArPSAoKCg0NyAtIGMpICYgKGMgLSA1OCkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDQ4ICsgNTIpO1xuICAgICAgICAvLyBjID4gNjQgYW5kIGMgPCA5MVxuICAgICAgICByZXN1bHQgKz0gKCgoNjQgLSBjKSAmIChjIC0gOTEpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA2NSArIDApO1xuICAgICAgICAvLyBjID4gOTYgYW5kIGMgPCAxMjNcbiAgICAgICAgcmVzdWx0ICs9ICgoKDk2IC0gYykgJiAoYyAtIDEyMykpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDk3ICsgMjYpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuIFVSTFNhZmVDb2Rlcjtcbn0oQ29kZXIpKTtcbmV4cG9ydHMuVVJMU2FmZUNvZGVyID0gVVJMU2FmZUNvZGVyO1xudmFyIHVybFNhZmVDb2RlciA9IG5ldyBVUkxTYWZlQ29kZXIoKTtcbmZ1bmN0aW9uIGVuY29kZVVSTFNhZmUoZGF0YSkge1xuICAgIHJldHVybiB1cmxTYWZlQ29kZXIuZW5jb2RlKGRhdGEpO1xufVxuZXhwb3J0cy5lbmNvZGVVUkxTYWZlID0gZW5jb2RlVVJMU2FmZTtcbmZ1bmN0aW9uIGRlY29kZVVSTFNhZmUocykge1xuICAgIHJldHVybiB1cmxTYWZlQ29kZXIuZGVjb2RlKHMpO1xufVxuZXhwb3J0cy5kZWNvZGVVUkxTYWZlID0gZGVjb2RlVVJMU2FmZTtcbmV4cG9ydHMuZW5jb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZW5jb2RlZExlbmd0aChsZW5ndGgpO1xufTtcbmV4cG9ydHMubWF4RGVjb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIubWF4RGVjb2RlZExlbmd0aChsZW5ndGgpO1xufTtcbmV4cG9ydHMuZGVjb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHN0ZENvZGVyLmRlY29kZWRMZW5ndGgocyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0LmpzLm1hcFxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENvcHlyaWdodCAoQykgMjAxNiBEbWl0cnkgQ2hlc3RueWtoXG4vLyBNSVQgTGljZW5zZS4gU2VlIExJQ0VOU0UgZmlsZSBmb3IgZGV0YWlscy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogUGFja2FnZSB1dGY4IGltcGxlbWVudHMgVVRGLTggZW5jb2RpbmcgYW5kIGRlY29kaW5nLlxuICovXG52YXIgSU5WQUxJRF9VVEYxNiA9IFwidXRmODogaW52YWxpZCBzdHJpbmdcIjtcbnZhciBJTlZBTElEX1VURjggPSBcInV0Zjg6IGludmFsaWQgc291cmNlIGVuY29kaW5nXCI7XG4vKipcbiAqIEVuY29kZXMgdGhlIGdpdmVuIHN0cmluZyBpbnRvIFVURi04IGJ5dGUgYXJyYXkuXG4gKiBUaHJvd3MgaWYgdGhlIHNvdXJjZSBzdHJpbmcgaGFzIGludmFsaWQgVVRGLTE2IGVuY29kaW5nLlxuICovXG5mdW5jdGlvbiBlbmNvZGUocykge1xuICAgIC8vIENhbGN1bGF0ZSByZXN1bHQgbGVuZ3RoIGFuZCBhbGxvY2F0ZSBvdXRwdXQgYXJyYXkuXG4gICAgLy8gZW5jb2RlZExlbmd0aCgpIGFsc28gdmFsaWRhdGVzIHN0cmluZyBhbmQgdGhyb3dzIGVycm9ycyxcbiAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHJlcGVhdCB2YWxpZGF0aW9uIGhlcmUuXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGVuY29kZWRMZW5ndGgocykpO1xuICAgIHZhciBwb3MgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYyA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gYztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweGMwIHwgYyA+PiA2O1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4ODAgfCBjICYgMHgzZjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHhkODAwKSB7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHhlMCB8IGMgPj4gMTI7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IChjID4+IDYpICYgMHgzZjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgYyAmIDB4M2Y7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpKys7IC8vIGdldCBvbmUgbW9yZSBjaGFyYWN0ZXJcbiAgICAgICAgICAgIGMgPSAoYyAmIDB4M2ZmKSA8PCAxMDtcbiAgICAgICAgICAgIGMgfD0gcy5jaGFyQ29kZUF0KGkpICYgMHgzZmY7XG4gICAgICAgICAgICBjICs9IDB4MTAwMDA7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHhmMCB8IGMgPj4gMTg7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IChjID4+IDEyKSAmIDB4M2Y7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IChjID4+IDYpICYgMHgzZjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgYyAmIDB4M2Y7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cbmV4cG9ydHMuZW5jb2RlID0gZW5jb2RlO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgYnl0ZXMgcmVxdWlyZWQgdG8gZW5jb2RlIHRoZSBnaXZlbiBzdHJpbmcgaW50byBVVEYtOC5cbiAqIFRocm93cyBpZiB0aGUgc291cmNlIHN0cmluZyBoYXMgaW52YWxpZCBVVEYtMTYgZW5jb2RpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZWRMZW5ndGgocykge1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYyA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgMHg4MDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweGQ4MDApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPD0gMHhkZmZmKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEYxNik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7IC8vIFwiZWF0XCIgbmV4dCBjaGFyYWN0ZXJcbiAgICAgICAgICAgIHJlc3VsdCArPSA0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGMTYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLmVuY29kZWRMZW5ndGggPSBlbmNvZGVkTGVuZ3RoO1xuLyoqXG4gKiBEZWNvZGVzIHRoZSBnaXZlbiBieXRlIGFycmF5IGZyb20gVVRGLTggaW50byBhIHN0cmluZy5cbiAqIFRocm93cyBpZiBlbmNvZGluZyBpcyBpbnZhbGlkLlxuICovXG5mdW5jdGlvbiBkZWNvZGUoYXJyKSB7XG4gICAgdmFyIGNoYXJzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGIgPSBhcnJbaV07XG4gICAgICAgIGlmIChiICYgMHg4MCkge1xuICAgICAgICAgICAgdmFyIG1pbiA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChiIDwgMHhlMCkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWQgMSBtb3JlIGJ5dGUuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG4xID0gYXJyWysraV07XG4gICAgICAgICAgICAgICAgaWYgKChuMSAmIDB4YzApICE9PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiID0gKGIgJiAweDFmKSA8PCA2IHwgKG4xICYgMHgzZik7XG4gICAgICAgICAgICAgICAgbWluID0gMHg4MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGIgPCAweGYwKSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCAyIG1vcmUgYnl0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuMSA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIHZhciBuMiA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIGlmICgobjEgJiAweGMwKSAhPT0gMHg4MCB8fCAobjIgJiAweGMwKSAhPT0gMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiA9IChiICYgMHgwZikgPDwgMTIgfCAobjEgJiAweDNmKSA8PCA2IHwgKG4yICYgMHgzZik7XG4gICAgICAgICAgICAgICAgbWluID0gMHg4MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiIDwgMHhmOCkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWQgMyBtb3JlIGJ5dGVzLlxuICAgICAgICAgICAgICAgIGlmIChpID49IGFyci5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbjEgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICB2YXIgbjIgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICB2YXIgbjMgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICBpZiAoKG4xICYgMHhjMCkgIT09IDB4ODAgfHwgKG4yICYgMHhjMCkgIT09IDB4ODAgfHwgKG4zICYgMHhjMCkgIT09IDB4ODApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgPSAoYiAmIDB4MGYpIDw8IDE4IHwgKG4xICYgMHgzZikgPDwgMTIgfCAobjIgJiAweDNmKSA8PCA2IHwgKG4zICYgMHgzZik7XG4gICAgICAgICAgICAgICAgbWluID0gMHgxMDAwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIgPCBtaW4gfHwgKGIgPj0gMHhkODAwICYmIGIgPD0gMHhkZmZmKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIgPj0gMHgxMDAwMCkge1xuICAgICAgICAgICAgICAgIC8vIFN1cnJvZ2F0ZSBwYWlyLlxuICAgICAgICAgICAgICAgIGlmIChiID4gMHgxMGZmZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgICAgICBjaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwIHwgKGIgPj4gMTApKSk7XG4gICAgICAgICAgICAgICAgYiA9IDB4ZGMwMCB8IChiICYgMHgzZmYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShiKSk7XG4gICAgfVxuICAgIHJldHVybiBjaGFycy5qb2luKFwiXCIpO1xufVxuZXhwb3J0cy5kZWNvZGUgPSBkZWNvZGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGY4LmpzLm1hcFxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gcmVxdWlyZWQgc28gd2UgZG9uJ3QgaGF2ZSB0byBkbyByZXF1aXJlKCdwdXNoZXInKS5kZWZhdWx0IGV0Yy5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKS5kZWZhdWx0O1xuXG5cbi8qKiovIH0pLFxuLyogMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9zY3JpcHRfcmVjZWl2ZXJfZmFjdG9yeS50c1xudmFyIFNjcmlwdFJlY2VpdmVyRmFjdG9yeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2NyaXB0UmVjZWl2ZXJGYWN0b3J5KHByZWZpeCwgbmFtZSkge1xuICAgICAgICB0aGlzLmxhc3RJZCA9IDA7XG4gICAgICAgIHRoaXMucHJlZml4ID0gcHJlZml4O1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBTY3JpcHRSZWNlaXZlckZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmxhc3RJZCsrO1xuICAgICAgICB2YXIgbnVtYmVyID0gdGhpcy5sYXN0SWQ7XG4gICAgICAgIHZhciBpZCA9IHRoaXMucHJlZml4ICsgbnVtYmVyO1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMubmFtZSArICdbJyArIG51bWJlciArICddJztcbiAgICAgICAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgY2FsbGJhY2tXcmFwcGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXNbbnVtYmVyXSA9IGNhbGxiYWNrV3JhcHBlcjtcbiAgICAgICAgcmV0dXJuIHsgbnVtYmVyOiBudW1iZXIsIGlkOiBpZCwgbmFtZTogbmFtZSwgY2FsbGJhY2s6IGNhbGxiYWNrV3JhcHBlciB9O1xuICAgIH07XG4gICAgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAocmVjZWl2ZXIpIHtcbiAgICAgICAgZGVsZXRlIHRoaXNbcmVjZWl2ZXIubnVtYmVyXTtcbiAgICB9O1xuICAgIHJldHVybiBTY3JpcHRSZWNlaXZlckZhY3Rvcnk7XG59KCkpO1xuXG52YXIgU2NyaXB0UmVjZWl2ZXJzID0gbmV3IFNjcmlwdFJlY2VpdmVyRmFjdG9yeSgnX3B1c2hlcl9zY3JpcHRfJywgJ1B1c2hlci5TY3JpcHRSZWNlaXZlcnMnKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9kZWZhdWx0cy50c1xudmFyIERlZmF1bHRzID0ge1xuICAgIFZFUlNJT046IFwiNy4wLjNcIixcbiAgICBQUk9UT0NPTDogNyxcbiAgICB3c1BvcnQ6IDgwLFxuICAgIHdzc1BvcnQ6IDQ0MyxcbiAgICB3c1BhdGg6ICcnLFxuICAgIGh0dHBIb3N0OiAnc29ja2pzLnB1c2hlci5jb20nLFxuICAgIGh0dHBQb3J0OiA4MCxcbiAgICBodHRwc1BvcnQ6IDQ0MyxcbiAgICBodHRwUGF0aDogJy9wdXNoZXInLFxuICAgIHN0YXRzX2hvc3Q6ICdzdGF0cy5wdXNoZXIuY29tJyxcbiAgICBhdXRoRW5kcG9pbnQ6ICcvcHVzaGVyL2F1dGgnLFxuICAgIGF1dGhUcmFuc3BvcnQ6ICdhamF4JyxcbiAgICBhY3Rpdml0eVRpbWVvdXQ6IDEyMDAwMCxcbiAgICBwb25nVGltZW91dDogMzAwMDAsXG4gICAgdW5hdmFpbGFibGVUaW1lb3V0OiAxMDAwMCxcbiAgICBjbHVzdGVyOiAnbXQxJyxcbiAgICBjZG5faHR0cDogXCJodHRwOi8vanMucHVzaGVyLmNvbVwiLFxuICAgIGNkbl9odHRwczogXCJodHRwczovL2pzLnB1c2hlci5jb21cIixcbiAgICBkZXBlbmRlbmN5X3N1ZmZpeDogXCJcIlxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGRlZmF1bHRzID0gKERlZmF1bHRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9kZXBlbmRlbmN5X2xvYWRlci50c1xuXG5cbnZhciBkZXBlbmRlbmN5X2xvYWRlcl9EZXBlbmRlbmN5TG9hZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZXBlbmRlbmN5TG9hZGVyKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5yZWNlaXZlcnMgPSBvcHRpb25zLnJlY2VpdmVycyB8fCBTY3JpcHRSZWNlaXZlcnM7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHt9O1xuICAgIH1cbiAgICBEZXBlbmRlbmN5TG9hZGVyLnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHNlbGYubG9hZGluZ1tuYW1lXSAmJiBzZWxmLmxvYWRpbmdbbmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VsZi5sb2FkaW5nW25hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5sb2FkaW5nW25hbWVdID0gW2NhbGxiYWNrXTtcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gcnVudGltZS5jcmVhdGVTY3JpcHRSZXF1ZXN0KHNlbGYuZ2V0UGF0aChuYW1lLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB2YXIgcmVjZWl2ZXIgPSBzZWxmLnJlY2VpdmVycy5jcmVhdGUoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZWNlaXZlcnMucmVtb3ZlKHJlY2VpdmVyKTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5sb2FkaW5nW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBzZWxmLmxvYWRpbmdbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmLmxvYWRpbmdbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzQ2FsbGJhY2sgPSBmdW5jdGlvbiAod2FzU3VjY2Vzc2Z1bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3YXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5jbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0oZXJyb3IsIHN1Y2Nlc3NDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZChyZWNlaXZlcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERlcGVuZGVuY3lMb2FkZXIucHJvdG90eXBlLmdldFJvb3QgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgY2RuO1xuICAgICAgICB2YXIgcHJvdG9jb2wgPSBydW50aW1lLmdldERvY3VtZW50KCkubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgICAgIGlmICgob3B0aW9ucyAmJiBvcHRpb25zLnVzZVRMUykgfHwgcHJvdG9jb2wgPT09ICdodHRwczonKSB7XG4gICAgICAgICAgICBjZG4gPSB0aGlzLm9wdGlvbnMuY2RuX2h0dHBzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2RuID0gdGhpcy5vcHRpb25zLmNkbl9odHRwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZG4ucmVwbGFjZSgvXFwvKiQvLCAnJykgKyAnLycgKyB0aGlzLm9wdGlvbnMudmVyc2lvbjtcbiAgICB9O1xuICAgIERlcGVuZGVuY3lMb2FkZXIucHJvdG90eXBlLmdldFBhdGggPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSb290KG9wdGlvbnMpICsgJy8nICsgbmFtZSArIHRoaXMub3B0aW9ucy5zdWZmaXggKyAnLmpzJztcbiAgICB9O1xuICAgIHJldHVybiBEZXBlbmRlbmN5TG9hZGVyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGRlcGVuZGVuY3lfbG9hZGVyID0gKGRlcGVuZGVuY3lfbG9hZGVyX0RlcGVuZGVuY3lMb2FkZXIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL2RlcGVuZGVuY2llcy50c1xuXG5cblxudmFyIERlcGVuZGVuY2llc1JlY2VpdmVycyA9IG5ldyBTY3JpcHRSZWNlaXZlckZhY3RvcnkoJ19wdXNoZXJfZGVwZW5kZW5jaWVzJywgJ1B1c2hlci5EZXBlbmRlbmNpZXNSZWNlaXZlcnMnKTtcbnZhciBEZXBlbmRlbmNpZXMgPSBuZXcgZGVwZW5kZW5jeV9sb2FkZXIoe1xuICAgIGNkbl9odHRwOiBkZWZhdWx0cy5jZG5faHR0cCxcbiAgICBjZG5faHR0cHM6IGRlZmF1bHRzLmNkbl9odHRwcyxcbiAgICB2ZXJzaW9uOiBkZWZhdWx0cy5WRVJTSU9OLFxuICAgIHN1ZmZpeDogZGVmYXVsdHMuZGVwZW5kZW5jeV9zdWZmaXgsXG4gICAgcmVjZWl2ZXJzOiBEZXBlbmRlbmNpZXNSZWNlaXZlcnNcbn0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL3VybF9zdG9yZS50c1xudmFyIHVybFN0b3JlID0ge1xuICAgIGJhc2VVcmw6ICdodHRwczovL3B1c2hlci5jb20nLFxuICAgIHVybHM6IHtcbiAgICAgICAgYXV0aGVudGljYXRpb25FbmRwb2ludDoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2F1dGhlbnRpY2F0aW5nX3VzZXJzJ1xuICAgICAgICB9LFxuICAgICAgICBqYXZhc2NyaXB0UXVpY2tTdGFydDoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2phdmFzY3JpcHRfcXVpY2tfc3RhcnQnXG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXJpbmdDbGllbnRFdmVudHM6IHtcbiAgICAgICAgICAgIHBhdGg6ICcvZG9jcy9jbGllbnRfYXBpX2d1aWRlL2NsaWVudF9ldmVudHMjdHJpZ2dlci1ldmVudHMnXG4gICAgICAgIH0sXG4gICAgICAgIGVuY3J5cHRlZENoYW5uZWxTdXBwb3J0OiB7XG4gICAgICAgICAgICBmdWxsVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL3B1c2hlci9wdXNoZXItanMvdHJlZS9jYzQ5MTAxNTM3MWE0YmRlNTc0M2QxYzg3YTBmYmFjMGZlYjUzMTk1I2VuY3J5cHRlZC1jaGFubmVsLXN1cHBvcnQnXG4gICAgICAgIH1cbiAgICB9XG59O1xudmFyIGJ1aWxkTG9nU3VmZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB1cmxQcmVmaXggPSAnU2VlOic7XG4gICAgdmFyIHVybE9iaiA9IHVybFN0b3JlLnVybHNba2V5XTtcbiAgICBpZiAoIXVybE9iailcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIHZhciB1cmw7XG4gICAgaWYgKHVybE9iai5mdWxsVXJsKSB7XG4gICAgICAgIHVybCA9IHVybE9iai5mdWxsVXJsO1xuICAgIH1cbiAgICBlbHNlIGlmICh1cmxPYmoucGF0aCkge1xuICAgICAgICB1cmwgPSB1cmxTdG9yZS5iYXNlVXJsICsgdXJsT2JqLnBhdGg7XG4gICAgfVxuICAgIGlmICghdXJsKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHVybFByZWZpeCArIFwiIFwiICsgdXJsO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHVybF9zdG9yZSA9ICh7IGJ1aWxkTG9nU3VmZml4OiBidWlsZExvZ1N1ZmZpeCB9KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9lcnJvcnMudHNcbnZhciBfX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBCYWRFdmVudE5hbWUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCYWRFdmVudE5hbWUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQmFkRXZlbnROYW1lKG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEJhZEV2ZW50TmFtZTtcbn0oRXJyb3IpKTtcblxudmFyIFJlcXVlc3RUaW1lZE91dCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFJlcXVlc3RUaW1lZE91dCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSZXF1ZXN0VGltZWRPdXQobXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gUmVxdWVzdFRpbWVkT3V0O1xufShFcnJvcikpO1xuXG52YXIgVHJhbnNwb3J0UHJpb3JpdHlUb29Mb3cgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUcmFuc3BvcnRQcmlvcml0eVRvb0xvdywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdyhtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdztcbn0oRXJyb3IpKTtcblxudmFyIFRyYW5zcG9ydENsb3NlZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRyYW5zcG9ydENsb3NlZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnRDbG9zZWQobXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gVHJhbnNwb3J0Q2xvc2VkO1xufShFcnJvcikpO1xuXG52YXIgVW5zdXBwb3J0ZWRGZWF0dXJlID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVW5zdXBwb3J0ZWRGZWF0dXJlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVuc3VwcG9ydGVkRmVhdHVyZShtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBVbnN1cHBvcnRlZEZlYXR1cmU7XG59KEVycm9yKSk7XG5cbnZhciBVbnN1cHBvcnRlZFRyYW5zcG9ydCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVuc3VwcG9ydGVkVHJhbnNwb3J0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVuc3VwcG9ydGVkVHJhbnNwb3J0KG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFVuc3VwcG9ydGVkVHJhbnNwb3J0O1xufShFcnJvcikpO1xuXG52YXIgVW5zdXBwb3J0ZWRTdHJhdGVneSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVuc3VwcG9ydGVkU3RyYXRlZ3ksIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVW5zdXBwb3J0ZWRTdHJhdGVneShtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBVbnN1cHBvcnRlZFN0cmF0ZWd5O1xufShFcnJvcikpO1xuXG52YXIgSFRUUEF1dGhFcnJvciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhUVFBBdXRoRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSFRUUEF1dGhFcnJvcihzdGF0dXMsIG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gSFRUUEF1dGhFcnJvcjtcbn0oRXJyb3IpKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL2F1dGgveGhyX2F1dGgudHNcblxuXG5cbnZhciBhamF4ID0gZnVuY3Rpb24gKGNvbnRleHQsIHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcywgeGhyO1xuICAgIHhociA9IHJ1bnRpbWUuY3JlYXRlWEhSKCk7XG4gICAgeGhyLm9wZW4oJ1BPU1QnLCBzZWxmLm9wdGlvbnMuYXV0aEVuZHBvaW50LCB0cnVlKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIGZvciAodmFyIGhlYWRlck5hbWUgaW4gdGhpcy5hdXRoT3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGhlYWRlck5hbWUsIHRoaXMuYXV0aE9wdGlvbnMuaGVhZGVyc1toZWFkZXJOYW1lXSk7XG4gICAgfVxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBwYXJzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEhUVFBBdXRoRXJyb3IoMjAwLCAnSlNPTiByZXR1cm5lZCBmcm9tIGF1dGggZW5kcG9pbnQgd2FzIGludmFsaWQsIHlldCBzdGF0dXMgY29kZSB3YXMgMjAwLiBEYXRhIHdhczogJyArXG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIucmVzcG9uc2VUZXh0KSwgeyBhdXRoOiAnJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCdhdXRoZW50aWNhdGlvbkVuZHBvaW50Jyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEhUVFBBdXRoRXJyb3IoeGhyLnN0YXR1cywgJ1VuYWJsZSB0byByZXRyaWV2ZSBhdXRoIHN0cmluZyBmcm9tIGF1dGggZW5kcG9pbnQgLSAnICtcbiAgICAgICAgICAgICAgICAgICAgKFwicmVjZWl2ZWQgc3RhdHVzOiBcIiArIHhoci5zdGF0dXMgKyBcIiBmcm9tIFwiICsgc2VsZi5vcHRpb25zLmF1dGhFbmRwb2ludCArIFwiLiBcIikgK1xuICAgICAgICAgICAgICAgICAgICAoXCJDbGllbnRzIG11c3QgYmUgYXV0aGVudGljYXRlZCB0byBqb2luIHByaXZhdGUgb3IgcHJlc2VuY2UgY2hhbm5lbHMuIFwiICsgc3VmZml4KSksIHsgYXV0aDogJycgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhoci5zZW5kKHRoaXMuY29tcG9zZVF1ZXJ5KHNvY2tldElkKSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB4aHJfYXV0aCA9IChhamF4KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9iYXNlNjQudHNcbmZ1bmN0aW9uIGVuY29kZShzKSB7XG4gICAgcmV0dXJuIGJ0b2EodXRvYihzKSk7XG59XG52YXIgZnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcbnZhciBiNjRjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcbnZhciBiNjR0YWIgPSB7fTtcbmZvciAodmFyIGJhc2U2NF9pID0gMCwgbCA9IGI2NGNoYXJzLmxlbmd0aDsgYmFzZTY0X2kgPCBsOyBiYXNlNjRfaSsrKSB7XG4gICAgYjY0dGFiW2I2NGNoYXJzLmNoYXJBdChiYXNlNjRfaSldID0gYmFzZTY0X2k7XG59XG52YXIgY2JfdXRvYiA9IGZ1bmN0aW9uIChjKSB7XG4gICAgdmFyIGNjID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIHJldHVybiBjYyA8IDB4ODBcbiAgICAgICAgPyBjXG4gICAgICAgIDogY2MgPCAweDgwMFxuICAgICAgICAgICAgPyBmcm9tQ2hhckNvZGUoMHhjMCB8IChjYyA+Pj4gNikpICsgZnJvbUNoYXJDb2RlKDB4ODAgfCAoY2MgJiAweDNmKSlcbiAgICAgICAgICAgIDogZnJvbUNoYXJDb2RlKDB4ZTAgfCAoKGNjID4+PiAxMikgJiAweDBmKSkgK1xuICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgweDgwIHwgKChjYyA+Pj4gNikgJiAweDNmKSkgK1xuICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgweDgwIHwgKGNjICYgMHgzZikpO1xufTtcbnZhciB1dG9iID0gZnVuY3Rpb24gKHUpIHtcbiAgICByZXR1cm4gdS5yZXBsYWNlKC9bXlxceDAwLVxceDdGXS9nLCBjYl91dG9iKTtcbn07XG52YXIgY2JfZW5jb2RlID0gZnVuY3Rpb24gKGNjYykge1xuICAgIHZhciBwYWRsZW4gPSBbMCwgMiwgMV1bY2NjLmxlbmd0aCAlIDNdO1xuICAgIHZhciBvcmQgPSAoY2NjLmNoYXJDb2RlQXQoMCkgPDwgMTYpIHxcbiAgICAgICAgKChjY2MubGVuZ3RoID4gMSA/IGNjYy5jaGFyQ29kZUF0KDEpIDogMCkgPDwgOCkgfFxuICAgICAgICAoY2NjLmxlbmd0aCA+IDIgPyBjY2MuY2hhckNvZGVBdCgyKSA6IDApO1xuICAgIHZhciBjaGFycyA9IFtcbiAgICAgICAgYjY0Y2hhcnMuY2hhckF0KG9yZCA+Pj4gMTgpLFxuICAgICAgICBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gMTIpICYgNjMpLFxuICAgICAgICBwYWRsZW4gPj0gMiA/ICc9JyA6IGI2NGNoYXJzLmNoYXJBdCgob3JkID4+PiA2KSAmIDYzKSxcbiAgICAgICAgcGFkbGVuID49IDEgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQob3JkICYgNjMpXG4gICAgXTtcbiAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG59O1xudmFyIGJ0b2EgPSB3aW5kb3cuYnRvYSB8fFxuICAgIGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHJldHVybiBiLnJlcGxhY2UoL1tcXHNcXFNdezEsM30vZywgY2JfZW5jb2RlKTtcbiAgICB9O1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL3RpbWVycy9hYnN0cmFjdF90aW1lci50c1xudmFyIFRpbWVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaW1lcihzZXQsIGNsZWFyLCBkZWxheSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhciA9IGNsZWFyO1xuICAgICAgICB0aGlzLnRpbWVyID0gc2V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy50aW1lcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnRpbWVyID0gY2FsbGJhY2soX3RoaXMudGltZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuICAgIFRpbWVyLnByb3RvdHlwZS5pc1J1bm5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVyICE9PSBudWxsO1xuICAgIH07XG4gICAgVGltZXIucHJvdG90eXBlLmVuc3VyZUFib3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBUaW1lcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhYnN0cmFjdF90aW1lciA9IChUaW1lcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvdGltZXJzL2luZGV4LnRzXG52YXIgdGltZXJzX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuZnVuY3Rpb24gdGltZXJzX2NsZWFyVGltZW91dCh0aW1lcikge1xuICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xufVxuZnVuY3Rpb24gdGltZXJzX2NsZWFySW50ZXJ2YWwodGltZXIpIHtcbiAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcik7XG59XG52YXIgT25lT2ZmVGltZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRpbWVyc19leHRlbmRzKE9uZU9mZlRpbWVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9uZU9mZlRpbWVyKGRlbGF5LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgc2V0VGltZW91dCwgdGltZXJzX2NsZWFyVGltZW91dCwgZGVsYXksIGZ1bmN0aW9uICh0aW1lcikge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gT25lT2ZmVGltZXI7XG59KGFic3RyYWN0X3RpbWVyKSk7XG5cbnZhciBQZXJpb2RpY1RpbWVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0aW1lcnNfZXh0ZW5kcyhQZXJpb2RpY1RpbWVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBlcmlvZGljVGltZXIoZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBzZXRJbnRlcnZhbCwgdGltZXJzX2NsZWFySW50ZXJ2YWwsIGRlbGF5LCBmdW5jdGlvbiAodGltZXIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGltZXI7XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBQZXJpb2RpY1RpbWVyO1xufShhYnN0cmFjdF90aW1lcikpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbC50c1xuXG52YXIgVXRpbCA9IHtcbiAgICBub3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKERhdGUubm93KSB7XG4gICAgICAgICAgICByZXR1cm4gRGF0ZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVmZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gbmV3IE9uZU9mZlRpbWVyKDAsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIG1ldGhvZDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJvdW5kQXJndW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmplY3RbbmFtZV0uYXBwbHkob2JqZWN0LCBib3VuZEFyZ3VtZW50cy5jb25jYXQoYXJndW1lbnRzKSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHV0aWwgPSAoVXRpbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvY29sbGVjdGlvbnMudHNcblxuXG5mdW5jdGlvbiBleHRlbmQodGFyZ2V0KSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICBzb3VyY2VzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGV4dGVuc2lvbnMgPSBzb3VyY2VzW2ldO1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBleHRlbnNpb25zKSB7XG4gICAgICAgICAgICBpZiAoZXh0ZW5zaW9uc1twcm9wZXJ0eV0gJiZcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnNbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbcHJvcGVydHldID0gZXh0ZW5kKHRhcmdldFtwcm9wZXJ0eV0gfHwge30sIGV4dGVuc2lvbnNbcHJvcGVydHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBleHRlbnNpb25zW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KCkge1xuICAgIHZhciBtID0gWydQdXNoZXInXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1tpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG0ucHVzaChhcmd1bWVudHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbS5wdXNoKHNhZmVKU09OU3RyaW5naWZ5KGFyZ3VtZW50c1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtLmpvaW4oJyA6ICcpO1xufVxuZnVuY3Rpb24gYXJyYXlJbmRleE9mKGFycmF5LCBpdGVtKSB7XG4gICAgdmFyIG5hdGl2ZUluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbiAgICBpZiAoYXJyYXkgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAobmF0aXZlSW5kZXhPZiAmJiBhcnJheS5pbmRleE9mID09PSBuYXRpdmVJbmRleE9mKSB7XG4gICAgICAgIHJldHVybiBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGFycmF5Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXJyYXlbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIG9iamVjdEFwcGx5KG9iamVjdCwgZikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpIHtcbiAgICAgICAgICAgIGYob2JqZWN0W2tleV0sIGtleSwgb2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uIChfLCBrZXkpIHtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGtleXM7XG59XG5mdW5jdGlvbiB2YWx1ZXMob2JqZWN0KSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmFsdWVzO1xufVxuZnVuY3Rpb24gYXBwbHkoYXJyYXksIGYsIGNvbnRleHQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGYuY2FsbChjb250ZXh0IHx8IHdpbmRvdywgYXJyYXlbaV0sIGksIGFycmF5KTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXAoYXJyYXksIGYpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQucHVzaChmKGFycmF5W2ldLCBpLCBhcnJheSwgcmVzdWx0KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtYXBPYmplY3Qob2JqZWN0LCBmKSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmVzdWx0W2tleV0gPSBmKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmlsdGVyKGFycmF5LCB0ZXN0KSB7XG4gICAgdGVzdCA9XG4gICAgICAgIHRlc3QgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIXZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGVzdChhcnJheVtpXSwgaSwgYXJyYXksIHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmlsdGVyT2JqZWN0KG9iamVjdCwgdGVzdCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICgodGVzdCAmJiB0ZXN0KHZhbHVlLCBrZXksIG9iamVjdCwgcmVzdWx0KSkgfHwgQm9vbGVhbih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZmxhdHRlbihvYmplY3QpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBhbnkoYXJyYXksIHRlc3QpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNvbGxlY3Rpb25zX2FsbChhcnJheSwgdGVzdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCF0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGVuY29kZVBhcmFtc09iamVjdChkYXRhKSB7XG4gICAgcmV0dXJuIG1hcE9iamVjdChkYXRhLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gc2FmZUpTT05TdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoZW5jb2RlKHZhbHVlLnRvU3RyaW5nKCkpKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGJ1aWxkUXVlcnlTdHJpbmcoZGF0YSkge1xuICAgIHZhciBwYXJhbXMgPSBmaWx0ZXJPYmplY3QoZGF0YSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIH0pO1xuICAgIHZhciBxdWVyeSA9IG1hcChmbGF0dGVuKGVuY29kZVBhcmFtc09iamVjdChwYXJhbXMpKSwgdXRpbC5tZXRob2QoJ2pvaW4nLCAnPScpKS5qb2luKCcmJyk7XG4gICAgcmV0dXJuIHF1ZXJ5O1xufVxuZnVuY3Rpb24gZGVjeWNsZU9iamVjdChvYmplY3QpIHtcbiAgICB2YXIgb2JqZWN0cyA9IFtdLCBwYXRocyA9IFtdO1xuICAgIHJldHVybiAoZnVuY3Rpb24gZGVyZXoodmFsdWUsIHBhdGgpIHtcbiAgICAgICAgdmFyIGksIG5hbWUsIG51O1xuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0c1tpXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7ICRyZWY6IHBhdGhzW2ldIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb2JqZWN0cy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICBwYXRocy5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgICAgICAgICAgICAgICBudSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51W2ldID0gZGVyZXoodmFsdWVbaV0sIHBhdGggKyAnWycgKyBpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChuYW1lIGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51W25hbWVdID0gZGVyZXoodmFsdWVbbmFtZV0sIHBhdGggKyAnWycgKyBKU09OLnN0cmluZ2lmeShuYW1lKSArICddJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51O1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KShvYmplY3QsICckJyk7XG59XG5mdW5jdGlvbiBzYWZlSlNPTlN0cmluZ2lmeShzb3VyY2UpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc291cmNlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRlY3ljbGVPYmplY3Qoc291cmNlKSk7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2xvZ2dlci50c1xuXG5cbnZhciBsb2dnZXJfTG9nZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBMb2dnZXIoKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTG9nID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIExvZ2dlci5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2codGhpcy5nbG9iYWxMb2csIGFyZ3MpO1xuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nKHRoaXMuZ2xvYmFsTG9nV2FybiwgYXJncyk7XG4gICAgfTtcbiAgICBMb2dnZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9nKHRoaXMuZ2xvYmFsTG9nRXJyb3IsIGFyZ3MpO1xuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5nbG9iYWxMb2dXYXJuID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLndhcm4pIHtcbiAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbExvZyhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5nbG9iYWxMb2dFcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5lcnJvcikge1xuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbExvZ1dhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvZ2dlci5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKGRlZmF1bHRMb2dnaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBzdHJpbmdpZnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgaWYgKGNvcmVfcHVzaGVyLmxvZykge1xuICAgICAgICAgICAgY29yZV9wdXNoZXIubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvcmVfcHVzaGVyLmxvZ1RvQ29uc29sZSkge1xuICAgICAgICAgICAgdmFyIGxvZyA9IGRlZmF1bHRMb2dnaW5nRnVuY3Rpb24uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGxvZyhtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIExvZ2dlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBsb2dnZXIgPSAobmV3IGxvZ2dlcl9Mb2dnZXIoKSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9hdXRoL2pzb25wX2F1dGgudHNcblxudmFyIGpzb25wID0gZnVuY3Rpb24gKGNvbnRleHQsIHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLmF1dGhPcHRpb25zLmhlYWRlcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsb2dnZXIud2FybignVG8gc2VuZCBoZWFkZXJzIHdpdGggdGhlIGF1dGggcmVxdWVzdCwgeW91IG11c3QgdXNlIEFKQVgsIHJhdGhlciB0aGFuIEpTT05QLicpO1xuICAgIH1cbiAgICB2YXIgY2FsbGJhY2tOYW1lID0gY29udGV4dC5uZXh0QXV0aENhbGxiYWNrSUQudG9TdHJpbmcoKTtcbiAgICBjb250ZXh0Lm5leHRBdXRoQ2FsbGJhY2tJRCsrO1xuICAgIHZhciBkb2N1bWVudCA9IGNvbnRleHQuZ2V0RG9jdW1lbnQoKTtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgY29udGV4dC5hdXRoX2NhbGxiYWNrc1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfTtcbiAgICB2YXIgY2FsbGJhY2tfbmFtZSA9IFwiUHVzaGVyLmF1dGhfY2FsbGJhY2tzWydcIiArIGNhbGxiYWNrTmFtZSArIFwiJ11cIjtcbiAgICBzY3JpcHQuc3JjID1cbiAgICAgICAgdGhpcy5vcHRpb25zLmF1dGhFbmRwb2ludCArXG4gICAgICAgICAgICAnP2NhbGxiYWNrPScgK1xuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGNhbGxiYWNrX25hbWUpICtcbiAgICAgICAgICAgICcmJyArXG4gICAgICAgICAgICB0aGlzLmNvbXBvc2VRdWVyeShzb2NrZXRJZCk7XG4gICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBoZWFkLmluc2VydEJlZm9yZShzY3JpcHQsIGhlYWQuZmlyc3RDaGlsZCk7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIganNvbnBfYXV0aCA9IChqc29ucCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kb20vc2NyaXB0X3JlcXVlc3QudHNcbnZhciBTY3JpcHRSZXF1ZXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY3JpcHRSZXF1ZXN0KHNyYykge1xuICAgICAgICB0aGlzLnNyYyA9IHNyYztcbiAgICB9XG4gICAgU2NyaXB0UmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChyZWNlaXZlcikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBlcnJvclN0cmluZyA9ICdFcnJvciBsb2FkaW5nICcgKyBzZWxmLnNyYztcbiAgICAgICAgc2VsZi5zY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2VsZi5zY3JpcHQuaWQgPSByZWNlaXZlci5pZDtcbiAgICAgICAgc2VsZi5zY3JpcHQuc3JjID0gc2VsZi5zcmM7XG4gICAgICAgIHNlbGYuc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2VsZi5zY3JpcHQuY2hhcnNldCA9ICdVVEYtOCc7XG4gICAgICAgIGlmIChzZWxmLnNjcmlwdC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLmNhbGxiYWNrKGVycm9yU3RyaW5nKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5zY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNjcmlwdC5yZWFkeVN0YXRlID09PSAnbG9hZGVkJyB8fFxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVyLmNhbGxiYWNrKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGYuc2NyaXB0LmFzeW5jID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmF0dGFjaEV2ZW50ICYmXG4gICAgICAgICAgICAvb3BlcmEvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICBzZWxmLmVycm9yU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzZWxmLmVycm9yU2NyaXB0LmlkID0gcmVjZWl2ZXIuaWQgKyAnX2Vycm9yJztcbiAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQudGV4dCA9IHJlY2VpdmVyLm5hbWUgKyBcIignXCIgKyBlcnJvclN0cmluZyArIFwiJyk7XCI7XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5hc3luYyA9IHNlbGYuZXJyb3JTY3JpcHQuYXN5bmMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNlbGYuc2NyaXB0LCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgICAgICBpZiAoc2VsZi5lcnJvclNjcmlwdCkge1xuICAgICAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc2VsZi5lcnJvclNjcmlwdCwgc2VsZi5zY3JpcHQubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTY3JpcHRSZXF1ZXN0LnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0Lm9ubG9hZCA9IHRoaXMuc2NyaXB0Lm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zY3JpcHQgJiYgdGhpcy5zY3JpcHQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZXJyb3JTY3JpcHQgJiYgdGhpcy5lcnJvclNjcmlwdC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yU2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lcnJvclNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICAgICAgICB0aGlzLmVycm9yU2NyaXB0ID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBTY3JpcHRSZXF1ZXN0O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHNjcmlwdF9yZXF1ZXN0ID0gKFNjcmlwdFJlcXVlc3QpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL2pzb25wX3JlcXVlc3QudHNcblxuXG52YXIganNvbnBfcmVxdWVzdF9KU09OUFJlcXVlc3QgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEpTT05QUmVxdWVzdCh1cmwsIGRhdGEpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIEpTT05QUmVxdWVzdC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChyZWNlaXZlcikge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHF1ZXJ5ID0gYnVpbGRRdWVyeVN0cmluZyh0aGlzLmRhdGEpO1xuICAgICAgICB2YXIgdXJsID0gdGhpcy51cmwgKyAnLycgKyByZWNlaXZlci5udW1iZXIgKyAnPycgKyBxdWVyeTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ID0gcnVudGltZS5jcmVhdGVTY3JpcHRSZXF1ZXN0KHVybCk7XG4gICAgICAgIHRoaXMucmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcbiAgICB9O1xuICAgIEpTT05QUmVxdWVzdC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdCkge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LmNsZWFudXAoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEpTT05QUmVxdWVzdDtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBqc29ucF9yZXF1ZXN0ID0gKGpzb25wX3JlcXVlc3RfSlNPTlBSZXF1ZXN0KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL3RpbWVsaW5lL2pzb25wX3RpbWVsaW5lLnRzXG5cblxudmFyIGdldEFnZW50ID0gZnVuY3Rpb24gKHNlbmRlciwgdXNlVExTKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2NoZW1lID0gJ2h0dHAnICsgKHVzZVRMUyA/ICdzJyA6ICcnKSArICc6Ly8nO1xuICAgICAgICB2YXIgdXJsID0gc2NoZW1lICsgKHNlbmRlci5ob3N0IHx8IHNlbmRlci5vcHRpb25zLmhvc3QpICsgc2VuZGVyLm9wdGlvbnMucGF0aDtcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBydW50aW1lLmNyZWF0ZUpTT05QUmVxdWVzdCh1cmwsIGRhdGEpO1xuICAgICAgICB2YXIgcmVjZWl2ZXIgPSBydW50aW1lLlNjcmlwdFJlY2VpdmVycy5jcmVhdGUoZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICAgIFNjcmlwdFJlY2VpdmVycy5yZW1vdmUocmVjZWl2ZXIpO1xuICAgICAgICAgICAgcmVxdWVzdC5jbGVhbnVwKCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5ob3N0KSB7XG4gICAgICAgICAgICAgICAgc2VuZGVyLmhvc3QgPSByZXN1bHQuaG9zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcbiAgICB9O1xufTtcbnZhciBqc29ucF90aW1lbGluZV9qc29ucCA9IHtcbiAgICBuYW1lOiAnanNvbnAnLFxuICAgIGdldEFnZW50OiBnZXRBZ2VudFxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGpzb25wX3RpbWVsaW5lID0gKGpzb25wX3RpbWVsaW5lX2pzb25wKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL3VybF9zY2hlbWVzLnRzXG5cbmZ1bmN0aW9uIGdldEdlbmVyaWNVUkwoYmFzZVNjaGVtZSwgcGFyYW1zLCBwYXRoKSB7XG4gICAgdmFyIHNjaGVtZSA9IGJhc2VTY2hlbWUgKyAocGFyYW1zLnVzZVRMUyA/ICdzJyA6ICcnKTtcbiAgICB2YXIgaG9zdCA9IHBhcmFtcy51c2VUTFMgPyBwYXJhbXMuaG9zdFRMUyA6IHBhcmFtcy5ob3N0Tm9uVExTO1xuICAgIHJldHVybiBzY2hlbWUgKyAnOi8vJyArIGhvc3QgKyBwYXRoO1xufVxuZnVuY3Rpb24gZ2V0R2VuZXJpY1BhdGgoa2V5LCBxdWVyeVN0cmluZykge1xuICAgIHZhciBwYXRoID0gJy9hcHAvJyArIGtleTtcbiAgICB2YXIgcXVlcnkgPSAnP3Byb3RvY29sPScgK1xuICAgICAgICBkZWZhdWx0cy5QUk9UT0NPTCArXG4gICAgICAgICcmY2xpZW50PWpzJyArXG4gICAgICAgICcmdmVyc2lvbj0nICtcbiAgICAgICAgZGVmYXVsdHMuVkVSU0lPTiArXG4gICAgICAgIChxdWVyeVN0cmluZyA/ICcmJyArIHF1ZXJ5U3RyaW5nIDogJycpO1xuICAgIHJldHVybiBwYXRoICsgcXVlcnk7XG59XG52YXIgd3MgPSB7XG4gICAgZ2V0SW5pdGlhbDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIHZhciBwYXRoID0gKHBhcmFtcy5odHRwUGF0aCB8fCAnJykgKyBnZXRHZW5lcmljUGF0aChrZXksICdmbGFzaD1mYWxzZScpO1xuICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1VSTCgnd3MnLCBwYXJhbXMsIHBhdGgpO1xuICAgIH1cbn07XG52YXIgaHR0cCA9IHtcbiAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIHBhdGggPSAocGFyYW1zLmh0dHBQYXRoIHx8ICcvcHVzaGVyJykgKyBnZXRHZW5lcmljUGF0aChrZXkpO1xuICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1VSTCgnaHR0cCcsIHBhcmFtcywgcGF0aCk7XG4gICAgfVxufTtcbnZhciBzb2NranMgPSB7XG4gICAgZ2V0SW5pdGlhbDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljVVJMKCdodHRwJywgcGFyYW1zLCBwYXJhbXMuaHR0cFBhdGggfHwgJy9wdXNoZXInKTtcbiAgICB9LFxuICAgIGdldFBhdGg6IGZ1bmN0aW9uIChrZXksIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gZ2V0R2VuZXJpY1BhdGgoa2V5KTtcbiAgICB9XG59O1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2V2ZW50cy9jYWxsYmFja19yZWdpc3RyeS50c1xuXG52YXIgY2FsbGJhY2tfcmVnaXN0cnlfQ2FsbGJhY2tSZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FsbGJhY2tSZWdpc3RyeSgpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgfVxuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsYmFja3NbcHJlZml4KG5hbWUpXTtcbiAgICB9O1xuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB2YXIgcHJlZml4ZWRFdmVudE5hbWUgPSBwcmVmaXgobmFtZSk7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrc1twcmVmaXhlZEV2ZW50TmFtZV0gPVxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXS5wdXNoKHtcbiAgICAgICAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDYWxsYmFja1JlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCFuYW1lICYmICFjYWxsYmFjayAmJiAhY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5hbWVzID0gbmFtZSA/IFtwcmVmaXgobmFtZSldIDoga2V5cyh0aGlzLl9jYWxsYmFja3MpO1xuICAgICAgICBpZiAoY2FsbGJhY2sgfHwgY29udGV4dCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDYWxsYmFjayhuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGxDYWxsYmFja3MobmFtZXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDYWxsYmFja1JlZ2lzdHJ5LnByb3RvdHlwZS5yZW1vdmVDYWxsYmFjayA9IGZ1bmN0aW9uIChuYW1lcywgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgYXBwbHkobmFtZXMsIGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbbmFtZV0gPSBmaWx0ZXIodGhpcy5fY2FsbGJhY2tzW25hbWVdIHx8IFtdLCBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiAoKGNhbGxiYWNrICYmIGNhbGxiYWNrICE9PSBiaW5kaW5nLmZuKSB8fFxuICAgICAgICAgICAgICAgICAgICAoY29udGV4dCAmJiBjb250ZXh0ICE9PSBiaW5kaW5nLmNvbnRleHQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhbGxiYWNrc1tuYW1lXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9O1xuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZUFsbENhbGxiYWNrcyA9IGZ1bmN0aW9uIChuYW1lcykge1xuICAgICAgICBhcHBseShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIENhbGxiYWNrUmVnaXN0cnk7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY2FsbGJhY2tfcmVnaXN0cnkgPSAoY2FsbGJhY2tfcmVnaXN0cnlfQ2FsbGJhY2tSZWdpc3RyeSk7XG5mdW5jdGlvbiBwcmVmaXgobmFtZSkge1xuICAgIHJldHVybiAnXycgKyBuYW1lO1xufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2V2ZW50cy9kaXNwYXRjaGVyLnRzXG5cblxudmFyIGRpc3BhdGNoZXJfRGlzcGF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGlzcGF0Y2hlcihmYWlsVGhyb3VnaCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcyA9IG5ldyBjYWxsYmFja19yZWdpc3RyeSgpO1xuICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcbiAgICAgICAgdGhpcy5mYWlsVGhyb3VnaCA9IGZhaWxUaHJvdWdoO1xuICAgIH1cbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jYWxsYmFja3MuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUudW5iaW5kX2dsb2JhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3MgPSBbXTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IGZpbHRlcih0aGlzLmdsb2JhbF9jYWxsYmFja3MgfHwgW10sIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjICE9PSBjYWxsYmFjazsgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUudW5iaW5kX2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51bmJpbmQoKTtcbiAgICAgICAgdGhpcy51bmJpbmRfZ2xvYmFsKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGRhdGEsIG1ldGFkYXRhKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdsb2JhbF9jYWxsYmFja3NbaV0oZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3MuZ2V0KGV2ZW50TmFtZSk7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGlmIChtZXRhZGF0YSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrcyAmJiBjYWxsYmFja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uZm4uYXBwbHkoY2FsbGJhY2tzW2ldLmNvbnRleHQgfHwgd2luZG93LCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZhaWxUaHJvdWdoKSB7XG4gICAgICAgICAgICB0aGlzLmZhaWxUaHJvdWdoKGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICByZXR1cm4gRGlzcGF0Y2hlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBkaXNwYXRjaGVyID0gKGRpc3BhdGNoZXJfRGlzcGF0Y2hlcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdHJhbnNwb3J0cy90cmFuc3BvcnRfY29ubmVjdGlvbi50c1xudmFyIHRyYW5zcG9ydF9jb25uZWN0aW9uX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuXG5cblxuXG52YXIgdHJhbnNwb3J0X2Nvbm5lY3Rpb25fVHJhbnNwb3J0Q29ubmVjdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdHJhbnNwb3J0X2Nvbm5lY3Rpb25fZXh0ZW5kcyhUcmFuc3BvcnRDb25uZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydENvbm5lY3Rpb24oaG9va3MsIG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaW5pdGlhbGl6ZSA9IHJ1bnRpbWUudHJhbnNwb3J0Q29ubmVjdGlvbkluaXRpYWxpemVyO1xuICAgICAgICBfdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgX3RoaXMua2V5ID0ga2V5O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSAnbmV3JztcbiAgICAgICAgX3RoaXMudGltZWxpbmUgPSBvcHRpb25zLnRpbWVsaW5lO1xuICAgICAgICBfdGhpcy5hY3Rpdml0eVRpbWVvdXQgPSBvcHRpb25zLmFjdGl2aXR5VGltZW91dDtcbiAgICAgICAgX3RoaXMuaWQgPSBfdGhpcy50aW1lbGluZS5nZW5lcmF0ZVVuaXF1ZUlEKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLmhvb2tzLmhhbmRsZXNBY3Rpdml0eUNoZWNrcyk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1BpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuaG9va3Muc3VwcG9ydHNQaW5nKTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnNvY2tldCB8fCB0aGlzLnN0YXRlICE9PSAnaW5pdGlhbGl6ZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVybCA9IHRoaXMuaG9va3MudXJscy5nZXRJbml0aWFsKHRoaXMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQgPSB0aGlzLmhvb2tzLmdldFNvY2tldCh1cmwsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHV0aWwuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnQ29ubmVjdGluZycsIHsgdHJhbnNwb3J0OiB0aGlzLm5hbWUsIHVybDogdXJsIH0pO1xuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdjb25uZWN0aW5nJyk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNvY2tldCkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09ICdvcGVuJykge1xuICAgICAgICAgICAgdXRpbC5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnNvY2tldCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zb2NrZXQuc2VuZChkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5waW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ29wZW4nICYmIHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0LnBpbmcoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5ob29rcy5iZWZvcmVPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmhvb2tzLmJlZm9yZU9wZW4odGhpcy5zb2NrZXQsIHRoaXMuaG9va3MudXJscy5nZXRQYXRoKHRoaXMua2V5LCB0aGlzLm9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdvcGVuJyk7XG4gICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIHsgdHlwZTogJ1dlYlNvY2tldEVycm9yJywgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLmVycm9yKHRoaXMuYnVpbGRUaW1lbGluZU1lc3NhZ2UoeyBlcnJvcjogZXJyb3IudG9TdHJpbmcoKSB9KSk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgaWYgKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcsIHtcbiAgICAgICAgICAgICAgICBjb2RlOiBjbG9zZUV2ZW50LmNvZGUsXG4gICAgICAgICAgICAgICAgcmVhc29uOiBjbG9zZUV2ZW50LnJlYXNvbixcbiAgICAgICAgICAgICAgICB3YXNDbGVhbjogY2xvc2VFdmVudC53YXNDbGVhblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdjbG9zZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVuYmluZExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNvY2tldCA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25BY3Rpdml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdhY3Rpdml0eScpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMub25PcGVuKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzLm9uQ2xvc2UoY2xvc2VFdmVudCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICBfdGhpcy5vbk1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmFjdGl2aXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQWN0aXZpdHkoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnVuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25jbG9zZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cHBvcnRzUGluZygpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQub25hY3Rpdml0eSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuY2hhbmdlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUsIHBhcmFtcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh0aGlzLmJ1aWxkVGltZWxpbmVNZXNzYWdlKHtcbiAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5lbWl0KHN0YXRlLCBwYXJhbXMpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuYnVpbGRUaW1lbGluZU1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gZXh0ZW5kKHsgY2lkOiB0aGlzLmlkIH0sIG1lc3NhZ2UpO1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zcG9ydENvbm5lY3Rpb247XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydF9jb25uZWN0aW9uID0gKHRyYW5zcG9ydF9jb25uZWN0aW9uX1RyYW5zcG9ydENvbm5lY3Rpb24pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RyYW5zcG9ydHMvdHJhbnNwb3J0LnRzXG5cbnZhciB0cmFuc3BvcnRfVHJhbnNwb3J0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnQoaG9va3MpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgIH1cbiAgICBUcmFuc3BvcnQucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKGVudmlyb25tZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhvb2tzLmlzU3VwcG9ydGVkKGVudmlyb25tZW50KTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydC5wcm90b3R5cGUuY3JlYXRlQ29ubmVjdGlvbiA9IGZ1bmN0aW9uIChuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgdHJhbnNwb3J0X2Nvbm5lY3Rpb24odGhpcy5ob29rcywgbmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNwb3J0O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydHNfdHJhbnNwb3J0ID0gKHRyYW5zcG9ydF9UcmFuc3BvcnQpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL3RyYW5zcG9ydHMvdHJhbnNwb3J0cy50c1xuXG5cblxuXG52YXIgV1NUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c190cmFuc3BvcnQoe1xuICAgIHVybHM6IHdzLFxuICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrczogZmFsc2UsXG4gICAgc3VwcG9ydHNQaW5nOiBmYWxzZSxcbiAgICBpc0luaXRpYWxpemVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHJ1bnRpbWUuZ2V0V2ViU29ja2V0QVBJKCkpO1xuICAgIH0sXG4gICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVudGltZS5nZXRXZWJTb2NrZXRBUEkoKSk7XG4gICAgfSxcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUuY3JlYXRlV2ViU29ja2V0KHVybCk7XG4gICAgfVxufSk7XG52YXIgaHR0cENvbmZpZ3VyYXRpb24gPSB7XG4gICAgdXJsczogaHR0cCxcbiAgICBoYW5kbGVzQWN0aXZpdHlDaGVja3M6IGZhbHNlLFxuICAgIHN1cHBvcnRzUGluZzogdHJ1ZSxcbiAgICBpc0luaXRpYWxpemVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07XG52YXIgc3RyZWFtaW5nQ29uZmlndXJhdGlvbiA9IGV4dGVuZCh7XG4gICAgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLkhUVFBGYWN0b3J5LmNyZWF0ZVN0cmVhbWluZ1NvY2tldCh1cmwpO1xuICAgIH1cbn0sIGh0dHBDb25maWd1cmF0aW9uKTtcbnZhciBwb2xsaW5nQ29uZmlndXJhdGlvbiA9IGV4dGVuZCh7XG4gICAgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLkhUVFBGYWN0b3J5LmNyZWF0ZVBvbGxpbmdTb2NrZXQodXJsKTtcbiAgICB9XG59LCBodHRwQ29uZmlndXJhdGlvbik7XG52YXIgeGhyQ29uZmlndXJhdGlvbiA9IHtcbiAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcnVudGltZS5pc1hIUlN1cHBvcnRlZCgpO1xuICAgIH1cbn07XG52YXIgWEhSU3RyZWFtaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNfdHJhbnNwb3J0KChleHRlbmQoe30sIHN0cmVhbWluZ0NvbmZpZ3VyYXRpb24sIHhockNvbmZpZ3VyYXRpb24pKSk7XG52YXIgWEhSUG9sbGluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzX3RyYW5zcG9ydChleHRlbmQoe30sIHBvbGxpbmdDb25maWd1cmF0aW9uLCB4aHJDb25maWd1cmF0aW9uKSk7XG52YXIgVHJhbnNwb3J0cyA9IHtcbiAgICB3czogV1NUcmFuc3BvcnQsXG4gICAgeGhyX3N0cmVhbWluZzogWEhSU3RyZWFtaW5nVHJhbnNwb3J0LFxuICAgIHhocl9wb2xsaW5nOiBYSFJQb2xsaW5nVHJhbnNwb3J0XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0cyA9IChUcmFuc3BvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL3RyYW5zcG9ydHMvdHJhbnNwb3J0cy50c1xuXG5cblxuXG5cblxudmFyIFNvY2tKU1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzX3RyYW5zcG9ydCh7XG4gICAgZmlsZTogJ3NvY2tqcycsXG4gICAgdXJsczogc29ja2pzLFxuICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrczogdHJ1ZSxcbiAgICBzdXBwb3J0c1Bpbmc6IGZhbHNlLFxuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgaXNJbml0aWFsaXplZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LlNvY2tKUyAhPT0gdW5kZWZpbmVkO1xuICAgIH0sXG4gICAgZ2V0U29ja2V0OiBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgd2luZG93LlNvY2tKUyh1cmwsIG51bGwsIHtcbiAgICAgICAgICAgIGpzX3BhdGg6IERlcGVuZGVuY2llcy5nZXRQYXRoKCdzb2NranMnLCB7XG4gICAgICAgICAgICAgICAgdXNlVExTOiBvcHRpb25zLnVzZVRMU1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpZ25vcmVfbnVsbF9vcmlnaW46IG9wdGlvbnMuaWdub3JlTnVsbE9yaWdpblxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGJlZm9yZU9wZW46IGZ1bmN0aW9uIChzb2NrZXQsIHBhdGgpIHtcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICB9KSk7XG4gICAgfVxufSk7XG52YXIgeGRyQ29uZmlndXJhdGlvbiA9IHtcbiAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKGVudmlyb25tZW50KSB7XG4gICAgICAgIHZhciB5ZXMgPSBydW50aW1lLmlzWERSU3VwcG9ydGVkKGVudmlyb25tZW50LnVzZVRMUyk7XG4gICAgICAgIHJldHVybiB5ZXM7XG4gICAgfVxufTtcbnZhciBYRFJTdHJlYW1pbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c190cmFuc3BvcnQoKGV4dGVuZCh7fSwgc3RyZWFtaW5nQ29uZmlndXJhdGlvbiwgeGRyQ29uZmlndXJhdGlvbikpKTtcbnZhciBYRFJQb2xsaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNfdHJhbnNwb3J0KGV4dGVuZCh7fSwgcG9sbGluZ0NvbmZpZ3VyYXRpb24sIHhkckNvbmZpZ3VyYXRpb24pKTtcbnRyYW5zcG9ydHMueGRyX3N0cmVhbWluZyA9IFhEUlN0cmVhbWluZ1RyYW5zcG9ydDtcbnRyYW5zcG9ydHMueGRyX3BvbGxpbmcgPSBYRFJQb2xsaW5nVHJhbnNwb3J0O1xudHJhbnNwb3J0cy5zb2NranMgPSBTb2NrSlNUcmFuc3BvcnQ7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRzX3RyYW5zcG9ydHMgPSAodHJhbnNwb3J0cyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9uZXRfaW5mby50c1xudmFyIG5ldF9pbmZvX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxudmFyIE5ldEluZm8gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIG5ldF9pbmZvX2V4dGVuZHMoTmV0SW5mbywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBOZXRJbmZvKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgc2VsZiA9IF90aGlzO1xuICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ29ubGluZScpO1xuICAgICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29mZmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5lbWl0KCdvZmZsaW5lJyk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBOZXRJbmZvLnByb3RvdHlwZS5pc09ubGluZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3Iub25MaW5lO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTmV0SW5mbztcbn0oZGlzcGF0Y2hlcikpO1xuXG52YXIgbmV0X2luZm9fTmV0d29yayA9IG5ldyBOZXRJbmZvKCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdHJhbnNwb3J0cy9hc3Npc3RhbnRfdG9fdGhlX3RyYW5zcG9ydF9tYW5hZ2VyLnRzXG5cblxudmFyIGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXJfQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICAgICAgICB0aGlzLm1pblBpbmdEZWxheSA9IG9wdGlvbnMubWluUGluZ0RlbGF5O1xuICAgICAgICB0aGlzLm1heFBpbmdEZWxheSA9IG9wdGlvbnMubWF4UGluZ0RlbGF5O1xuICAgICAgICB0aGlzLnBpbmdEZWxheSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyLnByb3RvdHlwZS5jcmVhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb3B0aW9ucyA9IGV4dGVuZCh7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiB0aGlzLnBpbmdEZWxheVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLnRyYW5zcG9ydC5jcmVhdGVDb25uZWN0aW9uKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpO1xuICAgICAgICB2YXIgb3BlblRpbWVzdGFtcCA9IG51bGw7XG4gICAgICAgIHZhciBvbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnVuYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgICAgIG9wZW5UaW1lc3RhbXAgPSB1dGlsLm5vdygpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25DbG9zZWQgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgY29ubmVjdGlvbi51bmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgPT09IDEwMDIgfHwgY2xvc2VFdmVudC5jb2RlID09PSAxMDAzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlci5yZXBvcnREZWF0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoIWNsb3NlRXZlbnQud2FzQ2xlYW4gJiYgb3BlblRpbWVzdGFtcCkge1xuICAgICAgICAgICAgICAgIHZhciBsaWZlc3BhbiA9IHV0aWwubm93KCkgLSBvcGVuVGltZXN0YW1wO1xuICAgICAgICAgICAgICAgIGlmIChsaWZlc3BhbiA8IDIgKiBfdGhpcy5tYXhQaW5nRGVsYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFuYWdlci5yZXBvcnREZWF0aCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5waW5nRGVsYXkgPSBNYXRoLm1heChsaWZlc3BhbiAvIDIsIF90aGlzLm1pblBpbmdEZWxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25uZWN0aW9uLmJpbmQoJ29wZW4nLCBvbk9wZW4pO1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9O1xuICAgIEFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5pc0FsaXZlKCkgJiYgdGhpcy50cmFuc3BvcnQuaXNTdXBwb3J0ZWQoZW52aXJvbm1lbnQpO1xuICAgIH07XG4gICAgcmV0dXJuIEFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBhc3Npc3RhbnRfdG9fdGhlX3RyYW5zcG9ydF9tYW5hZ2VyID0gKGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXJfQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25uZWN0aW9uL3Byb3RvY29sL3Byb3RvY29sLnRzXG52YXIgUHJvdG9jb2wgPSB7XG4gICAgZGVjb2RlTWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2VFdmVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlRXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB2YXIgcHVzaGVyRXZlbnREYXRhID0gbWVzc2FnZURhdGEuZGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHVzaGVyRXZlbnREYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hlckV2ZW50RGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZURhdGEuZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwdXNoZXJFdmVudCA9IHtcbiAgICAgICAgICAgICAgICBldmVudDogbWVzc2FnZURhdGEuZXZlbnQsXG4gICAgICAgICAgICAgICAgY2hhbm5lbDogbWVzc2FnZURhdGEuY2hhbm5lbCxcbiAgICAgICAgICAgICAgICBkYXRhOiBwdXNoZXJFdmVudERhdGFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAobWVzc2FnZURhdGEudXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIHB1c2hlckV2ZW50LnVzZXJfaWQgPSBtZXNzYWdlRGF0YS51c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHB1c2hlckV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyB7IHR5cGU6ICdNZXNzYWdlUGFyc2VFcnJvcicsIGVycm9yOiBlLCBkYXRhOiBtZXNzYWdlRXZlbnQuZGF0YSB9O1xuICAgICAgICB9XG4gICAgfSxcbiAgICBlbmNvZGVNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV2ZW50KTtcbiAgICB9LFxuICAgIHByb2Nlc3NIYW5kc2hha2U6IGZ1bmN0aW9uIChtZXNzYWdlRXZlbnQpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBQcm90b2NvbC5kZWNvZGVNZXNzYWdlKG1lc3NhZ2VFdmVudCk7XG4gICAgICAgIGlmIChtZXNzYWdlLmV2ZW50ID09PSAncHVzaGVyOmNvbm5lY3Rpb25fZXN0YWJsaXNoZWQnKSB7XG4gICAgICAgICAgICBpZiAoIW1lc3NhZ2UuZGF0YS5hY3Rpdml0eV90aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ05vIGFjdGl2aXR5IHRpbWVvdXQgc3BlY2lmaWVkIGluIGhhbmRzaGFrZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2Nvbm5lY3RlZCcsXG4gICAgICAgICAgICAgICAgaWQ6IG1lc3NhZ2UuZGF0YS5zb2NrZXRfaWQsXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiBtZXNzYWdlLmRhdGEuYWN0aXZpdHlfdGltZW91dCAqIDEwMDBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobWVzc2FnZS5ldmVudCA9PT0gJ3B1c2hlcjplcnJvcicpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmdldENsb3NlQWN0aW9uKG1lc3NhZ2UuZGF0YSksXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRoaXMuZ2V0Q2xvc2VFcnJvcihtZXNzYWdlLmRhdGEpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgJ0ludmFsaWQgaGFuZHNoYWtlJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0Q2xvc2VBY3Rpb246IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MDAwKSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VFdmVudC5jb2RlID49IDEwMDIgJiYgY2xvc2VFdmVudC5jb2RlIDw9IDEwMDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JhY2tvZmYnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlID09PSA0MDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3Rsc19vbmx5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MTAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZnVzZWQnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQyMDApIHtcbiAgICAgICAgICAgIHJldHVybiAnYmFja29mZic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDMwMCkge1xuICAgICAgICAgICAgcmV0dXJuICdyZXRyeSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JlZnVzZWQnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRDbG9zZUVycm9yOiBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICBpZiAoY2xvc2VFdmVudC5jb2RlICE9PSAxMDAwICYmIGNsb3NlRXZlbnQuY29kZSAhPT0gMTAwMSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnUHVzaGVyRXJyb3InLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgY29kZTogY2xvc2VFdmVudC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBjbG9zZUV2ZW50LnJlYXNvbiB8fCBjbG9zZUV2ZW50Lm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcHJvdG9jb2xfcHJvdG9jb2wgPSAoUHJvdG9jb2wpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vY29ubmVjdGlvbi50c1xudmFyIGNvbm5lY3Rpb25fZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG52YXIgY29ubmVjdGlvbl9Db25uZWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBjb25uZWN0aW9uX2V4dGVuZHMoQ29ubmVjdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25uZWN0aW9uKGlkLCB0cmFuc3BvcnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaWQgPSBpZDtcbiAgICAgICAgX3RoaXMudHJhbnNwb3J0ID0gdHJhbnNwb3J0O1xuICAgICAgICBfdGhpcy5hY3Rpdml0eVRpbWVvdXQgPSB0cmFuc3BvcnQuYWN0aXZpdHlUaW1lb3V0O1xuICAgICAgICBfdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKCk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LnNlbmQoZGF0YSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5zZW5kX2V2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsIGNoYW5uZWwpIHtcbiAgICAgICAgdmFyIGV2ZW50ID0geyBldmVudDogbmFtZSwgZGF0YTogZGF0YSB9O1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgZXZlbnQuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdFdmVudCBzZW50JywgZXZlbnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZW5kKHByb3RvY29sX3Byb3RvY29sLmVuY29kZU1lc3NhZ2UoZXZlbnQpKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnRyYW5zcG9ydC5zdXBwb3J0c1BpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucGluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZW5kX2V2ZW50KCdwdXNoZXI6cGluZycsIHt9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0ge1xuICAgICAgICAgICAgbWVzc2FnZTogZnVuY3Rpb24gKG1lc3NhZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBwdXNoZXJFdmVudDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwdXNoZXJFdmVudCA9IHByb3RvY29sX3Byb3RvY29sLmRlY29kZU1lc3NhZ2UobWVzc2FnZUV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnTWVzc2FnZVBhcnNlRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBtZXNzYWdlRXZlbnQuZGF0YVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHB1c2hlckV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdFdmVudCByZWNkJywgcHVzaGVyRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHB1c2hlckV2ZW50LmV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXNoZXI6ZXJyb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUHVzaGVyRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBwdXNoZXJFdmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXNoZXI6cGluZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgncGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncHVzaGVyOnBvbmcnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ3BvbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdtZXNzYWdlJywgcHVzaGVyRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3Rpdml0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2FjdGl2aXR5Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsb3NlZDogZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VFdmVudCAmJiBjbG9zZUV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlQ2xvc2VFdmVudChjbG9zZUV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdjbG9zZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHVuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9iamVjdEFwcGx5KGxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyLCBldmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zcG9ydC51bmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBvYmplY3RBcHBseShsaXN0ZW5lcnMsIGZ1bmN0aW9uIChsaXN0ZW5lciwgZXZlbnQpIHtcbiAgICAgICAgICAgIF90aGlzLnRyYW5zcG9ydC5iaW5kKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xvc2VFdmVudCA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIHZhciBhY3Rpb24gPSBwcm90b2NvbF9wcm90b2NvbC5nZXRDbG9zZUFjdGlvbihjbG9zZUV2ZW50KTtcbiAgICAgICAgdmFyIGVycm9yID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VFcnJvcihjbG9zZUV2ZW50KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdChhY3Rpb24sIHsgYWN0aW9uOiBhY3Rpb24sIGVycm9yOiBlcnJvciB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvbm5lY3Rpb247XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbm5lY3Rpb25fY29ubmVjdGlvbiA9IChjb25uZWN0aW9uX0Nvbm5lY3Rpb24pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vaGFuZHNoYWtlL2luZGV4LnRzXG5cblxuXG52YXIgaGFuZHNoYWtlX0hhbmRzaGFrZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSGFuZHNoYWtlKHRyYW5zcG9ydCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5iaW5kTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIEhhbmRzaGFrZS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgfTtcbiAgICBIYW5kc2hha2UucHJvdG90eXBlLmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMub25NZXNzYWdlID0gZnVuY3Rpb24gKG0pIHtcbiAgICAgICAgICAgIF90aGlzLnVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcHJvdG9jb2xfcHJvdG9jb2wucHJvY2Vzc0hhbmRzaGFrZShtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZmluaXNoKCdlcnJvcicsIHsgZXJyb3I6IGUgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5hY3Rpb24gPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZmluaXNoKCdjb25uZWN0ZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Rpb246IG5ldyBjb25uZWN0aW9uX2Nvbm5lY3Rpb24ocmVzdWx0LmlkLCBfdGhpcy50cmFuc3BvcnQpLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IHJlc3VsdC5hY3Rpdml0eVRpbWVvdXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmZpbmlzaChyZXN1bHQuYWN0aW9uLCB7IGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub25DbG9zZWQgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgX3RoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VBY3Rpb24oY2xvc2VFdmVudCkgfHwgJ2JhY2tvZmYnO1xuICAgICAgICAgICAgdmFyIGVycm9yID0gcHJvdG9jb2xfcHJvdG9jb2wuZ2V0Q2xvc2VFcnJvcihjbG9zZUV2ZW50KTtcbiAgICAgICAgICAgIF90aGlzLmZpbmlzaChhY3Rpb24sIHsgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5iaW5kKCdtZXNzYWdlJywgdGhpcy5vbk1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5iaW5kKCdjbG9zZWQnLCB0aGlzLm9uQ2xvc2VkKTtcbiAgICB9O1xuICAgIEhhbmRzaGFrZS5wcm90b3R5cGUudW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC51bmJpbmQoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LnVuYmluZCgnY2xvc2VkJywgdGhpcy5vbkNsb3NlZCk7XG4gICAgfTtcbiAgICBIYW5kc2hha2UucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uIChhY3Rpb24sIHBhcmFtcykge1xuICAgICAgICB0aGlzLmNhbGxiYWNrKGV4dGVuZCh7IHRyYW5zcG9ydDogdGhpcy50cmFuc3BvcnQsIGFjdGlvbjogYWN0aW9uIH0sIHBhcmFtcykpO1xuICAgIH07XG4gICAgcmV0dXJuIEhhbmRzaGFrZTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb25uZWN0aW9uX2hhbmRzaGFrZSA9IChoYW5kc2hha2VfSGFuZHNoYWtlKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9hdXRoL3B1c2hlcl9hdXRob3JpemVyLnRzXG5cbnZhciBwdXNoZXJfYXV0aG9yaXplcl9QdXNoZXJBdXRob3JpemVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQdXNoZXJBdXRob3JpemVyKGNoYW5uZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgdmFyIGF1dGhUcmFuc3BvcnQgPSBvcHRpb25zLmF1dGhUcmFuc3BvcnQ7XG4gICAgICAgIGlmICh0eXBlb2YgcnVudGltZS5nZXRBdXRob3JpemVycygpW2F1dGhUcmFuc3BvcnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgXCInXCIgKyBhdXRoVHJhbnNwb3J0ICsgXCInIGlzIG5vdCBhIHJlY29nbml6ZWQgYXV0aCB0cmFuc3BvcnRcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR5cGUgPSBhdXRoVHJhbnNwb3J0O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLmF1dGhPcHRpb25zID0gb3B0aW9ucy5hdXRoIHx8IHt9O1xuICAgIH1cbiAgICBQdXNoZXJBdXRob3JpemVyLnByb3RvdHlwZS5jb21wb3NlUXVlcnkgPSBmdW5jdGlvbiAoc29ja2V0SWQpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJ3NvY2tldF9pZD0nICtcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzb2NrZXRJZCkgK1xuICAgICAgICAgICAgJyZjaGFubmVsX25hbWU9JyArXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jaGFubmVsLm5hbWUpO1xuICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuYXV0aE9wdGlvbnMucGFyYW1zKSB7XG4gICAgICAgICAgICBxdWVyeSArPVxuICAgICAgICAgICAgICAgICcmJyArXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChpKSArXG4gICAgICAgICAgICAgICAgICAgICc9JyArXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmF1dGhPcHRpb25zLnBhcmFtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH07XG4gICAgUHVzaGVyQXV0aG9yaXplci5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICBQdXNoZXJBdXRob3JpemVyLmF1dGhvcml6ZXJzID1cbiAgICAgICAgICAgIFB1c2hlckF1dGhvcml6ZXIuYXV0aG9yaXplcnMgfHwgcnVudGltZS5nZXRBdXRob3JpemVycygpO1xuICAgICAgICBQdXNoZXJBdXRob3JpemVyLmF1dGhvcml6ZXJzW3RoaXMudHlwZV0uY2FsbCh0aGlzLCBydW50aW1lLCBzb2NrZXRJZCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFB1c2hlckF1dGhvcml6ZXI7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcHVzaGVyX2F1dGhvcml6ZXIgPSAocHVzaGVyX2F1dGhvcml6ZXJfUHVzaGVyQXV0aG9yaXplcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdGltZWxpbmUvdGltZWxpbmVfc2VuZGVyLnRzXG5cbnZhciB0aW1lbGluZV9zZW5kZXJfVGltZWxpbmVTZW5kZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVsaW5lU2VuZGVyKHRpbWVsaW5lLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSB0aW1lbGluZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB9XG4gICAgVGltZWxpbmVTZW5kZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAodXNlVExTLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy50aW1lbGluZS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVsaW5lLnNlbmQocnVudGltZS5UaW1lbGluZVRyYW5zcG9ydC5nZXRBZ2VudCh0aGlzLCB1c2VUTFMpLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gVGltZWxpbmVTZW5kZXI7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdGltZWxpbmVfc2VuZGVyID0gKHRpbWVsaW5lX3NlbmRlcl9UaW1lbGluZVNlbmRlcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvY2hhbm5lbC50c1xudmFyIGNoYW5uZWxfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG5cbnZhciBjaGFubmVsX0NoYW5uZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIGNoYW5uZWxfZXh0ZW5kcyhDaGFubmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdObyBjYWxsYmFja3Mgb24gJyArIG5hbWUgKyAnIGZvciAnICsgZXZlbnQpO1xuICAgICAgICB9KSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgX3RoaXMucHVzaGVyID0gcHVzaGVyO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgeyBhdXRoOiAnJyB9KTtcbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKGV2ZW50LmluZGV4T2YoJ2NsaWVudC0nKSAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEJhZEV2ZW50TmFtZShcIkV2ZW50ICdcIiArIGV2ZW50ICsgXCInIGRvZXMgbm90IHN0YXJ0IHdpdGggJ2NsaWVudC0nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdWJzY3JpYmVkKSB7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCd0cmlnZ2VyaW5nQ2xpZW50RXZlbnRzJyk7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcIkNsaWVudCBldmVudCB0cmlnZ2VyZWQgYmVmb3JlIGNoYW5uZWwgJ3N1YnNjcmlwdGlvbl9zdWNjZWVkZWQnIGV2ZW50IC4gXCIgKyBzdWZmaXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnB1c2hlci5zZW5kX2V2ZW50KGV2ZW50LCBkYXRhLCB0aGlzLm5hbWUpO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICB2YXIgZGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIGlmIChldmVudE5hbWUgPT09ICdwdXNoZXJfaW50ZXJuYWw6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uU3VjY2VlZGVkRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXJfaW50ZXJuYWw6JykgIT09IDApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50TmFtZSwgZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIGV2ZW50LmRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dGhvcml6ZSh0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZCwgZnVuY3Rpb24gKGVycm9yLCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycm9yLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fZXJyb3InLCBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdBdXRoRXJyb3InLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgICAgICAgICAgIH0sIGVycm9yIGluc3RhbmNlb2YgSFRUUEF1dGhFcnJvciA/IHsgc3RhdHVzOiBlcnJvci5zdGF0dXMgfSA6IHt9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wdXNoZXIuc2VuZF9ldmVudCgncHVzaGVyOnN1YnNjcmliZScsIHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogZGF0YS5hdXRoLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsX2RhdGE6IGRhdGEuY2hhbm5lbF9kYXRhLFxuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBfdGhpcy5uYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1c2hlci5zZW5kX2V2ZW50KCdwdXNoZXI6dW5zdWJzY3JpYmUnLCB7XG4gICAgICAgICAgICBjaGFubmVsOiB0aGlzLm5hbWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5jYW5jZWxTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLnJlaW5zdGF0ZVN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSBmYWxzZTtcbiAgICB9O1xuICAgIHJldHVybiBDaGFubmVsO1xufShkaXNwYXRjaGVyKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjaGFubmVsc19jaGFubmVsID0gKGNoYW5uZWxfQ2hhbm5lbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvcHJpdmF0ZV9jaGFubmVsLnRzXG52YXIgcHJpdmF0ZV9jaGFubmVsX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuXG52YXIgcHJpdmF0ZV9jaGFubmVsX1ByaXZhdGVDaGFubmVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBwcml2YXRlX2NoYW5uZWxfZXh0ZW5kcyhQcml2YXRlQ2hhbm5lbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQcml2YXRlQ2hhbm5lbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBQcml2YXRlQ2hhbm5lbC5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgYXV0aG9yaXplciA9IGZhY3RvcnkuY3JlYXRlQXV0aG9yaXplcih0aGlzLCB0aGlzLnB1c2hlci5jb25maWcpO1xuICAgICAgICByZXR1cm4gYXV0aG9yaXplci5hdXRob3JpemUoc29ja2V0SWQsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBQcml2YXRlQ2hhbm5lbDtcbn0oY2hhbm5lbHNfY2hhbm5lbCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcHJpdmF0ZV9jaGFubmVsID0gKHByaXZhdGVfY2hhbm5lbF9Qcml2YXRlQ2hhbm5lbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvbWVtYmVycy50c1xuXG52YXIgbWVtYmVyc19NZW1iZXJzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZW1iZXJzKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuICAgIE1lbWJlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMubWVtYmVycywgaWQpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBpbmZvOiB0aGlzLm1lbWJlcnNbaWRdXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1lbWJlcnMucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgb2JqZWN0QXBwbHkodGhpcy5tZW1iZXJzLCBmdW5jdGlvbiAobWVtYmVyLCBpZCkge1xuICAgICAgICAgICAgY2FsbGJhY2soX3RoaXMuZ2V0KGlkKSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUuc2V0TXlJRCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB0aGlzLm15SUQgPSBpZDtcbiAgICB9O1xuICAgIE1lbWJlcnMucHJvdG90eXBlLm9uU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbkRhdGEpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gc3Vic2NyaXB0aW9uRGF0YS5wcmVzZW5jZS5oYXNoO1xuICAgICAgICB0aGlzLmNvdW50ID0gc3Vic2NyaXB0aW9uRGF0YS5wcmVzZW5jZS5jb3VudDtcbiAgICAgICAgdGhpcy5tZSA9IHRoaXMuZ2V0KHRoaXMubXlJRCk7XG4gICAgfTtcbiAgICBNZW1iZXJzLnByb3RvdHlwZS5hZGRNZW1iZXIgPSBmdW5jdGlvbiAobWVtYmVyRGF0YSkge1xuICAgICAgICBpZiAodGhpcy5nZXQobWVtYmVyRGF0YS51c2VyX2lkKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWVtYmVyc1ttZW1iZXJEYXRhLnVzZXJfaWRdID0gbWVtYmVyRGF0YS51c2VyX2luZm87XG4gICAgICAgIHJldHVybiB0aGlzLmdldChtZW1iZXJEYXRhLnVzZXJfaWQpO1xuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUucmVtb3ZlTWVtYmVyID0gZnVuY3Rpb24gKG1lbWJlckRhdGEpIHtcbiAgICAgICAgdmFyIG1lbWJlciA9IHRoaXMuZ2V0KG1lbWJlckRhdGEudXNlcl9pZCk7XG4gICAgICAgIGlmIChtZW1iZXIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1lbWJlcnNbbWVtYmVyRGF0YS51c2VyX2lkXTtcbiAgICAgICAgICAgIHRoaXMuY291bnQtLTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVtYmVyO1xuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IHt9O1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5teUlEID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZSA9IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gTWVtYmVycztcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBtZW1iZXJzID0gKG1lbWJlcnNfTWVtYmVycyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY2hhbm5lbHMvcHJlc2VuY2VfY2hhbm5lbC50c1xudmFyIHByZXNlbmNlX2NoYW5uZWxfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG52YXIgcHJlc2VuY2VfY2hhbm5lbF9QcmVzZW5jZUNoYW5uZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHByZXNlbmNlX2NoYW5uZWxfZXh0ZW5kcyhQcmVzZW5jZUNoYW5uZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJlc2VuY2VDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBuYW1lLCBwdXNoZXIpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm1lbWJlcnMgPSBuZXcgbWVtYmVycygpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFByZXNlbmNlQ2hhbm5lbC5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmF1dGhvcml6ZS5jYWxsKHRoaXMsIHNvY2tldElkLCBmdW5jdGlvbiAoZXJyb3IsIGF1dGhEYXRhKSB7XG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgYXV0aERhdGEgPSBhdXRoRGF0YTtcbiAgICAgICAgICAgICAgICBpZiAoYXV0aERhdGEuY2hhbm5lbF9kYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IHVybF9zdG9yZS5idWlsZExvZ1N1ZmZpeCgnYXV0aGVudGljYXRpb25FbmRwb2ludCcpO1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJJbnZhbGlkIGF1dGggcmVzcG9uc2UgZm9yIGNoYW5uZWwgJ1wiICsgX3RoaXMubmFtZSArIFwiJyxcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAoXCJleHBlY3RlZCAnY2hhbm5lbF9kYXRhJyBmaWVsZC4gXCIgKyBzdWZmaXgpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soJ0ludmFsaWQgYXV0aCByZXNwb25zZScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjaGFubmVsRGF0YSA9IEpTT04ucGFyc2UoYXV0aERhdGEuY2hhbm5lbF9kYXRhKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5tZW1iZXJzLnNldE15SUQoY2hhbm5lbERhdGEudXNlcl9pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYXV0aERhdGEpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFByZXNlbmNlQ2hhbm5lbC5wcm90b3R5cGUuaGFuZGxlRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVJbnRlcm5hbEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YSA9IHt9O1xuICAgICAgICAgICAgaWYgKGV2ZW50LnVzZXJfaWQpIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS51c2VyX2lkID0gZXZlbnQudXNlcl9pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdChldmVudE5hbWUsIGRhdGEsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVJbnRlcm5hbEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgY2FzZSAncHVzaGVyX2ludGVybmFsOnN1YnNjcmlwdGlvbl9zdWNjZWVkZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlU3Vic2NyaXB0aW9uU3VjY2VlZGVkRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncHVzaGVyX2ludGVybmFsOm1lbWJlcl9hZGRlZCc6XG4gICAgICAgICAgICAgICAgdmFyIGFkZGVkTWVtYmVyID0gdGhpcy5tZW1iZXJzLmFkZE1lbWJlcihkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjptZW1iZXJfYWRkZWQnLCBhZGRlZE1lbWJlcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwdXNoZXJfaW50ZXJuYWw6bWVtYmVyX3JlbW92ZWQnOlxuICAgICAgICAgICAgICAgIHZhciByZW1vdmVkTWVtYmVyID0gdGhpcy5tZW1iZXJzLnJlbW92ZU1lbWJlcihkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZE1lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIHJlbW92ZWRNZW1iZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2hlci51bnN1YnNjcmliZSh0aGlzLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZW1iZXJzLm9uU3Vic2NyaXB0aW9uKGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdwdXNoZXI6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcsIHRoaXMubWVtYmVycyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFByZXNlbmNlQ2hhbm5lbC5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzLnJlc2V0KCk7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGlzY29ubmVjdC5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIFByZXNlbmNlQ2hhbm5lbDtcbn0ocHJpdmF0ZV9jaGFubmVsKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBwcmVzZW5jZV9jaGFubmVsID0gKHByZXNlbmNlX2NoYW5uZWxfUHJlc2VuY2VDaGFubmVsKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL3V0ZjgvbGliL3V0ZjguanNcbnZhciB1dGY4ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9Ac3RhYmxlbGliL2Jhc2U2NC9saWIvYmFzZTY0LmpzXG52YXIgYmFzZTY0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9lbmNyeXB0ZWRfY2hhbm5lbC50c1xudmFyIGVuY3J5cHRlZF9jaGFubmVsX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuXG5cblxuXG52YXIgZW5jcnlwdGVkX2NoYW5uZWxfRW5jcnlwdGVkQ2hhbm5lbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgZW5jcnlwdGVkX2NoYW5uZWxfZXh0ZW5kcyhFbmNyeXB0ZWRDaGFubmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEVuY3J5cHRlZENoYW5uZWwobmFtZSwgcHVzaGVyLCBuYWNsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUsIHB1c2hlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgX3RoaXMubmFjbCA9IG5hY2w7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgRW5jcnlwdGVkQ2hhbm5lbC5wcm90b3R5cGUuYXV0aG9yaXplID0gZnVuY3Rpb24gKHNvY2tldElkLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmF1dGhvcml6ZS5jYWxsKHRoaXMsIHNvY2tldElkLCBmdW5jdGlvbiAoZXJyb3IsIGF1dGhEYXRhKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYXV0aERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBzaGFyZWRTZWNyZXQgPSBhdXRoRGF0YVsnc2hhcmVkX3NlY3JldCddO1xuICAgICAgICAgICAgaWYgKCFzaGFyZWRTZWNyZXQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJObyBzaGFyZWRfc2VjcmV0IGtleSBpbiBhdXRoIHBheWxvYWQgZm9yIGVuY3J5cHRlZCBjaGFubmVsOiBcIiArIF90aGlzLm5hbWUpLCBudWxsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5rZXkgPSBPYmplY3QoYmFzZTY0W1wiZGVjb2RlXCJdKShzaGFyZWRTZWNyZXQpO1xuICAgICAgICAgICAgZGVsZXRlIGF1dGhEYXRhWydzaGFyZWRfc2VjcmV0J107XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBhdXRoRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRW5jcnlwdGVkQ2hhbm5lbC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRGZWF0dXJlKCdDbGllbnQgZXZlbnRzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBmb3IgZW5jcnlwdGVkIGNoYW5uZWxzJyk7XG4gICAgfTtcbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgaWYgKGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXJfaW50ZXJuYWw6JykgPT09IDAgfHxcbiAgICAgICAgICAgIGV2ZW50TmFtZS5pbmRleE9mKCdwdXNoZXI6JykgPT09IDApIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuaGFuZGxlRXZlbnQuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVFbmNyeXB0ZWRFdmVudChldmVudE5hbWUsIGRhdGEpO1xuICAgIH07XG4gICAgRW5jcnlwdGVkQ2hhbm5lbC5wcm90b3R5cGUuaGFuZGxlRW5jcnlwdGVkRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCF0aGlzLmtleSkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdSZWNlaXZlZCBlbmNyeXB0ZWQgZXZlbnQgYmVmb3JlIGtleSBoYXMgYmVlbiByZXRyaWV2ZWQgZnJvbSB0aGUgYXV0aEVuZHBvaW50Jyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFkYXRhLmNpcGhlcnRleHQgfHwgIWRhdGEubm9uY2UpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcignVW5leHBlY3RlZCBmb3JtYXQgZm9yIGVuY3J5cHRlZCBldmVudCwgZXhwZWN0ZWQgb2JqZWN0IHdpdGggYGNpcGhlcnRleHRgIGFuZCBgbm9uY2VgIGZpZWxkcywgZ290OiAnICtcbiAgICAgICAgICAgICAgICBkYXRhKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2lwaGVyVGV4dCA9IE9iamVjdChiYXNlNjRbXCJkZWNvZGVcIl0pKGRhdGEuY2lwaGVydGV4dCk7XG4gICAgICAgIGlmIChjaXBoZXJUZXh0Lmxlbmd0aCA8IHRoaXMubmFjbC5zZWNyZXRib3gub3ZlcmhlYWRMZW5ndGgpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkV4cGVjdGVkIGVuY3J5cHRlZCBldmVudCBjaXBoZXJ0ZXh0IGxlbmd0aCB0byBiZSBcIiArIHRoaXMubmFjbC5zZWNyZXRib3gub3ZlcmhlYWRMZW5ndGggKyBcIiwgZ290OiBcIiArIGNpcGhlclRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbm9uY2UgPSBPYmplY3QoYmFzZTY0W1wiZGVjb2RlXCJdKShkYXRhLm5vbmNlKTtcbiAgICAgICAgaWYgKG5vbmNlLmxlbmd0aCA8IHRoaXMubmFjbC5zZWNyZXRib3gubm9uY2VMZW5ndGgpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkV4cGVjdGVkIGVuY3J5cHRlZCBldmVudCBub25jZSBsZW5ndGggdG8gYmUgXCIgKyB0aGlzLm5hY2wuc2VjcmV0Ym94Lm5vbmNlTGVuZ3RoICsgXCIsIGdvdDogXCIgKyBub25jZS5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBieXRlcyA9IHRoaXMubmFjbC5zZWNyZXRib3gub3BlbihjaXBoZXJUZXh0LCBub25jZSwgdGhpcy5rZXkpO1xuICAgICAgICBpZiAoYnl0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRmFpbGVkIHRvIGRlY3J5cHQgYW4gZXZlbnQsIHByb2JhYmx5IGJlY2F1c2UgaXQgd2FzIGVuY3J5cHRlZCB3aXRoIGEgZGlmZmVyZW50IGtleS4gRmV0Y2hpbmcgYSBuZXcga2V5IGZyb20gdGhlIGF1dGhFbmRwb2ludC4uLicpO1xuICAgICAgICAgICAgdGhpcy5hdXRob3JpemUodGhpcy5wdXNoZXIuY29ubmVjdGlvbi5zb2NrZXRfaWQsIGZ1bmN0aW9uIChlcnJvciwgYXV0aERhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiRmFpbGVkIHRvIG1ha2UgYSByZXF1ZXN0IHRvIHRoZSBhdXRoRW5kcG9pbnQ6IFwiICsgYXV0aERhdGEgKyBcIi4gVW5hYmxlIHRvIGZldGNoIG5ldyBrZXksIHNvIGRyb3BwaW5nIGVuY3J5cHRlZCBldmVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBieXRlcyA9IF90aGlzLm5hY2wuc2VjcmV0Ym94Lm9wZW4oY2lwaGVyVGV4dCwgbm9uY2UsIF90aGlzLmtleSk7XG4gICAgICAgICAgICAgICAgaWYgKGJ5dGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkZhaWxlZCB0byBkZWNyeXB0IGV2ZW50IHdpdGggbmV3IGtleS4gRHJvcHBpbmcgZW5jcnlwdGVkIGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoZXZlbnQsIF90aGlzLmdldERhdGFUb0VtaXQoYnl0ZXMpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXQoZXZlbnQsIHRoaXMuZ2V0RGF0YVRvRW1pdChieXRlcykpO1xuICAgIH07XG4gICAgRW5jcnlwdGVkQ2hhbm5lbC5wcm90b3R5cGUuZ2V0RGF0YVRvRW1pdCA9IGZ1bmN0aW9uIChieXRlcykge1xuICAgICAgICB2YXIgcmF3ID0gT2JqZWN0KHV0ZjhbXCJkZWNvZGVcIl0pKGJ5dGVzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHJhdyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICByZXR1cm4gcmF3O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRW5jcnlwdGVkQ2hhbm5lbDtcbn0ocHJpdmF0ZV9jaGFubmVsKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBlbmNyeXB0ZWRfY2hhbm5lbCA9IChlbmNyeXB0ZWRfY2hhbm5lbF9FbmNyeXB0ZWRDaGFubmVsKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25uZWN0aW9uL2Nvbm5lY3Rpb25fbWFuYWdlci50c1xudmFyIGNvbm5lY3Rpb25fbWFuYWdlcl9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxuXG5cblxudmFyIGNvbm5lY3Rpb25fbWFuYWdlcl9Db25uZWN0aW9uTWFuYWdlciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgY29ubmVjdGlvbl9tYW5hZ2VyX2V4dGVuZHMoQ29ubmVjdGlvbk1hbmFnZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29ubmVjdGlvbk1hbmFnZXIoa2V5LCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0gJ2luaXRpYWxpemVkJztcbiAgICAgICAgX3RoaXMuY29ubmVjdGlvbiA9IG51bGw7XG4gICAgICAgIF90aGlzLmtleSA9IGtleTtcbiAgICAgICAgX3RoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIF90aGlzLnRpbWVsaW5lID0gX3RoaXMub3B0aW9ucy50aW1lbGluZTtcbiAgICAgICAgX3RoaXMudXNpbmdUTFMgPSBfdGhpcy5vcHRpb25zLnVzZVRMUztcbiAgICAgICAgX3RoaXMuZXJyb3JDYWxsYmFja3MgPSBfdGhpcy5idWlsZEVycm9yQ2FsbGJhY2tzKCk7XG4gICAgICAgIF90aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MgPSBfdGhpcy5idWlsZENvbm5lY3Rpb25DYWxsYmFja3MoX3RoaXMuZXJyb3JDYWxsYmFja3MpO1xuICAgICAgICBfdGhpcy5oYW5kc2hha2VDYWxsYmFja3MgPSBfdGhpcy5idWlsZEhhbmRzaGFrZUNhbGxiYWNrcyhfdGhpcy5lcnJvckNhbGxiYWNrcyk7XG4gICAgICAgIHZhciBOZXR3b3JrID0gcnVudGltZS5nZXROZXR3b3JrKCk7XG4gICAgICAgIE5ldHdvcmsuYmluZCgnb25saW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuaW5mbyh7IG5ldGluZm86ICdvbmxpbmUnIH0pO1xuICAgICAgICAgICAgaWYgKF90aGlzLnN0YXRlID09PSAnY29ubmVjdGluZycgfHwgX3RoaXMuc3RhdGUgPT09ICd1bmF2YWlsYWJsZScpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXRyeUluKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgTmV0d29yay5iaW5kKCdvZmZsaW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuaW5mbyh7IG5ldGluZm86ICdvZmZsaW5lJyB9KTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VuZEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLnVwZGF0ZVN0cmF0ZWd5KCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24gfHwgdGhpcy5ydW5uZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnZmFpbGVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnY29ubmVjdGluZycpO1xuICAgICAgICB0aGlzLnN0YXJ0Q29ubmVjdGluZygpO1xuICAgICAgICB0aGlzLnNldFVuYXZhaWxhYmxlVGltZXIoKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2VuZF9ldmVudCA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhLCBjaGFubmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZF9ldmVudChuYW1lLCBkYXRhLCBjaGFubmVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdEludGVybmFsbHkoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSgnZGlzY29ubmVjdGVkJyk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuaXNVc2luZ1RMUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNpbmdUTFM7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc3RhcnRDb25uZWN0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucnVubmVyID0gX3RoaXMuc3RyYXRlZ3kuY29ubmVjdCgwLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZHNoYWtlLmFjdGlvbiA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdIYW5kc2hha2VFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogaGFuZHNoYWtlLmVycm9yXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50aW1lbGluZS5lcnJvcih7IGhhbmRzaGFrZUVycm9yOiBoYW5kc2hha2UuZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hYm9ydENvbm5lY3RpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZHNoYWtlQ2FsbGJhY2tzW2hhbmRzaGFrZS5hY3Rpb25dKGhhbmRzaGFrZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHRoaXMuc3RyYXRlZ3kuY29ubmVjdCgwLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYWJvcnRDb25uZWN0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5ydW5uZXIpIHtcbiAgICAgICAgICAgIHRoaXMucnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5kaXNjb25uZWN0SW50ZXJuYWxseSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hYm9ydENvbm5lY3RpbmcoKTtcbiAgICAgICAgdGhpcy5jbGVhclJldHJ5VGltZXIoKTtcbiAgICAgICAgdGhpcy5jbGVhclVuYXZhaWxhYmxlVGltZXIoKTtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgdmFyIGNvbm5lY3Rpb24gPSB0aGlzLmFiYW5kb25Db25uZWN0aW9uKCk7XG4gICAgICAgICAgICBjb25uZWN0aW9uLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTdHJhdGVneSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHRoaXMub3B0aW9ucy5nZXRTdHJhdGVneSh7XG4gICAgICAgICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgICAgICAgdGltZWxpbmU6IHRoaXMudGltZWxpbmUsXG4gICAgICAgICAgICB1c2VUTFM6IHRoaXMudXNpbmdUTFNcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUucmV0cnlJbiA9IGZ1bmN0aW9uIChkZWxheSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oeyBhY3Rpb246ICdyZXRyeScsIGRlbGF5OiBkZWxheSB9KTtcbiAgICAgICAgaWYgKGRlbGF5ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjb25uZWN0aW5nX2luJywgTWF0aC5yb3VuZChkZWxheSAvIDEwMDApKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJldHJ5VGltZXIgPSBuZXcgT25lT2ZmVGltZXIoZGVsYXkgfHwgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZGlzY29ubmVjdEludGVybmFsbHkoKTtcbiAgICAgICAgICAgIF90aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuY2xlYXJSZXRyeVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZXRyeVRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLnJldHJ5VGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgdGhpcy5yZXRyeVRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNldFVuYXZhaWxhYmxlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudW5hdmFpbGFibGVUaW1lciA9IG5ldyBPbmVPZmZUaW1lcih0aGlzLm9wdGlvbnMudW5hdmFpbGFibGVUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0ZSgndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuY2xlYXJVbmF2YWlsYWJsZVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51bmF2YWlsYWJsZVRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLnVuYXZhaWxhYmxlVGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2VuZEFjdGl2aXR5Q2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RvcEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLnBpbmcoKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKHRoaXMub3B0aW9ucy5wb25nVGltZW91dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudGltZWxpbmUuZXJyb3IoeyBwb25nX3RpbWVkX291dDogX3RoaXMub3B0aW9ucy5wb25nVGltZW91dCB9KTtcbiAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnJlc2V0QWN0aXZpdHlDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uICYmICF0aGlzLmNvbm5lY3Rpb24uaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lciA9IG5ldyBPbmVPZmZUaW1lcih0aGlzLmFjdGl2aXR5VGltZW91dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNlbmRBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnN0b3BBY3Rpdml0eUNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hY3Rpdml0eVRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5VGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYnVpbGRDb25uZWN0aW9uQ2FsbGJhY2tzID0gZnVuY3Rpb24gKGVycm9yQ2FsbGJhY2tzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBleHRlbmQoe30sIGVycm9yQ2FsbGJhY2tzLCB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ21lc3NhZ2UnLCBtZXNzYWdlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VuZF9ldmVudCgncHVzaGVyOnBvbmcnLCB7fSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZpdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWJhbmRvbkNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc2hvdWxkUmV0cnkoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXRyeUluKDEwMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYnVpbGRIYW5kc2hha2VDYWxsYmFja3MgPSBmdW5jdGlvbiAoZXJyb3JDYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgZXJyb3JDYWxsYmFja3MsIHtcbiAgICAgICAgICAgIGNvbm5lY3RlZDogZnVuY3Rpb24gKGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2aXR5VGltZW91dCA9IE1hdGgubWluKF90aGlzLm9wdGlvbnMuYWN0aXZpdHlUaW1lb3V0LCBoYW5kc2hha2UuYWN0aXZpdHlUaW1lb3V0LCBoYW5kc2hha2UuY29ubmVjdGlvbi5hY3Rpdml0eVRpbWVvdXQgfHwgSW5maW5pdHkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmNsZWFyVW5hdmFpbGFibGVUaW1lcigpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldENvbm5lY3Rpb24oaGFuZHNoYWtlLmNvbm5lY3Rpb24pO1xuICAgICAgICAgICAgICAgIF90aGlzLnNvY2tldF9pZCA9IF90aGlzLmNvbm5lY3Rpb24uaWQ7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlU3RhdGUoJ2Nvbm5lY3RlZCcsIHsgc29ja2V0X2lkOiBfdGhpcy5zb2NrZXRfaWQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmJ1aWxkRXJyb3JDYWxsYmFja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB3aXRoRXJyb3JFbWl0dGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCB7IHR5cGU6ICdXZWJTb2NrZXRFcnJvcicsIGVycm9yOiByZXN1bHQuZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGxzX29ubHk6IHdpdGhFcnJvckVtaXR0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnVzaW5nVExTID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTdHJhdGVneSgpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHJlZnVzZWQ6IHdpdGhFcnJvckVtaXR0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYmFja29mZjogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigxMDAwKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmV0cnk6IHdpdGhFcnJvckVtaXR0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNldENvbm5lY3Rpb24gPSBmdW5jdGlvbiAoY29ubmVjdGlvbikge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBjb25uZWN0aW9uO1xuICAgICAgICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKGV2ZW50LCB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3NbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmFiYW5kb25Db25uZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgZm9yICh2YXIgZXZlbnQgaW4gdGhpcy5jb25uZWN0aW9uQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24udW5iaW5kKGV2ZW50LCB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3NbZXZlbnRdKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuY29ubmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNvbm5lY3Rpb247XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAobmV3U3RhdGUsIGRhdGEpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIGlmIChwcmV2aW91c1N0YXRlICE9PSBuZXdTdGF0ZSkge1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlRGVzY3JpcHRpb24gPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZURlc2NyaXB0aW9uID09PSAnY29ubmVjdGVkJykge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlRGVzY3JpcHRpb24gKz0gJyB3aXRoIG5ldyBzb2NrZXQgSUQgJyArIGRhdGEuc29ja2V0X2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdTdGF0ZSBjaGFuZ2VkJywgcHJldmlvdXNTdGF0ZSArICcgLT4gJyArIG5ld1N0YXRlRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgc3RhdGU6IG5ld1N0YXRlLCBwYXJhbXM6IGRhdGEgfSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3N0YXRlX2NoYW5nZScsIHsgcHJldmlvdXM6IHByZXZpb3VzU3RhdGUsIGN1cnJlbnQ6IG5ld1N0YXRlIH0pO1xuICAgICAgICAgICAgdGhpcy5lbWl0KG5ld1N0YXRlLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNob3VsZFJldHJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gJ2Nvbm5lY3RpbmcnIHx8IHRoaXMuc3RhdGUgPT09ICdjb25uZWN0ZWQnO1xuICAgIH07XG4gICAgcmV0dXJuIENvbm5lY3Rpb25NYW5hZ2VyO1xufShkaXNwYXRjaGVyKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb25uZWN0aW9uX21hbmFnZXIgPSAoY29ubmVjdGlvbl9tYW5hZ2VyX0Nvbm5lY3Rpb25NYW5hZ2VyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9jaGFubmVscy50c1xuXG5cblxuXG52YXIgY2hhbm5lbHNfQ2hhbm5lbHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENoYW5uZWxzKCkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gICAgfVxuICAgIENoYW5uZWxzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tuYW1lXSA9IGNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICB9O1xuICAgIENoYW5uZWxzLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXModGhpcy5jaGFubmVscyk7XG4gICAgfTtcbiAgICBDaGFubmVscy5wcm90b3R5cGUuZmluZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH07XG4gICAgQ2hhbm5lbHMucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgICAgIHJldHVybiBjaGFubmVsO1xuICAgIH07XG4gICAgQ2hhbm5lbHMucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9iamVjdEFwcGx5KHRoaXMuY2hhbm5lbHMsIGZ1bmN0aW9uIChjaGFubmVsKSB7XG4gICAgICAgICAgICBjaGFubmVsLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hhbm5lbHM7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY2hhbm5lbHMgPSAoY2hhbm5lbHNfQ2hhbm5lbHMpO1xuZnVuY3Rpb24gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLWVuY3J5cHRlZC0nKSA9PT0gMCkge1xuICAgICAgICBpZiAocHVzaGVyLmNvbmZpZy5uYWNsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVFbmNyeXB0ZWRDaGFubmVsKG5hbWUsIHB1c2hlciwgcHVzaGVyLmNvbmZpZy5uYWNsKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyTXNnID0gJ1RyaWVkIHRvIHN1YnNjcmliZSB0byBhIHByaXZhdGUtZW5jcnlwdGVkLSBjaGFubmVsIGJ1dCBubyBuYWNsIGltcGxlbWVudGF0aW9uIGF2YWlsYWJsZSc7XG4gICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2VuY3J5cHRlZENoYW5uZWxTdXBwb3J0Jyk7XG4gICAgICAgIHRocm93IG5ldyBVbnN1cHBvcnRlZEZlYXR1cmUoZXJyTXNnICsgXCIuIFwiICsgc3VmZml4KTtcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcml2YXRlLScpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZVByaXZhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG5hbWUuaW5kZXhPZigncHJlc2VuY2UtJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlUHJlc2VuY2VDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfVxufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3V0aWxzL2ZhY3RvcnkudHNcblxuXG5cblxuXG5cblxuXG5cblxudmFyIEZhY3RvcnkgPSB7XG4gICAgY3JlYXRlQ2hhbm5lbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjaGFubmVscygpO1xuICAgIH0sXG4gICAgY3JlYXRlQ29ubmVjdGlvbk1hbmFnZXI6IGZ1bmN0aW9uIChrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjb25uZWN0aW9uX21hbmFnZXIoa2V5LCBvcHRpb25zKTtcbiAgICB9LFxuICAgIGNyZWF0ZUNoYW5uZWw6IGZ1bmN0aW9uIChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjaGFubmVsc19jaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfSxcbiAgICBjcmVhdGVQcml2YXRlQ2hhbm5lbDogZnVuY3Rpb24gKG5hbWUsIHB1c2hlcikge1xuICAgICAgICByZXR1cm4gbmV3IHByaXZhdGVfY2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgIH0sXG4gICAgY3JlYXRlUHJlc2VuY2VDaGFubmVsOiBmdW5jdGlvbiAobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgcHJlc2VuY2VfY2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgIH0sXG4gICAgY3JlYXRlRW5jcnlwdGVkQ2hhbm5lbDogZnVuY3Rpb24gKG5hbWUsIHB1c2hlciwgbmFjbCkge1xuICAgICAgICByZXR1cm4gbmV3IGVuY3J5cHRlZF9jaGFubmVsKG5hbWUsIHB1c2hlciwgbmFjbCk7XG4gICAgfSxcbiAgICBjcmVhdGVUaW1lbGluZVNlbmRlcjogZnVuY3Rpb24gKHRpbWVsaW5lLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGltZWxpbmVfc2VuZGVyKHRpbWVsaW5lLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIGNyZWF0ZUF1dGhvcml6ZXI6IGZ1bmN0aW9uIChjaGFubmVsLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmF1dGhvcml6ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmF1dGhvcml6ZXIoY2hhbm5lbCwgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBwdXNoZXJfYXV0aG9yaXplcihjaGFubmVsLCBvcHRpb25zKTtcbiAgICB9LFxuICAgIGNyZWF0ZUhhbmRzaGFrZTogZnVuY3Rpb24gKHRyYW5zcG9ydCwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIG5ldyBjb25uZWN0aW9uX2hhbmRzaGFrZSh0cmFuc3BvcnQsIGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGNyZWF0ZUFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcjogZnVuY3Rpb24gKG1hbmFnZXIsIHRyYW5zcG9ydCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXIobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZmFjdG9yeSA9IChGYWN0b3J5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL3RyYW5zcG9ydF9tYW5hZ2VyLnRzXG5cbnZhciB0cmFuc3BvcnRfbWFuYWdlcl9UcmFuc3BvcnRNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnRNYW5hZ2VyKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5saXZlc0xlZnQgPSB0aGlzLm9wdGlvbnMubGl2ZXMgfHwgSW5maW5pdHk7XG4gICAgfVxuICAgIFRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLmdldEFzc2lzdGFudCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyKHRoaXMsIHRyYW5zcG9ydCwge1xuICAgICAgICAgICAgbWluUGluZ0RlbGF5OiB0aGlzLm9wdGlvbnMubWluUGluZ0RlbGF5LFxuICAgICAgICAgICAgbWF4UGluZ0RlbGF5OiB0aGlzLm9wdGlvbnMubWF4UGluZ0RlbGF5XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUuaXNBbGl2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGl2ZXNMZWZ0ID4gMDtcbiAgICB9O1xuICAgIFRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLnJlcG9ydERlYXRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpdmVzTGVmdCAtPSAxO1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zcG9ydE1hbmFnZXI7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0X21hbmFnZXIgPSAodHJhbnNwb3J0X21hbmFnZXJfVHJhbnNwb3J0TWFuYWdlcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9zZXF1ZW50aWFsX3N0cmF0ZWd5LnRzXG5cblxuXG52YXIgc2VxdWVudGlhbF9zdHJhdGVneV9TZXF1ZW50aWFsU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNlcXVlbnRpYWxTdHJhdGVneShzdHJhdGVnaWVzLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ2llcyA9IHN0cmF0ZWdpZXM7XG4gICAgICAgIHRoaXMubG9vcCA9IEJvb2xlYW4ob3B0aW9ucy5sb29wKTtcbiAgICAgICAgdGhpcy5mYWlsRmFzdCA9IEJvb2xlYW4ob3B0aW9ucy5mYWlsRmFzdCk7XG4gICAgICAgIHRoaXMudGltZW91dCA9IG9wdGlvbnMudGltZW91dDtcbiAgICAgICAgdGhpcy50aW1lb3V0TGltaXQgPSBvcHRpb25zLnRpbWVvdXRMaW1pdDtcbiAgICB9XG4gICAgU2VxdWVudGlhbFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFueSh0aGlzLnN0cmF0ZWdpZXMsIHV0aWwubWV0aG9kKCdpc1N1cHBvcnRlZCcpKTtcbiAgICB9O1xuICAgIFNlcXVlbnRpYWxTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHN0cmF0ZWdpZXMgPSB0aGlzLnN0cmF0ZWdpZXM7XG4gICAgICAgIHZhciBjdXJyZW50ID0gMDtcbiAgICAgICAgdmFyIHRpbWVvdXQgPSB0aGlzLnRpbWVvdXQ7XG4gICAgICAgIHZhciBydW5uZXIgPSBudWxsO1xuICAgICAgICB2YXIgdHJ5TmV4dFN0cmF0ZWd5ID0gZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBoYW5kc2hha2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICUgc3RyYXRlZ2llcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50IDwgc3RyYXRlZ2llcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSB0aW1lb3V0ICogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy50aW1lb3V0TGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gTWF0aC5taW4odGltZW91dCwgX3RoaXMudGltZW91dExpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBydW5uZXIgPSBfdGhpcy50cnlTdHJhdGVneShzdHJhdGVnaWVzW2N1cnJlbnRdLCBtaW5Qcmlvcml0eSwgeyB0aW1lb3V0OiB0aW1lb3V0LCBmYWlsRmFzdDogX3RoaXMuZmFpbEZhc3QgfSwgdHJ5TmV4dFN0cmF0ZWd5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcnVubmVyID0gdGhpcy50cnlTdHJhdGVneShzdHJhdGVnaWVzW2N1cnJlbnRdLCBtaW5Qcmlvcml0eSwgeyB0aW1lb3V0OiB0aW1lb3V0LCBmYWlsRmFzdDogdGhpcy5mYWlsRmFzdCB9LCB0cnlOZXh0U3RyYXRlZ3kpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFNlcXVlbnRpYWxTdHJhdGVneS5wcm90b3R5cGUudHJ5U3RyYXRlZ3kgPSBmdW5jdGlvbiAoc3RyYXRlZ3ksIG1pblByaW9yaXR5LCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgdGltZXIgPSBudWxsO1xuICAgICAgICB2YXIgcnVubmVyID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCA+IDApIHtcbiAgICAgICAgICAgIHRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKG9wdGlvbnMudGltZW91dCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcnVubmVyID0gc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiB0aW1lciAmJiB0aW1lci5pc1J1bm5pbmcoKSAmJiAhb3B0aW9ucy5mYWlsRmFzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aW1lcikge1xuICAgICAgICAgICAgICAgIHRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBoYW5kc2hha2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBTZXF1ZW50aWFsU3RyYXRlZ3k7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2VxdWVudGlhbF9zdHJhdGVneSA9IChzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9iZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5LnRzXG5cblxudmFyIGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneShzdHJhdGVnaWVzKSB7XG4gICAgICAgIHRoaXMuc3RyYXRlZ2llcyA9IHN0cmF0ZWdpZXM7XG4gICAgfVxuICAgIEJlc3RDb25uZWN0ZWRFdmVyU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYW55KHRoaXMuc3RyYXRlZ2llcywgdXRpbC5tZXRob2QoJ2lzU3VwcG9ydGVkJykpO1xuICAgIH07XG4gICAgQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIGNvbm5lY3QodGhpcy5zdHJhdGVnaWVzLCBtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGksIHJ1bm5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgIHJ1bm5lcnNbaV0uZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsbFJ1bm5lcnNGYWlsZWQocnVubmVycykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXBwbHkocnVubmVycywgZnVuY3Rpb24gKHJ1bm5lcikge1xuICAgICAgICAgICAgICAgICAgICBydW5uZXIuZm9yY2VNaW5Qcmlvcml0eShoYW5kc2hha2UudHJhbnNwb3J0LnByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBoYW5kc2hha2UpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5ID0gKGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3lfQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneSk7XG5mdW5jdGlvbiBjb25uZWN0KHN0cmF0ZWdpZXMsIG1pblByaW9yaXR5LCBjYWxsYmFja0J1aWxkZXIpIHtcbiAgICB2YXIgcnVubmVycyA9IG1hcChzdHJhdGVnaWVzLCBmdW5jdGlvbiAoc3RyYXRlZ3ksIGksIF8sIHJzKSB7XG4gICAgICAgIHJldHVybiBzdHJhdGVneS5jb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFja0J1aWxkZXIoaSwgcnMpKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXBwbHkocnVubmVycywgYWJvcnRSdW5uZXIpO1xuICAgICAgICB9LFxuICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgYXBwbHkocnVubmVycywgZnVuY3Rpb24gKHJ1bm5lcikge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gYWxsUnVubmVyc0ZhaWxlZChydW5uZXJzKSB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb25zX2FsbChydW5uZXJzLCBmdW5jdGlvbiAocnVubmVyKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHJ1bm5lci5lcnJvcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhYm9ydFJ1bm5lcihydW5uZXIpIHtcbiAgICBpZiAoIXJ1bm5lci5lcnJvciAmJiAhcnVubmVyLmFib3J0ZWQpIHtcbiAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgIHJ1bm5lci5hYm9ydGVkID0gdHJ1ZTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9jYWNoZWRfc3RyYXRlZ3kudHNcblxuXG5cblxudmFyIGNhY2hlZF9zdHJhdGVneV9DYWNoZWRTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FjaGVkU3RyYXRlZ3koc3RyYXRlZ3ksIHRyYW5zcG9ydHMsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgICAgICB0aGlzLnRyYW5zcG9ydHMgPSB0cmFuc3BvcnRzO1xuICAgICAgICB0aGlzLnR0bCA9IG9wdGlvbnMudHRsIHx8IDE4MDAgKiAxMDAwO1xuICAgICAgICB0aGlzLnVzaW5nVExTID0gb3B0aW9ucy51c2VUTFM7XG4gICAgICAgIHRoaXMudGltZWxpbmUgPSBvcHRpb25zLnRpbWVsaW5lO1xuICAgIH1cbiAgICBDYWNoZWRTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG4gICAgfTtcbiAgICBDYWNoZWRTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHVzaW5nVExTID0gdGhpcy51c2luZ1RMUztcbiAgICAgICAgdmFyIGluZm8gPSBmZXRjaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKTtcbiAgICAgICAgdmFyIHN0cmF0ZWdpZXMgPSBbdGhpcy5zdHJhdGVneV07XG4gICAgICAgIGlmIChpbmZvICYmIGluZm8udGltZXN0YW1wICsgdGhpcy50dGwgPj0gdXRpbC5ub3coKSkge1xuICAgICAgICAgICAgdmFyIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1tpbmZvLnRyYW5zcG9ydF07XG4gICAgICAgICAgICBpZiAodHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQ6IGluZm8udHJhbnNwb3J0LFxuICAgICAgICAgICAgICAgICAgICBsYXRlbmN5OiBpbmZvLmxhdGVuY3lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdHJhdGVnaWVzLnB1c2gobmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3koW3RyYW5zcG9ydF0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dDogaW5mby5sYXRlbmN5ICogMiArIDEwMDAsXG4gICAgICAgICAgICAgICAgICAgIGZhaWxGYXN0OiB0cnVlXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzdGFydFRpbWVzdGFtcCA9IHV0aWwubm93KCk7XG4gICAgICAgIHZhciBydW5uZXIgPSBzdHJhdGVnaWVzXG4gICAgICAgICAgICAucG9wKClcbiAgICAgICAgICAgIC5jb25uZWN0KG1pblByaW9yaXR5LCBmdW5jdGlvbiBjYihlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmbHVzaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RyYXRlZ2llcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZXN0YW1wID0gdXRpbC5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyID0gc3RyYXRlZ2llcy5wb3AoKS5jb25uZWN0KG1pblByaW9yaXR5LCBjYik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RvcmVUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUywgaGFuZHNoYWtlLnRyYW5zcG9ydC5uYW1lLCB1dGlsLm5vdygpIC0gc3RhcnRUaW1lc3RhbXApO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGhhbmRzaGFrZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBDYWNoZWRTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjYWNoZWRfc3RyYXRlZ3kgPSAoY2FjaGVkX3N0cmF0ZWd5X0NhY2hlZFN0cmF0ZWd5KTtcbmZ1bmN0aW9uIGdldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKSB7XG4gICAgcmV0dXJuICdwdXNoZXJUcmFuc3BvcnQnICsgKHVzaW5nVExTID8gJ1RMUycgOiAnTm9uVExTJyk7XG59XG5mdW5jdGlvbiBmZXRjaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lLmdldExvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZENhY2hlID0gc3RvcmFnZVtnZXRUcmFuc3BvcnRDYWNoZUtleSh1c2luZ1RMUyldO1xuICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDYWNoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRDYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGZsdXNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc3RvcmVUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUywgdHJhbnNwb3J0LCBsYXRlbmN5KSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lLmdldExvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKV0gPSBzYWZlSlNPTlN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB1dGlsLm5vdygpLFxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogdHJhbnNwb3J0LFxuICAgICAgICAgICAgICAgIGxhdGVuY3k6IGxhdGVuY3lcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBmbHVzaFRyYW5zcG9ydENhY2hlKHVzaW5nVExTKSB7XG4gICAgdmFyIHN0b3JhZ2UgPSBydW50aW1lLmdldExvY2FsU3RvcmFnZSgpO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmFnZVtnZXRUcmFuc3BvcnRDYWNoZUtleSh1c2luZ1RMUyldO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9kZWxheWVkX3N0cmF0ZWd5LnRzXG5cbnZhciBkZWxheWVkX3N0cmF0ZWd5X0RlbGF5ZWRTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVsYXllZFN0cmF0ZWd5KHN0cmF0ZWd5LCBfYSkge1xuICAgICAgICB2YXIgbnVtYmVyID0gX2EuZGVsYXk7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0geyBkZWxheTogbnVtYmVyIH07XG4gICAgfVxuICAgIERlbGF5ZWRTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG4gICAgfTtcbiAgICBEZWxheWVkU3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdHJhdGVneSA9IHRoaXMuc3RyYXRlZ3k7XG4gICAgICAgIHZhciBydW5uZXI7XG4gICAgICAgIHZhciB0aW1lciA9IG5ldyBPbmVPZmZUaW1lcih0aGlzLm9wdGlvbnMuZGVsYXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJ1bm5lciA9IHN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIG1pblByaW9yaXR5ID0gcDtcbiAgICAgICAgICAgICAgICBpZiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBEZWxheWVkU3RyYXRlZ3k7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVsYXllZF9zdHJhdGVneSA9IChkZWxheWVkX3N0cmF0ZWd5X0RlbGF5ZWRTdHJhdGVneSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvc3RyYXRlZ2llcy9pZl9zdHJhdGVneS50c1xudmFyIElmU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIElmU3RyYXRlZ3kodGVzdCwgdHJ1ZUJyYW5jaCwgZmFsc2VCcmFuY2gpIHtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICAgICAgdGhpcy50cnVlQnJhbmNoID0gdHJ1ZUJyYW5jaDtcbiAgICAgICAgdGhpcy5mYWxzZUJyYW5jaCA9IGZhbHNlQnJhbmNoO1xuICAgIH1cbiAgICBJZlN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGJyYW5jaCA9IHRoaXMudGVzdCgpID8gdGhpcy50cnVlQnJhbmNoIDogdGhpcy5mYWxzZUJyYW5jaDtcbiAgICAgICAgcmV0dXJuIGJyYW5jaC5pc1N1cHBvcnRlZCgpO1xuICAgIH07XG4gICAgSWZTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIGJyYW5jaCA9IHRoaXMudGVzdCgpID8gdGhpcy50cnVlQnJhbmNoIDogdGhpcy5mYWxzZUJyYW5jaDtcbiAgICAgICAgcmV0dXJuIGJyYW5jaC5jb25uZWN0KG1pblByaW9yaXR5LCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gSWZTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBpZl9zdHJhdGVneSA9IChJZlN0cmF0ZWd5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2ZpcnN0X2Nvbm5lY3RlZF9zdHJhdGVneS50c1xudmFyIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3koc3RyYXRlZ3kpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgIH1cbiAgICBGaXJzdENvbm5lY3RlZFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9O1xuICAgIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBydW5uZXIgPSB0aGlzLnN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgaGFuZHNoYWtlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBydW5uZXI7XG4gICAgfTtcbiAgICByZXR1cm4gRmlyc3RDb25uZWN0ZWRTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBmaXJzdF9jb25uZWN0ZWRfc3RyYXRlZ3kgPSAoRmlyc3RDb25uZWN0ZWRTdHJhdGVneSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kZWZhdWx0X3N0cmF0ZWd5LnRzXG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHN0cmF0ZWd5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHN0cmF0ZWd5LmlzU3VwcG9ydGVkKCk7XG4gICAgfTtcbn1cbnZhciBnZXREZWZhdWx0U3RyYXRlZ3kgPSBmdW5jdGlvbiAoY29uZmlnLCBiYXNlT3B0aW9ucywgZGVmaW5lVHJhbnNwb3J0KSB7XG4gICAgdmFyIGRlZmluZWRUcmFuc3BvcnRzID0ge307XG4gICAgZnVuY3Rpb24gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3kobmFtZSwgdHlwZSwgcHJpb3JpdHksIG9wdGlvbnMsIG1hbmFnZXIpIHtcbiAgICAgICAgdmFyIHRyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydChjb25maWcsIG5hbWUsIHR5cGUsIHByaW9yaXR5LCBvcHRpb25zLCBtYW5hZ2VyKTtcbiAgICAgICAgZGVmaW5lZFRyYW5zcG9ydHNbbmFtZV0gPSB0cmFuc3BvcnQ7XG4gICAgICAgIHJldHVybiB0cmFuc3BvcnQ7XG4gICAgfVxuICAgIHZhciB3c19vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZU9wdGlvbnMsIHtcbiAgICAgICAgaG9zdE5vblRMUzogY29uZmlnLndzSG9zdCArICc6JyArIGNvbmZpZy53c1BvcnQsXG4gICAgICAgIGhvc3RUTFM6IGNvbmZpZy53c0hvc3QgKyAnOicgKyBjb25maWcud3NzUG9ydCxcbiAgICAgICAgaHR0cFBhdGg6IGNvbmZpZy53c1BhdGhcbiAgICB9KTtcbiAgICB2YXIgd3NzX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB3c19vcHRpb25zLCB7XG4gICAgICAgIHVzZVRMUzogdHJ1ZVxuICAgIH0pO1xuICAgIHZhciBzb2NranNfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VPcHRpb25zLCB7XG4gICAgICAgIGhvc3ROb25UTFM6IGNvbmZpZy5odHRwSG9zdCArICc6JyArIGNvbmZpZy5odHRwUG9ydCxcbiAgICAgICAgaG9zdFRMUzogY29uZmlnLmh0dHBIb3N0ICsgJzonICsgY29uZmlnLmh0dHBzUG9ydCxcbiAgICAgICAgaHR0cFBhdGg6IGNvbmZpZy5odHRwUGF0aFxuICAgIH0pO1xuICAgIHZhciB0aW1lb3V0cyA9IHtcbiAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgdGltZW91dDogMTUwMDAsXG4gICAgICAgIHRpbWVvdXRMaW1pdDogNjAwMDBcbiAgICB9O1xuICAgIHZhciB3c19tYW5hZ2VyID0gbmV3IHRyYW5zcG9ydF9tYW5hZ2VyKHtcbiAgICAgICAgbGl2ZXM6IDIsXG4gICAgICAgIG1pblBpbmdEZWxheTogMTAwMDAsXG4gICAgICAgIG1heFBpbmdEZWxheTogY29uZmlnLmFjdGl2aXR5VGltZW91dFxuICAgIH0pO1xuICAgIHZhciBzdHJlYW1pbmdfbWFuYWdlciA9IG5ldyB0cmFuc3BvcnRfbWFuYWdlcih7XG4gICAgICAgIGxpdmVzOiAyLFxuICAgICAgICBtaW5QaW5nRGVsYXk6IDEwMDAwLFxuICAgICAgICBtYXhQaW5nRGVsYXk6IGNvbmZpZy5hY3Rpdml0eVRpbWVvdXRcbiAgICB9KTtcbiAgICB2YXIgd3NfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3dzJywgJ3dzJywgMywgd3Nfb3B0aW9ucywgd3NfbWFuYWdlcik7XG4gICAgdmFyIHdzc190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgnd3NzJywgJ3dzJywgMywgd3NzX29wdGlvbnMsIHdzX21hbmFnZXIpO1xuICAgIHZhciBzb2NranNfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3NvY2tqcycsICdzb2NranMnLCAxLCBzb2NranNfb3B0aW9ucyk7XG4gICAgdmFyIHhocl9zdHJlYW1pbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hocl9zdHJlYW1pbmcnLCAneGhyX3N0cmVhbWluZycsIDEsIHNvY2tqc19vcHRpb25zLCBzdHJlYW1pbmdfbWFuYWdlcik7XG4gICAgdmFyIHhkcl9zdHJlYW1pbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hkcl9zdHJlYW1pbmcnLCAneGRyX3N0cmVhbWluZycsIDEsIHNvY2tqc19vcHRpb25zLCBzdHJlYW1pbmdfbWFuYWdlcik7XG4gICAgdmFyIHhocl9wb2xsaW5nX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCd4aHJfcG9sbGluZycsICd4aHJfcG9sbGluZycsIDEsIHNvY2tqc19vcHRpb25zKTtcbiAgICB2YXIgeGRyX3BvbGxpbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hkcl9wb2xsaW5nJywgJ3hkcl9wb2xsaW5nJywgMSwgc29ja2pzX29wdGlvbnMpO1xuICAgIHZhciB3c19sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3koW3dzX3RyYW5zcG9ydF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgd3NzX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbd3NzX3RyYW5zcG9ydF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgc29ja2pzX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbc29ja2pzX3RyYW5zcG9ydF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgc3RyZWFtaW5nX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbXG4gICAgICAgIG5ldyBpZl9zdHJhdGVneSh0ZXN0U3VwcG9ydHNTdHJhdGVneSh4aHJfc3RyZWFtaW5nX3RyYW5zcG9ydCksIHhocl9zdHJlYW1pbmdfdHJhbnNwb3J0LCB4ZHJfc3RyZWFtaW5nX3RyYW5zcG9ydClcbiAgICBdLCB0aW1lb3V0cyk7XG4gICAgdmFyIHBvbGxpbmdfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5KFtcbiAgICAgICAgbmV3IGlmX3N0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHhocl9wb2xsaW5nX3RyYW5zcG9ydCksIHhocl9wb2xsaW5nX3RyYW5zcG9ydCwgeGRyX3BvbGxpbmdfdHJhbnNwb3J0KVxuICAgIF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgaHR0cF9sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3koW1xuICAgICAgICBuZXcgaWZfc3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3koc3RyZWFtaW5nX2xvb3ApLCBuZXcgYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneShbXG4gICAgICAgICAgICBzdHJlYW1pbmdfbG9vcCxcbiAgICAgICAgICAgIG5ldyBkZWxheWVkX3N0cmF0ZWd5KHBvbGxpbmdfbG9vcCwgeyBkZWxheTogNDAwMCB9KVxuICAgICAgICBdKSwgcG9sbGluZ19sb29wKVxuICAgIF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgaHR0cF9mYWxsYmFja19sb29wID0gbmV3IGlmX3N0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KGh0dHBfbG9vcCksIGh0dHBfbG9vcCwgc29ja2pzX2xvb3ApO1xuICAgIHZhciB3c1N0cmF0ZWd5O1xuICAgIGlmIChiYXNlT3B0aW9ucy51c2VUTFMpIHtcbiAgICAgICAgd3NTdHJhdGVneSA9IG5ldyBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5KFtcbiAgICAgICAgICAgIHdzX2xvb3AsXG4gICAgICAgICAgICBuZXcgZGVsYXllZF9zdHJhdGVneShodHRwX2ZhbGxiYWNrX2xvb3AsIHsgZGVsYXk6IDIwMDAgfSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3c1N0cmF0ZWd5ID0gbmV3IGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3koW1xuICAgICAgICAgICAgd3NfbG9vcCxcbiAgICAgICAgICAgIG5ldyBkZWxheWVkX3N0cmF0ZWd5KHdzc19sb29wLCB7IGRlbGF5OiAyMDAwIH0pLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3koaHR0cF9mYWxsYmFja19sb29wLCB7IGRlbGF5OiA1MDAwIH0pXG4gICAgICAgIF0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IGNhY2hlZF9zdHJhdGVneShuZXcgZmlyc3RfY29ubmVjdGVkX3N0cmF0ZWd5KG5ldyBpZl9zdHJhdGVneSh0ZXN0U3VwcG9ydHNTdHJhdGVneSh3c190cmFuc3BvcnQpLCB3c1N0cmF0ZWd5LCBodHRwX2ZhbGxiYWNrX2xvb3ApKSwgZGVmaW5lZFRyYW5zcG9ydHMsIHtcbiAgICAgICAgdHRsOiAxODAwMDAwLFxuICAgICAgICB0aW1lbGluZTogYmFzZU9wdGlvbnMudGltZWxpbmUsXG4gICAgICAgIHVzZVRMUzogYmFzZU9wdGlvbnMudXNlVExTXG4gICAgfSk7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVmYXVsdF9zdHJhdGVneSA9IChnZXREZWZhdWx0U3RyYXRlZ3kpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvdHJhbnNwb3J0cy90cmFuc3BvcnRfY29ubmVjdGlvbl9pbml0aWFsaXplci50c1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRfY29ubmVjdGlvbl9pbml0aWFsaXplciA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNlbGYudGltZWxpbmUuaW5mbyhzZWxmLmJ1aWxkVGltZWxpbmVNZXNzYWdlKHtcbiAgICAgICAgdHJhbnNwb3J0OiBzZWxmLm5hbWUgKyAoc2VsZi5vcHRpb25zLnVzZVRMUyA/ICdzJyA6ICcnKVxuICAgIH0pKTtcbiAgICBpZiAoc2VsZi5ob29rcy5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgICAgc2VsZi5jaGFuZ2VTdGF0ZSgnaW5pdGlhbGl6ZWQnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZi5ob29rcy5maWxlKSB7XG4gICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoJ2luaXRpYWxpemluZycpO1xuICAgICAgICBEZXBlbmRlbmNpZXMubG9hZChzZWxmLmhvb2tzLmZpbGUsIHsgdXNlVExTOiBzZWxmLm9wdGlvbnMudXNlVExTIH0sIGZ1bmN0aW9uIChlcnJvciwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChzZWxmLmhvb2tzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlU3RhdGUoJ2luaXRpYWxpemVkJyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgIH1cbn0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvaHR0cC9odHRwX3hkb21haW5fcmVxdWVzdC50c1xuXG52YXIgaHR0cF94ZG9tYWluX3JlcXVlc3RfaG9va3MgPSB7XG4gICAgZ2V0UmVxdWVzdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICB2YXIgeGRyID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgICB4ZHIub250aW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2Vycm9yJywgbmV3IFJlcXVlc3RUaW1lZE91dCgpKTtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICB4ZHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnZXJyb3InLCBlKTtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICB4ZHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4ZHIucmVzcG9uc2VUZXh0ICYmIHhkci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKDIwMCwgeGRyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhkci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGRyLnJlc3BvbnNlVGV4dCAmJiB4ZHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzb2NrZXQub25DaHVuaygyMDAsIHhkci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2ZpbmlzaGVkJywgMjAwKTtcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geGRyO1xuICAgIH0sXG4gICAgYWJvcnRSZXF1ZXN0OiBmdW5jdGlvbiAoeGRyKSB7XG4gICAgICAgIHhkci5vbnRpbWVvdXQgPSB4ZHIub25lcnJvciA9IHhkci5vbnByb2dyZXNzID0geGRyLm9ubG9hZCA9IG51bGw7XG4gICAgICAgIHhkci5hYm9ydCgpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3hkb21haW5fcmVxdWVzdCA9IChodHRwX3hkb21haW5fcmVxdWVzdF9ob29rcyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3JlcXVlc3QudHNcbnZhciBodHRwX3JlcXVlc3RfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cbnZhciBNQVhfQlVGRkVSX0xFTkdUSCA9IDI1NiAqIDEwMjQ7XG52YXIgaHR0cF9yZXF1ZXN0X0hUVFBSZXF1ZXN0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBodHRwX3JlcXVlc3RfZXh0ZW5kcyhIVFRQUmVxdWVzdCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIVFRQUmVxdWVzdChob29rcywgbWV0aG9kLCB1cmwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaG9va3MgPSBob29rcztcbiAgICAgICAgX3RoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgICAgICBfdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSFRUUFJlcXVlc3QucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMueGhyID0gdGhpcy5ob29rcy5nZXRSZXF1ZXN0KHRoaXMpO1xuICAgICAgICB0aGlzLnVubG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcnVudGltZS5hZGRVbmxvYWRMaXN0ZW5lcih0aGlzLnVubG9hZGVyKTtcbiAgICAgICAgdGhpcy54aHIub3Blbih0aGlzLm1ldGhvZCwgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy54aHIuc2V0UmVxdWVzdEhlYWRlcikge1xuICAgICAgICAgICAgdGhpcy54aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnhoci5zZW5kKHBheWxvYWQpO1xuICAgIH07XG4gICAgSFRUUFJlcXVlc3QucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51bmxvYWRlcikge1xuICAgICAgICAgICAgcnVudGltZS5yZW1vdmVVbmxvYWRMaXN0ZW5lcih0aGlzLnVubG9hZGVyKTtcbiAgICAgICAgICAgIHRoaXMudW5sb2FkZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnhocikge1xuICAgICAgICAgICAgdGhpcy5ob29rcy5hYm9ydFJlcXVlc3QodGhpcy54aHIpO1xuICAgICAgICAgICAgdGhpcy54aHIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUub25DaHVuayA9IGZ1bmN0aW9uIChzdGF0dXMsIGRhdGEpIHtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBjaHVuayA9IHRoaXMuYWR2YW5jZUJ1ZmZlcihkYXRhKTtcbiAgICAgICAgICAgIGlmIChjaHVuaykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnY2h1bmsnLCB7IHN0YXR1czogc3RhdHVzLCBkYXRhOiBjaHVuayB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQnVmZmVyVG9vTG9uZyhkYXRhKSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdidWZmZXJfdG9vX2xvbmcnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFJlcXVlc3QucHJvdG90eXBlLmFkdmFuY2VCdWZmZXIgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgIHZhciB1bnJlYWREYXRhID0gYnVmZmVyLnNsaWNlKHRoaXMucG9zaXRpb24pO1xuICAgICAgICB2YXIgZW5kT2ZMaW5lUG9zaXRpb24gPSB1bnJlYWREYXRhLmluZGV4T2YoJ1xcbicpO1xuICAgICAgICBpZiAoZW5kT2ZMaW5lUG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uICs9IGVuZE9mTGluZVBvc2l0aW9uICsgMTtcbiAgICAgICAgICAgIHJldHVybiB1bnJlYWREYXRhLnNsaWNlKDAsIGVuZE9mTGluZVBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuaXNCdWZmZXJUb29Mb25nID0gZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbiA9PT0gYnVmZmVyLmxlbmd0aCAmJiBidWZmZXIubGVuZ3RoID4gTUFYX0JVRkZFUl9MRU5HVEg7XG4gICAgfTtcbiAgICByZXR1cm4gSFRUUFJlcXVlc3Q7XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfcmVxdWVzdCA9IChodHRwX3JlcXVlc3RfSFRUUFJlcXVlc3QpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvc3RhdGUudHNcbnZhciBTdGF0ZTtcbihmdW5jdGlvbiAoU3RhdGUpIHtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNPTk5FQ1RJTkdcIl0gPSAwXSA9IFwiQ09OTkVDVElOR1wiO1xuICAgIFN0YXRlW1N0YXRlW1wiT1BFTlwiXSA9IDFdID0gXCJPUEVOXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJDTE9TRURcIl0gPSAzXSA9IFwiQ0xPU0VEXCI7XG59KShTdGF0ZSB8fCAoU3RhdGUgPSB7fSkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc3RhdGUgPSAoU3RhdGUpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvaHR0cF9zb2NrZXQudHNcblxuXG5cbnZhciBhdXRvSW5jcmVtZW50ID0gMTtcbnZhciBodHRwX3NvY2tldF9IVFRQU29ja2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIVFRQU29ja2V0KGhvb2tzLCB1cmwpIHtcbiAgICAgICAgdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgICAgICB0aGlzLnNlc3Npb24gPSByYW5kb21OdW1iZXIoMTAwMCkgKyAnLycgKyByYW5kb21TdHJpbmcoOCk7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBnZXRMb2NhdGlvbih1cmwpO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZS5DT05ORUNUSU5HO1xuICAgICAgICB0aGlzLm9wZW5TdHJlYW0oKTtcbiAgICB9XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmRSYXcoSlNPTi5zdHJpbmdpZnkoW3BheWxvYWRdKSk7XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5waW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhvb2tzLnNlbmRIZWFydGJlYXQodGhpcyk7XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24pIHtcbiAgICAgICAgdGhpcy5vbkNsb3NlKGNvZGUsIHJlYXNvbiwgdHJ1ZSk7XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5zZW5kUmF3ID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gc3RhdGUuT1BFTikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBydW50aW1lLmNyZWF0ZVNvY2tldFJlcXVlc3QoJ1BPU1QnLCBnZXRVbmlxdWVVUkwoZ2V0U2VuZFVSTCh0aGlzLmxvY2F0aW9uLCB0aGlzLnNlc3Npb24pKSkuc3RhcnQocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsb3NlU3RyZWFtKCk7XG4gICAgICAgIHRoaXMub3BlblN0cmVhbSgpO1xuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uIChjb2RlLCByZWFzb24sIHdhc0NsZWFuKSB7XG4gICAgICAgIHRoaXMuY2xvc2VTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gc3RhdGUuQ0xPU0VEO1xuICAgICAgICBpZiAodGhpcy5vbmNsb3NlKSB7XG4gICAgICAgICAgICB0aGlzLm9uY2xvc2Uoe1xuICAgICAgICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXG4gICAgICAgICAgICAgICAgd2FzQ2xlYW46IHdhc0NsZWFuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25DaHVuayA9IGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICBpZiAoY2h1bmsuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5PUEVOKSB7XG4gICAgICAgICAgICB0aGlzLm9uQWN0aXZpdHkoKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGF5bG9hZDtcbiAgICAgICAgdmFyIHR5cGUgPSBjaHVuay5kYXRhLnNsaWNlKDAsIDEpO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ28nOlxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ3t9Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk9wZW4ocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdbXScpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF5bG9hZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnQocGF5bG9hZFtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoY2h1bmsuZGF0YS5zbGljZSgxKSB8fCAnbnVsbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMub25FdmVudChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2gnOlxuICAgICAgICAgICAgICAgIHRoaXMuaG9va3Mub25IZWFydGJlYXQodGhpcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjJzpcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdbXScpO1xuICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZShwYXlsb2FkWzBdLCBwYXlsb2FkWzFdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gc3RhdGUuQ09OTkVDVElORykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5ob3N0bmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb24uYmFzZSA9IHJlcGxhY2VIb3N0KHRoaXMubG9jYXRpb24uYmFzZSwgb3B0aW9ucy5ob3N0bmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZS5PUEVOO1xuICAgICAgICAgICAgaWYgKHRoaXMub25vcGVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgxMDA2LCAnU2VydmVyIGxvc3Qgc2Vzc2lvbicsIHRydWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlLk9QRU4gJiYgdGhpcy5vbm1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMub25tZXNzYWdlKHsgZGF0YTogZXZlbnQgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uQWN0aXZpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm9uYWN0aXZpdHkpIHtcbiAgICAgICAgICAgIHRoaXMub25hY3Rpdml0eSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGlmICh0aGlzLm9uZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMub25lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9wZW5TdHJlYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RyZWFtID0gcnVudGltZS5jcmVhdGVTb2NrZXRSZXF1ZXN0KCdQT1NUJywgZ2V0VW5pcXVlVVJMKHRoaXMuaG9va3MuZ2V0UmVjZWl2ZVVSTCh0aGlzLmxvY2F0aW9uLCB0aGlzLnNlc3Npb24pKSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoJ2NodW5rJywgZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkNodW5rKGNodW5rKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoJ2ZpbmlzaGVkJywgZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgX3RoaXMuaG9va3Mub25GaW5pc2hlZChfdGhpcywgc3RhdHVzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RyZWFtLmJpbmQoJ2J1ZmZlcl90b29fbG9uZycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnJlY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB1dGlsLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkNsb3NlKDEwMDYsICdDb3VsZCBub3Qgc3RhcnQgc3RyZWFtaW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLmNsb3NlU3RyZWFtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zdHJlYW0pIHtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtLnVuYmluZF9hbGwoKTtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBIVFRQU29ja2V0O1xufSgpKTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uKHVybCkge1xuICAgIHZhciBwYXJ0cyA9IC8oW15cXD9dKilcXC8qKFxcPz8uKikvLmV4ZWModXJsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBiYXNlOiBwYXJ0c1sxXSxcbiAgICAgICAgcXVlcnlTdHJpbmc6IHBhcnRzWzJdXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldFNlbmRVUkwodXJsLCBzZXNzaW9uKSB7XG4gICAgcmV0dXJuIHVybC5iYXNlICsgJy8nICsgc2Vzc2lvbiArICcveGhyX3NlbmQnO1xufVxuZnVuY3Rpb24gZ2V0VW5pcXVlVVJMKHVybCkge1xuICAgIHZhciBzZXBhcmF0b3IgPSB1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJztcbiAgICByZXR1cm4gdXJsICsgc2VwYXJhdG9yICsgJ3Q9JyArICtuZXcgRGF0ZSgpICsgJyZuPScgKyBhdXRvSW5jcmVtZW50Kys7XG59XG5mdW5jdGlvbiByZXBsYWNlSG9zdCh1cmwsIGhvc3RuYW1lKSB7XG4gICAgdmFyIHVybFBhcnRzID0gLyhodHRwcz86XFwvXFwvKShbXlxcLzpdKykoKFxcL3w6KT8uKikvLmV4ZWModXJsKTtcbiAgICByZXR1cm4gdXJsUGFydHNbMV0gKyBob3N0bmFtZSArIHVybFBhcnRzWzNdO1xufVxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xufVxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHJhbmRvbU51bWJlcigzMikudG9TdHJpbmcoMzIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbn1cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfc29ja2V0ID0gKGh0dHBfc29ja2V0X0hUVFBTb2NrZXQpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2h0dHAvaHR0cF9zdHJlYW1pbmdfc29ja2V0LnRzXG52YXIgaHR0cF9zdHJlYW1pbmdfc29ja2V0X2hvb2tzID0ge1xuICAgIGdldFJlY2VpdmVVUkw6IGZ1bmN0aW9uICh1cmwsIHNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHVybC5iYXNlICsgJy8nICsgc2Vzc2lvbiArICcveGhyX3N0cmVhbWluZycgKyB1cmwucXVlcnlTdHJpbmc7XG4gICAgfSxcbiAgICBvbkhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBzb2NrZXQuc2VuZFJhdygnW10nKTtcbiAgICB9LFxuICAgIHNlbmRIZWFydGJlYXQ6IGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgICAgICAgc29ja2V0LnNlbmRSYXcoJ1tdJyk7XG4gICAgfSxcbiAgICBvbkZpbmlzaGVkOiBmdW5jdGlvbiAoc29ja2V0LCBzdGF0dXMpIHtcbiAgICAgICAgc29ja2V0Lm9uQ2xvc2UoMTAwNiwgJ0Nvbm5lY3Rpb24gaW50ZXJydXB0ZWQgKCcgKyBzdGF0dXMgKyAnKScsIGZhbHNlKTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9zdHJlYW1pbmdfc29ja2V0ID0gKGh0dHBfc3RyZWFtaW5nX3NvY2tldF9ob29rcyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3BvbGxpbmdfc29ja2V0LnRzXG52YXIgaHR0cF9wb2xsaW5nX3NvY2tldF9ob29rcyA9IHtcbiAgICBnZXRSZWNlaXZlVVJMOiBmdW5jdGlvbiAodXJsLCBzZXNzaW9uKSB7XG4gICAgICAgIHJldHVybiB1cmwuYmFzZSArICcvJyArIHNlc3Npb24gKyAnL3hocicgKyB1cmwucXVlcnlTdHJpbmc7XG4gICAgfSxcbiAgICBvbkhlYXJ0YmVhdDogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgc2VuZEhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBzb2NrZXQuc2VuZFJhdygnW10nKTtcbiAgICB9LFxuICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIChzb2NrZXQsIHN0YXR1cykge1xuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHNvY2tldC5yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNvY2tldC5vbkNsb3NlKDEwMDYsICdDb25uZWN0aW9uIGludGVycnVwdGVkICgnICsgc3RhdHVzICsgJyknLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9wb2xsaW5nX3NvY2tldCA9IChodHRwX3BvbGxpbmdfc29ja2V0X2hvb2tzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvaXNvbW9ycGhpYy9odHRwL2h0dHBfeGhyX3JlcXVlc3QudHNcblxudmFyIGh0dHBfeGhyX3JlcXVlc3RfaG9va3MgPSB7XG4gICAgZ2V0UmVxdWVzdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSBydW50aW1lLmdldFhIUkFQSSgpO1xuICAgICAgICB2YXIgeGhyID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoeGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VUZXh0ICYmIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVGV4dCAmJiB4aHIucmVzcG9uc2VUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5lbWl0KCdmaW5pc2hlZCcsIHhoci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB4aHI7XG4gICAgfSxcbiAgICBhYm9ydFJlcXVlc3Q6IGZ1bmN0aW9uICh4aHIpIHtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIHhoci5hYm9ydCgpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3hocl9yZXF1ZXN0ID0gKGh0dHBfeGhyX3JlcXVlc3RfaG9va3MpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL2h0dHAvaHR0cC50c1xuXG5cblxuXG5cbnZhciBIVFRQID0ge1xuICAgIGNyZWF0ZVN0cmVhbWluZ1NvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTb2NrZXQoaHR0cF9zdHJlYW1pbmdfc29ja2V0LCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlUG9sbGluZ1NvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVTb2NrZXQoaHR0cF9wb2xsaW5nX3NvY2tldCwgdXJsKTtcbiAgICB9LFxuICAgIGNyZWF0ZVNvY2tldDogZnVuY3Rpb24gKGhvb2tzLCB1cmwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBodHRwX3NvY2tldChob29rcywgdXJsKTtcbiAgICB9LFxuICAgIGNyZWF0ZVhIUjogZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlcXVlc3QoaHR0cF94aHJfcmVxdWVzdCwgbWV0aG9kLCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlUmVxdWVzdDogZnVuY3Rpb24gKGhvb2tzLCBtZXRob2QsIHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IGh0dHBfcmVxdWVzdChob29rcywgbWV0aG9kLCB1cmwpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX2h0dHAgPSAoSFRUUCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9odHRwL2h0dHAudHNcblxuXG5odHRwX2h0dHAuY3JlYXRlWERSID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChodHRwX3hkb21haW5fcmVxdWVzdCwgbWV0aG9kLCB1cmwpO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHdlYl9odHRwX2h0dHAgPSAoaHR0cF9odHRwKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL3J1bnRpbWUudHNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBSdW50aW1lID0ge1xuICAgIG5leHRBdXRoQ2FsbGJhY2tJRDogMSxcbiAgICBhdXRoX2NhbGxiYWNrczoge30sXG4gICAgU2NyaXB0UmVjZWl2ZXJzOiBTY3JpcHRSZWNlaXZlcnMsXG4gICAgRGVwZW5kZW5jaWVzUmVjZWl2ZXJzOiBEZXBlbmRlbmNpZXNSZWNlaXZlcnMsXG4gICAgZ2V0RGVmYXVsdFN0cmF0ZWd5OiBkZWZhdWx0X3N0cmF0ZWd5LFxuICAgIFRyYW5zcG9ydHM6IHRyYW5zcG9ydHNfdHJhbnNwb3J0cyxcbiAgICB0cmFuc3BvcnRDb25uZWN0aW9uSW5pdGlhbGl6ZXI6IHRyYW5zcG9ydF9jb25uZWN0aW9uX2luaXRpYWxpemVyLFxuICAgIEhUVFBGYWN0b3J5OiB3ZWJfaHR0cF9odHRwLFxuICAgIFRpbWVsaW5lVHJhbnNwb3J0OiBqc29ucF90aW1lbGluZSxcbiAgICBnZXRYSFJBUEk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcbiAgICB9LFxuICAgIGdldFdlYlNvY2tldEFQSTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LldlYlNvY2tldCB8fCB3aW5kb3cuTW96V2ViU29ja2V0O1xuICAgIH0sXG4gICAgc2V0dXA6IGZ1bmN0aW9uIChQdXNoZXJDbGFzcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuUHVzaGVyID0gUHVzaGVyQ2xhc3M7XG4gICAgICAgIHZhciBpbml0aWFsaXplT25Eb2N1bWVudEJvZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkRvY3VtZW50Qm9keShQdXNoZXJDbGFzcy5yZWFkeSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghd2luZG93LkpTT04pIHtcbiAgICAgICAgICAgIERlcGVuZGVuY2llcy5sb2FkKCdqc29uMicsIHt9LCBpbml0aWFsaXplT25Eb2N1bWVudEJvZHkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZU9uRG9jdW1lbnRCb2R5KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldERvY3VtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9LFxuICAgIGdldFByb3RvY29sOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERvY3VtZW50KCkubG9jYXRpb24ucHJvdG9jb2w7XG4gICAgfSxcbiAgICBnZXRBdXRob3JpemVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4geyBhamF4OiB4aHJfYXV0aCwganNvbnA6IGpzb25wX2F1dGggfTtcbiAgICB9LFxuICAgIG9uRG9jdW1lbnRCb2R5OiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkRvY3VtZW50Qm9keShjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlSlNPTlBSZXF1ZXN0OiBmdW5jdGlvbiAodXJsLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBuZXcganNvbnBfcmVxdWVzdCh1cmwsIGRhdGEpO1xuICAgIH0sXG4gICAgY3JlYXRlU2NyaXB0UmVxdWVzdDogZnVuY3Rpb24gKHNyYykge1xuICAgICAgICByZXR1cm4gbmV3IHNjcmlwdF9yZXF1ZXN0KHNyYyk7XG4gICAgfSxcbiAgICBnZXRMb2NhbFN0b3JhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVYSFI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0WEhSQVBJKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVNaWNyb3NvZnRYSFIoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlWE1MSHR0cFJlcXVlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcy5nZXRYSFJBUEkoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgIH0sXG4gICAgY3JlYXRlTWljcm9zb2Z0WEhSOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICB9LFxuICAgIGdldE5ldHdvcms6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldF9pbmZvX05ldHdvcms7XG4gICAgfSxcbiAgICBjcmVhdGVXZWJTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcy5nZXRXZWJTb2NrZXRBUEkoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlU29ja2V0UmVxdWVzdDogZnVuY3Rpb24gKG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzWEhSU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkhUVFBGYWN0b3J5LmNyZWF0ZVhIUihtZXRob2QsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc1hEUlN1cHBvcnRlZCh1cmwuaW5kZXhPZignaHR0cHM6JykgPT09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5IVFRQRmFjdG9yeS5jcmVhdGVYRFIobWV0aG9kLCB1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgJ0Nyb3NzLW9yaWdpbiBIVFRQIHJlcXVlc3RzIGFyZSBub3Qgc3VwcG9ydGVkJztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaXNYSFJTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIENvbnN0cnVjdG9yID0gdGhpcy5nZXRYSFJBUEkoKTtcbiAgICAgICAgcmV0dXJuIChCb29sZWFuKENvbnN0cnVjdG9yKSAmJiBuZXcgQ29uc3RydWN0b3IoKS53aXRoQ3JlZGVudGlhbHMgIT09IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBpc1hEUlN1cHBvcnRlZDogZnVuY3Rpb24gKHVzZVRMUykge1xuICAgICAgICB2YXIgcHJvdG9jb2wgPSB1c2VUTFMgPyAnaHR0cHM6JyA6ICdodHRwOic7XG4gICAgICAgIHZhciBkb2N1bWVudFByb3RvY29sID0gdGhpcy5nZXRQcm90b2NvbCgpO1xuICAgICAgICByZXR1cm4gKEJvb2xlYW4od2luZG93WydYRG9tYWluUmVxdWVzdCddKSAmJiBkb2N1bWVudFByb3RvY29sID09PSBwcm90b2NvbCk7XG4gICAgfSxcbiAgICBhZGRVbmxvYWRMaXN0ZW5lcjogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cuYXR0YWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlVW5sb2FkTGlzdGVuZXI6IGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIGxpc3RlbmVyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LmRldGFjaEV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5kZXRhY2hFdmVudCgnb251bmxvYWQnLCBsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcnVudGltZSA9IChSdW50aW1lKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90aW1lbGluZS9sZXZlbC50c1xudmFyIFRpbWVsaW5lTGV2ZWw7XG4oZnVuY3Rpb24gKFRpbWVsaW5lTGV2ZWwpIHtcbiAgICBUaW1lbGluZUxldmVsW1RpbWVsaW5lTGV2ZWxbXCJFUlJPUlwiXSA9IDNdID0gXCJFUlJPUlwiO1xuICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIklORk9cIl0gPSA2XSA9IFwiSU5GT1wiO1xuICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIkRFQlVHXCJdID0gN10gPSBcIkRFQlVHXCI7XG59KShUaW1lbGluZUxldmVsIHx8IChUaW1lbGluZUxldmVsID0ge30pKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRpbWVsaW5lX2xldmVsID0gKFRpbWVsaW5lTGV2ZWwpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RpbWVsaW5lL3RpbWVsaW5lLnRzXG5cblxuXG52YXIgdGltZWxpbmVfVGltZWxpbmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVsaW5lKGtleSwgc2Vzc2lvbiwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdGhpcy5zZW50ID0gMDtcbiAgICAgICAgdGhpcy51bmlxdWVJRCA9IDA7XG4gICAgfVxuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAobGV2ZWwsIGV2ZW50KSB7XG4gICAgICAgIGlmIChsZXZlbCA8PSB0aGlzLm9wdGlvbnMubGV2ZWwpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzLnB1c2goZXh0ZW5kKHt9LCBldmVudCwgeyB0aW1lc3RhbXA6IHV0aWwubm93KCkgfSkpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5saW1pdCAmJiB0aGlzLmV2ZW50cy5sZW5ndGggPiB0aGlzLm9wdGlvbnMubGltaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50cy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUaW1lbGluZS5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sb2codGltZWxpbmVfbGV2ZWwuRVJST1IsIGV2ZW50KTtcbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5pbmZvID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubG9nKHRpbWVsaW5lX2xldmVsLklORk8sIGV2ZW50KTtcbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLmxvZyh0aW1lbGluZV9sZXZlbC5ERUJVRywgZXZlbnQpO1xuICAgIH07XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmlzRW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50cy5sZW5ndGggPT09IDA7XG4gICAgfTtcbiAgICBUaW1lbGluZS5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChzZW5kZm4sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkYXRhID0gZXh0ZW5kKHtcbiAgICAgICAgICAgIHNlc3Npb246IHRoaXMuc2Vzc2lvbixcbiAgICAgICAgICAgIGJ1bmRsZTogdGhpcy5zZW50ICsgMSxcbiAgICAgICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgICAgICBsaWI6ICdqcycsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLm9wdGlvbnMudmVyc2lvbixcbiAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMub3B0aW9ucy5jbHVzdGVyLFxuICAgICAgICAgICAgZmVhdHVyZXM6IHRoaXMub3B0aW9ucy5mZWF0dXJlcyxcbiAgICAgICAgICAgIHRpbWVsaW5lOiB0aGlzLmV2ZW50c1xuICAgICAgICB9LCB0aGlzLm9wdGlvbnMucGFyYW1zKTtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBbXTtcbiAgICAgICAgc2VuZGZuKGRhdGEsIGZ1bmN0aW9uIChlcnJvciwgcmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VudCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5nZW5lcmF0ZVVuaXF1ZUlEID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuaXF1ZUlEKys7XG4gICAgICAgIHJldHVybiB0aGlzLnVuaXF1ZUlEO1xuICAgIH07XG4gICAgcmV0dXJuIFRpbWVsaW5lO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRpbWVsaW5lX3RpbWVsaW5lID0gKHRpbWVsaW5lX1RpbWVsaW5lKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL3RyYW5zcG9ydF9zdHJhdGVneS50c1xuXG5cblxuXG52YXIgdHJhbnNwb3J0X3N0cmF0ZWd5X1RyYW5zcG9ydFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUcmFuc3BvcnRTdHJhdGVneShuYW1lLCBwcmlvcml0eSwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgfVxuICAgIFRyYW5zcG9ydFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0LmlzU3VwcG9ydGVkKHtcbiAgICAgICAgICAgIHVzZVRMUzogdGhpcy5vcHRpb25zLnVzZVRMU1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydFN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhaWxBdHRlbXB0KG5ldyBVbnN1cHBvcnRlZFN0cmF0ZWd5KCksIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnByaW9yaXR5IDwgbWluUHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWlsQXR0ZW1wdChuZXcgVHJhbnNwb3J0UHJpb3JpdHlUb29Mb3coKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0LmNyZWF0ZUNvbm5lY3Rpb24odGhpcy5uYW1lLCB0aGlzLnByaW9yaXR5LCB0aGlzLm9wdGlvbnMua2V5LCB0aGlzLm9wdGlvbnMpO1xuICAgICAgICB2YXIgaGFuZHNoYWtlID0gbnVsbDtcbiAgICAgICAgdmFyIG9uSW5pdGlhbGl6ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdpbml0aWFsaXplZCcsIG9uSW5pdGlhbGl6ZWQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LmNvbm5lY3QoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGhhbmRzaGFrZSA9IGZhY3RvcnkuY3JlYXRlSGFuZHNoYWtlKHRyYW5zcG9ydCwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkNsb3NlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgdmFyIHNlcmlhbGl6ZWRUcmFuc3BvcnQ7XG4gICAgICAgICAgICBzZXJpYWxpemVkVHJhbnNwb3J0ID0gc2FmZUpTT05TdHJpbmdpZnkodHJhbnNwb3J0KTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBUcmFuc3BvcnRDbG9zZWQoc2VyaWFsaXplZFRyYW5zcG9ydCkpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnaW5pdGlhbGl6ZWQnLCBvbkluaXRpYWxpemVkKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoJ29wZW4nLCBvbk9wZW4pO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ2luaXRpYWxpemVkJywgb25Jbml0aWFsaXplZCk7XG4gICAgICAgIHRyYW5zcG9ydC5iaW5kKCdvcGVuJywgb25PcGVuKTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ2Vycm9yJywgb25FcnJvcik7XG4gICAgICAgIHRyYW5zcG9ydC5iaW5kKCdjbG9zZWQnLCBvbkNsb3NlZCk7XG4gICAgICAgIHRyYW5zcG9ydC5pbml0aWFsaXplKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRzaGFrZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5wcmlvcml0eSA8IHApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZHNoYWtlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc3BvcnRTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRfc3RyYXRlZ3kgPSAodHJhbnNwb3J0X3N0cmF0ZWd5X1RyYW5zcG9ydFN0cmF0ZWd5KTtcbmZ1bmN0aW9uIGZhaWxBdHRlbXB0KGVycm9yLCBjYWxsYmFjaykge1xuICAgIHV0aWwuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKCkgeyB9XG4gICAgfTtcbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL3N0cmF0ZWd5X2J1aWxkZXIudHNcblxuXG5cblxuXG52YXIgc3RyYXRlZ3lfYnVpbGRlcl9UcmFuc3BvcnRzID0gcnVudGltZS5UcmFuc3BvcnRzO1xudmFyIHN0cmF0ZWd5X2J1aWxkZXJfZGVmaW5lVHJhbnNwb3J0ID0gZnVuY3Rpb24gKGNvbmZpZywgbmFtZSwgdHlwZSwgcHJpb3JpdHksIG9wdGlvbnMsIG1hbmFnZXIpIHtcbiAgICB2YXIgdHJhbnNwb3J0Q2xhc3MgPSBzdHJhdGVneV9idWlsZGVyX1RyYW5zcG9ydHNbdHlwZV07XG4gICAgaWYgKCF0cmFuc3BvcnRDbGFzcykge1xuICAgICAgICB0aHJvdyBuZXcgVW5zdXBwb3J0ZWRUcmFuc3BvcnQodHlwZSk7XG4gICAgfVxuICAgIHZhciBlbmFibGVkID0gKCFjb25maWcuZW5hYmxlZFRyYW5zcG9ydHMgfHxcbiAgICAgICAgYXJyYXlJbmRleE9mKGNvbmZpZy5lbmFibGVkVHJhbnNwb3J0cywgbmFtZSkgIT09IC0xKSAmJlxuICAgICAgICAoIWNvbmZpZy5kaXNhYmxlZFRyYW5zcG9ydHMgfHxcbiAgICAgICAgICAgIGFycmF5SW5kZXhPZihjb25maWcuZGlzYWJsZWRUcmFuc3BvcnRzLCBuYW1lKSA9PT0gLTEpO1xuICAgIHZhciB0cmFuc3BvcnQ7XG4gICAgaWYgKGVuYWJsZWQpIHtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBpZ25vcmVOdWxsT3JpZ2luOiBjb25maWcuaWdub3JlTnVsbE9yaWdpbiB9LCBvcHRpb25zKTtcbiAgICAgICAgdHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydF9zdHJhdGVneShuYW1lLCBwcmlvcml0eSwgbWFuYWdlciA/IG1hbmFnZXIuZ2V0QXNzaXN0YW50KHRyYW5zcG9ydENsYXNzKSA6IHRyYW5zcG9ydENsYXNzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyYW5zcG9ydCA9IHN0cmF0ZWd5X2J1aWxkZXJfVW5zdXBwb3J0ZWRTdHJhdGVneTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zcG9ydDtcbn07XG52YXIgc3RyYXRlZ3lfYnVpbGRlcl9VbnN1cHBvcnRlZFN0cmF0ZWd5ID0ge1xuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGNvbm5lY3Q6IGZ1bmN0aW9uIChfLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgZGVmZXJyZWQgPSB1dGlsLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBVbnN1cHBvcnRlZFN0cmF0ZWd5KCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGVmZXJyZWQuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uICgpIHsgfVxuICAgICAgICB9O1xuICAgIH1cbn07XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY29uZmlnLnRzXG5cblxuZnVuY3Rpb24gZ2V0Q29uZmlnKG9wdHMpIHtcbiAgICB2YXIgY29uZmlnID0ge1xuICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IG9wdHMuYWN0aXZpdHlUaW1lb3V0IHx8IGRlZmF1bHRzLmFjdGl2aXR5VGltZW91dCxcbiAgICAgICAgYXV0aEVuZHBvaW50OiBvcHRzLmF1dGhFbmRwb2ludCB8fCBkZWZhdWx0cy5hdXRoRW5kcG9pbnQsXG4gICAgICAgIGF1dGhUcmFuc3BvcnQ6IG9wdHMuYXV0aFRyYW5zcG9ydCB8fCBkZWZhdWx0cy5hdXRoVHJhbnNwb3J0LFxuICAgICAgICBjbHVzdGVyOiBvcHRzLmNsdXN0ZXIgfHwgZGVmYXVsdHMuY2x1c3RlcixcbiAgICAgICAgaHR0cFBhdGg6IG9wdHMuaHR0cFBhdGggfHwgZGVmYXVsdHMuaHR0cFBhdGgsXG4gICAgICAgIGh0dHBQb3J0OiBvcHRzLmh0dHBQb3J0IHx8IGRlZmF1bHRzLmh0dHBQb3J0LFxuICAgICAgICBodHRwc1BvcnQ6IG9wdHMuaHR0cHNQb3J0IHx8IGRlZmF1bHRzLmh0dHBzUG9ydCxcbiAgICAgICAgcG9uZ1RpbWVvdXQ6IG9wdHMucG9uZ1RpbWVvdXQgfHwgZGVmYXVsdHMucG9uZ1RpbWVvdXQsXG4gICAgICAgIHN0YXRzSG9zdDogb3B0cy5zdGF0c0hvc3QgfHwgZGVmYXVsdHMuc3RhdHNfaG9zdCxcbiAgICAgICAgdW5hdmFpbGFibGVUaW1lb3V0OiBvcHRzLnVuYXZhaWxhYmxlVGltZW91dCB8fCBkZWZhdWx0cy51bmF2YWlsYWJsZVRpbWVvdXQsXG4gICAgICAgIHdzUGF0aDogb3B0cy53c1BhdGggfHwgZGVmYXVsdHMud3NQYXRoLFxuICAgICAgICB3c1BvcnQ6IG9wdHMud3NQb3J0IHx8IGRlZmF1bHRzLndzUG9ydCxcbiAgICAgICAgd3NzUG9ydDogb3B0cy53c3NQb3J0IHx8IGRlZmF1bHRzLndzc1BvcnQsXG4gICAgICAgIGVuYWJsZVN0YXRzOiBnZXRFbmFibGVTdGF0c0NvbmZpZyhvcHRzKSxcbiAgICAgICAgaHR0cEhvc3Q6IGdldEh0dHBIb3N0KG9wdHMpLFxuICAgICAgICB1c2VUTFM6IHNob3VsZFVzZVRMUyhvcHRzKSxcbiAgICAgICAgd3NIb3N0OiBnZXRXZWJzb2NrZXRIb3N0KG9wdHMpXG4gICAgfTtcbiAgICBpZiAoJ2F1dGgnIGluIG9wdHMpXG4gICAgICAgIGNvbmZpZy5hdXRoID0gb3B0cy5hdXRoO1xuICAgIGlmICgnYXV0aG9yaXplcicgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmF1dGhvcml6ZXIgPSBvcHRzLmF1dGhvcml6ZXI7XG4gICAgaWYgKCdkaXNhYmxlZFRyYW5zcG9ydHMnIGluIG9wdHMpXG4gICAgICAgIGNvbmZpZy5kaXNhYmxlZFRyYW5zcG9ydHMgPSBvcHRzLmRpc2FibGVkVHJhbnNwb3J0cztcbiAgICBpZiAoJ2VuYWJsZWRUcmFuc3BvcnRzJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcuZW5hYmxlZFRyYW5zcG9ydHMgPSBvcHRzLmVuYWJsZWRUcmFuc3BvcnRzO1xuICAgIGlmICgnaWdub3JlTnVsbE9yaWdpbicgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmlnbm9yZU51bGxPcmlnaW4gPSBvcHRzLmlnbm9yZU51bGxPcmlnaW47XG4gICAgaWYgKCd0aW1lbGluZVBhcmFtcycgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLnRpbWVsaW5lUGFyYW1zID0gb3B0cy50aW1lbGluZVBhcmFtcztcbiAgICBpZiAoJ25hY2wnIGluIG9wdHMpIHtcbiAgICAgICAgY29uZmlnLm5hY2wgPSBvcHRzLm5hY2w7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG59XG5mdW5jdGlvbiBnZXRIdHRwSG9zdChvcHRzKSB7XG4gICAgaWYgKG9wdHMuaHR0cEhvc3QpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMuaHR0cEhvc3Q7XG4gICAgfVxuICAgIGlmIChvcHRzLmNsdXN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIFwic29ja2pzLVwiICsgb3B0cy5jbHVzdGVyICsgXCIucHVzaGVyLmNvbVwiO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdHMuaHR0cEhvc3Q7XG59XG5mdW5jdGlvbiBnZXRXZWJzb2NrZXRIb3N0KG9wdHMpIHtcbiAgICBpZiAob3B0cy53c0hvc3QpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMud3NIb3N0O1xuICAgIH1cbiAgICBpZiAob3B0cy5jbHVzdGVyKSB7XG4gICAgICAgIHJldHVybiBnZXRXZWJzb2NrZXRIb3N0RnJvbUNsdXN0ZXIob3B0cy5jbHVzdGVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFdlYnNvY2tldEhvc3RGcm9tQ2x1c3RlcihkZWZhdWx0cy5jbHVzdGVyKTtcbn1cbmZ1bmN0aW9uIGdldFdlYnNvY2tldEhvc3RGcm9tQ2x1c3RlcihjbHVzdGVyKSB7XG4gICAgcmV0dXJuIFwid3MtXCIgKyBjbHVzdGVyICsgXCIucHVzaGVyLmNvbVwiO1xufVxuZnVuY3Rpb24gc2hvdWxkVXNlVExTKG9wdHMpIHtcbiAgICBpZiAocnVudGltZS5nZXRQcm90b2NvbCgpID09PSAnaHR0cHM6Jykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAob3B0cy5mb3JjZVRMUyA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGdldEVuYWJsZVN0YXRzQ29uZmlnKG9wdHMpIHtcbiAgICBpZiAoJ2VuYWJsZVN0YXRzJyBpbiBvcHRzKSB7XG4gICAgICAgIHJldHVybiBvcHRzLmVuYWJsZVN0YXRzO1xuICAgIH1cbiAgICBpZiAoJ2Rpc2FibGVTdGF0cycgaW4gb3B0cykge1xuICAgICAgICByZXR1cm4gIW9wdHMuZGlzYWJsZVN0YXRzO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvcHVzaGVyLnRzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgcHVzaGVyX1B1c2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUHVzaGVyKGFwcF9rZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2hlY2tBcHBLZXkoYXBwX2tleSk7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBpZiAoIW9wdGlvbnMuY2x1c3RlciAmJiAhKG9wdGlvbnMud3NIb3N0IHx8IG9wdGlvbnMuaHR0cEhvc3QpKSB7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCdqYXZhc2NyaXB0UXVpY2tTdGFydCcpO1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oXCJZb3Ugc2hvdWxkIGFsd2F5cyBzcGVjaWZ5IGEgY2x1c3RlciB3aGVuIGNvbm5lY3RpbmcuIFwiICsgc3VmZml4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2Rpc2FibGVTdGF0cycgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oJ1RoZSBkaXNhYmxlU3RhdHMgb3B0aW9uIGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgZW5hYmxlU3RhdHMnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtleSA9IGFwcF9rZXk7XG4gICAgICAgIHRoaXMuY29uZmlnID0gZ2V0Q29uZmlnKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0gZmFjdG9yeS5jcmVhdGVDaGFubmVscygpO1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyID0gbmV3IGRpc3BhdGNoZXIoKTtcbiAgICAgICAgdGhpcy5zZXNzaW9uSUQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IG5ldyB0aW1lbGluZV90aW1lbGluZSh0aGlzLmtleSwgdGhpcy5zZXNzaW9uSUQsIHtcbiAgICAgICAgICAgIGNsdXN0ZXI6IHRoaXMuY29uZmlnLmNsdXN0ZXIsXG4gICAgICAgICAgICBmZWF0dXJlczogUHVzaGVyLmdldENsaWVudEZlYXR1cmVzKCksXG4gICAgICAgICAgICBwYXJhbXM6IHRoaXMuY29uZmlnLnRpbWVsaW5lUGFyYW1zIHx8IHt9LFxuICAgICAgICAgICAgbGltaXQ6IDUwLFxuICAgICAgICAgICAgbGV2ZWw6IHRpbWVsaW5lX2xldmVsLklORk8sXG4gICAgICAgICAgICB2ZXJzaW9uOiBkZWZhdWx0cy5WRVJTSU9OXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5jb25maWcuZW5hYmxlU3RhdHMpIHtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXIgPSBmYWN0b3J5LmNyZWF0ZVRpbWVsaW5lU2VuZGVyKHRoaXMudGltZWxpbmUsIHtcbiAgICAgICAgICAgICAgICBob3N0OiB0aGlzLmNvbmZpZy5zdGF0c0hvc3QsXG4gICAgICAgICAgICAgICAgcGF0aDogJy90aW1lbGluZS92Mi8nICsgcnVudGltZS5UaW1lbGluZVRyYW5zcG9ydC5uYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZ2V0U3RyYXRlZ3kgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHJ1bnRpbWUuZ2V0RGVmYXVsdFN0cmF0ZWd5KF90aGlzLmNvbmZpZywgb3B0aW9ucywgc3RyYXRlZ3lfYnVpbGRlcl9kZWZpbmVUcmFuc3BvcnQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBmYWN0b3J5LmNyZWF0ZUNvbm5lY3Rpb25NYW5hZ2VyKHRoaXMua2V5LCB7XG4gICAgICAgICAgICBnZXRTdHJhdGVneTogZ2V0U3RyYXRlZ3ksXG4gICAgICAgICAgICB0aW1lbGluZTogdGhpcy50aW1lbGluZSxcbiAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogdGhpcy5jb25maWcuYWN0aXZpdHlUaW1lb3V0LFxuICAgICAgICAgICAgcG9uZ1RpbWVvdXQ6IHRoaXMuY29uZmlnLnBvbmdUaW1lb3V0LFxuICAgICAgICAgICAgdW5hdmFpbGFibGVUaW1lb3V0OiB0aGlzLmNvbmZpZy51bmF2YWlsYWJsZVRpbWVvdXQsXG4gICAgICAgICAgICB1c2VUTFM6IEJvb2xlYW4odGhpcy5jb25maWcudXNlVExTKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmliZUFsbCgpO1xuICAgICAgICAgICAgaWYgKF90aGlzLnRpbWVsaW5lU2VuZGVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGltZWxpbmVTZW5kZXIuc2VuZChfdGhpcy5jb25uZWN0aW9uLmlzVXNpbmdUTFMoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnbWVzc2FnZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICAgICAgdmFyIGludGVybmFsID0gZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSA9PT0gMDtcbiAgICAgICAgICAgIGlmIChldmVudC5jaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWwgPSBfdGhpcy5jaGFubmVsKGV2ZW50LmNoYW5uZWwpO1xuICAgICAgICAgICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWwuaGFuZGxlRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaW50ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5nbG9iYWxfZW1pdHRlci5lbWl0KGV2ZW50LmV2ZW50LCBldmVudC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdjb25uZWN0aW5nJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2hhbm5lbHMuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Rpc2Nvbm5lY3RlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmNoYW5uZWxzLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBQdXNoZXIuaW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7IGluc3RhbmNlczogUHVzaGVyLmluc3RhbmNlcy5sZW5ndGggfSk7XG4gICAgICAgIGlmIChQdXNoZXIuaXNSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgUHVzaGVyLnJlYWR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBQdXNoZXIuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gUHVzaGVyLmluc3RhbmNlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIFB1c2hlci5pbnN0YW5jZXNbaV0uY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQdXNoZXIuZ2V0Q2xpZW50RmVhdHVyZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBrZXlzKGZpbHRlck9iamVjdCh7IHdzOiBydW50aW1lLlRyYW5zcG9ydHMud3MgfSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0LmlzU3VwcG9ydGVkKHt9KTtcbiAgICAgICAgfSkpO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5jaGFubmVsID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuZmluZChuYW1lKTtcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuYWxsQ2hhbm5lbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzLmFsbCgpO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uY29ubmVjdCgpO1xuICAgICAgICBpZiAodGhpcy50aW1lbGluZVNlbmRlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdXNpbmdUTFMgPSB0aGlzLmNvbm5lY3Rpb24uaXNVc2luZ1RMUygpO1xuICAgICAgICAgICAgICAgIHZhciB0aW1lbGluZVNlbmRlciA9IHRoaXMudGltZWxpbmVTZW5kZXI7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyID0gbmV3IFBlcmlvZGljVGltZXIoNjAwMDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVTZW5kZXIuc2VuZCh1c2luZ1RMUyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHRoaXMudGltZWxpbmVTZW5kZXJUaW1lcikge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyLmVuc3VyZUFib3J0ZWQoKTtcbiAgICAgICAgICAgIHRoaXMudGltZWxpbmVTZW5kZXJUaW1lciA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLmJpbmQoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIuYmluZF9nbG9iYWwoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUudW5iaW5kX2dsb2JhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLnVuYmluZF9nbG9iYWwoY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUudW5iaW5kX2FsbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmdsb2JhbF9lbWl0dGVyLnVuYmluZF9hbGwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoYW5uZWxOYW1lO1xuICAgICAgICBmb3IgKGNoYW5uZWxOYW1lIGluIHRoaXMuY2hhbm5lbHMuY2hhbm5lbHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYW5uZWxzLmNoYW5uZWxzLmhhc093blByb3BlcnR5KGNoYW5uZWxOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKGNoYW5uZWxOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY2hhbm5lbF9uYW1lKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gdGhpcy5jaGFubmVscy5hZGQoY2hhbm5lbF9uYW1lLCB0aGlzKTtcbiAgICAgICAgaWYgKGNoYW5uZWwuc3Vic2NyaXB0aW9uUGVuZGluZyAmJiBjaGFubmVsLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY2hhbm5lbC5yZWluc3RhdGVTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nICYmXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uc3RhdGUgPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICBjaGFubmVsLnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFubmVsO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIChjaGFubmVsX25hbWUpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLmZpbmQoY2hhbm5lbF9uYW1lKTtcbiAgICAgICAgaWYgKGNoYW5uZWwgJiYgY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nKSB7XG4gICAgICAgICAgICBjaGFubmVsLmNhbmNlbFN1YnNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMucmVtb3ZlKGNoYW5uZWxfbmFtZSk7XG4gICAgICAgICAgICBpZiAoY2hhbm5lbCAmJiBjaGFubmVsLnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuc2VuZF9ldmVudCA9IGZ1bmN0aW9uIChldmVudF9uYW1lLCBkYXRhLCBjaGFubmVsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb24uc2VuZF9ldmVudChldmVudF9uYW1lLCBkYXRhLCBjaGFubmVsKTtcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuc2hvdWxkVXNlVExTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcudXNlVExTO1xuICAgIH07XG4gICAgUHVzaGVyLmluc3RhbmNlcyA9IFtdO1xuICAgIFB1c2hlci5pc1JlYWR5ID0gZmFsc2U7XG4gICAgUHVzaGVyLmxvZ1RvQ29uc29sZSA9IGZhbHNlO1xuICAgIFB1c2hlci5SdW50aW1lID0gcnVudGltZTtcbiAgICBQdXNoZXIuU2NyaXB0UmVjZWl2ZXJzID0gcnVudGltZS5TY3JpcHRSZWNlaXZlcnM7XG4gICAgUHVzaGVyLkRlcGVuZGVuY2llc1JlY2VpdmVycyA9IHJ1bnRpbWUuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzO1xuICAgIFB1c2hlci5hdXRoX2NhbGxiYWNrcyA9IHJ1bnRpbWUuYXV0aF9jYWxsYmFja3M7XG4gICAgcmV0dXJuIFB1c2hlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb3JlX3B1c2hlciA9IF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKHB1c2hlcl9QdXNoZXIpO1xuZnVuY3Rpb24gY2hlY2tBcHBLZXkoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gbnVsbCB8fCBrZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyAnWW91IG11c3QgcGFzcyB5b3VyIGFwcCBrZXkgd2hlbiB5b3UgaW5zdGFudGlhdGUgUHVzaGVyLic7XG4gICAgfVxufVxucnVudGltZS5zZXR1cChwdXNoZXJfUHVzaGVyKTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCIvL2NvbnN0IFB1c2hlciA9IHJlcXVpcmUoXCJwdXNoZXJcIilcclxuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnO1xyXG4vL2ltcG9ydCAnLi9zY3NzL21haW4uc2NzcydcclxuXHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM0NzgyNDkzL2RpZmZlcmVuY2UtYmV0d2Vlbi1jc3JmLWFuZC14LWNzcmYtdG9rZW5cclxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDQxMzM1MzYvaXMtaXQtc2FmZS10by1zdG9yZS1hLWp3dC1pbi1sb2NhbHN0b3JhZ2Utd2l0aC1yZWFjdGpzXHJcbihmdW5jdGlvbiAoJCwgRHJ1cGFsLCBkcnVwYWxTZXR0aW5ncykge1xyXG5cclxuICB2YXIgcmVjZWl2ZXJfaWQgPSAnJztcclxuICB2YXIgbXlfaWQgPSBkcnVwYWxTZXR0aW5ncy5kcnVfY2hhdC51c2VyOy8vIGxvYWQgZnJvbSByZXF1ZXN0IGluc3RlYWRcclxuXHJcbiAgY29uc29sZS5sb2coJ0NIQVQgSlMgSlMgSlNKJyk7XHJcbiAgY29uc29sZS5sb2coJ0NIQVQgSlMgSlMgSlNKJyk7XHJcbiAgY29uc29sZS5sb2cobXlfaWQpO1xyXG4gIGNvbnNvbGUubG9nKCdDSEFUIEpTIEpTIEpTSicpO1xyXG4gIGNvbnNvbGUubG9nKCdDSEFUIEpTIEpTIEpTSicpO1xyXG5cclxuICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNDc4MjQ5My9kaWZmZXJlbmNlLWJldHdlZW4tY3NyZi1hbmQteC1jc3JmLXRva2VuXHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvLyBhamF4IHNldHVwIGZvcm0gY3NyZiB0b2tlblxyXG4gICAgLyokLmFqYXhTZXR1cCh7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICovXHJcblxyXG4gICAgLy8gRW5hYmxlIHB1c2hlciBsb2dnaW5nIC0gZG9uJ3QgaW5jbHVkZSB0aGlzIGluIHByb2R1Y3Rpb25cclxuICAgIFB1c2hlci5sb2dUb0NvbnNvbGUgPSB0cnVlO1xyXG5cclxuICAgIHZhciBwdXNoZXIgPSBuZXcgUHVzaGVyKCdsb2FkIGZyb20gY29uZmlnX2Zvcm0gYXBwIGlkJywge1xyXG4gICAgICBjbHVzdGVyOiAnYXAyJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBwdXNoZXIuc3Vic2NyaWJlKCdteS1jaGFubmVsJyk7XHJcbiAgICBjaGFubmVsLmJpbmQoJ2RydS1jaGF0LWV2ZW50JywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAvL2FsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHJcbiAgICAgIGlmIChteV9pZCA9PT0gZGF0YS5mcm9tKSB7XHJcblxyXG4gICAgICAgIC8vYWxlcnQoJ1NFTkRFUiEhIScpXHJcbiAgICAgICAgJCgnIycrZGF0YS50bykuY2xpY2soKVxyXG5cclxuICAgICAgfSBlbHNlIGlmIChteV9pZCA9PT0gZGF0YS50bykge1xyXG5cclxuICAgICAgICBpZiAocmVjZWl2ZXJfaWQgPT09IGRhdGEuZnJvbSkge1xyXG5cclxuICAgICAgICAgIC8vIGlmIHJlY2VpdmVyIGlzIHNlbGVjdGVkLCByZWxvYWQgdGhlIHNlbGVjdGVkIHVzZXIgLi4uXFxcclxuICAgICAgICAgICQoJyMnK2RhdGEuZnJvbSkuY2xpY2soKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgLy8gaWYgbm90IHBvcHVsYXRlIGNvdW50ZXJcclxuICAgICAgICAgIHZhciB1bnJlYWQgPSBwYXJzZUludCgkKCcjJyArIGRhdGEuZnJvbSkuZmluZCgnLnBlbmRpbmcnKS5odG1sKCkpXHJcbiAgICAgICAgICBpZiAodW5yZWFkKSB7XHJcbiAgICAgICAgICAgICQoJyMnKyBkYXRhLmZyb20pLmZpbmQoJy5wZW5kaW5nJykuaHRtbCh1bnJlYWQgKyAxKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCgnIycgKyBkYXRhLmZyb20pLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJwZW5kaW5nXCI+MTwvc3Bhbj4nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAkKCcudXNlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnLnVzZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmZpbmQoJy5wZW5kaW5nJykucmVtb3ZlKClcclxuXHJcbiAgICAgIHJlY2VpdmVyX2lkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xyXG4gICAgICAvL2FsZXJ0KHJlY2VpdmVyX2lkKTtcclxuXHJcbiAgICAgICQuYWpheCh7XHJcbiAgICAgICAgLy9wcm90b2NvbDogJycsXHJcbiAgICAgICAgdHlwZTogJ2dldCcsXHJcbiAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdC9kcnVfOF90ZXN0cy93ZWIvZHJ1LWNoYXQvbWVzc2FnZXMvJyArIHJlY2VpdmVyX2lkLFxyXG4gICAgICAgIGRhdGE6JycsXHJcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgJCgnI21lc3NhZ2VzJykuaHRtbChkYXRhKTtcclxuICAgICAgICAgIHNjcm9sbFRvQm90dG9tKClcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0pXHJcblxyXG4gICAgLy8gc2VuZCBtZXNzYWdlXHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgJy5kcnUtY2hhdC1tZXNzYWdlLWJveCBpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG4gICAgICB2YXIgbWVzc2FnZSA9ICQodGhpcykudmFsKClcclxuXHJcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIG1lc3NhZ2UgIT09ICcnICYmIHJlY2VpdmVyX2lkICE9PSAnJyl7XHJcbiAgICAgICAgLy9hbGVydChtZXNzYWdlKVxyXG4gICAgICAgICQodGhpcykudmFsKCcnKSAvLyBjbGVhciBpbnB1dFxyXG4gICAgICAgIHZhciByZXF1ZXN0X2RhdGEgPSAncmVjZWl2ZXJfaWQ9JyArIHJlY2VpdmVyX2lkICsgJyZtZXNzYWdlPScgKyBtZXNzYWdlXHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICB0eXBlOiAncG9zdCcsXHJcbiAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0L2RydV84X3Rlc3RzL3dlYi9kcnUtY2hhdC9uZXctbWVzc2FnZScsXHJcbiAgICAgICAgICBkYXRhOiByZXF1ZXN0X2RhdGEsXHJcbiAgICAgICAgICBjYWNoZTogZmFsc2UsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgc3RhdHVzLCBlcnIpIHtcclxuXHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvQm90dG9tKClcclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gc2Nyb2xsVG9Cb3R0b20oKSB7XHJcbiAgICAkKCcubWVzc2FnZS13cmFwcGVyJykuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcDogJCgnLm1lc3NhZ2Utd3JhcHBlcicpLmdldCgwKS5zY3JvbGxIZWlnaHRcclxuICAgIH0sIDUwKVxyXG4gIH1cclxuXHJcblxyXG59KShqUXVlcnksIERydXBhbCwgZHJ1cGFsU2V0dGluZ3MpOyJdLCJzb3VyY2VSb290IjoiIn0=