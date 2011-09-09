---
title: Limiting choices for a ManyToManyField on Django ModelForm objects 
uri: limiting-choices-ManyToManyField
layout: post
posted: "2010-06-16 20:36:00"
---

In case you are looking for what wasted 2 hours of my time by searching for the wrong keywords, here is how to limit the choices for a ManyToManyField on a Django ModelForm by passing extra data to the constructor. This could allow you to limit based on the current request's user, or by a set of similar characteristics. I was working on a project management application, and this allowed me to limit dependencies for a task to Task objects with a ForeignKey to the same object (within the same project). This effectively prevents users from listing arbitrary dependencies for a task that isn't even with the same project.<!--more-->

The original link is <a href="http://collingrady.wordpress.com/2008/07/24/useful-form-tricks-in-django/">here</a>. I'll reproduce the key code here for your benefit, using my own example:

<pre><code>class TaskForm(forms.ModelForm):
    def __init__(self, project_id, *args, **kwargs):
        super(TaskForm, self).__init__(*args, **kwargs)
        self.fields['dependencies'].queryset = \
        Task.objects.filter(project__id=project_id)
        
    class Meta:
        model = Task
        fields = ('name', 'description', 'due_date', \
        'dependencies', 'assigned_to', 'completed',)
</code></pre>

This way, when creating instances of TaskForm, you can simply pass in the project_id like this:
<code>TaskForm(project_id)
</code>

Hope that saves you some time!
