const express = require('express');
const router = express.Router();

    // go to the route that we will get the info from the axios calender link below using axios
    router.get('/calender', function (request, response) { 
        // axios will go to the site and return an event as in the calender
        axios.get('https://www.supersaas.com/super_schedule/configure_overview/453017')
        .then(function (response) { console.log('retrieved calender information ') })
        .catch(function (error) { console.log(error) });
        // Somewhere in this route we will get database info?
     });

    //  The post route will take an event and putt it in this event into the calender
    router.post('/calender/post', function (event) { 
        // axios will send an event to the calender api 
        axios.post('https://www.supersaas.com/'+ event +'super_schedule/configure_overview/453017')
        .then(function (response) { console.log('posted new event to the calender') })
        .catch(function (error) { console.log(error) });
        // Somewhere in this route we can send events to the database?
     });
 