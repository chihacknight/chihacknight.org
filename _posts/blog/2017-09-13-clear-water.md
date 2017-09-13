---
layout: blog
categories: 
  - blog
title: "The Clear Water Project"
description: "Chicago's Clear Water Project is an effort to keep beaches safe through a combination of new water testing technologies, predictive modeling, and continued volunteer engagement. Based on its pilot run in 2017, the Clear Water Project method was able to issue water quality advisories with three times more accuracy than Chicago’s previous method."
date: 2017-09-13
image: /images/blog/2017-09-13-clear-water/img8.jpg
author: Sean Thornton
author_url: https://twitter.com/ThorSean
author_image: /images/people/sean_thornton.jpg
author_bio: "Sean Thornton is a Program Advisor for the Ash Center's Civic Analytics Network and writer for Data-Smart City Solutions.  Based in Chicago, Sean holds joint Masters’ degrees from the University of Chicago, in Public Policy and Social Service Administration. His work has spanned the city's public, philanthropic, and nonprofit sectors."
published: true
---

**Chicago Advances Beach Water Quality with Analytics**

<p class="text-center">
    <img src="/images/blog/2017-09-13-clear-water/img8.jpg" alt="Oak Street Beach in Chicago" class="img-thumbnail"/>
</p>

Ask someone about their last trip to a beach, and you’ll likely hear pleasant stories of relaxation and fun in the sun. Most of the time, those toes in the sand are being splashed with clear and safe water. Yet bacteria in that water can sometimes pose a public health risk. For example, *Escherichia coli*, when present in high quantities, can cause stomach flu, colds, skin rashes, and other health complications. Given that millions of people visit beaches in the United States every year, it’s a top priority for local public officials to ensure that the water is safe.

Dotted across its 26 miles of Lake Michigan shoreline, Chicago’s beaches are one of its most popular summertime attractions, with more than 20 million visitors a year. To ensure the safety of its beachgoers, the city piloted an analytical model last year to enhance beach water quality inspection processes conducted by the Chicago Park District. The model aimed to predict which beaches needed to be closed based on likely levels of *E. coli*, thus safeguarding the public with more timely advisories.

Perhaps most intriguing about the project was not the model itself, but how it was developed. While the effort was led by the city, the model was built entirely by a team of volunteers from Chicago’s civic tech community—a group of civic-minded “citizen data scientists” who donated their time and talent to help serve the public. The project helped lay out a new partner-driven model for advancing future municipal analytics initiatives.

### Based on its pilot run in 2017, the Clear Water Project was able to issue water quality advisories with three times more accuracy than Chicago’s previous method.

<p class="text-center">
    <img src="/images/blog/2017-09-13-clear-water/img0.jpg" alt="Lake Michigan, August 2017" class="img-thumbnail"/><br />
    <small>
        <em>Lake Michigan, August 2017</em>
    </small>
</p>

Now, a year later, the effort has matured into what’s become known as the Clear Water Project, a broader push to keep beaches safe through a combination of new water testing technologies, predictive modeling, and continued volunteer engagement. Based on its pilot run in 2017, the Clear Water Project method was able to issue water quality advisories with three times more accuracy than Chicago’s previous method.

Clear Water’s story – particularly in relation to a changing landscape for water inspection technology – shows that nimbly including analytics as part of a larger strategy can produce promising and cost-effective results. 

## Beach Water Quality Testing Meets Civic Tech

For the vast majority of jurisdictions, the standard means for testing beach water is a culture-based *E. coli* test. These tests take 18 to 24 hours to process, creating a considerable lag time before city officials can determine whether a beach should remain open or not. Lag times can lead to incorrect closures, which create obvious economic and health problems: revenue is lost if a safe beach is closed, and public health is at risk if a contaminated beach is open.

