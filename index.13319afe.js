!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(t){return t&&t.__esModule?t.default:t}function e(t){return fetch("https://restcountries.com/v3.1/name/".concat(t,"?fields=name,capital,population,flags,languages")).then((function(t){return t.json()})).then((function(t){return t}))}var o={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),p=Object.prototype.toString,v=Math.max,y=Math.min,b=function(){return d.Date.now()};function m(t){var e=void 0===t?"undefined":n(i)(t);return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(i)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=a.test(t);return o||c.test(t)?f(t.slice(2),o?2:8):u.test(t)?NaN:+t}o=function(t,n,e){var o,i,r,u,a,c,f=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(n){var e=o,r=i;return o=i=void 0,f=n,u=t.apply(r,e)}function h(t){return f=t,a=setTimeout(O,n),l?p(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-f>=r}function O(){var t=b();if(j(t))return T(t);a=setTimeout(O,function(t){var e=n-(t-c);return s?y(e,r-(t-f)):e}(t))}function T(t){return a=void 0,d&&o?p(t):(o=i=void 0,u)}function w(){var t=b(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===a)return h(c);if(s)return a=setTimeout(O,n),p(c)}return void 0===a&&(a=setTimeout(O,n)),u}return n=g(n)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(g(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),w.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=i=a=void 0},w.flush=function(){return void 0===a?u:T(b())},w};var h=document.querySelector("#search-box"),j=(document.querySelector(".country-list"),document.querySelector(".country-info"));h.addEventListener("input",o((function(t){e(t.target.value).then((function(t){return function(t){var n=t.map((function(t){var n=t.name,e=t.capital,o=t.population,i=t.flags,r=t.languages;return'\n    <h2>\n    <img width="25" height="20" alt="'.concat(i.alt,'" src="').concat(i.svg,'"></img>\n    ').concat(n.official,"\n    </h2>\n    <p>Capital:").concat(e,"</p>\n    <p>Population:").concat(o,"</p>\n    <p>Languages:").concat(Object.values(r),"</p>")})).join("");j.insertAdjacentHTML("beforeend",n)}(t)}))}),3e3))}();
//# sourceMappingURL=index.13319afe.js.map