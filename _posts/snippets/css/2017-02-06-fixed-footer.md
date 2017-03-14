---
layout: post
title: "Fixed Footer"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "footer"
  - "position"
categories:
  - "Snippets"
type: css  
---

### নিচের কোড সিনিপিটটুকু সাইটের `footer` কে সবসময় পেজের নিচে রাখবে।


#### নতুন ব্রাউজারের জন্যে।

```css
html{
	padding-bottom: 30px;
}
#footer {
   position:fixed;
   left:0px;
   bottom:0px;
   height:30px;
   width:100%;
   background:#999;
}
```

#### ইন্টারনেট ইএক্সপোলারার এর জন্য। (কাজ করে কিনা দেখতে হবে)

```css
/* IE 6 */
* html #footer {
   position:absolute;
   top:expression((0-(footer.offsetHeight)+(document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight)+(ignoreMe = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop))+'px');
}
```
