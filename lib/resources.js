function get_csv_data(doc_name){
  return $.ajax({
      url: ("/data/" + doc_name)
  });
}

function populate_table(doc_name, table_el, count_el, template, dt_sorting, dt_columns, search_qs){
  $.when(get_csv_data(doc_name)).then(
    function(csv){
      var json = $.csv.toObjects(csv);
      var data_count = 0;
      $.each(json, function(i, obj){
          if(obj.title != ""){
            data_count++;
            $("#" + table_el + " tbody").append(Mustache.render(template, obj));
          }
      });

      $('#' + count_el).html(data_count);

      // initialize datatables
      var data_table = $('#' + table_el).dataTable( {
        "aaSorting": dt_sorting,
        "aoColumns": dt_columns,
        "bInfo": false,
        "bPaginate": false
      });

      // allows linking directly to searches
      if ($.address.parameter(search_qs) != undefined) {
        data_table.fnFilter( $.address.parameter(search_qs) );
        $('#' + table_el + '_filter input').ScrollTo();
      }

      // when someone types a search value, it updates the URL
      $('#' + table_el + '_filter input').keyup(function(e){
        $.address.parameter(search_qs, $('#' + table_el + '_filter input').val());
        return false;
      });
    }
  )
}

// populate other open data list
var data_template = "\
<tr>\
  <td>\
    <h4><a href='{{url}}'>{{title}}</a></h4>\
  </td>\
  <td>{{category}}</td>\
  <td>\
    <p>{{description}}</p>\
    <ul class='list-inline link-list'>\
      <li><a href='{{link_url_1}}'>{{link_name_1}}</a></li>\
      <li><a href='{{link_url_2}}'>{{link_name_2}}</a></li>\
      <li><a href='{{link_url_3}}'>{{link_name_3}}</a></li>\
    </ul>\
  </td>\
</tr>\
";

populate_table("Chicago open data sources.csv", "open-data-table", "data-count", data_template, [ [1,'asc'] ], [ null, null, null ], 'data-search');

// populate free developer infrastructure
// var infrastructure_template = "\
// <tr>\
//   <td>\
//     <h4><a href='{{url}}'>{{title}}</a></h4>\
//   </td>\
//   <td>{{provider}}</td>\
//   <td>\
//     <p>{{description}}</p>\
//   </td>\
// </tr>\
// ";

//populate_table("0AtbqcVh3dkAqdEw1NTNzZ0JuTGVrRkFYUWFhWG1ma2c", "developer-infrastructure-table", "infrastructure-count", infrastructure_template, [ [0,'asc'] ], [ null, null, null ], 'tools-search');
