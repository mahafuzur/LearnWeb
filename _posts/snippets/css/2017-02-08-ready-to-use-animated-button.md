---
layout: post
title: "Ready to Use Animated Button"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "button"
  - "animation"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন রকমের বাটনের এনিমেশন।

#### Background Reveal Button

```html
		<div class="reveal-wrapper">
			<div class="reveal-content">
				<h1>Hello</h1>
			</div>
			<div class="reveal-top">
				<h1>Hello</h1>
			</div>
		</div>
```

```css
*{
	box-sizing: border-box;
}
h1{
	margin: 0;
}
.reveal-wrapper{
	margin:200px;
	border: 1px solid #333;
	position: relative;
}
.reveal-wrapper h1{
	padding: 100px;
}
.reveal-wrapper:hover .reveal-top{
	height: 20%;
}
.reveal-content{
	color: #1f122c;
	background: #fff;
}
.reveal-top{
	overflow: hidden;
	position: absolute;
	background: #1f122c;
	top:0;
	left: 0;
	width: 100%;
	height: 90%;
	transition: height 0.6s ease;
}
```

#### Background grow effect


```css
.grow_box{
  font-size: 2em;
  background: #3498db;
  color: #fff;
  border: 0.25rem solid #3498db;
  padding: 0.85em 0.75em;
  margin: 1rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.grow_box:hover {
  color: #3498db;
}
.grow_box::after {
  content: "";
  background: #ecf0f1;
  position: absolute;
  z-index: -1;
  padding: 0.85em 0.75em;
  display: block;

  transition: all 0.3s ease;
}
.grow_box:hover::after {
  transition: all 0.3s ease-out;
}
.grow_box::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: scale(0, 0);
}
.grow_box:hover::after {
  transform: scale(1, 1);
}
```

#### Background Grow Ellipse


```css
.grow_ellipse{
	font-size: 2em;
	background: #3498db;
	color: #fff;
	border: 0.25rem solid #3498db;
	padding: 0.85em 0.75em;
	margin: 1rem;
	position: relative;
	z-index: 1;
	overflow: hidden;
}
.grow_ellipse:hover {
	color: #3498db;
}
.grow_ellipse::after {
	content: "";
	background: #ecf0f1;
	position: absolute;
	z-index: -1;
	padding: 0.85em 0.75em;
	display: block;
}
.grow_ellipse::after {
	transition: all 0.3s ease;
}
.grow_ellipse:hover::after {
	transition: all 0.3s ease-out;
}
.grow_ellipse::after {
	border-radius: 50%;
	left: -50%;
	right: -50%;
	top: -150%;
	bottom: -150%;
	line-height: 8.34em;
	transform: scale(0, 0);
}
.grow_ellipse:hover::after {
	transform: scale(1, 1);
}
```

#### Background Grow Skew Button


```css
button{
	font-size: 2em;
	background: #3498db;
	color: #fff;
	border: 0.25rem solid #3498db;
	padding: 0.85em 0.75em;
	margin: 1rem;
	position: relative;
	z-index: 1;
	overflow: hidden;
}
button:hover {
	color: #3498db;
}
button::after {
	content: "";
	background: #ecf0f1;
	position: absolute;
	z-index: -1;
	padding: 0.85em 0.75em;
	display: block;
}
button.grow_skew_forward::after,
button.grow_skew_backward::after{
	transition: all 0.3s ease;
}
button.grow_skew_forward:hover::after,
button.grow_skew_backward:hover::after{
	transition: all 0.3s ease-out;
}
button.grow_skew_forward::after {
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(-45deg) scale(0, 1);
}
button.grow_skew_forward:hover::after {
  transform: skewX(-45deg) scale(1, 1);
}

/* backword */

button.grow_skew_backward::after {
  left: -20%;
  right: -20%;
  top: 0;
  bottom: 0;
  transform: skewX(45deg) scale(0, 1);
}
button.grow_skew_backward:hover::after {
  transform: skewX(45deg) scale(1, 1);
}
```

#### Background Grow Skew Center

```css
.grow_skew_center{
	font-size: 2em;
	color: #fff;
	background: #ddd;
	border: 0.25rem solid #3498db;
	padding: 0.85em 0.75em;
	margin: 1rem;
	position: relative;
	z-index: 1;
	overflow: hidden;
}
.grow_skew_center:hover {
	border-color: #3498db;
	color: #3498db;
}
.grow_skew_center::after {
	content: "";
	background: #3498db;
	position: absolute;
	z-index: -1;
	padding: 0.85em 0.75em;
	display: block;
	transition: all 0.3s ease-in-out;
}
.grow_skew_center::after {
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
  transform: skewX(0deg) scale(1, 1);
}
.grow_skew_center:hover::after {
  transform: skewX(45deg) scale(0, 1);
}
```

#### Background Slide From Left or Right

```css
button{
  font-size: 2em;
  background: #3498db;
  color: #fff;
  border: 0.25rem solid #3498db;
  padding: 0.85em 0.75em;
  margin: 1rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
button:hover {
  color: #3498db;
}
button.slide_from_left::after,
button.slide_from_right::after{
  content: "";
  background: #ecf0f1;
  position: absolute;
  z-index: -1;
  padding: 0.85em 0.75em;
  display: block;
  transition: all 0.35s;
}
button.slide_from_left:hover::after,
button.slide_from_right:hover::after{
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	transition: all 0.35s;
}
button.slide_from_left::after {
	top: 0;
	bottom: 0;
	left: -100%;
	right: 100%;
}
button.slide_from_right::after {
	top: 0;
	bottom: 0;
	left: 100%;
	right: -100%;		
}
```

#### Background Slide From Top or Bottom

```css
button{
  font-size: 2em;
  background: #3498db;
  color: #fff;
  border: 0.25rem solid #3498db;
  padding: 0.85em 0.75em;
  margin: 1rem;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
button:hover {
  color: #3498db;
}
button.slide_from_top::after,
button.slide_from_bottom::after{
  content: "";
  background: #ecf0f1;
  position: absolute;
  z-index: -1;
  padding: 0.85em 0.75em;
  display: block;
  transition: all 0.35s;
}
button.slide_from_top:hover::after,
button.slide_from_bottom:hover::after{
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	transition: all 0.35s;
}
button.slide_from_top::after {
	top: -100%;
	bottom: 100%;
	left: 0;
	right: 0;
}
button.slide_from_bottom::after {
	top: 100%;
	bottom: -100%;
	left: 0;
	right: 0;		
}
```

