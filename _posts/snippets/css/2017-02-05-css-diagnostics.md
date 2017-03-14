---
layout: post
title: "CSS Diagnostics"
image: "slider_bg.jpg"
author: "Monir"
tags:
  - "css"
  - "diagnostics"
categories:
  - "Snippets"
type: css  
---

### নিচের স্টাইল সিট ব্যবহার করে খুব সহজেই সাধারন সি এস এস এর ভূলগুলো বের করা যায়।

#### Crise chise এর ব্যবহারকৃত স্টাইল।

```css
/* Empty Elements */
div:empty,
span:empty,
li:empty,
p:empty,
td:empty,
th:empty{
	padding: 20px;
	border: 5px dotted yellow !important;
}

/* Empty Attributes */
*[alt=""],
*[title=""],
*[class=""],
*[id=""],
a[href=""],
a[href="#"]{
	border: 5px solid yellow !important;
}

/* Deprecated Elements */
applet,
basefont,
center,
dir,
font,
isindex,
menu,
s,
strike,
u{
	border: 5px dotted red !important;
}

/* Deprecated Attributes */
*[background],
*[bgcolor],
*[clear],
*[color],
*[compact],
*[noshade],
*[nowrap],
*[size],
*[start],
*[bottommargin],
*[leftmargin],
*[rightmargin],
*[topmargin],
*[marginheight],
*[marginwidth],
*[alink],
*[link],
*[text],
*[vlink],
*[align],
*[valign],
*[hspace],
*[vspace],
*[height],
*[width],
ul[type],
ol[type],
li[type]{
	border: 5px solid red !important;
}

/* Proposed Deprecated Elements */
input[type="button"],
big,
tt{
	border: 5px dotted #33FF00 !important;
}

/* Proposed Deprecated Attributes */
*[border],
a[target],
table[cellpadding],
table[cellspacing],
*[name]{
	border: 5px solid #33FF00 !important;
}
```

#### Eric Meyer's এর ব্যবহারকৃত স্টাইল।

```css
div:empty,
span:empty,
li:empty,
p:empty,
td:empty,
th:empty{
	padding: 0.5em;
	background: yellow;
}

*[style],
font,
center{
	outline: 5px solid red;
}

*[class=""],
*[id=""]{
	outline: 5px dotted red;
}

img[alt=""]{
	border: 3px dotted red;
}
img:not([alt]){
	border: 5px solid red;
}

img[title=""]{
	outline: 3px dotted fuchsia;
}
img:not([title]){
	outline: 5px solid fuchsia;
}

table:not([summary]){
	outline: 5px solid red;
}
table[summary=""]{
	outline: 3px dotted red;
}
th{
	border: 2px solid red;
}
th[scope="col"],
th[scope="row"]{
	border: none;
}

a[href]:not([title]){
	border: 5px solid red;
}
a[title=""]{
	outline: 3px dotted red;
}
a[href="#"]{
	background: lime;
}
a[href=""]{
	background: fuchsia;
}
```

#### Brad Czerniak এর ব্যবহারকৃত স্টাইল।


