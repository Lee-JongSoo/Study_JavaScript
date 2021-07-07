window.onload = getMyLocation;

function getMyLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    }
    else{
        alert("Oops, no geolocation support!")
    }
}

function displayLocation(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var div = document.getElementById("location");
    div.innerHTML = "Your are at Latitude: " + latitude + ", Longitude: " + longitude;

    var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "You are " + km + "km from the Sadang Station"
}

function displayError(){
    var errotTypes = {
        0 : "Unkown error",
        1 : "Permission denied by user",
        2 : "Position is not available",
        3 : "Request timed out"
    };
    var errorMessage = errorTypes[error.code];
    if(error.code = 0 || error.code == 2){
        errorMessage = errorMessage + " " + error.message;
    }
    var div = document.getElementById("location");
    div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords){
    var startLatRads = degreeToRadians(startCoords.latitude);
    var startLongRads = degreeToRadians(startCoords.longitude);
    var destLatRads = degreeToRadians(destCoords.latitude);
    var destLongRads = degreeToRadians(destCoords.longitude);

    var Radius = 6371; //radius of the Earth in km
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + 
                        Math.cos(startLatRads) * Math.cos(destLatRads) *
                        Math.cos(startLongRads - destLongRads)) * Radius;
return distance;
}

function degreeToRadians(degree){
    var radians = (degree * Math.PI)/100;
    return radians;
}

var ourCoords = {
    latitude: 37.477128,
    longitude: 126.981734
};