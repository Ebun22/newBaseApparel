//select all neccessary shit
var form = document.querySelector(".form"),
    input = document.querySelector(".search"),
    icon  = document.querySelector(".error-icon"),
    error = document.querySelector(".error-message");

input.focus()
input.value = " ";

form.addEventListener("submit",function(event){
  event.preventDefault();
console.log(event);
  let format = /^\w+([/,/,.,-,#,$,%,&,',*,+,_,=,?,^,`,",~,{,|,}]?\w+)*@\w+([/,/,.,-,#,$,%,&,',*,+,_,=,?,^,`,",~,{,|,}]?\w+)*(\.\w[a-zA-Z0-9]+)+$/,
      email = input.value.trim();

  //compare value with pattern
  if(email.match(format) && email != " "){
      input.value = " ";
      //console.log("shit works, email is correct");
  }
  //set conditions for error
  else{
    icon.classList.add("veiw-icon");
    error.classList.add("incorrect");
    input.style.borderColor = "hsl(0, 93%, 68%)";
    //console.log("Somethings wrong babe :(")
  }if (email.match(format) && email != " ") {
    icon.classList.remove("veiw-icon");
    error.classList.remove("incorrect");
  }
  form.addEventListener("click",function(event){
    icon.classList.remove("veiw-icon");
    error.classList.remove("incorrect");
  });
});
