const inputBox = document.querySelector(".task");
const createButton = document.querySelector(".createbtn");
const tasksList = document.querySelector(".tasksList");
const removeAllButton = document.querySelector(".removebtn");

// click event to the Create button
createButton.onclick = () => {
    let userEnteredValue = inputBox.value; // user input value
    let storage = localStorage.getItem("Tasks");
    if (storage == null) { // If localStorage is empty
        notesArray = [];
    } else {
        notesArray = JSON.parse(storage);
    }
    tasksArray.push(userEnteredValue);
    localStorage.setItem("Tasks", JSON.stringify(tasksArray));
    showNotes();
    inputBox.value = "";
}

// function to display the notes
function showNotes() {
    let storage = localStorage.getItem("Tasks");
    if (storage == null) {
        tasksArray = [];
    } else {
        tasksArray = JSON.parse(storage);
    }
    // add new task
    let newTaskTag = "";
    tasksArray.forEach((element, index) => {
        newTaskTag += `
        <div class="note">
            <p>${element}</p>
            <button onclick="deleteNote(${index})">🗑️</button>
        </div>
        `;
    });
    tasksList.innerHTML = newTaskTag;
}

// Call the showNotes function
showNotes();

// function to delete a note
function deleteNote(index) {
    let storage = localStorage.getItem("Tasks");
    tasksArray = JSON.parse(storage);
    tasksArray.splice(index, 1);
    localStorage.setItem("Tasks", JSON.stringify(tasksArray));
    showNotes();
}

// click event to the Remove All button
removeAllButton.onclick = () => {
    tasksArray = [];
    localStorage.setItem("Tasks", JSON.stringify(tasksArray));
    showNotes();
}
