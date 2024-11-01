// Global variables
const btnAjouter = document.getElementById("btn_ajout");
const task = document.getElementById("crud-modal");
const validerAjoute = document.getElementById("validerAjoute");
const btnClose = document.getElementById("btn_close");
const confirmer = document.getElementById("confirmation-modal");
const ToDo = document.getElementById("todo");
const progress = document.getElementById("progress");
const done = document.getElementById("done");
const statu = document.getElementById("statu");
const confirmationClose = document.getElementById("confirmation_close");

let taskList;
let editBtn ;
let tableData;



window.addEventListener("load", (event) => {
    console.log("ahlan ");
    let data = localStorage.getItem('task_')

if (data) {
    data = JSON.parse(data)
    console.log(data[2]);
} else {
    console.log('vide')
}
});


function viderChamps() {
    document.getElementById("titre").value = '';        
    document.getElementById("description").value = '';    
    document.getElementById("date").value = '';           
    document.getElementById("priorite").value = 'P1';     
}


function toggleVisibility(element) {
    element.classList.toggle('hidden');
}
// Fonction pour ajouter une tâche
        function ajouterTache(titre, description, date, priorite) {
            taskList = localStorage.getItem('task_');
            if (taskList) {
                taskList = JSON.parse(taskList);
            } else {
                taskList = [];
            }
            const taskData = {
                titre: titre,
                description: description,
                date: date,
                priorite: priorite
            };
            taskList.push(taskData);
            localStorage.setItem('task_', JSON.stringify(taskList));
}
//LA CREATION D un task form
function taskCreation(titre, description, date, priorite,statu){
    let nouvelle_task = document.createElement("div");  
        nouvelle_task.className = "task-card bg-white h-fit m-2 rounded-md  p-2";
        nouvelle_task.innerHTML = `
            <div>
                <h2 class="font-bold">${titre}</h2>
                <p>${description}</p>
                <p>Due: ${date}</p>
                <p>Priority: ${priorite}</p>
            </div>
            <div>
                <button class="edit-btn rounded-md bg-green-600 py-2 px-4 text-white ml-2">Edit</button>
                <button class="remove-btn rounded-md bg-red-600 py-2 px-4 text-white ml-2">Remove</button>
            </div>`;

//AJouter des Tache dans sa place
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
            alert(statu);
    
        if(priorite=="P3")
            {
                nouvelle_task.classList.add('border-green-800');
                nouvelle_task.classList.add('border-l-8');
            }
            if(statu=='ToDo')
            {
                            ToDo.appendChild(nouvelle_task);  
            }
            if(statu=='progress')
            {
                            progress.appendChild(nouvelle_task);  
            }
            if(statu=='Done')
            {
                            done.appendChild(nouvelle_task);  
            }

            editBtn = nouvelle_task.querySelector('.edit-btn'); 
            ajouterTache(titre,description,date,priorite);


    toggleVisibility(task);


}
//AFicher la poppup d'ajoute
btnAjouter.addEventListener('click', () => toggleVisibility(task));
btnClose.addEventListener('click', () => toggleVisibility(task));
confirmationClose.addEventListener('click', () => toggleVisibility(confirmer));

//AJouter une Task BUTTON
validerAjoute.addEventListener('click', function (event) {

        event.preventDefault();

        const titre = document.getElementById("titre").value;
        const description = document.getElementById("description").value;
        const date = document.getElementById("date").value;
        const priorite = document.getElementById("priorite").value;
        const statu=document.getElementById("statu").value;

//CReation la forme du tàche
taskCreation(titre, description, date, priorite,statu);

//DEclaration des Button
    const removeBtn = nouvelle_task.querySelector('.remove-btn');
    const noConfirme=document.getElementById("no_Confirme");

//anuller REmove
    noConfirme.addEventListener('click', () => toggleVisibility(confirmer));

//REmove
    removeBtn.addEventListener('click', () => {
       toggleVisibility(confirmer);
       const yesConfirme=document.getElementById("yes_Confirme");
       yesConfirme.addEventListener('click',()=>{
        nouvelle_task.remove();
        confirmer.classList.add('hidden');
       })

    });

//EDiter

    editBtn.addEventListener('click',()=>{
        document.getElementById("titre").value=titre;
        document.getElementById("description").value=description;
        document.getElementById("date").value=date;
        document.getElementById("priorite").value=priorite;
        toggleVisibility(task);
    });

// save in the localStorage
    viderChamps();
});



