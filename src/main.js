import './styles.css';
import { journal } from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = journal(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
