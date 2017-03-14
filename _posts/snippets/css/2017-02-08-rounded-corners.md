---
layout: post
title: "Rounded Corners"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "rounded corners"
  - "hack"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন ধরনের কর্নার রেডিয়াস।

#### Standard

```css
.round-corner{
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
border-radius: 10px; /* future proofing */
-khtml-border-radius: 10px; /* for old Konqueror browsers */
}
```

#### Individual Corners

```css
.round-corner{
-moz-border-radius-topleft: 10px;
-moz-border-radius-topright: 20px;
-moz-border-radius-bottomright: 30px;
-moz-border-radius-bottomleft: 0;

-webkit-border-top-left-radius: 10px;
-webkit-border-top-right-radius: 20px;
-webkit-border-bottom-right-radius: 30px;
-webkit-border-bottom-left-radius: 0px;
}
```

#### Shorthand

```css
.round-corner{
-moz-border-radius: [top-left] [top-right] [bottom-right] [bottom-left];

-moz-border-radius: 10px 20px 30px 0;
}
```

#### Elliptical Rounding (Firefox 3.5+):

```css
.round-corner{
-moz-border-radius-topleft: [horizontal radius] [vertical radius];

-moz-border-radius-topleft: 10px 40px;
}
```

#### Elliptical Rounding Shorthand (Firefox 3.5+):

```css
.round-corner{
-moz-border-radius: [horizontal radius] / [vertical radius];

-moz-border-radius: 10px / 40px;

-moz-border-radius: 10px 20px 30px 40px / 15px 30px 45px 60px;
}
```

#### Above is the same as:

```css
.round-corner{
-moz-border-radius-topleft: 10px 15px;
-moz-border-radius-topright: 20px 30px;
-moz-border-radius-bottomright: 30px 45px;
-moz-border-radius-bottomleft: 40px 60px;
}
```

#### WebKit Elliptical Rounding

All corners:

```css
.round-corner{
-webkit-border-radius: 36px 12px;
}
```

#### Right corners only:

```css
.round-corner{
-webkit-border-top-right-radius: 50px 30px;
-webkit-border-bottom-right-radius: 50px 30px;
}
```

[Reference](http://www.the-art-of-web.com/css/border-radius
