---
layout: blog
categories: 
  - blog
title: "Taking Predictive Analytics to the Beach"
description: "Chicago is piloting an analytical model to enhance its Park District’s regular beach water quality inspection process. The model, which was built entirely by a team of volunteers from Chicago’s civic tech community, aims to predict which beaches may need to close based on likely E. Coli contamination."
date: 2016-06-23
image: /images/blog/2016-06-23-taking-predictive-analytics-to-the-beach/img0.jpg
author: Sean Thornton
author_url: https://twitter.com/ThorSean
author_image: /images/people/sean_thornton.jpg
author_bio: "Sean Thornton is a Program Advisor for the Ash Center's Civic Analytics Network and writer for Data-Smart City Solutions.  Based in Chicago, Sean holds joint Masters’ degrees from the University of Chicago, in Public Policy and Social Service Administration. His work has spanned the city's public, philanthropic, and nonprofit sectors."
published: true
---

**A Chicago Project for Safer Beach Water is Bringing the Citizen Data Scientist into Civic Tech**

<p class="text-center">
    <img src="/images/blog/2016-06-23-taking-predictive-analytics-to-the-beach/img0.jpg" alt="Oak Street Beach in Chicago" class="img-thumbnail"/><br />
    <small>
        <em>Oak Street Beach in Chicago</em>
    </small>
</p>

