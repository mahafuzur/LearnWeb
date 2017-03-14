---
layout: post
title: "Aligning text Smartly"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "text align"
categories:
  - "Snippets"
type: css  
---

### যখন টেক্সট একলাইনের বেশী হলে টেক্সট লেফট এলাইন হবে, কিন্তু একলাইনের কম হলে ছেন্টার এলাইন হবে।


```css
figure{
	width: 420px;
	border: 1px solid #ccc;
	padding: 10px;
	text-align: center; /* required */
	margin: 10px;
}
figcaption{
	display: inline-block; /* required */
	text-align: left; /* required */
}
```
