---
layout: blog
categories: 
  - blog
title: "An Intro to Web Scraping with Python"
description: "Web scraping is the task of extracting data from a website. It’s a nifty skill in any technologist’s toolkit because interesting data isn’t always accessible via an API or in a table/csv - sometimes, interesting data is just sitting on a webpage."
date: 2014-11-26
image: /images/blog/2014-11-26-an-intro-to-web-scraping-with-python/img1.png
author: Zaynaib Giwa
author_url: https://twitter.com/AmazingSpeciali
author_image: /images/people/zaynaib_giwa.png
author_bio: "My name is Zaynaib Giwa. I am a Masters student at the University of Illinois. When I am not working on data projects, I read comic books in my spare time."
author2:
author2_url:
author2_image:
published: true
---

__Update:__ There is now a video edition of this blog post thanks to the kind folks over at [Webucator](https://www.webucator.com/programming/python.cfm) Check it out!

<iframe width="560" height="315" src="https://www.youtube.com/embed/VIe7ES7N6Xk" frameborder="0" allowfullscreen></iframe>

---

<p>Web scraping is the task of extracting data from a website. It&rsquo;s a nifty skill in any technologist&rsquo;s toolkit because interesting data isn&rsquo;t always accessible via an API or in a table/csv - sometimes, interesting data is just sitting on a webpage.</p>
<p><!-- more --></p>
<p>Just about any information that can be viewed in a browser can be scraped and stored for further data analysis. Web pages are scrape-able because the content on any web page is structured with HTML. For anyone who isn&rsquo;t familiar with HTML, see&nbsp;<a href="http://www.w3schools.com/html/html_intro.asp">http://www.w3schools.com/html/html_intro.asp</a></p>
<p>This is a tutorial for anyone who&rsquo;s new to web scraping, using:</p>
<ul><li>python</li>
<li>beautifulsoup - a python library for pulling data out of HTML/XML</li>
<li>requests - a python library for sending HTTP requests (i.e. grabbing stuff from the web)</li>
<li>pandas - a python library for data analysis &amp; manipulation (essentially R in python)</li>
</ul><p>This tutorial assumes some working knowledge of HTML, installing python libraries, and basic coding concepts.</p>
<p><span>So, say I wanted to create a visualization of dog breed trends in America, from&nbsp;</span><a href="https://www.akc.org/reg/dogreg_stats.cfm" target="_blank">the American Kennel Club dog statistics page</a><span>. The AKC doesn&rsquo;t have a way to export their data to CSV, and it would be way too tedious to copy the data manually. To get the data, we&rsquo;ll need to scrape the web page.</span></p>
<p>The first step is to inspect the webpage using developer tools from the browser. Firefox&nbsp;<a href="https://developer.mozilla.org/en-US/docs/Tools">web developer extension</a>&nbsp;is my favorite tool to do this. If you&rsquo;re using Chrome, right click on any webpage and select &lsquo;Inspect Element&rsquo; to view the page&rsquo;s HTML.</p>
<p>As shown in the picture below, there are two tables on the AKC dog registration statistics page. We&rsquo;re interested in the second one - the one with statistics.</p>
<p><img alt="akc_dataframe" height="289px;" src="/images/blog/2014-11-26-an-intro-to-web-scraping-with-python/img1.png" width="583px;"></p>
<p>Tables in html are have four tags. Tables are defined with the<code>&nbsp;&lt;table&gt;&nbsp;</code>tag. Tables are divided into table rows with the<code>&nbsp;&lt;tr&gt;&nbsp;</code>tag. Table rows are divided into table data with the&nbsp;<code>&lt;td&gt;</code>&nbsp;tag. A table row can also be divided into table headings with the&nbsp;<code>&lt;th&gt;</code>&nbsp;tag.</p>
<p>Once we know the HTML structure of the data that we care about, we can use beautifulsoup to grab the relevant data from the HTML.</p>
<p>Before writing any code, we have to install and import the necessary libraries in Python. To import the libraries:</p>
<p><code>from bs4 import BeautifulSoup<br></code><code>import requests<br>import pandas as pd</code></p>
<p>After importing the libraries, we need to grab the HTML from the AKC webpage and create a beautifulSoup object.</p>
<div><code>url =&nbsp;"<a href="https://www.akc.org/reg/dogreg_stats.cfm">https://www.akc.org/reg/dogreg_stats.cfm</a>"</code></div>
<div><code>r = requests.get(url)</code></div>
<div><code>data = r.text</code></div>
<div><code>soup = BeautifulSoup(data)</code></div>
<div>
<p>Next, we want to grab the second table from the webpage.&nbsp;Since we want information from the second table only, we need to specify the table we want by using index&nbsp;<code>[1]</code>. If we just use&nbsp;<code>table = soup.find_all(&lsquo;table&rsquo;)</code>, it will give us both tables, and if we use&nbsp;<code>soup.find_all(&lsquo;table&rsquo;)[0]</code>, it will give us the first table.</p>
</div>
<div><code>table = soup.find_all('table')[1]&nbsp;</code>&nbsp;</div>
<p>Next we find all the tr elements, which are all the rows of table 2. We want to skip the first two rows because they contain headers, so we use<span>&nbsp;</span><code>[2:]</code><span>&nbsp;t</span>o capture only the rows with data.</p>
<div>
<p><code>rows = table.find_all('tr')[2:]</code></p>
</div>
<p>Then, we initialize a dictionary for storing the table data</p>
<p><code>data = {<br>&nbsp; &nbsp; 'breeds' : [],<br>&nbsp; &nbsp; 'rank2013' : [],<br>&nbsp; &nbsp; 'rank2012' : [],<br>&nbsp; &nbsp; 'rank2008' : [],<br>&nbsp; &nbsp; 'rank2003' : []<br>}</code></p>
<p>Next, we loop through all the rows that are in the dog statistics table, and store the data in each column.</p>
<p><code>for row in rows:<br>&nbsp; &nbsp; cols = row.find_all('td')<br>&nbsp; &nbsp; data['breeds'].append( cols[0].get_text() )<br>&nbsp; &nbsp; data['rank2013'].append( cols[1].get_text() )<br>&nbsp; &nbsp; data['rank2012'].append( cols[2].get_text() )<br>&nbsp; &nbsp; data['rank2008'].append( cols[3].get_text() )<br>&nbsp; &nbsp; data['rank2003'].append( cols[4].get_text() )</code></p>
<p>Finally, we can create a pandas dataframe from the dictionary we stored data in. A dataframe is a tabular data structure that represents rows and columns, and allows you to easily manipulate and analyze data later on.</p>
<div>
<p><code>dogData = pd.DataFrame( data )</code></p>
</div>
<p>We can also export the dataframe to a CSV.</p>
<div>
<p><code>dogData.to_csv("AKC_Dog_Registrations.csv")</code></p>
</div>
<p>So, the complete code is</p>
<div>
<p><code>from bs4 import BeautifulSoup<br>import requests<br>import pandas as pd</code>&nbsp;<br><br><code>url =&nbsp;"https://www.akc.org/reg/dogreg_stats.cfm"<br></code><code>r = requests.get(url)<br></code><code>data = r.text<br></code><code>soup = BeautifulSoup(data)<br><br>table = soup.find_all('table')[1]<br></code><code>rows = table.find_all('tr')[2:]<br><br>data = {<br>&nbsp; &nbsp; 'breeds' : [],<br>&nbsp; &nbsp; 'rank2013' : [],<br>&nbsp; &nbsp; 'rank2012' : [],<br>&nbsp; &nbsp; 'rank2008' : [],<br>&nbsp; &nbsp; 'rank2003' : []<br>}<br><br>for row in rows:<br>&nbsp; &nbsp; cols = row.find_all('td')<br>&nbsp; &nbsp; data['breeds'].append( cols[0].get_text() )<br>&nbsp; &nbsp; data['rank2013'].append( cols[1].get_text() )<br>&nbsp; &nbsp; data['rank2012'].append( cols[2].get_text() )<br>&nbsp; &nbsp; data['rank2008'].append( cols[3].get_text() )<br>&nbsp; &nbsp; data['rank2003'].append( cols[4].get_text() )<br><br>dogData = pd.DataFrame( data )<br>dogData.to_csv("AKC_Dog_Registrations.csv")<br><br></code></p>
<p>There you have it - a data set of dog registration stats. Now, time to make a visualization of dog breed data!</p>
</div>
<p><strong>Additional Links</strong></p>
<ul><li><a href="http://www.pythonforbeginners.com/python-on-the-web/web-scraping-with-beautifulsoup/">A basic tutorial on Beautiful Soup</a></li>
<li><a href="http://www.gregreda.com/2013/10/26/intro-to-pandas-data-structures/">A basic tutorial on Pandas</a></li>