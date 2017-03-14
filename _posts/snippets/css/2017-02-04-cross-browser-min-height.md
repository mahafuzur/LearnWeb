---
layout: post
title: Cross-Browser Min Height
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "min-height"
categories:
  - "Snippets"
type: css  
---

### ক্রস ব্রাউজার মিনিমাম উচ্চতা।

```css
div{
   min-height: 500px;
   height:auto !important;
   height: 500px;
}
```


### আই ইর জন্যে।

```css
div {
   height: expression( this.scrollHeight < 501 ? "500px" : "auto" );
}
```
