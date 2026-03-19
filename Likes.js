"use client"

import { useState } from "react";

/*export default async function Likes() {
    await new Promise((resolve) => setTimeout(resolve, 6000))
    return <div>2k Likes</div>
}*/



export default    function Likes() {
    const [likesCount, setLikesCount] = useState(0);
    console.log(useState);
    /*if(typeof window !== "undefined") {
        console.log(window);
    }*/   
   //console.log(window);
   /*browser se related koi bhi cheez agar hum access karne ki kosiis karte hai to vo hume error dega
   console.log(localStorage); - it show an error */
   //console.log(localStorage)


   /*if(typeof localStorage !== "undefined") { - it solve 500 error
    console.log(localStorage);
   }*/
   console.log("Like components")
    return <div onClick={() => {
        setLikesCount((prev) => prev+1);
        //console.log("Like button clicked");
    }}>
        {likesCount} Likes
        
        </div>
}

//servers components execute only on the server
//client components execute on the server as well as client
