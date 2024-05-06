let container = document.querySelector("#container")

let Data ;



function showData(arr){

    arr.forEach(function(ele, i){
        let Box = document.createElement("div")
        Box.id = "B1"
 
        let div = document.createElement("div")
        div.innerHTML = ele.title

        let div2 = document.createElement("div")
        div2.id = "I2"

        let img = document.createElement("img")
        if(ele.completed){
            
            img.src = "https://static.vecteezy.com/system/resources/previews/009/664/305/non_2x/tick-icon-transparent-free-png.png"
            div2.append(img)
        }
        else{
            div2.style.backgroundColor = "white"
        }
        
        
    
        

    Box.append(div, div2)
    
    container.append(Box)

    })
}

function getData(URL){
    fetch(URL)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        Data = res
        showData(Data)
    })
}



getData("https://jsonplaceholder.typicode.com/todos")

