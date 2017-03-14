---
layout: post
title: "Ready to use button style"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "button"
  - "ready to use"
categories:
  - "Snippets"
type: css  
---
### নিচে বিভিন্ন রকমের বাটনের উদাহরন দেখানো হল।

#### Basic Button

```css
.btn_primary{
	background: -moz-linear-gradient(90deg, #eee 0%, #fff 50%, #eee 100%);
	cursor: pointer;
	padding: 0.6em 0.8em;
	text-transform: uppercase;
	border-radius: 0.4em;
	border: 1px solid #ccc;
	color: #333;
	font-family: arial;
	font-size: 1rem;
	text-shadow: 0px 1px 0px #ddd;
}
```

#### Stitched look button

```css
.stitched{
   padding: 20px;
   margin: 10px;
   background: #ff0030;
   color: #fff;
   font-size: 21px;
   font-weight: bold;
   line-height: 1.3em;
   border: 2px dashed #fff;
   border-radius: 10px;
   box-shadow: 0 0 0 4px #ff0030, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
   text-shadow: -1px -1px #aa3030;
   font-weight: normal;
}
```

[Referance link](http://codepen.io/chriscoyier/pen/Brcpe)


#### Button style

```html
<a href="#" id="btn"><span id="left">i</span><span id="right">Information</span></a>
```

```css
#btn{
	width:170px;
	display:block;
	background:#000;
	border:none;
	padding:0;
	margin:0;
	text-align:center;
	line-height:40px;
	border-radius:5px;
	position:relative;
	text-decoration:none;
	font-size:1.2em;
}
#left{
	width:50px;
	display:inline-block;
	color:#fff;
	background:-moz-linear-gradient(right,skyblue, blue);
	padding:5px;
	border-radius:5px 0 0 5px;
	font-style:italic;
}
#left:after{
	content:'';
	width:0;
	height:0;
	border-left:10px solid skyblue;
	border-bottom:5px solid transparent;
	border-top:5px solid transparent;
	position:absolute;
	left:60px;
	top:20px;
}
#right{
	width:100px;
	display:inline-block;
	color:#fff;
	background:#666;
	padding:5px;
	border-radius:0 5px 5px 0;
}
```

#### Button Style 2

```html
<div id="btn"><a href="#"><div id="left">Add to cart</div><span><em>or</em></span><div id="right">image</div></a></div>
```

```css
#btn{
	display:block;
	position:relative;
	border-radius:5px;
	overflow:hidden;
	background:#fff;
	width:175px;
}
#btn span{
	width:30px;
	height:30px;
	border-radius:50px;
	background:#329CC6;
	display:inline-block;
	position:absolute;
	left:85px;
	top:5px;
}
#btn span em{
	width:25px;
	height:25px;
	border-radius:50px;
	background:#EB7D22;
	display:inline-block;
	position:absolute;
	left:3px;
	top:2px;
	text-align:center;
	color:white;
}
#btn div#left{
	display:inline-block;
	padding:10px 15px;
	background:#329CC6;
	color:#fff;
}
#btn div#right{
	display:inline-block;
	padding:10px 20px;
	background:#EB7D22;
	color:white;
}
```

#### Gradient Button

```html
<div class="container">
	<a href="#" class="button shadow">Cool Shadow</a>
	<a href="#" class="button engraved">Dark Engraved</a>
	<a href="#" class="button glow">Mystic Glow</a>
	<a href="#" class="button white">Frozen White</a>
	<a href="#" class="button red">Sexy Red</a>
	<a href="#" class="button lightblue">Heavenly Blue</a>
	<a href="#" class="button olive">Olive Outset</a>
	<a href="#" class="button orange">Juicy Orange</a>
	<a href="#" class="button pink">Lovely Pink</a>
	<a href="#" class="button sea">Deep Sea</a>
	<a href="#" class="button rose">Rose Vanity</a>
	<a href="#" class="button black">Buttonize Gray</a>
	<a href="#" class="button sand">Dreamy Sand</a>
	<a href="#" class="button violet">Violent Violet</a>
	<a href="#" class="button green">Grasshopper</a>
	<a href="#" class="button darkblue">Ocean Blue</a>
	<a href="#" class="button sunset">Golden Sunset</a>
	<a href="#" class="button choco">Sweet Chocolate</a>
	<a href="#" class="button cadet">Cadet Dreams</a>
	<a href="#" class="button aqua">Aqua Love</a>
</div>
```

```css
.container{
	background:#888;
}
.button{
	padding:5px 15px 5px 15px;
	text-decoration: none;
	display: inline-block;
	-moz-border-radius: 10px;
	-webkit-border-radius: 10px;
	-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	border-bottom: 1px solid rgba(0,0,0,0.25);
	font-family: "Lucida Grande",Lucida,Verdana,sans-serif;
	outline:none;
	position:relative;
	font-size: 32px;
	margin:10px;
	background:transparent url(buttonover.png) repeat-x top left;
	white-space:nowrap;
}
.button:hover{
	background-color: #777;
}
.button:active{
	top: 1px;
	left:1px;
}
.shadow{
	background-color: #a3a3a3;
	border: 2px solid #777;
	color: #FFF;
	font-weight:bold;
	text-shadow: 0 1px 1px rgba(0,0,0,0.8);
}
.engraved{
	background: #666;
	border: 2px solid #777;
	color: #000;
	text-shadow: 0px 1px 1px #fff;
	font-weight: bold;
}
.glow{
	color: #fff;
	background: #888;
	border: 2px solid #777;
	text-shadow: 1px 1px 6px #fff;
}
.white{
	color: #fff;
	background: #fff;
	text-shadow: 1px 1px 4px #000;
	border: 2px solid #f0f0f0;
	font-family: "Arial";
	font-weight:bold;
	text-transform:uppercase;
	letter-spacing:-1px;
}
.white:hover{
	background-color:#f1f1f1;
}
.red{
	background-color: #B00000;
	border: 1px solid #7F0000;
	color: #FFF;
	text-shadow: 1px 1px 4px #000;
	font-family: "Palatino Linotype";
}
.red:hover{
	background-color:#800000;
}

.lightblue{
	background-color: #7FB0F0;
	color: #FFF;
	text-shadow: 0 -1px 1px rgba(0,0,0,0.25);
	font-weight:100;
}
.lightblue:hover{
	background-color:#7FA0C0;
}
.olive{
	background-color: #B0E000;
	border: 1px outset #D0E000;
	color: #FFF;
	font-style:italic;
	text-shadow: 0 2px 1px rgba(0,0,0,0.2);
}
.olive:hover{
	background-color: #90A000;
}
.orange{
	background-color: #FFCC00;
	border: 1px outset #F2FF00;
	color: #FFF;
	font-family:Helvetica;
	font-weight:bold;
}
.orange:hover{
	background-color: #FF8000;
}
.pink{
	background-color: #C0107F;
	border: 1px outset #70107F;
	color: #FFF;
	font-family:"Georgia";
	font-weight:bold;
}
.pink:hover{
	background-color: #F0107F;
}
.pink:active{
	border: 1px inset #70107F;
}
.sea{
	background-color: #20807F;
	color: #FFF;
}
.sea:hover{
	background-color: #60807F;
}
.rose{
	background-color: #F07FD0;
	color: #FFF;
	font-family: "Palatino Linotype";
	font-style: italic;
	letter-spacing:-1px;
	text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);
}
.rose:hover{
	background-color: #B07FA0;
}
.black{
	background-color: #000;
	background-image:url(buttonover2.png);
	color: #FFF;
	letter-spacing:-1px;
	text-shadow: 0 2px 1px rgba(0,0,0,0.2);
}
.black:hover{
	background-color: #777;
}

.sand{
	background-color: #FFF090;
	background-image:url(buttonover2.png);
	color: #fff;
	letter-spacing: 3px;
	text-shadow: 1px 0px 1px rgba(0,0,0,0.2);
}
.sand:hover{
	background-color: #F0C07F;
}

.violet{
	background-color: #9400D3;
	background-image:url(buttonover2.png);
	color: #777;
	font-family:"Arial Black";
	text-shadow: 0px 1px 1px #fff;
}
.violet:hover{
	background-color: #8A2BE2;
}

.green{
	background-color: #32CD32;
	background-image:url(buttonover2.png);
	color: #fff;
	font-family:"Century Gothic";
	text-transform:uppercase;
	font-style:italic;
	text-shadow: 1px 0px 1px rgba(0,0,0,0.2);
}
.green:hover{
	background-color: #2F4F4F;
}
.darkblue{
	background-color: #00008B;
	background-image:url(buttonover2.png);
	color: #fff;
	font-family:"Impact";
	text-shadow: 1px 0px 1px rgba(0,0,0,0.2);
}
.darkblue:hover{
	background-color: #191970;
}
.sunset{
	background-color: #FF6347;
	background-image:url(buttonover2.png);
	color: #777;
	font-family:"Palatino Linotype";
	text-transform:uppercase;
	text-shadow: 0px 1px 1px #fff;
}
.sunset:hover{
	background-color: #FF7F50;
}
.choco{
	background-color: #D2691E;
	background-image:url(buttonover2.png);
	color: #fff;
	font-family:"Gill Sans";
	text-shadow: 1px 0px 1px rgba(0,0,0,0.2);
}
.choco:hover{
	background-color: #D2B48C;
}
.cadet{
	background-color: #5F9EA0;
	background-image:url(buttonover2.png);
	color: #fff;
	font-family: "Arial Narrow";
	text-shadow: 1px 0px 1px rgba(0,0,0,0.2);
}
.cadet:hover{
	background-color: #008080;
}
.aqua{
	background-color: #00FFFF;
	background-image:url(buttonover2.png);
	color: #fff;
	font-family: "Tahoma";
	text-shadow: 1px 1px 4px #000;
}
.aqua:hover{
	background-color: #00FFCC;
}
```

#### Metro Styles

```css
.metro {
  display: inline-block;
  padding: 10px;
  margin: 10px;
  background: #08C;

  /* Font styles */
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.metro:hover { background: #0AF; }

.metro.three-d {
  position: relative;
  box-shadow:
    1px 1px #53A7EA,
    2px 2px #53A7EA,
    3px 3px #53A7EA;
  transition: all 0.1s ease-in;
}

.metro.three-d:active {
  box-shadow: none;
  top: 3px;
  left: 3px;
}
```

#### Modern, Modern emboss, Modern socle.

```css
.modern {
  display: inline-block;
  margin: 10px;
  padding: 8px 15px;
  background: #B8ED01;
  border: 1px solid rgba(0,0,0,0.15);
  border-radius: 4px;
  transition: all 0.3s ease-out;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    0 2px 2px rgba(0,0,0,0.3),
    0 0 4px 1px rgba(0,0,0,0.2);

  /* Font styles */
  text-decoration: none;
  text-shadow: 0 1px rgba(255,255,255,0.7);
}

.modern:hover  { background: #C7FE0A; }

.embossed-link {
  box-shadow:
    inset 0 3px 2px rgba(255,255,255,.22),
    inset 0 -3px 2px rgba(0,0,0,.17),
    inset 0 20px 10px rgba(255,255,255,.12),
    0 0 4px 1px rgba(0,0,0,.1),
    0 3px 2px rgba(0,0,0,.2);
}

.modern.embossed-link {
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.5),
    0 2px 2px rgba(0,0,0,0.3),
    0 0 4px 1px rgba(0,0,0,0.2),
    inset 0 3px 2px rgba(255,255,255,.22),
    inset 0 -3px 2px rgba(0,0,0,.15),
    inset 0 20px 10px rgba(255,255,255,.12),
    0 0 4px 1px rgba(0,0,0,.1),
    0 3px 2px rgba(0,0,0,.2);
}

.modern.embossed-link:active {
  box-shadow:
    inset 0 -2px 1px rgba(255,255,255,0.2),
    inset 0 3px 2px rgba(0,0,0,0.12);
}

.socle {
  position: relative;
  z-index: 2;
}

.socle:after {
  content: "";
  z-index: -1;
  position: absolute;
  border-radius: 6px;
  box-shadow:
	inset 0 1px 0 rgba(0,0,0,0.1),
	inset 0 -1px 0 rgba(255,255,255,0.7);
  top: -6px; bottom: -6px;
  right: -6px; left: -6px;
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0));
}
```
