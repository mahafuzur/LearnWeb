---
layout: post
title: "Truncate String with Ellipsis"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "truncate string"
categories:
  - "Snippets"
type: css  
---

 > All the following are required, so the text must be in a single straight line that overflows a box where that overflow is hidden.

 ```css
.truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

[Ref](http://html5hub.com/ellipse-my-text/)