#### Animated Button

```html
<a href="#" class="a-btn">
	<span class="a-btn-slide-text">$29</span>
	<img src="images/icons/1.png" alt="Photos" />
	<span class="a-btn-text"><small>Available on the Apple</small> App Store</span>
	<span class="a-btn-icon-right"><span></span></span>
</a>
```

```css
.a-btn{
    background:#a9db80;
    background:-webkit-gradient(linear,left top,left bottom,color-stop(#a9db80,0),color-stop(#96c56f,1));
    background:-webkit-linear-gradient(top, #a9db80 0%, #96c56f 100%);
    background:-moz-linear-gradient(top, #a9db80 0%, #96c56f 100%);
    background:-o-linear-gradient(top, #a9db80 0%, #96c56f 100%);
    background:linear-gradient(top, #a9db80 0%, #96c56f 100%);
    filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#a9db80', endColorstr='#96c56f',GradientType=0 );
    padding-left:100px;
    padding-right:105px;
    height:90px;
    display:inline-block;
    position:relative;
    border:1px solid #80ab5d;
    -webkit-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2);
    -moz-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2);
    box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2);
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
    float:left;
    clear:both;
    margin:10px 0px;
    overflow:hidden;
    -webkit-transition:box-shadow 0.3s ease-in-out;
    -moz-transition:box-shadow 0.3s ease-in-out;
    -o-transition:box-shadow 0.3s ease-in-out;
    transition:box-shadow 0.3s ease-in-out;
}

.a-btn img{
    position:absolute;
    left:10px;
    top:13px;
    border:none;
    -webkit-transition:all 0.3s ease-in-out;
    -moz-transition:all 0.3s ease-in-out;
    -o-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}

.a-btn .a-btn-slide-text{
    position:absolute;
    font-size:36px;
    top:18px;
    left:18px;
    color:#6d954e;
    opacity:0;
    text-shadow:0px 1px 1px rgba(255,255,255,0.4);
    -webkit-transition:opacity 0.2s ease-in-out;
    -moz-transition:opacity 0.2s ease-in-out;
    -o-transition:opacity 0.2s ease-in-out;
    transition:opacity 0.2s ease-in-out;
}

.a-btn-text{
    padding-top:13px;
    display:block;
    font-size:20px;
    text-shadow:0px -1px 1px #80ab5d;
}

.a-btn-text small{
    display:block;
    font-size:10px;
    letter-spacing:1px;
}
.a-btn-icon-right{
    position:absolute;
    right:0px;
    top:0px;
    height:100%;
    width:80px;
    border-left:1px solid #80ab5d;
    -webkit-box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
    -moz-box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
    box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
}
.a-btn-icon-right span{
    width:38px;
    height:38px;
    opacity:0.7;
    -webkit-border-radius:20px;
    -moz-border-radius:20px;
    border-radius:20px;
    position:absolute;
    left:50%;
    top:50%;
    margin:-20px 0px 0px -20px;
    border:1px solid rgba(0,0,0,0.5);
    background:#4e5c50 url(../images/arrow_down.png) no-repeat center center;
    -webkit-box-shadow:0px 1px 1px rgba(255,255,255,0.3) inset, 0px 1px 2px rgba(255,255,255,0.5);
    -moz-box-shadow:0px 1px 1px rgba(255,255,255,0.3) inset, 0px 1px 2px rgba(255,255,255,0.5);
    box-shadow:0px 1px 1px rgba(255,255,255,0.3) inset, 0px 1px 2px rgba(255,255,255,0.5);
    -webkit-transition:all 0.3s ease-in-out;
    -moz-transition:all 0.3s ease-in-out;
    -o-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
.a-btn:hover{
    -webkit-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 5px rgba(0,0,0,0.4);
    -moz-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 5px rgba(0,0,0,0.4);
    box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 5px rgba(0,0,0,0.4);
}
.a-btn:hover img{
    -webkit-transform:scale(10);
    -moz-transform:scale(10);
    -ms-transform:scale(10);
    -o-transform:scale(10);
    transform:scale(10);
    opacity:0;
}
.a-btn:hover .a-btn-slide-text,
.a-btn:hover .a-btn-icon-right span{
    opacity:1;
}
.a-btn:active{
    position:relative;
    top:1px;
    background:#80ab5d;
    -webkit-box-shadow:1px 1px 2px rgba(0,0,0,0.4) inset;
    -moz-box-shadow:1px 1px 2px rgba(0,0,0,0.4) inset;
    box-shadow:1px 1px 2px rgba(0,0,0,0.4) inset;
    border-color:#a9db80;
}
.a-btn:active .a-btn-icon-right span{
    -webkit-transform:scale(1.4);
    -moz-transform:scale(1.4);
    -ms-transform:scale(1.4);
    -o-transform:scale(1.4);
    transform:scale(1.4);
}

```

#### Animated Button 2

```html
<a href="#" class="a-btn">
	<span class="a-btn-slide-text">$29</span>
	<img src="images/icons/5.png" alt="Photos" />
	<span class="a-btn-text"><small>Register right now &amp;</small> Download</span>
	<span class="a-btn-icon-right"><span></span></span>
</a>
```

