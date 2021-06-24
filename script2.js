/*function that display value
write a function name display which takes an argument value and display it 
to screen and get the element td which has the id of screen and add the 
current value

    - take an argument value that user pressed 
    - Add the value that came from function to screen value by assignment operato. */
    
function display(num1){
    var element = document.getElementById("screen")
    element.value += num1
}

/*function that evaluates the digit and return result after computing
write a another function name solve which takes no argument which evaluvates the expression .... ?? 
 
    - get the expression that came after pressing equal to and store it in a variable
    - and use eval to compute the mathematical expression
    - and again the screen with the value that came after computing */

function solve(){
    var getdata = document.getElementById("screen")
    var compute = eval(getdata.value)
    console.log(compute);
    getdata.value = compute
}
   
/*function that clear the display
write a another function name clear which takes no  argument which clears the expression that is there
 on screen 
    - update the value of screen to empty string
 
write clear function here.*/

function clearData(){
    var clearAll = document.getElementById("screen")
    clearAll.value = " "
}


