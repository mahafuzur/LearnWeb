---
layout: post
title: "Simple hr style"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "hr"
categories:
  - "Snippets"
type: css  
---

### হোরিযন্টাইল স্টাইল।

#### সাধারন স্টাইল।

```css
hr{
    display: list-item;
    list-style: url(hr.gif) inside;
    filter: alpha(opacity=0);
    width: 0;
}
/* another one */
hr {
    border: 0;
    height: 15px;
    background: url(hr.gif) 50% 0 no-repeat;
    margin: 1em 0;
}
```
