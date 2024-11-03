// import { data,task } from "./main.js";
// export function viderChamps() {
//     document.getElementById("titre").value = '';        
//     document.getElementById("description").value = '';    
//     document.getElementById("date").value = '';           
//     document.getElementById("priorite").value = 'P1';     
// }


// // Fonction pour ajouter une tâche
// export function ajouterTache(titre, description, date, priorite,statu) {
//     // // taskList = localStorage.getItem('task_');
//     // if (taskList) {
//     //     taskList = JSON.parse(localStorage.getItem('task_'));
//     // } else {
//     //     taskList = [];
//     // }
//     const taskData = {
//         id:counteur,
//         titre: titre,
//         description: description,
//         date: date,
//         priorite: priorite,
//         statu:statu
//     };
//     data.push(taskData);
//     localStorage.setItem('task_', JSON.stringify(data));
// }

// //drag

// export function dragg()
// {
//     let Elements =document.querySelectorAll(".tache_name")
//     Elements.forEach(items=>{
//         items.addEventListener('dragstart',function(){
//             drag=items;
//             });
//         items.addEventListener('dragend',function(){
//             drag=null;
//         });
//         boxs.forEach(box=>{
//             box.addEventListener('dragover',function(e){
//                 e.preventDefault()
//                 this.style.background='#090'   
//             })
//             box.addEventListener('dragleave',function(){
//                 console.log("ovvvvver");
//                 this.style.background='#fff'
//             })
//             box.addEventListener('drop',function(){
//                this.appendChild(drag);
//                 this.style.background='#fff'
//             })
//         })
//     });
// }

// export function taskCreation(titre, description, date, priorite,statu){
//     nouvelle_task = document.createElement("div");
//     nouvelle_task.draggable='true' ;//setAttribute('draggable', 'true')
//     nouvelle_task.className = "task-card cursor-pointer  tache_name bg-white h-fit m-2 rounded-md  p-2";
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

// //AJouter des Tache dans sa place
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
//         // alert(titre);

//     if(priorite=="P3")
//         {
//             nouvelle_task.classList.add('border-green-800');
//             nouvelle_task.classList.add('border-l-8');
//         }
//         if(statu=='ToDo')
//         {
//                         ToDo.appendChild(nouvelle_task);
//                         t++;  
//         }
//         if(statu=='progress')
//         {
//             progress.appendChild(nouvelle_task);
//             p++; 
//         }
//         if(statu=='Done')
//         {
//                         done.appendChild(nouvelle_task);  
//                         d++;
//         }
//         document.getElementById("cmpt_todo").innerHTML=t;
//         document.getElementById("cmpt_progress").innerHTML=p;
//         document.getElementById("cmpt_done").innerHTML=d;
//         editBtn = nouvelle_task.querySelector('.edit-btn');
// dragg();

//         toggleVisibility(task);
// }

// export function chargerDATA()
// {
//     // data = localStorage.getItem('task_')
//     if (data) {
//         // id=data.length;
//         // data = JSON.parse(data)
//         for(let i=0;i<data.length;i++) {
//             toggleVisibility(task);
//             taskCreation(data[i].titre,data[i].description,data[i].date,data[i].priorite,data[i].statu);
//         };
//     } else {
//         id=0;
//         console.log('vide')
//     }
// }

// export function toggleVisibility(element) {
//     element.classList.toggle('hidden');
// }