// create your App component here
import React, { useEffect, useState } from "react";
function App(){
    const [myImage,setMyImage]=useState([])
    const [isLoaded,setIsLoaded]=useState(false)
    useEffect(()=>
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=>res.json())
    .then((data)=>{
        setMyImage(data)
        setIsLoaded(true)
    }
        )
    ,[])
    if(!isLoaded){
        return (
            <p>Loading...</p>
        )
    }
    /*else{
        {myImage.map((image)=>(
            <img src={image.src} alt="A Randon dog"/>
        ))}
    }*/
    return(
        <div>{myImage.map((image)=>(
            <img src={image} alt="A Randon dog"/>
        ))}</div>      
    )
}
export default App