---
layout: post
title: "Body Top Shadow"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "box-shadow"
categories:
  - "Snippets"
type: css  
---

### সাইটের উপরের দিকে স্যাডো।

```css
body:before {
	content: "";
	position: fixed;
	top: -10px;
	left: 0;
	width: 100%;
	height: 10px;

	-webkit-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
	  -moz-box-shadow: 0px 0px 10px rgba(0,0,0,.8);
				 box-shadow: 0px 0px 10px rgba(0,0,0,.8);

	z-index: 100;
}
```

[Reference URL](http://playground.genelocklin.com/depth/)
