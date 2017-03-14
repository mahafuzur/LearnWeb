---
layout: post
title: "Image Hover Effect"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "hover"
  - "image"
categories:
  - "Snippets"
type: css  
---

### Simple Caption slide from bottom

```html
<div id="box-1" class="box">
	<img id="image-1" src="c.jpg"/>
		<span class="caption simple-caption">
			<p>Simple Caption</p>
		</span>
</div>
```

```css
*{
	box-sizing: border-box;
}
.box {
	font-family: arial;
	color: #fff;
	border: 5px solid #fff;
	cursor: pointer;
	height: 182px;
	float: left;
	margin: 5px;
	position: relative;
	overflow: hidden;
	width: 200px;
		-webkit-box-shadow: 1px 1px 1px 1px #ccc;
		-moz-box-shadow: 1px 1px 1px 1px #ccc;
		box-shadow: 1px 1px 1px 1px #ccc;
}
.box img {
	position: absolute;
	width: 100%;
	left: 0;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
	transition: all 300ms ease-out;
}

.box .caption {
	background-color: #333;
	position: absolute;
	color: #fff;
	z-index: 100;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
		transition: all 300ms ease-out;
	left: 0;
}

.box .simple-caption {
	height: 30px;
	width: 100%;
	display: block;
	bottom: -30px;
	line-height: 30px;
	text-align: center;
}
.box .simple-caption p{
margin: 0;
}
.box:hover .simple-caption {
	-moz-transform: translateY(-100%);
	-o-transform: translateY(-100%);
	-webkit-transform: translateY(-100%);
	opacity: 1;
	transform: translateY(-100%);
}
```

### Full Caption slide from top

```html
<div id="box-2" class="box">
	<img id="image-2" src="c.jpg"/>
	<span class="caption full-caption">
		<h3>Full Caption</h3>
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
		sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
	</span>
</div>
```

```css
*{
box-sizing: border-box;
}
.box {
	font-family: arial;
	color: #fff;
	font-size: 14px;
	border: 5px solid #fff;
	cursor: pointer;
	height: 182px;
	float: left;
	margin: 5px;
	position: relative;
	overflow: hidden;
	width: 200px;
		-webkit-box-shadow: 1px 1px 1px 1px #ccc;
		-moz-box-shadow: 1px 1px 1px 1px #ccc;
		box-shadow: 1px 1px 1px 1px #ccc;
}
.box img {
	position: absolute;
	width: 100%;
	left: 0;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
	transition: all 300ms ease-out;
}

.box .caption {
	background-color: #333;
	position: absolute;
	color: #fff;
	z-index: 100;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
		transition: all 300ms ease-out;
	left: 0;
}

.box .full-caption {
	width: 100%;
	height: 100%;
	top: -100%;
	text-align: left;
	padding: 15px;
}
.box .full-caption h3{
	margin-top: 0;
	margin-bottom: 5px;
}
.box .full-caption p{
margin: 0;
}
.box:hover .full-caption {
	-moz-transform: translateY(100%);
	-o-transform: translateY(100%);
	-webkit-transform: translateY(100%);
	opacity: 1;
	transform: translateY(100%);
}
```

### Fade Caption slide

```html
<div id="box-3" class="box">
<img id="image-3" src="images/3.jpg"/>
<span class="caption fade-caption">
	<h3>Fade Caption</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
	sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
</span>
</div>
```

```css
*{
box-sizing: border-box;
}
.box {
	font-family: arial;
	color: #fff;
	font-size: 14px;
	border: 5px solid #fff;
	cursor: pointer;
	height: 182px;
	float: left;
	margin: 5px;
	position: relative;
	overflow: hidden;
	width: 200px;
		-webkit-box-shadow: 1px 1px 1px 1px #ccc;
		-moz-box-shadow: 1px 1px 1px 1px #ccc;
		box-shadow: 1px 1px 1px 1px #ccc;
}
.box img {
	position: absolute;
	width: 100%;
	left: 0;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
	transition: all 300ms ease-out;
}

.box .caption {
	background-color: #333;
	position: absolute;
	color: #fff;
	z-index: 100;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
		transition: all 300ms ease-out;
	left: 0;
}

.box .fade-caption{
	opacity: 0;
	width: 100%;
	height: 100%;
	text-align: left;
	padding: 15px;
}
.box .fade-caption h3{
	margin-top: 0;
	margin-bottom: 5px;
}
.box .fade-caption p{
margin: 0;
}
.box:hover .fade-caption{
	opacity: 1;
}
```

