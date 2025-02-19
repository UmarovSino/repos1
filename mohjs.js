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
// console.log(Mainfunction (897));

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



// function Mainfunction (num)
// {
// if(num==0)
// {
//     return 1;
// }
// else{
//     return 0;
// }
// }
// console.log(Mainfunction(0));

// function Mainfunction(a,b)
// {
// let x=-(b/a);
// return x;
// }
// console.log(Mainfunction (3,-6));

// function  Mainfunction(a,b)
// {
// let num1=a*2;
// let num2=b*3;
// let sum=num1+num2;
// return sum;
// }
// console.log(Mainfunction(1,1));

// function Mainfunction(num)
// {
// if(num%2==0)return true
// else return false
// }
// console.log(Mainfunction(9));

// function Mainfunction(num)
// {
//     let cnt="";
//     for(let i=num;i>0;i=Math.floor(i/10))
//     {
//         cnt+=i%10;
 
//     }
//     if(num>cnt) return true
//     else return false

// }
// console.log(Mainfunction(27));






// function Mainfunction (a,b)
// {
//     if(a+b==10 || a==10 || b==10)
//     {
//         return true
//     }
//     else return false
//     }
// console.log(Mainfunction(1,9));

// function Mainfunction (a,b)
// {
//     if((a+b)%2==0)
//     {
//         return false
//     }
//     else return true
// }
// console.log(Mainfunction(2,9));
// function Mainfunction(a,b)
// {
// return Math.pow(a,b);
// }
// console.log(Mainfunction(5,5));

// function Mainfunction (num)
// {
//     let cnt="";
//     for(let i=num;i>0;i=Math.floor(i/10))
//     {
//         cnt+=i%10;
//     }
//     if(cnt>num) return false
//     else return true
// }
// console.log(Mainfunction(43));
// function Mainfunction (num)
// {
//     let cnt=1;
//     for(let i=1;i<=num;i++)
//     {
//         cnt*=i;
//     }
//     return cnt;
// }
// console.log(Mainfunction(4));

// function Mainfunction(num)
// {
//     let sum=0;
//     for(let i=num;i>0;i=Math.floor(i/10))
//     {
//         sum+=i%10;
//     }
//     return sum;
// }
// console.log(Mainfunction(12345));
// function Mainfunction(num)
// {
// let cnt=num*10;
// if(cnt<100)
// {
//     return 100;
// }
// else{
// return cnt;
// }

// }
// console.log(Mainfunction(2));

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// function Mainfunction(a, b) {
//     for (let i = a; i <= b; i++) {
//         if (isPrime(i)) return true;
//     }
//     return false;
// }
// console.log(Mainfunction(10, 15)); 
// console.log(Mainfunction(62, 66)); 

// function Mainfunction (num)
// {
//     let sum=0;
//     for(let i=1;i<=num;i++)
//     {
//      sum+=Math.pow(i,2);
//     }
//     return sum;
// }
// console.log(Mainfunction(4));

// function gcd(a, b) {
//         if (b == 0) return a;
//         return gcd(b, a % b);
//     }
//     console.log(gcd(3, 5));
// function Mainfunction(n) {
//     let result = "";
//     for (let i = 1; i <= 10; i++) {
//         result += ((n * i) + 1);
//         if (i < 10) {
//             result += ", ";
//         }
//     }
//     return result;
// }
// console.log(Mainfunction(1));

///classtask
///1
// function strDiapozone(num)
// {
//     let res = ""
    
//     for (let i = 1; i <= num; i++) {
//         res += i
//         if (i < num) { 
//             res += ", "
//         }
//     }
    
//     return res
// }

// console.log( strDiapozone(5));
///2
// function isPalindrom(num) {
//     let res = "";
//     for (let i = num; i > 0; i = Math.floor(i / 10)) {
//         res += i % 10;
//     }
//     return num == res && isPrime(num);
// }

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) return false;
//     }
//     return true;
// }

// console.log(isPalindrom(101)); 
///3
// function mmRadom(a,b)
// {
// for(let i=a;i<=b;i++)
// {
//     return Math.floor(Math.random(i)*10);
// }
// }
// console.log(mmRadom(1, 10));





///5
// function strDiapozone(a,b)
// {
//     let res = ""
    
//     for (let i = a; i <= b; i++) {
//         res += i
//         if (i < b) { 
//             res += ", "
//         }
//     }
    
//     return res
// }

// console.log( strDiapozone(10,12));

///4
// function superSearch(num, num1) {
//     let result = 0;
//     let cnt = 1;

