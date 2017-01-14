$(function() {
 $('.project').hover(function() {
 	var id = $(this).attr("id");
 	$('#'+ id +' .stack').show();
 }, function() {
 	var id = $(this).attr("id");
 	$('#'+ id +' .stack').hide();
 });

  $('.t-project').hover(function() {
 	var id = $(this).attr("id");
 	$('#'+ id +' .stack').show();
 }, function() {
 	var id = $(this).attr("id");
 	$('#'+ id +' .stack').hide();
 });


  



});