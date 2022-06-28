const numOfFoods = document.getElementById('num');
const btnEdit = document.getElementById('btnEdit');
btnEdit.onclick=(e)=>{
   //num = new Array(numOfFoods.value);
   numOfFoods.value.array.forEach(element => {
        console.log(element);
   });
}

//There is an option to add a day summary, for adding a summary of a day.
addSummary(){
  
}
