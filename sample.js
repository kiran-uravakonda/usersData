// var data=[
//     {
//         "id": 1,
//         "name": "kiran",
//         "gmail": "kiran@gmail.com"
//     },
//     {
//         "id": 2,
//         "name": "amar",
//         "gmail": "amar@gmail.com"
//     },
//     {
//         "id": 3,
//         "name": "surendra",
//         "gmail": "surendra@gmail.com"
//     },
//     {
//         "id": 4,
//         "name": "kullayappa",
//         "gmail": "kullayappa@gmail.com"
//     },
//     {
//         "id": 5,
//         "name": "Akhil",
//         "gmail": "Akhil@gmail.com"
//     }
// ]
// var a=data.splice(data.length)
// console.log(a)
// console.log(data.length)

// console.log(data[0].id)

// for(var i=0;i<=data.length-1;i++)
// {
//     console.log(data[i].id)
// }

// data.filter(value=>
//     {
//         console.log(value.id)
//         console.log(value)
//     })







// var a=[10,23,31,40]
// a.filter(value=>{
//     // if(value%2==0){
//     // console.log(value)
//     // }
//     console.log(value)
// })






// var data= [
//     {
//       "name": "Uthappizza",
//       "image": "images/uthappizza.png",
//       "category": "mains",
//       "label": "Hot",
//       "price": "4.99",
//       "featured": "true",
//       "description": "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
//       "comments": [
//         {
//           "rating": 5,
//           "comment": "Imagine all the eatables, living in conFusion!",
//           "author": "John Lemon",
//           "date": "2012-10-16T17:57:28.556094Z"
//         },
//         {
//           "rating": 4,
//           "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
//           "author": "Paul McVites",
//           "date": "2014-09-05T17:57:28.556094Z"
//         },
//         {
//           "rating": 3,
//           "comment": "Eat it, just eat it!",
//           "author": "Michael Jaikishan",
//           "date": "2015-02-13T17:57:28.556094Z"
//         },
//         {
//           "rating": 4,
//           "comment": "Ultimate, Reaching for the stars!",
//           "author": "Ringo Starry",
//           "date": "2013-12-02T17:57:28.556094Z"
//         },
//         {
//           "rating": 2,
//           "comment": "It's your birthday, we're gonna party!",
//           "author": "25 Cent",
//           "date": "2011-12-02T17:57:28.556094Z"
//         }
//       ]
//     }
//   ]

// //   var a=data.splice(data[0].comments.length)
// // console.log(a)
// // console.log(data[1])
// // console.log(data[0].comments[0])
// // console.log(data.length)
// // for(var i=0;i<=data.length-1;i++)
// // {
// //     console.log(data[i].comments)
// // }

// var a=data.splice(data.length)
// console.log(a)
// console.log(data.length)
// console.log(data[0].comments.length)

 
    
// var a=[10,20,30,40,50]

// // console.log(a.splice(1))
// a.splice(0)
// console.log(a)


// const ages = [3, 10, 18, 20];

// ages.some(18);
// console.log(ages)

// var a=[10,20,30,40,50]
// a.forEach(value=>{
//     console.log(value)
// })

// var a=[10,20,30,40,50]
// var b=Object.entries(a)
// console.log(b)
// console.log(typeof b)

// var a=new Array(10,20)
// console.log(a[0])

// const numbers = [1, 2, 3, 4, 5];
// const length = numbers.length;
// for (let i = 0; i < length; i++) {
//   numbers[i] *= 2;
// //   console.log(numbers)
// }
// console.log(numbers)
// numbers is now [2, 4, 6, 8, 10]

// const numbers = [];
// numbers.length = 3;
// console.log(numbers);

// var a=[10,20,30,40,50]
// var b=a.at(-6)
// console.log(b)


// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3=['x', 'y', 'z']
// // const array3 = array2.concat(array2);
// const array4=array1.concat(array2,array3)

// console.log(array4);

// const a=[10,20,30]
// var b=a.concat(1,[2,3])
// console.log(b)

// var a=[10,20,30,40,50]
// a.forEach(value=>{
//   console.log(value)
// })
// console.log(a)

// var a=[10,20,30,40,50,120]
// var result=(value)=>value>100
// console.log(a.every(result))


// var a=[10,20,31,40,53]
// var b=a.filter(function(ele){
//   return ele%2==0
// })
// console.log(b)



// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function isprime(num){
// for(var i=2;num>i;i++)
// {
//   if(num%i===0)
//   {
//     return false
//   }
// }
// return num>1
// }
// console.log(array.filter(isprime))



var n=13;
var count=1;
for(var i=1;i<=n/2;i++)
{
  if(n%i===0){
  count=count++
  }
}
if(count===2)
{
  console.log("prime number")
}
else
{
  console.log("not a prime number")
}