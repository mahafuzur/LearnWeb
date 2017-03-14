---
layout: post
title: "Glowing Blue Input Highlights"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "glowing"
  - "box-shadow"
categories:
  - "Snippets"
type: css  
---

### নিচের কোড সিনিপিট যেকোন ইনপুটকে গ্লোয়িং ইফেক্ট দিবে।

```css
input[type=text], textarea {
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid #DDDDDD;
}

input[type=text]:focus, textarea:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  padding: 3px 0px 3px 3px;
  margin: 5px 1px 3px 0px;
  border: 1px solid rgba(81, 203, 238, 1);
}
```
[Reference](http://snipt.net/chryssanthemum/posted-by-dukenmarga/)
