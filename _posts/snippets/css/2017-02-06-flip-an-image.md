---
layout: post
title: "Flip an Image"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "image"
  - "flip image"
  - "transform"
categories:
  - "Snippets"
type: css  
---

### নিচের সিনিপিট টুকু ছবিকে উল্টে দিবে।

```css
img {
	-moz-transform: scaleX(-1);
	-o-transform: scaleX(-1);
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
	filter: FlipH; /* need to be tested */
	-ms-filter: "FlipH"; /* need to be tested */
}
```
