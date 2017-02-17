---
layout: post
title: "Use datalist tag for common data"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "html"
  - "datalist tag"
categories:
  - "Snippets"
---

### কমন ডাটার ক্ষেত্রে `datalist` ট্যাগ ব্যবহার করা যায়।

```html
<div class="container">
	<input list="browsers">

	<datalist id="browsers">
		<option value="Internet Explorer">
		<option value="Firefox">
		<option value="Chrome">
		<option value="Opera">
		<option value="Safari">
	</datalist>
</div>
```
