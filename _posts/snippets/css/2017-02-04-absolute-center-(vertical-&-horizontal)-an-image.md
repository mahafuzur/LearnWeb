---
layout: post
title: "Absolute Center (Vertical & Horizontal) an Image"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "centering element"
categories:
  - "Snippets"
type: css
---

### কিভাবে যেকোন ডিভকে মাঝখানে অনতে হয় সেটির নতুন সিনিপিট।

```css
*{
	margin:0;
	padding: 0;
	box-sizing: border-box;
}
.centered{
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
}
```

### সিএসএস এর ব্র্যকগ্রাউন্ড ইমেজ টেকনিক।

```css
html{
   width:100%;
   height:100%;
   background: url(logo.png) center center no-repeat;
}
```

### সিএসএস এবং ইনলাইন ইমেজ টেকনিক।

```css
img {
   position: absolute;
   top: 50%;
   left: 50%;
   width: 500px;
   height: 500px;
   margin-top: -250px; /* Half the height */
   margin-left: -250px; /* Half the width */
}
```
```html
<img src="image.jpg" />
```

### টেবিল টেকনিক।

```css
html, body, #wrapper {
   height:100%;
   width: 100%;
   margin: 0;
   padding: 0;
   border: 0;
}

#wrapper td {
   vertical-align: middle;
   text-align: center;
}
```


```html
<html>
<body>
   <table id="wrapper">
      <tr>
         <td><img src="logo.png" alt="" /></td>
      </tr>
   </table>
</body>
</html>
```

### ক্রসব্রাউজার সার্পোট সিনিপিট।

```html
<div id="page">
	<div id="content_container">
		<div id="content">
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quasi, molestiae veniam! Molestiae reiciendis explicabo laborum, nihil ab in magnam, dolor incidunt distinctio possimus dolorum deserunt fugiat praesentium quo.</p>
			<p>
				<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, cum expedita aliquam eum quisquam a nihil molestias dolore impedit earum eaque libero, tenetur dignissimos. Animi quaerat nihil sunt blanditiis dolores!</span>
				<span>Omnis inventore consequatur ut atque voluptatem iusto, animi numquam distinctio vitae commodi! Quod amet aspernatur nesciunt animi, placeat laborum doloremque aliquid cum nobis deserunt ea mollitia fugiat, enim incidunt porro.</span>
				<span>Libero repudiandae, debitis nam laudantium, atque vero minima totam enim repellendus iure, nobis in esse odit est aperiam voluptatem ullam quo, reprehenderit veritatis provident eos. Nesciunt, quos fugiat tenetur nisi.</span>
			</p>
		</div>
	</div>
</div>
```

```css
* {
    margin: 0;
    padding: 0;
}

#page {
    display: table;
    overflow: hidden;
    margin: 0px auto;
}

*:first-child+html #page {
    position: relative;
}


/*ie7*/

* html #page {
    position: relative;
}


/*ie6*/

#content_container {
    display: table-cell;
    vertical-align: middle;
}

*:first-child+html #content_container {
    position: absolute;
    top: 50%;
}


/*ie7*/

* html #content_container {
    position: absolute;
    top: 50%;
}


/*ie6*/

*:first-child+html #content {
    position: relative;
    top: -50%;
}


/*ie7*/

* html #content {
    position: relative;
    top: -50%;
}


/*ie6*/

html,
body {
    height: 100%;
}

#page {
    height: 100%;
    width: 465px;
}

```

### ক্রসব্রাউজার সার্পোট সিনিপিট- ২।

```html
<div class="outter_div">
	<div class="middle_div">

		<div class="inner_div">
			<h1>Cross-browser Centering</h1>

			<p>Vertical & horizontal centering of a content box with a fixed width & flexible height achieved with 3 nested DIVs and a bit of CSS. These are the important parts:</p>

			<ol>
				<li><b>outter DIV:</b> display: table; position: absolute; height: 100%; width: 100%</li>
				<li><b>middle DIV:</b> display: table-cell; vertical-align: middle</li>
				<li><b>inner DIV:</b> margin-left: auto; margin-right: auto; width: [whatever width you want]</li>
			</ol>


			<p>To accommodate for IE 7 & older, use a separate style sheet with these changes:</p>

			<ol>
				<li><b>link to the style sheet:</b> &lt;!--[if lte IE 7]&gt;&lt;link rel="stylesheet... /&gt;&lt;![endif]--&gt;</li>
				<li><b>outter DIV:</b> display: inline-block; top: 0</li>
				<li><b>middle DIV:</b> display: inline-block; top: 50%, position: relative</li>
				<li><b>inner DIV:</b> display: inline-block; top: -50%, position: relative</li>
			</ol>

			<p>You can add more text content to test the dynamic height.</p>
		</div>
	</div>
</div>
```

```css
body {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
}

div.outter_div {
	width: 100%;
	padding: 0;
	display: table;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	margin: 0;
}

div.middle_div {
	padding: 0;
	vertical-align: middle;
	display: table-cell;
	margin: 0;
}

div.inner_div{
	width: 600px;
	margin: 0 auto;
}
```
