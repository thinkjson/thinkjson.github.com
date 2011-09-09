---
title: Upgrading to Django 1.2.1 
uri: upgrading-django-1.2.1
layout: post
posted: "2010-07-08 20:36:00"
---

We finally decided to upgrade to Django 1.2.1 at work, not willing to wait for 
Ubuntu to include the new version (which looks like October, if I read the 
<a href="https://wiki.ubuntu.com/MaverickReleaseSchedule">release schedule</a> 
correctly). In the process I ran into the following issues which are good to be 
aware of when upgrading to the new version.<!--more-->

<h3>Multiple databases</h3>
With the introduction of version 1.2, Django now supports multiple databases. 
From what the documentation says, it looks like this was in response to 
master-slave database replication. For more information on how to define 
multiple databases, read up on the 
<a href="http://docs.djangoproject.com/en/1.2/topics/db/multi-db/#defining-your-databases">database settings</a>. 
However, the old method will still work, and will define settings for the 
"default" connection.

Now support for master-slave replication is great, but this isn't exactly the 
situation we find ourselves in. We have one database for our Django application 
data, and another which acts as our data warehouse for reporting and analytics. 
As such, the connection to the Django data is read/write, and the connection to 
the data warehouse is read-only. In addition, we were also using database 
caching, which caused the unit tests to 
<a href="http://groups.google.com/group/django-users/browse_thread/thread/d2ca91cee6399250/c888a39250843c70#c888a39250843c70">fail with an OperationalError</a>. 
This was because the Django unit test suite was trying to set up the cache 
table on the data warehouse (the database cache backend 
<a href="http://code.djangoproject.com/ticket/13946">doesn't take multiple databases into account</a>). 
To work around this, we employed the 
<a href="http://docs.djangoproject.com/en/1.2/topics/testing/#testing-master-slave-configurations">TEST_MIRROR variable</a> 
in our data warehouse connection. While intended for master-slave replication, 
it works for any read-only database connection used in Django. 
It in essence tells the unit test suite NOT to create a cache table on that 
connection.

<h3>CSRF Protection</h3>
Django 1.2 introduced broad-spectrum 
<a href="http://en.wikipedia.org/wiki/Cross-site_request_forgery">cross-site 
request forgery</a> protection. This protection is turned on by default. 
While a great thing, in my opinion, it also meant that every form that POSTs 
needs to have the CSRF token in order to complete the request cycle. If you 
fail to include the token, the user gets a very scary-looking permission denied 
error message. Make sure you 
<a href="http://docs.djangoproject.com/en/dev/ref/contrib/csrf/">read up</a> 
on the new CSRF framework to ensure that you are POSTing data correctly. 
You need to either disable the protection, or alter your forms to include the 
CSRF token. (NOTE: existing projects will NOT have the middleware in their 
settings.py, and as such will need no modifications to run Django 1.2)

<h3>Messages framework</h3>
Django 1.2 has changed the way messages are sent. They are no longer tied to 
the user, but to the request. The new 
<a href="http://docs.djangoproject.com/en/1.2/ref/contrib/messages/">messages 
framework</a> is way more robust than the old one, but you are not required 
to use it until Django 1.4. I decided to update my application to support the 
new framework, but that's entirely up to you.

<h3>Admin media</h3>
The admin media has changed, so if you've statically linked to the old admin 
media, you need to update your link to the new media. If you have the media 
hosted in a CDN (like I did) then you'll have to manually upload the new media. 
I kept finding random 404 errors in Firebug, and just now (July 29) figured out 
that this was the issue.

<h3>In Conclusion</h3>

For more changes between Django 1.1.1 and 1.2.1, review the 
<a href="http://docs.djangoproject.com/en/dev/releases/1.2/">release notes</a>. 
There should be no backwards incompatible changes upgrading directly from a 1.x 
version to 1.2.1. However, I highly recommend taking advantage of some of the 
improvements in the framework with the new version.

Now I'm not sure if it's my imagination or not, but the new version of the 
framework seems to run faster than 1.1.1. There are certainly a bunch of cool 
new features that are worth the upgrade, not to mention that CSRF protection 
should be considered a critical security update. Hopefully this article will 
ease your transition to the new version of Django, and save you some time and 
headaches.