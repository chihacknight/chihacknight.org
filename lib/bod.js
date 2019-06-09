// initialize datatables
var board_table = $('#bod').dataTable( {
    "aaSorting": [ [1,'asc'] ],
    "aoColumns": [
        { "bSortable": false },
        null,
        { "bSortable": false },
        null
    ],
    "bInfo": false,
    "bPaginate": false
});

// allows linking directly to searches
if ($.address.parameter('search') != undefined)
  events_table.fnFilter( decodeURIComponent($.address.parameter('search') ) );

// when someone types a search value, it updates the URL
$('#bod_filter input').keyup(function(e){
  $.address.parameter('search', $('#bod_filter input').val());
});