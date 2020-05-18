{
    var password = [
        "jUHzEQ9gASAc",
        "dataDoveTestPw"
    ];
    var userInput = "";
    document.querySelector(".form__box").addEventListener("input", function(event){
        console.log(event.target.value);
        userInput = event.target.value;


    });
    document.addEventListener("keydown", function(event){
            
        if(event.keyCode == 13){
            for(var i = 0; i < password.length; i++){
                if(password[i] == userInput){
                    console.log("CORRECT");
                    document.querySelector(".form__para").innerHTML = "<a href='https://forms.gle/Yaavi7yuFdZMpcq5A' target='_blank'> DataDove &copy; BETA Early Access </a>";
                    document.querySelector(".form__para").classList.add("correct");
                    document.querySelector(".form__box").classList.add("smoothFade");
                    break;
                } else {
                    document.querySelector(".form__para").innerHTML = "Wrong Password";
                }
                
            }
        }
    });
}