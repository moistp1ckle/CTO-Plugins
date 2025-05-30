// ==UserScript==
// @name         Hide Bumps
// @namespace    https://leaked.wiki
// @version      0.1
// @description  Auto hide bump messages.
// @author       https://cracked.sh/Sango
// @match        *://cracked.sh/Thread-*
// @icon         https://www.google.com/s2/favicons?domain=cracked.io
// @grant        none
// @require      https://static.cracked.sh/jscripts/jquery.js
// ==/UserScript==

(function() {
    'use strict';
    function hide() {
        $("#posts > div").each(function (i) {
            if (~$(this).find(".post_body").text().indexOf("This is a bump") || ~$(this).find(".post_body").text().indexOf("System message: this post was autobumped")) {
                var pid = $(this).addClass("post-banned");
                var $bit = $(this).find(".post-banned-bit");
                $bit.html($bit.html().replace("This post is by a banned member", "This post is a bump by"));
            }
        });
    }
    hide();
})();
