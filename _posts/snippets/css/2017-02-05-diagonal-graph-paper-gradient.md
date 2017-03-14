---
layout: post
title: "Diagonal Graph Paper Gradient"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "gradient"
  - "graph paper"
categories:
  - "Snippets"
type: css  
---

### গ্রাফ পেপার স্টাইল গ্রেডিয়েন্ট।

```css
#example-gradient {
  height: 200px;
  margin: 0 0 20px 0;
  background-color: #eaeaea;
  background-size: 20px 20px;
  background-image:
     -webkit-repeating-linear-gradient(45deg, rgba(0, 191, 255, .5), rgba(0, 191, 255, .5) 1px, transparent 1px, transparent 15px),
     -webkit-repeating-linear-gradient(-45deg, rgba(255, 105, 180, .5), rgba(255, 105, 180, .5) 1px, transparent 1px, transparent 15px);
  background-image:
     -moz-repeating-linear-gradient(45deg, rgba(0, 191, 255, .5), rgba(0, 191, 255, .5) 1px, transparent 1px, transparent 15px),
     -moz-repeating-linear-gradient(-45deg, rgba(255, 105, 180, .5), rgba(255, 105, 180, .5) 1px, transparent 1px, transparent 15px);
  background-image:
     -o-repeating-linear-gradient(45deg, rgba(0, 191, 255, .5), rgba(0, 191, 255, .5) 1px, transparent 1px, transparent 15px),
     -o-repeating-linear-gradient(-45deg, rgba(255, 105, 180, .5), rgba(255, 105, 180, .5) 1px, transparent 1px, transparent 15px);
  background-image:
     repeating-linear-gradient(45deg, rgba(0, 191, 255, .5), rgba(0, 191, 255, .5) 1px, transparent 1px, transparent 15px),
     repeating-linear-gradient(-45deg, rgba(255, 105, 180, .5), rgba(255, 105, 180, .5) 1px, transparent 1px, transparent 15px);
}
```

[Ref](http://jsfiddle.net/ChristopherBurton/eMuAC/)
