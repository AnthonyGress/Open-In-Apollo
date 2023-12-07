// ==UserScript==
// @name         Open Apollo App
// @version      1.0.1
// @author       AnthonyGress
// @match        *://*.reddit.com/*
// @downloadURL  https://gist.github.com/AnthonyGress/c04327abc6ff3bc45871468743f00341/raw/open-in-apollo.user.js
// @updateURL    https://gist.github.com/AnthonyGress/c04327abc6ff3bc45871468743f00341/raw/open-in-apollo.user.js
// @homepage     https://gist.github.com/AnthonyGress/c04327abc6ff3bc45871468743f00341/
// ==/UserScript==
if (window.location.pathname === '/redirect') return;
window.location.href = `apollo://${window.location.hostname}${window.location.pathname}`
