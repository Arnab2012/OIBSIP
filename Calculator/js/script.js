//creating text for input
let string="";
let Ans="";
//selecting all elements with class button
let buttons=document.querySelectorAll('#button');

//creating array of button
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        //if button is = then evaluate the value
        if(e.target.innerHTML== 'Enter'){
            string=eval(string);
            Ans=string;
            document.querySelector('input').value=string;
        }
        //if button is √ then then calculate sqrt
        else if(e.target.innerHTML=='√'){
            string=Math.sqrt(string);
            Ans=string;
            document.querySelector('input').value=string;
        }
        //if button is % then then calculate percentage
        else if(e.target.innerHTML=='%'){
            string+=button.innerHTML;
            let s=string;
            let i=s.indexOf("%");
            string=string.substring(0, i);
            string=eval(string);
            string+="/100";
            string=eval(string);
            Ans=string;
            document.querySelector('input').value=string;
        }
        //if button is ± then if then convert positive to negetive and vice versa
        else if(e.target.innerHTML=='±'){
            if(string.charAt(0)=='-'){
                string=string.substring(1, string.length);
            }
            else{
                string="-"+string;
            }
            document.querySelector('input').value=string;
        }
        //if button is 'Ans' then store the previous answer in Ans variable
        else if(e.target.innerHTML=='Ans'){
            string+=button.innerHTML;
            document.querySelector('input').value=string;
        }
        //if button is 'Clear' then then clear all value
        else if(e.target.innerHTML== 'Clear'){
            string="";
            document.querySelector('input').value=string;
        }
        //if button is 'Del' then clear the last input
        else if(e.target.innerHTML== 'Del'){
            if(string.charAt(string.length-1)=='s'){
                string=string.substring(0, string.length - 3);
            }
            else{
                string=string.substring(0, string.length - 1);
            }
            document.querySelector('input').value=string;
        }
        //if button is other then print that on text bar
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
        
    })
})