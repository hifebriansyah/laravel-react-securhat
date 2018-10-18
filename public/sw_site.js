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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ({

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

var cacheName = 'v2';

var currentCache = {
    offline: 'offline-cache' + cacheName
};

var offlineUrl = 'offline.html';

self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(currentCache.offline).then(function (cache) {
        return cache.addAll([
        //'./img/offline.svg',
        offlineUrl]);
    }));
});

// Call Activate Event
self.addEventListener('activate', function (e) {
    console.log('Service Worker: Activated');
    // Remove unwanted caches
    e.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames.map(function (cache) {
            if (cache !== cacheName) {
                //console.log('Service Worker: Clearing Old Cache');
                return caches.delete(cache);
            }
        }));
    }));
});

self.addEventListener('fetch', function (event) {
    // request.mode = navigate isn't supported in all browsers
    // so include a check for Accept: text/html header.
    if (event.request.mode === 'navigate' || event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html')) {
        event.respondWith(fetch(event.request.url).catch(function (error) {
            // Return the offline page
            return caches.match(offlineUrl);
        }));
    } else {
        // Respond with everything else if we can
        event.respondWith(caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        }));
    }
});

/***/ })

/******/ });