---
layout: post
title: "Text Rotation"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "text rotation"
categories:
  - "Snippets"
type: css  
---

### টেক্সট রোটেসন স্টাইল।

#### The below example rotates text 90 degrees counterclockwise.

```css
.rotate {

/* Safari */
-webkit-transform: rotate(-90deg);

/* Firefox */
-moz-transform: rotate(-90deg);

/* IE */
-ms-transform: rotate(-90deg);

/* Opera */
-o-transform: rotate(-90deg);

/* Internet Explorer */
filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1); /* not work for ie8 */
}
```

 > The rotation property of Internet Explorer’s BasicImage filter can accept one of four values: 0, 1, 2, or 3 which will rotate the element 0, 90, 180 or 270 degrees respectively.


[Example:](http://css-tricks.com/13641-sideways-headers/)

[Reference URL](http://snook.ca/archives/html_and_css/css-text-rotation)
