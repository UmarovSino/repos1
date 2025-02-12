<img src="./images.png">

# javaScript
### lecture2
______

* Condition
* Loops
* Function
_______________
# if-шартгузорӣ
    
3 роҳи сохтани condition мавҷуд аст.
 * бо роҳи if else  if else
  * switch case
  * бо роҳи ternary operator

# loop -цыкл
  цылк ҳам ба монанди дар боло зикркардашуда( дар мавзуи if)  бо се роҳ сохта мешавад

* for
* while
* do/while
  

# function-функция

<img src="Снимок экрана 2025-01-08 140406.png">

функция хам ба монанди дигархо ба се гурух чудо карда мешавад:

# fuction declaration

<img src="./Снимок экрана 2025-01-08 140820.png">

функции declaration функцияи номдор мебошад ба воситаи номе ки гузошта мешавад файрот мекнем.

# fuction expression

<img src="./Снимок экрана 2025-01-08 141123.png">


  дар навбати худ ба ду гурух чудо мешавад.

* anonym 
* arrow
  

  намунаи мисолҳо бо ин ду функсия

  <img src="./Снимок экрана 2025-01-08 141624.png">

 # JavaScript Loops
## Loop for
 ### EXAMPLE

```for (let i=0; i<=5; i++) {
    console.log(i);
}
```
 ### While Loop
###EXAMPLE

```let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```
### do while Loop
###EXAMPLE

```let i = 0;
do {
    console.log(i);
    i++;
} while (i<=5);```
#JavaScript Functions
# Function Declaration
###EXAMPLE

```function SumTwoNum(num1,num2) {

   return num1+num2;

}
let user1=SumTwoNum(2,3)
console.log(user1);
2. Function Expression
EXAMPLE a. Anonymous Function

let SumTwoNum = function(num1, num2) {
    return num1 + num2;
};
let user1 = SumTwoNum(2, 3);
console.log(user1);
b. Arrow Function

let SumTwoNum = (num1, num2) =>
num1 + num2;
let user1 = SumTwoNum(2, 3);
console.log(user1);
3.IIFE (Immediately Invoked Function Expression)
(function(num1, num2) {
    console.log(num1 + num2);
})(2, 3);
```
# javaScript
### lecture3
______

<img src="./Снимок экрана 2025-01-10 143408.png">

 ### лексияи сеюм
 _______
<img src="./Снимок экрана 2025-01-10 143423.png">
 
 ### Scope дар ҷава чист?

_______
 Дар JavaScript миқёс бо контексти ҷории рамзи шумо ишора мекунад.Ин контекст муайян мекунад ки дар куҷо мо метавонем ба тағйирёбандаҳо ва функсияҳо дастраси пайдо кунем.
 Доираи барномасозӣ  як қисми барномаест , ки дар дохили он идентификатор , ки ҳамчун номи ягон объекти барнома эълон шудааст (одатан тағирёбанда , навъи маълумот ё функсия ) бо ин объект алоқаманд боқӣ мемонад, яъне  имкон медиҳад, ки ба он тавассути худ дастрас шавад. Муайянкунандаи объект гуфта мешавад, ки дар як макони мушаххаси барнома "намоён" аст, агар он метавонад барои истинод ба объект дар он макон истифода шавад. Берун аз доираи доираи як идентификатор метавонад ба тағирёбанда ё функсияи дигар пайваст бошад ё озод бошад (ба ҳеҷ кадоме аз онҳо вобаста нест). Миқёс метавонад бо доираи объекте, ки ном ба он вобаста аст, мувофиқат кунад, аммо ҳатмӣ нест.

Пайвасткунии идентификатор ( англисӣ :  binding ) дар истилоҳоти баъзе забонҳои барномасозӣ  раванди муайян кардани объекти барномаест, ки дастрасӣ ба он аз ҷониби идентификатор дар ҷои мушаххаси барнома ва дар лаҳзаи мушаххаси иҷрои он таъмин карда мешавад. Ин мафҳум аслан бо миқёс синоним аст , аммо ҳангоми баррасии ҷанбаҳои муайяни иҷрои барнома метавонад қулайтар бошад.

