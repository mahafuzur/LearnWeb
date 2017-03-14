---
layout: post
title: "Multiple Backgrounds Syntax"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "background"
  - "multiple backgrounds"
categories:
  - "Snippets"
type: css  
---

### একের অধিক ব্যাকগ্রাউন্ড ব্যবহারের নিয়ম।

```css
#box {
  background:
    url(icon.png) top left no-repeat,
    url(texture.jpg),
    url(top-edge.png) top left repeat-y;
}
```

### এখানে চাইলে গ্রেডিয়েন্ট ব্যবহার করা যায়।

```css
#box {
	background:
		url(../images/arrow.png) 15px center no-repeat,
		-webkit-gradient(linear,left top,left bottom,color-stop(0, #010101),color-stop(1, #181818));
}
```
