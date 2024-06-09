function d(){
    document.getElementById("d1").innerHTML="Can I help you?";
}


function a(){
    document.getElementById("d1").innerHTML="Hello World!";
}

function changeImages(){
    let fileName= document.getElementById("contry-select").value;
    document.getElementById("img1").src=fileName;
}
var changingFontStyle = function (fontstyle) {
         document.getElementById("content").style.fontFamily = fontstyle.value;
         document.getElementById("content").style.fontSize = fontstyle.value;
        
        
      }


 

     var btnBold = document.getElementById("boldCheckbox");
    

btnBold.addEventListener("change", function(){
    
    document.getElementById("content").style.fontWeight = this.checked ? "bold" : "normal";
});

var btnItalic = document.getElementById("italicCheckbox");


btnItalic.addEventListener("change", function(){

document.getElementById("content").style.fontStyle = this.checked ? "italic" : "normal";
});
var btnUl = document.getElementById("ulCheckbox");
btnUl.addEventListener("change", function(){

    document.getElementById("content").style.textDecoration = this.checked ? "underline" : "none";
    });



var box=document.getElementById('d2');
box.style.backgroundColor ='blue';
box.addEventListener('click', function onClick(){
   box.style.backgroundColor ='red';
});
 
document.getElementById("myform").addEventListener("change", function(event) {
    event.preventDefault();
    var pass=document.getElementById('pass').value;
    var rpass=document.getElementById('rpass').value;
    var isValid = true; 
    var limit = 6; 
    if(pass.length<limit){
         document.getElementsByClassName('error')[0].textContent ='Error:Password must be at least 6characters';
    isValid = false;
    
    }
    else if(pass!=rpass){
        document.getElementsByClassName('error')[1].textContent ="Error:The tow passwords don't match";
        isValid = false;
    }

   
     else if(isValid==true){
        document.getElementById('submitBtn').style.visibility='visible';
    }
    
  
});
let song=document.getElementById('song');
let songBtn=document.getElementById('songBtn');
let mySongs=document.getElementById('mySongs');

songBtn.addEventListener('click',function(event){
  
    mySongs.innerHTML+=song.value+ ' <br />';
    
    
    
    
    
    
    
});



