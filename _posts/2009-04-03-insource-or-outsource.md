---
title: In Source or Outsource?
uri: insource-or-outsource
layout: post
posted: "2009-04-03 17:00:00"
---

There has been much debate in higher education over whether to outsource application development, or to develop solutions in-house. With the proliferation of open source development tools, and a lack of funds in many private institutions of higher education for the purchase of university-wide software, many universities are increasingly choosing to develop their own solutions. The university where I work is no exception. We investigated dozens of high-priced closed source solutions, and just as many over-complicated open source solutions, before deciding to dedicate resources to developing an in house solution for content management. The final product was very successful - far below initial cost estimates, and with all the custom features that our community needed.
<!--more-->

When we decided that it was time to pursue a reporting application for advancement, we went through the same process. This time, however, the cost of closed source business intelligence software was through the roof. One vendor required that we purchase a brand new Dell application server, as well as a SAN to store the data. The final price tag was a staggering quarter of a million dollars. There was no budget for such an expense, so the project was scrapped.

Not to be defeated that easily, our team sought out open source business intelligence. The leaders in this arena include companies like <a title="Pentaho" href="http://www.pentaho.com/">Pentaho</a> and <a title="JasperSoft" href="http://www.jaspersoft.com/">JasperSoft</a>. Both solutions required a Tomcat application server with more power than we could afford, and a team of java developers. Pentaho in particular really pushed this development model. The answer to any our tech support questions seemed to be, "Well have your java developers do such and such." Sorry. We don't have a java developer. (If you do, then I highly recommend them. Pentaho's tech support was very responsive)

In the end, we decided to go it alone and see what we could do. Our budget was clear: no money would be allocated until we proved we could do it.

So we did. We grabbed an extra desktop computer from one of our offices, and loaded it up with Apache, MySQL, and PHP. I had some knowledge of working with PHP from doing web site design, and my superior had extensive .NET training. We hacked away at the problem until we got a working report, and then scheduled a meeting. Our reporting application was very humble back then. Each report was built from raw PHP embedded into a page on a Wordpress blog. This was definitely not the original intention for Wordpress. It's a blogging platform. Nonetheless, we got buy in from our bosses, and went to work developing a serious web reporting application.

Now, we track changes to our application with subversion. We've rebuilt our application on a popular PHP framework called Codeigniter. The application responds to most requests within a second, and large, complicated reports are generated in under 10 seconds. The application has proven to be scalable, with over 60 users now using the application on a daily basis. We have over 100 reports, all managed in groups for easy access control.

Ours was a happy ending. We created a reporting solution that more than meets our needs, and continues to grow and improve over the weeks and months. The entire solution cost less than $300 to build, minus staff time. Total development to date is in the thousands of hours. It's a setup that works for us, and without the astronomical expense of closed source solutions.

Now I want to hear from you. What solutions have you developed in house? Were they a success, or a failure? What open source tools have you employed to make it happen?
