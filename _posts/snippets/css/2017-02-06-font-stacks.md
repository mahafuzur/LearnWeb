---
layout: post
title: "Css Font Stacks"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "font-family"
  - "font-stack"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন রকমের ফন্ট স্টাক, অর্থাৎ যদি ব্রাউজার প্রথম ফন্টটি পায় তবে সেটি ব্যবহার করবে এবং না পেলে পরেরটি ব্যবহার করবে, এভাবে পর্যায়ক্রমে শেষ পর্যন্ত যেতে থাকবে।

#### Times New Roman-based stack

```css
/* Times New Roman-based stack */
font-family: Cambria, "Hoefler Text", Utopia, "Liberation Serif", "Nimbus Roman No9 L Regular", Times, "Times New Roman", serif;
```

#### Modern Georgia-based serif stack

```css
/* Modern Georgia-based serif stack */
font-family: Constantia, "Lucida Bright", Lucidabright, "Lucida Serif", Lucida, "DejaVu Serif", "Bitstream Vera Serif", "Liberation Serif", Georgia, serif;
```

#### Traditional Garamond-based serif stack

```css
/* Traditional Garamond-based serif stack */
font-family: "Palatino Linotype", Palatino, Palladio, "URW Palladio L", "Book Antiqua", Baskerville, "Bookman Old Style", "Bitstream Charter", "Nimbus Roman No9 L", Garamond, "Apple Garamond", "ITC Garamond Narrow", "New Century Schoolbook", "Century Schoolbook", "Century Schoolbook L", Georgia, serif;
```

#### Helvetica/Arial-based sans serif stack

```css
/* Helvetica/Arial-based sans serif stack */
font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
```

#### Verdana-based sans serif stack

```css
/* Verdana-based sans serif stack */
font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
```

#### Trebuchet-based sans serif stack

```css
/* Trebuchet-based sans serif stack */
font-family: "Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif;
```

#### Impact-based sans serif stack

```css
/* Impact-based sans serif stack */
font-family: Impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", sans-serif;
```

#### Monospace stack

```css
/* Monospace stack */
font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;
```
