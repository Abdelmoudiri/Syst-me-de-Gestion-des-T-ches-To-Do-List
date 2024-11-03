// Global variables

/////////////////////////////////////////////////////////////////////////////////////
const btnAjouter = document.getElementById("btn_ajout");
const task = document.getElementById("crud-modal");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const statu = document.getElementById("statu");
const ToDo = document.getElementById("todo");
const validerAjoute = document.getElementById("validerAjoute");
const btnClose = document.getElementById("btn_close");
const confirmer = document.getElementById("confirmation-modal");
const confirmationClose = document.getElementById("confirmation_close");
const formulair_ajoute=document.querySelector(".modal_form");
const boxs=document.querySelectorAll(".to-do-list");

                                /////////////////////////
let todoTab=[],progressTab=[],doneTab=[];
let nbrTodo=0,nmbProgress=0,nmbrDone=0;
                                ////////////////////////
/// ///////////////////////////////////////////////////////////////////////////function
function toggleVisibility(element) {
    element.classList.toggle('hidden');
}

function taskCreation(titre, description, date, priorite,statu){
    nouvelle_task = document.createElement("div");
    nouvelle_task.draggable='true' ;
    nouvelle_task.className = "task-card cursor-pointer  tache_name bg-white h-fit m-2 rounded-md  p-2";
    nouvelle_task.id= Date.now();
    nouvelle_task.innerHTML = `
        <div>
            <h2 class="font-bold">${titre}</h2>
            <p>${description}</p>
            <p>Date    : ${date}</p>
            <p>Priority: ${priorite}</p>
            <p>Statu   : ${statu}</p>
        </div>
        <div>
            <button class="edit-btn rounded-md bg-green-600 py-2 px-4 text-white ml-2">Edit</button>
            <button class="remove-btn rounded-md bg-red-600 py-2 px-4 text-white ml-2">Remove</button>
        </div>`;
        const taskData = {
            id:nouvelle_task.id,
            titre: titre,
            description: description,
            date: date,
            priorite: priorite,
            statu:statu
        };
    if(priorite=="P1")
        {
            nouvelle_task.classList.add('border-red-800');
            nouvelle_task.classList.add('border-l-8');
        }
    if(priorite=="P2")
        {
            nouvelle_task.classList.add('border-orange-400');
            nouvelle_task.classList.add('border-l-8');
        }

    if(priorite=="P3")
        {
            nouvelle_task.classList.add('border-green-800');
            nouvelle_task.classList.add('border-l-8');
        }

        if(statu=='ToDo')
        {
                        ToDo.appendChild(nouvelle_task);
                        todoTab.push(taskData)
        }
        if(statu=='progress')
        {
            progress.appendChild(nouvelle_task);
            progressTab.push(taskData);
        }
        if(statu=='Done')
        {
                        done.appendChild(nouvelle_task);  
                        doneTab.push(taskData)
        }
        document.getElementById("cmpt_todo").innerHTML=todoTab.length;
        document.getElementById("cmpt_progress").innerHTML=progressTab.length;
        document.getElementById("cmpt_done").innerHTML=doneTab.length;
        toggleVisibility(task);
        editBtn = nouvelle_task.querySelector('.edit-btn');
}

function viderChamps() {
    document.getElementById("titre").value = '';        
    document.getElementById("description").value = '';    
    document.getElementById("date").value = '';           
    document.getElementById("priorite").value = 'P1';     
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
        alert(messages.join("\n")); // Afficher tous les messages d'erreur
        return false;
    }
    return true;
}
/////////////////////////////////////////////////////////////////////////////////////////

validerAjoute.addEventListener('click', function (event) {
    event.preventDefault();
    const titre = document.getElementById("titre").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const priorite = document.getElementById("priorite").value;
    const statu=document.getElementById("statu").value;
    if(verifierChamps(titre,description,date,priorite,statu))
    {
    taskCreation(titre, description, date, priorite,statu);
    }
    viderChamps();
});
/////////////////////////////////////////////////////////////////////////////////////////////

