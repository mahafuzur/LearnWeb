---
layout: post
title: "Keyframe Animation Syntax"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "animation"
  - "keyframes"
categories:
  - "Snippets"
type: css  
---

### সাধারন কিফ্রেম এনিমেসন্স সিনটেক্স।

```css
@-webkit-keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes NAME-YOUR-ANIMATION {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

#box {
  -webkit-animation: NAME-YOUR-ANIMATION 5s infinite; /* Safari 4+ */
  -moz-animation:    NAME-YOUR-ANIMATION 5s infinite; /* Fx 5+ */
  -o-animation:      NAME-YOUR-ANIMATION 5s infinite; /* Opera 12+ */
  animation:         NAME-YOUR-ANIMATION 5s infinite; /* IE 10+, Fx 29+ */
}
```

### যদি starting and ending properties এক হলে কমা ব্যবহার করে প্রপার্টিকে আলাদা করতে হবে।

```css
@keyframes animation{
  0%, 100% {
    font-size: 10px;
  }
  50% {
    font-size: 12px;
  }
}
```
### আলাদা আলাদা প্রপার্টির নাম এবং তাদের সম্ভাব্ব মান।

```css
.box {
 animation-name: bounce;
 animation-duration: 4s;
 animation-iteration-count: 10;
 animation-direction: alternate;
 animation-timing-function: ease-out;
 animation-fill-mode: forwards;
 animation-delay: 2s;
}
```
### বিভিন্ন প্রপার্টি এবং তাদের সম্ভাব্ব মান।

	- timing-function		:	ease, ease-out, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) (e.g. cubic-bezier(0.5, 0.2, 0.3, 1.0))
	- duration & delay	:	Xs or Xms
	- duration-count		:	X
	- fill-mode			:	forwards, backwards, both, none
	- animation-direction	:	normal, alternate
	- Animation Shorthand	:	animation:test time delay count alternate backwards



### ট্রান্সফরমেশন এবং এনিমেশন একসাথে।

```css
@keyframes infinite-spinning {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

### অনেকগুলো এনিমেশন একসাথে ব্যবহার করার নিয়ম।

```css
.animate-this {
   animation:
      first-animation 2s infinite,
      another-animation 1s;
}
```

### Steps() এর ব্যবহার।

#### এটি এনিমেশন কতটি ফ্রেমের ভিতরে হবে তা ঠিক করে দেয়।

```css
@keyframes move {
  from { top: 0; left: 0; }
  to   { top: 100px; left: 100px; }
}
```

#### এখন যদি steps(10) কোডে ব্যবহার হয় তবে এনিমেশনটি ১০টি ধাপে হবে।

```css
.move {
  animation: move 10s steps(10) infinite alternate;
}
```
