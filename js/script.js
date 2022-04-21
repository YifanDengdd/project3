
function initMap() {
    const kunming = { lat:24.877508,lng: 102.826872 }; 
    const dianchi = { lat: 24.807832, lng: 102.699002 };
    
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: kunming,
    });
    const marker1 = new google.maps.Marker({
      position: kunming,
      map: map,
    });
    
    const marker2 = new google.maps.Marker({
      position: dianchi,
      map: map,
      animation: google.maps.Animation.BOUNCE,
      icon: 'image/dianChi.jpg'
    });
  }
  
  google.maps.event.addEventListener('load', initMap);