// ==UserScript==
// @name         Open Apollo App (search integration)
// @version      1.0.0
// @author       AnthonyGress
// @author       JeffreyCA
// @match        *://*.yahoo.com/*
// @match        *://*.bing.com/*
// @match        *://*.duckduckgo.com/*
// @match        *://*.ecosia.org/*
// @match        *://*.google.com/*
// @match        *://*.google.ad/*
// @match        *://*.google.ae/*
// @match        *://*.google.com.af/*
// @match        *://*.google.com.ag/*
// @match        *://*.google.al/*
// @match        *://*.google.am/*
// @match        *://*.google.co.ao/*
// @match        *://*.google.com.ar/*
// @match        *://*.google.as/*
// @match        *://*.google.at/*
// @match        *://*.google.com.au/*
// @match        *://*.google.az/*
// @match        *://*.google.ba/*
// @match        *://*.google.com.bd/*
// @match        *://*.google.be/*
// @match        *://*.google.bf/*
// @match        *://*.google.bg/*
// @match        *://*.google.com.bh/*
// @match        *://*.google.bi/*
// @match        *://*.google.bj/*
// @match        *://*.google.com.bn/*
// @match        *://*.google.com.bo/*
// @match        *://*.google.com.br/*
// @match        *://*.google.bs/*
// @match        *://*.google.bt/*
// @match        *://*.google.co.bw/*
// @match        *://*.google.by/*
// @match        *://*.google.com.bz/*
// @match        *://*.google.ca/*
// @match        *://*.google.cd/*
// @match        *://*.google.cf/*
// @match        *://*.google.cg/*
// @match        *://*.google.ch/*
// @match        *://*.google.ci/*
// @match        *://*.google.co.ck/*
// @match        *://*.google.cl/*
// @match        *://*.google.cm/*
// @match        *://*.google.cn/*
// @match        *://*.google.com.co/*
// @match        *://*.google.co.cr/*
// @match        *://*.google.com.cu/*
// @match        *://*.google.cv/*
// @match        *://*.google.com.cy/*
// @match        *://*.google.cz/*
// @match        *://*.google.de/*
// @match        *://*.google.dj/*
// @match        *://*.google.dk/*
// @match        *://*.google.dm/*
// @match        *://*.google.com.do/*
// @match        *://*.google.dz/*
// @match        *://*.google.com.ec/*
// @match        *://*.google.ee/*
// @match        *://*.google.com.eg/*
// @match        *://*.google.es/*
// @match        *://*.google.com.et/*
// @match        *://*.google.fi/*
// @match        *://*.google.com.fj/*
// @match        *://*.google.fm/*
// @match        *://*.google.fr/*
// @match        *://*.google.ga/*
// @match        *://*.google.ge/*
// @match        *://*.google.gg/*
// @match        *://*.google.com.gh/*
// @match        *://*.google.com.gi/*
// @match        *://*.google.gl/*
// @match        *://*.google.gm/*
// @match        *://*.google.gr/*
// @match        *://*.google.com.gt/*
// @match        *://*.google.gy/*
// @match        *://*.google.com.hk/*
// @match        *://*.google.hn/*
// @match        *://*.google.hr/*
// @match        *://*.google.ht/*
// @match        *://*.google.hu/*
// @match        *://*.google.co.id/*
// @match        *://*.google.ie/*
// @match        *://*.google.co.il/*
// @match        *://*.google.im/*
// @match        *://*.google.co.in/*
// @match        *://*.google.iq/*
// @match        *://*.google.is/*
// @match        *://*.google.it/*
// @match        *://*.google.je/*
// @match        *://*.google.com.jm/*
// @match        *://*.google.jo/*
// @match        *://*.google.co.jp/*
// @match        *://*.google.co.ke/*
// @match        *://*.google.com.kh/*
// @match        *://*.google.ki/*
// @match        *://*.google.kg/*
// @match        *://*.google.co.kr/*
// @match        *://*.google.com.kw/*
// @match        *://*.google.kz/*
// @match        *://*.google.la/*
// @match        *://*.google.com.lb/*
// @match        *://*.google.li/*
// @match        *://*.google.lk/*
// @match        *://*.google.co.ls/*
// @match        *://*.google.lt/*
// @match        *://*.google.lu/*
// @match        *://*.google.lv/*
// @match        *://*.google.com.ly/*
// @match        *://*.google.co.ma/*
// @match        *://*.google.md/*
// @match        *://*.google.me/*
// @match        *://*.google.mg/*
// @match        *://*.google.mk/*
// @match        *://*.google.ml/*
// @match        *://*.google.com.mm/*
// @match        *://*.google.mn/*
// @match        *://*.google.com.mt/*
// @match        *://*.google.mu/*
// @match        *://*.google.mv/*
// @match        *://*.google.mw/*
// @match        *://*.google.com.mx/*
// @match        *://*.google.com.my/*
// @match        *://*.google.co.mz/*
// @match        *://*.google.com.na/*
// @match        *://*.google.com.ng/*
// @match        *://*.google.com.ni/*
// @match        *://*.google.ne/*
// @match        *://*.google.nl/*
// @match        *://*.google.no/*
// @match        *://*.google.com.np/*
// @match        *://*.google.nr/*
// @match        *://*.google.nu/*
// @match        *://*.google.co.nz/*
// @match        *://*.google.com.om/*
// @match        *://*.google.com.pa/*
// @match        *://*.google.com.pe/*
// @match        *://*.google.com.pg/*
// @match        *://*.google.com.ph/*
// @match        *://*.google.com.pk/*
// @match        *://*.google.pl/*
// @match        *://*.google.pn/*
// @match        *://*.google.com.pr/*
// @match        *://*.google.ps/*
// @match        *://*.google.pt/*
// @match        *://*.google.com.py/*
// @match        *://*.google.com.qa/*
// @match        *://*.google.ro/*
// @match        *://*.google.ru/*
// @match        *://*.google.rw/*
// @match        *://*.google.com.sa/*
// @match        *://*.google.com.sb/*
// @match        *://*.google.sc/*
// @match        *://*.google.se/*
// @match        *://*.google.com.sg/*
// @match        *://*.google.sh/*
// @match        *://*.google.si/*
// @match        *://*.google.sk/*
// @match        *://*.google.com.sl/*
// @match        *://*.google.sn/*
// @match        *://*.google.so/*
// @match        *://*.google.sm/*
// @match        *://*.google.sr/*
// @match        *://*.google.st/*
// @match        *://*.google.com.sv/*
// @match        *://*.google.td/*
// @match        *://*.google.tg/*
// @match        *://*.google.co.th/*
// @match        *://*.google.com.tj/*
// @match        *://*.google.tl/*
// @match        *://*.google.tm/*
// @match        *://*.google.tn/*
// @match        *://*.google.to/*
// @match        *://*.google.com.tr/*
// @match        *://*.google.tt/*
// @match        *://*.google.com.tw/*
// @match        *://*.google.co.tz/*
// @match        *://*.google.com.ua/*
// @match        *://*.google.co.ug/*
// @match        *://*.google.co.uk/*
// @match        *://*.google.com.uy/*
// @match        *://*.google.co.uz/*
// @match        *://*.google.com.vc/*
// @match        *://*.google.co.ve/*
// @match        *://*.google.co.vi/*
// @match        *://*.google.com.vn/*
// @match        *://*.google.vu/*
// @match        *://*.google.ws/*
// @match        *://*.google.rs/*
// @match        *://*.google.co.za/*
// @match        *://*.google.co.zm/*
// @match        *://*.google.co.zw/*
// @match        *://*.google.cat/*
// @downloadURL  
// @updateURL    
// @homepage     https://github.com/AnthonyGress/Open-In-Apollo
// ==/UserScript==

