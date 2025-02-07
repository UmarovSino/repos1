// mohi2
// let n=null;
// console.log(typeof n);
// function sumTwoNumber(a,b)
// // {
// // return a+b;
// // }
// // console.log( sumTwoNumber(2,3));


// function checkNumber(num)
// {
//     if(num>0)
//     {
//         return "positive";
//     }
//     else if(num<0)
//     {
//         return "negative";
//     }
//     else
//     {
//         return "zero";
//     }
// }
// console.log( checkNumber(5) );

// function generateMultiplicationTable(num)
// {
//     let table="";
//     for(let i=1;i<=10;i++)
//     {
//         table+=`${num} * ${i} = ${num*i}\n`;
//     }
//     return table;
// }
// console.log( generateMultiplicationTable(5));

// function endNine(num)
// {
//     return num%10==9;
// }

// console.log(endNine(387));
// function century(year) {
//     return Math.ceil(year / 100);
// }
// console.log(century(1705));




// function circleArea(radius)
// {
//     return "The area of a circle with radius "+ radius+" is "+ Math.floor(Math.PI*radius*radius);
// }
// console.log(circleArea(8));

// function Mainfunction(num)
// {
//     let sum=0;
//  for(let i=num;i>0; i=Math.floor(i/10))
//  {
//         sum+=i%10;
    

//  }
//  return sum;
// }
// console.log(Mainfunction(345));

// function Mainfunction(num)
// {
//     if(num%2==0)
//     {
//         return num+1;
//     }
//     else
//     {
//         return num+2;
//     }
// }
// console.log(Mainfunction(22));

// function Mainfunction(num,num1)
// {
//     if(num+num1<100)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }
// console.log(Mainfunction(22,33));

// function Mainfunction(num){
//     return num*4;
// }
// console.log(Mainfunction(25));

// function Mainfunction(num){
//     return num*num;
// }
// console.log(Mainfunction(8));

// function Mainfunction(num,num1){
//     let sum=num+num1;
//     return sum/2;
// }
// console.log(Mainfunction(7,9));

// function Mainfunction (num)
// {
//     if(num%2==0)
//     {
//         return 3;
//     }
//     else{
//         return 4;
//     }
// }
// console.log(Mainfunction(-8));

// function Mainfunction(num)
// {
//     let sum=17*(num*num) - 6*num + 13;
//     return sum;
// }
// console.log(Mainfunction(0));

// function Mainfunction(num)
// {
//     let cnt="";
   
//     for(let i=num;i>0;i=Math.floor(i/10))
//     {
//         cnt+=i%10;
//     }
//     let digit="";
// for(let j=cnt;j>0;j=Math.floor(j/10)){


//      digit+=j%10;
// }
// return digit*2;
// }
// console.log(Mainfunction(7132));






// function longestDuration(h, m, s) {

//     let hours = h * 3600;
//     let minutes = m * 60;
//     let seconds = s;
//     let longest = Math.max(hours, minutes, seconds);
//     return longest;
// }
// console.log(longestDuration(2,300,15000));
// function longestDuration(h, m, s) {

//         let hours = h * 3600;
//         let minutes = m * 60;
//         let seconds = s;
//      if(hours>minutes && hours>seconds)
//      {
//         return h;
//      }
//      else if(minutes>h && minutes>seconds)
//      {
//         return m;
//      }
//      else{
//         return s;
//      }
//     }
//     console.log(longestDuration(2,300,15000));


// function Mainfunction(num)
// {
//     let cnt="";
//     for(let i=num;i>0;i=Math.floor(i/10))
//     {
//         cnt+=i%10;
//     }
//     if(num>cnt){
// return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(Mainfunction(14));

// function Mainfunction(num)
// {
//     let sum=0;
//     for(let i=1;i<=num;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }
// console.log(Mainfunction(600));

// function Mainfunction (num,num1)
// {
//     let sum=0;
//     for(let i=num;i<=num1;i++)
//     {
//         if(i%2==0)
//         {
//             sum+=i;
//         }
//     }
//     return sum;
// }
// console.log(Mainfunction());

// function Mainfunction (num)
// {
//     let cnt=1;
//     for(let i=1;i<=num;i++)
//     {
//         cnt*=i;
//     }
//     return cnt;
// }
// console.log(Mainfunction (5));

// function Mainfunction(num)
// {
//     let sum=1;
//     for(let i=num;i>0;i=Math.floor(i/10))
//     {
//         sum*=i%10;
//     }
//     return sum;
// }
// console.log(Mainfunction (811));

// function Mainfunction(num)
// {
//     sum=0;
//     for(let i=1;i<=num;i++)
//     {
//         sum+=i;
//     }
//     return sum;
// }
// console.log(Mainfunction(5));



// function Mainfunction(num)
// {
//     let cnt="";
   
//     for(let i=num;i>0;i=Math.floor(i/10))
//     {
//         cnt+=i%10;
//     }
// if(cnt==num)
// {
//     return true;
// }
// else{
//     return false;
// }
// }
// console.log(Mainfunction(7227));

// function isprime(number)
// {
//     for(let i=2;i<number;i++){

//     if(number%i==0) {
//         return "false"
//     }
//     }
//     return true;
// }
// console.log(isprime(6));

