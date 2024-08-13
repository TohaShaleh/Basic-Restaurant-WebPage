
display();

function display(){
document.querySelector("#fm1").addEventListener("submit",(event)=>{
    
    var tip=0.0;
    event.preventDefault();

    document.querySelector("#qw").style.backgroundColor = "#EDF08A"; 

    //Taking the bill 
    var bill=Number(document.querySelector("#inp").value);
    
    // take the tip in percentage

    document.querySelector("#five").addEventListener("click",()=>{
        tip=parseFloat(document.querySelector("#five").textContent.replace('%','')/100) ;
        calculate();
    })
    document.querySelector("#ten").addEventListener("click",()=>{
        tip=0.1;
        calculate();
    
    })
    document.querySelector("#fifteen").addEventListener("click",()=>{
        tip=0.15;
        calculate();
    })
    document.querySelector("#tweenty-five").addEventListener("click",()=>{
        tip=0.25;
        calculate();
    })
    document.querySelector("#thirty").addEventListener("click",()=>{
        tip=0.3;
        calculate();
    })
    document.querySelector("#fourty").addEventListener("click",()=>{
        tip=0.4;
        calculate();
    })


    
    //Taking the value of radio input type
    var quality=document.querySelector("input[name='Quality']:checked").value;

    //Taking the text type value
    var behav=document.querySelector("#behav").value;

    //Taking the number of people
    var people=Number(document.querySelector("#num").value);

    document.querySelector(".right .hed").innerHTML=`<h2>Please Select what Amonut of tip you want to give </h2> <br> <br> `



function calculate(){

    var tip_amount= bill*tip;
    var total_amount= bill+(bill*tip);
    var each_person=total_amount/people;
    var expe=behav;
    var food_quality=quality;
    
    function space(){
        return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
    }

    document.querySelector("#amount").innerHTML=`Tip amonut : ${space()}    ${(tip_amount).toFixed(2)} <br><br>`
    document.querySelector("#total").innerHTML=`Total Bill : ${space()}     ${total_amount.toFixed(2)} <br><br>`
    document.querySelector(".right #per_person").innerHTML=`Each Person Bill : ${space()} ${each_person.toFixed(2)} <br><br>`
    document.querySelector(".right #experience").innerHTML=`Experience : ${space()}  ${expe} <br><br>`
    document.querySelector(".right #food_quality").innerHTML=`Food Quality : ${space()}  ${food_quality} <br><br> <br>`

    document.querySelector(".reset").innerHTML=`<button id="newbt">Reset</button>`;

    document.querySelector("#newbt").addEventListener("click",()=>{

        document.querySelector("#qw").style.backgroundColor = "#CDA79E" ;

    
        // Clear all the display elements
    document.querySelector("#amount").textContent=""
     document.querySelector("#total").textContent=""
     document.querySelector(".right #per_person").textContent=""
      document.querySelector(".right #experience").textContent=""
      document.querySelector(".right #food_quality").textContent=""

      document.querySelector(".right .hed").textContent=""

      document.querySelector(".reset").textContent=""


      // Reset all values of the form
      document.querySelector("#fm1").reset();

      // Again Calling from the scratch  
      display();

    })
}

})

}























// document.querySelector("#fm1").addEventListener("submit", (event) => {
//     event.preventDefault();

//     // Taking the bill amount
//     var bill = Number(document.querySelector("#inp").value);

//     // Initialize tip percentage
//     var tip = 0;

//     // Update tip percentage when a tip button is clicked
//     document.querySelectorAll(".tip").forEach((button) => {
//         button.addEventListener("click", () => {
//             tip = parseFloat(button.textContent.replace('%', '')) / 100;

//             // Perform calculations after tip selection
//             calculate();
//         });
//     });

//     // Function to perform calculations
//     function calculate() {
//         // Taking the value of the selected radio input type
//         var quality = document.querySelector("input[name='Quality']:checked");
//         var qualityValue = quality ? quality.value : 'Not Selected';

//         // Taking the text type value
//         var behav = document.querySelector("#behav").value;

//         // Taking the number of people
//         var people = Number(document.querySelector("#num").value);

//         // Perform calculations
//         var tipAmount = bill * tip;
//         var totalAmount = bill + tipAmount;
//         var eachPerson = people > 0 ? totalAmount / people : 0; // Avoid division by zero

//         // Display results
//         document.querySelector(".amount").innerHTML = `<h3>Tip Amount: ${tipAmount.toFixed(2)}</h3>`;
//         document.querySelector(".total").innerHTML = `<h3>Total Bill: ${totalAmount.toFixed(2)}</h3>`;
//         document.querySelector(".per-person").innerHTML = `<h3>Each Person's Bill: ${eachPerson.toFixed(2)}</h3>`;
//         document.querySelector(".experience").innerHTML = `<h3>Experience: ${behav}</h3>`;
//         document.querySelector(".food-quality").innerHTML = `<h3>Food Quality: ${qualityValue}</h3>`;
//     }

//     // Ensure calculations are performed if a tip was selected
//     if (tip > 0) {
//         calculate();
//     }

// });