For Chicagoans, few things are as enjoyable as a day at the beach. That joy, however, is contingent on clean waters that are free of contaminants such as E. coli bacteria. This year, Chicago is piloting an analytical model to enhance its [Park District’s](http://www.chicagoparkdistrict.com/) regular beach water quality inspection process. The model aims to predict which beaches may need to close based on likely E. Coli contamination, which will help protect the public by providing more timely advisories.

This is not the city’s first municipal predictive analytics project: Chicago has had success with predictive models for rodent baiting operations and food establishment inspections, among other areas. It is, however, the first built entirely by a team of volunteers from Chicago’s civic tech community. 

The work of these civic-minded “citizen data scientists” signals a maturation in the relationship between Chicago’s local government and its civic tech community. It also offers both questions and insights into how such a relationship could potentially evolve towards a new partner-driven model for advancing municipal analytics initiatives. 

### Chicago’s Civic Tech Scene

Every Tuesday evening in Chicago’s massive [Merchandise Mart](http://www.merchandisemart.com/) building, around 100 people gather to network, hear speakers from the civic tech field, and work on civic coding projects. Described as “Chicago’s weekly event to build, share and learn about civic tech,” the [Chi Hacknight meet-up group](https://chihacknight.org/) has become one of the more active and well-known civic tech communities in the country. Chi Hacknight has expanded over the course of its four-year existence to include a dozen [active learning and breakout groups](https://chihacknight.org/breakouts.html), which work on projects ranging from Twitter mining to transit mapping.

While many of the meetup’s regulars have a coding or tech background, Chi Hacknight’s organizers work to ensure that civic technology is accessible to all interested citizens. Derek Eder, co-founder of civic tech startup [DataMade](https://datamade.us/) and host of Hacknight, helps ensure this is the case.

“As we’ve grown over time, we’ve expanded the range of issues we can tackle, which has brought in this great, diverse group of people who want to help their city,” Eder notes. “There’s so much more to a successful civic project than writing code. Our best projects are often ones done in a multidisciplinary context—so the more researchers, policy wonks, lawyers, activists, and so forth that get involved, the better.”  

Attendees often have varied backgrounds ranging from economics, statistics, and data science to sociology, community organizing, and nonprofit management.  Staff from the city’s [Department of Innovation and Technology](http://www.cityofchicago.org/city/en/depts/doit.html) (DoIT) frequently visit as well; in particular, Chicago Chief Data Officer Tom Schenk has made himself available to the public on a weekly basis to help answer questions about the city’s data portal and to find collaboration opportunities for the city and civic tech community.

At a hack night in in September 2015, Schenk met with Scott Beslow and Forest Gregg, two civic technologists from volunteer-driven civic app group [OpenCity](http://opencityapps.org/). Through OpenCity, Beslow had created a new app that served an important service: notifying the public which Chicago beaches had the highest E. coli levels during a given season, based on historical data. Called [Drek Beach](http://drekbeach.org/) and described as “the battle to be Chicago’s most poop-filled beach,” the site used open data on swim advisories, swim bans, and E. coli tests to determine which Chicago beaches held the highest “poo score” for a given beach season. The site, [an entrant](http://www.cnt.org/sites/default/files/factsheets/2015AppsComp_Teams.pdf) in the Center for Neighborhood Technology’s [2015 Urban Sustainability Apps competition](http://www.cnt.org/events/4th-annual-urban-sustainability-apps-competition), has helped bring attention to beach water safety issues.

Schenk, Beslow, and Gregg realized work could be done with the city on a larger beach safety project, using data already available on a host of public portals. In November 2015, Schenk launched a breakout group at Chi Hacknight focused exclusively on building a model for beach water quality inspection analytics. 

Over the next six months, a team of volunteers, facilitated by Schenk, worked on tackling beach safety. To begin, though, the group needed a better understanding of the ins and outs of Chicago’s beaches.

### Fertile Ground for Analytics: Beach Season in Chicago      

Every summer, Chicago’s beaches attract millions of visitors, bringing adults, children, and families to Lake Michigan’s sandy shores. Ensuring that waters are safe is one of the Chicago Park District’s top summer priorities. The Park District has a website, [CPDbeaches.org](http://www.cpdbeaches.com/home.cfm), which lists all beach locations, events, and volunteer opportunities for residents. The site also provides key data readings on E. coli levels, important to both city officials and the general public. 

The Park District conducts culture-based E. Coli tests on a daily basis at each beach to determine bacteria levels. According to the [US Environmental Protection Agency’s beach policy](https://www.epa.gov/beach-tech/about-beach-act), local governments must notify the public when E. coli bacteria levels are above the federal water quality Beach Action Value (BAV) of 235 parts per million (or 225 milligrams per liter). These culture-based tests take 18 hours to process, creating a considerable lag time before the city can determine whether a beach should remain open or not.

In response to this problematic lag time, the Park District began [using predictive models](http://www.youtube.com/watch?v=5GTUW_NBXu4) in 2012 to provide more timely and accurate water quality information to the public. These models, developed collaboratively by the [US Geological Survey](https://www.usgs.gov/) and [Michigan State University](https://msu.edu/), use weather data from sensors on buoys and weather stations, such as temperature, rainfall, wave height, and water clarity, to predict water quality.

However, these predictions have not always been precise. By limiting the predictive model to its own locally collected data source, the Park District wound up with both false-positive and false-negative results at times, meaning beaches were sometimes closed when levels were actually below the EPA’s BAV, and others were kept open when levels were actually above the BAV.

Incorrect closures create obvious [economic and health problems](http://pubs.acs.org/doi/abs/10.1021/es034905z): revenue is lost if a safe beach is closed, and public health is at risk if a contaminated beach is open. Consequently, the Chicago Park District welcomed any improvements to its model in order to mitigate these effects. 

“We’ve got all this data, and we have a problem we need to solve, and there’s people out there who were interested in bringing their own expertise to help solve it,” said Cathy Breitenbach, Director of Cultural and Natural resources for the Chicago Park District, [to a local news station](https://www.wbez.org/shows/wbez-news/its-official-beach-season-in-chicago-begins-now/cb7a9981-b8b0-4475-bd34-4e93a7b32827). “If it turns out [Chi Hacknight volunteers] can improve upon the models we’ve built, we’d be very happy to see how we can implement it.”

### A volunteer-driven model for beaches

At Chi Hacknight, many attendees were yearning for an opportunity to put their advanced analytics skills to use in service of the public. One of these attendees was Kevin Rose, a Hacknight regular who had been first intrigued by the beach analytics project as a newcomer.    

“Of all the breakout groups going on at Chi Hacknight, the beach analytics one really called out to me,” Rose said. “The project fit my interests and skills the most – and was calling for a specific answer to a public problem. It looked like something I would enjoy.”

For Rose and many others, Schenk’s beach water quality breakout group proved to be a strong fit for their interests. Its objective was clear from day one: volunteers would create a statistical model to minimize both unnecessary beach warnings/closures and exposure to unsafe levels of E. Coli. If successful, this model would then be piloted by the Chicago Park District to replace their current one—and ideally become part of the agency’s new operational norm going forward.

Throughout the project’s duration, the group’s work focused on broadening the scope of the original model to include new variables. While the prior model relied primarily on the Park District’s immediate sensor data, the group tested a wide range of external data, including NOAA weather data, sunrise, sunset, and lunar phase data, and data on the status of regional locks and dams. Hyper-local weather information was also integrated into the model, from external data sources such as [forecast.io](http://forecast.io/) and [darksky.net](http://darksky.net/app/). For good measure, Beslow’s poo score was included as well. 

The group operated from November 2015 through late May 2016– the start of Chicago’s beach season. While originally starting with Schenk, Beslow, and Gregg, the group eventually attracted over a dozen volunteers, with a core group of five contributing the most.

By May, the group’s collective work yielded more than Schenk could have imagined: not one, but four models were developed for pilot program testing. Following Park District approval, all four models will be tested using the 2016 season’s incoming beach water quality data, which is now available on the city’s data portal. The model with the highest level of BAV detection at city beaches will then be implemented as part of the Park District’s regular operations for the 2017 season, provided it is an improvement on the city’s current model. The group’s models are currently available for use on the [City of Chicago’s GitHub page](https://github.com/Chicago/e-coli-beach-predictions). 

The pilot’s eventual outcome will hopefully benefit Chicago, but its implication may also go much further. Many cities and regions across the world have far greater water contamination issues than Chicago does, and similar analytical models may provide a cost-effective means to help address them.   

### Municipal Analytics and the Citizen Data Scientist      

As demand for data scientists continually outstrips supply, a new role has emerged—that of the “citizen data scientist.” [First coined by IT research and consulting firm Gartner](http://www.informationweek.com/big-data/big-data-analytics/citizen-data-scientists-7-ways-to-harness-talent/d/d-id/1321389), a citizen data scientist is defined as “a person who creates or generates models that leverage predictive or prescriptive analytics, but whose primary job function is outside of the field of statistics and analytics.”

Gartner’s definition is within the context of a company or organization: a business analyst or other data-savvy staffer who, with some training, could take on the “citizen” moniker to address their firm’s data scientist shortage. But that shortage applies to municipal governments as well — and arguably to a greater degree, as the public sector cannot match the private sector’s compensation levels. As public sector analytics efforts grow, the need for data scientists—or, at least, citizen data scientists—is higher than ever. 

Many of Chicago’s analytics initiatives have been cleverly designed to address the skills shortage. For example, while DoIT does have a small number of data scientists on its staff, it enlisted pro-bono assistance from the data scientist team at Allstate Insurance to take its [food inspections analytics program](http://datasmart.ash.harvard.edu/news/article/delivering-faster-results-with-food-inspection-forecasting-631) to new heights. Chicago’s work with Allstate is one of many cross-sector partnerships the city engages in to advance its analytics efforts.   

Chi Hacknight’s beach water safety project volunteers work in a wide range of fields, from healthcare to insurance to neuroscience, and possess a range of statistical and analytical skills that make them more than capable to take on similar efforts. Gartner’s definition focuses on citizen data scientists within an enterprise, but Chi Hacknight’s team takes the citizen concept and moves it into a whole new arena: the civic tech community, which has yet to see this type of activity openly discussed.  Its approach is different from Gartner’s: for a civic citizen data scientist, their primary job is entirely outside of the civic arena, yet they’re voluntarily generating valuable work. 

With the beach water analytics project, Chi Hacknight’s volunteers and the city have also engaged in a mutually beneficial relationship: its volunteers receive great professional experience and can directly contribute to improving their city, while the city enhances its own operations in the process.

It’s a point not lost on Rose when reflecting on his work.

“As contributors, we all saw the tangible effect our work could have on policy,” he notes. “Being the ones who can help make a change—it’s pretty cool, and it’s a strong motivator.  The interaction space between local government and its citizens is growing. Our group’s work with beaches has definitely encouraged me to keep on being a part of it.”    

It remains to be seen how the civic “citizen data scientist” model will continue to evolve over time, in Chicago or elsewhere, but the foundation Chicago has developed to unite skilled and motivated citizens with meaningful projects provides a powerful template moving forward.     

With talented civic technologists from his Chi Hacknight now engaging directly with the city, Eder sees the beach water project as a potential model for other cities as well. “The work being done in our civic tech community has, I hope, set an example for how similar communities in cities across the country can operate with their governments,” Eder said. “It’s the first of what I hope to see as a series of projects in which government is taking steps towards working with public volunteers, from beginning to end—in order to be more open, transparent, and accountable.”

*This was originally posted on [Data-Smart City Solutions](http://datasmart.ash.harvard.edu/news/article/taking-predictive-analytics-to-the-beach-855) on Jun 20, 2016.*