let name=document.querySelector("#name")
let price=document.querySelector("#price")
let amount=document.querySelector("#amount")
let add=document.querySelector("#add")
let total=document.querySelector("#total")
let table=document.querySelector("#table")
let totalsummeryAll
let qount
let arr=[]
add.addEventListener("click",()=>{
    let tr=document.createElement("tr")
    let td

    td=document.createElement("td")
    td.innerHTML=name.value
    td.classList.add("name")
    tr.appendChild(td)

    td=document.createElement("td")
    td.innerHTML=price.value
    td.classList.add("price")
    tr.appendChild(td)

    td=document.createElement("td")
    td.innerHTML=amount.value
    td.classList.add("amount")
    tr.appendChild(td)

    td=document.createElement("td")
    td.innerHTML=price.value*amount.value
    tr.appendChild(td)

    td=document.createElement("td")
    td.innerHTML="<i class='fas fa-times del'></i>"
    td.classList.add("remove")
    tr.appendChild(td)


    table.appendChild(tr) 
    total.innerHTML=Number(price.value)*Number(amount.value)+Number(total.innerHTML)
    name.value=""
    price.value=""
    amount.value=""    
   
     arr=document.querySelectorAll(".del")
     for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener("click",delet)
    }
})
function delet (event){
    let item=event.target
    item.parentElement.parentElement.remove();
    total.innerHTML=Number(total.innerHTML)-Number(item.parentElement.parentElement.childNodes[3].innerHTML)
}