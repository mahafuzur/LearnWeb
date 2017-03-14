---
layout: post
title: "Stack of Paper"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "box-shadow"
  -  "paper"
categories:
  - "Snippets"
type: css  
---

### পেপার স্টাক এফেক্ট স্টাইল।

```html
<div class="papers"></div>
```

```css
body {
  background: #666;    
}
.papers {
  background-color: white;
  height: 350px;
  padding: 20px;
  width: 260px;
  -webkit-box-shadow:
        1px 1px   0 rgba(0,   0,   0,   0.100),
        3px 3px   0 rgba(255, 255, 255, 1.0),
        4px 4px   0 rgba(0,   0,   0,   0.125),
        6px 6px   0 rgba(255, 255, 255, 1.0),  
        7px 7px   0 rgba(0,   0,   0,   0.150),
        9px 9px   0 rgba(255, 255, 255, 1.0),  
        10px 10px 0 rgba(0,   0,   0,   0.175);
  -moz-box-shadow:
        1px 1px   0 rgba(0,   0,   0,   0.100),
        3px 3px   0 rgba(255, 255, 255, 1.0),
        4px 4px   0 rgba(0,   0,   0,   0.125),
        6px 6px   0 rgba(255, 255, 255, 1.0),  
        7px 7px   0 rgba(0,   0,   0,   0.150),
        9px 9px   0 rgba(255, 255, 255, 1.0),  
        10px 10px 0 rgba(0,   0,   0,   0.175);
  box-shadow:
        1px 1px   0 rgba(0,   0,   0,   0.100),
        3px 3px   0 rgba(255, 255, 255, 1.0),
        4px 4px   0 rgba(0,   0,   0,   0.125),
        6px 6px   0 rgba(255, 255, 255, 1.0),  
        7px 7px   0 rgba(0,   0,   0,   0.150),
        9px 9px   0 rgba(255, 255, 255, 1.0),  
        10px 10px 0 rgba(0,   0,   0,   0.175);

}
```

[Reference URL](http://forrst.com/posts/Stack_of_papers_with_CSS3_box_shadow-Nt1)
