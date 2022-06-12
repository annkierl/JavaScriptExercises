let postsArea = document.querySelector(".posts")
let createPostButton = document.querySelector(".createPost")
let postId;

//Creates inputs:

const createTitleInput = () => {
    const titleInput = document.createElement("input")
    titleInput.setAttribute("placeholder", "title");
    return titleInput
}

const createContentInput = () => {
    let contentInput = document.createElement("textarea")
    contentInput.setAttribute("placehodet", "Post")
    return contentInput

}
const createAuthorInput = () => {
    let authorInput = document.createElement("input")
    authorInput.setAttribute("placeholder", "Author")
    return authorInput
}

const createDateInput = () => {
    let dateInput = document.createElement("input")
    dateInput.setAttribute("type", "date")
    return dateInput
}

const createSubmitButton = () => {
    const submButton = document.createElement("button")
    submButton.setAttribute("type", "submit")
    submButton.innerText = "Submit"
    return submButton

}

/////  Insert already made posts:

let insertPost = (post) => {
    post.forEach((element) => {
        let postN = document.createElement("p")
        postN.textContent = `${element.id}. Title:${element.title},What's up? ${element.content}, Nick: ${element.author}, date:  ${element.date}`
        postN.setAttribute(`id`, `${element.id}`)
        let editButton = document.createElement("button")
        editButton.setAttribute("class", "editButton")
        editButton.innerText = "Edit"
        postN.append(editButton)
        postsArea.append(postN)


    });
}


fetch(`http://localhost:3000/posts/`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
})
    .then(response => response.json())
    .then(data => { insertPost(data); postId = data.lenght + 1 });
// Add Post:
createPostButton.addEventListener("click", () => {

    let formToPost = document.createElement("form")
    let titleInput = createTitleInput();
    formToPost.append(titleInput)

    let contentInput = createContentInput()
    formToPost.append(contentInput)

    let authorInput = createAuthorInput()
    formToPost.append(authorInput)


    let dateInput = createDateInput()
    formToPost.append(dateInput)

    let submButton = createSubmitButton()
    formToPost.append(submButton)

    postsArea.prepend(formToPost)
    submButton.addEventListener("click", (event) => {
        event.preventDefault

        fetch(`http://localhost:3000/posts/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: postId,
                title: titleInput.value,
                author: authorInput.value,
                content: contentInput.value,
                date: dateInput.value
            })
        })
        postId++
    })
})


//Edit Post
postsArea.addEventListener("click", (event) => {
    if (event.target.className !== "editButton") {
        return
    }
    event.preventDefault();
    const newP = document.createElement('p');
    let postNumber = event.target.parentElement.id
    let editedPost = event.target.parentElement
    fetch(`http://localhost:3000/posts/${postNumber}`)
        .then(res => res.json())
        .then(post => {

            let editedTitle = createTitleInput()
            newP.append(editedTitle);

            let editedAuthor = createAuthorInput()
            newP.append(editedAuthor)

            let editedDate = createDateInput()
            newP.append(editedDate)

            let editedDescription = createContentInput()
            newP.append(editedDescription);

            let submitBtn = createSubmitButton()
            newP.append(submitBtn);
            editedPost.append(newP)


            submitBtn.addEventListener("click", (event) => {
                fetch(`http://localhost:3000/posts/${postNumber}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        title: editedTitle.value,
                        content: editedDescription.value,
                        author: editedAuthor.value,
                        date: editedDate.value
                    })
                })
            })
        })
})
