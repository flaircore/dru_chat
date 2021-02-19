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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/chat.js");
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

/***/ "./src/chat.js":
/*!*********************!*\
  !*** ./src/chat.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//import('./scss/chat_main.scss')

(function ($, Drupal, drupalSettings) {
  const Pusher = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js")

  function druChatInit() {
    let receiver_id = '', pusher_cluster = '', pusher_app_key = '', current_id = ''

    // this.target.remove()
    const usersList = document.querySelector('#dru-chat-block .users')
    console.log(usersList)
    console.log(usersList)
    console.log(usersList)
    console.log(usersList)
    const messages = document.querySelector('#messages')
    const users = usersList.children


    for (user of users) {
      console.log(user)
      console.log()
      user.addEventListener('click', showChats)

    }

    var xhr = new XMLHttpRequest()

    pusher_app_key = drupalSettings.dru_chat.pusher_app_key
    pusher_cluster = drupalSettings.dru_chat.pusher_cluster

    Pusher.logToConsole = true
    console.log(pusher_app_key, pusher_cluster)
    var pusher = new Pusher( pusher_app_key, {
      cluster: pusher_cluster
    })

    var channel = pusher.subscribe('my-channel')

    channel.bind('dru-chat-event', function(data) {
      current_id = drupalSettings.dru_chat.current_id
      let pending = document.querySelector(`[id="${data.from}"]`)
      console.log(data, current_id, data.from, data.to, pending)
      console.log(data.to === current_id)
      console.log('********************* YOU HAVE BEEN DEBUGGED, dont resist **************************')
      console.log('********************* YOU HAVE BEEN DEBUGGED, dont resist **************************')
      console.log('********************* YOU HAVE BEEN DEBUGGED, dont resist **************************')
      console.log('********************* YOU HAVE BEEN DEBUGGED, dont resist  **************************')

      if (current_id === data.from) {
        //alert('sender is ME')
        // TODO:: attach new message here
      } else if (current_id === data.to) {
        // update my view
        if (receiver_id === data.from) {
          document.querySelector(`[id="${data.from}"]`).click()
          // if receiver is selected reload the selected user..
        } else {
          // if receiver not selected, add unread notification for that user

          let pending = document.querySelector(`[id="${data.from}"]`)
          if (pending.querySelector('.pending') && pending.querySelector('.pending').innerText) {
            pending.querySelector('.pending').innerText = parseInt(pending.querySelector('.pending').innerText) + 1
          } else {
            const item = document.createElement('span')
            item.classList.add('pending')
            item.innerText = 1
            pending.prepend(item)
          }
        }
      }

    })


    function sendNewMessage(e) {
      //console.log(this)

      var msg = this.value
      // check if enter key is pressed and message and recever id not null
      if (e.keyCode === 13 && msg !== '' && receiver_id !== ''){

        // clear txt box
        this.value = ''
        var params = 'receiver_id=' + receiver_id + '&message=' + msg
        //xhr.send(params)
        //alert(params)


        const url = 'http://localhost/dru_push/web/dru-chat/new-message'
        xhr.open('POST', url, true)
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0")

        // TODO:: set up form csrf token

        xhr.onprogress = function () {
          console.log(xhr.readyState) // === 3
        }

        xhr.onload = function () {

          if (this.status === 200) {
            // 403: forbidden
            // 404: Not found

            //console.log(this.responseText)

            //const users = JSON.parse(this.responseText)
            /*var output = ''
            output += '<ul>' +
                '<li> ID: '
                +
                '</ul>'
            console.log(this.responseText)
            messages.innerHTML = this.responseText

            // listener for message input
            const message = document.querySelector('[type="input"], [name="message"]')
            message.addEventListener('keyup', sendNewMessage) */
            /*document.getElementById('msg').innerHTML =
                this.responseText*/
            scrollMessageList()
          }
        }

        xhr.onerror = function () {
          console.log('ERRor')
        }

        xhr.send(params)
      }
    }

    function showChats() {
      receiver_id = this.id
      current_id = drupalSettings.dru_chat.current_id
      //this.classList.remove('active')
      // remove unread notification
      let notifications = document.querySelector(`[id="${this.id}"]`)
      if (notifications && notifications.querySelector('.pending')) {
        notifications.querySelector('.pending').remove()
      }
      this.classList.add('active')

      // OPEN - type, url/file, async
      // /dru-chat/messages/{user}
      //const url = 'https://api.github.com/users?name=mimi'
      const url = 'http://localhost/dru_push/web/dru-chat/messages/' + receiver_id

      xhr.open('GET', url, true)
      xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0")
      //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      //var params = "name="+name;
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

      xhr.onprogress = function () {
        console.log(xhr.readyState) // === 3
      }

      // readyState === 4 onload
      xhr.onload = function () {

        if (this.status === 200) {
          // 403: forbidden
          // 404: Not found
          messages.innerHTML = this.responseText

          // listener for message input
          const message = document.querySelector('[type="input"], [name="message"]')
          message.addEventListener('keyup', sendNewMessage)
          scrollMessageList()
        }
      }

      xhr.onerror = function () {
        console.log('ERRor')
      }

      xhr.send()
    }
  }

  if (document.readyState === 'complete'){

  }

  $(document).ready(function () {
    druChatInit()
  })

  // scroll message list
  function scrollMessageList(){
    const msgList = document.querySelector('.message-wrapper')
    /*var y = msgList.scrollHeight;
    var x = msgList.scrollWidth;
    console.log('************** DID YOU CALL ME **********************')
    console.log('************** DID YOU CALL ME **********************')
    console.log('************** DID YOU CALL ME **********************')
    console.log('************** DID YOU CALL ME **********************')
    console.log(msgList)
    console.log(x)
    console.log(y)
    console.log(msgList.animate({scroll}))*/
    $('.message-wrapper').animate({
      scrollTop: msgList.scrollHeight
    }, 50)
  }
})(jQuery, Drupal, drupalSettings)


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3B1c2hlci1qcy9kaXN0L3dlYi9wdXNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxJQUF5RDtBQUM3RDtBQUNBLE1BQU0sRUFLdUI7QUFDN0IsQ0FBQztBQUNELG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxnQ0FBZ0M7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLGtCQUFrQjtBQUNsRjtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlDQUFpQztBQUNsRix3SEFBd0gsbUJBQW1CLEVBQUU7QUFDN0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQixFQUFFO0FBQy9ELHlDQUF5QyxlQUFlO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsK0RBQStEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRCw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMseUJBQXlCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFCQUFxQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzQkFBc0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxpQ0FBaUM7O0FBRWhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsV0FBVztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5R0FBeUcsV0FBVztBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxjQUFjO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxJQUFJO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsdUJBQXVCLEVBQUU7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxpQ0FBaUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUNBQXVDO0FBQ25FLHVEQUF1RCwwQkFBMEI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRCw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRCw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDOzs7OztBQUtEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw2Q0FBNkMsc0JBQXNCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDRDQUE0QztBQUMxRTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQyx1QkFBdUIsS0FBSztBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7QUFLRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7QUFNRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9CQUFvQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiwwQ0FBMEMsa0NBQWtDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRDQUE0QztBQUM5RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esa0RBQWtEO0FBQ2xELGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDZCQUE2QjtBQUM3RTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsOENBQThDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFLHVDQUF1Qyw2Q0FBNkM7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsNkNBQTZDO0FBQy9IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSw0Q0FBNEM7QUFDakg7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHNDQUFzQztBQUN0QztBQUNBLEtBQUs7QUFDTCx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGNBQWM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxjQUFjO0FBQzFELHNEQUFzRCxjQUFjO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsOEJBQThCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsOEJBQThCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHNCQUFzQjtBQUN2Qjs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsZ0JBQWdCO0FBQ2hCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzQ0FBc0M7QUFDdkM7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFVBQVUsd0JBQXdCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsNEJBQTRCLEVBQUU7QUFDOUIsdUNBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0Q0FBNEM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEIscUNBQXFDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RCxtQ0FBbUM7QUFDbkMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87QUFDUDtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7QUNyOUlEOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsOERBQVc7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHlDQUF5QyxVQUFVO0FBQ25EO0FBQ0EsU0FBUztBQUNUOztBQUVBLHVEQUF1RCxVQUFVO0FBQ2pFO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELFFBQVE7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDIiwiZmlsZSI6ImNoYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jaGF0LmpzXCIpO1xuIiwiLyohXG4gKiBQdXNoZXIgSmF2YVNjcmlwdCBMaWJyYXJ5IHY3LjAuM1xuICogaHR0cHM6Ly9wdXNoZXIuY29tL1xuICpcbiAqIENvcHlyaWdodCAyMDIwLCBQdXNoZXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5jZS5cbiAqL1xuXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJQdXNoZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiUHVzaGVyXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gQ29weXJpZ2h0IChDKSAyMDE2IERtaXRyeSBDaGVzdG55a2hcbi8vIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFBhY2thZ2UgYmFzZTY0IGltcGxlbWVudHMgQmFzZTY0IGVuY29kaW5nIGFuZCBkZWNvZGluZy5cbiAqL1xuLy8gSW52YWxpZCBjaGFyYWN0ZXIgdXNlZCBpbiBkZWNvZGluZyB0byBpbmRpY2F0ZVxuLy8gdGhhdCB0aGUgY2hhcmFjdGVyIHRvIGRlY29kZSBpcyBvdXQgb2YgcmFuZ2Ugb2Zcbi8vIGFscGhhYmV0IGFuZCBjYW5ub3QgYmUgZGVjb2RlZC5cbnZhciBJTlZBTElEX0JZVEUgPSAyNTY7XG4vKipcbiAqIEltcGxlbWVudHMgc3RhbmRhcmQgQmFzZTY0IGVuY29kaW5nLlxuICpcbiAqIE9wZXJhdGVzIGluIGNvbnN0YW50IHRpbWUuXG4gKi9cbnZhciBDb2RlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPKGRjaGVzdCk6IG1ldGhvZHMgdG8gZW5jb2RlIGNodW5rLWJ5LWNodW5rLlxuICAgIGZ1bmN0aW9uIENvZGVyKF9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgIGlmIChfcGFkZGluZ0NoYXJhY3RlciA9PT0gdm9pZCAwKSB7IF9wYWRkaW5nQ2hhcmFjdGVyID0gXCI9XCI7IH1cbiAgICAgICAgdGhpcy5fcGFkZGluZ0NoYXJhY3RlciA9IF9wYWRkaW5nQ2hhcmFjdGVyO1xuICAgIH1cbiAgICBDb2Rlci5wcm90b3R5cGUuZW5jb2RlZExlbmd0aCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gKGxlbmd0aCAqIDggKyA1KSAvIDYgfCAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobGVuZ3RoICsgMikgLyAzICogNCB8IDA7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIG91dCA9IFwiXCI7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBkYXRhLmxlbmd0aCAtIDI7IGkgKz0gMykge1xuICAgICAgICAgICAgdmFyIGMgPSAoZGF0YVtpXSA8PCAxNikgfCAoZGF0YVtpICsgMV0gPDwgOCkgfCAoZGF0YVtpICsgMl0pO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDMgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAyICogNikgJiA2Myk7XG4gICAgICAgICAgICBvdXQgKz0gdGhpcy5fZW5jb2RlQnl0ZSgoYyA+Pj4gMSAqIDYpICYgNjMpO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDAgKiA2KSAmIDYzKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGVmdCA9IGRhdGEubGVuZ3RoIC0gaTtcbiAgICAgICAgaWYgKGxlZnQgPiAwKSB7XG4gICAgICAgICAgICB2YXIgYyA9IChkYXRhW2ldIDw8IDE2KSB8IChsZWZ0ID09PSAyID8gZGF0YVtpICsgMV0gPDwgOCA6IDApO1xuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX2VuY29kZUJ5dGUoKGMgPj4+IDMgKiA2KSAmIDYzKTtcbiAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAyICogNikgJiA2Myk7XG4gICAgICAgICAgICBpZiAobGVmdCA9PT0gMikge1xuICAgICAgICAgICAgICAgIG91dCArPSB0aGlzLl9lbmNvZGVCeXRlKChjID4+PiAxICogNikgJiA2Myk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgKz0gdGhpcy5fcGFkZGluZ0NoYXJhY3RlciB8fCBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0ICs9IHRoaXMuX3BhZGRpbmdDaGFyYWN0ZXIgfHwgXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLm1heERlY29kZWRMZW5ndGggPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy5fcGFkZGluZ0NoYXJhY3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIChsZW5ndGggKiA2ICsgNykgLyA4IHwgMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoIC8gNCAqIDMgfCAwO1xuICAgIH07XG4gICAgQ29kZXIucHJvdG90eXBlLmRlY29kZWRMZW5ndGggPSBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXhEZWNvZGVkTGVuZ3RoKHMubGVuZ3RoIC0gdGhpcy5fZ2V0UGFkZGluZ0xlbmd0aChzKSk7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgaWYgKHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhZGRpbmdMZW5ndGggPSB0aGlzLl9nZXRQYWRkaW5nTGVuZ3RoKHMpO1xuICAgICAgICB2YXIgbGVuZ3RoID0gcy5sZW5ndGggLSBwYWRkaW5nTGVuZ3RoO1xuICAgICAgICB2YXIgb3V0ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5tYXhEZWNvZGVkTGVuZ3RoKGxlbmd0aCkpO1xuICAgICAgICB2YXIgb3AgPSAwO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBoYXZlQmFkID0gMDtcbiAgICAgICAgdmFyIHYwID0gMCwgdjEgPSAwLCB2MiA9IDAsIHYzID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGggLSA0OyBpICs9IDQpIHtcbiAgICAgICAgICAgIHYwID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDApKTtcbiAgICAgICAgICAgIHYxID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDEpKTtcbiAgICAgICAgICAgIHYyID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDIpKTtcbiAgICAgICAgICAgIHYzID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDMpKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MCA8PCAyKSB8ICh2MSA+Pj4gNCk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjEgPDwgNCkgfCAodjIgPj4+IDIpO1xuICAgICAgICAgICAgb3V0W29wKytdID0gKHYyIDw8IDYpIHwgdjM7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYwICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MSAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjIgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgICAgICBoYXZlQmFkIHw9IHYzICYgSU5WQUxJRF9CWVRFO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpIDwgbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdjAgPSB0aGlzLl9kZWNvZGVDaGFyKHMuY2hhckNvZGVBdChpKSk7XG4gICAgICAgICAgICB2MSA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAxKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjAgPDwgMikgfCAodjEgPj4+IDQpO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MCAmIElOVkFMSURfQllURTtcbiAgICAgICAgICAgIGhhdmVCYWQgfD0gdjEgJiBJTlZBTElEX0JZVEU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPCBsZW5ndGggLSAyKSB7XG4gICAgICAgICAgICB2MiA9IHRoaXMuX2RlY29kZUNoYXIocy5jaGFyQ29kZUF0KGkgKyAyKSk7XG4gICAgICAgICAgICBvdXRbb3ArK10gPSAodjEgPDwgNCkgfCAodjIgPj4+IDIpO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MiAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA8IGxlbmd0aCAtIDMpIHtcbiAgICAgICAgICAgIHYzID0gdGhpcy5fZGVjb2RlQ2hhcihzLmNoYXJDb2RlQXQoaSArIDMpKTtcbiAgICAgICAgICAgIG91dFtvcCsrXSA9ICh2MiA8PCA2KSB8IHYzO1xuICAgICAgICAgICAgaGF2ZUJhZCB8PSB2MyAmIElOVkFMSURfQllURTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGF2ZUJhZCAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmFzZTY0Q29kZXI6IGluY29ycmVjdCBjaGFyYWN0ZXJzIGZvciBkZWNvZGluZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgLy8gU3RhbmRhcmQgZW5jb2RpbmcgaGF2ZSB0aGUgZm9sbG93aW5nIGVuY29kZWQvZGVjb2RlZCByYW5nZXMsXG4gICAgLy8gd2hpY2ggd2UgbmVlZCB0byBjb252ZXJ0IGJldHdlZW4uXG4gICAgLy9cbiAgICAvLyBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiAwMTIzNDU2Nzg5ICArICAgL1xuICAgIC8vIEluZGV4OiAgIDAgLSAyNSAgICAgICAgICAgICAgICAgICAgMjYgLSA1MSAgICAgICAgICAgICAgNTIgLSA2MSAgIDYyICA2M1xuICAgIC8vIEFTQ0lJOiAgNjUgLSA5MCAgICAgICAgICAgICAgICAgICAgOTcgLSAxMjIgICAgICAgICAgICAgNDggLSA1NyAgIDQzICA0N1xuICAgIC8vXG4gICAgLy8gRW5jb2RlIDYgYml0cyBpbiBiIGludG8gYSBuZXcgY2hhcmFjdGVyLlxuICAgIENvZGVyLnByb3RvdHlwZS5fZW5jb2RlQnl0ZSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIC8vIEVuY29kaW5nIHVzZXMgY29uc3RhbnQgdGltZSBvcGVyYXRpb25zIGFzIGZvbGxvd3M6XG4gICAgICAgIC8vXG4gICAgICAgIC8vIDEuIERlZmluZSBjb21wYXJpc29uIG9mIEEgd2l0aCBCIHVzaW5nIChBIC0gQikgPj4+IDg6XG4gICAgICAgIC8vICAgICAgICAgIGlmIEEgPiBCLCB0aGVuIHJlc3VsdCBpcyBwb3NpdGl2ZSBpbnRlZ2VyXG4gICAgICAgIC8vICAgICAgICAgIGlmIEEgPD0gQiwgdGhlbiByZXN1bHQgaXMgMFxuICAgICAgICAvL1xuICAgICAgICAvLyAyLiBEZWZpbmUgc2VsZWN0aW9uIG9mIEMgb3IgMCB1c2luZyBiaXR3aXNlIEFORDogWCAmIEM6XG4gICAgICAgIC8vICAgICAgICAgIGlmIFggPT0gMCwgdGhlbiByZXN1bHQgaXMgMFxuICAgICAgICAvLyAgICAgICAgICBpZiBYICE9IDAsIHRoZW4gcmVzdWx0IGlzIENcbiAgICAgICAgLy9cbiAgICAgICAgLy8gMy4gU3RhcnQgd2l0aCB0aGUgc21hbGxlc3QgY29tcGFyaXNvbiAoYiA+PSAwKSwgd2hpY2ggaXMgYWx3YXlzXG4gICAgICAgIC8vICAgIHRydWUsIHNvIHNldCB0aGUgcmVzdWx0IHRvIHRoZSBzdGFydGluZyBBU0NJSSB2YWx1ZSAoNjUpLlxuICAgICAgICAvL1xuICAgICAgICAvLyA0LiBDb250aW51ZSBjb21wYXJpbmcgYiB0byBoaWdoZXIgQVNDSUkgdmFsdWVzLCBhbmQgc2VsZWN0aW5nXG4gICAgICAgIC8vICAgIHplcm8gaWYgY29tcGFyaXNvbiBpc24ndCB0cnVlLCBvdGhlcndpc2Ugc2VsZWN0aW5nIGEgdmFsdWVcbiAgICAgICAgLy8gICAgdG8gYWRkIHRvIHJlc3VsdCwgd2hpY2g6XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICAgICAgIGEpIHVuZG9lcyB0aGUgcHJldmlvdXMgYWRkaXRpb25cbiAgICAgICAgLy8gICAgICAgICAgYikgcHJvdmlkZXMgbmV3IHZhbHVlIHRvIGFkZFxuICAgICAgICAvL1xuICAgICAgICB2YXIgcmVzdWx0ID0gYjtcbiAgICAgICAgLy8gYiA+PSAwXG4gICAgICAgIHJlc3VsdCArPSA2NTtcbiAgICAgICAgLy8gYiA+IDI1XG4gICAgICAgIHJlc3VsdCArPSAoKDI1IC0gYikgPj4+IDgpICYgKCgwIC0gNjUpIC0gMjYgKyA5Nyk7XG4gICAgICAgIC8vIGIgPiA1MVxuICAgICAgICByZXN1bHQgKz0gKCg1MSAtIGIpID4+PiA4KSAmICgoMjYgLSA5NykgLSA1MiArIDQ4KTtcbiAgICAgICAgLy8gYiA+IDYxXG4gICAgICAgIHJlc3VsdCArPSAoKDYxIC0gYikgPj4+IDgpICYgKCg1MiAtIDQ4KSAtIDYyICsgNDMpO1xuICAgICAgICAvLyBiID4gNjJcbiAgICAgICAgcmVzdWx0ICs9ICgoNjIgLSBiKSA+Pj4gOCkgJiAoKDYyIC0gNDMpIC0gNjMgKyA0Nyk7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHJlc3VsdCk7XG4gICAgfTtcbiAgICAvLyBEZWNvZGUgYSBjaGFyYWN0ZXIgY29kZSBpbnRvIGEgYnl0ZS5cbiAgICAvLyBNdXN0IHJldHVybiAyNTYgaWYgY2hhcmFjdGVyIGlzIG91dCBvZiBhbHBoYWJldCByYW5nZS5cbiAgICBDb2Rlci5wcm90b3R5cGUuX2RlY29kZUNoYXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICAvLyBEZWNvZGluZyB3b3JrcyBzaW1pbGFyIHRvIGVuY29kaW5nOiB1c2luZyB0aGUgc2FtZSBjb21wYXJpc29uXG4gICAgICAgIC8vIGZ1bmN0aW9uLCBidXQgbm93IGl0IHdvcmtzIG9uIHJhbmdlczogcmVzdWx0IGlzIGFsd2F5cyBpbmNyZW1lbnRlZFxuICAgICAgICAvLyBieSB2YWx1ZSwgYnV0IHRoaXMgdmFsdWUgYmVjb21lcyB6ZXJvIGlmIHRoZSByYW5nZSBpcyBub3RcbiAgICAgICAgLy8gc2F0aXNmaWVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBEZWNvZGluZyBzdGFydHMgd2l0aCBpbnZhbGlkIHZhbHVlLCAyNTYsIHdoaWNoIGlzIHRoZW5cbiAgICAgICAgLy8gc3VidHJhY3RlZCB3aGVuIHRoZSByYW5nZSBpcyBzYXRpc2ZpZWQuIElmIG5vbmUgb2YgdGhlIHJhbmdlc1xuICAgICAgICAvLyBhcHBseSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgMjU2LCB3aGljaCBpcyB0aGVuIGNoZWNrZWQgYnlcbiAgICAgICAgLy8gdGhlIGNhbGxlciB0byB0aHJvdyBlcnJvci5cbiAgICAgICAgdmFyIHJlc3VsdCA9IElOVkFMSURfQllURTsgLy8gc3RhcnQgd2l0aCBpbnZhbGlkIGNoYXJhY3RlclxuICAgICAgICAvLyBjID09IDQzIChjID4gNDIgYW5kIGMgPCA0NClcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQyIC0gYykgJiAoYyAtIDQ0KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDMgKyA2Mik7XG4gICAgICAgIC8vIGMgPT0gNDcgKGMgPiA0NiBhbmQgYyA8IDQ4KVxuICAgICAgICByZXN1bHQgKz0gKCgoNDYgLSBjKSAmIChjIC0gNDgpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA0NyArIDYzKTtcbiAgICAgICAgLy8gYyA+IDQ3IGFuZCBjIDwgNThcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ3IC0gYykgJiAoYyAtIDU4KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDggKyA1Mik7XG4gICAgICAgIC8vIGMgPiA2NCBhbmQgYyA8IDkxXG4gICAgICAgIHJlc3VsdCArPSAoKCg2NCAtIGMpICYgKGMgLSA5MSkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDY1ICsgMCk7XG4gICAgICAgIC8vIGMgPiA5NiBhbmQgYyA8IDEyM1xuICAgICAgICByZXN1bHQgKz0gKCgoOTYgLSBjKSAmIChjIC0gMTIzKSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gOTcgKyAyNik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDb2Rlci5wcm90b3R5cGUuX2dldFBhZGRpbmdMZW5ndGggPSBmdW5jdGlvbiAocykge1xuICAgICAgICB2YXIgcGFkZGluZ0xlbmd0aCA9IDA7XG4gICAgICAgIGlmICh0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChzW2ldICE9PSB0aGlzLl9wYWRkaW5nQ2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYWRkaW5nTGVuZ3RoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocy5sZW5ndGggPCA0IHx8IHBhZGRpbmdMZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQmFzZTY0Q29kZXI6IGluY29ycmVjdCBwYWRkaW5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWRkaW5nTGVuZ3RoO1xuICAgIH07XG4gICAgcmV0dXJuIENvZGVyO1xufSgpKTtcbmV4cG9ydHMuQ29kZXIgPSBDb2RlcjtcbnZhciBzdGRDb2RlciA9IG5ldyBDb2RlcigpO1xuZnVuY3Rpb24gZW5jb2RlKGRhdGEpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZW5jb2RlKGRhdGEpO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG5mdW5jdGlvbiBkZWNvZGUocykge1xuICAgIHJldHVybiBzdGRDb2Rlci5kZWNvZGUocyk7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbi8qKlxuICogSW1wbGVtZW50cyBVUkwtc2FmZSBCYXNlNjQgZW5jb2RpbmcuXG4gKiAoU2FtZSBhcyBCYXNlNjQsIGJ1dCAnKycgaXMgcmVwbGFjZWQgd2l0aCAnLScsIGFuZCAnLycgd2l0aCAnXycpLlxuICpcbiAqIE9wZXJhdGVzIGluIGNvbnN0YW50IHRpbWUuXG4gKi9cbnZhciBVUkxTYWZlQ29kZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFVSTFNhZmVDb2RlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBVUkxTYWZlQ29kZXIoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLy8gVVJMLXNhZmUgZW5jb2RpbmcgaGF2ZSB0aGUgZm9sbG93aW5nIGVuY29kZWQvZGVjb2RlZCByYW5nZXM6XG4gICAgLy9cbiAgICAvLyBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWiBhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eiAwMTIzNDU2Nzg5ICAtICAgX1xuICAgIC8vIEluZGV4OiAgIDAgLSAyNSAgICAgICAgICAgICAgICAgICAgMjYgLSA1MSAgICAgICAgICAgICAgNTIgLSA2MSAgIDYyICA2M1xuICAgIC8vIEFTQ0lJOiAgNjUgLSA5MCAgICAgICAgICAgICAgICAgICAgOTcgLSAxMjIgICAgICAgICAgICAgNDggLSA1NyAgIDQ1ICA5NVxuICAgIC8vXG4gICAgVVJMU2FmZUNvZGVyLnByb3RvdHlwZS5fZW5jb2RlQnl0ZSA9IGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBiO1xuICAgICAgICAvLyBiID49IDBcbiAgICAgICAgcmVzdWx0ICs9IDY1O1xuICAgICAgICAvLyBiID4gMjVcbiAgICAgICAgcmVzdWx0ICs9ICgoMjUgLSBiKSA+Pj4gOCkgJiAoKDAgLSA2NSkgLSAyNiArIDk3KTtcbiAgICAgICAgLy8gYiA+IDUxXG4gICAgICAgIHJlc3VsdCArPSAoKDUxIC0gYikgPj4+IDgpICYgKCgyNiAtIDk3KSAtIDUyICsgNDgpO1xuICAgICAgICAvLyBiID4gNjFcbiAgICAgICAgcmVzdWx0ICs9ICgoNjEgLSBiKSA+Pj4gOCkgJiAoKDUyIC0gNDgpIC0gNjIgKyA0NSk7XG4gICAgICAgIC8vIGIgPiA2MlxuICAgICAgICByZXN1bHQgKz0gKCg2MiAtIGIpID4+PiA4KSAmICgoNjIgLSA0NSkgLSA2MyArIDk1KTtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocmVzdWx0KTtcbiAgICB9O1xuICAgIFVSTFNhZmVDb2Rlci5wcm90b3R5cGUuX2RlY29kZUNoYXIgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gSU5WQUxJRF9CWVRFO1xuICAgICAgICAvLyBjID09IDQ1IChjID4gNDQgYW5kIGMgPCA0NilcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ0IC0gYykgJiAoYyAtIDQ2KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDUgKyA2Mik7XG4gICAgICAgIC8vIGMgPT0gOTUgKGMgPiA5NCBhbmQgYyA8IDk2KVxuICAgICAgICByZXN1bHQgKz0gKCgoOTQgLSBjKSAmIChjIC0gOTYpKSA+Pj4gOCkgJiAoLUlOVkFMSURfQllURSArIGMgLSA5NSArIDYzKTtcbiAgICAgICAgLy8gYyA+IDQ3IGFuZCBjIDwgNThcbiAgICAgICAgcmVzdWx0ICs9ICgoKDQ3IC0gYykgJiAoYyAtIDU4KSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gNDggKyA1Mik7XG4gICAgICAgIC8vIGMgPiA2NCBhbmQgYyA8IDkxXG4gICAgICAgIHJlc3VsdCArPSAoKCg2NCAtIGMpICYgKGMgLSA5MSkpID4+PiA4KSAmICgtSU5WQUxJRF9CWVRFICsgYyAtIDY1ICsgMCk7XG4gICAgICAgIC8vIGMgPiA5NiBhbmQgYyA8IDEyM1xuICAgICAgICByZXN1bHQgKz0gKCgoOTYgLSBjKSAmIChjIC0gMTIzKSkgPj4+IDgpICYgKC1JTlZBTElEX0JZVEUgKyBjIC0gOTcgKyAyNik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gVVJMU2FmZUNvZGVyO1xufShDb2RlcikpO1xuZXhwb3J0cy5VUkxTYWZlQ29kZXIgPSBVUkxTYWZlQ29kZXI7XG52YXIgdXJsU2FmZUNvZGVyID0gbmV3IFVSTFNhZmVDb2RlcigpO1xuZnVuY3Rpb24gZW5jb2RlVVJMU2FmZShkYXRhKSB7XG4gICAgcmV0dXJuIHVybFNhZmVDb2Rlci5lbmNvZGUoZGF0YSk7XG59XG5leHBvcnRzLmVuY29kZVVSTFNhZmUgPSBlbmNvZGVVUkxTYWZlO1xuZnVuY3Rpb24gZGVjb2RlVVJMU2FmZShzKSB7XG4gICAgcmV0dXJuIHVybFNhZmVDb2Rlci5kZWNvZGUocyk7XG59XG5leHBvcnRzLmRlY29kZVVSTFNhZmUgPSBkZWNvZGVVUkxTYWZlO1xuZXhwb3J0cy5lbmNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHJldHVybiBzdGRDb2Rlci5lbmNvZGVkTGVuZ3RoKGxlbmd0aCk7XG59O1xuZXhwb3J0cy5tYXhEZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKGxlbmd0aCkge1xuICAgIHJldHVybiBzdGRDb2Rlci5tYXhEZWNvZGVkTGVuZ3RoKGxlbmd0aCk7XG59O1xuZXhwb3J0cy5kZWNvZGVkTGVuZ3RoID0gZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gc3RkQ29kZXIuZGVjb2RlZExlbmd0aChzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlNjQuanMubWFwXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gQ29weXJpZ2h0IChDKSAyMDE2IERtaXRyeSBDaGVzdG55a2hcbi8vIE1JVCBMaWNlbnNlLiBTZWUgTElDRU5TRSBmaWxlIGZvciBkZXRhaWxzLlxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBQYWNrYWdlIHV0ZjggaW1wbGVtZW50cyBVVEYtOCBlbmNvZGluZyBhbmQgZGVjb2RpbmcuXG4gKi9cbnZhciBJTlZBTElEX1VURjE2ID0gXCJ1dGY4OiBpbnZhbGlkIHN0cmluZ1wiO1xudmFyIElOVkFMSURfVVRGOCA9IFwidXRmODogaW52YWxpZCBzb3VyY2UgZW5jb2RpbmdcIjtcbi8qKlxuICogRW5jb2RlcyB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gVVRGLTggYnl0ZSBhcnJheS5cbiAqIFRocm93cyBpZiB0aGUgc291cmNlIHN0cmluZyBoYXMgaW52YWxpZCBVVEYtMTYgZW5jb2RpbmcuXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShzKSB7XG4gICAgLy8gQ2FsY3VsYXRlIHJlc3VsdCBsZW5ndGggYW5kIGFsbG9jYXRlIG91dHB1dCBhcnJheS5cbiAgICAvLyBlbmNvZGVkTGVuZ3RoKCkgYWxzbyB2YWxpZGF0ZXMgc3RyaW5nIGFuZCB0aHJvd3MgZXJyb3JzLFxuICAgIC8vIHNvIHdlIGRvbid0IG5lZWQgcmVwZWF0IHZhbGlkYXRpb24gaGVyZS5cbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoZW5jb2RlZExlbmd0aChzKSk7XG4gICAgdmFyIHBvcyA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4YzAgfCBjID4+IDY7XG4gICAgICAgICAgICBhcnJbcG9zKytdID0gMHg4MCB8IGMgJiAweDNmO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweGQ4MDApIHtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweGUwIHwgYyA+PiAxMjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgKGMgPj4gNikgJiAweDNmO1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4ODAgfCBjICYgMHgzZjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGkrKzsgLy8gZ2V0IG9uZSBtb3JlIGNoYXJhY3RlclxuICAgICAgICAgICAgYyA9IChjICYgMHgzZmYpIDw8IDEwO1xuICAgICAgICAgICAgYyB8PSBzLmNoYXJDb2RlQXQoaSkgJiAweDNmZjtcbiAgICAgICAgICAgIGMgKz0gMHgxMDAwMDtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweGYwIHwgYyA+PiAxODtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgKGMgPj4gMTIpICYgMHgzZjtcbiAgICAgICAgICAgIGFycltwb3MrK10gPSAweDgwIHwgKGMgPj4gNikgJiAweDNmO1xuICAgICAgICAgICAgYXJyW3BvcysrXSA9IDB4ODAgfCBjICYgMHgzZjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuZXhwb3J0cy5lbmNvZGUgPSBlbmNvZGU7XG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBieXRlcyByZXF1aXJlZCB0byBlbmNvZGUgdGhlIGdpdmVuIHN0cmluZyBpbnRvIFVURi04LlxuICogVGhyb3dzIGlmIHRoZSBzb3VyY2Ugc3RyaW5nIGhhcyBpbnZhbGlkIFVURi0xNiBlbmNvZGluZy5cbiAqL1xuZnVuY3Rpb24gZW5jb2RlZExlbmd0aChzKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDB4ODApIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDB4ZDgwMCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IDM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8PSAweGRmZmYpIHtcbiAgICAgICAgICAgIGlmIChpID49IHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjE2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKzsgLy8gXCJlYXRcIiBuZXh0IGNoYXJhY3RlclxuICAgICAgICAgICAgcmVzdWx0ICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEYxNik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMuZW5jb2RlZExlbmd0aCA9IGVuY29kZWRMZW5ndGg7XG4vKipcbiAqIERlY29kZXMgdGhlIGdpdmVuIGJ5dGUgYXJyYXkgZnJvbSBVVEYtOCBpbnRvIGEgc3RyaW5nLlxuICogVGhyb3dzIGlmIGVuY29kaW5nIGlzIGludmFsaWQuXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShhcnIpIHtcbiAgICB2YXIgY2hhcnMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgYiA9IGFycltpXTtcbiAgICAgICAgaWYgKGIgJiAweDgwKSB7XG4gICAgICAgICAgICB2YXIgbWluID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGIgPCAweGUwKSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCAxIG1vcmUgYnl0ZS5cbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbjEgPSBhcnJbKytpXTtcbiAgICAgICAgICAgICAgICBpZiAoKG4xICYgMHhjMCkgIT09IDB4ODApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGIgPSAoYiAmIDB4MWYpIDw8IDYgfCAobjEgJiAweDNmKTtcbiAgICAgICAgICAgICAgICBtaW4gPSAweDgwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYiA8IDB4ZjApIHtcbiAgICAgICAgICAgICAgICAvLyBOZWVkIDIgbW9yZSBieXRlcy5cbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBhcnIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG4xID0gYXJyWysraV07XG4gICAgICAgICAgICAgICAgdmFyIG4yID0gYXJyWysraV07XG4gICAgICAgICAgICAgICAgaWYgKChuMSAmIDB4YzApICE9PSAweDgwIHx8IChuMiAmIDB4YzApICE9PSAweDgwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihJTlZBTElEX1VURjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBiID0gKGIgJiAweDBmKSA8PCAxMiB8IChuMSAmIDB4M2YpIDw8IDYgfCAobjIgJiAweDNmKTtcbiAgICAgICAgICAgICAgICBtaW4gPSAweDgwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGIgPCAweGY4KSB7XG4gICAgICAgICAgICAgICAgLy8gTmVlZCAzIG1vcmUgYnl0ZXMuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gYXJyLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBuMSA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIHZhciBuMiA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIHZhciBuMyA9IGFyclsrK2ldO1xuICAgICAgICAgICAgICAgIGlmICgobjEgJiAweGMwKSAhPT0gMHg4MCB8fCAobjIgJiAweGMwKSAhPT0gMHg4MCB8fCAobjMgJiAweGMwKSAhPT0gMHg4MCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiA9IChiICYgMHgwZikgPDwgMTggfCAobjEgJiAweDNmKSA8PCAxMiB8IChuMiAmIDB4M2YpIDw8IDYgfCAobjMgJiAweDNmKTtcbiAgICAgICAgICAgICAgICBtaW4gPSAweDEwMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYiA8IG1pbiB8fCAoYiA+PSAweGQ4MDAgJiYgYiA8PSAweGRmZmYpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKElOVkFMSURfVVRGOCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYiA+PSAweDEwMDAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU3Vycm9nYXRlIHBhaXIuXG4gICAgICAgICAgICAgICAgaWYgKGIgPiAweDEwZmZmZikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoSU5WQUxJRF9VVEY4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYiAtPSAweDEwMDAwO1xuICAgICAgICAgICAgICAgIGNoYXJzLnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgfCAoYiA+PiAxMCkpKTtcbiAgICAgICAgICAgICAgICBiID0gMHhkYzAwIHwgKGIgJiAweDNmZik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGIpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oXCJcIik7XG59XG5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0ZjguanMubWFwXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyByZXF1aXJlZCBzbyB3ZSBkb24ndCBoYXZlIHRvIGRvIHJlcXVpcmUoJ3B1c2hlcicpLmRlZmF1bHQgZXRjLlxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpLmRlZmF1bHQ7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL3NjcmlwdF9yZWNlaXZlcl9mYWN0b3J5LnRzXG52YXIgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTY3JpcHRSZWNlaXZlckZhY3RvcnkocHJlZml4LCBuYW1lKSB7XG4gICAgICAgIHRoaXMubGFzdElkID0gMDtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIFNjcmlwdFJlY2VpdmVyRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubGFzdElkKys7XG4gICAgICAgIHZhciBudW1iZXIgPSB0aGlzLmxhc3RJZDtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5wcmVmaXggKyBudW1iZXI7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lICsgJ1snICsgbnVtYmVyICsgJ10nO1xuICAgICAgICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhciBjYWxsYmFja1dyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpc1tudW1iZXJdID0gY2FsbGJhY2tXcmFwcGVyO1xuICAgICAgICByZXR1cm4geyBudW1iZXI6IG51bWJlciwgaWQ6IGlkLCBuYW1lOiBuYW1lLCBjYWxsYmFjazogY2FsbGJhY2tXcmFwcGVyIH07XG4gICAgfTtcbiAgICBTY3JpcHRSZWNlaXZlckZhY3RvcnkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChyZWNlaXZlcikge1xuICAgICAgICBkZWxldGUgdGhpc1tyZWNlaXZlci5udW1iZXJdO1xuICAgIH07XG4gICAgcmV0dXJuIFNjcmlwdFJlY2VpdmVyRmFjdG9yeTtcbn0oKSk7XG5cbnZhciBTY3JpcHRSZWNlaXZlcnMgPSBuZXcgU2NyaXB0UmVjZWl2ZXJGYWN0b3J5KCdfcHVzaGVyX3NjcmlwdF8nLCAnUHVzaGVyLlNjcmlwdFJlY2VpdmVycycpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2RlZmF1bHRzLnRzXG52YXIgRGVmYXVsdHMgPSB7XG4gICAgVkVSU0lPTjogXCI3LjAuM1wiLFxuICAgIFBST1RPQ09MOiA3LFxuICAgIHdzUG9ydDogODAsXG4gICAgd3NzUG9ydDogNDQzLFxuICAgIHdzUGF0aDogJycsXG4gICAgaHR0cEhvc3Q6ICdzb2NranMucHVzaGVyLmNvbScsXG4gICAgaHR0cFBvcnQ6IDgwLFxuICAgIGh0dHBzUG9ydDogNDQzLFxuICAgIGh0dHBQYXRoOiAnL3B1c2hlcicsXG4gICAgc3RhdHNfaG9zdDogJ3N0YXRzLnB1c2hlci5jb20nLFxuICAgIGF1dGhFbmRwb2ludDogJy9wdXNoZXIvYXV0aCcsXG4gICAgYXV0aFRyYW5zcG9ydDogJ2FqYXgnLFxuICAgIGFjdGl2aXR5VGltZW91dDogMTIwMDAwLFxuICAgIHBvbmdUaW1lb3V0OiAzMDAwMCxcbiAgICB1bmF2YWlsYWJsZVRpbWVvdXQ6IDEwMDAwLFxuICAgIGNsdXN0ZXI6ICdtdDEnLFxuICAgIGNkbl9odHRwOiBcImh0dHA6Ly9qcy5wdXNoZXIuY29tXCIsXG4gICAgY2RuX2h0dHBzOiBcImh0dHBzOi8vanMucHVzaGVyLmNvbVwiLFxuICAgIGRlcGVuZGVuY3lfc3VmZml4OiBcIlwiXG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVmYXVsdHMgPSAoRGVmYXVsdHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvZG9tL2RlcGVuZGVuY3lfbG9hZGVyLnRzXG5cblxudmFyIGRlcGVuZGVuY3lfbG9hZGVyX0RlcGVuZGVuY3lMb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlcGVuZGVuY3lMb2FkZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLnJlY2VpdmVycyA9IG9wdGlvbnMucmVjZWl2ZXJzIHx8IFNjcmlwdFJlY2VpdmVycztcbiAgICAgICAgdGhpcy5sb2FkaW5nID0ge307XG4gICAgfVxuICAgIERlcGVuZGVuY3lMb2FkZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbiAobmFtZSwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoc2VsZi5sb2FkaW5nW25hbWVdICYmIHNlbGYubG9hZGluZ1tuYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWxmLmxvYWRpbmdbbmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLmxvYWRpbmdbbmFtZV0gPSBbY2FsbGJhY2tdO1xuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBydW50aW1lLmNyZWF0ZVNjcmlwdFJlcXVlc3Qoc2VsZi5nZXRQYXRoKG5hbWUsIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIHZhciByZWNlaXZlciA9IHNlbGYucmVjZWl2ZXJzLmNyZWF0ZShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnJlY2VpdmVycy5yZW1vdmUocmVjZWl2ZXIpO1xuICAgICAgICAgICAgICAgIGlmIChzZWxmLmxvYWRpbmdbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHNlbGYubG9hZGluZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNlbGYubG9hZGluZ1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NDYWxsYmFjayA9IGZ1bmN0aW9uICh3YXNTdWNjZXNzZnVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdhc1N1Y2Nlc3NmdWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LmNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXShlcnJvciwgc3VjY2Vzc0NhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKHJlY2VpdmVyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGVwZW5kZW5jeUxvYWRlci5wcm90b3R5cGUuZ2V0Um9vdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBjZG47XG4gICAgICAgIHZhciBwcm90b2NvbCA9IHJ1bnRpbWUuZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5wcm90b2NvbDtcbiAgICAgICAgaWYgKChvcHRpb25zICYmIG9wdGlvbnMudXNlVExTKSB8fCBwcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcbiAgICAgICAgICAgIGNkbiA9IHRoaXMub3B0aW9ucy5jZG5faHR0cHM7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjZG4gPSB0aGlzLm9wdGlvbnMuY2RuX2h0dHA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNkbi5yZXBsYWNlKC9cXC8qJC8sICcnKSArICcvJyArIHRoaXMub3B0aW9ucy52ZXJzaW9uO1xuICAgIH07XG4gICAgRGVwZW5kZW5jeUxvYWRlci5wcm90b3R5cGUuZ2V0UGF0aCA9IGZ1bmN0aW9uIChuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFJvb3Qob3B0aW9ucykgKyAnLycgKyBuYW1lICsgdGhpcy5vcHRpb25zLnN1ZmZpeCArICcuanMnO1xuICAgIH07XG4gICAgcmV0dXJuIERlcGVuZGVuY3lMb2FkZXI7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgZGVwZW5kZW5jeV9sb2FkZXIgPSAoZGVwZW5kZW5jeV9sb2FkZXJfRGVwZW5kZW5jeUxvYWRlcik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kb20vZGVwZW5kZW5jaWVzLnRzXG5cblxuXG52YXIgRGVwZW5kZW5jaWVzUmVjZWl2ZXJzID0gbmV3IFNjcmlwdFJlY2VpdmVyRmFjdG9yeSgnX3B1c2hlcl9kZXBlbmRlbmNpZXMnLCAnUHVzaGVyLkRlcGVuZGVuY2llc1JlY2VpdmVycycpO1xudmFyIERlcGVuZGVuY2llcyA9IG5ldyBkZXBlbmRlbmN5X2xvYWRlcih7XG4gICAgY2RuX2h0dHA6IGRlZmF1bHRzLmNkbl9odHRwLFxuICAgIGNkbl9odHRwczogZGVmYXVsdHMuY2RuX2h0dHBzLFxuICAgIHZlcnNpb246IGRlZmF1bHRzLlZFUlNJT04sXG4gICAgc3VmZml4OiBkZWZhdWx0cy5kZXBlbmRlbmN5X3N1ZmZpeCxcbiAgICByZWNlaXZlcnM6IERlcGVuZGVuY2llc1JlY2VpdmVyc1xufSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvdXJsX3N0b3JlLnRzXG52YXIgdXJsU3RvcmUgPSB7XG4gICAgYmFzZVVybDogJ2h0dHBzOi8vcHVzaGVyLmNvbScsXG4gICAgdXJsczoge1xuICAgICAgICBhdXRoZW50aWNhdGlvbkVuZHBvaW50OiB7XG4gICAgICAgICAgICBwYXRoOiAnL2RvY3MvYXV0aGVudGljYXRpbmdfdXNlcnMnXG4gICAgICAgIH0sXG4gICAgICAgIGphdmFzY3JpcHRRdWlja1N0YXJ0OiB7XG4gICAgICAgICAgICBwYXRoOiAnL2RvY3MvamF2YXNjcmlwdF9xdWlja19zdGFydCdcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcmluZ0NsaWVudEV2ZW50czoge1xuICAgICAgICAgICAgcGF0aDogJy9kb2NzL2NsaWVudF9hcGlfZ3VpZGUvY2xpZW50X2V2ZW50cyN0cmlnZ2VyLWV2ZW50cydcbiAgICAgICAgfSxcbiAgICAgICAgZW5jcnlwdGVkQ2hhbm5lbFN1cHBvcnQ6IHtcbiAgICAgICAgICAgIGZ1bGxVcmw6ICdodHRwczovL2dpdGh1Yi5jb20vcHVzaGVyL3B1c2hlci1qcy90cmVlL2NjNDkxMDE1MzcxYTRiZGU1NzQzZDFjODdhMGZiYWMwZmViNTMxOTUjZW5jcnlwdGVkLWNoYW5uZWwtc3VwcG9ydCdcbiAgICAgICAgfVxuICAgIH1cbn07XG52YXIgYnVpbGRMb2dTdWZmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIHVybFByZWZpeCA9ICdTZWU6JztcbiAgICB2YXIgdXJsT2JqID0gdXJsU3RvcmUudXJsc1trZXldO1xuICAgIGlmICghdXJsT2JqKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgdmFyIHVybDtcbiAgICBpZiAodXJsT2JqLmZ1bGxVcmwpIHtcbiAgICAgICAgdXJsID0gdXJsT2JqLmZ1bGxVcmw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHVybE9iai5wYXRoKSB7XG4gICAgICAgIHVybCA9IHVybFN0b3JlLmJhc2VVcmwgKyB1cmxPYmoucGF0aDtcbiAgICB9XG4gICAgaWYgKCF1cmwpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gdXJsUHJlZml4ICsgXCIgXCIgKyB1cmw7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdXJsX3N0b3JlID0gKHsgYnVpbGRMb2dTdWZmaXg6IGJ1aWxkTG9nU3VmZml4IH0pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Vycm9ycy50c1xudmFyIF9fZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIEJhZEV2ZW50TmFtZSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJhZEV2ZW50TmFtZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCYWRFdmVudE5hbWUobXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQmFkRXZlbnROYW1lO1xufShFcnJvcikpO1xuXG52YXIgUmVxdWVzdFRpbWVkT3V0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmVxdWVzdFRpbWVkT3V0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFJlcXVlc3RUaW1lZE91dChtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBSZXF1ZXN0VGltZWRPdXQ7XG59KEVycm9yKSk7XG5cbnZhciBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRyYW5zcG9ydFByaW9yaXR5VG9vTG93LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydFByaW9yaXR5VG9vTG93KG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFRyYW5zcG9ydFByaW9yaXR5VG9vTG93O1xufShFcnJvcikpO1xuXG52YXIgVHJhbnNwb3J0Q2xvc2VkID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHJhbnNwb3J0Q2xvc2VkLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydENsb3NlZChtc2cpIHtcbiAgICAgICAgdmFyIF9uZXdUYXJnZXQgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBtc2cpIHx8IHRoaXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBUcmFuc3BvcnRDbG9zZWQ7XG59KEVycm9yKSk7XG5cbnZhciBVbnN1cHBvcnRlZEZlYXR1cmUgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVbnN1cHBvcnRlZEZlYXR1cmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVW5zdXBwb3J0ZWRGZWF0dXJlKG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFVuc3VwcG9ydGVkRmVhdHVyZTtcbn0oRXJyb3IpKTtcblxudmFyIFVuc3VwcG9ydGVkVHJhbnNwb3J0ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVW5zdXBwb3J0ZWRUcmFuc3BvcnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVW5zdXBwb3J0ZWRUcmFuc3BvcnQobXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoX3RoaXMsIF9uZXdUYXJnZXQucHJvdG90eXBlKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gVW5zdXBwb3J0ZWRUcmFuc3BvcnQ7XG59KEVycm9yKSk7XG5cbnZhciBVbnN1cHBvcnRlZFN0cmF0ZWd5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVW5zdXBwb3J0ZWRTdHJhdGVneSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBVbnN1cHBvcnRlZFN0cmF0ZWd5KG1zZykge1xuICAgICAgICB2YXIgX25ld1RhcmdldCA9IHRoaXMuY29uc3RydWN0b3I7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1zZykgfHwgdGhpcztcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBfbmV3VGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFVuc3VwcG9ydGVkU3RyYXRlZ3k7XG59KEVycm9yKSk7XG5cbnZhciBIVFRQQXV0aEVycm9yID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSFRUUEF1dGhFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIVFRQQXV0aEVycm9yKHN0YXR1cywgbXNnKSB7XG4gICAgICAgIHZhciBfbmV3VGFyZ2V0ID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbXNnKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgX25ld1RhcmdldC5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBIVFRQQXV0aEVycm9yO1xufShFcnJvcikpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL2lzb21vcnBoaWMvYXV0aC94aHJfYXV0aC50c1xuXG5cblxudmFyIGFqYXggPSBmdW5jdGlvbiAoY29udGV4dCwgc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLCB4aHI7XG4gICAgeGhyID0gcnVudGltZS5jcmVhdGVYSFIoKTtcbiAgICB4aHIub3BlbignUE9TVCcsIHNlbGYub3B0aW9ucy5hdXRoRW5kcG9pbnQsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgZm9yICh2YXIgaGVhZGVyTmFtZSBpbiB0aGlzLmF1dGhPcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgdGhpcy5hdXRoT3B0aW9ucy5oZWFkZXJzW2hlYWRlck5hbWVdKTtcbiAgICB9XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgSFRUUEF1dGhFcnJvcigyMDAsICdKU09OIHJldHVybmVkIGZyb20gYXV0aCBlbmRwb2ludCB3YXMgaW52YWxpZCwgeWV0IHN0YXR1cyBjb2RlIHdhcyAyMDAuIERhdGEgd2FzOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQpLCB7IGF1dGg6ICcnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2F1dGhlbnRpY2F0aW9uRW5kcG9pbnQnKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgSFRUUEF1dGhFcnJvcih4aHIuc3RhdHVzLCAnVW5hYmxlIHRvIHJldHJpZXZlIGF1dGggc3RyaW5nIGZyb20gYXV0aCBlbmRwb2ludCAtICcgK1xuICAgICAgICAgICAgICAgICAgICAoXCJyZWNlaXZlZCBzdGF0dXM6IFwiICsgeGhyLnN0YXR1cyArIFwiIGZyb20gXCIgKyBzZWxmLm9wdGlvbnMuYXV0aEVuZHBvaW50ICsgXCIuIFwiKSArXG4gICAgICAgICAgICAgICAgICAgIChcIkNsaWVudHMgbXVzdCBiZSBhdXRoZW50aWNhdGVkIHRvIGpvaW4gcHJpdmF0ZSBvciBwcmVzZW5jZSBjaGFubmVscy4gXCIgKyBzdWZmaXgpKSwgeyBhdXRoOiAnJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgeGhyLnNlbmQodGhpcy5jb21wb3NlUXVlcnkoc29ja2V0SWQpKTtcbiAgICByZXR1cm4geGhyO1xufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHhocl9hdXRoID0gKGFqYXgpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Jhc2U2NC50c1xuZnVuY3Rpb24gZW5jb2RlKHMpIHtcbiAgICByZXR1cm4gYnRvYSh1dG9iKHMpKTtcbn1cbnZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyIGI2NGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xudmFyIGI2NHRhYiA9IHt9O1xuZm9yICh2YXIgYmFzZTY0X2kgPSAwLCBsID0gYjY0Y2hhcnMubGVuZ3RoOyBiYXNlNjRfaSA8IGw7IGJhc2U2NF9pKyspIHtcbiAgICBiNjR0YWJbYjY0Y2hhcnMuY2hhckF0KGJhc2U2NF9pKV0gPSBiYXNlNjRfaTtcbn1cbnZhciBjYl91dG9iID0gZnVuY3Rpb24gKGMpIHtcbiAgICB2YXIgY2MgPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIGNjIDwgMHg4MFxuICAgICAgICA/IGNcbiAgICAgICAgOiBjYyA8IDB4ODAwXG4gICAgICAgICAgICA/IGZyb21DaGFyQ29kZSgweGMwIHwgKGNjID4+PiA2KSkgKyBmcm9tQ2hhckNvZGUoMHg4MCB8IChjYyAmIDB4M2YpKVxuICAgICAgICAgICAgOiBmcm9tQ2hhckNvZGUoMHhlMCB8ICgoY2MgPj4+IDEyKSAmIDB4MGYpKSArXG4gICAgICAgICAgICAgICAgZnJvbUNoYXJDb2RlKDB4ODAgfCAoKGNjID4+PiA2KSAmIDB4M2YpKSArXG4gICAgICAgICAgICAgICAgZnJvbUNoYXJDb2RlKDB4ODAgfCAoY2MgJiAweDNmKSk7XG59O1xudmFyIHV0b2IgPSBmdW5jdGlvbiAodSkge1xuICAgIHJldHVybiB1LnJlcGxhY2UoL1teXFx4MDAtXFx4N0ZdL2csIGNiX3V0b2IpO1xufTtcbnZhciBjYl9lbmNvZGUgPSBmdW5jdGlvbiAoY2NjKSB7XG4gICAgdmFyIHBhZGxlbiA9IFswLCAyLCAxXVtjY2MubGVuZ3RoICUgM107XG4gICAgdmFyIG9yZCA9IChjY2MuY2hhckNvZGVBdCgwKSA8PCAxNikgfFxuICAgICAgICAoKGNjYy5sZW5ndGggPiAxID8gY2NjLmNoYXJDb2RlQXQoMSkgOiAwKSA8PCA4KSB8XG4gICAgICAgIChjY2MubGVuZ3RoID4gMiA/IGNjYy5jaGFyQ29kZUF0KDIpIDogMCk7XG4gICAgdmFyIGNoYXJzID0gW1xuICAgICAgICBiNjRjaGFycy5jaGFyQXQob3JkID4+PiAxOCksXG4gICAgICAgIGI2NGNoYXJzLmNoYXJBdCgob3JkID4+PiAxMikgJiA2MyksXG4gICAgICAgIHBhZGxlbiA+PSAyID8gJz0nIDogYjY0Y2hhcnMuY2hhckF0KChvcmQgPj4+IDYpICYgNjMpLFxuICAgICAgICBwYWRsZW4gPj0gMSA/ICc9JyA6IGI2NGNoYXJzLmNoYXJBdChvcmQgJiA2MylcbiAgICBdO1xuICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbn07XG52YXIgYnRvYSA9IHdpbmRvdy5idG9hIHx8XG4gICAgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGIucmVwbGFjZSgvW1xcc1xcU117MSwzfS9nLCBjYl9lbmNvZGUpO1xuICAgIH07XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvdGltZXJzL2Fic3RyYWN0X3RpbWVyLnRzXG52YXIgVGltZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRpbWVyKHNldCwgY2xlYXIsIGRlbGF5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyID0gY2xlYXI7XG4gICAgICAgIHRoaXMudGltZXIgPSBzZXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudGltZXIgPSBjYWxsYmFjayhfdGhpcy50aW1lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG4gICAgVGltZXIucHJvdG90eXBlLmlzUnVubmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXIgIT09IG51bGw7XG4gICAgfTtcbiAgICBUaW1lci5wcm90b3R5cGUuZW5zdXJlQWJvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFRpbWVyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGFic3RyYWN0X3RpbWVyID0gKFRpbWVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy90aW1lcnMvaW5kZXgudHNcbnZhciB0aW1lcnNfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5mdW5jdGlvbiB0aW1lcnNfY2xlYXJUaW1lb3V0KHRpbWVyKSB7XG4gICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG59XG5mdW5jdGlvbiB0aW1lcnNfY2xlYXJJbnRlcnZhbCh0aW1lcikge1xuICAgIHdpbmRvdy5jbGVhckludGVydmFsKHRpbWVyKTtcbn1cbnZhciBPbmVPZmZUaW1lciA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgdGltZXJzX2V4dGVuZHMoT25lT2ZmVGltZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gT25lT2ZmVGltZXIoZGVsYXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBzZXRUaW1lb3V0LCB0aW1lcnNfY2xlYXJUaW1lb3V0LCBkZWxheSwgZnVuY3Rpb24gKHRpbWVyKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBPbmVPZmZUaW1lcjtcbn0oYWJzdHJhY3RfdGltZXIpKTtcblxudmFyIFBlcmlvZGljVGltZXIgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHRpbWVyc19leHRlbmRzKFBlcmlvZGljVGltZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUGVyaW9kaWNUaW1lcihkZWxheSwgY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIHNldEludGVydmFsLCB0aW1lcnNfY2xlYXJJbnRlcnZhbCwgZGVsYXksIGZ1bmN0aW9uICh0aW1lcikge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aW1lcjtcbiAgICAgICAgfSkgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFBlcmlvZGljVGltZXI7XG59KGFic3RyYWN0X3RpbWVyKSk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlsLnRzXG5cbnZhciBVdGlsID0ge1xuICAgIG5vdzogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoRGF0ZS5ub3cpIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZWZlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBuZXcgT25lT2ZmVGltZXIoMCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgbWV0aG9kOiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYm91bmRBcmd1bWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFtuYW1lXS5hcHBseShvYmplY3QsIGJvdW5kQXJndW1lbnRzLmNvbmNhdChhcmd1bWVudHMpKTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdXRpbCA9IChVdGlsKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS91dGlscy9jb2xsZWN0aW9ucy50c1xuXG5cbmZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcbiAgICB2YXIgc291cmNlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHNvdXJjZXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc291cmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXh0ZW5zaW9ucyA9IHNvdXJjZXNbaV07XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGV4dGVuc2lvbnMpIHtcbiAgICAgICAgICAgIGlmIChleHRlbnNpb25zW3Byb3BlcnR5XSAmJlxuICAgICAgICAgICAgICAgIGV4dGVuc2lvbnNbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmXG4gICAgICAgICAgICAgICAgZXh0ZW5zaW9uc1twcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBleHRlbmQodGFyZ2V0W3Byb3BlcnR5XSB8fCB7fSwgZXh0ZW5zaW9uc1twcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGV4dGVuc2lvbnNbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBzdHJpbmdpZnkoKSB7XG4gICAgdmFyIG0gPSBbJ1B1c2hlciddO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzW2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbS5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtLnB1c2goc2FmZUpTT05TdHJpbmdpZnkoYXJndW1lbnRzW2ldKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG0uam9pbignIDogJyk7XG59XG5mdW5jdGlvbiBhcnJheUluZGV4T2YoYXJyYXksIGl0ZW0pIHtcbiAgICB2YXIgbmF0aXZlSW5kZXhPZiA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuICAgIGlmIChhcnJheSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIGlmIChuYXRpdmVJbmRleE9mICYmIGFycmF5LmluZGV4T2YgPT09IG5hdGl2ZUluZGV4T2YpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5LmluZGV4T2YoaXRlbSk7XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhcnJheVtpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gb2JqZWN0QXBwbHkob2JqZWN0LCBmKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgICAgICAgZihvYmplY3Rba2V5XSwga2V5LCBvYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKF8sIGtleSkge1xuICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9KTtcbiAgICByZXR1cm4ga2V5cztcbn1cbmZ1bmN0aW9uIHZhbHVlcyhvYmplY3QpIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG59XG5mdW5jdGlvbiBhcHBseShhcnJheSwgZiwgY29udGV4dCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZi5jYWxsKGNvbnRleHQgfHwgd2luZG93LCBhcnJheVtpXSwgaSwgYXJyYXkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1hcChhcnJheSwgZikge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGYoYXJyYXlbaV0sIGksIGFycmF5LCByZXN1bHQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1hcE9iamVjdChvYmplY3QsIGYpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgb2JqZWN0QXBwbHkob2JqZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICByZXN1bHRba2V5XSA9IGYodmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBmaWx0ZXIoYXJyYXksIHRlc3QpIHtcbiAgICB0ZXN0ID1cbiAgICAgICAgdGVzdCB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhdmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0ZXN0KGFycmF5W2ldLCBpLCBhcnJheSwgcmVzdWx0KSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBmaWx0ZXJPYmplY3Qob2JqZWN0LCB0ZXN0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIG9iamVjdEFwcGx5KG9iamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKCh0ZXN0ICYmIHRlc3QodmFsdWUsIGtleSwgb2JqZWN0LCByZXN1bHQpKSB8fCBCb29sZWFuKHZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBmbGF0dGVuKG9iamVjdCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBvYmplY3RBcHBseShvYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGFueShhcnJheSwgdGVzdCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRlc3QoYXJyYXlbaV0sIGksIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gY29sbGVjdGlvbnNfYWxsKGFycmF5LCB0ZXN0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIXRlc3QoYXJyYXlbaV0sIGksIGFycmF5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZW5jb2RlUGFyYW1zT2JqZWN0KGRhdGEpIHtcbiAgICByZXR1cm4gbWFwT2JqZWN0KGRhdGEsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdmFsdWUgPSBzYWZlSlNPTlN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChlbmNvZGUodmFsdWUudG9TdHJpbmcoKSkpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhkYXRhKSB7XG4gICAgdmFyIHBhcmFtcyA9IGZpbHRlck9iamVjdChkYXRhLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG4gICAgfSk7XG4gICAgdmFyIHF1ZXJ5ID0gbWFwKGZsYXR0ZW4oZW5jb2RlUGFyYW1zT2JqZWN0KHBhcmFtcykpLCB1dGlsLm1ldGhvZCgnam9pbicsICc9JykpLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gcXVlcnk7XG59XG5mdW5jdGlvbiBkZWN5Y2xlT2JqZWN0KG9iamVjdCkge1xuICAgIHZhciBvYmplY3RzID0gW10sIHBhdGhzID0gW107XG4gICAgcmV0dXJuIChmdW5jdGlvbiBkZXJleih2YWx1ZSwgcGF0aCkge1xuICAgICAgICB2YXIgaSwgbmFtZSwgbnU7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3RzW2ldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgJHJlZjogcGF0aHNbaV0gfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmplY3RzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgICAgIG51ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVbaV0gPSBkZXJleih2YWx1ZVtpXSwgcGF0aCArICdbJyArIGkgKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKG5hbWUgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVbbmFtZV0gPSBkZXJleih2YWx1ZVtuYW1lXSwgcGF0aCArICdbJyArIEpTT04uc3RyaW5naWZ5KG5hbWUpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnU7XG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pKG9iamVjdCwgJyQnKTtcbn1cbmZ1bmN0aW9uIHNhZmVKU09OU3RyaW5naWZ5KHNvdXJjZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzb3VyY2UpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGVjeWNsZU9iamVjdChzb3VyY2UpKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvbG9nZ2VyLnRzXG5cblxudmFyIGxvZ2dlcl9Mb2dnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvZ2dlcigpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxMb2cgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvZyh0aGlzLmdsb2JhbExvZywgYXJncyk7XG4gICAgfTtcbiAgICBMb2dnZXIucHJvdG90eXBlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2codGhpcy5nbG9iYWxMb2dXYXJuLCBhcmdzKTtcbiAgICB9O1xuICAgIExvZ2dlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2codGhpcy5nbG9iYWxMb2dFcnJvciwgYXJncyk7XG4gICAgfTtcbiAgICBMb2dnZXIucHJvdG90eXBlLmdsb2JhbExvZ1dhcm4gPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBpZiAod2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUud2Fybikge1xuICAgICAgICAgICAgd2luZG93LmNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMb2dnZXIucHJvdG90eXBlLmdsb2JhbExvZ0Vycm9yID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsTG9nV2FybihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9nZ2VyLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbiAoZGVmYXVsdExvZ2dpbmdGdW5jdGlvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWVzc2FnZSA9IHN0cmluZ2lmeS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBpZiAoY29yZV9wdXNoZXIubG9nKSB7XG4gICAgICAgICAgICBjb3JlX3B1c2hlci5sb2cobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29yZV9wdXNoZXIubG9nVG9Db25zb2xlKSB7XG4gICAgICAgICAgICB2YXIgbG9nID0gZGVmYXVsdExvZ2dpbmdGdW5jdGlvbi5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgbG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTG9nZ2VyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGxvZ2dlciA9IChuZXcgbG9nZ2VyX0xvZ2dlcigpKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2F1dGgvanNvbnBfYXV0aC50c1xuXG52YXIganNvbnAgPSBmdW5jdGlvbiAoY29udGV4dCwgc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuYXV0aE9wdGlvbnMuaGVhZGVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKCdUbyBzZW5kIGhlYWRlcnMgd2l0aCB0aGUgYXV0aCByZXF1ZXN0LCB5b3UgbXVzdCB1c2UgQUpBWCwgcmF0aGVyIHRoYW4gSlNPTlAuJyk7XG4gICAgfVxuICAgIHZhciBjYWxsYmFja05hbWUgPSBjb250ZXh0Lm5leHRBdXRoQ2FsbGJhY2tJRC50b1N0cmluZygpO1xuICAgIGNvbnRleHQubmV4dEF1dGhDYWxsYmFja0lEKys7XG4gICAgdmFyIGRvY3VtZW50ID0gY29udGV4dC5nZXREb2N1bWVudCgpO1xuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBjb250ZXh0LmF1dGhfY2FsbGJhY2tzW2NhbGxiYWNrTmFtZV0gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9O1xuICAgIHZhciBjYWxsYmFja19uYW1lID0gXCJQdXNoZXIuYXV0aF9jYWxsYmFja3NbJ1wiICsgY2FsbGJhY2tOYW1lICsgXCInXVwiO1xuICAgIHNjcmlwdC5zcmMgPVxuICAgICAgICB0aGlzLm9wdGlvbnMuYXV0aEVuZHBvaW50ICtcbiAgICAgICAgICAgICc/Y2FsbGJhY2s9JyArXG4gICAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoY2FsbGJhY2tfbmFtZSkgK1xuICAgICAgICAgICAgJyYnICtcbiAgICAgICAgICAgIHRoaXMuY29tcG9zZVF1ZXJ5KHNvY2tldElkKTtcbiAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaGVhZC5maXJzdENoaWxkKTtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBqc29ucF9hdXRoID0gKGpzb25wKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RvbS9zY3JpcHRfcmVxdWVzdC50c1xudmFyIFNjcmlwdFJlcXVlc3QgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFNjcmlwdFJlcXVlc3Qoc3JjKSB7XG4gICAgICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIH1cbiAgICBTY3JpcHRSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHJlY2VpdmVyKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGVycm9yU3RyaW5nID0gJ0Vycm9yIGxvYWRpbmcgJyArIHNlbGYuc3JjO1xuICAgICAgICBzZWxmLnNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzZWxmLnNjcmlwdC5pZCA9IHJlY2VpdmVyLmlkO1xuICAgICAgICBzZWxmLnNjcmlwdC5zcmMgPSBzZWxmLnNyYztcbiAgICAgICAgc2VsZi5zY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzZWxmLnNjcmlwdC5jaGFyc2V0ID0gJ1VURi04JztcbiAgICAgICAgaWYgKHNlbGYuc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2soZXJyb3JTdHJpbmcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5jYWxsYmFjayhudWxsKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZXIuY2FsbGJhY2sobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZi5zY3JpcHQuYXN5bmMgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZG9jdW1lbnQuYXR0YWNoRXZlbnQgJiZcbiAgICAgICAgICAgIC9vcGVyYS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNlbGYuZXJyb3JTY3JpcHQuaWQgPSByZWNlaXZlci5pZCArICdfZXJyb3InO1xuICAgICAgICAgICAgc2VsZi5lcnJvclNjcmlwdC50ZXh0ID0gcmVjZWl2ZXIubmFtZSArIFwiKCdcIiArIGVycm9yU3RyaW5nICsgXCInKTtcIjtcbiAgICAgICAgICAgIHNlbGYuc2NyaXB0LmFzeW5jID0gc2VsZi5lcnJvclNjcmlwdC5hc3luYyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5zY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc2VsZi5zY3JpcHQsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGlmIChzZWxmLmVycm9yU2NyaXB0KSB7XG4gICAgICAgICAgICBoZWFkLmluc2VydEJlZm9yZShzZWxmLmVycm9yU2NyaXB0LCBzZWxmLnNjcmlwdC5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFNjcmlwdFJlcXVlc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNjcmlwdCkge1xuICAgICAgICAgICAgdGhpcy5zY3JpcHQub25sb2FkID0gdGhpcy5zY3JpcHQub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNjcmlwdCAmJiB0aGlzLnNjcmlwdC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lcnJvclNjcmlwdCAmJiB0aGlzLmVycm9yU2NyaXB0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JTY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVycm9yU2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gICAgICAgIHRoaXMuZXJyb3JTY3JpcHQgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFNjcmlwdFJlcXVlc3Q7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgc2NyaXB0X3JlcXVlc3QgPSAoU2NyaXB0UmVxdWVzdCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9kb20vanNvbnBfcmVxdWVzdC50c1xuXG5cbnZhciBqc29ucF9yZXF1ZXN0X0pTT05QUmVxdWVzdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSlNPTlBSZXF1ZXN0KHVybCwgZGF0YSkge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gICAgSlNPTlBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcXVlcnkgPSBidWlsZFF1ZXJ5U3RyaW5nKHRoaXMuZGF0YSk7XG4gICAgICAgIHZhciB1cmwgPSB0aGlzLnVybCArICcvJyArIHJlY2VpdmVyLm51bWJlciArICc/JyArIHF1ZXJ5O1xuICAgICAgICB0aGlzLnJlcXVlc3QgPSBydW50aW1lLmNyZWF0ZVNjcmlwdFJlcXVlc3QodXJsKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuICAgIH07XG4gICAgSlNPTlBSZXF1ZXN0LnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gSlNPTlBSZXF1ZXN0O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGpzb25wX3JlcXVlc3QgPSAoanNvbnBfcmVxdWVzdF9KU09OUFJlcXVlc3QpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvdGltZWxpbmUvanNvbnBfdGltZWxpbmUudHNcblxuXG52YXIgZ2V0QWdlbnQgPSBmdW5jdGlvbiAoc2VuZGVyLCB1c2VUTFMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzY2hlbWUgPSAnaHR0cCcgKyAodXNlVExTID8gJ3MnIDogJycpICsgJzovLyc7XG4gICAgICAgIHZhciB1cmwgPSBzY2hlbWUgKyAoc2VuZGVyLmhvc3QgfHwgc2VuZGVyLm9wdGlvbnMuaG9zdCkgKyBzZW5kZXIub3B0aW9ucy5wYXRoO1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHJ1bnRpbWUuY3JlYXRlSlNPTlBSZXF1ZXN0KHVybCwgZGF0YSk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHJ1bnRpbWUuU2NyaXB0UmVjZWl2ZXJzLmNyZWF0ZShmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuICAgICAgICAgICAgU2NyaXB0UmVjZWl2ZXJzLnJlbW92ZShyZWNlaXZlcik7XG4gICAgICAgICAgICByZXF1ZXN0LmNsZWFudXAoKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0Lmhvc3QpIHtcbiAgICAgICAgICAgICAgICBzZW5kZXIuaG9zdCA9IHJlc3VsdC5ob3N0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXF1ZXN0LnNlbmQocmVjZWl2ZXIpO1xuICAgIH07XG59O1xudmFyIGpzb25wX3RpbWVsaW5lX2pzb25wID0ge1xuICAgIG5hbWU6ICdqc29ucCcsXG4gICAgZ2V0QWdlbnQ6IGdldEFnZW50XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIganNvbnBfdGltZWxpbmUgPSAoanNvbnBfdGltZWxpbmVfanNvbnApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RyYW5zcG9ydHMvdXJsX3NjaGVtZXMudHNcblxuZnVuY3Rpb24gZ2V0R2VuZXJpY1VSTChiYXNlU2NoZW1lLCBwYXJhbXMsIHBhdGgpIHtcbiAgICB2YXIgc2NoZW1lID0gYmFzZVNjaGVtZSArIChwYXJhbXMudXNlVExTID8gJ3MnIDogJycpO1xuICAgIHZhciBob3N0ID0gcGFyYW1zLnVzZVRMUyA/IHBhcmFtcy5ob3N0VExTIDogcGFyYW1zLmhvc3ROb25UTFM7XG4gICAgcmV0dXJuIHNjaGVtZSArICc6Ly8nICsgaG9zdCArIHBhdGg7XG59XG5mdW5jdGlvbiBnZXRHZW5lcmljUGF0aChrZXksIHF1ZXJ5U3RyaW5nKSB7XG4gICAgdmFyIHBhdGggPSAnL2FwcC8nICsga2V5O1xuICAgIHZhciBxdWVyeSA9ICc/cHJvdG9jb2w9JyArXG4gICAgICAgIGRlZmF1bHRzLlBST1RPQ09MICtcbiAgICAgICAgJyZjbGllbnQ9anMnICtcbiAgICAgICAgJyZ2ZXJzaW9uPScgK1xuICAgICAgICBkZWZhdWx0cy5WRVJTSU9OICtcbiAgICAgICAgKHF1ZXJ5U3RyaW5nID8gJyYnICsgcXVlcnlTdHJpbmcgOiAnJyk7XG4gICAgcmV0dXJuIHBhdGggKyBxdWVyeTtcbn1cbnZhciB3cyA9IHtcbiAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIHBhdGggPSAocGFyYW1zLmh0dHBQYXRoIHx8ICcnKSArIGdldEdlbmVyaWNQYXRoKGtleSwgJ2ZsYXNoPWZhbHNlJyk7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljVVJMKCd3cycsIHBhcmFtcywgcGF0aCk7XG4gICAgfVxufTtcbnZhciBodHRwID0ge1xuICAgIGdldEluaXRpYWw6IGZ1bmN0aW9uIChrZXksIHBhcmFtcykge1xuICAgICAgICB2YXIgcGF0aCA9IChwYXJhbXMuaHR0cFBhdGggfHwgJy9wdXNoZXInKSArIGdldEdlbmVyaWNQYXRoKGtleSk7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljVVJMKCdodHRwJywgcGFyYW1zLCBwYXRoKTtcbiAgICB9XG59O1xudmFyIHNvY2tqcyA9IHtcbiAgICBnZXRJbml0aWFsOiBmdW5jdGlvbiAoa2V5LCBwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIGdldEdlbmVyaWNVUkwoJ2h0dHAnLCBwYXJhbXMsIHBhcmFtcy5odHRwUGF0aCB8fCAnL3B1c2hlcicpO1xuICAgIH0sXG4gICAgZ2V0UGF0aDogZnVuY3Rpb24gKGtleSwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBnZXRHZW5lcmljUGF0aChrZXkpO1xuICAgIH1cbn07XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvZXZlbnRzL2NhbGxiYWNrX3JlZ2lzdHJ5LnRzXG5cbnZhciBjYWxsYmFja19yZWdpc3RyeV9DYWxsYmFja1JlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYWxsYmFja1JlZ2lzdHJ5KCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICB9XG4gICAgQ2FsbGJhY2tSZWdpc3RyeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1twcmVmaXgobmFtZSldO1xuICAgIH07XG4gICAgQ2FsbGJhY2tSZWdpc3RyeS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBwcmVmaXhlZEV2ZW50TmFtZSA9IHByZWZpeChuYW1lKTtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzW3ByZWZpeGVkRXZlbnROYW1lXSA9XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdIHx8IFtdO1xuICAgICAgICB0aGlzLl9jYWxsYmFja3NbcHJlZml4ZWRFdmVudE5hbWVdLnB1c2goe1xuICAgICAgICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgICAgICAgY29udGV4dDogY29udGV4dFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBpZiAoIW5hbWUgJiYgIWNhbGxiYWNrICYmICFjb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmFtZXMgPSBuYW1lID8gW3ByZWZpeChuYW1lKV0gOiBrZXlzKHRoaXMuX2NhbGxiYWNrcyk7XG4gICAgICAgIGlmIChjYWxsYmFjayB8fCBjb250ZXh0KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNhbGxiYWNrKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcyhuYW1lcyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENhbGxiYWNrUmVnaXN0cnkucHJvdG90eXBlLnJlbW92ZUNhbGxiYWNrID0gZnVuY3Rpb24gKG5hbWVzLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICBhcHBseShuYW1lcywgZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1tuYW1lXSA9IGZpbHRlcih0aGlzLl9jYWxsYmFja3NbbmFtZV0gfHwgW10sIGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgoY2FsbGJhY2sgJiYgY2FsbGJhY2sgIT09IGJpbmRpbmcuZm4pIHx8XG4gICAgICAgICAgICAgICAgICAgIChjb250ZXh0ICYmIGNvbnRleHQgIT09IGJpbmRpbmcuY29udGV4dCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2FsbGJhY2tzW25hbWVdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG4gICAgQ2FsbGJhY2tSZWdpc3RyeS5wcm90b3R5cGUucmVtb3ZlQWxsQ2FsbGJhY2tzID0gZnVuY3Rpb24gKG5hbWVzKSB7XG4gICAgICAgIGFwcGx5KG5hbWVzLCBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tuYW1lXTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2FsbGJhY2tSZWdpc3RyeTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjYWxsYmFja19yZWdpc3RyeSA9IChjYWxsYmFja19yZWdpc3RyeV9DYWxsYmFja1JlZ2lzdHJ5KTtcbmZ1bmN0aW9uIHByZWZpeChuYW1lKSB7XG4gICAgcmV0dXJuICdfJyArIG5hbWU7XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvZXZlbnRzL2Rpc3BhdGNoZXIudHNcblxuXG52YXIgZGlzcGF0Y2hlcl9EaXNwYXRjaGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEaXNwYXRjaGVyKGZhaWxUaHJvdWdoKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzID0gbmV3IGNhbGxiYWNrX3JlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICAgICAgICB0aGlzLmZhaWxUaHJvdWdoID0gZmFpbFRocm91Z2g7XG4gICAgfVxuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiAoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgICAgICB0aGlzLmNhbGxiYWNrcy5hZGQoZXZlbnROYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRGlzcGF0Y2hlci5wcm90b3R5cGUuYmluZF9nbG9iYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERpc3BhdGNoZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIChldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2tzLnJlbW92ZShldmVudE5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyA9IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nbG9iYWxfY2FsbGJhY2tzID0gZmlsdGVyKHRoaXMuZ2xvYmFsX2NhbGxiYWNrcyB8fCBbXSwgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMgIT09IGNhbGxiYWNrOyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS51bmJpbmRfYWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVuYmluZCgpO1xuICAgICAgICB0aGlzLnVuYmluZF9nbG9iYWwoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEaXNwYXRjaGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gKGV2ZW50TmFtZSwgZGF0YSwgbWV0YWRhdGEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmdsb2JhbF9jYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZ2xvYmFsX2NhbGxiYWNrc1tpXShldmVudE5hbWUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcy5nZXQoZXZlbnROYW1lKTtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgaWYgKG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2goZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5mbi5hcHBseShjYWxsYmFja3NbaV0uY29udGV4dCB8fCB3aW5kb3csIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZmFpbFRocm91Z2gpIHtcbiAgICAgICAgICAgIHRoaXMuZmFpbFRocm91Z2goZXZlbnROYW1lLCBkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHJldHVybiBEaXNwYXRjaGVyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGRpc3BhdGNoZXIgPSAoZGlzcGF0Y2hlcl9EaXNwYXRjaGVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL3RyYW5zcG9ydF9jb25uZWN0aW9uLnRzXG52YXIgdHJhbnNwb3J0X2Nvbm5lY3Rpb25fZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG5cbnZhciB0cmFuc3BvcnRfY29ubmVjdGlvbl9UcmFuc3BvcnRDb25uZWN0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICB0cmFuc3BvcnRfY29ubmVjdGlvbl9leHRlbmRzKFRyYW5zcG9ydENvbm5lY3Rpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVHJhbnNwb3J0Q29ubmVjdGlvbihob29rcywgbmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pbml0aWFsaXplID0gcnVudGltZS50cmFuc3BvcnRDb25uZWN0aW9uSW5pdGlhbGl6ZXI7XG4gICAgICAgIF90aGlzLmhvb2tzID0gaG9va3M7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICBfdGhpcy5rZXkgPSBrZXk7XG4gICAgICAgIF90aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9ICduZXcnO1xuICAgICAgICBfdGhpcy50aW1lbGluZSA9IG9wdGlvbnMudGltZWxpbmU7XG4gICAgICAgIF90aGlzLmFjdGl2aXR5VGltZW91dCA9IG9wdGlvbnMuYWN0aXZpdHlUaW1lb3V0O1xuICAgICAgICBfdGhpcy5pZCA9IF90aGlzLnRpbWVsaW5lLmdlbmVyYXRlVW5pcXVlSUQoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5oYW5kbGVzQWN0aXZpdHlDaGVja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMuaG9va3MuaGFuZGxlc0FjdGl2aXR5Q2hlY2tzKTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnN1cHBvcnRzUGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5ob29rcy5zdXBwb3J0c1BpbmcpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0IHx8IHRoaXMuc3RhdGUgIT09ICdpbml0aWFsaXplZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXJsID0gdGhpcy5ob29rcy51cmxzLmdldEluaXRpYWwodGhpcy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldCA9IHRoaXMuaG9va3MuZ2V0U29ja2V0KHVybCwgdGhpcy5vcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdXRpbC5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25FcnJvcihlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jaGFuZ2VTdGF0ZSgnY2xvc2VkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdDb25uZWN0aW5nJywgeyB0cmFuc3BvcnQ6IHRoaXMubmFtZSwgdXJsOiB1cmwgfSk7XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nvbm5lY3RpbmcnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ29wZW4nKSB7XG4gICAgICAgICAgICB1dGlsLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuc29ja2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNvY2tldC5zZW5kKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSAnb3BlbicgJiYgdGhpcy5zdXBwb3J0c1BpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQucGluZygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmhvb2tzLmJlZm9yZU9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaG9va3MuYmVmb3JlT3Blbih0aGlzLnNvY2tldCwgdGhpcy5ob29rcy51cmxzLmdldFBhdGgodGhpcy5rZXksIHRoaXMub3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ29wZW4nKTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25vcGVuID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgeyB0eXBlOiAnV2ViU29ja2V0RXJyb3InLCBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIHRoaXMudGltZWxpbmUuZXJyb3IodGhpcy5idWlsZFRpbWVsaW5lTWVzc2FnZSh7IGVycm9yOiBlcnJvci50b1N0cmluZygpIH0pKTtcbiAgICB9O1xuICAgIFRyYW5zcG9ydENvbm5lY3Rpb24ucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICBpZiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgnY2xvc2VkJywge1xuICAgICAgICAgICAgICAgIGNvZGU6IGNsb3NlRXZlbnQuY29kZSxcbiAgICAgICAgICAgICAgICByZWFzb246IGNsb3NlRXZlbnQucmVhc29uLFxuICAgICAgICAgICAgICAgIHdhc0NsZWFuOiBjbG9zZUV2ZW50Lndhc0NsZWFuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ2Nsb3NlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgIHRoaXMuc29ja2V0ID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUub25NZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgbWVzc2FnZSk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5vbkFjdGl2aXR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVtaXQoJ2FjdGl2aXR5Jyk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5vbk9wZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgX3RoaXMub25FcnJvcihlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgX3RoaXMub25DbG9zZShjbG9zZUV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIF90aGlzLm9uTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uYWN0aXZpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMub25BY3Rpdml0eSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVHJhbnNwb3J0Q29ubmVjdGlvbi5wcm90b3R5cGUudW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zb2NrZXQpIHtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9ub3BlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuc29ja2V0Lm9uZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnNvY2tldC5vbmNsb3NlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQaW5nKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5vbmFjdGl2aXR5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5jaGFuZ2VTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHRoaXMuYnVpbGRUaW1lbGluZU1lc3NhZ2Uoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmVtaXQoc3RhdGUsIHBhcmFtcyk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRDb25uZWN0aW9uLnByb3RvdHlwZS5idWlsZFRpbWVsaW5lTWVzc2FnZSA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBleHRlbmQoeyBjaWQ6IHRoaXMuaWQgfSwgbWVzc2FnZSk7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNwb3J0Q29ubmVjdGlvbjtcbn0oZGlzcGF0Y2hlcikpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0X2Nvbm5lY3Rpb24gPSAodHJhbnNwb3J0X2Nvbm5lY3Rpb25fVHJhbnNwb3J0Q29ubmVjdGlvbik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdHJhbnNwb3J0cy90cmFuc3BvcnQudHNcblxudmFyIHRyYW5zcG9ydF9UcmFuc3BvcnQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydChob29rcykge1xuICAgICAgICB0aGlzLmhvb2tzID0gaG9va3M7XG4gICAgfVxuICAgIFRyYW5zcG9ydC5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoZW52aXJvbm1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9va3MuaXNTdXBwb3J0ZWQoZW52aXJvbm1lbnQpO1xuICAgIH07XG4gICAgVHJhbnNwb3J0LnByb3RvdHlwZS5jcmVhdGVDb25uZWN0aW9uID0gZnVuY3Rpb24gKG5hbWUsIHByaW9yaXR5LCBrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0cmFuc3BvcnRfY29ubmVjdGlvbih0aGlzLmhvb2tzLCBuYW1lLCBwcmlvcml0eSwga2V5LCBvcHRpb25zKTtcbiAgICB9O1xuICAgIHJldHVybiBUcmFuc3BvcnQ7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdHJhbnNwb3J0c190cmFuc3BvcnQgPSAodHJhbnNwb3J0X1RyYW5zcG9ydCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL2lzb21vcnBoaWMvdHJhbnNwb3J0cy90cmFuc3BvcnRzLnRzXG5cblxuXG5cbnZhciBXU1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzX3RyYW5zcG9ydCh7XG4gICAgdXJsczogd3MsXG4gICAgaGFuZGxlc0FjdGl2aXR5Q2hlY2tzOiBmYWxzZSxcbiAgICBzdXBwb3J0c1Bpbmc6IGZhbHNlLFxuICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVudGltZS5nZXRXZWJTb2NrZXRBUEkoKSk7XG4gICAgfSxcbiAgICBpc1N1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihydW50aW1lLmdldFdlYlNvY2tldEFQSSgpKTtcbiAgICB9LFxuICAgIGdldFNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICByZXR1cm4gcnVudGltZS5jcmVhdGVXZWJTb2NrZXQodXJsKTtcbiAgICB9XG59KTtcbnZhciBodHRwQ29uZmlndXJhdGlvbiA9IHtcbiAgICB1cmxzOiBodHRwLFxuICAgIGhhbmRsZXNBY3Rpdml0eUNoZWNrczogZmFsc2UsXG4gICAgc3VwcG9ydHNQaW5nOiB0cnVlLFxuICAgIGlzSW5pdGlhbGl6ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTtcbnZhciBzdHJlYW1pbmdDb25maWd1cmF0aW9uID0gZXh0ZW5kKHtcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUuSFRUUEZhY3RvcnkuY3JlYXRlU3RyZWFtaW5nU29ja2V0KHVybCk7XG4gICAgfVxufSwgaHR0cENvbmZpZ3VyYXRpb24pO1xudmFyIHBvbGxpbmdDb25maWd1cmF0aW9uID0gZXh0ZW5kKHtcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHJ1bnRpbWUuSFRUUEZhY3RvcnkuY3JlYXRlUG9sbGluZ1NvY2tldCh1cmwpO1xuICAgIH1cbn0sIGh0dHBDb25maWd1cmF0aW9uKTtcbnZhciB4aHJDb25maWd1cmF0aW9uID0ge1xuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBydW50aW1lLmlzWEhSU3VwcG9ydGVkKCk7XG4gICAgfVxufTtcbnZhciBYSFJTdHJlYW1pbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c190cmFuc3BvcnQoKGV4dGVuZCh7fSwgc3RyZWFtaW5nQ29uZmlndXJhdGlvbiwgeGhyQ29uZmlndXJhdGlvbikpKTtcbnZhciBYSFJQb2xsaW5nVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNfdHJhbnNwb3J0KGV4dGVuZCh7fSwgcG9sbGluZ0NvbmZpZ3VyYXRpb24sIHhockNvbmZpZ3VyYXRpb24pKTtcbnZhciBUcmFuc3BvcnRzID0ge1xuICAgIHdzOiBXU1RyYW5zcG9ydCxcbiAgICB4aHJfc3RyZWFtaW5nOiBYSFJTdHJlYW1pbmdUcmFuc3BvcnQsXG4gICAgeGhyX3BvbGxpbmc6IFhIUlBvbGxpbmdUcmFuc3BvcnRcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRzID0gKFRyYW5zcG9ydHMpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvdHJhbnNwb3J0cy90cmFuc3BvcnRzLnRzXG5cblxuXG5cblxuXG52YXIgU29ja0pTVHJhbnNwb3J0ID0gbmV3IHRyYW5zcG9ydHNfdHJhbnNwb3J0KHtcbiAgICBmaWxlOiAnc29ja2pzJyxcbiAgICB1cmxzOiBzb2NranMsXG4gICAgaGFuZGxlc0FjdGl2aXR5Q2hlY2tzOiB0cnVlLFxuICAgIHN1cHBvcnRzUGluZzogZmFsc2UsXG4gICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBpc0luaXRpYWxpemVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuU29ja0pTICE9PSB1bmRlZmluZWQ7XG4gICAgfSxcbiAgICBnZXRTb2NrZXQ6IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB3aW5kb3cuU29ja0pTKHVybCwgbnVsbCwge1xuICAgICAgICAgICAganNfcGF0aDogRGVwZW5kZW5jaWVzLmdldFBhdGgoJ3NvY2tqcycsIHtcbiAgICAgICAgICAgICAgICB1c2VUTFM6IG9wdGlvbnMudXNlVExTXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGlnbm9yZV9udWxsX29yaWdpbjogb3B0aW9ucy5pZ25vcmVOdWxsT3JpZ2luXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgYmVmb3JlT3BlbjogZnVuY3Rpb24gKHNvY2tldCwgcGF0aCkge1xuICAgICAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBwYXRoOiBwYXRoXG4gICAgICAgIH0pKTtcbiAgICB9XG59KTtcbnZhciB4ZHJDb25maWd1cmF0aW9uID0ge1xuICAgIGlzU3VwcG9ydGVkOiBmdW5jdGlvbiAoZW52aXJvbm1lbnQpIHtcbiAgICAgICAgdmFyIHllcyA9IHJ1bnRpbWUuaXNYRFJTdXBwb3J0ZWQoZW52aXJvbm1lbnQudXNlVExTKTtcbiAgICAgICAgcmV0dXJuIHllcztcbiAgICB9XG59O1xudmFyIFhEUlN0cmVhbWluZ1RyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzX3RyYW5zcG9ydCgoZXh0ZW5kKHt9LCBzdHJlYW1pbmdDb25maWd1cmF0aW9uLCB4ZHJDb25maWd1cmF0aW9uKSkpO1xudmFyIFhEUlBvbGxpbmdUcmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c190cmFuc3BvcnQoZXh0ZW5kKHt9LCBwb2xsaW5nQ29uZmlndXJhdGlvbiwgeGRyQ29uZmlndXJhdGlvbikpO1xudHJhbnNwb3J0cy54ZHJfc3RyZWFtaW5nID0gWERSU3RyZWFtaW5nVHJhbnNwb3J0O1xudHJhbnNwb3J0cy54ZHJfcG9sbGluZyA9IFhEUlBvbGxpbmdUcmFuc3BvcnQ7XG50cmFuc3BvcnRzLnNvY2tqcyA9IFNvY2tKU1RyYW5zcG9ydDtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydHNfdHJhbnNwb3J0cyA9ICh0cmFuc3BvcnRzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL25ldF9pbmZvLnRzXG52YXIgbmV0X2luZm9fZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG52YXIgTmV0SW5mbyA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgbmV0X2luZm9fZXh0ZW5kcyhOZXRJbmZvLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE5ldEluZm8oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIHZhciBzZWxmID0gX3RoaXM7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb25saW5lJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuZW1pdCgnb25saW5lJyk7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVtaXQoJ29mZmxpbmUnKTtcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE5ldEluZm8ucHJvdG90eXBlLmlzT25saW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAod2luZG93Lm5hdmlnYXRvci5vbkxpbmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5vbkxpbmU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBOZXRJbmZvO1xufShkaXNwYXRjaGVyKSk7XG5cbnZhciBuZXRfaW5mb19OZXR3b3JrID0gbmV3IE5ldEluZm8oKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90cmFuc3BvcnRzL2Fzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXIudHNcblxuXG52YXIgYXNzaXN0YW50X3RvX3RoZV90cmFuc3BvcnRfbWFuYWdlcl9Bc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFzc2lzdGFudFRvVGhlVHJhbnNwb3J0TWFuYWdlcihtYW5hZ2VyLCB0cmFuc3BvcnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIHRoaXMubWluUGluZ0RlbGF5ID0gb3B0aW9ucy5taW5QaW5nRGVsYXk7XG4gICAgICAgIHRoaXMubWF4UGluZ0RlbGF5ID0gb3B0aW9ucy5tYXhQaW5nRGVsYXk7XG4gICAgICAgIHRoaXMucGluZ0RlbGF5ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIucHJvdG90eXBlLmNyZWF0ZUNvbm5lY3Rpb24gPSBmdW5jdGlvbiAobmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvcHRpb25zID0gZXh0ZW5kKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IHRoaXMucGluZ0RlbGF5XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMudHJhbnNwb3J0LmNyZWF0ZUNvbm5lY3Rpb24obmFtZSwgcHJpb3JpdHksIGtleSwgb3B0aW9ucyk7XG4gICAgICAgIHZhciBvcGVuVGltZXN0YW1wID0gbnVsbDtcbiAgICAgICAgdmFyIG9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24udW5iaW5kKCdvcGVuJywgb25PcGVuKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uYmluZCgnY2xvc2VkJywgb25DbG9zZWQpO1xuICAgICAgICAgICAgb3BlblRpbWVzdGFtcCA9IHV0aWwubm93KCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkNsb3NlZCA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnVuYmluZCgnY2xvc2VkJywgb25DbG9zZWQpO1xuICAgICAgICAgICAgaWYgKGNsb3NlRXZlbnQuY29kZSA9PT0gMTAwMiB8fCBjbG9zZUV2ZW50LmNvZGUgPT09IDEwMDMpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5tYW5hZ2VyLnJlcG9ydERlYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghY2xvc2VFdmVudC53YXNDbGVhbiAmJiBvcGVuVGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpZmVzcGFuID0gdXRpbC5ub3coKSAtIG9wZW5UaW1lc3RhbXA7XG4gICAgICAgICAgICAgICAgaWYgKGxpZmVzcGFuIDwgMiAqIF90aGlzLm1heFBpbmdEZWxheSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5tYW5hZ2VyLnJlcG9ydERlYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBpbmdEZWxheSA9IE1hdGgubWF4KGxpZmVzcGFuIC8gMiwgX3RoaXMubWluUGluZ0RlbGF5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbm5lY3Rpb24uYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgIHJldHVybiBjb25uZWN0aW9uO1xuICAgIH07XG4gICAgQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uIChlbnZpcm9ubWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLmlzQWxpdmUoKSAmJiB0aGlzLnRyYW5zcG9ydC5pc1N1cHBvcnRlZChlbnZpcm9ubWVudCk7XG4gICAgfTtcbiAgICByZXR1cm4gQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGFzc2lzdGFudF90b190aGVfdHJhbnNwb3J0X21hbmFnZXIgPSAoYXNzaXN0YW50X3RvX3RoZV90cmFuc3BvcnRfbWFuYWdlcl9Bc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vcHJvdG9jb2wvcHJvdG9jb2wudHNcbnZhciBQcm90b2NvbCA9IHtcbiAgICBkZWNvZGVNZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZUV2ZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2VFdmVudC5kYXRhKTtcbiAgICAgICAgICAgIHZhciBwdXNoZXJFdmVudERhdGEgPSBtZXNzYWdlRGF0YS5kYXRhO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwdXNoZXJFdmVudERhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaGVyRXZlbnREYXRhID0gSlNPTi5wYXJzZShtZXNzYWdlRGF0YS5kYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHB1c2hlckV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBtZXNzYWdlRGF0YS5ldmVudCxcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBtZXNzYWdlRGF0YS5jaGFubmVsLFxuICAgICAgICAgICAgICAgIGRhdGE6IHB1c2hlckV2ZW50RGF0YVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS51c2VyX2lkKSB7XG4gICAgICAgICAgICAgICAgcHVzaGVyRXZlbnQudXNlcl9pZCA9IG1lc3NhZ2VEYXRhLnVzZXJfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcHVzaGVyRXZlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IHsgdHlwZTogJ01lc3NhZ2VQYXJzZUVycm9yJywgZXJyb3I6IGUsIGRhdGE6IG1lc3NhZ2VFdmVudC5kYXRhIH07XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGVuY29kZU1lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXZlbnQpO1xuICAgIH0sXG4gICAgcHJvY2Vzc0hhbmRzaGFrZTogZnVuY3Rpb24gKG1lc3NhZ2VFdmVudCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IFByb3RvY29sLmRlY29kZU1lc3NhZ2UobWVzc2FnZUV2ZW50KTtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZXZlbnQgPT09ICdwdXNoZXI6Y29ubmVjdGlvbl9lc3RhYmxpc2hlZCcpIHtcbiAgICAgICAgICAgIGlmICghbWVzc2FnZS5kYXRhLmFjdGl2aXR5X3RpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnTm8gYWN0aXZpdHkgdGltZW91dCBzcGVjaWZpZWQgaW4gaGFuZHNoYWtlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnY29ubmVjdGVkJyxcbiAgICAgICAgICAgICAgICBpZDogbWVzc2FnZS5kYXRhLnNvY2tldF9pZCxcbiAgICAgICAgICAgICAgICBhY3Rpdml0eVRpbWVvdXQ6IG1lc3NhZ2UuZGF0YS5hY3Rpdml0eV90aW1lb3V0ICogMTAwMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtZXNzYWdlLmV2ZW50ID09PSAncHVzaGVyOmVycm9yJykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuZ2V0Q2xvc2VBY3Rpb24obWVzc2FnZS5kYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdGhpcy5nZXRDbG9zZUVycm9yKG1lc3NhZ2UuZGF0YSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyAnSW52YWxpZCBoYW5kc2hha2UnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBnZXRDbG9zZUFjdGlvbjogZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQwMDApIHtcbiAgICAgICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgPj0gMTAwMiAmJiBjbG9zZUV2ZW50LmNvZGUgPD0gMTAwNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnYmFja29mZic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPT09IDQwMDApIHtcbiAgICAgICAgICAgIHJldHVybiAndGxzX29ubHknO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNsb3NlRXZlbnQuY29kZSA8IDQxMDApIHtcbiAgICAgICAgICAgIHJldHVybiAncmVmdXNlZCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2xvc2VFdmVudC5jb2RlIDwgNDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuICdiYWNrb2ZmJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbG9zZUV2ZW50LmNvZGUgPCA0MzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gJ3JldHJ5JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAncmVmdXNlZCc7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldENsb3NlRXJyb3I6IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgIGlmIChjbG9zZUV2ZW50LmNvZGUgIT09IDEwMDAgJiYgY2xvc2VFdmVudC5jb2RlICE9PSAxMDAxKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdQdXNoZXJFcnJvcicsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBjbG9zZUV2ZW50LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGNsb3NlRXZlbnQucmVhc29uIHx8IGNsb3NlRXZlbnQubWVzc2FnZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBwcm90b2NvbF9wcm90b2NvbCA9IChQcm90b2NvbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY29ubmVjdGlvbi9jb25uZWN0aW9uLnRzXG52YXIgY29ubmVjdGlvbl9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxuXG5cbnZhciBjb25uZWN0aW9uX0Nvbm5lY3Rpb24gPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIGNvbm5lY3Rpb25fZXh0ZW5kcyhDb25uZWN0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbm5lY3Rpb24oaWQsIHRyYW5zcG9ydCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pZCA9IGlkO1xuICAgICAgICBfdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG4gICAgICAgIF90aGlzLmFjdGl2aXR5VGltZW91dCA9IHRyYW5zcG9ydC5hY3Rpdml0eVRpbWVvdXQ7XG4gICAgICAgIF90aGlzLmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5oYW5kbGVzQWN0aXZpdHlDaGVja3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zcG9ydC5oYW5kbGVzQWN0aXZpdHlDaGVja3MoKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuc2VuZChkYXRhKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLnNlbmRfZXZlbnQgPSBmdW5jdGlvbiAobmFtZSwgZGF0YSwgY2hhbm5lbCkge1xuICAgICAgICB2YXIgZXZlbnQgPSB7IGV2ZW50OiBuYW1lLCBkYXRhOiBkYXRhIH07XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICBldmVudC5jaGFubmVsID0gY2hhbm5lbDtcbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIuZGVidWcoJ0V2ZW50IHNlbnQnLCBldmVudCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbmQocHJvdG9jb2xfcHJvdG9jb2wuZW5jb2RlTWVzc2FnZShldmVudCkpO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbi5wcm90b3R5cGUucGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudHJhbnNwb3J0LnN1cHBvcnRzUGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLnRyYW5zcG9ydC5waW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRfZXZlbnQoJ3B1c2hlcjpwaW5nJywge30pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb24ucHJvdG90eXBlLmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiBmdW5jdGlvbiAobWVzc2FnZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIHB1c2hlckV2ZW50O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hlckV2ZW50ID0gcHJvdG9jb2xfcHJvdG9jb2wuZGVjb2RlTWVzc2FnZShtZXNzYWdlRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdNZXNzYWdlUGFyc2VFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG1lc3NhZ2VFdmVudC5kYXRhXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHVzaGVyRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0V2ZW50IHJlY2QnLCBwdXNoZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocHVzaGVyRXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2hlcjplcnJvcic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQdXNoZXJFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHB1c2hlckV2ZW50LmRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3B1c2hlcjpwaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdwaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwdXNoZXI6cG9uZyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgncG9uZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ21lc3NhZ2UnLCBwdXNoZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2aXR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnYWN0aXZpdHknKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xvc2VkOiBmdW5jdGlvbiAoY2xvc2VFdmVudCkge1xuICAgICAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGlmIChjbG9zZUV2ZW50ICYmIGNsb3NlRXZlbnQuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVDbG9zZUV2ZW50KGNsb3NlRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Nsb3NlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdW5iaW5kTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb2JqZWN0QXBwbHkobGlzdGVuZXJzLCBmdW5jdGlvbiAobGlzdGVuZXIsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LnVuYmluZChldmVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIG9iamVjdEFwcGx5KGxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyLCBldmVudCkge1xuICAgICAgICAgICAgX3RoaXMudHJhbnNwb3J0LmJpbmQoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uLnByb3RvdHlwZS5oYW5kbGVDbG9zZUV2ZW50ID0gZnVuY3Rpb24gKGNsb3NlRXZlbnQpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHByb3RvY29sX3Byb3RvY29sLmdldENsb3NlQWN0aW9uKGNsb3NlRXZlbnQpO1xuICAgICAgICB2YXIgZXJyb3IgPSBwcm90b2NvbF9wcm90b2NvbC5nZXRDbG9zZUVycm9yKGNsb3NlRXZlbnQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgdGhpcy5lbWl0KGFjdGlvbiwgeyBhY3Rpb246IGFjdGlvbiwgZXJyb3I6IGVycm9yIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29ubmVjdGlvbjtcbn0oZGlzcGF0Y2hlcikpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgY29ubmVjdGlvbl9jb25uZWN0aW9uID0gKGNvbm5lY3Rpb25fQ29ubmVjdGlvbik7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvY29ubmVjdGlvbi9oYW5kc2hha2UvaW5kZXgudHNcblxuXG5cbnZhciBoYW5kc2hha2VfSGFuZHNoYWtlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIYW5kc2hha2UodHJhbnNwb3J0LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmJpbmRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgSGFuZHNoYWtlLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB9O1xuICAgIEhhbmRzaGFrZS5wcm90b3R5cGUuYmluZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5vbk1lc3NhZ2UgPSBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgX3RoaXMudW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm90b2NvbF9wcm90b2NvbC5wcm9jZXNzSGFuZHNoYWtlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5maW5pc2goJ2Vycm9yJywgeyBlcnJvcjogZSB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0LmFjdGlvbiA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5maW5pc2goJ2Nvbm5lY3RlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbjogbmV3IGNvbm5lY3Rpb25fY29ubmVjdGlvbihyZXN1bHQuaWQsIF90aGlzLnRyYW5zcG9ydCksXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5VGltZW91dDogcmVzdWx0LmFjdGl2aXR5VGltZW91dFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZmluaXNoKHJlc3VsdC5hY3Rpb24sIHsgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vbkNsb3NlZCA9IGZ1bmN0aW9uIChjbG9zZUV2ZW50KSB7XG4gICAgICAgICAgICBfdGhpcy51bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBwcm90b2NvbF9wcm90b2NvbC5nZXRDbG9zZUFjdGlvbihjbG9zZUV2ZW50KSB8fCAnYmFja29mZic7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBwcm90b2NvbF9wcm90b2NvbC5nZXRDbG9zZUVycm9yKGNsb3NlRXZlbnQpO1xuICAgICAgICAgICAgX3RoaXMuZmluaXNoKGFjdGlvbiwgeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmJpbmQoJ21lc3NhZ2UnLCB0aGlzLm9uTWVzc2FnZSk7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LmJpbmQoJ2Nsb3NlZCcsIHRoaXMub25DbG9zZWQpO1xuICAgIH07XG4gICAgSGFuZHNoYWtlLnByb3RvdHlwZS51bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0LnVuYmluZCgnbWVzc2FnZScsIHRoaXMub25NZXNzYWdlKTtcbiAgICAgICAgdGhpcy50cmFuc3BvcnQudW5iaW5kKCdjbG9zZWQnLCB0aGlzLm9uQ2xvc2VkKTtcbiAgICB9O1xuICAgIEhhbmRzaGFrZS5wcm90b3R5cGUuZmluaXNoID0gZnVuY3Rpb24gKGFjdGlvbiwgcGFyYW1zKSB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2soZXh0ZW5kKHsgdHJhbnNwb3J0OiB0aGlzLnRyYW5zcG9ydCwgYWN0aW9uOiBhY3Rpb24gfSwgcGFyYW1zKSk7XG4gICAgfTtcbiAgICByZXR1cm4gSGFuZHNoYWtlO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbm5lY3Rpb25faGFuZHNoYWtlID0gKGhhbmRzaGFrZV9IYW5kc2hha2UpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2F1dGgvcHVzaGVyX2F1dGhvcml6ZXIudHNcblxudmFyIHB1c2hlcl9hdXRob3JpemVyX1B1c2hlckF1dGhvcml6ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFB1c2hlckF1dGhvcml6ZXIoY2hhbm5lbCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgICAgICB2YXIgYXV0aFRyYW5zcG9ydCA9IG9wdGlvbnMuYXV0aFRyYW5zcG9ydDtcbiAgICAgICAgaWYgKHR5cGVvZiBydW50aW1lLmdldEF1dGhvcml6ZXJzKClbYXV0aFRyYW5zcG9ydF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBcIidcIiArIGF1dGhUcmFuc3BvcnQgKyBcIicgaXMgbm90IGEgcmVjb2duaXplZCBhdXRoIHRyYW5zcG9ydFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHlwZSA9IGF1dGhUcmFuc3BvcnQ7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuYXV0aE9wdGlvbnMgPSBvcHRpb25zLmF1dGggfHwge307XG4gICAgfVxuICAgIFB1c2hlckF1dGhvcml6ZXIucHJvdG90eXBlLmNvbXBvc2VRdWVyeSA9IGZ1bmN0aW9uIChzb2NrZXRJZCkge1xuICAgICAgICB2YXIgcXVlcnkgPSAnc29ja2V0X2lkPScgK1xuICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHNvY2tldElkKSArXG4gICAgICAgICAgICAnJmNoYW5uZWxfbmFtZT0nICtcbiAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmNoYW5uZWwubmFtZSk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5hdXRoT3B0aW9ucy5wYXJhbXMpIHtcbiAgICAgICAgICAgIHF1ZXJ5ICs9XG4gICAgICAgICAgICAgICAgJyYnICtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGkpICtcbiAgICAgICAgICAgICAgICAgICAgJz0nICtcbiAgICAgICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuYXV0aE9wdGlvbnMucGFyYW1zW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnk7XG4gICAgfTtcbiAgICBQdXNoZXJBdXRob3JpemVyLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIFB1c2hlckF1dGhvcml6ZXIuYXV0aG9yaXplcnMgPVxuICAgICAgICAgICAgUHVzaGVyQXV0aG9yaXplci5hdXRob3JpemVycyB8fCBydW50aW1lLmdldEF1dGhvcml6ZXJzKCk7XG4gICAgICAgIFB1c2hlckF1dGhvcml6ZXIuYXV0aG9yaXplcnNbdGhpcy50eXBlXS5jYWxsKHRoaXMsIHJ1bnRpbWUsIHNvY2tldElkLCBjYWxsYmFjayk7XG4gICAgfTtcbiAgICByZXR1cm4gUHVzaGVyQXV0aG9yaXplcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBwdXNoZXJfYXV0aG9yaXplciA9IChwdXNoZXJfYXV0aG9yaXplcl9QdXNoZXJBdXRob3JpemVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS90aW1lbGluZS90aW1lbGluZV9zZW5kZXIudHNcblxudmFyIHRpbWVsaW5lX3NlbmRlcl9UaW1lbGluZVNlbmRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGltZWxpbmVTZW5kZXIodGltZWxpbmUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IHRpbWVsaW5lO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIH1cbiAgICBUaW1lbGluZVNlbmRlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICh1c2VUTFMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lLmlzRW1wdHkoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZWxpbmUuc2VuZChydW50aW1lLlRpbWVsaW5lVHJhbnNwb3J0LmdldEFnZW50KHRoaXMsIHVzZVRMUyksIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBUaW1lbGluZVNlbmRlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0aW1lbGluZV9zZW5kZXIgPSAodGltZWxpbmVfc2VuZGVyX1RpbWVsaW5lU2VuZGVyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9jaGFubmVsLnRzXG52YXIgY2hhbm5lbF9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxuXG5cblxudmFyIGNoYW5uZWxfQ2hhbm5lbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgY2hhbm5lbF9leHRlbmRzKENoYW5uZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2hhbm5lbChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ05vIGNhbGxiYWNrcyBvbiAnICsgbmFtZSArICcgZm9yICcgKyBldmVudCk7XG4gICAgICAgIH0pIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBfdGhpcy5wdXNoZXIgPSBwdXNoZXI7XG4gICAgICAgIF90aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCB7IGF1dGg6ICcnIH0pO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAoZXZlbnQuaW5kZXhPZignY2xpZW50LScpICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQmFkRXZlbnROYW1lKFwiRXZlbnQgJ1wiICsgZXZlbnQgKyBcIicgZG9lcyBub3Qgc3RhcnQgd2l0aCAnY2xpZW50LSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmliZWQpIHtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ3RyaWdnZXJpbmdDbGllbnRFdmVudHMnKTtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKFwiQ2xpZW50IGV2ZW50IHRyaWdnZXJlZCBiZWZvcmUgY2hhbm5lbCAnc3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCcgZXZlbnQgLiBcIiArIHN1ZmZpeCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHVzaGVyLnNlbmRfZXZlbnQoZXZlbnQsIGRhdGEsIHRoaXMubmFtZSk7XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25QZW5kaW5nID0gZmFsc2U7XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIHZhciBkYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ3B1c2hlcl9pbnRlcm5hbDpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJykge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudChldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSAhPT0gMCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhID0ge307XG4gICAgICAgICAgICB0aGlzLmVtaXQoZXZlbnROYW1lLCBkYXRhLCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLmhhbmRsZVN1YnNjcmlwdGlvblN1Y2NlZWRlZEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgZXZlbnQuZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXV0aG9yaXplKHRoaXMucHVzaGVyLmNvbm5lY3Rpb24uc29ja2V0X2lkLCBmdW5jdGlvbiAoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLnN1YnNjcmlwdGlvblBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoZXJyb3IudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgncHVzaGVyOnN1YnNjcmlwdGlvbl9lcnJvcicsIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0F1dGhFcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSwgZXJyb3IgaW5zdGFuY2VvZiBIVFRQQXV0aEVycm9yID8geyBzdGF0dXM6IGVycm9yLnN0YXR1cyB9IDoge30pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLnB1c2hlci5zZW5kX2V2ZW50KCdwdXNoZXI6c3Vic2NyaWJlJywge1xuICAgICAgICAgICAgICAgICAgICBhdXRoOiBkYXRhLmF1dGgsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWxfZGF0YTogZGF0YS5jaGFubmVsX2RhdGEsXG4gICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IF90aGlzLm5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDaGFubmVsLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHVzaGVyLnNlbmRfZXZlbnQoJ3B1c2hlcjp1bnN1YnNjcmliZScsIHtcbiAgICAgICAgICAgIGNoYW5uZWw6IHRoaXMubmFtZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENoYW5uZWwucHJvdG90eXBlLmNhbmNlbFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQgPSB0cnVlO1xuICAgIH07XG4gICAgQ2hhbm5lbC5wcm90b3R5cGUucmVpbnN0YXRlU3Vic2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbkNhbmNlbGxlZCA9IGZhbHNlO1xuICAgIH07XG4gICAgcmV0dXJuIENoYW5uZWw7XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNoYW5uZWxzX2NoYW5uZWwgPSAoY2hhbm5lbF9DaGFubmVsKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9wcml2YXRlX2NoYW5uZWwudHNcbnZhciBwcml2YXRlX2NoYW5uZWxfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cbnZhciBwcml2YXRlX2NoYW5uZWxfUHJpdmF0ZUNoYW5uZWwgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIHByaXZhdGVfY2hhbm5lbF9leHRlbmRzKFByaXZhdGVDaGFubmVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByaXZhdGVDaGFubmVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFByaXZhdGVDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBhdXRob3JpemVyID0gZmFjdG9yeS5jcmVhdGVBdXRob3JpemVyKHRoaXMsIHRoaXMucHVzaGVyLmNvbmZpZyk7XG4gICAgICAgIHJldHVybiBhdXRob3JpemVyLmF1dGhvcml6ZShzb2NrZXRJZCwgY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIFByaXZhdGVDaGFubmVsO1xufShjaGFubmVsc19jaGFubmVsKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBwcml2YXRlX2NoYW5uZWwgPSAocHJpdmF0ZV9jaGFubmVsX1ByaXZhdGVDaGFubmVsKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9tZW1iZXJzLnRzXG5cbnZhciBtZW1iZXJzX01lbWJlcnMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lbWJlcnMoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgTWVtYmVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5tZW1iZXJzLCBpZCkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIGluZm86IHRoaXMubWVtYmVyc1tpZF1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBvYmplY3RBcHBseSh0aGlzLm1lbWJlcnMsIGZ1bmN0aW9uIChtZW1iZXIsIGlkKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhfdGhpcy5nZXQoaWQpKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNZW1iZXJzLnByb3RvdHlwZS5zZXRNeUlEID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHRoaXMubXlJRCA9IGlkO1xuICAgIH07XG4gICAgTWVtYmVycy5wcm90b3R5cGUub25TdWJzY3JpcHRpb24gPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uRGF0YSkge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSBzdWJzY3JpcHRpb25EYXRhLnByZXNlbmNlLmhhc2g7XG4gICAgICAgIHRoaXMuY291bnQgPSBzdWJzY3JpcHRpb25EYXRhLnByZXNlbmNlLmNvdW50O1xuICAgICAgICB0aGlzLm1lID0gdGhpcy5nZXQodGhpcy5teUlEKTtcbiAgICB9O1xuICAgIE1lbWJlcnMucHJvdG90eXBlLmFkZE1lbWJlciA9IGZ1bmN0aW9uIChtZW1iZXJEYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmdldChtZW1iZXJEYXRhLnVzZXJfaWQpID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tZW1iZXJzW21lbWJlckRhdGEudXNlcl9pZF0gPSBtZW1iZXJEYXRhLnVzZXJfaW5mbztcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG1lbWJlckRhdGEudXNlcl9pZCk7XG4gICAgfTtcbiAgICBNZW1iZXJzLnByb3RvdHlwZS5yZW1vdmVNZW1iZXIgPSBmdW5jdGlvbiAobWVtYmVyRGF0YSkge1xuICAgICAgICB2YXIgbWVtYmVyID0gdGhpcy5nZXQobWVtYmVyRGF0YS51c2VyX2lkKTtcbiAgICAgICAgaWYgKG1lbWJlcikge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMubWVtYmVyc1ttZW1iZXJEYXRhLnVzZXJfaWRdO1xuICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtZW1iZXI7XG4gICAgfTtcbiAgICBNZW1iZXJzLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0ge307XG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xuICAgICAgICB0aGlzLm15SUQgPSBudWxsO1xuICAgICAgICB0aGlzLm1lID0gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBNZW1iZXJzO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIG1lbWJlcnMgPSAobWVtYmVyc19NZW1iZXJzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jaGFubmVscy9wcmVzZW5jZV9jaGFubmVsLnRzXG52YXIgcHJlc2VuY2VfY2hhbm5lbF9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxuXG5cbnZhciBwcmVzZW5jZV9jaGFubmVsX1ByZXNlbmNlQ2hhbm5lbCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgcHJlc2VuY2VfY2hhbm5lbF9leHRlbmRzKFByZXNlbmNlQ2hhbm5lbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG5hbWUsIHB1c2hlcikgfHwgdGhpcztcbiAgICAgICAgX3RoaXMubWVtYmVycyA9IG5ldyBtZW1iZXJzKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuYXV0aG9yaXplLmNhbGwodGhpcywgc29ja2V0SWQsIGZ1bmN0aW9uIChlcnJvciwgYXV0aERhdGEpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhdXRoRGF0YSA9IGF1dGhEYXRhO1xuICAgICAgICAgICAgICAgIGlmIChhdXRoRGF0YS5jaGFubmVsX2RhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3VmZml4ID0gdXJsX3N0b3JlLmJ1aWxkTG9nU3VmZml4KCdhdXRoZW50aWNhdGlvbkVuZHBvaW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihcIkludmFsaWQgYXV0aCByZXNwb25zZSBmb3IgY2hhbm5lbCAnXCIgKyBfdGhpcy5uYW1lICsgXCInLFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIChcImV4cGVjdGVkICdjaGFubmVsX2RhdGEnIGZpZWxkLiBcIiArIHN1ZmZpeCkpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygnSW52YWxpZCBhdXRoIHJlc3BvbnNlJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGNoYW5uZWxEYXRhID0gSlNPTi5wYXJzZShhdXRoRGF0YS5jaGFubmVsX2RhdGEpO1xuICAgICAgICAgICAgICAgIF90aGlzLm1lbWJlcnMuc2V0TXlJRChjaGFubmVsRGF0YS51c2VyX2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhdXRoRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgIGlmIChldmVudE5hbWUuaW5kZXhPZigncHVzaGVyX2ludGVybmFsOicpID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUludGVybmFsRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhID0ge307XG4gICAgICAgICAgICBpZiAoZXZlbnQudXNlcl9pZCkge1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLnVzZXJfaWQgPSBldmVudC51c2VyX2lkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0KGV2ZW50TmFtZSwgZGF0YSwgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQcmVzZW5jZUNoYW5uZWwucHJvdG90eXBlLmhhbmRsZUludGVybmFsRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50O1xuICAgICAgICB2YXIgZGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIHN3aXRjaCAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdwdXNoZXJfaW50ZXJuYWw6c3Vic2NyaXB0aW9uX3N1Y2NlZWRlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVTdWJzY3JpcHRpb25TdWNjZWVkZWRFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwdXNoZXJfaW50ZXJuYWw6bWVtYmVyX2FkZGVkJzpcbiAgICAgICAgICAgICAgICB2YXIgYWRkZWRNZW1iZXIgPSB0aGlzLm1lbWJlcnMuYWRkTWVtYmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncHVzaGVyOm1lbWJlcl9hZGRlZCcsIGFkZGVkTWVtYmVyKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3B1c2hlcl9pbnRlcm5hbDptZW1iZXJfcmVtb3ZlZCc6XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZWRNZW1iZXIgPSB0aGlzLm1lbWJlcnMucmVtb3ZlTWVtYmVyKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVkTWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgncHVzaGVyOm1lbWJlcl9yZW1vdmVkJywgcmVtb3ZlZE1lbWJlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBQcmVzZW5jZUNoYW5uZWwucHJvdG90eXBlLmhhbmRsZVN1YnNjcmlwdGlvblN1Y2NlZWRlZEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1YnNjcmliZWQgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25DYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMucHVzaGVyLnVuc3Vic2NyaWJlKHRoaXMubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1lbWJlcnMub25TdWJzY3JpcHRpb24oZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgdGhpcy5tZW1iZXJzKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHJlc2VuY2VDaGFubmVsLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1lbWJlcnMucmVzZXQoKTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kaXNjb25uZWN0LmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICByZXR1cm4gUHJlc2VuY2VDaGFubmVsO1xufShwcml2YXRlX2NoYW5uZWwpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHByZXNlbmNlX2NoYW5uZWwgPSAocHJlc2VuY2VfY2hhbm5lbF9QcmVzZW5jZUNoYW5uZWwpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BzdGFibGVsaWIvdXRmOC9saWIvdXRmOC5qc1xudmFyIHV0ZjggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL0BzdGFibGVsaWIvYmFzZTY0L2xpYi9iYXNlNjQuanNcbnZhciBiYXNlNjQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NoYW5uZWxzL2VuY3J5cHRlZF9jaGFubmVsLnRzXG52YXIgZW5jcnlwdGVkX2NoYW5uZWxfZXh0ZW5kcyA9ICh1bmRlZmluZWQgJiYgdW5kZWZpbmVkLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuXG5cblxuXG5cbnZhciBlbmNyeXB0ZWRfY2hhbm5lbF9FbmNyeXB0ZWRDaGFubmVsID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBlbmNyeXB0ZWRfY2hhbm5lbF9leHRlbmRzKEVuY3J5cHRlZENoYW5uZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRW5jcnlwdGVkQ2hhbm5lbChuYW1lLCBwdXNoZXIsIG5hY2wpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgbmFtZSwgcHVzaGVyKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5rZXkgPSBudWxsO1xuICAgICAgICBfdGhpcy5uYWNsID0gbmFjbDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS5hdXRob3JpemUgPSBmdW5jdGlvbiAoc29ja2V0SWQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuYXV0aG9yaXplLmNhbGwodGhpcywgc29ja2V0SWQsIGZ1bmN0aW9uIChlcnJvciwgYXV0aERhdGEpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBhdXRoRGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNoYXJlZFNlY3JldCA9IGF1dGhEYXRhWydzaGFyZWRfc2VjcmV0J107XG4gICAgICAgICAgICBpZiAoIXNoYXJlZFNlY3JldCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihcIk5vIHNoYXJlZF9zZWNyZXQga2V5IGluIGF1dGggcGF5bG9hZCBmb3IgZW5jcnlwdGVkIGNoYW5uZWw6IFwiICsgX3RoaXMubmFtZSksIG51bGwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmtleSA9IE9iamVjdChiYXNlNjRbXCJkZWNvZGVcIl0pKHNoYXJlZFNlY3JldCk7XG4gICAgICAgICAgICBkZWxldGUgYXV0aERhdGFbJ3NoYXJlZF9zZWNyZXQnXTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGF1dGhEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBVbnN1cHBvcnRlZEZlYXR1cmUoJ0NsaWVudCBldmVudHMgYXJlIG5vdCBjdXJyZW50bHkgc3VwcG9ydGVkIGZvciBlbmNyeXB0ZWQgY2hhbm5lbHMnKTtcbiAgICB9O1xuICAgIEVuY3J5cHRlZENoYW5uZWwucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudC5ldmVudDtcbiAgICAgICAgdmFyIGRhdGEgPSBldmVudC5kYXRhO1xuICAgICAgICBpZiAoZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcl9pbnRlcm5hbDonKSA9PT0gMCB8fFxuICAgICAgICAgICAgZXZlbnROYW1lLmluZGV4T2YoJ3B1c2hlcjonKSA9PT0gMCkge1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5oYW5kbGVFdmVudC5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZUVuY3J5cHRlZEV2ZW50KGV2ZW50TmFtZSwgZGF0YSk7XG4gICAgfTtcbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS5oYW5kbGVFbmNyeXB0ZWRFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoIXRoaXMua2V5KSB7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1JlY2VpdmVkIGVuY3J5cHRlZCBldmVudCBiZWZvcmUga2V5IGhhcyBiZWVuIHJldHJpZXZlZCBmcm9tIHRoZSBhdXRoRW5kcG9pbnQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRhdGEuY2lwaGVydGV4dCB8fCAhZGF0YS5ub25jZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdVbmV4cGVjdGVkIGZvcm1hdCBmb3IgZW5jcnlwdGVkIGV2ZW50LCBleHBlY3RlZCBvYmplY3Qgd2l0aCBgY2lwaGVydGV4dGAgYW5kIGBub25jZWAgZmllbGRzLCBnb3Q6ICcgK1xuICAgICAgICAgICAgICAgIGRhdGEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaXBoZXJUZXh0ID0gT2JqZWN0KGJhc2U2NFtcImRlY29kZVwiXSkoZGF0YS5jaXBoZXJ0ZXh0KTtcbiAgICAgICAgaWYgKGNpcGhlclRleHQubGVuZ3RoIDwgdGhpcy5uYWNsLnNlY3JldGJveC5vdmVyaGVhZExlbmd0aCkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiRXhwZWN0ZWQgZW5jcnlwdGVkIGV2ZW50IGNpcGhlcnRleHQgbGVuZ3RoIHRvIGJlIFwiICsgdGhpcy5uYWNsLnNlY3JldGJveC5vdmVyaGVhZExlbmd0aCArIFwiLCBnb3Q6IFwiICsgY2lwaGVyVGV4dC5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBub25jZSA9IE9iamVjdChiYXNlNjRbXCJkZWNvZGVcIl0pKGRhdGEubm9uY2UpO1xuICAgICAgICBpZiAobm9uY2UubGVuZ3RoIDwgdGhpcy5uYWNsLnNlY3JldGJveC5ub25jZUxlbmd0aCkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiRXhwZWN0ZWQgZW5jcnlwdGVkIGV2ZW50IG5vbmNlIGxlbmd0aCB0byBiZSBcIiArIHRoaXMubmFjbC5zZWNyZXRib3gubm9uY2VMZW5ndGggKyBcIiwgZ290OiBcIiArIG5vbmNlLmxlbmd0aCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ5dGVzID0gdGhpcy5uYWNsLnNlY3JldGJveC5vcGVuKGNpcGhlclRleHQsIG5vbmNlLCB0aGlzLmtleSk7XG4gICAgICAgIGlmIChieXRlcyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdGYWlsZWQgdG8gZGVjcnlwdCBhbiBldmVudCwgcHJvYmFibHkgYmVjYXVzZSBpdCB3YXMgZW5jcnlwdGVkIHdpdGggYSBkaWZmZXJlbnQga2V5LiBGZXRjaGluZyBhIG5ldyBrZXkgZnJvbSB0aGUgYXV0aEVuZHBvaW50Li4uJyk7XG4gICAgICAgICAgICB0aGlzLmF1dGhvcml6ZSh0aGlzLnB1c2hlci5jb25uZWN0aW9uLnNvY2tldF9pZCwgZnVuY3Rpb24gKGVycm9yLCBhdXRoRGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoXCJGYWlsZWQgdG8gbWFrZSBhIHJlcXVlc3QgdG8gdGhlIGF1dGhFbmRwb2ludDogXCIgKyBhdXRoRGF0YSArIFwiLiBVbmFibGUgdG8gZmV0Y2ggbmV3IGtleSwgc28gZHJvcHBpbmcgZW5jcnlwdGVkIGV2ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ5dGVzID0gX3RoaXMubmFjbC5zZWNyZXRib3gub3BlbihjaXBoZXJUZXh0LCBub25jZSwgX3RoaXMua2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoYnl0ZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKFwiRmFpbGVkIHRvIGRlY3J5cHQgZXZlbnQgd2l0aCBuZXcga2V5LiBEcm9wcGluZyBlbmNyeXB0ZWQgZXZlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChldmVudCwgX3RoaXMuZ2V0RGF0YVRvRW1pdChieXRlcykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW1pdChldmVudCwgdGhpcy5nZXREYXRhVG9FbWl0KGJ5dGVzKSk7XG4gICAgfTtcbiAgICBFbmNyeXB0ZWRDaGFubmVsLnByb3RvdHlwZS5nZXREYXRhVG9FbWl0ID0gZnVuY3Rpb24gKGJ5dGVzKSB7XG4gICAgICAgIHZhciByYXcgPSBPYmplY3QodXRmOFtcImRlY29kZVwiXSkoYnl0ZXMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmF3KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgICAgIHJldHVybiByYXc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBFbmNyeXB0ZWRDaGFubmVsO1xufShwcml2YXRlX2NoYW5uZWwpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGVuY3J5cHRlZF9jaGFubmVsID0gKGVuY3J5cHRlZF9jaGFubmVsX0VuY3J5cHRlZENoYW5uZWwpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2Nvbm5lY3Rpb24vY29ubmVjdGlvbl9tYW5hZ2VyLnRzXG52YXIgY29ubmVjdGlvbl9tYW5hZ2VyX2V4dGVuZHMgPSAodW5kZWZpbmVkICYmIHVuZGVmaW5lZC5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcblxuXG5cblxuXG52YXIgY29ubmVjdGlvbl9tYW5hZ2VyX0Nvbm5lY3Rpb25NYW5hZ2VyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBjb25uZWN0aW9uX21hbmFnZXJfZXh0ZW5kcyhDb25uZWN0aW9uTWFuYWdlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb25uZWN0aW9uTWFuYWdlcihrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSAnaW5pdGlhbGl6ZWQnO1xuICAgICAgICBfdGhpcy5jb25uZWN0aW9uID0gbnVsbDtcbiAgICAgICAgX3RoaXMua2V5ID0ga2V5O1xuICAgICAgICBfdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgX3RoaXMudGltZWxpbmUgPSBfdGhpcy5vcHRpb25zLnRpbWVsaW5lO1xuICAgICAgICBfdGhpcy51c2luZ1RMUyA9IF90aGlzLm9wdGlvbnMudXNlVExTO1xuICAgICAgICBfdGhpcy5lcnJvckNhbGxiYWNrcyA9IF90aGlzLmJ1aWxkRXJyb3JDYWxsYmFja3MoKTtcbiAgICAgICAgX3RoaXMuY29ubmVjdGlvbkNhbGxiYWNrcyA9IF90aGlzLmJ1aWxkQ29ubmVjdGlvbkNhbGxiYWNrcyhfdGhpcy5lcnJvckNhbGxiYWNrcyk7XG4gICAgICAgIF90aGlzLmhhbmRzaGFrZUNhbGxiYWNrcyA9IF90aGlzLmJ1aWxkSGFuZHNoYWtlQ2FsbGJhY2tzKF90aGlzLmVycm9yQ2FsbGJhY2tzKTtcbiAgICAgICAgdmFyIE5ldHdvcmsgPSBydW50aW1lLmdldE5ldHdvcmsoKTtcbiAgICAgICAgTmV0d29yay5iaW5kKCdvbmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy50aW1lbGluZS5pbmZvKHsgbmV0aW5mbzogJ29ubGluZScgfSk7XG4gICAgICAgICAgICBpZiAoX3RoaXMuc3RhdGUgPT09ICdjb25uZWN0aW5nJyB8fCBfdGhpcy5zdGF0ZSA9PT0gJ3VuYXZhaWxhYmxlJykge1xuICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBOZXR3b3JrLmJpbmQoJ29mZmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy50aW1lbGluZS5pbmZvKHsgbmV0aW5mbzogJ29mZmxpbmUnIH0pO1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvbm5lY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZW5kQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMudXBkYXRlU3RyYXRlZ3koKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbiB8fCB0aGlzLnJ1bm5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdHJhdGVneS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdmYWlsZWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdjb25uZWN0aW5nJyk7XG4gICAgICAgIHRoaXMuc3RhcnRDb25uZWN0aW5nKCk7XG4gICAgICAgIHRoaXMuc2V0VW5hdmFpbGFibGVUaW1lcigpO1xuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uLnNlbmQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zZW5kX2V2ZW50ID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEsIGNoYW5uZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kX2V2ZW50KG5hbWUsIGRhdGEsIGNoYW5uZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kaXNjb25uZWN0SW50ZXJuYWxseSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKCdkaXNjb25uZWN0ZWQnKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5pc1VzaW5nVExTID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2luZ1RMUztcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zdGFydENvbm5lY3RpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5ydW5uZXIgPSBfdGhpcy5zdHJhdGVneS5jb25uZWN0KDAsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UuYWN0aW9uID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoJ2Vycm9yJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0hhbmRzaGFrZUVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBoYW5kc2hha2UuZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRpbWVsaW5lLmVycm9yKHsgaGFuZHNoYWtlRXJyb3I6IGhhbmRzaGFrZS5lcnJvciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFib3J0Q29ubmVjdGluZygpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kc2hha2VDYWxsYmFja3NbaGFuZHNoYWtlLmFjdGlvbl0oaGFuZHNoYWtlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucnVubmVyID0gdGhpcy5zdHJhdGVneS5jb25uZWN0KDAsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5hYm9ydENvbm5lY3RpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5lcikge1xuICAgICAgICAgICAgdGhpcy5ydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIHRoaXMucnVubmVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLmRpc2Nvbm5lY3RJbnRlcm5hbGx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFib3J0Q29ubmVjdGluZygpO1xuICAgICAgICB0aGlzLmNsZWFyUmV0cnlUaW1lcigpO1xuICAgICAgICB0aGlzLmNsZWFyVW5hdmFpbGFibGVUaW1lcigpO1xuICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IHRoaXMuYWJhbmRvbkNvbm5lY3Rpb24oKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29ubmVjdGlvbk1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVN0cmF0ZWd5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gdGhpcy5vcHRpb25zLmdldFN0cmF0ZWd5KHtcbiAgICAgICAgICAgIGtleTogdGhpcy5rZXksXG4gICAgICAgICAgICB0aW1lbGluZTogdGhpcy50aW1lbGluZSxcbiAgICAgICAgICAgIHVzZVRMUzogdGhpcy51c2luZ1RMU1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5yZXRyeUluID0gZnVuY3Rpb24gKGRlbGF5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudGltZWxpbmUuaW5mbyh7IGFjdGlvbjogJ3JldHJ5JywgZGVsYXk6IGRlbGF5IH0pO1xuICAgICAgICBpZiAoZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2Nvbm5lY3RpbmdfaW4nLCBNYXRoLnJvdW5kKGRlbGF5IC8gMTAwMCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmV0cnlUaW1lciA9IG5ldyBPbmVPZmZUaW1lcihkZWxheSB8fCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNjb25uZWN0SW50ZXJuYWxseSgpO1xuICAgICAgICAgICAgX3RoaXMuY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5jbGVhclJldHJ5VGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJldHJ5VGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMucmV0cnlUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgICAgICB0aGlzLnJldHJ5VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2V0VW5hdmFpbGFibGVUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy51bmF2YWlsYWJsZVRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKHRoaXMub3B0aW9ucy51bmF2YWlsYWJsZVRpbWVvdXQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXRlKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5jbGVhclVuYXZhaWxhYmxlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVuYXZhaWxhYmxlVGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMudW5hdmFpbGFibGVUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5zZW5kQWN0aXZpdHlDaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24ucGluZygpO1xuICAgICAgICB0aGlzLmFjdGl2aXR5VGltZXIgPSBuZXcgT25lT2ZmVGltZXIodGhpcy5vcHRpb25zLnBvbmdUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy50aW1lbGluZS5lcnJvcih7IHBvbmdfdGltZWRfb3V0OiBfdGhpcy5vcHRpb25zLnBvbmdUaW1lb3V0IH0pO1xuICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUucmVzZXRBY3Rpdml0eUNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnN0b3BBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb24gJiYgIXRoaXMuY29ubmVjdGlvbi5oYW5kbGVzQWN0aXZpdHlDaGVja3MoKSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eVRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKHRoaXMuYWN0aXZpdHlUaW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2VuZEFjdGl2aXR5Q2hlY2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc3RvcEFjdGl2aXR5Q2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXR5VGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlUaW1lci5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5idWlsZENvbm5lY3Rpb25DYWxsYmFja3MgPSBmdW5jdGlvbiAoZXJyb3JDYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgZXJyb3JDYWxsYmFja3MsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVzZXRBY3Rpdml0eUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdCgnbWVzc2FnZScsIG1lc3NhZ2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZW5kX2V2ZW50KCdwdXNoZXI6cG9uZycsIHt9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3Rpdml0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZpdHlDaGVjaygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hYmFuZG9uQ29ubmVjdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5zaG91bGRSZXRyeSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJldHJ5SW4oMTAwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS5idWlsZEhhbmRzaGFrZUNhbGxiYWNrcyA9IGZ1bmN0aW9uIChlcnJvckNhbGxiYWNrcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCBlcnJvckNhbGxiYWNrcywge1xuICAgICAgICAgICAgY29ubmVjdGVkOiBmdW5jdGlvbiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZpdHlUaW1lb3V0ID0gTWF0aC5taW4oX3RoaXMub3B0aW9ucy5hY3Rpdml0eVRpbWVvdXQsIGhhbmRzaGFrZS5hY3Rpdml0eVRpbWVvdXQsIGhhbmRzaGFrZS5jb25uZWN0aW9uLmFjdGl2aXR5VGltZW91dCB8fCBJbmZpbml0eSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xlYXJVbmF2YWlsYWJsZVRpbWVyKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0Q29ubmVjdGlvbihoYW5kc2hha2UuY29ubmVjdGlvbik7XG4gICAgICAgICAgICAgICAgX3RoaXMuc29ja2V0X2lkID0gX3RoaXMuY29ubmVjdGlvbi5pZDtcbiAgICAgICAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0ZSgnY29ubmVjdGVkJywgeyBzb2NrZXRfaWQ6IF90aGlzLnNvY2tldF9pZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYnVpbGRFcnJvckNhbGxiYWNrcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHdpdGhFcnJvckVtaXR0ZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KCdlcnJvcicsIHsgdHlwZTogJ1dlYlNvY2tldEVycm9yJywgZXJyb3I6IHJlc3VsdC5lcnJvciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0bHNfb25seTogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXNpbmdUTFMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVN0cmF0ZWd5KCk7XG4gICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcmVmdXNlZDogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBiYWNrb2ZmOiB3aXRoRXJyb3JFbWl0dGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXRyeUluKDEwMDApO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZXRyeTogd2l0aEVycm9yRW1pdHRlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmV0cnlJbigwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2V0Q29ubmVjdGlvbiA9IGZ1bmN0aW9uIChjb25uZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XG4gICAgICAgIGZvciAodmFyIGV2ZW50IGluIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrcykge1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoZXZlbnQsIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrc1tldmVudF0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXRBY3Rpdml0eUNoZWNrKCk7XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuYWJhbmRvbkNvbm5lY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wQWN0aXZpdHlDaGVjaygpO1xuICAgICAgICBmb3IgKHZhciBldmVudCBpbiB0aGlzLmNvbm5lY3Rpb25DYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi51bmJpbmQoZXZlbnQsIHRoaXMuY29ubmVjdGlvbkNhbGxiYWNrc1tldmVudF0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0aW9uID0gdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24gPSBudWxsO1xuICAgICAgICByZXR1cm4gY29ubmVjdGlvbjtcbiAgICB9O1xuICAgIENvbm5lY3Rpb25NYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uIChuZXdTdGF0ZSwgZGF0YSkge1xuICAgICAgICB2YXIgcHJldmlvdXNTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgaWYgKHByZXZpb3VzU3RhdGUgIT09IG5ld1N0YXRlKSB7XG4gICAgICAgICAgICB2YXIgbmV3U3RhdGVEZXNjcmlwdGlvbiA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlRGVzY3JpcHRpb24gPT09ICdjb25uZWN0ZWQnKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGVEZXNjcmlwdGlvbiArPSAnIHdpdGggbmV3IHNvY2tldCBJRCAnICsgZGF0YS5zb2NrZXRfaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1N0YXRlIGNoYW5nZWQnLCBwcmV2aW91c1N0YXRlICsgJyAtPiAnICsgbmV3U3RhdGVEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oeyBzdGF0ZTogbmV3U3RhdGUsIHBhcmFtczogZGF0YSB9KTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnc3RhdGVfY2hhbmdlJywgeyBwcmV2aW91czogcHJldmlvdXNTdGF0ZSwgY3VycmVudDogbmV3U3RhdGUgfSk7XG4gICAgICAgICAgICB0aGlzLmVtaXQobmV3U3RhdGUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb25uZWN0aW9uTWFuYWdlci5wcm90b3R5cGUuc2hvdWxkUmV0cnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSAnY29ubmVjdGluZycgfHwgdGhpcy5zdGF0ZSA9PT0gJ2Nvbm5lY3RlZCc7XG4gICAgfTtcbiAgICByZXR1cm4gQ29ubmVjdGlvbk1hbmFnZXI7XG59KGRpc3BhdGNoZXIpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbm5lY3Rpb25fbWFuYWdlciA9IChjb25uZWN0aW9uX21hbmFnZXJfQ29ubmVjdGlvbk1hbmFnZXIpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL2NoYW5uZWxzL2NoYW5uZWxzLnRzXG5cblxuXG5cbnZhciBjaGFubmVsc19DaGFubmVscyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2hhbm5lbHMoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG4gICAgQ2hhbm5lbHMucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW25hbWVdID0gY3JlYXRlQ2hhbm5lbChuYW1lLCBwdXNoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgIH07XG4gICAgQ2hhbm5lbHMucHJvdG90eXBlLmFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcyh0aGlzLmNoYW5uZWxzKTtcbiAgICB9O1xuICAgIENoYW5uZWxzLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHNbbmFtZV07XG4gICAgfTtcbiAgICBDaGFubmVscy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzW25hbWVdO1xuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tuYW1lXTtcbiAgICAgICAgcmV0dXJuIGNoYW5uZWw7XG4gICAgfTtcbiAgICBDaGFubmVscy5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb2JqZWN0QXBwbHkodGhpcy5jaGFubmVscywgZnVuY3Rpb24gKGNoYW5uZWwpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDaGFubmVscztcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjaGFubmVscyA9IChjaGFubmVsc19DaGFubmVscyk7XG5mdW5jdGlvbiBjcmVhdGVDaGFubmVsKG5hbWUsIHB1c2hlcikge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtZW5jcnlwdGVkLScpID09PSAwKSB7XG4gICAgICAgIGlmIChwdXNoZXIuY29uZmlnLm5hY2wpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZUVuY3J5cHRlZENoYW5uZWwobmFtZSwgcHVzaGVyLCBwdXNoZXIuY29uZmlnLm5hY2wpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJNc2cgPSAnVHJpZWQgdG8gc3Vic2NyaWJlIHRvIGEgcHJpdmF0ZS1lbmNyeXB0ZWQtIGNoYW5uZWwgYnV0IG5vIG5hY2wgaW1wbGVtZW50YXRpb24gYXZhaWxhYmxlJztcbiAgICAgICAgdmFyIHN1ZmZpeCA9IHVybF9zdG9yZS5idWlsZExvZ1N1ZmZpeCgnZW5jcnlwdGVkQ2hhbm5lbFN1cHBvcnQnKTtcbiAgICAgICAgdGhyb3cgbmV3IFVuc3VwcG9ydGVkRmVhdHVyZShlcnJNc2cgKyBcIi4gXCIgKyBzdWZmaXgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lLmluZGV4T2YoJ3ByaXZhdGUtJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuY3JlYXRlUHJpdmF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZS5pbmRleE9mKCdwcmVzZW5jZS0nKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVQcmVzZW5jZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWN0b3J5LmNyZWF0ZUNoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9XG59XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdXRpbHMvZmFjdG9yeS50c1xuXG5cblxuXG5cblxuXG5cblxuXG52YXIgRmFjdG9yeSA9IHtcbiAgICBjcmVhdGVDaGFubmVsczogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IGNoYW5uZWxzKCk7XG4gICAgfSxcbiAgICBjcmVhdGVDb25uZWN0aW9uTWFuYWdlcjogZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IGNvbm5lY3Rpb25fbWFuYWdlcihrZXksIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgY3JlYXRlQ2hhbm5lbDogZnVuY3Rpb24gKG5hbWUsIHB1c2hlcikge1xuICAgICAgICByZXR1cm4gbmV3IGNoYW5uZWxzX2NoYW5uZWwobmFtZSwgcHVzaGVyKTtcbiAgICB9LFxuICAgIGNyZWF0ZVByaXZhdGVDaGFubmVsOiBmdW5jdGlvbiAobmFtZSwgcHVzaGVyKSB7XG4gICAgICAgIHJldHVybiBuZXcgcHJpdmF0ZV9jaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfSxcbiAgICBjcmVhdGVQcmVzZW5jZUNoYW5uZWw6IGZ1bmN0aW9uIChuYW1lLCBwdXNoZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBwcmVzZW5jZV9jaGFubmVsKG5hbWUsIHB1c2hlcik7XG4gICAgfSxcbiAgICBjcmVhdGVFbmNyeXB0ZWRDaGFubmVsOiBmdW5jdGlvbiAobmFtZSwgcHVzaGVyLCBuYWNsKSB7XG4gICAgICAgIHJldHVybiBuZXcgZW5jcnlwdGVkX2NoYW5uZWwobmFtZSwgcHVzaGVyLCBuYWNsKTtcbiAgICB9LFxuICAgIGNyZWF0ZVRpbWVsaW5lU2VuZGVyOiBmdW5jdGlvbiAodGltZWxpbmUsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aW1lbGluZV9zZW5kZXIodGltZWxpbmUsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgY3JlYXRlQXV0aG9yaXplcjogZnVuY3Rpb24gKGNoYW5uZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXV0aG9yaXplcikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuYXV0aG9yaXplcihjaGFubmVsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IHB1c2hlcl9hdXRob3JpemVyKGNoYW5uZWwsIG9wdGlvbnMpO1xuICAgIH0sXG4gICAgY3JlYXRlSGFuZHNoYWtlOiBmdW5jdGlvbiAodHJhbnNwb3J0LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gbmV3IGNvbm5lY3Rpb25faGFuZHNoYWtlKHRyYW5zcG9ydCwgY2FsbGJhY2spO1xuICAgIH0sXG4gICAgY3JlYXRlQXNzaXN0YW50VG9UaGVUcmFuc3BvcnRNYW5hZ2VyOiBmdW5jdGlvbiAobWFuYWdlciwgdHJhbnNwb3J0LCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgYXNzaXN0YW50X3RvX3RoZV90cmFuc3BvcnRfbWFuYWdlcihtYW5hZ2VyLCB0cmFuc3BvcnQsIG9wdGlvbnMpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBmYWN0b3J5ID0gKEZhY3RvcnkpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RyYW5zcG9ydHMvdHJhbnNwb3J0X21hbmFnZXIudHNcblxudmFyIHRyYW5zcG9ydF9tYW5hZ2VyX1RyYW5zcG9ydE1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydE1hbmFnZXIob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLmxpdmVzTGVmdCA9IHRoaXMub3B0aW9ucy5saXZlcyB8fCBJbmZpbml0eTtcbiAgICB9XG4gICAgVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUuZ2V0QXNzaXN0YW50ID0gZnVuY3Rpb24gKHRyYW5zcG9ydCkge1xuICAgICAgICByZXR1cm4gZmFjdG9yeS5jcmVhdGVBc3Npc3RhbnRUb1RoZVRyYW5zcG9ydE1hbmFnZXIodGhpcywgdHJhbnNwb3J0LCB7XG4gICAgICAgICAgICBtaW5QaW5nRGVsYXk6IHRoaXMub3B0aW9ucy5taW5QaW5nRGVsYXksXG4gICAgICAgICAgICBtYXhQaW5nRGVsYXk6IHRoaXMub3B0aW9ucy5tYXhQaW5nRGVsYXlcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBUcmFuc3BvcnRNYW5hZ2VyLnByb3RvdHlwZS5pc0FsaXZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXZlc0xlZnQgPiAwO1xuICAgIH07XG4gICAgVHJhbnNwb3J0TWFuYWdlci5wcm90b3R5cGUucmVwb3J0RGVhdGggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGl2ZXNMZWZ0IC09IDE7XG4gICAgfTtcbiAgICByZXR1cm4gVHJhbnNwb3J0TWFuYWdlcjtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciB0cmFuc3BvcnRfbWFuYWdlciA9ICh0cmFuc3BvcnRfbWFuYWdlcl9UcmFuc3BvcnRNYW5hZ2VyKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL3NlcXVlbnRpYWxfc3RyYXRlZ3kudHNcblxuXG5cbnZhciBzZXF1ZW50aWFsX3N0cmF0ZWd5X1NlcXVlbnRpYWxTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VxdWVudGlhbFN0cmF0ZWd5KHN0cmF0ZWdpZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gc3RyYXRlZ2llcztcbiAgICAgICAgdGhpcy5sb29wID0gQm9vbGVhbihvcHRpb25zLmxvb3ApO1xuICAgICAgICB0aGlzLmZhaWxGYXN0ID0gQm9vbGVhbihvcHRpb25zLmZhaWxGYXN0KTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gb3B0aW9ucy50aW1lb3V0O1xuICAgICAgICB0aGlzLnRpbWVvdXRMaW1pdCA9IG9wdGlvbnMudGltZW91dExpbWl0O1xuICAgIH1cbiAgICBTZXF1ZW50aWFsU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYW55KHRoaXMuc3RyYXRlZ2llcywgdXRpbC5tZXRob2QoJ2lzU3VwcG9ydGVkJykpO1xuICAgIH07XG4gICAgU2VxdWVudGlhbFN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3RyYXRlZ2llcyA9IHRoaXMuc3RyYXRlZ2llcztcbiAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgICAgICB2YXIgdGltZW91dCA9IHRoaXMudGltZW91dDtcbiAgICAgICAgdmFyIHJ1bm5lciA9IG51bGw7XG4gICAgICAgIHZhciB0cnlOZXh0U3RyYXRlZ3kgPSBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgaWYgKGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGhhbmRzaGFrZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCArIDE7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmxvb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgJSBzdHJhdGVnaWVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQgPCBzdHJhdGVnaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHRpbWVvdXQgKiAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLnRpbWVvdXRMaW1pdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBNYXRoLm1pbih0aW1lb3V0LCBfdGhpcy50aW1lb3V0TGltaXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lciA9IF90aGlzLnRyeVN0cmF0ZWd5KHN0cmF0ZWdpZXNbY3VycmVudF0sIG1pblByaW9yaXR5LCB7IHRpbWVvdXQ6IHRpbWVvdXQsIGZhaWxGYXN0OiBfdGhpcy5mYWlsRmFzdCB9LCB0cnlOZXh0U3RyYXRlZ3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBydW5uZXIgPSB0aGlzLnRyeVN0cmF0ZWd5KHN0cmF0ZWdpZXNbY3VycmVudF0sIG1pblByaW9yaXR5LCB7IHRpbWVvdXQ6IHRpbWVvdXQsIGZhaWxGYXN0OiB0aGlzLmZhaWxGYXN0IH0sIHRyeU5leHRTdHJhdGVneSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgU2VxdWVudGlhbFN0cmF0ZWd5LnByb3RvdHlwZS50cnlTdHJhdGVneSA9IGZ1bmN0aW9uIChzdHJhdGVneSwgbWluUHJpb3JpdHksIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciB0aW1lciA9IG51bGw7XG4gICAgICAgIHZhciBydW5uZXIgPSBudWxsO1xuICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgdGltZXIgPSBuZXcgT25lT2ZmVGltZXIob3B0aW9ucy50aW1lb3V0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBydW5uZXIgPSBzdHJhdGVneS5jb25uZWN0KG1pblByaW9yaXR5LCBmdW5jdGlvbiAoZXJyb3IsIGhhbmRzaGFrZSkge1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIHRpbWVyICYmIHRpbWVyLmlzUnVubmluZygpICYmICFvcHRpb25zLmZhaWxGYXN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbWVyKSB7XG4gICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIGhhbmRzaGFrZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFNlcXVlbnRpYWxTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzZXF1ZW50aWFsX3N0cmF0ZWd5ID0gKHNlcXVlbnRpYWxfc3RyYXRlZ3lfU2VxdWVudGlhbFN0cmF0ZWd5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2Jlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3kudHNcblxuXG52YXIgYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneV9CZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5KHN0cmF0ZWdpZXMpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVnaWVzID0gc3RyYXRlZ2llcztcbiAgICB9XG4gICAgQmVzdENvbm5lY3RlZEV2ZXJTdHJhdGVneS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhbnkodGhpcy5zdHJhdGVnaWVzLCB1dGlsLm1ldGhvZCgnaXNTdXBwb3J0ZWQnKSk7XG4gICAgfTtcbiAgICBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY29ubmVjdCh0aGlzLnN0cmF0ZWdpZXMsIG1pblByaW9yaXR5LCBmdW5jdGlvbiAoaSwgcnVubmVycykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJvciwgaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyc1tpXS5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsUnVubmVyc0ZhaWxlZChydW5uZXJzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHBseShydW5uZXJzLCBmdW5jdGlvbiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5lci5mb3JjZU1pblByaW9yaXR5KGhhbmRzaGFrZS50cmFuc3BvcnQucHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGhhbmRzaGFrZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBCZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3kgPSAoYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneV9CZXN0Q29ubmVjdGVkRXZlclN0cmF0ZWd5KTtcbmZ1bmN0aW9uIGNvbm5lY3Qoc3RyYXRlZ2llcywgbWluUHJpb3JpdHksIGNhbGxiYWNrQnVpbGRlcikge1xuICAgIHZhciBydW5uZXJzID0gbWFwKHN0cmF0ZWdpZXMsIGZ1bmN0aW9uIChzdHJhdGVneSwgaSwgXywgcnMpIHtcbiAgICAgICAgcmV0dXJuIHN0cmF0ZWd5LmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrQnVpbGRlcihpLCBycykpO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhcHBseShydW5uZXJzLCBhYm9ydFJ1bm5lcik7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICBhcHBseShydW5uZXJzLCBmdW5jdGlvbiAocnVubmVyKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBhbGxSdW5uZXJzRmFpbGVkKHJ1bm5lcnMpIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbnNfYWxsKHJ1bm5lcnMsIGZ1bmN0aW9uIChydW5uZXIpIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocnVubmVyLmVycm9yKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFib3J0UnVubmVyKHJ1bm5lcikge1xuICAgIGlmICghcnVubmVyLmVycm9yICYmICFydW5uZXIuYWJvcnRlZCkge1xuICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgcnVubmVyLmFib3J0ZWQgPSB0cnVlO1xuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2NhY2hlZF9zdHJhdGVneS50c1xuXG5cblxuXG52YXIgY2FjaGVkX3N0cmF0ZWd5X0NhY2hlZFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDYWNoZWRTdHJhdGVneShzdHJhdGVneSwgdHJhbnNwb3J0cywgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgICAgIHRoaXMudHJhbnNwb3J0cyA9IHRyYW5zcG9ydHM7XG4gICAgICAgIHRoaXMudHRsID0gb3B0aW9ucy50dGwgfHwgMTgwMCAqIDEwMDA7XG4gICAgICAgIHRoaXMudXNpbmdUTFMgPSBvcHRpb25zLnVzZVRMUztcbiAgICAgICAgdGhpcy50aW1lbGluZSA9IG9wdGlvbnMudGltZWxpbmU7XG4gICAgfVxuICAgIENhY2hlZFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9O1xuICAgIENhY2hlZFN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgdXNpbmdUTFMgPSB0aGlzLnVzaW5nVExTO1xuICAgICAgICB2YXIgaW5mbyA9IGZldGNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpO1xuICAgICAgICB2YXIgc3RyYXRlZ2llcyA9IFt0aGlzLnN0cmF0ZWd5XTtcbiAgICAgICAgaWYgKGluZm8gJiYgaW5mby50aW1lc3RhbXAgKyB0aGlzLnR0bCA+PSB1dGlsLm5vdygpKSB7XG4gICAgICAgICAgICB2YXIgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnRzW2luZm8udHJhbnNwb3J0XTtcbiAgICAgICAgICAgIGlmICh0cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lLmluZm8oe1xuICAgICAgICAgICAgICAgICAgICBjYWNoZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydDogaW5mby50cmFuc3BvcnQsXG4gICAgICAgICAgICAgICAgICAgIGxhdGVuY3k6IGluZm8ubGF0ZW5jeVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0cmF0ZWdpZXMucHVzaChuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbdHJhbnNwb3J0XSwge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiBpbmZvLmxhdGVuY3kgKiAyICsgMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgZmFpbEZhc3Q6IHRydWVcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0YXJ0VGltZXN0YW1wID0gdXRpbC5ub3coKTtcbiAgICAgICAgdmFyIHJ1bm5lciA9IHN0cmF0ZWdpZXNcbiAgICAgICAgICAgIC5wb3AoKVxuICAgICAgICAgICAgLmNvbm5lY3QobWluUHJpb3JpdHksIGZ1bmN0aW9uIGNiKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGZsdXNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpO1xuICAgICAgICAgICAgICAgIGlmIChzdHJhdGVnaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lc3RhbXAgPSB1dGlsLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICBydW5uZXIgPSBzdHJhdGVnaWVzLnBvcCgpLmNvbm5lY3QobWluUHJpb3JpdHksIGNiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdG9yZVRyYW5zcG9ydENhY2hlKHVzaW5nVExTLCBoYW5kc2hha2UudHJhbnNwb3J0Lm5hbWUsIHV0aWwubm93KCkgLSBzdGFydFRpbWVzdGFtcCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgaGFuZHNoYWtlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bm5lci5hYm9ydCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIENhY2hlZFN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNhY2hlZF9zdHJhdGVneSA9IChjYWNoZWRfc3RyYXRlZ3lfQ2FjaGVkU3RyYXRlZ3kpO1xuZnVuY3Rpb24gZ2V0VHJhbnNwb3J0Q2FjaGVLZXkodXNpbmdUTFMpIHtcbiAgICByZXR1cm4gJ3B1c2hlclRyYW5zcG9ydCcgKyAodXNpbmdUTFMgPyAnVExTJyA6ICdOb25UTFMnKTtcbn1cbmZ1bmN0aW9uIGZldGNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpIHtcbiAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWUuZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkQ2FjaGUgPSBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKV07XG4gICAgICAgICAgICBpZiAoc2VyaWFsaXplZENhY2hlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZENhY2hlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZmx1c2hUcmFuc3BvcnRDYWNoZSh1c2luZ1RMUyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBzdG9yZVRyYW5zcG9ydENhY2hlKHVzaW5nVExTLCB0cmFuc3BvcnQsIGxhdGVuY3kpIHtcbiAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWUuZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0b3JhZ2VbZ2V0VHJhbnNwb3J0Q2FjaGVLZXkodXNpbmdUTFMpXSA9IHNhZmVKU09OU3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHV0aWwubm93KCksXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0OiB0cmFuc3BvcnQsXG4gICAgICAgICAgICAgICAgbGF0ZW5jeTogbGF0ZW5jeVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGZsdXNoVHJhbnNwb3J0Q2FjaGUodXNpbmdUTFMpIHtcbiAgICB2YXIgc3RvcmFnZSA9IHJ1bnRpbWUuZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdG9yYWdlW2dldFRyYW5zcG9ydENhY2hlS2V5KHVzaW5nVExTKV07XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2RlbGF5ZWRfc3RyYXRlZ3kudHNcblxudmFyIGRlbGF5ZWRfc3RyYXRlZ3lfRGVsYXllZFN0cmF0ZWd5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEZWxheWVkU3RyYXRlZ3koc3RyYXRlZ3ksIF9hKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSBfYS5kZWxheTtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7IGRlbGF5OiBudW1iZXIgfTtcbiAgICB9XG4gICAgRGVsYXllZFN0cmF0ZWd5LnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9O1xuICAgIERlbGF5ZWRTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHN0cmF0ZWd5ID0gdGhpcy5zdHJhdGVneTtcbiAgICAgICAgdmFyIHJ1bm5lcjtcbiAgICAgICAgdmFyIHRpbWVyID0gbmV3IE9uZU9mZlRpbWVyKHRoaXMub3B0aW9ucy5kZWxheSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcnVubmVyID0gc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcmNlTWluUHJpb3JpdHk6IGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICAgICAgbWluUHJpb3JpdHkgPSBwO1xuICAgICAgICAgICAgICAgIGlmIChydW5uZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmVyLmZvcmNlTWluUHJpb3JpdHkocCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIERlbGF5ZWRTdHJhdGVneTtcbn0oKSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBkZWxheWVkX3N0cmF0ZWd5ID0gKGRlbGF5ZWRfc3RyYXRlZ3lfRGVsYXllZFN0cmF0ZWd5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9zdHJhdGVnaWVzL2lmX3N0cmF0ZWd5LnRzXG52YXIgSWZTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSWZTdHJhdGVneSh0ZXN0LCB0cnVlQnJhbmNoLCBmYWxzZUJyYW5jaCkge1xuICAgICAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgICAgICB0aGlzLnRydWVCcmFuY2ggPSB0cnVlQnJhbmNoO1xuICAgICAgICB0aGlzLmZhbHNlQnJhbmNoID0gZmFsc2VCcmFuY2g7XG4gICAgfVxuICAgIElmU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnJhbmNoID0gdGhpcy50ZXN0KCkgPyB0aGlzLnRydWVCcmFuY2ggOiB0aGlzLmZhbHNlQnJhbmNoO1xuICAgICAgICByZXR1cm4gYnJhbmNoLmlzU3VwcG9ydGVkKCk7XG4gICAgfTtcbiAgICBJZlN0cmF0ZWd5LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKG1pblByaW9yaXR5LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgYnJhbmNoID0gdGhpcy50ZXN0KCkgPyB0aGlzLnRydWVCcmFuY2ggOiB0aGlzLmZhbHNlQnJhbmNoO1xuICAgICAgICByZXR1cm4gYnJhbmNoLmNvbm5lY3QobWluUHJpb3JpdHksIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIHJldHVybiBJZlN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGlmX3N0cmF0ZWd5ID0gKElmU3RyYXRlZ3kpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvZmlyc3RfY29ubmVjdGVkX3N0cmF0ZWd5LnRzXG52YXIgRmlyc3RDb25uZWN0ZWRTdHJhdGVneSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRmlyc3RDb25uZWN0ZWRTdHJhdGVneShzdHJhdGVneSkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gICAgfVxuICAgIEZpcnN0Q29ubmVjdGVkU3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5pc1N1cHBvcnRlZCgpO1xuICAgIH07XG4gICAgRmlyc3RDb25uZWN0ZWRTdHJhdGVneS5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChtaW5Qcmlvcml0eSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHJ1bm5lciA9IHRoaXMuc3RyYXRlZ3kuY29ubmVjdChtaW5Qcmlvcml0eSwgZnVuY3Rpb24gKGVycm9yLCBoYW5kc2hha2UpIHtcbiAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICBydW5uZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCBoYW5kc2hha2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJ1bm5lcjtcbiAgICB9O1xuICAgIHJldHVybiBGaXJzdENvbm5lY3RlZFN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGZpcnN0X2Nvbm5lY3RlZF9zdHJhdGVneSA9IChGaXJzdENvbm5lY3RlZFN0cmF0ZWd5KTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2RlZmF1bHRfc3RyYXRlZ3kudHNcblxuXG5cblxuXG5cblxuZnVuY3Rpb24gdGVzdFN1cHBvcnRzU3RyYXRlZ3koc3RyYXRlZ3kpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gc3RyYXRlZ3kuaXNTdXBwb3J0ZWQoKTtcbiAgICB9O1xufVxudmFyIGdldERlZmF1bHRTdHJhdGVneSA9IGZ1bmN0aW9uIChjb25maWcsIGJhc2VPcHRpb25zLCBkZWZpbmVUcmFuc3BvcnQpIHtcbiAgICB2YXIgZGVmaW5lZFRyYW5zcG9ydHMgPSB7fTtcbiAgICBmdW5jdGlvbiBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneShuYW1lLCB0eXBlLCBwcmlvcml0eSwgb3B0aW9ucywgbWFuYWdlcikge1xuICAgICAgICB2YXIgdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0KGNvbmZpZywgbmFtZSwgdHlwZSwgcHJpb3JpdHksIG9wdGlvbnMsIG1hbmFnZXIpO1xuICAgICAgICBkZWZpbmVkVHJhbnNwb3J0c1tuYW1lXSA9IHRyYW5zcG9ydDtcbiAgICAgICAgcmV0dXJuIHRyYW5zcG9ydDtcbiAgICB9XG4gICAgdmFyIHdzX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBiYXNlT3B0aW9ucywge1xuICAgICAgICBob3N0Tm9uVExTOiBjb25maWcud3NIb3N0ICsgJzonICsgY29uZmlnLndzUG9ydCxcbiAgICAgICAgaG9zdFRMUzogY29uZmlnLndzSG9zdCArICc6JyArIGNvbmZpZy53c3NQb3J0LFxuICAgICAgICBodHRwUGF0aDogY29uZmlnLndzUGF0aFxuICAgIH0pO1xuICAgIHZhciB3c3Nfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHdzX29wdGlvbnMsIHtcbiAgICAgICAgdXNlVExTOiB0cnVlXG4gICAgfSk7XG4gICAgdmFyIHNvY2tqc19vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgYmFzZU9wdGlvbnMsIHtcbiAgICAgICAgaG9zdE5vblRMUzogY29uZmlnLmh0dHBIb3N0ICsgJzonICsgY29uZmlnLmh0dHBQb3J0LFxuICAgICAgICBob3N0VExTOiBjb25maWcuaHR0cEhvc3QgKyAnOicgKyBjb25maWcuaHR0cHNQb3J0LFxuICAgICAgICBodHRwUGF0aDogY29uZmlnLmh0dHBQYXRoXG4gICAgfSk7XG4gICAgdmFyIHRpbWVvdXRzID0ge1xuICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICB0aW1lb3V0OiAxNTAwMCxcbiAgICAgICAgdGltZW91dExpbWl0OiA2MDAwMFxuICAgIH07XG4gICAgdmFyIHdzX21hbmFnZXIgPSBuZXcgdHJhbnNwb3J0X21hbmFnZXIoe1xuICAgICAgICBsaXZlczogMixcbiAgICAgICAgbWluUGluZ0RlbGF5OiAxMDAwMCxcbiAgICAgICAgbWF4UGluZ0RlbGF5OiBjb25maWcuYWN0aXZpdHlUaW1lb3V0XG4gICAgfSk7XG4gICAgdmFyIHN0cmVhbWluZ19tYW5hZ2VyID0gbmV3IHRyYW5zcG9ydF9tYW5hZ2VyKHtcbiAgICAgICAgbGl2ZXM6IDIsXG4gICAgICAgIG1pblBpbmdEZWxheTogMTAwMDAsXG4gICAgICAgIG1heFBpbmdEZWxheTogY29uZmlnLmFjdGl2aXR5VGltZW91dFxuICAgIH0pO1xuICAgIHZhciB3c190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgnd3MnLCAnd3MnLCAzLCB3c19vcHRpb25zLCB3c19tYW5hZ2VyKTtcbiAgICB2YXIgd3NzX3RyYW5zcG9ydCA9IGRlZmluZVRyYW5zcG9ydFN0cmF0ZWd5KCd3c3MnLCAnd3MnLCAzLCB3c3Nfb3B0aW9ucywgd3NfbWFuYWdlcik7XG4gICAgdmFyIHNvY2tqc190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgnc29ja2pzJywgJ3NvY2tqcycsIDEsIHNvY2tqc19vcHRpb25zKTtcbiAgICB2YXIgeGhyX3N0cmVhbWluZ190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgneGhyX3N0cmVhbWluZycsICd4aHJfc3RyZWFtaW5nJywgMSwgc29ja2pzX29wdGlvbnMsIHN0cmVhbWluZ19tYW5hZ2VyKTtcbiAgICB2YXIgeGRyX3N0cmVhbWluZ190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgneGRyX3N0cmVhbWluZycsICd4ZHJfc3RyZWFtaW5nJywgMSwgc29ja2pzX29wdGlvbnMsIHN0cmVhbWluZ19tYW5hZ2VyKTtcbiAgICB2YXIgeGhyX3BvbGxpbmdfdHJhbnNwb3J0ID0gZGVmaW5lVHJhbnNwb3J0U3RyYXRlZ3koJ3hocl9wb2xsaW5nJywgJ3hocl9wb2xsaW5nJywgMSwgc29ja2pzX29wdGlvbnMpO1xuICAgIHZhciB4ZHJfcG9sbGluZ190cmFuc3BvcnQgPSBkZWZpbmVUcmFuc3BvcnRTdHJhdGVneSgneGRyX3BvbGxpbmcnLCAneGRyX3BvbGxpbmcnLCAxLCBzb2NranNfb3B0aW9ucyk7XG4gICAgdmFyIHdzX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbd3NfdHJhbnNwb3J0XSwgdGltZW91dHMpO1xuICAgIHZhciB3c3NfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5KFt3c3NfdHJhbnNwb3J0XSwgdGltZW91dHMpO1xuICAgIHZhciBzb2NranNfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5KFtzb2NranNfdHJhbnNwb3J0XSwgdGltZW91dHMpO1xuICAgIHZhciBzdHJlYW1pbmdfbG9vcCA9IG5ldyBzZXF1ZW50aWFsX3N0cmF0ZWd5KFtcbiAgICAgICAgbmV3IGlmX3N0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHhocl9zdHJlYW1pbmdfdHJhbnNwb3J0KSwgeGhyX3N0cmVhbWluZ190cmFuc3BvcnQsIHhkcl9zdHJlYW1pbmdfdHJhbnNwb3J0KVxuICAgIF0sIHRpbWVvdXRzKTtcbiAgICB2YXIgcG9sbGluZ19sb29wID0gbmV3IHNlcXVlbnRpYWxfc3RyYXRlZ3koW1xuICAgICAgICBuZXcgaWZfc3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3koeGhyX3BvbGxpbmdfdHJhbnNwb3J0KSwgeGhyX3BvbGxpbmdfdHJhbnNwb3J0LCB4ZHJfcG9sbGluZ190cmFuc3BvcnQpXG4gICAgXSwgdGltZW91dHMpO1xuICAgIHZhciBodHRwX2xvb3AgPSBuZXcgc2VxdWVudGlhbF9zdHJhdGVneShbXG4gICAgICAgIG5ldyBpZl9zdHJhdGVneSh0ZXN0U3VwcG9ydHNTdHJhdGVneShzdHJlYW1pbmdfbG9vcCksIG5ldyBiZXN0X2Nvbm5lY3RlZF9ldmVyX3N0cmF0ZWd5KFtcbiAgICAgICAgICAgIHN0cmVhbWluZ19sb29wLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3kocG9sbGluZ19sb29wLCB7IGRlbGF5OiA0MDAwIH0pXG4gICAgICAgIF0pLCBwb2xsaW5nX2xvb3ApXG4gICAgXSwgdGltZW91dHMpO1xuICAgIHZhciBodHRwX2ZhbGxiYWNrX2xvb3AgPSBuZXcgaWZfc3RyYXRlZ3kodGVzdFN1cHBvcnRzU3RyYXRlZ3koaHR0cF9sb29wKSwgaHR0cF9sb29wLCBzb2NranNfbG9vcCk7XG4gICAgdmFyIHdzU3RyYXRlZ3k7XG4gICAgaWYgKGJhc2VPcHRpb25zLnVzZVRMUykge1xuICAgICAgICB3c1N0cmF0ZWd5ID0gbmV3IGJlc3RfY29ubmVjdGVkX2V2ZXJfc3RyYXRlZ3koW1xuICAgICAgICAgICAgd3NfbG9vcCxcbiAgICAgICAgICAgIG5ldyBkZWxheWVkX3N0cmF0ZWd5KGh0dHBfZmFsbGJhY2tfbG9vcCwgeyBkZWxheTogMjAwMCB9KVxuICAgICAgICBdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdzU3RyYXRlZ3kgPSBuZXcgYmVzdF9jb25uZWN0ZWRfZXZlcl9zdHJhdGVneShbXG4gICAgICAgICAgICB3c19sb29wLFxuICAgICAgICAgICAgbmV3IGRlbGF5ZWRfc3RyYXRlZ3kod3NzX2xvb3AsIHsgZGVsYXk6IDIwMDAgfSksXG4gICAgICAgICAgICBuZXcgZGVsYXllZF9zdHJhdGVneShodHRwX2ZhbGxiYWNrX2xvb3AsIHsgZGVsYXk6IDUwMDAgfSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgY2FjaGVkX3N0cmF0ZWd5KG5ldyBmaXJzdF9jb25uZWN0ZWRfc3RyYXRlZ3kobmV3IGlmX3N0cmF0ZWd5KHRlc3RTdXBwb3J0c1N0cmF0ZWd5KHdzX3RyYW5zcG9ydCksIHdzU3RyYXRlZ3ksIGh0dHBfZmFsbGJhY2tfbG9vcCkpLCBkZWZpbmVkVHJhbnNwb3J0cywge1xuICAgICAgICB0dGw6IDE4MDAwMDAsXG4gICAgICAgIHRpbWVsaW5lOiBiYXNlT3B0aW9ucy50aW1lbGluZSxcbiAgICAgICAgdXNlVExTOiBiYXNlT3B0aW9ucy51c2VUTFNcbiAgICB9KTtcbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBkZWZhdWx0X3N0cmF0ZWd5ID0gKGdldERlZmF1bHRTdHJhdGVneSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi90cmFuc3BvcnRzL3RyYW5zcG9ydF9jb25uZWN0aW9uX2luaXRpYWxpemVyLnRzXG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydF9jb25uZWN0aW9uX2luaXRpYWxpemVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2VsZi50aW1lbGluZS5pbmZvKHNlbGYuYnVpbGRUaW1lbGluZU1lc3NhZ2Uoe1xuICAgICAgICB0cmFuc3BvcnQ6IHNlbGYubmFtZSArIChzZWxmLm9wdGlvbnMudXNlVExTID8gJ3MnIDogJycpXG4gICAgfSkpO1xuICAgIGlmIChzZWxmLmhvb2tzLmlzSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgICBzZWxmLmNoYW5nZVN0YXRlKCdpbml0aWFsaXplZCcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWxmLmhvb2tzLmZpbGUpIHtcbiAgICAgICAgc2VsZi5jaGFuZ2VTdGF0ZSgnaW5pdGlhbGl6aW5nJyk7XG4gICAgICAgIERlcGVuZGVuY2llcy5sb2FkKHNlbGYuaG9va3MuZmlsZSwgeyB1c2VUTFM6IHNlbGYub3B0aW9ucy51c2VUTFMgfSwgZnVuY3Rpb24gKGVycm9yLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHNlbGYuaG9va3MuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VTdGF0ZSgnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgfVxufSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL3dlYi9odHRwL2h0dHBfeGRvbWFpbl9yZXF1ZXN0LnRzXG5cbnZhciBodHRwX3hkb21haW5fcmVxdWVzdF9ob29rcyA9IHtcbiAgICBnZXRSZXF1ZXN0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHZhciB4ZHIgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICAgIHhkci5vbnRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnZXJyb3InLCBuZXcgUmVxdWVzdFRpbWVkT3V0KCkpO1xuICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHhkci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdlcnJvcicsIGUpO1xuICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHhkci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHhkci5yZXNwb25zZVRleHQgJiYgeGRyLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoMjAwLCB4ZHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgeGRyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4ZHIucmVzcG9uc2VUZXh0ICYmIHhkci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHNvY2tldC5vbkNodW5rKDIwMCwgeGRyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnZmluaXNoZWQnLCAyMDApO1xuICAgICAgICAgICAgc29ja2V0LmNsb3NlKCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB4ZHI7XG4gICAgfSxcbiAgICBhYm9ydFJlcXVlc3Q6IGZ1bmN0aW9uICh4ZHIpIHtcbiAgICAgICAgeGRyLm9udGltZW91dCA9IHhkci5vbmVycm9yID0geGRyLm9ucHJvZ3Jlc3MgPSB4ZHIub25sb2FkID0gbnVsbDtcbiAgICAgICAgeGRyLmFib3J0KCk7XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfeGRvbWFpbl9yZXF1ZXN0ID0gKGh0dHBfeGRvbWFpbl9yZXF1ZXN0X2hvb2tzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9odHRwL2h0dHBfcmVxdWVzdC50c1xudmFyIGh0dHBfcmVxdWVzdF9leHRlbmRzID0gKHVuZGVmaW5lZCAmJiB1bmRlZmluZWQuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5cblxudmFyIE1BWF9CVUZGRVJfTEVOR1RIID0gMjU2ICogMTAyNDtcbnZhciBodHRwX3JlcXVlc3RfSFRUUFJlcXVlc3QgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIGh0dHBfcmVxdWVzdF9leHRlbmRzKEhUVFBSZXF1ZXN0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEhUVFBSZXF1ZXN0KGhvb2tzLCBtZXRob2QsIHVybCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5ob29rcyA9IGhvb2tzO1xuICAgICAgICBfdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIF90aGlzLnVybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy54aHIgPSB0aGlzLmhvb2tzLmdldFJlcXVlc3QodGhpcyk7XG4gICAgICAgIHRoaXMudW5sb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jbG9zZSgpO1xuICAgICAgICB9O1xuICAgICAgICBydW50aW1lLmFkZFVubG9hZExpc3RlbmVyKHRoaXMudW5sb2FkZXIpO1xuICAgICAgICB0aGlzLnhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMueGhyLnNlbmQocGF5bG9hZCk7XG4gICAgfTtcbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVubG9hZGVyKSB7XG4gICAgICAgICAgICBydW50aW1lLnJlbW92ZVVubG9hZExpc3RlbmVyKHRoaXMudW5sb2FkZXIpO1xuICAgICAgICAgICAgdGhpcy51bmxvYWRlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMueGhyKSB7XG4gICAgICAgICAgICB0aGlzLmhvb2tzLmFib3J0UmVxdWVzdCh0aGlzLnhocik7XG4gICAgICAgICAgICB0aGlzLnhociA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBSZXF1ZXN0LnByb3RvdHlwZS5vbkNodW5rID0gZnVuY3Rpb24gKHN0YXR1cywgZGF0YSkge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGNodW5rID0gdGhpcy5hZHZhbmNlQnVmZmVyKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGNodW5rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdjaHVuaycsIHsgc3RhdHVzOiBzdGF0dXMsIGRhdGE6IGNodW5rIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNCdWZmZXJUb29Mb25nKGRhdGEpKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ2J1ZmZlcl90b29fbG9uZycpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQUmVxdWVzdC5wcm90b3R5cGUuYWR2YW5jZUJ1ZmZlciA9IGZ1bmN0aW9uIChidWZmZXIpIHtcbiAgICAgICAgdmFyIHVucmVhZERhdGEgPSBidWZmZXIuc2xpY2UodGhpcy5wb3NpdGlvbik7XG4gICAgICAgIHZhciBlbmRPZkxpbmVQb3NpdGlvbiA9IHVucmVhZERhdGEuaW5kZXhPZignXFxuJyk7XG4gICAgICAgIGlmIChlbmRPZkxpbmVQb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gKz0gZW5kT2ZMaW5lUG9zaXRpb24gKyAxO1xuICAgICAgICAgICAgcmV0dXJuIHVucmVhZERhdGEuc2xpY2UoMCwgZW5kT2ZMaW5lUG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBSZXF1ZXN0LnByb3RvdHlwZS5pc0J1ZmZlclRvb0xvbmcgPSBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uID09PSBidWZmZXIubGVuZ3RoICYmIGJ1ZmZlci5sZW5ndGggPiBNQVhfQlVGRkVSX0xFTkdUSDtcbiAgICB9O1xuICAgIHJldHVybiBIVFRQUmVxdWVzdDtcbn0oZGlzcGF0Y2hlcikpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9yZXF1ZXN0ID0gKGh0dHBfcmVxdWVzdF9IVFRQUmVxdWVzdCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9zdGF0ZS50c1xudmFyIFN0YXRlO1xuKGZ1bmN0aW9uIChTdGF0ZSkge1xuICAgIFN0YXRlW1N0YXRlW1wiQ09OTkVDVElOR1wiXSA9IDBdID0gXCJDT05ORUNUSU5HXCI7XG4gICAgU3RhdGVbU3RhdGVbXCJPUEVOXCJdID0gMV0gPSBcIk9QRU5cIjtcbiAgICBTdGF0ZVtTdGF0ZVtcIkNMT1NFRFwiXSA9IDNdID0gXCJDTE9TRURcIjtcbn0pKFN0YXRlIHx8IChTdGF0ZSA9IHt9KSk7XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzdGF0ZSA9IChTdGF0ZSk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3NvY2tldC50c1xuXG5cblxudmFyIGF1dG9JbmNyZW1lbnQgPSAxO1xudmFyIGh0dHBfc29ja2V0X0hUVFBTb2NrZXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEhUVFBTb2NrZXQoaG9va3MsIHVybCkge1xuICAgICAgICB0aGlzLmhvb2tzID0gaG9va3M7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHJhbmRvbU51bWJlcigxMDAwKSArICcvJyArIHJhbmRvbVN0cmluZyg4KTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGdldExvY2F0aW9uKHVybCk7XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHN0YXRlLkNPTk5FQ1RJTkc7XG4gICAgICAgIHRoaXMub3BlblN0cmVhbSgpO1xuICAgIH1cbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFJhdyhKU09OLnN0cmluZ2lmeShbcGF5bG9hZF0pKTtcbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaG9va3Muc2VuZEhlYXJ0YmVhdCh0aGlzKTtcbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbikge1xuICAgICAgICB0aGlzLm9uQ2xvc2UoY29kZSwgcmVhc29uLCB0cnVlKTtcbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLnNlbmRSYXcgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5PUEVOKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJ1bnRpbWUuY3JlYXRlU29ja2V0UmVxdWVzdCgnUE9TVCcsIGdldFVuaXF1ZVVSTChnZXRTZW5kVVJMKHRoaXMubG9jYXRpb24sIHRoaXMuc2Vzc2lvbikpKS5zdGFydChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5yZWNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VTdHJlYW0oKTtcbiAgICAgICAgdGhpcy5vcGVuU3RyZWFtKCk7XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKGNvZGUsIHJlYXNvbiwgd2FzQ2xlYW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZVN0cmVhbSgpO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBzdGF0ZS5DTE9TRUQ7XG4gICAgICAgIGlmICh0aGlzLm9uY2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMub25jbG9zZSh7XG4gICAgICAgICAgICAgICAgY29kZTogY29kZSxcbiAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvbixcbiAgICAgICAgICAgICAgICB3YXNDbGVhbjogd2FzQ2xlYW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbkNodW5rID0gZnVuY3Rpb24gKGNodW5rKSB7XG4gICAgICAgIGlmIChjaHVuay5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT09IHN0YXRlLk9QRU4pIHtcbiAgICAgICAgICAgIHRoaXMub25BY3Rpdml0eSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXlsb2FkO1xuICAgICAgICB2YXIgdHlwZSA9IGNodW5rLmRhdGEuc2xpY2UoMCwgMSk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbyc6XG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IEpTT04ucGFyc2UoY2h1bmsuZGF0YS5zbGljZSgxKSB8fCAne30nKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uT3BlbihwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ1tdJyk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXlsb2FkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25FdmVudChwYXlsb2FkW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5wYXJzZShjaHVuay5kYXRhLnNsaWNlKDEpIHx8ICdudWxsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkV2ZW50KHBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgdGhpcy5ob29rcy5vbkhlYXJ0YmVhdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2MnOlxuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBKU09OLnBhcnNlKGNodW5rLmRhdGEuc2xpY2UoMSkgfHwgJ1tdJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKHBheWxvYWRbMF0sIHBheWxvYWRbMV0sIHRydWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIVFRQU29ja2V0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSBzdGF0ZS5DT05ORUNUSU5HKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmhvc3RuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5iYXNlID0gcmVwbGFjZUhvc3QodGhpcy5sb2NhdGlvbi5iYXNlLCBvcHRpb25zLmhvc3RuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHN0YXRlLk9QRU47XG4gICAgICAgICAgICBpZiAodGhpcy5vbm9wZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9ub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKDEwMDYsICdTZXJ2ZXIgbG9zdCBzZXNzaW9uJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gc3RhdGUuT1BFTiAmJiB0aGlzLm9ubWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5vbm1lc3NhZ2UoeyBkYXRhOiBldmVudCB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub25BY3Rpdml0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMub25hY3Rpdml0eSkge1xuICAgICAgICAgICAgdGhpcy5vbmFjdGl2aXR5KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhUVFBTb2NrZXQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgaWYgKHRoaXMub25lcnJvcikge1xuICAgICAgICAgICAgdGhpcy5vbmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUub3BlblN0cmVhbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBydW50aW1lLmNyZWF0ZVNvY2tldFJlcXVlc3QoJ1BPU1QnLCBnZXRVbmlxdWVVUkwodGhpcy5ob29rcy5nZXRSZWNlaXZlVVJMKHRoaXMubG9jYXRpb24sIHRoaXMuc2Vzc2lvbikpKTtcbiAgICAgICAgdGhpcy5zdHJlYW0uYmluZCgnY2h1bmsnLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgICAgICAgIF90aGlzLm9uQ2h1bmsoY2h1bmspO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHJlYW0uYmluZCgnZmluaXNoZWQnLCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICAgICAgICBfdGhpcy5ob29rcy5vbkZpbmlzaGVkKF90aGlzLCBzdGF0dXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zdHJlYW0uYmluZCgnYnVmZmVyX3Rvb19sb25nJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMucmVjb25uZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0uc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHV0aWwuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQ2xvc2UoMTAwNiwgJ0NvdWxkIG5vdCBzdGFydCBzdHJlYW1pbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRUUFNvY2tldC5wcm90b3R5cGUuY2xvc2VTdHJlYW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0cmVhbSkge1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0udW5iaW5kX2FsbCgpO1xuICAgICAgICAgICAgdGhpcy5zdHJlYW0uY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIEhUVFBTb2NrZXQ7XG59KCkpO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb24odXJsKSB7XG4gICAgdmFyIHBhcnRzID0gLyhbXlxcP10qKVxcLyooXFw/Py4qKS8uZXhlYyh1cmwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJhc2U6IHBhcnRzWzFdLFxuICAgICAgICBxdWVyeVN0cmluZzogcGFydHNbMl1cbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0U2VuZFVSTCh1cmwsIHNlc3Npb24pIHtcbiAgICByZXR1cm4gdXJsLmJhc2UgKyAnLycgKyBzZXNzaW9uICsgJy94aHJfc2VuZCc7XG59XG5mdW5jdGlvbiBnZXRVbmlxdWVVUkwodXJsKSB7XG4gICAgdmFyIHNlcGFyYXRvciA9IHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnO1xuICAgIHJldHVybiB1cmwgKyBzZXBhcmF0b3IgKyAndD0nICsgK25ldyBEYXRlKCkgKyAnJm49JyArIGF1dG9JbmNyZW1lbnQrKztcbn1cbmZ1bmN0aW9uIHJlcGxhY2VIb3N0KHVybCwgaG9zdG5hbWUpIHtcbiAgICB2YXIgdXJsUGFydHMgPSAvKGh0dHBzPzpcXC9cXC8pKFteXFwvOl0rKSgoXFwvfDopPy4qKS8uZXhlYyh1cmwpO1xuICAgIHJldHVybiB1cmxQYXJ0c1sxXSArIGhvc3RuYW1lICsgdXJsUGFydHNbM107XG59XG5mdW5jdGlvbiByYW5kb21OdW1iZXIobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5mdW5jdGlvbiByYW5kb21TdHJpbmcobGVuZ3RoKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocmFuZG9tTnVtYmVyKDMyKS50b1N0cmluZygzMikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0LmpvaW4oJycpO1xufVxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgaHR0cF9zb2NrZXQgPSAoaHR0cF9zb2NrZXRfSFRUUFNvY2tldCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvaHR0cC9odHRwX3N0cmVhbWluZ19zb2NrZXQudHNcbnZhciBodHRwX3N0cmVhbWluZ19zb2NrZXRfaG9va3MgPSB7XG4gICAgZ2V0UmVjZWl2ZVVSTDogZnVuY3Rpb24gKHVybCwgc2Vzc2lvbikge1xuICAgICAgICByZXR1cm4gdXJsLmJhc2UgKyAnLycgKyBzZXNzaW9uICsgJy94aHJfc3RyZWFtaW5nJyArIHVybC5xdWVyeVN0cmluZztcbiAgICB9LFxuICAgIG9uSGVhcnRiZWF0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHNvY2tldC5zZW5kUmF3KCdbXScpO1xuICAgIH0sXG4gICAgc2VuZEhlYXJ0YmVhdDogZnVuY3Rpb24gKHNvY2tldCkge1xuICAgICAgICBzb2NrZXQuc2VuZFJhdygnW10nKTtcbiAgICB9LFxuICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIChzb2NrZXQsIHN0YXR1cykge1xuICAgICAgICBzb2NrZXQub25DbG9zZSgxMDA2LCAnQ29ubmVjdGlvbiBpbnRlcnJ1cHRlZCAoJyArIHN0YXR1cyArICcpJywgZmFsc2UpO1xuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3N0cmVhbWluZ19zb2NrZXQgPSAoaHR0cF9zdHJlYW1pbmdfc29ja2V0X2hvb2tzKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9odHRwL2h0dHBfcG9sbGluZ19zb2NrZXQudHNcbnZhciBodHRwX3BvbGxpbmdfc29ja2V0X2hvb2tzID0ge1xuICAgIGdldFJlY2VpdmVVUkw6IGZ1bmN0aW9uICh1cmwsIHNlc3Npb24pIHtcbiAgICAgICAgcmV0dXJuIHVybC5iYXNlICsgJy8nICsgc2Vzc2lvbiArICcveGhyJyArIHVybC5xdWVyeVN0cmluZztcbiAgICB9LFxuICAgIG9uSGVhcnRiZWF0OiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBzZW5kSGVhcnRiZWF0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHNvY2tldC5zZW5kUmF3KCdbXScpO1xuICAgIH0sXG4gICAgb25GaW5pc2hlZDogZnVuY3Rpb24gKHNvY2tldCwgc3RhdHVzKSB7XG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgc29ja2V0LnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc29ja2V0Lm9uQ2xvc2UoMTAwNiwgJ0Nvbm5lY3Rpb24gaW50ZXJydXB0ZWQgKCcgKyBzdGF0dXMgKyAnKScsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBodHRwX3BvbGxpbmdfc29ja2V0ID0gKGh0dHBfcG9sbGluZ19zb2NrZXRfaG9va3MpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy9pc29tb3JwaGljL2h0dHAvaHR0cF94aHJfcmVxdWVzdC50c1xuXG52YXIgaHR0cF94aHJfcmVxdWVzdF9ob29rcyA9IHtcbiAgICBnZXRSZXF1ZXN0OiBmdW5jdGlvbiAoc29ja2V0KSB7XG4gICAgICAgIHZhciBDb25zdHJ1Y3RvciA9IHJ1bnRpbWUuZ2V0WEhSQVBJKCk7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc3dpdGNoICh4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZXNwb25zZVRleHQgJiYgeGhyLnJlc3BvbnNlVGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXQub25DaHVuayh4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIucmVzcG9uc2VUZXh0ICYmIHhoci5yZXNwb25zZVRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0Lm9uQ2h1bmsoeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2ZpbmlzaGVkJywgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHhocjtcbiAgICB9LFxuICAgIGFib3J0UmVxdWVzdDogZnVuY3Rpb24gKHhocikge1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfeGhyX3JlcXVlc3QgPSAoaHR0cF94aHJfcmVxdWVzdF9ob29rcyk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3J1bnRpbWVzL2lzb21vcnBoaWMvaHR0cC9odHRwLnRzXG5cblxuXG5cblxudmFyIEhUVFAgPSB7XG4gICAgY3JlYXRlU3RyZWFtaW5nU29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNvY2tldChodHRwX3N0cmVhbWluZ19zb2NrZXQsIHVybCk7XG4gICAgfSxcbiAgICBjcmVhdGVQb2xsaW5nU29ja2V0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNvY2tldChodHRwX3BvbGxpbmdfc29ja2V0LCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlU29ja2V0OiBmdW5jdGlvbiAoaG9va3MsIHVybCkge1xuICAgICAgICByZXR1cm4gbmV3IGh0dHBfc29ja2V0KGhvb2tzLCB1cmwpO1xuICAgIH0sXG4gICAgY3JlYXRlWEhSOiBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlUmVxdWVzdChodHRwX3hocl9yZXF1ZXN0LCBtZXRob2QsIHVybCk7XG4gICAgfSxcbiAgICBjcmVhdGVSZXF1ZXN0OiBmdW5jdGlvbiAoaG9va3MsIG1ldGhvZCwgdXJsKSB7XG4gICAgICAgIHJldHVybiBuZXcgaHR0cF9yZXF1ZXN0KGhvb2tzLCBtZXRob2QsIHVybCk7XG4gICAgfVxufTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGh0dHBfaHR0cCA9IChIVFRQKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvcnVudGltZXMvd2ViL2h0dHAvaHR0cC50c1xuXG5cbmh0dHBfaHR0cC5jcmVhdGVYRFIgPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSZXF1ZXN0KGh0dHBfeGRvbWFpbl9yZXF1ZXN0LCBtZXRob2QsIHVybCk7XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgd2ViX2h0dHBfaHR0cCA9IChodHRwX2h0dHApO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9ydW50aW1lcy93ZWIvcnVudGltZS50c1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIFJ1bnRpbWUgPSB7XG4gICAgbmV4dEF1dGhDYWxsYmFja0lEOiAxLFxuICAgIGF1dGhfY2FsbGJhY2tzOiB7fSxcbiAgICBTY3JpcHRSZWNlaXZlcnM6IFNjcmlwdFJlY2VpdmVycyxcbiAgICBEZXBlbmRlbmNpZXNSZWNlaXZlcnM6IERlcGVuZGVuY2llc1JlY2VpdmVycyxcbiAgICBnZXREZWZhdWx0U3RyYXRlZ3k6IGRlZmF1bHRfc3RyYXRlZ3ksXG4gICAgVHJhbnNwb3J0czogdHJhbnNwb3J0c190cmFuc3BvcnRzLFxuICAgIHRyYW5zcG9ydENvbm5lY3Rpb25Jbml0aWFsaXplcjogdHJhbnNwb3J0X2Nvbm5lY3Rpb25faW5pdGlhbGl6ZXIsXG4gICAgSFRUUEZhY3Rvcnk6IHdlYl9odHRwX2h0dHAsXG4gICAgVGltZWxpbmVUcmFuc3BvcnQ6IGpzb25wX3RpbWVsaW5lLFxuICAgIGdldFhIUkFQSTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gd2luZG93LlhNTEh0dHBSZXF1ZXN0O1xuICAgIH0sXG4gICAgZ2V0V2ViU29ja2V0QVBJOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuV2ViU29ja2V0IHx8IHdpbmRvdy5Nb3pXZWJTb2NrZXQ7XG4gICAgfSxcbiAgICBzZXR1cDogZnVuY3Rpb24gKFB1c2hlckNsYXNzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHdpbmRvdy5QdXNoZXIgPSBQdXNoZXJDbGFzcztcbiAgICAgICAgdmFyIGluaXRpYWxpemVPbkRvY3VtZW50Qm9keSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRG9jdW1lbnRCb2R5KFB1c2hlckNsYXNzLnJlYWR5KTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF3aW5kb3cuSlNPTikge1xuICAgICAgICAgICAgRGVwZW5kZW5jaWVzLmxvYWQoJ2pzb24yJywge30sIGluaXRpYWxpemVPbkRvY3VtZW50Qm9keSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbml0aWFsaXplT25Eb2N1bWVudEJvZHkoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0RG9jdW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH0sXG4gICAgZ2V0UHJvdG9jb2w6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RG9jdW1lbnQoKS5sb2NhdGlvbi5wcm90b2NvbDtcbiAgICB9LFxuICAgIGdldEF1dGhvcml6ZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7IGFqYXg6IHhocl9hdXRoLCBqc29ucDoganNvbnBfYXV0aCB9O1xuICAgIH0sXG4gICAgb25Eb2N1bWVudEJvZHk6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uRG9jdW1lbnRCb2R5KGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVKU09OUFJlcXVlc3Q6IGZ1bmN0aW9uICh1cmwsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBqc29ucF9yZXF1ZXN0KHVybCwgZGF0YSk7XG4gICAgfSxcbiAgICBjcmVhdGVTY3JpcHRSZXF1ZXN0OiBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgIHJldHVybiBuZXcgc2NyaXB0X3JlcXVlc3Qoc3JjKTtcbiAgICB9LFxuICAgIGdldExvY2FsU3RvcmFnZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZVhIUjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5nZXRYSFJBUEkoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZU1pY3Jvc29mdFhIUigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVYTUxIdHRwUmVxdWVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFhIUkFQSSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgfSxcbiAgICBjcmVhdGVNaWNyb3NvZnRYSFI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgIH0sXG4gICAgZ2V0TmV0d29yazogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV0X2luZm9fTmV0d29yaztcbiAgICB9LFxuICAgIGNyZWF0ZVdlYlNvY2tldDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFdlYlNvY2tldEFQSSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHVybCk7XG4gICAgfSxcbiAgICBjcmVhdGVTb2NrZXRSZXF1ZXN0OiBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNYSFJTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuSFRUUEZhY3RvcnkuY3JlYXRlWEhSKG1ldGhvZCwgdXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlzWERSU3VwcG9ydGVkKHVybC5pbmRleE9mKCdodHRwczonKSA9PT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkhUVFBGYWN0b3J5LmNyZWF0ZVhEUihtZXRob2QsIHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyAnQ3Jvc3Mtb3JpZ2luIEhUVFAgcmVxdWVzdHMgYXJlIG5vdCBzdXBwb3J0ZWQnO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBpc1hIUlN1cHBvcnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzLmdldFhIUkFQSSgpO1xuICAgICAgICByZXR1cm4gKEJvb2xlYW4oQ29uc3RydWN0b3IpICYmIG5ldyBDb25zdHJ1Y3RvcigpLndpdGhDcmVkZW50aWFscyAhPT0gdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIGlzWERSU3VwcG9ydGVkOiBmdW5jdGlvbiAodXNlVExTKSB7XG4gICAgICAgIHZhciBwcm90b2NvbCA9IHVzZVRMUyA/ICdodHRwczonIDogJ2h0dHA6JztcbiAgICAgICAgdmFyIGRvY3VtZW50UHJvdG9jb2wgPSB0aGlzLmdldFByb3RvY29sKCk7XG4gICAgICAgIHJldHVybiAoQm9vbGVhbih3aW5kb3dbJ1hEb21haW5SZXF1ZXN0J10pICYmIGRvY3VtZW50UHJvdG9jb2wgPT09IHByb3RvY29sKTtcbiAgICB9LFxuICAgIGFkZFVubG9hZExpc3RlbmVyOiBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5hdHRhY2hFdmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cuYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVVbmxvYWRMaXN0ZW5lcjogZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5sb2FkJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh3aW5kb3cuZGV0YWNoRXZlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2luZG93LmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBydW50aW1lID0gKFJ1bnRpbWUpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3RpbWVsaW5lL2xldmVsLnRzXG52YXIgVGltZWxpbmVMZXZlbDtcbihmdW5jdGlvbiAoVGltZWxpbmVMZXZlbCkge1xuICAgIFRpbWVsaW5lTGV2ZWxbVGltZWxpbmVMZXZlbFtcIkVSUk9SXCJdID0gM10gPSBcIkVSUk9SXCI7XG4gICAgVGltZWxpbmVMZXZlbFtUaW1lbGluZUxldmVsW1wiSU5GT1wiXSA9IDZdID0gXCJJTkZPXCI7XG4gICAgVGltZWxpbmVMZXZlbFtUaW1lbGluZUxldmVsW1wiREVCVUdcIl0gPSA3XSA9IFwiREVCVUdcIjtcbn0pKFRpbWVsaW5lTGV2ZWwgfHwgKFRpbWVsaW5lTGV2ZWwgPSB7fSkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdGltZWxpbmVfbGV2ZWwgPSAoVGltZWxpbmVMZXZlbCk7XG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL2NvcmUvdGltZWxpbmUvdGltZWxpbmUudHNcblxuXG5cbnZhciB0aW1lbGluZV9UaW1lbGluZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVGltZWxpbmUoa2V5LCBzZXNzaW9uLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnNlc3Npb24gPSBzZXNzaW9uO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLnNlbnQgPSAwO1xuICAgICAgICB0aGlzLnVuaXF1ZUlEID0gMDtcbiAgICB9XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChsZXZlbCwgZXZlbnQpIHtcbiAgICAgICAgaWYgKGxldmVsIDw9IHRoaXMub3B0aW9ucy5sZXZlbCkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHMucHVzaChleHRlbmQoe30sIGV2ZW50LCB7IHRpbWVzdGFtcDogdXRpbC5ub3coKSB9KSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmxpbWl0ICYmIHRoaXMuZXZlbnRzLmxlbmd0aCA+IHRoaXMub3B0aW9ucy5saW1pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLmxvZyh0aW1lbGluZV9sZXZlbC5FUlJPUiwgZXZlbnQpO1xuICAgIH07XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5sb2codGltZWxpbmVfbGV2ZWwuSU5GTywgZXZlbnQpO1xuICAgIH07XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmRlYnVnID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMubG9nKHRpbWVsaW5lX2xldmVsLkRFQlVHLCBldmVudCk7XG4gICAgfTtcbiAgICBUaW1lbGluZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzLmxlbmd0aCA9PT0gMDtcbiAgICB9O1xuICAgIFRpbWVsaW5lLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHNlbmRmbiwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGRhdGEgPSBleHRlbmQoe1xuICAgICAgICAgICAgc2Vzc2lvbjogdGhpcy5zZXNzaW9uLFxuICAgICAgICAgICAgYnVuZGxlOiB0aGlzLnNlbnQgKyAxLFxuICAgICAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgICAgIGxpYjogJ2pzJyxcbiAgICAgICAgICAgIHZlcnNpb246IHRoaXMub3B0aW9ucy52ZXJzaW9uLFxuICAgICAgICAgICAgY2x1c3RlcjogdGhpcy5vcHRpb25zLmNsdXN0ZXIsXG4gICAgICAgICAgICBmZWF0dXJlczogdGhpcy5vcHRpb25zLmZlYXR1cmVzLFxuICAgICAgICAgICAgdGltZWxpbmU6IHRoaXMuZXZlbnRzXG4gICAgICAgIH0sIHRoaXMub3B0aW9ucy5wYXJhbXMpO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgICAgICBzZW5kZm4oZGF0YSwgZnVuY3Rpb24gKGVycm9yLCByZXN1bHQpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVGltZWxpbmUucHJvdG90eXBlLmdlbmVyYXRlVW5pcXVlSUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudW5pcXVlSUQrKztcbiAgICAgICAgcmV0dXJuIHRoaXMudW5pcXVlSUQ7XG4gICAgfTtcbiAgICByZXR1cm4gVGltZWxpbmU7XG59KCkpO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdGltZWxpbmVfdGltZWxpbmUgPSAodGltZWxpbmVfVGltZWxpbmUpO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvdHJhbnNwb3J0X3N0cmF0ZWd5LnRzXG5cblxuXG5cbnZhciB0cmFuc3BvcnRfc3RyYXRlZ3lfVHJhbnNwb3J0U3RyYXRlZ3kgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRyYW5zcG9ydFN0cmF0ZWd5KG5hbWUsIHByaW9yaXR5LCB0cmFuc3BvcnQsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB9XG4gICAgVHJhbnNwb3J0U3RyYXRlZ3kucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc3BvcnQuaXNTdXBwb3J0ZWQoe1xuICAgICAgICAgICAgdXNlVExTOiB0aGlzLm9wdGlvbnMudXNlVExTXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVHJhbnNwb3J0U3RyYXRlZ3kucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAobWluUHJpb3JpdHksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFpbEF0dGVtcHQobmV3IFVuc3VwcG9ydGVkU3RyYXRlZ3koKSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucHJpb3JpdHkgPCBtaW5Qcmlvcml0eSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhaWxBdHRlbXB0KG5ldyBUcmFuc3BvcnRQcmlvcml0eVRvb0xvdygpLCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbm5lY3RlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdHJhbnNwb3J0ID0gdGhpcy50cmFuc3BvcnQuY3JlYXRlQ29ubmVjdGlvbih0aGlzLm5hbWUsIHRoaXMucHJpb3JpdHksIHRoaXMub3B0aW9ucy5rZXksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciBoYW5kc2hha2UgPSBudWxsO1xuICAgICAgICB2YXIgb25Jbml0aWFsaXplZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyYW5zcG9ydC51bmJpbmQoJ2luaXRpYWxpemVkJywgb25Jbml0aWFsaXplZCk7XG4gICAgICAgICAgICB0cmFuc3BvcnQuY29ubmVjdCgpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGFuZHNoYWtlID0gZmFjdG9yeS5jcmVhdGVIYW5kc2hha2UodHJhbnNwb3J0LCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICB1bmJpbmRMaXN0ZW5lcnMoKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW5iaW5kTGlzdGVuZXJzKCk7XG4gICAgICAgICAgICB2YXIgc2VyaWFsaXplZFRyYW5zcG9ydDtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRUcmFuc3BvcnQgPSBzYWZlSlNPTlN0cmluZ2lmeSh0cmFuc3BvcnQpO1xuICAgICAgICAgICAgY2FsbGJhY2sobmV3IFRyYW5zcG9ydENsb3NlZChzZXJpYWxpemVkVHJhbnNwb3J0KSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bmJpbmRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdpbml0aWFsaXplZCcsIG9uSW5pdGlhbGl6ZWQpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnb3BlbicsIG9uT3Blbik7XG4gICAgICAgICAgICB0cmFuc3BvcnQudW5iaW5kKCdlcnJvcicsIG9uRXJyb3IpO1xuICAgICAgICAgICAgdHJhbnNwb3J0LnVuYmluZCgnY2xvc2VkJywgb25DbG9zZWQpO1xuICAgICAgICB9O1xuICAgICAgICB0cmFuc3BvcnQuYmluZCgnaW5pdGlhbGl6ZWQnLCBvbkluaXRpYWxpemVkKTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ29wZW4nLCBvbk9wZW4pO1xuICAgICAgICB0cmFuc3BvcnQuYmluZCgnZXJyb3InLCBvbkVycm9yKTtcbiAgICAgICAgdHJhbnNwb3J0LmJpbmQoJ2Nsb3NlZCcsIG9uQ2xvc2VkKTtcbiAgICAgICAgdHJhbnNwb3J0LmluaXRpYWxpemUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVuYmluZExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kc2hha2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZHNoYWtlLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLnByaW9yaXR5IDwgcCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZHNoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kc2hha2UuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIFRyYW5zcG9ydFN0cmF0ZWd5O1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHRyYW5zcG9ydF9zdHJhdGVneSA9ICh0cmFuc3BvcnRfc3RyYXRlZ3lfVHJhbnNwb3J0U3RyYXRlZ3kpO1xuZnVuY3Rpb24gZmFpbEF0dGVtcHQoZXJyb3IsIGNhbGxiYWNrKSB7XG4gICAgdXRpbC5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICBmb3JjZU1pblByaW9yaXR5OiBmdW5jdGlvbiAoKSB7IH1cbiAgICB9O1xufVxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9jb3JlL3N0cmF0ZWdpZXMvc3RyYXRlZ3lfYnVpbGRlci50c1xuXG5cblxuXG5cbnZhciBzdHJhdGVneV9idWlsZGVyX1RyYW5zcG9ydHMgPSBydW50aW1lLlRyYW5zcG9ydHM7XG52YXIgc3RyYXRlZ3lfYnVpbGRlcl9kZWZpbmVUcmFuc3BvcnQgPSBmdW5jdGlvbiAoY29uZmlnLCBuYW1lLCB0eXBlLCBwcmlvcml0eSwgb3B0aW9ucywgbWFuYWdlcikge1xuICAgIHZhciB0cmFuc3BvcnRDbGFzcyA9IHN0cmF0ZWd5X2J1aWxkZXJfVHJhbnNwb3J0c1t0eXBlXTtcbiAgICBpZiAoIXRyYW5zcG9ydENsYXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBVbnN1cHBvcnRlZFRyYW5zcG9ydCh0eXBlKTtcbiAgICB9XG4gICAgdmFyIGVuYWJsZWQgPSAoIWNvbmZpZy5lbmFibGVkVHJhbnNwb3J0cyB8fFxuICAgICAgICBhcnJheUluZGV4T2YoY29uZmlnLmVuYWJsZWRUcmFuc3BvcnRzLCBuYW1lKSAhPT0gLTEpICYmXG4gICAgICAgICghY29uZmlnLmRpc2FibGVkVHJhbnNwb3J0cyB8fFxuICAgICAgICAgICAgYXJyYXlJbmRleE9mKGNvbmZpZy5kaXNhYmxlZFRyYW5zcG9ydHMsIG5hbWUpID09PSAtMSk7XG4gICAgdmFyIHRyYW5zcG9ydDtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IGlnbm9yZU51bGxPcmlnaW46IGNvbmZpZy5pZ25vcmVOdWxsT3JpZ2luIH0sIG9wdGlvbnMpO1xuICAgICAgICB0cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0X3N0cmF0ZWd5KG5hbWUsIHByaW9yaXR5LCBtYW5hZ2VyID8gbWFuYWdlci5nZXRBc3Npc3RhbnQodHJhbnNwb3J0Q2xhc3MpIDogdHJhbnNwb3J0Q2xhc3MsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdHJhbnNwb3J0ID0gc3RyYXRlZ3lfYnVpbGRlcl9VbnN1cHBvcnRlZFN0cmF0ZWd5O1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNwb3J0O1xufTtcbnZhciBzdHJhdGVneV9idWlsZGVyX1Vuc3VwcG9ydGVkU3RyYXRlZ3kgPSB7XG4gICAgaXNTdXBwb3J0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgY29ubmVjdDogZnVuY3Rpb24gKF8sIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBkZWZlcnJlZCA9IHV0aWwuZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobmV3IFVuc3VwcG9ydGVkU3RyYXRlZ3koKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5lbnN1cmVBYm9ydGVkKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9yY2VNaW5Qcmlvcml0eTogZnVuY3Rpb24gKCkgeyB9XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9jb25maWcudHNcblxuXG5mdW5jdGlvbiBnZXRDb25maWcob3B0cykge1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgIGFjdGl2aXR5VGltZW91dDogb3B0cy5hY3Rpdml0eVRpbWVvdXQgfHwgZGVmYXVsdHMuYWN0aXZpdHlUaW1lb3V0LFxuICAgICAgICBhdXRoRW5kcG9pbnQ6IG9wdHMuYXV0aEVuZHBvaW50IHx8IGRlZmF1bHRzLmF1dGhFbmRwb2ludCxcbiAgICAgICAgYXV0aFRyYW5zcG9ydDogb3B0cy5hdXRoVHJhbnNwb3J0IHx8IGRlZmF1bHRzLmF1dGhUcmFuc3BvcnQsXG4gICAgICAgIGNsdXN0ZXI6IG9wdHMuY2x1c3RlciB8fCBkZWZhdWx0cy5jbHVzdGVyLFxuICAgICAgICBodHRwUGF0aDogb3B0cy5odHRwUGF0aCB8fCBkZWZhdWx0cy5odHRwUGF0aCxcbiAgICAgICAgaHR0cFBvcnQ6IG9wdHMuaHR0cFBvcnQgfHwgZGVmYXVsdHMuaHR0cFBvcnQsXG4gICAgICAgIGh0dHBzUG9ydDogb3B0cy5odHRwc1BvcnQgfHwgZGVmYXVsdHMuaHR0cHNQb3J0LFxuICAgICAgICBwb25nVGltZW91dDogb3B0cy5wb25nVGltZW91dCB8fCBkZWZhdWx0cy5wb25nVGltZW91dCxcbiAgICAgICAgc3RhdHNIb3N0OiBvcHRzLnN0YXRzSG9zdCB8fCBkZWZhdWx0cy5zdGF0c19ob3N0LFxuICAgICAgICB1bmF2YWlsYWJsZVRpbWVvdXQ6IG9wdHMudW5hdmFpbGFibGVUaW1lb3V0IHx8IGRlZmF1bHRzLnVuYXZhaWxhYmxlVGltZW91dCxcbiAgICAgICAgd3NQYXRoOiBvcHRzLndzUGF0aCB8fCBkZWZhdWx0cy53c1BhdGgsXG4gICAgICAgIHdzUG9ydDogb3B0cy53c1BvcnQgfHwgZGVmYXVsdHMud3NQb3J0LFxuICAgICAgICB3c3NQb3J0OiBvcHRzLndzc1BvcnQgfHwgZGVmYXVsdHMud3NzUG9ydCxcbiAgICAgICAgZW5hYmxlU3RhdHM6IGdldEVuYWJsZVN0YXRzQ29uZmlnKG9wdHMpLFxuICAgICAgICBodHRwSG9zdDogZ2V0SHR0cEhvc3Qob3B0cyksXG4gICAgICAgIHVzZVRMUzogc2hvdWxkVXNlVExTKG9wdHMpLFxuICAgICAgICB3c0hvc3Q6IGdldFdlYnNvY2tldEhvc3Qob3B0cylcbiAgICB9O1xuICAgIGlmICgnYXV0aCcgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmF1dGggPSBvcHRzLmF1dGg7XG4gICAgaWYgKCdhdXRob3JpemVyJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcuYXV0aG9yaXplciA9IG9wdHMuYXV0aG9yaXplcjtcbiAgICBpZiAoJ2Rpc2FibGVkVHJhbnNwb3J0cycgaW4gb3B0cylcbiAgICAgICAgY29uZmlnLmRpc2FibGVkVHJhbnNwb3J0cyA9IG9wdHMuZGlzYWJsZWRUcmFuc3BvcnRzO1xuICAgIGlmICgnZW5hYmxlZFRyYW5zcG9ydHMnIGluIG9wdHMpXG4gICAgICAgIGNvbmZpZy5lbmFibGVkVHJhbnNwb3J0cyA9IG9wdHMuZW5hYmxlZFRyYW5zcG9ydHM7XG4gICAgaWYgKCdpZ25vcmVOdWxsT3JpZ2luJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcuaWdub3JlTnVsbE9yaWdpbiA9IG9wdHMuaWdub3JlTnVsbE9yaWdpbjtcbiAgICBpZiAoJ3RpbWVsaW5lUGFyYW1zJyBpbiBvcHRzKVxuICAgICAgICBjb25maWcudGltZWxpbmVQYXJhbXMgPSBvcHRzLnRpbWVsaW5lUGFyYW1zO1xuICAgIGlmICgnbmFjbCcgaW4gb3B0cykge1xuICAgICAgICBjb25maWcubmFjbCA9IG9wdHMubmFjbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZztcbn1cbmZ1bmN0aW9uIGdldEh0dHBIb3N0KG9wdHMpIHtcbiAgICBpZiAob3B0cy5odHRwSG9zdCkge1xuICAgICAgICByZXR1cm4gb3B0cy5odHRwSG9zdDtcbiAgICB9XG4gICAgaWYgKG9wdHMuY2x1c3Rlcikge1xuICAgICAgICByZXR1cm4gXCJzb2NranMtXCIgKyBvcHRzLmNsdXN0ZXIgKyBcIi5wdXNoZXIuY29tXCI7XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0cy5odHRwSG9zdDtcbn1cbmZ1bmN0aW9uIGdldFdlYnNvY2tldEhvc3Qob3B0cykge1xuICAgIGlmIChvcHRzLndzSG9zdCkge1xuICAgICAgICByZXR1cm4gb3B0cy53c0hvc3Q7XG4gICAgfVxuICAgIGlmIChvcHRzLmNsdXN0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGdldFdlYnNvY2tldEhvc3RGcm9tQ2x1c3RlcihvcHRzLmNsdXN0ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0V2Vic29ja2V0SG9zdEZyb21DbHVzdGVyKGRlZmF1bHRzLmNsdXN0ZXIpO1xufVxuZnVuY3Rpb24gZ2V0V2Vic29ja2V0SG9zdEZyb21DbHVzdGVyKGNsdXN0ZXIpIHtcbiAgICByZXR1cm4gXCJ3cy1cIiArIGNsdXN0ZXIgKyBcIi5wdXNoZXIuY29tXCI7XG59XG5mdW5jdGlvbiBzaG91bGRVc2VUTFMob3B0cykge1xuICAgIGlmIChydW50aW1lLmdldFByb3RvY29sKCkgPT09ICdodHRwczonKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChvcHRzLmZvcmNlVExTID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gZ2V0RW5hYmxlU3RhdHNDb25maWcob3B0cykge1xuICAgIGlmICgnZW5hYmxlU3RhdHMnIGluIG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIG9wdHMuZW5hYmxlU3RhdHM7XG4gICAgfVxuICAgIGlmICgnZGlzYWJsZVN0YXRzJyBpbiBvcHRzKSB7XG4gICAgICAgIHJldHVybiAhb3B0cy5kaXNhYmxlU3RhdHM7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvY29yZS9wdXNoZXIudHNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBwdXNoZXJfUHVzaGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQdXNoZXIoYXBwX2tleSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjaGVja0FwcEtleShhcHBfa2V5KTtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIGlmICghb3B0aW9ucy5jbHVzdGVyICYmICEob3B0aW9ucy53c0hvc3QgfHwgb3B0aW9ucy5odHRwSG9zdCkpIHtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSB1cmxfc3RvcmUuYnVpbGRMb2dTdWZmaXgoJ2phdmFzY3JpcHRRdWlja1N0YXJ0Jyk7XG4gICAgICAgICAgICBsb2dnZXIud2FybihcIllvdSBzaG91bGQgYWx3YXlzIHNwZWNpZnkgYSBjbHVzdGVyIHdoZW4gY29ubmVjdGluZy4gXCIgKyBzdWZmaXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnZGlzYWJsZVN0YXRzJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybignVGhlIGRpc2FibGVTdGF0cyBvcHRpb24gaXMgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBlbmFibGVTdGF0cycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua2V5ID0gYXBwX2tleTtcbiAgICAgICAgdGhpcy5jb25maWcgPSBnZXRDb25maWcob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBmYWN0b3J5LmNyZWF0ZUNoYW5uZWxzKCk7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIgPSBuZXcgZGlzcGF0Y2hlcigpO1xuICAgICAgICB0aGlzLnNlc3Npb25JRCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDApO1xuICAgICAgICB0aGlzLnRpbWVsaW5lID0gbmV3IHRpbWVsaW5lX3RpbWVsaW5lKHRoaXMua2V5LCB0aGlzLnNlc3Npb25JRCwge1xuICAgICAgICAgICAgY2x1c3RlcjogdGhpcy5jb25maWcuY2x1c3RlcixcbiAgICAgICAgICAgIGZlYXR1cmVzOiBQdXNoZXIuZ2V0Q2xpZW50RmVhdHVyZXMoKSxcbiAgICAgICAgICAgIHBhcmFtczogdGhpcy5jb25maWcudGltZWxpbmVQYXJhbXMgfHwge30sXG4gICAgICAgICAgICBsaW1pdDogNTAsXG4gICAgICAgICAgICBsZXZlbDogdGltZWxpbmVfbGV2ZWwuSU5GTyxcbiAgICAgICAgICAgIHZlcnNpb246IGRlZmF1bHRzLlZFUlNJT05cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5lbmFibGVTdGF0cykge1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlciA9IGZhY3RvcnkuY3JlYXRlVGltZWxpbmVTZW5kZXIodGhpcy50aW1lbGluZSwge1xuICAgICAgICAgICAgICAgIGhvc3Q6IHRoaXMuY29uZmlnLnN0YXRzSG9zdCxcbiAgICAgICAgICAgICAgICBwYXRoOiAnL3RpbWVsaW5lL3YyLycgKyBydW50aW1lLlRpbWVsaW5lVHJhbnNwb3J0Lm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBnZXRTdHJhdGVneSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gcnVudGltZS5nZXREZWZhdWx0U3RyYXRlZ3koX3RoaXMuY29uZmlnLCBvcHRpb25zLCBzdHJhdGVneV9idWlsZGVyX2RlZmluZVRyYW5zcG9ydCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbiA9IGZhY3RvcnkuY3JlYXRlQ29ubmVjdGlvbk1hbmFnZXIodGhpcy5rZXksIHtcbiAgICAgICAgICAgIGdldFN0cmF0ZWd5OiBnZXRTdHJhdGVneSxcbiAgICAgICAgICAgIHRpbWVsaW5lOiB0aGlzLnRpbWVsaW5lLFxuICAgICAgICAgICAgYWN0aXZpdHlUaW1lb3V0OiB0aGlzLmNvbmZpZy5hY3Rpdml0eVRpbWVvdXQsXG4gICAgICAgICAgICBwb25nVGltZW91dDogdGhpcy5jb25maWcucG9uZ1RpbWVvdXQsXG4gICAgICAgICAgICB1bmF2YWlsYWJsZVRpbWVvdXQ6IHRoaXMuY29uZmlnLnVuYXZhaWxhYmxlVGltZW91dCxcbiAgICAgICAgICAgIHVzZVRMUzogQm9vbGVhbih0aGlzLmNvbmZpZy51c2VUTFMpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnY29ubmVjdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlQWxsKCk7XG4gICAgICAgICAgICBpZiAoX3RoaXMudGltZWxpbmVTZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50aW1lbGluZVNlbmRlci5zZW5kKF90aGlzLmNvbm5lY3Rpb24uaXNVc2luZ1RMUygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5iaW5kKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnQuZXZlbnQ7XG4gICAgICAgICAgICB2YXIgaW50ZXJuYWwgPSBldmVudE5hbWUuaW5kZXhPZigncHVzaGVyX2ludGVybmFsOicpID09PSAwO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbm5lbCA9IF90aGlzLmNoYW5uZWwoZXZlbnQuY2hhbm5lbCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbC5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpbnRlcm5hbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmdsb2JhbF9lbWl0dGVyLmVtaXQoZXZlbnQuZXZlbnQsIGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Nvbm5lY3RpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5jaGFubmVscy5kaXNjb25uZWN0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uYmluZCgnZGlzY29ubmVjdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuY2hhbm5lbHMuZGlzY29ubmVjdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uLmJpbmQoJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFB1c2hlci5pbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgdGhpcy50aW1lbGluZS5pbmZvKHsgaW5zdGFuY2VzOiBQdXNoZXIuaW5zdGFuY2VzLmxlbmd0aCB9KTtcbiAgICAgICAgaWYgKFB1c2hlci5pc1JlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBQdXNoZXIucmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFB1c2hlci5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBQdXNoZXIuaW5zdGFuY2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgUHVzaGVyLmluc3RhbmNlc1tpXS5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFB1c2hlci5nZXRDbGllbnRGZWF0dXJlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGtleXMoZmlsdGVyT2JqZWN0KHsgd3M6IHJ1bnRpbWUuVHJhbnNwb3J0cy53cyB9LCBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuIHQuaXNTdXBwb3J0ZWQoe30pO1xuICAgICAgICB9KSk7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLmNoYW5uZWwgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFubmVscy5maW5kKG5hbWUpO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5hbGxDaGFubmVscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbHMuYWxsKCk7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLnRpbWVsaW5lU2VuZGVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGltZWxpbmVTZW5kZXJUaW1lcikge1xuICAgICAgICAgICAgICAgIHZhciB1c2luZ1RMUyA9IHRoaXMuY29ubmVjdGlvbi5pc1VzaW5nVExTKCk7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVsaW5lU2VuZGVyID0gdGhpcy50aW1lbGluZVNlbmRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIgPSBuZXcgUGVyaW9kaWNUaW1lcig2MDAwMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZVNlbmRlci5zZW5kKHVzaW5nVExTKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb24uZGlzY29ubmVjdCgpO1xuICAgICAgICBpZiAodGhpcy50aW1lbGluZVNlbmRlclRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVsaW5lU2VuZGVyVGltZXIuZW5zdXJlQWJvcnRlZCgpO1xuICAgICAgICAgICAgdGhpcy50aW1lbGluZVNlbmRlclRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gKGV2ZW50X25hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIuYmluZChldmVudF9uYW1lLCBjYWxsYmFjaywgY29udGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiAoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci51bmJpbmQoZXZlbnRfbmFtZSwgY2FsbGJhY2ssIGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuYmluZF9nbG9iYWwgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5nbG9iYWxfZW1pdHRlci5iaW5kX2dsb2JhbChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS51bmJpbmRfZ2xvYmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kX2dsb2JhbChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS51bmJpbmRfYWxsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsX2VtaXR0ZXIudW5iaW5kX2FsbCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIFB1c2hlci5wcm90b3R5cGUuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY2hhbm5lbE5hbWU7XG4gICAgICAgIGZvciAoY2hhbm5lbE5hbWUgaW4gdGhpcy5jaGFubmVscy5jaGFubmVscykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHMuY2hhbm5lbHMuaGFzT3duUHJvcGVydHkoY2hhbm5lbE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoY2hhbm5lbE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChjaGFubmVsX25hbWUpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSB0aGlzLmNoYW5uZWxzLmFkZChjaGFubmVsX25hbWUsIHRoaXMpO1xuICAgICAgICBpZiAoY2hhbm5lbC5zdWJzY3JpcHRpb25QZW5kaW5nICYmIGNoYW5uZWwuc3Vic2NyaXB0aW9uQ2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjaGFubmVsLnJlaW5zdGF0ZVN1YnNjcmlwdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcgJiZcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvbi5zdGF0ZSA9PT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoYW5uZWw7XG4gICAgfTtcbiAgICBQdXNoZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNoYW5uZWxfbmFtZSkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbHMuZmluZChjaGFubmVsX25hbWUpO1xuICAgICAgICBpZiAoY2hhbm5lbCAmJiBjaGFubmVsLnN1YnNjcmlwdGlvblBlbmRpbmcpIHtcbiAgICAgICAgICAgIGNoYW5uZWwuY2FuY2VsU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFubmVsID0gdGhpcy5jaGFubmVscy5yZW1vdmUoY2hhbm5lbF9uYW1lKTtcbiAgICAgICAgICAgIGlmIChjaGFubmVsICYmIGNoYW5uZWwuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5zZW5kX2V2ZW50ID0gZnVuY3Rpb24gKGV2ZW50X25hbWUsIGRhdGEsIGNoYW5uZWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvbi5zZW5kX2V2ZW50KGV2ZW50X25hbWUsIGRhdGEsIGNoYW5uZWwpO1xuICAgIH07XG4gICAgUHVzaGVyLnByb3RvdHlwZS5zaG91bGRVc2VUTFMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy51c2VUTFM7XG4gICAgfTtcbiAgICBQdXNoZXIuaW5zdGFuY2VzID0gW107XG4gICAgUHVzaGVyLmlzUmVhZHkgPSBmYWxzZTtcbiAgICBQdXNoZXIubG9nVG9Db25zb2xlID0gZmFsc2U7XG4gICAgUHVzaGVyLlJ1bnRpbWUgPSBydW50aW1lO1xuICAgIFB1c2hlci5TY3JpcHRSZWNlaXZlcnMgPSBydW50aW1lLlNjcmlwdFJlY2VpdmVycztcbiAgICBQdXNoZXIuRGVwZW5kZW5jaWVzUmVjZWl2ZXJzID0gcnVudGltZS5EZXBlbmRlbmNpZXNSZWNlaXZlcnM7XG4gICAgUHVzaGVyLmF1dGhfY2FsbGJhY2tzID0gcnVudGltZS5hdXRoX2NhbGxiYWNrcztcbiAgICByZXR1cm4gUHVzaGVyO1xufSgpKTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvcmVfcHVzaGVyID0gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAocHVzaGVyX1B1c2hlcik7XG5mdW5jdGlvbiBjaGVja0FwcEtleShrZXkpIHtcbiAgICBpZiAoa2V5ID09PSBudWxsIHx8IGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93ICdZb3UgbXVzdCBwYXNzIHlvdXIgYXBwIGtleSB3aGVuIHlvdSBpbnN0YW50aWF0ZSBQdXNoZXIuJztcbiAgICB9XG59XG5ydW50aW1lLnNldHVwKHB1c2hlcl9QdXNoZXIpO1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsIi8vaW1wb3J0KCcuL3Njc3MvY2hhdF9tYWluLnNjc3MnKVxuXG4oZnVuY3Rpb24gKCQsIERydXBhbCwgZHJ1cGFsU2V0dGluZ3MpIHtcbiAgY29uc3QgUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJylcblxuICBmdW5jdGlvbiBkcnVDaGF0SW5pdCgpIHtcbiAgICBsZXQgcmVjZWl2ZXJfaWQgPSAnJywgcHVzaGVyX2NsdXN0ZXIgPSAnJywgcHVzaGVyX2FwcF9rZXkgPSAnJywgY3VycmVudF9pZCA9ICcnXG5cbiAgICAvLyB0aGlzLnRhcmdldC5yZW1vdmUoKVxuICAgIGNvbnN0IHVzZXJzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcnUtY2hhdC1ibG9jayAudXNlcnMnKVxuICAgIGNvbnNvbGUubG9nKHVzZXJzTGlzdClcbiAgICBjb25zb2xlLmxvZyh1c2Vyc0xpc3QpXG4gICAgY29uc29sZS5sb2codXNlcnNMaXN0KVxuICAgIGNvbnNvbGUubG9nKHVzZXJzTGlzdClcbiAgICBjb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZXNzYWdlcycpXG4gICAgY29uc3QgdXNlcnMgPSB1c2Vyc0xpc3QuY2hpbGRyZW5cblxuXG4gICAgZm9yICh1c2VyIG9mIHVzZXJzKSB7XG4gICAgICBjb25zb2xlLmxvZyh1c2VyKVxuICAgICAgY29uc29sZS5sb2coKVxuICAgICAgdXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDaGF0cylcblxuICAgIH1cblxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gICAgcHVzaGVyX2FwcF9rZXkgPSBkcnVwYWxTZXR0aW5ncy5kcnVfY2hhdC5wdXNoZXJfYXBwX2tleVxuICAgIHB1c2hlcl9jbHVzdGVyID0gZHJ1cGFsU2V0dGluZ3MuZHJ1X2NoYXQucHVzaGVyX2NsdXN0ZXJcblxuICAgIFB1c2hlci5sb2dUb0NvbnNvbGUgPSB0cnVlXG4gICAgY29uc29sZS5sb2cocHVzaGVyX2FwcF9rZXksIHB1c2hlcl9jbHVzdGVyKVxuICAgIHZhciBwdXNoZXIgPSBuZXcgUHVzaGVyKCBwdXNoZXJfYXBwX2tleSwge1xuICAgICAgY2x1c3RlcjogcHVzaGVyX2NsdXN0ZXJcbiAgICB9KVxuXG4gICAgdmFyIGNoYW5uZWwgPSBwdXNoZXIuc3Vic2NyaWJlKCdteS1jaGFubmVsJylcblxuICAgIGNoYW5uZWwuYmluZCgnZHJ1LWNoYXQtZXZlbnQnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjdXJyZW50X2lkID0gZHJ1cGFsU2V0dGluZ3MuZHJ1X2NoYXQuY3VycmVudF9pZFxuICAgICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2RhdGEuZnJvbX1cIl1gKVxuICAgICAgY29uc29sZS5sb2coZGF0YSwgY3VycmVudF9pZCwgZGF0YS5mcm9tLCBkYXRhLnRvLCBwZW5kaW5nKVxuICAgICAgY29uc29sZS5sb2coZGF0YS50byA9PT0gY3VycmVudF9pZClcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKiogWU9VIEhBVkUgQkVFTiBERUJVR0dFRCwgZG9udCByZXNpc3QgKioqKioqKioqKioqKioqKioqKioqKioqKionKVxuICAgICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKiBZT1UgSEFWRSBCRUVOIERFQlVHR0VELCBkb250IHJlc2lzdCAqKioqKioqKioqKioqKioqKioqKioqKioqKicpXG4gICAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqKioqKioqIFlPVSBIQVZFIEJFRU4gREVCVUdHRUQsIGRvbnQgcmVzaXN0ICoqKioqKioqKioqKioqKioqKioqKioqKioqJylcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKiogWU9VIEhBVkUgQkVFTiBERUJVR0dFRCwgZG9udCByZXNpc3QgICoqKioqKioqKioqKioqKioqKioqKioqKioqJylcblxuICAgICAgaWYgKGN1cnJlbnRfaWQgPT09IGRhdGEuZnJvbSkge1xuICAgICAgICAvL2FsZXJ0KCdzZW5kZXIgaXMgTUUnKVxuICAgICAgICAvLyBUT0RPOjogYXR0YWNoIG5ldyBtZXNzYWdlIGhlcmVcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudF9pZCA9PT0gZGF0YS50bykge1xuICAgICAgICAvLyB1cGRhdGUgbXkgdmlld1xuICAgICAgICBpZiAocmVjZWl2ZXJfaWQgPT09IGRhdGEuZnJvbSkge1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7ZGF0YS5mcm9tfVwiXWApLmNsaWNrKClcbiAgICAgICAgICAvLyBpZiByZWNlaXZlciBpcyBzZWxlY3RlZCByZWxvYWQgdGhlIHNlbGVjdGVkIHVzZXIuLlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGlmIHJlY2VpdmVyIG5vdCBzZWxlY3RlZCwgYWRkIHVucmVhZCBub3RpZmljYXRpb24gZm9yIHRoYXQgdXNlclxuXG4gICAgICAgICAgbGV0IHBlbmRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbaWQ9XCIke2RhdGEuZnJvbX1cIl1gKVxuICAgICAgICAgIGlmIChwZW5kaW5nLnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nJykgJiYgcGVuZGluZy5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpLmlubmVyVGV4dCkge1xuICAgICAgICAgICAgcGVuZGluZy5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpLmlubmVyVGV4dCA9IHBhcnNlSW50KHBlbmRpbmcucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKS5pbm5lclRleHQpICsgMVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3BlbmRpbmcnKVxuICAgICAgICAgICAgaXRlbS5pbm5lclRleHQgPSAxXG4gICAgICAgICAgICBwZW5kaW5nLnByZXBlbmQoaXRlbSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0pXG5cblxuICAgIGZ1bmN0aW9uIHNlbmROZXdNZXNzYWdlKGUpIHtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcblxuICAgICAgdmFyIG1zZyA9IHRoaXMudmFsdWVcbiAgICAgIC8vIGNoZWNrIGlmIGVudGVyIGtleSBpcyBwcmVzc2VkIGFuZCBtZXNzYWdlIGFuZCByZWNldmVyIGlkIG5vdCBudWxsXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMyAmJiBtc2cgIT09ICcnICYmIHJlY2VpdmVyX2lkICE9PSAnJyl7XG5cbiAgICAgICAgLy8gY2xlYXIgdHh0IGJveFxuICAgICAgICB0aGlzLnZhbHVlID0gJydcbiAgICAgICAgdmFyIHBhcmFtcyA9ICdyZWNlaXZlcl9pZD0nICsgcmVjZWl2ZXJfaWQgKyAnJm1lc3NhZ2U9JyArIG1zZ1xuICAgICAgICAvL3hoci5zZW5kKHBhcmFtcylcbiAgICAgICAgLy9hbGVydChwYXJhbXMpXG5cblxuICAgICAgICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdC9kcnVfcHVzaC93ZWIvZHJ1LWNoYXQvbmV3LW1lc3NhZ2UnXG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKVxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcIm5vLWNhY2hlLCBuby1zdG9yZSwgbWF4LWFnZT0wXCIpXG5cbiAgICAgICAgLy8gVE9ETzo6IHNldCB1cCBmb3JtIGNzcmYgdG9rZW5cblxuICAgICAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVhZHlTdGF0ZSkgLy8gPT09IDNcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgLy8gNDAzOiBmb3JiaWRkZW5cbiAgICAgICAgICAgIC8vIDQwNDogTm90IGZvdW5kXG5cbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5yZXNwb25zZVRleHQpXG5cbiAgICAgICAgICAgIC8vY29uc3QgdXNlcnMgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgLyp2YXIgb3V0cHV0ID0gJydcbiAgICAgICAgICAgIG91dHB1dCArPSAnPHVsPicgK1xuICAgICAgICAgICAgICAgICc8bGk+IElEOiAnXG4gICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgICAgICc8L3VsPidcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgbWVzc2FnZXMuaW5uZXJIVE1MID0gdGhpcy5yZXNwb25zZVRleHRcblxuICAgICAgICAgICAgLy8gbGlzdGVuZXIgZm9yIG1lc3NhZ2UgaW5wdXRcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImlucHV0XCJdLCBbbmFtZT1cIm1lc3NhZ2VcIl0nKVxuICAgICAgICAgICAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNlbmROZXdNZXNzYWdlKSAqL1xuICAgICAgICAgICAgLypkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXNnJykuaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlVGV4dCovXG4gICAgICAgICAgICBzY3JvbGxNZXNzYWdlTGlzdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0VSUm9yJylcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5zZW5kKHBhcmFtcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93Q2hhdHMoKSB7XG4gICAgICByZWNlaXZlcl9pZCA9IHRoaXMuaWRcbiAgICAgIGN1cnJlbnRfaWQgPSBkcnVwYWxTZXR0aW5ncy5kcnVfY2hhdC5jdXJyZW50X2lkXG4gICAgICAvL3RoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgIC8vIHJlbW92ZSB1bnJlYWQgbm90aWZpY2F0aW9uXG4gICAgICBsZXQgbm90aWZpY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtpZD1cIiR7dGhpcy5pZH1cIl1gKVxuICAgICAgaWYgKG5vdGlmaWNhdGlvbnMgJiYgbm90aWZpY2F0aW9ucy5xdWVyeVNlbGVjdG9yKCcucGVuZGluZycpKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbnMucXVlcnlTZWxlY3RvcignLnBlbmRpbmcnKS5yZW1vdmUoKVxuICAgICAgfVxuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuXG4gICAgICAvLyBPUEVOIC0gdHlwZSwgdXJsL2ZpbGUsIGFzeW5jXG4gICAgICAvLyAvZHJ1LWNoYXQvbWVzc2FnZXMve3VzZXJ9XG4gICAgICAvL2NvbnN0IHVybCA9ICdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzP25hbWU9bWltaSdcbiAgICAgIGNvbnN0IHVybCA9ICdodHRwOi8vbG9jYWxob3N0L2RydV9wdXNoL3dlYi9kcnUtY2hhdC9tZXNzYWdlcy8nICsgcmVjZWl2ZXJfaWRcblxuICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSlcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ2FjaGUtQ29udHJvbFwiLCBcIm5vLWNhY2hlLCBuby1zdG9yZSwgbWF4LWFnZT0wXCIpXG4gICAgICAvL3hoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJylcbiAgICAgIC8vdmFyIHBhcmFtcyA9IFwibmFtZT1cIituYW1lO1xuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L1VzaW5nX1hNTEh0dHBSZXF1ZXN0XG5cbiAgICAgIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh4aHIucmVhZHlTdGF0ZSkgLy8gPT09IDNcbiAgICAgIH1cblxuICAgICAgLy8gcmVhZHlTdGF0ZSA9PT0gNCBvbmxvYWRcbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAvLyA0MDM6IGZvcmJpZGRlblxuICAgICAgICAgIC8vIDQwNDogTm90IGZvdW5kXG4gICAgICAgICAgbWVzc2FnZXMuaW5uZXJIVE1MID0gdGhpcy5yZXNwb25zZVRleHRcblxuICAgICAgICAgIC8vIGxpc3RlbmVyIGZvciBtZXNzYWdlIGlucHV0XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwiaW5wdXRcIl0sIFtuYW1lPVwibWVzc2FnZVwiXScpXG4gICAgICAgICAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNlbmROZXdNZXNzYWdlKVxuICAgICAgICAgIHNjcm9sbE1lc3NhZ2VMaXN0KClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0VSUm9yJylcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQoKVxuICAgIH1cbiAgfVxuXG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKXtcblxuICB9XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIGRydUNoYXRJbml0KClcbiAgfSlcblxuICAvLyBzY3JvbGwgbWVzc2FnZSBsaXN0XG4gIGZ1bmN0aW9uIHNjcm9sbE1lc3NhZ2VMaXN0KCl7XG4gICAgY29uc3QgbXNnTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlLXdyYXBwZXInKVxuICAgIC8qdmFyIHkgPSBtc2dMaXN0LnNjcm9sbEhlaWdodDtcbiAgICB2YXIgeCA9IG1zZ0xpc3Quc2Nyb2xsV2lkdGg7XG4gICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqIERJRCBZT1UgQ0FMTCBNRSAqKioqKioqKioqKioqKioqKioqKioqJylcbiAgICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKiogRElEIFlPVSBDQUxMIE1FICoqKioqKioqKioqKioqKioqKioqKionKVxuICAgIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKiBESUQgWU9VIENBTEwgTUUgKioqKioqKioqKioqKioqKioqKioqKicpXG4gICAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqIERJRCBZT1UgQ0FMTCBNRSAqKioqKioqKioqKioqKioqKioqKioqJylcbiAgICBjb25zb2xlLmxvZyhtc2dMaXN0KVxuICAgIGNvbnNvbGUubG9nKHgpXG4gICAgY29uc29sZS5sb2coeSlcbiAgICBjb25zb2xlLmxvZyhtc2dMaXN0LmFuaW1hdGUoe3Njcm9sbH0pKSovXG4gICAgJCgnLm1lc3NhZ2Utd3JhcHBlcicpLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsVG9wOiBtc2dMaXN0LnNjcm9sbEhlaWdodFxuICAgIH0sIDUwKVxuICB9XG59KShqUXVlcnksIERydXBhbCwgZHJ1cGFsU2V0dGluZ3MpXG4iXSwic291cmNlUm9vdCI6IiJ9