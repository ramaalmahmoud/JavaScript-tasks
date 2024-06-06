// exersice1
// 1
function findTheLarger (x,y){
    if (x>y){
        console.log("The larger number is "+' '+x);
    }
    else
    console.log("The larger number is "+' '+y)

}
// findTheLarger(1,2);

//2
function findTheSign(n1,n2,n3) {
    if (n1*n2*n3>0)
        window.alert("The Sign of product is"+' '+"+" )

    else if (n1*n2*n3<0)
        window.alert("The Sign of product is"+' '+"-" ) 

}
// findTheSign(-1,-3,-2);

// 3
function sortNums(n1,n2,n3){
    if (n1>n2 && n1>n3){
        if(n2>n3){
            window.alert(n1+' '+n2+' '+n3);
        }
        else
        window.alert(n1+' '+n3+' '+n2);

    }
    if (n2>n1 &&n2>n3)
        {
            if(n1>n3){
                window.alert(n2+' '+n1+' '+n3);
            } 
            else
            window.alert(n2+' '+n3+' '+n1);

        }
        
        if (n3>n1 &&n3>n2){
            if(n1>n2){
                window.alert(n3+' '+n1+' '+n2);
            } 
            else{
            window.alert(n3+' '+n2+' '+n1);

        } 
        }
    }
    

    



// sortNums(2,5,0);

// 4
let arr=[-5,-2,-6,0,-1]
let max=arr[0];


for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}

// window.alert(max);

// 5
function greet(x,y){
    if(x>y){
        window.alert("Hello World" );
    }
    else 
    window.alert("Goodbye" );

}
// greet(5,8);



// exersice2
// 1
let x=0;
if (x<50)
    console.log('fail');
else if (x>=50 && x<=59)
    console.log('E');
else if(x>=60 && x<=69)
    console.log('D');
else if(x>=70 && x<=79)
    console.log('C');
else if(x>=80 && x<=89)
    console.log('B');
else if(x>=90 && x<=100)
    console.log('A');


// exersice3
// 1


for(let num=1;num<11;num++){
    console.log(num);
}

//2
console.log('even numbers:')
var arr1 = [13,23,12,45,22,48,66,100];
for(let i=0; i<arr1.length-1;i++){
    if(arr1[i]%2==0){
        console.log(arr1[i]);
    }
       
}

// 3
let pattern='';
for(let i=1; i<=9;i++){
    for(let j=1;j<i;j++){
     
        pattern=pattern+j + " ";
    }
    pattern=pattern+' \n';
}
console.log(pattern);

let str = "don’t know why";
for(let i of str){
    if(i=="y"){
        console.log("yes")
    }
    else 
    console.log("no")
}


// function
// 1
function tellFortune(job,location,partnersName,numKids) {
   console.log("You will be a "+job+' '+"in"+location+' '+"and married to"+partnersName+' '+"with"+' '+numKids+' '+"kids");

}
tellFortune('software engineer', 'Jordan', 'Alice', 3);

//2
function calculateDogAge (x){
    let age=x*7;
    console.log("Your doggie is "+age+' '+"years old in dog years!")
}
calculateDogAge(5);

// 3
function calculateSupply (age,amount){
    const maxAge=100;
    let supply=(amount*356)*(maxAge-age)
    console.log( 'You will need ' + supply + ' cups of tea to last you until the ripe old age of ' + maxAge);
}
calculateSupply(30, 3);

//4
function greet(name){ // parameter(variable)
    console.log('Hello!'+name);
}
greet('Rama');

//5
function double(x) {
    return 2 * x;
  } // the parameter must be the same that the function must duble it


function double() {
    return 2 * 7;
  }// the parameter must be a variable or nothing not a number 


  function double(x) {
    return 2 * x;
  }// the parameter must be a variable or nothing not a number  and no allow to make calculations at string


//   6
function double1(x1){
    return 2 * x1 ;
  }// the keyword in function syntax is 'function' and must close the parenthesis and return the double of the function parameter (x1) not x
  

  function double2(x){
  return 2 * x;
  }// space between function keyword and the name of function and must start the parenthesis and start the curly bracket

  function  double3 (x){
    return 2 * x;
  }// the parameter is after the name of the function and close the curly bracket


  //7
  function cube (c){
    return c*c*c;
  }
 console.log( cube(3));

 //8
 function multiply(n,m){
    return n*m;
 }
 console.log( multiply(3,5));
//9
 function canIGetADrivingLicense (age){
    if(age>=20)
        return  "yes you can";
    else{
        let g=20-age
    return "please come back after "+g+' '+"years to get one";
    }


 }
 console.log( canIGetADrivingLicense(17));

 //10 
 function sameLength(s1,s2){
    if (s1.length==s2.length){
        return true;
    }
    else 
    return false;
 }
 console.log( sameLength("tree","clue"));

 //11
 function largerNubmer(n1,n2){
    if (n1>n2)
        return n1;
    else
    return n2;
    
 }
 let result=largerNubmer(3,8);
 console.log(result);

//  12
function  smallerNubmer(n1,n2,n3){
    if(n1<=n2 && n1<=n3){
        return n1;
    }
    else if(n2<=n1 &&n2<=n3)
        return n2;
    else if(n3<=n1 &&n3<=n2)
        return n3;
    

}
let smallNum =smallerNubmer(5,3,3);
console.log(smallNum);

//13
function shorterString(s1,s2,s3,s4,s5){
    
        if (s1.length<s2.length && s1.length<s3.length ){
            if(s1.length<s4.length && s1.length<s5.length)
                return s1;
        }
        else if (s2.length<s1.length&& s2.length<s3.length ){
            if(s2.length<s4.length&& s2.length<s5.length)
                return s2;
        }
        else if (s3.length<s1.length&& s3.length<s3.length ){
            if(s3.length<s4.length&& s3.length<s5.length)
                return s3;
        }
       else if (s4.length<s1.length&& s4.length<s3.length ){
            if(s3.length<s4.length&& s3.length<s5.length)
                return s4;
        }
        
        else
        return s5;
    
    
    
    
}
console.log(shorterString("air","tr","car","by","github"))

