---
layout: page
title: Categories
bigimg: /img/category.jpg
---

<div class="post">
	<!-- <h1 class="pageTitle">Categories</h1> -->
  <hr>
	<ul>
		<li><a href="python">Python</a></li>
    <ul>
    	{% for post in site.categories.python %}
    	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
    	{% endfor %}
    </ul>
	</ul>
  <ul>
		<li><a href="ccplus">C/C++</a></li>
    <ul>
    	{% for post in site.categories.ccplus %}
    	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
    	{% endfor %}
    </ul>
	</ul>
  <ul>
		<li><a href="github_blog">Github Blog</a></li>
    <ul>
    	{% for post in site.categories.python %}
    	<li><a href="{{ post.url }}">{{ post.title }}</a></li>
    	{% endfor %}
    </ul>
	</ul>
</div>
