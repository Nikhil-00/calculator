let string = '';
let result = document.querySelectorAll(".box");
let func = document.querySelectorAll(".fun");
let output = document.querySelector(".result")
result.forEach((val) => {
    val.addEventListener('click',()=>{
        string=val.innerText;
        if(string=='='){
            output.innerText=eval(output.innerText);
        }
        else if(string=='CE'){
            output.innerText=' ';
        }
       else{
        output.innerText = output.innerText+val.innerText;
       } 
    })
});

    

