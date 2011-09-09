---
title: Group permissions in Django, sort of 
uri: group-permission-in-django
layout: post
posted: "2010-01-25 20:36:00"
---

If you've ever tried to do group permissions in the latest stable Django release 
(1.1.1 as of this writing), you know that it is not supported, per se. You can 
<a href="http://code.djangoproject.com/browser/django/trunk/django/contrib/auth/models.py">assign permissions to groups</a>, 
and search for that permission in a view, but you can't achieve true 
<a href="http://code.djangoproject.com/ticket/11010">row-level group permissions
</a>like you can with the User model. (This is implemented in the 1.2 alpha, 
due to be released in March 2010).<!--more-->

First of all, say you have a model called Report. This is what I can relate to 
because I do business intelligence 90% of the time in my job.

    class Report(models.Model):
        name = models.CharField(max_length=100)
        contents = models.TextField(blank=True)
        authorized_groups = models.ManyToManyField('ReportGroup', null=True, blank=True, related_name='report_groups')
        def __str__(self):
        return self.name

You can create an intermediary model to the User model to handle group permissions:

    class ReportGroup(models.Model):
        name = models.CharField(max_length=100)
        authorized_users = models.ManyToManyField(User, null=True, blank=True, related_name='report_users')
        def __str__(self):
        return self.name

Now, when you are editing a report in the Django admin, you can assign group 
permissions to a report. These groups can be administered as Report Groups in 
the Django admin, letting you select in one shot who belongs to a group.

<img src="http://www.tiemonster.info/downloads/django-admin.gif" alt="" 
title="django-admin" width="415" height="45" style="border: 1px solid #ccc;" />
