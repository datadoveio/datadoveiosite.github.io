window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(window).on("load",function(){
    $("body").css({
        overflow: "unset"
    });
    $(".loader").fadeOut("slow");
	console.log("0525");
});

{


fetch('https://www.json-generator.com/api/json/get/cbinIQdzEy?indent=2')
 .then(response => response.json())
 .then(data => {
 console.log(data.calendar);

//  $(".calendar__gallery").append(
//     "<div class='calendar__tile'><div class='calendar__left calendar__both'><img class='sneaker' src=''></div><div class='calendar__right calendar__both'><p class='date'></p><p class='name'></p></div></div>"
// );
 for(let i = 0; i < data.calendar.length; i++){
     $(".calendar__gallery").append(
         "<div class='calendar__tile'><div class='calendar__left calendar__both'><img class='sneaker' src='" + data.calendar[i].url + "'></div><div class='calendar__right calendar__both'><p class='date'>"+data.calendar[i].date+"</p><p class='name'>"+data.calendar[i].shoe+"</p></div></div>"
    );
 }
})



}
