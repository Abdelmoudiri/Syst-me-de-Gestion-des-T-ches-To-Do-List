let btnAjouter=document.getElementById("btn_ajout");
let btnClose=document.getElementById("btn_close");
let btn_Multi=document.getElementById("btn_ajout_multi");
let btn_Rechercher=document.getElementById("btn_Rechercher");
let task=document.getElementById("crud-modal");

btnAjouter.addEventListener('click',function(){

if(task.classList.contains("hidden"))
    {
    task.classList.remove("hidden");
    task.classList.add("visible");
}else{
    task.classList.add("hidden");
}

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

btn_Multi.addEventListener('click',function(){
alert("hola");
});



btn_Rechercher.addEventListener('click',function(){
alert("hi");
});