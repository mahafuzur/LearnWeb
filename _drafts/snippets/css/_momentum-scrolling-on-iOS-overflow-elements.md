---
title: Momentum Scrolling on iOS Overflow Elements
---

Web pages on iOS by default have a "momentum" style scrolling where a flick of the finger sends the web page scrolling and it keeps going until eventually slowing down and stopping as if friction is slowing it down. Like if you were to push a hockey puck across the ice or something. You might think that any element with scrolling would have this behavior as well, but it doesn't. You can add it back with a special property.

.module {
  width: 300px;
  height: 200px;

  overflow-y: scroll; /* has to be scroll, not auto */
  -webkit-overflow-scrolling: touch;
}