//     for (; num > 0; ) {
//         let okhironraqam = num % 10;
//         if (okhironraqam !== num1) {
//             result = result + (okhironraqam * cnt);
//             cnt = cnt * 10;
//         }
//         let raqamiokhir = Math.floor(num / 10);
//         num = raqamiokhir - (raqamiokhir % 1); 
//     }

//     return result;
// }
// console.log( superSearch(4543, 4)); 

//6
// function calculator(num1, operator, num2) {
//     if (operator === '+') {
//         return num1 + num2;
//     } else if (operator === '-') {
//         return num1 - num2;
//     } else if (operator === '*') {
//         return num1 * num2;
//     } else if (operator === '/') {
//         return num2 !== 0 ? num1 / num2 : 'Error: Ба нол таксим намешавад';
//     } else if (operator === '%') {
//         return num2 !== 0 ? num1 % num2 : 'Error: Ба нол таксим намешавад';
//     } else {
//         return 'Error: оператори ғайриқобили қабул';
//     }
// }
// console.log(calculator(1, '+', 3)); 



///8

// function Mainfunction (num)
// {
// if(num==5)
// {
//     return "Great";
// }
//  else if (num==4)
// {
//     return "Good";
// }
// else{
//     return "Will Do";

// }
// }
// console.log(Mainfunction(3));

///9

///7
///10


////hometask
///1
///2
// function Mainfunction()
// {
//     let randomniy=Math.floor(Math.random() * 1000);
// let cnt="";
// for(let i=randomniy;i>0;i=Math.floor(i/10))
// {
//     cnt+=i%10;
// }
// return cnt==randomniy;

// }
// console.log(Mainfunction());

//3
// function Mainfunction(a,b)
// {
//     let cnt=0;
//     for(let i=a;i>0;i=Math.floor(i/10))
//     {
//        if(i%10==b)
//        {
//         cnt++;
//        }
//     }
//     return cnt;

// }
// console.log(Mainfunction(4,4));
///4

///5
// function Ruler(a,b)
// {
//     let res = "";
    
//     for (let i = a; i <= b; i++) {
//         res += i+"cm";
//         if (i < b) { 
//             res += ", ";
//         }
//     }
    
//     return res
// }

// console.log(Ruler(8,11));
///6
// function getLastDayOfFebruary(year) {
  
//     let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  
//     return isLeapYear ? 29 : 28;
//   }
//   console.log(getLastDayOfFebruary(2024)); 

  //7
//   function converter (val1, val2, val3, val4)
//   {
//     return val1/val4;
//   }
// console.log(converter(1000, "tjs", "usd", 10));
///8
// function bblSort(arr) {

//     for (let i = 0; i < arr.length; i++) {
      
//         for (let j = 0; j < (arr.length - i - 1); j++) {

          
//             if (arr[j] > arr[j + 1]) {

             
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
// }
//     console.log(bblSort(312));











// function infConv(num1, num2, num3){
//       let cnt;
//       if(num2 == "bit"){
//           cnt = num1;
//       }
//       else if(num2 == "byte"){
//           cnt = num1 * 8;
//       }
//       else if(num2 == "kb"){
//           cnt= num1 * 8 * 1024;
//       }
//       else if(num2 == "mb"){
//           cnt = num1 * 8 * 1024 * 1024;
//       }
//       else if(num2 == "gb"){
//           cnt = num1 * 8 * 1024 * 1024 * 1024;
//       }
  
//       let result;
//       if(num3 == "bit"){
//           result = res;
//       }
//       else if(num3 == "byte"){
//           result = res / 8;
//       }
//       else if(num3 == "kb"){
//           result = res / (8 * 1024);
//       }
//       else if(num3 == "mg"){
//           result = res / (8 * 1024 * 1024);
//       }
//       else if(num3 == "gb"){
//           result = res / (8 * 1024 * 1024 * 1024);
//       }
//       return result;
//   };
//   console.log(infConv(2, "mb", "kb"));


// function gcd(a,b)
// {
//   if(b==0) return a;
//   return gcd(b,a%b)
// }
// console.log(gcd(14,8));


// function evenisOdd(num)
// {
//   if (num == 0) return "Number is even";
//   if (num == 1) return "Number is odd";
//    return evenisOdd(Math.abs(num) - 2);
// }

// console.log(evenisOdd(-42));
// function sumofDigits(num)
// {
//   if(num==0) return 0;
//   return num%10+sumofDigits(~~(num/10));
// }
// console.log(sumofDigits(222));

