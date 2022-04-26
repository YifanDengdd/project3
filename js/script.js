function initMap(){
    const kunming = {lat:24.877508,lng: 102.826872};
    const dianchi = {lat: 24.807832, lng: 102.699002};
    map = new google.maps.Map(document.getElementById('map'),{
        center: kunming,
        zoom: 8,
    });

    const marker1 = new google.maps.Marker({
        position: kunming,
        map: map,
    });

    const marker2 = new google.maps.Marker({
        position: dianchi,
        map:map,
        animation: google.maps.Animation.BOUNCE,
        icon: 'image/dianchi1.jpg'
    });
goole.maps.event.addDomListener(window, 'load', initMap);}