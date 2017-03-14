---
title: Prevent Bounce Scroll in Lion
---

Just make sure you zero out the margin and padding on those elements as well (normal in any reset or normalization).

html, body {
  height: 100%;
  overflow: hidden;
}

Reference URL http://mir.aculo.us/2011/07/29/prevent-rubber-band-scrolling-for-single-page-apps-in-safari-5-1/