```css
.a-btn{
    background:#80a9da;
    background:-webkit-gradient(linear,left top,left bottom,color-stop(#80a9da,0),color-stop(#6f97c5,1));
    background:-webkit-linear-gradient(top, #80a9da 0%, #6f97c5 100%);
    background:-moz-linear-gradient(top, #80a9da 0%, #6f97c5 100%);
    background:-o-linear-gradient(top, #80a9da 0%, #6f97c5 100%);
    background:linear-gradient(top, #80a9da 0%, #6f97c5 100%);
    filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#80a9da', endColorstr='#6f97c5',GradientType=0 );
    padding-left:90px;
    padding-right:105px;
    height:90px;
    display:inline-block;
    position:relative;
    border:1px solid #5d81ab;
    -webkit-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2);
    -moz-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2);
    box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2);
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
    float:left;
    clear:both;
    margin:10px 0px;
    overflow:hidden;
    -webkit-transition:box-shadow 0.3s ease-in-out;
    -moz-transition:box-shadow 0.3s ease-in-out;
    -o-transition:box-shadow 0.3s ease-in-out;
    transition:box-shadow 0.3s ease-in-out;
}
.a-btn img{
    position:absolute;
    left:15px;
    top:13px;
    border:none;
    -webkit-transition:all 0.3s ease-in-out;
    -moz-transition:all 0.3s ease-in-out;
    -o-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
.a-btn .a-btn-slide-text{
    position:absolute;
    font-size:36px;
    top:18px;
    left:18px;
    color:#bde086;
    text-shadow:0px 1px 1px rgba(0,0,0,0.3);
    -webkit-transform:scale(0);
    -moz-transform:scale(0);
    -ms-transform:scale(0);
    -o-transform:scale(0);
    transform:scale(0);
    opacity:0;
    -webkit-transition:all 0.3s ease-in-out;
    -moz-transition:all 0.3s ease-in-out;
    -o-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
.a-btn-text{
    padding-top:13px;
    display:block;
    font-size:30px;
    text-shadow:0px -1px 1px #5d81ab;
}
.a-btn-text small{
    display:block;
    font-size:11px;
    letter-spacing:1px;
}
.a-btn-icon-right{
    position:absolute;
    right:0px;
    top:0px;
    height:100%;
    width:80px;
    border-left:1px solid #5d81ab;
    -webkit-box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
    -moz-box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
    box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
}
.a-btn-icon-right span{
    width:38px;
    height:38px;
    opacity:0.7;
    -webkit-border-radius:20px;
    -moz-border-radius:20px;
    border-radius:20px;
    position:absolute;
    left:50%;
    top:50%;
    margin:-20px 0px 0px -20px;
    border:1px solid rgba(0,0,0,0.5);
    background:#5b5b5b url(../images/arrow_down.png) no-repeat center center;
    -webkit-box-shadow:0px 1px 1px rgba(255,255,255,0.3) inset, 0px 1px 2px rgba(255,255,255,0.5);
    -moz-box-shadow:0px 1px 1px rgba(255,255,255,0.3) inset, 0px 1px 2px rgba(255,255,255,0.5);
    box-shadow:0px 1px 1px rgba(255,255,255,0.3) inset, 0px 1px 2px rgba(255,255,255,0.5);
    -webkit-transition:all 0.3s ease-in-out;
    -moz-transition:all 0.3s ease-in-out;
    -o-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
.a-btn:hover{
    -webkit-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 5px rgba(0,0,0,0.4);
    -moz-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 5px rgba(0,0,0,0.4);
    box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 5px rgba(0,0,0,0.4);
}
.a-btn:hover img{
    opacity:0;
}
.a-btn:hover .a-btn-slide-text{
    opacity:1;
    -webkit-transform:scale(1);
    -moz-transform:scale(1);
    -ms-transform:scale(1);
    -o-transform:scale(1);
    transform:scale(1);
}
.a-btn:hover .a-btn-icon-right span{
    opacity:1;
    background-color:#bc3532;
}
.a-btn:active{
    position:relative;
    top:1px;
    background:#5d81ab;
    -webkit-box-shadow:1px 1px 2px rgba(0,0,0,0.4) inset;
    -moz-box-shadow:1px 1px 2px rgba(0,0,0,0.4) inset;
    box-shadow:1px 1px 2px rgba(0,0,0,0.4) inset;
    border-color:#80a9da;
}
.a-btn:active .a-btn-icon-right span{
    -webkit-transform:rotate(360deg);
    -moz-transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    -o-transform:rotate(360deg);
    transform:rotate(360deg);
}
```

#### Animated Button 3

```html
<a href="#" class="a-btn">
	<span class="a-btn-text">Register now</span>
	<span class="a-btn-slide-text">Get a promotion</span>
	<span class="a-btn-icon-right"><span></span></span>
</a>
```

