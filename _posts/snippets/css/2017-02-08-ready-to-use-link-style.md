---
layout: post
title: "Ready to use link style"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "link"
  - "hover animation"
  - "ready to use"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন রকমের লিংকের স্টাইল।

#### Basic link style



#### Background Inline Link

```css
.inline-link-1 {
  display: inline-block;
  margin: 0 0.2em;
  padding: 3px;
  background: #97CAF2;
  border-radius: 2px;
  transition: all 0.3s ease-out;

  /* Font styles */
  text-decoration: none;
  font-weight: bold;
  color: white;
}

.inline-link-1:hover   { background: #53A7EA; }
.inline-link-1:active  { background: #C4E1F8; }
.inline-link-1:visited { background: #F2BF97; }
```

#### Underlined Inline Link

```css
.inline-link-2 {
  display: inline-block;
  border-bottom: 1px dashed rgba(0,0,0,0.4);

  /* Font styles */
  text-decoration: none;
  color: #777;
}

.inline-link-2:hover   { border-bottom-style: dotted; }
.inline-link-2:active  { border-bottom-style: solid; }
.inline-link-2:visited { border-bottom: 1px solid #97CAF2; }
```

#### Triangle Inline Link

```css
.inline-link-3 {
    display: inline-block;
    position: relative;
    padding-left: 6px;
    /* Font styles */
    text-decoration: none;
    color: #6AB3EC;
    text-shadow: 0 1px 1px rgba(255,255,255,0.9);
}

.inline-link-3:hover {
    color: #3C9CE7;
}

.inline-link-3:before {
    content: "\25BA";
    font-size: 80%;
    display: inline-block;
    padding-right: 3px;
    pointer-events: none;
}

.inline-link-3:hover:before {
    color: #F2BF97;
}
```

#### Bordered Link

```css
.bordered-link {
  display: inline-block;
  padding: 8px;
  border: 3px solid #FCB326;
  border-radius: 6px;
  box-shadow:
    0 2px 1px rgba(0, 0, 0, 0.2),
    inset 0 2px 1px rgba(0, 0, 0, 0.2);

  /* Font styles */
  text-decoration: none;
  font-size: 14px;
  text-transform: uppercase;
  color: #222;
}

.bordered-link:hover  { border-color: #FDD68B; }
.bordered-link:active { border-color: #FEE8BD; }
```

#### Fade in Backgroun in Hover

```css
a.fade_in_bg{
	font-family:arial;
	text-decoration:none;
	transition: all 0.35s;
	color:#3498db;
	padding:5px;
	border-bottom: 0.0625em dotted #3498db;
}

a.fade_in_bg:hover{
	background: #3498db;
	color: #fff;
	transition: all 0.35s;
}
```
#### Slide Background from left or right in hover

```html
<a href="#" data-linktext="Slide Bg from left in hover" class="slide_from_left">Slide Bg from left in hover</a>
<a href="#" data-linktext="Slide Bg from right in hover" class="slide_from_right">Slide Bg from right in hover</a>		
```

```css
	a{
		color:#3498db;
		font-family:arial;
	}
a.slide_from_left{
  text-decoration: none;
  padding-left: 0.25em;
  padding-right: 0.25em;
  line-height: 1.5em;
  border-bottom: 1px dotted #3498db;
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}
a.slide_from_left::after {
  content: attr(data-linktext);
  background: #3498db;
  color: #fff;
  position: absolute;
  display: block;
  text-align: center;
  transition: all 0.35s;
}
a.slide_from_left:hover {
  border-bottom: 1px solid #3498db;
}
a.slide_from_left::after {
  top: 0;
  right: 100%;
  left: -100%;
}		
a.slide_from_left:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.35s;
}
/* slide from right */

a.slide_from_right{
  text-decoration: none;
  padding-left: 0.25em;
  padding-right: 0.25em;
  line-height: 1.5em;
  border-bottom: 1px dotted #3498db;
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}
a.slide_from_right::after {
  content: attr(data-linktext);
  background: #3498db;
  color: #fff;
  position: absolute;
  display: block;
  text-align: center;
  transition: all 0.35s;
}
a.slide_from_right:hover {
  border-bottom: 1px solid #3498db;
}
a.slide_from_right::after {
  top: 0;
  right: -100%;
  left: 100%;
}		
a.slide_from_right:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.35s;
}
```

#### Slide Background from top or bottom in hover

```html
<a href="#" data-linktext="Slide Bg from top in hover" class="slide_from_top">Slide Bg from top in hover</a>
<a href="#" data-linktext="Slide Bg from bottom in hover" class="slide_from_bottom">Slide Bg from bottom in hover</a>		
```

```css
a{
	color:#3498db;
	font-family:arial;
}

a.slide_from_top{
  text-decoration: none;
  padding-left: 0.25em;
  padding-right: 0.25em;
  line-height: 1.5em;
  border-bottom: 1px dotted #3498db;
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}

a.slide_from_top::after {
  content: attr(data-linktext);
  background: #3498db;
  color: #fff;
  position: absolute;
  top: -100%;
  bottom: 100%;
  left: 0;
  right: 0;
  display: block;
  text-align: center;
  transition: all 0.35s;
}
a.slide_from_top:hover {
  border-bottom: 1px solid #3498db;
}
a.slide_from_top:hover::after {
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.35s;
}
/* slide from bottom */

a.slide_from_bottom{
  text-decoration: none;
  padding-left: 0.25em;
  padding-right: 0.25em;
  line-height: 1.5em;
  border-bottom: 1px dotted #3498db;
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
}

a.slide_from_bottom::after {
  content: attr(data-linktext);
  background: #3498db;
  color: #fff;
  position: absolute;
  top: 100%;
  bottom: -100%;
  left: 0;
  right: 0;
  display: block;
  text-align: center;
  transition: all 0.35s;
}
a.slide_from_bottom:hover {
  border-bottom: 1px solid #3498db;
}
a.slide_from_bottom:hover::after {
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.35s;
}
```

#### Slide Border from left, right or middle in hover

```css
a[class^='underline'] {
  text-decoration: none;
  color: #3498db;
  padding-left: 0.125em;
  padding-right: 0.125em;
  padding-bottom: 0.05em;
  position: relative;
  text-transform:uppercase;

}
a[class^='underline']::after {
  content: '';
  position: absolute;
  top: 100%;  /* IMPORTENT*/
  border-bottom: 5px solid #3498db;
  transition: all 0.35s;
}
a[class^='underline']:hover::after {
  transition: all 0.35s;
}


a.underline_from_left::after {
  left: 0;
  right: 100%;
}
a.underline_from_left:hover::after {
  right: 0;
}

a.underline_from_right::after {
  right: 0;
  left: 100%;
}
a.underline_from_right:hover::after {
  left: 0;
}
a.underline_from_center:after{
	left: 50%;
	right: 50%;
}
a.underline_from_center:hover:after{
	left: 0%;
	right: 0%;
}
```
