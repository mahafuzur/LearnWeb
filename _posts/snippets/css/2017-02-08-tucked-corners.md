---
layout: post
title: "Tucked Corners"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "tucked corners"
categories:
  - "Snippets"
type: css  
---

### Tucked corners snippets.

```html
<div class="corners">
   Content
</div>
```

```css
body {
    background: #e6e6e6;
}
.corners {
    background: #f6f6f6;
    height: 700px;
    margin: 50px auto;
    max-width: 600px;
    position: relative;
    width: 80%;
    -webkit-box-shadow: 0 1px 7px hsla(0,0%,0%,.2);
       -moz-box-shadow: 0 1px 7px hsla(0,0%,0%,.2);
            box-shadow: 0 1px 7px hsla(0,0%,0%,.2);
}
/* Corner Effect */
.corners:after,
.corners:before {
    background: #e6e6e6;
    content: '';
    height: 50px;
    position: absolute;
    top: -25px;
    width: 100px;
    -webkit-box-shadow: 0 5px 10px -7px hsla(0,0%,0%,.5);
       -moz-box-shadow: 0 5px 10px -7px hsla(0,0%,0%,.5);
            box-shadow: 0 5px 10px -7px hsla(0,0%,0%,.5);
}
.corners:after {
    left: -50px;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
}
.corners:before {
    right: -50px;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
}

```

[Reference URL]()