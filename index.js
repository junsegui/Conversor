
const select2 = document.getElementById("selectSegundaMoneda");
const select1 = document.getElementById("selectPrimerMoneda");
const form = document.getElementById("form");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2")


document.addEventListener("DOMContentLoaded",async()=>{
    const currencies = await fetch('https://api.frankfurter.app/currencies');
    const currenciesJSON = await currencies.json();
    const keys = Object.keys(currenciesJSON);
    const value = Object.values(currenciesJSON)
    
    for(prop in currenciesJSON){
        const key = prop
        const value = currenciesJSON[prop]
        const option = document.createElement("option");
        const k = document.createTextNode(`${key}(${value})`);
        option.setAttribute("value",`${key}`)
        option.appendChild(k);
        select1.appendChild(option)
        select2.appendChild(option.cloneNode(true))
    }
   
});

form.addEventListener("submit",async(e)=>{
    e.preventDefault();

    

    const value = input1.value;
    
    const conversion = await fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${select1.value}&to=${select2.value}
    `)
    const conversionJSON = await conversion.json();

    const {rates} = conversionJSON;

    input2.value = Object.values(rates)
    

})
//keys.forEach((key)=>{
        
 //   const option = document.createElement("option");
    
//    const keys = document.createTextNode(`${key}`);

   // option.setAttribute("value",`${key}`)

//option.appendChild(keys);
   // select1.appendChild(option)

   // select2.appendChild(option.cloneNode(true))
//})
//console.log(currenciesJSON)