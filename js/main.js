// Global variables
const btnAjouter = document.getElementById("btn_ajout");
const taskModal = document.getElementById("crud-modal");
const validerAjoute = document.getElementById("validerAjoute");
const btnClose = document.getElementById("btn_close");
const confirmationModal = document.getElementById("confirmation-modal");
const toDoContainer = document.getElementById("todo");

// Show the Add Task modal
btnAjouter.addEventListener('click', function() {
    taskModal.classList.remove("hidden");
    taskModal.classList.add("visible");
});

// Add new task and enable drag-and-drop
validerAjoute.addEventListener('click', function () {
    const titre = document.getElementById("titre").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const priorite = document.getElementById("priorite").value;

    // Create a new task element with draggable attributes
    const newTask = document.createElement("div");
    newTask.className = "task-card bg-white h-fit m-2 rounded-md border-l-8 border-red-600 p-2";
    newTask.draggable = true;
    newTask.innerHTML = `<div><h2 class="font-bold">${titre}</h2><p>${description}</p></div>
        <div>
            <button id=""btnEdit" class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 mr-2">Edit</button>
            <button id=""btnDellete" class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2">Remove</button>
        </div>`;
        const btnEdit=document.getElementById("btnEdit");
        // const btnbtnDellete=document.getElementById("btnDellete");
        btnEdit.addEventListener('click',function(){
        alert("ahlan")
     });
    // drag-and-drop
    newTask.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        newTask.classList.add('opacity-50');
    });
    newTask.addEventListener('dragend', () => {
        newTask.classList.remove('opacity-50');
    });

    // Append new task to To-Do container
    toDoContainer.appendChild(newTask);
});

btnClose.addEventListener('click', function() {
    taskModal.classList.add("hidden");
});

const containers = document.querySelectorAll(".to-do-list");
containers.forEach(container => {
    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        container.classList.add("bg-gray-200");
    });

    container.addEventListener("dragleave", () => {
        container.classList.remove("bg-gray-200");
    });

    container.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const task = document.getElementById(id);
        if (task) {
            container.appendChild(task);
        }
        container.classList.remove("bg-gray-200");
    });
});

// //les variables Global

// const btnAjouter = document.getElementById("btn_ajout");
// const task = document.getElementById("crud-modal");
// const valider_ajoute = document.getElementById("validerAjoute");
// const btnClose = document.getElementById("btn_close");
// const Vide = document.getElementById("vide");
// const confirmer=document.getElementById("confirmation-modal");
// const ToDo=document.getElementById("todo");


// // Button Ajouter
// btnAjouter.addEventListener('click',function(){

//     if(task.classList.contains("hidden"))
//         {
//         task.classList.remove("hidden");
//         task.classList.add("visible");
//     }
// });
// //Buttun Valider l'Ajout et enregistrer
// valider_ajoute.addEventListener('click', function () {
//     const titre = document.getElementById("titre").value;
//     const description = document.getElementById("description").value;
//     const date = document.getElementById("date").value;
//     const priorite = document.getElementById("priorite").value;

//     // Create a new task element
//     const newTask = document.createElement("div");
//     newTask.id="drag";
//     newTask.className = "task-card bg-white h-fit m-2 rounded-md border-l-8 border-red-600 p-2";
//     newTask.innerHTML = `<div><h2 class="font-bold">${titre}</h2><p>${description}</p></div> <div><button id="btnEdit" class="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Edit</button><button id="btnRemove" onclick="x()" class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Remove</button></div>`;
//     ToDo.appendChild(newTask);

//     document.getElementById("titre").value = '';
//     document.getElementById("description").value = '';
//     document.getElementById("date").value = '';
//     document.getElementById("priorite").value = 'Priorité';

//     const Tache = {
//         titre: titre,
//         desc: description,
//         date: date,
//         priorite: priorite
//     };
//     localStorage.setItem('tacheeee', JSON.stringify(Tache));
    
// });

// // btn close 
// btnClose.addEventListener('click',function(){
// if(task.classList.contains("hidden"))
//     {
//     task.classList.remove("hidden");
//     task.classList.add("visible");
// }else{
//     task.classList.add("hidden");
// }

// });
// // btn suprimmer 
// // const Btn_suprimmer=document.getElementById("btnRemove");
// // Btn_suprimmer.addEventListener('click',
//     function x(){
//     // console.log(Btn_suprimmer.value);
//     if(confirmer.classList.contains('hidden')){
//         confirmer.classList.remove('hidden');
//         confirmer.classList.add('visible');
//     }

// }







// // drag 
// let newX = 0, newY = 0, startX = 0, startY = 0;

// const card = document.getElementById('drag')

// card.addEventListener('mousedown', mouseDown)

// function mouseDown(e){
//     startX = e.clientX
//     startY = e.clientY

//     document.addEventListener('mousemove', mouseMove)
//     document.addEventListener('mouseup', mouseUp)
// }

// function mouseMove(e){
//     newX = startX - e.clientX 
//     newY = startY - e.clientY 
//     startX = e.clientX
//     startY = e.clientY
//     card.style.top = (card.offsetTop - newY) + 'px'
//     card.style.left = (card.offsetLeft - newX) + 'px'
// }

// function mouseUp(e){
//     document.removeEventListener('mousemove', mouseMove)
// }








