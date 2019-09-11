import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import {
//   Tama
// } from "./tamagotchi.js";

// UI LOGIC BEGIN
$(document).ready(function() {
  getCategories()



  $().click(function() {
    const city = $('#location').val();
    $('#location').val("");

        promise.then(function(response) {
          const body = JSON.parse(response);
          $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
        }, function(error) {
          $('.showErrors').text(`There was an error processing your request: ${error.message}`);
        });
      });

});
