// // Global variables

// /////////////////////////////////////////////////////////////////////////////////////
// const btnAjouter = document.getElementById("btn_ajout");
// const task = document.getElementById("crud-modal");
// const progress = document.getElementById("progress");
// const done = document.getElementById("done");
// const statu = document.getElementById("statu");
// const ToDo = document.getElementById("todo");
// const validerAjoute = document.getElementById("validerAjoute");
// const btnClose = document.getElementById("btn_close");
// const confirmer = document.getElementById("confirmation-modal");
// const confirmationClose = document.getElementById("confirmation_close");
// const formulair_ajoute=document.querySelector(".modal_form");
// const boxs=document.querySelectorAll(".to-do-list");

// const modifier_tache=document.getElementById("Update_Card");
// const btn_modifier_tache=document.getElementById("modifier_tache");

//                                 /////////////////////////
// let todoTab=[],progressTab=[],doneTab=[];
// let nbrTodo=0,nmbProgress=0,nmbrDone=0;
//                                 ////////////////////////
// /// ///////////////////////////////////////////////////////////////////////////function
// function toggleVisibility(element) {
//     element.classList.toggle('hidden');
// }

// function taskCreation(titre, description, date, priorite,statu){
//     let nouvelle_task = document.createElement("div");
//     nouvelle_task.draggable='true' ;
//     nouvelle_task.className = "task-card cursor-pointer  tache_name bg-white h-fit m-2 rounded-md  p-2";
//     nouvelle_task.id= Date.now();
//     nouvelle_task.innerHTML = `
//         <div>
//             <h2 class="font-bold">${titre}</h2>
//             <p>${description}</p>
//             <p>Date    : ${date}</p>
//             <p>Priority: ${priorite}</p>
//             <p>Statu   : ${statu}</p>
//         </div>
//         <div>
//             <button class="edit-btn rounded-md bg-green-600 py-2 px-4 text-white ml-2">Edit</button>
//             <button class="remove-btn rounded-md bg-red-600 py-2 px-4 text-white ml-2">Remove</button>
//         </div>`;
//         const taskData = {
//             id:nouvelle_task.id,
//             titre: titre,
//             description: description,
//             date: date,
//             priorite: priorite,
//             statu:statu
//         };
//     if(priorite=="P1")
//         {
//             nouvelle_task.classList.add('border-red-800');
//             nouvelle_task.classList.add('border-l-8');
//         }
//     if(priorite=="P2")
//         {
//             nouvelle_task.classList.add('border-orange-400');
//             nouvelle_task.classList.add('border-l-8');
//         }

//     if(priorite=="P3")
//         {
//             nouvelle_task.classList.add('border-green-800');
//             nouvelle_task.classList.add('border-l-8');
//         }

//         if(statu=='ToDo')
//         {
//                         ToDo.appendChild(nouvelle_task);
//                         todoTab.push(taskData)
//         }
//         if(statu=='progress')
//         {
//             progress.appendChild(nouvelle_task);
//             progressTab.push(taskData);
//         }
//         if(statu=='Done')
//         {
//                         done.appendChild(nouvelle_task);  
//                         doneTab.push(taskData)
//         }
//         document.getElementById("cmpt_todo").innerHTML=todoTab.length;
//         document.getElementById("cmpt_progress").innerHTML=progressTab.length;
//         document.getElementById("cmpt_done").innerHTML=doneTab.length;
//         toggleVisibility(task);
//         editBtn = nouvelle_task.querySelector('.edit-btn');
// }

// function viderChamps() {
//     document.getElementById("titre").value = '';        
//     document.getElementById("description").value = '';    
//     document.getElementById("date").value = '';           
//     document.getElementById("priorite").value = 'P1';     
// }
// function mettreAJourCompteurs() {
//     document.getElementById("cmpt_todo").innerHTML = todoTab.length;
//     document.getElementById("cmpt_progress").innerHTML = progressTab.length;
//     document.getElementById("cmpt_done").innerHTML = doneTab.length;
// }

// function verifierChamps(titre, description, date, priorite) {
//     let messages = [];
//     const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Format YYYY-MM-DD

//     if (titre.trim() === '') {
//         messages.push("Le titre est requis.");
//     }
//     if (description.trim() === '') {
//         messages.push("La description est requise.");
//     }
//     if (date.trim() === '' || !datePattern.test(date)) {
//         messages.push("La date est requise et doit être au format AAAA-MM-JJ.");
//     }
//     if (!["P1", "P2", "P3"].includes(priorite)) {
//         messages.push("La priorité doit être P1, P2 ou P3.");
//     }

//     if (messages.length > 0) {
//         alert(messages.join("\n")); // Afficher tous les messages d'erreur
//         return false;
//     }
//     return true;
// }

// function supprimerTache(taskId) {
//     todoTab = todoTab.filter(task => task.id !== taskId);
//     progressTab = progressTab.filter(task => task.id !== taskId);
//     doneTab = doneTab.filter(task => task.id !== taskId);
//     let taskList = JSON.parse(localStorage.getItem('task_')) || [];
//     taskList = taskList.filter(task => task.id !== taskId);
//     localStorage.setItem('task_', JSON.stringify(taskList));
// }

