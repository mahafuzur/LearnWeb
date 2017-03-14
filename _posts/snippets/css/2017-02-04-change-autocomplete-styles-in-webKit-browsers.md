---
layout: post
title: "Change Autocomplete Styles in WebKit Browsers"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "input"
  - "autocomplete"
categories:
  - "Snippets"
type: css  
---

### অটোকম্পিলিট স্টাইল গুগোল ক্রোমের জন্যে।

```css
/* Change Autocomplete styles in Chrome*/
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus
input:-webkit-autofill,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 1px solid green;
  -webkit-text-fill-color: green;
  -webkit-box-shadow: 0 0 0px 1000px #000 inset;
  transition: background-color 5000s ease-in-out 0s;
}
```

[Demo](http://codepen.io/team/css-tricks/pen/oxyJxR/)
