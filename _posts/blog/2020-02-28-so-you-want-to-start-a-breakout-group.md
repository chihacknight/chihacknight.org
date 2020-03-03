---
layout: blog
categories: 
  - blog
title: "So you want to start a breakout group?"
description: "A practical guide to running breakout groups at Chi Hack Night. Have an idea for a breakout group? This guide is for you! It contains hard-earned knowledge, recommendations and resources compiled by Chi Hack Night veterans."
date: 2020-02-28
image: /images/events/potluck-collage.jpg
author: Yonatan Kogan
author_url: 
author_image: /images/people/yonatan_kogan.jpg
author_bio: "Chi Hack Night Breakout Group Leader"
author2: Karl Fogel
author2_url:
author2_bio: "Chi Hack Night Member"
author2_image: /images/people/karl_fogel.jpg
published: true
---
<p class="text-center"><img src="/images/events/potluck-collage.jpg" alt="Chi Hack Night Breakout Groups" class='img-responsive'/>
</p>
**A practical guide to running breakout groups at Chi Hack Night**

Have an idea for a breakout group? Awesome! There is no one way to run a breakout group. You can meet as frequently (or infrequently) as you like. If you think that your idea demands less (or more) infrastructure than what is outlined here, you're probably right! This document is just a set of suggestions based on experience with breakout groups so far -- if your group uncovers new techniques for breakout group success, let us know, and we’ll add them to this document.

