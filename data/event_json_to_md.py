from datetime import date, datetime, timedelta
import json
import requests
import itertools
from slugify import slugify

events = json.load(open('hack_night_events.json', 'rb'))

cnt = 103
for e in events:
  md = """---
layout: event
categories: 
  - events
"""
  if 'links' in e:
    md = md + "links:\n"
    for link in e['links']:
      md = md + "  - <a href='" + link['url'] + "'>" + link['name'].replace(":", "&#58;") + "</a>\n"

  md = md + "title: " + e['title'] + "\n"
  md = md + "date: " + e['date'] + "\n"
  md = md + "event_id: " + str(cnt) + "\n"
  if 'sponsor' in e:
    md = md + "sponsor: " + e['sponsor'] + "\n"
  md = md + "---" + "\n\n"

  md = md + e['description'] + "\n"

  md_title = e['date'] + "-" + slugify(e['title']) + ".md"
  print "writing to " + md_title
  
  with open("../_posts/events/" + md_title, 'w') as f:
    f.write(md)

  cnt = cnt - 1