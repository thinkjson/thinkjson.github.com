---
layout: nil
permalink: /feed.rss
---
<?xml version="1.0"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">

  <channel>
    <title>thinkjson.com | Mark Cahill</title> 
    <link>http://www.thinkjson.com/</link> 
    <description>Web application developer specializing in scalable web services and elegant user experiences</description> 
    <managingEditor>rss@thinkjson.com (RSS Feed)</managingEditor> 
    <webMaster>rss@thinkjson.com (RSS Feed)</webMaster>
    <atom:link href="http://www.thinkjson.com/feed.rss" rel="self" type="application/rss+xml" />
    <language>en-us</language>
    <pubDate>{{ site.time | date: "%a, %d %b %Y %H:%M:%S %Z" }}</pubDate>
    <lastBuildDate>{{ site.time | date: "%a, %d %b %Y %H:%M:%S %Z" }}</lastBuildDate>

    {% for post in site.posts limit:10 %}
    {% if post.date != "1900-01-01" %}
    <item>
      <title>{{ post.title }}</title>
      <link>http://thinkjson.com{{ post.url }}</link>
      <pubDate>{{ post.date | date: "%a, %d %b %Y %H:%M:%S %Z" }}</pubDate>
      <author>rss@thinkjson.com (Mark Cahill)</author>
      <guid>http://thinkjson.com{{ post.url }}</guid>
      <description>{{ post.content | xml_escape }}</description>
    </item>
    {% endif %}
    {% endfor %}

  </channel> 
</rss>