```css
.a-btn{
    background:#fecc5f;
    background:-webkit-gradient(linear,left top,left bottom,color-stop(#feda71,0),color-stop(#febb4a,1));
    background:-webkit-linear-gradient(top, #feda71 0%, #febb4a 100%);
    background:-moz-linear-gradient(top, #feda71 0%, #febb4a 100%);
    background:-o-linear-gradient(top, #feda71 0%, #febb4a 100%);
    background:linear-gradient(top, #feda71 0%, #febb4a 100%);
    filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#feda71', endColorstr='#febb4a',GradientType=0 );
    border:1px solid #f5b74e;
    border-color:#f5b74e #e5a73e #d6982f;
    -webkit-box-shadow:0 1px 1px #d3d3d3, inset 0 1px 0 #fee395;
    -moz-box-shadow:0 1px 1px #d3d3d3, inset 0 1px 0 #fee395;
    box-shadow:0 1px 1px #d3d3d3, inset 0 1px 0 #fee395;
    padding:0px 80px 0px 10px;
    height:38px;
    display:inline-block;
    position:relative;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
    float:left;
    margin:10px;
    overflow:hidden;
    -webkit-transition:all 0.3s linear;
    -moz-transition:all 0.3s linear;
    -o-transition:all 0.3s linear;
    transition:all 0.3s linear;
}
.a-btn-text{
    padding-top:5px;
    display:block;
    font-size:18px;
    white-space:nowrap;
    color:#996633;
    text-shadow:0 1px 0 #fedd9b;
    -webkit-transition:all 0.3s linear;
    -moz-transition:all 0.3s linear;
    -o-transition:all 0.3s linear;
    transition:all 0.3s linear;
}
.a-btn-slide-text{
    position:absolute;
    top:35px;
    left:0px;
    width:auto;
    right:52px;
    height:0px;
    background:#fff;
    color:#996633;
    font-size:13px;
    white-space:nowrap;
    font-family:Georgia, serif;
    font-style:italic;
    text-indent:15px;
    overflow:hidden;
    line-height:30px;
    -webkit-box-shadow:-1px 0px 1px rgba(255,255,255,0.4), 1px 1px 1px rgba(0,0,0,0.5) inset;
    -moz-box-shadow:-1px 0px 1px rgba(255,255,255,0.4), 1px 1px 1px rgba(0,0,0,0.5) inset;
    box-shadow:-1px 0px 1px rgba(255,255,255,0.4), 1px 1px 1px rgba(0,0,0,0.5) inset;
    -webkit-transition:height 0.3s linear;
    -moz-transition:height 0.3s linear;
    -o-transition:height 0.3s linear;
    transition:height 0.3s linear;
}
.a-btn-icon-right{
    position:absolute;
    right:0px;
    top:0px;
    height:100%;
    width:52px;
    border-left:1px solid #f5b74e;
    -webkit-box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
    -moz-box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
    box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
}
.a-btn-icon-right span{
    width:38px;
    height:38px;
    opacity:0.7;
    position:absolute;
    left:50%;
    top:50%;
    margin:-20px 0px 0px -20px;
    background:transparent url(../images/arrow_right.png) no-repeat 50% 55%;
    -webkit-transition:all 0.3s linear;
    -moz-transition:all 0.3s linear;
    -o-transition:all 0.3s linear;
    transition:all 0.3s linear;
}
.a-btn:hover{
    height:65px;
    -webkit-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 5px rgba(0,0,0,0.4);
    -moz-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 5px rgba(0,0,0,0.4);
    box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 5px rgba(0,0,0,0.4);
}
.a-btn:hover .a-btn-text{
    text-shadow:0px 1px 1px rgba(0,0,0,0.2);
    color:#fff;
}
.a-btn:hover .a-btn-slide-text{
    height:30px;
}
.a-btn:hover .a-btn-icon-right span{
    opacity:1;
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    -o-transform:rotate(-45deg);
    transform:rotate(-45deg);
}
.a-btn:active{
    position:relative;
    top:1px;
    background:#fec354;
    background:-webkit-gradient(linear,left top,left bottom,color-stop(#fec354,0),color-stop(#fecd61,1));
    background:-webkit-linear-gradient(top, #fec354 0%, #fecd61 100%);
    background:-moz-linear-gradient(top, #fec354 0%, #fecd61 100%);
    background:-o-linear-gradient(top, #fec354 0%, #fecd61 100%);
    background:linear-gradient(top, #fec354 0%, #fecd61 100%);
    filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#fec354', endColorstr='#fecd61',GradientType=0 );
    border-color:#d29a3a #cc9436 #c89133;
    text-shadow:0 1px 0 #fee1a0;
    -webkit-box-shadow:0 1px 1px #d4d4d4, inset 0 1px 0 #fed17e;
    -moz-box-shadow:0 1px 1px #d4d4d4, inset 0 1px 0 #fed17e;
    box-shadow:0 1px 1px #d4d4d4, inset 0 1px 0 #fed17e;
}

```

#### Animated Button 4

```html
	<a href="#" class="a-btn">
		<span class="a-btn-text">Register now</span>
		<span class="a-btn-slide-text">It's free!</span>
		<span class="a-btn-icon-right"><span></span></span>
	</a>
```

```css
.a-btn{
    background:#80a9da;
    background:-webkit-gradient(linear,left top,left bottom,color-stop(#80a9da,0),color-stop(#6f97c5,1));
    background:-webkit-linear-gradient(top, #80a9da 0%, #6f97c5 100%);
    background:-moz-linear-gradient(top, #80a9da 0%, #6f97c5 100%);
    background:-o-linear-gradient(top, #80a9da 0%, #6f97c5 100%);
    background:linear-gradient(top, #80a9da 0%, #6f97c5 100%);
    filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#80a9da', endColorstr='#6f97c5',GradientType=0 );
    padding-left:20px;
    padding-right:80px;
    height:38px;
    display:inline-block;
    position:relative;
    border:1px solid #5d81ab;
    -webkit-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2), 0px 0px 0px 4px rgba(188,188,188,0.5);
    -moz-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2), 0px 0px 0px 4px rgba(188,188,188,0.5);
    box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2), 0px 0px 0px 4px rgba(188,188,188,0.5);
    -webkit-border-radius:20px;
    -moz-border-radius:20px;
    border-radius:20px;
    float:left;
    clear:both;
    margin:10px 0px;
    overflow:hidden;
    -webkit-transition:all 0.3s linear;
    -moz-transition:all 0.3s linear;
    -o-transition:all 0.3s linear;
    transition:all 0.3s linear;
}
.a-btn-text{
    padding-top:5px;
    display:block;
    font-size:18px;
    white-space:nowrap;
    text-shadow:0px 1px 1px rgba(255,255,255,0.3);
    color:#446388;
    -webkit-transition:all 0.2s linear;
    -moz-transition:all 0.2s linear;
    -o-transition:all 0.2s linear;
    transition:all 0.2s linear;
}
.a-btn-slide-text{
    position:absolute;
    height:100%;
    top:0px;
    right:52px;
    width:0px;
    background:#63707e;
    text-shadow:0px -1px 1px #363f49;
    color:#fff;
    font-size:18px;
    white-space:nowrap;
    text-transform:uppercase;
    text-align:left;
    text-indent:10px;
    overflow:hidden;
    line-height:38px;
    -webkit-box-shadow:-1px 0px 1px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.2) inset;
    -moz-box-shadow:-1px 0px 1px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.2) inset;
    box-shadow:-1px 0px 1px rgba(255,255,255,0.4), 1px 1px 2px rgba(0,0,0,0.2) inset;
    -webkit-transition:width 0.3s linear;
    -moz-transition:width 0.3s linear;
    -o-transition:width 0.3s linear;
    transition:width 0.3s linear;
}
.a-btn-icon-right{
    position:absolute;
    right:0px;
    top:0px;
    height:100%;
    width:52px;
    border-left:1px solid #5d81ab;
    -webkit-box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
    -moz-box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
    box-shadow:1px 0px 1px rgba(255,255,255,0.4) inset;
}
.a-btn-icon-right span{
    width:38px;
    height:38px;
    opacity:0.7;
    position:absolute;
    left:50%;
    top:50%;
    margin:-20px 0px 0px -20px;
    background:transparent url(../images/arrow_right.png) no-repeat 50% 55%;
    -webkit-transition:all 0.3s linear;
    -moz-transition:all 0.3s linear;
    -o-transition:all 0.3s linear;
    transition:all 0.3s linear;
}
.a-btn:hover{
    padding-right:180px;
    -webkit-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2);
    -moz-box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2);
    box-shadow:0px 1px 1px rgba(255,255,255,0.8) inset, 1px 1px 3px rgba(0,0,0,0.2);
}
.a-btn:hover .a-btn-text{
    text-shadow:0px 1px 1px #5d81ab;
    color:#fff;
}
.a-btn:hover .a-btn-slide-text{
    width:100px;
}
.a-btn:hover .a-btn-icon-right span{
    opacity:1;
}
.a-btn:active{
    position:relative;
    top:1px;
    background:#5d81ab;
    -webkit-box-shadow:1px 1px 2px rgba(0,0,0,0.4) inset;
    -moz-box-shadow:1px 1px 2px rgba(0,0,0,0.4) inset;
    box-shadow:1px 1px 2px rgba(0,0,0,0.4) inset;
    border-color:#80a9da;
}

```

