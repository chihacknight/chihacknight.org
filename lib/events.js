var events_table;

var template = "\
  <tr>\
    <td class='nowrap'>\
      <div class='well text-center'>\
        <time datetime='{{date}}'>\
        {{{date_formatted}}}\
        </time>\
      </div>\
    </td>\
    <td>\
      <h3>{{title}}</h3>\
      {{{description}}}\
      <ul class='list-inline link-list'>\
        {{#links_present}}<li><span class='text-muted'>Links</span></li>{{/links_present}}\
        {{#links}}\
          <li><a href='{{url}}'>{{name}}</a></li>\
        {{/links}}\
      </ul>\
      <ul class='list-inline'>\
        <li><span class='text-muted'>Sponsor</span></li>\
        <li>{{{sponsor}}}</li>\
      </ul>\
    </td>\
  </tr>\
";

$('#event-count').html(hack_night_events.length);

for (var i = 0; i < hack_night_events.length; i++) {
  var date = new moment(hack_night_events[i]['date']);
  hack_night_events[i]['date'] = date.format('YYYY-MM-DD');
  hack_night_events[i]['date_formatted'] = date.format('[<h3>]MMM Do[</h3><h4>]YYYY[</h4>]');
  hack_night_events[i]['links_present'] = "links" in hack_night_events[i];
  $("#hack-night-events tbody").append(Mustache.render(template, hack_night_events[i]));
}

// initialize datatables
events_table = $('#hack-night-events').dataTable( {
    "aaSorting": [ [0,'desc'] ],
    "aoColumns": [
        { "sType": "datetime" },
        null
    ],
    "bInfo": false,
    "bPaginate": false
});

// allows linking directly to searches
if ($.address.parameter('search') != undefined)
  events_table.fnFilter( $.address.parameter('search') );

// when someone types a search value, it updates the URL
$('#hack-night-events_filter input').keyup(function(e){
  $.address.parameter('search', $('#hack-night-events_filter input').val());
});