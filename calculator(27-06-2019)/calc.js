 function plain() 
         { 
             document.getElementById("main").value = ""; 
         }
function del_last()
         {
            var str= document.getElementById("main").value;
var newStr = str.substring(0, str.length - 1);
document.getElementById("main").value=newStr;
         } 
function display(val) 
         { 
             document.getElementById("main").value+=val 
         } 
           
function result() 
         { 
             let x = document.getElementById("main").value; 
             let y = eval(x) ;
             document.getElementById("main").value = y ;
         } 
           
        

         