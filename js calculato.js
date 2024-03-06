let input=document.querySelector('input');
let number=document.querySelectorAll('button');
let string='';
let result=0;
let ar= Array.from(number);
ar.forEach((item)=>{item.addEventListener('click' , ()=>{
    
   if(item.value == '='){
       result= eval(string);
       input.value=result;
   }
   else if(item.value == 'AC'){
    string="";
    input.value=0;
   }
   else{
    string = string + item.value;
    input.value=string;
   }

});
// console.log(item.value);
})
