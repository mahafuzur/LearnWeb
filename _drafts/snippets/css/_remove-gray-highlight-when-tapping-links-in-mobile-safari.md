---
title: Remove Gray Highlight When Tapping Links in Mobile Safari
---


-webkit-tap-highlight-color: rgba(0,0,0,0);

And then to allow :active styles to work in your CSS on a page in Mobile Safari:

document.addEventListener("touchstart", function(){}, true);