### Slide In Caption

```html
<div id="box-4" class="box">
<img id="image-4" src="images/4.jpg"/>
<span class="caption slide-caption">
	<h3>Slide Caption</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
	sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
</span>
</div>
```

```css
*{
box-sizing: border-box;
}
.box {
	font-family: arial;
	color: #fff;
	font-size: 14px;
	border: 5px solid #fff;
	cursor: pointer;
	height: 182px;
	float: left;
	margin: 5px;
	position: relative;
	overflow: hidden;
	width: 200px;
		-webkit-box-shadow: 1px 1px 1px 1px #ccc;
		-moz-box-shadow: 1px 1px 1px 1px #ccc;
		box-shadow: 1px 1px 1px 1px #ccc;
}
.box img {
	position: absolute;
	width: 100%;
	left: 0;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
	transition: all 300ms ease-out;
}

.box .caption {
	background-color: #333;
	position: absolute;
	color: #fff;
	z-index: 100;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
		transition: all 300ms ease-out;
	left: 0;
}

.box .slide-caption {
	width: 100%;
	height: 100%;
	text-align: left;
	padding: 15px;
	left: 100%;
}
.box .slide-caption h3{
	margin-top: 0;
	margin-bottom: 5px;
}
.box .slide-caption p{
margin: 0;
}
.box:hover .slide-caption {
	background-color: rgba(0,0,0,1) !important;
	-moz-transform: translateX(-100%);
	-o-transform: translateX(-100%);
	-webkit-transform: translateX(-100%);
	opacity: 1;
	transform: translateX(-100%);
}
.box:hover img#image-4 {
	-moz-transform: translateX(-100%);
	-o-transform: translateX(-100%);
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
	opacity: 1;
}
```

### Rotate Caption

```html
<div id="box-5" class="box">
<div class="rotate">
<img id="image-5" src="images/5.jpg"/>
<span class="caption rotate-caption">
	<h3>This is rotate caption</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
	sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
</span>
</div>
</div>
```

```css
*{
box-sizing: border-box;
}
.box {
	border: 5px solid skyblue;
	height: 200px;
	cursor: pointer;
	float: left;
	margin: 5px;
	position: relative;
	width: 225px;
	overflow: hidden;
}
.box img{
	width: 100%;
	height: 50%;
			-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
	transition: all 300ms ease-out;
}

.box .rotate-caption{
	width: 100%;
	position: absolute;
	background: #333;
	color: #fff;
	display: block;
	padding: 10px;
	-moz-transform: rotate(-180deg);
	-o-transform: rotate(-180deg);
	-webkit-transform: rotate(-180deg);
	transform: rotate(-180deg);
		z-index: 100;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
		transition: all 300ms ease-out;
	left: 0;
}
.box .rotate{
	width: 100%;
	height: 200%;
	-webkit-transition: all 300ms ease-out;
	-moz-transition: all 300ms ease-out;
	-o-transition: all 300ms ease-out;
	-ms-transition: all 300ms ease-out;
	transition: all 300ms ease-out;
}
.box .rotate-caption h3{
	margin-bottom: 5px;
}
.box .rotate-caption p{
	margin: 0;
}
.box:hover .rotate-caption{
	top: 0;
	bottom: 0;
}
.box:hover .rotate{
	background-color: rgba(0,0,0,1) !important;
	-moz-transform: rotate(-180deg);
	-o-transform: rotate(-180deg);
	-webkit-transform: rotate(-180deg);
	transform: rotate(-180deg);
}
```

### Scale Caption

```html
<div id="box-6" class="box">
<img id="image-6" src="c.jpg"/>
<span class="caption scale-caption">
	<h3>Scale Caption</h3>
	<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
	sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
</span>
</div>
```

