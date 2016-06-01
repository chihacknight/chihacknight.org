---
layout: blog
categories: 
  - blog
title: 311 is back in the spotlight after 3 years
description: "Last week, for budget “season” in Chicago, Mayor Rahm Emanuel proposed privatizing the 311 system – where citizens and aldermen request services from any city department, and citizens get information about city services – as a way to pay for the technology upgrade the system desperately needs."
date: 2015-10-08
image: /images/blog/2015-10-08-311-is-back-in-the-spotlight-after-3-years/img1.png
author: Steven Vance
author_url: https://twitter.com/stevevance
author_image: /images/people/steven_vance.jpg
author_bio: "Steven Vance is a web developer and transportation planner who writes for Streetsblog Chicago."
author2:
author2_url:
author2_image:
published: true
---

Last week, for budget “season” in Chicago, Mayor Rahm Emanuel proposed privatizing the 311 system – where citizens and aldermen request services from any city department, and citizens get information about city services – as a way to pay for the technology upgrade the system desperately needs.

There are over 300 service request types (codes), of which [many are available to the public](https://servicerequest.cityofchicago.org/web_intake_chic/Controller) (the rest being for internal or aldermanic use). Here’s the [full list of codes](http://www.stevencanplan.com/wp-content/uploads/2015/10/Department-Sort-Table-1.csv) and the department that administers or manages the requests.

The topic of analyzing 311 data came up tonight at ChiHackNight, and I talked to a DePaul University Student interested in using their predictive analytics study on this rich (maybe) dataset.

I brought them up to speed on the changes made to the 311 technology system and created this “status” document to demonstrate the wild and whacky year of changes in 2012, and the stagnation since then. I’m publishing this because I also want to collect ideas and feedback about things I don’t know regarding the progress in redeveloping the tech that powers Chicago’s 311.

**311 technology chronology**

_2012_

Code for America fellows come to Chicago and work with DoIT to develop [13 service request types](http://311request.cityofchicago.org/reports/list_services) (codes) for [Open311](http://www.open311.org), a layer on 311 that enables third-party apps to submit new service requests – [with photos](http://servicetracker.cityofchicago.org/requests/14-00731352). See what [other cities have adopted Open311](http://open311status.org).

I pled with the Chief Technology Officer at the time, John Tolva, holding a new position in the mayor’s office, to enable 5 of the bicycle and pedestrian-related codes in the Open311 system, so that I can build apps for Grid Chicago, and later, Streetsblog Chicago, readers to request city services that impact the safety and quality around walking and biking.

Ben Sheldon, one of the four Code for America fellows, made [SuperMayor.io](http://supermayor.io), and it’s one of the few Open311-based apps that’s still working ([most of the apps linked to from this Smart Chicago Collaborative blog post are dead](http://www.smartchicagocollaborative.org/the-launch-of-open311-in-chicago/)).

_2013_

The City of Chicago [releases an RFP](http://www.slideshare.net/smartchicago/request-for-proposal-rfp-for-crm-modernization-software-and-implementation-services-specification-no-119440) to remake the 311 system (September). One aspect of operating the system I noticed that better tech could probably have a big impact on is the number of service request taken by phone: 74%!

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-08-311-is-back-in-the-spotlight-after-3-years/img1.png" alt="Channels through which 311 service requests are submitted" class='img-thumbnail' /></p>

    <small><em>According to the RFP issued in 2013, 74% of service requests are taken by phone. Only about 6% are done through the web.</em></small><br><br>
</div> 

_2014_

Companies respond to the RFP (I assume). Are these responses hosted anywhere? Smart Chicago Collaborative made [Chicago Works For You](http://chicagoworksforyou.com/#/), a dashboard that’s also the only Chicago + Open311 map.

The RFP never made it past “Step 4” in the [Bid Tracker](https://webapps1.cityofchicago.org/VCSearchWeb/org/cityofchicago/vcsearch/controller/agencySelection/begin.do), or, “Short List Determination”. The Bid Tracker is really unhelpful at this point, though, because it doesn’t mark the date at which Step 4 was reached.

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-08-311-is-back-in-the-spotlight-after-3-years/img2.png" alt="Channels through which 311 service requests are submitted" class='img-thumbnail' /></p>

    <small><em>Bid tracker for the 311 RFP</em></small><br><br>
</div> 

_2015_

Mayor Emanuel announces a proposal to [privatize the 311 system](http://www.governing.com/topics/urban/emanuel-wants-to-privatize-311.html), including the technology and the staff, to be able to pay for the tech upgrade. Aldermen don’t like this. While I haven’t read up on their specific complaints, I believe they have to do with the quality of the jobs that would exist under a private operator.

Currently the [73](http://www.governing.com/topics/urban/emanuel-wants-to-privatize-311.html)** employees work for the city and have benefits like healthcare and probably some retirement assistance. The new jobs could be, well, anything, and if they’re like other call centers, probably pay less and could have worse benefits.

There’s also the question of whether anyone else can actually do the same (or better) job for less money (a question that [6th Ward](http://www.chicagocityscape.com/places.php?place=ward-6) [Alderman Roderick Sawyer raised](http://www.governing.com/topics/urban/emanuel-wants-to-privatize-311.html)). That means someone other than people in the mayor’s office need to be able to get a detailed look at the expenses of the 311 call center and tech.

** The city’s salary dataset on the open data portal [lists 56 employees with “311” in the job title](https://data.cityofchicago.org/Administration-Finance/Employees-with-311-in-record/uv9c-yvba). They collectively earn $3,519,732.00 annually.

Thank you to Derek Eder, Eric Sherman, George Nakhleh, and Dan O’Neil for the discussion and links.

*This was originally posted on [Steven Can Plan](http://www.stevencanplan.com/2015/10/311-is-back-in-the-spotlight/) on Oct 7, 2015.*
