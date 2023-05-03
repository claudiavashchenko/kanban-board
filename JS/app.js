const taskLists = document.querySelectorAll(".task-list");
const backlogTasks = document.querySelector("#backlog .task-list");


let tasks = [
    {
        id: 0,
        title: "Fix submit button.",
        description: "The submit button has stopped working since the last release."
    },
    {
        id: 1,
        title: "Change text on T and C's.",
        description: "The terms and conditions need updating as per the business meeting."
    },
    {
        id: 2,
        title: "Change banner picture.",
        description: "Marketing has requested a new banner to be added to the website."
    }
]

function createTask() {
    const taskCard = document.createElement("div")
    taskCard.classList.add("task-container")

   const taskHeader = document.createElement("div")
   taskHeader.classList.add("task-header")

   const taskTitle = document.createElement("p")
   taskTitle.textContent = "hi"

   const taskDescriptionContainer = document.createElement("div")
   taskDescriptionContainer.classList.add("task-description-container")

   const taskDescription = document.createElement("p")
   taskDescription.textContent = "description"

   taskCard.appendChild(taskHeader)

   taskDescriptionContainer.append(taskDescription)

   const deleteIcon = document.createElement("p")
   deleteIcon.textContent = "☒"

   taskHeader.append(taskTitle, deleteIcon)

   taskCard.append(taskHeader, taskDescriptionContainer)

    backlogTasks.append(taskCard)
}


createTask()