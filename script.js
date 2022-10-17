/* function that takes the interest rate value and shows the value on the slider*/
function updateRate()
{   var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";   
}
/*function that checks numbers equal to 0 and Negatives first. Second, do all the calculation and give the result in the calculator.*/
function compute(){

    let amount = document.getElementById("principal").value; 
    /*receive the input amount*/
    /*check function if input is receiving negative number*/
    if(amount <= 0){
        alert("Enter a positive number");
        amount.focus();
    };
    /*variables and calculation of the result*/

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="\<span ,id='answer'\>\<br\>\<br\>If you deposit\<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year \<mark\>"+year+"\</mark\>\<br\>\</span\>";
}



