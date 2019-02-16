//allows for the button in index to be pressed and taken to another page
function doSomething(){
    // variables that access the radio button id 
   var radioButton1 = document.getElementById("radio1").checked;
   var radioButton2 = document.getElementById("radio2").checked;
   var radioButton3 = document.getElementById("radio3").checked;
   //checks conditions
    if (radioButton1){
        //opens pg
        window.open("personalLife.html");
    }
    else if(radioButton2){
        window.open("work.html");
    }
    else if(radioButton3){
        window.open("school.html");
    }
    
}