#### Animated Button 5

```html
<a href="#" class="a-btn">
	<span class="a-btn-symbol">Z</span>
	<span class="a-btn-text">Download Now</span>
	<span class="a-btn-slide-text">Windows Vista / Windows 7</span>
	<span class="a-btn-slide-icon"></span>
</a>
```

```css
@font-face{
    font-family: 'WebSymbolsRegular';
    src: url('websymbols/websymbols-regular-webfont.eot');
    src: url('websymbols/websymbols-regular-webfont.eot?#iefix') format('embedded-opentype'),
        url('websymbols/websymbols-regular-webfont.woff') format('woff'),
        url('websymbols/websymbols-regular-webfont.ttf') format('truetype'),
        url('websymbols/websymbols-regular-webfont.svg#WebSymbolsRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}
.a-btn{
    -webkit-border-radius:50px;
    -moz-border-radius:50px;
    border-radius:50px;
    padding:10px 30px 10px 70px;
    position:relative;
    float:left;
    display:block;
    overflow:hidden;
    margin:10px;
    background:#fff;
    background:-webkit-gradient(linear,left top,left bottom,color-stop(rgba(255,255,255,1),0),color-stop(rgba(246,246,246,1),0.74),color-stop(rgba(237,237,237,1),1));
    background:-webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 74%, rgba(237,237,237,1) 100%);
    background:-moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 74%, rgba(237,237,237,1) 100%);
    background:-o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 74%, rgba(237,237,237,1) 100%);
    background:linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 74%, rgba(237,237,237,1) 100%);
    filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed',GradientType=0 );
    -webkit-box-shadow:0px 0px 7px rgba(0,0,0,0.2), 0px 0px 0px 1px rgba(188,188,188,0.1);
    -moz-box-shadow:0px 0px 7px rgba(0,0,0,0.2), 0px 0px 0px 1px rgba(188,188,188,0.1);
    box-shadow:0px 0px 7px rgba(0,0,0,0.2), 0px 0px 0px 1px rgba(188,188,188,0.1);
    -webkit-transition:box-shadow 0.3s ease-in-out;
    -moz-transition:box-shadow 0.3s ease-in-out;
    -o-transition:box-shadow 0.3s ease-in-out;
    transition:box-shadow 0.3s ease-in-out;
}
.a-btn-symbol{
    font-family:'WebSymbolsRegular', cursive;
    color:#555;
    font-size:20px;
    text-shadow:1px 1px 2px rgba(255,255,255,0.5);
    position:absolute;
    left:20px;
    line-height:32px;
    -webkit-transition:opacity 0.3s ease-in-out;
    -moz-transition:opacity 0.3s ease-in-out;
    -o-transition:opacity 0.3s ease-in-out;
    transition:opacity 0.3s ease-in-out;
}
.a-btn-text{
    font-size:20px;
    color:#d7565b;
    line-height:16px;
    font-weight:bold;
    font-family:"Myriad Pro", "Trebuchet MS", sans-serif;
    text-shadow:1px 1px 2px rgba(255,255,255,0.5);
    display:block;
}
.a-btn-slide-text{
    font-family:Arial, sans-serif;
    font-size:10px;
    letter-spacing:1px;
    text-transform:uppercase;
    color:#555;
    text-shadow:0px 1px 1px rgba(255,255,255,0.9);
}
.a-btn-slide-icon{
    position:absolute;
    top:-30px;
    width:22px;
    height:22px;
    background:transparent url(../images/arrow_down_black.png) no-repeat top left;
    left:20px;
    opacity:0.4;
}
.a-btn:hover{
    background:#fff;
    -webkit-box-shadow:0px 0px 9px rgba(0,0,0,0.4), 0px 0px 0px 1px rgba(188,188,188,0.1);
    -moz-box-shadow:0px 0px 9px rgba(0,0,0,0.4), 0px 0px 0px 1px rgba(188,188,188,0.1);
    box-shadow:0px 0px 9px rgba(0,0,0,0.4), 0px 0px 0px 1px rgba(188,188,188,0.1);
}
.a-btn:hover .a-btn-symbol{
    opacity:0;
}
.a-btn:hover .a-btn-slide-icon{
    -webkit-animation:slideDown 0.9s linear infinite;
    -moz-animation:slideDown 0.9s linear infinite;
    animation:slideDown 0.9s linear infinite;
}
.a-btn:active{
    background:#d7565b;
    -webkit-box-shadow:0px 2px 2px rgba(0,0,0,0.6) inset, 0px 0px 0px 1px rgba(188,188,188,0.1);
    -moz-box-shadow:0px 2px 2px rgba(0,0,0,0.6) inset, 0px 0px 0px 1px rgba(188,188,188,0.1);
    box-shadow:0px 2px 2px rgba(0,0,0,0.6) inset, 0px 0px 0px 1px rgba(188,188,188,0.1);
}
.a-btn:active .a-btn-text{
    color:#fff;
    text-shadow:0px 1px 1px rgba(0,0,0,0.3);
}
.a-btn:active .a-btn-slide-text{
    color:rgba(0,0,0,0.4);
    text-shadow:none;
}
@keyframes slideDown{
    0% { top: -30px; }
    100% { top: 80px;}
}
@-webkit-keyframes slideDown{
    0% { top: -30px; }
    100% { top: 80px;}
}
@-moz-keyframes slideDown{
    0% { top: -30px; }
    100% { top: 80px;}
}

```

