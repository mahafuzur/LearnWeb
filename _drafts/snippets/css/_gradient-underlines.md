---
title: Gradient Underlines
---

```
a {
  position: relative;
  padding-bottom: 2px;
  text-decoration: none;
}
a:hover::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 0;
  height: 1px;
  width: 100%;
  background: #444;
  background: linear-gradient(left, transparent 0%,#444 50%,transparent 100%);
}
```