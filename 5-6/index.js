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


      
// let b= document.getElementById("Bold");
// b.addEventListener("click",changingBold);
//  var changingBold =function (boldstyle){
//     var a=document.getElementById("content");
//     
//     if(b.changingBold){
//         a.style.fontWeight=boldstyle.value;
//     }
//     else{
//         a.style.fontWeight=boldstyle.value;}
//     }

    // var changingBoldStyle = function (fontstyle) {
        
    //     document.getElementById("content").style.fontWeight = true;
    //    // document.getElementById("content").style.fontWeight = fontstyle.value;
       
       
    //  }


     var btnBold = document.getElementById("boldCheckbox"),
    title   = document.querySelector("#imagewrap h3");

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