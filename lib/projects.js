$('#primary-content').attr('class','col-md-12');

var projects_table;
// Set this up like this to make it easier to dev this locally -- evz
var data_host = 'http://worker.opengovhacknight.org'
// var data_host = 'http://civic-json.datamade.dev.work'

// helper function for displaying messages when submitting projects
function displayMessage(message, type) {
  $( "#submit-message" ).fadeOut(function() {
    $( "#submit-message" ).attr('class', 'alert alert-' + type);
    $( "#submit-message" ).html(message);
  });
  $( "#submit-message" ).fadeIn();
}

$('#share-toggle').click(function(){
  $('#share-project').slideToggle();
  return false;
});

$('#project-needs').click(function(){
  projects_table.fnFilter( 'project needs' );
  $.address.parameter('search', 'project needs');
  $('#hack-night-projects').ScrollTo();
  return false;
});

// AJAX form submission to civic-json-worker
// https://github.com/open-city/civic-json-worker
$('#submit-project').click(function(){

$.post(
  data_host + '/add-project/',
  data={'project_url': $('#github-url').val()},
  function(resp){
    displayMessage( "<strong>Your project has been submitted!</strong> It should display below within 5 minutes.", 'success' );
    $("#github-url").val("");
  }
).fail(function() {
  displayMessage( "<strong>Error submitting your project!</strong> Check that the URL is correct.", 'danger' );
});

return false;
});

// handle the case where someone hits the 'enter' key insted of the submit button
$("#github-url").keydown(function(e){
var key =  e.keyCode ? e.keyCode : e.which;
if(key == 13) {
  $('#submit-project').click();
  return false;
}
});

// this is a template used for mustache.js. Each one represents a table row.
var template = "\
<tr>\
  <td>\
    <h3><a href='{{html_url}}'>{{name}}</a></h3>\
    {{#homepage}}\
      <a href='{{homepage_formatted}}'>Website</a>\
    {{/homepage}}\
    <br /><strong>Created</strong>\
    {{created_at_formatted}}\
    {{#language}}\
      <br /><strong>Language</strong>\
      {{language}}\
    {{/language}}\
    <div class='clearfix'></div>\
    {{#participation_percent}}\
      <div class='bar'><span style='height: {{.}}%;'>{{.}}%</span></div>\
    {{/participation_percent}}\
  </td>\
  <td>\
    <p>{{description}}</p>\
    <h4>Contributors</h4>\
    <p class='contributors'>\
      {{#owner}}\
        <a href='{{html_url}}' class='contributor-owner'><img class='img-thumbnail' src='{{avatar_url}}' alt='Owner: {{login}}' title='Owner: {{login}}'/></a>\
        <span style='display: none;'>{{login}}</span>\
      {{/owner}}\
      {{#contributors}}\
        {{^owner}}\
          <a href='{{html_url}}'><img class='img-thumbnail' src='{{avatar_url}}' alt='{{login}}' title='{{login}}'/></a>\
          <span style='display: none;'>{{login}}</span>\
        {{/owner}}\
      {{/contributors}}\
    </p>\
    {{#has_project_needs}}\
      <h4 class='project-needs'>Project needs</h4>\
      {{#project_needs}}\
        <a href='{{issue_url}}'><span class='label label-success'>{{title}}</span></a>\
      {{/project_needs}}\
    {{/has_project_needs}}\
  </td>\
  <td>\
    <a class='btn btn-default' href='{{html_url}}/commits/master'>{{recent_commits}} <i class='fa fa-check-square'></i></a>\
  </td>\
  <td>\
    <a class='btn btn-default' href='{{html_url}}/stargazers'>{{watchers_count}} <i class='fa fa-star'></i></a>\
  </td>\
  <td>\
    <a class='btn btn-default' href='{{html_url}}/network'>{{forks_count}} <i class='fa fa-code-fork'></i></a>\
  </td>\
  <td>\
    <a class='btn btn-default' href='{{html_url}}/issues'>{{open_issues}} <i class='fa fa-exclamation'></i></a>\
  </td>\
</tr>\
";

$('#hack-night-projects tbody').spin({top: '40px'}); //show a spinner while loading data

$.when( $.getJSON( data_host + "/data/project_details.json" ) ).then(function( data, textStatus, jqXHR ) {

// update project count at the top of the page
$('#project-count').html(data.length);

// loop through our json data
$.each(data, function(i, json){
  var participation = [];
  var max_participation = 50;

  if (json['participation']) {
    for (var i = 0; i < json['participation'].length; i++) {
      var val = ((json['participation'][i] + 1) / parseFloat(max_participation)) * 100;
      if (val > 100) val = 100;
      participation.push(val)
    }
    json['participation_percent'] = participation;

    var recent_commits = 0;
    var recent_commits_arr = json['participation'].splice(48,4); // get the last 4 weeks
    $.each(recent_commits_arr, function() {
        recent_commits += this;
    });

    json['recent_commits'] = recent_commits;
  }

  // to display text like 'x days ago' we use moment.js's awesome fromNow function
  // http://momentjs.com/docs/#/displaying/fromnow/
  json['created_at_formatted'] = moment(json['created_at']).fromNow();
  json['updated_at_formatted'] = moment(json['updated_at']).fromNow();
  json['has_project_needs'] = (json['project_needs'].length > 0);

  // check to make sure all our URL's have http:// in front of them
  // otherwise they won't link properly
  var prefix_regex = /^https?:\/\/.*/;
  var homepage = json['homepage'];
  if (homepage != null && !prefix_regex.test(homepage))
    json['homepage_formatted'] = "http://" + homepage;
  else
    json['homepage_formatted'] = homepage;

  // using the template above, add the project as a new row to our table
  $("#hack-night-projects tbody").append(Mustache.render(template, json));
})

// initialize datatables for sorting and searching
// http://datatables.net/
projects_table = $('#hack-night-projects').dataTable( {
    "aaSorting": [ [2,'desc'], [3, 'desc'] ],
    "aoColumns": [
        null,
        null,
        { "sType": "num-html" },
        { "sType": "num-html" },
        { "sType": "num-html" },
        { "sType": "num-html" }
    ],
    "bInfo": false,
    "bPaginate": false
} );

// allows linking directly to searches
if ($.address.parameter('search') != undefined)
  projects_table.fnFilter( $.address.parameter('search') );

// when someone types a search value, it updates the URL
$('#hack-night-projects_filter input').keyup(function(e){
  $.address.parameter('search', $('#hack-night-projects_filter input').val());
});
});