// Set this up like this to make it easier to dev this locally -- evz
var data_host = 'http://worker.opengovhacknight.org'
// var data_host = 'http://civic-json.datamade.dev.work'

var people_table;

// this is a template used for mustache.js. Each one represents a table row.
var template = "\
  <tr>\
    <td>\
      <a href='{{html_url}}'>\
        <img class='img-thumbnail' src='{{avatar_url}}' alt='{{login}}' />\
        {{name}}\
      </a>\
    </td>\
    <td>{{location}}</td>\
    <td><a href='projects.html#/?search={{login}}'>{{repositories}}</a></td>\
    <td><a href='https://github.com/{{login}}?tab=activity'>{{contributions}}</a></td>\
  </tr>\
";

$('#hack-night-people tbody').spin({top: '40px'}); //show a spinner while loading data

$.when( $.getJSON( data_host + "/data/people.json" ) ).then(function( data, textStatus, jqXHR ) {

  // update project count at the top of the page
  $('#people-count').html(data.length);

  // loop through our json data
  $.each(data, function(i, json){
    if (json['name'] == null)
      json['name'] = json['login'];

    $("#hack-night-people tbody").append(Mustache.render(template, json));
  })

  // initialize datatables
  people_table = $('#hack-night-people').dataTable( {
      "aaSorting": [ [2,'desc'], [3, 'desc'] ],
      "aoColumns": [
          null,
          null,
          { "sType": "num-html" },
          { "sType": "num-html" }
      ],
      "bInfo": false,
      "bPaginate": false
  });

  // allows linking directly to searches
  if ($.address.parameter('search') != undefined)
    people_table.fnFilter( $.address.parameter('search') );

  // when someone types a search value, it updates the URL
  $('#hack-night-people_filter input').keyup(function(e){
    $.address.parameter('search', $('#hack-night-people_filter input').val());
  });
});