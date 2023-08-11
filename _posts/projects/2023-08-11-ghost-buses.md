---
layout: project
categories: 
  - projects
title: "Ghost Buses"
date: 2023-08-11
image: /images/projects/ghost-buses.png
description: ""
website: https://ghostbuses.com/ 
github: https://github.com/chihacknight/ghost-buses-frontend
creators: 
 - Laurie Merrell
 - Sneha Jalukar
 - Amy Corson
 - Sean MacMullan
 - Howard Kier
 - Rishav Raj
 - Dylan Johnson
tags:
 - Transit
featured: true
published: true
---

### Q. What is a ghost bus?

A. A "ghost bus" is when a bus tracker app claims that a bus is coming but it never shows up. If you live in Chicago and regularly take public transit, you may have been "ghosted" by a bus!

### Q. What's the goal of this project?

A. The goal of this project has been to use public data to assess the discrepancy between scheduled and actual service levels, to understand the prevalence and geographic distribution of "ghost buses."

### Q. Why did the Ghost Buses group start?

A. The Ghost Buses group's story began in Spring 2022, when Chi Hack Night members started to see more reports of ghost buses on Twitter and in the news --- in particular Streetsblog published an [article](https://chi.streetsblog.org/2022/04/25/data-analysis-found-cta-has-only-been-running-about-half-its-schedule-blue-line-runs/) that only half the Blue Line trains were running. This article inspired CHN member Laurie Merrell to try to do an analogous data analysis for CTA buses. Many CHN breakout groups start when CHN members engage with issues of public concern and then feel inspired to start breakout groups.

### Q. How did the Ghost Buses group get up and running?

Anyone can start a breakout group --- here is a [guide to starting and running breakout groups](https://chihacknight.org/blog/2020/02/28/so-you-want-to-start-a-breakout-group.html) at CHN. In our case, Laurie was the CHN member who got the Ghost Buses breakout group started --- she opened up an issue under the CHN GitHub repository, writing up a [short description of the group](https://github.com/chihacknight/breakout-groups/issues/217) to help orient people who were new to the breakout group, announcing the group at the weekly CHN meetings, and creating the Slack channel #ghost-buses-breakout. Gradually, we introduced a google doc for meeting notes, a project board on GitHub, READMEs, and contribution protocols. Since the beginning, many new members have joined and contributed to the project.

(Picture of group meeting)

### Q. What other Chicago transit efforts are there?

A. The ghost buses group started at a time when there were a number of transit justice efforts around the city. These range from efforts that have spun up in the past year, to those that have been going on for multiple years. [Commuters Take Action](https://www.ctaction.org/) (CTAction) is a movement of Chicago commuters that has been pressuring the CTA and city officials to take action to improve Chicago transit. In addition, the [Active Transportation Alliance](https://activetrans.org/) (ATA), which is a non-profit advocacy organization that works to improve transportation in Chicagoland. There are also longer term efforts, like [Transit4all](https://www.transit4all.org/), a campaign organized by Chicago Jobs With Justice (CJWJ), which bridges between transit operator unions, advocacy groups, and commuters.

### Q. How did the Ghost Buses group fit in with other Chicago transit efforts? 

It's important that new civic tech projects acknowledge and fit into existing civic tech efforts. When the Ghost Buses breakout group started, we did research to identify existing transit efforts like CTAction, the ATA, and CJWJ. We emailed, phone-called, invited representatives to come to CHN to talk about transit in Chicago, and went to events and rallies organized by these organizations. Over time, we've developed a symbiotic relation with all of these transit efforts - we focus mostly on data analysis, but also share resources more broadly. We've learned that it's very important for transit efforts to work together.

### Q. What have you built so far?

A. At a high level, this project compares real-time data (data that indicates which bus trips actually happened) with schedule data (the trips that the CTA said in advance would happen). 

The real-time data is scraped from the CTA bus tracker API[  getvehicles feed](https://www.transitchicago.com/developers/bustracker/) every five minutes. Data collection started on 20 May 2022 and continues to date, though the data on this site is not yet automatically updated. Schedule data is collected from the [CTA General Transit Feed Specification (GTFS) feed data](https://www.transitchicago.com/developers/gtfs/). To compare the two sources, we look at how many distinct trips occurred each day on each route in the real-time data vs. how many distinct trips were scheduled to occur that day on that route. We can then calculate a reliability percentage showing how many of the scheduled trips were observed in the realtime data.

The data displayed on our website right now is not directly this reliability percentage but instead is the percentile comparing all the routes across the city. Because our original research question was related to the distribution of ghost buses across the city, we have focused on comparisons between routes so far.

### Q. Where is the project going from here?

A. We are currently working on route-specific pages on the site, to provide more detail. On the back-end, we are working on further automations of our data pipeline, to make data updates less manual. If you're interested in contributing, please visit our [GitHub page](https://github.com/chihacknight/breakout-groups/issues/217), join our [CHN Slack](http://slackme.chihacknight.org/), or come to a [weekly CHN meeting](https://chihacknight.org/)!