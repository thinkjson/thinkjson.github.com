---
layout: default
title: thinkjson.com
---

{% assign first_post = site.posts.first %}
<div> 
    <h2><a href="{{ first_post.url }}">{{ first_post.title }}</a></h2> 
    <div class="description"> 
        Posted {{ first_post.date | date:"%A, %B %d, %Y" }}
    </div>
    {{ first_post.excerpt }}
    <h3 style="text-align: right;">
        <a href="{{ first_post.url }}">Read the rest of the article</a>
    </h3> 
</div>

<hr />

<div class="posts">
	{% for post in site.posts %}
	{% if post != site.posts.first and post.layout == "post" %}
	<a href="{{ post.url }}">{{ post.title }}</a>

	<div class="description">{{ post.date | date:"%A, %B %d, %Y" }}</div>
	{% endif %}
	{% endfor %}
</div>