```css
*{
box-sizing: border-box;
}
h3{
	margin: 5px 0;
	font-size: 1rem;
}
p{
	margin: 5px 0;
	font-size: 0.9em;
}
.box {
	font-family: arial;
	border: 5px solid #fff;
	cursor: pointer;
	height: 282px;
	float: left;
	margin: 5px;
	position: relative;
	overflow: hidden;
	width: 300px;
		-webkit-box-shadow: 1px 1px 1px 1px #ccc;
		-moz-box-shadow: 1px 1px 1px 1px #ccc;
		box-shadow: 1px 1px 1px 1px #ccc;
}
.box img {
	position: absolute;
	width: 100%;
	left: 0;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
	transition: all 300ms ease-out;
}

.box .caption {
	background-color: rgba(0,0,0,0.8);
	position: absolute;
	color: #fff;
	z-index: 100;
		-webkit-transition: all 300ms ease-out;
		-moz-transition: all 300ms ease-out;
		-o-transition: all 300ms ease-out;
		-ms-transition: all 300ms ease-out;
		transition: all 300ms ease-out;
}
.box .scale-caption  {
	opacity: 0;
	width: 100%;
	height: 100%;
	text-align: left;
	padding: 15px;
}
.box .scale-caption h3, .box .scale-caption p {
	position: relative;
	left: -120%;
	width: 100%;
	-webkit-transition: all 300ms ease-out;
	-moz-transition: all 300ms ease-out;
	-o-transition: all 300ms ease-out;
	-ms-transition: all 300ms ease-out;
	transition: all 300ms ease-out;
}
.box .scale-caption h3 {
	-webkit-transition-delay: 300ms;
	-moz-transition-delay: 300ms;
	-o-transition-delay: 300ms;
	-ms-transition-delay: 300ms;
	transition-delay: 300ms;
}

.box .scale-caption p {
	-webkit-transition-delay: 500ms;
	-moz-transition-delay: 500ms;
	-o-transition-delay: 500ms;
	-ms-transition-delay: 500ms;
	transition-delay: 500ms;
}
.box:hover .fade-caption, .box:hover .scale-caption  {
	opacity: 1;
}

.box:hover #image-6 {
	-moz-transform: scale(1.4);
	-o-transform: scale(1.4);
	-webkit-transform: scale(1.4);
	transform: scale(1.4);
}

.box:hover .scale-caption h3, .box:hover .scale-caption p {
	-moz-transform: translateX(120%);
	-o-transform: translateX(120%);
	-webkit-transform: translateX(120%);
	transform: translateX(120%);
}
```

[Ref](http://www.css-tricks.com)

### Image Hover Lily Effect

```html
<figure>
	<img src="c.jpg" alt=""/>
	<figcaption>
		<div>
			<h2>Nice <span>Lily</span></h2>
			<p>Lily likes to play with crayons and pencils</p>
		</div>
		<a href="#">View more</a>
	</figcaption>			
</figure>
```

```css
*{
	box-sizing: border-box;
}
figure {
	position: relative;
	overflow: hidden;
	min-width: 320px;
	max-width: 480px;
	max-height: 360px;
	width: 50%;
	margin: 0 auto;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
	font-family: Verdana;
}
figure figcaption {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	text-align: left;
	font-size: 1em;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

figure figcaption::before,
figure figcaption::after {
	pointer-events: none;
}

figure figcaption,
figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */

/* this is how text replace */
figure figcaption > a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}


figure h2,
figure p {
	margin: 0;
}

figure img {
	position: relative;
	display: block;
	min-height: 100%;
	opacity: 0.8;
	width: -webkit-calc(100% + 50px);
	width: calc(100% + 50px);
	opacity: 0.7;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(-40px,0, 0);
	transform: translate3d(-40px,0,0);
}

figure figcaption > div {
	position: absolute;
	bottom: 0;
	left: 0;
	padding: 2em;
	width: 100%;
	height: 50%;
}

figure h2,
figure p {
	-webkit-transform: translate3d(0,40px,0);
	transform: translate3d(0,40px,0);
}

figure h2 {
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
}

figure p {
	color: rgba(255,255,255,0.8);
	opacity: 0;
	-webkit-transition: opacity 0.2s, -webkit-transform 0.35s;
	transition: opacity 0.2s, transform 0.35s;
}

figure:hover img,
figure:hover p {
	opacity: 1;
}

figure:hover img,
figure:hover h2,
figure:hover p {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure:hover p {
	-webkit-transition-delay: 0.05s;
	transition-delay: 0.05s;
	-webkit-transition-duration: 0.35s;
	transition-duration: 0.35s;
}
```

### [CONTINUE]
