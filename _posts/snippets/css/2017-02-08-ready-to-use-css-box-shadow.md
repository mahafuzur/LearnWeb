---
layout: post
title: "Ready to use CSS Box Shadow"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "box-shadow"
  - "ready to use"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন রকমের বক্স স্যাডো।

#### Used in casting shadows off block-level elements (like divs).

```css
.shadow {
  -moz-box-shadow:    3px 3px 5px 6px #ccc;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;
  box-shadow:         3px 3px 5px 6px #ccc;
}
```

#### Inner Shadow

```css
.shadow {
   -moz-box-shadow:    inset 0 0 10px #000000;
   -webkit-box-shadow: inset 0 0 10px #000000;
   box-shadow:         inset 0 0 10px #000000;
}
```

#### Internet Explorer Box Shadow
You need extra elements...

```html
<div class="shadow1">
	<div class="content">
		Box-shadowed element
	</div>
</div>
```
```css
.shadow1 {
	margin: 40px;
	background-color: rgb(68,68,68); /* Needed for IEs */

	-moz-box-shadow: 5px 5px 5px rgba(68,68,68,0.6);
	-webkit-box-shadow: 5px 5px 5px rgba(68,68,68,0.6);
	box-shadow: 5px 5px 5px rgba(68,68,68,0.6);

	filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30);
	-ms-filter: "progid:DXImageTransform.Microsoft.Blur(PixelRadius=3,MakeShadow=true,ShadowOpacity=0.30)";
	zoom: 1;
}
.shadow1 .content {
	position: relative; /* This protects the inner element from being blurred */
	padding: 100px;
	background-color: #DDD;
}
```

#### One-Side Only

Using a negative spread radius, you can get squeeze in a box shadow and only push it off one edge of a box.

```css
.one-edge-shadow {
	-webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;
}
```

#### Emphesized Box Shadows

```css
.emphasize-dark {
  box-shadow: 0 0 5px 2px rgba(0,0,0,.35);
}

.emphasize-light {
  box-shadow: 0 0 0 10px rgba(255,255,255,.25);
}

.emphasize-inset {
  box-shadow: inset 0 0 7px 4px rgba(255,255,255,.5);
}

.emphasize-border {
  box-shadow: inset 0 0 0 7px rgba(255,255,255,.5);
}
```

#### Embossed Box Shadows

```css
.embossed-light {
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
}

.embossed-heavy {
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow:
    inset 0 2px 3px rgba(255,255,255,0.3),
    inset 0 -2px 3px rgba(0,0,0,0.3),
    0 1px 1px rgba(255,255,255,0.9);
}
```
