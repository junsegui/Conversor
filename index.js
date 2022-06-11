
const select2 = document.getElementById("selectSegundaMoneda");
const select1 = document.getElementById("selectPrimerMoneda");
const form = document.getElementById("form");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const cuarter = document.getElementById("cuart");
const eq1 = document.getElementById("eq1");
const eqt = document.getElementById("eqt");


document.addEventListener("DOMContentLoaded",async()=>{
    const currencies = await fetch('https://api.frankfurter.app/currencies');
    const currenciesJSON = await currencies.json();
    const keys = Object.keys(currenciesJSON);
    const value = Object.values(currenciesJSON);
    
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

    input1.value = 0

    const value = input1.value;
    
    const conversion = await fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${select1.value}&to=${select2.value}
    `)
    const conversionJSON = await conversion.json();

    const {rates} = conversionJSON;

    input2.value = Object.values(rates)

    

})

form.addEventListener("submit",async(e)=>{
    e.preventDefault();

    eq1.innerHTML = ""
    eqt.innerHTML = ""

    const conversion = await fetch(`https://api.frankfurter.app/latest?amount=1&from=${select1.value}&to=${select2.value}
    `);
    const conversionJSON = await conversion.json();

    const {rates} = conversionJSON;

    const h2 = document.createElement("h2");
    const val = document.createTextNode(`${Object.values(rates)} ${select2.value}`);
    h2.appendChild(val);
    eqt.appendChild(h2);
    const h3 = document.createElement("h3");
    const va2 = document.createTextNode(`1 ${select1.value} equals`);
    h3.appendChild(va2);
    
    
    eq1.appendChild(h3);


})

