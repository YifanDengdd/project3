function init(){
    var el = document.getElementById('canvas');
    var myLocation = new google.map.LatLng(24.877508,102.826872);
    var mapOptions = {
        center: myLocation,
        zoom:18,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        mapTypeControlOptions:{
            position: google.maps.ControlPosition.BOTTOM_CENTER
        }
    };  
    var myMap = new google.maps.Map(el,mapOptions);

    var contentString = '<h1><h1>IIT Perlstein Hall</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate odit optio, voluptatem placeat odio dignissimos illo magnam esse asperiores voluptas at iure vero eum, nemo aperiam? Ipsam, atque nobis rem.</p>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

}
google.maps.event.addDomListener(window, 'load',init);