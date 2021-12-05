
const changeColor = () =>{

    let hexNumbers = "123456789ABCDEF"
    //split() converts our hexNumbers string into an array
    hexNumbers = hexNumbers.split("")

    //console.log(hexNumbers)
    let hexCode = ""

    for(let i=0;i<6;i++){
        let randomIndex = Math.floor(Math.random()*hexNumbers.length)
        //console.log(randomNumber)
     hexCode+=hexNumbers[randomIndex]   
    }
    document.getElementById("hex-code").innerHTML = hexCode
    document.getElementsByTagName("body")[0].style.backgroundColor=`#${hexCode}`

}