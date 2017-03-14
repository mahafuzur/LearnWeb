---
title: Using @font-face
---
The @font-face rule allows custom fonts to be loaded on a webpage. Once added to a stylesheet, the rule instructs the browser to download the font from where it is hosted, then display it as specified in the CSS.

Without the rule, our designs are limited to the fonts that are already loaded on a user's computer, which vary depending on the system being used. Here's a nice breakdown of existing system fonts.
Deepest Possible Browser Support

This is the method with the deepest support possible right now. The @font-face rule should be added to the stylesheet before any styles.

@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.eot'); /* IE9 Compat Modes */
  src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}

Then use it to style elements like this:

body {
  font-family: 'MyWebFont', Fallback, sans-serif;
}

Practical Level of Browser Support

Things are shifting heavily toward WOFF and WOFF 2, so we can probably get away with:

@font-face {
  font-family: 'MyWebFont';
  src:  url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
}

Chrome 	Safari 	Firefox 	Opera 	IE 	Android 	iOS
5+ 	5.1+ 	3.6+ 	11.50+ 	9+ 	4.4+ 	5.1+
Slightly Deeper Browser Support

If you need a sort of a happy medium between full support and practical support, this will cover a few more bases:

@font-face {
  font-family: 'MyWebFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff'),
       url('myfont.ttf') format('truetype');
}

Chrome 	Safari 	Firefox 	Opera 	IE 	Android 	iOS
3.5+ 	3+ 	3.5+ 	10.1+ 	9+ 	2.2+ 	4.3+
Super Progressive Browser Support

If we're staking the farm on WOFF, then we can expect things to shift toward WOFF2 at some point in time. That means we can live on the bleeding edge with:

@font-face {
  font-family: 'MyWebFont';
  src: url('myfont.woff2') format('woff2');
}

Chrome 	Safari 	Firefox 	Opera 	IE 	Android 	iOS
36+ 	No 	35+ with flag 	23+ 	No 	37 	No
Alternative Techniques
@import

While @font-face is excellent for fonts that are hosted on our own servers, there may be situations where a hosted font solution is better. Google Fonts offers this as a way to use their fonts. The following is an example of using @import to load the Open Sans font from Google Fonts:

@import url(//fonts.googleapis.com/css?family=Open+Sans);

Then we can use it to style elements:

body {
  font-family: 'Open Sans', sans-serif;
}

If you open the URL for the font, you can actually see all the @font-face work being done behind the scenes.

A benefit of using a hosted service is that it is likely to include all the font file variations, which ensures deep cross-browser compatibility without having to host all those files ourselves.

See the Pen Using @import for custom fonts by CSS-Tricks (@css-tricks) on CodePen.
<link>ing a stylesheet

Similarly, you could link to the same asset as you would any other CSS filter, in the <head> of the HTML document rather than in the CSS. Using the same example from Google Fonts, this is what we would use:

<link href='//fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

Then, we can style our elements like the other methods:

body {
  font-family: 'Open Sans', sans-serif;
}

Again, this is importing the @font-face rules but, instead of injecting them to our stylesheet, they are added to our HTML <head> instead.

See the Pen Using for custom fonts by CSS-Tricks (@css-tricks) on CodePen.

It's about the same thing... both techniques download the assets needed.
Understanding Font File Types

The original snippet at the top of this post references a lot of files with strange extensions. Let's go over each one and get a better understanding of what they mean.
WOFF / WOFF2

Stands for: Web Open Font Format.

Created for use on the web, and developed by Mozilla in conjunction with other organizations, WOFF fonts often load faster than other formats because they use a compressed version of the structure used by OpenType (OTF) and TrueType (TTF) fonts. This format can also include metadata and license info within the font file. This format seems to be the winner and where all browsers are headed.

WOFF2 is the next generation of WOFF and boasts better compression than the original.
SVG / SVGZ

Stands for: Scalable Vector Graphics (Font)

SVG is a vector re-creation of the font, which makes it much lighter in file size, and also makes it ideal for mobile use. This format is the only one allowed by version 4.1 and below of Safari for iOS. SVG fonts are not currently supported by Firefox, IE or IE Mobile. Firefox has postponed implementation indefinitely to focus on WOFF.

SVGZ is the zipped version of SVG.
EOT

Stands for: Embedded Open Type.

This format was created by Microsoft (the original innovators of @font-face) and is a proprietary file standard supported only by IE. In fact, it’s the only format that IE8 and below will recognize when using @font-face.
OTF / TTF

Stands for: OpenType Font and TrueType Font.

The WOFF format was initially created as a reaction to OTF and TTF, in part, because these formats could easily (and illegally) be copied, However, OpenType has capabilities that many designers might be interested in (ligatures and such).
A Note on Performance

Web fonts are great for design but it's important to also understand their impact on web performance. Custom fonts often cause sites to take a performance hit because the font must be downloaded before it's displayed.

A common symptom used to be a brief moment where fonts first load as the fallback, then blink to the downloaded font. Paul Irish has an older post on this (dubbed "FOUT": Flash Of Unstyled Text).

These days, browsers are generally hiding the text before the custom font loads by default. Better or worse? You decide. You can exert some control over this through various techniques. A little out-of-scope for this article, but here's a trifecta of articles by Zach Leatherman to get you started down the rabbit hole:

    Better @font-face with Font Load Events
    How we use web fonts responsibly, or, avoiding a @font-face-palm
    Flash of Faux Text—still more on Font Loading

Here are some more considerations when implementing custom fonts:
Watch the file size

Fonts can be surprisingly heavy, so lean towards options that offer lighter versions. For example, favor a font set that is 50KB versus one that weighs 400KB.
Limit the character set, if possible

Do you really need the bold and black weights for one font? Limiting your font sets to load only what is used is a good idea and there are some good tips on that here.
Consider system fonts for small screens

Many devices are stuck on crappy connections. One trick might be to target larger screens when loading the custom font using @media.

In this example, screens smaller than 1000px will be served a system font instead and screens that wide and above will be served the custom font.

@media (min-width: 1000px) { 
  body {
    font-family: 'FontName', Fallback, sans-serif; 
  }
}

Font Services

There are a number of services that will host fonts and provide access to commercially-licensed fonts as well. The benefits of using a service often boil down to having a large selection of legal fonts delivered efficiently (e.g. serving them on a speedy CDN).

Here are a few hosted font services:

    Cloud Typography
    Typekit
    Fontdeck
    Webtype
    Fontspring
    Typotheque
    Fonts.com
    Google Fonts
    Font Squirrel

What About Icon Fonts?

It's true, @font-face can load a font file full of icons that can be used for an icon system. However, I think you're far better off using SVG as an icon system. Here's a comparison of the two methods.
More Resources

    Basics of Google Font API
    CSS Font Families

Reference URL 