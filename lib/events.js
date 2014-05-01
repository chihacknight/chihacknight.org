// initialize datatables
var events_table = $('#hack-night-events').dataTable( {
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