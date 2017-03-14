---
layout: post
title: "Crowse Browser Opacity"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "opacity"
categories:
  - "Snippets"
type: css  
---

### ক্রস ব্রাউজার অপাছিটি।

```css
.transparent_class {
    /* IE 8 */
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
    /* IE 5-7 */
    filter: alpha(opacity=50);
    /* Netscape */
    -moz-opacity: 0.5;
    /* Safari 1.x */
    -khtml-opacity: 0.5;
    /* Good browsers */
    opacity: 0.5;
}
```
