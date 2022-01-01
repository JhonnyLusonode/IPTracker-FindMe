function getLocation(){  // função princical que irá trabalhar com a função secundária
    navigator.geolocation.getCurrentPosition(getPosition);
}  

function getPosition(position){ // função secundária
    var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); // a variavel location vai receber a latitude e a longitude da api do google maps
    var mapOptions = { //a variavel mapOptions mostra opções para que o mapa seja didático para aumentar ou diminuir o zoom, mostra as ruas.
        zoom : 12, // a quantidade de zoom (aproximação) que queiramos que o mapa vá fazer
        center : location,  // vai centrar-se na localização de referencia que neste caso é o utilizador
        mapTypeId : google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('mapa'), mapOptions); //a variavel map vai buscar o ID mapa defenido no html

    var marker = new google.maps.Marker({ // o variavel para marcar a posição do utilizador com um waypoint (marcador)
    position: location,
    map: map,
    animation: google.maps.Animation.DROP
    });

    var geocoder = new google.maps.Geocoder(); // a variavel geocoder vai buscar o geocoder do google maps

    geocoder.geocode({'latLng' : location},function(results, status) {  
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[1]) {
            var options = {
                content : results[1].formatted_address,
                position : location
            };
            var popup = new google.maps.InfoWindow(options);
            google.maps.event.addListener(marker, 'click', function() { // ao dar click o mapa expande
                popup.open(map);
            });
            }
        }
    });
}