## 1\. What are breakout groups?
Breakout groups are self organized teams at Chi Hack Night that facilitate conversations, answer questions, and work on civic technology projects. See [the Chi Hack Night Breakouts page](https://chihacknight.org/breakouts.html) for more info.

## 2\. Expectations of breakout group leaders

* **Genuinely care about your project!** It also helps to have experienced the challenge you are addressing personally.

* **Have a vision.** Details can come later, but have a basic idea of what the group is meant to do. You don’t need have all the engineering planned out in advance; in fact, it’s better if you don’t, because then participants in the group can help make the design choices. The vision can be big, but it must still be specific and actionable. The group has to be able to break it down into separate tasks and work on part of the vision at a time. “Let’s help the City government use data better” is not specific and actionable. “Let’s use [specific data X] to help people achieve [specific outcome Y]” is better. (This is just for the sake of example -- not all breakout group projects are about data.)

* **Always have a short pitch ready.** You will be asked to explain your breakout group every week, often to potential new volunteers. You should be able to explain it in a minute or so. This will enable a potential participant to quickly determine whether they want to learn more (either by asking you more questions, or by just coming to a session of the breakout group) or whether this group is not for them. Also, include a little news update when you pitch your project each Tuesday. What did you accomplish since last Tuesday? Sometimes more than half the attendees at Chi Hack Night have never been there before. After a few breakout pitches that include updates, the new folks will have a much better idea how this all works.

* **Have a visible presence at Chi Hack Night**, especially as your breakout group is just getting started. Your dependability and consistency each week will inspire the same in others -- once they’ve had enough time to be exposed to it.  
    
* **Write getting-started documentation for onboarding new people.** Every participant is a newbie at first, and they’ll often have the same or similar questions. Make your life easier by writing all the common questions down. Early on, set a project culture of answering those questions cheerfully -- today’s newbie is tomorrow’s expert, and then they can answer questions from the new newbies.

* **Communicate your needs and expectations to your group clearly.** Make sure that there is rough consensus at all times on what the group is building and why you’re all building it.

* **Ask participants about their interests and availability.** Then help them choose appropriate tasks that they can complete and that will hold their interest.

* **Be realistic with yourself about how much time / effort you can give.** Don’t burn out. If you find yourself burning out, that can be a sign that you’re trying to do too much yourself instead of actively encouraging other people take on tasks. Usually, the role of a breakout group leader is mainly to coordinate: if you have a choice between doing a thing and enabling someone else in the group to do it, choose to enable others as much as possible.

* **Always give participants a sense of where the project is in terms of completion.** It’s okay for a breakout group to end when it’s accomplished its goal; it’s also okay for it to continue on to address a new or expanded goal. But participants should feel at all times like they know what goal or sub-goal they are working toward, and when something is accomplished, everyone involved should know that it was accomplished.

## 3\. Soft recommendations
These aren’t necessarily “expectations of leaders”, but they’re still bits of advice that we think are worth considering for any breakout group.

* **If you are writing code, run the project as [Open Source](https://opensource.org/definition) from day one.** This basically means putting an open source license at the top of the project repository, and using open forums for all online communication (e.g., create a mailing list instead of sending email to people’s individual inboxes). Open-sourcing is super easy -- if you haven’t done it before, just ask around; plenty of people at Chi Hack Night will be able to help (and ask around within your breakout group first, because maybe one of the participants already knows how to do it).

* **Have a lot of easily-digestible, bite-sized tasks.** Saying “we need to redo the frontend” will probably result in an unproductive night. Many of the participants may still be unfamiliar with your project, and won’t be able to dive in to fix a large-scale problem in 2.5 hours. But if you break it into small tasks, like “update copy on sign up page”, “replace all generic button components with new custom Button components”, etc, then people can get to work right away -- and in parallel too. If you do want to address a bigger issue, discuss it with the group to figure out how to break it up into manageable tasks first.

*  **Use collaboration tools to coordinate work.** Maintain a list of tasks in a shared place online -- it could be a GitHub issue tracker, a spreadsheet, or a shared document. If there is code, make sure it is maintained in a version control repository (e.g., on GitHub). If you’re not experienced using collaboration tools, that’s okay, just ask for help from others at Chi Hack Night -- especially from others in the breakout group, who may know how to use some of these tools.

* **Archive decisions in a findable way.** Institutional memory is especially important in a group where the membership is likely to gradually change over time. Fortunately, modern computers and networks offer many ways to store and find information; use them!

* **Have a clear guide to contributing:**
  * How do I open a pull request? How do I get someone to review it?
  * Where can I find issues/tasks meant for new contributors?
  * Does the project use a particular branching model for git (i.e. GitFlow)?
  * Who do I contact with questions?
  * What third-party software does this project rely on?
  * Is there a way to test my code/design before pushing to production?

Projects usually put this information in the top-level README or in a CONTRIBUTING file, or perhaps in a Google doc. It is normal to start out by copying your contribution guidelines from some other project and modify from there -- ask around for a good starting template.

* **Make sure people know how to continue working together outside of Hack Night.** Chi Hack Night only lasts a few hours. While some issues can be solved in 1-2 hours, others take longer. Make sure the participants know where to go to continue collaborating (e.g., a forum in which to ask questions that they might have as they're completing a pull request). The project's chat channels (IRC, Slack, Zulip, or whatever), Google Group or other message forums, and any other communications platforms should be documented in the contribution guide.

* **[Build with, not for](https://www.newamerica.org/oti/blog/build-with-not-for-a-civictech-manifesto/).** Community-led design is the most successful model, according to participants from all sectors (government, for-profit, nonprofit, and social movement). It is crucial to involve people in the design of technology that is supposed to benefit them, and to do so at all stages of the design process (not just at a moment in the beginning). Models that lack community accountability usually fail.  Engagement with communities on the ground is essential. “Silver bullet” approaches not only tend to fail, but can harm communities. It is important to center community needs over tools.

* **Resilient solutions work better than cool new tech.** Innovation is not the goal: many practitioners in civic tech have observed that too much time and resources go to developing new tools, rather than maintaining, upgrading, and supporting proven tech solutions. Consider the possibility that your breakout group doesn’t have to start from scratch. There may well be some open source technology out there that does 80% of what you want already. Build on that, instead of starting over.

*  **If you’re stuck, try making what’s called a “minimum viable product.”** What’s the simplest version of your idea you could possible put together? A little forward momentum can pull a stuck group out of a rut and give you something to show people outside the group to help them understand what you’re doing.

## 4\. Challenges to expect

* **You and others will likely need to work on the project outside of Chi Hack Night events.** That doesn’t mean every person involved must do so, but if no one works on it outside of Hack Night, it probably won’t make much progress.

* **Participants may not attend consistently.** Try to get a realistic (and blame-free) sense from each person of how often they’ll be coming, so the group can divvy up tasks accordingly.

* **All the skills your group needs may not all be present in your group all at the same time.** Be willing to ask for help when needed -- help from other people at Chi Hack Night, from other people on the Internet, from wherever you can find it.

## 5\. Acknowledgements and Sources

This document draws on a number of earlier documents and presentations. We hope the following is a complete list, and if we have left out any sources, we apologize (and would appreciate a correction):

*   Some great [interview notes](https://github.com/chihacknight/breakout-groups/issues/86) from leaders of actual breakout groups, about what worked and what didn’t.
*   [Synthesis & observations about breakout groups](https://github.com/AcademyInPeril/breakout-groups-faq/blob/master/breakout-groups-faq.md), by Soren Spicknall.
*   [Cameron Sow’s Breakout Group Materials List](https://docs.google.com/document/d/19W-FJohMObzqu9hDZtE6VEP17hC914dsKotISCMBau4/edit?usp%3Ddrivesdk)
*   [Derek Eder’s Breakout Groups guide & links list](https://github.com/chihacknight/leadership-council/issues/1)
*   [How to get your project rolling at Progressive Hack Night](http://www.progressivehacknight.org/culture/2017/07/05/ramping-up-projects.html) (PHN is a group in New York with a similar structure to Chi Hack Night)
*   [More Than Code: Technology for Social Justice Field Scan](https://morethancode.cc/)
*   Chi Hack Night main stage presentations from breakout groups:
*   [Justice Media Project](https://chihacknight.org/events/2018/05/01/the-justice-media-project.html) (Chi Hack Night presentation - has a good section on how they organized)
*   [Re(turn): Civic Tech, ReEntry, and Collaboration](https://chihacknight.org/events/2018/05/29/access-to-justice.html) (Chi Hack Night presentation by Access to Justice -- section on challenges and opportunities around 13:18\. See also the related 2016 “Access to Justice” lightning talk below.)
*   [Building an app for the immigrant community (at Chi Hack Night!)](https://chihacknight.org/events/2018/04/03/icirr-app.html) (Chi Hack Night presentation by Yonatan Kogan -- Good section on collaboration with a nonprofit)
*   [mRelief](https://www.youtube.com/watch?v%3D2w7peIgC-0M%26t%3D0s%26list%3DPL_dBjjdnIbKwHzFrcg9pxnCx83YRRHUXs%26index%3D8)
*   [Yonatan Kogan, ICIRR App](https://www.youtube.com/watch?v%3DAjwX5YJTun4)
*   [Claire Micklin, My Building Doesn't Recycle](https://www.youtube.com/watch?v%3DtWUQyahTt5w)
*   [Joel Inwood, The Chicago Nursing Home Report](https://www.youtube.com/watch?v%3DdAS4vBhTO6o)
*   [Steve Luker & Adam Hecktman, Chi Safe Path](https://www.youtube.com/watch?v%3DFWkRY9FZQM4)
*   [Slow Roll at OpenGov Hack Night](https://www.youtube.com/watch?v%3DzbZix9lhSdk%26t%3D0s%26list%3DPL_dBjjdnIbKwHzFrcg9pxnCx83YRRHUXs%26index%3D82)
*   [Highlights Modeling Pension Reform at OpenGov Hack Night](https://www.youtube.com/watch?v%3Dj0iEbcDUcl0%26t%3D0s%26list%3DPL_dBjjdnIbKwHzFrcg9pxnCx83YRRHUXs%26index%3D90)
*   [Building Schoolcuts.org, Pt 1: Problem](https://www.youtube.com/watch?v%3DRQea64HuU70%26t%3D0s%26list%3DPL_dBjjdnIbKwHzFrcg9pxnCx83YRRHUXs%26index%3D71)
*   [Building Schoolcuts.org, Pt 2: Opportunity](https://www.youtube.com/watch?v%3DPYYpoa_HVNY%26t%3D0s%26list%3DPL_dBjjdnIbKwHzFrcg9pxnCx83YRRHUXs%26index%3D70)
*   [Building Schoolcuts.org, Pt 3: Solutions & Challenges](https://www.youtube.com/watch?v%3DzWSj4ot0DZ0%26t%3D0s%26list%3DPL_dBjjdnIbKwHzFrcg9pxnCx83YRRHUXs%26index%3D69)
*   Chi Hack Night Lightning talks from breakout groups:
*   [Joseph Smalzer, Access to Justice](https://www.youtube.com/watch?v%3DPlvU7gbU_go)
*   [Claire Micklin, My Building Doesn't Recycle, the Final Frontier](https://www.youtube.com/watch?v%3DNnu-3J8xKiI)
*   [Claire Micklin, My Building Doesn't Recycle, the Odyssey](https://www.youtube.com/watch?v%3DooSZv7_2SrI)
*   [Rebecca Jones, Predicting E. Coli Exceedances](https://www.youtube.com/watch?v%3DA9UPmQFACEA)
*   [Ben Galewski, The Pension Project](https://www.youtube.com/watch?v%3DcYykJsGGO1Q)

Additional contributions by Joel Inwood, Derek Eder and Steve Ediger.