#### Animated Button 6

```html
<a href="#" class="a-btn">
	<span></span>
	<span>Sign up</span>
	<span>It's free!</span>
</a>
```

```css
.a-btn{
    width:120px;
    height:120px;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
    display:block;
    margin:20px;
    float:left;
    background:#f0ad4e;
    position:relative;
    -webkit-box-shadow:0px 0px 5px 0px rgba(246, 212, 163, 0.5) inset, 0px -1px 5px 4px rgba(170, 77, 27, 0.2) inset, 0px 0px 0px 7px #fff,  0px 0px 1px 8px rgba(188, 188, 188, 0.4), 0px 0px 0px 9px #fff;
    -moz-box-shadow:0px 0px 5px 0px rgba(246, 212, 163, 0.5) inset, 0px -1px 5px 4px rgba(170, 77, 27, 0.2) inset, 0px 0px 0px 7px #fff,  0px 0px 1px 8px rgba(188, 188, 188, 0.4), 0px 0px 0px 9px #fff;
    box-shadow:0px 0px 5px 0px rgba(246, 212, 163, 0.5) inset, 0px -1px 5px 4px rgba(170, 77, 27, 0.2) inset, 0px 0px 0px 7px #fff,  0px 0px 1px 8px rgba(188, 188, 188, 0.4), 0px 0px 0px 9px #fff;
    -webkit-transition:all 0.3s linear;
    -moz-transition:all 0.3s linear;
    -o-transition:all 0.3s linear;
    transition:all 0.3s linear;
}
.a-btn span{
    display:table-cell;
    width:80px;
    height:80px;
    padding:20px;
    text-align:center;
    vertical-align:middle;
    font-size:26px;
    color:#fff;
    text-shadow:0px 1px 1px #A03F16;
    font-family:"Arvo", "Myriad Pro", "Trebuchet MS", sans-serif;
    -webkit-transition:all 0.3s linear;
    -moz-transition:all 0.3s linear;
    -o-transition:all 0.3s linear;
    transition:all 0.3s linear;
}
.a-btn span:nth-child(1),
.a-btn span:nth-child(3){
    position:absolute;
    top:0px;
    left:0px;
    font-size:40px;
    line-height:36px;
    opacity:0;
}
.a-btn span:nth-child(1){
    background:transparent url(../images/star.png) no-repeat center center;
    opacity:0.2;
}
.a-btn:hover{
    background:rgba(170, 77, 27, 0.6);
    -webkit-box-shadow:0px 0px 5px 0px rgba(246, 212, 163, 0.5) inset, 0px -1px 5px 4px rgba(170, 77, 27, 0.2) inset, 0px 0px 0px 7px #fff,  1px 4px 5px 8px rgba(188, 188, 188, 0.6), 0px 0px 0px 9px #fff;
    -moz-box-shadow:0px 0px 5px 0px rgba(246, 212, 163, 0.5) inset, 0px -1px 5px 4px rgba(170, 77, 27, 0.2) inset, 0px 0px 0px 7px #fff,  1px 4px 5px 8px rgba(188, 188, 188, 0.6), 0px 0px 0px 9px #fff;
    box-shadow:0px 0px 5px 0px rgba(246, 212, 163, 0.5) inset, 0px -1px 5px 4px rgba(170, 77, 27, 0.2) inset, 0px 0px 0px 7px #fff,  1px 4px 5px 8px rgba(188, 188, 188, 0.6), 0px 0px 0px 9px #fff;
}
.a-btn:hover span:nth-child(3){
    opacity:1;
}
.a-btn:hover span:nth-child(2){
    opacity: 0;
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    transform: scale(0);
}
.a-btn:hover span:nth-child(1){
    -webkit-animation:rotate 1s linear;
    -moz-animation:rotate 1s linear;
    animation:rotate 1s linear;
}
.a-btn:active{
    -webkit-box-shadow:0px 0px 5px 0px rgba(246, 212, 163, 0.5) inset, 0px -1px 5px 4px rgba(170, 77, 27, 0.2) inset, 0px 0px 0px 7px #fff,  0px -1px 0px 8px rgba(188, 188, 188, 0.3), 0px 0px 0px 10px #fff;
    -moz-box-shadow:0px 0px 5px 0px rgba(246, 212, 163, 0.5) inset, 0px -1px 5px 4px rgba(170, 77, 27, 0.2) inset, 0px 0px 0px 7px #fff,  0px -1px 0px 8px rgba(188, 188, 188, 0.3), 0px 0px 0px 10px #fff;
    box-shadow:0px 0px 5px 0px rgba(246, 212, 163, 0.5) inset, 0px -1px 5px 4px rgba(170, 77, 27, 0.2) inset, 0px 0px 0px 7px #fff,  0px -1px 0px 8px rgba(188, 188, 188, 0.3), 0px 0px 0px 10px #fff;
}
.a-btn:active span:nth-child(2){
    color:rgba(170, 77, 27, 0.8);
    text-shadow:0px 1px 1px rgba(255, 255, 255, 0.6);
}
@keyframes rotate{
    0% { transform: scale(1) rotate(0);}
    50% { transform: scale(0.5) rotate(180deg);}
    100% { transform: scale(1) rotate(360deg);}
}
@-webkit-keyframes rotate{
    0% { -webkit-transform: scale(1) rotate(0);}
    50% { -webkit-transform: scale(0.5) rotate(180deg);}
    100% { -webkit-transform: scale(1) rotate(360deg);}
}
@-moz-keyframes rotate{
    0% { -moz-transform: scale(1) rotate(0);}
    50% { -moz-transform: scale(0.5) rotate(180deg);}
    100% { -moz-transform: scale(1) rotate(360deg);}
}
```

