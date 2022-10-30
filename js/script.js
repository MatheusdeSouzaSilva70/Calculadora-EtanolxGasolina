const etanolInput = document.querySelector("#etanol");
const gasolinaInput = document.querySelector("#gasolina");
const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-btn");

const calcRes = document.querySelector("#calc-res span")

function clearInputs(){
    etanolInput.value = "";
    gasolinaInput.value = "";

    calcRes.classList = "";
    console.log(clearBtn);
}

function validDigits(text){
    return text.replace(/[^0-9,]/g, ""); //area digits allowed
}

function calcCombustivel(etanol, gasolina){
    const calc = (etanol / gasolina).toFixed(2);
    return calc;
}

function showOrHideResults(){
    resultContainer.classList.toggle("hide");
}

[etanolInput, gasolinaInput].forEach((el) => {
    el.addEventListener("input", (e) => {
        const updatedValue = validDigits(e.target.value);

        e.target.value = updatedValue;
    })
 })


calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const etanol = +etanolInput.value.replace("," , '.');
    const gasolina = +gasolinaInput.value.replace("," , '.');

    if(!etanol || !gasolina) {
        alert("Informe os valores")
        return
    };

    const calc = calcCombustivel(etanol, gasolina)

    calcRes.innerText =
     calc >= '0.70' ? 
        `RESULTADO: ${calc} = Vale mais usar Gasolina ` :
        `RESULTADO: ${calc} =  Vale mais usar Etanol ` ;

  
})

clearBtn.addEventListener("click", (e) => {
    e.preventDefault();
    clearInputs();
})