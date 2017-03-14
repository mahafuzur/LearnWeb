---
layout: post
title: "Style Placeholder Text"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "placeholder style"
categories:
  - "Snippets"
type: css  
---

### নিচের কোডটুকু ব্যবহার করে `placeholder text` কে স্টাইল করা যায়।

```css
::-webkit-input-placeholder {
   color: red;
}

:-moz-placeholder { /* Firefox 18- */
   color: red;  
}

::-moz-placeholder {  /* Firefox 19+ */
   color: red;  
}

:-ms-input-placeholder {  
   color: red;  
}
```
