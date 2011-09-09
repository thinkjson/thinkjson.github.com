---
title: Keeping an eye on disk space
uri: disk-space
layout: post
posted: "2009-09-24 20:36:00"
---

I was investigating the use of <a href="http://en.wikipedia.org/wiki/TMPFS">tmpfs</a> this week in improving the responsiveness of requests for cached files. This would store already generated reports from our reporting application in memory for faster recall. I've noticed that requests for cached documents were blocking because of file system access, and this would provide an easy way (apart from a solution like <a href="http://www.danga.com/memcached/">memcached</a>) to improve the performance of such hits.

In looking at this option, I had to keep in mind that by doing this, we needed a way to keep an eye on disk usage in order to adjust the amount of memory that would be used for the cache.<!--more--> I decided to monitor disk usage for the cache over the course of a month, and get a rough estimate of how much space would be needed. For anyone else looking for a shell script to monitor disk usage, I thought I would provide the following example:

<code>du -k /path/to/cache | awk '{ print $1 }' | sed "s/$/, \"$(date '+%Y-%m-%d %T')\"/" >> /path/to/cache_log.csv</code>

Using this script, the size of the folder is recorded, along with the date and time, into a CSV file. You can then download the file as needed, or even schedule a cron job to mail it to you at regular intervals. If and when we do decide to implement tmpfs, I'll definitely report on the process, and provide some benchmarking.
