let result = document.getElementById('inputext');

let calculate=(number)=>{
    result.value = result.value + number
}

let Result=()=>{
    try {
        result.value = eval(result.value)
    } catch (error) {
        alert("Invalid Operator, Please Input a Valid Operator!")
    }
}

let clrVal = document.getElementById('clear')

clrVal.addEventListener('click', ()=>{
    result.value = ''
})

function del(){
    result.value = result.value.slice(0, -1);
}