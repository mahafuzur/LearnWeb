---
layout: post
title: "Unicode Icon"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "unicode icon"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন রকমের ইনিকোড আইকন।

```css
a[href^="mailto:"]:before {
    content: "\2709";
}

.phone:before {
    content: "\2706";
}

.important:before {
    content: "\27BD";
}

blockquote:before {
    content: "\275D";
}

blockquote:after {
    content: "\275E";
}

.alert:before {
    content: "\26A0";
}
```
