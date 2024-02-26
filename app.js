// chaptar: 04
// Q no: 01

var fullName ="jonis"
var email = "jonis213@gmail.com"
var numbar = numbar =  9321098790
alert(" hello i am :"+" " +fullName+" "+" \n my email is :"+" "+email+" \n my contact number is :" +" " + numbar  ) ;

// Q no:2
document.write("<h1>","<br>Legal variable names:","</h1>")
document.write("01. myVar","<br>02. _myVar","<br>03. myVar2","<br>04. my_variable","<br>05. myVar_long_name")
document.write("<h1>","illegal Variable Names:","</h1> ")
document.write("01. 2myVar (cannot start with a number)",
"<br>02. my-Var (contains invalid character '-')",
"<br>03. my Var (contains space)",
"<br>04. my#Var (contains invalid character '#')",
"<br>05. class (reserved keyword in many programming languages)")
// Q no:3
var Rules=" Rules for naming JS variables";
 document.write ("<h1>"+ Rules +"</h1>");


var names = "Variable names can only contain, numbers, $ and dollar signs. For example, $my 1stVariable "
var example ="Variables must begin with a letter,$ or  dollar sign. For example : $name, _name, or name "
var dollar ="Variable names are case sensitive"
var begin ="Variable names should not be JS keywords"
document.write (names,"<br>",example,"<br>",dollar,"<br>",begin)


// chaptar: no2
// Q no:1
var numbar = 5
var numbars = 3
var numbarss= 3+5
document.write("<br> <br> <br> Sum of ",numbars ,"and", numbar, "is: ",numbarss)

// Q no:2

var num1= (10-5)
var num2 = (5*3)
var num3 =(50/9)
var num4 =(10%5)

document.write("<br> <br> <br>","10-5 =",num1,"<br>5*3 =",num2,"<br>50/9 =",num3,"<br>10%5 =",num4)

// Q no:3
var myvariable;
document.write("<br>","<br>","Value after variable declaration is: ", myvariable , "<br>")
myvariable = 5;
document.write("Initial value: ", myvariable ,"<br>");
myvariable++;
document.write("Value after increment is: ", myvariable, "<br>");
myvariable += 7;
document.write("Value after addition is: ", myvariable, "<br>");
myvariable--;
document.write("Value after decrement is: ", myvariable, "<br>");
var remainder = myvariable % 3;
document.write("The remainder is: ", remainder);






// Q no:4
var ticket =(600*5)
document.write("<br><br>total cost by 5 tickets to a movie is ",ticket,"PKR" )


// Q no:5
document.write("<h2>table of 4</h2>")
// var numbar= 4
// document.write (<h3>,"4x1=",numbar*1,"4x2=",4*2,"4x3=",4*3,"4x4=",4*4,"4x5=",4*5,"4x6=",4*6,"4x7=",4*7,"4x8=",4*8,"4x9=",4*9,"4x10=",4*10,</h3>)

var numbar=4
document.write("<h2>","4x1=",numbar*1,"<br>4x2=",numbar*2,"<br>4x3=",numbar*3,"<br>4x4=",numbar*4,"<br>4x5=",numbar*5,"<br>4x6=",numbar*6,"<br>4x7=",numbar*7,"<br>4x8=",numbar*8,"<br>4x9=",numbar*9,"<br>4x10=",numbar*10,"</h2>")

// Q6



// Q7
document.write("<h2>","Shoppping Cart","</h2>")

var first="Price of item 1 is 650"
var second="Quantity of item 1 is 3"
var third="Price of item 2 is 100"
var fourth="Quantity of item 2 is 7"
var fifth="Shipping charges 100"
document.write(first,"<br>",second,"<br>",third,"<br>",fourth,"<br>",fifth,"total cost of your order is = ",650*3+100*7+100)
// Q8
document.write("<h2>Marks Sheet</h2>");
var total="Total marks:980"
var marks="Marks obtained:804"
var perce="percentage:  "
document.write(total,"<br>",marks,"<br>",perce,804/980,"%")

// Q9
document.write("<h2>","Currency in PKR","</h2>")
document.write("Total Currency in <b>PKR:  </b>",10*104.80+25*28)

// Q10

document.write("<br><br>",100.29+5* 10/2)

// Q11
document.write("<h2>","Age Calcuator","</h2>")

var current = "Current Year: 2016"
var birth ="Birth Year: 1992"
var your ="Your Age is:"
document.write(current,"<br>",birth,"<br>",your,2016-1992) 

// Q12

var pi = 3.142
var radius = 20;
var circum = 2* pi * radius;

var area = 3.142 * (radius* radius);

document.write ("<br>","<br>","Radius of the Circle is = " , radius ,"<br>")
document.write("The cercumference is = ", circum ,"<br>");
document.write("The Area is = ", area , "<br>");





























