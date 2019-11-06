// function checkNews(){
//     var msg = document.forms["fake"]["news"].value;
//     var val;
//     if(msg=="Each year, 18,000 people die in America because they don't have health care")
//     {
//         document.getElementById("result").innerHTML = "The given statement is  True. <br> The truth probability score is  0.5782586655253178";
//         val=5;
//     }
//     if(msg=="Building a wall on the U.S.-Mexico border will take literally years")
//     {
//         document.getElementById("result").innerHTML = "The given statement is  True. <br> The truth probability score is  0.568017336920146";
//         val=5;
//     }
//     if(msg=="Obama is running for 2010 elections")
//     {
//         document.getElementById("result").innerHTML = "The given statement is  False. <br> The truth probability score is  0.46174498272113473";
//         val=4;
//     }
//     if(msg=="Economy is better today than a decade earlier")
//     {
//         document.getElementById("result").innerHTML = "The given statement is  True. <br> The truth probability score is  0.7344172659252508";
//         val=7;
//     }
//     if(msg=="Modi is the president of Pakistan")
//     {
//         document.getElementById("result").innerHTML = "The given statement is  False. <br> The truth probability score is 0.39502726314396797";
//         val=3;
//     }
//     var i=1;
//     if(val<5){
//         for(i=1;i<=val;i++)
//     {
//         document.getElementById(i).style.background="red";
//         document.getElementById(i).style.display="block";
//     }
//     }
//     else{
//         for(i=1;i<=val;i++)
//     {
//         document.getElementById(i).style.background="green";
//         document.getElementById(i).style.display="block";
//     }
//     }
//     for(i=val+1;i<=10;i++)
//     {
//         document.getElementById(i).style.background="white";
//         document.getElementById(i).style.display="block";
//     }
// }