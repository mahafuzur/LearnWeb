---
layout: post
title: "Ready to use CSS Text Shadow"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "text-shadow"
  - "ready to use"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন রকমের টেক্সট স্যাডো।

#### Basic Regular text shadow:

```css
p{
	text-shadow: 1px 1px 1px #000;
}
```

#### Basic Multiple shadows:

```css
p{
	text-shadow: 1px 1px 1px #000, 3px 3px 5px blue;
}
```

#### 3d Like text

```css
.3d_text{
	color:#fff;
	font-size:50px;
	font-family:arial;
	text-shadow:1px 1px 0px #ccc,
				2px 2px 0 #afafaf,
				3px 3px 0 #afafaf,
				4px 4px 0 #afafaf,
				5px 5px 0 #afafaf,
				6px 6px 3px rgba(0,0,0,0.5);
}
```

#### Outer glow text

```css
.outerglow {
	color: darkgreen;
	text-shadow: 0 0 .7em purple;
}
```

#### Raised and Embossedlook look text

```html
<div class="container">
	<h1 class="raisedlook">The Jenville Show</h1>
	<h1 class="embossedlook">The Jenville Show</h1>
</div>
```

```css
.container{
	background-color: thistle;
	width:300px;
}
.raisedlook{
	color: #ba9eba;
	text-shadow:-.05em -.05em .05em white,
				.03em .03em .05em purple;
	text-align:center;
}
.embossedlook{
	color: #ba9eba;
	text-shadow:-.05em -.05em .05em purple,
				.03em .03em .05em white;
	text-align:center;
	opacity:0.8;
}
```

#### Horror style text

```html
<h1 class="blood">Vampire!</h1>
```

```css
.blood {
       color:silver;
       text-shadow:
       4px 4px 1px #300000,
       4px 6px 1px #400000,
       4px 8px 1px #500000,
       4px 10px 1px #600000,
       4px 12px 1px #700000,
       4px 14px 1px #800000,
       4px 16px 1px #900000,
       4px 18px 1px #A00000,
       4px 20px 1px #B00000,
       4px 22px 1px #C00000,
       4px 24px 1px #D00000,
       4px 26px 1px #E00000,
       4px 28px 1px #F00000,
       4px 30px 1px #FA0000,
       4px 32px 1px #FB0000,
       4px 34px 1px #FC0000,
       4px 36px 1px #FD0000,
       4px 38px 1px #FE0000,
       4px 40px 2px #FF0000;
}
```

#### Three-Dimensional Text

```css
/* 3d text */
.text{
	text-shadow:   1px 0px #eee, 0px 1px #ccc,
				   2px 1px #eee, 1px 2px #ccc,
				   3px 2px #eee, 2px 3px #ccc,
				   4px 3px #eee, 3px 4px #ccc,
				   5px 4px #eee, 4px 5px #ccc,
				   6px 5px #eee, 5px 6px #ccc,
				   7px 6px #eee, 6px 7px #ccc,
				   8px 7px #eee, 7px 8px #ccc,
				   8px 8px #eee;
}
/* 3d text */
.text{			   
	text-shadow:			   
				1px 0px 1px #ccc, 0px 1px 1px #eee,
				2px 1px 1px #ccc, 1px 2px 1px #eee,
				3px 2px 1px #ccc, 2px 3px 1px #eee,
				4px 3px 1px #ccc, 3px 4px 1px #eee,
				5px 4px 1px #ccc, 4px 5px 1px #eee,
				6px 5px 1px #ccc, 5px 6px 1px #eee,
				7px 6px 1px #ccc;
}
```
[Reference URL](http://jingman.github.com/two-color-3d-effect-css/)
