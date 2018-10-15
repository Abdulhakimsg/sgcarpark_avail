
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

      let nearMe = document.querySelector('#nearMe')
      var myLocation = `?lat=${lat}&lon=${lon}`
      console.log(nearMe.href)
      nearMe.href = nearMe.href + myLocation

      

    }
// })
