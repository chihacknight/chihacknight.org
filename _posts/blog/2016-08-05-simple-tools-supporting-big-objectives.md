---
layout: blog
categories: 
  - blog
title: "Petcokealerts.org: Simple tools supporting big objectives"
description: "Petcokealerts.org supports advocacy groups on the southeast side in their fight against an environmental injustice."
date: 2016-08-05
image: /images/blog/2016-08-05-simple-tools-supporting-big-objectives/screenshot.jpg
author: Ben Wilhelm
author_url: http://benwilhelm.com
author_image: /images/people/benwilhelm.jpg
author_bio: "Ben has been a web developer since 2009 and a Hack Nighter since 2014. He loves his wife, his son, and Chicago. And empanadas."
author2: 
author2_url: 
author2_image: 
published: true
---

<p class="text-center"><img src="/images/blog/2016-08-05-simple-tools-supporting-big-objectives/screenshot.jpg" alt="Petcokealerts.org" class="img-thumbnail"/><br />

<small>
    <em><a href='http://Petcokealerts.org' target='_blank'>Petcokealerts.org</a></em>
</small>
</p>

**[Petcokealerts.org](http://Petcokealerts.org)** was conceived, like so many civic tech projects in Chicago, on a Tuesday night. 

On [March 24, 2015][hacknight], Olga Bautista of the [Southeast Side Coalition to Ban Petcoke][coalition] and Benjamin Sugar from [Public Lab][publiclab] presented at the Hack Night about their balloon mapping efforts at the KCBX bulk storage facilities in Southeast Chicago. KCBX was operating a storage facility for petroleum coke, aka “petcoke”, a carbon byproduct of the oil refining process. 

The petcoke was piled up 45 feet high, running from 100th Street to 111th Street, a distance of a mile and a quarter. 

[hacknight]: /events/2015/03/24/diy-environmental-monitoring.html
[coalition]: https://www.facebook.com/Chicago-South-East-Side-Coalition-To-Ban-Petcoke-848330295223606
[publiclab]: https://publiclab.org/

<p class="text-center"><img src="/images/chihacknight-148-sugar-bautista.jpg" alt="Benjamin Sugar and Olga Bautista at Chi Hack Night #148" class="img-thumbnail"/><br />

<small>
    <em>Benjamin Sugar and Olga Bautista at <a href='/events/2015/03/24/diy-environmental-monitoring.html'>Chi Hack Night #148</a></em>
</small>
</p>

### A public health hazard in Southeast Chicago

Olga kicked off her presentation by showing photos from a summer barbeque that was ruined when a thick black cloud blew through the neighborhood, covering people, food, and pets in a fine dust that leaves behind an oily black residue that is very difficult to wash off. 

She went on to detail the [particularly hazardous nature][cdph-pamphlet] of petcoke dust, namely that its very small particle size means it can pass directly through the lungs and into the bloodstream, causing heart and lung disease. 

Olga and the Coalition were working tirelessly to get the City of Chicago to evict this health hazard from the area, and in the interim, the Chicago Department of Public Health had issued a recommendation that residents stay indoors when winds exceeded 15 miles per hour. 

While we can applaud the CDPH for recognizing the health hazard and issuing a recommendation at all, the specifics of this one were utterly impractical. The entire neighborhood of Hegewisch is just supposed to stay indoors on windy days? People still need to go to work. Kids need to get to school. You can’t just call halt on a whole neighborhood every time it’s windy outside. 

[cdph-pamphlet]: https://www3.epa.gov/airnow/particle/pm-color.pdf

### The idea

I had just finished working with Claire Micklin and Alex Kahn on [MyBuildingDoesntRecycle.com][mbdr], and was looking for another project. As I listened to the presentation I began to think that the CDPH recommendation could be a useful point to rally around in the fight to ban petcoke, illustrating that the health hazard had been acknowledged by the city, but not effectively addressed yet. 

After the presentation, I spoke with Olga for quite some time about what kind of tools might be useful to her in her advocacy efforts. I brought up the point about the CDPH’s recommendation of staying indoors when the winds are high, and suggested that some sort of alert system would be useful both as a service to those wishing to stay indoors, and as a way to keep the issue at the top of residents’ minds as the Coalition worked to build public support.  

[mbdr]: http://mybuildingdoesntrecycle.com

We discussed the ways to best reach her constituency and to make the tool most useful to her.  

Interest and support for the Coalition’s work spans very broad age ranges and income levels, and Olga cautioned me against making the system too techno-centric, or relying too heavily on social media. 

Taking a cue from [mRelief][mrelief], another project born at the Hack Night, we decided that text messages would be the best way to broadcast warnings to subscribers. The other major consideration was that Olga had a long list of phone numbers that she had collected at events, and needed to be able to easily add and manage subscribers to the list herself.  

[mrelief]: http://mrelief.com

### The prototype

I got home that evening at about 9:30, and by 1 AM I had a working prototype. 

Using [forecast.io][f.io], the server would poll for wind speed in the area of the the petcoke piles.  If the wind was greater than 15 miles per hour, an alert was broadcast to all subscribers using [Twilio][twilio]. 

The website, soon to be called [petcokealerts.org][petcokealerts], consisted simply of a display of windspeed and direction, and a signup form. New subscriber information was stored in a private Google spreadsheet, which meant that Olga was able to easily add subscribers whose numbers she gathered at community events.

[f.io]: http://forecast.io
[twilio]: http://twilio.com
[petcokealerts]: http://petcokealerts.org

### The team assembles

The following week, I started a [breakout group][breakout] for the project. Justin Manley and Jason Wang joined me, and we met Olga that weekend in Hegewisch to tour the piles and the neighborhood and discuss goals and possibilities for the project. We threw around some pretty grand ideas, including a mesh network of particle sensors that could monitor air quality directly instead of using wind speed as a proxy for air quality. 

In the end, however, the simple tool proved the most effective. When wind was high, subscribers would receive a warning by text, with a link back to a page on the website with health information and city offices to contact with their concerns. 

Jason, a medical student, researched the health effects and put together the main text points there, and Justin and I did the programming.  Later, we enlisted the help of Rene Paccha to translate the site into Spanish, and Stephen Liu to redesign it, but the core functionality of the site remained pretty much unchanged for over a year.

[breakout]: https://chihacknight.org/breakouts.html

<p class="text-center"><img src="/images/blog/2016-08-05-simple-tools-supporting-big-objectives/cityhallpetcokeprotest.jpg" alt="Southeast Side Coalition to Ban Petcoke protest outside of City Hall" class="img-thumbnail"/><br />

<small>
    <em>Southeast Side Coalition to Ban Petcoke protest outside of City Hall</em>
</small>
</p>

### A legal victory for the Coalition

Chicago City Council [passed an ordinance last year](https://chicago.councilmatic.org/legislation/o-2014-9766/) mandating that the piles be removed or enclosed by June 9, 2016, and although KCBX tried hard to fight it, in the end they complied. By the time the piles were removed, the system had nearly 400 subscribers, and had alerted them to high winds on 96 days. 

And now, the [petcoke piles are gone](http://progressillinois.com/quick-hits/content/2016/06/09/chicagos-southeast-siders-secure-petcoke-victory-detail-next-steps). 

The KCBX site is still permitted to be used as a transfer point from rail to barge, but the stockpiles have been removed, and all of the machinery is disassembled and stacked neatly along the river. 

Olga and the coalition fought relentlessly during that time for their community. They quite literally moved mountains to improve the health of their families and neighbors, and I’m very proud that we have been able to support their efforts.  
