//les variables Global

const btnAjouter = document.getElementById("btn_ajout");
const task = document.getElementById("crud-modal");
const valider_ajoute = document.getElementById("validerAjoute");
const btnClose = document.getElementById("btn_close");
const Vide = document.getElementById("vide");
const confirmer=document.getElementById("confirmation-modal");
const Btn_suprimmer=document.getElementById("btnSuprimmer");

// Button Ajouter
btnAjouter.addEventListener('click',function(){

    if(task.classList.contains("hidden"))
        {
        task.classList.remove("hidden");
        task.classList.add("visible");
    }
});
//Buttun Valider l'Ajout et enregistrer
valider_ajoute.addEventListener('click', function(){
    const titre = document.getElementById("titre").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const priorite = document.getElementById("priorite").value;

    const Tache = {
        'titre': titre,
        'desc': description,
        'date':date,
        'priorite':priorite
    };

    localStorage.setItem('tacheeee', JSON.stringify(Tache));
});


btnClose.addEventListener('click',function(){
if(task.classList.contains("hidden"))
    {
    task.classList.remove("hidden");
    task.classList.add("visible");
}else{
    task.classList.add("hidden");
}

});
Btn_suprimmer.addEventListener('click',function(){
    if(confirmer.classList.contains('hidden')){
        confirmer.classList.remove('hidden');
        confirmer.classList.add('visible');
    }

})



let newX = 0, newY = 0, startX = 0, startY = 0;

const card = document.getElementById('drag')

card.addEventListener('mousedown', mouseDown)

function mouseDown(e){
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e){
    newX = startX - e.clientX 
    newY = startY - e.clientY 
  
    startX = e.clientX
    startY = e.clientY

    card.style.top = (card.offsetTop - newY) + 'px'
    card.style.left = (card.offsetLeft - newX) + 'px'
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove)
}









