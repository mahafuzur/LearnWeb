---
title: Custom Radio Buttons
---
#foo:checked::before,
input[type="checkbox"] {
    position:absolute;
    clip: rect(0,0,0,0);
    clip: rect(0 0 0 0);
}

#foo:checked,
input[type="checkbox"] + label::before {
    content: url('checkbox.png');
}

input[type="checkbox"]:checked + label::before {
    content: url('checkbox-checked.png');
}

#foo doesn't reference any particular element, it's there purely to prevent browsers from implementing the later selectors if it doesn't understand that (since most browsers will drop the entire selector if any part of it fails).

[Ref](http://lea.verou.me/2011/05/rule-filtering-based-on-specific-selectors-support/)

[Demo](http://codepen.io/CreativeJuiz/pen/BiHzp)