#### Animated Button 7

```html
<p>
	<a href="#" class="a_demo_one">
		Click me!
	</a>
</p>
```

```css
.a_demo_one {
	background-color:#3bb3e0;
	padding:10px;
	position:relative;
	font-family: 'Open Sans', sans-serif;
	font-size:12px;
	text-decoration:none;
	color:#fff;
	border: solid 1px #186f8f;
	background-image: linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -o-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(44,160,202)),
	color-stop(1, rgb(62,184,229))
	);
	-webkit-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;
	-moz-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;
	box-shadow: inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-o-border-radius: 5px;
	border-radius: 5px;
}

.a_demo_one::before {
	background-color:#ccd0d5;
	content:"";
	display:block;
	position:absolute;
	width:100%;
	height:100%;
	padding:8px;
	left:-8px;
	top:-8px;
	z-index:-1;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-o-border-radius: 5px;
	border-radius: 5px;
	-webkit-box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;
	-moz-box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;
	-o-box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;
	box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;
}

.a_demo_one:active {
	padding-bottom:9px;
	padding-left:10px;
	padding-right:10px;
	padding-top:11px;
	top:1px;
	background-image: linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -o-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(62,184,229)),
	color-stop(1, rgb(44,160,202))
	);
}
```

#### Animated Button 8

```html
	<p>
		<a href="#" class="a_demo_two">
			Click me!
		</a>
	</p>
```

```css
.a_demo_two {
	background-color:#3bb3e0;
	padding:10px;
	position:relative;
	font-family: 'Open Sans', sans-serif;
	font-size:12px;
	text-decoration:none;
	color:#fff;
	background-image: linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -o-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(44,160,202)),
	color-stop(1, rgb(62,184,229))
	);
	-webkit-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 6px 0px #156785;
	-moz-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 6px 0px #156785;
	-o-box-shadow: inset 0px 1px 0px #7fd2f1, 0px 6px 0px #156785;
	box-shadow: inset 0px 1px 0px #7fd2f1, 0px 6px 0px #156785;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-o-border-radius: 5px;
	border-radius: 5px;
}

.a_demo_two::before {
	background-color:#072239;
	content:"";
	display:block;
	position:absolute;
	width:100%;
	height:100%;
	padding-left:2px;
	padding-right:2px;
	padding-bottom:4px;
	left:-2px;
	top:5px;
	z-index:-1;
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	-o-border-radius: 6px;
	border-radius: 6px;
	-webkit-box-shadow: 0px 1px 0px #fff;
	-moz-box-shadow: 0px 1px 0px #fff;
	-o-box-shadow: 0px 1px 0px #fff;
	box-shadow: 0px 1px 0px #fff;
}

.a_demo_two:active {
	color:#156785;
	text-shadow: 0px 1px 1px rgba(255,255,255,0.3);
	background:rgb(44,160,202);
	-webkit-box-shadow: inset 0px 1px 0px #7fd2f1, inset 0px -1px 0px #156785;
	-moz-box-shadow: inset 0px 1px 0px #7fd2f1, inset 0px -1px 0px #156785;
	-o-box-shadow: inset 0px 1px 0px #7fd2f1, inset 0px -1px 0px #156785;
	box-shadow: inset 0px 1px 0px #7fd2f1, inset 0px -1px 0px #156785;
	top:7px;
}

.a_demo_two:active::before {
	top:-2px;
}
```

#### Animated Button 9

```html
<p>
	<a class="a_demo_three" href="#">
		Click me!
	</a>
</p>
```

```css
.a_demo_three {
	background-color:#3bb3e0;
	font-family: 'Open Sans', sans-serif;
	font-size:12px;
	text-decoration:none;
	color:#fff;
	position:relative;
	padding:10px 20px;
	border-left:solid 1px #2ab7ec;
	margin-left:35px;
	background-image: linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -o-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(44,160,202)),
	color-stop(1, rgb(62,184,229))
	);
	-webkit-border-top-right-radius: 5px;
	-webkit-border-bottom-right-radius: 5px;
	-moz-border-radius-topright: 5px;
	-moz-border-radius-bottomright: 5px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	-webkit-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
	-moz-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
	-o-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
	box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
}

.a_demo_three:active {
	top:3px;
	background-image: linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -o-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(62,184,229)),
	color-stop(1, rgb(44,160,202))
	);
	-webkit-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
	-moz-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
	-o-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
	box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
}

.a_demo_three::before {
	background-color:#2561b4;
	content:"1";
	width:35px;
	max-height:29px;
	height:100%;
	position:absolute;
	display:block;
	padding-top:8px;
	top:0px;
	left:-36px;
	font-size:16px;
	font-weight:bold;
	color:#8fd1ea;
	text-shadow:1px 1px 0px #07526e;
	border-right:solid 1px #07526e;
	background-image: linear-gradient(bottom, rgb(10,94,125) 0%, rgb(14,139,184) 100%);
	background-image: -o-linear-gradient(bottom, rgb(10,94,125) 0%, rgb(14,139,184) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(10,94,125) 0%, rgb(14,139,184) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(10,94,125) 0%, rgb(14,139,184) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(10,94,125) 0%, rgb(14,139,184) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(10,94,125)),
	color-stop(1, rgb(14,139,184))
	);
	-webkit-border-top-left-radius: 5px;
	-webkit-border-bottom-left-radius: 5px;
	-moz-border-radius-topleft: 5px;
	-moz-border-radius-bottomleft: 5px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	-webkit-box-shadow:inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #032b3a, 0px 10px 5px #999 ;
	-moz-box-shadow:inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #032b3a, 0px 10px 5px #999 ;
	-o-box-shadow:inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #032b3a, 0px 10px 5px #999 ;
	box-shadow:inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #032b3a, 0px 10px 5px #999 ;
}

.a_demo_three:active::before {
	top:-3px;
	-webkit-box-shadow:inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #032b3a, 1px 1px 0px 0px #044a64, 2px 2px 0px 0px #044a64, 2px 5px 0px 0px #044a64, 6px 4px 2px #0b698b, 0px 10px 5px #999 ;
	-moz-box-shadow:inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #032b3a, 1px 1px 0px 0px #044a64, 2px 2px 0px 0px #044a64, 2px 5px 0px 0px #044a64, 6px 4px 2px #0b698b, 0px 10px 5px #999 ;
	-o-box-shadow:inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #032b3a, 1px 1px 0px 0px #044a64, 2px 2px 0px 0px #044a64, 2px 5px 0px 0px #044a64, 6px 4px 2px #0b698b, 0px 10px 5px #999 ;
	box-shadow:inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #032b3a, 1px 1px 0px 0px #044a64, 2px 2px 0px 0px #044a64, 2px 5px 0px 0px #044a64, 6px 4px 2px #0b698b, 0px 10px 5px #999 ;
}

/*
Second button
*/

.second_button::before {
	content:"2";
}

/*
Third button
*/

.third_button::before {
	content:"3";
}
```

