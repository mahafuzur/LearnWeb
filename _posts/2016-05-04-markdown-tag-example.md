---
layout: post
title: "Markdown tag example"
---
# Markdown heading

For markdown heading add **#** symbole.

`````
# h1
## h2
### h3
#### h4
##### h5
###### h6
`````

# Markdown blockquote

For Markdown blockquote use **>** symbole.

~~~~~~~
> Blockquote.
>
> > Second paragraph in the blockquote, nested.
> ## This is an h2 in a blockquote
~~~~~~~

# Markdown text formating

For Markdown text formating use single * for *empesize* text, ** for **strong** text.

~~~~~~~
For Markdown text formating use single * for *empesize* text, ** for **strong** text.
~~~~~~~

# Markdown list item.

For Markdown list item use * or + or - for unorder list, for orderlist use any serial number.

1. Unorder list

~~~~~~~
* Candy.
* Gum.
* Booze.

+ Candy.
+ Gum.
+ Booze.

- Candy.
- Gum.
- Booze.
~~~~~~~

2. Ordered list

~~~~~~~
1. List item 1
2. List item 2
3. List item 3

a. List item 1
b. List item 1
c. List item 1
~~~~~~~

# Markdown link

For markdown link use following format.

~~~~~~~
//normal link
[inline link](http://xrl.us/ "optional title")
//referance link
[link][1]
[1]: http://xrl.us/ "optional title"
~~~~~~~

# Markdown image adding

For markdown inserting image use the following markup.

~~~~~~~
//normal image
![Alt text](/path/to/img.jpg "Optional title")
//referance image
![Alt text][1]
[1]: /path/to/img.jpg "Optional title"
~~~~~~~

# Markdown code example

For markdown code , inline code surround with ` and `, code block surround with following way.

{% highlight html %}
~~~~~~~
<h2>This is a heading</h2>
<p>This is a paragraph</p>
~~~~~~~
{% endhighlight %}
