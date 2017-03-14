---
layout: post
title: "Slide In Image Boxes"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "img"
  -  "slide boxes"
categories:
  - "Snippets"
type: css  
---

### সেলাইড বক্স এনিমেশন্স

```css
footer {
    clear:both;
    overflow:hidden;
    font-size:16px;
    line-height:1.3;
}
#footer-boxes {
    -moz-column-count:2;
    -moz-column-gap:10px;
    -webkit-column-count:2;
    -webkit-column-gap:10px;
    column-count:4;
    column-gap:10px;
}
.footer-box {
    margin:0 0 10px 0;
    display:inline-block;
    width:262px;
    height:140px;
    padding:15px;
    background:#e6e2df;
    color:#b2aaa4;
    -webkit-transition:all 0.2s ease;
    -moz-transition:all 0.2s ease;
    background-position:320px 50%;
    background-repeat:no-repeat;
    text-decoration: none;
}
.footer-box h5 {
    font: bold 24px Sans-Serif !important;
    text-transform:uppercase;
    font-size:38px;
    line-height:1;
    padding:0 0 10px 0;
}
.footer-box:hover h5 {
    text-shadow:0 0 4px rgba(0,0,0,0.4);
    color:white;
}
.footer-box:hover p {
    color:white;
}
.footer-box p {
    font-size:12px;
    width:175px;
    line-height:1.5;
}
.footer-box:hover {
    background-position:200px 50%;
}
#f-diw {
    background-image:url(http://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-8/images/css-tricks.png);
    background-position:290px -1288px;
}
#f-diw:hover {
    background-color:#237abe;
    background-position:186px -1288px;
}
#f-qod {
    background-image:url(http://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-8/images/css-tricks.png);
    background-position:290px -1448px;
}
#f-qod:hover {
    background-color:#37597a;
    background-position:186px -1448px;
}
#f-htmlipsum {
    background-image:url(http://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-8/images/css-tricks.png);
    background-position:290px -1608px;
}
#f-htmlipsum:hover {
    background-color:#333333;
    background-position:186px -1608px;
}
#f-qod:hover p {
    color:#adbde3;
}
#f-bookshelf {
    background-image:url(http://cdn.css-tricks.com/wp-content/themes/CSS-Tricks-8/images/css-tricks.png);
    background-position:290px -1768px;
}
#f-bookshelf:hover {
    background-color:#ff8400;
    background-position:186px -1768px;
}
#f-html-ipsum:hover p {
    color:#fff8da;
}
#f-twitter {
    background-image:url(http://css-tricks.com/images/css-tricks.png);
    background-position:290px -1928px;
}
#f-twitter:hover {
    background-color:#4ed2fe;
    background-position:186px -1928px;
}
#f-forrst {
    background-image:url(http://css-tricks.com/images/css-tricks.png);
    background-position:290px -2088px;
}
#f-forrst:hover {
    background-color:#203f16;
    background-position:186px -2088px;
}
#f-forrst:hover p {
    color: #92c59c;
}
```
