---
layout: post
title: "Gradient Text"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "gradient"
  - "typography"
categories:
  - "Snippets"
type: css  
---

### গ্রয়েডিয়েন্ট টেক্সট স্টাইল।

 > This is WebKit only, but is the cleanest way to accomplish it as the text remains editable and selectable web text.

```css
h1 {
  font-size: 72px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
