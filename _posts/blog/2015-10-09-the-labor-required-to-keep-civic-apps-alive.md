---
layout: blog
categories: 
  - blog
title: The labor required to keep civic apps alive 
description: The CPS Tiers map doesn’t update automagically. I volunteer my time to keep it accurate and up to date, and it’s worth doing.
date: 2015-10-09
image: /images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img1.png
author: Derek Eder
author_url: https://twitter.com/derekeder
author_image: /images/people/derek_eder.jpg
author_bio: "Derek is an entrepreneur, developer and one of the leaders of the civic technology community in Chicago. He is founder and partner at DataMade, a company that tells stories and builds tools with data and lead organizer for Chi Hack Night."
author2:
author2_url:
author2_image:
published: true
---

The CPS Tiers map doesn't update automagically. I volunteer my time to keep it accurate and up to date, and it's worth doing.

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img1.png" alt="Chicago Public School Tiers, a lookup tool for selective school enrollment by Derek Eder and Forest Gregg of Open City" class='img-thumbnail' /></p>

    <small><em>Chicago Public School Tiers, a lookup tool for selective school enrollment by Derek Eder and Forest Gregg of Open City</em></small><br><br>
</div>

Building new civic apps is a lot of fun! I've been [doing it for a while now](http://derekeder.com/about) and [created](http://www.chicagolobbyists.org/) [quite](http://secondcityzoning.org/) [a](http://istheresewageinthechicagoriver.com/) [few](http://clearstreets.org/).

But once you've built something, it's kind of like getting a puppy. You gotta be a responsible adult and take care of it. 

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img10.jpg" alt="Civic tech puppy says: please maintain me!" class='img-thumbnail' /></p>

    <small><em>Civic tech puppy says: please maintain me!</em></small><br><br>
</div>

