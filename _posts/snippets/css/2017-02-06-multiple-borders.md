---
layout: post
title: "Multiple Borders"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "border"
  - "multiple borders"
categories:
  - "Snippets"
type: css  
---

### একের অধিক বর্ডার ব্যবহারের টেকনিক।


#### Using pseudo elements.

```css
.borders {
  position: relative;
  border: 5px solid #f00;
}

.borders:before {
  content: " ";
  position: absolute;
  z-index: -1;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border: 5px solid #ffea00;
}
```
[Demo]()

#### Using Outline

```css
.borders {
  border: 5px solid blue;
  outline: 5px solid red;
}
```

#### Using box-shadow

```css
.borders{
  box-shadow:
    0 0 0 10px hsl(0, 0%, 80%),
    0 0 0 15px hsl(0, 0%, 90%);/*blur must 0 */
}
```
[Demo]()


#### Using a clipped background

```css
.borders{
  border: solid 1px #f06d06;
  padding: 5px;
  background-clip: content-box; /* support: IE9+ */
  background-color: #ccc;
}
```

#### On an input

  need update
