document.addEventListener('DOMContentLoaded', function () {



    // const btnAjouter = document.getElementById("btn_ajout");
    // const btnClose = document.getElementById("btn_close");
    // const btn_Multi = document.getElementById("btn_ajout_multi");
    // const btn_Rechercher = document.getElementById("btn_Rechercher");
    // const task = document.getElementById("crud-modal");



    // const date = document.getElementById("date");
    // const Priorité = document.getElementById("Priorité");
    // const Valider_ajoute = document.getElementById("valider_ajoute");
    // // console.log(Valider_ajoute);

    // btnAjouter.addEventListener('click', () => {
    // })







    // Valider_ajoute.addEventListener('click', function (e) {
    //     e.preventDefault();

    //     console.log("button clicked")
    //     const titre = document.getElementById("titre").value;
    //     const description = document.getElementById("description").value;

    //     console.log(titre)
    //     console.log(description)
    //     const Tache1 = {
    //         'titre': titre,
    //         'desc': description
    //     }

    //     // const Tache = {
    //     //     title: titre.value,
    //     //     descp: description.value,
    //     //     date: date.value,
    //     //     priorty: Priorité.value
    //     // }

    //     localStorage.setItem('Tache', JSON.stringify(Tache1));
    //     // localStorage.setItem('Tache2', JSON.stringify(Tache));
    // });


    // btnAjouter.addEventListener('click', function () {
    //     if (task.classList.contains("hidden")) {
    //         task.classList.remove("hidden");
    //         task.classList.add("visible");
    //     }
    //     else {
    //         task.classList.add("hidden");
    //     }
    // });

    // btnClose.addEventListener('click',function(){
    // if(task.classList.contains("hidden"))
    //     {
    //     task.classList.remove("hidden");
    //     task.classList.add("visible");
    // }else{
    //     task.classList.add("hidden");
    // }
    // });


    // btn_Multi.addEventListener('click',function(){

    // console.log(Tache);
    // });



    // btn_Rechercher.addEventListener('click',function(){
    // alert("hi");
    // });












        const func1 = function () {
            const btnAjouter = document.getElementById("btn_ajout");
            const btnClose = document.getElementById("btn_close");
            const task = document.getElementById("crud-modal");
    
            btnAjouter.addEventListener('click', () => {
                task.style.display = "block";
    
                const valider_ajoute = document.getElementById("validerAjoute");
                
                // Ajoutez un événement ici pour capturer les valeurs au moment de la soumission
                valider_ajoute.addEventListener('click', (e) => {
                    e.preventDefault();  // Empêche la soumission réelle pour le test
    
                    const titre = document.getElementById("titre").value;
                    const description = document.getElementById("description").value;
    
                    const Tache = {
                        'titre': titre,
                        'desc': description
                    };
    
                    // Enregistrez les valeurs dans localStorage
                    localStorage.setItem('tacheeee', JSON.stringify(Tache));
    
                    // Fermez la modal
                    task.style.display = "none";
                });
            });
        }
        func1();

    
  
})
