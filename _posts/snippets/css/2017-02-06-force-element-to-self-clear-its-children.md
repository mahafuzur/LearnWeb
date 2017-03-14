---
layout: post
title: "Force Element To Self-Clear its Children (clearfix hack)"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "clearfix"
  - "float"
categories:
  - "Snippets"
type: css  
---

### নিচের সিনিপিটকে বলা হয়  । এটি ব্যবহার করলে ফ্লোট করা ইলিমেন্টএর পরের ইলিমেন্টটি নতুন লাইন থেকে শুরু হয়।

```css
.clearfix:before,
.clearfix:after {
    content: "";
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix{
    zoom: 1; /* For IE 6/7 (trigger hasLayout) */
}
```
