var typed=new Typed('.typing',{
    strings:['Chirag Gupta'],
    typespeed:2,
    backspeed:2,
     loop:true
})



function myfun(){
    let x=document.forms["myform"]["fname"].value;
    let y=document.forms["myform"]["email"].value;
    let z=document.forms["myform"]["write"].value;
    let a=document.forms["myform"]["phn"].value;
    if(x==""){
        alert("Please fills the details before submitting");
    }
    else if(y == ""){
        alert("Please fills the details before submitting");
    }
    else if(z == ""){
        alert("Please fills the details before submitting");
    }
    else if(a == ""){
        alert("Please fills the details before submitting");
    }

    else{
        alert("Your request is submitted");
    }
    
}