Unfortunately, apps are rarely maintained in the civic tech world. Just take a look at all the dead projects from the [Apps for Metro Chicago Contest](http://www.smartchicagocollaborative.org/list-of-apps-for-metro-chicago-applicants/), which only happened 3 years ago.

I just updated [Chicago Public School Tiers](http://cpstiers.opencityapps.org/) with data for 2016-2017 school enrollment and wanted to share the steps I went through to do it. 

It involves a government website, extracting data from a PDF document, manipulating spreadsheet data, merging datasets using Google Fusion Tables, and customizing a set of interactive map stiles.

But first, if you haven’t heard of this tool before, here’s what it’s about:

### About Chicago Public School Tiers

In Chicago, a student's chance of getting into the city's top, [selective schools](http://cpstiers.opencityapps.org/about.html#four-types) depends on where he or she lives.

Chicago Public Schools (CPS) places every part of the city into one of four [socio-economic "tiers."](http://cpstiers.opencityapps.org/about.html#the-tier-system) On average, people from Tier 1 areas make less money and have less education, and people from Tier 4 areas make more money and have more education.

Chicago Public School Tiers is a tool to help find what CPS tier you are in.

This civic app, created by me, Forest Gregg and Juan-Pablo Velez in March 2012 continues to be one of our most popular projects, netting between 2,000 and 4,000 unique visits a month.

CPS parents really need to know this information, and CPS Tiers continues to be the easiest way to find it.

Ok, on to how I update it.

### Step 1: Finding the source data

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img2.png" alt="The Chicago Public Schools Office of Access and Enrollment website" class='img-thumbnail' /></p>

    <small><em>The Chicago Public Schools Office of Access and Enrollment website</em></small><br><br>
</div> 

The tier information is posted by the Chicago Public Schools Office of Access and Enrollment on [their website](http://www.cpsoae.org/).

The Office of Access and Enrollment [post updated tiers](http://www.cpsoae.org/apps/news/show_news.jsp?REC_ID=184188&id=0) every year in early October ahead of the enrollment deadline for the upcoming school year. 

Also shown on this page are the official instructions provided to parents for looking up their tier:

> You can also calculate your tier by following the steps below:
> 
> 1. Click [here](http://factfinder.census.gov/faces/nav/jsf/pages/searchresults.xhtml?ref=addr&refresh=f) to go to the U.S. census website.
> 2. Enter your address and click 'go.'
> 3. Scroll down to the table entitled "Geography Results." Under the column "Geography Name," look in the sixth row for your census tract number, followed by the county and state.
> 4. Click [here](http://www.cpsoae.org/Census%20Tract%20--%20Tier%20Information_2016-2017.pdf) to access the "Census Tract to Tier for Chicago" document. The census tracts are sorted in numeric order; the number in the “short tract” column corresponds to the census tract number you obtained on the U.S. census website. Click “Control F” and type in your census tract number. The number in the third column is your tier.

Here's a screenshot of these instructions for posterity:

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img3.png" alt="Instructions on looking up your CPS tier" class='img-thumbnail' /></p>

    <small><em>Instructions on looking up your CPS tier</em></small><br><br>
</div> 

As an aside, when we first came across these instructions, we thought it was about 3 steps too many, and decided we could use our technology skills to help out parents a bit and built the CPS Tiers app.

Anyway, there’s a link at the bottom of this page we care about: the [Summary of Census Tract Data](http://www.cpsoae.org/Summary%20of%20Census%20Socioeconomic%20Data_2016-2017.pdf) for the current year’s tiers. It’s a PDF file containing tables of data.

### Step 2: Extract data from a PDF using Tabula

Many governments like to publish data as PDF files. This makes for easier reading by people, but it’s hard for doing much else with them. We need to get this data into a format we can work with - [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). 

Sometimes you get lucky and you can just select the text and paste it into your spreadsheet editor of choice (I prefer [LibreOffice](http://www.libreoffice.org/) - it’s free!). Most of the time, however, the data isn’t copy/paste-able. 

Thankfully, there’s [Tabula](http://tabula.technology/), a free and open source tool for extracting tabular data from PDFs built by[ Manuel Aristarán](http://jazzido.com/),[ Mike Tigas](https://mike.tig.as/) and[ Jeremy B. Merrill](http://jeremybmerrill.com/) with the support of[ ProPublica](http://propublica.org),[ La Nación DATA](http://blogs.lanacion.com.ar/data/),[ Knight-Mozilla OpenNews](http://opennews.org/),[ The New York Times](http://www.nytimes.com) and[ The Knight Foundation](http://www.knightfoundation.org/).

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img4.png" alt="Using Tabula to extract tables from PDF documents" class='img-thumbnail' /></p>

    <small><em>Using Tabula to extract tables from PDF documents</em></small><br><br>
</div> 

Just run the Tabula app, select your PDF file to extract, and use their handy interface to select the text you want to extract for each page. Our document is 10 pages, so I select the tables (but not the headers - those get repeated on every page) on each one. 

Click ‘Preview and Export Data’, copy to the clipboard, and fire up your spreadsheet editor.

### Step 3: Clean up the extracted spreadsheet data 

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img5.png" alt="Cleaning up the data in LibreOffice, a free alternative to Excel" class='img-thumbnail' /></p>

    <small><em>Cleaning up the data in LibreOffice, a free alternative to Excel</em></small><br><br>
</div> 

Tabula just did a ton of work for us, but we still need to clean up a few things. The headers had line breaks in them, so we’ll need to combine those each into one cell. At this point, I also pull in the tier data from previous years so I can keep a history of the tiers and how they’ve changed over time. 

I also create a new column called ‘Change from current year’ that is the difference between the 2016-2017 tiers and 2015-2016 tiers. I’ll be using this later to make another map (step 6).

### Step 4: Merge with US Census Tract shapes

Once I have my data cleaned up, I upload it to [Google Fusion Tables](https://support.google.com/fusiontables/answer/2571232?hl=en). 

Fusion Tables is a free service by Google that makes it really easy to make maps (and other visualizations) out of spreadsheets. I use it quite a bit and have a [popular open source template](https://github.com/derekeder/FusionTable-Map-Template) for making custom mapping websites with it.

CPS Tiers is powered by Fusion Tables, but we also get another cool utility out of it: table merging.

Each CPS Tier geography is actually a [Census Tract](https://en.wikipedia.org/wiki/Census_tract), a geography determined by the US Census that contains, on average, 4,000 people. To make the map of tiers, I need to take the data I extracted in the above steps and merge it with the shapes of each Census Tract.

I could go get this data directly from the US Census, but the City of Chicago already makes the tracts in [Chicago available on their Data Portal](https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Census-Tracts-2010/5jrd-6zik). Yay! 

I download the tracts shapefile in [KML format](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) and upload it to Google Fusion Tables too.

Now I can use the [Fusion Tables merge feature](https://support.google.com/fusiontables/answer/171254?hl=en) and combine these two tables into one master table with both my data and my geographies. Neat!

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img6.png" alt="Merging the 2016-2017 tiers with 2010 Census Tract shapes" class='img-thumbnail' style='width: 50%;'/></p>

    <small><em>Merging the 2016-2017 tiers with 2010 Census Tract shapes</em></small><br><br>
</div> 

### Step 5: Customize the Fusion Table map styles

Next, I customize the Fusion Table map styles so we can tell the difference between the 4 different tiers. For displaying tiers numbering from 1 thru 4, it’s simplest to use a sequential set of shades using a single hue (blue in this case). 

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img7.png" alt="Customizing the Fusion Tables map styles" class='img-thumbnail' style='width: 50%;'/></p>

    <small><em>Customizing the Fusion Tables map styles</em></small><br><br>
</div> 

Here’s a little tip: picking colors for maps is actually pretty hard. The default colors that Fusion Tables give you are pretty crass, and it’s really challenging to find colors that are both easy to tell apart and work for those who are colorblind too. 

Thankfully, [Cynthia Brewer](http://www.personal.psu.edu/cab38/), head of the Department of Cartography at Penn State, created a tool called [ColorBrewer](http://www.personal.psu.edu/cab38/) to help us pick good map colors.

I picked 4 data classes, sequential, and the blue single hue.

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img9.png" alt="ColorBrewer using 4 data classes, sequential, and the blue single hue" class='img-thumbnail' /></p>

    <small><em>ColorBrewer using 4 data classes, sequential, and the blue single hue</em></small><br><br>
</div> 

### Step 6: Create a map showing the tier changes

I’m not quite done yet. I want to make a second map that shows which tiers have changed since last year and how. 

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img8.png" alt="A map showing how tiers changed from the previous year" class='img-thumbnail' /></p>

    <small><em>A map showing how tiers changed from the previous year</em></small><br><br>
</div> 

For this map, I color each shape using 3 data classes, diverging, and using red (tract went down a tier) vs blue (tract went up a tier).

### Step 7: Update cpstiers.opencityapps.org

Finally, my maps are done! All that’s left is to swap out my Fusion Table ID, since I created a new one, and update some text throughout the site.

The code for the CPS Tiers website is open source on [GitHub](https://github.com/open-city/cps-tiers), and you can see every change I made [using this handy comparison view](https://github.com/open-city/cps-tiers/compare/0732e4dd83eb57d63f464c5c3f2ce9fe94869f10...f7aa553f520072a4ff537f4e68891e980cd37c25).

And I’m done! Until next year, when the tiers are updated yet again.


### Why this matters

I've been updating CPS Tiers this way for the past 3 years. I've met and talked to parents that use it and [heard from some of them](http://cpstiers.opencityapps.org/testimonials.html) just how challenging and unfair the Chicago Public Schools selective enrollment process is. 

This app is one way we, as civic technologists, have found to make the lives of some Chicagoans a little bit better. That's why we built it in the first place.

And it's for that exact same reason that I take the time every year to keep it going. If we are truly doing this work to improve the public good, then we need to put energy into maintaining, and not just building, civic technology.

<div style='text-align: center;'>
    <p><img src="/images/blog/2015-10-09-how-i-update-the-cps-tiers-map/img11.jpg" alt="Some civic tech puppies turn into civic tech dogs!" class='img-thumbnail' style='width: 50%;' /></p>

    <small><em>Some civic tech puppies turn into civic tech dogs!</em></small><br><br>
</div> 


### About the author

Derek is an entrepreneur, developer and one of the leaders of the civic technology community in Chicago. He is founder and partner at [DataMade](http://datamade.us), a company that tells stories and builds tools with data, co-founder of [Open City](http://opencityapps.org), a collective that makes civic apps to to improve transparency and understanding of our government, and lead organizer for the [Chi Hack Night](http://chihacknight.org), Chicago's weekly event for building civic technology with open data.