////day1
///1
// function factorial(num)
// {
//   if(num==0) return 1
//   return num*factorial(num-1);
// }
// console.log(factorial(5));

///2
// function sumTo(num)
// {
//   if(num==0) return 0;
//   return num+sumTo(num-1);
// }
// console.log(sumTo(10));
///3
// function power(num1,num2)
// {
//   if(num2==0) return 1;
//   return num1*power(num1,num2-1)
// }
// console.log(power(3,3));



////day2hometask
////1
// function Mainfunction(num)
// {
//   if(num==0) return 0;
//   if(num%2!=0)
//   {
//     return num+Mainfunction(num-1)
//   }
//   return 0+Mainfunction(num-1)
// }

// console.log(Mainfunction(1));

////6
// function fibonacci(n) {
//   if (n <= 0) return 0;
//   if (n == 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// function sumFibonacci(n) {
//   if (n <= 0) return 0;
//   return fibonacci(n) + sumFibonacci(n - 1);
// }

// console.log(sumFibonacci(5)); 


// function sumDigits(n) {
//   if (n === 0) return 0; 
//   return (n % 10) + sumDigits(Math.floor(n / 10)); 
// }
// console.log(sumDigits(1101)); 
///3
// function Mainfunction (num)
// {
//   if(num==0) return 0;
//   return num%10+Mainfunction(Math.floor(num/10)*2)
// }
// console.log(Mainfunction(1101));
// function countDigits(n) {
//   if (n === 0) return 0;
//   return 1 + countDigits(Math.floor(n / 10)); 
// }

// function sumPowerDigits(n, power) {
//   if (n === 0) return 0;
//   return Math.pow(n % 10, power) + sumPowerDigits(Math.floor(n / 10), power); 
// }

// function isArmstrong(n) {
//   let numDigits = countDigits(n); 
//   return n === sumPowerDigits(n, numDigits); 
// }

// console.log(isArmstrong(153)); 

// function isMultiple(num,taq) {
//   if (num == 0) {
//       return true; 
//   }
//   if (num < taq) {
//       return false; 
//   }
//   return isMultiple(num - taq, taq); 
// }
// console.log(isMultiple(15, 5)); 


// function gcd(a,b)
// {
//   if(b==0) return a;
//   return gcd(b,a%b)
// }
// console.log(gcd(17,13));
// function createAdder(x) {
//   return function(y) {
//       return x + y;
//   };
// }
// const addFive = createAdder(5);
// console.log(addFive(3)); 

// function createCounter() {
//   let count = 0;
  
//   return function() {
//       count++;
//       return count;
//   };
// }
// const counter = createCounter();
// console.log(counter());  
// function createMaxFinder() {
//   let maxNumber = Number.NEGATIVE_INFINITY;
  
//   return function(num) {
//       if (num > maxNumber) {
//           maxNumber = num;
//       }
//       return maxNumber;
//   };
// }

// /
// const maxFinder = createMaxFinder();
// console.log(maxFinder(3));  
// function sumNumbers(initialNumber) {
//   let total = initialNumber;
  
//   return function(nextNumber) {
//       total += nextNumber;
//       return total;
//   };
// }
// const addNumbers = sumNumbers(5);
// console.log(addNumbers(3)); 

// function createAverageCalculator() {
//   let sum = 0;
//   let count = 0;
  
//   return function(number) {
//       sum += number;
//       count++;
//       return sum / count;
//   };
// }
// let averageCalculator = createAverageCalculator();
// console.log(averageCalculator(10));
// console.log(averageCalculator(15));

// let str1="hello";
// let str2="bots";
// console.log(str1.concat(" ",str2));

// let cnt="  google   ";
// console.log(cnt.trim());

// let cnt="hello world";
// console.log(cnt.includes("w"));



// let cnt="hello world";
// let rep=cnt.replace("hello","bots")
// console.log(rep);


// let cnt="hello world";
// let subs=cnt.substring(1,30);
// console.log(subs);

// let cnt="hello world";
// let subs=cnt.slice(1,-1);
// console.log(subs);

// function repeatLastCharacter(str, n) {
//   if (str.length === 0 || n <= 0) {
//       return str;
//   }
//   let lastCharacter = str[str.length - 1];
//   let result = str;
//   for (let i = 0; i < n; i++) {
//       result += lastCharacter;
//   }
  
