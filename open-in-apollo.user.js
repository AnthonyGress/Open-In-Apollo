// ==UserScript==
// @name         Open Apollo App
// @version      1.0.3
// @author       AnthonyGress
// @match        *://*.reddit.com/*
// @downloadURL  https://gist.github.com/AnthonyGress/c04327abc6ff3bc45871468743f00341/raw/open-in-apollo.user.js
// @updateURL    https://gist.github.com/AnthonyGress/c04327abc6ff3bc45871468743f00341/raw/open-in-apollo.user.js
// @homepage     https://github.com/AnthonyGress/Open-In-Apollo/edit/main/open-in-apollo.user.js
// ==/UserScript==
function openInApollo() {
	const regexRedditIDs = /^(?:https?:\/\/)?(?:(?:www|amp|m|i)\.)?(?:(?:reddit\.com))\/r\/(\w+)(?:\/comments\/(\w+)(?:\/\w+\/(\w+)(?:\/?.*?[?&]context=(\d+))?)?)?/i;
  	const match = window.location.href.match(regexRedditIDs);
	
	if (window.location.pathname === '/' || window.location.pathname === '/?feed=home') {
		window.location.href = `apollo://`
		return;
	}
		
	if (window.location.pathname.includes('/search')){
		return;
	}
	
	if (match) {
		window.location.href = `apollo://${window.location.hostname}${window.location.pathname}`
	}
}

openInApollo();

