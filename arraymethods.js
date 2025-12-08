let ipl = ['Mumbai indians','sunrisers hyderabad','chennai super kings','Royal challengers bangalore']
let srh = ["Abhishek sharma","Travis head","Heinrich klaasen","Ishan kishan"]

//length
console.log(ipl.length)            //5 

//slice()
console.log(ipl.slice(1,3))

//splice(index number,deleting count,which element to be add)
console.log(ipl.splice(1,0,"ram","parusuram"))
console.log(ipl)

console.log(ipl.splice(1,2))
console.log(ipl)



//indexOf()
console.log(ipl.indexOf('chennai super kings'))  //1
console.log(ipl.indexOf('kiwi'))   //-1

//push()
console.log(ipl.push("kavyamaaran"))
console.log(ipl)

//pop()
console.log(ipl.pop())
console.log(ipl)

//unshift()
console.log(ipl.unshift("kavya"))
console.log(ipl)

//shift()
console.log(ipl.shift())
console.log(ipl)

console.log(ipl.shift())
console.log(ipl)

//sort()
console.log(ipl.sort())

//reverse()
console.log(ipl.reverse())

//includes()
console.log(ipl.includes("sunrisers hyderabad")) //True
console.log(ipl.includes("Sunrisers Hyderabad")) //false
console.log(ipl.includes("Bajji"))     //false

//concat()
console.log(ipl.concat(srh))

//join(): converts array into string
let propose = ["This","one","is","for","OrangeArmy"]
console.log(propose.join())

//split(): converts string into array
let cringe = "would you call mine"
console.log(cringe.split())

