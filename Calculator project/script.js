const addToDisplay = function(value){
    document.getElementById('display').textContent += value
}
const clearDisplay = function(){
    document.getElementById('display').textContent = ('')
}
const calculate = function(){
    try{
        const expression = document.getElementById('display').textContent
        const result = eval(expression)
        document.getElementById("display").textContent = result
    }catch(error) {
        document.getElementById("display").textContent = "Error "
    }
}