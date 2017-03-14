---
layout: post
title: "Media Queries for Standard Devices"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "media queries"
  - "responsivedesign"
categories:
  - "Snippets"
type: css  
---

### বিভিন্ন রকমের মিডিয়া ক্রোয়েরি, আলাদা আলাদা ডিভাইছের জন্যে।

#### iPhones

```css
/* ----------- iPhone 4 and 4S ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 5 and 5S ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6 ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {

}

/* Landscape */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- iPhone 6+ ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3) {

}

/* Portrait */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
```

#### Galaxy Phones

```css
/* ----------- Galaxy S3 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2) {

}

/* Portrait */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- Galaxy S4 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}

/* ----------- Galaxy S5 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
```

#### HTC Phones

```css
/* ----------- HTC One ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
```

#### Nexus Phones

```css
/* ----------- Nexus 4 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 384px)
  and (device-height: 592px)
  and (-webkit-device-pixel-ratio: 2) {

}

/* Portrait */
@media screen
  and (device-width: 384px)
  and (device-height: 592px)
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 384px)
  and (device-height: 592px)
  and (-webkit-device-pixel-ratio: 2)
  and (orientation: landscape) {

}

/* ----------- Nexus 5 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 592px)
  and (-webkit-device-pixel-ratio: 3) {

}

/* Portrait */
@media screen
  and (device-width: 360px)
  and (device-height: 592px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 360px)
  and (device-height: 592px)
  and (-webkit-device-pixel-ratio: 3)
  and (orientation: landscape) {

}
```

#### iPads

```css
/* ----------- iPad mini ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Portrait */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* ----------- iPad 1 and 2 ----------- */
/* Portrait and Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Portrait */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 1) {

}

/* ----------- iPad 3 and 4 ----------- */
/* Portrait and Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Portrait */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) {

}

/* Landscape */
@media only screen
  and (min-device-width: 768px)
  and (max-device-width: 1024px)
  and (orientation: landscape)
  and (-webkit-min-device-pixel-ratio: 2) {

}
```

#### Galaxy Tablets

```css
/* ----------- Galaxy Tab 10.1 ----------- */

/* Portrait and Landscape */
@media
  (min-device-width: 800px)
  and (max-device-width: 1280px) {

}

/* Portrait */
@media
  (max-device-width: 800px)
  and (orientation: portrait) {

}

/* Landscape */
@media
  (max-device-width: 1280px)
  and (orientation: landscape) {

}
```

#### Nexus Tablets


```css
/* ----------- Asus Nexus 7 ----------- */

/* Portrait and Landscape */
@media screen
  and (device-width: 601px)
  and (device-height: 906px)
  and (-webkit-min-device-pixel-ratio: 1.331)
  and (-webkit-max-device-pixel-ratio: 1.332) {

}

/* Portrait */
@media screen
  and (device-width: 601px)
  and (device-height: 906px)
  and (-webkit-min-device-pixel-ratio: 1.331)
  and (-webkit-max-device-pixel-ratio: 1.332)
  and (orientation: portrait) {

}

/* Landscape */
@media screen
  and (device-width: 601px)
  and (device-height: 906px)
  and (-webkit-min-device-pixel-ratio: 1.331)
  and (-webkit-max-device-pixel-ratio: 1.332)
  and (orientation: landscape) {

}

# Kindle Fire

```css
/* ----------- Kindle Fire HD 7" ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 800px)
  and (max-device-width: 1280px)
  and (-webkit-min-device-pixel-ratio: 1.5) {

}

/* Portrait */
@media only screen
  and (min-device-width: 800px)
  and (max-device-width: 1280px)
  and (-webkit-min-device-pixel-ratio: 1.5)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 800px)
  and (max-device-width: 1280px)
  and (-webkit-min-device-pixel-ratio: 1.5)
  and (orientation: landscape) {

}

/* ----------- Kindle Fire HD 8.9" ----------- */

/* Portrait and Landscape */
@media only screen
  and (min-device-width: 1200px)
  and (max-device-width: 1600px)
  and (-webkit-min-device-pixel-ratio: 1.5) {

}

/* Portrait */
@media only screen
  and (min-device-width: 1200px)
  and (max-device-width: 1600px)
  and (-webkit-min-device-pixel-ratio: 1.5)
  and (orientation: portrait) {
}

/* Landscape */
@media only screen
  and (min-device-width: 1200px)
  and (max-device-width: 1600px)
  and (-webkit-min-device-pixel-ratio: 1.5)
  and (orientation: landscape) {

}
```

#### Laptops


Media Queries for laptops are a bit of a juggernaut. Instead of targeting specific devices, try specifying a general screen size range, then distinguishing between retina and non-retina screens.

```css
/* ----------- Non-Retina Screens ----------- */
@media screen
  and (min-device-width: 1200px)
  and (max-device-width: 1600px)
  and (-webkit-min-device-pixel-ratio: 1) {
}

/* ----------- Retina Screens ----------- */
@media screen
  and (min-device-width: 1200px)
  and (max-device-width: 1600px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) {
}
```


#### Apple Watch

```css
/* ----------- Apple Watch ----------- */
@media
  (max-device-width: 42mm)
  and (min-device-width: 38mm) {

}
```


#### Moto 360 Watch

```css
/* ----------- Moto 360 Watch ----------- */
@media
  (max-device-width: 218px)
  and (max-device-height: 281px) {

}
```

#### [Ref](http://cssmediaqueries.com/)

#### [Ref](http://responsivedesign.is/articles/why-you-dont-need-device-specific-breakpoints)
