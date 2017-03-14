---
layout: post
title: "Non-Form Fieldset Look"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "fieldset"
  - "hack"
categories:
  - "Snippets"
type: css  
---

### অন্য ইলিমেন্টের জন্যে `fieldset` এর মত স্টাইল।

```html
<section class="fieldset">
 <h1>This is not a fieldset</h1>
 <p>Booyah!</p>
</section>
```

```css
.fieldset {
  position: relative;
  border: 1px solid #ddd;
  padding: 10px;
}

.fieldset h1 {
  position: absolute;
  top: 0;
  font-size: 18px;
  line-height: 1;
  margin: -9px 0 0; /* half of font-size */
  background: #fff;
  padding: 0 3px;
}
```