Миқёсҳо дар дохили ҳамдигар ҷойгир шудаанд ва иерархияро ташкил медиҳанд  , аз доираи маҳаллӣ, маҳдуд ба функсия (ё ҳатто як қисми он) то доираи глобалӣ, ки идентификаторҳои онҳо дар тамоми барнома дастрасанд. Инчунин, вобаста ба қоидаҳои забони мушаххаси барномасозӣ, миқёсҳоро бо ду роҳ амалӣ кардан мумкин аст: лексикӣ (статикӣ) ё динамикӣ  .
Дар барномаи монолитӣ (як модул) бидуни функсияҳои лона ва бидуни истифодаи OOP, танҳо ду намуди доираи намоён вуҷуд дошта метавонад: глобалӣ ва маҳаллӣ. Навъҳои дигар танҳо дар сурате вуҷуд доранд, ки забон механизмҳои муайяни синтаксисӣ дошта бошад.

Доираи глобалӣ  - идентификатор дар тамоми матни барнома дастрас аст (дар бисёр забонҳо маҳдудият вуҷуд дорад - танҳо дар матн пас аз эълони ин идентификатор).
Доираи маҳаллӣ  - идентификатор танҳо дар доираи функсияи мушаххас (тартиби) дастрас аст.
Намоиши модул метавонад дар барномаҳои модулӣ мавҷуд бошад , ки аз якчанд қисмҳои алоҳидаи код иборатанд, ки маъмулан дар файлҳои гуногун ҷойгиранд. Идентификаторе, ки доираи он модул аст, аз ҳар коди дохили он модул дастрас аст.
Баста ё фазои ном . Зер доираи номбаршуда дар доираи глобалӣ ба таври сунъӣ ҷудо карда шудааст. Ном ба ин қисми барнома "баста" аст ва танҳо дар дохили он вуҷуд дорад. Берун аз ин минтақа, ном ё умуман дастрас нест ё танҳо ба таври маҳдуд дастрас аст.
Илова ба гуфтаҳои дар боло зикршуда, забонҳои OOP метавонанд маҳдудиятҳои махсуси миқёсро дастгирӣ кунанд, ки танҳо ба аъзоёни синф дахл доранд (идентификаторҳое, ки дар дохили синф эълон шудаанд ё ба синф алоқаманданд ):

Доираи хусусӣ (шахсӣ, пӯшида) ( англисӣ:  private ) маънои онро дорад, ки ном танҳо дар доираи усулҳои синфи худ дастрас аст .
Доираи муҳофизатшуда маънои онро дорад, ки ном танҳо дар дохили синф ва синфҳои насли он дастрас аст . 
Доираи ҷамъиятӣ маънои онро дорад , ки  ном дар доираи он, ки синфи он ба он тааллуқ дорад, дастрас аст.
 ________

    Дар навбати худ ба чор гуруҳ ҷудо мешаванд.
  ________
  # Function declaration -Hosting

  <img src="./Снимок экрана 2025-01-10 143535.png">

Дар JavaScript, эъломияҳои функсия комилан баланд карда мешаванд (hoisted). Ин маънои онро дорад, ки ҳам номи функсия ва ҳам таърифи он ба қисми болоии дастрасии худ дар доираи дахлдор бардошта мешаванд, ки функсияро имкон медиҳад дар ҳар куҷои ин доира, ҳатто пеш аз таърифи воқеии он дар код, фаро хонда шавад.
<img src="./Снимок экрана 2025-01-10 143547.png">
Майдони муваққатии беэътиборӣ (Temporal Dead Zone) барои let ва const

TDZ: Ин истилоҳ барои тавсифи ҳолатест, ки дар он тағйирёбандаҳо дастнорас мебошанд. Онҳо дар доира ҳастанд, аммо ҳанӯз эълом нашудаанд. Тағйирёбандаҳои let ва const дар TDZ аз оғози доираи худ то лаҳзаи эълом шуданашон мавҷуданд.
Временная мертвая зона (Temporal Dead Zone) – термин, обозначающий состояние, в котором переменные недоступны. Они находятся в области видимости (scope), но не объявлены (not declared)

Чӣ тавр TDZ-ро пешгирӣ кардан мумкин аст?
Ба таври нисбатан оддӣ, ҳамеша боварӣ ҳосил кунед, ки let ва const-и худро дар қисми болоии доираи худ таъриф мекунед.

Майдони муваққатии беэътиборӣ:

   * pi; // ReferenceError (Майдони муваққатии беэътиборӣ)
   * const pi = 3.14; (Эълом ва ибтидоисозӣ)
   * pi; // => 3.14 (Дуруст ва коршоям)
  
<img src="./Снимок экрана 2025-01-10 143558.png">
