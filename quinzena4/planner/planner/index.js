

function addassignment(){
    const shoppingcart = document.getElementById("tarefa")
    const cartvalue = shoppingcart.value
    const week = document.getElementById("dias-semana")
    const day = week.value

    if(cartvalue !== ""){
        const list = document.getElementById(day)
        list.innerHTML += `<li onclick="deleteelements()">${cartvalue}</li>`
        shoppingcart.value = ""
    }
    else{
        alert("Insira alguma tarefa na barra de tarefas")
    }

}
