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
//     var password = [
//         "jUHzEQ9gASAc",
//         "4cx7avXLhNXE",
//         "2f8T8TRZe3aU",
//         "2FqBhXk64sLt"
//     ];
//     var userInput = "";
//     document.querySelector(".form__box").addEventListener("input", function(event){
//         console.log(event.target.value);
//         userInput = event.target.value;


//     });
//     document.addEventListener("keydown", function(event){
            
//         if(event.keyCode == 13){
//             for(var i = 0; i < password.length; i++){
//                 if(password[i] == userInput){
//                     document.querySelector(".twitter__button").classList.remove("hidden");
//                     document.querySelector(".form__box").classList.add("hidden");
//                     break;
//                 }
//             }   
//         }
//     });
    document.querySelector(".down__arrow").addEventListener("click", function(event){
        goTo = $(".features");
        var top = goTo.offset().top;
		top-=0;
        $('html,body').animate({scrollTop: top}, 'slow');
        return false;
    });
    
    document.querySelector(".tos").addEventListener("click", function() {
        document.querySelector(".terms").classList.add("showTerms");
    });

    document.querySelector(".okay").addEventListener("click", function() {
        document.querySelector(".terms").classList.remove("showTerms");
    });

    // var navArray = ["nav__features", "nav__extras", "nav__faq", "nav__footer"];

    // var sectionArray = [".features", ".extras", ".faq", ".footer"];
    
    // function scrollTo() {
    //     var clicked;
    
    //     var goTo = "";
    //     clicked = event.target.classList;
    //     for(var i = 0; i < navArray.length; i++){
    //         if(clicked[0] == navArray[i]){
    //             goTo = $(sectionArray[i]);
    //             console.log(goTo);
    //         }
    //     }
    
        
    //         var top = goTo.offset().top;
    //         top-=0;
    //         $('html,body').animate({scrollTop: top}, 'slow');
    //         return false;
    // }
    
    
    
    // document.querySelector("nav").addEventListener("click", function(){
    //     scrollTo();
    // });
    
    // document.querySelector(".mobile__menu").addEventListener("click", function(){
    //     scrollTo();
    //     document.querySelector(".mobile__menu-slide").classList.toggle("slideThrough");
    // });
    
}

function reveal() {
    for(let i = 0; i < 4; i++){
        document.querySelector(".fq__" + i).addEventListener("click", function(event){
            document.querySelector("#fq__" + i + "-para").classList.toggle("hidden");
            document.querySelector("#faq__" + i + "-para").classList.toggle("revealFaq");
        });
    }
}

reveal();

fetch('https://www.json-generator.com/api/json/get/cftRqVKVrC?indent=2')
 .then(response => response.json())
 .then(data => {
 console.log(data.calendar);
})
