---
layout: post
title: "Prevent Superscripts and Subscripts from Affecting Line-Height"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "line-height"
  - "superscripts"
  - "subscripts"
categories:
  - "Snippets"
type: css  
---

### সুপারস্ক্রিপট এবং সাবস্ক্রিপ্ট লাইন হাইটকে পরিবর্তন করবেনা যদি নিচের সিনিপিটটি ব্যবহার করা হয়।

```css
sup, sub {
  vertical-align: baseline;
  position: relative;
  top: -0.4em;
}
sub {
  top: 0.4em;
}
```