// /////////////////////////////////////////////////////////////////////////////////////////
// btnAjouter.addEventListener('click', () => toggleVisibility(task));

// btnClose.addEventListener('click', () => toggleVisibility(task));
// confirmationClose.addEventListener('click', () => toggleVisibility(confirmer));
// validerAjoute.addEventListener('click', function (event) {
//     event.preventDefault();
//     const titre = document.getElementById("titre").value;
//     const description = document.getElementById("description").value;
//     const date = document.getElementById("date").value;
//     const priorite = document.getElementById("priorite").value;
//     const statu=document.getElementById("statu").value;
//     if(verifierChamps(titre,description,date,priorite,statu))
//     {
//     taskCreation(titre, description, date, priorite,statu);
//     }
//     viderChamps();
// });

// let taskToDelete = null; // Variable pour stocker la tâche à supprimer
// // Lorsqu'un bouton "Supprimer" est cliqué
// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('remove-btn')) {
//         const taskCard = event.target.closest('.task-card');
//         taskToDelete = taskCard; 
//         toggleVisibility(confirmer); 
//         mettreAJourCompteurs(); 
//     }
// });

// document.getElementById('yes_Confirme').addEventListener('click', function() {
//     if (taskToDelete) {
//         const taskId = taskToDelete.id;
//         supprimerTache(taskId); 
//         taskToDelete.remove(); 
//         mettreAJourCompteurs(); 
//         taskToDelete = null;
//     }
//     toggleVisibility(confirmer); // Masquer le modal
// });

// // Lorsqu'on clique sur le bouton "Non, annuler"
// document.getElementById('no_Confirme').addEventListener('click', function() {
//     taskToDelete = null; 
//     toggleVisibility(confirmer);
//     mettreAJourCompteurs();
// });

// document.getElementById('confirmation_close').addEventListener('click', function() {
//     taskToDelete = null;
//     toggleVisibility(confirmer);
//     mettreAJourCompteurs(); 
// });

// /////////////////////////////////////////////////////////////////////////////////////////////

// Global variables
// Global variables
const btnAjouter = document.getElementById("btn_ajout");
const taskModal = document.getElementById("crud-modal");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const statu = document.getElementById("statu");
const ToDo = document.getElementById("todo");
const validerAjoute = document.getElementById("validerAjoute");
const btnClose = document.getElementById("btn_close");
const confirmer = document.getElementById("confirmation-modal");
const confirmationClose = document.getElementById("confirmation_close");

let todoTab = [], progressTab = [], doneTab = [];
let taskToEdit = null; // Variable to hold the task being edited

function toggleVisibility(element) {
    element.classList.toggle('hidden');
}

function taskCreation(titre, description, date, priorite, statu) {
    let nouvelle_task = document.createElement("div");
    nouvelle_task.draggable = 'true';
    nouvelle_task.className = "task-card w-[100%] flex cursor-pointer tache_name bg-white h-fit m-2 rounded-md p-2";
    nouvelle_task.id = Date.now();
    nouvelle_task.innerHTML = `
        <div>
            <h2 class="font-bold">${titre}</h2>
            <p>${description}</p>
            <p>Date: ${date}</p>
            <p>Priority: ${priorite}</p>
            <p>Statu: ${statu}</p>
        </div>
        <div class="flex flex-col justify-around">
            <button class="edit-btn rounded-md bg-green-600 py-2 px-4 text-white ml-2">Edit</button>
            <button class="remove-btn rounded-md bg-red-600 py-2 px-4 text-white ml-2">Remove</button>
        </div>`;
    const taskData = {
        id: nouvelle_task.id,
        titre: titre,
        description: description,
        date: date,
        priorite: priorite,
        statu: statu
    };
    if (priorite === "P1") {
        nouvelle_task.classList.add('border-red-800','border-l-8');
    } else if (priorite === "P2") {
        nouvelle_task.classList.add('border-orange-400','border-l-8');
    } else if (priorite === "P3") {
        nouvelle_task.classList.add('border-green-800','border-l-8');
    }
    // Add task to appropriate list
    if (statu === 'ToDo') {
        ToDo.appendChild(nouvelle_task);
        todoTab.push(taskData);
    } else if (statu === 'progress') {
        progress.appendChild(nouvelle_task);
        progressTab.push(taskData);
    } else if (statu === 'Done') {
        done.appendChild(nouvelle_task);
        doneTab.push(taskData);
    }
    mettreAJourCompteurs();
    toggleVisibility(taskModal);
}

function viderChamps() {
    document.getElementById("titre").value = '';
    document.getElementById("description").value = '';
    document.getElementById("date").value = '';
    document.getElementById("priorite").value = 'P1';
}

