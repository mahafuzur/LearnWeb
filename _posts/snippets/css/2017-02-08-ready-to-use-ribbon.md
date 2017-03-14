---
layout: post
title: "Ready to use ribbon"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "ribbon"
  - "ready to use"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন রকমের রিবন স্টাইল।

#### Ribbon style 1

```html
<h1 class="ribbon">
   <strong class="ribbon-content">Everybody loves ribbons</strong>
</h1>
```

```css
.ribbon {
 font-size: 16px !important;
 /* This ribbon is based on a 16px font side and a 24px vertical rhythm. I've used em's to position each element for scalability. If you want to use a different font size you may have to play with the position of the ribbon elements */

 width: 50%;

 position: relative;
 background: #ba89b6;
 color: #fff;
 text-align: center;
 padding: 1em 2em; /* Adjust to suit */
 margin: 2em auto 3em; /* Based on 24px vertical rhythm. 48px bottom margin - normally 24 but the ribbon 'graphics' take up 24px themselves so we double it. */
}
.ribbon:before, .ribbon:after {
 content: "";
 position: absolute;
 display: block;
 bottom: -1em;
 border: 1.5em solid #986794;
 z-index: -1;
}
.ribbon:before {
 left: -2em;
 border-right-width: 1.5em;
 border-left-color: transparent;
}
.ribbon:after {
 right: -2em;
 border-left-width: 1.5em;
 border-right-color: transparent;
}
.ribbon .ribbon-content:before, .ribbon .ribbon-content:after {
 content: "";
 position: absolute;
 display: block;
 border-style: solid;
 border-color: #804f7c transparent transparent transparent;
 bottom: -1em;
}
.ribbon .ribbon-content:before {
 left: 0;
 border-width: 1em 0 0 1em;
}
.ribbon .ribbon-content:after {
 right: 0;
 border-width: 1em 1em 0 0;
}
```

#### Protector

This technique uses negative z-index values on some of the pseudo elements. That means that they can go behind other elements that have opaque backgrounds, which ruins the effect. To fix this, you'll need to make sure the immediate parent of the ribbons does not have a background applied and has relative postioning with positive z-index. Use an additional wrapper if needed.

```html
<div class="non-semantic-protector">
   <!-- ribbons and other content in here -->
</div>
```

```css
.non-semantic-protector { position: relative; z-index: 1; }
```

#### Example

See the Pen CSS Ribbon by CSS-Tricks (@css-tricks) on CodePen.

[Reference](http://jameskoster.co.uk/blog/pure-css-3d-ribbon/)
