---
title: Scalable web services and the EPS theorem
uri: scalable-web-services
layout: post
posted: "2011-03-18 14:47:34"
---

One of my primary interests is building scalable web services. I've been busy in recent months, and have touched all corners of the web world. I'm a core developer on the open source analysis tool Saiku, which combines the cross-platform cross-database goodness of JDBC with the powerful Mondrian analysis server. The core of the tool is a Java web service built with Jersey and Enunciate with a pretty jQuery UI placed on top. This architecture allows us to focus on building a clean and scalable API, and delegate user interaction to the UI. It also opens up opportunities for mobile application development and integration with a host of service architectures in various languages.

I've also been actively developing a reporting suite in Python. Taking advantage of Django-piston has allowed me to build clean Python APIs that enable rapid development of functionality without sacrificing scalability or maintainability. Python, and in our case Django, have been a joy to work with. Django exposes a clean API for interacting with almost every aspect of a typical web application, and makes it easy for us to focus on the core of our application: providing a usable reporting tool to our users.

The past three months has also plunged me into the world of Node.js. My team and I are developing a real-time mobile web application that leverages HTML5 geolocation to provide a unique user experience. Developing a write-heavy real-time application on the order of 1 request/second/user is definitely a learning experience. Node is uniquely adapted to the challenges of developing real-time applications. It exposes a non-blocking I/O API, allowing us to create a web service that scales dramatically. It also exposes a powerful C++ plugin architecture, allowing us to make the application performant by implementing core business logic in C++.<!--more-->

<h3>The EPS Theorem</h3>

Each programming language, and the web stacks they have spawned, have their own unique advantages and disadvantages. In reflecting upon my experiences over the past few months, I've come to develop a working draft of a new CAP theorem as it relates to building web services. I call it the EPS theorem. As with the CAP theorem, you must choose two of the following three characteristics when choosing a platform for your web application:

<b>Ease of development</b>
This portion of the theorem relates to both lines of code and actual clock time necessary to develop a non-trivial web service. Generally, the higher-level the language, the more the platform leans on this tenet.

<b>Performance</b>
Many benchmarks can be used in determining performance for a web service, but the most important that come to mind are requests/second, CPU usage, memory usage, and response time.

<b>Scalability</b>
Scalable web services experience logarithmic reduction in requests/second when number of connections grow exponentially. This also relates to the ability of the web service to scale horizontally, that is, how easy it is to distribute the web service across multiple servers.

<h3>Conclusions</h3>
Each application platform I have used over the past few months has its advantages and disadvantages. Here is where I place each of the platforms available for building web services:

ES: Python, PHP, Ruby, Node.js
EP: Java (although I think it fails big time in the ease of use category)
PS: C/C++

Now these are certainly not clear-cut categories, as with the CAP theorem. However, I think it helps put into perspective the architectural decisions being made when choosing each of these platforms. I will say that of all of the tools I've used to develop web services, I think Node.js strikes the best balance between all three - especially if the C++ plugin architecture is used to offload CPU intensive tasks. However, Node.js has one fatal flaw that I hope to soon be rectified: it's ecosystem is very immature. There is no high-level framework built on Node. There is no content management system. The Node team itself has focus so much on the low-level details of creating a non-blocking application server that the ecosystem itself has not developed these higher level tools. However, I think Node.js has a lot going for it, and will change the way we perceive the web over the next half decade.

Another intriguing thought I've had is creating a framework for C++ that would ease the development of web applications on that platform. This seems to be the direction that large web businesses like Facebook have taken - building tools that compile down PHP code into C++ code. It will be interesting to see what developments take place on this front in the next few years. Perhaps we will see a resurgence of C++ on the web. Or perhaps the desire for ease of use will drive language developers to continue to close the gap between high-level and low-level languages.

What are you thoughts on building scalable web services? Do you think my analysis of the current ecosystem is accurate? What do you see as the future of the web?