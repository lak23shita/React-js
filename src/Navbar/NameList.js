//list rendering
import React from "react"
//import Person from './Person'

//in this we are taking a map method to assign the names list to map function which containes parameter followed by arrow than the function we want to return

function NameList (){
    const names=['lakshita','shita','mukul']
    const Person=[
        {
            id:3,
            age:56,
            name:'rio',
            skill:'vue'
        },
        {
            id:6,
            age:67,
            name:'lakshita',
            skill:'dhit'
        },
        {
            id:87,
            age:678,
            name:'haksi',
            skill:'bdjnk'
        }
    ]
     //in this name is the object which is used to assign the values to the dot operator
    //const PersonList=Person.map(person => (
        //this is included in the person.js file 
        // <h2>{person.id} and he was {person.age} and his name is {person.name} and his skills are {person.skill}</h2>

        //in this key is unique which is assigned to each value of the list
      //  <Person key={person.NameList} person={person} />
    //))
    //const names=['lakshita','rachit','golu']
   
    //const nameList=names.map(name=><h2>{name}</h2>)


//in this we have used a index which uniquely identify the objects in the list is even they are repeated
const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
return(
            // <div><h2>{nameList}</h2></div>
            <div>
                {/* {PersonList} */}
                {nameList}
            </div>
        )

}

export default NameList;
//this is only responsible to render the list