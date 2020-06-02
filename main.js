{
    var password = [
        "m17saAH2LzQ",
        "18hcpKSans2"
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
                    window.location = "http://www.datadove.io/homepage/index.html";
                    break;
                }
                document.querySelector(".form__para").innerHTML = "Wrong Password";
            }   
        }
    });
}
