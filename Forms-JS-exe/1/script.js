const myForm = document.forms.toDoList;
let activitiesInput = myForm.toDoListInput;
let buttonSub = document.querySelector(".submit")
let ul = document.querySelector(".myList")
let i = 0


buttonSub.addEventListener("click", () => {
    localStorage.setItem(`${i}`, activitiesInput.value)
    let li = document.createElement("li");

    li.textContent = localStorage.getItem(`${i}`)
    let btn = document.createElement("button")
    btn.textContent = "delete"
    li.append(btn)
    ul.append(li)
    i++
})

ul.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") {
        return
    }
    event.preventDefault();
    event.target.closest("li").remove()

})