// Note: Some search engines like DDG and Bing index redditmedia.com links
const regexRedditIDs = /^(?:https?:\/\/)?(?:(?:www|amp|m|i)\.)?(?:(?:reddit\.com|redditmedia\.com))\/r\/(\w+)(?:\/comments\/(\w+)(?:\/\w+\/(\w+)(?:\/?.*?[?&]context=(\d+))?)?)?/i;

function convertToApolloUrl(urlString) {
	const match = urlString.match(regexRedditIDs);
	const url = new URL(urlString);

	if (url.pathname === '/' || url.pathname === '/?feed=home') {
		return 'apollo://';
	}

	if (urlString.includes('/search')) {
		return null;
	}

	if (match) {
		let hostname = url.hostname;

		// Apollo doesn't support redditmedia.com links, so convert them to reddit.com
		if (hostname.includes('redditmedia.com')) {
			hostname = 'www.reddit.com';
		}

		// Comments and posts
		if (url.pathname.includes('/comments/')) {
			return `apollo://${hostname}${url.pathname}`;
		}

		// Handle subreddit links with sorting suffixes
		const sortingSuffixes = /\/(new|best|hot|top|rising)\/?$/;
		const cleanPath = url.pathname.replace(sortingSuffixes, '');
		return `apollo://${hostname}${cleanPath}`;
	}

	return null;
}

function processSearchResults() {
	const searchResults = document.querySelectorAll('a');
	
	searchResults.forEach(link => {
		const href = link.href;
		if (!href) return;
		
		if (href.match(regexRedditIDs)) {
			const apolloUrl = convertToApolloUrl(href);
			if (apolloUrl) {
				link.href = apolloUrl;

				// Yahoo hijacks tap events, preventing Apollo from opening
				if (window.location.hostname.includes('search.yahoo.com')) {
					link.addEventListener('touchstart', (event) => {
						event.stopPropagation();
					}, { capture: true });
				}
			}
		}
	});
}

// Process initial search results
processSearchResults();

// Observer for handling dynamically loaded content
const observer = new MutationObserver((mutations) => {
	processSearchResults();
});

observer.observe(document.body, {
	childList: true,
	subtree: true
});
