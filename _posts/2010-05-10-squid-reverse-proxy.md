---
title: Deploying Squid as a reverse proxy
uri: squid-reverse-proxy
layout: post
posted: "2011-05-10 7:51:00"
---

I was recently looking for a reverse proxy solution to take some load off of
my Node.js application. When my site was built on Google's AppEngine platform,
I made extensive use of the memcached API to cache generated pages. However,
every time I needed to refresh the cache, I had to find or generate the key in 
the code and delete it programmatically. This was a hassle, and greatly 
increased the complexity of the codebase.

When rewriting the site on Node.js, I sought an independent solution that would
allow me to override the cache using Shift+Refresh. To do this, I needed to use
a cache that was header-aware. While I have heard good things about 
[Varnish](http://www.varnish-cache.org/), I haven't met anyone who has actually
used it in production. I know lots of people that use [nginx](http://nginx.net/),
but I was put off by the fact that the documentation is in Russian.

I wanted to use something that had good documentation and a strong user base, 
and something that I would be comfortable deploying without the assistance 
of a system administrator. Having deployed Squid before as a transparent proxy 
on our home network, I decided on this as a solution for my site.<!--more-->

I installed it using pkgin, the package manager used by Joyent's no.de hosting
service. You can probably find the same package using yum or apt, or you can 
download Squid from the [project's web site](http://www.squid-cache.org/Download/).

    pkgin install squid

After this, I contacted Joyent support for root access, and created a new 
squid.conf configuration file. Squid provides a lot of defaults used for 
situations besides reverse proxying, so I found it easier to make a blank file 
than to try to overwrite all of the defaults. The configuration file should look 
something like this:

    http_port 80 accel defaultsite=[domain]
    cache_peer 127.0.0.1 parent 8080 0 no-query originserver name=[name]
    acl our_sites dstdomain [domain]
    acl localhost dst 127.0.0.1
    http_access allow our_sites
    http_access allow localhost
    http_access deny all
    cache_peer_access [name] allow our_sites
    cache_peer_access [name] allow localhost

Then squid from the command line (or restart the daemon):

    squid

I was very pleased with the results. Here is the output of Apache Bench using
just Node.js:

    Document Path:          /
    Document Length:        7813 bytes
    
    Concurrency Level:      20
    Time taken for tests:   12.648 seconds
    Complete requests:      5000
    Failed requests:        0
    Write errors:           0
    Keep-Alive requests:    5000
    Total transferred:      39957760 bytes
    HTML transferred:       39067582 bytes
    Requests per second:    395.32 [#/sec] (mean)
    Time per request:       50.592 [ms] (mean)
    Time per request:       2.530 [ms] (mean, across all concurrent requests)
    Transfer rate:          3085.16 [Kbytes/sec] received
    
    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   2.8      0      44
    Processing:    43   50  17.1     45     137
    Waiting:       41   44   1.6     44      63
    Total:         43   50  17.7     45     142
    
    Percentage of the requests served within a certain time (ms)
      50%     45
      66%     45
      75%     45
      80%     46
      90%     85
      95%     88
      98%    123
      99%    126
     100%    142 (longest request)

and here are the results with Squid as a reverse proxy:

    Document Path:          /
    Document Length:        7813 bytes
    
    Concurrency Level:      20
    Time taken for tests:   11.048 seconds
    Complete requests:      5000
    Failed requests:        0
    Write errors:           0
    Keep-Alive requests:    5000
    Total transferred:      40575000 bytes
    HTML transferred:       39065000 bytes
    Requests per second:    452.55 [#/sec] (mean)
    Time per request:       44.194 [ms] (mean)
    Time per request:       2.210 [ms] (mean, across all concurrent requests)
    Transfer rate:          3586.38 [Kbytes/sec] received
    
    Connection Times (ms)
                  min  mean[+/-sd] median   max
    Connect:        0    0   2.6      0      43
    Processing:    42   44   2.9     44      91
    Waiting:       42   43   0.6     43      48
    Total:         42   44   5.5     44     133
    
    Percentage of the requests served within a certain time (ms)
      50%     44
      66%     44
      75%     44
      80%     44
      90%     45
      95%     45
      98%     45
      99%     46
     100%    133 (longest request)

I'd be interested to hear of others' experiences with reverse proxies. How does
Squid compare to a proxy like Varnish?