//AFicher la poppup d'ajoute
btnAjouter.addEventListener('click', () => toggleVisibility(task));
btnClose.addEventListener('click', () => toggleVisibility(task));
confirmationClose.addEventListener('click', () => toggleVisibility(confirmer));

//AJouter une Task BUTTON
window.addEventListener("load", (event) => {
    drag();
});

// document.addEventListener('click', function(event) {
//     if (event.target.matches('.remove-btn')) {
//         toggleVisibility(confirmer);
//         const taskCard = event.target.closest('.task-card');
//         document.getElementById("yes_Confirme").onclick = function() {
//             taskCard.remove();
//             confirmer.classList.add('hidden');
//         };
//     } else if (event.target.matches('.edit-btn')) {
//            console.log("hola");
//         const button_save = document.createElement('button');
//         button_save.id = 'validerAjoute';
//         button_save.type = 'submit';
//         button_save.className = 'text-white mb-[2%] inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';

//         // Ajouter le contenu HTML (SVG + texte) au bouton
//         button_save.innerHTML = `
//             <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
//             </svg>
//             Saver les nouveux infos
//         `;

//         // Ajouter le bouton à l'élément `task`
//         formulair_ajoute.appendChild(button_save);


//             const taskCard = event.target.closest('.task-card');
//             const taskTitle = taskCard.querySelector('h2').textContent;
//             const taskDescription = taskCard.querySelectorAll('p')[0].textContent;
//             const taskDate = taskCard.querySelectorAll('p')[1].textContent.split(': ')[1];
//             const taskPriority = taskCard.querySelectorAll('p')[2].textContent.split(': ')[1];
//             const taskStatus = taskCard.querySelectorAll('p')[3].textContent.split(': ')[1];
    
//             document.getElementById("titre").value = taskTitle;
//             document.getElementById("description").value = taskDescription;
//             document.getElementById("date").value = taskDate;
//             document.getElementById("priorite").value = taskPriority;
//             document.getElementById("statu").value = taskStatus;
//             toggleVisibility(task);
//         }
// });


// function updateTaskInStorage(titre, description, date, priorite, statu, index) {
//     let taskList = JSON.parse(localStorage.getItem('task_'));
//     taskList[index] = { titre, description, date, priorite, statu };
//     localStorage.setItem('task_', JSON.stringify(taskList));
// }




let drag=null;
function dragg()
{
    let Elements =document.querySelectorAll(".tache_name")
    Elements.forEach(items=>{
        items.addEventListener('dragstart',function(){
            drag=items;
            });
        items.addEventListener('dragend',function(){
            drag=null;
        });
        boxs.forEach(box=>{
            box.addEventListener('dragover',function(e){
                e.preventDefault()
                this.style.background='#090'   
            })
            box.addEventListener('dragleave',function(){
                console.log("ovvvvver");
                this.style.background='#fff'
            })
            box.addEventListener('drop',function(){
               this.appendChild(drag);
                this.style.background='#fff'
            })
        })
    });
}


function trierTaches(critere) {
    let taskList = JSON.parse(localStorage.getItem('task_')) || [];
    
    // Trier la liste des tâches en fonction du critère
    if (critere === 'priorite') {
        taskList.sort((a, b) => {
            // Priorité : P1 < P2 < P3
            const priorites = { 'P1': 1, 'P2': 2, 'P3': 3 };
            return priorites[a.priorite] - priorites[b.priorite];
        });
    } else if (critere === 'date') {
        taskList.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    // Vider les conteneurs de tâches actuels
    ToDo.innerHTML = '';
    progress.innerHTML = '';
    done.innerHTML = '';

    // Réinitialiser les compteurs
    t = 0;
    p = 0;
    d = 0;

    // Recréer les tâches triées dans l'interface utilisateur
    taskList.forEach(task => {
        taskCreation(task.titre, task.description, task.date, task.priorite, task.statu);
    });
}

const trierParDate=document.getElementById("trier_select");

trierParDate.addEventListener('click',function(){
    let tri_select=trierTaches.value;
    if(tri_select==='priorite'){
        trierTaches('priorite');
    }
    if(tri_select==='date')
    {
        trierTaches('date');
    }
})
