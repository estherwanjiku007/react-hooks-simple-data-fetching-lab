// create your App component here
import React, { useEffect, useState } from "react";
function App(){
    const [myImage,setMyImage]=useState([])
    const [isLoaded,setIsLoaded]=useState(false)
    useEffect(()=>
   fetchData(),[]
        
    )
 async   function fetchData(){
const response=await fetch("https://dog.ceo/api/breeds/image/random")
const data=await response.json()
setMyImage(data)
setIsLoaded(true)
console.log(data)
console.log(myImage)
 }
    if(!isLoaded){
        return (
            <p>Loading...</p>
        )
    }
    else{
        alert('ERROR loading data')
    }
    return(
        <div>{myImage.map((image)=>(
            <img src={image} alt="A Randon dog"/>
        ))}</div>      
    )
}
export default App