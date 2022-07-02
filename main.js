// /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', './particles.json', function() {
//     console.log('callback - particles.js config loaded');
// });
// $(document).ready(function () {
//     var tilt = $('.heading').tilt();
//
// })
$(document).ready(function () {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
})
   $.ajax({
        url:'https://maps.googleapis.com/maps/api/directions/json?origin=75+9th+Ave+New+York,+NY&destination=MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073&key=AIzaSyCJ_ZB2I2qJ2c829Oz57dcfaJsswlEWvqo',
        type:'get',
        headers: { 'Access-Control-Allow-Origi': '*' }
    }).success(function (res) {
        console.log(res)

    }).error(function () {

    })