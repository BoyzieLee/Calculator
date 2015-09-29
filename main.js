// Grab My Elements
var input_one = document.querySelector('#C');
var input_two = document.querySelector('#_');
var input_three = document.querySelector('#7');
var input_four = document.querySelector('#8');
var input_five = document.querySelector('#9');
var input_six = document.querySelector('#/');
var input_seven = document.querySelector('#4');
var input_eight = document.querySelector('#5');
var input_nine = document.querySelector('#5');
var input_ten = document.querySelector('#*');
var input_eleven = document.querySelector('#1');
var input_twelve = document.querySelector('#2');
var input_thirteen = document.querySelector('#3');
var input_fourteen = document.querySelector('#-');
var input_fithteen = document.querySelector('#0');
var input_sixteen = document.querySelector('#.');
var input_seventeen = document.querySelector('#eval(calculator.answer.value)');
var input_eighteen = document.querySelector('#+');

var box = document.querySelector('#Do-Math');
/*var calculate = document.querySelector('#calculateBtn');
I'm substituting calulate w/ seventeen & calculateBtn w/ =. I think the second var would override the first though...
*/
var seventeen = document.querySelector('#=');

// Function to Preform the calculation
var sum = function () {
  var C = Number(input_one.value);
  var _ = Number(input_two.value);
  var 7 = Number(input_three.value);
  var 8 = Number(input_fur.value);
  var 9 = Number(input_five.value);
  var / = Number(input_six.value);
  var 4 = Number(input_seven.value);
  var 5 = Number(input_eight.value);
  var 6 = Number(input_nine.value);
  var * = Number(input_ten.value);
  var 1 = Number(input_eleven.value);
  var 2 = Number(input_twelve.value);
  var 3 = Number(input_thirteen.value);
  var - = Number(input_fourteen.value);
  var 0 = Number(input_fithteen.value);
  var . = Number(input_sixteen.value);
  var eval = Number(input_seventeen.value);
  var + = Number(input_eighteen.value);
  var response = num_one + num_two;
  
  answer.textContent = response;
};
/*var buttonsOne = document.quereySelector(".myButtonOne");

console.log(myButtonOne);

buttonOne.addEventListener("click", function(){
  buttonOne.style.color = "red";
  */
