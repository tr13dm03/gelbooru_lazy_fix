// ==UserScript==
// @name Gelbooru Lazyload Fix
// @version 1.0.1
// @namespace atribecalledkwest
// @description This script fixes the Gelbooru thumbnails if the thumbnail lazyloader doesn't run (typically due to an Adblocker)
// @include https://gelbooru.com/*
// @include http://gelbooru.com/*
// ==/UserScript==

(function() {
    var thumbs = document.querySelectorAll("img.lazyload[data-src]");
    for(var i = 0; i < thumbs.length; i++) {
        var img = thumbs[i];
        img.src = img.dataset.src;
    }
})();
