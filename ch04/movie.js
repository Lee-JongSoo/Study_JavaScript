function Movie(title, genre, rating, showtimes){
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
    this.getNextShowing = function(){
    var now = new Date().getTime();
    for(var i=0; i<this.showtimes.length; i++){
        var showtime = getTimeFromString(this.showtimes[i]);
        if((showtime - now) > 0){
            return "Next showing of " + this.title + " is " + this.showtimes[i];
        }
    }
    return null;
    }
}

function getNextShowing(){
    var now = new Date().getTime();
    
    for(var i=0; i<this.showtime.length; i++){
        if((this.showtime - now) > 0){
            return "Next showing of " + this.title + " is " + this.showtime[i];
        }
    }
    return null;
}

var movie1 = new Movie("Avengers: End Game", "Action", 5, ["1:00am", "2:21am", "9:00am"]);
var movie2 = new Movie("About Time", "Romance", 5, ["00:03am", "2:10am", "7:31pm"]);
var movie3 = new Movie("Still Alive", "Thiller", 2, ["1:31am", "4:31am", "10:11pm"]);

function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
    theTime.setMinutes( parseInt(time[2]) || 0 );
    return theTime.getTime();
}

alert(movie1.getNextShowing());
alert(movie2.getNextShowing());
alert(movie3.getNextShowing());