function mettreAJourCompteurs() {
    document.getElementById("cmpt_todo").innerHTML = todoTab.length;
    document.getElementById("cmpt_progress").innerHTML = progressTab.length;
    document.getElementById("cmpt_done").innerHTML = doneTab.length;
}

function verifierChamps(titre, description, date, priorite) {
    let messages = [];
    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Format YYYY-MM-DD

    if (titre.trim() === '') {
        messages.push("Le titre est requis.");
    }
    if (description.trim() === '') {
        messages.push("La description est requise.");
    }
    if (date.trim() === '' || !datePattern.test(date)) {
        messages.push("La date est requise et doit être au format AAAA-MM-JJ.");
    }
    if (!["P1", "P2", "P3"].includes(priorite)) {
        messages.push("La priorité doit être P1, P2 ou P3.");
    }

    if (messages.length > 0) {
        alert(messages.join("\n")); // Show error messages
        return false;
    }
    return true;
}

function supprimerTache(taskId) {
    todoTab = todoTab.filter(task => task.id !== taskId);
    progressTab = progressTab.filter(task => task.id !== taskId);
    doneTab = doneTab.filter(task => task.id !== taskId);
}

btnAjouter.addEventListener('click', () => toggleVisibility(taskModal));
btnClose.addEventListener('click', () => toggleVisibility(taskModal));
confirmationClose.addEventListener('click', () => toggleVisibility(confirmer));

validerAjoute.addEventListener('click', function (event) {
    event.preventDefault();
    const titre = document.getElementById("titre").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const priorite = document.getElementById("priorite").value;
    const statu = document.getElementById("statu").value;

    if (verifierChamps(titre, description, date, priorite)) {
        if (taskToEdit) {
            const oldStatu = taskToEdit.statu;
            taskToEdit.titre = titre;
            taskToEdit.description = description;
            taskToEdit.date = date;
            taskToEdit.priorite = priorite;
            taskToEdit.statu = statu;
            const taskCard = document.getElementById(taskToEdit.id);
            taskCard.innerHTML = `
                <div>
                    <h2 class="font-bold">${titre}</h2>
                    <p>${description}</p>
                    <p>Date: ${date}</p>
                    <p>Priority: ${priorite}</p>
                    <p>Statu: ${statu}</p>
                </div>
                <div>
                    <button class="edit-btn rounded-md bg-green-600 py-2 px-4 text-white ml-2">Edit</button>
                    <button class="remove-btn rounded-md bg-red-600 py-2 px-4 text-white ml-2">Remove</button>
                </div>`;
            taskCard.classList.remove('border-red-800', 'border-orange-400', 'border-green-800');
            if (priorite === "P1") {
                taskCard.classList.add('border-red-800');
            } else if (priorite === "P2") {
                taskCard.classList.add('border-orange-400');
            } else if (priorite === "P3") {
                taskCard.classList.add('border-green-800');
            }
            if (oldStatu !== statu) {
                if (oldStatu === 'ToDo') {
                    todoTab = todoTab.filter(task => task.id !== taskToEdit.id);
                    taskCard.remove();
                } else if (oldStatu === 'progress') {
                    progressTab = progressTab.filter(task => task.id !== taskToEdit.id);
                    taskCard.remove();
                } else if (oldStatu === 'Done') {
                    doneTab = doneTab.filter(task => task.id !== taskToEdit.id);
                    taskCard.remove();
                }

                taskCreation(titre, description, date, priorite, statu);
            }

            taskToEdit = null;
        } else {
            taskCreation(titre, description, date, priorite, statu);
        }
    }
    viderChamps();
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-btn')) {
        const taskCard = event.target.closest('.task-card');
        const taskId = taskCard.id;
        taskToEdit = todoTab.find(task => task.id == taskId) ||
                     progressTab.find(task => task.id == taskId) ||
                     doneTab.find(task => task.id == taskId);
        
        if (taskToEdit) {
            document.getElementById("titre").value = taskToEdit.titre;
            document.getElementById("description").value = taskToEdit.description;
            document.getElementById("date").value = taskToEdit.date;
            document.getElementById("priorite").value = taskToEdit.priorite;
            document.getElementById("statu").value = taskToEdit.statu;
            toggleVisibility(taskModal);
        }
    }
});

let taskToDelete = null;
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-btn')) {
        const taskCard = event.target.closest('.task-card');
        taskToDelete = taskCard;
        toggleVisibility(confirmer);
    }
});

document.getElementById('yes_Confirme').addEventListener('click', function() {
    if (taskToDelete) {
        const taskId = taskToDelete.id;
        supprimerTache(taskId);
        taskToDelete.remove();
        mettreAJourCompteurs();
        taskToDelete = null;
    }
    toggleVisibility(confirmer);
});

document.getElementById('no_Confirme').addEventListener('click', function() {
    taskToDelete = null;
    toggleVisibility(confirmer);
    mettreAJourCompteurs();
});

document.getElementById('confirmation_close').addEventListener('click', function() {
    taskToDelete = null;
    toggleVisibility(confirmer);
    mettreAJourCompteurs();
});