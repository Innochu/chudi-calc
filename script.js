var screen = document.querySelector(".screen")
var buttons = document.querySelectorAll("button")

var data =[]
var res;
function handleclick(button){
    value = button.innerText

    if(value === "clear"){
    data = []

    screen.innerText = 0

    }else if(value === "="){

        res = eval(data.join(""))

        data = []

        data.push(res)

        screen.innerText = res

    }else{ 
        data.push(value)

        screen.innerText = data.join("")
    }
    
}

    buttons.forEach((button) => button.onclick = () => console.log(button.innerText))

    buttons.forEach(function(button){
        button.onclick = function(){
            handleclick(button)
        }
    })

