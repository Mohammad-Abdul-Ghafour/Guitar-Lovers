alert("Welcome to Guitar-Lovers website")
let fullName = prompt("Please share your name with us")
alert("Hello " + fullName + " it's pleasure to meet you")
console.log(fullName)

let guitarLover = prompt(fullName +" do you love guitars?")

while(guitarLover!="yes" && guitarLover!="no" && guitarLover!= "n" && guitarLover!="y" ) {
    alert("you have to answer with yes or no")
guitarLover = prompt(fullName +" do you love guitars?")
}

if (guitarLover == "yes" || guitarLover == "y"){
    alert("Then you are in the right place " + fullName)
    loveGuitar();

}
else if(guitarLover == "no" || guitarLover=="n"){
    alert("We are sorry to hear that " + fullName + " still you can join us and have fun") 
}

function loveGuitar(){
    console.log(guitarLover)
    let favGuitar = prompt("Which type of guitar do you love? \n 1. Electric \n 2. Base \n 3. Classic")

    if(favGuitar!="electric" && favGuitar!="classic" && favGuitar!= "base" && favGuitar!="1" && favGuitar!="2" && favGuitar!= "3"  ) {
        alert("oops, you may not finde any thing about "+favGuitar+" guitar in this web site")
        alert("but you can share with us what you know about "+favGuitar+" down in comment section")
    }
    else if (favGuitar=="electric" || favGuitar=="classic" || favGuitar== "base"){
        alert("ooh, that's great you may fined cool things about "+favGuitar+" guitar in this web site")
    }
    else if (favGuitar=="1"){
        favGuitar = "electric" 
        alert("ooh, that's great you may fined cool things about "+favGuitar+" guitar in this web site")
    }
    else if (favGuitar=="2"){
        favGuitar = "base" 
        alert("ooh, that's great you may fined cool things about "+favGuitar+" guitar in this web site")
    }
    else if (favGuitar=="3"){
        favGuitar = "classic" 
        alert("ooh, that's great you may fined cool things about "+favGuitar+" guitar in this web site")
    }
    console.log(favGuitar)
    let guitarPlayer = prompt("who's your favourite guitar player?")
    if (guitarPlayer== "yngwie malmsteen"){
        alert("ooooh, waw "+guitarPlayer+" is our inspiration in this website")
    }
    else if(guitarPlayer == null){
        alert("yngwie malmsteen is our inspiration in this website")
    }
    else {
        alert("yes "+guitarPlayer+" is a professional guitar player")
    }
    console.log(guitarPlayer)
}
