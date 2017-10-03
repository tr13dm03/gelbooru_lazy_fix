// ==UserScript==
// @name Gelbooru Lazyload Fix
// @version 1.0.2
// @namespace atribecalledkwest
// @description This script fixes the Gelbooru thumbnails if the thumbnail lazyloader doesn't run (typically due to an Adblocker)
// @include https://gelbooru.com/*
// @include http://gelbooru.com/*
// @grant None
// ==/UserScript==

(function() {
    var thumbs = document.querySelectorAll("img.lazyload[data-original]");
    for (let img of thumbs) {
        img.src = img.dataset["original"];
    } })();
