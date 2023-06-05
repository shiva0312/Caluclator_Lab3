//Global variables
var prevCalc = 0;
var calc = "";


//The following function displays a number in the textfield when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum(value) {
    document.frmCalc.txtNumber.value += value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     


//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function Addition() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Addition";
        }
}
function Subtraction() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Subtraction";
        }
}
function Multiplication() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Multiplication";
        }
    }
        function Division() {
            var num = parseFloat(document.frmCalc.txtNumber.value);
                if (!(isNaN(num))) {
                    prevCalc = num;
                    document.frmCalc.txtNumber.value = "";
                    calc = "Division";
                }     
}
function Exponential() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Exponential";
        }     
}
function Square() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = num*num;
            document.frmCalc.txtNumber.value = num;
            calc = "Square";
        }     
}
function Squareroot() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.sqrt(num);
            document.frmCalc.txtNumber.value = num;
            calc = "Squareroot";
        }     
}
function Decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
             num--;
            document.frmCalc.txtNumber.value = num;
            calc = "Decrement";
        }     
}
function Increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num++;
            document.frmCalc.txtNumber.value = num;
            calc = "Increment";
        }     
}
function Floorvalue() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.floor(num);
            document.frmCalc.txtNumber.value = num;
            calc = "Floorvalue";
        }     
}
function Roundvalue() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num = Math.round(num);
            document.frmCalc.txtNumber.value = num;
            calc = "Roundvalue";
        }     
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            if (calc == "Addition"){
                var total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }  

            if (calc == "Subtraction"){
                var total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            
            if (calc == "Multiplication"){
                var total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }   

            if (calc == "Division"){
                var total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }  
            if (calc == "Exponential"){
                var total = prevCalc ** num;
                document.frmCalc.txtNumber.value = total;
            }              
}       }    

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}