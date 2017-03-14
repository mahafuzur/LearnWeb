---
layout: post
title: "Remove Margins for First/Last Elements"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "hack"
  - "removing margin"
categories:
  - "Snippets"
type: css  
---

### প্রথম এবং শেষ ইলিমেন্ট থেকে মার্জিন বাদদেবার সিনিপিট।

#### Using classes

```css
.first { margin-top: 0 !important; margin-left: 0 !important; }
.last { margin-bottom: 0 !important; margin-right: 0 !important; }
```

#### Using Pseudo selectors
```css
* > :first-child { margin-top: 0 !important; margin-left: 0 !important; }
* > :last-child { margin-bottom: 0 !important; margin-right: 0 !important; }
```
Replace the * with more specific selectors as your needs.

Lets say you had a floated block of 9 elements, 3 by 3. It's very common that you might need to remove the right margin from the 3rd, 6th, and 9th items. The nth-child pseudo-selector might be able to help there:


```css
* > :nth-child(3n+3) { margin-right: 0; }
```

#### Browser support

* :first-child and :last-child works worked in latest browsers, dont work in ie6.
* :first-child worked in IE 7+.
* :nth-child works in Safari 3+, Firefox 3.5+, and Chrome 1+, but still doesn't work in IE8.

[Ref](http://blog.doliver.co.uk/2010/01/hacking-paragraph-spacing-with-css-despite-ie/)
