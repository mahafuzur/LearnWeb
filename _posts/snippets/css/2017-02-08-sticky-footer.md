---
layout: post
title: "Sticky Footer"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "sticky footer"
categories:
  - "Snippets"
type: css  
---

### স্টিকি ফুটার স্টাইল।

```html
<div class="page-wrap">

  Content!

</div>

<footer class="site-footer">
  I'm the Sticky Footer.
</footer>
```

```css
* {
  margin: 0;
}

html, body {
  height: 100%;
}

.page-wrap {
  min-height: 100%;
  /* equal to footer height */
  margin-bottom: -142px;
}

.page-wrap:after {
  content: "";
  display: block;
}
.site-footer, .page-wrap:after {
  height: 142px;
}
.site-footer {
  background: orange;
  height: 80px; /* Works well if you use a fixed height */
}
```

[Check out this Pen!](http://codepen.io/chriscoyier/pen/uwJjr)
