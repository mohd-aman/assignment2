let btns = document.querySelectorAll(".btnDiv button");
let addBtn = btns[0];
let deleteBtn = btns[1];
let isDeleteClicked = false;

addBtn.addEventListener("click",function(){
    let inputs = document.querySelectorAll("input");
    let name = inputs[0].value;
    let description = inputs[1].value;
    let size = inputs[2].value;
    console.log(name)
    if(name.length == 0 || description.length == 0 || size.length ==0){
        alert("Please Enter something!!!");
        return
    }
    let div = document.createElement("div");
    div.classList.add("detail");
    div.innerHTML = ` <div class="name"><b>Name:-</b> ${name}, <b>  Size:- </b> ${size}</div>
    <div class="descrtiption"><b>Description</b> ${description}.</div>`
    let container = document.querySelector(".container");
    div.addEventListener("click",function(){
        if(isDeleteClicked){
            div.remove();
        }
        return;
    })
    container.appendChild(div);
    inputs[0].value = "";
    inputs[1].value = "";
    inputs[2].value = "";
})

deleteBtn.addEventListener("click",function(){
    if(isDeleteClicked){
        deleteBtn.classList.remove("active");
    }else{
        deleteBtn.classList.add("active");
    }
    isDeleteClicked = !isDeleteClicked;
})