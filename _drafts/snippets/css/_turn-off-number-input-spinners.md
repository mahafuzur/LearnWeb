---
title: Turn Off Number Input Spinners
---

WebKit desktop browsers add little up down arrows to number inputs called spinners. You can turn them off visually like this:

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

Note that some other functionality still exists, like being able to increment the number via the scroll wheel on a mouse.
Screen Shot 2012-10-11 at 5.09.17 PM
Top, on, Bottom, off.
