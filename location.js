function getUserLocation() {
    if(!navigator.geolocation) {
        console.log("Geolocation is not supported by ur browser.");
        return;
    }
    navigator.geolocation.
    getCurrentPosition(
        (position) => {
            console.log("Latitute:",
                position.coords.latitude);
                console.log("Longitude:",
                    position.coords.longitude);
        },
        (err) => {
            console.log("Unable to get ur location", err);
        }
    );
}
getUserLocation();