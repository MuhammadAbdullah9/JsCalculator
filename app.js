function getNum(num){
    var answer = document.getElementById("numArea")
    answer.value +=num
}
function clearB(){
    var answer = document.getElementById("numArea")
    answer.value = ""
}
function back(){
    var answer = document.getElementById("numArea")
    answer.value = numArea.value.slice(0,numArea.value.length-1) 
}
function equals(){
    var answer = document.getElementById("numArea")
    answer.value = eval(numArea.value)
}
