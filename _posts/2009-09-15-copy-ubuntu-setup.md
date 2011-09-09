---
title: Copy one Ubuntu setup to another computer
uri: copy-ubuntu-setup
layout: post
posted: "2009-09-15 17:00:00"
---

Today I was looking for a way to copy my setup (installed programs) from one Ubuntu computer to another. I had already copied all of my documents to a network drive, so all I needed was a way to generate an apt line to install all of the programs that I have on my existing computer. I finally came up with the following commands (thanks to mhall119)<!--more-->:
<code>echo -ne "#!/bin/sh\nsudo apt-get install " > install.sh
dpkg-query -W -f='${Package} ' >> install.sh</code>

This should create a shell script that you can make executable and run on the second computer to install all of the programs that you had on the first computer. Note that both computers should have the same repositories enabled. Enjoy!
