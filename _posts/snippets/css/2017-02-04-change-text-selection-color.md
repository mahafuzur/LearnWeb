---
layout: post
title: "Change Text Selection Color"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "text selection"
categories:
  - "Snippets"
type: css  
---

### টেক্সট সিলেকসন্সের রং পরিবর্তন।

```css
/* Mozilla based browsers */
::-moz-selection {
       background-color: #FFA;
       color: #000;
}

/* Works in Safari */
::selection {
       background-color: #FFA;
       color: #000;
}

/* Mozilla based browsers */
::-moz-selection {
background-color: #FF68B0;
color: #000;
}

/* Works in Safari */
::selection {
background-color: #FF68B0;
color: #FFF;
}

/* Works in Opera */
::-o-selection {
background-color: #FF68B0;
color: #FFF;
}
::-ms-selection {
background-color: #FF68B0;
color: #FFF;
}

/* Works in Internet Explorer */
::-webkit-selection {
background-color: #FF68B0;
color: #FFF;
}
```
