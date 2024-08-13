document.querySelector("#fm1").addEventListener("submit",(event)=>{
    event.preventDefault();

    //Taking the bill 
    var bill=Number(document.querySelector("#inp").value);
    
    // take the tip percentage
    var tip=0;
    document.querySelector("#five").addEventListener("click",()=>{
        tip=0.05;
    })
    document.querySelector("#ten").addEventListener("click",()=>{
        tip=0.1;
    })
    document.querySelector("#fifteen").addEventListener("click",()=>{
        tip=0.15;
    })
    document.querySelector("#tweenty-five").addEventListener("click",()=>{
        tip=0.25;
    })
    document.querySelector("#thirty").addEventListener("click",()=>{
        tip=0.3;
    })
    document.querySelector("#fourty").addEventListener("click",()=>{
        tip=0.4;
    })
    
    //Taking the value of radio input type
    var quality=document.querySelector("input[name='Quality']:checked")

    //Taking the text type value
    var behav=document.querySelector("#behav").value;

    //Taking the number of people
    var people=Number(document.querySelector("#num").value);

    console.log(bill,tip,quality.value,behav,people);



})