Chicago’s Park District began using predictive models for its beach water quality inspection processes back in 2012, in partnership with the [US Geological Survey](https://www.usgs.gov/) (USGS), to help mitigate the lag time effect from culture-based testing. This USGS model relied on weather data from sensors on buoys and weather stations throughout Lake Michigan. However, these predictions have not always been accurate; the USGS model often led to both false-positive and false negative results, leading once again to incorrect beach closures.

That error rate is why the advanced analytics team at [Chicago’s Department of Innovation and Technology](https://www.cityofchicago.org/city/en/depts/doit.html) (DoIT) first set out to mitigate these risks via predictive modeling in late 2015. DoIT’s team, led by Chief Data Officer Tom Schenk, has used advanced analytics to enhance multiple city functions in the past, such as [rodent baiting](http://datasmart.ash.harvard.edu/news/article/using-predictive-analytics-to-combat-rodents-in-chicago-271) and [restaurant inspections](http://datasmart.ash.harvard.edu/news/article/delivering-faster-results-with-food-inspection-forecasting-631). Yet to tackle beach water inspections, DoIT’s team took a new approach by partnering with volunteers who reached out to Schenk at **Chi Hack Night**, a weekly meet-up event that educates and engages attendees in local civic technology efforts.

The [Park District’s beach website](http://www.cpdbeaches.com/home.cfm) contains the city’s most recent water quality results; on the [Chicago Data Portal](https://data.cityofchicago.org/), information from [as far back as 2006](https://data.cityofchicago.org/Parks-Recreation/Beach-Lab-Data/2ivx-z93u) on Chicago beach water safety inspection data is also included. Using this data along with externally available sources of relevant information, DoIT’s goal was to build a model that provides the Park District with a prediction of which beaches may need to be closed due to high levels of *E. coli*. Doing so could reduce lag time complications and provide more timely and accurate water quality information to the public.
Left: Chicago CDO Tom Schenk leads a group of volunteer "civic data scientists at Chi Hack Night.  Right: Part of the "beach group" at Chi Hack Night.  February 2016. 

<p class="text-center">
    <img src="/images/blog/2017-09-13-clear-water/img1.jpg" alt="Left: Chicago CDO Tom Schenk leads a group of volunteer civic data scientists at Chi Hack Night.  Right: Part of the 'beach group' at Chi Hack Night.  February 2016. " class="img-thumbnail"/><br />
    <small>
        <em>Left: Chicago CDO Tom Schenk leads a group of volunteer civic data scientists at Chi Hack Night.  Right: Part of the "beach group" at Chi Hack Night.  February 2016.</em>
    </small>
</p>

Schenk and his “beach group” of volunteers became a fixture at weekly Hack Nights in 2015 and 2016, which eventually attracted over a dozen members during its run. Working with Chicago’s beach inspection data, as well as externally available sources that included [NOAA weather data](https://www.ncdc.noaa.gov/), sunrise, sunset, and lunar phase data, and data on the status of regional locks and dams, among others, civic hackers developed not one, but four forecasting models to put to use. These models were to be tested in 2016 and potentially implemented in 2017, providing that one of them offered an improvement over the city’s then-current operations. 

## New Technologies Emerge 

Yet by the spring of 2017, the water testing scene at Chicago’s beaches looked a bit different: culture-based tests for *E. coli* were no longer the primary game in town. The rapid quantitative polymerase chain reaction (qPCR) method, otherwise known as rapid testing, uses DNA testing of water samples to provide results within three to four hours, eliminating the lag time seen in traditional culture tests.

This spring, the Park District approved a $500,000 contract to authorize the purchase of rapid testing lab equipment, along with an agreement with the [University of Illinois at Chicago](http://uic.edu/) (UIC) to help provide water testing services for all its beaches for the 2017 season. Under the contract, Park District staff have been providing morning water samples to lab researchers at [UIC’s School of Public Health](http://publichealth.uic.edu/) so that water quality advisories may be issued in near-real time.

“There’s a lot of excitement among researchers and universities and around the world about what we’re doing in Chicago,” said Dr. Samuel Dorevitch, associate professor of environmental and occupational health sciences at UIC, in an [interview with PBS](http://chicagotonight.wttw.com/2017/05/25/uic-expands-rapid-water-testing-chicago-beaches). “To some degree, it puts pressure on other cities – like, if Chicago can do it, why can’t LA or New York?”

This makes Chicago the largest city in the country to feature rapid DNA testing at its beaches, and the only one currently using the method on a daily basis.

"We find that conditions change quite a bit day to day," Cathy Breitenbach, director of the Park District's Department of Cultural and Natural Resources, [noted to the Chicago Tribune](http://www.chicagotribune.com/news/local/breaking/ct-beach-lake-water-testing-met-20170111-story.html). "The old method was just as accurate in terms of results. But by the time you get the results, the conditions would change. They didn't reflect the current conditions of the beach."

The catch, though, is that rapid testing is expensive: only a [select few beaches](http://chicagotonight.wttw.com/2017/05/25/uic-expands-rapid-water-testing-chicago-beaches) in New Jersey, Wisconsin, and California have rapid testing methods available. Moreover, while the Park District intends to continue rapid testing after the 2017 season, it encourages any new developments and partnerships that may lead to enhanced operations in the future as well. 

<p class="text-center">
    <img src="/images/blog/2017-09-13-clear-water/img2.jpg" alt="Chicago's Ohio Street Beach, August 2017." class="img-thumbnail"/><br />
    <small>
        <em>Chicago's Ohio Street Beach, August 2017.</em>
    </small>
</p>

## The Clear Water Project 

From a Park District beach manager’s point of view, water testing options for *E. coli* levels fall into three aforementioned buckets: culture testing, which produces day-long lag times; rapid testing, which is more effective but costly; and predictive analytics, which provides promising forecasting capabilities but has thus far proved fairly inaccurate. Instead of relying solely on one option, what if some combination of these methods could be used to maximize testing efficiency?

It’s in this space where the analytics work of Schenk’s DoIT team—using lessons learned from working with the civic tech community—has devised the Clear Water Project approach.

From previous research, DoIT’s team knew that five beaches out of the 20 that are regularly tested account for roughly 56 percent of all high *E. coli* incidences (i.e., poor water quality advisories) in a given year. These higher-offender locations have historically been much harder to predict than all other beaches. DoIT originally sought to provide an entirely analytics-driven solution—that is, a single model that included forecasting for both the five higher-risk and 15 lower-risk beaches. Yet given how different the results for these two groups of beaches were, the team found they were essentially trying to meet two objectives at once, which wasn’t producing effective results.

In 2017, these lessons helped the DoIT team conceive its own new, more viable approach: to continually provide rapid testing for Chicago’s five higher-risk beaches, while building a model for the remaining beaches instead. The model breaks Chicago’s 15 remaining lower-risk beaches into three to five clusters, and forecasts which beach in each cluster should receive rapid testing treatment.

In other words, by combining analytics and consistent testing as part of a larger program, the Clear Water model would help Chicago’s officials strategically deploy rapid tests to fewer beaches, yet still get accurate results. Given how expensive rapid testing is, enacting this hybrid method could potentially save Chicago’s Park District millions of dollars in the long term. 

Predicting Water Quality at Chicago's Beaches

<p class="text-center">
    <img src="/images/blog/2017-09-13-clear-water/img3.jpg" alt="Predicting Water Quality at Chicago's Beaches" class="img-thumbnail"/><br />
    <small>
        <em>Chicago's 27 beaches are highlighted here.  Given the close proximity of these beaches to one another, the Chicago Park District has 20 designated water quality testing sites along Chicago's shore.</em>
    </small>
</p>

<p class="text-center">
    <img src="/images/blog/2017-09-13-clear-water/img4.jpg" alt="Predicting Water Quality at Chicago's Beaches" class="img-thumbnail"/><br />
    <small>
        <em>Chicago's DNA rapid test results for June 14th, 2017 are featured here.  Large dots represent beaches that merit an advisory to be issued based on testing results, whereas small dots represent beaches that do not need advisories.  The Chicago's DNA rapid testing program identified five advisory-level beaches (from north to south): Montrose, 31st Street, Oakwood, 57th Street, and 63rd Street.</em>
    </small>
</p>

<p class="text-center">
    <img src="/images/blog/2017-09-13-clear-water/img5.jpg" alt="Predicting Water Quality at Chicago's Beaches" class="img-thumbnail"/><br />
    <small>
        <em>By comparison, Chicago's Clear Water project model shows similar results when detecting for incidences of poor water quality on June 16th, 2017.  Using Clear Water's hybrid method of selective testing and prediction, it identified Montrose, 12th Street, 31st Street and 63rd Street beaches as ones in need of water quality advisories, with three out of the five detected by DNA rapid testing covered.</em>
    </small>
</p>

During pilot tests in 2017, DoIT also found that the Clear Water Project was able to issue water quality advisories with three times more accuracy than Chicago’s previously used forecasting model from USGS. Yet how did the pilot produce such strong results?

During any given summer, Chicago has approximately 2,000 “beach days.” One beach day is defined as a full day a Chicago beach is open. Given that there are 20 beach testing sites, and about 100 days a year that Park District beaches are open in Chicago, the city has a grand total of 2,000 beach days. The number of beach days affected by poor water quality is generally low: on average, 150 out of Chicago’s 2,000 beach days reveal *E. coli* exceedances in water quality tests that lead to advisories.

By mid-summer 2017, there were 121 poor water quality beach days detected by rapid testing overall. When testing 2017 data against the Clear Water Project, its hybrid method was able to predict 69 out of these 121 total days on its own. To compare, the USGS model, which has been previously used by the Park District, was only able to detect an average of 9 poor water quality beach days during the previous two beach seasons. This means that, on average, the Clear Water has provided forecasting readings with more than three times the accuracy of the previously used USGS model.  

<p class="text-center">
    <img src="/images/blog/2017-09-13-clear-water/img6.jpg" alt="Predicting Water Quality at Chicago's Beaches" class="img-thumbnail"/><br />
    <small>
        <em>When compared to the Chicago Park District's previously used USGS benchmark model, the Clear Water Project's hybrid method leads to significantly more poor water quality beach days being detected. </em>
    </small>
</p>

While the brand-new method is not currently being implemented at Chicago’s beaches, these results have garnered a positive response from the Park District.

“The Chicago Park District’s collaboration with the City of Chicago’s Department of Innovation and Technology provides a platform to not only share current and historical water quality data to the public, but also encourage civic engagement and citizen science research projects,” said Carol Kim, a Project Manager with the Chicago Park District’s Department of Cultural and Natural Resources. “This key partnership has helped the Park District improve communication and data sharing to the public through the use of science and technology.”

## Keeping It Collaborative

In order for the DoIT team to get these results, external collaboration has been vital—from the effort’s early days to its current iteration as the Clear Water Project. In addition to help from citizen data scientists at Chi Hack Night, DoIT’s team received assistance from computer science students from [DePaul University](https://www.depaul.edu/), who aided in data visualization development and model enhancement. In total, volunteers across both iterations of the project provided more than 1,000 hours of work.

As an open-source project, DoIT has kept Clear Water’s material open for others’ use from the start, both to encourage collaboration locally and replication elsewhere. [Project pages on GitHub](http://chicago.github.io/clear-water/), as well as long-running beach water information on the Chicago Data Portal are available to the general public.

The DoIT team has sought to ensure public engagement on Clear Water as a means to keep the energy going for other projects in the future as well. To increase awareness and understanding of the project, the team created a “challenge page” to encourage others to try and develop a model that beats what’s already been developed: 

<p class="text-center">
    <img src="https://media.giphy.com/media/3ohhwD3QCGjzUWS3Ac/giphy.gif" alt="Predicting Water Quality at Chicago's Beaches" class="img-thumbnail"/>
</p>   

## What it All Means

With the Clear Water Project’s model capable of predicting a large number of poor beach quality days, fewer rapid tests will likely be needed in the long term. Since rapid testing comes at an increased cost, using advanced analytics to test fewer beaches would offset these costs while still providing similar results.

Clear Water’s cost-saving implications are huge for any local government that wishes to see its dollars used as effectively as possible. The project also provides a valuable lesson for implementing predictive or advanced analytics initiatives within a local government setting: flexibility and versatility—as well as an understanding that analytics can provide value in supporting or unexpected roles—are key for producing effective results.  

Nick Lucius, DoIT’s lead Data Scientist working on the Clear Water Project, certainly didn’t expect the project to look the way it did when he first began work on it.

“If we didn’t adapt, and had worked exclusively on trying to deliver our original model that covered all beaches, we wouldn’t have the Clear Water Project that we do today,” noted Lucius. “Through that learning process—which was supported by a lot of external partners, too—we were able to create a hybrid model that we’re confident in, one that can produce results.”

On August 8th, Schenk, Lucius, and other members of the DoIT team presented to a crowd of more than 100 at Chi Hack Night’s weekly gathering in Chicago’s Merchandise Mart.

“I wanted to say thank you to the whole community here, especially to those of you who participated on this project,” said Lucius. “Your contributions have made it what it is.” 

<p class="text-center">
    <img src="/images/blog/2017-09-13-clear-water/img7.jpg" alt="Chicago Data Scientist Nick Lucius speaks at Chi Hack Night, August 8, 2017." class="img-thumbnail"/><br />
    <small>
        <em>Chicago Data Scientist Nick Lucius speaks at Chi Hack Night, August 8, 2017.</em>
    </small>
</p>

*This was originally posted on [Data-Smart City Solutions](http://datasmart.ash.harvard.edu/news/article/chicagos-clear-water-project-1107) on Aug 29, 2017.*