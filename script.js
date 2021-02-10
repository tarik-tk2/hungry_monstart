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
      iteam.style.display="block";
      const createDiv= document.createElement("div");
      createDiv.id="ingident";
      const itemDetails=`
      
<Button onClick=closeClick() type="button" class="btn btn-danger align-align-items-end">Close</Button>
      <div ><img src='${data.meals[0].strMealThumb}'></img>
     <h3>Ingradients</h3>
      <div class="ingridents">
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient1}
      <i class="fas fa-check-square"></i>${data.meals[0].strIngredient2}
      <i class="fas fa-check-square"></i>${data.meals[0].strIngredient3}
      <i class="fas fa-check-square"></i>${data.meals[0].strIngredient4}</p>
     
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient5}
      <i class="fas fa-check-square"></i>${data.meals[0].strIngredient6}
      <i class="fas fa-check-square"></i>${data.meals[0].strIngredient8}
      <i class="fas fa-check-square"></i>${data.meals[0].strIngredient7}</p>
      
 
      <p><i class="fas fa-check-square"></i>${data.meals[0].strIngredient9}
     <i class="fas fa-check-square"></i>${data.meals[0].strIngredient10}
     <i class="fas fa-check-square"></i>${data.meals[0].strIngredient11}
     <i class="fas fa-check-square"></i>${data.meals[0].strIngredient12}</p>
      
      </div>
      
    
      </div> 
    ` 
     document.getElementById("search-meal").style.display="none";
        createDiv.innerHTML=itemDetails;
        iteam.appendChild(createDiv);
        console.log(iteam)
     })


 }

function closeClick(){
  
   const searchelElement= document.getElementById("search-meal");
        searchelElement.style.display="grid";
  const ingredient=  document.getElementById("ingident");
    document.getElementById("iteam").removeChild(ingredient);
}
   
