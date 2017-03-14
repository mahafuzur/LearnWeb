---
layout: post
title: "Cross Browser Inline-Block"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "inline-block"
categories:
  - "Snippets"
type: css  
---

### ক্রোসব্রাউজার ইনলাইন ব্লক।

```css
li {
	width: 200px;
	min-height: 250px;
	border: 1px solid #000;
	display: -moz-inline-stack;
	display: inline-block;
	vertical-align: top;
	margin: 5px;
	zoom: 1;
	*display: inline;
	_height: 250px;
}
```
