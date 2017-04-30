var mapa = new GMaps({
    div: '#mapa',
    //lat: -32.949583,
    //lng: -60.6498373,
    lat: -32.4292509,
    lng: -60.7048008,
    zoom: 7
});

mapa.addMarker({
    lat: -29.1606129,
    lng: -59.67132,
    icon: 'img/station.png',
    title: 'Reconquista - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    lat: -29.1953725,
    lng: -59.6758714,
    icon: 'img/station.png',
    title: 'Reconquista - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});


mapa.addMarker({
    lat: -29.1553433,
    lng: -59.6598828,
    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    title: 'Reconquista',
    color: 'red',
    infoWindow: {
        content: '<h3><span class="glyphicon glyphicon-stop rojo"></span> Alerta de evacuación!</h3>\
        <p>Nivel de evacuación: 5,3 m</p>\
        <p>Nivel de alerta: 5,1 m</p>\
        <p>Nivel de actual: 5,43 m</p>\
        <p>Luvia prox. 24 hrs: 46 mm</p>\
        '
    }
});


mapa.addMarker({
    // -30.9589811,-59.7728232
    lat: -30.9589811,
    lng: -59.7728232,
    icon: 'img/station.png',
    title: 'Santa Elena - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

// -31.7899968,-60.4668822

mapa.addMarker({
    lat: -30.9444769,
    lng: -59.7904938,
    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    title: 'Santa Elena',
    color: 'red',
    infoWindow: {
        content: '<h3><span class="glyphicon glyphicon-stop rojo"></span> Alerta de evacuación!</h3>\
        <p>Nivel de evacuación: 7,25 m</p>\
        <p>Nivel de alerta: 6,9 m</p>\
        <p>Nivel de actual: 7,35 m</p>\
        <p>Luvia prox. 24 hrs: 70 mm</p>\
        '
    }
});

mapa.addMarker({
    // -31.7899968,-60.4668822
    lat: -31.7899968,
    lng: -60.4668822,
    icon: 'img/station.png',
    title: 'Paraná - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});


mapa.addMarker({
    lat: -31.7315872,
    lng: -60.5299433,
    icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
    title: 'Paraná',
    color: 'red',
    infoWindow: {
        content: '<h3><span class="glyphicon glyphicon-stop rojo"></span> Alerta de evacuación!</h3>\
        <p>Nivel de evacuación: 5 m</p>\
        <p>Nivel de alerta: 4,7 m</p>\
        <p>Nivel de actual: 5,3 m</p>\
        <p>Luvia prox. 24 hrs: 80 mm</p>\
        '
    }
});

mapa.addMarker({
    lat: -31.5107519,
    lng: -60.7135251,
    icon: 'img/station.png',
    title: 'Santa Fé - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    // -31.7899968,-60.4668822
    lat: -31.5107519,
    lng: -60.6774799,
    icon: 'img/station.png',
    title: 'Santa Fé - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    lat: -31.6292509,
    lng: -60.7048008,
    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    title: 'Santa Fé',
    color: 'orange',
    infoWindow: {
        content: '<h3><span class="glyphicon glyphicon-stop naranja"></span> Alerta!</h3>\
        <p>Nivel de evacuación: 5,7 m</p>\
        <p>Nivel de alerta: 5,3 m</p>\
        <p>Nivel de actual: 5,4 m</p>\
        <p>Luvia prox. 24 hrs: 16 mm</p>\
        '
    }
});

mapa.addMarker({
    // -32.75152,-60.7502346
    lat: -32.75152,
    lng: -60.7502346,
    icon: 'img/station.png',
    title: 'San Lorenzo - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    lat: -32.7483199,
    lng: -60.7329856,
    title: 'San Lorenzo',
    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    color: 'orange',
    infoWindow: {
        content: '<h3><span class="glyphicon glyphicon-stop naranja"></span> Alerta!</h3>\
        <p>Nivel de evacuación: 5,7 m</p>\
        <p>Nivel de alerta: 5,2 m</p>\
        <p>Nivel de actual: 5,3 m</p>\
        <p>Luvia prox. 24 hrs: 13 mm</p>\
        '
    }
});
mapa.addMarker({
    lat: -32.949583,
    lng: -60.6498373,
    title: 'Rosario',
    icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png',
    color: 'orange',
    infoWindow: {
        content: '<h3><span class="glyphicon glyphicon-stop naranja"></span> Alerta!</h3>\
        <p>Nivel de evacuación: 5,3 m</p>\
        <p>Nivel de alerta: 5 m</p>\
        <p>Nivel de actual: 5,12 m</p>\
        <p>Luvia prox. 24 hrs: 0 mm</p>\
        '
    }
});

mapa.addMarker({
    lat: -32.9949107,
    lng: -60.6396061,
    icon: 'img/station.png',
    title: 'Rosario - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    lat: -32.9545416,
    lng: -60.6559806,
    icon: 'img/station.png',
    title: 'Rosario - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    lat: -32.9403571,
    lng: -60.6695258,
    icon: 'img/station.png',
    title: 'Rosario - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    lat: -32.9092667,
    lng: -60.6842914,
    icon: 'img/station.png',
    title: 'Rosario - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});
mapa.addMarker({
    lat: -33.2301073,
    lng: -60.3315976,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    color: 'yellow',
    title: 'Villa Constitución',
    infoWindow: {
        content: '<h3><span class="glyphicon glyphicon-stop amarillo"></span> Riesgo de inundación!</h3>\
        <p>Nivel de evacuación: 4,5 m</p>\
        <p>Nivel de alerta: 4 m</p>\
        <p>Nivel de actual: 3.97 m</p>\
        <p>Luvia prox. 24 hrs: 6 mm</p>\
        '
    }
});

mapa.addMarker({
    lat: -33.2421185,
    lng: -60.3351304,
    icon: 'img/station.png',
    title: 'Villa Constitución - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    lat: -33.2214253,
    lng: -60.3470696,
    icon: 'img/station.png',
    title: 'Villa Constitución - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    lat: -33.480735,
    lng: -60.0031616,
    title: 'Ramallo',
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    color: 'yellow',
    infoWindow: {
        content: '<h3><span class="glyphicon glyphicon-stop amarillo"></span> Riesgo de inundación!</h3>\
        <p>Nivel de evacuación: 4 m</p>\
        <p>Nivel de alerta: 3,5 m</p>\
        <p>Nivel de actual: 3.4 m</p>\
        <p>Luvia prox. 24 hrs: 7 mm</p>\
        '
    }
});

mapa.addMarker({
    lat: -33.4855873,
    lng: -60.0039704,
    icon: 'img/station.png',
    title: 'Ramallo - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});

mapa.addMarker({
    lat: -33.4929814,
    lng: -60.0190623,
    icon: 'img/station.png',
    title: 'Ramallo - Punto de Evacuación',
    color: 'green',
    infoWindow: {
        content: '<h3>Punto de Evacuación</h3>'
    }
});