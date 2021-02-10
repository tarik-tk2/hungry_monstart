const name=  document.getElementById("search");
 document.getElementById("button").addEventListener('click',function(e){
 const showMeal=document.getElementById("show-meal");
 showMeal.style.display='none'
  
 const mainDiv= document.getElementById("search-meal")
 const change= document.getElementById("change").innerText="Available Search...."
 fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name.value}`).then(res=>res.json()).then(data=>{
 const dataCollection =data.meals;
 console.log(dataCollection);

 for(let i=0;i<dataCollection.length;i++) {
 console.log(dataCollection[i])
    const createSingleDiv= document.createElement('div');

    const  singleFood=`<a><div class="header"><img onClick='foodDetails(${dataCollection[i].idMeal})' src="${dataCollection[i].strMealThumb}"></img></div><div class="bottom"><p>${dataCollection[i].strMeal}</p></div></a>` ;  
    createSingleDiv.innerHTML=singleFood;

    mainDiv.appendChild(createSingleDiv)
 }

 });
 
 name.value='';
mainDiv.innerHTML=''
   })


// <div class="items"><a ><div><img  onClick='foodDetails(${dataCollection[i].idMeal})' src="${dataCollection[i].strMealThumb}"></img></div><p>${dataCollection[i].strMeal}</p></a></div>



showLatestMeal();

function showLatestMeal(){
   fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((data) => {
          const dataLength = data.categories;
          const mainDiv = document.getElementById("show-meal");
      const change= document.getElementById("change").innerText="Latest Catagories...."
          for (let i = 0; i < dataLength.length; i++) {
            // console.log(dataLength[i]);
            const divCreate = document.createElement("div");
            divCreate.className='items'
            foodDetails(dataLength[i])
            const foodIcon =`<a><div class="header"><img onClick='foodDetails(${dataLength[i].idMeal})' src="${dataLength[i].strCategoryThumb}"></img></div><div class="bottom"><p>${dataLength[i].strCategory}</p></div></a>` ;
            divCreate.innerHTML = foodIcon;
            
            mainDiv.appendChild(divCreate);
          }
        });
        


}
 function foodDetails(data){

const  serchData=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`;
  fetch(serchData).then(rep=>rep.json()).then(
     data=>{
      const iteam=  document.getElementById("iteam");
      const createDiv= document.createElement("div");
      const itemDetails=`<div><img src='${data.meals[0].strMealThumb}'></img>
     <h3>Ingradients</h3>
      <div class="ingridents">
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient1}</p>
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient2}</p>
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient3}</p>
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient4}</p>
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient5}</p>
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient6}</p>
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient7}</p>
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient8}</p>
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient9}</p>
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient10}</p>
      
      </div>
      
    
      </div>`
         document.getElementById('over-view').style.display='none'
        createDiv.innerHTML=itemDetails;
        iteam.appendChild(createDiv);
        console.log(iteam)
     })


 }

// document.getElementById("search-meal").addEventListener("click",function(target){
//  document.getElementById("overview").style.display="none"
//  console.log(this,target);
    
// })
// document.getElementById("show-meal").addEventListener("click",function(target){
//     document.getElementById("overview").blur();
//    console.log(this,target);
// })