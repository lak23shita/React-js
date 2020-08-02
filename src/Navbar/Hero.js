
//error broundary
import React from "react"

//in this we are taking a map method to assign the names list to map function which containes parameter followed by arrow than the function we want to return

function Hero({heroName}){
    if(heroName =='Joker'){
        throw new Error('Not a hero')
    }
   
return(
            
            <div>
            {heroName}
            </div>
        )

}

export default Hero;