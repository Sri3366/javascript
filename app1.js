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
//perfotm addition,subtraction using function declaration
function calculation(a,b){
    console.log(`Addition:${a+b}`)
    console.log(`subtraction:${a-b}`)
}
calculation(5,2)

//perform multiplication and division using function expression
let maths= function(a,b){
    console.log("multiplication and subtraction:")
    console.log(a*b)
    console.log(a/b)
}
maths(4,6)

//print your family member names one by one using function declaration
//Here i used array to store family members
family_members=[
    "Mom",
  "Dad",
  "Sister Satya",
  "Brother gowtham",
  "Grandma navya"
]
function family(){
    for(let i=0;i<family_members.length;i++){
        console.log(family_members[i])
    }

}
family()
//Megthod-2
//Here i used array of objects to store family member
let familyMembers = [
    { 
        name: "Nagamani", 
        role: "Mom",
        age: 40
    },
    { 
        name: "Veera konda", 
        role: "Dad",
        age: 47 
    },
    { 
        name: "Sai mounika", 
        role: "Sister",
        age: 25
    },
    { 
        name: "sai lokesh", 
        role: "Brother",
        age: 24
    }
];

function FamilyDetails(membersArray) {
    
    for (let i = 0; i < membersArray.length; i++) {
        let currentMember = membersArray[i];
        
        let details = 
            `${currentMember.name} is my ${currentMember.role} (Age: ${currentMember.age})`;
        console.log(details)
    }
}
FamilyDetails(familyMembers);

//print "my name is abc my loc is hyd my age is 22"
//using method objects (keys=name,age,loc,data)
let bio = {
    name:"venkat",
    loc:"hyd",
    age:22,
    data:function(){
        console.log(`my name is ${this.name} and my age is ${this.age} and my location is ${this.loc}`)

    }
}
console.log(bio.data())