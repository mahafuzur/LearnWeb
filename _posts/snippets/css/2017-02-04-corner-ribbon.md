---
layout: post
title: "Corner Ribbon"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "corner ribbon"
categories:
  - "Snippets"
type: css  
---

### একটি ডিভের কোনায় রিবন দেয়ার সিনিপিট।

```html
<div class="wrapper">
       <div class="ribbon-wrapper-green"><div class="ribbon-green">NEWS</div></div>
</div>​
```

```css
.wrapper {
  margin: 50px auto;
  width: 280px;
  height: 370px;
  background: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 8px rgba(0,0,0,0.3);
  -moz-box-shadow:    0px 0px 8px rgba(0,0,0,0.3);
  box-shadow:         0px 0px 8px rgba(0,0,0,0.3);
  position: relative;
  z-index: 90;
}

.ribbon-wrapper-green {
  width: 85px;
  height: 88px;
  overflow: hidden;
  position: absolute;
  top: -3px;
  right: -3px;
}

.ribbon-green {
  font: bold 15px Sans-Serif;
  color: #333;
  text-align: center;
  text-shadow: rgba(255,255,255,0.5) 0px 1px 0px;
  -webkit-transform: rotate(45deg);
  -moz-transform:    rotate(45deg);
  -ms-transform:     rotate(45deg);
  -o-transform:      rotate(45deg);
  position: relative;
  padding: 7px 0;
  left: -5px;
  top: 15px;
  width: 120px;
  background-color: #BFDC7A;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#BFDC7A), to(#8EBF45));
  background-image: -webkit-linear-gradient(top, #BFDC7A, #8EBF45);
  background-image:    -moz-linear-gradient(top, #BFDC7A, #8EBF45);
  background-image:     -ms-linear-gradient(top, #BFDC7A, #8EBF45);
  background-image:      -o-linear-gradient(top, #BFDC7A, #8EBF45);
  color: #6a6340;
  -webkit-box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
  -moz-box-shadow:    0px 0px 3px rgba(0,0,0,0.3);
  box-shadow:         0px 0px 3px rgba(0,0,0,0.3);
}

.ribbon-green:before, .ribbon-green:after {
  content: "";
  border-top:   3px solid #6e8900;   
  border-left:  3px solid transparent;
  border-right: 3px solid transparent;
  position:absolute;
  bottom: -3px;
}

.ribbon-green:before {
  left: 0;
}
.ribbon-green:after {
  right: 0;
}​
```

### একটি পেজের কোনায় রিবন দেয়ার সিনিপিট।

```html
<div class="ribbon-wrapper-blue">
<div class="ribbon-blue">
My Text
</div></div>
```

```css
.ribbon-wrapper-blue {
width: 350px;
height: 150px;
overflow: hidden;
position: absolute;
top: 0px;
left: 5px;
}

.ribbon-blue {
font: bold 14px arial;
color: #ADDDE7;
text-align: center;
text-shadow: rgba(255,255,255,0.5) 0px 1px 0px;
-webkit-transform: rotate(-45deg);
-moz-transform:    rotate(-45deg);
-ms-transform:     rotate(-45deg);
-o-transform:      rotate(-45deg);
position: relative;
padding: 16px 0;
left: -46px;
top: 25px;
width: 200px;
background-color: #ADDDE7;
background-image: -webkit-gradient(linear, left top, left bottom, from(#BFDC7A), to(#8EBF45));
background-image: -webkit-linear-gradient(top, #ADDDE7, #89AFB7);
background-image:    -moz-linear-gradient(top, #ADDDE7, #89AFB7);
background-image:     -ms-linear-gradient(top, #ADDDE7, #89AFB7);
background-image:      -o-linear-gradient(top, #ADDDE7, #89AFB7);
color: #6a6340;
-webkit-box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
-moz-box-shadow:    0px 0px 3px rgba(0,0,0,0.3);
box-shadow:         0px 0px 3px rgba(0,0,0,0.3);
}

.ribbon-wrapper-red {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: absolute;
    top: -6px;
    left: -6px;
}
.ribbon-red {
    font-size: 13px;
    color: white;
    text-align: center;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    position: relative;
    padding: 2px 0;
    left: -21px;
    top: 8px;
    width: 82px;
    background-color: #BFDC7A;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#990000), to(#cc0000));
    background-image: -webkit-linear-gradient(top, #990000, #cc0000);
    background-image: -moz-linear-gradient(top, #990000, #cc0000);
    background-image: -ms-linear-gradient(top, #990000, #cc0000);
    background-image: -o-linear-gradient(top, #990000, #cc0000);
    -webkit-box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
    box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
}
.ribbon-red:before, .ribbon-red:after {
    content: "";
    border-top: 3px solid #900;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    position: absolute;
    bottom: -3px;
}
.ribbon-red:before {
    left: 0;
}
.ribbon-red:after {
    right: 0;
}
```
