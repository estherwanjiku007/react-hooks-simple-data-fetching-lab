// create your App component here
import React, { useEffect, useState } from "react";
function App(){
    const [myImage,setMyImage]=useState([])
    const [isLoaded,setIsLoaded]=useState(false)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data)=>{
            setMyImage(data.message)
            setIsLoaded(true)
            console.log(data)
        })
        //fetchData()
    },[]
    
    )
/* async   function fetchData(){
const response=await fetch("https://dog.ceo/api/breeds/image/random")
const data=await response.json()
setMyImage(data)
setIsLoaded(true)
//console.log(data)
//console.log(myImage)
 }
// console.log(myImage)*/
 
    if(!isLoaded){
        return (
            <p>Loading...</p>
        )
    } 
        return(
            
                <img src={myImage} alt="A Random Dog"/>
            
        )
    }
     
    
    

export default App