#### Animated Button 10

```html
	<a class="a_demo_four" href="#">
		Click me!
	</a>
```

```css
.a_demo_four {
	background-color:#3bb3e0;
	font-family: 'Open Sans', sans-serif;
	font-size:12px;
	text-decoration:none;
	color:#fff;
	position:relative;
	padding:10px 20px;
	padding-right:50px;
	background-image: linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -o-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(44,160,202)),
	color-stop(1, rgb(62,184,229))
	);
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-o-border-radius: 5px;
	border-radius: 5px;
	-webkit-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
	-moz-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
	-o-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
	box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
}

.a_demo_four:active {
	top:3px;
	background-image: linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -o-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(62,184,229)),
	color-stop(1, rgb(44,160,202))
	);
	-webkit-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
	-moz-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
	-o-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
	box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
}

.a_demo_four::before {
	background-color:#2591b4;
	background-image:url(../images/right_arrow.png);
	background-repeat:no-repeat;
	background-position:center center;
	content:"";
	width:20px;
	height:20px;
	position:absolute;
	right:15px;
	top:50%;
	margin-top:-9px;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-o-border-radius: 50%;
	border-radius: 50%;
	-webkit-box-shadow: inset 0px 1px 0px #052756, 0px 1px 0px #60c9f0;
	-moz-box-shadow: inset 0px 1px 0px #052756, 0px 1px 0px #60c9f0;
	-o-box-shadow: inset 0px 1px 0px #052756, 0px 1px 0px #60c9f0;
	box-shadow: inset 0px 1px 0px #052756, 0px 1px 0px #60c9f0;
}

.a_demo_four:active::before {
	top:50%;
	margin-top:-12px;
	-webkit-box-shadow: inset 0px 1px 0px #60c9f0, 0px 3px 0px #0e3871, 0px 6px 3px #1a80a6;
	-moz-box-shadow: inset 0px 1px 0px #60c9f0, 0px 3px 0px #0e3871, 0px 6px 3px #1a80a6;
	-o-box-shadow: inset 0px 1px 0px #60c9f0, 0px 3px 0px #0e3871, 0px 6px 3px #1a80a6;
	box-shadow: inset 0px 1px 0px #60c9f0, 0px 3px 0px #0e3871, 0px 6px 3px #1a80a6;
}
```

#### Big Animated Button

```html
<p>
	<a class="a_demo_five" href="#">
		Love this tutorial!
	</a>
</p>
```

```css
.a_demo_five {
	background-color:#3bb3e0;
	width:150px;
	display:inline-block;
	font-family: 'Open Sans', sans-serif;
	font-size:12px;
	text-decoration:none;
	color:#fff;
	position:relative;
	margin-top:40px;
	padding-bottom:10px;
	padding-top:10px;
	background-image: linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -o-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(44,160,202)),
	color-stop(1, rgb(62,184,229))
	);
	-webkit-border-bottom-right-radius: 5px;
	-webkit-border-bottom-left-radius: 5px;
	-moz-border-radius-bottomright: 5px;
	-moz-border-radius-bottomleft: 5px;
	border-bottom-right-radius: 5px;
	border-bottom-left-radius: 5px;
	-webkit-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
	-moz-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
	-o-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
	box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;
}

.a_demo_five:active {
	top:0px;
	background-image: linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -o-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -moz-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -webkit-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -ms-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%);
	background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0, rgb(62,184,229)),
	color-stop(1, rgb(44,160,202))
	);
	-webkit-box-shadow: inset 0px 4px 1px #0b698b, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
	-moz-box-shadow: 0px 2px 0px 1px #156785, 0px 5px 3px #999;
	-o-box-shadow: 0px 2px 0px 1px #156785, 0px 5px 3px #999;
	box-shadow: inset 0px 4px 1px #0b698b, 0px 2px 0px 0px #156785, 0px 5px 3px #999;
}
.a_demo_five::before {
	background-color:#fff;
	background-image:url(../images/heart.gif);
	background-repeat:no-repeat;
	background-position:center center;
	content:"";
	width:150px;
	height:40px;
	position:absolute;
	top:-30px;
	left:0px;
	margin-top:-11px;
	z-index:-1;
	-webkit-border-top-left-radius: 5px;
	-webkit-border-top-right-radius: 5px;
	-moz-border-radius-topleft: 5px;
	-moz-border-radius-topright: 5px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
.a_demo_five:active::before {
	top: -30px;
	-webkit-box-shadow: 0px 3px 0px #ccc;
	-moz-box-shadow: 0px 3px 0px #ccc;
	-o-box-shadow: 0px 3px 0px #ccc;
	box-shadow: 0px 3px 0px #ccc;
}
```
#### Shake effect in a button

```html
<button type="button">Button</button>
```


```css
.face:hover {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
```
