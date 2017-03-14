---
title: Picross Style Buttons
---

```css
.btn {
  color: white;
  font-family: Helvetica, Arial, Sans-Serif;
  font-size: 20px;
  text-decoration: none;
  text-shadow: -1px -1px 1px #616161;
  position: relative;
  padding: 15px 30px;
  -webkit-box-shadow: 5px 5px 0 #666;
  -moz-box-shadow: 5px 5px 0 #666;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  margin: 0 10px 0 0;
}

.btn:hover {
  -webkit-box-shadow: 0px 0px 0 #666;
  -moz-box-shadow: 0px 0px 0 #666;
  top: 5px;
  left: 5px;
}
```


# jQuery Technique


```html
<div class="rela">
  <a class="btn green btn1" href="index.html">Jack</a>
  <span class="shadow"></span>
</div>
```

```css
.rela {
	display: block;
	width: 96px;
	height: 56px;
	position: relative;
	margin: 10px;
}
.btn {
	display: block;
	line-height: 56px;
	text-align: center;
	color: white;
	font-family: Helvetica, Arial, Sans-Serif;
	font-size: 20px;
	text-decoration:none;
	text-shadow: -1px -1px 1px #616161;
	position: relative;
}
.shadow {
	position: absolute;
	top:5px;
	left: 5px;
	background: #666;
	z-index: -1;
	width: 100%;
	height: 100%;
}
```

```jQuery
$(".btn").hover(function(){
	$(this).stop().animate({ 
		top: "5",
		left: "5"
	}, 100 );
},
function(){
	$(this).stop().animate({ 
		top: 0,
		left: 0
	}, 100 );
});
```

[Need Demo]()