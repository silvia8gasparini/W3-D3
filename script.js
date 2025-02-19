document.getElementById("addb").addEventListener("click", addTask)
document.getElementById("taskinput").addEventListener("del", function(event) {
        if(event.key === "Enter") {
            addTask
        }
    })

const newT = function addTask(){
    const taskinput1 = document.getElementById("taskinput")
    const taskText = taskinput1.value.trim()
    if(taskText === " ") {
        return
    }


const newTaskItem = document.createElement("li")
newTaskItem.classList.add("task")
newTaskItem.innerText = taskText

const delbtn = document.createElement("button")
delbtn.innerText="Elimina"
delbtn.classList.add("deletebutton")
delbtn.addEventListener("click", () => {
    newTaskItem.remove()
})

newTaskItem.addEventListener("click", () => {
    newTaskItem.classList.toggle("completed")
})

newTaskItem.appendChild(delbtn)
document.getElementById("list"),appendChild(newTaskItem)

}