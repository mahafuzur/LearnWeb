---
layout: post
title: "Jekyll code snippet"
categories: css
---

# _config.yml file setup

In **_config.yml** file contain following data.

1. **title**: Site title goes here.
	+ **value**: any value.
2. **description**: Site description goes here.
	+ **value**: any value.
3. **markdown**: Site markdown file covertion.
	+ **value**: kramdown,redcarpet etc.
4. **baseurl**: Site subdomen name.
	+ **value**: '/example-name/', any value
5. **url**: Site real url.
	+ **value**: "http://example.com/" etc.
6. **paginate**: blog pagination number.
	+ **value**: any number,
7. **paginate_path**: give the pagination path which contain the devided page with serial number.
	+ **value**: '/blog/page:num/'
8. **permalink**: Site parmalink style.
	+ **value**: it default value.

# How to get all the post (post loop).

{% highlight html %}
{% raw %}{% for post in site.posts %}{% endraw %}
<article class="post" role="article">
<header class="post_header">
<h2><a href="{% raw %}{{site.baseurl}}{{post.url}}{% endraw %}" title="{% raw %}{{post.title}}{% endraw %}">{% raw %}{{post.title}}{% endraw %}</a></h2>
<p>Posted on: {% raw %}{{ post.date | date: "%B %d, %Y" }}{% raw %}, Posted by: <a href="{% raw %}{{site.baseurl}}{% endraw %}/author/{% raw %}{{post.author}}{% endraw %}">{% raw %}{{ post.author }}{% endraw %}</a></p>
</header>
<p>{% raw %}{{post.excerpt | strip_html}}{% endraw %} <a href="{% raw %}{{site.baseurl}}{{post.url}}{% endraw %}">Read more</a></p>
<footer class="post_footer">
<p>Posted in {% raw %}{% for tag in post.tags %}{% endraw %}<a href="{% raw %}{{ site.baseurl }}{% endraw %}/tags/index.html#{% raw %}{{ tag | replace: ' ', ''}}{% endraw %}" title="Pages tagged {% raw %}{{ tag }}{% endraw %}" rel="tag">{{ tag }}</a>{% raw %}{% unless forloop.last %}, {% endunless %}{% endfor %}{% endraw %}</p>
</footer>
</article>
{% raw %}{% endfor %}{% endraw %}
{% endhighlight %}

# Tag cloud loop.

{% highlight liquid %}
<div class="sidebar sidebar_module">
	<h2>Tag cloud</h2>
	<ul class="tag-cloud">

		{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
		{% assign sortedTags = site_tags | split:',' | sort %}

		{% for tag in sortedTags %}
			<li><a href="{{site.baseurl}}/blog/tag/index.html#{{ tag | replace:' ', '' }}">{{ tag }} [{{ site.tags[tag].size }}]</a></li>
        {% endfor %}

    </ul>
</div>
{% endhighlight %}

#new heading

{% highlight liquid %}
    {{"{% for post in site.posts "}}%}
      <li>
	  <a href="{{"{{ post.url "}}}}">{{"{{ post.title "}}}}</a>
      </li>
{{"{% endfor "}}%}
{% endhighlight %}

# Tag archive page post loop

~~~~~~~
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}
{% assign sortedTags = site_tags | split:',' | sort %}

{% for tag in sortedTags %}
	<div class="tag-archive">
		<h3 id="{{ tag | cgi_escape }}">{{ tag }}</h3>
		<ul class="taglist">
		{% for post in site.tags[tag] %}

		<li><p>{{ post.date | date: "%b %d, %Y" }}</p> | <a href="{{site.baseurl}}{{post.url}}" title="{{post.title}}">{{post.title}}</a>
		</li>

		{% endfor %}
		</ul>
	</div>
{% endfor %}  
~~~~~~~
