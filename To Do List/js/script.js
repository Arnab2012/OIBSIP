const title = document.querySelector(".title1");
const description = document.querySelector(".desc1");
const createButton = document.querySelector(".createbtn");
const tasksList = document.querySelector(".tasksList");
const removeAllButton = document.querySelector(".removebtn");

// click event to the Create button
createButton.onclick = () => {
    let userEnteredValue = title.value; // user input value
    let userEnteredValue1 = description.value; // user input value
    let storage = localStorage.getItem("Tasks");
    if (storage == null) { // If localStorage is empty
        tasksArray = [];
    } else {
        tasksArray = JSON.parse(storage);
    }
    if (title.value != "" && description.value != "") {
        tasksArray.push({
          title: userEnteredValue,
          description: userEnteredValue1
        });
        localStorage.setItem("Tasks", JSON.stringify(tasksArray));
        showNotes();
        title.value = "";
        description.value = "";
    }
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
    tasksArray.forEach((task, index) => {
        newTaskTag += `
            <div class="note">
                <div class="t1">
                    <h2>${task.title}</h2>
                </div>
                <div class="d1">
                    <p>${task.description}</p>
                </div>
                <div class="b1">
                    <button onclick="deleteNote(${index})">🗑️</button>
                </div>
                
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
    tasksArray.splice(index, 1); // remove the task at the specified index
    localStorage.setItem("Tasks", JSON.stringify(tasksArray));
    showNotes();
}

// click event to the Remove All button
removeAllButton.onclick = () => {
    tasksArray = [];
    localStorage.setItem("Tasks", JSON.stringify(tasksArray));
    showNotes();
}
