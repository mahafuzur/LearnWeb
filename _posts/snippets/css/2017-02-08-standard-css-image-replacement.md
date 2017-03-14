---
layout: post
title: "Standard CSS Image Replacement"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "image replacement"
categories:
  - "Snippets"
type: css  
---

### সিএসএস দ্বারা ইমেজ রিপ্লেসমেন্ট টেকনিক।

#### Mike Rundle's Phark Method

```css
h1#logo {
   width: 200px; // width of image
   height: 100px; // height of image
   background: url(../path/to/image.jpg);
   text-indent: -9999px;
}
```
