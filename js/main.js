/*! main.js | GitHub Homepage */

require([
    "esri/map",
    "dojo/domReady!"
    ],
      function(Map, dom) {

        // Create map
        var map = new Map("mapDiv",{
          basemap: "gray",
          center: [-122.69, 45.52],
          zoom: 3
        });


      });  // end of main function