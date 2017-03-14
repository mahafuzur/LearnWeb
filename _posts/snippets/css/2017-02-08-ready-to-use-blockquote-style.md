---
layout: post
title: "Ready to Use Blockquote Style"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "blockquote"
  - "ready to use"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন রকমের ব্লককোট স্টাইল।

#### Simple style

```css
blockquote {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: "\201C""\201D""\2018""\2019";
}
blockquote:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}
blockquote p {
  display: inline;
}
```
