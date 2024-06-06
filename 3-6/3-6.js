// zakat 
let x=250;
x=250*(2.5/100);
console.log("the value of zakat= "+x);

//  Array task 1
 let arr=[1,7,9,45,] //add comma after '7' and '9'
console.log(arr);
// 
let arr1=["Str", "alex","moh",

 'the','fox' ,'over' ,'lazy', 'dog',  ] //add comma after these indexes(0 ,2,4,5) and put the value of inex 6 in single qutation
 console.log(arr1);

//  2
 var fruits=["Tomato","Banana","Watermelon"]
 console.log("The index of 'banana' is "+fruits.indexOf("Banana"));
 console.log("The index of 'Tomato' is "+fruits.indexOf("Tomato"));

//  3
let myFavoriteFood=['Yalanji','Mansaf']
let myFavoriteSport=['Cardio', 'Swimming','Zomba']
let myFavoriteMovie=['The Shawshank Redemption','Spider Man']
console.log("My favorite Food is: "+myFavoriteFood + '\n'+"My favorite Sport is:  "+myFavoriteSport+'\n'+"My favorite Movie is: "+myFavoriteMovie)

//4
let firstOfArray=[1,4,5]
let firstElement=firstOfArray.shift();
console.log("The first element is:  "+firstElement)
 firstOfArray=["t","u","g","x"]
 firstElement=firstOfArray.shift();
 console.log("The first element is:  "+firstElement)

//  5
let lastOfArray=[1,4,5]
let lastElement=lastOfArray.pop();
console.log("The last element is:  "+lastElement)
lastOfArray=["t","u","g","x"]
lastElement=lastOfArray.pop();
console.log("The last element is:  "+lastElement)

// 6
var array = [0,5,7,9]
array.shift(); //remove 0
array.shift(); //remove 5
array.shift(); //remove 7
array.unshift(8); // add 8 at the first of the array
array.unshift(6); // add 6 at the first of the array
array.unshift(4);  // add 4 at the first of the array
array.unshift(3); // add 3 at the first of the array
array.unshift(1); // add 1 at the first of the array
array.push(10); // add 10 at the end of the array
console.log(array)

// 7
array.shift(); //remove 1
array.shift(); //remove 3
array.shift(); //remove 4
array.shift(); //remove 6
array.shift(); //remove 8
array.unshift(5) //add 5 at the begining
array.pop(); //remove 10 from the end
array.push(-7) // add -7 at the end
array.push(3.5) // add 3.5 at the end
console.log(array)

// 8
var array1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
let len =array1.length;
for (let i=0 ;i<len-1; i++){
    for(let j=0; j<len-1-i;j++){
        if(array1[j] > array1[j+1]) {
            let x=array1[j];
            array1[j]=array1[j+1];
            array1[j+1]=x;
        }
    }
}
    console.log(array1)



