---
layout: post
title: "Ready to use input style"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "input"
  - "ready to use"
categories:
  - "Snippets"
type: css  
---

### ইনপুটের জন্যে স্টাইল।

#### Basic Input Style

```css
.simple-input {
  display: block;
  padding: 5px;
  border: 4px solid #F1B720;
  border-radius: 5px;
  color: #333;
  transition: all 0.3s ease-out;
}

.simple-input:hover { border-radius: 8px; }
.simple-input:focus {
  outline: none;
  border-radius: 8px;
  border-color: #EBD292;
}
```

#### Mac Input

```css
.mac {
  display: block;
  border: none;
  border-radius: 20px;
  padding: 5px 8px;
  color: #333;
  box-shadow:
    inset 0 2px 0 rgba(0,0,0,.2),
    0 0 4px rgba(0,0,0,0.1);
}

.mac:focus {
  outline: none;
  box-shadow:
    inset 0 2px 0 rgba(0,0,0,.2),
    0 0 4px rgba(0,0,0,0.1),
    0 0 5px 1px #51CBEE;
}
```

#### Depth & Gradient Input

```css
.depth {
  display: block;
  border: 1px solid silver;
  background: linear-gradient(#eee, #fff);
  transition: all 0.3s ease-out;
  padding: 5px;
  color: #555;
}

.depth:focus {
  outline: none;
  background-position: 0 -1.7em;
}
```

#### Only Line Input

```css
.line {
  display: block;
  border: none;
  color: #333;
  background: transparent;
  border-bottom: 1px dotted black;
  padding: 5px 2px 0 2px;
}

.line:focus {
  outline: none;
  border-color: #51CBEE;
}
```
