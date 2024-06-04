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
let pattern=' ';
for(let i=1; i<=9;i++){
    for(let j=1;j<i;j++){
        pattern+=' ';
        pattern=pattern+j;
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




