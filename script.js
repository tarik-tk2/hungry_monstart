const name=  document.getElementById("search");
 document.getElementById("button").addEventListener('click',function(e){
 const showMeal=document.getElementById("show-meal");
 showMeal.style.display='none'
 const mainDiv= document.getElementById("search-meal")
 fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name.value}`).then(res=>res.json()).then(data=>{
 const dataCollection =data.meals;
 console.log(dataCollection);

 for(let i=0;i<dataCollection.length;i++) {
 console.log(dataCollection[i])
    const createSingleDiv= document.createElement('div');
    const  singleFood=`<div class="items"><a ><div><img  onClick='foodDetails(${dataCollection[i].idMeal})' src="${dataCollection[i].strMealThumb}"></img></div><p>${dataCollection[i].strMeal}</p></a></div>` ;  
    createSingleDiv.innerHTML=singleFood;
    mainDiv.appendChild(createSingleDiv)
 }

 });
 
 name.value='';
mainDiv.innerHTML=''
   })








// `<a href="https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dataLength[i].idCategory}"><img src=${dataLength[i].strCategoryThumb}></img>
//                             <p>${dataLength[i].strCategory}</p></a>`;

showLatestMeal();

function showLatestMeal(){
   fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response) => response.json())
        .then((data) => {
          const dataLength = data.categories;
          const mainDiv = document.getElementById("show-meal");
          for (let i = 0; i < dataLength.length; i++) {
            // console.log(dataLength[i]);
            const divCreate = document.createElement("div");
            divCreate.className = "food";
            console.log(dataLength[i])
            foodDetails(dataLength[i])
            console.log(dataLength[i].idMeal)
            const foodIcon =`<div class="items"><a  ><div><img onClick='foodDetails(${dataLength[i].idMeal})' src="${dataLength[i].strCategoryThumb}"></img></div><p>${dataLength[i].strCategory}</p></a></div>` ;
            divCreate.innerHTML = foodIcon;
            mainDiv.appendChild(divCreate);
          }
        });
        


}
 function foodDetails(data){
 //   document.getElementById(overview).style.display='none'
//   const showFood= document.getElementById('iteam');
const  serchData=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`;
  fetch(serchData).then(rep=>rep.json()).then(
     data=>{
      const iteam=  document.getElementById("iteam");
      const createDiv= document.createElement("div");
      const itemDetails=`<div><img src='${data.meals[0].strMealThumb}'></img>
     <h3>Ingradients</h3>
      <p>${data.meals[0].strIngredient1}</p>
      <p>${data.meals[0].strIngredient2}</p>
      <p>${data.meals[0].strIngredient3}</p>
      <p>${data.meals[0].strIngredient4}</p>
      <p>${data.meals[0].strIngredient5}</p>
      <p>${data.meals[0].strIngredient6}</p>
      <p>${data.meals[0].strIngredient7}</p>
      <p>${data.meals[0].strIngredient8}</p>
      <p>${data.meals[0].strIngredient9}</p>
      <p>${data.meals[0].strIngredient10}</p>
      <p>${data.meals[0].strIngredient11}</p>
    
      </div>`
         document.getElementById('overview').style.display='none'
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