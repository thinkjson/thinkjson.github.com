---
title: Collatz Conjecture
uri: collatz-conjecture
layout: post
posted: "2010-05-13 20:36:00"
---

Inspired by the <a href="http://www.xkcd.com/710/">latest xkcd comic</a> about the Collatz Conjecture, I set out to create a python module to calculate Collatz sequences. Attached is the module I created. I was able to calculate 

    collatz(99999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999
    9999999999999999999999999)

 in 5 seconds. Throw that bad boy in a loop, let it run overnight, and see if you can disprove the theorem.

To use the module, open a python interpreter (`python` from the command line) in the same directory as the module or place it on the python path. Then type the following:

    >>> from collatz import collatz
    >>> collatz(256)
    [256, 128, 64, 32, 16, 8, 4, 2, 1]

I've saved your social life! Now you can calculate Collatz Conjecture sequences in time to hit that party!

<strong>Download <a href="https://raw.github.com/gist/1085198/7c5fc4af99c9616db3a5116b00581ac925ee998b/collatz.py">collatz.py</a></strong>

UPDATE March 6, 2010: Kyle Anderson has gone one step further and hooked into Graphviz. <a href="http://xkyle.com/2010/03/04/xkcds-collatz-conjecture/">Check out his article</a>.
