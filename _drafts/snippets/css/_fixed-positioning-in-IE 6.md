---
title: Fixed Positioning in IE 6
---

```css
* { margin:0; padding:0; }
html, body {
   height: 100%;
}
body #fixedElement {
   position:fixed !important;
   position: absolute; /*ie6 and above*/
   top: 0;
   right: 0;
}
#page-wrap {
    width: 600px;
    margin: 0 auto; 
    font: 16px/2 Georgia, Serif;
}
```

 > The 100% height on the body and html stuff is in case you want to do fixed positioning along the bottom edge of the browser window.

[Ref](http://css-tricks.com/examples/FixedPositionIE6/)