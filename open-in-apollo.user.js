// ==UserScript==
// @name         Open Apollo App
// @version      1.0.2
// @author       AnthonyGress
// @match        *://*.reddit.com/*
// @downloadURL  https://gist.github.com/AnthonyGress/c04327abc6ff3bc45871468743f00341/raw/open-in-apollo.user.js
// @updateURL    https://gist.github.com/AnthonyGress/c04327abc6ff3bc45871468743f00341/raw/open-in-apollo.user.js
// @homepage     https://github.com/AnthonyGress/Open-In-Apollo/edit/main/open-in-apollo.user.js
// ==/UserScript==
window.location.href = `apollo://${window.location.hostname}${window.location.pathname}`
