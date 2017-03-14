---
title: Basic Link Rollover as CSS Sprite
---


a {
       display: block;
       background: url(sprite.png) no-repeat;
       height: 30px;
       width: 250px;
}

a:hover {
       background-position: 0 -30px;
}


The set height and width ensure only a portion of the sprite.png graphic is shown. The rollover shifts the position of the background image, revealing a different area of the graphic.