# Chi Hack Night website

Website for [Chi Hack Night](http://chihacknight.org/).

**Chi Hack Night** is Chicago's weekly event to build, share & learn about civic tech.

Hosted by [Netlify](https://www.netlify.com/).

## Dependencies

* [Jekyll](http://jekyllrb.com/) - Static site generator built in Ruby
* [Bootstrap 3](http://getbootstrap.com) - HTML and CSS layouts
* [DataTables](http://datatables.net) - for searching and sorting tables
* [Mustache](http://github.com/janl/mustache.js) - templating library for javascript (used on projects page)
* [jQuery Address](http://github.com/asual/jquery-address) - for deep linking URLs on the projects page

## Running locally

Requirements:

* ruby-2.6.2
* jekyll 3.6.3

We recommend using [rvm](https://rvm.io/) to manage your Ruby versions.

Initial setup
```console
git clone https://github.com/chihacknight/chihacknight.org.git
cd chihacknight.org
rvm install ruby-2.6.2
bundle install
```

Running locally
```console
jekyll serve -w
```

Then open your web browser and navigate to http://localhost:4000

## Run in a Docker container

If you have Docker installed, can avoid some of the hassle of installing Jekyll and/or Ruby by pulling from the offical Jekyll image, installing dependancies, and serving locally. 

This is especially handy if you're on Windows machine:

```
docker run --rm --label=jekyll --volume=%CD%:/srv/jekyll  -it -p 4000:4000 jekyll/jekyll set JEKYLL_VERSION=3.6.3 | bundle install | jekyll serve
```

## Deploying

Deployments are handled by Netlify by pushing to the `deploy` branch.

We follow the pattern of keeping the `master` in sync with what we want on the live site. The `deploy` branch is a mirror of `master`. Don't ever commit to the `deploy` branch. 

Instead, push `master` into `deploy`:

```
git push origin master:deploy
```

For convenience in pushing to master and deploying at the same time, use the following alias in your `.bash_profile`

```
alias git_deploy='git push origin master && git push origin master:deploy'
```

## Workflow
The Chi Hack Night web team manages bugs, new features and site development through the [GitHub project board](https://github.com/chihacknight/chihacknight.org/projects/2).

To ensure high code quality, we practice using pull requests and having at least one member of the web team review them before merging in to `master`. 

## Projects and People

The [projects](http://chihacknight.org/open-source-projects.html) and [people](http://chihacknight.org/open-source-people.html) pages are powered by [Github](https://github.com/) and [civic-json-worker](https://github.com/open-city/civic-json-worker), 
a script we run every 5 minutes that fetches data from the [Github API](http://developer.github.com/). 

The JSON files are backed up every hour in the [civic-json-files](https://github.com/open-city/civic-json-files) repository.
