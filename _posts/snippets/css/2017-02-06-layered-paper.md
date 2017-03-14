---
layout: post
title: "Layered Paper"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "box-shadow"
  - "layer paper"
categories:
  - "Snippets"
type: css  
---

### লেয়ার পেপার এফেক্ট।

```html
<div class="layered-paper">
    Howdy
</div>
```

```css
.layered-paper {
    background: #eee;
    box-shadow:
        0 1px 1px rgba(0,0,0,0.15), /* The top layer shadow */
        0 10px 0 -5px #eee, /* The second layer */
        0 10px 1px -4px rgba(0,0,0,0.15), /* The second layer shadow */
        0 20px 0 -10px #eee, /* The third layer */
        0 20px 1px -9px rgba(0,0,0,0.15); /* The third layer shadow */
    padding: 10px; /* you can removie it */
}
```
