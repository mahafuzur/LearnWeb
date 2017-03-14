---
layout: post
title: "Print URL After Links"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "print Url"
  - "media query"
categories:
  - "Snippets"
type: css  
---

### নিচের সিনিপিটটি যেকোন পেজের `url` কে প্রিন্ট করবে।

```css
@media print{
   a:after{
     content:" (" attr(href) ")";
     font-size:0.8em;font-weight:normal;
 }
}
```
