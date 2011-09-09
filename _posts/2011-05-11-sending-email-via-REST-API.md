---
title: Sending e-mail via a REST API
uri: sending-email-via-REST-API
layout: post
posted: "2011-05-11 9:46:00"
---

Today I found myself in the situation that my new hosting provider, Joyent, 
does not allow outbound SMTP connections. This is certainly understandable from 
a system administrator's point of view. You don't want people using your hosting 
service for spamming, and you don't want compromised sites to proliferate spam
e-mail messages either. However, if your application needs to send e-mail 
notifications, you're plum out of luck.

To find a solution to this problem, I began by searching for e-mail providers. 
Perhaps some e-mail provider out there thought of a way around this problem for
web developers who need to send e-mail. I stumbled across 
[SendGrid](http://sendgrid.com/), an e-mail delivery service that provides 
businesses with ways to send and track e-mail campaigns. What attracted me to 
the service, however, was that in addition to outbound SMTP service, the company
also provides a REST API for sending e-mails.<!--more-->

The [API documentation](http://sendgrid.com/documentation/display/api/Web) is 
excellent, and SendGrid's helpful tech support allowed me to get up and running 
quickly. I'm using Node.js to send e-mails asynchronously from my site. Here I 
set up a POST request, fill in the required data, and send the e-mail, logging 
the server response in my logs:
{% highlight js %}
    var sender = req.param('sender');
    var name = req.param('name');
    var message = req.param('message');
    
    // Set up message
    var content = querystring.stringify({
        api_user: credentials.user,
        api_key: credentials.password,  
        to: 'mark@tiemonster.info',
        toname: 'Mark Cahill',
        subject: '[tiemonster.info] Message from your contact form',
        text: message,
        from: sender,
        fromname: name
    });
    
    // Initiate REST request
    var request = https.request({
        method: "POST",
        host: "sendgrid.com",
        port: 443,
        path: "/api/mail.send.json",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-length': content.length
        }
    }, function(response) {
        var data = "";
        
        response.on('data', function(chunk) {
            data += chunk;
        });
        
        response.on('end', function() {
            console.log(data);
        });
    });
    
    // Send request
    request.write(content);
    request.end();
{% endhighlight %}
Now I have a fast and stable way of sending e-mails, without compromising the 
security of my VPS. I highly recommend that you check out 
[SendGrid](http://sendgrid.com/)'s services for all of your e-mail sending needs.