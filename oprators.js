let number1 = 3
let number2 = 5
let results;
// subtraaction
results=number1-number2
console.log(results)

let number3 = 3
let number4 = 5
// multiplication
results=number3*number4
console.log(results)

let number6 = 3
let number7 = 5
// divsion
results=number6/number7
console.log(results)

let number8 = 5
let number9 = 2
// module
results=number8%number9
console.log(results)

let x=5
x+=2;
console.log(x)

y=5
y%=2
console.log(y)

u=5
u/=4
console.log(u)

t=5
t*=2
console.log(t)

j=5
j-=2
console.log(j)

console.log(5=="5")
console.log(5==="5")
console.log(5!="5")
console.log(5!=="5")

console.log(5>3)
console.log(5<3)
console.log(5<=5)
console.log(5>=5)

let m=5
let c= 3
let admin = true
console.log(m>0 && c>0)
console.log(m<0 || c<0)
console.log(!admin)



let age =15
let checkAge=(age>=18)?"Adult" 
:"Minor"; 
console.log(checkAge)

let role="admin"
let access=(role==="admin")?
"admin access":
(role==="moderators")?
"limited access":
(role==="user")?
"basic access":
"access denied"
console.log(access)



 let name="GIFT"
 let hisAge=16
 let output="name is "+name+" and age is "+hisAge
 let output2=`name is ${name} and age is ${hisAge}`
 console.log(output2)
 console.log(output)

 let food="pizza"
 if(food==="pizza"){
    console.log(food+ " is available")
 }else if (food==="burger"){
    console.log(food+ " is avalaible")
 }else if (food==="doghunt"){
    console.log(food+ " is available" )
 }else{
    console.log("unavailable")
 }

 let role1="modrators"
if(role1==="admin"){
    console.log("user is admin")
}else if (role1==="modrator"){
    console.log("user is modrator")
}else if (role1==="basic user"){
    console.log("basic user")
}else{
    console.log("access denied")
}


let age1=20
checkAge=( age1 >= 20)? "adult" :"minor";  
console.log(checkAge)

let food1;
if(food1=="pizza"){
    console.log(food1+ " unavailable")
}else if (food1==="pie"){
    console.log(food1+ "available")
}else{
    console.log("type in please")
}
