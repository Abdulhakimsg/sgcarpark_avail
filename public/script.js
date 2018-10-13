var button = document.getElementById('locationButton').addEventListener('click', ()=> {
    getLocation();

    function getLocation() {
        console.log('working');
        if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
        } 
    }
    
    function showPosition(position) {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        console.log(lat)
        console.log(lon)

    }
})

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } 
// }

// function showPosition(position) {
//     console.log(position.coords.latitude)
//     console.log(position.coords.longitude)
// }