---
title: Logging as a service
uri: logging-as-a-service
layout: post
---
One of my many summer projects is an API that allows colleges and universities to create virtual tours of their campuses. In developing the API, I wanted an easy way to log errors and usage in a decoupled fashion. I didn't want to have to worry about the details of where the logs would reside or how to rotate them. I found myself in search of LAAS - logging as a service. My search soon ended with Loggly, an API-based logging service that allows, among other things, for web apps to log arbitrary information over HTTP. Since I'm currently writing the backend in Node.js, this seemed a convenient way to integrate some powerful logging without having to worry about the details of the infrastructure. Their free plan was more than generous for my needs, and allowed me to get up and running quickly.<!--more-->

Here's the code I used to get up and running:
{% highlight js %}
    var http = require('http');
    var options = {
        host: 'logs.loggly.com',
        port: 80,
        path: '/inputs/{input_id}',
        method: 'POST'
    };
    exports.write = function(data) {
        var req = http.request(options, function(res) {});
        req.on('error', function(e) {
            console.log('Could not log request: ' + e.message);
        });
        req.write(data);
        req.end();
    };
{% endhighlight %}
I then imported that as log, and did log.write(data); to write to the log.

Loggly provides very basic analysis of your logs. When you first log in, you're greeted with a variety of charts like this one:

The options for pulling the data back out of Loggly are very limited, but there are promises on the web site that this will be fixed soon. All in all, Loggly is a great service. If you need a quick and dirty logging service for a web app, Loggly is the first place to start. I highly recommend it.