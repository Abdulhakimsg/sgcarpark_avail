var lat;
var long;

window.onlod = () => {
    getLocation();
}

function getLocation() {
    console.log('working');
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
    } 
}

function showPosition(position) {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
    lat = position.coords.latitude;
    long = position.coords.longitude;

}


module.exports.pos = {
    latitude: lat,
    longitude: long
} 
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } 
// }

// function showPosition(position) {
//     console.log(position.coords.latitude)
//     console.log(position.coords.longitude)
// }