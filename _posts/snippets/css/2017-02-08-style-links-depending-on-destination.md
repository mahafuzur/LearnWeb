---
layout: post
title: "Style Links Depending on Destination"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "links style"
categories:
  - "Snippets"
type: css  
---

### লিংকের এট্রিবিউটের ওপর ভিত্তি করে লিংক এর বিভিন্ন রকমের স্টাইল।

#### For External link

```css
a[href^="http://"] {
        /* fully valid URL, likely external link */
}
```

#### For Specific website

```css
a[href="http://google.com"] {
        /* link to specific website */
}
```
#### For internal link

```css
a[href^="/"], a[href^=".."] {
        /* internal relative link */
}
```

#### Email Links

```css
a[href^="mailto:"] {
        /* email link */
}
```

#### For File extension

```css
a[href$=".pdf"] {
        /* PDF file */
}

a[href$=".doc"] {
        /* Microsoft Word document */
}

a[href$=".mp3"] {
        /* Music file */
}

a[href$=".zip"] {
        /* Archive file */
}
```
