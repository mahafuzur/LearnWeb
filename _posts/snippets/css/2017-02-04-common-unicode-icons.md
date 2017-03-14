---
layout: post
title: "Common Unicode Icons"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "uniconde icons"
categories:
  - "Snippets"
type: css  
---

### কিছু ইনিকোড আইকন।


```css
a[href^="mailto:"]:before { content: "\2709"; }
.phone:before             { content: "\2706"; }
.important:before         { content: "\27BD"; }
blockquote:before         { content: "\275D"; }
blockquote:after          { content: "\275E"; }
.alert:before             { content: "\26A0"; }
a[href^="tel:"]:before    { content: "\2706"; }
```


```html
<p>
  <a href="mailto:chriscoyier@gmail.com">
    chriscoyier@gmail.com
  </a>
</p>

<p class="phone">
    555-555-5555
</p>

<p class="important">
  REMEMBER: drink slushies too fast.
</p>

<blockquote>
   Designers tend to whisper, ad agencies tend to shout.
</blockquote>

<p class="alert">
   Stranger Danger!
<p>
```
