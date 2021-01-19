function showMessage (message) {
    document.getElementById('messageid').textContent = message;
    }

    let buttonOne = document.querySelector("a.btn.one");
    let card = document.querySelector("section.card");

    buttonOne.addEventListener("click",function(){
        card.classList.toggle('addstyle');
    });

    let boxes = document.querySelectorAll("section div");

    let buttonTwo = document.querySelector("a.btn.two");
    buttonTwo.addEventListener("click", function(){
        console.log(boxes);
        for(let i = 0; 1<boxes.length;i++){
            boxes[i].style.backgroundColor = "#fa4";
        }
    });
    