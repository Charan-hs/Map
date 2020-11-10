mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhcmFuZ293ZGEiLCJhIjoiY2toYzk2cWNhMDdiejJzbzQxNHY0cGZwMyJ9.v_t6xSSKtcqRRKEAugS0bg';




const setMap = (center) => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: center, // starting position [lng, lat]
        zoom: 12 // starting zoom
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav,);


    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/cycling'
    });


    map.addControl(directions, 'top-left');
}

const gotLoaction = (postion) => {
    console.log(postion)
    setMap([postion.coords.longitude, postion.coords.latitude])
}

const failedTogetLaction = () => {
    setMap([72.877656, 19.075984])
}

navigator.geolocation.getCurrentPosition(gotLoaction, failedTogetLaction, { enableHighAccuracy: true })



