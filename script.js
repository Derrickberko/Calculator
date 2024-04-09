// we assig the dispay  to a variable to the display id in the html by using the getElementById
let display = document.getElementById( 'display' );

//We create a function called show and display the value of  "display" on it eg if 7 displays then display shows 7
function show(value){
  display.value  +=  value;
}

function clearDisplay(){
  display.value =  '';
}

function calculate() {
  //created a variable called displayValue and assigned the display.value to it
  let displayValue = display.value
  //then created a variable results and called in the built in function eval() to calculate the value the displayValue holds
  let result = eval(displayValue);
  //After the evaluation, we assign results to display.value to display the result of the calculations
  display.value = result;
}





