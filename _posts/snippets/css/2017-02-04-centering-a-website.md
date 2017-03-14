---
layout: post
title: Centering a Website
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "Centering"
categories:
  - "Snippets"
type: css  
---

### ছেন্টার সাইট পেজ যেটির প্রস্থ আছে।

``html
<body>
  <div id="page-wrap">
    <!-- all websites HTML here -->
  </div>
</body>
```

```css
#page-wrap {
     width: 800px;
     margin: 0 auto;
}

# For IE

body {
  text-align: center;
 }

#page-wrap {
  text-align: left;
  width: 800px;
  margin: 0 auto;
}
```
