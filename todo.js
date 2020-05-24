//ADD new To do 
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const popup = document.querySelector('.popup');
const gPop = document.querySelector('.popup-wrapper');
const btn = document.querySelector('.btn');
const search = document.querySelector('.search input');
gPop.style.display = "none";


/*reusable function*/
function start(duree)
{
var o = document.getElementById("sp");
if(duree > 0)
{
o.innerHTML = duree;
gPop.style.display = "block";
setTimeout("start("+duree+" -1)", 1000);
}
else
{
alert("enter a valid to do");
o.innerHTML ="Au revoir";
gPop.style.display="none";
popup.style.visibility ="hidden";

}}

function create(){
  
    {
       const div = document.createElement('div');
       div.classList.add('popup-close');
       div.setAttribute('id', 'closing');
       const text = document.createTextNode('X');
       div.appendChild(text);
       popup.append(div);
       const div2 = document.createElement('div');
       div2.classList.add('popup-content');
       const html = `
            <span id="sp">1</span>
            <h2>Fill the Input</h2>
            <p>Don't forget</p>
            <a href="#">Return</a>`;
       div2.innerHTML = html;
       popup.append(div2);
   }
  
   
}

function onetime(node, type, callback) {

   node.addEventListener(type, function (e) {
      e.target.removeEventListener(e.type, arguments.callee);
      return callback(e);
   });
}

const generateTemp = todo =>{
   const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
             <span>${todo}</span>
             <i class="fas fa-trash delete"></i>
            </li>
   `;  
   list.innerHTML += html;
};



/* Fin */



onetime(gPop,'click',handler); //e.preventDefault()  addeventlistner('click', e =>{})

    function handler(e){
         
      if(e.target.id='closing'){
   
         gPop.style.display ="none";
   }
}



//Eventlistner Add TODOS
btn.addEventListener('click',e =>{
   e.preventDefault();
   const todo = addForm.add.value.trim();
   const res = document.querySelector('body > div.container > form > input');
   if(todo.length){
    generateTemp(todo);
    if(todo==res.value){
      addForm.reset();}
   }
   else{ 
      create();
      start(3);
   }
  
});

//Deleting Todos
list.addEventListener('click',e =>{


   if(e.target.classList.contains('delete')){

      e.target.parentElement.remove();
   }
});


//filtering Todos :

//we will apply a class to the Todos that dont match and the that class will

// have keyup event 

const retrieve = (term) =>{

  //console.log(list.children); //html collection
Array.from(list.children)
.filter((item)=>{   
   return !item.textContent.includes(term)})
   .forEach((item)=>{
      return item.classList.add('filtre');
   });

   Array.from(list.children)
.filter((item)=>{  
   return item.textContent.includes(term)})
   .forEach((item)=>{
      return item.classList.remove('filtre');
   })
};  

search.addEventListener('keyup', () =>{
     const term = search.value.trim();
     retrieve(term);

})


