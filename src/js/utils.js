  
function showMessage (message) {
    document.getElementById('messageid').textContent = message;
    }

    let buttonOne = document.querySelector("a.btn.one");
    let card = document.querySelector("section.card");

    buttonOne.addEventListener("click",function(){
        card.classList.toggle('addstyle');
    });


    let boxes = document.querySelectorAll("section.boxes div");
    let buttonTwo = document.querySelector("a.btn.two");
    let color = ['#AB47BC','#2980B9','#1ABC9C','#F1C40F'];
    let currentColArray = [];

    buttonTwo.addEventListener("click", function(){
        for(let i = 0; i < boxes.length; i++){
            let currentColnr = Math.floor(Math.random() * 4);
            while (currentColArray.indexOf(currentColnr) > -1 ){ // if it is found in the array, randomise again -1 means its not there
                currentColnr = Math.floor(Math.random() * 4);
            }
            currentColArray.push(currentColnr); // push number in array
            boxes[i].style.backgroundColor = color[currentColnr]; 
            console.log(currentColArray);
        }
        currentColArray = [];
    });