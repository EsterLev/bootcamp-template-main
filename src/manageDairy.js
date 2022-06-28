const numOfFoods = document.getElementById('num');
const btnEdit = document.getElementById('btnEdit');
btnEdit.onclick=(e)=>{
   //num = new Array(numOfFoods.value);
//    numOfFoods.value.array.forEach(element => {
//         console.log(element);
//    });
const addFoods = document.querySelector('.addFoods');
addFoods.innerHTML = "";
for(let i=0;i<numOfFoods.value;i++)
{
    const div = document.createElement('div');
    const desc = document.createComment('span');
    desc.innerHTML  = "what you eat? give a description";
    const inputDesc = document.createElement('input');
    inputDesc.type = "text";
    inputDesc.id = "valueDesc";
    div.append(desc);
    div.append(inputDesc);
    addFoods.append(div);
}
}

//There is an option to add a day summary, for adding a summary of a day.
addSummary(){
  
}
