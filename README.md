# Chi Hack Night

Website for [Chi Hack Night](http://chihacknight.org/).

**Chi Hack Night** is Chicago's weekly event to build, share & learn about civic tech.

Hosted by [DataMade](https://datamade.us/) on their [static Jekyll server](https://github.com/datamade/jekyll-hook).

## Running locally

This website is built using Jekyll. You will need to [install it first](http://jekyllrb.com/docs/installation/).

```console
git clone https://github.com/chihacknight/chihacknight.org.git
cd chihacknight.org
jekyll serve -w
```

Then open your web browser and navigate to http://localhost:4000

## Dependencies

* [Jekyll](http://jekyllrb.com/) - Static site generator built in Ruby
* [Bootstrap 3](http://getbootstrap.com) - HTML and CSS layouts
* [DataTables](http://datatables.net) - for searching and sorting tables
* [Mustache](http://github.com/janl/mustache.js) - templating library for javascript (used on projects page)
* [jQuery Address](http://github.com/asual/jquery-address) - for deep linking URLs on the projects page

## Projects and People

The [projects](http://chihacknight.org/open-source-projects.html) and [people](http://chihacknight.org/open-source-people.html) pages are powered by [Github](https://github.com/) and [civic-json-worker](https://github.com/open-city/civic-json-worker), 
a script we run every 5 minutes that fetches data from the [Github API](http://developer.github.com/). 

The JSON files are backed up every hour in the [civic-json-files](https://github.com/open-city/civic-json-files) repository.


## Deploying

@evz set up a [deploy hook](https://developer.github.com/guides/delivering-deployments/) infrastructure with GitHub for static sites. Now, instead of pushing to gh-pages to deploy, we created a new branch called deploy that does the same thing.

For example, you can deploy the latest changes (provided you have push access) by pushing to origin (GitHub) the master branch into deploy

```
git push origin master:deploy
```

This will trigger the deploy hook and an automatic build on the static server. Bonus! It's faster than GitHub Pages due to much lower usage (they are doing ~20k page builds / day) 😄
