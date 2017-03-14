---
layout: post
title: "Cross-Browser hr Styling"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "hr styling"
categories:
  - "Snippets"
type: css  
---

### যেকোন ব্রাউজারের জন্যে।

```css
hr{
   border : 0;
   height : 15px;
   background : url(hr.gif) 50% 0 no-repeat;
   margin : 1em 0;
}
```

### ইন্টারন্টে অক্সপোলারার ৮ এর নিচের সব ব্রাউজারের জন্যে।

```css
hr{
   display : list-item;
   list-style : url(hr.gif) inside;
   filter : alpha(opacity=0);
   width : 0;
}
```