```css
/*--Diagnostic--*/
/* DEPRECATED OR PROPRIETARILY-BAD TAGS */
.diag animate,.diag applet,.diag audioscope,.diag basefont,.diag blackface,.diag blink,.diag bq,.diag center,.diag comment,.diag dir,.diag embed,.diag fn,.diag font,.diag ilayer,.diag image,.diag isindex,.diag keygen,.diag layer,.diag limittext,.diag listing,.diag marquee,.diag menu,.diag multicol,.diag nobr,.diag noembed,.diag nolayer,.diag nosmartquotes,.diag plaintext,.diag s,.diag shadow,.diag sidebar,.diag spacer,.diag strike,.diag u,.diag wbr,.diag xmp{background:#ffcccc;outline:3px solid #ff0000 !important;}

/* DEPRECATED OR PROPRIETARILY-BAD ATTRIBUTES */
.diag [align],.diag [bgcolor],body.diag[alink],body.diag[background],body.diag[bgcolor],body.diag[bgproperties],body.diag[bordercolor],body.diag[bordercolordark],body.diag[bordercolorlight],body.diag[leftmargin],body.diag[link],body.diag[rightmargin],body.diag[text],body.diag[vlink],.diag a[href^="javascript:"],.diag br[clear],.diag caption[usestyle],.diag dl[compact],.diag form[target],.diag frameset[framespacing],.diag hr[noshade],.diag hr[size],.diag hr[width],.diag img[border],.diag img[controls],.diag img[dynsrc],.diag img[hspace],.diag img[ibmlogo],.diag img[internal-gopher-menu],.diag img[left_arrow],.diag img[loop],.diag img[red_bullet],.diag img[start],.diag img[vspace],.diag input[valign],.diag li[type],.diag li[value],.diag object[border],.diag object[hspace],.diag object[vspace],.diag ol[compact],.diag ol[start],.diag ol[type],.diag pre[width],.diag select[autoactivate],.diag table[frame],.diag td[height],.diag td[nowrap],.diag td[width],.diag th[height],.diag th[nowrap],.diag th[width],.diag ul[compact],.diag ul[type]{background:#ffcccc !important;outline:3px solid #ff0000 !important;}

/* EMPTY ELEMENTS */
.diag div:empty,.diag li:empty,.diag p:empty,.diag span:empty,.diag td:empty,.diag th:empty{background:#ffff00;}

/* EMPTY ATTRIBUTES */
.diag [abbr=""],.diag [accept-charset=""],.diag [accept=""],.diag [accesskey=""],.diag [action=""],.diag [align=""],.diag [alink=""],.diag [archive=""],.diag [axis=""],.diag [background=""],.diag [bgcolor=""],.diag [border=""],.diag [cellpadding=""],.diag [char=""],.diag [charoff=""],.diag [charset=""],.diag [checked=""],.diag [cite=""],.diag [class=""],.diag [classid=""],.diag [clear=""],.diag [code=""],.diag [codebase=""],.diag [codetype=""],.diag [color=""],.diag [cols=""],.diag [colspan=""],.diag [compact=""],.diag [content=""],.diag [coords=""],.diag [data=""],.diag [datetime=""],.diag [declare=""],.diag [defer=""],.diag [dir=""],.diag [disabled=""],.diag [enctype=""],.diag [face=""],.diag [for=""],.diag [frame=""],.diag [frameborder=""],.diag [headers=""],.diag [height=""],.diag [href=""],.diag [hreflang=""],.diag [hspace=""],.diag [http-equiv=""],.diag [id=""],.diag [ismap=""],.diag [label=""],.diag [lang=""],.diag [language=""],.diag [link=""],.diag [longdesc=""],.diag [marginheight=""],.diag [marginwidth=""],.diag [maxlength=""],.diag [media=""],.diag [method=""],.diag [multiple=""],.diag [name=""],.diag [nohref=""],.diag [noresize=""],.diag [noshade=""],.diag [nowrap=""],.diag [object=""],.diag [onblur=""],.diag [onchange=""],.diag [onclick=""],.diag [ondblclick=""],.diag [onfocus=""],.diag [onkeydown=""],.diag [onkeypress=""],.diag [onkeyup=""],.diag [onload=""],.diag [onmousedown=""],.diag [onmousemove=""],.diag [onmouseout=""],.diag [onmouseover=""],.diag [onmouseup=""],.diag [onreset=""],.diag [onselect=""],.diag [onsubmit=""],.diag [onunload=""],.diag [profile=""],.diag [prompt=""],.diag [readonly=""],.diag [rel=""],.diag [rev=""],.diag [rows=""],.diag [rowspan=""],.diag [rules=""],.diag [scheme=""],.diag [scope=""],.diag [scrolling=""],.diag [selected=""],.diag [shape=""],.diag [size=""],.diag [span=""],.diag [src=""],.diag [standby=""],.diag [start=""],.diag [style=""],.diag [summary=""],.diag [tabindex=""],.diag [target=""],.diag [text=""],.diag [title=""],.diag [type=""],.diag [usemap=""],.diag [valign=""],.diag :note([type="text"])[value=""],.diag [valuetype=""],.diag [version=""],.diag [vlink=""],.diag [vspace=""],.diag [width=""]{background:#ffff00;}

/* ABUSED OR MISSING REQUIRED ATTRIBUTES */
.diag a[href="#"],.diag area:not([alt]),.diag form:not([action]),.diag img:not([alt]),.diag img:not([src]),.diag map:not([name]),.diag optgroup:not([label]),.diag textarea:not([cols]),.diag textarea:not([rows]){outline:3px solid #ff0000 !important;}

/* --BAD PRACTICE-- */
.diag b,.diag big,.diag i,.diag small,.diag tt{outline:3px solid #ffff00 !important;}
.diag style{background:#ffff00 !important;display:block !important;}
.diag table table{outline:3px solid #ff0000 !important;}

.diag [style],.diag table[cellspacing],.diag table[cellpadding],body.diag[onclick],body.diag[ondblclick],body.diag[onload],body.diag[onmousedown],body.diag[onmousemove],body.diag[onmouseout],body.diag[onmouseover],body.diag[onmouseup],body.diag[onkeydown],body.diag[onkeypress],body.diag[onkeyup],body.diag[onunload],.diag [onload],.diag [onunload],.diag [onchange],.diag [onsubmit],.diag [onreset],.diag [onselect],.diag [onblur],.diag [onfocus],.diag [onkeydown],.diag [onkeypress],.diag [onkeyup],.diag [onclick],.diag [ondblclick],.diag [onmousedown],.diag [onmousemove],.diag [onmouseover],.diag [onmouseout],.diag [onmouseup]{outline:3px solid #ffff00;}

.diag label:not([for]){outline:3px solid #ffff00 !important;}
```