//   return result;
// }
// console.log(repeatLastCharacter(myString,3));  
// function concatenateFirstAndLast(str) {
//   if (str.length === 0) {
//       return '';
//   }
//   let firstCharacter = str[0];
//   let lastCharacter = str[str.length - 1];
//   let result = firstCharacter + lastCharacter;
  
//   return result;
// }
// let myString = "hello";
// console.log(concatenateFirstAndLast(myString)); 

// let singleCharString = "a";
// console.log(concatenateFirstAndLast(singleCharString)); 

// let emptyString = "";
// console.log(concatenateFirstAndLast(emptyString)); 
// function toInt(str) {
//   let result = 0;
//   let isNegative = false;
//   let startIndex = 0;
//   if (str[0] === '-') {
//       isNegative = true;
//       startIndex = 1;
//   }
//   for (let i = startIndex; i < str.length; i++) {
//       result = result * 10 + (str[i] - '0');
//   }
//   if (isNegative) {
//       result = -result;
//   }

//   return result;
// }
// console.log(toInt(1232));
// function isPlural(word) {
//   if (word.length === 0) {
//       return false;
//   }
//   let lastCharacter = word[word.length - 1];
//   return lastCharacter === 's';
// }

// console.log(isPlural("cats")); 



// function reverseAndUpperCase(str) {
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i--) {
      
//       let upperChar = str[i];
//       if (upperChar >= 'a' && upperChar <= 'z') {
//           upperChar = String.fromCharCode(upperChar.charCodeAt(0) - 32);
//       }
//       result += upperChar;
//   }

//   return result;
// }
// console.log(reverseAndUpperCase("hello")); 



// function Mainfunction(num,num1){
//   return num.includes(num1)
// }
// console.log(Mainfunction("abc","t"));



// function calculateProduct(numberString) {
//   let numberArray = numberString.split(',');
//   let product = 1;

//   for (let i = 0; i < numberArray.length; i++) {
//       product *= parseFloat(numberArray[i]);
//   }

//   return product;
// }

// console.log(calculateProduct("2,4")); 


// function joinNumbersWithCharacter(num, character) {
//   let result = '';
//   for (let i = 1; i <= num; i++) {
//       let numberStr = String(i);

//       for (let j = 0; j < numberStr.length; j++) {
//           result += numberStr[j];
//           if (j < numberStr.length - 1 || i < num) {
//               result += character;
//           }
//       }
//   }
//   return result;
// }
// console.log(joinNumbersWithCharacter(12,"-"));  
// function checkPalindrome(str) {
//   let cnt = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//       cnt += str[i];
//   }
//   return cnt == str;
// }

// console.log(checkPalindrome("mom"));  
 
// function reverse(str) {
//   if (str == "" || str.length ==1) {
//       return str;
//   }
//   return reverse(str.substring(1)) + str[0];
// }

// console.log(reverse("hello")); 



///hometask
//1
// function shiftToLeft(a,b)
// {
// if(b==0) return a;
// return shiftToLeft(a*2,b-1);
// }
// console.log(shiftToLeft(10,3));
///6
// function gcd(a,b)
// {
//   if(b==0) return a;
//   return gcd(b,a%b)
// }


// console.log(gcd(48,18));
// function minRecur(num) {
//   if (num < 10) {
//     return num;
//   }

//   const lastDigit = num % 10;
//   const maxOfRest = minRecur(Math.floor(num / 10));
  
//   return Math.min(lastDigit, maxOfRest);
// }

// console.log(minRecur(98493284))






// function Mainfunction(num,num1){
// if(num==num1) return num1;
// return num+","+ Mainfunction(num+1,num1)
// }
// console.log(Mainfunction(3,1));
// let defaultf =(num)=>{
// return (num2)=>{
//   return (num+=num2);
// }
// }
// let adder=defaultf(10);
// console.log(adder(5));)


// function Doubleletter(num) {
//   if (num.length <= 1) {
//       return false;
//   }

//   if (num[0] == num[1]) {
//       return true;
//   }
//   return Doubleletter(num.slice(1));
// }
// console.log(Doubleletter("yummy")); 



// function moveCapitalsToFront(word) {

//   if (word.length === 0) {
//       return "";
//   }
//   let firstChar = word[0];
//   let restOfWord = moveCapitalsToFront(word.substring(1));

//   if (firstChar >= 'A' && firstChar <= 'Z') {
//       return firstChar + restOfWord;
//   } else {
//       // Otherwise, add it to the end
//       return firstChar + restOfWord;
//   }
// }
// console.log(moveCapitalsToFront("MENTmove"));  


















