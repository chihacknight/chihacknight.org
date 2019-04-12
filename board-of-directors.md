---
layout: default
title: Board of Directors
description: Chi Hack Night is run our team of organizers and members of our Leadership Council.
redirect_from: 
 - contact.html
 - team.html
---

# Board of Directors

The Chi Hack Night Board of Directors is responsible for governing our organization, as well as running our events, managing our website, keeping the books, and doing all the other things needed to make Chi Hack Night happen.

The board consists of 11 members, who will each serve a 1 or 2 year term and are either appointed or elected by the members of Chi Hack Night.

<hr />

{% for member in site.categories['board'] %}

<div class='row'>
  <div class='col-sm-4'>
    <p class="text-center"><img src="{{member.image}}" alt="{{member.name}}" class='img-responsive'/>
    </p>
  </div>
  <div class='col-sm-8'>
    <h3>{{member.name}}</h3>
    <p>
      Board seat: {{member.seat}}<br />
      Term: {{member.term}}<br />
    </p>

    <p>{{member.content}}</p>
  </div>
</div>

{% endfor %}