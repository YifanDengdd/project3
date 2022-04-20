function initMap(){
    const IIT = {lat:41.8331335, lng: -87.6293096};
    const googlemaps = new google.maps.Map(document.getElementById("map"),{
        zoom: 6,
        center: IIT,
        mapTypeId: "terrain",
    });
    const marker = new google.maps.Marker({
        position: IIT,
        map:googlemaps,
    });
    iitPath.setMap(googlemaps);
}