// Task 1 (Api)
const url = "https://66681676f53957909ff67af8.mockapi.io/users/Animals"

async function aaa(){

   const response = await fetch(url);
   const jsondata = await response.json();
   var x = document.getElementById("change");

   console.log(jsondata);
   let newimg = document.getElementById("img1");
   //  newimg.src = jsondata[0].image;

   for (let i = 0; i < jsondata.length; i++) {
      let option = document.createElement("option");
      console.log(option);
      let animaName = jsondata[i].name;
      console.log(animaName);

      option.innerHTML = animaName;

      console.log(option);

      option.value = jsondata[i].image;

      x.appendChild(option);

      console.log(x);
   }

}


aaa()



async function changeImages() {
   const response = await fetch(url);
   const jsondata = await response.json();
   var x = document.getElementById("change");

   console.log(jsondata);
   let newimg = document.getElementById("img1");
   //  newimg.src = jsondata[0].image;

   newimg.src = x.value;

}


changeImages()


//  Task 2(local storage)

function savedata() {
   let name = document.getElementById('name').value;
   localStorage.setItem('name', name);
   const age = document.getElementById('age').value;
   localStorage.setItem('age', age);
   const gender = document.getElementById('gender').value;
   localStorage.setItem('gender', gender);
   const date = document.getElementById('date').value;
   localStorage.setItem('date', date);
   const img = document.getElementById('img').value;
   localStorage.setItem('img', img);


   let eduInfo = {};

   let dec = document.getElementById('dec').value;
   localStorage.setItem('dec', dec);
   const mj_un = document.getElementById('mj-un').value;
   localStorage.setItem('mj-un', mj_un);
   let html=document.getElementById('html');
   if(html.checked){
      
   }

 




   let sib=document.getElementById('sib').value;
   localStorage.setItem('sib',sib);
   let dis=document.getElementById('dis').value;
   localStorage.setItem('dis',dis);




   // displayData();

}
localStorage.clear();
function displayData() {
   const div = document.getElementById("div");
   const div1 = document.getElementById("div1");

   const dsiplayName = document.createElement('p');

   dsiplayName.innerHTML = localStorage.getItem('name');


   const dsiplayAge = document.createElement('p');

   dsiplayAge.innerHTML = localStorage.getItem('age');

   const dsiplayGender = document.createElement('p');

   dsiplayGender.innerHTML = localStorage.getItem('gender');

   const date = document.createElement('p');

   date.innerHTML = localStorage.getItem('date');

   const img = document.createElement('p');

   img.innerHTML = localStorage.getItem('img');





   // const dsiplaydec=document.createElement('p');

   // dsiplaydec.innerHTML=localStorage.getItem('dec');

   // const dsiplaymj_un=document.createElement('p');

   // dsiplaymj_un.innerHTML=localStorage.getItem('mj-nu');

   // const pl=document.createElement('p');

   // pl.innerHTML=localStorage.getItem('pl');

   // const img=document.createElement('p');

   // img.innerHTML=localStorage.getItem('img');



   div.appendChild(dsiplayName);
   div.appendChild(dsiplayAge);
   div.appendChild(dsiplayGender);
   div.appendChild(date);
   div.appendChild(img);
   // div1.appendChild(dsiplaydec);
   // div1.appendChild(dsiplaymj_un);
   // div1.appendChild(pl);












}
// displayData();

// 3
function validateName() {
   let y = document.getElementById("name").value;
   let regName = /^[a-zA-Z]+$/;


   if ((regName.test(y) == false) && y != '') {
      document.getElementById("error1").innerHTML = "NO numbers allowed";

   }
   else
      document.getElementById("error1").innerHTML = '';




}
function validatelName() {
   let y = document.getElementById("lname").value;
   let regName = /^[a-zA-Z]+$/;


   if ((regName.test(y) == false) && y != '') {
      document.getElementById("error2").innerHTML = "NO numbers allowed";

   }
   else
      document.getElementById("error2").innerHTML = '';




}
function bdate() {
   let y = document.getElementById("date").value;
   let regDate = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;


   if (regDate.test(y) == false) {
      document.getElementById("error3").innerHTML = "the format should be dd/mm/yyyy";

   }
   else
      document.getElementById("error3").innerHTML = "";




}

function validateEmail() {
   let y = document.getElementById("email").value;
   let regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;


   if (regEmail.test(y) == false) {
      document.getElementById("error4").innerHTML = "invalid email";

   }
   else
      document.getElementById("error4").innerHTML = "";




}

