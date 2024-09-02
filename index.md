---
layout: page
---

<!-- About Section -->
<section id="about">
    <div class="container">
        <div class="row">
            <div class="col-md-12 about">
                <!--<img src="https://secure.gravatar.com/avatar/40b11c51061d8ac16284827aaa43ee58?size=200" alt="photo of Mark Cahill" />-->
                <div class="box">
                    I love APIs, coffee, and the
                    <a href="https://twitter.com/iamoxfordcomma">Oxford comma</a>. I
                    am a
                    <a href="http://andyshora.com/full-stack-developers.html"
                    >full stack engineer</a
                    >
                    working in
                    <a href="https://golang.org/">Go</a>,
                    <a href="https://www.typescriptlang.org/">TypeScript</a>,
                    and <a href="https://www.python.org/">Python</a>. I have exceled in a number of roles in the
                    Software Development Lifecycle, but my passion
                    for
                    <a href="http://www.paulgraham.com/makersschedule.html">making things</a>
                    makes me thrive in the role of individual contributer. I have been
                    programming since
                    <a href="https://en.wikipedia.org/wiki/BASIC">age eight</a>, and
                    have always enjoyed seeing ideas come to life in my programs. I
                    love to ship
                    <a
                    href="https://www.elegant-code.com/how-to-write-elegant-code/"
                    >elegant code</a
                    >
                    that solves
                    <a
                    href="https://signalvnoise.com/archives2/getting_real_forget_feature_requests.php"
                    >real problems</a
                    >, and iterate based on
                    <a href="https://basecamp.com/books/getting-real"
                    >real feedback</a
                    >
                    from customers. I want to write software that improves people's
                    lives, and which supports our abilities and enriches our
                    relationships outside of the virtual world.
                </div>
            </div>
        </div>
    </div>
</section>
<section id="case-studies">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Case Studies</h2>
            </div>
        </div>
        <div class="cards row">
            <div class="col-md-4">
                <div class="card">
                    <img class="image-responsive" src="/img/portfolio/Z100.png" alt="Z100 logo" />
                    <p>
                        I led a team of five engineers in completely redesigning the software that runs station sites like <a href="https://z100.iheart.com">Z100.com</a>.
                        These sites were driven by a Python form post application with poor hit rate in Fastly. We reimagined it
                        from the ground up, rebuilding it as an isometric React application with a GraphQL backend. 
                        We built a custom plugin for graphql-codegen that allowed us to generate typed SDKs for our GraphQL API Gateway,
                        taking advantage of Automatic Persisted Queries in Apollo server to dramatically improve
                        time to first byte for both first page load and client-side load of the application.
                    </p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="image-responsive" src="/img/portfolio/StrikeTracker.svg" alt="StrikeTracker logo" />
                    <p>
                        While employed at Highwinds, I led the team responsible for the public API and customer portal. We replaced a Swing and Flex
                        application with a new PHP backend and AngularJS frontend. We enabled full-site delivery through the CDN, and built a 
                        compatibility layer that allowed us to maintain backwards compatibility with API integrations while rolling out a new version of the 
                        API that supported new CDN features that had been released since the portal's inception. The frontend was entirely built on top of the new API,
                        allowing us to ensure that the public API had first-class support for implementers like Microsoft, Valve, and Giphy. Once Highwinds
                        was acquired by StackPath, I was in charge of combining the best-in-breed technology from MaxCDN, Highwinds, and StackPath into a single
                        self-serve secure CDN offering.
                    </p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <img class="image-responsive" src="/img/portfolio/YouVersion.png" alt="YouVersion logo" />
                    <p>
                        Due to latency requirements on the APIs that served our over 125 million mobile users, we were unable
                        to capture metrics inside of the request cycle. With an ever-increasing volume
                        of traffic coming to the platform, I built up a petabyte-scale log processing pipeline to gather metrics from our 
                        three generations of public APIs. For this, I used fluentd to push logs from the edge to S3, then use Elastic MapReduce to 
                        process the logs and pull out relevant metrics, finally pushing them to BigQuery for analysis. I then built a multi-tenant 
                        business intelligence suite in Python and deployed it to Google AppEngine so our content providers could see the performance
                        of their content on the platform.
                    </p>
                </div>
            </div>
        </div>
        <div class="cta">
            <a href="mailto:hello@thinkjson.com" class="button">Get In Touch</a>
        </div>
    </div>
</section>
<section>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <a href="/reading">Reading &raquo;</a>
            </div>
        </div>
    </div>
</section>
