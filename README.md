# Open Gov Hack Night

Website for Chicago's weekly Open Gov Hack Night

## Running locally

```console
git clone https://github.com/open-city/open-gov-hack-night.git
cd open-gov-hack-night
gem install jekyll
jekyll serve
```console


## Dependencies

* [Jekyll](http://jekyllrb.com/) - Static site generator built in Ruby
* [Bootstrap 3](http://getbootstrap.com) - HTML and CSS layouts
* [DataTables](http://datatables.net) - for searching and sorting talbes
* [Mustache](http://github.com/janl/mustache.js) - templating library for javascript (used on projects page)
* [jQuery Address](http://github.com/asual/jquery-address) - for deep linking URLs on the projects page

## Projects and People

The [projects](http://opengovhacknight.org/projects.html) and [people](http://opengovhacknight.org/people.html) pages are powered by [Github](https://github.com/) and [civic-json-worker](https://github.com/open-city/civic-json-worker), 
a script we run every 5 minutes that fetches data from the [Github API](http://developer.github.com/). 

The JSON files are backed up every hour in the [civic-json-files](https://github.com/open-city/civic-json-files) repository.
